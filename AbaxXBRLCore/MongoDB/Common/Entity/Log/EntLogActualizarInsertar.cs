using System;
using System.Collections.Generic;
using AbaxXBRLBlockStore.Common.Entity;
using MongoDB.Bson;
using MongoDB.Driver;

namespace AbaxXBRLCore.Common.Entity.Log
{
    /// <summary>
    /// Entidad Log que lleva el control del insert - update.
    /// </summary>
    public class EntLogActualizarInsertar
    {

        /// <summary>
        /// Valida si tiene error el hecho
        /// </summary>
        public bool TieneError { get; set; }

        /// <summary>
        /// Mensaje de error del registrop
        /// </summary>
        public string MensajeError { get; set; }
        /// <summary>
        /// Resultado de la carga de los objetos sobre la Base de datos.
        /// </summary>
        public List<ReplaceOneResult> miReplaceOneResultsMongo { get; set; }
        /// <summary>
        /// Lista de objetos que solo actualizarón.
        /// </summary>
        public EntBlockStoreDocumentosyFiltros miColleccionObjetosRepetidos { get; set; }

        
        

        /// <summary>
        /// 
        /// </summary>
        public EntLogActualizarInsertar()
        {
            miReplaceOneResultsMongo = new List<ReplaceOneResult>();
            miColleccionObjetosRepetidos = new EntBlockStoreDocumentosyFiltros() {registroBlockStore = new BsonDocument(), filtrosBlockStore = new BsonDocument() };
            
            
        }
    }
}
