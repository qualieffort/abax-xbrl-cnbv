using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using AbaxXBRLCore.Entities;

namespace AbaxXBRLCore.Repository
{
    /// <summary>
    /// Clase de acceso al repositorio para la tabla de las versiones de documentos de instancia
    /// <author>Emigdio Hernandez</author>
    /// </summary>
    public interface IVersionDocumentoInstanciaRepository: IBaseRepository<VersionDocumentoInstancia>
    {
        /// <summary>
        /// Obtiene la ultima version de un documento de instancia sin inlcuir el contenido de los datos 
        /// de la versión almacenada
        /// </summary>
        /// <param name="idDocumentoInstancia">ID de la última versión del documento a buscar</param>
        /// <returns>Última versión del documento de instancia sin datos, null si no hay versiones</returns>
        VersionDocumentoInstancia ObtenerUltimaVersionDocumentoInstancia(long idDocumentoInstancia);

        /// <summary>
        /// Obtiene todas las versiones del documento instancia sin incluir los datos almacenados.
        /// </summary>
        /// <param name="idDocumentoInstancia">el identificador del documento instancia a consultar.</param>
        /// <returns>Una lista con las versiones del documento. Una lista vacía en caso de no existir versiones.</returns>
       IList<VersionDocumentoInstancia> ObtenerVersionesDocumentoInstancia(long idDocumentoInstancia);
       /// <summary>
       /// Ultima versión de documento d einstancia.
       /// </summary>
       /// <param name="idDocumentoInstancia">Identificador del documento.</param>
       /// <param name="idVersion">Version del documento.</param>
       /// <returns></returns>
       VersionDocumentoInstancia ObtenerUltimaVersionDocumentoInstancia(long idDocumentoInstancia, long idVersion);
    }
}
