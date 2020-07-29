using AbaxXBRLCore.CellStore.Modelo;
using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Viewer.Application.Dto;
using AbaxXBRLCore.Viewer.Application.Dto.Angular;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
namespace AbaxXBRLCore.Services
{
    /// <summary>
    /// Interfaz del servicio que define el comportamiento que debe de tener el componente de validación de documentos XBRL
    /// </summary>
    public interface IConsultaPersonasResponsablesService
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
        /// Obtiene una lista de administradores dado los parámetros.
        /// </summary>
        /// <param name="parametros"></param>
        /// <returns></returns>
        List<Administrador> ObtenerInformacionReporteAdministradores(Dictionary<string, object> parametros);

        /// <summary>
        /// Obtiene una lista de Personas Responsables dado los parámetros.
        /// </summary>
        /// <param name="parametros"></param>
        /// <returns></returns>
        List<PersonaResponsable> ObtenerInformacionReportePersonasResponsables(Dictionary<string, object> parametros);

        /// <summary>
        /// Obtiene la lista del Resumen de Informacón de Reportes 4D.
        /// </summary>
        /// <param name="parametros"></param>
        /// <returns></returns>
        List<ResumenInformacion4DDTO> ObtenerResumenInformaicon4DPorFiltro(Dictionary<string, object> parametros);

        /// <summary>
        /// Obtiene los envíos actuales de la clave de cotización pasada como parámetro.
        /// </summary>
        /// <param name="claveCotizacion"></param>
        /// <returns></returns>
        List<LlaveValorDto> ObtenerAniosEnvioReporteAnual(String claveCotizacion);

        /// <summary>
        /// Obtiene los trimestres de envios ICS, dado la clave de cotización y el año.
        /// </summary>
        /// <param name="claveCotizacion"></param>
        /// <returns></returns>
        List<LlaveValorDto> ObtenerTrimestresICSPorEntidadYAnio(String anio, String claveCotizacion);

    }
}
