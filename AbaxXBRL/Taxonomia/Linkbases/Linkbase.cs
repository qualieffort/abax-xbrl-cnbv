using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRL.Taxonomia.Linkbases
{
    /// <summary>
    /// Representa una colección de enlaces entre elementos de la taxonomía.
    /// <author>José Antonio Huizar Moreno</author>
    /// <version>1.0</version>
    /// </summary>
    public class Linkbase
    {
        /// <summary>
        /// Constructor predeterminado
        /// </summary>
        public Linkbase()
        {
            Documentacion = new List<Documentation>();
            Arcos = new List<Arco>();
            Localizadores = new Dictionary<string, IList<ElementoLocalizable>>();
            Recursos = new Dictionary<string, IList<ElementoLocalizable>>();
            RoleLinkBaseRef = RolUnspecifiedLinkbaseRef;
        }
        /// <summary>
        /// Nombre del role el tipo de linkbase concreto cuando se instancia una clase que hereda de esta
        /// </summary>
        public string RoleLinkBaseRef { get; set; }
        /// <summary>
        /// El valor del tipo de referencia al linkbase por defecto.
        /// </summary>
        public const string SimpleType = "simple";

        /// <summary>
        /// Contiene el valor por default para el atributo arcrole de un elemento linkbaseRef
        /// </summary>
        public const string ArcroleLinkbase = "http://www.w3.org/1999/xlink/properties/linkbase";

        /// <summary>
        /// El rol utilizado para identificar que el linkbase al que se hace referencia puede contener cualquier tipo de arco.
        /// </summary>
        public const string RolUnspecifiedLinkbaseRef = "unspecified";

        /// <summary>
        /// El rol que corresponde al linkbase
        /// </summary>
        public RoleType Rol { get; set; }

        /// <summary>
        /// La taxonomía a la que pertenece este Linkbase
        /// </summary>
        public ITaxonomiaXBRL Taxonomia { get; set; }

        /// <summary>
        /// Lista de elementos de documentación econtrados en la definición de linkbase
        /// </summary>
        public IList<Documentation> Documentacion { get; set; }

        /// <summary>
        /// Los arcos de presentación que componen este Linkbase.
        /// </summary>
        public IList<Arco> Arcos { get; set; }
        /// <summary>
        /// Conjunto de arcos finales del linkbase considerando prohibiciones y reemplazos
        /// </summary>
        public IList<Arco> ArcosFinales { get; set; }
        /// <summary>
        /// Los localizadores utilizados por los arcos del Linkbase.
        /// </summary>
        public IDictionary<string, IList<ElementoLocalizable>> Localizadores { get; set; }
        /// <summary>
        /// Conjunto de recursos declarados dentro del linkbase y utilizados por los arcos
        /// </summary>
        public IDictionary<string, IList<ElementoLocalizable>> Recursos { get; set; }

    }
}
