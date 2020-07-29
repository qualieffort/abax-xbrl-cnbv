using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Viewer.Application.Dto;
using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.CellStore.DTO;
using AbaxXBRLCore.CellStore.Services.Impl;
using Spring.Transaction;
using Spring.Transaction.Interceptor;

namespace AbaxXBRLCore.Distribucion.Impl
{
    /// <summary>
    /// Distribución a la base de datos de Cell Store.
    /// </summary>
    class DistribucionCellStoreXBRL : DistribucionDocumentoXBRLBase
    {
        /// <summary>
        /// Servico a probar.
        /// </summary>
        public AbaxXBRLCellStoreService AbaxXBRLCellStoreService { get; set; }
        [Transaction(TransactionPropagation.RequiresNew)]
        public override ResultadoOperacionDto EjecutarDistribucion(DocumentoInstanciaXbrlDto instancia, IDictionary<string, object> parametros)
        {
            LogUtil.Info("Ejecutando Distribución CELL STORE DB para documento: " + instancia.IdDocumentoInstancia + ", archivo: " + instancia.Titulo);
            var resultado = new ResultadoOperacionDto()
            {
                Resultado = true,
                Mensaje = "OK"
            };
            try
            {
                resultado = AbaxXBRLCellStoreService.ExtraeModeloDocumentoInstancia(instancia, parametros);
                if (resultado.Resultado)
                {
                    var modelo = (EstructuraMapeoDTO)resultado.InformacionExtra;
                    resultado = AbaxXBRLCellStoreService.PersisteModeloCellstoreMongo(modelo);
                }
            }
            catch (Exception ex)
            {
                LogUtil.Error("Ocurrió un error al ejecutar distribución de mongo para documento:" + instancia.IdDocumentoInstancia + ":" + ex.Message);
                LogUtil.Error(ex);
                resultado.Resultado = false;
                resultado.Mensaje = ex.Message;
                resultado.Excepcion = ex.StackTrace;
            }
            return resultado;
        }
    }
}
