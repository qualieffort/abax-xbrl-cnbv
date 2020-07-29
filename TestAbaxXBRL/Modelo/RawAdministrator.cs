using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestAbaxXBRL.Modelo
{
    public class RawAdministrator
    {

        public String Llave { get; set; }

        public String Entidad { get; set; }
        public String IdConcepto { get; set; }
        public String Valor { get; set; }
        public InternalDate Fecha { get; set; }
        public DateTime FechaObj { get; set; }
        public String Etiqueta { get; set; }
        public String IdSecuenciaAdministrador { get; set; }
        public String IdTipoAdministrador { get; set; }
        public String TipoAdministrador { get; set; }
        public String SecuenciaAdministradorNumber { get; set; }


        public String IdSecuenciaAccionista { get; set; }
        public String IdTipoAccionista { get; set; }
       
        public String IdTipoEvento { get; set; }

        public String IdEnvio { get; set; }

    }



    public class InternalDate {
        public String date { get; set; }
    }
}
