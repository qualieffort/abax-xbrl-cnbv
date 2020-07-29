using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestAbaxXBRL.Dtos.Mongo
{
    public class PersonaResponsable
    {
        public DateTime Fecha { get; set; }
        public String Entidad { get; set; }
        public String TipoPersonaResponsable { get; set; }
        public String IdTipoPersonaResponsable { get; set; }
        public String Institucion { get; set; }
        public String Nombre { get; set; }
        public String Cargo { get; set; }
    }
}
