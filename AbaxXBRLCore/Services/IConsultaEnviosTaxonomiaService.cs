using AbaxXBRLCore.Common.Dtos;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using AbaxXBRLCore.Viewer.Application.Dto.Angular;
namespace AbaxXBRLCore.Services
{
    /// <summary>
    /// Interfaz del servicio que define el comportamiento que debe de tener el componente de validación de documentos XBRL
    /// </summary>
    public interface IConsultaEnviosTaxonomiaService
    {


        /// <summary>
        /// Realiza una consluta de documentos con la paginación indicada.
        /// </summary>
        /// <param name="peticionDataTable">DTO con la información de la paginación.</param>
        /// <returns>Paginación evaluada con los datos obtenidos.</returns>
        PeticionInformationDataTableDto<EnviosTaxonomiaDto> ObtenerInformacionConsultaEnviosTaxonomia(PeticionInformationDataTableDto<EnviosTaxonomiaDto> peticionDataTable);

        /// <summary>
        /// Obtiene una lista de Taxonomias Enviadas  dado los parámetros.
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
