using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRLCore.Viewer.Application.Dto.Angular
{
    /// <summary>
    /// Dto con la información del tipo de empresa a presentar en el reporte de Excel.
    /// </summary>
    public class TipoEmpresaExcelDto
    {
        /// <summary>
        /// Identificador de la entidad.
        /// </summary>
        public long IdTipoEmpresa { get; set; }
        /// <summary>
        /// Nombre con el que se identifica el tipo de empresa.
        /// </summary>
        public string Nombre { get; set; }
        /// <summary>
        /// Descripción con la razón de ser del tipo de empresas.
        /// </summary>
        public string Descripcion { get; set; }
        /// <summary>
        /// Identificador de la empresa asignada al tipo.
        /// </summary>
        public long IdEmpresa { get; set; }
        /// <summary>
        /// Nombre de la empresa asignada al tipo.
        /// </summary>
        public string Empresa { get; set; }
        /// <summary>
        /// Razón social de la empresa asignada al tipo.
        /// </summary>
        public string RazonSocial { get; set; }
    }
}
