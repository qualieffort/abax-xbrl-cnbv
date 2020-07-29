using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
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
    /// Crea el contenido de una tabla de series para la portada.
    /// </summary>
    public class ExportadorTablaSeriesPortada412000 : IExportadorSubseccionConcepto
    {
        /// <summary>
        /// Diccionario con la definición de los concepots que solo deben presentarse cuando su valor coincida con el indicado.
        /// </summary>
        public IDictionary<String, String> PresentarCuandoValorIgual { get; set; }
        /// <summary>
        /// Cantidad maxima de series por página.
        /// </summary>
        public int MaxSeriesPorPagina { get; set; }
        /// <summary>
        /// Diccionario con el conjunto de conceptos booleanos que deben agruparse.
        /// </summary>
        public IDictionary<String, IList<String>> BooleanosAgrupar { get; set;}
        /// <summary>
        /// Lista con los identificadores de los conceptos que aplican.
        /// </summary>
        public IList<String> ConceptosNoAbstractosAplican = new List<String>()
        {

            "ar_pros_EquitySerieTotalAmountOfTheIssueInMexicoAndAbroadIfNecessary",
            "ar_pros_EquitySerieNumberOfStocksOfferedInMexicoAndForeign",
            "ar_pros_EquitySerieInTheCaseOfAuctionSecuritiesAbstract",
            "ar_pros_DebtSerieTotalAmountOfTheIssueInMexicoAndAbroadIfNecessary",
            "ar_pros_DebtSerieNumberOfStocksOfferedInMexicoAndForeign",
            "ar_pros_DebtSerieInTheCaseOfAuctionSecuritiesAbstract",
            "ar_pros_StructuredSerieTotalAmountOfTheIssueInMexicoAndAbroadIfNecessary",
            "ar_pros_StructuredSerieNumberOfStocksOfferedInMexicoAndForeign",
            "ar_pros_StructuredSerieInTheCaseOfAuctionSecuritiesAbstract",

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
                    IList<HipercuboReporteDTO> hipercubosFinales = DividirHipercuboPorColumnas(hipercuboReporteDto, MaxSeriesPorPagina);
                    foreach (var hcFinal in hipercubosFinales)
                    {
                        PintaTablaCubo(hcFinal, instancia, estructuraReporte, docBuilder,
                            conceptoContenedorHipercubo, rolAExportar, (ExportadorRolDocumentoBase)exportadorOrigen);
                    }
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

        /// <summary>
        /// Obtiene el identificador del concepto hipercubo.
        /// </summary>
        /// <param name="conceptoContenedorHipercubo">Concepto que contiene el hipercubo.</param>
        /// <param name="instancia">Instanica XBRL que se anliza.</param>
        /// <param name="idRol">Identificador del rol actual.</param>
        /// <returns>Identificador del hipercubo.</returns>
        private EstructuraFormatoDto ObtenEstructuraFormatoElementosHipercubo(ConceptoReporteDTO conceptoContenedorHipercubo, DocumentoInstanciaXbrlDto instancia, String idRol)
        {
            EstructuraFormatoDto conceptoElementos = null;
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
                            var conceptoAuxiliar = estructura.SubEstructuras.
                                Where(x => (conceptosTaxonomia.TryGetValue(x.IdConcepto, out concepto) && !concepto.EsHipercubo && (concepto.EsAbstracto??false) )).FirstOrDefault();
                            if (conceptoAuxiliar != null)
                            {
                                conceptoElementos = conceptoAuxiliar;
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

            return conceptoElementos;
        }


        /// <summary>
        /// Crea varios hipercubos a partir del original tomando en cuenta un número máximo de columnas
        /// </summary>
        /// <returns></returns>
        private IList<HipercuboReporteDTO> DividirHipercuboPorColumnas(HipercuboReporteDTO hipercuboOrigen, int maxCols)
        {
            var listaSubCubos = new List<HipercuboReporteDTO>();
            try
            {
                if (maxCols <= 0)
                {
                    maxCols = 4;
                }
                HipercuboReporteDTO cuboActual = null;
                int colActual = 0;
                for (var iCol = 0; iCol < hipercuboOrigen.Titulos.Count; iCol++)
                {

                    var tituloActual = hipercuboOrigen.Titulos[iCol];

                    if (colActual >= maxCols || cuboActual == null)
                    {
                        cuboActual = new HipercuboReporteDTO();
                        cuboActual.Utileria = hipercuboOrigen.Utileria;
                        cuboActual.Hechos = new Dictionary<string, IDictionary<string, HechoDto[]>>();
                        cuboActual.Titulos = new List<String>();
                        colActual = 0;
                        listaSubCubos.Add(cuboActual);
                    }

                    cuboActual.Titulos.Add(tituloActual);
                    foreach (var hechoKey in hipercuboOrigen.Hechos.Keys)
                    {
                        if (!cuboActual.Hechos.ContainsKey(hechoKey))
                        {
                            cuboActual.Hechos[hechoKey] = new Dictionary<string, HechoDto[]>();
                        }

                        foreach (var subHechoKey in hipercuboOrigen.Hechos[hechoKey].Keys)
                        {
                            if (!cuboActual.Hechos[hechoKey].ContainsKey(subHechoKey))
                            {
                                cuboActual.Hechos[hechoKey][subHechoKey] = new HechoDto[maxCols];
                            }
                            cuboActual.Hechos[hechoKey][subHechoKey][colActual] = hipercuboOrigen.Hechos[hechoKey][subHechoKey][iCol];
                        }
                    }

                    colActual++;
                }
            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
            }
            return listaSubCubos;
        }

        /// <summary>
        /// Pinta la tabla de series.
        /// </summary>
        /// <param name="hipercubo">Hipercubo a presentar.</param>
        /// <param name="instancia">Documento de instancia.</param>
        /// <param name="estructuraReporte">DTO con información general del reporte.</param>
        /// <param name="docBuilder">Constructor del documento.</param>
        /// <param name="concepto">Concepto contenedor de la tabla.</param>
        /// <param name="rolAExportar">Rol que se pretende exprotar.</param>
        /// <param name="exportadorOrigen">Exportador original del rol de presentación.</param>
        private void PintaTablaCubo(
            HipercuboReporteDTO hipercubo, 
            DocumentoInstanciaXbrlDto instancia,
            ReporteXBRLDTO estructuraReporte, 
            DocumentBuilder docBuilder, 
            ConceptoReporteDTO concepto,
            IndiceReporteDTO rolAExportar,
            ExportadorRolDocumentoBase exportadorOrigen)
        {
            var tablaActual = docBuilder.StartTable();
            var colorTitulo = exportadorOrigen.ObtenColorTitulo();
            docBuilder.ParagraphFormat.SpaceAfter = 0;
            docBuilder.ParagraphFormat.SpaceBefore = 2;
            var cantidadSeries = hipercubo.Titulos.Count;
            var percentWidth = 100 / (cantidadSeries + 1);
            //docBuilder.InsertCell(); 
            // docBuilder.EndRow(); 
            docBuilder.CellFormat.Shading.BackgroundPatternColor = colorTitulo;
            docBuilder.Font.Color = Color.White;
            docBuilder.Font.Size = exportadorOrigen.TamanioLetraContenidoTabla;
            docBuilder.RowFormat.HeadingFormat = true;
            if (concepto.Abstracto)
            {

                PintaFilaSubTitulo(concepto.Valor, docBuilder, hipercubo.Titulos.Count, exportadorOrigen);
            }
            else
            {
                docBuilder.Bold = false;
            }

            docBuilder.InsertCell();
            docBuilder.CellFormat.Shading.BackgroundPatternColor = colorTitulo;
            docBuilder.CellFormat.PreferredWidth = PreferredWidth.FromPercent(percentWidth);//PreferredWidth.Auto;
            docBuilder.Font.Color = Color.White;
            exportadorOrigen.establecerFuenteTituloCampo(docBuilder);
            docBuilder.Font.Size = exportadorOrigen.TamanioLetraTituloTabla;
            docBuilder.Write("Serie [Eje]");
            docBuilder.CellFormat.HorizontalMerge = CellMerge.None;
            docBuilder.RowFormat.HeadingFormat = true;
            if (hipercubo.Titulos.Count > 0)
            {
                for (var indexTitulo = 0; indexTitulo < hipercubo.Titulos.Count; indexTitulo++)
                {
                    var titulo = hipercubo.Titulos[indexTitulo];
                    docBuilder.InsertCell();
                    docBuilder.Write(titulo);
                }
                docBuilder.EndRow();
            }
            tablaActual.AutoFit(AutoFitBehavior.AutoFitToWindow);
            docBuilder.CellFormat.Shading.BackgroundPatternColor = Color.White;
            docBuilder.CellFormat.PreferredWidth = PreferredWidth.FromPercent(percentWidth); //PreferredWidth.Auto;
            docBuilder.Font.Color = Color.Black;
            docBuilder.Bold = false;
            var diccionarioConceptosAgrupados = GeneraDiccionarioHechosBooleanosAgrupados(hipercubo, instancia, estructuraReporte);
            var listaConceptosDescartar = ObtenListaConceptosDescartar(hipercubo);
            var elementosHipercubo = ObtenEstructuraFormatoElementosHipercubo(concepto, instancia, rolAExportar.Uri);


            foreach (var estructuraActual in elementosHipercubo.SubEstructuras)
            {

                var idConcepto = estructuraActual.IdConcepto;
                ConceptoDto conceptoEstructura;
                if (idConcepto.Equals("ar_pros_SecuritiesRatingAbstract"))
                {
                    PintaCalificacionesEnTabla(docBuilder, instancia, estructuraReporte, hipercubo, exportadorOrigen);
                    continue;
                }
                if (listaConceptosDescartar.Contains(idConcepto) || !instancia.Taxonomia.ConceptosPorId.TryGetValue(idConcepto, out conceptoEstructura))
                {
                    continue;
                }
                var nombreConcepto =
                DesgloseDeCreditosHelper
                    .obtenerEtiquetaDeConcepto(
                        instancia.Taxonomia, idConcepto,
                        estructuraReporte.Lenguaje, ReporteXBRLUtil.ETIQUETA_DEFAULT);

          
                if ((conceptoEstructura.EsAbstracto ?? false) || (estructuraActual.SubEstructuras.Count > 0))
                {
                    IDictionary<string, String[]> agrupadosPlantillaContexto = null;
                    if (diccionarioConceptosAgrupados.TryGetValue(idConcepto, out agrupadosPlantillaContexto))
                    {
                        CreaFilaElementosAgrupados(agrupadosPlantillaContexto, docBuilder, instancia, exportadorOrigen, estructuraReporte, percentWidth, nombreConcepto, idConcepto);

                    }
                    //Validación para comprobar si la SubEstructura principal contiene una SubEstructura secundaria. 
                    else if (estructuraActual.SubEstructuras.Count > 0)

                    {
                        var listaSubEstructura = new List<String>();
                        listaSubEstructura.Add(idConcepto);
                        for (var indice = 0; indice < listaSubEstructura.Count; indice++)
                        {
                            var subEstructuraSecundaria = listaSubEstructura[indice];
                            if (ConceptosNoAbstractosAplican.Contains(subEstructuraSecundaria))
                            {
                                foreach (var subEstructura in estructuraActual.SubEstructuras)
                                {
                                    listaSubEstructura.Add(subEstructura.IdConcepto);
                                }
                            }
                        }
                        foreach (String idConceptoSubEstructura in listaSubEstructura)
                        {
                            
                            var nombreConceptoSubEstructura =
                                      DesgloseDeCreditosHelper
                                      .obtenerEtiquetaDeConcepto(
                                      instancia.Taxonomia, idConceptoSubEstructura,
                                      estructuraReporte.Lenguaje, ReporteXBRLUtil.ETIQUETA_DEFAULT);

                            //Validación para la tabla subastas de valores
                            if ((idConceptoSubEstructura.Equals("ar_pros_EquitySerieInTheCaseOfAuctionSecuritiesAbstract")) ||
                                (idConceptoSubEstructura.Equals("ar_pros_DebtSerieInTheCaseOfAuctionSecuritiesAbstract")) ||
                                (idConceptoSubEstructura.Equals("ar_pros_StructuredSerieInTheCaseOfAuctionSecuritiesAbstract")))
                            {
                                PintaFilaSubTitulo(nombreConceptoSubEstructura, docBuilder, hipercubo.Titulos.Count, exportadorOrigen);
                            }
                            
                            CreaFilaHechos(hipercubo, docBuilder, instancia, exportadorOrigen, estructuraReporte, percentWidth, nombreConceptoSubEstructura, idConceptoSubEstructura);
                        }

                    }
                    else
                    {
                        if (ContieneInformacion(idConcepto, hipercubo, instancia, rolAExportar))
                        {
                            PintaFilaSubTitulo(nombreConcepto, docBuilder, hipercubo.Titulos.Count, exportadorOrigen);
                        }
                    }
                }
                
                else
                {
                    CreaFilaHechos(hipercubo, docBuilder, instancia, exportadorOrigen, estructuraReporte, percentWidth, nombreConcepto, idConcepto);
                }
                
            }


            exportadorOrigen.establecerBordesGrisesTabla(tablaActual);
            docBuilder.EndTable();
            tablaActual.AutoFit(AutoFitBehavior.FixedColumnWidths);
            var tabelWidth = docBuilder.PageSetup.PageWidth - docBuilder.PageSetup.LeftMargin - docBuilder.PageSetup.RightMargin;//38.3d;
            foreach (var row in tablaActual.Rows.ToArray())
            {
                var cells = row.Cells.ToArray();
                if (cells!= null && cells.Length > 0)
                {
                    var cellWidth = tabelWidth / cells.Length;
                    foreach (var cell in cells)
                    {
                        cell.CellFormat.Width = cellWidth;
                    }
                }
            }
            docBuilder.Writeln();
            docBuilder.Writeln();
        }
        /// <summary>
        /// Determina si uno de los conceptos hijos de un concepto padre contienen información.
        /// </summary>
        /// <param name="idConceptoEvaluar">Concepto del cual serán evaluados los conceptos hijos.</param>
        /// <param name="hipercubo">Hipercubo con la información a presentar.</param>
        /// <param name="instancia">Documento de instancia</param>
        /// <param name="rolAExportar">Rol actual.</param>
        /// <returns>Si los hijos del concepto indicado contienen información.</returns>
        public bool ContieneInformacion(String idConceptoEvaluar, HipercuboReporteDTO hipercubo, DocumentoInstanciaXbrlDto instancia, IndiceReporteDTO rolAExportar)
        {
            var listaIdsConcepto = ObtenIdsConceptosDentro(idConceptoEvaluar, instancia, rolAExportar);
            var diccionarioHechosPorConcepto = hipercubo.Hechos;
            var contieneInformacion = false;
            foreach (var idConcepto in listaIdsConcepto)
            {
                IDictionary<string,HechoDto[]> hechosPorContexto;
                if (diccionarioHechosPorConcepto.TryGetValue(idConcepto, out hechosPorContexto))
                {
                    foreach (var arregloHechos in hechosPorContexto.Values)
                    {
                        foreach (var hecho in arregloHechos)
                        {
                            if (hecho != null && !String.IsNullOrEmpty(hecho.Valor) && (!hecho.EsNumerico || hecho.ValorNumerico > 0))
                            {
                                contieneInformacion = true;
                                break;
                            }
                        }
                        if (contieneInformacion)
                        {
                            break;
                        }
                    }
                    if (contieneInformacion)
                    {
                        break;
                    }
                }
            }
            return contieneInformacion;
        }

        /// <summary>
        /// Retorna los identificadores de todos los conceptos dentro de un concepto determinado.
        /// </summary>
        /// <param name="idConcepto">Identificador del concepto a evaluar.</param>
        /// <param name="instancia">Documento de instancia.</param>
        /// <param name="rolAExportar">Rol que se pretende exportar.</param>
        /// <returns>Lista de identificadores de conceptos contenidos dentro del concepto indocado.</returns>
        public IList<String> ObtenIdsConceptosDentro(String idConcepto, DocumentoInstanciaXbrlDto instancia, IndiceReporteDTO rolAExportar)
        {
            var conceptos = new List<String>();

            EstructuraFormatoDto conceptoElementos = null;
            var listaEstructurasHipercubos = new List<EstructuraFormatoDto>();
            var rolPresentacion = instancia.Taxonomia.RolesPresentacion.Where(x => x.Uri.Equals(rolAExportar.Uri)).FirstOrDefault();
            var conceptosTaxonomia = instancia.Taxonomia.ConceptosPorId;
            if (rolPresentacion != null)
            {
                var estructurasAnalizar = new List<EstructuraFormatoDto>(rolPresentacion.Estructuras);
                EstructuraFormatoDto estructuraPropietaria = null;
                for (var indiceEstructrua = 0; indiceEstructrua < estructurasAnalizar.Count; indiceEstructrua++)
                {
                    var estructura = estructurasAnalizar[indiceEstructrua];
                    if (estructura.IdConcepto.Equals(idConcepto))
                    {
                        estructuraPropietaria = estructura;
                        break;
                    }
                    if (estructura.SubEstructuras != null && estructura.SubEstructuras.Count > 0)
                    {
                        estructurasAnalizar.AddRange(estructura.SubEstructuras);
                    }
                }
                if (estructuraPropietaria != null && estructuraPropietaria.SubEstructuras != null && estructuraPropietaria.SubEstructuras.Count > 0)
                {
                    var listaSubEstructurasConceptos = new List<EstructuraFormatoDto>(estructuraPropietaria.SubEstructuras);
                    for (var indice = 0; indice < listaSubEstructurasConceptos.Count; indice++)
                    {
                        var subEstructura = listaSubEstructurasConceptos[indice];
                        if (!listaSubEstructurasConceptos.Contains(subEstructura))
                        {
                            listaSubEstructurasConceptos.Add(subEstructura);
                        }
                        if (subEstructura.SubEstructuras != null && subEstructura.SubEstructuras.Count > 0)
                        {
                            listaSubEstructurasConceptos.AddRange(subEstructura.SubEstructuras);
                        }
                    }
                    foreach(var subEstructura in listaSubEstructurasConceptos)
                    {
                        var idConceptoAgregar = subEstructura.IdConcepto;
                        if (!conceptos.Contains(idConceptoAgregar))
                        {
                            conceptos.Add(idConceptoAgregar);
                        }
                    }
                }
            }

            return conceptos;
        }

        /// <summary>
        /// Determina si un diccionario de hechos por contexto contiene información a presentar.
        /// </summary>
        /// <param name="diccionarioHechos">Diccionario que se evaluará.</param>
        /// <returns>Si contiene información a presentar.</returns>
        private Boolean ContieneHinformacion(IDictionary<string, HechoDto[]> diccionarioHechos)
        {
            var contieneInformacion = false;
            foreach (var idContexto in diccionarioHechos.Keys)
            {
                var arregloHechos = diccionarioHechos[idContexto];
                for (var indice = 0; indice < arregloHechos.Length; indice++)
                {
                    var hecho = arregloHechos[indice];
                    if (hecho != null && !String.IsNullOrEmpty(hecho.Valor))
                    {
                        contieneInformacion = true;
                        break;
                    }
                }
            }
            return contieneInformacion;
        }
        /// <summary>
        /// Determina si un diccionario de hechos por contexto contiene información a presentar.
        /// </summary>
        /// <param name="diccionarioHechos">Diccionario que se evaluará.</param>
        /// <returns>Si contiene información a presentar.</returns>
        private Boolean ContieneHinformacion(IDictionary<string, String[]> diccionarioHechos)
        {
            var contieneInformacion = false;
            foreach (var idContexto in diccionarioHechos.Keys)
            {
                var arregloHechos = diccionarioHechos[idContexto];
                for (var indice = 0; indice < arregloHechos.Length; indice++)
                {
                    if (!String.IsNullOrEmpty(arregloHechos[indice]))
                    {
                        contieneInformacion = true;
                        break;
                    }
                }
            }
            return contieneInformacion;
        }
        /// <summary>
        /// Método en cargado de pintar una fila de la tabla de series.
        /// </summary>
        /// <param name="hipercubo">Hipercubo a evaluar.</param>
        /// <param name="docBuilder">Constructor del reporte.</param>
        /// <param name="instancia">Documento de instancia.</param>
        /// <param name="exportadorOrigen">Exportador original del rol.</param>
        /// <param name="estructuraReporte">Dto con información general del reporte.</param>
        /// <param name="percentWidth">Ancho preferiod de las columnas.</param>
        /// <param name="nombreConcepto">Nombre del concepto.</param>
        /// <param name="idConcepto">Identificador del concepto a presentar.</param>
        private void CreaFilaHechos(
            HipercuboReporteDTO hipercubo,
            DocumentBuilder docBuilder, 
            DocumentoInstanciaXbrlDto instancia,
            ExportadorRolDocumentoBase exportadorOrigen,
            ReporteXBRLDTO estructuraReporte,
            int percentWidth,
            String nombreConcepto, 
            String idConcepto)
        {
            IDictionary<string, HechoDto[]> matrizPlantillaContexto; ;
            if (!hipercubo.Hechos.TryGetValue(idConcepto, out matrizPlantillaContexto) ||  !ContieneHinformacion(matrizPlantillaContexto))
            {
                return;
            }

            docBuilder.InsertCell();
            docBuilder.CellFormat.WrapText = true;
            docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Left;
            docBuilder.RowFormat.HeadingFormat = false;
            docBuilder.Write(nombreConcepto ?? "");
            foreach (var idPlantillaContexto in matrizPlantillaContexto.Keys)
            {

                var listaHechos = matrizPlantillaContexto[idPlantillaContexto];
                for (var indexHecho = 0; indexHecho < listaHechos.Length; indexHecho++)
                {
                    var hecho = listaHechos[indexHecho];
                    if (hecho == null)
                    {
                        continue;
                    }
                    var valorHecho = hecho.Valor;

                    docBuilder.InsertCell();
                    if (hecho.NoEsNumerico)
                    {
                        docBuilder.CellFormat.WrapText = true;
                        docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Left;
                    }
                    else
                    {
                        docBuilder.CellFormat.WrapText = false;
                        docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Right;

                    }


                    if (hecho != null && !String.IsNullOrWhiteSpace(hecho.Valor) && instancia.Taxonomia.ConceptosPorId.ContainsKey(hecho.IdConcepto))
                    {
                        var conceptoHecho = instancia.Taxonomia.ConceptosPorId[hecho.IdConcepto];
                        if (conceptoHecho.TipoDato.Contains(ExportadorRolDocumentoBase.TIPO_DATO_TEXT_BLOCK))
                        {
                            WordUtil.InsertHtml(docBuilder, hecho.IdConcepto + ":" +
                                hecho.Id, ExportadorRolDocumentoBase.PARRAFO_HTML_NOTAS_Texblock + valorHecho + "</p>", false, true);

                        }
                        else
                        {
                            exportadorOrigen.EscribirValorHecho(docBuilder, estructuraReporte, hecho, instancia.Taxonomia.ConceptosPorId[hecho.IdConcepto]);
                        }

                    }
                }
                docBuilder.CellFormat.PreferredWidth = PreferredWidth.FromPercent(percentWidth);
            }

            docBuilder.EndRow();
        }
        /// <summary>
        /// Método en cargado de pintar una fila de la tabla de series.
        /// </summary>
        /// <param name="matrizPlantillaContexto">Matriz de elmentos a presentar.</param>
        /// <param name="docBuilder">Constructor del reporte.</param>
        /// <param name="instancia">Documento de instancia.</param>
        /// <param name="exportadorOrigen">Exportador original del rol.</param>
        /// <param name="estructuraReporte">Dto con información general del reporte.</param>
        /// <param name="percentWidth">Ancho preferiod de las columnas.</param>
        /// <param name="nombreConcepto">Nombre del concepto.</param>
        /// <param name="idConcepto">Identificador del concepto a presentar.</param>
        private void CreaFilaElementosAgrupados(
            IDictionary<string, String[]> matrizPlantillaContexto,
            DocumentBuilder docBuilder,
            DocumentoInstanciaXbrlDto instancia,
            ExportadorRolDocumentoBase exportadorOrigen,
            ReporteXBRLDTO estructuraReporte,
            int percentWidth,
            String nombreConcepto,
            String idConcepto)
        {
            if (!ContieneHinformacion(matrizPlantillaContexto))
            {
                return;
            }

            docBuilder.InsertCell();
            docBuilder.CellFormat.WrapText = true;
            docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Left;
            docBuilder.RowFormat.HeadingFormat = false;
            docBuilder.Write(nombreConcepto ?? "");
            foreach (var idPlantillaContexto in matrizPlantillaContexto.Keys)
            {

                var listaHechos = matrizPlantillaContexto[idPlantillaContexto];
                if (listaHechos.Length == 0)
                {
                    continue;
                }
                for (var indexHecho = 0; indexHecho < listaHechos.Length; indexHecho++)
                {
                    var valor = listaHechos[indexHecho];
                    if (valor == null)
                    {
                        continue;
                    }
                    docBuilder.InsertCell();
                    docBuilder.CellFormat.WrapText = true;
                    docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Left;
                    docBuilder.Write(valor);
                }
                docBuilder.CellFormat.PreferredWidth = PreferredWidth.FromPercent(percentWidth);
            }

            docBuilder.EndRow();
        }
        /// <summary>
        /// Retorna un diccionario con los valores concatenados para un concepto en particular.
        /// </summary>
        /// <param name="hipercubo">Hipercubo a evaluar.</param>
        /// <param name="instancia">Documento de instancia.</param>
        /// <param name="estructuraReporte">Datos generales del reporte.</param>
        /// <returns>Diccionario con los conceptos de los grupos booleanos</returns>
        private IDictionary<String, IDictionary<String, String[]>> GeneraDiccionarioHechosBooleanosAgrupados(
            HipercuboReporteDTO hipercubo,
            DocumentoInstanciaXbrlDto instancia,
            ReporteXBRLDTO estructuraReporte)
        {
            var diccionarioValores = new Dictionary<String, IDictionary<String, String[]>>();
            if (BooleanosAgrupar != null)
            {
                var etiquetasPorconcepto = new Dictionary<String, String>();
                foreach (var idConceptoAgrupa in BooleanosAgrupar.Keys)
                {
                    IDictionary<String, String[]> diccionarioValoresPorPlantilla;
                    if (!diccionarioValores.TryGetValue(idConceptoAgrupa, out diccionarioValoresPorPlantilla))
                    {
                        diccionarioValoresPorPlantilla = new Dictionary<String, String[]>();
                        diccionarioValores.Add(idConceptoAgrupa, diccionarioValoresPorPlantilla);
                    }

                    var listaConceptosAgrupar = BooleanosAgrupar[idConceptoAgrupa];
                    
                    foreach (var idConcepto in listaConceptosAgrupar)
                    {
                        String etiquetaConcepto;
                        if (!etiquetasPorconcepto.TryGetValue(idConcepto, out etiquetaConcepto))
                        {
                            etiquetaConcepto =
                                DesgloseDeCreditosHelper.obtenerEtiquetaDeConcepto(
                                        instancia.Taxonomia, idConcepto,
                                        estructuraReporte.Lenguaje, ReporteXBRLUtil.ETIQUETA_DEFAULT);
                            etiquetasPorconcepto.Add(idConcepto, etiquetaConcepto);
                        }
                        IDictionary<String, HechoDto[]> hechosPorPlantillaContexto;
                        if (hipercubo.Hechos.TryGetValue(idConcepto, out hechosPorPlantillaContexto))
                        {
                            foreach (var idPlantillaContexto in hechosPorPlantillaContexto.Keys)
                            {
                                HechoDto[] arregloHechos = hechosPorPlantillaContexto[idPlantillaContexto];
                                String[] valoresPorIniceType;
                                if (!diccionarioValoresPorPlantilla.TryGetValue(idPlantillaContexto, out valoresPorIniceType))
                                {
                                    valoresPorIniceType = new String[arregloHechos.Length];
                                    for (var indexType = 0; indexType < hipercubo.Titulos.Count; indexType++)
                                    {
                                        valoresPorIniceType[indexType] = String.Empty;
                                    }
                                    diccionarioValoresPorPlantilla.Add(idPlantillaContexto, valoresPorIniceType);
                                }
                                
                                for (var indexHecho = 0; indexHecho < arregloHechos.Length; indexHecho++)
                                {
                                    HechoDto hecho = arregloHechos[indexHecho];
                                    if (hecho != null && !String.IsNullOrEmpty(hecho.Valor) && !hecho.Valor.Equals("NO"))
                                    {
                                        if (!String.IsNullOrEmpty(valoresPorIniceType[indexHecho]))
                                        {
                                            valoresPorIniceType[indexHecho] += ", ";
                                        }
                                        if (hecho.Valor.Equals("SI"))
                                        {
                                            valoresPorIniceType[indexHecho] += etiquetaConcepto;
                                        }
                                        else
                                        {
                                            valoresPorIniceType[indexHecho] += hecho.Valor;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }

            return diccionarioValores;
        }
        /// <summary>
        /// Determina los conceptos que no deben ser presentados de forma directa en la tabla.
        /// </summary>
        /// <param name="hipercubo">Hipercubo que se evalua.</param>
        /// <returns></returns>
        private IList<String> ObtenListaConceptosDescartar(HipercuboReporteDTO hipercubo)
        {
            var listaDescartar = new List<String>();
            if (BooleanosAgrupar != null)
            {
                foreach (var idConceptoAgrupa in BooleanosAgrupar.Keys)
                {
                    var listaConceptosAgrupar = BooleanosAgrupar[idConceptoAgrupa];
                    listaDescartar.AddRange(listaConceptosAgrupar);
                }
            }
            if (PresentarCuandoValorIgual != null)
            {
                foreach (var idConceptoEvaluar in PresentarCuandoValorIgual.Keys)
                {
                    IDictionary<String, HechoDto[]> hechosPorContexto;
                    var valorEvaluar = PresentarCuandoValorIgual[idConceptoEvaluar];
                    if (hipercubo.Hechos.TryGetValue(idConceptoEvaluar, out hechosPorContexto))
                    {
                        foreach (var arregloHechos in hechosPorContexto.Values)
                        {
                            foreach (var hecho in arregloHechos)
                            {
                                if (hecho != null && hecho.Valor != null && !hecho.Valor.Equals(valorEvaluar))
                                {
                                    listaDescartar.Add(idConceptoEvaluar);
                                    break;
                                }
                            }
                        }
                    }
                }
            }
            return listaDescartar;
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
            docBuilder.CellFormat.WrapText = true;
            docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Left;
            docBuilder.Font.Color = Color.White;
            docBuilder.Font.Size = exportadorOrigen.TamanioLetraContenidoTabla;
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
            docBuilder.CellFormat.Shading.BackgroundPatternColor = Color.White;
            docBuilder.Font.Color = Color.Black;
            docBuilder.Bold = false;
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
            var contieneInformacion = false;
            foreach (var diccionarioContexto in hipercubo.Hechos.Values)
            {
                foreach (var arregloHechos in diccionarioContexto.Values)
                {
                    foreach (var hecho in arregloHechos)
                    {
                        if (hecho != null && !String.IsNullOrWhiteSpace(hecho.Valor))
                        {
                            contieneInformacion = true;
                            break;
                        }
                    }
                    if (contieneInformacion)
                    {
                        break;
                    }
                }
                if (contieneInformacion)
                {
                    break;
                }
            }
            if (!contieneInformacion)
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
                if (!ContieneInformacion(diccionarioConceptos))
                {
                    continue;
                }
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
        /// Determina si el diccionario indicado contiene información.
        /// </summary>
        /// <param name="tarjeta">Diccionario a evaluar.</param>
        /// <returns>Si almenos un hecho dentro del diccionario contiene información.</returns>
        private bool ContieneInformacion(IDictionary<String,IList<HechoDto>> tarjeta)
        {
            var contieneInformacion = false;
            foreach (var idConcepto in tarjeta.Keys)
            {
                var listaHechos = tarjeta[idConcepto];
                foreach (var hecho in listaHechos)
                {
                    if (hecho != null && !String.IsNullOrEmpty(hecho.Valor))
                    {
                        contieneInformacion = true;
                        break;
                    }
                }
                if (contieneInformacion)
                {
                    break;
                }
            }
            return contieneInformacion;
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
        /// <summary>
        /// Determina si un concepto debe presentarse en base a su valor.
        /// </summary>
        /// <param name="idConcepto">Concepto a evaluar.</param>
        /// <param name="listaHechos">Hechos del concepto.</param>
        /// <returns>Si se debe presentar en base a la configuracion de PresentarCuandoValorIgual </returns>
        private bool EvaluaPresentarPorValor(String idConcepto, HechoDto[] listaHechos)
        {
            var presentar = true;
            String valorEvaluar;
            if (PresentarCuandoValorIgual != null && 
                PresentarCuandoValorIgual.TryGetValue(idConcepto, out valorEvaluar))
            {
                presentar = false;
                if (listaHechos != null && listaHechos.Length > 0)
                {
                    foreach (var hecho in listaHechos)
                    {
                        if (hecho != null && !String.IsNullOrEmpty(hecho.Valor) && hecho.Valor.Equals(valorEvaluar))
                        {
                            presentar = true;
                            break;
                        }
                    }
                }
            }
            return presentar;
        }
    }
}
