﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestAbaxXBRL.Dtos.Mongo
{
    public class HechoReducido
    {
        public String Taxonomia { get; set; }
        public DateTime Fecha { get; set; }
        public String Entidad { get; set; }
        public String IdConcepto { get; set; }
        public String Valor { get; set; }
        public String TipoFecha { get; set; }
        public String IdEnvio { get; set; }
        public String Etiqueta { get; set; }
        public String IdHecho { get; set; }
        public String Unidad { get; set; }
    }
}
