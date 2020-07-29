using AbaxXBRL.Constantes;
using AbaxXBRL.Util;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml;
using System.Xml.Linq;

namespace AbaxXBRL.Taxonomia
{
    /// <summary>
    /// Implementación del elemento <code>&lt;entity&gt;</code> contenido dentro de un contexto en un documento instancia XBRL.
    /// 
    /// El elemento <code>&lt;entity&gt;</code> documenta la Entidad (negocio, oficina de gobierno, individuo, etc.) que describe los hechos. El elemento <code>&lt;entity&gt;</code> es un contenido requerido por el elemento <code>&lt;context&gt;</code>. El elemento <code>&lt;entity&gt;</code> DEBE contenter una elemento <code>&lt;identifier&gt;</code> y PUEDE contener un elemento <code>&lt;segment&gt;</code>
    /// </summary>
    public class Entity
    {
        /// <summary>
        /// El URI del espacio de nombres del esquema de identificación, provee un mecanismo para referencias autoridades de nombrado.
        /// </summary>
        public string EsquemaId { get; set; }

        /// <summary>
        /// El token que identifica a la entidad dentro del espacio de nombres del esquema de identificación.
        /// </summary>
        public string Id { get; set; }

        /// <summary>
        /// El elemento segmento es un contenedor opcional para etiquetas que el preparador del documento instancia DEBERÍA utilizar para identificar mejor el segmento de negocio  en los casos que el identificador de la Entidad no es suficiente.
        /// </summary>
        public Segment Segmento { get; set; }

        /// <summary>
        /// Espacio de nombres para la creación del elemento en XML
        /// </summary>
        public const String XmlNamespace = EspacioNombresConstantes.InstanceNamespace;
        /// <summary>
        /// Nombre local para la creación del elemento XML
        /// </summary>
        public const String XmlLocalName = EtiquetasXBRLConstantes.Entity;
        /// <summary>
        /// Verifica si este objeto es igual o equivalente a otra entidad
        /// </summary>
        /// <param name="obj"></param>
        /// <returns></returns>
        public override bool Equals(object obj)
        {
            if (obj == null || !(obj is Entity)) return false;
            Entity comparar = (Entity) obj;
            if (EsquemaId.Equals(comparar.EsquemaId) && Id.Equals(comparar.Id))
            {
                //Comparar el segmento si existe en ambos
                if ((Segmento != null && comparar.Segmento == null) || (Segmento == null && comparar.Segmento != null))
                {
                    return false;
                }
                if (Segmento != null)
                {
                    if(!Segmento.EsEquivalente(comparar.Segmento)){
                        return false;
                    }

                }
                return true;
            }
            return false;
        }

        /// <summary>
        /// Convierte esta entidad en la representación de cadena de
        /// un identificador de esta entidad
        /// </summary>
        /// <returns>Representación en cadena de la entidad</returns>
        public string ToIdString()
        {
            return EsquemaId + "|" + Id;
        }
    }
}
