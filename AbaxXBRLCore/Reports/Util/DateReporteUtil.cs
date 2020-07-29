using AbaxXBRLCore.Common.Util;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Reports.Util
{
    public class DateReporteUtil
    {
        public static IDictionary<String, String> obtenerPeriodos(String cierrePeriodo)
        {
            IDictionary<String, String> periodos = new Dictionary<String, String>();

            DateTime dateCierrePeriodo = obtenerFecha(cierrePeriodo);
            //int mes = dateCierrePeriodo.Month;

            String trimAnterior = modificadorFechas(dateCierrePeriodo, -1, 0, 0 ,0, 0, 0);
            String inicioTrim = modificadorFechas(dateCierrePeriodo, 0, -2, 0, 0, 0, 1);
            String inicioAnio = modificadorFechas(dateCierrePeriodo, 0, 0, 0, 0, 1, 1);
            //DateTime dateInicioAnio = obtenerFecha(inicioAnio);

            periodos.Add("trim_actual", inicioTrim + "_" + cierrePeriodo);
            periodos.Add("trim_anterior", trimAnterior);
            periodos.Add("cierre_trim_actual", cierrePeriodo);
            periodos.Add("cierre_trim_anio_anterior", modificadorFechas(dateCierrePeriodo, -1, 0, 0, 0, 12, 31));
            periodos.Add("inicio_trim_anio_anterior", modificadorFechas(dateCierrePeriodo, -2, 0, 0, 0, 12, 31));
            periodos.Add("trim_anio_actual", inicioTrim + "_" + cierrePeriodo);
            periodos.Add("trim_anio_anterior", modificadorFechas(dateCierrePeriodo, -1, -2, 0, 0, 0, 1) + "_" + trimAnterior);
            periodos.Add("acum_anio_actual", inicioAnio + "_" + cierrePeriodo);
            periodos.Add("acum_anio_anterior", modificadorFechas(dateCierrePeriodo, -1, 0, 0, 0, 1, 1) + "_" + modificadorFechas(dateCierrePeriodo, -1, 0, 0, 0, 0, 0));
            periodos.Add("anio_actual", modificadorFechas(dateCierrePeriodo, -1, 1, 0, 0, 0, 1) + "_" + cierrePeriodo);
            periodos.Add("anio_anterior", modificadorFechas(dateCierrePeriodo, -2, 1, 0, 0, 0, 1) + "_" + trimAnterior);

            return periodos;
        }
        /// <summary>
        /// Retorna una fecha formateada con los ajustes en sus valores indicados en los parametros.
        /// </summary>
        /// <param name="fecha">Fecha de referencia sobre la que se realizarán los ajustes.</param>
        /// <param name="addAnios">Años a agregar.</param>
        /// <param name="addMeses">Meses a agregar.</param>
        /// <param name="addDias">Días a agregar.</param>
        /// <param name="anio">Año que se asignará o 0 si se quiere mantener el año de la fecha de referencia.</param>
        /// <param name="mes">Mes que se asignará o 0 si se quiere mantener el mes de la fecha de referencia.</param>
        /// <param name="dia">Día del més que se asignará o 0 si se quiere mantener el día de la fecha de referencia.</param>
        /// <returns>Cadena foramateada con la fecha ajustada.</returns>
        public static String modificadorFechas(DateTime fecha, int addAnios, int addMeses, int addDias, int anio, int mes, int dia)
        {
            String fechaString = null;
            var calendar = fecha;
            if (addAnios != 0) 
            {
               calendar = calendar.AddYears(addAnios);
            }
            if (addMeses != 0)
            {
                calendar = calendar.AddMonths(addMeses);
            }
            if (addDias != 0) 
            {
                calendar = calendar.AddDays(addDias);
            }
            if (anio > 0 || mes > 0 || dia > 0)
            {
                var anioToSet = anio > 0 ? anio : calendar.Year;
                var mesToSet = mes > 0 ? mes : calendar.Month;
                var diaToSet = dia > 0 ? dia : calendar.Day;
                calendar = new DateTime(anioToSet, mesToSet, diaToSet);
            }
            fechaString = DateUtil.ToFormatString(calendar,DateUtil.YMDateFormat);

            return fechaString;
        }

        public static DateTime obtenerFecha(String fecha)
        {
            DateTime dateTime;
            if (!DateUtil.ParseDate(fecha, DateUtil.MMDYDateFormat, out dateTime))
            {
                DateUtil.ParseDate(fecha, out dateTime);
            }
            return dateTime;
        }

        public static String formatoFechaEstandar(DateTime fecha)
        {
            return DateUtil.ToFormatString(fecha, DateUtil.YMDateFormat);
        }

        public static String obtenerFechaPorFormatoLocalizado(String fecha, String formato, String idioma)
        {
            CultureInfo cultureInfo = CultureInfo.CreateSpecificCulture(idioma);
            TextInfo textInfo = cultureInfo.TextInfo;

            DateTime dateTime = DateReporteUtil.obtenerFecha(fecha);
            String fechaFinal = fecha;
            if (fecha != null)
            {
                fechaFinal = textInfo.ToTitleCase(dateTime.ToString(formato, cultureInfo));
            }
            return fechaFinal;
        }

        /**
         * Obtiene la fecha formateada en cadena, transformando la fecha origen y restando
         * un día
         * @param fechaOrigen Fecha de origen a transformar
         */
        public static String obtenerFechaMenosUnDia(String fechaOrigen)
        {
            DateTime dateOrigen = obtenerFecha(fechaOrigen);
            dateOrigen = dateOrigen.AddDays(-1);
            return formatoFechaEstandar(dateOrigen);
        }
    }
}
