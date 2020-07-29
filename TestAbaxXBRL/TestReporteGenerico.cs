using Microsoft.VisualStudio.TestTools.UnitTesting;
using AbaxXBRLCore.Export;
using AbaxXBRLCore.Viewer.Application.Service.Impl;
using AbaxXBRL.Taxonomia.Impl;
using NPOI.XSSF.UserModel;
using NPOI.SS.UserModel;
using System.IO;
using AbaxXBRLCore.ExportGeneric;
using System.Collections.Generic;
using System;
using AbaxXBRL.Taxonomia;
using AbaxXBRLCore.Common.Util;
using AbaxXBRL.Constantes;
using System.Runtime.InteropServices;
using NPOI.HSSF.Util;
using NPOI.SS.Util;
using NPOI.HSSF.UserModel;

namespace TestAbaxXBRL
{
    [TestClass]
    public class TestReporteGenerico
    {

        [TestMethod]
        public void GeneracionReporte()
        {
            string rutaArchivoXBRL = @"E:\samplesXBRL\800001\ifrsxbrl_DAIMLER_2015-2.xbrl";
            string rutaDestino = @"E:\VictorCastro\ExcelXbrlGenerico\plantilla_2015_fibra.xlsx";
            string idioma = "es";
            bool agruparPorunidad = true;

            CrearReporteGenerico crearReporteGenerico = new CrearReporteGenerico();
            var contenido = crearReporteGenerico.ExcelStream(rutaArchivoXBRL, idioma, agruparPorunidad).ToArray();
            crearReporteGenerico.CrearArchivoEnExcel(contenido, rutaDestino);

        }

    }
}

