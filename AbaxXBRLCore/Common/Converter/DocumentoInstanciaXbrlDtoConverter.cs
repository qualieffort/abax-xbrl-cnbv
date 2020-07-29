using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Xml;
using System.Xml.Schema;
using AbaxXBRL.Constantes;
using AbaxXBRL.Taxonomia;
using AbaxXBRL.Util;
using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.Entities;
using AbaxXBRLCore.Viewer.Application.Dto;
using Newtonsoft.Json;

namespace AbaxXBRLCore.Common.Converter
{
    /// <summary>
    /// Clase para convertir de distintos origenes un documento de instancia a su representación
    /// al modelo de presentación de DocumentoInstanciaXbrlDto
    /// </summary>
    public class DocumentoInstanciaXbrlDtoConverter
    {
        /// <summary>
        /// Llena los datos básicos de un documento de instancia para base de datos a partir del modelo de DTO del documento de instancia
        /// </summary>
        /// <param name="destino"></param>
        /// <param name="origen"></param>
        /// <param name="idUsuarioExec"></param>
        /// <param name="version"></param>
        public static void ConvertirModeloDto(DocumentoInstancia destino, DocumentoInstanciaXbrlDto origen, long idUsuarioExec, int version)
        {
            destino.Titulo = origen.Titulo;
            destino.RutaArchivo = origen.NombreArchivo;
            destino.FechaCreacion = DateTime.Now;
            destino.IdEmpresa = origen.IdEmpresa == 0 ? (long?)null : origen.IdEmpresa;
            destino.EsCorrecto = origen.EsCorrecto;
            destino.IdUsuarioUltMod = idUsuarioExec == 0 ? (long?)null : idUsuarioExec;
            destino.UltimaVersion = version;
            destino.FechaUltMod = DateTime.Now;
            if (origen.ParametrosConfiguracion != null)
            {
                destino.ParametrosConfiguracion = JsonConvert.SerializeObject(origen.ParametrosConfiguracion);
            }
            if (origen.GruposContextosEquivalentes != null)
            {
                destino.GruposContextosEquivalentes = JsonConvert.SerializeObject(origen.GruposContextosEquivalentes);
            }
            destino.EspacioNombresPrincipal = origen.EspacioNombresPrincipal;

        }
        /// <summary>
        /// Crea los datos de una unidad de base de datos en base a los datos del DTO de origen
        /// </summary>
        /// <param name="documentoOrigen"></param>
        /// <param name="unidadDTO"></param>
        /// <returns></returns>
        public static Unidad CrearUnidadDb(DocumentoInstanciaXbrlDto documentoOrigen, UnidadDto unidadDTO)
        {
            var unidadDb = new Unidad
            {
                EsFraccion = unidadDTO.Tipo == Unit.Divisoria,
                IdRef = unidadDTO.Id
            };
            if (!unidadDb.EsFraccion)
            {
                //Obtener la lista de medidas
                string sMedidas = "";
                foreach (var medidaDTO in unidadDTO.Medidas)
                {
                    if (!String.IsNullOrEmpty(sMedidas))
                    {
                        sMedidas += ",";
                    }
                    sMedidas += medidaDTO.EspacioNombres + ":" + medidaDTO.Nombre;
                }
                unidadDb.Medida = sMedidas;
            }
            else
            {
                //Numerador
                string sMedidas = "";
                foreach (var medidaDTO in unidadDTO.MedidasNumerador)
                {
                    if (!String.IsNullOrEmpty(sMedidas))
                    {
                        sMedidas += ",";
                    }
                    sMedidas += medidaDTO.EspacioNombres + ":" + medidaDTO.Nombre;
                }
                unidadDb.Numerador = sMedidas;

                //Denominador

                sMedidas = "";
                foreach (var medidaDTO in unidadDTO.MedidasDenominador)
                {
                    if (!String.IsNullOrEmpty(sMedidas))
                    {
                        sMedidas += ",";
                    }
                    sMedidas += medidaDTO.EspacioNombres + ":" + medidaDTO.Nombre;
                }
                unidadDb.Denominador = sMedidas;
            }
            return unidadDb;
        }
        /// <summary>
        /// Crea un objeto de contexto para base de datos (sin relaciones) en base a su representación
        /// en DTO
        /// </summary>
        /// <param name="contextoOrigen"></param>
        /// <returns></returns>
        public static Contexto CrearContextoDb(ContextoDto contextoOrigen)
        {
            var ctxDb = new Contexto
            {
                Escenario = ObtenerInformacionDimensional(contextoOrigen.ValoresDimension),
                Nombre = contextoOrigen.Id,
                PorSiempre = contextoOrigen.Periodo.Tipo == Period.ParaSiempre,
                TipoContexto = contextoOrigen.Periodo.Tipo,
                IdentificadorEntidad = contextoOrigen.Entidad.Id,
                EsquemaEntidad = contextoOrigen.Entidad.EsquemaId,
                Segmento = ObtenerInformacionDimensional(contextoOrigen.Entidad.ValoresDimension)
            };

            if (contextoOrigen.Periodo.Tipo == Period.Instante)
            {
                ctxDb.Fecha = contextoOrigen.Periodo.FechaInstante;
            }
            if (contextoOrigen.Periodo.Tipo == Period.Duracion)
            {
                ctxDb.FechaInicio = contextoOrigen.Periodo.FechaInicio;
                ctxDb.FechaFin = contextoOrigen.Periodo.FechaFin;
            }
            return ctxDb;
        }
        /// <summary>
        /// Serializa la información dimensional del conexto
        /// </summary>
        /// <param name="infoDimensional"></param>
        private static string ObtenerInformacionDimensional(IList<DimensionInfoDto> infoDimensional)
        {
            if (infoDimensional != null)
            {
                return JsonConvert.SerializeObject(infoDimensional);
            }
            return null;
        }
        /// <summary>
        /// Crea un objeto de DTS documento para base de datos en base  a su representación den DTO
        /// </summary>
        /// <param name="dtsOrigen"></param>
        /// <returns></returns>
        public static DtsDocumentoInstancia CrearDtsDocumentoInstanciaDb(DtsDocumentoInstanciaDto dtsOrigen)
        {
            return new DtsDocumentoInstancia
                       {
                           TipoReferencia = dtsOrigen.Tipo,
                           Href = dtsOrigen.HRef,
                           Rol = dtsOrigen.Role,
                           RolUri = dtsOrigen.RoleUri
                       };
        }
        /// <summary>
        /// Crea un Hecho a partir de su representación en el modelo de instancia
        /// </summary>
        /// <param name="instanciaDb"></param>
        /// <param name="hechoDto"></param>
        /// <param name="listaTiposDato"></param>
        /// <returns></returns>
        public static Hecho CrearHechoDb(DocumentoInstancia instanciaDb, HechoDto hechoDto, List<TipoDato> listaTiposDato, DocumentoInstanciaXbrlDto documentoInstancia)
        {
            var hechoDb = new Hecho
                              {
                                  IdConcepto = hechoDto.IdConcepto,
                                  Concepto = hechoDto.NombreConcepto,
                                  EspacioNombres = hechoDto.EspacioNombres,
                                  IdRef = hechoDto.Id,
                                  EsTupla = hechoDto.EsTupla,
                                  IdInterno = hechoDto.Consecutivo
                              };
            //Si el hecho DTO no tiene espacio de nombres y concepto, entonces intentar buscarlo de la taxonomía:
            var tipoDatoXbrl = hechoDto.TipoDatoXbrl;
            var tipoDato = hechoDto.TipoDato;
            if ((String.IsNullOrEmpty(hechoDto.NombreConcepto) || String.IsNullOrEmpty(hechoDto.EspacioNombres)) && documentoInstancia.Taxonomia != null)
            {
                if (documentoInstancia.Taxonomia.ConceptosPorId.ContainsKey(hechoDto.IdConcepto))
                {
                    hechoDb.Concepto = documentoInstancia.Taxonomia.ConceptosPorId[hechoDto.IdConcepto].Nombre;
                    hechoDb.EspacioNombres = documentoInstancia.Taxonomia.ConceptosPorId[hechoDto.IdConcepto].EspacioNombres;
                    if (String.IsNullOrEmpty(tipoDatoXbrl) || String.IsNullOrEmpty(tipoDato))
                    {
                        tipoDatoXbrl = documentoInstancia.Taxonomia.ConceptosPorId[hechoDto.IdConcepto].TipoDatoXbrl;
                        tipoDato = documentoInstancia.Taxonomia.ConceptosPorId[hechoDto.IdConcepto].TipoDato;
                    }
                }
                else
                {
                    return null;
                }
            }
            if ((String.IsNullOrWhiteSpace(tipoDatoXbrl) || String.IsNullOrWhiteSpace(tipoDato)) && documentoInstancia.Taxonomia != null)
            {
                if (documentoInstancia.Taxonomia.ConceptosPorId.ContainsKey(hechoDto.IdConcepto))
                {
                    tipoDatoXbrl = documentoInstancia.Taxonomia.ConceptosPorId[hechoDto.IdConcepto].TipoDatoXbrl;
                    tipoDato = documentoInstancia.Taxonomia.ConceptosPorId[hechoDto.IdConcepto].TipoDato;
                }
               
            }
            if (hechoDto.TuplaPadre != null)
            {
                hechoDb.IdInternoTuplaPadre = hechoDto.TuplaPadre.Consecutivo;
            }

            if (!hechoDto.EsTupla)
            {
                hechoDb.Valor = hechoDto.Valor;
                if (hechoDto.EsFraccion)
                {
                    //TODO: agregar 2 campos mas a la tabla
                }


                //Buscar el contexto
                var ctxDb = instanciaDb.Contexto.FirstOrDefault(x => x.Nombre.Equals(hechoDto.IdContexto));
                if (ctxDb != null)
                {
                    hechoDb.IdContexto = ctxDb.IdContexto;
                }

                //Buscar unidad
                var unidadDb = instanciaDb.Unidad.FirstOrDefault(x => x.IdRef.Equals(hechoDto.IdUnidad));
                if (unidadDb != null)
                {
                    hechoDb.IdUnidad = unidadDb.IdUnidad;
                }
                if (!hechoDto.DecimalesEstablecidos && !hechoDto.PrecisionEstablecida)
                {
                    hechoDto.Decimales = ConstantesGenerales.VALOR_DECIMALES_DEFAULT;
                }
                if (hechoDto.DecimalesEstablecidos)
                {
                    hechoDb.Precision = null;
                    hechoDb.Decimales = hechoDto.Decimales;
                }
                if (hechoDto.PrecisionEstablecida)
                {
                    hechoDb.Decimales = null;
                    hechoDb.Precision = hechoDto.Precision;
                }
                //Buscar el tipo de dato
                
                var tipoDatoCatalogo = listaTiposDato.FirstOrDefault(x => x.Nombre.Equals(tipoDato));
                if (tipoDatoCatalogo != null)
                {
                    hechoDb.IdTipoDato = tipoDatoCatalogo.IdTipoDato;
                }
                else 
                {
                    tipoDatoCatalogo = listaTiposDato.FirstOrDefault(x => x.Nombre.Equals(tipoDatoXbrl));
                    if (tipoDatoCatalogo != null)
                    {
                        hechoDb.IdTipoDato = tipoDatoCatalogo.IdTipoDato;
                    }
                }
            }

            hechoDb.IdDocumentoInstancia = instanciaDb.IdDocumentoInstancia;

            return hechoDb;
        }
        /// <summary>
        /// Convierte los datos de base de datos del documento de instancia en su representación del modelo de DTO de presentación
        /// </summary>
        /// <param name="instanciaXbrlDto">Modelo DTO destino</param>
        /// <param name="instanciaDb">Datos de origen</param>
        public static void ConvertirModeloBaseDeDatos(DocumentoInstanciaXbrlDto instanciaXbrlDto, DocumentoInstancia instanciaDb)
        {
            if (!String.IsNullOrEmpty(instanciaDb.GruposContextosEquivalentes))
            {
                instanciaXbrlDto.GruposContextosEquivalentes =
                    JsonConvert.DeserializeObject<IDictionary<string, IList<string>>>(instanciaDb.GruposContextosEquivalentes);
            }
            if (!String.IsNullOrEmpty(instanciaDb.ParametrosConfiguracion))
            {
                instanciaXbrlDto.ParametrosConfiguracion =
                    JsonConvert.DeserializeObject < IDictionary<string, string>>(instanciaDb.ParametrosConfiguracion);
            }
            //Cargar DTS
            CargarDts(instanciaDb, instanciaXbrlDto);
            //Cargar contextos
            CargarContextos(instanciaDb, instanciaXbrlDto);
            //Cargar Unidades
            CargarUnidades(instanciaDb, instanciaXbrlDto);
            //Cargar Hechos
            CargarHechos(instanciaDb, instanciaXbrlDto);
            //Cargar Notas al Pie
            CargarNotasAlPie(instanciaDb, instanciaXbrlDto);

            DocumentoInstanciaXbrlDtoConverter.AgruparInformacionDocumento(instanciaXbrlDto);



        }
        /// <summary>
        /// Carga las notas al pie de base de datos al modelo de DTO del documento de instancia
        /// </summary>
        /// <param name="instanciaDb"></param>
        /// <param name="instanciaXbrlDto"></param>
        private static void CargarNotasAlPie(DocumentoInstancia instanciaDb, DocumentoInstanciaXbrlDto instanciaXbrlDto)
        {
            var hechosPorIdRef = instanciaXbrlDto.HechosPorId;
            var notasPorIdRef = new Dictionary<string, List<NotaAlPieDto>>();
            foreach (var notaDb in instanciaDb.NotaAlPie)
            {
                var notaDto = new NotaAlPieDto { Idioma = notaDb.Idioma, Rol = notaDb.Rol, Valor = notaDb.Valor };
                if (!notasPorIdRef.ContainsKey(notaDb.IdRef))
                {
                    notasPorIdRef.Add(notaDb.IdRef, new List<NotaAlPieDto>());
                }
                notasPorIdRef[notaDb.IdRef].Add(notaDto);
            }
            //Agregar notas a hechos por idioma
            foreach (var notaPorId in notasPorIdRef)
            {
                if (hechosPorIdRef.ContainsKey(notaPorId.Key))
                {
                    var hecho = hechosPorIdRef[notaPorId.Key];
                    hecho.NotasAlPie = new Dictionary<string, IList<NotaAlPieDto>>();
                    foreach (var notaDto in notaPorId.Value)
                    {
                        if (!hecho.NotasAlPie.ContainsKey(notaDto.Idioma))
                        {
                            hecho.NotasAlPie.Add(notaDto.Idioma, new List<NotaAlPieDto>());
                        }
                        hecho.NotasAlPie[notaDto.Idioma].Add(notaDto);
                    }
                }
            }

        }
        /// <summary>
        /// Convierte los registros de los Hechos de un documento de instancia en base de datos
        /// a su representación en DTO
        /// </summary>
        /// <param name="instanciaDb"></param>
        /// <param name="instanciaXbrlDto"></param>
        private static void CargarHechos(DocumentoInstancia instanciaDb, DocumentoInstanciaXbrlDto instanciaXbrlDto)
        {
            var listaGeneralHechos = new List<HechoDto>();
            
            foreach (var hechoDb in instanciaDb.Hecho)
            {
                var hechoDto = new HechoDto
                                   {
                                       Id = hechoDb.IdRef,
                                       IdConcepto = hechoDb.IdConcepto,
                                       Valor = hechoDb.Valor,
                                       NombreConcepto = hechoDb.Concepto,
                                       EspacioNombres = hechoDb.EspacioNombres,
                                       EsTupla = hechoDb.EsTupla,
                                       Consecutivo = hechoDb.IdInterno != null ? hechoDb.IdInterno.Value : 0,
                                       ConsecutivoPadre = hechoDb.IdInternoTuplaPadre != null ? hechoDb.IdInternoTuplaPadre.Value : 0,
                                       CambioValorComparador = false,
                                   };
              
                //Precision y decimales
                if (!String.IsNullOrEmpty(hechoDb.Decimales))
                {
                    hechoDto.Decimales = hechoDb.Decimales;
                }
                if (!String.IsNullOrEmpty(hechoDb.Precision))
                {
                    hechoDto.Precision = hechoDb.Precision;
                }
                if (hechoDb.TipoDato != null)
                {
                    hechoDto.TipoDato = hechoDb.TipoDato.Nombre;
                    hechoDto.EsNumerico = hechoDb.TipoDato.EsNumerico;
                    hechoDto.NoEsNumerico = !hechoDto.EsNumerico;
                    hechoDto.EsFraccion = hechoDb.TipoDato.EsFraccion;
                }
                //Unidad
                hechoDto.IdUnidad = hechoDb.Unidad != null ? hechoDb.Unidad.IdRef : null;
                //Contexto
                hechoDto.IdContexto = hechoDb.Contexto != null ? hechoDb.Contexto.Nombre : null;

                if (!instanciaXbrlDto.HechosPorIdConcepto.ContainsKey(hechoDto.IdConcepto))
                {
                    instanciaXbrlDto.HechosPorIdConcepto.Add(hechoDto.IdConcepto, new List<string>());
                }
                if (!instanciaXbrlDto.HechosPorId.ContainsKey(hechoDto.IdConcepto))
                {
                    instanciaXbrlDto.HechosPorId.Add(hechoDto.Id, hechoDto);
                }
                instanciaXbrlDto.HechosPorIdConcepto[hechoDto.IdConcepto].Add(hechoDto.Id);

                listaGeneralHechos.Add(hechoDto);
            }

            //Asociar estructura de tuplas
            var tuplas = listaGeneralHechos.Where(x => x.EsTupla).ToList();
            var diccTuplas = new Dictionary<long, HechoDto>();

            foreach (var tupla in tuplas)
            {
                tupla.Hechos = new List<String>();
                diccTuplas.Add(tupla.Consecutivo, tupla);
            }

            var hechosHijo = listaGeneralHechos.Where(x => x.ConsecutivoPadre > 0).ToList();
            //Asociar estructura de tuplas
            foreach (var hijo in hechosHijo)
            {
                if (diccTuplas.ContainsKey(hijo.ConsecutivoPadre))
                {
                    var tupla = diccTuplas[hijo.ConsecutivoPadre];
                    tupla.Hechos.Add(hijo.Id);
                    hijo.TuplaPadre = tupla;
                }
            }
        }

        /// <summary>
        /// Convierte los registros de DTS Documento instancia de la base de datos a su representación en DTO
        /// </summary>
        /// <param name="instanciaDb"></param>
        /// <param name="instanciaXbrlDto"></param>
        private static void CargarDts(DocumentoInstancia instanciaDb, DocumentoInstanciaXbrlDto instanciaXbrlDto)
        {
            foreach (var dtsDb in instanciaDb.DtsDocumentoInstancia)
            {
                var dtsDto = new DtsDocumentoInstanciaDto();
                dtsDto.Tipo = dtsDb.TipoReferencia;
                dtsDto.HRef = dtsDb.Href;
                dtsDto.Role = dtsDb.Rol;
                dtsDto.RoleUri = dtsDb.RolUri;
                instanciaXbrlDto.DtsDocumentoInstancia.Add(dtsDto);
            }
        }
        /// <summary>
        /// Transforma los archivos importados registrados en BD por objetos de tipo DTSDocumentoInstanciaDto
        /// </summary>
        /// <param name="archivosTaxonomia">Datos fuente a transformar</param>
        /// <returns>Lista de datos importados</returns>
        public static IList<DtsDocumentoInstanciaDto> ConvertirDTSDocumentoInstancia(ICollection<ArchivoTaxonomiaXbrl> archivosTaxonomia)
        {
            var listaResultado = new List<DtsDocumentoInstanciaDto>();
            if (archivosTaxonomia == null) return null;

            foreach (var archivo in archivosTaxonomia)
            {
                var dtsDto = new DtsDocumentoInstanciaDto();
                dtsDto.Tipo = archivo.TipoReferencia;
                dtsDto.HRef = archivo.Href;
                dtsDto.Role = archivo.Rol;
                dtsDto.RoleUri = archivo.RolUri;
                listaResultado.Add(dtsDto);
            }

            return listaResultado;
        }
        /// <summary>
        /// Convierte un conjunto de archivos importados de taxonomía XBRL de base de datos en su representación de listado de ArchivoImportadoDocumento
        /// </summary>
        /// <param name="archivosTaxonomia"></param>
        /// <returns></returns>
        public static IList<ArchivoImportadoDocumento> ConvertirArchivoTaxonomiaXbrl(ICollection<ArchivoTaxonomiaXbrl> archivosTaxonomia)
        {
            var listaResultado = new List<ArchivoImportadoDocumento>();
            if (archivosTaxonomia == null) return null;

            foreach (var archivo in archivosTaxonomia)
            {
                var archivoImportado = new ArchivoImportadoDocumento();
                archivoImportado.TipoArchivo = archivo.TipoReferencia;
                archivoImportado.HRef = archivo.Href;
                archivoImportado.Role = archivo.Rol;
                archivoImportado.RoleUri = archivo.RolUri;
                listaResultado.Add(archivoImportado);
            }

            return listaResultado;
        }

        /// <summary>
        /// Convierte un conjunto de archivos importados de taxonomía XBRL de base de datos en su representación de listado de ArchivoImportadoDocumento
        /// </summary>
        /// <param name="dtsDocumento">Lista de documentos instancia</param>
        /// <returns></returns>
        public static IList<ArchivoImportadoDocumento> ConvertirDtsDocumentoInstancia(ICollection<DtsDocumentoInstanciaDto> dtsDocumento)
        {
            var listaResultado = new List<ArchivoImportadoDocumento>();
            if (dtsDocumento == null) return null;

            foreach (var dts in dtsDocumento)
            {
                var archivoImportado = new ArchivoImportadoDocumento();
                archivoImportado.TipoArchivo = dts.Tipo;
                archivoImportado.HRef = dts.HRef;
                archivoImportado.Role = dts.Role;
                archivoImportado.RoleUri = dts.RoleUri;
                listaResultado.Add(archivoImportado);
            }

            return listaResultado;
        }
        /// <summary>
        /// Convierte los registros que representan a las uniades en un documento de instancia de base de datos
        /// a su representación en DTO
        /// </summary>
        /// <param name="instanciaDb">Documento de instancia de Base de datos</param>
        /// <param name="instanciaXbrlDto">Documento de instancia destino dto</param>
        private static void CargarUnidades(DocumentoInstancia instanciaDb, DocumentoInstanciaXbrlDto instanciaXbrlDto)
        {
            foreach (var unidadDb in instanciaDb.Unidad)
            {
                var unidadDto = new UnidadDto
                                    {
                                        Id = unidadDb.IdRef,
                                        Tipo = unidadDb.EsFraccion ? Unit.Divisoria : Unit.Medida
                                    };
                if (unidadDto.Tipo == Unit.Medida)
                {
                    unidadDto.Medidas = CrearMedidasDto(unidadDb.Medida);
                }
                else
                {
                    unidadDto.MedidasNumerador = CrearMedidasDto(unidadDb.Numerador);
                    unidadDto.MedidasDenominador = CrearMedidasDto(unidadDb.Denominador);
                }
                if (!instanciaXbrlDto.UnidadesPorId.ContainsKey(unidadDto.Id))
                {
                    instanciaXbrlDto.UnidadesPorId.Add(unidadDto.Id, unidadDto);
                }
            }
        }
        /// <summary>
        /// Crea uno o mas objetos Medida Dto a partir de su presentación como cadena
        /// </summary>
        /// <param name="medidasDb"></param>
        /// <returns>Lista de medidas obtenidas</returns>
        private static IList<MedidaDto> CrearMedidasDto(string medidasDb)
        {
            var medidasDto = new List<MedidaDto>();
            if (!String.IsNullOrEmpty(medidasDb))
            {
                string[] medidasString = medidasDb.Split(',');
                foreach (var medString in medidasString)
                {
                    var qNameMed = XmlUtil.ParsearQName(medString);
                    var medidaDto = new MedidaDto
                                        {
                                            EspacioNombres = qNameMed.Namespace,
                                            Nombre = qNameMed.Name
                                        };
                    medidasDto.Add(medidaDto);
                }
            }
            return medidasDto;
        }

        /// <summary>
        /// Carga los contextos y los convierte en su representación en DTO
        /// </summary>
        /// <param name="documentoDb">Documento de instancia de Base de datos</param>
        /// <param name="documentoInstanciaXbrl">Documento de instancia destino dto</param>
        private static void CargarContextos(DocumentoInstancia documentoDb, DocumentoInstanciaXbrlDto documentoInstanciaXbrl)
        {
            documentoInstanciaXbrl.ContextosPorId = new Dictionary<string, Viewer.Application.Dto.ContextoDto>();
            foreach (var contextoDb in documentoDb.Contexto)
            {
                var ctxDto = new Viewer.Application.Dto.ContextoDto
                                 {
                                     Id = contextoDb.Nombre,
                                     Escenario = contextoDb.Escenario,
                                     Periodo = new PeriodoDto
                                                   {
                                                       Tipo = contextoDb.TipoContexto
                                                   }
                                 };

                //Recuperar valores de dimensión
                ctxDto.ValoresDimension = RecuperarValoresDimension(ctxDto.Escenario);
                ctxDto.ContieneInformacionDimensional = ctxDto.ValoresDimension != null &&
                                                        ctxDto.ValoresDimension.Count > 0;
                if (contextoDb.TipoContexto == Period.Instante)
                {
                    ctxDto.Periodo.FechaInstante = contextoDb.Fecha != null ? contextoDb.Fecha.Value.ToLocalTime().ToUniversalTime() : DateTime.MinValue;
                    
                }
                else if (contextoDb.TipoContexto == Period.Duracion)
                {
                    ctxDto.Periodo.FechaInicio = contextoDb.FechaInicio != null ? contextoDb.FechaInicio.Value.ToLocalTime().ToUniversalTime() : DateTime.MinValue;
                    ctxDto.Periodo.FechaFin = contextoDb.FechaFin != null ? contextoDb.FechaFin.Value.ToLocalTime().ToUniversalTime() : DateTime.MinValue;
                }

                ctxDto.Entidad = CrearEntidad(documentoInstanciaXbrl, contextoDb);
                if (!documentoInstanciaXbrl.ContextosPorId.ContainsKey(ctxDto.Id))
                {
                    documentoInstanciaXbrl.ContextosPorId.Add(ctxDto.Id, ctxDto);
                }
            }
        }
        /// <summary>
        /// Des-serializa los valores de dimension cargados en el campo
        /// </summary>
        /// <param name="campoValores"></param>
        /// <returns>Lista con los valores des serializados, null si no hay contenido</returns>
        private static List<DimensionInfoDto> RecuperarValoresDimension(string campoValores)
        {
            if (campoValores != null)
            {
                return JsonConvert.DeserializeObject<List<DimensionInfoDto>>(campoValores);
            }
            return null;
        }

        /// <summary>
        /// Crea el DTO de entidad con los datos de origen enviados como parámetro
        /// </summary>
        /// <param name="documentoInstanciaXbrl">Modelo de instancia</param>
        /// <param name="entidadDb">Entidad origen de BD</param>
        /// <returns>Objeto entidad resultante</returns>
        private static EntidadDto CrearEntidad(DocumentoInstanciaXbrlDto documentoInstanciaXbrl, Contexto ctx)
        {
            //Crear entidad
            var entidad = new EntidadDto
                                  {
                                      EsquemaId = ctx.EsquemaEntidad,
                                      Id = ctx.IdentificadorEntidad,
                                      Segmento = ctx.Segmento
                                  };
            entidad.ValoresDimension = RecuperarValoresDimension(entidad.Segmento);
            entidad.ContieneInformacionDimensional = entidad.ValoresDimension != null &&
                                                        entidad.ValoresDimension.Count > 0;
            return entidad;
        }

        /// <summary>
        /// Configura los datos adicionales de los hechos basado en la información de la taxonomía
        /// </summary>
        /// <param name="documentoInstanciaXbrl"></param>
        public static void ConfigurarDatosAdicionalesHechos(DocumentoInstanciaXbrlDto documentoInstanciaXbrl)
        {
            foreach (var hechoDto in documentoInstanciaXbrl.HechosPorId.Values)
            {
                if (documentoInstanciaXbrl.Taxonomia.ConceptosPorId.ContainsKey(hechoDto.IdConcepto))
                {
                    var concepto = documentoInstanciaXbrl.Taxonomia.ConceptosPorId[hechoDto.IdConcepto];
                    if (concepto.Tipo == Concept.Item)
                    {
                        hechoDto.EsTupla = false;
                        hechoDto.EsNumerico = concepto.EsTipoDatoNumerico;
                        hechoDto.NoEsNumerico = !concepto.EsTipoDatoNumerico;
                        if (hechoDto.EsNumerico)
                        {
                            hechoDto.ValorNumerico = new decimal(Double.Parse(hechoDto.Valor, NumberStyles.Any, CultureInfo.InvariantCulture)); ;
                        }
                    }
                    else
                    {
                        hechoDto.EsTupla = true;
                    }
                }
            }
        }

        /// <summary>
        /// Agrupa la información de contextos, unidades y entidades del documento de instancia.
        /// </summary>
        /// <param name="dto">Documento de instancia a evaluar</param>
        public static void AgruparInformacionDocumento(DocumentoInstanciaXbrlDto dto)
        {
            string idContexto = null;
            string idEntidad = null;
            dto.ContextosPorFecha = new Dictionary<String,IList<String>>();
            dto.EntidadesPorId = new Dictionary<String, EntidadDto>();
            dto.HechosPorIdContexto = new Dictionary<String, IList<String>>();
            dto.HechosPorIdUnidad = new Dictionary<String, IList<String>>();
            dto.HechosPorIdConcepto = new Dictionary<String, IList<String>>();
            dto.GruposContextosEquivalentes = new Dictionary<string, IList<string>>();

            foreach (var contexto in dto.ContextosPorId.Values)
            {
                //Agrupar información de contextos
                idContexto = ObtenerValorIndicePorFechas(contexto.Periodo);
                if (!dto.ContextosPorFecha.ContainsKey(idContexto))
                {
                    dto.ContextosPorFecha.Add(idContexto, new List<string>());
                }
                dto.ContextosPorFecha[idContexto].Add(contexto.Id);

                //Agrupar información de entidades por ID
                idEntidad = contexto.Entidad.IdEntidad;
                if (!dto.EntidadesPorId.ContainsKey(idEntidad))
                {
                    dto.EntidadesPorId.Add(idEntidad, new EntidadDto(contexto.Entidad.EsquemaId, contexto.Entidad.Id));
                }

                //Agrupar información de hechos por ID Contextos
                dto.HechosPorIdContexto.Add(contexto.Id, new List<string>());
                var listaHechosFinales = dto.HechosPorIdContexto[contexto.Id];
                foreach (var hecho in dto.HechosPorId.Values)
                {
                    
                    if (hecho.IdContexto != null && hecho.IdContexto.Equals(contexto.Id))
                    {       
                        listaHechosFinales.Add(hecho.Id);
                    }
                }

                //Buscar contextos equivalentes
                if (!dto.GruposContextosEquivalentes.ContainsKey(contexto.Id)) 
                {
                    //Crear la entrada del índice para le contexto actual
                    if (!dto.GruposContextosEquivalentes.ContainsKey(contexto.Id))
                    {
                        dto.GruposContextosEquivalentes.Add(contexto.Id, new List<string>());
                    }
                    dto.GruposContextosEquivalentes[contexto.Id].Add(contexto.Id);
                    //Buscar a que otros contextos es equivalente
                    /*
                    foreach (var contextoComparar in dto.ContextosPorId.Values.Where(cx => !cx.Id.Equals(contexto.Id) && cx.EstructuralmenteIgual(contexto)))
                    {
                        dto.GruposContextosEquivalentes[contexto.Id].Add(contextoComparar.Id);
                        if (!dto.GruposContextosEquivalentes.ContainsKey(contextoComparar.Id))
                        {
                            dto.GruposContextosEquivalentes.Add(contextoComparar.Id, new List<string>());
                        }
                        dto.GruposContextosEquivalentes[contextoComparar.Id].Add(contexto.Id);
                    }
                    */
                }
            }

            foreach (var unidad in dto.UnidadesPorId.Values)
            {
                //Agrupar información de hechos por ID Unidad
                dto.HechosPorIdUnidad.Add(unidad.Id, new List<string>());
                var listaHechosFinales = dto.HechosPorIdUnidad[unidad.Id];
                foreach (var hecho in dto.HechosPorId.Values)
                {
                    
                    
                    if (hecho.IdUnidad != null && hecho.IdUnidad.Equals(unidad.Id))
                    {
                        listaHechosFinales.Add(hecho.Id);
                    }
                }
            }

            foreach (var hecho in dto.HechosPorId.Values)
            {
                if (hecho.IdConcepto != null)
                {
                    if (!dto.HechosPorIdConcepto.ContainsKey(hecho.IdConcepto)) {
                        dto.HechosPorIdConcepto[hecho.IdConcepto] = new List<String>();
                    }
                    dto.HechosPorIdConcepto[hecho.IdConcepto].Add(hecho.Id);
                }
            }
        
        }
        /// <summary>
        /// Obtiene el valor en cadena que representa las fechas o fecha del periodo:
        /// Si es instante su representación en formato Y-m-d
        /// Si es duración su representación en formato Y-m-d_Y-m-d   (inicio y fin)
        /// Si es para siempre la palabra "forever"
        /// </summary>
        /// <param name="periodo">Periodo del cúál obtener la representación de las fechas</param>
        /// <returns></returns>
        public static string ObtenerValorIndicePorFechas(PeriodoDto periodo)
        {
            if (Period.ParaSiempre == periodo.Tipo)
            {
                return EtiquetasXBRLConstantes.Forever;
            }
            else if (Period.Instante == periodo.Tipo)
            {
                return DateUtil.ToFormatString(periodo.FechaInstante.ToUniversalTime(), DateUtil.YMDateFormat);
            }
            else
            {
                return DateUtil.ToFormatString(periodo.FechaInicio.ToUniversalTime(), DateUtil.YMDateFormat) +
                    ConstantesGenerales.Underscore_String
                    + DateUtil.ToFormatString(periodo.FechaFin.ToUniversalTime(), DateUtil.YMDateFormat);
            }
        }

        public static void ObtenerTipoDeDatoDerivadoDeXbrl(XmlSchema esquema, XmlSchemaType dataType, out XmlSchemaType dataTypeBaseQName)
        {

            dataTypeBaseQName = null;
            if (dataType.QualifiedName != null && dataType.QualifiedName.Namespace.Equals(EspacioNombresConstantes.InstanceNamespace))
            {
                if (TiposDatoXBRL.TiposXBRL.Contains(dataType.QualifiedName.Name))
                {
                    dataTypeBaseQName = dataType;
                }
            }
            else
            {
                if (dataType.DerivedBy.Equals(XmlSchemaDerivationMethod.Restriction))
                {
                    XmlQualifiedName qName = null;

                    if (dataType.GetType() == typeof(XmlSchemaSimpleType))
                    {
                        XmlSchemaSimpleType simpleType = (XmlSchemaSimpleType)dataType;
                        XmlSchemaSimpleTypeRestriction simpleTypeRestriction = (XmlSchemaSimpleTypeRestriction)simpleType.Content;
                        qName = simpleTypeRestriction.BaseTypeName;
                    }
                    else if (dataType.GetType() == typeof(XmlSchemaComplexType))
                    {
                        XmlSchemaComplexType complexType = (XmlSchemaComplexType)dataType;
                        if (complexType.ContentModel == null)
                        {
                            ;
                        }
                        else
                        {
                            if (complexType.ContentModel.Content.GetType() == typeof(XmlSchemaComplexContentRestriction))
                            {
                                XmlSchemaComplexContentRestriction content = (XmlSchemaComplexContentRestriction)complexType.ContentModel.Content;
                                qName = content.BaseTypeName;
                            }
                            else
                            {
                                XmlSchemaSimpleContentRestriction content = (XmlSchemaSimpleContentRestriction)complexType.ContentModel.Content;
                                qName = content.BaseTypeName;
                            }
                        }
                    }

                    if (qName != null)
                    {
                        XmlSchemaType tipo = esquema.SchemaTypes.Contains(qName) ? esquema.SchemaTypes[qName] as XmlSchemaType : null;
                        if (tipo != null)
                        {
                            ObtenerTipoDeDatoDerivadoDeXbrl(esquema, tipo, out dataTypeBaseQName);
                        }
                    }
                }
            }
        }

        /// <summary>
        /// Realiza el proceso de convertir una entidad de tipo taxonomia en su forma de dto
        /// </summary>
        /// <param name="taxonomias">Listado de entidades de la taxonomia</param>
        /// <returns>Listado de taxonomias dto</returns>
        public static IList<TaxonomiaXbrlDto> ConvertirTaxonomiaXbrl(IList<TaxonomiaXbrl> taxonomias) {

            IList<TaxonomiaXbrlDto> taxonomiasDto = new List<TaxonomiaXbrlDto>();

            foreach (var taxonomia in taxonomias)
            {
                TaxonomiaXbrlDto dto = new TaxonomiaXbrlDto();
                dto.IdTaxonomiaXbrl=taxonomia.IdTaxonomiaXbrl;
                dto.Nombre=taxonomia.Nombre;
                dto.EspacioNombresPrincipal=taxonomia.EspacioNombresPrincipal;
                dto.Descripcion=taxonomia.Descripcion;
                dto.Anio = taxonomia.Anio;

                foreach(var archivo in taxonomia.ArchivoTaxonomiaXbrl){
                    ArchivoTaxonomiaXbrlDto archivoDto = new ArchivoTaxonomiaXbrlDto();
                    archivoDto.Href=archivo.Href;
                    archivoDto.IdArchivoTaxonomiaXbrl=archivo.IdArchivoTaxonomiaXbrl;
                    archivoDto.IdTaxonomiaXbrl=archivo.IdTaxonomiaXbrl;
                    archivoDto.Rol=archivo.Rol;
                    archivoDto.RolUri=archivo.RolUri;
                    archivoDto.TipoReferencia = archivo.TipoReferencia;
                    dto.ArchivoTaxonomiaXbrl.Add(archivoDto);
                }
                

                taxonomiasDto.Add(dto);
            }

            return taxonomiasDto;

        }
    }
}
