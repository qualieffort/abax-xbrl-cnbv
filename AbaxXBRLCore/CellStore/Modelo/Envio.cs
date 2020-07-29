using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRLCore.CellStore.Modelo
{
    /// <summary>
    /// Bitacora con el listado de reportes procesados por empresa y taxonomía.
    /// </summary>
    public class Envio : ModeloBase
    {
        public string IdEnvio { get; set; }
        public string Taxonomia { get; set; }
        public Entidad Entidad { get; set; }
        public PeriodoEnvio Periodo { get; set; }
        public IDictionary<String, object> Parametros { get; set; }
        public string NombreArchivo { get; set; }
        public DateTime FechaRecepcion { get; set; }
        public bool EsVersionActual { get; set; }
        public DateTime FechaProcesamiento { get; set; }
        public string IdEnvioRemplazo { get; set; }

        /// <summary>
        /// Nombre de los parámetros clave que deben ser considerados en el envío del documento.
        /// </summary>
        private static IList<String> NombesParemetrosLlave = new List<String>()
        {
            "NumeroFideicomiso",
        };

        public override string GeneraJsonId()
        {
            var json = "{\"Taxonomia\" : " + ParseJson(Taxonomia) + ", " +
                        "\"Entidad\" : " + ParseJson(Entidad.Nombre) + ", " +
                        "\"Periodo\" : " + ParseJson(Periodo.Fecha) + ", " +
                        "\"FechaRecepcion\" : " + ParseJson(FechaRecepcion) + ", " +
                        "\"FechaProcesamiento\" : " + ParseJson(FechaProcesamiento) + "}";
            return json;
        }

        public override string ToJson()
        {
            var json = "{" +
                        "\"IdEnvio\" : " + ParseJson(IdEnvio) + ", " +
                        "\"Taxonomia\" : " + ParseJson(Taxonomia) + ", " +
                        "\"Entidad\" : " + Entidad.ToJson() + ", " +
                        "\"Periodo\" : " + Periodo.ToJson() + ", " +
                        "\"Parametros\" : " + ParametrosToJson() + ", " + 
                        "\"NombreArchivo\" : " + ParseJson(NombreArchivo) + ", " +
                        "\"EsVersionActual\" : " + ParseJson(EsVersionActual) + ", " +
                        "\"IdEnvioRemplazo\" : " + ParseJson(IdEnvioRemplazo) + ", " +
                        "\"FechaRecepcion\" : " + ParseJson(FechaRecepcion) + ", " +
                        "\"FechaProcesamiento\" : " + ParseJson(FechaProcesamiento) + "}";

            return json;
            
        }
        /// <summary>
        /// Crea una consulta json para determinar si existe un reporte empresa con las caracteristicas base.
        /// </summary>
        /// <returns></returns>
        public string GetQueryReporteEmpresa() 
        {
            var json = "{" +
                        "\"Taxonomia\" : " + ParseJson(Taxonomia) + ", " +
                        "\"Entidad.Nombre\" : " + ParseJson(Entidad.Nombre) + ", " +
                        "\"Periodo.Fecha\" : " + ParseJson(Periodo.Fecha) + "}";

            return json;
        }
        /// <summary>
        /// Genera un filtro para la tabla de envíos, que obtenga todos los registros existentes correspondientes a la mismaa informaición.
        /// </summary>
        /// <returns>Cadena con el filtro.</returns>
        public string GeneraConsultaEnviosEntidadPeriodo()
        {
            StringBuilder builder = new StringBuilder();
            builder.Append("{ \"Taxonomia\" :");
            builder.Append(ParseJson(Taxonomia));
            builder.Append(", \"Entidad.IdEntidad\":");
            builder.Append(ParseJson(Entidad.IdEntidad));
            builder.Append(", \"Periodo.Fecha\":");
            builder.Append(ParseJson(Periodo.Fecha));
            builder.Append(", \"EsVersionActual\": true");
            builder.Append(GeneraFiltrosParametrosLlave());
            builder.Append('}');
            return builder.ToString();
        }

        /// <summary>
        /// Genera un filtro para la tabla de envíos, que obtenga todos los registros existentes correspondientes al mismo envío.
        /// Es decier que son de la misma taxonomía, entidad, periodo y misma fecha de recepción.
        /// </summary>
        /// <returns>Cadena con el filtro.</returns>
        public string GeneraConsultaProcesamientosPrevios()
        {
            StringBuilder builder = new StringBuilder();
            builder.Append("{ \"Taxonomia\" :");
            builder.Append(ParseJson(Taxonomia));
            builder.Append(", \"Entidad.IdEntidad\":");
            builder.Append(ParseJson(Entidad.IdEntidad));
            builder.Append(", \"Periodo.Fecha\":");
            builder.Append(ParseJson(Periodo.Fecha));
            builder.Append(", \"FechaRecepcion\":");
            builder.Append(ParseJson(FechaRecepcion));
            builder.Append(GeneraFiltrosParametrosLlave());
            builder.Append('}');
            return builder.ToString();
        }


        public override string GetKeyPropertyName()
        {
            return "IdEnvio";
        }

        public override string GetKeyPropertyVale()
        {
            return IdEnvio;
        }
        /// <summary>
        /// Genera la representación JSON de los parametros de configuración.
        /// </summary>
        /// <returns>Representación JSON de los parámetros de confiiguración.</returns>
        public string ParametrosToJson()
        {
            var storedDictionary = new SortedDictionary<String, object>(Parametros);
            var listaParametrosJson = new StringBuilder();

            foreach (var key in storedDictionary.Keys)
            {
                listaParametrosJson.Append(", \"");
                listaParametrosJson.Append(key);
                listaParametrosJson.Append("\" : ");
                listaParametrosJson.Append(ParseJson(storedDictionary[key] == null ? String.Empty : storedDictionary[key].ToString()));
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

                    filtro.Append(ParseJson(Parametros[nombreParametro].ToString()));
                }
                else
                {
                    filtro.Append("{ $exists: false }");
                }
            }

            return filtro.ToString();
        }
    }
}
