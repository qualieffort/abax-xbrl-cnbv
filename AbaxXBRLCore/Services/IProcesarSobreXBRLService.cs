using AbaxXBRLCore.Common.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRLCore.Services
{

    /// <summary>
    /// Definición del servicio de negocio para el procesamiento de Sobre XBRL.
    /// </summary>
    public interface IProcesarSobreXBRLService
    {

        /// <summary>
        /// Obtiene un ResultadoRecepcionSobreXBRLDTO dada la ruta del archivo. 
        /// </summary>
        /// <param name="rutaArchivo">Ubicación del archivo.</param>
        /// <returns>ResultadoOperacionDto con el resultado del proceso.</returns>
        ResultadoOperacionDto ObtenerSobreXbrl(string rutaArchivo);

        /// <summary>
        /// Procesa el Xbrl sobre.
        /// </summary>
        /// <param name="rutaArchivo">Ubicación del archivo temporal </param>
        /// <param name="cvePizarra">Clave de la emisora en sesión de STIV.</param>
        /// <returns>ResultadoOperacionDto con el resultado del proceso.</returns>
        ResultadoOperacionDto ProcesarXbrlSobre(string rutaArchivo, string cvePizarra);
    }
}
