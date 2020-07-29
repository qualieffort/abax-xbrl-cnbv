using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using AbaxXBRLCore.Entities;

namespace AbaxXBRLCore.Repository
{
    /// <summary>
    /// Interfaz del objeto Repository para el acceso a los datos de la tabla de contextos
    /// de documentos de instancia XBRL
    /// </summary>
    public interface IContextoRepository : IBaseRepository<Contexto>
    {
        /// <summary>
        /// Elimina por condición todos los contextos de un documento de instancia.
        /// Elimina primero todas las entidades asociadas a los contextos del documento.
        /// </summary>
        /// <param name="idDocumento"></param>
        void EliminarContextosDeDocumento(long idDocumento);

        /// <summary>
        /// Obtiene los contextos que se tengan a partir de las empresas especificadas
        /// </summary>
        /// <param name="idEmpresas">Identificadores de las empresas</param>
        /// <returns>Listado de contextos</returns>
        List<AbaxXBRLCore.Viewer.Application.Dto.Angular.ContextoDto> ObtenerListadoContextosPorDocumentoInstancia(List<string> idEmpresas);

        /// <summary>
        /// Consulta los contextos que estan presentes en los periodos especificados
        /// </summary>
        /// <param name="idContextos">Listado de contextos a consultar</param>
        /// <returns>Listado de contextos</returns>
        List<AbaxXBRLCore.Viewer.Application.Dto.Angular.ContextoDto> ConsultarContextosPorPeriodo(List<long> idContextos);

        /// <summary>
        /// Consulta los identificadores de los contextos que se tengan por consulta de analisis
        /// </summary>
        /// <param name="consultaAnalisis">Configuracion de la consulta de analisis de informacion</param>
        /// <returns>Listado de identificadores de contextos</returns>
        long[] ObtenerListadoContextosPorPeriodoConsulta(AbaxXBRLCore.Viewer.Application.Dto.Angular.ConsultaAnalisisDto consultaAnalisis);

    }
}
