using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Xml;
using AbaxXBRL.Constantes;
using AbaxXBRL.Taxonomia.Dimensiones;
using AbaxXBRL.Util;

namespace AbaxXBRL.Taxonomia
{
    /// <summary>
    /// Clase base con los atributos en común de los elementos Escenario y Segmento  (scenario y segment) en el contexto
    /// <author>Emigdio Hernández</author>
    /// </summary>
    public class InformacionAdicionalContexto
    {
        /// <summary>
        /// Constructor completo
        /// </summary>
        /// <param name="nodo"></param>
        /// <param name="documento"></param>
        public InformacionAdicionalContexto(XmlNode nodo, IDocumentoInstanciaXBRL documento)
        {
            ElementoOrigen = nodo;
            MiembrosDimension = new List<MiembroDimension>();
            ElementosAdicionales = new List<XmlElement>();
            ListarMiembrosDimension(documento);
        }
        //Constructor predeterminado
        public InformacionAdicionalContexto()
        {
        }

        /// <summary>
        /// Elemento XML que da origen a este objeto
        /// </summary>
        public XmlNode ElementoOrigen { get; set; }
        /// <summary>
        /// Lista de los diferentes miembros de dimensión encontrados en el elemento de información
        /// adicional del contexto
        /// </summary>
        public IList<MiembroDimension> MiembrosDimension { get; set; }
        /// <summary>
        /// Elementos XML Adicionales que no corresponden a una declaración de dimensión explicita o implicita
        /// </summary>
        public IList<XmlElement> ElementosAdicionales { get; set; } 
        /// <summary>
        /// Procesa los elementos dimensionales dentro de los nodos hijos del elemento origen
        /// </summary>
        /// <param name="documento">Documento de instancia que se está procesando actualmente</param>
        private void ListarMiembrosDimension(IDocumentoInstanciaXBRL documento)
        {
            foreach (XmlElement elementoHijo in ElementoOrigen.ChildNodes)
            {
                if(elementoHijo.NamespaceURI.Equals(EspacioNombresConstantes.DimensionInstanceNamespace) &&
                   (elementoHijo.LocalName.Equals(EtiquetasXBRLConstantes.ExplicitMemberElement) || elementoHijo.LocalName.Equals(EtiquetasXBRLConstantes.TypedMemberElement)))
                {
                    var miembro = new MiembroDimension();
                    var qname = XmlUtil.ObtenerQNameConNamespace(elementoHijo.Attributes[EtiquetasXBRLConstantes.DimensionAttribute].Value,elementoHijo);
                    miembro.QNameDimension = qname;
                    //Buscar el concepto que corresponde a la dimensión
                    if(documento.Taxonomia.ElementosTaxonomiaPorName.ContainsKey(qname) && documento.Taxonomia.ElementosTaxonomiaPorName[qname] is ConceptDimensionItem)
                    {
                        miembro.Dimension = documento.Taxonomia.ElementosTaxonomiaPorName[qname] as ConceptDimensionItem;
                    }
                    if(elementoHijo.LocalName.Equals(EtiquetasXBRLConstantes.ExplicitMemberElement))
                    {
                        miembro.Explicita = true;
                        qname = XmlUtil.ObtenerQNameConNamespace(elementoHijo.InnerText,elementoHijo);
                        miembro.QNameMiembro = qname;
                        if(qname != null)
                        {
                            //Buscar el concepto que corresponde al miembro
                            if(documento.Taxonomia.ElementosTaxonomiaPorName.ContainsKey(qname) && documento.Taxonomia.ElementosTaxonomiaPorName[qname] is ConceptItem)
                            {
                                miembro.ItemMiembro = documento.Taxonomia.ElementosTaxonomiaPorName[qname] as ConceptItem;
                            }
                        }
                    }
                    else if (elementoHijo.LocalName.Equals(EtiquetasXBRLConstantes.TypedMemberElement))
                    {
                        miembro.Explicita = false;
                        //Colocar el contenido de los nodos del miembro tipificado
                        if(elementoHijo.ChildNodes.Count>0)
                        {
                            miembro.ElementoMiembroTipificado = elementoHijo.ChildNodes[0] as XmlElement;
                        }
                    }
                    MiembrosDimension.Add(miembro);
                }else
                {
                    //El elemento es otra cosa que no es una declaración de dimensión
                    ElementosAdicionales.Add(elementoHijo);
                }
            }
        }
        /// <summary>
        /// Evalúa si esta información adicional es equivalente, 
        /// Si cuenta con el nodo XML origen entonces lo evalúa, si no, entonces evalúa la equivalencia de las dimensiones y
        /// la información extra
        /// </summary>
        /// <param name="comparar">Elemento a comparar</param>
        /// <returns>True si es equivalente, false en otro caso</returns>
        public Boolean EsEquivalente(InformacionAdicionalContexto comparar)
        {
            
            if (comparar == null) return false;

            if(ElementoOrigen != null && comparar.ElementoOrigen !=null)
            {
                return XmlUtil.EsNodoEquivalente(ElementoOrigen, comparar.ElementoOrigen);
            }
            //No hay elemento origen, comparar dimensiones
            if(MiembrosDimension != null)
            {
                foreach (var thisMiembroDimension in MiembrosDimension)
                {
                    var encontrada = false;
                    if(comparar.MiembrosDimension != null)
                    {
                        foreach (var compararMiembroDimension in comparar.MiembrosDimension)
                        {
                            if(thisMiembroDimension.Equals(compararMiembroDimension))
                            {
                                encontrada = true;
                                break;
                            }
                        }
                        if (!encontrada)
                            return false;
                    }
                }
            }
            return true;
        }
    }
}
