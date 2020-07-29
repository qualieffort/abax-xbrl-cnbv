using AbaxXBRLBlockStore.Common.Entity;
using AbaxXBRLCore.MongoDB.Services.Impl;
using MongoDB.Bson;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRLCore.MongoDB.Services
{
    /// <summary>
    /// Factory para la creación de consumidores de registro de hechos por concepto
    /// </summary>
    public interface ConsumerFactoryTaskHecho
    {

        /// <summary>
        /// Realiza la distribucion del hecho en algun consumidor
        /// </summary>
        /// <param name="blockStoreDocumento">Documento con la informacion del hecho</param>
        void distribuirHecho(EntBlockStoreDocumentosyFiltros blockStoreDocumento);

    }
}
