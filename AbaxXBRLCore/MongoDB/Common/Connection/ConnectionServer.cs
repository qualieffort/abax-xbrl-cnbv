using AbaxXBRLCore.Common.Util;
using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Driver.GridFS;
using System;

namespace AbaxXBRLBlockStore.Common.Connection.MongoDb
{

    /// <summary>
    ///     Clase que controla la conexión con el servidor de MongoDB. 
    ///     <author>Ing. Joel Carmona Noriega.</author>
    ///     <creationDate>20151120</creationDate>         
    ///     <version>1.0.0.0</version>
    ///     <standard>SBBT 07.13</standard>
    /// </summary>
    public class ConnectionServer
    {

       #region Sbbt: Propiedades. -
        
            /// <summary>
            /// Objeto de MongoDb para hacer referenciar la base de datos. -
            /// </summary>
            public MongoDatabase miMongoDatabase
            {
                get {
                    MongoDatabase value = null;
                    try
                    {
                        value = miServer.GetDatabase(miBaseDatos);
                    }
                    catch(Exception ex)
                    {
                        LogUtil.Error(ex);
                    }
                    return value;
                }
            }

        /// <summary>
        /// Objeto-Interfaz de MongoDb la base de datos para su manipulación. -
        /// </summary>
        public IMongoDatabase miIMongoDataBase
            {
                get 
                {
                    IMongoDatabase value = null;
                    try
                    {
                        value = miClient.GetDatabase(miBaseDatos);
                    }
                    catch(Exception ex)
                    {
                        LogUtil.Error(ex);
                    }
                    return value;
                }
            }
        
            /// <summary>
            /// Objeto de MongoDb para conectar con el servidor.
            /// </summary>
            public MongoServer miServer
            {
                    get 
                    {
                        MongoServer value = null;
                        try
                        {
                            value = miClient.GetServer();
                            value.Connect();
                        }
                        catch(Exception ex)
                        {
                            LogUtil.Error(ex);
                        }
                        return value;
                    }
            }
        
            /// <summary>
            /// Objeto cliente de MongoDb 
            /// </summary>
            public MongoClient miClient
            {
                get {
                    MongoClient value = null;
                    try
                    {
                        value = new MongoClient(miConnectionString);
                    }
                    catch(Exception ex)
                    {
                        LogUtil.Error(ex);
                    }
                    return value;
                }
            }

            /// <summary>
            /// Objeto-Interfaz de MongoDb para la manipulación de la colección.
            /// </summary>
            public IMongoCollection<BsonDocument> miIMongoCollection { get; set; }

            /// <summary>
            /// Cadena de coneccion de la base de datos de mongo
            /// </summary>
            public string miConnectionString { get; set; }

            /// <summary>
            /// nombre de la base de datos.
            /// </summary>
            public string miBaseDatos { get; set; }

        #endregion

       #region Sbbt: Metodos y Funciones. -

            #region Sbbt: Constructor. -

                /// <summary>
                /// Inicializa atributos.
                /// </summary>
                public void init()
                {
                    
                }

            #endregion

            /// <summary>
            /// Obtiene la collección de la base de datos seleccionada.
            /// </summary>
            /// <param name="strNombreColeccion">nombre de la colección a manipular</param>
            /// <returns></returns>
            public MongoCollection<BsonDocument> obtenerCollection(string strNombreColeccion)
            {
                return miMongoDatabase.GetCollection<BsonDocument>(strNombreColeccion);
            }

            /// <summary>
            /// Obtiene la collección de la interfaz del cliente de mongo
            /// </summary>
            /// <param name="strNombreColeccion">Nombre de la coleccion a consultar</param>
            /// <returns>Interfaz de consulta de la coleccion</returns>
            public IMongoCollection<BsonDocument> obtenerInterfaceCollection(string strNombreColeccion)
            {
                return miIMongoDataBase.GetCollection<BsonDocument>(strNombreColeccion);
            }
            /// <summary>
            /// Retorna el manejador de GridFS.
            /// </summary>
            /// <returns>Manejador del GridFS</returns>
            public MongoGridFS ObtenerInterfaceGridFS()
            {
                return miMongoDatabase.GridFS;
            }


        #endregion

    }
}
