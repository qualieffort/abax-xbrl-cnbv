using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using AbaxXBRLCore.Entities;

namespace AbaxXBRLCore.Repository
{
    /// <summary>
    /// Interfaz del objeto Repository para las operaciones con el conjunto de esquemas o linkbases importados
    /// en un documento de instancia
    /// </summary>
    public interface IDtsDocumentoInstanciaRepository: IBaseRepository<DtsDocumentoInstancia>
    {
        /// <summary>
        /// Elimina por condición todos los registros de DtsDocumentoInstancia asociados al identificador
        /// enviado como parámetro
        /// </summary>
        /// <param name="idDocumentoInstancia">Id del documento de instancia del que se borrarán los registros</param>
        void EliminarDtsDeDocumentoInstancia(long idDocumentoInstancia);
    }
}
