
using AbaxXBRLBlockStore.Services;
using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.Viewer.Application.Dto;
using Newtonsoft.Json;
using Spring.Transaction;
using Spring.Transaction.Interceptor;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Distribucion.Impl
{
    /// <summary>
    /// Implementación de una distribución de documento de instancia XBRL para invocar los
    /// servicios de almacenamiento en base de datos Mongo
    /// </summary>
    public class DistribucionAlmacenarMongoDBXBRL: DistribucionDocumentoXBRLBase
    {
        /// <summary>
        /// Servicio para el almacenamiento de Mongo
        /// </summary>
        public BlockStoreHechoService BlockStoreHechoService { get; set; }
        /// <summary>
        /// Utiliza los servicios de BlockStore para enviar a base de datos de MONGO 
        /// los datos del documento de instancia
        /// </summary>
        /// <param name="instancia">Documento de instancia a persistir</param>
        /// <param name="parametros">Parámetros adicionales de la distribución</param>
        /// <returns>Resultado de la distribución</returns>
        [Transaction(TransactionPropagation.RequiresNew)]
        public override ResultadoOperacionDto EjecutarDistribucion(DocumentoInstanciaXbrlDto instancia, IDictionary<string, object> parametros)
        {
            LogUtil.Info("Ejecutando Distribución MONGO DB para documento: " + instancia.IdDocumentoInstancia + ", archivo: " + instancia.Titulo);
            var resultado = new ResultadoOperacionDto();
            resultado.Resultado = false;
            try
            {
                resultado = BlockStoreHechoService.registrarHechosDocumentoInstancia(instancia, instancia.IdDocumentoInstancia.Value, instancia.Version);
                
            }
            catch (Exception ex) {
                LogUtil.Error("Ocurrió un error al ejecutar distribución de mongo para documento:" + instancia.IdDocumentoInstancia + ":"+ex.Message);
                LogUtil.Error(ex);
                resultado.Resultado = false;
                resultado.Mensaje = ex.Message;
                resultado.Excepcion = ex.StackTrace;
            }
            return resultado;
        }
    }
}
