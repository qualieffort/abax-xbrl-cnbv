using System.Collections.Generic;

namespace AbaxXBRLCore.ExportGeneric
{
    /// <summary>
    /// Clase que contiene lista de conceptos y columnas procesados por un rol especifico
    /// </summary>
    public class EstructuraRolReporte
    {
        public string Rol { get; set; }
        public string RolUri { get; set; }
        public List<EstructuraConceptoReporte> Conceptos { get; set; }
        public List<EstructuraColumnaReporte> ColumnasDelReporte { get; set; }
    }
}
