using System;
namespace AbaxXBRLCore.ExportGeneric
{
    /// <summary>
    /// Clase que contiene información especifica de un hecho
    /// </summary>
    public class EstructuraHechoReporte
    {
        public string HechoId { get; set; }
        public decimal ValorRedondeado { get; set; }
        public string Valor { get; set; }
        public string ValorFormateado { get; set; }
        public decimal ValorNumerico { get; set; }
        public bool EsNumerico { get; set; }
        public string TipoDato { get; set; }
    }
}
