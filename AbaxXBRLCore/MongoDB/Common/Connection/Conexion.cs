using AbaxXBRLBlockStore.Common.Enum;
using MongoDB.Bson;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Threading.Tasks;
using AbaxXBRLBlockStore.Common.Entity;
using AbaxXBRLCore.Common.Entity.Log;
using AbaxXBRLCore.Common.Util;
using MongoDB.Driver.GridFS;

namespace AbaxXBRLBlockStore.Common.Connection.MongoDb
{

    /// <summary>
    ///     Manejo de BasedeDatos MongoDB. 
    ///     <author>Ing. Joel Carmona Noriega.</author>
    ///     <creationDate>20151120</creationDate>         
    ///     <version>1.0.0.0</version>
    ///     <standard>SBBT 07.13</standard>
    /// </summary>
    public class Conexion : IDisposable
    {

        #region Sbbt: Atributos. -


        #endregion

        #region Sbbt: Propiedades. -

        /// <summary>
        /// 
        /// </summary>
        public ConnectionServer miConectionServer { get; set; }

        #endregion

        #region Sbbt: Metodos y Funciones. -

        #region Sbbt: Constructor. -

        public Conexion(ConnectionServer oConnectionServer) { miConectionServer = oConnectionServer; }


        #endregion

        #region Sbbt: Metodos manipulación BD. -

        #region Sbbt: Insertar. -

            public void insertar(string strConexion, string strBasedeDatos, string strColeccion, IEnumerable<BsonDocument> lstODocumento)
            {
                var coleccion = new MongoClient(strConexion).GetDatabase(strBasedeDatos).GetCollection<BsonDocument>(strColeccion);
                coleccion.InsertManyAsync(lstODocumento);
            }

            public void insertar(string strConexion, string strBasedeDatos, string strColeccion, BsonDocument lstODocumento) { new MongoClient(strConexion).GetDatabase(strBasedeDatos).GetCollection<BsonDocument>(strColeccion).InsertOneAsync(lstODocumento); }

            public void insertar(ConnectionServer oConexionMongoDb, IEnumerable<BsonDocument> lstODocumento) { oConexionMongoDb.miIMongoCollection.InsertManyAsync(lstODocumento); }

        #endregion

        #region Sbbt: Consultar

        public Task<List<BsonDocument>> consultar(FilterDefinition<BsonDocument> oFiltro, EnumMongoAccion enumAccion) { return consultar(miConectionServer.miIMongoCollection, oFiltro, enumAccion); }


        public Task<List<BsonDocument>> consultar(string strConnectionString, string strBasedeDatos, string strColeccion, EnumMongoAccion enumAccion) { return consultar(new MongoClient(strConnectionString).GetDatabase(strBasedeDatos).GetCollection<BsonDocument>(strColeccion), new BsonDocument(), enumAccion); }

        public async Task<List<BsonDocument>> consultar(IMongoCollection<BsonDocument> iMongoCollection, FilterDefinition<BsonDocument> oFiltro, EnumMongoAccion enumAccion)
        {
            switch (enumAccion)
            {
                case EnumMongoAccion.primerArchivo: return new List<BsonDocument> { await iMongoCollection.Find(oFiltro).FirstOrDefaultAsync() };
                case EnumMongoAccion.todos: return await iMongoCollection.Find(oFiltro).ToListAsync();
                default: return null;
            }
        }

        public Task<List<BsonDocument>> consultar(FilterDefinition<BsonDocument> oFiltro, ProjectionDefinition<BsonDocument> oProyeccion, EnumMongoAccion enumAccion) { return consultar(miConectionServer.miIMongoCollection, oFiltro, oProyeccion, enumAccion); }

        public async Task<List<BsonDocument>> consultar(IMongoCollection<BsonDocument> iMongoCollection, FilterDefinition<BsonDocument> oFiltro, ProjectionDefinition<BsonDocument> oProyeccion, EnumMongoAccion enumAccion)
        {
            switch (enumAccion)
            {
                case EnumMongoAccion.primerArchivo: return new List<BsonDocument> { await iMongoCollection.Find(oFiltro).Project<BsonDocument>(oProyeccion).FirstOrDefaultAsync() };
                case EnumMongoAccion.todos: return await iMongoCollection.Find(oFiltro).Project<BsonDocument>(oProyeccion).ToListAsync();
                default: return null;
            }
        }

        #endregion

        #region Sbbt: actualizaroInsertar

        public EntLogActualizarInsertar actualizaroInsertar(string collection, EntBlockStoreDocumentosyFiltros oBlockStoreDocumentosyFiltros)
        {
            var resultado = actualizaroInsertar(miConectionServer.obtenerInterfaceCollection(collection), oBlockStoreDocumentosyFiltros);
            return resultado.Result;
        }

        /// <summary>
        /// Actualiza o inserta el json sobre la colección.
        /// </summary>
        /// <param name="iMongoCollection">Objeto que define en que collection de MogoDB sera insertada la información.</param>
        /// <param name="oBlockStoreDocumentosyFiltros">Objeto que contiene el documento en </param>
        /// <returns>Resultado de la inserción</returns>
        public async Task<EntLogActualizarInsertar> actualizaroInsertar(IMongoCollection<BsonDocument> iMongoCollection, EntBlockStoreDocumentosyFiltros oBlockStoreDocumentosyFiltros)
        {
            var log = new EntLogActualizarInsertar { miReplaceOneResultsMongo = new List<ReplaceOneResult>(), miColleccionObjetosRepetidos = new EntBlockStoreDocumentosyFiltros {filtrosBlockStore = new BsonDocument(), registroBlockStore = new BsonDocument()} ,TieneError=false};
            
                try
                {
                    var remplazar = await iMongoCollection.ReplaceOneAsync(oBlockStoreDocumentosyFiltros.filtrosBlockStore, options: new UpdateOptions {IsUpsert = true}, replacement: oBlockStoreDocumentosyFiltros.registroBlockStore);
                    if (oBlockStoreDocumentosyFiltros.EsValorChunks)
                    {
                        var stream = new System.IO.MemoryStream();
                        var writer = new System.IO.StreamWriter(stream);
                        writer.Write(oBlockStoreDocumentosyFiltros.ValorHecho);
                        writer.Flush();
                        stream.Position = 0;
                        var options = new MongoGridFSCreateOptions
                        {
                            ChunkSize = AbaxXBRLBlockStore.Common.Constants.ConstBlockStoreHechos.MAX_STRING_VALUE_LENGTH,
                            ContentType = "text/plain",
                            Metadata = new BsonDocument
                            {
                                { "codigoHashRegistro", oBlockStoreDocumentosyFiltros.CodigoHashRegistro }
                            } 
                        };

                        miConectionServer.ObtenerInterfaceGridFS().Upload(stream, oBlockStoreDocumentosyFiltros.CodigoHashRegistro,options);
                    }
                }
                catch (Exception ex)
                {
                    log.TieneError=true;
                    log.MensajeError=ex.Message;

                    LogUtil.Error(ex);

                }
            return log;
        }

        

        #endregion

        #region Sbbt: Dispose. -

        public void Dispose() { GC.SuppressFinalize(this); }

        #endregion

        #endregion

        #endregion

    }

}
