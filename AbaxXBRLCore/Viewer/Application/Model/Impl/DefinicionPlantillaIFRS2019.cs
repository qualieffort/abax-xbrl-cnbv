using AbaxXBRLCore.Viewer.Application.Import;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRLCore.Viewer.Application.Model.Impl
{
    /// <summary>
    /// Implementación particular de los métodos usados por la versión 2019 de IFRS
    /// </summary>
    class DefinicionPlantillaIFRS2019 : DefinicionPlantillaBmv2014
    {
        /// <summary>
        /// Implementació default
        /// </summary>
        /// <param name="workbook"></param>
        /// <param name="resumenProceso"></param>
        /// <returns></returns>
        public override bool ValidarPlantillaExcelImportacion(NPOI.SS.UserModel.IWorkbook workBookImportar, Common.Dtos.ResumenProcesoImportacionExcelDto resumenProceso)
        {
            bool puedeContinuar = true;
            var espacioNombresPlantilla = "";
            if (workBookImportar.NumberOfSheets > 0)
            {
                //2019 Validar opcionalmente que la plantilla corresponda al espacio de nombres de la taxonomía
                //en la hoja 1, renglón 1, columna 2 se colocará el espacio de nombres de la taxonomía
                var hoja1 = workBookImportar.GetSheetAt(0);
                var renglon1 = hoja1.GetRow(0);
                if (renglon1 != null)
                {
                    var celdaValidacion = renglon1.GetCell(1);
                    if (celdaValidacion != null)
                    {
                        espacioNombresPlantilla = celdaValidacion.StringCellValue;
                    }
                }
            }
            if (!this.documentoInstancia.EspacioNombresPrincipal.Equals(espacioNombresPlantilla))
            {
                resumenProceso.InformeErrores.Add(new InformeErrorImportacion()
                {
                    Mensaje = "El documento Excel no pertenece a la taxonomía que está utilizando (" + this.documentoInstancia.Taxonomia.nombreAbax + ")." +
                "\nAsegúrese que el documento corresponda a la taxonomía de la que desea importar los datos."
                });

                puedeContinuar = false;
            }
            return puedeContinuar;
        }
    }
}
