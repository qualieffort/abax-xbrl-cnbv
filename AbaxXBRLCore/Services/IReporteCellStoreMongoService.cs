using AbaxXBRLCore.Common.Dtos;
using System;
using System.Collections.Generic;

namespace AbaxXBRLCore.Services
{
    /// <summary>
    /// Interfaz del servicio de negocio que define la funcionalidad del Reporte Ficha Administrativa     
    /// </summary>
    public interface IReporteCellStoreMongoService
    {

        /// <summary>
        /// Genera el reporte de Calculo de Materialidad.       
        /// </summary>
        /// <param name="parametrosReporte"></param>
        /// <returns></returns>
        ResultadoOperacionDto GenerarReporteCalculoMaterialidad(IDictionary<String, object> parametrosReporte, IDictionary<String, object> datosReporte);

        /// <summary>
        /// Genera el reporte de Eventos Relevantes y Principales Cuentas del Sector.
        /// </summary>
        /// <param name="sector"></param>
        /// <param name="subSector"></param>
        /// <param name="ramo"></param>
        /// <param name="listaEmisoras"></param>
        /// <param name="trimestre"></param>
        /// <param name="anio"></param>
        /// <returns></returns>
        ResultadoOperacionDto GenerarReporteERyPCS(String sector, String subSector, String ramo, String[] listaEmisoras, String trimestre, int anio);

        /// <summary>
        /// Obtiene el listado de LLave, Valor de los Sectores existentes.
        /// </summary>
        /// <returns></returns>
        ResultadoOperacionDto ObtenerSectores();

        /// <summary>
        /// Obtiene los subsectores existentes dado el identificador del sector.
        /// </summary>
        /// <param name="idSector">Identificador del sector.</param>
        /// <returns></returns>
        ResultadoOperacionDto ObtenerSubSectores(int idSector);

        /// <summary>
        /// Obtiene los ramos existentes dado el identificador del subsector.
        /// </summary>
        /// <param name="subSector">Identificador del subsector.</param>
        /// <returns></returns>
        ResultadoOperacionDto ObtenerRamos(int subSector);

        /// <summary>
        /// Obtiene las claves de cotizacion de las emisoras dado el ramo al que pertenecen.
        /// </summary>
        /// <param name="idRamo">Identificador del ramo.</param>
        /// <returns></returns>
        ResultadoOperacionDto ObtenerEmisorasPorRamo(int idRamo);

        /// <summary>
        /// Obtiene los años de los envios existentes de taxos IFRS, dado las claves de cotización.
        /// </summary>
        /// <param name="clavesCotizacionEmisoras"></param>
        /// <returns></returns>
        ResultadoOperacionDto ObtenerAniosEnvioIFRS(String[] clavesCotizacionEmisoras);

        /// <summary>
        /// Obtiene los trimestres existentes (sin repetir) de los envios realizados de taxos IFRS, dado las claves de cotización y años.
        /// </summary>
        /// <param name="clavesCotizacionEmisoras"></param>
        /// <param name="anios"></param>
        /// <returns></returns>
        ResultadoOperacionDto ObtenerTrimestreEnvioIFRS(String[] clavesCotizacionEmisoras, List<int> anios);
        
    }
}
