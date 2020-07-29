using AbaxXBRLCore.Common.Dtos.Sincronizacion;
using AbaxXBRLCore.Services.Implementation;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Spring.Testing.NUnit;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestAbaxXBRL
{
    /// <summary>
    /// Pruebas unitarias para la importación y sincronización de archivos de emisoras de BMV
    /// </summary>
    [TestClass]
    public class TestProcesoImportacionArchivoEmisoras : AbstractDependencyInjectionSpringContextTests
    {

        private SincronizacionArchivosBMVService service;

        public SincronizacionArchivosBMVService SincronizacionArchivosBMVService
        {
            set { service = value; }
        }

        protected override string[] ConfigLocations
        {
            get
            {
                return new string[]
                {
                    "assembly://AbaxXBRLCore/AbaxXBRLCore.Config/common.xml",
                    "assembly://AbaxXBRLCore/AbaxXBRLCore.Config/repository.xml",
                    "assembly://AbaxXBRLCore/AbaxXBRLCore.Config/services.xml",
                    "assembly://AbaxXBRLCore/AbaxXBRLCore.Config/transaccion.xml"
                };
            }
        }

        [TestMethod]
        public void TestProcesarArchivoEmisoras()
        {
            
            using (var streamArchivoEmisoras = 
                new FileStream(@"C:\Users\Emigdio\Dropbox\2H\CNBV\CNBV-BMV Sincronización\archivos\Emisoras_160616.txt", FileMode.Open))
            {
                using (var streamArchivoFideicomiso =
                    new FileStream(@"C:\Users\Emigdio\Dropbox\2H\CNBV\CNBV-BMV Sincronización\archivos\Fideicomisos_160616.txt", FileMode.Open))
                {

                    ResultadoProcesoImportacionArchivosBMVDto resultado = service.ProcesarArchivosEmisorasBMV(streamArchivoEmisoras, streamArchivoFideicomiso);

                    Debug.WriteLine(resultado.ErroresGeneralesEmisoras);
                }
                }
                
        }
    }
}
