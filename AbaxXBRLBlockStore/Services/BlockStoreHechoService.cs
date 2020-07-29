using AbaxXBRLBlockStore.BlockStore;
using AbaxXBRLBlockStore.Common.Dto;
using AbaxXBRLBlockStore.Common.Entity;
using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Viewer.Application.Dto;
using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Driver.Builders;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.IO;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

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
        /// Colección que indica el nombre de los documentos de hechos
        /// </summary>
        public string Collection { get; set; }


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
        /// Realiza el registro de información de hechos
        /// </summary>
        /// <param name="documentoInstanciaJson">informacion del json como documento instancia</param>
        /// <returns>Resultado de la oepracion de los hechos</returns>
        public ResultadoOperacionDto RegistrarHechosDocumentoInstancia(string documentoInstanciaJson)
        {

            var resultadoOperacion = new ResultadoOperacionDto();

            try
            {
                JsonSerializerSettings settings = new JsonSerializerSettings();
                settings.NullValueHandling = NullValueHandling.Ignore;
                var documentoInstanciXbrlDto = Newtonsoft.Json.JsonConvert.DeserializeObject<DocumentoInstanciaXbrlDto>(documentoInstanciaJson, settings);

                var estructuraRegistroInstancia = BlockStoreDocumentoInstancia.procesarDocumentoInstancia(documentoInstanciXbrlDto);
                List<BsonDocument> listaBsonDocument = BlockStoreDocumentoInstancia.armarBlockStore(estructuraRegistroInstancia);

                CrearHintEmpresas(documentoInstanciXbrlDto);
                CrearHintUnidades(documentoInstanciXbrlDto);
                CrearHintConceptos(documentoInstanciXbrlDto);
                CrearHintDimension(documentoInstanciXbrlDto);

                BlockStoreDocumentoInstancia.insertarBlockStore(Collection, listaBsonDocument);

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

                resultadoOperacion.InformacionExtra = entidades;
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
        /// Consultar las dimensiones de un concepto
        /// </summary>
        /// <returns>Resultado con un listado de dimensiones de un concepto</returns>
        public ResultadoOperacionDto ConsultarDimensionesPorConcepto(String concepto)
        {
            var resultadoOperacion = new ResultadoOperacionDto();

            try
            {
                var query = Query.EQ("idConcepto", concepto);
                var dimensionesDocument = BlockStoreConsulta.consulta(CollectionDimension, query);
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
        /// Realiza la consulta al respositorio con los filtros indicados
        /// </summary>
        /// <param name="filtrosConsultaJson"></param>
        /// <returns></returns>
        public ResultadoOperacionDto ConsultarRepositorio(string filtrosConsultaJson)
        {
            var resultadoOperacion = new ResultadoOperacionDto();

            try
            {
                JsonSerializerSettings settings = new JsonSerializerSettings();
                settings.NullValueHandling = NullValueHandling.Ignore;
                var filtrosConsulta = Newtonsoft.Json.JsonConvert.DeserializeObject<Dictionary<string, Dictionary<string, string>>>(filtrosConsultaJson, settings);


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

            foreach (var IdConcepto in documentoInstanciXbrlDto.Taxonomia.ConceptosPorId)
            {
                BsonDocument bsonDocument = null;

                var Concepto = IdConcepto.Value;
                var query = Query.And(Query.EQ("Id", Concepto.Id), Query.EQ("EspacioNombresPrincipal", documentoInstanciXbrlDto.EspacioNombresPrincipal));
                var resultado = BlockStoreConsulta.consulta(CollectionConcepto, query);

                if (resultado.Count == 0)
                {
                    bsonDocument = BlockStoreConsulta.armarBlockStoreConcepto(Concepto, documentoInstanciXbrlDto.EspacioNombresPrincipal);
                    bsonDocuments.Add(bsonDocument);
                }
            }

            if (bsonDocuments.Count > 0)
            {
                BlockStoreDocumentoInstancia.insertarBlockStore(CollectionConcepto, bsonDocuments);
            }

        }


        /// <summary>
        /// Crea el hint de las dimensiones definidas en el archivo
        /// </summary>
        /// <param name="documentoInstanciXbrlDto">Informacion del documento Instancia</param>
        private void CrearHintDimension(DocumentoInstanciaXbrlDto documentoInstanciXbrlDto)
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
                    var query = Query.And(Query.EQ("Id", Concepto.Id), Query.EQ("EspacioNombresPrincipal", documentoInstanciXbrlDto.EspacioNombresPrincipal));

                    var resultado = BlockStoreConsulta.consulta(CollectionDimension, Query.And(andList));

                    if (resultado.Count == 0)
                    {
                        var bsonDocuments = BsonDocument.Parse(jsonDimension);

                        BlockStoreDocumentoInstancia.insertarBlockStore(CollectionDimension, bsonDocuments);
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
            //var result = Regex.Match(json, @"ObjectId\(([^\)]*)\)").Value;
            //var id = result.Replace("ObjectId(", string.Empty).Replace(")", String.Empty);
            //return json.Replace(result, id);
            return json.Replace("\")", "\"").Replace("ObjectId(", "");

        }







    }
}
