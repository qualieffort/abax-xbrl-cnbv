using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Viewer.Application.Dto.Hipercubos
{
    /// <summary>
    /// Definición de filtros para la busqueda de hechos por sus distintas caracteristicas.
    /// </summary>
    public class FiltroHechosDto
    {
        /// <summary>
        /// El identificador único dentro del documento del hecho
        /// </summary>
        public IList<string> IdHecho {get; set;}

        /// <summary>
        /// El identificador del concepto al cual pertnece este hecho
        /// </summary>
        public IList<string> IdConcepto {get; set;}
        /// <summary>
        /// Arreglo con los indentificadores de la unidad.
        /// </summary>
        public IList<string> IdUnidad {get; set;}
        /// <summary>
        /// El tipo de la unidad
        /// </summary>
        public Int32? TipoUnidad {get; set;}
        /// <summary>
        /// Arreglo de unidades.
        /// </summary>
        public IList<UnidadDto> Unidad {get; set;}
        /// <summary>
        /// El identificador único del contexto dentro del documento instancia
        /// </summary>
        public IList<string> IdContexto {get; set;}
        /// <summary>
        /// El periodo de reporte del contexto
        /// </summary>
        public IList<PlantillaPeriodoDto> Periodo {get; set;}
        /// <summary>
        /// Clave de la entidad.
        /// </summary>
        public IList<string> ClaveEntidad {get; set;}
       /// <summary>
       /// Evalua los datos de la dimensión y toma el contexto como valido si el contexto contiene todos los elementos de la lista, independiente mente
       /// si el contexto contiene más dimensiones.
       /// Si el contexto no cumple con uno de los filtros de dimensiones es invalido.
       /// </summary>
        public IList<IList<DimensionInfoDto>> ConjuntosParcialesDimensiones {get; set;} 
        ///</summary>
        /// Evalua que el contexto tenga exactamente la misma cantidad de dimensiones y miembros, si el contexto tiene más o menos se descarta.
        ///<summary> 
        public IList<IList<DimensionInfoDto>> ConjuntosExactosDimensiones {get; set;}
        ///</summary>
        /// Contextos por los cuales filtrar.
        ///<summary>
        public IList<ContextoDto> Contexto {get; set;}
    }
}
