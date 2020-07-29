using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Common.Dtos.Sincronizacion;
using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.Services;
using Quartz;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Configuration;


namespace AbaxXBRLCore.Services.job
{
    /**
     * Proceso para sincronizar las emisoras y fideicomisos de la Bolsa Mexicana de Valores
     */
    public class ProcesarImportacionArchivoBMVJob : IJob
    {
        public void Execute(JobExecutionContext context)
        {

            var pathArchivosPendientesBMV = WebConfigurationManager.AppSettings["pathArchivosPendientesBMV"];

            var emisoraArchivoNombre = WebConfigurationManager.AppSettings["emisoraArchivoNombre"];
            var fideicomisoArchivoNombre = WebConfigurationManager.AppSettings["fideicomisoArchivoNombre"];

            
            Stream emisorasStream = null;
            Stream fideicomisosStream = null;

            //DirectoryInfo directoryInfo = new DirectoryInfo(@pathArchivosPendientesBMV);
            string[] filesInDirectory = Directory.GetFiles(@pathArchivosPendientesBMV, "*.txt", SearchOption.TopDirectoryOnly);


            string emisorasPath = null;
            string fideicomisosPath = null;

            foreach (string archivoAProcesar in filesInDirectory)
            {
                if (archivoAProcesar.Contains(emisoraArchivoNombre))
                    emisorasPath = archivoAProcesar;
                if (archivoAProcesar.Contains(fideicomisoArchivoNombre))
                    fideicomisosPath = archivoAProcesar;
            }

            try
            {

                JobDataMap dataMap = context.JobDetail.JobDataMap;
                var empresaService = (IEmpresaService)dataMap["emisoraService"];


                //var empresaService = (IEmpresaService)ServiceLocator.ObtenerFabricaSpring().GetObject("EmpresaService");
                 
                emisorasStream = emisorasPath != null ? File.OpenRead(@emisorasPath) : null;
                fideicomisosStream = fideicomisosPath != null ? File.OpenRead(@fideicomisosPath) : null;


                var infoProcesoImportacionDto  = new  InformacionProcesoImportacionArchivosBMVDto();
                infoProcesoImportacionDto.archivoFideicomisos = fideicomisosStream;
                infoProcesoImportacionDto.archivoEmisoras = emisorasStream;
                infoProcesoImportacionDto.RutaOrigenArchivoEmisoras = emisorasPath!=null? emisorasPath : "Sin informacion";
                infoProcesoImportacionDto.RutaOrigenArchivoFideicomisos = fideicomisosPath!=null? fideicomisosPath:"Sin informacion";
                infoProcesoImportacionDto.RutaDestinoArchivoEmisoras = emisorasPath != null ? emisorasPath : "Sin informacion";
                infoProcesoImportacionDto.RutaDestinoArchivoFideicomisos = fideicomisosPath != null ? fideicomisosPath : "Sin informacion";

                //Ejecucion del metodo
                var resultadoOperacion = empresaService.ProcesarImportacionArchivosBMV(infoProcesoImportacionDto) ;

                if (emisorasStream != null)
                    emisorasStream.Close();
                if (fideicomisosStream != null)
                    fideicomisosStream.Close();

                moverArchivos(emisorasPath, fideicomisosPath, resultadoOperacion.Resultado);
                moverArchivosEnPendientesANoProcesados();


            }
            catch (Exception e)
            {
                if (emisorasStream != null)
                    emisorasStream.Close();
                if (fideicomisosStream != null)
                    fideicomisosStream.Close();
                LogUtil.Error("***********************ERROR EN EL PROCESAMIENTO DE LA CARGA DE ARCHIVOS PARA SINCRONIZAR DE LA BMV ****************************************************");
                LogUtil.Error("aRCHIVO emisorasPath:" + emisorasPath);
                LogUtil.Error("aRCHIVO fideicomisosPath:" + fideicomisosPath);
                LogUtil.Error(e);
            }
        }

        /**
         * Metodo que nos apoya en mover todos los archivos de una ruta especifica a la carpeta de procesados o con error
         * @param ubicacionArchivoEmisoras Ubicacion del archivo de emisoras
         * @param ubicacionArchivoFideicomisos Ubicacion del archivo de fideicomisos
         * @param esCarpetaExito Indica si la carpeta es la de exito o es carpeta de error  
         * */
        private void moverArchivos(String ubicacionArchivoEmisoras, String ubicacionArchivoFideicomisos, Boolean esCarpetaExito)
        {


            var pathArchivosSalida = esCarpetaExito ? WebConfigurationManager.AppSettings["pathArchivosProcesadosBMV"] : WebConfigurationManager.AppSettings["pathArchivosErrorBMV"];

            if (ubicacionArchivoEmisoras != null)
            {
                FileInfo infoEmisora = new FileInfo(ubicacionArchivoEmisoras);
                File.Move(@ubicacionArchivoEmisoras, @pathArchivosSalida + infoEmisora.Name);
            }


            if (ubicacionArchivoFideicomisos != null)
            {
                FileInfo infoFideicomiso = new FileInfo(ubicacionArchivoFideicomisos);
                File.Move(@ubicacionArchivoFideicomisos, @pathArchivosSalida + infoFideicomiso.Name);
            }

        }


        /**
         * Obtiene todos los archivos que no se van a procesar por que el directorio tiene mas de los que se esperaban y los manda a la carpeta de error definida indicando los archivos que se realizo la acción
         
         * */
        private void moverArchivosEnPendientesANoProcesados()
        {
            var pathArchivosPendientesBMV = WebConfigurationManager.AppSettings["pathArchivosPendientesBMV"];
            var pathArchivosErrorBMV = WebConfigurationManager.AppSettings["pathArchivosErrorBMV"];

            string[] filesInDirectory = Directory.GetFiles(@pathArchivosPendientesBMV);
            LogUtil.Error("***********************SE MUEVEN LOS ARCHIVOS QUE SE ENCUENTRAN EN LA CARPETA DE PENDIENTES A LA CARPETA DE ERROR YA QUE SON ARCHIVOS QUE SESTAN DE MAS ****************************************************");

            foreach (string archivoEnDirectorioAMover in filesInDirectory)
            {
                FileInfo infoArchivo = new FileInfo(archivoEnDirectorioAMover);
                File.Move(@archivoEnDirectorioAMover, @pathArchivosErrorBMV + infoArchivo.Name);
                LogUtil.Error("Se mueve el archivo:  " + archivoEnDirectorioAMover + " a lacarpeta de error : " + pathArchivosErrorBMV + infoArchivo.FullName);
            }

        }
    }
}