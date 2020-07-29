using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Viewer.Application.Dto.Angular
{
    /// <summary>
    /// Dto para graficación de la herramienta EasyPieChart.
    /// </summary>
    public class EasyPieChartDto
    {
        public string Etiqueta { get; set; }
        public int Cantidad { get; set; }
        public int Total { get; set; }
    }
}
