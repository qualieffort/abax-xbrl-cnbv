using AbaxXBRLCore.Common.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRLCore.Services
{
    /// <summary>
    /// Interfaz del servicio de negocio que define la funcionalidad del Reporte Ficha Administrativa     
    /// </summary>
    public interface IReporteFichaAdministrativaService
    {

        /// <summary>
        /// Genera el reporte de ficha técnica de la emisora y lo retorna en los formatos 
        /// en el mapa de información extra         
        /// </summary>
        /// <param name="parametrosReporte"></param>
        /// <returns></returns>
        ResultadoOperacionDto GenerarFichaAdministrativaEmisora(IDictionary<String, String> parametrosReporte);
    }
}
