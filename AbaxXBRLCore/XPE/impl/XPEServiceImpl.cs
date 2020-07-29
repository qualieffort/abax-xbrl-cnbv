using AbaxXBRL.Constantes;
using AbaxXBRL.Taxonomia.Impl;
using AbaxXBRL.Util;
using AbaxXBRLCore.Common.Cache;
using AbaxXBRLCore.Common.Cache.Impl;
using AbaxXBRLCore.Common.Constants;
using AbaxXBRLCore.Common.Converter;
using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.Viewer.Application.Dto;
using AbaxXBRLCore.XPE.Common;
using AbaxXBRLCore.XPE.Common.Util;
using AbaxXBRLCore.XPE.Constants;
using Ionic.Zip;
using java.io;
using java.net;
using java.util;
using javax.xml.transform;
using javax.xml.transform.dom;
using javax.xml.transform.stream;
using net.sf.saxon.value;
using org.apache.xerces.dom;
using org.w3c.dom;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading;
using ubmatrix.xbrl.api.model.src;
using ubmatrix.xbrl.api.model.xbrl.instance.src;
using ubmatrix.xbrl.api.model.xbrl.src;
using ubmatrix.xbrl.api.model.xbrl.taxonomy.src;
using ubmatrix.xbrl.common.activation.src;
using ubmatrix.xbrl.common.formatter.src;
using ubmatrix.xbrl.common.memo.src;
using ubmatrix.xbrl.common.memo.uriResolver.src;
using ubmatrix.xbrl.common.src;
using ubmatrix.xbrl.common.utility.src;
using ubmatrix.xbrl.domain.query.src;
using ubmatrix.xbrl.domain.relationship.src;
using ubmatrix.xbrl.domain.src;
using ubmatrix.xbrl.domain.xbrl21Domain.dts.src;
using ubmatrix.xbrl.domain.xbrl21Domain.instance.src;
using ubmatrix.xbrl.domain.xbrl21Domain.src;
using ubmatrix.xbrl.domain.xbrl21Domain.taxonomy.src;
using ubmatrix.xbrl.impl.instance.src;
using ubmatrix.xbrl.src;
using ubmatrix.xbrl.validation.formula.assertion.src;
using ubmatrix.xbrl.validation.formula.src;

namespace AbaxXBRLCore.XPE.impl
{
    /// <summary>
    /// Implementación del servicio con los métodos necesarios para consumir la información de instancias
    /// y taxonomías cargadas por XPE
    /// </summary>
    public class XPEServiceImpl : XPEService
    {
        /// <summary>
        /// Nombre de la bandera de utilería para el proceso de linkbases que indica si es dimensional
        /// </summary>
        private const String ES_DIMENSIONAL = "esDimensional";

        private static Object _lock = new Object();

        private URI s_defaultLinkRole = new URI(XbrlDomainUri.c_defaultLinkRoleUri);
        /// <summary>
        /// Constructor privado
        /// </summary>
        private XPEServiceImpl()
        {
            //Constructor privado
        }
        /// <summary>
        /// Instancia Singleton del servicio
        /// </summary>
        private static XPEServiceImpl _service = null;
        /// <summary>
        /// Instancia de configuración del procesador
        /// </summary>
        private Configuration configInstance = null;
        /// <summary>
        /// Localización del path de coreroot
        /// </summary>
        private String _coreroot = null;
        /// <summary>
        /// Mapa de propiedades
        /// </summary>
        private IDictionary<string, string> _propiedades = null;
        /// <summary>
        /// Mapa de características
        /// </summary>
        private IDictionary<String, Boolean> _feats = null;
        /// <summary>
        /// Idioma configurado
        /// </summary>
        private String lang = null;
        /// <summary>
        /// Formatter para los mensajes localizados
        /// </summary>
        private IFormatter m_formatter = null;
        /// <summary>
        /// URI resolver para operaciones utilizando URI's
        /// </summary>
        private IURIResolver m_resolver = null;
        /// <summary>
        /// Bandera de incialización del procesador
        /// </summary>
        private Boolean inicializadoOk = false;
        /// <summary>
        /// Instancia con la que se inicializa la configuración
        /// </summary>
        private Xbrl xbrlInternalProc = null;
        /// <summary>
        /// Cache interno de taxonomía, evita cerrar los documentos de taxonomía para mejorar el desempeño
        /// </summary>
        private IDictionary<string, Xbrl> xbrlTaxPreload = null;
        /// <summary>
        /// Lista de errores generados durante la inicialización
        /// </summary>
        private IList<ErrorCargaTaxonomiaDto> listaErroresInicializacion = null;
        /// <summary>
        /// Cache para el manejo de las taxonomías en memoria.
        /// </summary>
        private static CacheTaxonomiaEnMemoriaXBRL CACHE_TAXONOMIAS = new CacheTaxonomiaEnMemoriaXBRL();
        /// <summary>
        /// Indica si las URL de taxonomías y schema refs van a ser forzadas de https a http
        /// </summary>
        private bool ForzarEsquemaHttp = false;

        public static XPEService GetInstance(bool _forzarHttp=false)
        {
            //Inicializar el servicio
            lock (_lock)
            {
                if (_service == null)
                {
                    _service = new XPEServiceImpl();
                    _service.ForzarEsquemaHttp = _forzarHttp;
                    _service.Init();
                }
            }
            return _service;
        }

        public void SetProperty(string prop, string value)
        {
            _propiedades.Add(prop, value);
        }

        public void SetFeature(string feat, bool value)
        {
            _feats.Add(feat, value);
        }

        public void SetCoreRoot(string coreRoot)
        {
            _coreroot = coreRoot;
        }

        public void SetLang(string lng)
        {
            lang = lng;
        }

        public string GetLang()
        {
            return lang;
        }

        public string GetCoreRoot()
        {
            return _coreroot;
        }


        /// <summary>
        /// Obtiene un input stream de Java a partir del stream en memoria de .net
        /// </summary>
        /// <param name="archivo"></param>
        /// <returns></returns>
        private InputStream ObtenerJavaInputStream(System.IO.Stream archivo)
        {
            byte[] buffer = new byte[16 * 1024];
            using (MemoryStream ms = new MemoryStream())
            {
                int read;
                while ((read = archivo.Read(buffer, 0, buffer.Length)) > 0)
                {
                    ms.Write(buffer, 0, read);
                }
                return new ByteArrayInputStream(ms.ToArray());
            }
        }

        public TaxonomiaDto CargarTaxonomiaXbrl(string fileUrl, IList<Viewer.Application.Dto.ErrorCargaTaxonomiaDto> errores, Boolean mantenerEnCache)
        {
            Xbrl xbrl = Xbrl.newInstance();
            TaxonomiaDto taxonomiaFinal = null;
            String loadUrl = fileUrl;
            try
            {
                IMemo[] memosActuales = null;
                List<IMemo> mensajesError = new List<IMemo>();
                if (ForzarEsquemaHttp)
                {
                    //Forzar las direcciones HTTPS a HTTP
                    if(fileUrl.StartsWith("https") || fileUrl.StartsWith("HTTPS"))
                    {

                        loadUrl = fileUrl.Replace("https://", "http://").Replace("HTTPS://","HTTP://");
                    }
                }
                if (xbrl.load(loadUrl, true, true))
                {

                    xbrl.validate(false);
                    memosActuales = xbrl.getNativeMemos();
                    if (memosActuales != null)
                    {
                        foreach (var memo in memosActuales)
                        {
                            mensajesError.Add(memo);
                        }
                    }
                    xbrl.compileFormulas();
                    taxonomiaFinal = CrearTaxonomiaAPartirDeDefinicionXbrl(xbrl);
                }
                else
                {
                    memosActuales = xbrl.getNativeMemos();
                    if (memosActuales != null)
                    {
                        foreach (var memo in memosActuales)
                        {
                            mensajesError.Add(memo);
                        }
                    }
                }
                if (mensajesError.Count > 0)
                {
                    foreach (IMemo memo in mensajesError)
                    {
                        String mensaje = GetStringResource(memo, m_resolver, lang, m_formatter);

                        if (mensaje != null)
                        {
                            ErrorCargaTaxonomiaDto error = new ErrorCargaTaxonomiaDto();
                            error.Mensaje = mensaje;
                            error.Severidad = ErrorCargaTaxonomiaDto.SEVERIDAD_ERROR;
                            errores.Add(error);
                        }
                    }
                }

            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
                ErrorCargaTaxonomiaDto err = new ErrorCargaTaxonomiaDto();
                err.Severidad = ErrorCargaTaxonomiaDto.SEVERIDAD_FATAL;
                err.Mensaje = ex.Message;
                errores.Add(err);
                //cerrr la instancia
                if (xbrl != null)
                {
                    try
                    {
                        xbrl.close();
                        xbrl = null;
                    }
                    catch (Exception e)
                    {
                        LogUtil.Error(e);
                        Debug.WriteLine(e.StackTrace);
                    }
                }
            }
            if (xbrl != null)
            {
                if (mantenerEnCache && !this.xbrlTaxPreload.ContainsKey(fileUrl))
                {
                    this.xbrlTaxPreload.Add(fileUrl, xbrl);
                }
                else
                {
                    try
                    {
                        xbrl.close();
                        xbrl = null;
                    }
                    catch (Exception e)
                    {
                        LogUtil.Error(e);
                        Debug.WriteLine(e.StackTrace);
                    }
                }

            }
            return taxonomiaFinal;
        }
        /// <summary>
        /// Inicializa el procesador con la configuración asignada
        /// </summary>
        /// <param name="errores">Lista de errores a llenar durante la inicialización</param>
        /// <returns>True si la inicialización es correcta</returns>
        private bool Init()
        {
            if (configInstance != null)
            {
                return true;
            }
            LogUtil.Info("Inicializando Procesador XBRL (forzar esquemas https a http = "+ForzarEsquemaHttp+")");
            listaErroresInicializacion = new List<ErrorCargaTaxonomiaDto>();
            xbrlTaxPreload = new Dictionary<string, Xbrl>();
            _propiedades = new Dictionary<string, string>();
            _feats = new Dictionary<string, Boolean>();
            lang = "es";
            Xbrl xbrlProc = null;
            try
            {
                this.configInstance = Configuration.getInstance();



                _coreroot = this.configInstance.getCoreRoot();
                LogUtil.Info("COREROOT:" + _coreroot);
                this.configInstance.setProperty(Configuration.c_logging, "false");
                                
                this.configInstance.setFormulaUnsatisfiedEvaluationThreshold(100);
                this.configInstance.setValidationThreshold(100);
                this.configInstance.setMode(Configuration.s_desktopMode);
                this.configInstance.setProperty(Configuration.c_workOffline, "false");
                xbrlProc = Xbrl.getInstance();

                this.configInstance.setLanguage(lang);

                var mensajesError = new List<IMemo>();

                try
                {
                    this.configInstance.clearWebCache();
                    this.configInstance.clearXPathExpressionCache();
                }
                catch (Exception ex)
                {
                    Debug.WriteLine(ex.StackTrace);
                }

                this.m_formatter = new ubmatrix.xbrl.common.formatter.src.Formatter();
                this.m_resolver = new ubmatrix.xbrl.common.memo.uriResolver.src.URIResolver();

                if (!xbrlProc.Initialize())
                {

                    this.inicializadoOk = false;
                    if (xbrlProc.getNativeMemos() != null)
                    {
                        listaErroresInicializacion = new List<ErrorCargaTaxonomiaDto>();
                        foreach (var memo in xbrlProc.getNativeMemos())
                        {
                            mensajesError.Add(memo);
                        }
                    }
                }
                else
                {
                    this.inicializadoOk = true;
                }

                if (mensajesError.Count > 0)
                {
                    this.inicializadoOk = false;
                    foreach (var memo in mensajesError)
                    {
                        ErrorCargaTaxonomiaDto error = new ErrorCargaTaxonomiaDto();
                        error.Severidad = ErrorCargaTaxonomiaDto.SEVERIDAD_FATAL;
                        error.Mensaje = GetStringResource(memo, m_resolver, lang, m_formatter);
                        listaErroresInicializacion.Add(error);
                    }
                }

            }
            catch (Exception ex)
            {
                LogUtil.Error(ex.StackTrace);
                inicializadoOk = false;
                ErrorCargaTaxonomiaDto error = new ErrorCargaTaxonomiaDto();
                error.Severidad = ErrorCargaTaxonomiaDto.SEVERIDAD_FATAL;
                error.Mensaje = "Ocurrió un error fatal al inicializar el procesador XBRL:" + ex.Message;
                listaErroresInicializacion.Add(error);
            }

            if (inicializadoOk)
            {
                this.xbrlInternalProc = xbrlProc;

            }
            LogUtil.Info("Procesador XBRL inicializado correctamente");
            return inicializadoOk;
        }

        public IList<ErrorCargaTaxonomiaDto> GetErroresInicializacion()
        {
            return listaErroresInicializacion;
        }

        public void Shutdown()
        {
            throw new NotImplementedException();
        }

        /// <summary>
        /// Recupera un mensaje en el lenguaje enviado como paraémtro utilizando la configuración del procesador 
        /// 
        /// </summary>
        /// <param name="memo">Objeto de Memo nativo</param>
        /// <param name="uriRes">Resolución de URI</param>
        /// <param name="lang">Lenguaje deseado</param>
        /// <param name="m_formatter">Helper de formato de textos</param>
        /// <returns>Mensaje localizado</returns>

        private String GetStringResource(IMemo memo, IURIResolver uriRes, String lang, IFormatter m_formatter)
        {
            //Resolve the memo uri
            Object[] particles = memo.getParticles();
            String substString = "";
            String severity = "Error";
            if (memo is FlyweightErrorMemo)
                severity = "Error";
            else if (memo is FlyweightWarningMemo)
                severity = "Advertencia";
            else if (memo is FlyweightFatalErrorMemo)
                severity = "Error Fatal";
            else if (memo is FlyweightInfoMemo)
                severity = "Info";
            else if (memo is FlyweightInconsistentMemo)
                severity = "Inconsistencia";

            String localizedString = uriRes.getUnsubstitutedLocalizedString(memo.getMemoURI(), lang);
            if (localizedString.Equals(memo.getMemoURI()))
            {
                localizedString = uriRes.getUnsubstitutedLocalizedString(memo.getMemoURI(), "en");
                
            }
            
           
            substString = m_formatter.getSubstitutedString(localizedString, particles);
            if (!substString.StartsWith(severity))
            {
                substString = severity + " : " + substString;
            }

            return substString;
        }

        /// <summary>
        /// Crea un objeto DTO con la representación de los elementos, linkbases y relaciones en la taxonomia
        /// enviada como parametro
        /// </summary>
        /// <param name="taxonomiaXbrl">Taxonomia a procesar</param>
        /// <returns>DTO con la representacion de la taxonomia</returns>
        private TaxonomiaDto CrearTaxonomiaAPartirDeDefinicionXbrl(Xbrl taxonomiaXbrl)
        {

            if (taxonomiaXbrl == null) return null;
            var taxonomia = new TaxonomiaDto
                                {
                                    RolesPresentacion = new List<RolDto<EstructuraFormatoDto>>(),
                                    RolesCalculo = new List<RolCalculoDTO>(),
                                    RolesDefinicion = new List<RolDto<EstructuraFormatoDto>>(),
                                    ConceptosPorId = new Dictionary<string, ConceptoDto>(),
                                    ConceptosPorNombre = new Dictionary<string, string>(),
                                    TiposDeDatoXbrlPorNombre = new Dictionary<string, TipoDatoXbrlDto>(),
                                    IdiomasTaxonomia = new Dictionary<string, string>(),
                                    EtiquetasRol = new Dictionary<string, IDictionary<string, EtiquetaDto>>(),
                                    ListaHipercubos = new Dictionary<string, IList<HipercuboDto>>(),
                                    DimensionDefaults = new Dictionary<string, string>()
                                };

            var prefixMap = new HashMap();
            prefixMap.put(XPEXPathConstants.UBMFT_prefix, XPEXPathConstants.UBMFT_Uri);
            prefixMap.put(XPEXPathConstants.UBMFDTS_prefix, XPEXPathConstants.UBMFDTS_Uri);
            prefixMap.put(XPEXPathConstants.UBMFL_prefix, XPEXPathConstants.UBMFL_Uri);
            IDTSNode entryNode = taxonomiaXbrl.getDTS().getEntryNode();
            if (entryNode.isInstance())
            {
                entryNode = (IDTSNode)taxonomiaXbrl.getDTS().getImmediatelyReferencedSchemas().get(0);
            }
            if (entryNode != null && entryNode.getLocationHandle() != null)
            {
                taxonomia.EspacioNombresPrincipal = entryNode.getLocationHandle().getTargetNamespaceUri();
            }
            //Tipos
            IDTSQuery dataTypesPath = findPath(entryNode, null, prefixMap, XPEXPathConstants.FUNC_DATA_TYPES);
            IDTSResultSet dataTypesResult = taxonomiaXbrl.getDTS().find(dataTypesPath);
            Iterator itDataTypes = dataTypesResult.getEnumerator();
            IDictionary<String, IXbrlDomain> mapaTiposDatos = new Dictionary<String, IXbrlDomain>();

            ValuedXbrlSchemaDomainImpl dataType = null;
            while (itDataTypes.hasNext())
            {
                dataType = (ValuedXbrlSchemaDomainImpl)itDataTypes.next();
                if (dataType.getName() != null)
                {
                    if (!mapaTiposDatos.ContainsKey(dataType.getNamespaceUri() + ":" + dataType.getLocalName()))
                    {
                        mapaTiposDatos.Add(dataType.getNamespaceUri() + ":" + dataType.getLocalName(), dataType);
                    }


                    TipoDatoXbrlDto tipoDato = new TipoDatoXbrlDto();
                    tipoDato.EspacioNombres = dataType.getNamespaceUri();
                    tipoDato.Nombre = dataType.getName();
                    String typeName = dataType.getName();
                    tipoDato.EsTipoDatoNumerico =
                            typeName.Equals(TiposDatoXBRL.XML_TYPE_DECIMAL) ||
                            typeName.Equals(TiposDatoXBRL.XML_TYPE_FLOAT) ||
                            typeName.Equals(TiposDatoXBRL.XML_TYPE_DOUBLE) ||
                            typeName.Equals(TiposDatoXBRL.XML_TYPE_INT) ||
                            typeName.Equals(TiposDatoXBRL.XML_TYPE_INTEGER) ||
                            typeName.Equals(TiposDatoXBRL.XML_TYPE_LONG) ||
                            typeName.Equals(TiposDatoXBRL.XML_TYPE_NEGATIVE_INTEGER) ||
                            typeName.Equals(TiposDatoXBRL.XML_TYPE_NON_NEGATIVE_INTEGER) ||
                            typeName.Equals(TiposDatoXBRL.XML_TYPE_NON_POSITIVE_INTEGER) ||
                            typeName.Equals(TiposDatoXBRL.XML_TYPE_POSITIVE_INTEGER);

                    tipoDato.EsTipoDatoFraccion = typeName.Equals(TiposDatoXBRL.FractionItemType);
                    tipoDato.EsTipoDatoMonetario = typeName.Equals(TiposDatoXBRL.MonetaryItemType);
                    tipoDato.EsTipoDatoAcciones = typeName.Equals(TiposDatoXBRL.SharesItemType);
                    tipoDato.EsTipoDatoPuro = typeName.Equals(TiposDatoXBRL.PureItemType);
                    tipoDato.EsTipoDatoBoolean = typeName.Equals(TiposDatoXBRL.BooleanItemType);
                    tipoDato.EsTipoDatoToken = false;

                    if (dataType.getValueObject() != null && dataType.getValueObject() is ElementNSImpl)
                    {
                        ElementNSImpl el = (ElementNSImpl)dataType.getValueObject();

                        if (XBRLConstants.COMPLEX_TYPE_ELEMENT.Equals(el.getLocalName()) &&
                                el.getFirstChild() != null && el.getFirstChild().getFirstChild() != null &&
                                el.getFirstChild().getFirstChild().getLocalName().Equals(XBRLConstants.RESTRICTION_ELEMENT))
                        {
                            tipoDato.EsTipoDatoToken = true;
                            tipoDato.ListaValoresToken = new List<String>();

                            for (int iNode = 0; iNode < el.getFirstChild().getFirstChild().getChildNodes().getLength(); iNode++)
                            {
                                Node nodoHijo = el.getFirstChild().getFirstChild().getChildNodes().item(iNode);
                                if (nodoHijo.getAttributes() != null && nodoHijo.getAttributes().getNamedItem(XBRLConstants.VALUE_ATTRIBUTE) != null)
                                {
                                    //Enumeration
                                    if (XBRLConstants.ENUMERATION_ELEMENT.Equals(nodoHijo.getLocalName()))
                                    {
                                        tipoDato.ListaValoresToken.Add(nodoHijo.getAttributes().getNamedItem(XBRLConstants.VALUE_ATTRIBUTE).getNodeValue());
                                    }
                                    //pattern
                                    if (XBRLConstants.PATTERN_ELEMENT.Equals(nodoHijo.getLocalName()))
                                    {
                                        tipoDato.Pattern = nodoHijo.getAttributes().getNamedItem(XBRLConstants.VALUE_ATTRIBUTE).getNodeValue();
                                    }
                                }
                            }
                        }
                    }
                    taxonomia.TiposDeDatoXbrlPorNombre[tipoDato.EspacioNombres + ":" + tipoDato.Nombre] = tipoDato;
                }
            }






            IDTSResultSet presentationLinkbases = taxonomiaXbrl.getDTS().find("/'" + XbrlDomainUri.c_PresentationLink + "'");
            Iterator itPres = presentationLinkbases.getEnumerator();

            var rolesPresentacionMap = new Dictionary<String, RolDto<EstructuraFormatoDto>>();
            while (itPres.hasNext())
            {
                var infoExtra = new Dictionary<String, String>();
                IXbrlDomain presentationLinkbase = (IXbrlDomain)itPres.next();
                String roleUri = (String)presentationLinkbase.getAttributeMap().get(XBRLConstants.ROLE_ATTRIBUTE);

                if (rolesPresentacionMap.ContainsKey(roleUri))
                {
                    continue;
                }

                String query = CommonUtilities.formatString(XPEXPathConstants.FUNC_LINK_ROOT,
                    new Object[] { roleUri, XBRLConstants.ARC_ROLE_PARENT_CHILD });
                IDTSQuery rootPath = findPath(entryNode, null, prefixMap, query);
                IDTSResultSet roots = taxonomiaXbrl.getDTS().find(rootPath);

                Iterator rootsEnum = roots.getEnumerator();

                RolDto<EstructuraFormatoDto> rol = new RolDto<EstructuraFormatoDto>();


                rol.Uri = roleUri;
                rol.Estructuras = new List<EstructuraFormatoDto>();

                agregarInformacionAdicionalARol(rol, prefixMap, taxonomiaXbrl);

                var arcosTo = new Dictionary<String, IList<IArcRelationship>>();
                var arcosFrom = new Dictionary<String, IList<IArcRelationship>>();

                ConsultarArcosLinkbase(XPEXPathConstants.FUNC_PRESENTATION_ARCS, rol.Uri, prefixMap, taxonomiaXbrl, arcosTo, arcosFrom);
                infoExtra.Add(ES_DIMENSIONAL, Boolean.FalseString.ToLower());
                while (rootsEnum.hasNext())
                {
                    IXbrlDomain root = (IXbrlDomain)rootsEnum.next();
                    rol.Estructuras.Add(ProcesarNodoPresentacion(taxonomia, root, taxonomiaXbrl.getDTS(), XBRLConstants.ARC_ROLE_PARENT_CHILD,
                        rol.Uri, prefixMap, 0, arcosTo, arcosFrom, infoExtra, mapaTiposDatos));
                }
                rol.EsDimensional = (Boolean.Parse(infoExtra[ES_DIMENSIONAL]));
                taxonomia.RolesPresentacion.Add(rol);
                rolesPresentacionMap.Add(roleUri, rol);
            }
            rolesPresentacionMap.Clear();
            rolesPresentacionMap = null;

            IDTSResultSet calculationLinkbases = taxonomiaXbrl.getDTS().find("/'" + XbrlDomainUri.c_CalculationLink + "'");
            Iterator itCalculation = calculationLinkbases.getEnumerator();

            while (itCalculation.hasNext())
            {
                IXbrlDomain calculationLinkbase = (IXbrlDomain)itCalculation.next();

                String query = CommonUtilities.formatString(XPEXPathConstants.FUNC_LINK_ROOT,
                        new Object[] { calculationLinkbase.getAttributeMap().get(XBRLConstants.ROLE_ATTRIBUTE), XBRLConstants.ARC_ROLE_SUMMATION_ITEM });
                IDTSQuery rootPath = findPath(entryNode, null, prefixMap, query);
                IDTSResultSet roots = taxonomiaXbrl.getDTS().find(rootPath);

                RolCalculoDTO rol = new RolCalculoDTO();
                rol.Nombre = String.Empty;
                rol.Uri = (String)calculationLinkbase.getAttributeMap().get(XBRLConstants.ROLE_ATTRIBUTE);

                IArcRelationship arcoCalculo = null;

                var sumatoriasAValidar = new Dictionary<String, IList<SumandoCalculoDto>>();
                IXbrlDomain from = null;
                IXbrlDomain to = null;
                Iterator arcosCalculo = ConsultarArcosLinkbase(XPEXPathConstants.FUNC_CALCULATION_ARCS, prefixMap, taxonomiaXbrl);
                while (arcosCalculo.hasNext())
                {
                    arcoCalculo = (IArcRelationship)arcosCalculo.next();
                    if (arcoCalculo.getRoleURI().Equals(rol.Uri))
                    {

                        from = (IXbrlDomain)arcoCalculo.getFrom();
                        to = (IXbrlDomain)arcoCalculo.getTo();

                        if (!sumatoriasAValidar.ContainsKey(from.getXmlId()))
                        {
                            sumatoriasAValidar.Add(from.getXmlId(), new List<SumandoCalculoDto>());
                        }
                        sumatoriasAValidar[from.getXmlId()].Add(new SumandoCalculoDto() { IdConcepto = to.getXmlId(), Peso = (decimal)arcoCalculo.getArcWeight() });
                    }
                }
                rol.OperacionesCalculo = sumatoriasAValidar;
                taxonomia.RolesCalculo.Add(rol);
            }


            //Referencias
            IDTSResultSet arcosReferencias = taxonomiaXbrl.getDTS().find("/'" + XbrlDomainUri.c_ReferenceArc + "'");
            Iterator itArcosReferencia = arcosReferencias.getEnumerator();
            while (itArcosReferencia.hasNext())
            {
                IArcRelationship arcoRef = (IArcRelationship)itArcosReferencia.next();

                IXbrlDomain concepto = (IXbrlDomain)arcoRef.getFrom();
                IXbrlDomain referencia = (IXbrlDomain)arcoRef.getTo();
                if (taxonomia.ConceptosPorId.ContainsKey(concepto.getXmlId()))
                {
                    ConceptoDto conceptoDto = taxonomia.ConceptosPorId[concepto.getXmlId()];
                    if (conceptoDto.Referencias == null)
                    {
                        conceptoDto.Referencias = new List<ReferenciaDto>();
                    }
                    conceptoDto.Referencias.Add(CrearReferenciaAPartirDeElementoXbrl(referencia));
                }
            }
            //Definicion
            IDTSResultSet definitionLinkbases = taxonomiaXbrl.getDTS().find("/'" + XbrlDomainUri.c_DefinitionLink + "'");
            Iterator itDefinition = definitionLinkbases.getEnumerator();
            IDTSResultSet arcosDefinicion = taxonomiaXbrl.getDTS().find("/'" + XbrlDomainUri.c_DefinitionArc + "'");
            var arcosDefinicionPorRol = OrgarnizarArcosPorRol(arcosDefinicion);
            while (itDefinition.hasNext())
            {
                IXbrlDomain definitionLink = (IXbrlDomain)itDefinition.next();
                var indiceEstructuras = new Dictionary<String, EstructuraFormatoDto>();
                var conceptosHijo = new List<String>();
                var declaracionesHipercubos = new Dictionary<IArcRelationship,EstructuraFormatoDto>();
                RolDto<EstructuraFormatoDto> rolDef = new RolDto<EstructuraFormatoDto>();
                rolDef.Nombre = String.Empty;
                rolDef.Uri = (String)definitionLink.getAttributeMap().get("role");
                rolDef.Estructuras = new List<EstructuraFormatoDto>();
                agregarInformacionAdicionalARol(rolDef, prefixMap, taxonomiaXbrl);
                /*var arcosFinalesRol = ObtenerArcosFinalesRol(arcosDefinicionPorRol, rolDef);
                arcosDefinicionPorRol[rolDef.Uri] = arcosFinalesRol;*/
                if (arcosDefinicionPorRol.ContainsKey(rolDef.Uri)) {
                    foreach (var arcoDef in arcosDefinicionPorRol[rolDef.Uri])
                    {
                        if (!EspacioNombresConstantes.DimensionDefaultRoleUri.Equals((String)arcoDef.getAttributeMap().get("arcrole")))
                        {
                            //Procesar el arco
                            IXbrlDomain conceptoXbrlFrom = (IXbrlDomain)arcoDef.getFrom();
                            IXbrlDomain conceptoXbrlTo = (IXbrlDomain)arcoDef.getTo();

                            ConceptoDto conceptoDtoFrom = CrearConceptoAPartirDeElementoXbrl(conceptoXbrlFrom, taxonomiaXbrl.getDTS(), prefixMap, taxonomia, mapaTiposDatos);
                            ConceptoDto conceptoDtoTo = CrearConceptoAPartirDeElementoXbrl(conceptoXbrlTo, taxonomiaXbrl.getDTS(), prefixMap, taxonomia, mapaTiposDatos);

                            if (!indiceEstructuras.ContainsKey(conceptoDtoFrom.Id))
                            {
                                EstructuraFormatoDto est = new EstructuraFormatoDto();
                                est.IdConcepto = conceptoDtoFrom.Id;
                                est.SubEstructuras = new List<EstructuraFormatoDto>();
                                indiceEstructuras.Add(conceptoDtoFrom.Id, est);
                            }
                            if (!taxonomia.ConceptosPorId.ContainsKey(conceptoDtoFrom.Id))
                            {
                                taxonomia.ConceptosPorId.Add(conceptoDtoFrom.Id, conceptoDtoFrom);
                                taxonomia.ConceptosPorNombre.Add(conceptoDtoFrom.EspacioNombres + ":" + conceptoDtoFrom.Nombre, conceptoDtoFrom.Id);
                            }

                            string targetRole = arcoDef.getAttributeValue(null, "targetRole");
                            if (!String.IsNullOrEmpty(targetRole))
                            {
                                var subEstructurasImportadas = ImportarEstructurasDeTargetRole(arcoDef, targetRole, arcosDefinicionPorRol, taxonomiaXbrl.getDTS(), taxonomia
                                    , prefixMap, mapaTiposDatos, declaracionesHipercubos);
                                foreach (var subTmp in subEstructurasImportadas)
                                {
                                    subTmp.RolArco = (String)arcoDef.getAttributeMap().get("arcrole");
                                    indiceEstructuras[conceptoDtoFrom.Id].SubEstructuras.Add(subTmp);
                                }
                            }
                            else
                            {
                                if (!indiceEstructuras.ContainsKey(conceptoDtoTo.Id))
                                {
                                    EstructuraFormatoDto est = new EstructuraFormatoDto();
                                    est.IdConcepto = conceptoDtoTo.Id;
                                    est.RolArco = (String)arcoDef.getAttributeMap().get("arcrole");
                                    est.SubEstructuras = new List<EstructuraFormatoDto>();
                                    indiceEstructuras.Add(conceptoDtoTo.Id, est);
                                }
                                indiceEstructuras[conceptoDtoFrom.Id].SubEstructuras.Add(indiceEstructuras[conceptoDtoTo.Id]);
                                if (!taxonomia.ConceptosPorId.ContainsKey(conceptoDtoTo.Id))
                                {
                                    taxonomia.ConceptosPorId.Add(conceptoDtoTo.Id, conceptoDtoTo);
                                    taxonomia.ConceptosPorNombre.Add(conceptoDtoTo.EspacioNombres + ":" + conceptoDtoTo.Nombre, conceptoDtoTo.Id);
                                }
                            }

                            if (XBRLConstants.ARC_ROLE_ALL.Equals((string)arcoDef.getAttributeMap().get(XBRLConstants.ARC_ROLE_ATTRIBUTE)) ||
                                XBRLConstants.ARC_ROLE_NOT_ALL.Equals((string)arcoDef.getAttributeMap().get(XBRLConstants.ARC_ROLE_ATTRIBUTE)))
                            {
                                //Inicia la declaración de un hipercubo, guardar el arco
                                declaracionesHipercubos.Add(arcoDef, indiceEstructuras[conceptoDtoFrom.Id]);
                            }
                            if (!taxonomia.ConceptosPorId.ContainsKey(conceptoDtoFrom.Id))
                            {
                                taxonomia.ConceptosPorId.Add(conceptoDtoFrom.Id, conceptoDtoFrom);
                                taxonomia.ConceptosPorNombre.Add(conceptoDtoFrom.EspacioNombres + ":" + conceptoDtoFrom.Nombre, conceptoDtoFrom.Id);
                            }
                            if (!taxonomia.ConceptosPorId.ContainsKey(conceptoDtoTo.Id))
                            {
                                taxonomia.ConceptosPorId.Add(conceptoDtoTo.Id, conceptoDtoTo);
                                taxonomia.ConceptosPorNombre.Add(conceptoDtoTo.EspacioNombres + ":" + conceptoDtoTo.Nombre, conceptoDtoTo.Id);
                            }
                        }
                    }
                }
                
                //Las estructuras que no son conceptos hijo, agregarlas a las raices
                foreach (String idEst in indiceEstructuras.Keys)
                {
                    if (!conceptosHijo.Contains(idEst))
                    {
                        rolDef.Estructuras.Add(indiceEstructuras[idEst]);
                    }
                }
                taxonomia.RolesDefinicion.Add(rolDef);
                foreach (var arcoHC in declaracionesHipercubos.Keys)
                {
                    CrearEstructuraHipercubo(arcoHC, declaracionesHipercubos[arcoHC], taxonomia, arcosDefinicionPorRol);
                }
            }

            //generic labels
            IDTSResultSet arcosGenericos = taxonomiaXbrl.getDTS().find("/'" + XbrlDomainUri.c_genericArc + "'");
            Iterator itGenarcs = arcosGenericos.getEnumerator();
            IArcRelationship arcoGenerico = null;
            while (itGenarcs.hasNext())
            {
                arcoGenerico = (IArcRelationship)itGenarcs.next();
                if (XBRLConstants.ARC_ROLE_ELEMENT_LABEL.Equals(arcoGenerico.getAttributeMap().get(XBRLConstants.ARC_ROLE_ATTRIBUTE)))
                {

                    if (arcoGenerico.getFrom() is Role)
                    {
                        Role roleFrom = (Role)arcoGenerico.getFrom();
                        IXbrlDomain labelTo = (IXbrlDomain)arcoGenerico.getTo();
                        String rolUri = (String)roleFrom.getAttributeMap().get(XBRLConstants.ROLE_URI_ATTRIBUTE);
                        String idioma = (String)labelTo.getAttributeMap().get(XBRLConstants.LANG_ATTRIBUTE);
                        String rolEtiqueta = (String)labelTo.getAttributeMap().get(XBRLConstants.ROLE_ATTRIBUTE);
                        if (idioma != null && rolUri != null)
                        {
                            EtiquetaDto etiqueta = new EtiquetaDto();
                            etiqueta.Idioma = idioma;
                            etiqueta.Rol = rolEtiqueta;
                            etiqueta.Valor = labelTo.getValue();
                            if (!taxonomia.EtiquetasRol.ContainsKey(idioma))
                            {
                                taxonomia.EtiquetasRol.Add(idioma, new Dictionary<String, EtiquetaDto>());
                            }
                            if (!taxonomia.EtiquetasRol[idioma].ContainsKey(rolUri))
                            {
                                taxonomia.EtiquetasRol[idioma].Add(rolUri, etiqueta);
                            }
                        }

                    }
                }
            }
            //Dimension defaults
            IDTSResultSet dimensionDefaultsRs = taxonomiaXbrl.getDTS().find("/'" + XbrlDomainUri.c_Dimension_DimensionDefault + "'");
            Iterator itDimDefaults = dimensionDefaultsRs.getEnumerator();
            IArcRelationship dimDefaultArc = null;
            while (itDimDefaults.hasNext())
            {
                dimDefaultArc = (IArcRelationship)itDimDefaults.next();
                if (!taxonomia.DimensionDefaults.ContainsKey(((IXbrlDomain)dimDefaultArc.getFrom()).getXmlId()))
                {
                taxonomia.DimensionDefaults.Add(((IXbrlDomain)dimDefaultArc.getFrom()).getXmlId(), ((IXbrlDomain)dimDefaultArc.getTo()).getXmlId());
            }
                else
                {
                    LogUtil.Error("Ya se agregó Dimension Default de : " + ((IXbrlDomain)dimDefaultArc.getFrom()).getXmlId() + " - hacia: " +
                        ((IXbrlDomain)dimDefaultArc.getTo()).getXmlId() + " - miembro default anterior: " + taxonomia.DimensionDefaults[((IXbrlDomain)dimDefaultArc.getFrom()).getXmlId()]);
                }
            }
            //Ordenar los roles de presentacion
            taxonomia.RolesPresentacion = taxonomia.RolesPresentacion.OrderBy(x => x.Nombre).ToList();
            return taxonomia;
        }
        /// <summary>
        /// Importa el árbol de estructuras consecutivas pertenecientes al target role
        /// </summary>
        /// <param name="arcoDef"></param>
        /// <param name="targetRole"></param>
        /// <param name="arcosDefinicionPorRol"></param>
        /// <returns></returns>
        private IList<EstructuraFormatoDto> ImportarEstructurasDeTargetRole(IArcRelationship arcoDef, string targetRole,
            IDictionary<string, IList<IArcRelationship>> arcosDefinicionPorRol, IDTS taxonomiaXbrl, TaxonomiaDto taxonomia,
            HashMap prefixMap, IDictionary<String, IXbrlDomain> mapaTiposDatos, Dictionary<IArcRelationship,EstructuraFormatoDto> declaracionesHipercubos)
        {
            var indiceEstructuras = new Dictionary<String, EstructuraFormatoDto>();
            var conceptosHijo = new List<String>();
            var arcosEnTarget = RecuperarArcosConsecutivos(arcosDefinicionPorRol, arcoDef, targetRole);

            foreach (var arcoActual in arcosEnTarget)
            {
                if (!EspacioNombresConstantes.DimensionDefaultRoleUri.Equals((String)arcoActual.getAttributeMap().get("arcrole")))
                {
                    //Procesar el arco
                    IXbrlDomain conceptoXbrlFrom = (IXbrlDomain)arcoActual.getFrom();
                    IXbrlDomain conceptoXbrlTo = (IXbrlDomain)arcoActual.getTo();

                    ConceptoDto conceptoDtoFrom = CrearConceptoAPartirDeElementoXbrl(conceptoXbrlFrom, taxonomiaXbrl, prefixMap, taxonomia, mapaTiposDatos);
                    ConceptoDto conceptoDtoTo = CrearConceptoAPartirDeElementoXbrl(conceptoXbrlTo, taxonomiaXbrl, prefixMap, taxonomia, mapaTiposDatos);

                    if (!indiceEstructuras.ContainsKey(conceptoDtoFrom.Id))
                    {
                        EstructuraFormatoDto est = new EstructuraFormatoDto();
                        est.IdConcepto = conceptoDtoFrom.Id;
                        est.SubEstructuras = new List<EstructuraFormatoDto>();
                        est.Importada = true;
                        indiceEstructuras.Add(conceptoDtoFrom.Id, est);
                    }

                    if (!indiceEstructuras.ContainsKey(conceptoDtoTo.Id))
                    {
                        EstructuraFormatoDto est = new EstructuraFormatoDto();
                        est.IdConcepto = conceptoDtoTo.Id;
                        est.RolArco = (String)arcoActual.getAttributeMap().get("arcrole");
                        est.SubEstructuras = new List<EstructuraFormatoDto>();
                        est.Importada = true;
                        indiceEstructuras.Add(conceptoDtoTo.Id, est);
                    }
                    if (!conceptosHijo.Contains(conceptoDtoTo.Id))
                    {
                        conceptosHijo.Add(conceptoDtoTo.Id);
                    }
                    string newTargetRole = arcoActual.getAttributeValue(null, "targetRole");
                    if (!String.IsNullOrEmpty(newTargetRole))
                    {
                        foreach (var subEst in ImportarEstructurasDeTargetRole(arcoActual, newTargetRole,
                            arcosDefinicionPorRol, taxonomiaXbrl, taxonomia, prefixMap, mapaTiposDatos, declaracionesHipercubos))
                        {
                            subEst.RolArco = (String)arcoActual.getAttributeMap().get("arcrole");
                            indiceEstructuras[conceptoDtoFrom.Id].SubEstructuras.Add(subEst);
                        }
                    }
                    else
                    {
                        indiceEstructuras[conceptoDtoFrom.Id].SubEstructuras.Add(indiceEstructuras[conceptoDtoTo.Id]);
                    }
                    if (XBRLConstants.ARC_ROLE_ALL.Equals((string)arcoActual.getAttributeMap().get(XBRLConstants.ARC_ROLE_ATTRIBUTE)) ||
                        XBRLConstants.ARC_ROLE_NOT_ALL.Equals((string)arcoActual.getAttributeMap().get(XBRLConstants.ARC_ROLE_ATTRIBUTE)))
                    {
                        //Inicia la declaración de un hipercubo, guardar el arco
                        declaracionesHipercubos.Add(arcoActual,indiceEstructuras[conceptoDtoFrom.Id]);
                    }
                    if (!taxonomia.ConceptosPorId.ContainsKey(conceptoDtoFrom.Id))
                    {
                        taxonomia.ConceptosPorId.Add(conceptoDtoFrom.Id, conceptoDtoFrom);
                        taxonomia.ConceptosPorNombre.Add(conceptoDtoFrom.EspacioNombres + ":" + conceptoDtoFrom.Nombre, conceptoDtoFrom.Id);
                    }
                    if (!taxonomia.ConceptosPorId.ContainsKey(conceptoDtoTo.Id))
                    {
                        taxonomia.ConceptosPorId.Add(conceptoDtoTo.Id, conceptoDtoTo);
                        taxonomia.ConceptosPorNombre.Add(conceptoDtoTo.EspacioNombres + ":" + conceptoDtoTo.Nombre, conceptoDtoTo.Id);
                    }
                }
                
            }
            var estructurasFinales = new List<EstructuraFormatoDto>();
            foreach (String idEst in indiceEstructuras.Keys)
            {
                if (!conceptosHijo.Contains(idEst))
                {
                    estructurasFinales.Add(indiceEstructuras[idEst]);
                }
            }
            return estructurasFinales;
        }

        /// <summary>
        /// Organiza una lista grande de arcos en los diferentes roles donde están declarados
        /// </summary>
        /// <param name="arcosDefinicion"></param>
        /// <returns></returns>
        private IDictionary<string, IList<IArcRelationship>> OrgarnizarArcosPorRol(IDTSResultSet arcos)
        {
            var resultado = new Dictionary<string, IList<IArcRelationship>>();
            for (int iArco = 0; iArco < arcos.getCount(); iArco++)
            {
                IArcRelationship arcoDef = (IArcRelationship)arcos.get(iArco);
                if (!resultado.ContainsKey(arcoDef.getRoleURI()))
                {
                    resultado[arcoDef.getRoleURI()] = new List<IArcRelationship>();
                }
                resultado[arcoDef.getRoleURI()].Add(arcoDef);
            }
            return resultado;
        }

        /// <summary>
        /// Obtiene la lista de arcos finales de un rol, considerando los arcos importados de un targetRole
        /// </summary>
        /// <param name="arcosDefinicion"></param>
        /// <returns></returns>
        private IList<IArcRelationship> ObtenerArcosFinalesRol(IDictionary<string, IList<IArcRelationship>> arcosPorRol,RolDto<EstructuraFormatoDto> rolBuscado)
        {
            var arcosFinales = new List<IArcRelationship>();
            var arcosAgregados = new List<IArcRelationship>();
            if (arcosPorRol.ContainsKey(rolBuscado.Uri))
            {
                var listaArcosIniciales = arcosPorRol[rolBuscado.Uri];
                foreach (var arcoDef in listaArcosIniciales)
                {
                    string targetRole = arcoDef.getAttributeValue(null, "targetRole");
                    arcosFinales.Add(arcoDef);
                    if (!String.IsNullOrEmpty(targetRole))
                    {
                        if (arcosPorRol.ContainsKey(targetRole))
                        {
                            var arcosEnTarget = RecuperarArcosConsecutivos(arcosPorRol, arcoDef, targetRole);
                            arcosFinales.AddRange(arcosEnTarget);
                        }
                    }
                }
            }


            return arcosFinales;
        }

        /// <summary>
        /// Recupera los arcos consecutivos de un conjunto de arcos en referencia a el arcoDef enviado como parámetro
        /// </summary>
        /// <param name="arcosPorRol"></param>
        /// <param name="arcoDef"></param>
        /// <param name="targetRole"></param>
        /// <returns></returns>
        private IList<IArcRelationship> RecuperarArcosConsecutivos(IDictionary<string, IList<IArcRelationship>> arcosPorRol, IArcRelationship arcoDefInicio, 
            string targetRole)
        {
            var arcosFinales = new List<IArcRelationship>();
            var arcosABuscar = arcosPorRol[targetRole];
            foreach(var arcoBuscado in arcosABuscar){
                if (arcoBuscado.getFrom().getIdentityIndex().Equals(arcoDefInicio.getTo().getIdentityIndex()))
                {
                    arcosFinales.Add(arcoBuscado);
                    string newtargetRole = arcoBuscado.getAttributeValue(null, "targetRole");
                    arcosFinales.AddRange(RecuperarArcosConsecutivos(arcosPorRol, arcoBuscado, newtargetRole != null ? newtargetRole : targetRole));
                }
            }
            return arcosFinales;
        }

        /// <summary>
        /// Crea el resumen de la declaración de un hipercubo de la taxonomía en base a su arco inicial de declaración
        /// </summary>
        /// <param name="arcoHC"></param>
        /// <param name="taxonomia"></param>
        /// <param name="arcosDefinicion"></param>
        private void CrearEstructuraHipercubo(IArcRelationship arcoHC,EstructuraFormatoDto estructuraFormatoDeclaracion , TaxonomiaDto taxonomia, 
            IDictionary<string, IList<IArcRelationship>> arcosDefinicionPorRol)
        {
            var elementoPrimario = (IXbrlDomain)arcoHC.getFrom();
            var elementoHipercubo = (IXbrlDomain)arcoHC.getTo();
            var hipercuboDto = new HipercuboDto();
            hipercuboDto.ArcRoleDeclaracion = (String)arcoHC.getAttributeMap().get(XBRLConstants.ARC_ROLE_ATTRIBUTE);
            hipercuboDto.Cerrado = false;
            if (arcoHC.getAttributeMap().get(XBRLConstants.CONTEXT_ELEMENT_ATTRIBUTE) != null)
            {
                hipercuboDto.TipoElementoContexto = (String)arcoHC.getAttributeMap().get(XBRLConstants.CONTEXT_ELEMENT_ATTRIBUTE);
            }
            if (arcoHC.getAttributeMap().get(XBRLConstants.CLOSED_ATTRIBUTE) != null)
            {
                hipercuboDto.Cerrado = Boolean.Parse((String)arcoHC.getAttributeMap().get(XBRLConstants.CLOSED_ATTRIBUTE));
            }
            hipercuboDto.IdConceptoHipercubo = elementoHipercubo.getXmlId();
            hipercuboDto.IdConceptoDeclaracionHipercubo = elementoPrimario.getXmlId();
            hipercuboDto.Rol = arcoHC.getRoleURI();
            hipercuboDto.Dimensiones = new List<string>();
            hipercuboDto.EstructuraDimension = new Dictionary<string, IList<EstructuraFormatoDto>>();
            hipercuboDto.ElementosPrimarios = new List<string>();
            //Buscar declaracion de dimensiones

            var cubo = estructuraFormatoDeclaracion.SubEstructuras.FirstOrDefault(x => x.RolArco == XBRLConstants.ARC_ROLE_ALL || x.RolArco == XBRLConstants.ARC_ROLE_NOT_ALL);
            
            if (cubo != null)
            {
                hipercuboDto.IdConceptoHipercubo = cubo.IdConcepto;
                foreach (var dim in cubo.SubEstructuras.Where(x => x.RolArco == XBRLConstants.ARC_ROLE_HYPERCUBE_DIMENSION))
                {
                    var idDimension = dim.IdConcepto;
                    hipercuboDto.Dimensiones.Add(idDimension);
                    hipercuboDto.EstructuraDimension[idDimension] = dim.SubEstructuras;
                    //Marcar como ID de miembro las estructuras de formato
                    MarcarComoMiembroDimension(hipercuboDto.EstructuraDimension[idDimension], taxonomia);
                }
            }
          
            
            //Buscar la declaración de elementos primarios
            hipercuboDto.ElementosPrimarios.Add(estructuraFormatoDeclaracion.IdConcepto);
            foreach(var estructura in estructuraFormatoDeclaracion.SubEstructuras.Where(x=>x.RolArco == XBRLConstants.ARC_ROLE_DOMAIN_MEMBER)){
                hipercuboDto.ElementosPrimarios.Add(estructura.IdConcepto);
                AgregarElementosEstructuraALista(estructura.SubEstructuras, hipercuboDto.ElementosPrimarios);
            }

            if (!taxonomia.ListaHipercubos.ContainsKey(arcoHC.getRoleURI()))
            {
                taxonomia.ListaHipercubos.Add(arcoHC.getRoleURI(), new List<HipercuboDto>());
            }
            taxonomia.ListaHipercubos[arcoHC.getRoleURI()].Add(hipercuboDto);
            //Si es un cubo negado con estructuras importadas entonces quitar el enlace para evitar duplicar muchas estructuras
            if (hipercuboDto.ArcRoleDeclaracion.Equals(XBRLConstants.ARC_ROLE_NOT_ALL) && arcoHC.getAttributeMap().get("targetRole") != null)
            {
                cubo.SubEstructuras = new List<EstructuraFormatoDto>();
            }

        }
        /// <summary>
        /// Asigna el atributo miembro de dimension = true
        /// </summary>
        /// <param name="listaEstructuras">Estructuras a marcar</param>
        private void MarcarComoMiembroDimension(IList<EstructuraFormatoDto> listaEstructuras, TaxonomiaDto taxonomia)
        {
            foreach (var est in listaEstructuras)
            {
                if (est.IdConcepto != null && taxonomia.ConceptosPorId.ContainsKey(est.IdConcepto))
                {
                    if (taxonomia.ConceptosPorId[est.IdConcepto].EsMiembroDimension == null)
                    {
                        taxonomia.ConceptosPorId[est.IdConcepto].EsMiembroDimension = true;
                        if (est.SubEstructuras != null)
                        {
                            MarcarComoMiembroDimension(est.SubEstructuras, taxonomia);
                        }
                    }
                }
            }
        }
        /// <summary>
        /// Busca el nodo de estructura formato que corresponde al ID de dimensión para obtener la estructura de sus hijos
        /// </summary>
        /// <param name="rol">Rol de la taxonomía donde se buscará</param>
        /// <param name="taxonomia">Taxonomía procesada</param>
        /// <param name="idDimension">Identificador de la dimensión buscada</param>
        /// <returns>Estrucutras hijo</returns>
        private IList<EstructuraFormatoDto> ObtenerEstructurasFormatoDeDimension(string rol, TaxonomiaDto taxonomia, string idDimension)
        {
            var rolDefinicion = taxonomia.RolesDefinicion.FirstOrDefault(x => x.Uri.Equals(rol));
            return ObtenerEstructuraFormato(rolDefinicion.Estructuras, idDimension);
        }
        /// <summary>
        /// Busca una estructura en el arbol de estructuras de formato
        /// </summary>
        /// <param name="listaEst">Estructura donde se busca</param>
        /// <param name="idDimension">Dimension o concepto buscado</param>
        /// <returns></returns>
        private IList<EstructuraFormatoDto> ObtenerEstructuraFormato(IList<EstructuraFormatoDto> listaEst, string idDimension)
        {
            if (listaEst == null) return null;
            foreach (var est in listaEst)
            {
                if (est.IdConcepto.Equals(idDimension))
                {
                    return est.SubEstructuras;
                }
                var estEncontrada = ObtenerEstructuraFormato(est.SubEstructuras, idDimension);
                if (estEncontrada != null)
                {
                    return estEncontrada;
                }
            }
            return null;
        }
        /// <summary>
        /// Recorre las estructuras del rol de definición donde se encuentra el hipercubo
        /// </summary>
        /// <param name="hipercubo">Declaración del hipercubo a llenar</param>
        /// <param name="taxonomia">Taxonomía procesada</param>
        /// <param name="conceptoId">ID del concepto que se agrega</param>
        private void AgregarEstructuraElementosPrimarios(HipercuboDto hipercubo, TaxonomiaDto taxonomia, string conceptoId)
        {
            var rolDefinicion = taxonomia.RolesDefinicion.FirstOrDefault(x => x.Uri.Equals(hipercubo.Rol));

            hipercubo.ElementosPrimarios.Add(conceptoId);
            foreach (var subEst in rolDefinicion.Estructuras)
            {
                AgregarHijosALista(subEst, hipercubo.ElementosPrimarios, conceptoId);
            }

        }

        private void AgregarHijosALista(EstructuraFormatoDto subEst, IList<string> listaConceptos, string conceptoId)
        {
            if (subEst.SubEstructuras == null)
            {
                return;
            }
            foreach (var estructura in subEst.SubEstructuras)
            {
                if (conceptoId.Equals(estructura.IdConcepto))
                {
                    AgregarElementosEstructuraALista(estructura.SubEstructuras, listaConceptos);
                    break;
                }
                AgregarHijosALista(estructura, listaConceptos, conceptoId);
            }
        }
        /// <summary>
        /// Agrega los elementos de una lista de estructuras y los hijos de estas a la lista de conceptos
        /// enviada como parámetro
        /// </summary>
        /// <param name="subEstructuras">Sub estructuras a examinar</param>
        /// <param name="listaConceptos">Lista de conceptos donde se agregan las estructuras</param>
        private void AgregarElementosEstructuraALista(IList<EstructuraFormatoDto> subEstructuras, IList<string> listaConceptos)
        {
            if (subEstructuras == null) return;
            foreach (var est in subEstructuras)
            {
                AgregarElementosEstructuraALista(est.SubEstructuras, listaConceptos);
                listaConceptos.Add(est.IdConcepto);
            }
        }

        /// <summary>
        /// Consulta y organiza los arcos del tipo enviados por la funcion de busqueda 
        /// </summary>
        /// <param name="funcionConsulta">Función Xpath a ejecutar</param>
        /// <param name="linkbaseRoleUri">URI del ELR a consultar</param>
        /// <param name="prefixMap">Mapa de prefijos de funciones</param>
        /// <param name="taxonomiaXbrl">Objeto de taxonomía XBRL</param>
        /// <param name="arcosTo">Mapa para colocar arcos hacia</param>
        /// <param name="arcosFrom">Mapa para colocar arcos desde</param>
        private void ConsultarArcosLinkbase(string funcionConsulta, string linkbaseRoleUri, HashMap prefixMap, Xbrl taxonomiaXbrl,
            Dictionary<string, IList<IArcRelationship>> arcosTo,
            Dictionary<string, IList<IArcRelationship>> arcosFrom)
        {
            IDTSNode entryNode = taxonomiaXbrl.getDTS().getEntryNode();
            IDTSQuery arcos = findPath(entryNode, null, prefixMap, funcionConsulta);
            IDTSResultSet resultadoArcos = taxonomiaXbrl.getDTS().find(arcos);
            Iterator iteradorArcos = resultadoArcos.getEnumerator();
            IArcRelationship arco = null;
            while (iteradorArcos.hasNext())
            {
                arco = (IArcRelationship)iteradorArcos.next();
                if (arco.getRoleURI().Equals(linkbaseRoleUri))
                {

                    String id = arco.getTo().getIdentityIndex();
                    if (arco.getTo() is IXbrlDomain)
                    {
                        id = ((IXbrlDomain)arco.getTo()).getXmlId();
                    }

                    if (!arcosTo.ContainsKey(id))
                    {
                        arcosTo.Add(id, new List<IArcRelationship>());
                    }
                    arcosTo[id].Add(arco);

                    id = arco.getFrom().getIdentityIndex();
                    if (arco.getFrom() is IXbrlDomain)
                    {
                        id = ((IXbrlDomain)arco.getFrom()).getXmlId();
                    }

                    if (!arcosFrom.ContainsKey(id))
                    {
                        arcosFrom.Add(id, new List<IArcRelationship>());
                    }
                    arcosFrom[id].Add(arco);
                }
            }
        }

        /// <summary>
        /// Consulta los cargos de un linkbase con la función enviada como paraémtro
        /// </summary>
        /// <param name="funcionConsulta">Función XPATH a ejecutar</param>
        /// <param name="prefixMap">Mapa de prefijos de funciones</param>
        /// <param name="taxonomia">Objeto de taxonomía a buscar</param>
        /// <returns>Arcos localizados</returns>
        private Iterator ConsultarArcosLinkbase(String funcionConsulta, HashMap prefixMap, Xbrl taxonomia)
        {
            IDTSNode entryNode = taxonomia.getDTS().getEntryNode();
            IDTSQuery arcos = findPath(entryNode, null, prefixMap, funcionConsulta);
            IDTSResultSet resultadoArcos = taxonomia.getDTS().find(arcos);
            return resultadoArcos.getEnumerator();
        }

        /// <summary>
        /// Crea el query para la ejecucion de la funcion de busqueda enviada como parametro
        /// </summary>
        /// <param name="node"></param>
        /// <param name="?"></param>
        /// <returns></returns>
        private IDTSQuery findPath(IDTSNode node, HashMap parametros, Map prefixMap, String query)
        {

            IDTSQuery path = null;
            ILocationHandle lh = node.getLocationHandle();
            IPrefixResolver resolver = lh.getPrefixResolver();
            String savedQuery = query;

            try
            {
                path = DTSPath.compile(query);

                if (path != null)
                    return path;
                else
                {
                    updateResolver(resolver, prefixMap);
                    path = new XPath20(resolver, parametros, savedQuery);
                    return path;
                }

            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex.StackTrace);
            }

            return null;
        }

        /// <summary>
        /// Recupera la informacion adicional del rol: definicion y etiquetas
        /// </summary>
        /// <param name="rol">Objeto de rol a complementar</param>
        /// <param name="prefixMap">Mapa de prefijos de busqueda</param>
        /// <param name="taxonomiaXbrl">Objeto de Taxonomia</param>
        private void agregarInformacionAdicionalARol(RolDto<EstructuraFormatoDto> rol, HashMap prefixMap, Xbrl taxonomiaXbrl)
        {

            HashMap parametros = new HashMap();
            parametros.put(XPEXPathConstants.PARAM_URI, rol.Uri);
            IDTSQuery roleTypeQuery = findPath(taxonomiaXbrl.getDTS().getEntryNode(), parametros, prefixMap, XPEXPathConstants.FUNC_ROLE);
            IDTSResultSet roleTypeRs = taxonomiaXbrl.getDTS().find(roleTypeQuery);
            if (roleTypeRs.getCount() > 0)
            {
                Role roleType = (Role)roleTypeRs.get(0);
                Iterator hijos = roleType.getChildren();
                if (hijos != null)
                {
                    while (hijos.hasNext())
                    {
                        Element hijo = (Element)hijos.next();
                        if (hijo.getLocalName().Equals(XBRLConstants.NAME_DEFINITION_LINKBASE))
                        {
                            rol.Nombre = hijo.getTextContent();
                            break;
                        }
                    }
                }
            }
        }

        /// <summary>
        /// Actualiza el mapa de prefijos y espacios de nombres
        /// </summary>
        /// <param name="resolver">resolver</param>
        /// <param name="prefixMap">Mapa de prefijos de funciones</param>
        protected static void updateResolver(IPrefixResolver resolver, Map prefixMap)
        {

            if (resolver == null && prefixMap != null)
                resolver = new ubmatrix.xbrl.common.xml.xPath.xerces.src.XercesPrefixResolverImpl();
            else if (prefixMap == null && resolver == null)
                return;
            if (prefixMap.size() > 0)
            {
                Iterator itr = ResetableIterator.getIterator(prefixMap.entrySet());
                Utility.resetIterator(itr);
                while (itr.hasNext())
                {
                    Map.Entry me = (Map.Entry)itr.next();
                    String prefix = (String)me.getKey();
                    String ns = (String)me.getValue();
                    resolver.addNamespace(prefix, ns);
                }
            }
        }

        /// <summary>
        /// Procesa de manera recursiva la estructura del arbol para preparar la estructura requerida 
        /// que sea independiente del procesador XBRL
        /// </summary>
        /// <param name="taxonomia">Objeto de taxonomía que se está creando</param>
        /// <param name="nodo">Nodo a procesar</param>
        /// <param name="dts">DTS orgien</param>
        /// <param name="arcoRole">URI del arco rol buscado para navegar a lo hijos</param>
        /// <param name="linkBaseRole">URI del ELR procesado actualmente</param>
        /// <param name="prefixMap">Mapa de prefijo de funciones de búsqueda</param>
        /// <param name="ident">Nivel de profundidad del árbol</param>
        /// <param name="arcosTo">Conjunto de nodos orgien de arcos</param>
        /// <param name="arcosFrom">Conjunto de nodos destino de arcos</param>
        /// <param name="infoExtra">Información extra a llenar durante el procesamiento</param>
        /// <param name="mapaTiposDatos">Tipos de datos originales leídos de su definición XML</param>
        /// <returns></returns>
        private EstructuraFormatoDto ProcesarNodoPresentacion(TaxonomiaDto taxonomia, IXbrlDomain nodo, IDTS dts, String arcoRole, String linkBaseRole, Map prefixMap, int ident,
            Dictionary<String, IList<IArcRelationship>> arcosTo, Dictionary<String, IList<IArcRelationship>> arcosFrom,
            Dictionary<String, String> infoExtra, IDictionary<String, IXbrlDomain> mapaTiposDatos)
        {

            if (!taxonomia.ConceptosPorId.ContainsKey(nodo.getXmlId()))
            {
                ConceptoDto conceptoTmp = CrearConceptoAPartirDeElementoXbrl(nodo, dts, prefixMap, taxonomia, mapaTiposDatos);
                taxonomia.ConceptosPorId.Add(nodo.getXmlId(), conceptoTmp);
                taxonomia.ConceptosPorNombre.Add(conceptoTmp.EspacioNombres + ":" + conceptoTmp.Nombre, conceptoTmp.Id);
            }
            ConceptoDto concepto = taxonomia.ConceptosPorId[nodo.getXmlId()];
            EstructuraFormatoDto estructura = new EstructuraFormatoDto();
            estructura.IdConcepto = concepto.Id;

            if (concepto.EsHipercubo)
            {
                if (!infoExtra.ContainsKey(ES_DIMENSIONAL))
                {
                    infoExtra.Add(ES_DIMENSIONAL, String.Empty);
                }
                infoExtra[ES_DIMENSIONAL] = Boolean.TrueString.ToLower();
            }

            //buscar etiqueta preferida
            if (arcosTo.ContainsKey(nodo.getXmlId()))
            {
                if (arcosTo[nodo.getXmlId()] != null && arcosTo[nodo.getXmlId()].Count > 0)
                {
                    IArcRelationship arco = arcosTo[nodo.getXmlId()][0];
                    estructura.RolEtiquetaPreferido = (String)arco.getAttributeMap().get(XBRLConstants.PREFERRED_LABEL_ATTRIBUTE);
                    arcosTo[nodo.getXmlId()].Remove(arco);
                }
                
            }


            HashMap parametros = new HashMap();
            parametros.put(XPEXPathConstants.PARAM_CONCEPT, nodo);
            parametros.put(XPEXPathConstants.PARAM_ARCROLE, arcoRole);
            parametros.put(XPEXPathConstants.PARAM_EL_ROLE, linkBaseRole);

            String childrenQuery = XPEXPathConstants.FUNC_CHILDREN;
            IDTSQuery childrenPath = findPath(dts.getEntryNode(), parametros, prefixMap, childrenQuery);
            IDTSResultSet children = dts.find(childrenPath);
            Iterator childrenEnum = children.getEnumerator();
            IXbrlDomain child = null;
            if (childrenEnum != null)
            {
                estructura.SubEstructuras = new List<EstructuraFormatoDto>();
                while (childrenEnum.hasNext())
                {
                    child = (IXbrlDomain)childrenEnum.next();
                    estructura.SubEstructuras.Add(ProcesarNodoPresentacion(taxonomia, child, dts, arcoRole, linkBaseRole, prefixMap, ident + 1, arcosTo, arcosFrom, infoExtra, mapaTiposDatos));
                }
            }
            return estructura;
        }

        /// <summary>
        /// Crea un concepto a partir de un elemento XBRL de la taxonomia.
        /// </summary>
        /// <param name="nodo">Elemento de la taxonomia a procesar</param>
        /// <param name="dts">DTS de la taxonomia</param>
        /// <param name="prefixMap">Mapa de prefijos de funciones</param>
        /// <param name="taxonomia">DTO creado a partir del elemento de la taxonomia</param>
        /// <param name="mapaTiposDatos">Mapa de tipos de datos obtenidos de la taxonomía</param>
        /// <returns>Objeto que representa al concepto en la taxonomía</returns>
        private ConceptoDto CrearConceptoAPartirDeElementoXbrl(IXbrlDomain nodo, IDTS dts, Map prefixMap, TaxonomiaDto taxonomia, IDictionary<String, IXbrlDomain> mapaTiposDatos)
        {

            if (taxonomia.ConceptosPorId.ContainsKey(nodo.getXmlId()))
            {
                return taxonomia.ConceptosPorId[nodo.getXmlId()];
            }


            ConceptoDto concepto = new ConceptoDto();
            HashMap parametros = new HashMap();
            parametros.put(XPEXPathConstants.PARAM_CONCEPT, nodo);

            IDTSQuery booleanPath = findPath(dts.getEntryNode(), parametros, prefixMap, XPEXPathConstants.FUNC_IS_ABSTRACT);
            IDTSResultSet booleanResult = dts.find(booleanPath);
            Iterator booleanIt = booleanResult.getEnumerator();
            if (booleanIt.hasNext())
            {
                concepto.EsAbstracto = (((BooleanValue)booleanIt.next()).getBooleanValue());
            }

            booleanPath = findPath(dts.getEntryNode(), parametros, prefixMap, XPEXPathConstants.FUNC_IS_NUMERIC);
            booleanResult = dts.find(booleanPath);
            booleanIt = booleanResult.getEnumerator();
            if (booleanIt.hasNext())
            {
                concepto.EsTipoDatoNumerico = ((BooleanValue)booleanIt.next()).getBooleanValue();
            }

            booleanPath = findPath(dts.getEntryNode(), parametros, prefixMap, XPEXPathConstants.FUNC_IS_FRACTION);
            booleanResult = dts.find(booleanPath);
            booleanIt = booleanResult.getEnumerator();
            if (booleanIt.hasNext())
            {
                concepto.EsTipoDatoFraccion = ((BooleanValue)booleanIt.next()).getBooleanValue();
            }

            concepto.Id = nodo.getXmlId();
            concepto.Nombre = nodo.getLocalName();
            concepto.EspacioNombres = nodo.getNamespaceUri();
            concepto.Etiquetas = new Dictionary<String, IDictionary<String, EtiquetaDto>>();
            concepto.TipoPeriodo = ((String)nodo.getAttributeMap().get(XBRLConstants.PERIOD_TYPE_ATTRIBUTE));
            concepto.AtributosAdicionales = new Dictionary<string, string>();

            Set atributos = nodo.getAttributeMap().keySet();

            Iterator attrIterator = atributos.iterator();
            while (attrIterator.hasNext())
            {
                String attrName = attrIterator.next().ToString();
                if(!attrName.Equals(XBRLConstants.BALANCE_ATTRIBUTE) &&
                    !attrName.Equals(XBRLConstants.SUBSTITUTION_GROUP_ATTRIBUTE) &&
                    !attrName.Equals(XBRLConstants.TYPE_ATTRIBUTE) &&
                    !attrName.Equals(XBRLConstants.ABSTRACT_ATTRIBUTE) &&
                    !attrName.Equals(XBRLConstants.PERIOD_TYPE_ATTRIBUTE) &&
                    !attrName.Equals(XBRLConstants.ID_ATTRIBUTE) &&
                    !attrName.Equals(XBRLConstants.NILLABLE_ATTRIBUTE) &&
                    !attrName.Equals(XBRLConstants.NAME_ATTRIBUTE))
                {

                        concepto.AtributosAdicionales[attrName] = nodo.getAttributeMap().get(attrName).ToString();

                }
                
               
            }

            if (nodo.getAttributeMap().get(XBRLConstants.BALANCE_ATTRIBUTE) != null)
            {
                if (ConceptoDto.CreditBalance.Equals(nodo.getAttributeMap().get(XBRLConstants.BALANCE_ATTRIBUTE).ToString()))
                {
                    concepto.Balance = ConceptoDto.CreditBalanceValue;
                }
                if (ConceptoDto.DebitBalance.Equals(nodo.getAttributeMap().get(XBRLConstants.BALANCE_ATTRIBUTE).ToString()))
                {
                    concepto.Balance = ConceptoDto.DebitBalanceValue;
                }
            }

            ubmatrix.xbrl.common.xml.src.QName qnameTipo = null;
            if (nodo.getAttributeMap().get(XBRLConstants.TYPE_ATTRIBUTE) != null)
            {
                qnameTipo = ubmatrix.xbrl.common.xml.src.QName.parse((String)nodo.getAttributeMap().get(XBRLConstants.TYPE_ATTRIBUTE));
            concepto.TipoDato = nodo.getNamespaceForPrefix(qnameTipo.getPrefix()) + ":" + qnameTipo.getLocalName();
            }

            ubmatrix.xbrl.common.xml.src.QName qnameGrupoSustitucion = ubmatrix.xbrl.common.xml.src.QName.parse((String)nodo.getAttributeMap().get(XBRLConstants.SUBSTITUTION_GROUP_ATTRIBUTE));
            
            IXbrlDomain dataType = (IXbrlDomain)dts.findSingle(findPath(dts.getEntryNode(), parametros, prefixMap, XPEXPathConstants.FUNC_DATA_TYPE));

            String tipoDatoBaseXbrl = ObtenerTipoDatoBaseXbrl(dataType, mapaTiposDatos);
            if (tipoDatoBaseXbrl != null)
            {
                concepto.TipoDatoXbrl = tipoDatoBaseXbrl;
            }
            else
            {
                concepto.TipoDatoXbrl = concepto.TipoDato;
            }

            if (ConceptoDto.SubstitutionGroupItem.Equals(qnameGrupoSustitucion.getLocalName()))
            {
                concepto.Tipo = ConceptoDto.Item;
            }
            if (ConceptoDto.SubstitutionGroupTuple.Equals(qnameGrupoSustitucion.getLocalName()))
            {
                concepto.Tipo = ConceptoDto.Tuple;
            }
            if (ConceptoDto.SubstitutionGroupHypercubeItem.Equals(qnameGrupoSustitucion.getLocalName()))
            {
                concepto.Tipo = ConceptoDto.HypercubeItem;
            }
            if (ConceptoDto.SubstitutionGroupDimensionItem.Equals(qnameGrupoSustitucion.getLocalName()))
            {
                concepto.Tipo = ConceptoDto.DimensionItem;
            }
            if (ConceptoDto.SubstitutionGroupPart.Equals(qnameGrupoSustitucion.getLocalName()))
            {
                concepto.Tipo = ConceptoDto.PartItem;
            }

            concepto.EsHipercubo = (concepto.Tipo != null ? concepto.Tipo == ConceptoDto.HypercubeItem : false);
            concepto.EsDimension = (concepto.Tipo != null ? concepto.Tipo == ConceptoDto.DimensionItem : false);

            concepto.EsTipoDatoToken = false;
            TipoDatoXbrlDto tipoDato;
            if (!String.IsNullOrEmpty(concepto.TipoDato) && taxonomia.TiposDeDatoXbrlPorNombre.TryGetValue(concepto.TipoDato, out tipoDato))
            {
                if (tipoDato.EsTipoDatoToken)
                {
                    concepto.EsTipoDatoToken = true;
                    concepto.ListaValoresToken = tipoDato.ListaValoresToken;
                }
            }
            //consultar etiquetas

            IDTSQuery etiquetasPath = findPath(dts, parametros, prefixMap, XPEXPathConstants.FUNC_LABEL_ARCS);
            IDTSResultSet arcosEtiquetas = dts.find(etiquetasPath);
            Iterator arcosIterator = arcosEtiquetas.getEnumerator();
            IArcRelationship arco = null;

            while (arcosIterator.hasNext())
            {
                arco = (IArcRelationship)arcosIterator.next();
                ValuedXbrlInstanceDomainImpl destino = (ValuedXbrlInstanceDomainImpl)arco.getTo();
                String idioma = (String)destino.getAttributeMap().get(XBRLConstants.LANG_ATTRIBUTE);
                String rol = (String)destino.getAttributeMap().get(XBRLConstants.ROLE_ATTRIBUTE);
                String etiqueta = ((ValuedXbrlInstanceDomainImpl)arco.getTo()).getValue();
                if (idioma != null)
                {
                    if (!concepto.Etiquetas.ContainsKey(idioma))
                    {
                        concepto.Etiquetas.Add(idioma, new Dictionary<String, EtiquetaDto>());
                    }
                    if (!concepto.Etiquetas[idioma].ContainsKey(rol))
                    {
                        concepto.Etiquetas[idioma].Add(rol, new EtiquetaDto() { Rol = rol, Valor = etiqueta, Idioma = idioma });
                    }
                    else
                    {
                        concepto.Etiquetas[idioma][rol].Valor = etiqueta;
                    }

                    if (!taxonomia.IdiomasTaxonomia.ContainsKey(idioma))
                    {
                        //Agrega el idioma de la taxonomia
                        CultureInfo cinfo = new CultureInfo(idioma);
                        taxonomia.IdiomasTaxonomia.Add(idioma, cinfo.DisplayName);
                    }

                }
            }

            if (concepto.Tipo == ConceptoDto.Tuple)
            {
                IDTSQuery hijosTuplaPath = findPath(dts, parametros, prefixMap, XPEXPathConstants.FUNC_TUPLE_CHILDREN);
                IDTSResultSet hijosTuplaResult = dts.find(hijosTuplaPath);
                Iterator hijosTuplaIterator = hijosTuplaResult.getEnumerator();
                concepto.Conceptos = new List<ConceptoDto>();
                while (hijosTuplaIterator.hasNext())
                {
                    concepto.Conceptos.Add(CrearConceptoAPartirDeElementoXbrl((IXbrlDomain)hijosTuplaIterator.next(), dts, prefixMap, taxonomia, mapaTiposDatos));
                }
            }

            return concepto;
        }

        /// <summary>
        /// Busca de manera recursiva los tipos dato derivados por restriccion o extension
        /// </summary>
        /// <param name="dataType">Tipo de datos a verificar, si el tipo de dato no es de los bases de XBRL entonces 
        /// buscar en su tipo de dato padre</param>
        /// <param name="tiposDeDato">Tipos de dato leídos de la taxonomí</param>
        /// <returns>Cadena con el tipo de dato padre, null si no se encontro</returns>
        private String ObtenerTipoDatoBaseXbrl(IXbrlDomain dataType, IDictionary<String, IXbrlDomain> tiposDeDato)
        {
            if (dataType == null)
                return null;
            String nombreTipoDato = (String)dataType.getAttributeMap().get(XBRLConstants.NAME_ATTRIBUTE);
            String namespaceUri = ((ValuedXbrlSchemaDomainImpl)dataType).getNamespaceUri();
            foreach (String tipo in TiposDatoXBRL.TiposXBRL)
            {
                if (EspacioNombresConstantes.InstanceNamespace.Equals(namespaceUri) && tipo.Contains(nombreTipoDato))
                {
                    return namespaceUri + ":" + (String)dataType.getAttributeMap().get(XBRLConstants.NAME_ATTRIBUTE);
                }
            }
            //Busca en el tipo de dato de donde deriva si es que tiene
            Iterator hijos = dataType.getChildren();
            while (hijos.hasNext())
            {
                Element hijo = (Element)hijos.next();
                if (hijo.getLocalName().Equals(XBRLConstants.SIMPLE_CONTENT_ELEMENT))
                {
                    //buscar restriction o extension
                    NodeList hijosSimple = hijo.getChildNodes();
                    for (int i = 0; i < hijosSimple.getLength(); i++)
                    {
                        Element hijoSimple = (Element)hijosSimple.item(i);
                        if (hijoSimple.getLocalName().Equals(XBRLConstants.RESTRICTION_ELEMENT) || hijoSimple.getLocalName().Equals(XBRLConstants.EXTENSION_ELEMENT))
                        {

                            QNameUtil qname = QNameUtil.Parse((String)hijoSimple.getAttribute(XBRLConstants.BASE_ATTRIBUTE));
                            qname.NamespaceUri = ((ValuedXbrlSchemaDomainImpl)dataType).getNamespaceForPrefix(qname.NamespaceUri);
                            if (tiposDeDato.ContainsKey(qname.GetFullName()))
                            {
                                return ObtenerTipoDatoBaseXbrl(tiposDeDato[qname.GetFullName()], tiposDeDato);
                            }

                        }
                    }
                }
            }
            return null;
        }

        /// <summary>
        ///  Crea un objeto <code>ReferenciaDto</code> a partir de una referencia XBRL de la taxonomia.
        /// </summary>
        /// <param name="referencia">La referencia XBRL a tomar como referencia.</param>
        /// <returns>El DTO que reprensenta la referencia de la taxonomia.</returns>
        private ReferenciaDto CrearReferenciaAPartirDeElementoXbrl(IXbrlDomain referencia)
        {
            ReferenciaDto referenciaDto = new ReferenciaDto();
            referenciaDto.Rol = (String)referencia.getAttributeMap().get(XBRLConstants.ROLE_ATTRIBUTE);
            referenciaDto.Partes = new List<ParteReferenciaDto>();

            Iterator itHijos = referencia.getChildren();
            if (itHijos != null)
            {
                while (itHijos.hasNext())
                {
                    Element hijoParte = (Element)itHijos.next();
                    ParteReferenciaDto parteReferencia = new ParteReferenciaDto();

                    parteReferencia.EspacioNombres = hijoParte.getNamespaceURI();
                    parteReferencia.Nombre = hijoParte.getLocalName();
                    parteReferencia.Valor = hijoParte.getTextContent();
                    referenciaDto.Partes.Add(parteReferencia);
                }
            }
            return referenciaDto;
        }

        /// <summary>
        ///  Procesa los resultado de las aserciones de las formulas
        /// </summary>
        /// <param name="assertionResult">Objeto de aserción a procesar</param>
        /// <param name="erroresFinales">Lista de errores a llenar</param>
        /// <returns></returns>
        private Boolean ProcessAssertionResult(Object assertionResult, IList<ErrorCargaTaxonomiaDto> erroresFinales, IDTSNode dtsNode)
        {

            // assume is satisfied until something fails
            var isSatisfied = true;
            String assertionResultStr = null;
            String idContextoOrigen = null;
            String idHechoOrigen = null;
            String idConceptoOrigen = null;
            if (assertionResult is IConsistencyAssertionResult)
            {
                var consisAsser = (IConsistencyAssertionResult)assertionResult;
                String message = consisAsser.getMessage();
                if (message == null)
                    message = "Aserción no cumplida.";

                if (!consisAsser.isSatisfied())
                {
                    assertionResultStr = "Id: " + consisAsser.getXmlId()
                            + ", Mensaje: " + message;
                    if (consisAsser.getMatchedFact() != null)
                    {
                        idContextoOrigen = consisAsser.getMatchedFact().getContextRef();
                        idHechoOrigen = consisAsser.getMatchedFact().getEntityObject(dtsNode).getXmlId();
                    }
                    isSatisfied = false;
                }
            }
            else if (assertionResult is IExistenceAssertionResult)
            {
                IExistenceAssertionResult existAsser = (IExistenceAssertionResult)assertionResult;
                String message = existAsser.getMessage();
                if (message == null)
                    message = "Aserción no cumplida.";

                if (!existAsser.isSatisfied())
                {
                    assertionResultStr = "Id: " + existAsser.getXmlId()
                            + ", Mensaje: " + message;
                    isSatisfied = false;
                }
            }
            else if (assertionResult is IValueAssertionResult)
            {
                IValueAssertionResult valAsser = (IValueAssertionResult)assertionResult;
                String message = valAsser.getMessage();
                if (message == null)
                    message = "Aserción no cumplida..";

                if (!valAsser.isSatisfied())
                {

                    Iterator keys = valAsser.getVariables().keySet().iterator();
                    Object var = null;
                    Object key = null;
                    while (keys.hasNext())
                    {
                        key = keys.next();
                        var = valAsser.getVariables().get(key);
                        if (var != null)
                        {
                            if (var is Fact)
                            {
                                idContextoOrigen = ((Fact)var).getContextRef();
                                idHechoOrigen = ((Fact)var).getXmlId();
                                break;
                            }
                            if (var is IDTSResultSet)
                            {
                                List datos = ((IDTSResultSet)var).getData();
                                if (datos.size() > 0)
                                {
                                    if (datos.get(0) is Fact)
                                    {
                                        idContextoOrigen = ((Fact)datos.get(0)).getContextRef();
                                        idHechoOrigen = ((Fact)datos.get(0)).getXmlId();
                                        break;
                                    }
                                }
                            }
                        }
                    }
                    assertionResultStr = "Id: " + valAsser.getXmlId()
                            + ", Mensaje: " + message;
                    isSatisfied = false;

                }
            }
            else if (assertionResult is List)
            {
                List assertionResults = (List)assertionResult;
                for (int iAs = 0; iAs < assertionResults.size(); iAs++)
                {
                    if (!ProcessAssertionResult(assertionResults.get(iAs), erroresFinales, dtsNode))
                    {
                        isSatisfied = false;
                    }
                }
            }
            else
            {
                isSatisfied = false;
                assertionResultStr = "Resultado desconocido: "
                        + assertionResult.GetType().AssemblyQualifiedName;
            }

            if (assertionResultStr != null)
            {
                if (!isSatisfied)
                {
                    ErrorCargaTaxonomiaDto error = new ErrorCargaTaxonomiaDto();
                    error.Mensaje = assertionResultStr;
                    error.IdContexto = idContextoOrigen;
                    error.IdHecho = idHechoOrigen;
                    error.Severidad = ErrorCargaTaxonomiaDto.SEVERIDAD_ERROR;
                    erroresFinales.Add(error);
                }
            }
            return isSatisfied;
        }
        /// <summary>
        /// Procesa la informacion contenida en un documento instancia y la prepara para ser presentada en el visor de documentos XBRL.
        /// </summary>
        /// <param name="documentoInstancia">Documento de origen</param>
        /// <param name="configCarga">Configuración de la carga que incluye el cahcé de taxonomía para evitar volver a crear los objetos</param>
        /// <param name="httpsReemplazado">Indica si en el documento de instancia fue reemplaza la URL de https a http</param>
        /// <returns>DTO que representa el resultado de la conversión del documento de instancia</returns>
        private DocumentoInstanciaXbrlDto TransformarDocumento(Xbrl documentoInstancia, ConfiguracionCargaInstanciaDto configCarga, bool httpsReemplazado)
        {
            if (documentoInstancia == null)
            {
                return null;
            }

            IDictionary<String, String[]> infoExtraConceptos = new Dictionary<String, String[]>();

            var dto = new DocumentoInstanciaXbrlDto();
            var prefixMap = new HashMap();
            prefixMap.put(XPEXPathConstants.UBMFT_prefix, XPEXPathConstants.UBMFT_Uri);
            prefixMap.put(XPEXPathConstants.UBMFDTS_prefix, XPEXPathConstants.UBMFDTS_Uri);
            prefixMap.put(XPEXPathConstants.UBMFL_prefix, XPEXPathConstants.UBMFL_Uri);
            prefixMap.put(XPEXPathConstants.UBMFI_prefix, XPEXPathConstants.UBMFI_Uri);
            prefixMap.put(XPEXPathConstants.XFI_prefix, XPEXPathConstants.XFI_Uri);

            dto.DtsDocumentoInstancia = new List<DtsDocumentoInstanciaDto>();
            dto.HechosPorIdConcepto = new Dictionary<String, IList<String>>();
            dto.HechosPorId = new Dictionary<String, HechoDto>();
            dto.UnidadesPorId = new Dictionary<String, UnidadDto>();
            dto.ContextosPorId = new Dictionary<String, ContextoDto>();
            dto.GruposContextosEquivalentes = new Dictionary<String, IList<String>>();
            var sw = Stopwatch.StartNew();
            CrearInformacionDTSInstancia(dto, documentoInstancia, httpsReemplazado);
            if (documentoInstancia.getDTS().getEntryNode().getLocationHandle() != null && documentoInstancia.getDTS().getEntryNode().getLocationHandle().getDocument() != null &&
                documentoInstancia.getDTS().getEntryNode().getLocationHandle().getDocument() is org.w3c.dom.Document)
            {
                dto.Codificacion = ((org.w3c.dom.Document)documentoInstancia.getDTS().getEntryNode().getLocationHandle().getDocument()).getXmlEncoding();
                dto.EspacioNombresPrincipal = ((DTSNode)documentoInstancia.getDTS().getImmediatelyReferencedSchemas().get(0)).getLocationHandle().getTargetNamespaceUri();
                dto.NombreArchivo = documentoInstancia.getDTS().getEntryNode().getLocationHandle().getPhysicalUri();
            }
            sw.Stop();
            LogUtil.Info("InfoDTS:" + sw.ElapsedMilliseconds);


            //Crear mapa temporal de tipos de dato para su rapida localizacion
            sw.Restart();
            IDTSQuery dataTypesPath = findPath(documentoInstancia.getDTS().getEntryNode(), null, prefixMap, "ubmfdts:data-types()");
            IDTSResultSet dataTypesResult = documentoInstancia.getDTS().find(dataTypesPath);
            java.util.Iterator itDataTypes = dataTypesResult.getEnumerator();
            IDictionary<String, IXbrlDomain> mapaTiposDatos = new Dictionary<String, IXbrlDomain>();
            ValuedXbrlSchemaDomainImpl dataType = null;
           
            while (itDataTypes.hasNext())
            {
                dataType = (ValuedXbrlSchemaDomainImpl)itDataTypes.next();
                if (dataType.getName() != null)
                {
                    mapaTiposDatos[dataType.getNamespaceUri() + ":" + dataType.getLocalName()] = dataType;
                }
            }
            sw.Stop();
            LogUtil.Info("Leer ubmfdts:data-types():" + sw.ElapsedMilliseconds);


            TaxonomiaDto taxonomia = null;
            if (configCarga.CacheTaxonomia != null)
            {
                taxonomia = configCarga.CacheTaxonomia.ObtenerTaxonomia(dto.DtsDocumentoInstancia);
            }

            if (taxonomia == null && configCarga.ConstruirTaxonomia)
            {
                taxonomia = CrearTaxonomiaAPartirDeDefinicionXbrl(documentoInstancia);
                taxonomia.EspacioNombresPrincipal = dto.EspacioNombresPrincipal;
            }

            dto.Taxonomia = taxonomia;
            sw.Restart();
            var contextos = documentoInstancia.getDTS().getAllContexts();
            IXbrlContext ctx = null;
            ContextoDto ctxDto = null;
            for (int ic = 0; ic < contextos.size(); ic++)
            {
                ctx = (IXbrlContext)contextos.get(ic);
                ctxDto = CrearContextoAPartirDeElementoXbrl(ctx, dto, prefixMap, documentoInstancia);
            }
            sw.Stop();
            LogUtil.Info("Crear contextos:" + sw.ElapsedMilliseconds);

            sw.Restart();
            IDTSResultSet factsDRS = documentoInstancia.getDTS().find("/'domain://ubmatrix.com/Xbrl/Instance#Fact'");
            Iterator hechosIt = factsDRS.getEnumerator();
            var hechos = new List<Fact>();

            while (hechosIt.hasNext())
            {
                Fact hechoTmp = (Fact)hechosIt.next();
                if (!infoExtraConceptos.ContainsKey(hechoTmp.getConcept().getXmlId()))
                {
                    CrearInfoExtraConcepto(infoExtraConceptos, hechoTmp.getConcept().getXmlId(), hechoTmp, documentoInstancia, prefixMap, mapaTiposDatos);
                }
                hechos.Add(hechoTmp);
            }
            sw.Stop();
            LogUtil.Info("Crear info extra de conceptos:" + sw.ElapsedMilliseconds);

            sw.Restart();
            IDTSResultSet unidadesXbrl = documentoInstancia.getDTS().find(XPEXPathConstants.DTS_PATH_UNITS);
            var unidadesIterator = unidadesXbrl.getEnumerator();
            IXbrlDomain unidadXbrl = null;
            while (unidadesIterator.hasNext())
            {
                unidadXbrl = (IXbrlDomain)unidadesIterator.next();
                CrearUnidadAPartirDeElementoXbrl(documentoInstancia, unidadXbrl, dto, prefixMap);
            }
            sw.Stop();
            LogUtil.Info("Crear unidades:" + sw.ElapsedMilliseconds);
            HechoDto hechoDto = null;
            String idConcepto = null;
            
            sw.Restart();
            foreach (var hechoXbrl in hechos)
            {
                
                idConcepto = hechoXbrl.getConcept().getXmlId();
                if (!dto.HechosPorIdConcepto.ContainsKey(idConcepto))
                {
                    dto.HechosPorIdConcepto.Add(idConcepto, new List<String>());
                }
                IXbrlDomain tuplaPadre = documentoInstancia.getDTS().getDomainObject(hechoXbrl.getParent());

                if (tuplaPadre == null || tuplaPadre.getLocalName().Equals("xbrl"))
                {

                    hechoDto = CrearHechoAPartirDeElementoXbrl(hechoXbrl, dto, idConcepto, documentoInstancia, prefixMap, infoExtraConceptos);

                    if (hechoDto != null)
                    {
                        dto.HechosPorIdConcepto[idConcepto].Add(hechoDto.Id);
                        dto.HechosPorId.Add(hechoDto.Id, hechoDto);
                    }
                }
            }
            sw.Stop();
            LogUtil.Info("Crear hechos:" + sw.ElapsedMilliseconds);
            
            sw.Restart();
            DocumentoInstanciaXbrlDtoConverter.AgruparInformacionDocumento(dto);
            sw.Stop();
            LogUtil.Info("Agrupar informacion:" + sw.ElapsedMilliseconds);
            return dto;
        }

        /// <summary>
        /// Crea información básica de los conceptos, para los casos en los que la taxonomía XBRL no esté disponible en memoria en el momento de transformar un documento
        /// </summary>
        /// <param name="infoExtraConceptos"></param>
        /// <param name="idConcepto"></param>
        /// <param name="hechoXbrl"></param>
        /// <param name="documentoInstancia"></param>
        /// <param name="prefixMap"></param>
        /// <param name="mapaTiposDatos"></param>
        private void CrearInfoExtraConcepto(IDictionary<String, String[]> infoExtraConceptos, String idConcepto, Fact hechoXbrl, Xbrl documentoInstancia, HashMap prefixMap, IDictionary<String, IXbrlDomain> mapaTiposDatos)
        {

            ValuedXbrlSchemaDomainImpl concepto = (ValuedXbrlSchemaDomainImpl)hechoXbrl.getConcept();

            ubmatrix.xbrl.common.xml.src.QName qnameTipo = ubmatrix.xbrl.common.xml.src.QName.parse((String)concepto.getAttributeMap().get("type"));
            ubmatrix.xbrl.common.xml.src.QName qnameGrupoSustitucion = ubmatrix.xbrl.common.xml.src.QName.parse((String)concepto.getAttributeMap().get("substitutionGroup"));
            String tipoDato = concepto.getNamespaceForPrefix(qnameTipo.getPrefix()) + ":" + qnameTipo.getLocalName();
            String tipoDatoXbrl = tipoDato;
            String tipo = ConceptoDto.Item + "";

            HashMap parametros = new HashMap();
            parametros.put("concept", concepto);
            IXbrlDomain dataType = (IXbrlDomain)documentoInstancia.getDTS().findSingle(findPath(documentoInstancia.getDTS().getEntryNode(), parametros, prefixMap, "ubmft:data-type($concept)"));
            if (dataType != null)
            {
                tipoDatoXbrl = ObtenerTipoDatoBaseXbrl(dataType, mapaTiposDatos);
                if (tipoDatoXbrl == null)
                {
                    tipoDatoXbrl = tipoDato;
                }
            }
            if (ConceptoDto.SubstitutionGroupItem.Equals(qnameGrupoSustitucion.getLocalName()))
            {
                tipo = ConceptoDto.Item + "";
            }
            if (ConceptoDto.SubstitutionGroupTuple.Equals(qnameGrupoSustitucion.getLocalName()))
            {
                tipo = ConceptoDto.Tuple + "";
            }
            if (ConceptoDto.SubstitutionGroupHypercubeItem.Equals(qnameGrupoSustitucion.getLocalName()))
            {
                tipo = ConceptoDto.HypercubeItem + "";
            }
            if (ConceptoDto.SubstitutionGroupDimensionItem.Equals(qnameGrupoSustitucion.getLocalName()))
            {
                tipo = ConceptoDto.DimensionItem + "";
            }
            if (ConceptoDto.SubstitutionGroupPart.Equals(qnameGrupoSustitucion.getLocalName()))
            {
                tipo = ConceptoDto.PartItem + "";
            }

            infoExtraConceptos.Add(idConcepto, new String[] { tipo, tipoDato, tipoDatoXbrl });

        }

        /// <summary>
        ///  Crea la representacion de la informacion de archivos importados en el documento de instancia en sus respectivos objetos DTO
        /// </summary>
        /// <param name="instanciaDTO"></param>
        /// <param name="instanciaXbrl"></param>
        /// <param name="httpsReemplazado"></param>
        private void CrearInformacionDTSInstancia(DocumentoInstanciaXbrlDto instanciaDTO, Xbrl instanciaXbrl,bool httpsReemplazado)
        {
            IDTSResultSet documentsDRS = instanciaXbrl.getDTS().getEntryNode().find(new DTSPath(XPEXPathConstants.DTS_PATH_SCHEMA_REF));
            for (Iterator i = documentsDRS.getEnumerator(); i.hasNext(); )
            {
                SimpleLinkRelationship link = (SimpleLinkRelationship)i.next();
                ElementNSImpl element = (ElementNSImpl)link.getValueObject();
                String href = null;
                for (int iNodo = 0; iNodo < element.getAttributes().getLength(); iNodo++)
                {
                    if (XBRLConstants.HREF_ATTRIBUTE.Equals(element.getAttributes().item(iNodo).getLocalName()))
                    {
                        href = element.getAttributes().item(iNodo).getNodeValue();
                        break;
                    }
                }
                var dts = new DtsDocumentoInstanciaDto();
                dts.Tipo = DtsDocumentoInstanciaDto.SCHEMA_REF;
                if (httpsReemplazado)
                {
                    href = href.Replace("HTTP://", "HTTPS://").Replace("http://","https://");
                }
                dts.HRef = href;
                instanciaDTO.DtsDocumentoInstancia.Add(dts);
                instanciaDTO.EspacioNombresPrincipal = ((ValuedXbrlSchemaDomainImpl)link.getTo()).getTargetNamespace();
            }
        }

        /// <summary>
        /// Crea un elemento <code>HechoDto</code> a partir de un elemento Hecho dentro de un documento instancia XBRL.
        /// </summary>
        /// <param name="hechoXbrl">El elemento a procesar</param>
        /// <param name="documentoDto">Documento a llenar</param>
        /// <param name="idConcepto">ID del concepto procesado</param>
        /// <param name="documentoXbrl">Documento de instancia XBRL</param>
        /// <param name="prefixMap">Mapa de prefijos de funciones de búsqueda</param>
        /// <returns>Representación del hecho en DTO</returns>

        private HechoDto CrearHechoAPartirDeElementoXbrl(Fact hechoXbrl, DocumentoInstanciaXbrlDto documentoDto, String idConcepto, Xbrl documentoXbrl, HashMap prefixMap, IDictionary<String, String[]> infoExtraConceptos)
        {
            HechoDto hechoDto = new HechoDto();
            hechoDto.CambioValorComparador = false;
            ValuedXbrlSchemaDomainImpl concepto = (ValuedXbrlSchemaDomainImpl)hechoXbrl.getConcept();
            if (concepto == null)
            {
                return null;
            }
            String idHecho = hechoXbrl.getXmlId() != null ? hechoXbrl.getXmlId() : null;
            if (String.IsNullOrEmpty(idHecho))
            {
                idHecho = "A" + Guid.NewGuid().ToString();
            }
            hechoDto.Id = idHecho;
            hechoDto.IdConcepto = idConcepto;
            hechoDto.NombreConcepto = hechoXbrl.getLocalName();
            hechoDto.EspacioNombres = hechoXbrl.getNamespaceUri();
            hechoDto.Tipo = Int16.Parse(infoExtraConceptos[idConcepto][0]);
            hechoDto.TipoDato = infoExtraConceptos[idConcepto][1];
            hechoDto.TipoDatoXbrl = infoExtraConceptos[idConcepto][2];

            hechoDto.EsValorNil = hechoXbrl.isNil();

            if (hechoDto.Tipo == ConceptoDto.Item || hechoDto.Tipo == ConceptoDto.HypercubeItem || hechoDto.Tipo == ConceptoDto.DimensionItem)
            {
                hechoDto.EsTupla = false;
                hechoDto.IdContexto = hechoXbrl.getContextRef();
                hechoDto.NotasAlPie = CrearNotasAlPieAPartirDeElementoXbrl(documentoXbrl, hechoXbrl, documentoDto, prefixMap);

                if (hechoXbrl.isFraction(documentoXbrl.getDTS()))
                {
                    hechoDto.EsFraccion = true;

                    hechoDto.Valor = hechoXbrl.getValue();
                    //hechoDto.ValorRedondeado = hechoXbrl.getEffectiveValue();

                    Iterator itChildren = hechoXbrl.getChildren();
                    if (itChildren != null)
                    {
                        Element hijoFracc = null;
                        while (itChildren.hasNext())
                        {
                            hijoFracc = (Element)itChildren.next();
                            if (XBRLConstants.NUMERATOR_ELEMENT.Equals(hijoFracc.getLocalName()))
                            {
                                double valTmp = 0;
                                Double.TryParse(hijoFracc.getTextContent().Trim(), NumberStyles.Any, CultureInfo.InvariantCulture, out valTmp);
                                hechoDto.ValorNumerador = new Decimal(valTmp);
                            }
                            if (XBRLConstants.DENOMINATOR_ELEMENT.Equals(hijoFracc.getLocalName()))
                            {
                                double valTmp = 0;
                                Double.TryParse(hijoFracc.getTextContent().Trim(), NumberStyles.Any, CultureInfo.InvariantCulture, out valTmp);
                                hechoDto.ValorDenominador = new Decimal(valTmp);
                            }
                        }
                    }
                    hechoDto.IdUnidad = hechoXbrl.getUnitRef();
                }
                else if (hechoXbrl.isNumeric(documentoXbrl.getDTS()))
                {
                    hechoDto.EsNumerico = true;
                    hechoDto.EsFraccion = false;
                    hechoDto.NoEsNumerico = false;
                    hechoDto.Valor = hechoXbrl.getValue();
                    hechoDto.ValorNumerico = new Decimal(Double.Parse(hechoXbrl.getValue()));
                    hechoDto.IdUnidad = hechoXbrl.getUnitRef();
                    hechoDto.Decimales = hechoXbrl.getDecimals();
                    hechoDto.Precision = hechoXbrl.getPrecision();
                    hechoDto.EsDecimalesInfinitos = XBRLConstants.INF_VALUE.Equals(hechoXbrl.getDecimals());
                    hechoDto.EsPrecisionInfinita = XBRLConstants.INF_VALUE.Equals(hechoXbrl.getPrecision());
                }
                else
                {
                    hechoDto.EsNumerico = false;
                    hechoDto.EsFraccion = false;
                    hechoDto.NoEsNumerico = true;
                    hechoDto.Valor = hechoXbrl.getValue();
                }
            }
            else if (hechoDto.Tipo == ConceptoDto.Tuple)
            {
                hechoDto.EsTupla = true;
                hechoDto.NoEsNumerico = true;
                var hijosTupla = hechoXbrl.getChildren();
                if (hijosTupla != null && hijosTupla.hasNext())
                {
                    hechoDto.Hechos = new List<String>();
                    while (hijosTupla.hasNext())
                    {
                        IXbrlDomain nodoHijo = documentoXbrl.getDTS().getDomainObject(hijosTupla.next());
                        if (nodoHijo != null && nodoHijo is Fact)
                        {

                            var hijoTupla = (Fact)nodoHijo;
                        var hechoNuevo = CrearHechoAPartirDeElementoXbrl(hijoTupla, documentoDto, hijoTupla.getConcept().getXmlId(), documentoXbrl, prefixMap, infoExtraConceptos);
                        hechoNuevo.TuplaPadre = hechoDto;
                            hechoDto.Hechos.Add(hechoNuevo.Id);
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
            }
            return hechoDto;
        }

        /// <summary>
        /// Crea una unidad XBRL a partir de su representación en modelo de vista DTO
        /// </summary>
        /// <param name="documentoXbrl">XBRL que se procesa actualmente</param>
        /// <param name="unitRef">Referencia a la unidad a crear</param>
        /// <param name="documentoDto">Documento DTO procesado actualmente</param>
        /// <param name="prefixMap">Mapa de prefijos para búsqueda</param>
        /// <returns>Unidad creada</returns>
        private UnidadDto CrearUnidadAPartirDeElementoXbrl(Xbrl documentoXbrl, IXbrlDomain unidadXbrl, DocumentoInstanciaXbrlDto documentoDto, HashMap prefixMap)
        {
            String idRefUnidad = unidadXbrl.getXmlId();
            if (documentoDto.UnidadesPorId.ContainsKey(idRefUnidad))
            {
                return documentoDto.UnidadesPorId[idRefUnidad];
            }
            UnidadDto unidadDto = new UnidadDto();
            unidadDto.Id = idRefUnidad;
            var hijosUnidad = unidadXbrl.getChildren();
            while (hijosUnidad.hasNext())
            {
                var hijoUnidad = (Element)hijosUnidad.next();
                if (XBRLConstants.MEASURE_ELEMENT.Equals(hijoUnidad.getLocalName()))
                {
                    unidadDto.Tipo = XBRLConstants.TIPO_UNIDAD_MEDIDA;
                    if (unidadDto.Medidas == null)
                    {
                        unidadDto.Medidas = new List<MedidaDto>();
                    }
                    unidadDto.Medidas.Add(CrearMedidaDto(hijoUnidad, unidadXbrl));
                }
                if (XBRLConstants.DIVIDE_ELEMENT.Equals(hijoUnidad.getLocalName()))
                {
                    unidadDto.Tipo = XBRLConstants.TIPO_UNIDAD_DIVISORIA;
                    Element hijoDivisoria = null;
                    //Procesar numerador y denominador
                    for (int iDivisoria = 0; iDivisoria < hijoUnidad.getChildNodes().getLength(); iDivisoria++)
                    {
                        hijoDivisoria = (Element)hijoUnidad.getChildNodes().item(iDivisoria);
                        if (XBRLConstants.UNIT_NUMERATOR_ELEMENT.Equals(hijoDivisoria.getLocalName()))
                        {
                            for (int iMedidas = 0; iMedidas < hijoDivisoria.getChildNodes().getLength(); iMedidas++)
                            {
                                if (unidadDto.MedidasNumerador == null)
                                {
                                    unidadDto.MedidasNumerador = new List<MedidaDto>();
                                }
                                unidadDto.MedidasNumerador.Add(CrearMedidaDto((Element)hijoDivisoria.getChildNodes().item(iMedidas), unidadXbrl));
                            }
                        }
                        if (XBRLConstants.UNIT_DENOMINATOR_ELEMENT.Equals(hijoDivisoria.getLocalName()))
                        {
                            for (int iMedidas = 0; iMedidas < hijoDivisoria.getChildNodes().getLength(); iMedidas++)
                            {
                                if (unidadDto.MedidasDenominador == null)
                                {
                                    unidadDto.MedidasDenominador = new List<MedidaDto>();
                                }
                                unidadDto.MedidasDenominador.Add(CrearMedidaDto((Element)hijoDivisoria.getChildNodes().item(iMedidas), unidadXbrl));
                            }

                        }
                    }
                }
            }
            documentoDto.UnidadesPorId.Add(idRefUnidad, unidadDto);
            return unidadDto;
             
        }

        /// <summary>
        /// Crea un objeto <code>MedidaDto</code> a partir de sus originales utilizadas en la declaración de una unidad en un documento instancia Xbrl.
        /// </summary>
        /// <param name="elementoMedida">Elemento con la información de la medida a crear</param>
        /// <param name="unidadXbrl">Unidad que se está procesando actualmente</param>
        /// <returns>Representación en DTO de la medida</returns>
        private MedidaDto CrearMedidaDto(Element elementoMedida, IXbrlDomain unidadXbrl)
        {
            QNameUtil qname = QNameUtil.Parse(elementoMedida.getTextContent().Trim());
            if (unidadXbrl.getNamespaceForPrefix(qname.NamespaceUri) != null)
            {
                qname.NamespaceUri = unidadXbrl.getNamespaceForPrefix(qname.NamespaceUri);
            }
            return new MedidaDto()
            {
                EspacioNombres = qname.NamespaceUri,
                Nombre = qname.LocalName
            };
        }

        /// <summary>
        /// Crea una lista de objetos <code>NotaAlPieDto</code> a partir de las notas al pie de página de un hecho contenido en un documento instancia Xbrl
        /// </summary>
        /// <param name="documentoXbrl">Objeto XBRL fuente</param>
        /// <param name="hechoXbrl">Hecho para el cual se consulta sus notas al pie</param>
        /// <param name="documentoDto">DTO del documento de instancia actual</param>
        /// <param name="prefixMap">Mapa de prefijos para las búsquedas</param>
        /// <returns>Lista de objetos de notas recuperados del hecho</returns>
        private IDictionary<string, IList<NotaAlPieDto>> CrearNotasAlPieAPartirDeElementoXbrl(Xbrl documentoXbrl, Fact hechoXbrl, DocumentoInstanciaXbrlDto documentoDto, HashMap prefixMap)
        {
            IDictionary<string, IList<NotaAlPieDto>> notasAlPieDeHecho = null;
            HashMap parametros = new HashMap();
            parametros.put(XPEXPathConstants.PARAM_FACT, hechoXbrl);
            IDTSQuery footNotePath = findPath(documentoXbrl.getbaseDTS().getEntryNode(), parametros, prefixMap, XPEXPathConstants.FUNC_FOOT_NOTES);
            Iterator footNotesResult = documentoXbrl.getbaseDTS().find(footNotePath).getEnumerator();
            IXbrlDomain footNote = null;
            NotaAlPieDto notaDto = null;
            if (footNotesResult.hasNext())
            {
                notasAlPieDeHecho = new Dictionary<string, IList<NotaAlPieDto>>();
            }
            while (footNotesResult.hasNext())
            {
                footNote = (IXbrlDomain)footNotesResult.next();
                notaDto = new NotaAlPieDto();
                notaDto.Idioma = (String)footNote.getAttributeMap().get(XBRLConstants.LANG_ATTRIBUTE);
                notaDto.Valor = footNote.getValue();
                notaDto.Rol = (String)footNote.getAttributeMap().get(XBRLConstants.ROLE_ATTRIBUTE);
                if (!notasAlPieDeHecho.ContainsKey(notaDto.Idioma))
                {
                    notasAlPieDeHecho.Add(notaDto.Idioma, new List<NotaAlPieDto>());
                }
                notasAlPieDeHecho[notaDto.Idioma].Add(notaDto);
            }
            return notasAlPieDeHecho;
        }

        /// <summary>
        /// Crea un contexto DTO a partir de la definición del elemento del contexto XBRL
        /// </summary>
        /// <param name="xbrlContext">El objeto contexto</param>
        /// <param name="documentoDto">DTO de destino</param>
        /// <param name="prefixMap">Mapa de prefijos para búsqueda</param>
        /// <returns>Objeto DTO con los datos del contexto credo</returns>
        private ContextoDto CrearContextoAPartirDeElementoXbrl(IXbrlContext xbrlContext, DocumentoInstanciaXbrlDto documentoDto, HashMap prefixMap, Xbrl documentoXbrl)
        {
            if (documentoDto.ContextosPorId.ContainsKey(xbrlContext.getXmlId()))
            {
                return documentoDto.ContextosPorId[xbrlContext.getXmlId()];
            }

            ContextoDto contexto = new ContextoDto();
            contexto.Id = xbrlContext.getXmlId();
            contexto.Escenario = xbrlContext.getScenario() != null ? xbrlContext.getScenario().getInnerXml() : null;
            contexto.Entidad = CrearEntidadAPartirDeElementoXbrl(xbrlContext, documentoDto, documentoXbrl);

            var periodo = new PeriodoDto();

            var elementosPeriodo = xbrlContext.getPeriod().getChildren();
            Element elementoPeriodo = null;
            DateTime fecha = DateTime.MinValue;
            while (elementosPeriodo.hasNext())
            {
                elementoPeriodo = (Element)elementosPeriodo.next();
                if (elementoPeriodo.getLocalName().Equals(XBRLConstants.START_DATE_ELEMENT))
                {
                    periodo.Tipo = XBRLConstants.TIPO_PERIODO_DURACION;
                    XmlUtil.ParsearUnionDateTime(elementoPeriodo.getTextContent(), out fecha);
                    periodo.FechaInicio = fecha;

                }
                if (elementoPeriodo.getLocalName().Equals(XBRLConstants.END_DATE_ELEMENT))
                {
                    periodo.Tipo = XBRLConstants.TIPO_PERIODO_DURACION;
                    XmlUtil.ParsearUnionDateTime(elementoPeriodo.getTextContent(), out fecha);
                    periodo.FechaFin = fecha;
                }
                if (elementoPeriodo.getLocalName().Equals(XBRLConstants.INSTANT_ELEMENT))
                {
                    periodo.Tipo = XBRLConstants.TIPO_PERIODO_INSTANTE;
                    XmlUtil.ParsearUnionDateTime(elementoPeriodo.getTextContent(), out fecha);
                    periodo.FechaInstante = fecha;
                }
                if (elementoPeriodo.getLocalName().Equals(XBRLConstants.FOREVER_ELEMENT))
                {
                    periodo.Tipo = XBRLConstants.TIPO_PERIODO_PARA_SIEMPRE;
                }
            }
            contexto.Periodo = periodo;
            if (xbrlContext.getScenario() != null)
            {
                IList<DimensionInfoDto> dimensiones = CrearInformacionDimensional((Element)((ValuedXbrlInstanceDomainImpl)xbrlContext.getScenario()).getValueObject(), xbrlContext, documentoDto, documentoXbrl);
                if (dimensiones != null && dimensiones.Count > 0)
                {
                    contexto.ContieneInformacionDimensional = true;
                    contexto.ValoresDimension = dimensiones;
                }
            }
            documentoDto.ContextosPorId.Add(contexto.Id, contexto);
            return contexto;
        }

        /// <summary>
        /// Crea un objeti de tipo <code>EntidadDto</code> a partir de la definicion de una Entidad utilizada por un contexto en un documento instancia XBRL
        /// </summary>
        /// <param name="xbrlContext">Objeto de contexto a leer</param>
        /// <param name="documentoDto">Documento de instancia procesado actualmente</param>
        /// <returns></returns>
        private EntidadDto CrearEntidadAPartirDeElementoXbrl(IXbrlContext xbrlContext, DocumentoInstanciaXbrlDto documentoDto, Xbrl documentoXbrl)
        {
            EntidadDto entidad = new EntidadDto();

            Iterator hijos = xbrlContext.getEntity().getChildren();
            org.w3c.dom.Element hijoEntidad = null;
            while (hijos.hasNext())
            {
                hijoEntidad = (org.w3c.dom.Element)hijos.next();
                if (XBRLConstants.IDENTIFIER_ELEMENT.Equals(hijoEntidad.getLocalName()))
                {
                    entidad.EsquemaId = hijoEntidad.getAttribute(XBRLConstants.SCHEME_ATTRIBUTE);
                    entidad.Id = hijoEntidad.getTextContent();
                }
                if (XBRLConstants.SEGMENT_ELEMENT.Equals(hijoEntidad.getLocalName()))
                {
                    entidad.Segmento = hijoEntidad.getTextContent();
                    IList<DimensionInfoDto> dimensiones = CrearInformacionDimensional(hijoEntidad, xbrlContext, documentoDto, documentoXbrl);
                    if (dimensiones != null && dimensiones.Count > 0)
                    {
                        entidad.ContieneInformacionDimensional = true;
                        entidad.ValoresDimension = dimensiones;
                    }
                }
            }
            return entidad;
        }

        /// <summary>
        /// Verifica si los hijos de un elemento tienne información dimensional y la procesa creando una lista
        /// </summary>
        /// <param name="elementoConDimensiones">Contenedor de la información dimensional a examinar</param>
        /// <param name="xbrlContext">Contexto origen</param>
        /// <param name="documentoDto">Instancia actualmente procesada</param>
        /// <returns>Lista de los valores dimensionales encontrados</returns>
        private IList<DimensionInfoDto> CrearInformacionDimensional(Element elementoConDimensiones, IXbrlContext xbrlContext, DocumentoInstanciaXbrlDto documentoDto, Xbrl documentoXbrl)
        {
            IList<DimensionInfoDto> listaDimensiones = null;
            if (elementoConDimensiones != null && elementoConDimensiones.getChildNodes() != null && elementoConDimensiones.getChildNodes().getLength() > 0)
            {
                listaDimensiones = new List<DimensionInfoDto>();
                Element dimInfoXbrl = null;
                DimensionInfoDto dimensionInfo = null;
                for (int iNodo = 0; iNodo < elementoConDimensiones.getChildNodes().getLength(); iNodo++)
                {
                    dimInfoXbrl = (Element)elementoConDimensiones.getChildNodes().item(iNodo);
                    if (XBRLConstants.EXPLICIT_MEMBER_ELEMENT.Equals(dimInfoXbrl.getLocalName()) || XBRLConstants.TYPED_MEMBER_ELEMENT.Equals(dimInfoXbrl.getLocalName()))
                    {
                        QNameUtil qnameDim = QNameUtil.Parse(dimInfoXbrl.getAttribute(XBRLConstants.DIMENSION_ATTRIBUTE));
                        if (xbrlContext.getNamespaceForPrefix(qnameDim.NamespaceUri) != null)
                        {
                            qnameDim.NamespaceUri = xbrlContext.getNamespaceForPrefix(qnameDim.NamespaceUri);
                        }

                        IXbrlDomain dimension = (IXbrlDomain)documentoXbrl.getDTS().findSingle("/'&" + qnameDim.NamespaceUri + "#" + qnameDim.LocalName + "'");
                        if (dimension != null)
                        {
                            dimensionInfo = new DimensionInfoDto();
                            dimensionInfo.Explicita = XBRLConstants.EXPLICIT_MEMBER_ELEMENT.Equals(dimInfoXbrl.getLocalName());
                            dimensionInfo.IdDimension = dimension.getXmlId();
                            dimensionInfo.QNameDimension = qnameDim.GetFullName();

                            if (dimensionInfo.Explicita)
                            {
                                QNameUtil qnameMiembro = QNameUtil.Parse(dimInfoXbrl.getTextContent().Trim());
                                if (xbrlContext.getNamespaceForPrefix(qnameMiembro.NamespaceUri) != null)
                                {
                                    qnameMiembro.NamespaceUri = xbrlContext.getNamespaceForPrefix(qnameMiembro.NamespaceUri);
                                }
                                IXbrlDomain miembro = (IXbrlDomain)documentoXbrl.getDTS().findSingle("/'&" + qnameMiembro.NamespaceUri + "#" + qnameMiembro.LocalName + "'");
                                if (miembro != null)
                                {
                                    dimensionInfo.IdItemMiembro = miembro.getXmlId();
                                    dimensionInfo.QNameItemMiembro = qnameMiembro.GetFullName();
                                }
                            }
                            else
                            {
                                dimensionInfo.ElementoMiembroTipificado = GetInnerXml(dimInfoXbrl.getFirstChild());
                            }
                            listaDimensiones.Add(dimensionInfo);
                        }
                    }
                }
            }
            return listaDimensiones;
        }

        /// <summary>
        /// Extrae y transforma la representación el XML del nodo enviado como parámetro
        /// </summary>
        /// <param name="node">Nodo a transformar</param>
        /// <returns>Cadena XML que representa al nodo transformado</returns>
        private String GetInnerXml(Node node)
        {
            java.io.StringWriter sw = new java.io.StringWriter();
            Transformer trans = TransformerFactory.newInstance().newTransformer();
            trans.setOutputProperty(OutputKeys.OMIT_XML_DECLARATION, "yes");
            trans.setOutputProperty(OutputKeys.INDENT, "yes");
            DOMSource ds = new DOMSource(node);
            StreamResult sr = new StreamResult(sw);
            trans.transform(ds, sr);
            String xml = sw.toString();
            
            trans = null;
            ds = null;
            sr = null;
            sw.close();
            sw = null;
            return xml;
        }



        public DocumentoInstanciaXbrlDto CargarDocumentoInstanciaXbrl(ConfiguracionCargaInstanciaDto configuracionCarga)
        {
            if (configuracionCarga == null)
            {
                return null;
            }
            if (configuracionCarga.Errores == null)
            {
                configuracionCarga.Errores = new List<ErrorCargaTaxonomiaDto>();
            }
            if (this.configInstance == null)
            {
                ErrorCargaTaxonomiaDto err = new ErrorCargaTaxonomiaDto();
                err.Severidad = ErrorCargaTaxonomiaDto.SEVERIDAD_FATAL;
                err.Mensaje = "No se ha inicializado previamente el procesador XBRL";
                configuracionCarga.Errores.Add(err);
                return null;
            }

            if (configuracionCarga.InfoCarga != null)
            {
                configuracionCarga.InfoCarga.MsCarga = 0;
                configuracionCarga.InfoCarga.MsFormulas = 0;
                configuracionCarga.InfoCarga.MsTransformacion = 0;
                configuracionCarga.InfoCarga.MsValidacion = 0;
            }
            bool httpsReemplazado = false;
            Xbrl xbrl = Xbrl.newInstance();
            java.io.InputStream archivoInputStream = null;
            DocumentoInstanciaXbrlDto documentoFinal = null;
            try
            {
                IMemo[] memosActuales = null;
                var mensajesError = new List<IMemo>();
                var xbrl21Valid = false;
                var formulaValid = false;
                var cargaExitosa = false;

             
                var sw = Stopwatch.StartNew();
                String tempFileToDelete = null;
                if (ForzarEsquemaHttp)
                {
                    string tempFileUrl = null;
                    if (configuracionCarga.Archivo != null)
                    {
                        tempFileUrl = Path.GetTempFileName();
                        var fileInfo = new FileInfo(tempFileUrl);
                        fileInfo.Attributes = FileAttributes.Temporary;
                        using (BinaryReader br = new BinaryReader(configuracionCarga.Archivo))
                        {
                            System.IO.File.WriteAllBytes(tempFileUrl, br.ReadBytes((int)configuracionCarga.Archivo.Length));
                        }
                        tempFileToDelete = tempFileUrl;
                    }
                    else
                    {
                        tempFileUrl = configuracionCarga.UrlArchivo;
                    }
                    //Reescribir la url de schema ref
                    tempFileUrl = ReemplazarHTTPSEnArchivo(tempFileUrl, out httpsReemplazado);


                    cargaExitosa = xbrl.load(tempFileUrl, true, true);

                    try
                    {
                        System.IO.File.Delete(tempFileUrl);
                        if(tempFileToDelete != null)
                        {
                            System.IO.File.Delete(tempFileToDelete);
                        }
                    }
                    catch (Exception exf) {
                        LogUtil.Info("Error al borrar archivo temporal:"+ tempFileUrl + " : " + exf.Message);
                    }
                }
                else
                {
                    if (configuracionCarga.Archivo != null)
                    {
                        archivoInputStream = ObtenerJavaInputStream(configuracionCarga.Archivo);
                        cargaExitosa = xbrl.load(archivoInputStream, true, true);
                    }
                    else
                    {
                        cargaExitosa = xbrl.load(configuracionCarga.UrlArchivo, true, true);
                    }
                }

                

                if (cargaExitosa)
                {
                    sw.Stop();
                    if (configuracionCarga.InfoCarga != null)
                    {
                        configuracionCarga.InfoCarga.MsCarga = sw.ElapsedMilliseconds;
                    }



                    if (configuracionCarga.EjecutarValidaciones)
                    {

                        
                            var swValidacion = Stopwatch.StartNew();
                            xbrl21Valid = xbrl.validate(XPEUtil.ObtenerOpcionesValidacion());
                            var memosValidacion = xbrl.getNativeMemos();
                            if (memosValidacion != null)
                            {
                                for (int iMemo = 0; iMemo < memosValidacion.Length; iMemo++)
                                {
                                    mensajesError.Add(memosValidacion[iMemo]);
                                }
                            }
                            swValidacion.Stop();
                            if (configuracionCarga.InfoCarga != null)
                            {
                                configuracionCarga.InfoCarga.MsValidacion = swValidacion.ElapsedMilliseconds;
                            }

                            var swFormula = Stopwatch.StartNew();
                            var config = new FormulaConfiguration();
                            config.setKeepResultDTSOpenFlag(false);
                        config.setAsynchronous(true);
                        xbrl.compileFormulas();
                        formulaValid = xbrl.processFormulas(config, null, null, null);
                        if(!formulaValid){
                            var memosFormula = xbrl.getNativeMemos();
                            if (memosFormula != null)
                            {
                                for (int iMemo = 0; iMemo < memosFormula.Length; iMemo++)
                                {
                                    mensajesError.Add(memosFormula[iMemo]);
                                }
                            }
                        }
                       
                                var assertions = config.getResult().getAssertionResults();
                               
                        if(assertions != null){
                                while (assertions.hasNext())
                                {
                                    Object asResult = ((Map.Entry)assertions
                                            .next()).getValue();
                                if (!ProcessAssertionResult(asResult, configuracionCarga.Errores, xbrl.getbaseDTS()))
                                    {
                                        formulaValid = false;
                                    }

                                }
                            }
                        

                            swFormula.Stop();

                            if (configuracionCarga.InfoCarga != null)
                            {
                                configuracionCarga.InfoCarga.MsFormulas = swFormula.ElapsedMilliseconds;
                            }
                        
                    }
                    else
                    {
                        xbrl21Valid = true;
                        formulaValid = true;
                    }
                    
                            var swTransoformacion = Stopwatch.StartNew();
                            documentoFinal = TransformarDocumento(xbrl, configuracionCarga, httpsReemplazado);
                            swTransoformacion.Stop();
                            if (configuracionCarga.InfoCarga != null)
                            {
                                configuracionCarga.InfoCarga.MsTransformacion = swTransoformacion.ElapsedMilliseconds;
                            }
                }
                else
                {
                    sw.Stop();
                    if (configuracionCarga.InfoCarga != null)
                    {
                        configuracionCarga.InfoCarga.MsCarga = sw.ElapsedMilliseconds;
                    }
                    memosActuales = xbrl.getNativeMemos();
                    if (memosActuales != null)
                    {
                        for (int iMemo = 0; iMemo < memosActuales.Length; iMemo++)
                        {
                            mensajesError.Add(memosActuales[iMemo]);
                        }
                    }
                }

                if (mensajesError.Count > 0)
                {
                    foreach (IMemo memo in mensajesError)
                    {
                        String mensaje = GetStringResource(memo, m_resolver, lang, m_formatter);
                        if (mensaje != null)
                        {
                            ErrorCargaTaxonomiaDto error = new ErrorCargaTaxonomiaDto();
                            error.Mensaje = mensaje;
                            error.Severidad = ErrorCargaTaxonomiaDto.SEVERIDAD_ERROR;
                            if (memo.getOrigin() != null && memo.getOrigin() is Fact)
                            {
                                error.IdContexto = ((Fact)memo.getOrigin()).getContextRef();
                                error.IdHecho = ((Fact)memo.getOrigin()).getXmlId();
                            }
                            configuracionCarga.Errores.Add(error);
                        }
                    }
                }

            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
                ErrorCargaTaxonomiaDto err = new ErrorCargaTaxonomiaDto();
                err.Severidad = ErrorCargaTaxonomiaDto.SEVERIDAD_FATAL;
                err.Mensaje = ex.Message;
                err.CodigoError = ex.StackTrace;
                configuracionCarga.Errores.Add(err);
            }
            finally
            {
                //cerrr la instancia
                if (xbrl != null)
                {
                    try
                    {
                        if (configuracionCarga.ForzarCerradoDeXbrl)
                        {
                            xbrl.close(true);
                        }
                        else
                        {
                            xbrl.close();
                        }
                        xbrl = null;
                    }
                    catch (Exception e)
                    {
                        LogUtil.Error(e);
                        Debug.WriteLine(e.StackTrace);
                    }
                }

                if (archivoInputStream != null)
                {
                    try
                    {
                        archivoInputStream.close();
                        archivoInputStream = null;
                    }
                    catch (Exception e)
                    {
                        LogUtil.Error(e);
                        Debug.WriteLine(e.StackTrace);
                    }
                }
            }
            return documentoFinal;

        }
        /// <summary>
        /// Busca y reemplaza el posible schema ref en HTTPS por HTTP de un archivo temporal, retorna
        /// la url de otro archivo temporal con el contenido reemplazado
        /// </summary>

        private string ReemplazarHTTPSEnArchivo(string tempFileUrl, out bool seReemplazoHttps)
        {
            seReemplazoHttps = false;
            long lineNumber = 0;
            string finalUrl = null;
            var absPath = new System.Uri(tempFileUrl).LocalPath;
            absPath = System.Web.HttpUtility.UrlDecode(absPath);
            var encode = XPEUtil.IntentarDetectarCodificacion(absPath);
            if(encode == null)
            {
                encode = Encoding.GetEncoding("ISO-8859-1");
            }
            using (var streamReader = new StreamReader(absPath, encode))
            {
               
                finalUrl = System.IO.Path.GetTempFileName();
                using (var writer = new System.IO.StreamWriter(finalUrl,false, encode))
                {
                    string line, newdef;
                    while ((line = streamReader.ReadLine()) != null)
                    {
                        lineNumber++;
                        newdef = line;
                        if (lineNumber < 100)
                        {
                            if (line.Contains("HTTPS://") || line.Contains("https://"))
                            {
                                seReemplazoHttps = true;
                                newdef = line.Replace("https://", "http://").Replace("HTTPS://", "HTTP://");
                            }
                        }
                        writer.WriteLine(newdef);
                    }
                }
            }
            return finalUrl;
        }

        public bool PreCargarTaxonomiaXbrl(string fileUrl, IList<ErrorCargaTaxonomiaDto> errores)
        {
            if (xbrlTaxPreload.ContainsKey(fileUrl))
            {
                return true;
            }
            Xbrl xbrl = Xbrl.newInstance();
            try
            {
                IMemo[] memosActuales = null;
                List<IMemo> mensajesError = new List<IMemo>();
                String loadUrl = fileUrl;
                if (ForzarEsquemaHttp)
                {
                    //Forzar las direcciones HTTPS a HTTP
                    if (fileUrl.StartsWith("https") || fileUrl.StartsWith("HTTPS"))
                    {

                        loadUrl = fileUrl.Replace("https://", "http://").Replace("HTTPS://", "HTTP://");
                    }
                }
                if (xbrl.load(loadUrl, true, true))
                {

                    xbrl.validate(false);
                    memosActuales = xbrl.getNativeMemos();
                    if (memosActuales != null)
                    {
                        for (int iMemo = 0; iMemo < memosActuales.Length; iMemo++)
                        {
                            mensajesError.Add(memosActuales[iMemo]);
                        }
                    }
                    xbrl.compileFormulas();
                }
                else
                {
                    memosActuales = xbrl.getNativeMemos();
                    if (memosActuales != null)
                    {
                        for (int iMemo = 0; iMemo < memosActuales.Length; iMemo++)
                        {
                            mensajesError.Add(memosActuales[iMemo]);
                        }
                    }
                }
                if (mensajesError.Count > 0)
                {
                    foreach (IMemo memo in mensajesError)
                    {
                        String mensaje = GetStringResource(memo, this.m_resolver, this.lang, this.m_formatter);
                        //System.out.println(getStringResource(memo,resolver,lang,m_formatter));
                        if (mensaje != null)
                        {
                            ErrorCargaTaxonomiaDto error = new ErrorCargaTaxonomiaDto();
                            error.Mensaje = mensaje;
                            error.Severidad = ErrorCargaTaxonomiaDto.SEVERIDAD_ERROR;
                            errores.Add(error);
                        }
                    }
                }

            }
            catch (Exception ex)
            {
                ErrorCargaTaxonomiaDto err = new ErrorCargaTaxonomiaDto();
                err.Severidad = ErrorCargaTaxonomiaDto.SEVERIDAD_FATAL;
                err.Mensaje = ex.Message;
                errores.Add(err);
                //cerrar la instancia
                if (xbrl != null)
                {
                    try
                    {
                        xbrl.close();
                    }
                    catch (Exception e)
                    {
                    }
                }
                return false;
            }

            xbrlTaxPreload.Add(fileUrl, xbrl);

            return errores.Count == 0;
        }

        public Boolean TaxonomiaEnCache(string fileUrl)
        {
            return this.xbrlTaxPreload.ContainsKey(fileUrl);
        }

        public Boolean QuitarTaxonomiaDeCache(string fileUrl)
        {
            if (xbrlTaxPreload.ContainsKey(fileUrl))
            {
                try
                {
                    Xbrl taxo = xbrlTaxPreload[fileUrl];
                    xbrlTaxPreload.Remove(fileUrl);
                    try
                    {
                        taxo.close();
                        taxo = null;
                        return true;
                    }
                    catch (Exception e)
                    {
                    }
                }
                catch (Exception e)
                {
                }
            }
            return false;
        }


        public Stream GenerarDocumentoInstanciaXbrl(DocumentoInstanciaXbrlDto documentoInstancia, ICacheTaxonomiaXBRL cacheTax)
        {

            XbrlDataModel xbrlModel = null;
            XbrlSession xbrlSession = null;
            Stream streamSalida = null;
            var indiceConceptos = new Dictionary<string, XbrlConcept>();
            var indiceHechos = new Dictionary<string, XbrlFact>();
            var indiceQnames = new Dictionary<string, javax.xml.@namespace.QName>();
            XbrlLock xbrllock = null;
            List<HechoDto> listaDeHechosConNotaAlPie = null;

            Xbrl xbrl = Xbrl.newInstance();

            listaDeHechosConNotaAlPie = new List<HechoDto>();
            XbrlInstance xbrlInstance = null;

            try
            {
                DtsDocumentoInstanciaDto elementoDTS = documentoInstancia.DtsDocumentoInstancia[0];
                var httpsSustituido = false;
                var loadUrl = elementoDTS.HRef;
                if (ForzarEsquemaHttp)
                {
                    if (elementoDTS.HRef.StartsWith("https") || elementoDTS.HRef.StartsWith("HTTPS"))
                    {
                        loadUrl = elementoDTS.HRef.Replace("https://", "http://").Replace("HTTPS://", "HTTP://");
                        httpsSustituido = true;
                    }
                }


                if (!xbrl.load(loadUrl, true, true))
                {
                    LogUtil.Error("Error al intentar cargar documento:" + loadUrl);
                    foreach (var memo in xbrl.getMemos())
                    {
                        LogUtil.Error(memo);
                    }
                    throw new Exception("Error al intentar cargar documento:" + loadUrl);
                }


                IDTS dts = xbrl.getDTS();
                String taxonomyNamespace = dts.getLocationHandle().getTargetNamespaceUri();
                URI taxonomyURI = new URI(taxonomyNamespace);
                xbrlModel = (XbrlDataModel)DataModelFactory.newDataModel(typeof(XbrlDataModel), xbrl);
                xbrlSession = xbrlModel.newSession();

                if (xbrlSession == null)
                {
                    LogUtil.Error("XbrlSession object is null");
                    throw new Exception("XbrlSession object is null");
                }

                XbrlTaxonomy xbrlTaxonomy = xbrlModel.getTaxonomy(xbrlSession, taxonomyURI);
                xbrlInstance = xbrlTaxonomy.newInstance(xbrlSession);


                String randomId = UUID.randomUUID().toString();
                String idArchivo = String.Format("stream://{0}.xbrl", randomId);
                xbrlInstance.setPhysicalUri(idArchivo);
                                             

                xbrllock = xbrlSession.newLock();
                xbrlInstance.@lock(xbrllock);

                var sw = Stopwatch.StartNew();



                foreach (UnidadDto unidad in documentoInstancia.UnidadesPorId.Values)
                {
                    CrearUnidadXbrlEnXml(xbrlModel, xbrlSession, xbrlInstance, unidad);
                }

                sw.Stop();
                Debug.WriteLine("Unidades: (" + documentoInstancia.UnidadesPorId.Count + "):" + sw.ElapsedMilliseconds);
                sw.Restart();

                foreach (HechoDto hecho in documentoInstancia.HechosPorId.Values)
                {
                    if (hecho.TuplaPadre == null && hecho.EsTupla)
                    {
                        indiceHechos[hecho.Id] =
                            CrearTuplasXbrlEnXml(xbrlSession, xbrlInstance, hecho, xbrlModel, documentoInstancia, null, indiceConceptos, indiceHechos);
                    }
                    else if (hecho.TuplaPadre == null && !hecho.EsTupla)
                    {
                        var hechoNuevo = CrearHechoXbrlEnxml(xbrlSession, xbrlInstance, hecho, xbrlModel, documentoInstancia, indiceConceptos, null);
                        if (hechoNuevo != null)
                        {
                            indiceHechos[hecho.Id] = hechoNuevo;
                            if (hecho.NotasAlPie != null && hecho.NotasAlPie.Count > 0) { listaDeHechosConNotaAlPie.Add(hecho); }
                        }
                    }
                }

                sw.Stop();
                Debug.WriteLine("Hechos: (" + documentoInstancia.HechosPorId.Count + "):" + sw.ElapsedMilliseconds);
                sw.Restart();

                foreach (ContextoDto contexto in documentoInstancia.ContextosPorId.Values)
                {
                    var xbrlContext = CrearContextoXbrlEnXml(xbrlSession, xbrlInstance, contexto, xbrlModel, xbrlTaxonomy, indiceQnames, documentoInstancia, indiceHechos);
                }

                sw.Stop();
                Debug.WriteLine("Contextos: (" + documentoInstancia.ContextosPorId.Count + "):" + sw.ElapsedMilliseconds);

                foreach (HechoDto hechoConNotaAlPie in listaDeHechosConNotaAlPie)
                {
                    XbrlFact xbrlFact = xbrlInstance.getFact(xbrlSession, hechoConNotaAlPie.Id);
                    if (xbrlFact != null)
                    {
                        CrearNotasAlPieXbrlEnxml(xbrlSession, xbrlInstance, hechoConNotaAlPie, xbrlModel, xbrlFact);
                    }
                }
                sw.Restart();

                xbrlInstance.unlock(xbrllock);
                var tempPath = Path.GetTempFileName();
                var fileTemp = new java.io.File(tempPath);
                xbrlInstance.getDTS().getEntryNode().getLocationHandle().setWriteListener(new AbaxWriterListener(documentoInstancia,httpsSustituido));
                xbrlInstance.write(xbrlSession, fileTemp);
               
                sw.Stop();
                Debug.WriteLine("Write: " + sw.ElapsedMilliseconds);
                sw.Restart();

               
                streamSalida = new MemoryStream();
                var bytes = System.IO.File.ReadAllBytes(tempPath);

                var stringFinal = UTF8Encoding.UTF8.GetString(bytes);
                stringFinal = stringFinal.Replace("encoding=\"UTF-8\"", "encoding=\"ISO-8859-1\"");

                Encoding iso = Encoding.GetEncoding("ISO-8859-1");
                Encoding utf8 = Encoding.UTF8;
                bytes = utf8.GetBytes(stringFinal);
                byte[] isoBytes = Encoding.Convert(utf8, iso, bytes);

                streamSalida.Write(isoBytes, 0, isoBytes.Length);
                streamSalida.Position = 0;
                
            }
            catch (Exception e)
            {
                Debug.WriteLine(e.StackTrace);
                LogUtil.Error(e);
                throw e;
            }
            finally
            {
                if (xbrlModel != null)
                {
                    try
                    {
                        xbrlInstance.close(xbrlSession);
                        xbrlModel.close(xbrlSession);
                    }
                    catch (Exception e)
                    {
                        LogUtil.Error(e);
                    }
                }
            }
            return streamSalida;
        }


        /// <summary>
        /// Crea un contexto dentro del documento instancia que se está serializando a partir de su modelo.
        /// </summary>
        /// <param name="xbrlSession"> el contexto dinámico para le ejecución de consultas</param>
        /// <param name="xbrlInstance">la referencia al documento instancia que está siendo creado.</param>
        /// <param name="contexto">el objeto que representa el contexto en Abax XBRL</param>
        /// <param name="xbrlDataModel">un objeto de tipo {@link XbrlContext} que representa el contexto dentro del documento instancia serializado.</param>
        /// <param name="xbrlTaxonomy">Objeto que representa a los elementos de la taxonomía actual</param>
        /// <returns>un objeto de tipo {@link XbrlContext} que representa el contexto dentro del documento instancia serializado.</returns>
        private XbrlContext CrearContextoXbrlEnXml(XbrlSession xbrlSession, XbrlInstance xbrlInstance, ContextoDto contexto, XbrlDataModel xbrlDataModel,
            XbrlTaxonomy xbrlTaxonomy, IDictionary<string, javax.xml.@namespace.QName> indiceQname,
            DocumentoInstanciaXbrlDto instanciaDTO, Dictionary<String, XbrlFact> indiceHechosXbrl)
        {
            XbrlContext xbrlContext = null;
            URI uriIdentifier =  new URI(contexto.Entidad.EsquemaId+"#"+contexto.Entidad.Id);
            if (contexto.Periodo.Tipo == PeriodoDto.Instante)
            {
                xbrlContext = xbrlInstance.newContext(xbrlSession, contexto.Id,XPEUtil.CrearJavaDate(contexto.Periodo.FechaInstante), uriIdentifier);
            }
            else if (contexto.Periodo.Tipo == PeriodoDto.Duracion)
            {
                xbrlContext = xbrlInstance.newContext(xbrlSession, contexto.Id, XPEUtil.CrearJavaDate(contexto.Periodo.FechaInicio),XPEUtil.CrearJavaDate(contexto.Periodo.FechaFin),uriIdentifier);
            }
            else if (contexto.Periodo.Tipo == PeriodoDto.ParaSiempre)
            {
                xbrlContext = xbrlInstance.newContext(xbrlSession, contexto.Id, uriIdentifier);
                xbrlContext.setForeverDate(xbrlSession);
            }

            //Asignarle los hechos al contexto para que coloque las dimensiones según el hipercubo de los elementos primarios
            if (instanciaDTO.HechosPorIdContexto.ContainsKey(contexto.Id))
            {
                foreach (var idHecho in instanciaDTO.HechosPorIdContexto[contexto.Id])
                {
                    if (indiceHechosXbrl.ContainsKey(idHecho))
                    {
                        indiceHechosXbrl[idHecho].setContext(xbrlSession, xbrlContext);
                    }
                }
            }



            if ((contexto.ValoresDimension != null && contexto.ValoresDimension.Count > 0) ||
                (contexto.Entidad.ValoresDimension != null && contexto.Entidad.ValoresDimension.Count > 0))
            {
                List<XbrlDescendant> listaDeSegmentosAEliminar = null;
                listaDeSegmentosAEliminar = new List<XbrlDescendant>();
                var dimensiones = new List<DimensionInfoDto>();
                if (contexto.ValoresDimension != null)
                {
                    dimensiones.AddRange(contexto.ValoresDimension);
                }
                if (contexto.Entidad.ValoresDimension != null)
                {
                    dimensiones.AddRange(contexto.Entidad.ValoresDimension);
                }
                foreach (DimensionInfoDto informacionDeDimension in dimensiones)
                {
                    if (informacionDeDimension.Explicita)
                    {

                        javax.xml.@namespace.QName intervaloDeTiempoEje = GenerarQName(xbrlTaxonomy, informacionDeDimension.QNameDimension,informacionDeDimension.IdDimension,indiceQname);
                        javax.xml.@namespace.QName totalIntervalosMiembro = GenerarQName(xbrlTaxonomy, informacionDeDimension.QNameItemMiembro,informacionDeDimension.IdItemMiembro,indiceQname);
                                 
                        
                        xbrlContext.newExplicitDimensionValue(xbrlSession, intervaloDeTiempoEje, totalIntervalosMiembro);
                        //Fix para cuando hay un elemento con el mismo nombre pero con diferencia en mayusc / minusc
                        //xpe toma el nombre en minúsculas y el elemento no es el correctos
                        /*
                        XbrlCollection coll = xbrlContext.getExplicitDimensionValues(xbrlSession);
                        for (int iD = 0; iD < coll.size(); iD++)
                        {
                            XbrlReportedDimensionImpl dimensionElement = coll.get(iD) as XbrlReportedDimensionImpl;
                            var valorMiembro = dimensionElement.getTextContent();
                            var prefAndLocal = valorMiembro.Split(':');
                            var prefijoFinal = prefAndLocal[0];
                            if (!String.IsNullOrEmpty(totalIntervalosMiembro.getPrefix()))
                            {
                                prefijoFinal = totalIntervalosMiembro.getPrefix();
                            }
                            dimensionElement.setTextContent(prefijoFinal+ ":" + totalIntervalosMiembro.getLocalPart());
                           
                        }*/
                        
                     
                    }
                    else
                    {
                        var typedDoc = XPEUtil.ConvertStringToDocument(informacionDeDimension.ElementoMiembroTipificado);
                                                
                        QNameUtil qnUtil = QNameUtil.Parse(typedDoc.getFirstChild().getNodeName());

                        qnUtil.NamespaceUri = GetGlobalNamespaceForPrefix(qnUtil.NamespaceUri,xbrlSession,xbrlTaxonomy);
                        qnUtil.Prefix = GetGlobalPrefixForNamespace(qnUtil.NamespaceUri, xbrlSession, xbrlTaxonomy);
                        ///xbrlInstance.getNamespaceForPrefix(qnUtil.NamespaceUri);xbrlTaxonomy.getTaxonomies(xbrlSession,null)
                        //qnUtil.Prefix = xbrlInstance.getPrefixForNamespace(qnUtil.NamespaceUri);
                        
                        XbrlScenarioDescendant segmentDescendant = xbrlContext.newScenarioDescendant(xbrlSession, new javax.xml.@namespace.QName(qnUtil.NamespaceUri,qnUtil.LocalName,qnUtil.Prefix));
                        AgregarEstructuraHijos(segmentDescendant, xbrlSession, xbrlTaxonomy, typedDoc.getFirstChild());
                        var qName = GenerarQName(xbrlTaxonomy, informacionDeDimension.QNameDimension, informacionDeDimension.IdDimension, indiceQname);
                        xbrlContext.newTypedDimensionValue(xbrlSession, qName, segmentDescendant);

                        listaDeSegmentosAEliminar.Add(segmentDescendant);
                    }
                }
                EliminarSegmentos(xbrlContext, xbrlSession, listaDeSegmentosAEliminar);
            }

            return xbrlContext;
        }
        /// <summary>
        /// Obtiene el namespace en la taxonomía o en las taxonomías relacionadas en base a un prefijo enviado como parámtro
        /// </summary>
        /// <param name="prefix"></param>
        /// <param name="xbrlSession"></param>
        /// <param name="xbrlTaxonomy"></param>
        /// <returns></returns>
        private string GetGlobalNamespaceForPrefix(string prefix, XbrlSession xbrlSession, XbrlTaxonomy xbrlTaxonomy)
        {
            String nameSpace = null;
            nameSpace = xbrlTaxonomy.getNamespaceForPrefix(prefix);
            if(String.IsNullOrWhiteSpace(nameSpace))
            {
                XbrlCollection taxColleccion = xbrlTaxonomy.getTaxonomies(xbrlSession, null);
                for (int ixCol = 0; taxColleccion != null && ixCol < taxColleccion.size(); ixCol++) {
                    XbrlTaxonomy refTax = (XbrlTaxonomy)taxColleccion.get(ixCol);
                    nameSpace = refTax.getNamespaceForPrefix(prefix);
                    if(!String.IsNullOrWhiteSpace(nameSpace))
                    {
                        break;
                    }
                }
            }
            return nameSpace;
        }
        /// <summary>
        /// Obtiene el prefijo de un espacio de nombres en la taxonomía o en las taxonomías relacionadas
        /// </summary>
        /// <param name="namespaceUri"></param>
        /// <param name="xbrlSession"></param>
        /// <param name="xbrlTaxonomy"></param>
        /// <returns></returns>
        private string GetGlobalPrefixForNamespace(string namespaceUri, XbrlSession xbrlSession, XbrlTaxonomy xbrlTaxonomy)
        {
            String prefix = null;
            prefix = xbrlTaxonomy.getPrefixForNamespace(namespaceUri);
            if (String.IsNullOrWhiteSpace(prefix))
            {
                XbrlCollection taxColleccion = xbrlTaxonomy.getTaxonomies(xbrlSession, null);
                for (int ixCol = 0; taxColleccion != null && ixCol < taxColleccion.size(); ixCol++)
                {
                    XbrlTaxonomy refTax = (XbrlTaxonomy)taxColleccion.get(ixCol);
                    prefix = refTax.getPrefixForNamespace(namespaceUri);
                    if (!String.IsNullOrWhiteSpace(prefix))
                    {
                        break;
                    }
                }
            }
            return prefix;
        }

        /// <summary>
        /// Se encarga de eliminar los segmentos que se generan cuando se crean las dimesiones
        /// </summary>
        /// <param name="xbrlContext">el objeto que representa el contexto en Abax XBRL</param>
        /// <param name="xbrlSession"> el contexto dinámico para le ejecución de consultas</param>
        /// <param name="listaDeSegmentosAEliminar">lista que contiene los segmentos que se debe eliminar en documento instancia </param>
        private void EliminarSegmentos(XbrlContext xbrlContext, XbrlSession xbrlSession, List<XbrlDescendant> listaDeSegmentosAEliminar)
        {
            foreach (XbrlDescendant segmentoAEliminar in listaDeSegmentosAEliminar)
            {
                segmentoAEliminar.getParentNode().removeChild(segmentoAEliminar);
	        }
        }

        private void AgregarEstructuraHijos(Node segmentDescendant, XbrlSession xbrlSession, XbrlTaxonomy xbrlTaxonomy, Node nodoPadreAImportar)
        {

            if (nodoPadreAImportar.getNodeType() == Node.__Fields.TEXT_NODE)
            {
                segmentDescendant.setNodeValue(nodoPadreAImportar.getNodeValue());
            }
            if (nodoPadreAImportar.getNodeType() == Node.__Fields.ELEMENT_NODE)
            {
                for (int i = 0; i < nodoPadreAImportar.getChildNodes().getLength(); i++)
                {
                    Node nodoHijo = nodoPadreAImportar.getChildNodes().item(i);
                    if (nodoHijo.getNodeType() == Node.__Fields.ELEMENT_NODE)
                    {
                        Node nuevoNodoHijo = segmentDescendant.getOwnerDocument().createElement(nodoHijo.getNodeName());
                        segmentDescendant.appendChild(nuevoNodoHijo);
                        AgregarEstructuraHijos(nuevoNodoHijo, xbrlSession, xbrlTaxonomy, nodoHijo);
                    }
                    else
                    {
                        AgregarEstructuraHijos(segmentDescendant, xbrlSession, xbrlTaxonomy, nodoHijo);
                    }
                }
            }
        }
        /// <summary>
        /// Generar QName en base a la cadena enviada como parámtro
        /// </summary>
        /// <param name="xbrlTaxonomy">Se requiere para obtener el prefix del NameSpace</param>
        /// <param name="qnameString">Cadena a transformar en QNAME</param>
        /// <returns>un objeto de tipo {@link QName} que representa un nombre cualificado como se define en las especificaciones XML.</returns>
        private javax.xml.@namespace.QName GenerarQName(XbrlTaxonomy xbrlTaxonomy, string qnameString,String idConcepto, IDictionary<string, javax.xml.@namespace.QName> indiceQname)
        {
            if (indiceQname.ContainsKey(idConcepto))
            {
                return indiceQname[idConcepto];
            }
            else
            {
                var qNameUtil = QNameUtil.Parse(qnameString);
                String prefijoEnTaxo = xbrlTaxonomy.getPrefixForNamespace(qNameUtil.NamespaceUri);
                var qname = new javax.xml.@namespace.QName(qNameUtil.NamespaceUri, qNameUtil.LocalName, prefijoEnTaxo);
                indiceQname.Add(idConcepto,qname);
                return qname;
            }
        }
        /// <summary>
        /// Crea una unidad dentro del documento instancia que se está serializando a partir de su modelo.
        /// </summary>
        /// <param name="xbrlDataModel">el modelo de datos que representa al documento instancia</param>
        /// <param name="xbrlSession">el contexto dinámico para le ejecución de consultas</param>
        /// <param name="xbrlInstance">la referencia al documento instancia que está siendo creado.</param>
        /// <param name="unidad">el modelo que representa la unidad dentro de Abax XBRL</param>
        /// <returns>un objeto de tipo {@link XbrlUnit} que representa la unidad dentro del documento instancia serializado.</returns>
        
        private XbrlUnit CrearUnidadXbrlEnXml(XbrlDataModel xbrlDataModel, XbrlSession xbrlSession, XbrlInstance xbrlInstance, UnidadDto unidad)
        {

		    XbrlUnit xbrlUnit = null;

            if (unidad.Tipo == UnidadDto.Medida)
            {
                xbrlUnit = xbrlInstance.newUnit(xbrlSession, unidad.Id, null);
                XbrlMeasure measureElement = xbrlDataModel.newMeasure(xbrlSession);
                foreach (MedidaDto medida in unidad.Medidas)
                {
                    javax.xml.@namespace.QName measure = new javax.xml.@namespace.QName(medida.EspacioNombres, xbrlInstance.getPrefixForNamespace(medida.EspacioNombres) + ":" + medida.Nombre, 
                        xbrlInstance.getPrefixForNamespace(medida.EspacioNombres));
                    measureElement.setNodeValue(xbrlInstance.getPrefixForNamespace(medida.EspacioNombres) + ":" + medida.Nombre);
                    xbrlUnit.getMeasures(xbrlSession).add(measureElement);
			    }
            }
            else
            {
                if (unidad.MedidasDenominador.Count > 0)
                {
				    xbrlUnit = xbrlInstance.newUnit(xbrlSession, unidad.Id,null);
				    XbrlDivide xbrlDivide = xbrlDataModel.newDivide(xbrlSession);
				    CrearNumerator(xbrlDataModel,xbrlSession,xbrlInstance,unidad,xbrlDivide, xbrlUnit);
				    CrearDenominator(xbrlDataModel,xbrlSession,xbrlInstance,unidad,xbrlDivide, xbrlUnit);
			    }	
		    }
		    return xbrlUnit;
	    }

        /// <summary>
        /// Creacion de Numerator en {@link XbrlUnit}
        /// </summary>
        /// <param name="xbrlDataModel">el modelo de datos que representa al documento instancia</param>
        /// <param name="xbrlSession">el contexto dinámico para le ejecución de consultas</param>
        /// <param name="xbrlInstance">la referencia al documento instancia que está siendo creado.</param>
        /// <param name="unidad">el modelo que representa la unidad dentro de Abax XBRL</param>
        /// <param name="xbrlDivide">la referencia de Divide para agregar Numerator</param>
        /// <param name="xbrlUnit">la referencia de la unidad a crear</param>
 
	    private void CrearNumerator(XbrlDataModel xbrlDataModel, XbrlSession xbrlSession,XbrlInstance xbrlInstance, UnidadDto unidad,
                XbrlDivide xbrlDivide, XbrlUnit xbrlUnit)
        {
		
            foreach (MedidaDto medida in unidad.MedidasNumerador)
            {
				    XbrlNumerator xbrlNumerator = xbrlDataModel.newNumerator(xbrlSession);
				
				    xbrlUnit.setDivide(xbrlSession, xbrlDivide);
				    xbrlDivide.setNumerator(xbrlSession, xbrlNumerator);
				    XbrlMeasure xbrlMeasure  =  xbrlDataModel.newDividedMeasure(xbrlSession);

                    javax.xml.@namespace.QName measure = new javax.xml.@namespace.QName(medida.EspacioNombres, medida.Nombre, xbrlInstance.getPrefixForNamespace(medida.EspacioNombres));
				    xbrlMeasure.setQName(xbrlSession, measure);
				    xbrlMeasure.setValue(measure.getPrefix() + ":" + measure.getLocalPart());
				    xbrlNumerator.getMeasures(xbrlSession).add(xbrlMeasure);	
			    }
	    }
        
	    /// <summary>
        /// Creacion de Denominator en {@link XbrlUnit}
        /// <param name="xbrlDataModel">el modelo de datos que representa al documento instancia</param>
        /// <param name="xbrlSession">el contexto dinámico para le ejecución de consultas</param>
        /// <param name="xbrlInstance">la referencia al documento instancia que está siendo creado.</param>
        /// <param name="unidad">el modelo que representa la unidad dentro de Abax XBRL</param>
        /// <param name="xbrlDivide">la referencia de Divide para agregar Numerator</param>
        /// <param name="xbrlUnit">la referencia de la unidad a crear</param>
	    private void CrearDenominator(XbrlDataModel xbrlDataModel, XbrlSession xbrlSession,XbrlInstance xbrlInstance, UnidadDto unidad,
                XbrlDivide xbrlDivide, XbrlUnit xbrlUnit)
        {
		
            foreach (MedidaDto medida in unidad.MedidasDenominador)
            {
			    XbrlDenominator xbrlDenominator = xbrlDataModel.newDenominator(xbrlSession);
			
			    xbrlUnit.setDivide(xbrlSession, xbrlDivide);
			    xbrlDivide.setDenominator(xbrlSession, xbrlDenominator);
			    XbrlMeasure xbrlMeasure  =  xbrlDataModel.newDividedMeasure(xbrlSession);
			
			    javax.xml.@namespace.QName measure = new javax.xml.@namespace.QName(medida.EspacioNombres, medida.Nombre, xbrlInstance.getPrefixForNamespace(medida.EspacioNombres));
			    xbrlMeasure.setQName(xbrlSession, measure);
			    xbrlMeasure.setValue(measure.getPrefix() + ":" + measure.getLocalPart());
			    xbrlDenominator.getMeasures(xbrlSession).add(xbrlMeasure);
		    }
	    }
        
        /// <summary>
        ///  Crea un hecho dentro del documento instancia que se está serializando a partir de su modelo.
        /// </summary>
        /// <param name="xbrlSession">el contexto dinámico para le ejecución de consultas</param>
        /// <param name="xbrlInstance">la referencia al documento instancia que está siendo creado.</param>
        /// <param name="hecho">el modelo que representa el hecho dentro de Abax XBRL</param>
        /// <param name="xbrlDataModel">el modelo de datos que representa al documento instancia</param>
        /// <param name="documentoInstancia"></param>
        /// <returns>un objeto de tipo {@link IXbrlDomain} que representa el hecho dentro del documento instancia serializado.</returns>
        private XbrlFact CrearHechoXbrlEnxml(XbrlSession xbrlSession, XbrlInstance xbrlInstance, HechoDto hecho, XbrlDataModel xbrlDataModel,
            DocumentoInstanciaXbrlDto documentoInstancia, IDictionary<string, XbrlConcept> indiceConceptos, XbrlFact xbrlFactTuplaPadre)
        {
		    XbrlFact xbrlFact = null;
            XbrlConcept concepto = null;

            if (hecho.NombreConcepto == null)
            {
                return null;
            }

            if (!indiceConceptos.ContainsKey(hecho.IdConcepto))
            {
                concepto = xbrlInstance.getConcept(xbrlSession, new javax.xml.@namespace.QName(hecho.EspacioNombres, hecho.NombreConcepto));
                indiceConceptos.Add(hecho.IdConcepto,concepto);
            }
            else
            {
                concepto = indiceConceptos[hecho.IdConcepto];
            }

            if (concepto.isNumeric(xbrlSession))
            {

                if (xbrlFactTuplaPadre != null)
                {

                    xbrlFact = xbrlFactTuplaPadre.newChildFact(xbrlSession,
                               new javax.xml.@namespace.QName(hecho.EspacioNombres, hecho.NombreConcepto), null);
                    xbrlFact.setUnit(xbrlSession, xbrlInstance.getUnit(xbrlSession, hecho.IdUnidad));
                    xbrlFact.setTupleParent(xbrlSession, xbrlFactTuplaPadre);

                }
                else
                {
                    xbrlFact = xbrlInstance.newFact(xbrlSession,
                               new javax.xml.@namespace.QName(hecho.EspacioNombres, hecho.NombreConcepto), null,
                               hecho.IdUnidad);
                }

                if (concepto.isFraction(xbrlSession))
                {
				    /*
				     * XbrlNumerator xbrlNumerator = xbrlFact.getFractionNumerator(xbrlSession); xbrlNumerator.getFacts(xbrlSession).add(arg0)
				     */
                }
                else
                {

                    if (!String.IsNullOrEmpty(hecho.Decimales))
                    {
                        if (hecho.EsDecimalesInfinitos)
                        {
						    xbrlFact.setDecimals("INF");
                        }
                        else
                        {
						    xbrlFact.setDecimals(hecho.Decimales);
					    }
                    }
                    else if (!String.IsNullOrEmpty(hecho.Precision))
                    {
                        if (hecho.EsPrecisionInfinita)
                        {
						    xbrlFact.setPrecision("INF");
                        }
                        else
                        {
						    xbrlFact.setPrecision(hecho.Precision);
					    }
                    }
                    else
                    {
                        xbrlFact.setDecimals("INF");
                    }
				   
				    xbrlFact.setXmlId(hecho.Id);
			    }
            }
            else
            {

                if (xbrlFactTuplaPadre != null)
                {
                    xbrlFact = xbrlFactTuplaPadre.newChildFact(xbrlSession, new javax.xml.@namespace.QName(hecho.EspacioNombres, hecho.NombreConcepto), null);
                    xbrlFact.setTupleParent(xbrlSession, xbrlFactTuplaPadre);
                }
                else
                {
                    xbrlFact = xbrlInstance.newFact(xbrlSession, new javax.xml.@namespace.QName(hecho.EspacioNombres, hecho.NombreConcepto), null);
                }
            }
                xbrlFact.setValue(hecho.Valor);
                xbrlFact.setXmlId(hecho.Id);
		    return xbrlFact;
	    }
     
        /// <summary>
        /// Generacion de notas de pie de lo hechos
        /// </summary>
        /// <param name="xbrlSession">el contexto dinámico para le ejecución de consultas</param>
        /// <param name="xbrlInstance">la referencia al documento instancia que está siendo creado.</param>
        /// <param name="hecho">el modelo que representa el hecho dentro de Abax XBRL</param>
        /// <param name="xbrlFact">el modelo de datos que representa al documento instancia</param>
        /// <returns>un objeto de tipo {@link XbrlFact} que representa un hecho dentro del documento instancia serializado.</returns>
        private XbrlFact CrearNotasAlPieXbrlEnxml(XbrlSession xbrlSession, XbrlInstance xbrlInstance, HechoDto hecho, XbrlDataModel xbrlDataModel, XbrlFact xbrlFact)
        {
	
            foreach (var notasAlPie in hecho.NotasAlPie.Values)
            {
                for (int contadorDeNotaDePie = 0; contadorDeNotaDePie <= notasAlPie.Count - 1; contadorDeNotaDePie++)
                {
					    NotaAlPieDto detalleNotasAlPie =  notasAlPie[contadorDeNotaDePie];
					    xbrlFact.setFootnote(xbrlSession,s_defaultLinkRole,detalleNotasAlPie.Idioma,detalleNotasAlPie.Valor);
				    }
			    }			
		    return xbrlFact;
	    }
        /// <summary>
        /// Genera un Documento instancia dto con un stream de entrada con un archivo XBRL.
        /// </summary>
        /// <param name="inputStream">Flujo de entrada con un archivo XBRL.</param>
        /// <param name="fileName">Nombre del archivo.</param>
        /// <returns>Dto con la información del documento de instancia XBRL.</returns>
        public DocumentoInstanciaXbrlDto CargaInstanciaXBRLStreamFile(Stream inputStream, String fileName)
        {
            DocumentoInstanciaXbrlDto documentoInstancia = null;
            //Se importó un archivo ZIP
            if (fileName.EndsWith(CommonConstants.ExtensionZIP))
            {
                documentoInstancia = CargaInstanciaXBRLZip(inputStream);
            }
            else if (fileName.EndsWith(CommonConstants.ExtensionXBRL))
            {
                documentoInstancia = CargaInstanciaXBRL(inputStream, fileName);
            }

            return documentoInstancia;
        }

        /// <summary>
        /// Crea un dto de instancia de documento XBRL a partir de un stream de un documento XBRL.
        /// </summary>
        /// <param name="stream">Stream con el documento XBRL a evaluar.</param>
        /// <returns>Dto con la información del documento de instancia.</returns>
        private DocumentoInstanciaXbrlDto CargaInstanciaXBRL(Stream stream, String fileName)
        {

            var tmpDir = UtilAbax.ObtenerDirectorioTemporal();
            var tmpFilePath = tmpDir.FullName + Path.DirectorySeparatorChar + fileName;
            var tmpFile = System.IO.File.Create(tmpFilePath);
            stream.Seek(0, SeekOrigin.Begin);
            stream.CopyTo(tmpFile);
            tmpFile.Close();
            DocumentoInstanciaXbrlDto documentoInstanciaXbrlDto = CargaInstanciaXBRLPath(tmpFilePath);
            return documentoInstanciaXbrlDto;
        }

        /// <summary>
        /// Procesa un documento de instancia dentro de un archivo zip, extrae los archivos a un directorio
        /// temporal y procesa el archivo XBRL que haya dentro
        /// </summary>
        /// <param name="inputStream">Stream de ZIP de entrada</param>
        /// <param name="resultado">Resultado de la operación</param>
        /// <returns>Documento de instancia cargado, null si no se puede cargar el documento</returns>
        private DocumentoInstanciaXbrlDto CargaInstanciaXBRLZip(Stream inputStream)
        {
            string archivoXbrl = null;
            DocumentoInstanciaXbrlDto documento = null;
            DirectoryInfo tmpDir = null;
            using (var zipFile = ZipFile.Read(inputStream))
            {
                tmpDir = UtilAbax.ObtenerDirectorioTemporal();
                zipFile.ExtractAll(tmpDir.FullName, ExtractExistingFileAction.OverwriteSilently);
                foreach (var archivoInterno in zipFile)
                {
                    LogUtil.Info("ArchivoZip: " + archivoInterno.FileName);
                    if (!archivoInterno.IsDirectory &&
                        archivoInterno.FileName.ToLower().EndsWith(CommonConstants.ExtensionXBRL))
                    {
                        archivoXbrl = archivoInterno.FileName;
                        var pathUnzipedFile = tmpDir.FullName + Path.DirectorySeparatorChar + archivoXbrl;
                        documento = CargaInstanciaXBRLPath(pathUnzipedFile);
                        break;

                    }
                }
            }
            return documento;
        }

        /// <summary>
        /// Procesa un documento de instancia dentro de un archivo zip, extrae los archivos a un directorio
        /// temporal y procesa el archivo XBRL que haya dentro
        /// </summary>
        /// <param name="inputStream">Stream de ZIP de entrada</param>
        /// <returns>Documento de instancia cargado, null si no se puede cargar el documento</returns>
        public DocumentoInstanciaXbrlDto CargaInstanciaXBRLFilePath(String filePath)
        {
            string archivoXbrl = null;
            DocumentoInstanciaXbrlDto documento = null;
            DirectoryInfo tmpDir = null;
            var extension = Path.GetExtension(filePath);

            if (extension.ToLower().EndsWith("zip"))
            {
                using (var zipFile = ZipFile.Read(filePath))
                {
                    tmpDir = UtilAbax.ObtenerDirectorioTemporal();
                    zipFile.ExtractAll(tmpDir.FullName, ExtractExistingFileAction.OverwriteSilently);
                    foreach (var archivoInterno in zipFile)
                    {
                        LogUtil.Info("ArchivoZip: " + archivoInterno.FileName);
                        if (!archivoInterno.IsDirectory &&
                            archivoInterno.FileName.ToLower().EndsWith(CommonConstants.ExtensionXBRL))
                        {
                            archivoXbrl = archivoInterno.FileName;
                            var pathUnzipedFile = tmpDir.FullName + Path.DirectorySeparatorChar + archivoXbrl;
                            documento = CargaInstanciaXBRLPath(pathUnzipedFile);
                            break;

                        }
                    }
                }
            }
            else
            {
                documento = CargaInstanciaXBRLPath(filePath);
            }
            return documento;
        }

        /// <summary>
        /// Crea un dto de instancia de documento XBRL.
        /// </summary>
        /// <param name="filePath">Path del archivo xbrl a procesar.</param>
        /// <returns>Dto con la información del documento de instancia.</returns>
        private DocumentoInstanciaXbrlDto CargaInstanciaXBRLPath(String filePath)
        {
            var xbrl = Xbrl.newInstance();
            var errores = new List<ErrorCargaTaxonomiaDto>();
            var info = new AbaxCargaInfoDto();
            var configuracionCarga = new ConfiguracionCargaInstanciaDto()
            {
                UrlArchivo = filePath,
                Errores = errores,
                CacheTaxonomia = CACHE_TAXONOMIAS,
                InfoCarga = info,
                EjecutarValidaciones = false,
                ConstruirTaxonomia = true
            };
            DocumentoInstanciaXbrlDto documentoInstanciaXbrlDto = CargarDocumentoInstanciaXbrl(configuracionCarga);
            if (errores.Count > 0)
            {
                LogUtil.Error(errores);
                throw new InvalidCastException("No es posible generar el documento XBRL DTO apartir del archivo [" + filePath + "].");
            }
            else
            {
                LogUtil.Info(info);
            }
            return documentoInstanciaXbrlDto;
        }
        /// <summary>
        /// Asigna el cache general de taxonomias.
        /// </summary>
        /// <param name="cache">Cache que se pretende asignar.</param>
        public static void SetCacheTaxonomias(CacheTaxonomiaEnMemoriaXBRL cache)
        {
            CACHE_TAXONOMIAS = cache;
        }
        /// <summary>
        /// Crea la estructura de una tupla en el documento de instancia XBRL
        /// </summary>
        /// <param name="xbrlSession"></param>
        /// <param name="xbrlInstance"></param>
        /// <param name="hecho"></param>
        /// <param name="xbrlDataModel"></param>
        /// <param name="documentoInstancia"></param>
        /// <param name="HechoPadre"></param>
        /// <param name="indiceHechos"></param>
        /// <returns></returns>
        private XbrlFact CrearTuplasXbrlEnXml(XbrlSession xbrlSession, XbrlInstance xbrlInstance, HechoDto hecho, XbrlDataModel xbrlDataModel,
            DocumentoInstanciaXbrlDto documentoInstancia, XbrlFact HechoPadre, IDictionary<string, XbrlConcept> indiceConceptos, Dictionary<String, XbrlFact> indiceHechos)
        {
            XbrlFact xbrlFactTupla = null;
            var hijosTupla = hecho.Hechos;

            if (hijosTupla != null && hijosTupla.Count > 0)
            {
                if (HechoPadre != null)
                {

                    xbrlFactTupla = HechoPadre.newChildTupleFact(xbrlSession, new javax.xml.@namespace.QName(hecho.EspacioNombres, hecho.NombreConcepto));
                    xbrlFactTupla.setTupleParent(xbrlSession, HechoPadre);
                }
                else
                {
                    xbrlFactTupla = xbrlInstance.newFact(xbrlSession, new javax.xml.@namespace.QName(hecho.EspacioNombres, hecho.NombreConcepto));
                }
                foreach (var idHecho in hijosTupla)
                {
                    HechoDto infoHecho = documentoInstancia.HechosPorId[idHecho];
                    if (infoHecho != null)
                    {
                        if (infoHecho.EsTupla)
                        {
                            indiceHechos[infoHecho.Id] = CrearTuplasXbrlEnXml(xbrlSession, xbrlInstance, infoHecho, xbrlDataModel,
                                documentoInstancia, xbrlFactTupla, indiceConceptos, indiceHechos);
                        }
                        else
                        {
                            indiceHechos[infoHecho.Id] = CrearHechoXbrlEnxml(xbrlSession, xbrlInstance, infoHecho, xbrlDataModel,
                                documentoInstancia, indiceConceptos, xbrlFactTupla);
                        }
                    }
                }
            }

            return xbrlFactTupla;

        }
    }
       
}
