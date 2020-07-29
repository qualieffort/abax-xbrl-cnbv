using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using AbaxXBRLCore.Entities;


namespace AbaxXBRLCore.Repository
{
    /// <summary>
    /// Interfaz del objeto de Repository para el acceso a datos de los elementos de notas al pie
    /// de un documento de instancia
    /// </summary>
    public interface INotaAlPieRepository : IBaseRepository<NotaAlPie>
    {
        /// <summary>
        /// Elimina por condición todos los registros de NotaAlPie asociados al identificador del documento de instancia
        /// enviado como parámetro
        /// </summary>
        /// <param name="idDocumentoInstancia">Id del documento de instancia del que se borrarán los registros</param>
        void EliminarNotasAlPieDeDocumentoInstancia(long idDocumentoInstancia);
    }
}
