using AbaxXBRLCore.Reports.Util;
using AbaxXBRLCore.Viewer.Application.Dto;
using AbaxXBRLCore.Viewer.Application.Import.Impl;
using Aspose.Words;
using Aspose.Words.Tables;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Reports.Exporter.Impl.Rol
{
    
    /// <summary>
    /// Exporta la estructura de tabla del rol 815100 del Anexo AA con la tabla
    /// del desglose de pasivos
    /// </summary>
    public class ExportadorRolDocumento815100Bmv2014 : ExportadorRolDocumentoBase
    {
        ///
	    /// Tamaño de letra para esta reporte en específico
	    ////
        public int TamanioLetraReporteDesglose { get; set; }
	    ///
	     /// Color del titulo de las tablas
	     ////
        private int[] ColorTituloTabla { get; set; }
	    ///
	     /// (non-Javadoc)
	     /// @see com.bmv.spread.xbrl.reportes.exportador.ExportadorRolDocumentoInstancia#exportarRolAWord(com.aspose.words.DocumentBuilder, com.hh.xbrl.abax.viewer.application.dto.DocumentoInstanciaXbrlDto, com.bmv.spread.xbrl.reportes.dto.IndiceReporteDTO, com.bmv.spread.xbrl.reportes.dto.ReporteXBRLDTO)
	     ////

        public ExportadorRolDocumento815100Bmv2014() 
        {
            TamanioLetraReporteDesglose = 5;
            ColorTituloTabla = new int[] { 0, 53, 96 };
        }

        public override void exportarRolAWord(Aspose.Words.DocumentBuilder docBuilder, Viewer.Application.Dto.DocumentoInstanciaXbrlDto instancia, Dto.IndiceReporteDTO rolAExportar, Dto.ReporteXBRLDTO estructuraReporte)
        {
            docBuilder.CurrentSection.PageSetup.Orientation = Orientation.Landscape;
            docBuilder.CurrentSection.PageSetup.PaperSize = PaperSize.Legal;
            docBuilder.CurrentSection.PageSetup.LeftMargin = 10;
            docBuilder.CurrentSection.PageSetup.RightMargin = 10;

            
            escribirEncabezado(docBuilder, instancia, estructuraReporte, true);


            imprimirTituloRol(docBuilder, rolAExportar);


            Table tablaDesglose = docBuilder.StartTable();
            docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Center;
            establecerFuenteTituloCampo(docBuilder);
            docBuilder.Font.Size = TamanioLetraReporteDesglose;

            docBuilder.ParagraphFormat.SpaceAfter = 0;
            docBuilder.ParagraphFormat.SpaceBefore = 2;

            var idioma = estructuraReporte.Lenguaje;

            ImprimirTitulosGrupoPasivo(ImportadorExportadorRol815100Bmv2014._elementosPrimariosBancarios, docBuilder, instancia, idioma);

            ImprimirGrupoTipoPasivo(ImportadorExportadorRol815100Bmv2014._miembrosTipoPasivo[0],
                ImportadorExportadorRol815100Bmv2014._elementosPrimariosBancarios, docBuilder, instancia, idioma, estructuraReporte);

            ImprimirGrupoTipoPasivo(ImportadorExportadorRol815100Bmv2014._miembrosTipoPasivo[1],
                 ImportadorExportadorRol815100Bmv2014._elementosPrimariosBancarios, docBuilder, instancia, idioma, estructuraReporte);

            ImprimirTitulosGrupoPasivo(ImportadorExportadorRol815100Bmv2014._elementosPrimariosBursatiles, docBuilder, instancia, idioma);

            ImprimirGrupoTipoPasivo(ImportadorExportadorRol815100Bmv2014._miembrosTipoPasivo[2],
                 ImportadorExportadorRol815100Bmv2014._elementosPrimariosBursatiles, docBuilder, instancia, idioma, estructuraReporte);

            ImprimirGrupoTipoPasivo(ImportadorExportadorRol815100Bmv2014._miembrosTipoPasivo[3],
                 ImportadorExportadorRol815100Bmv2014._elementosPrimariosBursatiles, docBuilder, instancia, idioma, estructuraReporte);

            ImprimirGrupoTipoPasivo(ImportadorExportadorRol815100Bmv2014._miembrosTipoPasivo[4],
                 ImportadorExportadorRol815100Bmv2014._elementosPrimariosBursatiles, docBuilder, instancia, idioma, estructuraReporte);

            ImprimirTitulosGrupoPasivo(ImportadorExportadorRol815100Bmv2014._elementosPrimariosOtros, docBuilder, instancia, idioma);

            ImprimirGrupoTipoPasivo(ImportadorExportadorRol815100Bmv2014._miembrosTipoPasivo[5],
                 ImportadorExportadorRol815100Bmv2014._elementosPrimariosOtros, docBuilder, instancia, idioma, estructuraReporte);

            ImprimirGrupoTipoPasivo(ImportadorExportadorRol815100Bmv2014._miembrosTipoPasivo[6],
                 ImportadorExportadorRol815100Bmv2014._elementosPrimariosOtros, docBuilder, instancia, idioma, estructuraReporte);

            ImprimirGrupoTipoPasivo(ImportadorExportadorRol815100Bmv2014._miembrosTipoPasivo[7],
                 ImportadorExportadorRol815100Bmv2014._elementosPrimariosGranTotal, docBuilder, instancia, idioma, estructuraReporte);


            establecerBordesGrisesTabla(tablaDesglose);
            docBuilder.EndTable();
        }
        /// <summary>
        /// Imprime el contenido de un grupo de hechos de tipo pasivo, ya sea un crédito o un renglón total
        /// </summary>
       
        private void ImprimirGrupoTipoPasivo(string idTipoPasivo, string[] elementosPrimarios, DocumentBuilder docBuilder, Viewer.Application.Dto.DocumentoInstanciaXbrlDto instancia, String idioma, Dto.ReporteXBRLDTO estructuraReporte)
        {
            var hechosDeTipoPasivo = ObtenerHechosPorDimensionYMiembro(instancia, null, ImportadorExportadorRol815100Bmv2014._idDimensionTipoPasivo, idTipoPasivo);
            if (ImportadorExportadorRol815100Bmv2014._miembrosTipoPasivoTotales.Contains(idTipoPasivo))
            {
                docBuilder.InsertCell();
                docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Left;

                docBuilder.RowFormat.HeadingFormat = false;
                docBuilder.CellFormat.HorizontalMerge = CellMerge.None;
                docBuilder.CellFormat.VerticalMerge = CellMerge.None;


                docBuilder.CellFormat.Shading.BackgroundPatternColor = Color.White;
                docBuilder.Font.Color = Color.Black;
                docBuilder.Write(ReporteXBRLUtil.obtenerEtiquetaConcepto(idioma, ReporteXBRLUtil.ETIQUETA_DEFAULT, idTipoPasivo, instancia));

                var iSubMiembro = 0;

                for (int iElemento = 1; iElemento < elementosPrimarios.Length; iElemento++)
                {
                    docBuilder.InsertCell();
                    docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Left;

                    docBuilder.RowFormat.HeadingFormat = false;
                    docBuilder.CellFormat.HorizontalMerge = CellMerge.None;
                    docBuilder.CellFormat.VerticalMerge = CellMerge.None;


                    docBuilder.CellFormat.Shading.BackgroundPatternColor = Color.White;
                    docBuilder.Font.Color = Color.Black;
                    if (ImportadorExportadorRol815100Bmv2014._elementosPrimariosTotal.Contains(elementosPrimarios[iElemento]))
                    {
                        var listaHechos = ObtenerHechosPorElementoPrimarioYSecuencia(instancia, hechosDeTipoPasivo, elementosPrimarios[iElemento], null);
                        
                        if (elementosPrimarios[iElemento] == ImportadorExportadorRol815100Bmv2014._idConceptoSubtabla)
                        {
                            listaHechos = FiltrarHechosPorDimensionYMiembro(instancia, listaHechos, ImportadorExportadorRol815100Bmv2014._idDimensionIntervalo, ImportadorExportadorRol815100Bmv2014._miembrosIntervaloDeTiempo[iSubMiembro++]);
                        }
                        
                        
                        if (listaHechos != null && listaHechos.Count > 0)
                        {
                            if (!String.IsNullOrEmpty(listaHechos[0].Valor))
                            {
                                if (listaHechos[0].EsNumerico) {

                                    var valorHecho = ReporteXBRLUtil.formatoDecimal(listaHechos[0].ValorNumerico, ReporteXBRLUtil.FORMATO_CANTIDADES_MONETARIAS);
                                    EscribirLinkNotaAlPie(docBuilder, listaHechos[0], estructuraReporte);
                                    docBuilder.Write(valorHecho);
                                }
                                else
                                {
                                    EscribirLinkNotaAlPie(docBuilder, listaHechos[0], estructuraReporte);
                                    docBuilder.Write(listaHechos[0].Valor);
                                }

                                
                            }
                        }
                        
                    }
                }
                docBuilder.EndRow();

            }
            else
            {

                var secuenciasEnHechos = OrganizarHechosPorSecuencia(instancia, hechosDeTipoPasivo);

                if (secuenciasEnHechos.Count > 0)
                {
                    
                    foreach (var secuencia in secuenciasEnHechos.Keys)
                    {
                        
                        int iMiembroSubtabla = 0;
                        foreach (var elementoPrimario in elementosPrimarios)
                        {

                            docBuilder.InsertCell();
                            docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Left;

                            docBuilder.RowFormat.HeadingFormat = false;
                            docBuilder.CellFormat.HorizontalMerge = CellMerge.None;
                            docBuilder.CellFormat.VerticalMerge = CellMerge.None;


                            docBuilder.CellFormat.Shading.BackgroundPatternColor = Color.White;
                            docBuilder.Font.Color = Color.Black;
                            

                            IList<HechoDto> listaHechos = null;

                            if (elementoPrimario.Equals(ImportadorExportadorRol815100Bmv2014._idConceptoSubtabla))
                            {
                                listaHechos = ObtenerHechosPorElementoPrimarioYSecuencia(instancia, secuenciasEnHechos[secuencia], elementoPrimario, null);
                                listaHechos = FiltrarHechosPorDimensionYMiembro(instancia, listaHechos, ImportadorExportadorRol815100Bmv2014._idDimensionIntervalo, ImportadorExportadorRol815100Bmv2014._miembrosIntervaloDeTiempo[iMiembroSubtabla++]);
                            }
                            else
                            {
                                listaHechos = ObtenerHechosPorElementoPrimarioYSecuencia(instancia, secuenciasEnHechos[secuencia], elementoPrimario, null);
                            }

                            if (listaHechos != null && listaHechos.Count > 0)
                            {
                                if (!String.IsNullOrEmpty(listaHechos[0].Valor))
                                {
                                    if (listaHechos[0].EsNumerico)
                                    {

                                        var valorHecho = ReporteXBRLUtil.formatoDecimal(listaHechos[0].ValorNumerico, ReporteXBRLUtil.FORMATO_CANTIDADES_MONETARIAS);
                                        EscribirLinkNotaAlPie(docBuilder, listaHechos[0], estructuraReporte);
                                        docBuilder.Write(valorHecho);
                                    }
                                    else
                                    {
                                        EscribirLinkNotaAlPie(docBuilder, listaHechos[0], estructuraReporte);
                                        docBuilder.Write(listaHechos[0].Valor);
                                    }


                                }
                            }

                        }
                        docBuilder.EndRow();
                    }
                    
                }


            }
        }


        /// <summary>
        /// Imprime la sección correspondiente a los títulos de los elementos primarios enviados como parámetro, a 2 renglones
        /// </summary>
        /// <param name="p"></param>
        /// <param name="docBuilder"></param>
        /// <param name="instancia"></param>
        private void ImprimirTitulosGrupoPasivo(string[] elementosPrimarios, DocumentBuilder docBuilder, Viewer.Application.Dto.DocumentoInstanciaXbrlDto instancia, String idioma)
        {

            Color colorTitulo = Color.FromArgb(ColorTituloTabla[0], ColorTituloTabla[1], ColorTituloTabla[2]);

            var primerElementoSubtabla = true;
            foreach (var idElemento in elementosPrimarios)
            {
                docBuilder.InsertCell();

                docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Center;
                docBuilder.RowFormat.HeadingFormat = true;

                docBuilder.CellFormat.Shading.BackgroundPatternColor = colorTitulo;
                docBuilder.CellFormat.PreferredWidth = PreferredWidth.Auto;
                docBuilder.Font.Color = Color.White;

                docBuilder.CellFormat.VerticalMerge = CellMerge.First;
                docBuilder.CellFormat.HorizontalMerge = CellMerge.None;

                docBuilder.Write(ReporteXBRLUtil.obtenerEtiquetaConcepto(idioma, ReporteXBRLUtil.ETIQUETA_DEFAULT, idElemento, instancia));

                if (idElemento == ImportadorExportadorRol815100Bmv2014._idConceptoSubtabla)
                {
                    //Subtabla va mezclada
                    if (primerElementoSubtabla)
                    {
                        docBuilder.CellFormat.HorizontalMerge = CellMerge.First;
                        docBuilder.CellFormat.VerticalMerge = CellMerge.None;
                        primerElementoSubtabla = false;
                        docBuilder.Write(ReporteXBRLUtil.obtenerEtiquetaConcepto(idioma, ReporteXBRLUtil.ETIQUETA_DEFAULT,
                        ImportadorExportadorRol815100Bmv2014._idDimensionIntervalo, instancia));
                    }
                    else
                    {
                        docBuilder.CellFormat.HorizontalMerge = CellMerge.Previous;
                    }
                }
            }
            docBuilder.EndRow();

            var iMiembroSubtabla = 0;
            foreach (var idElemento in elementosPrimarios)
            {
                docBuilder.InsertCell();

                docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Center;
                docBuilder.RowFormat.HeadingFormat = true;

                docBuilder.CellFormat.Shading.BackgroundPatternColor = colorTitulo;
                docBuilder.CellFormat.PreferredWidth = PreferredWidth.Auto;
                docBuilder.Font.Color = Color.White;

                docBuilder.CellFormat.VerticalMerge = CellMerge.Previous;
                docBuilder.CellFormat.HorizontalMerge = CellMerge.None;

                

                if (idElemento == ImportadorExportadorRol815100Bmv2014._idConceptoSubtabla)
                {
                    //Subtabla va mezclada
                    
                    docBuilder.CellFormat.HorizontalMerge = CellMerge.None;
                    docBuilder.CellFormat.VerticalMerge = CellMerge.None;
                        
                    docBuilder.Write(ReporteXBRLUtil.obtenerEtiquetaConcepto(idioma, ReporteXBRLUtil.ETIQUETA_DEFAULT,
                    ImportadorExportadorRol815100Bmv2014._miembrosIntervaloDeTiempo[iMiembroSubtabla++], instancia));
                   
                }
            }
            docBuilder.EndRow();
        }

        /// <summary>
        /// Consulta todos los hechos del documento que tienen la dimensión tipo de pasivo en su contexto y cuyo miembro
        /// corresponde al tipo de pasivo enviado como parámetro
        /// </summary>
        /// <param name="instancia"></param>
        /// <param name="plantillaDocumento"></param>
        /// <param name="tipoPasivoActual"></param>
        /// <returns></returns>
        private IList<HechoDto> ObtenerHechosPorDimensionYMiembro(DocumentoInstanciaXbrlDto instancia, AbaxXBRLCore.Viewer.Application.Model.IDefinicionPlantillaXbrl plantillaDocumento, string idDimension, string idItemMiembro)
        {
            var listaHechos = new List<HechoDto>();
            foreach (var contextoActual in instancia.ContextosPorId.Values)
            {
                if (ContieneDimension(idDimension, idItemMiembro, contextoActual))
                {
                    if (instancia.HechosPorIdContexto.ContainsKey(contextoActual.Id))
                    {
                        foreach (var idHecho in instancia.HechosPorIdContexto[contextoActual.Id])
                        {
                            listaHechos.Add(instancia.HechosPorId[idHecho]);
                        }
                    }
                }
            }
            return listaHechos;
        }
        /// <summary>
        /// Verifica si el contexto contiene la información de dimensión y miembro enviada como paráemtro
        /// </summary>
        /// <param name="_idDimensionTipoPasivo"></param>
        /// <param name="tipoPasivoActual"></param>
        /// <param name="contextoActual"></param>
        /// <returns></returns>
        private bool ContieneDimension(string idDimensionBuscada, string idMiembroBuscado, ContextoDto contextoActual)
        {
            var dimensionesContexto = new List<DimensionInfoDto>();
            if (contextoActual.ValoresDimension != null)
            {
                dimensionesContexto.AddRange(contextoActual.ValoresDimension);
            }
            if (contextoActual.Entidad.ValoresDimension != null)
            {
                dimensionesContexto.AddRange(contextoActual.Entidad.ValoresDimension);
            }
            foreach (var dimActual in dimensionesContexto)
            {
                if (idDimensionBuscada.Equals(dimActual.IdDimension) && idMiembroBuscado.Equals(dimActual.IdItemMiembro))
                {
                    return true;
                }
            }
            return false;
        }

        /// <summary>
        /// Filtra los hechos por concepto y opcionalmente secuencia de la dimensión typed
        /// </summary>
        /// <param name="hechos"></param>
        /// <param name="idConcpeto"></param>
        /// <param name="secuencia"></param>
        /// <returns></returns>
        private IList<HechoDto> ObtenerHechosPorElementoPrimarioYSecuencia(DocumentoInstanciaXbrlDto instancia, IList<HechoDto> hechos, string idConcpeto, string secuencia)
        {
            List<HechoDto> hechosFinales = new List<HechoDto>();
            foreach (var hecho in hechos)
            {
                if (hecho.IdConcepto.Equals(idConcpeto))
                {
                    if (secuencia == null)
                    {
                        hechosFinales.Add(hecho);
                    }
                    else
                    {
                        if (ContextoContieneSecuencia(instancia.ContextosPorId[hecho.IdContexto], ImportadorExportadorRol815100Bmv2014._idDimensionSecuencia, secuencia))
                        {
                            hechosFinales.Add(hecho);
                        }
                    }
                }
            }
            return hechosFinales;
        }
        /// <summary>
        /// Verifica si el contexto contiene la secuencia buscada en sus valores dimensionales (dimension typed)
        /// </summary>
        /// <param name="contextoDto"></param>
        /// <param name="secuencia"></param>
        /// <returns></returns>
        private bool ContextoContieneSecuencia(ContextoDto contextoDto, string idDimension, string secuencia)
        {
            var dimensionesContexto = new List<DimensionInfoDto>();
            if (contextoDto.ValoresDimension != null)
            {
                dimensionesContexto.AddRange(contextoDto.ValoresDimension);
            }
            if (contextoDto.Entidad.ValoresDimension != null)
            {
                dimensionesContexto.AddRange(contextoDto.Entidad.ValoresDimension);
            }
            foreach (var dimActual in dimensionesContexto)
            {
                if (idDimension.Equals(dimActual.IdDimension))
                {
                    if (dimActual.ElementoMiembroTipificado != null && dimActual.ElementoMiembroTipificado.Contains(">" + secuencia + "<"))
                    {
                        return true;
                    }

                }
            }
            return false;
        }
        /// <summary>
        /// Filtra un conjunto de hechos por el contenido de un item miembro de una dimensión en específico
        /// </summary>
        /// <param name="instancia"></param>
        /// <param name="listaHechos"></param>
        /// <param name="_idDimensionIntervalo"></param>
        /// <param name="p"></param>
        /// <returns></returns>
        private IList<HechoDto> FiltrarHechosPorDimensionYMiembro(DocumentoInstanciaXbrlDto instancia, IList<HechoDto> listaHechos, string idDimension, string idItemMiembro)
        {
            var hechosFinales = new List<HechoDto>();
            ContextoDto contexto = null;
            foreach (var hechoActual in listaHechos)
            {
                contexto = instancia.ContextosPorId[hechoActual.IdContexto];
                if (ContieneDimension(idDimension, idItemMiembro, contexto))
                {
                    hechosFinales.Add(hechoActual);
                }
            }
            return hechosFinales;
        }
        /// <summary>
        /// Organiza un listado de hechos que contienen información dimensional de secuencia
        /// </summary>
        /// <param name="hechosDeTipoPasivo"></param>
        /// <returns></returns>
        private IDictionary<string, IList<HechoDto>> OrganizarHechosPorSecuencia(DocumentoInstanciaXbrlDto instancia, IList<HechoDto> hechosDeTipoPasivo)
        {
            ContextoDto contexto = null;
            String secuencia = null;
            var hechosAgrupados = new Dictionary<string, IList<HechoDto>>();
            foreach (var hecho in hechosDeTipoPasivo)
            {
                contexto = instancia.ContextosPorId[hecho.IdContexto];
                secuencia = ObtenerSecuenciaDeContexto(contexto, ImportadorExportadorRol815100Bmv2014._idDimensionSecuencia);
                if (secuencia != null)
                {
                    if (!hechosAgrupados.ContainsKey(secuencia))
                    {
                        hechosAgrupados[secuencia] = new List<HechoDto>();
                    }
                    hechosAgrupados[secuencia].Add(hecho);
                }
            }
            return hechosAgrupados;
        }
        /// <summary>
        /// Obtiene el contenido del valor de secuencia de un contexto con la dimension Typed indicada
        /// en el parámetro
        /// </summary>
        /// <param name="contexto"></param>
        /// <param name="_idDimensionSecuencia"></param>
        /// <returns></returns>
        private string ObtenerSecuenciaDeContexto(ContextoDto contextoDto, string idDimension)
        {
            var dimensionesContexto = new List<DimensionInfoDto>();
            if (contextoDto.ValoresDimension != null)
            {
                dimensionesContexto.AddRange(contextoDto.ValoresDimension);
            }
            if (contextoDto.Entidad.ValoresDimension != null)
            {
                dimensionesContexto.AddRange(contextoDto.Entidad.ValoresDimension);
            }
            foreach (var dimActual in dimensionesContexto)
            {
                if (idDimension.Equals(dimActual.IdDimension))
                {
                    if (dimActual.ElementoMiembroTipificado != null)
                    {
                        int startIndex = dimActual.ElementoMiembroTipificado.IndexOf('>');
                        int endIndex = dimActual.ElementoMiembroTipificado.LastIndexOf('<');
                        if (startIndex >= 0 && endIndex >= 0 && endIndex > startIndex)
                        {
                            return dimActual.ElementoMiembroTipificado.Substring(startIndex + 1, endIndex - startIndex - 1).Trim();
                        }
                    }
                }
            }
            return null;
        }

    }
}
