using System;
using System.Collections.Generic;
using System.Linq;
using AbaxXBRLBlockStore.Common.Connection.MongoDb;
using AbaxXBRLBlockStore.Common.Entity;
using AbaxXBRLCore.Viewer.Application.Dto;
using MongoDB.Bson;
using MongoDB.Driver;
// ReSharper disable UseStringInterpolation

namespace AbaxXBRLBlockStore.BlockStore
{

    /// <summary>
    ///     Clase que manipula el documento instancia y lo guarda en el BlockStore. 
    ///     <author>Ing. Joel Carmona Noriega.</author>
    ///     <creationDate>20151120</creationDate>    
    ///     <version>1.0.0.0</version>
    ///     <standard>SBBT 07.13</standard>
    /// </summary>
    public class BlockStoreDocumentoInstancia
    {

        #region Sbbt: Propiedades. -

        public Conexion miConexion { get; set; }

        public MongoCollection miCollection { get; set; }

        #endregion

        #region Sbbt: Metodos y Funciones. -

        #region Sbbt: Constructor. -

        public BlockStoreDocumentoInstancia(Conexion oConexionMongoDb) { miConexion = oConexionMongoDb; }

        #endregion

        #region Sbbt: insertarBlockStore. -

        public void insertarBlockStore(string collection, List<BsonDocument> lstBlockStore)
        {
            miCollection = miConexion.miConectionServer.ObtenerCollection(collection);
            var resultadoOperacion = miCollection.InsertBatch(lstBlockStore);
        }

        public void insertarBlockStore(string collection, BsonDocument lstBlockStore)
        {
            miCollection = miConexion.miConectionServer.ObtenerCollection(collection);
            var resultadoOperacion = miCollection.Insert(lstBlockStore);
        }


        /// <summary>
        /// En base a los filtros de consulta si no encuentra el registro realiza un insert de lo contrario actualiza el valor.
        /// </summary>
        /// <param name="collection">Coleccion que intenta buscar</param>
        /// <param name="oBlockStoreDocumentosyFiltros">Filtros de consulta y/o documento a insertar</param>
        public void actualizaroInsertarBlockStore(string collection, EntBlockStoreDocumentosyFiltros oBlockStoreDocumentosyFiltros)
        {
            var  miCollectionMongo = (IMongoCollection<BsonDocument>) miConexion.miConectionServer.ObtenerCollection(collection);
            miConexion.actualizaroInsertar(miCollectionMongo, oBlockStoreDocumentosyFiltros);
        }



        #endregion

        #region Sbbt: procesarDocumentoInstancia. -

        public List<EntEstructuraInstancia> procesarDocumentoInstancia(DocumentoInstanciaXbrlDto documentoInstanciaXbrlDto)
        {
            var dateNull = new DateTime(1, 1, 1);
            var listaDesgloceEstructurasInstancia = documentoInstanciaXbrlDto.HechosPorId.Values.Select(item => new EntEstructuraInstancia { miConcepto = new EntConcepto { miIdConcepto = item.IdConcepto, miNombreConcepto = item.NombreConcepto, miEtiqueta = new List<EntEtiqueta>(), miNamespace = item.EspacioNombres }, miTipoBalance = string.Empty, miIdTipoDato = item.TipoDato, miValor = item.Valor, miValorRedondeado = item.ValorRedondeado, miPrecision = item.Precision, miDecimales = item.Decimales, miEsTipoDatoNumerico = item.EsNumerico, miEsTipoDatoFraccion = item.EsFraccion, miEsValorNil = item.EsValorNil, miIdContexto = item.IdContexto, miIdUnidad = item.IdUnidad }).ToList();
            foreach (var itemEstructuraInstancia in listaDesgloceEstructurasInstancia)
            {
                var itemContexto = documentoInstanciaXbrlDto.ContextosPorId.FirstOrDefault(itemWhere => itemWhere.Key == itemEstructuraInstancia.miIdContexto);
                itemEstructuraInstancia.miEntidad = new EntEntidad { miId = itemContexto.Value.Entidad.Id, miEspaciodeNombresEntidad = itemContexto.Value.Entidad.EsquemaId };
                itemEstructuraInstancia.miIdTaxonomia = documentoInstanciaXbrlDto.EspacioNombresPrincipal;
                foreach (var itemRolesCalculo in documentoInstanciaXbrlDto.Taxonomia.RolesCalculo.Where(itemRolesCalculo => itemRolesCalculo.OperacionesCalculo.Any(item => item.Key == itemEstructuraInstancia.miConcepto.miIdConcepto)))
                {
                    var rol = documentoInstanciaXbrlDto.Taxonomia.RolesPresentacion.FirstOrDefault(itemWhere => itemWhere.Uri == itemRolesCalculo.Uri);
                    itemEstructuraInstancia.miRoll = rol != null ? rol.Nombre : itemRolesCalculo.Uri;
                    break;
                }
                if (string.IsNullOrEmpty(itemEstructuraInstancia.miRoll))
                {
                    foreach (var itemRolesCalculo in documentoInstanciaXbrlDto.Taxonomia.RolesDefinicion)
                    {
                        if (itemRolesCalculo.Estructuras.Any(item => item.IdConcepto == itemEstructuraInstancia.miConcepto.miIdConcepto))
                        {
                            var rolPresentacion = documentoInstanciaXbrlDto.Taxonomia.RolesPresentacion.FirstOrDefault(itemWhere => itemWhere.Uri == itemRolesCalculo.Uri);
                            itemEstructuraInstancia.miRoll = rolPresentacion != null ? rolPresentacion.Nombre : itemRolesCalculo.Uri;
                            break;
                        }
                        if (!itemRolesCalculo.Estructuras.Any(itemEstructuras => itemEstructuras.SubEstructuras.Any(item => item.IdConcepto == itemEstructuraInstancia.miConcepto.miIdConcepto))) continue;
                        var valorRol = documentoInstanciaXbrlDto.Taxonomia.RolesPresentacion.FirstOrDefault(itemWhere => itemWhere.Uri == itemRolesCalculo.Uri);
                        itemEstructuraInstancia.miRoll = valorRol != null ? valorRol.Nombre : itemRolesCalculo.Uri;
                        break;
                    }
                }
                // ReSharper disable once ConditionIsAlwaysTrueOrFalse
                itemEstructuraInstancia.miPeriodo = itemContexto.Value.Periodo.FechaInstante != dateNull ? new EntPeriodo { miEsTipoInstante = true, fecha = itemContexto.Value.Periodo.FechaInstante } : new EntPeriodo { miEsTipoInstante = false, fecha = itemContexto.Value.Periodo.FechaFin, fechaInicial = itemContexto.Value.Periodo.FechaInicio };
                itemEstructuraInstancia.miAño = itemEstructuraInstancia.miPeriodo.fecha != dateNull ? itemEstructuraInstancia.miPeriodo.fecha.Value.Year : 0;
                var valor = itemEstructuraInstancia.miPeriodo.fecha != dateNull ? itemEstructuraInstancia.miPeriodo.fecha.Value.Month % 4 : -1;

                itemEstructuraInstancia.miTrimestre = valor == 0 ? "4" : valor.ToString();
                if (itemContexto.Value.ValoresDimension != null) itemEstructuraInstancia.miDimension = itemContexto.Value.ValoresDimension.Select(itemDimension => new EntDimension { miDimensionExplicita = itemDimension.Explicita, miespaciodeNombreDimension = itemDimension.QNameDimension, miNombreDimension = itemDimension.IdDimension, miEspaciodeNombreElementoMiembro = itemDimension.QNameItemMiembro, miNombreElementoMiembro = itemDimension.IdItemMiembro }).ToList();
                if (itemEstructuraInstancia.miIdUnidad == null) continue;
                var itemMedida = documentoInstanciaXbrlDto.UnidadesPorId.FirstOrDefault(itemWhere => itemWhere.Key == itemEstructuraInstancia.miIdUnidad);
                if (itemMedida.Value != null)
                    itemEstructuraInstancia.miMedida = itemMedida.Value != null ? itemMedida.Value.Medidas != null ?
                        new EntMedida { miMedidaesDivisorio = false, miTipoMedida = itemMedida.Value.Medidas.Select(item => new EntUnidad { miNombre = item.Nombre, miEspaciodeNombres = item.EspacioNombres }).ToList() } :
                        new EntMedida { miMedidaesDivisorio = true, miTipoMedida = itemMedida.Value.MedidasNumerador.Select(item => new EntUnidad { miNombre = item.Nombre, miEspaciodeNombres = item.EspacioNombres }).ToList(), miTipoMedidaDenominador = itemMedida.Value.MedidasDenominador.Select(item => new EntUnidad { miNombre = item.Nombre, miEspaciodeNombres = item.EspacioNombres }).ToList() } : null;
            }
            foreach (var itemDesgloceEstructurasInstancia in listaDesgloceEstructurasInstancia)
            {
                var caracteristicasConceptos = documentoInstanciaXbrlDto.Taxonomia.ConceptosPorId.Where(item => item.Key == itemDesgloceEstructurasInstancia.miConcepto.miIdConcepto);
                foreach (var item in caracteristicasConceptos.FirstOrDefault().Value.Etiquetas.Values.SelectMany(itemEtiquetas => itemEtiquetas)) itemDesgloceEstructurasInstancia.miConcepto.miEtiqueta.Add(new EntEtiqueta { miLenguaje = item.Value.Idioma, miValor = item.Value.Valor, miRol = item.Value.Rol });
            }
            return listaDesgloceEstructurasInstancia;
        }

        #endregion

        #region Sbbt: armarBlockStore. -

        public List<BsonDocument> armarBlockStore(List<EntEstructuraInstancia> listEntEstructuraInstancia)
        {
            var lstBsonDocuments = new List<BsonDocument>();
            foreach (var itemEstructuraInstancia in listEntEstructuraInstancia)
            {
                var armado = "{";
                try
                {
                    armado += string.Format("'EspacioNombresPrincipal' : '{0}'", itemEstructuraInstancia.miIdTaxonomia);
                    armado += string.Format(",'idEntidad' : '{0}', 'espaciodeNombresEntidad' : '{1}'", itemEstructuraInstancia.miEntidad.miId, itemEstructuraInstancia.miEntidad.miEspaciodeNombresEntidad);
                    armado += (!string.IsNullOrEmpty(itemEstructuraInstancia.miRoll)) ? string.Format(",'roll' : '{0}'", itemEstructuraInstancia.miRoll) : string.Empty;
                    armado += string.Format(",'concepto' : {{ 'id' : '{0}', 'nombreConcepto' : '{1}', 'espacioNombres' : '{2}'", itemEstructuraInstancia.miConcepto.miIdConcepto, itemEstructuraInstancia.miConcepto.miNombreConcepto, itemEstructuraInstancia.miConcepto.miNamespace);
                    if (itemEstructuraInstancia.miConcepto.miEtiqueta != null)
                    {
                        var etiqueta = itemEstructuraInstancia.miConcepto.miEtiqueta.First();
                        var etiquetas = string.Format(", 'etiqueta' :  {{ 'lenguaje' : '{0}' , 'valor' : '{1}' , 'roll' : '{2}' }} ", etiqueta.miLenguaje, etiqueta.miValor, etiqueta.miRol.Replace("'",""));
                        armado += etiquetas;
                    }
                    armado += (!string.IsNullOrEmpty(itemEstructuraInstancia.miTipoBalance)) ? string.Format(",'tipoBalance' : '{0}'", itemEstructuraInstancia.miTipoBalance) : string.Empty;
                    armado += string.Format("}},'tipoDato' : '{0}'", itemEstructuraInstancia.miIdTipoDato);
                    var tipoMedidaDenominador = string.Empty;
                    if (itemEstructuraInstancia.miEsTipoDatoNumerico)
                    {
                        armado += !string.IsNullOrEmpty(itemEstructuraInstancia.miValor) ? string.Format(",'valor' : '{0}', 'valorRedondeado' : '{1}'", itemEstructuraInstancia.miValor, itemEstructuraInstancia.miValorRedondeado) : string.Empty;
                        armado += !string.IsNullOrEmpty(itemEstructuraInstancia.miPrecision) ? string.Format(",'precision' : {0}", itemEstructuraInstancia.miPrecision) : string.Empty;
                        armado += !string.IsNullOrEmpty(itemEstructuraInstancia.miDecimales) ? string.Format(",'decimales' : '{0}'", itemEstructuraInstancia.miDecimales) : string.Empty;
                        armado += string.Format(",'esTipoDatoNumerico' : {0}", itemEstructuraInstancia.miEsTipoDatoNumerico.ToString().ToLower());
                        armado += string.Format(",'esTipoDatoFraccion' : {0}", itemEstructuraInstancia.miEsTipoDatoFraccion.ToString().ToLower());
                    }
                    else armado += (!string.IsNullOrEmpty(itemEstructuraInstancia.miValor)) ? string.Format(",'valor' : '{0}'", itemEstructuraInstancia.miValor) : string.Empty;
                    armado += string.Format(",'esValorNil' : {0}", itemEstructuraInstancia.miEsValorNil.ToString().ToLower());
                    armado += itemEstructuraInstancia.miPeriodo.miEsTipoInstante ? ",'periodo': { 'esTipoInstante' : true, 'fechaInicial' : null, 'fecha' : " + BsonDateTime.Create(itemEstructuraInstancia.miPeriodo.fecha).ToJson() + " }" : ",'periodo': { 'esTipoInstante' : false, 'fechaInicial' : " + BsonDateTime.Create(itemEstructuraInstancia.miPeriodo.fechaInicial).ToJson() + ", 'fecha' : " + BsonDateTime.Create(itemEstructuraInstancia.miPeriodo.fecha).ToJson() + " }";
                    if (itemEstructuraInstancia.miMedida != null)
                    {
                        armado += string.Format(",'medida' : {{'esDivisorio' : {0}", itemEstructuraInstancia.miMedida.miMedidaesDivisorio.ToString().ToLower());
                        var tipoMedida = ", \'tipoMedida\' : [";
                        tipoMedida = itemEstructuraInstancia.miMedida.miTipoMedida.Aggregate(tipoMedida, (current, itemMedida) => current + string.Format("{{ 'nombre' : '{0}', 'espacioNombres' : '{1}'}},", itemMedida.miNombre, itemMedida.miEspaciodeNombres));
                        tipoMedida = tipoMedida.Substring(0, tipoMedida.Length - 1) + "]";
                        if (itemEstructuraInstancia.miMedida.miMedidaesDivisorio)
                        {
                            tipoMedidaDenominador = ", \'tipoMedidaDenominador\' : [";
                            tipoMedidaDenominador = itemEstructuraInstancia.miMedida.miTipoMedidaDenominador.Aggregate(tipoMedidaDenominador, (current, itemMedidaDenominador) => current + string.Format("{{ 'nombre' : '{0}', 'espaciodeNombres' : '{1}'}},", itemMedidaDenominador.miNombre, itemMedidaDenominador.miEspaciodeNombres));
                            tipoMedidaDenominador = tipoMedidaDenominador.Substring(0, tipoMedidaDenominador.Length - 1) + "]}";
                        }
                        else tipoMedida += "}";
                        armado += tipoMedida + tipoMedidaDenominador;
                    }
                    if (itemEstructuraInstancia.miDimension != null)
                    {
                        var tipoDimension = "\'dimension\' : [";
                        foreach (var dimension in itemEstructuraInstancia.miDimension) tipoDimension = tipoDimension + string.Format("{{ 'esExplicito' : {0}, 'espaciodeNombreDimension' : '{1}', 'nombreDimension' : '{2}', 'espaciodeNombreElementoMiembro' : '{3}', 'nombreElementoMiembro' : '{4}' }},", dimension.miDimensionExplicita.ToString().ToLower(), dimension.miespaciodeNombreDimension, dimension.miNombreDimension, dimension.miEspaciodeNombreElementoMiembro != null ? dimension.miEspaciodeNombreElementoMiembro : null, dimension.miNombreElementoMiembro != null ? dimension.miNombreElementoMiembro.Replace("\n", "") : null);
                        tipoDimension = tipoDimension.Substring(0, tipoDimension.Length - 1) + "]";
                        armado += tipoDimension;
                    }
                    armado += "}";
                
                lstBsonDocuments.Add(BsonDocument.Parse(armado));
                }
                catch (Exception e)
                {
                    armado = "";
                }
            }
            return lstBsonDocuments;
        }

        #endregion

        #endregion

    }

}

