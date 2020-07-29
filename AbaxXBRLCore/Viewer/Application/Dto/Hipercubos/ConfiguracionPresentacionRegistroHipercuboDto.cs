using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRLCore.Viewer.Application.Dto.Hipercubos
{
    /// <summary>
    /// Esta clase contiene la definición para la presentación de un subconjunto de elementos de un hipercubo.
    /// </summary>
    public class ConfiguracionPresentacionRegistroHipercuboDto
    {
        /// <summary>
        /// Tipo de configuración para la presentación.
        /// </summary>
        public String Tipo { get; set; }
        /// <summary>
        /// Lista con la definición de la configuración para presentar una fila de datos.
        /// </summary>
        public IList<FilaPresentacionHipercuboDto> Filas { get; set; }
        /// <summary>
        /// Listado de los identificadores de las plantillas de contexto que aplican para esta configuración.
        /// </summary>
        public IList<String> IdsPlantillasContextos { get; set; }
    }
}
