using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.Reports.Util;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Reports.Dto
{
    /// <summary>
    /// Implementación de un Data Transfer Object el cual representa un renglón de detalle del reporte Desglose de Créditos.
    /// </summary>
    public class DesgloseDeCreditosReporteDto
    {
        
	    /// <summary>
	    /// Indica que este renglón es el título de un elemento abstracto 
	    /// </summary>
	    public Boolean TituloAbstracto { get; set;}
	

	    /// <summary>
	    /// Inidica que este renglón contiene totales 
	    /// </summary>
	    public Boolean Total { get; set;}


	    /// <summary>
	    /// El título del renglón detalle del reporte 
	    /// </summary>
	    public String Titulo { get; set;}


	    /// <summary>
	    /// Indica si se trata de institución extranjera 
	    /// </summary>
	    //public Boolean InstitucionExtranjera { get; set;}
        public HechoReporteDTO InstitucionExtranjera { get; set; }

	    /// <summary>
	    /// La fecha en que se firma el contrato 
	    /// </summary>
        public HechoReporteDTO FechaFirmaContrato { get; set; }

	    /// <summary>
	    /// La fecha en que vencerá el crédito 
	    /// </summary>
        public HechoReporteDTO FechaVencimiento { get; set; }

	    /// <summary>
	    /// La tasa de interés del crédito 
	    /// </summary>
        public HechoReporteDTO TasaInteres { get; set; }

	    /// <summary>
	    /// El monto de crédito en moneda nacional formateado con vencimiento al año actual 
	    /// </summary>
        public HechoReporteDTO MonedaNacionalAnioActual { get; set; }

	    /// <summary>
	    /// El monto de crédito en moneda nacional formateado con vencimiento a un año 
	    /// </summary>
        public HechoReporteDTO MonedaNacionalUnAnio { get; set; }

	    /// <summary>
	    /// El monto de crédito en moneda nacional formateado con vencimiento a dos años 
	    /// </summary>
        public HechoReporteDTO MonedaNacionalDosAnio { get; set; }


	    /// <summary>
	    /// El monto de crédito en moneda nacional formateado con vencimiento a tres años 
	    /// </summary>
        public HechoReporteDTO MonedaNacionalTresAnio { get; set; }

	    /// <summary>
	    /// El monto de crédito en moneda nacional formateado con vencimiento a cuatro años 
	    /// </summary>
        public HechoReporteDTO MonedaNacionalCuatroAnio { get; set; }

	    /// <summary>
	    /// El monto de crédito en moneda nacional formateado con vencimiento a cinco o más años 
	    /// </summary>
        public HechoReporteDTO MonedaNacionalCincoMasAnio { get; set; }

	    /// <summary>
	    /// El monto de crédito en moneda extranjera formateado con vencimiento al año actual 
	    /// </summary>
        public HechoReporteDTO MonedaExtranjeraAnioActual { get; set; }

	    /// <summary>
	    /// El monto de crédito en moneda extranjera formateado con vencimiento a un año 
	    /// </summary>
        public HechoReporteDTO MonedaExtranjeraUnAnio { get; set; }

	    /// <summary>
	    /// El monto de crédito en moneda extranjera formateado con vencimiento a dos años 
	    /// </summary>
        public HechoReporteDTO MonedaExtranjeraDosAnio { get; set; }

	    /// <summary>
	    /// El monto de crédito en moneda extranjera formateado con vencimiento a tres años 
	    /// </summary>
        public HechoReporteDTO MonedaExtranjeraTresAnio { get; set; }

	    /// <summary>
	    /// El monto de crédito en moneda extranjera formateado con vencimiento a cuatro años 
	    /// </summary>
        public HechoReporteDTO MonedaExtranjeraCuatroAnio { get; set; }

	    /// <summary>
	    /// El monto de crédito en moneda extranjera formateado con vencimiento a cinco o más años 
	    /// </summary>
        public HechoReporteDTO MonedaExtranjeraCincoMasAnio { get; set; }

	
	     /// <summary>

	     /// <summary>
	     /// (non-Javadoc)
	     /// </summary>
	     /// </summary>
	     ///  @see java.lang.Object#toString()
	     
	    override public String ToString() {

            StringBuilder buffer = new StringBuilder();
		    
		
		    buffer.Append("T: " + Titulo + " A: " + TituloAbstracto + " Total: " + Total +"\t\t\t");
		    if(!TituloAbstracto) {
			    if(InstitucionExtranjera != null) {
				    buffer.Append("\tIE: " + InstitucionExtranjera.Valor);
			    }
			    if(FechaVencimiento != null) {
                    buffer.Append("\tFV: " + DateUtil.ToFormatString(DateReporteUtil.obtenerFecha(FechaVencimiento.Valor), DateUtil.YMDateFormat));
			    }
			    if(FechaFirmaContrato != null) {
                    buffer.Append("\tFFC: " + DateUtil.ToFormatString(DateReporteUtil.obtenerFecha(FechaFirmaContrato.Valor), DateUtil.YMDateFormat));
			    }
			    if(TasaInteres != null) {
				    buffer.Append("\tTI: " + TasaInteres);
			    }
			    buffer.Append("\t\t||\t");
			    if(MonedaNacionalAnioActual != null) {
				    buffer.Append("\tMNAA: " + MonedaNacionalAnioActual.ValorNumerico.ToString());
			    }
			    if(MonedaNacionalUnAnio != null) {
				    buffer.Append("\tMN1A: " + MonedaNacionalUnAnio.ValorNumerico.ToString());
			    }
			    if(MonedaNacionalDosAnio != null) {
				    buffer.Append("\tMN2A: " + MonedaNacionalDosAnio.ValorNumerico.ToString());
			    }
			    if(MonedaNacionalTresAnio != null) {
				    buffer.Append("\tMN3A: " + MonedaNacionalTresAnio.ValorNumerico.ToString());
			    }
			    if(MonedaNacionalCuatroAnio != null) {
				    buffer.Append("\tMN4A: " + MonedaNacionalCuatroAnio.ValorNumerico.ToString());
			    }
			    if(MonedaNacionalCincoMasAnio != null) {
				    buffer.Append("\tMN5A: " + MonedaNacionalCincoMasAnio.ValorNumerico.ToString());
			    }
			    if(MonedaExtranjeraAnioActual != null) {
                    buffer.Append("\tMEAA: " + MonedaExtranjeraAnioActual.ValorNumerico.ToString());
			    }
			    if(MonedaExtranjeraUnAnio != null) {
				    buffer.Append("\tME1A: " + MonedaExtranjeraUnAnio.ValorNumerico.ToString());
			    }
			    if(MonedaExtranjeraDosAnio != null) {
				    buffer.Append("\tME2A: " + MonedaExtranjeraDosAnio.ValorNumerico.ToString());
			    }
			    if(MonedaExtranjeraTresAnio != null) {
				    buffer.Append("\tME3A: " + MonedaExtranjeraTresAnio.ValorNumerico.ToString());
			    }
			    if(MonedaExtranjeraCuatroAnio != null) {
				    buffer.Append("\tME4A: " + MonedaExtranjeraCuatroAnio.ValorNumerico.ToString());
			    }
			    if(MonedaExtranjeraCincoMasAnio != null) {
				    buffer.Append("\tME5A: " + MonedaExtranjeraCincoMasAnio.ValorNumerico.ToString());
			    }
		    }
			
		    return buffer.ToString();
	    }

    }
}
