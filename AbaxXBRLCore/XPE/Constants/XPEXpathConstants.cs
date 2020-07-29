using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.XPE.Constants
{
    /// <summary>
    /// Clase de constantes para las funciones y otras variables de XPath usadas
    /// para consumir elementos de taxonomías o ducumentos de instancia del XPE
    /// </summary>
    public class XPEXPathConstants
    {

        /// <summary>
        /// Prefijos de funciones xpath de XPE
        /// </summary>
        public const String UBMFT_prefix = "ubmft";
        public const String UBMFDTS_prefix = "ubmfdts";
        public const String UBMFL_prefix = "ubmfl";

        public const String UBMFI_prefix = "ubmfi";
        public const String XFI_prefix = "xfi";
       
        

        /// <summary>
        /// Uri de funciones de xpath de XPE
        /// </summary>
        public const String UBMFT_Uri = "http://www.ubmatrix.com/2005/function/taxonomy";
        public const String UBMFDTS_Uri = "http://www.ubmatrix.com/2005/function/dts";
        public const String UBMFL_Uri = "http://www.ubmatrix.com/2005/function/linkbase";

        public const String UBMFI_Uri = "http://www.ubmatrix.com/2005/function/instance";
        public const String XFI_Uri = "http://www.xbrl.org/2008/function/instance";

        public const String FUNC_DATA_TYPES = "ubmfdts:data-types()";

        public const String FUNC_LINK_ROOT = "ubmfl:link-root('{0}', '{1}')";

        public const String FUNC_PRESENTATION_ARCS = "ubmfdts:presentation-arcs()";

        public const String FUNC_CALCULATION_ARCS =  "ubmfdts:calculation-arcs()";

        public const String FUNC_ROLE = "ubmfdts:role($uri)";

        public const String FUNC_CHILDREN = "ubmft:children($concept, $arcRole, $elRole)";

        public const String FUNC_IS_ABSTRACT = "ubmft:is-abstract($concept)";

        public const String FUNC_IS_NUMERIC = "ubmft:is-numeric($concept)";

        public const String FUNC_IS_FRACTION = "ubmft:is-fraction($concept)";

        public const String FUNC_DATA_TYPE = "ubmft:data-type($concept)";

        public const String FUNC_LABEL_ARCS = "ubmft:label-arcs($concept)";

        public const String FUNC_TUPLE_CHILDREN = "ubmft:tuple-children($concept)";

        public const String FUNC_FOOT_NOTES = "ubmfi:footnotes($fact)";

        public const String DTS_PATH_SCHEMA_REF = "/'relationship://ubmatrix.com/Xbrl/Relationship#SchemaReference'";

        public const String DTS_PATH_UNITS = "/'domain://ubmatrix.com/Xbrl/Instance#Unit'";

        /// <summary>
        /// Parametros utilizados en las funciones
        /// </summary>
        public const String PARAM_URI = "uri";
        public const String PARAM_CONCEPT = "concept";
        public const String PARAM_ARCROLE = "arcRole";
        public const String PARAM_EL_ROLE = "elRole";
        public const String PARAM_FACT = "fact";
    }
}
