using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AbaxXBRLBlockStore.Common.Entity;
using AbaxXBRLCore.Viewer.Application.Dto;
using MongoDB.Bson;
using Newtonsoft.Json;

namespace AbaxXBRLCore.BlockStore
{
    public class BlockStoreHechosToDocumentoInstancia
    {
        public DocumentoInstanciaXbrlDto castBlockStoreHechos(List<BsonDocument> documentoBlockStoreHechos)
        {
            var documentoInstanciaXbrlDto = new DocumentoInstanciaXbrlDto();
            var entidadesDto = new EntidadDto();

            return new DocumentoInstanciaXbrlDto();
            
        }

        public DocumentoInstanciaXbrlDto castBlockStoreHechos(string jsonDocumentoHecho)
        {
            var documentoInstanciaXbrlDto = new DocumentoInstanciaXbrlDto();
            var entidadesDto = new EntidadDto();

            var settings = new JsonSerializerSettings { NullValueHandling = NullValueHandling.Ignore };
            var documentoInstanciXbrlDto = JsonConvert.DeserializeObject<EntEstructuraHechos>(jsonDocumentoHecho, settings);

            return new DocumentoInstanciaXbrlDto();

        }

    }
}
