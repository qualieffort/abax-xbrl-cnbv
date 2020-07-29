using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Viewer.Application.Dto.Angular
{
    public class UsuarioEmpresaDto
    {
        public long IdUsuarioEmpresa { get; set; }
        public long IdUsuario { get; set; }
        public long IdEmpresa { get; set; }

        public virtual EmpresaDto Empresa { get; set; }
        public virtual UsuarioDto Usuario { get; set; }
    }
}
