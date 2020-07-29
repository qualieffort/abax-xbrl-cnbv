using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Viewer.Application.Dto.Hipercubos
{
    /// <summary>
    /// Configuración de inicialización de la directiva de administración de hipercubos.
    /// </summary>
    public class XbrlConfiguracionTablaHipercuboDirective
    {
        ///<summary>
        /// Diccionario con la definición de las dimensiones que aplicarán para este hipercubo
        /// la llave es un alias de la dimensión, el valor contiene el QNameDimension.
        ///</summary>
        public IDictionary<string, PlantillaDimensionInfoDto>TemplatesDimensiones {get; set;}
        ///<summary>
        /// Diccionario con las definiciones de los elementos de las dimensiones miembro.
        //</summary>
        public IDictionary<string,IDictionary<string,DimensionInfoDto>>MiembrosDimensiones {get; set;}
        ///<summary>
        /// Conjunto de grupos de dimensiones miembro utilizados commo auxiliar para clasificar configuración por configuraciones de dimensiones miembro.
        /// El dicionario contiene el identificador del grupo, seguido de un diccionario por identificador de dimensión con el valor del alias del miembro.
        //</summary>
        public IDictionary<string,IDictionary<string,string>> GruposDimensionesMiembro {get; set;}
        ///<summary>
        /// Arreglo con los tempaltes de los contextos que serán generados cuando se invoque la generación de contextos.
        //</summary>
        public IDictionary<string,PlantillaContextoDto> PlantillasContextos{get; set;}
        ///<summary>
        /// Filtro utilizado para inicializar los contextos y dimensiones en la directiva.
        //</summary>
        public FiltroHechosDto FiltroCargaInicial;
        ///<summary>
        /// Diccionario con los mensajes de error a mostrar.
        //</summary>
        public IDictionary<string, string> MensajesError { get; set; }
        /// <summary>
        /// Diccionario con la definicion de unidades utilizadas por le hipercubo.
        /// </summary>
        public IDictionary<string, UnidadDto> Unidades { get; set; }
        
        /// <summary>
        /// Obtiene una cadena que identifica al conjunto de miembros de dimensión.
        /// </summary>
        /// <param name="dimensionesGrupo">Diccionario con el conjunto de miembros de dimensión a evaluar.</param>
        /// <returns>Identificador del conjunto.</returns>
        public string ObtenClaveGrupoDimensiones(IDictionary<string,string> dimensionesGrupo)
        {
            var clave = new StringBuilder();
            foreach (var aliasDimension in TemplatesDimensiones.Keys) 
            {
                if (dimensionesGrupo.ContainsKey(aliasDimension)) 
                {
                    clave.Append("_");
                    clave.Append(dimensionesGrupo[aliasDimension]);
                }
            }
            return clave.ToString().Substring(1);
        }
    }
}
