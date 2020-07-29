using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRL.Taxonomia.Common
{
    class AbaxXbrlException : System.Exception
    {
        /// <summary>
        /// Código de Error
        /// </summary>
        private int Codigo { get; set; }
        /// <summary>
        /// Mensaje de Error
        /// </summary>
        private String Mensaje { get; set; }
        /// <summary>
        /// Constructor de la excepcion
        /// </summary>
        /// <param name="error">Código de Error</param>
        /// <param name="mensaje">Mensaje de Error</param>
        public AbaxXbrlException(int error,string mensaje) : base(mensaje)
        {
            Codigo = error;
            Mensaje = mensaje;
        }
    }
}
