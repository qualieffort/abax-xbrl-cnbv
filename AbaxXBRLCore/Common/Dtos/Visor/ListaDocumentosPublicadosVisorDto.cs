
using System.Collections.Generic;
namespace AbaxXBRLCore.Common.Dtos.Visor
{
    /// <summary>
    /// DTO que representa la lista de documentos publicados que el visor consumirá para presentar y buscar
    /// </summary>
    public class ListaDocumentosPublicadosVisorDto 
    {
        /// <summary>
        /// Lista de publicaciones
        /// </summary>
        public IList<DocumentoPublicadoDto> ListadoDocumentosInstancia {get;set;}
    }

}