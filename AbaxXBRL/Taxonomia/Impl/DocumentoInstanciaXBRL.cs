using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Xml;
using System.Xml.Linq;
using System.Xml.Schema;
using AbaxXBRL.Constantes;
using AbaxXBRL.Taxonomia.Common;
using AbaxXBRL.Taxonomia.Dimensiones;
using AbaxXBRL.Taxonomia.Linkbases;
using AbaxXBRL.Taxonomia.Validador;
using AbaxXBRL.Taxonomia.Validador.Impl;
using AbaxXBRL.Util;
using System.Runtime.Serialization;
using System.Globalization;
using AbaxXBRL.Taxonomia.Cache;

namespace AbaxXBRL.Taxonomia.Impl
{
    /// <summary>
    /// Implementación de un Documento Instancia XBRL apegado a la especificación XBRL 2.1
    /// <author>José Antonio Huizar Moreno</author>
    /// <version>1.0</version>
    /// </summary>
    public class DocumentoInstanciaXBRL : IDocumentoInstanciaXBRL
    {

        /// <summary>
        /// El documento instancia representado en un objeto <code>XDocument</code>
        /// </summary>
        private XDocument _documento = null;
        /// <summary>
        /// Representación interna XML del documento de instancia 
        /// </summary>
        private XmlDocument _documentoXmlInterno = null;

        /// <summary>
        /// Diccionario el cual contiene los hechos reportados indexados por Id.
        /// </summary>
        public IDictionary<string, Fact> HechosPorId { get; set; }
        

        #region Miembros de IDocumentoInstanciaXBRL

        public string Id { get; set; }

        public IManejadorErroresXBRL ManejadorErrores { get; set; }

        /// <summary>
        /// Diccionario de hechos agrupados por el ID del concepto para el cuál está reportado
        /// </summary>
        public IDictionary<string, IList<Fact>> HechosPorIdConcepto { get; set; }

        /// <summary>
        /// DTS que es referenciada por el documento de instancia
        /// </summary>
        public ITaxonomiaXBRL Taxonomia { get; set; }
        /// <summary>
        /// Conjunto de unidades leídas del documento
        /// </summary>
        public Dictionary<string, Unit> Unidades { get; set; }
        /// <summary>
        /// Conjunto de contextos leídos del documento de instancia
        /// </summary>
        public Dictionary<string, Context> Contextos { get; set; }
        /// <summary>
        /// Conjunto de hechos leídos del documento de instancia
        /// </summary>
        public IList<Fact> Hechos { get; set; }
        /// <summary>
        /// Listado de conjuntos de contextos agrupados según su equivalencia, las sublistas
        /// de este atributo son conceptos que entre ellos mismos son C-Equal (contextos estructuralmente iguales)
        /// </summary>
        public IDictionary<string, IList<string>> GruposContextosEquivalentes { get; set; }
        /// <summary>
        /// Listado de roles definido o importado directamente en el documento de instancia
        /// </summary>
        public IDictionary<string, RoleType> RolesInstacia { get; set; }
        /// <summary>
        /// Listado de tipos de arcos roles definidos o importados directamente en el documento de instancia
        /// </summary>
        public IDictionary<string, ArcRoleType> ArcosRolesInstancia { get; set; }

        /// <summary>
        /// Contiene los archivos  que se importaron y procesaron desde el documento de instancia
        /// </summary>
        private IList<ArchivoImportadoDocumento> _archivosImportados = null;

        private bool _taxonomiaSoloLectura = false;
        /// <summary>
        /// Inventario de elementos hijos del elemento xbrl que guarda la posición en la que se encontró, comienza en 1
        /// Se creó para satisfacer las pruebas del conformance suite
        /// </summary>
        private IDictionary<Object,string> _posicionXptrElemento = new Dictionary<object, string>();

        /// <summary>
        /// Contiene la implementación de la estrategia a utilizar para resolver de algún mecanismo de caché una taxonomía
        /// </summary>
        public IEstrategiaCacheTaxonomia EstrategiaCacheTaxonomia { get; set; }

        /// <summary>
        /// Indica al procesador XBRL que utilice una URL HTTP en los dominios HTTPS 
        /// </summary>
        private bool _forzarEsquemaHttp;
        /// <summary>
        /// Obtiene la lista de esquemas directamente importados por el documento de instancia
        /// </summary>
        /// <returns></returns>
        public IList<ArchivoImportadoDocumento> ObtenerArchivosImportados()
        {
            return _archivosImportados;
        }
        /// <summary>
        /// Agrega un archivo importado a las declaraciones de referencias de esquema, rol, arco rol o linkbase
        /// </summary>
        public void AgregarArchivoImportado(ArchivoImportadoDocumento archivoImportado)
        {
                _archivosImportados.Add(archivoImportado);        
        }
        /// <summary>
        /// Carga un documento de instancia a partir de un flujo de bytes de entrada
        /// </summary>
        /// <param name="archivoEntrada"></param>
        public void Cargar(Stream archivoEntrada, bool ForzarEsquemaHttp = false)
        {
            XmlReader xmlReaderXml = null;
            XmlReader xmlReaderX = null;
            try
            {
                var settings = new XmlReaderSettings {IgnoreComments = true, ValidationType = ValidationType.Schema};
                settings.ValidationFlags |= XmlSchemaValidationFlags.ProcessInlineSchema;
                settings.ValidationFlags |= XmlSchemaValidationFlags.ProcessSchemaLocation;
                settings.ValidationEventHandler += new ValidationEventHandler(ValidacionCallback);
                var streamX = new MemoryStream();
                archivoEntrada.CopyTo(streamX);
                archivoEntrada.Position = 0;
                streamX.Position = 0;
               using(xmlReaderXml = XmlReader.Create(archivoEntrada, settings))
               {
                    using(xmlReaderX = XmlReader.Create(streamX, settings))
                    {
                        Cargar(xmlReaderXml, xmlReaderX,ForzarEsquemaHttp);
                    }   
               }
            }
           catch (XmlException e)
            {
                ManejadorErrores.ManejarError(e, "El archivo que contiene el documento instancia está mal formado: " + e.StackTrace, XmlSeverityType.Error);
            }
            catch (Exception e)
            {
                ManejadorErrores.ManejarError(e, "Ocurrió un error al cargar el archivo que contiene el documento instancia:" + e.StackTrace, XmlSeverityType.Error);
            }
            finally
            {
                if(xmlReaderXml != null)
                {
                    try
                    {
                        xmlReaderXml.Close();
                    }catch(Exception ex)
                    {
                    }
                }
                if (xmlReaderX != null)
                {
                    try
                    {
                        xmlReaderX.Close();
                    }
                    catch (Exception ex)
                    {
                    }
                }
            }

        
        }
        /// <summary>
        /// Realiza la lectura y procesamiento de los elementos del documento de instancia, también realiza algunas validaciones básicas de carga
        /// </summary>
        private void Cargar(XmlReader xmlReaderXml, XmlReader xmlReaderX, bool ForzarEsquemaHttp = false)
        {
            if (xmlReaderXml.Read())
            {
                Debug.WriteLine("AbaxXbrl ("+DateTime.Now.ToLocalTime()+"): Leyendo archivo: " + xmlReaderXml.BaseURI);
                String uriDocumento = xmlReaderXml.BaseURI;
                _documentoXmlInterno = new XmlDocument();
                _documentoXmlInterno.Load(xmlReaderXml);
                _documento = XDocument.Load(xmlReaderX);
                Debug.WriteLine("AbaxXbrl (" + DateTime.Now.ToLocalTime() + "): Archivo Cargado: " + xmlReaderXml.BaseURI);
                if(Taxonomia == null)
                {
                    Taxonomia = new TaxonomiaXBRL();
                    Taxonomia.ManejadorErrores = ManejadorErrores;
                }else
                {
                    //Taxonomía precargada
                    _taxonomiaSoloLectura = true;
                }

                var xbrliValido = false;

                Debug.WriteLine("AbaxXbrl (" + DateTime.Now.ToLocalTime() + "): Procesando Archivo: " + xmlReaderXml.BaseURI);

                foreach (XmlNode nodo in _documentoXmlInterno.ChildNodes)
                {
                    if (nodo.LocalName.Equals(EtiquetasXBRLConstantes.Xbrl))
                    {
                        xbrliValido = true;
                        if (nodo.Attributes[EtiquetasXBRLConstantes.IdAttribute] != null)
                        {
                            Id = nodo.Attributes[EtiquetasXBRLConstantes.IdAttribute].Value;
                        }

                        var notasAlPie = new List<XmlNode>();
                        var archivosImportados = new List<XmlNode>();
                        var unidades = new List<XmlNode>();
                        var contextos = new List<XmlNode>();
                        //Leer primero los archivos importados
                        foreach (XmlNode nodoXbrl in nodo.ChildNodes)
                        {
                            if (nodoXbrl.LocalName.Equals(EtiquetasXBRLConstantes.SchemaRef) || 
                                nodoXbrl.LocalName.Equals(EtiquetasXBRLConstantes.LinkbaseRef) || 
                                nodoXbrl.LocalName.Equals(EtiquetasXBRLConstantes.RoleRef) ||
                                nodoXbrl.LocalName.Equals(EtiquetasXBRLConstantes.ArcroleRef))
                            {
                                archivosImportados.Add(nodoXbrl);
                            } else
                            if (nodoXbrl.LocalName.Equals(EtiquetasXBRLConstantes.Unit))
                            {
                                unidades.Add(nodoXbrl);
                            } else
                            if (nodoXbrl.LocalName.Equals(EtiquetasXBRLConstantes.Context))
                            {
                                contextos.Add(nodoXbrl);
                            } else
                            if (nodoXbrl.LocalName.Equals(EtiquetasXBRLConstantes.FootnoteLink))
                            {
                                notasAlPie.Add(nodoXbrl);
                            }
                        }

                        //Si se dió de alta una estrategia para la resolución de taxonomías se intenta resolver con los archivos importados
                        if (!_taxonomiaSoloLectura)
                        {
                            var taxonomiaResuelta = ResolverTaxonomia(archivosImportados,uriDocumento);
                            if (taxonomiaResuelta != null)
                            {
                                _taxonomiaSoloLectura = true;
                                Taxonomia = taxonomiaResuelta;
                            }
                        }

                        foreach (XmlNode nodoXbrl in archivosImportados)
                        {
                            if (nodoXbrl.LocalName.Equals(EtiquetasXBRLConstantes.SchemaRef))
                            {
                                ProcesarDefinicionSchemaRef(nodoXbrl, uriDocumento,ForzarEsquemaHttp);
                            }
                            else if (nodoXbrl.LocalName.Equals(EtiquetasXBRLConstantes.LinkbaseRef))
                            {
                                if (!_taxonomiaSoloLectura)
                                {
                                    Taxonomia.ProcesarDefinicionDeLinkbaseRef(nodoXbrl, uriDocumento);
                                }
                                
                            }
                            else if (nodoXbrl.LocalName.Equals(EtiquetasXBRLConstantes.RoleRef) && !_taxonomiaSoloLectura) 
                            {
                               
                                RoleType rol = Taxonomia.ProcesarDefinicionRoleRef(nodoXbrl, uriDocumento);
                                if (rol != null)
                                {
                                    if (RolesInstacia.ContainsKey(rol.RolURI.ToString()))
                                    {
                                        ManejadorErrores.ManejarError(null,
                                        "4.4 Se encontró un elemento roleRef con valor del atributo roleURI que ya ha sido definido en este documento de instancia.  Nodo: "
                                        + nodoXbrl.OuterXml, XmlSeverityType.Error);

                                    }
                                    else
                                    {
                                        RolesInstacia.Add(rol.RolURI.ToString(), rol);
                                    }
                                }
                            }
                            else if (nodoXbrl.LocalName.Equals(EtiquetasXBRLConstantes.ArcroleRef) && !_taxonomiaSoloLectura)
                            {
                                ArcRoleType arcoRol = Taxonomia.ProcesarDefinicionArcoRoleRef(nodoXbrl, uriDocumento);
                                if (arcoRol != null)
                                {
                                    if (ArcosRolesInstancia.ContainsKey(arcoRol.ArcoRolURI.ToString()))
                                    {
                                        ManejadorErrores.ManejarError(null,
                                        "4.5 Se encontró un elemento arcroleRef con valor del atributo roleURI que ya ha sido definido en este documento de instancia.  Nodo: "
                                        + nodoXbrl.OuterXml, XmlSeverityType.Error);

                                    }
                                    else
                                    {
                                        ArcosRolesInstancia.Add(arcoRol.ArcoRolURI.ToString(), arcoRol);
                                    }
                                }
                            }
                        }

                        foreach (XmlNode nodoXbrl in unidades)
                        {
                            ProcesarDefinicionUnit(nodoXbrl);
                        }
                        foreach (XmlNode nodoXbrl in contextos)
                        {
                            ProcesarDefinicionContext(nodoXbrl);
                        }

                        if(!_taxonomiaSoloLectura)
                        {
                            IGrupoValidadoresTaxonomia grupoValidadores = new GrupoValidadoresTaxonomia();
                            IValidadorTaxonomia validador = new ValidadorTaxonomia();
                            grupoValidadores.ManejadorErrores = ManejadorErrores;
                            grupoValidadores.Taxonomia = Taxonomia;
                            grupoValidadores.AgregarValidador(validador);
                            validador = new ValidadorTaxonomiaDinemsional();
                            grupoValidadores.AgregarValidador(validador);
                            grupoValidadores.ValidarDocumento();
                        }

                        int xPos = 1;
                        foreach (XmlNode nodoXbrl in nodo.ChildNodes)
                        {
                            if (!nodoXbrl.LocalName.Equals(EtiquetasXBRLConstantes.SchemaRef) && !nodoXbrl.LocalName.Equals(EtiquetasXBRLConstantes.LinkbaseRef)
                                && !nodoXbrl.LocalName.Equals(EtiquetasXBRLConstantes.RoleRef) && !nodoXbrl.LocalName.Equals(EtiquetasXBRLConstantes.ArcroleRef)
                                && !nodoXbrl.LocalName.Equals(EtiquetasXBRLConstantes.Unit) && !nodoXbrl.LocalName.Equals(EtiquetasXBRLConstantes.Context)
                                && !nodoXbrl.LocalName.Equals(EtiquetasXBRLConstantes.FootnoteLink))
                            {
                                Fact fact = ProcesarDefinicionDeHecho(nodoXbrl,xPos);
                                if(fact!=null)
                                {
                                    _posicionXptrElemento.Add(fact, xPos.ToString());
                                }
                                
                            }
                            xPos++;
                        }

                        foreach (XmlNode nota in notasAlPie)
                        {
                            ProcesarDefinicionDeFootnoteLink(nota, uriDocumento);
                        }
                    }

                }
                Debug.WriteLine("AbaxXbrl (" + DateTime.Now.ToLocalTime() + "): Archivo Procesado: " + xmlReaderXml.BaseURI);

                if (!xbrliValido)
                {
                    ManejadorErrores.ManejarError(null,"El Documento de Instancia XBRL no contiene un elemento raíz del tipo <xbrl>: " + uriDocumento, XmlSeverityType.Error);
                }else
                {
                    Taxonomia.CrearArbolDeRelaciones();
                }
            }
        }
        /// <summary>
        /// Intenta resolver una taxnomía precargada utilizando un localizador de taxonomías en base a los archivos importados en un documento de instancia
        /// </summary>
        /// <param name="archivosImportados">Lista de nodos de archivos importados</param>
        /// <param name="uriReferencia">Uri del archivo que carga los archivos importados</param>
        /// <returns>Taxonomía resuelta, null en caso de no resolver ninguna taxonomía</returns>
        private ITaxonomiaXBRL ResolverTaxonomia(List<XmlNode> archivosImportados, string uriReferencia)
        {
            ITaxonomiaXBRL tax = null;
            if (EstrategiaCacheTaxonomia != null)
            {
                var archivosImportadosFinales = new List<ArchivoImportadoDocumento>();
                //parsear archivos importados
                foreach(var archivoImportadoXml in archivosImportados)
                {
                    var atributos = XmlUtil.ObtenerAtributosDeNodo(archivoImportadoXml);
                    if (!atributos.ContainsKey(EtiquetasXBRLConstantes.TypeAttribute) ||
                        !EtiquetasXBRLConstantes.SimpleType.Equals(atributos[EtiquetasXBRLConstantes.TypeAttribute]))
                    {
                        return null;
                    }

                    var href = atributos.ContainsKey(EtiquetasXBRLConstantes.HrefAttribute)?atributos[EtiquetasXBRLConstantes.HrefAttribute]:null;
                    var baseAttr = atributos.ContainsKey(EtiquetasXBRLConstantes.BaseAttribute) ? atributos[EtiquetasXBRLConstantes.BaseAttribute] : null;
                    var role = atributos.ContainsKey(EtiquetasXBRLConstantes.RoleAttribute) ? atributos[EtiquetasXBRLConstantes.RoleAttribute] : null;
                    var roleUri = atributos.ContainsKey(EtiquetasXBRLConstantes.RoleURIAttribute) ? atributos[EtiquetasXBRLConstantes.RoleURIAttribute] : null;

                    if (href == null)
                    {
                        return null;
                    }
                    if (baseAttr != null && baseAttr.Equals(string.Empty))
                    {
                        return null;
                    }
                    Uri uribase = null;
                    if (!String.IsNullOrEmpty(uriReferencia))
                    {
                        uribase = new Uri(uriReferencia);
                    }
                    if (baseAttr != null)
                    {
                        try
                        {
                            uribase = new Uri(baseAttr);
                        }
                        catch (UriFormatException e)
                        {
                            return null;
                        }
                    }
                    Uri uriSchema = null;
                    try
                    {
                        uriSchema = uribase != null ? new Uri(uribase, href) : new Uri(href);
                    }
                    catch (UriFormatException e)
                    {
                        return null;
                    }
                    int tipoArchivo = 0;
                    if (archivoImportadoXml.LocalName.Equals(EtiquetasXBRLConstantes.SchemaRef))
                    {
                        tipoArchivo = ArchivoImportadoDocumento.SCHEMA_REF;
                    }
                    if (archivoImportadoXml.LocalName.Equals(EtiquetasXBRLConstantes.LinkbaseRef))
                    {
                        tipoArchivo = ArchivoImportadoDocumento.LINKBASE_REF;
                    }
                    if (archivoImportadoXml.LocalName.Equals(EtiquetasXBRLConstantes.RoleRef))
                    {
                        tipoArchivo = ArchivoImportadoDocumento.ROLE_REF;
                    }
                    if (archivoImportadoXml.LocalName.Equals(EtiquetasXBRLConstantes.ArcroleRef))
                    {
                        tipoArchivo = ArchivoImportadoDocumento.ARC_ROLE_REF;
                    }
                    
                    archivosImportadosFinales.Add(new ArchivoImportadoDocumento(tipoArchivo, uriSchema.ToString(), href,role,roleUri));
                }

                tax = EstrategiaCacheTaxonomia.ResolverTaxonomiaXbrl(archivosImportadosFinales);

            }
            return tax;
        }

        /// <summary>
        /// Realiza la lectura y procesamiento de los elementos del documento de instancia, también realiza algunas validaciones básicas de carga
        /// </summary>
        /// <param name="uriDocumento"></param>
        public void Cargar(string uriDocumento, bool ForzarEsquemaHttp = false)
        {
            
            try
            {
                var settings = new XmlReaderSettings();
                settings.IgnoreComments = true;
                settings.ValidationType = ValidationType.Schema;
                settings.ValidationFlags |= XmlSchemaValidationFlags.ProcessInlineSchema;
                settings.ValidationFlags |= XmlSchemaValidationFlags.ProcessSchemaLocation;
                settings.ValidationEventHandler += new ValidationEventHandler(ValidacionCallback);
                using(XmlReader xmlReaderXml = XmlReader.Create(uriDocumento, settings)){
                    using (XmlReader xmlReaderX = XmlReader.Create(uriDocumento, settings))
                    {
                        Cargar(xmlReaderXml, xmlReaderX, ForzarEsquemaHttp);
		            }
                }
            }
            catch (UriFormatException e)
            {
                ManejadorErrores.ManejarError(e, "La ruta del archivo que contiene el documento instancia está mal formada: " + uriDocumento, XmlSeverityType.Error);
            }
            catch (FileNotFoundException e)
            {
                ManejadorErrores.ManejarError(e, "No se encontró el archivo que contiene el documento instancia: " + uriDocumento, XmlSeverityType.Error);
            }
            catch (XmlException e)
            {
                ManejadorErrores.ManejarError(e, "El archivo que contiene el documento instancia está mal formado: " + e.Message, XmlSeverityType.Error);
            }
            catch (Exception e)
            {
                ManejadorErrores.ManejarError(e, "Ocurrió un error al cargar el archivo que contiene el documento instancia: " + e.Message, XmlSeverityType.Error);
            }
        }

        #endregion

        /// <summary>
        /// Constructor por defecto de la clase.
        /// </summary>
        public DocumentoInstanciaXBRL()
        {
            Unidades = new Dictionary<string, Unit>();
            Contextos = new Dictionary<string, Context>();
            Hechos = new List<Fact>();
            RolesInstacia = new Dictionary<string,RoleType>();
            GruposContextosEquivalentes = new Dictionary<string, IList<string>>();
            //Manejador de errores predeterminado
            ManejadorErrores = new ManejadorErroresCargaTaxonomia();
            _archivosImportados = new List<ArchivoImportadoDocumento>();
            ArcosRolesInstancia = new Dictionary<string, ArcRoleType>();
            HechosPorIdConcepto = new Dictionary<string, IList<Fact>>();
            HechosPorId = new Dictionary<string, Fact>();
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
                var info = new SerializationInfo(args.Exception.GetType(), new FormatterConverter());
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
                    if (ManejadorErrores != null)
                    {
                        ManejadorErrores.ManejarError(args.Exception, args.Message, XmlSeverityType.Warning);
                    }
                }
            }
            else
            {
                if (ManejadorErrores != null)
                {
                    ManejadorErrores.ManejarError(args.Exception, args.Message, args.Severity);
                }
            }
        }

        /// <summary>
        /// Procesa la definición de un linkbase de notas al pie encontrado en un documento instancia.
        /// </summary>
        /// <param name="nodo">el nodo que contiene el elemento footnoteLink</param>
        /// <param name="uriDocumento">El URI donde se encuentra el documento que declara el footnoteLink</param>
        private void ProcesarDefinicionDeFootnoteLink(XmlNode nodo, string uriDocumento)
        {
            IDictionary<String, String> atributos = XmlUtil.ObtenerAtributosDeNodo(nodo);

            if (!atributos.ContainsKey(EtiquetasXBRLConstantes.TypeAttribute) || !EtiquetasXBRLConstantes.ExtendedAttribute.Equals(atributos[EtiquetasXBRLConstantes.TypeAttribute]))
            {
                ManejadorErrores.ManejarError(null, "3.5.3.2 Se encontró un elemento extendedLink con valor del atributo xlink:type inválido, se declaró: " +
                    (atributos.ContainsKey(EtiquetasXBRLConstantes.TypeAttribute) ?
                    atributos[EtiquetasXBRLConstantes.TypeAttribute] : "(no definido)") +
                    " y se esperaba la palabra 'extended' : node :" + nodo.OuterXml, XmlSeverityType.Error);
                return;
            }
            if (!atributos.ContainsKey(EtiquetasXBRLConstantes.RoleAttribute) || string.IsNullOrEmpty(atributos[EtiquetasXBRLConstantes.RoleAttribute]))
            {
                ManejadorErrores.ManejarError(null,
                    "3.5.3.3 Se encontró un elemento extendedLink con valor del atributo xlink:role sin definir.  Nodo: " + nodo.OuterXml, XmlSeverityType.Error);
                return;
            }
            else
            {
                Taxonomia.AgregarRolEstandar();
                if (!Taxonomia.RolesTaxonomia.Keys.Contains(atributos[EtiquetasXBRLConstantes.RoleAttribute]))
                {
                    ManejadorErrores.ManejarError(null,
                    "3.5.3.3 Se encontró un elemento extendedLink con valor del atributo xlink:role cuyo rol no ha sido declarado, rol: " + atributos[EtiquetasXBRLConstantes.RoleAttribute] + ".  Nodo: " + nodo.OuterXml, XmlSeverityType.Error);
                    return;
                }
            }

            IDictionary<string, IList<Fact>> hechosReferenciados = new Dictionary<string, IList<Fact>>();
            IDictionary<string, IList<NotaAlPie>> notasReferenciadas = new Dictionary<string, IList<NotaAlPie>>();
            IList<XmlNode> arcos = new List<XmlNode>();
            foreach (XmlNode nodeLink in nodo.ChildNodes)
            {
                if (nodeLink.LocalName.Equals(EtiquetasXBRLConstantes.LocatorElement))
                { 
                    string etiqueta = null;
                    Fact hecho = ProcesarLocalizador(nodeLink, uriDocumento, out etiqueta);
                    if (hecho != null)
                    {
                        if(!hechosReferenciados.Keys.Contains(etiqueta))
                        {
                            hechosReferenciados.Add(etiqueta, new List<Fact>());
                        }
                        hechosReferenciados[etiqueta].Add(hecho);
                    }
                }
                if (nodeLink.LocalName.Equals(EtiquetasXBRLConstantes.Footnote))
                {
                    NotaAlPie nota = ProcesarNotaAlPie(nodeLink);
                    if (nota != null)
                    {
                        if(!notasReferenciadas.Keys.Contains(nota.Etiqueta))
                        {
                            notasReferenciadas.Add(nota.Etiqueta, new List<NotaAlPie>());
                        }
                        notasReferenciadas[nota.Etiqueta].Add(nota);
                    }
                }
                if (nodeLink.LocalName.Equals(EtiquetasXBRLConstantes.FootnoteArc))
                {
                    arcos.Add(nodeLink);
                }
            }

            foreach(XmlNode arcoNota in arcos) 
            {
                ProcesarElementoArcoNota(arcoNota, hechosReferenciados, notasReferenciadas);
            }

        }

        /// <summary>
        /// Procesa y valida los atributos de un arco nota, valida las reglas específicas de un elemento footnoteArc
        /// </summary>
        /// <param name="arcoXml">Nodo de XML origen</param>
        /// <param name="hechosReferenciados">los hechos referenciados por medio de su etiqueta</param>
        /// <param name="notasReferenciadas">las notas referenciadas por medio de su etiqueta</param>
        private void ProcesarElementoArcoNota(XmlNode arcoXml, IDictionary<string, IList<Fact>> hechosReferenciados, IDictionary<string, IList<NotaAlPie>> notasReferenciadas)
        {
            IDictionary<string, string> atributos = XmlUtil.ObtenerAtributosDeNodo(arcoXml);
            
            //requeridos
            string tipo = atributos.ContainsKey(EtiquetasXBRLConstantes.TypeAttribute) ? atributos[EtiquetasXBRLConstantes.TypeAttribute] : null;
            string desde = atributos.ContainsKey(EtiquetasXBRLConstantes.FromAttribute) ? atributos[EtiquetasXBRLConstantes.FromAttribute] : null;
            string hacia = atributos.ContainsKey(EtiquetasXBRLConstantes.ToAttribute) ? atributos[EtiquetasXBRLConstantes.ToAttribute] : null;
            string arcoRol = atributos.ContainsKey(EtiquetasXBRLConstantes.ArcroleAttribute) ? atributos[EtiquetasXBRLConstantes.ArcroleAttribute] : null;
            //opcionales
            string titulo = atributos.ContainsKey(EtiquetasXBRLConstantes.TitleAttribute) ? atributos[EtiquetasXBRLConstantes.TitleAttribute] : null;
            string mostrar = atributos.ContainsKey(EtiquetasXBRLConstantes.ShowAttribute) ? atributos[EtiquetasXBRLConstantes.ShowAttribute] : null;
            string accionar = atributos.ContainsKey(EtiquetasXBRLConstantes.ActuateAttribute) ? atributos[EtiquetasXBRLConstantes.ActuateAttribute] : null;
            decimal orden = 1; //Valor predeterminado
            string uso = atributos.ContainsKey(EtiquetasXBRLConstantes.UseAttribute) ? atributos[EtiquetasXBRLConstantes.UseAttribute] : null;
            int prioridad = 0; //Valor predeterminado

            //Validar elementos requeridos
            if (tipo == null)
            {
                ManejadorErrores.ManejarError(null, "3.5.3.9.1 Se encontró un elemento arc con valor del atributo xlink:type vacío, el atributo xlink:type es requerido : Nodo: " + arcoXml.OuterXml, XmlSeverityType.Error);
                return;
            }
            if (arcoRol == null)
            {
                ManejadorErrores.ManejarError(null, "3.5.3.9.4 Se encontró un elemento arc con valor del atributo xlink:arcrole vacío, el atributo xlink:arcrole es requerido : Nodo: " + arcoXml.OuterXml, XmlSeverityType.Error);
                return;
            }

            //Validar tipo requerido de arco
            if (!Arco.ValorAtributoTipoArco.Equals(tipo))
            {
                ManejadorErrores.ManejarError(null, "3.5.3.9.1 Se encontró un elemento arc con valor del atributo xlink:type diferente de \"arc\": " + tipo + " Nodo: " + arcoXml.OuterXml, XmlSeverityType.Error);
                return;
            }

            //Validar los 2 lados del arco
            if (desde == null)
            {
                ManejadorErrores.ManejarError(null, "3.5.3.9.2 Se encontró un elemento arc con valor del atributo xlink:from vacío o no especificado : Nodo: " + arcoXml.OuterXml, XmlSeverityType.Error);
                return;
            }
            if (hacia == null)
            {
                ManejadorErrores.ManejarError(null, "3.5.3.9.3 Se encontró un elemento arc con valor del atributo xlink:to vacío o no especificado : Nodo: " + arcoXml.OuterXml, XmlSeverityType.Error);
                return;
            }

            //Validar que los nombres sean válidos
            if (!XmlUtil.EsNombreNCValido(desde))
            {
                ManejadorErrores.ManejarError(null, "3.5.3.9.2 Se encontró un elemento arc con valor del atributo xlink:from con un valor que no es válido conforme al estándar NCName de W3C:" + desde + "  : Nodo: " + arcoXml.OuterXml, XmlSeverityType.Warning);
            }
            if (!XmlUtil.EsNombreNCValido(hacia))
            {
                ManejadorErrores.ManejarError(null, "3.5.3.9.3 Se encontró un elemento arc con valor del atributo xlink:to con un valor que no es válido conforme al estándar NCName de W3C:" + hacia + "  : Nodo: " + arcoXml.OuterXml, XmlSeverityType.Warning);
            }

            if(!arcoRol.Equals(NotaAlPie.ArcoRolNota) && !Taxonomia.ArcoRolesTaxonomia.ContainsKey(arcoRol))
            {
                ManejadorErrores.ManejarError(null, "3.5.3.9.4 Se encontró un elemento arco con valor del atributo arcrole cuyo arco rol no existe: " + arcoRol + " : Nodo: " + arcoXml.OuterXml, XmlSeverityType.Error);
                return;
            }

            bool arcoRolPersonalizado = false;
            if (!arcoRol.Equals(NotaAlPie.ArcoRolNota) && Taxonomia.ArcoRolesTaxonomia.ContainsKey(arcoRol))
            {
                arcoRolPersonalizado = true;
            }

            //Validar que existan las etiquetas como localizador o recursos del linkbase
            if ((!arcoRolPersonalizado && !hechosReferenciados.ContainsKey(desde)) || (arcoRolPersonalizado && !notasReferenciadas.ContainsKey(desde) && !hechosReferenciados.ContainsKey(desde)))
            {
                ManejadorErrores.ManejarError(null, "3.5.3.9.2 Se encontró un elemento arc con valor del atributo xlink:from cuyo localizador o recurso no existe: " + desde + " : Nodo: " + arcoXml.OuterXml, XmlSeverityType.Error);
                return;
            }
            if (!notasReferenciadas.ContainsKey(hacia))
            {
                ManejadorErrores.ManejarError(null, "3.5.3.9.3 Se encontró un elemento arco con valor del atributo xlink:to cuyo localizador o recurso no existe: " + hacia + " : Nodo: " + arcoXml.OuterXml, XmlSeverityType.Error);
                return;
            }

            //Validar que order sea un valor decimal
            decimal valorDecimal = 0;
            if (atributos.ContainsKey(EtiquetasXBRLConstantes.OrderAttribute) && !String.IsNullOrEmpty(atributos[EtiquetasXBRLConstantes.OrderAttribute]))
            {
                if (Decimal.TryParse(atributos[EtiquetasXBRLConstantes.OrderAttribute],NumberStyles.Any,CultureInfo.InvariantCulture, out valorDecimal))
                {
                    orden = valorDecimal;
                }
                else
                {
                    ManejadorErrores.ManejarError(null, "3.5.3.9.5 Se encontró un elemento arco con valor del atributo xlink:order con un valor decimal no válido: " + atributos[EtiquetasXBRLConstantes.OrderAttribute] + ": Se asignará el valor predeterminado de 1 : Nodo: " + arcoXml.OuterXml, XmlSeverityType.Warning);
                }
            }
            //Validar el valor del uso
            if (uso != null)
            {
                if (!TiposUso.EsTipoUsoValido(uso))
                {
                    ManejadorErrores.ManejarError(null, "3.5.3.9.7.1 Se encontró un elemento arco con valor del atributo xlink:use con un valor no válido (optional o prohibited) : " + uso + " Se asignará el valor predeterminado de optional : Nodo: " + arcoXml.OuterXml, XmlSeverityType.Warning);
                    uso = TiposUso.Opcional.Valor;
                }
            }
            else
            {
                uso = TiposUso.Opcional.Valor;
            }
            
            //Validar el atributo de prioridad
            int valorInt = 0;
            if (atributos.ContainsKey(EtiquetasXBRLConstantes.PriorityAttribute) && !String.IsNullOrEmpty(atributos[EtiquetasXBRLConstantes.PriorityAttribute]))
            {
                if (Int32.TryParse(atributos[EtiquetasXBRLConstantes.PriorityAttribute], out valorInt))
                {
                    prioridad = valorInt;
                }
                else
                {
                    ManejadorErrores.ManejarError(null, "3.5.3.9.7.2 Se encontró un elemento arco con valor del atributo xlink:priority con un valor entero no válido: " + atributos[EtiquetasXBRLConstantes.PriorityAttribute] + ": Se asignará el valor predeterminado de 0 : Nodo: " + arcoXml.OuterXml, XmlSeverityType.Warning);
                }
            }

            if (!arcoRolPersonalizado || (arcoRolPersonalizado && hechosReferenciados.ContainsKey(desde)))
            {
                foreach (Fact hecho in hechosReferenciados[desde])
                {
                    if (hecho.NotasAlPie == null)
                    {
                        hecho.NotasAlPie = new List<NotaAlPie>();
                    }

                    foreach (NotaAlPie nota in notasReferenciadas[hacia])
                    {
                        if (!hecho.NotasAlPie.Contains(nota))
                        {
                            hecho.NotasAlPie.Add(nota);
                        }
                    }
                }
            }
            else if (arcoRolPersonalizado && notasReferenciadas.ContainsKey(desde))
            {
                foreach (NotaAlPie nota in notasReferenciadas[desde])
                {
                    if (nota.Notas == null)
                    {
                        nota.Notas = new List<NotaAlPie>();
                    }

                    foreach (NotaAlPie notaAlPie in notasReferenciadas[hacia])
                    {
                        if (!nota.Notas.Contains(nota))
                        {
                            nota.Notas.Add(notaAlPie);
                        }
                    }
                }
            }
        }

        /// <summary>
        /// Procesa un recurso de tipo nota al pie de página. Este tipo de recurso es el único que puede definirse dentro de un linkbase de notas al pie de página.
        /// </summary>
        /// <param name="node">Nodo XML con la definición de la nota</param>
        /// <returns>El objeto <code>NotaAlPie</code> que representa la nota procesada. <code>null</code> en caso que exista un error al procesar la nota.</returns>
        private NotaAlPie ProcesarNotaAlPie(XmlNode node)
        {
            IDictionary<string, string> atributos = XmlUtil.ObtenerAtributosDeNodo(node);
            if (!atributos.ContainsKey(EtiquetasXBRLConstantes.TypeAttribute) || !Recurso.TipoRecurso.Equals(atributos[EtiquetasXBRLConstantes.TypeAttribute]))
            {
                ManejadorErrores.ManejarError(null, "3.5.3.8.1  Se encontró un recurso con valor del atributo xlink:type diferente de :" + Recurso.TipoRecurso + ": Nodo: " + node.OuterXml, XmlSeverityType.Error);
                return null;
            }
            if (!atributos.ContainsKey(EtiquetasXBRLConstantes.LabelAttribute) || String.IsNullOrEmpty(atributos[EtiquetasXBRLConstantes.LabelAttribute]))
            {
                ManejadorErrores.ManejarError(null, "3.5.3.8.2  Se encontró un recurso con valor del atributo xlink:label vacío : Nodo: " + node.OuterXml, XmlSeverityType.Error);
                return null;
            }
            if (!atributos.ContainsKey(EtiquetasXBRLConstantes.XmlLangAttribute) || String.IsNullOrEmpty(atributos[EtiquetasXBRLConstantes.XmlLangAttribute]))
            {
                ManejadorErrores.ManejarError(null, "4.11.1.2.1 Se encontró un elemento footnote con valor del atributo xml:lang vacío : Nodo: " + node.OuterXml, XmlSeverityType.Error);
                return null;
            }

            NotaAlPie nota = new NotaAlPie();

            nota.Tipo = atributos[EtiquetasXBRLConstantes.TypeAttribute];
            nota.Etiqueta = atributos[EtiquetasXBRLConstantes.LabelAttribute];
            nota.Rol = atributos.ContainsKey(EtiquetasXBRLConstantes.RoleAttribute) ? atributos[EtiquetasXBRLConstantes.RoleAttribute] : null;
            nota.Titulo = atributos.ContainsKey(EtiquetasXBRLConstantes.TitleAttribute) ? atributos[EtiquetasXBRLConstantes.TitleAttribute] : null;
            nota.Id = atributos.ContainsKey(EtiquetasXBRLConstantes.IdAttribute) ? atributos[EtiquetasXBRLConstantes.IdAttribute] : null;
            nota.Valor = node.InnerXml.ToString();
            nota.Idioma = atributos.ContainsKey(EtiquetasXBRLConstantes.XmlLangAttribute) ? atributos[EtiquetasXBRLConstantes.XmlLangAttribute] : null;

            if (nota.Id != null)
            {
                //Validar la integridad del ID opcional
                if (!XmlUtil.EsNombreIDValido(nota.Id))
                {
                    ManejadorErrores.ManejarError(null, "3.5.3.8.4  Se encontró un recurso con valor del atributo id no válido de acuerdo a " +
                    "http://www.w3.org/TR/REC-xml#NT-TokenizedType  : " + nota.Id + " :Nodo: " + node.OuterXml, XmlSeverityType.Warning);
                }
            }

            return nota;
        }

        /// <summary>
        /// Procesa la definición de un localizador.
        /// Se debe validar que el attributo type sea "locator"
        /// Se debe validar que label no sea vacío
        /// </summary>
        /// <param name="nodoLocalizador">El nodo que contiene la definición del localizador</param>
        /// <param name="uriDocumento">El URI del documento donde se declaró el localizador</param>
        /// <param name="etiqueta">Parámetro de salida para indicar la etiqueta que se especificó para este locator</param>
        /// <returns>El hecho al que apunta el localizador, null en caso de algún error</returns>
        private Fact ProcesarLocalizador(XmlNode nodoLocalizador, string uriDocumento, out string etiqueta)
        {
            string typeAttr = null;
            string labelAttr = null;
            string hrefAttr = null;
            etiqueta = null;

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
                ApuntadorElementoXBRL ptr = new ApuntadorElementoXBRL(hrefAttr);
                Uri uriEsquemaElemento = null;
                if (ptr.UbicacionArchivo == null || ptr.UbicacionArchivo.Equals(string.Empty))
                {
                    if(!String.IsNullOrEmpty(uriDocumento))
                    {
                        uriEsquemaElemento = new Uri(uriDocumento);
                    }
                }
                else
                {
                    uriEsquemaElemento = new Uri(new Uri(uriDocumento), ptr.UbicacionArchivo);
                }
                if (string.IsNullOrEmpty(hrefAttr))
                {
                    ManejadorErrores.ManejarError(null, "3.5.3.7.2 Se encontró un elemento loc con valor del atributo xlink:href vacío: Nodo: " + nodoLocalizador.OuterXml, XmlSeverityType.Error);
                    return null;
                }
                if (!string.IsNullOrEmpty(hrefAttr) && uriEsquemaElemento!=null && !String.IsNullOrEmpty(uriDocumento) && !uriEsquemaElemento.Equals(new Uri(uriDocumento)))
                {
                    ManejadorErrores.ManejarError(null, "4.11.1.1 Se encontró un elemento loc con valor del atributo xlink:href que hace referencia a otro documento el cual no es el documento de instancia. Nodo: " + nodoLocalizador.OuterXml, XmlSeverityType.Error);
                    return null;
                }

                Fact hecho = null;
                if (!string.IsNullOrEmpty(hrefAttr))
                {
                    hecho = ProcesarElementXPointer(ptr);
                    if (hecho == null)
                    {
                        ManejadorErrores.ManejarError(null, "4.11.1.1 No existe el elemento apuntado por el localizador  href: " + hrefAttr + " : Nodo: " + nodoLocalizador.OuterXml, XmlSeverityType.Error);
                        return null;
                    }
                    etiqueta = labelAttr;
                }
                
                return hecho;
            }
            catch (Exception ex)
            {
                ManejadorErrores.ManejarError(ex, "4.11.1.1 Ocurrió un error en el procesamiento de localizador. Nodo: " + nodoLocalizador.OuterXml, XmlSeverityType.Error);
                return null;
            }

        }

        /// <summary>
        /// Resuelve el elemento al que apunta una expresión XPointer
        /// </summary>
        /// <param name="apuntador">el apuntador a procesar</param>
        /// <returns>el objeto <code>Fact</code> que corresponde al elemento resuelto. <code>null</code> en cualquier otro caso</returns>
        private Fact ProcesarElementXPointer(ApuntadorElementoXBRL apuntador)
        {
            Fact hecho = null;
            string xpointer = apuntador.Identificador;
            if (string.IsNullOrWhiteSpace(xpointer))
            {
                return null;
            }
            if (xpointer.StartsWith(ApuntadorElementoXBRL.ElementNotationStart) && xpointer.EndsWith(ApuntadorElementoXBRL.ElementNotationEnd))
            {
                string[] expressions = xpointer.Split(ApuntadorElementoXBRL.ElementNotationEnd.ToCharArray());
                foreach (string expression in expressions)
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
                                    nodo = _documento.Root;
                                    primerElemento = false;
                                }
                                else if (!string.IsNullOrWhiteSpace(seq))
                                {
                                    nodo = _documento.Descendants().SingleOrDefault(e => e.Attribute("id").Value == seq);
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
                            if (HechosPorId.Keys.Contains(apuntador.Identificador))
                            {
                                hecho = HechosPorId[apuntador.Identificador];
                            }
                        }
                    }
                    else if (HechosPorId.Keys.Contains(xpointer))
                    {
                        hecho = HechosPorId[xpointer];
                    }
                }
            }
            else
            {
                if (HechosPorId.Keys.Contains(xpointer))
                {
                    hecho = HechosPorId[xpointer];
                }
            }
            return hecho;
        }

        /// <summary>
        /// Valida y en caso de ser necesario procesa una definición de un hecho simple o compuesto que corresponde a un concepto de la taxonomía.
        /// </summary>
        /// <param name="nodo">El nodo XML que contiene la definición del elemento</param>
        /// <returns>Un objeto <code>Fact</code> que representa el hecho procesado. <code>null</code> en caso de que no se haya podido procesar el hacho.</returns>
        private Fact ProcesarDefinicionDeHecho(XmlNode nodo,int pos = 1)
        {
            Fact fact = null;
            Concept c = null;
            var qName = new XmlQualifiedName(nodo.LocalName, nodo.NamespaceURI);
            if (Taxonomia.ElementosTaxonomiaPorName.ContainsKey(qName))
            {
                c = Taxonomia.ElementosTaxonomiaPorName[qName];
                if (c.Tipo == Concept.Item)
                {
                    fact = ProcesarDefinicionDeHechoItem(nodo, (ConceptItem)c);
                }
                else
                {
                    fact = ProcesarDefinicionDeHechoTuple(nodo, (ConceptTuple)c,pos);
                }
            }
            else
            {
                ManejadorErrores.ManejarError(null, "4.6 Se encontró un elemento en el documento instancia que no corresponde a un concepto item o tuple de la taxonomía. Nodo: " + nodo.OuterXml, XmlSeverityType.Error);
            }
            if (fact != null)
            {
                Hechos.Add(fact);
                if(!String.IsNullOrEmpty(fact.Id))
                {
                    HechosPorId.Add(fact.Id, fact);
                }
                if (!HechosPorIdConcepto.ContainsKey(c.Id))
                {
                    HechosPorIdConcepto.Add(c.Id, new List<Fact>());
                }
                HechosPorIdConcepto[c.Id].Add(fact);
            }
            
            return fact;
        }

        /// <summary>
        /// Valida y en caso de ser necesario procesa una definición de un hecho simple que corresponde a un concepto de la taxonomía con grupo de sustitución item.
        /// </summary>
        /// <param name="nodo">El nodo XML que contiene la definición del elemento</param>
        /// <param name="concept">El concepto que contiene la definición del hecho reportado</param>
        /// <returns>Un objeto <code>FactItem</code> que representa el hecho procesado. <code>null</code> en caso de que no se haya podido procesar el hacho.</returns>
        private FactItem ProcesarDefinicionDeHechoItem(XmlNode nodo, ConceptItem concept)
        {
            FactItem item = null;

            string id = null;
            string contexto = null;
            string unidad = null;
            string precision = null;
            string decimals = null;
            bool tieneValorNil = false;
            Context context = null;

            if (string.IsNullOrWhiteSpace(id))
            {
                id = concept.Id +"_"+ Guid.NewGuid().ToString();  
            }

            foreach (XmlAttribute a in nodo.Attributes)
            {
                if (a.LocalName.Equals(EtiquetasXBRLConstantes.IdAttribute))
                {
                    id = a.Value;
                }
                if (a.LocalName.Equals(EtiquetasXBRLConstantes.ContextRefAttribute))
                {
                    contexto = a.Value;
                }
                if (a.LocalName.Equals(EtiquetasXBRLConstantes.UnitRefAttribute))
                {
                    unidad = a.Value;
                }
                if (a.LocalName.Equals(EtiquetasXBRLConstantes.PrecisionAttribute))
                {
                    precision = a.Value;
                }
                if (a.LocalName.Equals(EtiquetasXBRLConstantes.DecimalsAttribute))
                {
                    decimals = a.Value;
                }
                if (a.LocalName.Equals(EtiquetasXBRLConstantes.NilAttribute))
                {
                    if (a.Value.Equals(EtiquetasXBRLConstantes.NilValue, StringComparison.InvariantCultureIgnoreCase))
                    {
                        tieneValorNil = true;
                    }
                }
            }

            if (contexto == null)
            {
                ManejadorErrores.ManejarError(null, "4.6.1 Se encontró un elemento en el documento instancia que no define una referencia al contexto en que es reportado. Nodo: " + nodo.OuterXml, XmlSeverityType.Error);
            }
            else
            {
                if (Contextos.ContainsKey(contexto))
                {
                    context = Contextos[contexto];

                    if (!concept.EsTipoDatoNumerico)
                    {
                        if (unidad != null)
                        {
                            ManejadorErrores.ManejarError(null, "4.6.2 Se encontró un elemento en el documento instancia que define una referencia a una unidad, sin embargo, el tipo de dato del hecho es no numérico. Nodo: " + nodo.OuterXml, XmlSeverityType.Error);
                        }
                        else if (precision != null)
                        {
                            ManejadorErrores.ManejarError(null, "4.6.3 Se encontró un elemento en el documento instancia que define el atributo precision, sin embargo, el tipo de dato del hecho es no numérico. Nodo: " + nodo.OuterXml, XmlSeverityType.Error);
                        }
                        else if (decimals != null)
                        {
                            ManejadorErrores.ManejarError(null, "4.6.3 Se encontró un elemento en el documento instancia que define el atributo decimals, sin embargo, el tipo de dato del hecho es no numérico. Nodo: " + nodo.OuterXml, XmlSeverityType.Error);
                        }
                        else
                        {
                            item = new FactItem(nodo);
                            item.Id = id;
                            item.Concepto = concept;
                            item.Valor = nodo.InnerText;
                            item.Contexto = Contextos[contexto];
                        }
                    }
                    else
                    {
                        if (unidad != null)
                        {
                            if (Unidades.ContainsKey(unidad))
                            {
                                Unit unit = Unidades[unidad];

                                if (concept.EsTipoDatoFraccion)
                                {
                                    if (precision != null)
                                    {
                                        ManejadorErrores.ManejarError(null, "4.6.3 Se encontró un elemento en el documento instancia que define el atributo precision, sin embargo, el tipo de dato del hecho es o deriva de fractionItemType. Nodo: " + nodo.OuterXml, XmlSeverityType.Error);
                                    }
                                    else if (decimals != null)
                                    {
                                        ManejadorErrores.ManejarError(null, "4.6.3 Se encontró un elemento en el documento instancia que define el atributo decimals, sin embargo, el tipo de dato del hecho es o deriva de fractionItemType. Nodo: " + nodo.OuterXml, XmlSeverityType.Error);
                                    }
                                    else if (nodo.HasChildNodes)
                                    {
                                        string numerador = null;
                                        string denominador = null;
                                        foreach (XmlNode nodoFraccion in nodo.ChildNodes)
                                        {
                                            if (nodoFraccion.Name.Equals(EtiquetasXBRLConstantes.Numerator))
                                            {
                                                numerador = nodoFraccion.InnerText;
                                            }
                                            if (nodoFraccion.Name.Equals(EtiquetasXBRLConstantes.Denominator))
                                            {
                                                denominador = nodoFraccion.InnerText;
                                            }
                                        }
                                        if (numerador == null)
                                        {
                                            ManejadorErrores.ManejarError(null, "5.1.1.3.2 Se encontró un elemento en el documento instancia que cuyo tipo de dato es o deriva de fractionItemType pero no define numerador. Nodo: " + nodo.OuterXml, XmlSeverityType.Error);
                                        }
                                        else if (denominador == null)
                                        {
                                            ManejadorErrores.ManejarError(null, "5.1.1.3.2 Se encontró un elemento en el documento instancia que cuyo tipo de dato es o deriva de fractionItemType pero no define denominador. Nodo: " + nodo.OuterXml, XmlSeverityType.Error);
                                        }
                                        else
                                        {
                                            decimal denominadorNumerico = 0;
                                            decimal numeradorNumerico = 0;

                                            try
                                            {
                                                denominadorNumerico = new decimal(Double.Parse(denominador, NumberStyles.Any, CultureInfo.InvariantCulture));
                                            }
                                            catch (Exception e)
                                            {
                                                ManejadorErrores.ManejarError(e, "5.1.1.3.2 Se encontró un elemento en el documento instancia que cuyo tipo de dato es o deriva de fractionItemType con un valor de denominador no válido. Nodo: " + nodo.OuterXml, XmlSeverityType.Error);
                                            }

                                            try
                                            {
                                                numeradorNumerico = new decimal(Double.Parse(numerador, NumberStyles.Any, CultureInfo.InvariantCulture));
                                            }
                                            catch (Exception e)
                                            {
                                                ManejadorErrores.ManejarError(e, "5.1.1.3.2 Se encontró un elemento en el documento instancia que cuyo tipo de dato es o deriva de fractionItemType con un valor de numerador no válido. Nodo: " + nodo.OuterXml, XmlSeverityType.Error);
                                            }

                                            if (denominadorNumerico == 0)
                                            {
                                                ManejadorErrores.ManejarError(null, "5.1.1.3.2 Se encontró un elemento en el documento instancia que cuyo tipo de dato es o deriva de fractionItemType con un valor de denominador igual a 0. Nodo: " + nodo.OuterXml, XmlSeverityType.Error);
                                            }
                                            else
                                            {

                                                FactFractionItem fractionItem = new FactFractionItem(nodo);
                                                fractionItem.Contexto = context;
                                                fractionItem.Numerador = numeradorNumerico;
                                                fractionItem.Denominador = denominadorNumerico;
                                                fractionItem.Id = id;
                                                fractionItem.Concepto = concept;
                                                fractionItem.Unidad = unit;
                                                fractionItem.Valor = nodo.InnerText;

                                                item = fractionItem;
                                            }
                                        }
                                    }
                                    else
                                    {
                                        ManejadorErrores.ManejarError(null, "5.1.1.3.2 Se encontró un elemento en el documento instancia que cuyo tipo de dato es o deriva de fractionItemType pero no define numerador ni denominador. Nodo: " + nodo.OuterXml, XmlSeverityType.Error);
                                    }
                                }
                                else if (tieneValorNil)
                                {
                                    if (precision != null)
                                    {
                                        ManejadorErrores.ManejarError(null, "4.6.3 Se encontró un elemento en el documento instancia que define el atributo precision, sin embargo, el valor del hecho es nil. Nodo: " + nodo.OuterXml, XmlSeverityType.Error);
                                    }
                                    else if (decimals != null)
                                    {
                                        ManejadorErrores.ManejarError(null, "4.6.3 Se encontró un elemento en el documento instancia que define el atributo decimals, sin embargo, el valor del hecho es nil. Nodo: " + nodo.OuterXml, XmlSeverityType.Error);
                                    }
                                    else
                                    {

                                        var numericItem = new FactNumericItem(nodo);
                                        numericItem.Contexto = context;
                                        numericItem.Id = id;
                                        numericItem.Concepto = concept;
                                        numericItem.Unidad = unit;
                                        numericItem.Valor = nodo.InnerText;
                                        numericItem.IsNilValue = true;
                                        if (!String.IsNullOrEmpty(decimals))
                                        {
                                            numericItem.AsignarDecimales(decimals);
                                        }
                                        if (!String.IsNullOrEmpty(precision))
                                        {
                                            numericItem.AsignarPrecision(precision);
                                        }
                                        
                                        item = numericItem;
                                    }
                                }
                                else
                                {
                                    if (decimals != null && precision != null)
                                    {
                                        ManejadorErrores.ManejarError(null, "4.6.3 Se encontró un elemento en el documento instancia de tipo de dato numérico el cual define el atributo decimals y el atributo precision de manera simultanea. Nodo: " + nodo.OuterXml, XmlSeverityType.Error);
                                    }
                                    else if (decimals == null && precision == null)
                                    {
                                        ManejadorErrores.ManejarError(null, "4.6.3 Se encontró un elemento en el documento instancia de tipo de dato numérico el cual no define ni el atributo decimals ni el atributo precision. Nodo: " + nodo.OuterXml, XmlSeverityType.Error);
                                    }
                                    else
                                    {
                                        var numericItem = new FactNumericItem(nodo);
                                        numericItem.Contexto = context;
                                        numericItem.Valor = nodo.InnerText;
                                        numericItem.Id = id;
                                        numericItem.Concepto = concept;
                                        numericItem.Unidad = unit;
                                        if (!String.IsNullOrEmpty(decimals))
                                        {
                                            numericItem.AsignarDecimales(decimals);
                                        }
                                        if (!String.IsNullOrEmpty(precision))
                                        {
                                            numericItem.AsignarPrecision(precision);
                                        }
                                        
                                        try
                                        {
                                            numericItem.ValorNumerico = (decimal)Double.Parse(numericItem.Valor, NumberStyles.Any, CultureInfo.InvariantCulture);
                                        }
                                        catch (Exception e)
                                        {
                                            ManejadorErrores.ManejarError(e, "4.6 Se encontró un elemento en el documento instancia de tipo de dato numérico el cual no tiene un número válido. Nodo: " + nodo.OuterXml, XmlSeverityType.Warning);
                                        }
                                        
                                        item = numericItem;
                                        
                                    }
                                }
                            }
                            else
                            {
                                ManejadorErrores.ManejarError(null, "4.6.2 Se encontró un elemento en el documento instancia que define una referencia a una uniadad que no existe, unidad: " + unidad + ". Nodo: " + nodo.OuterXml, XmlSeverityType.Error);
                            }

                        }
                        else
                        {
                            ManejadorErrores.ManejarError(null, "4.6.2 Se encontró un elemento en el documento instancia de tipo de dato numérico el cual no define una referencia a una unidad. Nodo: " + nodo.OuterXml, XmlSeverityType.Error);
                        }

                    }
                }
                else
                {
                    ManejadorErrores.ManejarError(null, "4.6.1 Se encontró un elemento en el documento instancia que define una referencia a un contexto no existe, contexto: " + contexto + ". Nodo: " + nodo.OuterXml, XmlSeverityType.Error);
                }
            }

           

            return item;
        }


        
        

        /// <summary>
        /// Valida y en caso de ser necesario procesa una definición de un hecho compuesto que corresponde a un concepto de la taxonomía con grupo de sustitución tuple.
        /// </summary>
        /// <param name="concept">El concepto que tiene la definición del hecho reportado</param>
        /// <param name="nodo">El nodo XML que contiene la definición del elemento</param>
        /// <returns>Un objeto <code>FactTuple</code> que representa el hecho procesado. <code>null</code> en caso de que no se haya podido procesar el hacho.</returns>
        private FactTuple ProcesarDefinicionDeHechoTuple(XmlNode nodo, ConceptTuple concept,int pos = 0)
        {
            FactTuple tuple = null;

            string id = null;
            string contexto = null;
            string unidad = null;
            string precision = null;
            string decimals = null;
            bool tieneValorNil = false;
            Context context = null;

            if (string.IsNullOrWhiteSpace(id))
            {
                id = "T" + Guid.NewGuid().ToString();
            }

            foreach (XmlAttribute a in nodo.Attributes)
            {
                if (a.LocalName.Equals(EtiquetasXBRLConstantes.IdAttribute))
                {
                    id = a.Value;
                }
                else if (a.LocalName.Equals(EtiquetasXBRLConstantes.ContextRefAttribute))
                {
                    contexto = a.Value;
                }
                else if (a.LocalName.Equals(EtiquetasXBRLConstantes.UnitRefAttribute))
                {
                    unidad = a.Value;
                }
                else if (a.LocalName.Equals(EtiquetasXBRLConstantes.PrecisionAttribute))
                {
                    precision = a.Value;
                }
                else if (a.LocalName.Equals(EtiquetasXBRLConstantes.DecimalsAttribute))
                {
                    decimals = a.Value;
                }
                else if (a.LocalName.Equals(EtiquetasXBRLConstantes.NilAttribute))
                {
                    if (a.Value.Equals(EtiquetasXBRLConstantes.NilValue, StringComparison.InvariantCultureIgnoreCase))
                    {
                        tieneValorNil = true;
                    }
                }
                else if (a.NamespaceURI.Equals(EspacioNombresConstantes.InstanceNamespace) || a.NamespaceURI.Equals(EspacioNombresConstantes.LinkNamespace)
                    || a.NamespaceURI.Equals(EspacioNombresConstantes.XLinkNamespace) || a.NamespaceURI.Equals(EspacioNombresConstantes.XbrlXLinkNamespace))
                {
                    ManejadorErrores.ManejarError(null, "4.9 Se encontró un hecho en el documento instancia con grupo de sustitución tuple que tiene atributos en espacio de nombres ed XBRL. Nodo: " + nodo.OuterXml, XmlSeverityType.Error);
                }
            }

            if (unidad != null)
            {
                ManejadorErrores.ManejarError(null, "4.6.2 Se encontró un elemento en el documento instancia que define una referencia a una unidad, sin embargo, el grupo de sustitución del hecho es tuple. Nodo: " + nodo.OuterXml, XmlSeverityType.Error);
            }
            else if (precision != null)
            {
                ManejadorErrores.ManejarError(null, "4.6.3 Se encontró un elemento en el documento instancia que define el atributo precision, sin embargo, el grupo de sustitución del hecho es tuple. Nodo: " + nodo.OuterXml, XmlSeverityType.Error);
            }
            else if (decimals != null)
            {
                ManejadorErrores.ManejarError(null, "4.6.3 Se encontró un elemento en el documento instancia que define el atributo decimals, sin embargo, el grupo de sustitución del hecho es tuple. Nodo: " + nodo.OuterXml, XmlSeverityType.Error);
            }
            else if (context != null)
            {
                ManejadorErrores.ManejarError(null, "4.6.3 Se encontró un elemento en el documento instancia que define el atributo contextRef, sin embargo, el grupo de sustitución del hecho es tuple. Nodo: " + nodo.OuterXml, XmlSeverityType.Error);
            }
            else
            {
                tuple = new FactTuple(nodo);
                tuple.Id = id;
                tuple.Concepto = concept;
                if (nodo.HasChildNodes && !tieneValorNil)
                {
                    int iHijo = 1;
                    foreach (XmlNode nodoTupla in nodo.ChildNodes)
                    {
                        Fact fact = ProcesarDefinicionDeHecho(nodoTupla,iHijo);
                        _posicionXptrElemento.Add(fact,pos.ToString()+"/"+iHijo++);
                        if (fact != null)
                        {
                            fact.TuplaPadre = tuple;
                            tuple.Hechos.Add(fact);
                        }
                    }
                }
            }
            
            return tuple;
        }

        /// <summary>
        /// Valida y en caso de ser necesario procesa una definición de un elemento <code>&lt;context&gt;</code> encontrado en un documento instancia XBRL.
        /// </summary>
        /// <param name="nodo">El nodo XML que contiene la definición del elemento</param>
        private void ProcesarDefinicionContext(XmlNode nodo)
        {
            Context contexto = new Context();

            string id = null;

            foreach (XmlAttribute attribute in nodo.Attributes)
            {
                if (attribute.LocalName.Equals(EtiquetasXBRLConstantes.IdAttribute))
                {
                    id = attribute.Value;
                }
            }
            
            if (id == null || id.Equals(string.Empty))
            {
                ManejadorErrores.ManejarError(null, "4.7.1 Se encontró un elemento context en el documento instancia sin identificador. Nodo: " + nodo.OuterXml, XmlSeverityType.Error);
                return;
            }

            contexto.Id = id;

            foreach (XmlNode child in nodo.ChildNodes)
            {
                if (child.LocalName.Equals(EtiquetasXBRLConstantes.Scenario))
                {
                    if (child.ChildNodes.Count == 0)
                    {
                        ManejadorErrores.ManejarError(null, "4.7.4 Se encontró un elemento scenario de un contexto, vacío. Nodo: " + child.OuterXml, XmlSeverityType.Error);
                        return;
                    }
                    contexto.Escenario = new Scenario(child,this);
                    
                }
                if (child.LocalName.Equals(EtiquetasXBRLConstantes.Entity))
                {
                    Entity entidad = new Entity();

                    foreach (XmlNode childEntity in child.ChildNodes)
                    {
                        if (childEntity.LocalName.Equals(EtiquetasXBRLConstantes.Identifier))
                        {
                            foreach (XmlAttribute attribute in childEntity.Attributes)
                            {
                                if (attribute.LocalName.Equals(EtiquetasXBRLConstantes.SchemeAttribute))
                                {
                                    entidad.EsquemaId = attribute.Value;
                                }
                            }
                            entidad.Id = childEntity.InnerText;
                        }
                        else if (childEntity.LocalName.Equals(EtiquetasXBRLConstantes.Segment))
                        {
                            entidad.Segmento = new Segment(childEntity,this);
                            
                        }
                    }

                    if (entidad.EsquemaId == null)
                    {
                        ManejadorErrores.ManejarError(null, "4.7.3.1 Se encontró un elemento identifier sin el atributo scheme requerido. Nodo: " + child.OuterXml, XmlSeverityType.Error);
                        return;
                    }
                    if (entidad.Id == null)
                    {
                        ManejadorErrores.ManejarError(null, "4.7.3.1 Se encontró un elemento identifier sin un valor. Nodo: " + child.OuterXml, XmlSeverityType.Error);
                        return;
                    }
                    if (entidad.Segmento != null && entidad.Segmento.ElementoOrigen.ChildNodes.Count == 0)
                    {
                        ManejadorErrores.ManejarError(null, "4.7.3.2 Se encontró un elemento segment de una entidad vacío. Nodo: " + child.OuterXml, XmlSeverityType.Error);
                        return;
                    }

                    contexto.Entidad = entidad;
                }
                else if (child.LocalName.Equals(EtiquetasXBRLConstantes.Period))
                {

                    Period periodo = new Period();

                    foreach (XmlNode childPeriod in child.ChildNodes)
                    {
                        if (childPeriod.LocalName.Equals(EtiquetasXBRLConstantes.Instant))
                        {
                            periodo.Tipo = Period.Instante;
                            DateTime fecha;
                            periodo.FechaInstanteValue = childPeriod.InnerText;
                            if (XmlUtil.ParsearUnionDateTime(childPeriod.InnerText, out fecha))
                            {
                                periodo.FechaInstante = fecha;
                            }
                            else
                            {
                                ManejadorErrores.ManejarError(null, "4.7.2 Se encontró un elemento instant en el documento instancia con una fecha mal formada. Nodo: " + childPeriod.OuterXml, XmlSeverityType.Error);
                                return;
                            }
                        }
                        if (childPeriod.LocalName.Equals(EtiquetasXBRLConstantes.Forever))
                        {
                            periodo.Tipo = Period.ParaSiempre;
                        }
                        if (childPeriod.LocalName.Equals(EtiquetasXBRLConstantes.StartDate))
                        {
                            periodo.Tipo = Period.Duracion;
                            DateTime fecha;
                            periodo.FechaInicioValue = childPeriod.InnerText;
                            if (XmlUtil.ParsearUnionDateTime(childPeriod.InnerText, out fecha))
                            {
                                periodo.FechaInicio = fecha;
                            }
                            else
                            {
                                ManejadorErrores.ManejarError(null, "4.7.2 Se encontró un elemento startDate en el documento instancia con una fecha mal formada. Nodo: " + childPeriod.OuterXml, XmlSeverityType.Error);
                                return;
                            }
                        }
                        if (childPeriod.LocalName.Equals(EtiquetasXBRLConstantes.EndDate))
                        {
                            periodo.Tipo = Period.Duracion;
                            DateTime fecha;
                            periodo.FechaFinValue = childPeriod.InnerText;
                            if (XmlUtil.ParsearUnionDateTime(childPeriod.InnerText, out fecha))
                            {
                                periodo.FechaFin = fecha;
                            }
                            else
                            {
                                ManejadorErrores.ManejarError(null, "4.7.2 Se encontró un elemento endDate en el documento instancia con una fecha mal formada. Nodo: " + childPeriod.OuterXml, XmlSeverityType.Error);
                                return;
                            }
                        }
                    }

                    if (periodo.Tipo == 0)
                    {
                        ManejadorErrores.ManejarError(null, "4.7.2 Se encontró un elemento periodo en el documento instancia sin nodos hijo. Nodo: " + child.OuterXml, XmlSeverityType.Error);
                        return;
                    }
                    if (periodo.Tipo == Period.Duracion)
                    {
                        if (!(periodo.ObtenerFechaFinEfectiva() > periodo.FechaInicio))
                        {
                            ManejadorErrores.ManejarError(null, "4.7.2 Se encontró un elemento period de tipo Duration en el documento instancia con una fecha inicial posterior a la fecha final. Nodo: " + child.OuterXml, XmlSeverityType.Error);
                            return;
                        }
                    }
                    contexto.Periodo = periodo;
                }
            }
            Contextos.Add(id, contexto);
            ProcesarDimensionesContexto(contexto);
            //Crear la entrada del índice para le contexto actual
            GruposContextosEquivalentes.Add(id,new List<String>());
            GruposContextosEquivalentes[id].Add(id);
            //Buscar a que otros contextos es equivalente
            foreach (Context ctx in Contextos.Values.Where(cx => !cx.Id.Equals(id) && cx.StructureEquals(contexto)))
            {
                GruposContextosEquivalentes[id].Add(ctx.Id);
                GruposContextosEquivalentes[ctx.Id].Add(id);
            }
        }
        /// <summary>
        /// Preprocesa los elementos dimensionales que pueden encontrarse en el contexto (segmento o escenario)
        /// Procesa los elementos explicitDimension o typedDimension
        /// </summary>
        /// <param name="contexto"></param>
        private void ProcesarDimensionesContexto(Context contexto)
        {
            if(contexto.Escenario != null)
            {
                
            }
        }

        /// <summary>
        /// Valida y en caso de ser necesario procesa una definición de un elemento <code>&lt;unit&gt;</code> encontrado en un documento instancia XBRL.
        /// </summary>
        /// <param name="nodo">El nodo XML que contiene la definición del elemento</param>
        private void ProcesarDefinicionUnit(XmlNode nodo)
        {
            Unit unidad = new Unit();

            string id = null;

            foreach (XmlAttribute attribute in nodo.Attributes)
            {
                if (attribute.LocalName.Equals(EtiquetasXBRLConstantes.IdAttribute))
                {
                    id = attribute.Value;
                }
            }

            if (id == null || id.Equals(string.Empty))
            {
                ManejadorErrores.ManejarError(null, "4.8.1 Se encontró un elemento unit en el documento instancia sin identificador. Nodo: " + nodo.OuterXml, XmlSeverityType.Error);
                return;
            }

            unidad.Id = id;

            foreach (XmlNode child in nodo.ChildNodes)
            {
                if (child.LocalName.Equals(EtiquetasXBRLConstantes.DivideElement))
                {
                    unidad.Tipo = Unit.Divisoria;
                    foreach (XmlNode childDivide in child.ChildNodes)
                    {
                        if (childDivide.LocalName.Equals(EtiquetasXBRLConstantes.UnitNumeratorElement))
                        {
                            unidad.Numerador = new List<Measure>();
                            foreach (XmlNode childNumerator in childDivide.ChildNodes)
                            {
                                if (childNumerator.LocalName.Equals(EtiquetasXBRLConstantes.Measure))
                                {
                                    Measure qName = ProcesarDefinicionMeasure(childNumerator);
                                    if (qName == null)
                                    {
                                        return;
                                    }
                                    unidad.Numerador.Add(qName);
                                }
                            }
                        }
                        if (childDivide.LocalName.Equals(EtiquetasXBRLConstantes.UnitDenominatorElement))
                        {
                            unidad.Denominador = new List<Measure>();
                            foreach (XmlNode childDenominator in childDivide.ChildNodes)
                            {
                                if (childDenominator.LocalName.Equals(EtiquetasXBRLConstantes.Measure))
                                {
                                    Measure qName = ProcesarDefinicionMeasure(childDenominator);
                                    if (qName == null)
                                    {
                                        return;
                                    }
                                    unidad.Denominador.Add(qName);
                                }
                            }
                        }
                    }
                }
                else if (child.LocalName.Equals(EtiquetasXBRLConstantes.Measure))
                {
                    unidad.Tipo = Unit.Medida;
                    if (unidad.Medidas == null)
                    {
                        unidad.Medidas = new List<Measure>();
                    }
                    Measure qName = ProcesarDefinicionMeasure(child);
                    if (qName == null)
                    {
                        return;
                    }
                    unidad.Medidas.Add(qName);
                }
            }

            Unidades.Add(unidad.Id, unidad);
        }

        /// <summary>
        /// Valida y en caso de ser necesario procesa la definición de un elemento <code>&lt;measure&gt;</code>.
        /// </summary>
        /// <param name="nodo">El nodo XML con la definición del elemento</param>
        /// <returns>el Objeto Measure contenido en el elemento <code>&lt;measure&gt;</code>. <code>null</code> si no puede ser procesado o no es válido.</returns>
        private Measure ProcesarDefinicionMeasure(XmlNode nodo)
        {
            XmlQualifiedName qName = null;
            if (nodo.InnerText != null && !nodo.InnerText.Equals(string.Empty))
            {
                qName = XmlUtil.ParsearQName(nodo.InnerText);
                
                if (qName == null)
                {
                    ManejadorErrores.ManejarError(null, "4.8.2 Se encontró un elemento measure en el documento instancia cuyo valor no es un QNAME. Nodo: " + nodo.OuterXml, XmlSeverityType.Error);
                }
            }
            else
            {
                ManejadorErrores.ManejarError(null, "4.8.2 Se encontró un elemento measure en el documento instancia sin valor. Nodo: " + nodo.OuterXml, XmlSeverityType.Error);
            }
            Measure medida = new Measure();
            medida.Elemento = nodo;
            medida.Namespace = nodo.GetNamespaceOfPrefix(qName.Namespace);
            if (String.IsNullOrEmpty(medida.Namespace))
            {
                medida.Namespace = qName.Namespace;
            }
            medida.LocalName = qName.Name;
            return medida;
        }

        /// <summary>
        /// Valida y en caso de ser necesario procesa una definición de un elemento <code>&lt;schemaRef&gt;</code> encontrado en un documento instancia XBRL.
        /// </summary>
        /// <param name="nodo">El nodo XML que contiene la definición del elemento</param>
        /// <param name="uriReferencia">el URI de referencia en donde se encuentra el documento instancia</param>
        private void ProcesarDefinicionSchemaRef(XmlNode nodo, string uriReferencia, bool ForzarEsquemaHttp = false)
        {
            string href = null;
            string baseAttr = null;

            foreach (XmlAttribute attribute in nodo.Attributes)
            {
                if (attribute.LocalName.Equals(EtiquetasXBRLConstantes.TypeAttribute))
                {
                    if (!attribute.Value.Equals(EtiquetasXBRLConstantes.SimpleType))
                    {
                        ManejadorErrores.ManejarError(null, "4.2.1 Se encontró un elemento schemaRef con valor del atributo xlink:type diferente de \"simple\": " + attribute.Value + " Nodo: " + nodo.OuterXml, XmlSeverityType.Error);
                        return;
                    }
                }
                else if (attribute.LocalName.Equals(EtiquetasXBRLConstantes.BaseAttribute))
                {
                    baseAttr = attribute.Value;
                }
                else if (attribute.LocalName.Equals(EtiquetasXBRLConstantes.HrefAttribute))
                {
                    href = attribute.Value;
                }
            }
            Uri uribase = null;
            if(!String.IsNullOrEmpty(uriReferencia))
            {
                uribase = new Uri(uriReferencia);
            }
            

            if (baseAttr != null && baseAttr.Equals(string.Empty))
            {
                ManejadorErrores.ManejarError(null, "4.2.5 Se encontró un elemento schemaRef con el atributo base pero este se encuentra vacío. Nodo: " + nodo.OuterXml, XmlSeverityType.Error);
                return;
            }
            else if (href == null || href.Equals(""))
            {
                ManejadorErrores.ManejarError(null, "4.2.2 Se encontró un elemento schemaRef sin el href requerido: " + (href ?? "") + " Nodo: " + nodo.OuterXml, XmlSeverityType.Error);
                return;
            }
            else
            {

                if (baseAttr != null)
                {
                    try
                    {
                        uribase = new Uri(baseAttr);
                    }
                    catch (UriFormatException e)
                    {
                        ManejadorErrores.ManejarError(e, "4.2.5 Se encontró un elemento schemaRef con un base malformado: " + (baseAttr ?? "") + " Nodo: " + nodo.OuterXml, XmlSeverityType.Error);
                        return;
                    }
                }

                Uri uriSchema = null;

                try
                {
                    uriSchema = uribase != null ? new Uri(uribase, href) : new Uri(href);
                }
                catch (UriFormatException e)
                {
                    ManejadorErrores.ManejarError(e, "4.2.2 Se encontró un elemento schemaRef con un href malformado: " + (href ?? "") + " Nodo: " + nodo.OuterXml, XmlSeverityType.Error);
                    return;
                }
                if (!_taxonomiaSoloLectura)
                {
                    Taxonomia.ProcesarDefinicionDeEsquema(uriSchema.ToString(), ForzarEsquemaHttp);
                }
                var strUriTmp = uriSchema.OriginalString;
                
                if (ForzarEsquemaHttp && "https".Equals(uriSchema.Scheme, StringComparison.InvariantCultureIgnoreCase)) {
                    
                    strUriTmp = strUriTmp.Replace("https://","http://");
                    strUriTmp = strUriTmp.Replace("HTTPS://", "HTTP://");
                }
                if (Taxonomia.ArchivosEsquema.ContainsKey(strUriTmp))
                {
                    _archivosImportados.Add(new ArchivoImportadoDocumento(ArchivoImportadoDocumento.SCHEMA_REF,uriSchema.ToString(),href,null,null));
                }
                
            }
        }

        /// <summary>
        /// Obtiene el conjunto de hechos reportados que son del tipo del concepto enviado como parámetro
        /// </summary>
        /// <param name="concepto">Concepto para filtrar los hechos</param>
        /// <returns>Lista de hechos reportados encontrados</returns>
        public IList<Fact> ObtenerHechosPorConcepto(Concept concepto)
        {
            if (HechosPorIdConcepto.ContainsKey(concepto.Id))
            {
                return HechosPorIdConcepto[concepto.Id];
            }
            return new List<Fact>();
        }
        /// <summary>
        /// Crea el documento XML correspondiente al PTVI para la verificación de pruebas de lectura de documentos de instancia
        /// </summary>
        /// <param name="p"></param>
        /// <returns></returns>
        public XmlDocument CrearDocumentoPTVI(string uriSchema)
        {
            XmlReaderSettings settings = new XmlReaderSettings();
            settings.IgnoreComments = true;
            settings.ValidationType = ValidationType.Schema;
            settings.ValidationFlags |= XmlSchemaValidationFlags.ProcessInlineSchema;
            settings.ValidationFlags |= XmlSchemaValidationFlags.ProcessSchemaLocation;
            settings.ValidationFlags |= XmlSchemaValidationFlags.AllowXmlAttributes;
            settings.ValidationEventHandler += new ValidationEventHandler(ValidacionCallback);
            XmlReader reader = XmlReader.Create(Uri.UnescapeDataString(uriSchema), settings);
            XmlSchema esquema = XmlSchema.Read(reader, new ValidationEventHandler(ValidacionCallback));

            XmlDocument ptviDoc = new XmlDocument();
            //ptviDoc.Schemas.Add(esquema);
            XmlNode docNode = ptviDoc.CreateXmlDeclaration("1.0", null, null);
            ptviDoc.AppendChild(docNode);
            XmlAttribute attr = null;
            XmlNamespaceManager nsManager = new XmlNamespaceManager(ptviDoc.NameTable);
            nsManager.AddNamespace("",EspacioNombresConstantes.InstanceNamespace);
            nsManager.AddNamespace("link", EspacioNombresConstantes.LinkNamespace);
            nsManager.AddNamespace("xlink", EspacioNombresConstantes.XLinkNamespace);
            nsManager.AddNamespace("xsi", "http://www.w3.org/2001/XMLSchema-instance");
            nsManager.AddNamespace("ptv", esquema.TargetNamespace);
            nsManager.AddNamespace("xbrli", EspacioNombresConstantes.InstanceNamespace);
            nsManager.AddNamespace("iso4217", "http://www.xbrl.org/2003/iso4217");
            //namespace de los esquemas de la taxonomia
            String schemaLoc = esquema.TargetNamespace + " ptv-2003-12-31.xsd ";
            foreach (var archivoImportado in _archivosImportados.Where(x=>x.TipoArchivo == ArchivoImportadoDocumento.SCHEMA_REF))
            {
                XmlQualifiedName[] namespaces = Taxonomia.ArchivosEsquema[archivoImportado.HRef].Namespaces.ToArray();
                if (namespaces.Any(qn => qn.Namespace.Equals(Taxonomia.ArchivosEsquema[archivoImportado.HRef].TargetNamespace)))
                {
                    //nsManager.AddNamespace(namespaces.First(qn => qn.Namespace.Equals(ArchivosEsquemaInstancia[uri].TargetNamespace)).Name, ArchivosEsquemaInstancia[uri].TargetNamespace);
                }
                schemaLoc += Taxonomia.ArchivosEsquema[archivoImportado.HRef].TargetNamespace + " " + archivoImportado.HRef + " ";
                ptviDoc.Schemas.Add(Taxonomia.ArchivosEsquema[archivoImportado.HRef]);
                ptviDoc.Schemas.Compile();
            }
            
            nsManager.PushScope();
            XmlElement xbrl = ptviDoc.CreateElement(EtiquetasXBRLConstantes.Xbrl, EspacioNombresConstantes.InstanceNamespace);
            ptviDoc.AppendChild(xbrl);
            XmlAttribute attrSchemaLoc = ptviDoc.CreateAttribute("xsi","schemaLocation", "http://www.w3.org/2001/XMLSchema-instance");
            attrSchemaLoc.Value = schemaLoc;
            xbrl.Attributes.Append(
                 attrSchemaLoc
                 );
            
            attr = ptviDoc.CreateAttribute("xmlns:xbrli");
            attr.Value = EspacioNombresConstantes.InstanceNamespace;
            xbrl.Attributes.Append(attr);

            attr = ptviDoc.CreateAttribute("xmlns:link");
            attr.Value = EspacioNombresConstantes.LinkNamespace;
            xbrl.Attributes.Append(attr);

            attr = ptviDoc.CreateAttribute("xmlns:xlink");
            attr.Value = EspacioNombresConstantes.XLinkNamespace;
            xbrl.Attributes.Append(attr);

            attr = ptviDoc.CreateAttribute("xmlns:ptv");
            attr.Value = esquema.TargetNamespace;
            xbrl.Attributes.Append(attr);

            attr = ptviDoc.CreateAttribute("xmlns:iso4217");
            attr.Value = "http://www.xbrl.org/2003/iso4217";
            xbrl.Attributes.Append(attr);

            foreach (var archivo in _archivosImportados.Where(x=>x.TipoArchivo == ArchivoImportadoDocumento.SCHEMA_REF))
            {
                XmlQualifiedName[] namespaces = Taxonomia.ArchivosEsquema[archivo.HRef].Namespaces.ToArray();
                if (namespaces.Any(qn => qn.Namespace.Equals(Taxonomia.ArchivosEsquema[archivo.HRef].TargetNamespace)))
                {
                    XmlQualifiedName namespaceArchivo = namespaces.First(qn => qn.Namespace.Equals(Taxonomia.ArchivosEsquema[archivo.HRef].TargetNamespace));
                    if (!String.IsNullOrEmpty(namespaceArchivo.Name))
                    {
                        attr = ptviDoc.CreateAttribute("xmlns" + (!String.IsNullOrEmpty(namespaceArchivo.Name) ? (":" + namespaceArchivo.Name) : ("")));
                        attr.Value = namespaceArchivo.Namespace;
                        xbrl.Attributes.Append(attr);
                    }
                    
                }
                
            }
            
            //Agregar los schemaRef
            foreach (var archivo in _archivosImportados.Where(x => x.TipoArchivo == ArchivoImportadoDocumento.SCHEMA_REF))
            {
                XmlElement schemaRef = ptviDoc.CreateElement("link", EtiquetasXBRLConstantes.SchemaRef, "http://www.xbrl.org/2003/linkbase");
                attr = ptviDoc.CreateAttribute("xlink",EtiquetasXBRLConstantes.HrefAttribute, "http://www.w3.org/1999/xlink");
                attr.Value = archivo.HRefOriginal;
                schemaRef.Attributes.Append(attr);

                attr = ptviDoc.CreateAttribute("xlink",EtiquetasXBRLConstantes.TypeAttribute, "http://www.w3.org/1999/xlink");
                attr.Value = EtiquetasXBRLConstantes.SimpleType;
                schemaRef.Attributes.Append(attr);
                xbrl.AppendChild(schemaRef);
            }

            //Unidades

            foreach(Unit unidad in Unidades.Values){
                XmlElement xmlUnidad = ptviDoc.CreateElement(Unit.XmlLocalName, Unit.XmlNamespace);

                attr = ptviDoc.CreateAttribute(EtiquetasXBRLConstantes.IdAttribute);
                attr.Value = unidad.Id;
                xmlUnidad.Attributes.Append(attr);
                if (unidad.Tipo == Unit.Medida)
                {
                    foreach(Measure medida in unidad.Medidas)
                    {
                        XmlElement med = ptviDoc.CreateElement(Measure.XmlLocalName, Measure.XmlNamespace);
                        XmlNode txt = ptviDoc.CreateTextNode(nsManager.LookupPrefix(medida.Namespace) + ":" + medida.LocalName);
                        med.AppendChild(txt);
                        xmlUnidad.AppendChild(med);
                    }
                }
                else
                {
                    XmlElement numerador = ptviDoc.CreateElement(EtiquetasXBRLConstantes.Numerator ,EspacioNombresConstantes.InstanceNamespace);
                    //numerador
                    foreach (Measure medida in unidad.Numerador)
                    {
                        XmlElement med = ptviDoc.CreateElement(Measure.XmlLocalName, Measure.XmlNamespace);
                        XmlNode txt = ptviDoc.CreateTextNode(nsManager.LookupPrefix(medida.Namespace) + ":" + medida.LocalName);
                        med.AppendChild(txt);
                        numerador.AppendChild(med);
                    }
                    //denominador
                    XmlElement denominador = ptviDoc.CreateElement(EtiquetasXBRLConstantes.Denominator, EspacioNombresConstantes.InstanceNamespace);
                    foreach (Measure medida in unidad.Denominador)
                    {
                        XmlElement med = ptviDoc.CreateElement(Measure.XmlLocalName, Measure.XmlNamespace);
                        XmlNode txt = ptviDoc.CreateTextNode(nsManager.LookupPrefix(medida.Namespace) + ":" + medida.LocalName);
                        med.AppendChild(txt);
                        denominador.AppendChild(med);
                    }
                    xmlUnidad.AppendChild(numerador);
                    xmlUnidad.AppendChild(denominador);
                }
                xbrl.AppendChild(xmlUnidad);
            }

            //Contextos

            foreach (Context contexto in Contextos.Values)
            {
                XmlElement xmlContexto = ptviDoc.CreateElement(Context.XmlLocalName, Context.XmlNamespace);
                attr = ptviDoc.CreateAttribute(EtiquetasXBRLConstantes.IdAttribute);
                attr.Value = contexto.Id;
                xmlContexto.Attributes.Append(attr);
                //entidad
                XmlElement entidad = ptviDoc.CreateElement(Entity.XmlLocalName,Entity.XmlNamespace);
                XmlElement identificador = ptviDoc.CreateElement(EtiquetasXBRLConstantes.Identifier,Entity.XmlNamespace);
                attr = ptviDoc.CreateAttribute(EtiquetasXBRLConstantes.SchemeAttribute);
                attr.Value = contexto.Entidad.EsquemaId;
                identificador.Attributes.Append(attr);
                XmlNode txt = ptviDoc.CreateTextNode(contexto.Entidad.Id);
                identificador.AppendChild(txt);
                entidad.AppendChild(identificador);
                xmlContexto.AppendChild(entidad);
                //segmento
                if (contexto.Entidad.Segmento != null)
                {
                    XmlNode nodo = contexto.Entidad.Segmento.ElementoOrigen.CloneNode(true);
                    XmlNode nodoImportado = ptviDoc.ImportNode(nodo, true);
                    //copiar atributos que no estén en el nodo importado
                    IgualarAtributos(nodo as XmlElement, nodoImportado as XmlElement);
                    entidad.AppendChild(nodoImportado);
                }
                //Periodo
                XmlElement periodo = ptviDoc.CreateElement(Period.XmlLocalName,Period.XmlNamespace);
                if (contexto.Periodo.Tipo == Period.Duracion)
                {
                    XmlElement start = ptviDoc.CreateElement(EtiquetasXBRLConstantes.StartDate, Period.XmlNamespace);
                    txt = ptviDoc.CreateTextNode(XmlUtil.ToUnionDateTimeString(contexto.Periodo.FechaInicio));
                    start.AppendChild(txt);
                    periodo.AppendChild(start);
                    XmlElement end = ptviDoc.CreateElement(EtiquetasXBRLConstantes.EndDate, Period.XmlNamespace);
                    txt = ptviDoc.CreateTextNode(XmlUtil.ToUnionDateTimeString(contexto.Periodo.FechaFin));
                    end.AppendChild(txt);
                    periodo.AppendChild(end);
                }
                else if (contexto.Periodo.Tipo == Period.Instante)
                {
                    XmlElement instant = ptviDoc.CreateElement(EtiquetasXBRLConstantes.Instant, Period.XmlNamespace);
                    txt = ptviDoc.CreateTextNode(XmlUtil.ToUnionDateTimeString(contexto.Periodo.FechaInstante));
                    instant.AppendChild(txt);
                    periodo.AppendChild(instant);
                }
                else
                {
                    XmlElement forever = ptviDoc.CreateElement(EtiquetasXBRLConstantes.Forever, Period.XmlNamespace);
                    periodo.AppendChild(forever);
                }
                xmlContexto.AppendChild(periodo);
                //Escenario
                if (contexto.Escenario != null)
                {
                    XmlNode nodo = contexto.Escenario.ElementoOrigen.CloneNode(true);
                    XmlNode nodoImportado = ptviDoc.ImportNode(nodo, true);
                    //copiar atributos que no estén en el nodo importado
                    IgualarAtributos(nodo as XmlElement, nodoImportado as XmlElement);
                    xmlContexto.AppendChild(nodoImportado);
                }
                xbrl.AppendChild(xmlContexto);
            }
            //Hechos
          foreach(Fact hecho in Hechos){
                XmlElement xmlHecho = ptviDoc.CreateElement(nsManager.LookupPrefix(hecho.Concepto.Elemento.QualifiedName.Namespace), hecho.Concepto.Elemento.QualifiedName.Name, hecho.Concepto.Elemento.QualifiedName.Namespace);
                if(hecho is FactTuple)
                {
                    //hijos de la tupla
                    foreach (var hechoTupla in (hecho as FactTuple).Hechos)
                    {
                        XmlElement xmlHechoTupla =
                            ptviDoc.CreateElement(nsManager.LookupPrefix(hechoTupla.Concepto.Elemento.QualifiedName.Namespace), hechoTupla.Concepto.Elemento.QualifiedName.Name, hechoTupla.Concepto.Elemento.QualifiedName.Namespace);
                        LlenarHecho(xmlHechoTupla, ptviDoc, hechoTupla, nsManager, esquema);
                        xmlHecho.AppendChild(xmlHechoTupla);
                    }

                    xbrl.AppendChild(xmlHecho);

                }else
                {
                    if(hecho.TuplaPadre == null)
                    {
                        LlenarHecho(xmlHecho, ptviDoc, hecho, nsManager, esquema);
                        xbrl.AppendChild(xmlHecho);
                    }
                    
                }
                
            }


            return ptviDoc;


        }
        /// <summary>
        /// Para los atributos que no sean iguales en el nodo destino y origen 
        /// se copian del origen al destino
        /// </summary>
        /// <param name="nodoOrigen"></param>
        /// <param name="nodoDestino"></param>
        private void IgualarAtributos(XmlElement nodoOrigen, XmlElement nodoDestino)
        {

            foreach (XmlAttribute atributoOrigen in nodoOrigen.Attributes)
            {
                if(nodoDestino.Attributes[atributoOrigen.LocalName] == null)
                {
                    nodoDestino.Attributes.Append(nodoDestino.OwnerDocument.ImportNode(atributoOrigen,true) as XmlAttribute);
                }
            }
            for(int ix=0;ix<nodoOrigen.ChildNodes.Count;ix++)
            {
                if(nodoOrigen.ChildNodes[ix] is XmlElement)
                {
                    IgualarAtributos(nodoOrigen.ChildNodes[ix] as XmlElement, nodoDestino.ChildNodes[ix] as XmlElement);
                }
            }
        }

        private void LlenarHecho(XmlElement xmlHecho, XmlDocument ptviDoc, Fact hecho, XmlNamespaceManager nsManager, XmlSchema esquema)
        {
            XmlAttribute attr = null;
            if (hecho is FactItem)
            {
                attr = ptviDoc.CreateAttribute(EtiquetasXBRLConstantes.ContextRefAttribute);
                attr.Value = ((FactItem)hecho).Contexto.Id;
                xmlHecho.Attributes.Append(attr);

                attr = ptviDoc.CreateAttribute(nsManager.LookupPrefix(esquema.TargetNamespace), PTVConstantes.PERIOD_TYPE_ATTR, esquema.TargetNamespace);
                attr.Value = ((ConceptItem)hecho.Concepto).TipoPeriodo.Name;
                xmlHecho.Attributes.Append(attr);

                XmlNode txt = ptviDoc.CreateTextNode(((FactItem)hecho).Valor);
                xmlHecho.AppendChild(txt);
            }
            if (hecho is FactNumericItem)
            {
                attr = ptviDoc.CreateAttribute(EtiquetasXBRLConstantes.UnitRefAttribute);
                attr.Value = ((FactNumericItem)hecho).Unidad.Id;
                xmlHecho.Attributes.Append(attr);

                attr = ptviDoc.CreateAttribute(EtiquetasXBRLConstantes.PrecisionAttribute);

                attr.Value = ((FactNumericItem)hecho).ValorRedondeado.ToString();

                if ("INF".Equals(((FactNumericItem)hecho).Decimales))
                {
                    attr.Value = "INF";
                }
                else
                {
                    if (((FactNumericItem)hecho).PrecisionInferida == null)
                    {
                        attr.Value = "0";
                    }
                    else
                    {
                        attr.Value = ((FactNumericItem)hecho).PrecisionInferida.ToString();
                    }
                }

                xmlHecho.Attributes.Append(attr);

                if (((ConceptItem)hecho.Concepto).Balance != null)
                {
                    attr = ptviDoc.CreateAttribute(nsManager.LookupPrefix(esquema.TargetNamespace), PTVConstantes.BALANCE_TYPE_ATTR, esquema.TargetNamespace);
                    attr.Value = ((ConceptItem)hecho.Concepto).Balance.Name;
                    xmlHecho.Attributes.Append(attr);
                }

            }
        }

        
        public string ObtenerPrefijoEspacioNombres(string espacioNombres)
        {
            return _documentoXmlInterno.GetPrefixOfNamespace(espacioNombres);
        }
        /// <summary>
        /// Crea un documento del tipo Fact List para la comparación con los resultados esperados de la prueba de conformance suite
        /// de dimensiones
        /// </summary>
        /// <param name="schemaUri">Uri del esquema del fact list</param>
        /// <returns>Documento XML Creado</returns>
        public XmlDocument CrearDocumentoFactList(string schemaUri)
        {
            XmlReaderSettings settings = new XmlReaderSettings();
            settings.IgnoreComments = true;
            settings.ValidationType = ValidationType.Schema;
            settings.ValidationFlags |= XmlSchemaValidationFlags.ProcessInlineSchema;
            settings.ValidationFlags |= XmlSchemaValidationFlags.ProcessSchemaLocation;
            settings.ValidationFlags |= XmlSchemaValidationFlags.AllowXmlAttributes;
            settings.ValidationEventHandler += new ValidationEventHandler(ValidacionCallback);
           
            XmlDocument factListDoc = new XmlDocument();
            //ptviDoc.Schemas.Add(esquema);
            XmlNode docNode = factListDoc.CreateXmlDeclaration("1.0", null, null);
            factListDoc.AppendChild(docNode);
            XmlAttribute attr = null;
            XmlText texto = null;
            XmlElement facts = factListDoc.CreateElement("facts");
            factListDoc.AppendChild(facts);

            attr = factListDoc.CreateAttribute("xmlns:xsi");
            attr.Value = "http://www.w3.org/2001/XMLSchema-instance";
            facts.Attributes.Append(attr);

            attr = factListDoc.CreateAttribute("xsi", "noNamespaceSchemaLocation", "http://www.w3.org/2001/XMLSchema-instance");
            attr.Value = schemaUri;
            facts.Attributes.Append(attr);

            XmlElement item = null;
            foreach (var fact in Hechos.Where(x=>x is FactItem))
            {
                item = factListDoc.CreateElement("item");
                facts.AppendChild(item);
                //Concepto del hecho
                XmlElement qnElement = factListDoc.CreateElement("qnElement");

                attr = factListDoc.CreateAttribute("xmlnsdospuntos"+fact.Nodo.Prefix);
                attr.Value = fact.Nodo.NamespaceURI;
                qnElement.Attributes.Append(attr);

                texto =
                    factListDoc.CreateTextNode(
                        fact.Nodo.Prefix + ":" +
                        fact.Concepto.Elemento.Name);

                qnElement.AppendChild(texto);
                item.AppendChild(qnElement);
                XmlElement pointer = factListDoc.CreateElement("sPointer");
                pointer.AppendChild(factListDoc.CreateTextNode(_posicionXptrElemento[fact].ToString()));
                item.AppendChild(pointer);
                
                var miembrosAgregados = new List<XmlQualifiedName>();
                var valoresDimensiones = new List<MiembroDimension>();

                if ((fact as FactItem).Contexto.Escenario != null && (fact as FactItem).Contexto.Escenario.MiembrosDimension !=null)
                {
                    valoresDimensiones.AddRange((fact as FactItem).Contexto.Escenario.MiembrosDimension);
                }
                if ((fact as FactItem).Contexto.Entidad.Segmento != null && (fact as FactItem).Contexto.Entidad.Segmento.MiembrosDimension != null)
                {
                    valoresDimensiones.AddRange((fact as FactItem).Contexto.Entidad.Segmento.MiembrosDimension);
                }

                foreach (var listaHipercubo in Taxonomia.ListaHipercubos.Values)
                {
                    /*
                    //imprimir todas las default que no existan en la lista de valores
                    foreach (var hipercubo in listaHipercubo)
                    {
                        foreach (var dimension in hipercubo.ListaDimensiones.Where(x=>x.MiembroDefault != null))
                        {
                            if (!valoresDimensiones.Any(x => x.Dimension == dimension.ConceptoDimension) && !miembrosAgregados.Contains(dimension.ConceptoDimension.Elemento.QualifiedName))
                            {
                                miembrosAgregados.Add(AgregarDimension(dimension.ConceptoDimension, factListDoc, item, fact, true));
                            }
                        }
                    }
                     * */
                    foreach (var hc in listaHipercubo.Where(x=>x.ElementoPrimarioPerteneceAHipercubo(fact.Concepto as ConceptItem)))
                    {
                        foreach (var dimension in hc.ListaDimensiones)
                        {
                            //si no existe la dimensión en el contexto
                            var informacionDimContexto = ObtenerNodoDimensionContexto(hc, dimension.ConceptoDimension , fact as FactItem);
                            if (informacionDimContexto == null)
                            {
                                continue;
                            }
                            if(!miembrosAgregados.Contains(dimension.ConceptoDimension.Elemento.QualifiedName))
                            {
                                miembrosAgregados.Add(AgregarDimension(dimension.ConceptoDimension, factListDoc, item, fact, false));
                            }
                            
                        }
                    }
                }
                //Agregar todas las default (aunque no existan formalmente en la definición de un hipercubo)
                var defaults = Taxonomia.ObtenerDimensionesDefaultsGlobales();
                foreach (var defeault in defaults)
                {
                    if (!miembrosAgregados.Contains(defeault.Key.Elemento.QualifiedName))
                    {
                        miembrosAgregados.Add(AgregarDimension(defeault.Key, factListDoc, item, fact, false));
                    }
                }
                //Agregar los valores extras que no están en la dimensión del hipercubo
                if (valoresDimensiones != null)
                {
                    foreach (var valorDimensionExtra in valoresDimensiones.Where(x =>!miembrosAgregados.Contains(x.Dimension.Elemento.QualifiedName)))
                    {
                        miembrosAgregados.Add(AgregarDimension(valorDimensionExtra.Dimension, factListDoc, item, fact, false));
                    }
                }
            }

            return factListDoc;
        }
        /// <summary>
        /// Agrega un miembro de dimensión a la declaración de Item del documento
        /// </summary>
        /// <param name="dimension"></param>
        /// <param name="documento"></param>
        /// <param name="item"></param>
        /// <param name="predeterminado"></param>
        /// <returns></returns>
        private XmlQualifiedName AgregarDimension(ConceptDimensionItem dimension, XmlDocument documento, XmlElement item,Fact hecho, bool predeterminado)
        {
            XmlQualifiedName qnameDim = dimension.Elemento.QualifiedName;

            var memberElement = documento.CreateElement("member");
            var qnDim = documento.CreateElement("qnDimension");
            XmlAttribute attr = documento.CreateAttribute("xmlnsdospuntos" + hecho.Nodo.GetPrefixOfNamespace(qnameDim.Namespace));
            attr.Value = qnameDim.Namespace;
            qnDim.Attributes.Append(attr);
            qnDim.AppendChild(documento.CreateTextNode(hecho.Nodo.GetPrefixOfNamespace(qnameDim.Namespace) + ":" + qnameDim.Name));
            memberElement.AppendChild(qnDim);
            //default
            XmlElement bDefault = documento.CreateElement("bDefaulted");
            bDefault.AppendChild(documento.CreateTextNode(predeterminado? "true" : "false"));
            memberElement.AppendChild(bDefault);
            item.AppendChild(memberElement);
            return qnameDim;
        }

        /// <summary>
        /// Busca los nodos que corresponden a la información dimensional en el contexto
        /// La busca en el escenario o segmento dependiente de la configuración del hipercubo en el conector
        /// </summary>
        /// <param name="conectorAHipercubo">Conector con la información</param>
        /// <param name="dimension"> </param>
        /// <param name="fact">Hecho a evaluar</param>
        /// <returns>Nodo padre del conjunto de información dimensional del contexto</returns>
        private ConceptDimensionItem ObtenerNodoDimensionContexto(Hipercubo hipercubo, ConceptDimensionItem dimension, FactItem fact)
        {
            
            IList<MiembroDimension> listaDimensiones = null;
            if (hipercubo.ElementoContexto == TipoElementoContexto.Escenario)
            {
                listaDimensiones = fact.Contexto.Escenario != null ? fact.Contexto.Escenario.MiembrosDimension : null;
            }else
            {
                listaDimensiones = fact.Contexto.Entidad.Segmento != null ? fact.Contexto.Entidad.Segmento.MiembrosDimension : null;
            }
            if (listaDimensiones == null)
            {
                return null;
            }
            //Buscar el elemento de la dimensión explicita
            foreach (MiembroDimension miembro in listaDimensiones)
            {
                if (miembro.Dimension == dimension)
                    return miembro.Dimension;
            }
            return null;
        }



        //Métodos utilitarios para la presentación y análisis de contextos
        /// <summary>
        /// Obtiene los contextos que están asociados a valores que aparecen en el presentation linkbase
        /// del rol especificado como parámetro,este método no realiza ningún tipo de agrupación de contextos
        /// y los lista tal cuál están creados en el documento
        /// </summary>
        /// <param name="rol"></param>
        /// <returns></returns>
        public IList<Context> ObtenerContextosDeRol(String rol)
        {
            IList<Context> listaFinal = new List<Context>();

            if(Taxonomia.ConjuntoArbolesLinkbase.ContainsKey(rol))
            {
                var linkbase = Taxonomia.ConjuntoArbolesLinkbase[rol].FirstOrDefault(
                    x => x.Key.Equals(LinkbasePresentacion.RolePresentacionLinkbaseRef)).Value;
                if(linkbase !=null )
                {
                    var listaConceptosLinkbase = linkbase.IndicePorId.Values.Where(x => x.Elemento is ConceptItem).Select(nodo => nodo.Elemento as ConceptItem).ToList();
                    //Verificar por cada contexto si existe en algún concepto del rol
                    foreach (var context in Contextos)
                    {
                        if (listaConceptosLinkbase.
                            Where(concepto => HechosPorIdConcepto.ContainsKey(concepto.Id)).
                            Any(concepto => HechosPorIdConcepto[concepto.Id].
                                Any(x => (x as FactItem).Contexto == context.Value)))
                        {
                            listaFinal.Add(context.Value);
                        }
                    }
                }
            }
            return listaFinal;
        }

        /// <summary>
        /// Obtiene la lista de contextos existentes para los valores de un tipo de rol en particular
        /// y los agrupa de acuerdo a su entidad,tipos de contexto (instante, duracion), fechas y valores dimensionales
        /// </summary>
        /// <param name="rol"></param>
        /// <returns></returns>
        public IDictionary<Context,IList<Context>> ObtenerGruposDeContextosDeRol(string rol)
        {
            var resultado = new Dictionary<Context, IList<Context>>();
            var contextosRol = ObtenerContextosDeRol(rol);

            //Agrupar los contextos por elementos diferentes de: entidad,tipo de contexto, fechas, valores dimensionales
            Context grupo = null;
            foreach (var ctx in contextosRol)
            {
                grupo = BuscarGrupoDeContexto(ctx,resultado);
                if(grupo == null)
                {
                    //Este grupo es diferente, agregarlo como encabezado de grupo
                    resultado.Add(ctx,new List<Context>());
                    resultado[ctx].Add(ctx);
                }else
                {
                    resultado[grupo].Add(ctx);
                }
            }
            return resultado;
        }
        /// <summary>
        /// Agrupa los contextos de acuerdo al:
        /// Entidad -> Periodo -> Dimension (Dimensión vacía en caso de ser contextos no dimensionales)
        /// </summary>
        /// <param name="rol">Rol de donde se consultaran los contextos a agrupar</param>
        /// <returns></returns>
        public IDictionary<String, IDictionary<String, IDictionary<String, List<Context>>>>
            ObtenerOpcionesParaGruposDeContextos(string rol)
        {
            var resultado = new Dictionary
                <String, 
                IDictionary<String,
                IDictionary<String, List<Context>>>
                >();
            var contextos = ObtenerGruposDeContextosDeRol(rol);
            foreach (var ctx in contextos)
            {
                var entidadTmp = new Entity();
                entidadTmp.Id = ctx.Key.Entidad.Id;
                entidadTmp.EsquemaId = ctx.Key.Entidad.EsquemaId;
                //Entidad
                if (!resultado.ContainsKey(ctx.Key.Entidad.ToIdString()))
                {
                    resultado.Add(ctx.Key.Entidad.ToIdString(),
                                  new Dictionary<string, IDictionary<string, List<Context>>>());
                }
                //Fechas
                if(!resultado[ctx.Key.Entidad.ToIdString()].ContainsKey(ctx.Key.Periodo.ToString()))
                {
                    resultado[ctx.Key.Entidad.ToIdString()].Add(ctx.Key.Periodo.ToString(),new Dictionary<string, List<Context>>());
                }
                //Miembro dimension
                var valoresDimenson = ctx.Key.ObtenerMiembrosDimension();
                if(valoresDimenson.Count==0)
                {
                    //Sin dimension
                    if(!resultado[ctx.Key.Entidad.ToIdString()][ctx.Key.Periodo.ToString()].ContainsKey(String.Empty))
                    {
                        resultado[ctx.Key.Entidad.ToIdString()][ctx.Key.Periodo.ToString()].Add(String.Empty,new List<Context>());
                    }
                    resultado[ctx.Key.Entidad.ToIdString()][ctx.Key.Periodo.ToString()][String.Empty].AddRange(ctx.Value);
                }else
                {
                    foreach (var miembroDimension in valoresDimenson)
                    {
                        if (!resultado[ctx.Key.Entidad.ToIdString()][ctx.Key.Periodo.ToString()].ContainsKey(miembroDimension.ToIdString()))
                        {
                            resultado[ctx.Key.Entidad.ToIdString()][ctx.Key.Periodo.ToString()].Add(miembroDimension.ToIdString(), new List<Context>());
                        }
                        resultado[ctx.Key.Entidad.ToIdString()][ctx.Key.Periodo.ToString()][miembroDimension.ToIdString()].AddRange(ctx.Value);
                    }
                }
            }
            return resultado;
        }
        /// <summary>
        /// Verifica si el contexto enviado como parámetro es equivalente en fechas, entidad y valores dimensionales 
        /// a algún elemento de los grupos enviados como parámetro
        /// </summary>
        /// <param name="contexto">Contexto a verificar</param>
        /// <param name="grupos">Grupos de contextos en donde buscar</param>
        /// <returns>El contexto llave del grupo de contextos donde es equivalente el contexto enviado como parámetro</returns>
        private Context BuscarGrupoDeContexto(Context contexto, Dictionary<Context, IList<Context>> grupos)
        {
            foreach (var keyValGrupos in grupos)
            {
                if(contexto.StructureEquals(keyValGrupos.Key))
                {
                    //estructuralmente equivalente
                    //Verificar valores dimensionales
                    if(contexto.DimensionValueEquals(keyValGrupos.Key))
                    {
                        return keyValGrupos.Key;
                    }
                }
            }
            return null;
        }



        #region Manipulación del Documento de instancia
        /// <summary>
        /// Agrega un nuevo contexto al documento de instancia.
        /// Se valida que el ID del contexto no esté ya en uso
        /// </summary>
        /// <param name="ctx">Contexto a agregar</param>
        public void AgregarContexto(Context ctx)
        {
            if(Contextos.ContainsKey(ctx.Id))
            {
                throw new AbaxXbrlException(CodigoErrorConstantes.CONTEXTO_REPETIDO,"El Id del contexto ya existe en este documento de instancia");
            }
            
            
            Contextos.Add(ctx.Id,ctx);

            //Crear la entrada del índice para le contexto actual
            GruposContextosEquivalentes.Add(ctx.Id, new List<String>());
            GruposContextosEquivalentes[ctx.Id].Add(ctx.Id);
            //Buscar a que otros contextos es equivalente
            foreach (Context contexto in Contextos.Values.Where(cx => !cx.Id.Equals(ctx.Id) && cx.StructureEquals(ctx)))
            {
                GruposContextosEquivalentes[ctx.Id].Add(contexto.Id);
                GruposContextosEquivalentes[contexto.Id].Add(ctx.Id);
            }
        }
        /// <summary>
        /// Agrega una nueva unidad al documento de instancia.
        /// Se valida que el ID de la unidad no esté ya en uso
        /// </summary>
        /// <param name="unidad"></param>
        public void AgregarUnidad(Unit unidad)
        {
            if(Unidades.ContainsKey(unidad.Id))
            {
                throw new AbaxXbrlException(CodigoErrorConstantes.UNIDAD_REPETIDA, "El Id de la unidad ya existe en este documento de instancia");
            }
            Unidades.Add(unidad.Id,unidad);
        }

        public void AgregarHecho(Fact hecho)
        {
            if (hecho == null) return;
            if(hecho.Concepto == null)
            {
                throw new AbaxXbrlException(CodigoErrorConstantes.HECHO_SIN_CONCEPTO, "El Hecho no cuenta con referencia a un concepto");
            }
            if(!Taxonomia.ElementosTaxonomiaPorName.ContainsKey(hecho.Concepto.Elemento.QualifiedName))
            {
                throw new AbaxXbrlException(CodigoErrorConstantes.HECHO_CON_CONCEPTO_NO_TAXONOMIA, "El Hecho cuenta con referencia a un concepto no registrado en la taxonomía del documento");
            }
            if(!String.IsNullOrEmpty(hecho.Id) && HechosPorId.ContainsKey(hecho.Id))
            {
                throw new AbaxXbrlException(CodigoErrorConstantes.HECHO_ID_REPETIDO, "El Hecho cuenta con un Identificador que ya ha sido utilizado en el documento de instancia");
            }

            Hechos.Add(hecho);
            if(!HechosPorIdConcepto.ContainsKey(hecho.Concepto.Id))
            {
                HechosPorIdConcepto.Add(hecho.Concepto.Id,new List<Fact>());
            }
            HechosPorIdConcepto[hecho.Concepto.Id].Add(hecho);
            if(!String.IsNullOrEmpty(hecho.Id) )
            {
                HechosPorId.Add(hecho.Id, hecho);
            }
            

        }
        /// <summary>
        /// Genera una instancia de documento XML con el contenido del documento de instancia
        /// </summary>
        /// <returns></returns>
        public XmlDocument GenerarDocumentoXbrl()
        {
            
            var nsManager = new XmlNamespaceManager(new NameTable());


            nsManager.AddNamespace("", EspacioNombresConstantes.InstanceNamespace);
            nsManager.AddNamespace("link", EspacioNombresConstantes.LinkNamespace);
            nsManager.AddNamespace("xlink", EspacioNombresConstantes.XLinkNamespace);
            nsManager.AddNamespace("xsi", "http://www.w3.org/2001/XMLSchema-instance");
            nsManager.AddNamespace("xbrli", EspacioNombresConstantes.InstanceNamespace);
            nsManager.AddNamespace("ISO4217", "http://www.xbrl.org/2003/iso4217");
            nsManager.AddNamespace("xbrldi", "http://xbrl.org/2006/xbrldi");

            
           
            var xbrlDoc = new XmlDocument(nsManager.NameTable);

            var docNode = xbrlDoc.CreateXmlDeclaration("1.0", null, null);
            xbrlDoc.AppendChild(docNode);
            var comment =
                xbrlDoc.CreateComment(
                    ConstantesGenerales.COMENTARIO_XBRL);
            xbrlDoc.AppendChild(comment);

            var xbrl = xbrlDoc.CreateElement(nsManager.LookupPrefix(EspacioNombresConstantes.InstanceNamespace), EtiquetasXBRLConstantes.Xbrl,
                                                    EspacioNombresConstantes.InstanceNamespace);

            xbrlDoc.AppendChild(xbrl);

            

            //Schema refs
            CrearElementosArchivosImportados(xbrl,nsManager); 
            //Contextos
            CrearContextosXml(xbrl,nsManager);
            //Unidades
            CrearUnidadesXml(xbrl, nsManager);
            //Crear hechos
            CrearHechosXml(xbrl, nsManager);
            //Crear foot note links
            CrearFootNotesXml(xbrl, nsManager);

            foreach (var ns in nsManager.GetNamespacesInScope(XmlNamespaceScope.All).Where(x => !String.IsNullOrEmpty(x.Key) && !x.Key.Equals("xml")))
            {
                xbrl.SetAttribute("xmlns:" + ns.Key, ns.Value);
            }

            return xbrlDoc;
        }
        /// <summary>
        /// Crea los elementos de anotaciones al pie para los hechos que tengan notas
        /// </summary>
        /// <param name="xbrl">elemento raiz de la instancia XBRL</param>
        /// <param name="nsManager">Tabla de espacios de nombres</param>
        private void CrearFootNotesXml(XmlElement xbrl, XmlNamespaceManager nsManager)
        {
            var hechosConNotas = Hechos.Where(x => x.NotasAlPie != null && x.NotasAlPie.Count > 0).ToList();
            if(hechosConNotas.Count>0)
            {
                var footNoteLink =
                    xbrl.OwnerDocument.CreateElement(nsManager.LookupPrefix(EspacioNombresConstantes.LinkNamespace),EtiquetasXBRLConstantes.FootnoteLink,EspacioNombresConstantes.LinkNamespace);
                footNoteLink.SetAttribute(EtiquetasXBRLConstantes.TypeAttribute, EspacioNombresConstantes.XLinkNamespace, EtiquetasXBRLConstantes.ExtendedAttribute);
                footNoteLink.SetAttribute(EtiquetasXBRLConstantes.RoleAttribute, EspacioNombresConstantes.XLinkNamespace, EspacioNombresConstantes.StandardLinkRoleType);
                int ordenNota = 1;
                foreach (var hecho in hechosConNotas)
                {
                    ordenNota = 1;
                    //Locator para el hecho
                    var locator = xbrl.OwnerDocument.CreateElement(nsManager.LookupPrefix(EspacioNombresConstantes.LinkNamespace), EtiquetasXBRLConstantes.LocatorElement, 
                        EspacioNombresConstantes.LinkNamespace);
                    locator.SetAttribute(EtiquetasXBRLConstantes.TypeAttribute, EspacioNombresConstantes.XLinkNamespace, EtiquetasXBRLConstantes.LocatorAttributeType);
                    locator.SetAttribute(EtiquetasXBRLConstantes.HrefAttribute, EspacioNombresConstantes.XLinkNamespace, ConstantesGenerales.AnchorString + hecho.Id);
                    locator.SetAttribute(EtiquetasXBRLConstantes.LabelAttribute, EspacioNombresConstantes.XLinkNamespace,hecho.Id);
                    footNoteLink.AppendChild(locator);
                    int ind_nota = 1;
                    foreach (var nota in hecho.NotasAlPie)
                    {
                        var labFootNote = ConstantesGenerales.LAB_PREFIJO + hecho.Id + ConstantesGenerales.Underscore_String + ind_nota;
                        var footnote = xbrl.OwnerDocument.CreateElement(nsManager.LookupPrefix(EspacioNombresConstantes.LinkNamespace), EtiquetasXBRLConstantes.Footnote, 
                            EspacioNombresConstantes.LinkNamespace);
                        footnote.SetAttribute(EtiquetasXBRLConstantes.TypeAttribute, EspacioNombresConstantes.XLinkNamespace, EtiquetasXBRLConstantes.ResourceValueType);
                        footnote.SetAttribute(EtiquetasXBRLConstantes.LabelAttribute, EspacioNombresConstantes.XLinkNamespace, labFootNote);
                        footnote.SetAttribute(EtiquetasXBRLConstantes.RoleAttribute, EspacioNombresConstantes.XLinkNamespace, String.IsNullOrEmpty(nota.Rol) ? "http://www.xbrl.org/2003/role/footnote" : nota.Rol);
                        footnote.SetAttribute(EtiquetasXBRLConstantes.XmlLangAttributeCompleto, nota.Idioma);
                        footnote.AppendChild(xbrl.OwnerDocument.CreateTextNode(nota.Valor));

                        footNoteLink.AppendChild(footnote);

                        var footnoteArc = xbrl.OwnerDocument.CreateElement(nsManager.LookupPrefix(EspacioNombresConstantes.LinkNamespace), EtiquetasXBRLConstantes.FootnoteArc,
                        EspacioNombresConstantes.LinkNamespace);
                        footnoteArc.SetAttribute(EtiquetasXBRLConstantes.TypeAttribute, EspacioNombresConstantes.XLinkNamespace, EtiquetasXBRLConstantes.ArcValueType);
                        footnoteArc.SetAttribute(EtiquetasXBRLConstantes.ArcroleAttribute, EspacioNombresConstantes.XLinkNamespace, NotaAlPie.ArcoRolNota);
                        footnoteArc.SetAttribute(EtiquetasXBRLConstantes.FromAttribute, EspacioNombresConstantes.XLinkNamespace, hecho.Id);
                        footnoteArc.SetAttribute(EtiquetasXBRLConstantes.ToAttribute, EspacioNombresConstantes.XLinkNamespace, labFootNote);
                        footnoteArc.SetAttribute(EtiquetasXBRLConstantes.OrderAttribute,ordenNota.ToString());
                        
                        footNoteLink.AppendChild(footnoteArc);
                        ordenNota++;
                    }
                }

                



                xbrl.AppendChild(footNoteLink);
            }
        }
        /// <summary>
        /// Crea los elementos XML que representan declaraciones de hechos
        /// </summary>
        /// <param name="xbrl">Elemento al que serán agregadas las unidades</param>
        /// <param name="nsManager">Tabla de espacios de nombres</param>
        private void CrearHechosXml(XmlElement xbrl, XmlNamespaceManager nsManager)
        {
            foreach (var hecho in Hechos)
            {
               if(hecho.TuplaPadre == null)
               {
                   xbrl.AppendChild(CrearHechoXml(hecho, xbrl, nsManager));
               }
                    
            }
        }
        /// <summary>
        /// Procesa y crea un hecho XML , retorna el elemento creado
        /// </summary>
        /// <param name="hecho">Hecho a procesar</param>
        /// <param name="xbrl">Elemento XBRL raíz</param>
        /// <param name="nsManager">Tabla de espacios de nombres</param>
        /// <returns>Elemento XML creado</returns>
        private XmlElement CrearHechoXml(Fact hecho, XmlElement xbrl, XmlNamespaceManager nsManager)
        {
            XmlElement elementoResultado = null;
            //Determinar si se puede agregar un prefijo
            VerificarAgregarPrefijo(hecho.Concepto.Elemento.QualifiedName.Namespace,nsManager);


            elementoResultado = xbrl.OwnerDocument.CreateElement(nsManager.LookupPrefix(hecho.Concepto.Elemento.QualifiedName.Namespace), 
                    hecho.Concepto.Elemento.QualifiedName.Name, hecho.Concepto.Elemento.QualifiedName.Namespace);
            if(hecho is FactTuple)
            {
                foreach (var hechoEnTupla in (hecho as FactTuple).Hechos)
                {
                    elementoResultado.AppendChild(CrearHechoXml(hechoEnTupla,xbrl,nsManager));
                }
            }else
            {
                //Datos del hecho
                //contexto:
                if(hecho.Id != null)
                {
                    elementoResultado.SetAttribute(EtiquetasXBRLConstantes.IdAttribute,hecho.Id);
                }
                elementoResultado.SetAttribute(EtiquetasXBRLConstantes.ContextRefAttribute,
                                               (hecho as FactItem).Contexto.Id);
                if(hecho.IsNilValue)
                {
                    elementoResultado.SetAttribute("xsi:nil","true");
                }else
                {
                    var nodoValor = xbrl.OwnerDocument.CreateTextNode("");
                    if (hecho is FactFractionItem)
                    {
                        var hechoFraction = (hecho as FactFractionItem);

                        var numeradorXml = xbrl.OwnerDocument.CreateElement(nsManager.LookupPrefix(EspacioNombresConstantes.InstanceNamespace),
                        EtiquetasXBRLConstantes.Numerator, EspacioNombresConstantes.InstanceNamespace);

                        numeradorXml.AppendChild(xbrl.OwnerDocument.CreateTextNode(hechoFraction.Numerador.ToString(CultureInfo.InvariantCulture)));

                        var denominadorXml = xbrl.OwnerDocument.CreateElement(nsManager.LookupPrefix(EspacioNombresConstantes.InstanceNamespace),
                        EtiquetasXBRLConstantes.Denominator, EspacioNombresConstantes.InstanceNamespace);

                        denominadorXml.AppendChild(xbrl.OwnerDocument.CreateTextNode(hechoFraction.Denominador.ToString(CultureInfo.InvariantCulture)));

                        elementoResultado.AppendChild(numeradorXml);
                        elementoResultado.AppendChild(denominadorXml);


                        elementoResultado.SetAttribute(EtiquetasXBRLConstantes.UnitRefAttribute, hechoFraction.Unidad.Id);
                    }
                    else if (hecho is FactNumericItem)
                    {
                        var hechoNumeric = (hecho as FactNumericItem);
                        nodoValor.Value = hechoNumeric.Valor;
                        if (!String.IsNullOrEmpty(hechoNumeric.Decimales))
                        {
                            elementoResultado.SetAttribute(EtiquetasXBRLConstantes.DecimalsAttribute, hechoNumeric.Decimales);
                        }
                        if (!String.IsNullOrEmpty(hechoNumeric.Precision))
                        {
                            elementoResultado.SetAttribute(EtiquetasXBRLConstantes.PrecisionAttribute, hechoNumeric.Precision);
                        }
                        elementoResultado.SetAttribute(EtiquetasXBRLConstantes.UnitRefAttribute, hechoNumeric.Unidad.Id);
                    }
                    else
                    {
                        nodoValor.Value = (hecho as FactItem).Valor;
                    }
                    elementoResultado.AppendChild(nodoValor);
                }

            }
            return elementoResultado;
        }

        /// <summary>
        /// Busca si el espacio de nombres ya tiene un prefijo en el documento, si no, se intenta agregar uno
        /// buscando un prefijo utilizado en la taxonomía
        /// </summary>
        /// <param name="espacioNombres">Espacio de nombres a evaluar</param>
        /// <param name="nsManager">Tabla con la relación de espacios de nombres</param>
        private void VerificarAgregarPrefijo(string espacioNombres, XmlNamespaceManager nsManager)
        {
            if (String.IsNullOrEmpty(nsManager.LookupPrefix(espacioNombres)))
            {
                var prefijo = Taxonomia.ObtenerPrefijoDeEspacioNombres(espacioNombres);
                if (!String.IsNullOrEmpty(prefijo))
                {
                    nsManager.AddNamespace(prefijo, espacioNombres);
                }
            }
        }
        /// <summary>
        /// Crea los elementos XML que representan declaraciones de unidades
        /// </summary>
        /// <param name="xbrl">Elemento al que serán agregadas las unidades</param>
        /// <param name="nsManager">Tabla de espacios de nombres</param>
        private void CrearUnidadesXml(XmlElement xbrl, XmlNamespaceManager nsManager)
        {
            foreach (var unidad in Unidades.Values)
            {
                var elementoUnidad = xbrl.OwnerDocument.CreateElement(nsManager.LookupPrefix(Unit.XmlNamespace), Unit.XmlLocalName, Unit.XmlNamespace);
                elementoUnidad.SetAttribute(EtiquetasXBRLConstantes.IdAttribute,unidad.Id);
                if(unidad.Tipo == Unit.Medida)
                {
                    //Medida
                    foreach (var medida in unidad.Medidas)
                    {
                        var elementoMedida = CrearMedidaXml(medida, xbrl.OwnerDocument, nsManager);
                        elementoUnidad.AppendChild(elementoMedida);
                    }
                }else
                {
                    //Division
                    var division = xbrl.OwnerDocument.CreateElement(nsManager.LookupPrefix(Unit.XmlNamespace), EtiquetasXBRLConstantes.DivideElement , Unit.XmlNamespace);
                    var numerador = xbrl.OwnerDocument.CreateElement(nsManager.LookupPrefix(Unit.XmlNamespace), EtiquetasXBRLConstantes.UnitNumeratorElement, Unit.XmlNamespace);
                    division.AppendChild(numerador);
                    foreach (var medida in unidad.Numerador)
                    {
                        var elementoMedida = CrearMedidaXml(medida, xbrl.OwnerDocument, nsManager);
                        numerador.AppendChild(elementoMedida);
                    }
                    var denominador = xbrl.OwnerDocument.CreateElement(nsManager.LookupPrefix(Unit.XmlNamespace), EtiquetasXBRLConstantes.UnitDenominatorElement, Unit.XmlNamespace);
                    division.AppendChild(denominador);
                    foreach (var medida in unidad.Denominador)
                    {
                        var elementoMedida = CrearMedidaXml(medida, xbrl.OwnerDocument, nsManager);
                        denominador.AppendChild(elementoMedida);
                    }
                    elementoUnidad.AppendChild(division);
                }

                xbrl.AppendChild(elementoUnidad);

            }
        }

        /// <summary>
        /// Crea el elemento XML que representa a una unidad de medida
        /// </summary>
        /// <param name="medida">Datos de la medida a crear</param>
        /// <param name="ownerDocument">Documento padre</param>
        /// <param name="nsManager">Tabla de espacios de nombres</param>
        /// <returns></returns>
        private XmlNode CrearMedidaXml(Measure medida, XmlDocument ownerDocument, XmlNamespaceManager nsManager)
        {
            var prefijo = "";
            VerificarAgregarPrefijo(medida.Namespace, nsManager);
            prefijo = nsManager.LookupPrefix(medida.Namespace);
            if(String.IsNullOrEmpty(prefijo))
            {
                prefijo = medida.Namespace;
            }
            var elementoMedida = ownerDocument.CreateElement(nsManager.LookupPrefix(Measure.XmlNamespace), Measure.XmlLocalName, Measure.XmlNamespace);
            elementoMedida.AppendChild(ownerDocument.CreateTextNode(prefijo + ":" + medida.LocalName));
            return elementoMedida;
        }

        /// <summary>
        /// Crea los elementos XML que representan referencias a esquemas, linkbases, roles y arcos roles
        /// </summary>
        /// <param name="xbrl">Elemento raiz xbrl</param>
        /// <param name="nsManager">Tabla de espacios de nombres</param>
        private void CrearElementosArchivosImportados(XmlElement xbrl, XmlNamespaceManager nsManager)
        {
            XmlAttribute attr = null;
            foreach (var archivo in _archivosImportados.Where(x=>x.TipoArchivo == ArchivoImportadoDocumento.SCHEMA_REF))
            {
                var schemaRef = xbrl.OwnerDocument.CreateElement(nsManager.LookupPrefix(EspacioNombresConstantes.LinkNamespace),
                    EtiquetasXBRLConstantes.SchemaRef, EspacioNombresConstantes.LinkNamespace);
                schemaRef.SetAttribute(EtiquetasXBRLConstantes.TypeAttribute, EspacioNombresConstantes.XLinkNamespace,
                                       EtiquetasXBRLConstantes.SimpleType);
                schemaRef.SetAttribute(EtiquetasXBRLConstantes.HrefAttribute, EspacioNombresConstantes.XLinkNamespace,
                                       archivo.HRef);
                xbrl.AppendChild(schemaRef);
            }
        }

        /// <summary>
        /// Escribe los contextos XML en el documento en base a los datos del documento de instancia
        /// </summary>
        /// <param name="xbrl">Elemento padre</param>
        /// <param name="nsManager"> </param>
        private void CrearContextosXml(XmlElement xbrl, XmlNamespaceManager nsManager)
        {
            var xbrlDoc = xbrl.OwnerDocument;
            XmlAttribute attr = null;
            XmlText txt = null;



            foreach (var ctx in Contextos.Values)
            {
                XmlElement xmlContexto = xbrlDoc.CreateElement(nsManager.LookupPrefix(Context.XmlNamespace),Context.XmlLocalName, Context.XmlNamespace);
                attr = xbrlDoc.CreateAttribute(EtiquetasXBRLConstantes.IdAttribute);
                attr.Value = ctx.Id;
                xmlContexto.Attributes.SetNamedItem(attr);
                //entidad
                XmlElement entidad = xbrlDoc.CreateElement(nsManager.LookupPrefix(Entity.XmlNamespace), Entity.XmlLocalName, Entity.XmlNamespace);
                XmlElement identificador = xbrlDoc.CreateElement(nsManager.LookupPrefix(Entity.XmlNamespace), EtiquetasXBRLConstantes.Identifier, Entity.XmlNamespace);
                attr = xbrlDoc.CreateAttribute(EtiquetasXBRLConstantes.SchemeAttribute);
                attr.Value = ctx.Entidad.EsquemaId;
                identificador.Attributes.SetNamedItem(attr);
                txt = xbrlDoc.CreateTextNode(ctx.Entidad.Id);
                identificador.AppendChild(txt);
                entidad.AppendChild(identificador);

                //Si existe segmento
                if(ctx.Entidad.Segmento != null && ctx.Entidad.Segmento.MiembrosDimension != null)
                {
                    var segmento = xbrlDoc.CreateElement(nsManager.LookupPrefix(Entity.XmlNamespace),EtiquetasXBRLConstantes.Segment, Entity.XmlNamespace);
                    foreach (var valorDimension in ctx.Entidad.Segmento.MiembrosDimension)
                    {
                        segmento.AppendChild(CrearValorDimensionXml(xbrlDoc, valorDimension, nsManager));
                    }
                    entidad.AppendChild(segmento);
                }
                xmlContexto.AppendChild(entidad);

                //Periodo

                var periodo = xbrlDoc.CreateElement(nsManager.LookupPrefix(Period.XmlNamespace), Period.XmlLocalName, Period.XmlNamespace);
                
                if(ctx.Periodo.Tipo == Period.ParaSiempre)
                {
                    var paraSiempre = xbrlDoc.CreateElement(nsManager.LookupPrefix(Period.XmlNamespace),EtiquetasXBRLConstantes.Forever, Period.XmlNamespace);
                    periodo.AppendChild(paraSiempre);
                }else if(ctx.Periodo.Tipo == Period.Instante)
                {
                    var instante = xbrlDoc.CreateElement(nsManager.LookupPrefix(Period.XmlNamespace),EtiquetasXBRLConstantes.Instant, Period.XmlNamespace);
                    txt = xbrlDoc.CreateTextNode(XmlUtil.ToUnionDateTimeString(ctx.Periodo.FechaInstante));
                    instante.AppendChild(txt);
                    periodo.AppendChild(instante);
                }else
                {
                    var inicio = xbrlDoc.CreateElement(nsManager.LookupPrefix(Period.XmlNamespace),EtiquetasXBRLConstantes.StartDate, Period.XmlNamespace);
                    txt = xbrlDoc.CreateTextNode(XmlUtil.ToUnionDateTimeString(ctx.Periodo.FechaInicio));
                    inicio.AppendChild(txt);
                    periodo.AppendChild(inicio);
                    XmlElement fin = xbrlDoc.CreateElement(nsManager.LookupPrefix(Period.XmlNamespace),EtiquetasXBRLConstantes.EndDate, Period.XmlNamespace);
                    txt = xbrlDoc.CreateTextNode(XmlUtil.ToUnionDateTimeString(ctx.Periodo.FechaFin));
                    fin.AppendChild(txt);
                    periodo.AppendChild(fin);
                }
                xmlContexto.AppendChild(periodo);

                //Escenario

                if (ctx.Escenario != null && ctx.Escenario.MiembrosDimension != null && ctx.Escenario.MiembrosDimension.Count > 0)
                {
                    var scenario = xbrlDoc.CreateElement(nsManager.LookupPrefix(Entity.XmlNamespace), EtiquetasXBRLConstantes.Scenario, Entity.XmlNamespace);
                    foreach (var valorDimension in ctx.Escenario.MiembrosDimension)
                    {
                        scenario.AppendChild(CrearValorDimensionXml(xbrlDoc,valorDimension, nsManager));
                    }
                    xmlContexto.AppendChild(scenario);
                }
                xbrl.AppendChild(xmlContexto);
            }
        }

        /// <summary>
        /// Crea la declaración de un valor dimensional
        /// </summary>
        /// <param name="xbrlDoc"></param>
        /// <param name="valorDimension"> </param>
        /// <param name="nsManager"> </param>
        /// <returns></returns>
        private XmlNode CrearValorDimensionXml(XmlDocument xbrlDoc, MiembroDimension valorDimension, XmlNamespaceManager nsManager)
        {
           
            XmlElement miembroXml = null;

            VerificarAgregarPrefijo(valorDimension.Dimension.Elemento.QualifiedName.Namespace, nsManager);

            //Escribir valores dimensionales

            var prefijoDimension = nsManager.LookupPrefix(valorDimension.Dimension.Elemento.QualifiedName.Namespace);
            if (String.IsNullOrEmpty(prefijoDimension))
            {
                prefijoDimension = valorDimension.Dimension.Elemento.QualifiedName.Namespace;
            }

            if (valorDimension.Explicita)
            {
                //<xbrldi:explicitMember dimension="ifrs:ComponentsOfEquityAxis">mx-ifrs-ics:UtilidadesPerdidasAcumuladasMiembro</xbrldi:explicitMember>
                miembroXml = xbrlDoc.CreateElement(nsManager.LookupPrefix(EspacioNombresConstantes.DimensionInstanceNamespace), EtiquetasXBRLConstantes.ExplicitMemberElement, EspacioNombresConstantes.DimensionInstanceNamespace);
                miembroXml.SetAttribute(EtiquetasXBRLConstantes.DimensionAttribute,
                    prefijoDimension
                     + ":" +
                     valorDimension.Dimension.Elemento.QualifiedName.Name);

                VerificarAgregarPrefijo(valorDimension.ItemMiembro.Elemento.QualifiedName.Namespace, nsManager);
                var prefijoMiembro = nsManager.LookupPrefix(valorDimension.ItemMiembro.Elemento.QualifiedName.Namespace);
                if (String.IsNullOrEmpty(prefijoMiembro))
                {
                    prefijoMiembro = valorDimension.ItemMiembro.Elemento.QualifiedName.Namespace;
                }
                miembroXml.AppendChild(xbrlDoc.CreateTextNode(
                    prefijoMiembro
                    + ":" +
                    valorDimension.ItemMiembro.Elemento.QualifiedName.Name));
            }
            else
            {
                //<xbrldi:typedMember dimension="ifrs_mx-cor_20141205:PrincipalesProductosOLineaDeProductosEje">
                miembroXml = xbrlDoc.CreateElement(nsManager.LookupPrefix(EspacioNombresConstantes.DimensionInstanceNamespace), EtiquetasXBRLConstantes.TypedMemberElement, EspacioNombresConstantes.DimensionInstanceNamespace);
                miembroXml.SetAttribute(EtiquetasXBRLConstantes.DimensionAttribute,
                          prefijoDimension
                          + ":" +
                          valorDimension.Dimension.Elemento.QualifiedName.Name);
                var valorTyped = xbrlDoc.ImportNode(valorDimension.ElementoMiembroTipificado, true);
                miembroXml.AppendChild(valorTyped);
            }
            return miembroXml;
        }
        #endregion
    }
}
