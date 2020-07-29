using AbaxXBRL.Constantes;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Xml;

namespace AbaxXBRL.Taxonomia
{
    /// <summary>
    /// Representa un elemento de configuración de medida para una unidad de medida dentro de un documento de instancia
    /// Almacena el nombre calificado del valor de la medida y la información cultural en caso de que sea una medida monetaria
    /// </summary>
    public class Measure
    {
        //Constructor por Default
        public Measure()
        {
            
        }

        public Measure(String nameSpace,String localName)
        {
            Namespace = nameSpace;
            LocalName = localName;
        }
        /// <summary>
        /// Nodo XML con el dato de origen
        /// </summary>
        public XmlNode Elemento { get; set; }
        /// <summary>
        /// Espacio de nombres de la medida
        /// </summary>
        public string Namespace { get; set; }
        /// <summary>
        /// Nombre local de la medida
        /// </summary>
        public string LocalName { get; set; }
        /// <summary>
        /// Información de regionalización de la moneda de la medida en caso que aplique
        /// </summary>
        public RegionInfo RegionInformation { get; set; }
        /// <summary>
        /// Información de regionalización de la moneda de la medida en caso que aplique
        /// </summary>
        public CultureInfo CultureInformation { get; set; }

        /// <summary>
        /// Espacio de nombres para la creación del elemento en XML
        /// </summary>
        public const String XmlNamespace = EspacioNombresConstantes.InstanceNamespace;
        /// <summary>
        /// Nombre local para la creación del elemento XML
        /// </summary>
        public const String XmlLocalName = EtiquetasXBRLConstantes.Measure;
        /// <summary>
        /// Sobre escritura del método equals
        /// </summary>
        /// <param name="obj">Objeto a comparar</param>
        /// <returns></returns>
        public override bool Equals(object obj)
        {
            if (!(obj is Measure) || obj == null)
            {
                return false;
            }
            if (this == obj) return true;
            Measure measureAComparar = (Measure)obj;

            if (Namespace == null && measureAComparar.Namespace == null && LocalName == null && measureAComparar.LocalName == null)
            {
                return true;
            }

            if ((Namespace == null && measureAComparar.Namespace != null) || (Namespace != null && measureAComparar.Namespace == null))
            {
                return false;
            }

            if ((LocalName == null && measureAComparar.LocalName != null) || (LocalName != null && measureAComparar.LocalName == null))
            {
                return false;
            }

            return Namespace.Equals(measureAComparar.Namespace) && LocalName.Equals(measureAComparar.LocalName);

        }
    }
}
