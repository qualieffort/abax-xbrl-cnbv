using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Viewer.Application.Dto;
using AbaxXBRLCore.Viewer.Application.Model;
using Aspose.Words;
using NPOI.SS.UserModel;
using System.Text.RegularExpressions;
using AbaxXBRLCore.Reports.Util;
using AbaxXBRLCore.Reports.Dto;
using AbaxXBRLCore.Viewer.Application.Dto.Hipercubos;
using AbaxXBRLCore.Common.Util;
using AbaxXBRL.Taxonomia;
using AbaxXBRL.Constantes;

namespace AbaxXBRLCore.Viewer.Application.Import.Impl
{
    class ImportadorExportadorRol301100_D1_T2016 : IImportadorExportadorRolDocumento
    {

        private IDictionary<String, String> ConceptosHipercuboPorHoja = new Dictionary<String, String>()
        {
            {"301100-D1","annext_OutstandingBalanceOfTheIssueAtEndOfPeriodTable"},
            {"301100-D2","annext_AmountOfInterestPaidToHoldersOfTrustNotesTable"},
            {"301100-D3","annext_AmountPaidForAmortizationToHoldersOfTrustNotesTable"},
        };

        private ImportadorExportadorRolDocumentoPlantilla ImportadorGenerico = new ImportadorExportadorRolDocumentoPlantilla();

        /// <summary>
        /// Expresion regular que encuentra el alias de la taxonomía.
        /// </summary>
        private Regex ALIAS_TAXONOMIA = new Regex("(annext)_[NOHLI](BIS\\d?)?_", RegexOptions.Compiled | RegexOptions.Multiline| RegexOptions.IgnoreCase);

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
        private HipercuboReporteDTO ObtenConfiguracionHipercubo(String idConceptoHipercubo,DocumentoInstanciaXbrlDto instancia, IDefinicionPlantillaXbrl plantilla)
        {
            var claveTaxonomia = "annext";
            var path = ReporteXBRLUtil.ANNEXT_PATH_HIPERCUBOS_JSON.
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
        /// <summary>
        /// 
        /// </summary>
        /// <param name="hojaAExportar"></param>
        /// <param name="hojaPlantilla"></param>
        /// <param name="instancia"></param>
        /// <param name="rol"></param>
        /// <param name="plantillaDocumento"></param>
        /// <param name="idioma"></param>
        public void ExportarDatosDeHojaExcel(ISheet hojaAExportar, ISheet hojaPlantilla, DocumentoInstanciaXbrlDto instancia, string rol, IDefinicionPlantillaXbrl plantillaDocumento, string idioma)
        {
            var nombreHoja = hojaPlantilla.SheetName;
            String idConceptoHipercubo;
            if (ConceptosHipercuboPorHoja.TryGetValue(nombreHoja, out idConceptoHipercubo))
            {
                var hiperCubo = ObtenConfiguracionHipercubo(idConceptoHipercubo, instancia,plantillaDocumento);
                //HipercuboReporteDTO hiperCuboCalificaciones = null;
                //var miembroCalificadora = String.Empty;
                //ImportadorGenerico.ExportarDatosDeHojaExcel(hojaAExportar, hojaPlantilla, instancia,rol, plantillaDocumento,idioma);
                for (var indexRow = hojaPlantilla.FirstRowNum; indexRow <= hojaPlantilla.LastRowNum; indexRow++)
                {
                    var rowPlantilla = hojaPlantilla.GetRow(indexRow);
                    var rowExportar = hojaAExportar.GetRow(indexRow);
                    var celdaConcepto = rowPlantilla.GetCell(rowPlantilla.FirstCellNum);
                    if (celdaConcepto == null || 
                        !celdaConcepto.CellType.Equals(CellType.String) || 
                        String.IsNullOrWhiteSpace(celdaConcepto.StringCellValue) ||
                        !celdaConcepto.StringCellValue.Contains("idConcepto"))
                    {
                        continue;
                    }
                    var elementosCelda = celdaConcepto.StringCellValue.Split(';');
                    var idConcepto = elementosCelda[1];
                    ConceptoDto concepto;
                    var indiceColumnaImprimir = celdaConcepto.ColumnIndex + 1;
                    if (instancia.Taxonomia.ConceptosPorId.TryGetValue(idConcepto, out concepto))
                    {
                        if (concepto.EsDimension ?? false)
                        {
                            PintaSeries(concepto.Id, rowExportar, indiceColumnaImprimir, hiperCubo);
                        }

                        else if (!concepto.EsAbstracto ?? false && !concepto.EsHipercubo)
                        {


                            IDictionary<String, Dto.HechoDto[]> diccionarioHechosPorcontextoPlantilla;
                            if (hiperCubo.Hechos.TryGetValue(concepto.Id, out diccionarioHechosPorcontextoPlantilla))
                            {
                                if (diccionarioHechosPorcontextoPlantilla.Count > 0)
                                {
                                    var hechos = diccionarioHechosPorcontextoPlantilla.First().Value;
                                    PintaValoresHechos(hechos, rowExportar, indiceColumnaImprimir);
                                }
                            }
                        }
                    }
                }
            }
            else if (nombreHoja.Equals("414000-Multiplos"))
            {
                ImportadorGenerico.ExportarDatosDeHojaExcel(hojaAExportar, hojaPlantilla, instancia, rol, plantillaDocumento, idioma);
            }
            else
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
        }
        /// <summary>
        /// Exporta todos los hechos asociados al miembro de la figura enviada como parámetro
        /// </summary>
        /// <returns></returns>
        private int ExportarFigura(int numRow, ConceptoDto miembroActual, ISheet hojaAExportar, ConfiguracionReporteExcel414000 configuracion)
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
        /// Pinta las series y retorna un diccionario con la información de los hechos del hipercubo.
        /// </summary>
        /// <param name="idDimension">Identificador de la dimension.</param>
        /// <param name="filaSerie">Fila donde se presentaran los valores de la serie.</param>
        /// <param name="indiceColumnaInicial">Indice de la columna donde se iniciara la presentación de las series.</param>
        /// <param name="hipercuboUtil">Utilería con la información del hipercubo.</param>
        private void PintaSeries(String idDimension,IRow filaSerie,int indiceColumnaInicial, HipercuboReporteDTO hipercubo)
        {
            var series = hipercubo.Titulos;
            for (var indexSerie = 0; indexSerie < series.Count; indexSerie++)
            {
                var nombreSerie = series[indexSerie];
                var indexColumn = indexSerie + indiceColumnaInicial;
                var celda = filaSerie.GetCell(indexColumn);
                if (celda == null)
                {
                    celda = filaSerie.CreateCell(indexColumn, CellType.String);
                    celda.CellStyle.BorderBottom = BorderStyle.Medium;
                    celda.CellStyle.BorderTop = BorderStyle.Medium;
                    celda.CellStyle.BorderLeft = BorderStyle.Medium;
                    celda.CellStyle.BorderRight = BorderStyle.Medium;
                }
                celda.SetCellValue(nombreSerie);
            }
        }
        /// <summary>
        /// Pinta los hechos indicados.
        /// </summary>
        /// <param name="arregloHechos">Arreglo de hechos a pintar.</param>
        /// <param name="fila">Fila sobre la que se pintarán los hechos.</param>
        /// <param name="indiceColumnaInicial">Indice de la columna donde inician los elementos a presentar.</param>
        private void PintaValoresHechos(Dto.HechoDto[] arregloHechos, IRow fila, int indiceColumnaInicial)
        {
            for (var indexHecho = 0; indexHecho < arregloHechos.Length; indexHecho++)
            {
                var hecho = arregloHechos[indexHecho];
                var indexColumn = indexHecho + indiceColumnaInicial;
                var celda = fila.GetCell(indexColumn);
                if (celda == null)
                {
                    celda = fila.CreateCell(indexColumn, hecho.EsNumerico ? CellType.Numeric : CellType.String);
                    celda.CellStyle.BorderBottom = BorderStyle.Medium;
                    celda.CellStyle.BorderTop = BorderStyle.Medium;
                    celda.CellStyle.BorderLeft = BorderStyle.Medium;
                    celda.CellStyle.BorderRight = BorderStyle.Medium;
                }   
                if (hecho.EsNumerico)
                {
                    celda.SetCellValue(Double.Parse(hecho.Valor));
                }
                else
                {
                    celda.SetCellValue(hecho.Valor);
                }
            }
        }

        public void ExportarRolADocumentoWord(Document word, Section section, DocumentoInstanciaXbrlDto instancia, string rol, IDefinicionPlantillaXbrl plantillaDocumento, string claveIdioma)
        {
            throw new NotImplementedException();
        }
        /// <summary>
        /// Obtiene el nombre de un concepto.
        /// </summary>
        /// <param name="idConcepto">Identificador del concepto.</param>
        /// <param name="taxonomia">Taxonomía.</param>
        /// <param name="claveIdioma">Idioma</param>
        /// <returns></returns>
        private String ObtenEtiquetaConcepto(String idConcepto, TaxonomiaDto taxonomia, String claveIdioma = "es")
        {
            String textoEtiqueta = String.Empty;
            ConceptoDto concepto;
            if (taxonomia.ConceptosPorId.TryGetValue(idConcepto, out concepto))
            {
                IDictionary<string, EtiquetaDto> etiquetaPorRol;
                if (!concepto.Etiquetas.TryGetValue(claveIdioma, out etiquetaPorRol))
                {
                    etiquetaPorRol = concepto.Etiquetas.First().Value;
                }
                EtiquetaDto etiquetaDto;
                if (etiquetaPorRol.TryGetValue(ReporteXBRLUtil.ETIQUETA_DEFAULT, out etiquetaDto))
                {
                    etiquetaDto = etiquetaPorRol.First().Value;
                }
                if (etiquetaDto != null)
                {
                    textoEtiqueta = etiquetaDto.Valor;
                }
            }
            return textoEtiqueta;
        }
        /// <summary>
        /// Genera los contextos de la serie.
        /// </summary>
        /// <param name="idDimension">Identificador de la idmensión evaluada.</param>
        /// <param name="rowImportar">Fila a iterar.</param>
        /// <param name="indiceColumnaInicio">Columna donde inicia la iteración.</param>
        /// <param name="hipercuboUtil">Utilería con la información del hipercubo.</param>
        /// <param name="resumenImportacion">Resumen de la importación para agregar errores en caso de presentarse.</param>
        /// <param name="nombreHoja">Nombre de la hoja.</param>
        /// <param name="instancia">Documento de instancia.</param>
        /// <param name="plantillaDocumento">Plantilla del documento.</param>
        /// <param name="claveIdioma"></param>
        /// <returns>Diccionario con los identificadores de contexto por columna.</returns>
        private IDictionary<int, Dto.ContextoDto> GeneraContextosSeries(
            String idDimension, 
            IRow rowImportar,
            int indiceColumnaInicio, 
            EvaluadorHipercuboUtil hipercuboUtil, 
            ResumenProcesoImportacionExcelDto resumenImportacion, 
            String nombreHoja, 
            DocumentoInstanciaXbrlDto instancia,
            IDefinicionPlantillaXbrl plantillaDocumento,
            string claveIdioma)
        {
            var nombreConcepto = ObtenEtiquetaConcepto(idDimension,instancia.Taxonomia,claveIdioma);
            var contextosColumna = new Dictionary<int, Dto.ContextoDto>();
            PlantillaDimensionInfoDto plantillaDimension = null;
            if (!hipercuboUtil.configuracion.PlantillaDimensiones.TryGetValue(idDimension, out plantillaDimension))
            {
                LogUtil.Error("No existe una definición de plantilla con el identificador \"" + idDimension + "\".");
                return contextosColumna;
            }
            PlantillaContextoDto plantillaContexto = hipercuboUtil.configuracion.PlantillasContextos.Values.First();
            var seriesEvaluadas = new Dictionary<String, int>();
            for (var indexSerie = indiceColumnaInicio; indexSerie <= rowImportar.LastCellNum; indexSerie++)
            {
                var celdaSerie = rowImportar.GetCell(indexSerie);
                if (celdaSerie != null && !celdaSerie.CellType.Equals(CellType.Blank))
                {
                    var nombreSerieOriginal = ExcelUtil.ObtenerValorCelda(celdaSerie.CellType, celdaSerie);
                    var nombreSerie = nombreSerieOriginal.Trim();
                    if (String.IsNullOrWhiteSpace(nombreSerie))
                    {
                        continue;
                    }
                    if (seriesEvaluadas.ContainsKey(nombreSerie))
                    {

                        resumenImportacion.InformeErrores.Add(new InformeErrorImportacion()
                        {
                            Mensaje = "No fue posible agregar la serie \"" + nombreSerie +
                            "\", de la hoja \"" + nombreHoja +
                            "\" renglon \"" + rowImportar.RowNum.ToString() + "\" columna \"" + celdaSerie.ColumnIndex.ToString() +
                            "\", debido a que este nombre de serie ya fué indicado previamente en la columna \"" + seriesEvaluadas[nombreSerie] + "\".",
                        });
                        continue;
                    }
                    var miembroDimensionSerie = plantillaDimension.CreaMiembroDimension(nombreSerie);
                    var listaDimensiones = new List<DimensionInfoDto>() { miembroDimensionSerie };
                    var contexto = plantillaContexto.GeneraContexto(instancia, plantillaDocumento, listaDimensiones);
                    plantillaDocumento.InyectarContextoADocumentoInstancia(contexto);
                    contextosColumna[celdaSerie.ColumnIndex] = contexto;
                    seriesEvaluadas[ nombreSerie] =  celdaSerie.ColumnIndex;
                }
            }
            return contextosColumna;
        }

        /// <summary>
        /// Genera un diccionario con los contextos por columna para las calificaciones.
        /// </summary>
        /// <param name="conceptoMiembro">Concepto miembro de las calificadoras.</param>
        /// <param name="diccionarioContextosSerie">Diccionario con los contextos por serie.</param>
        /// <param name="hipercuboUtil"></param>
        /// <param name="instancia">Documento de instancia a evaluar.</param>
        /// <param name="plantillaDocumento">Plantilla del documento de instancia.</param>
        /// <returns></returns>
        private IDictionary<int, Dto.ContextoDto> GeneraContextosCalificaciones(
            ConceptoDto conceptoMiembro, 
            IDictionary<int, Dto.ContextoDto> diccionarioContextosSerie,
            EvaluadorHipercuboUtil hipercuboUtil,
            DocumentoInstanciaXbrlDto instancia,
            IDefinicionPlantillaXbrl plantillaDocumento)
        {
            var contextosColumna = new Dictionary<int, Dto.ContextoDto>();
            try
            {
                PlantillaContextoDto plantillaContextoDto = null;
                if (!hipercuboUtil.configuracion.PlantillasContextos.TryGetValue(conceptoMiembro.Nombre, out plantillaContextoDto))
                {
                    LogUtil.Error("No existe una definición de plantilla con el identificador \"" + conceptoMiembro.Nombre + "\".");
                    return contextosColumna;
                }
                foreach (var indexColumn in diccionarioContextosSerie.Keys)
                {
                    var contextoSerie = diccionarioContextosSerie[indexColumn];
                    var dimensiones = contextoSerie.ValoresDimension;
                    var contextoCalificacion = plantillaContextoDto.GeneraContexto(instancia, plantillaDocumento, dimensiones);
                    plantillaDocumento.InyectarContextoADocumentoInstancia(contextoCalificacion);
                    contextosColumna[indexColumn] =  contextoCalificacion;
                }
            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
            }
            return contextosColumna;
        }
        /// <summary>
        /// Retorna la unidad que aplica para el concepto indicado.
        /// </summary>
        /// <param name="concepto">Concepto a evaluar.</param>
        /// <param name="instancia">Documento de instancia a evaluar.</param>
        /// <param name="plantillaDocumento">Plantilla del documento.</param>
        /// <returns>Unidad que aplica al concepto.</returns>
        public UnidadDto ObtenUniadConcepto(ConceptoDto concepto, DocumentoInstanciaXbrlDto instancia, IDefinicionPlantillaXbrl plantillaDocumento)
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
                        EspacioNombres = plantillaDocumento.ObtenerVariablePorId("medida_http___www_xbrl_org_2003_iso4217"),
                        Nombre = plantillaDocumento.ObtenerVariablePorId("medida_MXN")
                    });

                }
                else
                {
                    //Unidad pure
                    listaMedidas.Add(new MedidaDto()
                    {
                        EspacioNombres = plantillaDocumento.ObtenerVariablePorId("medida_http___www_xbrl_org_2003_instance"),
                        Nombre = plantillaDocumento.ObtenerVariablePorId("medida_pure")
                    });

                }

                var unidades = instancia.BuscarUnidades(Unit.Medida, listaMedidas, null);
                if (unidades == null || unidades.Count == 0)
                {
                    unidadDestino = new UnidadDto()
                    {
                        Id = "U" + Guid.NewGuid().ToString(),
                        Tipo = Unit.Medida,
                        Medidas = listaMedidas
                    };
                    instancia.UnidadesPorId.Add(unidadDestino.Id, unidadDestino);
                }
                else
                {
                    unidadDestino = unidades[0];
                }

            }
            return unidadDestino;
        }

        /// <summary>
        /// Actualiza el valor de un hecho en base a su tipo y valor
        /// </summary>
        /// <param name="concepto"></param>
        /// <param name="valorCelda"></param>
        /// <param name="hechoNuevo"></param>
        private Boolean ActualizarValor(ConceptoDto concepto, string valorCelda, AbaxXBRLCore.Viewer.Application.Dto.HechoDto hechoNuevo, IDefinicionPlantillaXbrl plantilla)
        {
            var fechaDefault = plantilla.ObtenerVariablePorId("fecha_2014_12_31");
            return UtilAbax.ActualizarValorHecho(concepto, hechoNuevo, valorCelda, fechaDefault);
        }
        /// <summary>
        /// Crea un nuevo hecho.
        /// </summary>
        /// <param name="valor">Valor del hecho.</param>
        /// <param name="concepto">Concepto del hecho.</param>
        /// <param name="contexto">Contexto del hecho.</param>
        /// <param name="idUnidad">Identificador de la unidad.</param>
        /// <param name="instancia">Documento de instancia.</param>
        /// <param name="plantilla">Plantilla del documento.</param>
        /// <param name="resumenImportacion">Detalle de la importación.</param>
        /// <param name="nombreHoja">Nombre de la hoja.</param>
        /// <param name="numeroFila">Indice de la fila.</param>
        /// <param name="numeroColumna">Indice de la columna.</param>
        private void CreaHecho(
            String valor, 
            ConceptoDto concepto, 
            Dto.ContextoDto contexto, 
            String idUnidad, 
            DocumentoInstanciaXbrlDto instancia, 
            IDefinicionPlantillaXbrl plantilla,
            ResumenProcesoImportacionExcelDto resumenImportacion,
            String nombreHoja,
            int numeroFila,
            int numeroColumna)
        {
            var idHecho = "A" + Guid.NewGuid().ToString();
            var hechoNuevo = instancia.CrearHecho(concepto.Id, idUnidad, contexto.Id, idHecho);
            if (concepto.EsTipoDatoNumerico)
            {
                if (concepto.TipoDatoXbrl.Contains(TiposDatoXBRL.MonetaryItemType))
                {
                    hechoNuevo.Decimales = "-3";
                }
                else
                {
                    hechoNuevo.Decimales = "0";
                }
            }
            if (!ActualizarValor(concepto, valor, hechoNuevo, plantilla))
            {
                resumenImportacion.AgregarErrorFormato(
                                        UtilAbax.ObtenerEtiqueta(instancia.Taxonomia, concepto.Id),
                                        nombreHoja,
                                        numeroFila.ToString(),
                                        numeroColumna.ToString(),
                                        valor);
            }
            else
            {
                resumenImportacion.TotalHechosImportados++;
                var hechoImportado = new AbaxXBRLCore.Common.Dtos.InformacionHechoImportadoExcelDto()
                {
                    IdConcepto = hechoNuevo.IdConcepto,
                    IdHecho = hechoNuevo.Id,
                    ValorImportado = valor,
                    HojaExcel = nombreHoja,
                    Renglon = numeroFila,
                    Columna = numeroColumna
                };
                resumenImportacion.AgregarHechoImportado(hechoImportado, UtilAbax.ObtenerEtiqueta(instancia.Taxonomia, hechoNuevo.Id));
            }

            plantilla.InyectaHechoADocumentoInstancia(hechoNuevo);
        }
        /// <summary>
        /// Genera los hechos de la fila indicada.
        /// </summary>
        /// <param name="fila">Fila que se pretende evaluar.</param>
        /// <param name="concepto">Concepto que se pretende evaluar.</param>
        /// <param name="diccionarioContextos">Diccionario de contextos.</param>
        /// <param name="instancia">Documento de instancia.</param>
        /// <param name="plantilla">Plantilla de documento.</param>
        /// <param name="resumenImportacion">Resume de importación.</param>
        /// <param name="nombreHoja">Nombre de la hoja.</param>
        public void GeneraHechos(
            IRow fila,
            ConceptoDto concepto, 
            IDictionary<int, Dto.ContextoDto> diccionarioContextos,
            DocumentoInstanciaXbrlDto instancia, 
            IDefinicionPlantillaXbrl plantilla,
            ResumenProcesoImportacionExcelDto resumenImportacion,
            String nombreHoja)
        {
            UnidadDto unidad = ObtenUniadConcepto(concepto,instancia,plantilla);
            var idUnidad = unidad == null ? null : unidad.Id;
            foreach (var indexColumna in diccionarioContextos.Keys)
            {
                ICell celda = null;
                try
                {
                    celda = fila.GetCell(indexColumna);
                    String valorHecho = String.Empty;
                    if (celda != null && !celda.CellType.Equals(CellType.Blank))
                    {
                        valorHecho = ExcelUtil.ObtenerValorCelda(celda.CellType, celda);
                    }
                    var contexto = diccionarioContextos[indexColumna];
                    CreaHecho(
                        valorHecho,
                        concepto,
                        contexto,
                        idUnidad,
                        instancia,
                        plantilla,
                        resumenImportacion,
                        nombreHoja,
                        fila.RowNum,
                        celda.ColumnIndex);
                }
                catch (Exception ex)
                {
                    LogUtil.Error(ex);
                    var columnaCelda = (celda == null ? 0 : celda.ColumnIndex);
                    resumenImportacion.InformeErrores.Add(new InformeErrorImportacion()
                    {
                        Mensaje = "Error al obtener el valor de la celda en la fila \"" + fila.RowNum +
                        "\" columna \"" + columnaCelda +
                        "\"  de la hoja \"" + nombreHoja + 
                        "\".(" + ex.Message + ")"
                    });
                }
            }
        }

        public void ImportarDatosDeHojaExcel(ISheet hojaAImportar, ISheet hojaPlantilla, DocumentoInstanciaXbrlDto instancia, string rol, ResumenProcesoImportacionExcelDto resumenImportacion, IDefinicionPlantillaXbrl plantillaDocumento)
        {
            var nombreHoja = hojaPlantilla.SheetName;
            String idConceptoHipercubo;
            IDictionary<int, Dto.ContextoDto> diccionarioContextosSeries = null;
            //IDictionary<int, Dto.ContextoDto> diccionarioContextosCalificaciones = null;
            if (ConceptosHipercuboPorHoja.TryGetValue(nombreHoja, out idConceptoHipercubo))
            {
                HipercuboReporteDTO hiperCubo = ObtenConfiguracionHipercubo(idConceptoHipercubo, instancia, plantillaDocumento);
                //HipercuboReporteDTO hiperCuboCalificaciones = null;
                var miembroCalificadora = String.Empty;

                for (var indexRow = hojaPlantilla.FirstRowNum; indexRow <= hojaPlantilla.LastRowNum; indexRow++)
                {
                    var rowPlantilla = hojaPlantilla.GetRow(indexRow);
                    var rowImportar = hojaAImportar.GetRow(indexRow);
                    var celdaConcepto = rowPlantilla.GetCell(rowPlantilla.FirstCellNum);
                    if (celdaConcepto == null ||
                        !celdaConcepto.CellType.Equals(CellType.String) ||
                        String.IsNullOrWhiteSpace(celdaConcepto.StringCellValue) ||
                        !celdaConcepto.StringCellValue.Contains("idConcepto"))
                    {
                        continue;
                    }
                    var elementosCelda = celdaConcepto.StringCellValue.Split(';');
                    var idConcepto = elementosCelda[1];
                    ConceptoDto concepto;
                    var indiceColumnaImprimir = celdaConcepto.ColumnIndex + 1;
                    if (instancia.Taxonomia.ConceptosPorId.TryGetValue(idConcepto, out concepto))
                    {
                        if (concepto.EsDimension??false)
                        {
                            diccionarioContextosSeries = 
                                GeneraContextosSeries(
                                    concepto.Id, 
                                    rowImportar, 
                                    indiceColumnaImprimir, 
                                    hiperCubo.Utileria, 
                                    resumenImportacion, 
                                    hojaAImportar.SheetName, 
                                    instancia, 
                                    plantillaDocumento, "es");
                            if (diccionarioContextosSeries.Count > 0)
                            {
                                EliminarHechos(hojaPlantilla, instancia);
                            }
                        }
     
                        else if (!concepto.EsAbstracto??false && !concepto.EsHipercubo)
                        {
                            var diccionarioContextos = diccionarioContextosSeries;
                      
                            GeneraHechos(rowImportar, concepto, diccionarioContextos, instancia, plantillaDocumento, resumenImportacion, hojaAImportar.SheetName);
                        }
                    }
                }
            }
            else if (nombreHoja.Equals("414000-Multiplos"))
            {
                ImportadorGenerico.ImportarDatosDeHojaExcel(hojaAImportar, hojaPlantilla, instancia,rol,resumenImportacion,plantillaDocumento);
            }
            else
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
                            var valor = ExcelUtil.ObtenerValorCelda(celda.CellType, celda).Trim();
                            ConceptoDto conceptoMiembro;
                            if (diccionarioEtiquetasMiembro.TryGetValue(valor, out conceptoMiembro))
                            {
                                conceptoMiembroActual = conceptoMiembro;
                            }
                            else if (conceptoMiembroActual != null)
                            {
                                GeneraHechos(fila, conceptoMiembroActual, configuracion);
                            }
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
        private void GeneraHechos(IRow fila, ConceptoDto conceptoMiembroActual, ConfiguracionReporteExcel414000 configuracion)
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
                        valorHecho = String.Empty;
                    }
                }
                ConceptoDto concepto;
                if (configuracion.DiccionarioConceptosPorColumna.TryGetValue(indexColumna, out concepto))
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
        private Dto.ContextoDto GeneraContextoMiembro(ConceptoDto conceptoMiembro, ConfiguracionReporteExcel414000 configuracion)
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
        /// Elimina los hechos definidos en la hoja de importación.
        /// </summary>
        /// <param name="hojaPlantilla">Definición de la hoja.</param>
        /// <param name="instancia">Documento de instancia donde se eliminaran los hechos.</param>
        private void EliminarHechos(ISheet hojaPlantilla, DocumentoInstanciaXbrlDto instancia)
        {
            var listaIdsConceptosEliminar = new List<String>();
            for (var indexRow = hojaPlantilla.FirstRowNum; indexRow <= hojaPlantilla.LastRowNum; indexRow++)
            {
                
                var rowPlantilla = hojaPlantilla.GetRow(indexRow);
                var celdaConcepto = rowPlantilla.GetCell(rowPlantilla.FirstCellNum);
                if (celdaConcepto == null ||
                    !celdaConcepto.CellType.Equals(CellType.String) ||
                    String.IsNullOrWhiteSpace(celdaConcepto.StringCellValue) ||
                    !celdaConcepto.StringCellValue.Contains("idConcepto"))
                {
                    continue;
                }
                var elementosCelda = celdaConcepto.StringCellValue.Split(';');
                var idConcepto = elementosCelda[1];
                listaIdsConceptosEliminar.Add(idConcepto);
            }
            ReporteXBRLUtil.EliminarHechosConceptos(listaIdsConceptosEliminar, instancia);
        }
        /// <summary>
        /// Obtiene la configuración para procesar los elementos de la hoja actual.
        /// </summary>
        /// <param name="hojaPlantilla">Hoja de plantilla que se pertende procesar.</param>
        /// <param name="instancia">Documento de instancia que se procesa.</param>
        /// <param name="plantillaDocumento">Plantilla de la taxonomía que se procesa.</param>
        /// <param name="resumenImportacion">Detalle de la importación.</param>
        /// <returns>Configuración del documento a procesar.</returns>
        private ConfiguracionReporteExcel414000 GeneraConfiguracionReporte(ISheet hojaPlantilla, DocumentoInstanciaXbrlDto instancia, IDefinicionPlantillaXbrl plantillaDocumento, ResumenProcesoImportacionExcelDto resumenImportacion = null)
        {
            var configuracion = new ConfiguracionReporteExcel414000(instancia, plantillaDocumento, resumenImportacion);
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
                            else if (concepto.EsMiembroDimension ?? false)
                            {
                                configuracion.ListaConceptosMiembro.Add(concepto);
                            }
                            else if (!(concepto.EsDimension ?? false) && !(concepto.EsAbstracto ?? false))
                            {
                                for (var indexColumn = currentColumn; indexColumn < row.LastCellNum; indexColumn++)
                                {
                                    var celdaConceptoItem = row.GetCell(indexColumn);
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
                                                configuracion.DiccionarioConceptosPorColumna[indexColumn] = conceptoItem;
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
        /// Clase auxiliar para el procesamiento de la información 
        /// </summary>
        private class ConfiguracionReporteExcel414000
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
            public ConfiguracionReporteExcel414000(DocumentoInstanciaXbrlDto instancia, IDefinicionPlantillaXbrl plantillaDocumento, ResumenProcesoImportacionExcelDto resumenImportacion)
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
            public IDictionary<String, ConceptoDto> ObtenDiccionarioEtiquetasMiembros(string uriRol)
            {
                var diccionarioMiembrosDimension = new Dictionary<String, ConceptoDto>();

                foreach (var concepto in ListaConceptosMiembro)
                {

                    foreach (var idioma in concepto.Etiquetas.Values)
                    {
                        foreach (var idiomaRol in idioma.Values)
                        {
                            diccionarioMiembrosDimension[idiomaRol.Valor.Trim()] = concepto;
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
                        Instancia.UnidadesPorId[unidadDestino.Id] =  unidadDestino;
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
