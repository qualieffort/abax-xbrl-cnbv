using MongoDB.Bson;
using MongoDB.Driver;

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

        #region Sbbt: Atributos. -

        private const string _prStrConstAgrupadorConnectionString = "mongodb://{0}:{1}";

        #endregion

        #region Sbbt: Propiedades. -


        public MongoDatabase miDatabase { get; set; }

        /// <summary>
        /// Cliente con la informacion de la base de datos
        /// </summary>
        public IMongoDatabase clientDataBase { get; set; }


        public MongoServer _server { get; set; }


        /// <summary>
        /// Cliente de mongo para las conecciones
        /// </summary>
        public MongoClient _client { get; set; }


        public IMongoCollection<BsonDocument> miIMongoCollection;

        /// <summary>
        /// Definicion de la cadena de coneccion de la base de datos de mongo
        /// </summary>
        public string connectionString { get; set; }

        /// <summary>
        /// Definicion de la base de datos que se va a trabajar en MongoDB
        /// </summary>
        public string baseDatos { get; set; }


        #endregion

        #region Sbbt: Metodos y Funciones. -

        #region Sbbt: Constructor. -

        public void init()
        {
            this._client = new MongoClient(connectionString);
            _server = this._client.GetServer();
            _server.Connect();

            clientDataBase =_client.GetDatabase(baseDatos);
            this.miDatabase = _server.GetDatabase(baseDatos);
        }



        public MongoCollection<BsonDocument> ObtenerCollection(string nombreColeccion)
        {
            return miDatabase.GetCollection<BsonDocument>(nombreColeccion);

        }

        /// <summary>
        /// Obtiene la collección de la interfaz del cliente de mongo
        /// </summary>
        /// <param name="nombreColeccion">Nombre de la coleccion a consultar</param>
        /// <returns>Interfaz de consulta de la coleccion</returns>
        public  IMongoCollection<BsonDocument> ObtenerInterfaceCollection(string nombreColeccion)
        {
            return clientDataBase.GetCollection<BsonDocument>(nombreColeccion);

        }


        #endregion

        #endregion

    }
}
