using AbaxXBRLCore.Common.Constants;
using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.Reports.Constants;
using AbaxXBRLCore.Reports.Dto;
using AbaxXBRLCore.Reports.Util;
using AbaxXBRLCore.Viewer.Application.Dto;
using Aspose.Words;
using Aspose.Words.Drawing;
using Aspose.Words.Tables;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Text.RegularExpressions;

namespace AbaxXBRLCore.Reports.Exporter.Impl.Rol
{
    /// <summary>
    /// Clase base con funciones comunes para las implementaciones
    /// de la interfaz de exportador de rol de documento instancia
    /// </summary>
    public abstract class ExportadorRolDocumentoBase : IExportadorRolDocumentoInstancia
    {
        /// <summary>
        /// Nombre del tipo de dato XBRL de bloque de texto
        /// </summary>
	    public const String TIPO_DATO_TEXT_BLOCK = "textBlockItemType";
        /// <summary>
        /// Nombre del tipo de dato XBRL SiNo
        /// </summary>
        public const String TIPO_DATO_SI_NO = "siNoItemType";
	    /// <summary>
        /// Nombre del tipo de datos XBRL de cadena
	    /// </summary>
	    public const String TIPO_DATO_STRING = "stringItemType";

        /// <summary>
        /// Nombre del tipo de datos XBRL de cadena
        /// </summary>
        public const String TIPO_DATO_MONEDA = "monetaryItemType";
        /// <summary>
        /// Nombre del tipo de datos XBRL de cadena
        /// </summary>
        public const String TIPO_DATO_NONNEGATIVE= "nonNegativeIntegerItemType";

	    /// <summary>
        /// Nombre del tipo de datos XBRL booleano
	    /// </summary>
	    public const String TIPO_DATO_BOOLEAN = "booleanItemType";
        /// <summary>
        /// Nombre del tipo de dato XBRL para los archivos PDF adjuntos
        /// </summary>
        public const String TIPO_DATOS_BASE64_FILE = "base64BinaryItemType";
	    /// <summary>
        /// Indicadores de valor verdadero
	    /// </summary>
	    public String[] VALORES_BOOLEAN_SI = new String[]{"true","2","si"};
        /// <summary>
        /// Parrafo utilizado para las notas de HTML
        /// </summary>
        public const String PARRAFO_HTML_NOTAS = "<p style='font-family:Arial;font-size: 8pt'>";
        /// <summary>
        /// Parrafo utilizado para las notas de HTML con formato Text-block
        /// </summary>
        public const String PARRAFO_HTML_NOTAS_Texblock = "<p style='font-family:Arial;font-size: 6pt'>";

        /// <summary>
        /// Marcador que enmarca el texto de una nota al pie
        /// </summary>
        public const String MARCADOR_NOTAALPIE = "footnote_[";
        /// <summary>
        /// Marcador que enmarca el link para dirigir hacia una nota al pie
        /// </summary>
        public const String MARCADOR_LINK_NOTAALPIE = "link_footnote_[";
        /// <summary>
        /// Codigo UTF-8 para la flecha hacia arriba
        /// </summary>
        public const String FLECHA_ARRIBA = "\u2191";
        /// <summary>
        /// Nombre del tipo de datos XBRL monetary
        /// </summary>
        public static string TIPO_DATO_MONETARY = "monetaryItemType";
        /// <summary>
        /// Nombre del tipo de datos XBRL Decimal
        /// </summary>
        public static string TIPO_DATO_DECIMAL = "decimalItemType";
        /// <summary>
        /// Nombre del tipo de datos XBRL Decimal
        /// </summary>
        public static string TIPO_DATO_NoNEGATIVO = "nonNegativeIntegerItemType";
        /// <summary>
        /// Nombre del tipo de datos perShere.
        /// </summary>
        public static string TIPO_DATO_PERSHERE = "perShareItemType";
        /// <summary>
        /// Arreglo con los tipos de dato token item type.
        /// </summary>
        public static IList<string> TIPOS_DATO_TOKEN_ITEM_TYPE = new List<string>() {
            //Reporte Anual y Prospecto
            "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:multipleReferenceCurrencyItemType",
            "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:instrumentTypeItemType",
            "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:annualReportAnnexItemType",
            "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:prospectusAnnexItemType",
            "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:interestRateItemType",
            "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:multipleInterestRateItemType",
            "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:prospectusPreliminaryFinalItemType",
            "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:offerTypeItemType",
            "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:referenceCurrencyItemType",
            "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:siNoItemType",
            "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:genderItemType",
            "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:propietarioSuplenteItemType"
        };

        /// <summary>
        /// Lista de validacion para exportadores
        /// </summary>
        public IList<string> Evaluador = new List<string>();
        public IList<string> ConceptoHiper = new List<string>();
        /// <summary>
        /// Valores booleanos
        /// </summary>
        public const String VALOR_SI = "Si";
	    public const String VALOR_NO = "No";
        /// <summary>
        /// Realiza las operaciones necesarias para la exportacion a documento de WORD de la información de un presentation rol del documento 
	    /// de instancia. 
        /// </summary>
	    /// <param name="docBuilder">Clase que envuelve al document de word y que facilita la exportación de los datos</param>
	    /// <param name="instancia">Documento de instancia con los datos de origen</param>
	    /// <param name="rolAExportar">Datos del rol que actualmente se desea exportar</param>
	    /// <param name="estructuraReporte">Objeto con la estructura del reporte previamente inicializada</param>
        ///
        /// Tipo de letra configurada para el titulo del rol 
	    ///
	    public String TipoLetraTituloRol { get; set;}
        /// Tipo de letra configurada para los titulos de los campos
        ///
        public String TipoIndice { get; set; }
        public String TipoLetraTituloConcepto { get; set;}
	    /// Tipo de letra configurada para los campos de textos plano
	    ///
	    public String TipoLetraTextos { get; set;}
	    /// Tipo de letra configurada para los numeros
	    ///
	    public String TipoLetraNumeros { get; set;}
	
	    /// Indica si el titulo del rol se pone letra bold
	    public bool TituloRolNegrita { get; set;}
	    /// Indica si el titulo del concepto se pone letra bold
	    ///
	    public bool TituloConceptoNegrita { get; set;}
	    /// Tamaño de letra para titulos de rol
	    ///
	    public int TamanioLetraTituloRol { get; set;}
        /// <summary>
        /// Tamaño de letra para subtitulos (conceptos abstractos).
        /// </summary>
        public int TamanioLetraSubTitulo { get; set; }
        /// Tamaño de letra para titulos de conceptos
        ///
        public int TamanioLetraIndiceRol { get; set; }

        public int TamanioLetraTituloConcepto { get; set;}
	    /// Tamanio de la letra para un titulo de concepto de tipo text block
	    ///
	    public int TamanioLetraTituloConceptoNota { get; set;}
	    /// Tamaños de letra para textos planos
	    ///
	    public int TamanioLetraTextos { get; set;}
	    /// Tamaños de letra para números
	    ///
	    public int TamanioLetraNumeros { get; set;}
        ///
        /// Tamanioos de letra especificos para este formto
        ////
        public int TamanioLetraTituloTabla { get; set; }
        public int TamanioLetraContenidoTabla { get; set; }
        public int AnchoPreferidoColumnaDatos { get; set; }
        public int AnchoPreferidoColumnaTitulos { get; set; }
        ///
        /// Color del titulo de las tablas
        ////
        public int[] ColorTituloTabla { get; set; }


        ///
        /// Indica el número máximo de columnas por hoja
        ////
        public int ColumnasPorHoja { get; set; }
        public bool UsarHojaOficio { get; set; }

        /// <summary>
        /// Expresion regular para identificar los vinculos (anclas) vacios.
        /// </summary>
        private static Regex REGEXP_VINCULOS_VACIOS = new Regex("<a([\\s\\t]*(\\S+)=((\"[^\"]+\")|('[^']+'))[\\s\\t]*)+>[\\s\\t]*</a>", RegexOptions.Compiled | RegexOptions.Multiline);
        /// <summary>
        /// Expresion regular para identificar los vinculos (anclas) sin el atributo "href".
        /// </summary>
        private static Regex REGEXP_VINCULOS_SIN_HREF = new Regex("(<a[\\s\\t]+((?!href[\\s\\t]*=).)*?)([\\s\\t]*>)+?", RegexOptions.Compiled | RegexOptions.Multiline);
        /// <summary>
        /// Expresion regular para identificar estilos de error.
        /// </summary>
        private static Regex REGEXP_ESTILOS_ERROR = new Regex("mso-break-type(\\s*\\:{1}\\s*)section-break(\\;\\s*)?", RegexOptions.Compiled | RegexOptions.Multiline);
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
        /// <summary>
        /// Expresion regular para identificar saltos de linea.
        /// </summary>
        protected static Regex REGEXP_SALTO_LINEA = new Regex("\\n", RegexOptions.Compiled | RegexOptions.Multiline);
        /// <summary>
        /// Expresion regular para identificar los caracteres unicode correspondientes a BOM.
        /// </summary>
        private static Regex REGEXP_BOM = new Regex(@"<p>\?<\/p>\n", RegexOptions.Compiled | RegexOptions.Multiline);

        private static Regex REGEXP_ESTILOS_ERROR_POSITION_ABSOLUTE = new Regex("position(\\s*\\:\\s*absolute)", RegexOptions.Compiled | RegexOptions.Multiline);

        private static String REGEXP_ESTILOS_ERROR_AW_FOOTER = "-aw-headerfooter-type:footer-primary";
        /// <summary>
        /// Lista de conceptos abstractos obtenidos en la generacion del reporte
        /// </summary>
        /// 
        //protected IList<string> Evaluador = new List<string>();
        /// <summary>
        /// Constructor por defecto
        /// </summary>
        /// 
        public ExportadorRolDocumentoBase()
		{
            TipoIndice = "Arial";
            TipoLetraTituloRol = "Arial";
			TipoLetraTituloConcepto = "Arial";
			TipoLetraTextos = "Arial";
			TipoLetraNumeros = "Arial";
			TituloRolNegrita = true;
			TituloConceptoNegrita = true;
			TamanioLetraTituloRol = 15;
            TamanioLetraIndiceRol = 14;
            TamanioLetraTituloConcepto = 10;
			TamanioLetraTituloConceptoNota = 13;
            TamanioLetraSubTitulo = 13;
            TamanioLetraTextos = 8;
			TamanioLetraNumeros = 8;

            TamanioLetraTituloTabla = 6;
            TamanioLetraContenidoTabla = 6;
            AnchoPreferidoColumnaDatos = 80;
            AnchoPreferidoColumnaTitulos = 250;
            //ColorTituloTabla = new int[] { 0, 53, 96 };
            ColorTituloTabla = new int[] { 24, 175, 164 };
            ColumnasPorHoja = 9;
            UsarHojaOficio = true;
		}
	    
	    /// Imprimir de forma estándar el titulo del rol a exportar en la posición actual del documen builder
	     /// <param name="docBuilder">Clase auxiliar para escribir elementos</param>
	     /// <param name="rolAExportar">Rol a exportar actual</param>
	     /// @throws Exception En caso de un erorr al escribir en word
	    ///
	    protected void imprimirTituloRol(DocumentBuilder docBuilder,IndiceReporteDTO rolAExportar) 
        {
		    docBuilder.Font.Name = TipoLetraTituloRol;
		    docBuilder.Font.Bold = TituloRolNegrita;
		    docBuilder.Font.Size = TamanioLetraTituloRol;
		    docBuilder.ParagraphFormat.StyleIdentifier = StyleIdentifier.Heading1;
		    docBuilder.Font.Color =  Color.Black;
		    docBuilder.StartBookmark(rolAExportar.Rol);
            docBuilder.InsertHyperlink(rolAExportar.Descripcion, "index", true);
            //docBuilder.Write(rolAExportar.Descripcion);
		    docBuilder.EndBookmark(rolAExportar.Rol);
		    docBuilder.InsertParagraph();
		    docBuilder.ParagraphFormat.StyleIdentifier = StyleIdentifier.Normal;
		    docBuilder.Writeln();

	    }
        protected void imprimirPortada(DocumentBuilder docBuilder, IndiceReporteDTO rolAExportar)
        {   
            docBuilder.ParagraphFormat.StyleIdentifier = StyleIdentifier.Heading1;         
            docBuilder.Font.Color = Color.Transparent;
            docBuilder.StartBookmark(rolAExportar.Rol);
            docBuilder.InsertHyperlink(rolAExportar.Descripcion, "index", true);
            //docBuilder.Write(rolAExportar.Descripcion);
            docBuilder.EndBookmark(rolAExportar.Rol);
            docBuilder.InsertParagraph();
            docBuilder.ParagraphFormat.StyleIdentifier = StyleIdentifier.Normal;         
            docBuilder.Writeln();

        }

        protected void conceptosEnIndice(DocumentBuilder docBuilder, String etiquetaConcepto)
        {
            docBuilder.Font.Name = TipoLetraTituloRol;
            docBuilder.Font.Bold = TituloRolNegrita;
            docBuilder.Font.Size = 13;
            docBuilder.ParagraphFormat.StyleIdentifier = StyleIdentifier.Heading2;
            docBuilder.InsertHyperlink(etiquetaConcepto, "index", true);
            docBuilder.Writeln(":");
            docBuilder.InsertParagraph();
            docBuilder.ParagraphFormat.StyleIdentifier = StyleIdentifier.Normal;


        }

        protected void conceptosEnIndice(DocumentBuilder docBuilder,ConceptoReporteDTO concepto)
        {
            docBuilder.Font.Name = TipoLetraTituloRol;
            docBuilder.Font.Bold = TituloRolNegrita;
            docBuilder.Font.Size = 13;
            docBuilder.ParagraphFormat.StyleIdentifier = StyleIdentifier.Heading2;
            docBuilder.InsertHyperlink(concepto.Valor, "index", true);
            docBuilder.Writeln(":");      
            docBuilder.InsertParagraph();
            docBuilder.ParagraphFormat.StyleIdentifier = StyleIdentifier.Normal;
            

        }
        protected void imprimirIndice(DocumentBuilder docBuilder, BreakType brakeType = BreakType.PageBreak)
        {
            // Create a document builder to insert content with into document.
            
            docBuilder.InsertBreak(brakeType);    
            docBuilder.Font.Name = TipoLetraTituloRol;
            docBuilder.Font.Size = TamanioLetraIndiceRol;
            docBuilder.Font.Color = Color.Black;
            docBuilder.Writeln("Índice");
            docBuilder.InsertTableOfContents("\\o \"1-3\" \\h \\z \\u");         
            docBuilder.ParagraphFormat.StyleIdentifier = StyleIdentifier.Heading1;
            docBuilder.Writeln();
            docBuilder.ParagraphFormat.StyleIdentifier = StyleIdentifier.Heading2;
            docBuilder.Writeln();
            docBuilder.ParagraphFormat.StyleIdentifier = StyleIdentifier.Heading3;
            docBuilder.Writeln();

        }
        /// Establece la fuente configurada en la case de exportación para titulos de campos
        /// <param name="docBuilder">Clase auxiliar para establecer la fuente</param>
        /// @throws Exception
        ///
        public void establecerFuenteTituloCampo(DocumentBuilder docBuilder) {

            docBuilder.Font.Name = TipoLetraTituloConcepto;
		    docBuilder.Font.Bold = TituloConceptoNegrita;
		    docBuilder.Font.Size = TamanioLetraTituloConcepto;
		    docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Left;
	    }

        /// Establece la fuente configurada en la case de exportación para valores de campos
        /// <param name="docBuilder">Clase auxiliar para establecer la fuente</param>
        /// @throws Exception
        ///
        public void establecerFuenteValorCampo(DocumentBuilder docBuilder){
		    docBuilder.Font.Name = TipoLetraTextos;
		    docBuilder.Font.Bold = false;
		    docBuilder.Font.Size = TamanioLetraTextos;
            docBuilder.Font.Color = Color.Black;
		
	    }
        /// <summary>
        /// Establece el estilo de la celdas para las celdas titulo.
        /// </summary>
        /// <param name="docBuilder">Constructor del documento.</param>
        protected void establecerFuenteCeldaTitulo(DocumentBuilder docBuilder)
        {
            Color colorTitulo = Color.FromArgb(ColorTituloTabla[0], ColorTituloTabla[1], ColorTituloTabla[2]);
            docBuilder.ParagraphFormat.SpaceAfter = 0;
            docBuilder.ParagraphFormat.SpaceBefore = 2;
            docBuilder.CellFormat.Shading.BackgroundPatternColor = colorTitulo;
            docBuilder.Font.Color = Color.White;
            docBuilder.Font.Size = TamanioLetraContenidoTabla;
        }

        /// <summary>
        /// Establece el estilo de la celdas para las celdas titulo.
        /// </summary>
        /// <param name="docBuilder">Constructor del documento.</param>
        protected void establecerFuenteCeldaValor(DocumentBuilder docBuilder)
        {
            docBuilder.ParagraphFormat.SpaceAfter = 0;
            docBuilder.ParagraphFormat.SpaceBefore = 2;
            docBuilder.CellFormat.Shading.BackgroundPatternColor = Color.White;
            docBuilder.Font.Color = Color.Black;
            docBuilder.Font.Size = TamanioLetraContenidoTabla;
        }

        protected string ObtenertipoDato(ConceptoReporteDTO concepto, String typeDato)
        {
            string[] d = concepto.TipoDato.Split(':');
            string valor = (d[0] + ":" + d[1] + ":"+ typeDato);
            return valor;
        }
       

        /// Escribe el primer valor encontrado del hecho que corresponde al concepto enviado como parámetro
        /// <param name="docBuilder">Clase auxiliar para escribir contenido</param>
        /// <param name="listAConceptosRol">Lista de conceptos del rol</param>
        /// <param name="idConcepto">ID del concepto que se desea buscar hechos</param>
        /// <returns>el valor escrito</returns>
        ///
        protected String escribirValorHecho(DocumentBuilder docBuilder, ReporteXBRLDTO estructuraReporte, IList<ConceptoReporteDTO> listAConceptosRol, String idConcepto, bool forzarHtml = false)
        {
		    foreach(ConceptoReporteDTO concepto  in  listAConceptosRol)
		    {
			    if(idConcepto.Equals(concepto.IdConcepto)){
				    if(concepto.Hechos!= null && concepto.Hechos.Count()>0)
                    {
					    foreach(String llave in concepto.Hechos.Keys)
                        {
						    if(concepto.Hechos[llave] != null){
                                escribirValorHecho(docBuilder, estructuraReporte, concepto.Hechos[llave], concepto, forzarHtml);
							    return concepto.Hechos[llave].Valor;
						    }
					    }
				    }
			    }
		    }
		    return null;		
	    }



        /// <summary>
        /// Metodo encargado de aplicar expresiones regular para
        /// limpiar el html de posibles estructuras que causarian
        /// la lentitud de la creacion del reporte.
        /// </summary>
        /// <param name="origen">cadena de html a modificar</param>
        /// <returns>cadena de html modificada</returns>
        protected String limpiarBloqueTexto(String origen)
        {
            var valor = String.Empty;
            try
            {
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
            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
            }
            

            return valor;
        }
        /// <summary>
        /// Escribe el valor de un hecho con el formato correspondiente.
        /// </summary>
        /// <param name="docBuilder">Constructor del documento aspose.</param>
        /// <param name="estructuraReporte">DTO con la información general de la estructura del reporte.</param>
        /// <param name="hecho">Hecho que se pretende redactar.</param>
        /// <param name="concepto">Concepto del hecho.</param>
        public void EscribirValorHecho(DocumentBuilder docBuilder, ReporteXBRLDTO estructuraReporte, HechoDto hecho, ConceptoDto concepto)
        {
            if (concepto == null || concepto == null)
            {
                return;
            }

            if (concepto.TipoDato != null && concepto.TipoDato.Contains(TIPO_DATO_TEXT_BLOCK))
            {
                EscribirLinkNotaAlPie(docBuilder, hecho, estructuraReporte);

                WordUtil.InsertHtml(docBuilder, hecho.IdConcepto + ":" + hecho.Id, PARRAFO_HTML_NOTAS + (hecho.Valor) + "</p>", false, true);

            }
            else
            {
                if (concepto.TipoDato != null && (concepto.TipoDato.Contains(TIPO_DATO_BOOLEAN) || concepto.TipoDato.Contains(TIPO_DATO_SI_NO)))
                {
                    String valorFinal = null;
                    if (hecho.Valor != null &&
                        CommonConstants.CADENAS_VERDADERAS.Contains(hecho.Valor.ToLower().Trim()))
                    {
                        valorFinal = estructuraReporte.ObtenValorEtiquetaReporte("ETIQUETA_SI");
                    }
                    else
                    {
                        valorFinal = estructuraReporte.ObtenValorEtiquetaReporte("ETIQUETA_NO");
                    }

                    EscribirLinkNotaAlPie(docBuilder, hecho, estructuraReporte);
                    docBuilder.Write(valorFinal);
                }
                else if (concepto.TipoDato != null && concepto.TipoDato.Contains(TIPO_DATOS_BASE64_FILE))
                {

                    EscribirLinkNotaAlPie(docBuilder, hecho, estructuraReporte);
                    //var htmlDePdf = ObtenerHtmlDePDFBase64(hechoReporteDTO.Valor);
                    //docBuilder.InsertHtml(htmlDePdf , true);

                    if (!String.IsNullOrEmpty(hecho.Valor))
                    {
                        var binaryPdf = Convert.FromBase64String(hecho.Valor);
                        using (var pdfInput = new MemoryStream(binaryPdf))
                        {
                            using (var icono = Assembly.GetExecutingAssembly()
                                    .GetManifestResourceStream("AbaxXBRLCore.Config.file_pdf.png"))
                            {

                                System.Drawing.Image representingImage = Image.FromStream(icono);
                                Shape oleObjectProgId = docBuilder.InsertOleObject(pdfInput, "AcroPDF.PDF", true, representingImage);
                                oleObjectProgId.AlternativeText = "Archivo Adjunto";
                                oleObjectProgId.ScreenTip = "Archivo Adjunto";
                            }
                        }
                    }

                    /* incrustar pdf
                    var htmlAspose = ObtenerHtmlDePDFBase64Aspose(hechoReporteDTO.Valor);
                    docBuilder.InsertHtml(PARRAFO_HTML_NOTAS + limpiarBloqueTexto(htmlAspose) + "</p>", true);
                    */
                }
                else
                {
                    EscribirLinkNotaAlPie(docBuilder, hecho, estructuraReporte);
                    var valorFormateado = String.Empty;
                    if (!String.IsNullOrWhiteSpace(hecho.Valor))
                    {
                        if (hecho.EsNumerico)
                        {
                            if (concepto.TipoDato.Contains(ReporteXBRLUtil.TIPO_DATO_MONETARY))
                            {
                                valorFormateado = ReporteXBRLUtil.formatoDecimal(hecho.ValorNumerico, ReporteXBRLUtil.FORMATO_CANTIDADES_MONETARIAS);
                            }
                            else if (concepto.TipoDato.Contains(ReporteXBRLUtil.TIPO_DATO_PER_SHARE))
                            {
                                valorFormateado = ReporteXBRLUtil.formatoDecimal(hecho.ValorNumerico, ReporteXBRLUtil.FORMATO_CANTIDADES_DECIMALES);
                            }
                            else
                            {
                                valorFormateado = ReporteXBRLUtil.formatoDecimal(hecho.ValorNumerico, ReporteXBRLUtil.FORMATO_CANTIDADES_ENTERAS);
                            }
                        }
                        else
                        {
                            valorFormateado = hecho.Valor;
                        }
                    }
                    if (estructuraReporte.AgregarSignoAMonetarios && concepto.TipoDato.Contains(TIPO_DATO_MONEDA))
                    {
                        valorFormateado = "$ " + valorFormateado;
                    }
                    docBuilder.Write(valorFormateado);
                }
            }
        }

        ///
	    /// Escribe el valor del hecho en la posición actual indicada por documentBuilder
	    /// <param name="docBuilder">Clase auxiliar para la escritura de elementos</param>
	    /// <param name="hechoReporteDTO">Hecho a imprimir</param>
	    /// <param name="concepto">Concepto del hecho que se escribe</param>
	    ///
	    protected void  escribirValorHecho(DocumentBuilder docBuilder, ReporteXBRLDTO estructuraReporte, HechoReporteDTO hechoReporteDTO, ConceptoReporteDTO concepto, bool forzarHtml = false)
        {
		    if(concepto == null || hechoReporteDTO == null){
			    return;
		    }
         
            if (concepto.TipoDato!= null && (concepto.TipoDato.Contains(TIPO_DATO_TEXT_BLOCK) || forzarHtml))
            {
                escribirLinkNotaAlPie(docBuilder, hechoReporteDTO, estructuraReporte);
                WordUtil.InsertHtml(docBuilder, concepto.IdConcepto + ":" + hechoReporteDTO.IdHecho, PARRAFO_HTML_NOTAS + hechoReporteDTO.Valor + "</p>", false, true);
                //docBuilder.InsertHtml(PARRAFO_HTML_NOTAS + limpiarBloqueTexto(hechoReporteDTO.Valor) + "</p>", true);
		    }
            else
            {
                if(concepto.TipoDato!=null && (concepto.TipoDato.Contains(TIPO_DATO_BOOLEAN) || concepto.TipoDato.Contains(TIPO_DATO_SI_NO)))
                {
			        String valorFinal = null;
			        if(hechoReporteDTO.Valor!=null && 
                        CommonConstants.CADENAS_VERDADERAS.Contains(hechoReporteDTO.Valor.ToLower().Trim()))
                    {
                        valorFinal = estructuraReporte.ObtenValorEtiquetaReporte("ETIQUETA_SI");
			        }
                    else
                    {
                        valorFinal = estructuraReporte.ObtenValorEtiquetaReporte("ETIQUETA_NO");
			        }

                    escribirLinkNotaAlPie(docBuilder, hechoReporteDTO, estructuraReporte);
                    docBuilder.Write(valorFinal);
		        }else if(concepto.TipoDato!=null && concepto.TipoDato.Contains(TIPO_DATOS_BASE64_FILE)){
                    
                    escribirLinkNotaAlPie(docBuilder, hechoReporteDTO, estructuraReporte);
                    //var htmlDePdf = ObtenerHtmlDePDFBase64(hechoReporteDTO.Valor);
                    //docBuilder.InsertHtml(htmlDePdf , true);

                    if (!String.IsNullOrEmpty(hechoReporteDTO.Valor))
                    {
                        var binaryPdf = Convert.FromBase64String(hechoReporteDTO.Valor);
                        using (var pdfInput = new MemoryStream(binaryPdf))
                        {
                            using(var icono = Assembly.GetExecutingAssembly()
                                    .GetManifestResourceStream("AbaxXBRLCore.Config.file_pdf.png")){

                                        System.Drawing.Image representingImage = Image.FromStream(icono);
                                        Shape oleObjectProgId = docBuilder.InsertOleObject(pdfInput, "AcroPDF.PDF", true, representingImage);
                                        oleObjectProgId.AlternativeText = "Archivo Adjunto";
                                        oleObjectProgId.ScreenTip = "Archivo Adjunto";
                            }
                        }
                    }

                    /* incrustar pdf
                    var htmlAspose = ObtenerHtmlDePDFBase64Aspose(hechoReporteDTO.Valor);
                    docBuilder.InsertHtml(PARRAFO_HTML_NOTAS + limpiarBloqueTexto(htmlAspose) + "</p>", true);
                    */
                }

                else if (concepto.TipoDato != null && concepto.TipoDato.Contains(ReporteXBRLUtil.TIPO_DATO_DECIMAL))
                {
                    docBuilder.Write(
                        !String.IsNullOrEmpty(hechoReporteDTO.Valor) ?
                        hechoReporteDTO.Valor :
                        String.Empty);
                }
                else
                {
                    escribirLinkNotaAlPie(docBuilder, hechoReporteDTO, estructuraReporte);
                    if (estructuraReporte.AgregarSignoAMonetarios && concepto.TipoDato.Contains(TIPO_DATO_MONEDA))
                    {
                        var valor = "$ " + hechoReporteDTO.ValorFormateado ?? String.Empty;
                        docBuilder.Write(valor);
                    }
                    else
                    {
                        if (hechoReporteDTO.ValorFormateado != null && !hechoReporteDTO.ValorFormateado.Equals("")) {
                            docBuilder.Write(
                                !String.IsNullOrEmpty(hechoReporteDTO.ValorFormateado) ?
                                hechoReporteDTO.ValorFormateado :
                                String.Empty
                            );
                        }
                        else
                        {
                            docBuilder.Write(
                                !String.IsNullOrEmpty(hechoReporteDTO.Valor) ?
                                hechoReporteDTO.Valor :
                                String.Empty
                            );
                        }

                    }
		        }
            }
	    }

        /// <summary>
        /// Metodo que crea un enlace junto al hecho y que hace referencia
        /// a las notas al pie puestas al final del reporte.
        /// </summary>
        /// <param name="docBuilder">Clase auxiliar para la escritura de elementos</param>
        /// <param name="hechoReporteDTO">Hecho a imprimir</param>
        /// <param name="estructuraReporte">Estructura que contine toda la informacion para el reporte</param>
        protected void escribirLinkNotaAlPie(DocumentBuilder docBuilder, HechoReporteDTO hechoReporteDTO, ReporteXBRLDTO estructuraReporte)
        {
            if (hechoReporteDTO != null && hechoReporteDTO.NotaAlPie)
            {
                var kv = (KeyValuePair<Int32, String>)estructuraReporte.NotasAlPie[hechoReporteDTO.IdHecho];

                docBuilder.Font.Superscript = true;
                docBuilder.Font.Color = Color.Blue;
                docBuilder.StartBookmark(MARCADOR_LINK_NOTAALPIE + kv.Key + "]");
                docBuilder.InsertHyperlink("[" + kv.Key + "] ", MARCADOR_NOTAALPIE + kv.Key + "]", true);
                docBuilder.EndBookmark(MARCADOR_LINK_NOTAALPIE + kv.Key + "]");
                docBuilder.Font.Color = Color.Black;
                docBuilder.Font.Superscript = false;
            }
        }

        protected void EscribirLinkNotaAlPie(DocumentBuilder docBuilder, HechoDto hecho, ReporteXBRLDTO estructuraReporte)
        {
            if (hecho != null && estructuraReporte.NotasAlPie.Contains(hecho.Id))
            {
                var kv = (KeyValuePair<Int32, String>)estructuraReporte.NotasAlPie[hecho.Id];

                docBuilder.Font.Superscript = true;
                docBuilder.Font.Color = Color.Blue;
                docBuilder.StartBookmark(MARCADOR_LINK_NOTAALPIE + kv.Key + "]");
                docBuilder.InsertHyperlink("[" + kv.Key + "] ", MARCADOR_NOTAALPIE + kv.Key + "]", true);
                docBuilder.EndBookmark(MARCADOR_LINK_NOTAALPIE + kv.Key + "]");
                docBuilder.Font.Color = Color.Black;
                docBuilder.Font.Superscript = false;
            }
        }

        /// Escribe el titulo del concepto enviado como parámetro buscándolo de la lista de conceptos del rol
        /// <param name="docBuilder">Clase auxiliar para la escritura de elementos</param>
        /// <param name="idConcepto">ID del concepto a escribir</param>
        /// <param name="listaConceptos">Lista de conceptos del rol</param>
        /// @throws Exception 
        ///
        protected void escribirTituloConcepto(DocumentBuilder docBuilder,	String idConcepto, IList<ConceptoReporteDTO> listaConceptos){
		    foreach(ConceptoReporteDTO concepto  in  listaConceptos)
		    {
			    if(idConcepto.Equals(concepto.IdConcepto)){
				    docBuilder.Write(concepto.Valor);
				    break;
			    }
		    }
		
	    }
	
	    /// Obtiene el valor no numérico del primer hecho encontrado del concepto
	     /// <param name="instanciaDto">Documento de instancia a buscar</param>
	     /// <param name="idConcepto">Identificador del concepto buscado</param>
	     /// <returns>Valor encontrado, null si no existen hechos del concepto</returns>
	    ///
	    protected String obtenerValorNoNumerico(DocumentoInstanciaXbrlDto instanciaDto,String idConcepto){
		    if(instanciaDto != null && instanciaDto.HechosPorIdConcepto != null && 
				    instanciaDto.HechosPorIdConcepto.ContainsKey(idConcepto) &&
				    instanciaDto.HechosPorIdConcepto[idConcepto].Count() > 0){
			    String idHecho = instanciaDto.HechosPorIdConcepto[idConcepto][0];
			    HechoDto hechoBuscado = instanciaDto.HechosPorId[idHecho];
			    if(hechoBuscado != null){
				    return hechoBuscado.Valor;
			    }
		    }
		    return null;
	    }
	    /// Establece los bordes necesarios para el contenido de una nota
	     /// <param name="docBuilder">DocumentBuilder auxiliar para escribir elementos</param>
	     /// @throws Exception
	    ///
	    protected void establecerBordesNota(DocumentBuilder docBuilder) 
        {
		    docBuilder.CellFormat.Borders.Top.Color = Color.DarkGray;
		    docBuilder.CellFormat.Borders.Top.LineStyle = LineStyle.Single;
		    docBuilder.CellFormat.Borders.Top.LineWidth = 2;
		
		    docBuilder.CellFormat.Borders.Bottom.Color = Color.DarkGray;
		    docBuilder.CellFormat.Borders.Bottom.LineStyle = LineStyle.Single;
		    docBuilder.CellFormat.Borders.Bottom.LineWidth = 2;
	    }

        /// Establece los bordes necesarios para el contenido de una nota
        /// <param name="docBuilder">DocumentBuilder auxiliar para escribir elementos</param>
        /// @throws Exception
        ///
        protected void establecerBordesCeldaTabla(DocumentBuilder docBuilder)
        {
            docBuilder.CellFormat.Borders.Color = Color.Black;
            docBuilder.CellFormat.Borders.LineStyle = LineStyle.Single;
            docBuilder.CellFormat.Borders.LineWidth = 1;
        }

        /// Escribe el primer hecho de la lista de conceptos en el formato de tabla por concepto de tipo nota
        /// <param name="docBuilder">Clase de escritura de documento</param>
        /// <param name="idConcepto">ID del concepto a escribir</param>
        /// <param name="listaConceptos">Lista total de conceptos del rol</param>
        /// @throws Exception
        ///
        protected void escribirConceptoEnTablaNota(DocumentBuilder docBuilder, ReporteXBRLDTO estructuraReporte, String idConcepto, IList<ConceptoReporteDTO> listaConceptos)
        {
		    HechoReporteDTO hecho = null;
		    ConceptoReporteDTO conceptoActual = null;
		    foreach(ConceptoReporteDTO concepto  in  listaConceptos)
		    {
			    if(idConcepto.Equals(concepto.IdConcepto)){
				    if(concepto.Hechos!= null && concepto.Hechos.Count()>0){
					    foreach(String llave in concepto.Hechos.Keys)
                        {
						    hecho = concepto.Hechos[llave];
						    conceptoActual = concepto;
                 
                            break;
					    }
					    if(hecho != null){
						    break;
					    }
				    }
			    }
            
            }

            escribirConceptoEnTablaNota(docBuilder, estructuraReporte, hecho,conceptoActual);
		
	    }

        /// <summary>
        /// Escribe el contenido de un hecho de tipo textbloc marcando los estilos del título en color negro.
        /// También lo marca compo titulo 2 para que se muestre en la tabla de contenido.
        /// </summary>
        /// <param name="docBuilder">Constructor del documento..</param>
        /// <param name="estructuraReporte">Información general de la distribución de elementos en el reporte.</param>
        /// <param name="hecho">Hecho de tipo nota de texot que se pretende imprimir.</param>
        /// <param name="conceptoActual">Identificador del concepto de tipo bloque de texot.</param>
        protected void EscribirNotaTextoAtributosAdicionales(DocumentBuilder docBuilder, ReporteXBRLDTO estructuraReporte, HechoReporteDTO hecho, ConceptoReporteDTO conceptoActual)
        {

            string cadena = ObtenertipoDato(conceptoActual, TIPO_DATO_STRING);
            string text_block = ObtenertipoDato(conceptoActual, TIPO_DATO_TEXT_BLOCK);
            if (conceptoActual.TipoDato == cadena || conceptoActual.TipoDato == text_block)
            {
                EscribirTipoNotaTexto(docBuilder, estructuraReporte, hecho, conceptoActual);
            }

        }

        /// <summary>
        /// Escribe el contenido de un hecho de tipo textbloc marcando los estilos del título en color negro.
        /// También lo marca compo titulo 2 para que se muestre en la tabla de contenido.
        /// </summary>
        /// <param name="docBuilder">Constructor del documento..</param>
        /// <param name="estructuraReporte">Información general de la distribución de elementos en el reporte.</param>
        /// <param name="hecho">Hecho de tipo nota de texot que se pretende imprimir.</param>
        /// <param name="conceptoActual">Identificador del concepto de tipo bloque de texot.</param>
        public virtual void EscribirTipoNotaTexto(DocumentBuilder docBuilder, ReporteXBRLDTO estructuraReporte, HechoReporteDTO hecho, ConceptoReporteDTO conceptoActual)
        {   
            establecerFuenteTituloCampo(docBuilder);
            docBuilder.Font.Size = TamanioLetraTituloConceptoNota;
            docBuilder.Font.Color = Color.Black;
            docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Justify;
            if (conceptoActual.AtributosAdicionales != null)
            {
                if (conceptoActual.AtributosAdicionales.Count == 1)
                {
                    conceptosEnIndice(docBuilder, conceptoActual);

                }
                else
                {
                    docBuilder.Write(conceptoActual.Valor);
                }

            }
            else
            {
                docBuilder.Write(conceptoActual.Valor);
            }
            Table tablaActual = docBuilder.StartTable();
            docBuilder.InsertCell();
            docBuilder.Font.Size = 1;
            docBuilder.Font.Spacing = 1;
            tablaActual.SetBorders(LineStyle.None, 0, Color.Black);
            docBuilder.CellFormat.Borders.Top.Color = Color.DarkGray;
            docBuilder.CellFormat.Borders.Top.LineStyle = LineStyle.Single;
            docBuilder.CellFormat.Borders.Top.LineWidth = 2;
            docBuilder.EndRow();
            docBuilder.EndTable();

            establecerFuenteValorCampo(docBuilder);
            docBuilder.Font.Color = Color.Black;
            docBuilder.InsertParagraph();
            docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Justify;
            escribirValorHecho(docBuilder, estructuraReporte, hecho, conceptoActual);

            tablaActual = docBuilder.StartTable();
            docBuilder.InsertCell();
            docBuilder.Font.Size = 1;
            docBuilder.Font.Spacing = 1;
            tablaActual.SetBorders(LineStyle.None, 0, Color.Black);
            docBuilder.CellFormat.Borders.Bottom.Color = Color.DarkGray;
            docBuilder.CellFormat.Borders.Bottom.LineStyle = LineStyle.Single;
            docBuilder.CellFormat.Borders.Bottom.LineWidth = 2;
            docBuilder.EndRow();
            docBuilder.EndTable();

            docBuilder.Writeln();
            docBuilder.Writeln();
        }

        /// <summary>
        /// Escribe el contenido de un hecho de tipo textbloc marcando los estilos del título en color negro.
        /// También lo marca compo titulo 2 para que se muestre en la tabla de contenido.
        /// </summary>
        /// <param name="docBuilder">Constructor del documento..</param>
        /// <param name="estructuraReporte">Información general de la distribución de elementos en el reporte.</param>
        /// <param name="hecho">Hecho de tipo nota de texot que se pretende imprimir.</param>
        /// <param name="conceptoActual">Identificador del concepto de tipo bloque de texot.</param>
        public void EscribirNotaTextoAtributosAdicionales(DocumentBuilder docBuilder, ReporteXBRLDTO estructuraReporte, HechoDto hecho, ConceptoDto conceptoActual)
        {

            bool esCadena = conceptoActual.TipoDato.Contains(TIPO_DATO_STRING);
            bool esTextBlock = conceptoActual.TipoDato.Contains(TIPO_DATO_TEXT_BLOCK);
            if (esCadena || esTextBlock)
            {
                establecerFuenteTituloCampo(docBuilder);
                docBuilder.Font.Size = TamanioLetraTituloConceptoNota;
                docBuilder.Font.Color = Color.Black;
                docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Justify;
                var etiquetaConcepto = ObtenEtiquetaConcepto(conceptoActual.Id, estructuraReporte.Instancia, estructuraReporte.Lenguaje);
                if (conceptoActual.AtributosAdicionales != null)
                {
                    if (conceptoActual.AtributosAdicionales.Count == 1)
                    {
                        conceptosEnIndice(docBuilder, etiquetaConcepto);

                    }
                    else
                    {
                        docBuilder.Write(etiquetaConcepto);
                    }

                }
                else
                {
                    docBuilder.Write(etiquetaConcepto);
                }
                Table tablaActual = docBuilder.StartTable();
                docBuilder.InsertCell();
                docBuilder.Font.Size = 1;
                docBuilder.Font.Spacing = 1;
                tablaActual.SetBorders(LineStyle.None, 0, Color.Black);
                docBuilder.CellFormat.Borders.Top.Color = Color.DarkGray;
                docBuilder.CellFormat.Borders.Top.LineStyle = LineStyle.Single;
                docBuilder.CellFormat.Borders.Top.LineWidth = 2;
                docBuilder.EndRow();
                docBuilder.EndTable();

                establecerFuenteValorCampo(docBuilder);
                docBuilder.Font.Color = Color.Black;
                docBuilder.InsertParagraph();
                docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Left;
                EscribirValorHecho(docBuilder, estructuraReporte, hecho, conceptoActual);

                tablaActual = docBuilder.StartTable();
                docBuilder.InsertCell();
                docBuilder.Font.Size = 1;
                docBuilder.Font.Spacing = 1;
                tablaActual.SetBorders(LineStyle.None, 0, Color.Black);
                docBuilder.CellFormat.Borders.Bottom.Color = Color.DarkGray;
                docBuilder.CellFormat.Borders.Bottom.LineStyle = LineStyle.Single;
                docBuilder.CellFormat.Borders.Bottom.LineWidth = 2;
                docBuilder.EndRow();
                docBuilder.EndTable();

                docBuilder.Writeln();
                docBuilder.Writeln();
            }

        }


        /// Crea el formato de tabla requerido para escribir un campo de notas
        /// <param name="docBuilder">Clase de escritura de documento</param>
        /// <param name="hecho">Hecho a imprimir</param>
        /// <param name="conceptoActual">Concepto del hecho</param>
        /// @throws Exception 
        ///
        protected virtual void escribirConceptoEnTablaNota(DocumentBuilder docBuilder, ReporteXBRLDTO estructuraReporte, HechoReporteDTO hecho, ConceptoReporteDTO conceptoActual, bool forzarHtml = false)
        {
            establecerFuenteTituloCampo(docBuilder);
            docBuilder.Font.Size = TamanioLetraTituloConceptoNota;
            docBuilder.Font.Color = Color.Gray;
            docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Center;
            docBuilder.Write(conceptoActual != null ? conceptoActual.Valor : "");

            Table tablaActual = docBuilder.StartTable();
            docBuilder.InsertCell();
            docBuilder.Font.Size = 1;
            docBuilder.Font.Spacing = 1;
            tablaActual.SetBorders(LineStyle.None, 0, Color.Black);
            docBuilder.CellFormat.Borders.Top.Color = Color.DarkGray;
            docBuilder.CellFormat.Borders.Top.LineStyle = LineStyle.Single;
            docBuilder.CellFormat.Borders.Top.LineWidth = 2;
            docBuilder.EndRow();
            docBuilder.EndTable();

            establecerFuenteValorCampo(docBuilder);
            docBuilder.Font.Color = Color.Black;
            docBuilder.InsertParagraph();
            docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Left;
            escribirValorHecho(docBuilder, estructuraReporte, hecho, conceptoActual, forzarHtml);

            tablaActual = docBuilder.StartTable();
            docBuilder.InsertCell();
            docBuilder.Font.Size = 1;
            docBuilder.Font.Spacing = 1;
            tablaActual.SetBorders(LineStyle.None, 0, Color.Black);
            docBuilder.CellFormat.Borders.Bottom.Color = Color.DarkGray;
            docBuilder.CellFormat.Borders.Bottom.LineStyle = LineStyle.Single;
            docBuilder.CellFormat.Borders.Bottom.LineWidth = 2;
            docBuilder.EndRow();
            docBuilder.EndTable();

            docBuilder.Writeln();
            docBuilder.Writeln();
	    }
	
	    /// Escribe el encabezado en la secci?ctual al 100% de ancho
	     /// <param name="docBuilder">Clase auxiliar para escribir elementos</param>
	     /// <param name="instancia">Documento de instancia actualmente procesado</param>
	     /// <param name="estructuraReporte">Estructura del reporte del documento</param>
	     /// @throws Exception 
	    ///
	    public virtual void escribirEncabezado(DocumentBuilder docBuilder, DocumentoInstanciaXbrlDto instancia, ReporteXBRLDTO estructuraReporte, bool imprimirFooter)
        {
            var ETIQUETA_TRIMESTRE = estructuraReporte.ObtenValorEtiquetaReporte("ETIQUETA_TRIMESTRE");
            var ETIQUETA_DE = estructuraReporte.ObtenValorEtiquetaReporte("ETIQUETA_DE");
            var ETIQUETA_ANO = estructuraReporte.ObtenValorEtiquetaReporte("ETIQUETA_ANO");
            var ETIQUETA_CLAVE_COTIZACION = estructuraReporte.ObtenValorEtiquetaReporte("ETIQUETA_CLAVE_COTIZACION");
            var ETIQUETA_CONSOLIDADO = estructuraReporte.ObtenValorEtiquetaReporte("ETIQUETA_CONSOLIDADO");
            var ETIQUETA_NO_CONSOLIDADO = estructuraReporte.ObtenValorEtiquetaReporte("ETIQUETA_NO_CONSOLIDADO");
            var ETIQUETA_FECHA = estructuraReporte.ObtenValorEtiquetaReporte("ETIQUETA_FECHA");
            
            
            Section seccion = docBuilder.CurrentSection;
		    seccion.PageSetup.DifferentFirstPageHeaderFooter = false;
		    seccion.HeadersFooters.LinkToPrevious(false);
		    seccion.HeadersFooters.Clear();
		    docBuilder.MoveToHeaderFooter(HeaderFooterType.HeaderPrimary);
		
		    Table tablaHead = docBuilder.StartTable();
		    docBuilder.ParagraphFormat.SpaceAfter = 0;
		    docBuilder.ParagraphFormat.SpaceBefore = 0;
		    docBuilder.CellFormat.ClearFormatting();

            //docBuilder.InsertCell();
            //establecerFuenteTituloCampo(docBuilder);
            //docBuilder.Font.Color = Color.Gray;
            //docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Left;
            //docBuilder.Write("Bolsa Mexicana de Valores S.A.B. de C.V.");
            //docBuilder.InsertCell();
            //docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Right;

            //Stream streamImg = Assembly.GetExecutingAssembly().GetManifestResourceStream(ReportConstants.LOGO_CABECERA);
            //if(streamImg != null)
            //{
            //    docBuilder.InsertImage(streamImg);
            //    streamImg.Close();
            //}

            //Fila con la razón social.
            if (!String.IsNullOrEmpty(estructuraReporte.RazonSocial))
            {
               docBuilder.InsertCell();
               establecerFuenteTituloCampo(docBuilder);
               docBuilder.CellFormat.PreferredWidth = PreferredWidth.FromPercent(70);
               docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Left;
               docBuilder.Font.Color = Color.Gray;
               //docBuilder.Font.Size = 9;
               docBuilder.Write(!String.IsNullOrEmpty(estructuraReporte.RazonSocial) ? estructuraReporte.RazonSocial : String.Empty);
              
               docBuilder.InsertCell();
               docBuilder.CellFormat.PreferredWidth = PreferredWidth.FromPercent(30);
               docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Right;
               docBuilder.Write(estructuraReporte.AplicaConsolidado ?
                    (estructuraReporte.Consolidado ? ETIQUETA_CONSOLIDADO : ETIQUETA_NO_CONSOLIDADO):
                    "");
               docBuilder.EndRow();
            }

		    ///Fila de año y trimestre
		    docBuilder.InsertCell();
		    docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Left;
		    docBuilder.CellFormat.PreferredWidth = PreferredWidth.FromPercent(70);
		    docBuilder.Font.Color = Color.Gray;
		    docBuilder.Font.Bold = false;
           
            docBuilder.Write(ETIQUETA_CLAVE_COTIZACION + ":       ");
            docBuilder.Font.Color = Color.Black;

            if (!String.IsNullOrEmpty(estructuraReporte.ClaveCotizacion))
            {
                docBuilder.Write(estructuraReporte.ClaveCotizacion);
            }

            docBuilder.InsertCell();
            docBuilder.CellFormat.PreferredWidth = PreferredWidth.FromPercent(30);
            docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Right;
            docBuilder.Font.Color = Color.Gray;
            
            if (!String.IsNullOrEmpty(estructuraReporte.Trimestre))
            {
                docBuilder.Write(ETIQUETA_TRIMESTRE + ":     ");
                docBuilder.Font.Color = Color.Black;

                docBuilder.Write(estructuraReporte.Trimestre);

                docBuilder.Font.Color = Color.Gray;
                docBuilder.Write("     " + ETIQUETA_ANO + ":    ");
                docBuilder.Font.Color = Color.Black;
                docBuilder.Write(estructuraReporte.Anio);
                docBuilder.EndRow();
            }
            else if (!String.IsNullOrEmpty(estructuraReporte.FechaReporte))
            {
                docBuilder.Write(ETIQUETA_FECHA + ":     ");
                docBuilder.Font.Color = Color.Black;
                docBuilder.Write(estructuraReporte.FechaReporte);
                docBuilder.EndRow();

            }

		    tablaHead.PreferredWidth = PreferredWidth.FromPercent(100);
		    tablaHead.SetBorders(LineStyle.None, 0,Color.Black);
		    tablaHead.SetBorder(BorderType.Horizontal, LineStyle.Single, .75, Color.DarkGray, true);
		    tablaHead.SetBorder(BorderType.Bottom, LineStyle.Single, .75, Color.DarkGray, true);
		    docBuilder.EndTable();
		
		    docBuilder.MoveToHeaderFooter(HeaderFooterType.FooterPrimary);
		
            var leyendaReportes = System.Configuration.ConfigurationManager.AppSettings.Get("LeyendaReportes");
            if (!String.IsNullOrEmpty(leyendaReportes))
            {
                Table tablaPie = docBuilder.StartTable();
                docBuilder.InsertCell();
                docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Left;
                docBuilder.Write(leyendaReportes);


                docBuilder.InsertCell();
                docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Right;

                docBuilder.InsertField("PAGE", "");
                docBuilder.Write(" " + ETIQUETA_DE + " ");
                docBuilder.InsertField("NUMPAGES", "");
                tablaPie.SetBorders(LineStyle.None, 0, Color.Black);
                docBuilder.EndTable();

            }
            else
            {
		    docBuilder.InsertField("PAGE", "");
		    docBuilder.Write(" " + ETIQUETA_DE + " ");
		    docBuilder.InsertField("NUMPAGES", "");
		    docBuilder.CurrentParagraph.ParagraphFormat.Alignment = ParagraphAlignment.Right;
            }
		
		    docBuilder.MoveToDocumentEnd();
	    }
	    
        /// Establece los bordes est⯤ar de una tabla
	    /// <param name="tablaActual"></param>
	    ///
	    public void establecerBordesGrisesTabla(Table tablaActual) 
        {
             tablaActual.SetBorders(LineStyle.Single, 1, Color.FromArgb(99,99,99));
       
        }

        /// <summary>
        /// Convierte un archivo PDF codificado en Base 64 a su representación HTML
        /// </summary>
        /// <returns></returns>
        protected String ObtenerHtmlDePDFBase64(String base64Pdf)
        {
            
            String resultado = null;
            /*
            var binaryPdf = Convert.FromBase64String(base64Pdf);
            SautinSoft.PdfFocus focus = new SautinSoft.PdfFocus();

            focus.HtmlOptions.ImageType = SautinSoft.PdfFocus.CHtmlOptions.eHtmlImageType.Png;
            focus.HtmlOptions.IncludeImageInHtml = true;
            focus.HtmlOptions.InlineCSS = true;
            focus.HtmlOptions.ProduceOnlyHtmlBody = true;
            
            focus.OpenPdf(binaryPdf);
            if (focus.PageCount > 0)
            {
               resultado = focus.ToHtml();
            }*/
            return resultado;           
        }

        protected String ObtenerHtmlDePDFBase64Aspose(String base64Pdf)
        {
            var converter = new AsposePDFConverter();
            return converter.convertirPDFBase64AHtml(base64Pdf);
        }
        protected Aspose.Words.Document ObtenerDocxDePDFBase64Aspose(String base64Pdf)
        {
            var converter = new AsposePDFConverter();
            return converter.convertirPDFBase64ADocx(base64Pdf);
        }
        public abstract void exportarRolAWord(DocumentBuilder docBuilder, DocumentoInstanciaXbrlDto instancia, IndiceReporteDTO rolAExportar, ReporteXBRLDTO estructuraReporte);

        public virtual void crearTablaHibercuboExcplicitas(DocumentBuilder docBuilder, DocumentoInstanciaXbrlDto instancia, HipercuboReporteDTO hibercuboReporte)
        {
            var plantillasContextos =  hibercuboReporte.Utileria.configuracion.PlantillasContextos;
            var matrizHechos = hibercuboReporte.Hechos;
            var titulos = hibercuboReporte.Titulos;

            Color colorTitulo = Color.FromArgb(ColorTituloTabla[0], ColorTituloTabla[1], ColorTituloTabla[2]);

            Table tablaDesglose = docBuilder.StartTable();
            docBuilder.ParagraphFormat.SpaceAfter = 0;
            docBuilder.ParagraphFormat.SpaceBefore = 2;

            establecerFuenteTituloCampo(docBuilder);
            docBuilder.Font.Size = TamanioLetraTituloTabla;
            docBuilder.CellFormat.Shading.BackgroundPatternColor = colorTitulo;
            docBuilder.CellFormat.PreferredWidth = PreferredWidth.Auto;
            docBuilder.Font.Color = Color.White;

            foreach (var idConcepto in matrizHechos.Keys)
            {
                var matrizPlantillaContexto = hibercuboReporte.Hechos[idConcepto];
                docBuilder.InsertCell();
                var nombreConcepto =
                    ReporteXBRLUtil.obtenerEtiquetaConcepto("es", ReporteXBRLUtil.ETIQUETA_DEFAULT, idConcepto, instancia);
                docBuilder.Write(nombreConcepto);
            }
            docBuilder.EndRow();

            docBuilder.CellFormat.Shading.BackgroundPatternColor = Color.White;
            docBuilder.CellFormat.PreferredWidth = PreferredWidth.Auto;
            docBuilder.Font.Color = Color.Black;
            var cantidadCeldasVacias = matrizHechos.Count - 1;

            foreach (var idPlantillaContexto in plantillasContextos.Keys)
            {

                var plantilla = plantillasContextos[idPlantillaContexto];
                var miembroPlantilla = plantilla.ValoresDimension[0];
                var nombreMiembro = ReporteXBRLUtil.obtenerEtiquetaConcepto("es", ReporteXBRLUtil.ETIQUETA_DEFAULT, miembroPlantilla.IdItemMiembro, instancia);
                docBuilder.CellFormat.Shading.BackgroundPatternColor = Color.LightGray;
                docBuilder.CellFormat.PreferredWidth = PreferredWidth.Auto;
                docBuilder.Font.Color = Color.Black;
                docBuilder.InsertCell();
                docBuilder.Write(nombreMiembro);
                for (var indexMiembro = 0; indexMiembro < cantidadCeldasVacias; indexMiembro++)
                {
                    docBuilder.InsertCell();
                    docBuilder.Write(String.Empty);
                }
                docBuilder.EndRow();
                var countType = 0;
                docBuilder.CellFormat.Shading.BackgroundPatternColor = Color.White;
                docBuilder.CellFormat.PreferredWidth = PreferredWidth.Auto;
                docBuilder.Font.Color = Color.Black;
                foreach (var idConcepto in matrizHechos.Keys)
                {
                    var matrizPlantillaContexto = hibercuboReporte.Hechos[idConcepto];
                    countType = matrizPlantillaContexto[idPlantillaContexto].Length;
                    break;
                }
                for (var indexType = 0; indexType < countType; indexType++)
                {
                    foreach (var idConcepto in matrizHechos.Keys)
                    {
                        var matrizPlantillaContexto = matrizHechos[idConcepto];
                        var listaHechos = matrizPlantillaContexto[idPlantillaContexto];
                        var hecho = listaHechos[indexType];
                        var valorHecho = hecho.Valor;
                        docBuilder.InsertCell();
                        docBuilder.Write(valorHecho);
                    }
                    docBuilder.EndRow();
                }
            }
            docBuilder.EndTable();
        }

        /// <summary>
        /// Obtiene el valor de una etiqueta por su identificador de concepto.
        /// </summary>
        /// <param name="idConcepto">Identificador del concepto.</param>
        /// <param name="instancia">Documento de instancia.</param>
        /// <returns>Valor por defecto de la etiqueta.</returns>
        public string ObtenEtiquetaConcepto(string idConcepto, DocumentoInstanciaXbrlDto instancia, string idioma)
        {
            ConceptoDto concepto;
            String textoEtiqueta = String.Empty;
            if (instancia.Taxonomia.ConceptosPorId.TryGetValue(idConcepto, out concepto))
            {
                IDictionary<string, EtiquetaDto> etiquetaPorRol;
                if (!concepto.Etiquetas.TryGetValue(idioma, out etiquetaPorRol))
                {
                    etiquetaPorRol = concepto.Etiquetas.First().Value;
                }
                EtiquetaDto etiquetaDto;
                if (etiquetaPorRol.TryGetValue(ReporteXBRLUtil.ETIQUETA_DEFAULT, out etiquetaDto))
                {
                    etiquetaDto = etiquetaPorRol.First().Value;
                }
                if (etiquetaDto != null)
                {
                    textoEtiqueta = etiquetaDto.Valor;
                }
            }
            return textoEtiqueta;
        }

        /// <summary>
        /// Asigna un colspan a la celda actual.
        /// </summary>
        /// <param name="docBuilder">Constructor del documento.</param>
        /// <param name="texto">Valor que se pretende presentar</param>
        /// <param name="colspan">Valor colspan de las celdas.</param>
        /// <param name="esHtml">Indica sii el contenido es HTML</param>
        public void SetCellColspan(DocumentBuilder docBuilder, String texto, int colspan, bool esHtml = false)
        {
            if (colspan > 1)
            {
                var newCells = colspan - 1;

                docBuilder.InsertCell();
                docBuilder.CellFormat.HorizontalMerge = CellMerge.First;
                if (!esHtml)
                {
                    if (!WordUtil.EsRTF(texto))
                    {
                        docBuilder.Write(texto);
                    }
                    else
                    {
                        var lastIndex = texto.Length < 1000 ? texto.Length - 1 : 1000;
                        docBuilder.Write(texto.Substring(0,lastIndex));
                    }
                    
                }
                else
                {

                    WordUtil.InsertHtml(docBuilder, ":celda" , "<div style=\"font-family:Arial;font-size: 6pt;\">" + texto + "</div>", false);
                    
                }
                

                for (var index = 0; index < newCells; index++)
                {

                    docBuilder.InsertCell();
                    docBuilder.CellFormat.HorizontalMerge = CellMerge.Previous;
                }
            }
            else
            {
                docBuilder.InsertCell();
                docBuilder.CellFormat.HorizontalMerge = CellMerge.None;
                if (!esHtml)
                {
                    docBuilder.Write(texto);
                }
                else
                {
                    WordUtil.InsertHtml(docBuilder, ":celda", "<div style=\"font-family:Arial;font-size: 6pt;\">" + texto + "</div>", false);
                   
                        
                }
            }
        }

        /// <summary>
        /// Imprime el titulo de un concepto.
        /// </summary>
        /// <param name="docBuilder">Constructor del documento.</param>
        /// <param name="concepto">Concepto del documento.</param>
        protected void ImprimeTitulo(DocumentBuilder docBuilder, ConceptoReporteDTO concepto)
        {
            establecerFuenteTituloCampo(docBuilder);
            docBuilder.Font.Size = TamanioLetraTituloConceptoNota;
            docBuilder.Font.Color = Color.Black;
            docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Left;
            docBuilder.Writeln();
            if (concepto.AtributosAdicionales != null && concepto.AtributosAdicionales.Count == 1)
            {
                conceptosEnIndice(docBuilder, concepto);
            }
            else
            {
                docBuilder.Write(concepto.Valor);
            }
            docBuilder.Writeln();
        }


        /// <summary>
        /// Imprime el titulo de un concepto.
        /// </summary>
        /// <param name="docBuilder">Constructor del documento.</param>
        /// <param name="texto">Texto del subtitulo.</param>
        public void ImprimeSubTitulo(DocumentBuilder docBuilder, String texto)
        {
            docBuilder.Font.Color = Color.Black;
            establecerFuenteTituloCampo(docBuilder);
            docBuilder.Writeln();
            docBuilder.Writeln(texto);
            docBuilder.Writeln();
            establecerFuenteValorCampo(docBuilder);
        }

        /// <summary>
        /// Concatena el valor de los elementos de la tarjeta.
        /// </summary>
        /// <param name="tarjeta">Diccionario con los valores a concatenar.</param>
        /// <param name="idsConceptos">Identificador de los conceptos a concatenar.</param>
        /// <param name="separador">Separador entre los valores.</param>
        /// <returns>Cadena con los valores concatenados.</returns>
        protected string ConcatenaElementosTarjeta(IDictionary<string, HechoDto> tarjeta, IList<string> idsConceptos, String separador)
        {
            var builder = new StringBuilder();
            foreach (var idConcepto in idsConceptos)
            {
                HechoDto hecho;
                if (tarjeta.TryGetValue(idConcepto, out hecho))
                {
                    builder.Append(separador);
                    builder.Append(hecho.Valor);
                }
            }

            return builder.Length > 0 ? builder.ToString().Substring(0) : String.Empty;
        }
        /// <summary>
        /// Imprime un fila con los titulos y deba imprime los valores de los hechos.
        /// </summary>
        /// <param name="docBuilder">Constructor del documento.</param>
        /// <param name="tarjeta">Diccionario con los conceptos del participante.</param>
        /// <param name="idsConceptos">Identificadores de los conceptos a imprimir.</param>
        /// <param name="instancia">Documento de instnacia.</param>
        protected void ImprimeConceptosTarjetaDosFilas(
            DocumentBuilder docBuilder, 
            IDictionary<string, HechoDto> tarjeta, 
            IList<string> idsConceptos, 
            DocumentoInstanciaXbrlDto instancia, 
            int colspan, 
            string idioma)
        {
            establecerFuenteCeldaTitulo(docBuilder);
            foreach (var idConcepto in idsConceptos)
            {
                var texto = ObtenEtiquetaConcepto(idConcepto, instancia, idioma);
                SetCellColspan(docBuilder, texto, colspan);
            }
            docBuilder.EndRow();
            establecerFuenteCeldaValor(docBuilder);
            foreach (var idConcepto in idsConceptos)
            {
                HechoDto hecho;
                var texto = String.Empty;
                var esHtml = false;
                if (tarjeta.TryGetValue(idConcepto, out hecho))
                {
                    esHtml = hecho.TipoDato.Contains(TIPO_DATO_TEXT_BLOCK);
                    texto = hecho.Valor ?? String.Empty;
                }
                SetCellColspan(docBuilder, texto, colspan, esHtml);
            }
            docBuilder.EndRow();
        }
        /// <summary>
        /// Imprime un fila intercalando en una celda el titulo y en la otra el valor.
        /// </summary>
        /// <param name="docBuilder">Constructor del documento.</param>
        /// <param name="tarjeta">Diccionario con los conceptos del participante.</param>
        /// <param name="idsConceptos">Identificadores de los conceptos a imprimir.</param>
        /// <param name="instancia">Documento de instnacia.</param>
        protected void ImprimeConceptosTarjetaMismaFila(
            DocumentBuilder docBuilder, 
            IDictionary<string, HechoDto> tarjeta, 
            IList<string> idsConceptos, 
            DocumentoInstanciaXbrlDto instancia, 
            int colspan, 
            string idioma)
        {

            foreach (var idConcepto in idsConceptos)
            {
                establecerFuenteCeldaTitulo(docBuilder);
                var textoTitulo = ObtenEtiquetaConcepto(idConcepto, instancia, idioma);
                SetCellColspan(docBuilder, textoTitulo, colspan);
                HechoDto hecho;
                var textoValor = String.Empty;
                if (tarjeta.TryGetValue(idConcepto, out hecho))
                {
                    textoValor = hecho.Valor ?? String.Empty;
                }
                docBuilder.Font.Color = Color.Black;
                SetCellColspan(docBuilder, textoValor, colspan);
                establecerFuenteCeldaValor(docBuilder);
            }
            docBuilder.EndRow();
        }
        /// <summary>
        /// Escribe el valor de un concepto en una fila de dos columnas.
        /// </summary>
        /// <param name="docBuilder">Constructor del documento.</param>
        /// <param name="idConcepto">Identificador del concepto.</param>
        /// <param name="rolAExportar">Indice del rol que se exporta</param>
        /// <param name="estructuraReporte">Estructura base del reporte.</param>
        protected void EscribirADosColumnasConceptoValor(DocumentBuilder docBuilder, String idConcepto, IndiceReporteDTO rolAExportar, ReporteXBRLDTO estructuraReporte, bool forzarHtml = false)
        {
            Table tablaActual = docBuilder.StartTable();
            docBuilder.ParagraphFormat.SpaceAfter = 5;
            docBuilder.ParagraphFormat.SpaceBefore = 5;



            docBuilder.InsertCell();
            establecerFuenteTituloCampo(docBuilder);
            docBuilder.Font.Size = TamanioLetraTituloConcepto;
            docBuilder.Font.Color = Color.Black;
            escribirTituloConcepto(docBuilder, idConcepto, estructuraReporte.Roles[rolAExportar.Rol]);
            docBuilder.Write(": ");

            docBuilder.InsertCell();
            establecerFuenteValorCampo(docBuilder);
            escribirValorHecho(docBuilder, estructuraReporte, estructuraReporte.Roles[rolAExportar.Rol], idConcepto, forzarHtml);
            docBuilder.EndRow();

            tablaActual.SetBorders(LineStyle.None, 0, Color.Black);
            tablaActual.SetBorder(BorderType.Horizontal, LineStyle.Single, .75, Color.DarkGray, true);
            tablaActual.SetBorder(BorderType.Bottom, LineStyle.Single, .75, Color.DarkGray, true);

            docBuilder.EndTable();
        }
        /// <summary>
        /// Escribe una fila con dos columnas donde la primera se considera el titulo y la sgunda el valor.
        /// </summary>
        /// <param name="titulo">Titulo del concepto.</param>
        /// <param name="valor">Valor del hecho.</param>
        /// <param name="docBuilder">Constructor del documento.</param>
        public void EscribirADosColumnasConceptoValor(String titulo, String valor, DocumentBuilder docBuilder)
        {
            Table tablaActual = docBuilder.StartTable();
            docBuilder.ParagraphFormat.SpaceAfter = 5;
            docBuilder.ParagraphFormat.SpaceBefore = 5;



            docBuilder.InsertCell();
            establecerFuenteTituloCampo(docBuilder);
            docBuilder.Font.Size = TamanioLetraTituloConcepto;
            docBuilder.Font.Color = Color.Black;
            docBuilder.Write(titulo);
            docBuilder.Write(": ");

            docBuilder.InsertCell();
            establecerFuenteValorCampo(docBuilder);
            docBuilder.Write(valor);
            docBuilder.EndRow();

            tablaActual.SetBorders(LineStyle.None, 0, Color.Black);
            tablaActual.SetBorder(BorderType.Horizontal, LineStyle.Single, .75, Color.DarkGray, true);
            tablaActual.SetBorder(BorderType.Bottom, LineStyle.Single, .75, Color.DarkGray, true);

            docBuilder.EndTable();
        }
        /// <summary>
        /// Imprime el valor de un hecho a dos columnas.
        /// </summary>
        /// <param name="docBuilder">Constructor del documento.</param>
        /// <param name="estructuraReporte">DTO con información general del reporte actual</param>
        /// <param name="concepto">Concepto que se presenta.</param>
        /// <param name="hecho">Hecho que se persenta.</param>
        public virtual void EscribirADosColumnasConceptoValor(DocumentBuilder docBuilder, ReporteXBRLDTO estructuraReporte, ConceptoReporteDTO concepto, HechoReporteDTO hecho)
        {
            Table tablaActual = docBuilder.StartTable();
            docBuilder.ParagraphFormat.SpaceAfter = 5;
            docBuilder.ParagraphFormat.SpaceBefore = 5;

            docBuilder.InsertCell();
            establecerFuenteTituloCampo(docBuilder);
            docBuilder.Font.Size = 11;
            docBuilder.Font.Color = Color.Black;
            docBuilder.Write(concepto.Valor);
            docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Justify;
            docBuilder.Write(": ");

            docBuilder.InsertCell();
            establecerFuenteValorCampo(docBuilder);
            docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Right;
            docBuilder.Font.Size = 10;
            escribirValorHecho(docBuilder, estructuraReporte, hecho, concepto);
            docBuilder.EndRow();

            tablaActual.SetBorders(LineStyle.None, 0, Color.Black);
            tablaActual.SetBorder(BorderType.Horizontal, LineStyle.Single, .75, Color.DarkGray, true);
            tablaActual.SetBorder(BorderType.Bottom, LineStyle.Single, .75, Color.DarkGray, true);

            docBuilder.EndTable();
            docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Left;
        }
        /// <summary>
        /// Determina si el tipo de dato se encuentar de los token item type regisgtrados.
        /// </summary>
        /// <param name="idTipDato">Identificador del tipo de dato xbrl.</param>
        /// <returns>Si el tipo de dato corresponde con uno de la lista de tokens.</returns>
        public bool EsTipoDatoTokenItemType(String idTipDato)
        {
            return TIPOS_DATO_TOKEN_ITEM_TYPE.Contains(idTipDato);
        }
        /// <summary>
        /// Obtiene el color de los títulos.
        /// </summary>
        /// <returns>Color de los títulos configurado para este reporte.</returns>
        public Color ObtenColorTitulo()
        {
            return Color.FromArgb(ColorTituloTabla[0], ColorTituloTabla[1], ColorTituloTabla[2]);
        }
        /// <summary>
        /// Obtiene una representación textual de la unidad dada.
        /// </summary>
        /// <param name="unidad">Unidd a evaluar.</param>
        /// <returns>Cadena con los nombres de las medidas que representan launidad.</returns>
        public String ObtenTextoUnidad(UnidadDto unidad)
        {
            String textoMedida = String.Empty;
            if (unidad == null)
            {
                return String.Empty;
            }

            if (unidad.Tipo == UnidadDto.Medida)
            {
                if (unidad.Medidas.Count > 1)
                {
                    var subMedidas = String.Empty;
                    foreach (var medida in unidad.Medidas)
                    {
                        subMedidas += " * " + medida.Nombre;
                    }
                    textoMedida = "(" + subMedidas.Substring(3) + ")";
                }
                else if (unidad.Medidas.Count == 1)
                {
                    textoMedida = unidad.Medidas.First().Nombre;
                }
            }
            else
            {
                if (unidad.MedidasNumerador.Count > 1)
                {
                    var subMedidas = String.Empty;
                    foreach (var medida in unidad.MedidasNumerador)
                    {
                        subMedidas += " * " + medida.Nombre;
                    }
                    textoMedida = "(" + subMedidas.Substring(3) + ")";
                }
                else if (unidad.MedidasNumerador.Count == 1)
                {
                    textoMedida = unidad.MedidasNumerador.First().Nombre;
                }
                textoMedida += "/";
                if (unidad.MedidasDenominador.Count > 1)
                {
                    var subMedidas = String.Empty;
                    foreach (var medida in unidad.MedidasDenominador)
                    {
                        subMedidas += " * " + medida.Nombre;
                    }
                    textoMedida += "(" + subMedidas.Substring(3) + ")";
                }
                else if (unidad.MedidasDenominador.Count == 1)
                {
                    textoMedida += unidad.MedidasDenominador.First().Nombre;
                }
            }

            return textoMedida;
        }

        /// <summary>
        /// Escribe el contenido de un hecho de tipo textbloc marcando los estilos del título en color negro.
        /// También lo marca compo titulo 2 para que se muestre en la tabla de contenido.
        /// </summary>
        /// <param name="docBuilder">Constructor del documento..</param>
        /// <param name="titulo">Titulo del campo.</param>
        /// <param name="valor">Valor del campo.</param>
        public void EscribirElementoTipoBloqueTexto(DocumentBuilder docBuilder, String titulo, String valor)
        {   
            establecerFuenteTituloCampo(docBuilder);
            docBuilder.Font.Size = TamanioLetraTituloConceptoNota;
            docBuilder.Font.Color = Color.Black;
            docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Justify;
            docBuilder.Write(titulo);
            Table tablaActual = docBuilder.StartTable();
            docBuilder.InsertCell();
            docBuilder.Font.Size = 1;
            docBuilder.Font.Spacing = 1;
            tablaActual.SetBorders(LineStyle.None, 0, Color.Black);
            docBuilder.CellFormat.Borders.Top.Color = Color.DarkGray;
            docBuilder.CellFormat.Borders.Top.LineStyle = LineStyle.Single;
            docBuilder.CellFormat.Borders.Top.LineWidth = 2;
            docBuilder.EndRow();
            docBuilder.EndTable();

            establecerFuenteValorCampo(docBuilder);
            docBuilder.Font.Color = Color.Black;
            docBuilder.InsertParagraph();
            docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Left;
            docBuilder.Write(valor);
            tablaActual = docBuilder.StartTable();
            docBuilder.InsertCell();
            docBuilder.Font.Size = 1;
            docBuilder.Font.Spacing = 1;
            tablaActual.SetBorders(LineStyle.None, 0, Color.Black);
            docBuilder.CellFormat.Borders.Bottom.Color = Color.DarkGray;
            docBuilder.CellFormat.Borders.Bottom.LineStyle = LineStyle.Single;
            docBuilder.CellFormat.Borders.Bottom.LineWidth = 2;
            docBuilder.EndRow();
            docBuilder.EndTable();

            docBuilder.Writeln();
            docBuilder.Writeln();
        }
    }
}
