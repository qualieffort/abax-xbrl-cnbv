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
    public class ArcoReferencia : Arco
    {
         /// <summary>
        /// Constructor predeterminado, asigna el tipo de arco de la clase base
        /// </summary>
        public ArcoReferencia()
        {
            base.TipoArco = TipoArco.TipoArcoReferencia;
        }
        /// <summary>
        /// El valor del rol estándar para un arco de presentación.
        /// </summary>
        public const string RolArcoReferencia = "http://www.xbrl.org/2003/arcrole/concept-reference";


    }
}
