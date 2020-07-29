using AbaxXBRL.Constantes;
using AbaxXBRL.Util;
using System;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml;
using System.Xml.Schema;

namespace AbaxXBRL.Taxonomia.Linkbases
{
    /// <summary>
    /// Un <code>Arco</code> documenta una relación entre los recursos identificador por un <code>Localizador</code> 
    /// en enlaces extendidos o que se encuentran como recursos en enlaces extendidos.
    /// <author>José Antonio Huizar Moreno</author>
    /// <version>1.0</version>
    /// </summary>
    public class Arco
    {

        /// <summary>
        /// El tipo que siempre debe ser utilizado para un <code>Arco</code>
        /// </summary>
        public const string ValorAtributoTipoArco = "arc";
        /// <summary>
        /// Identifica el tipo de arco concreto de una instancia de arco
        /// </summary>
        public TipoArco TipoArco { get; set; }
        /// <summary>
        /// El elemento desde el que inicia el <code>Arco</code>.
        /// </summary>
        public string Desde { get; set; }

        /// <summary>
        /// El elemento hacia el que se dirige el <code>Arco</code>.
        /// </summary>
        public string Hacia { get; set; }

        /// <summary>
        /// El nombre del rol de <code>Arco</code> utilizado.
        /// </summary>
        public string ArcoRol { get; set; }

        /// <summary>
        /// El título del <code>Arco</code>.
        /// </summary>
        public string Titulo { get; set; }

        /// <summary>
        /// El orden de este <code>Arco</code> con respecto a los demás.
        /// </summary>
        public Decimal Orden { get; set; }

        /// <summary>
        /// El uso que se le da al <code>Arco</code>.
        /// </summary>
        public string Uso { get; set; }

        /// <summary>
        /// La prioridad del <code>Arco</code> con respecto a los demás.
        /// </summary>
        public int Prioridad { get; set; }

        /// <summary>
        /// El tipo del <code>Arco</code> y siempre debe contener el valor <code>arc</code> 
        /// </summary>
        public string Tipo { get; set; }

        /// <summary>
        /// Atributo opcional de <code>Arco</code> sin semántica XBRL
        /// </summary>
        public string Mostrar { get; set; }

        /// <summary>
        /// Atributo opcional de <code>Arco</code> sin semántica XBRL
        /// </summary>
        public string Accionar { get; set; }

        /// <summary>
        /// Referencia al elemento Desde de este arco de presentación
        /// </summary>
        public IList<ElementoLocalizable> ElementoDesde { get; set; }
        /// <summary>
        /// Referencia al elemento hasta de este arco de presentación
        /// </summary>
        public IList<ElementoLocalizable> ElementoHacia { get; set; }
        /// <summary>
        /// Elemento XML de tipo nodo que origina el procesamiento de este arco
        /// </summary>
        public XmlNode ElementoXML { get; set; }
        /// <summary>
        /// Evalúa si el arco actual está pohibido por el arco enviado como parámetro por los criterios:
        /// El arco a comparar tiene como atributo de uso el valor de "prohibited"
        /// Es el arco actual es una relación equivalente al arco a comparar
        /// La prioridad del arco a comparar es mayor o igual a la prioridad de este arco
        /// </summary>
        /// <param name="arcoAComparar"></param>
        /// <returns></returns>
        public bool EstaProhibidoPor(Arco arcoAComparar)
        {
            if (TiposUso.Prohibido.Valor.Equals(arcoAComparar.Uso))            
            {
                if (arcoAComparar.Prioridad >= Prioridad && EsRelacionEquivalente(arcoAComparar))
                {
                    return true;
                }
            }
            return false;
        }
        /// <summary>
        /// Determina  si de acuerdo a los criterios de la especificación de XBRL el arco actual es una relación equivalente al arco a comparar
        /// Un arco es equivalente a otro si relaciona los mismos elementos y si
        /// tiene los mismos atributos no excentos de comparación y
        /// para cada atriburo no excento de comparación hay un atributo equivalente de la misma estructura (s-equal) en el arco a comparar
        /// Atributos: uso y prioridad son excentos y los atributos de los siguientes espacios de nombres:
        /// http://www.w3.org/2000/xmlns/ y http://www.w3.org/1999/xlink son excentos, cualquier otro atributro es no-excento
        /// y los fragmentos de xml de los lados "from" y "to" son identicos entre los 2 arcos
        /// </summary>
        /// <param name="arcoAComparar"></param>
        /// <returns></returns>
        public bool EsRelacionEquivalente(Arco arcoAComparar)
        {
            if (ArcoRol != null && !ArcoRol.Equals(arcoAComparar.ArcoRol)) return false;
            return  TieneMismosDestinos(arcoAComparar) && TieneMismosAtributosNoExcentos(arcoAComparar);
        }

        
        /// <summary>
        /// Evalúa si este arco tiene los mismos elementos de origen y destino del arco a comparar
        /// </summary>
        /// <param name="arcoAComparar"></param>
        /// <returns></returns>
        private bool TieneMismosDestinos(Arco arcoAComparar)
        {
            if (this == arcoAComparar)
            {
                return true;
            }

            //Comparar todos los elementos desde
            int elementosIguales = 0;
            foreach(ElementoLocalizable elemento in ElementoDesde){
                //Encontrar el mismo elemento en el arco a comparar
                foreach (ElementoLocalizable elementoAComparar in arcoAComparar.ElementoDesde)
                {
                    if (elemento.Destino == elementoAComparar.Destino)
                    {
                        elementosIguales++;
                        break;
                    }
                }
            }
            if (elementosIguales != ElementoDesde.Count)
            {
                return false;
            }
            //Comparar todos los elementos hacia
            elementosIguales = 0;
            foreach (ElementoLocalizable elemento in ElementoHacia)
            {
                //Encontrar el mismo elemento en el arco a comparar
                foreach (ElementoLocalizable elementoAComparar in arcoAComparar.ElementoHacia)
                {
                    if (elemento.Destino == elementoAComparar.Destino)
                    {
                        elementosIguales++;
                        break;
                    }
                }
            }
            if (elementosIguales != ElementoDesde.Count)
            {
                return false;
            }
            return true;
        }

        /// <summary>
        /// Verifica que los atributos no excentos de un arco sean iguales a los atributos no excentos del otro arco:
        /// Atributos excentos:
        /// uso y prioridad y los atributos cuyo namespace sea:
        /// http://www.w3.org/2000/xmlns/ y http://www.w3.org/1999/xlink
        /// </summary>
        /// <param name="arcoAComparar"></param>
        /// <returns></returns>
        private bool TieneMismosAtributosNoExcentos(Arco arcoAComparar)
        {
            //Extraer atriburos no excenteos de ambos - se omite el atriburo de orden con el fin de compararlo manualmente
            IList<XmlAttribute> atributosNoExcentos = new List<XmlAttribute>();
            IList<XmlAttribute> atributosNoExcentosComparar = new List<XmlAttribute>();

            foreach (XmlAttribute attr in ElementoXML.Attributes)
            {
                if (!(EtiquetasXBRLConstantes.UseAttribute.Equals(attr.LocalName) || EtiquetasXBRLConstantes.PriorityAttribute.Equals(attr.LocalName) ||
                    EtiquetasXBRLConstantes.OrderAttribute.Equals(attr.LocalName) ||
                    EspacioNombresConstantes.XLinkNamespace.Equals(attr.NamespaceURI) ||
                    EspacioNombresConstantes.NamespaceAttriburosExcentos.Equals(attr.NamespaceURI)))
                {
                    atributosNoExcentos.Add(attr);
                }
            }
            foreach (XmlAttribute attr in arcoAComparar.ElementoXML.Attributes)
            {
                if (!(EtiquetasXBRLConstantes.UseAttribute.Equals(attr.LocalName) || EtiquetasXBRLConstantes.PriorityAttribute.Equals(attr.LocalName) ||
                    EtiquetasXBRLConstantes.OrderAttribute.Equals(attr.LocalName) ||
                    EspacioNombresConstantes.XLinkNamespace.Equals(attr.NamespaceURI) ||
                    EspacioNombresConstantes.NamespaceAttriburosExcentos.Equals(attr.NamespaceURI)))
                {
                    atributosNoExcentosComparar.Add(attr);
                }
            }

            if (atributosNoExcentos.Count != atributosNoExcentosComparar.Count)
            {
                return false;
            }
            //buscar si hacen match los atributos
            foreach (XmlAttribute attr in atributosNoExcentos)
            {
                string valorNormalizado = XmlUtil.NormalizarValorNumerico(attr);
                bool attrIgual = false;
                foreach (XmlAttribute attrComparar in atributosNoExcentosComparar)
                {
                    if (attr.NamespaceURI.Equals(attrComparar.NamespaceURI) && attr.LocalName.Equals(attrComparar.LocalName))
                    {
                        string valorNormalizadoAcomparar = XmlUtil.NormalizarValorNumerico(attrComparar);
                        if (!valorNormalizado.Equals(valorNormalizadoAcomparar))
                        {
                            return false;
                        }
                        else
                        {
                            attrIgual = true;
                            break;
                        }
                    }
                }
                if (!attrIgual)
                {
                    return false;
                }
            }
            //finalmente comparar el orden
           
            return Orden == arcoAComparar.Orden;
        }
        /// <summary>
        /// Evalúa si este arco es reemplazado por el arco a comparar enviado como parámetro
        /// El arco a comparar tiene como atributo de uso el valor de "optional"
        /// El arco actual es una relación equivalente al arco a comparar
        /// La prioridad del arco a comparar es mayor o igual a la prioridad de este arco
        /// </summary>
        /// <param name="arcoAComparar">Arco a verificar si reemplaza al actual</param>
        /// <returns></returns>
        public bool EsReemplazadoPor(Arco arcoAComparar)
        {
           return arcoAComparar.Prioridad >= Prioridad && EsRelacionEquivalente(arcoAComparar);
        }
        
    }

}
