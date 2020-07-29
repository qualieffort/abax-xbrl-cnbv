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
    /// Clase que permite la exportación de un rol de documento de IFRS: 800003, distribución de ingreso por productos
    /// en formato word
    /// </summary>
    public class ExportadorRolDocumento800005IFRS : ExportadorRolDocumentoTabular
    {
        ///
	     /// Dimensione y miembros usados por el exportador
	     ////
	    private static String ID_DIMENSION_TIPO_INGRESO = "ifrs_mx-cor_20141205_TipoDeIngresoEje";
	    private static String[] MIEMBROS_TIPO_INGRESO = new String[]{"ifrs_mx-cor_20141205_IngresosNacionalesMiembro",
		    "ifrs_mx-cor_20141205_IngresosPorExportacionMiembro",
		    "ifrs_mx-cor_20141205_IngresosDeSubsidiariasEnElExtranjeroMiembro",
		    "ifrs_mx-cor_20141205_IngresosTotalesMiembro"};
	
	    ///
	     /// (non-Javadoc)
	     /// @see com.bmv.spread.xbrl.reportes.exportador.ExportadorRolDocumentoInstancia#exportarRolAWord(com.aspose.words.DocumentBuilder, com.hh.xbrl.abax.viewer.application.dto.DocumentoInstanciaXbrlDto, com.bmv.spread.xbrl.reportes.dto.IndiceReporteDTO, com.bmv.spread.xbrl.reportes.dto.ReporteXBRLDTO)
	     ////
	    override public void exportarRolAWord(DocumentBuilder docBuilder, DocumentoInstanciaXbrlDto instancia, IndiceReporteDTO rolAExportar, ReporteXBRLDTO estructuraReporte) {
		    escribirEncabezado(docBuilder,instancia,estructuraReporte,true);
		    imprimirTituloRol(docBuilder, rolAExportar);
		    Color colorTitulo = Color.FromArgb(ColorTituloTabla[0],ColorTituloTabla[1],ColorTituloTabla[2]);
            IList<IngresosProductoReporteDto> contenidoTabla = estructuraReporte.IngresosProducto;
		    docBuilder.CurrentSection.PageSetup.LeftMargin = 40;
		    docBuilder.CurrentSection.PageSetup.RightMargin = 40;
		    Table tablaActual = docBuilder.StartTable();

            docBuilder.Font.Color = Color.White;
		    docBuilder.ParagraphFormat.SpaceAfter = 0;
		    docBuilder.ParagraphFormat.SpaceBefore = 2;
		    establecerFuenteTituloCampo(docBuilder);
		    docBuilder.Font.Size = TamanioLetraTituloTabla;
		
		    //Titlo de dimension
		
		    docBuilder.InsertCell();
		    docBuilder.RowFormat.HeadingFormat = true;
		    docBuilder.CellFormat.Shading.BackgroundPatternColor = colorTitulo;
		    docBuilder.CellFormat.PreferredWidth = PreferredWidth.Auto;
		    docBuilder.CellFormat.HorizontalMerge = CellMerge.None;
		    int iCol=0;
		    foreach(String columna  in  MIEMBROS_TIPO_INGRESO)
		    {
			    docBuilder.InsertCell();
			    docBuilder.CellFormat.PreferredWidth = PreferredWidth.FromPoints(AnchoPreferidoColumnaDatos);
			    docBuilder.CellFormat.WrapText = false;
			    docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Center;
			    docBuilder.CellFormat.Shading.BackgroundPatternColor = colorTitulo;
			    if(iCol==0){
				    String descPeriodo = (String)estructuraReporte.ParametrosReporte[ID_DIMENSION_TIPO_INGRESO + "_HEADER"]; 
				    docBuilder.Write(descPeriodo);
				    docBuilder.CellFormat.HorizontalMerge = CellMerge.First;
			    }else{
				    docBuilder.CellFormat.HorizontalMerge = CellMerge.Previous;
			    }
			    iCol++;
		    }
		
		    docBuilder.EndRow();
		

		    docBuilder.InsertCell();
		    docBuilder.RowFormat.HeadingFormat = true;
		    docBuilder.CellFormat.Shading.BackgroundPatternColor = colorTitulo;
		    docBuilder.CellFormat.PreferredWidth = PreferredWidth.Auto;
		    docBuilder.CellFormat.HorizontalMerge = CellMerge.None;
		    foreach(String columna  in  MIEMBROS_TIPO_INGRESO)
		    {
			    docBuilder.InsertCell();
			    docBuilder.CellFormat.PreferredWidth = PreferredWidth.FromPoints(AnchoPreferidoColumnaDatos);
			    docBuilder.CellFormat.WrapText = false;
			    docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Center;
			    docBuilder.CellFormat.Shading.BackgroundPatternColor = colorTitulo;
			    String descPeriodo = (String)estructuraReporte.ParametrosReporte[columna+"_HEADER"]; 
			    docBuilder.Write(descPeriodo);
			    docBuilder.CellFormat.HorizontalMerge = CellMerge.First;
		    }
		    docBuilder.EndRow();
		
		    //Contenido de la tabla
		
		    establecerFuenteValorCampo(docBuilder);
		    docBuilder.Font.Size = TamanioLetraContenidoTabla;
		    foreach(IngresosProductoReporteDto renglon  in  contenidoTabla)
		    {
			
			    docBuilder.InsertCell();
			    docBuilder.CellFormat.PreferredWidth = PreferredWidth.Auto;
			    docBuilder.CellFormat.Shading.BackgroundPatternColor = Color.White;
			    docBuilder.CellFormat.WrapText = true;
			    docBuilder.Font.Color = Color.Black;
			    docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Left;
			    if(renglon.Marca){
				    docBuilder.Bold = true;
                    docBuilder.Font.Color = Color.White;
				    docBuilder.CellFormat.Shading.BackgroundPatternColor = colorTitulo;
				    docBuilder.ParagraphFormat.LeftIndent = 0;
				    docBuilder.Write(renglon.PrincipalesMarcas);
			    }else if(renglon.Producto){
				    docBuilder.Bold = false;
				    docBuilder.ParagraphFormat.LeftIndent = 3;
				    docBuilder.Write(renglon.PrincipalesProductos);
			    }else{
				    docBuilder.Write(renglon.PrincipalesProductos);
			    }
			
			
			    docBuilder.InsertCell();
			    docBuilder.RowFormat.HeadingFormat = false;
			    docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Right;
			    docBuilder.CellFormat.PreferredWidth = PreferredWidth.FromPoints(AnchoPreferidoColumnaDatos);
                if (renglon.IngresosNacionales != null)
                {
                    escribirLinkNotaAlPie(docBuilder, renglon.IngresosNacionales, estructuraReporte);
                    docBuilder.Write(renglon.IngresosNacionales.ValorFormateado != null ? renglon.IngresosNacionales.ValorFormateado : "");
                }

			    docBuilder.InsertCell();
			    docBuilder.CellFormat.PreferredWidth = PreferredWidth.FromPoints(AnchoPreferidoColumnaDatos);
                if (renglon.IngresosExportacion != null)
                {
                    escribirLinkNotaAlPie(docBuilder, renglon.IngresosExportacion, estructuraReporte);
                    docBuilder.Write(renglon.IngresosExportacion.ValorFormateado != null ? renglon.IngresosExportacion.ValorFormateado : "");
                }

			    docBuilder.InsertCell();
			    docBuilder.CellFormat.PreferredWidth = PreferredWidth.FromPoints(AnchoPreferidoColumnaDatos);
                if (renglon.IngresosSubsidirias != null)
                {
                    escribirLinkNotaAlPie(docBuilder, renglon.IngresosSubsidirias, estructuraReporte);
                    docBuilder.Write(renglon.IngresosSubsidirias.ValorFormateado != null ? renglon.IngresosSubsidirias.ValorFormateado : "");
                }

			    docBuilder.InsertCell();
			    docBuilder.CellFormat.PreferredWidth = PreferredWidth.FromPoints(AnchoPreferidoColumnaDatos);
                if (renglon.IngresosTotales != null)
                {
                    escribirLinkNotaAlPie(docBuilder, renglon.IngresosTotales, estructuraReporte);
                    docBuilder.Write(renglon.IngresosTotales.ValorFormateado != null ? renglon.IngresosTotales.ValorFormateado : "");
                }
			
			    docBuilder.EndRow();
			
		    }
		
		    establecerBordesGrisesTabla(tablaActual);
		
		    docBuilder.EndTable();
		
	    }
    }
}
