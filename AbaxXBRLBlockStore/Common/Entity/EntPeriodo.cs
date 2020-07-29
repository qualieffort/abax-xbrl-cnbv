﻿using System;

namespace AbaxXBRLBlockStore.Common.Entity
{

    /// <summary>
    ///     Clase que contiene la estructura del campo 'Periodo' del documento instancia. 
    ///     <author>Ing. Joel Carmona Noriega.</author>
    ///     <creationDate>20151121</creationDate>         
    ///     <version>1.0.0.0</version>
    ///     <standard>SBBT 07.13</standard>
    /// </summary>
    public class EntPeriodo
    {
        public bool miEsTipoInstante { get; set; }
        public DateTime? fechaInicial { get; set; }
        public DateTime? fecha { get; set; }
    }

}
