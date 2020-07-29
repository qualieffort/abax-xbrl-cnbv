using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRLCore.CellStore.Modelo
{
    /// <summary>
    /// Reperesentación de una medida.
    /// </summary>
    public class Medida : ModeloBase
    {
        public string HashMedida { get; set; }
        public string Nombre { get; set; }
        public string EspacioNombres { get; set; }

        public override string GeneraJsonId()
        {
            var json =
               "{\"EspacioNombres\" : \"" + (EspacioNombres ?? String.Empty) + "\", " +
                "\"Nombre\" : " + ParseJson(Nombre) + "}";
            return json;
        }

        /// <summary>
        /// Genera una representación JSON de los elementos para su ordenamiento.
        /// Este json será utilizado para ordenar el objeto en una lista que posteriormente se utilizará para generar el HASH del grupo 
        /// al que pertenece este elemento.
        /// </summary>
        /// <returns>Objecto JSON con la estructura especifica para el ordenamiento.</returns>
        public override string GeneraJsonOrdenamiento()
        {
            var json =
              "{\"EspacioNombres\" : " + ParseJson(EspacioNombres) + ", " +
               "\"Nombre\" : " + ParseJson(Nombre) + "}";
            return json;
        }

        public override string ToJson()
        {
            var json =
             "{\"EspacioNombres\" : " + ParseJson(EspacioNombres) + ", " +
              "\"Nombre\" : " + ParseJson(Nombre) + "}";
            return json;
        }

        public override string GetKeyPropertyName()
        {
            return "_id";
        }

        public override string GetKeyPropertyVale()
        {
            return HashMedida;
        }
    }
}
