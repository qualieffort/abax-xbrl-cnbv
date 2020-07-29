using AbaxXBRLBlockStore.Common.Enum;
using MongoDB.Bson;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AbaxXBRLBlockStore.Common.Connection.MongoDb;
using AbaxXBRLBlockStore.Common.Entity;

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

        public void actualizaroInsertar(EntBlockStoreDocumentosyFiltros oBlockStoreDocumentosyFiltros)
        {
            actualizaroInsertar(miConectionServer.miIMongoCollection, oBlockStoreDocumentosyFiltros);
        }

        public async void actualizaroInsertar(IMongoCollection<BsonDocument> iMongoCollection, EntBlockStoreDocumentosyFiltros oBlockStoreDocumentosyFiltros)
        {
            for (var cont = 0; cont <= oBlockStoreDocumentosyFiltros.miListaElementosBlockStore.Count; cont++)
            {
                var filtro = oBlockStoreDocumentosyFiltros.miListaFiltrosBlockStore[cont];
                var valor = oBlockStoreDocumentosyFiltros.miListaElementosBlockStore[cont];
                var result = await iMongoCollection.ReplaceOneAsync(filtro, options: new UpdateOptions { IsUpsert = true }, replacement: valor);

            }

        }

        #endregion

        #region Sbbt: Dispose. -

        public void Dispose() { GC.SuppressFinalize(this); }

        #endregion

        #endregion

        #endregion

    }

}
