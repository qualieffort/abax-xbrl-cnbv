using AbaxXBRLBlockStore.Common.Entity;
using AbaxXBRLCore.Common.Util;
using MongoDB.Bson;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace AbaxXBRLCore.MongoDB.Services.Impl
{
    /// <summary>
    /// Consumidor base para el consumo de informacion 
    /// </summary>
    public abstract class ConsumerTaskBase
    {
        /// <summary>
        /// Inicializacion de una coleccion con los valores de un concepto a registrar
        /// </summary>
        public BlockingCollection<EntBlockStoreDocumentosyFiltros> items = new BlockingCollection<EntBlockStoreDocumentosyFiltros>(5000);

        /// <summary>
        /// Informacion del consumidor de registrar hechos de un concepto
        /// </summary>
        private Task consumidor;

        /// <summary>
        /// Identificador del consumidor
        /// </summary>
        private string consumerId;

        /// <summary>
        /// Inicializa el consumidor
        /// </summary>
        public void InitConsumer()
        {
            this.consumidor = Task.Factory.StartNew(() =>
            {
                while (true)
                {
                    try
                    {

                        foreach (var documento in items.GetConsumingEnumerable())
                        {
                            ProcessItem(documento);
                        }

                    }
                    catch (Exception e)
                    {
                        LogUtil.Error(e);
                    }
                }
            });

        }

        /// <summary>
        /// Procesa el item del documento
        /// </summary>
        /// <param name="document">Informacion del documento</param>
        public abstract void ProcessItem(EntBlockStoreDocumentosyFiltros document);


        /// <summary>
        /// Obtiene el tamaño de la coleccion que se tiene
        /// </summary>
        /// <returns>Tamaño de la coleccion</returns>
        public int GetSizeCollecction()
        {
            return items.Count;
        }

        /// <summary>
        /// Asigna un valor a la coleccion
        /// </summary>
        /// <param name="item">Item que se agrega para registro</param>
        public void AddItemToCollection(EntBlockStoreDocumentosyFiltros item)
        {
            items.Add(item);
        }

        /// <summary>
        /// Obtiene el identificador del consumidor
        /// </summary>
        /// <returns>identificador del consumidor</returns>
        public string GetConsumerId()
        {
            return consumerId;
        }
    }
}
