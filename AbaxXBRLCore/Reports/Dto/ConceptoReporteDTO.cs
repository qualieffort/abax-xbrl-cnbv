using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Reports.Dto
{
    /// <summary>
    /// 
    /// </summary>
    public class ConceptoReporteDTO
    {

	    public String IdConcepto  {get; set;}
	
	    public String Valor {get; set;}
	
	    public String TipoDato {get; set;}
	
	    public Boolean  Numerico {get; set;}
	
	    public Boolean  Abstracto {get; set;}
	
	    public Int32 Tabuladores {get; set;}
	
	    public String Etiqueta {get; set;}

	    public IDictionary<String, HechoReporteDTO> Hechos {get; set;}
        /// <summary>
        /// Conjunto de atributos aidicionales definidos en un concepto de la taxonomía
        /// </summary>
        public IDictionary<String, String> AtributosAdicionales { get; set; }
        /// <summary>
        /// Determina si el concepto pertenece a la definiciónde un hipercubo.
        /// </summary>
        public Boolean EsHipercubo { get; set; }

    }
}
