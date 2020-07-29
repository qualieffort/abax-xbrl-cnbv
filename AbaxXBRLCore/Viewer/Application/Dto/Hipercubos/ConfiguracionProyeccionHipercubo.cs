using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRLCore.Viewer.Application.Dto.Hipercubos
{
    /// <summary>
    /// Clase con la definición para agregar filtros adicionales al hipercubo.
    /// </summary>
    public class ConfiguracionProyeccionHipercubo
    {
        /// <summary>
        /// Diccionario para filtrar los contextos por el contenido del valor de sus hechos.
        /// </summary>
        public IDictionary<String, String> FiltrosContextoPorValorConcepto { get; set; }
    }
}
