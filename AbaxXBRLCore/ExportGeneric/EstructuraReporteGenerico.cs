using AbaxXBRLCore.ExportGeneric;
using System.Collections.Generic;

namespace AbaxXBRLCore.Export
{
    /// <summary>
    /// Clase que contiene agrupacion de filtros con el listado de conceptos por rol  
    /// </summary>
    public class EstructuraReporteGenerico
    {
        public string Idioma { get; set; }
        public bool AgruparPorUnidad { get; set; }
        public List<EstructuraRolReporte> ReporteGenericoPorRol { get; set; }
    }

   

   

 

   
   

}






