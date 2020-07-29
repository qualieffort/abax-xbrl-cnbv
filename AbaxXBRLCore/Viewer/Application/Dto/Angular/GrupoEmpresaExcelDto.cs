using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRLCore.Viewer.Application.Dto.Angular
{
    /// <summary>
    /// Dto con la información del grupo de empresa a presentar en el reporte de Excel.
    /// </summary>
    public class GrupoEmpresaExcelDto
    {
        /// <summary>
        /// Identificador de la entidad.
        /// </summary>
        public long IdGrupoEmpresa { get; set; }
        /// <summary>
        /// Nombre con el que se identifica el grupo de empresa.
        /// </summary>
        public string Nombre { get; set; }
        /// <summary>
        /// Descripción con la razón de ser del grupo de empresas.
        /// </summary>
        public string Descripcion { get; set; }
        /// <summary>
        /// Identificador de la empresa asignada al grupo.
        /// </summary>
        public long IdEmpresa { get; set; }
        /// <summary>
        /// Nombre de la empresa asignada al grupo.
        /// </summary>
        public string Empresa { get; set; }
        /// <summary>
        /// Razón social de la empresa asignada al grupo.
        /// </summary>
        public string RazonSocial { get; set; }
    }
}
