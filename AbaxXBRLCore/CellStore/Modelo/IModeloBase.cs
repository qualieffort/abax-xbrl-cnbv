using MongoDB.Driver.GridFS;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRLCore.CellStore.Modelo
{
    /// <summary>
    /// Definición de metodos generales del modelo base.
    /// </summary>
    public interface IModeloBase
    {
        /// <summary>
        /// Representación JSON del elemento.
        /// </summary>
        /// <returns></returns>
        string ToJson();

        /// <summary>
        /// Genera un objeto json con los elementos que hace único al objeto.
        /// </summary>
        /// <returns>Cadena con una representacion serializada a JSON del objeto pero que solo contiene los elementos llave.</returns>
        string GeneraJsonId();

        /// <summary>
        /// Genera una representación JSON de los elementos para su ordenamiento.
        /// Este json será utilizado para ordenar el objeto en una lista que posteriormente se utilizará para generar el HASH del grupo 
        /// al que pertenece este elemento.
        /// </summary>
        /// <returns>Objecto JSON con la estructura especifica para el ordenamiento.</returns>
        string GeneraJsonOrdenamiento();
        /// <summary>
        /// Retorna el nombre de la propiedad llave (identificador único) del registro.
        /// </summary>
        /// <returns>Nombre de la propiedad con el identificador único del registro.</returns>
        string GetKeyPropertyName();

        /// <summary>
        /// Retorna el valor de la propiedad llave (identificador único) del registro.
        /// </summary>
        /// <returns>Valor del identificador único del registro.</returns>
        string GetKeyPropertyVale();

        /// <summary>
        /// Bandera que indica que tiene conntenido cunks que debe ser persisitido.
        /// </summary>
        bool IsChunks();

        /// <summary>
        /// Retorna las opcioines para para persistir el documento chunks.
        /// </summary>
        /// <returns></returns>
        MongoGridFSCreateOptions GetChunksOptions();
        /// <summary>
        /// Retorna el flujo con la información que será persisitida en Chunks.
        /// </summary>
        /// <returns></returns>
        Stream GetChunksSteram();
    }
}
