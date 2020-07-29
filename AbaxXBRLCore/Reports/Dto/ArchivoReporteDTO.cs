using AbaxXBRLCore.Viewer.Application.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRLCore.Reports.Dto
{
    /// <summary>
    /// DTO con la información para presentar un archivo.
    /// </summary>
    public class ArchivoReporteDTO
    {
        /// <summary>
        /// Hecho que se pretende presentar.
        /// </summary>
        public HechoDto HechoArchivo { get; set; } 
        /// <summary>
        /// Título del reporte a presentar.
        /// </summary>
        public String TituloArchivo { get; set; }
        /// <summary>
        /// Token que se utiliza para referenciar al archivo.
        /// </summary>
        public String TokenArchivo { get { return HechoArchivo.Id.Length < 40 ? HechoArchivo.Id : HechoArchivo.Id.Substring(0,40) ; } }

    }
}
