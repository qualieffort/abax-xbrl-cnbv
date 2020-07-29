using AbaxXBRLCore.Reports.Util;
using AbaxXBRLCore.Viewer.Application.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Reports.Dto
{
    /// <summary>
    /// Clase que define una tabla de hipercubos
    /// </summary>
    public class HipercuboReporteDTO
    {
        /// <summary>
        /// 
        /// </summary>
        public IList<String> Titulos { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public IDictionary<String, IDictionary<String, HechoDto[]>> Hechos { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public EvaluadorHipercuboUtil Utileria { get; set; }
    }
}
