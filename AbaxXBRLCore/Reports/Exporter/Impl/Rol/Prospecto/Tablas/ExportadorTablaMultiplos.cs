using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AbaxXBRLCore.Reports.Dto;
using AbaxXBRLCore.Viewer.Application.Dto;
using Aspose.Words;
using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.Reports.Util;
using Aspose.Words.Tables;
using System.Drawing;

namespace AbaxXBRLCore.Reports.Exporter.Impl.Rol.Prospecto.Tablas
{
    /// <summary>
    /// Exportador de las tablas tipo multiplos, que son una lista de tablas con 
    /// </summary>
    public class ExportadorTablaMultiplos : IExportadorSubseccionConcepto
    {
        /// <summary>
        /// Crea la tabla de series.
        /// </summary>
        /// <param name="conceptoOrigen">Concepto que contiene la definición del hipercubo de la tabla de series a evaluar.</param>
        /// <param name="docBuilder">Constructor del documento.</param>
        /// <param name="instancia">Instancia XBRL con la información a presentar.</param>
        /// <param name="rolAExportar">Rol donde esta contenida la tabla.</param>
        /// <param name="estructuraReporte">DTO con información general del reporte.</param>
        /// <param name="exportadorOrigen">Exportador original del rol.</param>
        public void CreaSeccion(ConceptoReporteDTO conceptoOrigen, 
                                DocumentBuilder docBuilder, 
                                DocumentoInstanciaXbrlDto instancia, 
                                IndiceReporteDTO rolAExportar, 
                                ReporteXBRLDTO estructuraReporte, 
                                IExportadorRolDocumentoInstancia exportadorOrigen)
        {
            
            try
            {
                docBuilder.Writeln();
                docBuilder.Writeln();
                var exportadorBase = (ExportadorRolDocumentoBase)exportadorOrigen;
                var idConceptoHipercubo = ObtenIdConceptoHipercubo(conceptoOrigen, instancia, rolAExportar.Uri);
                var listaEstructurasHipercubos = new List<EstructuraFormatoDto>();
                var rolPresentacion = instancia.Taxonomia.RolesPresentacion.Where(x => x.Uri.Equals(rolAExportar.Uri)).FirstOrDefault();
                var conceptosTaxonomia = instancia.Taxonomia.ConceptosPorId;
                if (rolPresentacion != null)
                {
                    var estructurasAnalizar = new List<EstructuraFormatoDto>(rolPresentacion.Estructuras);
                    for (var indiceEstructrua = 0; indiceEstructrua < estructurasAnalizar.Count; indiceEstructrua++)
                    {
                        var estructura = estructurasAnalizar[indiceEstructrua];
                        if (estructura.SubEstructuras != null && estructura.SubEstructuras.Count > 0)
                        {
                            if (estructura.IdConcepto.Equals(conceptoOrigen.IdConcepto))
                            {

                                ConceptoDto concepto;
                                var conceptoHipercubo = estructura.SubEstructuras.
                                    Where(x => (conceptosTaxonomia.TryGetValue(x.IdConcepto, out concepto) && concepto.EsHipercubo)).FirstOrDefault();
                                var conceptoPartidas = estructura.SubEstructuras.
                                    Where(x => conceptosTaxonomia.TryGetValue(x.IdConcepto, out concepto) && !concepto.EsHipercubo).FirstOrDefault();

                                if (!ContieneInformacion(conceptoPartidas, instancia))
                                {
                                    return;
                                }

                                var tablaActual = docBuilder.StartTable();
                                var colorTitulo = exportadorBase.ObtenColorTitulo();
                                docBuilder.ParagraphFormat.SpaceAfter = 0;
                                docBuilder.ParagraphFormat.SpaceBefore = 2;

                                var etiquetaTitulo =
                                    DesgloseDeCreditosHelper
                                       .obtenerEtiquetaDeConcepto(instancia.Taxonomia, conceptoOrigen.IdConcepto, estructuraReporte.Lenguaje, ReporteXBRLUtil.ETIQUETA_DEFAULT);

                                PintaFilaSubTitulo(etiquetaTitulo, docBuilder, 2, exportadorBase);

                                
                                if (conceptoHipercubo != null)
                                {
                                    foreach (var conceptoDimension in conceptoHipercubo.SubEstructuras)
                                    {
                                        foreach (var conceptoMiembro in conceptoDimension.SubEstructuras)
                                        {
                                            var etiquetaMiembro =
                                                    DesgloseDeCreditosHelper
                                                                 .obtenerEtiquetaDeConcepto(
                                                                    instancia.Taxonomia, 
                                                                    conceptoMiembro.IdConcepto, 
                                                                    estructuraReporte.Lenguaje, 
                                                                    ReporteXBRLUtil.ETIQUETA_DEFAULT);
                                            docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Left;
                                            PintaFilaSubTitulo(etiquetaMiembro, docBuilder, 2, exportadorBase);
                                            foreach (var partida in conceptoPartidas.SubEstructuras)
                                            {
                                                var etiquetaPartida =
                                                    DesgloseDeCreditosHelper
                                                                 .obtenerEtiquetaDeConcepto(
                                                                    instancia.Taxonomia,
                                                                    partida.IdConcepto,
                                                                    estructuraReporte.Lenguaje,
                                                                    ReporteXBRLUtil.ETIQUETA_DEFAULT);
                                                docBuilder.Bold = true;
                                                docBuilder.InsertCell();
                                                docBuilder.Write(etiquetaPartida);
                                                docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Left;
                                                docBuilder.Bold = false;
                                                docBuilder.InsertCell();
                                                docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Right;
                                                IList<String> idsHechosPartida;
                                                if (instancia.HechosPorIdConcepto.TryGetValue(partida.IdConcepto, out idsHechosPartida))
                                                {
                                                    foreach (var idHecho in idsHechosPartida)
                                                    {
                                                        HechoDto hechoPartida;
                                                        ContextoDto contexto;
                                                        ConceptoDto conceptoPartida;
                                                        if (instancia.HechosPorId.TryGetValue(idHecho, out hechoPartida) && 
                                                            instancia.ContextosPorId.TryGetValue(hechoPartida.IdContexto,out contexto) &&
                                                            contexto.ContieneInformacionDimensional &&
                                                            contexto.ValoresDimension.Where(X => X.IdDimension.Equals(conceptoDimension.IdConcepto) && X.IdItemMiembro.Equals(conceptoMiembro.IdConcepto)).Count() > 0)
                                                        {
                                                            if (instancia.Taxonomia.ConceptosPorId.TryGetValue(partida.IdConcepto, out conceptoPartida))
                                                            {
                                                                exportadorBase.EscribirValorHecho(docBuilder, estructuraReporte, hechoPartida, conceptoPartida);
                                                            }
                                                            break;
                                                        }
                                                    }
                                                }
                                                docBuilder.EndRow();
                                            }
                                        }
                                    }
                                    idConceptoHipercubo = conceptoHipercubo.IdConcepto;
                                }
                                establecerBordesGrisesTabla(tablaActual);
                                docBuilder.EndTable();
                                docBuilder.Writeln();
                                break;
                            }
                            else
                            {
                                estructurasAnalizar.AddRange(estructura.SubEstructuras);
                            }
                        }

                    }
                }


            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
            }
        }
        /// <summary>
        /// Determina si existe información relacionada con esta tabla.
        /// </summary>
        /// <param name="conceptoPartidas">Concepto de partidas a evaluar.</param>
        /// <param name="instancia">Documento de instancia.</param>
        /// <returns>Si contiene información</returns>
        private Boolean ContieneInformacion(EstructuraFormatoDto conceptoPartidas, DocumentoInstanciaXbrlDto instancia)
        {
            var contieneInformacion = false;
            foreach (var partida in conceptoPartidas.SubEstructuras)
            {
                IList<String> idsHechosPartida;
                if (instancia.HechosPorIdConcepto.TryGetValue(partida.IdConcepto, out idsHechosPartida))
                {
                    foreach (var idHecho in idsHechosPartida)
                    {
                        HechoDto hechoPartida;
                        if (instancia.HechosPorId.TryGetValue(idHecho, out hechoPartida))
                        {
                            if (hechoPartida != null && !String.IsNullOrEmpty(hechoPartida.Valor))
                            {
                                contieneInformacion = true;
                                break;
                            }
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

        private void PintaTablaCubo(
            HipercuboReporteDTO hipercubo,
            DocumentoInstanciaXbrlDto instancia,
            ReporteXBRLDTO estructuraReporte,
            DocumentBuilder docBuilder,
            ConceptoReporteDTO concepto,
            IndiceReporteDTO rolAExportar,
            ExportadorRolDocumentoBase exportadorOrigen)
        {   
                docBuilder.InsertBreak(BreakType.PageBreak);
                Table tablaActual = docBuilder.StartTable();
                Color colorTitulo = exportadorOrigen.ObtenColorTitulo();
                docBuilder.ParagraphFormat.SpaceAfter = 0;
                docBuilder.ParagraphFormat.SpaceBefore = 2;

                //docBuilder.InsertCell(); 
                // docBuilder.EndRow(); 
                // Formatos de celdas que le da el color de fondo de los titulos de la tabla que se crea
                docBuilder.CellFormat.Shading.BackgroundPatternColor = colorTitulo;
                docBuilder.Font.Color = Color.White;
                docBuilder.Font.Size = exportadorOrigen.TamanioLetraContenidoTabla;

                //   docBuilder.InsertCell();


                foreach (var idConcepto in hipercubo.Hechos.Keys)
                {
                    var matrizPlantillaContexto = hipercubo.Hechos[idConcepto];
                    docBuilder.InsertCell();
                    var nombreConcepto =
                        DesgloseDeCreditosHelper
                        .obtenerEtiquetaDeConcepto(instancia.Taxonomia, idConcepto, "es", ReporteXBRLUtil.ETIQUETA_DEFAULT);
                    docBuilder.Write(nombreConcepto);
                }
                docBuilder.EndRow();

                docBuilder.CellFormat.Shading.BackgroundPatternColor = Color.White;
                docBuilder.CellFormat.PreferredWidth = PreferredWidth.Auto;
                docBuilder.Font.Color = Color.Black;
                var cantidadCeldasVacias = hipercubo.Hechos.Count - 1;

                foreach (var idPlantillaContexto in hipercubo.Utileria.configuracion.PlantillasContextos.Keys)
                {

                    var plantilla = hipercubo.Utileria.configuracion.PlantillasContextos[idPlantillaContexto];
                    var miembroPlantilla = plantilla.ValoresDimension[0];
                    var nombreMiembro =
                           DesgloseDeCreditosHelper.obtenerEtiquetaDeConcepto(instancia.Taxonomia, miembroPlantilla.IdItemMiembro, "es", ReporteXBRLUtil.ETIQUETA_DEFAULT);
                    /* docBuilder.CellFormat.Shading.BackgroundPatternColor = Color.LightGray;
                       docBuilder.CellFormat.PreferredWidth = PreferredWidth.Auto;
                       docBuilder.Font.Color = Color.Black;*/
                    docBuilder.CellFormat.Shading.BackgroundPatternColor = colorTitulo;
                    docBuilder.Font.Color = Color.White;
                    docBuilder.Font.Size = exportadorOrigen.TamanioLetraContenidoTabla;
                    docBuilder.InsertCell();
                    docBuilder.Write(nombreMiembro);
                    if (cantidadCeldasVacias > 0)
                    {
                        for (var indexMiembro = 0; indexMiembro < cantidadCeldasVacias; indexMiembro++)
                        {
                            docBuilder.InsertCell();
                            docBuilder.Write(String.Empty);
                        }
                        docBuilder.EndRow();
                    }
                    var countType = 0;
                    docBuilder.CellFormat.Shading.BackgroundPatternColor = Color.White;
                    docBuilder.CellFormat.PreferredWidth = PreferredWidth.Auto;
                    docBuilder.Font.Color = Color.Black;
                    docBuilder.Bold = false;
                    foreach (var idConcepto in hipercubo.Hechos.Keys)
                    {
                        var matrizPlantillaContexto = hipercubo.Hechos[idConcepto];
                        countType = matrizPlantillaContexto[idPlantillaContexto].Length;
                        break;
                    }
                    Boolean dimensiones = false;
                    for (var indexType = 0; indexType < countType; indexType++)
                    {


                        if (indexType > 0)
                        {
                            dimensiones = true;
                        }

                        docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Left;
                        foreach (var idConcepto in hipercubo.Hechos.Keys)
                        {


                            var matrizPlantillaContexto = hipercubo.Hechos[idConcepto];
                            var listaHechos = matrizPlantillaContexto[idPlantillaContexto];
                            if (listaHechos != null)
                            {
                                var hecho = listaHechos[indexType];

                                var valorHecho = hecho.Valor;
                                if (dimensiones)
                                {
                                    docBuilder.EndRow();
                                    docBuilder.InsertCell();
                                    dimensiones = false;
                                }
                                else
                                {
                                    docBuilder.InsertCell();
                                }

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
                                if ((hecho != null && !String.IsNullOrWhiteSpace(hecho.Valor)))
                                {
                                    docBuilder.Write(valorHecho);
                                }
                            }

                        }


                    }

                    docBuilder.RowFormat.AllowBreakAcrossPages = true;
                    docBuilder.RowFormat.HeadingFormat = false;
                    docBuilder.EndRow();
                }


                establecerBordesGrisesTabla(tablaActual);
                docBuilder.EndTable();
                docBuilder.Writeln();
        }

        /// Establece los bordes est⯤ar de una tabla
        /// <param name="tablaActual"></param>
        ///
        public void establecerBordesGrisesTabla(Table tablaActual)
        {
            tablaActual.SetBorders(LineStyle.Single, 1, Color.FromArgb(99, 99, 99));

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
            docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Left;

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
