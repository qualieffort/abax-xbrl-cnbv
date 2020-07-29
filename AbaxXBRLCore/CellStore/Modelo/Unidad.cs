using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRLCore.CellStore.Modelo
{
    public class Unidad : ModeloBase
    {
        public string HashUnidad { get { return IdUnidad; } set { IdUnidad = value; } }
        public string IdUnidad { get; set; }
        public int Tipo { get; set; }
        public IList<Medida> Medidas { get; set; }
        public IList<Medida> MedidasNumerador { get; set; }
        public IList<Medida> MedidasDenominador { get; set; }

        public override string GeneraJsonId()
        {
            var json = 
                "{\"Tipo\" : " + Tipo.ToString() + ", " +
                "\"Medidas\" : " + ParseJson(Medidas) + ", " +
                "\"MedidasNumerador\" : " + ParseJson(MedidasNumerador) + ", " +
                "\"MedidasDenominador\" : " + ParseJson(MedidasDenominador) + "}";
                
            return json;
        }

        public override string ToJson()
        {
            var json = "{" +
                "\"IdUnidad\" : " + ParseJson(HashUnidad) + ", " +
                "\"Tipo\" : " + ParseJson(Tipo) + ", " +
                "\"Medidas\" : " + ParseJson(Medidas) + ", " +
                "\"MedidasNumerador\" : " + ParseJson(MedidasNumerador) + ", " +
                "\"MedidasDenominador\" : " + ParseJson(MedidasDenominador) +
                "}";

            return json;
        }

        public override string GetKeyPropertyName()
        {
            return "IdUnidad";
        }

        public override string GetKeyPropertyVale()
        {
            return HashUnidad;
        }
    }
}
