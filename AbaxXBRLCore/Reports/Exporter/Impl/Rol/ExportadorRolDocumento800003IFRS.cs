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
    /// la exportación personalizada del rol 800003 posición en moneda extranjera
    /// </summary>
    public class ExportadorRolDocumento800003IFRS : ExportadorRolDocumentoTabular
    {
        /// <summary>
        /// Lista de conceptos abstractos que se permiten mostrar en los reportes.
        /// </summary>
        private IList<string> ConceptosAbstractosPermitidos = new List<string>() 
        {
            "ifrs_mx-cor_20141205_PosicionEnMonedaExtranjeraSinopsis",
            "ifrs_mx-cor_20141205_ActivoMonetarioSinopsis",
            "ifrs_mx-cor_20141205_PasivoMonetarioSinopsis"
        };

        ///
	    /// (non-Javadoc)
	    /// @see com.bmv.spread.xbrl.reportes.exportador.ExportadorRolDocumentoInstancia#exportarRolAWord(com.aspose.words.DocumentBuilder, com.hh.xbrl.abax.viewer.application.dto.DocumentoInstanciaXbrlDto, com.bmv.spread.xbrl.reportes.dto.IndiceReporteDTO, com.bmv.spread.xbrl.reportes.dto.ReporteXBRLDTO)
	    ////
	    override public void exportarRolAWord(DocumentBuilder docBuilder, DocumentoInstanciaXbrlDto instancia, IndiceReporteDTO rolAExportar, ReporteXBRLDTO estructuraReporte)  {
		
		    Color colorTitulo = Color.FromArgb(ColorTituloTabla[0],ColorTituloTabla[1],ColorTituloTabla[2]);
		    docBuilder.CurrentSection.PageSetup.Orientation = Orientation.Portrait;
		    docBuilder.CurrentSection.PageSetup.LeftMargin = 40;
		    docBuilder.CurrentSection.PageSetup.RightMargin = 40;
		    escribirEncabezado(docBuilder,instancia,estructuraReporte,true);
		    imprimirTituloRol(docBuilder, rolAExportar);
		
		    //Escribir nota inicial
		    IList<ConceptoReporteDTO> conceptos = estructuraReporte.Roles[rolAExportar.Rol];
		    HechoReporteDTO hechoNota = null;
            var conceptoNota = "ifrs_mx-cor_20141205_InformacionARevelarSobrePosicionMonetariaEnMonedaExtranjeraBloqueDeTexto";
		    foreach(var concepto in conceptos)
            {
                if (!concepto.IdConcepto.Equals(conceptoNota))
                {
                    continue;
                }
                foreach(var llave in concepto.Hechos.Keys)
                {
                    hechoNota = concepto.Hechos[llave];
                    if (hechoNota != null)
                    {
                        if (String.IsNullOrWhiteSpace(hechoNota.Valor) && instancia.HechosPorIdConcepto.ContainsKey(conceptoNota)) 
                        {
                            var idsHechos = instancia.HechosPorIdConcepto[conceptoNota];
                            foreach (var idHecho in idsHechos) 
                            {
                                if (instancia.HechosPorId.ContainsKey(idHecho)) 
                                {
                                    var hechoReal = instancia.HechosPorId[idHecho];
                                    if (!String.IsNullOrWhiteSpace(hechoReal.Valor))
                                    {
                                        hechoNota.Valor = hechoReal.Valor;
                                        break;
                                    }
                                }
                            }
                        }
                        if (!String.IsNullOrWhiteSpace(hechoNota.Valor)) 
                        {
                            escribirConceptoEnTablaNota(docBuilder, estructuraReporte, hechoNota, concepto);
                            break;
                        }
			        }
                }
                
		    }
		    //conceptos.Remove(0);
		
		    conceptos = ((List<ConceptoReporteDTO>)conceptos).GetRange(1, conceptos.Count() -1 );
		
		
		    Table tablaActual = docBuilder.StartTable();
		    ConceptoReporteDTO primerConcepto = null;
		    foreach(ConceptoReporteDTO concepto  in  conceptos)
		    {//estructuraReporte.Roles[rolAExportar.Rol]){
			    if(!concepto.Abstracto){
				    primerConcepto = concepto;
				    break;
			    }
		    }
            docBuilder.Font.Color = Color.White;
		    docBuilder.ParagraphFormat.SpaceAfter = 0;
		    docBuilder.ParagraphFormat.SpaceBefore = 2;
		    establecerFuenteTituloCampo(docBuilder);
		    docBuilder.Font.Size = TamanioLetraTituloTabla;
		
		    //Titlo de dimension
		
		    docBuilder.InsertCell();
		    docBuilder.CellFormat.Shading.BackgroundPatternColor = colorTitulo;
		    docBuilder.CellFormat.PreferredWidth = PreferredWidth.Auto;
		    docBuilder.CellFormat.HorizontalMerge = CellMerge.None;
		    int iCol=0;
		    foreach(String columna  in  primerConcepto.Hechos.Keys)
		    {
			    docBuilder.InsertCell();
			    docBuilder.CellFormat.PreferredWidth = PreferredWidth.FromPoints(AnchoPreferidoColumnaDatos);
			    docBuilder.CellFormat.WrapText = false;
			    docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Center;
			    docBuilder.CellFormat.Shading.BackgroundPatternColor = colorTitulo;
			    if(iCol==0){
				    String descPeriodo = (String)estructuraReporte.ParametrosReporte["ifrs_mx-cor_20141205_MonedasEje_HEADER"]; 
				    docBuilder.Write(descPeriodo);
				    docBuilder.CellFormat.HorizontalMerge = CellMerge.First;
			    }else{
				    docBuilder.CellFormat.HorizontalMerge = CellMerge.Previous;
			    }
			    iCol++;
		    }
		
		    docBuilder.EndRow();
		
		    docBuilder.InsertCell();
		    docBuilder.CellFormat.Shading.BackgroundPatternColor = colorTitulo;
		    docBuilder.CellFormat.PreferredWidth = PreferredWidth.Auto;
		    docBuilder.CellFormat.HorizontalMerge = CellMerge.None;
		    foreach(String columna  in  primerConcepto.Hechos.Keys)
		    {
			    docBuilder.InsertCell();
			    docBuilder.CellFormat.PreferredWidth = PreferredWidth.FromPoints(AnchoPreferidoColumnaDatos);
			    docBuilder.CellFormat.WrapText = false;
			    docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Center;
			    docBuilder.CellFormat.Shading.BackgroundPatternColor = colorTitulo;
			    String descPeriodo = (String)estructuraReporte.ParametrosReporte[columna + "_HEADER"]; 
			    docBuilder.Write(descPeriodo);
			    docBuilder.CellFormat.HorizontalMerge = CellMerge.First;
		    }
		    docBuilder.EndRow();
		
		    establecerFuenteValorCampo(docBuilder);
		    docBuilder.Font.Size = TamanioLetraContenidoTabla;
		    foreach(ConceptoReporteDTO concepto  in  conceptos)
		    {
                if (concepto.Abstracto && !ConceptosAbstractosPermitidos.Contains(concepto.IdConcepto))
                {
                    continue;
                }
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
			    docBuilder.ParagraphFormat.LeftIndent = (concepto.Tabuladores < 0 ? concepto.Tabuladores : 0);
			    docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Left;
			    docBuilder.Write(concepto.Valor);
			    if(concepto.Abstracto)
                {
				    for(int iCell=0; iCell<primerConcepto.Hechos.Count(); iCell++)
                    {
					
					    docBuilder.InsertCell();
					    docBuilder.CellFormat.PreferredWidth =PreferredWidth.FromPoints(AnchoPreferidoColumnaDatos);
				    }
			    }else{
				    foreach(HechoReporteDTO hecho  in  concepto.Hechos.Values)
				    {
					    docBuilder.InsertCell();
					    docBuilder.CellFormat.PreferredWidth =PreferredWidth.FromPoints(AnchoPreferidoColumnaDatos);
					
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
		
		
		    tablaActual.SetBorders(LineStyle.Single, 1, ReportConstants.DEFAULT_BORDER_GREY_COLOR);
		    docBuilder.EndTable();
	    }
    }
}
