using AbaxXBRLCore.Common.Util;
using Aspose.Words;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading;

namespace AbaxXBRLCore.Reports.Exporter.Impl
{
    public class ExportadorNota : IExportadorNota
    {
        /// <summary>
        /// Inicializamos la licencia de aspose.
        /// </summary>
        static ExportadorNota() 
        {
		   //Inicializa la licencia de ASPOSE Words
            ActivadorLicenciaAsposeUtil.ActivarAsposeWords();
	    }

        public byte[] exportarNotaWord(string nota)
        {
            Document documentoNota = new Document();
            DocumentBuilder notaBuilder = new DocumentBuilder(documentoNota);
            notaBuilder.MoveToDocumentEnd();

            byte[] resultadoArchivo = null;
            var memoryStreamSalida = new MemoryStream();

            try
            {
                notaBuilder.InsertHtml(Rol.ExportadorRolDocumentoBase.PARRAFO_HTML_NOTAS + nota + "</p>", true);

                memoryStreamSalida = new MemoryStream();
                var currentCulture = Thread.CurrentThread.CurrentCulture;
                Thread.CurrentThread.CurrentCulture = new CultureInfo("es-MX");
                documentoNota.Save(memoryStreamSalida, SaveFormat.Dotx);
                Thread.CurrentThread.CurrentCulture = currentCulture;
                resultadoArchivo = memoryStreamSalida.ToArray();
            }
            catch (Exception ex)
            {
                throw ex;
            }
            finally
            {
                if (memoryStreamSalida != null)
                {
                    memoryStreamSalida.Close();
                }
            }

            return resultadoArchivo;
        }
    }
}
