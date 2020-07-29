using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AbaxXBRL.Constantes;

namespace AbaxXBRL.Taxonomia.Linkbases
{
    /// <summary>
    /// El arco de definición exprese relaciones variadas entre elementos de la taxonomía
    /// <author>Emigdio Hernández</author>
    /// <version>1.0</version>
    /// </summary>
    public class ArcoDefinicion : Arco
    {
        /// <summary>
        /// Constructor predeterminado, asigna el tipo de arco de la clase base
        /// </summary>
        public ArcoDefinicion()
        {
            base.TipoArco = TipoArco.TipoArcoDefinicion;
        }
        /// <summary>
        /// Rol que sirve para definir relaciones de generalización y especialización entre conceptos del tipo item
        /// </summary>
        public const string GeneralSpecialRole = "http://www.xbrl.org/2003/arcrole/general-special";
        /// <summary>
        /// Rol que sirve para definir relaciones de elementos que pueden servir para inferir elementos cuando el alias o el emenento primario 
        /// no éstá presente
        /// </summary>
        public const string EssenceAliasRole = "http://www.xbrl.org/2003/arcrole/essence-alias";
        /// <summary>
        /// Rol que sirve para definir relaciones entre elementos del tipo tupla que tienen definiciones equivalentes
        /// </summary>
        public const string SimilarTuplesRole = "http://www.xbrl.org/2003/arcrole/similar-tuples";
        /// <summary>
        /// Rol que sirve para definir una relación entre elementos donde si el concepto fuente está presente en una instancia de XBRL
        /// entonces el concepto destino también debe estar presente
        /// </summary>
        public const string RequieresElement = "http://www.xbrl.org/2003/arcrole/requires-element";
        /// <summary>
        /// Rol que sirve para definir una relación entre elementos hipercubo y su dimension
        /// </summary>
        public const string HypercubeDimensionRole = "http://xbrl.org/int/dim/arcrole/hypercube-dimension";
        /// <summary>
        /// Declaración del tipo de rol que indica que una combinación de miembros de dimensión del cubo aparezcan en el contexto del 
        /// elemento primario
        /// </summary>
        public const string HasHypercubeAllRole = "http://xbrl.org/int/dim/arcrole/all";
        /// <summary>
        /// Declaración del tipo de rol que indica la combinación de miembros de dimensión que se requiere
        /// no aparezcan en el contexto del elemento primario
        /// </summary>
        public const string HasHypercubeNotAllRole = "http://xbrl.org/int/dim/arcrole/notAll";
        /// <summary>
        /// Declaración del tipo de rol que indica una relación entre una declaración de dimensión y su dominio de valores
        /// </summary>
        public const string DimensionDomainRole = "http://xbrl.org/int/dim/arcrole/dimension-domain";
        /// <summary>
        /// Declaración del tipo de rol que indica una relación entre una dimensión y sus posibles valores
        /// </summary>
        public const string DomainMemberRole = "http://xbrl.org/int/dim/arcrole/domain-member";
        /// <summary>
        /// Declaración del tipo de rol que indica una relación entre una dimensión y su miembro por defecto
        /// </summary>
        public const string DimensionDefaultRole = "http://xbrl.org/int/dim/arcrole/dimension-default";
        /// <summary>
        /// Lista de valores de rol para un arco de definición
        /// </summary>
        public static string[] RolesArcoDefinicion = {GeneralSpecialRole,
                                                   EssenceAliasRole,
                                                   SimilarTuplesRole,
                                                   RequieresElement
                                                   };
        /// <summary>
        /// Define, para cada arco de tipo dimensional, el tipo de arco siguiente que es potencialmente un arco consecutivo
        /// </summary>
        public static IDictionary<string,string> RolesArcosDimensionalesConsecutivos = new Dictionary<string, string>();
        /// <summary>
        /// Atributo opcional (Requerido en un arco has-hypercube)  que indica el tipo de elemento de contexto para la información dimensional usada cuando este arco declara un hipercubo
        /// </summary>
        public TipoElementoContexto ElementoContexto { get; set; }
        /// <summary>
        /// Atributo opcional que ndica si el arco de definición del tipo has-hypercube puede o no contener otros elementos diferentes del conjunto
        /// de elementos base de la declaración del hipercubo
        /// </summary>
        public bool? Closed { get; set; }
        /// <summary>
        /// Atributo opcional de un arco de definición que indica el rol donde se encuentra la declaración 
        /// del extremo "hacia" del arco
        /// </summary>
        public string RolDestino { get; set; }
        /// <summary>
        /// Atributo opcional que indica si un elemento se puede o no usar como miembro de un dominio en un documento de instancia.
        /// El valor predeterminado es verdadero
        /// </summary>
        public bool? Usable { get; set; }

        static ArcoDefinicion()
        {
            RolesArcosDimensionalesConsecutivos.Add(HasHypercubeAllRole,HypercubeDimensionRole);
            RolesArcosDimensionalesConsecutivos.Add(HasHypercubeNotAllRole, HypercubeDimensionRole);
            RolesArcosDimensionalesConsecutivos.Add(HypercubeDimensionRole, DimensionDomainRole);
            RolesArcosDimensionalesConsecutivos.Add(DimensionDomainRole, DomainMemberRole);
            RolesArcosDimensionalesConsecutivos.Add(DomainMemberRole, DomainMemberRole);
        }
    }
}
