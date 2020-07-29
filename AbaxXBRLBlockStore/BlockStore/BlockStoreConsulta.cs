﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AbaxXBRLBlockStore.Common.Connection.MongoDb;
using AbaxXBRLBlockStore.Common.Constants;
using AbaxXBRLBlockStore.Common.Entity;
using AbaxXBRLBlockStore.Common.Enum;
using MongoDB.Bson;
using MongoDB.Driver;
using JsonConvert = Newtonsoft.Json.JsonConvert;
using AbaxXBRLCore.Viewer.Application.Dto;
using MongoDB.Driver.Builders;

namespace AbaxXBRLBlockStore.BlockStore
{

    /// <summary>
    ///     Clase usada para consultar sobre los BlockStore. 
    ///     <author>Ing. Joel Carmona Noriega.</author>
    ///     <creationDate>20151121</creationDate>         
    ///     <version>1.0.0.0</version>
    ///     <standard>SBBT 07.13</standard>
    /// </summary>
    public class BlockStoreConsulta
    {

        #region Sbbt: atributos. -

        public Conexion miConexion { get; set; }
        public FilterDefinition<BsonDocument> miDefiniciondeFiltros { get; set; }
        public FilterDefinitionBuilder<BsonDocument> miConstructordeFiltros { get; set; }
        public BsonDocument miEstructuraFiltro { get; set; }

        public MongoCollection miCollection { get; set; }


        #endregion

        #region Sbbt: Metodos y Funciones. -

        #region Sbbt: Constructores. -


        public BlockStoreConsulta(Conexion oConexionMongoDb) { miConexion = oConexionMongoDb; }

        #endregion

        #region Sbbt: Proyeccion. -

        public ProjectionDefinition<BsonDocument> crearProyeccion(List<EntProyeccionCampos> lstProyeccionCampos)
        {
            var proyeccion = lstProyeccionCampos.Aggregate(string.Empty, (current, itemProyeccion) => current + (string.Format(ConstEstandar.miDefinicionAtributoMongoDb, itemProyeccion.miCampo, itemProyeccion.miParametroOrderBy) + ConstEstandar.miSeparadorComa));
            proyeccion = string.Format(ConstEstandar.miTextoEntreLlaves, proyeccion.Substring(0, proyeccion.Length + ConstEstandar.miMenosDos));
            ProjectionDefinition<BsonDocument> projectionDefinition = proyeccion;
            return projectionDefinition;
        }

        #endregion

        #region Sbbt: Filtro. -

        public EntFiltroBlockStore armarElementoFiltroJson(string strNombreCampo, List<string> lstElementosCampo, string strTipo)
        {
            return new EntFiltroBlockStore { miEstructuraFiltroConsulta = new EntEstructuraFiltroConsulta { miFiltroCampo = strNombreCampo, miListaValoresFiltro = lstElementosCampo }, miTipo = strTipo };
        }
        public FilterDefinition<BsonDocument> crearFiltro(string strFiltroJson)
        {
            return this.crearFiltro(JsonConvert.DeserializeObject<List<EntFiltroBlockStore>>(strFiltroJson));
        }

        public FilterDefinition<BsonDocument> crearFiltro(List<EntFiltroBlockStore> lstFiltroBlockStore)
        {

            #region Sbbt: Lambdas. -

            Func<string, string> procesadorFecha = texto =>
            {
                var fechaJson = texto.Insert(ConstBlockStore.miUbicacionValorFechaenTipoIsoDate, ConstEstandar.miComillaDoble);
                return fechaJson.Insert(fechaJson.Length + ConstEstandar.miMenosUno, ConstEstandar.miComillaDoble);
            };
            #endregion

            var filtro = ConstBlockStore.miAperturaFiltro;
            foreach (var item in lstFiltroBlockStore)
            {
                filtro = string.Format(ConstEstandar.miAnidamientoCuatro, filtro, ConstBlockStore.miAperturaComilla, item.miEstructuraFiltroConsulta.miFiltroCampo, string.Format(ConstBlockStore.miSeparadorCondicionalFiltro, item.miComando));
                filtro = item.miTipo == ConstEstandar.miTipoDate ? item.miEstructuraFiltroConsulta.miListaValoresFiltro.Aggregate(filtro, (current, itemValoresFiltro) => string.Format(ConstEstandar.miAnidamientoTres, current.Substring(ConstEstandar.miNumeroCero, current.Length + ConstEstandar.miMenosUno), (!string.IsNullOrEmpty(itemValoresFiltro)) ? procesadorFecha(itemValoresFiltro) : ConstEstandar.miTipoNull, ConstBlockStore.miSeparadorComaFiltro)) : item.miEstructuraFiltroConsulta.miListaValoresFiltro.Aggregate(filtro, (current, itemValoresFiltro) => itemValoresFiltro == ConstEstandar.miTipoNull ? string.Format(ConstEstandar.miAnidamientoTres, current.Substring(ConstEstandar.miNumeroCero, current.Length + ConstEstandar.miMenosUno), ConstEstandar.miTipoNull, ConstBlockStore.miSeparadorComaFiltro) : string.Format(ConstEstandar.miAnidamientoTres, current, itemValoresFiltro, ConstBlockStore.miSeparadorFiltro));
                filtro = string.Format(ConstEstandar.miAnidamientoDos, filtro.Substring(ConstEstandar.miNumeroCero, filtro.Length + ConstEstandar.miMenosTres), ConstBlockStore.miCierreArreglo);
            }
            return string.Format(ConstEstandar.miAnidamientoDos, filtro.Substring(ConstEstandar.miNumeroCero, filtro.Length + ConstEstandar.miMenosDos), ConstBlockStore.miCierreFiltro);
        }

        public string crearFiltroJsondeunList(List<string> lstEstructuraFiltroJson)
        {

            var filtroJson = string.Empty;
            filtroJson = lstEstructuraFiltroJson.Aggregate(filtroJson, (current, item) => string.Format(ConstBlockStore.miTextoEntreLlavesParaArmarJson, current, item));
            return string.Format(ConstEstandar.miTextoEntreCorchetes, filtroJson.Substring(0, filtroJson.Length + ConstEstandar.miMenosDos));
        }

        #endregion

        #region Sbbt: Consulta. -


        public Task<List<BsonDocument>> consulta(FilterDefinition<BsonDocument> oFiltroDefinition) { return miConexion.consultar(oFiltroDefinition, EnumMongoAccion.todos); }
        public Task<List<BsonDocument>> consulta(Conexion oConexion, FilterDefinition<BsonDocument> oFiltroDefinition) { return oConexion.consultar(oFiltroDefinition, EnumMongoAccion.todos); }
        public Task<List<BsonDocument>> consulta(string strJson)
        {
            return miConexion.consultar(crearFiltro(strJson), EnumMongoAccion.todos);
        }
        public Task<List<BsonDocument>> consulta(FilterDefinition<BsonDocument> oFiltroDefinition, ProjectionDefinition<BsonDocument> oProjectionDefinition) { return miConexion.consultar(oFiltroDefinition, oProjectionDefinition, EnumMongoAccion.todos); }

        /// <summary>
        /// Realiza una consulta generica para obtener documentos con el query asociado
        /// </summary>
        /// <param name="collection">Colecciñon en la cual realizara la consulta</param>
        /// <param name="oFiltro">Filtros de consulta</param>
        /// <returns>Listado de documentos</returns>
        public List<BsonDocument> consulta(string collection, IMongoQuery query)
        {
            MongoCollection<BsonDocument> miCollection = miConexion.miConectionServer.ObtenerCollection(collection);
            return miCollection.Find(query).ToList();

        }


        /// <summary>
        /// Realiza una consulta generica para obtener documentos con el query asociado
        /// </summary>
        /// <param name="collection">Colecciñon en la cual realizara la consulta</param>
        /// <param name="filtrosConsulta">Filtros de consulta</param>
        /// <returns>Listado de documentos</returns>
        public async Task<List<BsonDocument>> consulta(string collection, FilterDefinition<BsonDocument> filtrosConsulta)
        {
            var miCollection = miConexion.miConectionServer.ObtenerInterfaceCollection(collection);
            return  await miCollection.Find(filtrosConsulta).ToListAsync();
        }


        /// <summary>
        /// Obtiene el listado de todos los documentos registrados en la coleccion
        /// </summary>
        /// <param name="collection">Identificador de la colección</param>
        /// <returns>Listado de documentos</returns>
        public List<BsonDocument> obtenerDocumentos(string collection)
        { 
            MongoCollection<BsonDocument> miCollection = miConexion.miConectionServer.ObtenerCollection(collection);
            return miCollection.FindAll().ToList();

        }


        #endregion



        #region Sbbt: Distintos. -

        public List<BsonDocument> distintos(EntConsultaDistinct oConsulta)
        {
            return consulta(crearFiltro(oConsulta.miListaFiltroBlockStore), crearProyeccion(oConsulta.miListaProyeccionCampos)).Result;
        }


        public IEnumerable<BsonValue> distinct(string collection, string campo)
        {
            miCollection = miConexion.miConectionServer.ObtenerCollection(collection);
            return miCollection.Distinct(campo);
        }


        /// <summary>
        /// Arma el Bson para registro de informacion de una entidad
        /// </summary>
        /// <param name="entidad">Objeto con la informacion de la entidad</param>
        /// <returns>Documento en forma de Bson</returns>
        public BsonDocument armarBlockStoreEntidad(EntidadDto entidad)
        {
            var bsonDocuments = new BsonDocument();
            var armado = "{";
            armado += string.Format("'IdEntidad' : '{0}', 'EsquemaId' : '{1}'", entidad.IdEntidad, entidad.EsquemaId);
            armado += string.Format(",'Id' : '{0}', 'Segmento' : '{1}'", entidad.Id, entidad.Segmento);

            armado += "}";

            bsonDocuments = BsonDocument.Parse(armado);

            return bsonDocuments;
        }

        /// <summary>
        /// Arma el Bson para registro de informacion de una unidad
        /// </summary>
        /// <param name="unidad">Objeto con la informacion de la unidad</param>
        /// <returns>Documento en forma de Bson</returns>
        public BsonDocument armarBlockStoreUnidad(MedidaDto medida)
        {
            var bsonDocuments = new BsonDocument();
            var armado = "{";
            armado += string.Format(" 'Nombre' : '{0}', 'EspacioNombres' : '{1}', 'Etiqueta' : '{2}' ", medida.Nombre, medida.EspacioNombres, medida.Etiqueta) + "}";
            bsonDocuments = BsonDocument.Parse(armado);

            return bsonDocuments;
        }


        /// <summary>
        /// Arma el Bson para registro de informacion de un concepto
        /// </summary>
        /// <param name="concepto">Objeto con la informacion del concepto</param>
        /// <param name="EspacioNombresPrincipal">Espacio de nombres de la taxonomia</param>
        /// <returns>Documento en forma de Bson</returns>
        public BsonDocument armarBlockStoreConcepto(ConceptoDto concepto, string EspacioNombresPrincipal)
        {
            var bsonDocuments = new BsonDocument();
            var armado = "{";


            armado += string.Format("'Tipo' : {0},        'Balance' : {1},        'TipoDatoXbrl' : '{2}',        'TipoDato' : '{3}',        'TipoPeriodo' : '{4}'", concepto.Tipo, concepto.Balance != null ? concepto.Balance.Value : -1, concepto.TipoDatoXbrl, concepto.TipoDato, concepto.TipoPeriodo);
            armado += string.Format(",'Nombre' : '{0}',        'EspacioNombres' : '{1}',        'Id' : '{2}'", concepto.Nombre, concepto.EspacioNombres, concepto.Id);
            armado += string.Format(",'EsHipercubo' : '{0}',        'EsDimension' : '{1}',        'EsAbstracto' : '{2}',        'EsMiembroDimension' : '{3}',        'EsNillable' : '{4}'", concepto.EsHipercubo, concepto.EsDimension != null ? concepto.EsDimension.Value : false, concepto.EsAbstracto != null ? concepto.EsAbstracto.Value : false, concepto.EsMiembroDimension != null ? concepto.EsMiembroDimension.Value : false, concepto.EsNillable != null ? concepto.EsNillable.Value : false) + ",'Etiquetas' : [";

            foreach (var etiqueta in concepto.Etiquetas)
            {
                var etiquetasPorIdioma = etiqueta.Value;
                var numeroEtiquetasPorIdioma = 0;
                foreach (var etiquetaIdioma in etiquetasPorIdioma)
                {

                    if (numeroEtiquetasPorIdioma > 0)
                        armado += string.Format(",");

                    armado += " {";
                    armado += string.Format("'Rol' : '{0}'", etiquetaIdioma.Value.Rol.Replace("'", ""));
                    armado += string.Format(",'Valor' : '{0}'", etiquetaIdioma.Value.Valor.Replace("'", ""));
                    armado += string.Format(",'Idioma' : '{0}'", etiquetaIdioma.Value.Idioma) + "}";
                    numeroEtiquetasPorIdioma++;
                }

            }


            armado += "]";

            armado += string.Format(",'EspacioNombresPrincipal' : '{0}'", EspacioNombresPrincipal);

            armado += "}";

            bsonDocuments = BsonDocument.Parse(armado);





            return bsonDocuments;
        }







        #endregion




        #endregion

    }

}