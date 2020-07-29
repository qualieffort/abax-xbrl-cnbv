using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Viewer.Application.Dto.Angular
{
    public class GrupoUsuariosDto
    {
        public long IdGrupoUsuarios { get; set; }
        public string Nombre { get; set; }
        public string Descripcion { get; set; }
        public long IdEmpresa { get; set; }
        public Nullable<bool> Borrado { get; set; }
    }
}
