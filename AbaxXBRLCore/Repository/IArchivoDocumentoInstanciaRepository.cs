using AbaxXBRLCore.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRLCore.Repository
{
    /// <summary>
    /// Definición de un Repository para las operaciones CRUD de los objetos de tipo ArchivoDocumentoInstancia.
    /// <author>José Antonio Huizar Moreno</author>
    /// <version>1.0</version>
    /// </summary>
    public interface IArchivoDocumentoInstanciaRepository : IBaseRepository<ArchivoDocumentoInstancia>
    {
        /// <summary>
        /// Obtiene un archivo asociado a un documento instancia XBRL por medio de su identificador de BD.
        /// </summary>
        /// <param name="idArchivoDocumentoInstancia">El identificador del archivo asociado al documento instancia a consultar.</param>
        /// <returns>El archivo asociado al documento instancia que corresponde al identificador proporcionado. null en caso de no existir un archivo asociado al identificador proporcionado.</returns>
        ArchivoDocumentoInstancia Obtener(long idArchivoDocumentoInstancia);
        /// <summary>
        /// Eliminar documento instancia.
        /// </summary>
        /// <param name="idArchivoDocumentoInstancia">Identificador del documento de instancia.</param>
        /// <param name="idTipoArchivo">Identificador del tipo de archivo.</param>
        void EliminaArchivosDistribucion(long idArchivoDocumentoInstancia, long idTipoArchivo);
        /// <summary>
        /// Agrega una nueva distrivución, eliminando previamente las distribuciones anteriores del mismo tipo para el documento de instancia.
        /// </summary>
        /// <param name="archivo">Entidad con la información a persistir.</param>
        void AgregaDistribucion(ArchivoDocumentoInstancia archivo);
    }
}
