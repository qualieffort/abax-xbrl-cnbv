using System.Collections.Generic;
using MongoDB.Bson;
using AbaxXBRLCore.MongoDB.Common.Dto;

namespace AbaxXBRLBlockStore.Common.Entity
{
    /// <summary>
    /// Entidad que almancen el registro de un documento
    /// </summary>
    public class EntBlockStoreDocumentosyFiltros
    {
        /// <summary>
        /// Informacion del documento que se intenta realizar el registro
        /// </summary>
        public BsonDocument registroBlockStore { get; set; }

        /// <summary>
        /// Filtro que se debe de cumplir para que sea una actualzazión
        /// </summary>
        public BsonDocument filtrosBlockStore { get; set; }

        /// <summary>
        /// Esattus del registro del hecho
        /// </summary>
        public EstatusRegistroHechosDto estatusRegistroHecho { get; set; }
        /// <summary>
        /// Bandera que indica si el valor del echo se almacena como un archivo chunks de GridFS.
        /// </summary>
        public bool EsValorChunks { get; set; }

        /// <summary>
        /// Valor del hecho que será almacenado como un archivo chunks en GridFS.
        /// </summary>
        public string ValorHecho { get; set; }
        /// <summary>
        /// Identificador único del registro.
        /// </summary>
        public string CodigoHashRegistro { get; set; }

    }
}
