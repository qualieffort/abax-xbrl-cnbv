using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRLCore.CellStore.Modelo
{
    /// <summary>
    /// Estructura conn la información con los parametros de envío de un documento.
    /// </summary>
    public class ParametrosEnvio : ModeloBase
    {
        public string HashParametrosEnvio { get; set; }
        public IDictionary<String, String> Parametros = new Dictionary<String, String>();
        /// <summary>
        /// Nombre de los parámetros clave que deben ser considerados en el envío del documento.
        /// </summary>
        private static IList<String> NombesParemetrosLlave = new List<String>()
        {
            "Dictaminado",
            "NumeroFideicomiso",
        };

        public override string GeneraJsonId()
        {
            return ToJson();
        }

        public override string ToJson()
        {
            var storedDictionary = new SortedDictionary<String, String>(Parametros);
            var listaParametrosJson = new StringBuilder();

            foreach (var key in storedDictionary.Keys)
            {
                listaParametrosJson.Append(", \"");
                listaParametrosJson.Append(key);
                listaParametrosJson.Append("\" : ");
                listaParametrosJson.Append(ParseJson(storedDictionary[key]));
            }
            var json = new StringBuilder();
            json.Append("{");
            json.Append(listaParametrosJson.ToString().Substring(2));
            json.Append("}");
            return json.ToString();
        }
        /// <summary>
        /// Genera una consulta JSON con los parámetros llave que deben de ser considerados en la evaluación de los documentos.
        /// </summary>
        public String GeneraFiltrosParametrosLlave()
        {
            StringBuilder filtro = new StringBuilder();
            foreach (var nombreParametro in NombesParemetrosLlave)
            {
                filtro.Append(", \"Parametros.");
                filtro.Append(nombreParametro);
                filtro.Append("\" : ");
                if (Parametros.ContainsKey(nombreParametro))
                {
                    
                    filtro.Append(ParseJson(Parametros[nombreParametro]));
                }
                else
                {
                    filtro.Append("{ $exists: false }");
                }
            }

            return filtro.ToString();
        }

        public override string GetKeyPropertyName()
        {
            return "_id";
        }

        public override string GetKeyPropertyVale()
        {
            return HashParametrosEnvio;
        }

    }
}
