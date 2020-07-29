using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRL.Taxonomia.Linkbases
{
    /// <summary>
    /// Implementación de un Linkbase de Presentación.
    /// <author>José Antonio Huizar Moreno</author>
    /// <version>1.0</version>
    /// </summary>
    public class LinkbasePresentacion : Linkbase
    {
        /// <summary>
        /// constructor predeterminado
        /// </summary>
        public LinkbasePresentacion() : base()
        {
            Arcos = new List<Arco>();
            Localizadores = new Dictionary<string, IList<ElementoLocalizable>>();
            RoleLinkBaseRef = RolePresentacionLinkbaseRef;
           
        }

        /// <summary>
        /// El rol utilizado para identificar que el linkbase al que se hace referencia es un linkbase de presentación.
        /// </summary>
        public const string RolePresentacionLinkbaseRef = "http://www.xbrl.org/2003/role/presentationLinkbaseRef";

        
    }
}
