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
    /// Interface para el manejo de servicios sobre las consultas de analisis
    /// </summary>
    /// <author>Luis Angel Morales Gonzalez</author>
    public interface IConsultaAnalisisService
    {
        /// <summary>
        /// Obtiene las consultas de analisis de informacion registradas
        /// </summary>
        /// <returns>Resultado de la operacion de la consulta realizada</returns>
        ResultadoOperacionDto ObtenerConsultas();

        /// <summary>
        /// Obtiene las consultas de analisis de informacion registradas por identificador
        /// </summary>
        /// <returns>Resultado de la operacion de la consulta realizada</returns>
        ResultadoOperacionDto ObtenerConsultaPorId(long idConsulta);

        /// <summary>
        /// Elimina una consulta de configuracion de analisis
        /// </summary>
        /// <param name="idConsulta">Identificador unico de la consulta</param>
        /// <returns>Resultado de la operacion de la eliminacion de una consulta</returns>
        ResultadoOperacionDto EliminarConsulta(long idConsulta);


        /// <summary>
        /// Obtiene las consultas de analisis de informacion registradas por el filtro realizado
        /// </summary>
        /// <returns>Resultado de la operacion de la consulta realizada</returns>
        ResultadoOperacionDto ObtenerConsultasPorNombre(string valorConsulta);

        /// <summary>
        /// Registra una consulta de configuracion de analisis
        /// </summary>
        /// <param name="consultaAnalisisDto">Objeto con la informacion de la consulta de configuracion</param>
        /// <returns>Resultado de operacion del registro de analisis</returns>
        ResultadoOperacionDto RegistrarConsultaAnalisis(ConsultaAnalisisDto consultaAnalisisDto);
        


        /// <summary>
        /// Obtiene los contextos de las empresas especificadas que se pueden asignar a la configuracion de la consulta
        /// </summary>
        /// <param name="idEmpresas">Listado de identificadores de empresas</param>
        /// <returns>Resultado de operacion con el estado de la operacion</returns>
        ResultadoOperacionDto ObtenerListadoContextosPorEmpresas(List<ConsultaAnalisisEntidadDto> idEmpresas);


        /// <summary>
        /// Obtiene la informacion del reporte de renglones y columnas de la respuesta de una consulta de configuracion
        /// </summary>
        /// <param name="consiguracionConsulta">Informacion de la consulta realizada</param>
        /// <param name="informacionVersionDocumentos">Listado de versiones de los documentos</param>
        /// <param name="taxonomiaDto">Información de la taxonomia de la configuracion de la consulta</param>
        /// <returns>Diccionario con la informacion de columnas y renglones necesarias para su presentación</returns>
        Dictionary<string, object> ObtenerInformacionConsultaDocumentos(ConsultaAnalisisDto consiguracionConsulta, List<DocumentoInstanciaXbrlDto> informacionVersionDocumentos, TaxonomiaDto taxonomiaDto);


    }
}
