using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRL.Taxonomia.Linkbases
{
    /// <summary>
    /// Implementación del Linkbase de Definición. Describe las relaciones de definición entre los conceptos de las taxonomías.
    /// <version>1.0</version>
    /// </summary>
    public class LinkbaseDefinicion : Linkbase
    {
        /// <summary>
        /// constructor predeterminado
        /// </summary>
        public LinkbaseDefinicion()
            : base()
        {
            Arcos = new List<Arco>();
            Localizadores = new Dictionary<string, IList<ElementoLocalizable>>();
            RoleLinkBaseRef = RolDefitionLinkbaseRef;
        }
        /// <summary>
        /// El rol utilizado para identificar que el linkbase al que se hace referencia es un linkbase de cálculo.
        /// </summary>
        public const string RolDefitionLinkbaseRef = "http://www.xbrl.org/2003/role/definitionLinkbaseRef";


    }
}