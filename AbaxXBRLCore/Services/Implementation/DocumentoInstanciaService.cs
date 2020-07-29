using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Diagnostics;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using AbaxXBRL.Constantes;
using AbaxXBRL.Taxonomia;
using AbaxXBRL.Taxonomia.Common;
using AbaxXBRL.Taxonomia.Impl;
using AbaxXBRL.Taxonomia.Validador;
using AbaxXBRL.Taxonomia.Validador.Impl;
using AbaxXBRLCore.Common.Cache;
using AbaxXBRLCore.Common.Constants;
using AbaxXBRLCore.Common.Converter;
using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.Entities;
using AbaxXBRLCore.lang;
using AbaxXBRLCore.Repository;
using AbaxXBRLCore.Viewer.Application.Dto;
using AbaxXBRLCore.Viewer.Application.Import;
using AbaxXBRLCore.Viewer.Application.Service.Impl;
using Aspose.Words;
using Aspose.Words.Saving;
using Newtonsoft.Json;
using Spring.Transaction;
using Spring.Transaction.Interceptor;
using ContextoDto = AbaxXBRLCore.Common.Dtos.ContextoDto;
using DateUtil = AbaxXBRLCore.Common.Util.DateUtil;
using Formatting = Newtonsoft.Json.Formatting;
using Spring.Util;
using AbaxXBRLCore.Viewer.Application.Service;
using AbaxXBRLCore.Viewer.Application.Dto.EditorGenerico;
using AbaxXBRLCore.Viewer.Application.Dto.Angular;
using NPOI.XSSF.UserModel;
using NPOI.SS.UserModel;
using NPOI.SS.Util;
using System.Threading;
using AbaxXBRL.Taxonomia.Linkbases;
using AbaxXBRLCore.XPE.impl;
using System.Web;
using Quartz;
using Quartz.Impl;
using System.Data;
using Aspose.Words.Drawing;
using System.Drawing;
using AbaxXBRLCore.Distribucion;
using AbaxXBRLCore.Validador;
using AbaxXBRLCore.Validador.Impl;
using System.Configuration;
using System.Net;
using AbaxXBRL.Util;

namespace AbaxXBRLCore.Services.Implementation
{
    /// <summary>
    /// Implementación del servicio de negocio para la administración de documentos de instancia en la aplicación
    /// <author>Emigdio Hernández</author>
    /// </summary>
    public class DocumentoInstanciaService : IDocumentoInstanciaService
    {
        const string PATRON_ETIQUETA_NOTAS = @"\[XBRL-\S+\]";
        /// <summary>
        /// Objeto que permite el acceso a los datos de la base de datos
        /// </summary>
        public IDocumentoInstanciaRepository DocumentoInstanciaRepository { get; set; }

        /// <summary>
        /// Objeto que permite el acceso a los datos de las versiones de un documento de instancia
        /// </summary>
        public IVersionDocumentoInstanciaRepository VersionDocumentoInstanciaRepository { get; set; }

        /// <summary>
        /// Objeto de repository para el almacenamiento y consulta de permisos de usuario por documento
        /// </summary>
        public IUsuarioDocumentoInstanciaRepository UsuarioDocumentoInstanciaRepository { get; set; }

        /// <summary>
        /// Objeto de repository para el almacenamiento y consulta de usuarios
        /// </summary>
        public IUsuarioRepository UsuarioRepository { get; set; }

        /// <summary>
        /// Objeto que permite la interacción con BD de la entidad Alerta
        /// </summary>
        public IAlertaRepository AlertaRepository { get; set; }

        /// <summary>
        /// Repository para el acceso a la tabla de unidad
        /// </summary>
        public IUnidadRepository UnidadRepository { set; get; }
        /// <summary>
        /// Repository para el acceso a la tabla de contextos
        /// </summary>
        public IContextoRepository ContextoRepository { get; set; }
        /// <summary>
        /// Repository para el acceso a la tabla de DtsDocumentoInstancia
        /// </summary>
        public IDtsDocumentoInstanciaRepository DtsDocumentoInstanciaRepository { get; set; }
       
        /// <summary>
        /// Repository para el acceso a la tabla de hechos
        /// </summary>
        public IHechoRepository HechoRepository { get; set; }
        /// <summary>
        /// Repository para el acceso a los datos de empresa
        /// </summary>
        public IEmpresaRepository EmpresaRepository { get; set; }
        /// <summary>
        /// Repositorio para el acceso a los datos de las notas al pie de un documento de instancia
        /// </summary>
        public INotaAlPieRepository NotaAlPieRepository { get; set; }
        /// <summary>
        /// Repositorio para el acceso al catálogo de taxonomías registradas
        /// </summary>
        public ITaxonomiaXbrlRepository TaxonomiaXbrlRepository { get; set; }
        /// <summary>
        /// Repository para el acceso a la tabla de hechos
        /// </summary>
        public IArchivoAdjuntoXbrlRepository ArchivoAdjuntoXbrlRepository { get; set; }


        /// <summary>
        /// Estrategia de caché para la carga de documentos
        /// </summary>
        private EstrategiaCacheTaxonomiaMemoria EstrategiaCacheTaxonomia { get; set; }
        /// <summary>
        /// Caché de  los DTO's que representan una taxonomía
        /// </summary>
        private ICacheTaxonomiaXBRL CacheTaxonomia { get; set; }

        /// <summary>
        /// Importador general para archivos
        /// </summary>
        public IImportadorExportadorArchivoADocumentoInstancia ImportadorExportadorArchivoDocumentoInstancia { get; set;}

        /// <summary>
        /// Servicio para la transformación de modelos de taxonomías y documentos de instancia
        /// </summary>
        public IXbrlViewerService XbrlViewerService { get; set; }
        /// <summary>
        /// Indica si se debe de inicializar la taxonomía de inicio
        /// </summary>
        public string IndicadorInicializarTaxonomias { get; set; }

        /// <summary>
        /// Expresion para la ejecución de cada cierto tiempo el detalle de hechos contextos de la ultima versión de un documento instancia
        /// </summary>
        public string CronExpresionVersionDocumentoPendientes { get; set; }
        /// <summary>
        /// Lista de los entry points para la precarga de taxonomías
        /// </summary>
        public System.Collections.ArrayList TaxonomiasPreCarga { get; set; }
        /// <summary>
        /// Servicio de almacenamiento de documentos
        /// </summary>
        public IAlmacenarDocumentoInstanciaService AlmacenarDocumentoInstanciaService { get; set; }
        /// <summary>
        /// Servicio de procesamiento de solicitudes de distribución
        /// </summary>
        public IProcesarDistribucionDocumentoXBRLService ProcesarDistribucionDocumentoXBRLService { get; set; }
        /// <summary>
        /// Validadores
        /// </summary>
        public ValidadorArchivoInstanciaXBRLSpringFactory ValidadorFactory { get; set; }

        /// <summary>
        /// Definicion de respositorio para registro de auditoria
        /// </summary>
        public IRegistroAuditoriaRepository RegistroAuditoriaRepository { get; set; }

        /// <summary>
        /// Definición de repositorio para el registro sobre la el proceso de registros de una versión de un documento
        /// Insstancia
        /// </summary>
        public IBitacoraVersionDocumentoRepository BitacoraVersionDocumentoRepository { get; set; }

        /// <summary>
        /// Configuración auxiliar para el procesamiento de documentos XBRL.
        /// </summary>
        public ConfiguracionAuxiliarXBRL ConfiguracionAuxiliarXBRL;

        /// <summary>
        /// Bandera que indica si se debe de forzar la carga por esquema HTTPS.
        /// </summary>
        private static bool ForzarHttp { get; set; }
        /// <summary>
        /// Constructor por defecto.
        /// </summary>
        static DocumentoInstanciaService()
        {
            //Inicializa la licencia de ASPOSE Words
            ActivadorLicenciaAsposeUtil.ActivarAsposeWords();
            bool _forzarEsquemaHttp = false;
            var paramForzarHttp = System.Configuration.ConfigurationManager.AppSettings.Get("ForzarEsquemaHttp");
            if (!String.IsNullOrEmpty(paramForzarHttp))
            {
                Boolean.TryParse(paramForzarHttp, out _forzarEsquemaHttp);
                //LogUtil.Info("Valor del parámetro: ForzarEsquemaHttp = " + _forzarEsquemaHttp);
            }
            ForzarHttp = _forzarEsquemaHttp;
        }

        public ResultadoOperacionDto ObtenerTaxonomiasRegistradas()
        {
            var resultado = new ResultadoOperacionDto();
            resultado.InformacionExtra = TaxonomiaXbrlRepository.GetAll().Include(x => x.ArchivoTaxonomiaXbrl).ToList();
            resultado.Resultado = true;
            return resultado;
        }

        public ResultadoOperacionDto ObtenerDocumentosDeUsuario(string claveEmisora, DateTime fechaCreacion,
                                                                bool esDueno, long idUsuario)
        {
            IQueryable<DocumentoInstancia> resultado =
                DocumentoInstanciaRepository.ObtenerDocumentosDeUsuario(claveEmisora, fechaCreacion,
                                                                        esDueno, idUsuario);
            var res = new ResultadoOperacionDto();
            res.Resultado = true;
            res.InformacionExtra = resultado;
            return res;
        }


        public ResultadoOperacionDto ObtenerDocumentosEnviadosSinUsuario(string claveEmisora, DateTime fechaCreacion)
        {
            IQueryable<DocumentoInstancia> resultado =
               DocumentoInstanciaRepository.ObtenerDocumentosEnviadosSinUsuario(claveEmisora, fechaCreacion);
            var res = new ResultadoOperacionDto();
            res.Resultado = true;
            res.InformacionExtra = resultado;
            return res;
        }

        public ResultadoOperacionDto ObtenerUltimaVersionDocumentoInstancia(long idDocumentoInstancia)
        {
            var resultado = new ResultadoOperacionDto();
            VersionDocumentoInstancia version =
                VersionDocumentoInstanciaRepository.ObtenerUltimaVersionDocumentoInstancia(idDocumentoInstancia);
            resultado.Resultado = true;
            resultado.InformacionExtra = version;
            return resultado;
        }

        public ResultadoOperacionDto ObtenerVersionesDocumentoInstancia(long idDocumentoInstancia)
        {
            var resultado = new ResultadoOperacionDto();

            var versiones = VersionDocumentoInstanciaRepository.ObtenerVersionesDocumentoInstancia(idDocumentoInstancia);

            resultado.Resultado = true;
            resultado.InformacionExtra = versiones;

            return resultado;
        }

        [Transaction(TransactionPropagation.Required)]
        public ResultadoOperacionDto EliminarDocumentoInstancia(long idDocumentoInstancia, long idUsuarioExec)
        {
            ResultadoOperacionDto resultado = new ResultadoOperacionDto();

            DocumentoInstancia doc = DocumentoInstanciaRepository.GetById(idDocumentoInstancia);

            if (doc != null)
            {
                if (doc.UsuarioDocumentoInstancia.Any(ud => ud.EsDueno && ud.IdUsuario == idUsuarioExec))
                {
                    DocumentoInstanciaRepository.DeleteCascade(doc);
                    resultado.InformacionAuditoria = new InformacionAuditoriaDto();
                    resultado.InformacionAuditoria.Accion = ConstantsAccionAuditable.Borrar;
                    resultado.InformacionAuditoria.Empresa = doc.IdEmpresa;
                    resultado.InformacionAuditoria.Fecha = DateTime.Now;
                    resultado.InformacionAuditoria.IdUsuario = idUsuarioExec;
                    resultado.InformacionAuditoria.Modulo = ConstantsModulo.EditorDocumentosXBRL;
                    resultado.InformacionAuditoria.Registro = "Se elimina el documento de instancia " + doc.Titulo;
                    resultado.Resultado = true;
                }
                else
                {
                    resultado.Mensaje = "El Documento de Instancia " + doc.Titulo + " a borrar no pertenece al usuario";
                    resultado.Resultado = false;
                }
            }
            else
            {
                resultado.Mensaje = "No existe el Documento de Instancia (" + idDocumentoInstancia + ") a borrar";
                resultado.Resultado = false;
            }


            return resultado;
        }


        public ResultadoOperacionDto ObtenerDocumentoInstancia(long idDocumentoInstancia)
        {
            var resultado = new ResultadoOperacionDto();
            DocumentoInstancia doc = DocumentoInstanciaRepository.GetById(idDocumentoInstancia);
            if (doc != null)
            {
                resultado.InformacionExtra = doc;
            }
            resultado.Resultado = true;
            return resultado;
        }

       


        /// <summary>
        /// Busca o crea un contexto nuevo
        /// </summary>
        /// <returns>Contexto encontrado o creado</returns>
        private HechosEnContextoDto BuscarContexto(AbaxXBRLCore.Common.Dtos.DocumentoInstanciaDto instanciaDto, ContextoDto contexto)
        {
            foreach (var contextoInst in instanciaDto.ListaContextos)
            {
                if (contextoInst.Contexto.FechaFin.Equals(contexto.FechaFin))
                {
                    if (!contextoInst.Contexto.FechaInicio.Equals(DateTime.MinValue))
                    {
                        if (contextoInst.Contexto.FechaInicio.Equals(contexto.FechaInicio))
                        {
                            return contextoInst;
                        }
                    }
                    else
                    {
                        return contextoInst;
                    }

                }
            }
            //El contexto no existe, crear
            var contextoNuevo = new HechosEnContextoDto();
            contextoNuevo.Contexto.FechaInicio = contexto.FechaInicio;
            contextoNuevo.Contexto.FechaFin = contexto.FechaFin;
            instanciaDto.ListaContextos.Add(contextoNuevo);
            return contextoNuevo;
        }

        /// <summary>
        /// Obtiene un color en forma de random de una paleta de colores definida
        /// </summary>
        /// <returns>Color definido en una paleta de colores</returns>
        private short ObtenerColorEntidad(int indiceColor)
        {

            short[] colores = { NPOI.SS.UserModel.IndexedColors.Grey25Percent.Index, 
                                   NPOI.SS.UserModel.IndexedColors.BrightGreen.Index, 
                                   NPOI.SS.UserModel.IndexedColors.Grey50Percent.Index, 
                                   NPOI.SS.UserModel.IndexedColors.LightBlue.Index, 
                                   NPOI.SS.UserModel.IndexedColors.LightCornflowerBlue.Index, 
                                   NPOI.SS.UserModel.IndexedColors.LightGreen.Index, 
                                   NPOI.SS.UserModel.IndexedColors.LightOrange.Index, 
                                   NPOI.SS.UserModel.IndexedColors.LightTurquoise.Index, 
                                   NPOI.SS.UserModel.IndexedColors.LightYellow.Index, 
                                   NPOI.SS.UserModel.IndexedColors.Lime.Index};

            if (indiceColor == colores.Length) indiceColor = 0;
            return colores[indiceColor];

        }

        public MemoryStream ExportDatosEstructuraDocumento(Dictionary<string, object> estructuraDocumento, ConsultaAnalisisDto consultaAnalisisDto) {

            XSSFWorkbook wb = new XSSFWorkbook();
            ISheet sh = null;
            int indiceColor = 0;

            if (estructuraDocumento.Count > 0)
            {
                var instanciaDto = (DocumentoInstanciaXbrlDto)estructuraDocumento["DocumentoInstancia"];


                foreach (var rolTaxonomiaConsulta in consultaAnalisisDto.ConsultaAnalisisRolTaxonomia)
                {
                    var Uri = rolTaxonomiaConsulta.Uri;
                    var rol = instanciaDto.Taxonomia.RolesPresentacion.Where(rolPresentacion => rolPresentacion.Uri.Equals(Uri)).First();

                    var estructuraDocumentoRol = (Dictionary<string, object>)estructuraDocumento[rol.Uri];
                    var conceptosEstructuraDocumento = (Dictionary<string, object>)estructuraDocumentoRol["Conceptos"];
                    var hechosContextoConcepto = new Dictionary<string, Dictionary<string, AbaxXBRLCore.Viewer.Application.Dto.HechoDto>>();

                    var contextosPeriodoRol = new Dictionary<string, Dictionary<string, AbaxXBRLCore.Viewer.Application.Dto.ContextoDto>>();
                    var contextosInstanteRol = new Dictionary<string, Dictionary<string, AbaxXBRLCore.Viewer.Application.Dto.ContextoDto>>();
                    var contextosRol = new Dictionary<string, Dictionary<string, Dictionary<string, AbaxXBRLCore.Viewer.Application.Dto.ContextoDto>>>();
                    var emisoras = new Dictionary<string, short>();

                    foreach (var idConcepto in conceptosEstructuraDocumento.Keys)
                    {
                        if (instanciaDto.HechosPorIdConcepto.ContainsKey(idConcepto))
                        {
                            var IdHechosConcepto = instanciaDto.HechosPorIdConcepto[idConcepto];
                            foreach (var IdHecho in IdHechosConcepto)
                            {
                                var Hecho = instanciaDto.HechosPorId[IdHecho];
                                var Contexto = instanciaDto.ContextosPorId[Hecho.IdContexto];
                                if (hechosContextoConcepto.ContainsKey(Hecho.IdContexto))
                                {
                                    if (!hechosContextoConcepto[Hecho.IdContexto].ContainsKey(Hecho.IdConcepto))
                                    {
                                        hechosContextoConcepto[Hecho.IdContexto].Add(Hecho.IdConcepto, Hecho);
                                    }
                                }
                                else
                                {
                                    var hechoDiccionario = new Dictionary<string, AbaxXBRLCore.Viewer.Application.Dto.HechoDto>();
                                    hechoDiccionario.Add(Hecho.IdConcepto, Hecho);
                                    hechosContextoConcepto.Add(Hecho.IdContexto, hechoDiccionario);
                                }

                                if (!emisoras.ContainsKey(Contexto.Entidad.IdEntidad))
                                {
                                    emisoras.Add(Contexto.Entidad.IdEntidad, ObtenerColorEntidad(indiceColor++));
                                }
                                if (ValidarContextoAgregar(Contexto, consultaAnalisisDto.ConsultaAnalisisPeriodo))
                                {
                                    if (Contexto.Periodo.Tipo == Period.Instante)
                                    {
                                        this.agregarContexto(contextosInstanteRol, Contexto);
                                    }
                                    else
                                    {
                                        this.agregarContexto(contextosPeriodoRol, Contexto);
                                    }
                                }
                            }
                        }

                    }

                    foreach (var emisora in emisoras.Keys)
                    {
                        var contextosPeriodoEmisora = contextosPeriodoRol.ContainsKey(emisora) ? contextosPeriodoRol[emisora] : null;
                        var contextosInstanteEmisora = contextosInstanteRol.ContainsKey(emisora) ? contextosInstanteRol[emisora] : null;

                        if (contextosPeriodoEmisora != null || contextosInstanteEmisora != null)
                        {
                            if (rol.EsDimensional == null || (rol.EsDimensional != null && !rol.EsDimensional.Value))
                            {
                                contextosRol.Add(emisora, this.unificarContextos(contextosPeriodoEmisora, contextosInstanteEmisora));
                            }
                            else
                            {
                                contextosRol.Add(emisora, this.unificarContextosDimensional(contextosPeriodoEmisora, contextosInstanteEmisora));
                            }
                        }
                    }


                    //Se crea el encabezado

                    sh = wb.CreateSheet(rol.Uri.Substring(rol.Uri.Length - 6));
                    sh.CreateFreezePane(0, 3, 0, 3);

                    var widthColumnConceptos = 100 * 256;
                    var widthColumnMiembro = 100 * 256;

                    sh.SetColumnWidth(0, widthColumnConceptos);

                    var renglonEnzabezado = sh.CreateRow(0);

                    var celda = renglonEnzabezado.GetCell(0, MissingCellPolicy.CREATE_NULL_AS_BLANK);
                    celda.SetCellValue(rol.Nombre);


                    int numeroRenglonEmisora = 1;
                    int numeroRenglonContextos = 2;
                    int columnaEmisora = 1;
                    int columnaContexto = 1;

                    var renglonEntidad = sh.CreateRow(numeroRenglonEmisora);
                    var renglonContexto = sh.CreateRow(numeroRenglonContextos);

                    var font = wb.CreateFont();
                    font.FontHeightInPoints = 11;
                    font.Boldweight = (short)NPOI.SS.UserModel.FontBoldWeight.Bold;



                    var estiloDimension = wb.CreateCellStyle();
                    estiloDimension.Alignment = NPOI.SS.UserModel.HorizontalAlignment.Center;
                    estiloDimension.VerticalAlignment = NPOI.SS.UserModel.VerticalAlignment.Center;
                    estiloDimension.WrapText = true;
                    estiloDimension.SetFont(font);

                    var celdaMiembroDimension = renglonContexto.GetCell(1, MissingCellPolicy.CREATE_NULL_AS_BLANK);
                    if (rol.EsDimensional != null && rol.EsDimensional.Value)
                    {
                        celdaMiembroDimension.SetCellValue("Miembro");
                        celdaMiembroDimension.CellStyle = estiloDimension;
                        sh.SetColumnWidth(1, widthColumnMiembro);
                        columnaEmisora = 2;
                        columnaContexto = 2;
                    }


                    foreach (var IdEntidad in contextosRol.Keys)
                    {
                        var contextosEntidad = contextosRol[IdEntidad];
                        if (contextosEntidad.Count > 0)
                        {
                            var celdaEmisora = renglonEntidad.CreateCell(columnaEmisora);
                            celdaEmisora.SetCellValue(IdEntidad);
                            var celdaRange = new CellRangeAddress(
                                numeroRenglonEmisora,
                                numeroRenglonEmisora,
                                columnaEmisora,
                                (columnaEmisora - 1) + contextosEntidad.Count
                            );

                            sh.AddMergedRegion(celdaRange);

                            var estiloEmisora = wb.CreateCellStyle();
                            estiloEmisora.Alignment = NPOI.SS.UserModel.HorizontalAlignment.Center;
                            estiloEmisora.VerticalAlignment = NPOI.SS.UserModel.VerticalAlignment.Center;
                            estiloEmisora.WrapText = true;

                            celdaEmisora.CellStyle = estiloEmisora;
                            celdaEmisora.CellStyle.FillPattern = NPOI.SS.UserModel.FillPattern.LessDots;
                            celdaEmisora.CellStyle.FillForegroundColor = emisoras[IdEntidad];
                            celdaEmisora.CellStyle.BorderBottom = BorderStyle.Medium;
                            celdaEmisora.CellStyle.BorderTop = BorderStyle.Medium;
                            celdaEmisora.CellStyle.BorderLeft = BorderStyle.Medium;
                            celdaEmisora.CellStyle.BorderRight = BorderStyle.Medium;

                            foreach (var idContextoEntidad in contextosEntidad.Keys)
                            {
                                var listadoContextos = contextosEntidad[idContextoEntidad];
                                var contexto = listadoContextos[idContextoEntidad];

                                celda = renglonContexto.GetCell(columnaContexto++, MissingCellPolicy.CREATE_NULL_AS_BLANK);
                                if (contexto.Periodo.Tipo == Period.Instante)
                                {
                                    celda.SetCellValue(contexto.Periodo.FechaInstante.ToString("dd/MM/yyyy"));
                                }
                                else
                                {
                                    celda.SetCellValue(contexto.Periodo.FechaInicio.ToString("dd/MM/yyyy") + "-" + contexto.Periodo.FechaFin.ToString("dd/MM/yyyy"));
                                }
                            }

                            columnaEmisora = columnaEmisora + contextosEntidad.Count;
                        }

                    }

                    if (rol.EsDimensional != null && rol.EsDimensional.Value)
                    {
                        this.crearFormatoDimensional(sh, conceptosEstructuraDocumento, contextosRol, instanciaDto, hechosContextoConcepto, consultaAnalisisDto, emisoras, rol); 
                    }
                    else
                    {
                        this.crearFormatoNoDimensional(sh, conceptosEstructuraDocumento, contextosRol, instanciaDto, hechosContextoConcepto, consultaAnalisisDto, emisoras);
                    }

                }
            }
            else
            {
                sh = wb.CreateSheet("Sin Informacion");
                var renglonEnzabezado = sh.CreateRow(0);

                var celda = renglonEnzabezado.GetCell(0, MissingCellPolicy.CREATE_NULL_AS_BLANK);
                celda.SetCellValue("Sin informacion a mostrar en el documento");

            }


            var memoryStreamSalida = new MemoryStream();

            var currentCulture = Thread.CurrentThread.CurrentCulture;
            Thread.CurrentThread.CurrentCulture = new CultureInfo("en-US");
            wb.Write(memoryStreamSalida);
            Thread.CurrentThread.CurrentCulture = currentCulture;

            return memoryStreamSalida;
        }

        /// <summary>
        /// Valida si el contexto del formato se debe de mostrar en el documento en base a la consulta de configuración
        /// </summary>
        /// <param name="contexto">Contiene la información del contexto</param>
        /// <param name="periodos">Contiene la información de los periodos configurados</param>
        /// <returns>Validacion del contexto</returns>
        private bool ValidarContextoAgregar(AbaxXBRLCore.Viewer.Application.Dto.ContextoDto contexto, List<ConsultaAnalisisPeriodoDto> periodos)
        {
            bool EsContextoValidoConfigurado = false;
            var listadoFechasInstante = new List<DateTime>();

            var listadoFechasInicioPeriodo = new List<DateTime>();
            var listadoFechasFinPeriodo = new List<DateTime>();


            foreach (var consultaPeriodo in periodos)
            {
                int anioActual = consultaPeriodo.Anio.Value;
                int mesTrimestreActual = consultaPeriodo.Trimestre.Value * 3;
                int mesInicioTrimestreActual = (consultaPeriodo.Trimestre.Value * 3) - 2;


                var fechaPeriodoActual = new DateTime(anioActual, mesTrimestreActual, 1);
                var fechaInicioPeriodoActual = new DateTime(anioActual, mesInicioTrimestreActual, 1);
                var fechaInicioPeriodoAnterior = new DateTime(anioActual - 1, mesInicioTrimestreActual, 1);

                var fechaPeriodoAnterior = new DateTime(anioActual - 1, mesTrimestreActual, 1);
                var fechaPeriodoAnioAnterior = new DateTime(anioActual, 1, 1);
                var fechaInicioPeriodo = new DateTime(anioActual, 1, 1);


                //Listado de fechas validas para contextos de tipo instante
                listadoFechasInstante.Add(fechaPeriodoActual.AddMonths(1).AddDays(-1));
                listadoFechasInstante.Add(fechaPeriodoAnterior.AddMonths(1).AddDays(-1));
                listadoFechasInstante.Add(fechaPeriodoAnioAnterior.AddDays(-1));

                //Listado de fechas validas para contextos de tipo duracion
                listadoFechasInicioPeriodo.Add(fechaInicioPeriodoActual);
                listadoFechasInicioPeriodo.Add(fechaInicioPeriodoAnterior);
                listadoFechasInicioPeriodo.Add(fechaInicioPeriodo);


                listadoFechasFinPeriodo.Add(fechaPeriodoActual.AddMonths(1).AddDays(-1));
                listadoFechasFinPeriodo.Add(fechaPeriodoAnterior.AddMonths(1).AddDays(-1));
            }

            if (contexto.Periodo.Tipo == Period.Instante)
            {
                var fechasPeriodoConsulta = listadoFechasInstante.Where(fechaPeriodo => fechaPeriodo.Equals(contexto.Periodo.FechaInstante)).ToList();

                if (fechasPeriodoConsulta.Count > 0)
                {
                    EsContextoValidoConfigurado = true;
                }
            }
            else
            {
                if (listadoFechasInicioPeriodo.Where(fechaPeriodo => fechaPeriodo.Equals(contexto.Periodo.FechaInicio)).ToList().Count > 0)
                {
                    if (listadoFechasFinPeriodo.Where(fechaPeriodo => fechaPeriodo.Equals(contexto.Periodo.FechaFin)).ToList().Count > 0)
                    {
                        EsContextoValidoConfigurado = true;
                    }
                }
            }

            return EsContextoValidoConfigurado;
        }

        /// <summary>
        /// Crea el detalle de hechos de un formato dimensional
        /// </summary>
        /// <param name="sh">Hoja de calculo que se va a agregar el formato</param>
        /// <param name="conceptosEstructuraDocumento">Información de conceptos en la estructura del documento</param>
        /// <param name="contextosRol">Contextos que tiene el formato que se mostrará</param>
        /// <param name="instanciaDto">Instancia de los documentos que integran el reporte</param>
        /// <param name="hechosContextoConcepto">Listado de hechos por contexto y concepto</param>
        /// <param name="consultaAnalisisDto">Información de la Configuracion de la consulta</param>
        private void crearFormatoDimensional(ISheet sh, Dictionary<string, object> conceptosEstructuraDocumento, Dictionary<string, Dictionary<string, Dictionary<string, AbaxXBRLCore.Viewer.Application.Dto.ContextoDto>>> contextosRol, DocumentoInstanciaXbrlDto instanciaDto, Dictionary<string, Dictionary<string, AbaxXBRLCore.Viewer.Application.Dto.HechoDto>> hechosContextoConcepto, ConsultaAnalisisDto consultaAnalisisDto, IDictionary<string, short> emisoras, RolDto<EstructuraFormatoDto> rol)
        {
            int numeroRenglonConceptoBase = 3;
            int numeroRenglonConcepto = 0;

            var widthColumnHechos = 35 * 256;

            ICellStyle estiloConcepto = sh.Workbook.CreateCellStyle();
            estiloConcepto.BorderBottom = BorderStyle.Medium;
            estiloConcepto.BorderTop = BorderStyle.Medium;
            estiloConcepto.BorderLeft = BorderStyle.Medium;
            estiloConcepto.BorderRight = BorderStyle.Medium;

            var estiloEmisoras = new Dictionary<string, ICellStyle>();
            foreach (var IdEntidad in contextosRol.Keys)
            {
                ICellStyle estiloCelda = sh.Workbook.CreateCellStyle();

                estiloCelda.FillPattern = NPOI.SS.UserModel.FillPattern.LessDots;
                estiloCelda.FillForegroundColor = emisoras[IdEntidad];

                estiloCelda.BorderBottom = BorderStyle.Medium;
                estiloCelda.BorderTop = BorderStyle.Medium;
                estiloCelda.BorderLeft = BorderStyle.Medium;
                estiloCelda.BorderRight = BorderStyle.Medium;

                estiloEmisoras.Add(IdEntidad, estiloCelda);
            }

            foreach (var idConcepto in conceptosEstructuraDocumento.Keys)
            {
                var seCreoConcepto = false;

                var numeroColumnaHecho = 2;
                var renglonesConcepto = new Dictionary<int, IRow>();

                foreach (var IdEntidad in contextosRol.Keys)
                {
                    var contextosEntidad = contextosRol[IdEntidad];

                    foreach (var idContextoPrincipal in contextosEntidad.Keys)
                    {
                        var contextosAgrupados = contextosEntidad[idContextoPrincipal];

                        numeroRenglonConcepto = numeroRenglonConceptoBase + 0;

                        foreach (var idContexto in contextosAgrupados.Keys)
                        {
                            if (hechosContextoConcepto.ContainsKey(idContexto) && hechosContextoConcepto[idContexto].ContainsKey(idConcepto))
                            {

                                if (!renglonesConcepto.ContainsKey(numeroRenglonConcepto))
                                {
                                    var informacionDimensional = "";
                                    var valoresDimension = contextosAgrupados[idContexto].ValoresDimension;

                                    if (contextosAgrupados[idContexto].ContieneInformacionDimensional)
                                    {

                                        if (!PerteneceConceptoAHipercuboEnRol(idConcepto, instanciaDto.Taxonomia, rol.Uri))
                                        {
                                            continue;
                                        }

                                        foreach (var valorDimension in valoresDimension)
                                        {


                                            var conceptoDimension = ObtenerEtiquetaConcepto(instanciaDto, valorDimension.IdDimension, consultaAnalisisDto.Idioma);
                                            var etiquetaMiembro = valorDimension.ElementoMiembroTipificado;

                                            if (!valorDimension.Explicita)
                                            {
                                                etiquetaMiembro = AbaxXBRL.Util.XmlUtil.CrearElementoXML(valorDimension.ElementoMiembroTipificado).InnerText;
                                            }

                                            if (valorDimension.IdItemMiembro != null)
                                            {
                                                etiquetaMiembro = ObtenerEtiquetaConcepto(instanciaDto, valorDimension.IdItemMiembro, consultaAnalisisDto.Idioma);
                                            }

                                            //rol.

                                            informacionDimensional += informacionDimensional + " " + conceptoDimension;
                                            informacionDimensional += " : " + etiquetaMiembro;
                                        }
                                    }

                                    var renglonConceptoCreacion = sh.CreateRow(numeroRenglonConcepto);

                                    var celdaConcepto = renglonConceptoCreacion.GetCell(0, MissingCellPolicy.CREATE_NULL_AS_BLANK);
                                    var etiquetaConcepto = ObtenerEtiquetaConcepto(instanciaDto, idConcepto, consultaAnalisisDto.Idioma);

                                    celdaConcepto.CellStyle = estiloConcepto;
                                    celdaConcepto.SetCellValue(etiquetaConcepto);


                                    var celdaDimension = renglonConceptoCreacion.GetCell(1, MissingCellPolicy.CREATE_NULL_AS_BLANK);

                                    celdaDimension.CellStyle = estiloConcepto;
                                    celdaDimension.SetCellValue(informacionDimensional);


                                    renglonesConcepto.Add(numeroRenglonConcepto, renglonConceptoCreacion);
                                }

                                var renglonConcepto = renglonesConcepto[numeroRenglonConcepto];

                                var valorHecho = hechosContextoConcepto[idContexto][idConcepto].Valor;

                                var celdaHecho = renglonConcepto.GetCell(numeroColumnaHecho, MissingCellPolicy.CREATE_NULL_AS_BLANK);

                                celdaHecho.CellStyle = estiloEmisoras[IdEntidad];

                                celdaHecho.SetCellValue(valorHecho);

                                sh.SetColumnWidth(numeroColumnaHecho - 1, widthColumnHechos);

                                seCreoConcepto = true;
                                numeroRenglonConcepto++;

                            }
                        }

                        numeroColumnaHecho++;
                    }
                }

                numeroRenglonConceptoBase = numeroRenglonConceptoBase + renglonesConcepto.Count;

                if (!seCreoConcepto)
                {
                    var EsDimension = instanciaDto.Taxonomia.ConceptosPorId[idConcepto].EsDimension!=null?instanciaDto.Taxonomia.ConceptosPorId[idConcepto].EsDimension.Value:false;
                    var EsMiembroDimension = instanciaDto.Taxonomia.ConceptosPorId[idConcepto].EsMiembroDimension != null ? instanciaDto.Taxonomia.ConceptosPorId[idConcepto].EsMiembroDimension.Value : false;

                    if (!instanciaDto.Taxonomia.ConceptosPorId[idConcepto].EsHipercubo && !EsDimension && !EsMiembroDimension)
                    {
                        var renglonConcepto = sh.CreateRow(numeroRenglonConceptoBase);
                        var celdaConcepto = renglonConcepto.GetCell(0, MissingCellPolicy.CREATE_NULL_AS_BLANK);

                        celdaConcepto.CellStyle = estiloConcepto;

                        celdaConcepto.SetCellValue(ObtenerEtiquetaConcepto(instanciaDto, idConcepto, consultaAnalisisDto.Idioma));
                        numeroRenglonConceptoBase++;
                    }
                }
            }
        }

        /// <summary>
        /// Obtiene la etiqueta de un concepto
        /// </summary>
        /// <param name="instanciaDto">Informacion del documento instancia para conocer las etiquetas de la taxonomia</param>
        /// <param name="idConcepto">Identificador del concepto</param>
        /// <param name="Idioma">Idioma que se desea consulta</param>
        /// <returns>Etiqueta del concepto en base al lenguaje especificado</returns>
        private string ObtenerEtiquetaConcepto(DocumentoInstanciaXbrlDto instanciaDto, string idConcepto, string Idioma)
        {
            var etiquetaConcepto = instanciaDto.Taxonomia.ConceptosPorId[idConcepto].Nombre;

            if (instanciaDto.Taxonomia.ConceptosPorId[idConcepto].Etiquetas.ContainsKey(Idioma) && instanciaDto.Taxonomia.ConceptosPorId[idConcepto].Etiquetas[Idioma].ContainsKey(Etiqueta.RolEtiqueta))
            {
                etiquetaConcepto = instanciaDto.Taxonomia.ConceptosPorId[idConcepto].Etiquetas[Idioma][Etiqueta.RolEtiqueta].Valor;
            }
            return etiquetaConcepto;

        }

        /// <summary>
        /// Crea el detalle de hechos de un formato No dimensional
        /// </summary>
        /// <param name="sh">Hoja de calculo que se va a agregar el formato</param>
        /// <param name="conceptosEstructuraDocumento">Información de conceptos en la estructura del documento</param>
        /// <param name="contextosRol">Contextos que tiene el formato que se mostrará</param>
        /// <param name="instanciaDto">Instancia de los documentos que integran el reporte</param>
        /// <param name="hechosContextoConcepto">Listado de hechos por contexto y concepto</param>
        /// <param name="consultaAnalisisDto">Información de la Configuracion de la consulta</param>
        private void crearFormatoNoDimensional(ISheet sh, Dictionary<string, object> conceptosEstructuraDocumento, Dictionary<string, Dictionary<string, Dictionary<string, AbaxXBRLCore.Viewer.Application.Dto.ContextoDto>>> contextosRol, DocumentoInstanciaXbrlDto instanciaDto, Dictionary<string, Dictionary<string, AbaxXBRLCore.Viewer.Application.Dto.HechoDto>> hechosContextoConcepto, ConsultaAnalisisDto consultaAnalisisDto, IDictionary<string, short> emisoras)
        {
            int numeroRenglonConcepto = 3;
            var widthColumnHechos = 35 * 256;
            foreach (var idConcepto in conceptosEstructuraDocumento.Keys)
            {
                var renglonConcepto = sh.CreateRow(numeroRenglonConcepto);
                var celdaConcepto = renglonConcepto.GetCell(0, MissingCellPolicy.CREATE_NULL_AS_BLANK);
                var etiquetaConcepto = ObtenerEtiquetaConcepto(instanciaDto, idConcepto, consultaAnalisisDto.Idioma);

                ICellStyle estiloConcepto = sh.Workbook.CreateCellStyle();
                estiloConcepto.BorderBottom = BorderStyle.Medium;
                estiloConcepto.BorderTop = BorderStyle.Medium;
                estiloConcepto.BorderLeft = BorderStyle.Medium;
                estiloConcepto.BorderRight = BorderStyle.Medium;

                var estiloEmisoras = new Dictionary<string, ICellStyle>();
                foreach (var IdEntidad in contextosRol.Keys)
                {
                    ICellStyle estiloCelda = sh.Workbook.CreateCellStyle();

                    estiloCelda.FillPattern = NPOI.SS.UserModel.FillPattern.LessDots;
                    estiloCelda.FillForegroundColor = emisoras[IdEntidad];

                    estiloCelda.BorderBottom = BorderStyle.Medium;
                    estiloCelda.BorderTop = BorderStyle.Medium;
                    estiloCelda.BorderLeft = BorderStyle.Medium;
                    estiloCelda.BorderRight = BorderStyle.Medium;

                    estiloEmisoras.Add(IdEntidad, estiloCelda);
                }

                celdaConcepto.CellStyle = estiloConcepto;

                celdaConcepto.SetCellValue(etiquetaConcepto);

                var numeroColumnaHecho = 1;
                foreach (var IdEntidad in contextosRol.Keys)
                {
                    var contextosEntidad = contextosRol[IdEntidad];
                    foreach (var idContextoEntidad in contextosEntidad.Keys)
                    {
                        var contextoEntidad = contextosEntidad[idContextoEntidad];
                        var celdaHecho = renglonConcepto.GetCell(numeroColumnaHecho++, MissingCellPolicy.CREATE_NULL_AS_BLANK);
                        var valorHecho = "";

                        foreach (var idContexto in contextosEntidad[idContextoEntidad].Keys)
                        {
                            if (hechosContextoConcepto.ContainsKey(idContexto) && hechosContextoConcepto[idContexto].ContainsKey(idConcepto))
                            {
                                valorHecho = hechosContextoConcepto[idContexto][idConcepto].Valor;
                                break;
                            }
                        }

                        celdaHecho.CellStyle = estiloEmisoras[IdEntidad];
                        celdaHecho.SetCellValue(valorHecho);
                        sh.SetColumnWidth(numeroColumnaHecho - 1, widthColumnHechos);
                    }
                }
                numeroRenglonConcepto++;
            }
        }

        /// <summary>
        /// Agrupa contextos instantes en contextos de tipo duración en un formato no dimensional
        /// </summary>
        /// <param name="contextosPeriodoRol">Contextos definidos como periodos</param>
        /// <param name="contextosInstanteRol">Contextos definidos como instantes</param>
        /// <returns>Diccionario de contextos agrupados</returns>
        private Dictionary<string, Dictionary<string, AbaxXBRLCore.Viewer.Application.Dto.ContextoDto>> unificarContextos(Dictionary<string, AbaxXBRLCore.Viewer.Application.Dto.ContextoDto> contextosPeriodoRol, Dictionary<string, AbaxXBRLCore.Viewer.Application.Dto.ContextoDto> contextosInstanteRol)
        {

            var contextosRol = new Dictionary<string, Dictionary<string, AbaxXBRLCore.Viewer.Application.Dto.ContextoDto>>();
            if (contextosInstanteRol != null && contextosPeriodoRol != null)
            {
                foreach (var idContextoInstante in contextosInstanteRol.Keys)
                {
                    var contextoInstante = contextosInstanteRol[idContextoInstante];
                    var contextoAgrupado = false;
                    foreach (var idContexto in contextosPeriodoRol.Keys)
                    {
                        var contexto = contextosPeriodoRol[idContexto];
                        if ((contextoInstante.Periodo.FechaInstante.AddDays(1).Equals(contexto.Periodo.FechaInicio) || contextoInstante.Periodo.FechaInstante.Equals(contexto.Periodo.FechaFin)) && !contexto.ContieneInformacionDimensional)
                        {
                            if (!contextosRol.ContainsKey(idContexto))
                            {
                                var contextosPeriodosAgrupados = new Dictionary<string, AbaxXBRLCore.Viewer.Application.Dto.ContextoDto>();
                                contextosPeriodosAgrupados.Add(idContexto, contexto);
                                contextosPeriodosAgrupados.Add(idContextoInstante, contextoInstante);
                                contextosRol.Add(idContexto, contextosPeriodosAgrupados);
                            }
                            else
                            {
                                contextosRol[idContexto].Add(idContextoInstante, contextoInstante);
                            }

                            contextoAgrupado = true;
                        }
                    }
                    if (!contextoAgrupado && !contextoInstante.ContieneInformacionDimensional)
                    {
                        var contextosInstanteNoAgrupados = new Dictionary<string, AbaxXBRLCore.Viewer.Application.Dto.ContextoDto>();
                        contextosInstanteNoAgrupados.Add(idContextoInstante, contextoInstante);
                        contextosRol.Add(idContextoInstante, contextosInstanteNoAgrupados);
                    }
                }

                foreach (var idContextoPeriodo in contextosPeriodoRol.Keys)
                {
                    if (!contextosRol.ContainsKey(idContextoPeriodo) && !contextosPeriodoRol[idContextoPeriodo].ContieneInformacionDimensional)
                    {
                        var contextosInstante = new Dictionary<string, AbaxXBRLCore.Viewer.Application.Dto.ContextoDto>();
                        contextosInstante.Add(idContextoPeriodo, contextosPeriodoRol[idContextoPeriodo]);
                        contextosRol.Add(idContextoPeriodo, contextosInstante);
                    }
                }

            }
            else if (contextosInstanteRol != null && contextosPeriodoRol == null)
            {
                foreach (var idContextoInstante in contextosInstanteRol.Keys)
                {
                    if (!contextosInstanteRol[idContextoInstante].ContieneInformacionDimensional)
                    {
                        var contextosInstante = new Dictionary<string, AbaxXBRLCore.Viewer.Application.Dto.ContextoDto>();
                        contextosInstante.Add(idContextoInstante, contextosInstanteRol[idContextoInstante]);
                        contextosRol.Add(idContextoInstante, contextosInstante);
                    }

                }

            }
            else if (contextosInstanteRol == null && contextosPeriodoRol != null)
            {
                foreach (var idContextoPeriodo in contextosPeriodoRol.Keys)
                {
                    if (!contextosPeriodoRol[idContextoPeriodo].ContieneInformacionDimensional)
                    {
                        var contextosPeriodo = new Dictionary<string, AbaxXBRLCore.Viewer.Application.Dto.ContextoDto>();
                        contextosPeriodo.Add(idContextoPeriodo, contextosPeriodoRol[idContextoPeriodo]);
                        contextosRol.Add(idContextoPeriodo, contextosPeriodo);
                    }

                }

            }

            return contextosRol;

        }

        /// <summary>
        /// Agrupa contextos instantes en contextos de tipo duración en un formato dimensional
        /// </summary>
        /// <param name="contextosPeriodoRol">Contextos definidos como periodos</param>
        /// <param name="contextosInstanteRol">Contextos definidos como instantes</param>
        /// <returns>Diccionario de contextos agrupados</returns>
        private Dictionary<string, Dictionary<string, AbaxXBRLCore.Viewer.Application.Dto.ContextoDto>> unificarContextosDimensional(Dictionary<string, AbaxXBRLCore.Viewer.Application.Dto.ContextoDto> contextosPeriodoRol, Dictionary<string, AbaxXBRLCore.Viewer.Application.Dto.ContextoDto> contextosInstanteRol)
        {
            var contextosRol = new Dictionary<string, Dictionary<string, AbaxXBRLCore.Viewer.Application.Dto.ContextoDto>>();

            if (contextosInstanteRol != null)
            {
                foreach (var idContextoInstante in contextosInstanteRol.Keys)
                {
                    var contextoInstante = contextosInstanteRol[idContextoInstante];
                    var existeInstante = false;

                    foreach (var idContexto in contextosRol.Keys)
                    {
                        var contextos = contextosRol[idContexto];
                        var contextoPrincipal = contextos[idContexto];
                        if (contextoPrincipal.Periodo.Tipo == Period.Instante && contextoPrincipal.Periodo.FechaInstante.Equals(contextoInstante.Periodo.FechaInstante))
                        {
                            contextosRol[idContexto].Add(idContextoInstante, contextoInstante);
                            existeInstante = true;
                            break;
                        }
                    }
                    if (!existeInstante)
                    {
                        var contextosAgrupados = new Dictionary<string, AbaxXBRLCore.Viewer.Application.Dto.ContextoDto>();
                        contextosAgrupados.Add(idContextoInstante, contextoInstante);
                        contextosRol.Add(idContextoInstante, contextosAgrupados);
                    }
                }
            }

            if (contextosPeriodoRol != null)
            {
                foreach (var idContextoPeriodo in contextosPeriodoRol.Keys)
                {
                    var contextoPeriodo = contextosPeriodoRol[idContextoPeriodo];
                    var existePeriodo = false;

                    foreach (var idContexto in contextosRol.Keys)
                    {
                        var contextos = contextosRol[idContexto];
                        var contextoPrincipal = contextos[idContexto];
                        if (contextoPrincipal.Periodo.Tipo == Period.Duracion && contextoPrincipal.Periodo.FechaInicio.Equals(contextoPeriodo.Periodo.FechaInicio) && contextoPrincipal.Periodo.FechaFin.Equals(contextoPeriodo.Periodo.FechaFin))
                        {
                            contextosRol[idContexto].Add(idContextoPeriodo, contextoPeriodo);
                            existePeriodo = true;
                            break;
                        }
                    }
                    if (!existePeriodo)
                    {
                        var contextosAgrupados = new Dictionary<string, AbaxXBRLCore.Viewer.Application.Dto.ContextoDto>();
                        contextosAgrupados.Add(idContextoPeriodo, contextoPeriodo);
                        contextosRol.Add(idContextoPeriodo, contextosAgrupados);
                    }
                }

            }

            return contextosRol;
        }


        /// <summary>
        /// Agrega un nuevo contexto al diccionario validando si ya se ha registrado
        /// </summary>
        /// <param name="contextosRol">Contextos base</param>
        /// <param name="Contexto">Contexto que se pretende agregar</param>
        private void agregarContexto(Dictionary<string, Dictionary<string, AbaxXBRLCore.Viewer.Application.Dto.ContextoDto>> contextosRol, AbaxXBRLCore.Viewer.Application.Dto.ContextoDto Contexto)
        {
            if (!contextosRol.ContainsKey(Contexto.Entidad.IdEntidad))
            {
                var contextoEntidad = new Dictionary<string, AbaxXBRLCore.Viewer.Application.Dto.ContextoDto>();
                contextoEntidad.Add(Contexto.Id, Contexto);
                contextosRol.Add(Contexto.Entidad.IdEntidad, contextoEntidad);

            }
            else
            {
                var contextosEntidad = contextosRol[Contexto.Entidad.IdEntidad];
                if (!contextosEntidad.ContainsKey(Contexto.Id))
                {
                    contextosEntidad.Add(Contexto.Id, Contexto);
                }
            }
        }

        [Transaction(TransactionPropagation.Required)]
        public ResultadoOperacionDto BloquearLiberarDocumentoInstancia(long idDocumentoInstancia, bool bloquear,
                                                                       long idUsuarioExec)
        {
            var resultado = new ResultadoOperacionDto();
            DocumentoInstancia instancia = DocumentoInstanciaRepository.GetById(idDocumentoInstancia);
            Usuario usuarioBloqueo = null;
            Usuario usuarioActual = UsuarioRepository.GetById(idUsuarioExec);
            if (instancia.Bloqueado && instancia.IdUsuarioBloqueo != null)
            {
                usuarioBloqueo = UsuarioRepository.ObtenerUsuarioPorId(instancia.IdUsuarioBloqueo.Value);
            }
            UsuarioDocumentoInstancia udi =
                UsuarioDocumentoInstanciaRepository.Get(
                    x =>
                    x.IdDocumentoInstancia == idDocumentoInstancia && x.IdUsuario == idUsuarioExec && x.PuedeEscribir).
                    First();
            InformacionAuditoriaDto informacionAuditoria = null;
            var informacionExtra = new Dictionary<string, object>();
            if (udi != null)
            {
                if (bloquear)
                {
                    //Si se quiere bloquear 
                    if (instancia.Bloqueado)
                    {
                        //y está bloqueado por alguien mas
                        if(usuarioBloqueo != null && usuarioBloqueo.IdUsuario != idUsuarioExec)
                        {  //"El documento ya se encuentra bloqueado por el usuario: "
                            resultado.Resultado = false;
                            resultado.Mensaje = "EDITOR_XBRL_DOCUMENTO_BLOQUEADO_POR_USUARIO" + ": " + usuarioBloqueo.NombreCompleto();
                            informacionExtra.Add("Bloqueado", instancia.Bloqueado);
                            informacionExtra.Add("IdUsuarioBloqueo", usuarioBloqueo.IdUsuario);
                            informacionExtra.Add("NombreUsuarioBloqueo", usuarioBloqueo.NombreCompleto());
                            informacionExtra.Add("UltimaVersion", instancia.UltimaVersion);
                        }
                        else 
                        {
                            //Esta bloqueado por uno mismo : conservar el bloqueo
                            //"Se ha bloqueado con éxito el documento."
                            resultado.Resultado = true;
                            resultado.Mensaje = "EDITOR_XBRL_DOCUMENTO_BLOQUADO_CON_EXITO";
                            instancia.IdUsuarioBloqueo = idUsuarioExec;
                            informacionExtra.Add("Bloqueado", instancia.Bloqueado);
                            informacionExtra.Add("IdUsuarioBloqueo", idUsuarioExec);
                            informacionExtra.Add("NombreUsuarioBloqueo", usuarioActual.NombreCompleto());
                            informacionExtra.Add("UltimaVersion", instancia.UltimaVersion);
                        }

                    }
                    else
                    {
                        //No está bloqueado y se desea bloquear
                        //"Se ha bloqueado con éxito el documento."
                        resultado.Resultado = true;
                        instancia.Bloqueado = true;
                        instancia.IdUsuarioBloqueo = idUsuarioExec;
                        resultado.Mensaje = "EDITOR_XBRL_DOCUMENTO_BLOQUADO_CON_EXITO";
                        informacionExtra.Add("Bloqueado", instancia.Bloqueado);
                        informacionExtra.Add("IdUsuarioBloqueo", idUsuarioExec);
                        informacionExtra.Add("NombreUsuarioBloqueo", usuarioActual.NombreCompleto());
                        informacionExtra.Add("UltimaVersion", instancia.UltimaVersion);
                        var param = new List<object>() { instancia.Titulo };
                        informacionAuditoria = new InformacionAuditoriaDto(idUsuarioExec,
                            ConstantsAccionAuditable.Actualizar,
                           ConstantsModulo.EditorDocumentosXBRL,
                           MensajesServicios.BloquearLiberarDocumentoInstancia,
                           param);
                        informacionAuditoria.Empresa = instancia.IdEmpresa;
                        resultado.InformacionAuditoria = informacionAuditoria;
                    }
                }
                else
                {
                    //Se desea desbloquear
                    if (instancia.Bloqueado)
                    {
                        //El usuario que lo bloqueó lo va a desbloquear
                        if (instancia.IdUsuarioBloqueo == null || instancia.IdUsuarioBloqueo.Value == idUsuarioExec)
                        {   //"Se ha desbloqueado con éxito el documento."
                            resultado.Resultado = true;
                            instancia.Bloqueado = false;
                            instancia.IdUsuarioBloqueo = null;
                            resultado.Mensaje = "EDITOR_XBRL_DOCUMENTO_DESBLOQUEADO_CON_EXITO";
                            informacionExtra.Add("Bloqueado", instancia.Bloqueado);
                            informacionExtra.Add("IdUsuarioBloqueo", null);
                            informacionExtra.Add("NombreUsuarioBloqueo", null);
                            informacionExtra.Add("UltimaVersion", instancia.UltimaVersion);
                            var param = new List<object>() { instancia.Titulo };
                            informacionAuditoria = new InformacionAuditoriaDto(idUsuarioExec,
                                ConstantsAccionAuditable.Actualizar,
                               ConstantsModulo.EditorDocumentosXBRL,
                               MensajesServicios.LiberarDocumentoInstancia,
                               param);
                            informacionAuditoria.Empresa = instancia.IdEmpresa;
                            resultado.InformacionAuditoria = informacionAuditoria;
                        }
                        else
                        {
                            //"El documento no se puede bloquear, se encuentra bloqueado por el usuario: "
                            resultado.Resultado = false;
                            resultado.Mensaje = "EDITOR_XBRL_DOCUMENTO_BLOQUADO_SIN_EXITO" + ": " + usuarioBloqueo.NombreCompleto();
                            informacionExtra.Add("Bloqueado", instancia.Bloqueado);
                            informacionExtra.Add("IdUsuarioBloqueo", usuarioBloqueo.IdUsuario);
                            informacionExtra.Add("NombreUsuarioBloqueo", usuarioBloqueo.NombreCompleto());
                            informacionExtra.Add("UltimaVersion", instancia.UltimaVersion);
                        }
                    }
                    else
                    {
                        //y no está bloqueado
                        //"Se ha desbloqueado con éxito el documento."
                        resultado.Resultado = true;
                        resultado.Mensaje = "EDITOR_XBRL_DOCUMENTO_DESBLOQUEADO_CON_EXITO";
                        informacionExtra.Add("Bloqueado", instancia.Bloqueado);
                        informacionExtra.Add("UltimaVersion", instancia.UltimaVersion);
                    }

                }
                resultado.InformacionExtra = informacionExtra;
                if (resultado.Resultado)
                {
                    DocumentoInstanciaRepository.Update(instancia);
                    var usuarioAccion = UsuarioRepository.ObtenerUsuarioPorId(idUsuarioExec);
                    foreach (var usuarioDocumento in UsuarioDocumentoInstanciaRepository.Get(x => x.IdDocumentoInstancia == idDocumentoInstancia))
                    {
                        if (usuarioDocumento.IdUsuario != idUsuarioExec)
                        {
                            var alerta = new Alerta()
                            {
                                IdDocumentoInstancia = idDocumentoInstancia,
                                IdUsuario = usuarioDocumento.IdUsuario,
                                Contenido = "El usuario " + usuarioAccion.NombreCompleto() + " " + (bloquear ? "ha bloqueado para edición" : "ha liberado") + " el documento " + instancia.Titulo + ".",
                                DocumentoCorrecto = instancia.EsCorrecto,
                                Fecha = DateTime.Now
                            };
                            AlertaRepository.Add(alerta);
                        }
                    }
                }
               
            }
            else
            {
                resultado.Resultado = false;
                resultado.Mensaje = "El usuario no tiene permisos de escritura sobre el documento de instancia";
                resultado.InformacionAuditoria = new InformacionAuditoriaDto();
                resultado.InformacionAuditoria.Accion = ConstantsAccionAuditable.Actualizar;
                resultado.InformacionAuditoria.Empresa = instancia.IdEmpresa;
                resultado.InformacionAuditoria.Fecha = DateTime.Now;
                resultado.InformacionAuditoria.IdUsuario = idUsuarioExec;
                resultado.InformacionAuditoria.Modulo = ConstantsModulo.EditorDocumentosXBRL;
                resultado.InformacionAuditoria.Registro =
                    "El usuario intentó bloquear el documento. No tiene permisos de escritura sobre el documento de instancia.";
                ;
                IDictionary<string, long> infoExtra = new Dictionary<string, long>();
                infoExtra.Add("idDocumentoInstancia", idDocumentoInstancia);
                resultado.InformacionExtra = infoExtra;
            }

            return resultado;
        }


        public ResultadoOperacionDto ObtenerUsuariosDeDocumentoInstancia(long idDocumentoInstancia, long idEmpresa,
                                                                         long idUsuarioExec)
        {
            ResultadoOperacionDto resultado = new ResultadoOperacionDto();
            if (
                UsuarioDocumentoInstanciaRepository.Get(
                    x => x.IdDocumentoInstancia == idDocumentoInstancia && x.IdUsuario == idUsuarioExec && x.EsDueno).
                    Any())
            {
                resultado.Resultado = true;
                resultado.InformacionExtra =
                    DocumentoInstanciaRepository.ObtenerUsuariosDeDocumentoInstancia(idDocumentoInstancia, idEmpresa);
            }
            else
            {
                resultado.Resultado = false;
                resultado.Mensaje = "MENSAJE_ERROR_SIN_PERMISOS_DOCUMENTO_INSTANCIA";
            }
            return resultado;
        }
        
        [Transaction(TransactionPropagation.Required)]
        public ResultadoOperacionDto ActualizarUsuariosDeDocumentoInstancia(long idDocumentoInstancia, long idEmpresa,
                                                                            IList<UsuarioDocumentoInstancia>
                                                                                usuariosAsignados, long idUsuarioExec)
        {
            ResultadoOperacionDto resultado = new ResultadoOperacionDto();
            if (
                UsuarioDocumentoInstanciaRepository.Get(
                    x => x.IdDocumentoInstancia == idDocumentoInstancia && x.IdUsuario == idUsuarioExec && x.EsDueno).
                    Any())
            {
                var documentoInstancia = DocumentoInstanciaRepository.GetById(idDocumentoInstancia);

                var usuariosActuales =
                    DocumentoInstanciaRepository.ObtenerUsuariosDeDocumentoInstancia(idDocumentoInstancia, idEmpresa);
                UsuarioDocumentoInstanciaRepository.DeleteAll(usuariosActuales);

                var nombresUsuarios = "";

                bool existeUsuarioBloqueo = false;
                foreach (var usuarioDocumento in usuariosAsignados)
                {
                    nombresUsuarios +=
                        UsuarioRepository.ObtenerUsuarioPorId(usuarioDocumento.IdUsuario).NombreCompleto() + ",";
                    if (documentoInstancia.IdUsuarioBloqueo != null && documentoInstancia.IdUsuarioBloqueo.HasValue &&
                        usuarioDocumento.IdUsuario.Equals(documentoInstancia.IdUsuarioBloqueo.Value))
                    {
                        existeUsuarioBloqueo = true;
                    }
                }

                if (documentoInstancia.IdUsuarioBloqueo!= null && documentoInstancia.IdUsuarioBloqueo.HasValue && !existeUsuarioBloqueo)
                {
                    documentoInstancia.IdUsuarioBloqueo = null;
                    documentoInstancia.Bloqueado = false;
                    DocumentoInstanciaRepository.Update(documentoInstancia);
                }

                UsuarioDocumentoInstanciaRepository.AddAll(usuariosAsignados);
                resultado.Resultado = true;
                resultado.InformacionAuditoria = new InformacionAuditoriaDto();
                resultado.InformacionAuditoria.Accion = ConstantsAccionAuditable.Insertar;
                resultado.InformacionAuditoria.Empresa = idEmpresa;
                resultado.InformacionAuditoria.Fecha = DateTime.Now;
                resultado.InformacionAuditoria.IdUsuario = idUsuarioExec;
                resultado.InformacionAuditoria.Modulo = ConstantsModulo.EditorDocumentosXBRL;
                resultado.InformacionAuditoria.Registro = "El usuario ha compartido el documento" +
                                                          documentoInstancia.Titulo + " a los siguientes usuarios: " +
                                                          nombresUsuarios;

                var usuarioAccion = UsuarioRepository.ObtenerUsuarioPorId(idUsuarioExec);
                foreach (var usuarioDocumento in UsuarioDocumentoInstanciaRepository.Get(x => x.IdDocumentoInstancia == idDocumentoInstancia))
                {
                    if (usuarioDocumento.IdUsuario != idUsuarioExec)
                    {
                        var alerta = new Alerta()
                        {
                            IdDocumentoInstancia = idDocumentoInstancia,
                            IdUsuario = usuarioDocumento.IdUsuario,
                            Contenido = "El usuario " + usuarioAccion.NombreCompleto() + " compartió el documento " + documentoInstancia.Titulo + " con: " + nombresUsuarios,
                            DocumentoCorrecto = documentoInstancia.EsCorrecto,
                            Fecha = DateTime.Now
                        };
                        AlertaRepository.Add(alerta);
                    }
                }
            }
            else
            {
                resultado.Resultado = false;
                resultado.Mensaje = "El usuario no tiene permisos sobre el documento de instancia";
            }
            return resultado;
        }


        public ResultadoOperacionDto ImportarNotasDeDocumentoWord(Stream streamDocumento, string libreria)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                var contenido = "";

                var doc = new Document(streamDocumento);
                var saveOptions = new HtmlSaveOptions
                {
                    ExportImagesAsBase64 = true,
                    ExportHeadersFootersMode = ExportHeadersFootersMode.None,
                    PrettyFormat = true,
                    CssStyleSheetType = CssStyleSheetType.Inline,
                    Encoding = Encoding.UTF8
                };
                var htmlStream = new MemoryStream();
                doc.Save(htmlStream, saveOptions);
                contenido = Encoding.UTF8.GetString(htmlStream.ToArray());
                htmlStream.Close();


                resultado.InformacionExtra = ObtenerNotasDeHtml(contenido);
                resultado.Resultado = true;
            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
                resultado.Resultado = false;
                resultado.Mensaje = "Ocurrió un error al importar notas del documento:" + ex.Message;
            }

            return resultado;
        }

        /// <summary>
        /// Separa y organiza las notas definidas en un documento HTML donde existen los marcadores de
        /// conceptos identificados con XBRL-#### por plantilla de taxonomia
        /// 
        /// </summary>
        /// <param name="contenido">Contenido HTML de la nota</param>
        /// <returns></returns>
        private Dictionary<string, string> ObtenerNotasDeHtml(string contenido)
        {
            var headerConceptoArchivo = new Dictionary<string, int>();
            
            var coincidencias = Regex.Match(contenido, PATRON_ETIQUETA_NOTAS);

            while (coincidencias.Success)
            {
                if (!headerConceptoArchivo.ContainsKey(coincidencias.Value))
                {
                    headerConceptoArchivo.Add(coincidencias.Value, coincidencias.Index);
                }

                coincidencias = coincidencias.NextMatch();
            }


            var notas = new Dictionary<string, string>();
            //Valida un paso adelante para agregar el contenido a la etiqueta de concepto
            string idEtiquetaConceptoXbrlDocumentoContenido = null;

            foreach (var iniciaContenidoConcepto in headerConceptoArchivo)
            {
                var idEtiquetaConceptoXbrlDocumento = iniciaContenidoConcepto.Key.Replace("[", "").Replace("]", "");

                if (!notas.ContainsKey(idEtiquetaConceptoXbrlDocumento))
                {
                    if (idEtiquetaConceptoXbrlDocumentoContenido !=null) {
                        string contenidoNota = ObtenerContenidoNota(headerConceptoArchivo[idEtiquetaConceptoXbrlDocumentoContenido], iniciaContenidoConcepto.Value, contenido);
                        idEtiquetaConceptoXbrlDocumentoContenido = idEtiquetaConceptoXbrlDocumentoContenido.Replace("[", "").Replace("]", "");
                        if (tieneInformacionNota(contenidoNota))
                        {
                            notas[idEtiquetaConceptoXbrlDocumentoContenido] = contenidoNota;
                        }
                    }

                    idEtiquetaConceptoXbrlDocumentoContenido = iniciaContenidoConcepto.Key;
                    notas.Add(idEtiquetaConceptoXbrlDocumento, "");
                }

            }
            //Se obtiene la informacion de la última nota.
            string contenidoNotaFinal = ObtenerContenidoNota(headerConceptoArchivo[idEtiquetaConceptoXbrlDocumentoContenido], contenido.Length, contenido);
            idEtiquetaConceptoXbrlDocumentoContenido = idEtiquetaConceptoXbrlDocumentoContenido.Replace("[", "").Replace("]", "");
            if (tieneInformacionNota(contenidoNotaFinal)) {
                notas[idEtiquetaConceptoXbrlDocumentoContenido] = contenidoNotaFinal;
            }
            


            return notas;
        }

        /// <summary>
        /// Valida si la nota enviada en formato html tiene información para reemplazar el hecho
        /// </summary>
        /// <param name="contenido">Informacion del contenido</param>
        private bool tieneInformacionNota(string contenido){
            bool tieneInformacion = false;
            string contenidoValidarInformacion = contenido.Replace("&#xa0;", "").Replace("\t", "").Replace("\t", "");

            var elementosCierreHtml = Regex.Match(contenidoValidarInformacion, @">");
            var elementosHtmlCierreDictionary = new Dictionary<int, int>();
            int numeroCierresContenido = 0;
            while (elementosCierreHtml.Success)
            {
                elementosHtmlCierreDictionary.Add(numeroCierresContenido++, elementosCierreHtml.Index);
                elementosCierreHtml = elementosCierreHtml.NextMatch();
            }
            
            

            foreach (var elementoCierreHtml in elementosHtmlCierreDictionary)
            {
                int indiceIniciaElementoCierre = elementoCierreHtml.Value + 1;
                string contenidoEvaluar = contenidoValidarInformacion.Substring(indiceIniciaElementoCierre, contenidoValidarInformacion.Length - indiceIniciaElementoCierre);
                var siguienteElementoAbrirHtml = Regex.Match(contenidoEvaluar, @"<");

                if (siguienteElementoAbrirHtml.Success) {
                    int indiceTerminarContenidoEvaluar = siguienteElementoAbrirHtml.Index;
                    if (!StringUtils.IsNullOrEmpty(contenidoEvaluar.Substring(0, indiceTerminarContenidoEvaluar)))
                    {
                        tieneInformacion = true;
                        break;
                    }
                }
            }


            return tieneInformacion;
        }

        
       

        /// <summary>
        /// Obtiene una nota del contenido del concepto desde el indice de apertura e indice de termino del contenido
        /// </summary>
        /// <param name="indexApertura">Indice de apertura del concepto en el documento</param>
        /// <param name="indexCierre">Indice de cierre del siguiente concepto en el documento</param>
        /// <param name="contenido">Cadena del contenido de todo el documento</param>
        /// <returns>Cadena html con la nota del concepto</returns>
        private string ObtenerContenidoNota(int indexApertura, int indexCierre, string contenido) {
            string contenidoNota = "";

            if (indexApertura < indexCierre)
            {
                var seccion = contenido.Substring(indexApertura, indexCierre - indexApertura);

                //Desde el inicio de la cadena, buscar la primera apertura de elemento 
                var primerElemento = Regex.Match(seccion, @"\<[a-z|A-Z]{1,}");
                int indiceRealInicio = 0;
                if (primerElemento.Success)
                {
                    indiceRealInicio = primerElemento.Index;
                }
                int indiceRealFin = seccion.LastIndexOf("</", StringComparison.Ordinal);
                if (indiceRealFin > 0)
                {
                    int indiceTmpFin = seccion.IndexOf('>', indiceRealFin);
                    if (indiceTmpFin > 0)
                    {
                        indiceRealFin = indiceTmpFin + 1;
                    }
                }
                contenidoNota = seccion.Substring(indiceRealInicio, indiceRealFin - indiceRealInicio);

            }

            contenidoNota = eliminarContenidoNotaNuevoFormato(contenidoNota);

            return contenidoNota;
        }

        /// <summary>
        /// Valida si el contenido de la nota se le asigno el header de un nuevo formato del tipo "Formato: [" y elimina el contenido basura
        /// </summary>
        /// <param name="contenidoNota">Contenido de la nota a evaluar</param>
        /// <returns>Cadena sin el valor del formato</returns>
        private string eliminarContenidoNotaNuevoFormato(string contenidoNota) {

            var formatoSiguiente = Regex.Match(contenidoNota, @"Formato: \[");
            if (formatoSiguiente.Success)
            {
                contenidoNota = contenidoNota.Substring(0, formatoSiguiente.Index);
            }
            return contenidoNota;
        }


        /// <summary>
        /// Verifica si la cadena tiene una llave de apertura.
        /// </summary>
        /// <param name="cadena">Cadena a examinar</param>
        /// <returns></returns>
        private bool EsApertura(string cadena)
        {
            return !cadena.StartsWith("[/");
        }


        public ResultadoOperacionDto ImportarDocumentoWord(Stream streamDocumento)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                var doc = new Document(streamDocumento);

                resultado = WordUtil.ValidarTamanioYOrientacion(doc);

                if (resultado.Resultado)
                {
                var saveOptions = new HtmlSaveOptions
                {
                    ExportImagesAsBase64 = true,
                    ExportHeadersFootersMode = ExportHeadersFootersMode.None,
                    PrettyFormat = true,
                    CssStyleSheetType = CssStyleSheetType.Inline,
                        Encoding = Encoding.GetEncoding("ISO-8859-1")
                };

                    //Encoding.GetEncoding("ISO-8859-1")
                var htmlStream = new MemoryStream();
                doc.Save(htmlStream, saveOptions);
                    resultado.InformacionExtra = Encoding.GetEncoding("ISO-8859-1").GetString(htmlStream.ToArray());

                resultado.InformacionExtra = WordUtil.EliminarSaltosSeccion(resultado.InformacionExtra as String);

                //Filtrar texto lic
                resultado.InformacionExtra =
                    (resultado.InformacionExtra as String).Replace(
                        "Evaluation Only. Created with Aspose.Words. Copyright 2003-2014 Aspose Pty Ltd.", "");

                htmlStream.Close();
                resultado.Resultado = true;

                    if (((String)resultado.InformacionExtra).Length > 1000000)
                    {
                        resultado.Resultado = false;
                        resultado.Mensaje = "Se ha desactivado el editor en línea de la nota para no afectar el desempeño del navegador; el tamaño óptimo soportado por el editor en línea es de 1MB.\nSe le sugiere editar el contenido desde Microsoft Word y posteriormente, importar o exportar individualmente la nota.";
                    }
                }
            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
                resultado.Resultado = false;
                resultado.Mensaje = "Ocurrió un error al importar documento de word:" + ex.Message;
            }

            return resultado;
        }

        public ResultadoOperacionDto ObtenerHechosPorConsultaAnalisis(AbaxXBRLCore.Viewer.Application.Dto.Angular.ConsultaAnalisisDto consultaAnalisis)
        {
            var resultadoOperacion = new ResultadoOperacionDto { Resultado = true };
            var hechosPorContextoEmpresa = new Dictionary<long, Dictionary<long, Dictionary<string, AbaxXBRLCore.Viewer.Application.Dto.HechoDto>>>();
            var contextosPresentacion = new Dictionary<long, List<ContextoDto>>();
            var resultadoInformacionConsultaAnalisis = new Dictionary<string, object>();

            string[] idConceptos = new string[consultaAnalisis.ConsultaAnalisisConcepto.Count];

            for (var indiceConcepto = 0; indiceConcepto < consultaAnalisis.ConsultaAnalisisConcepto.Count; indiceConcepto++)
            {
                idConceptos[indiceConcepto] = consultaAnalisis.ConsultaAnalisisConcepto[indiceConcepto].IdConcepto;
            }

            long[] idContextos = ContextoRepository.ObtenerListadoContextosPorPeriodoConsulta(consultaAnalisis);

            foreach (var entidad in consultaAnalisis.ConsultaAnalisisEntidad)
            {
                hechosPorContextoEmpresa[entidad.IdEmpresa] = new Dictionary<long, Dictionary<string, AbaxXBRLCore.Viewer.Application.Dto.HechoDto>>();
                var hechosEntidad = HechoRepository.ConsultarHechosPorEntidadConceptos(entidad.NombreEntidad, idConceptos, idContextos);

                foreach (var hecho in hechosEntidad)
                {
                    var hechoDto = new Viewer.Application.Dto.HechoDto();
                    hechoDto.Valor = hecho.Valor;
                    hechoDto.IdConcepto = hecho.IdConcepto;
                    hechoDto.TipoDato = hecho.TipoDato.Nombre;
                    hechoDto.TipoDatoXbrl = hecho.TipoDato.NombreXbrl;
                    hechoDto.EsNumerico = hecho.TipoDato.EsNumerico;


                    if (!hechosPorContextoEmpresa[entidad.IdEmpresa].ContainsKey(hecho.IdContexto.Value))
                    {
                        hechosPorContextoEmpresa[entidad.IdEmpresa][hecho.IdContexto.Value] = new Dictionary<string, Viewer.Application.Dto.HechoDto>();
                        var contextoPresenta = new ContextoDto();
                        contextoPresenta.FechaFin = hecho.Contexto.FechaFin;
                        contextoPresenta.FechaInicio = hecho.Contexto.FechaInicio;
                        contextoPresenta.Fecha = hecho.Contexto.Fecha;
                        contextoPresenta.Id = hecho.Contexto.IdContexto.ToString();
                        contextoPresenta.Nombre = hecho.Contexto.Nombre;

                        if (!contextosPresentacion.ContainsKey(entidad.IdEmpresa))
                        {
                            contextosPresentacion[entidad.IdEmpresa] = new List<ContextoDto>();
                        }

                        contextosPresentacion[entidad.IdEmpresa].Add(contextoPresenta);
                    }

                    hechosPorContextoEmpresa[entidad.IdEmpresa][hecho.IdContexto.Value][hechoDto.IdConcepto] = hechoDto;

                }
            }
            resultadoInformacionConsultaAnalisis.Add("hechos", hechosPorContextoEmpresa);
            resultadoInformacionConsultaAnalisis.Add("contextos", contextosPresentacion);

            resultadoOperacion.InformacionExtra = resultadoInformacionConsultaAnalisis;

            return resultadoOperacion;
        }

        public ResultadoOperacionDto ObtenerConceptosPorConsultaAnalisis(ICacheTaxonomiaXBRL _cacheTaxonomiaXbrl, AbaxXBRLCore.Viewer.Application.Dto.Angular.ConsultaAnalisisDto consultaAnalisis, long idTaxonomia)
        {
            var resultadoOperacion = new ResultadoOperacionDto { Resultado = true };
            var resultadoConceptos = new Dictionary<string, string>();

            List<string> conceptos = HechoRepository.ConsultarConceptosConsultaAnalisis(consultaAnalisis);

            var resultado = this.ObtenerTaxonomiaBdPorId(idTaxonomia);

            if (resultado.Resultado && resultado.InformacionExtra != null)
            {
                //Cargar la taxonomía
                var taxoBd = resultado.InformacionExtra as TaxonomiaXbrl;
                var listaDts =
                    DocumentoInstanciaXbrlDtoConverter.ConvertirDTSDocumentoInstancia(taxoBd.ArchivoTaxonomiaXbrl);
                var taxoDto = _cacheTaxonomiaXbrl.ObtenerTaxonomia(listaDts);
                if (taxoDto != null)
                {
                    foreach (var idConcepto in conceptos)
                    {
                        if (taxoDto.ConceptosPorId.ContainsKey(idConcepto))
                        {
                            var concepto = taxoDto.ConceptosPorId[idConcepto];
                            var etiqueta = concepto.Nombre;

                            if (concepto.Etiquetas != null && concepto.Etiquetas.Values.Count() > 0)
                            {
                                etiqueta = concepto.Etiquetas.First().Value.First().Value.Valor;
                                foreach (var idioma in concepto.Etiquetas)
                                {
                                    if (idioma.Key.Contains(CommonConstants.LenguajeEsp))
                                    {
                                        etiqueta = idioma.Value.First().Value.Valor;
                                        break;
                                    }
                                }
                            }
                            resultadoConceptos.Add(concepto.Id, etiqueta);
                        }
                    }
                    resultadoOperacion.InformacionExtra = resultadoConceptos;
                    resultadoOperacion.Resultado = true;
                }
                else
                {
                    resultadoOperacion.Resultado = false;
                }
            }

            return resultadoOperacion;
        }


        /// <summary>
        /// Actualiza el valor de un hecho en el documento de instancia
        /// </summary>
        /// <param name="idConcepto"></param>
        /// <param name="fechaInicio"></param>
        /// <param name="fechaFin"></param>
        /// <param name="valor"></param>
        /// <param name="instancia"> </param>
        private void ActualizarValorHecho(string idConcepto, DateTime fechaInicio, DateTime fechaFin, string valor, IDocumentoInstanciaXBRL instancia)
        {
            //Buscar el concepto
            if (instancia.HechosPorIdConcepto.ContainsKey(idConcepto))
            {
                Concept concepto = instancia.Taxonomia.ElementosTaxonomiaPorId[idConcepto];
                if (concepto is ConceptItem && !(concepto as ConceptItem).Abstracto)
                {
                    //Buscar de los hechos los periodos que correspondan
                    foreach (FactItem hecho in instancia.HechosPorIdConcepto[idConcepto])
                    {
                        if (
                            (hecho.Contexto.Periodo.Tipo == Period.Instante && hecho.Contexto.Periodo.FechaInstante.Equals(fechaFin)) ||
                            (hecho.Contexto.Periodo.Tipo == Period.Duracion && hecho.Contexto.Periodo.FechaInicio.Equals(fechaInicio) && hecho.Contexto.Periodo.FechaFin.Equals(fechaFin))
                            )
                        {
                            hecho.Valor = valor;
                            if (hecho is FactNumericItem)
                            {
                                try
                                {
                                    (hecho as FactNumericItem).ActualizarValorRedondeado();
                                }
                                catch (Exception e)
                                {
                                    Debug.WriteLine("Warn: valor numérico no válido:" + valor);
                                }
                            }
                        }
                    }
                }
            }
        }

        /// <summary>
        /// Intenta realizar la conversión de fechas:
        /// Si hay un guión entonces existen 2 fechas:
        /// fechaInicio-fechaFin
        /// Si no hay guión entonces se considera solo una fecha:
        /// fechaFin
        /// </summary>
        /// <param name="periodo"></param>
        /// <param name="fechaInicio"></param>
        /// <param name="fechaFin"></param>
        /// <returns></returns>
        private bool ConvertirFechas(string periodo, out DateTime fechaInicio, out DateTime fechaFin)
        {
            var stringFechas = periodo.Split('-');
            if (stringFechas.Length == 1)
            {
                fechaInicio = DateTime.MinValue;
                fechaFin = DateUtil.ParseStandarDate(stringFechas[0]);
                if (fechaFin == DateTime.MinValue)
                {
                    return false;
                }
                return true;
            }
            if (stringFechas.Length == 2)
            {
                fechaInicio = DateUtil.ParseStandarDate(stringFechas[0]); ;
                fechaFin = DateUtil.ParseStandarDate(stringFechas[1]);
                if (fechaFin == DateTime.MinValue || fechaInicio == DateTime.MinValue)
                {
                    return false;
                }
                return true;
            }
            fechaInicio = DateTime.MinValue;
            fechaFin = DateTime.MinValue;
            return false;
        }





        #region Implementación del modelo de DTO's finales

        [Transaction(TransactionPropagation.Required, IsolationLevel.ReadCommitted)]
        public ResultadoOperacionDto GuardarDocumentoInstanciaXbrl(DocumentoInstanciaXbrlDto documentoInstancia, long idUsuarioExec)
        {
            var resultado = new ResultadoOperacionDto();
            DocumentoInstancia instanciaDb = null;
            var fechaHora = DateTime.Now;
            Boolean insertar = false;
            if (documentoInstancia.IdDocumentoInstancia == null || documentoInstancia.IdDocumentoInstancia < 1)
            {
                documentoInstancia.Version = 0;
                instanciaDb = InsertarDocumentoInstanciaXbrl(documentoInstancia, idUsuarioExec);
                documentoInstancia.IdDocumentoInstancia = instanciaDb.IdDocumentoInstancia;
                insertar = true;
            }
            else
            {
                instanciaDb = DocumentoInstanciaRepository.GetById(documentoInstancia.IdDocumentoInstancia.Value);
                if (instanciaDb == null)
                {
                    documentoInstancia.Version = 0;
                    instanciaDb = InsertarDocumentoInstanciaXbrl(documentoInstancia, idUsuarioExec);
                    documentoInstancia.IdDocumentoInstancia = instanciaDb.IdDocumentoInstancia;
                }

                //verificar permisos
                if (!TienePermisosParaEscribir(documentoInstancia.IdDocumentoInstancia.Value, idUsuarioExec))
                {
                    resultado.Resultado = false;
                    resultado.Mensaje = "El usuario no tiene permisos de escritura sobre el documento de instancia";
                    resultado.InformacionAuditoria = new InformacionAuditoriaDto
                                                         {
                                                             Accion = ConstantsAccionAuditable.Actualizar,
                                                             Empresa = instanciaDb.IdEmpresa,
                                                             Fecha = DateTime.Now,
                                                             IdUsuario = idUsuarioExec,
                                                             Modulo = ConstantsModulo.EditorDocumentosXBRL,
                                                             Registro =
                                                                 "El usuario intentó modificar el documento. No tiene permisos de escritura sobre el documento de instancia."
                                                         };
                    ;
                    IDictionary<string, long> infoExtra = new Dictionary<string, long>();
                    infoExtra.Add("idDocumentoInstancia", documentoInstancia.IdDocumentoInstancia.Value);
                    resultado.InformacionExtra = infoExtra;
                    return resultado;

                }
                //Eliminar hechos, contextos, unidades, dts
                //HechoRepository.EliminarHechosDeDocumento(instanciaDb.IdDocumentoInstancia);
                //instanciaDb.Hecho.Clear();
                //ContextoRepository.EliminarContextosDeDocumento(instanciaDb.IdDocumentoInstancia);
                //instanciaDb.Contexto.Clear();
                //UnidadRepository.EliminarUnidadesDeDocumento(instanciaDb.IdDocumentoInstancia);
                //instanciaDb.Unidad.Clear();
                //DtsDocumentoInstanciaRepository.EliminarDtsDeDocumentoInstancia(instanciaDb.IdDocumentoInstancia);
                //instanciaDb.DtsDocumentoInstancia.Clear();
                //NotaAlPieRepository.EliminarNotasAlPieDeDocumentoInstancia(instanciaDb.IdDocumentoInstancia);
                //instanciaDb.NotaAlPie.Clear();
                
                instanciaDb.Titulo = documentoInstancia.Titulo;
                instanciaDb.RutaArchivo = documentoInstancia.NombreArchivo;
                instanciaDb.IdEmpresa = documentoInstancia.IdEmpresa;
                instanciaDb.EsCorrecto = documentoInstancia.EsCorrecto;
                instanciaDb.FechaUltMod = fechaHora;
                instanciaDb.EspacioNombresPrincipal = documentoInstancia.EspacioNombresPrincipal;
                
                instanciaDb.UltimaVersion = instanciaDb.UltimaVersion + 1;

                instanciaDb.Usuario = UsuarioRepository.GetById(idUsuarioExec);


                

            }

            //Guardar unidades
            //InsertarUnidades(instanciaDb, documentoInstancia);
            //Guardar contextos
            //InsertarContextos(instanciaDb, documentoInstancia);
            //guardar DTS
            if (insertar) {
            InsertarDTS(instanciaDb, documentoInstancia);
            }
            
            //guardar hechos
            //InsertarHechos(instanciaDb, documentoInstancia);
            //Guardar notas al pie de los hechos
            //InsertarNotasAlPie(instanciaDb, documentoInstancia);

            //insertar versión del documento

            var tax = documentoInstancia.Taxonomia;
            documentoInstancia.Taxonomia = null;


            foreach(var hecho in documentoInstancia.HechosPorId.Values){
                if (tax.ConceptosPorId.ContainsKey(hecho.IdConcepto)) {
                    var concepto = tax.ConceptosPorId[hecho.IdConcepto];
                    hecho.TipoDato = concepto.TipoDato;
                    hecho.TipoDatoXbrl = concepto.TipoDatoXbrl;
                    hecho.NombreConcepto = concepto.Nombre;
                    hecho.EspacioNombres = concepto.EspacioNombres;
                }
            }
            string stringZip = ZipUtil.Zip(JsonConvert.SerializeObject(documentoInstancia, Formatting.Indented, new JsonSerializerSettings
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            }));
            var version = new VersionDocumentoInstancia()
            {
                DocumentoInstancia = instanciaDb,
                IdDocumentoInstancia = instanciaDb.IdDocumentoInstancia,
                Comentarios = string.IsNullOrEmpty(documentoInstancia.Comentarios) ? "Carga inicial" : documentoInstancia.Comentarios,
                Fecha = fechaHora,
                IdEmpresa = documentoInstancia.IdEmpresa,
                IdUsuario = idUsuarioExec,
                Version = instanciaDb.UltimaVersion.Value,
                EsCorrecto = documentoInstancia.EsCorrecto,
                Datos = stringZip
            };
            documentoInstancia.Taxonomia = tax;

            VersionDocumentoInstanciaRepository.Add(version);

            BitacoraVersionDocumento bitacoraVersionDocumento = new BitacoraVersionDocumento();
            bitacoraVersionDocumento.IdDocumentoInstancia = version.IdDocumentoInstancia;
            bitacoraVersionDocumento.IdVersionDocumentoInstancia = version.IdVersionDocumentoInstancia;
            bitacoraVersionDocumento.FechaRegistro = DateTime.Now;
            bitacoraVersionDocumento.FechaUltimaModificacion = DateTime.Now;
            bitacoraVersionDocumento.Estatus = 0;

            try
            {
            BitacoraVersionDocumentoRepository.Add(bitacoraVersionDocumento);
            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
                if (ex.Message != null && ex.Message.Contains("committed successfully"))
                {
                    resultado.Resultado = true;
                }
                else
                {
                    throw new Exception(ex.Message, ex);
                }

            }

            //instanciaDb.Hecho.Clear();
            //instanciaDb.Contexto.Clear();
            //instanciaDb.Unidad.Clear();

            if (documentoInstancia.ParametrosConfiguracion != null && documentoInstancia.ParametrosConfiguracion.ContainsKey("emisora"))
            {
                instanciaDb.ClaveEmisora = documentoInstancia.ParametrosConfiguracion["emisora"];
            }

            if (documentoInstancia.ParametrosConfiguracion != null && documentoInstancia.ParametrosConfiguracion.ContainsKey("trimestre"))
            {
                instanciaDb.Trimestre = documentoInstancia.ParametrosConfiguracion["trimestre"];
            }

            if (documentoInstancia.ParametrosConfiguracion != null && documentoInstancia.ParametrosConfiguracion.ContainsKey("anio"))
            { 
                instanciaDb.Anio = Int32.Parse(documentoInstancia.ParametrosConfiguracion["anio"].Substring(0, 4));
            }
            

            try
            {
                DocumentoInstanciaRepository.Update(instanciaDb);
            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
                if (ex.Message != null && ex.Message.Contains("committed successfully"))
                {
                    resultado.Resultado = true;
                }
                else {
                    throw new Exception(ex.Message, ex);
                }
                
            }
            resultado.Resultado = true;
            IDictionary<string, long> informacion = new Dictionary<string, long>();
            informacion.Add("idDocumentoInstancia", instanciaDb.IdDocumentoInstancia);
            informacion.Add("version", version.Version);
            resultado.InformacionExtra = informacion;

            resultado.InformacionAuditoria = new InformacionAuditoriaDto
                                             {
                                                 Accion =
                                                     version.Version == 1
                                                         ? ConstantsAccionAuditable.Insertar
                                                         : ConstantsAccionAuditable
                                                     .Actualizar,
                                                 Empresa = instanciaDb.IdEmpresa,
                                                 Fecha = DateTime.Now,
                                                 IdUsuario = idUsuarioExec,
                                                 Modulo = ConstantsModulo.EditorDocumentosXBRL,
                                                 Registro =
                                                     "Creación de versión de  documento de instancia: Título:  " +
                                                     instanciaDb.Titulo + " con el identificador: " +
                                                     instanciaDb.IdDocumentoInstancia + " y versión:" + version.Version
                                             };
            
            return resultado;
        }
        /// <summary>
        /// Inserta en base de datos las notas al pie de los hechos reportados en el modelo de documento
        /// de instancia
        /// </summary>
        /// <param name="instanciaDb">Documento de instancia de BD</param>
        /// <param name="documentoInstancia">Datos de origen a insertar</param>
        private void InsertarNotasAlPie(DocumentoInstancia instanciaDb, DocumentoInstanciaXbrlDto documentoInstancia)
        {
            var notasBd = new List<AbaxXBRLCore.Entities.NotaAlPie>();
            foreach (var hechoDto in documentoInstancia.HechosPorId.Values)
            {
                if (hechoDto.NotasAlPie != null && hechoDto.NotasAlPie.Count > 0)
                {
                    foreach (var listaNotas in hechoDto.NotasAlPie.Values)
                    {
                        foreach (var notaAlPieDto in listaNotas)
                        {
                            var notaBd = new AbaxXBRLCore.Entities.NotaAlPie
                                             {
                                                 IdDocumentoInstancia = instanciaDb.IdDocumentoInstancia,
                                                 IdRef = hechoDto.Id,
                                                 Idioma = notaAlPieDto.Idioma,
                                                 Rol = notaAlPieDto.Rol,
                                                 Valor = notaAlPieDto.Valor
                                             };
                            notasBd.Add(notaBd);
                        }
                    }
                }
            }
            NotaAlPieRepository.BulkInsert(notasBd);
        }
        /// <summary>
        /// Inserta los hechos en el modelo del documento de instancia en la base de datos relacionándolo
        /// con su respectia unidad y contexto
        /// </summary>
        /// <param name="instanciaDb"></param>
        /// <param name="documentoInstancia"></param>
        private void InsertarHechos(DocumentoInstancia instanciaDb, DocumentoInstanciaXbrlDto documentoInstancia)
        {
            if (documentoInstancia.HechosPorIdConcepto == null) return;
            var listaTiposDato = DocumentoInstanciaRepository.DbContext.TipoDato.ToList();
            var listaHechosFinales = new List<Hecho>();

            //llenar un consecutivo usado internamente para ligar hijos con tuplas pade
            long consecutivo = 1;
            foreach (var hechoDto in documentoInstancia.HechosPorId.Values)
            {
                hechoDto.Consecutivo = consecutivo++;
            }

            foreach (var hechoDto in documentoInstancia.HechosPorId.Values)
            {
                var hechoDb = DocumentoInstanciaXbrlDtoConverter.CrearHechoDb(instanciaDb, hechoDto, listaTiposDato, documentoInstancia);

                if (hechoDb != null && !hechoDto.TipoDato.Contains("base64BinaryItemType"))
                {
                    hechoDb.DocumentoInstancia = instanciaDb;
                    listaHechosFinales.Add(hechoDb);
                    instanciaDb.Hecho.Add(hechoDb);
                }
            }
            HechoRepository.BulkInsert(listaHechosFinales);
        }

        /// <summary>
        /// Inserta los registros de los archivos importados por el documento de instancia
        /// </summary>
        /// <param name="instanciaDb">Documento de instancia en la BD</param>
        /// <param name="documentoInstancia">Datos de origen</param>
        private void InsertarDTS(DocumentoInstancia instanciaDb, DocumentoInstanciaXbrlDto documentoInstancia)
        {
            if (documentoInstancia.DtsDocumentoInstancia == null) return;
            foreach (var dts in documentoInstancia.DtsDocumentoInstancia)
            {
                var dtsDb = DocumentoInstanciaXbrlDtoConverter.CrearDtsDocumentoInstanciaDb(dts);
                dtsDb.IdDocumentoInstancia = instanciaDb.IdDocumentoInstancia;
                DtsDocumentoInstanciaRepository.Add(dtsDb);
                instanciaDb.DtsDocumentoInstancia.Add(dtsDb);
            }
        }
        /// <summary>
        /// Inserta los contextos existentes en el modelo de documento de instancia
        /// </summary>
        /// <param name="instanciaDb">Documento en BD</param>
        /// <param name="documentoInstancia">Modelo DTO del documento de instnacia con los datos de origen</param>
        private void InsertarContextos(DocumentoInstancia instanciaDb, DocumentoInstanciaXbrlDto documentoInstancia)
        {
            if (documentoInstancia.ContextosPorId == null) return;

            
            var dicContextos = new Dictionary<string, Contexto>();
            var prefijoDoc = instanciaDb.IdDocumentoInstancia.ToString(CultureInfo.InvariantCulture) + "-";
            foreach (var contextoDTO in documentoInstancia.ContextosPorId.Values)
            {
                var contextoDb = DocumentoInstanciaXbrlDtoConverter.CrearContextoDb(contextoDTO);
                
                contextoDb.IdDocumentoInstancia = instanciaDb.IdDocumentoInstancia;
                instanciaDb.Contexto.Add(contextoDb);
                dicContextos.Add(contextoDb.Nombre, contextoDb);
            }

            ContextoRepository.BulkInsert(instanciaDb.Contexto);

            //recuperar id's insertados
            var idContextos = ContextoRepository.GetQueryable().Where(x => x.IdDocumentoInstancia == instanciaDb.IdDocumentoInstancia).
               Select(x => new { x.Nombre, x.IdContexto }).ToList();
            foreach (var idContexto in idContextos)
            {
                if (dicContextos.ContainsKey(idContexto.Nombre))
                {
                    dicContextos[idContexto.Nombre].IdContexto = idContexto.IdContexto;
                }
            }
        }


        /// <summary>
        /// Inserta las unidades declaradas en el dto y las asocia al documento de instancia
        /// </summary>
        /// <param name="instanciaDb">Instancia de base de datos</param>
        /// <param name="documentoInstancia">DTO con los datos de origen</param>
        private void InsertarUnidades(DocumentoInstancia instanciaDb, DocumentoInstanciaXbrlDto documentoInstancia)
        {
            if (documentoInstancia.UnidadesPorId == null) return;
            var dicUnidades = new Dictionary<string, Unidad>();
            foreach (var unidadDTO in documentoInstancia.UnidadesPorId.Values)
            {
                var unidadDb = DocumentoInstanciaXbrlDtoConverter.CrearUnidadDb(documentoInstancia, unidadDTO);
                unidadDb.DocumentoInstancia = instanciaDb;
                unidadDb.IdDocumentoInstancia = instanciaDb.IdDocumentoInstancia;
                instanciaDb.Unidad.Add(unidadDb);
                dicUnidades.Add(unidadDb.IdRef, unidadDb);
            }
            UnidadRepository.BulkInsert(instanciaDb.Unidad);
            //recuperar los ID's insertados
            var idsUnidades = UnidadRepository.GetQueryable().Where(x => x.IdDocumentoInstancia == instanciaDb.IdDocumentoInstancia).
                Select(x => new { x.IdUnidad, x.IdRef }).ToList();
            foreach (var idUnidad in idsUnidades)
            {
                if (dicUnidades.ContainsKey(idUnidad.IdRef))
                {
                    dicUnidades[idUnidad.IdRef].IdUnidad = idUnidad.IdUnidad;
                }
            }

        }
        /// <summary>
        /// Realiza el proceso de inserción de un nuevo documento de instancia
        /// </summary>
        /// <param name="documentoInstancia"></param>
        /// <param name="idUsuarioExec"></param>
        /// <returns></returns>
        private DocumentoInstancia InsertarDocumentoInstanciaXbrl(DocumentoInstanciaXbrlDto documentoInstancia, long idUsuarioExec)
        {
            var fechaHora = DateTime.Now;
            var instanciaDb = new DocumentoInstancia
            {
                Bloqueado = true,
                IdUsuarioBloqueo = idUsuarioExec
            };
            DocumentoInstanciaXbrlDtoConverter.ConvertirModeloDto(instanciaDb, documentoInstancia, idUsuarioExec, 1);
            DocumentoInstanciaRepository.Add(instanciaDb);
            var usuarioDocumento = new UsuarioDocumentoInstancia { EsDueno = true, DocumentoInstancia = instanciaDb, IdUsuario = idUsuarioExec, PuedeEscribir = true, PuedeLeer = true };
            //Agregar el permiso de usuario de este documento
            UsuarioDocumentoInstanciaRepository.Add(usuarioDocumento);
            return instanciaDb;
        }
        /// <summary>
        /// Obtiene un DTO con la información del documento de instancia solicitado.
        /// </summary>
        /// <param name="idDocumentoInstancia">Identificador del docuemnto de instancia.</param>
        /// <param name="idUsuarioExec">Identificador del usuario que consulta.</param>
        /// <returns>Resultado de la consulta del documento, en caso de no tener privilegios se retorna error.</returns>
        public ResultadoOperacionDto ObtenerModeloDocumentoInstanciaXbrl(long idDocumentoInstancia, long idUsuarioExec)
        {
            var resultado = new ResultadoOperacionDto();
            var instanciaDb = DocumentoInstanciaRepository.GetById(idDocumentoInstancia);
            if (instanciaDb != null)
            {
                var udi = ObtenerPermisosDeUsuarioEnDocumento(idDocumentoInstancia, idUsuarioExec);
                if (udi == null)
                {
                    var listadoPermisos = ObtenerPermisosDocumentoInstancia(idDocumentoInstancia);
                    if (listadoPermisos.Count > 0)
                    {
                        resultado.Resultado = false;
                        resultado.Mensaje = "El usuario no tiene permisos de lecutra sobre el documento de instancia";
                        return resultado;
                    }
                    else {
                        udi= new UsuarioDocumentoInstancia();
                        udi.PuedeEscribir = false;
                        udi.EsDueno = false;
                    }
                }
                VersionDocumentoInstanciaRepository.DbContext.Database.CommandTimeout = 180;
                var versionBD =
                    VersionDocumentoInstanciaRepository.Get(
                        x => x.IdDocumentoInstancia == idDocumentoInstancia && x.Version == instanciaDb.UltimaVersion.Value).First();

                var documentoInstanciaXbrlDto =
                       JsonConvert.DeserializeObject<DocumentoInstanciaXbrlDto>(ZipUtil.UnZip(versionBD.Datos));

                documentoInstanciaXbrlDto.PuedeEscribir = udi.PuedeEscribir;
                documentoInstanciaXbrlDto.EsDueno = udi.EsDueno;
                documentoInstanciaXbrlDto.Bloqueado = instanciaDb.Bloqueado;
                documentoInstanciaXbrlDto.EsCorrecto = instanciaDb.EsCorrecto;
                documentoInstanciaXbrlDto.IdEmpresa = instanciaDb.IdEmpresa??0;
                documentoInstanciaXbrlDto.Titulo = instanciaDb.Titulo;
                documentoInstanciaXbrlDto.NombreArchivo = instanciaDb.RutaArchivo;
                documentoInstanciaXbrlDto.IdDocumentoInstancia = instanciaDb.IdDocumentoInstancia;


                documentoInstanciaXbrlDto.Version = instanciaDb.UltimaVersion != null ? instanciaDb.UltimaVersion.Value : 0;

                if (instanciaDb.IdUsuarioBloqueo != null && instanciaDb.IdUsuarioBloqueo.Value > 0)
                {
                    documentoInstanciaXbrlDto.IdUsuarioBloqueo = instanciaDb.IdUsuarioBloqueo.Value;
                    documentoInstanciaXbrlDto.NombreUsuarioBloqueo =
                        UsuarioRepository.ObtenerUsuarioPorId(documentoInstanciaXbrlDto.IdUsuarioBloqueo).NombreCompleto();
                }

                resultado.InformacionExtra = documentoInstanciaXbrlDto;

                var param = new List<object>() { instanciaDb.Titulo };
                var informacionAuditoria = new InformacionAuditoriaDto(idUsuarioExec,
                     ConstantsAccionAuditable.Consultar,
                    ConstantsModulo.EditorDocumentosXBRL,
                    MensajesServicios.ObtenerFormatoCaptura,
                    param);
                resultado.InformacionAuditoria = informacionAuditoria;
            }
            resultado.Resultado = true;
            return resultado;
        }



        /// <summary>
        /// Verifica su un usuario tiene permisos para leer un documento de instancia
        /// </summary>
        /// <param name="idDocumentoInstancia">Documento de instancia</param>
        /// <param name="idUsuarioExec">Usuario que intenta la lectura</param>
        /// <returns>True si puede leer, false en otro caso</returns>
        private Boolean TienePermisosParaLeer(long idDocumentoInstancia, long idUsuarioExec)
        {
            var udi =
                        UsuarioDocumentoInstanciaRepository.Get(
                            x => x.IdDocumentoInstancia == idDocumentoInstancia && x.IdUsuario == idUsuarioExec).
                            FirstOrDefault();
            if (udi == null)
            {
                return false;
            }
            return udi.PuedeLeer || udi.EsDueno;
        }
        /// <summary>
        /// Verifica su un usuario tiene permisos para escribir un documento de instancia
        /// </summary>
        /// <param name="idDocumentoInstancia">Documento de instancia</param>
        /// <param name="idUsuarioExec">Usuario que intenta la lectura</param>
        /// <returns>True si puede leer, false en otro caso</returns>
        private Boolean TienePermisosParaEscribir(long idDocumentoInstancia, long idUsuarioExec)
        {
            var udi =
                        UsuarioDocumentoInstanciaRepository.Get(
                            x => x.IdDocumentoInstancia == idDocumentoInstancia && x.IdUsuario == idUsuarioExec).
                            FirstOrDefault();
            if (udi == null)
            {
                return false;
            }
            return udi.PuedeEscribir || udi.EsDueno;
        }
        /// <summary>
        /// Consulta la configuración de permisos de usuario con un documento de instancia
        /// </summary>
        /// <param name="idDocumentoInstancia">Documento de instancia</param>
        /// <param name="idUsuarioExec">Usuario que intenta la lectura</param>
        /// <returns>Permisos de usuario en un documento, null si no existen permisos del usuario</returns>
        private UsuarioDocumentoInstancia ObtenerPermisosDeUsuarioEnDocumento(long idDocumentoInstancia, long idUsuarioExec)
        {
            return UsuarioDocumentoInstanciaRepository.Get(
                            x => x.IdDocumentoInstancia == idDocumentoInstancia && x.IdUsuario == idUsuarioExec).
                            FirstOrDefault();
        }

        /// <summary>
        /// Consulta la configuración de permisos de usuario con un documento de instancia
        /// </summary>
        /// <param name="idDocumentoInstancia">Documento de instancia</param>
        /// <param name="idUsuarioExec">Usuario que intenta la lectura</param>
        /// <returns>Permisos de usuario en un documento, null si no existen permisos del usuario</returns>
        private List<UsuarioDocumentoInstancia> ObtenerPermisosDocumentoInstancia(long idDocumentoInstancia)
        {
            return UsuarioDocumentoInstanciaRepository.Get(
                            x => x.IdDocumentoInstancia == idDocumentoInstancia).ToList();
        }


        public ResultadoOperacionDto ObtenerVersionModeloDocumentoInstanciaXbrl(long idDocumentoInstancia, int version, long idUsuarioExec)
        {
            var resultado = new ResultadoOperacionDto();
            UsuarioDocumentoInstancia udi =
                UsuarioDocumentoInstanciaRepository.Get(
                    x => x.IdDocumentoInstancia == idDocumentoInstancia && x.IdUsuario == idUsuarioExec).First();
            InformacionAuditoriaDto informacionAuditoria = null;
            if (udi != null)
            {
                //Obtener la versión
                var versionBD =
                    VersionDocumentoInstanciaRepository.Get(
                        x => x.IdDocumentoInstancia == idDocumentoInstancia && x.Version == version).First();
                if (versionBD != null)
                {
                    DocumentoInstancia instancia = DocumentoInstanciaRepository.GetById(idDocumentoInstancia);

                    var documentoInstanciaXbrlDto =
                        JsonConvert.DeserializeObject<DocumentoInstanciaXbrlDto>(ZipUtil.UnZip(versionBD.Datos));
                    documentoInstanciaXbrlDto.Version = version;
                    documentoInstanciaXbrlDto.PuedeEscribir = udi.PuedeEscribir;
                    documentoInstanciaXbrlDto.EsDueno = udi.EsDueno;
                    documentoInstanciaXbrlDto.Bloqueado = instancia.Bloqueado;
                    if (instancia.IdUsuarioBloqueo.HasValue)
                    {
                        documentoInstanciaXbrlDto.IdUsuarioBloqueo = instancia.IdUsuarioBloqueo.Value;
                        documentoInstanciaXbrlDto.NombreUsuarioBloqueo =
                            UsuarioRepository.ObtenerUsuarioPorId(idUsuarioExec).NombreCompleto();
                    }
                    resultado.InformacionExtra = documentoInstanciaXbrlDto;
                    var param = new List<object>() { documentoInstanciaXbrlDto.Version, documentoInstanciaXbrlDto.Titulo };
                    informacionAuditoria = new InformacionAuditoriaDto(idUsuarioExec,
                        ConstantsAccionAuditable.Consultar,
                        ConstantsModulo.EditorDocumentosXBRL,
                        MensajesServicios.ObtenerFormatoCapturaHistorico,
                        param);
                    resultado.InformacionAuditoria = informacionAuditoria;
                    resultado.Resultado = true;
                }
                else
                {
                    resultado.Resultado = false;
                    resultado.Mensaje = "La versión del documento de instancia no existe en la base de datos";
                }
            }
            else
            {
                resultado.Resultado = false;
                resultado.Mensaje = "El usuario no tiene permisos sobre el documento de instancia";
            }
            return resultado;
        }

        public void InicializarTaxonomias()
        {
            XPEServiceImpl.GetInstance(ForzarHttp);

            //Se busca la propiedad de la expresión cron, si no se encuentra, se utilizan 3 minutos
            //InicializarSchedulerDocumentosPendientes();
            InicializarTaxonomiasPorConfiguracion();

            LogUtil.Info("Indicador de precarga de taxonomías:" + IndicadorInicializarTaxonomias);

            if (IndicadorInicializarTaxonomias != null &&
                Boolean.Parse(IndicadorInicializarTaxonomias.ToLowerInvariant()))
            {
                var viewerService = new XbrlViewerService();
                var taxonomias = TaxonomiaXbrlRepository.GetAll().Include(x => x.ArchivoTaxonomiaXbrl).ToList();
                var hilosCargaTax = new List<Thread>();
                foreach (var taxonomiaXbrl in taxonomias)
                {
                    
                    var listaDts =
                    DocumentoInstanciaXbrlDtoConverter.ConvertirDTSDocumentoInstancia(taxonomiaXbrl.ArchivoTaxonomiaXbrl);

                    if (CacheTaxonomia.ObtenerTaxonomia(listaDts) != null)
                    {
                        continue;
                    }

                    hilosCargaTax.Add(new Thread(()=>{
                        var errores = new List<ErrorCargaTaxonomiaDto>();
                        LogUtil.Info("Precargando taxonomía:" + taxonomiaXbrl.EspacioNombresPrincipal);
                        long idTaxo = taxonomiaXbrl.IdTaxonomiaXbrl;
                        var resultadoTaxonomia = ObtenerTaxonomiaXbrlProcesada(idTaxo, errores);
                        var taxonomiaDto = resultadoTaxonomia.InformacionExtra as TaxonomiaDto;
                        var puedeContinuar = resultadoTaxonomia.Resultado;
                        if (puedeContinuar)
                        {
                            CacheTaxonomia.AgregarTaxonomia(listaDts, taxonomiaDto);
                            LogUtil.Info("Taxonomía agregada a cache:" + taxonomiaXbrl.EspacioNombresPrincipal);
                        }
                        else
                        {
                            LogUtil.Info("Ocurrió un error al cargar la taxonomía:" + taxonomiaXbrl.EspacioNombresPrincipal);
                            LogUtil.Error(errores);
                        }
                        LogUtil.Info("Taxonomía precargada:" + taxonomiaXbrl.EspacioNombresPrincipal);
                    }));
                    
                }
                foreach(var hilo in hilosCargaTax){
                    hilo.Start();
                }
                foreach (var hilo in hilosCargaTax)
                {
                    hilo.Join();
                }
            }
        }
        /// <summary>
        /// Obtiene un DTO de taxonomía procesada y transformada
        /// </summary>
        /// <param name="idTaxonomia"></param>
        /// <returns></returns>
        private TaxonomiaDto ObtenerTaxonomiaXbrlDTOProcesada(long idTaxonomia)
        {
            var xpeService = XPEServiceImpl.GetInstance(ForzarHttp);

            var taxBd = TaxonomiaXbrlRepository.GetQueryable()
                .Where(x => x.IdTaxonomiaXbrl == idTaxonomia)
                .Include(x => x.ArchivoTaxonomiaXbrl)
                .FirstOrDefault();
            if (taxBd == null) return null;
            
            foreach (var archivoImportado in taxBd.ArchivoTaxonomiaXbrl)
            {
                if (archivoImportado.TipoReferencia == DtsDocumentoInstanciaDto.SCHEMA_REF)
                {
                    var errores = new List<ErrorCargaTaxonomiaDto>();
                    var taxoDto = xpeService.CargarTaxonomiaXbrl(archivoImportado.Href,errores, false);
                    LogUtil.Error("Error carga taxonomía:" + archivoImportado.Href);
                    foreach(var err in errores){
                        LogUtil.Error(err.Mensaje);
                    }
                    return taxoDto;
                }
            }
            return null;
        }

        public ResultadoOperacionDto ObtenerHechosPorFiltro(string[] idConceptos, long idUsuarioExec, long idTaxonomia)
        {

            var taxBd = TaxonomiaXbrlRepository.GetQueryable().Where(x => x.IdTaxonomiaXbrl == idTaxonomia)
               .Include(x => x.ArchivoTaxonomiaXbrl).FirstOrDefault();
            if (taxBd == null) return null;

            string[] archivosHrefTaxonomia = new string[taxBd.ArchivoTaxonomiaXbrl.Where(x=>x.TipoReferencia==DtsDocumentoInstanciaDto.SCHEMA_REF).Count()];
            int indiceArchivoImportado=0;
            foreach (var archivo in taxBd.ArchivoTaxonomiaXbrl.Where(x=>x.TipoReferencia==DtsDocumentoInstanciaDto.SCHEMA_REF))
            {
                    archivosHrefTaxonomia[indiceArchivoImportado]=archivo.Href;
                    indiceArchivoImportado++;
            }

            var hechosResultado = HechoRepository.ConsultarHechosPorFiltro(idConceptos, idUsuarioExec, archivosHrefTaxonomia);
            var columnas = ObtenerGruposDeContextosPorFecha(hechosResultado);
            var renglonesDocumentos = new Dictionary<long, ResultadoDocumentoInstanciaDto>();
            foreach (var hecho in hechosResultado)
            {
                if (!renglonesDocumentos.ContainsKey(hecho.IdDocumentoInstancia))
                {
                    var resDoc = new ResultadoDocumentoInstanciaDto
                                 {
                                     IdDocumentoInstancia = hecho.IdDocumentoInstancia,
                                     TituloDocumento = hecho.TituloDocumentoInstancia,
                                     EsCorrecto = hecho.EsCorrecto,
                                     Entidad = hecho.IdEntidad,
                                     FechaCreacion = hecho.FechaCreacion,
                                     HechosEnDocumento = new List<ResultadoConsultaHechosDto>()
                                 };
                    foreach (var col in columnas)
                    {
                        resDoc.HechosEnDocumento.Add(new ResultadoConsultaHechosDto
                                                     {
                                                         FechaInicio = col.FechaInicio,
                                                         FechaFin = col.FechaFin
                                                     });
                    }
                    renglonesDocumentos.Add(hecho.IdDocumentoInstancia, resDoc);
                }
                hecho.EsNumerico = hecho.EsMonetario = hecho.EsHtml = false;
                if (hecho.TipoDatoXbrl != null)
                {
                    if (hecho.TipoDatoXbrl.Contains(TiposDatoXBRL.TextBlockItemType))
                    {
                        hecho.EsHtml = true;
                    }
                    if (hecho.TipoDatoXbrl.Contains(TiposDatoXBRL.MonetaryItemType))
                    {
                        hecho.EsNumerico =  hecho.EsMonetario = true;
                    }
                    foreach (var tipo in TiposDatoXBRL.TiposNumericosXBRL)
                    {
                        if (hecho.TipoDatoXbrl.Contains(tipo))
                        {
                            hecho.EsNumerico = true;
                            break;
                        }
                    }
                }


                AsignarColumnaResultado(renglonesDocumentos[hecho.IdDocumentoInstancia],hecho);
            }
            var res = new ResultadoOperacionDto {InformacionExtra = renglonesDocumentos.Values, Resultado = true};
            return res;
        }
        /// <summary>
        /// Asigna el valor del hecho a la columna que corresponda en el renglón de resultado
        /// </summary>
        /// <param name="renglonResultado"></param>
        /// <param name="hecho"></param>
        private void AsignarColumnaResultado(ResultadoDocumentoInstanciaDto renglonResultado, ResultadoConsultaHechosDto hecho)
        {
            foreach (var columna in renglonResultado.HechosEnDocumento)
            {

                if (columna.FechaInicio != null && hecho.FechaInicio != null &&
                        hecho.FechaInicio.Equals(columna.FechaInicio) && hecho.FechaFin.Equals(columna.FechaFin))
                {
                    columna.Valor = hecho.Valor;
                    columna.EsNumerico = hecho.EsNumerico;
                    columna.EsHtml = hecho.EsHtml;
                    columna.EsMonetario = hecho.EsMonetario;
                    break;
                }
                if (columna.FechaInicio == null && hecho.FechaInicio == null && hecho.FechaInicio.Equals(columna.FechaInicio) && hecho.FechaFin.Equals(columna.FechaFin))
                {
                    columna.Valor = hecho.Valor;
                    columna.EsNumerico = hecho.EsNumerico;
                    columna.EsHtml = hecho.EsHtml;
                    columna.EsMonetario = hecho.EsMonetario;
                    break;
                }
           }
        }

        /// <summary>
        /// Obtiene los diferentes periodos de fechas encontrados en la lista de resultados
        /// </summary>
        /// <param name="hechosResultado"></param>
        /// <returns></returns>
        private IList<ResultadoConsultaHechosDto> ObtenerGruposDeContextosPorFecha(IList<ResultadoConsultaHechosDto> hechosResultado)
        {
            var resultadosContextos = new Dictionary<string,ResultadoConsultaHechosDto>();

            foreach (var hecho in hechosResultado)
            {
                string idFechas = "";
                if (hecho.FechaInicio != null)
                {
                    idFechas = DateUtil.ToStandarString(hecho.FechaInicio) + "_";
                }
                idFechas += DateUtil.ToStandarString(hecho.FechaFin) + "_";
                if (!resultadosContextos.ContainsKey(idFechas))
                {
                    resultadosContextos.Add(idFechas,new ResultadoConsultaHechosDto
                                                     {
                                                         FechaFin = hecho.FechaFin,
                                                         FechaInicio = hecho.FechaInicio
                                                     });
                }
            }
            return resultadosContextos.Select(valkey => valkey.Value).OrderBy(x=>x.FechaFin).ToList();
        }

        public ResultadoOperacionDto ObtenerTaxonomiaBdPorId(long idTaxonomia)
        {
            return new ResultadoOperacionDto
                            {
                                InformacionExtra = TaxonomiaXbrlRepository.GetQueryable()
                                .Where(x => x.IdTaxonomiaXbrl == idTaxonomia)
                                .Include(x => x.ArchivoTaxonomiaXbrl)
                                .FirstOrDefault(),
                                Resultado = true
                            };
        }

        public ResultadoOperacionDto ObtenerTaxonomiaXbrlProcesada(long idTaxonomia, IList<ErrorCargaTaxonomiaDto> errores, bool forzarEsquemaHttp=false)
        {
            var taxBd = TaxonomiaXbrlRepository.GetQueryable()
                .Where(x => x.IdTaxonomiaXbrl == idTaxonomia)
                .Include(x => x.ArchivoTaxonomiaXbrl)
                .FirstOrDefault();
            if (taxBd == null) return null;
            var serv = XPEServiceImpl.GetInstance(ForzarHttp);
            TaxonomiaDto taxonomiaDto = null;
            foreach (var archivoImportado in taxBd.ArchivoTaxonomiaXbrl)
            {
                if (archivoImportado.TipoReferencia == DtsDocumentoInstanciaDto.SCHEMA_REF)
                {
                    taxonomiaDto = serv.CargarTaxonomiaXbrl(archivoImportado.Href, errores, false);
                    break;
                }
            }


            
            var resultado = new ResultadoOperacionDto()
                            {
                                Resultado = !errores.Any(x=>x.Severidad == ErrorCargaTaxonomiaDto.SEVERIDAD_FATAL),
                                InformacionExtra = taxonomiaDto
                            };
            return resultado;
        }

        public ResultadoOperacionDto ImportarFormatoExcel(Stream archivoExcel, DocumentoInstanciaXbrlDto documentoInstancia,
            long idUsuarioExec, IDictionary<string, bool> conceptosDescartar = null, IList<string> hojasDescartar = null)
        {
            var res = new ResultadoOperacionDto();

            try
            {
                res = ImportadorExportadorArchivoDocumentoInstancia.ImportarDatosExcel(archivoExcel, documentoInstancia, conceptosDescartar, hojasDescartar);
                if (res.Resultado) {
                    var datosRespuesta = new Dictionary<string, Object>();
                    datosRespuesta.Add("documentoInstancia", documentoInstancia);
                    datosRespuesta.Add("resumenProceso", res.InformacionExtra);
                    res.InformacionExtra = datosRespuesta;
                    var param = new List<object>() { documentoInstancia.Titulo };
                    var informacionAuditoria = new InformacionAuditoriaDto(idUsuarioExec,
                        ConstantsAccionAuditable.Importar,
                       ConstantsModulo.EditorDocumentosXBRL,
                       MensajesServicios.ImportarDatosDeExcel,
                       param);
                    res.InformacionAuditoria = informacionAuditoria;

                    if (documentoInstancia.IdDocumentoInstancia != null && documentoInstancia.IdDocumentoInstancia > 0)
                    {
                        var usuarioAccion = UsuarioRepository.ObtenerUsuarioPorId(idUsuarioExec);
                            foreach (var usuarioDocumento in UsuarioDocumentoInstanciaRepository.Get(x => x.IdDocumentoInstancia == documentoInstancia.IdDocumentoInstancia))
                            {
                                if (usuarioDocumento.IdUsuario != idUsuarioExec)
                                {
                                    var alerta = new Alerta()
                                    {
                                        IdDocumentoInstancia = documentoInstancia.IdDocumentoInstancia.Value,
                                        IdUsuario = usuarioDocumento.IdUsuario,
                                        Contenido = "El usuario " + usuarioAccion.NombreCompleto() + " ha importado de un documento Excel información al documento " + documentoInstancia.Titulo + ".",
                                        DocumentoCorrecto = documentoInstancia.EsCorrecto,
                                        Fecha = DateTime.Now
                                    };
                                    AlertaRepository.Add(alerta);
                                }
                            }
                    }
                }
            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
                res.Resultado = false;
                res.Mensaje = "Ocurrió un error al leer el archivo Excel:" + ex.Message + " stack: " + ex.StackTrace;
            }

            return res;
        }

        public ResultadoOperacionDto ObtenerTaxonomiaXbrlProcesada(ICollection<ArchivoTaxonomiaXbrl> archivosTaxonomiaXbrl, bool forzarEsquemaHttp=false)
        {

            var manejadorErrores = new ManejadorErroresCargaTaxonomia();
            var taxonomia = new TaxonomiaXBRL();
            taxonomia.ManejadorErrores = manejadorErrores;
            foreach (var archivoImportado in archivosTaxonomiaXbrl)
            {
                if (archivoImportado.TipoReferencia == DtsDocumentoInstanciaDto.SCHEMA_REF)
                {
                    taxonomia.ProcesarDefinicionDeEsquema(archivoImportado.Href, forzarEsquemaHttp);
                }
            }


            IGrupoValidadoresTaxonomia valTax = new GrupoValidadoresTaxonomia();
            valTax.ManejadorErrores = manejadorErrores;
            valTax.Taxonomia = taxonomia;
            valTax.AgregarValidador(new ValidadorTaxonomia());
            valTax.AgregarValidador(new ValidadorTaxonomiaDinemsional());
            valTax.ValidarDocumento();
            var resultado = new ResultadoOperacionDto()
            {
                Resultado = true,
                InformacionExtra = taxonomia
            };
            return resultado;
        }
        /// <summary>
        /// Agrega todos los conceptos de la estructura y subestructuras.
        /// </summary>
        /// <param name="listaEstructuras">Listado de estructuras a evaluar.</param>
        /// <param name="listaIdsConceptos">Listado donde se agregaran los conceptos.</param>
        private void AgregaIdsConceptos(IList<EstructuraFormatoDto> listaEstructuras, List<string> listaIdsConceptos)
        {
            foreach (var estructura in listaEstructuras)
            {
                var idConepto = estructura.IdConcepto;
                listaIdsConceptos.Add(idConepto);
                if (estructura.SubEstructuras != null && estructura.SubEstructuras.Count > 0)
                {
                    AgregaIdsConceptos(estructura.SubEstructuras, listaIdsConceptos);
                }
            }

        }
        /// <summary>
        /// Obtiene la lista de conceptos que deben de ser evaluados para su actualización de contexto.
        /// </summary>
        /// <param name="documentoInstancia">Documento a evaluar.</param>
        /// <returns>Lista de conceptos que aplican para la actualización.</returns>
        private List<string> GetListaConceptosAplicanActualizacionContexto(DocumentoInstanciaXbrlDto documentoInstancia)
        {
            var listaIdsRolesEvaluar = new List<string>() { "[105000]", "[110000]", "[800007]", "[800500]", "[800600]", "[813000]" };
            var listaIdsConceptosEvaluar = new List<string>()
               {
                   "ifrs_mx-cor_20141205_InformacionARevelarSobrePosicionMonetariaEnMonedaExtranjeraBloqueDeTexto",
                   "ifrs_mx-cor_20141205_InstitucionExtranjeraSiNo",
                   "ifrs_mx-cor_20141205_FechaDeFirmaContrato",
                   "ifrs_mx-cor_20141205_FechaDeVencimiento",
                   "ifrs_mx-cor_20141205_TasaDeInteresYOSobretasa",
                   "ifrs_mx-cor_20141205_ImporteDeIngresos"
               };
            var rolesPresentacion = documentoInstancia.Taxonomia.RolesPresentacion;
            foreach (var rolId in listaIdsRolesEvaluar)
            {
                foreach (var rol in rolesPresentacion)
                {

                    if (!rol.Nombre.Contains(rolId))
                    {
                        continue;
                    }

                    AgregaIdsConceptos(rol.Estructuras, listaIdsConceptosEvaluar);
                }
            }

            return listaIdsConceptosEvaluar;
        }
        /// <summary>
        /// Genera los periodos acumulados para el trimestre y año indicados.
        /// </summary>
        /// <param name="trimestre">Número de trimestre requerido.</param>
        /// <param name="anio">Año del periodo.</param>
        /// <returns>Lista de dos elementos el primero es el periodo acumulado y el segundo es e trimestre.</returns>
        private IList<PeriodoDto> GeneraPeriodosAcumulados(string trimestre, string anio)
        {
            var numeroTrimestre = trimestre == "4D" ? 4 : Int32.Parse(trimestre);
            var mesFinTrimestre = numeroTrimestre * 3;
            var mesInicioTrimestre = mesFinTrimestre - 2;
            var diaFinTrimestre = numeroTrimestre == 1 ? 31 : numeroTrimestre == 2 ? 30 : numeroTrimestre == 3 ? 30 : 31;
            var mesInicio = String.Format("{0:00}", mesInicioTrimestre);
            var mesFin = String.Format("{0:00}", mesFinTrimestre);
            var diaFin = String.Format("{0:00}", diaFinTrimestre);
            var fechaInicioPeriodo = DateTime.ParseExact(anio + "-01-01", "yyyy-MM-dd", CultureInfo.InvariantCulture).Date;
            var fechaInicioTrimestre = DateTime.ParseExact(anio + "-" + mesInicio + "-01", "yyyy-MM-dd", CultureInfo.InvariantCulture).Date;
            var fechaFinTrimestre = DateTime.ParseExact(anio + "-" + mesFin + "-" + diaFin, "yyyy-MM-dd", CultureInfo.InvariantCulture).Date;

            var acumuladoPeriodo = new PeriodoDto()
            {
                Tipo = Period.Duracion,
                FechaInicio = fechaInicioPeriodo,
                FechaFin = fechaFinTrimestre
            };

            var acumuladoTrimestre = new PeriodoDto()
            {
                Tipo = Period.Duracion,
                FechaInicio = fechaInicioTrimestre,
                FechaFin = fechaFinTrimestre
            };

            return new List<PeriodoDto>() { acumuladoPeriodo, acumuladoTrimestre };
        }

        /// <summary>
        /// Crea un identificador único para el contexto.
        /// </summary>
        /// <param name="contexto">Contexto a evaluar.</param>
        /// <returns>Identificador único del contexto</returns>
        private string GeneraLlaveContexto(Viewer.Application.Dto.ContextoDto contexto)
        { 
        
            var periodo = contexto.Periodo;
            var sPeriodo = periodo.Tipo.ToString() + "-" + (periodo.Tipo == 1 ? periodo.FechaInstante.ToString("yyyyMMdd") : periodo.FechaInicio.ToString("yyyyMMdd") + "-" + periodo.FechaFin.ToString("yyyyMMdd"));
            var newId = "ctx-" + sPeriodo + "-" + Guid.NewGuid().ToString("N");
            newId = newId.Substring(0, 32);
            return newId;
        }

        /// <summary>
        /// Busca un contexto equivalente que ya exista en el documento actual.
        /// </summary>
        /// <param name="contexto">Contexto a evluar.</param>
        /// <param name="documentoInstancia">Documento instancia donde se busca el equivalente.</param>
        /// <returns>Contexto equivalente al indicado obtenido del documento de instancia dado o null si no se encontro equivalencia.</returns>
        private Viewer.Application.Dto.ContextoDto ObtenContextoEquivalente(Viewer.Application.Dto.ContextoDto contexto, DocumentoInstanciaXbrlDto documentoInstancia)
        {
            Viewer.Application.Dto.ContextoDto contextoEquivalente = null;
            var indiceFechas = DocumentoInstanciaXbrlDtoConverter.ObtenerValorIndicePorFechas(contexto.Periodo);
            var listaIdsContextos = documentoInstancia.ContextosPorFecha[indiceFechas];

            foreach (var idContexto in listaIdsContextos) 
            {
                var contextoItera = documentoInstancia.ContextosPorId[idContexto];
                if (contextoItera.EstructuralmenteIgual(contexto))
                {
                    contextoEquivalente = contextoItera;
                    break;
                }
            }

            return contextoEquivalente;
        }
        /// <summary>
        /// Busca un contexto equivalente al contexto anterior pero con el periodo correcto, si no lo encuentra crea uno nuevo.
        /// </summary>
        /// <param name="contextoAnterior">Contexto anterior tomado como base para buscar equivalencia.</param>
        /// <param name="periodoCorrecto">Periodo al que debería pertenecer el contexto.</param>
        /// <param name="documentoInstancia">Documento donde se hara la busqueda de la equivalencia.</param>
        /// <returns>Id del contexto quivaente al indicado pero con el periodo correcto.</returns>
        private string ObtenContextoAjustado(Viewer.Application.Dto.ContextoDto contextoAnterior, PeriodoDto periodoCorrecto, DocumentoInstanciaXbrlDto documentoInstancia)
        {

            var contextoActualizado = new Viewer.Application.Dto.ContextoDto()
            {
                ContieneInformacionDimensional = contextoAnterior.ContieneInformacionDimensional,
                Entidad = contextoAnterior.Entidad,
                Escenario = contextoAnterior.Escenario,
                ValoresDimension = contextoAnterior.ValoresDimension,
                Periodo = periodoCorrecto
            };
            var contextoEquivalente = ObtenContextoEquivalente(contextoActualizado, documentoInstancia);
            if (contextoEquivalente != null)
            {
                contextoActualizado = contextoEquivalente;
            }
            else
            {
                contextoActualizado.Id = GeneraLlaveContexto(contextoActualizado);
                documentoInstancia.ContextosPorId[contextoActualizado.Id] = contextoActualizado;
            }

            return contextoActualizado.Id;

        }
        public DocumentoInstanciaXbrlDto ObtenDocumentoInstanciaXbrlDto(long idDocumentoInstancia, long idUsuarioExec)
        {
            var resultado = new ResultadoOperacionDto();
            var instanciaDb = DocumentoInstanciaRepository.GetById(idDocumentoInstancia);
            if (instanciaDb != null)
            {
               
                var documentoInstanciaXbrl = new DocumentoInstanciaXbrlDto
                {
                    PuedeEscribir = true,
                    EsDueno = true,
                    Bloqueado = instanciaDb.Bloqueado,
                    EsCorrecto = instanciaDb.EsCorrecto,
                    IdEmpresa = instanciaDb.IdEmpresa!=null?instanciaDb.IdEmpresa.Value:0,
                    Titulo = instanciaDb.Titulo,
                    NombreArchivo = instanciaDb.RutaArchivo,
                    IdDocumentoInstancia = instanciaDb.IdDocumentoInstancia
                };

                var version =
                        VersionDocumentoInstanciaRepository.ObtenerUltimaVersionDocumentoInstancia(
                            (long)idDocumentoInstancia);
                if (version != null)
                {
                    documentoInstanciaXbrl.Version = version.Version;
                }
                if (instanciaDb.IdUsuarioBloqueo != null && instanciaDb.IdUsuarioBloqueo.Value > 0)
                {
                    documentoInstanciaXbrl.IdUsuarioBloqueo = instanciaDb.IdUsuarioBloqueo.Value;
                    documentoInstanciaXbrl.NombreUsuarioBloqueo =
                        UsuarioRepository.ObtenerUsuarioPorId(documentoInstanciaXbrl.IdUsuarioBloqueo).NombreCompleto();
                }

                DocumentoInstanciaXbrlDtoConverter.ConvertirModeloBaseDeDatos(documentoInstanciaXbrl, instanciaDb);

                return documentoInstanciaXbrl;

            }

            return null;
        }
        /// <summary>
        /// Obtiene la taxonomía apartir de un documento de instancia.
        /// </summary>
        /// <param name="instanciaDto">Documento del que se pretende obtener la taxonomía.</param>
        /// <param name="_cacheTaxonomiaXbrl">Cache de documentos de instancia.</param>
        /// <param name="_estrategiaCacheTaxonomia">Cache de taxonomías de documentos de instancia.</param>
        /// <returns>Taxonomía del documento indicado.</returns>
        private TaxonomiaDto ObtenTaxonomiaDocumentoInstancia(DocumentoInstanciaXbrlDto instanciaDto, ICacheTaxonomiaXBRL _cacheTaxonomiaXbrl, EstrategiaCacheTaxonomiaMemoria _estrategiaCacheTaxonomia) 
        {
            var taxonomiaDto = _cacheTaxonomiaXbrl.ObtenerTaxonomia(instanciaDto.DtsDocumentoInstancia);
            //if (taxonomiaDto == null)
            //{
            //    var taxo = new TaxonomiaXBRL { ManejadorErrores = new ManejadorErroresCargaTaxonomia() };
            //    foreach (var dts in instanciaDto.DtsDocumentoInstancia)
            //    {
            //        if (dts.Tipo == DtsDocumentoInstanciaDto.SCHEMA_REF)
            //        {
            //            taxo.ProcesarDefinicionDeEsquema(dts.HRef);
            //        }
            //    }
            //    taxo.CrearArbolDeRelaciones();
            //    taxonomiaDto = XbrlViewerService.CrearTaxonomiaAPartirDeDefinicionXbrl(taxo);
            //    if (taxo.ManejadorErrores.PuedeContinuar())
            //    {
            //        _cacheTaxonomiaXbrl.AgregarTaxonomia(instanciaDto.DtsDocumentoInstancia, taxonomiaDto);
            //        _estrategiaCacheTaxonomia.AgregarTaxonomia(DocumentoInstanciaXbrlDtoConverter.ConvertirDtsDocumentoInstancia(instanciaDto.DtsDocumentoInstancia), taxo);
            //    }
               
            //}
            return taxonomiaDto;
        }

        /// <summary>
        /// Determina si ya existe un hecho para el concepto y contextos dados.
        /// </summary>
        /// <param name="instanciaDto">Instancia del documento donde se realizara la busqueda.</param>
        /// <param name="idConcepto">Identificador del concepto.</param>
        /// <param name="idContexto">Identificador de contexto.</param>
        /// <returns>Si existe un hecho con el concepto y contexto indicados.</returns>
        private bool ExisteHechoConIdConceptoIdContexto(DocumentoInstanciaXbrlDto instanciaDto, string idConcepto, string idContexto)
        {
            if (!instanciaDto.HechosPorIdContexto.ContainsKey(idContexto) || !instanciaDto.HechosPorIdConcepto.ContainsKey(idConcepto))
            {
                return false;
            }

            var idsHechosPorContexto = instanciaDto.HechosPorIdContexto[idContexto];
            var idsHechosPorConcepto = instanciaDto.HechosPorIdConcepto[idConcepto];
            foreach (var idHechoCocepto in idsHechosPorConcepto)
            {
                if (idsHechosPorContexto.Contains(idHechoCocepto))
                {
                    return true;
                }
            }

            return false;
        }

        /// <summary>
        /// Genera una nueva versión de un documento de instancia con los contextos actualizados.
        /// </summary>
        /// <param name="idDocumentoInstancia">Identificador del documento al que se generará la nueva vesión.</param>
        /// <param name="IdUsuarioExec">Identificador del usuario que dispara este procedimiento.</param>
        /// <param name="_cacheTaxonomiaXbrl">Contiene definiciones de las taxonomias.</param>
        /// <param name="_estrategiaCacheTaxonomia">Cache de taxonomías de documentos de instancia.</param>
        [Transaction(TransactionPropagation.Required)]
        public void GeneradocumentoInstaciaCotextoActualizado(long idDocumentoInstancia, long IdUsuarioExec, ICacheTaxonomiaXBRL _cacheTaxonomiaXbrl, EstrategiaCacheTaxonomiaMemoria _estrategiaCacheTaxonomia)
        {
            var documentoInstanciaDto = ObtenerModeloDocumentoInstanciaXbrl(idDocumentoInstancia, IdUsuarioExec).InformacionExtra as DocumentoInstanciaXbrlDto;
            if (documentoInstanciaDto == null)
            {
                return;
            }
            if (documentoInstanciaDto.Taxonomia == null)
            {
                documentoInstanciaDto.Taxonomia = ObtenTaxonomiaDocumentoInstancia(documentoInstanciaDto, _cacheTaxonomiaXbrl, _estrategiaCacheTaxonomia);
            }
            if (documentoInstanciaDto.Taxonomia == null)
            {
                return;
            }
            //DocumentoInstanciaXbrlDtoConverter.AgruparInformacionDocumento(documentoInstanciaDto);
            //XbrlViewerService.EliminarElementosDuplicados(documentoInstanciaDto);

            var listaIdsConceptos = GetListaConceptosAplicanActualizacionContexto(documentoInstanciaDto);
            var trimestre = documentoInstanciaDto.ParametrosConfiguracion["trimestre"];
            try
            {
                if (trimestre != "4D" && Int32.Parse(trimestre) == 1)
                {
                    return;
                }
            }catch(Exception e)
            {
                LogUtil.Error(e);
            }
            var anio = documentoInstanciaDto.ParametrosConfiguracion["anio"].Substring(0,4);
            var acumulados = GeneraPeriodosAcumulados(trimestre, anio);
            var acumuladoPeriodo = acumulados[0];
            var acumuladoTrimestre = acumulados[1];
            var mapaContextosAjustado = new Dictionary<string, string>();
            var contextosAjustadosCount = 0;
            
            foreach (var idConcepto in listaIdsConceptos)
            {
                if (!documentoInstanciaDto.HechosPorIdConcepto.ContainsKey(idConcepto))
                {
                    continue;
                }
                var listaIdsHechos = documentoInstanciaDto.HechosPorIdConcepto[idConcepto];
                foreach (var idHecho in listaIdsHechos) 
                {
                    var hecho = documentoInstanciaDto.HechosPorId[idHecho];
                    if (hecho.IdContexto == null || !documentoInstanciaDto.ContextosPorId.ContainsKey(hecho.IdContexto))
                    {
                        continue;
                    }
                    var contexto = documentoInstanciaDto.ContextosPorId[hecho.IdContexto];
                    var periodo = contexto.Periodo;

                    if (periodo.EstructuralmenteIgual(acumuladoTrimestre)) 
                    {

                        var nuevoIdContexto = hecho.IdContexto;

                        if (mapaContextosAjustado.ContainsKey(contexto.Id))
                        {
                            nuevoIdContexto = mapaContextosAjustado[contexto.Id];
                        }
                        else
                        {
                            nuevoIdContexto = ObtenContextoAjustado(contexto, acumuladoPeriodo, documentoInstanciaDto);
                            mapaContextosAjustado.Add(contexto.Id, nuevoIdContexto);
                        }

                        if(ExisteHechoConIdConceptoIdContexto(documentoInstanciaDto,idConcepto,nuevoIdContexto))
                        {
                            continue;
                        }


                        hecho.IdContexto = nuevoIdContexto;
                        contextosAjustadosCount++;
                    }

                    hecho = null;
                    contexto = null;
                    periodo = null;
                }

                listaIdsHechos = null;
            }
            anio = null;
            acumulados = null;
            acumuladoPeriodo = null;
            acumuladoTrimestre = null;
            mapaContextosAjustado = null;
            if (contextosAjustadosCount > 0)
            {
                DocumentoInstanciaXbrlDtoConverter.AgruparInformacionDocumento(documentoInstanciaDto);
                XbrlViewerService.EliminarElementosDuplicados(documentoInstanciaDto);
                documentoInstanciaDto.Comentarios = "Versión de documento generada de forma automática por actualización de la aplicación Abax XBRL de la versión 1.7 a la 1.8.";
                GuardarDocumentoInstanciaXbrl(documentoInstanciaDto, IdUsuarioExec);
            }
            listaIdsConceptos = null;
            trimestre = null;
            documentoInstanciaDto = null;
        }
        ///// <summary>
        ///// Itera todos los documentos de instancia existentes en la BD y les genera una nueva versión con los contextos actualizados.
        ///// </summary>
        ///// <param name="idUsuarioExec">Identificador del usuario que ejecuta este procedimiento.</param>
        ///// <param name="_cacheTaxonomiaXbrl">Contiene definiciones de las taxonomias.</param>
        ///// <param name="_estrategiaCacheTaxonomia">Cache de taxonomías.</param>
        //public void GeneraDocumentosInstannciaContextosActualizados(long idUsuarioExec, ICacheTaxonomiaXBRL _cacheTaxonomiaXbrl, EstrategiaCacheTaxonomiaMemoria _estrategiaCacheTaxonomia)
        //{
        //    var listaIdsDocumentosInstancia = DocumentoInstanciaRepository.ObtenIdsDocumentosInstancia();
        //    if (listaIdsDocumentosInstancia.Count > 0)
        //    {
        //        foreach (var idDocumentoInstancia in listaIdsDocumentosInstancia)
        //        {
        //            try
        //            {
        //                var entiy = DocumentoInstanciaRepository.GetById(idDocumentoInstancia);
        //                var idUsuario = entiy.IdUsuarioBloqueo != null ? entiy.IdUsuarioBloqueo : entiy.IdUsuarioUltMod;
        //                GeneradocumentoInstaciaCotextoActualizado(idDocumentoInstancia, idUsuario ?? idUsuarioExec, _cacheTaxonomiaXbrl, _estrategiaCacheTaxonomia);
        //            }catch(Exception e) 
        //            {
        //                System.Console.Write(e);
        //            }
        //        }
        //    }
        //}

        #endregion


        public ResultadoOperacionDto ImportarHechosADocumentoInstancia(DocumentoInstanciaXbrlDto documentoInstancia, long idDocumentoImportar,Boolean coincidirUnidad, Boolean sobreescribirValores, long idUsuarioExec)
        {
            var resultadoOperacion = new ResultadoOperacionDto();
            resultadoOperacion.Resultado = true;
            int hechosImportados = 0;
            var importarHecho = true;
            var resultadoDocumentoImportar = this.ObtenerModeloDocumentoInstanciaXbrl(idDocumentoImportar, idUsuarioExec);
            if (!resultadoDocumentoImportar.Resultado) {
                return resultadoDocumentoImportar;
            }
            var documentoInstanciaImportar = resultadoDocumentoImportar.InformacionExtra as DocumentoInstanciaXbrlDto;
            var mapeoContextosDestino = new Dictionary<string, IList<String>>();
            
            foreach (var hechoImportar in documentoInstanciaImportar.HechosPorId.Values)
            {
                
                if (documentoInstancia.HechosPorIdConcepto.ContainsKey(hechoImportar.IdConcepto) &&
                    !String.IsNullOrEmpty(hechoImportar.IdContexto)
                    && documentoInstanciaImportar.ContextosPorId.ContainsKey(hechoImportar.IdContexto))
                { 
                    //Los conceptos en el origen y destino coinciden y existe contexto origen
                    if (!mapeoContextosDestino.ContainsKey(hechoImportar.IdContexto)) {
                        //Si el contexto origen todavía no está mapeado, agregar el mapeo
                        var contextoOrigen = documentoInstanciaImportar.ContextosPorId[hechoImportar.IdContexto];
                        var dimensionInfo = new List<DimensionInfoDto>();
                        if(contextoOrigen.ValoresDimension != null){
                            dimensionInfo.AddRange(contextoOrigen.ValoresDimension);
                        }
                        if(contextoOrigen.Entidad.ValoresDimension != null){
                            dimensionInfo.AddRange(contextoOrigen.Entidad.ValoresDimension);
                        }
                        var contextosEquivalentes = documentoInstancia.BuscarContexto(contextoOrigen.Entidad.IdEntidad,
                            contextoOrigen.Periodo.Tipo,
                            contextoOrigen.Periodo.FechaInicio,
                            contextoOrigen.Periodo.Tipo == Period.Instante ? contextoOrigen.Periodo.FechaInstante : contextoOrigen.Periodo.FechaFin,
                            dimensionInfo);
                        mapeoContextosDestino[hechoImportar.IdContexto] = new List<String>();
                        foreach (var contextoEq in contextosEquivalentes)
                        {
                            mapeoContextosDestino[hechoImportar.IdContexto].Add(contextoEq.Id);
                        }
                    }

                    foreach (var idHechoDestino in documentoInstancia.HechosPorIdConcepto[hechoImportar.IdConcepto])
                    {
                        var hechoDestino = documentoInstancia.HechosPorId[idHechoDestino];
                        //si el hecho de destino está en un contexto equivalente al contexto del origen, importar el valor
                        if(mapeoContextosDestino[hechoImportar.IdContexto].Contains(hechoDestino.IdContexto)){
                            importarHecho = true;
                            //Si se requiere que las unidades coincidan
                            if (coincidirUnidad && hechoDestino.IdUnidad != null && hechoImportar.IdUnidad != null &&
                                documentoInstancia.UnidadesPorId.ContainsKey(hechoDestino.IdUnidad) && 
                                documentoInstanciaImportar.UnidadesPorId.ContainsKey(hechoImportar.IdUnidad))
                            {
                                importarHecho = documentoInstancia.UnidadesPorId[hechoDestino.IdUnidad].EsEquivalente(
                                        documentoInstanciaImportar.UnidadesPorId[hechoImportar.IdUnidad]
                                    );
                            }
                            if (importarHecho && !sobreescribirValores && hechoImportar.EsNumerico && hechoImportar.ValorNumerico != 0) {
                                importarHecho = false;
                            }
                            if (importarHecho) {
                                hechoDestino.Valor = hechoImportar.Valor;
                                if (hechoDestino.EsNumerico)
                                {
                                    hechoDestino.InferirPrecisionYDecimales();
                                }
                                hechosImportados++;
                            }
                            
                        }
                    }
                }
                var infoExtra = new Dictionary<String, String>();
                infoExtra["hechosImportados"] = hechosImportados.ToString();
                resultadoOperacion.InformacionExtra = infoExtra;
            }

            return resultadoOperacion;
        }

        public ResultadoOperacionDto ObtenerEmpresasDocumentoInstancia() {
            var resultadoOperacion = new ResultadoOperacionDto();
            resultadoOperacion.Resultado = true;

            try
            {
                var query = DocumentoInstanciaRepository.GetQueryable().Select(r => r.ClaveEmisora).Distinct();
                resultadoOperacion.InformacionExtra = query.ToList();
            }
            catch (Exception e) {
                LogUtil.Error(e);
                resultadoOperacion.Resultado = false;
                resultadoOperacion.Mensaje = e.Message;
            }

            return resultadoOperacion;
        }


        public ResultadoOperacionDto ObtenerVersionesDocumentosPorConfiguracionConsulta(AbaxXBRLCore.Viewer.Application.Dto.Angular.ConsultaAnalisisDto consultaAnalisis) {
            var resultadoOperacion = new ResultadoOperacionDto();
            resultadoOperacion.Resultado = true;

            var listadoDocumentosInstancia = DocumentoInstanciaRepository.ObtenerDocumentosInstanciaPorConsulta(consultaAnalisis);
            var DocumentosInstanciaPrincipal = new List<DocumentoInstanciaXbrlDto>();
            foreach(var documentoInstancia in listadoDocumentosInstancia){

                var documentoInstanciaXbrlDto = new DocumentoInstanciaXbrlDto();
                DocumentoInstanciaXbrlDtoConverter.ConvertirModeloBaseDeDatos(documentoInstanciaXbrlDto, DocumentoInstanciaRepository.GetById(documentoInstancia.IdDocumentoInstancia));
                DocumentosInstanciaPrincipal.Add(documentoInstanciaXbrlDto);
            }

            resultadoOperacion.InformacionExtra = DocumentosInstanciaPrincipal;
            return resultadoOperacion;
        }

        
        public ResultadoOperacionDto CrearEstructuraDocumento(DocumentoInstanciaXbrlDto documentoInstancia) {

            ResultadoOperacionDto resultadoOperacionDto = new ResultadoOperacionDto();
            resultadoOperacionDto.Resultado = true;
            
            try {
                
                var estructuraDocumentoService = new EstructuraDocumentoInstanciaService(documentoInstancia);
                var estructurasDocumentoPorRol = new Dictionary<string, IList<ElementoDocumentoDto>>();
                foreach(var rolPresentacion in documentoInstancia.Taxonomia.RolesPresentacion){
                    
                    IList<ElementoDocumentoDto> elementosDocumento = new List<ElementoDocumentoDto>();

                    estructuraDocumentoService.recorrerArbolLinkbasePresentacion(rolPresentacion.Estructuras, elementosDocumento, null, 0, rolPresentacion);
                    estructuraDocumentoService.prepararTodasLasEstructurasTabla(elementosDocumento);

                    estructurasDocumentoPorRol.Add(rolPresentacion.Uri, elementosDocumento);
                }
                resultadoOperacionDto.InformacionExtra = estructurasDocumentoPorRol;
            }
            catch (Exception e) {
                LogUtil.Error(e);
                resultadoOperacionDto.Resultado = false;
                resultadoOperacionDto.Mensaje = e.Message;
            }

            return resultadoOperacionDto;
        }
        /// <summary>
        /// Determina si el concepto enviado como parámetro es un primary item de algún hipercubo de la taxonomía 
        /// declarado en el rol.
        /// </summary>
        /// <param name="idConcepto">Concepto a verificar</param>
        /// <param name="taxonomia">Taxonomía en la cuál se debe de inspeccionar el hipercubo del rol</param>
        /// <param name="rolUri">Rol al cuál pertenece el hipercubo que se está examinando</param>
        /// <returns>True si el concepto pertenece al hipercubo declarado en el rol enviado como parámetro, false en otro caso</returns>
        public Boolean PerteneceConceptoAHipercuboEnRol(String idConcepto, TaxonomiaDto taxonomia, String rolUri) {
            if (idConcepto != null && taxonomia != null && rolUri != null) {
                if (taxonomia.ListaHipercubos != null && taxonomia.ListaHipercubos.ContainsKey(rolUri)) { 
                    foreach(var hipercubo in taxonomia.ListaHipercubos[rolUri]){
                        if (hipercubo.ElementosPrimarios.Any(x => x.Equals(idConcepto))) {
                            return true;
                        }
                    }
                }
            }
            return false;
        }
		
		public ResultadoOperacionDto ActualizarEstructuraDocumento(DocumentoInstanciaXbrlDto documentoInstancia,IList<ElementoDocumentoDto> elementosDocumento)
        {
            ResultadoOperacionDto resultadoOperacionDto = new ResultadoOperacionDto();
            resultadoOperacionDto.Resultado = true;

            try
            {
                var estructuraDocumentoService = new EstructuraDocumentoInstanciaService(documentoInstancia);

                estructuraDocumentoService.actualizarTodasLasEstructurasTabla(elementosDocumento);

                resultadoOperacionDto.InformacionExtra = elementosDocumento;
            }
            catch (Exception e)
            {
                LogUtil.Error(e);
                resultadoOperacionDto.Resultado = false;
                resultadoOperacionDto.Mensaje = e.Message;
            }

            return resultadoOperacionDto;

        }

        public UsuarioDocumentoInstancia ObtenUsuarioBloqueoDocumentoInstancia(long idDocumentoInstancia) 
        {
            var documento = DocumentoInstanciaRepository.GetById(idDocumentoInstancia);
            if(!documento.Bloqueado) 
            {
                return null;
            }

            var usuarioDocumento =  UsuarioDocumentoInstanciaRepository.Get(x => x.IdDocumentoInstancia == idDocumentoInstancia && x.IdUsuario == documento.IdUsuarioBloqueo).First();
            return usuarioDocumento;
        }

        
        public ResultadoOperacionDto RegistrarAccionAuditoria(InformacionAuditoriaDto inforAudit)
        {
            var resultado = new ResultadoOperacionDto();

            if (inforAudit != null)
            {

                RegistroAuditoria registroAuditoria = new RegistroAuditoria();
                if (inforAudit != null)
                {
                    registroAuditoria.IdEmpresa = inforAudit.Empresa;
                    registroAuditoria.Registro = inforAudit.Registro;
                    registroAuditoria.IdAccionAuditable = inforAudit.Accion;
                    registroAuditoria.IdModulo = inforAudit.Modulo;
                    registroAuditoria.IdUsuario = inforAudit.IdUsuario;
                    registroAuditoria.Fecha = DateTime.Now;
                    var session = HttpContext.Current.Session;
                    if (session != null)
                    {
                        if (registroAuditoria.IdEmpresa == 0 && session[ConstantsWeb.IdEmpresaSession] != null)
                            registroAuditoria.IdEmpresa = long.Parse(session[ConstantsWeb.IdEmpresaSession].ToString());
                    }

                    RegistroAuditoriaRepository.GuardarRegistroAuditoria(registroAuditoria);
                    resultado.Resultado = true;
                }
            }
            return resultado;

        }

        [Transaction(TransactionPropagation.Required)]
        public ResultadoOperacionDto RegistrarHechosDocumentoInstancia(DocumentoInstanciaXbrlDto documentoInstanciaXbrlDto)
        {
            var resultado = new ResultadoOperacionDto();
            var idDocumentoInstancia = documentoInstanciaXbrlDto.IdDocumentoInstancia.Value;
            var instanciaDb = DocumentoInstanciaRepository.GetById(idDocumentoInstancia);
            

            if (instanciaDb != null)
            {
                

                    //Eliminar hechos, contextos, unidades, dts
                    HechoRepository.EliminarHechosDeDocumento(instanciaDb.IdDocumentoInstancia);
                    instanciaDb.Hecho.Clear();
                    ContextoRepository.EliminarContextosDeDocumento(instanciaDb.IdDocumentoInstancia);
                    instanciaDb.Contexto.Clear();
                    UnidadRepository.EliminarUnidadesDeDocumento(instanciaDb.IdDocumentoInstancia);
                    instanciaDb.Unidad.Clear();
                    NotaAlPieRepository.EliminarNotasAlPieDeDocumentoInstancia(instanciaDb.IdDocumentoInstancia);
                    instanciaDb.NotaAlPie.Clear();

                    //Guardar unidades
                    InsertarUnidades(instanciaDb, documentoInstanciaXbrlDto);
                    //Guardar contextos
                    InsertarContextos(instanciaDb, documentoInstanciaXbrlDto);
                    //guardar hechos
                    InsertarHechos(instanciaDb, documentoInstanciaXbrlDto);
                    //Guardar notas al pie de los hechos
                    InsertarNotasAlPie(instanciaDb, documentoInstanciaXbrlDto);


                    resultado.Resultado = true;
            }
            else 
            {
                resultado.Resultado = false;
                resultado.Mensaje = "No se encuentra el documento de instancia :" + idDocumentoInstancia;
            }

            return resultado;
        }

        [Transaction(TransactionPropagation.Required)]
        public ResultadoOperacionDto RegistrarArchivosHechosDocumentoInstancia(DocumentoInstanciaXbrlDto documentoInstanciaXbrlDto)
        {
            var resultado = new ResultadoOperacionDto();
            var idDocumentoInstancia = documentoInstanciaXbrlDto.IdDocumentoInstancia.Value;
            var instanciaDb = DocumentoInstanciaRepository.GetById(idDocumentoInstancia);
            var listaHechosFinales = new List<AbaxXBRLCore.Entities.ArchivoAdjuntoXbrl>();


            if (instanciaDb != null)
            {


                foreach(var Hecho in documentoInstanciaXbrlDto.HechosPorId.Values) {
                    if (Hecho.TipoDato.Contains("base64BinaryItemType") && Hecho.Valor != null && Hecho.Valor != "") {
                        ArchivoAdjuntoXbrl archivoAdjuntoXbrl = new ArchivoAdjuntoXbrl();
                        archivoAdjuntoXbrl.Archivo = Hecho.Valor;
                        archivoAdjuntoXbrl.IdContexto = Hecho.IdContexto;
                        archivoAdjuntoXbrl.IdConcepto = Hecho.IdConcepto;
                        archivoAdjuntoXbrl.IdHecho = Hecho.Id;
                        archivoAdjuntoXbrl.IdDocumentoInstancia = documentoInstanciaXbrlDto.IdDocumentoInstancia.GetValueOrDefault();

                        listaHechosFinales.Add(archivoAdjuntoXbrl);
                    }

                }


                if (listaHechosFinales.Count > 0)
                {
                    ArchivoAdjuntoXbrlRepository.BulkInsert(listaHechosFinales);
                    resultado.Resultado = true;
                }
                else
                {
                    resultado.Mensaje = "NA";
                    resultado.Resultado = false;
                }

                
            }
            else
            {
                resultado.Resultado = false;
                resultado.Mensaje = "No se encuentra el documento de instancia :" + idDocumentoInstancia;
            }

            return resultado;
        }

        /// <summary>
        /// Inicializa el trigger que se ejecuta cada cierto tiempo "cronExpression", para procesar la información de los documentos
        /// Pendientes 
        /// </summary>
        public void InicializarSchedulerDocumentosPendientes()
        {
            try 
            {
                LogUtil.Info("Inicializando Procesador de Documentos pendientes");
                // construct a scheduler factory
                ISchedulerFactory schedFact = new StdSchedulerFactory();

                // get a scheduler
                IScheduler sched = schedFact.GetScheduler();
                if (!sched.IsStarted)
                {
                    sched.Start();
                }

                var jobDocumentosPendientesDetail = sched.GetJobDetail("DocumentosPendientesJob", "DEFAULT");
                if (jobDocumentosPendientesDetail != null)
                {
                    LogUtil.Error("El JOB 'DocumentosPendientesJob' ya se esta ejecutando y no se puede levantar nuevamente.");
                    return;
                }

                // construct job info
                jobDocumentosPendientesDetail = new JobDetail("DocumentosPendientesJob", null, typeof(DocumentoPendienteJob));

                jobDocumentosPendientesDetail.JobDataMap["AlmacenarDocumentoInstanciaService"] = AlmacenarDocumentoInstanciaService;
                jobDocumentosPendientesDetail.JobDataMap["ProcesarDistribucionDocumentoXBRLService"] = ProcesarDistribucionDocumentoXBRLService;
                jobDocumentosPendientesDetail.JobDataMap["CacheTaxonomia"] = CacheTaxonomia;

                // Cada 5 minutos es ejecutado el proceso
                Trigger trigger = new CronTrigger("cronTriggerDocumentosPendientes", "grupoDocumentosPendientes", CronExpresionVersionDocumentoPendientes);

                // Inicia el trigger de inmediato
                trigger.StartTimeUtc = DateTime.UtcNow;
                sched.ScheduleJob(jobDocumentosPendientesDetail, trigger);
                LogUtil.Info("Procesador de documentos pendientes inicializado y corriendo");
            }
            catch (Exception ex)
            {
                var detalle = new Dictionary<string, object>() 
                {
                    {"Mensaje","Error al inicia el Monitod de Documentos."},
                    {"Excepsion", ex}
                };
                LogUtil.Error(detalle);
            }
        }
        /// <summary>
        /// Realiza una consluta de documentos con la paginación indicada.
        /// </summary>
        /// <param name="paginacion">DTO con la información de la paginación.</param>
        /// <param name="idUsuario">Identificador del usuario que ejecuta.</param>
        /// <param name="esDueno">Si debe retornar los documentos propios o compartidos.</param>
        /// <returns>Paginación evaluada con los datos obtenidos.</returns>
        public PaginacionSimpleDto<AbaxXBRLCore.Viewer.Application.Dto.Angular.DocumentoInstanciaDto> ObtenerDocumentosPaginados(PaginacionSimpleDto<AbaxXBRLCore.Viewer.Application.Dto.Angular.DocumentoInstanciaDto> paginacion, long idUsuario, bool esDueno)
        {
            return DocumentoInstanciaRepository.ObtenerDocumentosPaginados(paginacion, idUsuario, esDueno);
        }


        public ResultadoOperacionDto ImportarArchivoBase64(Stream streamDocumento) 
        {
            ResultadoOperacionDto resultado = new ResultadoOperacionDto();
            resultado.Resultado = false;
            try
            {
                var buffer = new byte[streamDocumento.Length];
                streamDocumento.Read(buffer, 0, (int)streamDocumento.Length);
                String resultadoBase64 = Convert.ToBase64String(buffer);
                resultado.InformacionExtra = resultadoBase64;
                resultado.Resultado = true;
            }
            catch (Exception ex)
            {
                resultado.Mensaje = ex.Message;
            }
            return resultado;
        }

        /// <summary>
        /// Obtiene los datos para graficar la cantidad de empresas que han reportado cada una de las taxonomías registradas para un trimestre determinado.
        /// </summary>
        /// <param name="anio">Año requerido</param>
        /// <param name="trimestre">Trinestre requerido</param>
        /// <returns>Datos para graficar.</returns>
        public ResultadoOperacionDto IndicadorEmisorasTrimestreActualPorTaxonimia(int anio, string trimestre)
        {
            var resultado = new ResultadoOperacionDto { Resultado = true };

            try
            {
                resultado.InformacionExtra = DocumentoInstanciaRepository.IndicadorEmisorasTrimestreActualPorTaxonimia(anio,trimestre);
            }
            catch(Exception ex)
            {
                LogUtil.Error(ex);
                resultado.Resultado = false;
                resultado.InformacionExtra = ex;
            }

            return resultado;
        }

        public ResultadoOperacionDto ObtenerVersionesDocumentoInstanciaComparador(long idDocumentoInstancia)
        {
            var resultado = new ResultadoOperacionDto { Resultado = true };

            try
            {
                resultado.InformacionExtra = DocumentoInstanciaRepository.ObtenerVersionesDocumentoInstanciaComparador(idDocumentoInstancia);
            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
                resultado.Resultado = false;
                resultado.InformacionExtra = ex;
            }

            return resultado;
        }
        /// <summary>
        /// Inicializa los hechos antes de realizar la comparación.
        /// </summary>
        /// <param name="documentoInstancia">Documento con los hechos que se pretenden comparar.</param>
        private void inicializaHechosComparacion(DocumentoInstanciaXbrlDto documentoInstancia)
        {
            foreach (var hechoId in documentoInstancia.HechosPorId.Keys)
            {
                documentoInstancia.HechosPorId[hechoId].CambioValorComparador = false;
            }
        }

        public void DeterminaDiferenciasHechosEquivalentes(DocumentoInstanciaXbrlDto documentoInstancia, string salt)
        {
            var diccionarioTodosContextos = documentoInstancia.ContextosPorId;
            var diccionarioContextosOrigen = new Dictionary<string, Viewer.Application.Dto.ContextoDto>();
            var diccionarioContextosSalados = new Dictionary<string, Viewer.Application.Dto.ContextoDto>();
            inicializaHechosComparacion(documentoInstancia);
            foreach (var contextoId in diccionarioTodosContextos.Keys)
            {
                var contextoItem = diccionarioTodosContextos[contextoId];
                if (!contextoItem.Entidad.Id.EndsWith(salt))
                {
                    diccionarioContextosOrigen.Add(contextoId, contextoItem);
                }
                else
                {
                    diccionarioContextosSalados.Add(contextoId, contextoItem);
                }
            }
            foreach (var idContextoOrigen in diccionarioContextosOrigen.Keys)
            {
                var contextoOrigen = diccionarioContextosOrigen[idContextoOrigen];
                foreach (var idContextoSalado in diccionarioContextosSalados.Keys)
                {
                    var contextoSalado = diccionarioContextosSalados[idContextoSalado];
                    var entidadOriginal = contextoOrigen.Entidad.Id;
                    contextoOrigen.Entidad.Id += salt;
                    if (contextoOrigen.EstructuralmenteIgual(contextoSalado))
                    {
                        ComparaHechosDeContextos(documentoInstancia, contextoOrigen.Id, contextoSalado.Id);
                    }
                    contextoOrigen.Entidad.Id = entidadOriginal;
                }
            }
        }
        /// <summary>
        /// Compara hechos de contextos equivalentes.
        /// </summary>
        /// <param name="documentoInstancia">Documento de instancia XBRL evaluado.</param>
        /// <param name="idContextoOrigen">Identificador del contexto origen.</param>
        /// <param name="idContextoSalado">Identificador del contexto salado.</param>
        private void ComparaHechosDeContextos(DocumentoInstanciaXbrlDto documentoInstancia, String idContextoOrigen, String idContextoSalado)
        {
            IList<string> idsHechosOrigen;
            IList<string> idsHechosSalados;
            if (documentoInstancia.HechosPorIdContexto.TryGetValue(idContextoOrigen,out idsHechosOrigen))
            {
                if (documentoInstancia.HechosPorIdContexto.TryGetValue(idContextoSalado, out idsHechosSalados))
                {
                    foreach (var idHechoOrigen in idsHechosOrigen)
                    {
                        var hechoOrigen = documentoInstancia.HechosPorId[idHechoOrigen];
                        foreach (var idHechoSalado in idsHechosSalados)
                        {
                            var hechoSalado = documentoInstancia.HechosPorId[idHechoSalado];
                            var equivalentes = false;
                            if (hechoOrigen.IdConcepto.Equals(hechoSalado.IdConcepto))
                            {
                                var tieneUnidadOrigen = !String.IsNullOrEmpty(hechoOrigen.IdUnidad);
                                var tieneUnidadSalada = !String.IsNullOrEmpty(hechoSalado.IdUnidad);
                                if (tieneUnidadOrigen.Equals(tieneUnidadSalada))
                                {
                                    if (tieneUnidadOrigen)
                                    {
                                        if (!hechoOrigen.IdUnidad.Equals(hechoSalado.IdUnidad))
                                        {
                                            Viewer.Application.Dto.UnidadDto unidadOrigen;
                                            Viewer.Application.Dto.UnidadDto unidadSalada;
                                            if (documentoInstancia.UnidadesPorId.TryGetValue(hechoOrigen.IdUnidad, out unidadOrigen) &&
                                               documentoInstancia.UnidadesPorId.TryGetValue(hechoSalado.IdUnidad, out unidadSalada))
                                            {
                                                equivalentes = unidadOrigen.EsEquivalente(unidadSalada);
                                            }
                                        }
                                        else
                                        {
                                            equivalentes = true;
                                        }
                                    }
                                    else
                                    {
                                        equivalentes = true;
                                    }
                                }
                            }
                            if (equivalentes)
                            {
                                if (!hechoOrigen.Valor.Equals(hechoSalado.Valor))
                                {
                                    hechoOrigen.CambioValorComparador = true;
                                    hechoSalado.CambioValorComparador = true;
                                }
                            }
                        }
                    }
                }
            }
        }

        public void InicializarTaxonomiasPorConfiguracion()
        {

            var xpeServ = XPEServiceImpl.GetInstance(ForzarHttp);


            LogUtil.Info("Inicializando taxonomías por configuración");

            if (TaxonomiasPreCarga != null)
            {
                var hilosCargaTax = new List<Thread>();
                foreach (String entryP in TaxonomiasPreCarga) {
                    List<DtsDocumentoInstanciaDto> currentDTS = new List<DtsDocumentoInstanciaDto>();
                    currentDTS.Add(new DtsDocumentoInstanciaDto() {
                        HRef = entryP,
                        Tipo = DtsDocumentoInstanciaDto.SCHEMA_REF
                    });
                    if (CacheTaxonomia.ObtenerTaxonomia(currentDTS) != null)
                    {
                        continue;
                    }

                    hilosCargaTax.Add(new Thread(() => {
                        var errores = new List<ErrorCargaTaxonomiaDto>();
                        LogUtil.Info("Precargando taxonomía por configuración:" + entryP);
                        var taxonomiaDto = xpeServ.CargarTaxonomiaXbrl(entryP, errores,false);
                        if (taxonomiaDto != null)
                        {
                            CacheTaxonomia.AgregarTaxonomia(currentDTS, taxonomiaDto);
                            LogUtil.Info("Taxonomía agregada a cache:" + taxonomiaDto.EspacioNombresPrincipal);
                        }
                        else
                        {
                            LogUtil.Info("Ocurrió un error al cargar la taxonomía:" + entryP);
                            LogUtil.Error(errores);
                        }
                    }));
                }
                foreach (var hilo in hilosCargaTax)
                {
                    hilo.Start();
                }
                foreach (var hilo in hilosCargaTax)
                {
                    hilo.Join();
                }
            }

        }
        /// <summary>
        /// Actualiza los dominios del documento según la configuración definida.
        /// </summary>
        /// <param name="documentoInstanciaXbrlDto">Documento con los dominios a evaluar.</param>
        /// <returns>Documento con los dominios actualizados.</returns>
        public DocumentoInstanciaXbrlDto EvaluaConfiguracionDominiosDocumentoInstancia(DocumentoInstanciaXbrlDto documentoInstanciaXbrlDto)
        {
            try
            {
                if (ConfiguracionAuxiliarXBRL != null && ConfiguracionAuxiliarXBRL.DominiosSustitutosDocumentoInstancia != null)
                {
                    foreach (var dominioSustituir in ConfiguracionAuxiliarXBRL.DominiosSustitutosDocumentoInstancia.Keys)
                    {
                        var dominioSustituto = ConfiguracionAuxiliarXBRL.DominiosSustitutosDocumentoInstancia[dominioSustituir];
                        foreach (var documento in documentoInstanciaXbrlDto.DtsDocumentoInstancia)
                        {
                            if (!String.IsNullOrEmpty(documento.HRef) && documento.HRef.Trim().ToLower().Contains(dominioSustituir))
                            {
                                documento.HRef = documento.HRef.Replace(dominioSustituir, dominioSustituto);
                            }
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
            }
            return documentoInstanciaXbrlDto;
        }

        /// <summary>
        /// Actualiza los dominios del documento según la configuración definida.
        /// </summary>
        /// <param name="documentoInstanciaXbrlDto">Documento con los dominios a evaluar.</param>
        /// <returns>Documento con los dominios actualizados.</returns>
        public DocumentoInstanciaXBRL EvaluaConfiguracionDominiosDocumentoInstancia(DocumentoInstanciaXBRL documentoInstanciaXbrl)
        {
            try
            {
                if (ConfiguracionAuxiliarXBRL != null && ConfiguracionAuxiliarXBRL.DominiosSustitutosDocumentoInstancia != null)
                {
                    var diccionarioEsquemasAuxiliar = new Dictionary<string, System.Xml.Schema.XmlSchema>();
                    var elementosDescartar = new List<string>();
                    foreach (var dominioSustituir in ConfiguracionAuxiliarXBRL.DominiosSustitutosDocumentoInstancia.Keys)
                    {
                        var dominioSustituto = ConfiguracionAuxiliarXBRL.DominiosSustitutosDocumentoInstancia[dominioSustituir];
                        foreach (var dominioEsquema in documentoInstanciaXbrl.Taxonomia.ArchivosEsquema.Keys)
                        {
                            var dominioEsquemaAjustado = dominioEsquema;
                            var elementoEsquema = documentoInstanciaXbrl.Taxonomia.ArchivosEsquema[dominioEsquema];
                            if (dominioEsquema.Trim().ToLower().Contains(dominioSustituir))
                            {
                                elementosDescartar.Add(dominioEsquema);
                                dominioEsquemaAjustado = dominioEsquema.Replace(dominioSustituir, dominioSustituto);
                                diccionarioEsquemasAuxiliar[dominioEsquemaAjustado] = elementoEsquema;
                            }
                        }
                    }
                    foreach (var dominioEsquema in documentoInstanciaXbrl.Taxonomia.ArchivosEsquema.Keys)
                    {   
                        if (!elementosDescartar.Contains(dominioEsquema))
                        {
                            diccionarioEsquemasAuxiliar[dominioEsquema] = documentoInstanciaXbrl.Taxonomia.ArchivosEsquema[dominioEsquema];
                        }
                    }
                    documentoInstanciaXbrl.Taxonomia.ArchivosEsquema = diccionarioEsquemasAuxiliar;
                }
            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
            }
            return documentoInstanciaXbrl;
        }
        /// <summary>
        /// Retorna la configuración auxiliar XBRL asignada.
        /// </summary>
        /// <returns></returns>
        public ConfiguracionAuxiliarXBRL ObtenConfiguracionAuxiliarXBRL()
        {
            return ConfiguracionAuxiliarXBRL;
        }
        
        /// <summary>
        /// Actualiza el número de fideicomiso de los documentos de tipo Anexo T, pendientes.
        /// </summary>
        /// <param name="currentHost">Host actual de la aplicación.</param>
        /// <returns>Resultado de la operación.</returns>
        public ResultadoOperacionDto ActualizaNumerosFideicomisosAnexoT (string currentHost)
        {
            var resultado = new ResultadoOperacionDto();
            resultado.Resultado = false;
            try
            {
                var documentosPendientes = DocumentoInstanciaRepository.ObtenAnexoTSinFidecomiso();
                var documentosCount = 0;
                string baseUrl = currentHost + "/DocumentoInstancia/BajarArchivoDocumentoInstancia?idDocIns={{ID}}&tipoArchivo=4&nombreArchivo=test.xbrl";
                foreach(var documento in documentosPendientes)
                {
                    var idDocumentoInstancia = documento.IdDocumentoInstancia;
                    var url = baseUrl.Replace("{{ID}}", idDocumentoInstancia.ToString());
                    using(XBRLWebClient webClient = new XBRLWebClient())
                    {
                        var downloadUri = new Uri(url);
                        webClient.Encoding = System.Text.Encoding.GetEncoding("ISO-8859-1");
                        ServicePointManager.SecurityProtocol = System.Net.SecurityProtocolType.Tls12;
                        var jsonString = webClient.DownloadString(downloadUri);
                        if(!string.IsNullOrEmpty(jsonString))
                        {
                            DocumentoInstanciaXbrlDto documentoInstanciXbrlDto = JsonConvert.DeserializeObject<DocumentoInstanciaXbrlDto>(jsonString);
                            IList<string> hechosFideicomiso;
                            if(documentoInstanciXbrlDto.HechosPorIdConcepto.TryGetValue(ValidadorArchivoInstanciaAnexoT.CONCEPTO_FIDEICOMISO, out hechosFideicomiso) && hechosFideicomiso.Count > 0)
                            {
                                foreach(var idHecho in hechosFideicomiso)
                                {
                                    AbaxXBRLCore.Viewer.Application.Dto.HechoDto hecho;
                                    if(documentoInstanciXbrlDto.HechosPorId.TryGetValue(idHecho, out hecho))
                                    {
                                        var numeroFideicomiso = hecho.Valor;
                                        documentosCount += DocumentoInstanciaRepository.ActualizaNumeroFideicomiso(idDocumentoInstancia, numeroFideicomiso);
                                    }
                                }
                            }
                        }
                    }
                }
                resultado.Resultado = true;
                resultado.Mensaje = "Se actualizaron " + documentosCount + "  números de fideicomisos";
            }
            catch(Exception e)
            {
                LogUtil.Error(e);
                resultado.Mensaje = e.Message;
                resultado.Excepcion = e.StackTrace;
                if(e.InnerException != null)
                {
                    resultado.Mensaje += ":" + e.InnerException.Message;
                    resultado.Excepcion += ":" + e.InnerException.StackTrace;
                }

            }
            return resultado;
        }

        /// <summary>
        /// Obtiene el valor del primer hecho obtenido para un identificador de concepto
        /// </summary>
        /// <param name="idConcepto">Identificador del concepto</param>
        /// <param name="documentoInstancia">Objeto que representa un documento instancia</param>
        /// <returns>Resultado de la operación.</returns>
        public String obtenerValorNoNumerico(String idConcepto, DocumentoInstanciaXbrlDto documentoInstancia)
        {

            IList<String> IdHechos = new List<string>();
            documentoInstancia.HechosPorIdConcepto.TryGetValue(idConcepto, out IdHechos);

            if (IdHechos != null && IdHechos.Count > 0)
            {
                Viewer.Application.Dto.HechoDto hecho = new Viewer.Application.Dto.HechoDto();
                documentoInstancia.HechosPorId.TryGetValue(IdHechos[0], out hecho);

                if (hecho != null)
                {
                    return hecho.Valor;
                }
            }

            return null;

        }

        /// <summary>
        /// Obtiene el valor del primer hecho obtenido para un identificador de concepto
        /// </summary>
        /// <param name="idConcepto">Identificador del concepto</param>
        /// <param name="documentoInstancia">Objeto que representa un documento instancia</param>
        /// <returns>Resultado de la operación.</returns>
        public short? obtenerValorEnteroShort(String idConcepto, DocumentoInstanciaXbrlDto documentoInstancia)
        {

            IList<String> IdHechos = new List<string>();
            documentoInstancia.HechosPorIdConcepto.TryGetValue(idConcepto, out IdHechos);

            if (IdHechos != null && IdHechos.Count > 0)
            {
                Viewer.Application.Dto.HechoDto hecho = new Viewer.Application.Dto.HechoDto();
                documentoInstancia.HechosPorId.TryGetValue(IdHechos[0], out hecho);

                if (hecho != null)
                {
                    short valor = 0;
                    if (short.TryParse(hecho.Valor, out valor)) {
                        return valor;
                    }


                }
            }

            return null;

        }

        /// <summary>
        /// Obtiene el valor del primer hecho obtenido para un identificador de concepto
        /// </summary>
        /// <param name="idConcepto">Identificador del concepto</param>
        /// <param name="documentoInstancia">Objeto que representa un documento instancia</param>
        /// <returns>Resultado de la operación.</returns>
        public DateTime? obtenerValorFecha(String idConcepto, DocumentoInstanciaXbrlDto documentoInstancia)
        {

            IList<String> IdHechos = new List<string>();
            documentoInstancia.HechosPorIdConcepto.TryGetValue(idConcepto, out IdHechos);

            if (IdHechos != null && IdHechos.Count > 0)
            {
                Viewer.Application.Dto.HechoDto hecho = new Viewer.Application.Dto.HechoDto();
                documentoInstancia.HechosPorId.TryGetValue(IdHechos[0], out hecho);

                if (hecho != null && hecho.Valor != null && !hecho.Valor.Equals(""))
                {
                    DateTime fecha = DateTime.MinValue;
                    if (XmlUtil.ParsearUnionDateTime(hecho.Valor, out fecha)) {
                        return fecha;
                    }
                }
            }

            return null;

        }

        /// <inheritdoc/>
        public ResultadoOperacionDto ObtenerPeriodicidadReportePorEspacioNombresPrincipal(string espacioNombresPrincipal)
        {
            return TaxonomiaXbrlRepository.ObtenerPeriodicidadReportePorEspacioNombresPrincipal(espacioNombresPrincipal);
        }
    }
}