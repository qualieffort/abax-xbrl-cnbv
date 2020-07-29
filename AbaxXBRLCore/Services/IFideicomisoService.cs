using AbaxXBRLCore.Viewer.Application.Dto.Angular;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Services
{
    /// <summary>
    /// Contrato que define la funcionalidad de la administración de fideicomisos.
    /// </summary>
    public interface IFideicomisoService
    {
        /// <summary>
        /// Crea un nuevo registro de fideicomiso con los datos indicados.
        /// </summary>
        /// <param name="fideicomiso">Entidad a persistir</param>
        void Insertar(FideicomisoDto fideicomiso);
        /// <summary>
        /// Actualiza la información del fideicomiso indicado.
        /// </summary>
        /// <param name="fideicomiso">Entidad a persistir</param>
        void Actualizar(FideicomisoDto fideicomiso);
        /// <summary>
        /// Elimina el fideicomiso indicado.
        /// </summary>
        /// <param name="idFideicomiso">Identificador del fideicomiso</param>
        void Eliminar(long idFideicomiso);
        /// <summary>
        /// Obtiene la ista de los fideicomisos de la empresa indicada.
        /// </summary>
        /// <param name="idEmpresa">Identificador de la empresa.</param>
        IList<FideicomisoDto> ObtenerLista(long idEmpresa);
    }
}
