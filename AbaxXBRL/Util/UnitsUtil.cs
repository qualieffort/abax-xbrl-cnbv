using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRL.Util
{
    /// <summary>
    /// Clase de utilerías generales para el tratamiento del sistema internacional de unidades
    /// </summary>
    public class UnitsUtil
    {
        private static IDictionary<string, MonedaEnDesuso> MonedasEnDesuso;
        static UnitsUtil()
        {
            MonedasEnDesuso = new Dictionary<string, MonedaEnDesuso>();
            //TODO: Verificar una forma de cargar la lista de monedas de un archivo de propiedades
            MonedaEnDesuso unidad = new MonedaEnDesuso();

            unidad.CodigoIso = "DEM";
            unidad.FechaInicioUso = new DateTime(1948, 1, 1);
            unidad.FechaFinUso = new DateTime(1998, 12, 31);
            unidad.CodigoIsoNuevo = "EUR";

            MonedasEnDesuso.Add(unidad.CodigoIso,unidad);

        }
        /// <summary>
        /// Verifica si la moneda está en desuso actualmente
        /// </summary>
        /// <param name="monedaComparar"></param>
        /// <returns></returns>
        public static String EsMonedaEnDesuso(string monedaComparar)
        {
            if (MonedasEnDesuso.ContainsKey(monedaComparar))
            {
                return MonedasEnDesuso[monedaComparar].CodigoIsoNuevo;
            }
            return null;
        }
    }
    /// <summary>
    /// Clase para representar una unidad de medida en desuso
    /// </summary>
    public class MonedaEnDesuso {

        /// <summary>
        /// Código ISO de la moneda en desuso
        /// </summary>
        public string CodigoIso {get;set;}
        /// <summary>
        /// Fecha de inico del código de la moneda
        /// </summary>
        public DateTime FechaInicioUso {get;set;}
        /// <summary>
        /// Fecha de fin del código de la moneda
        /// </summary>
        public DateTime FechaFinUso {get;set;}
        /// <summary>
        /// Código ISO de la moneda que reemplaza a la moneda actual
        /// </summary>
        public string CodigoIsoNuevo {get;set;}
    }
}
