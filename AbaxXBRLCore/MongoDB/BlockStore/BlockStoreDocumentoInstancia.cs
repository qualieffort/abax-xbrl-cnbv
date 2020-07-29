using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using AbaxXBRLBlockStore.Common.Connection.MongoDb;
using AbaxXBRLBlockStore.Common.Constants;
using AbaxXBRLBlockStore.Common.Entity;
using AbaxXBRLBlockStore.Common.Enum;
using AbaxXBRLCore.Common.Entity.Log;
using AbaxXBRLCore.Viewer.Application.Dto;
using MongoDB.Bson;
using MongoDB.Driver;
using net.sf.saxon.instruct;
using AbaxXBRLCore.Common.Util;

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

        
        /// <summary>
        /// Clase que crea la funcionalidad sobre la base de datos 
        /// </summary>
        public Conexion miConexion { get; set; }

        public MongoCollection miCollection { get; set; }

        public BlockStoreDocumentoInstancia(Conexion oConexionMongoDb) { miConexion = oConexionMongoDb; }

        

        public void insertarBlockStore(string collection, List<BsonDocument> lstBlockStore)
        {
            miCollection = miConexion.miConectionServer.obtenerCollection(collection);
            miCollection.InsertBatch(lstBlockStore);
        }

        public void insertarBlockStore(string collection, BsonDocument lstBlockStore)
        {
            miCollection = miConexion.miConectionServer.obtenerCollection(collection);
            miCollection.Insert(lstBlockStore);
        }

        public EntLogActualizarInsertar insertarBlockStore(string collection, EntBlockStoreDocumentosyFiltros oBlockStoreDocumentosyFiltros)
        {
            miCollection = miConexion.miConectionServer.obtenerCollection(collection);
            return miConexion.actualizaroInsertar(collection, oBlockStoreDocumentosyFiltros);
        }


        /// <summary>
        /// 
        /// </summary>
        /// <param name="documentoInstanciaXbrlDto"></param>
        /// <returns></returns>
        public List<EntEstructuraInstancia> procesarDocumentoInstancia(DocumentoInstanciaXbrlDto documentoInstanciaXbrlDto)
        {
            var dateNull = new DateTime(1, 1, 1);

            var listaDesgloceEstructurasInstancia = documentoInstanciaXbrlDto.HechosPorId.Values.Select(item => new EntEstructuraInstancia { Concepto = new EntConcepto { Id = item.IdConcepto, Nombre = item.NombreConcepto, etiqueta = new List<EntEtiqueta>(), EspacioNombres = item.EspacioNombres }, TipoBalance = string.Empty, IdTipoDato = item.TipoDato, IdContexto = item.IdContexto, Valor = item.Valor, ValorRedondeado = item.ValorRedondeado, Precision = item.Precision, Decimales = item.Decimales, EsTipoDatoNumerico = item.EsNumerico, EsTipoDatoFraccion = item.EsFraccion, EsValorNil = item.EsValorNil, IdUnidad = item.IdUnidad,IdHecho = item.Id }).ToList();

            foreach (var itemEstructuraInstancia in listaDesgloceEstructurasInstancia)
            {
                var itemContexto = documentoInstanciaXbrlDto.ContextosPorId.FirstOrDefault(itemWhere => itemWhere.Value.Id == itemEstructuraInstancia.IdContexto);

                itemEstructuraInstancia.Entidad = new EntEntidad { miId = itemContexto.Value.Entidad.Id, miEspaciodeNombresEntidad = itemContexto.Value.Entidad.EsquemaId };
                itemEstructuraInstancia.EspacioNombresPrincipal = documentoInstanciaXbrlDto.EspacioNombresPrincipal;


                var rol = obtenerRolPresentacion(documentoInstanciaXbrlDto.Taxonomia, itemEstructuraInstancia.Concepto.Id);

                itemEstructuraInstancia.Rol = rol;


                itemEstructuraInstancia.Periodo = itemContexto.Value.Periodo.FechaInstante != dateNull ? new EntPeriodo { EsTipoInstante = true, Tipo = (short)itemContexto.Value.Periodo.Tipo, FechaInstante = itemContexto.Value.Periodo.FechaInstante } : new EntPeriodo { EsTipoInstante = false, Tipo = (short)itemContexto.Value.Periodo.Tipo, FechaFin = itemContexto.Value.Periodo.FechaFin, FechaInicio = itemContexto.Value.Periodo.FechaInicio };


                var caracteristicasConceptos = documentoInstanciaXbrlDto.Taxonomia.ConceptosPorId.Where(item => item.Key == itemEstructuraInstancia.Concepto.Id);

                foreach (var item in caracteristicasConceptos.SelectMany(concepto => concepto.Value.Etiquetas.Values.SelectMany(itemEtiquetas => itemEtiquetas)))
                    itemEstructuraInstancia.Concepto.etiqueta.Add(new EntEtiqueta { lenguaje = item.Value.Idioma, valor = item.Value.Valor, roll = item.Value.Rol });


                if (itemContexto.Value.ContieneInformacionDimensional)
                {
                    itemEstructuraInstancia.Dimension = itemContexto.Value.ValoresDimension.Select(itemDimension => new EntDimension { Explicita = itemDimension.Explicita, QNameDimension = itemDimension.QNameDimension, IdDimension = itemDimension.IdDimension, QNameItemMiembro = itemDimension.QNameItemMiembro, IdItemMiembro = itemDimension.IdItemMiembro, ElementoMiembroTipificado = itemDimension.ElementoMiembroTipificado }).ToList();
                    foreach (var itemDimension in itemEstructuraInstancia.Dimension.Where(itemDimension => documentoInstanciaXbrlDto.Taxonomia.ConceptosPorId.ContainsKey(itemDimension.IdDimension)))
                    {
                        var valorEtiquetaDimensionDto = documentoInstanciaXbrlDto.Taxonomia.ConceptosPorId[itemDimension.IdDimension];
                        var estructuraEtiqueta = valorEtiquetaDimensionDto.Etiquetas.Values;
                        var listaEtiquetas = (from itemDiccionarioEtiqueta in estructuraEtiqueta from itemEtiqueta in itemDiccionarioEtiqueta select new EntEtiqueta { lenguaje = itemEtiqueta.Value.Idioma, roll = itemEtiqueta.Value.Rol, valor = itemEtiqueta.Value.Valor }).DistinctBy(item => item.lenguaje).ToList();
                        itemDimension.etiquetasDimension = listaEtiquetas;
                    }


                    foreach (var dimension in itemEstructuraInstancia.Dimension)
                    {

                        if (dimension.IdItemMiembro != null)
                        {
                            var valorEtiquetaMiembroDimensionDto = documentoInstanciaXbrlDto.Taxonomia.ConceptosPorId[dimension.IdItemMiembro];
                            var estructuraEtiqueta = valorEtiquetaMiembroDimensionDto.Etiquetas.Values;
                            var listaEtiquetas = (from itemDiccionarioEtiqueta in estructuraEtiqueta from itemEtiqueta in itemDiccionarioEtiqueta select new EntEtiqueta { lenguaje = itemEtiqueta.Value.Idioma, roll = itemEtiqueta.Value.Rol, valor = itemEtiqueta.Value.Valor }).DistinctBy(item => item.lenguaje).ToList();
                            dimension.etiquetasMiembro = listaEtiquetas;
                        }

                    }

                }


                if (itemEstructuraInstancia.IdUnidad == null) continue;
                var itemMedida = documentoInstanciaXbrlDto.UnidadesPorId.FirstOrDefault(itemWhere => itemWhere.Key == itemEstructuraInstancia.IdUnidad);
                if (itemMedida.Value != null) itemEstructuraInstancia.Medida = itemMedida.Value != null ? itemMedida.Value.Medidas != null ? new EntUnidades { EsDivisoria = false, Medidas = itemMedida.Value.Medidas.Select(item => new EntMedida { Nombre = item.Nombre, EspacioNombres = item.EspacioNombres }).ToList() } : new EntUnidades { EsDivisoria = true, Medidas = itemMedida.Value.MedidasNumerador.Select(item => new EntMedida { Nombre = item.Nombre, EspacioNombres = item.EspacioNombres }).ToList(), MedidasNumerador = itemMedida.Value.MedidasDenominador.Select(item => new EntMedida { Nombre = item.Nombre, EspacioNombres = item.EspacioNombres }).ToList() } : null;


                /*var ejercicio=2015;
                var trimestre=0;

                if(itemEstructuraInstancia.Periodo.EsTipoInstante){
                    ejercicio = itemEstructuraInstancia.Periodo.FechaInstante.Value.Year;
                    trimestre = itemEstructuraInstancia.Periodo.FechaInstante.Value.Month/3;
                }else{
                    ejercicio = itemEstructuraInstancia.Periodo.FechaFin.Value.Year;
                    trimestre = itemEstructuraInstancia.Periodo.FechaFin.Value.Month/3;
                }

                itemEstructuraInstancia.Trimestre= trimestre;
                itemEstructuraInstancia.Ejercicio =  ejercicio;*/


            }


            return listaDesgloceEstructurasInstancia;
        }

        /// <summary>
        /// Obtiene el rol de presentacion a partir de una taxonomia
        /// </summary>
        /// <param name="taxonomia">Objeto con la taxonomia</param>
        /// <param name="idConcepto">Identificador del concepto</param>
        /// <returns>Cadena con el rol de presentacion</returns>
        private String obtenerRolPresentacion(TaxonomiaDto taxonomia,String idConcepto){


            foreach (var rolPresentacion in taxonomia.RolesPresentacion) {
                var estructuraFormato = rolPresentacion.Estructuras;
                var existeEnRol = estructuraTieneConcepto(estructuraFormato, idConcepto);
                if (existeEnRol)
                    return rolPresentacion.Nombre;
                
            }

            return null;
        }


        private bool estructuraTieneConcepto(IList<EstructuraFormatoDto> estructuras,String idConcepto) {

            bool conceptoExisteEstructura =false;

            foreach (var estructura in estructuras)
            {
                if (estructura.IdConcepto.Equals(idConcepto))
                {
                    conceptoExisteEstructura = true;
                }

                if (!conceptoExisteEstructura)
                    conceptoExisteEstructura = estructuraTieneConcepto(estructura.SubEstructuras, idConcepto);

                if(conceptoExisteEstructura){
                    break;
                }

            }

            return conceptoExisteEstructura;

        }


        /// <summary>
        /// Realiza el armado del repositorio de información XBRL
        /// </summary>
        /// <param name="listEntEstructuraInstancia">Estructura de los hechos que se van a registrar en el repositorio de informacion</param>
        /// <returns></returns>
        public List<EntBlockStoreDocumentosyFiltros> armarBlockStoreHashConsulta(List<EntEstructuraInstancia> listEntEstructuraInstancia)
        {

            var listadoDocumentos = new List<EntBlockStoreDocumentosyFiltros>();

            foreach (var itemEstructuraInstancia in listEntEstructuraInstancia)
            {
                var blockStoreDocumentosyFiltros = new EntBlockStoreDocumentosyFiltros
                {
                    registroBlockStore = new BsonDocument(),
                    filtrosBlockStore = new BsonDocument(),
                    EsValorChunks = false
                };

                var estructuraClone = (EntEstructuraInstancia)itemEstructuraInstancia.Clone();

                estructuraClone.Valor = null;
                estructuraClone.ValorRedondeado = 0;

                itemEstructuraInstancia.codigoHashRegistro = UtilAbax.CalcularHash(estructuraClone.ToJson());

                var elemento = ConstEstandar.AperturaLlave;

                elemento += string.Format(ConstBlockStoreHechos.CodigoHashRegistro, itemEstructuraInstancia.codigoHashRegistro);
                blockStoreDocumentosyFiltros.CodigoHashRegistro = itemEstructuraInstancia.codigoHashRegistro;

                //elemento += string.Format(ConstBlockStoreHechos.Trimestre, itemEstructuraInstancia.Trimestre);
                //elemento += string.Format(ConstBlockStoreHechos.Ejercicio, itemEstructuraInstancia.Ejercicio);


                elemento += string.Format(ConstBlockStoreHechos.Taxonomia, itemEstructuraInstancia.EspacioNombresPrincipal);
                elemento += string.Format(ConstBlockStoreHechos.Entidad, itemEstructuraInstancia.Entidad.miId, itemEstructuraInstancia.Entidad.miEspaciodeNombresEntidad);
                elemento += !string.IsNullOrEmpty(itemEstructuraInstancia.Rol) ? string.Format(ConstBlockStoreHechos.Roll, itemEstructuraInstancia.Rol) : string.Empty;

                elemento += string.Format(ConstBlockStoreHechos.Concepto, itemEstructuraInstancia.Concepto.Id, itemEstructuraInstancia.Concepto.Nombre, itemEstructuraInstancia.EspacioNombresPrincipal, itemEstructuraInstancia.Concepto.EspacioNombres);

                if (itemEstructuraInstancia.Concepto.etiqueta != null && itemEstructuraInstancia.Concepto.etiqueta.Count > 0)
                {

                    string valorEtiqueta = "";
                    foreach (var etiqueta in itemEstructuraInstancia.Concepto.etiqueta)
                    {
                        if (etiqueta.roll.Equals("http://www.xbrl.org/2003/role/label"))
                        {
                            valorEtiqueta += string.Format(ConstBlockStoreHechos.EstructuraEtiqueta, etiqueta.lenguaje, etiqueta.valor.Replace(ConstEstandar.ComillaSimple, string.Empty), etiqueta.roll.Replace(ConstEstandar.ComillaSimple, string.Empty));
                            valorEtiqueta += ConstEstandar.SeparadorComa;
                        }

                    }

                    var etiquetas = string.Format(ConstBlockStoreHechos.ConceptoEtiqueta, valorEtiqueta.Substring(0, valorEtiqueta.Length + ConstEstandar.MenosTres));
                    elemento += etiquetas;
                }


                elemento += !string.IsNullOrEmpty(itemEstructuraInstancia.TipoBalance) ? string.Format(ConstBlockStoreHechos.Balance, itemEstructuraInstancia.TipoBalance) : string.Empty;

                elemento += string.Format(ConstBlockStoreHechos.ValorDocumentoTipoDato, itemEstructuraInstancia.IdTipoDato, itemEstructuraInstancia.EsTipoDatoNumerico.ToString().ToLower());
                if (itemEstructuraInstancia.EsTipoDatoNumerico)
                {
                    elemento += !string.IsNullOrEmpty(itemEstructuraInstancia.Valor) ? string.Format(ConstBlockStoreHechos.ValorDocumentoTipoDatoNumericoValorRedondeado, itemEstructuraInstancia.Valor, itemEstructuraInstancia.ValorRedondeado) : string.Empty;
                    elemento += !string.IsNullOrEmpty(itemEstructuraInstancia.Precision) ? string.Format(ConstBlockStoreHechos.ValorDocumentoTipoDatoNumericoPrecision, itemEstructuraInstancia.Precision) : string.Empty;
                    elemento += !string.IsNullOrEmpty(itemEstructuraInstancia.Decimales) ? string.Format(ConstBlockStoreHechos.ValorDocumentoTipoDatoNumericoDecimales, itemEstructuraInstancia.Decimales) : string.Empty;
                    elemento += string.Format(ConstBlockStoreHechos.ValorDocumentoTipoDatoNumericoFraccion, itemEstructuraInstancia.EsTipoDatoFraccion.ToString().ToLower());
                }
                else
                {
                    if (!String.IsNullOrWhiteSpace(itemEstructuraInstancia.Valor) && itemEstructuraInstancia.Valor.Length > ConstBlockStoreHechos.MAX_STRING_VALUE_LENGTH)
                    {
                        blockStoreDocumentosyFiltros.EsValorChunks = true;
                        blockStoreDocumentosyFiltros.ValorHecho = itemEstructuraInstancia.Valor;
                        elemento += string.Format(ConstBlockStoreHechos.EsValorChunks, "true");
                    }
                    else 
                    {
                        elemento += !string.IsNullOrEmpty(itemEstructuraInstancia.Valor) ? string.Format(ConstBlockStoreHechos.ValorDocumentoTipoDatoNumericoValor, WebUtility.HtmlEncode(itemEstructuraInstancia.Valor.Replace("\\", "/"))) : string.Empty;
                    }
                }   
                elemento += string.Format(ConstBlockStoreHechos.ValorDocumentoTipoDatoValorNil, itemEstructuraInstancia.EsValorNil.ToString().ToLower());

                if (!itemEstructuraInstancia.Periodo.EsTipoInstante)
                {
                    elemento += string.Format(ConstBlockStoreHechos.PeriodoDuracion, itemEstructuraInstancia.Periodo.Tipo, string.Empty + BsonDateTime.Create(itemEstructuraInstancia.Periodo.FechaInicio).ToJson(), string.Empty + BsonDateTime.Create(itemEstructuraInstancia.Periodo.FechaFin).ToJson());
                }
                else
                {
                    elemento += string.Format(ConstBlockStoreHechos.PeriodoInstante, itemEstructuraInstancia.Periodo.Tipo, string.Empty + BsonDateTime.Create(itemEstructuraInstancia.Periodo.FechaInstante).ToJson());
                }

                var tipoMedidaNumerador = string.Empty;
                if (itemEstructuraInstancia.Medida != null)
                {
                    elemento += string.Format(ConstBlockStoreHechos.Medida, itemEstructuraInstancia.Medida.EsDivisoria.ToString().ToLower());
                    var tipoMedida = ConstBlockStoreHechos.TipoMedida;
                    foreach (var unidad in itemEstructuraInstancia.Medida.Medidas)
                    {
                        tipoMedida += string.Format(ConstBlockStoreHechos.TipoMedidaArray, unidad.Nombre, unidad.EspacioNombres);
                    }

                    tipoMedida = string.Format(ConstEstandar.AnidamientoDos, tipoMedida.Substring(ConstEstandar.NumeroCero, tipoMedida.Length + ConstEstandar.MenosUno), ConstEstandar.CierreCorchete);
                    if (itemEstructuraInstancia.Medida.EsDivisoria)
                    {
                        tipoMedidaNumerador = ConstBlockStoreHechos.TipoMedidaNumerador;
                        foreach (var unidad in itemEstructuraInstancia.Medida.MedidasNumerador)
                        {
                            tipoMedidaNumerador = tipoMedidaNumerador + string.Format(ConstBlockStoreHechos.TipoMedidaArray, unidad.Nombre, unidad.EspacioNombres);
                        }
                        tipoMedidaNumerador = string.Format(ConstEstandar.AnidamientoTres, tipoMedidaNumerador.Substring(ConstEstandar.NumeroCero, tipoMedidaNumerador.Length + ConstEstandar.MenosUno), ConstEstandar.CierreCorchete, ConstEstandar.CierreLlave);
                    }
                    else
                    {
                        tipoMedida += ConstEstandar.CierreLlave;
                    }
                    elemento += string.Format(ConstEstandar.AnidamientoDos, tipoMedida, tipoMedidaNumerador);
                }



                if (itemEstructuraInstancia.Dimension != null)
                {
                    var tipoDimension = ConstBlockStoreHechos.Dimension;

                    foreach (var dimension in itemEstructuraInstancia.Dimension)
                    {
                        tipoDimension += string.Format(ConstBlockStoreHechos.DimensionAtributos, dimension.Explicita.ToString().ToLower(), dimension.QNameDimension, dimension.IdDimension);

                        if (dimension.QNameItemMiembro != null)
                        {
                            tipoDimension += string.Format(ConstBlockStoreHechos.DimensionAtributosNombreElementoMiembro, dimension.QNameItemMiembro, dimension.IdItemMiembro.Replace("\n", "").Replace("'", "").Replace("\"", ""));
                        }
                        if (dimension.ElementoMiembroTipificado != null)
                        {
                            tipoDimension += string.Format(ConstBlockStoreHechos.DimensionMiembroTipificado, string.IsNullOrEmpty(dimension.ElementoMiembroTipificado) ? WebUtility.HtmlEncode(dimension.ElementoMiembroTipificado) : string.Empty);
                        }

                        if (dimension.etiquetasDimension != null)
                        {
                            var estructuraEtiqueta = dimension.etiquetasDimension.Aggregate(string.Empty, (current, itemEtiqueta) => string.Format(ConstEstandar.AnidamientoTres, current, string.Format(ConstBlockStoreHechos.EstructuraEtiqueta, itemEtiqueta.lenguaje, itemEtiqueta.valor.Replace(ConstEstandar.ComillaSimple, string.Empty), itemEtiqueta.roll.Replace(ConstEstandar.ComillaSimple, string.Empty)), ConstEstandar.SeparadorComa));
                            var etiquetas = string.Format(ConstBlockStoreHechos.ConceptoEtiquetaDimension, estructuraEtiqueta.Substring(0, estructuraEtiqueta.Length + ConstEstandar.MenosTres));
                            tipoDimension += etiquetas;
                        }

                        if (dimension.etiquetasMiembro != null)
                        {
                            var estructuraEtiqueta = dimension.etiquetasMiembro.Aggregate(string.Empty, (current, itemEtiqueta) => string.Format(ConstEstandar.AnidamientoTres, current, string.Format(ConstBlockStoreHechos.EstructuraEtiqueta, itemEtiqueta.lenguaje, itemEtiqueta.valor.Replace(ConstEstandar.ComillaSimple, string.Empty), itemEtiqueta.roll.Replace(ConstEstandar.ComillaSimple, string.Empty)), ConstEstandar.SeparadorComa));
                            var etiquetas = string.Format(ConstBlockStoreHechos.ConceptoEtiquetaMiembroDimension, estructuraEtiqueta.Substring(0, estructuraEtiqueta.Length + ConstEstandar.MenosTres));
                            tipoDimension += etiquetas;
                        }


                        tipoDimension += ConstBlockStore.miCierreLlaveComa;
                    }

                    tipoDimension = string.Format(ConstEstandar.AnidamientoDos, tipoDimension.Substring(0, tipoDimension.Length + ConstEstandar.MenosUno), ConstEstandar.CierreCorchete);
                    elemento += tipoDimension;
                }


                elemento += ConstEstandar.CierreLlave;

                blockStoreDocumentosyFiltros.registroBlockStore.Add(BsonDocument.Parse(elemento));
                blockStoreDocumentosyFiltros.filtrosBlockStore.Add(BsonDocument.Parse("{'codigoHashRegistro':'" + itemEstructuraInstancia.codigoHashRegistro + "'}"));


                listadoDocumentos.Add(blockStoreDocumentosyFiltros);
            }


            return listadoDocumentos;
        }


    }

    /// <summary>
    /// Extensión LinQ 
    /// </summary>
    public static class ExtLinQ
    {
        /// <summary>
        /// Extensión Linq donde seleccionamos cada elemento distinto de una lista.
        /// </summary>
        /// <param name="recurso">This -> referencía directa a la colección.</param>
        /// <param name="consulta">Consulta.</param>
        /// <typeparam name="TSource">Tipo.</typeparam>
        /// <typeparam name="TKey">Llava</typeparam>
        /// <returns></returns>
        public static IEnumerable<TSource> DistinctBy<TSource, TKey>(this IEnumerable<TSource> recurso, Func<TSource, TKey> consulta)
        {
            var semilla = new HashSet<TKey>();
            foreach (var elemento in recurso) if (semilla.Add(consulta(elemento))) yield return elemento;
        }
    }

}

