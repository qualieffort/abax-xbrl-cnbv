using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Common.Dtos
{
    /// <summary>
    /// DTO que contiene la información de un hecho importado desde un archivo de excel
    /// </summary>
    public class InformacionHechoImportadoExcelDto
    {
        /// <summary>
        /// Identificador del concepto importado
        /// </summary>
        public String IdConcepto { get; set; }
        /// <summary>
        /// Identificador del hecho actualizado
        /// </summary>
        public String IdHecho { get; set; }
        /// <summary>
        /// Valor leid del archivo excel
        /// </summary>
        public String ValorImportado { get; set; }
        /// <summary>
        /// Nombre de la hoja de la que fue leido el dato
        /// </summary>
        public String HojaExcel { get; set; }
        /// <summary>
        /// Número de renglón
        /// </summary>
        public int Renglon { get; set; }
        /// <summary>
        /// Número de la columna
        /// </summary>
        public int Columna { get; set; }
    }
}
