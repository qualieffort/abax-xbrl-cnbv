using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRLCore.CellStore.Modelo
{
    public class Etiqueta : ModeloBase
    {
        public string HashEtiqueta { get; set; }
        public string Idioma { get; set; }
        public string Rol { get; set; }
        public string Valor { get; set; }

        public override string GeneraJsonId()
        {
            var json = 
               "{\"Idioma\" : " + ParseJson(Idioma) + ", " +
                "\"Rol\" : " + ParseJson(Rol) + ", " +
                "\"Valor\" : " + ParseJson(Valor) + "}";
            return json;
        }

        public override string GeneraJsonOrdenamiento()
        {
            var json =
                "{\"Idioma\" : " + ParseJson(Idioma) + ", " +
                 "\"Rol\" : " + ParseJson(Rol) + ", " +
                 "\"Valor\" : " + ParseJson(Valor) + "}";
            return json;
        }

        public override string ToJson()
        {
            var json = "{" +
                "\"Idioma\" : " + ParseJson(Idioma) + ", " +
                "\"Rol\" : " + ParseJson(Rol) + ", " +
                "\"Valor\" : " + ParseJson(Valor) +
                "}";

            return json;
        }

        public override string GetKeyPropertyName()
        {
            return "_id";
        }

        public override string GetKeyPropertyVale()
        {
            return HashEtiqueta;
        }
    }
}
