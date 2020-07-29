using AbaxXBRLCore.Common.Constants;
using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.Entities;
using AbaxXBRLCore.Reports.Builder.Factory;
using AbaxXBRLCore.Reports.Exporter.Impl;
using AbaxXBRLCore.Repository;
using AbaxXBRLCore.Viewer.Application.Import;
using Spring.Messaging.Ems.Common;
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
    /// Implementación de una distribución de documento de instancia XBRL para la creación de un documento
    /// PDF con el contenido del documento.
    /// El archivo se escribe a una ruta física predeterminada
    /// </summary>
    public class DistribucionExportarPdfXBRL: DistribucionDocumentoXBRLBase
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
        /// Fabrica de constructores de reporte.
        /// </summary>
        public ReporteBuilderFactory ReporteBuilderFactoryService { get; set; }
        /// <summary>
        /// Fabrica de exportadores de documentos de instacia.
        /// </summary>
        public ExportadorDocumentoInstanciaFactory ExportadorDocumentoInstanciaFactoryService { get; set; }
        
        /// <summary>
        /// Repository para la consulta de los archivos asociados a un documento instancia XBRL.
        /// </summary>
        public IArchivoDocumentoInstanciaRepository ArchivoDocumentoInstanciaRepository { get; set; }

        /// <summary>
        /// Realiza la ejecucuión de esta distribución creando un archivo PDF
        /// </summary>
        /// <param name="instancia">Documento de instancia a procesar</param>
        /// <param name="parametros">Parametros adicionales de distribución</param>
        /// <returns>Resultado de le operación de creación de archivo PDF</returns>
        /// 
        [Transaction(TransactionPropagation.RequiresNew)]
        public override ResultadoOperacionDto EjecutarDistribucion(Viewer.Application.Dto.DocumentoInstanciaXbrlDto instancia, IDictionary<string, object> parametros)
        {

            var resultadoExportacion = new ResultadoOperacionDto();
            resultadoExportacion.Resultado = false;
            try
            {
                LogUtil.Info("Ejecutando Distribución PDF para documento: " + instancia.IdDocumentoInstancia + ", archivo: " + instancia.Titulo);
                var plantilla = ObtenDefinicionPlantilla(instancia);
                var builder = ReporteBuilderFactoryService.obtenerReporteBuilder(instancia, plantilla, "es");
                var exporter = ExportadorDocumentoInstanciaFactoryService.ObtenerExportadorParaDocumento(instancia);
                builder.crearReporteXBRLDTO(instancia);
                var archivoBytes = exporter.exportarDocumentoAPDF(instancia, builder.ReporteXBRLDTO);

                if (archivoBytes != null)
                {
                    ArchivoDocumentoInstancia archivo = new ArchivoDocumentoInstancia();
                    archivo.Archivo = archivoBytes;
                    archivo.IdDocumentoInstancia = (long)instancia.IdDocumentoInstancia;
                    archivo.IdTipoArchivo = TipoArchivoConstants.ArchivoPdf;

                    ArchivoDocumentoInstanciaRepository.AgregaDistribucion(archivo);
                    resultadoExportacion.Resultado = true;

                    //EscribirArchivo(archivoBytes, instancia.Titulo);
                }
            }
            catch (Exception ex)
            {
                resultadoExportacion.Resultado = false;
                resultadoExportacion.Mensaje = "Ocurrió un error al escribir el archivo PDF:" + ex.Message;
                resultadoExportacion.Excepcion = ex.StackTrace;
                LogUtil.Info("Falló Distribución PDF para documento: " + instancia.IdDocumentoInstancia + ", archivo: " + instancia.Titulo + ":" + ex.Message);
                LogUtil.Error(ex);
            }
            return resultadoExportacion;
        }

        private void EscribirArchivo(byte[] archivo, string nombreArchivo)
        {
            using (var streamZip = new FileStream(RutaDestino + "\\" + nombreArchivo + ".pdf", FileMode.Create))
            {
                streamZip.Write(archivo, 0, archivo.Length);
            }
        }
    }
}
