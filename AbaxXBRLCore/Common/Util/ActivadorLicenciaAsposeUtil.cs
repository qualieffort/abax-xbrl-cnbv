using Aspose.Words;
using System;
using System.IO;
using System.Reflection;
using System.Security.Cryptography;

namespace AbaxXBRLCore.Common.Util
{
    /// <summary>
    /// Calse de utilería para la activación, cada que se inicia la aplicación, de la licencia
    /// de Aspose Words para 2H Software
    /// </summary>
    /// <author>Emigdio Hernandez</author>
    public class ActivadorLicenciaAsposeUtil
    {
        /// <summary>
        /// Ubicación del archivo de licencia
        /// </summary>
        public const string LICENSE_FILE = "AbaxXBRLCore.Resources.Aspose.Words.lic";

        public static void ActivarAsposeWords()
        {

            using (var streamLicencia = Assembly.GetExecutingAssembly().GetManifestResourceStream(LICENSE_FILE))
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
        }
    }
}
