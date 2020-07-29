using AbaxXBRLCore.Common.Dtos.Sincronizacion;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRLCore.Services
{
    /// <summary>
    /// Define la interfaz de negocio para el servicio de sincronización del catálogo de emisoras 
    /// a través de archivos de BMV
    /// </summary>
    public interface ISincronizacionArchivosBMVService
    {
        /// <summary>
        /// Procesa el par de archivo de emisoras enviado por BMV, parsea los registros dentro de cada archivo
        /// y aplica los cambios en el catálogo de entidades
        /// </summary>
        /// <param name="archivoEmisoras">Contenido del archivo de emisoras</param>
        /// <param name="archivoFideicomisos">Contenido del archivo de fideicomisos</param>
        /// <returns>DTO con el resultado total del proceso de importación</returns>
        ResultadoProcesoImportacionArchivosBMVDto ProcesarArchivosEmisorasBMV(Stream archivoEmisoras, Stream archivoFideicomisos);
    }
}
