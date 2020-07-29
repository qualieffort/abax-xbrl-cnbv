using Aspose.Words;
using Aspose.Words.Saving;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace TestAbaxXBRL
{
     [TestClass]
    public class TestAsposeWordPdf
    {
         [TestMethod]
         public void testCrearWord()
         {
             using (var streamLicencia = Assembly.GetExecutingAssembly().GetManifestResourceStream("TestAbaxXBRL.Aspose.Words.lic"))
             {
                 if (streamLicencia != null)
                 {
                     byte[] licBytes = null;
                     using (var br = new BinaryReader(streamLicencia))
                     {
                         licBytes = br.ReadBytes((int)streamLicencia.Length);
                     }
                     // Load the decrypted license into a stream and set the license.
                     var licenseStream = new MemoryStream(licBytes);
                     var license = new License();
                     license.SetLicense(licenseStream);
                 }
             }


             var variables = new Dictionary<string,string>();

             variables["tituloDeDocumento"]="Reporte de Avance";
             variables["fecha"] = DateTime.Now.ToLongDateString();
             variables["tituloDeDocumento"]="Reporte de Avance";

              variables["etiqueta1"]="Nombre";
              variables["etiqueta2"]="Apellido Paterno";
              variables["etiqueta3"]="Apellido Materno";

              variables["valor1"]="Jose Juan";
              variables["valor2"]="Morales";
              variables["valor3"]="Perez";

             Document word = new Document(@"C:\temp\word\plantilla_1.docx");
             
             foreach(var llaveValor in variables)
             {
                 word.Range.Replace("#"+llaveValor.Key,llaveValor.Value,false,false);
             }

             var docBuilder = new DocumentBuilder(word);

             docBuilder.MoveToDocumentEnd();

             var font = docBuilder.Font;
             font.Size = 8;
             font.Bold = true;
             font.Name = "Arial";

             docBuilder.Writeln("Campo Dinámico 1:");
             docBuilder.InsertParagraph();
             font.Bold = false;

             docBuilder.InsertHtml("<p style='font-family:Arial;font-size: 8pt'>" + 
                 File.ReadAllText(@"C:\temp\word\plantilla.html")
                 + "</p>");
             docBuilder.InsertParagraph();
             docBuilder.Writeln("");

             word.Save(@"c:\temp\word\salida.pdf", new PdfSaveOptions()
             {
                 UseHighQualityRendering = true
             });

         }

    }
}
