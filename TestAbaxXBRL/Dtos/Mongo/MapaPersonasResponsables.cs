using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestAbaxXBRL.Dtos.Mongo
{
    public class MapaPersonasResponsables
    {
        public String Entidad {get; set;}
        public String IdConcepto { get; set; }
        public String Valor { get; set; }
        public DateTime Fecha { get; set; }
        public String Etiqueta { get; set; }
        public String IdTipoPersonaResponsable { get; set; }
        public String IdSecuenciaInstitucion { get; set; }
        public String IdSecuenciaPersona { get; set; }
        public String TipoPersonaResponsable { get; set; }
        public String HashInstitucion { get; set; }
        public String HashPersona { get; set; }
    }
}
