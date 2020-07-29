using AbaxXBRLCore.Common.Util;
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
    /// Clase para la exportacion de un rol, esta clase acomoda de forma tabular el contenido de los hechos
    /// del rol
    /// </summary>
    public class ExportadorRolDocumentoTabular : ExportadorRolDocumentoBase
    {
        
        /// <summary>
        /// Constructor por defecto.
        /// </summary>
        public ExportadorRolDocumentoTabular()
            : base()
        { 
            TamanioLetraTituloTabla = 7;
	        TamanioLetraContenidoTabla = 7;
        }
	
	    ///
	     /// (non-Javadoc)
	     /// @see com.bmv.spread.xbrl.reportes.exportador.ExportadorRolDocumentoInstancia#exportarRolAWord(com.aspose.words.DocumentBuilder, com.hh.xbrl.abax.viewer.application.dto.DocumentoInstanciaXbrlDto, com.bmv.spread.xbrl.reportes.dto.IndiceReporteDTO, com.bmv.spread.xbrl.reportes.dto.ReporteXBRLDTO)
	     ////
	    override public void exportarRolAWord(DocumentBuilder docBuilder, DocumentoInstanciaXbrlDto instancia, IndiceReporteDTO rolAExportar,ReporteXBRLDTO estructuraReporte)  
        {
		    docBuilder.CurrentSection.PageSetup.Orientation = Orientation.Portrait;
		    docBuilder.CurrentSection.PageSetup.PaperSize = PaperSize.Letter;
		    Color colorTitulo = Color.FromArgb(ColorTituloTabla[0],ColorTituloTabla[1],ColorTituloTabla[2]);
		    docBuilder.CurrentSection.PageSetup.LeftMargin = 40;
		    docBuilder.CurrentSection.PageSetup.RightMargin = 40;
		
		    escribirEncabezado(docBuilder,instancia,estructuraReporte,true);
		
		    imprimirTituloRol(docBuilder, rolAExportar);
		
		    Table tablaActual = docBuilder.StartTable();
		
		    //docBuilder.ParagraphFormat.LineSpacing = 1.5;
		    docBuilder.ParagraphFormat.SpaceAfter = 0;
		    docBuilder.ParagraphFormat.SpaceBefore = 2;
		
		    ConceptoReporteDTO primerConcepto = null;

            if (!estructuraReporte.Roles.ContainsKey(rolAExportar.Rol))
            {
                throw new IndexOutOfRangeException("No existe el rol [" + rolAExportar.Rol + "] dentro del listado de roles del reporte.");
            }
            if (estructuraReporte.Roles.ContainsKey(rolAExportar.Rol))
            {
                foreach (ConceptoReporteDTO concepto in estructuraReporte.Roles[rolAExportar.Rol])
                {
                    if (!concepto.Abstracto)
                    {
                        primerConcepto = concepto;
                        break;
                    }
                }
            }
            if (primerConcepto == null)
            {
                LogUtil.Error("No existen conceptos configurados para el rol: " + rolAExportar.Rol);
                throw new IndexOutOfRangeException("No existen conceptos configurados para el rol: " + rolAExportar.Rol);
            }
		    establecerFuenteTituloCampo(docBuilder);
		    docBuilder.Font.Size = TamanioLetraTituloTabla;
		    docBuilder.InsertCell();
		
		    //tablaActual.StyleIdentifier = StyleIdentifier.LIGHT_GRID_ACCENT_1;
		    //tablaActual.StyleOptions = TableStyleOptions.FIRST_ROW;
		
		    docBuilder.CellFormat.Shading.BackgroundPatternColor = colorTitulo;
		    docBuilder.CellFormat.PreferredWidth = PreferredWidth.Auto;
		    docBuilder.Font.Color = Color.White;
            docBuilder.Write(estructuraReporte.ObtenValorEtiquetaReporte("ETIQUETA_CONCEPTO"));
		    foreach(String periodo  in  primerConcepto.Hechos.Keys)
		    {
			    docBuilder.InsertCell();
			    docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Center;
			    docBuilder.CellFormat.PreferredWidth = PreferredWidth.FromPoints(AnchoPreferidoColumnaDatos);
			    //docBuilder.CellFormat.Width = 35;
			    docBuilder.CellFormat.WrapText = false;
			    docBuilder.CellFormat.Shading.BackgroundPatternColor = colorTitulo;
                String descPeriodo = String.Empty;
                if (estructuraReporte.PeriodosReporte.ContainsKey(periodo))
                {
                    descPeriodo = estructuraReporte.PeriodosReporte[periodo];
                }
                else if(estructuraReporte.ParametrosReporte.ContainsKey(periodo + "_HEADER"))
                {
                    descPeriodo = (string)estructuraReporte.ParametrosReporte[(periodo + "_HEADER")];
                }
                if (estructuraReporte.Titulos.ContainsKey(periodo))
                {
                    docBuilder.Writeln(estructuraReporte.Titulos[periodo]);
                }
			    docBuilder.Write(descPeriodo.Replace("_", " - "));
		    }
		    docBuilder.RowFormat.HeadingFormat = true;
		    docBuilder.EndRow();
		
		    establecerFuenteValorCampo(docBuilder);
		    docBuilder.Font.Size = TamanioLetraContenidoTabla;
		    foreach(ConceptoReporteDTO concepto in estructuraReporte.Roles[rolAExportar.Rol])
            {
			    docBuilder.InsertCell();
			    docBuilder.CellFormat.PreferredWidth = PreferredWidth.Auto;
			    docBuilder.CellFormat.Shading.BackgroundPatternColor = Color.White;
			    docBuilder.CellFormat.WrapText = true;
			    docBuilder.Font.Color = Color.Black;
			    if(concepto.Abstracto){
				    docBuilder.Bold = true;
				    docBuilder.Font.Color = Color.White;
				    docBuilder.CellFormat.Shading.BackgroundPatternColor = colorTitulo;
			    }else{
				    docBuilder.Bold = false;
			    }
			    docBuilder.ParagraphFormat.LeftIndent = (concepto.Tabuladores!=null ? concepto.Tabuladores : 0);///3);
			    docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Left;
			    docBuilder.Write(concepto.Valor);
			    if(concepto.Abstracto){
				    for(int iCell=0; iCell<primerConcepto.Hechos.Count(); iCell++){
					
					    docBuilder.InsertCell();
					    docBuilder.CellFormat.PreferredWidth = PreferredWidth.FromPoints(AnchoPreferidoColumnaDatos);
				    }
			    }else{
				    foreach(HechoReporteDTO hecho  in  concepto.Hechos.Values)
				    {
					    docBuilder.InsertCell();
					    docBuilder.CellFormat.PreferredWidth = PreferredWidth.FromPoints(AnchoPreferidoColumnaDatos);
					
					    docBuilder.ParagraphFormat.LeftIndent = 0;
					    if(concepto.Numerico){
						    docBuilder.CellFormat.WrapText = true;
						    docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Right;
					    }else{
						    docBuilder.CellFormat.WrapText = false;
						    docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Left;
					    }
                        escribirValorHecho(docBuilder, estructuraReporte, hecho, concepto);
					
				    }
			    }
			    docBuilder.RowFormat.AllowBreakAcrossPages = true;
			    docBuilder.RowFormat.HeadingFormat = false;
			    docBuilder.EndRow();
			
		    }
		    establecerBordesGrisesTabla(tablaActual);
		    docBuilder.EndTable();
	    }

    }
}
