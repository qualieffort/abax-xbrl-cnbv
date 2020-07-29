using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Schema;
using AbaxXBRL.Taxonomia.Impl;

namespace AbaxXBRL.Taxonomia
{
    /// <summary>
    /// Mecanismo para el manejo de errores durante el proceso de carga de una taxonomía o doucumento de instancia al usar el procesador AbaxXBRL.
    /// <author>José Antonio Huizar Moreno</author>
    /// <version>1.0</version>
    /// </summary>
    public interface IManejadorErroresXBRL
    {
        /// <summary>
        /// Da tratamiento al error reportado durante la carga de la taxonomía.
        /// </summary>
        /// <param name="codigoError">Código del error</param>
        /// <param name="excepcion">La excepción que generó el error.</param>
        /// <param name="mensaje">El mensaje que reporta el error.</param>
        /// <param name="severidad">El nivel de severidad del error reportado.</param>
        /// <param name="uriArchivo">Uri del archivo procesado.</param>
        ErrorCargaTaxonomia ManejarError(String codigoError, Exception excepcion, string mensaje, XmlSeverityType severidad, string uriArchivo);
        /// <summary>
        /// Da tratamiento al error reportado durante la carga de la taxonomía.
        /// </summary>
        /// <param name="excepcion">La excepción que generó el error.</param>
        /// <param name="mensaje">El mensaje que reporta el error.</param>
        /// <param name="severidad">El nivel de severidad del error reportado.</param>
        /// <param name="uriArchivo">Uri del archivo procesado.</param>
        ErrorCargaTaxonomia ManejarError(Exception excepcion, string mensaje, XmlSeverityType severidad, string uriArchivo);
        /// <summary>
        /// Da tratamiento al error reportado durante la carga de la taxonomía.
        /// </summary>
        /// <param name="codigoError">Código del error</param>
        /// <param name="excepcion">La excepción que generó el error.</param>
        /// <param name="mensaje">El mensaje que reporta el error.</param>
        /// <param name="severidad">El nivel de severidad del error reportado.</param>
        ErrorCargaTaxonomia ManejarError(String codigoError, Exception excepcion, string mensaje, XmlSeverityType severidad);

        /// <summary>
        /// Da tratamiento al error reportado durante la carga de la taxonomía.
        /// </summary>
        /// <param name="excepcion">La excepción que generó el error.</param>
        /// <param name="mensaje">El mensaje que reporta el error.</param>
        /// <param name="severidad">El nivel de severidad del error reportado.</param>
        ErrorCargaTaxonomia ManejarError(Exception excepcion, string mensaje, XmlSeverityType severidad);

        /// <summary>
        /// Invocado al finalizar el proceso de carga de la taxonomía. Debe indicar si los errores 
        /// reportados fueron subsanados o pueden ser ignorados y continuar con el procesamiento de la taxonomía.
        /// </summary>
        /// <returns><code>true</code> si es posible continuar procesando la taxonomía.
        /// <code>false</code> en cualquier otro caso.</returns>
        bool PuedeContinuar();

        /// <summary>
        /// Retorna un listado con los errores de la taxonomía.
        /// </summary>
        /// <returns>Listado de errores</returns>
        IList<ErrorCargaTaxonomia> GetErroresTaxonomia();


        
    }
}
