using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Sockets;
using System.Text;

namespace AbaxXBRLCore.Common.Dtos
{
    public class Item
    {
        public long Id { get; set; }
        public String Nombres { get; set; }
        public String Categoria { get; set; } 
        public long IdCategoria { get; set; }
        public bool Seleccionado { get; set; }
    }

    public class AsignarItemsDto
    {
        public long IdUsuario { get; set; }
        public long IdRol { get; set; }
        public long IdGrupo { get; set; }
        public long? IdEmpresa { get; set; }
        public IEnumerable<Item> Asignados { get; set; }
        public IEnumerable<Item> NoAsignados { get; set; }
        public IEnumerable<long> Seleccionados { get; set; }
        public IEnumerable<long> NoSeleccionados { get; set; }
    }
}
