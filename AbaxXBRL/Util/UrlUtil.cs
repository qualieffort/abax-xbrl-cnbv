using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AbaxXBRL.Taxonomia;

namespace AbaxXBRL.Util
{
    /// <summary>
    /// Clase con métodos de utilería para manipular URLs.
    /// <author>José Antonio Huizar Moreno</author>
    /// <version>1.0</version>
    /// </summary>
    public class UrlUtil
    {
        /// <summary>
        /// La cadena que sirve como separador de la ruta en un URL.
        /// </summary>
        public const string SeparadorURL = "/";

        /// <summary>
        /// Obtiene el nombre del archivo al que hace referencia un URL en última instancia eliminando las rutas y el protocolo que este pueda contener.
        /// </summary>
        /// <param name="url">El URL a procesar.</param>
        /// <returns>El nombre del archivo que hace referencia el URL. Una cadena vacía si se trata de un URL que apunta a un directorio.</returns>
        public static string ObtenerNombreArchivoDeUrl(string url) 
        {
            string[] segments = url.Split(SeparadorURL.ToArray());
            return segments[segments.Count() - 1];
        }
    }
}
