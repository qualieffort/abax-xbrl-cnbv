using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Schema;

namespace AbaxXBRL.Taxonomia.Impl
{
    /// <summary>
    /// Implementación básica de un mecanismo de manejo de errores de la carga de una taxonomía.
    /// <author>José Antonio Huizar Moreno</author>
    /// <version>1.0</version>
    /// </summary>
    public class ManejadorErroresCargaTaxonomia : IManejadorErroresXBRL
    {
        /// <summary>
        /// El detalle de los errores generados durante la carga de la taxonomía.
        /// </summary>
        public IList<ErrorCargaTaxonomia> ErroresCarga { get; set; }

        /// <summary>
        /// Constructor por defecto de la clase.
        /// </summary>
        public ManejadorErroresCargaTaxonomia() 
        {
            ErroresCarga = new List<ErrorCargaTaxonomia>();
        }

        #region Miembros de IManejadorErroresCargaTaxonomia

        public ErrorCargaTaxonomia ManejarError(string codigoError, Exception excepcion, string mensaje, XmlSeverityType severidad, string uriArchivo)
        {
            if (mensaje != null)
            {
                Debug.WriteLine("Mensaje: " + mensaje);
            }
            Debug.WriteLine("Severidad: " + severidad.ToString());

            var errorCarga = new ErrorCargaTaxonomia(codigoError, excepcion, mensaje, severidad);
            if (!String.IsNullOrWhiteSpace(uriArchivo))
            {
                errorCarga.UriArchivo = uriArchivo;
            }

            ErroresCarga.Add(errorCarga);
            return errorCarga;
        }


        public ErrorCargaTaxonomia ManejarError(Exception excepcion, string mensaje, XmlSeverityType severidad, string uriArchivo)
        {
            return ManejarError(null, excepcion, mensaje, severidad, uriArchivo);
        }

        public ErrorCargaTaxonomia ManejarError(string codigoError, Exception excepcion, string mensaje, XmlSeverityType severidad)
        {
            return ManejarError(codigoError, excepcion, mensaje, severidad, null);
        }

        public ErrorCargaTaxonomia ManejarError(Exception excepcion, string mensaje, XmlSeverityType severidad)
        {
            return ManejarError(null, excepcion, mensaje, severidad);
        }

        

        public bool PuedeContinuar()
        {
            bool valida = true;

            foreach (var errorCarga in ErroresCarga)
            {
                if (errorCarga.Severidad == XmlSeverityType.Error) 
                {
                    valida = false;
                    break;
                }
            }

            return valida;
        }
        /// <summary>
        /// Retorna un listado con los errores de la taxonomía.
        /// </summary>
        /// <returns>Listado de errores</returns>
        public IList<ErrorCargaTaxonomia> GetErroresTaxonomia() {
            return this.ErroresCarga;
        }

        #endregion
    }

    /// <summary>
    /// Define un error durante la carga de la taxonomía.
    /// <author>José Antonio Huizar Moreno</author>
    /// </summary>
    public class ErrorCargaTaxonomia
    {
        /// <summary>
        /// La excepción generada.
        /// </summary>
        public Exception Excepcion { get; set; }

        /// <summary>
        /// El mensaje generado.
        /// </summary>
        public string Mensaje { get; set; }

        /// <summary>
        /// La severidad del error.
        /// </summary>
        public XmlSeverityType Severidad { get; set;}
        /// <summary>
        /// Código de error de carga o validación
        /// </summary>
        public string CodigoError { get; set; }
        /// <summary>
        /// Ubicación del archivo donde se genera el error
        /// </summary>
        public string UriArchivo { get; set; }
        /// <summary>
        /// Línea del archivo donde se genera el error
        /// </summary>
        public int Linea { get; set; }
        /// <summary>
        /// Columna del archivo donde se genera el error 
        /// </summary>
        public int Columna { get; set; }

        public string IdHechoPrincipal { set; get; }
        public List<string> IdHechosRelacionados { get; set; }

        /// <summary>
        /// Información extra referente al error
        /// </summary>
        public IDictionary<string, Object> InformacionExtra { get; set; } 
        /// <summary>
        /// Constructor de la clase.
        /// </summary>
        /// <param name="excepcion">la excepción que generó el error.</param>
        /// <param name="mensaje">el mensaje reportado por el error.</param>
        /// <param name="severidad">la severidad del error reportado.</param>
        public ErrorCargaTaxonomia(string codigo,Exception excepcion, string mensaje, XmlSeverityType severidad)
        {
            CodigoError = codigo;
            Excepcion = excepcion;
            Mensaje = mensaje;
            Severidad = severidad;
        }

        /// <summary>
        /// Constructor de la clase.
        /// </summary>
        /// <param name="excepcion">la excepción que generó el error.</param>
        /// <param name="mensaje">el mensaje reportado por el error.</param>
        /// <param name="severidad">la severidad del error reportado.</param>
        public ErrorCargaTaxonomia(string codigo, Exception excepcion, string mensaje, XmlSeverityType severidad,string archivo,
            IDictionary<string,object> infoExtra,int linea = 0,int columna = 0)
        {
            CodigoError = codigo;
            Excepcion = excepcion;
            Mensaje = mensaje;
            Severidad = severidad;
            UriArchivo = archivo;
            InformacionExtra = infoExtra;
            Linea = linea;
            Columna = columna;
        }
    }

}
