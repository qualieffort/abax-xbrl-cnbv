using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Viewer.Application.Dto.Angular
{
    /// <summary>
    /// Copia los datos de la entidad tipo empresa.
    /// </summary>
    public class TipoEmpresaDto
    {
        public long IdTipoEmpresa { get; set; }
        public string Nombre { get; set; }
        public string Descripcion { get; set; }
        public Nullable<bool> Borrado { get; set; }
    }
}
