using AbaxXBRL.Constantes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AbaxXBRL.Util;

namespace AbaxXBRL.Taxonomia
{
    /// <summary>
    /// Implementación de un elemento <code>&lt;periodo&gt;</code> encontrado en un documento instancia XBRL.
    /// 
    /// El elemento Periodo contiene el instante o intervalo de tiempo para ser referenciado por un elemento. Los subelementos del periodo son utilizados para construir una combinación permitida para representar intervalos de fechas.
    /// <author>José Antonio Huizar Moreno</author>
    /// <version>1.0</version>
    /// </summary>
    public class Period
    {
        /// <summary>
        /// Indica que el periodo representa una fecha instante
        /// </summary>
        public const int Instante = 1;

        /// <summary>
        /// Indica que el periodo representa un intervalo de fechas.
        /// </summary>
        public const int Duracion = 2;

        /// <summary>
        /// Indica que el periodo representa un intervalo "para siempre".
        /// </summary>
        public const int ParaSiempre = 3;

        /// <summary>
        /// El tipo de periodo
        /// </summary>
        public int Tipo { get; set; }

        /// <summary>
        /// La fecha que representa un instante de tiempo
        /// </summary>
        public DateTime FechaInstante { get; set; }
        /// <summary>
        /// Valor original de la fecha de instante
        /// </summary>
        public String FechaInstanteValue { get; set; }
        /// <summary>
        /// La fecha de inicio del intervalo de tiempo
        /// </summary>
        public DateTime FechaInicio { get; set; }
        /// <summary>
        /// Valor original de la fecha de inicio
        /// </summary>
        public String FechaInicioValue { get; set; }
        /// <summary>
        /// La fecha de fin del intervalo de tiempo
        /// </summary>
        public DateTime FechaFin { get; set; }
        /// <summary>
        /// Valor original de la fecha de fin
        /// </summary>
        public String FechaFinValue { get; set; }
        /// <summary>
        /// Espacio de nombres para la creación del elemento en XML
        /// </summary>
        public const String XmlNamespace = EspacioNombresConstantes.InstanceNamespace;
        /// <summary>
        /// Nombre local para la creación del elemento XML
        /// </summary>
        public const String XmlLocalName = EtiquetasXBRLConstantes.Period;
        /// <summary>
        /// Verifica si el valor original de la fecha instante tiene la parte del tiempo
        /// delante de la parte de la fecha
        /// </summary>
        /// <returns></returns>
        public Boolean TieneFechaInstanteParteTiempo()
        {
            return FechaInstanteValue.IndexOf("T", System.StringComparison.Ordinal) >= 0;
        }
        /// <summary>
        /// Verifica si la fecha de fin de un periodo tiene la parte del tiempo
        /// delante de la parte fecha
        /// </summary>
        /// <returns></returns>
        public Boolean TieneFechaFinParteTiempo()
        {
            return FechaFinValue.IndexOf("T", System.StringComparison.Ordinal) >= 0;
        }
        /// <summary>
        /// Si la fecha de fin no tiene la parte de tiempo entonces se interpreta como el inicio de día del siguiente día:
        /// Sección XBRL 2.1 4.7.2
        /// A date, with no time part, in the endDate or instant element is defined to be equivalent to specifying a dateTime 
        /// of the same date plus P1D and with a time part of T00:00:00. This represents midnight at the end of the day. 
        /// The reason for defining it thus, i.e. as midnight at the start of the next day, is that [XML Schema Datatypes] 
        /// mandates this representation by prohibiting the value of 24 in the "hours" part of a time specification, which is ISO 8601 syntax.
        /// </summary>
        /// <returns></returns>
        public DateTime ObtenerFechaFinEfectiva()
        {
            var ret = FechaFin;
            if(!TieneFechaFinParteTiempo())
            {
                ret = FechaFin.AddDays(1);
            }
            return ret;
        }
        public DateTime ObtenerFechaInstanteEfectiva()
        {
            var ret = FechaInstante;
            if (!TieneFechaInstanteParteTiempo())
            {
                ret = FechaInstante.AddDays(1);
            }
            return ret;
        }
        /// <summary>
        /// Comparar este periodo con otro objeto del tipo periodo
        /// </summary>
        /// <param name="obj"></param>
        /// <returns></returns>
        public override bool Equals(object obj)
        {
            if (obj == null || !(obj is Period)) return false;

            if (this == obj) return true;

            Period comparar = (Period)obj;

            if (Tipo != comparar.Tipo)
            {
                return false;
            }
            if (Tipo == Instante && FechaInstante.CompareTo(comparar.FechaInstante) != 0)
            {
                return false;
            }
            if (Tipo == Duracion && (FechaInicio.CompareTo(comparar.FechaInicio) != 0 || FechaFin.CompareTo(comparar.FechaFin) != 0))
            {
                return false;
            }
            return true;
        }
        /// <summary>
        /// Representación de cadena en fechas
        /// </summary>
        /// <returns></returns>
        public string ToString()
        {
            if(Tipo == Instante)
            {
                return XmlUtil.ToUnionDateTimeString(FechaInstante);
            }else if(Tipo == Duracion)
            {
                return XmlUtil.ToUnionDateTimeString(FechaInicio) + "-" + XmlUtil.ToUnionDateTimeString(FechaFin);
            }else if(Tipo == ParaSiempre)
            {
                return "Forever";
            }
            return "";
        }
    }
}
