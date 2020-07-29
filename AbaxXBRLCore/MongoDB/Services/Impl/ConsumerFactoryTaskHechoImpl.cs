using AbaxXBRLBlockStore.Common.Connection.MongoDb;
using AbaxXBRLBlockStore.Common.Entity;
using AbaxXBRLCore.Distribucion;
using AbaxXBRLCore.MongoDB.Services.Impl;
using AbaxXBRLCore.Repository;
using MongoDB.Bson;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRLCore.MongoDB.Services.Impl
{
    /// <summary>
    /// Factory para la creación de consumidores de registro de hechos por concepto
    /// </summary>
    public class ConsumerFactoryTaskHechoImpl : ConsumerFactoryTaskHecho
    {

        
        /// <summary>
        /// Objeto repository para el acceso a los datos de bitacora version documento
        /// </summary>
        public IBitacoraVersionDocumentoRepository BitacoraVersionDocumentoRepository { get; set; }
        /// <summary>
        /// Objeto repository para el acceso a los datos de la versión del documento de instancia
        /// </summary>
        public IVersionDocumentoInstanciaRepository VersionDocumentoInstanciaRepository { get; set; }

        /// <summary>
        /// Objeto repository para el acceso a los datos de la bitácora por distribución
        /// </summary>
        public IBitacoraDistribucionDocumentoRepository BitacoraDistribucionDocumentoRepository { get; set; }

        /// <summary>
        /// Identifica el consumidor que se es otorgado por concepto
        /// </summary>
        private Dictionary<string, ConsumerTaskHechoImpl> consumidoresPorConcepto;

        /// <summary>
        /// Consumidores que se tienen registrados
        /// </summary>
        private Dictionary<int, ConsumerTaskHechoImpl> consumidoresPorCreacion;

        /// <summary>
        /// Indica el numero de consumidores que se tienen creados hasta el momento
        /// </summary>
        private int numeroConsumidoresCreados=0;

        /// <summary>
        /// Indica cuantos conceptos son otorgados por consumidor
        /// </summary>
        private  int numeroConceptosPorConsumidor = 1;


        /// <summary>
        /// Indica el numero maximo de consumidores que serán creados para el registro de hechos
        /// </summary>
        public int numeroMaximoConsumidores;

        /// <summary>
        /// Coneccion de mongo para el registro de hechos
        /// </summary>
        public Conexion con { get; set; }

        /// <summary>
        /// Constructor inicial para el maneho de la creacion de consumidores por concepto
        /// </summary>
        public ConsumerFactoryTaskHechoImpl() {
            consumidoresPorConcepto = new Dictionary<string, ConsumerTaskHechoImpl>();
            consumidoresPorCreacion = new Dictionary<int, ConsumerTaskHechoImpl>();
        }


        /// <summary>
        /// Realiza la distribucion del hecho en algun consumidor
        /// </summary>
        /// <param name="blockStoreDocumento">Documento con la informacion del hecho</param>
        public void distribuirHecho(EntBlockStoreDocumentosyFiltros blockStoreDocumento)
        {
            var documentoHecho = blockStoreDocumento.registroBlockStore;
            var idConcepto = documentoHecho["concepto"].AsBsonDocument["Id"].AsString;

            if (consumidoresPorConcepto.ContainsKey(idConcepto))
            {
                var consumer = consumidoresPorConcepto[idConcepto];
                consumer.AddItemToCollection(blockStoreDocumento);
            }
            else {
                if (numeroConsumidoresCreados >= numeroMaximoConsumidores)
                {
                    var consumer = ObtenerConsumidorUtilizar();
                    consumidoresPorConcepto[idConcepto] = consumer;
                    consumidoresPorConcepto[idConcepto].idConceptos.Add(idConcepto);
                }
                else {
                    numeroConsumidoresCreados++;
                    consumidoresPorConcepto[idConcepto] = new ConsumerTaskHechoImpl(con);
                    consumidoresPorConcepto[idConcepto].idConceptos.Add(idConcepto);
                    consumidoresPorCreacion[numeroConsumidoresCreados] = consumidoresPorConcepto[idConcepto];
                }

                var consumerConcepto = consumidoresPorConcepto[idConcepto];
                consumerConcepto.AddItemToCollection(blockStoreDocumento);

            }

        }


        /// <summary>
        /// Obtiene el consumidor que tiene menor cantidad de conceptos para registrar
        /// </summary>
        /// <returns>Consumir que es posible utilizar</returns>
        private ConsumerTaskHechoImpl ObtenerConsumidorUtilizar()
        { 
        
            foreach(var key in consumidoresPorCreacion.Keys){
                int numeroConceptoConsume = consumidoresPorCreacion[key].idConceptos.Count;
                if (numeroConceptoConsume < numeroConceptosPorConsumidor) {
                    return consumidoresPorCreacion[key];
                }
            }
            
            numeroConceptosPorConsumidor++;

            return consumidoresPorCreacion[1];
        }


    }
}
