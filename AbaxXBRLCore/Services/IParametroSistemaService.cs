using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Entities;
using AbaxXBRLCore.Viewer.Application.Dto.Angular;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRLCore.Services
{
    /// <summary>
    /// Definición de propiedades para el servcio que encapsula la lógica de negocio para la administración de los ParametroSistema.
    /// </summary>
    public interface IParametroSistemaService
    {
        /// <summary>
        /// Retorna todos los parametros del sistema existentes en BD.
        /// </summary>
        /// <returns>Lista con todos los parametros del sistema existentes.</returns>
        List<ParametroSistema> Obtener();

        /// <summary>
        /// Retorna un parametro del sistema basandose en su identificador.
        /// </summary>
        /// <returns>Un entity con la información de un parametro del sistema.</returns>
        ParametroSistema Obtener(long idParametroSistema);

        /// <summary>
        /// Actualiza un parametro del sistema.
        /// </summary>
        /// <param name="parametroSistema">Dto con la información del parametro.</param>
        /// <param name="idUsuarioExec">Identificador del usuario que realiza esta acción.</param>
        /// <param name="idEmpresaExc">Identificador de la empresa que realiza esta acción.</param>
        /// <returns>Resultado de la operación.</returns>
        ResultadoOperacionDto ActualizarParametroSistema(ParametroSistema parametroSistema, long idUsuarioExec, long idEmpresaExc);

        /// <summary>
        /// Genera el registro de auditoría para bitacorizar la exportación a excel de los parametros del sistema.
        /// </summary>
        /// <param name="idUsuarioExec">Identificador del usuario que exporto la información.</param>
        /// <param name="idEmpresaExc">Identificador de la empresa que realiza esta acción.</param>
        /// <returns>Resultado de la operación.</returns>
        ResultadoOperacionDto RegistrarAccionAuditoriaExportarExcel(long idUsuarioExec, long idEmpresaExc);
        /// <summary>
        /// Obtiene el valor de un parámetro del sistema, si el parámetro no existe, se retorna el valor por default
        /// </summary>
        /// <param name="claveParametro">Clave del parámetro buscado</param>
        /// <param name="valorDefault">Valor por default en caso de que no exista el parámetro</param>
        /// <returns>Valor del parámetro</returns>
        String ObtenerValorParametroSistema(String claveParametro, String valorDefault);
    }
}
