using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRL.Taxonomia.Linkbases
{
    /// <summary>
    /// Implementación del Linkbase de Cálculo. Describe las relaciones de cálculo entre los conceptos de las taxonomías.
    /// <author>José Antonio Huizar Moreno</author>
    /// <version>1.0</version>
    /// </summary>
    public class LinkbaseCalculo : Linkbase
    {
        /// <summary>
        /// constructor predeterminado
        /// </summary>
        public LinkbaseCalculo() : base()
        {
            Arcos = new List<Arco>();
            Localizadores = new Dictionary<string, IList<ElementoLocalizable>>();
            RoleLinkBaseRef = RoleCalculoLinkbaseRef;
        }
        /// <summary>
        /// El rol utilizado para identificar que el linkbase al que se hace referencia es un linkbase de cálculo.
        /// </summary>
        public const string RoleCalculoLinkbaseRef = "http://www.xbrl.org/2003/role/calculationLinkbaseRef";

        
    }
}
