using AbaxXBRLCore.Common.Cache;
using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.Distribucion;
using AbaxXBRLCore.Entities;
using AbaxXBRLCore.Repository;
using AbaxXBRLCore.Repository.Implementation;
using AbaxXBRLCore.Viewer.Application.Dto;
using Newtonsoft.Json;
using Quartz;
using Spring.Context.Support;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Services.Implementation
{
    /// <summary>
    /// Tarea que ejecuta el procesamiento de documentos instancia pendientes de registrar los hechos, contextos de una versión
    /// </summary>
    public class DocumentoPendienteJob : IJob
    {
        private static Object thisLock = new Object();

        /// <summary>
        /// Valor del estatus cuando se termina de procesar de manera correcta
        /// </summary>
        public int ESTATUS_APLICADO = 1;

        /// <summary>
        /// Valor del estatus cuando se termina de procesar de manera incorrecta
        /// </summary>
        public int ESTATUS_ERROR = 2;


        /// <summary>
        /// Valor del estatus de los documentos pendientes de procesar
        /// </summary>
        public int ESTATUS_PENDIENTE = 0;


        /// <summary>
        /// Ejecución del procesamiento de información de un documento instancia pendiente de procesar
        /// </summary>
        /// <param name="context">Información de la ejecución de la tarea</param>
        public void Execute(JobExecutionContext context)
        {
            lock (thisLock) {
                LogUtil.Info("Ejecutando Job para revisar documentos pendientes");

                JobDataMap dataMap = context.JobDetail.JobDataMap;

                var procesarDistribucionService = (IProcesarDistribucionDocumentoXBRLService)dataMap["ProcesarDistribucionDocumentoXBRLService"];
                var almacenarDocumentoService = (IAlmacenarDocumentoInstanciaService)dataMap["AlmacenarDocumentoInstanciaService"];
                var cacheTaxonomia = (ICacheTaxonomiaXBRL) dataMap["CacheTaxonomia"];

                if (procesarDistribucionService == null || almacenarDocumentoService == null || cacheTaxonomia == null)
                {
                    LogUtil.Error("El Job de procesamiento de documentos pendientes no tiene configurados los servicios que requiere");
                    return;
                }

                var ResBitacorasVersionDocumento = almacenarDocumentoService.ObtenerBitacorasVersionDocumentoPendientes();
                if (!ResBitacorasVersionDocumento.Resultado)
                {
                    LogUtil.Error("Ocurrió un error al leer los documentos pendientes:" + ResBitacorasVersionDocumento.Mensaje);
                    return;
                }
                var BitacorasVersionDocumento = (IList<BitacoraVersionDocumento>)ResBitacorasVersionDocumento.InformacionExtra;

                LogUtil.Info("Total de Jobs Pendientes:" + BitacorasVersionDocumento.Count);

                if (BitacorasVersionDocumento.Count > 0)
                {
                    for (var indice = 0; indice < BitacorasVersionDocumento.Count; indice++)
                    {
                        var bitacoraVersionDocumento = BitacorasVersionDocumento[indice];
                                               
                        
                    }
                }

            }
        }
    }
}
