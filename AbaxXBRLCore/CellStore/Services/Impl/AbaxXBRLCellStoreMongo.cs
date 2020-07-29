using AbaxXBRLCore.CellStore.Constants;
using AbaxXBRLCore.CellStore.Modelo;
using AbaxXBRLCore.Common.Util;
using MongoDB.Bson;
using MongoDB.Bson.Serialization;
using MongoDB.Driver;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AbaxXBRLCore.CellStore.DTO;
using System.Text.RegularExpressions;
using static AbaxXBRLCore.CellStore.Constants.ConstantesCellStore.ColeccionMongoEnum;
using MongoDB.Driver.Builders;
using AbaxXBRLCore.CellStore.Util;
using AbaxXBRLCore.Viewer.Application.Dto;

namespace AbaxXBRLCore.CellStore.Services.Impl
{
    /// <summary>
    /// Implementación del servicio para el manejo de la persistencia en mongo.
    /// </summary>
    public class AbaxXBRLCellStoreMongo : IAbaxXBRLCellStoreMongo
    {
        /// <summary>
        /// Directorio donde se presisten los Json con algún error.
        /// </summary>
        public string JSONOutDirectory { get; set; }
        /// <summary>
        /// Cadena de coneccion a la BD de mongo.
        /// </summary>
        public string ConnectionString { get; set; }
        /// <summary>
        /// Nomber de la base de datos a utilizar.
        /// </summary>
        public string DataBaseName { get; set; }
        /// <summary>
        /// Cliente del servidor de mongo.
        /// </summary>
        private MongoClient ClienteMongo { get; set; }
        /// <summary>
        /// Referencia a la base de datos de mongo.
        /// </summary>
        private IMongoDatabase MongoDB { get; set; }
        /// <summary>
        /// Nombre del blockstore para Hecho.
        /// </summary>
        public string BlockStoreHecho { get; set; }
        /// <summary>
        /// Nombre del blockstore para Hecho.
        /// </summary>
        public string BlockStoreHechoSpotfire { get; set; }
        /// <summary>
        /// Nombre del blockstore para Concepto
        /// </summary>
        public string BlockStoreEnvio { get; set; }
        /// <summary>
        /// Nombre del blockstore para Taxonomia.
        /// </summary>
        public string BlockStoreRolPresentacion { get; set; }
        /// <summary>
        /// Base de datos de mongo obtenida por referencia directa.
        /// </summary>
        private MongoDatabase MongoServerDatabase;
        /// <summary>
        /// Bandera con el listado de dimensiones que se debend evaluar 
        /// </summary>
        public IList<String> DimensionesSpotfire { get; set; }
        /// <summary>
        /// Listado de atributos de roles que siempres se deben de incluir
        /// </summary>
        public IList<String> RolesSpotfire { get; set; }

        /// <summary>
        /// Listado de parámetros que siemrpes de deben de incluir
        /// </summary>
        public IList<String> ParametrosSpotfire { get; set; }


        /// <summary>
        /// Objeto que sirve como marcador de bloqueo para sincronizar el proceso de escritura en el log para los diferentes hilos.
        /// </summary>
        static object lockMethod = new object();

        /// <summary>
        /// Constructor por defecto.
        /// </summary>
        public AbaxXBRLCellStoreMongo()
        {
            BlockStoreHecho = "Hecho";
            BlockStoreEnvio = "Envio";
            BlockStoreRolPresentacion = "RolPresentacion";
            BlockStoreHechoSpotfire = "HechoSpotfire";
            DimensionesSpotfire = new List<String>();
            RolesSpotfire = new List<String>();
            ParametrosSpotfire = new List<String>();
        }

        /// <summary>
        /// Constructor base del servicio.
        /// </summary>
        public void Init()
        {
            ClienteMongo = new MongoClient(ConnectionString);
            MongoDB = ClienteMongo.GetDatabase(DataBaseName);
            MongoServerDatabase = ClienteMongo.GetServer().GetDatabase(DataBaseName);
            AsignaRegisterClassMapPorDefecto<Hecho>();
            AsignaRegisterClassMapPorDefecto<Envio>();
            AsignaRegisterClassMapPorDefecto<RolPresentacion>();
        }
        /// <summary>
        /// Constructor base del servicio.
        /// </summary>
        public void Init2 ()
        {
            ClienteMongo = new MongoClient(ConnectionString);
            MongoDB = ClienteMongo.GetDatabase(DataBaseName);
            MongoServerDatabase = ClienteMongo.GetDatabase(DataBaseName) as MongoDatabase;
            AsignaRegisterClassMapPorDefecto<Hecho>();
            AsignaRegisterClassMapPorDefecto<Envio>();
            AsignaRegisterClassMapPorDefecto<RolPresentacion>();
        }
        /// <summary>
        /// Registra una configuración estandar para el mapeo de los bloques JSON a sus entidades correspondientes.
        /// </summary>
        /// <typeparam name="T">Tipo de entidad a configurar.</typeparam>
        private void AsignaRegisterClassMapPorDefecto<T>()
        {
            if (!BsonClassMap.IsClassMapRegistered(typeof(T)))
            {
                BsonClassMap.RegisterClassMap<T>(cm =>
                {
                    cm.AutoMap();
                    cm.SetIgnoreExtraElements(true);
                });
            }
        }

        /// <summary>
        /// Persiste un listado de Modelos en la collecion indicada.
        /// </summary>
        /// <param name="collectionName">Nombre de la colección.</param>
        /// <param name="listaModelos">Lista de modelos a persistir.</param>
        public void UpsertCollection(string collectionName, IList<IModeloBase> listaModelos)
        {
            UpsertCollection(MongoDB, collectionName, listaModelos);
        }

        public void UpsertCollectionReportes<T>(string collectionName, List<T> lista)
        {
            InsertaColeccion(MongoDB, collectionName, lista);
        }

        /// <summary>
        /// Persiste un listado de Modelos en la collecion indicada.
        /// </summary>
        /// <param name="mongoDB">Conexión a utilizar para persistir la información.</param>
        /// <param name="collectionName">Nombre de la colección.</param>
        /// <param name="listaModelos">Lista de modelos a persistir.</param>
        private void UpsertCollection(IMongoDatabase mongoDB, string collectionName, IList<IModeloBase> listaModelos)
        {
            try
            {
                if (listaModelos == null || listaModelos.Count == 0)
                {
                    return;
                }
                var collection = mongoDB.GetCollection<BsonDocument>(collectionName);
                var updateModels = new ReplaceOneModel<BsonDocument>[listaModelos.Count];
                var index = 0;
                var keyPropertyName = listaModelos[0].GetKeyPropertyName();
                foreach (var modelo in listaModelos)
                {
                    try
                    {
                        var blokToUpdate = BsonDocument.Parse(modelo.ToJson());
                        var filter = Builders<BsonDocument>.Filter.Eq(keyPropertyName, modelo.GetKeyPropertyVale());
                        updateModels[index] = new ReplaceOneModel<BsonDocument>(filter, blokToUpdate) { IsUpsert = true };
                        index++;
                    }
                    catch (Exception ex)
                    {
                        var pathError = EscribeJson("Error-item-", modelo.ToJson());
                        LogUtil.Error(new Dictionary<string, object>
                        {
                            {"Error", ex},
                            {"Json", pathError}
                        });
                        throw;
                    }
                }
                collection.BulkWrite(updateModels);
            }
            catch (Exception ex)
            {
                var pathError = EscribeJson("Error-list-", listaModelos);
                LogUtil.Error(new Dictionary<string, object>
                {
                    {"Error", ex},
                    {"Json", pathError}
                });
                throw;
            }

        }
        /// <summary>
        /// Persiste un listado de Modelos en la collecion indicada.
        /// </summary>
        /// <param name="mongoDB">Conexión a utilizar para persistir la información.</param>
        /// <param name="collectionName">Nombre de la colección.</param>
        /// <param name="listaModelos">Lista de modelos a persistir.</param>
        private void InsertCollection(IMongoDatabase mongoDB, string collectionName, IList<IModeloBase> listaModelos)
        {
            try
            {
                if (listaModelos == null || listaModelos.Count == 0)
                {
                    return;
                }

                var collection = mongoDB.GetCollection<BsonDocument>(collectionName);
                var insertModels = new InsertOneModel<BsonDocument>[listaModelos.Count];
                var index = 0;
                var keyPropertyName = listaModelos[0].GetKeyPropertyName();
                foreach (var modelo in listaModelos)
                {
                    try
                    {
                        var documentToInsert = BsonDocument.Parse(modelo.ToJson());
                        insertModels[index] = new InsertOneModel<BsonDocument>(documentToInsert);
                        index++;
                    }
                    catch (Exception ex)
                    {
                        var pathError = EscribeJson("Error-", modelo.ToJson());
                        LogUtil.Error(new Dictionary<string, object>
                        {
                            {"Error", ex},
                            {"Json", pathError}
                        });
                        throw;
                    }
                }
                collection.BulkWrite(insertModels);
            }
            catch (Exception ex)
            {
                var pathError = EscribeJson("Error-", listaModelos);
                LogUtil.Error(new Dictionary<string, object>
                {
                    {"Error", ex},
                    {"Json", pathError}
                });
                throw;
            }

        }

        /// <summary>
        /// Persiste un listado de Modelos en la collecion indicada.
        /// </summary>
        /// <param name="mongoDB">Conexión a utilizar para persistir la información.</param>
        /// <param name="collectionNameSpotFire">Nombre de la colección.</param>
        /// /// <param name="collectionEnvios">Nombre de la colección.</param>
        /// /// <param name="collectionHechos">Nombre de la colección.</param>
        /// <param name="EnvioModelo">Lista de modelos a persistir.</param>
        /// /// <param name="rolesPresentacion">Lista de modelos a persistir.</param>
        /// /// <param name="dimensiones">Lista de modelos a persistir.</param>
        /// 
        /// /// <param name="HechosModelo">Lista de hechos a persistir.</param>
        private void LLenarHechoSpotfire(IMongoDatabase mongoDB, string collectionNameSpotFire, string collectionEnvios, string collectionHechos, Envio EnvioModelo, IDictionary<string, Hecho> HechosModelo, IDictionary<string, RolPresentacion> rolesPresentacion, IDictionary<string, MiembrosDimensionales> dimensiones, TaxonomiaDto taxo)
        {

            try
            {
                if (EnvioModelo == null)
                {
                    return;
                }

                List<BsonDocument> hechosSpotfire = new List<BsonDocument>();
                //IList<String> dimensiones = null;
                IDictionary<String, IDictionary<String, int>> concepotsRol = null;

                var xpe = AbaxXBRLCore.XPE.impl.XPEServiceImpl.GetInstance();
                var errores = new List<ErrorCargaTaxonomiaDto>();



                ObtenElementosTaxonomia(taxo, out concepotsRol);


                var listaRoles = new List<string>();
                foreach (var keyRol in rolesPresentacion.Keys) {
                    var rolPresentacion = rolesPresentacion[keyRol];
                    listaRoles.Add(rolPresentacion.IdRolPresentacion);
                }

                var listaDimensiones = new List<string>();
                foreach (var keyDimension in dimensiones.Keys)
                {
                    var dimensionMiembro = dimensiones[keyDimension];
                    listaDimensiones.Add(dimensionMiembro.IdDimension);
                }



                var lista = new List<IModeloBase>();
                foreach (var key in HechosModelo.Keys)
                {

                    try
                    {
                        var Hecho = HechosModelo[key];
                        lista.Add(Hecho);
                        HechoSpotfire hechoSpotfire = new HechoSpotfire(EnvioModelo, Hecho, listaRoles, concepotsRol, listaDimensiones);
                        hechosSpotfire.Add(hechoSpotfire.ToBson());

                    }
                    catch (Exception ex)
                    {
                        var pathError = EscribeJson("Error-", "");
                        LogUtil.Error(new Dictionary<string, object>
                        {
                            {"Error", ex},
                            {"Json", pathError}
                        });
                        throw;
                    }
                }

                var spotfireCollection = ObtenerCollection("HechoSpotfire");

                if (hechosSpotfire.Count > 0)
                {
                    spotfireCollection.InsertBatch(hechosSpotfire);
                }


            }
            catch (Exception ex)
            {
                var pathError = EscribeJson("Error-", "");
                LogUtil.Error(new Dictionary<string, object>
                {
                    {"Error", ex},
                    {"Json", pathError}
                });
                throw;
            }
        }

        /// <summary>
        /// Evalua la taxonomía y llena los elementos necearios para su persistencia.
        /// </summary>
        /// <param name="taxonomia">TAxonomía que se evalua.</param>
        /// <param name="concepotsRol">Posición de los roles de presentación por concepto.</param>
        private void ObtenElementosTaxonomia(
            TaxonomiaDto taxonomia, out IDictionary<String, IDictionary<String, int>> concepotsRol)
        {
            var roles = RolesSpotfire;
            var dimensiones = DimensionesSpotfire;
            concepotsRol = new Dictionary<String, IDictionary<String, int>>();
            foreach (var rolPresentacion in taxonomia.RolesPresentacion)
            {
                var aliasRol = ObtenAliasRol(rolPresentacion.Uri);
                EvaluaEstructuras(taxonomia, rolPresentacion.Estructuras, aliasRol, roles, dimensiones, concepotsRol, 0);
            }
        }

        /// <summary>
        /// Evalua las estructuras y llena los componentes requeridos.
        /// </summary>
        /// <param name="taxonomia">Taxonomía de donde se extrae la información.</param>
        /// <param name="listaEstructuras">Lista de estructuras a evaluar.</param>
        /// <param name="aliasRol">Identificador del rol</param>
        /// <param name="roles">Lista de roles existentes.</param>
        /// <param name="dimensiones">Lista de dimensiones existentes.</param>
        /// <param name="concepotsRol">Conceptos por rol.</param>
        /// <param name="indexEstructrua">Indice de la estructrua actual.</param>
        /// <returns></returns>
        private int EvaluaEstructuras(
            TaxonomiaDto taxonomia,
            IList<EstructuraFormatoDto> listaEstructuras,
            String aliasRol, IList<String> roles,
            IList<String> dimensiones,
            IDictionary<String, IDictionary<String, int>> concepotsRol,
            int indexEstructrua)
        {
            foreach (var estructrua in listaEstructuras)
            {
                ConceptoDto concepto;
                if (taxonomia.ConceptosPorId.TryGetValue(estructrua.IdConcepto, out concepto))
                {
                    if (!(concepto.EsAbstracto ?? false))
                    {
                        IDictionary<String, int> posicionRol;
                        if (!concepotsRol.TryGetValue(concepto.Id, out posicionRol))
                        {
                            posicionRol = new Dictionary<String, int>();
                            concepotsRol.Add(concepto.Id, posicionRol);
                        }
                        if (posicionRol.ContainsKey(aliasRol))
                        {
                            var indexAlias = 2;
                            var aliasAuxiliar = aliasRol + "_" + indexAlias;
                            while (posicionRol.ContainsKey(aliasAuxiliar))
                            {
                                indexAlias++;
                                aliasAuxiliar = aliasAuxiliar + "_" + indexAlias;
                            }
                            posicionRol.Add(aliasAuxiliar, indexEstructrua);
                            if (!roles.Contains(aliasAuxiliar))
                            {
                                roles.Add(aliasAuxiliar);
                            }
                        }
                        else
                        {
                            posicionRol.Add(aliasRol, indexEstructrua);
                        }

                    }
                    else if ((concepto.EsDimension ?? false) && !dimensiones.Contains(concepto.Id))
                    {
                        dimensiones.Add(concepto.Id);
                    }
                }
                if (estructrua.SubEstructuras != null && estructrua.SubEstructuras.Count > 0)
                {
                    indexEstructrua = EvaluaEstructuras(taxonomia, estructrua.SubEstructuras, aliasRol, roles, dimensiones, concepotsRol, indexEstructrua);
                }
                indexEstructrua++;
            }
            return indexEstructrua;
        }

        /// <summary>
        /// Obtiene un alias que se utilizará como nombre del atributo.
        /// </summary>
        /// <param name="uri">Uri a evaluar.</param>
        /// <returns>Alias.</returns>
        private String ObtenAliasRol(String uri)
        {
            String alias = null;
            var index = uri.LastIndexOf("role-");
            if (index != -1)
            {
                alias = uri.Substring(index + 5);
            }
            else
            {
                index = uri.LastIndexOf("/");
                if (index != -1)
                {
                    alias = uri.Substring(index + 1);
                }
            }

            return "Rol_" + alias;
        }

        public void InsertaColeccion<T>(IMongoDatabase mongoDB, string collectionName, List<T> listaModelos)
        {
            try
            {
                if (listaModelos == null || listaModelos.Count == 0)
                {
                    return;
                }
                var collection = mongoDB.GetCollection<BsonDocument>(collectionName);
                var insertModels = new InsertOneModel<BsonDocument>[listaModelos.Count];
                var index = 0;
                //var keyPropertyName = listaModelos[0].GetKeyPropertyName();
                foreach (var modelo in listaModelos)
                {
                    try
                    {
                        var documentToInsert = BsonDocument.Parse(modelo.ToJson());
                        insertModels[index] = new InsertOneModel<BsonDocument>(documentToInsert);
                        index++;
                    }
                    catch (Exception ex)
                    {
                        var pathError = EscribeJson("Error-", modelo.ToJson());
                        LogUtil.Error(new Dictionary<string, object>
                        {
                            {"Error", ex},
                            {"Json", pathError}
                        });
                        throw;
                    }
                }
                collection.BulkWrite(insertModels);
            }
            catch (Exception ex)
            {
                //var pathError = EscribeJson("Error-", listaModelos);
                LogUtil.Error(new Dictionary<string, object>
                {
                    {"Error", ex}
                  //  {"Json", pathError}
                });
                throw;
            }

        }

        /// <summary>
        /// Persiste un listado de Modelos en la collecion indicada. Eliminando en primer lugar todos los hechos de envíos anteriores.
        /// </summary>
        /// <param name="mongoDB">Conexión a utilizar para persistir la información.</param>
        /// <param name="collectionName">Nombre de la colección.</param>
        /// <param name="listaModelos">Lista de modelos a persistir.</param>
        public void InserttChunksCollection(IMongoDatabase mongoDB, string collectionName, IList<IModeloBase> listaModelos)
        {
            try
            {
                if (listaModelos == null || listaModelos.Count == 0)
                {
                    return;
                }
                var collection = mongoDB.GetCollection<BsonDocument>(collectionName);
                var insertModels = new InsertOneModel<BsonDocument>[listaModelos.Count];
                var listaChunks = new List<IModeloBase>();
                var index = 0;
                var keyPropertyName = listaModelos[0].GetKeyPropertyName();
                foreach (var modelo in listaModelos)
                {
                    try
                    {
                        var documentToInsert = BsonDocument.Parse(modelo.ToJson());
                        insertModels[index] = new InsertOneModel<BsonDocument>(documentToInsert);
                        if (modelo.IsChunks())
                        {
                            listaChunks.Add(modelo);
                        }
                        index++;
                    }
                    catch (Exception ex)
                    {
                        var pathError = EscribeJson("Error-item-", modelo.ToJson());
                        LogUtil.Error(new Dictionary<string, object>
                        {
                            {"Error", ex},
                            {"Json", pathError}
                        });
                        throw;
                    }
                }
                collection.BulkWrite(insertModels);
                if (listaChunks.Count > 0)
                {
                    InsertChunks(listaChunks);
                }

            }
            catch (Exception ex)
            {
                var pathError = EscribeJson("Error-list-", listaModelos);
                LogUtil.Error(new Dictionary<string, object>
                {
                    {"Error", ex},
                    {"Json", pathError}
                });
                throw;
            }
        }

        /// <summary>
        /// Persiste un listado de Modelos en la collecion indicada.
        /// </summary>
        /// <param name="mongoDB">Conexión a utilizar para persistir la información.</param>
        /// <param name="collectionName">Nombre de la colección.</param>
        /// <param name="listaModelos">Lista de modelos a persistir.</param>
        private void UpsertHechosCollection(IMongoDatabase mongoDB, string collectionName, IList<IModeloBase> listaModelos)
        {
            try
            {
                if (listaModelos == null || listaModelos.Count == 0)
                {
                    return;
                }
                var collection = mongoDB.GetCollection<BsonDocument>(collectionName);
                var updateModels = new UpdateOneModel<BsonDocument>[listaModelos.Count];
                var listaChunks = new List<IModeloBase>();
                var index = 0;
                var keyPropertyName = listaModelos[0].GetKeyPropertyName();
                foreach (var modelo in listaModelos)
                {
                    try
                    {
                        var documentToInsert = BsonDocument.Parse(modelo.ToJson());
                        var hecho = (Hecho)modelo;
                        FilterDefinition<BsonDocument> filter = "{_id:\"" + modelo.GetKeyPropertyVale() + "\"}";
                        UpdateDefinition<BsonDocument> update = "{ $set: " + ((Hecho)modelo).StatementUpdateValueMongo() + ", $setOnInsert: " + ((Hecho)modelo).SetOnInsertMongo() + " }";
                        updateModels[index] = new UpdateOneModel<BsonDocument>(filter, update) { IsUpsert = true };
                        if (modelo.IsChunks())
                        {
                            listaChunks.Add(modelo);
                        }
                        index++;
                    }
                    catch (Exception ex)
                    {
                        var pathError = EscribeJson("Error-", modelo.ToJson());
                        LogUtil.Error(new Dictionary<string, object>
                        {
                            {"Error", ex},
                            {"Json", pathError}
                        });
                        throw;
                    }
                }
                collection.BulkWrite(updateModels);
                if (listaChunks.Count > 0)
                {
                    InsertChunks(listaChunks);
                }

            }
            catch (Exception ex)
            {
                var pathError = EscribeJson("Error-", listaModelos);
                LogUtil.Error(new Dictionary<string, object>
                {
                    {"Error", ex},
                    {"Json", pathError}
                });
                throw;
            }
        }
        /// <summary>
        /// Persiste los Chunks de un registro del cellstore.
        /// </summary>
        /// <param name="listaModelos"></param>
        private void InsertChunks(IList<IModeloBase> listaModelos)
        {
            try
            {
                var mongoServerSettings = new MongoServerSettings
                {
                    Server = ClienteMongo.Settings.Server,
                    Credentials = ClienteMongo.Settings.Credentials
                };
                var mongoServer = new MongoServer(mongoServerSettings);
                var gridFS = mongoServer.GetDatabase(DataBaseName).GridFS;
                foreach (var modelo in listaModelos)
                {
                    try
                    {
                        var stream = modelo.GetChunksSteram();
                        var options = modelo.GetChunksOptions();
                        var hashCode = modelo.GetKeyPropertyVale();
                        gridFS.Upload(stream, hashCode, options);
                    }
                    catch (Exception ex)
                    {
                        var pathError = EscribeJson("Error-", modelo.ToJson());
                        LogUtil.Error(new Dictionary<string, object>
                        {
                            {"Error", ex},
                            {"Json", pathError}
                        });
                        throw;
                    }
                }
            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);

            }
        }

        /// <summary>
        /// Persiste la información del modelo cellstore en la base de datos de mongo.
        /// </summary>
        /// <param name="estructuraMapeo">Estructura a persistir.</param>
        public void PeristeModeloCellStore(EstructuraMapeoDTO estructuraMapeo)
        {

            LogUtil.Info("Inicia persistencia MONGO [" + estructuraMapeo.Envio.NombreArchivo + "] comandos.");
            var inicio = (DateTime.Now);
            var clienteMongo = new MongoClient(ConnectionString);
            var mongoDB = clienteMongo.GetDatabase(DataBaseName);
            var envio = estructuraMapeo.Envio;
            ActualizaVersion(estructuraMapeo.Envio, estructuraMapeo.Hechos);
            InsertCollection(mongoDB, BlockStoreEnvio, ObtenValoresDiccionario(estructuraMapeo.Envio));
            InserttChunksCollection(mongoDB, BlockStoreHecho, ObtenValoresDiccionario(estructuraMapeo.Hechos));
            
            LLenarHechoSpotfire(mongoDB, BlockStoreHechoSpotfire, BlockStoreEnvio, BlockStoreHecho, estructuraMapeo.Envio, estructuraMapeo.Hechos, estructuraMapeo.RolesPresentacionCatalogo, estructuraMapeo.DimensionesMiembroConcepto, estructuraMapeo.DocumentoInstancia.Taxonomia);
            if (!ExisteTaxonomiaRolPresentacion(estructuraMapeo.Taxonomia.EspacioNombresPrincipal))
            {
                InsertCollection(mongoDB, BlockStoreRolPresentacion, ObtenValoresDiccionario(estructuraMapeo.RolesPresentacionCatalogo));
            }
            var fin = (DateTime.Now);
            LogUtil.Info("Termina persistencia MONGO [" + estructuraMapeo.Envio.NombreArchivo + "] la transaccion tomo [" + (fin - inicio).TotalMilliseconds + "] milisegundos. ");
        }
        /// <summary>
        /// Determina si existen los registros para la colección de roles de presentación, con la taxonomía indicada.
        /// </summary>
        /// <param name="espacioNombresPrincipal">Espacio de nombres principal de la taxonomía buscada.</param>
        /// <returns>Si existen registros para la taxonomía dada.</returns>
        public bool ExisteTaxonomiaRolPresentacion(String espacioNombresPrincipal)
        {
            var existe = true;
            try
            {
                var filtroTaxonomia = Builders<BsonDocument>.Filter.Eq("Taxonomia", espacioNombresPrincipal);
                var nombreColeccion = ObtenNombreCollecion(typeof(RolPresentacion));
                var coleccion = MongoDB.GetCollection<BsonDocument>(nombreColeccion);
                var cursor = coleccion.Find(filtroTaxonomia);
                var cantidadRegistros = cursor.Count();
                existe = cantidadRegistros > 0;
            }
            catch (Exception ex)
            {
                LogUtil.Error(new Dictionary<string, object>
                {
                    {"Error", ex},
                });
                throw;
            }
            return existe;
        }
        /// <summary>
        /// Busca los envíos que coincidan con la taxonomía, clave de la emisora y periodo reportado. 
        /// Marca los envíos anteriores como vencidos y elimina sus hechos.
        /// </summary>
        /// <param name="envio">Objeto con la información del envío.</param>
        /// <param name="hechos">Diccionario con los hechos a persistir.</param>
        public void ActualizaVersion(Envio envio, IDictionary<string, Hecho> hechos)
        {
            try
            {   
                var nombreColeccionEnvios = ObtenNombreCollecion(typeof(Envio));
                var nombreColeccionHecho = ObtenNombreCollecion(typeof(Hecho));
                var collectionEnvio = MongoDB.GetCollection<BsonDocument>(nombreColeccionEnvios);
                var collectionHecho = MongoDB.GetCollection<BsonDocument>(nombreColeccionHecho);

                //Eliminamos los procesamientos previos del mismo archivo.
                FilterDefinition<BsonDocument> filterProcesamientosPrevios = envio.GeneraConsultaProcesamientosPrevios();
                var listaEnviosProcesamientoPrevio = collectionEnvio.Find(filterProcesamientosPrevios).ToList();
                foreach (var envioProcesamientoPrevioBson in listaEnviosProcesamientoPrevio)
                {
                    var envioProcesamientoPrevio = BsonSerializer.Deserialize<Envio>(envioProcesamientoPrevioBson);
                    var filterEnvioEliminar = Builders<BsonDocument>.Filter.Eq("IdEnvio", envioProcesamientoPrevio.IdEnvio);
                    collectionHecho.DeleteManyAsync(filterEnvioEliminar);
                    collectionEnvio.DeleteManyAsync(filterEnvioEliminar);
                }

                //Iniciamos con la actualización de forma azincrona
                FilterDefinition<BsonDocument> filterEnviosAnteriores = envio.GeneraConsultaEnviosEntidadPeriodo();
                var cursorEnvios = collectionEnvio.Find(filterEnviosAnteriores);
                var listaEnviosBson = cursorEnvios.ToList();

                UpdateDefinition<BsonDocument> updateHecho = "{ $set: {\"Remplazado\": true, \"IdEnvioRemplazo\": \"" + envio.IdEnvio + "\"} }";
                foreach (var envioBoson in listaEnviosBson)
                {

                    var envioAnterior = BsonSerializer.Deserialize<Envio>(envioBoson);
                    var filterHechosActualizar = Builders<BsonDocument>.Filter.Eq("IdEnvio", envioAnterior.IdEnvio);
                    collectionHecho.UpdateManyAsync(filterHechosActualizar, updateHecho);
                }
                UpdateDefinition<BsonDocument> update = "{ $set: {\"EsVersionActual\": false, \"IdEnvioRemplazo\": " + envio.IdEnvio + "} }";
                collectionEnvio.UpdateManyAsync(filterEnviosAnteriores, update);
                //Actualizamos los hechos enviados en reportes de periodos anteriores.
                var idsHEchosEnviados = new List<string>();
                FilterDefinition<BsonDocument> filterNoEnvioActual = Builders<BsonDocument>.Filter.Ne("IdEnvio", envio.IdEnvio);
                FilterDefinition<BsonDocument> filterRemplazadoNoExiste = Builders<BsonDocument>.Filter.Exists("Remplazado", false);
                FilterDefinition<BsonDocument> filterRemplazadoFalse = Builders<BsonDocument>.Filter.Eq("Remplazado", false);
                FilterDefinition<BsonDocument> filterRemplazadoOr = Builders<BsonDocument>.Filter.Or(filterRemplazadoNoExiste, filterRemplazadoFalse);
                FilterDefinition<BsonDocument> filterConsideracionesEnvio = Builders<BsonDocument>.Filter.And(filterNoEnvioActual, filterRemplazadoOr);

                foreach (var idHEcho in hechos.Keys)
                {
                    idsHEchosEnviados.Add(idHEcho);
                    if (idsHEchosEnviados.Count >= 500)
                    {
                        FilterDefinition<BsonDocument> filterIdsHechosActualizar = Builders<BsonDocument>.Filter.In("IdHecho", idsHEchosEnviados);
                        FilterDefinition<BsonDocument> filterHechosReenviados = Builders<BsonDocument>.Filter.And(filterIdsHechosActualizar, filterConsideracionesEnvio);
                        collectionHecho.UpdateManyAsync(filterHechosReenviados, updateHecho);
                        idsHEchosEnviados = new List<string>();                    }
                }
                if (idsHEchosEnviados.Count > 0)
                {
                    FilterDefinition<BsonDocument> filterIdsHechosActualizar = Builders<BsonDocument>.Filter.In("IdHecho", idsHEchosEnviados);
                    FilterDefinition<BsonDocument> filterHechosReenviados = Builders<BsonDocument>.Filter.And(filterIdsHechosActualizar, filterConsideracionesEnvio);
                    collectionHecho.UpdateManyAsync(filterHechosReenviados, updateHecho);
                }
            }
            catch (Exception ex)
            {
                LogUtil.Error(new Dictionary<string, object>
                {
                    {"Error", ex},
                });
                throw;
            }
        }
        

        /// <summary>
        /// Ejecuta una consulta al repositorio de Mongo.
        /// Si no se indica la página inicia desde el primer elemento.
        /// Si no se indica le número de registros se retorna todo el universo de datos.
        /// </summary>
        /// <param name="nombreColeccion">Nombre de la colleccion a consultar.</param>
        /// <param name="filtrosString">Filtros de la consulta.</param>
        /// <returns>Listado con la representación JSON de los elementos encontrados para el filtro, ordenamiento y página dados.</returns>
        public IList<T> ConsultaElementosColeccion<T>(string filtrosString)
        {
            return ConsultaElementosColeccion<T>(filtrosString, null, 0, 0);
        }

        /// <summary>
        /// Ejecuta una consulta al repositorio de Mongo.
        /// Si no se indica la página inicia desde el primer elemento.
        /// Si no se indica le número de registros se retorna todo el universo de datos.
        /// </summary>
        /// <param name="nombreColeccion">Nombre de la colleccion a consultar.</param>
        /// <param name="filtrosString">Filtros de la consulta.</param>
        /// <param name="sortString">Parametros de ordenamiento.</param>
        /// <param name="numRegistros">Número máximo de registros a retornar.</param>
        /// <param name="pagina">Pagina de inicio calculada en base al número de registros.</param>
        /// <returns>Listado con la representación JSON de los elementos encontrados para el filtro, ordenamiento y página dados.</returns>
        public IList<T> ConsultaElementosColeccion<T>(string filtrosString, string sortString, int numRegistros, int pagina)
        {
            
            var nombreColeccion = ObtenNombreCollecion(typeof(T));

            var collection = MongoDB.GetCollection<BsonDocument>(nombreColeccion);
            var cursor = collection.Find(String.IsNullOrEmpty(filtrosString) ? "{}" : filtrosString);
            if (!String.IsNullOrEmpty(sortString))
            {
                SortDefinition<BsonDocument> sort = sortString;
                cursor = cursor.Sort(sort);
            }

            if (pagina > 0 && numRegistros > 0)
            {
                var inicio = (pagina - 1) * numRegistros;
                cursor.Skip(inicio);
            }
            if (numRegistros > 0)
            {
                cursor.Limit(numRegistros);
            }

            var listaBosonDocuments = cursor.ToList();
            var listaJsons = new List<T>();

            foreach (var bosonDocument in listaBosonDocuments)
            {

                var hecho = BsonSerializer.Deserialize<T>(bosonDocument);
                listaJsons.Add(hecho);
            }
            return listaJsons;
        }

        /// <summary>
        /// Ejecuta una consulta al repositorio de Mongo.
        /// Si no se indica la página inicia desde el primer elemento.
        /// Si no se indica le número de registros se retorna todo el universo de datos.
        /// </summary>
        /// <param name="nombreColeccion">Nombre de la colleccion a consultar.</param>
        /// <param name="filtrosString">Filtros de la consulta.</param>
        /// <returns>Cantidad de elementos existentes en la colección.</returns>
        public long CuentaElementosColeccion(string nombreColeccion, string filtrosString)
        {
            FilterDefinition<BsonDocument> filter = filtrosString;
            var collection = MongoDB.GetCollection<BsonDocument>(nombreColeccion);
            var cursor = collection.Find(filter);
            var conteo = cursor.Count();
            return conteo;
        }

        public IList<T> ConsultaElementos<T>(string nombreColeccion, string filtrosString)
        {
            FilterDefinition<T> filter = filtrosString;
            var collection = MongoDB.GetCollection<BsonDocument>(nombreColeccion);
            var cursor = collection.Find(filtrosString);
            var listaBosonDocuments = cursor.ToList();
            var listaJsons = new List<T>();
            var serializerSettings = new JsonSerializerSettings();
            Regex rgx = new Regex("\"_id\"\\s*\\:\\s*ObjectId\\(\"[\\w\\d]+\"\\)\\s*,");
            Regex rgxd = new Regex("ISODate\\((\".+?\")\\)");
            foreach (var bosonDocument in listaBosonDocuments)
            {

                var jsonString = bosonDocument.ToJson();
                jsonString = rgx.Replace(jsonString, "");
                jsonString = rgxd.Replace(jsonString, "$1");
                var elemento = (T)JsonConvert.DeserializeObject(jsonString, typeof(T), serializerSettings);
                listaJsons.Add(elemento);
            }
            return listaJsons;
        }

        /// <summary>
        /// Ejecuta una consulta al repositorio de Mongo.
        /// Si no se indica la página inicia desde el primer elemento.
        /// Si no se indica le número de registros se retorna todo el universo de datos.
        /// </summary>
        /// <param name="nombreColeccion">Nombre de la colleccion a consultar.</param>
        /// <param name="filtrosString">Filtros de la consulta.</param>
        /// <returns>Cantidad de elementos existentes en la colección.</returns>
        private long CuentaElementosColeccion(IMongoDatabase mongoDB, string nombreColeccion, string filtrosString)
        {
            FilterDefinition<BsonDocument> filter = filtrosString;
            var collection = mongoDB.GetCollection<BsonDocument>(nombreColeccion);
            var cursor = collection.Find(filter);
            var conteo = cursor.Count();
            return conteo;
        }
        /// <summary>
        /// Retorna la taxonomia en un listado estandar..
        /// </summary>
        /// <param name="diccionario">Diccionario a evaluar.</param>
        /// <returns>Lista de valores contenidos en el diccionario.</returns>
        private IList<IModeloBase> ObtenValoresDiccionario(Taxonomia value)
        {
            var lista = new List<IModeloBase>();
            lista.Add(value);
            return lista;
        }
        /// <summary>
        /// Retorna la taxonomia en un listado estandar..
        /// </summary>
        /// <param name="diccionario">Diccionario a evaluar.</param>
        /// <returns>Lista de valores contenidos en el diccionario.</returns>
        private IList<IModeloBase> ObtenValoresDiccionario(Envio value)
        {
            var lista = new List<IModeloBase>();
            lista.Add(value);
            return lista;
        }
        /// <summary>
        /// Retorna el listado de elementos contenidos en el diccionario como valores.
        /// </summary>
        /// <param name="diccionario">Diccionario a evaluar.</param>
        /// <returns>Lista de valores contenidos en el diccionario.</returns>
        private IList<IModeloBase> ObtenValoresDiccionario(IDictionary<string, Unidad> diccionario)
        {
            var lista = new List<IModeloBase>();
            foreach (var key in diccionario.Keys)
            {
                var value = diccionario[key];
                lista.Add(value);
            }
            return lista;
        }
        /// <summary>
        /// Retorna el listado de elementos contenidos en el diccionario como valores.
        /// </summary>
        /// <param name="diccionario">Diccionario a evaluar.</param>
        /// <returns>Lista de valores contenidos en el diccionario.</returns>
        private IList<IModeloBase> ObtenValoresDiccionario(IDictionary<string, Concepto> diccionario)
        {
            var lista = new List<IModeloBase>();
            foreach (var key in diccionario.Keys)
            {
                var value = diccionario[key];
                lista.Add(value);
            }
            return lista;
        }
        /// <summary>
        /// Retorna el listado de elementos contenidos en el diccionario como valores.
        /// </summary>
        /// <param name="diccionario">Diccionario a evaluar.</param>
        /// <returns>Lista de valores contenidos en el diccionario.</returns>
        private IList<IModeloBase> ObtenValoresDiccionario(IDictionary<string, Entidad> diccionario)
        {
            var lista = new List<IModeloBase>();
            foreach (var key in diccionario.Keys)
            {
                var value = diccionario[key];
                lista.Add(value);
            }
            return lista;
        }
        /// <summary>
        /// Retorna el listado de elementos contenidos en el diccionario como valores.
        /// </summary>
        /// <param name="diccionario">Diccionario a evaluar.</param>
        /// <returns>Lista de valores contenidos en el diccionario.</returns>
        private IList<IModeloBase> ObtenValoresDiccionario(IDictionary<string, Hecho> diccionario)
        {
            var lista = new List<IModeloBase>();
            foreach (var key in diccionario.Keys)
            {
                var value = diccionario[key];
                lista.Add(value);
            }
            return lista;
        }
        /// <summary>
        /// Retorna el listado de elementos contenidos en el diccionario como valores.
        /// </summary>
        /// <param name="diccionario">Diccionario a evaluar.</param>
        /// <returns>Lista de valores contenidos en el diccionario.</returns>
        private IList<IModeloBase> ObtenValoresDiccionario(IDictionary<string, Periodo> diccionario)
        {
            var lista = new List<IModeloBase>();
            foreach (var key in diccionario.Keys)
            {
                var value = diccionario[key];
                lista.Add(value);
            }
            return lista;
        }

        /// <summary>
        /// Retorna el listado de elementos contenidos en el diccionario como valores.
        /// </summary>
        /// <param name="diccionario">Diccionario a evaluar.</param>
        /// <returns>Lista de valores contenidos en el diccionario.</returns>
        private IList<IModeloBase> ObtenValoresDiccionario(IDictionary<string, RolPresentacion> diccionario)
        {
            var lista = new List<IModeloBase>();
            foreach (var key in diccionario.Keys)
            {
                var value = diccionario[key];
                lista.Add(value);
            }
            return lista;
        }

        /// <summary>
        /// Crea un archivo con el contenido enviado.
        /// </summary>
        /// <param name="prefijo">Nombre del archivo.</param>
        /// <param name="contenido">Contenido del arhivo.</param>
        /// <returns>Paths del archivo creado.</returns>
        private string EscribeJson(string prefijo, string contenido)
        {
            var path = "";
            try
            {
                var now = DateTime.Now;
                var nombre = now.Year + "-" + now.Month + "-" + now.Minute + "-" + now.Second;
                var nombreArchivo = prefijo + nombre;

                if (String.IsNullOrEmpty(JSONOutDirectory))
                {
                    return ("No es posible escribir el archivo [" + nombreArchivo + "] ya que no se indico el directorio de salida.");
                }
                var direcotryOut = JSONOutDirectory;
                if (!Directory.Exists(direcotryOut))
                {
                    try
                    {
                        var directoryFullPath = Path.GetFullPath(direcotryOut);
                        LogUtil.Info("Creando directorio de ruta relativa \":" + direcotryOut + "\" => \"" + directoryFullPath + "\"");
                        Directory.CreateDirectory(directoryFullPath);
                    }
                    catch (Exception e)
                    {
                        direcotryOut = ".\\";
                    }
                }
                var fullPath = direcotryOut + Path.DirectorySeparatorChar + nombreArchivo + ".json";
                if (File.Exists(fullPath))
                {
                    File.Delete(fullPath);
                }
                // Create a file to write to.
                using (StreamWriter sw = File.CreateText(fullPath))
                {
                    sw.Write(contenido);
                    sw.Close();
                }
                path = Path.GetFullPath(fullPath);
            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
            }
            return path;
        }
        /// <summary>
        /// Crea un archivo con el contenido enviado.
        /// </summary>
        /// <param name="prefijo">Nombre del archivo.</param>
        /// <param name="contenido">Contenido del arhivo.</param>
        /// <returns>Paths del archivo creado.</returns>
        private string EscribeJson(string prefijo, IList<IModeloBase> listaModelos)
        {
            var path = "";
            try
            {
                var jsonSettings = new JsonSerializerSettings()
                {
                    ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Serialize,
                    PreserveReferencesHandling = Newtonsoft.Json.PreserveReferencesHandling.Objects,
                    Formatting = Formatting.Indented
                };
                var contenido = listaModelos == null ? "null" : JsonConvert.SerializeObject(listaModelos, Formatting.Indented, jsonSettings);
                var now = DateTime.Now;
                var nombre = now.Year + "-" + now.Month + "-" + now.Minute + "-" + now.Second;
                var nombreArchivo = prefijo + nombre;

                if (String.IsNullOrEmpty(JSONOutDirectory))
                {
                    return ("No es posible escribir el archivo [" + nombreArchivo + "] ya que no se indico el directorio de salida.");
                }
                if (!Directory.Exists(JSONOutDirectory))
                {
                    Directory.CreateDirectory(JSONOutDirectory);
                }

                var fullPath = JSONOutDirectory + Path.DirectorySeparatorChar + nombreArchivo + ".json";
                if (File.Exists(fullPath))
                {
                    File.Delete(fullPath);
                }
                // Create a file to write to.
                using (StreamWriter sw = File.CreateText(fullPath))
                {
                    sw.Write(contenido);
                    sw.Close();
                }
                path = Path.GetFullPath(fullPath);
            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
            }
            return path;
        }
        /// <summary>
        /// Crea un archivo con el contenido enviado.
        /// </summary>
        /// <param name="prefijo">Nombre del archivo.</param>
        /// <param name="contenido">Contenido del arhivo.</param>
        /// <returns>Paths del archivo creado.</returns>
        private string EscribeJson(string prefijo, IDictionary<string, string> listaModelos)
        {
            var path = "";
            try
            {
                var jsonSettings = new JsonSerializerSettings()
                {
                    ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Serialize,
                    PreserveReferencesHandling = Newtonsoft.Json.PreserveReferencesHandling.Objects,
                    Formatting = Formatting.Indented
                };
                var contenido = listaModelos == null ? "null" : JsonConvert.SerializeObject(listaModelos, Formatting.Indented, jsonSettings);
                var now = DateTime.Now;
                var nombre = now.Year + "-" + now.Month + "-" + now.Minute + "-" + now.Second;
                var nombreArchivo = prefijo + nombre;

                if (String.IsNullOrEmpty(JSONOutDirectory))
                {
                    return ("No es posible escribir el archivo [" + nombreArchivo + "] ya que no se indico el directorio de salida.");
                }
                if (!Directory.Exists(JSONOutDirectory))
                {
                    Directory.CreateDirectory(JSONOutDirectory);
                }

                var fullPath = JSONOutDirectory + Path.DirectorySeparatorChar + nombreArchivo + ".json";
                if (File.Exists(fullPath))
                {
                    File.Delete(fullPath);
                }
                // Create a file to write to.
                using (StreamWriter sw = File.CreateText(fullPath))
                {
                    sw.Write(contenido);
                    sw.Close();
                }
                path = Path.GetFullPath(fullPath);
            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
            }
            return path;
        }
        /// <summary>
        /// Retorna el nombre configurado para la coleccion indicada.
        /// </summary>
        /// <param name="colleccion">Enum que identifica una de las collecciones disponilbes en mongo.</param>
        /// <returns>Nombre real en  Mongo de la colección requerida.</returns>
        public string ObtenNombreCollecion(ConstantesCellStore.ColeccionMongoEnum colleccion)
        {
            string nombre = null;
            switch (colleccion)
            {
                case ConstantesCellStore.ColeccionMongoEnum.HECHO:
                    nombre = BlockStoreHecho;
                    break;
                case ConstantesCellStore.ColeccionMongoEnum.ROL_PRESENTACION:
                    nombre = BlockStoreRolPresentacion;
                    break;
                case ConstantesCellStore.ColeccionMongoEnum.ENVIO:
                    nombre = BlockStoreEnvio;
                    break;

            }

            return nombre;
        }

        /// <summary>
        /// Retorna el nombre configurado para la coleccion indicada según el tipo de dato.
        /// </summary>
        /// <param name="type">Tipo de dato requerido.</param>
        /// <returns>Nombre real en  Mongo de la colección correspondiente al tipo de dato..</returns>
        public string ObtenNombreCollecion(Type type)
        {
            string nombre = null;

            if (type.Equals(typeof(Hecho)))
            {
                nombre = BlockStoreHecho;
            }
            else if (type.Equals(typeof(RolPresentacion)))
            {
                nombre = BlockStoreRolPresentacion;
            }
            else if (type.Equals(typeof(Envio)))
            {
                nombre = BlockStoreEnvio;
            }
            return nombre;
        }

        public void EliminarAsync(String nombreColeccion, String filtro)
        {
            var coleccion = MongoDB.GetCollection<BsonDocument>(nombreColeccion);

            //Eliminamos los procesamientos previos del mismo archivo.
            FilterDefinition<BsonDocument> filtroBson = filtro;
            coleccion.DeleteManyAsync(filtroBson);
        }

        /// <summary>
        /// Obtiene el valor de un checkun.
        /// </summary>
        /// <param name="fileName">Nombre del archivo, para el caso de los hechos el archivo se nombra con el hashHecho.</param>
        /// <returns>Valor del chunk o cadena vacia de no existir tal valor</returns>
        public string ObtenValorCheckun(string fileName)
        {
            string valor = String.Empty;
            var file = MongoServerDatabase.GridFS.FindOne(fileName);
            try
            {
                if (file.Exists)
                {
                    using (var stream = file.OpenRead())
                    {

                        StreamReader reader = new StreamReader(stream);
                        valor = reader.ReadToEnd();
                    }
                }
            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
            }
            return valor;
        }

        /// <summary>
        /// Realiza una consulta agrupando los valores del campo indicado
        /// </summary>
        /// <param name="collection">Coleccion a buscar</param>
        /// <param name="campo">Campo por agrupar</param>
        /// <returns>Regresa un listado de BSON con el resultado</returns>
        public IEnumerable<BsonValue> Distinct(string collection, string campo)
        {
            return Distinct(collection, campo, null);
        }

        /// <summary>
        /// Realiza una consulta agrupando los valores del campo indicado
        /// </summary>
        /// <param name="collection">Coleccion a buscar</param>
        /// <param name="campo">Campo por agrupar</param>
        /// <param name="query">Consulta</param>
        /// <returns>Regresa un listado de BSON con el resultado</returns>
        public IEnumerable<BsonValue> Distinct(string collection, string campo, IMongoQuery query)
        {
            var miCollection = MongoServerDatabase.GetCollection<BsonDocument>(collection);

            IEnumerable<BsonValue> result = new List<BsonDocument>();

            if (query != null)
            {
                result = miCollection.Distinct(campo, query);
            }
            else
            {
                result = miCollection.Distinct(campo);
            }

            return result;
        }

        /// <summary>
        /// Se obtiene la coleccion sobe la cual se haran consultas
        /// </summary>
        /// <param name="collection">Coleccion a buscar</param>
        /// <returns>Se obtiene la collecion indicada</returns>
        public MongoCollection<BsonDocument> ObtenerCollection(string collection)
        {
            return MongoServerDatabase.GetCollection<BsonDocument>(collection);
        }

        /// <summary>
        /// Se obtiene la coleccion sobe la cual se haran consultas
        /// </summary>
        /// <param name="collection">Coleccion a buscar</param>
        /// <returns>Se obtiene la collecion indicada</returns>
        public IMongoCollection<BsonDocument> getCollection(string collection)
        {
            return MongoDB.GetCollection<BsonDocument>(collection);
        }
        /// <summary>
        /// Realiza una consulta generica para obtener documentos con el query asociado
        /// </summary>
        /// <param name="collection">Coleccion a buscar</param>
        /// <param name="query">Objeto query formado construido con la consulta</param>
        /// <returns>Regresa un listado de BSON con el resultado</returns>
        public List<BsonDocument> Consulta(string collection, IMongoQuery query)
        {
            return Consulta(collection, query, null);
        }

        /// <summary>
        /// Realiza una consulta generica para obtener documentos con el query asociado
        /// </summary>
        /// <param name="collection">Coleccion a buscar</param>
        /// <param name="query">Objeto query formado construido con la consulta</param>
        /// <param name="campos">Campos que se desean obtener de la busqueda</param>
        /// <returns>Regresa un listado de BSON con el resultado</returns>
        public List<BsonDocument> Consulta(string collection, IMongoQuery query, IMongoFields campos)
        {
            MongoCollection<BsonDocument> collectionBSON = ObtenerCollection(collection);

            List<BsonDocument> documentos = new List<BsonDocument>();

            if (campos != null)
            {
                documentos = collectionBSON.Find(query).SetFields(campos).ToList();
            }
            else
            {
                documentos = collectionBSON.Find(query).ToList();
            }

            return documentos;
        }

        /// <summary>
        /// Obtiene el listado de todos los documentos registrados en la coleccion
        /// </summary>
        /// <param name="collection">Coleccion a buscar</param>
        /// <param name="campos">Campos que se desean obtener de la busqueda</param>
        /// <returns>Regresa un listado de BSON con el resultado</returns>
        public List<BsonDocument> Consulta(string collection, BsonDocument filtrosConsulta, int paginaRequerida, int numeroRegistros)
        {
            IMongoQuery query = new QueryDocument(filtrosConsulta);

            return Consulta(collection, query, paginaRequerida, numeroRegistros);
        }

        /// <summary>
        /// Obtiene el listado de todos los documentos registrados en la coleccion
        /// </summary>
        /// <param name="collection">Coleccion a buscar</param>
        /// <param name="campos">Campos que se desean obtener de la busqueda</param>
        /// <returns>Regresa un listado de BSON con el resultado</returns>
        public List<BsonDocument> Consulta(string collection, IMongoQuery query, int paginaRequerida, int numeroRegistros)
        {
            MongoCollection<BsonDocument> collectionBSON = ObtenerCollection(collection);

            var registroInicial = (paginaRequerida - 1) * numeroRegistros;

            List<BsonDocument> registros;
            if (paginaRequerida > 0 && numeroRegistros > 0)
            {
                registros = collectionBSON.Find(query).Skip(registroInicial).Take(numeroRegistros).ToList();
            }
            else
            {
                registros = collectionBSON.Find(query).ToList();
            }

            return registros;
        }

        /// <summary>
        /// Obtiene el listado de todos los documentos registrados en la coleccion
        /// </summary>
        /// <param name="collection">Coleccion a buscar</param>
        /// <returns>Regresa un listado de BSON con el resultado</returns>
        public List<BsonDocument> ObtenerDocumentos(string collection)
        {
            return ObtenerDocumentos(collection, null);
        }

        /// <summary>
        /// Obtiene el listado de todos los documentos registrados en la coleccion
        /// </summary>
        /// <param name="collection">Coleccion a buscar</param>
        /// <param name="campos">Campos que se desean obtener de la busqueda</param>
        /// <returns>Regresa un listado de BSON con el resultado</returns>
        public List<BsonDocument> ObtenerDocumentos(string collection, IMongoFields campos)
        {
            MongoCollection<BsonDocument> collectionBSON = ObtenerCollection(collection);

            List<BsonDocument> documentos = new List<BsonDocument>();

            if (campos != null)
            {
                documentos = collectionBSON.FindAll().SetFields(campos).ToList();
            }
            else
            {
                documentos = collectionBSON.FindAll().ToList();
            }

            return documentos;
        }

        /// <summary>
        /// Obtiene el valor de un hecho checkun.
        /// </summary>
        /// <param name="codigoHashRegistro">Valor del hecho o null si no existe un valor checkun para ese hecho.</param>
        /// <returns></returns>
        public string ObtenValorHechoCheckun(string codigoHashRegistro)
        {
            string valor = null;
            var file = MongoServerDatabase.GridFS.FindOne(codigoHashRegistro);
            try
            {
                if (!file.Exists)
                {
                    return null;
                }
                using (var stream = file.OpenRead())
                {

                    StreamReader reader = new StreamReader(stream);
                    valor = reader.ReadToEnd();
                }
            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
            }

            return valor;
        }

        /// <summary>
        /// Realiza una consulta generica para obtener el numero de documentos con el query asociado
        /// </summary>
        /// <param name="collection">Colección en la cual realizara la consulta</param>
        /// <param name="filtrosConsulta">Filtros de consulta</param>
        /// <returns>Numero de documentos</returns>
        public long Count(string collection, BsonDocument filtrosConsulta)
        {
            IMongoQuery query = new QueryDocument(filtrosConsulta);

            return Count(collection, query);
        }

        /// <summary>
        /// Realiza una consulta generica para obtener el numero de documentos con el query asociado
        /// </summary>
        /// <param name="collection">Colección en la cual realizara la consulta</param>
        /// <param name="query">Filtros de consulta</param>
        /// <returns>Numero de documentos</returns>
        public long Count(string collection, IMongoQuery query)
        {
            MongoCollection<BsonDocument> miCollection = ObtenerCollection(collection);

            return miCollection.Find(query).Count();
        }
        /// <summary>
        /// Create a mongo database reference.
        /// </summary>
        /// <returns>Mongo database reference.</returns>
        public IMongoDatabase GetMongoDB()
        {
            var clienteMongo = new MongoClient(ConnectionString);
            var mongoDB = clienteMongo.GetDatabase(DataBaseName);
            return mongoDB;
        }
    }
}
