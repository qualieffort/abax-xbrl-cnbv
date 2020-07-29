using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRL.Taxonomia.Linkbases
{
    /// <summary>
    /// Implementación de LinkBase de etiquetas
    /// </summary>
    public class LinkbaseReferencia : Linkbase
    {
        /// <summary>
        /// constructor predeterminado
        /// </summary>
        public LinkbaseReferencia()
            : base()
        {
            Arcos = new List<Arco>();
            Localizadores = new Dictionary<string, IList<ElementoLocalizable>>();
            RoleLinkBaseRef = RoleReferenceLinkbaseRef;
        }

        /// <summary>
        /// El rol utilizado para identificar que el linkbase al que se hace referencia es un linkbase de presentación.
        /// </summary>
        public const string RoleReferenceLinkbaseRef = "http://www.xbrl.org/2003/role/referenceLinkbaseRef";
    }
}
