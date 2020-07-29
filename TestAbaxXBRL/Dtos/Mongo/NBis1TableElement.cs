using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestAbaxXBRL.Dtos.Mongo
{
    public class NBis1TableElement
    {
        public DateTime Fecha { get; set; }
        public String Entidad { get; set; }
        public String IdEnvio { get; set; }
        public String NumeroFideicomiso { get; set; }
        public String Fiduciario { get; set; }
        public String Fideicomitente { get; set; }
        public String Garantia { get; set; }
        public String Otros { get; set; }
    }
}
