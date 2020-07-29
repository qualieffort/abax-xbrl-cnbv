using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRLCore.CellStore.Modelo
{
    /// <summary>
    /// Estructura con los datos de una tupla.
    /// </summary>
    public class Tupla : ModeloBase
    {
        public string HashTupla { get; set; }
        public long IdInterno { get; set; }
        public long IdPadre { get; set; }

        public override string GeneraJsonId()
        {
            var json = "{" +
                "\"IdInterno\" : " + ParseJson(IdInterno) + ", " +
                "\"IdPadre\" : " + ParseJson(IdPadre) +
                "}";

            return json;
        }
        public override string ToJson()
        {
            var json = "{" +
                "\"IdInterno\" : " + ParseJson(IdInterno) + ", " +
                "\"IdPadre\" : " + ParseJson(IdPadre) + 
                "}";

            return json;
        }

        public override string GetKeyPropertyName()
        {
            return "_id";
        }

        public override string GetKeyPropertyVale()
        {
            return HashTupla;
        }
    }
}
