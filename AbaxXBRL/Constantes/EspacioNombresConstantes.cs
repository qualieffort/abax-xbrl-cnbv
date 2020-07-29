using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRL.Constantes
{
    /// <summary>
    /// Contiene las constantes necesarias para identificar los nombres de espacios de la especificación XBRL 2.1
    /// <author>José Antonio Huizar Moreno</author>
    /// <version>1.0</version>
    /// </summary>
    public class EspacioNombresConstantes
    {
        /// <summary>
        /// El espacio de nombres para identificar a XLink
        /// </summary>
        public const string XLinkNamespace = "http://www.w3.org/1999/xlink";

        /// <summary>
        /// El espacio de nombres para identificar a XLink de XBRL
        /// </summary>
        public const string XbrlXLinkNamespace = "http://www.xbrl.org/2003/XLink";

        /// <summary>
        /// El espacio de nombres para identificar Linkbases
        /// </summary>
        public const string LinkNamespace = "http://www.xbrl.org/2003/linkbase";

        /// <summary>
        /// El espacio de nombres para identificar Instancias
        /// </summary>
        public const string InstanceNamespace = "http://www.xbrl.org/2003/instance";
        /// <summary>
        /// Espacio de nombres para las dimensiones en documentos de instancia
        /// </summary>
        public const string DimensionInstanceNamespace = "http://xbrl.org/2006/xbrldi";
        /// <summary>
        ///  Valor de Role Genérico para los link bases que no utiliza un rol personalizado
        /// </summary>
        public const string StandardLinkRoleType = "http://www.xbrl.org/2003/role/link";
        /// <summary>
        /// Valor del Role Genérico para los linkbases de fórmula y generic label
        /// </summary>
        public const string Standard2008LinkRoleType = "http://www.xbrl.org/2008/role/link";
        /// <summary>
        /// El espacio de nombres para identificar XMLSchema
        /// </summary>
        public const string SchemaNamespace = "http://www.w3.org/2001/XMLSchema";

        /// <summary>
        /// El espacio de nombres para identificar XML
        /// </summary>
        public const string XmlNamespace = "http://www.w3.org/XML/1998/namespace";

        /// <summary>
        /// La cadena que sirve como separador de un Qualified Name
        /// </summary>
        public static char []SeparadorQName = {':'};
        /// <summary>
 		/// Los atriburos de este namespace son excentos para las comparativas de relaciones equivalentes
        /// </summary>
        public const string NamespaceAttriburosExcentos = "http://www.w3.org/2000/xmlns/";
        /// <summary>
        /// Espacio de nombres de los elementos estádar para las monedas
        /// </summary>
        public const string ISO_4217_Currency_Namespace = "http://www.xbrl.org/2003/iso4217";
        /// <summary>
        /// Espacio de nombres para la declaración de los elementos para le uso de dimensiones
        /// </summary>
        public const string DimensionTaxonomyNamespace = "http://xbrl.org/2005/xbrldt";
        /// <summary>
        /// Nombre del rol para una declaración de dimensión predeterminada
        /// </summary>
        public const string DimensionDefaultRoleUri = "http://xbrl.org/int/dim/arcrole/dimension-default";
        /// <summary>
        /// URI del rol para una etiqueta default
        /// </summary>
        public const string DefaultLabelRole = "http://www.xbrl.org/2003/role/label";
    }
}
