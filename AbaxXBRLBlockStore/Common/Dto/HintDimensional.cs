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
    public class HintDimensional
    {
        /// <summary>
        /// Identificador del concepto
        /// </summary>
        public String idConcepto;

        /// <summary>
        /// Informacion Dimensional
        /// </summary>
        public IList<DimensionInfoDto> DimensionInfoDto;
    }
}
