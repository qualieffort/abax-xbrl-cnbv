#region

using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Entities;
using AbaxXBRLCore.Viewer.Application.Dto.Angular;
using AbaxXBRLCore.CellStore.Modelo;
using AbaxXBRLCore.Viewer.Application.Dto;

#endregion

namespace AbaxXBRLCore.Repository
{
    /// <summary>
    ///     Interface del repositorio base para operaciones con la entidad RegistroAuditoria.
    ///     <author>Eric Alan González Fuentes</author>
    ///     <version>1.0</version>
    /// </summary>
    public interface IConsultaPersonasResponsablesRepository
    {

        /// <summary>
        /// Realiza una consluta de documentos con la paginación indicada.
        /// </summary>
        /// <param name="peticionDataTable">DTO con la información de la paginación.</param>
        /// <returns>Paginación evaluada con los datos obtenidos.</returns>
        PeticionInformationDataTableDto<PersonaResponsable> ObtenerInformacionPersonasResponsables(PeticionInformationDataTableDto<PersonaResponsable> peticionDataTable);

        /// <summary>
        /// Realiza una consluta de documentos con la paginación indicada.
        /// </summary>
        /// <param name="peticionDataTable">DTO con la información de la paginación.</param>
        /// <returns>Paginación evaluada con los datos obtenidos.</returns>
        PeticionInformationDataTableDto<Administrador> ObtenerInformacionAdministradores(PeticionInformationDataTableDto<Administrador> peticionDataTable);

        /// <summary>
        /// Realiza una consluta de documentos con la paginación indicada.
        /// </summary>
        /// <param name="peticionDataTable">DTO con la información de la paginación.</param>
        /// <returns>Paginación evaluada con los datos obtenidos.</returns>
        PeticionInformationDataTableDto<ResumenInformacion4DDTO> ObtenerResumenInformacion4D(PeticionInformationDataTableDto<ResumenInformacion4DDTO> peticionDataTable);

        /// <summary>
        /// Obtiene la informacón de Administradores para el Reporte de Excel.
        /// </summary>
        /// <param name="parametros"></param>
        /// <returns></returns>
        List<Administrador> ObtenerInformacionReporteAdministradores(Dictionary<string, object> parametros);

        /// <summary>
        /// Obtiene la informacón de Personas Responsables para el Reporte de Excel.
        /// </summary>
        /// <param name="parametros"></param>
        /// <returns></returns>
        List<PersonaResponsable> ObtenerInformacionReportePersonasResponsables(Dictionary<string, object> parametros);

        /// <summary>
        /// Obtiene la lista del Resumen de Informacón de Reportes 4D.
        /// </summary>
        /// <param name="parametros"></param>
        /// <returns></returns>
        List<ResumenInformacion4DDTO> ObtenerResumenInformacion4DPorFiltro(Dictionary<String, object> parametros);

        /// <summary>
        /// Obtiene los envíos actuales de la clave de cotización pasada como parámetro.
        /// </summary>
        /// <param name="claveCotizacion"></param>
        /// <returns></returns>
        List<LlaveValorDto> ObtenerAniosEnvioReporteAnual(String claveCotizacion);

        /// <summary>
        /// Obtiene los trimestres de envios ICS, dado la clave de cotización y el año.
        /// </summary>
        /// <param name="anio"></param>
        /// <param name="claveCotizacion"></param>
        /// <returns></returns>
        List<LlaveValorDto> ObtenerTrimestresICSPorEntidadYAnio(String anio, String claveCotizacion);

    }
}