using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using Aspose.Words;
using System.Text.RegularExpressions;
using AbaxXBRLCore.Common.Dtos;
using System.Configuration;
namespace AbaxXBRLCore.Common.Util
{

    /// <summary>
    /// Clase de utilería para la importación y exportación de datos de word
    /// </summary>
    public class WordUtil
    {
        /// <summary>
        /// Expresion regular para identificar saltos de sección en una expresión HTML generada a partir de Word.
        /// </summary>
        private static Regex REGEXP_SALTO_SECCION = new Regex("<br style=\"page\\-break\\-before:always; clear:both; mso\\-break\\-type:section\\-break\" \\/>",RegexOptions.Compiled | RegexOptions.Multiline);
        /// <summary>
        /// Expresion regular para identificar parrafos vacios.
        /// </summary>
        private static Regex REGEXP_PARRAFO_VACIO = new Regex(@"<p[ \t]*>[ \t]*&nbsp;[ \t]*<\/p[ \t]*>", RegexOptions.Compiled | RegexOptions.Multiline);
        /// <summary>
        /// Dimension a lo ancho en puntos del tamano carta.
        /// PostScript points.
        /// Info:
        ///  http://paulbourke.net/dataformats/postscript/
        ///  http://www.prepressure.com/library/paper-size
        /// </summary>
        private static float CARTA_ANCHO_TAMANO = 612f;
        /// <summary>
        /// Dimension a lo largo en puntos del tamano carta.
        /// PostScript points.
        /// Info:
        ///  http://paulbourke.net/dataformats/postscript/
        ///  http://www.prepressure.com/library/paper-size
        /// </summary>
        private static float CARTA_LARGO_TAMANO = 792f;
        /// <summary>
        /// Dimension a lo ancho en puntos del tamano A4.
        /// PostScript points.
        /// Info:
        ///  http://paulbourke.net/dataformats/postscript/
        ///  http://www.prepressure.com/library/paper-size
        /// </summary>
        private static float A4_ANCHO_TAMANO = 595f;
        /// <summary>
        /// Dimension a lo largo en puntos del tamano A4.
        /// PostScript points.
        /// Info:
        ///  http://paulbourke.net/dataformats/postscript/
        ///  http://www.prepressure.com/library/paper-size
        /// </summary>
        private static float A4_LARGO_TAMANO = 842f;
        /// <summary>
        /// Expresion regular para identificar los vinculos (anclas) sin el atributo "href".
        /// </summary>
        private static Regex REGEXP_VINCULOS_SIN_HREF = new Regex("(<a[\\s\\t]+((?!href[\\s\\t]*=).)*?)([\\s\\t]*>)+?", RegexOptions.Compiled | RegexOptions.Multiline);
        /// <summary>
        /// Expresion regular para identificar los vinculos (anclas) vacios.
        /// </summary>
        private static Regex REGEXP_VINCULOS_VACIOS = new Regex("<a([\\s\\t]*(\\S+)=((\"[^\"]+\")|('[^']+'))[\\s\\t]*)+>[\\s\\t]*</a>", RegexOptions.Compiled | RegexOptions.Multiline);
        /// <summary>
        /// Expresion regular para identificar los caracteres unicode correspondientes a BOM.
        /// </summary>
        private static Regex REGEXP_BOM = new Regex(@"<p>\?<\/p>\n", RegexOptions.Compiled | RegexOptions.Multiline);
        /// <summary>
        /// Expresion regular para identificar estilos de error.
        /// </summary>
        private static Regex REGEXP_ESTILOS_ERROR = new Regex("mso-break-type(\\s*\\:{1}\\s*)section-break(\\;\\s*)?", RegexOptions.Compiled | RegexOptions.Multiline);

        /// <summary>
        /// Expresion regular para identificar estilos de error con posición absoluta
        /// </summary>
        private static Regex REGEXP_POSITION_ABS = new Regex("position:absolute", RegexOptions.Compiled | RegexOptions.Multiline);
        /// <summary>
        /// Expresion regular para identificar la apertura de la etiqueta titulo.
        /// </summary>
        private static Regex REGEXP_ESTILOS_TITULOS_APERTURA = new Regex("<(h|H)\\d{1,2}(?=(([\\s\\t])|(>)))", RegexOptions.Compiled | RegexOptions.Multiline);
        /// <summary>
        /// Expresion regular para identificar el cierre de la etiqueta titulo.
        /// </summary>
        private static Regex REGEXP_ESTILOS_TITULOS_CIERRE = new Regex("<\\/(h|H)\\d{1,2}(?=(([\\s\\t])|(>)))", RegexOptions.Compiled | RegexOptions.Multiline);
        /// <summary>
        /// Expresion regular para identificar los elementos vacios de una lista.
        /// </summary>
        private static Regex REGEXP_ELEMENTO_LISTA_VACIO = new Regex("<li[\\s\\t]+.+?\\/>", RegexOptions.Compiled | RegexOptions.Multiline);
        private static Regex REGEXP_ESTILOS_ERROR_POSITION_ABSOLUTE = new Regex("position(\\s*\\:\\s*absolute)", RegexOptions.Compiled | RegexOptions.Multiline);
		
        private static String REGEXP_ESTILOS_ERROR_AW_FOOTER = "-aw-headerfooter-type:footer-primary";
        /// <summary>
        /// Inserts content of the external document after the specified node.
        /// Section breaks and section formatting of the inserted document are ignored.
        /// </summary>
        /// <param name="insertAfterNode">Node in the destination document after which the content
        /// should be inserted. This node should be a block level node (paragraph or table).</param>
        /// <param name="srcDoc">The document to insert.</param>
        public static void InsertDocument(Node insertAfterNode, Document srcDoc)
        {
            // Make sure that the node is either a paragraph or table.
            if ((!insertAfterNode.NodeType.Equals(NodeType.Paragraph)) &
              (!insertAfterNode.NodeType.Equals(NodeType.Table)))
                throw new ArgumentException("The destination node should be either a paragraph or table.");

            // We will be inserting into the parent of the destination paragraph.
            CompositeNode dstStory = insertAfterNode.ParentNode;

            // This object will be translating styles and lists during the import.
            NodeImporter importer = new NodeImporter(srcDoc, insertAfterNode.Document, ImportFormatMode.KeepSourceFormatting);

            // Loop through all sections in the source document.
            foreach (Section srcSection in srcDoc.Sections)
            {
                // Loop through all block level nodes (paragraphs and tables) in the body of the section.
                foreach (Node srcNode in srcSection.Body)
                {
                    // Let's skip the node if it is a last empty paragraph in a section.
                    if (srcNode.NodeType.Equals(NodeType.Paragraph))
                    {
                        Paragraph para = (Paragraph)srcNode;
                        if (para.IsEndOfSection && !para.HasChildNodes)
                            continue;
                    }

                    // This creates a clone of the node, suitable for insertion into the destination document.
                    Node newNode = importer.ImportNode(srcNode, true);

                    // Insert new node after the reference node.
                    dstStory.InsertAfter(newNode, insertAfterNode);
                    insertAfterNode = newNode;
                }
            }
        }


        /// <summary>
        /// Elimina los saltos de sección en la importanción de notas de un documento instancia.
        /// </summary>
        /// <param name="contenidoNota">Texto que será evaluado para eliminar los saltos de sección</param>
        /// <returns>Texto evaluado ya sin los saltos de sección.</returns>
        public static string EliminarSaltosSeccion(string contenidoNota)
        {
            var ajustado = contenidoNota;
            try
            {
                ajustado = REGEXP_SALTO_SECCION.Replace(contenidoNota, "");
                ajustado = REGEXP_PARRAFO_VACIO.Replace(ajustado, "");
                if (REGEXP_VINCULOS_SIN_HREF.IsMatch(ajustado))
                {
                    ajustado = REGEXP_VINCULOS_SIN_HREF.Replace(ajustado, "$1 href=\"#\" >");
                }
            }
            catch (Exception e)
            {
                LogUtil.Error(e);
            }
            return ajustado;
        }



        public static string EliminarEtiquetasNoCompatibles(String valorEntrada)
        {
            var valor = String.IsNullOrWhiteSpace(valorEntrada) ? String.Empty : valorEntrada;
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
        /// Metodo encargado de aplicar expresiones regular para
        /// limpiar el html de posibles estructuras que causarian
        /// la lentitud de la creacion del reporte.
        /// </summary>
        /// <param name="origen">cadena de html a modificar</param>
        /// <returns>cadena de html modificada</returns>
        public static String LimpiarBloqueTexto(String origen)
        {
            var valor = String.Empty;

            Encoding w1252 = Encoding.GetEncoding(1252);
            Encoding utf8 = Encoding.UTF8;

            if (!String.IsNullOrWhiteSpace(origen))
            {
                byte[] utfBytes = utf8.GetBytes(origen);
                byte[] w1252Bytes = Encoding.Convert(utf8, w1252, utfBytes);
                valor = w1252.GetString(w1252Bytes);

                valor = REGEXP_BOM.Replace(valor, String.Empty);
                valor = REGEXP_VINCULOS_VACIOS.Replace(valor, String.Empty);
                valor = REGEXP_ESTILOS_ERROR.Replace(valor, String.Empty);
                valor = REGEXP_ELEMENTO_LISTA_VACIO.Replace(valor, String.Empty);
                valor = REGEXP_ESTILOS_TITULOS_APERTURA.Replace(valor, "<p");
                valor = REGEXP_ESTILOS_TITULOS_CIERRE.Replace(valor, "</p");
                valor = REGEXP_POSITION_ABS.Replace(valor, String.Empty);

                if (REGEXP_VINCULOS_SIN_HREF.IsMatch(valor))
                {
                    valor = REGEXP_VINCULOS_SIN_HREF.Replace(valor, "$1 href=\"#\" >");
                }
                valor = REGEXP_ESTILOS_ERROR_POSITION_ABSOLUTE.Replace(valor, "");

                valor = valor.Replace(REGEXP_ESTILOS_ERROR_AW_FOOTER, "");
                w1252Bytes = w1252.GetBytes(valor);
                utfBytes = Encoding.Convert(w1252, utf8, w1252Bytes);
                valor = utf8.GetString(utfBytes);
            }

            return valor;
        }
        /// <summary>
        /// Metodo para validar que cada una de las paginas del documento
        /// cumpla con las restricciones indicadas.
        /// Tanto en orientacion y tamano de la hoja.
        /// </summary>
        /// <param name="doc">Documento de word</param>
        /// <returns>El resultado y/o mensajes de la validacion</returns>
        public static ResultadoOperacionDto ValidarTamanioYOrientacion(Document doc)
        {
            var resultado = new ResultadoOperacionDto();
            resultado.Resultado = true;

            if (doc.PageCount != null && doc.PageCount > 0)
            {
                for (var i = 0; i < doc.PageCount; i++)
                {
                    var info = doc.GetPageInfo(i);

                    if (info != null) 
                    {
                        int numeroPagina = i + 1;
                        Debug.WriteLine("No. pagina: " + numeroPagina);
                        Debug.WriteLine("Orientacion: " + info.Landscape);
                        Debug.WriteLine("Altura puntos: " + info.HeightInPoints);
                        Debug.WriteLine("Ancho puntos: " + info.WidthInPoints);
                        Debug.WriteLine("Tamano pagina: " + info.PaperSize);

                        if (info.Landscape)
                        {
                            resultado.Resultado = false;
                            resultado.Mensaje = "\nLa página No. " + numeroPagina + " del documento debe estar en orientación vertical.";
                            break;
                        }

                        if (info.HeightInPoints > (A4_LARGO_TAMANO + 1) || info.WidthInPoints > (CARTA_ANCHO_TAMANO + 1))
                        {
                            resultado.Resultado = false;
                            resultado.Mensaje = "\nLa página No. " + numeroPagina + " del documento debe ser tamaño A4 o menor.";
                            break;
                        }
                    }
                    else
                    {
                        resultado.Resultado = false;
                        break;
                    }
                }                
            }
            else
            {
                resultado.Resultado = false;
            }

            return resultado;
        }

        /// <summary>
        /// Metodo para validar la que la version del documento corresponda
        /// con la version de configuracion, la version de metadatos y 
        /// la version oculta en el documento, con la cual nos aseguramos
        /// que la plantilla utilizada para las notas es la correcta.
        /// </summary>
        /// <param name="doc">Documento de word</param>
        /// <returns>El resultado y/o mensajes de la validacion</returns>
        public static ResultadoOperacionDto ValidarVersionPlantilla(Document doc)
        {
            var resultado = new ResultadoOperacionDto();
            resultado.Resultado = true;

            var companyMeta = doc.BuiltInDocumentProperties.Company.Split(null);
            float versionConfig = 0f;

            string company = "";
            float version = 0f;
            float hiddenVersion = 0f;
            
            string versionConfigString = ConfigurationManager.AppSettings.Get("VERSION_PLANTILLA_NOTAS");

            if (!String.IsNullOrEmpty(versionConfigString))
            {
                versionConfigString = versionConfigString.ToLower().Trim();
                versionConfig = float.Parse(versionConfigString.Substring(1, versionConfigString.Length - 1));
                if (companyMeta != null)
                {
                    if (companyMeta.Length > 1)
                    {
                        company = companyMeta[0].ToLower().Trim();
                        version = float.Parse(companyMeta[1].ToLower().Trim().Substring(1, companyMeta[1].Length -1));
                    }
                    else
                    {
                        company = companyMeta[0].ToLower().Trim();
                    }
                }

                /*if (!company.Equals("2hsoftware", StringComparison.InvariantCultureIgnoreCase))
                {
                    resultado.Resultado = false;
                    resultado.Mensaje = "\nEl documento no es una plantilla proporcionada por 2H Software.";

                    return resultado;
                }*/

                if (doc.HasChildNodes)
                {
                    Node[] parrafos = doc.GetChildNodes(NodeType.Paragraph, true).ToArray();
                    for (int i = 0; i <= 10; i++)
                    {
                        string text = parrafos[i].GetText().ToLower().Trim();

                        if (text.StartsWith("v"))
                        {
                            hiddenVersion = float.Parse(text.Substring(1, text.Length - 1));
                            break;
                        }
                        else if (text.StartsWith("abax"))
                        {
                            resultado.Resultado = false;
                            break;
                        }
                        else
                        {
                            continue;
                        }
                    }
                }
                else
                {
                    resultado.Resultado = false;
                    resultado.Mensaje = "\nEl documento está corrupto, no contiene información valida.";
                }

                if (hiddenVersion < versionConfig)
                {
                    if (version != hiddenVersion || hiddenVersion != versionConfig)
                    {
                        resultado.Resultado = false;
                        resultado.Mensaje = "\nEl documento no corresponde a la versión actual de plantillas para la taxonomía actual.";
                    }
                }
            }

            
            return resultado;
        }
        /// <summary>
        /// Bandera que indica si el documento es RTF.
        /// </summary>
        /// <param name="cadena">Cadena a evaluar.</param>
        /// <returns>Si la cadena es RTF.</returns>
        public static bool EsRTF(string cadena)
        {
            var esRtf = false;
            try
            {
                
                if (!String.IsNullOrEmpty(cadena))
                {
                    var evaluar = cadena.TrimStart();
                    var lastIndex = cadena.Length > 100 ? 100 : cadena.Length - 1;
                    evaluar = cadena.Substring(0, lastIndex);
                    esRtf = evaluar.Contains("{\\rtf");
                }
            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
            }
            

            return esRtf;
        }
        /// <summary>
        /// Imprime en el documentBuilder enviado como parámetro un texto en formato HTML.
        /// Intenta limpiar el texto HTML antes de imprimirlo
        /// Si el texto inicia con el código RTF se limita el contenido a 1000 caracteres
        /// Envuelve o no el texto en un párrafo default dependiendo del parámetro envolverConParrafoDefault
        /// </summary>
      
        public static void InsertHtml(DocumentBuilder documentBuilder,String referenciaHecho, String valorTextoOrigen, bool envolverConParrafoDefault=true,bool userBuilderFormat=false)
        {
            if(valorTextoOrigen == null)
            {
                return;
            }
            if (!WordUtil.EsRTF(valorTextoOrigen))
            {
                var valorTexto = WordUtil.EliminarSaltosSeccion(System.Net.WebUtility.HtmlDecode(valorTextoOrigen));
                valorTexto = WordUtil.LimpiarBloqueTexto(valorTexto);
                try
                {
                     
                    if (envolverConParrafoDefault)
                    {
                        valorTexto = "<p style='font-family:Arial;font-size: 8pt'>" + valorTexto + "</p>";
                    }
                   
                    if (userBuilderFormat)
                    {
                        documentBuilder.InsertHtml(valorTexto, userBuilderFormat);
                    }
                    else
                    {
                        documentBuilder.InsertHtml(valorTexto);
                    }
                }
                catch (Exception ex)
                {
                    LogUtil.Error("Error al imprimir hecho: "+ referenciaHecho + ":"+ex.Message);
                    LogUtil.Error(ex);
                }
            }
            else
            {
                var lastIndex = valorTextoOrigen.Length < 1000 ? valorTextoOrigen.Length - 1 : 1000;
                documentBuilder.Write(valorTextoOrigen.Substring(0, lastIndex));
            }
        }
    }
}
