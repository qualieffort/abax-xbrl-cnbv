using System;
using System.Collections.Generic;
using System.Linq;
using System.Xml;
using System.Xml.Schema;
using AbaxXBRL.Constantes;
using AbaxXBRL.Taxonomia;
using AbaxXBRL.Taxonomia.Dimensiones;
using AbaxXBRL.Taxonomia.Impl;
using AbaxXBRL.Taxonomia.Linkbases;
using AbaxXBRL.Util;
using AbaxXBRLCore.Common.Constants;
using AbaxXBRLCore.Common.Converter;
using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.Viewer.Application.Dto;
using Spring.Util;
using System.Globalization;
using AbaxXBRLCore.Entities;
using System.Diagnostics;

namespace AbaxXBRLCore.Viewer.Application.Service.Impl
{
    /// <summary>
    /// Implementación del servicio de negocio para realizar las operaciones requeridas por el Visor XBRL.
    /// <author>José Antonio Huizar Moreno</author>
    /// <version>1.0</version>
    /// </summary>
    public class XbrlViewerService : IXbrlViewerService
    {
        #region Miembros de IXbrlViewerService
        /// <summary>
        /// Valores que deben de ser interperetados como true para un campo booleano.
        /// </summary>
        private static string[] _valorSI = new string[] { "si", "true", "yes", "1" };

        public DocumentoInstanciaXbrlDto PreparaDocumentoParaVisor(IDocumentoInstanciaXBRL documentoInstancia,IList<TaxonomiaXbrl> taxonomiasRegistradas)
        {
            if (documentoInstancia == null)
            {
                return null;
            }

            var dto = new DocumentoInstanciaXbrlDto();

            dto.Taxonomia = CrearTaxonomiaAPartirDeDefinicionXbrl(documentoInstancia.Taxonomia);
            dto.HechosPorIdConcepto = new Dictionary<string, IList<string>>();
            dto.HechosPorId = new Dictionary<string, HechoDto>();
            dto.UnidadesPorId = new Dictionary<string, UnidadDto>();
            dto.ContextosPorId = new Dictionary<string, ContextoDto>();
            dto.GruposContextosEquivalentes = documentoInstancia.GruposContextosEquivalentes;
            dto.EsCorrecto = documentoInstancia.ManejadorErrores.PuedeContinuar();
            CrearInformacionDTSInstancia(dto, documentoInstancia);
            CrearInformacionErrores(dto, documentoInstancia);
            foreach (string idConcepto in documentoInstancia.HechosPorIdConcepto.Keys)
            {
                dto.HechosPorIdConcepto.Add(idConcepto, new List<string>());
                foreach (Fact hecho in documentoInstancia.HechosPorIdConcepto[idConcepto])
                {
                    if (hecho.TuplaPadre == null)
                    {
                        dto.HechosPorIdConcepto[idConcepto].Add(hecho.Id);
                        if (!dto.HechosPorId.ContainsKey(hecho.Id))
                        {
                            var hechoGenerado = CrearHechoAPartirDeElementoXbrl(hecho, dto);
                            if (hechoGenerado != null)
                            {
                                dto.HechosPorId.Add(hecho.Id, hechoGenerado);
                            }
                        }
                    }
                }
            }
            DocumentoInstanciaXbrlDtoConverter.AgruparInformacionDocumento(dto);
    
            //Busca algún espacio de nombres en los espacios de nombres registrados

            dto.EspacioNombresPrincipal = ObtenerEspacioNombresPrincipal(documentoInstancia.Taxonomia, taxonomiasRegistradas);



            return dto;
        }

        /// <summary>
        /// Intenta buscar algún espacio de nombres principal de las taxonomías registradas
        /// en la taxonomía enviada como parámetro, si se encuentra, se retorna el valor del espacio de nombres
        /// </summary>
        /// <param name="taxonomia">Taxonomía a inspeccionar</param>
        /// <param name="taxonomiasRegistradas">Lista de taxonomías registradas</param>
        public string ObtenerEspacioNombresPrincipal(ITaxonomiaXBRL taxonomia, IList<TaxonomiaXbrl> taxonomiasRegistradas){
            if (taxonomia != null && taxonomiasRegistradas != null && taxonomiasRegistradas.Count > 0)
            {
                foreach (var esquema in taxonomia.ArchivosEsquema)
                {
                    var taxoCorrespondiente = taxonomiasRegistradas.FirstOrDefault(x=>x.EspacioNombresPrincipal != null && x.EspacioNombresPrincipal.Equals(esquema.Value.TargetNamespace));
                    if (taxoCorrespondiente != null)
                    {
                        return taxoCorrespondiente.EspacioNombresPrincipal;
                    }
                }   
            }
            return null;
        }

        /// <summary>
        /// Convierte los errores reportados en el documento de instancia a su representación en DTO
        /// </summary>
        /// <param name="dto">DTO destino</param>
        /// <param name="documentoInstancia">Información de origen</param>
        private void CrearInformacionErrores(DocumentoInstanciaXbrlDto dto, IDocumentoInstanciaXBRL documentoInstancia)
        {
            if (documentoInstancia.ManejadorErrores != null && (documentoInstancia.ManejadorErrores is ManejadorErroresCargaTaxonomia))
            {
                var manejadorErrores = documentoInstancia.ManejadorErrores as ManejadorErroresCargaTaxonomia;

                if (manejadorErrores.ErroresCarga != null)
                {
                    foreach (var error in manejadorErrores.ErroresCarga)
                    {
                        dto.Errores.Add(new ErrorCargaTaxonomiaDto()
                        {
                            CodigoError = error.CodigoError,
                            Columna = error.Columna,
                            Linea = error.Linea,
                            Mensaje = error.Mensaje,
                            Severidad = error.Severidad == System.Xml.Schema.XmlSeverityType.Error ?
                            ErrorCargaTaxonomiaDto.SEVERIDAD_ERROR :
                            ErrorCargaTaxonomiaDto.SEVERIDAD_ADVERTENCIA,
                            UriArchivo = error.UriArchivo
                        });
                    }
                }

            }
        }


        /// <summary>
        /// Crea la representación de la información de archivos importados en el documento de instancia en sus
        /// respectivos objetos DTO
        /// </summary>
        /// <param name="instanciaDTO">DTO a llenar</param>
        /// <param name="instanciaXbrl">Datos de origen</param>
        private void CrearInformacionDTSInstancia(DocumentoInstanciaXbrlDto instanciaDTO, IDocumentoInstanciaXBRL instanciaXbrl)
        {
            string namespacePrincipal = null;
            foreach (var archivoImportado in instanciaXbrl.ObtenerArchivosImportados())
            {
                var dtsDto = new DtsDocumentoInstanciaDto()
                                 {
                                     Tipo = archivoImportado.TipoArchivo,
                                     HRef = archivoImportado.HRef,
                                     Role = archivoImportado.Role,
                                     RoleUri = archivoImportado.RoleUri
                                 };
                instanciaDTO.DtsDocumentoInstancia.Add(dtsDto);
            }
        }

        /// <summary>
        /// Crea un objeto <code>TaxonomiaDto</code> a partir de su declaráció original de una Taxonomía XBRL utilizada para la creación de un documento instancia Xbrl.
        /// </summary>
        /// <param name="taxonomiaXbrl">La taxonomía XBRL a procesar</param>
        /// <returns>un DTO el cual representa la estructura declarada para el reporte por la taxonomía XBRL.</returns>
        public TaxonomiaDto CrearTaxonomiaAPartirDeDefinicionXbrl(ITaxonomiaXBRL taxonomiaXbrl)
        {
            if (taxonomiaXbrl == null) return null;
            var taxonomia = new TaxonomiaDto
                                {
                                    RolesPresentacion = new List<RolDto<EstructuraFormatoDto>>(),
                                    RolesCalculo = new List<RolCalculoDTO>(),
                                    RolesDefinicion = new List<RolDto<EstructuraFormatoDto>>(),
                                    ConceptosPorId = new Dictionary<string, ConceptoDto>(),
                                    TiposDeDatoXbrlPorNombre = new Dictionary<string, TipoDatoXbrlDto>(),
                                    IdiomasTaxonomia = new Dictionary<string, string>(),
                                    EtiquetasRol = new Dictionary<string, IDictionary<string, EtiquetaDto>>(),
                                    ListaHipercubos = new Dictionary<string,IList<HipercuboDto>>()
                                };
            
            foreach (var esquema in taxonomiaXbrl.ArchivosEsquema.Values)
            {
                foreach (XmlSchemaType schemaType in esquema.SchemaTypes.Values)
                {
                    if (!taxonomia.TiposDeDatoXbrlPorNombre.ContainsKey(schemaType.QualifiedName.ToString()))
                    {
                        var tipoDato = new TipoDatoXbrlDto();
                        tipoDato.EspacioNombres = schemaType.QualifiedName.Namespace;
                        tipoDato.Nombre = schemaType.QualifiedName.Name;

                        tipoDato.EsTipoDatoNumerico = schemaType.TypeCode == XmlTypeCode.Decimal ||
                                                      schemaType.TypeCode == XmlTypeCode.Double ||
                                                      schemaType.TypeCode == XmlTypeCode.Float ||
                                                      schemaType.TypeCode == XmlTypeCode.Int ||
                                                      schemaType.TypeCode == XmlTypeCode.Integer ||
                                                      schemaType.TypeCode == XmlTypeCode.Long ||
                                                      schemaType.TypeCode == XmlTypeCode.NegativeInteger ||
                                                      schemaType.TypeCode == XmlTypeCode.NonNegativeInteger ||
                                                      schemaType.TypeCode == XmlTypeCode.NonPositiveInteger ||
                                                      schemaType.TypeCode == XmlTypeCode.PositiveInteger;
                        tipoDato.EsTipoDatoFraccion = schemaType.QualifiedName.Name.Equals(TiposDatoXBRL.FractionItemType);
                        tipoDato.EsTipoDatoMonetario = schemaType.QualifiedName.Name.Equals(TiposDatoXBRL.MonetaryItemType);
                        tipoDato.EsTipoDatoAcciones = schemaType.QualifiedName.Name.Equals(TiposDatoXBRL.SharesItemType);
                        tipoDato.EsTipoDatoPuro = schemaType.QualifiedName.Name.Equals(TiposDatoXBRL.PureItemType);
                        tipoDato.EsTipoDatoToken = schemaType.TypeCode == XmlTypeCode.Token;
                        tipoDato.EsTipoDatoBoolean = schemaType.TypeCode == XmlTypeCode.Boolean;


                        if (schemaType.TypeCode == XmlTypeCode.Token && schemaType is XmlSchemaComplexType &&
                            (schemaType as XmlSchemaComplexType).ContentModel != null &&
                            (schemaType as XmlSchemaComplexType).ContentModel.Content is XmlSchemaSimpleContentRestriction)
                        {
                            tipoDato.ListaValoresToken = new List<string>();
                            var contentModel =
                                ((schemaType as XmlSchemaComplexType).ContentModel.Content as XmlSchemaSimpleContentRestriction);
                            if (contentModel.Facets != null)
                            {
                                foreach (XmlSchemaObject facet in contentModel.Facets)
                                {
                                    if (facet is XmlSchemaEnumerationFacet)
                                    {
                                        tipoDato.ListaValoresToken.Add((facet as XmlSchemaEnumerationFacet).Value);
                                    }
                                    else if(facet is XmlSchemaPatternFacet) {
                                        tipoDato.Pattern = (facet as XmlSchemaPatternFacet).Value;
                                    }
                                    
                                }
                            }

                        }
                        taxonomia.TiposDeDatoXbrlPorNombre.Add(schemaType.QualifiedName.ToString(), tipoDato);
                    }
                }
            }


            foreach (string rolTypeKey in taxonomiaXbrl.RolesTaxonomia.Keys)
            {
                RoleType roleType = taxonomiaXbrl.RolesTaxonomia[rolTypeKey];

                if (taxonomiaXbrl.ConjuntoArbolesLinkbase[rolTypeKey].ContainsKey(LinkbasePresentacion.RolePresentacionLinkbaseRef))
                {
                    var rol = new RolDto<EstructuraFormatoDto> { Nombre = roleType.Definicion, Uri = roleType.RolURI.ToString() };

                    ArbolLinkbase linkbasePresentacion = taxonomiaXbrl.ConjuntoArbolesLinkbase[rolTypeKey][LinkbasePresentacion.RolePresentacionLinkbaseRef];

                    if (linkbasePresentacion.NodoRaiz.Elemento is RoleType)
                    {
                        rol.Estructuras = new List<EstructuraFormatoDto>();
                        if (linkbasePresentacion.NodoRaiz.ConectoresSalientes != null)
                        {
                            foreach (ConectorLinkbase conector in linkbasePresentacion.NodoRaiz.ConectoresSalientes)
                            {
                                bool esDimensional = false;
                                rol.Estructuras.Add(ProcesarNodoArbol(conector.NodoSiguiente, (ArcoPresentacion)conector.Arco, taxonomia.ConceptosPorId, out esDimensional));
                                if (esDimensional)
                                {
                                    rol.EsDimensional = true;
                                }
                            }
                        }
                    }

                    taxonomia.RolesPresentacion.Add(rol);
                }

                if (taxonomiaXbrl.ConjuntoArbolesLinkbase[rolTypeKey].ContainsKey(LinkbaseCalculo.RoleCalculoLinkbaseRef))
                {
                    RolCalculoDTO rolCalculo = new RolCalculoDTO();

                    rolCalculo.Nombre = roleType.Definicion;
                    rolCalculo.Uri = roleType.RolURI.ToString();

                    ArbolLinkbase linkbaseCalculo = taxonomiaXbrl.ConjuntoArbolesLinkbase[rolTypeKey][LinkbaseCalculo.RoleCalculoLinkbaseRef];

                    IList<Arco> arcosCalculo = null;

                    foreach (var linkbase in taxonomiaXbrl.RolesTaxonomia[rolTypeKey].Linkbases.Values)
                    {
                        if (linkbase is LinkbaseCalculo)
                        {
                            arcosCalculo = linkbase.ArcosFinales;
                        }
                    }

                    if (arcosCalculo != null)
                    {
                        IDictionary<string, IList<SumandoCalculoDto>> sumatoriasAValidar = new Dictionary<string, IList<SumandoCalculoDto>>();
                        foreach (ArcoCalculo arco in arcosCalculo.Where(arc => arc is ArcoCalculo))
                        {
                            if (ArcoCalculo.SummationItemRole.Equals(arco.ArcoRol))
                            {
                                foreach (ElementoLocalizable desde in arco.ElementoDesde)
                                {
                                    if (!sumatoriasAValidar.ContainsKey(desde.Destino.Id))
                                    {
                                        sumatoriasAValidar.Add(desde.Destino.Id, new List<SumandoCalculoDto>());
                                    }
                                    foreach (ElementoLocalizable elementoHacia in arco.ElementoHacia)
                                    {
                                        sumatoriasAValidar[desde.Destino.Id].Add(new SumandoCalculoDto
                                        {
                                            IdConcepto = elementoHacia.Destino.Id,
                                            Peso = arco.Peso
                                        });
                                    }
                                }
                            }
                        }
                        rolCalculo.OperacionesCalculo = sumatoriasAValidar;
                        taxonomia.RolesCalculo.Add(rolCalculo);
                    }
                }
                if (taxonomiaXbrl.ConjuntoArbolesLinkbase[rolTypeKey].ContainsKey(LinkbaseDefinicion.RolDefitionLinkbaseRef))
                {
                    var rol = new RolDto<EstructuraFormatoDto> { Nombre = roleType.Definicion, Uri = roleType.RolURI.ToString() };

                    ArbolLinkbase linkbase = taxonomiaXbrl.ConjuntoArbolesLinkbase[rolTypeKey][LinkbaseDefinicion.RolDefitionLinkbaseRef];

                    if (linkbase.NodoRaiz.Elemento is RoleType)
                    {
                        rol.Estructuras = new List<EstructuraFormatoDto>();
                        if (linkbase.NodoRaiz.ConectoresSalientes != null)
                        {
                            foreach (ConectorLinkbase conector in linkbase.NodoRaiz.ConectoresSalientes)
                            {
                                //Omitir estructuras de arcos dimension-default, estas se colocan en otro inventario diferente
                                rol.Estructuras.Add(ProcesarNodoArbol(conector.NodoSiguiente, (ArcoDefinicion)conector.Arco, taxonomia.ConceptosPorId));
                            }
                        }
                    }
                    taxonomia.RolesDefinicion.Add(rol);
                }

                
            }


            foreach (string rolTypeKey in taxonomiaXbrl.RolesTaxonomia.Keys)
            {
                RoleType roleType = taxonomiaXbrl.RolesTaxonomia[rolTypeKey];

                if (taxonomiaXbrl.ConjuntoArbolesLinkbase[rolTypeKey].ContainsKey(LinkbaseEtiqueta.RoleLabelLinkbaseRef))
                {
                    ArbolLinkbase linkbaseEtiqueta = taxonomiaXbrl.ConjuntoArbolesLinkbase[rolTypeKey][LinkbaseEtiqueta.RoleLabelLinkbaseRef];

                    if (linkbaseEtiqueta.NodoRaiz.Elemento is RoleType)
                    {
                        foreach (ConectorLinkbase conector in linkbaseEtiqueta.NodoRaiz.ConectoresSalientes)
                        {
                            ProcesarNodoArbol(conector.NodoSiguiente, (ArcoEtiqueta)conector.Arco, taxonomia.ConceptosPorId, taxonomia.IdiomasTaxonomia);
                        }
                    }
                }

                if (taxonomiaXbrl.ConjuntoArbolesLinkbase[rolTypeKey].ContainsKey(LinkbaseReferencia.RoleReferenceLinkbaseRef))
                {
                    ArbolLinkbase linkbaseReferencia = taxonomiaXbrl.ConjuntoArbolesLinkbase[rolTypeKey][LinkbaseReferencia.RoleReferenceLinkbaseRef];

                    if (linkbaseReferencia.NodoRaiz.Elemento is RoleType)
                    {
                        foreach (ConectorLinkbase conector in linkbaseReferencia.NodoRaiz.ConectoresSalientes)
                        {
                            ProcesarNodoArbol(conector.NodoSiguiente, (ArcoReferencia)conector.Arco, taxonomia.ConceptosPorId);
                        }
                    }
                }
            }

            //Se obtienen las etiquetas de los roles
            if (taxonomiaXbrl.RolesTaxonomia.ContainsKey(EspacioNombresConstantes.Standard2008LinkRoleType))
            {
                if (taxonomiaXbrl.ConjuntoArbolesLinkbase[EspacioNombresConstantes.Standard2008LinkRoleType].ContainsKey(LinkbaseEtiqueta.RolUnspecifiedLinkbaseRef))
                {
                    ArbolLinkbase linkbaseEtiquetaRol = taxonomiaXbrl.ConjuntoArbolesLinkbase[EspacioNombresConstantes.Standard2008LinkRoleType][LinkbaseReferencia.RolUnspecifiedLinkbaseRef];

                    foreach (NodoLinkbase nodeLinkBase in linkbaseEtiquetaRol.IndicePorId.Values)
                    {
                        if (nodeLinkBase.Elemento is RoleType)
                        {
                            ProcesarNodoArbol(nodeLinkBase, taxonomia.EtiquetasRol);
                        }
                    }
                }
            }



            //Dimension defaults
            taxonomia.DimensionDefaults = new Dictionary<string, string>();
            foreach (var dimDefault in taxonomiaXbrl.ObtenerDimensionesDefaultsGlobales())
            {
                taxonomia.DimensionDefaults.Add(dimDefault.Key.Id, dimDefault.Value.Id);
            }

            taxonomia.RolesPresentacion = taxonomia.RolesPresentacion.OrderBy(x => x.Nombre).ToList();

            //Declaracion de hipercubos de la taxonomía
            if (taxonomiaXbrl.ListaHipercubos != null)
            {
                foreach (var keyValHipercubo in taxonomiaXbrl.ListaHipercubos)
                {
                    foreach (var hipercubo in keyValHipercubo.Value)
                    {
                        var hipercuboDto = new HipercuboDto()
                                           {
                                               IdConceptoHipercubo = hipercubo.ElementoHipercubo.Elemento.Id,
                                               IdConceptoDeclaracionHipercubo = hipercubo.DeclaracionElementoPrimario.Elemento.Id,
                                               Cerrado = hipercubo.Cerrado,
                                               ArcRoleDeclaracion = hipercubo.ArcRoleDeclaracion,
                                               Rol = hipercubo.Rol.RolURI.ToString(),
                                               TipoElementoContexto = hipercubo.ElementoContexto.Valor,
                                               Dimensiones = new List<string>(),
                                               ElementosPrimarios = new List<string>(),
                                               EstructuraDimension = new Dictionary<string,IList<EstructuraFormatoDto>>()
                                           };
                        foreach (var dimensionXbrl in hipercubo.ListaDimensiones)
                        {
                            hipercuboDto.Dimensiones.Add(dimensionXbrl.ConceptoDimension.Id);
                            foreach (var miembro in dimensionXbrl.MiembrosDominio)
                            {
                                if (taxonomia.ConceptosPorId.ContainsKey(miembro.Id)) {
                                    taxonomia.ConceptosPorId[miembro.Id].EsMiembroDimension = true;
                                }
                            }
                            
                        }
                        foreach (var elementoPrimarioXbrl in hipercubo.ObtenerElementosPrimarios())
                        {
                            hipercuboDto.ElementosPrimarios.Add(elementoPrimarioXbrl.Id);
                        }
                        AgregarEstructuraDimensionesAHipercubo(hipercuboDto,taxonomia);
                        if (!taxonomia.ListaHipercubos.ContainsKey(hipercuboDto.Rol))
                        {
                            taxonomia.ListaHipercubos.Add(hipercuboDto.Rol, new List<HipercuboDto>());
                        }
                        taxonomia.ListaHipercubos[hipercuboDto.Rol].Add(hipercuboDto);
                    }
                }
            }

            //Complementar la información de los conceptos token
            
            foreach(var concepto in taxonomia.ConceptosPorId.Values){
                if (concepto.EsTipoDatoToken && taxonomia.TiposDeDatoXbrlPorNombre.ContainsKey(concepto.TipoDato)) {
                    concepto.ListaValoresToken = taxonomia.TiposDeDatoXbrlPorNombre[concepto.TipoDato].ListaValoresToken;
                }
            }

            var esquemaPrincipal = taxonomiaXbrl.ObtenerEsquemaPrincipal();

            if(esquemaPrincipal!=null){
                taxonomia.EspacioDeNombres = esquemaPrincipal.TargetNamespace;
                taxonomia.EspacioNombresPrincipal = esquemaPrincipal.TargetNamespace;
                foreach (var qName in esquemaPrincipal.Namespaces.ToArray())
                {
                    if (qName.Namespace.Equals(esquemaPrincipal.TargetNamespace))
                    {
                        taxonomia.PrefijoTaxonomia = qName.Name;
                        break;
                    }
                }
            }
            return taxonomia;
        }
        /// <summary>
        /// Agrega la estructura de cada dimensión al hipercubo enviado como parámetro
        /// </summary>
        /// <param name="hipercuboDto"></param>
        /// <param name="taxonomiaDto"></param>
        private void AgregarEstructuraDimensionesAHipercubo(HipercuboDto hipercuboDto, TaxonomiaDto taxonomiaDto)
        {
            
            foreach(var dimension in hipercuboDto.Dimensiones){
                //Buscar la dimension en la declaración del hipercubo
                var rol = taxonomiaDto.RolesDefinicion.FirstOrDefault(x=>x.Uri.Equals(hipercuboDto.Rol));
                if (rol != null)
                {
                    hipercuboDto.EstructuraDimension.Add(dimension, EncontrarDominioHipercubo(rol.Estructuras, dimension,hipercuboDto,null));
                }
            }
        }
        /// <summary>
        /// Encuentra la lista estructurada de dimensiones en el rol de definición
        /// </summary>
        /// <param name="rol">Rol a buscar</param>
        /// <param name="dimension">dimensión a buscar</param>
        /// <returns></returns>
        private IList<EstructuraFormatoDto> EncontrarDominioHipercubo(IList<EstructuraFormatoDto> estructuras, string IdDimension, HipercuboDto hipercuboDto,EstructuraFormatoDto padre)
        {
            foreach(var estructura in estructuras){
                if (IdDimension.Equals(estructura.IdConcepto) && padre  != null && padre.IdConcepto.Equals(hipercuboDto.IdConceptoHipercubo))
                {
                    return estructura.SubEstructuras;
                }
                if (estructura.SubEstructuras != null)
                {
                    var subestructuras = EncontrarDominioHipercubo(estructura.SubEstructuras,IdDimension,hipercuboDto,estructura);
                    if (subestructuras != null)
                    {
                        return subestructuras;
                    }
                }
            }
            return null;
        }

        /// <summary>
        /// Procesa de manera recursiva la estructura del árbol para preparar la estructura requerida por el visor XBRL
        /// </summary>
        /// <param name="nodo">El nodo del árbol a procesar</param>
        /// <param name="arco">El arco que conecta a este nodo con su antecesor</param>
        /// <param name="conceptosPorId">El mapa que contiene la definición de los conceptos indexada por su identificador único.</param>
        /// <param name="esDimensional">Parámetro de salida que indica si el fragmento del árbol procesado es dimensional</param>
        /// <returns>La estructura del segmento de árbol que ha sido procesado</returns>
        private EstructuraFormatoDto ProcesarNodoArbol(NodoLinkbase nodo, ArcoPresentacion arco, IDictionary<string, ConceptoDto> conceptosPorId, out bool esDimensional)
        {
            EstructuraFormatoDto estructura = new EstructuraFormatoDto();
            ConceptoDto concepto = null;
            if (conceptosPorId.ContainsKey(nodo.Elemento.Id))
            {
                concepto = conceptosPorId[nodo.Elemento.Id];
            }
            else {
                concepto = CrearConceptoAPartirDeElementoXbrl(nodo.Elemento);
            }
            esDimensional = concepto.EsHipercubo;

            if (arco != null)
            {
                estructura.RolEtiquetaPreferido = StringUtils.IsNullOrEmpty(arco.EtiquetaPreferida) ? null : arco.EtiquetaPreferida;
            }
            if (!conceptosPorId.ContainsKey(concepto.Id))
            {
                conceptosPorId.Add(concepto.Id, concepto);
            }
            estructura.IdConcepto = concepto.Id;

            if (nodo.ConectoresSalientes != null && nodo.ConectoresSalientes.Count > 0)
            {
                estructura.SubEstructuras = new List<EstructuraFormatoDto>();
                foreach (ConectorLinkbase conector in nodo.ConectoresSalientes)
                {
                    bool esSubEstructuraDimensional = false;
                    estructura.SubEstructuras.Add(ProcesarNodoArbol(conector.NodoSiguiente, (ArcoPresentacion)conector.Arco, conceptosPorId, out esSubEstructuraDimensional));
                    esDimensional = esSubEstructuraDimensional || esDimensional;
                }
            }

            return estructura;
        }

        /// <summary>
        /// Procesa de manera recursiva la estructura del árbol para preparar la estructura requerida por el visor XBRL
        /// </summary>
        /// <param name="nodo">El nodo del árbol a procesar</param>
        /// <param name="arco">El arco que conecta a este nodo con su antecesor</param>
        /// <param name="conceptosPorId">El mapa que contiene la definición de los conceptos indexada por su identificador único.</param>
        /// <param name="esDimensional">Parámetro de salida que indica si el fragmento del árbol procesado es dimensional</param>
        /// <returns>La estructura del segmento de árbol que ha sido procesado</returns>
        private EstructuraFormatoDto ProcesarNodoArbol(NodoLinkbase nodo, ArcoDefinicion arco, IDictionary<string, ConceptoDto> conceptosPorId)
        {
            EstructuraFormatoDto estructura = new EstructuraFormatoDto();

            ConceptoDto concepto = null;

            if (!conceptosPorId.ContainsKey(nodo.Elemento.Id))
            {
                concepto = CrearConceptoAPartirDeElementoXbrl(nodo.Elemento);
                conceptosPorId.Add(concepto.Id, concepto);
            }
            else
            {
                concepto = conceptosPorId[nodo.Elemento.Id];
            }
            estructura.IdConcepto = concepto.Id;

            if (nodo.ConectoresSalientes != null && nodo.ConectoresSalientes.Count > 0)
            {
                estructura.SubEstructuras = new List<EstructuraFormatoDto>();
                foreach (ConectorLinkbase conector in nodo.ConectoresSalientes)
                {
                    if (conector.Arco == null || !ArcoDefinicion.DimensionDefaultRole.Equals(conector.Arco.ArcoRol))
                    {
                        //Omitir relaciones dimension default en este arbol, esas se encuentran en un listado independiente
                        estructura.SubEstructuras.Add(ProcesarNodoArbol(conector.NodoSiguiente, (ArcoDefinicion)conector.Arco, conceptosPorId));
                    }
                }
            }

            return estructura;
        }

        /// <summary>
        /// Procesa de manera recursiva la estructura del árbol para preparar la estructura requerida por el visor XBRL
        /// </summary>
        /// <param name="nodo">El nodo del árbol a procesar</param>
        /// <param name="arco">El arco que conecta a este nodo con su antecesor</param>
        /// <param name="idiomasTaxonomia">Referencia de los idiomas que puede tener la taxonomia</param>
        private void ProcesarNodoArbol(NodoLinkbase nodo, ArcoEtiqueta arco, IDictionary<string, ConceptoDto> conceptosPorId, IDictionary<string, string> idiomasTaxonomia)
        {
            string idConcepto = nodo.Elemento.Id;
            ConceptoDto concepto = null;
            if (conceptosPorId.ContainsKey(nodo.Elemento.Id))
            {
                concepto = conceptosPorId[nodo.Elemento.Id];
            }
            if (concepto != null && nodo.Elemento is Concept && nodo.ConectoresSalientes != null && nodo.ConectoresSalientes.Count > 0)
            {
                foreach (ConectorLinkbase conector in nodo.ConectoresSalientes)
                {
                    if (conector.NodoSiguiente.Elemento is Etiqueta)
                    {
                        Etiqueta etiqueta = (Etiqueta)conector.NodoSiguiente.Elemento;

                        if (concepto.Etiquetas == null)
                        {
                            concepto.Etiquetas = new Dictionary<string, IDictionary<string, EtiquetaDto>>();
                        }
                        if (!concepto.Etiquetas.ContainsKey(etiqueta.Lenguaje))
                        {
                            concepto.Etiquetas.Add(etiqueta.Lenguaje, new Dictionary<string, EtiquetaDto>());
                        }
                        if (!concepto.Etiquetas[etiqueta.Lenguaje].ContainsKey(etiqueta.Rol))
                        {
                            concepto.Etiquetas[etiqueta.Lenguaje].Add(etiqueta.Rol, CrearEtiquetaAPartirDeElementoXbrl(etiqueta));
                            if (!idiomasTaxonomia.ContainsKey(etiqueta.Lenguaje))
                            {

                                CultureInfo cinfo = new CultureInfo(etiqueta.Lenguaje);
                                idiomasTaxonomia.Add(etiqueta.Lenguaje, cinfo.DisplayName);
                            }
                        }
                    }
                }
            }
        }

        /// <summary>
        /// Procesa de manera recursiva la estructura del árbol para preparar la estructura requerida por el visor XBRL
        /// </summary>
        /// <param name="nodo">El nodo del árbol a procesar</param>
        /// <param name="etiquetasRol">Las diferentes etiquetas asociadas a este concepto organizadas por idioma y posteriormente por rol</param>
        private void ProcesarNodoArbol(NodoLinkbase nodo, IDictionary<string, IDictionary<string, EtiquetaDto>> etiquetasRol)
        {
            foreach (ConectorLinkbase conector in nodo.ConectoresSalientes)
            {
                if (conector.NodoSiguiente.Elemento is Recurso)
                {
                    Recurso recursoRol = (Recurso)conector.NodoSiguiente.Elemento;

                    if (conector.Arco.ArcoRol.Equals(Etiqueta.RolEtiquetaGenerica))
                    {
                        if (!etiquetasRol.ContainsKey(recursoRol.Lenguaje))
                        {
                            etiquetasRol.Add(recursoRol.Lenguaje, new Dictionary<string, EtiquetaDto>());
                        }
                        if (!etiquetasRol[recursoRol.Lenguaje].ContainsKey(((RoleType)nodo.Elemento).RolURI.ToString()))
                        {
                            etiquetasRol[recursoRol.Lenguaje].Add(((RoleType)nodo.Elemento).RolURI.ToString(), CrearEtiquetaAPartirDeElementoXbrl(recursoRol));
                        }
                    }
                }
            }
        }


        /// <summary>
        /// Procesa de manera recursiva la estructura del árbol para preparar la estructura requerida por el visor XBRL
        /// </summary>
        /// <param name="nodo">El nodo del árbol a procesar</param>
        /// <param name="arco">El arco que conecta a este nodo con su antecesor</param>
        private void ProcesarNodoArbol(NodoLinkbase nodo, ArcoReferencia arco, IDictionary<string, ConceptoDto> conceptosPorId)
        {
            string idConcepto = nodo.Elemento.Id;
            ConceptoDto concepto = null;
            if (conceptosPorId.ContainsKey(nodo.Elemento.Id))
            {
                concepto = conceptosPorId[nodo.Elemento.Id];
            }
            if (concepto != null && nodo.Elemento is Concept && nodo.ConectoresSalientes != null && nodo.ConectoresSalientes.Count > 0)
            {
                foreach (ConectorLinkbase conector in nodo.ConectoresSalientes)
                {
                    if (conector.NodoSiguiente.Elemento is Referencia)
                    {
                        Referencia referencia = (Referencia)conector.NodoSiguiente.Elemento;

                        if (concepto.Referencias == null)
                        {
                            concepto.Referencias = new List<ReferenciaDto>();
                        }
                        concepto.Referencias.Add(CrearReferenciaAPartirDeElementoXbrl(referencia));
                    }
                }
            }
        }

        /// <summary>
        /// Crea un objeto <code>ReferenciaDto</code> a partir de una referencia XBRL de la taxonomía.
        /// </summary>
        /// <param name="referencia">La referencia XBRL a tomar como referencia.</param>
        /// <returns>El DTO que reprensenta la referencia de la taxonomía.</returns>
        private ReferenciaDto CrearReferenciaAPartirDeElementoXbrl(Referencia referencia)
        {
            ReferenciaDto referenciaDto = new ReferenciaDto();

            referenciaDto.Rol = referencia.Rol;
            referenciaDto.Partes = new List<ParteReferenciaDto>();

            foreach (ReferenciaParte referenciaParte in referencia.PartesReferencia)
            {

                ParteReferenciaDto parteReferencia = new ParteReferenciaDto();

                parteReferencia.EspacioNombres = referenciaParte.EspacioNombres;
                parteReferencia.Nombre = referenciaParte.NombreLocal;
                parteReferencia.Valor = referenciaParte.Valor;

                referenciaDto.Partes.Add(parteReferencia);
            }

            return referenciaDto;
        }

        /// <summary>
        /// Crea un objeto <code>EtiquetaDto</code> a partir de una etiqueta XBRL de la taxonomía.
        /// </summary>
        /// <param name="etiqueta">La etiqueta XBRL a tomar como referencia.</param>
        /// <returns>El DTO que representa la etiqueta de la taxonomía.</returns>
        private EtiquetaDto CrearEtiquetaAPartirDeElementoXbrl(Etiqueta etiqueta)
        {
            EtiquetaDto etiquetaDto = new EtiquetaDto();

            etiquetaDto.Rol = etiqueta.Rol;
            etiquetaDto.Idioma = etiqueta.Lenguaje;
            etiquetaDto.Valor = etiqueta.Valor;

            return etiquetaDto;
        }

        /// <summary>
        /// Crea un objeto <code>EtiquetaDto</code> a partir de una etiqueta XBRL de la taxonomía.
        /// </summary>
        /// <param name="recurso">El recurso XBRL a tomar como referencia.</param>
        /// <returns>El DTO que representa la etiqueta de la taxonomía.</returns>
        private EtiquetaDto CrearEtiquetaAPartirDeElementoXbrl(Recurso recurso)
        {
            EtiquetaDto etiquetaDto = new EtiquetaDto();

            etiquetaDto.Rol = recurso.Rol;
            etiquetaDto.Idioma = recurso.Lenguaje;
            etiquetaDto.Valor = recurso.Valor;

            return etiquetaDto;
        }


        /// <summary>
        /// Crea un concepto a partir de un elemento XBRL de la taxonomía.
        /// </summary>
        /// <param name="elemento">el elemento a procesar</param>
        /// <returns>el objeto de tipo ConceptoDto creado a partir del elemento XBRL de la taxonomía.</returns>
        private ConceptoDto CrearConceptoAPartirDeElementoXbrl(ElementoXBRL elemento)
        {
            ConceptoDto concepto = new ConceptoDto();

            concepto.Id = elemento.Id;
            concepto.Nombre = elemento.Elemento.Name;
            concepto.EspacioNombres = elemento.Elemento.QualifiedName.Namespace;
            concepto.EsNillable = elemento.Elemento.IsNillable;
            concepto.EsAbstracto = elemento.Elemento.IsAbstract;
            
            if (elemento is ConceptItem)
            {
                ConceptItem conceptItem = (ConceptItem)elemento;
                concepto.Tipo = conceptItem.Tipo;
                concepto.TipoDatoXbrl = ValidarTipoDeDatoParaVisor(conceptItem.TipoDatoXbrl);
                concepto.TipoDato = conceptItem.TipoDato != null ? conceptItem.TipoDato.ToString() : concepto.TipoDatoXbrl;
                concepto.TipoPeriodo = conceptItem.TipoPeriodo.Name;
                concepto.EsHipercubo = elemento is ConceptHypercubeItem;
                concepto.EsDimension = elemento is ConceptDimensionItem;
                concepto.EsTipoDatoNumerico = conceptItem.EsTipoDatoNumerico;
                concepto.EsTipoDatoToken = conceptItem.EsTipoDatoToken;
                concepto.EsTipoDatoFraccion = conceptItem.EsTipoDatoFraccion;
                concepto.AtributosAdicionales = conceptItem.AtributosAdicionales;
                if (conceptItem.Balance != null)
                {
                    if (conceptItem.IsCreditBalance())
                    {
                        concepto.Balance = ConceptoDto.CreditBalanceValue;
                    }
                    else
                    {
                        concepto.Balance = ConceptoDto.DebitBalanceValue;
                    }

                }
                
            }
            else if (elemento is ConceptTuple)
            {
                concepto.Conceptos = new List<ConceptoDto>();
                ConceptTuple conceptTuple = (ConceptTuple)elemento;
                if (conceptTuple.Elementos != null)
                {
                    foreach (var subElemento in conceptTuple.Elementos)
                    {
                        concepto.Conceptos.Add(CrearConceptoAPartirDeElementoXbrl(subElemento));
                    }
                }
                
            }

            return concepto;
        }

        /// <summary>
        /// Crea un elemento <code>HechoDto</code> a partir de un elemento Hecho dentro de un documento instancia XBRL.
        /// </summary>
        /// <param name="elemento">El elemento a procesar</param>
        /// <param name="documentoDto">Documento a llenar</param>
        /// <returns>el objeto de tipo HechoDto el cual representa el hecho contenido en el documento instancia.</returns>
        private HechoDto CrearHechoAPartirDeElementoXbrl(Fact elemento, DocumentoInstanciaXbrlDto documentoDto)
        {
            var hecho = new HechoDto
                            {
                                IdConcepto = elemento.Concepto.Id,
                                NombreConcepto = (elemento.Concepto as Concept).Elemento.QualifiedName.Name,
                                EspacioNombres = (elemento.Concepto as Concept).Elemento.QualifiedName.Namespace,
                                Tipo = elemento.Tipo,
                                Id = elemento.Id,
                                CambioValorComparador = false,
                            };

            if (!documentoDto.Taxonomia.ConceptosPorId.ContainsKey(elemento.Concepto.Id)) 
            {
                LogUtil.Error("El concepto \"" + elemento.Concepto.Id + "\" expresado en el documento de instancia no existe en la taxonomía.");
                return null;
            }
            ConceptoDto concepto = documentoDto.Taxonomia.ConceptosPorId[elemento.Concepto.Id];
            if (elemento.DuplicadoCon != null && elemento.DuplicadoCon.Count > 0)
            {
                hecho.DuplicadoCon = new List<string>();
                foreach (var fact in elemento.DuplicadoCon)
                {
                    hecho.DuplicadoCon.Add(fact.Id);
                }
            }

            if (elemento.IsNilValue)
            {
                hecho.EsValorNil = elemento.IsNilValue;
            }

            if (elemento.Tipo == Concept.Item)
            {
                hecho.EsTupla = false;
                hecho.TipoDato = (elemento.Concepto as ConceptItem).TipoDato.ToString();
                hecho.TipoDatoXbrl = (elemento.Concepto as ConceptItem).TipoDatoXbrl.ToString();
                if (elemento is FactFractionItem)
                {
                    var fact = (FactFractionItem)elemento;
                    hecho.EsFraccion = true;
                    hecho.IdContexto = CrearContextoAPartirDeElementoXbrl(fact.Contexto, documentoDto.ContextosPorId).Id;
                    hecho.Valor = fact.Valor;
                    hecho.ValorNumerador = fact.Numerador;
                    hecho.ValorDenominador = fact.Denominador;
                    hecho.IdUnidad = CrearUnidadAPartirDeElementoXbrl(fact.Unidad, documentoDto.UnidadesPorId).Id;
                    hecho.NotasAlPie = CrearNotasAlPieAPartirDeElementoXbrl(fact.NotasAlPie);
                }
                else if (elemento is FactNumericItem)
                {
                    var fact = (FactNumericItem)elemento;

                    fact.InferirPrecisionYDecimales();
                    hecho.EsNumerico = true;
                    hecho.IdContexto = CrearContextoAPartirDeElementoXbrl(fact.Contexto, documentoDto.ContextosPorId).Id;
                    hecho.Valor = fact.Valor;
                    hecho.ValorNumerico = fact.ValorNumerico;
                    hecho.IdUnidad = CrearUnidadAPartirDeElementoXbrl(fact.Unidad, documentoDto.UnidadesPorId).Id;
                    hecho.NotasAlPie = CrearNotasAlPieAPartirDeElementoXbrl(fact.NotasAlPie);
                    if (fact.EsDecimalesEstablecidos())
                    {
                        hecho.Decimales = fact.Decimales;
                        hecho.EsDecimalesInfinitos = fact.EsDecimalesInfinitos;
                    }
                    else 
                    {
                        hecho.Precision = fact.Precision;
                        hecho.EsPrecisionInfinita = fact.EsPrecisionInfinita;
                    }
                    
                }
                else if (elemento is FactItem)
                {
                    var fact = (FactItem)elemento;
                    hecho.NoEsNumerico = true;
                    hecho.IdContexto = CrearContextoAPartirDeElementoXbrl(fact.Contexto, documentoDto.ContextosPorId).Id;
                    hecho.Valor = fact.Valor;
                    if (concepto.TipoDatoXbrl.Contains(TiposDatoXBRL.BooleanItemType)) { 
                        //convertir 1 o 0 a true o false
                        if (CommonConstants.CADENAS_VERDADERAS.Contains(hecho.Valor))
                        {
                            hecho.Valor = Boolean.TrueString.ToLower();
                        }
                        else if (CommonConstants.CADENAS_FALSE.Contains(hecho.Valor))
                        {
                            hecho.Valor = Boolean.FalseString.ToLower();
                        }
                    }
                    hecho.NotasAlPie = CrearNotasAlPieAPartirDeElementoXbrl(fact.NotasAlPie);
                }

               

            }
            else if (elemento.Tipo == Concept.Tuple)
            {
                var fact = (FactTuple)elemento;
                hecho.EsTupla = true;
                hecho.NoEsNumerico = true;

                if (fact.Hechos != null && fact.Hechos.Count > 0)
                {
                    hecho.Hechos = new List<string>();
                    foreach (var hechoTupla in fact.Hechos)
                    {
                        var hechoNuevo = CrearHechoAPartirDeElementoXbrl(hechoTupla, documentoDto);
                        hechoNuevo.TuplaPadre = hecho;
                        hecho.Hechos.Add(hechoNuevo.Id);
                        if (!documentoDto.HechosPorIdConcepto.ContainsKey(hechoNuevo.IdConcepto))
                        {
                            documentoDto.HechosPorIdConcepto.Add(hechoNuevo.IdConcepto, new List<string>());
                        }
                        if (!documentoDto.HechosPorId.ContainsKey(hechoNuevo.Id))
                        {
                            documentoDto.HechosPorId.Add(hechoNuevo.Id, hechoNuevo);
                        }
                        documentoDto.HechosPorIdConcepto[hechoNuevo.IdConcepto].Add(hechoNuevo.Id);
                    }
                }
            }

            //Agregar notas al pie
            if (elemento.NotasAlPie != null && elemento.NotasAlPie.Count > 0)
            {
                hecho.NotasAlPie = new Dictionary<string, IList<NotaAlPieDto>>();
                foreach (var nota in elemento.NotasAlPie)
                {
                    if (!hecho.NotasAlPie.ContainsKey(nota.Idioma))
                    {
                        hecho.NotasAlPie[nota.Idioma] = new List<NotaAlPieDto>();
                    }
                    hecho.NotasAlPie[nota.Idioma].Add(new NotaAlPieDto { Idioma = nota.Idioma, Rol = nota.Rol, Valor = nota.Valor });
                }
            }

            return hecho;
        }

        /// <summary>
        /// Crea un elemento <code>UnidadDto</code> a partir de una unidad utilizada por la declaración de un hecho en un documento instancia Xbrl
        /// </summary>
        /// <param name="elemento">La unidad del documento instancia Xbrl  a procesar</param>
        /// <param name="unidadesDocumentoInstancia">la lista de unidades previamente procesadas en el documento instancia</param>
        /// <returns>Un DTO el cual representa la unidad utilizada en la declaración de un hecho en un documento instancia Xbrl</returns>
        private UnidadDto CrearUnidadAPartirDeElementoXbrl(Unit elemento, IDictionary<string, UnidadDto> unidadesDocumentoInstancia)
        {
            UnidadDto unidad = null;

            if (unidadesDocumentoInstancia.ContainsKey(elemento.Id))
            {
                unidad = unidadesDocumentoInstancia[elemento.Id];
            }
            else
            {
                unidad = new UnidadDto();

                unidad.Id = elemento.Id;
                unidad.Tipo = elemento.Tipo;

                if (unidad.Tipo == Unit.Medida)
                {
                    unidad.Medidas = CrearMedidasAPartirDeElementoXbrl(elemento.Medidas);
                }
                else if (unidad.Tipo == Unit.Divisoria)
                {
                    unidad.MedidasNumerador = CrearMedidasAPartirDeElementoXbrl(elemento.Numerador);
                    unidad.MedidasDenominador = CrearMedidasAPartirDeElementoXbrl(elemento.Denominador);
                }

                unidadesDocumentoInstancia.Add(unidad.Id, unidad);
            }

            return unidad;
        }

        /// <summary>
        /// Crea una lista de objetos <code>MedidaDto</code> a partir de sus originales utilizadas en la declaración de una unidad en un documento instancia Xbrl.
        /// </summary>
        /// <param name="medidas">la lista de medidas utilizadas en el documento instancia</param>
        /// <returns>una lista de dtos los cuales representan las medidas utilizadas para describir una unidad</returns>
        private IList<MedidaDto> CrearMedidasAPartirDeElementoXbrl(IList<Measure> medidas)
        {
            IList<MedidaDto> listaMedidas = new List<MedidaDto>();

            if (medidas != null && medidas.Count > 0)
            {
                foreach (Measure measure in medidas)
                {
                    MedidaDto medida = new MedidaDto();

                    medida.Etiqueta = measure.LocalName;
                    medida.Nombre = measure.LocalName;
                    medida.EspacioNombres = measure.Namespace;

                    listaMedidas.Add(medida);
                }
            }

            return listaMedidas;
        }

        /// <summary>
        /// Crea una lista de objetos <code>NotaAlPieDto</code> a partir de las notas al pie de página de un hecho contenido en un documento instancia Xbrl
        /// </summary>
        /// <param name="notasAlPie">Las notas al pie asociadas a un hecho de un documento instancia a procesar</param>
        /// <returns>Un diccionario el cual contiene como llave </returns>
        private IDictionary<string, IList<NotaAlPieDto>> CrearNotasAlPieAPartirDeElementoXbrl(IList<AbaxXBRL.Taxonomia.Linkbases.NotaAlPie> notasAlPie)
        {
            IDictionary<string, IList<NotaAlPieDto>> notas = new Dictionary<string, IList<NotaAlPieDto>>();

            if (notasAlPie != null && notasAlPie.Count > 0)
            {
                foreach (AbaxXBRL.Taxonomia.Linkbases.NotaAlPie notaAlPie in notasAlPie)
                {
                    NotaAlPieDto nota = new NotaAlPieDto();

                    nota.Idioma = notaAlPie.Idioma;
                    nota.Valor = notaAlPie.Valor;

                    if (notas.ContainsKey(nota.Idioma))
                    {
                        notas[nota.Idioma].Add(nota);
                    }
                    else
                    {
                        IList<NotaAlPieDto> listaNotas = new List<NotaAlPieDto>();
                        listaNotas.Add(nota);
                        notas.Add(nota.Idioma, listaNotas);
                    }
                }
            }

            return notas;
        }

        /// <summary>
        /// Crea un objeto de tipo <code>ContextoDto</code> a partir de un Contexto utilizado en un documento instancia XBRL si este no se encuentra ya en los contextos creados previamente.
        /// </summary>
        /// <param name="elemento">el elemento XBRL a procesar</param>
        /// <param name="contextosDocumentoInstancia">los contextos utilizados dentro del documento instancia</param>
        /// <param name="entidadesDocumentoInstancia">las entidades utilizadas por los contextos dentro del documento instancia</param>
        /// <returns>el objeto de tipo ContextoDto el cual representa el contexto contenido en el documento instancia XBRL.</returns>
        private ContextoDto CrearContextoAPartirDeElementoXbrl(Context elemento, IDictionary<string, ContextoDto> contextosDocumentoInstancia)
        {
            ContextoDto contexto = null;

            if (contextosDocumentoInstancia.ContainsKey(elemento.Id))
            {
                contexto = contextosDocumentoInstancia[elemento.Id];
            }
            else
            {
                contexto = new ContextoDto();
                contexto.Id = elemento.Id;
                contexto.Escenario = (elemento.Escenario != null ? elemento.Escenario.ElementoOrigen.OuterXml : string.Empty);
                contexto.Entidad = CrearEntidadAPartirDeElementoXbrl(elemento.Entidad);

                var valoresDimensiones = elemento.Escenario != null && elemento.Escenario.MiembrosDimension != null
                                             ? elemento.Escenario.MiembrosDimension
                                             : null;
                contexto.ContieneInformacionDimensional = valoresDimensiones != null && valoresDimensiones.Count > 0;
                if (contexto.ContieneInformacionDimensional)
                {
                    contexto.ValoresDimension = new List<DimensionInfoDto>();
                    foreach (var dimension in valoresDimensiones)
                    {
                        var infoDim = new DimensionInfoDto();
                        infoDim.Explicita = dimension.Explicita;
                        infoDim.IdDimension = dimension.Dimension.Id;
                        infoDim.QNameDimension = dimension.QNameDimension.ToString();
                        if (dimension.Explicita)
                        {
                            infoDim.QNameItemMiembro = dimension.QNameMiembro.ToString();
                            infoDim.IdItemMiembro = dimension.ItemMiembro.Id;
                        }
                        else
                        {
                            infoDim.ElementoMiembroTipificado = dimension.ElementoMiembroTipificado.OuterXml;
                        }
                        contexto.ValoresDimension.Add(infoDim);
                    }
                }


                contexto.Periodo = new PeriodoDto();

                contexto.Periodo.Tipo = elemento.Periodo.Tipo;
                if (contexto.Periodo.Tipo == Period.Instante)
                {
                    contexto.Periodo.FechaInstante = elemento.Periodo.FechaInstante;
                }
                else
                {
                    contexto.Periodo.FechaInicio = elemento.Periodo.FechaInicio;
                    contexto.Periodo.FechaFin = elemento.Periodo.FechaFin;
                }
                contextosDocumentoInstancia.Add(contexto.Id, contexto);
            }

            return contexto;
        }

        /// <summary>
        /// Crea un objeti de tipo <code>EntidadDto</code> a partir de la definición de una Entidad utilizada por un contexto en un documento instancia XBRL
        /// </summary>
        /// <param name="elemento">el elemento a procesar</param>
        /// <param name="entidadesDocumentoInstancia">Las entidades utilizadas dentro del documento instancia</param>
        /// <returns>Un dto el cual representa la entidad utilizada dentro del documento instancia por un contexto.</returns>
        private EntidadDto CrearEntidadAPartirDeElementoXbrl(Entity elemento)
        {
            EntidadDto entidad = null;

            string idEntidad = elemento.EsquemaId + CommonConstants.SeparadorNombreCalificado + elemento.Id;

            entidad = new EntidadDto
                          {
                              Id = elemento.Id,
                              EsquemaId = elemento.EsquemaId,
                              Segmento =
                                  (elemento.Segmento != null ? elemento.Segmento.ElementoOrigen.OuterXml : string.Empty)
                          };

            var valoresDimensiones = elemento.Segmento != null && elemento.Segmento.MiembrosDimension != null
                                             ? elemento.Segmento.MiembrosDimension
                                             : null;
            entidad.ContieneInformacionDimensional = valoresDimensiones != null && valoresDimensiones.Count > 0;
            if (entidad.ContieneInformacionDimensional)
            {
                entidad.ValoresDimension = new List<DimensionInfoDto>();
                foreach (var dimension in valoresDimensiones)
                {
                    var infoDim = new DimensionInfoDto();
                    infoDim.Explicita = dimension.Explicita;
                    infoDim.IdDimension = dimension.Dimension.Id;
                    infoDim.QNameDimension = dimension.QNameDimension.ToString();
                    if (dimension.Explicita)
                    {
                        infoDim.QNameItemMiembro = dimension.QNameMiembro.ToString();
                        infoDim.IdItemMiembro = dimension.ItemMiembro.Id;
                    }
                    else
                    {
                        infoDim.ElementoMiembroTipificado = dimension.ElementoMiembroTipificado.OuterXml;
                    }
                    entidad.ValoresDimension.Add(infoDim);
                }
            }

            return entidad;
        }

        /// <summary>
        /// Valida el tipo de dato base del concepto para verificar que efectivamente pertenece al espacio de nombres de XBRL.
        /// </summary>
        /// <param name="qName">El nombre completamente calificado del tipo de dato a validar.</param>
        /// <returns>El nombre del tipo de dato que corresponde al </returns>
        private string ValidarTipoDeDatoParaVisor(XmlQualifiedName qName)
        {
            string tipoDato = null;
            if (qName.Namespace.Equals(EspacioNombresConstantes.InstanceNamespace))
            {
                tipoDato = qName.ToString();
            }
            return tipoDato;
        }


        #endregion

        #region Creación de documento de instancia del procesador a partir del modelo de vista


        public IDocumentoInstanciaXBRL CrearDocumentoInstanciaXbrl(ITaxonomiaXBRL taxonomia, DocumentoInstanciaXbrlDto instanciaXbrlDto)
        {
            var documentoInstancia = new DocumentoInstanciaXBRL();
            documentoInstancia.Taxonomia = taxonomia;
            //Crear DTS y archivos importados
            foreach (var dtsDto in instanciaXbrlDto.DtsDocumentoInstancia)
            {
                var archivo = new ArchivoImportadoDocumento()
                                  {
                                      TipoArchivo = dtsDto.Tipo,
                                      HRef = dtsDto.HRef,
                                      Role = dtsDto.Role,
                                      RoleUri = dtsDto.RoleUri
                                  };
                documentoInstancia.AgregarArchivoImportado(archivo);
            }
            //Creación de contextos
            foreach (var contextoDto in instanciaXbrlDto.ContextosPorId.Values)
            {
                documentoInstancia.AgregarContexto(CrearContextoXbrl(contextoDto, taxonomia));
            }
            //Creación de unidades
            foreach (var unidadDto in instanciaXbrlDto.UnidadesPorId.Values)
            {
                documentoInstancia.AgregarUnidad(CrearUnidadXbrl(unidadDto, taxonomia));
            }
            //Crear hechos
            foreach (var hechoDto in instanciaXbrlDto.HechosPorId.Values)
            {
                if (hechoDto.TuplaPadre == null)
                {
                    var hecho = CrearHechoXbrl(hechoDto, instanciaXbrlDto, documentoInstancia,null);
                    if (hecho != null)
                    {
                        documentoInstancia.AgregarHecho(hecho);
                    }
                }
            }
            return documentoInstancia;
        }

        /// <summary>
        /// Crea un Hecho XBRL a partir de su definición de objeto DTO
        /// </summary>
        /// <param name="hechoDto">Datos de Origen</param>
        /// <param name="instanciaXbrlDto">Documento de instancia origen.</param>
        /// <param name="documentoInstancia">Documento instancia que se está populando</param>
        /// <param name="tuplaPadre">Indica la tupla padre del elemento, en caso de que aplique</param>
        /// <returns>Hecho XBRL creado</returns>
        private Fact CrearHechoXbrl(HechoDto hechoDto, DocumentoInstanciaXbrlDto instanciaXbrlDto, IDocumentoInstanciaXBRL documentoInstancia, Fact tuplaPadre)
        {
            if(documentoInstancia.Hechos.Any(x=>x.Id == hechoDto.Id)){
                return null;
            }
            if (!documentoInstancia.Taxonomia.ElementosTaxonomiaPorId.ContainsKey(hechoDto.IdConcepto))
            {
                return null;
            }
            TaxonomiaDto taxonomiaDto = instanciaXbrlDto.Taxonomia;
            var concepto = documentoInstancia.Taxonomia.ElementosTaxonomiaPorId[hechoDto.IdConcepto];
            Fact resultado = null;
            if (concepto.Tipo == Concept.Tuple)
            {
                resultado = new FactTuple { Concepto = concepto, Id = hechoDto.Id, Tipo = concepto.Tipo, TuplaPadre = tuplaPadre as FactTuple };
                foreach (var hechoHijo in hechoDto.Hechos)
                {
                    HechoDto hechoHijoDto;
                    if (instanciaXbrlDto.HechosPorId.TryGetValue(hechoHijo, out hechoHijoDto))
                    {
                        var nuevo = CrearHechoXbrl(hechoHijoDto, instanciaXbrlDto, documentoInstancia, resultado);
	                    documentoInstancia.AgregarHecho(nuevo);
	                    (resultado as FactTuple).Hechos.Add(nuevo);
                	}
            	}
            }
            else
            {

                if (hechoDto.EsFraccion)
                {
                    resultado = new FactFractionItem()
                    {
                        IsNilValue = hechoDto.EsValorNil,
                        TuplaPadre = tuplaPadre as FactTuple,
                        Concepto = concepto,
                        Id = hechoDto.Id,
                        Tipo = Concept.Item
                    };
                    (resultado as FactFractionItem).Contexto = documentoInstancia.Contextos[hechoDto.IdContexto];
                    (resultado as FactFractionItem).Unidad = documentoInstancia.Unidades[hechoDto.IdUnidad];
                    (resultado as FactFractionItem).Numerador = hechoDto.ValorNumerador;
                    (resultado as FactFractionItem).Denominador = hechoDto.ValorDenominador;
                }
                else if (hechoDto.EsNumerico)
                {
                    resultado = new FactNumericItem()
                    {
                        IsNilValue = hechoDto.EsValorNil,
                        TuplaPadre = tuplaPadre as FactTuple,
                        Concepto = concepto,
                        Id = hechoDto.Id,
                        Tipo = Concept.Item
                    };
                    (resultado as FactNumericItem).Contexto = documentoInstancia.Contextos[hechoDto.IdContexto];
                    (resultado as FactNumericItem).Unidad = documentoInstancia.Unidades[hechoDto.IdUnidad];
                    try
                    {
                        (resultado as FactNumericItem).Valor = hechoDto.Valor;
                    }
                    catch (Exception ex) {
                        Period per = (resultado as FactNumericItem).Contexto.Periodo;
                        var fechaDato = "";
                        if (per.Tipo == Period.Instante)
                        {
                            fechaDato = DateUtil.ToStandarString(per.FechaInstante);
                        }
                        else if (per.Tipo == Period.Duracion)
                        {
                            fechaDato = DateUtil.ToStandarString(per.FechaInicio) + " - " + DateUtil.ToStandarString(per.FechaFin);
                        }
                        else {
                            fechaDato = "Para Siempre";
                        }
                        throw new InvalidOperationException("El formato del valor (" + hechoDto.Valor + ") del concepto ("+
                            UtilAbax.ObtenerEtiqueta(taxonomiaDto,concepto.Id)+") no es un número válido. Periodo: ("+
                            fechaDato
                            +")");
                    }
                    

                    if (!String.IsNullOrEmpty(hechoDto.Precision))
                    {
                        (resultado as FactNumericItem).AsignarPrecision(hechoDto.Precision);
                    }
                    if (!String.IsNullOrEmpty(hechoDto.Decimales))
                    {
                        (resultado as FactNumericItem).AsignarDecimales(hechoDto.Decimales);
                    }

                    if (hechoDto.EsDecimalesInfinitos && FactNumericItem.VALOR_INF.Equals(hechoDto.Decimales))
                    {
                        (resultado as FactNumericItem).AsignarDecimales(FactNumericItem.VALOR_INF);
                    }
                    else if (hechoDto.EsPrecisionInfinita && FactNumericItem.VALOR_INF.Equals(hechoDto.Precision))
                    {
                        (resultado as FactNumericItem).AsignarPrecision(FactNumericItem.VALOR_INF);
                    }

                    if (!((resultado as FactNumericItem).EsDecimalesEstablecidos()) && !((resultado as FactNumericItem).EsPrecisionEstablecida())) {
                        (resultado as FactNumericItem).AsignarDecimales(FactNumericItem.VALOR_INF);
                    }

                    (resultado as FactNumericItem).ActualizarValorRedondeado();
                }
                else
                {
                    resultado = new FactItem
                                    {
                                        IsNilValue = hechoDto.EsValorNil,
                                        TuplaPadre = tuplaPadre as FactTuple,
                                        Concepto = concepto,
                                        Id = hechoDto.Id,
                                        Tipo = Concept.Item
                                    };
                    if (!documentoInstancia.Contextos.ContainsKey(hechoDto.IdContexto))
                    {
                        //Hecho no válido
                        return null;
                    }
                    (resultado as FactItem).Contexto = documentoInstancia.Contextos[hechoDto.IdContexto];
                    (resultado as FactItem).Valor = hechoDto.Valor;
                }
                if(TiposDatoXBRL.BooleanItemType.Contains(((ConceptItem)concepto).TipoDatoXbrl.Name) && String.IsNullOrEmpty(hechoDto.Valor)){
                    hechoDto.Valor = Boolean.FalseString.ToLower();
                    (resultado as FactItem).Valor = hechoDto.Valor;
                }
                if (!(concepto as ConceptItem).EsValorHechoValido(hechoDto.Valor))
                {
                    if (TiposDatoXBRL.BooleanItemType.Contains(((ConceptItem)concepto).TipoDatoXbrl.Name))
                    {
                      hechoDto.Valor = _valorSI.Contains(hechoDto.Valor.ToLower()) ? "true" : "false";
                      (resultado as FactItem).Valor = hechoDto.Valor;
                    }
                    else
                    {
                      throw new InvalidOperationException("El hecho " + hechoDto.IdConcepto + " con el valor '" + hechoDto.Valor + "' tiene un valor no válido respecto a su tipo de dato: ID del hecho " + hechoDto.Id);
                    }
                }

            }

            if (hechoDto.NotasAlPie != null && hechoDto.NotasAlPie.Count > 0)
            {
                resultado.NotasAlPie = new List<AbaxXBRL.Taxonomia.Linkbases.NotaAlPie>();
                foreach (var listaNotas in hechoDto.NotasAlPie.Values)
                {
                    foreach (var notaAlPieDto in listaNotas)
                    {
                        resultado.NotasAlPie.Add(new AbaxXBRL.Taxonomia.Linkbases.NotaAlPie
                                                     {
                                                         Idioma = notaAlPieDto.Idioma,
                                                         Rol = notaAlPieDto.Rol,
                                                         Valor = notaAlPieDto.Valor
                                                     });
                    }
                }
            }

            return resultado;
        }
        /// <summary>
        /// Crea una unidad XBRL a partir de su representación en modelo de vista DTO
        /// </summary>
        /// <param name="unidadDto">DTO con datos de origen</param>
        /// <param name="taxonomia">Taxonomía para la que se crea la unidad</param>
        /// <returns>Objeto de Unidad XBRL</returns>
        private Unit CrearUnidadXbrl(UnidadDto unidadDto, ITaxonomiaXBRL taxonomia)
        {
            var unidadXbrl = new Unit
                                 {
                                     Id = unidadDto.Id,
                                     Tipo = unidadDto.Tipo
                                 };

            if (unidadXbrl.Tipo == Unit.Medida)
            {
                foreach (var medidaDto in unidadDto.Medidas)
                {
                    unidadXbrl.AgregarMedida(new Measure(medidaDto.EspacioNombres, medidaDto.Nombre));
                }
            }
            else
            {
                foreach (var medidaDto in unidadDto.MedidasNumerador)
                {
                    unidadXbrl.AgregarNumerador(new Measure(medidaDto.EspacioNombres, medidaDto.Nombre));
                }
                foreach (var medidaDto in unidadDto.MedidasDenominador)
                {
                    unidadXbrl.AgregarDenominador(new Measure(medidaDto.EspacioNombres, medidaDto.Nombre));
                }
            }
            return unidadXbrl;
        }
        /// <summary>
        /// Crea un contexto XBRL a partir de su representación en modelo de vista DTO
        /// </summary>
        /// <param name="contextoDto">DTO con datos de origen</param>
        /// <param name="taxonomia">Taxonomía para la que se crea el contexto</param>
        /// <returns>Objeto de contexto XBRL</returns>
        private Context CrearContextoXbrl(ContextoDto contextoDto, ITaxonomiaXBRL taxonomia)
        {
            var contextoXbrl = new Context
                                   {
                                       Id = contextoDto.Id,
                                       Periodo = new Period
                                                     {
                                                         Tipo = contextoDto.Periodo.Tipo
                                                     }
                                   };
            //Periodo
            if (contextoXbrl.Periodo.Tipo == Period.Instante)
            {
                contextoXbrl.Periodo.FechaInstante = contextoDto.Periodo.FechaInstante;
            }
            else if (contextoXbrl.Periodo.Tipo == Period.Duracion)
            {
                contextoXbrl.Periodo.FechaInicio = contextoDto.Periodo.FechaInicio;
                contextoXbrl.Periodo.FechaFin = contextoDto.Periodo.FechaFin;
            }

            if (contextoDto.ContieneInformacionDimensional)
            {
                contextoXbrl.Escenario = new Scenario
                                             {
                                                 MiembrosDimension = CrearMiembrosDimension(contextoDto.ValoresDimension, taxonomia)
                                             };
            }
            contextoXbrl.Entidad = new Entity
                                       {
                                           Id = contextoDto.Entidad.Id,
                                           EsquemaId = contextoDto.Entidad.EsquemaId
                                       };
            if (contextoDto.Entidad.ContieneInformacionDimensional)
            {
                contextoXbrl.Entidad.Segmento = new Segment
                                                    {
                                                        MiembrosDimension = CrearMiembrosDimension(contextoDto.Entidad.ValoresDimension, taxonomia)
                                                    };
            }
            return contextoXbrl;
        }
        /// <summary>
        /// Crea una lista con información dimensional a partir de la información del DTO
        /// </summary>
        /// <param name="listaValoresDimension">Valores dimensionales de origen</param>
        /// <param name="taxonomia">Taxonomía actual</param>
        /// <returns>Lista de valores dimensionales XBRL</returns>
        private IList<MiembroDimension> CrearMiembrosDimension(IList<DimensionInfoDto> listaValoresDimension, ITaxonomiaXBRL taxonomia)
        {
            if (listaValoresDimension == null || listaValoresDimension.Count == 0)
            {
                return null;
            }
            var miembrosDimensionXbrl = new List<MiembroDimension>();
            try
            {
	            foreach (var valorDimDto in listaValoresDimension)
	            {
	                var dimXbrl = new MiembroDimension()
	                                  {
	                                      Explicita = valorDimDto.Explicita,
	                                  };
	
	                var idDimension = valorDimDto.IdDimension;
	                if (idDimension == null)
	                {
	                    var qname = XmlUtil.ParsearQName(valorDimDto.QNameDimension);
	                    if (taxonomia.ElementosTaxonomiaPorName.ContainsKey(qname))
	                    {
	                        idDimension = taxonomia.ElementosTaxonomiaPorName[qname].Id;
	                        valorDimDto.IdDimension = idDimension;
	                    }
	                }
	
	                if (idDimension != null && taxonomia.ElementosTaxonomiaPorId.ContainsKey(idDimension) && taxonomia.ElementosTaxonomiaPorId[idDimension] is ConceptDimensionItem)
	                {
	                    dimXbrl.Dimension = taxonomia.ElementosTaxonomiaPorId[valorDimDto.IdDimension] as ConceptDimensionItem;
	                    dimXbrl.QNameDimension = dimXbrl.Dimension.Elemento.QualifiedName;
	                }
	                if (dimXbrl.Explicita)
	                {
	                    var idItem = valorDimDto.IdItemMiembro;
	                    if (idItem == null)
	                    {
	                        var qname = XmlUtil.ParsearQName(valorDimDto.QNameItemMiembro);
	                        if (taxonomia.ElementosTaxonomiaPorName.ContainsKey(qname))
	                        {
	                            idItem = taxonomia.ElementosTaxonomiaPorName[qname].Id;
	                            valorDimDto.IdItemMiembro = idItem;
	                        }
	                    }
	                    if (valorDimDto.IdItemMiembro != null && taxonomia.ElementosTaxonomiaPorId.ContainsKey(valorDimDto.IdItemMiembro) && taxonomia.ElementosTaxonomiaPorId[valorDimDto.IdItemMiembro] is ConceptItem)
	                    {
	                        dimXbrl.ItemMiembro = taxonomia.ElementosTaxonomiaPorId[valorDimDto.IdItemMiembro] as ConceptItem;
	                        dimXbrl.QNameMiembro = dimXbrl.ItemMiembro.Elemento.QualifiedName;
	                    }
	                }
	                else
	                {
	                    dimXbrl.ElementoMiembroTipificado = XmlUtil.CrearElementoXML(valorDimDto.ElementoMiembroTipificado);
	                }
	                miembrosDimensionXbrl.Add(dimXbrl);
	            }
            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
                throw ex;
            }
            return miembrosDimensionXbrl;
        }
        public void AjustarIdentificadoresDimensioneConQname(DocumentoInstanciaXbrlDto instanciaXbrlDto)
        {
            if (instanciaXbrlDto.Taxonomia == null)
            {
                return;
            }
            foreach (var contextos in instanciaXbrlDto.ContextosPorId.Values)
            {
                if (contextos.ValoresDimension != null)
                {
                    AjustarValoresDimensionales(contextos.ValoresDimension, instanciaXbrlDto.Taxonomia);
                }
                if (contextos.Entidad.ValoresDimension != null)
                {
                    AjustarValoresDimensionales(contextos.Entidad.ValoresDimension, instanciaXbrlDto.Taxonomia);
                }
            }
            ConceptoDto concepto = null;

            foreach (var hecho in instanciaXbrlDto.HechosPorId.Values)
            {
                if (hecho.IdConcepto != null && instanciaXbrlDto.Taxonomia.ConceptosPorId.TryGetValue(hecho.IdConcepto, out concepto))
                {
	                hecho.EspacioNombres = concepto.EspacioNombres;
	                hecho.NombreConcepto = concepto.Nombre;
	                hecho.TipoDato = concepto.TipoDato;
	                hecho.TipoDatoXbrl = concepto.TipoDatoXbrl;
            	}
        	}
        }
        /// <summary>
        /// Veirifca si el contexto no tiene ID de dimension y lo recupera con su QName
        /// </summary>
        private void AjustarValoresDimensionales(IList<DimensionInfoDto> valoresDimension, TaxonomiaDto taxonomia)
        {
            foreach (var dimensionInfoDto in valoresDimension)
            {
                if (dimensionInfoDto.IdDimension == null && dimensionInfoDto.QNameDimension != null)
                {
                    var qnameDimension = XmlUtil.ParsearQName(dimensionInfoDto.QNameDimension);
                    foreach (var concepto in taxonomia.ConceptosPorId.Values)
                    {
                        if (concepto.EspacioNombres.Equals(qnameDimension.Namespace) &&
                            concepto.Nombre.Equals(qnameDimension.Name))
                        {
                            dimensionInfoDto.IdDimension = concepto.Id;
                            break;
                        }
                    }
                }

                if (dimensionInfoDto.IdItemMiembro == null && dimensionInfoDto.QNameItemMiembro != null)
                {
                    var qnameItem = XmlUtil.ParsearQName(dimensionInfoDto.QNameItemMiembro);
                    foreach (var concepto in taxonomia.ConceptosPorId.Values)
                    {
                        if (concepto.EspacioNombres.Equals(qnameItem.Namespace) &&
                            concepto.Nombre.Equals(qnameItem.Name))
                        {
                            dimensionInfoDto.IdItemMiembro = concepto.Id;
                            break;
                        }
                    }
                }
            }
        }


        public void EliminarElementosDuplicados(DocumentoInstanciaXbrlDto instanciaXbrlDto)
        {
            //Unidades
            UnificarUnidadesRepetidas(instanciaXbrlDto);
            //Contextos
            UnificarContextosRepetidos(instanciaXbrlDto);
            EliminarUnidadesSinUso(instanciaXbrlDto);
            EliminarContextosSinUso(instanciaXbrlDto);

            EliminarHechosDuplicados(instanciaXbrlDto);
            DocumentoInstanciaXbrlDtoConverter.AgruparInformacionDocumento(instanciaXbrlDto);
            DepuraHechoFideicomiso(instanciaXbrlDto);
        }

        /// <summary>
        /// Se elimina el caracter '/' de los chechos para el concepto "".
        /// </summary>
        /// <param name="instanciaXbrlDto">Documento con la información a depurar.</param>
        private void DepuraHechoFideicomiso(DocumentoInstanciaXbrlDto instanciaXbrlDto)
        {
            var idsConceptosFideicomisos = new List<string>() { "mx_ccd_TrustNumber", "mx_deuda_TrustNumber", "mx_trac_TrustNumber" };
            var parametroFideicomiso = "numeroFideicomiso";
            if (instanciaXbrlDto.ParametrosConfiguracion.ContainsKey(parametroFideicomiso))
            {
                var valorParametro = instanciaXbrlDto.ParametrosConfiguracion[parametroFideicomiso];
                valorParametro = valorParametro.Replace("/", "");
                instanciaXbrlDto.ParametrosConfiguracion[parametroFideicomiso] = valorParametro;
            }
            foreach (var idConceptoFideicomiso in idsConceptosFideicomisos) 
            { 
                if (!instanciaXbrlDto.HechosPorIdConcepto.ContainsKey(idConceptoFideicomiso))
                {
                    continue;
                }
                var idsHechosFideicomiso = instanciaXbrlDto.HechosPorIdConcepto[idConceptoFideicomiso];
                foreach (var idHecho in idsHechosFideicomiso)
                {
                    var hecho = instanciaXbrlDto.HechosPorId[idHecho];
                    var valor = hecho.Valor;
                    valor = valor.Replace("/","");
                    hecho.Valor = valor;
                }
            }
        }

        /// <summary>
        /// Una vez unificados los contextos, elimina los hechos del mismo concepto y misma unidad asociados al mismo contexto
        /// </summary>
        /// <param name="instanciaXbrlDto">DTO a procesar</param>
        private void EliminarHechosDuplicados(DocumentoInstanciaXbrlDto instanciaXbrlDto)
        {
            Dictionary<string, string> mapaHechos = new Dictionary<string, string>();
            var llave = "";
            var hechosFinales = new Dictionary<String, HechoDto>();
            foreach(var hecho in instanciaXbrlDto.HechosPorId.Values){
                if(!hecho.EsTupla && hecho.TuplaPadre == null){
                    llave = hecho.IdConcepto + "_" + hecho.IdContexto + "_" + (hecho.IdUnidad!=null?hecho.IdUnidad:"");
                    if (!mapaHechos.ContainsKey(llave))
                    {
                        //se agrega hecho
                        hechosFinales.Add(hecho.Id, hecho);
                        mapaHechos.Add(llave, hecho.Id);
                    }else{
                        Debug.WriteLine("Repetido: " + hecho.Id + " con " + mapaHechos[llave]);
                    }
                }
            }
            instanciaXbrlDto.HechosPorId = hechosFinales;
            mapaHechos.Clear();
        }

        /// <summary>
        /// Elimina las unidades que no son utilizadas por ningun hecho
        /// </summary>
        /// <param name="instanciaXbrlDto">Documento de instancia de donde se eliminan las unidades</param>
        private void EliminarUnidadesSinUso(DocumentoInstanciaXbrlDto instanciaXbrlDto)
        {
            //Colectar unidades utilizadas
            IDictionary<String, String> idUnidadesUtilizadas = new Dictionary<String, String>();
            IList<String> idUnidadesAEliminar = new List<String>();
            foreach (var hecho in instanciaXbrlDto.HechosPorId.Values)
            {
                if (!String.IsNullOrEmpty(hecho.IdUnidad))
                {
                    if (!idUnidadesUtilizadas.ContainsKey(hecho.IdUnidad))
                    {
                        idUnidadesUtilizadas[hecho.IdUnidad] = hecho.IdUnidad;
                    }
                }
            }
            //Colectar unidades no utilizadas
            foreach (var idUnidad in instanciaXbrlDto.UnidadesPorId.Keys)
            {
                if (!idUnidadesUtilizadas.ContainsKey(idUnidad))
                {
                    idUnidadesAEliminar.Add(idUnidad);
                }
            }
            //Eliminar unidades no utilizadas
            foreach (var idUnidad in idUnidadesAEliminar)
            {
                instanciaXbrlDto.UnidadesPorId.Remove(idUnidad);
                if (instanciaXbrlDto.HechosPorIdUnidad.ContainsKey(idUnidad))
                {
                    instanciaXbrlDto.HechosPorIdUnidad.Remove(idUnidad);
                }
            }
        }

        /// <summary>
        /// Elimina los contextos que no son utilizados por ningún hecho
        /// </summary>
        /// <param name="instanciaXbrlDto">Documento de instancia de donde se eliminan los contextos</param>
        private void EliminarContextosSinUso(DocumentoInstanciaXbrlDto instanciaXbrlDto)
        {
            //Colectar contextos utilizados
            IDictionary<String, String> idContextosUtilizados = new Dictionary<String, String>();
            IList<String> idContextosEliminar = new List<String>();
            foreach (var hecho in instanciaXbrlDto.HechosPorId.Values)
            {
                if (!String.IsNullOrEmpty(hecho.IdContexto))
                {
                    if (!idContextosUtilizados.ContainsKey(hecho.IdContexto))
                    {
                        idContextosUtilizados[hecho.IdContexto] = hecho.IdContexto;
                    }
                }
            }
            //Colectar contextos no utilizados
            foreach (var idContexto in instanciaXbrlDto.ContextosPorId.Keys)
            {
                if (!idContextosUtilizados.ContainsKey(idContexto))
                {
                    idContextosEliminar.Add(idContexto);
                }
            }
            //Eliminar contextos no utilizados
            foreach (var idContexto in idContextosEliminar)
            {
                instanciaXbrlDto.ContextosPorId.Remove(idContexto);
                if (instanciaXbrlDto.HechosPorIdContexto.ContainsKey(idContexto))
                {
                    instanciaXbrlDto.HechosPorIdContexto.Remove(idContexto);
                }
            }
        }

        /// <summary>
        /// Unifica las unidades repetidas migrando los hechos asignados a estas unidades y luego eliminandolas del documento
        /// </summary>
        /// <param name="instanciaXbrlDto"></param>
        private void UnificarUnidadesRepetidas(DocumentoInstanciaXbrlDto instanciaXbrlDto)
        {
            IDictionary<UnidadDto, IList<UnidadDto>> unidadesRepetidas = new Dictionary<UnidadDto, IList<UnidadDto>>();

            foreach (var unidadActual in instanciaXbrlDto.UnidadesPorId.Values)
            {
                foreach (var unidadComparar in instanciaXbrlDto.UnidadesPorId.Values)
                {
                    if (unidadComparar != unidadActual && !unidadesRepetidas.ContainsKey(unidadComparar))
                    {
                        if (unidadActual.EsEquivalente(unidadComparar))
                        {

                            if (!unidadesRepetidas.ContainsKey(unidadActual))
                            {
                                unidadesRepetidas[unidadActual] = new List<UnidadDto>();
                            }
                            if (!unidadesRepetidas.ContainsKey(unidadComparar))
                            {
                                unidadesRepetidas[unidadComparar] = new List<UnidadDto>();
                            }

                            unidadesRepetidas[unidadActual].Add(unidadComparar);
                            unidadesRepetidas[unidadComparar].Add(unidadActual);

                        }
                    }
                }
            }

            foreach (var unidadRepetida in unidadesRepetidas.Keys)
            {

                //Migrar los hechos de unidades de la lista a unidad repetida
                if (unidadesRepetidas[unidadRepetida].Count > 0 && instanciaXbrlDto.UnidadesPorId.ContainsKey(unidadRepetida.Id))
                {
                    foreach (var unidadesAMigrar in unidadesRepetidas[unidadRepetida])
                    {
                        if (instanciaXbrlDto.UnidadesPorId.ContainsKey(unidadesAMigrar.Id))
                        {
                            foreach (var idHecho in instanciaXbrlDto.HechosPorIdUnidad[unidadesAMigrar.Id])
                            {
                                instanciaXbrlDto.HechosPorId[idHecho].IdUnidad = unidadRepetida.Id;
                                if (!instanciaXbrlDto.HechosPorIdUnidad.ContainsKey(unidadRepetida.Id))
                                {
                                    instanciaXbrlDto.HechosPorIdUnidad[unidadRepetida.Id] = new List<String>();
                                }
                                instanciaXbrlDto.HechosPorIdUnidad[unidadRepetida.Id].Add(idHecho);
                            }
                            instanciaXbrlDto.HechosPorIdUnidad.Remove(unidadesAMigrar.Id);
                        }
                       
                    }
                }
            }
        }


        /// <summary>
        /// Unifica los contextos repetidos migrando los hechos asignados a estos contextos y luego eliminandolos del documento
        /// </summary>
        /// <param name="instanciaXbrlDto"></param>
        private void UnificarContextosRepetidos(DocumentoInstanciaXbrlDto instanciaXbrlDto)
        {
            IDictionary<ContextoDto, IList<ContextoDto>> contextosRepetidos = new Dictionary<ContextoDto, IList<ContextoDto>>();

            foreach (var contextoActual in instanciaXbrlDto.ContextosPorId.Values)
            {
                foreach (var contextoComparar in instanciaXbrlDto.ContextosPorId.Values)
                {
                    if (contextoComparar != contextoActual && !contextosRepetidos.ContainsKey(contextoComparar))
                    {
                        if (contextoActual.EstructuralmenteIgual(contextoComparar))
                        {

                            if (!contextosRepetidos.ContainsKey(contextoActual))
                            {
                                contextosRepetidos[contextoActual] = new List<ContextoDto>();
                            }
                            if (!contextosRepetidos.ContainsKey(contextoComparar))
                            {
                                contextosRepetidos[contextoComparar] = new List<ContextoDto>();
                            }

                            contextosRepetidos[contextoActual].Add(contextoComparar);
                            contextosRepetidos[contextoComparar].Add(contextoActual);

                        }
                    }
                }
            }

            foreach (var contextoRepetido in contextosRepetidos.Keys)
            {

                //Migrar los hechos de los contextos de la lista a contexto repetido
                if (contextosRepetidos[contextoRepetido].Count > 0 && instanciaXbrlDto.ContextosPorId.ContainsKey(contextoRepetido.Id))
                {
                    foreach (var contextosAMigrar in contextosRepetidos[contextoRepetido])
                    {
                        if (instanciaXbrlDto.ContextosPorId.ContainsKey(contextosAMigrar.Id) && instanciaXbrlDto.HechosPorIdContexto.ContainsKey(contextosAMigrar.Id))
                        {
                            foreach (var idHecho in instanciaXbrlDto.HechosPorIdContexto[contextosAMigrar.Id])
                            {
                                instanciaXbrlDto.HechosPorId[idHecho].IdContexto = contextoRepetido.Id;
                                if (!instanciaXbrlDto.HechosPorIdContexto.ContainsKey(contextoRepetido.Id))
                                {
                                    instanciaXbrlDto.HechosPorIdContexto[contextoRepetido.Id] = new List<String>();
                                }
                                instanciaXbrlDto.HechosPorIdContexto[contextoRepetido.Id].Add(idHecho);
                            }
                            instanciaXbrlDto.HechosPorIdContexto.Remove(contextosAMigrar.Id);
                        }
                        
                    }
                }
            }
        }
        #endregion







        public void IncorporarTaxonomia(TaxonomiaDto taxonomiaOriginal, ITaxonomiaXBRL taxonomiaIncorporar)
        {
            try
            {
                foreach (var esquema in taxonomiaIncorporar.ArchivosEsquema.Values)
                {
                    foreach (XmlSchemaType schemaType in esquema.SchemaTypes.Values)
                    {
                        if (!taxonomiaOriginal.TiposDeDatoXbrlPorNombre.ContainsKey(schemaType.QualifiedName.ToString()))
                        {
                            var tipoDato = new TipoDatoXbrlDto();
                            tipoDato.EspacioNombres = schemaType.QualifiedName.Namespace;
                            tipoDato.Nombre = schemaType.QualifiedName.Name;

                            tipoDato.EsTipoDatoNumerico = schemaType.TypeCode == XmlTypeCode.Decimal ||
                                                          schemaType.TypeCode == XmlTypeCode.Double ||
                                                          schemaType.TypeCode == XmlTypeCode.Float ||
                                                          schemaType.TypeCode == XmlTypeCode.Int ||
                                                          schemaType.TypeCode == XmlTypeCode.Integer ||
                                                          schemaType.TypeCode == XmlTypeCode.Long ||
                                                          schemaType.TypeCode == XmlTypeCode.NegativeInteger ||
                                                          schemaType.TypeCode == XmlTypeCode.NonNegativeInteger ||
                                                          schemaType.TypeCode == XmlTypeCode.NonPositiveInteger ||
                                                          schemaType.TypeCode == XmlTypeCode.PositiveInteger;
                            tipoDato.EsTipoDatoFraccion = schemaType.QualifiedName.Name.Equals(TiposDatoXBRL.FractionItemType);
                            tipoDato.EsTipoDatoMonetario = schemaType.QualifiedName.Name.Equals(TiposDatoXBRL.MonetaryItemType);
                            tipoDato.EsTipoDatoAcciones = schemaType.QualifiedName.Name.Equals(TiposDatoXBRL.SharesItemType);
                            tipoDato.EsTipoDatoPuro = schemaType.QualifiedName.Name.Equals(TiposDatoXBRL.PureItemType);
                            tipoDato.EsTipoDatoToken = schemaType.TypeCode == XmlTypeCode.Token;
                            tipoDato.EsTipoDatoBoolean = schemaType.TypeCode == XmlTypeCode.Boolean;


                            if (schemaType.TypeCode == XmlTypeCode.Token && schemaType is XmlSchemaComplexType &&
                                (schemaType as XmlSchemaComplexType).ContentModel != null &&
                                (schemaType as XmlSchemaComplexType).ContentModel.Content is XmlSchemaSimpleContentRestriction)
                            {
                                tipoDato.ListaValoresToken = new List<string>();
                                var contentModel =
                                    ((schemaType as XmlSchemaComplexType).ContentModel.Content as XmlSchemaSimpleContentRestriction);
                                if (contentModel.Facets != null)
                                {
                                    foreach (XmlSchemaObject facet in contentModel.Facets)
                                    {
                                        if (facet is XmlSchemaEnumerationFacet)
                                        {
                                            tipoDato.ListaValoresToken.Add((facet as XmlSchemaEnumerationFacet).Value);
                                        }
                                    }
                                }

                            }
                            taxonomiaOriginal.TiposDeDatoXbrlPorNombre.Add(schemaType.QualifiedName.ToString(), tipoDato);
                        }
                    }
                }


                foreach (string rolTypeKey in taxonomiaIncorporar.RolesTaxonomia.Keys)
                {
                    RoleType roleType = taxonomiaIncorporar.RolesTaxonomia[rolTypeKey];

                    if (taxonomiaIncorporar.ConjuntoArbolesLinkbase[rolTypeKey].ContainsKey(LinkbasePresentacion.RolePresentacionLinkbaseRef))
                    {
                        if (!taxonomiaOriginal.RolesPresentacion.Any(x => x.Uri.Equals(roleType.RolURI.ToString())))
                        {

                            var rol = new RolDto<EstructuraFormatoDto> { Nombre = roleType.Definicion, Uri = roleType.RolURI.ToString() };

                            ArbolLinkbase linkbasePresentacion = taxonomiaIncorporar.ConjuntoArbolesLinkbase[rolTypeKey][LinkbasePresentacion.RolePresentacionLinkbaseRef];

                            if (linkbasePresentacion.NodoRaiz.Elemento is RoleType)
                            {
                                rol.Estructuras = new List<EstructuraFormatoDto>();
                                if (linkbasePresentacion.NodoRaiz.ConectoresSalientes != null)
                                {
                                    foreach (ConectorLinkbase conector in linkbasePresentacion.NodoRaiz.ConectoresSalientes)
                                    {
                                        bool esDimensional = false;
                                        rol.Estructuras.Add(ProcesarNodoArbol(conector.NodoSiguiente, (ArcoPresentacion)conector.Arco, taxonomiaOriginal.ConceptosPorId, out esDimensional));
                                        if (esDimensional)
                                        {
                                            rol.EsDimensional = true;
                                        }
                                    }
                                }
                            }

                            taxonomiaOriginal.RolesPresentacion.Add(rol);

                        }



                    }

                    if (taxonomiaIncorporar.ConjuntoArbolesLinkbase[rolTypeKey].ContainsKey(LinkbaseCalculo.RoleCalculoLinkbaseRef))
                    {

                        if (!taxonomiaOriginal.RolesCalculo.Any(x => x.Uri.Equals(roleType.RolURI.ToString())))
                        {
                            RolCalculoDTO rolCalculo = new RolCalculoDTO();

                            rolCalculo.Nombre = roleType.Definicion;
                            rolCalculo.Uri = roleType.RolURI.ToString();

                            ArbolLinkbase linkbaseCalculo = taxonomiaIncorporar.ConjuntoArbolesLinkbase[rolTypeKey][LinkbaseCalculo.RoleCalculoLinkbaseRef];

                            IList<Arco> arcosCalculo = null;

                            foreach (var linkbase in taxonomiaIncorporar.RolesTaxonomia[rolTypeKey].Linkbases.Values)
                            {
                                if (linkbase is LinkbaseCalculo)
                                {
                                    arcosCalculo = linkbase.ArcosFinales;
                                }
                            }

                            if (arcosCalculo != null)
                            {
                                IDictionary<string, IList<SumandoCalculoDto>> sumatoriasAValidar = new Dictionary<string, IList<SumandoCalculoDto>>();
                                foreach (ArcoCalculo arco in arcosCalculo.Where(arc => arc is ArcoCalculo))
                                {
                                    if (ArcoCalculo.SummationItemRole.Equals(arco.ArcoRol))
                                    {
                                        foreach (ElementoLocalizable desde in arco.ElementoDesde)
                                        {
                                            if (!sumatoriasAValidar.ContainsKey(desde.Destino.Id))
                                            {
                                                sumatoriasAValidar.Add(desde.Destino.Id, new List<SumandoCalculoDto>());
                                            }
                                            foreach (ElementoLocalizable elementoHacia in arco.ElementoHacia)
                                            {
                                                sumatoriasAValidar[desde.Destino.Id].Add(new SumandoCalculoDto
                                                {
                                                    IdConcepto = elementoHacia.Destino.Id,
                                                    Peso = arco.Peso
                                                });
                                            }
                                        }
                                    }
                                }
                                rolCalculo.OperacionesCalculo = sumatoriasAValidar;
                                taxonomiaOriginal.RolesCalculo.Add(rolCalculo);
                            }
                        }


                    }
                    if (taxonomiaIncorporar.ConjuntoArbolesLinkbase[rolTypeKey].ContainsKey(LinkbaseDefinicion.RolDefitionLinkbaseRef))
                    {

                        if (!taxonomiaOriginal.RolesDefinicion.Any(x => x.Uri.Equals(roleType.RolURI.ToString())))
                        {
                            var rol = new RolDto<EstructuraFormatoDto> { Nombre = roleType.Definicion, Uri = roleType.RolURI.ToString() };

                            ArbolLinkbase linkbase = taxonomiaIncorporar.ConjuntoArbolesLinkbase[rolTypeKey][LinkbaseDefinicion.RolDefitionLinkbaseRef];

                            if (linkbase.NodoRaiz.Elemento is RoleType)
                            {
                                rol.Estructuras = new List<EstructuraFormatoDto>();
                                if (linkbase.NodoRaiz.ConectoresSalientes != null)
                                {
                                    foreach (ConectorLinkbase conector in linkbase.NodoRaiz.ConectoresSalientes)
                                    {
                                        //Omitir estructuras de arcos dimension-default, estas se colocan en otro inventario diferente
                                        rol.Estructuras.Add(ProcesarNodoArbol(conector.NodoSiguiente, (ArcoDefinicion)conector.Arco, taxonomiaOriginal.ConceptosPorId));
                                    }
                                }
                            }
                            taxonomiaOriginal.RolesDefinicion.Add(rol);
                        }
                    }
                }


                foreach (string rolTypeKey in taxonomiaIncorporar.RolesTaxonomia.Keys)
                {
                    RoleType roleType = taxonomiaIncorporar.RolesTaxonomia[rolTypeKey];

                    if (taxonomiaIncorporar.ConjuntoArbolesLinkbase[rolTypeKey].ContainsKey(LinkbaseEtiqueta.RoleLabelLinkbaseRef))
                    {
                        ArbolLinkbase linkbaseEtiqueta = taxonomiaIncorporar.ConjuntoArbolesLinkbase[rolTypeKey][LinkbaseEtiqueta.RoleLabelLinkbaseRef];

                        if (linkbaseEtiqueta.NodoRaiz.Elemento is RoleType)
                        {
                            foreach (ConectorLinkbase conector in linkbaseEtiqueta.NodoRaiz.ConectoresSalientes)
                            {
                                ProcesarNodoArbol(conector.NodoSiguiente, (ArcoEtiqueta)conector.Arco, taxonomiaOriginal.ConceptosPorId, taxonomiaOriginal.IdiomasTaxonomia);
                            }
                        }
                    }

                    if (taxonomiaIncorporar.ConjuntoArbolesLinkbase[rolTypeKey].ContainsKey(LinkbaseReferencia.RoleReferenceLinkbaseRef))
                    {
                        ArbolLinkbase linkbaseReferencia = taxonomiaIncorporar.ConjuntoArbolesLinkbase[rolTypeKey][LinkbaseReferencia.RoleReferenceLinkbaseRef];

                        if (linkbaseReferencia.NodoRaiz.Elemento is RoleType)
                        {
                            foreach (ConectorLinkbase conector in linkbaseReferencia.NodoRaiz.ConectoresSalientes)
                            {
                                ProcesarNodoArbol(conector.NodoSiguiente, (ArcoReferencia)conector.Arco, taxonomiaOriginal.ConceptosPorId);
                            }
                        }
                    }
                }

                //Se obtienen las etiquetas de los roles
                if (taxonomiaIncorporar.RolesTaxonomia.ContainsKey(EspacioNombresConstantes.Standard2008LinkRoleType))
                {
                    if (taxonomiaIncorporar.ConjuntoArbolesLinkbase[EspacioNombresConstantes.Standard2008LinkRoleType].ContainsKey(LinkbaseEtiqueta.RolUnspecifiedLinkbaseRef))
                    {
                        ArbolLinkbase linkbaseEtiquetaRol = taxonomiaIncorporar.ConjuntoArbolesLinkbase[EspacioNombresConstantes.Standard2008LinkRoleType][LinkbaseReferencia.RolUnspecifiedLinkbaseRef];

                        foreach (NodoLinkbase nodeLinkBase in linkbaseEtiquetaRol.IndicePorId.Values)
                        {
                            if (nodeLinkBase.Elemento is RoleType)
                            {
                                ProcesarNodoArbol(nodeLinkBase, taxonomiaOriginal.EtiquetasRol);
                            }
                        }
                    }
                }



                //Dimension defaults

                foreach (var dimDefault in taxonomiaIncorporar.ObtenerDimensionesDefaultsGlobales())
                {
                    if (!taxonomiaOriginal.DimensionDefaults.ContainsKey(dimDefault.Key.Id))
                    {
                        taxonomiaOriginal.DimensionDefaults.Add(dimDefault.Key.Id, dimDefault.Value.Id);
                    }

                }

                taxonomiaOriginal.RolesPresentacion = taxonomiaOriginal.RolesPresentacion.OrderBy(x => x.Nombre).ToList();

                //Declaracion de hipercubos de la taxonomía
                if (taxonomiaIncorporar.ListaHipercubos != null)
                {
                    foreach (var keyValHipercubo in taxonomiaIncorporar.ListaHipercubos)
                    {
                        foreach (var hipercubo in keyValHipercubo.Value)
                        {
                            if (!taxonomiaOriginal.ListaHipercubos.ContainsKey(hipercubo.Rol.RolURI.ToString()) &&
                                !taxonomiaOriginal.ListaHipercubos[hipercubo.Rol.RolURI.ToString()].Any(x => x.IdConceptoHipercubo.Equals(hipercubo.DeclaracionElementoPrimario.Elemento.Id)))
                            {
                                var hipercuboDto = new HipercuboDto()
                                {
                                    IdConceptoHipercubo = hipercubo.DeclaracionElementoPrimario.Elemento.Id,
                                    Cerrado = hipercubo.Cerrado,
                                    ArcRoleDeclaracion = hipercubo.ArcRoleDeclaracion,
                                    Rol = hipercubo.Rol.RolURI.ToString(),
                                    TipoElementoContexto = hipercubo.ElementoContexto.Valor,
                                    Dimensiones = new List<string>(),
                                    ElementosPrimarios = new List<string>(),
                                    EstructuraDimension = new Dictionary<string, IList<EstructuraFormatoDto>>()
                                };
                                foreach (var dimensionXbrl in hipercubo.ListaDimensiones)
                                {
                                    hipercuboDto.Dimensiones.Add(dimensionXbrl.ConceptoDimension.Id);
                                    foreach (var miembro in dimensionXbrl.MiembrosDominio)
                                    {
                                        if (taxonomiaOriginal.ConceptosPorId.ContainsKey(miembro.Id))
                                        {
                                            taxonomiaOriginal.ConceptosPorId[miembro.Id].EsMiembroDimension = true;
                                        }
                                    }

                                }
                                foreach (var elementoPrimarioXbrl in hipercubo.ObtenerElementosPrimarios())
                                {
                                    hipercuboDto.ElementosPrimarios.Add(elementoPrimarioXbrl.Id);
                                }
                                AgregarEstructuraDimensionesAHipercubo(hipercuboDto, taxonomiaOriginal);
                                if (!taxonomiaOriginal.ListaHipercubos.ContainsKey(hipercuboDto.Rol))
                                {
                                    taxonomiaOriginal.ListaHipercubos.Add(hipercuboDto.Rol, new List<HipercuboDto>());
                                }
                                taxonomiaOriginal.ListaHipercubos[hipercuboDto.Rol].Add(hipercuboDto);
                            }


                        }
                    }
                }
            }
            catch (Exception ex)
            {
                var detalleError = new Dictionary<string, object>()
                {
                    { "Exception", ex },
                    { "taxonomiaOriginal", taxonomiaOriginal == null ? (Object)"null" : taxonomiaOriginal},
                    { "taxonomiaIncorporar", taxonomiaIncorporar == null ? (Object)"null" : taxonomiaIncorporar},
                };
                LogUtil.Error(detalleError);
                throw;
            }
        }


        /// <summary>
        /// Valida que los valores de los hechos sean válidos respecto a su tipo de dato, en caso de no ser válidos
        /// se asigna un valor predeterminado válido.
        /// </summary>
        /// <param name="instanciaDto">Documento de Instancia a validar</param>
        public void AjustarValoresDeHechosInvalidos(DocumentoInstanciaXbrlDto instanciaDto)
        {
            var fechaDefault = XmlUtil.ToUnionDateTimeString(new DateTime());
            foreach(var hecho in instanciaDto.HechosPorId.Values){
                
                if (hecho.IdConcepto != null && instanciaDto.Taxonomia != null && instanciaDto.Taxonomia.ConceptosPorId.ContainsKey(hecho.IdConcepto))
                {
                    UtilAbax.ActualizarValorHecho(instanciaDto.Taxonomia.ConceptosPorId[hecho.IdConcepto], hecho, hecho.Valor, fechaDefault);
                }
            }
        }
    }
}
