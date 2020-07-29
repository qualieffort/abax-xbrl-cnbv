using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.XPE.Constants
{
    /// <summary>
    /// Constantes de espacios de nombres, etiquetas y elementos XML
    /// utilizados en taxonomías y documentos de instancia
    /// </summary>
    public class XBRLConstants
    {
        public const String COMPLEX_TYPE_ELEMENT = "complexType";

        public const String RESTRICTION_ELEMENT  = "restriction";

        public const String VALUE_ATTRIBUTE = "value";

        public const String ENUMERATION_ELEMENT = "enumeration";

        public const String PATTERN_ELEMENT = "pattern";

        public const String ROLE_ATTRIBUTE = "role";

        public const String ARC_ROLE_ATTRIBUTE = "arcrole";

        public const String ROLE_URI_ATTRIBUTE = "roleURI";

        public const String LANG_ATTRIBUTE = "lang";

        public const String CONTEXT_ELEMENT_ATTRIBUTE = "contextElement";

        public const String CLOSED_ATTRIBUTE = "closed";

        public const String NAME_DEFINITION_LINKBASE = "definition";

        public const String PREFERRED_LABEL_ATTRIBUTE = "preferredLabel";

        public const String PERIOD_TYPE_ATTRIBUTE = "periodType";

        public const String BALANCE_ATTRIBUTE = "balance";

        public const String ID_ATTRIBUTE = "id";

        public const String NILLABLE_ATTRIBUTE = "nillable";

        public const String TYPE_ATTRIBUTE = "type";

        public const String SUBSTITUTION_GROUP_ATTRIBUTE = "substitutionGroup";

        public const String NAME_ATTRIBUTE = "name";

        public const String ABSTRACT_ATTRIBUTE = "abstract";

        public const String SIMPLE_CONTENT_ELEMENT = "simpleContent";

        public const String EXTENSION_ELEMENT = "extension";

        public const String BASE_ATTRIBUTE = "base";

        public const String HREF_ATTRIBUTE = "href";

        public const String NUMERATOR_ELEMENT = "numerator";

        public const String DENOMINATOR_ELEMENT = "denominator";

        public const String INF_VALUE = "INF";

        public const String START_DATE_ELEMENT = "startDate";

        public const String END_DATE_ELEMENT = "endDate";
        
        public const String INSTANT_ELEMENT = "instant";

        public const String FOREVER_ELEMENT = "forever";

        public const String IDENTIFIER_ELEMENT = "identifier";

        public const String SCHEME_ATTRIBUTE = "scheme";
        
        public const String SEGMENT_ELEMENT = "segment";

        public const String EXPLICIT_MEMBER_ELEMENT = "explicitMember";

        public const String TYPED_MEMBER_ELEMENT = "typedMember";

        public const String DIMENSION_ATTRIBUTE = "dimension";

        public const String MEASURE_ELEMENT = "measure";

        public const String DIVIDE_ELEMENT = "divide";

        public const String UNIT_NUMERATOR_ELEMENT = "unitNumerator";

        public const String UNIT_DENOMINATOR_ELEMENT = "unitDenominator";

        public const int TIPO_PERIODO_INSTANTE = 1;

        
        public const int TIPO_PERIODO_DURACION = 2;

        
        public const int TIPO_PERIODO_PARA_SIEMPRE = 3;

        /// <summary>
        /// Indica que la unidad sólo se compone de una medida
        /// </summary>
        public const int TIPO_UNIDAD_MEDIDA = 1;

        /// <summary>
        /// Indica que la unidad se compone de un numerador y denominador
        /// </summary>
        public const int TIPO_UNIDAD_DIVISORIA = 2;

        public const String ARC_ROLE_PARENT_CHILD = "http://www.xbrl.org/2003/arcrole/parent-child";

        public const String ARC_ROLE_SUMMATION_ITEM = "http://www.xbrl.org/2003/arcrole/summation-item";

        public const String ARC_ROLE_ALL = "http://xbrl.org/int/dim/arcrole/all";

        public const String ARC_ROLE_NOT_ALL = "http://xbrl.org/int/dim/arcrole/notAll";

        public const String ARC_ROLE_ELEMENT_LABEL = "http://xbrl.org/arcrole/2008/element-label";
        
        public const String ARC_ROLE_HYPERCUBE_DIMENSION = "http://xbrl.org/int/dim/arcrole/hypercube-dimension";

        public const String ARC_ROLE_DOMAIN_MEMBER = "http://xbrl.org/int/dim/arcrole/domain-member";
        

                            
        
    }
}
