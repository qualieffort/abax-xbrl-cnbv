using AbaxXBRLCore.Export;
using AbaxXBRLCore.Viewer.Application.Service.Impl;
using AbaxXBRL.Taxonomia.Impl;
using NPOI.XSSF.UserModel;
using NPOI.SS.UserModel;
using System.IO;
using AbaxXBRLCore.ExportGeneric;
using System.Collections.Generic;
using System;
using AbaxXBRL.Taxonomia;
using AbaxXBRLCore.Common.Util;
using AbaxXBRL.Constantes;
using System.Runtime.InteropServices;
using NPOI.HSSF.Util;
using NPOI.SS.Util;
using NPOI.HSSF.UserModel;
using Aspose.Words;
using Aspose.Words.Tables;
using System.Diagnostics;
using System.Threading;
using System.Globalization;
using AbaxXBRLCore.Reports.Util;

namespace AbaxXBRLCore.ExportGeneric
{
    public class CrearReporteGenerico
    {

        #region Constantes
        const int TAMANIO_COLUMNA_EN_CONCEPTOS = 3 * 255;
        const int TAMANIO_COLUMNA_ULTIMONIVEL_CONCEPTOS = 38 * 255;
        const int TAMANIO_COLUMNA_EN_VALORES = 27 * 255;

        const int NUMERO_COLUMNAS_PARA_TITULO_ROL = 2;
        const int NUMERO_FILAS_PARA_ENCABEZADO = 1;

        const short TAMANIO_FUENTE_PARA_TITULO_ROL = 12;
        const short TAMANIO_FUENTE_PARA_CONTENIDO = 10;

        const int NUMERO_RENGLON_TITULO_ROL = 0;
        const int NUMERO_RENGLON_TITULO_URI = 1;
        const int NUMERO_RENGLON_ENCABEZADO_FECHA = 2;
        const int NUMERO_RENGLON_ENCABEZADO_ENTIDAD = 3;
        const int NUMERO_RENGLON_ENCABEZADO_UNIDAD = 4;

        const int NUMERO_DE_HOJA_MAXIMO = 1000;
        const string NOMBRE_HOJA_POR_DEFAULT = "Hoja";
        const string NOMBRE_COLUMNA_DIMENSIONES = "DIMENSION";

        const int ERROR_SHARING_VIOLATION = 32;
        const int ERROR_LOCK_VIOLATION = 33;


        enum Color
        {
            GRIS = 0,
            AZUL = 4,
            AMARILLO = 8
        }


        #endregion

        /// <summary>
        /// Obtiene un color especifico por medio de un numero entero
        /// </summary>
        /// <param name="indiceColor">Representa en numero de color</param>
        /// <returns></returns>
        private short ObtenerColorEntidad(int indiceColor)
        {

            short[] colores = { NPOI.SS.UserModel.IndexedColors.Grey25Percent.Index,
                                   NPOI.SS.UserModel.IndexedColors.BrightGreen.Index,
                                   NPOI.SS.UserModel.IndexedColors.Grey50Percent.Index,
                                   NPOI.SS.UserModel.IndexedColors.LightBlue.Index,
                                   NPOI.SS.UserModel.IndexedColors.LightCornflowerBlue.Index,
                                   NPOI.SS.UserModel.IndexedColors.LightGreen.Index,
                                   NPOI.SS.UserModel.IndexedColors.LightOrange.Index,
                                   NPOI.SS.UserModel.IndexedColors.LightTurquoise.Index,
                                   NPOI.SS.UserModel.IndexedColors.LightYellow.Index,
                                   NPOI.SS.UserModel.IndexedColors.Lime.Index};

            if (indiceColor == colores.Length) indiceColor = 0;
            return colores[indiceColor];

        }


        /// <summary>
        /// Convierte un objeto documentoInstanciaDto a la estructura que se requiere para crear el reporte 
        /// y llama al metodo que genera el archivo xlsx
        /// </summary>
        /// <param name="rutaArchivoXBRL">Ruta del archivo XBRL a procesar</param>
        /// <param name="rutaDestino">Ruta destino donde se crear el archivo xlsx</param>
        /// <param name="idioma">Idioma en la que se va a generar el reporte</param>
        /// <param name="agruparPorunidad">Agrupacion de las columnas por unidad</param>
        public MemoryStream ExcelStream(string rutaArchivoXBRL, string idioma, bool agruparPorunidad)
        {
            if (!File.Exists(rutaArchivoXBRL))
                throw new Exception(string.Format("El archivo {0} no existe", Path.GetFileName(rutaArchivoXBRL)));

            var documentoInstancia = new DocumentoInstanciaXBRL();
            var xbrlViewerService = new XbrlViewerService();
            documentoInstancia.Cargar(rutaArchivoXBRL);
            var documentoInstanciaDto = xbrlViewerService.PreparaDocumentoParaVisor(documentoInstancia, null);
            ReporteGenerico reporteGenerico = new ReporteGenerico();
            var estruturaDeReporte = reporteGenerico.GeneracionReporteGenerico(documentoInstanciaDto, idioma, agruparPorunidad);
            return ReporteGenericoExcel(estruturaDeReporte, idioma, agruparPorunidad);
        }

        /// <summary>
        /// Llama al metodo que genera el reporte en excel
        /// </summary>
        /// <param name="estruturaDeReporte">Estructura que contiene la informacion necesaria para la creacion del reporte</param>
        /// <param name="rutaDestino">Ruta destino donde se crear el archivo xlsx</param>
        public MemoryStream ExcelStream(EstructuraReporteGenerico estruturaDeReporte)
        {
            return ReporteGenericoExcel(estruturaDeReporte, estruturaDeReporte.Idioma, estruturaDeReporte.AgruparPorUnidad);
        }

        /// <summary>
        /// Crea y retorna el documento word en byte[].
        /// </summary>
        /// <param name="estruturaDeReporte"></param>
        /// <returns></returns>
        public byte[] ExportWordConsultaReporte(EstructuraReporteGenerico estruturaDeReporte)
        {
            Document word = null;
            word = new Document();

            try
            {
                DocumentBuilder docBuilder = new DocumentBuilder(word);
                docBuilder.CurrentSection.PageSetup.Orientation = Orientation.Portrait;
                docBuilder.CurrentSection.PageSetup.PaperSize = Aspose.Words.PaperSize.Letter;

                docBuilder.CellFormat.Borders.LineStyle = Aspose.Words.LineStyle.Single;

                var numeroColumnas = estruturaDeReporte.ReporteGenericoPorRol.Count;

                foreach (var rol in estruturaDeReporte.ReporteGenericoPorRol)
                {
                    var columna = 0;

                    foreach (var columnaReporte in rol.ColumnasDelReporte)
                    {
                        var fecha = columnaReporte.TipoDePeriodo == 1 ? Convert.ToDateTime(columnaReporte.FechaInstante.Date).ToString("dd/MM/yyyy") : Convert.ToDateTime(columnaReporte.FechaInicio.Date).ToString("dd/MM/yyyy") + " - " + Convert.ToDateTime(columnaReporte.FechaFin.Date).ToString("dd/MM/yyyy");
                        var moneda = columnaReporte.Moneda != null && columnaReporte.Moneda.Length > 0 ? " - " + columnaReporte.Moneda : "";
                        var tituloSeccion = columnaReporte.Entidad + " - " + fecha + moneda;

                        this.EscribirTituloSeccion(docBuilder, tituloSeccion);

                        

                        foreach (var concepto in rol.Conceptos)
                        {
                            if (concepto.Hechos[columna] != null)
                            {

                                List<String> nombreDimensiones = new List<string>();

                                if (concepto.Dimensiones != null && concepto.Dimensiones.Values.Count > 0)
                                {
                                    foreach (var estructuraDimensionReporte in concepto.Dimensiones.Values)
                                    {
                                        nombreDimensiones.Add(estructuraDimensionReporte.NombreDimension);
                                        nombreDimensiones.Add(estructuraDimensionReporte.NombreMiembro);
                                    }
                                }

                                docBuilder.CellFormat.PreferredWidth = PreferredWidth.FromPercent(0);

                                if (concepto != null && concepto.Hechos != null && concepto.Hechos.Length > 0 && concepto.Hechos[columna] != null && concepto.Hechos[columna].TipoDato.Contains("textBlockItemType") || (concepto.Hechos[columna].TipoDato.Contains("stringItemType") && concepto.Hechos[columna].Valor != null && concepto.Hechos[columna].Valor.Length > 20))
                                {
                                    this.EscribirConceptoPorRenglon(docBuilder, concepto.NombreConcepto, concepto.Hechos[columna].Valor != null ? concepto.Hechos[columna].Valor : "", nombreDimensiones);
                                }
                                else
                                {
                                    String valor = "";

                                    var tipoDeDato = concepto.Hechos[columna].TipoDato.Substring(concepto.Hechos[columna].TipoDato.LastIndexOf(':') + 1);

                                    if (concepto.Hechos[columna].Valor != null)
                                    {
                                        switch (tipoDeDato)
                                        {
                                            case "stringItemType":
                                            case "monthNumberItemType":
                                            case "siNoItemType":
                                            case "denominationOfTheIssueItemType":
                                                valor = concepto.Hechos[columna].Valor;
                                                break;
                                            case "monetaryItemType":
                                            case "decimalItemType":
                                            case "nonNegativeIntegerItemType":
                                            case "percentItemType":
                                                valor = ReporteXBRLUtil.formatoDecimal(Convert.ToDecimal(concepto.Hechos[columna].Valor), ReporteXBRLUtil.FORMATO_CANTIDADES_DECIMALES_AUX);
                                                break;
                                            case "booleanItemType":
                                                valor = concepto.Hechos[columna].Valor.Equals("true") ? "SI" : "NO";
                                                break;
                                            case "dateItemType":
                                                valor = Convert.ToDateTime(concepto.Hechos[columna].Valor).ToString("dd/MM/yyyy");
                                                break;
                                            default:
                                                valor = concepto.Hechos[columna].Valor;
                                                break;
                                        }
                                    }

                                    this.EscribirADosColumnas(docBuilder, concepto.NombreConcepto, valor, nombreDimensiones);
                                }
                            }
                        }
                        
                        docBuilder.Writeln();
                        docBuilder.MoveToDocumentEnd();

                        if ((columna + 1) < rol.ColumnasDelReporte.Count)
                        {
                            docBuilder.InsertBreak(BreakType.PageBreak);
                        }

                        columna++;
                    }
                }
            }
            catch (Exception e)
            {
                LogUtil.Error(e);
            }

            return guardarDocumentoComoWord(word);
        }

        /// <summary>
        /// Escribe el título de la sección.
        /// </summary>
        /// <param name="docBuilder"></param>
        /// <param name="tituloSeccion"></param>
        public void EscribirTituloSeccion(DocumentBuilder docBuilder, String tituloSeccion)
        {
            docBuilder.Font.Name = "Arial";
            docBuilder.Font.Bold = true;
            docBuilder.Font.Size = 12;
            docBuilder.ParagraphFormat.StyleIdentifier = StyleIdentifier.Heading1;
            docBuilder.Font.Color = System.Drawing.Color.Black;
            docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Center;
            docBuilder.CellFormat.PreferredWidth = PreferredWidth.FromPercent(100);

            docBuilder.Write(tituloSeccion);
        }

        /// <summary>
        /// Escribe un concepto a dos columnas (Concepto, valor).
        /// </summary>
        /// <param name="docBuilder"></param>
        /// <param name="concepto"></param>
        /// <param name="valor"></param>
        /// <param name="dimensiones"></param>
        public void EscribirADosColumnas(DocumentBuilder docBuilder, String concepto, String valor, List<String> dimensiones)
        {
            Table tabla = docBuilder.StartTable();
            docBuilder.InsertCell();

            docBuilder.Font.Name = "Arial";
            docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Left;
            docBuilder.Font.Color = System.Drawing.Color.Black;

            EscribirDimensionesDeConcepto(docBuilder, dimensiones);

            docBuilder.CellFormat.PreferredWidth = PreferredWidth.FromPercent(60);
            docBuilder.Font.Bold = true;
            docBuilder.Font.Size = 10;

            if (dimensiones != null)
            {
                docBuilder.Write(" " + concepto);
            }
            else
            {
                docBuilder.Write(concepto);
            }

            docBuilder.InsertCell();
            docBuilder.CellFormat.PreferredWidth = PreferredWidth.FromPercent(40);
            docBuilder.Font.Size = 8;
            docBuilder.Font.Bold = false;
            docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Right;

            foreach (var dimension in dimensiones)
            {
                docBuilder.Writeln();
            }

            docBuilder.Write(valor);
            docBuilder.EndRow();            

            tabla.SetBorders(Aspose.Words.LineStyle.None, 0, System.Drawing.Color.Black);
            tabla.SetBorder(BorderType.Horizontal, Aspose.Words.LineStyle.Single, .75, System.Drawing.Color.DarkGray, true);
            tabla.SetBorder(BorderType.Bottom, Aspose.Words.LineStyle.Single, .75, System.Drawing.Color.DarkGray, true);
            docBuilder.EndTable();
        }

        /// <summary>
        /// Escribe el concepto como si fuera un textBlockItemType.
        /// </summary>
        /// <param name="docBuilder"></param>
        /// <param name="concepto"></param>
        /// <param name="valor"></param>
        /// <param name="dimensiones"></param>
        public void EscribirConceptoPorRenglon(DocumentBuilder docBuilder, String concepto, String valor, List<String> dimensiones)
        {
            Table tabla = docBuilder.StartTable();
            docBuilder.InsertCell();

            docBuilder.Font.Name = "Arial";
            docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Left;
            docBuilder.Font.Color = System.Drawing.Color.Black;

            EscribirDimensionesDeConcepto(docBuilder, dimensiones);

            docBuilder.Font.Bold = true;
            docBuilder.Font.Size = 10;           
            docBuilder.CellFormat.PreferredWidth = PreferredWidth.FromPercent(99);

            if (dimensiones != null)
            {
                docBuilder.Write(" " + concepto);
            }
            else
            {
                docBuilder.Write(concepto);
            }

            docBuilder.CellFormat.PreferredWidth = PreferredWidth.FromPercent(1);
            docBuilder.Write("");

            docBuilder.EndRow();

            docBuilder.InsertCell();
            docBuilder.Font.Bold = false;
            docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Justify;
            docBuilder.Font.Size = 8;            
            docBuilder.CellFormat.PreferredWidth = PreferredWidth.FromPercent(99);
            docBuilder.InsertHtml(valor);
            docBuilder.CellFormat.PreferredWidth = PreferredWidth.FromPercent(1);
            docBuilder.Write("");
            docBuilder.EndRow();            

            tabla.SetBorders(Aspose.Words.LineStyle.None, 0, System.Drawing.Color.Black);
            tabla.SetBorder(BorderType.Horizontal, Aspose.Words.LineStyle.Single, .75, System.Drawing.Color.DarkGray, true);
            tabla.SetBorder(BorderType.Bottom, Aspose.Words.LineStyle.Single, .75, System.Drawing.Color.DarkGray, true);
            docBuilder.EndTable();
        }

        /// <summary>
        /// Escribe si existe en el concepto dimensiones y miembros del concepto.
        /// </summary>
        /// <param name="docBuilder">El DocumentBuilder</param>
        /// <param name="dimensiones">Listado de las dimensiones y miembros</param>
        public void EscribirDimensionesDeConcepto(DocumentBuilder docBuilder, List<String> dimensiones)
        {
            if (dimensiones != null)
            {
                docBuilder.Font.Bold = false;
                docBuilder.Font.Size = 8;
                foreach (var dimension in dimensiones)
                {
                    docBuilder.Writeln(dimension);
                }
            }
        }

        /// <summary>
        /// Retorna el documento en byte[].
        /// </summary>
        /// <param name="docGuardar"></param>
        /// <returns></returns>
        public static byte[] guardarDocumentoComoWord(Document docGuardar)
        {
            byte[] resultadoArchivo = null;
            var memoryStreamSalida = new MemoryStream();
            try
            {
                memoryStreamSalida = new MemoryStream();
                var currentCulture = Thread.CurrentThread.CurrentCulture;
                Thread.CurrentThread.CurrentCulture = new CultureInfo("en-US");
                docGuardar.Save(memoryStreamSalida, SaveFormat.Docx);
                Thread.CurrentThread.CurrentCulture = currentCulture;
                resultadoArchivo = memoryStreamSalida.ToArray();
            }
            catch (Exception ex)
            {
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

        /// <summary>
        /// Generación del reporte en excel 
        /// </summary>
        /// <param name="rutaArchivoXBRL">Ruta del archivo XBRL que sera procesado</param>
        /// <param name="rutaDestino">Ruta y nombre de archivo donde se creara el archivo *.xlsx</param>
        /// <param name="idioma">Idioma en la que se va a generar el reporte</param>
        /// <param name="agruparPorunidad">Agrupacion de las columnas por unidad</param>
        private MemoryStream ReporteGenericoExcel(EstructuraReporteGenerico estruturaDeReporte, string idioma, bool agruparPorunidad)
        {

            // Generacion ReporteExcel
            XSSFWorkbook workbook = null;
            ISheet sheet = null;
            List<int> columnasOcultas = new List<int>();

            int NumeroFilasParaEncabezado = NUMERO_FILAS_PARA_ENCABEZADO + NUMERO_COLUMNAS_PARA_TITULO_ROL;
            if (estruturaDeReporte.AgruparPorUnidad) NumeroFilasParaEncabezado++;

            workbook = new XSSFWorkbook();

            foreach (var rol in estruturaDeReporte.ReporteGenericoPorRol)
            {
                int nivelIndentacionMaximo = ObtenerUltimaIndentacion(rol.Conceptos) + 2;
                int columnaDimension = ObtenerUltimaIndentacion(rol.Conceptos) + 1;

                string nombreHoja = ValidarNombreDeHoja(rol.Rol, workbook);
                sheet = workbook.CreateSheet(nombreHoja);


                var contarColumna = nivelIndentacionMaximo;
                foreach (var columna in rol.ColumnasDelReporte)
                {
                    if (columna.OcultarColumna)
                        columnasOcultas.Add(contarColumna);
                    contarColumna++;
                }

                #region Estilos
                IFont fuenteParaTitulo = sheet.Workbook.CreateFont();
                fuenteParaTitulo.FontHeightInPoints = TAMANIO_FUENTE_PARA_TITULO_ROL;
                fuenteParaTitulo.Boldweight = (short)NPOI.SS.UserModel.FontBoldWeight.Bold;

                IFont fuenteParaContenido = sheet.Workbook.CreateFont();
                fuenteParaContenido.FontHeightInPoints = TAMANIO_FUENTE_PARA_CONTENIDO;

                IFont fuenteParaConceptosAbstractos = sheet.Workbook.CreateFont();
                fuenteParaConceptosAbstractos.FontHeightInPoints = TAMANIO_FUENTE_PARA_CONTENIDO;
                fuenteParaConceptosAbstractos.Boldweight = (short)FontBoldWeight.Bold;

                ICellStyle EstiloEstandarEnCeldasEncabezado = sheet.Workbook.CreateCellStyle();
                EstiloEstandarEnCeldasEncabezado.VerticalAlignment = VerticalAlignment.Center;
                EstiloEstandarEnCeldasEncabezado.Alignment = HorizontalAlignment.Left;
                EstiloBordeACeldas(EstiloEstandarEnCeldasEncabezado);
                EstiloEstandarEnCeldasEncabezado.SetFont(fuenteParaContenido);

                EstiloEstandarEnCeldasEncabezado.FillForegroundColor = ObtenerColorEntidad((int)Color.AMARILLO);
                EstiloEstandarEnCeldasEncabezado.FillPattern = NPOI.SS.UserModel.FillPattern.SolidForeground;

                ICellStyle EstiloEstandarEnCeldasConceptos = sheet.Workbook.CreateCellStyle();
                EstiloEstandarEnCeldasConceptos.VerticalAlignment = VerticalAlignment.Center;
                EstiloEstandarEnCeldasConceptos.Alignment = HorizontalAlignment.Left;
                EstiloBordeACeldas(EstiloEstandarEnCeldasConceptos);
                EstiloEstandarEnCeldasConceptos.SetFont(fuenteParaContenido);

                EstiloEstandarEnCeldasConceptos.FillForegroundColor = ObtenerColorEntidad((int)Color.AZUL);
                EstiloEstandarEnCeldasConceptos.FillPattern = NPOI.SS.UserModel.FillPattern.SolidForeground;

                ICellStyle EstiloEstandarEnCeldasConceptosAbstracto = sheet.Workbook.CreateCellStyle();
                EstiloEstandarEnCeldasConceptosAbstracto.VerticalAlignment = EstiloEstandarEnCeldasConceptos.VerticalAlignment;
                EstiloEstandarEnCeldasConceptosAbstracto.Alignment = EstiloEstandarEnCeldasConceptos.Alignment;
                EstiloBordeACeldas(EstiloEstandarEnCeldasConceptosAbstracto);
                EstiloEstandarEnCeldasConceptosAbstracto.SetFont(fuenteParaConceptosAbstractos);

                EstiloEstandarEnCeldasConceptosAbstracto.FillForegroundColor = ObtenerColorEntidad((int)Color.AZUL);
                EstiloEstandarEnCeldasConceptosAbstracto.FillPattern = NPOI.SS.UserModel.FillPattern.SolidForeground;

                ICellStyle EstiloEstandarEnCeldasDimension = sheet.Workbook.CreateCellStyle();
                EstiloEstandarEnCeldasDimension.WrapText = true;
                EstiloEstandarEnCeldasDimension.VerticalAlignment = VerticalAlignment.Center;
                EstiloEstandarEnCeldasDimension.Alignment = HorizontalAlignment.Left;
                EstiloBordeACeldas(EstiloEstandarEnCeldasDimension);
                EstiloEstandarEnCeldasDimension.SetFont(fuenteParaContenido);

                EstiloEstandarEnCeldasDimension.FillForegroundColor = ObtenerColorEntidad((int)Color.GRIS);
                EstiloEstandarEnCeldasDimension.FillPattern = NPOI.SS.UserModel.FillPattern.SolidForeground;

                ICellStyle EstiloEstandarEnCeldasValoresHecho = sheet.Workbook.CreateCellStyle();
                EstiloEstandarEnCeldasValoresHecho.WrapText = true;
                EstiloEstandarEnCeldasValoresHecho.VerticalAlignment = VerticalAlignment.Center;
                EstiloEstandarEnCeldasValoresHecho.Alignment = HorizontalAlignment.Right;
                EstiloBordeACeldas(EstiloEstandarEnCeldasValoresHecho);
                EstiloEstandarEnCeldasValoresHecho.SetFont(fuenteParaContenido);

                ICellStyle EstiloEstandarEnCeldasValoresHechoBloqueTexto = sheet.Workbook.CreateCellStyle();
                EstiloEstandarEnCeldasValoresHechoBloqueTexto.WrapText = true;
                EstiloEstandarEnCeldasValoresHechoBloqueTexto.VerticalAlignment = VerticalAlignment.Top;
                EstiloEstandarEnCeldasValoresHechoBloqueTexto.Alignment = HorizontalAlignment.Left;
                EstiloBordeACeldas(EstiloEstandarEnCeldasValoresHechoBloqueTexto);
                EstiloEstandarEnCeldasValoresHechoBloqueTexto.SetFont(fuenteParaContenido);

                ICellStyle estiloTituloRol = sheet.Workbook.CreateCellStyle();
                estiloTituloRol.VerticalAlignment = VerticalAlignment.Center;
                estiloTituloRol.Alignment = HorizontalAlignment.Left;
                estiloTituloRol.SetFont(fuenteParaTitulo);

                #endregion

                #region Renglones Titulo Rol
                var renglonTituloRol = sheet.CreateRow(NUMERO_RENGLON_TITULO_ROL);
                var celdaTituloRol = renglonTituloRol.GetCell(0, MissingCellPolicy.CREATE_NULL_AS_BLANK);
                celdaTituloRol.SetCellValue(rol.Rol);
                celdaTituloRol.CellStyle = estiloTituloRol;

                var renglonUriRol = sheet.CreateRow(NUMERO_RENGLON_TITULO_URI);
                var celdaUriRol = renglonUriRol.GetCell(0, MissingCellPolicy.CREATE_NULL_AS_BLANK);
                celdaUriRol.SetCellValue(rol.RolUri);
                celdaUriRol.CellStyle = estiloTituloRol;
                #endregion

                int iniciaColumna = 0;
                for (int filaEncabezado = NUMERO_COLUMNAS_PARA_TITULO_ROL; filaEncabezado <= NumeroFilasParaEncabezado; filaEncabezado++)
                {
                    var renglon = sheet.CreateRow(filaEncabezado);
                    iniciaColumna = nivelIndentacionMaximo;

                    #region Imprimir columnas al reporte

                    var decremetarColumna = 0;
                    foreach (var columna in rol.ColumnasDelReporte)
                    {
                        if (columnasOcultas.Contains(iniciaColumna))
                        {
                            iniciaColumna++;
                            decremetarColumna = decremetarColumna - 1;
                            continue;
                        }
                        iniciaColumna = iniciaColumna + decremetarColumna;

                        ICell celdaColumna = null;
                        switch (filaEncabezado)
                        {
                            case NUMERO_RENGLON_ENCABEZADO_FECHA:
                                string tituloFecha = GenerarEncabezadoFecha(columna);
                                celdaColumna = renglon.GetCell(iniciaColumna, MissingCellPolicy.CREATE_NULL_AS_BLANK);
                                celdaColumna.SetCellValue(tituloFecha);
                                break;
                            case NUMERO_RENGLON_ENCABEZADO_ENTIDAD:
                                celdaColumna = renglon.GetCell(iniciaColumna, MissingCellPolicy.CREATE_NULL_AS_BLANK);
                                celdaColumna.SetCellValue(columna.Entidad);
                                break;
                            case NUMERO_RENGLON_ENCABEZADO_UNIDAD:
                                if (estruturaDeReporte.AgruparPorUnidad)
                                {
                                    celdaColumna = renglon.GetCell(iniciaColumna, MissingCellPolicy.CREATE_NULL_AS_BLANK);
                                    celdaColumna.SetCellValue(columna.Moneda);
                                }
                                break;
                        }
                        sheet.SetColumnWidth(iniciaColumna, TAMANIO_COLUMNA_EN_CONCEPTOS);
                        celdaColumna.CellStyle = EstiloEstandarEnCeldasEncabezado;
                        iniciaColumna++;
                    }
                    #endregion
                }

                //Formato a celdas de columna dimension
                #region Borde a columna de encabezado dimension
                sheet.GetRow(NUMERO_RENGLON_ENCABEZADO_FECHA).CreateCell(nivelIndentacionMaximo - 1).CellStyle = EstiloEstandarEnCeldasEncabezado;
                sheet.GetRow(NUMERO_RENGLON_ENCABEZADO_ENTIDAD).CreateCell(nivelIndentacionMaximo - 1).CellStyle = EstiloEstandarEnCeldasEncabezado;
                if (agruparPorunidad)
                    sheet.GetRow(NUMERO_RENGLON_ENCABEZADO_UNIDAD).CreateCell(nivelIndentacionMaximo - 1).CellStyle = EstiloEstandarEnCeldasEncabezado;
                else
                    sheet.GetRow(NUMERO_RENGLON_ENCABEZADO_ENTIDAD).CreateCell(nivelIndentacionMaximo - 1).CellStyle = EstiloEstandarEnCeldasEncabezado;
                #endregion

                iniciaColumna = nivelIndentacionMaximo;
                int filaConceptos = NumeroFilasParaEncabezado + 1;
                int numeroCeldasAgrupar = 0;
                int filaInicialParaAgrupar = 0;
                foreach (var concepto in rol.Conceptos)
                {
                    var renglon = sheet.CreateRow(filaConceptos);
                    var celda = renglon.GetCell(concepto.NivelIndentacion, MissingCellPolicy.CREATE_NULL_AS_BLANK);
                    celda.SetCellValue(concepto.NombreConcepto);
                    bool EsAbstracto = (concepto.EsAbstracto != null ? concepto.EsAbstracto.Value : false);
                    if (EsAbstracto)
                    {
                        celda.CellStyle = EstiloEstandarEnCeldasConceptosAbstracto;
                    }
                    else
                    {
                        celda.CellStyle = EstiloEstandarEnCeldasConceptos;
                    }

                    sheet.SetColumnWidth(concepto.NivelIndentacion, TAMANIO_COLUMNA_EN_CONCEPTOS);
                    if (ObtenerUltimaIndentacion(rol.Conceptos) == concepto.NivelIndentacion)
                    {
                        sheet.SetColumnWidth(concepto.NivelIndentacion, TAMANIO_COLUMNA_ULTIMONIVEL_CONCEPTOS);
                    }
                    filaInicialParaAgrupar = filaConceptos;

                    bool primerDimensionANivelConcepto = true;
                    bool contieneDimensiones = false;
                    bool aplicaAgrupacionDeCeldas = false;

                    #region Imprime las dimensiones del concepto
                    bool TituloColumnaDimension = true;
                    foreach (var dimension in concepto.Dimensiones.Values)
                    {
                        if (TituloColumnaDimension)
                        {
                            var renglonEncabezadoEntidad = sheet.GetRow(NUMERO_RENGLON_ENCABEZADO_ENTIDAD);
                            var celdaTituloDimension = renglonEncabezadoEntidad.GetCell(nivelIndentacionMaximo - 1, MissingCellPolicy.CREATE_NULL_AS_BLANK);
                            celdaTituloDimension.SetCellValue(NOMBRE_COLUMNA_DIMENSIONES);

                            TituloColumnaDimension = !TituloColumnaDimension;
                        }

                        contieneDimensiones = true;
                        IRow renglonParaDimension = null;
                        if (primerDimensionANivelConcepto)
                        {
                            renglonParaDimension = sheet.GetRow(filaConceptos);
                            primerDimensionANivelConcepto = !primerDimensionANivelConcepto;
                        }
                        else
                        {
                            filaConceptos++;
                            renglonParaDimension = sheet.CreateRow(filaConceptos);
                        }
                        numeroCeldasAgrupar++;
                        var celdaDimension = renglonParaDimension.GetCell(columnaDimension, MissingCellPolicy.CREATE_NULL_AS_BLANK);
                        celdaDimension.SetCellValue(string.Format("{0}:{1}", dimension.NombreDimension, dimension.NombreMiembro));
                        sheet.SetColumnWidth(columnaDimension, TAMANIO_COLUMNA_ULTIMONIVEL_CONCEPTOS);
                        celdaDimension.CellStyle = EstiloEstandarEnCeldasDimension;
                    }

                    if (contieneDimensiones)
                    {
                        aplicaAgrupacionDeCeldas = true;
                        CellRangeAddress rangoDeCeldasAgrupar = new CellRangeAddress(filaInicialParaAgrupar, filaInicialParaAgrupar + numeroCeldasAgrupar - 1, concepto.NivelIndentacion, columnaDimension - 1);
                        sheet.AddMergedRegion(rangoDeCeldasAgrupar);
                        EstiloBordeACeldasAgrupadas(workbook, sheet, rangoDeCeldasAgrupar);
                    }
                    else
                    {
                        var renglonDimensionVacio = sheet.GetRow(filaConceptos);
                        var celdaDimension = renglonDimensionVacio.GetCell(columnaDimension, MissingCellPolicy.CREATE_NULL_AS_BLANK);
                        celdaDimension.CellStyle = EstiloEstandarEnCeldasDimension;

                        CellRangeAddress rangoDeCeldasConceptosAgrupar = new CellRangeAddress(filaConceptos, filaConceptos, concepto.NivelIndentacion, nivelIndentacionMaximo - 2);
                        sheet.AddMergedRegion(rangoDeCeldasConceptosAgrupar);
                        EstiloBordeACeldasAgrupadas(workbook, sheet, rangoDeCeldasConceptosAgrupar);
                    }

                    #endregion
                    iniciaColumna = nivelIndentacionMaximo;
                    #region Imprimir los hecho en la celda
                    var decremetarColumna = 0;
                    foreach (var hechoPorColumna in concepto.Hechos)
                    {
                        if (columnasOcultas.Contains(iniciaColumna))
                        {

                            iniciaColumna++;
                            decremetarColumna = decremetarColumna - 1;
                            continue;
                        }
                        iniciaColumna = iniciaColumna + decremetarColumna;

                        var celdaHechos = renglon.GetCell(iniciaColumna, MissingCellPolicy.CREATE_NULL_AS_BLANK);
                        if (hechoPorColumna != null)
                        {
                            if (hechoPorColumna.EsNumerico)
                            {
                                celdaHechos.SetCellValue(Double.Parse(hechoPorColumna.Valor));
                                celdaHechos.SetCellType(CellType.Numeric);
                                celdaHechos.CellStyle = EstiloEstandarEnCeldasValoresHecho;
                            }
                            else if (hechoPorColumna.TipoDato.Contains(TiposDatoXBRL.TextBlockItemType) || hechoPorColumna.TipoDato.Contains(TiposDatoXBRL.StringItemType))
                            {
                                celdaHechos.SetCellValue(hechoPorColumna.ValorFormateado);
                                celdaHechos.CellStyle = EstiloEstandarEnCeldasValoresHechoBloqueTexto;
                            }
                            else
                            {
                                celdaHechos.SetCellValue(hechoPorColumna.Valor);
                                celdaHechos.CellStyle = EstiloEstandarEnCeldasValoresHecho;
                            }
                        }
                        if (aplicaAgrupacionDeCeldas)
                        {
                            CellRangeAddress rangoDeCeldasAgrupar = new CellRangeAddress(filaInicialParaAgrupar, filaInicialParaAgrupar + numeroCeldasAgrupar - 1, iniciaColumna, iniciaColumna);
                            sheet.AddMergedRegion(rangoDeCeldasAgrupar);
                            EstiloBordeACeldasAgrupadas(workbook, sheet, rangoDeCeldasAgrupar);
                        }
                        sheet.SetColumnWidth(iniciaColumna, TAMANIO_COLUMNA_EN_VALORES);

                        iniciaColumna++;
                    }
                    #endregion
                    aplicaAgrupacionDeCeldas = false;
                    numeroCeldasAgrupar = 0;
                    filaConceptos++;
                    iniciaColumna = nivelIndentacionMaximo;
                }
            }
            try
            {
                var stream = new MemoryStream();

                workbook.Write(stream);
                stream.Flush();

                return stream;
            }
            catch (Exception ex)

            {
                throw new Exception("Error al guardar el archivo excel en stream");
            }

        }

        /// <summary>
        /// Aplica borde a un rango de celdas
        /// </summary>
        /// <param name="workBook">Libro en el que se esta trabajando</param>
        /// <param name="hoja">Hoja en la que se esta trabajando</param>
        /// <param name="rangoDeCeldas">Rango de celdas</param>
        private void EstiloBordeACeldasAgrupadas(IWorkbook workBook, ISheet hoja, CellRangeAddress rangoDeCeldas)
        {
            RegionUtil.SetBorderTop((int)BorderStyle.Thin, rangoDeCeldas, hoja, workBook);
            RegionUtil.SetBorderBottom((int)BorderStyle.Thin, rangoDeCeldas, hoja, workBook);
            RegionUtil.SetBorderLeft((int)BorderStyle.Thin, rangoDeCeldas, hoja, workBook);
            RegionUtil.SetBorderRight((int)BorderStyle.Thin, rangoDeCeldas, hoja, workBook);
        }

        /// <summary>
        /// Aplica borde a una celda
        /// </summary>
        /// <param name="estiloDeCelda">Objeto que contiene el estilo de una celda</param>
        private void EstiloBordeACeldas(ICellStyle estiloDeCelda)
        {
            estiloDeCelda.BorderBottom = BorderStyle.Thin;
            estiloDeCelda.BorderTop = BorderStyle.Thin;
            estiloDeCelda.BorderLeft = BorderStyle.Thin;
            estiloDeCelda.BorderRight = BorderStyle.Thin;
        }

        /// <summary>
        /// Extrae los primero 8 digitos del rol para crear la hoja de excel
        /// </summary>
        /// <param name="nombreRol">Nombre del rol</param>
        /// <param name="libro">libro de excel</param>
        /// <returns></returns>
        private string ValidarNombreDeHoja(string nombreRol, XSSFWorkbook libro)
        {
            string nombreHoja = nombreRol;
            List<string> nombreHojasExistentes = ListaDeHojasDeExcel(libro);
            if (!string.IsNullOrEmpty(nombreHoja))
            {
                nombreHoja = nombreRol.Substring(0, 7);
                nombreHoja = EliminarCaracteresNoValidos(nombreHoja);

                if (string.IsNullOrEmpty(nombreHoja))
                {
                    return ObtenerNombreDeHojaPorDefault(nombreHojasExistentes);
                }
                else
                {
                    if (nombreHojasExistentes.Contains(nombreHoja))
                        return ObtenerNombreDeHojaPorDefault(nombreHojasExistentes);
                }
            }
            else
            {
                return ObtenerNombreDeHojaPorDefault(nombreHojasExistentes);
            }
            return nombreHoja;
        }

        /// <summary>
        /// Genera un listado del nombre de las hojas del excel
        /// </summary>
        /// <param name="libro">Libro de excel</param>
        /// <returns></returns>
        private List<string> ListaDeHojasDeExcel(XSSFWorkbook libro)
        {
            List<string> nombreHojasExistentes = new List<string>();
            for (int hojaId = 0; hojaId <= libro.NumberOfSheets - 1; hojaId++)
            {
                nombreHojasExistentes.Add(libro.GetSheetName(hojaId));
            }
            return nombreHojasExistentes;
        }

        /// <summary>
        /// Genera nombre generico para la hoja de excel 
        /// </summary>
        /// <param name="nombreHojasExistentes">Lista de nombres del libro de excel</param>
        /// <returns></returns>
        private string ObtenerNombreDeHojaPorDefault(List<string> nombreHojasExistentes)
        {
            for (var numeroHoja = 1; numeroHoja <= NUMERO_DE_HOJA_MAXIMO; numeroHoja++)
            {
                if (!nombreHojasExistentes.Contains(NOMBRE_HOJA_POR_DEFAULT + numeroHoja))
                {
                    return NOMBRE_HOJA_POR_DEFAULT + numeroHoja;
                }
            }
            return string.Empty;
        }

        /// <summary>
        /// Elimina de la cadena todo caracter que no se numero o letra
        /// </summary>
        /// <param name="cadena">Cadena a validar</param>
        /// <returns></returns>
        private string EliminarCaracteresNoValidos(string cadena)
        {
            string nuevoCadena = string.Empty;
            foreach (char caracter in cadena)
            {
                if (Char.IsLetterOrDigit(caracter))
                    nuevoCadena = nuevoCadena + caracter.ToString();
            }
            return nuevoCadena;
        }


        /// <summary>
        /// Por cada columna se genera un formato de cadena de las fechas dependiendo del tipo de periodo
        /// </summary>
        /// <param name="columna">Objeto que contiene la informacion para la creacion de la columnas del reporte</param>
        /// <returns></returns>
        private string GenerarEncabezadoFecha(EstructuraColumnaReporte columna)
        {
            string tituloFecha = string.Empty;

            switch (columna.TipoDePeriodo)
            {
                case Period.Instante:
                    tituloFecha = AbaxXBRLCore.Common.Util.DateUtil.ToFormatString(columna.FechaInstante.ToUniversalTime(), AbaxXBRLCore.Common.Util.DateUtil.YMDateFormat);
                    break;
                case Period.Duracion:
                    tituloFecha = AbaxXBRLCore.Common.Util.DateUtil.ToFormatString(columna.FechaInicio.ToUniversalTime(), AbaxXBRLCore.Common.Util.DateUtil.YMDateFormat) +
                    ConstantesGenerales.Underscore_String
                    + AbaxXBRLCore.Common.Util.DateUtil.ToFormatString(columna.FechaFin.ToUniversalTime(), AbaxXBRLCore.Common.Util.DateUtil.YMDateFormat);
                    break;
                case Period.ParaSiempre:
                    tituloFecha = "Para Siempre";
                    break;
            }
            return tituloFecha;
        }

        /// <summary>
        /// Obtiene el ultimo nivel que existe en los conceptos para saber donde se deben generar las columnas de las fechas
        /// </summary>
        /// <param name="estructuraReporte"></param>
        /// <returns></returns>
        private int ObtenerUltimaIndentacion(List<EstructuraConceptoReporte> estructuraReporte)
        {
            int nivelIndentacionMaximo = 0;
            foreach (var concepto in estructuraReporte)
            {
                if (concepto.NivelIndentacion > nivelIndentacionMaximo)
                {
                    nivelIndentacionMaximo = concepto.NivelIndentacion;
                }
            }
            return nivelIndentacionMaximo;
        }


        public void CrearArchivoEnExcel(byte[] contenidoDearchivoStream, string rutaDestino)
        {
            try
            {
                using (var archivoStream = new FileStream(rutaDestino, FileMode.Create, FileAccess.ReadWrite))
                {
                    archivoStream.Write(contenidoDearchivoStream, 0, contenidoDearchivoStream.Length);
                }
            }
            catch (IOException ex)
            {
                if (IsFileLocked(ex))
                {
                    throw new Exception(string.Format("El archivo {0} existe y se encuentra en uso, no se puede reemplazar", Path.GetFileName(rutaDestino)));
                }
            }
        }

        /// <summary>
        /// Valida la excepcion para indetificar si el error se genero por que el archivo esta en uso
        /// </summary>
        /// <param name="exception">Objeto que contiene el error que se genera</param>
        /// <returns></returns>
        private bool IsFileLocked(Exception exception)
        {
            int errorCode = Marshal.GetHRForException(exception) & ((1 << 16) - 1);
            return errorCode == ERROR_SHARING_VIOLATION || errorCode == ERROR_LOCK_VIOLATION;
        }

    }
}
