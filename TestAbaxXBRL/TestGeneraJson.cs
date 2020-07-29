using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.Viewer.Application.Dto;
using AbaxXBRLCore.XPE;
using AbaxXBRLCore.XPE.impl;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;

namespace TestAbaxXBRL
{
    [TestClass]
    public class TestGeneraJson 
    {
        
        [TestMethod]
        public void TestGeneraJsonDeXBRL()
        {
            try
            {
                LogUtil.LogDirPath = @"..\..\TestOutput\";
                LogUtil.Inicializa();
                //LogUtil.Info(JsonConvert.ToString("Prueba\n\tnuevo\r\n"));
                var listaArchivosPath = Directory.GetFiles(@"..\..\TestInput\DocumentosXbrlToJson");
                XPEService xpeService = XPEServiceImpl.GetInstance();
                DocumentoInstanciaXbrlDto documentoInstanciXbrlDto = null;
                var taskList = new List<Task>();
                var inicio = DateTime.Now;
                foreach (var pathArchivo in listaArchivosPath)
                {
                    var fileName = Path.GetFileName(pathArchivo);
                    using (var reader = File.OpenRead(pathArchivo))
                    {
                        try
                        {
                            LogUtil.Info("Procesando Archivo: " + fileName);
                            documentoInstanciXbrlDto = xpeService.CargaInstanciaXBRLStreamFile(reader, fileName);
                            var contenido = JsonConvert.SerializeObject(documentoInstanciXbrlDto, Formatting.Indented);
                            using (StreamWriter sw = File.AppendText(@"..\..\TestOutput\DocumentosXbrlToJson\" + fileName + ".json"))
                            {
                                sw.WriteLine(contenido);
                                sw.Close();
                            }
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
