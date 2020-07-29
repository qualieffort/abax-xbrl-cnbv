using AbaxXBRLCore.Common.Cache;
using AbaxXBRLCore.Viewer.Application.Dto;
using AbaxXBRLCore.Common.Constants;
using AbaxXBRLCore.Common.Converter;
using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.Entities;
using AbaxXBRLCore.Repository;
using AbaxXBRLCore.Repository.Implementation;
using AbaxXBRLCore.XPE.Common;
using AbaxXBRLCore.XPE.impl;
using Ionic.Zip;
using Newtonsoft.Json;
using Spring.Transaction;
using Spring.Transaction.Interceptor;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Data.Entity;
using AbaxXBRLCore.Distribucion.Ems;
using AbaxXBRL.Util;
using AbaxXBRLCore.Validador.Impl;
using AbaxXBRLCore.Viewer.Application.Model;
using Microsoft.Practices.ServiceLocation;
using Spring.Context;
using System.Text.RegularExpressions;
using AbaxXBRLCore.Common.Dtos;

namespace AbaxXBRLCore.Services.Implementation
{
    /// <summary>
    /// Implementación del servicio de negocio para atender las solicitudes de almacenamiento 
    /// de documento de instancia XBRL
    /// </summary>
    public class AlmacenarDocumentoInstanciaService : IAlmacenarDocumentoInstanciaService, IApplicationContextAware
    {
        /// <summary>
        /// Objeto que permite el acceso a los datos de la base de datos
        /// </summary>
        public IDocumentoInstanciaRepository DocumentoInstanciaRepository { get; set; }
        /// <summary>
        /// Repository para el acceso a la tabla de DtsDocumentoInstancia
        /// </summary>
        public IDtsDocumentoInstanciaRepository DtsDocumentoInstanciaRepository { get; set; }
        /// <summary>
        /// Objeto que permite el acceso a los datos de las versiones de un documento de instancia
        /// </summary>
        public IVersionDocumentoInstanciaRepository VersionDocumentoInstanciaRepository { get; set; }
        /// <summary>
        /// Definición de repositorio para el registro sobre la el proceso de registros de una versión de un documento
        /// Insstancia
        /// </summary>
        public IBitacoraVersionDocumentoRepository BitacoraVersionDocumentoRepository { get; set; }
        /// <summary>
        /// Objeto de repository para el acceso a empresas
        /// </summary>
        public IEmpresaRepository EmpresaRepository { get; set; }
        /// <summary>
        /// Objeto de repository para el acceso a empresas
        /// </summary>
        public IDocumentoInstanciaService DocumentoInstanciaService { get; set; }

        /// <summary>
        /// Objeto de caché de taxonomía
        /// </summary>
        public ICacheTaxonomiaXBRL CacheTaxonomia { get; set; }
        /// <summary>
        /// Repositorio de archivo de documento de instancia.
        /// </summary>
        public IArchivoDocumentoInstanciaRepository ArchivoDocumentoInstanciaRepository {get; set; }
        /// <summary>
        /// Servicio para el almacenamiento de rachivos.
        /// </summary>
        public IBitacoraDistribucionDocumentoRepository BitacoraDistribucionDocumentoRepository { get; set; }

        /// <summary>
        /// Application context relacionado con la creación de este objeto 
        /// </summary>
        private IApplicationContext applicarionContext = null;
        /// <summary>
        /// Expersión regular que recibe los periodo con formato YYYY - MM.
        /// </summary>
        private static Regex REGEXP_ANO_PERIODO = new Regex(@"^\d{4}.+\d{1,2}$", RegexOptions.Compiled | RegexOptions.Multiline);
        /// <summary>
        /// Expersión regular que recibe los periodo con formato YYYY.
        /// </summary>
        private static Regex REGEXP_ANO = new Regex(@"^\d{4}$", RegexOptions.Compiled | RegexOptions.Multiline);

        /// <summary>
        /// Expersión regular que recibe los periodo con formato YYYY.
        /// </summary>
        private static Regex REGEXP_DOS_DIGITOS = new Regex(@"\d{1,2}", RegexOptions.Compiled | RegexOptions.Multiline);
        public IApplicationContext ApplicationContext
        {
            set
            {
                applicarionContext = value;
            }
        }
        /// <summary>
        /// Bandera que indica si se debe de forzar la carga por esquema HTTPS.
        /// </summary>
        private bool ForzarHttp { get; set; }
        /// <summary>
        /// Constructor por defecto.
        /// </summary>
        public AlmacenarDocumentoInstanciaService()
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
        /// Obtiene la definición de plantilla ara el documento de instancia indicado.
        /// </summary>
        /// <param name="documentoInstancia">Documento de instancia del que se requiere la definición de plantilla.</param>
        /// <returns>Definición de plantilla para el documento de instancia solicitado.</returns>
        private IDefinicionPlantillaXbrl ObtenDefinicionPlantilla(DocumentoInstanciaXbrlDto documentoInstancia)
        {
            var espacioNombres = documentoInstancia.EspacioNombresPrincipal;
            if (String.IsNullOrEmpty(espacioNombres) && documentoInstancia.Taxonomia != null)
            {
                espacioNombres = documentoInstancia.Taxonomia.EspacioNombresPrincipal;
            }
            if (String.IsNullOrEmpty(espacioNombres))
            {
                throw new NullReferenceException("No fué posible obtener el espacio de nombres del documento.");
            }
            var idBean = espacioNombres.Replace("/", "_").Replace(" ", "_").Replace("-", "_").Replace(":", "_").Replace(".", "_");
            var plantilla = (IDefinicionPlantillaXbrl)applicarionContext.GetObject(idBean);
            return plantilla;
        }
        /// <summary>
        /// Obtiene los parametros de configuración del documento de instancia.
        /// </summary>
        /// <param name="documentoInstancia">Documento de instancia a evaluar.</param>
        /// <returns>Parametros de configuración determinados para le documento de instancia dado.</returns>
        private IDictionary<string, string> ObtenParametrosConfiguracion(DocumentoInstanciaXbrlDto documentoInstancia, IDictionary<string, string> parametros)
        {

            IDictionary<string, string> parametrosConfiguracion = null;
            IDefinicionPlantillaXbrl plantilla = null;
            if (parametros == null)
            {
                parametros = new Dictionary<string, string>();
            }
            try
            {
                plantilla = ObtenDefinicionPlantilla(documentoInstancia);
                parametrosConfiguracion = plantilla.DeterminaParametrosConfiguracionDocumento(documentoInstancia);
                if (parametrosConfiguracion != null && parametrosConfiguracion.Count > 0)
                {

                    foreach (var nombreParametro in parametrosConfiguracion.Keys)
                    {
                        if(!parametros.ContainsKey(nombreParametro))
                        {
                            string valorParametro = null;
                            if (parametrosConfiguracion.TryGetValue(nombreParametro, out valorParametro))
                            {
                                parametros.Add(nombreParametro, valorParametro);
                            }
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
            }
            
            return parametros;
        }

        public ResultadoRecepcionSobreXBRLDTO ObtenerValoresSobre(DocumentoInstanciaXbrlDto sobreDto) {
            ResultadoRecepcionSobreXBRLDTO resultadoRecepcionSobreXBRLDTO = new ResultadoRecepcionSobreXBRLDTO();
            resultadoRecepcionSobreXBRLDTO.anioReportado = DocumentoInstanciaService.obtenerValorEnteroShort(XbrlSobreUtil.ID_ANIO_REPORTADO, sobreDto);
            resultadoRecepcionSobreXBRLDTO.claveCotizacion = DocumentoInstanciaService.obtenerValorNoNumerico(XbrlSobreUtil.ID_CLAVE_COTIZACION, sobreDto);
            resultadoRecepcionSobreXBRLDTO.claveParticipante = DocumentoInstanciaService.obtenerValorNoNumerico(XbrlSobreUtil.ID_CLAVE_PARTICIPANTE, sobreDto);
            resultadoRecepcionSobreXBRLDTO.comentarios = DocumentoInstanciaService.obtenerValorNoNumerico(XbrlSobreUtil.ID_COMENTARIOS, sobreDto);
            resultadoRecepcionSobreXBRLDTO.entryPointArchivoAdjunto = DocumentoInstanciaService.obtenerValorNoNumerico(XbrlSobreUtil.ID_ENTRY_POINT_ARCHIVO, sobreDto);
            resultadoRecepcionSobreXBRLDTO.espacioNombresArchivoAdjunto = DocumentoInstanciaService.obtenerValorNoNumerico(XbrlSobreUtil.ID_ESPACIO_NOMBRES_ARCHIVO, sobreDto);
            resultadoRecepcionSobreXBRLDTO.fechaFinReporte = DocumentoInstanciaService.obtenerValorFecha(XbrlSobreUtil.ID_FECHA_FIN_REPORTADO, sobreDto);
            resultadoRecepcionSobreXBRLDTO.fechaInicioReporte = DocumentoInstanciaService.obtenerValorFecha(XbrlSobreUtil.ID_FECHA_INICIO_REPORTADO, sobreDto);
            resultadoRecepcionSobreXBRLDTO.mesReportado = DocumentoInstanciaService.obtenerValorEnteroShort(XbrlSobreUtil.ID_MES_REPORTADO, sobreDto);
            resultadoRecepcionSobreXBRLDTO.nombreArchivoAdjunto = DocumentoInstanciaService.obtenerValorNoNumerico(XbrlSobreUtil.ID_NOMBRE_ARCHIVO, sobreDto);
            resultadoRecepcionSobreXBRLDTO.numeroFideicomiso = DocumentoInstanciaService.obtenerValorNoNumerico(XbrlSobreUtil.ID_NUM_FIDEICOMISO, sobreDto);
            resultadoRecepcionSobreXBRLDTO.parametrosAdicionales = DocumentoInstanciaService.obtenerValorNoNumerico(XbrlSobreUtil.ID_PARAMETROS_ADICIONALES, sobreDto);
            resultadoRecepcionSobreXBRLDTO.razonSocial = DocumentoInstanciaService.obtenerValorNoNumerico(XbrlSobreUtil.ID_RAZON_SOCIAL, sobreDto);
            resultadoRecepcionSobreXBRLDTO.razonSocialParticipante = DocumentoInstanciaService.obtenerValorNoNumerico(XbrlSobreUtil.ID_RAZON_SOCIAL_PARTICIPANTE, sobreDto);
            resultadoRecepcionSobreXBRLDTO.semestreReportado = DocumentoInstanciaService.obtenerValorEnteroShort(XbrlSobreUtil.ID_SEMESTRE_REPORTADO, sobreDto);
            resultadoRecepcionSobreXBRLDTO.tipoArchivoAdjunto = DocumentoInstanciaService.obtenerValorNoNumerico(XbrlSobreUtil.ID_TIPO_XBRL_ADJUNTO, sobreDto);
            resultadoRecepcionSobreXBRLDTO.tipoEnvio = DocumentoInstanciaService.obtenerValorNoNumerico(XbrlSobreUtil.ID_TIPO_ENVIO, sobreDto);
            resultadoRecepcionSobreXBRLDTO.trimestreReportado = DocumentoInstanciaService.obtenerValorNoNumerico(XbrlSobreUtil.ID_TRIMESTRE_REPORTADO, sobreDto);
            resultadoRecepcionSobreXBRLDTO.archivoAdjuntoB64 = DocumentoInstanciaService.obtenerValorNoNumerico(XbrlSobreUtil.ID_XBRL_ADJUNTO, sobreDto);

            resultadoRecepcionSobreXBRLDTO.firmasElectronicas = ObtenerFirmas(sobreDto);                        

            return resultadoRecepcionSobreXBRLDTO;
        }

        public ResultadoOperacionDto ObtenerPathTemporalXBRLAdjunto(ResultadoRecepcionSobreXBRLDTO resultadoRecepcionSobreXBRLDTO)
        {
            var resultadoOp = new ResultadoOperacionDto();


            if (resultadoRecepcionSobreXBRLDTO.archivoAdjuntoB64 != null && resultadoRecepcionSobreXBRLDTO.nombreArchivoAdjunto != null && resultadoRecepcionSobreXBRLDTO.tipoArchivoAdjunto != null)
            {
                //Convertimos el b64 del adjunto a un archivo temporal con la información del sobre
                Byte[] bytes = Convert.FromBase64String(resultadoRecepcionSobreXBRLDTO.archivoAdjuntoB64);

                var tipoArchivo = "";
                if (resultadoRecepcionSobreXBRLDTO.tipoArchivoAdjunto.Equals(XbrlSobreUtil.TIPO_ADJUNTO_XBRL) || resultadoRecepcionSobreXBRLDTO.tipoArchivoAdjunto.Equals(XbrlSobreUtil.TIPO_ADJUNTO_ZIP))
                {
                    tipoArchivo = resultadoRecepcionSobreXBRLDTO.tipoArchivoAdjunto;
                }
                else
                {
                    resultadoOp.Mensaje = "El Sobre no incluye un documento XBRL o un ZIP.";
                    resultadoOp.Resultado = false;
                    return resultadoOp;
                }

                var tmpDir = UtilAbax.ObtenerDirectorioTemporal();
                DocumentoInstanciaXbrlDto documentoXbrl = new DocumentoInstanciaXbrlDto();
                var pathXbrlAdjunto = tmpDir.FullName.Replace("tmp", tipoArchivo);
                File.WriteAllBytes(pathXbrlAdjunto, bytes);

                resultadoOp.InformacionExtra = pathXbrlAdjunto;

            }

            resultadoOp.Resultado = true;

            return resultadoOp;
        }



        public ResultadoOperacionDto ObtenerFirmasXBRLSobre(Stream archivoXBRL, String rutaCompletaArchivo, String nombreArchivo)
        {
            var resultadoOp = new ResultadoOperacionDto();
            var xbrlService = XPEServiceImpl.GetInstance(ForzarHttp);
            if (xbrlService.GetErroresInicializacion() != null && xbrlService.GetErroresInicializacion().Count > 0)
            {                   
                resultadoOp.Mensaje = "Procesador XBRL no fue inicializado correctamente:";
                foreach (var errorInicializacion in xbrlService.GetErroresInicializacion())
                {
                    resultadoOp.Mensaje += errorInicializacion.Mensaje + "\n\r";
                }
                resultadoOp.Resultado = false;
                return resultadoOp;
            }
            DocumentoInstanciaXbrlDto documentoXbrl = null;
            var idTipoArchivo = TipoArchivoConstants.ArchivoXbrl;
            if (nombreArchivo.ToLower().EndsWith(CommonConstants.ExtensionXBRL))
            {
                var rutaArchivoCopia = rutaCompletaArchivo + "copy";


                File.Copy(rutaCompletaArchivo, rutaArchivoCopia);
                documentoXbrl = ProcesarArchivoXBRL(rutaArchivoCopia, resultadoOp);
                documentoXbrl.Titulo = nombreArchivo;
            }
            else if (nombreArchivo.ToLower().EndsWith(CommonConstants.ExtensionZIP))
            {
                documentoXbrl = ProcesarArchivoZip(rutaCompletaArchivo, resultadoOp);
                idTipoArchivo = TipoArchivoConstants.ArchivoXbrlZip;
            }
            else
            {
                resultadoOp.Resultado = false;
                resultadoOp.Mensaje = "El archivo a almacenar debe tener extensión ZIP o XBRL";
            }
            //El documento es legible
            if (documentoXbrl != null)
            {
                ResultadoRecepcionSobreXBRLDTO resultadoRecepcionSobreXBRLDTO = new ResultadoRecepcionSobreXBRLDTO();
                resultadoRecepcionSobreXBRLDTO = ObtenerValoresSobre(documentoXbrl);


                string json = JsonConvert.SerializeObject(resultadoRecepcionSobreXBRLDTO);
                var tmpDir = UtilAbax.ObtenerDirectorioTemporal();
                var pathJson = tmpDir.FullName.Replace("tmp", "json");
                using (StreamWriter jsonWriter = File.AppendText(pathJson)) {

                    jsonWriter.WriteLine(json);

                    jsonWriter.Close();
                }

                FirmasXBRLSobreDTO firmasXbrlSobreDTO = new FirmasXBRLSobreDTO();
                firmasXbrlSobreDTO.ListadoFirmas = resultadoRecepcionSobreXBRLDTO.firmasElectronicas;
                firmasXbrlSobreDTO.PathXbrlSobreDtoJson = pathJson;

                resultadoOp.Resultado = true;
                resultadoOp.InformacionExtra = firmasXbrlSobreDTO;

                documentoXbrl.Cerrar();
                documentoXbrl = null;
            }
            return resultadoOp;
        }

        public IList<FirmaElectronicaDTO> ObtenerFirmas(DocumentoInstanciaXbrlDto sobreDTO) {
            IList<FirmaElectronicaDTO> ListadoFirmas = new List<FirmaElectronicaDTO>();

            IDictionary<string, string> Correos = new Dictionary<string, string>();
            IDictionary<string, string> Firmas = new Dictionary<string, string>();
            IDictionary<string, string> HuellasDigitales = new Dictionary<string, string>();

            IList<String> IdHechosCorreo = new List<string>();
            sobreDTO.HechosPorIdConcepto.TryGetValue(XbrlSobreUtil.ID_CORREO_ELECTRONICO_FIRMA, out IdHechosCorreo);
            foreach (String IdHechoCorreo in IdHechosCorreo)
            {
                Viewer.Application.Dto.HechoDto HechoCorreo = new Viewer.Application.Dto.HechoDto();
                sobreDTO.HechosPorId.TryGetValue(IdHechoCorreo, out HechoCorreo);
                if (HechoCorreo != null)
                {
                    Viewer.Application.Dto.ContextoDto contextoCorreo = new Viewer.Application.Dto.ContextoDto();
                    sobreDTO.ContextosPorId.TryGetValue(HechoCorreo.IdContexto, out contextoCorreo);
                    if (contextoCorreo != null && contextoCorreo.ValoresDimension != null && contextoCorreo.ValoresDimension.Count == 1)
                    {
                        String elementoSecuencia =
                                contextoCorreo.Id;
                        if (elementoSecuencia != null)
                        {
                            Correos.Add(elementoSecuencia, HechoCorreo.Valor);
                        }
                    }
                }
            }

            IList<String> IdHechosFirma = new List<string>();
            sobreDTO.HechosPorIdConcepto.TryGetValue(XbrlSobreUtil.ID_CONTENIDO_FIRMA, out IdHechosFirma);
            foreach (String IdHechoFirma in IdHechosFirma)
            {
                Viewer.Application.Dto.HechoDto HechoFirma = new Viewer.Application.Dto.HechoDto();
                sobreDTO.HechosPorId.TryGetValue(IdHechoFirma, out HechoFirma);
                if (HechoFirma != null)
                {
                    Viewer.Application.Dto.ContextoDto contextoFirma = new Viewer.Application.Dto.ContextoDto();
                    sobreDTO.ContextosPorId.TryGetValue(HechoFirma.IdContexto, out contextoFirma);
                    if (contextoFirma != null && contextoFirma.ValoresDimension != null && contextoFirma.ValoresDimension.Count == 1)
                    {
                        String elementoSecuencia =
                                contextoFirma.Id;
                        if (elementoSecuencia != null)
                        {
                            Firmas.Add(elementoSecuencia, HechoFirma.Valor);
                        }
                    }
                }
            }


            IList<String> IdHechosHuella = new List<string>();
            sobreDTO.HechosPorIdConcepto.TryGetValue(XbrlSobreUtil.ID_HUELLA_DIGITAL, out IdHechosHuella);
            foreach (String IdHechoHuella in IdHechosHuella)
            {
                Viewer.Application.Dto.HechoDto HechoHuella = new Viewer.Application.Dto.HechoDto();
                sobreDTO.HechosPorId.TryGetValue(IdHechoHuella, out HechoHuella);
                if (HechoHuella != null)
                {
                    Viewer.Application.Dto.ContextoDto contextoHuella = new Viewer.Application.Dto.ContextoDto();
                    sobreDTO.ContextosPorId.TryGetValue(HechoHuella.IdContexto, out contextoHuella);
                    if (contextoHuella != null && contextoHuella.ValoresDimension != null && contextoHuella.ValoresDimension.Count == 1)
                    {
                        String elementoSecuencia =
                                contextoHuella.Id;
                        if (elementoSecuencia != null)
                        {
                            HuellasDigitales.Add(elementoSecuencia, HechoHuella.Valor);
                        }
                    }
                }
            }

            foreach (String secuencia in Correos.Keys)
            {
                string firma = "";
                Firmas.TryGetValue(secuencia, out firma);
                string huella = "";
                HuellasDigitales.TryGetValue(secuencia, out huella);
                if (firma != null)
                {
                    FirmaElectronicaDTO firmaDTO = new FirmaElectronicaDTO();

                    var correoEncontrado = "";
                    Correos.TryGetValue(secuencia, out correoEncontrado);

                    var firmaEncontrada = "";
                    Firmas.TryGetValue(secuencia, out firmaEncontrada);

                    var huellaEncontrada = "";
                    HuellasDigitales.TryGetValue(secuencia, out huellaEncontrada);

                    firmaDTO.Firma = firmaEncontrada;
                    firmaDTO.CorreoElectronico = correoEncontrado;
                    firmaDTO.HuellaDigitalCertificado = huellaEncontrada;

                    ListadoFirmas.Add(firmaDTO);
                }
            }

            return ListadoFirmas;
        }

        [Transaction(TransactionPropagation.Required)]
        public ResultadoOperacionDto GuardarDocumentoInstanciaXBRL(Stream archivoXbrl,String rutaCompletaArchivo, String nombreOriginal, IDictionary<string, string> parametros)
        {
            var resultadoOp = new ResultadoOperacionDto();
            var xbrlService = XPEServiceImpl.GetInstance(ForzarHttp);
            if (xbrlService.GetErroresInicializacion() != null && xbrlService.GetErroresInicializacion().Count > 0)
            {
                resultadoOp.Mensaje = "Procesador XBRL no fue inicializado correctamente:";
                foreach (var errorInicializacion in xbrlService.GetErroresInicializacion())
                {
                    resultadoOp.Mensaje += errorInicializacion.Mensaje + "\n\r";
                }
                resultadoOp.Resultado = false;
                return resultadoOp;
            }
            DocumentoInstanciaXbrlDto documentoXbrl = null;
            var idTipoArchivo = TipoArchivoConstants.ArchivoXbrl;
            if (nombreOriginal.ToLower().EndsWith(CommonConstants.ExtensionXBRL))
            {
                documentoXbrl = ProcesarArchivoXBRL(rutaCompletaArchivo,resultadoOp);
                documentoXbrl.Titulo = nombreOriginal;
            }
            else if (nombreOriginal.ToLower().EndsWith(CommonConstants.ExtensionZIP))
            {
                documentoXbrl = ProcesarArchivoZip(rutaCompletaArchivo, resultadoOp);
                idTipoArchivo = TipoArchivoConstants.ArchivoXbrlZip;
            }
            else
            {
                resultadoOp.Resultado = false;
                resultadoOp.Mensaje = "El archivo a almacenar debe tener extensión ZIP o XBRL";
            }
            //El documento es legible
            if (documentoXbrl != null)
            {

                parametros = ObtenParametrosConfiguracion(documentoXbrl, parametros);
                documentoXbrl.ParametrosConfiguracion = parametros;
                var instanciaDb = InsertarDocumentoInstanciaXbrl(documentoXbrl);
                GuardaBinaryArchivoDocumentoInstancia(archivoXbrl, idTipoArchivo, instanciaDb.IdDocumentoInstancia);
                LogUtil.Info("Nuevo documento de instancia almacenado ("+nombreOriginal+"): " + instanciaDb.IdDocumentoInstancia);
                resultadoOp.InformacionAuditoria = new InformacionAuditoriaDto
                {
                    Accion =
                            ConstantsAccionAuditable.Insertar,
                    Empresa = null,
                    Fecha = DateTime.Now,
                    IdUsuario = null,
                    Modulo = ConstantsModulo.ServicioAlmacenamientoDocumentosXBRL,
                    Registro =
                        "Creación de versión de  documento de instancia: " +
                        nombreOriginal + ", con el identificador: " +
                        instanciaDb.IdDocumentoInstancia + " y versión:" + instanciaDb.UltimaVersion
                };
                resultadoOp.Resultado = true;

                resultadoOp.InformacionExtra = new long[] {instanciaDb.IdDocumentoInstancia, (long)instanciaDb.UltimaVersion.Value };
                documentoXbrl.Cerrar();
                documentoXbrl = null;
                instanciaDb = null;
            }
            return resultadoOp;
        }
        /// <summary>
        /// Almacena el archivo enviado en la tabla ArchivoDocumentoInstancia.
        /// </summary>
        /// <param name="archivoXbrl">Stream con el archivo a persistir.</param>
        /// <param name="idTipoArchivo">Tipo de archivo.</param>
        /// <param name="idDocumentoInstancia">Documento al que se relaciona</param>
        private void GuardaBinaryArchivoDocumentoInstancia(Stream archivoXbrl, long idTipoArchivo, long idDocumentoInstancia)
        {
            try
            {
                byte[] bytes;
                byte[] buffer = new byte[16*1024];
                using (MemoryStream ms = new MemoryStream())
                {
                    int read;
                    archivoXbrl.Seek(0, SeekOrigin.Begin);
                    while ((read = archivoXbrl.Read(buffer, 0, buffer.Length)) > 0)
                    {
                        ms.Write(buffer, 0, read);
                    }
                    bytes = ms.ToArray();
                    var entidadArchivo = new ArchivoDocumentoInstancia()
                    {
                        Archivo = bytes,
                        IdTipoArchivo = idTipoArchivo,
                        IdDocumentoInstancia = idDocumentoInstancia
                    };
                    ArchivoDocumentoInstanciaRepository.AgregaDistribucion(entidadArchivo);
                    entidadArchivo.Archivo = null;
                    entidadArchivo = null;
                }
                System.GC.Collect();
            }
            catch (Exception e)
            {
                var datosError = new Dictionary<string, object>()
                {
                    {"idDocumentoInstancia", idDocumentoInstancia},
                    {"idTipoArchivo", idTipoArchivo},
                    {"exception", e}
                };
                LogUtil.Error(datosError);
            }
        }

        /// <summary>
        /// Procesa el documento de instancia que se encuentra dentro del archivo ZIP enviado como parámetro
        /// </summary>
        /// <param name="archivo">Stream del archivo ZIP</param>
        /// <param name="resultado">Objeto para llenar el resultado de la carga</param>
        /// <returns>Documento de instancia leído</returns>
        private DocumentoInstanciaXbrlDto ProcesarArchivoZip(String rutaCompletaArchivo, ResultadoOperacionDto resultado)
        {
            DocumentoInstanciaXbrlDto documentoXbrl = null;
            string archivoXbrl = null;
            DirectoryInfo tmpDir = null;
            try
            {
                using (var zipFile = ZipFile.Read(rutaCompletaArchivo))
                {
                    tmpDir = UtilAbax.ObtenerDirectorioTemporal();
                    zipFile.ExtractAll(tmpDir.FullName, ExtractExistingFileAction.OverwriteSilently);
                    if (zipFile.Count == 1)
                    {
                        foreach (var archivoInterno in zipFile)
                        {
                            if (!archivoInterno.IsDirectory &&
                                archivoInterno.FileName.ToLower().EndsWith(CommonConstants.ExtensionXBRL))
                            {
                                archivoXbrl = archivoInterno.FileName;
                            }
                        }
                    }
                    if (archivoXbrl == null)
                    {
                        resultado.Resultado = false;
                        resultado.Mensaje =  "Debe existir un archivo dentro del archivo ZIP y debe tener la extensión XBRL";
                    }
                }
            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
                resultado.Resultado = false;
                resultado.Mensaje = "Ocurrió un error al leer el archivo ZIP: " + ex.Message;
                resultado.Excepcion = ex.StackTrace;
            }
            if (archivoXbrl != null)
            {
                try
                {
                    var uriArchivo = new Uri(tmpDir.FullName + Path.DirectorySeparatorChar + archivoXbrl, UriKind.Absolute);
                      var configCarga = new ConfiguracionCargaInstanciaDto()
                        {
                            UrlArchivo = uriArchivo.AbsolutePath,
                            CacheTaxonomia = CacheTaxonomia,
                            ConstruirTaxonomia = false,
                            EjecutarValidaciones = false,
                            Errores = new List<ErrorCargaTaxonomiaDto>(),
                            ForzarCerradoDeXbrl = false,
                            InfoCarga = new AbaxCargaInfoDto()
                        };
                        documentoXbrl = XPEServiceImpl.GetInstance(ForzarHttp).CargarDocumentoInstanciaXbrl(configCarga);
                        if (configCarga.Errores.Count > 0)
                        {
                            resultado.Resultado = false;
                            resultado.Mensaje = "Ocurrieron errores al leer el archivo XBRL : ";
                            foreach (var err in configCarga.Errores)
                            {
                                resultado.Mensaje += err.Mensaje + "\n\r";
                            }
                            LogUtil.Error(resultado);
                        }
                        if (documentoXbrl != null)
                        {
                            documentoXbrl.Titulo = Path.GetFileName(uriArchivo.AbsolutePath);
                        }
                    
                }
                catch (Exception ex)
                {
                    LogUtil.Error(ex);
                    resultado.Resultado = false;
                    resultado.Mensaje = "Ocurrió un error al leer el archivo XBRL: " + ex.Message;
                    resultado.Excepcion = ex.StackTrace;
                }
            }
            return documentoXbrl;
        }

        /// <summary>
        /// Procesa la carga del archivo XBRL y retorna la representación en DTO del contenido del mismo
        /// </summary>
        /// <param name="archivo">Archivo XBRL a cargar</param>
        /// <param name="resultado">Objeto con los resultados de la validación</param>
        private DocumentoInstanciaXbrlDto ProcesarArchivoXBRL(String rutaCompletaArchivo, ResultadoOperacionDto resultado)
        {
            var xbrlService = XPEServiceImpl.GetInstance();
            DocumentoInstanciaXbrlDto documentoXbrl = null;
            try
            {
                var configCarga = new ConfiguracionCargaInstanciaDto()
                {
                    UrlArchivo = rutaCompletaArchivo,
                    CacheTaxonomia = CacheTaxonomia,
                    ConstruirTaxonomia = true,
                    EjecutarValidaciones = false,
                    Errores = new List<ErrorCargaTaxonomiaDto>(),
                    ForzarCerradoDeXbrl = false,
                    InfoCarga = new AbaxCargaInfoDto()
                };
                documentoXbrl = xbrlService.CargarDocumentoInstanciaXbrl(configCarga);
                documentoXbrl.Titulo = Path.GetFileName(rutaCompletaArchivo);
                if (configCarga.Errores.Count > 0) {
                    resultado.Resultado = false;
                    resultado.Mensaje = "Ocurrieron errores al leer el archivo XBRL : ";
                    foreach(var err in configCarga.Errores){
                        resultado.Mensaje += err.Mensaje + "\n\r";
                    }
                }
            }
            catch (Exception ex)
            {
                LogUtil.Error(ex.Message + "\n" + ex.StackTrace);
                resultado.Resultado = false;
                resultado.Mensaje = "Ocurrió un error al leer el documento de instancia: " + ex.Message;
                resultado.Excepcion = ex.StackTrace;
            }
            return documentoXbrl;
        }


        /// <summary>
        /// Realiza el proceso de inserción de un nuevo documento de instancia
        /// </summary>
        /// <param name="documentoInstancia">Datos del documentos de instancia a insertar</param>
        /// <returns>Documento de instancia en base de datos</returns>
        private DocumentoInstancia InsertarDocumentoInstanciaXbrl(DocumentoInstanciaXbrlDto documentoInstancia)
        {
            var fechaHora = DateTime.Now;
            var instanciaDb = new DocumentoInstancia();
            DocumentoInstanciaXbrlDtoConverter.ConvertirModeloDto(instanciaDb, documentoInstancia, 0, 1);

            instanciaDb.Titulo = documentoInstancia.Titulo;
            instanciaDb.RutaArchivo = documentoInstancia.NombreArchivo;
            instanciaDb.IdEmpresa = documentoInstancia.IdEmpresa != 0?documentoInstancia.IdEmpresa:(long?)null;
            instanciaDb.EsCorrecto = documentoInstancia.EsCorrecto;
            instanciaDb.FechaUltMod = fechaHora;
            instanciaDb.IdUsuarioUltMod = null;
            instanciaDb.IdUsuarioBloqueo = null;
            instanciaDb.UltimaVersion = 1;
            instanciaDb.EspacioNombresPrincipal = documentoInstancia.EspacioNombresPrincipal;
            instanciaDb.Usuario = null;

            AgregarInformacionExtra(documentoInstancia,instanciaDb);

            if (documentoInstancia.ParametrosConfiguracion != null && documentoInstancia.ParametrosConfiguracion.ContainsKey("cveEmisora"))
            {
                instanciaDb.ClaveEmisora = documentoInstancia.ParametrosConfiguracion["cveEmisora"];
            }

            if (documentoInstancia.ParametrosConfiguracion != null && documentoInstancia.ParametrosConfiguracion.ContainsKey("trimestre"))
            {
                instanciaDb.Trimestre = documentoInstancia.ParametrosConfiguracion["trimestre"];
            }

            if (documentoInstancia.ParametrosConfiguracion != null && documentoInstancia.ParametrosConfiguracion.ContainsKey("anio"))
            {
                instanciaDb.Anio = Int32.Parse(documentoInstancia.ParametrosConfiguracion["anio"].Substring(0, 4));
            }


            DocumentoInstanciaRepository.Add(instanciaDb);
            foreach (var dts in documentoInstancia.DtsDocumentoInstancia)
            {
                var dtsDb = DocumentoInstanciaXbrlDtoConverter.CrearDtsDocumentoInstanciaDb(dts);
                dtsDb.IdDocumentoInstancia = instanciaDb.IdDocumentoInstancia;
                DtsDocumentoInstanciaRepository.Add(dtsDb);
                instanciaDb.DtsDocumentoInstancia.Add(dtsDb);
            }

            var tax = documentoInstancia.Taxonomia;
            documentoInstancia.Taxonomia = null;

            foreach (var hecho in documentoInstancia.HechosPorId.Values)
            {
                if (tax != null && tax.ConceptosPorId.ContainsKey(hecho.IdConcepto))
                {
                    var concepto = tax.ConceptosPorId[hecho.IdConcepto];
                    hecho.TipoDato = concepto.TipoDato;
                    hecho.TipoDatoXbrl = concepto.TipoDatoXbrl;
                    hecho.NombreConcepto = concepto.Nombre;
                    hecho.EspacioNombres = concepto.EspacioNombres;
                }
            }

            documentoInstancia.IdDocumentoInstancia = instanciaDb.IdDocumentoInstancia;
            documentoInstancia.Version = instanciaDb.UltimaVersion.Value;

            var version = new VersionDocumentoInstancia()
            {
                DocumentoInstancia = instanciaDb,
                IdDocumentoInstancia = instanciaDb.IdDocumentoInstancia,
                Comentarios = documentoInstancia.Comentarios,
                Fecha = fechaHora,
                IdEmpresa = documentoInstancia.IdEmpresa!=0?documentoInstancia.IdEmpresa:(long?)null,
                Version = instanciaDb.UltimaVersion.Value,
                EsCorrecto = documentoInstancia.EsCorrecto,
                Datos = ZipUtil.Zip(JsonConvert.SerializeObject(documentoInstancia, Formatting.Indented, new JsonSerializerSettings
                {
                    ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                }))
            };
            documentoInstancia.Taxonomia = tax;
            VersionDocumentoInstanciaRepository.DbContext.Database.CommandTimeout = 180;
            VersionDocumentoInstanciaRepository.Add(version);

            BitacoraVersionDocumento bitacoraVersionDocumento = new BitacoraVersionDocumento();
            bitacoraVersionDocumento.IdDocumentoInstancia = version.IdDocumentoInstancia;
            bitacoraVersionDocumento.IdVersionDocumentoInstancia = version.IdVersionDocumentoInstancia;
            bitacoraVersionDocumento.FechaRegistro = DateTime.Now;
            bitacoraVersionDocumento.FechaUltimaModificacion = DateTime.Now;
            bitacoraVersionDocumento.Estatus = DistribucionDocumentoConstants.DISTRIBUCION_ESTATUS_PENDIENTE;
            if(instanciaDb.IdEmpresa != null){
                bitacoraVersionDocumento.Empresa = EmpresaRepository.GetById(instanciaDb.IdEmpresa.Value).NombreCorto;
            }
            
            BitacoraVersionDocumentoRepository.Add(bitacoraVersionDocumento);
            version.Datos = null;
            version = null;
            return instanciaDb;
        }
        /// <summary>
        /// Determian la fehca máxima de los contextos del reporte envíado.
        /// </summary>
        /// <param name="documentoInstancia">Documento de instancia a evaluar.</param>
        /// <returns>Fecha máxima de los contextos reportados.</returns>
        private DateTime DeterminaFechaReporte(DocumentoInstanciaXbrlDto documentoInstancia) 
        {
            DateTime fechaMaxima = DateTime.MinValue;
            foreach (var llaveFecha in documentoInstancia.ContextosPorFecha.Keys)
            { 
                IList<string> listaContextos = null;
                if (documentoInstancia.ContextosPorFecha.TryGetValue(llaveFecha, out listaContextos))
                {
                    if (listaContextos.Count > 0) 
                    {
                        for (var indexContexto = 0; indexContexto < listaContextos.Count; indexContexto++) 
                        {
                            var idContexto = listaContextos[indexContexto];
                            AbaxXBRLCore.Viewer.Application.Dto.ContextoDto contexto;
                            if (documentoInstancia.ContextosPorId.TryGetValue(idContexto, out contexto))
                            {
                                var fechaPeriodo = contexto.Periodo.Tipo == PeriodoDto.Instante ? contexto.Periodo.FechaInstante : contexto.Periodo.FechaFin;
                                if (fechaMaxima < fechaPeriodo)
                                {
                                    fechaMaxima = fechaPeriodo;
                                }
                                break;
                            }
                        }
                    }
                }
            }

            return fechaMaxima;
        }


        
        /// <summary>
        /// Genera y asigna información extra que pueda contener el documento de instancia
        /// </summary>
        /// <param name="documentoInstancia"></param>
        private void AgregarInformacionExtra(DocumentoInstanciaXbrlDto documentoInstancia, DocumentoInstancia instanciaDb)
        {
            if (documentoInstancia.ParametrosConfiguracion != null)
            {
                //Verificar parámetros de configuracion adicionales: clave de empresa
                string claveEmpresa = null;
                string claveEmpresaEnvia = null;
                if (documentoInstancia.ParametrosConfiguracion.ContainsKey("cveFideicomitente") &&
                    !String.IsNullOrEmpty(documentoInstancia.ParametrosConfiguracion["cveFideicomitente"]))
                {
                    claveEmpresa = documentoInstancia.ParametrosConfiguracion["cveFideicomitente"];
                }

                if (documentoInstancia.ParametrosConfiguracion.ContainsKey("cvePizarra") &&
                    !String.IsNullOrEmpty(documentoInstancia.ParametrosConfiguracion["cvePizarra"]))
                {
                    if (claveEmpresa == null)
                    {
                        claveEmpresa = documentoInstancia.ParametrosConfiguracion["cvePizarra"];
                    }
                    claveEmpresaEnvia = documentoInstancia.ParametrosConfiguracion["cvePizarra"];
                }

                if (claveEmpresa != null) {
                    var empresa = EmpresaRepository.GetQueryable().Where(x => x.NombreCorto ==claveEmpresa).FirstOrDefault();
                    if (empresa == null)
                    {
                        empresa = EmpresaRepository.GetQueryable().Where(x => x.AliasClaveCotizacion == claveEmpresa).FirstOrDefault();
                    }
                    if (empresa != null) {
                        documentoInstancia.IdEmpresa = empresa.IdEmpresa;
                        
                        instanciaDb.IdEmpresa = empresa.IdEmpresa;
                        instanciaDb.ClaveEmisora = empresa.NombreCorto;
                                                
                    }
                }
                if (claveEmpresaEnvia != null)
                {
                    var empresaEnvia = EmpresaRepository.GetQueryable().Where(x => x.NombreCorto == claveEmpresaEnvia).FirstOrDefault();
                    if (empresaEnvia == null)
                    {
                        empresaEnvia = EmpresaRepository.GetQueryable().Where(x => x.AliasClaveCotizacion == claveEmpresaEnvia).FirstOrDefault();
                    }
                    if (empresaEnvia != null)
                    {
                        instanciaDb.IdEmpresaEnvio = empresaEnvia.IdEmpresa;
                    }
                }
                //Verifica el numero de fideicomiso
                if (documentoInstancia.ParametrosConfiguracion.ContainsKey("cveFideicomitente") && 
                    !String.IsNullOrEmpty(documentoInstancia.ParametrosConfiguracion["cveFideicomitente"])) {
                    string hrefTax = null;
                    foreach (var dts in documentoInstancia.DtsDocumentoInstancia)
                    {
                        if (dts.Tipo == DtsDocumentoInstanciaDto.SCHEMA_REF)
                        {
                            hrefTax = dts.HRef;
                            break;
                        }
                    }
                    if (ValidadorArchivoInstanciaFIDUXBRL.PREFIJOS_TAXONOMIAS.ContainsKey(hrefTax))
                    {
                        var prefijoIdConceptos = ValidadorArchivoInstanciaFIDUXBRL.PREFIJOS_TAXONOMIAS[hrefTax];
                        string numeroFideicomiso = ValidadorArchivoInstanciaFIDUXBRL.ObtenerValorNoNumerico(prefijoIdConceptos + ValidadorArchivoInstanciaFIDUXBRL.NOMBRE_CONCEPTO_NUMERO_FIDEICOMISO, documentoInstancia);
                        instanciaDb.NumFideicomiso = numeroFideicomiso;
                    }
                    else if (ValidadorArchivoInstanciaReporteAnual.ESPACIOS_NOMBRE.ContainsKey(documentoInstancia.EspacioNombresPrincipal))
                    {
                        string numeroFideicomiso = ValidadorArchivoInstanciaFIDUXBRL.ObtenerValorNoNumerico(ValidadorArchivoInstanciaReporteAnual.CONCEPTO_FIDEICOMISO, documentoInstancia);
                        instanciaDb.NumFideicomiso = numeroFideicomiso;
                    }
                    else if(ValidadorArchivoInstanciaAnexoT.ESPACIOS_NOMBRE.ContainsKey(hrefTax))
                    {
                        string numeroFideicomiso = ValidadorArchivoInstanciaFIDUXBRL.ObtenerValorNoNumerico(ValidadorArchivoInstanciaAnexoT.CONCEPTO_FIDEICOMISO, documentoInstancia);
                        instanciaDb.NumFideicomiso = numeroFideicomiso;
                    }
                }
                //Verificar fecha trimestre
                string fechaTrimestre = null;
                if (documentoInstancia.ParametrosConfiguracion.ContainsKey("fechaTrimestre") &&
                !String.IsNullOrEmpty(documentoInstancia.ParametrosConfiguracion["fechaTrimestre"]))
                {
                    fechaTrimestre = documentoInstancia.ParametrosConfiguracion["fechaTrimestre"];
                }

                if (fechaTrimestre != null)
                {
                    var dateFechaTrimestre = DateTime.MinValue;
                    if (XmlUtil.ParsearUnionDateTime(DateUtil.ParseDateMultipleFormats(fechaTrimestre), out dateFechaTrimestre))
                    {
                        foreach (var conceptoTrimestre in TrimestreUtil.IDS_TRIMESTRE)
                        {
                            if (documentoInstancia.HechosPorIdConcepto.ContainsKey(conceptoTrimestre) &&
                                documentoInstancia.HechosPorIdConcepto[conceptoTrimestre].Count > 0)
                            {
                                var hecho = documentoInstancia.HechosPorId[documentoInstancia.HechosPorIdConcepto[conceptoTrimestre][0]];
                                if (!String.IsNullOrEmpty(hecho.Valor))
                                {
                                    instanciaDb.Trimestre = hecho.Valor;
                                    break;
                                }
                            }
                        }
                        if (instanciaDb.Trimestre == null)
                        {
                            instanciaDb.Trimestre = TrimestreUtil.ObtenerTrimestre(dateFechaTrimestre).ToString();
                        }
                        instanciaDb.Anio = dateFechaTrimestre.Year;
                        instanciaDb.FechaReporte = dateFechaTrimestre;
                    }
                }
                else  
                {
                    string paramFechaColocacion = null;
                    string valorPeriodo = null;
                    if (documentoInstancia.ParametrosConfiguracion.TryGetValue("fechaColocacion", out paramFechaColocacion) && !String.IsNullOrEmpty(paramFechaColocacion))
                    {
                        DateTime fechaColocacion = DateTime.MinValue;
                        if (DateUtil.ParseDate(paramFechaColocacion, DateUtil.YMDateFormat, out fechaColocacion))
                        {
                            instanciaDb.Anio = fechaColocacion.Year;
                            instanciaDb.FechaReporte = fechaColocacion;
                        }
                    }
                    else if (documentoInstancia.ParametrosConfiguracion.TryGetValue("valorPeroiodo", out valorPeriodo) && !String.IsNullOrEmpty(valorPeriodo))
                    {
                        int ano = 0;
                        int mesPeriodo = 0;
                        string periodo = null;
                        if (REGEXP_ANO_PERIODO.IsMatch(valorPeriodo)) 
                        {
                            Int32.TryParse(valorPeriodo.Substring(0, 4), out ano);
                            var periodoSinAno = valorPeriodo.Substring(4);
                            var periodoMatch = REGEXP_DOS_DIGITOS.Match(periodoSinAno);
                            periodo = periodoSinAno.Substring(periodoMatch.Index);
                            if (!String.IsNullOrEmpty(periodo))
                            {
                                Int32.TryParse(periodo, out mesPeriodo);
                            }
                        }
                        else if (REGEXP_ANO.IsMatch(valorPeriodo)) 
                        {
                            Int32.TryParse(valorPeriodo.Substring(0,4), out ano);
                            instanciaDb.FechaReporte = new DateTime(ano, 12, 31);
                        }
                        if (ano > 0) 
                        {
                            instanciaDb.Anio = ano;
                            if (mesPeriodo > 0)
                            {
                                instanciaDb.FechaReporte = new DateTime(ano, mesPeriodo, DateTime.DaysInMonth(ano, mesPeriodo));
                            }
                        }
                    }
                }

                if (instanciaDb.FechaReporte == null || instanciaDb.FechaReporte.Equals(DateTime.MinValue))
                {
                    instanciaDb.FechaReporte = DeterminaFechaReporte(documentoInstancia);
                }
            }
        }

        [Transaction(TransactionPropagation.Required)]
        public ResultadoOperacionDto ObtenerBitacorasVersionDocumentoPendientes()
        {
            var res = new ResultadoOperacionDto();
            res.InformacionExtra = BitacoraVersionDocumentoRepository.GetQueryable().
                Where(x => x.Estatus == DistribucionDocumentoConstants.DISTRIBUCION_ESTATUS_PENDIENTE || x.Estatus == DistribucionDocumentoConstants.DISTRIBUCION_ESTATUS_ERROR).
                Include(x=>x.VersionDocumentoInstancia).OrderBy(x => x.IdDocumentoInstancia).ThenBy(x => x.IdVersionDocumentoInstancia).ToList();
            res.Resultado = true;
            return res;
        }

        [Transaction(TransactionPropagation.Required)]
        public void ActualizarBitacoraVersionDocumento(BitacoraVersionDocumento bitacora)
        {
            BitacoraVersionDocumentoRepository.Update(bitacora);
        }
        public IList<long> ObtenIdsDistribuciones(long idDocumentoInstancia)
        {
            return BitacoraDistribucionDocumentoRepository.ObtenIdsDistribuciones(idDocumentoInstancia);
        }

        [Transaction(TransactionPropagation.Required)]
        public void ActualizaEstadoDistribucion(long idBitacoraDistribucionDocumento, int estatus)
        {
            BitacoraDistribucionDocumentoRepository.ActualizaEstadoDistribucion(idBitacoraDistribucionDocumento, estatus);
        }

        public IDictionary<long, int> ObtenUltimaDistribucionDocumento(String espacioNombresPrincipal, String claveEmisora)
        {
            return BitacoraDistribucionDocumentoRepository.ObtenUltimaDistribucionDocumento(espacioNombresPrincipal, claveEmisora);
        }
    }
}
