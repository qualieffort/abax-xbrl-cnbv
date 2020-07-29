using AbaxXBRLCore.Common.Util;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.IO;
using NPOI.SS.UserModel;
using NPOI.HSSF.UserModel;
using Spring.Testing.Microsoft;
using AbaxXBRLCore.Services;
using AbaxXBRLCore.Common.Dtos;
using System.Collections.Generic;

namespace TestAbaxXBRL
{
    [TestClass]
    public class TestGenerarReporteCalculoMaterialidadReestructura : AbstractDependencyInjectionSpringContextTests
    {

        protected override string[] ConfigLocations
        {
            get
            {
                return new string[]
                {
                    "assembly://AbaxXBRLCore/AbaxXBRLCore.Config/common.xml",
                    "assembly://AbaxXBRLCore/AbaxXBRLCore.Config/repository.xml",
                    "assembly://AbaxXBRLCore/AbaxXBRLCore.Config.custom/services_desarrollo.xml",
                    "assembly://AbaxXBRLCore/AbaxXBRLCore.Config.custom/servicesrest_desarrollo_solo_mongo.xml",
                    //"assembly://AbaxXBRLCore/AbaxXBRLCore.Config.custom/servicesrest_desarrollo.xml",
                    //"assembly://AbaxXBRLCore/AbaxXBRLCore.Config.custom/servicesrest_mongodisable.xml",
                    "assembly://AbaxXBRLCore/AbaxXBRLCore.Config/bitacora.xml",
                    "assembly://AbaxXBRLCore/AbaxXBRLCore.Config/transaccion.xml",
                    "assembly://AbaxXBRLCore/AbaxXBRLCore.Config/templates.xml",
                    "assembly://AbaxXBRLCore/AbaxXBRLCore.Config/templatesold.xml",
                    "assembly://AbaxXBRLCore/AbaxXBRLCore.Config.Reports/reportesXBRL.xml",
                    "assembly://AbaxXBRLCore/AbaxXBRLCore.Config/connectionMongoDB.xml",
                    "assembly://AbaxXBRLCore/AbaxXBRLCore.Config/serviceBlockStore.xml",

                };
            }
        }

        //private String pathArchivo = @"../../TestInput/Excel/calculo_materialidad_reestructura.xlsx";
        private String pathArchivo2 = @"../../TestInput/Excel/Libro1.xls";

        [TestMethod]
        public void GeneraReporteCalculoMaterialidad()
        {

            LogUtil.LogDirPath = @"..\..\TestOutput\";
            LogUtil.Inicializa();

            IDataFormat format;

            //Con NPOI.
            //FileStream fs = File.Open(pathArchivo2, FileMode.Open, FileAccess.Read);
            FileStream fs = new FileStream(pathArchivo2, FileMode.Open, FileAccess.Read);

            //var workbook = new XSSFWorkbook(fs);
            HSSFWorkbook workbook = new HSSFWorkbook(fs, true);
            ISheet sheet = workbook.GetSheet("Hoja1");
            format = workbook.CreateDataFormat();

            double montoOperacion = 140000000000;
            double tipoCambio = 1;
            double activos = 5338151460000;
            double pasivos = 3655931620000;
            double capital = 1682240500000;
            double ventas = 940381220000;

            ICellStyle cellStyle = workbook.CreateCellStyle();
            cellStyle.DataFormat = format.GetFormat("_-$* #,##0_-;-$* #,##0_-;_-$* ");

            sheet.GetRow(11).GetCell(1).SetCellValue((double)montoOperacion);
            sheet.GetRow(11).GetCell(1).CellStyle = cellStyle;
            sheet.GetRow(12).GetCell(1).SetCellValue((double)tipoCambio);
            sheet.GetRow(13).GetCell(1).SetCellValue((double)(montoOperacion / tipoCambio));
            sheet.GetRow(13).GetCell(1).CellStyle = cellStyle;

            sheet.GetRow(17).GetCell(1).SetCellValue((double)activos);
            sheet.GetRow(17).GetCell(1).CellStyle = cellStyle;
            sheet.GetRow(18).GetCell(1).SetCellValue((double)pasivos);
            sheet.GetRow(18).GetCell(1).CellStyle = cellStyle;
            sheet.GetRow(19).GetCell(1).SetCellValue((double)capital);
            sheet.GetRow(19).GetCell(1).CellStyle = cellStyle;
            sheet.GetRow(20).GetCell(1).SetCellValue((double)ventas);
            sheet.GetRow(20).GetCell(1).CellStyle = cellStyle;

            cellStyle = workbook.CreateCellStyle();
            cellStyle.DataFormat = format.GetFormat("0.00%");

            sheet.GetRow(17).GetCell(2).SetCellValue(((double)(montoOperacion / activos)));
            sheet.GetRow(18).GetCell(2).SetCellValue(((double)(montoOperacion / pasivos)));
            sheet.GetRow(19).GetCell(2).SetCellValue(((double)(montoOperacion / capital)));
            sheet.GetRow(20).GetCell(2).SetCellValue(((double)(montoOperacion / ventas)));
            sheet.GetRow(17).GetCell(2).CellStyle = cellStyle;
            sheet.GetRow(18).GetCell(2).CellStyle = cellStyle;
            sheet.GetRow(19).GetCell(2).CellStyle = cellStyle;
            sheet.GetRow(20).GetCell(2).CellStyle = cellStyle;

            sheet.ForceFormulaRecalculation = true;
            MemoryStream ms = new MemoryStream();
            workbook.Write(ms);
            File.WriteAllBytes(@"..\..\TestOutput\" + "calculo" + ".xls", ms.ToArray() as byte[]);

            //Con Aspose.cells
            //Workbook wb = new Workbook(pathArchivo2);            
            //Worksheet sheet = wb.Worksheets[0];           
            //sheet.Cells.GetCell(11, 1).Value = Double.Parse("140000000000");
            //sheet.Cells.GetCell(12, 1).Value = Double.Parse("1");
            //sheet.Cells.GetCell(17, 1).Value = Double.Parse("5338151460000");
            //sheet.Cells.GetCell(18, 1).Value = Double.Parse("3655931620000");
            //sheet.Cells.GetCell(19, 1).Value = Double.Parse("1682240500000");
            //sheet.Cells.GetCell(20, 1).Value = Double.Parse("940381220000");

            //var chart = sheet.Charts[0];
            //chart.Calculate();

            //wb.Save(@"..\..\TestOutput\" + "calculo_materialidad.xlsx");
        }

        [TestMethod]
        public void GeneraReporteCalculoMaterialidadServicio()
        {
            LogUtil.LogDirPath = @"..\..\TestOutput\";
            LogUtil.Inicializa();
            var reportesService = (IReporteCellStoreMongoService)applicationContext.GetObject("ReporteCellStoreMongoService");

            IDictionary<string, object> parametrosConsulta = new Dictionary<string, object>();
            parametrosConsulta.Add("'Entidad.Nombre'", "'MEXCHEM'");
            parametrosConsulta.Add("'Periodo.Ejercicio'", 2017);

            //ResultadoOperacionDto resultadoOperacionDto = reportesService.GenerarReporteCalculoMaterialidad(parametrosConsulta);

            //File.WriteAllBytes(@"..\..\TestOutput\" + "calculo" + ".xls", resultadoOperacionDto.InformacionExtra as byte[]);

        }

        [TestMethod]
        public void GeneraReportePrincipalesCuentasPorSectores()
        {
            LogUtil.LogDirPath = @"..\..\TestOutput\";
            LogUtil.Inicializa();
            var reportesService = (IReporteCellStoreMongoService)applicationContext.GetObject("ReporteCellStoreMongoService");
            String[] emisoras = { "MEXCHEM", "ABNGOA" };
            int trimestre = 4;
            int anio = 2016;

            //ResultadoOperacionDto resultadoOperacionDto = reportesService.GenerarReporteERyPCS(emisoras, trimestre, anio);
            //File.WriteAllBytes(@"..\..\TestOutput\" + "sectores" + ".xls", resultadoOperacionDto.InformacionExtra as byte[]);
        }

    }
}
