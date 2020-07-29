using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AbaxXBRL.Constantes;

namespace AbaxXBRL.Taxonomia.Linkbases
{
    /// <summary>
    /// El propósito de este arco es el describir relaciones de etiquetas entre los diferentes Conceptos de las Taxonomías y sus recursos de etiquetas.
    /// Los elementos que une este arco únicamente tienes relaciones desde conceptos y hacia recursos
    /// <author>Emigdio Hernández</author>
    /// <version>1.0</version>
    /// </summary>
    public class ArcoEtiqueta : Arco
    {
         /// <summary>
        /// Constructor predeterminado, asigna el tipo de arco de la clase base
        /// </summary>
        public ArcoEtiqueta()
        {
            base.TipoArco = TipoArco.TipoArcoEtiqueta;
        }
        /// <summary>
        /// El valor del rol estándar para un arco de presentación.
        /// </summary>
        public const string RolArcoEtiqueta = "http://www.xbrl.org/2003/arcrole/concept-label";

        
    }
}
