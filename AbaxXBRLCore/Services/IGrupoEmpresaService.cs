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
    /// Definición de propiedades para el servcio que encapsula la lógica de negocio para la administración de los GrupoEmpresa.
    /// </summary>
    public interface IGrupoEmpresaService
    {
        /// <summary>
        /// Retorna todos los grupos de empresas existentes en BD.
        /// </summary>
        /// <returns>Lista con todos los grupos de empresas existentes.</returns>
        IList<GrupoEmpresa> ObtenTodosGruposEmpresa();

       /// <summary>
        /// Elimina el grupo de empresa del repositorio.
        /// </summary>
        /// <param name="idGrupoEmpresa">Identificador del gurpo de empresas a eliminar.</param>
        /// <param name="idUsuarioExec">Id del usuario que ejecuto el proceso.</param>
        /// <param name="idEmpresaExc">Identificador de la empresa que realiza esta acción.</param>
        /// <returns>Resultado de la operación.</returns>
        ResultadoOperacionDto EliminaGrupoEmpresa(long idGrupoEmpresa, long idUsuarioExec, long idEmpresaExc);

        /// <summary>
        /// Agrega un nuevo grupo de empresa al catalogo general.
        /// </summary>
        /// <param name="dto">Dto con la información del grupo.</param>
        /// <param name="idUsuarioExec">Identificador del usuario que realiza esta acción.</param>
        /// <param name="idEmpresaExc">Identificador de la empresa que realiza esta acción.</param>
        /// <returns>Resultado de la operación.</returns>
        ResultadoOperacionDto GuardaGrupoEmpresa(GrupoEmpresaDto dto, long idUsuarioExec, long idEmpresaExc);

        /// <summary>
        /// Agrega un nuevo grupo de empresa al catalogo general.
        /// </summary>
        /// <param name="dto">Dto con la información del grupo.</param>
        /// <param name="idUsuarioExec">Identificador del usuario que realiza esta acción.</param>
        /// <param name="idEmpresaExc">Identificador de la empresa que realiza esta acción.</param>
        /// <returns>Resultado de la operación.</returns>
        ResultadoOperacionDto ActualizarGrupoEmpresa(GrupoEmpresaDto dto, long idUsuarioExec, long idEmpresaExc);

        /// <summary>
        /// Genera el registro de auditoría para bitacorizar la exportación a excel de los grupos de empresas.
        /// </summary>
        /// <param name="idUsuarioExec">Identificador del usuario que exporto la información.</param>
        /// <param name="idEmpresaExc">Identificador de la empresa que realiza esta acción.</param>
        /// <returns>Resultado de la operación.</returns>
        ResultadoOperacionDto RegistrarAccionAuditoriaExportarExcel(long idUsuarioExec, long idEmpresaExc);

        /// <summary>
        /// Obtiene los registros utilizados para generar el reporte de excel.
        /// </summary>
        /// <param name="idUsuarioExec">Identificador del usuario que ejecuta.</param>
        /// <param name="idEmpresaExc">Identificador de la empresa que ejecuta.</param>
        /// <returns>Resultado de la operación.</returns>
        ResultadoOperacionDto ObtenRegistrosReporte(long idUsuarioExec, long idEmpresaExc);

        /// <summary>
        /// Retorna un listado con todos los elementos asignables tipo empresa.
        /// </summary>
        /// <returns>Lista de elementos asignables.</returns>
        IList<SelectItemDto> ObtenEmpresasAsignables();
        /// <summary>
        /// Retorna un listado con todos los elementos asignables tipo grupoEmpresa.
        /// </summary>
        /// <returns>Lista de elementos asignables.</returns>
        IList<SelectItemDto> ObtenGruposAsignables();
        /// <summary>
        /// Retorna un listado con todos los elementos asignados de tipo empresa a un grupo empresa en particular.
        /// </summary>
        /// <param name="idGrupoEmpresa">Identificador del grupo de empresas al que están asignados los elementos.</param>
        /// <returns>Lista de elementos asignables.</returns>
        IList<SelectItemDto> ObtenEmpresasAsignadas(long idGrupoEmpresa);

        /// <summary>
        /// Retorna un listado con todos los elementos asignados de tipo empresa a un grupo empresa en particular.
        /// </summary>
        /// <param name="idGrupoEmpresa">Identificador del grupo de empresas al que están asignados los elementos.</param>
        /// <returns>Lista de elementos asignables.</returns>
        IList<SelectItemDto> ObtenEmpresasAsignadas(long[] idGrupoEmpresa);


        /// <summary>
        /// Retorna un listado con todos los elementos asignados de tipo GrupoEmpresa a una Empresa en particular.
        /// </summary>
        /// <param name="idEmpresa">Identificador de la Empresa a la que están asignados los elementos.</param>
        /// <returns>Lista de elementos asignables.</returns>
        IList<SelectItemDto> ObtenGruposEmpresasAsignados(long idEmpresa);
        /// <summary>
        /// Elimina todos los registros existentes en la relacion EmpresaGrupoEmpresa con el IdEmpresa indicado.
        /// </summary>
        /// <param name="idEmpresa">Identificador de la empresa de las relaciones a eliminar.</param>
        void LimpiaRelacionesEmpresa(long idEmpresa);
        /// <summary>
        /// Elimina todos los registros existentes en la relacion EmpresaGrupoEmpresa con el IdGrupoEmpresa indicado.
        /// </summary>
        /// <param name="idGrupoEmpresa">Identificador del grupo de empresas de las relaciones a eliminar.</param>
        void LimpiaRelacionesGrupoEmpresa(long idGrupoEmpresa);
        /// <summary>
        /// Actualiza las relaciones entre empresas y grupoEmpresa de una empresa determinada.
        /// </summary>
        /// <param name="idEmpresa">Identificador de la empresa que se pretende actualizar.</param>
        /// <param name="idsGruposEmpresas">Grupos a los que será asignada la empresa.</param>
        /// <param name="idUsuarioExec">Usuario que ejecuta el proceso.</param>
        /// <param name="idEmpresaExc">Empresa que ejecuta el proceso.</param>
        /// <returns>Resultado de la operación.</returns>
        ResultadoOperacionDto ActualizaRelacionEmpresa(long idEmpresa, IList<long> idsGruposEmpresas, long idUsuarioExec, long idEmpresaExc);
        /// <summary>
        /// Actualiza las relaciones entre empresas y grupoEmpresa de un grupo de empresas determinado.
        /// </summary>
        /// <param name="idGrupoEmpresa">Identificador del grupo de emrpesas que se pretende actualizar.</param>
        /// <param name="idsEmpreas">Identificadores de las empresas a actualizar.</param>
        /// <param name="idUsuarioExec">Usuario que ejecuta el proceso.</param>
        /// <param name="idEmpresaExc">Empresa que ejecuta el proceso.</param>
        /// <returns>Resultado de la operación.</returns>
        ResultadoOperacionDto ActualizaRelacionGrupoEmpresas(long idGrupoEmpresa, IList<long> idsEmpreas, long idUsuarioExec, long idEmpresaExc);
    }
}
