using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRLCore.Common.Dtos.Sincronizacion
{
    /// <summary>
    /// Dto que contiene la información relevante acerca de la ejecución de un proceso de importación de archivos
    /// de sincronización de emisoras de BMV
    /// </summary>
    public class InformacionProcesoImportacionArchivosBMVDto
    {
        /// <summary>
        /// Fecha y hora en que corre el proceso de importación de archivos de BMV
        /// </summary>
        public DateTime FechaHoraProcesamiento { get; set; }
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

        /// <summary>
        /// Indica el listado de errores presentados en el procesamiento de la carga de emisoras
        /// </summary>
        public List<String> erroresGeneralesEmisoras {get;set;}

        /// <summary>
        /// Indica el listado de errores presentados en el procesamiento de la carga de fideicomisos
        /// </summary>
        public List<String> erroresGeneralesFideicomisos { get; set; }
        
        /** Stream que contiene el archivo con la ifnormacion de la emisora */
        public Stream archivoEmisoras { get; set; }

        /** Stream que contiene el archivo con la ifnormacion de los fideicomisos */
        public Stream archivoFideicomisos { get; set; }

        /// <summary>
        /// Indica el estatus del proceso de sincronizacion de archivos de la BMV
        /// </summary>
        public int Estatus { get; set; }


        /// <summary>
        /// Indica el numero de emisoras reportadas en el archivo
        /// </summary>
        public int NumeroEmisorasReportadas { get; set; }

        /// <summary>
        /// Indica el numero de fideicomisos reportados
        /// </summary>
        public int NumeroFideicomisosReportados { get; set; }

        /// <summary>
        /// Indica la informacion de salida del proceso realizado 
        /// </summary>
        public String InformacionSalida { get; set; }

        /// <summary>
        /// Indica el estado del procesamiento del archivo enviado por la BMV
        /// </summary>
        public String DescripcionEstado { get; set; }




    }
}
