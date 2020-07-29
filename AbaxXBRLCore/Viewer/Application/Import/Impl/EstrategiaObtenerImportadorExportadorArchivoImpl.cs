using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Viewer.Application.Import.Impl
{
    /// <summary>
    /// Implementación de un objeto del tipo "Strategy" para elegir una instancia
    /// adecuada de un importador de archivos para un documento de instancia
    /// </summary>
    public class EstrategiaObtenerImportadorExportadorArchivoImpl: IEstrategiaObtenerImportadorExportadorArchivoADocumentoInstancia
    {
        /// <summary>
        /// Lista de importadores disponibles en el sistema
        /// </summary>
        public IList<IImportadorExportadorArchivoADocumentoInstancia> ListaImportadores { get; set; }
        
        public IImportadorExportadorArchivoADocumentoInstancia ObtenerImportadorArchivos(Dto.DocumentoInstanciaXbrlDto documento)
        {
           
            return null;
        }
    }
}
