using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRLCore.ExportGeneric
{
    /// <summary>
    /// Clase que contiene información especifica de una concepto con sus dimensiones y hechos
    /// </summary>
    public class EstructuraConceptoReporte
    {
        public string ConceptoId { get; set; }
        public string NombreConcepto { get; set; }
        public int NivelIndentacion { get; set; }
        public bool? EsAbstracto { get; set; }
        public IDictionary<string,EstructuraDimensionReporte> Dimensiones { get; set; }
        public EstructuraHechoReporte[] Hechos { get; set; }
    }

}
