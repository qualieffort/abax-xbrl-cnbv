using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Entities;
using AbaxXBRLCore.Viewer.Application.Dto.Angular;

namespace AbaxXBRLCore.Repository
{
    /// <summary>
    /// Interface del repositorio base para operaciones con la entidad TipoEmpresa.
    /// <author>Alan Alberto Caballero Ibarra</author>
    /// <version>1.0</version>
    /// </summary>
    public interface ITipoEmpresaRepository : IBaseRepository<TipoEmpresa>
    {

        /// <summary>
        /// Obtiene todos los tipos de empresa existentes
        /// </summary>
        /// <returns></returns>
        List<TipoEmpresa> ObtenerTiposEmpresa();

        /// <summary>
        /// Obtiene los tipos de empresa que están asignados a una empresa
        /// </summary>
        /// <returns></returns>
        List<TipoEmpresa> ObtenerTiposEmpresa(long idEmpresa);

        /// <summary>
        /// Obtiene todos los tipos de empresa por filtro
        /// </summary>
        /// <returns></returns>
        IQueryable<TipoEmpresa> ObtenerTiposEmpresa(string search);

        /// <summary>
        /// Obtiene un tipo de empresa por su identificador
        /// </summary>
        /// <param name="idTipoEmpresa"></param>
        /// <returns></returns>
        TipoEmpresa ObtenerTipoEmpresa(long idTipoEmpresa);

        /// <summary>
        /// Inserta/Actualiza el tipo de Empresa en la BD
        /// </summary>
        /// <param name="tipoEmpresa"></param>
        /// <returns></returns>
        ResultadoOperacionDto GuardarTipoEmpresa(TipoEmpresa tipoEmpresa);

        /// <summary>
        /// Borra el tipo de la empresa por el identificador
        /// </summary>
        /// <param name="idTipoEmpresa"></param>
        void BorrarTipoEmpresa(long idTipoEmpresa);

        /// <summary>
        /// Borra el tipo de empresa logicamente
        /// </summary>
        /// <param name="idTipoEmpresa"></param>
        void BorrarLogicamenteTipoEmpresa(long idTipoEmpresa);

        /// <summary>
        /// Retorna un listado de dtos con la información necesaria para generar el reporte de Excel.
        /// </summary>
        /// <returns>Listado de Dtos.</returns>
        IList<TipoEmpresaExcelDto> ObtenRegistrosReporte();
    }
}
