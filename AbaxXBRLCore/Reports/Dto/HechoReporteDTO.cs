using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Reports.Dto
{
    public class HechoReporteDTO
    {
        public String IdHecho {get; set;}

        public String Valor {get; set;}

        public String ValorFormateado {get; set;}

        public Decimal ValorNumerico {get; set;}

        public String IdContexto {get; set;}

        public String TipoContexto {get; set;}

        public Boolean NotaAlPie {get; set;}
    }
}
