using AbaxXBRL.Constantes;
using AbaxXBRLCore.Common.Cache;
using AbaxXBRLCore.Common.Constants;
using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.Repository;
using AbaxXBRLCore.Validador;
using AbaxXBRLCore.Validador.Impl;
using AbaxXBRLCore.Viewer.Application.Dto;
using AbaxXBRLCore.XPE;
using AbaxXBRLCore.XPE.Common;
using AbaxXBRLCore.XPE.impl;
using Ionic.Zip;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Services.Implementation
{
    /// <summary>
    /// Implementación del servicio de validación de documentos de instancia XBRL.
    /// Esta implementación valida archivos de instancia sin extensiones donde el archivo ZIP únicamente contiene un solo archivo
    /// con extensión XBRL 
    /// </summary>
    public class ValidarDocumentoInstanciaSimpleService : ValidarDocumentoInstanciaBaseService
    {
        
        /// <summary>
        /// Objeto de caché de taxonomía
        /// </summary>
        public ICacheTaxonomiaXBRL CacheTaxonomia { get; set; }
        /// <summary>
        /// Valores de los primeros bytes de un archivo que indican que un archivo está codificado en UTF
        /// </summary>
        protected static byte[][] INDICADORES_UTF = new byte[][]{
		        new byte[]{(byte)0xEF, (byte)0xBB, (byte)0xBF},
		        new byte[]{(byte)0xFE, (byte)0xFF},
		        new byte[]{(byte)0xFF, (byte)0xFE},
		        new byte[]{(byte)0xFE, (byte)0xFF},
		        new byte[]{(byte)0x00, (byte)0x00, (byte)0XFE,(byte)0xFF},
		        new byte[]{(byte)0xFF, (byte)0xFE, (byte)0x00, (byte)0x00},
		        new byte[]{(byte)0x2B, (byte)0x2F, (byte)0x76},
		        new byte[]{(byte)0xF7, (byte)0x64, (byte)0x4C},
		        new byte[]{(byte)0xDD, (byte)0x73, (byte)0x66, (byte)0x73},
		        new byte[]{(byte)0x0E, (byte)0xFE, (byte)0xFF},
		        new byte[]{(byte)0xFB, (byte)0xEE, (byte)0x28}
	            };
        /// <summary>
        /// Token que identifica las taxonomías de tipo prospecto.
        /// </summary>
        private static String TOKEN_PROSPECTO = "P";
        /// <summary>
        /// Token que identifica las taxonomías de tipo Anual.
        /// </summary>
        private static String TOKEN_ANUAL = "A";
        /// <summary>
        /// Cantidad maxima de errores permitidos.
        /// </summary>
        private static int maxErrors = -1;
        /// Diccionario con la referencia a las taxonomías de tipo prospecto y anual.
        /// </summary>
        private static IDictionary<string, string> TaxonomiasProspectoAnual = new Dictionary<string, string>
        {
            {"https://taxonomiasxbrl.cnbv.gob.mx/taxonomy/ra-prospecto-2016-08-22/ar_N_entry_point_2016-08-22.xsd", TOKEN_ANUAL},
            {"https://taxonomiasxbrl.cnbv.gob.mx/taxonomy/ra-prospecto-2016-08-22/ar_NBIS_entry_point_2016-08-22.xsd", TOKEN_ANUAL},
            {"https://taxonomiasxbrl.cnbv.gob.mx/taxonomy/ra-prospecto-2016-08-22/ar_NBIS1_entry_point_2016-08-22.xsd", TOKEN_ANUAL},
            {"https://taxonomiasxbrl.cnbv.gob.mx/taxonomy/ra-prospecto-2016-08-22/ar_NBIS2_entry_point_2016-08-22.xsd", TOKEN_ANUAL},
            {"https://taxonomiasxbrl.cnbv.gob.mx/taxonomy/ra-prospecto-2016-08-22/ar_NBIS3_entry_point_2016-08-22.xsd", TOKEN_ANUAL},
            {"https://taxonomiasxbrl.cnbv.gob.mx/taxonomy/ra-prospecto-2016-08-22/ar_NBIS4_entry_point_2016-08-22.xsd", TOKEN_ANUAL},
            {"https://taxonomiasxbrl.cnbv.gob.mx/taxonomy/ra-prospecto-2016-08-22/ar_NBIS5_entry_point_2016-08-22.xsd", TOKEN_ANUAL},
            {"https://taxonomiasxbrl.cnbv.gob.mx/taxonomy/ra-prospecto-2016-08-22/ar_O_entry_point_2016-08-22.xsd", TOKEN_ANUAL},
            {"https://taxonomiasxbrl.cnbv.gob.mx/taxonomy/ra-prospecto-2016-08-22/pros_H_entry_point_2016-08-22.xsd", TOKEN_PROSPECTO},
            {"https://taxonomiasxbrl.cnbv.gob.mx/taxonomy/ra-prospecto-2016-08-22/pros_HBIS_entry_point_2016-08-22.xsd", TOKEN_PROSPECTO},
            {"https://taxonomiasxbrl.cnbv.gob.mx/taxonomy/ra-prospecto-2016-08-22/pros_HBIS1_entry_point_2016-08-22.xsd", TOKEN_PROSPECTO},
            {"https://taxonomiasxbrl.cnbv.gob.mx/taxonomy/ra-prospecto-2016-08-22/pros_HBIS2_entry_point_2016-08-22.xsd", TOKEN_PROSPECTO},
            {"https://taxonomiasxbrl.cnbv.gob.mx/taxonomy/ra-prospecto-2016-08-22/pros_HBIS3_entry_point_2016-08-22.xsd", TOKEN_PROSPECTO},
            {"https://taxonomiasxbrl.cnbv.gob.mx/taxonomy/ra-prospecto-2016-08-22/pros_HBIS4_entry_point_2016-08-22.xsd", TOKEN_PROSPECTO},
            {"https://taxonomiasxbrl.cnbv.gob.mx/taxonomy/ra-prospecto-2016-08-22/pros_HBIS5_entry_point_2016-08-22.xsd", TOKEN_PROSPECTO},
            {"https://taxonomiasxbrl.cnbv.gob.mx/taxonomy/ra-prospecto-2016-08-22/pros_L_entry_point_2016-08-22.xsd", TOKEN_PROSPECTO},
            {"https://taxonomiasxbrl.cnbv.gob.mx/taxonomy/ra-prospecto-2016-08-22/pros_I_entry_point_2016-08-22.xsd", TOKEN_PROSPECTO},
            {"https://taxonomiasxbrl.cnbv.gob.mx/taxonomy/ra-prospecto-2016-08-22/pros_h_entry_point_2016-08-22.xsd", TOKEN_PROSPECTO},
            {"https://taxonomiasxbrl.cnbv.gob.mx/taxonomy/ra-prospecto-2016-08-22/pros_hbis_entry_point_2016-08-22.xsd", TOKEN_PROSPECTO},
            {"https://taxonomiasxbrl.cnbv.gob.mx/taxonomy/ra-prospecto-2016-08-22/pros_hbis1_entry_point_2016-08-22.xsd", TOKEN_PROSPECTO},
            {"https://taxonomiasxbrl.cnbv.gob.mx/taxonomy/ra-prospecto-2016-08-22/pros_hbis2_entry_point_2016-08-22.xsd", TOKEN_PROSPECTO},
            {"https://taxonomiasxbrl.cnbv.gob.mx/taxonomy/ra-prospecto-2016-08-22/pros_hbis3_entry_point_2016-08-22.xsd", TOKEN_PROSPECTO},
            {"https://taxonomiasxbrl.cnbv.gob.mx/taxonomy/ra-prospecto-2016-08-22/pros_hbis4_entry_point_2016-08-22.xsd", TOKEN_PROSPECTO},
            {"https://taxonomiasxbrl.cnbv.gob.mx/taxonomy/ra-prospecto-2016-08-22/pros_hbis5_entry_point_2016-08-22.xsd", TOKEN_PROSPECTO},
            {"https://taxonomiasxbrl.cnbv.gob.mx/taxonomy/ra-prospecto-2016-08-22/pros_l_entry_point_2016-08-22.xsd", TOKEN_PROSPECTO},
            {"https://taxonomiasxbrl.cnbv.gob.mx/taxonomy/ra-prospecto-2016-08-22/pros_i_entry_point_2016-08-22.xsd", TOKEN_PROSPECTO},
        };
        
        /// <summary>
        /// Configuración de la codificación requerida para el documento de instancia, por ejemplo: ISO-8859-1, UTF-8
        /// o vacío para no validar la codificación
        /// </summary>
        public String CodificacionRequerida { get; set; }
        
        /// <summary>
        /// Objeto factory para obtener un validador de negocio específico para la taxonomía del documento de instancia a
        /// validar
        /// </summary>
        public IValidadorArchivoInstanciaXBRLFactory ValidadorFactory { get; set; }
        /// <summary>
        /// Objeto de repository para el acceso a datos de empresas
        /// </summary>
        public IEmpresaRepository EmpresaRepository { get; set; }
        /// <summary>
        /// Servicio de acceso a los parámetros de sistema
        /// </summary>
        public IParametroSistemaService ParametroSistemaService { get; set; }

        /// <summary>
        /// Bandera que indica si se debe de forzar la carga por esquema HTTPS.
        /// </summary>
        private bool ForzarHttp { get; set; }
        /// <summary>
        /// Constructor por defecto.
        /// </summary>
        public ValidarDocumentoInstanciaSimpleService()
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

        public override ResultadoOperacionDto ValidarDocumentoInstanciaXBRL(Stream archivo,String rutaAbsolutaArchivo, String nombreArchivo, IDictionary<string, string> parametros)
        {
            LogUtil.Info("Entrando al servicio de validación");
            var resultadoOp = new ResultadoOperacionDto();
            var resultadoValidacion = new ResultadoValidacionDocumentoXBRLDto();
            resultadoValidacion.ErroresGenerales = new List<ErrorCargaTaxonomiaDto>();
            resultadoValidacion.Periodos = new List<ResumenValidacionPeriodoXBRLDto>();
            resultadoOp.InformacionExtra = resultadoValidacion;
            var xbrlService = XPEServiceImpl.GetInstance(ForzarHttp);
            if (xbrlService.GetErroresInicializacion() != null && xbrlService.GetErroresInicializacion().Count > 0) {
                resultadoValidacion.Valido = false;
                foreach (var errorInicializacion in xbrlService.GetErroresInicializacion())
                {
                    resultadoValidacion.ErroresGenerales.Add(errorInicializacion);
                }
                resultadoOp.Resultado = false;
                return resultadoOp;
            }


            if (nombreArchivo.ToLower().EndsWith(CommonConstants.ExtensionXBRL))
            {
                ProcesarArchivoXBRL(rutaAbsolutaArchivo, resultadoValidacion, parametros);
            }
            else if (nombreArchivo.ToLower().EndsWith(CommonConstants.ExtensionZIP))
            {
                ProcesarArchivoZip(rutaAbsolutaArchivo, resultadoValidacion, parametros);
            }
            else {
                AgregarErrorFatal(resultadoValidacion, null, null, null, "El archivo a validar debe tener extensión ZIP o XBRL");
            }
            
            resultadoOp.InformacionAuditoria = new InformacionAuditoriaDto
            {
                Accion =
                        ConstantsAccionAuditable.Validar,
                Empresa = null,
                Fecha = DateTime.Now,
                IdUsuario = null,
                Modulo = ConstantsModulo.ServicioValidacionDocumentosXBRL,
                Registro =
                    "Validación de documento de instancia:  " +
                    nombreArchivo 
            };
            resultadoOp.Resultado = resultadoValidacion.Valido;

            if (maxErrors == -1)
            {
                try
                {
                    var bdMaxErrors = ParametroSistemaService.ObtenerValorParametroSistema(ConstantsParametrosSistema.MAX_ERROR_VALIDAR_XBRL, "0");
                    int tempMaxErrors;
                    if (Int32.TryParse(bdMaxErrors, out tempMaxErrors))
                    {
                        maxErrors = tempMaxErrors;
                    }
                }
                catch (Exception e)
                {
                    LogUtil.Error(e);
                    maxErrors = 0;
                }
                
            }
            if (maxErrors < 0)
            {
                maxErrors = 0;
            }
            //Aplicar la configuración de errores máximos
            if (maxErrors > 0) 
            {

                int erroresRestantes = maxErrors;
                //Empezar por los errores generales
                if (resultadoValidacion.ErroresGenerales != null && resultadoValidacion.ErroresGenerales.Count > maxErrors)
                {
                    resultadoValidacion.ErroresGenerales = resultadoValidacion.ErroresGenerales.Take(maxErrors).ToList();
                    erroresRestantes = 0;
                }
                
                if (resultadoValidacion.Periodos != null)
                {
                    foreach(var periodo in resultadoValidacion.Periodos)
                    {
                        if (periodo.Errores != null) 
                        {
                            if(periodo.Errores.Count > erroresRestantes){
                                periodo.Errores = periodo.Errores.Take(erroresRestantes).ToList();
                            }
                            erroresRestantes -= periodo.Errores.Count;
                        }
                    }
                }
            }

            return resultadoOp;
        }

        /// <summary>
        /// Procesa la carga y validación del archivo XBRL 
        /// </summary>
        /// <param name="archivo">Archivo XBRL a cargar</param>
        /// <param name="resultadoValidacion">Objeto con los resultados de la validación</param>
        /// <param name="parametros">Parámetros adicionales para validación</param>
        private void ProcesarArchivoXBRL(String rutaAbsolutaArchivo, ResultadoValidacionDocumentoXBRLDto resultadoValidacion, IDictionary<string, string> parametros)
        {
            var configCarga = new ConfiguracionCargaInstanciaDto()
            {
                UrlArchivo = rutaAbsolutaArchivo,
                CacheTaxonomia = CacheTaxonomia,
                ConstruirTaxonomia = true,
                EjecutarValidaciones = true,
                Errores = new List<ErrorCargaTaxonomiaDto>(),
                ForzarCerradoDeXbrl = false,
                InfoCarga = new AbaxCargaInfoDto()
            };
            var swTotal = Stopwatch.StartNew();
            DocumentoInstanciaXbrlDto documentoXbrl = XPEServiceImpl.GetInstance(ForzarHttp).CargarDocumentoInstanciaXbrl(configCarga);

            swTotal.Stop();

            LogUtil.Info("Tiempo de carga total (" + rutaAbsolutaArchivo + "):" + swTotal.ElapsedMilliseconds);

            resultadoValidacion.Valido = true;
            resultadoValidacion.MsCarga = configCarga.InfoCarga.MsCarga;
            resultadoValidacion.MsValidacion = configCarga.InfoCarga.MsValidacion;
            resultadoValidacion.MsFormulas = configCarga.InfoCarga.MsFormulas;
            resultadoValidacion.MsTransformacion = configCarga.InfoCarga.MsTransformacion;
            //El documento es legible, organizar periodos
            if (documentoXbrl != null)
            {
                if (documentoXbrl.Taxonomia == null)
                {
                    documentoXbrl.Taxonomia = AgregarTaxonomiaACache(documentoXbrl.DtsDocumentoInstancia, CacheTaxonomia);
                }

                AplicarValidacionesGenerales(documentoXbrl, parametros, resultadoValidacion);

                if (resultadoValidacion.Valido)
                {
                    CrearResumenDePeriodos(documentoXbrl, resultadoValidacion);
                    //Aplicar validaciones específicas
                    AplicarValidacionesDeNegocio(documentoXbrl, parametros, resultadoValidacion);
                }
                documentoXbrl.Cerrar();
                documentoXbrl = null;
                //System.GC.Collect();
            }

            //Acomodar errores
            foreach (var error in configCarga.Errores)
            {
                if (error.IdContexto == null)
                {
                    resultadoValidacion.ErroresGenerales.Add(error);
                }
                else
                {
                    if (resultadoValidacion.Periodos.Any(x => x.IdContextos.Contains(error.IdContexto)))
                    {
                        resultadoValidacion.Periodos.First(x => x.IdContextos.Contains(error.IdContexto)).Errores.Add(error);
                    }
                }
                resultadoValidacion.Valido = false;
            }
        }
        /// <summary>
        /// Carga y agrega taxonomía a Cache
        /// </summary>
        /// <param name="list">Lista de DTS de taxonomía</param>
        /// <param name="CacheTaxonomia">Objeto de caché de taxonomía a agregar</param>
        /// <returns>La taxonomía agregada</returns>
        private TaxonomiaDto AgregarTaxonomiaACache(IList<DtsDocumentoInstanciaDto> list, ICacheTaxonomiaXBRL CacheTaxonomia)
        {
            var errores = new List<ErrorCargaTaxonomiaDto>();
            if (list != null && list.Count > 0)
            {
                var taxo = XPEServiceImpl.GetInstance(ForzarHttp).CargarTaxonomiaXbrl(list[0].HRef, errores, false);
                if (errores.Count > 0)
                {
                    LogUtil.Error("La taxonomía: " + list[0].HRef + " contiene errores");
                    foreach (var error in errores)
                    {
                        LogUtil.Error(error);
                    }
                }
                else
                {
                    if (CacheTaxonomia.ObtenerTaxonomia(list) == null)
                    {
                        CacheTaxonomia.AgregarTaxonomia(list, taxo);
                    }
                    return taxo;
                }
            }
            else
            {
                errores.Add(new ErrorCargaTaxonomiaDto()
                {
                    Mensaje = "No existen archivos en la lista de SchemaRef",
                    Severidad = ErrorCargaTaxonomiaDto.SEVERIDAD_FATAL
                });
            }
            
            return null;
        }
        /// <summary>
        /// Procesa el documento de instancia que se encuentra dentro del archivo ZIP enviado como parámetro
        /// </summary>
        /// <param name="archivo"></param>
        /// <param name="resultadoValidacion"></param>
        /// <returns></returns>
        private void ProcesarArchivoZip(String rutaAbsolutaArchivo,ResultadoValidacionDocumentoXBRLDto resultadoValidacion, IDictionary<string, string> parametros)
        {
            DocumentoInstanciaXbrlDto documentoXbrl = null;
            string archivoXbrl = null;
            DirectoryInfo tmpDir = null;
            try
            {
                using (var zipFile = ZipFile.Read(rutaAbsolutaArchivo))
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
                        AgregarErrorFatal(resultadoValidacion, null, null, null, "Debe existir un archivo dentro del archivo ZIP y debe tener la extensión XBRL");
                    }
                }
            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
                AgregarErrorFatal(resultadoValidacion, null, null, null, "Ocurrió un error al leer el archivo ZIP: " + ex.Message);
            }
            if (archivoXbrl != null)
            {
                try
                {
                    var uriArchivo = new Uri(tmpDir.FullName + Path.DirectorySeparatorChar + archivoXbrl, UriKind.Absolute);
                    ProcesarArchivoXBRL(uriArchivo.AbsolutePath, resultadoValidacion, parametros);
                }
                catch (Exception ex)
                {
                    LogUtil.Error(ex);
                    AgregarErrorFatal(resultadoValidacion, null, null, null, "Ocurrió un error al leer el archivo XBRL: " + ex.Message);
                }
                finally
                {
                    documentoXbrl = null;
                }
            }
            
        }

        /// <summary>
        /// Obtiene y ejecuta las validaciones específicas de acuerdo a la taxonomía del documento de instancia
        /// </summary>
        /// <param name="documentoXbrl">Documento a validar</param>
        /// <param name="parametros">Parametros extras para validación</param>
        /// <param name="resultadoValidacion">Objeto de resultado de validación</param>
        private void AplicarValidacionesDeNegocio(DocumentoInstanciaXbrlDto documentoXbrl, IDictionary<string, string> parametros, ResultadoValidacionDocumentoXBRLDto resultadoValidacion)
        {
            string entryPoint = null;
            foreach(var dtsDoc in documentoXbrl.DtsDocumentoInstancia){
                if(dtsDoc.Tipo == DtsDocumentoInstanciaDto.SCHEMA_REF){
                    entryPoint = dtsDoc.HRef;
                    break;
                }
            }
            if (entryPoint != null)
            {
                var validador = ValidadorFactory.ObtenerValidadorInstanciaXBRL(entryPoint);
                if(validador != null){
                    LogUtil.Info("Se encontró validador de negocio para taxonomía:" + entryPoint);

                    
                    validador.ValidarArchivoInstanciaXBRL(documentoXbrl, parametros, resultadoValidacion);
                }
            }
            
        }

        /// <summary>
        /// Realiza validaciones generales respecto al formato del archivo
        /// </summary>
        /// <param name="streamArchivo"></param>
        /// <param name="documentoXbrl"></param>
        /// <param name="parametros"></param>
        /// <param name="resultadoValidcion"></param>
        private void AplicarValidacionesGenerales( DocumentoInstanciaXbrlDto documentoXbrl, IDictionary<string, string> parametros, ResultadoValidacionDocumentoXBRLDto resultadoValidacion)
        {
            ValidarCodificacion(null,documentoXbrl, parametros, resultadoValidacion);
            if (resultadoValidacion.Valido) {
                ValidarTaxonomiaConocida(documentoXbrl,parametros,resultadoValidacion);
            }
            

        }
        /// <summary>
        /// Vallida si el tipo de taxonomía enviada pertenece a prospecto.
        /// </summary>
        /// <param name="espacioNombresPrincipal">Valida si el tipo de taxonomía enviada pertenece a prospecto.</param>
        /// <returns>Si la taxonomía indicada pertenece a prospecto.</returns>
        private bool ValidaTaxonomiaProspecto(string espacioNombresPrincipal)
        {
            bool esProspecto = false;
            string tipoTaxonomia = null;
            if (TaxonomiasProspectoAnual.TryGetValue(espacioNombresPrincipal, out tipoTaxonomia))
            {
                esProspecto = tipoTaxonomia.Equals(TOKEN_PROSPECTO);
            }

            return esProspecto;
        }

        /// <summary>
        /// Valida que la taxonomía a la que pertenece el documento de instancia sea una taxonía válida y conocida 
        /// de acuerdo al catálog de taxonomías
        /// </summary>
        /// <param name="documentoXbrl">Documento XBRL a validar</param>
        /// <param name="parametros">Parametros utilizados durante la validación</param>
        /// <param name="resultadoValidacion">Objeto de resultado de la validación</param>
        private void ValidarTaxonomiaConocida(DocumentoInstanciaXbrlDto documentoXbrl, IDictionary<string, string> parametros, ResultadoValidacionDocumentoXBRLDto resultadoValidacion)
        {
            long idEmpresa = 0;
            string cveEmpresa = null;
            if (parametros.ContainsKey("cveFideicomitente") && !string.IsNullOrEmpty(parametros["cveFideicomitente"]))
            {
                cveEmpresa = parametros["cveFideicomitente"];
            }
            if (cveEmpresa == null && parametros.ContainsKey("cvePizarra"))
            {
                cveEmpresa = parametros["cvePizarra"];
            }
            string esProspectoParam = String.Empty;
            parametros.TryGetValue("esProspecto", out esProspectoParam);
            bool esProspecto = !String.IsNullOrEmpty(esProspectoParam) && esProspectoParam.ToLower().Trim().Equals("true");

            LogUtil.Info("esProspectoParam: [" + esProspectoParam + "]");

            if (cveEmpresa == null) {
                AgregarErrorFatal(resultadoValidacion, null, null, null, "Faltan parámetros de invocación: cvePizarra o cveFideicomitente");
                return;
            }
            var emp = EmpresaRepository.GetQueryable().Where(x => x.NombreCorto == cveEmpresa).FirstOrDefault();
            if (emp == null)
            {
                //Buscar por alias
                emp = EmpresaRepository.GetQueryable().Where(x => x.AliasClaveCotizacion == cveEmpresa).FirstOrDefault();
            }
            if (emp != null)
            {
                if (documentoXbrl.DtsDocumentoInstancia != null && documentoXbrl.DtsDocumentoInstancia.Count>0)
                {
                    var href = documentoXbrl.DtsDocumentoInstancia[0].HRef??String.Empty;
                    href = href.ToLower().Trim();
                    if (esProspecto && !ValidaTaxonomiaProspecto(href))
                    {
                        AgregarErrorFatal(resultadoValidacion, null, null, null, "Para este tramite se debe utilizar una taxonomías de prospecto.");
                        LogUtil.Error("Se intento envíar un documento de tipo prospecto para una taxonomía no asignada {IdEmpresa:[" + emp.IdEmpresa + "], cveEmpresa:[" + cveEmpresa + "] Href:[" + href + "]}");
                    }
                    if (!esProspecto && ValidaTaxonomiaProspecto(href))
                    {
                        AgregarErrorFatal(resultadoValidacion, null, null, null, "Las taxonomías de prospecto deben reportarse desde el tramite correspondiente de Stiv.");
                        LogUtil.Error("Se intento envíar un documento de tipo prospecto no indicado como prospecto {IdEmpresa:[" + emp.IdEmpresa + "], cveEmpresa:[" + cveEmpresa + "] Href:[" + href + "]}");
                    }
                    if (!EmpresaRepository.ExisteTaxonomiaParaTipoEmpresaDeEmpresa(emp.IdEmpresa, href))
                    {
                        AgregarErrorFatal(resultadoValidacion, null, null, null, "La taxonomía del archivo de instancia no es la correcta para el tipo de envío.");
                        LogUtil.Error("Se intento envíar un documento de una taxonomía no asignada {IdEmpresa:[" + emp.IdEmpresa + "], cveEmpresa:[" + cveEmpresa + "] Href:[" + href + "]}");
                    }
                }
                else
                {
                    AgregarErrorFatal(resultadoValidacion, null, null, null, "La taxonomía del archivo de instancia no es la correcta para el tipo de envío. (No existe schemaRef)");
                }
                
            }
            else {
                AgregarErrorFatal(resultadoValidacion, null, null, null, "No se encontró empresa con clave:" + cveEmpresa);
            }
        }

        /// <summary>
        /// Valida la codificación del archivo enviado a ISO-8859-1
        /// </summary>
        /// <param name="streamArchivo">Stream original del archivo</param>
        /// <param name="documentoXbrl">Documento XBRL transformado</param>
        /// <param name="parametros">Parametros de configuración de la validación</param>
        /// <param name="resultadoValidacion">Objeto de resultado de validación</param>
        private void ValidarCodificacion(Stream streamArchivo, DocumentoInstanciaXbrlDto documentoXbrl, IDictionary<string, string> parametros, ResultadoValidacionDocumentoXBRLDto resultadoValidacion)
        {
            if (!CodificacionRequerida.Equals(documentoXbrl.Codificacion, StringComparison.InvariantCultureIgnoreCase)) {
                AgregarErrorFatal(resultadoValidacion, null, null, null, "El archivo no contiene un documento instancia XBRL bien formado y por lo tanto no pudo ser validado, verifique la codificación del archivo");
                return;
            }
            if (streamArchivo != null)
            {
                byte[] primerosBytes = new byte[10];
                streamArchivo.Position = 0;
                //Leer primeros 10 bytes
                streamArchivo.Read(primerosBytes, 0, 10);
                //Para buscar los primeros bytes de marca de orden que indicarían que el archivo es UTF-8 con BOM
                bool coincideUTF = false;
                for (int iIndicador = 0; iIndicador < INDICADORES_UTF.Length; iIndicador++)
                {
                    if (primerosBytes.Length >= INDICADORES_UTF[iIndicador].Length)
                    {
                        coincideUTF = true;
                        //Comparar si la cadena de bytes inicia con los indicadores
                        for (int iPosIndicador = 0; iPosIndicador < INDICADORES_UTF[iIndicador].Length; iPosIndicador++)
                        {
                            if (primerosBytes[iPosIndicador] != INDICADORES_UTF[iIndicador][iPosIndicador])
                            {
                                coincideUTF = false;
                                break;
                            }
                        }
                        if (coincideUTF)
                        {
                            break;
                        }
                    }
                }
                if (coincideUTF)
                {
                    AgregarErrorFatal(resultadoValidacion, null, null, null, "El archivo no contiene un documento instancia XBRL bien formado y por lo tanto no pudo ser validado, verifique la codificación del archivo");

                }
            }
            
        }
        /// <summary>
        /// Consume los hechos del documento de instancia para organizar los periodos reportados en el archivo, las unidades utilizadas
        /// y la entidad que reporta la información
        /// </summary>
        /// <param name="documentoXbrl">Documento XBRL de origen</param>
        /// <param name="resultadoValidcion">Objeot donde se llenará el resumen de los periodos</param>
        private void CrearResumenDePeriodos(DocumentoInstanciaXbrlDto documentoXbrl, ResultadoValidacionDocumentoXBRLDto resultadoValidcion)
        {
            var mapaPeriodos = new Dictionary<String, ResumenValidacionPeriodoXBRLDto>();
            foreach(var hecho in documentoXbrl.HechosPorId.Values){
                if (hecho.IdContexto != null && documentoXbrl.ContextosPorId.ContainsKey(hecho.IdContexto)) {
                    var contexto = documentoXbrl.ContextosPorId[hecho.IdContexto];
                    ResumenValidacionPeriodoXBRLDto resumenPeriodo = null;
                    String llavePeriodo = null;
                    if (contexto.Periodo.Tipo == PeriodoDto.Duracion)
                    {
                        llavePeriodo = DateUtil.ToStandarString(contexto.Periodo.FechaInicio) + "-" + DateUtil.ToStandarString(contexto.Periodo.FechaFin);  
                    }
                    else if (contexto.Periodo.Tipo == PeriodoDto.Instante)
                    {
                        llavePeriodo = DateUtil.ToStandarString(contexto.Periodo.FechaInstante);  
                    }else{
                        llavePeriodo = "Para siempre";
                    }

                    llavePeriodo += "-" + contexto.Entidad.Id;

                    if (!mapaPeriodos.ContainsKey(llavePeriodo))
                    {
                        resumenPeriodo = new ResumenValidacionPeriodoXBRLDto() {
                                Entidad = contexto.Entidad.Id,
                                Errores = new List<ErrorCargaTaxonomiaDto>(),
                                IdContextos = new List<String>(),
                                TipoPeriodo = (short)contexto.Periodo.Tipo,
                                Unidades = new List<String>()
                            };
                        if (contexto.Periodo.Tipo == PeriodoDto.Duracion)
                        {
                            resumenPeriodo.FechaInicio = contexto.Periodo.FechaInicio;
                            resumenPeriodo.FechaFin = contexto.Periodo.FechaFin;
                        }
                        else if (contexto.Periodo.Tipo == PeriodoDto.Instante)
                        {
                            resumenPeriodo.FechaFin = contexto.Periodo.FechaInstante;
                        }
                        mapaPeriodos.Add(
                            llavePeriodo, resumenPeriodo
                            );
                    }

                    resumenPeriodo = mapaPeriodos[llavePeriodo];
                    if(!resumenPeriodo.IdContextos.Contains(hecho.IdContexto)){
                        resumenPeriodo.IdContextos.Add(hecho.IdContexto);   
                    }
                    if (hecho.IdUnidad != null && documentoXbrl.UnidadesPorId.ContainsKey(hecho.IdUnidad)) {
                        var unidad = documentoXbrl.UnidadesPorId[hecho.IdUnidad];
                        String moneda = null;
                        var medidas = new List<MedidaDto>();
                        if (unidad.Tipo == UnidadDto.Medida)
                        {
                            medidas.AddRange(unidad.Medidas);
                        }
                        else {
                            medidas.AddRange(unidad.MedidasNumerador);
                            medidas.AddRange(unidad.MedidasDenominador);
                        }
                        foreach(var medida in medidas){
                            if (medida.EspacioNombres.Equals(EspacioNombresConstantes.ISO_4217_Currency_Namespace)) {
                                moneda = medida.Nombre;
                                break;
                            }
                        }
                        if (moneda != null && !resumenPeriodo.Unidades.Contains(moneda)) {
                            resumenPeriodo.Unidades.Add(moneda);
                        }
                    }
                }
            }
            resultadoValidcion.Periodos = mapaPeriodos.Values.ToList();
        }
    }
}
