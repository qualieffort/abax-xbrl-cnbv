using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Common.Dtos
{
    /// <summary>
    /// Representa un hecho de un documento de instancia
    /// </summary>
    public  class HechoDto
    {
        public long IdHecho { get; set; }
        public string ClaveEmpresa { get; set; }
        public string Valor { get; set; }
        public long IdCatalogoElementos { get; set; }
        public string Unidad { get; set; }
        public long IdDocumentoInstancia { get; set; }
        public string Etiqueta { get; set; }
        public string Dimension { get; set; }

    
    }
}
