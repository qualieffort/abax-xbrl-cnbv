using System;
using System.Collections.Generic;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using AbaxXBRLCore.Common.Util;
using PdfSharp.Pdf;
using PdfSharp.Pdf.IO;
using PdfSharp.Pdf.Advanced;
using System.IO;


namespace TestAbaxXBRL
{
    [TestClass]
    public class TestMezclaPDF
    {
        [TestMethod]
        public void MesclaPDFTest()
        {
            LogUtil.LogDirPath = @"..\..\TestOutput\";
            LogUtil.Inicializa();

            using (PdfDocument one = PdfReader.Open("..\\..\\TestInput\\PdfTest\\file1.pdf", PdfDocumentOpenMode.Import))
            using (PdfDocument two = PdfReader.Open("..\\..\\TestInput\\PdfTest\\file2.pdf", PdfDocumentOpenMode.Import))
            using (PdfDocument outPdf = new PdfDocument())
            {
                CopyPages(one, outPdf);
                CopyPages(two, outPdf);

                outPdf.Save("..\\..\\TestOutput\\fileMixed.pdf");
            }

            void CopyPages(PdfDocument from, PdfDocument to)
            {
                for (int i = 0; i < from.PageCount; i++)
                {
                    to.AddPage(from.Pages[i]);
                }
            }
        }
        [TestMethod]
        public void ExportaAImagenTest()
        {
            LogUtil.LogDirPath = @"..\..\TestOutput\";
            LogUtil.Inicializa();

            using (PdfDocument document = PdfReader.Open("..\\..\\TestInput\\PdfTest\\images.pdf", PdfDocumentOpenMode.Import))
            {
                var imageCount = 0;
                // Iterate pages
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
                                        ExportJpegImage(xObject, "..\\..\\TestOutput\\ImagesPDF\\imagenPDF" + imageCount.ToString());
                                        imageCount++;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        static void ExportImage(PdfDictionary image, String path)
        {
            string filter = image.Elements.GetName("/Filter");
            switch (filter)
            {
                case "/DCTDecode":
                    ExportJpegImage(image, path);
                    break;

                case "/FlateDecode":
                    ExportAsPngImage(image, path);
                    break;
            }
        }

        static void ExportJpegImage(PdfDictionary image, String path)
        {
            // Fortunately JPEG has native support in PDF and exporting an image is just writing the stream to a file.
            byte[] stream = image.Stream.Value;
            FileStream fs = new FileStream(path + ".jpeg", FileMode.Create, FileAccess.Write);
            BinaryWriter bw = new BinaryWriter(fs);
            bw.Write(stream);
            bw.Close();
        }

        static void ExportAsPngImage(PdfDictionary image, String path)
        {
            int width = image.Elements.GetInteger(PdfImage.Keys.Width);
            int height = image.Elements.GetInteger(PdfImage.Keys.Height);
            int bitsPerComponent = image.Elements.GetInteger(PdfImage.Keys.BitsPerComponent);
        }

        [TestMethod]
        public void ExportaPDFsAImagenes()
        {
            LogUtil.LogDirPath = @"..\..\TestOutput\";
            LogUtil.Inicializa();
            var filepath = "..\\..\\TestInput\\PdfTest\\ar_pros_NameAndPositionsOfResponsiblePersonsPdf.pdf";
            var imagePath = "..\\..\\TestOutput\\PdfTest\\images2H";
            var devise = GhostscriptSharp.Settings.GhostscriptDevices.jpeg;
            var pageFormat = GhostscriptSharp.Settings.GhostscriptPageSizes.a4;

            CreatImagesFromPDF(filepath, imagePath, devise, pageFormat, 200, 200);


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
        public void CreatImagesFromPDF(
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

            GhostscriptSharp.GhostscriptWrapper.GenerateOutput(Path, PDFfile + "_" + "%d.jpg", SettingsForConvert); // here you could set path and name for out put file.
        }



    }
}
