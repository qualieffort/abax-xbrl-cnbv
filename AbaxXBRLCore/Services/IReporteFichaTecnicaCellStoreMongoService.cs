using AbaxXBRLCore.Common.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRLCore.Services
{
    /// <summary>
    /// Interfaz del servicio de negocio que define la funcionalidad de los reportes 
    /// que consumen información del cell store de mongo db
    /// </summary>
    public interface IReporteFichaTecnicaCellStoreMongoService
    {

        
        /// <summary>
        /// Genera el reporte de ficha técnica de la emisora y lo retorna en los formatos 
        /// en el mapa de información extra
        /// PDF : formato en reporte PDF  
        /// </summary>
        /// <param name="parametrosReporte">Parámetro necesarios para la elaboración de reporte: Parámetros
        /// ticker: Clave de cotización de la emisora
        /// year: Año de referencia del reporte
        /// </param>
        /// <returns></returns>
        ResultadoOperacionDto GenerarFichaTecnicaEmisora(IDictionary<String,String> parametrosReporte);

    }
}
