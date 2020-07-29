using AbaxXBRLCore.Common.Cache;
using AbaxXBRLCore.Common.Constants;
using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.Entities;
using AbaxXBRLCore.Repository;
using AbaxXBRLCore.Viewer.Application.Dto;
using Newtonsoft.Json;
using Spring.Transaction;
using Spring.Transaction.Interceptor;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Linq.Expressions;


namespace AbaxXBRLCore.Distribucion.Impl
{
    /// <summary>
    /// Implementación del servicio de distribución de documentos de instancia XBRL.
    /// Invoca las distribuciones configuradas para el documento de instancia XBRL,
    /// si no todas las distribuciones pendientes son existosas entonces se retorna el estado
    /// de que la distribución del documento no fue exitosa.
    /// </summary>
    public class ProcesarDistribucionDocumentoXBRLServiceImpl: IProcesarDistribucionDocumentoXBRLService
    {
        /// <summary>
        /// Lista de distribuciones generales para documentos de instancia XBRL
        /// </summary>
        public IList<IDistribucionDocumentoXBRL> Distribuciones { get; set; }
        /// <summary>
        /// Objeto repository para el acceso a los datos de bitacora version documento
        /// </summary>
        public IBitacoraVersionDocumentoRepository BitacoraVersionDocumentoRepository { get; set; }
        /// <summary>
        /// Objeto repository para el acceso a los datos de la versión del documento de instancia
        /// </summary>
        public IVersionDocumentoInstanciaRepository VersionDocumentoInstanciaRepository { get; set; }
        /// <summary>
        /// Objeto repository para el acceso a los datos de la bitácora por distribución
        /// </summary>
        public IBitacoraDistribucionDocumentoRepository BitacoraDistribucionDocumentoRepository { get; set; }
        /// <summary>
        /// Repository para el acceso a los parámetros de sistema
        /// </summary>
        public IParametroSistemaRepository ParametroSistemaRepository { get; set; }
        /// <summary>
        /// Acceso a los datos de una lista de distribución
        /// </summary>
        public IListaNotificacionRepository ListaNotificacionRepository { get; set; }
        /// <summary>
        /// Repository para consultar los datos de empresas
        /// </summary>
        public IDocumentoInstanciaRepository DocumentoInstanciaRepository { get; set; }
        /// <summary>
        /// Manejadro del caché en memoria de la taxonomía XBRL
        /// </summary>
        public ICacheTaxonomiaXBRL CacheTaxonomia { get; set; }
        /// <summary>
        /// Servicio para el envío de mails
        /// </summary>
        public MailUtil MailUtil { get; set; }
        /// <summary>
        /// Template para el mail de exito de distribución
        /// </summary>
        public String TemplateMailExito { get; set; }

        /// <summary>
        /// Template para el mail de error de distribución
        /// </summary>
        public String TemplateMailError { get; set; }
        /// <summary>
        /// Bandera que indica si se debe de forzar la carga por esquema HTTPS.
        /// </summary>
        private bool ForzarHttp { get; set; }
        /// <summary>
        /// Constructor por defecto.
        /// </summary>
        public ProcesarDistribucionDocumentoXBRLServiceImpl()
        {
            bool _forzarEsquemaHttp = false;
            var paramForzarHttp = System.Configuration.ConfigurationManager.AppSettings.Get("ForzarEsquemaHttp");
            if (!String.IsNullOrEmpty(paramForzarHttp))
            {
                Boolean.TryParse(paramForzarHttp, out _forzarEsquemaHttp);
                //LogUtil.Info("Valor del parámetro: ForzarEsquemaHttp = " + _forzarEsquemaHttp);
            }
            ForzarHttp = _forzarEsquemaHttp;
        }
        /// <summary>
        /// Ejecuta todas las distribuciones pendientes configuradas para el documento de instancia XBRL enviado como parámetro.
        /// Si alguna distribución falla entonces se marca como no exitosa en la bitácora y se retorna el estatus de fallo, 
        /// aunque una distribución falle se continúa con otras distribuciones pendientes.
        /// </summary>
        /// <param name="instancia">Documento de instancia a distribuir</param>
        /// <param name="parametros">Parametros adicionales generados para la distribución</param>
        /// <returns>Resultado general de la operación de distribución</returns>
        [Transaction(TransactionPropagation.NotSupported)]
        public ResultadoOperacionDto DistribuirDocumentoInstanciaXBRL(long idDocumentoInstancia, long version, IDictionary<string, object> parametros)
        {
            LogUtil.Info("Iniciando las distribuciones del documento XBRL:" + idDocumentoInstancia + ", version:" + version);
            var resultado = new ResultadoOperacionDto();
            //Obtener la bitácora de la distribución de este documento
            VersionDocumentoInstanciaRepository.DbContext.Database.CommandTimeout = 380;
            var versionDocumento = VersionDocumentoInstanciaRepository.GetQueryable().Where(x => x.IdDocumentoInstancia == idDocumentoInstancia && x.Version == version).FirstOrDefault();
            if (versionDocumento == null)
            {
                LogUtil.Error("No se encontró la versión del documento de instancia:" + idDocumentoInstancia + " version " + version);
                resultado.Resultado = false;
                resultado.Mensaje = "No se encontró el registro de Versión de Documento de Instancia ID:" + idDocumentoInstancia + " version " + version;
                return resultado;
            }
            var bitacora = BitacoraVersionDocumentoRepository.GetQueryable().Where(x => x.IdVersionDocumentoInstancia == versionDocumento.IdVersionDocumentoInstancia).FirstOrDefault();
            if (bitacora == null) {
                LogUtil.Error("No se encontró el registro de Bitácora de Documento de Instancia ID:" + versionDocumento.IdVersionDocumentoInstancia);
                resultado.Resultado = false;
                resultado.Mensaje = "No se encontró el registro de Bitácora de Documento de Instancia ID:" + versionDocumento.IdVersionDocumentoInstancia;
                return resultado;
            }
            if (bitacora.Estatus == DistribucionDocumentoConstants.DISTRIBUCION_ESTATUS_APLICADO) {
                LogUtil.Error("El estatus de la distribución del documento ya es \"Aplicado\", no se ejecuta distribución para el documento \"" + idDocumentoInstancia + "\" version " + version);
                resultado.Resultado = true;
                resultado.Mensaje = "El estatus de la distribución del documento ya es \"Aplicado\", no se ejecuta distribución para el documento \"" + idDocumentoInstancia + "\" version " + version;
                return resultado;
            }
            String newData = ZipUtil.UnZip(versionDocumento.Datos);
            versionDocumento.Datos = null;
            System.GC.Collect();
            LogUtil.Info("Memoria usada:" + System.GC.GetTotalMemory(true));
            var documentoInstanciaXbrlDto = JsonConvert.DeserializeObject<DocumentoInstanciaXbrlDto>(newData);
            newData = null;
            documentoInstanciaXbrlDto.IdDocumentoInstancia = bitacora.IdDocumentoInstancia;
            documentoInstanciaXbrlDto.Version = bitacora.VersionDocumentoInstancia.Version;
            documentoInstanciaXbrlDto.Taxonomia = ObtenerTaxonomia(documentoInstanciaXbrlDto.DtsDocumentoInstancia);
            var fechaRecepcion = DocumentoInstanciaRepository.GetQueryable().Where(x => x.IdDocumentoInstancia == idDocumentoInstancia).Select(x => x.FechaCreacion).FirstOrDefault();
            if (parametros == null)
            {
                parametros = new Dictionary<string, object>();
            }
            if (!parametros.ContainsKey("FechaRecepcion"))
            {
                parametros.Add("FechaRecepcion",fechaRecepcion);
            }
            var bitacorasAActualizar = new List<BitacoraDistribucionDocumento>();

            if (documentoInstanciaXbrlDto.Taxonomia == null)
            {
                resultado.Resultado = false;
                resultado.Mensaje = "Ocurrió un error al obtener la taxonomía del documento";
            }
            else
            {
                resultado.Resultado = true;
                //aplicar cada una de las distribuciones
                foreach (var dist in Distribuciones)
                {
                    var bitacoraDist = ObtenerOCrearBitacoraDistribucionExitosa(dist, bitacora);
                    if (bitacoraDist.Estatus != DistribucionDocumentoConstants.DISTRIBUCION_ESTATUS_APLICADO)
                    {
                        ResultadoOperacionDto resultadoDist = null;
                        try
                        {
                            resultadoDist = dist.EjecutarDistribucion(documentoInstanciaXbrlDto, parametros);
                            if (!resultadoDist.Resultado && resultadoDist.Mensaje.Equals("NA")) 
                            {
                                continue;
                            }

                        }
                        catch (Exception ex)
                        {
                            resultadoDist = new ResultadoOperacionDto();
                            resultadoDist.Resultado = false;
                            resultadoDist.Mensaje = ex.Message;
                            resultadoDist.Excepcion = ex.StackTrace;
                        }

                        if (!resultadoDist.Resultado)
                        {
                            LogUtil.Error("Falló distribución de documento, Id Documento:" + idDocumentoInstancia + " Error:" + resultadoDist.Mensaje);
                            LogUtil.Error(resultadoDist.Excepcion);
                            resultado.Resultado = false;
                            resultado.Mensaje = "Al menos una distribución falló en su ejecución";
                            bitacoraDist.Estatus = DistribucionDocumentoConstants.DISTRIBUCION_ESTATUS_ERROR;
                            bitacoraDist.FechaUltimaModificacion = DateTime.Now;
                            bitacoraDist.MensajeError = resultadoDist.Mensaje;
                        }
                        else
                        {
                            bitacoraDist.Estatus = DistribucionDocumentoConstants.DISTRIBUCION_ESTATUS_APLICADO;
                            bitacoraDist.FechaUltimaModificacion = DateTime.Now;
                            bitacoraDist.MensajeError = null;
                        }
                        bitacoraDist.IdBitacoraVersionDocumento = bitacora.IdBitacoraVersionDocumento;
                        ActualizarBitacoraDistribucion(bitacoraDist);
                        LogUtil.Info("Memoria usada:" + System.GC.GetTotalMemory(true));
                    }
                    
                }
                System.GC.Collect();
            }

            ActualizarBitacoraVersionDocumento(bitacora.IdBitacoraVersionDocumento,resultado);

            
            resultado.InformacionAuditoria = new InformacionAuditoriaDto() { 
                Accion = ConstantsAccionAuditable.Insertar,
                Empresa = null,
                Fecha = DateTime.Now,
                IdUsuario = null,
                Modulo = ConstantsModulo.ServicioAlmacenamientoDocumentosXBRL,
                Registro = "Procesamiento de distribuciones XBRL para documento de instancia:" + idDocumentoInstancia
            };
            NotificarAListaDeDistribucion(bitacora,documentoInstanciaXbrlDto);
            documentoInstanciaXbrlDto.Cerrar();
            System.GC.Collect(0, GCCollectionMode.Forced, true);
            System.GC.Collect(1, GCCollectionMode.Forced, true);
            return resultado;
        }

        [Transaction(TransactionPropagation.RequiresNew)]
        private void ActualizarBitacoraDistribucion(BitacoraDistribucionDocumento bitacoraDist)
        {
            if (bitacoraDist.IdBitacoraDistribucionDocumento == 0)
            {
                BitacoraDistribucionDocumentoRepository.Add(bitacoraDist);
            }
            else
            {
                BitacoraDistribucionDocumentoRepository.Update(bitacoraDist);
            }
        }

        [Transaction(TransactionPropagation.RequiresNew)]
        private void ActualizarBitacoraVersionDocumento(long idBitacoraVersionDocumento, ResultadoOperacionDto resultado)
        {
            var bitacora = BitacoraVersionDocumentoRepository.DbContext.BitacoraVersionDocumento.Find(idBitacoraVersionDocumento);
            if (resultado.Resultado)
            {
                bitacora.Estatus = DistribucionDocumentoConstants.DISTRIBUCION_ESTATUS_APLICADO;
                bitacora.FechaUltimaModificacion = DateTime.Now;
                bitacora.MensajeError = null;
            }
            else
            {
                bitacora.Estatus = DistribucionDocumentoConstants.DISTRIBUCION_ESTATUS_ERROR;
                bitacora.MensajeError = resultado.Mensaje;
                bitacora.FechaUltimaModificacion = DateTime.Now;
            }
            try
            {
                BitacoraVersionDocumentoRepository.Update(bitacora);
            }
            catch (InvalidOperationException exeption)
            {
                LogUtil.Error(exeption);
                BitacoraVersionDocumentoRepository.ActualizaEstadoVersionDocumento(
                    bitacora.IdBitacoraVersionDocumento,
                    bitacora.Estatus,
                    bitacora.FechaUltimaModificacion,
                    bitacora.MensajeError);
            }
        }

        /// <summary>
        /// Obtiene una taxonomía del caché o la carga y agrega en caso de no encontrarse
        /// </summary>
        /// <param name="listaDts"></param>
        /// <returns></returns>
        private TaxonomiaDto ObtenerTaxonomia(IList<DtsDocumentoInstanciaDto> listaDts)
        {
            var tax = CacheTaxonomia.ObtenerTaxonomia(listaDts);
            if (tax == null)
            {
                //Cargar taxonomía si no se encuentra en cache
                var errores = new List<ErrorCargaTaxonomiaDto>();
                var xpe = AbaxXBRLCore.XPE.impl.XPEServiceImpl.GetInstance(ForzarHttp);
                tax = xpe.CargarTaxonomiaXbrl(listaDts.Where(x => x.Tipo == DtsDocumentoInstanciaDto.SCHEMA_REF).First().HRef, errores, false);
                if (tax != null)
                {
                    CacheTaxonomia.AgregarTaxonomia(listaDts, tax);
                }
                else
                {
                    LogUtil.Error("Error al cargar taxonomía:" + listaDts.Where(x => x.Tipo == DtsDocumentoInstanciaDto.SCHEMA_REF).First().HRef);
                    foreach(var error in errores)
                    {
                        LogUtil.Error(error.Mensaje);
                    }
                }
            }
            return tax;
        }
        /// <summary>
        /// Envía el correo de notificación a la lista de distribución:
        /// En caso de procesamiento existoso, a la lista de distribución para un procesamiento exitoso
        /// En caso de un procesamiento no existoso a la lista de distribución para un procesamiento no exitoso
        /// Estas listas están dadas por parámetros de configuración generales
        /// </summary>
        /// <param name="bitacora">Objeto de bitácora actualmente procesado</param>
        private void NotificarAListaDeDistribucion(BitacoraVersionDocumento bitacora,DocumentoInstanciaXbrlDto documentoInstancia)
        {
            ParametroSistema paramLista = null;
            if(bitacora.Estatus == DistribucionDocumentoConstants.DISTRIBUCION_ESTATUS_APLICADO){
                paramLista = ParametroSistemaRepository.GetQueryable(x => x.Nombre.Equals(ConstantsParametrosSistema.CLAVE_PARAM_LISTA_DIST_EXITO_XBRL)).FirstOrDefault();
            }else if(bitacora.Estatus == DistribucionDocumentoConstants.DISTRIBUCION_ESTATUS_ERROR){
                paramLista = ParametroSistemaRepository.GetQueryable(x => x.Nombre.Equals(ConstantsParametrosSistema.CLAVE_PARAM_LISTA_DIST_ERROR_XBRL)).FirstOrDefault();
            }
            if (paramLista != null) {
                
                var lista = ListaNotificacionRepository.ObtenerListaNotificacionCompletaPorClave(paramLista.Valor);
                if (lista != null) {
                    
                    EnviarCorreoALista(lista,bitacora,documentoInstancia);
                }
            }
            
        }
        /// <summary>
        /// Envia un correo a la lista de notificación enviada como parámetro.
        /// El contenido del correo depende del estatus de la bitácoa.
        /// </summary>
        /// <param name="lista">Lista a enviar</param>
        /// <param name="bitacora">Bitácora que se procesó</param>
        private void EnviarCorreoALista(ListaNotificacion lista, BitacoraVersionDocumento bitacora,DocumentoInstanciaXbrlDto documentoInstancia)
        {
            var empresa = DocumentoInstanciaRepository.ObtenerEmpresaDeDocumento(bitacora.IdDocumentoInstancia);

            var cuerpoCorreo = "";
            if (bitacora.Estatus == DistribucionDocumentoConstants.DISTRIBUCION_ESTATUS_APLICADO)
            {
                cuerpoCorreo = TemplateMail.ObtenerContenidoTemplateHtml(TemplateMailExito);
            }
            else if (bitacora.Estatus == DistribucionDocumentoConstants.DISTRIBUCION_ESTATUS_ERROR)
            {
                cuerpoCorreo = TemplateMail.ObtenerContenidoTemplateHtml(TemplateMailError);
            }

            var destinatarios = new StringBuilder();
            foreach(var destinatario in lista.DestinatarioNotificacion)
            {
                if(destinatarios.Length>0){
                    destinatarios.Append(",");
                }
                destinatarios.Append(destinatario.CorreoElectronico);
            }
            try
            {
                LogUtil.Info("Enviando correo a lista de distribución:" + lista.ClaveLista);
                MailUtil.EnviarEmail(destinatarios.ToString(), lista.TituloMensaje, String.Format(cuerpoCorreo, documentoInstancia.Titulo??"null",empresa!=null?empresa.NombreCorto:""));
            }
            catch (Exception ex) {
                LogUtil.Error("Falló el envío de correo por el host:" +MailUtil.S_HOST);
                LogUtil.Error(ex);
            }
        }
        /// <summary>
        /// Crea u obtiene la bitácora de distribución de documentos de una distribución en específico
        /// </summary>
        /// <param name="dist">Distribución actualmente ejecutada</param>
        /// <param name="idBitacoraVersionDocumento">Identificador de la bitácora del documento</param>
        /// <returns>Bitácora de distribución que corresponde a la distribución actual y al documento</returns>
        private BitacoraDistribucionDocumento ObtenerOCrearBitacoraDistribucionExitosa(IDistribucionDocumentoXBRL dist, BitacoraVersionDocumento bitacoraVersionDocumento)
        {
            var bitacora = BitacoraDistribucionDocumentoRepository.GetQueryable().
                Where(x => x.IdBitacoraVersionDocumento == bitacoraVersionDocumento.IdBitacoraVersionDocumento && x.CveDistribucion.Equals(dist.ClaveDistribucion) && 
                    x.Estatus == DistribucionDocumentoConstants.DISTRIBUCION_ESTATUS_APLICADO).FirstOrDefault();

            if (bitacora == null) { 
                //crear bitácora
                bitacora = new BitacoraDistribucionDocumento() { 
                    CveDistribucion = dist.ClaveDistribucion,
                    Estatus = DistribucionDocumentoConstants.DISTRIBUCION_ESTATUS_PENDIENTE,
                    FechaRegistro = DateTime.Now,
                    FechaUltimaModificacion = DateTime.Now
                };
                
            }
            return bitacora;
        }
    }
}
