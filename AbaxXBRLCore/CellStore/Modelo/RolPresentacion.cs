using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRLCore.CellStore.Modelo
{
    public class RolPresentacion : ModeloBase
    {

        public string IdRolPresentacion { get; set;}
        public string Taxonomia {get; set;}
        public string NombreTaxonomia { get; set; }
        public string Uri {get; set;}
        public IList<ConceptoRolPresentacion> Conceptos { get; set; }
        public IList<Etiqueta> Etiquetas { get; set; }

        public override string GeneraJsonId()
        {
            var json = "{\"Taxonomia\" : " + ParseJson(Taxonomia) + ", " +
                      "\"Uri\" : " + ParseJson(Uri) + "}";
            return json;
        }

        public override string GeneraJsonOrdenamiento()
        {
            var json = "{\"Taxonomia\" : " + ParseJson(Taxonomia) + ", " +
                      "\"Uri\" : " + ParseJson(Uri) + "}";
            return json;
        }

        public override string ToJson()
        {
            var json = "{" +
                "\"IdRolPresentacion\" : " + ParseJson(IdRolPresentacion) + ", " +
                "\"Taxonomia\" : " + ParseJson(Taxonomia) + ", " +
                "\"NombreTaxonomia\" : " + ParseJson(NombreTaxonomia) + ", " +
                "\"Uri\" : " + ParseJson(Uri) + ", " +
                "\"Conceptos\" : " + ParseJson(Conceptos) + ", " +
                "\"Etiquetas\" : " + ParseJson(Etiquetas) + "}";
            return json;
        }

        public override string GetKeyPropertyName()
        {
            return "IdRolPresentacion";
        }

        public override string GetKeyPropertyVale()
        {
            return IdRolPresentacion;
        }
      

    }
}
