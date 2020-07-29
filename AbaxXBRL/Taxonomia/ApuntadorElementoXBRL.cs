using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml;
using System.Xml.Linq;
using System.Xml.Schema;

namespace AbaxXBRL.Taxonomia
{
    /// <summary>
    /// Representa un apuntador con información suficiente para localizar un elemento de la taxonomía XBRL.
    /// <author>José Antonio Huizar Moreno</author>
    /// <version>1.0</version>
    /// </summary>
    public class ApuntadorElementoXBRL
    {
        /// <summary>
        /// La cadena utilizada para separar los componentes del puntero XPointer
        /// </summary>
        public const string SeparadorXPointer = "#";

        /// <summary>
        /// La ubicación del archivo en donde se definió el elemento XBRL.
        /// </summary>
        public string UbicacionArchivo { get; set; }

        /// <summary>
        /// El identificador del elemento XBRL.
        /// </summary>
        public string Identificador { get; set; }

        /// <summary>
        /// La definición de la constante que identifica el inicio de un elemento XPOINTER
        /// </summary>
        public const string ElementNotationStart = "element(";

        /// <summary>
        /// La definición de la constante que identifica el fin de un elemento XPOINTER
        /// </summary>
        public const string ElementNotationEnd = ")";

        /// <summary>
        /// El separador que define una secuencia de hijos de un XPointer Element
        /// </summary>
        public const string ElementChildSequenceSeparator = "/";

        /// <summary>
        /// Inicializa un apuntador a un elemento de la taxonomía XBRL basado en un puntero XPointer.
        /// </summary>
        /// <param name="apuntador">El apuntador en formato XPointer</param>
        public ApuntadorElementoXBRL(string apuntador)
        {
            string[] componentes = apuntador.Split(SeparadorXPointer.ToArray());
            if (componentes.Count() == 2)
            {
                UbicacionArchivo = componentes[0];
                Identificador = componentes[1];
            }
            else if (componentes.Count() == 1)
            {
                UbicacionArchivo = componentes[0];
            }
        }
    }
}
