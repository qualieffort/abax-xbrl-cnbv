using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using NPOI.SS.UserModel;
using AbaxXBRLCore.Viewer.Application.Dto;
using System.Text.RegularExpressions;

namespace AbaxXBRLCore.Common.Util
{
    /// <summary>
    /// Clase de utilería para el manejo de datos en las celdas de documentos Excel de NPoI
    /// </summary>
    /// <author>Emigdio Hernandez</author>
    public class ExcelUtil
    {
        /// <summary>
        /// Expresión regular del separador de notas al pie de página.
        /// </summary>
        private static Regex RegexFootNoteSeparator = new Regex("<xbrl:foot-note[\\t ]*(language:[\\t ]*\"\\w+\"[\\t ]*)?\\/>[\\t ]*(\\r?\\n)", RegexOptions.Compiled);
        /// <summary>
        /// Expresión regular para obtener el atributo language de la nota al pie de página.
        /// </summary>
        private static Regex RegexLanguageAttr = new Regex("language:[\\t ]*\"\\w+\"[\\t ]*", RegexOptions.Compiled);
        /// <summary>
        /// Expresión regular para obtener el atributo language de la nota al pie de página.
        /// </summary>
        private static Regex RegexPrefixLanguageAttr = new Regex("language:[\\t ]*\"", RegexOptions.Compiled);

        /// <summary>
        /// Obtiene de forma segura el valor de una celda
        /// </summary>
        /// <param name="tipoCelda">Tipo de celda a considerar</param>
        /// <param name="celda">Celda para obtener su valor</param>
        /// <returns>El valor de la celda, cadena vacía en caso de no localizar la celda</returns>
        public static string ObtenerValorCelda(CellType tipoCelda, ICell celda)
        {
            string valor = "";
            switch (tipoCelda)
            {
                case CellType.String:
                    valor = celda.StringCellValue;
                    break;
                case CellType.Numeric:
                    if (NPOI.SS.UserModel.DateUtil.IsCellDateFormatted(celda))
                    {
                        valor = celda.DateCellValue.ToShortDateString();
                    }
                    else
                    {
                        valor = celda.NumericCellValue.ToString(CultureInfo.InvariantCulture);
                    }
                    break;
                case CellType.Formula:
                    valor = ObtenerValorCelda(celda.CachedFormulaResultType, celda);
                    break;
                case CellType.Boolean:
                    valor = celda.BooleanCellValue.ToString();
                    break;
                case CellType.Blank:
                    valor = "";
                    break;
            }
            return valor;
        }

        /// <summary>
        /// Asigna el valor de una celda en una hoja en base a un renglón y columna
        /// </summary>
        /// <param name="hoja">Hoja donde se asignará el valor de la celda</param>
        /// <param name="renglon">Número de renglón</param>
        /// <param name="columna">Número de columna</param>
        /// <param name="valor">Valor a asignar</param>
        /// <param name="tipoCelda">Tipo de celda a crear</param>
        /// <param name="hecho">Hecho asignado a esta celda</param>
        public static void AsignarValorCelda(ISheet hoja, int renglon, int columna, string valor, CellType tipoCelda, HechoDto hecho, Boolean asignarComentarios = true)
        {
            if (hoja.LastRowNum < renglon)
            {
                hoja.CreateRow(renglon);
            }
            var celda = hoja.GetRow(renglon).GetCell(columna, MissingCellPolicy.CREATE_NULL_AS_BLANK);
            celda.SetCellType(tipoCelda);
            if (CellType.Numeric == tipoCelda)
            {
                double valorDouble = 0;
                if (Double.TryParse(valor, NumberStyles.Any, CultureInfo.InvariantCulture, out valorDouble))
                {
                    celda.SetCellValue(valorDouble);
                }
                else
                {
                    celda.SetCellValue(valor);
                }
            }
            else
            {
                celda.SetCellValue(valor);
            }
            if (asignarComentarios)
            {
                AgregarComentarioCelda(hoja, celda, hecho);
            }
        }



        /// <summary>
        /// Agrega un comentario a la celda indicada.
        /// </summary>
        /// <param name="hoja">Hoja que se esta procesando</param>
        /// <param name="celda">Celda a la que se pretende agregar el comentario.</param>
        /// <param name="hecho">Hecho con el listado de notas para generar los comentarios.</param>
        public static void AgregarComentarioCelda(ISheet hoja, ICell celda, HechoDto hecho)
        {
            var diccionarioNotas = hecho == null ? null : hecho.NotasAlPie;
            if (diccionarioNotas == null || diccionarioNotas.Count == 0)
            {
                return;
            }

            var drawing = hoja.CreateDrawingPatriarch();
            var factory = hoja.Workbook.GetCreationHelper();
            var anchor = drawing.CreateAnchor(0, 0, 0, 0, 2, 4, 4, 6);
            /*
            anchor.Col1 = celda.ColumnIndex;
            anchor.Col2 = celda.ColumnIndex + 2;
            anchor.Row1 = celda.RowIndex;
            anchor.Row2 = celda.RowIndex + 4;
            */
            var comment = celda.CellComment == null ? drawing.CreateCellComment(anchor) : celda.CellComment;

            var text = String.Empty;
            var idiomas = diccionarioNotas.Keys;
            foreach (var idioma in idiomas)
            {
                var notasIdioma = diccionarioNotas[idioma];
                if (notasIdioma == null || notasIdioma.Count == 0)
                {
                    continue;
                }

                foreach (var nota in notasIdioma)
                {
                    text += "<xbrl:foot-note language:\"" + notasIdioma[0].Idioma + "\">\n" + nota.Valor;
                }
            }

            var richText = factory.CreateRichTextString(text);
            richText.ClearFormatting();
            comment.String = richText;
            comment.Author = "XBRL";
            celda.CellComment = comment;
        }
        /// <summary>
        /// Obtiene el diccionario con las notas obtenidas del documento de excel.
        /// </summary>
        /// <param name="renglon">Fila donde se encuentra la celda a evaluar.</param>
        /// <param name="col">Columna donde se encuentra la celda a evaluar.</param>
        /// <param name="idiomaDefault">Identificador del lenguaje por defecto del documento.</param>
        /// <returns></returns>
        public static IDictionary<string, IList<NotaAlPieDto>> ObtenerComentariosCelda(IRow renglon, int col, String idiomaDefault)
        {
            if (renglon == null)
                return null;
            var celda = renglon.LastCellNum >= col ? renglon.GetCell(col, MissingCellPolicy.CREATE_NULL_AS_BLANK) : null;
            if (celda == null)
                return null;
            var textoNotas = celda.CellComment != null && celda.CellComment.String != null ? celda.CellComment.String.String : null;
            if (String.IsNullOrWhiteSpace(textoNotas))
                return null;

            var itemsArray = RegexFootNoteSeparator.Split(textoNotas);
            var diccionarioNoas = new Dictionary<string, IList<NotaAlPieDto>>();

            var textoNota = String.Empty;
            var lenguaje = idiomaDefault;
            foreach (var item in itemsArray)
            {
                if (RegexFootNoteSeparator.IsMatch(item))
                {
                    if (RegexLanguageAttr.IsMatch(item))
                    {
                        lenguaje = RegexPrefixLanguageAttr.Split(item)[1];
                        lenguaje = lenguaje.Substring(0, lenguaje.Length - 1);
                    }
                    else
                    {
                        lenguaje = idiomaDefault;
                    }
                    continue;
                }
                IList<NotaAlPieDto> listaNotas;
                if (diccionarioNoas.ContainsKey(lenguaje))
                {
                    listaNotas = diccionarioNoas[lenguaje];
                }
                else
                {
                    listaNotas = new List<NotaAlPieDto>();
                    diccionarioNoas.Add(lenguaje, listaNotas);
                }
                var nota = new NotaAlPieDto()
                {
                    Valor = item,
                    Idioma = lenguaje
                };
                listaNotas.Add(nota);
            }

            return diccionarioNoas;

        }

        /// <summary>
        /// Obtiene las fechas de inicio y de fin de una celda de fechas.
        /// Si la celda solo contiene una fecha entonces solo se asigna la fecha de fin.
        /// La fecha está en el formato enviado como parámetro.
        /// Si existe un guión medio entonces hay dos fechas separadas por un guín
        /// </summary>
        /// <param name="valorFecha"></param>
        /// <param name="separadorFechas"></param>
        /// <param name="fechaInicio"></param>
        /// <param name="fechaFin"></param>
        /// <param name="formatoFecha"></param>
        public static bool ObtenerFechasDeCelda(string valorFecha, string formatoFecha, char separadorFechas,
            out DateTime fechaInicio, out DateTime fechaFin)
        {
            var exito = false;
            var fechaInicioFinal = DateTime.MinValue;
            var fechaFinFinal = DateTime.MinValue;
            if (!String.IsNullOrEmpty(valorFecha))
            {
                //Verifica si existe mas de una fecha
                string[] fechasStrings = valorFecha.Split(separadorFechas);
                if (fechasStrings.Length > 0)
                {
                    if (fechasStrings.Length == 1)
                    {
                        exito = Common.Util.DateUtil.ParseDate(fechasStrings[0], formatoFecha, out fechaFinFinal);
                    }
                    else
                    {
                        exito = Common.Util.DateUtil.ParseDate(fechasStrings[0], formatoFecha, out fechaInicioFinal);
                        exito = exito &&
                                Common.Util.DateUtil.ParseDate(fechasStrings[1], formatoFecha, out fechaFinFinal);
                    }
                }
            }
            fechaInicio = fechaInicioFinal;
            fechaFin = fechaFinFinal;
            return exito;
        }

        /// <summary>
        /// Obtiene el valor de una celda, si existe error se retorna valor nulo
        /// </summary>
        /// <returns></returns>
        public static string ObtenerValorCelda(ISheet hoja, int row, int col)
        {
            var renglon = hoja.LastRowNum >= row ? hoja.GetRow(row) : null;
            if (renglon == null)
                return null;

            var celda = renglon.LastCellNum >= col ? renglon.GetCell(col, MissingCellPolicy.CREATE_NULL_AS_BLANK) : null;
            if (celda == null)
                return null;

            return ObtenerValorCelda(celda.CellType, celda);
        }

        /// <summary>
        /// Obtiene el valor de una celda, si existe error se retorna valor nulo
        /// </summary>
        /// <returns></returns>
        public static string ObtenerValorCelda(IRow renglon, int col)
        {
            if (renglon == null)
                return null;
            var celda = renglon.LastCellNum >= col ? renglon.GetCell(col, MissingCellPolicy.CREATE_NULL_AS_BLANK) : null;
            if (celda == null)
                return null;
            return ObtenerValorCelda(celda.CellType, celda);
        }

        /// <summary>
        /// Obtiene, de una celda donde existe la indicación de un concepto, el identificador correspondiente al id de concepto
        /// Esta celda contiene un ID de concepto del tipo idConcepto;{identificador}
        /// </summary>
        /// <param name="hojaPlantilla">Hoja de la plantilla de excel actualmente procesada</param>
        /// <param name="numRenglon">Número de renglón</param>
        /// <param name="numColumna">Número de columna</param>
        /// <returns>Identificador del concepto que contiene la celda, null en caso de no poder obtener contenido de la celda</returns>
        public static string ObtenerIdConceptoDeCelda(ISheet hojaPlantilla, int numRenglon, int numColumna)
        {
            string idConcepto = null;
            var contenido = ObtenerValorCelda(hojaPlantilla, numRenglon, numColumna);
            if (!String.IsNullOrEmpty(contenido))
            {
                var partes = contenido.Split(';');
                if (partes != null)
                {
                    if (partes.Length >= 2)
                    {
                        idConcepto = partes[1];
                    }
                    else
                    {
                        idConcepto = partes[0];
                    }
                }
            }
            return idConcepto;
        }
    }
}
