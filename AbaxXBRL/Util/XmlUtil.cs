using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml;
using AbaxXBRL.Constantes;
using System.Xml.Schema;
using System.IO;
namespace AbaxXBRL.Util
{
    /// <summary>
    /// Clase de utilerías para facilitar el tratamiento y la lectura de propiedades y otros elementos 
    /// de objetos XML
    /// </summary>
    public class XmlUtil
    {
        /// <summary>
        /// El formato de fecha en el que se expresa un elemento UnionDateTime
        /// </summary>
        public static string[] UnionDateTimeFormats = new string[] { "yyyy-MM-dd","yyyy-MM-dd'T'HH:mm:ss.FFFK", "yyyy-MM-dd'T'HH:mm:ss"};
        /// <summary>
        /// Cadenas válidas para los tipos de dato boolean
        /// </summary>
        public static string[] BooleanItemTypeValidValues = new String[] {"false","true","0","1" };
        /// <summary>
        /// Lee todos los atributos de un nodo de XML y los coloca en un diccionario:
        /// Utiliza como llave el nombre local y como valor el valor del atributo
        /// </summary>
        /// <param name="nodo">Nodo XML para leer sus atributos</param>
        /// <returns>Diccionario de atributos con su nombre local y su valor</returns>
        public static IDictionary<String, String> ObtenerAtributosDeNodo(XmlNode nodo)
        {
            IDictionary<String, String> atributos = new Dictionary<String, String>();

            if (nodo != null)
            {
                foreach (XmlAttribute attr in nodo.Attributes)
                {
                    atributos.Add(attr.LocalName, attr.Value);
                }
            }
            return atributos;
        }
        /// <summary>
        /// Verifica si el identificador de algún elemento cumple con el estándar de NCName de w3.org
        /// http://www.w3.org/TR/REC-xml-names/#NT-NCName
        /// </summary>
        /// <param name="nombre">Nombre a validar</param>
        /// <returns>True si el nombre es válido, false en otro caso</returns>
        public static Boolean EsNombreNCValido(String nombre)
        {
            try
            {
                System.Xml.XmlConvert.VerifyNCName(nombre);
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }

        }
        /// <summary>
        /// Verifica si el identificador de algún elemento cumple con el estándar de NMToken de w3.org
        /// http://www.w3.org/TR/REC-xml/#NT-TokenizedType
        /// </summary>
        /// <param name="nombre">Nombre a validar</param>
        /// <returns>True si el nombre es válido, false en otro caso</returns>
        public static Boolean EsNombreIDValido(String nombre)
        {
            try
            {
                System.Xml.XmlConvert.VerifyNMTOKEN(nombre);
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }


        /// <summary>
        /// Parsea un elemento de tipo UnionDateTime.
        /// Todos los elementos referentes a la fecha serán parseados e interpretados a GMT 0 si no se especifica otra cosa
        /// </summary>
        /// <param name="unionDateTime">La representación en cadena del UnionDateTime</param>
        /// <param name="fecha">Parámetro de salida para la fecha parseada</param>
        /// <param name="estiloFecha">Estilo de fecha a signar UTC, local , no especificada, etcs</param>
        /// <returns>Un objeto <code>DateTime</code> con la representación del UnionDateTime. <code>null</code> en caso de que no tenga el formato requerido por un UnionDateTime</returns>
        public static bool ParsearUnionDateTime(string unionDateTime, out DateTime fecha, DateTimeStyles estiloFecha = DateTimeStyles.AssumeUniversal)
        {
            bool exito = false;

            fecha = DateTime.Today;

            if (unionDateTime != null && !unionDateTime.Equals(string.Empty))
            {
                foreach (var formato in UnionDateTimeFormats)
                {
                    try
                    {
                        fecha = DateTime.MinValue;
                        if (!DateTime.TryParseExact(unionDateTime, formato, CultureInfo.InvariantCulture, estiloFecha, out fecha))
                        {
                            continue;
                        }
                        if (estiloFecha == DateTimeStyles.AssumeUniversal)
                        {
                            fecha = fecha.ToUniversalTime();
                        }
                        break;
                    }
                    catch (Exception)
                    {
                        Debug.Write("Errora al parsear fecha {unionDateTime:[" + unionDateTime + "], estiloFecha:[" + estiloFecha + "], }");
                    }
                }
                exito = !fecha.Equals(DateTime.MinValue);
            }
            else 
            {
                exito = false;
            }

            return exito;
        }
        /// <summary>
        /// Convierte una fecha en una cadena que representa el formato union date time.
        /// <param name="fecha">Fecha a convertir</param>
        /// <returns>Cadena en formato union date time que representa a la fecha enviada como parámetro</returns>
        /// </summary>
        public static string ToUnionDateTimeString(DateTime fecha)
        {
            
           return fecha.ToUniversalTime().ToString(UnionDateTimeFormats[0], CultureInfo.InvariantCulture);
        }

        /// <summary>
        /// Resuelve un URI relativo a aun URI base.
        /// </summary>
        /// <param name="baseUri">el URI base</param>
        /// <param name="relativeUri">el URI relativo</param>
        /// <returns>el URI resuelto. <code>null</code> si ocurrió un error al procesar</returns>
        public static string ResolverUriRelativoAOtro(string baseUri, string relativeUri)
        {
            string resultado = baseUri;

            if (baseUri != null && relativeUri != null)
            {
                try
                {
                    if(!String.IsNullOrEmpty(baseUri))
                    {
                        resultado = new Uri(new Uri(baseUri), relativeUri).ToString();
                    }else
                    {
                        resultado = new Uri(relativeUri).ToString();
                    }
                    
                }
                catch(Exception e)
                {
                    Debug.WriteLine(e);
                    resultado = null;
                }
            }

            return resultado;
        }

        /// <summary>
        /// Parsea un elemento del tipo QName.
        /// </summary>
        /// <param name="strQName">la representación en cadena del QName</param>
        /// <returns>un objeto <code>XmlQualifiedName</code> con la representación del QName. <code>null</code> en caso de que no tenga el formato requerido por un QName</returns>
        public static XmlQualifiedName ParsearQName(string strQName)
        {
            XmlQualifiedName qName = null;
            if(strQName == null) return null;

            int indexSeparador = strQName.LastIndexOf(EspacioNombresConstantes.SeparadorQName[0]);

            
            string name = null;
            string names = null;
            if (indexSeparador<0)
            {
                name = strQName;
            }
            else
            {
                names = strQName.Substring(0, indexSeparador);
                name = strQName.Substring(indexSeparador+1);
            }

            if (name != null)
            {
                qName = new XmlQualifiedName(name!=null?name.Trim():name,names!=null? names.Trim():names);
            }

            return qName;
        }
        /// <summary>
        /// Obtiene un elemento del tipo Qname a partir de la cadena que lo representa y resuelve el 
        /// prefijo para convertirlo en espacio de nombres
        /// </summary>
        /// <param name="strQname"></param>
        /// <param name="nodo"></param>
        /// <returns></returns>
        public static XmlQualifiedName ObtenerQNameConNamespace(string strQname,XmlNode nodo)
        {
            XmlQualifiedName qName = ParsearQName(strQname);
            if(qName != null)
            {
                if(!String.IsNullOrEmpty(nodo.GetNamespaceOfPrefix(qName.Namespace)))
                {
                    qName = new XmlQualifiedName(qName.Name, nodo.GetNamespaceOfPrefix(qName.Namespace));
                }
            }
            return qName;
        }
        /// <summary>
        /// Determina si el tipo de dato es algún tipo numérico
        /// </summary>
        /// <param name="thisXmlSchemaType">El tipo a evaluar</param>
        /// <returns>True si es númerico, false en otro caso</returns>
        public static bool EsNumerico(XmlSchemaType thisXmlSchemaType)
        {
            switch (thisXmlSchemaType.TypeCode)
            {
                case XmlTypeCode.Decimal:
                case XmlTypeCode.Double:
                case XmlTypeCode.Float:
                case XmlTypeCode.Int:
                case XmlTypeCode.Integer:
                case XmlTypeCode.Long:
                case XmlTypeCode.NegativeInteger:
                case XmlTypeCode.NonNegativeInteger:
                case XmlTypeCode.NonPositiveInteger:
                case XmlTypeCode.PositiveInteger:
                case XmlTypeCode.Short:
                case XmlTypeCode.UnsignedInt:
                case XmlTypeCode.UnsignedLong:
                case XmlTypeCode.UnsignedShort:
                    return true;
                default:
                    return false;
            }
        }
        /// <summary>
        /// Normaliza el valor numérico de un atriburo en caso de que su tipo sea numérico, en caso
        /// que sea cadena no se normaliza el valor
        /// </summary>
        /// <param name="atributo">Atributo para normalizar su valor</param>
        /// <returns>Valor de cadena normalizado del atriburo</returns>
        public static string NormalizarValorNumerico(XmlAttribute atributo)
        {
            string valorActual = atributo.Value;
            if (atributo.SchemaInfo != null)
            {
                if (atributo.SchemaInfo.SchemaType != null)
                {
                    switch (atributo.SchemaInfo.SchemaType.TypeCode)
                    {
                        case XmlTypeCode.Decimal:
                            valorActual = new decimal(Double.Parse(atributo.Value, NumberStyles.Any, CultureInfo.InvariantCulture)).ToString("#.0##########");
                            break;
                        case XmlTypeCode.Double:
                            valorActual = ParseXMLDouble(valorActual, "#0.0#");
                            break;
                        case XmlTypeCode.Float:
                            valorActual = float.Parse(atributo.Value, CultureInfo.InvariantCulture).ToString("#0.0#");
                            break;
                        case XmlTypeCode.Integer:
                            valorActual = Int32.Parse(atributo.Value).ToString();
                            break;
                        case XmlTypeCode.Boolean:
                            if (atributo.Value.Equals("1"))
                            {
                                valorActual = "true";
                            }
                            if (atributo.Value.Equals("0"))
                            {
                                valorActual = "false";
                            }
                            break;
                    }
                }
            }
            return valorActual;
        }
        /// <summary>
        /// Trata de parsear los valores de un campo del tipo doble
        /// además del número se puede encontrar INF, -INF, NaN
        /// </summary>
        /// <param name="valorActual">Valor actual de atriburo o elemento</param>
        /// <param name="formato">Formato para el parseo</param>
        /// <returns>Representación normalizada del número</returns>
        private static string ParseXMLDouble(string valorActual, string formato)
        {
            string valorFinal = valorActual;
            if (ConstantesGenerales.VALOR_ATRIBURO_INF.Equals(valorActual) ||
                                ConstantesGenerales.VALOR_ATRIBURO_INF_POS.Equals(valorActual))
            {
                valorFinal = Double.PositiveInfinity.ToString("#0.0#");
            }
            else if (ConstantesGenerales.VALOR_ATRIBURO_INF_NEG.Equals(valorActual))
            {
                valorFinal = Double.NegativeInfinity.ToString("#0.0#");
            }
            else if (ConstantesGenerales.VALOR_ATRIBUTO_NaN.Equals(valorFinal))
            {
                //se retorna un valor diferente cada vez porque NaN no es igual a ninguna comparación
                valorFinal = Guid.NewGuid().ToString();
            }else
            {
                valorFinal = Double.Parse(valorActual, CultureInfo.InvariantCulture).ToString("#0.0#");
            }

            return valorFinal;
        }
        /// <summary>
        /// Normaliza el valor numérico de un nodo de texto en caso de que su tipo sea numérico, en caso
        /// que sea cadena no se normaliza el valor
        /// </summary>
        /// <param name="atributo">Nodo para normalizar su valor</param>
        /// <returns>Valor de cadena normalizado del atriburo</returns>
        public static string NormalizarValorNumerico(XmlNode textNode)
        {
            if (textNode.Value == null) return null;

            string valorActual = textNode.Value;
            XmlSchemaType typeCode = null;

            if (textNode.SchemaInfo != null)
            {
                if (textNode.SchemaInfo.SchemaType != null)
                {
                    typeCode = textNode.SchemaInfo.SchemaType;
                }
            }
            //Si es tipo es nulo, buscar en el padre
            if (textNode.ParentNode.SchemaInfo != null)
            {
                if (textNode.ParentNode.SchemaInfo.SchemaType != null)
                {
                    typeCode = textNode.ParentNode.SchemaInfo.SchemaType;
                }
            }

           
            if (typeCode != null)
            {
                switch (typeCode.TypeCode)
                {
                    case XmlTypeCode.Decimal:
                        valorActual = new decimal(Double.Parse(valorActual, NumberStyles.Any, CultureInfo.InvariantCulture)).ToString("#.0##########");
                        break;
                    case XmlTypeCode.Double:
                        valorActual = ParseXMLDouble(valorActual, "#0.0#");
                        break;
                    case XmlTypeCode.Float:
                        valorActual = float.Parse(valorActual, CultureInfo.InvariantCulture).ToString("#0.0#");
                        break;
                    case XmlTypeCode.Integer:
                        valorActual = Int32.Parse(valorActual).ToString();
                        break;
                    case XmlTypeCode.Boolean:
                        if (valorActual.Equals("1"))
                        {
                            valorActual = "true";
                        }
                        if (valorActual.Equals("0"))
                        {
                            valorActual = "false";
                        }
                        break;
                }
            }
            
            return valorActual;
        }
        /// <summary>
        /// Verifica si 2 nodos tienen los mismos atributos y los mismos elementos hijos
        /// </summary>
        /// <param name="nodo">Nodo origen</param>
        /// <param name="comparar">Nodo a comparar</param>
        /// <returns>true si los nodos son equivalentes false en otro caso</returns>
        public static bool EsNodoEquivalente(XmlNode nodo, XmlNode comparar)
        {
            
            //mismo elemento
            if (nodo.NamespaceURI.Equals(comparar.NamespaceURI) && nodo.LocalName.Equals(comparar.LocalName)) {
                //comparr atributos
                if (nodo.Attributes != null)
                {
                    foreach (XmlAttribute atrrOrigen in nodo.Attributes)
                    {
                        XmlAttribute attrComparar = (XmlAttribute)comparar.Attributes.GetNamedItem(atrrOrigen.LocalName, atrrOrigen.NamespaceURI);
                        if (attrComparar != null)
                        {
                            if (!NormalizarValorNumerico(atrrOrigen).Equals(NormalizarValorNumerico(attrComparar)))
                            {
                                return false;
                            }
                        }
                        else
                        {
                            return false;
                        }
                    }
                }
                
                //Todos los atributos son iguales, verificar si todos los hijos son iguales
                IList<XmlNode> hijosOrigen = ObtenerHijosSignificativos(nodo);
                IList<XmlNode> hijosComparar = ObtenerHijosSignificativos(comparar);

                if (hijosOrigen.Count != hijosComparar.Count) return false;
                //comparar hijo con hijo
                for (int iNodo = 0; iNodo < hijosOrigen.Count; iNodo++)
                {
                    if (!EsNodoEquivalente(hijosOrigen[iNodo], hijosComparar[iNodo])) return false;
                }

                if (nodo.NodeType == XmlNodeType.Text && comparar.NodeType == XmlNodeType.Text)
                {
                    //Comparar contenido del nodo de texto
                    if (nodo.Value != null && !NormalizarValorNumerico(nodo).Equals(NormalizarValorNumerico(comparar)))
                    {
                        return false;
                    }
                    
                }

                return true;
            }
            return false;

        }
        /// <summary>
        /// Obtiene los hijos del nodo que no sea espacios en blanco ni comentarios
        /// </summary>
        /// <param name="nodo">Nodo a evaluar</param>
        /// <returns>Lista de hijos significativos </returns>
        private static IList<XmlNode> ObtenerHijosSignificativos(XmlNode nodo)
        {
            IList<XmlNode> hijos = new List<XmlNode>();
            foreach (XmlNode hijo in nodo.ChildNodes)
            {
                if (hijo.NodeType == XmlNodeType.Element || hijo.NodeType == XmlNodeType.Text)
                {
                    hijos.Add(hijo);
                }
            }
            return hijos;
        }
        /// <summary>
        /// Verifica si el nodo hijo es descendiente del nodo padre de forma recursiva
        /// </summary>
        /// <param name="nodoPadre">Nodo padre u origen</param>
        /// <param name="nodoHijo">Nodo hijo o destino</param>
        /// <returns></returns>
        public static Boolean EsNodoDescendiente(XmlNode nodoPadre, XmlNode nodoHijo)
        {
            //Buscar en los hijos del padre
            foreach (XmlNode nodoActual in nodoPadre.ChildNodes)
            {
                //Si es hijo del padre
                if (nodoActual.Equals(nodoHijo))
                {
                    return true;
                }
                //si no es hijo del padre, buscar en los hijos del hijo
                if (EsNodoDescendiente(nodoActual, nodoHijo))
                {
                    return true;
                }
            }
            return false;
        }
        /// <summary>
        /// Crea un elemento XML a partir de su representación en cadena
        /// </summary>
        /// <param name="xml">Cadena XML</param>
        /// <returns></returns>
        public static XmlElement CrearElementoXML(string xml)
        {
            var doc = new XmlDocument();
            doc.LoadXml(xml);
            return doc.DocumentElement;
        }
        /// <summary>
        /// Escribe el contenido de un documento XML a un flujo de salida, intenta utilizar la 
        /// codificación enviada como parámetro, en caso de no localizar la codificación, utiliza codificación UTF-8
        /// </summary>
        /// <param name="xmlOrigen">Documento de origen</param>
        /// <param name="stream">Flujo de salida</param>
        /// <param name="encodingString">Codificación deseada</param>
        public static void EscribirXMLAStream(XmlDocument xmlOrigen, System.IO.MemoryStream stream, string encodingString)
        {
            var encoding = Encoding.UTF8;
            foreach (var encActual in Encoding.GetEncodings())
            {
                if (encActual.Name.Equals(encodingString))
                {
                    encoding = encActual.GetEncoding();
                    break;
                }
            }
            var settings = new XmlWriterSettings();
            settings.CloseOutput = true;
            settings.Indent = true;
            settings.NamespaceHandling = NamespaceHandling.OmitDuplicates;
            settings.NewLineHandling = NewLineHandling.Entitize;
            settings.Encoding = encoding;
            var txtWriter = new StreamWriter(stream, encoding);
            var xmlWriterDebug = XmlWriter.Create(txtWriter, settings);
            xmlOrigen.Save(xmlWriterDebug);
        }
    }
}
