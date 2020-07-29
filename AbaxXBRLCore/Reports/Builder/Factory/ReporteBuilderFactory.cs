using AbaxXBRLCore.Viewer.Application.Dto;
using AbaxXBRLCore.Viewer.Application.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Reports.Builder.Factory
{

    public class ReporteBuilderFactory
    {
        /// <summary>
        /// Mapeo de builder de documento de instancia según el espacio de nombres principal
        /// de la taxonomía.
        /// </summary>
        public IDictionary<String, ReporteBuilder> ConfiguracionBuilders { get; set;}

        /// <summary>
        /// Obtiene un ReporteBuilder de documento instancia para la taxonomía específica del documento.
        /// </summary>
        /// <param name="documento">Documento que se desea exportar</param>
        /// <returns>Exportador para el documento, null si no cuenta con un exportador específico</returns>
        ////
        public ReporteBuilder obtenerReporteBuilder(DocumentoInstanciaXbrlDto documento, IDefinicionPlantillaXbrl plantilla)
        {
            return ConfiguracionBuilders[documento.EspacioNombresPrincipal].newInstance(plantilla);
        }

        /// <summary>
        /// Obtiene un ReporteBuilder de documento instancia para la taxonomía específica del documento y el idioma especifico.
        /// </summary>
        /// <param name="documento">Documento que se desea exportar</param>
        /// <param name="idioma">Idioma con el que manejara las etiquetas para reporte</param>
        /// <returns>Builder para el documento, null si no cuenta con un exportador específico</returns>
        ////
        public ReporteBuilder obtenerReporteBuilder(DocumentoInstanciaXbrlDto documento, IDefinicionPlantillaXbrl plantilla, String idioma)
        {
            return ConfiguracionBuilders[documento.EspacioNombresPrincipal].newInstance(plantilla, idioma);
        }

    }
}
