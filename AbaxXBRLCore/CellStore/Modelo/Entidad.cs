using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRLCore.CellStore.Modelo
{
    public class Entidad : ModeloBase
    {
        public string HashEntidad {get; set;}
        public string IdEntidad { get; set; }
        public string Esquema { get; set; }
        public string Nombre { get; set; }

        public override string GeneraJsonId()
        {
            var json = "{\"IdEntidad\" : " + ParseJson(IdEntidad) + "}";
            return json;
        }
        public override string ToJson()
        {
            var json = "{" +
                "\"IdEntidad\" : " + ParseJson(IdEntidad) + ", " +
                "\"Esquema\" : " + ParseJson(Esquema) + ", " +
                "\"Nombre\" : " + ParseJson(Nombre) +
                "}";

            return json;
        }

        public override string GetKeyPropertyName()
        {
            return "_id";
        }

        public override string GetKeyPropertyVale()
        {
            return HashEntidad;
        }
    }
}
