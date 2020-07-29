using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestAbaxXBRL.Dtos.Mongo
{

    /// <summary>
    /// DTO que contiene la estructura necesaria para representar un hecho crudo
    /// JBRL
    /// </summary>
    public class HechoCrudoDTO
    {
        public string factId { get; set; }
        public string value { get; set; }
        public string conceptId { get; set; }
        public IDictionary<string,string> dimensionMap { get; set; }
        public string entity { get; set; }
        public string unit { get; set; }

        public string PrincipalesMarcasEje { get; set; }

        public string PrincipalesProductosOLineaDeProductosEje { get; set; }

        public string TipoDeIngresoEje { get; set; }
    }
}
