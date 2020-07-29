using AbaxXBRLCore.Viewer.Application.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRLBlockStore.Common.Dto
{
    /// <summary>
    /// Hint de las dimensiones por concepto
    /// </summary>
    public class HintDimensional : ICloneable
    {
        /// <summary>
        /// Identificador del concepto
        /// </summary>
        public String idConcepto;

        /// <summary>
        /// Identificador de la taxonomia con el espacio de nombres principal de la taxonomia
        /// </summary>
        public String EspacioNombresPrincipal;

        /// <summary>
        /// Codigo hash del registro de la dimension
        /// </summary>
        public String codigoHashRegistro;

        /// <summary>
        /// Informacion Dimensional
        /// </summary>
        public IList<DimensionInfoDto> DimensionInfoDto;


        /// <summary>
        /// Realiza un clon del hint de dimensiones
        /// </summary>
        /// <returns></returns>
        public object Clone()
        {
            return this.MemberwiseClone();
        }
    }
}
