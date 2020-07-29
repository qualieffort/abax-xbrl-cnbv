using AbaxXBRL.Constantes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRL.Taxonomia.Linkbases
{
    /// <summary>
    /// El propósito de este arco es el describir relacionres de presentación entre los diferentes Conceptos de las Taxonomías.
    /// Los elementos que une este arco NO DEBEN ser del tipo <code>Recurso</code>.
    /// <author>José Antonio Huizar Moreno</author>
    /// <version>1.0</version>
    /// </summary>
    public class ArcoPresentacion : Arco
    {
        /// <summary>
        /// Constructor predeterminado, asigna el tipo de arco de la clase base
        /// </summary>
        public ArcoPresentacion()
        {
            base.TipoArco = TipoArco.TipoArcoPresentacion;
        }
        /// <summary>
        /// El valor del rol estándar para un arco de presentación.
        /// </summary>
        public const string RolArcoPresentacion = "http://www.xbrl.org/2003/arcrole/parent-child";

        /// <summary>
        /// Contiene el rol de la etiqueta preferida. Este atributo es opcional.
        /// </summary>
        public string EtiquetaPreferida { get; set; }
        
    }
}
