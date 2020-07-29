using System;
using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.Reports.Builder.Factory;
using AbaxXBRLCore.Reports.Exporter.Impl;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Spring.Testing.Microsoft;
using System.IO;
using AbaxXBRLCore.XPE.impl;
using AbaxXBRLCore.XPE.Common;
using AbaxXBRLCore.Viewer.Application.Model.Impl;
using System.Threading;

namespace TestAbaxXBRL
{
    [TestClass]
    public class TestReportesXBRL : AbstractDependencyInjectionSpringContextTests
    {
        protected override string[] ConfigLocations
        {
            get
            {
                return new string[]
                {
                    //"assembly://AbaxXBRLCore/AbaxXBRLCore.Config/common.xml",
                    //"assembly://AbaxXBRLCore/AbaxXBRLCore.Config/repository.xml",
                    //"assembly://AbaxXBRLCore/AbaxXBRLCore.Config/services.xml",
                    //"assembly://AbaxXBRLCore/AbaxXBRLCore.Config/servicesrest.xml",
                    //"assembly://AbaxXBRLCore/AbaxXBRLCore.Config/bitacora.xml",
                    //"assembly://AbaxXBRLCore/AbaxXBRLCore.Config/transaccion.xml",
                    "assembly://AbaxXBRLCore/AbaxXBRLCore.Config/templates.xml",
                    "assembly://AbaxXBRLCore/AbaxXBRLCore.Config/templatesold.xml",
                    "assembly://AbaxXBRLCore/AbaxXBRLCore.Config.Reports/reportesXBRL.xml",
                    //"assembly://AbaxXBRLCore/AbaxXBRLCore.Config/connectionMongoDB.xml",
                    //"assembly://AbaxXBRLCore/AbaxXBRLCore.Config/serviceBlockStore.xml",
                };
            }
        }

        [TestMethod]
        public void GeneraReportesXBRL()
        {
            LogUtil.LogDirPath = @"..\..\TestOutput\";
            LogUtil.Inicializa();
            Exception exceptionThrow = null;
            var listaArchivosPath = Directory.GetFiles(@"..\..\TestInput\XBRL");
            var xpe = XPEServiceImpl.GetInstance();
            if (xpe.GetErroresInicializacion() != null && xpe.GetErroresInicializacion().Count > 0)
            {
                LogUtil.Error(xpe.GetErroresInicializacion());
            }
            foreach (var pathArchivo in listaArchivosPath)
            {
                try 
                {
                    var fileName = Path.GetFileName(pathArchivo);
                    var extension = Path.GetExtension(pathArchivo);
                    if (!String.IsNullOrEmpty(extension) && !extension.ToLower().Equals(".xbrl"))
                    {
                        LogUtil.Info("No se procesa el archivo: " + pathArchivo + "\nSu extensión es: " + extension??String.Empty);
                        continue;
                    }

                    
                    ConfiguracionCargaInstanciaDto config = new ConfiguracionCargaInstanciaDto();

                    config.UrlArchivo = Path.GetFullPath(pathArchivo);
                    config.ConstruirTaxonomia = true;
                    config.EjecutarValidaciones = false;
                    var documento = xpe.CargarDocumentoInstanciaXbrl(config);
                    if (documento == null)
                    {
                        if (documento == null)
                        {
                            LogUtil.Error("No fué posible procesar el documento: " + pathArchivo);
                            continue;
                        }
                    }

                    var factoryBuilder = (ReporteBuilderFactory)applicationContext.GetObject("ReporteBuilderFactory");
                    var factoryExporter = (ExportadorDocumentoInstanciaFactory)applicationContext.GetObject("ExportadorDocumentoInstanciaFactory");
                    //var builder = factoryBuilder.obtenerReporteBuilder(instanciaDto,"en");
                    if (documento.Taxonomia != null)
                    {
                        LogUtil.Info("documento.Taxonomia.EspacioNombresPrincipal:" + documento.Taxonomia.EspacioNombresPrincipal ?? null);
                    }
                    LogUtil.Info("documento.EspacioNombresPrincipal:" + documento.EspacioNombresPrincipal ?? "null");
                    var espacioNombres = documento.Taxonomia != null ?
                        documento.Taxonomia.EspacioNombresPrincipal ?? documento.EspacioNombresPrincipal :
                        documento.EspacioNombresPrincipal;
                    espacioNombres = espacioNombres.Replace("/", "_").Replace(" ", "_").Replace("-", "_").Replace(":", "_").Replace(".", "_");
                    var plantillaDocumento = (DefinicionPlantillaXbrlAbstract)applicationContext.GetObject(espacioNombres);
                    plantillaDocumento.DeterminarParametrosConfiguracion(documento);

                    var builder = factoryBuilder.obtenerReporteBuilder(documento, plantillaDocumento);
                    var exporter = factoryExporter.ObtenerExportadorParaDocumento(documento);
                    var pathSalida = @"..\..\TestOutput\Reportes\" + fileName;
                    builder.crearReporteXBRLDTO(documento);

                    //using (var fileStreamPDF = new FileStream(pathSalida + ".pdf", FileMode.Create))
                    //{
                    //    var instanciaSalidaPDF = exporter.exportarDocumentoAPDF(documento, builder.ReporteXBRLDTO);
                    //    fileStreamPDF.Write(instanciaSalidaPDF, 0, instanciaSalidaPDF.Length);
                    //    fileStreamPDF.Flush();
                    //    fileStreamPDF.Close();
                    //}

                    using (var fileStreamWord = new FileStream(pathSalida + ".docx", FileMode.Create))
                    {
                        var instanciaSalidaWord = exporter.exportarDocumentoAWord(documento, builder.ReporteXBRLDTO);
                        fileStreamWord.Write(instanciaSalidaWord, 0, instanciaSalidaWord.Length);
                        fileStreamWord.Flush();
                        fileStreamWord.Close();
                    }

                    using (var fileStreamHtml = new FileStream(pathSalida + ".html", FileMode.Create))
                    {
                        var instanciaSalidaHTML = exporter.exportarDocumentoAHTML(documento, builder.ReporteXBRLDTO);
                        fileStreamHtml.Write(instanciaSalidaHTML, 0, instanciaSalidaHTML.Length);
                        fileStreamHtml.Flush();
                        fileStreamHtml.Close();
                    }

                    builder = factoryBuilder.obtenerReporteBuilder(documento, plantillaDocumento, "en");
                    exporter = factoryExporter.ObtenerExportadorParaDocumento(documento);
                    pathSalida = @"..\..\TestOutput\Reportes\" + fileName + "-en";
                    builder.crearReporteXBRLDTO(documento);


                    //using (var fileStreamPDF = new FileStream(pathSalida + ".pdf", FileMode.Create))
                    //{
                    //    var instanciaSalidaPDF = exporter.exportarDocumentoAPDF(documento, builder.ReporteXBRLDTO);
                    //    fileStreamPDF.Write(instanciaSalidaPDF, 0, instanciaSalidaPDF.Length);
                    //    fileStreamPDF.Flush();
                    //    fileStreamPDF.Close();
                    //}

                    using (var fileStreamWord = new FileStream(pathSalida + ".docx", FileMode.Create))
                    {
                        var instanciaSalidaWord = exporter.exportarDocumentoAWord(documento, builder.ReporteXBRLDTO);
                        fileStreamWord.Write(instanciaSalidaWord, 0, instanciaSalidaWord.Length);
                        fileStreamWord.Flush();
                        fileStreamWord.Close();
                    }

                    using (var fileStreamHtml = new FileStream(pathSalida + ".html", FileMode.Create))
                    {
                        var instanciaSalidaHTML = exporter.exportarDocumentoAHTML(documento, builder.ReporteXBRLDTO);
                        fileStreamHtml.Write(instanciaSalidaHTML, 0, instanciaSalidaHTML.Length);
                        fileStreamHtml.Flush();
                        fileStreamHtml.Close();
                    }
                }catch(Exception exception)
                {
                    LogUtil.Error(exception);
                    LogUtil.Error("pathArchivo: " + pathArchivo);
                    if (exceptionThrow == null)
                    {
                        exceptionThrow = exception;
                    }
                }

                if (exceptionThrow != null)
                {

                    throw exceptionThrow;
                }
                
            }
        }
    }
}
