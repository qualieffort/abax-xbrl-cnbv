using AbaxXBRLCore.Common.Constants;
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
    /// Implementación de un exportador de rol personalizado
    /// para el formato 110000 de las taxonomías IFRS
    /// </summary>
    public class ExportadorRolArPros411000 : ExportadorRolDocumentoBase
    {
       
	   override public void exportarRolAWord(DocumentBuilder docBuilder, DocumentoInstanciaXbrlDto instancia, IndiceReporteDTO rolAExportar, ReporteXBRLDTO estructuraReporte)  
       {
		
		    IList<ConceptoReporteDTO> listaConceptos = estructuraReporte.Roles[rolAExportar.Rol];
		    docBuilder.CurrentSection.PageSetup.Orientation = Orientation.Portrait;
		    docBuilder.CurrentSection.PageSetup.PaperSize = PaperSize.Letter;
		    escribirEncabezado(docBuilder,instancia,estructuraReporte,true);
		    imprimirTituloRol(docBuilder, rolAExportar);
		
		    Table tablaActual = docBuilder.StartTable();
		    docBuilder.ParagraphFormat.SpaceAfter = 5;
		    docBuilder.ParagraphFormat.SpaceBefore = 5;

            HechoReporteDTO hecho = null;
            foreach (ConceptoReporteDTO concepto in estructuraReporte.Roles[rolAExportar.Rol])
            {
                if (concepto.Hechos != null)
                {
                    foreach (String llave in concepto.Hechos.Keys)
                    {
                        hecho = concepto.Hechos[llave];
                        if ((hecho != null && !String.IsNullOrWhiteSpace(hecho.Valor)))
                        {
                            escribirADosColumnasConceptoValor(docBuilder, concepto.IdConcepto, rolAExportar, estructuraReporte);
                            //Escribir titulo campo
                          //  escribirConceptoEnTablaNota(docBuilder, estructuraReporte, hecho, concepto);
                         }
                    }
                }
            }
            tablaActual.SetBorders(LineStyle.None, 0, Color.Black);
            tablaActual.SetBorder(BorderType.Horizontal, LineStyle.Single, .75, Color.DarkGray, true);
            tablaActual.SetBorder(BorderType.Bottom, LineStyle.Single, .75, Color.DarkGray, true);
            docBuilder.EndTable();


        }
	
	    ///
	    /// Escribe NOMBRE : VALOR de un hecho en 2 columnas y una tercera más de relleno
	    ///
	    private void escribirATresColumnasConceptoValor(DocumentBuilder docBuilder, String idConcepto, IndiceReporteDTO rolAExportar, ReporteXBRLDTO estructuraReporte)  
        {
		
		    docBuilder.InsertCell();
		    establecerFuenteTituloCampo(docBuilder);
		    escribirTituloConcepto(docBuilder,idConcepto, estructuraReporte.Roles[rolAExportar.Rol]);
		    docBuilder.Write(": ");
		    docBuilder.InsertCell();
		    establecerFuenteValorCampo(docBuilder);
            escribirValorHecho(docBuilder, estructuraReporte, estructuraReporte.Roles[rolAExportar.Rol], idConcepto);
		    docBuilder.InsertCell();
		    docBuilder.EndRow();
	    }
	
	
	    /// <summary>
	    /// Escribe NOMBRE : VALOR de un hecho en 2 columnas 
	    /// </summary>
	    private void escribirADosColumnasConceptoValor(DocumentBuilder docBuilder, String idConcepto, IndiceReporteDTO rolAExportar, ReporteXBRLDTO estructuraReporte)  
        {
		
		    docBuilder.InsertCell();
		    establecerFuenteTituloCampo(docBuilder);
		    escribirTituloConcepto(docBuilder,idConcepto, estructuraReporte.Roles[rolAExportar.Rol]);
		    docBuilder.Write(": ");
		    docBuilder.InsertCell();
		    establecerFuenteValorCampo(docBuilder);
            escribirValorHecho(docBuilder, estructuraReporte, estructuraReporte.Roles[rolAExportar.Rol], idConcepto);
		    docBuilder.EndRow();
	    }
    }
}
