using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Viewer.Application.Dto.Hipercubos
{
    /// <summary>
    /// Configuración base para la presentación de un hipercubo.
    /// </summary>
    public class ConfiguracionReporteHipercuboDto
    {
        /// <summary>
        /// Diccionario de conceptos a presentar en el hipercubo.
        /// </summary>
        public IList<string> IdConceptos { get; set; }
        /// <summary>
        /// Diccionario con las plantillas de concepto a presentar en el hipercubo.
        /// </summary>
        public IDictionary<string, PlantillaContextoDto> PlantillasContextos { get; set; }
        /// <summary>
        /// Diccionario con la definición de las dimensiones existentes en el hipercubo.
        /// </summary>
        public IDictionary<string, PlantillaDimensionInfoDto> PlantillaDimensiones { get; set; }
        /// <summary>
        /// Arreglo con los identificadores de las dimensiones dinamicas, aquellas dimensiones donde se puede modificar los miembros que la conforman.
        /// </summary>
        public IList<string> DimensionesDinamicas { get; set; }
        /// <summary>
        /// Bandera que indica la cantidad máxima de columnas en el reporte antes de cambiar su configuración a Vertical.
        /// </summary>
        public int MaxColumnasVertical { get; set; }
        /// <summary>
        /// Bandera que indica la coantidad máxima de columnas en el reporte antes de partir la tabla a la siguiente hoja.
        /// </summary>
        public int MaxColumnasHorizontal { get; set; }
        /// <summary>
        /// Tamaño de hoja que se utilizará para presentar este reporte.
        /// </summary>
        public string TamanoHoja { get; set; }
        /// <summary>
        /// Identificador del concepto con el titulo de la tabla.
        /// </summary>
        public string IdConceptoTabla { get; set; }
        /// <summary>
        /// Diccionario con las definiciones de las configuraciones de presentación de un hipercubo.
        /// </summary>
        public IDictionary<String, ConfiguracionPresentacionRegistroHipercuboDto> ConfiguracionPresentacion { get; set; }
        /// <summary>
        /// Definición de poryecciones para el hipercubo.
        /// </summary>
        public IDictionary<String, ConfiguracionProyeccionHipercubo> Proyecciones { get; set;}


    }
}
