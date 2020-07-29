using Microsoft.VisualStudio.TestTools.UnitTesting;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using NPOI.HSSF.UserModel;
using NPOI.SS.UserModel;
using NPOI.XSSF.UserModel;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TestAbaxXBRL.Dtos.Mongo;

namespace TestAbaxXBRL.Reportes
{
    /// <summary>
    /// Procesa un documento de texto con documentos en formato JSON
    /// que representan hechos que forman parte del rol de reportes de ingreso por producto
    /// Crea el reporte de ingresos por producto por cada empresa y lo coloca en una hoja diferente de un excel
    /// </summary>
    [TestClass]
    public class TestGenerarReporteCNBVIngresosPorProducto
    {

        private String[] TipoDeIngresosEje = new String[] {
            "ifrs_mx-cor_20141205_IngresosNacionalesMiembro",
            "ifrs_mx-cor_20141205_IngresosPorExportacionMiembro",
            "ifrs_mx-cor_20141205_IngresosDeSubsidiariasEnElExtranjeroMiembro",
            "ifrs_mx-cor_20141205_IngresosTotalesMiembro"};


        private IDictionary<string, string> EtiquetasMiembro = new Dictionary<string, string>();

        public void init ()
        {
            EtiquetasMiembro["ifrs_mx-cor_20141205_IngresosNacionalesMiembro"] = "Ingresos nacionales [miembro]";
            EtiquetasMiembro["ifrs_mx-cor_20141205_IngresosPorExportacionMiembro"] = "Ingresos por exportación [miembro]";
            EtiquetasMiembro["ifrs_mx-cor_20141205_IngresosDeSubsidiariasEnElExtranjeroMiembro"] = "Ingresos de subsidiarias en el extranjero [miembro]";
            EtiquetasMiembro["ifrs_mx-cor_20141205_IngresosTotalesMiembro"] = "Ingresos totales [miembro]";
        }
        [TestMethod]
        public void TestGeneraExcelIngresosPorProducto ()
        {
            int columnaTipoIngresoInicial = 2;
            int columnaTitulosMarca = 0;
            int columnaTitulosProducto = 1;
            int renglonTitulosTipoIngreso = 2;

            init();

            String path = "../../TestInput/";
            String pathout = "../../TestOutput/";
            String nombreArchivoSalida = "ingresosPorProducto.xlsx";
            String contenidoArchivo = File.ReadAllText(path + "xbrlcellstore.fact.json");
            var settings = new JsonSerializerSettings { NullValueHandling = NullValueHandling.Ignore };

            var listaHechos = JsonConvert.DeserializeObject<IList< HechoCrudoDTO>>(contenidoArchivo,settings);

            foreach(var hechoCrudo in listaHechos)
            {
                ProcesarHecho(hechoCrudo);
            }

            var workbook = new XSSFWorkbook();

            
            var estiloDato = workbook.CreateCellStyle();
            var dataFormatter = workbook.CreateDataFormat();
            estiloDato.IsLocked = false;
            estiloDato.BorderBottom = BorderStyle.Thin;
            estiloDato.BorderLeft = BorderStyle.Thin;
            estiloDato.BorderRight = BorderStyle.Thin;
            estiloDato.BorderTop = BorderStyle.Thin;
            //estiloDato.DataFormat = (short)0x7;
            estiloDato.DataFormat = dataFormatter.GetFormat("$ #,##0");

            var estiloTituloDimension = (XSSFCellStyle)workbook.CreateCellStyle();
            estiloTituloDimension.FillPattern = FillPattern.SolidForeground;
            estiloTituloDimension.FillForegroundXSSFColor = new XSSFColor(Color.FromArgb(221, 235, 247));
            estiloTituloDimension.BorderBottom = BorderStyle.Thin;
            estiloTituloDimension.BorderLeft = BorderStyle.Thin;
            estiloTituloDimension.BorderRight = BorderStyle.Thin;
            estiloTituloDimension.BorderTop = BorderStyle.Thin;
            estiloTituloDimension.GetFont().IsBold = true;
            estiloTituloDimension.Alignment = HorizontalAlignment.Center;
            estiloTituloDimension.VerticalAlignment = VerticalAlignment.Center;
            estiloTituloDimension.WrapText = true;

            var estiloTituloMarca = (XSSFCellStyle)workbook.CreateCellStyle();
            estiloTituloMarca.BorderBottom = BorderStyle.Thin;
            estiloTituloMarca.BorderLeft = BorderStyle.Thin;
            estiloTituloMarca.BorderRight = BorderStyle.Thin;
            estiloTituloMarca.BorderTop = BorderStyle.Thin;
            estiloTituloMarca.GetFont().IsBold = true;
            estiloTituloMarca.WrapText = true;

            var estiloTituloProducto = (XSSFCellStyle)workbook.CreateCellStyle();
            estiloTituloProducto.BorderBottom = BorderStyle.Thin;
            estiloTituloProducto.BorderLeft = BorderStyle.Thin;
            estiloTituloProducto.BorderRight = BorderStyle.Thin;
            estiloTituloProducto.BorderTop = BorderStyle.Thin;
            estiloTituloProducto.GetFont().IsBold = false;
            estiloTituloProducto.WrapText = true;

            foreach(var grupoEmpresa in listaHechos.GroupBy(x => x.entity))
            {
                int totalHechosEmpresa = 0;
                string entidadActual = grupoEmpresa.Key;
                var hojaActual = workbook.CreateSheet(entidadActual);
                int renglonActual = renglonTitulosTipoIngreso;

                var renglonTitulosEmisora = hojaActual.CreateRow(renglonTitulosTipoIngreso-1);
                var celdaTituloEmisora = renglonTitulosEmisora.GetCell(0, MissingCellPolicy.CREATE_NULL_AS_BLANK);
                celdaTituloEmisora.CellStyle = estiloTituloDimension;
                celdaTituloEmisora.SetCellValue("Emisora");
                celdaTituloEmisora = renglonTitulosEmisora.GetCell(1, MissingCellPolicy.CREATE_NULL_AS_BLANK);
                celdaTituloEmisora.CellStyle = estiloDato;
                celdaTituloEmisora.SetCellValue(entidadActual);
                celdaTituloEmisora = renglonTitulosEmisora.GetCell(2, MissingCellPolicy.CREATE_NULL_AS_BLANK);
                celdaTituloEmisora.CellStyle = estiloTituloDimension;
                celdaTituloEmisora.SetCellValue("Trimestre");
                celdaTituloEmisora = renglonTitulosEmisora.GetCell(3, MissingCellPolicy.CREATE_NULL_AS_BLANK);
                celdaTituloEmisora.CellStyle = estiloDato;
                celdaTituloEmisora.SetCellValue("2019 T2");


                var renglonTitulos = hojaActual.CreateRow(renglonActual++);
                var celdaTitulo = renglonTitulos.GetCell(0, MissingCellPolicy.CREATE_NULL_AS_BLANK);
                celdaTitulo.CellStyle = estiloTituloDimension;
                celdaTitulo.SetCellValue("Marcas");
                celdaTitulo = renglonTitulos.GetCell(1, MissingCellPolicy.CREATE_NULL_AS_BLANK);
                celdaTitulo.SetCellValue("Productos");
                celdaTitulo.CellStyle = estiloTituloDimension;
                hojaActual.SetColumnWidth(0, 6500);
                hojaActual.SetColumnWidth(1, 7500);
                var columnaTipoIngresoActual = columnaTipoIngresoInicial;

                foreach(var tipoIngresoActual in TipoDeIngresosEje)
                {

                    var celdaTituloIngreso = renglonTitulos.GetCell(columnaTipoIngresoActual, MissingCellPolicy.CREATE_NULL_AS_BLANK);
                    celdaTituloIngreso.SetCellValue(EtiquetasMiembro[tipoIngresoActual]);
                    celdaTituloIngreso.CellStyle = estiloTituloDimension;
                    hojaActual.SetColumnWidth(columnaTipoIngresoActual, 5500);
                    columnaTipoIngresoActual++;
                }


                foreach(var grupoMarca in grupoEmpresa.GroupBy(x => x.PrincipalesMarcasEje))
                {
                    string marcaActual = grupoMarca.Key;
                    if(marcaActual != "TODAS")
                    {
                        var renglonMarca = hojaActual.CreateRow(renglonActual++);
                        var celdaMarca = renglonMarca.GetCell(columnaTitulosMarca, MissingCellPolicy.CREATE_NULL_AS_BLANK);
                        celdaMarca.SetCellValue(marcaActual);
                        celdaMarca.CellStyle = estiloTituloMarca;
                        foreach(var grupoProducto in grupoMarca.GroupBy(x => x.PrincipalesProductosOLineaDeProductosEje))
                        {
                            string productoActual = grupoProducto.Key;
                            if(productoActual != "TODOS")
                            {
                                var renglonProducto = hojaActual.CreateRow(renglonActual++);
                                var celdaProducto = renglonProducto.GetCell(columnaTitulosProducto, MissingCellPolicy.CREATE_NULL_AS_BLANK);
                                celdaProducto.SetCellValue(productoActual);
                                celdaProducto.CellStyle = estiloTituloProducto;
                                columnaTipoIngresoActual = columnaTipoIngresoInicial;
                                foreach(var tipoIngresoActual in TipoDeIngresosEje)
                                {
                                    var hechosTipoIngreso = grupoProducto.Where(x => x.TipoDeIngresoEje == tipoIngresoActual);
                                    var celdaDato = renglonProducto.GetCell(columnaTipoIngresoActual, MissingCellPolicy.CREATE_NULL_AS_BLANK);
                                    celdaDato.CellStyle = estiloDato;
                                    columnaTipoIngresoActual++;
                                    if(hechosTipoIngreso.Count() > 0)
                                    {
                                        try{
                                            totalHechosEmpresa++;
                                            celdaDato.SetCellValue(double.Parse(hechosTipoIngreso.First().value));
                                        }catch(Exception ex)
                                        {
                                            Debug.WriteLine(ex.StackTrace);
                                        }
                                        
                                    }
                                }
                            }
                        }
                    }
                }

                var renglonTotal = hojaActual.CreateRow(renglonActual++);
                var celdaTituloConceptoTotal = renglonTotal.GetCell(columnaTitulosMarca, MissingCellPolicy.CREATE_NULL_AS_BLANK);
                celdaTituloConceptoTotal.CellStyle = estiloTituloMarca;
                celdaTituloConceptoTotal.SetCellValue("Importe total de ingresos");
                columnaTipoIngresoActual = columnaTipoIngresoInicial;

                var productosTotal = grupoEmpresa.Where(x => x.PrincipalesMarcasEje == "TODAS" && x.PrincipalesProductosOLineaDeProductosEje == "TODOS");
                foreach(var tipoIngresoActual in TipoDeIngresosEje)
                {
                    var hechosTipoIngreso = productosTotal.Where(x => x.TipoDeIngresoEje == tipoIngresoActual);
                    var celdaDato = renglonTotal.GetCell(columnaTipoIngresoActual, MissingCellPolicy.CREATE_NULL_AS_BLANK);
                    celdaDato.CellStyle = estiloDato;
                    columnaTipoIngresoActual++;
                    if(hechosTipoIngreso.Count() > 0)
                    {
                        try
                        {
                            totalHechosEmpresa++;
                            celdaDato.SetCellValue(double.Parse(hechosTipoIngreso.First().value));
                        }
                        catch(Exception ex)
                        {
                            Debug.WriteLine(ex.StackTrace);
                        }

                    }
                }

                Debug.WriteLine(entidadActual+":"+ totalHechosEmpresa);

            }

            if(File.Exists(pathout + nombreArchivoSalida))
            {
                File.Delete(pathout + nombreArchivoSalida);
            }

            using(var streamSalida = new FileStream(pathout + nombreArchivoSalida, FileMode.Create))
            {
                workbook.Write(streamSalida);
            }
                
        }
        /// <summary>
        /// Agrega datos extras al hecho procesado
        /// </summary>
        /// <param name="hechoCrudo"></param>
        private void ProcesarHecho (HechoCrudoDTO hechoCrudo)
        {
            if(hechoCrudo.dimensionMap != null)
            {
                if(hechoCrudo.dimensionMap.ContainsKey("instanceDocmentEntity"))
                {
                    hechoCrudo.entity = hechoCrudo.dimensionMap["instanceDocmentEntity"];
                }

                if(hechoCrudo.dimensionMap.ContainsKey("unit"))
                {
                    hechoCrudo.unit = hechoCrudo.dimensionMap["unit"];
                }

                if(hechoCrudo.dimensionMap.ContainsKey("xbrlDim_ifrs_mx-cor_20141205_PrincipalesMarcasEje"))
                {
                    hechoCrudo.PrincipalesMarcasEje = hechoCrudo.dimensionMap["xbrlDim_ifrs_mx-cor_20141205_PrincipalesMarcasEje"];
                }

                if(hechoCrudo.dimensionMap.ContainsKey("xbrlDim_ifrs_mx-cor_20141205_PrincipalesProductosOLineaDeProductosEje"))
                {
                    hechoCrudo.PrincipalesProductosOLineaDeProductosEje = hechoCrudo.dimensionMap["xbrlDim_ifrs_mx-cor_20141205_PrincipalesProductosOLineaDeProductosEje"];
                }

                if(hechoCrudo.dimensionMap.ContainsKey("xbrlDim_ifrs_mx-cor_20141205_TipoDeIngresoEje"))
                {
                    hechoCrudo.TipoDeIngresoEje = hechoCrudo.dimensionMap["xbrlDim_ifrs_mx-cor_20141205_TipoDeIngresoEje"];
                }
            }
        }
    }
}
