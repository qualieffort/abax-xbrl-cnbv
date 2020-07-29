using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Xml;
using AbaxXBRL.Util;

namespace AbaxXBRL.Taxonomia.Dimensiones
{
    /// <summary>
    /// Representa el dato de un miembro de dimensión en un contexto de un documento de instancia
    /// <author>Emigdio Hernández</author>
    /// </summary>
    public class MiembroDimension
    {
        /// <summary>
        /// Constructor default
        /// </summary>
        public MiembroDimension()
        {
            
        }
        /// <summary>
        /// Constructor para dimension default
        /// </summary>
        /// <param name="dimDefault"></param>
        public MiembroDimension(ConceptDimensionItem dimension,ConceptItem dimDefault)
        {
            Explicita = true;
            Dimension = dimension;
            QNameMiembro = dimDefault.Elemento.QualifiedName;
            ItemMiembro = dimDefault;
        }
        /// <summary>
        /// Indica si la dimensión es explicita o implicita
        /// </summary>
        public bool Explicita { get; set; }
        /// <summary>
        /// Dimensión a la cuál pertenece este miembro
        /// </summary>
        public ConceptDimensionItem Dimension { get; set; }
        /// <summary>
        /// Nombre calificado del miembro del dominio 
        /// </summary>
        public XmlQualifiedName QNameMiembro { get; set; }
        /// <summary>
        /// Referencia al elemento de la taxonomía usado como miembro de dominio en el caso 
        /// de dimensiones explícitas
        /// </summary>
        public ConceptItem ItemMiembro { get; set; }
        /// <summary>
        /// Para el caso de dimensiones tipificadas, el elemento XML que corresponde al miembro de dominio implicito
        /// </summary>
        public XmlElement ElementoMiembroTipificado { get; set; }
        /// <summary>
        /// Nombre calificado de la dimensión declarada
        /// </summary>
        public XmlQualifiedName QNameDimension { get; set; }

        /// <summary>
        /// Compara un valor de dimension con el otro para verificar si son equivalentes
        /// </summary>
        /// <param name="comparar">Valor a comprar</param>
        /// <returns>True si es equivalente, false en otro caso</returns>
        public bool DimensionValueEquals(MiembroDimension comparar)
        {
            if (comparar == null)
                return false;
            //Misma dimensión
            if (Dimension != comparar.Dimension)
                return false;
           
            if(Explicita)
            {
                //Mismo miembro de dominio
                if (ItemMiembro != comparar.ItemMiembro)
                    return false;
            }else
            {
                //Miembro tipificado equivalente
                if(!XmlUtil.EsNodoEquivalente(ElementoMiembroTipificado,comparar.ElementoMiembroTipificado))
                    return false;
            }
            return true;
        }
        /// <summary>
        /// Crea una representación en cadena de un identificador único 
        /// de este valor de dimensión
        /// </summary>
        /// <returns>Identificación en cadena</returns>
        public string ToIdString()
        {
            var res = QNameDimension.ToString() + "|";
            if(Explicita)
            {
                res += QNameMiembro.ToString();
            }else
            {
                res += ElementoMiembroTipificado.OuterXml;
            }
            return res;
        }
        /// <summary>
        /// Verifica la igualdad del miembro de dimensión
        /// </summary>
        /// <param name="comparar"></param>
        /// <returns></returns>
        public override Boolean Equals(Object comparar)
        {
            if (comparar == null) return false;

            if(!(comparar is MiembroDimension))return false;

            var miembroComparar = comparar as MiembroDimension;

            if (Explicita != miembroComparar.Explicita) return false;

            if ((QNameDimension != null && miembroComparar.QNameDimension == null) ||
                (QNameDimension == null && miembroComparar.QNameDimension != null)) return false;

            if (QNameDimension != null && miembroComparar.QNameDimension != null && !QNameDimension.Equals(miembroComparar.QNameDimension))
                return false;
            
            if(Explicita)
            {
                if ((QNameMiembro != null && miembroComparar.QNameMiembro == null) ||
                (QNameMiembro == null && miembroComparar.QNameMiembro != null)) return false;

                if (QNameMiembro != null && miembroComparar.QNameMiembro != null && !QNameMiembro.Equals(miembroComparar.QNameMiembro))
                    return false;
            }else
            {
                if ((ElementoMiembroTipificado != null && miembroComparar.ElementoMiembroTipificado == null) ||
                (ElementoMiembroTipificado == null && miembroComparar.ElementoMiembroTipificado != null)) return false;

                if (ElementoMiembroTipificado != null && miembroComparar.ElementoMiembroTipificado != null && 
                    !XmlUtil.EsNodoEquivalente(ElementoMiembroTipificado, miembroComparar.ElementoMiembroTipificado))
                    return false;
            }
            
            return true;
        }
    
    }
}

