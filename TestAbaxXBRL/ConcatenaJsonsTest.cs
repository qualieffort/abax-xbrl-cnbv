using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using AbaxXBRLCore.Common.Util;
using System.Text.RegularExpressions;

namespace TestAbaxXBRL
{
    [TestClass]
    public class ConcatenaJsonsTest
    {

        private Regex EspaciosInicio = new Regex(@"^\s", RegexOptions.Compiled | RegexOptions.Multiline);
        private Regex SaltosLinea = new Regex(@"\s?\r?\n", RegexOptions.Compiled | RegexOptions.Multiline);

        [TestMethod]
        public void ConcatenaArchivosJson()
        {
            LogUtil.LogDirPath = @"..\..\TestOutput\";
            LogUtil.Inicializa();
            try
            {
                ProcessDirectory("..\\..\\TestOutput\\SalidaHTTPThreads\\");
            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
                throw ex;
            }
        }

        // Process all files in the directory passed in, recurse on any directories 
        // that are found, and process the files they contain.
        public void ProcessDirectory(string targetDirectory)
        {
            // Process the list of files found in the directory.
            string[] fileEntries = Directory.GetFiles(targetDirectory);
            foreach (string fileName in fileEntries)
                ProcessFile(fileName);

            // Recurse into subdirectories of this directory.
            string[] subdirectoryEntries = Directory.GetDirectories(targetDirectory);
            foreach (string subdirectory in subdirectoryEntries)
                ProcessDirectory(subdirectory);
        }

        // Insert logic for processing found files here.
        public void ProcessFile(string path)
        {
            if (path.EndsWith(".json"))
            {
                string contents = File.ReadAllText(path);
                contents = EspaciosInicio.Replace(contents, String.Empty);
                contents = SaltosLinea.Replace(contents, String.Empty);
                using (StreamWriter sw = File.AppendText(@"..\\..\\TestOutput\\Creditos.json"))
                {
                    sw.WriteLine(contents);
                }
            }
        }
    }
}
