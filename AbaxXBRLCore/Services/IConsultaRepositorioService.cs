using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Entities;
using AbaxXBRLCore.Viewer.Application.Dto;
using AbaxXBRLCore.Viewer.Application.Dto.Angular;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Services
{
    /// <summary>
    /// Interface para el manejo de servicios sobre las consultas al repositorio
    /// </summary>
    /// <author>Luis Angel Morales Gonzalez</author>
    public interface IConsultaRepositorioService
    {
        /// <summary>
        /// Obtiene las consultas de informacion del repositorio registradas
        /// </summary>
        /// <returns>Resultado de la operacion de la consulta realizada</returns>
        ResultadoOperacionDto ObtenerConsultas();


        /// <summary>
        /// Elimina una consulta de configuracion al repositorio
        /// </summary>
        /// <param name="idConsulta">Identificador unico de la consulta</param>
        /// <returns>Resultado de la operacion de la eliminacion de una consulta</returns>
        ResultadoOperacionDto Eliminar(long idConsulta);


        
        /// <summary>
        /// Registra una consulta de configuracion del repositorio
        /// </summary>
        /// <param name="consultaAnalisisDto">Objeto con la informacion de la consulta de configuracion</param>
        /// <returns>Resultado de operacion del registro de analisis</returns>
        ResultadoOperacionDto Registrar(ConsultaRepositorio consulta);
        
       /// <summary>
        /// Retorna una lista de Dtos con la información a desplegar en la vista de listado de consutlas al repositorio.
        /// Se muestran las consultas privadas del usuario que consulta y todas las consultas públicas.
        /// </summary>
        /// <param name="idUsuario">Identificador del usuario que esta consultado.</param>
        /// <returns>Dtos con la infomración a mostrar.</returns>
        IList<ConsultaRepositorioCnbvDto> ObtenConsultasRepositorioDtos(long idUsuario);

        /// <summary>
        /// Retorna un dto auditable con los registros para generar el reporte de Excel.
        /// </summary>
        /// <param name="idUsuarioExec">Usuario que ejecuta el proceso.</param>
        /// <param name="idEmpresaExec">Empresa en sesión</param>
        /// <returns>Resultado auditable con los registros.</returns>
        ResultadoOperacionDto ObtenRegistrosReporteExcel(long idUsuarioExec, long idEmpresaExec);

        /// <summary>
        /// Elimina la consulta al repositorio para el identificador dado.
        /// </summary>
        /// <param name="idConsultaRepositorio">Identificador de la consulta al repositorio.</param>
        /// <param name="idUsuarioExec">Id del usuario que ejecuto el proceso.</param>
        /// <param name="idEmpresaExc">Identificador de la empresa que realiza esta acción.</param>
        /// <returns>Resultado de la operación.</returns>
        ResultadoOperacionDto EliminaConsultaRepositorio(long idConsultaRepositorio, long idUsuarioExec, long idEmpresaExc);

        /// <summary>
        /// Agrega una nueva consulta al catalogo de consultas al repositorio.
        /// </summary>
        /// <param name="dto">Dto con la información a persitir.</param>
        /// <param name="idUsuarioExec">Identificador del usuario que realiza esta acción.</param>
        /// <param name="idEmpresaExc">Identificador de la empresa que realiza esta acción.</param>
        /// <returns>Resultado de la operación.</returns>
        ResultadoOperacionDto GuardaConsultaRepositorio(ConsultaRepositorioCnbvDto dto, long idUsuarioExec, long idEmpresaExc);
        /// <summary>
        /// Agrega un nuevo elemento al catalogo de ConsultaRepositorio..
        /// </summary>
        /// <param name="dto">Dto con la información de la entidad.</param>
        /// <param name="idUsuarioExec">Identificador del usuario que realiza esta acción.</param>
        /// <param name="idEmpresaExc">Identificador de la empresa que realiza esta acción.</param>
        /// <returns>Resultado de la operación.</returns>
        ResultadoOperacionDto ActualizarConsultaRepositorio(ConsultaRepositorioCnbvDto dto, long idUsuarioExec, long idEmpresaExc);
    }
}
