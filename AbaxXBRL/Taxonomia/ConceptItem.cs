using AbaxXBRL.Constantes;
using AbaxXBRL.Util;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml;
using System.Xml.Schema;

namespace AbaxXBRL.Taxonomia
{
    /// <summary>
    /// Implementación de un concepto con grupo de sustitución <code>&lt;item&gt;</code> definido en la taxonomía. 
    /// 
    /// Un elemento representa un hecho simple o una medida de negocio. En el esquema XML de las instancias XBRL, 
    /// un elemento es definido como un Elemento Abstracto. Esto significa que nunca aparecerá por si mismo en un documento instancia XBRL. Por lo tanto, todos 
    /// los elementos que representan hechos simple o medidas de negocio en una documento de taxonomìa XBRL  y que son reportados en un documento instancia XBRL
    /// DEBEN ser ya sea a) miembros del grupo de sustitución item ó b) miembros del grupo de sustitución originalmente basados en item.
    /// <author>José Antonio Huizar Moreno</author>
    /// <version>1.0</version>
    /// </summary>
    public class ConceptItem : Concept
    {
        /// <summary>
        /// El valor que identifica el tipo de periodo Duration
        /// </summary>
        public const string DurationPeriodType = "duration";

        /// <summary>
        /// El valor que identifica el tipo de periodo Instant
        /// </summary>
        public const string InstantPeriodType = "instant";

        /// <summary>
        /// El valor que identifica el tipo de balance debit
        /// </summary>
        public const string DebitBalance = "debit";

        /// <summary>
        /// El valor que identifica el tipo de balance credit
        /// </summary>
        public const string CreditBalance = "credit";

        /// <summary>
        /// El balance del concepto en la taxonomía (débito o crédito).
        /// </summary>
        public XmlQualifiedName Balance { get; set; }

        /// <summary>
        /// El tipo de periodo en que se reporta este concepto (instante o duración).
        /// </summary>
        public XmlQualifiedName TipoPeriodo { get; set; }

        /// <summary>
        /// El nombre del tipo de dato base de XBRL que utiliza para reportear este elemento.
        /// </summary>
        public XmlQualifiedName TipoDatoXbrl { get; set; }

        /// <summary>
        /// El nombre del tipo de dato que utiliza para reportear este elemento.
        /// </summary>
        public XmlQualifiedName TipoDato { get; set; }

        /// <summary>
        /// Indica si este elemento es abstracto (<code>true</code>) o no (<code>false</code>).
        /// </summary>
        public bool Abstracto { get; set; }

        /// <summary>
        /// Indica que en el documento instancia, este elemento puede no especificar un valor y colocar el atributo <code>null</code> en <code>true</code>.
        /// </summary>
        public bool Nillable { get; set; }

        /// <summary>
        /// Indica si el tipo de dato de este item es de tipo fractionItemType o derivado de este.
        /// </summary>
        public bool EsTipoDatoFraccion { get; set; }

        /// <summary>
        /// Indica si el tipo de dato de este item es derivado de alguno de los tipos numéricos XBRL.
        /// </summary>
        public bool EsTipoDatoNumerico { get; set; }

        /// <summary>
        /// Indica si el tipo de dato de este item es de tipo monetaryItemType o derivado de este.
        /// </summary>
        public bool EsTipoDatoMonetario { get; set; }
        /// <summary>
        /// Indica si el tipo de dato de este item es de tipo sharesItemType o derivado de este
        /// </summary>
        public bool EsTipoDatoAcciones { get; set; }
        /// <summary>
        /// Indica si el tipo de dato de este item es de tipo pureItemType o derivado de este
        /// </summary>
        public bool EsTipoDatoPuro { get; set; }
        /// <summary>
        /// Indica si el tipo de dato es tipo Token
        /// </summary>
        public bool EsTipoDatoToken { get; set; }

        /// <summary>
        /// Lista de valores definidos para el tipo de dato token del concepto, en caso 
        /// de que el concepto sea o herede de tipo de dato token
        /// </summary>
        public IList<String> ValoresToken { get; set; }
        /// <summary>
        /// Constructor de la clase <code>ConceptItem</code>
        /// </summary>
        /// <param name="elemento">el Elemento XML que da origen a este <code>ConceptItem</code></param>
        public ConceptItem(XmlSchemaElement elemento)
        {
            this.Elemento = elemento;
            this.Abstracto = false;
            this.Nillable = false;
            this.EsTipoDatoFraccion = false;
            this.EsTipoDatoNumerico = false;
            this.EsTipoDatoMonetario = false;
            this.EsTipoDatoAcciones = false;
            this.EsTipoDatoPuro = false;
            this.EsTipoDatoToken = false;
            this.AtributosAdicionales = new Dictionary<string, string>();
        }
        /// <summary>
        /// Determina si el balance del elemento es del tipo Debito
        /// </summary>
        /// <returns></returns>
        public bool IsDebitBalance()
        {
            return Balance != null && Balance.Name != null && DebitBalance.Equals(Balance.Name);
        }
        /// <summary>
        /// Determina si el balance del elemento es del tipo Crédito
        /// </summary>
        /// <returns></returns>
        public bool IsCreditBalance()
        {
            return Balance != null && Balance.Name != null && CreditBalance.Equals(Balance.Name);
        }
        /// <summary>
        /// Verifica si el valor enviado como párámetro es válido respecto al tipo de dato del concepto
        /// </summary>
        /// <param name="valorHecho">Valor del hecho a validar</param>
        /// <returns>True so el valor es válido según el tipo de dato del concepto, false en otro caso</returns>
        public bool EsValorHechoValido(String valorHecho) {
           
            if (this.EsTipoDatoNumerico)
            {
                double resultado = 0;
                if (Double.TryParse(valorHecho, NumberStyles.Any, CultureInfo.InvariantCulture, out resultado))
                {

                    if (this.TipoDatoXbrl.Name.Contains(TiposDatoXBRL.IntegerItemType) ||
                       this.TipoDatoXbrl.Name.Contains(TiposDatoXBRL.IntItemType) ||
                       this.TipoDatoXbrl.Name.Contains(TiposDatoXBRL.LongItemType) ||
                       this.TipoDatoXbrl.Name.Contains(TiposDatoXBRL.SharesItemType) ||
                       this.TipoDatoXbrl.Name.Contains(TiposDatoXBRL.ShortItemType) ||
                       this.TipoDatoXbrl.Name.Contains(TiposDatoXBRL.NonNegativeIntegerItemType) ||
                       this.TipoDatoXbrl.Name.Contains(TiposDatoXBRL.NonPositiveIntegerItemType) ||
                       this.TipoDatoXbrl.Name.Contains(TiposDatoXBRL.NegativeIntegerItemType) ||
                       this.TipoDatoXbrl.Name.Contains(TiposDatoXBRL.PositiveIntegerItemType) ||
                       this.TipoDatoXbrl.Name.Contains(TiposDatoXBRL.UnsignedIntItemType) ||
                       this.TipoDatoXbrl.Name.Contains(TiposDatoXBRL.UnsignedLongItemType) ||
                       this.TipoDatoXbrl.Name.Contains(TiposDatoXBRL.UnsignedShortItemType))
                    {
                        long longResult = 0;
                        if (Int64.TryParse(valorHecho, NumberStyles.Any, CultureInfo.InvariantCulture, out longResult))
                        {
                            if(this.TipoDatoXbrl.Name.Contains(TiposDatoXBRL.NonNegativeIntegerItemType) ||
                               this.TipoDatoXbrl.Name.Contains(TiposDatoXBRL.UnsignedIntItemType) ||
                               this.TipoDatoXbrl.Name.Contains(TiposDatoXBRL.UnsignedLongItemType) ||
                               this.TipoDatoXbrl.Name.Contains(TiposDatoXBRL.UnsignedShortItemType))
                            {
                                if (longResult < 0) {
                                    return false;
                                }
                            }

                            if (this.TipoDatoXbrl.Name.Contains(TiposDatoXBRL.NegativeIntegerItemType))
                            {
                                if (longResult >= 0) {
                                    return false;
                                }
                            }
                            if (this.TipoDatoXbrl.Name.Contains(TiposDatoXBRL.NonPositiveIntegerItemType))
                            {
                                if (longResult > 0) {
                                    return false;
                                }
                            }
                            if (this.TipoDatoXbrl.Name.Contains(TiposDatoXBRL.PositiveIntegerItemType))
                            {
                                if (longResult <= 0) {
                                    return false;
                                }
                            }
                        }
                        else {
                            return false;
                        }
                    }
                    
                }
                else {
                    return false;
                }

            }
            else if(this.EsTipoDatoToken) {
                if (this.ValoresToken != null && this.ValoresToken.Count > 0 && valorHecho != null) {
                    if (!this.ValoresToken.Contains(valorHecho.Trim())) {
                        return false;
                    }
                }
            } 
            else if(this.TipoDatoXbrl.Name.Equals(TiposDatoXBRL.BooleanItemType)){
                if (!XmlUtil.BooleanItemTypeValidValues.Contains(valorHecho)) {
                    return false;
                }
            }
            else if (this.TipoDatoXbrl.Name.Equals(TiposDatoXBRL.DateItemType) || this.TipoDatoXbrl.Name.Equals(TiposDatoXBRL.DateTimeItemType))
            {
                DateTime fecha = DateTime.MinValue;
                if (!XmlUtil.ParsearUnionDateTime(valorHecho, out fecha))
                {
                    return false;
                }
            }
            return true;
        }
    }
}
