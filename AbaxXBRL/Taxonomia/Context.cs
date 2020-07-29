using AbaxXBRL.Constantes;
using AbaxXBRL.Taxonomia.Dimensiones;
using AbaxXBRL.Util;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml;

namespace AbaxXBRL.Taxonomia
{
    /// <summary>
    /// Implementación de un elemento <code>&lt;context&gt;</code> dentro de un documento instancia XBRL.
    /// 
    /// El elemento <code>&lt;context&gt;</code> contiene información acerca de la Entidad que está siendo descrita, el Periodo y el Escenario de reporte, todo esto es necesario para entender un hecho de negocio capturado como un elemento XBRL.
    /// <author>José Antonio Huizar Moreno</author>
    /// <version>1.0</version>
    /// </summary>
    public class Context
    {
        /// <summary>
        /// El identificador único del contexto dentro del documento instancia XBRL.
        /// </summary>
        public string Id { get; set; }

        /// <summary>
        /// El objeto que contiene la definición del periodo asociado al contexto
        /// </summary>
        public Period Periodo { get; set; }

        /// <summary>
        /// La entidad que reporta los hechos asociada al contexto
        /// </summary>
        public Entity Entidad { get; set; }

        /// <summary>
        ///  El elemento opcional escenario permite que se incluyan etiquetas válidas adicionales para identificar las condiciones en que se reporta la información.
        /// </summary>
        public Scenario Escenario { get; set; }

        /// <summary>
        /// Espacio de nombres para la creación del elemento en XML
        /// </summary>
        public const String XmlNamespace = EspacioNombresConstantes.InstanceNamespace;
        /// <summary>
        /// Nombre local para la creación del elemento XML
        /// </summary>
        public const String XmlLocalName = EtiquetasXBRLConstantes.Context;

        /// <summary>
        /// Verifica si un contexto es igual a otro aplicando las reglas de igualdad de estructura
        /// 
        /// </summary>
        /// <param name="comparar">Contexto a comprar</param>
        /// <returns></returns>
        public Boolean StructureEquals(Context comparar)
        {
            if (comparar == null) return false;
            if (this == comparar) return true;
                      
            if ((Entidad != null && comparar.Entidad == null) || (Entidad == null && comparar.Entidad != null)) return false;

            if ((Escenario != null && comparar.Escenario == null) || (Escenario == null && comparar.Escenario != null)) return false;

            //entidad
            if (!Entidad.Equals(comparar.Entidad))
            {
                return false;
            }
            //Periodo
            if (!Periodo.Equals(comparar.Periodo))
            {
                return false;
            }
            //Escenario
            if (Escenario != null && Escenario.ElementoOrigen != null && comparar.Escenario.ElementoOrigen  != null && 
                !XmlUtil.EsNodoEquivalente(Escenario.ElementoOrigen, comparar.Escenario.ElementoOrigen))
            {
                return false;
            }
            return true;
        }
        /// <summary>
        /// Obtiene la lista combinada de los valores de dimensiones del contexto ya sea en el escenario o en el segmento
        /// </summary>
        /// <returns></returns>
        public IList<MiembroDimension> ObtenerMiembrosDimension()
        {
            var miembros = new List<MiembroDimension>();
            if (Entidad.Segmento != null && Entidad.Segmento.MiembrosDimension != null)
            {
                miembros.AddRange(Entidad.Segmento.MiembrosDimension);
            }
            if (Escenario != null && Escenario.MiembrosDimension != null)
            {
                miembros.AddRange(Escenario.MiembrosDimension);
            }
            return miembros;
        } 
        /// <summary>
        /// Varifica si los contextos contienen las mismas dimensiones y los mismos valores para las dimensiones
        /// </summary>
        /// <param name="comparar">Contexto a comparar</param>
        /// <returns>True si son iguales sus valores de dimensiones, false en otro caso</returns>
        public Boolean DimensionValueEquals(Context comparar)
        {
            //Unir los valores de las dimensiones del contexto
            var miembrosOrigen = ObtenerMiembrosDimension();
            var miembrosComparar = comparar.ObtenerMiembrosDimension();
            
            if(miembrosOrigen.Count != miembrosComparar.Count)
            {
                return false;
            }

            foreach (var valorOrigen in miembrosOrigen)
            {
                var valorEncontrado = false;
                foreach (var valorComparar in miembrosComparar)
                {
                    if (valorOrigen.DimensionValueEquals(valorComparar))
                    {
                        valorEncontrado = true;
                    }
                }
                if(!valorEncontrado)
                {
                    return false;
                }
            }
            return true;
        }
       
     }
}
