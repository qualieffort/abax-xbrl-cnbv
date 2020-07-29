using AbaxXBRLCore.CellStore.DTO;
using AbaxXBRLCore.CellStore.Services.Impl;
using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.Viewer.Application.Dto;
using AbaxXBRLCore.XPE;
using AbaxXBRLCore.XPE.impl;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Spring.Testing.Microsoft;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestAbaxXBRL
{
    /// <summary>
    /// Prueba unitaria para la persistencia de mongo.
    /// </summary>
    [TestClass]
    public class TestPersistenciaCellStoreMongo : AbstractDependencyInjectionSpringContextTests
    {
        protected override string[] ConfigLocations
        {
            get
            {
                return new string[]
                {
                    "file://Configuracion/TestPersistenciaMongo.xml"
                };
            }
        }
        /// <summary>
        /// Servico a probar.
        /// </summary>
        public AbaxXBRLCellStoreService AbaxXBRLCellStoreService { get; set; }
        /// <summary>
        /// Prueba la persistencia del modelo cellstore.
        /// </summary>
        [TestMethod]
        public void TestPersisteDocumentosXBRLenBD()
        {

            try
            {
                LogUtil.LogDirPath = @"..\..\TestOutput\";
                LogUtil.Inicializa();
                //LogUtil.Info(JsonConvert.ToString("Prueba\n\tnuevo\r\n"));
                var listaArchivosPath = Directory.GetFiles(@"..\..\TestInput\DocumentosXbrl");
                XPEService xpeService = XPEServiceImpl.GetInstance();
                DocumentoInstanciaXbrlDto documentoInstanciXbrlDto = null;
                var taskList = new List<Task>();
                var inicio = DateTime.Now;
                var parametros = new Dictionary<String, object>();
                parametros.Add("FechaRecepcion", DateTime.MinValue);
                foreach (var pathArchivo in listaArchivosPath)
                {
                    var fileName = Path.GetFileName(pathArchivo);
                    using (var reader = File.OpenRead(pathArchivo))
                    {
                        try
                        {
                            LogUtil.Info("Procesando Archivo: " + fileName);
                            documentoInstanciXbrlDto = xpeService.CargaInstanciaXBRLStreamFile(reader, fileName);
                            var modelo = (EstructuraMapeoDTO)AbaxXBRLCellStoreService.ExtraeModeloDocumentoInstancia(documentoInstanciXbrlDto,parametros).InformacionExtra;
                            AbaxXBRLCellStoreService.PersisteModeloCellstoreMongo(modelo);
                        }
                        catch (Exception ex)
                        {
                            LogUtil.Error(ex);
                        }
                    }
                }
                var fin = DateTime.Now;
                LogUtil.Info("Se completa persistencia [" + (fin - inicio).TotalMilliseconds + "] total de milisegundos.");
            }
            catch (Exception e)
            {
                LogUtil.Error(e);
                throw;
            }
        }
    }
}
