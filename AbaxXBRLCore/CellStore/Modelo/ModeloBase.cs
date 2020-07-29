using AbaxXBRLCore.Common.Util;
using MongoDB.Bson;
using MongoDB.Driver.GridFS;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRLCore.CellStore.Modelo
{
    /// <summary>
    /// Clase de la que heredan todos los elementos a modelar.
    /// </summary>
    public abstract class ModeloBase : IModeloBase
    {
        /// <summary>
        /// Genera un hash como identificador único del objeto.
        /// </summary>
        /// <returns>Hash con identificador único del objeto.</returns>
        public string GeneraHashId()
        {
            var jsonId = GeneraJsonId();
            var hashConcepto = GeneraHash(jsonId);

            return hashConcepto;
        }
        /// <summary>
        /// Proceso que transforma una cadena (serializada JSON) en un identificador único.
        /// </summary>
        /// <param name="json">Cadena con objeto JSON</param>
        /// <returns>Hash generado del objeto json.</returns>
        public string GeneraHash(string json)
        {
            return UtilAbax.CalcularHash(json);
        }
        /// <summary>
        /// Genera un objeto json con los elementos que hace único al objeto.
        /// </summary>
        /// <returns>Cadena con una representacion serializada a JSON del objeto pero que solo contiene los elementos llave.</returns>
        public abstract string GeneraJsonId();

        /// <summary>
        /// Genera una representación JSON de los elementos para su ordenamiento.
        /// Este json será utilizado para ordenar el objeto en una lista que posteriormente se utilizará para generar el HASH del grupo 
        /// al que pertenece este elemento.
        /// </summary>
        /// <returns>Objecto JSON con la estructura especifica para el ordenamiento.</returns>
        public virtual string GeneraJsonOrdenamiento()
        {
            return GeneraJsonId();
        }
        /// <summary>
        /// Parsea una fecha a una cadena estandar.
        /// </summary>
        /// <param name="fecha">Fecha a formatear.</param>
        /// <returns>Cadena que representa el valor de la fecha.</returns>
        public static string FormateaFechaSQL(DateTime? fecha)
        {
            if (fecha == null)
            {
                return "NULL";
            }
            var fechaAux = fecha ?? DateTime.MinValue;
            var sFechha = DateUtil.ToFormatString(fechaAux, DateUtil.YMDateFormat);
            return "'" + sFechha + "'";
        }
        /// <summary>
        /// Representación JSON del elemento.
        /// </summary>
        /// <returns></returns>
        public abstract string ToJson();
        /// <summary>
        /// Parse the value to json.
        /// </summary>
        /// <param name="value">Value to parse.</param>
        /// <returns>Json value.</returns>
        public static string ParseJson(string value)
        {
            var json = value ?? String.Empty;
            json = JsonConvert.ToString(value);
            return json;
        }

        /// <summary>
        /// Parse the value to json.
        /// </summary>
        /// <param name="value">Value to parse.</param>
        /// <returns>Json value.</returns>
        public static string ParseJson(IList<string> lista)
        {
            if (lista == null || lista.Count == 0)
            {
                return "[]";
            }
            var builder = new StringBuilder();
            foreach (var elemento in lista)
            {
                builder.Append(", ");
                builder.Append(JsonConvert.ToString(elemento));
            }
            var json = "[" + builder.ToString().Substring(2) + "]";
            return json;
        }

        /// <summary>
        /// Parse the value to json.
        /// </summary>
        /// <param name="value">Value to parse.</param>
        /// <returns>Json value.</returns>
        public static string ParseJson(IDictionary<string, IList<ConceptoRolPresentacion>> diccionarioListas)
        {
            if (diccionarioListas == null || diccionarioListas.Count() == 0)
            {
                return "{}";
            }
            var builderDictionary = new StringBuilder();
            foreach (var nombreLista in diccionarioListas.Keys)
            {
                var lista = diccionarioListas[nombreLista];
                var builderList = new StringBuilder();
                foreach (var elemento in lista)
                {
                    var jsonElement = elemento.ToJson();
                    builderList.Append(", ");
                    builderList.Append(jsonElement);
                }
                var jsonLista = "[" + builderList.ToString().Substring(2) + "]";
                builderDictionary.Append(", \"");
                builderDictionary.Append(nombreLista);
                builderDictionary.Append("\" : ");
                builderDictionary.Append(jsonLista);
            }
            var json = "{" + builderDictionary.ToString().Substring(2) + "}";
            return json;
        }

        /// <summary>
        /// Parse the value to json.
        /// </summary>
        /// <param name="value">Value to parse.</param>
        /// <returns>Json value.</returns>
        public string ParseJson(bool value)
        {
            return value ? "true" : "false";
        }

        /// <summary>
        /// Parse the value to json.
        /// </summary>
        /// <param name="value">Value to parse.</param>
        /// <returns>Json value.</returns>
        public string ParseJson(int value)
        {
            return value.ToString();
        }

        /// <summary>
        /// Parse the value to json.
        /// </summary>
        /// <param name="value">Value to parse.</param>
        /// <returns>Json value.</returns>
        public string ParseJson(Decimal value)
        {
            return value.ToString();
        }

        /// <summary>
        /// Parse the value to json.
        /// </summary>
        /// <param name="value">Value to parse.</param>
        /// <returns>Json value.</returns>
        public static string ParseJson(DateTime? fecha)
        {
            if (fecha == null)
            {
                return "null";
            }
            var fechaAux = fecha ?? DateTime.MinValue;
            var sValue = fechaAux.ToString("yyyy-MM-ddTHH:mm:ssZ");
            return "ISODate(\"" + sValue + "\")";
        }

        /// <summary>
        /// Parse the value to json.
        /// </summary>
        /// <param name="value">Value to parse.</param>
        /// <returns>Json value.</returns>
        public static string ParseJson(DateTime fecha)
        {
            var sValue = fecha.ToString("yyyy-MM-ddTHH:mm:ssZ");
            return "ISODate(\"" + sValue + "\")";
        }

        /// <summary>
        /// Parse the value to json.
        /// </summary>
        /// <param name="value">Value to parse.</param>
        /// <returns>Json value.</returns>
        public string ParseString(DateTime fecha)
        {
            return fecha.ToString("yyyy-MM-ddTHH:mm:ssZ");
        }

        /// <summary>
        /// Parse the value to json.
        /// </summary>
        /// <param name="value">Value to parse.</param>
        /// <returns>Json value.</returns>
        public string ParseJson(IList<IModeloBase> lista)
        {

            if (lista == null || lista.Count == 0)
            {
                return "[]";
            }

            var json = "[";
            var stringList = String.Empty;
            foreach (var item in lista)
            {
                stringList += ", " + item.ToJson();
            }
            json += stringList.Substring(2);
            json += "]";
            return json;
        }
        /// <summary>
        /// Genera una representación JSON del listado de medidas.
        /// </summary>
        /// <param name="lista">Lista que se pretende transforar</param>
        /// <returns>Representación JSON del listado</returns>
        public string ParseJson(IList<ConceptoRolPresentacion> lista)
        {
            if (lista == null || lista.Count == 0)
            {
                return "[]";
            }

            var json = "[";
            var stringList = String.Empty;
            var listaOrdenada = lista.OrderBy(s => s.Taxonomia).ThenBy(s => s.EspacioNombres).ThenBy(s => s.IdConcepto).ToList();
            foreach (var item in listaOrdenada)
            {
                stringList += ", " + item.ToJson();
            }
            json += stringList.Substring(2);
            json += "]";
            return json;
        }
        /// <summary>
        /// Genera una representación JSON del listado de medidas.
        /// </summary>
        /// <param name="lista">Lista que se pretende transforar</param>
        /// <returns>Representación JSON del listado</returns>
        public string ParseJson(IList<RolPresentacionHecho> lista)
        {
            if (lista == null || lista.Count == 0)
            {
                return "[]";
            }

            var json = "[";
            var stringList = String.Empty;
            var listaOrdenada = lista.OrderBy(s => s.Uri).ToList();
            foreach (var item in listaOrdenada)
            {
                stringList += ", " + item.ToJson();
            }
            json += stringList.Substring(2);
            json += "]";
            return json;
        }
        /// <summary>
        /// Genera una representación JSON del listado de medidas.
        /// </summary>
        /// <param name="lista">Lista que se pretende transforar</param>
        /// <returns>Representación JSON del listado</returns>
        public string ParseJson(IList<Medida> lista)
        {
            if (lista == null || lista.Count == 0)
            {
                return "[]";
            }

            var json = "[";
            var stringList = String.Empty;
            var listaOrdenada = lista.OrderBy(s => s.EspacioNombres).ThenBy(s => s.Nombre).ToList();
            foreach (var item in listaOrdenada)
            {
                stringList += ", " + item.ToJson();
            }
            json += stringList.Substring(2);
            json += "]";
            return json;
        }
        public string ParseJson(IList<Etiqueta> lista)
        {
            if (lista == null || lista.Count == 0)
            {
                return "[]";
            }

            var json = "[";
            var stringList = String.Empty;
            var listaOrdenada = lista.OrderBy(s => s.Idioma).ThenBy(s => s.Rol).ThenBy(s => s.Valor).ToList();
            foreach (var item in listaOrdenada)
            {
                stringList += ", " + item.ToJson();
            }
            json += stringList.Substring(2);
            json += "]";
            return json;
        }
        public string ParseJson(IList<MiembrosDimensionales> lista)
        {
            if (lista == null || lista.Count == 0)
            {
                return "[]";
            }

            var json = "[";
            var stringList = String.Empty;
            var listaOrdenada = lista.OrderBy(s => s.QNameDimension).ThenBy(s => s.QNameItemMiembro).ThenBy(s => s.MiembroTipificado).ToList();
            foreach (var item in listaOrdenada)
            {
                stringList += ", " + item.ToJson();
            }
            json += stringList.Substring(2);
            json += "]";
            return json;
        }
        /// <summary>
        /// Bandera que indica que tiene conntenido cunks que debe ser persisitido.
        /// </summary>
        public virtual bool IsChunks()
        {
            throw new NotImplementedException();
        }

        /// <summary>
        /// Retorna las opcioines para para persistir el documento chunks.
        /// </summary>
        /// <returns></returns>
        public virtual MongoGridFSCreateOptions GetChunksOptions()
        {
            throw new NotImplementedException();
        }
        /// <summary>
        /// Retorna el flujo con la información que será persisitida en Chunks.
        /// </summary>
        /// <returns></returns>
        public virtual Stream GetChunksSteram()
        {
            throw new NotImplementedException();
        }
        /// <summary>
        /// Método retorna la representación en cadena de un objeto.
        /// </summary>
        /// <param name="elemento">Elemenot a evaluar.</param>
        /// <returns>Representación en cadena del objeto o null si se trata de un elemento nulo.</returns>
        public string AsString(Object elemento)
        {
            string valor = null;
            if (elemento != null)
            {
                valor = elemento.ToString();
            }
            return valor;
        }
        /// <summary>
        /// Retorna la represtnacion BsonDocument del elemento.
        /// </summary>
        /// <returns>Representación BsonDocument.</returns>
        public BsonDocument ToBson()
        {
            return BsonDocument.Parse(this.ToJson());
        }


        /// <summary>
        /// Retorna el nombre de la colleccion de mongo a la que pertenece este elemento.
        /// </summary>
        /// <returns>Nombre de la colleccion de mongo a la que pertenece el elemento.</returns>
        //public abstract string MongoCollectionName();

        public abstract string GetKeyPropertyName();
        /// <summary>
        /// Retorna el valor del elemento llave para este registro.
        /// </summary>
        /// <returns>Valor del elemento llave única.</returns>
        public abstract string GetKeyPropertyVale();
    }
}
