using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Viewer.Application.Dto.Angular
{
    /// <summary>
    /// Copia los datos de la entidad empresa.
    /// </summary>
    public class EmpresaDto
    {

        public long IdEmpresa { get; set; }
        public string RazonSocial { get; set; }
        public string AliasClaveCotizacion { get; set; }

        /// <summary>
        /// Nombre dek fiduciario emisor en el caso que la empresa sea un fideicomiso
        /// </summary>
        public string FiduciarioEmisor { get; set; }

        /// <summary>
        /// Nombre del Representante común en el caso que la empresa sea un fideicomiso.
        /// </summary>
        public string RepresentanteComunDelFideicomiso { get; set; }

        public string NombreCorto { get; set; }
        public string RFC { get; set; }
        public string DomicilioFiscal { get; set; }
        public Nullable<bool> Borrado { get; set; }
        public string GrupoEmpresa { get; set; }
        public bool? Fideicomitente { get; set; }
        public bool? RepresentanteComun { get; set; }

        public DateTime? FechaConstitucion { get; set; }

        public static Dictionary<string, string> diccionarioColumnas = new Dictionary<string, string>()
        {
            {"RFC", "String"},
            {"NombreCorto", "String"},
            {"AliasClaveCotizacion", "String"},
            {"RazonSocial", "String"},
            {"FiduciarioEmisor", "String"},
            {"RepresentanteComunDelFideicomiso", ""},
            {"Fideicomitente", "bool"},
            {"RepresentanteComun", "bool"}
        };

    }
}
