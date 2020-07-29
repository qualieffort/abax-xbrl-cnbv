#region

using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Entities;
using AbaxXBRLCore.Viewer.Application.Dto.Angular;

#endregion

namespace AbaxXBRLCore.Repository
{
    /// <summary>
    ///     Interface del repositorio base para operaciones con la entidad RegistroAuditoria.
    ///     <author>Eric Alan González Fuentes</author>
    ///     <version>1.0</version>
    /// </summary>
    public interface IConsultaEnviosTaxonomiaRepository
    {
        

        /// <summary>
        /// Realiza una consluta de documentos con la paginación indicada.
        /// </summary>
        /// <param name="peticionDataTable">DTO con la información de la paginación.</param>
        /// <returns>Paginación evaluada con los datos obtenidos.</returns>
        PeticionInformationDataTableDto<EnviosTaxonomiaDto> ObtenerInformacionConsultaEnviosTaxonomia(PeticionInformationDataTableDto<EnviosTaxonomiaDto> peticionDataTable);

        /// <summary>
        /// Obtiene la informacón de Administradores para el Reporte de Excel.
        /// </summary>
        /// <param name="parametros"></param>
        /// <returns></returns>
        List<EnviosTaxonomiaDto> ObtenerInformacionReporteConsultaEnviosTaxonomias(Dictionary<string, object> parametros);

        /// <summary>
        /// Obtiene una lista de Número de fideicomisos
        /// </summary>
        /// <returns></returns>
        List<string> OntenerNumeroFideicomisos();
    }
}