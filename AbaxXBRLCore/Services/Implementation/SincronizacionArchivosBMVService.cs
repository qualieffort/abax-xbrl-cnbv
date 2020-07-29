using AbaxXBRLCore.Common.Constants;
using AbaxXBRLCore.Common.Dtos.Sincronizacion;
using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.Entities;
using AbaxXBRLCore.Repository;
using AbaxXBRLCore.Repository.Implementation;
using AbaxXBRLCore.Services.job;
using Quartz;
using Quartz.Impl;
using Spring.Transaction.Interceptor;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Configuration;

namespace AbaxXBRLCore.Services.Implementation
{
    
    /// <summary>
    /// Implementación del servico de sincronización de catálogo de emisoras de BMV a través de archivos
    /// </summary>
    public class SincronizacionArchivosBMVService: ISincronizacionArchivosBMVService
    {
        /// <summary>
        /// Repository para actualizar los datos de las empresas
        /// </summary>
        public IEmpresaRepository EmpresaRepository { get; set; }


        /// <summary>
        /// Repository para actualizar los datos de las empresas
        /// </summary>
        public IEmpresaService EmpresaService { get; set; }


        /// <summary>
        /// Repository para consultar la relación de empresas
        /// </summary>
        public IRelacionEmpresasRepository RelacionEmpresasRepository { get; set; }
        /// <summary>
        /// Repository para tipo relación de empresas
        /// </summary>
        public ITipoRelacionEmpresaRepository TipoRelacionEmpresaRepository { get; set; }

        private static char SEPARADOR_CAMPOS = '|';
        private static string FORMATO_FECHA_ARCHIVOS = "ddMMyyyy";
        [Transaction]
        public ResultadoProcesoImportacionArchivosBMVDto ProcesarArchivosEmisorasBMV(Stream archivoEmisoras, Stream archivoFideicomisos)
        {
            var resultadoProceso = new ResultadoProcesoImportacionArchivosBMVDto();
            resultadoProceso.FechaHoraProceso = DateTime.Now;
            
            resultadoProceso.EmisorasImportadas = new List<EmisoraImportadaBMVDto>();
            resultadoProceso.FideicomisosImportados = new List<FideicomisoImportadoBMVDto>();
            resultadoProceso.ErroresGeneralesEmisoras = new List<String>();
            resultadoProceso.ErroresGeneralesFideicomisos = new List<String>();
            if (archivoEmisoras != null)
            {
                LeerContenidoArchivoEmisoras(resultadoProceso, archivoEmisoras);
            }
            if (archivoFideicomisos != null)
            {
                LeerContenidoArchivoFideicomisos(resultadoProceso, archivoFideicomisos);
            }

            ComplementarListaEmisorasConFideicomisos(resultadoProceso);

            AplicarCambiosEnCatalogEmpresas(resultadoProceso);

            return resultadoProceso;
        }
        /// <summary>
        /// Aplica los cambios al catálog de emisoras leidas del archivo importado
        /// </summary>
        /// <param name="resultadoProceso"></param>
        private void AplicarCambiosEnCatalogEmpresas(ResultadoProcesoImportacionArchivosBMVDto resultadoProceso)
        {
            foreach (var emisoraImportada in resultadoProceso.EmisorasImportadas)
            {
                Debug.WriteLine(emisoraImportada.Clave + "|" + emisoraImportada.ClaveFiduciarioEmisor +
                    "|" + emisoraImportada.EsFideicomiso + "|" + emisoraImportada.RazonSocial + "|" + emisoraImportada.RazonSocialFideicomiso);
            }

            var emisorasEnBD = EmpresaRepository.GetQueryable().Where(x=>(x.Borrado == null || x.Borrado.Value == false));
            var emisoraBDPorNombreCorto = new Dictionary<String, Empresa>();
            foreach(var emBD in emisorasEnBD){
                emisoraBDPorNombreCorto[emBD.NombreCorto] = emBD;
            }

            foreach(var emisoraImportada in resultadoProceso.EmisorasImportadas){
                if (String.IsNullOrEmpty(emisoraImportada.Error))
                {
                    emisoraImportada.TipoMovimiento = TipoMovimiento.SIN_CAMBIOS;

                    if (emisoraImportada.Estatus != null && !emisoraImportada.Estatus.Equals(EstatusEmisora.SUSPENDIDA))
                    {
                        //Insertar emisora si no existe
                        Empresa empresaEncontrada = null;
                        if (emisoraBDPorNombreCorto.ContainsKey(emisoraImportada.Clave))
                        {
                            empresaEncontrada = emisoraBDPorNombreCorto[emisoraImportada.Clave];
                        }
                        if (empresaEncontrada == null)
                        {
                            empresaEncontrada = new Empresa();
                            empresaEncontrada.Borrado = false;
                            empresaEncontrada.RazonSocial = emisoraImportada.EsFideicomiso ? emisoraImportada.RazonSocialFideicomiso : emisoraImportada.RazonSocial;
                            empresaEncontrada.NombreCorto = emisoraImportada.Clave;
                            empresaEncontrada.RFC = emisoraImportada.RFC;
                            empresaEncontrada.Fideicomitente = emisoraImportada.EsFideicomiso;
                            EmpresaRepository.Add(empresaEncontrada);
                            emisoraImportada.IdReferencia = empresaEncontrada.IdEmpresa;
                            emisoraImportada.TipoMovimiento = TipoMovimiento.ALTA;
                        }
                        else
                        {
                            //Verificar si se actualiza la emisora
                            String razolSocialFinal = emisoraImportada.EsFideicomiso ? emisoraImportada.RazonSocialFideicomiso : emisoraImportada.RazonSocial;
                            if (ValorDiferente(empresaEncontrada.RazonSocial, razolSocialFinal) || ValorDiferente(empresaEncontrada.RFC, emisoraImportada.RFC))
                            {
                                empresaEncontrada.RazonSocial = razolSocialFinal;
                                empresaEncontrada.RFC = emisoraImportada.RFC;
                                empresaEncontrada.Fideicomitente = emisoraImportada.EsFideicomiso;
                                emisoraImportada.IdReferencia = empresaEncontrada.IdEmpresa;
                                emisoraImportada.TipoMovimiento = TipoMovimiento.CAMBIO;
                                EmpresaRepository.Update(empresaEncontrada);
                            }
                        }
                    }
                    
                    
                    
                }
            }
            //TODO: On hold, se recomendará que en el archivo de fiduciarios se incluya la clave del fiduciario emisor
            /*
            foreach (var emisoraImportada in resultadoProceso.EmisorasImportadas)
            {
                if (String.IsNullOrEmpty(emisoraImportada.Error) && emisoraImportada.EsFideicomiso && !String.IsNullOrEmpty(emisoraImportada.ClaveFiduciarioEmisor))
                {
                    if (emisoraImportada.Estatus != null && !emisoraImportada.Estatus.Equals(EstatusEmisora.SUSPENDIDA))
                    {
                        //Verificar las relaciones entre fideicomiso y fiduciario
                        Empresa empresaFideicomiso = EmpresaRepository.GetQueryable().Where(x => x.NombreCorto == emisoraImportada.Clave
                            && (x.Borrado == null || x.Borrado.Value == false)).FirstOrDefault();
                        Empresa empresaFiduciario = EmpresaRepository.GetQueryable().Where(x => x.NombreCorto == emisoraImportada.ClaveFiduciarioEmisor &&
                            (x.Borrado == null || x.Borrado.Value == false)).FirstOrDefault();

                        if (empresaFiduciario != null && empresaFideicomiso != null)
                        {
                            var relacionEmpresas = RelacionEmpresasRepository.GetQueryable().
                            Where(x => x.IdEmpresaPrimaria == empresaFiduciario.IdEmpresa &&
                                x.IdEmpresaSecundaria == empresaFideicomiso.IdEmpresa &&
                                x.IdTipoRelacionEmpresa == ConstantsTipoRelacionEmpresa.FIDUCIARIO_DE_FIDEICOMITENTE).
                                FirstOrDefault();
                            if (relacionEmpresas == null)
                            {
                                //Relacionar empresas
                                var relacion = new RelacionEmpresas
                                {
                                    TipoRelacionEmpresa = TipoRelacionEmpresaRepository.GetById(ConstantsTipoRelacionEmpresa.FIDUCIARIO_DE_FIDEICOMITENTE),
                                    IdEmpresaPrimaria = empresaFiduciario.IdEmpresa,
                                    IdEmpresaSecundaria = empresaFideicomiso.IdEmpresa
                                };
                                
                                //RelacionEmpresasRepository.Add(relacion);
                                emisoraImportada.TipoMovimiento = TipoMovimiento.CAMBIO;
                            }
                        }
                    }
                }
            }*/
        }
        /// <summary>
        /// Verifica si las cadenas cambiaron
        /// </summary>
        /// <param name="valorOriginal"></param>
        /// <param name="valorComparar"></param>
        /// <returns></returns>
        private bool ValorDiferente(string valorOriginal, string valorComparar)
        {
            if (valorOriginal == null && valorComparar == null)
            {
                return false;
            }
            if ((valorOriginal == null && valorComparar != null) || (valorOriginal != null && valorComparar == null))
            {
                return true;
            }
            return valorComparar.Equals(valorOriginal);
        }
        /// <summary>
        /// Comeplementa la lista de emisoras con los datos de relación entre fideicomisos y fiduciarios
        /// </summary>
        /// <param name="resultadoProceso"></param>
        private void ComplementarListaEmisorasConFideicomisos(ResultadoProcesoImportacionArchivosBMVDto resultadoProceso)
        {
            var indicePorClaveCotizacion = new Dictionary<String, EmisoraImportadaBMVDto>();
            var indicePorRazonSocial = new Dictionary<String, EmisoraImportadaBMVDto>();
            foreach(var emisoraTmp in resultadoProceso.EmisorasImportadas){
                if(!String.IsNullOrEmpty(emisoraTmp.Clave)){
                    indicePorClaveCotizacion[emisoraTmp.Clave] = emisoraTmp;
                }else{
                    emisoraTmp.TipoMovimiento =  TipoMovimiento.ERROR;
                    emisoraTmp.Error = "Clave de pizarra vacía";
                }
                
            }
            EmisoraImportadaBMVDto emisora = null;

            //Actualizar las razones sociales de los fideicomisos
            foreach (var fideicomiso in resultadoProceso.FideicomisosImportados)
            {
                if (!String.IsNullOrEmpty(fideicomiso.ClaveFideicomiso))
                {
                    if (indicePorClaveCotizacion.ContainsKey(fideicomiso.ClaveFideicomiso))
                    {
                        indicePorClaveCotizacion[fideicomiso.ClaveFideicomiso].RazonSocial = fideicomiso.RazonSocialFideicomitente;
                        indicePorClaveCotizacion[fideicomiso.ClaveFideicomiso].EsFideicomiso = true;
                        indicePorClaveCotizacion[fideicomiso.ClaveFideicomiso].RazonSocialFideicomiso = fideicomiso.RazonSocialFideicomitente;
                    }
                }
            }

            foreach (var emisoraTmp in resultadoProceso.EmisorasImportadas)
            {
                if (!String.IsNullOrEmpty(emisoraTmp.RazonSocial))
                {
                    indicePorRazonSocial[emisoraTmp.RazonSocial] = emisoraTmp;
                }
                else
                {
                    emisoraTmp.TipoMovimiento = TipoMovimiento.ERROR;
                    emisoraTmp.Error = "Razón social vacía";
                }

            }

            


            foreach(var fideicomiso in resultadoProceso.FideicomisosImportados){
                if (!String.IsNullOrEmpty(fideicomiso.ClaveFideicomiso))
                {
                    if (indicePorClaveCotizacion.ContainsKey(fideicomiso.ClaveFideicomiso))
                    {
                        emisora = indicePorClaveCotizacion[fideicomiso.ClaveFideicomiso];
                        
                        if(indicePorRazonSocial.ContainsKey(fideicomiso.RazonSocialFiduciario))
                        {
                            if(!indicePorRazonSocial[fideicomiso.RazonSocialFiduciario].EsFideicomiso){
                                emisora.ClaveFiduciarioEmisor = indicePorRazonSocial[fideicomiso.RazonSocialFiduciario].Clave;
                            }
                            
                        }else{
                            fideicomiso.TipoMovimiento = TipoMovimiento.ERROR;
                            fideicomiso.Error = "Emisora fiduciaria no encontrada utilizando el dato razón social";
                        }
                    }
                    else
                    {
                        fideicomiso.TipoMovimiento = TipoMovimiento.ERROR;
                        fideicomiso.Error = "Fideicomiso no existe en la lista de emisoras";
                    }
                }
                else
                {
                    fideicomiso.TipoMovimiento = TipoMovimiento.ERROR;
                    fideicomiso.Error = "Clave de fideicomiso vacía";
                }
            }
        }
        /// <summary>
        /// Parsea el contenido del archivo de emisoras, coloca los errores y los valores leidos en las listas correspondientes
        /// </summary>
        /// <param name="resultadoProceso">Objecto destino para los datos o errores</param>
        private void LeerContenidoArchivoEmisoras(ResultadoProcesoImportacionArchivosBMVDto resultadoProceso,Stream archivoEmisora)
        {
            var emisorasPorClave = new Dictionary<String, String>();
            using (var stReader = new System.IO.StreamReader(archivoEmisora))
            {
                String linea = null;
                long numLinea = 1;

                while ((linea = stReader.ReadLine()) != null)
                {
                    
                    try
                    {
                        var emisoraLeida = PocesarDatosEmisora(linea, numLinea);
                        if (!String.IsNullOrEmpty(emisoraLeida.Clave))
                        {
                            if (!emisorasPorClave.ContainsKey(emisoraLeida.Clave))
                            {
                                resultadoProceso.EmisorasImportadas.Add(emisoraLeida);
                                emisorasPorClave[emisoraLeida.Clave] = emisoraLeida.Clave;
                            }
                        }
                        else
                        {
                            resultadoProceso.ErroresGeneralesEmisoras.Add("Emisora leída sin clave de cotización: línea :" + numLinea );
                        }
                    }
                    catch (Exception ex)
                    {
                        resultadoProceso.ErroresGeneralesEmisoras.Add("Línea: " + numLinea + ":" + ex.Message);
                    }
                    
                    numLinea++;
                }
            }
            
        }
        /// <summary>
        /// Parsea el contenido del archivo de fideicomisos, coloca los errores y los valores leidos en las listas correspondientes
        /// </summary>
        /// <param name="resultadoProceso">Objecto destino para los datos o errores</param>
        private void LeerContenidoArchivoFideicomisos(ResultadoProcesoImportacionArchivosBMVDto resultadoProceso, Stream archivoFideicomiso)
        {
            using (var stReader = new System.IO.StreamReader(archivoFideicomiso))
            {
                String linea = null;
                long numLinea = 1;
                var fideicomisosPorClave = new Dictionary<String, String>();
                while ((linea = stReader.ReadLine()) != null)
                {

                    try
                    {
                        var fideicomisoLeido = PocesarDatosFideicomiso(linea, numLinea);
                        if (!String.IsNullOrEmpty(fideicomisoLeido.ClaveFideicomiso))
                        {
                            if (!fideicomisosPorClave.ContainsKey(fideicomisoLeido.ClaveFideicomiso))
                            {
                                resultadoProceso.FideicomisosImportados.Add(fideicomisoLeido);
                                fideicomisosPorClave[fideicomisoLeido.ClaveFideicomiso] = fideicomisoLeido.ClaveFideicomiso;
                            }
                        }
                        else
                        {
                            resultadoProceso.ErroresGeneralesFideicomisos.Add("Fideicomiso leído sin clave de cotización: línea :" + numLinea);
                        }
                    }
                    catch (Exception ex)
                    {
                        resultadoProceso.ErroresGeneralesFideicomisos.Add("Línea: " + numLinea + ":" + ex.Message);
                    }

                    numLinea++;
                }
            }
        }
        /// <summary>
        /// Parsea los datos de una emisora del archivo de sincronización de bmv
        /// </summary>
        /// <param name="linea">Datos de origen</param>
        /// <returns>Emisora parseada</returns>
 
        private EmisoraImportadaBMVDto PocesarDatosEmisora(string linea, long numLinea)
        {
            String[] partes = linea.Split(SEPARADOR_CAMPOS);
            if (partes.Length != 5)
            {
                throw new Exception("Error en formato, cadena separada en un número diferente de 5 partes ("+partes.Length+")");
            }
            var emisora = new EmisoraImportadaBMVDto();
            emisora.Clave = partes[0];
            emisora.RazonSocial = partes[1];
            emisora.RFC = partes[2];
            emisora.FechaInscripcion = partes[3];
            emisora.Estatus = partes[4];
            emisora.NumeroLinea = numLinea;
            return emisora;
        }
        /// <summary>
        /// Parsea los datos de un fideicomiso del archivo de sincronización de bmv
        /// </summary>
        /// <param name="linea">Datos de origen</param>
        /// <returns>Fideicomiso parseado</returns>

        private FideicomisoImportadoBMVDto PocesarDatosFideicomiso(string linea, long numLinea)
        {
            String[] partes = linea.Split(SEPARADOR_CAMPOS);
            if (partes.Length != 4)
            {
                throw new Exception("Error en formato, cadena separada en un número diferente de 4 partes (" + partes.Length + ")");
            }
            var fideicomiso = new FideicomisoImportadoBMVDto();
            fideicomiso.ClaveFideicomiso = partes[0];
            fideicomiso.NumeroFideicomiso = partes[1];
            fideicomiso.RazonSocialFiduciario = partes[2];
            fideicomiso.RazonSocialFideicomitente = partes[3];
            fideicomiso.NumeroLinea = numLinea;
            return fideicomiso;
        }
        /// <summary>
        /// Determina si el JOB esta en ejecución.
        /// </summary>
        /// <param name="jobName">Nombre del JOB</param>
        /// <param name="jobGroup">Grupo al que pertenece.</param>
        /// <param name="scheduler">Esquema de ejecución.</param>
        /// <returns>Si existe el JOB indicado.</returns>
        private bool EstaCorriendoJob(String jobName, String jobGroup, IScheduler scheduler)
        {
            var enEjecucion = false;
            try
            {
                
                foreach (JobExecutionContext jobCtx in scheduler.GetCurrentlyExecutingJobs())
                {
                    var itemJobName = jobCtx.JobDetail.Name;
                    var itemGroupName = jobCtx.JobDetail.Group;
                    if (!String.IsNullOrWhiteSpace(itemJobName) && itemJobName.ToLower().Equals(jobName.ToLower()))
                    {
                        if (!String.IsNullOrWhiteSpace(jobGroup))
                        {
                            if (String.IsNullOrWhiteSpace(itemGroupName) || !itemGroupName.ToLower().Equals(jobGroup.ToLower()))
                            {
                                continue;
                            }
                        }
                        enEjecucion = true;
                        break;
                    }
                }
            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
            }
            return enEjecucion;
        }

        /// <summary>
        /// Inicia el proceso de sincronizacion de emsioras
        /// </summary>
        public void InicializarProcesoSincronizacionEmisoras()
        {
            try
            {
                ISchedulerFactory schedFact = new StdSchedulerFactory();
                IScheduler sched = schedFact.GetScheduler();
                sched.Start();
                var jobName = "ProcesarImportacionArchivoBMVJob";
                if (EstaCorriendoJob(jobName, null, sched))
                {
                    LogUtil.Error("Ya se esta ejecutando el JOB \"" + jobName + "\" en el sistema.");
                    return;
                }
                JobDetail jobDetail = new JobDetail(jobName, null, typeof(ProcesarImportacionArchivoBMVJob));
                jobDetail.JobDataMap["emisoraService"] = EmpresaService;


                var cronExpressionString = WebConfigurationManager.AppSettings["cronExpressionString"];

                if (cronExpressionString != null)
                {
                    CronTrigger trigger = new CronTrigger();
                    trigger.CronExpressionString = cronExpressionString;
                    trigger.Group = "sincronizacion";
                    trigger.Description = "Ejecucion del cron para el procesamiento de importacion de emisoras y fideicomisos de la bmv";
                    trigger.JobName = "ProcesarImportacionArchivoBMVJob";
                    trigger.Name = "sincronizarEmisorasTrigger";

                    var existingsJobs = sched.GetCurrentlyExecutingJobs();

                    sched.ScheduleJob(jobDetail, trigger);
                }
            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
            }
        }

    }
}
