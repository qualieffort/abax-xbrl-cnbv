using AbaxXBRLBlockStore.Common.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AbaxXBRLCore.Viewer.Application.Dto
{
    /// <summary>
    /// Implementación de un DTO el cual representa un Concepto dentro de la taxonomía XBRL.
    /// <author>José Antonio Huizar Moreno</author>
    /// <version>1.0</version>
    /// </summary>
    public class ConceptoDto
    {
        /// <summary>
        /// Identifica el grupo de substición elemento
        /// </summary>
        public const string SubstitutionGroupItem = "item";

        /// <summary>
        /// Identifica el grupo de substición tupla
        /// </summary>
        public const string SubstitutionGroupTuple = "tuple";

        /// <summary>
        /// Identifica el grupo de substición parte
        /// </summary>
        public const string SubstitutionGroupPart = "part";
        /// <summary>
        /// Identifica el grupo de substitución para un Hipercubo
        /// </summary>
        public const string SubstitutionGroupHypercubeItem = "hypercubeItem";
        /// <summary>
        /// Identifica el grupo de substitución para una Dimensión de hipercubo
        /// </summary>
        public const string SubstitutionGroupDimensionItem = "dimensionItem";

        /// <summary>
        /// Indica que el elemento es la definición de una tupla
        /// </summary>
        public const int Tuple = 1;

        /// <summary>
        /// Indica que el elemento es la definición de un elemento
        /// </summary>
        public const int Item = 2;
        /// <summary>
        /// Indica que el elemento es la definición de un hipercubo
        /// </summary>
        public const int HypercubeItem = 3;
        /// <summary>
        /// Indica que el elemento es la definición de una dimensión de hipercubo
        /// </summary>
        public const int DimensionItem = 4;
        /// <summary>
        /// Indica que el elemento es la definición de una parte de referencia
        /// </summary>
        public const int PartItem = 4;
        /// <summary>
        /// El valor que identifica el tipo de balance debit
        /// </summary>
        public const string DebitBalance = "debit";

        /// <summary>
        /// El valor que identifica el tipo de balance credit
        /// </summary>
        public const string CreditBalance = "credit";
        /// <summary>
        /// Valor de constante que representa un balance de cuenta debito
        /// </summary>
        public const int DebitBalanceValue = 1;
        /// <summary>
        /// Valor de constante que representa un balance de cuenta credito
        /// </summary>
        public const int CreditBalanceValue = 2;

        /// <summary>
        /// El tipo de concepto que representa
        /// </summary>
        public int Tipo { get; set; }

        /// <summary>
        /// El balance del concepto
        /// </summary>
        public int? Balance { get; set; }

        /// <summary>
        /// El tipo de dato base XBRL del concepto
        /// </summary>
        public string TipoDatoXbrl { get; set; }

        /// <summary>
        /// El tipo de dato del concepto
        /// </summary>
        public string TipoDato { get; set; }

        /// <summary>
        /// El tipo de periodo asociado al concepto
        /// </summary>
        public string TipoPeriodo { get; set; }

        /// <summary>
        /// Los conceptos que agrupa este concepto en caso de ser una tupla
        /// </summary>
        public IList<ConceptoDto> Conceptos { get; set; }

        /// <summary>
        /// El nombre de la etiqueta que representa el concepto.
        /// </summary>
        public string Nombre { get; set; }

        /// <summary>
        /// El espacio de nombres al que pertenece el Concepto
        /// </summary>
        public string EspacioNombres { get; set; }

        /// <summary>
        /// El espacio de nombres de la taxonomia al que pertenece el Concepto
        /// </summary>
        public string EspacioNombresPrincipal { get; set; }

        
        /// <summary>
        /// El identificador único del concepto dentro la taxonomía XBRL
        /// </summary>
        public string Id { get; set; }

        /// <summary>
        /// Indica que el concepto es la definición de un hipercubo
        /// </summary>
        public bool EsHipercubo { get; set; }

        /// <summary>
        /// Indica que el concepto es la definición de una dimensión de un hipercubo
        /// </summary>
        public bool? EsDimension { get; set; }

        /// <summary>
        /// Indica si el concepto es un elemento abstracto.
        /// </summary>
        public bool? EsAbstracto { get; set; }

        /// <summary>
        /// Indica que el concepto es la definición de un miembro de una dimensión de un hipercubo
        /// </summary>
        public bool? EsMiembroDimension { get; set; }

        /// <summary>
        /// Indica si este concepto puede tener valor nil
        /// </summary>
        public bool? EsNillable { get; set; }

        /// <summary>
        /// Las diferentes etiquetas asociadas a este concepto organizadas por idioma y posteriormente por rol.
        /// </summary>
        public IDictionary<string, IDictionary<string, EtiquetaDto>> Etiquetas { get; set; }

        /// <summary>
        /// Etiquetas del concepto
        /// </summary>
        public EtiquetaDto[] EtiquetasConcepto { get; set; }


        /// <summary>
        /// Las diferentes etiquetas asociadas a este concepto organizadas por idioma y posteriormente por rol.
        /// </summary>
        public IList<ReferenciaDto> Referencias { get; set; }

        /// <summary>
        /// En caso de que el tipo de dato del concepto sea un token item type, se llena la información de los posibles valores
        /// que puede tomar
        /// </summary>
        public IList<string> ListaValoresToken { get; set; }  

        /// <summary>
        /// Indica si el tipo de dato es numérico
        /// </summary>
        public bool EsTipoDatoNumerico { get; set; }

        /// <summary>
        /// Indica si el tipo de dato es numérico
        /// </summary>
        public bool EsTipoDatoFraccion { get; set; }

        /// <summary>
        /// Indica si el tipo de dato es Token
        /// </summary>
        public bool EsTipoDatoToken { get; set; }

        /// <summary>
        /// Informacion dimensional del concepto
        /// </summary>
        public List<DimensionInfoDto> InformacionDimensional { get; set; }

        /// <summary>
        /// Informacion dimensiona poor idDimension y miembro de la dimension
        /// </summary>
        public Dictionary<string, List<DimensionInfoDto>> InformacionDimensionalPorConcepto { get; set; }

        /// <summary>
        /// Conjunto de atributos aidicionales definidos en un concepto de la taxonomía
        /// </summary>
        public IDictionary<String, String> AtributosAdicionales { get; set; }
    }
}