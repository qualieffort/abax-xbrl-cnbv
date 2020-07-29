using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using AbaxXBRL.Util;

namespace AbaxXBRLCore.Viewer.Application.Dto
{
    /// <summary>
    /// Implementación de un Data Transfer Object el cual presenta la información de una dimensión dentro de un contexto
    /// </summary>
    public class DimensionInfoDto
    {
        /// <summary>
        /// Indica si la dimensión es explicita o implicita
        /// </summary>
        public bool Explicita { get; set; }
        /// <summary>
        /// Identificador de la dimensión a la que pertence este miembro
        /// </summary>
        public string IdDimension { get; set; }
        /// <summary>
        /// Miembro de la dimensión en caso que sea explícita
        /// </summary>
        public string IdItemMiembro { get; set; }
        /// <summary>
        /// Nombre completo del elemento de dimension
        /// </summary>
        public string QNameDimension { get; set; }
        /// <summary>
        /// Nombre completo del elemento Item de una dimensión explícita
        /// </summary>
        public string QNameItemMiembro { get; set; }

        /// <summary>
        /// Miembro de la dimensión en caso que sea tipificada
        /// </summary>
        public string ElementoMiembroTipificado { get; set; }



        /// <summary>
        /// Etiquetas del concepto
        /// </summary>
        public Dictionary<string,EtiquetaDto> EtiquetasConceptoDimension { get; set; }

        /// <summary>
        /// Etiquetas del concepto
        /// </summary>
        public Dictionary<string,EtiquetaDto> EtiquetasConceptoMiembroDimension { get; set; }

        /// <summary>
        /// Verifica si este valor dimensional es equivalente al enviado como parámetro
        /// </summary>
        /// <param name="dimensionComparar"></param>
        /// <returns></returns>
        public bool EsEquivalente(DimensionInfoDto dimensionComparar)
        {
            if (IdDimension == null || dimensionComparar == null)
            {
                return false;
            }
            if (!IdDimension.Equals(dimensionComparar.IdDimension))
            {
                return false;
            }
            if (Explicita)
            {
                return IdItemMiembro!=null && IdItemMiembro.Equals(dimensionComparar.IdItemMiembro);
            }
            
            if (ElementoMiembroTipificado == null && dimensionComparar.ElementoMiembroTipificado != null ||
                ElementoMiembroTipificado != null && dimensionComparar.ElementoMiembroTipificado == null)
            {
                return false;
            }
            if (ElementoMiembroTipificado == null && dimensionComparar.ElementoMiembroTipificado == null)
            {
                return true;
            }
            //Comparar XML
            return ElementoMiembroTipificado.Trim().Equals(dimensionComparar.ElementoMiembroTipificado.Trim());
            /*var xmlMiembro = XmlUtil.CrearElementoXML(ElementoMiembroTipificado);
            var xmlMiembroComparar = XmlUtil.CrearElementoXML(dimensionComparar.ElementoMiembroTipificado);
            return XmlUtil.EsNodoEquivalente(xmlMiembro, xmlMiembroComparar);*/
        }
    }
}
