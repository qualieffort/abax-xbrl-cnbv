using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRL.Taxonomia.Linkbases
{
    /// <summary>
    /// Los <code>Localizadores</code> son elementos hijo de los enlaces extendidos que apuntan a recursos externos del enlace extendido. 
    /// Todos los enlaces extendidos XBRL PUEDEN contener localizadores.
    /// <author>Jósé Antonio Huizar Moreno</author>
    /// <version>1.0</version>
    /// </summary>
    public class Localizador : ElementoLocalizable
    {
        /// <summary>
        /// El tipo que siempre debe ser utilizado para un <code>Localizador</code>
        /// </summary>
        public const string TipoLocalizador = "locator";

        /// <summary>
        /// La ubicación del elemento al que apunta este <code>Localizador</code>
        /// </summary>
        public ApuntadorElementoXBRL Apuntador { get; set; }

        

        
    }
}
