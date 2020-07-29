using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRL.Taxonomia.Validador
{
    /// <summary>
    /// Clase para listar los códigos de error que se pueden presentar al cargar o validar documentos de taxonomía 
    /// o instancia
    /// </summary>
    public class CodigosErrorXBRL
    {
        /// <summary>
        /// Errores que se refieren a la validación de XML Schema
        /// </summary>
        public static String SchemaError = "sche:XmlSchemaError";
        /// <summary>
        /// Error que se refiere a la declaración de un hipercubo en su atriburo abstract
        /// </summary>
        public static string HypercubeElementIsNotAbstractError = "xbrldte:HypercubeElementIsNotAbstractError";
        /// <summary>
        /// Error que se refiere a la declaración de un arco hypercube-dimension cuyo elemento from no es una declaración de elemento hipercubo
        /// </summary>
        public static string HypercubeDimensionSourceError = "xbrldte:HypercubeDimensionSourceError";

        /// <summary>
        /// Error que se refiere a la declaración de un arco hypercube-dimension cuyo elemento to no es una declaración de elemento dimension
        /// </summary>
        public static string HypercubeDimensionTargetError = "xbrldte:HypercubeDimensionTargetError";

        /// <summary>
        /// Error que se refiere a la declaración de un arco all o notAll cuyo elemento "from" no es la declaración de un concepto del tipo Item
        /// (puede ser una tupla, hipercubo o dimension)
        /// </summary>
        public static string HasHypercubeSourceError = "xbrldte:HasHypercubeSourceError";
        /// <summary>
        /// Error que se refiere a la declaración de un arco all o notAll cuyo elemento "to" no es la declaración de un hipercubo
        /// </summary>
        public static string HasHypercubeTargetError = "xbrldte:HasHypercubeTargetError";
        /// <summary>
        /// Error que se refiere a que la declaración de un arco all o notAll no fue declarado con el elemento obligatorio xbrldt:contextElement
        /// </summary>
        public static string HasHypercubeMissingContextElementAttributeError = "xbrldte:HasHypercubeMissingContextElementAttributeError";
        /// <summary>
        /// Error que se refiere a que la declaración de un atributo targetRole en un linkbase implica que ese rol debe ser declarado y referenciado en 
        /// ese linkbase
        /// </summary>
        public static string TargetRoleNotResolvedError = "xbrldte:TargetRoleNotResolvedError";
        /// <summary>
        /// Error que se refiere a que la declaración de una dimension debe ser abstracta
        /// </summary>
        public static string DimensionElementIsNotAbstractError = "xbrldte:DimensionElementIsNotAbstractError";
        /// <summary>
        /// Error que se refiere a que la declaración de un elemento que no es un dimensionItem y que declara el atributo xbrldt:typedDomainRef
        /// </summary>
        public static string TypedDomainRefError = "xbrldte:TypedDomainRefError";
        /// <summary>
        /// Error que indica un problema con la declaración de una dimensión tipificada: Nose puede resolver el elemento de esquema o es inválido o está fuera del DTS
        /// </summary>
        public static string TypedDimensionError = "xbrldte:TypedDimensionError";
        /// <summary>
        /// Error que indica un problema con la declaración de una dimensión tipificada: El apuntador al tipo de elemento de esquema 
        /// que representa a los valores de dominio no tiene un identificador de fragmento de xml válido
        /// </summary>
        public static string TypedDimensionURIError = "xbrldte:TypedDimensionURIError";
        /// <summary>
        /// Error que indica un problema con la declaración de un arco del tipo dimension-domain: El lado "from" de la relación no es la declaración
        /// de una dimensción
        /// </summary>
        public static string DimensionDomainSourceError = "xbrldte:DimensionDomainSourceError";
        /// <summary>
        /// Error que indica un problema con la declaración de un arco del tipo dimension-domain: El lado "to" de la relación no es la declaración
        /// de un elemento del tipo item o es una declaración de hipercubo o dimensión
        /// </summary>
        public static string DimensionDomainTargetError = "xbrldte:DimensionDomainTargetError";

        /// <summary>
        /// Error que indica un problema con la declaración de arcos consecutivos de hipercubos
        /// </summary>
        public static string PrimaryItemPolymorphismError = "xbrldte:PrimaryItemPolymorphismError";
        /// <summary>
        /// Error que indica un problema con la declaración de arcos del tipo domain-member, el elemento from debe ser
        /// un elemento primario
        /// </summary>
        public static string DomainMemberSourceError = "xbrldte:DomainMemberSourceError";

        /// <summary>
        /// Error que indica un problema con la declaración de arcos del tipo domain-member, el elemento to debe ser
        /// un elemento primario
        /// </summary>
        public static string DomainMemberTargetError = "xbrldte:DomainMemberTargetError";
        /// <summary>
        /// Error que indica un problema con la declaración de arcos del tipo dimension-default, el elemento from debe
        /// ser una dimensión
        /// </summary>
        public static string DimensionDefaultSourceError = "xbrldte:DimensionDefaultSourceError";
        /// <summary>
        /// Error que indica un problema con la declaración de arcos del tipo dimension-default, el elemento to debe
        /// ser un elemento item que no sea hipercubo o dimension
        /// </summary>
        public static string DimensionDefaultTargetError = "xbrldte:DimensionDefaultTargetError";
        /// <summary>
        /// Error que indica un problema con la declaración de arcos del tipo dimension-default, una dimensión tiene más de un
        /// miembro predeterminado
        /// </summary>
        public static string TooManyDefaultMembersError = "xbrldte:TooManyDefaultMembersError";

        /// <summary>
        /// Error que indica un problema con la declaración de las relaciones que forman el conjunto de arcos dimensionales de un hipercubo
        /// </summary>
        public static string DRSDirectedCycleError = "xbrldte:DRSDirectedCycleError";
        /// <summary>
        /// Error que indica un problema con la declaración de una dimensión tipificada, el elemento typedDomainRef apunta a un elmeneto fuera
        /// del conjunto del DTS (conjunto de esquemas que forman la taxonomía)
        /// </summary>
        public static string OutOfDTSSchemaError = "xbrldte:OutOfDTSSchemaError";
        /// <summary>
        /// Error que indica un problema en un documento de instancia, el valor predeterminado de una dimensión aparece en un contexto
        /// </summary>
        public static string DefaultValueUsedInInstanceError = "xbrldie:DefaultValueUsedInInstanceError";

        /// <summary>
        /// Error que indica un problema en un documento de instancia, la declaración de la dimensión está repetido
        /// </summary>
        public static string RepeatedDimensionInInstanceError = "xbrldie:RepeatedDimensionInInstanceError";
        /// <summary>
        /// Error que indica un problema en un documento de instancia donde la declaración y combinación
        /// de hipercubos de un elemento primario no es válida
        /// </summary>
        public static string PrimaryItemDimensionallyInvalidError = "xbrldie:PrimaryItemDimensionallyInvalidError";
        /// <summary>
        /// Error que indica que en la declaración de un valor de dimensión typed
        /// no a punta a una dimensión typed
        /// </summary>
        public static string TypedMemberNotTypedDimensionError = "xbrldie:TypedMemberNotTypedDimensionError";
        /// <summary>
        /// Error que indica que en la declaración de un valor de dimensión explícita no apunta a una dimensión explícita
        /// </summary>
        public static string ExplicitMemberNotExplicitDimensionError = "xbrldie:ExplicitMemberNotExplicitDimensionError";
        /// <summary>
        /// Error que indica que el miembro de dominio de una dimensión explícita en un contexto no existe
        /// </summary>
        public static string ExplicitMemberUndefinedQNameError = "xbrldie:ExplicitMemberUndefinedQNameError";
        /// <summary>
        /// Error que indica que el miembro de dominio de una dimensión implícita no corresponde a su declaración
        /// </summary>
        public static string IllegalTypedDimensionContentError = "xbrldie:IllegalTypedDimensionContentError";
    }
}
