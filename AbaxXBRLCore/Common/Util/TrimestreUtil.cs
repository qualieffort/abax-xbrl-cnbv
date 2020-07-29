using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Common.Util
{
    /// <summary>
    /// Clase de utilerías para la determinación de trimestres
    /// </summary>
    public class TrimestreUtil
    {

        public static String[] IDS_TRIMESTRE = { 
                                                    "mx_ccd_NumberOfQuarter", 
                                                    "mx_deuda_NumberOfQuarter", 
                                                    "mx_trac_NumberOfQuarter", 
                                                    "ifrs_mx-cor_20141205_NumeroDeTrimestre"};

        //Inventario de trimestres
        private static IDictionary<int, DateTime> TRIMESTRE_INICIO = null;
        private static IDictionary<int, DateTime> TRIMESTRE_FIN = null;
        //Inicializar
        static TrimestreUtil()
        {
            TRIMESTRE_INICIO = new Dictionary<int, DateTime>
                             {
                                 {1, new DateTime(2014, 1, 1)},
                                 {2, new DateTime(2014, 4, 1)},
                                 {3, new DateTime(2014, 7, 1)},
                                 {4, new DateTime(2014, 10, 1)}
                             };
            TRIMESTRE_FIN = new Dictionary<int, DateTime>
                             {
                                 {1, new DateTime(2014, 3, 31)},
                                 {2, new DateTime(2014, 6, 30)},
                                 {3, new DateTime(2014, 9, 30)},
                                 {4, new DateTime(2014, 12, 31)}
                             };
        }
        /// <summary>
        /// Determina el trimestre al que corresponde la fecha enviada,
        /// O cero si no corresponde al cierre de un trimestre
        /// </summary>
        /// <param name="fecha">Fecha a evaluar</param>
        /// <returns>Trimestre 1 a 4 o 0 si no es cierre de trimestre</returns>
        public static int ObtenerTrimestre(DateTime fecha)
        {
            KeyValuePair<int, DateTime> trim;
            trim = TRIMESTRE_FIN.FirstOrDefault(t => t.Value.Day == fecha.Day && t.Value.Month == fecha.Month);
            if(trim.Key>0)
            {
                return trim.Key;
            }
            return 0;
        }
        /// <summary>
        /// Determina si la fecha corresponde al cierre de un primer trimestre
        /// </summary>
        /// <param name="fecha">Fecha a evaluar</param>
        /// <returns>True si es el cierre de un primer trimestre</returns>
        public static bool EsPrimerTrimestre(DateTime fecha)
        {
            return true;
        }
        /// <summary>
        /// Obtiene las fechas de inicio y fin del trimestre enviado como paráemtro
        /// </summary>
        /// <param name="trimestre"></param>
        /// <param name="fechaInicio"></param>
        /// <param name="fechaFin"></param>
        public static void ObtenerFechasTrimestre(int trimestre, int anio, out DateTime fechaInicio, out DateTime fechaFin)
        {
            if (TRIMESTRE_INICIO.ContainsKey(trimestre) && TRIMESTRE_FIN.ContainsKey(trimestre))
            {
                fechaInicio = new DateTime(anio, TRIMESTRE_INICIO[trimestre].Month, TRIMESTRE_INICIO[trimestre].Day);
                fechaFin = new DateTime(anio, TRIMESTRE_FIN[trimestre].Month, TRIMESTRE_FIN[trimestre].Day);
            }else
            {
                fechaInicio = DateTime.MinValue;
                fechaFin = DateTime.MinValue;
            }
        }

        /// <summary>
        /// Obtiene las fechas de fin del trimestre enviado como parámetro
        /// </summary>
        /// <param name="trimestre"></param>
        /// <returns>La fecha de fin del trimestre</returns>
        public static DateTime ObtenerFechaFinTrimestre(int trimestre, int anio)
        {
            return new DateTime(anio, TRIMESTRE_FIN[trimestre].Month, TRIMESTRE_FIN[trimestre].Day);
        }

        /// <summary>
        /// Obtiene la fecha de inicio del año respecto a la recha enviada
        /// </summary>
        /// <param name="fechaReporte">Fecha del reporte</param>
        /// <returns>Fecha de inicio del año</returns>
        public static DateTime ObtenerInicioDeAnio(DateTime fechaReporte)
        {
            return new DateTime(fechaReporte.Year,1,1);
        }

        /// <summary>
        /// Obtiene la fecha de fin del  año respecto a la recha enviada
        /// </summary>
        /// <param name="fechaReporte">Fecha del reporte</param>
        /// <returns>Fecha de fin del año</returns>
        public static DateTime ObtenerFinDeAnio(DateTime fechaReporte)
        {
            return new DateTime(fechaReporte.Year, 12, 31);
        }
        /// <summary>
        /// Obtiene la fecha de hace un año a partir de la fecha enviada como parámetro
        /// </summary>
        /// <param name="fechaReporte">Fecha para el cálculo</param>
        /// <returns></returns>
        public static  DateTime ObtenerFechaA12M(DateTime fechaReporte)
        {
            var fecha = new DateTime(fechaReporte.Year,fechaReporte.Month,fechaReporte.Day);
            return fecha.AddDays(1).AddYears(-1);
        }
    }
}
