using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Viewer.Application.Dto;
using AbaxXBRLCore.Viewer.Application.Model;
using Aspose.Words;
using NPOI.SS.UserModel;
using AbaxXBRLCore.Reports.Dto;
using AbaxXBRLCore.Reports.Util;
using System.Text.RegularExpressions;
using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.Viewer.Application.Dto.Hipercubos;
using AbaxXBRL.Constantes;
using AbaxXBRL.Taxonomia;

namespace AbaxXBRLCore.Viewer.Application.Import.Impl
{
    /// <summary>
    /// Importador exportador para el rol 427000 de las taxonomías de reporte anual y de prospecto.
    /// </summary>
    public class ImportadorExportadorRol427000_AR2016 : IImportadorExportadorRolDocumento
    {

        public void ExportarDatosDeHojaExcel(ISheet hojaAExportar, ISheet hojaPlantilla, DocumentoInstanciaXbrlDto instancia, string rol, IDefinicionPlantillaXbrl plantillaDocumento, string idioma)
        {
            ConceptoDto miembroActual = null;

            var consultaUtil = new ConsultaDocumentoInstanciaUtil(instancia, plantillaDocumento);
            int iRow = 0;
            int lastRowNum = hojaAExportar.LastRowNum;
            var configuracion = GeneraConfiguracionReporte(hojaPlantilla, instancia, plantillaDocumento);
            while (iRow <= lastRowNum)
            {

                //Si inicia un tipo de figura
                var valorCelda = ExcelUtil.ObtenerValorCelda(hojaAExportar, iRow, 0);
                if (!String.IsNullOrEmpty(valorCelda))
                {
                    miembroActual = configuracion.ListaConceptosMiembro.FirstOrDefault(x => valorCelda.Contains((x.Id)));
                    if (miembroActual != null)
                    {

                        iRow = ExportarFigura(iRow, miembroActual, hojaAExportar, configuracion);
                        lastRowNum = hojaAExportar.LastRowNum;
                    }
                }
                iRow++;
            }
        }

        /// <summary>
        /// Exporta todos los hechos asociados al miembro de la figura enviada como parámetro
        /// </summary>
        /// <returns></returns>
        private int ExportarFigura(int numRow, ConceptoDto miembroActual, ISheet hojaAExportar, ConfiguracionReporteExcel427000 configuracion)
        {

            var hipercuboHechos = configuracion.HipercuboReporte.Utileria.ReordenaConjutosPorExplicitaImplicitaConcepto(
                                configuracion.HipercuboReporte.Hechos);
            IList<IDictionary<string, Dto.HechoDto>> listaHechosPorconcepto;
            if (hipercuboHechos.TryGetValue(miembroActual.Nombre, out listaHechosPorconcepto) ||
                hipercuboHechos.TryGetValue(miembroActual.Id, out listaHechosPorconcepto))
            {
                foreach (var hechosPorConcepto in listaHechosPorconcepto)
                {
                    numRow++;
                    hojaAExportar.ShiftRows(numRow, hojaAExportar.LastRowNum, 1);
                    var renglon = hojaAExportar.CreateRow(numRow);
                    foreach (var indexColumn in configuracion.DiccionarioConceptosPorColumna.Keys)
                    {
                        var concepto = configuracion.DiccionarioConceptosPorColumna[indexColumn];
                        Dto.HechoDto hecho;
                        if (hechosPorConcepto.TryGetValue(concepto.Id, out hecho))
                        {
                            var celda = renglon.GetCell(indexColumn, MissingCellPolicy.CREATE_NULL_AS_BLANK);
                            celda.SetCellValue(hecho.Valor);
                        }
                    }
                }
            }
            return numRow;
        }

        /// <summary>
        /// Obtiene la configuración para procesar los elementos de la hoja actual.
        /// </summary>
        /// <param name="hojaPlantilla">Hoja de plantilla que se pertende procesar.</param>
        /// <param name="instancia">Documento de instancia que se procesa.</param>
        /// <param name="plantillaDocumento">Plantilla de la taxonomía que se procesa.</param>
        /// <param name="resumenImportacion">Detalle de la importación.</param>
        /// <returns>Configuración del documento a procesar.</returns>
        private ConfiguracionReporteExcel427000 GeneraConfiguracionReporte(ISheet hojaPlantilla, DocumentoInstanciaXbrlDto instancia, IDefinicionPlantillaXbrl plantillaDocumento, ResumenProcesoImportacionExcelDto resumenImportacion = null)
        {
            var configuracion = new ConfiguracionReporteExcel427000(instancia, plantillaDocumento, resumenImportacion);
            configuracion.NombreHoja = hojaPlantilla.SheetName;
            for (var indexRow = 0; indexRow < hojaPlantilla.LastRowNum; indexRow++)
            {
                var row = hojaPlantilla.GetRow(indexRow);
                var currentColumn = row.FirstCellNum;
                var cell = row.GetCell(currentColumn);
                if (cell != null && cell.CellType.Equals(CellType.String))
                {
                    var valorCelda = cell.StringCellValue;
                    if (valorCelda.Contains("idConcepto"))
                    {
                        var splitCell = valorCelda.Split(';');
                        var idConcepto = splitCell[1];
                        Dto.ConceptoDto concepto;
                        if (instancia.Taxonomia.ConceptosPorId.TryGetValue(idConcepto, out concepto))
                        {
                            if (concepto.EsHipercubo)
                            {
                                configuracion.HipercuboReporte = ObtenConfiguracionHipercubo(concepto.Id, instancia, plantillaDocumento);
                            }
                            else if (concepto.EsMiembroDimension??false)
                            {
                                configuracion.ListaConceptosMiembro.Add(concepto);
                            }
                            else if (!(concepto.EsDimension??false) && !(concepto.EsAbstracto??false))
                            {
                                for (var indexColumn = currentColumn; indexColumn < row.LastCellNum; indexColumn++)
                                {
                                    var celdaConceptoItem= row.GetCell(indexColumn);
                                    if (celdaConceptoItem != null && celdaConceptoItem.CellType.Equals(CellType.String))
                                    {
                                        var valorCeldaItem = celdaConceptoItem.StringCellValue;
                                        if (valorCeldaItem.Contains("idConcepto"))
                                        {
                                            var splitItems = valorCeldaItem.Split(';');
                                            var idConceptoItem = splitItems[1];
                                            ConceptoDto conceptoItem;
                                            if (instancia.Taxonomia.ConceptosPorId.TryGetValue(idConceptoItem, out conceptoItem))
                                            {
                                                configuracion.DiccionarioConceptosPorColumna[indexColumn] =  conceptoItem;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            return configuracion;
        }

        /// <summary>
        /// Expresion regular que encuentra el alias de la taxonomía.
        /// </summary>
        private Regex ALIAS_TAXONOMIA = new Regex("((ar)|(pros))_[NOHLI](BIS\\d?)?_", RegexOptions.Compiled | RegexOptions.Multiline | RegexOptions.IgnoreCase);

        /// <summary>
        /// Determina el alias de la taxonomía.
        /// </summary>
        /// <param name="espacioNombres">Espacio de nombres a evaluar.</param>
        /// <returns>Alias de la taxonomía requerida.</returns>
        private String ObtenClaveTaxonomia(String espacioNombres)
        {

            String alias = null;
            var match = ALIAS_TAXONOMIA.Match(espacioNombres);
            if (match.Success)
            {
                alias = match.Value.Replace("ar", String.Empty).Replace("pros", String.Empty).Replace("_", String.Empty);
                alias = alias.ToUpper();
            }
            return alias;
        }
        /// <summary>
        /// Obtiene la configuración del hipercubo que se pretende evaluar.
        /// </summary>
        /// <param name="idConceptoHipercubo">Identificador del concepto del hipercubo.</param>
        /// <param name="instancia">Documento de instancia.</param>
        /// <param name="plantilla">Plantilla del documento de instancia.</param>
        /// <returns>DTO con la configuración general del hipercubo.</returns>
        private HipercuboReporteDTO ObtenConfiguracionHipercubo(String idConceptoHipercubo, DocumentoInstanciaXbrlDto instancia, IDefinicionPlantillaXbrl plantilla)
        {
            var claveTaxonomia = ObtenClaveTaxonomia(instancia.EspacioNombresPrincipal);
            var path = ReporteXBRLUtil.AR_PROS_PATH_HIPERCUBOS_JSON.
                      Replace(ReporteXBRLUtil.CLAVE_TAXONOMIA, claveTaxonomia).
                      Replace(ReporteXBRLUtil.CONCEPTO_HIPERCUBO, idConceptoHipercubo);
            var hipercuboUtil = new EvaluadorHipercuboUtil(path, instancia, plantilla);
            var aliasDimensionEje = hipercuboUtil.configuracion.DimensionesDinamicas[0];
            var miembrosEje = hipercuboUtil.ObtenMiembrosDimension(aliasDimensionEje);
            miembrosEje = miembrosEje.OrderBy(o => o.ElementoMiembroTipificado).ToList();
            var titulos = hipercuboUtil.ObtenTitulosMiembrosDimension(aliasDimensionEje, miembrosEje);
            var hechos = hipercuboUtil.ObtenMatrizHechos(miembrosEje);

            var hipercuboDto = new HipercuboReporteDTO();
            hipercuboDto.Titulos = titulos;
            hipercuboDto.Hechos = hechos;
            hipercuboDto.Utileria = hipercuboUtil;
            return hipercuboDto;
        }
        
        public void ExportarRolADocumentoWord(Document word, Section section, DocumentoInstanciaXbrlDto instancia, string rol, IDefinicionPlantillaXbrl plantillaDocumento, string claveIdioma)
        {
            throw new NotImplementedException();
        }
        
        public void ImportarDatosDeHojaExcel(ISheet hojaAImportar, ISheet hojaPlantilla, DocumentoInstanciaXbrlDto instancia, string rol, ResumenProcesoImportacionExcelDto resumenImportacion, IDefinicionPlantillaXbrl plantillaDocumento)
        {
            var configuracion = GeneraConfiguracionReporte(hojaPlantilla, instancia, plantillaDocumento, resumenImportacion);
            var diccionarioEtiquetasMiembro = configuracion.ObtenDiccionarioEtiquetasMiembros(rol);
            ConceptoDto conceptoMiembroActual = null;
            for (var indexRow = hojaAImportar.FirstRowNum; indexRow < hojaAImportar.LastRowNum; indexRow++)
            {
                var fila = hojaAImportar.GetRow(indexRow);
                if (fila != null)
                {
                    var celda = fila.GetCell(fila.FirstCellNum);
                    if (celda != null)
                    {
                        var valor =  ExcelUtil.ObtenerValorCelda(celda.CellType, celda).Trim();
                        ConceptoDto conceptoMiembro;
                        if (diccionarioEtiquetasMiembro.TryGetValue(valor, out conceptoMiembro))
                        {
                            conceptoMiembroActual = conceptoMiembro;
                        }
                        else if(conceptoMiembroActual != null)
                        {
                            GeneraHechos(fila, conceptoMiembroActual, configuracion);
                        }
                    }
                }
            }
        }
        /// <summary>
        /// Crea los hechos en base a la configuración.
        /// </summary>
        /// <param name="fila">Fila donde se obtendrán los datos para genarar los hechos.</param>
        /// <param name="contexto">Contexto al que pertenecen los nuevos hechos.</param>
        /// <param name="configuracion">Configuración con la información general para la generación de los hechos.</param>
        private void GeneraHechos(IRow fila, ConceptoDto conceptoMiembroActual, ConfiguracionReporteExcel427000 configuracion)
        {

            var fechaDefault = configuracion.FechaDefault;
            Dto.ContextoDto contextoActual = null;
            var registroGenerado = false;
            foreach (var indexColumna in configuracion.DiccionarioConceptosPorColumna.Keys)
            {
                var celda = fila.GetCell(indexColumna);
                String valorHecho = null;
                if (celda != null && !celda.CellType.Equals(CellType.Blank))
                {
                    valorHecho = ExcelUtil.ObtenerValorCelda(celda.CellType, celda);
                }
                if (String.IsNullOrEmpty(valorHecho))
                {
                    if (!registroGenerado)
                    {
                        return;
                    }
                    else
                    {
                        //valorHecho = String.Empty;
                        continue;
                    }
                }
                ConceptoDto concepto;
                if(configuracion.DiccionarioConceptosPorColumna.TryGetValue(indexColumna, out concepto))
                {

                    if (contextoActual == null)
                    {
                        contextoActual = GeneraContextoMiembro(conceptoMiembroActual, configuracion);
                    }
                    configuracion.InicializaImportacion();
                    String idUnidad = null;
                    String decimales = null;
                    var idConcepto = concepto.Id;
                    UnidadDto unidad;
                    if (configuracion.DiccionarioUnidadesPorIdConcepto.TryGetValue(idConcepto, out unidad))
                    {
                        idUnidad = unidad.Id;
                        configuracion.DiccionarioDecimalesPorIdConcepto.TryGetValue(idConcepto, out decimales);
                    }
                    var idHecho = "A" + Guid.NewGuid().ToString();
                    var hechoNuevo = configuracion.Instancia.CrearHecho(concepto.Id, idUnidad, contextoActual.Id, idHecho);
                    hechoNuevo.Decimales = decimales;
                    if (!UtilAbax.ActualizarValorHecho(concepto, hechoNuevo, valorHecho, fechaDefault))
                    {
                        configuracion.ResumenImportacion.AgregarErrorFormato(
                                                UtilAbax.ObtenerEtiqueta(configuracion.Instancia.Taxonomia, concepto.Id),
                                                configuracion.NombreHoja,
                                                fila.RowNum.ToString(),
                                                indexColumna.ToString(),
                                                valorHecho);
                    }
                    else
                    {
                        configuracion.ResumenImportacion.TotalHechosImportados++;
                        var hechoImportado = new AbaxXBRLCore.Common.Dtos.InformacionHechoImportadoExcelDto()
                        {
                            IdConcepto = hechoNuevo.IdConcepto,
                            IdHecho = hechoNuevo.Id,
                            ValorImportado = valorHecho,
                            HojaExcel = configuracion.NombreHoja,
                            Renglon = fila.RowNum,
                            Columna = indexColumna
                        };
                        configuracion.ResumenImportacion.AgregarHechoImportado(hechoImportado, UtilAbax.ObtenerEtiqueta(configuracion.Instancia.Taxonomia, hechoNuevo.Id));
                    }

                    configuracion.PlantillaDocumento.InyectaHechoADocumentoInstancia(hechoNuevo);
                    registroGenerado = true;
                }

            }
        }

        /// <summary>
        /// Genera el contexto para el miembro indicado.
        /// </summary>
        /// <param name="conceptoMiembro">Miembro del que se requiere el contexto.</param>
        /// <param name="configuracion">Configuración para obtener el contexto.</param>
        /// <returns>Contexto generado o null si no se cuenta con lo necesario para generarlo.</returns>
        private Dto.ContextoDto GeneraContextoMiembro(ConceptoDto conceptoMiembro, ConfiguracionReporteExcel427000 configuracion)
        {
            PlantillaContextoDto plantillaContextoMiembro;
            Dto.ContextoDto contexto = null;
            var configuracionPlantilla = configuracion.HipercuboReporte.Utileria.configuracion;
            if (configuracionPlantilla.PlantillasContextos.TryGetValue(conceptoMiembro.Nombre, out plantillaContextoMiembro) ||
                configuracionPlantilla.PlantillasContextos.TryGetValue(conceptoMiembro.Id, out plantillaContextoMiembro))
            {
                var idDimensionType = configuracionPlantilla.DimensionesDinamicas.First();
                PlantillaDimensionInfoDto plantillaDimensionType;
                if (configuracionPlantilla.PlantillaDimensiones.TryGetValue(idDimensionType, out plantillaDimensionType))
                {
                    var miembroType = plantillaDimensionType.CreaMiembroDimension(configuracion.IndiceSerieType.ToString());
                    configuracion.IndiceSerieType++;
                    var listaMiembrosDimension = new List<DimensionInfoDto>() { miembroType };
                    contexto = plantillaContextoMiembro.GeneraContexto(configuracion.Instancia, configuracion.PlantillaDocumento, listaMiembrosDimension);
                    configuracion.PlantillaDocumento.InyectarContextoADocumentoInstancia(contexto);
                }
                else
                {
                    LogUtil.Error("No existe la definición de dimensión con el identificador [" + idDimensionType + "]");
                }
            }
            else
            {
                LogUtil.Error("No existe la definición de plantilla con el identificador [" + conceptoMiembro.Nombre + "]");
            }
            return contexto;
        }


        /// <summary>
        /// Clase auxiliar para el procesamiento de la información 
        /// </summary>
        private class ConfiguracionReporteExcel427000
        {
            /// <summary>
            /// Lista con los identificadores de los miembros de la dimension explicita.
            /// </summary>
            public IList<ConceptoDto> ListaConceptosMiembro { get; set; }
            /// <summary>
            /// Diccionario con los conceptos que aplican por columna.
            /// </summary>
            public IDictionary<int, ConceptoDto> DiccionarioConceptosPorColumna { get; set; }
            /// <summary>
            /// Nombre de la hoja actual.
            /// </summary>
            public String NombreHoja { get; set; }
            /// <summary>
            /// Configuración auxiliar del hipercubo.
            /// </summary>
            public HipercuboReporteDTO HipercuboReporte { get; set; }
            /// <summary>
            /// Documento de instancia XBRL que se pretende procesar.
            /// </summary>
            public DocumentoInstanciaXbrlDto Instancia { get; set; }
            /// <summary>
            /// Definicion de la plantilla de taxononmía del doucmento que se pretende procesar.
            /// </summary>
            public IDefinicionPlantillaXbrl PlantillaDocumento { get; set; }
            /// <summary>
            /// Indice de las series type.
            /// </summary>
            public int IndiceSerieType = 1;
            /// <summary>
            /// Resumen importación.
            /// </summary>
            public ResumenProcesoImportacionExcelDto ResumenImportacion { get; set; }
            /// <summary>
            /// Diccionario con las unidades por identificadores de concepto.
            /// </summary>
            public IDictionary<String, UnidadDto> DiccionarioUnidadesPorIdConcepto { get; set; }
            /// <summary>
            /// Diccionario el valor de decimales por identificador de concepto.
            /// </summary>
            public IDictionary<String, String> DiccionarioDecimalesPorIdConcepto { get; set; }
            /// <summary>
            /// Valor por defecto que se asigna a la fecha.
            /// </summary>
            public String FechaDefault { get; set; }
            /// <summary>
            /// Bandera que indica si los elementos de improtación ya fueron inicializados.
            /// </summary>
            private bool ElementosImportacionInicializados = false;

            /// <summary>
            /// Constructor de la clase.
            /// </summary>
            /// <param name="instancia">Documento de instancia.</param>
            /// <param name="plantillaDocumento">Plantilla de definición.</param>
            public ConfiguracionReporteExcel427000(DocumentoInstanciaXbrlDto instancia, IDefinicionPlantillaXbrl plantillaDocumento, ResumenProcesoImportacionExcelDto resumenImportacion)
            {
                Instancia = instancia;
                PlantillaDocumento = plantillaDocumento;
                ListaConceptosMiembro = new List<ConceptoDto>();
                DiccionarioConceptosPorColumna = new Dictionary<int, ConceptoDto>();
                NombreHoja = String.Empty;
                ResumenImportacion = resumenImportacion;
                DiccionarioUnidadesPorIdConcepto = new Dictionary<String, UnidadDto>();
                DiccionarioDecimalesPorIdConcepto = new Dictionary<String, String>();
            }
            /// <summary>
            /// Retorna un listado con los identificadores de concepto existentes.
            /// </summary>
            /// <returns></returns>
            public IList<String> ObtenIdsConceptosReporte()
            {
                var listaIdsConceptos = new List<String>();
                foreach (var concepto in DiccionarioConceptosPorColumna.Values)
                {
                    listaIdsConceptos.Add(concepto.Id);
                }
                return listaIdsConceptos;
            }

            /// <summary>
            /// Inicializa el mapeo a utiliza en la importación
            /// </summary>
            /// <param name="instancia"></param>
            /// <param name="plantillaDocumento"></param>
            /// <param name="rol"></param>
            public IDictionary<String,ConceptoDto> ObtenDiccionarioEtiquetasMiembros(string uriRol)
            {
                var diccionarioMiembrosDimension = new Dictionary<String, ConceptoDto>();

                foreach (var concepto in ListaConceptosMiembro)
                {
                    
                    foreach (var idioma in concepto.Etiquetas.Values)
                    {
                        foreach (var idiomaRol in idioma.Values)
                        {
                            diccionarioMiembrosDimension.Add(idiomaRol.Valor.Trim(), concepto);
                        }
                    }
                }
                return diccionarioMiembrosDimension;
            }
            /// <summary>
            /// Inicializa el diccionario de unidades, elimina los hechos que aplican para el hipercubo.
            /// </summary>
            public void InicializaImportacion()
            {
                if (!ElementosImportacionInicializados)
                {
                    InicializaUnidadesConceptos();
                    var listaIdsConceptosEliminar = ObtenIdsConceptosReporte();
                    ReporteXBRLUtil.EliminarHechosConceptos(listaIdsConceptosEliminar, Instancia);
                    ElementosImportacionInicializados = true;
                }
            }

            /// <summary>
            /// Inicializa el diccionario de unidades por concepto.
            /// </summary>
            public void InicializaUnidadesConceptos()
            {
                foreach (var concepto in DiccionarioConceptosPorColumna.Values)
                {
                    UnidadDto unidad = ObtenUniadConcepto(concepto);
                    if (unidad != null)
                    {
                        DiccionarioUnidadesPorIdConcepto[concepto.Id] = unidad;
                    }
                }
                var fehchaMaxima = PlantillaDocumento.ObtenMaximaFechaReporte(Instancia);
                FechaDefault = Common.Util.DateUtil.ToFormatString(fehchaMaxima, Common.Util.DateUtil.YMDateFormat);
            }

            /// <summary>
            /// Retorna la unidad que aplica para el concepto indicado.
            /// </summary>
            /// <param name="concepto">Concepto a evaluar.</param>
            /// <param name="instancia">Documento de instancia a evaluar.</param>
            /// <param name="plantillaDocumento">Plantilla del documento.</param>
            /// <returns>Unidad que aplica al concepto.</returns>
            public UnidadDto ObtenUniadConcepto(ConceptoDto concepto)
            {
                UnidadDto unidadDestino = null;
                if (concepto.EsTipoDatoNumerico)
                {
                    //Si es moentario
                    var listaMedidas = new List<MedidaDto>();

                    if (concepto.TipoDatoXbrl.Contains(TiposDatoXBRL.MonetaryItemType))
                    {
                        listaMedidas.Add(new MedidaDto()
                        {
                            EspacioNombres = PlantillaDocumento.ObtenerVariablePorId("medida_http___www_xbrl_org_2003_iso4217"),
                            Nombre = PlantillaDocumento.ObtenerVariablePorId("medida_MXN")
                        });
                        DiccionarioDecimalesPorIdConcepto[concepto.Id] = "-3";
                    }
                    else
                    {
                        //Unidad pure
                        listaMedidas.Add(new MedidaDto()
                        {
                            EspacioNombres = PlantillaDocumento.ObtenerVariablePorId("medida_http___www_xbrl_org_2003_instance"),
                            Nombre = PlantillaDocumento.ObtenerVariablePorId("medida_pure")
                        });
                        DiccionarioDecimalesPorIdConcepto[concepto.Id] = "0";
                    }

                    var unidades = Instancia.BuscarUnidades(Unit.Medida, listaMedidas, null);
                    if (unidades == null || unidades.Count == 0)
                    {
                        unidadDestino = new UnidadDto()
                        {
                            Id = "U" + Guid.NewGuid().ToString(),
                            Tipo = Unit.Medida,
                            Medidas = listaMedidas
                        };
                        Instancia.UnidadesPorId.Add(unidadDestino.Id, unidadDestino);
                    }
                    else
                    {
                        unidadDestino = unidades[0];
                    }

                }
                return unidadDestino;
            }
        }
    }
}
