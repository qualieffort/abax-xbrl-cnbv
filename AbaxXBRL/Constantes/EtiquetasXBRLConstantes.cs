using AbaxXBRL.Taxonomia.Linkbases;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRL.Constantes
{
    /// <summary>
    /// Contiene las constantes necesarias para identificar algunas de las etiquetas utilizadas por una taxonomía XBRL.
    /// <author>José Antonio Huizar Moreno</author>
    /// <version>1.0</version>
    /// </summary>
    public class EtiquetasXBRLConstantes
    {
        static EtiquetasXBRLConstantes()
        {
            //Inicializar mapa de validación de linkbaseref
            LinkbaseRefDeLinkElement.Add(PresentationLinkElement,LinkbasePresentacion.RolePresentacionLinkbaseRef);
            LinkbaseRefDeLinkElement.Add(LabelLinkElement,LinkbaseEtiqueta.RoleLabelLinkbaseRef);
            LinkbaseRefDeLinkElement.Add(ReferenceLinkElement,LinkbaseReferencia.RoleReferenceLinkbaseRef);
            LinkbaseRefDeLinkElement.Add(DefinitionLinkElement,LinkbaseDefinicion.RolDefitionLinkbaseRef);
            LinkbaseRefDeLinkElement.Add(CalculationLinkElement,LinkbaseCalculo.RoleCalculoLinkbaseRef);
        }
        /// <summary>
        /// El nombre de la etiqueta linkbaseRef
        /// </summary>
        public const string LinkbaseRef = "linkbaseRef";

        /// <summary>
        /// El nombre de la etiqueta roleType
        /// </summary>
        public const string RoleType = "roleType";

        /// <summary>
        /// El nombre de la etiqueta arcroleType
        /// </summary>
        public const string ArcroleType = "arcroleType";

        /// <summary>
        /// El nombre de la etiqueta linkbase
        /// </summary>
        public const string Linkbase = "linkbase";

        /// <summary>
        /// El nombre de la etiqueta roleRef
        /// </summary>
        public const string RoleRef = "roleRef";

        /// <summary>
        /// El nombre de la etiqueta arcroleRef
        /// </summary>
        public const string ArcroleRef = "arcroleRef";

        /// <summary>
        /// El nombre de la etiqueta que define un documento instancia
        /// </summary>
        public const string Xbrl = "xbrl";

        /// <summary>
        /// El nombre de la etiqueta schemaRef
        /// </summary>
        public const string SchemaRef = "schemaRef";

        /// <summary>
        /// El nombre de la etiqueta context
        /// </summary>
        public const string Context = "context";

        /// <summary>
        /// El nombre de la etiqueta unit
        /// </summary>
        public const string Unit = "unit";

        /// <summary>
        /// El nombre de la etiqueta footnote
        /// </summary>
        public const string Footnote = "footnote";

        /// <summary>
        /// El nombre de la etiqueta footnoteArc
        /// </summary>
        public const string FootnoteArc = "footnoteArc";

        /// <summary>
        /// El nombre del atributo href
        /// </summary>
        public const string HrefAttribute = "href";

        /// <summary>
        /// EL nombre de la etiqueta definition
        /// </summary>
        public const string Definition = "definition";

        /// <summary>
        /// El nombre de la etiqueta usedOn
        /// </summary>
        public const string UsedOn = "usedOn";

        /// <summary>
        /// El nombre de la etiqueta entity
        /// </summary>
        public const string Entity = "entity";

        /// <summary>
        /// El nombre de la etiqueta period
        /// </summary>
        public const string Period = "period";

        /// <summary>
        /// El nombre de la etiqueta scenario
        /// </summary>
        public const string Scenario = "scenario";

        /// <summary>
        /// El nombre de la etiqueta startDate
        /// </summary>
        public const string StartDate = "startDate";

        /// <summary>
        /// El nombre de la etiqueta numerator
        /// </summary>
        public const string Numerator = "numerator";

        /// <summary>
        /// El nombre de la etiqueta denominator
        /// </summary>
        public const string Denominator = "denominator";

        /// <summary>
        /// El nombre de la etiqueta endDate
        /// </summary>
        public const string EndDate = "endDate";

        /// <summary>
        /// El nombre de la etiqueta forever
        /// </summary>
        public const string Forever = "forever";

        /// <summary>
        /// El nombre de la etiqueta instant
        /// </summary>
        public const string Instant = "instant";
        /// <summary>
        /// El nombre de la etiqueta duration
        /// </summary>
        public const string Duration = "duration";
        /// <summary>
        /// El nombre de la etiqueta identifier
        /// </summary>
        public const string Identifier = "identifier";

        /// <summary>
        /// El nombre de la etiqueta segment
        /// </summary>
        public const string Segment = "segment";

        /// <summary>
        /// El nombre del atributo scheme
        /// </summary>
        public const string SchemeAttribute = "scheme";

        /// <summary>
        /// El nombre del atributo role
        /// </summary>
        public const string RoleAttribute = "role";

        /// <summary>
        /// El nombre del atributo base
        /// </summary>
        public const string BaseAttribute = "base";

        /// <summary>
        /// El nombre del atributo roleURI
        /// </summary>
        public const string RoleURIAttribute = "roleURI";
        /// <summary>
        /// Nombre del atributo de título
        /// </summary>
        public const string TitleAttribute = "title";

        /// <summary>
        /// El nombre del atributo id
        /// </summary>
        public const string IdAttribute = "id";

        /// <summary>
        /// El nombre del atributo arcrole
        /// </summary>
        public const string ArcroleAttribute = "arcrole";

        /// <summary>
        /// El nombre del atributo arcroleURI
        /// </summary>
        public const string ArcroleURIAttribute = "arcroleURI";

        /// <summary>
        /// El nombre del atributo type.
        /// </summary>
        public const string TypeAttribute = "type";

        /// <summary>
        /// El nombre del atributo cyclesAllowed
        /// </summary>
        public const string CyclesAllowedAttribute = "cyclesAllowed";

        /// <summary>
        /// El nombre del atributo extended
        /// </summary>
        public const string ExtendedAttribute = "extended";
        /// <summary>
        /// Nombre del elemento de presentation link en un link base
        /// </summary>
        public const string PresentationLinkElement = "presentationLink";

        /// <summary>
        /// Nombre del elemento de definition link en un link base
        /// </summary>
        public const string DefinitionLinkElement = "definitionLink";

        /// <summary>
        /// Nombre del elemento de calculation link en un link base
        /// </summary>
        public const string CalculationLinkElement = "calculationLink";
        /// <summary>
        /// Nombre del elemento de label link en un link base
        /// </summary>
        public const string LabelLinkElement = "labelLink";
        
        /// <summary>
        /// Nombre local del elemento de recurso que representa una etiqueta
        /// </summary>
        public const string LabelElement = "label";

        /// <summary>
        /// Nombre de la etiqueta Measure 
        /// </summary>
        public const string Measure = "measure";

        /// <summary>
        /// Nombre de la etiqueta Divide
        /// </summary>
        public const string DivideElement = "divide";

        /// <summary>
        /// Nombre de la etiqueta unitNumerator
        /// </summary>
        public const string UnitNumeratorElement = "unitNumerator";

        /// <summary>
        /// Nombre de la etiqueta unitDenominator
        /// </summary>
        public const string UnitDenominatorElement = "unitDenominator";

        /// <summary>
        /// Nombre del elemento de reference link en un link base
        /// </summary>
        public const string ReferenceLinkElement = "referenceLink";
        
        /// <summary>
        /// Nombre del elemento de footnote link en un link base
        /// </summary>
        public const string FootnoteLink = "footnoteLink";
        /// <summary>
        /// Nombre del elemento de dimensiones para miembro explicito
        /// </summary>
        public const String ExplicitMemberElement = "explicitMember";
        /// <summary>
        /// Nombre del elemento de dimensiones para miembro de dimensión tipificada
        /// </summary>
        public const String TypedMemberElement = "typedMember";
        /// <summary>
        /// Nombre del atributo de dimensión de un miembro explícito
        /// </summary>
        public const String DimensionAttribute = "dimension";
        
        /// <summary>
        /// Arreglo de elementos de link base válidos
        /// </summary>
        public static string[] ValidLinksElements = { PresentationLinkElement, DefinitionLinkElement, CalculationLinkElement,
            LabelLinkElement, ReferenceLinkElement, FootnoteLink };
        /// <summary>
        /// Conjunto de linkbases estándar de la especificación
        /// </summary>
        public static string[] ValidLinkBasesHref = { 
            LinkbaseEtiqueta.RoleLabelLinkbaseRef,
            LinkbaseReferencia.RoleReferenceLinkbaseRef,
            LinkbaseDefinicion.RolDefitionLinkbaseRef,
            LinkbasePresentacion.RolePresentacionLinkbaseRef,
            LinkbaseCalculo.RoleCalculoLinkbaseRef};
        /// <summary>
        /// Relación del rol de un linkbase ref con su respectivo linkbase element que debe contener el archivo referenciado
        /// </summary>
        public static IDictionary<string,string> LinkbaseRefDeLinkElement = new Dictionary<string, string>();
        /// <summary>
        /// Nombre local del elemento para Localizadores
        /// </summary>
        public const string LocatorElement = "loc";
        
        /// <summary>
        /// Nombre local del elemento para reference
        /// </summary>
        public const string ReferenceElement = "reference";
        /// <summary>
        /// Valor requerido en el atriburo type de un Localizador
        /// </summary>
        public const string LocatorAttributeType = "locator";
        
        /// <summary>
        /// Nombre local del atributo de etiqueta
        /// </summary>
        public const string LabelAttribute = "label";
        
        /// <summary>
        /// Nombre del elemento de arco de relación de presentación
        /// </summary>
        public const string PresentationArcElement = "presentationArc";

        /// <summary>
        /// El valor del atributo type que representa un arco
        /// </summary>
        public const string ArcValueType = "arc";

        /// <summary>
        /// El valor del atributo type que representa un resource
        /// </summary>
        public const string ResourceValueType = "resource";

        /// <summary>
        /// Nombre del elemento de arco de relación de cálculo
        /// </summary>
        public const string CalculationArcElement = "calculationArc";
        /// <summary>
        /// Nombre del elemento de arco de relación de etiquetas
        /// </summary>
        public const string LabelArcElement = "labelArc";
        /// <summary>
        /// Nombre del elemento de arco de referencias
        /// </summary>
        public const string ReferenceArcElement = "referenceArc";
        /// <summary>
        /// Nombre del elemento de arco de definicion
        /// </summary>
        public const string DefinitionArcElement = "definitionArc";
        /// <summary>
        /// Valor del atributo from en relaciones de arcos
        /// </summary>
        public const string FromAttribute = "from";
        
        /// <summary>
        /// Valor del atributo to en relaciones de arcos
        /// </summary>
        public const string ToAttribute = "to";
        
        /// <summary>
        /// Nombre del atributo del orden de una relación en un arco
        /// </summary>
        public const string OrderAttribute = "order";
        
        /// <summary>
        /// Nombre local del elemento de documentación
        /// </summary>
        public const string DocumentationElement = "documentation";
        
        /// <summary>
        /// Atributo de indicador de lenguaje
        /// </summary>
        public const string XmlLangAttribute = "lang";
        /// <summary>
        /// Valor completo del atributo lang xml
        /// </summary>
        public const string XmlLangAttributeCompleto = "xml:lang";
        /// <summary>
        /// Nombre local de atributo de rol de etiqueta preferida del elemento
        /// </summary>
        public const string PreferredLabelAttribute = "preferredLabel";
        
        /// <summary>
        /// Nombre local de atributo show del elemento, sin semántica para xbrl
        /// </summary>
        public const string ShowAttribute = "show";
        
        /// <summary>
        /// Nombre local de atributo actuate del elemento, sin semántica para xbrl
        /// </summary>
        public const string ActuateAttribute = "actuate";
        
        /// <summary>
        /// Nombre local de atributo del tipo de uso de un arco
        /// </summary>
        public const string UseAttribute = "use";
        
        /// <summary>
        /// Nombre local del atriburo de prioridad de un arco
        /// </summary>
        public const string PriorityAttribute = "priority";
        /// <summary>
        /// Nombre local del atriburo de peso de un arco de cálculo
        /// </summary>
        public const string WeightAttribute = "weight";


        /// <summary>
        /// El valor del atributo type para indicar que es simple
        /// </summary>
        public const string SimpleType = "simple";

        /// <summary>
        /// El nombre local del atributo balance de un item
        /// </summary>
        public const string BalanceAttribute = "balance";

        /// <summary>
        /// El nombre local del atributo periodType de un item
        /// </summary>
        public const string PeriodTypeAttribute = "periodType";

        /// <summary>
        /// Nombre local del atributo de contextRef
        /// </summary>
        public const string ContextRefAttribute = "contextRef";

        /// <summary>
        /// Nombre local del atributo de unitRef
        /// </summary>
        public const string UnitRefAttribute = "unitRef";

        /// <summary>
        /// Nombre local del atributo de precision
        /// </summary>
        public const string PrecisionAttribute = "precision";

        /// <summary>
        /// Nombre local del atributo de decimals
        /// </summary>
        public const string DecimalsAttribute = "decimals";

        /// <summary>
        /// Nombre local del atributo nil
        /// </summary>
        public const string NilAttribute = "nil";

        /// <summary>
        /// Nombre local del atributo nil
        /// </summary>
        public const string NilValue = "true";
        /// <summary>
        /// Nombre local del atriburo targetRole de la especificación de dimensiones
        /// </summary>
        public const string TargetRoleAttribute = "targetRole";
        /// <summary>
        /// Nombre local del atributo que indica un contexto o segmento cerrado a elementos no declarados en un conjunto base de dimensión
        /// </summary>
        public const string ClosedAttribute = "closed";
        /// <summary>
        /// Nombre local del atributo que indica el elemento que se usará en el contexto para especificar datos dimensionales
        /// </summary>
        public const string ContextElementAttribute = "contextElement";
        /// <summary>
        /// Nombre local del atributo que indica si un miembro o dimensión será considerado en el hipercubo
        /// </summary>
        public const string UsableAttribute = "usable";
        /// <summary>
        /// Nombre local del atributo que indica el tipo de elementos que puede contener el dominio de una dimensión tipificada
        /// </summary>
        public const string TypedDomainRefAttribute = "typedDomainRef";
        /// <summary>
        /// Nombre local del elemento Element de un esquema
        /// </summary>
        public const string ElementDeclaration = "element";
        /// <summary>
        /// Nombre del atriburo de esquema que indica si un elemento es abstracto
        /// </summary>
        public static string AbstractAttribute = "abstract";
    }
}
