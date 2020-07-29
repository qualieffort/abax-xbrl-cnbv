using System;
using System.Collections.Generic;
using System.Linq;
using AbaxXBRLCore.Reports.Dto;
using AbaxXBRLCore.Viewer.Application.Dto;
using Aspose.Words;
using Aspose.Words.Tables;
using System.Drawing;
using AbaxXBRLCore.Reports.Util;
using AbaxXBRLCore.Common.Util;
namespace AbaxXBRLCore.Reports.Exporter.Impl.Rol.Prospecto.Tablas
{
    /// <summary>
    /// Crea el contenido de las tablas de serie para el rol de la oferta.
    /// </summary>
    public class ExportadorTablaSeriesOferta414000 : IExportadorSubseccionConcepto
    {
        /// <summary>
        /// Cantidad maxima de series por página.
        /// </summary>
        public int MaxSeriesPorPagina { get; set; }
        /// <summary>
        /// Lista con los identificadores de los conceptos que aplican.
        /// </summary>
        public IList<String> ConceptosAplican = new List<String>()
        {
            "ar_pros_EquitySerie",
            "ar_pros_EquitySerieOfferType",
            "ar_pros_EquitySerieTotalAmountOfTheIssueInMexicoAndAbroadIfNecessary",
            "ar_pros_EquitySerieMexicoPrimaryAmount",
            "ar_pros_EquitySeriePrimaryOverallotmentMexicoAmount",
            "ar_pros_EquitySerieMexicoSecondaryAmount",
            "ar_pros_EquitySerieMexicoOverallotmentSecondaryAmount",
            "ar_pros_EquitySerieAbroadPrimaryAmount",
            "ar_pros_EquitySerieForeignPrimaryOverAllotmentAmount",
            "ar_pros_EquitySerieForeignSecondaryAmount",
            "ar_pros_EquitySerieForeignOverallotmentSecondaryAmount",
            "ar_pros_EquitySerieNumberOfStocksOfferedInMexicoAndForeign",
            "ar_pros_EquitySerieMexicoPrimaryNumberOfStocks",
            "ar_pros_EquitySeriePrimaryOverallotmentMexicoNumberOfStocks",
            "ar_pros_EquitySerieMexicoSecondaryNumberOfStocks",
            "ar_pros_EquitySerieMexicoOverallotmentSecondaryNumberOfStocks",
            "ar_pros_EquitySerieForeignPrimaryNumberOfStocks",
            "ar_pros_EquitySerieForeignPrimaryOverallotmentNumberOfStocks",
            "ar_pros_EquitySerieForeignSecondaryNumberOfStocks",
            "ar_pros_EquitySerieForeignOverallotmentSecondaryNumberOfStocks",
            "ar_pros_EquitySeriePlacementPrice",
            "ar_pros_EquitySerieCurrencyInWhichTheIssueIsMade",
            "ar_pros_EquitySerieExchangeRateUDIValue",
            "ar_pros_PercentageOfShareCapitalRepresentedByTheSharesOfTheOffer",
            "ar_pros_WhereAppropriatePercentageIncludingOverAllotmentOptionAfterTheOffer",
            "ar_pros_EquitySerieLegalBasisOfTheTaxRegimeApplicable",
            "ar_pros_DebtSeriesCharacteristicsLineItems",
            "ar_pros_DebtSeries",
            "ar_pros_DebtSerieOfferType",
            "ar_pros_DebtSerieTotalAmountOfTheIssueInMexicoAndAbroadIfNecessary",
            "ar_pros_DebtSerieMexicoPrimaryAmount",
            "ar_pros_DebtSeriePrimaryOverallotmentMexicoAmount",
            "ar_pros_DebtSerieMexicoSecondaryAmount",
            "ar_pros_DebtSerieMexicoOverallotmentSecondaryAmount",
            "ar_pros_DebtSerieAbroadPrimaryAmount",
            "ar_pros_DebtSerieForeignPrimaryOverAllotmentAmount",
            "ar_pros_DebtSerieForeignSecondaryAmount",
            "ar_pros_DebtSerieForeignOverallotmentSecondaryAmount",
            "ar_pros_DebtSerieNumberOfStocksOfferedInMexicoAndForeign",
            "ar_pros_DebtSerieMexicoPrimaryNumberOfStocks",
            "ar_pros_DebtSeriePrimaryOverallotmentMexicoNumberOfStocks",
            "ar_pros_DebtSerieMexicoSecondaryNumberOfStocks",
            "ar_pros_DebtSerieMexicoOverallotmentSecondaryNumberOfStocks",
            "ar_pros_DebtSerieForeignPrimaryNumberOfStocks",
            "ar_pros_DebtSerieForeignPrimaryOverallotmentNumberOfStocks",
            "ar_pros_DebtSerieForeignSecondaryNumberOfStocks",
            "ar_pros_DebtSerieForeignOverallotmentSecondaryNumberOfStocks",
            "ar_pros_DebtSeriesLegalBasisOfTheTaxRegimeApplicable",
            "ar_pros_StructuredSeriesCharacteristicsLineItems",
            "ar_pros_StructuredSeries",
            "ar_pros_StructuredSerieOfferType",
            "ar_pros_StructuredSerieTotalAmountOfTheIssueInMexicoAndAbroadIfNecessary",
            "ar_pros_StructuredSerieMexicoPrimaryAmount",
            "ar_pros_StructuredSeriePrimaryOverallotmentMexicoAmount",
            "ar_pros_StructuredSerieMexicoSecondaryAmount",
            "ar_pros_StructuredSerieMexicoOverallotmentSecondaryAmount",
            "ar_pros_StructuredSerieAbroadPrimaryAmount",
            "ar_pros_StructuredSerieForeignPrimaryOverAllotmentAmount",
            "ar_pros_StructuredSerieForeignSecondaryAmount",
            "ar_pros_StructuredSerieForeignOverallotmentSecondaryAmount",
            "ar_pros_StructuredSerieNumberOfStocksOfferedInMexicoAndForeign",
            "ar_pros_StructuredSerieMexicoPrimaryNumberOfStocks",
            "ar_pros_StructuredSeriePrimaryOverallotmentMexicoNumberOfStocks",
            "ar_pros_StructuredSerieMexicoSecondaryNumberOfStocks",
            "ar_pros_StructuredSerieMexicoOverallotmentSecondaryNumberOfStocks",
            "ar_pros_StructuredSerieForeignPrimaryNumberOfStocks",
            "ar_pros_StructuredSerieForeignPrimaryOverallotmentNumberOfStocks",
            "ar_pros_StructuredSerieForeignSecondaryNumberOfStocks",
            "ar_pros_StructuredSerieForeignOverallotmentSecondaryNumberOfStocks",
            "ar_pros_StructuredSeriesLegalBasisOfTheTaxRegimeApplicable"
        };

        /// <summary>
        /// Crea la tabla de series.
        /// </summary>
        /// <param name="conceptoContenedorHipercubo">Concepto que contiene la definición del hipercubo de la tabla de series a evaluar.</param>
        /// <param name="docBuilder">Constructor del documento.</param>
        /// <param name="instancia">Instancia XBRL con la información a presentar.</param>
        /// <param name="rolAExportar">Rol donde esta contenida la tabla.</param>
        /// <param name="estructuraReporte">DTO con información general del reporte.</param>
        /// <param name="exportadorOrigen">Exportador original del rol.</param>
        public void CreaSeccion(
            ConceptoReporteDTO conceptoContenedorHipercubo,
            DocumentBuilder docBuilder,
            DocumentoInstanciaXbrlDto instancia,
            IndiceReporteDTO rolAExportar,
            ReporteXBRLDTO estructuraReporte,
            IExportadorRolDocumentoInstancia exportadorOrigen)
        {
            try
            {
                docBuilder.Writeln();
                HipercuboReporteDTO hipercuboReporteDto;
                var idConceptoHipercubo = ObtenIdConceptoHipercubo(conceptoContenedorHipercubo, instancia, rolAExportar.Uri);
                if (estructuraReporte.Hipercubos.TryGetValue(idConceptoHipercubo, out hipercuboReporteDto) &&
                    hipercuboReporteDto.Titulos.Count > 0)
                {
                    PintaTablaCubo(hipercuboReporteDto, instancia, estructuraReporte, docBuilder,
                           conceptoContenedorHipercubo, rolAExportar, (ExportadorRolDocumentoBase)exportadorOrigen);
                }
            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
            }
        }
        /// <summary>
        /// Obtiene el identificador del concepto hipercubo.
        /// </summary>
        /// <param name="conceptoContenedorHipercubo">Concepto que contiene el hipercubo.</param>
        /// <param name="instancia">Instanica XBRL que se anliza.</param>
        /// <param name="idRol">Identificador del rol actual.</param>
        /// <returns>Identificador del hipercubo.</returns>
        private String ObtenIdConceptoHipercubo(ConceptoReporteDTO conceptoContenedorHipercubo, DocumentoInstanciaXbrlDto instancia, String idRol)
        {
            String idConceptoHipercubo = null;
            var listaEstructurasHipercubos = new List<EstructuraFormatoDto>();
            var rolPresentacion = instancia.Taxonomia.RolesPresentacion.Where(x => x.Uri.Equals(idRol)).FirstOrDefault();
            var conceptosTaxonomia = instancia.Taxonomia.ConceptosPorId;
            if (rolPresentacion != null)
            {
                var estructurasAnalizar = new List<EstructuraFormatoDto>(rolPresentacion.Estructuras);
                for (var indiceEstructrua = 0; indiceEstructrua < estructurasAnalizar.Count; indiceEstructrua++)
                {
                    var estructura = estructurasAnalizar[indiceEstructrua];
                    if (estructura.SubEstructuras != null && estructura.SubEstructuras.Count > 0)
                    {
                        if (estructura.IdConcepto.Equals(conceptoContenedorHipercubo.IdConcepto))
                        {
                            ConceptoDto concepto;
                            var conceptoHipercubo = estructura.SubEstructuras.
                                Where(x => (conceptosTaxonomia.TryGetValue(x.IdConcepto, out concepto) && concepto.EsHipercubo)).FirstOrDefault();
                            if (conceptoHipercubo != null)
                            {
                                idConceptoHipercubo = conceptoHipercubo.IdConcepto;
                            }
                            break;
                        }
                        else
                        {
                            estructurasAnalizar.AddRange(estructura.SubEstructuras);
                        }
                    }

                }
            }

            return idConceptoHipercubo;
        }

        private void AsignaEstilosTitulo(DocumentBuilder docBuilder, ExportadorRolDocumentoBase exportadorOrigen)
        {
            docBuilder.CellFormat.Shading.BackgroundPatternColor = exportadorOrigen.ObtenColorTitulo();
            docBuilder.Font.Color = Color.White;
            exportadorOrigen.establecerFuenteTituloCampo(docBuilder);
            docBuilder.Font.Size = exportadorOrigen.TamanioLetraTituloTabla;
        }
        private void AsignaEstilosConcepto(DocumentBuilder docBuilder, ExportadorRolDocumentoBase exportadorOrigen)
        {
            docBuilder.CellFormat.Shading.BackgroundPatternColor = Color.White;
            docBuilder.Font.Color = Color.Black;
            docBuilder.Bold = false;
        }


        /// <summary>
        /// Pinta el contenido de un cubo ya organizado en una tabla de Word
        /// </summary>

        private void PintaTablaCubo(
            HipercuboReporteDTO hipercubo,
            DocumentoInstanciaXbrlDto instancia,
            ReporteXBRLDTO estructuraReporte,
            DocumentBuilder docBuilder,
            ConceptoReporteDTO concepto,
            IndiceReporteDTO rolAExportar,
            ExportadorRolDocumentoBase exportadorOrigen)
        {

            var matrizHechosPlantillaContexto = hipercubo.Utileria.ReordenaConjutosPorExplicitaImplicitaTituloConcepto(hipercubo.Hechos, hipercubo.Titulos);
            var matrizHechosTitulo = matrizHechosPlantillaContexto.Values.First();

            var colorTitulo = exportadorOrigen.ObtenColorTitulo();
            docBuilder.ParagraphFormat.SpaceAfter = 0;
            docBuilder.ParagraphFormat.SpaceBefore = 2;

            foreach (var tituloSerie in matrizHechosTitulo.Keys)
            {

                var tablaActual = docBuilder.StartTable();
                PintaFilaSubTitulo(tituloSerie, docBuilder, 2, exportadorOrigen);
                var hechosPorConcepto = matrizHechosTitulo[tituloSerie];
                foreach (var idConcepto in hechosPorConcepto.Keys)
                {
                    if (!ConceptosAplican.Contains(idConcepto))
                    {
                        continue;
                    }
                    var etiquetaConcepto =
                        DesgloseDeCreditosHelper
                                    .obtenerEtiquetaDeConcepto(
                                            instancia.Taxonomia, idConcepto, 
                                            estructuraReporte.Lenguaje, 
                                            ReporteXBRLUtil.ETIQUETA_DEFAULT);
                    AsignaEstilosConcepto(docBuilder, exportadorOrigen);
                    docBuilder.Bold = true;
                    docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Left;
                    docBuilder.InsertCell();
                    docBuilder.Write(etiquetaConcepto);
                    docBuilder.InsertCell();
                    docBuilder.Bold = false;
                    docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Right;
                    var hecho = hechosPorConcepto[idConcepto];
                    if (hecho != null && !String.IsNullOrWhiteSpace(hecho.Valor) && instancia.Taxonomia.ConceptosPorId.ContainsKey(hecho.IdConcepto))
                    {
                        var conceptoHecho = instancia.Taxonomia.ConceptosPorId[hecho.IdConcepto];
                        if (conceptoHecho.TipoDato.Contains(ExportadorRolDocumentoBase.TIPO_DATO_TEXT_BLOCK))
                        {
                            WordUtil.InsertHtml(docBuilder, hecho.IdConcepto + ":" +
                                hecho.Id, ExportadorRolDocumentoBase.PARRAFO_HTML_NOTAS_Texblock + hecho.Valor + "</p>", false, true);

                        }
                        else
                        {
                            exportadorOrigen.EscribirValorHecho(docBuilder, estructuraReporte, hecho, instancia.Taxonomia.ConceptosPorId[hecho.IdConcepto]);
                        }

                    }
                    docBuilder.EndRow();

                }
                exportadorOrigen.establecerBordesGrisesTabla(tablaActual);
                docBuilder.EndTable();
                docBuilder.Writeln();
                docBuilder.Writeln();
            }
        }

        /// <summary>
        /// Pinta una fila con el titulo indicado.
        /// </summary>
        /// <param name="textoTitulo">Texto del título.</param>
        /// <param name="docBuilder">Puntero del documento.</param>
        /// <param name="numeroSeries">Cantidad de series existentes.</param>
        /// <param name="exportadorOrigen">Exportador original</param>
        private void PintaFilaSubTitulo(String textoTitulo, DocumentBuilder docBuilder, int numeroSeries, ExportadorRolDocumentoBase exportadorOrigen)
        {
            Color colorTitulo = exportadorOrigen.ObtenColorTitulo();
            docBuilder.InsertCell();
            docBuilder.CellFormat.Shading.BackgroundPatternColor = colorTitulo;
            docBuilder.Font.Color = Color.White;
            docBuilder.Font.Size = exportadorOrigen.TamanioLetraContenidoTabla;
            docBuilder.RowFormat.HeadingFormat = true;
            docBuilder.Write(textoTitulo);
            docBuilder.CellFormat.HorizontalMerge = CellMerge.First;
            if (numeroSeries > 0)
            {
                for (var indexTitulo = 0; indexTitulo < numeroSeries; indexTitulo++)
                {
                    docBuilder.InsertCell();
                    docBuilder.CellFormat.HorizontalMerge = CellMerge.Previous;
                }
            }
            docBuilder.EndRow();
            docBuilder.CellFormat.HorizontalMerge = CellMerge.None;
        }
        /// <summary>
        /// Pinta la sección de calificaciones en la tabla correspondiente.
        /// </summary>
        /// <param name="docBuilder">Puntero de </param>
        /// <param name="instancia"></param>
        /// <param name="estructuraReporte"></param>
        private void PintaCalificacionesEnTabla(
            DocumentBuilder docBuilder,
            DocumentoInstanciaXbrlDto instancia,
            ReporteXBRLDTO estructuraReporte,
            HipercuboReporteDTO hipercuboSerie,
            ExportadorRolDocumentoBase exportadorOrigen)
        {
            var hipercubo = estructuraReporte.Hipercubos["ar_pros_SecuritiesRatingTable"];

            hipercubo = FiltrarHipercuboCalificaciones(hipercubo, hipercuboSerie);

            if (hipercubo == null)
            {
                return;
            }
            var lenguaje = estructuraReporte.Lenguaje;
            var textoTituloSecciion = exportadorOrigen.ObtenEtiquetaConcepto("ar_pros_SecuritiesRatingAbstract", instancia, lenguaje);
            PintaFilaSubTitulo(textoTituloSecciion, docBuilder, hipercubo.Titulos.Count, exportadorOrigen);
            var diccionarioTarjetas = hipercubo.Utileria.ReordenaConjutosPorExplicitaConceptoImplicita(hipercubo.Hechos);

            foreach (var clavePlantilla in diccionarioTarjetas.Keys)
            {
                var diccionarioConceptos = diccionarioTarjetas[clavePlantilla];
                var primerHecho = diccionarioConceptos.Values.First().First();
                var idDimensionExplicita = hipercubo.Utileria.ObtenDimensionesTipo(primerHecho, instancia, true).First().IdDimension;
                var miembroExplicita = hipercubo.Utileria.ObtenMiembroDimension(primerHecho, idDimensionExplicita, instancia);
                var textoTituloMiembro = "  " + exportadorOrigen.ObtenEtiquetaConcepto(miembroExplicita.IdItemMiembro, instancia, lenguaje);
                PintaFilaSubTitulo(textoTituloMiembro, docBuilder, hipercubo.Titulos.Count, exportadorOrigen);

                docBuilder.CellFormat.Shading.BackgroundPatternColor = Color.White;
                docBuilder.CellFormat.PreferredWidth = PreferredWidth.Auto;
                docBuilder.Font.Color = Color.Black;
                docBuilder.Bold = false;
                docBuilder.RowFormat.HeadingFormat = false;

                foreach (var idConcepto in diccionarioConceptos.Keys)
                {
                    docBuilder.InsertCell();
                    var nombreConcepto = "    " + DesgloseDeCreditosHelper.obtenerEtiquetaDeConcepto(instancia.Taxonomia, idConcepto, "es", ReporteXBRLUtil.ETIQUETA_DEFAULT);
                    docBuilder.Write(nombreConcepto);
                    var listaHechos = diccionarioConceptos[idConcepto];
                    for (var indexHecho = 0; indexHecho < listaHechos.Count; indexHecho++)
                    {
                        var hecho = listaHechos[indexHecho];
                        docBuilder.InsertCell();
                        if (hecho != null && !String.IsNullOrWhiteSpace(hecho.Valor))
                        {
                            exportadorOrigen.EscribirValorHecho(docBuilder, estructuraReporte, hecho, instancia.Taxonomia.ConceptosPorId[hecho.IdConcepto]);
                        }
                    }
                    docBuilder.EndRow();
                }
            }
        }

        /// <summary>
        /// Recorta el hipercubo de calificaciones de acuerdo al cubo de serie enviado 
        /// </summary>
        /// <param name="hipercubo"></param>
        /// <param name="hipercuboSerie"></param>
        /// <returns></returns>
        private HipercuboReporteDTO FiltrarHipercuboCalificaciones(HipercuboReporteDTO hipercubo, HipercuboReporteDTO hipercuboSerie)
        {
            HipercuboReporteDTO nuevoCubo = new HipercuboReporteDTO();

            nuevoCubo.Utileria = hipercubo.Utileria;

            nuevoCubo.Hechos = new Dictionary<string, IDictionary<string, HechoDto[]>>();
            nuevoCubo.Titulos = new List<String>();


            for (var iCol = 0; iCol < hipercuboSerie.Titulos.Count; iCol++)
            {

                var tituloActual = hipercuboSerie.Titulos[iCol];

                nuevoCubo.Titulos.Add(tituloActual);
                foreach (var hechoKey in hipercubo.Hechos.Keys)
                {
                    if (!nuevoCubo.Hechos.ContainsKey(hechoKey))
                    {
                        nuevoCubo.Hechos[hechoKey] = new Dictionary<string, HechoDto[]>();
                    }

                    foreach (var subHechoKey in hipercubo.Hechos[hechoKey].Keys)
                    {
                        if (!nuevoCubo.Hechos[hechoKey].ContainsKey(subHechoKey))
                        {
                            nuevoCubo.Hechos[hechoKey][subHechoKey] = new HechoDto[hipercuboSerie.Titulos.Count];
                        }
                        try
                        {

                            if (hipercubo.Hechos[hechoKey][subHechoKey].Count() > hipercubo.Titulos.IndexOf(tituloActual))
                            {
                                nuevoCubo.Hechos[hechoKey][subHechoKey][iCol] = hipercubo.Hechos[hechoKey][subHechoKey][hipercubo.Titulos.IndexOf(tituloActual)];
                            }
                            else
                            {
                                nuevoCubo.Hechos[hechoKey][subHechoKey][iCol] = new HechoDto();
                            }

                        }
                        catch (Exception ex)
                        {
                            System.Console.WriteLine(ex.StackTrace);
                        }

                    }
                }
            }
            return nuevoCubo;
        }
        /// <summary>
        /// Retorna un listado con los conceptos que deben ser considerados para no ser evaluados por el exportador origen.
        /// </summary>
        /// <param name="conceptoOrigen">Concepto origen que sirve como marca para iniciar la generación de la sección.</param>
        /// <param name="instancia">Documento de instancia evaluado.</param>
        /// <param name="rolAExportar">Rol que se está exportando.</param>
        /// <param name="estructuraReporte">DTO con información general del reporte.</param>
        /// <param name="exportadorOrigen">Exportador del rol.</param>
        /// <returns>Retorna un listado con los conceptos que deben ser descartados en la presentación del exportador original.</returns>
        public IList<string> ObtenConceptosDescartar(ConceptoReporteDTO conceptoOrigen, DocumentoInstanciaXbrlDto instancia, IndiceReporteDTO rolAExportar, ReporteXBRLDTO estructuraReporte, IExportadorRolDocumentoInstancia exportadorOrigen)
        {
            return null;
        }
    }
}
