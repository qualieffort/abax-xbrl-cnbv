using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AbaxXBRLCore.Entities;
using AbaxXBRLCore.Viewer.Application.Dto.Angular;

namespace AbaxXBRLCore.Repository
{
    /// <summary>
    /// Definición de las porpiedades para el repositorio de grupos de empresas.
    /// </summary>
    public interface IGrupoEmpresaRepository : IBaseRepository<GrupoEmpresa>
    {
        /// <summary>
        /// Retorna un listado de dtos con la información necesaria para generar el reporte de Excel.
        /// </summary>
        /// <returns>Listado de Dtos.</returns>
        IList<GrupoEmpresaExcelDto> ObtenRegistrosReporte();
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
        /// Inserta una relacion entre empresa y grupo empresa si no existe.
        /// </summary>
        /// <param name="idEmpresa">Identificador de la emrpesa a relacionar.</param>
        /// <param name="idGrupoEmpresa">Identificaodr de grupo empresa a relacionar.</param>
        void AgregaRelacionEmpresaGrupoEmpresa(long idEmpresa, long idGrupoEmpresa);
    }
}
