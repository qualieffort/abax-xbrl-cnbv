using AbaxXBRLCore.CellStore.DTO;
using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Common.Entity;
using AbaxXBRLCore.Viewer.Application.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRLCore.CellStore.Services
{
    /// <summary>
    /// Definicion del servicio para el manejo de la persistencia.
    /// </summary>
    interface IAbaxXBRLCellStoreService
    {
        /// <summary>
        /// Extrae la información del documento de instancia al modelo de DTOS.
        /// </summary> 
        /// <param name="instancia">Documento de instancia a procesar.</param>
        /// <param name="parametros">Diccionario de parámetros adicionales.</param>
        /// <returns>Resultado de la operación.</returns>
        ResultadoOperacionDto ExtraeModeloDocumentoInstancia(DocumentoInstanciaXbrlDto instancia, IDictionary<string, object> parametros);

        /// <summary>
        /// Persiste el modelo en la base de datos de mongo.
        /// </summary>
        /// <param name="estructuraMapeo">Persiste el moodelo en mongo.</param>
        /// <returns>Resultado de la operación.</returns>
        ResultadoOperacionDto PersisteModeloCellstoreMongo(EstructuraMapeoDTO estructuraMapeo);

        /// <summary>
        /// Persiste la información del documento en la Base de Datos relacional y en la base de datos de Mongo.
        /// </summary>
        /// <param name="instancia">Documento a procesar.</param>
        /// <param name="parametros">Diccionario de parámetros adicionales.</param>
        /// <returns>Resultado de la operación.</returns>
        ResultadoOperacionDto PersisteInformacion(DocumentoInstanciaXbrlDto instancia, IDictionary<string, object> parametros);
        /// <summary>
        /// Ejecuta una consulta al repositorio de Mongo.
        /// Si no se indica la página inicia desde el primer elemento.
        /// Si no se indica le número de registros se retorna todo el universo de datos.
        /// </summary>
        /// <param name="filtrosString">Filtros de la consulta.</param>
        /// <returns>Listado con la representación JSON de los elementos encontrados para el filtro, ordenamiento y página dados.</returns>
        IList<T> ConsultaElementosColeccion<T>(string filtrosString);
        /// <summary>
        /// Consultar taxonomias que tengan datos en las taxonomias
        /// </summary>
        /// <returns>Resultado con un listado de nombres de taxonomias</returns>
        ResultadoOperacionDto ConsultarTaxonomias();
        /// <summary>
        /// Consultar los conceptos que se tienen registrados
        /// </summary>
        /// <param name="taxonomia"></param>
        /// <returns>Resultado con un listado de conceptos</returns>
        ResultadoOperacionDto ConsultarConceptos(String taxonomia);
        /// <summary>
        /// Realiza las consultas de las emisoras
        /// </summary>
        /// <returns>Resultado con las emisoras que se tienen cargadas</returns>
        ResultadoOperacionDto ConsultarEmisoras();
        /// <summary>
        /// Consultar unidades que se tengan disponibles en los registros
        /// </summary>
        /// <returns>Resultado con un listado de unidades</returns>
        ResultadoOperacionDto ConsultarUnidades();
        /// <summary>
        /// Realiza la consulta al respositorio con los filtros indicados
        /// </summary>
        /// <param name="filtrosConsultaJson">Detalle de filtros de consulta para la informacion de repositorio xbrl en mongo</param>
        /// <returns>Resultao de operacion de la consulta al repositorio de informacion</returns>
        ResultadoOperacionDto ConsultarRepositorio(EntFiltroConsultaHecho filtrosConsulta, int paginaRequerida, int numeroRegistros);
        /// <summary>
        /// Consulta el total de registros que tiene cierta consulta de informacion del repositorio
        /// </summary>
        /// <param name="filtrosConsulta">Filtros de consutla para realizar los valores de conteo</param>
        /// <returns>Estado de paginacion</returns>
        long ObtenerNumeroRegistrosConsultaHechos(EntFiltroConsultaHecho filtrosConsulta);
    }
}
