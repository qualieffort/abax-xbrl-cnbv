using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Reports.Util
{
    /// <summary>
    /// Clase de utilería para la conversión de documentos PDF a HTML en forma de cadena
    /// </summary>
    public class AsposePDFConverter
    {
        private string _htmlFinal = null;
        /// <summary>
        /// Convierte nu PDF en base 64 a su representación HTML
        /// </summary>
        /// <param name="base64Pdf">Cadena de entrada</param>
        /// <returns>Cadena con el HTML convertido</returns>
        public string convertirPDFBase64AHtml(String base64Pdf)
        {
            var binaryPdf = Convert.FromBase64String(base64Pdf);

            using (var pdfInput = new MemoryStream(binaryPdf))
            {
                Aspose.Pdf.Document pdfDoc = new Aspose.Pdf.Document(pdfInput);
                Aspose.Pdf.HtmlSaveOptions saveOptions = new Aspose.Pdf.HtmlSaveOptions();
               
                saveOptions.RasterImagesSavingMode = Aspose.Pdf.HtmlSaveOptions.RasterImagesSavingModes.AsEmbeddedPartsOfPngPageBackground;
                saveOptions.FontSavingMode = Aspose.Pdf.HtmlSaveOptions.FontSavingModes.SaveInAllFormats;
                saveOptions.PartsEmbeddingMode = Aspose.Pdf.HtmlSaveOptions.PartsEmbeddingModes.EmbedAllIntoHtml;
                saveOptions.LettersPositioningMethod = Aspose.Pdf.HtmlSaveOptions.LettersPositioningMethods.UseEmUnitsAndCompensationOfRoundingErrorsInCss;
                saveOptions.SplitIntoPages = false;
                saveOptions.CustomHtmlSavingStrategy = new Aspose.Pdf.HtmlSaveOptions.HtmlPageMarkupSavingStrategy(SavingToStream);
                

                pdfDoc.Save("OutPutToStream_out.html", saveOptions);
            }
            return _htmlFinal;
        }
        public Aspose.Words.Document convertirPDFBase64ADocx(String base64Pdf)
        {
            var binaryPdf = Convert.FromBase64String(base64Pdf);
            Aspose.Words.Document finalDoc = null;
            using (var pdfInput = new MemoryStream(binaryPdf))
            {
                Aspose.Pdf.Document pdfDoc = new Aspose.Pdf.Document(pdfInput);
                Aspose.Pdf.DocSaveOptions saveOptions = new Aspose.Pdf.DocSaveOptions();
                saveOptions.Format = Aspose.Pdf.DocSaveOptions.DocFormat.DocX;
                
                /*saveOptions.RasterImagesSavingMode = Aspose.Pdf.HtmlSaveOptions.RasterImagesSavingModes.AsEmbeddedPartsOfPngPageBackground;
                saveOptions.FontSavingMode = Aspose.Pdf.HtmlSaveOptions.FontSavingModes.SaveInAllFormats;
                saveOptions.PartsEmbeddingMode = Aspose.Pdf.HtmlSaveOptions.PartsEmbeddingModes.EmbedAllIntoHtml;
                saveOptions.LettersPositioningMethod = Aspose.Pdf.HtmlSaveOptions.LettersPositioningMethods.UseEmUnitsAndCompensationOfRoundingErrorsInCss;
                saveOptions.SplitIntoPages = false;
                saveOptions.CustomHtmlSavingStrategy = new Aspose.Pdf.HtmlSaveOptions.HtmlPageMarkupSavingStrategy(SavingToStream);
                */
                string tempFile = Path.GetTempFileName();
                if (File.Exists(tempFile))
                {
                    File.Delete(tempFile);
                }
                pdfDoc.Save(tempFile, saveOptions);
                finalDoc = new Aspose.Words.Document(tempFile);
                File.Delete(tempFile);
            }
            return finalDoc;
        }
        /// <summary>
        /// Función callback para notificar el guardado como stream
        /// </summary>
        /// <param name="htmlSavingInfo"></param>
        public void SavingToStream(Aspose.Pdf.HtmlSaveOptions.HtmlPageMarkupSavingInfo htmlSavingInfo)
        {
            using (var reader = new StreamReader(htmlSavingInfo.ContentStream, Encoding.UTF8))
            {
                _htmlFinal = reader.ReadToEnd();
            }
        }
        
    }
}
