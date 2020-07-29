using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRLCore.Common.Dtos.Sincronizacion
{
    /// <summary>
    /// Dto que contiene la información relevante acerca de la ejecución de un proceso de importación de archivos
    /// de sincronización de emisoras de BMV
    /// </summary>
    public class ResultadoProcesoImportacionArchivosBMVDto
    {
        /// <summary>
        /// Fecha y hora en que corre el proceso de importación de archivos de BMV
        /// </summary>
        public DateTime FechaHoraProceso { get; set; }
        /// <summary>
        /// Ruta del archivo de emisoras leido
        /// </summary>
        public String RutaOrigenArchivoEmisoras { get; set; }
        /// <summary>
        /// Ruta del archivo de emisoras respaldado
        /// </summary>
        public String RutaDestinoArchivoEmisoras { get; set; }
        /// <summary>
        /// Ruta de origen del archivo de fideicomisos leido
        /// </summary>
        public String RutaOrigenArchivoFideicomisos { get; set; }
        /// <summary>
        /// Ruta de destino del archivo de fideicomisos 
        /// </summary>
        public String RutaDestinoArchivoFideicomisos { get; set; }
        /// <summary>
        /// Lista procesada de emisoras importada
        /// </summary>
        public List<EmisoraImportadaBMVDto> EmisorasImportadas { get; set; }
        /// <summary>
        /// Lista procesada de fideicomisos importados
        /// </summary>
        public List<FideicomisoImportadoBMVDto> FideicomisosImportados { get; set; }

        public List<String> ErroresGeneralesEmisoras {get;set;}

        public List<String> ErroresGeneralesFideicomisos { get; set; }

        
    }
}
