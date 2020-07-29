using AbaxXBRLBlockStore.BlockStore;
using AbaxXBRLBlockStore.Common.Dto;
using AbaxXBRLBlockStore.Common.Entity;
using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Common.Entity;
using AbaxXBRLCore.Services;
using AbaxXBRLCore.Viewer.Application.Dto;
using MongoDB.Bson;
using MongoDB.Driver;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.IO;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using AbaxXBRLCore.Common.Entity.Log;
using AbaxXBRLCore.MongoDB.Services;
using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.MongoDB.Common.Dto;
using System.Threading;
using AbaxXBRLCore.MongoDB.Common.Entity;
using MongoDB.Driver.Builders;

namespace AbaxXBRLBlockStore.Services
{
    /// <summary>
    /// Servicios para el registro de hechos en el blockstore en Mongo DB
    /// </summary>
    public class BlockStoreHechoService
    {

        /// <summary>
        /// Blockstore para generar el registro de valores en MongoDB
        /// </summary>
        public BlockStoreDocumentoInstancia BlockStoreDocumentoInstancia { get; set; }


        /// <summary>
        /// Blockstore para realizar las consultas de valores en MongoDB
        /// </summary>
        public BlockStoreConsulta BlockStoreConsulta { get; set; }

        /// <summary>
        /// Servicio para obtener la información de las emrpesas de un grupo
        /// </summary>
        public IGrupoEmpresaService GrupoEmpresaService { get; set; }

        /// <summary>
        /// Colección que indica el nombre de los documentos de hechos
        /// </summary>
        public string Collection { get; set; }

        /// <summary>
        /// Diccionario que maneja de un espacio de nombres de taxonomia los conceptos que esten cargados y el diccionario de conceptos que se tenga
        /// </summary>
        private Dictionary<string, Dictionary<string, string>> ConceptosPorTaxonomia { get; set; }

        /// <summary>
        /// Diccionario que maneja de un espacio de nombres de taxonomia los conceptos que esten cargados y el diccionario de conceptos que se tenga
        /// </summary>
        private Dictionary<string, Dictionary<string, string>> DimensionPorTaxonomia { get; set; }



        /// <summary>
        /// Colección que indica el nombre con que se guarda las empresas
        /// </summary>
        public string CollectionEmpresas { get; set; }


        /// <summary>
        /// Colección que indica el nombre con que se guarda las unidades
        /// </summary>
        public string CollectionUnidades { get; set; }


        /// <summary>
        /// Colección que indica el nombre con que se guarda las dimensiones
        /// </summary>
        public string CollectionDimension { get; set; }


        /// <summary>
        /// Colección que indica el nombre con que se guarda los conceptos
        /// </summary>
        public string CollectionConcepto { get; set; }

        /// <summary>
        /// Fabrica de consumidores para el registro de valores de hechos por concepto
        /// </summary>
        public ConsumerFactoryTaskHecho ConsumerFactoryTaskHecho { get; set; }


        /// <summary>
        /// El valor del rol estándar para un arco de etiqueta.
        /// </summary>
        public string RolEtiqueta = "http://www.xbrl.org/2003/role/label";


        /// <summary>
        /// Realiza el registro de información de hechos
        /// </summary>
        /// <param name="documentoInstanciXbrlDto">informacion del json como documento instancia</param>
        /// <param name="idDocumentoInstancia">true : En caso de existir el valor, este se actualiza en el registro, de lo contrario lo inserta como un nuevo valor; FALSE : Solo inserta el registro si este no existe en el blockStore.</param>
        /// <returns>Resultado de la oepracion de los hechos</returns>
        public ResultadoOperacionDto registrarHechosDocumentoInstancia(DocumentoInstanciaXbrlDto documentoInstanciXbrlDto, long idDocumentoInstancia, long version, bool booInsertarActualizar = true)
        {
            var resultadoOperacion = new ResultadoOperacionDto();
            try
            {
                var estructuraRegistroInstancia = BlockStoreDocumentoInstancia.procesarDocumentoInstancia(documentoInstanciXbrlDto);
                var entBlockStoreDocumentosyFiltros = BlockStoreDocumentoInstancia.armarBlockStoreHashConsulta(estructuraRegistroInstancia);

                crearHint(documentoInstanciXbrlDto);
                if (booInsertarActualizar)
                {
                    var estatusDocumento = new EstatusRegistroHechosDto();
                    estatusDocumento.idDocumentoInstancia = idDocumentoInstancia;
                    estatusDocumento.version = version;
                    estatusDocumento.numeroRegistrosPorAplicar = entBlockStoreDocumentosyFiltros.Count;

                    var resultadoOperacionDto = new ResultadoOperacionDto();
                    estatusDocumento.resultadoOperacion = resultadoOperacionDto;
                    foreach (var elementoDocumento in entBlockStoreDocumentosyFiltros)
                    {
                        elementoDocumento.estatusRegistroHecho = estatusDocumento;
                        ConsumerFactoryTaskHecho.distribuirHecho(elementoDocumento);
                    }

                    lock (estatusDocumento.resultadoOperacion)
                    {
                        Monitor.Wait(estatusDocumento.resultadoOperacion);
                        resultadoOperacion = estatusDocumento.resultadoOperacion;
                    }

                }
                else
                {
                    var documentosRegistro = new List<BsonDocument>();
                    foreach (var elementoDocumento in entBlockStoreDocumentosyFiltros)
                    {
                        documentosRegistro.Add(elementoDocumento.registroBlockStore);
                    }

                    BlockStoreDocumentoInstancia.insertarBlockStore(Collection, documentosRegistro);
                    resultadoOperacion.Resultado = true;
                }
            }
            catch (Exception e)
            {
                resultadoOperacion.Resultado = false;
                resultadoOperacion.Mensaje = e.Message;
                LogUtil.Error(e);

            }
            return resultadoOperacion;
        }

        /// <summary>
        /// Genera en un archivo plano los hechos de un documento instancia
        /// </summary>
        /// <param name="archivoSalida">Stream del archivo de salida para los hechos del documento instancia</param>
        /// <param name="documentoInstanciXbrlDto">Documento instancia del cual se van a obtener los hechos</param>
        public void generarHechosDocumentoInstancia(DocumentoInstanciaXbrlDto documentoInstanciXbrlDto, StreamWriter archivoSalida)
        {

            var estructuraRegistroInstancia = BlockStoreDocumentoInstancia.procesarDocumentoInstancia(documentoInstanciXbrlDto);
            var entBlockStoreDocumentosyFiltros = BlockStoreDocumentoInstancia.armarBlockStoreHashConsulta(estructuraRegistroInstancia);

            var resultadoOperacionDto = new ResultadoOperacionDto();

            foreach (var elementoDocumento in entBlockStoreDocumentosyFiltros)
            {
                var informacionRegistroJson = elementoDocumento.registroBlockStore.ToJson();

                archivoSalida.WriteLine(depurarIdentificadorBson(informacionRegistroJson));
            }
        }

        private void crearHint(DocumentoInstanciaXbrlDto oDocumentoInstanciXbrlDto)
        {
            CrearHintEmpresas(oDocumentoInstanciXbrlDto);
            CrearHintUnidades(oDocumentoInstanciXbrlDto);
            CrearHintConceptos(oDocumentoInstanciXbrlDto);
            CrearHintDimension(oDocumentoInstanciXbrlDto);
        }

        /// <summary>
        /// Realiza las consultas de las emisoras
        /// </summary>
        /// <returns>Resultado con las emisoras que se tienen cargadas</returns>
        public ResultadoOperacionDto ConsultarEmisoras()
        {
            var resultadoOperacion = new ResultadoOperacionDto();

            try
            {

                var emisorasDocument = BlockStoreConsulta.obtenerDocumentos(CollectionEmpresas);
                resultadoOperacion.Resultado = true;

                JsonSerializerSettings settings = new JsonSerializerSettings();
                settings.NullValueHandling = NullValueHandling.Ignore;

                var jsonEmisoras = emisorasDocument.ToJson();
                jsonEmisoras = depurarIdentificadorBson(jsonEmisoras);

                var entidades = Newtonsoft.Json.JsonConvert.DeserializeObject<EntidadDto[]>(jsonEmisoras, settings);

                var entidadesDiccionario = new Dictionary<string, string>();
                var entidadesResultado = new List<EntidadDto>();
                foreach (var entidad in entidades)
                {
                    if (!entidadesDiccionario.ContainsKey(entidad.Id))
                    {
                        entidadesResultado.Add(entidad);
                        entidadesDiccionario.Add(entidad.Id, entidad.Id);
                    }
                }

                resultadoOperacion.InformacionExtra = entidadesResultado.ToArray();
            }
            catch (Exception e)
            {
                resultadoOperacion.Resultado = false;
                resultadoOperacion.Mensaje = e.Message;
            }


            return resultadoOperacion;
        }


        /// <summary>
        /// Consultar unidades que se tengan disponibles en los registros
        /// </summary>
        /// <returns>Resultado con un listado de unidades</returns>
        public ResultadoOperacionDto ConsultarUnidades()
        {
            var resultadoOperacion = new ResultadoOperacionDto();

            try
            {
                var unidadesDocument = BlockStoreConsulta.obtenerDocumentos(CollectionUnidades);

                resultadoOperacion.Resultado = true;

                JsonSerializerSettings settings = new JsonSerializerSettings();
                settings.NullValueHandling = NullValueHandling.Ignore;


                var json = depurarIdentificadorBson(unidadesDocument.ToJson());
                var unidades = Newtonsoft.Json.JsonConvert.DeserializeObject<MedidaDto[]>(json, settings);



                resultadoOperacion.InformacionExtra = unidades;
            }
            catch (Exception e)
            {
                resultadoOperacion.Resultado = false;
                resultadoOperacion.Mensaje = e.Message;
            }


            return resultadoOperacion;
        }


        /// <summary>
        /// Consultar taxonomias que tengan datos en las taxonomias
        /// </summary>
        /// <returns>Resultado con un listado de nombres de taxonomias</returns>
        public ResultadoOperacionDto ConsultarTaxonomias()
        {
            var resultadoOperacion = new ResultadoOperacionDto();

            try
            {
                var taxonomiasDocument = BlockStoreConsulta.distinct(Collection, "EspacioNombresPrincipal");

                resultadoOperacion.Resultado = true;

                JsonSerializerSettings settings = new JsonSerializerSettings();
                settings.NullValueHandling = NullValueHandling.Ignore;

                var listadoTaxonomia = Newtonsoft.Json.JsonConvert.DeserializeObject<String[]>(taxonomiasDocument.ToJson(), settings);




                resultadoOperacion.InformacionExtra = listadoTaxonomia;
            }
            catch (Exception e)
            {
                resultadoOperacion.Resultado = false;
                resultadoOperacion.Mensaje = e.Message;
            }

            return resultadoOperacion;
        }


        /// <summary>
        /// Consultar los conceptos que se tienen registrados
        /// </summary>
        /// <returns>Resultado con un listado de conceptos</returns>
        public ResultadoOperacionDto ConsultarConceptos(String taxonomia)
        {
            var resultadoOperacion = new ResultadoOperacionDto();

            try
            {
                var query = Query.EQ("EspacioNombresPrincipal", taxonomia);
                var conceptosDocument = BlockStoreConsulta.consulta(CollectionConcepto, query);

                resultadoOperacion.Resultado = true;

                JsonSerializerSettings settings = new JsonSerializerSettings();
                settings.NullValueHandling = NullValueHandling.Ignore;

                var json = depurarIdentificadorBson(conceptosDocument.ToJson());
                json = json.Replace("\"Etiquetas\"", "\"EtiquetasConcepto\"");
                var listadoConceptos = Newtonsoft.Json.JsonConvert.DeserializeObject<ConceptoDto[]>(json, settings);

                var hintDimensionalXTaxonomia = ConsultarDimensionesPorTaxonomia( taxonomia);
                var conceptoDimensiones = new Dictionary<string, Dictionary<string, List<DimensionInfoDto>>>();

                foreach(var hintDimensional in hintDimensionalXTaxonomia){
                    if (!conceptoDimensiones.ContainsKey(hintDimensional.idConcepto))
                    {
                        conceptoDimensiones[hintDimensional.idConcepto] = new Dictionary<string, List<DimensionInfoDto>>();
                    }
                    foreach(var dimensionInfoDto in hintDimensional.DimensionInfoDto){
                        if (!conceptoDimensiones[hintDimensional.idConcepto].ContainsKey(dimensionInfoDto.IdDimension)) {
                            conceptoDimensiones[hintDimensional.idConcepto][dimensionInfoDto.IdDimension] = new List<DimensionInfoDto>();
                        }
                        if (!contieneDimension(conceptoDimensiones[hintDimensional.idConcepto][dimensionInfoDto.IdDimension], dimensionInfoDto)) {
                            conceptoDimensiones[hintDimensional.idConcepto][dimensionInfoDto.IdDimension].Add(dimensionInfoDto);
                        }
                        
                    }                    
                }

                foreach (var concepto in listadoConceptos)
                {
                    if (conceptoDimensiones.ContainsKey(concepto.Id))
                    {
                        concepto.EsDimension = true;
                        concepto.InformacionDimensionalPorConcepto = conceptoDimensiones[concepto.Id];
                    }
                        
                    var etiquetasConceptoList = new List<EtiquetaDto>();
                    foreach (var etiqueta in concepto.EtiquetasConcepto)
                    {
                        if (etiqueta.Rol.Equals(RolEtiqueta))
                        {
                            etiquetasConceptoList.Add(etiqueta);
                        }
                    }
                    concepto.EtiquetasConcepto = etiquetasConceptoList.ToArray();
                }

                resultadoOperacion.InformacionExtra = listadoConceptos;
            }
            catch (Exception e)
            {
                resultadoOperacion.Resultado = false;
                resultadoOperacion.Mensaje = e.Message;
            }

            return resultadoOperacion;
        }

        /// <summary>
        /// Valida si en la lista de dimensiones contiene la ifnormación de la dimensión enviada
        /// </summary>
        /// <param name="listadDimensiones">Lista de dimensiones</param>
        /// <param name="dimension">Dimension a validar</param>
        /// <returns>Si la dimension no existe en el listado de dimension</returns>
        private bool contieneDimension(List <DimensionInfoDto> listadDimensiones,DimensionInfoDto dimension){
            var dimensionExistente = listadDimensiones.Where(x => x.IdDimension == dimension.IdDimension && x.IdItemMiembro == dimension.IdItemMiembro);
            return dimensionExistente.Count() > 0 ? true : false;

        }

        /// <summary>
        /// Consultar las dimensiones de un concepto
        /// </summary>
        /// <param name="concepto">Identificador del concepto a consultar sus dimensiones</param>
        /// <param name="espacioNombresPrincipal">Espacio de nombres principal de la taxonomia</param>
        /// <returns>Resultado con un listado de dimensiones de un concepto</returns>
        public ResultadoOperacionDto ConsultarDimensionesPorConcepto(String concepto, String espacioNombresPrincipal)
        {
            var resultadoOperacion = new ResultadoOperacionDto();

            try
            {
                var andList = new BindingList<IMongoQuery>();

                andList.Add(Query.EQ("idConcepto", concepto));
                andList.Add(Query.EQ("EspacioNombresPrincipal", espacioNombresPrincipal));

                var dimensionesDocument = BlockStoreConsulta.consulta(CollectionDimension, Query.And(andList));
                resultadoOperacion.Resultado = true;

                JsonSerializerSettings settings = new JsonSerializerSettings();
                settings.NullValueHandling = NullValueHandling.Ignore;


                var json = depurarIdentificadorBson(dimensionesDocument.ToJson());

                var listadoDimensionConcepto = Newtonsoft.Json.JsonConvert.DeserializeObject<HintDimensional[]>(json, settings);

                resultadoOperacion.InformacionExtra = listadoDimensionConcepto;
            }
            catch (Exception e)
            {
                resultadoOperacion.Resultado = false;
                resultadoOperacion.Mensaje = e.Message;
            }

            return resultadoOperacion;
        }


        /// <summary>
        /// Consultar las dimensiones de la taxonomia
        /// </summary>
        /// <param name="espacioNombresPrincipal">Espacio de nombres principal de la taxonomia</param>
        /// <returns>Resultado con un listado de dimensiones de una taxonomia</returns>
        public HintDimensional[] ConsultarDimensionesPorTaxonomia(String espacioNombresPrincipal)
        {
            var andList = new BindingList<IMongoQuery>();

            andList.Add(Query.EQ("EspacioNombresPrincipal", espacioNombresPrincipal));

            var dimensionesDocument = BlockStoreConsulta.consulta(CollectionDimension, Query.And(andList));

            JsonSerializerSettings settings = new JsonSerializerSettings();
            settings.NullValueHandling = NullValueHandling.Ignore;


            var json = depurarIdentificadorBson(dimensionesDocument.ToJson());

            return Newtonsoft.Json.JsonConvert.DeserializeObject<HintDimensional[]>(json, settings);


        }


        /// <summary>
        /// Realiza la consulta al respositorio con los filtros indicados
        /// </summary>
        /// <param name="filtrosConsultaJson">Detalle de filtros de consulta para la informacion de repositorio xbrl en mongo</param>
        /// <returns>Resultao de operacion de la consulta al repositorio de informacion</returns>
        public ResultadoOperacionDto ConsultarRepositorio(EntFiltroConsultaHecho filtrosConsulta, int paginaRequerida, int numeroRegistros)
        {
            var resultadoOperacion = new ResultadoOperacionDto();

            try
            {
                filtrosConsulta.filtros.entidadesDiccionario = new Dictionary<string, string>();

                if (filtrosConsulta.filtros.entidadesId != null)
                    foreach (var entidad in filtrosConsulta.filtros.entidadesId)
                    {
                        filtrosConsulta.filtros.entidadesDiccionario.Add(entidad, entidad);
                    }

                if (filtrosConsulta.filtros.gruposEntidades != null && filtrosConsulta.filtros.gruposEntidades.Length > 0)
                {

                    var listadoEmpresas = GrupoEmpresaService.ObtenEmpresasAsignadas(filtrosConsulta.filtros.gruposEntidades);

                    foreach (var empresa in listadoEmpresas)
                    {
                        if (!filtrosConsulta.filtros.entidadesDiccionario.ContainsKey(empresa.Etiqueta))
                        {
                            filtrosConsulta.filtros.entidadesDiccionario.Add(empresa.Etiqueta, empresa.Etiqueta);
                        }
                    }

                    filtrosConsulta.filtros.entidadesId = new string[filtrosConsulta.filtros.entidadesDiccionario.Count];
                    var indice = 0;

                    foreach (var empresa in filtrosConsulta.filtros.entidadesDiccionario.Keys)
                    {
                        filtrosConsulta.filtros.entidadesId[indice] = empresa;
                        indice++;
                    }
                }
                 
                JsonSerializerSettings settings = new JsonSerializerSettings();
                settings.NullValueHandling = NullValueHandling.Ignore;

                filtrosConsulta.EsValorChunks = false;
                var FiltroConsulta = armarConsultaRepositorio(filtrosConsulta);
                var hechosBson = this.BlockStoreConsulta.consulta(Collection, FiltroConsulta, paginaRequerida, numeroRegistros);

                var json = depurarIdentificadorBson(hechosBson.ToJson());
                var listadoHechos = Newtonsoft.Json.JsonConvert.DeserializeObject<EntHecho[]>(json, settings);

                filtrosConsulta.EsValorChunks = true;
                var FiltroConsultaCheckuns = armarConsultaRepositorio(filtrosConsulta);
                var hechosBsonCheckuns = this.BlockStoreConsulta.consulta(Collection, FiltroConsultaCheckuns, paginaRequerida, numeroRegistros);

                
                if (hechosBsonCheckuns.Count > 0) 
                {
                    var jsonChekuns = depurarIdentificadorBson(hechosBsonCheckuns.ToJson());
                    var listaHechosCheckuns = Newtonsoft.Json.JsonConvert.DeserializeObject<EntHechoCheckun[]>(jsonChekuns, settings);

                    foreach(var hechoChekun in listaHechosCheckuns) 
                    {
                        hechoChekun.valor = BlockStoreConsulta.ObtenValorHechoCheckun(hechoChekun.codigoHashRegistro);
                    }
                    var count = (listadoHechos.Count() + listaHechosCheckuns.Count());
                    var listaHechosCompleta = new EntHecho[count];
                    listadoHechos.CopyTo(listaHechosCompleta, 0);
                    listaHechosCheckuns.CopyTo(listaHechosCompleta, listadoHechos.Count());
                    listadoHechos = listaHechosCompleta;
                }
                
                resultadoOperacion.InformacionExtra = listadoHechos;
                resultadoOperacion.Resultado = true;
            }
            catch (Exception e)
            {
                resultadoOperacion.Resultado = false;
                resultadoOperacion.Mensaje = e.Message;
            }

            return resultadoOperacion;
        }


        /// <summary>
        /// Consulta el total de registros que tiene cierta consulta de informacion del repositorio
        /// </summary>
        /// <param name="filtrosConsulta">Filtros de consutla para realizar los valores de conteo</param>
        /// <returns>Estado de paginacion</returns>
        public long ObtenerNumeroRegistrosConsultaHechos(EntFiltroConsultaHecho filtrosConsulta)
        {


            filtrosConsulta.filtros.entidadesDiccionario = new Dictionary<string, string>();

            if (filtrosConsulta.filtros.entidadesId != null)
                foreach (var entidad in filtrosConsulta.filtros.entidadesId)
                {
                    filtrosConsulta.filtros.entidadesDiccionario.Add(entidad, entidad);
                }

            if (filtrosConsulta.filtros.gruposEntidades != null && filtrosConsulta.filtros.gruposEntidades.Length > 0)
            {

                var listadoEmpresas = GrupoEmpresaService.ObtenEmpresasAsignadas(filtrosConsulta.filtros.gruposEntidades);

                foreach (var empresa in listadoEmpresas)
                {
                    if (!filtrosConsulta.filtros.entidadesDiccionario.ContainsKey(empresa.Etiqueta))
                    {
                        filtrosConsulta.filtros.entidadesDiccionario.Add(empresa.Etiqueta, empresa.Etiqueta);
                    }
                }

                filtrosConsulta.filtros.entidadesId = new string[filtrosConsulta.filtros.entidadesDiccionario.Count];
                var indice = 0;

                foreach (var empresa in filtrosConsulta.filtros.entidadesDiccionario.Keys)
                {
                    filtrosConsulta.filtros.entidadesId[indice] = empresa;
                    indice++;
                }
            }

            JsonSerializerSettings settings = new JsonSerializerSettings();
            settings.NullValueHandling = NullValueHandling.Ignore;

            var FiltroConsulta = armarConsultaRepositorio(filtrosConsulta);

            return this.BlockStoreConsulta.count(Collection, FiltroConsulta);

        }



        /// <summary>
        /// Crea el hint en MongoDB de empresas
        /// </summary>
        /// <param name="documentoInstanciXbrlDto">Informacion del documento Instancia</param>
        private void CrearHintEmpresas(DocumentoInstanciaXbrlDto documentoInstanciXbrlDto)
        {

            foreach (var IdEntidad in documentoInstanciXbrlDto.EntidadesPorId)
            {
                var Entidad = IdEntidad.Value;
                var query = Query.EQ("IdEntidad", Entidad.IdEntidad);
                var resultado = BlockStoreConsulta.consulta(CollectionEmpresas, query);

                if (resultado.Count == 0)
                {
                    BlockStoreDocumentoInstancia.insertarBlockStore(CollectionEmpresas, BlockStoreConsulta.armarBlockStoreEntidad(Entidad));
                }
            }



        }

        /// <summary>
        /// Crea el hint en MongoDB de unidades
        /// </summary>
        /// <param name="documentoInstanciXbrlDto">Informacion del documento Instancia</param>
        private void CrearHintUnidades(DocumentoInstanciaXbrlDto documentoInstanciXbrlDto)
        {
            foreach (var IdUnidad in documentoInstanciXbrlDto.UnidadesPorId)
            {
                var Unidad = IdUnidad.Value;

                if (Unidad.Medidas != null)
                    foreach (var medida in Unidad.Medidas)
                    {
                        var query = Query.EQ("Nombre", medida.Nombre);
                        var resultado = BlockStoreConsulta.consulta(CollectionUnidades, query);

                        if (resultado.Count == 0)
                        {
                            BlockStoreDocumentoInstancia.insertarBlockStore(CollectionUnidades, BlockStoreConsulta.armarBlockStoreUnidad(medida));
                        }
                    }

                if (Unidad.MedidasDenominador != null)
                    foreach (var medida in Unidad.MedidasDenominador)
                    {
                        var query = Query.EQ("Nombre", medida.Nombre);
                        var resultado = BlockStoreConsulta.consulta(CollectionUnidades, query);

                        if (resultado.Count == 0)
                        {
                            BlockStoreDocumentoInstancia.insertarBlockStore(CollectionUnidades, BlockStoreConsulta.armarBlockStoreUnidad(medida));
                        }

                    }
                if (Unidad.MedidasNumerador != null)
                    foreach (var medida in Unidad.MedidasNumerador)
                    {
                        var query = Query.EQ("Nombre", medida.Nombre);
                        var resultado = BlockStoreConsulta.consulta(CollectionUnidades, query);

                        if (resultado.Count == 0)
                        {
                            BlockStoreDocumentoInstancia.insertarBlockStore(CollectionUnidades, BlockStoreConsulta.armarBlockStoreUnidad(medida));
                        }
                    }


            }


        }



        /// <summary>
        /// Crea el hint en MongoDB de Conceptos
        /// </summary>
        /// <param name="documentoInstanciXbrlDto">Informacion del documento Instancia</param>
        private void CrearHintConceptos(DocumentoInstanciaXbrlDto documentoInstanciXbrlDto)
        {
            var bsonDocuments = new List<BsonDocument>();
            CargarInformacionConceptosTaxonomia(documentoInstanciXbrlDto.EspacioNombresPrincipal, false);

            foreach (var IdConcepto in documentoInstanciXbrlDto.Taxonomia.ConceptosPorId)
            {
                BsonDocument bsonDocument = null;

                var Concepto = IdConcepto.Value;

                if (!ConceptosPorTaxonomia[documentoInstanciXbrlDto.EspacioNombresPrincipal].ContainsKey(Concepto.Id))
                {
                    var query = Query.And(Query.EQ("Id", Concepto.Id), Query.EQ("EspacioNombresPrincipal", documentoInstanciXbrlDto.EspacioNombresPrincipal));
                    var resultado = BlockStoreConsulta.consulta(CollectionConcepto, query);

                    if (resultado.Count == 0)
                    {
                        bsonDocument = BlockStoreConsulta.armarBlockStoreConcepto(Concepto, documentoInstanciXbrlDto.EspacioNombresPrincipal);
                        bsonDocuments.Add(bsonDocument);
                    }
                }
            }

            if (bsonDocuments.Count > 0)
            {
                BlockStoreDocumentoInstancia.insertarBlockStore(CollectionConcepto, bsonDocuments);
                CargarInformacionConceptosTaxonomia(documentoInstanciXbrlDto.EspacioNombresPrincipal, true);
            }

        }

        /// <summary>
        /// Carga la informacion de conceptos por taxonomia en el singleton
        /// </summary>
        /// <param name="EspacioNombresPrincipal">Espacio de nombres principal de la taxonomia</param>
        private void CargarInformacionConceptosTaxonomia(string EspacioNombresPrincipal, bool forzarConsulta)
        {

            if (ConceptosPorTaxonomia == null)
            {
                ConceptosPorTaxonomia = new Dictionary<string, Dictionary<string, string>>();
            }

            if (!ConceptosPorTaxonomia.ContainsKey(EspacioNombresPrincipal) || forzarConsulta)
            {
                ConceptosPorTaxonomia[EspacioNombresPrincipal] = new Dictionary<string, string>();
                var queryConceptosTaxonomia = Query.And(Query.EQ("EspacioNombresPrincipal", EspacioNombresPrincipal));
                var conceptosPorTaxonomiaBson = BlockStoreConsulta.consulta(CollectionConcepto, queryConceptosTaxonomia);
                if (conceptosPorTaxonomiaBson.ToArray().Count() > 0)
                {
                    foreach (var conceptoBson in conceptosPorTaxonomiaBson)
                    {
                        var idConcepto = conceptoBson["Id"];
                        if (!ConceptosPorTaxonomia[EspacioNombresPrincipal].ContainsKey(idConcepto.ToString()))
                            ConceptosPorTaxonomia[EspacioNombresPrincipal].Add(idConcepto.ToString(), idConcepto.ToString());
                    }
                }

            }
        }


        /// <summary>
        /// Crea el hint de las dimensiones definidas en el archivo
        /// </summary>
        /// <param name="documentoInstanciXbrlDto">Informacion del documento Instancia</param>
        private void CrearHintDimensionAnterior(DocumentoInstanciaXbrlDto documentoInstanciXbrlDto)
        {
            foreach (var IdHecho in documentoInstanciXbrlDto.HechosPorId)
            {
                var Hecho = IdHecho.Value;
                var Concepto = documentoInstanciXbrlDto.Taxonomia.ConceptosPorId[Hecho.IdConcepto];
                var Contexto = documentoInstanciXbrlDto.ContextosPorId[Hecho.IdContexto];
                var hintDimensional = new HintDimensional();
                hintDimensional.DimensionInfoDto = new List<DimensionInfoDto>();
                hintDimensional.idConcepto = Concepto.Id;

                if (Contexto.ContieneInformacionDimensional)
                {
                    hintDimensional.idConcepto = Concepto.Id;
                    foreach (var dimencionInfoDto in Contexto.ValoresDimension)
                    {
                        hintDimensional.DimensionInfoDto.Add(dimencionInfoDto);
                    }
                }
                else
                {
                    var hiperCubosHecho = new List<HipercuboDto>();

                    if (documentoInstanciXbrlDto.Taxonomia.ListaHipercubos != null)
                        foreach (var listaHipercubo in documentoInstanciXbrlDto.Taxonomia.ListaHipercubos.Values)
                        {
                            foreach (var hipercubo in listaHipercubo)
                            {
                                if (hipercubo.ElementosPrimarios.Contains(Hecho.IdConcepto))
                                {
                                    hiperCubosHecho.Add(hipercubo);
                                }
                            }
                        }

                    if (hiperCubosHecho.Count > 0)
                    {

                        foreach (var hiperCubo in hiperCubosHecho)
                        {

                            if (hiperCubo.ElementosPrimarios.Contains(Hecho.IdConcepto))
                            {
                                foreach (var dimension in hiperCubo.Dimensiones)
                                {
                                    if (documentoInstanciXbrlDto.Taxonomia.DimensionDefaults.ContainsKey(dimension))
                                    {
                                        var dimencionInfoDto = new DimensionInfoDto();
                                        dimencionInfoDto.IdDimension = dimension;
                                        dimencionInfoDto.IdItemMiembro = documentoInstanciXbrlDto.Taxonomia.DimensionDefaults[dimension];
                                        dimencionInfoDto.Explicita = true;

                                        hintDimensional.DimensionInfoDto.Add(dimencionInfoDto);
                                    }
                                }
                            }
                        }
                    }

                }

                if (hintDimensional.DimensionInfoDto.Count > 0)
                {

                    var jsonDimension = JsonConvert.SerializeObject(hintDimensional);
                    var andList = new BindingList<IMongoQuery>();
                    andList.Add(Query.EQ("idConcepto", hintDimensional.idConcepto));

                    foreach (var detalleDimensional in hintDimensional.DimensionInfoDto)
                    {
                        andList.Add(Query.EQ("DimensionInfoDto.Explicita", detalleDimensional.Explicita));

                        if (detalleDimensional.Explicita)
                        {
                            andList.Add(Query.EQ("DimensionInfoDto.IdDimension", detalleDimensional.IdDimension));
                            andList.Add(Query.EQ("DimensionInfoDto.IdItemMiembro", detalleDimensional.IdItemMiembro));

                        }
                        else
                        {
                            andList.Add(Query.EQ("DimensionInfoDto.IdDimension", detalleDimensional.IdDimension));

                        }

                    }

                    var resultado = BlockStoreConsulta.consulta(CollectionDimension, Query.And(andList));

                    if (resultado.Count == 0)
                    {
                        var bsonDocuments = BsonDocument.Parse(jsonDimension);

                        BlockStoreDocumentoInstancia.insertarBlockStore(CollectionDimension, bsonDocuments);
                    }
                }
            }
        }

        private void CrearHintDimension(DocumentoInstanciaXbrlDto documentoInstanciXbrlDto)
        {

            var bsonDocuments = new List<BsonDocument>();
            CargarInformacionDimensionalTaxonomia(documentoInstanciXbrlDto.EspacioNombresPrincipal, false);

            foreach (var IdHecho in documentoInstanciXbrlDto.HechosPorId)
            {
                var Hecho = IdHecho.Value;
                ConceptoDto Concepto = null;
                if (!documentoInstanciXbrlDto.Taxonomia.ConceptosPorId.TryGetValue(Hecho.IdConcepto, out Concepto))
                {
                    continue;
                };
                var Contexto = documentoInstanciXbrlDto.ContextosPorId[Hecho.IdContexto];
                var hintDimensional = new HintDimensional();
                hintDimensional.DimensionInfoDto = new List<DimensionInfoDto>();
                hintDimensional.idConcepto = Concepto.Id;

                if (Contexto.ContieneInformacionDimensional)
                {
                    hintDimensional.idConcepto = Concepto.Id;
                    foreach (var dimencionInfoDto in Contexto.ValoresDimension)
                    {
                        
                        dimencionInfoDto.EtiquetasConceptoDimension=obtenerEtiquetasPorDefault(documentoInstanciXbrlDto.Taxonomia.ConceptosPorId[dimencionInfoDto.IdDimension].Etiquetas);

                        if (dimencionInfoDto.IdItemMiembro!=null)
                            dimencionInfoDto.EtiquetasConceptoMiembroDimension = obtenerEtiquetasPorDefault(documentoInstanciXbrlDto.Taxonomia.ConceptosPorId[dimencionInfoDto.IdItemMiembro].Etiquetas);

                        hintDimensional.DimensionInfoDto.Add(dimencionInfoDto);
                    }
                }
                else
                {
                    var hiperCubosHecho = new List<HipercuboDto>();

                    if (documentoInstanciXbrlDto.Taxonomia.ListaHipercubos != null)
                        foreach (var listaHipercubo in documentoInstanciXbrlDto.Taxonomia.ListaHipercubos.Values)
                        {
                            foreach (var hipercubo in listaHipercubo)
                            {
                                if (hipercubo.ElementosPrimarios.Contains(Hecho.IdConcepto))
                                {
                                    hiperCubosHecho.Add(hipercubo);
                                }
                            }
                        }

                    if (hiperCubosHecho.Count > 0)
                    {

                        foreach (var hiperCubo in hiperCubosHecho)
                        {

                            if (hiperCubo.ElementosPrimarios.Contains(Hecho.IdConcepto))
                            {
                                foreach (var dimension in hiperCubo.Dimensiones)
                                {
                                    if (documentoInstanciXbrlDto.Taxonomia.DimensionDefaults.ContainsKey(dimension))
                                    {
                                        var dimencionInfoDto = new DimensionInfoDto();
                                        dimencionInfoDto.IdDimension = dimension;
                                        dimencionInfoDto.IdItemMiembro = documentoInstanciXbrlDto.Taxonomia.DimensionDefaults[dimension];
                                        dimencionInfoDto.Explicita = true;

                                        dimencionInfoDto.EtiquetasConceptoDimension = obtenerEtiquetasPorDefault(documentoInstanciXbrlDto.Taxonomia.ConceptosPorId[dimencionInfoDto.IdDimension].Etiquetas);

                                        if (dimencionInfoDto.IdItemMiembro!=null)
                                            dimencionInfoDto.EtiquetasConceptoMiembroDimension = obtenerEtiquetasPorDefault(documentoInstanciXbrlDto.Taxonomia.ConceptosPorId[dimencionInfoDto.IdItemMiembro].Etiquetas);
                                        
                                        hintDimensional.DimensionInfoDto.Add(dimencionInfoDto);
                                    }
                                }
                            }
                        }
                    }

                }

                if (hintDimensional.DimensionInfoDto.Count > 0)
                {

                    

                    hintDimensional.EspacioNombresPrincipal = documentoInstanciXbrlDto.EspacioNombresPrincipal;
                    hintDimensional.codigoHashRegistro = UtilAbax.CalcularHash(hintDimensional.ToJson());

                    if (!DimensionPorTaxonomia[documentoInstanciXbrlDto.EspacioNombresPrincipal].ContainsKey(hintDimensional.codigoHashRegistro))
                    {

                        DimensionPorTaxonomia[documentoInstanciXbrlDto.EspacioNombresPrincipal].Add(hintDimensional.codigoHashRegistro, hintDimensional.codigoHashRegistro);
                        var query = Query.And(Query.EQ("codigoHashRegistro", hintDimensional.codigoHashRegistro));
                        var resultado = BlockStoreConsulta.consulta(CollectionDimension, query);

                        if (resultado.Count == 0)
                        {
                            var jsonDimension = JsonConvert.SerializeObject(hintDimensional);
                            var bsonDocument = BsonDocument.Parse(jsonDimension);

                            bsonDocuments.Add(bsonDocument);
                        }
                    }
                }
            }


            if (bsonDocuments.Count > 0)
            {

                BlockStoreDocumentoInstancia.insertarBlockStore(CollectionDimension, bsonDocuments);
                CargarInformacionDimensionalTaxonomia(documentoInstanciXbrlDto.EspacioNombresPrincipal, true);
            }


        }

        /// <summary>
        /// Obtiene las etiquetas por default de un las etiquetas de un concepto
        /// </summary>
        /// <param name="etiquetas">Etiquetas de un concepto</param>
        /// <returns>Diccionario con las etiquetas de un concepto</returns>
        private Dictionary<string, EtiquetaDto>  obtenerEtiquetasPorDefault(IDictionary<string, IDictionary<string, EtiquetaDto>> etiquetas)
        {

            var etiquetasPorDefault = new Dictionary<string, EtiquetaDto>();
            foreach (var idioma in etiquetas.Keys)
            {
                if (!etiquetasPorDefault.ContainsKey(idioma)) {

                    if (etiquetas[idioma].ContainsKey(RolEtiqueta))
                    {
                        etiquetasPorDefault[idioma] = etiquetas[idioma][RolEtiqueta];
                    }

                }
            }

            return etiquetasPorDefault;


        }

        /// <summary>
        /// Carga la informacion dimensional por taxonomia en el singleton
        /// </summary>
        /// <param name="EspacioNombresPrincipal">Espacio de nombres principal de la taxonomia</param>
        private void CargarInformacionDimensionalTaxonomia(string EspacioNombresPrincipal, bool forzarConsulta)
        {

            if (DimensionPorTaxonomia == null)
            {
                DimensionPorTaxonomia = new Dictionary<string, Dictionary<string, string>>();
            }

            if (!DimensionPorTaxonomia.ContainsKey(EspacioNombresPrincipal) || forzarConsulta)
            {
                DimensionPorTaxonomia[EspacioNombresPrincipal] = new Dictionary<string, string>();
                var queryDimensionTaxonomia = Query.And(Query.EQ("EspacioNombresPrincipal", EspacioNombresPrincipal));
                var dimensionesPorTaxonomiaBson = BlockStoreConsulta.consulta(CollectionDimension, queryDimensionTaxonomia);
                if (dimensionesPorTaxonomiaBson.ToArray().Count() > 0)
                {
                    foreach (var dimensionBson in dimensionesPorTaxonomiaBson)
                    {
                        var codigoHash = dimensionBson["codigoHashRegistro"];
                        try
                        {

                            DimensionPorTaxonomia[EspacioNombresPrincipal].Add(codigoHash.ToString(), codigoHash.ToString());
                        }
                        catch (Exception e)
                        {
                            LogUtil.Error(e);
                        }
                    }
                }

            }
        }

        /// <summary>
        /// Depura el identificador generado por bson
        /// </summary>
        /// <returns>Cadena json con la informacion reemplazable</returns>
        private string depurarIdentificadorBson(string json)
        {
            return json.Replace("\")", "\"").Replace("ObjectId(", "").Replace("ISODate(", "");
        }


        /// <summary>
        /// Arma el BsonDocument que se trata de la consulta al repositorio de informacion
        /// </summary>
        /// <param name="filtrosConsulta">Filtros de consulta a realizar en el respositorio de informacion</param>
        /// <returns>Documento con la consulta a realizar en el repositorio de informacion</returns>
        private BsonDocument armarConsultaRepositorio(EntFiltroConsultaHecho filtrosConsulta)
        {
            var documentoConsulta = new StringBuilder();
            documentoConsulta.Append("{");
            if (filtrosConsulta.EsValorChunks.Value)
            {
                documentoConsulta.Append("'esValorChunks' : true, ");
            }
            else 
            {
                documentoConsulta.Append("'esValorChunks' : {$nin: [true]}, ");
            }
            
            //Se agrega las emisoras
            documentoConsulta.Append("'idEntidad': {		$in: [");
            for (var indice = 0; indice < filtrosConsulta.filtros.entidadesId.Length; indice++)
            {
                var entidad = filtrosConsulta.filtros.entidadesId[indice];
                documentoConsulta.Append("'").Append(entidad).Append("'");
                if (indice != (filtrosConsulta.filtros.entidadesId.Length - 1))
                    documentoConsulta.Append(",");
            }
            documentoConsulta.Append("] }, ");

            //Se agrega las unidades

            documentoConsulta.Append("$or: [{");
            documentoConsulta.Append("'unidades.Medidas.Nombre': {");
            documentoConsulta.Append("$exists: false");
            documentoConsulta.Append("}}");

            if (filtrosConsulta.filtros.unidades.Length > 0)
            {
                documentoConsulta.Append(", {'unidades.Medidas.Nombre': {$in: [");
                for (var indice = 0; indice < filtrosConsulta.filtros.unidades.Length; indice++)
                {
                    var unidad = filtrosConsulta.filtros.unidades[indice];
                    documentoConsulta.Append("'").Append(unidad).Append("'");
                    if (indice != (filtrosConsulta.filtros.unidades.Length - 1))
                        documentoConsulta.Append(",");
                }
                documentoConsulta.Append("]} ");
                documentoConsulta.Append("}");
            }



            documentoConsulta.Append("],");


            //Se agregan los periodos
            documentoConsulta.Append("$and: [{$or: [");

            for (var indice = 0; indice < filtrosConsulta.filtros.periodos.Length; indice++)
            {
                EntPeriodo periodoFiltro = filtrosConsulta.filtros.periodos[indice];
                var fechaFinal = periodoFiltro.FechaFin.Value;
                var fechaInicial = periodoFiltro.FechaInicio.Value;

                documentoConsulta.Append("{$and: [{'periodo.FechaInicio': ISODate('").Append(fechaInicial.ToString("yyyy-MM-dd")).Append("T00:00:00Z')}, {'periodo.FechaFin': ISODate('").Append(fechaFinal.ToString("yyyy-MM-dd")).Append("T00:00:00Z')}]}");
                documentoConsulta.Append(",{'periodo.FechaInstante': ISODate('").Append(fechaFinal.ToString("yyyy-MM-dd")).Append("T00:00:00Z')}");

                if (indice != (filtrosConsulta.filtros.periodos.Length - 1))
                    documentoConsulta.Append(",");
            }

            documentoConsulta.Append("]}");

            //Se agregan los conceptos

            if (filtrosConsulta.conceptos != null && filtrosConsulta.conceptos.Length > 0)
            {

                documentoConsulta.Append(",{ $or: [ ");

                for (var indice = 0; indice < filtrosConsulta.conceptos.Length; indice++)
                {
                    var concepto = filtrosConsulta.conceptos[indice];
                    documentoConsulta.Append(" { $and: [ ");

                    documentoConsulta.Append("{'concepto.Id': '" + concepto.Id + "'},");
                    documentoConsulta.Append("{'EspacioNombresPrincipal': '" + concepto.EspacioNombresTaxonomia + "'}");

                    //En el caso que al concepto se tengan dimensiones
                    if (concepto.InformacionDimensional != null && concepto.InformacionDimensional.Length > 0)
                    {
                        documentoConsulta.Append(",{ $or: [");

                        for (var indiceDimension = 0; indiceDimension < concepto.InformacionDimensional.Length; indiceDimension++)
                        {
                            documentoConsulta.Append("{ $and: [ ");

                            var dimension = concepto.InformacionDimensional[indiceDimension];
                            documentoConsulta.Append("{'dimension.Explicita': " + dimension.Explicita.ToString().ToLower() + "},");

                            documentoConsulta.Append(dimension.QNameDimension != null && dimension.QNameDimension.Length > 0 ? "{'dimension.QNameDimension': '" + dimension.QNameDimension + "'}," : "");
                            documentoConsulta.Append(dimension.IdDimension != null && dimension.IdDimension.Length > 0 ? "{'dimension.IdDimension': '" + dimension.IdDimension + "'}" : "");

                            documentoConsulta.Append(dimension.QNameItemMiembro != null && dimension.QNameItemMiembro.Length > 0 ? ",{'dimension.QNameItemMiembro': '" + dimension.QNameItemMiembro + "'}" : "");
                            documentoConsulta.Append(dimension.IdItemMiembro != null && dimension.IdItemMiembro.Length > 0 ? ",{'dimension.IdItemMiembro': '" + dimension.IdItemMiembro + "'}" : "");

                            documentoConsulta.Append(dimension.Filtro != null && dimension.Filtro.Length > 0 ? ",{'dimension.ElementoMiembroTipificado': /" + dimension.Filtro + "/}" : "");


                            documentoConsulta.Append(" ]}");

                            if((indiceDimension + 1) < concepto.InformacionDimensional.Length)  
                                documentoConsulta.Append(",");

                        }



                        documentoConsulta.Append("]}");

                    }



                    documentoConsulta.Append(" ] }");

                    if (indice != (filtrosConsulta.conceptos.Length - 1))
                        documentoConsulta.Append(",");
                }
                documentoConsulta.Append("] }");
            }

            documentoConsulta.Append("]}");


            //BsonDocument FiltroConsulta = MongoDB.Bson.Serialization.BsonSerializer.Deserialize<BsonDocument>("{'idEntidad': {		$in: ['DAIMLER1', 'DAIMLER']},'medida.tipoMedida.nombre': {$in: ['MXN']},$and: [{$or: [{'periodo.fecha': ISODate('2014-12-31T00:00:00Z')},{$and: [{'periodo.fechaInicial': ISODate('2014-12-31T00:00:00Z')}, {'periodo.fecha': ISODate('2014-12-31T00:00:00Z')}]}]}]}");
            BsonDocument FiltroConsulta = MongoDB.Bson.Serialization.BsonSerializer.Deserialize<BsonDocument>(documentoConsulta.ToString());

            return FiltroConsulta;
        }






    }
}
