using AbaxXBRLCore.Reports.Dto;
using AbaxXBRLCore.Viewer.Application.Dto;
using Aspose.Words;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Reports.Exporter.Impl.Rol
{
    /// <summary>
    /// Implementación de un exportador de rol de documento de instancia que realiza la exportación
    /// de los datos de un rol, considerando que:
    /// Los datos se exportan de la forma: Titulo -> salto de párrado -> Contenido.
    /// En caso de que un hecho tenga como valor una cadena vacía entonces no se crea el campo en la exportación
    /// </summary>
    public class ExportadorRolDocumentoNotas : ExportadorRolDocumentoBase
    {
        ///
	    /// Indica si se deben de exportar las notas vacías
	    ////
        public bool ExportarNotasVacias { get; set; }
        /// <summary>
        /// Diccionario de los campos que serán impresos como notas (HTML) independientemente de su tipo de dato.
        /// </summary>
        public IDictionary<String,String> PresentarComoHTML { get; set; }
        /// <summary>
        /// Diccionario de los campos que serán impresos como notas (HTML) independientemente de su tipo de dato.
        /// </summary>
        public IDictionary<String, String> PresentarComoTextoAdosFilas { get; set; }
        /// <summary>
        /// Constructor por defecto.
        /// </summary>
        public ExportadorRolDocumentoNotas()
        {
            ExportarNotasVacias = true;
        }
	    override public void exportarRolAWord(DocumentBuilder docBuilder,DocumentoInstanciaXbrlDto instancia, IndiceReporteDTO rolAExportar,	ReporteXBRLDTO estructuraReporte) 
        {
		    docBuilder.CurrentSection.PageSetup.Orientation = Orientation.Portrait;
		    docBuilder.CurrentSection.PageSetup.PaperSize = PaperSize.Letter;
		    docBuilder.CurrentSection.PageSetup.LeftMargin = 40;
		    docBuilder.CurrentSection.PageSetup.RightMargin = 40;
		    escribirEncabezado(docBuilder,instancia,estructuraReporte,true);
		    //Titulo rol
		    imprimirTituloRol(docBuilder, rolAExportar);
		
		
		    HechoReporteDTO hecho  = null;
		    foreach(ConceptoReporteDTO concepto in estructuraReporte.Roles[rolAExportar.Rol]){
        	    if(concepto.Hechos != null){
        		    foreach(String llave  in  concepto.Hechos.Keys)
        		    {
        			    hecho = concepto.Hechos[llave];
        			    if((hecho!= null && !String.IsNullOrWhiteSpace(hecho.Valor)) || ExportarNotasVacias){
        				    //Escribir titulo campo
                            var forzarHtml = PresentarComoHTML != null && PresentarComoHTML.ContainsKey(concepto.IdConcepto);
                            if (PresentarComoTextoAdosFilas != null && PresentarComoTextoAdosFilas.ContainsKey(concepto.IdConcepto))
                            {
                                EscribirADosColumnasConceptoValor(docBuilder, concepto.IdConcepto, rolAExportar, estructuraReporte, forzarHtml);
                            }
                            else
                            {
                                escribirConceptoEnTablaNota(docBuilder, estructuraReporte, hecho, concepto, forzarHtml);
                            }
                            
        			    }
        		    }
        	    }
            }
	    }
	
    }
}
