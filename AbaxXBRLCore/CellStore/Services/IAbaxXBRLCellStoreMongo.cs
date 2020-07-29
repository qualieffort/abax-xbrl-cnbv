using AbaxXBRLCore.CellStore.Constants;
using AbaxXBRLCore.CellStore.DTO;
using AbaxXBRLCore.CellStore.Modelo;
using MongoDB.Bson;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRLCore.CellStore.Services
{
    /// <summary>
    /// Definición del servico para el menjo de la persistencia de mongo.
    /// </summary>
    public interface IAbaxXBRLCellStoreMongo
    {
        /// <summary>
        /// Persiste un listado de Modelos en la collecion indicada.
        /// </summary>
        /// <param name="collectionName">Nombre de la colección.</param>
        /// <param name="listaModelos">Lista de modelos a persistir.</param>
        void UpsertCollection(string collectionName, IList<IModeloBase> listaModelos);
        /// <summary>
        /// Persiste la información del modelo cellstore en la base de datos de mongo.
        /// </summary>
        /// <param name="estructuraMapeo">Estructura a persistir.</param>
        void PeristeModeloCellStore(EstructuraMapeoDTO estructuraMapeo);
        /// <summary>
        /// Ejecuta una consulta al repositorio de Mongo.
        /// Si no se indica la página inicia desde el primer elemento.
        /// Si no se indica le número de registros se retorna todo el universo de datos.
        /// </summary>
        /// <param name="filtrosString">Filtros de la consulta.</param>
        /// <param name="sortString">Parametros de ordenamiento.</param>
        /// <param name="numRegistros">Número máximo de registros a retornar.</param>
        /// <param name="pagina">Pagina de inicio calculada en base al número de registros.</param>
        /// <returns>Listado con la representación JSON de los elementos encontrados para el filtro, ordenamiento y página dados.</returns>
        IList<T> ConsultaElementosColeccion<T>(string filtrosString, string sortString, int numRegistros, int pagina);

        /// <summary>
        /// 
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="nombreColeccion"></param>
        /// <param name="filtrosString"></param>
        /// <returns></returns>
        IList<T> ConsultaElementos<T>(string nombreColeccion, string filtrosString);
        /// <summary>
        /// Retorna el nombre configurado para la coleccion indicada.
        /// </summary>
        /// <param name="colleccion">Enum que identifica una de las colecciones disponilbes en mongo.</param>
        /// <returns>Nombre real en  Mongo de la colección requerida.</returns>
        string ObtenNombreCollecion(ConstantesCellStore.ColeccionMongoEnum colleccion);

        /// <summary>
        /// Ejecuta una consulta al repositorio de Mongo.
        /// Si no se indica la página inicia desde el primer elemento.
        /// Si no se indica le número de registros se retorna todo el universo de datos.
        /// </summary>
        /// <param name="nombreColeccion">Nombre de la colleccion a consultar.</param>
        /// <param name="filtrosString">Filtros de la consulta.</param>
        /// <returns>Cantidad de elementos existentes en la colección.</returns>
        long CuentaElementosColeccion(string nombreColeccion, string filtrosString);

        /// <summary>
        /// Ejecuta una consulta al repositorio de Mongo.
        /// Si no se indica la página inicia desde el primer elemento.
        /// Si no se indica le número de registros se retorna todo el universo de datos.
        /// </summary>
        /// <param name="nombreColeccion">Nombre de la colleccion a consultar.</param>
        /// <param name="filtrosString">Filtros de la consulta.</param>
        /// <returns>Listado con la representación JSON de los elementos encontrados para el filtro, ordenamiento y página dados.</returns>
        IList<T> ConsultaElementosColeccion<T>(string filtrosString);

        /// <summary>
        /// Realiza una consulta agrupando los valores del campo indicado
        /// </summary>
        /// <param name="collection">Coleccion a buscar</param>
        /// <param name="campo">Campo por agrupar</param>
        /// <returns>Regresa un listado de BSON con el resultado</returns>
        IEnumerable<BsonValue> Distinct(string collection, string campo);

        /// <summary>
        /// Realiza una consulta agrupando los valores del campo indicado
        /// </summary>
        /// <param name="collection">Coleccion a buscar</param>
        /// <param name="campo">Campo por agrupar</param>
        /// <param name="query">Consulta</param>
        /// <returns>Regresa un listado de BSON con el resultado</returns>
        IEnumerable<BsonValue> Distinct(string collection, string campo, IMongoQuery query);

        /// <summary>
        /// Se obtiene la coleccion sobe la cual se haran consultas
        /// </summary>
        /// <param name="collection">Coleccion a buscar</param>
        /// <returns>Se obtiene la collecion indicada</returns>
        MongoCollection<BsonDocument> ObtenerCollection(string collection);

        /// <summary>
        /// Realiza una consulta generica para obtener documentos con el query asociado
        /// </summary>
        /// <param name="collection">Coleccion a buscar</param>
        /// <param name="query">Objeto query formado construido con la consulta</param>
        /// <returns>Regresa un listado de BSON con el resultado</returns>
        List<BsonDocument> Consulta(string collection, IMongoQuery query);

        /// <summary>
        /// Realiza una consulta generica para obtener documentos con el query asociado
        /// </summary>
        /// <param name="collection">Coleccion a buscar</param>
        /// <param name="query">Objeto query formado construido con la consulta</param>
        /// <param name="campos">Campos que se desean obtener de la busqueda</param>
        /// <returns>Regresa un listado de BSON con el resultado</returns>
        List<BsonDocument> Consulta(string collection, IMongoQuery query, IMongoFields campos);

        /// <summary>
        /// Realiza una consulta generica para obtener documentos con el query asociado
        /// </summary>
        /// <param name="collection">Colecciñon en la cual realizara la consulta</param>
        /// <param name="query">Filtros de consulta</param>
        /// <param name="numeroRegistros">Numero de registros a consultar</param>
        /// <param name="paginaRequerida">Pagina requerida</param>
        /// <returns>Listado de documentos</returns>
        List<BsonDocument> Consulta(string collection, IMongoQuery query, int paginaRequerida, int numeroRegistros);

        /// <summary>
        /// Realiza una consulta generica para obtener documentos con el query asociado
        /// </summary>
        /// <param name="collection">Colecciñon en la cual realizara la consulta</param>
        /// <param name="filtrosConsulta">Filtros de consulta</param>
        /// <param name="numeroRegistros">Numero de registros a consultar</param>
        /// <param name="paginaRequerida">Pagina requerida</param>
        /// <returns>Listado de documentos</returns>
        List<BsonDocument> Consulta(string collection, BsonDocument filtrosConsulta, int paginaRequerida, int numeroRegistros);

        /// <summary>
        /// Obtiene el listado de todos los documentos registrados en la coleccion
        /// </summary>
        /// <param name="collection">Coleccion a buscar</param>
        /// <returns>Regresa un listado de BSON con el resultado</returns>
        List<BsonDocument> ObtenerDocumentos(string collection);

        /// <summary>
        /// Obtiene el listado de todos los documentos registrados en la coleccion
        /// </summary>
        // <param name="collection">Coleccion a buscar</param>
        /// <param name="campos">Campos que se desean obtener de la busqueda</param>
        /// <returns>Regresa un listado de BSON con el resultado</returns>
        List<BsonDocument> ObtenerDocumentos(string collection, IMongoFields campos);

        /// <summary>
        /// Obtiene el valor de un hecho checkun.
        /// </summary>
        /// <param name="codigoHashRegistro">Valor del hecho o null si no existe un valor checkun para ese hecho.</param>
        /// <returns></returns>
        string ObtenValorHechoCheckun(string codigoHashRegistro);

        /// <summary>
        /// Realiza una consulta generica para obtener el numero de documentos con el query asociado
        /// </summary>
        /// <param name="collection">Colección en la cual realizara la consulta</param>
        /// <param name="filtrosConsulta">Filtros de consulta</param>
        /// <returns>Numero de documentos</returns>
        long Count(string collection, BsonDocument filtrosConsulta);

        /// <summary>
        /// Realiza una consulta generica para obtener el numero de documentos con el query asociado
        /// </summary>
        /// <param name="collection">Colección en la cual realizara la consulta</param>
        /// <param name="query">Filtros de consulta</param>
        /// <returns>Numero de documentos</returns>
        long Count(string collection, IMongoQuery query);
    }
}
