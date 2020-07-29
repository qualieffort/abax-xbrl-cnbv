using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Common.Util
{
    
    /// <summary>
    /// Clase de utilerías para la manipulación y transformación de fechas
    /// <author>Emigdio Hernadez</author>
    /// </summary>
    public class DateUtil
    {
        /// <summary>
        /// El formato de fecha estándar para día, mes y año
        /// </summary>
        public const string DMYDateFormat = "dd/MM/yyyy";

        public const String DMYDateFormat1 = "d/MM/yyyy";
        public const String DMYDateFormat2 = "dd/M/yyyy";
        public const String DMYDateFormat3 = "d/M/yyyy";

        

        /// <summary>
        /// El formato de fecha completo para día, mes y año hora y minuto
        /// </summary>
        public const string DMYHMSDateFormat = "dd/MM/yyyy HH:mm";
        public const string DMYHMSDateFormat1 = "d/MM/yyyy HH:mm";
        public const string DMYHMSDateFormat2 = "dd/M/yyyy HH:mm";
        public const string DMYHMSDateFormat3 = "d/M/yyyy HH:mm";

        /// <summary>
        /// Formato de fecha completo en forma estandar
        /// </summary>
        public const string YMDateFormat = "yyyy-MM-dd";
        public const string YMDateFormat1 = "yyyy-M-dd";
        public const string YMDateFormat2 = "yyyy-MM-d";
        public const string YMDateFormat3 = "yyyy-M-d";

        /// <summary>
        /// Formato de fecha en inglés
        /// </summary>
        public const string MMDYDateFormat = "MM/dd/yyyy";
        public const string MMDYDateFormat1 = "M/dd/yyyy";
        public const string MMDYDateFormat2 = "MM/d/yyyy";
        public const string MMDYDateFormat3 = "M/d/yyyy";

        public const string MMMMYYYYDateFormat = "MMMM yyyy";
        /// <summary>
        /// Lista de formatos
        /// </summary>
        public static string[] Date_Formats = null;

        static DateUtil()
        {
            Date_Formats = new String[] { 
            DMYDateFormat,
            DMYDateFormat1,
            DMYDateFormat2,
            DMYDateFormat3,
            DMYHMSDateFormat,
            DMYHMSDateFormat1,
            DMYHMSDateFormat2,
            DMYHMSDateFormat3,
            YMDateFormat,
            YMDateFormat1,
            YMDateFormat2,
            YMDateFormat3,
            MMDYDateFormat,
            MMDYDateFormat1,
            MMDYDateFormat2,
            MMDYDateFormat3
            };
        }

        /// <summary>
        /// Convierte la representación en cadena de una fecha a su equivalente en el objeto date time usando
        /// el formato estándar de dd/MM/yyyy
        /// </summary>
        /// <param name="dateString">Cadena con la fecha de origen</param>
        /// <returns>Objeto DateTime transformado, en caso de no lograr una transformación se retorna el valor mínimo</returns>
        public static DateTime ParseStandarDate(String dateString)
        {
            DateTime fechaFinal = DateTime.MinValue;
            DateTime.TryParseExact(dateString, DMYDateFormat, CultureInfo.InvariantCulture,
                                   DateTimeStyles.None, out fechaFinal);
            return fechaFinal;
        }

        /// <summary>
        /// Convierte la representación en cadena de una fecha a su equivalente en el objeto date time usando
        /// el formato enviado como parámetro
        /// </summary>
        /// <param name="dateString">Cadena con la fecha de origen</param>
        /// <para name="formato">Formato para la conversión</para>
        /// <param name="fechaFinal">Fecha a llenar</param>
        /// <returns>True si se logra transformar, false en otro caso</returns>
        public static Boolean ParseDate(String dateString, String formato, out DateTime fechaFinal)
        {
            return DateTime.TryParseExact(dateString, formato, CultureInfo.InvariantCulture,
                DateTimeStyles.None, out fechaFinal);
        }

        /// <summary>
        /// Convierte la representación en cadena de una fecha a su equivalente en el objeto date time 
        /// </summary>
        /// <param name="dateString">Cadena con la fecha de origen</param>
        /// <param name="fechaFinal">Fecha a llenar</param>
        /// <returns>True si se logra transformar, false en otro caso</returns>
        public static Boolean ParseDate(String dateString, out DateTime fechaFinal)
        {
            return DateTime.TryParse(dateString, CultureInfo.InvariantCulture, DateTimeStyles.None, out fechaFinal);
        }

        /// <summary>
        /// Convierte una fecha en cadena con el formato estándar de año mes y día
        /// </summary>
        /// <param name="fecha"></param>
        /// <returns></returns>
        public static String ToStandarString(System.Nullable<DateTime> fecha)
        {
            if (fecha != null)
            {
                return fecha.Value.ToString(DMYDateFormat, CultureInfo.InvariantCulture);
            }
            return String.Empty;
        }
        /// <summary>
        /// Convierte una fecha en cadena con el formato de fecha y hora completo
        /// </summary>
        /// <param name="fecha"></param>
        /// <returns></returns>
        public static String ToFullString(System.Nullable<DateTime> fecha)
        {
            if (fecha != null)
            {
                return fecha.Value.ToString(DMYHMSDateFormat, CultureInfo.InvariantCulture);
            }
            return String.Empty;
        }
        /// <summary>
        /// Convierte una fecha en cadena con el formato enviado como parámetro
        /// </summary>
        /// <param name="fecha">Fecha a convertir</param>
        /// <param name="formato">Parámetro a utilizar</param>
        /// <returns>Fecha convertida en cadena</returns>
        public static string ToFormatString(System.Nullable<DateTime> fecha, string formato)
        {
            if (fecha != null)
            {
                return fecha.Value.ToString(formato, CultureInfo.InvariantCulture);
            }
            return String.Empty;
        }

        /// <summary>
        /// Trata de parsear una fecha en diferentes formatos, regresa nulo si no logra formatear
        /// </summary>
        /// <returns></returns>
        public static string ParseDateMultipleFormats(String fechaString) {
            if (fechaString != null)
            {
                DateTime fechaFinal = new DateTime();
                foreach (var dateFormat in Date_Formats)
                {
                    if (DateTime.TryParseExact(fechaString, dateFormat, CultureInfo.InvariantCulture, DateTimeStyles.None, out fechaFinal))
                    {
                        return DateUtil.ToFormatString(fechaFinal, DateUtil.YMDateFormat);
                    }
                }
            }
            return String.Empty;
        }

        internal static int ParseDate(DateTime fechaFinReporte, string p)
        {
            throw new NotImplementedException();
        }
    }
}
