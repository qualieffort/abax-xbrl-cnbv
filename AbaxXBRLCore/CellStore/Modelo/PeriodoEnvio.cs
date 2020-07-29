using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRLCore.CellStore.Modelo
{
    /// <summary>
    /// Estructura con la informaicón del periodo para un evío.
    /// </summary>
    public class PeriodoEnvio : ModeloBase
    {
        public string HashPeriodo { get; set; }
        public int Ejercicio { get; set; }
        public int Periodicidad { get; set; }
        public DateTime? Fecha { get; set; }

        public override string GeneraJsonId()
        {
            var json = "{\"Fecha\" : " + ParseJson(Fecha) + ", " +
                       "\"Ejercicio\" : " + ParseJson(Ejercicio) + ", " +
                       "\"Periodicidad\" : " + ParseJson(Periodicidad) + "}";
            return json;
        }

        public override string ToJson()
        {
            var json = "{\"Fecha\" : " + ParseJson(Fecha) + ", " +
                       "\"Ejercicio\" : " + ParseJson(Ejercicio) + ", " +
                       "\"Periodicidad\" : " + ParseJson(Periodicidad) + "}";

            return json;
        }

        public override string GetKeyPropertyName()
        {
            return "_id";
        }

        public override string GetKeyPropertyVale()
        {
            return HashPeriodo;
        }
    }
}
