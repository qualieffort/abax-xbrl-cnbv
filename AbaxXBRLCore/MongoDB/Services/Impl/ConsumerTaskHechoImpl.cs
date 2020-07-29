using AbaxXBRLBlockStore.Common.Connection.MongoDb;
using AbaxXBRLBlockStore.Common.Entity;
using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.MongoDB.Services.Impl;
using AbaxXBRLCore.Repository;
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
    /// Detalle de la clase del consumidor de hechos para su registro
    /// </summary>
    public class ConsumerTaskHechoImpl : ConsumerTaskBase
    {

        /// <summary>
        /// Conceptos que la tarea puede consumir
        /// </summary>
        public List<string> idConceptos = new List<string>();

        /// <summary>
        /// Conexion para el registro de hechos por concepto
        /// </summary>
        private Conexion con;

        /// <summary>
        /// Constructor con la inicialización del consumidor de hechos
        /// </summary>
        public ConsumerTaskHechoImpl(Conexion con)
        {
            InitConsumer();
            this.con = con;
        }

        /// <summary>
        /// Procesa el item del documento del hecho
        /// </summary>
        /// <param name="document">Documento a procesar</param>
        public override void ProcessItem(EntBlockStoreDocumentosyFiltros document)
        {
            var resultado = con.actualizaroInsertar("BlockStoreHecho", document);
            if (resultado.TieneError)
            {
                document.estatusRegistroHecho.resultadoOperacion.Resultado = false;
                document.estatusRegistroHecho.resultadoOperacion.Mensaje = resultado.MensajeError;
                lock (document.estatusRegistroHecho.resultadoOperacion)
                    Monitor.Pulse(document.estatusRegistroHecho.resultadoOperacion);
            }
            else
            {
                lock (document.estatusRegistroHecho)
                {
                    document.estatusRegistroHecho.AgregarHechoRegistro();
                    if (document.estatusRegistroHecho.ObtenerNumeroRegistrosAplicados() == document.estatusRegistroHecho.numeroRegistrosPorAplicar)
                    {
                        document.estatusRegistroHecho.resultadoOperacion.Resultado=true;
                        lock (document.estatusRegistroHecho.resultadoOperacion)
                            Monitor.Pulse(document.estatusRegistroHecho.resultadoOperacion);
                    }
                }

            }
        }

    }
}
