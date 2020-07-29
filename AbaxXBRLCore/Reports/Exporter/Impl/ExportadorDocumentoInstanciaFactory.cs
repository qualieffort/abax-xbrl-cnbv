using AbaxXBRLCore.Viewer.Application.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Reports.Exporter.Impl
{
    /// <summary>
    /// Localizador y fábrica de los exportadores de documento de instancia por taxonomía
    /// </summary>
    public class ExportadorDocumentoInstanciaFactory
    {
        /// <summary>
        /// Mapeo de expotadores de documento de instancia según el espacio de nombres principal
        /// de la taxonomía
        /// </summary>
        public IDictionary<String, IExportadorDocumentoInstancia> ConfiguracionExportadores {get; set;}



        /// <summary>
        /// Obtiene un exportador de documento instancia para la taxonomía específica del documento
        /// <summary>
        /// <param name="documento">Documento que se desea exportar</param>
        /// <returns>Exportador para el documento, null si no cuenta con un exportador específico</returns>
        public IExportadorDocumentoInstancia ObtenerExportadorParaDocumento(DocumentoInstanciaXbrlDto documento)
        {
            return ConfiguracionExportadores[documento.EspacioNombresPrincipal];
        }
    }
}
