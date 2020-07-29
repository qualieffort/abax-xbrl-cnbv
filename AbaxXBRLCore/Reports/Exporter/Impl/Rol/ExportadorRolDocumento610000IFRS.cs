using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.Reports.Constants;
using AbaxXBRLCore.Reports.Dto;
using AbaxXBRLCore.Viewer.Application.Dto;
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
    /// Exportador de datos de documentos de instancia preparado para
    /// la exportación personalizada del rol 610000 estado de cambios en el capital contable
    /// </summary>
    public class ExportadorRolDocumento610000IFRS : ExportadorRolDocumentoBase
    {
        /// <summary>
        /// Son los únicos conceptos abstractos del link base a considerar en la generación del reporte.
        /// </summary>
        private IList<string> ConceptosAbstractosPermitidos = new List<string>()
        {
            "ifrs-full_StatementOfChangesInEquityLineItems",
            "ifrs-full_RetrospectiveApplicationAndRetrospectiveRestatementAxis",
            "ifrs-full_ChangesInEquityAbstract",
            "ifrs-full_ComprehensiveIncomeAbstract"
        };

	    override public void exportarRolAWord(DocumentBuilder docBuilder, DocumentoInstanciaXbrlDto instancia, IndiceReporteDTO rolAExportar,	ReporteXBRLDTO estructuraReporte)
        {
		
		    var colorTitulo = Color.FromArgb(ColorTituloTabla[0],ColorTituloTabla[1],ColorTituloTabla[2]);
		    docBuilder.CurrentSection.PageSetup.Orientation = Orientation.Landscape;
		    if(UsarHojaOficio)
            {
			    docBuilder.CurrentSection.PageSetup.PaperSize = PaperSize.Legal;
		    }
            else
            {
			    docBuilder.CurrentSection.PageSetup.PaperSize = PaperSize.Letter;
		    }
		    escribirEncabezado(docBuilder,instancia,estructuraReporte,true);
            var etiquetaHoja = estructuraReporte.ObtenValorEtiquetaReporte("ETIQUETA_HOJA");
            var etiquetaDe = estructuraReporte.ObtenValorEtiquetaReporte("ETIQUETA_DE");
		
		    imprimirTituloRol(docBuilder, rolAExportar);
            //var pageCount = docBuilder.Document.PageCount;

            Table tablaActual = docBuilder.StartTable();
		    ConceptoReporteDTO primerConcepto = null;
		    foreach(ConceptoReporteDTO concepto in estructuraReporte.Roles[rolAExportar.Rol])
            {
			    if(!concepto.Abstracto){
				    primerConcepto = concepto;
				    break;
			    }
		    }
		    int iCol = 0;
		    HechoReporteDTO hecho = null;
		    List<String> columnas = new List<String>();
            foreach (String periodoItera in primerConcepto.Hechos.Keys)
            {
                columnas.Add(periodoItera);
            }
            String periodo = null;
		    int hoja = 1;
		    int hojas = (int)Math.Ceiling((double)columnas.Count()/(double)ColumnasPorHoja);
		    while(iCol< columnas.Count()){
                
                int iColFinalInicio = iCol;
			    int iColSeccionActual = iCol;
			    //Fila encabezado
			    docBuilder.ParagraphFormat.SpaceAfter = 0;
			    docBuilder.ParagraphFormat.SpaceBefore = 2;
			    establecerFuenteTituloCampo(docBuilder);
			    docBuilder.Font.Size = TamanioLetraTituloTabla;
			
			    docBuilder.InsertCell();
			    docBuilder.CellFormat.Shading.BackgroundPatternColor = colorTitulo;
			    docBuilder.CellFormat.PreferredWidth = PreferredWidth.FromPoints(AnchoPreferidoColumnaTitulos);
			
			    docBuilder.CellFormat.HorizontalMerge = CellMerge.None;
			
			    docBuilder.InsertCell();
			    docBuilder.CellFormat.Shading.BackgroundPatternColor = colorTitulo;
			    docBuilder.CellFormat.PreferredWidth =PreferredWidth.FromPoints(AnchoPreferidoColumnaDatos);
			    docBuilder.CellFormat.HorizontalMerge = CellMerge.First;
                docBuilder.Font.Color = Color.White;
			    docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Center;
			    docBuilder.Write((String)estructuraReporte.ParametrosReporte["ifrs-full_ComponentsOfEquityAxis_HEADER"]);
			
			    for(; iColSeccionActual+1 < iColFinalInicio + ColumnasPorHoja && iColSeccionActual+1<columnas.Count() ;iColSeccionActual++){
				    docBuilder.InsertCell();
				    docBuilder.CellFormat.Shading.BackgroundPatternColor = colorTitulo;
				    docBuilder.CellFormat.PreferredWidth =PreferredWidth.FromPoints(AnchoPreferidoColumnaDatos);
				    docBuilder.CellFormat.HorizontalMerge = CellMerge.Previous;
			    }
			    docBuilder.EndRow();
			
			    docBuilder.InsertCell();
			    docBuilder.CellFormat.Shading.BackgroundPatternColor = colorTitulo;
			    docBuilder.CellFormat.PreferredWidth =PreferredWidth.FromPoints(AnchoPreferidoColumnaTitulos);
			    docBuilder.CellFormat.HorizontalMerge = CellMerge.None;
			    docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Center;
                docBuilder.Font.Color = Color.White;
			    docBuilder.Font.Bold = true;
			    if(hojas > 1){

				    docBuilder.Write(etiquetaHoja + " "+ hoja + " " + etiquetaDe + " " + hojas);
			    }
			
			
			    iColSeccionActual = iCol;
			    for(; iColSeccionActual < iColFinalInicio + ColumnasPorHoja && iColSeccionActual<columnas.Count() ;iColSeccionActual++){
				    periodo = columnas[iColSeccionActual];
				    docBuilder.InsertCell();
				    docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Center;
				    docBuilder.CellFormat.HorizontalMerge = CellMerge.None;
				    docBuilder.CellFormat.PreferredWidth =PreferredWidth.FromPoints(AnchoPreferidoColumnaDatos);
				    docBuilder.CellFormat.WrapText = true;
				    docBuilder.CellFormat.Shading.BackgroundPatternColor = colorTitulo;
				    String descPeriodo = (String)estructuraReporte.ParametrosReporte[periodo + "_HEADER"];
				    docBuilder.Writeln(descPeriodo);
				    iCol++;
			    }
			    docBuilder.CellFormat.PreferredWidth = PreferredWidth.Auto;
			    docBuilder.EndRow();
			    foreach(ConceptoReporteDTO concepto in estructuraReporte.Roles[rolAExportar.Rol])
                {
                    if (concepto.Abstracto && !ConceptosAbstractosPermitidos.Contains(concepto.IdConcepto))
                    {
                        continue;
                    }
                    //LogUtil.Info("Exportador == > Concepto:[" + concepto.IdConcepto + "],\t\t\tAbstracto:[" + concepto.Abstracto + "],\t\thechos:[" + concepto.Hechos.Count() + "]");
				    iColSeccionActual = iColFinalInicio;
				
				    docBuilder.InsertCell();
				    docBuilder.CellFormat.HorizontalMerge = CellMerge.None;
				    if(hojas > 1){
					    docBuilder.CellFormat.PreferredWidth =PreferredWidth.FromPoints(AnchoPreferidoColumnaTitulos);
				    }else{
					    docBuilder.CellFormat.PreferredWidth = PreferredWidth.Auto;
				    }
				
				    docBuilder.CellFormat.Shading.BackgroundPatternColor = Color.White;
				    docBuilder.Font.Color = Color.Black;
				    if(concepto.Abstracto){
					    docBuilder.Bold = true;
					    docBuilder.Font.Color = Color.White;
					    docBuilder.CellFormat.Shading.BackgroundPatternColor = colorTitulo;
				    }else{
					    docBuilder.Bold = false;
				    }
				    docBuilder.ParagraphFormat.LeftIndent = (concepto.Tabuladores!=null?concepto.Tabuladores:0);///3);
				    docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Left;
				    docBuilder.Write(concepto.Valor);
				
				    for(; iColSeccionActual < (iColFinalInicio + ColumnasPorHoja) && iColSeccionActual<columnas.Count() ;iColSeccionActual++){
					    docBuilder.InsertCell();
                        docBuilder.CellFormat.PreferredWidth = PreferredWidth.FromPoints(AnchoPreferidoColumnaDatos);
					    docBuilder.ParagraphFormat.LeftIndent = 0;
					    docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Right;
					    docBuilder.CellFormat.HorizontalMerge = CellMerge.None;
					
					    if(concepto.Abstracto){
						    docBuilder.CellFormat.Shading.BackgroundPatternColor = colorTitulo;
					    }else{
                            //LogUtil.Info("ExportadorEntro == > Concepto:[" + concepto.IdConcepto + "],\t\t\tSeccionActual:[" + columnas[iColSeccionActual] + "],\t\thecho:[" + hecho == null ? "sinHecho" : hecho.ValorFormateado ?? "null" + "]");
                            docBuilder.CellFormat.Shading.BackgroundPatternColor = Color.White;
						    docBuilder.Font.Color = Color.Black;
                            if (concepto.Hechos.ContainsKey(columnas[iColSeccionActual]))
                            {
                                hecho = concepto.Hechos[columnas[iColSeccionActual]];
                            }
                            else
                            {
                                hecho = null;
                            }
						    
                            if (hecho != null && hecho.ValorFormateado != null)
                            {
                                escribirLinkNotaAlPie(docBuilder, hecho, estructuraReporte);
                                docBuilder.Write(hecho.ValorFormateado);
                            }
					    }
				    }

                   

				    if(hojas > 1){
					    docBuilder.CellFormat.PreferredWidth = PreferredWidth.Auto;
				    }
				
				    docBuilder.EndRow();
                    
                }
			    if(iCol>=columnas.Count()){
				    break;
			    }
			    tablaActual.SetBorders(LineStyle.Single, 1,ReportConstants.DEFAULT_BORDER_GREY_COLOR);
			    docBuilder.EndTable();
                if(estructuraReporte.Roles[rolAExportar.Rol].Count < 25)
                {
                    docBuilder.InsertBreak(BreakType.PageBreak);
                }
                /*if (pageCount == docBuilder.Document.PageCount)
                {
                    docBuilder.InsertBreak(BreakType.PageBreak);
                }
                pageCount = docBuilder.Document.PageCount;
                */
                tablaActual = docBuilder.StartTable();
			    hoja++;
		    }
            tablaActual.SetBorders(LineStyle.Single, 1, ReportConstants.DEFAULT_BORDER_GREY_COLOR);
		    docBuilder.EndTable();
	    }
    }
}
