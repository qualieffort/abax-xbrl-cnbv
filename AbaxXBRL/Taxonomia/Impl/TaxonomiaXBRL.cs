using System;
using System.Collections;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Runtime.Serialization;
using System.Runtime.Serialization.Formatters.Binary;
using System.Text;
using System.Threading.Tasks;
using System.Xml;
using System.Xml.Linq;
using System.Xml.Schema;
using AbaxXBRL.Constantes;
using AbaxXBRL.Taxonomia.Linkbases;
using AbaxXBRL.Taxonomia.Validador;
using AbaxXBRL.Util;
using System.Globalization;
using System.Text.RegularExpressions;
using AbaxXBRL.Taxonomia.Dimensiones;

namespace AbaxXBRL.Taxonomia.Impl
{
    /// <summary>
    /// Representa una taxonomía XBRL apegada a la especificación XBRL 2.1.
    /// <author>José Antonio Huizar Moreno</author>
    /// <version>1.0</version>
    /// </summary>
    public class TaxonomiaXBRL : ITaxonomiaXBRL
    {
        /// <summary>
        /// El conjunto de todos los esquemas requeridos para procesar la taxonomía separados en conjuntos por cada URI cargado.
        /// </summary>
        private IDictionary<string, XmlSchemaSet> ConjuntosEsquemasTaxonomia;

        /// <summary>
        /// Contiene los elementos que pueden o deben ser reportados en la taxonomía indexados por su identificador.
        /// </summary>
        public IDictionary<string, Concept> ElementosTaxonomiaPorId { get; set; }

        /// <summary>
        /// Contiene los elementos que pueden o deben ser reportados en la taxonomía indexados por su nombre de etiqueta.
        /// </summary>
        public IDictionary<XmlQualifiedName, Concept> ElementosTaxonomiaPorName { get; set; }

        /// <summary>
        /// Contiene los elementos que pueden o deben ser reportados en la taxonomía agrupados por el archivo en que fueron declarados
        /// y posteriormente por su identificador.
        /// </summary>
        public IDictionary<string, IDictionary<string, Concept>> ElementosTaxonomiaPorArchivoPorId { get; set; }
        /// <summary>
        /// Contiene los recursos (elementos xbrl del tipo etiqueta o referencia) que pueden ser reportados en archivos
        /// de linkbase de un DTS y cuyo atributo ID si fue declarado
        /// </summary>
        public IDictionary<string, IDictionary<string, Recurso>> RecursosTaxonominaPorArchivoPorId { get; set; }
        /// <summary>
        /// Contiene los elementos que pueden o deben ser reportados en la taxonomía agrupados por el archivo en que fueron declarados
        /// y posteriormente por el nombre de la etiquetda.
        /// </summary>
        public IDictionary<string, IDictionary<string, Concept>> ElementosTaxonomiaPorArchivoPorName { get; set; }

        /// <summary>
        /// Contiene todos los diferentes tipos de datos que han sido definidos en la taxonomía.
        /// </summary>
        public IDictionary<XmlQualifiedName, XmlSchemaType> TiposDeDato { get; set; }

        /// <summary>
        /// Contiene los roles definidos en la taxonomía así como los linkbases de cada uno.
        /// </summary>
        public IDictionary<string, RoleType> RolesTaxonomia { get; set; }

        /// <summary>
        /// Contiene los roles definidos en la taxonomía agrupados por el archivo en que fueron declarados
        /// y posteriormente por su URI.
        /// </summary>
        public IDictionary<string, IDictionary<string, RoleType>> RolesTaxonomiaPorArchivoPorUri { get; set; }

        /// <summary>
        /// Contiene los arco roles definidos en la taxonomía.
        /// </summary>
        public IDictionary<string, ArcRoleType> ArcoRolesTaxonomia { get; set; }

        /// <summary>
        /// Contiene los arcoRoles definidos en la taxonomía agrupados por el archivo en que fueron declarados
        /// y posteriormente por su URI.
        /// </summary>
        public IDictionary<string, IDictionary<string, ArcRoleType>> ArcoRolesTaxonomiaPorArchivoPorUri { get; set; }

        /// <summary>
        /// Contiene los archivos esquema que ya han sido procesados la ubicación en donde se encuentran.
        /// </summary>
        public IDictionary<string, XmlSchema> ArchivosEsquema {get; set;}

        /// <summary>
        /// Contiene los archivos linkbase que ya han sido procesados la ubicación en donde se encuentran.
        /// </summary>
        private IDictionary<string, XmlDocument> ArchivosLinkbase = new Dictionary<string, XmlDocument>();

        /// <summary>
        /// Los archivos que componen el Discovery Taxonomy Set
        /// </summary>
        private IList<string> ArchivosDTS = new List<string>();

        /// <summary>
        /// El Manejador de Errores del proceso de carga de la taxonomía.
        /// </summary>
        public IManejadorErroresXBRL ManejadorErrores { get; set; }
        
        /// <summary>
        /// Representa el conjunto de árboles creados por:
        /// Tipo de Rol y luego por cada linkbase existente en el tipo de rol de la taxonomía
        /// </summary>
        public IDictionary<string, IDictionary<string, ArbolLinkbase>> ConjuntoArbolesLinkbase { get; set; }

        /// <summary>
        /// El conjunto de elementos del tipo Custom Extended Links definidos en la taxonomía
        /// </summary>
        public IList<CustomExtendedLink> CustomExtendedLinks { get; set; }
        /// <summary>
        /// Configuración global para la lectura de XML's
        /// </summary>
        private XmlReaderSettings XmlSettings = null;
        /// <summary>
        /// Lista de hipercubos válidos activos en la taxonomía
        /// </summary>
        public IDictionary<string, IList<Hipercubo>> ListaHipercubos { get; set; }
        /// <summary>
        /// Listado global de valores predeterminados de dimensiones declaradas
        /// </summary>
        private IDictionary<ConceptDimensionItem, ConceptItem> _listaDimensionDefault = new Dictionary<ConceptDimensionItem, ConceptItem>();
        /// <summary>
        /// Indica si ya se procesaron las relaciones dimensionales de esta taxonomía
        /// </summary>
        private bool _relacionesDimensionalesCreadas = false;
        /// <summary>
        /// Esquema XML principal de la taxonomía
        /// </summary>
        private XmlSchema _esquemaPrincipal = null;
        /// <summary>
        /// Indica al procesador XBRL que utilice una URL HTTP en los dominios HTTPS 
        /// </summary>
        private bool _forzarEsquemaHttp;
        /// <summary>
        /// Esquemas originales, se llena esta lista de esquemas originales cuando se hace el forzado del cambio de https a http
        /// </summary>
        private IDictionary<String,String> _uriEsquemasOriginales;
        /// <summary>
        /// El constructor de la clase.
        /// </summary>
        public TaxonomiaXBRL()
        {
            ElementosTaxonomiaPorArchivoPorId = new Dictionary<string, IDictionary<string, Concept>>();
            RecursosTaxonominaPorArchivoPorId = new Dictionary<string, IDictionary<string, Recurso>>();
            ElementosTaxonomiaPorArchivoPorName = new Dictionary<string, IDictionary<string, Concept>>();
            RolesTaxonomiaPorArchivoPorUri = new Dictionary<string, IDictionary<string, RoleType>>();
            ArcoRolesTaxonomiaPorArchivoPorUri = new Dictionary<string, IDictionary<string, ArcRoleType>>();
            ElementosTaxonomiaPorId = new Dictionary<string, Concept>();
            ElementosTaxonomiaPorName = new Dictionary<XmlQualifiedName, Concept>();
            RolesTaxonomia = new Dictionary<string, RoleType>();
            ArcoRolesTaxonomia = new Dictionary<string, ArcRoleType>();
            TiposDeDato = new Dictionary<XmlQualifiedName, XmlSchemaType>();
            CustomExtendedLinks = new List<CustomExtendedLink>();
            ArchivosEsquema = new Dictionary<string, XmlSchema>();
            ConjuntosEsquemasTaxonomia = new Dictionary<string, XmlSchemaSet>();
            XmlSettings = new XmlReaderSettings();
            XmlSettings.IgnoreComments = true;
            XmlSettings.ValidationType = ValidationType.Schema;
            XmlSettings.ValidationFlags |= XmlSchemaValidationFlags.ProcessInlineSchema;
            XmlSettings.ValidationFlags |= XmlSchemaValidationFlags.ProcessSchemaLocation;
            XmlSettings.ValidationFlags |= XmlSchemaValidationFlags.AllowXmlAttributes;
            XmlSettings.Schemas.Add("http://xbrl.org/2008/assertion/value", "http://www.xbrl.org/2008/value-assertion.xsd");
            XmlSettings.Schemas.Add("http://xbrl.org/2008/filter/dimension", "http://www.xbrl.org/2008/dimension-filter.xsd");
            XmlSettings.Schemas.Add("http://xbrl.org/2008/filter/concept", "http://www.xbrl.org/2008/concept-filter.xsd");
            XmlSettings.ValidationEventHandler += new ValidationEventHandler(ValidacionCallback);
            _uriEsquemasOriginales = new Dictionary<String, String>();
            _forzarEsquemaHttp = false;
        }

        #region Miembros de ITaxonomiaXBRL

        /// <summary>
        /// Permite procesar y agregar al DTS de una taxonomía un documento de tipo esquema.
        /// </summary>
        /// <param name="uriSchema">el URI donde se encuentra el esquema a procesar.</param>
        public void ProcesarDefinicionDeEsquema(string uriSchema, bool ForzarEsquemaHttp = false)
        {
            
            if (ForzarEsquemaHttp)
            {
                _forzarEsquemaHttp = ForzarEsquemaHttp;
                Uri uriTmp = new Uri(uriSchema);
                if (uriTmp.IsAbsoluteUri && "https".Equals(uriTmp.Scheme, StringComparison.InvariantCultureIgnoreCase)) {
                    uriSchema = uriSchema.Replace("https://", "http://");
                    uriSchema = uriSchema.Replace("HTTPS://", "HTTP://");
                    _uriEsquemasOriginales[uriTmp.OriginalString] = uriSchema;
                }
            }
            try
            {
                if (!ArchivosEsquema.Keys.Contains(uriSchema))
                {
                    XmlSchemaSet conjuntoEsquemasTaxonomia = null;
                    XmlSchema esquema = null;
                    bool esquemaEncontrado = false;
                    foreach (var conjuntoEsquemas in ConjuntosEsquemasTaxonomia.Values)
                    {
                        foreach (XmlSchema schema in conjuntoEsquemas.Schemas())
                        {
                            if (schema.SourceUri != null && schema.SourceUri.Equals(uriSchema))
                            {
                                esquemaEncontrado = true;
                                esquema = schema;
                                conjuntoEsquemasTaxonomia = conjuntoEsquemas;
                                break;
                            }
                        }
                    }

                    if(!esquemaEncontrado)
                    {
                        Debug.WriteLine("AbaxXbrl (" + DateTime.Now.ToLocalTime() + "): Cargando Esquema: " + Uri.UnescapeDataString(uriSchema));

                        using(XmlReader reader = XmlReader.Create(Uri.UnescapeDataString(uriSchema), XmlSettings))
                        {
                            esquema = XmlSchema.Read(reader, ValidacionCallback);
                        }
                        
                        conjuntoEsquemasTaxonomia = new XmlSchemaSet();
                        conjuntoEsquemasTaxonomia.ValidationEventHandler += ValidacionCallback;

                        conjuntoEsquemasTaxonomia.Add(esquema);
                        conjuntoEsquemasTaxonomia.Compile();

                        ConjuntosEsquemasTaxonomia.Add(esquema.SourceUri, conjuntoEsquemasTaxonomia);

                        Debug.WriteLine("AbaxXbrl (" + DateTime.Now.ToLocalTime() + "): Esquema Cargado: " + Uri.UnescapeDataString(uriSchema));
                    }

                    if (conjuntoEsquemasTaxonomia.IsCompiled && ManejadorErrores.PuedeContinuar())
                    {
                        foreach (XmlSchema schema in conjuntoEsquemasTaxonomia.Schemas())
                        {
                            if (schema.SourceUri != null && !ArchivosDTS.Contains(schema.SourceUri.ToString()))
                            {
                                ArchivosDTS.Add(schema.SourceUri.ToString());
                            }
                        }

                        DescubrirTaxonomia(esquema);
                    }
                    if (!ArchivosDTS.Contains(uriSchema))
                    {
                        ArchivosDTS.Add(uriSchema);
                    }
                }
            }
            catch (XmlSchemaException e)
            {
                ManejadorErrores.ManejarError(CodigosErrorXBRL.SchemaError, e, "Ocurrió un error al cargar la taxonomía: " + e.Message, XmlSeverityType.Error, uriSchema);
            }
            catch (Exception e)
            {
                ManejadorErrores.ManejarError(e, "Ocurrió un error al cargar la taxonomía: " + e.Message, XmlSeverityType.Error, uriSchema);
            }
        }

       

        /// <summary>
        /// Procesa el fragmento del documento XML que contiene la definición de un elemento arcoRoleRef y lo agrega al DTS de la taxonomía.
        /// </summary>
        /// <param name="node">El nodo que contiene la definición del elemento arcoRoleRef</param>
        /// <param name="uriReferencia">El URI en el que se encuentra el archivo con la definición del elemento</param>
        /// <returns>el objeto <code>ArcRoleType</code> que representa el ArcoRol procesado. <code>null</code> si no fue posible procesar el elemento.</returns>
        public ArcRoleType ProcesarDefinicionArcoRoleRef(XmlNode node, string uriReferencia)
        {
            ArcRoleType arcoRolTipo = null;
            IDictionary<string, string> atributos = XmlUtil.ObtenerAtributosDeNodo(node);
            string href = null;
            string arcRoleUri = null;
            bool tieneAtributoSimple = false;

            tieneAtributoSimple = Linkbase.SimpleType.Equals(atributos[EtiquetasXBRLConstantes.TypeAttribute]);
            arcRoleUri = atributos[EtiquetasXBRLConstantes.ArcroleURIAttribute];
            href = atributos[EtiquetasXBRLConstantes.HrefAttribute];
            
            if (!tieneAtributoSimple)
            {
                ManejadorErrores.ManejarError(null, "3.5.2.5.1 Se encontró un elemento arcRoleRef con valor del atributo xlink:type diferente de \"simple\": " + atributos[EtiquetasXBRLConstantes.TypeAttribute] + " Nodo: " + node.OuterXml, XmlSeverityType.Error);
            }
            else if (arcRoleUri == null || arcRoleUri.Equals(""))
            {
                ManejadorErrores.ManejarError(null, "3.5.2.5.5 Se encontró un elemento arcRoleRef con valor del atributo xlink:arcroleURI sin definir.  Nodo: " + node.OuterXml, XmlSeverityType.Error);
            }
            else if (href == null || href.Equals(""))
            {
                ManejadorErrores.ManejarError(null, "3.5.2.5.2 Se encontró un elemento arcRoleRef con valor del atributo xlink:href sin definir.  Nodo: " + node.OuterXml, XmlSeverityType.Error);
            }
            else if (!ArcoRolesTaxonomia.Keys.Contains(arcRoleUri))
            {
                ApuntadorElementoXBRL apuntador = new ApuntadorElementoXBRL(href);

                Uri uriEsquemaArcRol = null;
                try
                {
                    uriEsquemaArcRol = new Uri(new Uri(uriReferencia), apuntador.UbicacionArchivo);
                }
                catch (UriFormatException e)
                {
                    ManejadorErrores.ManejarError(e, "3.5.2.5.2 Se encontró un elemento arcRoleRef con un href malformado: " + (href ?? "") + " Nodo: " + node.OuterXml, XmlSeverityType.Error);
                }

                if (uriEsquemaArcRol != null && !ArchivosEsquema.Keys.Contains(uriEsquemaArcRol.ToString()))
                {
                    ProcesarDefinicionDeEsquema(uriEsquemaArcRol.ToString());
                }

                if (uriEsquemaArcRol == null || !ArchivosEsquema.Keys.Contains(uriEsquemaArcRol.ToString()))
                {
                    ManejadorErrores.ManejarError(null, "3.5.2.5.2 Se encontró un elemento arcRoleRef con referencia a un esquema que no contiene el arco rol especificado. Nodo: " + node.OuterXml, XmlSeverityType.Error);
                }
                else
                {
                    if (!ArcoRolesTaxonomia.Keys.Contains(arcRoleUri))
                    {
                        ManejadorErrores.ManejarError(null, "3.5.2.5.2 Se encontró un elemento arcRoleRef con referencia a un esquema que no contiene el arco rol especificado. Nodo: " + node.OuterXml, XmlSeverityType.Error);
                    }
                    else
                    {
                        arcoRolTipo = ArcoRolesTaxonomia[arcRoleUri];
                        if (apuntador.Identificador == null || apuntador.Identificador.Equals(""))
                        {
                            ManejadorErrores.ManejarError(null, "3.5.2.5.2 Se encontró un elemento arcRoleRef con valor del atributo xlink:href inválido, no especificó el ID del arco rol al que hace referencia.  Nodo: " + node.OuterXml, XmlSeverityType.Error);
                        }
                        else if (arcoRolTipo != null && !arcoRolTipo.Id.Equals(apuntador.Identificador))
                        {
                            ManejadorErrores.ManejarError(null, "3.5.2.5.2 Se encontró un elemento arcRoleRef con valor del atributo xlink:href inválido, el ID proporcionado no coincide con ID del arco rol al que hace referencia.  Nodo: " + node.OuterXml, XmlSeverityType.Error);
                        }
                    }
                }

            }
            else
            {
                ApuntadorElementoXBRL apuntador = new ApuntadorElementoXBRL(href);
                arcoRolTipo = ArcoRolesTaxonomia[arcRoleUri];
                if (apuntador.Identificador == null || apuntador.Identificador.Equals(""))
                {
                    ManejadorErrores.ManejarError(null, "3.5.2.5.2 Se encontró un elemento arcRoleRef con valor del atributo xlink:href inválido, no especificó el ID del arco rol al que hace referencia.  Nodo: " + node.OuterXml, XmlSeverityType.Error);
                }
                else if (arcoRolTipo != null && !arcoRolTipo.Id.Equals(apuntador.Identificador))
                {
                    ManejadorErrores.ManejarError(null, "3.5.2.5.2 Se encontró un elemento arcRoleRef con valor del atributo xlink:href inválido, el ID proporcionado no coincide con ID del arco rol al que hace referencia.  Nodo: " + node.OuterXml, XmlSeverityType.Error);
                }
            }

            return arcoRolTipo;
        }

        /// <summary>
        /// Procesa el fragmento del documento XML que contiene la definición de un elemento roleRef y lo agrega al DTS de la taxonomía.
        /// </summary>
        /// <param name="node">El nodo que contiene la definición del elemento roleRef</param>
        /// <param name="uriLinkbase">El URI en el que se encuentra el archivo con la definición del elemento</param>
        /// <returns>el objeto <code>RoleType</code> que representa el ArcoRol procesado. <code>null</code> si no fue posible procesar el elemento.</returns>
        public RoleType ProcesarDefinicionRoleRef(XmlNode node, string uriReferencia)
        {
            RoleType rolTipo = null;
            IDictionary<string, string> atributos = XmlUtil.ObtenerAtributosDeNodo(node);
            string tipo = atributos[EtiquetasXBRLConstantes.TypeAttribute];
            string href = atributos[EtiquetasXBRLConstantes.HrefAttribute]; ;
            string roleUri = atributos[EtiquetasXBRLConstantes.RoleURIAttribute];
           
            if (!Linkbase.SimpleType.Equals(tipo))
            {
                ManejadorErrores.ManejarError(null, "3.5.2.4.1 Se encontró un elemento roleRef con valor del atributo xlink:type diferente de \"simple\": " + tipo + " Nodo: " + node.OuterXml, XmlSeverityType.Error);
            }
            else if (roleUri == null || roleUri.Equals(""))
            {
                ManejadorErrores.ManejarError(null, "3.5.2.4.5 Se encontró un elemento roleRef con valor del atributo xlink:roleURI sin definir.  Nodo: " + node.OuterXml, XmlSeverityType.Error);
            }
            else if (href == null || href.Equals(""))
            {
                ManejadorErrores.ManejarError(null, "3.5.2.4.2 Se encontró un elemento roleRef con valor del atributo xlink:href sin definir.  Nodo: " + node.OuterXml, XmlSeverityType.Error);
            }
            else if (!RolesTaxonomia.Keys.Contains(roleUri))
            {
                ApuntadorElementoXBRL apuntador = new ApuntadorElementoXBRL(href);
                Uri uriEsquemaRol = new Uri(new Uri(uriReferencia), apuntador.UbicacionArchivo);

                if (!ArchivosEsquema.Keys.Contains(uriEsquemaRol.ToString()))
                {
                    ProcesarDefinicionDeEsquema(uriEsquemaRol.ToString());
                }

                if (!ArchivosEsquema.Keys.Contains(uriEsquemaRol.ToString()))
                {
                    ManejadorErrores.ManejarError(null, "3.5.2.4.2 Se encontró un elemento roleRef con referencia a un esquema que no contiene el rol especificado. Nodo: " + node.OuterXml, XmlSeverityType.Error);
                }
                else
                {
                    if (!RolesTaxonomia.Keys.Contains(roleUri))
                    {
                        ManejadorErrores.ManejarError(null, "3.5.2.4.2 Se encontró un elemento roleRef con referencia a un esquema que no contiene el rol especificado. Nodo: " + node.OuterXml, XmlSeverityType.Error);
                    }
                    else
                    {
                        rolTipo = RolesTaxonomia[roleUri];
                        if (apuntador.Identificador == null || apuntador.Identificador.Equals(""))
                        {
                            ManejadorErrores.ManejarError(null, "3.5.2.4.2 Se encontró un elemento roleRef con valor del atributo xlink:href inválido, no especificó el ID del rol al que hace referencia.  Nodo: " + node.OuterXml, XmlSeverityType.Error);
                        }
                        else if (rolTipo != null && !rolTipo.Id.Equals(apuntador.Identificador))
                        {
                            ManejadorErrores.ManejarError(null, "3.5.2.4.2 Se encontró un elemento roleRef con valor del atributo xlink:href inválido, el ID proporcionado no coincide con ID del rol al que hace referencia.  Nodo: " + node.OuterXml, XmlSeverityType.Error);
                        }
                    }
                }
            }
            else
            {
                ApuntadorElementoXBRL apuntador = new ApuntadorElementoXBRL(href);
                rolTipo = RolesTaxonomia[roleUri];
                if (apuntador.Identificador == null || apuntador.Identificador.Equals(""))
                {
                    ManejadorErrores.ManejarError(null, "3.5.2.4.2 Se encontró un elemento roleRef con valor del atributo xlink:href inválido, no especificó el ID del rol al que hace referencia.  Nodo: " + node.OuterXml, XmlSeverityType.Error);
                }
                else if (rolTipo != null && !rolTipo.Id.Equals(apuntador.Identificador))
                {
                    ManejadorErrores.ManejarError(null, "3.5.2.4.2 Se encontró un elemento roleRef con valor del atributo xlink:href inválido, el ID proporcionado no coincide con ID del rol al que hace referencia.  Nodo: " + node.OuterXml, XmlSeverityType.Error);
                }
            }

            return rolTipo;
        }

        /// <summary>
        /// Procesa una definición de linkbase contenida en un documento XML y lo agrega al DTS de la taxonomía.
        /// </summary>
        /// <param name="uriLinkbase">El URI donde se encuentra el XML a procesar</param>
        /// <param name="linkbaseRol">El Rol con el que fue referenciado este linkbase. Puede ser <code>null</code> en caso de que no sea importado a través de un elemento linkbaseRef.</param>
        public void ProcesarDefinicionDeLinkbase(string uriLinkbase, string linkbaseRol)
        {

            Uri uriLink = null;
            try
            {
                uriLink = new Uri(uriLinkbase);
            }
            catch (UriFormatException e)
            {
                ManejadorErrores.ManejarError(e, "El URI proporcionado está mal formado: " + uriLinkbase, XmlSeverityType.Error);
                return;
            }

            try
            {
                Debug.WriteLine("AbaxXbrl (" + DateTime.Now.ToString("HH:mm:ss.FFF") + "): Leyendo Archivo de Linkbase: " + uriLink.ToString());
                using(var xmlReader = XmlReader.Create(uriLink.ToString(), XmlSettings))
                {
                    if (xmlReader.Read())
                    {
                        var documentoLinkbase = new XmlDocument();
                        documentoLinkbase.Load(xmlReader);
                        Debug.WriteLine("AbaxXbrl (" + DateTime.Now.ToString("HH:mm:ss.FFF") + "): Archivo de Linkbase Leído: " + uriLink.ToString());
                        //A pesar de que el documento ya haya sido procesado de forma válida en otro esquema, las pruebas de conformance indican que el error se debe de 
                        //detectar: prueba 201-10 InvalidRefInSecondAppinfo
                        if (!String.IsNullOrEmpty(linkbaseRol) && !ValidarElementoLinkValidos(documentoLinkbase, linkbaseRol))
                        {
                            return;
                        }
                        
                        if (ArchivosLinkbase.Keys.Contains(uriLink.ToString()))
                            return;

                        ArchivosLinkbase.Add(uriLink.ToString(), documentoLinkbase);

                        ProcesarDefinicionDeLinkbase(documentoLinkbase.FirstChild, uriLink.ToString(), linkbaseRol);
                    }
                }
                
            }
            catch (UriFormatException e)
            {
                ManejadorErrores.ManejarError(e, "La ruta del archivo que contiene el linkbase está mal formada: " + uriLinkbase, XmlSeverityType.Error);
            }
            catch (FileNotFoundException e)
            {
                ManejadorErrores.ManejarError(e, "No se encontró el archivo que contiene el linkbase: " + uriLinkbase, XmlSeverityType.Error);
            }
            catch (XmlException e)
            {
                ManejadorErrores.ManejarError(e, "El archivo que contiene el linkbase está mal formado: " + uriLinkbase, XmlSeverityType.Error);
            }
            catch (Exception e)
            {
                ManejadorErrores.ManejarError(e, "Ocurrió un error al cargar el archivo que contiene el linkbase: " + uriLinkbase, XmlSeverityType.Error);
            }
        }
        /// <summary>
        /// Valida únicamente que los elementos extended link dentro de la etiqueta linkbase del documento 
        /// corresponda al elemento del linkbase válido de acuerdo al linkbaseRol enviado como parámetro
        /// </summary>
        /// <param name="documentoLinkbase">Documento a validar</param>
        /// <param name="linkbaseRol">Linkbaseref rol de referencia</param>
        /// <returns></returns>
        private bool ValidarElementoLinkValidos(XmlDocument documentoLinkbase, string linkbaseRol)
        {
            var valido = true;
            if (linkbaseRol != null && EtiquetasXBRLConstantes.ValidLinkBasesHref.Contains(linkbaseRol))
            {
                //si es un linkbase estándar
                foreach (var elementoRaiz in documentoLinkbase.ChildNodes)
                {
                    if(elementoRaiz is XmlElement)
                    {
                        var linkbaseDef = elementoRaiz as XmlElement;
                        if(linkbaseDef.NamespaceURI.Equals(EspacioNombresConstantes.LinkNamespace) && linkbaseDef.LocalName.Equals(EtiquetasXBRLConstantes.Linkbase))
                        {
                            //linkbase
                            foreach (var linkbase in linkbaseDef.ChildNodes)
                            {
                                if(linkbase is XmlElement)
                                {
                                    var linkbaseElement = linkbase as XmlElement;
                                    //Se encontró linkbase estándar
                                    if( linkbaseElement.NamespaceURI.Equals(EspacioNombresConstantes.LinkNamespace) && EtiquetasXBRLConstantes.ValidLinksElements.Contains(linkbaseElement.LocalName))
                                    {
                                        if(EtiquetasXBRLConstantes.LinkbaseRefDeLinkElement.ContainsKey(linkbaseElement.LocalName))
                                        {
                                            if(!EtiquetasXBRLConstantes.LinkbaseRefDeLinkElement[linkbaseElement.LocalName].Equals(linkbaseRol))
                                            {
                                                ManejadorErrores.ManejarError(null, "4.3.4 Se encontró un elemento '" + linkbaseElement.LocalName + "' que fue referenciado por un elemento " +
                                                                                   "linkbaseRef con xlink:role inválido, el ROLE erróneo es: " +
                                                linkbaseRol + ".  Nodo: " + linkbaseElement.OuterXml, XmlSeverityType.Error);
                                                valido = false;
                                            }
                                        }
                            
                                    }
                                }

                            }
                        }
                    }
                }
            }
            return valido;
        }



        /// <summary>
        /// Procesa el fragmento de la taxonomía que contiene la definición de un linkbaseRef.
        /// </summary>
        /// <param name="node">El nodo que contiene la referencia al linkbaseRef a procesar.</param>
        /// <param name="uriReferencia">El URI de referencia en donde se encuentra la declaración del elemento</param>
        public void ProcesarDefinicionDeLinkbaseRef(XmlNode node, string uriReferencia)
        {
            string role = null;
            string arcrole = null;
            string href = null;
            string baseHref = null;
            foreach (XmlAttribute attribute in node.Attributes)
            {
                if (attribute.LocalName.Equals(EtiquetasXBRLConstantes.TypeAttribute))
                {
                    if (!attribute.Value.Equals(Linkbase.SimpleType))
                    {
                        ManejadorErrores.ManejarError(null, "4.3.1 Se encontró un elemento linkbaseRef con valor del atributo xlink:type diferente de \"simple\": " + attribute.Value + " Nodo: " + node.OuterXml, XmlSeverityType.Error);
                    }
                }
                else if (attribute.LocalName.Equals(EtiquetasXBRLConstantes.RoleAttribute))
                {
                    role = attribute.Value;
                }
                else if (attribute.LocalName.Equals(EtiquetasXBRLConstantes.ArcroleAttribute))
                {
                    arcrole = attribute.Value;
                }
                else if (attribute.LocalName.Equals(EtiquetasXBRLConstantes.HrefAttribute))
                {
                    href = attribute.Value;
                }
                else if (attribute.LocalName.Equals(EtiquetasXBRLConstantes.BaseAttribute))
                {
                    baseHref = attribute.Value;
                }
            }

            if (arcrole == null || !arcrole.Equals(Linkbase.ArcroleLinkbase))
            {
                ManejadorErrores.ManejarError(null, "4.3.3 Se encontró un elemento linkbaseRef sin el arcrole requerido: " + (arcrole ?? "") + " Nodo: " + node.OuterXml, XmlSeverityType.Error);
            }
            else if (href == null || href.Equals(""))
            {
                ManejadorErrores.ManejarError(null, "4.3.2 Se encontró un elemento linkbaseRef sin el href requerido: " + (href ?? "") + " Nodo: " + node.OuterXml, XmlSeverityType.Error);
            }
            else
            {
                Uri uriLinkbase = null;

                string uriLink = XmlUtil.ResolverUriRelativoAOtro(XmlUtil.ResolverUriRelativoAOtro(uriReferencia, baseHref), href);
                if (uriLink == null)
                {
                    ManejadorErrores.ManejarError(null, "4.3.2 Se encontró un elemento linkbaseRef con un atributo base malformado: " + (baseHref ?? "") + " Nodo: " + node.OuterXml, XmlSeverityType.Error);
                }
                uriLinkbase = new Uri(uriLink);

                ProcesarDefinicionDeLinkbase(uriLinkbase.ToString(), role);
            }
        }

        #endregion

        /// <summary>
        /// Descubre la taxonomía que acaba de ser cargada. El proceso de descubrir la taxonómía comprende en recorrer todos los archivos que la componen para identificar
        /// los elementos, roles y linkbases de la misma.
        /// </summary>
        /// <param name="schema">el esquema a descubrir.</param>
        /// <param name="espaciosDeNombresDescubiertos">Una lista con los espacios de nombres que ya han sido descubiertos para evitar ciclos o reprocesamientos innecesarios.</param>
        private void DescubrirTaxonomia(XmlSchema schema)
        {
            if (schema == null)
            {
                return;
            }

            if (schema.SourceUri != null && !ArchivosEsquema.Keys.Contains(schema.SourceUri))
            {
                ArchivosEsquema.Add(schema.SourceUri, schema);
                if (_esquemaPrincipal == null) {
                    _esquemaPrincipal = schema;
                }
            }
            else
            {
                return;
            }

            Debug.WriteLine("AbaxXbrl (" + DateTime.Now.ToLocalTime() + "): Procesando Esquema: " + schema.SourceUri);
           
            DescubrirElementos(schema);
            DescubrirRoles(schema);
            if (schema.Includes != null)
            {
                foreach (XmlSchemaExternal external in schema.Includes)
                {
                    if (external is XmlSchemaInclude)
                    {
                        ProcesarDefinicionDeEsquemaInclude(external.Schema);
                    }
                }
                foreach (XmlSchemaExternal external in schema.Includes)
                {
                    if (external is XmlSchemaImport)
                    {
                        ProcesarDefinicionDeEsquemaInclude(external.Schema);
                    }
                }
            }
            DescubrirLinkbases(schema);

            Debug.WriteLine("AbaxXbrl (" + DateTime.Now.ToLocalTime() + "): Esquema procesado: " + schema.SourceUri);
        }
        /// <summary>
        /// Permite procesar y agregar al DTS de una taxonomía un documento de tipo esquema.
        /// </summary>
        /// <param name="uriSchema">el URI donde se encuentra el esquema a procesar.</param>
        public void ProcesarDefinicionDeEsquemaInclude(XmlSchema esquemaInclude)
        {
            try
            {
                if (!ArchivosEsquema.Keys.Contains(esquemaInclude.SourceUri))
                {
                    XmlSchema esquema = esquemaInclude;
                    if (esquema.SourceUri != null && !ArchivosDTS.Contains(esquema.SourceUri.ToString()))
                    {
                        ArchivosDTS.Add(esquema.SourceUri.ToString());
                    }
                    DescubrirTaxonomia(esquema);
                }
            }
            catch (XmlSchemaException e)
            {
                ManejadorErrores.ManejarError(CodigosErrorXBRL.SchemaError, e, "Ocurrió un error al cargar la taxonomía: " + e.Message, XmlSeverityType.Error);
            }
            catch (Exception e)
            {
                ManejadorErrores.ManejarError(e, "Ocurrió un error al cargar la taxonomía: " + e.Message, XmlSeverityType.Error);
            }
        }

        /// <summary>
        /// Descubre las definiciones de roles dentro del esquema que forma parte de la taxonomía.
        /// </summary>
        /// <param name="schema">el esquema por descubrir.</param>
        /// <param name="schemaLocation">la ubicación física del archivo con el esquema</param>
        private void DescubrirRoles(XmlSchema schema)
        {
            Debug.WriteLine("AbaxXbrl (" + DateTime.Now.ToLocalTime() + "): Leyendo Roles: " + schema.SourceUri);

            foreach (XmlSchemaObject o in schema.Items)
            {
                if (o is XmlSchemaAnnotation)
                {
                    XmlSchemaAnnotation annotation = (XmlSchemaAnnotation)o;
                    string uriBase = schema.SourceUri;
                    if (annotation.UnhandledAttributes != null)
                    {
                        foreach (XmlAttribute a in annotation.UnhandledAttributes)
                        {
                            if (a.LocalName.Equals(EtiquetasXBRLConstantes.BaseAttribute))
                            {
                                uriBase = XmlUtil.ResolverUriRelativoAOtro(uriBase, a.Value);
                                if (uriBase == null)
                                {
                                    ManejadorErrores.ManejarError(null, "Se encontró un elemento annotation con un atributo base mal formado. Linea: " + annotation.LineNumber + ". Uri: " + annotation.SourceUri, XmlSeverityType.Error);
                                }
                            }
                        }
                    }
                    if (annotation.Items != null)
                    {
                        foreach (var children in annotation.Items)
                        {
                            if (children is XmlSchemaAppInfo)
                            {
                                XmlSchemaAppInfo appInfo = (XmlSchemaAppInfo)children;
                                XDocument document = XDocument.Load(schema.SourceUri);
                                if (document != null)
                                {
                                    XNamespace ns = EspacioNombresConstantes.SchemaNamespace;
                                    XElement appinfoElement = document.Descendants(ns + "appinfo").First();
                                    if (appinfoElement != null)
                                    {
                                        XNamespace nsXml = EspacioNombresConstantes.XmlNamespace;
                                        uriBase = XmlUtil.ResolverUriRelativoAOtro(uriBase, (string)appinfoElement.Attribute(nsXml + "base") ?? string.Empty);
                                        if (uriBase == null)
                                        {
                                            ManejadorErrores.ManejarError(null, "Se encontró un elemento appInfo con un atributo base mal formado. Linea: " + appInfo.LineNumber + ". Uri: " + appInfo.SourceUri, XmlSeverityType.Error);
                                        }
                                    }
                                }
                                if (appInfo.Markup != null)
                                {
                                    foreach (var node in appInfo.Markup)
                                    {
                                        if (node.LocalName.Equals(EtiquetasXBRLConstantes.RoleType))
                                        {
                                            ProcesarDefinicionDeRol(node, schema);
                                        }
                                        else if (node.LocalName.Equals(EtiquetasXBRLConstantes.ArcroleType))
                                        {
                                            ProcesarDefinicionDeArcoRol(node, schema);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            Debug.WriteLine("AbaxXbrl (" + DateTime.Now.ToLocalTime() + "): Roles Leídos: " + schema.SourceUri);
        }

        /// <summary>
        /// Descubre las definiciones de linkbases dentro del esquema que forma parte de la taxonomía.
        /// </summary>
        /// <param name="schema">el esquema por descubrir.</param>
        /// <param name="schemaLocation">la ubicación física del archivo con el esquema</param>
        private void DescubrirLinkbases(XmlSchema schema)
        {
            Debug.WriteLine("AbaxXbrl (" + DateTime.Now.ToLocalTime() + "): Leyendo Linkbases: " + schema.SourceUri);
            foreach (XmlSchemaObject o in schema.Items)
            {
                if (o is XmlSchemaAnnotation)
                {
                    XmlSchemaAnnotation annotation = (XmlSchemaAnnotation)o;
                    string uriBase = schema.SourceUri;
                    if (annotation.UnhandledAttributes != null)
                    {
                        foreach (XmlAttribute a in annotation.UnhandledAttributes)
                        {
                            if (a.LocalName.Equals(EtiquetasXBRLConstantes.BaseAttribute))
                            {
                                uriBase = XmlUtil.ResolverUriRelativoAOtro(uriBase, a.Value);
                                if (uriBase == null)
                                {
                                    ManejadorErrores.ManejarError(null, "Se encontró un elemento annotation con un atributo base mal formado. Linea: " + annotation.LineNumber + ". Uri: " + annotation.SourceUri, XmlSeverityType.Error);
                                }
                            }
                        }
                    }
                    if (annotation.Items != null)
                    {
                        foreach (var children in annotation.Items)
                        {
                            if (children is XmlSchemaAppInfo)
                            {
                                XmlSchemaAppInfo appInfo = (XmlSchemaAppInfo)children;
                                XDocument document = XDocument.Load(schema.SourceUri);
                                
                                if (document != null)
                                {
                                    XNamespace ns = EspacioNombresConstantes.SchemaNamespace;
                                    XElement appinfoElement = document.Descendants(ns + "appinfo").First();
                                    if (appinfoElement != null)
                                    {
                                        XNamespace nsXml = EspacioNombresConstantes.XmlNamespace;
                                        uriBase = XmlUtil.ResolverUriRelativoAOtro(uriBase, (string)appinfoElement.Attribute(nsXml + "base") ?? string.Empty);
                                        if (uriBase == null)
                                        {
                                            ManejadorErrores.ManejarError(null, "Se encontró un elemento appInfo con un atributo base mal formado. Linea: " + appInfo.LineNumber + ". Uri: " + appInfo.SourceUri, XmlSeverityType.Error);
                                        }
                                    }
                                }
                                if (appInfo.Markup != null)
                                {
                                    foreach (var node in appInfo.Markup)
                                    {
                                        if (node.LocalName.Equals(EtiquetasXBRLConstantes.LinkbaseRef))
                                        {
                                            ProcesarDefinicionDeLinkbaseRef(node, uriBase);
                                        }
                                        else if (node.LocalName.Equals(EtiquetasXBRLConstantes.Linkbase))
                                        {
                                            ProcesarDefinicionDeLinkbase(node, uriBase, null);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            Debug.WriteLine("AbaxXbrl (" + DateTime.Now.ToLocalTime() + "): Linkbases Descubiertos: " + schema.SourceUri);
        }

        /// <summary>
        /// Descubre los elementos de la taxonomía incluídos en el esquema.
        /// </summary>
        /// <param name="schema">el esquema por descubrir.</param>
        private void DescubrirElementos(XmlSchema schema)
        {
            if (ElementosTaxonomiaPorArchivoPorId.Keys.Contains(schema.SourceUri))
            {
                return;
            }

            Debug.WriteLine("AbaxXbrl (" + DateTime.Now.ToLocalTime() + "): Leyendo Elementos: " + schema.SourceUri);

            foreach (DictionaryEntry entry in schema.SchemaTypes)
            {
                XmlSchemaType type = (XmlSchemaType)entry.Value;

                if (!type.QualifiedName.Equals(EspacioNombresConstantes.InstanceNamespace) && !type.QualifiedName.Equals(EspacioNombresConstantes.XbrlXLinkNamespace))
                {
                    TiposDeDato.Add(type.QualifiedName, type);
                }

                if (type.Parent is XmlSchemaRedefine)
                {
                    ManejadorErrores.ManejarError(null, "5.1.5 Se encontró un elemento de tipo redefine en un esquema de taxonomía para el tipo de dato en la línea: " + type.LineNumber + ". Uri: " + type.SourceUri, XmlSeverityType.Error);
                }
            }

            IList<XmlSchemaElement> elementosFinales = new List<XmlSchemaElement>();
            foreach (XmlSchemaElement el in schema.Elements.Values)
            {
                elementosFinales.Add(el);
            }
            if (elementosFinales.Count == 0)
            {
                //El lector de XML no tiene los elementos del esquema, esto es un posible bug del parser, pasa cuando se vuelve a cargar un archivo de esquema
                //fuera del esquema set del archivo que lo incluye
                //se agregan los elementos del esquema global
                foreach (var schemaSet in ConjuntosEsquemasTaxonomia.Values)
                {
                    foreach (XmlSchemaElement element in schemaSet.GlobalElements.Values)
                    {
                        if (element.SourceUri.Equals(schema.SourceUri))
                        {
                            elementosFinales.Add(element);
                        }
                    }
                }
                
            }


            foreach (XmlSchemaElement element in elementosFinales)
            {
                int tipoElemento = 0;
                if (PerteneceAGrupoSustitucionItemOTuple(element, out tipoElemento))
                {

                    if (element.Parent is XmlSchemaRedefine)
                    {
                        ManejadorErrores.ManejarError(null, "5.1.5 Se encontró un elemento de tipo redefine en un esquema de taxonomía para el elemento en la línea: " + element.LineNumber + ". Uri: " + element.SourceUri, XmlSeverityType.Error);
                    }
                    if (element.Id != null)
                    {
                        if (ElementosTaxonomiaPorName.ContainsKey(element.QualifiedName))
                        {
                            ManejadorErrores.ManejarError(null, "5.1.1 Se encontró un concepto con el atributo name duplicado en la taxonomía: " + element.Name + ". Nodo: " + element.ToString(), XmlSeverityType.Error);
                            return;
                        }

                        if (ElementosTaxonomiaPorId.ContainsKey(element.Id))
                        {
                            ManejadorErrores.ManejarError(null, "5.1.1 Se encontró un concepto con el atributo id duplicado en la taxonomía: " + element.Id + ". Nodo: " + element.ToString(), XmlSeverityType.Error);
                            return;
                        }
                    }

                    Concept concepto = null;
                    if (tipoElemento == Concept.Item)
                    {
                        concepto = new ConceptItem(element);
                        concepto.Tipo = tipoElemento;
                        ProcesarDefinicionDeElementoItem(element,concepto as ConceptItem);
                    }
                    else if(tipoElemento == Concept.Tuple)
                    {
                        concepto = ProcesarDefinicionDeElementoTuple(element);
                    }
                    else if (tipoElemento == Concept.HypercubeItem)
                    {
                        concepto = new ConceptHypercubeItem(element);
                        concepto.Tipo = tipoElemento;
                        ProcesarDefinicionDeElementoItem(element, concepto as ConceptItem);
                    }
                    else if(tipoElemento == Concept.DimensionItem)
                    {
                        concepto = new ConceptDimensionItem(element);
                        concepto.Tipo = tipoElemento;
                        ProcesarDefinicionDeElementoItem(element, concepto as ConceptItem);
                        //Atributo extra xbrldt:typedDomainRef
                        XmlAttribute attr = element.UnhandledAttributes.FirstOrDefault(x => EspacioNombresConstantes.DimensionTaxonomyNamespace.Equals(x.NamespaceURI) &&
                                                                                            EtiquetasXBRLConstantes.TypedDomainRefAttribute.Equals(x.LocalName));
                        if (attr != null)
                        {
                            var ptr = new ApuntadorElementoXBRL(Uri.UnescapeDataString(attr.Value));
                            Uri uriEsquemaElemento = null;
                            if (ptr.UbicacionArchivo == null || ptr.UbicacionArchivo.Equals(string.Empty))
                            {
                                uriEsquemaElemento = new Uri(schema.SourceUri);
                            }
                            else
                            {
                                uriEsquemaElemento = new Uri(new Uri(schema.SourceUri), ptr.UbicacionArchivo);
                            }
                            ptr.UbicacionArchivo = uriEsquemaElemento.ToString();
                            (concepto as ConceptDimensionItem).ReferenciaDimensionTipificada = ptr;
                            (concepto as ConceptDimensionItem).Explicita = false;
                        }
                        
                    }

                    

                    if (element.Id == null)
                    {
                        element.Id = "E" + Guid.NewGuid().ToString() + "_" + element.Name;
                        concepto.Id = element.Id;
                    }
                    if (!ElementosTaxonomiaPorArchivoPorName.Keys.Contains(element.SourceUri))
                    {
                        ElementosTaxonomiaPorArchivoPorName.Add(element.SourceUri, new Dictionary<string, Concept>());
                    }
                    if (!ElementosTaxonomiaPorArchivoPorId.Keys.Contains(element.SourceUri))
                    {
                        ElementosTaxonomiaPorArchivoPorId.Add(element.SourceUri, new Dictionary<string, Concept>());
                    }
                    ElementosTaxonomiaPorId.Add(element.Id, concepto);
                    ElementosTaxonomiaPorName.Add(element.QualifiedName, concepto);
                    ElementosTaxonomiaPorArchivoPorId[element.SourceUri].Add(element.Id, concepto);
                    ElementosTaxonomiaPorArchivoPorName[element.SourceUri].Add(element.Name, concepto);
                }
                else if (PerteneceAGrupoSustitucionExtended(element))
                {
                    CustomExtendedLink customExtended = new CustomExtendedLink();
                    customExtended.Nombre = new XmlQualifiedName(element.Name, schema.TargetNamespace);
                    customExtended.Elemento = element;

                    CustomExtendedLinks.Add(customExtended);
                }
            }
            Debug.WriteLine("AbaxXbrl (" + DateTime.Now.ToLocalTime() + "): Elementos Leídos: " + schema.SourceUri);
        }

        /// <summary>
        /// Procesa la definición de un elemento item al tiempo que valida la estructura y correcta conformación de este.
        /// </summary>
        /// <param name="element">el elemento que contiene la definición de una item</param>
        /// <returns>Un objeto <code>Item</code> el cual representa el elemento procesado.</returns>
        private ConceptItem ProcesarDefinicionDeElementoItem(XmlSchemaElement element,ConceptItem item)
        {
            
            item.Id = element.Id;

            if (element.Id == null)
            {
                ManejadorErrores.ManejarError(null, "4.6 Se encontró un concepto con grupo de sustitución item y sin definición de un id. Nodo: " + element.ToString(), XmlSeverityType.Warning);
            }
            XmlQualifiedName xbrlBaseType = null;
            item.TipoDato = element.ElementSchemaType.QualifiedName;
            
            if (EsTipoDeDatoDerivadoDeXbrl(element.ElementSchemaType, out xbrlBaseType))
            {

                item.TipoDatoXbrl = xbrlBaseType;
                item.EsTipoDatoNumerico = TiposDatoXBRL.TiposNumericosXBRL.Contains(item.TipoDatoXbrl.Name);
                if (item.TipoDatoXbrl.Name.Equals(TiposDatoXBRL.FractionItemType) && item.TipoDatoXbrl.Namespace.Equals(EspacioNombresConstantes.InstanceNamespace))
                {
                    item.EsTipoDatoFraccion = true;
                }
                if (item.TipoDatoXbrl.Name.Equals(TiposDatoXBRL.MonetaryItemType) && item.TipoDatoXbrl.Namespace.Equals(EspacioNombresConstantes.InstanceNamespace))
                {
                    item.EsTipoDatoMonetario = true;
                }
                if (item.TipoDatoXbrl.Name.Equals(TiposDatoXBRL.SharesItemType) && item.TipoDatoXbrl.Namespace.Equals(EspacioNombresConstantes.InstanceNamespace))
                {
                    item.EsTipoDatoAcciones = true;
                }
                if (item.TipoDatoXbrl.Name.Equals(TiposDatoXBRL.PureItemType) && item.TipoDatoXbrl.Namespace.Equals(EspacioNombresConstantes.InstanceNamespace))
                {
                    item.EsTipoDatoPuro = true;
                }
                if (item.TipoDatoXbrl.Name.Equals(TiposDatoXBRL.TokenItemType) && item.TipoDatoXbrl.Namespace.Equals(EspacioNombresConstantes.InstanceNamespace))
                {
                    item.EsTipoDatoToken = true;
                }
                item.Abstracto = element.IsAbstract;
                item.Nillable = element.IsNillable;
                item.Balance = null;
                item.TipoPeriodo = null;

                if (element.UnhandledAttributes != null)
                {
                    foreach (XmlAttribute a in element.UnhandledAttributes)
                    {
                        if (a.NamespaceURI.Equals(EspacioNombresConstantes.InstanceNamespace) && a.LocalName.Equals(EtiquetasXBRLConstantes.BalanceAttribute))
                        {
                            item.Balance = XmlUtil.ParsearQName(a.Value);
                        }
                        else if (a.NamespaceURI.Equals(EspacioNombresConstantes.InstanceNamespace) && a.LocalName.Equals(EtiquetasXBRLConstantes.PeriodTypeAttribute))
                        {
                            item.TipoPeriodo = XmlUtil.ParsearQName(a.Value);
                        }
                        else
                        {
                            string nombre = (!String.IsNullOrEmpty(a.Prefix) ? (a.Prefix+":") : (
                                !String.IsNullOrEmpty(a.NamespaceURI)? (a.NamespaceURI+":") : ""
                                )) + a.LocalName;


                            item.AtributosAdicionales[nombre] = a.Value;
                        }
                    }
                }

                if (element.ElementSchemaType.TypeCode == XmlTypeCode.Token && element.ElementSchemaType is XmlSchemaComplexType &&
                           (element.ElementSchemaType as XmlSchemaComplexType).ContentModel != null &&
                           (element.ElementSchemaType as XmlSchemaComplexType).ContentModel.Content is XmlSchemaSimpleContentRestriction)
                {
                    item.ValoresToken = new List<string>();
                    var contentModel =
                        ((element.ElementSchemaType as XmlSchemaComplexType).ContentModel.Content as XmlSchemaSimpleContentRestriction);
                    if (contentModel.Facets != null)
                    {
                        foreach (XmlSchemaObject facet in contentModel.Facets)
                        {
                            if (facet is XmlSchemaEnumerationFacet)
                            {
                                item.ValoresToken.Add((facet as XmlSchemaEnumerationFacet).Value);
                            }
                        }
                    }

                }


                if (!item.EsTipoDatoMonetario && item.Balance != null)
                {
                    ManejadorErrores.ManejarError(null, "5.1.1.2 Se encontró un concepto con grupo de sustitución item y con tipo de dato diferente de monetaryItemType con definición del atributo balance: " + element.ElementSchemaType.QualifiedName.Name + ". Nodo: " + element.ToString(), XmlSeverityType.Error);
                }
                if (item.TipoPeriodo == null)
                {
                    ManejadorErrores.ManejarError(null, "5.1.1.2 Se encontró un concepto con grupo de sustitución item y sin definición del atributo periodType. Nodo: " + element.ToString(), XmlSeverityType.Error);
                }
            }
            else
            {
                ManejadorErrores.ManejarError(null, "5.1.1.3 Se encontró un concepto con grupo de sustitución item y con un tipo de dato no derivado de los definidos por XBRL: " + element.ElementSchemaType.QualifiedName.Name + ". Nodo: " + element.ToString(), XmlSeverityType.Error);
            }

            return item;
        }

        

        /// <summary>
        /// Determina si un tipo de dato es uno de los tipos de dato definidos por XBRL o es derivado por restricción de uno de estos.
        /// </summary>
        /// <param name="dataType">El tipo de dato que se desea revisar.</param>
        /// <param name="dataTypeBaseQName">El nombre calificado del tipo de dato XBRL del cual es derivado. <code>null</code> en caso de que este no sea derivado de un tipo de dato definido por XBRL.</param>
        /// <returns><code>true</code> si el tipo de dato es o deriva de uno de los tipos definidos por XBRL. <code>false</code> en cualquier otro caso.</returns>
        private bool EsTipoDeDatoDerivadoDeXbrl(XmlSchemaType dataType, out XmlQualifiedName dataTypeBaseQName)
        {
            bool exito = true;
            dataTypeBaseQName = null;
            if (dataType.QualifiedName != null && dataType.QualifiedName.Namespace.Equals(EspacioNombresConstantes.InstanceNamespace))
            {
                if (TiposDatoXBRL.TiposXBRL.Contains(dataType.QualifiedName.Name))
                {
                    dataTypeBaseQName = dataType.QualifiedName;
                }
                else
                {
                    exito = false;
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
                            ManejadorErrores.ManejarError(null, "5.1.1.3 Se encontró un concepto con grupo de sustitución item y con un tipo de dato complejo no derivado de los definidos por XBRL: " + (dataType.QualifiedName != null ? dataType.QualifiedName.Name : dataType.SourceUri), XmlSeverityType.Error);
                            exito = false;
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
                        XmlSchemaType tipo = BuscarTipoEnEsquema(qName);

                        if (tipo != null)
                        {
                            exito = EsTipoDeDatoDerivadoDeXbrl(tipo, out qName);
                            dataTypeBaseQName = qName;
                        }
                        else
                        {
                            ManejadorErrores.ManejarError(null, "5.1.1.3 Se encontró un concepto con grupo de sustitución item y con referencia a un tipo de dato derivado que no fue posible localizar. Tipo de Dato: " + (dataType.QualifiedName != null ? dataType.QualifiedName.Name : dataType.SourceUri), XmlSeverityType.Warning);
                            exito = false;
                        }
                    }
                    else
                    {
                        ManejadorErrores.ManejarError(null, "5.1.1.3 Se encontró un concepto con grupo de sustitución item y con referencia a un tipo de dato derivado que no fue posible localizar. Tipo de Dato: " + (dataType.QualifiedName != null ? dataType.QualifiedName.Name : dataType.SourceUri), XmlSeverityType.Warning);
                        exito = false;
                    }

                }
                else
                {
                    ManejadorErrores.ManejarError(null, "5.1.1.3 Se encontró un concepto con grupo de sustitución item y con referencia a un tipo de dato derivado por otro medio que no es restricción. Tipo de Dato: " + (dataType.QualifiedName != null ? dataType.QualifiedName.Name : dataType.SourceUri), XmlSeverityType.Warning);
                    exito = false;
                }
            }
            return exito;
        }

        /// <summary>
        /// Procesa la definición de un elemento tuple al tiempo que valida la estructura y correcta conformación de esta.
        /// </summary>
        /// <param name="element">el elemento que contiene la definición de una tupla</param>
        /// <returns>Un objeto <code>Tuple</code> el cual representa el elemento procesado.</returns>
        private ConceptTuple ProcesarDefinicionDeElementoTuple(XmlSchemaElement element)
        {
            ConceptTuple concepto = new ConceptTuple(element);
            concepto.Tipo = Concept.Tuple;
            concepto.Id = element.Id;

            if (element.Id == null)
            {
                ManejadorErrores.ManejarError(null, "4.9 Se encontró un concepto con grupo de sustitución tuple y sin definición de un id. Nodo: " + element.ToString(), XmlSeverityType.Warning);
            }

            if (element.UnhandledAttributes != null)
            {
                foreach (XmlAttribute a in element.UnhandledAttributes)
                {
                    if (a.LocalName.Equals(EtiquetasXBRLConstantes.BalanceAttribute) && a.NamespaceURI.Equals(EspacioNombresConstantes.InstanceNamespace))
                    {
                        ManejadorErrores.ManejarError(null, "5.1.1.1 Se encontró un concepto con el atributo balance y grupo de sustitución tuple. Nodo: " + element.ToString(), XmlSeverityType.Error);
                        return concepto;
                    }
                    else if (a.LocalName.Equals(EtiquetasXBRLConstantes.PeriodTypeAttribute) && a.NamespaceURI.Equals(EspacioNombresConstantes.InstanceNamespace))
                    {
                        ManejadorErrores.ManejarError(null, "5.1.1.1 Se encontró un concepto con el atributo periodType y grupo de sustitución tuple. Nodo: " + element.ToString(), XmlSeverityType.Error);
                        return concepto;
                    }
                    else if (a.NamespaceURI.Equals(EspacioNombresConstantes.InstanceNamespace) || a.NamespaceURI.Equals(EspacioNombresConstantes.XLinkNamespace) || a.NamespaceURI.Equals(EspacioNombresConstantes.XbrlXLinkNamespace) || a.NamespaceURI.Equals(EspacioNombresConstantes.LinkNamespace))
                    {
                        ManejadorErrores.ManejarError(null, "5.1.1.1 Se encontró un concepto con grupo de sustitución tuple y al menos un atributo perteneciente a el espacio de nombres: " + a.NamespaceURI + " . Nodo: " + element.ToString(), XmlSeverityType.Error);
                        return concepto;
                    }
                    else if (!a.LocalName.Equals(EtiquetasXBRLConstantes.IdAttribute))
                    {
                        ManejadorErrores.ManejarError(null, "4.9 Se encontró un concepto con grupo de sustitución tuple y un atributo diferente de id. Nodo: " + element.ToString(), XmlSeverityType.Warning);
                    }
                }
            }

            if (element.ElementSchemaType.GetType() == typeof(XmlSchemaComplexType))
            {
                if (element.ElementSchemaType.IsMixed)
                {
                    ManejadorErrores.ManejarError(null, "4.9 Se encontró un concepto grupo de sustitución tuple y tipo de dato mixto. Nodo: " + element.ToString(), XmlSeverityType.Error);
                    return concepto;
                }
                XmlSchemaComplexType complexType = (XmlSchemaComplexType)element.ElementSchemaType;
                XmlSchemaParticle particle = null;
                XmlSchemaGroupBase grupoBase = null;
                XmlSchemaObjectCollection atributos = null;

                if (complexType.ContentModel != null)
                {
                    if (complexType.ContentModel.GetType() == typeof(XmlSchemaComplexContent))
                    {
                        XmlSchemaComplexContent complexContent = (XmlSchemaComplexContent)complexType.ContentModel;
                        if (complexContent.IsMixed)
                        {
                            ManejadorErrores.ManejarError(null, "4.9 Se encontró un concepto grupo de sustitución tuple y tipo de contenido mixto. Nodo: " + element.ToString(), XmlSeverityType.Error);
                            return concepto;
                        }

                        if (complexContent.Content.GetType() == typeof(XmlSchemaComplexContentExtension))
                        {
                            XmlSchemaComplexContentExtension contentExtension = (XmlSchemaComplexContentExtension)complexContent.Content;
                            atributos = contentExtension.Attributes;
                            if (contentExtension.Particle != null)
                            {
                                particle = contentExtension.Particle;
                            }
                            else
                            {
                                ManejadorErrores.ManejarError(null, "4.9 Se encontró un concepto grupo de sustitución tuple y tipo de contenido complex sin definición. Nodo: " + element.ToString(), XmlSeverityType.Error);
                                return concepto;
                            }
                        }
                        else if (complexContent.Content.GetType() == typeof(XmlSchemaComplexContentRestriction))
                        {
                            XmlSchemaComplexContentRestriction contentRestriction = (XmlSchemaComplexContentRestriction)complexContent.Content;
                            atributos = contentRestriction.Attributes;
                            if (contentRestriction.Particle != null || contentRestriction.BaseTypeName != null)
                            {
                                particle = contentRestriction.Particle;
                            }
                            else
                            {
                                ManejadorErrores.ManejarError(null, "4.9 Se encontró un concepto grupo de sustitución tuple y tipo de contenido complex sin definición. Nodo: " + element.ToString(), XmlSeverityType.Error);
                                return concepto;
                            }
                        }


                    }
                    else
                    {
                        ManejadorErrores.ManejarError(null, "4.9 Se encontró un concepto grupo de sustitución tuple y tipo de contenido simple. Nodo: " + element.ToString(), XmlSeverityType.Error);
                        return concepto;
                    }
                }
                else
                {
                    particle = complexType.Particle;
                    atributos = complexType.Attributes;
                }
                if (particle != null && particle.GetType() == typeof(XmlSchemaGroupRef))
                {
                    XmlSchemaGroupRef groupRef = (XmlSchemaGroupRef)particle;
                    XmlSchemaGroup grupo = BuscarGrupoEnEsquema(groupRef.RefName);
                    if (grupo == null)
                    {
                        ManejadorErrores.ManejarError(null, "4.9 Se encontró un concepto grupo de sustitución tuple y tipo de contenido complex con referencia a un grupo que no existe, nombre del grupo buscado: " + groupRef.RefName.ToString() + ". Nodo: " + element.ToString(), XmlSeverityType.Error);
                        return concepto;
                    }
                    if (grupo.Particle != null)
                    {
                        grupoBase = grupo.Particle;
                    }
                    else
                    {
                        ManejadorErrores.ManejarError(null, "4.9 Se encontró un concepto grupo de sustitución tuple y tipo de contenido complex con referencia a un grupo que no tiene definición, nombre del grupo: " + groupRef.RefName.ToString() + ". Nodo: " + element.ToString(), XmlSeverityType.Error);
                        return concepto;
                    }
                }
                else
                {
                    grupoBase = (XmlSchemaGroupBase)particle;
                }

                ValidarEstructuraDeGrupo(element, grupoBase);
                if (atributos != null)
                {
                    foreach (XmlSchemaObject a in atributos)
                    {
                        if (a is XmlSchemaAttribute)
                        {
                            XmlSchemaAttribute attr = (XmlSchemaAttribute)a;
                            if (attr.QualifiedName.Namespace.Equals(EspacioNombresConstantes.InstanceNamespace) || attr.QualifiedName.Namespace.Equals(EspacioNombresConstantes.LinkNamespace)
                                || attr.QualifiedName.Namespace.Equals(EspacioNombresConstantes.XLinkNamespace) || attr.QualifiedName.Namespace.Equals(EspacioNombresConstantes.XbrlXLinkNamespace))
                            {
                                ManejadorErrores.ManejarError(null, "4.9 Se encontró un concepto grupo de sustitución tuple que incorpora en su definición un atributo del espacio de nombres de XBRL. Nodo: " + element.ToString(), XmlSeverityType.Error);
                                return concepto;
                            }
                        }
                    }
                }

            }
            else
            {
                ManejadorErrores.ManejarError(null, "4.9 Se encontró un concepto grupo de sustitución tuple y tipo de dato simple. Nodo: " + element.ToString(), XmlSeverityType.Error);
                return concepto;
            }

            return concepto;
        }

        /// <summary>
        /// Valida que la estructura de un grupo que conforma una tupla esté conformada por element, choice, all y sequence
        /// </summary>
        /// <param name="element">el elemento que contiene la definición del grupo</param>
        /// <param name="grupoBase">el grupo a validar</param>
        private void ValidarEstructuraDeGrupo(XmlSchemaElement element, XmlSchemaGroupBase grupoBase)
        {
            if (grupoBase == null) return;
            foreach (var i in grupoBase.Items)
            {
                if (i.GetType() == typeof(XmlSchemaElement))
                {
                    XmlSchemaElement e = (XmlSchemaElement)i;
                    if (e.RefName != null)
                    {
                        XmlSchemaElement referedElement = BuscarElementoEnEsquema(e.RefName);
                        if (referedElement != null)
                        {
                            int tipoElemento = 0;
                            if (!EsDeclaracionElementoItemOTuple(referedElement, out tipoElemento) && !PerteneceAGrupoSustitucionItemOTuple(referedElement, out tipoElemento))
                            {
                                ManejadorErrores.ManejarError(null, "4.9 Se encontró un concepto grupo de sustitución tuple y tipo de contenido complex con referencia a un elemento que no pertenece al grupo de sustitución tuple o item, RefName: " + e.RefName.Name + ". Nodo: " + element.ToString(), XmlSeverityType.Error);
                                break;
                            }
                        }
                        else
                        {
                            ManejadorErrores.ManejarError(null, "4.9 Se encontró un concepto grupo de sustitución tuple y tipo de contenido complex con referencia a un elemento que no existe, RefName: " + e.RefName.Name + ". Nodo: " + element.ToString(), XmlSeverityType.Error);
                            break;
                        }
                    }
                }
                else if (i is XmlSchemaGroupBase)
                {
                    ValidarEstructuraDeGrupo(element, (XmlSchemaGroupBase)i);
                }
                else if (i is XmlSchemaGroupRef)
                {
                    XmlSchemaGroupRef groupRef = (XmlSchemaGroupRef)i;
                    XmlSchemaGroup grupo = BuscarGrupoEnEsquema(groupRef.RefName);
                    if (grupo == null)
                    {
                        ManejadorErrores.ManejarError(null, "4.9 Se encontró un concepto grupo de sustitución tuple y tipo de contenido complex con referencia a un grupo que no existe, nombre del grupo buscado: " + groupRef.RefName.ToString() + ". Nodo: " + element.ToString(), XmlSeverityType.Error);
                        break;
                    }
                    if (grupo.Particle != null)
                    {
                        XmlSchemaGroupBase subGrupo = grupo.Particle;
                        ValidarEstructuraDeGrupo(element, subGrupo);
                    }
                    else
                    {
                        ManejadorErrores.ManejarError(null, "4.9 Se encontró un concepto grupo de sustitución tuple y tipo de contenido complex con referencia a un grupo que no tiene definición, nombre del grupo: " + groupRef.RefName.ToString() + ". Nodo: " + element.ToString(), XmlSeverityType.Error);
                        break;
                    }
                }
                else if (i.GetType() != typeof(XmlSchemaAny))
                {
                    ManejadorErrores.ManejarError(null, "4.9 Se encontró un concepto grupo de sustitución tuple y tipo de contenido complex con contenido inválido. Nodo: " + element.ToString(), XmlSeverityType.Error);
                    break;
                }
            }
        }

        /// <summary>
        /// Busca un grupo dentro del esquema que corresponda al nombre calificado pasado como parámetro.
        /// </summary>
        /// <param name="groupName">El nombre del grupo a consultar</param>
        /// <returns>Un objeto <code>XmlSchemaGroup</code> el cual representa el grupo buscado. <code>null</code> si no se encuentra</returns>
        private XmlSchemaGroup BuscarGrupoEnEsquema(XmlQualifiedName groupName)
        {
            XmlSchemaGroup grupo = null;
            foreach (var schemaSet in ConjuntosEsquemasTaxonomia.Values)
            {
                foreach (XmlSchema s in schemaSet.Schemas())
                {
                    foreach (XmlSchemaObject o in s.Items)
                        if (o.GetType() == typeof(XmlSchemaGroup))
                        {
                            XmlSchemaGroup g = (XmlSchemaGroup)o;
                            if (g.QualifiedName.Equals(groupName))
                            {
                                grupo = g;
                                break;
                            }
                        }
                }
            }
            
            return grupo;
        }

        /// <summary>
        /// Busca un elemento dentro del esquema que corresponda al nombre calificado pasado como parámetro.
        /// </summary>
        /// <param name="groupName">El nombre del elemento a consultar</param>
        /// <returns>Un objeto <code>XmlSchemaElement</code> el cual representa el elemento buscado. <code>null</code> si no se encuentra</returns>
        private XmlSchemaElement BuscarElementoEnEsquema(XmlQualifiedName elementName)
        {
            XmlSchemaElement elemento = null;
            foreach (var schemaSet in ConjuntosEsquemasTaxonomia.Values)
            {
                foreach (DictionaryEntry entry in schemaSet.GlobalElements)
                {
                    if (entry.Value.GetType() == typeof (XmlSchemaElement))
                    {
                        XmlSchemaElement e = (XmlSchemaElement) entry.Value;
                        if (e.QualifiedName.Equals(elementName))
                        {
                            elemento = e;
                            break;
                        }
                    }
                }
            }
            return elemento;
        }

        /// <summary>
        /// Busca un tipo dentro del esquema que corresponda al nombre calificado pasado como parámetro.
        /// </summary>
        /// <param name="groupName">El nombre del tipo a consultar</param>
        /// <returns>Un objeto <code>XmlSchemaType</code> el cual representa el tipo buscado. <code>null</code> si no se encuentra</returns>
        private XmlSchemaType BuscarTipoEnEsquema(XmlQualifiedName typeName)
        {
            XmlSchemaType tipo = null;
            foreach (var schemaSet in ConjuntosEsquemasTaxonomia.Values)
            {
                foreach (DictionaryEntry entry in schemaSet.GlobalTypes)
                {
                    if (entry.Value is XmlSchemaType)
                    {
                        XmlSchemaType t = (XmlSchemaType) entry.Value;
                        if (t.QualifiedName.Equals(typeName))
                        {
                            tipo = t;
                            break;
                        }
                    }
                }
            }
            return tipo;
        }

        /// <summary>
        /// Indica si el elemento es una declaración o referencia al elemento item o tuple del espacio de nombrs de xbrli (instancia).
        /// </summary>
        /// <param name="element">el elemento a consultar.</param>
        /// <param name="tipoElemento">El tipo de elemento al que pertenece. 1 si es item, 2 si es tuple, 0 si no pertenece a la declaración.</param>
        /// <returns><code>true</code> si pertenece a las declaraciones de los grupos de sustitución definidor por XBRL. <code>false</code> en cualquier otro caso.</returns>
        private bool EsDeclaracionElementoItemOTuple(XmlSchemaElement element, out int tipoElemento)
        {
            bool exito = false;

            tipoElemento = 0;

           
            if (element.QualifiedName.Namespace.Equals(EspacioNombresConstantes.InstanceNamespace))
            {
                if(element.QualifiedName.Name.Equals(ConceptItem.SubstitutionGroupItem))
                {
                    tipoElemento = Concept.Item;
                    exito = true;
                }
                else if (element.QualifiedName.Name.Equals(ConceptItem.SubstitutionGroupTuple))
                {
                    tipoElemento = Concept.Tuple;
                    exito = true;
                }
            }
            return exito;
        } 
                
        /// <summary>
        /// Indica si el elemento pertenece directamente o a través de la herencia de uno o más grupos de sustitución si pertenece a los grupos de sustitución item o tuple requeridos
        /// para ser considerados un Concepto de la taxonomía XBRL.
        /// </summary>
        /// <param name="element">el elemento a consultar.</param>
        /// <param name="tipoElemento">El tipo de elemento al que pertenece. 1 si es item, 2 si es tuple, 0 si no pertenece al substitution group.</param>
        /// <returns><code>true</code> si pertenece a los grupos de sustitución definidor por XBRL. <code>false</code> en cualquier otro caso.</returns>
        private bool PerteneceAGrupoSustitucionItemOTuple(XmlSchemaElement element, out int tipoElemento)
        {
            bool exito = true;

            tipoElemento = 0;

            if (element == null || 
                //element.QualifiedName.Namespace.Equals(EspacioNombresConstantes.DimensionTaxonomyNamespace) || 
                element.QualifiedName.Namespace.Equals(EspacioNombresConstantes.InstanceNamespace) || 
                element.QualifiedName.Namespace.Equals(EspacioNombresConstantes.XLinkNamespace) || 
                element.QualifiedName.Namespace.Equals(EspacioNombresConstantes.XbrlXLinkNamespace) || 
                element.QualifiedName.Namespace.Equals(EspacioNombresConstantes.LinkNamespace))
                return false;
            
            do
            {
                /*
                //El REF puede ser directamente xbrli:item o xbrli:tuple
                if (element.QualifiedName.Namespace.Equals(EspacioNombresConstantes.InstanceNamespace))
                {
                    if(element.QualifiedName.Name.Equals(ConceptItem.SubstitutionGroupItem))
                    {
                        tipoElemento = Concept.Item;
                        exito = true;
                        element = null;
                        continue;
                    }
                    else if (element.QualifiedName.Name.Equals(ConceptItem.SubstitutionGroupTuple))
                    {
                        tipoElemento = Concept.Tuple;
                        exito = true;
                        element = null;
                        continue;
                    }
                    
                }*/

                if (element.SubstitutionGroup != null)
                {
                    if (element.SubstitutionGroup.Name.Equals(ConceptItem.SubstitutionGroupItem))
                    {
                        tipoElemento = Concept.Item;
                        exito = true;
                    }
                    else if (element.SubstitutionGroup.Name.Equals(ConceptItem.SubstitutionGroupTuple))
                    {
                        tipoElemento = Concept.Tuple;
                        exito = true;
                    }
                    else if (element.SubstitutionGroup.Name.Equals(ConceptItem.SubstitutionGroupHypercubeItem))
                    {
                        tipoElemento = Concept.HypercubeItem;
                        exito = true;
                    }
                    else if (element.SubstitutionGroup.Name.Equals(ConceptItem.SubstitutionGroupDimensionItem))
                    {
                        tipoElemento = Concept.DimensionItem;
                        exito = true;
                    }
                    else
                    {
                        element = BuscarElementoEnEsquema(element.SubstitutionGroup);
                        if (element != null)
                        {
                            continue;
                        }
                        exito = false;
                    }
                    element = null;
                }
                else
                {
                    exito = false;
                    element = null;
                }
            }
            while (element != null);

            return exito;
        }

        /// <summary>
        /// Indica si el elemento pertenece directamente o a través de la herencia de uno o más grupos de sustitución si pertenece al grupo de sustitución extended requeridos
        /// para ser considerados un Custom Extended Linl de la taxonomía XBRL.
        /// </summary>
        /// <param name="element">el elemento a consultar.</param>
        /// <returns><code>true</code> si pertenece al grupo de sustitución extended. <code>false</code> en cualquier otro caso.</returns>
        private bool PerteneceAGrupoSustitucionExtended(XmlSchemaElement element)
        {
            bool exito = true;

            if (element == null || element.QualifiedName.Namespace.Equals(EspacioNombresConstantes.InstanceNamespace) || element.QualifiedName.Namespace.Equals(EspacioNombresConstantes.XLinkNamespace) || element.QualifiedName.Namespace.Equals(EspacioNombresConstantes.XbrlXLinkNamespace) || element.QualifiedName.Namespace.Equals(EspacioNombresConstantes.LinkNamespace))
                return false;

            do
            {
                if (element.SubstitutionGroup != null)
                {
                    if (element.SubstitutionGroup.Name.Equals(EtiquetasXBRLConstantes.ExtendedAttribute) && element.SubstitutionGroup.Namespace.Equals(EspacioNombresConstantes.XLinkNamespace))
                    {
                        exito = true;
                    }
                    else
                    {
                        element = BuscarElementoEnEsquema(element.SubstitutionGroup);
                        if (element != null)
                        {
                            continue;
                        }
                        exito = false;
                    }
                    element = null;
                }
                else
                {
                    exito = false;
                    element = null;
                }
            }
            while (element != null);

            return exito;
        }

        /// <summary>
        /// Procesa el fragmento de la taxonomía que contiene la definición de un linkbase.
        /// </summary>
        /// <param name="node">El nodo que contiene la referencia al linkbase a procesar.</param>
        /// <param name="uriLinkbase">El URI donde se encuentra el archivo con la definición del linkbase a procesar</param>
        /// <param name="linkbaseRole">El Rol con el que fue referenciado este linkbase. Puede ser <code>null</code> en caso de que no sea importado a través de un elemento linkbaseRef.</param>
        private void ProcesarDefinicionDeLinkbase(XmlNode node, string uriLinkbase, string linkbaseRole)
        {

            Debug.WriteLine("AbaxXbrl (" + DateTime.Now.ToString("HH:mm:ss.FFF") + "): Procesando Linkbase: " + uriLinkbase);

            if (node == null || node.LocalName == null)
            {
                ManejadorErrores.ManejarError(null, "No es posible cargar el linkbase, el primer elemento está vacío. Nodo: " + node.OuterXml, XmlSeverityType.Error);
                return;
            }
            //El nodo es el encabezado XML, ir al siguiente nodo
            if (node.LocalName.Equals("xml", StringComparison.OrdinalIgnoreCase))
            {
                node = node.NextSibling;
            }

            if (!node.LocalName.Equals(EtiquetasXBRLConstantes.Linkbase))
            {
                ManejadorErrores.ManejarError(null, "No es posible cargar el linkbase, el primer elemento no es una etiqueta linkbase. Nodo: " + node.OuterXml, XmlSeverityType.Error);
                return;
            }

            string baseHref = null;
            foreach (XmlAttribute a in node.Attributes)
            {
                if (a.LocalName.Equals(EtiquetasXBRLConstantes.BaseAttribute))
                {
                    baseHref = a.Value;
                }
            }

            if (baseHref != null && !baseHref.Equals(string.Empty))
            {
                try
                {
                    Uri uriBase = new Uri(new Uri(uriLinkbase), baseHref);
                    uriLinkbase = uriBase.ToString();
                }
                catch (UriFormatException e)
                {
                    ManejadorErrores.ManejarError(e, "3.5.2.2 No se definió correctamente el URI del atributo base del linkbase. Nodo: " + node.OuterXml, XmlSeverityType.Error);
                }
            }

            List<RoleType> tipoRoles = new List<RoleType>();
            List<ArcRoleType> tipoArcoRoles = new List<ArcRoleType>();
            List<XmlNode> extendedLink = new List<XmlNode>();
            List<Documentation> documentacion = new List<Documentation>();
            foreach (XmlNode child in node.ChildNodes)
            {
                //Cargar roles y arcos antes de procesar los roles extendidos
                if (child.LocalName.Equals(EtiquetasXBRLConstantes.ArcroleRef))
                {
                    ArcRoleType arcoRol = ProcesarDefinicionArcoRoleRef(child, uriLinkbase);
                    if (arcoRol == null)
                    {
                        return;
                    }

                    if (tipoArcoRoles.Contains(arcoRol))
                    {
                        ManejadorErrores.ManejarError(null, "3.5.2.5 Un Archivo XML de LinkBase debe contener únicamente una referencia a un rol. Elemento no válido: " + child.LocalName, XmlSeverityType.Error);
                    }
                    else
                    {
                        tipoArcoRoles.Add(arcoRol);
                    }
                }
                else if (child.LocalName.Equals(EtiquetasXBRLConstantes.RoleRef))
                {
                    RoleType rol = ProcesarDefinicionRoleRef(child, uriLinkbase);
                    if (rol == null)
                    {
                        return;
                    }
                    if (tipoRoles.Contains(rol))
                    {
                        ManejadorErrores.ManejarError(null, "3.5.2.4 Un Archivo XML de LinkBase no debe contener referencias a roles repetidas. Elemento no válido: " + child.LocalName, XmlSeverityType.Error);
                    }
                    else
                    {
                        tipoRoles.Add(rol);
                    }
                }else if(EtiquetasXBRLConstantes.DocumentationElement.Equals(child.LocalName)){
                    documentacion.Add(ProcesarElementoDocumentacion(child));
                }
                else
                {
                    foreach (XmlAttribute a in child.Attributes)
                    {
                        if (a.NamespaceURI.Equals(EspacioNombresConstantes.XLinkNamespace) && a.LocalName.Equals(EtiquetasXBRLConstantes.TypeAttribute) && a.Value != null && a.Value.Equals(EtiquetasXBRLConstantes.ExtendedAttribute))
                        {
                            extendedLink.Add(child);
                        }
                    }
                }
            }

            //Procesar la lista de links extendidos
            foreach (XmlNode linkExtendido in extendedLink)
            {
                ProcesarElementoLinkExtendido(linkExtendido, tipoArcoRoles, tipoRoles, uriLinkbase, linkbaseRole, documentacion);
            }
            Debug.WriteLine("AbaxXbrl (" + DateTime.Now.ToString("HH:mm:ss.FFF") + "): Linkbase Procesado: " + uriLinkbase);

        }
        /// <summary>
        /// Procesa el elemento de definición de rol extendido.
        /// Validaciones: 
        /// 
        /// El atributo type debe de ser necesariamente: "extended"
        /// El rol del elemento debe coincidir con la URI de los roles personalizados definidos en la taxonomía e importados como parte del mismo archivo o debe de
        /// ser igual al valor de un tipo de rol genérico definido por XBRL: http://www.xbrl.org/2003/role/link
        /// </summary>
        /// <param name="linkExtendido">Nodo correspondiente al link extendido a procesar</param>
        /// <param name="arcoRoles">Listado de tipos de arco personalizados importados</param>
        /// <param name="roles">Listado de tipos de roles importados</param>
        /// <param name="uriLinkbase">La ruta en donde se encuentra el archivo con la definición del Linkbase</param>
        /// <param name="linkbaseRole">El Rol con el que fue referenciado este linkbase. Puede ser <code>null</code> en caso de que no sea importado a través de un elemento linkbaseRef.</param>
        /// <param name="documentacion">Lista de elementos de documentación declarados en el linkbase</param>
        private void ProcesarElementoLinkExtendido(XmlNode linkExtendido, List<ArcRoleType> arcoRoles, List<RoleType> roles, string uriLinkbase, string linkbaseRole, 
            IList<Documentation> documentacion)
        {

            IDictionary<String, String> atributos = XmlUtil.ObtenerAtributosDeNodo(linkExtendido);
            //Si Tenemos un Extended Link, Validar el ROL
            if (!atributos.ContainsKey(EtiquetasXBRLConstantes.TypeAttribute) || !EtiquetasXBRLConstantes.ExtendedAttribute.Equals(atributos[EtiquetasXBRLConstantes.TypeAttribute]))
            {
                ManejadorErrores.ManejarError(null, "3.5.3.2 Se encontró un elemento extendedLink con valor del atributo xlink:type inválido, se declaró: " +
                    (atributos.ContainsKey(EtiquetasXBRLConstantes.TypeAttribute) ?
                    atributos[EtiquetasXBRLConstantes.TypeAttribute] : "(no definido)") +

                    " y se esperaba la palabra 'extended' : node :" + linkExtendido.OuterXml, XmlSeverityType.Error);
                return;
            }
            if (!atributos.ContainsKey(EtiquetasXBRLConstantes.RoleAttribute) || String.IsNullOrEmpty(atributos[EtiquetasXBRLConstantes.RoleAttribute]))
            {
                ManejadorErrores.ManejarError(null,
                    "3.5.3.3 Se encontró un elemento extendedLink con valor del atributo xlink:role sin definir.  Nodo: " + linkExtendido.OuterXml, XmlSeverityType.Error);
                return;
            }

            RoleType rolTipo = roles.Find(x => (x.RolURI.ToString().Equals(atributos[EtiquetasXBRLConstantes.RoleAttribute])));
            if (EtiquetasXBRLConstantes.ValidLinksElements.Contains(linkExtendido.LocalName) && linkExtendido.NamespaceURI.Equals(EspacioNombresConstantes.LinkNamespace))
            {
                //Si no se importó el rol o no se usa el rol estándar
                if (rolTipo == null && !EspacioNombresConstantes.StandardLinkRoleType.Equals(atributos[EtiquetasXBRLConstantes.RoleAttribute]))
                {
                    ManejadorErrores.ManejarError(null, "3.5.3.3 Se encontró un elemento extendedLink con valor del atributo xlink:role inválido, el ROLE proporcionado no se tiene declarado.  Nodo: " + linkExtendido.OuterXml, XmlSeverityType.Error);
                    return;
                }
                if (rolTipo == null)
                {
                    if (!RolesTaxonomia.Keys.Contains(EspacioNombresConstantes.StandardLinkRoleType))
                    {
                        //se va a utilizar el linkRole estándar
                        AgregarRolEstandar();
                    }
                    rolTipo = RolesTaxonomia[EspacioNombresConstantes.StandardLinkRoleType];
                }
                var qN = new XmlQualifiedName(linkExtendido.LocalName, linkExtendido.NamespaceURI);
                if (!rolTipo.UsadoEn.Contains(qN))
                {
                    ManejadorErrores.ManejarError(null, "5.1.3.4 Se encontró un elemento tipo Standard Resource Element utilizado un nuevo tipo de rol el cual no permite su uso a través de un elemento usedOn.  Nodo: " + linkExtendido.OuterXml, XmlSeverityType.Error);
                    return;
                }
            }
            else
            {
                if (RolesTaxonomia.Keys.Contains(atributos[EtiquetasXBRLConstantes.RoleAttribute]))
                {
                    rolTipo = RolesTaxonomia[atributos[EtiquetasXBRLConstantes.RoleAttribute]];
                }
                if (rolTipo == null)
                {
                    if (!RolesTaxonomia.Keys.Contains(EspacioNombresConstantes.StandardLinkRoleType))
                    {
                        //se va a utilizar el linkRole estándar
                        AgregarRolEstandar();
                    }
                    rolTipo = RolesTaxonomia[EspacioNombresConstantes.StandardLinkRoleType];
                }
            }

            //Procesar el linkbase específico

            Linkbase link = null;

            if (EtiquetasXBRLConstantes.PresentationLinkElement.Equals(linkExtendido.LocalName))
            {
                link = ProcesarLinkbasePresentacion(linkExtendido, uriLinkbase, arcoRoles, roles, linkbaseRole);
                
            }
            else if (EtiquetasXBRLConstantes.LabelLinkElement.Equals(linkExtendido.LocalName))
            {
                link = ProcesarLinkbaseEtiqueta(linkExtendido, uriLinkbase, arcoRoles, roles, linkbaseRole);
            }
            else if (EtiquetasXBRLConstantes.ReferenceLinkElement.Equals(linkExtendido.LocalName))
            {
                link = ProcesarLinkbaseReferencia(linkExtendido, uriLinkbase, arcoRoles, roles, linkbaseRole);
            
            }
            else if (EtiquetasXBRLConstantes.CalculationLinkElement.Equals(linkExtendido.LocalName))
            {
                link = ProcesarLinkbaseCalculo(linkExtendido, uriLinkbase, arcoRoles, roles, linkbaseRole);
               
            }
            else if (EtiquetasXBRLConstantes.DefinitionLinkElement.Equals(linkExtendido.LocalName))
            {
                link = ProcesarLinkbaseDefinicion(linkExtendido, uriLinkbase, arcoRoles, roles, linkbaseRole);
              
            }
            else
            {
                link = ProcesarLinkbaseCustom(linkExtendido, uriLinkbase, arcoRoles, roles, linkbaseRole);
               
            }

            link.Taxonomia = this;
            link.Rol = rolTipo;
            link.Documentacion = link.Documentacion.Concat(documentacion).ToList();
            AgregarArcosALinkBase(link);
        }
        /// <summary>
        /// Incorpora un extended link base recién leído dentro de los elementos existentes del link base correspondiente
        /// al rol para el cuál se definió el linkbase
        /// </summary>
        /// <param name="link">Link base origen que contiene el tipo de rol destino</param>
        private void AgregarArcosALinkBase(Linkbase link)
        {
            if (!link.Rol.Linkbases.ContainsKey(link.RoleLinkBaseRef))
            {
                //Si el rol todavía no tiene link base de presentacion
                link.Rol.Linkbases[link.RoleLinkBaseRef] = link;
            }
            else
            {
                Linkbase linkActual = link.Rol.Linkbases[link.RoleLinkBaseRef];
                linkActual.Arcos = linkActual.Arcos.Concat(link.Arcos).ToList();
                linkActual.Documentacion = linkActual.Documentacion.Concat(link.Documentacion).ToList();
            }

        }
       
        /// <summary>
        /// Agrega el rol estandar de los link bases a la taxonomia: http://www.xbrl.org/2003/role/link
        /// </summary>
        public void AgregarRolEstandar()
        {
            if (RolesTaxonomia.Keys.Contains(EspacioNombresConstantes.StandardLinkRoleType))
            {
                return;
            }

            RoleType rolEstandar = new RoleType();
            rolEstandar.Definicion = EspacioNombresConstantes.StandardLinkRoleType;
            rolEstandar.Id = EspacioNombresConstantes.StandardLinkRoleType;
            rolEstandar.RolURI = new Uri(EspacioNombresConstantes.StandardLinkRoleType);
            IList<XmlQualifiedName> qNames = new List<XmlQualifiedName>();
            foreach (string linkElement in EtiquetasXBRLConstantes.ValidLinksElements)
            {
                qNames.Add(new XmlQualifiedName(linkElement, EspacioNombresConstantes.LinkNamespace));
            }
            rolEstandar.UsadoEn = qNames.ToArray();
            rolEstandar.Linkbases = new Dictionary<string, Linkbase>();
            rolEstandar.RolURI = new Uri(EspacioNombresConstantes.StandardLinkRoleType);
            RolesTaxonomia[EspacioNombresConstantes.StandardLinkRoleType] = rolEstandar;
        }

        /// <summary>
        /// Procesa un Linkbase de Tipo Custom.
        /// </summary>
        /// <param name="node">El nodo raíz que contiene la definición del Linkbase Custom.</param>
        /// <param name="uriLinkbase">La ruta donde se encuentra el archivo que contine la definición del Linkbase a procesar.</param>
        /// <param name="extendedLinkRole">Rol personalizado al que está asociado el extended link</param>
        /// <param name="arcoRoles">Lista de arco roles importados en la declaración del link base</param>
        /// <param name="linkbaseRole">Rol con el que fue importado el archivo de linkbase extendido</param>
        private Linkbase ProcesarLinkbaseCustom(XmlNode node, string uriLinkbase, List<ArcRoleType> arcoRoles, List<RoleType> roles, String linkbaseRole)
        {
            IDictionary<String, IList<ElementoLocalizable>> locators = new Dictionary<String, IList<ElementoLocalizable>>();
            IDictionary<String, IList<ElementoLocalizable>> resources = new Dictionary<String, IList<ElementoLocalizable>>();
            IList<XmlNode> arcos = new List<XmlNode>();
            IList<Documentation> documentacion = new List<Documentation>();
            foreach (XmlNode child in node.ChildNodes)
            {
                //Procesar primero los localizadores
                if (EtiquetasXBRLConstantes.LocatorElement.Equals(child.LocalName))
                {
                    Localizador locActual = ProcesarLocalizador(child, uriLinkbase, false);
                    if (locActual != null)
                    {
                        if (!locators.ContainsKey(locActual.Etiqueta))
                        {
                            locators.Add(locActual.Etiqueta, new List<ElementoLocalizable>());
                        }
                        locators[locActual.Etiqueta].Add(locActual);
                    }
                }
                else if (EtiquetasXBRLConstantes.DocumentationElement.Equals(child.LocalName))
                {
                    documentacion.Add(ProcesarElementoDocumentacion(child));
                }
                else
                {
                    foreach (XmlAttribute a in child.Attributes)
                    {
                        if (EtiquetasXBRLConstantes.TypeAttribute.Equals(a.LocalName) && a.NamespaceURI.Equals(EspacioNombresConstantes.XLinkNamespace) && a.Value != null && a.Value.Equals(EtiquetasXBRLConstantes.ArcValueType))
                        {
                            arcos.Add(child);
                        }
                        else if (EtiquetasXBRLConstantes.TypeAttribute.Equals(a.LocalName) && a.NamespaceURI.Equals(EspacioNombresConstantes.XLinkNamespace) && a.Value != null && a.Value.Equals(EtiquetasXBRLConstantes.ResourceValueType))
                        {
                            Recurso recurso = new Recurso();

                            if (ProcesarElementoRecursoGenerico(recurso, child))
                            {
                                if (!resources.ContainsKey(recurso.Etiqueta))
                                {
                                    resources.Add(recurso.Etiqueta, new List<ElementoLocalizable>());
                                }
                                resources[recurso.Etiqueta].Add(new ElementoLocalizable(recurso));
                            }
                        }
                    }
                }
            }
            Linkbase resultadoLinkBase = new Linkbase();
            resultadoLinkBase.Localizadores = locators;
            resultadoLinkBase.Recursos = resources;
            resultadoLinkBase.Documentacion = documentacion;
            if (!string.IsNullOrEmpty(linkbaseRole))
            {
                resultadoLinkBase.RoleLinkBaseRef = linkbaseRole;
            }
            //Procesar los arcos 
            foreach (XmlNode arcoXml in arcos)
            {
                Arco arcoFinal = new Arco();
                //Procesar arco genérico
                IDictionary<string, string> atributos = XmlUtil.ObtenerAtributosDeNodo(arcoXml);
                if (ProcesarElementoArcoGenerico(arcoFinal, arcoXml, atributos, resultadoLinkBase))
                {
                    resultadoLinkBase.Arcos.Add(arcoFinal);
                }
            }
            return resultadoLinkBase;

        }

        /// <summary>
        /// Procesa un Linkbase de presentación.
        /// Presentación únicamente puede tener:
        /// title element
        /// documentation element
        /// loc element
        /// presentationArc
        /// </summary>
        /// <param name="node">El nodo raíz que contiene la definición del Linkbase de Presentación.</param>
        /// <param name="uriLinkbase">La ruta donde se encuentra el archivo que contine la definición del Linkbase a procesar.</param>
        /// <param name="extendedLinkRole">Rol personalizado al que está asociado el extended link</param>
        /// <param name="linkbaseRole">El Rol con el que fue referenciado este linkbase. Puede ser <code>null</code> en caso de que no sea importado a través de un elemento linkbaseRef.</param>
        private LinkbasePresentacion ProcesarLinkbasePresentacion(XmlNode node, string uriLinkbase, List<ArcRoleType> arcoRoles, List<RoleType> roles, string linkbaseRole)
        {
            IDictionary<String, IList<ElementoLocalizable>> locators = new Dictionary<String, IList<ElementoLocalizable>>();
            IList<XmlNode> arcos = new List<XmlNode>();
            IList<Documentation> documentacion = new List<Documentation>();
            Localizador locActual = null;

            if (linkbaseRole != null && !linkbaseRole.Equals(LinkbasePresentacion.RolePresentacionLinkbaseRef))
            {
                ManejadorErrores.ManejarError(null, "4.3.4 Se encontró un elemento presentationLink que fue referenciado por un elemento linkbaseRef con xlink:role inválido, el ROLE erróneo es: " + linkbaseRole + ".  Nodo: " + node.OuterXml, XmlSeverityType.Error);
            }

            foreach (XmlNode child in node.ChildNodes)
            {
                //Procesar primero los localizadores
                if (EtiquetasXBRLConstantes.LocatorElement.Equals(child.LocalName))
                {
                    locActual = ProcesarLocalizador(child, uriLinkbase, true);
                    if (locActual != null)
                    {
                        if (!locators.ContainsKey(locActual.Etiqueta))
                        {
                            locators.Add(locActual.Etiqueta, new List<ElementoLocalizable>());
                        }
                        locators[locActual.Etiqueta].Add(locActual);
                    }
                }
                else if (EtiquetasXBRLConstantes.DocumentationElement.Equals(child.LocalName))
                {
                    documentacion.Add(ProcesarElementoDocumentacion(child));
                }
                else if (EtiquetasXBRLConstantes.PresentationArcElement.Equals(child.LocalName))
                {
                    arcos.Add(child);
                }
            }
            LinkbasePresentacion resultadoLinkBase = new LinkbasePresentacion();
            resultadoLinkBase.Localizadores = locators;
            resultadoLinkBase.Documentacion = documentacion;
            //Procesar los arcos de presentación
            foreach (XmlNode arcoXml in arcos)
            {

                ArcoPresentacion arcoFinal = new ArcoPresentacion();
                //Procesar arco genérico
                IDictionary<string, string> atributos = XmlUtil.ObtenerAtributosDeNodo(arcoXml);
                if (ProcesarElementoArcoGenerico(arcoFinal, arcoXml, atributos, resultadoLinkBase))
                {
                    //Validar el rol estandar para el arco
                    if (!ArcoPresentacion.RolArcoPresentacion.Equals(arcoFinal.ArcoRol))
                    {
                        if (!UsaArcoRolValido(arcoFinal, arcoRoles, arcoXml))
                        {
                            ManejadorErrores.ManejarError(null, "Se encontró un elemento presentationArc con valor del atributo xlink:arcrole diferente de \"" + ArcoPresentacion.RolArcoPresentacion + "\" y un rol inválido: " + atributos[EtiquetasXBRLConstantes.ArcroleAttribute] + " Nodo: " + arcoXml.OuterXml, XmlSeverityType.Error);
                            continue;
                        }
                    }
                    //Atributo opcional etiqueda preferida
                    if (atributos.ContainsKey(EtiquetasXBRLConstantes.PreferredLabelAttribute))
                    {
                        arcoFinal.EtiquetaPreferida = atributos[EtiquetasXBRLConstantes.PreferredLabelAttribute];
                    }
                    resultadoLinkBase.Arcos.Add(arcoFinal);
                }
            }
            return resultadoLinkBase;

        }
        /// <summary>
        /// Procesa un Linkbase de etiquetas.
        /// Presentación únicamente puede tener:
        /// title element
        /// documentation element
        /// loc element
        /// label resource element
        /// labelArc
        /// </summary>
        /// <param name="node">El nodo raíz que contiene la definición del Linkbase de Etiqueta.</param>
        /// <param name="uriLinkbase">La ruta donde se encuentra el archivo que contine la definición del Linkbase a procesar.</param>
        /// <param name="extendedLinkRole">Rol personalizado al que está asociado el extended link</param>
        /// <param name="linkbaseRole">El Rol con el que fue referenciado este linkbase. Puede ser <code>null</code> en caso de que no sea importado a través de un elemento linkbaseRef.</param>
        private LinkbaseEtiqueta ProcesarLinkbaseEtiqueta(XmlNode node, string uriLinkbase, List<ArcRoleType> arcoRoles, List<RoleType> roles, string linkbaseRole)
        {
            IDictionary<String, IList<ElementoLocalizable>> locators = new Dictionary<String, IList<ElementoLocalizable>>();
            IList<XmlNode> arcos = new List<XmlNode>();
            IDictionary<string, IList<ElementoLocalizable>> etiquetas = new Dictionary<string, IList<ElementoLocalizable>>();
            IList<Documentation> documentacion = new List<Documentation>();
            Localizador locActual = null;

            if (linkbaseRole != null && !linkbaseRole.Equals(LinkbaseEtiqueta.RoleLabelLinkbaseRef))
            {
                ManejadorErrores.ManejarError(null, "4.3.4 Se encontró un elemento labelLink que fue referenciado por un elemento linkbaseRef con xlink:role inválido, el ROLE erróneo es: " + linkbaseRole + ".  Nodo: " + node.OuterXml, XmlSeverityType.Error);
            }

            foreach (XmlNode child in node.ChildNodes)
            {
                //Procesar primero los localizadores
                if (EtiquetasXBRLConstantes.LocatorElement.Equals(child.LocalName))
                {
                    locActual = ProcesarLocalizador(child, uriLinkbase, true);
                    if (locActual != null)
                    {
                        if (!locators.ContainsKey(locActual.Etiqueta))
                        {
                            locators.Add(locActual.Etiqueta, new List<ElementoLocalizable>());
                        }
                        locators[locActual.Etiqueta].Add(locActual);
                    }
                }
                else if (EtiquetasXBRLConstantes.LabelElement.Equals(child.LocalName))
                {
                    Etiqueta etiqueta = new Etiqueta();
                    //Si el elemento de etiqueta no es válido no se agrega a los conjuntos de etiquetas de este extended link
                    if (ProcesarElementoEtiqueta(etiqueta, child, roles))
                    {
                        if (!etiquetas.ContainsKey(etiqueta.Etiqueta))
                        {
                            etiquetas[etiqueta.Etiqueta] = new List<ElementoLocalizable>();
                        }
                        etiquetas[etiqueta.Etiqueta].Add(new ElementoLocalizable(etiqueta));
                    }

                }
                else if (EtiquetasXBRLConstantes.DocumentationElement.Equals(child.LocalName))
                {
                    documentacion.Add(ProcesarElementoDocumentacion(child));
                }
                else if (EtiquetasXBRLConstantes.LabelArcElement.Equals(child.LocalName))
                {
                    arcos.Add(child);
                }
            }
            LinkbaseEtiqueta resultadoLinkBase = new LinkbaseEtiqueta();
            resultadoLinkBase.Localizadores = locators;
            resultadoLinkBase.Documentacion = documentacion;
            resultadoLinkBase.Recursos = etiquetas;
            bool toFromOK = true;
            //Procesar los arcos de etiquetas
            foreach (XmlNode arcoXml in arcos)
            {

                ArcoEtiqueta arcoFinal = new ArcoEtiqueta();
                //Procesar arco genérico
                IDictionary<string, string> atributos = XmlUtil.ObtenerAtributosDeNodo(arcoXml);
                if (ProcesarElementoArcoGenerico(arcoFinal, arcoXml, atributos, resultadoLinkBase))
                {
                    //Validar el rol estandar para el arco
                    if (!ArcoEtiqueta.RolArcoEtiqueta.Equals(arcoFinal.ArcoRol))
                    {
                        if (!UsaArcoRolValido(arcoFinal, arcoRoles, arcoXml))
                        {
                            ManejadorErrores.ManejarError(null, "5.2.2.3 Se encontró un elemento labelArc con valor del atributo xlink:arcrole diferente de \"" + ArcoEtiqueta.RolArcoEtiqueta + "\" y un rol inválido: " + atributos[EtiquetasXBRLConstantes.ArcroleAttribute] + " Nodo: " + arcoXml.OuterXml, XmlSeverityType.Error);
                            continue;
                        }
                    }
                    toFromOK = true;
                    //Validar que la relación sea desde un concepto hacia una etiqueta
                    foreach(ElementoLocalizable desde in arcoFinal.ElementoDesde){
                        if (! (desde.Destino is Concept))
                        {
                            ManejadorErrores.ManejarError(null, "5.2.2.3 Se encontró un elemento labelArc con valor del atributo xlink:from que no apunta a un concepto de la taxonomía: " + desde.Destino.Id + " :  Nodo: " + arcoXml.OuterXml, XmlSeverityType.Error);
                            toFromOK = false;
                            break;
                        }
                    }
                    if(!toFromOK){
                        continue;
                    }
                    foreach (ElementoLocalizable hacia in arcoFinal.ElementoHacia)
                    {
                        if (!(hacia.Destino is Etiqueta))
                        {
                            ManejadorErrores.ManejarError(null, "5.2.2.3 Se encontró un elemento labelArc con valor del atributo xlink:to que no apunta a una etiqueta: " + hacia.Destino.Id + " :  Nodo: " + arcoXml.OuterXml, XmlSeverityType.Error);
                            toFromOK = false;
                            break;
                        }
                        //Si el elemento hacia es un localizador a un archivo externo entonces el tipo de uso debe ser prohibido
                        if (hacia is Localizador && !TiposUso.Prohibido.Valor.Equals(arcoFinal.Uso))
                        {
                            ManejadorErrores.ManejarError(null, "5.2.2.3 Se encontró un elemento labelArc con valor del atributo xlink:to que apunta a un recurso externo y cuyo tipo de uso no es 'prohibited': " + hacia.Destino.Id + " :  Nodo: " + arcoXml.OuterXml, XmlSeverityType.Error);
                            toFromOK = false;
                            break;
                        }
                    }
                    if (!toFromOK)
                    {
                        continue;
                    }

                    resultadoLinkBase.Arcos.Add(arcoFinal);
                }
            }
            return resultadoLinkBase;

        }
        /// <summary>
        /// Procesa un Linkbase de referencias.
        /// Referencia únicamente puede tener:
        /// title element
        /// documentation element
        /// loc element
        /// reference resource element
        /// referenceArc
        /// </summary>
        /// <param name="node">El nodo raíz que contiene la definición del Linkbase de Referencia.</param>
        /// <param name="uriLinkbase">La ruta donde se encuentra el archivo que contine la definición del Linkbase a procesar.</param>
        /// <param name="extendedLinkRole">Rol personalizado al que está asociado el extended link</param>
        /// <param name="linkbaseRole">El Rol con el que fue referenciado este linkbase. Puede ser <code>null</code> en caso de que no sea importado a través de un elemento linkbaseRef.</param>
        private LinkbaseReferencia ProcesarLinkbaseReferencia(XmlNode node, string uriLinkbase, List<ArcRoleType> arcoRoles, List<RoleType> roles, string linkbaseRole)
        {
            IDictionary<String, IList<ElementoLocalizable>> locators = new Dictionary<String, IList<ElementoLocalizable>>();
            IList<XmlNode> arcos = new List<XmlNode>();
            IDictionary<string, IList<ElementoLocalizable>> referencias = new Dictionary<string, IList<ElementoLocalizable>>();
            IList<Documentation> documentacion = new List<Documentation>();
            Localizador locActual = null;

            if (linkbaseRole != null && !linkbaseRole.Equals(LinkbaseReferencia.RoleReferenceLinkbaseRef))
            {
                ManejadorErrores.ManejarError(null, "4.3.4 Se encontró un elemento referenceLink que fue referenciado por un elemento linkbaseRef con xlink:role inválido, el ROLE erróneo es: " + linkbaseRole + ".  Nodo: " + node.OuterXml, XmlSeverityType.Error);
            }

            foreach (XmlNode child in node.ChildNodes)
            {
                //Procesar primero los localizadores
                if (EtiquetasXBRLConstantes.LocatorElement.Equals(child.LocalName))
                {
                    locActual = ProcesarLocalizador(child, uriLinkbase, true);
                    if (locActual != null)
                    {
                        int tipoElemento = 0;
                        //un locator en este linkbase únicamente debe apuntar a conceptos item o tuple o debe ser un locator a un recurso externo
                        if (locActual.Destino.Elemento == null ||
                            PerteneceAGrupoSustitucionItemOTuple(locActual.Destino.Elemento, out tipoElemento))
                        {
                            if (!locators.ContainsKey(locActual.Etiqueta))
                            {
                                locators.Add(locActual.Etiqueta, new List<ElementoLocalizable>());
                            }
                            locators[locActual.Etiqueta].Add(locActual);
                        }
                        else
                        {
                            ManejadorErrores.ManejarError(null, "5.2.3.1 Se encontró un elemento locator que apunta a un concepto que no es del tipo item o tuple: \"" +
                                locActual.Destino.Elemento.SubstitutionGroup.Name + "\" : Nodo: " + child.OuterXml, XmlSeverityType.Error);
                        }


                    }
                }
                else if (EtiquetasXBRLConstantes.ReferenceElement.Equals(child.LocalName))
                {
                    Referencia referencia = new Referencia();
                    //Si el elemento de referencia no es válido no se agrega a los conjuntos de referencias de este extended link
                    if (ProcesarElementoReferencia(referencia, child, roles))
                    {
                        if (!referencias.ContainsKey(referencia.Etiqueta))
                        {
                            referencias[referencia.Etiqueta] = new List<ElementoLocalizable>();
                        }
                        referencias[referencia.Etiqueta].Add(new ElementoLocalizable(referencia));
                    }

                }
                else if (EtiquetasXBRLConstantes.DocumentationElement.Equals(child.LocalName))
                {

                    documentacion.Add(ProcesarElementoDocumentacion(child));
                }
                else if (EtiquetasXBRLConstantes.ReferenceArcElement.Equals(child.LocalName))
                {
                    arcos.Add(child);
                }
            }
            LinkbaseReferencia resultadoLinkBase = new LinkbaseReferencia();
            resultadoLinkBase.Localizadores = locators;
            resultadoLinkBase.Documentacion = documentacion;
            resultadoLinkBase.Recursos = referencias;
            //Procesar los arcos de referencias
            foreach (XmlNode arcoXml in arcos)
            {

                ArcoReferencia arcoFinal = new ArcoReferencia();
                //Procesar arco genérico
                IDictionary<string, string> atributos = XmlUtil.ObtenerAtributosDeNodo(arcoXml);
                if (ProcesarElementoArcoGenerico(arcoFinal, arcoXml, atributos, resultadoLinkBase))
                {
                    //Validar el rol estandar para el arco
                    if (!ArcoReferencia.RolArcoReferencia.Equals(arcoFinal.ArcoRol))
                    {
                        if (!UsaArcoRolValido(arcoFinal, arcoRoles, arcoXml))
                        {
                            ManejadorErrores.ManejarError(null, "5.2.3.3 Se encontró un elemento referenceArc con valor del atributo xlink:arcrole diferente de \"" + ArcoReferencia.RolArcoReferencia + "\" y un rol inválido: " + atributos[EtiquetasXBRLConstantes.ArcroleAttribute] + " Nodo: " + arcoXml.OuterXml, XmlSeverityType.Error);
                            continue;
                        }
                    }
                    bool toFromOK = true;
                    //Validar que la relación sea desde un concepto hacia una referencia
                    foreach (ElementoLocalizable desde in arcoFinal.ElementoDesde)
                    {
                        if (!(desde.Destino is Concept))
                        {
                            ManejadorErrores.ManejarError(null, "5.2.3.3 Se encontró un elemento referenceArc con valor del atributo xlink:from que no apunta a un concepto de la taxonomía: " + desde.Destino.Id + " :  Nodo: " + arcoXml.OuterXml, XmlSeverityType.Error);
                            toFromOK = false;
                            break;
                        }
                    }
                    if (!toFromOK)
                    {
                        continue;
                    }
                    foreach (ElementoLocalizable hacia in arcoFinal.ElementoHacia)
                    {
                        if (!(hacia.Destino is Referencia))
                        {
                            ManejadorErrores.ManejarError(null, "5.2.3.3 Se encontró un elemento referenceArc con valor del atributo xlink:to que no apunta a una referencia: " + hacia.Destino.Id + " :  Nodo: " + arcoXml.OuterXml, XmlSeverityType.Error);
                            toFromOK = false;
                            break;
                        }
                        //Si el elemento hacia es un localizador a un archivo externo entonces el tipo de uso debe ser prohibido
                        if (hacia is Localizador && !TiposUso.Prohibido.Valor.Equals(arcoFinal.Uso))
                        {
                            ManejadorErrores.ManejarError(null, "5.2.3.3 Se encontró un elemento referenceArc con valor del atributo xlink:to que apunta a un recurso externo y cuyo tipo de uso no es 'prohibited': " + hacia.Destino.Id + " :  Nodo: " + arcoXml.OuterXml, XmlSeverityType.Error);
                            toFromOK = false;
                            break;
                        }
                    }
                    
                    if (!toFromOK)
                    {
                        continue;
                    }

                    resultadoLinkBase.Arcos.Add(arcoFinal);
                }
            }
            return resultadoLinkBase;

        }

        /// <summary>
        /// Valida si el ArcoRol utilizado por un arco fue importado correctamente y la lista de usos contempla el elemento
        /// </summary>
        /// <param name="arco">el arco a validar</param>
        /// <param name="arcoRoles">los arcoroles importados al momento del uso del arco</param>
        /// <param name="node">el nodo con la definición del arco.</param>
        /// <returns><code>true</code> si el rol es válido para el arco. <code>false</code> en cualquier otro caso.</returns>
        private bool UsaArcoRolValido(Arco arco ,List<ArcRoleType> arcoRoles, XmlNode node)
        {
            bool resultado = true;
            if (!string.IsNullOrWhiteSpace(arco.ArcoRol))
            {
                resultado = false;
                foreach(ArcRoleType arcoRol in arcoRoles) 
                {
                    if(arcoRol.ArcoRolURI.ToString().Equals(arco.ArcoRol))
                    {
                        XmlQualifiedName qNodo = new XmlQualifiedName(node.LocalName, node.NamespaceURI);
                        foreach (XmlQualifiedName qName in arcoRol.UsadoEn)
                        {
                            if (qName.Equals(qNodo))
                            {
                                resultado = true;
                                break;
                            }
                        }
                        if (resultado)
                            break;
                    }
                }
            }
            else
            {
                resultado = false;
            }
            return resultado;
        }

        /// <summary>
        /// Procesa un elemento etiqueta del linkbase de etiquetas
        /// </summary>
        /// <param name="etiqueta">Instacia de etiqueta a llenar</param>
        /// <param name="child">Nodo correspondiente al elemento etiqueta</param>
        /// <param name="roles">Listado de tipo de roles importados en el linkbase extendido a procesar</param>
        /// <returns>True si el elemento etiqueta es válido, false en otro caso</returns>
        private Boolean ProcesarElementoEtiqueta(Etiqueta etiqueta, XmlNode child, List<RoleType> roles)
        {
            //Si el contenido del recurso genérico es válido, continuar con la validación y llenado
            if (ProcesarElementoRecursoGenerico(etiqueta, child))
            {
                //Verificar y llenar los elementos extras del recurso etiqueta
                IDictionary<string, string> atributos = XmlUtil.ObtenerAtributosDeNodo(child);
                if (!atributos.ContainsKey(EtiquetasXBRLConstantes.XmlLangAttribute))
                {
                    ManejadorErrores.ManejarError(null, "5.2.2.2  Se encontró un elemento del tipo Etiqueta con valor del atributo xml:lang no definido, este atributo es requerido:" +
                       ": Nodo: " + child.OuterXml, XmlSeverityType.Error);
                    return false;
                }
                
                if (atributos.ContainsKey(EtiquetasXBRLConstantes.XmlLangAttribute) && !String.IsNullOrEmpty(atributos[EtiquetasXBRLConstantes.XmlLangAttribute]))
                {
                    //Validar que la clave del lenguaje cumpla con los requisitos de
                    //[a-zA-Z]{1,8}(-[a-zA-Z0-9]{1,8})*

                    Match conincidencias = Regex.Match(atributos[EtiquetasXBRLConstantes.XmlLangAttribute], ConstantesGenerales.ExpresionRegularLang);
                   if(!conincidencias.Success){
                     ManejadorErrores.ManejarError(null, "5.2.2.2.1  Se encontró un elemento del tipo Etiqueta con valor del atributo xml:lang no válido de acuerdo a  http://www.w3.org/TR/2000/REC-xml-20001006#sec-lang-tag :" +
                      atributos[EtiquetasXBRLConstantes.XmlLangAttribute] + ": Nodo: " + child.OuterXml, XmlSeverityType.Error);
                    return false;
                   }
                   etiqueta.Lenguaje = atributos[EtiquetasXBRLConstantes.XmlLangAttribute];
                    
                }
                etiqueta.Valor = child.InnerXml.ToString();
                if (etiqueta.Rol == null)
                {
                    //5.2.2.2.2 Si no se especifica el rol de la etiqueta entonces se asigna el rol estándar
                    etiqueta.Rol = Etiqueta.RolEtiqueta;
                }
                if (!Etiqueta.RolesEstandar.Contains(etiqueta.Rol))
                {
                    //Verificar que si no es el rol estándar de etiqueta, se haya importado el rol
                    RoleType rolTipo = roles.Find(r => r.RolURI.ToString().Equals(etiqueta.Rol));
                    XmlQualifiedName qNLabel = new XmlQualifiedName(EtiquetasXBRLConstantes.LabelElement, EspacioNombresConstantes.LinkNamespace);
                    if (rolTipo == null)
                    {
                        //5.2.2.2.2
                        ManejadorErrores.ManejarError(null, "5.2.2.2  Se encontró un elemento del tipo Etiqueta con valor del atributo xlink:role que no fue importado en el linkbase:" +
                        etiqueta.Rol + ": Nodo: " + child.OuterXml, XmlSeverityType.Error);
                        return false;
                    }
                    if (!rolTipo.UsadoEn.Contains(qNLabel))
                    {
                        ManejadorErrores.ManejarError(null, "5.2.2.2  Se encontró un elemento del tipo Etiqueta con valor del atributo xlink:role que no permite su uso en etiquetas label:" +
                        etiqueta.Rol + ": Nodo: " + child.OuterXml, XmlSeverityType.Error);
                        return false;
                    }
                }
            }
            //Agregar etiqueta al indice de recursos por archivo
            AgregarRecursoAIndice(etiqueta, child);
            return true;
        }
        /// <summary>
        /// Agrega al indice general de recursos por archivo por ID el recurso que se acaba de procesar, ya sea
        /// etiqueta o referencia, se agrega sólo si el recurso cuenta con ID declarado
        /// </summary>
        /// <param name="recurso">Recurso que se procesó</param>
        /// <param name="child">Nodo XML procesado</param>
        private void AgregarRecursoAIndice(Recurso recurso, XmlNode child)
        {
            if (!String.IsNullOrEmpty(recurso.Id))
            {
                if (!RecursosTaxonominaPorArchivoPorId.ContainsKey(child.OwnerDocument.BaseURI.ToString()))
                {
                    RecursosTaxonominaPorArchivoPorId.Add(child.OwnerDocument.BaseURI.ToString(),new Dictionary<string,Recurso>());
                }
                RecursosTaxonominaPorArchivoPorId[child.OwnerDocument.BaseURI.ToString()].Add(recurso.Id, recurso);
            }
        }

        /// <summary>
        /// Procesa un Linkbase de cálculo. Describe relaciones de cálculo aditivo entre conceptos en taxonomías.
        /// Este linkbase no puede tener recursos.
        /// Este linkbase únicamente puede tener:
        /// title element
        /// documentation element
        /// loc element
        /// calculationArc
        /// </summary>
        /// <param name="node">El nodo raíz que contiene la definición del Linkbase de Cálculo.</param>
        /// <param name="uriLinkbase">La ruta donde se encuentra el archivo que contine la definición del Linkbase a procesar.</param>
        /// <param name="extendedLinkRole">Rol personalizado al que está asociado el extended link</param>
        /// <param name="linkbaseRole">El Rol con el que fue referenciado este linkbase. Puede ser <code>null</code> en caso de que no sea importado a través de un elemento linkbaseRef.</param>
        private LinkbaseCalculo ProcesarLinkbaseCalculo(XmlNode node, string uriLinkbase, List<ArcRoleType> arcoRoles, List<RoleType> roles, string linkbaseRole)
        {
            IDictionary<String, IList<ElementoLocalizable>> locators = new Dictionary<String, IList<ElementoLocalizable>>();
            IList<XmlNode> arcos = new List<XmlNode>();
            IList<Documentation> documentacion = new List<Documentation>();
            Localizador locActual = null;

            if (linkbaseRole != null && !linkbaseRole.Equals(LinkbaseCalculo.RoleCalculoLinkbaseRef))
            {
                ManejadorErrores.ManejarError(null, "4.3.4 Se encontró un elemento calculationLink que fue referenciado por un elemento linkbaseRef con xlink:role inválido, el ROLE erróneo es: " + linkbaseRole + ".  Nodo: " + node.OuterXml, XmlSeverityType.Error);
            }

            foreach (XmlNode child in node.ChildNodes)
            {
                //Procesar primero los localizadores
                if (EtiquetasXBRLConstantes.LocatorElement.Equals(child.LocalName))
                {
                    locActual = ProcesarLocalizador(child, uriLinkbase, true);
                    if (locActual != null)
                    {
                        //un locator en este linkbase únicamente debe apuntar a conceptos item o tuple
                        int tipoElemento = 0;
                        if (PerteneceAGrupoSustitucionItemOTuple(locActual.Destino.Elemento, out tipoElemento))
                        {
                            if (!locators.ContainsKey(locActual.Etiqueta))
                            {
                                locators.Add(locActual.Etiqueta, new List<ElementoLocalizable>());
                            }
                            locators[locActual.Etiqueta].Add(locActual);
                        }
                        else
                        {
                            ManejadorErrores.ManejarError(null, "5.2.5.1 Se encontró un elemento locator que apunta a un concepto que no es del tipo item o tuple: \"" +
                                locActual.Destino.Elemento.SubstitutionGroup.Name + "\" : Nodo: " + child.OuterXml, XmlSeverityType.Error);
                        }


                    }
                }
                else if (EtiquetasXBRLConstantes.DocumentationElement.Equals(child.LocalName))
                {
                    documentacion.Add(ProcesarElementoDocumentacion(child));
                }
                else if (EtiquetasXBRLConstantes.CalculationArcElement.Equals(child.LocalName))
                {
                    arcos.Add(child);
                }
            }
            LinkbaseCalculo resultadoLinkBase = new LinkbaseCalculo();
            resultadoLinkBase.Localizadores = locators;
            resultadoLinkBase.Documentacion = documentacion;

            //Procesar los arcos de cálculo
            foreach (XmlNode arcoXml in arcos)
            {
                ArcoCalculo arcoFinal = new ArcoCalculo();
                //Procesar arco genérico
                IDictionary<string, string> atributos = XmlUtil.ObtenerAtributosDeNodo(arcoXml);
                if (ProcesarElementoArcoGenerico(arcoFinal, arcoXml, atributos, resultadoLinkBase))
                {
                    //Validar el rol estandar para el arco
                    if (!ArcoCalculo.SummationItemRole.Equals(arcoFinal.ArcoRol))
                    {
                        if (!UsaArcoRolValido(arcoFinal, arcoRoles, arcoXml))
                        {
                            ManejadorErrores.ManejarError(null, "5.2.5.2 Se encontró un elemento calculationArc con valor del atributo xlink:arcrole diferente de \"" +
                                ArcoCalculo.SummationItemRole + "\" y un rol inválido: " + atributos[EtiquetasXBRLConstantes.ArcroleAttribute] + " Nodo: " + arcoXml.OuterXml, XmlSeverityType.Error);
                            continue;
                        }
                    }
                    //Validar el peso del arco, es un dato requerido
                    if (!atributos.ContainsKey(EtiquetasXBRLConstantes.WeightAttribute) || String.IsNullOrEmpty(atributos[EtiquetasXBRLConstantes.WeightAttribute]))
                    {
                        ManejadorErrores.ManejarError(null, "5.2.5.2.1 Se encontró un elemento calculationArc con valor del atributo xlink:weight  vacío o no especificado " +
                        ": Nodo: " + arcoXml.OuterXml, XmlSeverityType.Error);
                        continue;
                    }
                    decimal valorDecimal = 0;
                    if (Decimal.TryParse(atributos[EtiquetasXBRLConstantes.WeightAttribute],NumberStyles.Any,CultureInfo.InvariantCulture, out valorDecimal))
                    {
                        arcoFinal.Peso = valorDecimal;
                    }
                    else
                    {
                        ManejadorErrores.ManejarError(null, "5.2.5.2.1 Se encontró un elemento calculationArccon valor del atributo xlink:weight con un valor decimal no válido: " + atributos[EtiquetasXBRLConstantes.WeightAttribute] +
                            ": Nodo: " + arcoXml.OuterXml, XmlSeverityType.Error);
                        continue;
                    }
                    //Validar que los elementos que une el arco sean  conceptos el tipo elemento o item y cuyo tipo es numerico
                    //La especificación indica que únicamente se valida para los arcos summation-item
                    if (ArcoCalculo.SummationItemRole.Equals(arcoFinal.ArcoRol))
                    {
                        foreach (ElementoLocalizable elementoDesde in arcoFinal.ElementoDesde)
                        {
                            foreach (ElementoLocalizable elementoHacia in arcoFinal.ElementoHacia)
                            {

                                if (elementoDesde.Destino is ConceptItem && elementoHacia.Destino is ConceptItem)
                                {
                                    if (elementoDesde.Destino.Elemento.ElementSchemaType != null && XmlUtil.EsNumerico(elementoDesde.Destino.Elemento.ElementSchemaType) &&
                                        elementoHacia.Destino.Elemento.ElementSchemaType != null && XmlUtil.EsNumerico(elementoHacia.Destino.Elemento.ElementSchemaType))
                                       
                                    {
                                        if( ((ConceptItem)elementoDesde.Destino).Balance != null && ((ConceptItem)elementoHacia.Destino).Balance != null){
                                            bool pesoValido = true;
                                            if ((((ConceptItem)elementoDesde.Destino).IsCreditBalance() && ((ConceptItem)elementoHacia.Destino).IsCreditBalance()) ||
                                            ((ConceptItem)elementoDesde.Destino).IsDebitBalance() && ((ConceptItem)elementoHacia.Destino).IsDebitBalance())
                                            {
                                                if (arcoFinal.Peso  <= 0)
                                                {
                                                   pesoValido = false;
                                                }
                                            }
                                            if ((((ConceptItem)elementoDesde.Destino).IsCreditBalance() && ((ConceptItem)elementoHacia.Destino).IsDebitBalance()) ||
                                               ((ConceptItem)elementoDesde.Destino).IsDebitBalance() && ((ConceptItem)elementoHacia.Destino).IsCreditBalance())
                                            {
                                                if (arcoFinal.Peso >= 0)
                                                {
                                                   pesoValido = false;
                                                }
                                            }
                                            if(!pesoValido){
                                                 ManejadorErrores.ManejarError(null, "5.1.1.2 Se encontró un elemento calculationArc que relaciona 2 elementos cuyo Balance no está vacío (" +
                                                        elementoDesde.Destino.Id + " y " + elementoHacia.Destino.Id
                                                        + ") y el peso del arco es inválido: " + arcoFinal.Peso +
                                                    ": Nodo: " + arcoXml.OuterXml, XmlSeverityType.Error);
                                                continue;
                                            }
                                        }
                                    }
                                    else
                                    {
                                        ManejadorErrores.ManejarError(null, "5.2.5.2 Se encontró un elemento calculationArc que relaciona conceptos cuyo tipo de dato no es numérico: " +
                                                   ": Nodo: " + arcoXml.OuterXml, XmlSeverityType.Error);
                                        continue;
                                    }

                                }
                                else
                                {
                                    ManejadorErrores.ManejarError(null, "5.2.5.2 Se encontró un elemento calculationArc que relaciona conceptos cuyo grupo de substitución no es <item>: " +
                                                   ": Nodo: " + arcoXml.OuterXml, XmlSeverityType.Error);
                                    continue;
                                }

                            }
                            

                        }
                    }
                    resultadoLinkBase.Arcos.Add(arcoFinal);
                }
            }
            return resultadoLinkBase;

        }

        /// <summary>
        /// Procesa un Linkbase de definición. Describe relaciones diversas entre conceptos en taxonomías
        /// Este linkbase no puede tener recursos.
        /// Este linkbase únicamente puede tener:
        /// title element
        /// documentation element
        /// loc element
        /// definitionArc
        /// </summary>
        /// <param name="node">El nodo raíz que contiene la definición del Linkbase de Definición.</param>
        /// <param name="uriLinkbase">La ruta donde se encuentra el archivo que contine la definición del Linkbase a procesar.</param>
        /// <param name="extendedLinkRole">Rol personalizado al que está asociado el extended link</param>
        /// <param name="linkbaseRole">El Rol con el que fue referenciado este linkbase. Puede ser <code>null</code> en caso de que no sea importado a través de un elemento linkbaseRef.</param>
        private LinkbaseDefinicion ProcesarLinkbaseDefinicion(XmlNode node, string uriLinkbase, List<ArcRoleType> arcoRoles, List<RoleType> roles, string linkbaseRole)
        {
            IDictionary<String, IList<ElementoLocalizable>> locators = new Dictionary<String, IList<ElementoLocalizable>>();
            IList<XmlNode> arcos = new List<XmlNode>();
            IList<Documentation> documentacion = new List<Documentation>();
            Localizador locActual = null;

            if (linkbaseRole != null && !linkbaseRole.Equals(LinkbaseDefinicion.RolDefitionLinkbaseRef))
            {
                ManejadorErrores.ManejarError(null, "4.3.4 Se encontró un elemento definitionLink que fue referenciado por un elemento linkbaseRef con xlink:role inválido, el ROLE erróneo es: " + linkbaseRole + ".  Nodo: " + node.OuterXml, XmlSeverityType.Error);
            }

            foreach (XmlNode child in node.ChildNodes)
            {
                //Procesar primero los localizadores
                if (EtiquetasXBRLConstantes.LocatorElement.Equals(child.LocalName))
                {
                    locActual = ProcesarLocalizador(child, uriLinkbase, true);
                    if (locActual != null)
                    {
                        //un locator en este linkbase únicamente debe apuntar a conceptos item o tuple
                        int tipoElemento = 0;
                        if (PerteneceAGrupoSustitucionItemOTuple(locActual.Destino.Elemento, out tipoElemento))
                        {
                            if (!locators.ContainsKey(locActual.Etiqueta))
                            {
                                locators.Add(locActual.Etiqueta, new List<ElementoLocalizable>());
                            }
                            locators[locActual.Etiqueta].Add(locActual);
                        }
                        else
                        {
                            ManejadorErrores.ManejarError(null, "5.2.6.1 Se encontró un elemento locator que apunta a un concepto que no es del tipo item o tuple: \"" +
                                locActual.Destino.Elemento.SubstitutionGroup.Name + "\" : Nodo: " + child.OuterXml, XmlSeverityType.Error);
                        }
                    }
                }
                else if (EtiquetasXBRLConstantes.DocumentationElement.Equals(child.LocalName))
                {
                    documentacion.Add(ProcesarElementoDocumentacion(child));
                }
                else if (EtiquetasXBRLConstantes.DefinitionArcElement.Equals(child.LocalName))
                {
                    arcos.Add(child);
                }
            }
            LinkbaseDefinicion resultadoLinkBase = new LinkbaseDefinicion();
            resultadoLinkBase.Localizadores = locators;
            resultadoLinkBase.Documentacion = documentacion;

            //Procesar los arcos de definición
            foreach (XmlNode arcoXml in arcos)
            {
                ArcoDefinicion arcoFinal = new ArcoDefinicion();
                //Procesar arco genérico
                IDictionary<string, string> atributos = XmlUtil.ObtenerAtributosDeNodo(arcoXml);
                if (ProcesarElementoArcoGenerico(arcoFinal, arcoXml, atributos, resultadoLinkBase))
                {
                    //procesar atributos dimensionales
                    XmlAttribute attr = arcoXml.Attributes[EtiquetasXBRLConstantes.TargetRoleAttribute,EspacioNombresConstantes.DimensionTaxonomyNamespace];
                    arcoFinal.RolDestino = attr != null ? attr.Value : null;
                    
                    attr = arcoXml.Attributes[EtiquetasXBRLConstantes.ClosedAttribute, EspacioNombresConstantes.DimensionTaxonomyNamespace];
                    arcoFinal.Closed = attr != null ? Boolean.Parse(attr.Value) :(bool?) null;

                    attr = arcoXml.Attributes[EtiquetasXBRLConstantes.ContextElementAttribute, EspacioNombresConstantes.DimensionTaxonomyNamespace];
                    arcoFinal.ElementoContexto = attr != null? TipoElementoContexto.GetTipoElementoContexto(attr.Value):null;

                    attr = arcoXml.Attributes[EtiquetasXBRLConstantes.UsableAttribute, EspacioNombresConstantes.DimensionTaxonomyNamespace];
                    arcoFinal.Usable = attr != null ? Boolean.Parse(attr.Value) : (bool?) null;

                    //Validar los roles estándar que puede tener
                    if (!ArcoDefinicion.RolesArcoDefinicion.Contains(arcoFinal.ArcoRol))
                    {
                        if (!UsaArcoRolValido(arcoFinal, arcoRoles, arcoXml))
                        {
                            ManejadorErrores.ManejarError(null, "5.2.6.2 Se encontró un elemento definitionArc con valor del atributo xlink:arcrole diferente a los roles estándar \"" +
                             "y un arcorol inválido: " + atributos[EtiquetasXBRLConstantes.ArcroleAttribute] + " Nodo: " + arcoXml.OuterXml, XmlSeverityType.Error);
                            continue;
                        }
                    }
                    //Validar los contenidos del arco de definicion
                    if (ValidarArcoDefinicion(arcoFinal))
                    {
                        resultadoLinkBase.Arcos.Add(arcoFinal);
                    }
                    //Validación del atributo xbrldt:targetRole sólo cuando no es el rol estándar
                    if(arcoFinal.RolDestino != null && !arcoFinal.RolDestino.Equals(EspacioNombresConstantes.StandardLinkRoleType))
                    {
                        //Validar que el rol haya sido importado en este linkbase
                        if(!roles.Any(x=>x.RolURI.ToString().Equals(arcoFinal.RolDestino)))
                        {
                            ManejadorErrores.ManejarError(CodigosErrorXBRL.TargetRoleNotResolvedError, null,
                                "2.4.3.1 Se encontró un arco de definición con un atributo xbrldt:targetRole cuyo rol no fue refereido en el linkbase donde es declarado el arco: Rol : "+
                                arcoFinal.RolDestino + " : Nodo: " + arcoXml.OuterXml, XmlSeverityType.Error);
                        }
                    }
                }
            }
            return resultadoLinkBase;

        }
        /// <summary>
        /// Valida la consistencia de las relaciones de definición entre 2 elementos de un arco de definición
        /// </summary>
        /// <param name="arcoFinal">Arco a Validar</param>
        /// <returns>true si el arco de definición es válido, false en otro caso</returns>
        private bool ValidarArcoDefinicion(ArcoDefinicion arcoFinal)
        {
            //Para essence alias:
            if (ArcoDefinicion.EssenceAliasRole.Equals(arcoFinal.ArcoRol))
            {
                foreach (ElementoLocalizable desde in arcoFinal.ElementoDesde)
                {
                    foreach (ElementoLocalizable hacia in arcoFinal.ElementoHacia)
                    {
                        //Ambos lados de la relación deben ser concepto del tipo item
                        if (!(desde.Destino is ConceptItem && hacia.Destino is ConceptItem))
                        {
                            ManejadorErrores.ManejarError(null, "5.2.6.2.2 Se encontró un elemento definitionArc con rol " + arcoFinal.ArcoRol + " cuyos conceptos relacionados no son del tipo " +
                            " <Item>: Nodo:" + arcoFinal.ElementoXML.OuterXml, XmlSeverityType.Error);
                            return false;
                        }
                        //Ambos lados de la relación deben de ser del mismo tipo de dato
                        if (!((ConceptItem)desde.Destino).TipoDatoXbrl.Equals(((ConceptItem)hacia.Destino).TipoDatoXbrl) )
                        {
                            ManejadorErrores.ManejarError(null, "5.2.6.2.2 Se encontró un elemento definitionArc con rol " + arcoFinal.ArcoRol + " cuyos conceptos relacionados no son del mismo " +
                           " tipo de dato: Nodo:" + arcoFinal.ElementoXML.OuterXml, XmlSeverityType.Error);
                            return false;
                        }
                        //Ambos lados de la relación deben ser del mismo tipo de periodo.
                        if (!((ConceptItem)desde.Destino).TipoPeriodo.Equals(((ConceptItem)hacia.Destino).TipoPeriodo))
                        {
                            ManejadorErrores.ManejarError(null, "5.2.6.2.2 Se encontró un elemento definitionArc con rol " + arcoFinal.ArcoRol + " cuyos conceptos relacionados no son del mismo " +
                           " tipo de periodo: Nodo:" + arcoFinal.ElementoXML.OuterXml, XmlSeverityType.Error);
                            return false;
                        }
                        //Si el tipo de balance del elemento está presenta en ambos lados deben tener el mismo valor
                        if (((ConceptItem)desde.Destino).Balance != null && ((ConceptItem)hacia.Destino).Balance != null)
                        {
                            if (!((ConceptItem)desde.Destino).Balance.Equals(((ConceptItem)hacia.Destino).Balance))
                            {
                                ManejadorErrores.ManejarError(null, "5.2.6.2.2 Se encontró un elemento definitionArc con rol " + arcoFinal.ArcoRol + " cuyos conceptos relacionados no son del mismo " +
                               " tipo de Balance: Nodo:" + arcoFinal.ElementoXML.OuterXml, XmlSeverityType.Error);
                                return false;
                            }
                        }
                    }
                }
                

            }
            return true;
        }

        /// <summary>
        /// Procesa un elemento referencia del linkbase de referencias
        /// </summary>
        /// <param name="referencia">Instacia de referencia a llenar</param>
        /// <param name="child">Nodo correspondiente al elemento etiqueta</param>
        /// <param name="roles">Listado de tipo de roles importados en el linkbase extendido a procesar</param>
        /// <returns>True si el elemento referencia es válido, false en otro caso</returns>
        private Boolean ProcesarElementoReferencia(Referencia referencia, XmlNode child, List<RoleType> roles)
        {
            //Si el contenido del recurso genérico es válido, continuar con la validación y llenado
            if (ProcesarElementoRecursoGenerico(referencia, child))
            {
                if (referencia.Rol == null)
                {
                    //5.2.2.2.2 Si no se especifica el rol de la etiqueta entonces se asigna el rol estándar
                    referencia.Rol = Referencia.RolReferencia;
                }
                //Validar si el rol de la referencia es estándar
                if (!Referencia.RolesReferencia.Contains(referencia.Rol))
                {

                    //Verificar que si no es el rol estándar de referencia, se haya importado el rol
                    RoleType rolTipo = roles.Find(r => r.RolURI.ToString().Equals(referencia.Rol));
                    XmlQualifiedName qNLabel = new XmlQualifiedName(EtiquetasXBRLConstantes.ReferenceElement, EspacioNombresConstantes.LinkNamespace);
                    if (rolTipo == null)
                    {
                        //5.2.2.2.2
                        ManejadorErrores.ManejarError(null, "5.2.3.2.1 Se encontró un elemento del tipo <reference> con valor del atributo xlink:role que no fue importado en el linkbase:" +
                        referencia.Rol + ": Nodo: " + child.OuterXml, XmlSeverityType.Error);
                        return false;
                    }
                    if (!rolTipo.UsadoEn.Contains(qNLabel))
                    {
                        ManejadorErrores.ManejarError(null, "5.2.3.2.1 Se encontró un elemento del tipo <reference> con valor del atributo xlink:role que no permite su uso en etiquetas reference:" +
                        referencia.Rol + ": Nodo: " + child.OuterXml, XmlSeverityType.Error);
                        return false;
                    }

                }
                //Leer el contenido de referencia del elemento
                foreach (XmlNode hijoElemento in child.ChildNodes)
                {
                    if (hijoElemento.NodeType.Equals(XmlNodeType.Element))
                    {
                        ReferenciaParte referenciaParte = new ReferenciaParte();
                        if (ProcesarElementoReferenciaParte(referenciaParte, hijoElemento))
                        {
                            //si el contenido es valido agregarlo a la lista
                            referencia.PartesReferencia.Add(referenciaParte);
                        }
                    }
                    
                }

            }
            //Agregar referencia al indice de recursos por archivo
            AgregarRecursoAIndice(referencia, child);
            return true;
        }
        /// <summary>
        /// Procesa un elemento interno de la declaración del elemento referencia, realiza el mínimo de validaciones,
        /// las validaciones completas se deben realizar una vez terminada de cargar la taxonomía
        /// </summary>
        /// <param name="referenciaParte">Instacia a llenar</param>
        /// <param name="hijoElemento">Elemento XML a procesar</param>
        /// <returns>True si es valido, false en otro caso</returns>
        private bool ProcesarElementoReferenciaParte(ReferenciaParte referenciaParte, XmlNode hijoElemento)
        {
            referenciaParte.NombreLocal = hijoElemento.LocalName;
            referenciaParte.EspacioNombres = hijoElemento.NamespaceURI;
            referenciaParte.Prefijo = hijoElemento.Prefix;
            if (String.IsNullOrEmpty(hijoElemento.InnerText))
            {
                //ManejadorErrores.ManejarError(null, "5.2.3.2  Se encontró un elemento del tipo reference con valor de un hijo vacío :" + referenciaParte.NombreLocal + " :" +
                //         "Nodo: " + hijoElemento.OuterXml, XmlSeverityType.Warning);
                //return false;
            }
            referenciaParte.Valor = hijoElemento.InnerText;
            return true;

        }
        /// <summary>
        /// Procesa un elemento del tipo recurso, validando y llenando su parte genérica
        /// </summary>
        /// <param name="recurso">Instancia del recurso a llenar</param>
        /// <param name="child">Nodo XML elemento recurso</param>
        /// <returns>True si es válido el recurso genérico, false de otro modo</returns>
        private bool ProcesarElementoRecursoGenerico(Recurso recurso, XmlNode child)
        {
            //Extraer atributos
            IDictionary<string, string> atributos = XmlUtil.ObtenerAtributosDeNodo(child);
            if (!atributos.ContainsKey(EtiquetasXBRLConstantes.TypeAttribute) || !Recurso.TipoRecurso.Equals(atributos[EtiquetasXBRLConstantes.TypeAttribute]))
            {
                ManejadorErrores.ManejarError(null, "3.5.3.8.1  Se encontró un recurso con valor del atributo xlink:type diferente de :" + Recurso.TipoRecurso + ": Nodo: " + child.OuterXml, XmlSeverityType.Error);
                return false;
            }
            if (!atributos.ContainsKey(EtiquetasXBRLConstantes.LabelAttribute) || String.IsNullOrEmpty(atributos[EtiquetasXBRLConstantes.LabelAttribute]))
            {
                ManejadorErrores.ManejarError(null, "3.5.3.8.2  Se encontró un recurso con valor del atributo xlink:label vacío : Nodo: " + child.OuterXml, XmlSeverityType.Error);
                return false;
            }
            recurso.Tipo = atributos[EtiquetasXBRLConstantes.TypeAttribute];
            recurso.Etiqueta = atributos[EtiquetasXBRLConstantes.LabelAttribute];
            recurso.Rol = atributos.ContainsKey(EtiquetasXBRLConstantes.RoleAttribute) ? atributos[EtiquetasXBRLConstantes.RoleAttribute] : null;
            recurso.Titulo = atributos.ContainsKey(EtiquetasXBRLConstantes.TitleAttribute) ? atributos[EtiquetasXBRLConstantes.TitleAttribute] : null;
            recurso.Id = atributos.ContainsKey(EtiquetasXBRLConstantes.IdAttribute) ? atributos[EtiquetasXBRLConstantes.IdAttribute] : null;
            recurso.Valor = child.InnerXml.ToString();
            if (atributos.ContainsKey(EtiquetasXBRLConstantes.XmlLangAttribute))
            {
                recurso.Lenguaje = atributos[EtiquetasXBRLConstantes.XmlLangAttribute];
            }
           
            if (recurso.Id != null)
            {
                //Validar la integridad del ID opcional
                if (!XmlUtil.EsNombreIDValido(recurso.Id))
                {
                    ManejadorErrores.ManejarError(null, "3.5.3.8.4  Se encontró un recurso con valor del atributo id no válido de acuerdo a " +
                    "http://www.w3.org/TR/REC-xml#NT-TokenizedType  : " + recurso.Id + " :Nodo: " + child.OuterXml, XmlSeverityType.Warning);
                }
               
               
            }
            return true;
        }
        /// <summary>
        /// Procesa y valida los atributos de un arco genérico, no valida las reglas específicas de cada tipo de arco (presentación, definición, etc)
        /// </summary>
        /// <param name="arcoFinal">Datos del arco final</param>
        /// <param name="arcoXml">Nodo de XML origen</param>
        /// <param name="linkBase">Definicion de linkbase que se está procesando</param>
        /// <returns>Indica si el arco es válido respecto a sus atributos genéricos</returns>
        private Boolean ProcesarElementoArcoGenerico(Arco arcoFinal, XmlNode arcoXml, IDictionary<string, string> atributos, Linkbase linkBase)
        {
            arcoFinal.ElementoXML = arcoXml;
            //requeridos
            arcoFinal.Tipo = atributos.ContainsKey(EtiquetasXBRLConstantes.TypeAttribute) ? atributos[EtiquetasXBRLConstantes.TypeAttribute] : null;
            arcoFinal.Desde = atributos.ContainsKey(EtiquetasXBRLConstantes.FromAttribute) ? atributos[EtiquetasXBRLConstantes.FromAttribute] : null;
            arcoFinal.Hacia = atributos.ContainsKey(EtiquetasXBRLConstantes.ToAttribute) ? atributos[EtiquetasXBRLConstantes.ToAttribute] : null;
            arcoFinal.ArcoRol = atributos.ContainsKey(EtiquetasXBRLConstantes.ArcroleAttribute) ? atributos[EtiquetasXBRLConstantes.ArcroleAttribute] : null;
            //opcionales
            arcoFinal.Titulo = atributos.ContainsKey(EtiquetasXBRLConstantes.TitleAttribute) ? atributos[EtiquetasXBRLConstantes.TitleAttribute] : null;
            arcoFinal.Mostrar = atributos.ContainsKey(EtiquetasXBRLConstantes.ShowAttribute) ? atributos[EtiquetasXBRLConstantes.ShowAttribute] : null;
            arcoFinal.Accionar = atributos.ContainsKey(EtiquetasXBRLConstantes.ActuateAttribute) ? atributos[EtiquetasXBRLConstantes.ActuateAttribute] : null;
            arcoFinal.Orden = 1; //Valor predeterminado
            arcoFinal.Uso = atributos.ContainsKey(EtiquetasXBRLConstantes.UseAttribute) ? atributos[EtiquetasXBRLConstantes.UseAttribute] : null;
            arcoFinal.Prioridad = 0; //Valor predeterminado

            //Validar elementos requeridos
            if (arcoFinal.Tipo == null)
            {
                ManejadorErrores.ManejarError(null, "Se encontró un elemento arc con valor del atributo xlink:type vacío, el atributo xlink:type es requerido : Nodo: " + arcoXml.OuterXml, XmlSeverityType.Error);
                return false;
            }
            if (arcoFinal.ArcoRol == null)
            {
                ManejadorErrores.ManejarError(null, "Se encontró un elemento arc con valor del atributo xlink:arcrole vacío, el atributo xlink:arcrole es requerido : Nodo: " + arcoXml.OuterXml, XmlSeverityType.Error);
                return false;
            }

            //Validar tipo requerido de arco
            if (!Arco.ValorAtributoTipoArco.Equals(arcoFinal.Tipo))
            {
                ManejadorErrores.ManejarError(null, "Se encontró un elemento arc con valor del atributo xlink:type diferente de \"arc\": " + arcoFinal.Tipo + " Nodo: " + arcoXml.OuterXml, XmlSeverityType.Error);
                return false;
            }
            //Validar los 2 lados del arco
            if (arcoFinal.Desde == null)
            {
                ManejadorErrores.ManejarError(null, "Se encontró un elemento arc con valor del atributo xlink:from vacío o no especificado : Nodo: " + arcoXml.OuterXml, XmlSeverityType.Error);
                return false;
            }
            if (arcoFinal.Hacia == null)
            {
                ManejadorErrores.ManejarError(null, "Se encontró un elemento arc con valor del atributo xlink:to vacío o no especificado : Nodo: " + arcoXml.OuterXml, XmlSeverityType.Error);
                return false;
            }
            //Validar que los nombres sean válidos

            if (!XmlUtil.EsNombreNCValido(arcoFinal.Desde))
            {
                ManejadorErrores.ManejarError(null, "Se encontró un elemento arc con valor del atributo xlink:from con un valor que no es válido conforme al estándar NCName de W3C:" + arcoFinal.Desde + "  : Nodo: " + arcoXml.OuterXml, XmlSeverityType.Warning);
            }
            if (!XmlUtil.EsNombreNCValido(arcoFinal.Hacia))
            {
                ManejadorErrores.ManejarError(null, "Se encontró un elemento arc con valor del atributo xlink:to con un valor que no es válido conforme al estándar NCName de W3C:" + arcoFinal.Hacia + "  : Nodo: " + arcoXml.OuterXml, XmlSeverityType.Warning);
            }
            //Validar que existan las etiquetas como localizador o recursos del linkbase
            if (!linkBase.Localizadores.ContainsKey(arcoFinal.Desde) && !linkBase.Recursos.ContainsKey(arcoFinal.Desde))
            {
                ManejadorErrores.ManejarError(null, "Se encontró un elemento arc con valor del atributo xlink:from cuyo localizador o recurso no existe: " + arcoFinal.Desde + " : Nodo: " + arcoXml.OuterXml, XmlSeverityType.Error);
                return false;
            }
            if (!linkBase.Localizadores.ContainsKey(arcoFinal.Hacia) && !linkBase.Recursos.ContainsKey(arcoFinal.Hacia))
            {
                ManejadorErrores.ManejarError(null, "Se encontró un elemento arco con valor del atributo xlink:to cuyo localizador o recurso no existe: " + arcoFinal.Hacia + " : Nodo: " + arcoXml.OuterXml, XmlSeverityType.Error);
                return false;
            }
            //Validar que no sea un arco repetido en el mismo link base
            foreach (Arco arcoTmp in linkBase.Arcos)
            {
                if (arcoTmp.Desde.Equals(arcoFinal.Desde) && arcoTmp.Hacia.Equals(arcoFinal.Hacia))
                {
                    ManejadorErrores.ManejarError(null, "Se encontró un elemento arco con valor del atributo xlink:to y xlink:from repetido dentro del mismo link extendido: " + " : Nodo: " + arcoXml.OuterXml, XmlSeverityType.Error);
                    return false;
                }
            }
            //Validar que order sea un valor decimal
            decimal valorDecimal = 0;
            if (atributos.ContainsKey(EtiquetasXBRLConstantes.OrderAttribute) && !String.IsNullOrEmpty(atributos[EtiquetasXBRLConstantes.OrderAttribute]))
            {
                if (Decimal.TryParse(atributos[EtiquetasXBRLConstantes.OrderAttribute],NumberStyles.Any,CultureInfo.InvariantCulture ,out valorDecimal))
                {
                    arcoFinal.Orden = valorDecimal;
                }
                else
                {
                    ManejadorErrores.ManejarError(null, "Se encontró un elemento arco con valor del atributo xlink:order con un valor decimal no válido: " + atributos[EtiquetasXBRLConstantes.OrderAttribute] + ": Se asignará el valor predeterminado de 1 : Nodo: " + arcoXml.OuterXml, XmlSeverityType.Warning);
                }
            }
            else
            {
                //Se agrega al elemento XML el valor predeterminado de orden para posterior comparación
                XmlAttribute attr = arcoXml.OwnerDocument.CreateAttribute(EtiquetasXBRLConstantes.OrderAttribute);
                attr.Value = arcoFinal.Orden.ToString();
                arcoXml.Attributes.Append(attr);
            }
            //Validar el valor del uso
            if (arcoFinal.Uso != null)
            {
                if (!TiposUso.EsTipoUsoValido(arcoFinal.Uso))
                {
                    ManejadorErrores.ManejarError(null, "Se encontró un elemento arco con valor del atributo xlink:use con un valor no válido (optional o prohibited) : " + arcoFinal.Uso + " Se asignará el valor predeterminado de optional : Nodo: " + arcoXml.OuterXml, XmlSeverityType.Warning);
                    arcoFinal.Uso = TiposUso.Opcional.Valor;
                }
            }
            else
            {
                arcoFinal.Uso = TiposUso.Opcional.Valor;
            }
            //Validar el atributo de prioridad
            int valorInt = 0;
            if (atributos.ContainsKey(EtiquetasXBRLConstantes.PriorityAttribute) && !String.IsNullOrEmpty(atributos[EtiquetasXBRLConstantes.PriorityAttribute]))
            {
                if (Int32.TryParse(atributos[EtiquetasXBRLConstantes.PriorityAttribute], out valorInt))
                {
                    arcoFinal.Prioridad = valorInt;
                }
                else
                {
                    ManejadorErrores.ManejarError(null, "Se encontró un elemento arco con valor del atributo xlink:priority con un valor entero no válido: " + atributos[EtiquetasXBRLConstantes.PriorityAttribute] + ": Se asignará el valor predeterminado de 0 : Nodo: " + arcoXml.OuterXml, XmlSeverityType.Warning);
                }
            }
            else
            {
                //Se agrega al elemento XML el valor predeterminado de prioridad para posterior comparación
                XmlAttribute attr = arcoXml.OwnerDocument.CreateAttribute(EtiquetasXBRLConstantes.PriorityAttribute, EspacioNombresConstantes.LinkNamespace);
                attr.Value = arcoFinal.Prioridad.ToString();
                arcoXml.Attributes.Append(attr);
            }
            arcoFinal.ElementoDesde = linkBase.Localizadores.ContainsKey(arcoFinal.Desde) ? linkBase.Localizadores[arcoFinal.Desde] : linkBase.Recursos[arcoFinal.Desde];
            arcoFinal.ElementoHacia = linkBase.Localizadores.ContainsKey(arcoFinal.Hacia) ? linkBase.Localizadores[arcoFinal.Hacia] : linkBase.Recursos[arcoFinal.Hacia];
            return true;
        }

        /// <summary>
        /// Procesa un elemento de documentación
        /// </summary>
        /// <param name="child">Nodo correspondiente al elemento de documentación</param>
        /// <returns></returns>
        private Documentation ProcesarElementoDocumentacion(XmlNode child)
        {
            Documentation docElement = new Documentation(child);
            IDictionary<string, string> attrs = XmlUtil.ObtenerAtributosDeNodo(child);
            if (attrs.ContainsKey(EtiquetasXBRLConstantes.XmlLangAttribute))
            {
                docElement.Contenido = child.Value;
            }
            return docElement;
        }

        /// <summary>
        /// Procesa la definición de un localizador.
        /// Se debe validar que el attributo type sea "locator"
        /// Se debe validar que label no sea vacío
        /// </summary>
        /// <param name="nodoLocalizador">Nodo que representa al localizador</param>
        /// <param name="uriLinkbase">URI del archivo desde donde se está procesando el localizador</param>
        /// <param name="esLinkbaseEstandar">Indica si el linkbase que contiene este localizador es estándar</param>
        /// <returns>Objeto que representa al localizador, null en caso de algún error</returns>
        private Localizador ProcesarLocalizador(XmlNode nodoLocalizador, string uriLinkbase, bool esLinkbaseEstandar)
        {
            string typeAttr = null;
            string labelAttr = null;
            string hrefAttr = null;
            //indica si este localizador apunta a un archivo que no es esquema ni linkbase
            bool localizadorAInstancia = false;
            foreach (XmlAttribute attribute in nodoLocalizador.Attributes)
            {
                if (attribute.LocalName.Equals(EtiquetasXBRLConstantes.TypeAttribute))
                {
                    typeAttr = attribute.Value;
                }
                else if (attribute.LocalName.Equals(EtiquetasXBRLConstantes.LabelAttribute))
                {
                    labelAttr = attribute.Value;
                }
                else if (attribute.LocalName.Equals(EtiquetasXBRLConstantes.HrefAttribute))
                {
                    hrefAttr = attribute.Value;
                }
            }

            if (!EtiquetasXBRLConstantes.LocatorAttributeType.Equals(typeAttr))
            {
                ManejadorErrores.ManejarError(null, "3.5.3.7.1 Se encontró un elemento loc con valor del atributo xlink:type diferente de \"locator\": " + typeAttr + " Nodo: " + nodoLocalizador.OuterXml, XmlSeverityType.Error);
                return null;
            }
            if (String.IsNullOrEmpty(labelAttr))
            {
                ManejadorErrores.ManejarError(null, "3.5.3.7.3 Se encontró un elemento loc con valor del atributo xlink:label vacío: Nodo: " + nodoLocalizador.OuterXml, XmlSeverityType.Error);
                return null;
            }

            try
            {
                var ptr = new ApuntadorElementoXBRL(Uri.UnescapeDataString(hrefAttr));
                Uri uriEsquemaElemento = null;
                if (ptr.UbicacionArchivo == null || ptr.UbicacionArchivo.Equals(string.Empty))
                {
                    uriEsquemaElemento = new Uri(uriLinkbase);
                }
                else
                {
                    //uriEsquemaElemento = nodoLocalizador.na
                    uriEsquemaElemento = new Uri(new Uri(uriLinkbase), ptr.UbicacionArchivo);
                }
                if (esLinkbaseEstandar && string.IsNullOrEmpty(hrefAttr))
                {
                    ManejadorErrores.ManejarError(null, "3.5.3.7.2 Se encontró un elemento loc con valor del atributo xlink:href vacío: Nodo: " + nodoLocalizador.OuterXml, XmlSeverityType.Error);
                    return null;
                }
                if (!string.IsNullOrEmpty(hrefAttr))
                {
                    //aputa a XSD o a xml
                    if(hrefAttr.EndsWith(ConstantesGenerales.XSD_EXT,true,null) || hrefAttr.ToLower().Contains(ConstantesGenerales.XSD_EXT_XPTR) ) {
                        //solo los elementos del tipo link:loc pueden disparar el descubrimiento de nuevos esquemas del DTS
                        if (EspacioNombresConstantes.LinkNamespace.Equals(nodoLocalizador.NamespaceURI) && EtiquetasXBRLConstantes.LocatorElement.Equals(nodoLocalizador.LocalName))
                        {
                            if (!ArchivosDTS.Contains(uriEsquemaElemento.ToString()))
                            {
                                ProcesarDefinicionDeEsquema(uriEsquemaElemento.ToString());
                            }
                        }
                    }
                    else if (hrefAttr.EndsWith(ConstantesGenerales.XML_EXT, true, null) || hrefAttr.ToLower().Contains(ConstantesGenerales.XML_EXT_XPTR))
                    {
                        //Verificar si el XML corresponde a un xml de linkbase
                        XmlNode nodoLinkbase = ObtenerNodoRaizArchivoLinkbase(uriEsquemaElemento.ToString());
                        if (nodoLinkbase != null)
                        {
                            if (!ArchivosLinkbase.ContainsKey(uriEsquemaElemento.ToString()))
                            {
                                ProcesarDefinicionDeLinkbase(nodoLinkbase, uriEsquemaElemento.ToString(), null);
                            }
                        }
                        else
                        {
                            localizadorAInstancia = true;
                        }
                        
                    }
                }

                ElementoXBRL concepto = null;
                if (!string.IsNullOrEmpty(hrefAttr))
                {
                    concepto = ProcesarElementXPointer(ptr, uriEsquemaElemento);
                    if (concepto == null)
                    {
                        //si es un localizador a una instancia o tiene archivo pero no id entonces es un apuntador a archivo genérico
                        if (!localizadorAInstancia && !(ptr.Identificador == null && ptr.UbicacionArchivo !=null) )
                        {
                            ManejadorErrores.ManejarError(null, "3.5.3.7.2 No existe el elemento apuntado por el localizador  href: " + hrefAttr + " : Nodo: " + nodoLocalizador.OuterXml, XmlSeverityType.Error);
                            return null;
                        }
                        else
                        {
                            //Si este localizador apunta a un archivo de instancia, únicamente colocar el marcador 
                            concepto = new ElementoXBRLExterno(ptr);
                        }
                       
                    }
                }
                Localizador loc = new Localizador();
                loc.Apuntador = ptr;
                loc.Etiqueta = labelAttr;
                loc.Tipo = typeAttr;
                loc.Destino = concepto;
                return loc;
            }
            catch (Exception ex)
            {
                ManejadorErrores.ManejarError(ex, "3.5.3.7.2 No existe el archivo de esquema indicado por el atributo xlink:href " + hrefAttr + ": Nodo: " + nodoLocalizador.OuterXml, XmlSeverityType.Error);
                return null;
            }

        }
        /// <summary>
        /// Lee y carga el nodo raiz de definición de linkbase del archivo, si no es un archivo linkbase
        /// entonces se retorna null
        /// </summary>
        /// <param name="uri">Ubicación del archivo a verificar</param>
        /// <returns>Nodo raíz del linkbase declarado en el archivo en caso que sea un archivo de linkbase, null en caso que no sea archivo de linkbase</returns>
        private XmlNode ObtenerNodoRaizArchivoLinkbase(string uri)
        {
            Uri uriLink = null;
            try
            {
                uriLink = new Uri(uri);
            }
            catch (UriFormatException e)
            {
                ManejadorErrores.ManejarError(e, "El URI proporcionado está mal formado: " + uri, XmlSeverityType.Error);
                return null;
            }

            XmlReader xmlReader = null;
            try
            {
                XmlReaderSettings settings = new XmlReaderSettings();
                settings.IgnoreComments = true;
                settings.ValidationType = ValidationType.Schema;
                settings.ValidationFlags |= XmlSchemaValidationFlags.ProcessInlineSchema;
                settings.ValidationFlags |= XmlSchemaValidationFlags.ProcessSchemaLocation;
                settings.ValidationEventHandler += new ValidationEventHandler(ValidacionCallback);
                xmlReader = XmlReader.Create(uriLink.ToString(), settings);
                if (xmlReader.Read())
                {
                    XmlDocument documento = new XmlDocument();
                    documento.Load(xmlReader);

                    foreach (XmlNode raiz in documento.ChildNodes)
                    {
                        if (raiz.NamespaceURI.Equals(EspacioNombresConstantes.LinkNamespace) && raiz.LocalName.Equals(EtiquetasXBRLConstantes.Linkbase))
                        {
                            return raiz;
                        }
                    }
                   
                }
            }
            catch (UriFormatException e)
            {
                ManejadorErrores.ManejarError(e, "La ruta del archivo que contiene el linkbase está mal formada: " + uri, XmlSeverityType.Error);
            }
            catch (FileNotFoundException e)
            {
                ManejadorErrores.ManejarError(e, "No se encontró el archivo que contiene el linkbase: " + uri, XmlSeverityType.Error);
            }
            catch (XmlException e)
            {
                ManejadorErrores.ManejarError(e, "El archivo que contiene el linkbase está mal formado: " + uri, XmlSeverityType.Error);
            }
            catch (Exception e)
            {
                ManejadorErrores.ManejarError(e, "Ocurrió un error al cargar el archivo que contiene el linkbase: " + uri, XmlSeverityType.Error);
            }
            return null;
        }

        /// <summary>
        /// Resuelve el elemento al que apunta una expresión XPointer
        /// </summary>
        /// <param name="apuntador">el apuntador a procesar</param>
        /// <param name="uriEsquemaElemento">el URI del esquema donde se debe intentar resolver el elemento</param>
        /// <returns>el objeto <code>Concept</code> que corresponde al elemento resuelto. <code>null</code> en cualquier otro caso</returns>
        private ElementoXBRL ProcesarElementXPointer(ApuntadorElementoXBRL apuntador, Uri uriEsquemaElemento)
        {
            ElementoXBRL concepto = null;
            string xpointer = apuntador.Identificador;
            if (string.IsNullOrWhiteSpace(xpointer))
            {
                return null;
            }
            if (xpointer.StartsWith(ApuntadorElementoXBRL.ElementNotationStart) && xpointer.EndsWith(ApuntadorElementoXBRL.ElementNotationEnd))
            {
                string[] expressions = xpointer.Split(ApuntadorElementoXBRL.ElementNotationEnd.ToCharArray());
                foreach(string expression in expressions) 
                {
                    xpointer = expression;
                    
                    if (string.IsNullOrWhiteSpace(xpointer))
                        continue;
                    if (!xpointer.StartsWith(ApuntadorElementoXBRL.ElementNotationStart))
                        return null;

                    xpointer = xpointer.Replace(ApuntadorElementoXBRL.ElementNotationStart, string.Empty);
                    if (xpointer.IndexOf(ApuntadorElementoXBRL.ElementChildSequenceSeparator) >= 0)
                    {
                        string[] childSequence = xpointer.Split(ApuntadorElementoXBRL.ElementChildSequenceSeparator.ToCharArray());
                        XDocument document = XDocument.Load(uriEsquemaElemento.ToString());
                        bool primerElemento = true;
                        XElement nodo = null;
                        foreach (string seq in childSequence)
                        {
                            if (primerElemento)
                            {
                                int root = 0;
                                if (int.TryParse(seq, out root))
                                {
                                    if (root != 1)
                                    {
                                        return null;
                                    }
                                    nodo = document.Root;
                                    primerElemento = false;
                                }
                                else if(!string.IsNullOrWhiteSpace(seq))
                                {
                                    nodo = document.Descendants().SingleOrDefault(e => e.Attribute("id").Value == seq);
                                    primerElemento = false;
                                }
                            }
                            else
                            {
                                int node = 0;
                                if (int.TryParse(seq, out node))
                                {
                                    if (nodo.Elements().Count() >= node)
                                    {
                                        nodo = nodo.Elements().ElementAt(node - 1);
                                    }
                                }
                                else
                                {
                                    return null;
                                }
                            }
                        }

                        if (nodo.Attribute("id") != null)
                        {
                            apuntador.Identificador = nodo.Attribute("id").Value;
                            if (ElementosTaxonomiaPorArchivoPorId.Keys.Contains(uriEsquemaElemento.ToString()) && ElementosTaxonomiaPorArchivoPorId[uriEsquemaElemento.ToString()].Keys.Contains(apuntador.Identificador))
                            {
                                concepto = ElementosTaxonomiaPorArchivoPorId[uriEsquemaElemento.ToString()][apuntador.Identificador];
                            } else if(RecursosTaxonominaPorArchivoPorId.ContainsKey(uriEsquemaElemento.ToString()) && RecursosTaxonominaPorArchivoPorId[uriEsquemaElemento.ToString()].ContainsKey(apuntador.Identificador)){
                                concepto = RecursosTaxonominaPorArchivoPorId[uriEsquemaElemento.ToString()][apuntador.Identificador];
                            }
                        }
                    }
                    else if (ElementosTaxonomiaPorArchivoPorId.Keys.Contains(uriEsquemaElemento.ToString()) && ElementosTaxonomiaPorArchivoPorId[uriEsquemaElemento.ToString()].Keys.Contains(xpointer))
                    {
                        concepto = ElementosTaxonomiaPorArchivoPorId[uriEsquemaElemento.ToString()][xpointer];
                    }
                    else if (RecursosTaxonominaPorArchivoPorId.ContainsKey(uriEsquemaElemento.ToString()) && RecursosTaxonominaPorArchivoPorId[uriEsquemaElemento.ToString()].ContainsKey(xpointer))
                    {
                        concepto = RecursosTaxonominaPorArchivoPorId[uriEsquemaElemento.ToString()][xpointer];
                    }
                }
            }
            else
            {
                if (ElementosTaxonomiaPorArchivoPorId.Keys.Contains(uriEsquemaElemento.ToString()) && ElementosTaxonomiaPorArchivoPorId[uriEsquemaElemento.ToString()].Keys.Contains(xpointer))
                {
                    concepto = ElementosTaxonomiaPorArchivoPorId[uriEsquemaElemento.ToString()][xpointer];
                } else if (RecursosTaxonominaPorArchivoPorId.ContainsKey(uriEsquemaElemento.ToString()) && RecursosTaxonominaPorArchivoPorId[uriEsquemaElemento.ToString()].ContainsKey(xpointer))
                {
                    concepto = RecursosTaxonominaPorArchivoPorId[uriEsquemaElemento.ToString()][xpointer];
                }
                else if (RolesTaxonomiaPorArchivoPorUri.ContainsKey(uriEsquemaElemento.ToString()) &&
                    RolesTaxonomiaPorArchivoPorUri[uriEsquemaElemento.ToString()].Values.Any(x => x.Id.Equals(xpointer)))
                {
                    concepto =
                        RolesTaxonomiaPorArchivoPorUri[uriEsquemaElemento.ToString()].Values.First(
                            x => x.Id.Equals(xpointer));
                }else
                {
                    //No es concepto ni recurso ni rol, buscar el nodo genérico
                    XDocument document = XDocument.Load(uriEsquemaElemento.ToString());
                    foreach (var xElement in document.Descendants())
                    {
                        if (xElement.Attribute("id") != null)
                        {
                            if (xpointer.Equals(xElement.Attribute("id").Value))
                            {
                                concepto = new ElementoXBRLExterno(apuntador, xElement);
                                break;
                            }
                        }
                    }
                }
            }
            return concepto;
        }

        /// <summary>
        /// Procesa el fragmento de la taxonomía que contiene la definición de un rol personalizado.
        /// </summary>
        /// <param name="node">El nodo que contiene la declaración del rol personalizado.</param>
        /// <param name="uriSchema">El esquema que contiene la definición del rol.</param>
        private void ProcesarDefinicionDeRol(XmlNode node, XmlSchema schema)
        {
            RoleType rol = new RoleType();

            rol.UbicacionArchivo = schema.SourceUri;
            foreach (XmlAttribute attribute in node.Attributes)
            {
                if (attribute.LocalName.Equals(EtiquetasXBRLConstantes.RoleURIAttribute))
                {
                    try
                    {
                        rol.RolURI = new Uri(attribute.Value, UriKind.RelativeOrAbsolute);
                        if (!rol.RolURI.IsAbsoluteUri && attribute.Value.StartsWith(ConstantesGenerales.AnchorString))
                        {
                            ManejadorErrores.ManejarError(null, "5.1.3.1 No se definió correctamente el URI para el rol personalizado: " + attribute.Value + " Nodo: " + node.OuterXml, XmlSeverityType.Error);
                        }
                    }
                    catch (UriFormatException e)
                    {
                        ManejadorErrores.ManejarError(e, "5.1.3.1 No se definió correctamente el URI para el rol personalizado: " + attribute.Value + " Nodo: " + node.OuterXml, XmlSeverityType.Error);
                    }
                }
                if (attribute.LocalName.Equals(EtiquetasXBRLConstantes.IdAttribute))
                {
                    if (XmlUtil.EsNombreNCValido(attribute.Value))
                    {
                        rol.Id = attribute.Value;
                    }
                    else
                    {
                        ManejadorErrores.ManejarError(null, "5.1.4.1 No se definió correctamente el ID para el rol personalizado: " + attribute.Value + " Nodo: " + node.OuterXml, XmlSeverityType.Error);
                    }
                }
            }

            if (node.HasChildNodes)
            {
                IList<XmlQualifiedName> usadoEn = new List<XmlQualifiedName>();
                foreach (XmlNode child in node.ChildNodes)
                {
                    if (child.LocalName.Equals(EtiquetasXBRLConstantes.Definition))
                    {
                        rol.Definicion = child.InnerText;
                    }
                    else if (child.LocalName.Equals(EtiquetasXBRLConstantes.UsedOn))
                    {
                        XmlQualifiedName qN = XmlUtil.ParsearQName(child.InnerText);

                        string name = "";

                        foreach (XmlQualifiedName nameSpace in schema.Namespaces.ToArray())
                        {
                            if (nameSpace.Name.Equals(qN.Namespace))
                            {
                                name = nameSpace.Namespace;
                                break;
                            }
                        }

                        if (name.Length == 0)
                        {
                            name = child.GetNamespaceOfPrefix(qN.Namespace);
                        }

                        qN = new XmlQualifiedName(qN.Name, name);

                        if (usadoEn.Contains(qN))
                        {
                            ManejadorErrores.ManejarError(null, "5.1.3.4 No se puede tener elementos S-Iguales <usedOn> duplicados en la declaración de un rol. Nodo: " + node.OuterXml, XmlSeverityType.Error);
                        }
                        else
                        {
                            usadoEn.Add(qN);
                        }

                    }
                }
                rol.UsadoEn = usadoEn.ToArray();
            }

            if (rol.RolURI == null || rol.RolURI.ToString().Equals(""))
            {
                ManejadorErrores.ManejarError(null, "5.1.3.1 No es posible procesar un elemento roleType con URI inválido o vacío." + " Nodo: " + node.OuterXml, XmlSeverityType.Error);
            }
            else
            {
                if (RolesTaxonomia.Keys.Contains(rol.RolURI.ToString()))
                {
                    RoleType rolePrevio = RolesTaxonomia[rol.RolURI.ToString()];
                    if ((RolesTaxonomiaPorArchivoPorUri.Keys.Contains(schema.SourceUri) && RolesTaxonomiaPorArchivoPorUri[schema.SourceUri].Keys.Contains(rol.RolURI.ToString())) || !rolePrevio.Equals(rol))
                    {
                        ManejadorErrores.ManejarError(null, "5.1.3 El Rol con URI " + rol.RolURI.ToString() + " se ha declarado más de una vez." + " Nodo: " + node.OuterXml, XmlSeverityType.Error);
                    }
                }
                else
                {
                    RolesTaxonomia.Add(rol.RolURI.ToString(), rol);
                    if (!RolesTaxonomiaPorArchivoPorUri.Keys.Contains(schema.SourceUri))
                    {
                        RolesTaxonomiaPorArchivoPorUri.Add(schema.SourceUri, new Dictionary<string, RoleType>());
                    }
                    if (!RolesTaxonomiaPorArchivoPorUri[schema.SourceUri].Keys.Contains(rol.RolURI.ToString()))
                    {
                        RolesTaxonomiaPorArchivoPorUri[schema.SourceUri].Add(rol.RolURI.ToString(), rol);
                    }
                }
            }
        }

        /// <summary>
        /// Procesa el fragmento de la taxonomía que contiene la definición de un arco rol personalizado.
        /// </summary>
        /// <param name="node">El nodo que contiene la declaración del arco rol personalizado.</param>
        /// <param name="schema">El esquema que contiene la definición del arco rol.</param>
        /// <returns><code>true</code> si fue posible procesar la definición del arco. <code>false</code> si existe un error en la definición del arco rol o en cualquier otro caso.</returns>
        private bool ProcesarDefinicionDeArcoRol(XmlNode node, XmlSchema schema)
        {
            bool exito = true;
            ArcRoleType arcoRol = new ArcRoleType();
            arcoRol.UbicacionArchivo = schema.SourceUri;
            foreach (XmlAttribute attribute in node.Attributes)
            {
                if (attribute.LocalName.Equals(EtiquetasXBRLConstantes.ArcroleURIAttribute))
                {
                    try
                    {
                        arcoRol.ArcoRolURI = new Uri(attribute.Value, UriKind.RelativeOrAbsolute);
                        if (!arcoRol.ArcoRolURI.IsAbsoluteUri && attribute.Value.StartsWith(ConstantesGenerales.AnchorString))
                        {
                            ManejadorErrores.ManejarError(null, "5.1.4.1 No se definió correctamente el URI para el arco rol personalizado: " + attribute.Value + " Nodo: " + node.OuterXml, XmlSeverityType.Error);
                        }
                    }
                    catch (UriFormatException e)
                    {
                        ManejadorErrores.ManejarError(e, "5.1.4.1 No se definió correctamente el URI para el arco rol personalizado: " + attribute.Value + " Nodo: " + node.OuterXml, XmlSeverityType.Error);
                    }
                }
                if (attribute.LocalName.Equals(EtiquetasXBRLConstantes.IdAttribute))
                {
                    if (XmlUtil.EsNombreNCValido(attribute.Value))
                    {
                        arcoRol.Id = attribute.Value;
                    }
                    else
                    {
                        ManejadorErrores.ManejarError(null, "5.1.4.2 No se definió correctamente el ID para el rol personalizado: " + attribute.Value + " Nodo: " + node.OuterXml, XmlSeverityType.Error);
                    }
                }
                if (attribute.LocalName.Equals(EtiquetasXBRLConstantes.CyclesAllowedAttribute))
                {
                    arcoRol.CiclosPermitidos = attribute.Value;
                }
            }

            if (node.HasChildNodes)
            {
                IList<XmlQualifiedName> usadoEn = new List<XmlQualifiedName>();
                foreach (XmlNode child in node.ChildNodes)
                {
                    if (child.LocalName.Equals(EtiquetasXBRLConstantes.Definition))
                    {
                        arcoRol.Definicion = child.InnerText;
                    }
                    else if (child.LocalName.Equals(EtiquetasXBRLConstantes.UsedOn))
                    {
                        XmlQualifiedName qN = XmlUtil.ParsearQName(child.InnerText);

                        string name = "";

                        foreach (XmlQualifiedName nameSpace in schema.Namespaces.ToArray())
                        {
                            if (nameSpace.Name.Equals(qN.Namespace))
                            {
                                name = nameSpace.Namespace;
                                break;
                            }
                        }

                        if (name.Length == 0)
                        {
                            name = child.GetNamespaceOfPrefix(qN.Namespace);
                        }

                        qN = new XmlQualifiedName(qN.Name, name);

                        if (usadoEn.Contains(qN))
                        {
                            ManejadorErrores.ManejarError(null, "5.1.4.5 No se puede tener elementos S-Iguales <usedOn> duplicados en la declaración de un arcorol. Nodo: " + node.OuterXml, XmlSeverityType.Error);
                        }
                        else
                        {
                            usadoEn.Add(qN);
                        }
                    }
                }
                arcoRol.UsadoEn = usadoEn.ToArray();
            }

            if (arcoRol.ArcoRolURI == null || arcoRol.ArcoRolURI.ToString().Equals(""))
            {
                ManejadorErrores.ManejarError(null, "5.1.4.1 No es posible procesar un elemento arcroleType con URI inválido o vacío." + " Nodo: " + node.OuterXml, XmlSeverityType.Error);
                exito = false;
            }
            else if (arcoRol.CiclosPermitidos.Equals("") || (!arcoRol.CiclosPermitidos.Equals(TiposCicloArco.Cualquiera) && !arcoRol.CiclosPermitidos.Equals(TiposCicloArco.NoDirigidos) && !arcoRol.CiclosPermitidos.Equals(TiposCicloArco.Ninguno)))
            {
                ManejadorErrores.ManejarError(null, "5.1.4.3 La declaración del atributo cyclesAllowed del elemento arcroleType no es válida. Nodo: " + node.OuterXml, XmlSeverityType.Error);
                exito = false;
            }
            else if (ArcoRolesTaxonomia.Keys.Contains(arcoRol.ArcoRolURI.ToString()))
            {
                ArcRoleType arcRolePrevio = ArcoRolesTaxonomia[arcoRol.ArcoRolURI.ToString()];

                if ((ArcoRolesTaxonomiaPorArchivoPorUri.Keys.Contains(schema.SourceUri) && ArcoRolesTaxonomiaPorArchivoPorUri[schema.SourceUri].Keys.Contains(arcoRol.ArcoRolURI.ToString())) || !arcRolePrevio.Equals(arcoRol))
                {
                    ManejadorErrores.ManejarError(null, "5.1.4 El Arco Rol con URI " + arcoRol.ArcoRolURI.ToString() + " se ha declarado más de una vez." + " Nodo: " + node.OuterXml, XmlSeverityType.Error);
                    exito = false;
                }
                
            }
            else
            {
                ArcoRolesTaxonomia.Add(arcoRol.ArcoRolURI.ToString(), arcoRol);
                if (!ArcoRolesTaxonomiaPorArchivoPorUri.Keys.Contains(schema.SourceUri))
                {
                    ArcoRolesTaxonomiaPorArchivoPorUri.Add(schema.SourceUri, new Dictionary<string, ArcRoleType>());
                }
                if (!ArcoRolesTaxonomiaPorArchivoPorUri[schema.SourceUri].Keys.Contains(arcoRol.ArcoRolURI.ToString()))
                {
                    ArcoRolesTaxonomiaPorArchivoPorUri[schema.SourceUri].Add(arcoRol.ArcoRolURI.ToString(), arcoRol);
                }
            }
            return exito;
        }

        /// <summary>
        /// Crea un árbol de relaciones por cada linkbase y cada rol en base a los tipos de rol declarados en la taxonomía en cada uno de los linkbases cargados.
        /// El nodo raíz será siempre la declaración del RoleType al cuál están asociadas las relaciones descritas en los linkbases procesados
        /// El árbol se crea con los arcos de relación en cada uno de lo linkbases, el árbol se encarga de determinar la sobreescritura o la prohibición
        /// de los arcos conforme se vayan agregando.
        /// Este método se manda llamar cada vez que se termina de cargar una taxonomía, por lo tanto se debe limpiar el árbol y volver a llenarlo en caso
        /// de que se encuentren ya valores
        /// </summary>
        public void CrearArbolDeRelaciones()
        {
            if (ConjuntoArbolesLinkbase != null)
            {
                return;
            }
            ConjuntoArbolesLinkbase = new Dictionary<string, IDictionary<string,ArbolLinkbase>>();
            //Ordenar los tipos de roles de la taxonomía
            var listaRoles = RolesTaxonomia.ToList();
            listaRoles.Sort((par1,par2)=> System.String.Compare(par1.Key, par2.Key, System.StringComparison.Ordinal));
            RolesTaxonomia.Clear();
            //Para cada tipo de rol de la taxonomía
            foreach (var kvp in listaRoles)
            {
                RolesTaxonomia.Add(kvp);
                var tipoRol = kvp.Value;
                ConjuntoArbolesLinkbase.Add(tipoRol.RolURI.ToString(),new Dictionary<string, ArbolLinkbase>());
                //Por cada linkbase
                foreach (string rolelinkbase in tipoRol.Linkbases.Keys)
                {
               
                    //if (rolelinkbase.Equals(LinkbaseEtiqueta.RoleLabelLinkbaseRef)) continue;
                    //Crear el modelo de arbol para el rol y linkbase
                    ConjuntoArbolesLinkbase[tipoRol.RolURI.ToString()].Add(rolelinkbase, ConstruirArbolLinkBase(tipoRol, tipoRol.Linkbases[rolelinkbase]));
                    
                }
            }
            CrearRelacionesDimensionales();
        }
        /// <summary>
        /// Crea las relaciones dimensionales adicionales tomando en cuenta el atributo opcional de los arcos de definición xbrldt:targetRole
        /// </summary>
        public void CrearRelacionesDimensionales()
        {
            if (_relacionesDimensionalesCreadas)
            {
                return;
            }
           /* foreach (var tipoRol in ConjuntoArbolesLinkbase)
            {
                foreach (
                    var arbolLinkbase in
                        tipoRol.Value.Where(x => x.Key.Equals(LinkbaseDefinicion.RolDefitionLinkbaseRef)))
                {
                    Debug.WriteLine(arbolLinkbase.Key);
                    ImprimirNodo(0, arbolLinkbase.Value.NodoRaiz, new List<NodoLinkbase>());
                }
            }
            Debug.WriteLine("_______________________________________________________________________________________________________");
            */
            //Una vez procesados los árboles revisar las conexiones de los arcos de definición que tengan el atributo target role
            foreach (var tipoRol in ConjuntoArbolesLinkbase)
            {
                foreach (var arbolLinkbase in tipoRol.Value.Where(x => x.Key.Equals(LinkbaseDefinicion.RolDefitionLinkbaseRef)))
                {
                    //Buscar los arcos dimensionales que sean arcos iniciales de relaciones consecutivas y tengan targetRole
                    IDictionary<ConectorLinkbase, IDictionary<Arco, String>> inventarioArcosImportados = new Dictionary<ConectorLinkbase, IDictionary<Arco,string>>();
                    foreach(var nodo in arbolLinkbase.Value.IndicePorId.Values)
                    {
                        foreach (var conector in nodo.ConectoresSalientes)
                        {
                            IDictionary<Arco,string> arcosConsecutivos = new Dictionary<Arco, string>();
                            if(conector.Arco != null && 
                                ArcoDefinicion.RolesArcosDimensionalesConsecutivos.ContainsKey(conector.Arco.ArcoRol) &&
                                !String.IsNullOrEmpty((conector.Arco as ArcoDefinicion).RolDestino))
                            {
                                //Este arco debe estar conectado a otro arco en el rol destino
                                BuscarArcosEnRolDestino(arcosConsecutivos, (conector.Arco as ArcoDefinicion).RolDestino, 
                                    ArcoDefinicion.RolesArcosDimensionalesConsecutivos[conector.Arco.ArcoRol], conector.Arco.ElementoHacia);
                                if(arcosConsecutivos.Count>0)
                                {
                                    //Clonar el Nodo siguiente y a partir de ese nodo crear las nuevas conexiones
                                    var nodoDestinoNuevo = new NodoLinkbase(conector.NodoSiguiente);
                                    //quitar del nodo actual su conector entrante desde nodo
                                    var conectorEliminado = conector.NodoSiguiente.ConectoresEntrantes.FirstOrDefault(x => x.NodoSiguiente == nodo);
                                    if (conectorEliminado != null)
                                    {
                                        conector.NodoSiguiente.ConectoresEntrantes.Remove(conectorEliminado);
                                    }
                                    //apuntar el conector a este nuevo nodo
                                    conector.NodoSiguiente = nodoDestinoNuevo;
                                    nodoDestinoNuevo.ConectoresEntrantes.Add(new ConectorLinkbase(conector.Arco, nodo));
                                    inventarioArcosImportados.Add(conector, arcosConsecutivos);
                                }
                            }
                        }
                    }
                    foreach (var kvArcosImportados in inventarioArcosImportados)
                    {
                        arbolLinkbase.Value.ImportarArcos(kvArcosImportados.Key, kvArcosImportados.Value);
                    }
                    
                }
            }
            ListarValoresPredeterminadosDeDimensiones();
            ListarHipercubos();
            _relacionesDimensionalesCreadas = true;
            /*foreach (var tipoRol in ConjuntoArbolesLinkbase)
            {
                foreach (
                    var arbolLinkbase in
                        tipoRol.Value.Where(x => x.Key.Equals(LinkbaseDefinicion.RolDefitionLinkbaseRef)))
                {
                    Debug.WriteLine(tipoRol.Key);
                    Debug.WriteLine(arbolLinkbase.Key);
                    ImprimirNodo(0, arbolLinkbase.Value.NodoRaiz, new List<NodoLinkbase>());
                }
            }*/
           
        }
        /// <summary>
        /// Procesa los arcos del tipo dimension-default y los coloca en una lista global de parejas de dimension => miembro predeterminado
        /// ya que según la especificación 1.0 esta relaciones son globales y no dependen del rol donde estén, tampoco son afectadas por el atributo target role
        /// y no forman parte de un DRS (dimensional relationship set)
        /// </summary>
        private void ListarValoresPredeterminadosDeDimensiones()
        {

            foreach (var rol in RolesTaxonomia.Values)
            {
                foreach (var rolLink in rol.Linkbases.Where(x=>x.Key.Equals(LinkbaseDefinicion.RolDefitionLinkbaseRef)))
                {
                    foreach (var arco in rolLink.Value.ArcosFinales.Where(x=>x.ArcoRol.Equals(ArcoDefinicion.DimensionDefaultRole)))
                    {
                        foreach (var desde in arco.ElementoDesde)
                        {
                            if(desde.Destino is ConceptDimensionItem)
                            {
                                foreach (var hacia in arco.ElementoHacia)
                                {
                                    if(hacia.Destino is ConceptItem)
                                    {
                                        if (_listaDimensionDefault.ContainsKey(desde.Destino as ConceptDimensionItem))
                                        {
                                            ;
                                        }
                                        else
                                        {
                                            _listaDimensionDefault.Add(desde.Destino as ConceptDimensionItem, hacia.Destino as ConceptItem);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        private void ImprimirNodo(int nivel, NodoLinkbase nodo, List<NodoLinkbase> impresos,string targetRole = null)
        {
            if (nivel > 10) return;
            //if (impresos.Count(nod => nod == nodo) > 1) return;
            //Imprimir este nodo en el nivel
            int espacios = nivel * 5;
            for (int i = 0; i < espacios; i++)
            {
                Debug.Write(" ");
            }

            Debug.WriteLine(nodo.Elemento + (targetRole != null ? "(i) " : ""));
            impresos.Add(nodo);
            foreach (ConectorLinkbase conn in nodo.ConectoresSalientes)
            {
                ImprimirNodo(nivel + 1, conn.NodoSiguiente, impresos,conn.RolOrigen);
            }
        }

        /// <summary>
        /// Busca un arco en el linkbase de definición en lo árboles que representan las relaciones de la taxonomía con las características:
        /// Elemento del arco desde igual al parámetro enviado
        /// Tipo de arco rol igual al parametro enviado
        /// Que existe en un linkbase de definición con el rol destino
        /// </summary>
        /// <param name="arcos">Inventario de Arcos</param>
        /// <param name="rolDestino">Rol de la taxonomía en el que se debe buscar</param>
        /// <param name="arcoRol">Arco rol del arco a buscar</param>
        /// <param name="elementosDesde">Conjunto de nodos a los que debe de apuntar la etiqueta "from" del arco buscado</param>
        /// <returns></returns>
        private void BuscarArcosEnRolDestino(IDictionary<Arco,string> arcos,string rolDestino, string arcoRol, IList<ElementoLocalizable> elementosDesde)
        {
            
            foreach (var linkbase in from roleType in RolesTaxonomia.Where(x => x.Key.Equals(rolDestino))
                                     from
                                     linkbase in roleType.Value.Linkbases.Where(x => x.Key.Equals(LinkbaseDefinicion.RolDefitionLinkbaseRef))
                                     select linkbase)
            {
                foreach (ArcoDefinicion arco in linkbase.Value.ArcosFinales.Where(arco => arco.ArcoRol.Equals(arcoRol)))
                {
                    //verificar el conjunto de nodos a los que apuntan los lados de cada arco
                    if (arco.ElementoDesde.Count(x => elementosDesde.Count(y => y.Destino.Id.Equals(x.Destino.Id))>0) == elementosDesde.Count)
                    {
                        if (arcos.ContainsKey(arco)) return;
                        arcos.Add(arco,rolDestino);

                        BuscarArcosEnRolDestino(arcos, !String.IsNullOrEmpty(arco.RolDestino) ? arco.RolDestino : rolDestino, ArcoDefinicion.RolesArcosDimensionalesConsecutivos[arcoRol], arco.ElementoHacia);
                    }
                }
            }
        }
        /// <summary>
        /// Construye una instancia de ArbolLinkBase con los datos enviados como parámetro, los arcos enviados
        /// son una versión ya ordenada y con los arcos excluidos eliminados de la lista
        /// </summary>
        /// <param name="tipoRol">Tipo de rol para el cuál se construye el árbol</param>
        /// <param name="linkbase">Datos del linkbase del que se va a construir el árbol</param>
        /// <returns>Instancia de arbol de linkbase creado</returns>
        private ArbolLinkbase ConstruirArbolLinkBase(RoleType tipoRol, Linkbase linkbase)
        {
            Debug.WriteLine("AbaxXbrl (" + DateTime.Now.ToLocalTime() + "): Procesando Arcos para: " + tipoRol.RolURI + " ; linkbase " + linkbase.RoleLinkBaseRef);

            var arcosFinales = new List<Arco>();

            arcosFinales.AddRange(linkbase.Arcos);
            /*
            //por cada arco del linkbase en el rol
            foreach (Arco arcoActual in linkbase.Arcos)
            {
                var arcosAComparar = new List<Arco>();
                arcosAComparar.AddRange(arcosFinales);
                //verificar contra los demás arcos que no son el si está pohibido o sobreescrito
                arcosAComparar.Remove(arcoActual);
                foreach (Arco arcoAComparar in arcosAComparar)
                {

                    if (arcoAComparar.Prioridad >= arcoActual.Prioridad && arcoActual.ArcoRol.Equals(arcoAComparar.ArcoRol))
                    {
                        var esEquivalente =  arcoActual.EsRelacionEquivalente(arcoAComparar);
                        if(esEquivalente)
                        {
                            //Está pohibido por
                            if (TiposUso.Prohibido.Valor.Equals(arcoAComparar.Uso))
                            {
                                if (arcosFinales.Contains(arcoAComparar))
                                {
                                    arcosFinales.Remove(arcoAComparar);
                                }
                            }
                            //Es sustituido por
                            if (arcosFinales.Contains(arcoActual))
                            {
                                arcosFinales.Remove(arcoActual);
                            }
                        }
                    }
                }
            }*/

            //Quitar los arcos que prohiben
            int prioridad = 0;
            string arcoRol = null;
            foreach (var arcoQueProhibe in linkbase.Arcos.Where(x=>TiposUso.Prohibido.Valor.Equals(x.Uso)))
            {
                prioridad = arcoQueProhibe.Prioridad;
                arcoRol = arcoQueProhibe.ArcoRol;
                
                arcosFinales.RemoveAll(
                   x =>x!=arcoQueProhibe && !TiposUso.Prohibido.Valor.Equals(x.Uso) && prioridad >= x.Prioridad && x.ArcoRol.Equals(arcoRol) && x.EsRelacionEquivalente(arcoQueProhibe) 
                    );
            }
            //Si el arco es prohibido y sigue en la lista final quitar
            arcosFinales.RemoveAll(arc => TiposUso.Prohibido.Valor.Equals(arc.Uso));
            //inventario de arcos reemplazados
            var arcosAEliminar = new List<Arco>();

            var arregloArcosFinales = arcosFinales.ToArray();

            for (var iArcoActual = 0; iArcoActual < arregloArcosFinales.Length - 1; iArcoActual++)
            {
                var arcoActual = arregloArcosFinales[iArcoActual];
                arcoRol = arcoActual.ArcoRol;
                prioridad = arcoActual.Prioridad;

                for (var iComparar = iArcoActual + 1; iComparar < arregloArcosFinales.Length; iComparar++)
                {
                    var arcoComparar = arregloArcosFinales[iComparar];
                    
                    if(arcoComparar.ArcoRol.Equals(arcoRol) && arcoComparar.EsRelacionEquivalente(arcoActual))
                    {
                        arcosAEliminar.Add(arcoComparar.Prioridad <= prioridad
                                                 ? arcoComparar
                                                 : arcoActual);
                    }
                }
            }

            arcosFinales.RemoveAll(arcosAEliminar.Contains);
            
            var arbol = new ArbolLinkbase(tipoRol);
            //Agregar el conjunto de arcos finales al arbol

            Debug.WriteLine("AbaxXbrl (" + DateTime.Now.ToLocalTime() + "): Ordenando Arcos para: " + tipoRol.RolURI + " ; linkbase " + linkbase.RoleLinkBaseRef);

            if(linkbase is LinkbaseEtiqueta)
            {
                arcosFinales = arcosFinales.OrderBy(x => x.Prioridad).ToList();
            }
            else
            {
            arcosFinales=arcosFinales.OrderBy(x => x.Orden).ToList();
            }
            


            Debug.WriteLine("AbaxXbrl (" + DateTime.Now.ToLocalTime() + "): Construyendo Arbol para: " + tipoRol.RolURI + " ; linkbase " + linkbase.RoleLinkBaseRef + " : Arcos: " + arcosFinales.Count);


            /*foreach (Arco arcoActual in arcosFinales)
            {
                arbol.ProcesarArcoRecursivo(arcoActual);
            }*/

           
            arbol.ProcesarArcosSecuenciales(arcosFinales);
            Debug.WriteLine("AbaxXbrl (" + DateTime.Now.ToLocalTime() + "): Arbol construido para: " + tipoRol.RolURI + " ; linkbase " + linkbase.RoleLinkBaseRef + " : Arcos: " + arcosFinales.Count);
            linkbase.ArcosFinales = arcosFinales;
            Debug.WriteLine("AbaxXbrl (" + DateTime.Now.ToLocalTime() + "): Arcos procesados para: " + tipoRol.RolURI + " ; linkbase " + linkbase.RoleLinkBaseRef);
            return arbol;
        }

        /// <summary>
        /// Crea el documento de XML de PTVL correspondiente a la interpretación de la taxonomía
        /// </summary>
        /// <param name="schemaLocation">Ubicación del archivo XSD</param>
        /// <returns></returns>
        public XmlDocument CrearDocumentoPTVL(string schemaLocation)
        {
            XmlReaderSettings settings = new XmlReaderSettings();
            settings.IgnoreComments = true;
            settings.ValidationType = ValidationType.Schema;
            settings.ValidationFlags |= XmlSchemaValidationFlags.ProcessInlineSchema;
            settings.ValidationFlags |= XmlSchemaValidationFlags.ProcessSchemaLocation;
            settings.ValidationFlags |= XmlSchemaValidationFlags.AllowXmlAttributes;
            settings.ValidationEventHandler += new ValidationEventHandler(ValidacionCallback);
            XmlReader reader = XmlReader.Create(Uri.UnescapeDataString(schemaLocation), settings);
            XmlSchema esquema = XmlSchema.Read(reader, new ValidationEventHandler(ValidacionCallback));
            
            XmlDocument ptvlDoc = new XmlDocument();
            ptvlDoc.Schemas.Add(esquema);
            XmlNode docNode = ptvlDoc.CreateXmlDeclaration("1.0", null, null);
            ptvlDoc.AppendChild(docNode);

            XmlElement ptvlElement = ptvlDoc.CreateElement("",PTVConstantes.PTVL_ELEMENT, esquema.TargetNamespace);
            XmlAttribute attrSchemaLoc = ptvlDoc.CreateAttribute("xsi", "schemaLocation", "http://www.w3.org/2001/XMLSchema-instance");
            attrSchemaLoc.Value = "http://www.xbrl.org/2003/ptv ptv-2003-12-31.xsd";
            ptvlElement.Attributes.Append(
                attrSchemaLoc
                );

            ptvlDoc.AppendChild(ptvlElement);
            XmlElement arc = null;
            foreach (string rolUri in RolesTaxonomia.Keys)
            {
                foreach (string rolLinkbase in RolesTaxonomia[rolUri].Linkbases.Keys)
                {

                    if (EtiquetasXBRLConstantes.ValidLinkBasesHref.Contains(rolLinkbase))
                    {
                        foreach (Arco arcoLinkbase in RolesTaxonomia[rolUri].Linkbases[rolLinkbase].ArcosFinales)
                        {
                            foreach(ElementoLocalizable elementoDesde in arcoLinkbase.ElementoDesde){
                                foreach(ElementoLocalizable elementoHacia in arcoLinkbase.ElementoHacia){
                                    arc = ptvlDoc.CreateElement("", PTVConstantes.ARC_ELEMENT, esquema.TargetNamespace);
                                    //linkType
                                    XmlAttribute attr = ptvlDoc.CreateAttribute(PTVConstantes.LINK_TYPE_ATTR);
                                    attr.Value = PTVConstantes.LINK_TYPE_VALUES[rolLinkbase];

                                    arc.Attributes.Append(attr);
                                    //ext role
                                    attr = ptvlDoc.CreateAttribute(PTVConstantes.EXT_ROLE_ATTR);
                                    attr.Value = rolUri;
                                    arc.Attributes.Append(attr);

                                    //labelLang
                                    if (elementoHacia.Destino is Etiqueta)
                                    {
                                        attr = ptvlDoc.CreateAttribute(PTVConstantes.LABEL_LANG_ATTR);
                                        attr.Value = ((Etiqueta)elementoHacia.Destino).Lenguaje;
                                        arc.Attributes.Append(attr);
                                    }

                                    //resRole
                                    if (elementoHacia.Destino is Recurso)
                                    {
                                        attr = ptvlDoc.CreateAttribute(PTVConstantes.RES_ROLE_ATTR);
                                        attr.Value = ((Recurso)elementoHacia.Destino).Rol;
                                        //Agregar el valor del recurso
                                        if (elementoHacia.Destino is Etiqueta)
                                        {
                                            arc.InnerText = ((Recurso)elementoHacia.Destino).Valor;
                                        }
                                        if (elementoHacia.Destino is Referencia)
                                        {
                                            foreach (ReferenciaParte parte in ((Referencia)elementoHacia.Destino).PartesReferencia)
                                            {
                                                XmlElement parteXML = ptvlDoc.CreateElement(parte.Prefijo, parte.NombreLocal, parte.EspacioNombres);
                                                parteXML.InnerText = parte.Valor;
                                                arc.AppendChild(parteXML);
                                            }
                                        }
                                        arc.Attributes.Append(attr);
                                    }
                                    

                                    //arcRole
                                    attr = ptvlDoc.CreateAttribute(PTVConstantes.ARC_ROLE_ATTR);
                                    attr.Value = arcoLinkbase.ArcoRol;
                                    arc.Attributes.Append(attr);

                                    //from path
                                    if(elementoDesde.Destino is Concept){
                                        attr = ptvlDoc.CreateAttribute(PTVConstantes.FROM_PATH_ATTR);
                                        attr.Value = elementoDesde.Destino.Elemento.QualifiedName.Namespace + "#" + elementoDesde.Destino.Id;
                                        arc.Attributes.Append(attr);
                                    }

                                    //to path
                                    if (elementoHacia.Destino is Concept)
                                    {
                                        attr = ptvlDoc.CreateAttribute(PTVConstantes.TO_PATH_ATTR);
                                        attr.Value = elementoHacia.Destino.Elemento.QualifiedName.Namespace + "#" + elementoHacia.Destino.Id;
                                        arc.Attributes.Append(attr);
                                    }
                                    //preferred Label
                                    if (arcoLinkbase is ArcoPresentacion)
                                    {   
                                        String etiquetaPreferida = ((ArcoPresentacion)arcoLinkbase).EtiquetaPreferida;
                                        if (!String.IsNullOrEmpty(etiquetaPreferida))
                                        {
                                            attr = ptvlDoc.CreateAttribute(PTVConstantes.PREFERRED_LABEL_ATTR);
                                            attr.Value = etiquetaPreferida;
                                            arc.Attributes.Append(attr);
                                        }
                                    }

                                    //order
                                    attr = ptvlDoc.CreateAttribute(PTVConstantes.ORDER_ATTR);
                                    attr.Value = arcoLinkbase.Orden.ToString();
                                    arc.Attributes.Append(attr);

                                    //weight
                                    if(arcoLinkbase is ArcoCalculo){
                                        attr = ptvlDoc.CreateAttribute(PTVConstantes.WEIGHT_ATTR);
                                        attr.Value = ((ArcoCalculo)arcoLinkbase).Peso.ToString();
                                        arc.Attributes.Append(attr);
                                    }

                                    ptvlElement.AppendChild(arc);
                                    
                                }
                            }
                        }
                    }
                }
            }

            return ptvlDoc;
        }

        /// <summary>
        /// Inspecciona la taxonomía en busca de los hipercubos declarados,
        /// Cada hipercubo se da de alta en la lista de hipercubos
        /// </summary>
        private void ListarHipercubos()
        {
            //Para cada hipercubo declarado en la taxonomía
            ListaHipercubos = new Dictionary<string, IList<Hipercubo>>();
            foreach (var rol in ConjuntoArbolesLinkbase)
            {
                foreach (var arbol in rol.Value.Where(x => x.Key.Equals(LinkbaseDefinicion.RolDefitionLinkbaseRef)))
                {
                    foreach (var nodo in arbol.Value.IndicePorId.Values)
                    {
                        foreach (var conector in nodo.ConectoresSalientes.Where(x => x.Arco != null &&
                            (x.Arco.ArcoRol.Equals(ArcoDefinicion.HasHypercubeAllRole) || x.Arco.ArcoRol.Equals(ArcoDefinicion.HasHypercubeNotAllRole))))
                        {
                            //agregar el hipercubo al listado
                            if (!ListaHipercubos.ContainsKey(rol.Key))
                            {
                                ListaHipercubos.Add(rol.Key, new List<Hipercubo>());
                            }
                            //Por cada cubo encontrado, crear su estructura 
                            ListaHipercubos[rol.Key].Add(new Hipercubo(nodo,conector,RolesTaxonomia[rol.Key],_listaDimensionDefault,this));
                        }
                    }
                }
            }
        }

        /// <summary>
        /// Implementación del Delegate para manejar los errores durante la carga del conjunto de esquemas que componen la taxonomía.
        /// </summary>
        /// <param name="sender">El objeto que originó la invocación.</param>
        /// <param name="args">Los argumentos del error que generó la invocación.</param>
        private void ValidacionCallback(object sender, ValidationEventArgs args)
        {
            bool atributoNoDeclarado = false;
            if (args.Exception != null)
            {
                SerializationInfo info = new SerializationInfo(args.Exception.GetType(), new FormatterConverter());
                args.Exception.GetObjectData(info, new StreamingContext(StreamingContextStates.CrossAppDomain));
                string res = info.GetString(ConstantesGenerales.PropiedadExcepcionRes);
                if (res.Equals(ConstantesGenerales.UndeclaredAttributeResourceKey))
                {
                    atributoNoDeclarado = true;
                }
            }
            if (atributoNoDeclarado && sender is XmlReader)
            {
                if (((XmlReader)sender).NodeType.Equals(XmlNodeType.Attribute))
                {
                    ManejadorErrores.ManejarError(CodigosErrorXBRL.SchemaError,args.Exception, args.Message, XmlSeverityType.Warning);
                }
            }
            else
            {
                if (ManejadorErrores != null)
                {
                    ManejadorErrores.ManejarError(CodigosErrorXBRL.SchemaError,args.Exception, args.Message, args.Severity);
                }
            }
        }


        public IDictionary<ConceptDimensionItem, ConceptItem> ObtenerDimensionesDefaultsGlobales()
        {
            return _listaDimensionDefault;
        }


        public string ObtenerPrefijoDeEspacioNombres(string nameSpace)
        {
            foreach (var esquema in ArchivosEsquema.Values.Where(x =>x.TargetNamespace!=null && x.TargetNamespace.Equals(nameSpace)))
            {
                foreach (var qName in esquema.Namespaces.ToArray())
                {
                    if(qName.Namespace.Equals(nameSpace))
                    {
                        return qName.Name;
                    }
                }
            }
            return String.Empty;
        }


        public XmlSchema ObtenerEsquemaPrincipal()
        {
            return _esquemaPrincipal;
        }
    }
}
