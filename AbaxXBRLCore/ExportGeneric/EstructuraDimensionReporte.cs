using System;

namespace AbaxXBRLCore.ExportGeneric
{
    /// <summary>
    /// Clase que contiene información especifica de una dimension
    /// </summary>
    public class EstructuraDimensionReporte
    {
        public string IdDimension { get; set; }
        public string IdMiembro { get; set; }
        public string ElementoMiembroTipificado { get; set; }
        public string NombreDimension { get; set; }
        public string NombreMiembro { get; set; }
        public bool Explicita { get; set; }
        
    }

}
