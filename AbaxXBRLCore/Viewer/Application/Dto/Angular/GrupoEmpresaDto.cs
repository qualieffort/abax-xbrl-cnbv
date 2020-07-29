using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRLCore.Viewer.Application.Dto.Angular
{
    /// <summary>
    /// Dto con la información de la entidad GrupoEmpresa.
    /// </summary>
    public class GrupoEmpresaDto
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
    }
}
