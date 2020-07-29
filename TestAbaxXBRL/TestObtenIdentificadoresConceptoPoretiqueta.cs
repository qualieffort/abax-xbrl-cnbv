using AbaxXBRLCore.CellStore.Modelo;
using AbaxXBRLCore.CellStore.Services.Impl;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using NPOI.SS.UserModel;
using NPOI.XSSF.UserModel;
using Spring.Testing.Microsoft;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestAbaxXBRL
{
    [TestClass]
    public class TestObtenIdentificadoresConceptoPoretiqueta : AbstractDependencyInjectionSpringContextTests
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

        [TestMethod]
        public void TestObtenIdentificadoresConcepto()
        {
            var taxonomia = "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/pros_H_entry_point_2016-08-22";
            var rutaArchivo = @"..\..\TestOutput\Plantillaconceptos.xlsx";
            using (var streamPlantilla = File.OpenRead(rutaArchivo))
            {
                var workBookPlantilla = new XSSFWorkbook(streamPlantilla);

                for (var sheetIndex = 0; sheetIndex < workBookPlantilla.NumberOfSheets; sheetIndex++)
                {
                    var sheet = workBookPlantilla.GetSheetAt(sheetIndex);
                    for (var rowIndex = sheet.FirstRowNum; rowIndex < sheet.LastRowNum; rowIndex++)
                    {
                        var row = sheet.GetRow(rowIndex);
                        var labelCell = row.GetCell(0);
                        if (labelCell == null || labelCell.CellType.Equals(CellType.Blank) || String.IsNullOrWhiteSpace(labelCell.StringCellValue))
                        {
                            continue;
                        }
                        var etiqueta = labelCell.StringCellValue.Trim();
                        var consulta = "{\"Taxonomia\": \"" + taxonomia + "\", \"Concepto.Etiquetas.Valor\": {$regex: \"" + etiqueta + "\", $options: \"i\" } }";
                        var listaHechos = AbaxXBRLCellStoreService.ConsultaElementosColeccion<Hecho>(consulta);
                        
                        var listaIdsConceptos = ObtenIdConceptosEtiquetaHecho(listaHechos, etiqueta);
                        var indiceColumna = 1;
                        foreach (var idConcepto in listaIdsConceptos)
                        {
                            var celdaIdConcepto = row.GetCell(indiceColumna);
                            if (celdaIdConcepto == null)
                            {
                                celdaIdConcepto = row.CreateCell(indiceColumna);
                            }
                            celdaIdConcepto.SetCellValue(idConcepto);
                            celdaIdConcepto.SetCellType(CellType.String);
                            indiceColumna++;
                        }
                    }
                }
                using (var salida = new MemoryStream())
                {
                    workBookPlantilla.Write(salida);
                    streamPlantilla.Close();
                    File.WriteAllBytes(rutaArchivo, salida.ToArray());
                }
            }
        }
        /// <summary>
        /// Obtiene los identificadores de concepto para la etiqueta buscada.
        /// </summary>
        /// <param name="listaRolesPresentacion">Lista con los identificadores de concepto.</param>
        /// <param name="etiqueta">Etiqueta buscada.</param>
        /// <returns>Lista de identificadores de concepto con la etiqueta buscada</returns>
        public IList<String> ObtenIdConceptosEtiqueta(IList<RolPresentacion> listaRolesPresentacion, String etiqueta)
        {
            
            var listaIdentificadores = new List<String>();
            var etiquetaUpper = etiqueta.ToUpper();
            foreach (var rolPresentacion in listaRolesPresentacion)
            {
                foreach (var concepto in rolPresentacion.Conceptos)
                {
                    foreach (var etiquetaConcepto in concepto.Etiquetas)
                    {
                        if (etiquetaConcepto.Idioma.Equals("es") && etiquetaConcepto.Valor.Trim().ToUpper().Equals(etiquetaUpper))
                        {
                            listaIdentificadores.Add(concepto.IdConcepto);
                        }
                    }
                }
            }
            return listaIdentificadores;
        }
        /// <summary>
        /// Obtiene los identificadores de concepto para la etiqueta buscada.
        /// </summary>
        /// <param name="listaRolesPresentacion">Lista con los identificadores de concepto.</param>
        /// <param name="etiqueta">Etiqueta buscada.</param>
        /// <returns>Lista de identificadores de concepto con la etiqueta buscada</returns>
        public IList<String> ObtenIdConceptosEtiquetaHecho(IList<Hecho> listaHechos, String etiqueta)
        {

            var listaIdentificadores = new List<String>();
            var etiquetaUpper = etiqueta.ToUpper();
            foreach (var hecho in listaHechos)
            {
                var conceptoId = hecho.Concepto.IdConcepto;
                if (!listaIdentificadores.Contains(conceptoId))
                {
                    listaIdentificadores.Add(conceptoId);
                }
            }
            return listaIdentificadores;
        }
    }
}
