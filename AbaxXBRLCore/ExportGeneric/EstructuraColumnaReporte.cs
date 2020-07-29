using System;

namespace AbaxXBRLCore.ExportGeneric
{
    /// <summary>
    /// Clase que contiene las columnas del reporte
    /// </summary>
    public class EstructuraColumnaReporte
    {
        public string NombreColumna { get; set; }
        public DateTime FechaInicio { get; set; }
        public DateTime FechaFin { get; set; }
        public DateTime FechaInstante { get; set; }
        public string Entidad { get; set; }
        public string Moneda { get; set; }
        public string MonedaId { get; set; }
        public string EsquemaEntidad { get; set; }
        public int TipoDePeriodo { get; set; }

        /// <summary>
        /// Indica si la columna se debe de ocultar
        /// </summary>
        public bool OcultarColumna { get; set; }
    }
}
