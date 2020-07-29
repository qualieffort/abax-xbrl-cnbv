using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Viewer.Application.Dto
{
    /// <summary>
    /// Implementación de un DTO el cual contiene la información de firmas de un XBRL Sobre.
    /// <author>Jorge Luis Trujillo Huerta</author>
    /// <version>1.0</version>
    /// </summary>
    public class FirmasXBRLSobreDTO
    {
        /// <summary>
        /// El nombre del rol
        /// </summary>
        public string PathXbrlSobreDtoJson { get; set; }

        /// <summary>
        /// Contiene las operaciones de cálculo 
        /// </summary>
        public IList<FirmaElectronicaDTO> ListadoFirmas { get; set; }
    }
}
