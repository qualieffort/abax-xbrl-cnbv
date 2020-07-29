using AbaxXBRL.Taxonomia;
using AbaxXBRL.Taxonomia.Impl;
using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.Templates.Config;
using AbaxXBRLCore.Templates.Dto;
using AbaxXBRLCore.Viewer.Application.Dto;
using AbaxXBRLCore.Viewer.Application.Import.Impl;
using AbaxXBRLCore.Viewer.Application.Model;
using AbaxXBRLCore.Viewer.Application.Service;
using AbaxXBRLCore.Viewer.Application.Service.Impl;
using Aspose.Words;
using Aspose.Words.Drawing;
using Aspose.Words.Lists;
using Aspose.Words.Markup;
using Aspose.Words.Properties;
using Aspose.Words.Rendering;
using Aspose.Words.Saving;
using Newtonsoft.Json;
using Spring.Context;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading;

namespace AbaxXBRLCore.Templates.Builder
{
    public class PlantillaNotasBuilder: IApplicationContextAware
    {
        /// <summary>
        /// Application context relacionado con la creación de este objeto 
        /// </summary>
        private IApplicationContext _appContext = null;
        public IApplicationContext ApplicationContext
        {
            set
            {
                _appContext = value;
            }
        }
        /// <summary>
        /// Inicializamos la licencia de aspose.
        /// </summary>
        static PlantillaNotasBuilder() 
        {
		    // Inicializa la licencia de ASPOSE Words
            ActivadorLicenciaAsposeUtil.ActivarAsposeWords();
	    }
        /// <summary>
        /// Bandera que indica si se debe de incluir el contenido de las notas.
        /// </summary>
        private bool IncluirContenidoNotas;

        private String VersionPlantilla;

        private IXbrlViewerService XbrlService;

        private IList<String> Roles;

        private DocumentoInstanciaXbrlDto docInstancia;

        //private String UrlTaxonomia;

        private String Lenguaje;

        private Document plantilla;

        private DocumentBuilder plantillaBuilder;

        private IDictionary<String, IDictionary<String, String>> EtiquetasPlantillas;

        private int indexXBRL = 1;

        private int indiceRol = 0;

        private int indexXBRLSerie = 1;

        private StreamWriter file;

        /// <summary>
        /// Caracteres usados para reemplazar.
        /// </summary>
        private static string _dosPuntos = ":";

        private static string _diagonal = "/";

        private static string _punto = ".";

        private static string _guion = "-";

        private static string _caracterReemplazo = "_";

        private static string _puntoXSD = ".xsd";

        private static string TAG_ABAX_XBRL_HECHO = "ABAX_XBRL_HECHO";

        private static string TAG_ABAX_XBRL_TITULO = "ABAX_XBRL_TITULO";

        private static string VERSION_PLANTILLA_ID = "Version Plantilla";
        private static string ESPACIO_NOMBRES_ID = "Espacio Nombres";
        /// <summary>
        /// Definición del campo buscado
        /// </summary>
        private Regex REGEXP_DEFINICION_CAMPO = new Regex("AbaxXBRL_Def\\:\\{.+\\}", RegexOptions.Compiled | RegexOptions.Multiline);
        private Regex REGEXP_NO_CAMPOVACIO = new Regex("\\S", RegexOptions.Compiled | RegexOptions.Multiline);

        /// <summary>
        /// Expresion regular para identificar saltos de sección en una expresión HTML generada a partir de Word.
        /// </summary>
        private Regex REGEXP_SALTO_SECCION = new Regex("<br style=\"page\\-break\\-before:always; clear:both; mso\\-break\\-type:section\\-break\" \\/>", RegexOptions.Compiled | RegexOptions.Multiline);
        /// <summary>
        /// Expresion regular para identificar parrafos vacios.
        /// </summary>
        private Regex REGEXP_PARRAFO_VACIO = new Regex(@"<p[ \t]*>[ \t]*&nbsp;[ \t]*<\/p[ \t]*>", RegexOptions.Compiled | RegexOptions.Multiline);
        /// <summary>
        /// Expresion regular para identificar los vinculos (anclas) sin el atributo "href".
        /// </summary>
        private Regex REGEXP_VINCULOS_SIN_HREF = new Regex("(<a[\\s\\t]+((?!href[\\s\\t]*=).)*?)([\\s\\t]*>)+?", RegexOptions.Compiled | RegexOptions.Multiline);
        /// <summary>
        /// Expresion regular para identificar los vinculos (anclas) vacios.
        /// </summary>
        private Regex REGEXP_VINCULOS_VACIOS = new Regex("<a([\\s\\t]*(\\S+)=((\"[^\"]+\")|('[^']+'))[\\s\\t]*)+>[\\s\\t]*</a>", RegexOptions.Compiled | RegexOptions.Multiline);
        /// <summary>
        /// Expresion regular para identificar estilos de error.
        /// </summary>
        private Regex REGEXP_ESTILOS_ERROR = new Regex("mso-break-type(\\s*\\:{1}\\s*)section-break(\\;\\s*)?", RegexOptions.Compiled | RegexOptions.Multiline);
        /// <summary>
        /// Expresion regular para identificar la apertura de la etiqueta titulo.
        /// </summary>
        private Regex REGEXP_ESTILOS_TITULOS_APERTURA = new Regex("<(h|H)\\d{1,2}(?=(([\\s\\t])|(>)))", RegexOptions.Compiled | RegexOptions.Multiline);
        /// <summary>
        /// Expresion regular para identificar el cierre de la etiqueta titulo.
        /// </summary>
        private Regex REGEXP_ESTILOS_TITULOS_CIERRE = new Regex("<\\/(h|H)\\d{1,2}(?=(([\\s\\t])|(>)))", RegexOptions.Compiled | RegexOptions.Multiline);
        /// <summary>
        /// Expresion regular para identificar los elementos vacios de una lista.
        /// </summary>
        private Regex REGEXP_ELEMENTO_LISTA_VACIO = new Regex("<li[\\s\\t]+.+?\\/>", RegexOptions.Compiled | RegexOptions.Multiline);

        /// <summary>
        /// Anexos, taxonomias y ruta.
        /// </summary>
        String [] anexos = {"H","HBIS","HBIS1","HBIS2","HBIS2","HBIS3","HBIS4","HBIS5","I","L","N","NBIS","NBIS1","NBIS2","NBIS3","NBIS4","NBIS5","O"};
        
        String taxonimiaRaProspecto = "ra_prospecto";

        String taxonomiaAr = "AR";
        
        String PATH = "AbaxXBRLCore.Config.templates.";
        

        DefinicionElementosPlantillaXbrl definicionElementosPlantillaXbrl;

        /// <summary>
        /// Definición de la plantilla del documento de instancia
        /// </summary>
        IDefinicionPlantillaXbrl definicionPlantillaXbrl;
        /// <summary>
        /// Diccionario con los conceptos a colorear.
        /// </summary>
        IDictionary<string, string> conceptosColorear;


        String nombreTaxonomia;

        public PlantillaNotasBuilder(String path, bool incluirContenidoNotas) : this(path, incluirContenidoNotas,"es") { }
        
        public PlantillaNotasBuilder(String path, bool incluirContenidoNotas, String idioma)
        {
            this.Lenguaje = idioma.ToLowerInvariant();
            this.EtiquetasPlantillas = PlantillasNotasUtil.obtenerJSON<IDictionary<String, IDictionary<String, String>>>(PlantillasNotasUtil.PATH_ETIQUETAS_PLANTILLAS_JSON);

            this.XbrlService = new XbrlViewerService();

            this.docInstancia = GeneraDocumentoXbrl(path);

            this.VersionPlantilla = ObtenValorEtiqueta("VERSION_PLANTILLA_NOTAS").ToLower().Trim();
            this.IncluirContenidoNotas = incluirContenidoNotas;
        }

        public PlantillaNotasBuilder(DocumentoInstanciaXbrlDto docInstancia, bool incluirContenidoNotas) : this(docInstancia, incluirContenidoNotas, "es") { }

        public PlantillaNotasBuilder(DocumentoInstanciaXbrlDto docInstancia, bool incluirContenidoNotas, String idioma, IDictionary<string,string> conceptosColorear = null)
        {
            this.Lenguaje = idioma.ToLowerInvariant();
            this.EtiquetasPlantillas = PlantillasNotasUtil.obtenerJSON<IDictionary<String, IDictionary<String, String>>>(PlantillasNotasUtil.PATH_ETIQUETAS_PLANTILLAS_JSON);

            this.docInstancia = docInstancia;

            this.VersionPlantilla = ObtenValorEtiqueta("VERSION_PLANTILLA_NOTAS").ToLower().Trim();
            this.IncluirContenidoNotas = incluirContenidoNotas;
            this.conceptosColorear = conceptosColorear;
        }

        private DocumentoInstanciaXbrlDto GeneraDocumentoXbrl(String path)
        {
            var documentoInstancia = new DocumentoInstanciaXBRL();
            documentoInstancia.Cargar(new FileStream(path, FileMode.Open));
            var viewService = new XbrlViewerService();
            var instanciaDto = viewService.PreparaDocumentoParaVisor(documentoInstancia, null);
            instanciaDto.EspacioNombresPrincipal = instanciaDto.Taxonomia.EspacioDeNombres;

            return instanciaDto;
        }

        private TaxonomiaDto CargarTaxonomia(String urlTaxonomia)
        {
            TaxonomiaXBRL taxonomiaXBRL = new TaxonomiaXBRL();

            IManejadorErroresXBRL manejadorErrores = new ManejadorErroresCargaTaxonomia();

            taxonomiaXBRL.ManejadorErrores = manejadorErrores;
            taxonomiaXBRL.ProcesarDefinicionDeEsquema(urlTaxonomia);
            taxonomiaXBRL.CrearArbolDeRelaciones();

            TaxonomiaDto taxDto = XbrlService.CrearTaxonomiaAPartirDeDefinicionXbrl(taxonomiaXBRL);

            return taxDto;
        }

        public void build()
        {
            inicializaDocumento();
            escribirMetadatos();
            //escribirVersion();
            plantillaBuilder.MoveToDocumentEnd();
            obtenerNombreAnexo(indiceRol);
            escribirTitulo();
            plantillaBuilder.MoveToDocumentEnd();
            //escribirIndice();
            plantillaBuilder.MoveToDocumentEnd();
            escribirInstrucciones();
            plantillaBuilder.MoveToDocumentEnd();
            escribirFormatos();
        }
        /// <summary>
        /// Importa de una definición de plantilla de notas 
        /// </summary>
        /// <param name="notasWord"></param>
        /// <param name="documentoInstancia"></param>
        /// <param name="crearHechoSiNoExiste"></param>
        public ResultadoOperacionDto ImportarNotas(Stream notasWord, DocumentoInstanciaXbrlDto documentoInstancia, bool crearHechoSiNoExiste = false)
        {
            var resultado = new ResultadoOperacionDto();
            resultado.Resultado = true;
            var documentImportarWord = new Document(notasWord);

            if (_appContext != null)
            {
                var entryPointTax = ImportadorExportadorBase.ObtenerPlantillaTaxonomiaId(documentoInstancia.EspacioNombresPrincipal);
                if (_appContext.ContainsObject(entryPointTax))
                {
                    definicionPlantillaXbrl = (IDefinicionPlantillaXbrl)_appContext.GetObject(entryPointTax);
                    try
                    {
                        definicionPlantillaXbrl.Inicializar(docInstancia);
                    }
                    catch (Exception ex)
                    {
                        //System.Console.WriteLine(ex.StackTrace);
                    }

                }
            }


            if (definicionPlantillaXbrl != null)
            {
                var numVersionConf = definicionPlantillaXbrl.ObtenerNumeroVersionPlantilla();
                if (numVersionConf != null)
                {
                    //Validar versión y taxonomía
                    var customMetadata = documentImportarWord.CustomDocumentProperties;
                    var versionDocumento = "";
                    var espacioNombresDocumento = "";

                    if (customMetadata.Contains(VERSION_PLANTILLA_ID))
                    {
                        versionDocumento = customMetadata[VERSION_PLANTILLA_ID].ToString();
                    }
                    if (customMetadata.Contains(ESPACIO_NOMBRES_ID))
                    {
                        espacioNombresDocumento = customMetadata[ESPACIO_NOMBRES_ID].ToString();
                    }
                                        
                    if (!docInstancia.EspacioNombresPrincipal.Equals(espacioNombresDocumento))
                    {
                        resultado.Resultado = false;
                        resultado.Mensaje = "La plantilla no corresponde a la taxonomía actual: \n" + docInstancia.Taxonomia.nombreAbax;
                    }
                    else
                    {
                        if (!numVersionConf.Equals(versionDocumento))
                        {
                            resultado.Resultado = false;
                            resultado.Mensaje = "La versión de plantilla del documentono no corresponde a la versión de plantilla de la taxonomía actual:" + numVersionConf;
                        }
                    }

                    
                }
                
            }

            if (resultado.Resultado)
            {
                var structureNodesTagCollection = documentImportarWord.GetChildNodes(NodeType.StructuredDocumentTag, true);
                var serializerSettings = new JsonSerializerSettings();
                serializerSettings.DateTimeZoneHandling = DateTimeZoneHandling.Utc;
                var nodesCount = structureNodesTagCollection.Count;
                for (var nodeIndex = 0; nodeIndex < nodesCount; nodeIndex++)
                {
                    StructuredDocumentTag structureDocumentTag = (StructuredDocumentTag)structureNodesTagCollection[nodeIndex];
                    if (!String.IsNullOrWhiteSpace(structureDocumentTag.Tag) && structureDocumentTag.Tag.StartsWith(TAG_ABAX_XBRL_HECHO))
                    {
                        var tagText = structureDocumentTag.GetText();
                        if (!REGEXP_DEFINICION_CAMPO.IsMatch(tagText))
                        {
                            continue;
                        }
                        var match = REGEXP_DEFINICION_CAMPO.Match(tagText);
                        var defString = match.Value.Remove(0, 13);
                        var definicionCampoEntradaWord = (DefinicionCampoEntradaWord)JsonConvert.DeserializeObject(defString, typeof(DefinicionCampoEntradaWord), serializerSettings);
                        IList<String> idsHechosPorConcepto;
                        var idConcepto = definicionCampoEntradaWord.IdConcepto;
                        if (!String.IsNullOrEmpty(idConcepto))
                        {
                            try
                            {
                                if (documentoInstancia.HechosPorIdConcepto.TryGetValue(idConcepto, out idsHechosPorConcepto) && idsHechosPorConcepto.Count > 0)
                                {
                                    var endNode = ObtenSiguienteNodoFin(nodeIndex + 1, structureNodesTagCollection);
                                    var valorHecho = ObtenContenidoHTLSeccionWord(documentImportarWord, structureDocumentTag, endNode);
                                    if (String.IsNullOrEmpty(valorHecho))
                                    {
                                        continue;
                                    }
                                    foreach (var idHecho in idsHechosPorConcepto)
                                    {
                                        Viewer.Application.Dto.HechoDto hecho;
                                        if (documentoInstancia.HechosPorId.TryGetValue(idHecho, out hecho))
                                        {
                                            hecho.Valor = valorHecho;
                                        }
                                    }
                                }
                            }
                            catch (Exception ex)
                            {
                                LogUtil.Error(new Dictionary<String, object>()
                            {
                                {"Error", "Error al exportar concepto a excel" },
                                {"IdConcepto", idConcepto},
                                {"Excepcion", ex }
                            });
                            }
                        }
                    }
                }
            }



            
            return resultado;
        }

        private Node ObtenSiguienteNodoFin(int indexFrom, NodeCollection nodeCollection)
        {
            Node nodo = null;
            for (var nodeIndex = indexFrom; nodeIndex < nodeCollection.Count; nodeIndex++)
            {
                var nodoItera = (StructuredDocumentTag) nodeCollection[nodeIndex];
                if (!String.IsNullOrEmpty(nodoItera.Tag) && 
                        (nodoItera.Tag.StartsWith(TAG_ABAX_XBRL_HECHO) || 
                         nodoItera.Tag.StartsWith(TAG_ABAX_XBRL_TITULO)) )
                {
                    nodo = nodoItera;
                    break;
                }
            }
            return nodo;
        }

        /// <summary>
        /// Obtiene el contenido entre dos nodos de un documento.
        /// </summary>
        /// <param name="srcDoc">Documento a procesar.</param>
        /// <param name="startNode">Nodo inicial.</param>
        /// <param name="endNode">Nodo final.</param>
        /// <returns>Contenido HTML</returns>
        public String ObtenContenidoHTLSeccionWord(Document srcDoc,Node startNode, Node endNode)
        {

            var extractedNodes = ExtractContent(startNode, endNode, false);
            var documentoSeccion = GenerateDocument(srcDoc, extractedNodes);
            var saveOptions = new HtmlSaveOptions
            {
                ExportImagesAsBase64 = true,
                ExportHeadersFootersMode = ExportHeadersFootersMode.None,
                PrettyFormat = true,
                CssStyleSheetType = CssStyleSheetType.Inline,
                Encoding = Encoding.GetEncoding("ISO-8859-1")
            };

            EliminaElementosIncompatibles(documentoSeccion);
            var textoDocumento = documentoSeccion.GetText();
            String contenidoHTML = null;
            bool contieneTexto = REGEXP_NO_CAMPOVACIO.IsMatch(textoDocumento);
            bool contieneFormas = false;
            if (!contieneTexto)
            {
                var shapes = documentoSeccion.GetChildNodes(NodeType.Shape, true);
                contieneFormas = shapes.Count > 0;
            }
            if (contieneTexto || contieneFormas)
            {
                var htmlStream = new MemoryStream();
                try
                {
                    documentoSeccion.Save(htmlStream, saveOptions);
                }
                catch (Exception)
                {
                    TransformaFormasAImagnes(documentoSeccion);
                    documentoSeccion.Save(htmlStream, saveOptions);
                }
                contenidoHTML = Encoding.GetEncoding("ISO-8859-1").GetString(htmlStream.ToArray());
                contenidoHTML = DepuraContenidoHTML(contenidoHTML);
            }
            
            return contenidoHTML;
        }
        /// <summary>
        /// Elimina elementos incompatibles como son commentarios y notas.
        /// </summary>
        /// <param name="documento">Documento a evaluar.</param>
        public void EliminaElementosIncompatibles(Document documento)
        {
            try
            {
                var commentsCollection = documento.GetChildNodes(NodeType.Comment, true);
                foreach (var comment in commentsCollection)
                {
                    ((Comment)comment).Remove();
                }
            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
            }
        }

        /// <summary>
        /// Depura el contenido html para eliminar elementos no adecuados.
        /// </summary>
        /// <param name="html">Texto con hipertexto a depurar.</param>
        /// <returns>Texto html depurado.</returns>
        public String DepuraContenidoHTML(String contenidoHtml)
        {
            var ajustado = contenidoHtml;
            try
            {
                ajustado = EliminarEtiquetasNoCompatibles(ajustado);
                var stringBuilder = new StringBuilder();
                stringBuilder.Append("<p style='font-family:Arial;font-size: 8pt'>");
                stringBuilder.Append(ajustado);
                stringBuilder.Append(" </ p > ");
                ajustado = stringBuilder.ToString();
            }
            catch (Exception e)
            {
                LogUtil.Error(e);
            }
            return ajustado;
        }
        /// <summary>
        /// Elimina elementos no compatibles con la plantilla de notas.
        /// </summary>
        /// <param name="valorEntrada">Elimina elementos no compatibles con las plantillas</param>
        /// <returns></returns>
        public string EliminarEtiquetasNoCompatibles(String valorEntrada)
        {
            var valor = String.IsNullOrWhiteSpace(valorEntrada) ? String.Empty : valorEntrada;
            valor = REGEXP_SALTO_SECCION.Replace(valor, String.Empty);
            valor = REGEXP_PARRAFO_VACIO.Replace(valor, String.Empty);
            valor = REGEXP_VINCULOS_VACIOS.Replace(valor, String.Empty);
            valor = REGEXP_ESTILOS_ERROR.Replace(valor, String.Empty);
            valor = REGEXP_ELEMENTO_LISTA_VACIO.Replace(valor, String.Empty);
            valor = REGEXP_ESTILOS_TITULOS_APERTURA.Replace(valor, "<p");
            valor = REGEXP_ESTILOS_TITULOS_CIERRE.Replace(valor, "</p");
            if (REGEXP_VINCULOS_SIN_HREF.IsMatch(valor))
            {
                valor = REGEXP_VINCULOS_SIN_HREF.Replace(valor, "$1 href=\"#\" >");
            }
            return valor;
        }

        /// <summary>
        /// Transforma todas las fomras (graficos, dibujos, imagenes, etc) a imagenes png.
        /// </summary>
        /// <param name="documento"></param>
        /// <returns>Si fue posible transformar todas las formas del documento.</returns>
        public bool TransformaFormasAImagnes(Document documento)
        {
            var transformado = true;
            try
            {
                var collectionShapes = documento.GetChildNodes(NodeType.Shape, true);
                var listaShapes = new List<object>();
                foreach (var item in collectionShapes)
                {
                    listaShapes.Add(item);
                }
                var builder = new DocumentBuilder(documento);
                foreach (var nodeItem in listaShapes)
                {
                    var shape = (Shape)nodeItem;
                    try
                    {   
                        ShapeRenderer renderer = shape.GetShapeRenderer();
                        using (MemoryStream imageStream = new MemoryStream())
                        {
                            renderer.Save(imageStream, new ImageSaveOptions(SaveFormat.Png));
                            builder.MoveTo(shape);
                            builder.InsertImage(imageStream);
                            shape.Remove();
                        }
                    }
                    catch (Exception ex)
                    {
                        LogUtil.Error(ex);
                        shape.Remove();
                    }
                }
            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
                transformado = false;
            }
            return transformado;
        }

        public static Document GenerateDocument(Document srcDoc, IList<Node> nodes)
        {
            // Create a blank document.
            Document dstDoc = new Document();
            // Remove the first paragraph from the empty document.
            dstDoc.FirstSection.Body.RemoveAllChildren();

            // Import each node from the list into the new document. Keep the original formatting of the node.
            NodeImporter importer = new NodeImporter(srcDoc, dstDoc, ImportFormatMode.KeepSourceFormatting);

            foreach (Node node in nodes)
            {
                Node importNode = importer.ImportNode(node, true);
                dstDoc.FirstSection.Body.AppendChild(importNode);
            }

            // Return the generated document.
            return dstDoc;
        }

        public static IList<Node> ExtractContent(Node startNode, Node endNode, bool isInclusive)
        {
            // First check that the nodes passed to this method are valid for use.
            if(endNode != null)
            {
                VerifyParameterNodes(startNode, endNode);
            }
            

            // Create a list to store the extracted nodes.
            var nodes = new List<Node>();

            // Keep a record of the original nodes passed to this method so we can split marker nodes if needed.
            Node originalStartNode = startNode;
            Node originalEndNode = endNode;

            // Extract content based on block level nodes (paragraphs and tables). Traverse through parent nodes to find them.
            // We will split the content of first and last nodes depending if the marker nodes are inline
            while (startNode.ParentNode.NodeType != NodeType.Body)
                startNode = startNode.ParentNode;

            if (endNode != null)
            {
                while (endNode.ParentNode.NodeType != NodeType.Body)
                    endNode = endNode.ParentNode;
            }
            bool isExtracting = true;
            bool isStartingNode = true;
            bool isEndingNode = false;
            // The current node we are extracting from the document.
            Node currNode = startNode;

            // Begin extracting content. Process all block level nodes and specifically split the first and last nodes when needed so paragraph formatting is retained.
            // Method is little more complex than a regular extractor as we need to factor in extracting using inline nodes, fields, bookmarks etc as to make it really useful.
            while (isExtracting && currNode != null)
            {
                // Clone the current node and its children to obtain a copy.
                CompositeNode cloneNode = (CompositeNode)currNode.Clone(true);
                isEndingNode = endNode != null && currNode.Equals(endNode);

                if (isStartingNode || isEndingNode)
                {
                    // We need to process each marker separately so pass it off to a separate method instead.
                    if (isStartingNode)
                    {
                        ProcessMarker(cloneNode, nodes, originalStartNode, isInclusive, isStartingNode, isEndingNode);
                        isStartingNode = false;
                    }

                    // Conditional needs to be separate as the block level start and end markers maybe the same node.
                    if (isEndingNode)
                    {
                        ProcessMarker(cloneNode, nodes, originalEndNode, isInclusive, isStartingNode, isEndingNode);
                        isExtracting = false;
                    }
                }
                else
                    // Node is not a start or end marker, simply add the copy to the list.
                    nodes.Add(cloneNode);

                // Move to the next node and extract it. If next node is null that means the rest of the content is found in a different section.
                if (currNode.NextSibling == null && isExtracting)
                {
                    // Move to the next section.
                    Section nextSection = (Section)currNode.GetAncestor(NodeType.Section).NextSibling;
                    if (nextSection != null)
                    {
                        currNode = nextSection.Body.FirstChild;
                    }
                    else
                    {
                        currNode = null;
                    }
                }
                else
                {
                    // Move to the next node in the body.
                    currNode = currNode.NextSibling;
                }
            }

            // Return the nodes between the node markers.
            return nodes;
        }

        private static void VerifyParameterNodes(Node startNode, Node endNode)
        {
            // The order in which these checks are done is important.
            if (startNode == null)
                throw new ArgumentException("Start node cannot be null");
            if (endNode == null)
                throw new ArgumentException("End node cannot be null");

            if (!startNode.Document.Equals(endNode.Document))
                throw new ArgumentException("Start node and end node must belong to the same document");

            if (startNode.GetAncestor(NodeType.Body) == null || endNode.GetAncestor(NodeType.Body) == null)
                throw new ArgumentException("Start node and end node must be a child or descendant of a body");

            // Check the end node is after the start node in the DOM tree
            // First check if they are in different sections, then if they're not check their position in the body of the same section they are in.
            Section startSection = (Section)startNode.GetAncestor(NodeType.Section);
            Section endSection = (Section)endNode.GetAncestor(NodeType.Section);

            int startIndex = startSection.ParentNode.IndexOf(startSection);
            int endIndex = endSection.ParentNode.IndexOf(endSection);

            if (startIndex == endIndex)
            {
                if (startSection.Body.IndexOf(startNode) > endSection.Body.IndexOf(endNode))
                    throw new ArgumentException("The end node must be after the start node in the body");
            }
            else if (startIndex > endIndex)
                throw new ArgumentException("The section of end node must be after the section start node");
        }

        private static bool IsInline(Node node)
        {
            // Test if the node is desendant of a Paragraph or Table node and also is not a paragraph or a table a paragraph inside a comment class which is decesant of a pararaph is possible.
            return ((node.GetAncestor(NodeType.Paragraph) != null || node.GetAncestor(NodeType.Table) != null) && !(node.NodeType == NodeType.Paragraph || node.NodeType == NodeType.Table));
        }

        private static void ProcessMarker(CompositeNode cloneNode, IList<Node> nodes, Node node, bool isInclusive, bool isStartMarker, bool isEndMarker)
        {
            // If we are dealing with a block level node just see if it should be included and add it to the list.
            if (!IsInline(node))
            {
                // Don't add the node twice if the markers are the same node
                if (!(isStartMarker && isEndMarker))
                {
                    if (isInclusive)
                        nodes.Add(cloneNode);
                }
                return;
            }

            // If a marker is a FieldStart node check if it's to be included or not.
            // We assume for simplicity that the FieldStart and FieldEnd appear in the same paragraph.
            if (node.NodeType == NodeType.FieldStart)
            {
                // If the marker is a start node and is not be included then skip to the end of the field.
                // If the marker is an end node and it is to be included then move to the end field so the field will not be removed.
                if ((isStartMarker && !isInclusive) || (!isStartMarker && isInclusive))
                {
                    while (node.NextSibling != null && node.NodeType != NodeType.FieldEnd)
                        node = node.NextSibling;

                }
            }

            // If either marker is part of a comment then to include the comment itself we need to move the pointer forward to the Comment
            // Node found after the CommentRangeEnd node.
            if (node.NodeType == NodeType.CommentRangeEnd)
            {
                while (node.NextSibling != null && node.NodeType != NodeType.Comment)
                    node = node.NextSibling;

            }

            // Find the corresponding node in our cloned node by index and return it.
            // If the start and end node are the same some child nodes might already have been removed. Subtract the
            // Difference to get the right index.
            int indexDiff = node.ParentNode.ChildNodes.Count - cloneNode.ChildNodes.Count;

            // Child node count identical.
            if (indexDiff == 0)
                node = cloneNode.ChildNodes[node.ParentNode.IndexOf(node)];
            else
                node = cloneNode.ChildNodes[node.ParentNode.IndexOf(node) - indexDiff];

            // Remove the nodes up to/from the marker.
            bool isSkip = false;
            bool isProcessing = true;
            bool isRemoving = isStartMarker;
            Node nextNode = cloneNode.FirstChild;

            while (isProcessing && nextNode != null)
            {
                Node currentNode = nextNode;
                isSkip = false;

                if (currentNode.Equals(node))
                {
                    if (isStartMarker)
                    {
                        isProcessing = false;
                        if (isInclusive)
                            isRemoving = false;
                    }
                    else
                    {
                        isRemoving = true;
                        if (isInclusive)
                            isSkip = true;
                    }
                }

                nextNode = nextNode.NextSibling;
                if (isRemoving && !isSkip)
                    currentNode.Remove();
            }

            // After processing the composite node may become empty. If it has don't include it.
            if (!(isStartMarker && isEndMarker))
            {
                if (cloneNode.HasChildNodes)
                    nodes.Add(cloneNode);
            }

        }



        private void InsertaElementos(IList<EstructuraFormatoDto> estructuras, Stream notasWord, DocumentoInstanciaXbrlDto documentoInstancia,bool crearHechoSiNoExiste)
        {
            if (estructuras != null && estructuras.Count() > 0)
            {
                foreach (var estructura in estructuras)
                {
                    if (docInstancia.Taxonomia.ConceptosPorId.ContainsKey(estructura.IdConcepto))
                    {
                        var concepto = docInstancia.Taxonomia.ConceptosPorId[estructura.IdConcepto];

                        if (concepto.TipoDato.Contains(PlantillasNotasUtil.TIPO_DATO_TEXT_BLOCK) && concepto.EsAbstracto == false)
                        {
                            if (!verificaContextoEnHipercubo(concepto.Id))
                            {
                                AsignaHechoNota(concepto.Id, notasWord, documentoInstancia, crearHechoSiNoExiste);
                            }
                        }

                        if (estructura.SubEstructuras != null && estructura.SubEstructuras.Count > 0)
                        {
                            InsertaElementos(estructura.SubEstructuras, notasWord, documentoInstancia, crearHechoSiNoExiste);
                        }
                    }
                }
            }
        }

        private void AsignaHechoNota(String idConcepto, Stream notasWord, DocumentoInstanciaXbrlDto documentoInstancia, bool crearHechoSiNoExiste)
        {
            
        }

        private void inicializaDocumento()
        {
            this.plantilla = new Document();
            this.plantillaBuilder = new DocumentBuilder(plantilla);

            plantillaBuilder.MoveToDocumentEnd();
            
            if (_appContext != null)
            {
                var entryPointTax = ImportadorExportadorBase.ObtenerPlantillaTaxonomiaId(docInstancia.EspacioNombresPrincipal);
                if (_appContext.ContainsObject(entryPointTax))
                {
                    definicionPlantillaXbrl = (IDefinicionPlantillaXbrl)_appContext.GetObject(entryPointTax);
                    try
                    {
                        definicionPlantillaXbrl.Inicializar(docInstancia);
                    }
                    catch(Exception ex)
                    {
                        //System.Console.WriteLine(ex.StackTrace);
                    }
                    
                }
            }

        }

        private void escribirMetadatos()
        {
            BuiltInDocumentProperties metadata = plantilla.BuiltInDocumentProperties;
            CustomDocumentProperties customMetadata = plantilla.CustomDocumentProperties;

            metadata.Author = ObtenValorEtiqueta("ETIQUETA_2H_SOFTWARE");
            metadata.Company = ObtenValorEtiqueta("ETIQUETA_2H_SOFTWARE");
            metadata.Title = ObtenValorEtiqueta("ETIQUETA_TITULO_DOCUMENTO");
            
            if (definicionPlantillaXbrl != null) {

                var numVersionConf = definicionPlantillaXbrl.ObtenerNumeroVersionPlantilla();
                if(numVersionConf != null)
                {
                    VersionPlantilla = numVersionConf;
                    customMetadata.Add("Version Plantilla", VersionPlantilla);
                    customMetadata.Add("Espacio Nombres", docInstancia.EspacioNombresPrincipal);
                }
                
            }

            
        }

        private void escribirVersion()
        {
            FormatoParrafo formato = FormatoParrafo.VersionOculto;

            plantillaBuilder.Font.Name = FontNameAttribute.Get(formato);
            plantillaBuilder.Font.Size = FontSizeAttribute.Get(formato);
            plantillaBuilder.Font.Color = ColorAttribute.Get(formato);
            plantillaBuilder.Font.Hidden = HiddenAttribute.Get(formato);
            plantillaBuilder.Write(VersionPlantilla);

            plantillaBuilder.Font.ClearFormatting();
        }

        private void escribirTitulo()
        {
            StructuredDocumentTag contenidoTitulo = crearContenidoTextoPlano();

            crearParrafosVacios(contenidoTitulo.ChildNodes, 5, FormatoParrafo.CaratulaPlantilla);
            contenidoTitulo.AppendChild(crearParrafo(ObtenValorEtiqueta("ETIQUETA_ABAX_XBRL"), FormatoParrafo.CaratulaPlantilla));
            crearParrafosVacios(contenidoTitulo.ChildNodes, 3, FormatoParrafo.CaratulaPlantilla);
            contenidoTitulo.AppendChild(crearParrafo(ObtenValorEtiqueta("ETIQUETA_CARATULA_1"), FormatoParrafo.CaratulaPlantilla));
            crearParrafosVacios(contenidoTitulo.ChildNodes, 1, FormatoParrafo.CaratulaPlantilla);
            var nobreTaxonomia = docInstancia.Taxonomia.nombreAbax;
            if (!String.IsNullOrEmpty(nobreTaxonomia))
            {
                contenidoTitulo.AppendChild(crearParrafo(nobreTaxonomia, FormatoParrafo.CaratulaPlantilla));
            }
            //contenidoTitulo.AppendChild(crearParrafo("TAXONOMÍA BMV " + obtenerNombre(docInstancia.Taxonomia.PrefijoTaxonomia) + " 2016", FormatoParrafo.CaratulaPlantilla));
            //contenidoTitulo.AppendChild(crearParrafo("TAXONOMÍA BMV ANEXO T 2016", FormatoParrafo.CaratulaPlantilla));

            contenidoTitulo.AppendChild(crearParrafo("v" + VersionPlantilla.Replace("v", ""), FormatoParrafo.CaratulaPlantilla));
            crearParrafosVacios(contenidoTitulo.ChildNodes, 1, FormatoParrafo.CaratulaPlantilla);

            plantilla.FirstSection.Body.AppendChild(contenidoTitulo);

            //contenidoTitulo.

            plantillaBuilder.Font.ClearFormatting();
            crearParrafosVacios(plantilla.FirstSection.Body, 1);
        }

        private void escribirInstrucciones()
        {
            plantillaBuilder.InsertBreak(BreakType.PageBreak);
            StructuredDocumentTag contenidoInstrucciones = crearContenidoTextoPlano();
            List list = plantilla.Lists.Add(ListTemplate.NumberDefault);
            contenidoInstrucciones.AppendChild(crearParrafo(ObtenValorEtiqueta("ETIQUETA_INSTRUCCION_2"), FormatoParrafo.TextoInstruccion));

            Paragraph para1 = crearParrafo(ObtenValorEtiqueta("ETIQUETA_INSTRUCCION_3"), FormatoParrafo.TextoInstruccion);
            Paragraph para2 = crearParrafo(ObtenValorEtiqueta("ETIQUETA_INSTRUCCION_4"), FormatoParrafo.TextoInstruccion);
            Paragraph para3 = crearParrafo(ObtenValorEtiqueta("ETIQUETA_INSTRUCCION_5"), FormatoParrafo.TextoInstruccion);
            Paragraph para4 = crearParrafo(ObtenValorEtiqueta("ETIQUETA_INSTRUCCION_6"), FormatoParrafo.TextoInstruccion);

            para1.ListFormat.List = list;
            para2.ListFormat.List = list;
            para3.ListFormat.List = list;
            para4.ListFormat.List = list;
            
            contenidoInstrucciones.AppendChild(para1);
            contenidoInstrucciones.AppendChild(para2);
            contenidoInstrucciones.AppendChild(para3);
            contenidoInstrucciones.AppendChild(para4);

            //Permite asignar el titulo de cada la instruccion y colocarla en la tabla de contenidos
            asignarTitulosFormatos(ObtenValorEtiqueta("ETIQUETA_INSTRUCCION_1"), 18, StyleIdentifier.Heading1);
            plantilla.LastSection.Body.AppendChild(contenidoInstrucciones);

            crearParrafosVacios(plantilla.FirstSection.Body, 1);
            plantillaBuilder.Font.ClearFormatting();
        }

        private void escribirFormatos()
        {
            RolDto<EstructuraFormatoDto> ultimo = docInstancia.Taxonomia.RolesPresentacion.Last();
            foreach (RolDto<EstructuraFormatoDto> rolDto in docInstancia.Taxonomia.RolesPresentacion)
            {
                if (!ExistenElementosBolcNotas(rolDto.Estructuras))
                {
                    continue;
                }
                plantillaBuilder.MoveToDocumentEnd();
                //plantillaBuilder.InsertBreak(BreakType.PageBreak);
                String nombreRol = rolDto.Nombre;
                if (Lenguaje.Equals("en") && 
                    docInstancia.Taxonomia.EtiquetasRol.ContainsKey(Lenguaje) &&
                    docInstancia.Taxonomia.EtiquetasRol[Lenguaje].ContainsKey(rolDto.Uri))
                {
                    nombreRol = docInstancia.Taxonomia.EtiquetasRol[Lenguaje][rolDto.Uri].Valor;
                }
                StructuredDocumentTag contenidoRol = crearContenidoEnriquecido();
                contenidoRol.Tag = TAG_ABAX_XBRL_TITULO + (indexXBRL++);
                //Permite colocar los titulos de los formatos 
                //asignarTitulosFormatos(nombreRol , 18, StyleIdentifier.Heading1);
                var parrafo = crearParrafo(nombreRol, FormatoParrafo.TituloFormato);
                parrafo.ParagraphFormat.StyleIdentifier = StyleIdentifier.Heading1;
                contenidoRol.AppendChild(parrafo);
                plantilla.FirstSection.Body.AppendChild(contenidoRol);

                escribirConceptos(rolDto.Estructuras);
                plantillaBuilder.Font.ClearFormatting();
                //crearParrafosVacios(plantilla.FirstSection.Body, 1);

                
            }            
        }
        /// <summary>
        /// Determina si existen elementos de block de notas para cargar.
        /// </summary>
        /// <param name="estructuras">Estructuras a evaluar.</param>
        /// <returns>Si existen elementos que pintar.</returns>
        private bool ExistenElementosBolcNotas(IList<EstructuraFormatoDto> estructuras)
        {
            var existen = false;
            if (estructuras != null && estructuras.Count() > 0)
            {
                foreach (var estructura in estructuras)
                {
                    if (docInstancia.Taxonomia.ConceptosPorId.ContainsKey(estructura.IdConcepto))
                    {
                        var concepto = docInstancia.Taxonomia.ConceptosPorId[estructura.IdConcepto];

                        if (concepto.TipoDato.Contains(PlantillasNotasUtil.TIPO_DATO_TEXT_BLOCK) && concepto.EsAbstracto == false)
                        {
                            if (!verificaContextoEnHipercubo(concepto.Id) && ExisteHechoParaConcepto(concepto.Id))
                            {
                                existen = true;
                            }
                        }

                        if (estructura.SubEstructuras != null && estructura.SubEstructuras.Count > 0)
                        {
                            existen = ExistenElementosBolcNotas(estructura.SubEstructuras);
                        }
                    }
                    if (existen)
                    {
                        break;
                    }
                }
            }
            return existen;
        }

        /// <summary>
        /// Permite asignar un estilo al título de cada formato.
        /// </summary>
        /// <param name="etiqueta"></param>
        /// <param name="size"></param>
        private void asignarTitulosFormatos(String etiqueta, int size, StyleIdentifier estilo) 
        {
            plantillaBuilder.ParagraphFormat.StyleIdentifier = estilo;
            plantillaBuilder.Font.Color = Color.FromArgb(54, 95, 145);
            plantillaBuilder.Font.Size = size;
            plantillaBuilder.Font.Name = "Cambria";
            plantillaBuilder.Write(etiqueta);

            plantillaBuilder.Font.ClearFormatting();

            plantilla.UpdateFields();
        }

        /// <summary>
        /// Determina si existen hechos para el concepto indicado.
        /// </summary>
        /// <param name="idConcepto">Identificador del concepto indicado</param>
        /// <returns>Si existen hechos para el concepto indicado.</returns>
        private bool ExisteHechoParaConcepto(String idConcepto)
        {
            return docInstancia.HechosPorIdConcepto.ContainsKey(idConcepto) && docInstancia.HechosPorIdConcepto[idConcepto].Count > 0;
        }
        /// <summary>
        /// Imprime la sección de un conjunto de estructuras.
        /// </summary>
        /// <param name="estructuras">Conceptos a evaluar.</param>
        private void escribirConceptos(IList<EstructuraFormatoDto> estructuras)
        {
            if (estructuras != null && estructuras.Count() > 0)
            {                
                foreach (var estructura in estructuras)
                {
                    if (docInstancia.Taxonomia.ConceptosPorId.ContainsKey(estructura.IdConcepto))
                    {                        
                        var concepto = docInstancia.Taxonomia.ConceptosPorId[estructura.IdConcepto];

                        if (concepto.TipoDato.Contains(PlantillasNotasUtil.TIPO_DATO_TEXT_BLOCK) && concepto.EsAbstracto == false)
                        {
                            if (!verificaContextoEnHipercubo(concepto.Id) && ExisteHechoParaConcepto(concepto.Id))
                            {
                                escribirConcepto(concepto);
                            }                                           
                        }

                        if (estructura.SubEstructuras != null && estructura.SubEstructuras.Count > 0)
                        {
                            escribirConceptos(estructura.SubEstructuras);
                        }
                    } 
                }
            }
        }
        /// <summary>
        /// Escribe la sección de un concepto.
        /// </summary>
        /// <param name="concepto"></param>
        private void escribirConcepto(ConceptoDto concepto)
        {
            plantillaBuilder.MoveToDocumentEnd();
            StructuredDocumentTag contenidoConcepto = crearContenidoTextoPlano();
            contenidoConcepto.Tag = TAG_ABAX_XBRL_HECHO + indexXBRL;
            Paragraph parrafoConcepto;
            if (conceptosColorear != null && conceptosColorear.ContainsKey(concepto.Id))
            {
                parrafoConcepto = crearParrafoObligatorio("[XBRL]" + concepto.Etiquetas[Lenguaje].FirstOrDefault().Value.Valor, FormatoParrafo.TextoConcepto);
            }
            else
            {
                parrafoConcepto = crearParrafo("[XBRL]" + concepto.Etiquetas[Lenguaje].FirstOrDefault().Value.Valor, FormatoParrafo.TextoConcepto);
            }
            
            parrafoConcepto.ParagraphFormat.StyleIdentifier = StyleIdentifier.Heading2;
            Paragraph parrafoDefinicion = crearParrafo("AbaxXBRL_Def:{\"IdConcepto\":\"" + concepto.Id + "\"}", FormatoParrafo.VersionOculto);
            contenidoConcepto.AppendChild(parrafoConcepto);
            contenidoConcepto.AppendChild(parrafoDefinicion);
            //generarIdContextoIdHecho(concepto.Id);
            plantilla.FirstSection.Body.AppendChild(contenidoConcepto);
            plantillaBuilder.Font.ClearFormatting();
            if (IncluirContenidoNotas)
            {
                crearParrafosVacios(plantilla.FirstSection.Body, 2);
                var idsHechosPorConcepto = docInstancia.HechosPorIdConcepto[concepto.Id];
                Viewer.Application.Dto.HechoDto hecho;
                if (idsHechosPorConcepto.Count > 0 && docInstancia.HechosPorId.TryGetValue(idsHechosPorConcepto.First(), out hecho))
                {
                    plantillaBuilder.MoveToDocumentEnd();
                    if (!WordUtil.EsRTF(hecho.Valor))
                    {
                    	plantillaBuilder.InsertHtml("<p style='font-family:Arial;font-size: 8pt'>" +  hecho.Valor + "</p>");
                    }
                    else
                    {
                        var lastIndex = hecho.Valor.Length < 1000 ? hecho.Valor.Length - 1 : 1000;
                        plantillaBuilder.Write(hecho.Valor.Substring(0,lastIndex));
                    }
                        
                }
                crearParrafosVacios(plantilla.FirstSection.Body, 2);
            }
            else
            {
                crearParrafosVacios(plantilla.FirstSection.Body, 5);
            }
            indexXBRL++;
        }

        

        private StructuredDocumentTag crearContenidoTextoPlano()
        {
            StructuredDocumentTag textoPlano = new StructuredDocumentTag(plantilla, SdtType.PlainText, MarkupLevel.Block);
            textoPlano.LockContentControl = true;
            textoPlano.LockContents = true;
            textoPlano.RemoveAllChildren();

            return textoPlano;
        }

        private StructuredDocumentTag crearContenidoEnriquecido()
        {
            StructuredDocumentTag textoEnriquecido = new StructuredDocumentTag(plantilla, SdtType.RichText, MarkupLevel.Block);
            textoEnriquecido.LockContentControl = true;
            textoEnriquecido.LockContents = true;

            textoEnriquecido.RemoveAllChildren();

            return textoEnriquecido;
        }

        private Paragraph crearParrafo(String texto, FormatoParrafo formato) 
        {
            Paragraph parrafo = new Paragraph(plantilla);
            parrafo.ParagraphFormat.Alignment = (ParagraphAlignment) AlignmentAttribute.Get(formato);
            parrafo.ParagraphFormat.LineSpacing = LineSpacingAttribute.Get(formato);

            Run run = null;

            if (String.IsNullOrEmpty(texto))
            {
                run = new Run(plantilla);
            }
            else
            {
                run = new Run(plantilla, texto);
            }

            run.Font.Name = FontNameAttribute.Get(formato);
            run.Font.Size = FontSizeAttribute.Get(formato);
            run.Font.Bold = BoldAttribute.Get(formato);
            run.Font.Color = ColorAttribute.Get(formato);
            run.Font.Hidden = HiddenAttribute.Get(formato);

            parrafo.Runs.Add(run);

            return parrafo;
        }

        private Paragraph crearParrafoObligatorio(String texto, FormatoParrafo formato)
        {
            Paragraph parrafo = new Paragraph(plantilla);
            parrafo.ParagraphFormat.Alignment = (ParagraphAlignment)AlignmentAttribute.Get(formato);
            parrafo.ParagraphFormat.LineSpacing = LineSpacingAttribute.Get(formato);

            Run run = null;

            if (String.IsNullOrEmpty(texto))
            {
                run = new Run(plantilla);
            }
            else
            {
                var runMark = new Run(plantilla, "*");
                runMark.Font.Name = FontNameAttribute.Get(FormatoParrafo.TextoConceptoObligatorio);
                runMark.Font.Size = FontSizeAttribute.Get(FormatoParrafo.TextoConceptoObligatorio);
                runMark.Font.Bold = BoldAttribute.Get(FormatoParrafo.TextoConceptoObligatorio);
                runMark.Font.Color = ColorAttribute.Get(FormatoParrafo.TextoConceptoObligatorio);
                runMark.Font.Hidden = HiddenAttribute.Get(FormatoParrafo.TextoConceptoObligatorio);
                parrafo.Runs.Add(runMark);

                run = new Run(plantilla, texto);
            }

            run.Font.Name = FontNameAttribute.Get(formato);
            run.Font.Size = FontSizeAttribute.Get(formato);
            run.Font.Bold = BoldAttribute.Get(formato);
            run.Font.Color = ColorAttribute.Get(formato);
            run.Font.Hidden = HiddenAttribute.Get(formato);

            parrafo.Runs.Add(run);

            return parrafo;
        }

        private void crearParrafosVacios(NodeCollection nodes, int cantidad, FormatoParrafo formato)
        {
            for (int i = 0; i < cantidad; i++)
            {
                Paragraph parrafo = crearParrafo("", formato);
                nodes.Add(parrafo);
            }
        }

        private void crearParrafosVacios(Body body, int cantidad)
        {
            for (int i = 0; i < cantidad; i++)
            {
                body.AppendParagraph("");
            }
        }

        private String ObtenValorEtiqueta(String nombreEtiqueta)
        {
            var etiquetasPorLenguaje = EtiquetasPlantillas;
            IDictionary<String, String> etiquetas = null;
            if (etiquetasPorLenguaje != null && etiquetasPorLenguaje.ContainsKey(Lenguaje))
            {
                etiquetas = etiquetasPorLenguaje[Lenguaje];
            }
            else
            {
                etiquetas = etiquetasPorLenguaje.Values.First();
            }

            return etiquetas[nombreEtiqueta];
        }

        public byte[] export()
        {
            byte[] resultadoArchivo = null;
            var memoryStreamSalida = new MemoryStream();

            try
            {
                memoryStreamSalida = new MemoryStream();
                var currentCulture = Thread.CurrentThread.CurrentCulture;
                Thread.CurrentThread.CurrentCulture = new CultureInfo("es-MX");
                plantilla.Save(memoryStreamSalida, SaveFormat.Docx);
                Thread.CurrentThread.CurrentCulture = currentCulture;
                resultadoArchivo = memoryStreamSalida.ToArray();
            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
                throw ex;
            }
            finally
            {
                if (memoryStreamSalida != null)
                {
                    memoryStreamSalida.Close();
                }
            }

            return resultadoArchivo;
        }

        ///
        /// Crea una lista de indices de los roles que contiene el documento de instancia. 
        /// 
        ////
        protected void escribirIndice( )
        {
            FormatoParrafo contenido = FormatoParrafo.TextoContenido;
            FormatoParrafo indice = FormatoParrafo.TextoIndice;

            plantillaBuilder.InsertBreak(BreakType.PageBreak);
            plantillaBuilder.Font.Name = FontNameAttribute.Get(contenido);
            plantillaBuilder.Font.Size = FontSizeAttribute.Get(contenido);
            plantillaBuilder.Font.Color = ColorAttribute.Get(contenido);
            plantillaBuilder.Font.Hidden = HiddenAttribute.Get(contenido);
            plantillaBuilder.Font.Bold = BoldAttribute.Get(contenido);
            plantillaBuilder.Writeln("Contenido");

            plantillaBuilder.Font.ClearFormatting();

            plantillaBuilder.InsertTableOfContents("\\o \"1-3\" \\h \\z \\u");

            plantillaBuilder.Font.Name = FontNameAttribute.Get(indice);
            plantillaBuilder.Font.Size = FontSizeAttribute.Get(indice);
            plantillaBuilder.Font.Color = ColorAttribute.Get(indice);
            plantillaBuilder.Font.Hidden = HiddenAttribute.Get(indice);

            //plantillaBuilder.Writeln("");            

            plantillaBuilder.Font.ClearFormatting();
        }

        /// <summary>
        /// Este método permite obtener el nombre de la taxonomia.
        /// </summary>
        /// <param name="prefijo"> Prefijo de la taxonomia </param>
        /// <returns></returns>
        private String obtenerNombre(String prefijo)
        {
            int contadorGuiones = 0;
            int i = 0;
            for (; i < prefijo.Length; i++)
            {
                if (prefijo.Substring(i, 1).Equals("_"))
                {
                    contadorGuiones = contadorGuiones + 1;
                    if (contadorGuiones == 2)
                        break;
                }
            }
            return prefijo.Substring(0, i).Replace("_", " ").ToUpper();
        }

        /// <summary>
        /// Este método permite obtener los id corespondientes al concepto ingresado.
        /// </summary>
        /// <param name="idHecho"></param>
        private void generarIdContextoIdHecho(string idConcepto)
        {
            Boolean HaSidoEscrito = false;
            foreach (RolDto<EstructuraFormatoDto> rolDto in docInstancia.Taxonomia.RolesPresentacion)
            {
                String nombreRol = rolDto.Uri;
                nombreRol = nombreRol.Replace(_puntoXSD, String.Empty)
                                     .Replace(_guion, _caracterReemplazo)
                                     .Replace(_dosPuntos, _caracterReemplazo)
                                     .Replace(_diagonal, _caracterReemplazo)
                                     .Replace(_punto, _caracterReemplazo);

                definicionElementosPlantillaXbrl = new DefinicionElementosPlantillaXbrl(PATH + nombreTaxonomia + nombreRol + ".json");

                using (file = new StreamWriter(@"..\..\TestOutput\Plantillas\" + docInstancia.Taxonomia.PrefijoTaxonomia + " - series.txt"))
                {
                    foreach (var item in definicionElementosPlantillaXbrl.HechosPlantillaPorId)
                    {
                        if (HaSidoEscrito == false)
                        {
                            if (item.Value.IdConcepto.Equals(idConcepto))
                            {
                                file.WriteLine("<entry key='XBRL-000" + indexXBRLSerie + "' value='" + item.Key + "' />");
                                indexXBRLSerie = indexXBRLSerie + 1;
                                HaSidoEscrito = true;
                            }
                        }
                    }
                }
            }
        }

        /// <summary>
        /// Este método permite obtener el nombre del anexo.
        /// </summary>
        private void obtenerNombreAnexo(int indiceRol)
        {
            if (docInstancia.Taxonomia.RolesPresentacion[indiceRol] != null)
            {
                String rolDto = docInstancia.Taxonomia.RolesPresentacion[indiceRol].Uri;                
                String anexo = "";
                for (int indiceGuion = rolDto.Length - 1; indiceGuion > 0; indiceGuion--)
                {
                    if (rolDto.Substring(indiceGuion, 1).Equals("-"))
                    {
                        anexo = rolDto.Substring(indiceGuion + 1, ((rolDto.Length - 1) - indiceGuion));
                        if (anexo.Equals(taxonomiaAr)) {
                            indiceRol = indiceRol + 1;
                            obtenerNombreAnexo(indiceRol);
                        }  
                        if (anexos.Contains(anexo.ToUpper())) {
                            nombreTaxonomia = taxonimiaRaProspecto + "." + anexo +".";
                        }
                        break;
                    }
                }
            }
        }

        /// <summary>
        /// Este método permite verificar si un concepto se encuentra en algún hipercubos.
        /// </summary>
        /// <param name="contexto">Concepto a buscar entre los elementos de los hipercubos</param>
        /// <returns>Retorna true en caso de encontrarse en algun hipercubo y false en caso contrario</returns>
        private Boolean verificaContextoEnHipercubo(String contexto)
        {
            Boolean existeContextoEnHiercubo = false;
            if(contexto != null)
            {
                if (docInstancia.Taxonomia.ListaHipercubos != null)
                {
                    foreach (var hipercubo in docInstancia.Taxonomia.ListaHipercubos)
                    {
                        if (hipercubo.Value != null)
                        {
                            foreach (var contextos in hipercubo.Value)
                            {
                                foreach (var item in contextos.ElementosPrimarios)
                                {
                                    if (item.Equals(contexto))
                                    {
                                        existeContextoEnHiercubo = true;
                                        break;
                                    }
                                }
                            }
                        }
                    }
                }
            }
            return existeContextoEnHiercubo;
        }
    }
}
