using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRL.Constantes
{
    /// <summary>
    /// Contiene la definición de constantes de caracter general para el procesador Abax XBRL
    /// <author>José Antonio Huizar Moreno</author>
    /// <version>1.0</version>
    /// </summary>
    public class ConstantesGenerales
    {
        /// <summary>
        /// Contiene el nombre de la propiedad serializada de la excepción de validación de esquema que contiene la clave del recurso que indica el tipo de error.
        /// </summary>
        public const string PropiedadExcepcionRes = "res";

        /// <summary>
        /// La clave del recurso que indica que ocurrió un error relacionado a un atributo no declarado en el esquema.
        /// </summary>
        public const string UndeclaredAttributeResourceKey = "Sch_UndeclaredAttribute";

        /// <summary>
        /// La cadena que permite identificar un ancla en un URI
        /// </summary>
        public const string AnchorString = "#";
        /// <summary>
        /// Expresion regular para validar el valor de un atriburo xml:lang
        /// </summary>
        public const string ExpresionRegularLang = @"^[a-zA-Z]{1,8}(-[a-zA-Z0-9]{1,8})*\z";
        /// <summary>
        /// Extensión de los XSD
        /// </summary>
        public const string XSD_EXT = ".xsd";
        /// <summary>
        /// Extensión de archivo xsd dentro de un identificador xptr
        /// </summary>
        public const string XSD_EXT_XPTR = ".xsd#";
        /// <summary>
        /// Extensión de archivos de linkbases
        /// </summary>
        public const string XML_EXT = ".xml";
        /// <summary>
        /// Extensión de archivo xml dentro de un identificador xptr
        /// </summary>
        public const string XML_EXT_XPTR = ".xml#";
        /// <summary>
        /// Nombre local constante del tipo de medida para acciones
        /// </summary>
        public const string SHARES_UNIT_LOCAL_NAME = "shares";
        /// <summary>
        /// Nombre local constatnte del tipo de medida para tipos pure
        /// </summary>
        public const string PURE_UNIT_LOCAL_NAME = "pure";
        /// <summary>
        /// Valor del atriburo precisión o decimales para indicar que el valor es infinito
        /// </summary>
        public const string VALOR_ATRIBURO_INF = "INF";
        /// <summary>
        /// Valor para atriburos que indican infinitos positivos
        /// </summary>
        public const string VALOR_ATRIBURO_INF_POS = "+INF";
        /// <summary>
        /// Valor para atriburos que indican infinitos negativos
        /// </summary>
        public const string VALOR_ATRIBURO_INF_NEG = "-INF";
        /// <summary>
        /// Valor para indicar Not a Number
        /// </summary>
        public const string VALOR_ATRIBUTO_NaN = "NaN";

        /// <summary>
        /// Valor del comentario de versión de los XBRL generados
        /// </summary>
        public static string COMENTARIO_XBRL = "Documento XBRL generado por AbaxXBRL 1.1 - 2H Software ";
        /// <summary>
        /// Valor predeterminado para el redondeo de decimales
        /// </summary>
        public static string VALOR_DECIMALES_DEFAULT = "0";
        /// <summary>
        /// Valor de la cadena para guión bajo
        /// </summary>
        public static string Underscore_String = "_";
        /// <summary>
        /// Prefijo para etiquetas generadas dinámicamente
        /// </summary>
        public static string LAB_PREFIJO = "LAB_";

        /// <summary>
        /// El prefijo que precede la declaración de una variable usada en una plantilla de un documento instancia XBRL
        /// </summary>
        public static string PrefijoVariablesDocumentoInstancia = "#";
    }
}
