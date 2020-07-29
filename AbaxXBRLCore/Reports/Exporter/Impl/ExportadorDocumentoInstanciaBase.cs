using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.Reports.Dto;
using AbaxXBRLCore.Reports.Exporter;
using AbaxXBRLCore.Reports.Util;
using AbaxXBRLCore.Viewer.Application.Dto;
using AbaxXBRLCore.Viewer.Application.Model;
using Aspose.Words;
using Aspose.Words.Saving;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading;

namespace AbaxXBRLCore.Reports.Exporter.Impl
{
    /// <summary>
    /// Clase base con funciones comunes de los exportadores de documento de instancia a
    /// diferentes formatos de distribución
    /// </summary>
    public abstract class ExportadorDocumentoInstanciaBase : IExportadorDocumentoInstancia
    {
        /// <summary>
        /// Inicializamos la licencia de aspose.
        /// </summary>
        static ExportadorDocumentoInstanciaBase() 
        {
		   //Inicializa la licencia de ASPOSE Words
            ActivadorLicenciaAsposeUtil.ActivarAsposeWords();
	    }
	
	   
	    public static byte[] guardarDocumentoComoWord(Document docGuardar)
        {
		    byte[] resultadoArchivo = null;
            var memoryStreamSalida = new MemoryStream();
		    try
            {
                memoryStreamSalida = new MemoryStream();
                var currentCulture = Thread.CurrentThread.CurrentCulture;
                Thread.CurrentThread.CurrentCulture = new CultureInfo("en-US");
                docGuardar.Save(memoryStreamSalida, SaveFormat.Docx);
                Thread.CurrentThread.CurrentCulture = currentCulture;
                resultadoArchivo = memoryStreamSalida.ToArray();
		    }catch(Exception ex){
			    throw ex;
		    }finally{
                if (memoryStreamSalida != null)
                {
                    memoryStreamSalida.Close();
			    }
		    }
		    return resultadoArchivo;
	    }

	
	    public static byte[] guardarDocumentoComoHtml(Document docGuardar)
        {
            MemoryStream streamSalida = null;
		    byte[] resultadoArchivo = null;
		    try{
                streamSalida = new MemoryStream();
                HtmlSaveOptions htmlSave = new HtmlSaveOptions()
                {
                    ExportImagesAsBase64 = true,
                    ExportHeadersFootersMode = ExportHeadersFootersMode.FirstSectionHeaderLastSectionFooter,
                    PrettyFormat = true,
                    CssStyleSheetType = CssStyleSheetType.Inline,
                    Encoding = System.Text.Encoding.UTF8,
                };
	            docGuardar.Save(streamSalida,htmlSave);
		        resultadoArchivo = streamSalida.ToArray();
		    }catch(Exception ex){
			    throw ex;
		    }finally{
			    if(streamSalida != null){
				    streamSalida.Close();
			    }
		    }
		    return resultadoArchivo;	
	    }
        /// <summary>
        /// Retorna un flujo de bytes con los PDF's adjuntos.
        /// </summary>
        /// <param name="instancia">Documento de instancia a evaluar.</param>
        /// <returns>Flujo de bytes con los documentos ajuntos.</returns>
        public static String ObtenDocumentosAdjuntos(DocumentoInstanciaXbrlDto instancia)
        {
            var conceptosPorId = instancia.Taxonomia.ConceptosPorId;
            var diccionarioConceptosBase64 = new Dictionary<String, String>();
            foreach (var idConcepto in conceptosPorId.Keys)
            {
                var concepto = conceptosPorId[idConcepto];
                if (concepto.TipoDato.Contains("base64BinaryItemType"))
                {
                    IList<string> idsHechos;
                    if (instancia.HechosPorIdConcepto.TryGetValue(concepto.Id, out idsHechos) && idsHechos.Count > 0)
                    {
                        var token = String.Empty;
                        var etiquetaConcepto = ReporteXBRLUtil.obtenerEtiquetaConcepto("es", ReporteXBRLUtil.ETIQUETA_DEFAULT, idConcepto, instancia);
                        for (var indexHecho = 0; indexHecho < idsHechos.Count; indexHecho++)
                        {
                            HechoDto hecho;
                            if (instancia.HechosPorId.TryGetValue(idsHechos[indexHecho], out hecho) && !String.IsNullOrWhiteSpace(hecho.Valor))
                            {
                                var titulo = etiquetaConcepto + token;
                                diccionarioConceptosBase64[titulo] = hecho.Valor;
                                token += " ";
                            }
                        }
                    }
                    
                }
            }
            String salida = diccionarioConceptosBase64.Count > 0 ? PDFUtil.MesclaBase64PDFs(diccionarioConceptosBase64) : null;
            return salida;
        }
	   /// <summary>
       /// Genera el documento PDF
       /// </summary>
       /// <param name="docGuardar">Documento de aspose a guardar.</param>
       /// <param name="instancia">Documento de instancia.</param>
       /// <param name="concatenarAdjuntos">Si se deben concatenar los documentos adjuntos.</param>
       /// <returns>Documento generado.</returns>
	    public static byte[] guardarDocumentoComoPDF(Document docGuardar, DocumentoInstanciaXbrlDto instancia, bool concatenarAdjuntos = true)
        {
		     byte[] resultadoArchivo = null;
             String pathSalida = System.IO.Path.GetTempPath() + Guid.NewGuid().ToString() + ".pdf";
            try {
                SaveOptions savePdf = new PdfSaveOptions()
                {
                    UseHighQualityRendering = true
                };

                docGuardar.Save(pathSalida, savePdf);
                if (concatenarAdjuntos)
                {
                    var adjuntos = ObtenDocumentosAdjuntos(instancia);
                    if (adjuntos != null)
                    {
                        var listaFlujosPDF = new List<String>() { pathSalida, adjuntos };
                        pathSalida = PDFUtil.MezclaPDFs(listaFlujosPDF);
                    }
                }
                resultadoArchivo = ReadBytesFromFile(pathSalida);
            } catch (Exception ex) {
                LogUtil.Error(ex);
                throw ex;
		    }
		    return resultadoArchivo;
	    }
        /// <summary>
        /// Obtiene el arreglo de bytes de un documento.
        /// </summary>
        /// <param name="fileName">Nombre del documento.</param>
        /// <returns>Bytes contenidos en el documento.</returns>
        public static byte[] ReadBytesFromFile(String fileName)
        {
            byte[] buff = null;
            FileStream fs = new FileStream(fileName,
                                           FileMode.Open,
                                           FileAccess.Read);
            BinaryReader br = new BinaryReader(fs);
            long numBytes = new FileInfo(fileName).Length;
            buff = br.ReadBytes((int)numBytes);
            return buff;
        }

        public abstract byte[] exportarDocumentoAWord(DocumentoInstanciaXbrlDto instancia, ReporteXBRLDTO reporteXBRLDTO);

        public abstract byte[] exportarDocumentoAPDF( DocumentoInstanciaXbrlDto instancia, ReporteXBRLDTO reporteXBRLDTO, bool concatenaAdjuntos = true);

        public abstract byte[] exportarDocumentoAHTML(DocumentoInstanciaXbrlDto instancia, ReporteXBRLDTO reporteXBRLDTO);

        public abstract ReporteXBRLDTO generarReporteXBRLDTO(DocumentoInstanciaXbrlDto instancia, IDefinicionPlantillaXbrl plantilla);

        public abstract Document generarArchivoWord(DocumentoInstanciaXbrlDto instancia,    ReporteXBRLDTO reporteXBRLDTO);

        public abstract byte[] exportarDocumentoAExcel(DocumentoInstanciaXbrlDto instancia, ReporteXBRLDTO reporteXBRLDTO);


    }
}
