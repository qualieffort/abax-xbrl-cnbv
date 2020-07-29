using AbaxXBRLCore.Common.Constants;
using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.Entities;
using AbaxXBRLCore.Repository;
using AbaxXBRLCore.Viewer.Application.Import;
using Spring.Transaction;
using Spring.Transaction.Interceptor;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Distribucion.Impl
{
    /// <summary>
    /// Implementación de una distribución de documentode instancia que toma los datos del documento
    /// y los exporta a formato archivo de Excel: Ya sea con una plantilla de exportación o utilizando un 
    /// exportador genérico
    /// </summary>
    class DistribucionExportarExcelXBRL : DistribucionDocumentoXBRLBase
    {
        /// <summary>
        /// Ruta física de destino de los archivos Excel generados
        /// </summary>
        public string RutaDestino { get; set; }

        /// <summary>
        /// Servicio de exportación de ABAX
        /// </summary>
        public IImportadorExportadorArchivoADocumentoInstancia ExportadorDocumentoInstancia { get; set; }

        /// <summary>
        /// Repository para la consulta de los archivos asociados a un documento instancia XBRL.
        /// </summary>
        public IArchivoDocumentoInstanciaRepository ArchivoDocumentoInstanciaRepository { get; set; }

        /// <summary>
        /// Realiza la ejecucuión de esta distribución creando un archivo de Excel
        /// </summary>
        /// <param name="instancia">Documento de instancia a procesar</param>
        /// <param name="parametros">Parametros adicionales de distribución</param>
        /// <returns>Resultado de le operación de creación de archivo excel</returns>
        [Transaction(TransactionPropagation.RequiresNew)]
        public override ResultadoOperacionDto EjecutarDistribucion(Viewer.Application.Dto.DocumentoInstanciaXbrlDto instancia, IDictionary<string, object> parametros)
        {
            var resultadoExportacion = new ResultadoOperacionDto();
            resultadoExportacion.Resultado = false;
            try{
                LogUtil.Info("Ejecutando Distribución EXCEL para documento: " + instancia.IdDocumentoInstancia + ", archivo: " + instancia.Titulo);
                resultadoExportacion = ExportadorDocumentoInstancia.ExportarDocumentoExcel(instancia, "es");
                if (resultadoExportacion.Resultado) {
                        if (resultadoExportacion.InformacionExtra != null)
                        {
                            var infoExtra = ((IDictionary<string, object>)resultadoExportacion.InformacionExtra);
                            if (infoExtra.ContainsKey("errores") && ((List<InformeErrorImportacion>)infoExtra["errores"]).Count > 0)
                            {
                                resultadoExportacion.Resultado = false;
                                resultadoExportacion.Mensaje = "";
                                foreach (var informeError in (List<InformeErrorImportacion>)infoExtra["errores"])
                                {
                                    resultadoExportacion.Mensaje = resultadoExportacion.Mensaje + informeError.Mensaje + " ";
                                }
                            }
                        }
                        ArchivoDocumentoInstancia archivo = new ArchivoDocumentoInstancia();
                        archivo.Archivo = (byte[])((IDictionary<string, object>)resultadoExportacion.InformacionExtra)["archivo"];
                        archivo.IdDocumentoInstancia = (long)instancia.IdDocumentoInstancia;
                        archivo.IdTipoArchivo = TipoArchivoConstants.ArchivoXls;

                        ArchivoDocumentoInstanciaRepository.AgregaDistribucion(archivo);

                        resultadoExportacion.Resultado = true;
                    }
                
            }
            catch (Exception ex)
            {
                resultadoExportacion.Resultado = false;
                resultadoExportacion.Mensaje = "Ocurrió un error al escribir el archivo excel:" + ex.Message;
                resultadoExportacion.Excepcion = ex.StackTrace;
                LogUtil.Info("Falló Distribución EXCEL para documento: " + instancia.IdDocumentoInstancia + ", archivo: " + instancia.Titulo + ":" + ex.Message);
            }
            return resultadoExportacion;
        }
    }
}
