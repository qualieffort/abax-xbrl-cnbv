using AbaxXBRLCore.Viewer.Application.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Viewer.Application.Import
{
    /// <summary>
    /// Define la funcionalidad de un objeto de tipo "Strategy" para decidir la implementación
    /// del importador de archivos que requiere un documento de instancia en 
    /// base a su taxonomía
    /// </summary>
    /// <author>Emigdio Hernandez</author>
    public interface IEstrategiaObtenerImportadorExportadorArchivoADocumentoInstancia
    {
        /// <summary>
        /// Obtiene un importador que sea compatible con el documento de instancia enviado como parámetro
        /// </summary>
        /// <param name="documento"></param>
        /// <returns></returns>
        IImportadorExportadorArchivoADocumentoInstancia ObtenerImportadorArchivos(DocumentoInstanciaXbrlDto documento);

    }
}
