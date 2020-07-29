using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Spring.Testing.Microsoft;
using AbaxXBRLCore.Distribucion;
using System.Collections.Generic;
using System.IO;
using AbaxXBRLCore.Services;
using AbaxXBRLCore.Repository;
using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.XPE.impl;
using AbaxXBRLCore.Viewer.Application.Dto;
using Newtonsoft.Json;
using AbaxXBRLCore.Distribucion.Impl;
using AbaxXBRLCore.Common.Cache;
using System.Linq;
using AbaxXBRLCore.XPE;
using TestAbaxXBRL.JBRL.Modelo;
using System.Text;
using MongoDB.Bson;
using AbaxXBRLCore.CellStore.Services.Impl;
using MongoDB.Driver;
using AbaxXBRLCore.CellStore.Modelo;
using TestAbaxXBRL.JBRL.Constants;
using TestAbaxXBRL.JBRL.Util;
using System.Threading.Tasks;

namespace TestAbaxXBRL.JBRL.Test
{
    [TestClass]
    public class CargaHechosXBRLaJBRLTest 
    {
     
        
        /// <summary>
        /// Prueba unitaria para el envío y distribución del documento de instancia sin conectarse alos queue
        /// </summary>
        [TestMethod]
        public void TestProcesarDistribucionDocumentosXBRL()
        {
            LogUtil.LogDirPath = @"..\..\TestOutput\";
            LogUtil.Inicializa();
            var DirectorioProcesar = @"..\..\TestInput\XBRL\JBRL\Auxiliar";
            var xpe = XPEServiceImpl.GetInstance(true);
            var abaxXBRLCellStoreMongo = new AbaxXBRLCellStoreMongo();
            abaxXBRLCellStoreMongo.JSONOutDirectory = @"..\..\TestOutput\";
            abaxXBRLCellStoreMongo.ConnectionString = "mongodb://localhost/jbrl";
            abaxXBRLCellStoreMongo.DataBaseName = "jbrl";

            //abaxXBRLCellStoreMongo.ConnectionString = "mongodb+srv://oscarloyola:oscar.loyola.2h@abaxxbrl-dk4sr.azure.mongodb.net/xbrl?retryWrites=true";
            //abaxXBRLCellStoreMongo.DataBaseName = "xbrl";
            abaxXBRLCellStoreMongo.Init();
            var mongoDB = abaxXBRLCellStoreMongo.GetMongoDB();

            XPEService xpeService = XPEServiceImpl.GetInstance();
            string[] fileEntries = Directory.GetFiles(DirectorioProcesar);
            var taskList = new List<Task>();
            foreach (string rutaArchivo in fileEntries)
            {
                var registrationDate = System.IO.File.GetLastWriteTime(rutaArchivo);
                var fileName = Path.GetFileName(rutaArchivo);
                using (var reader = File.OpenRead(rutaArchivo))
                {
                    var reportParams = new Dictionary<String, String>();
                    var factsList = new List<FactJBRL>();
                    DocumentoInstanciaXbrlDto documentoInstanciXbrlDto = xpeService.CargaInstanciaXBRLStreamFile(reader, fileName);
                    if (documentoInstanciXbrlDto.Taxonomia == null)
                    {
                        JBRLUtils.ObtenerTaxonomia(documentoInstanciXbrlDto);
                    }
                    JBRLUtils.InsertFacts(
                        documentoInstanciXbrlDto, 
                        reportParams, 
                        factsList, 
                        taskList, 
                        registrationDate, 
                        abaxXBRLCellStoreMongo);
                }
                System.GC.Collect();
            }
            Task.WaitAll(taskList.ToArray());
        }
    }
}
