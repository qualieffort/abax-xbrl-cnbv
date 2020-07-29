using Aspose.Words;
using Aspose.Words.Saving;
using PdfSharp.Pdf;
using PdfSharp.Pdf.Advanced;
using PdfSharp.Pdf.IO;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.IO;
using System.Linq;

namespace AbaxXBRLCore.Common.Util
{
    /// <summary>
    /// Mescla PDF's.
    /// </summary>
    public class PDFUtil
    {
        /// <summary>
        /// Mescla los PDF's indicados en los paths.
        /// </summary>
        /// <param name="paths"></param>
        public static String MezclaPDFs(List<String> listaPaths)
        {
            if (listaPaths.Count == 0)
            {
                return null;
            }
            var first = listaPaths.First();
            if (listaPaths.Count == 1)
            {
                return first;
            }
            var currentPdf = first;
            //LogUtil.Info("Iniciando la concatenación de PDF");
            var outPDFPath = System.IO.Path.GetTempFileName().Replace(".tmp", ".pdf");
            using (PdfDocument outPdf = new PdfDocument())
            {
                for (var indexPath = 0; indexPath < listaPaths.Count; indexPath++)
                {
                    var nextPdfPath = listaPaths[indexPath];
                    try
                    {
                        //LogUtil.Info("Leyendo:"+ nextPdfPath);
                        using (PdfDocument nextPDF = PdfReader.Open(nextPdfPath, PdfDocumentOpenMode.Import))
	                    {
                            //LogUtil.Info("Copiando páginas:" + nextPdfPath);
                            CopyPages(nextPDF, outPdf);
                        }
                    }
                    catch (Exception ex)
                    {
                        LogUtil.Error(ex);
                    }
                }
                outPdf.Save(outPDFPath);
            }

            return outPDFPath;
        }
        ///// <summary>
        ///// Mescla los PDFs
        ///// </summary>
        ///// <param name="listaPaths">Lista de flujos de bytes con los PDFs.</param>
        ///// <returns>Flujo de bytes con los PDFs mesclados</returns>
        //public static MemoryStream MezclaPDFs(IList<Stream> listaPaths)
        //{
        //    if (listaPaths.Count == 0)
        //    {
        //        return null;
        //    }
        //    var outPDFPath = new MemoryStream();
        //    using (PdfDocument outPdf = new PdfDocument())
        //    {
        //        for (var indexPath = 0; indexPath < listaPaths.Count; indexPath++)
        //        {
        //            var nextPdfPath = listaPaths[indexPath];
        //            try
        //            {
        //                using (PdfDocument nextPDF = PdfReader.Open(nextPdfPath, PdfDocumentOpenMode.Import))
        //                {
        //                    CopyPages(nextPDF, outPdf);
        //                }
        //            }
        //            catch (Exception ex)
        //            {
        //                LogUtil.Error(ex);
        //            }
                    
        //        }
        //        outPdf.Save(outPDFPath, false);
        //    }

        //    return outPDFPath;
        //}
        /// <summary>
        /// Crea un PDF con una portada con el titulo dado.
        /// </summary>
        /// <param name="titulo">Título de la portada.</param>
        /// <param name="pdfBase64">Contenido base 64 del PDF.</param>
        /// <returns></returns>
        public static String CreaPDFConPortada(String titulo, String pdfBase64)
        {

            var pathPortada = CreaPortada1(titulo, null, null);
            var pathContenido = CreatePDFTemporaryFromBas64(pdfBase64);
            var paths = new List<String>() { pathPortada, pathContenido };
            return MezclaPDFs(paths);

        }

        private static String CreaPortada1(String titulo, String claveCotizacion, String fecha)
        {
            var word = new Document();
            var docBuilder = new DocumentBuilder(word);
            docBuilder.MoveToDocumentEnd();

            docBuilder.Font.Name = "Arial";
            docBuilder.Font.Bold = false;
            docBuilder.Font.Size = 14;
            docBuilder.ParagraphFormat.StyleIdentifier = StyleIdentifier.Normal;
            docBuilder.Font.Color = Color.Black;

            docBuilder.Writeln(); docBuilder.Writeln();
            docBuilder.Writeln(); docBuilder.Writeln();
            docBuilder.Writeln(); docBuilder.Writeln();
            docBuilder.Writeln(); docBuilder.Writeln();
            docBuilder.Writeln(); docBuilder.Writeln();
            docBuilder.Writeln(); docBuilder.Writeln();

            var tabla = docBuilder.StartTable();
            
            docBuilder.InsertCell();

            tabla.SetBorders(LineStyle.None, 0, Color.Black);
            docBuilder.CellFormat.Borders.Bottom.Color = Color.Black;
            docBuilder.CellFormat.Borders.Bottom.LineStyle = LineStyle.Single;
            docBuilder.CellFormat.Borders.Bottom.LineWidth = 0.5;
            docBuilder.CellFormat.Borders.Top.Color = Color.Black;
            docBuilder.CellFormat.Borders.Top.LineStyle = LineStyle.Single;
            docBuilder.CellFormat.Borders.Top.LineWidth = 0.5;
            docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Center;
            docBuilder.ParagraphFormat.SpaceAfter = 8;
            docBuilder.Writeln();
            docBuilder.Write(titulo);
            docBuilder.Writeln();

            docBuilder.EndRow();
            docBuilder.EndTable();

            docBuilder.Writeln();

            var pathPortada = System.IO.Path.GetTempPath() + Guid.NewGuid().ToString() + ".pdf";
            SaveOptions savePdf = new PdfSaveOptions()
            {
                UseHighQualityRendering = true
            };
            word.Save(pathPortada, savePdf);

            return pathPortada;
        }

        /// <summary>
        /// Mescla los PDF's indicados en los paths.
        /// </summary>
        /// <param name="pdfAdjuntosDictionary"></param>
        public static String MesclaBase64PDFs(IDictionary<String,String> pdfAdjuntosDictionary)
        {
            if (pdfAdjuntosDictionary.Count == 0)
            {
                return null;
            }
            var listaFlujosPDfs = new List<String>();
            String streamPDFFiles = null;
            using (PdfDocument outPdf = new PdfDocument())
            {
                foreach (var titulo in pdfAdjuntosDictionary.Keys)
                {
                    var pathPdf = CreaPDFConPortada(titulo, pdfAdjuntosDictionary[titulo]);
                    listaFlujosPDfs.Add(pathPdf);
                }
                streamPDFFiles = MezclaPDFs(listaFlujosPDfs);
            }

            return streamPDFFiles;
        }

        /// <summary>
        /// Copia las páginas entre dos PDf's
        /// </summary>
        /// <param name="from">PDF origen.</param>
        /// <param name="to">PDF destino</param>
        private static void CopyPages(PdfDocument from, PdfDocument to)
        {
            for (int i = 0; i < from.PageCount; i++)
            {
                to.AddPage(from.Pages[i]);
            }
        }
        /// <summary>
        /// Crea un archivo temporal de una cadena base 64.
        /// </summary>
        /// <returns>Path del archivo generado.</returns>
        public static String CreatePDFFromBas64(String base64)
        {
            var binaryPdf = Convert.FromBase64String(base64);
            var outPDFPath = System.IO.Path.GetTempFileName().Replace(".tmp", ".pdf");
            using (var pdfInput = new MemoryStream(binaryPdf))
            {
                using (var fileStream = File.Create(outPDFPath))
                {
                    pdfInput.Seek(0, SeekOrigin.Begin);
                    pdfInput.CopyTo(fileStream);
                    fileStream.Close();
                }
            }
            return outPDFPath;
        }
        /// <summary>
        /// Crea un PDF con el flujo de salida indicado.
        /// </summary>
        /// <param name="base64">Archivo base 64</param>
        /// <returns>Flujo de salida</returns>
        public static Stream CreateFlujoPDFFromBas64(String base64)
        {
            var binaryPdf = Convert.FromBase64String(base64);
            return new MemoryStream(binaryPdf);
        }
        /// <summary>
        /// Crea un PDF con el flujo de salida indicado.
        /// </summary>
        /// <param name="base64">Archivo base 64</param>
        /// <returns>Flujo de salida</returns>
        public static String CreatePDFTemporaryFromBas64(String base64)
        {
            var binaryPdf = Convert.FromBase64String(base64);
            var tempFilePath = System.IO.Path.GetTempPath() + Guid.NewGuid().ToString() + ".pdf";
            //File.Create(tempFilePath);
            File.WriteAllBytes(tempFilePath, binaryPdf);
            return tempFilePath;
        }
        /// <summary>
        /// Obtiene las imagenes de un documento PDF.
        /// </summary>
        /// <param name="pdfBase64">Documento PDF de base 64</param>
        /// <returns>Lista de flujo de bytes con las imagenes en el documento PDF.</returns>
        static public IList<Stream> GetImagesFromPDF(String pdfBase64)
        {
            IList<Stream> listaImagenes = new List<Stream>();
            if (String.IsNullOrEmpty(pdfBase64))
            {
                return listaImagenes;
            }
            var streamPDF = CreateFlujoPDFFromBas64(pdfBase64);

            listaImagenes = GetImagesFromPDF(streamPDF);

            return listaImagenes;
        }

        /// <summary>
        /// Obtiene las imagenes de un documento PDF.
        /// </summary>
        /// <param name="pdfBase64">Documento PDF de base 64</param>
        /// <returns>Lista de flujo de bytes con las imagenes en el documento PDF.</returns>
        static public IList<String> GetImagesFromPDFAsPathFiles(String pdfBase64)
        {
            IList<String> listaImagenes = new List<String>();
            if (String.IsNullOrEmpty(pdfBase64))
            {
                return listaImagenes;
            }
            var pdfPath = CreatePDFTemporaryFromBas64(pdfBase64);

            listaImagenes = GetImagesPathsFromPDF(pdfPath);
            File.Delete(pdfPath);
            return listaImagenes;
        }
        /// <summary>
        /// Escala una imagen al tamaño definido.
        /// </summary>
        /// <param name="image">Imagen que se pretende escalar.</param>
        /// <param name="maxWidth">Ancho maximo.</param>
        /// <param name="maxHeight">Altura máxima.</param>
        /// <returns></returns>
        public static Image ScaleImage(Image image, int maxWidth, int maxHeight)
        {
            var ratioX = (double)maxWidth / image.Width;
            var ratioY = (double)maxHeight / image.Height;
            var ratio = Math.Min(ratioX, ratioY);

            var newWidth = (int)(image.Width * ratio);
            var newHeight = (int)(image.Height * ratio);

            var newImage = new Bitmap(newWidth, newHeight);

            using (var graphics = Graphics.FromImage(newImage))
                graphics.DrawImage(image, 0, 0, newWidth, newHeight);

            return newImage;
        }

        /// <summary>
        /// Obtiene las imagnes incluidas en el documento PDF.
        /// </summary>
        /// <param name="pdfStream">Flujo de bytes del documento PDF.</param>
        /// <returns>Imagnes del flujo de bytes del documento PDF.</returns>
        static public IList<Stream> GetImagesFromPDF(Stream pdfStream)
        {
            var listaFlujosImagenes = new List<Stream>();
            try
            {
                using (PdfDocument document = PdfReader.Open(pdfStream, PdfDocumentOpenMode.Import))
                {
                    foreach (PdfPage page in document.Pages)
                    {
                        // Get resources dictionary
                        PdfDictionary resources = page.Elements.GetDictionary("/Resources");
                        if (resources != null)
                        {
                            // Get external objects dictionary
                            PdfDictionary xObjects = resources.Elements.GetDictionary("/XObject");
                            if (xObjects != null)
                            {
                                ICollection<PdfItem> items = xObjects.Elements.Values;
                                // Iterate references to external objects
                                foreach (PdfItem item in items)
                                {
                                    PdfReference reference = item as PdfReference;
                                    if (reference != null)
                                    {
                                        PdfDictionary xObject = reference.Value as PdfDictionary;
                                        // Is external object an image?
                                        if (xObject != null && xObject.Elements.GetString("/Subtype") == "/Image")
                                        {
                                            byte[] bytesImage = xObject.Stream.Value;
                                            var streanImage = new MemoryStream(bytesImage);
                                            listaFlujosImagenes.Add(streanImage);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
            }
            

            return listaFlujosImagenes;
        }

        ///// <summary>
        ///// Obtiene las imagnes incluidas en el documento PDF.
        ///// </summary>
        ///// <param name="pdfStream">Flujo de bytes del documento PDF.</param>
        ///// <returns>Imagnes del flujo de bytes del documento PDF.</returns>
        //static public IList<String> GetImagesFromPDFAsPathFiles(Stream pdfStream)
        //{
        //    var listaFlujosImagenes = new List<String>();
        //    try
        //    {
        //        using (PdfDocument document = PdfReader.Open(pdfStream, PdfDocumentOpenMode.Import))
        //        {
        //            foreach (PdfPage page in document.Pages)
        //            {
        //                // Get resources dictionary
        //                PdfDictionary resources = page.Elements.GetDictionary("/Resources");
        //                if (resources != null)
        //                {
        //                    // Get external objects dictionary
        //                    PdfDictionary xObjects = resources.Elements.GetDictionary("/XObject");
        //                    if (xObjects != null)
        //                    {
        //                        ICollection<PdfItem> items = xObjects.Elements.Values;
        //                        // Iterate references to external objects
        //                        foreach (PdfItem item in items)
        //                        {
        //                            PdfReference reference = item as PdfReference;
        //                            if (reference != null)
        //                            {
        //                                PdfDictionary xObject = reference.Value as PdfDictionary;
        //                                // Is external object an image?
        //                                if (xObject != null && xObject.Elements.GetString("/Subtype") == "/Image")
        //                                {
        //                                    byte[] bytesImage = xObject.Stream.Value;
        //                                    var tempFilePath =  Path.GetTempFileName();
        //                                    File.WriteAllBytes(tempFilePath, bytesImage);
        //                                    listaFlujosImagenes.Add(tempFilePath);
        //                                }
        //                            }
        //                        }
        //                    }
        //                }
        //            }
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        LogUtil.Error(ex);
        //    }


        //    return listaFlujosImagenes;
        //}

        /// <summary>
        /// Obtiene las imagnes incluidas en el documento PDF.
        /// </summary>
        /// <param name="pdfPath">Path del archivo a convertir.</param>
        /// <returns>Imagnes del flujo de bytes del documento PDF.</returns>
        static public IList<String> GetImagesPathsFromPDF(String pdfPath)
        {
            var listaFlujosImagenes = new List<String>();
            try
            {
                var devise = GhostscriptSharp.Settings.GhostscriptDevices.jpeg;
                var pageFormat = GhostscriptSharp.Settings.GhostscriptPageSizes.a4;

                var tempDirectory = System.IO.Path.GetTempPath() + Guid.NewGuid().ToString();
                Directory.CreateDirectory(tempDirectory);
                var imagePath = tempDirectory + "\\imagen_" + Guid.NewGuid().ToString();
                CreatImagesFromPDF(pdfPath, imagePath, devise, pageFormat, 200, 200);
                DirectoryInfo d = new DirectoryInfo(tempDirectory);
                FileInfo[] Files = d.GetFiles("*.jpg");
                foreach (FileInfo file in Files)
                {
                    listaFlujosImagenes.Add(tempDirectory +"\\"+  file.Name);
                }
            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
            }


            return listaFlujosImagenes;
        }

        /// <summary>
        /// Convertetion PDF to image.
        /// </summary>
        /// <param name="Path">Path to file for convertetion</param>
        /// <param name="PDFfile">Book name on HDD</param>
        /// <param name="Devise">Select one of the formats, jpg</param>
        /// <param name="PageFormat">Select one of page formats, like A4</param>
        /// <param name="qualityX"> Select quality, 200X200 ~ 1200X1900</param>
        /// <param name="qualityY">Select quality, 200X200 ~ 1200X1900</param>
        public static void CreatImagesFromPDF(
            string Path,
            string PDFfile,
            GhostscriptSharp.Settings.GhostscriptDevices Devise,
            GhostscriptSharp.Settings.GhostscriptPageSizes PageFormat,
            int qualityX,
            int qualityY)
        {
            GhostscriptSharp.GhostscriptSettings SettingsForConvert = new GhostscriptSharp.GhostscriptSettings();

            SettingsForConvert.Device = Devise;

            GhostscriptSharp.Settings.GhostscriptPageSize pageSize = new GhostscriptSharp.Settings.GhostscriptPageSize();
            pageSize.Native = PageFormat;
            SettingsForConvert.Size = pageSize;

            SettingsForConvert.Resolution = new System.Drawing.Size(qualityX, qualityY);

            var fileName = PDFfile + "_" + "%d.jpg";

            GhostscriptSharp.GhostscriptWrapper.GenerateOutput(Path, fileName, SettingsForConvert); // here you could set path and name for out put file.
        }
    }
}
