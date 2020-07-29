using System.Collections.Generic;
using MongoDB.Bson;

namespace AbaxXBRLBlockStore.Common.Entity
{
    public class EntBlockStoreDocumentosyFiltros
    {
        public List <BsonDocument> miListaElementosBlockStore { get; set; }
        public List <BsonDocument> miListaFiltrosBlockStore { get; set; }
    }
}
