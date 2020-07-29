using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRL.Constantes
{
    /// <summary>
    /// Listado de todos los tipos de datos permitidos por la especificación XBRL 2.1.
    /// Todos los tipos de elemento DEBEN ser uno de los tipos listados más abajo o derivados de uno de ellos por restricción. Este conjunto de tipos base XBRL provistos cubren el subconjunto apropiado de tipos predefinidos en el esquema XML (ambos, primitivos y derivados) así como los cuatro tipos que han sido identificados al tener relevancia particular al dominio al que se dirige XBRL (monetaryItemType, sharesItemType, pureItemType and fractionItemType)
    /// y por lo tanto explicitamente deinifidos en el espacio de nombres XBRL.
    /// <author>José Antonio Huizar Moreno</author>
    /// <version>1.0</version>
    /// </summary>
    public class TiposDatoXBRL
    {

        /// <summary>
        /// Tipo de dato XML decimal
        /// </summary>
        public const String XML_TYPE_DECIMAL = "decimal";
        /// <summary>
        /// Tipo de dato XML double
        /// </summary>
        public const  String XML_TYPE_DOUBLE = "double";
        /// <summary>
        /// Tipo de dato XML float
        /// </summary>
	    public const  String XML_TYPE_FLOAT = "float";
        /// <summary>
        /// Tipo de dato XML int
        /// </summary>
	    public const  String XML_TYPE_INT = "int";
        /// <summary>
        /// Tipo de dato XML integer
        /// </summary>
	    public const  String XML_TYPE_INTEGER = "integer";
        /// <summary>
        /// Tipo de dato XML long
        /// </summary>
	    public const  String XML_TYPE_LONG = "long";
        /// <summary>
        /// Tipo de dato XML negativeInteger
        /// </summary>
	    public const  String XML_TYPE_NEGATIVE_INTEGER = "negativeInteger";
        /// <summary>
        /// Tipo de dato XML nonNegativeInteger
        /// </summary>
	    public const  String XML_TYPE_NON_NEGATIVE_INTEGER = "nonNegativeInteger";
        /// <summary>
        /// Tipo de dato XML nonPositiveInteger
        /// </summary>
	    public const  String XML_TYPE_NON_POSITIVE_INTEGER = "nonPositiveInteger";
        /// <summary>
        /// Tipo de dato XML positiveInteger
        /// </summary>
	    public const  String XML_TYPE_POSITIVE_INTEGER = "positiveInteger";

        /// <summary>
        /// El tipo de dato decimalItemType
        /// </summary>
        public const string DecimalItemType = "decimalItemType";

        /// <summary>
        /// El tipo de dato floatItemType
        /// </summary>
        public const string FloatItemType = "floatItemType";

        /// <summary>
        /// El tipo de dato doubleItemType
        /// </summary>
        public const string DoubleItemType = "doubleItemType";

        /// <summary>
        /// El tipo de dato integerItemType
        /// </summary>
        public const string IntegerItemType = "integerItemType";

        /// <summary>
        /// El tipo de dato nonPositiveIntegerItemType
        /// </summary>
        public const string NonPositiveIntegerItemType = "nonPositiveIntegerItemType";

        /// <summary>
        /// El tipo de dato negativeIntegerItemType
        /// </summary>
        public const string NegativeIntegerItemType = "negativeIntegerItemType";

        /// <summary>
        /// El tipo de dato longItemType
        /// </summary>
        public const string LongItemType = "longItemType";

        /// <summary>
        /// El tipo de dato intItemType
        /// </summary>
        public const string IntItemType = "intItemType";

        /// <summary>
        /// El tipo de dato shortItemType
        /// </summary>
        public const string ShortItemType = "shortItemType";

        /// <summary>
        /// El tipo de dato byteItemType
        /// </summary>
        public const string ByteItemType = "byteItemType";

        /// <summary>
        /// El tipo de dato nonNegativeIntegerItemType
        /// </summary>
        public const string NonNegativeIntegerItemType = "nonNegativeIntegerItemType";

        /// <summary>
        /// El tipo de dato unsignedLongItemType
        /// </summary>
        public const string UnsignedLongItemType = "unsignedLongItemType";

        /// <summary>
        /// El tipo de dato unsignedIntItemType
        /// </summary>
        public const string UnsignedIntItemType = "unsignedIntItemType";

        /// <summary>
        /// El tipo de dato unsignedShortItemType
        /// </summary>
        public const string UnsignedShortItemType = "unsignedShortItemType";

        /// <summary>
        /// El tipo de dato unsignedByteItemType
        /// </summary>
        public const string UnsignedByteItemType = "unsignedByteItemType";

        /// <summary>
        /// El tipo de dato positiveIntegerItemType
        /// </summary>
        public const string PositiveIntegerItemType = "positiveIntegerItemType";

        /// <summary>
        /// El tipo de dato monetaryItemType
        /// </summary>
        public const string MonetaryItemType = "monetaryItemType";

        /// <summary>
        /// El tipo de dato sharesItemType
        /// </summary>
        public const string SharesItemType = "sharesItemType";

        /// <summary>
        /// El tipo de dato pureItemType
        /// </summary>
        public const string PureItemType = "pureItemType";
        /// <summary>
        /// Tipo de datos Monetario entre acciones
        /// </summary>
        public const string PerShareItemType = "perShareItemType";

        /// <summary>
        /// El tipo de dato fractionItemType
        /// </summary>
        public const string FractionItemType = "fractionItemType";

        /// <summary>
        /// El tipo de dato stringItemType
        /// </summary>
        public const string StringItemType = "stringItemType";

        /// <summary>
        /// El tipo de dato booleanItemType
        /// </summary>
        public const string BooleanItemType = "booleanItemType";

        /// <summary>
        /// El tipo de dato hexBinaryItemType
        /// </summary>
        public const string HexBinaryItemType = "hexBinaryItemType";

        /// <summary>
        /// El tipo de dato base64BinaryItemType
        /// </summary>
        public const string Base64BinaryItemType = "base64BinaryItemType";

        /// <summary>
        /// El tipo de dato anyURIItemType
        /// </summary>
        public const string AnyURIItemType = "anyURIItemType";

        /// <summary>
        /// El tipo de dato QNameItemType
        /// </summary>
        public const string QNameItemType = "QNameItemType";

        /// <summary>
        /// El tipo de dato durationItemType
        /// </summary>
        public const string DurationItemType = "durationItemType";

        /// <summary>
        /// El tipo de dato dateTimeItemType
        /// </summary>
        public const string DateTimeItemType = "dateTimeItemType";

        /// <summary>
        /// El tipo de dato timeItemType
        /// </summary>
        public const string TimeItemType = "timeItemType";

        /// <summary>
        /// El tipo de dato dateItemType
        /// </summary>
        public const string DateItemType = "dateItemType";

        /// <summary>
        /// El tipo de dato gYearMonthItemType
        /// </summary>
        public const string GYearMonthItemType = "gYearMonthItemType";

        /// <summary>
        /// El tipo de dato gYearItemType
        /// </summary>
        public const string GYearItemType = "gYearItemType";

        /// <summary>
        /// El tipo de dato gMonthDayItemType
        /// </summary>
        public const string GMonthDayItemType = "gMonthDayItemType";

        /// <summary>
        /// El tipo de dato gDayItemType
        /// </summary>
        public const string GDayItemType = "gDayItemType";

        /// <summary>
        /// El tipo de dato gMonthItemType
        /// </summary>
        public const string GMonthItemType = "gMonthItemType";

        /// <summary>
        /// El tipo de dato normalizedStringItemType
        /// </summary>
        public const string NormalizedStringItemType = "normalizedStringItemType";

        /// <summary>
        /// El tipo de dato tokenItemType
        /// </summary>
        public const string TokenItemType = "tokenItemType";

        /// <summary>
        /// El tipo de dato TextBlockItemType
        /// </summary>
        public const string TextBlockItemType = "textBlockItemType";


        /// <summary>
        /// El tipo de dato languageItemType
        /// </summary>
        public const string LanguageItemType = "languageItemType";

        /// <summary>
        /// El tipo de dato NameItemType
        /// </summary>
        public const string NameItemType = "NameItemType";

        /// <summary>
        /// El tipo de dato NCNameItemType
        /// </summary>
        public const string NCNameItemType = "NCNameItemType";



        /// <summary>
        /// El arreglo que contiene los nombre de todos los tipos de datos definidos por XBRL
        /// </summary>
        public static string[] TiposXBRL = { 
                                          DecimalItemType,
                                          FloatItemType,
                                          DoubleItemType,
                                          IntegerItemType,
                                          NonPositiveIntegerItemType,
                                          NegativeIntegerItemType,
                                          LongItemType,
                                          IntItemType,
                                          ShortItemType,
                                          ByteItemType,
                                          NonNegativeIntegerItemType,
                                          UnsignedLongItemType,
                                          UnsignedIntItemType,
                                          UnsignedShortItemType,
                                          UnsignedByteItemType,
                                          PositiveIntegerItemType,
                                          MonetaryItemType,
                                          SharesItemType,
                                          PureItemType,
                                          FractionItemType,
                                          StringItemType,
                                          BooleanItemType,
                                          HexBinaryItemType,
                                          Base64BinaryItemType,
                                          AnyURIItemType,
                                          QNameItemType,
                                          DurationItemType,
                                          DateTimeItemType,
                                          TimeItemType,
                                          DateItemType,
                                          GYearMonthItemType,
                                          GYearItemType,
                                          GMonthDayItemType,
                                          GDayItemType,
                                          GMonthItemType,
                                          NormalizedStringItemType,
                                          TokenItemType,
                                          LanguageItemType,
                                          NameItemType,
                                          NCNameItemType,
                                          PerShareItemType
                                          };

        /// <summary>
        /// El arreglo que contiene los nombre de todos los tipos de datos numéricos definidos por XBRL
        /// </summary>
        public static string[] TiposNumericosXBRL = { 
                                          DecimalItemType,
                                          FloatItemType,
                                          DoubleItemType,
                                          IntegerItemType,
                                          NonPositiveIntegerItemType,
                                          NegativeIntegerItemType,
                                          LongItemType,
                                          IntItemType,
                                          ShortItemType,
                                          ByteItemType,
                                          NonNegativeIntegerItemType,
                                          UnsignedLongItemType,
                                          UnsignedIntItemType,
                                          UnsignedShortItemType,
                                          UnsignedByteItemType,
                                          PositiveIntegerItemType,
                                          MonetaryItemType,
                                          SharesItemType,
                                          PureItemType,
                                          FractionItemType,
                                          PerShareItemType
                                          };

        
    }
}
