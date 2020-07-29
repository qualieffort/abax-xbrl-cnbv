using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRLCore.CellStore.Modelo
{
    public class Periodo : ModeloBase
    {
        public string HashPeriodo { get; set; }
        public int TipoPeriodo {get; set;}
        public DateTime? FechaInicio {get; set;}
        public DateTime? FechaFin {get; set;}
        public DateTime? FechaInstante {get; set;}
        public string Alias {get; set;}

        public override string GeneraJsonId()
        {
            var json = "{\"TipoPeriodo\" : " + TipoPeriodo.ToString() + ", " +
                       "\"FechaInicio\" : " + ParseJson(FechaInicio) + ", " +
                       "\"FechaFin\" : " + ParseJson(FechaFin) + ", " +
                       "\"FechaInstante\" : " + ParseJson(FechaInstante) + "}";
            return json;
        }

        public override string ToJson()
        {
            var json = "{" +
                "\"TipoPeriodo\" : " + ParseJson(TipoPeriodo) + ", " +
                "\"FechaInicio\" : " + ParseJson(FechaInicio) + ", " +
                "\"FechaFin\" : " + ParseJson(FechaFin) + ", " +
                "\"FechaInstante\" : " + ParseJson(FechaInstante) + ", " +
                "\"Alias\" : " + ParseJson(Alias) + "}";

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
