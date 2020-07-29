using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRLCore.Viewer.Application.Dto.Angular
{
    /// <summary>
    /// Dto con la información de la entidad EnviosTaxonomiaDto.
    /// </summary>
    public class EnviosTaxonomiaDto
    {
        public string ClaveCotizacion { get; set; }
        public string RazonSocial { get; set; }
        public string NumFideicomiso { get; set; }
        public DateTime? FechaReporte { get; set; }
        public String FechaReporteFormateada { get; set; }
        public string Taxonomia { get; set; }
        public Nullable<System.DateTime> FechaEnvio { get; set; }


        public static Dictionary<string, string> diccionarioColumnasExcel = new Dictionary<string, string>()
        {
            {"ClaveCotizacion", "Emisora"},
            {"RazonSocial", "Razón Social"},
            {"NumFideicomiso","Número de Fideicomiso"},
            {"FechaReporteFormateada","Fecha Reporte"},
            {"Taxonomia","Taxonomía"},
            {"FechaEnvio","Fecha Recepción"}
        };


    }
}
