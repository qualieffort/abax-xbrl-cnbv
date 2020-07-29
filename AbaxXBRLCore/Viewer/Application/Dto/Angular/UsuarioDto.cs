using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Viewer.Application.Dto.Angular
{
    public class UsuarioDto
    {
        public long IdUsuario { get; set; }
        public string Nombre { get; set; }
        public string ApellidoPaterno { get; set; }
        public string ApellidoMaterno { get; set; }
        public string CorreoElectronico { get; set; }
        public string Password { get; set; }
        public string HistoricoPassword { get; set; }
        public System.DateTime VigenciaPassword { get; set; }
        public Nullable<int> IntentosErroneosLogin { get; set; }
        public bool Bloqueado { get; set; }
        public bool Activo { get; set; }
        public string Puesto { get; set; }
        public Nullable<bool> Borrado { get; set; } 
        public bool TieneEmpresas { get; set; }
        public bool TieneRoles { get; set; } 
        public string NombreCompleto { get; set; }
    }
}
