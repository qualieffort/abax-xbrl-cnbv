using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRLCore.CellStore.Modelo
{
    /// <summary>
    /// Estructura con la información de un rol de presentación contenido en el hecho.
    /// </summary>
    public class RolPresentacionHecho : ModeloBase
    {
        public string HashRolPresentacion { get; set; }
        public string Uri { get; set; }

        public override string GeneraJsonId()
        {
            var json = "{" +
                "\"Uri\" : " + ParseJson(Uri) + "}";

            return json;
        }
        public override string ToJson()
        {
            var json = "{" +
                "\"Uri\" : " + ParseJson(Uri) + "}";

            return json;
        }

        public override string GetKeyPropertyName()
        {
            return "_id";
        }

        public override string GetKeyPropertyVale()
        {
            return HashRolPresentacion;
        }
    }
}
