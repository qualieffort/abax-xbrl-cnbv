using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Viewer.Application.Dto.Angular
{
    public class RegistroAuditoriaDto
    {
        public long IdRegistroAuditoria { get; set; }
        public System.DateTime Fecha { get; set; }
        public Nullable<long> IdUsuario { get; set; }
        public Nullable<long> IdModulo { get; set; }
        public Nullable<long> IdAccionAuditable { get; set; }
        public string Registro { get; set; }
        public Nullable<long> IdEmpresa { get; set; }

        public AccionAuditableDto AccionAuditable { get; set; }
        public EmpresaDto Empresa { get; set; }
        public ModuloDto Modulo { get; set; }
        public UsuarioDto Usuario { get; set; }
    }
}
