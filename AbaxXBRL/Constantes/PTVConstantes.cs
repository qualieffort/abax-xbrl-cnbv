using AbaxXBRL.Taxonomia.Linkbases;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRL.Constantes
{
    /// <summary>
    /// Conjunto de constantes utilizadas durante la creación de los archivos PTVL y PTVI para
    /// demostrar el correcto procesamiento de las pruebas de la suite
    /// </summary>
    class PTVConstantes
    {
        /// <summary>
        /// Nombre local del elemento ptvl
        /// </summary>
        public const string PTVL_ELEMENT = "ptvl";
        /// <summary>
        /// Nombre local del arco PTVL
        /// </summary>
        public const string ARC_ELEMENT = "arc";
        /// <summary>
        /// Nombre del atriburo de Link Type
        /// </summary>
        public const string LINK_TYPE_ATTR = "linkType";
        /// <summary>
        /// Nombre del atributo de Ext Role
        /// </summary>
        public const string EXT_ROLE_ATTR = "extRole";
        /// <summary>
        /// Nombre del atriburo de Arc Role
        /// </summary>
        public const string ARC_ROLE_ATTR = "arcRole";
        /// <summary>
        /// Nombre del Atributo del from path
        /// </summary>
        public const string FROM_PATH_ATTR = "fromPath";
        /// <summary>
        /// Nombre del atriburo de to path
        /// </summary>
        public const string TO_PATH_ATTR = "toPath";
        /// <summary>
        /// Nombre del atributo de orden
        /// </summary>
        public const string ORDER_ATTR = "order";
        /// <summary>
        /// Nombre del atributo de peso
        /// </summary>
        public const string WEIGHT_ATTR = "weight";
        /// <summary>
        /// Nombre del atributo de lenguaje de etiqueta
        /// </summary>
        public const string LABEL_LANG_ATTR = "labelLang";
        /// <summary>
        /// Nombre del atriburo de role de recurso
        /// </summary>
        public const string RES_ROLE_ATTR = "resRole";
        /// <summary>
        /// NOmbre del atributo para la etiqueta preferida
        /// </summary>
        public const string PREFERRED_LABEL_ATTR = "preferredLabel";
        /// <summary>
        /// Nombre del atriburo para el tipo de periodo
        /// </summary>
        public const string PERIOD_TYPE_ATTR = "periodType";
        /// <summary>
        /// Mapeo de los linkhref de los linkbases a su valor en el atriburo link type
        /// </summary>
        public static IDictionary<string, string> LINK_TYPE_VALUES = null;

        public static string BALANCE_TYPE_ATTR = "balance";

        static PTVConstantes()
        {
            LINK_TYPE_VALUES = new Dictionary<string, string>();
            LINK_TYPE_VALUES.Add(LinkbaseEtiqueta.RoleLabelLinkbaseRef, "label");
            LINK_TYPE_VALUES.Add(LinkbaseReferencia.RoleReferenceLinkbaseRef, "reference");
            LINK_TYPE_VALUES.Add(LinkbaseDefinicion.RolDefitionLinkbaseRef, "definition");
            LINK_TYPE_VALUES.Add(LinkbasePresentacion.RolePresentacionLinkbaseRef, "presentation");
            LINK_TYPE_VALUES.Add(LinkbaseCalculo.RoleCalculoLinkbaseRef, "calculation");
        }












       
    }
}
