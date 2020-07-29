using AbaxXBRLCore.Common.Util;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRLCore.CellStore.Modelo
{
    public class Concepto : ModeloBase
    {
        public string HashConcepto { get; set; }
        public string IdConcepto { get; set; }
        public int Tipo { get; set; }
        public int Balance { get; set; }
        public string TipoDato { get; set; }
        public string Nombre { get; set; }
        public string EspacioNombres { get; set; }
        public IList<Etiqueta> Etiquetas { get; set; }

        public override string GeneraJsonId()
        {
            var json = "{\"EspacioNombres\" : " + ParseJson(EspacioNombres) + ", " +
                        "\"IdConcepto\" : " + ParseJson(IdConcepto) + "}";
            return json;
        }

        public override string ToJson()
        {
            var json = "{" +
                "\"IdConcepto\" : " + ParseJson(IdConcepto) + ", " +
                "\"EspacioNombres\" : " + ParseJson(EspacioNombres) + ", " +
                "\"Tipo\" : " + ParseJson(Tipo) + ", " +
                "\"Balance\" : " + ParseJson(Balance) + ", " +
                "\"TipoDato\" : " + ParseJson(TipoDato) + ", " +
                "\"Nombre\" : " + ParseJson(Nombre) + ", " +
                "\"Etiquetas\" : " + ParseJson(Etiquetas) +
                "}";

            return json;
        }



        public override string GetKeyPropertyName()
        {
            return "_id";
        }

        public override string GetKeyPropertyVale()
        {
            return HashConcepto;
        }
    }
}
