using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRLCore.CellStore.Modelo
{
    /// <summary>
    /// Representación de los elementos en la colleción de datos de taxonomías.
    /// </summary>
    public class Taxonomia : ModeloBase
    {
        /// <summary>
        /// Identificarodr del elemento.
        /// </summary>
        public string HashTaxonomia { get; set; }
        /// <summary>
        /// Uri que idientifica el espacio de nombres principal de la taxonomía.
        /// </summary>
        public string EspacioNombresPrincipal { get; set; }
        /// <summary>
        /// Uri que identifica el espacio de nombres de la taxonomía.
        /// </summary>
        public string EspacioNombres { get; set; }
        

        public override string GeneraJsonId()
        {
            var json = "{\"EspacioNombresPrincipal\" : " + ParseJson(EspacioNombresPrincipal) + ", " +
                        "\"EspacioNombres\" : " + ParseJson(EspacioNombres) + "}";
            return json;
        }

        public override string ToJson()
        {
            var json = "{" +
                       "\"_id\" : " + ParseJson(HashTaxonomia) + ", " +
                       "\"HashTaxonomia\" : " + ParseJson(HashTaxonomia) + ", " +
                       "\"EspacioNombresPrincipal\" : " + ParseJson(EspacioNombresPrincipal) + ", " +
                       "\"EspacioNombres\" : " + ParseJson(EspacioNombres) + "}";

            return json;
        }

        public override string GetKeyPropertyName()
        {
            return "_id";
        }

        public override string GetKeyPropertyVale()
        {
            return HashTaxonomia;
        }
    }
}
