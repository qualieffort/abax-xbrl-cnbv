using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Viewer.Application.Dto.Angular
{
    public class ContextoDto
    {

        public long IdContexto { get; set; }
        public string Nombre { get; set; }
        public int TipoContexto { get; set; }
        public Nullable<System.DateTime> Fecha { get; set; }
        public Nullable<System.DateTime> FechaInicio { get; set; }
        public Nullable<System.DateTime> FechaFin { get; set; }
        public Nullable<bool> PorSiempre { get; set; }
        public string Escenario { get; set; }
        public Nullable<long> IdDocumentoInstancia { get; set; }
        public string EsquemaEntidad { get; set; }
        public string IdentificadorEntidad { get; set; }
        public string Segmento { get; set; }

        public DocumentoInstanciaDto DocumentoInstancia { get; set; }
    }
}
