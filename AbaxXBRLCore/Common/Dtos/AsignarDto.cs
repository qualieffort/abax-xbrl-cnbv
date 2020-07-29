using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using AbaxXBRLCore.Entities;

namespace AbaxXBRLCore.Common.Dtos
{
    public class AsignarDto
    {        
        public long IdUsuario { get; set; }
        public long IdRol { get; set; }       
        public IEnumerable<long> IdsSeleccionados { get; set; }
        public IEnumerable<long> IdsDeseleccionados { get; set; }

    }
}
