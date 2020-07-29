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
using AbaxXBRLCore.Viewer.Application.Dto.Hipercubos;

namespace AbaxXBRLCore.Reports.Exporter.Impl.Rol.Prospecto.Tablas
{
    /// <summary>
    /// Exportador para un formato de tablas en las que se incrementan filas por cada miembro de la dimensión type.
    /// </summary>
    public class ExportadorTablaConceptosHorizontalType : IExportadorSubseccionConcepto
    {
        /// <summary>
        /// Concepto que sirve de referencia cundo se utiliso un concepto marca.
        /// </summary>
        public String IdConceptoReferencia { get; set; }
        /// <summary>
        /// Miembros de la dimensión explicita que aplican.
        /// </summary>
        public IList<String> IdsPlantillasContexto {get; set;}
        /// <summary>
        /// Miembros de la dimensión implicita que aplican.
        /// </summary>
        public IList<String> ConceptosAplica { get; set; }
        /// <summary>
        /// Identificador de la proyección que aplica para este hipercubo.
        /// </summary>
        public String Proyeccion { get; set; }
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
                if (estructuraReporte.Hipercubos.TryGetValue(idConceptoHipercubo, out hipercuboReporteDto))
                {
                    hipercuboReporteDto = EvaluaProyeccion(hipercuboReporteDto);
                    if (ContieneInformacion(hipercuboReporteDto))
                    {
                        PintaTablaCubo(hipercuboReporteDto, instancia, estructuraReporte, docBuilder,
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
        /// Determina si el hipercubo tiene información que presentar.
        /// </summary>
        /// <param name="hipercuboReporteDto">Hiprecubo a evaluar.</param>
        /// <returns>Si contiene información que presentar.</returns>
        private bool ContieneInformacion(HipercuboReporteDTO hipercuboReporteDto)
        {
            var contieneInformacion = false;
            if (hipercuboReporteDto.Hechos != null)
            {
                foreach (var idConcepto in hipercuboReporteDto.Hechos.Keys)
                {
                    
                    if (ConceptosAplica != null && !ConceptosAplica.Contains(idConcepto))
                    {
                        continue;
                    }
                    var hechosPorContexto = hipercuboReporteDto.Hechos[idConcepto];
                    foreach (var idContexto in hechosPorContexto.Keys)
                    {
                        if (IdsPlantillasContexto != null && !IdsPlantillasContexto.Contains(idContexto))
                        {
                            continue;
                        }
                        var arregloHechos = hechosPorContexto[idContexto];
                        for (var indexHecho = 0; indexHecho < arregloHechos.Length; indexHecho++)
                        {
                            var hecho = arregloHechos[indexHecho];
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
            }
            return contieneInformacion;
        }
        /// <summary>
        /// Depura el hipercubo en base a los filtros de la proyección.
        /// </summary>
        /// <param name="hipercuboReporteDto">Hipercubo a evaluar</param>
        /// <returns>Hipercubo ajustado.</returns>
        private HipercuboReporteDTO EvaluaProyeccion(HipercuboReporteDTO hipercuboReporteDto)
        {
            ConfiguracionProyeccionHipercubo configuracionProyeccion = null;
            HipercuboReporteDTO hipercuboAjustado = hipercuboReporteDto;
            if (!String.IsNullOrEmpty(Proyeccion) && hipercuboReporteDto.Utileria.configuracion.Proyecciones != null)
            {
                if (hipercuboReporteDto.Utileria.configuracion.Proyecciones.TryGetValue(Proyeccion, out configuracionProyeccion))
                {
                    hipercuboAjustado = ClonaHechosHipercubo(hipercuboReporteDto);
                    var indicesDescartar = new List<int>();
                    if (configuracionProyeccion.FiltrosContextoPorValorConcepto != null)
                    {
                        if (hipercuboAjustado.Hechos != null)
                        {
                            foreach (var idConceptoProyeccion in configuracionProyeccion.FiltrosContextoPorValorConcepto.Keys)
                            {
                                var valorHechoPoryeccion = configuracionProyeccion.FiltrosContextoPorValorConcepto[idConceptoProyeccion];
                                IDictionary<string, HechoDto[]> diccionarioHechosPorPlantillaContexto;
                                if (hipercuboAjustado.Hechos.TryGetValue(idConceptoProyeccion, out diccionarioHechosPorPlantillaContexto))
                                {
                                    foreach (var idPlantilla in diccionarioHechosPorPlantillaContexto.Keys)
                                    {
                                        var arregloHechos = diccionarioHechosPorPlantillaContexto[idPlantilla];
                                        for (var indexHecho = 0; indexHecho < arregloHechos.Length; indexHecho++)
                                        {
                                            var hecho = arregloHechos[indexHecho];
                                            if (hecho != null && !String.IsNullOrEmpty(hecho.Valor) && !hecho.Valor.Equals(valorHechoPoryeccion))
                                            {
                                                indicesDescartar.Add(indexHecho);
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    foreach (var idConcepto in hipercuboAjustado.Hechos.Keys)
                    {
                        var hechosPorContexto = hipercuboAjustado.Hechos[idConcepto];
                        foreach (var idContexto in hechosPorContexto.Keys)
                        {
                            var arregloHechos = hechosPorContexto[idContexto];
                            foreach (var indiceDescartar in indicesDescartar)
                            {
                                if (indiceDescartar < arregloHechos.Length)
                                {
                                    arregloHechos[indiceDescartar] = null;
                                }
                            }
                        }
                    }
                }
            }
            return hipercuboAjustado;
        }
        /// <summary>
        /// Copia el contenido del diccionario a un nuevo diccionario.
        /// </summary>
        /// <param name="hechosHipercubo">Diccionario origen que se pretende copiar.</param>
        /// <returns>Copia del diccionario.</returns>
        private HipercuboReporteDTO ClonaHechosHipercubo(HipercuboReporteDTO hechosHipercubo)
        {
            var hechosClon = new Dictionary<String, IDictionary<String, HechoDto[]>>();
            foreach (var idConcepto in hechosHipercubo.Hechos.Keys)
            {
                IDictionary<String, HechoDto[]> hechosContextoAjustados;
                if (!hechosClon.TryGetValue(idConcepto, out hechosContextoAjustados))
                {
                    hechosContextoAjustados = new Dictionary<String, HechoDto[]>();
                    hechosClon.Add(idConcepto, hechosContextoAjustados);
                }
                var hechosPorContexto = hechosHipercubo.Hechos[idConcepto];
                foreach (var idContexto in hechosPorContexto.Keys)
                {
                    var arregloHechos = hechosPorContexto[idContexto];
                    HechoDto[] arregloAjustado;
                    if (!hechosContextoAjustados.TryGetValue(idContexto, out arregloAjustado))
                    {
                        arregloAjustado = new HechoDto[arregloHechos.Length];
                        hechosContextoAjustados.Add(idContexto, arregloAjustado);
                    }
                    for (var index = 0; index < arregloHechos.Length; index++)
                    {
                        arregloAjustado[index] = arregloHechos[index];
                    }
                }
            }
            var hipercuboClon = new HipercuboReporteDTO()
            {
                Hechos = hechosClon,
                Titulos = hechosHipercubo.Titulos,
                Utileria = hechosHipercubo.Utileria
            };


            return hipercuboClon;
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
            var idConceptoContenedor = String.IsNullOrEmpty(IdConceptoReferencia) ? conceptoContenedorHipercubo.IdConcepto : IdConceptoReferencia;
            if (rolPresentacion != null)
            {
                var estructurasAnalizar = new List<EstructuraFormatoDto>(rolPresentacion.Estructuras);
                for (var indiceEstructrua = 0; indiceEstructrua < estructurasAnalizar.Count; indiceEstructrua++)
                {
                    var estructura = estructurasAnalizar[indiceEstructrua];
                    if (estructura.SubEstructuras != null && estructura.SubEstructuras.Count > 0)
                    {
                        if (estructura.IdConcepto.Equals(idConceptoContenedor))
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
        /// Pinta el contenido del hipercubo.
        /// </summary>
        /// <param name="hipercubo">Hipercubo.</param>
        /// <param name="instancia">Documento de instancia.</param>
        /// <param name="estructuraReporte">Estructura del reporte.</param>
        /// <param name="docBuilder">Constructor del documento.</param>
        /// <param name="concepto">Concepto origen.</param>
        /// <param name="rolAExportar">Rol que se pretende exportar.</param>
        /// <param name="exportadorOrigen">Exportador original</param>
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

            //docBuilder.InsertCell(); 
            // docBuilder.EndRow(); 
            docBuilder.CellFormat.Shading.BackgroundPatternColor = colorTitulo;
            docBuilder.Font.Color = Color.White;
            docBuilder.Font.Size = exportadorOrigen.TamanioLetraContenidoTabla;

            var listaIdsConcepto = new List<string>();
            foreach (var idConcepto in hipercubo.Hechos.Keys)
            {
                if (ConceptosAplica != null && !ConceptosAplica.Contains(idConcepto))
                {
                    continue;
                }
                listaIdsConcepto.Add(idConcepto);
            }

            var etiquetaTitulo = String.Empty;
            if (!String.IsNullOrEmpty(IdConceptoReferencia))
            {
                etiquetaTitulo =
                                DesgloseDeCreditosHelper
                                    .obtenerEtiquetaDeConcepto(instancia.Taxonomia, IdConceptoReferencia, estructuraReporte.Lenguaje, ReporteXBRLUtil.ETIQUETA_DEFAULT);
            }
            else
            {
                etiquetaTitulo = concepto.Valor;
            }
            PintaFilaSubTitulo(etiquetaTitulo, docBuilder, listaIdsConcepto.Count, exportadorOrigen);

            docBuilder.CellFormat.Shading.BackgroundPatternColor = colorTitulo;
            docBuilder.Font.Color = Color.White;
            docBuilder.Font.Size = exportadorOrigen.TamanioLetraContenidoTabla;
            docBuilder.RowFormat.HeadingFormat = true;
            docBuilder.Bold = true;
            foreach (var idConcepto in listaIdsConcepto)
            {
                var nombreConcepto =
                DesgloseDeCreditosHelper.obtenerEtiquetaDeConcepto(instancia.Taxonomia, idConcepto, estructuraReporte.Lenguaje, ReporteXBRLUtil.ETIQUETA_DEFAULT);
                docBuilder.InsertCell();
                docBuilder.Write(nombreConcepto ?? "");
            }
            docBuilder.EndRow();

            docBuilder.CellFormat.Shading.BackgroundPatternColor = Color.White;
            docBuilder.Font.Color = Color.Black;
            docBuilder.Bold = false;

            var matrisHechos = hipercubo.Utileria.ReordenaConjutosPorExplicitaImplicitaConcepto(hipercubo.Hechos);
            var idDimensionTitulos = String.Empty;
            if (matrisHechos.Count > 1)
            {
                var dimensionExplicita = hipercubo.Utileria.configuracion.PlantillaDimensiones.Values.Where(X => X.Explicita == true).FirstOrDefault();
                if (dimensionExplicita != null)
                {
                    idDimensionTitulos = dimensionExplicita.IdDimension;
                }
            }
            foreach (var idPlantillaContexto in matrisHechos.Keys)
            {
                if (IdsPlantillasContexto != null && !IdsPlantillasContexto.Contains(idPlantillaContexto))
                {
                    continue;
                }
                var listaImplicita = matrisHechos[idPlantillaContexto];
                var contieneHechos = listaImplicita.Where(X => X.Count > 0).FirstOrDefault() != null;
                if (!contieneHechos)
                {
                    continue;
                }

                if (!String.IsNullOrEmpty(idDimensionTitulos))
                {
                    Viewer.Application.Dto.Hipercubos.PlantillaContextoDto plantillaContexto;
                    if (hipercubo.Utileria.configuracion.PlantillasContextos.TryGetValue(idPlantillaContexto, out plantillaContexto))
                    {
                        var miembroDimension =  plantillaContexto.ValoresDimension.Where(x => x.IdDimension.Equals(idDimensionTitulos)).FirstOrDefault();
                        if (miembroDimension != null)
                        {
                            var etiquetaMiembro =
                                DesgloseDeCreditosHelper
                                    .obtenerEtiquetaDeConcepto(instancia.Taxonomia, miembroDimension.IdItemMiembro, estructuraReporte.Lenguaje, ReporteXBRLUtil.ETIQUETA_DEFAULT);
                            PintaFilaSubTitulo(etiquetaMiembro, docBuilder, listaIdsConcepto.Count, exportadorOrigen);
                        }
                    }
                }

                
                for (var indexImplicita = 0; indexImplicita < listaImplicita.Count; indexImplicita++)
                {
                    var diccionarioPorconcepto = listaImplicita[indexImplicita];
                    HechoDto hecho;
                    foreach (var idConceptoItera in listaIdsConcepto)
                    {
                        docBuilder.InsertCell();
                        if (diccionarioPorconcepto.TryGetValue(idConceptoItera, out hecho))
                        {
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
                            exportadorOrigen.EscribirValorHecho(docBuilder, estructuraReporte, hecho, instancia.Taxonomia.ConceptosPorId[hecho.IdConcepto]);
                        }
                        else
                        {
                            docBuilder.Write(" ");
                        }
                    }
                    docBuilder.EndRow();
                }
            }
            exportadorOrigen.establecerBordesGrisesTabla(tablaActual);
            docBuilder.EndTable();
            docBuilder.Writeln();
            docBuilder.Writeln();
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
