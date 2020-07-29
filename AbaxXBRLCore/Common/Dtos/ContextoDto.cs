using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Common.Dtos
{
    /// <summary>
    /// DTO para representar un Contexto XBRL de un documento instancia de forma provisional
    /// </summary>
    public class ContextoDto
    {
        public ContextoDto()
        {
            Hechos = new Dictionary<string, string>();
        }
        public Nullable<DateTime> Fecha { get; set; }

        public Nullable<DateTime> FechaInicio { get; set; }
        public Nullable<DateTime> FechaFin { get; set; }
        public string Nombre { get; set; }
        public string Id { get; set; }
        public IDictionary<string, string> Hechos { get; set; }
        public int IdFormato { get; set; }
        public String MiembroDimension { get; set; }
    }
}
