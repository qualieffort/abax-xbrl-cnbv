using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Viewer.Application.Dto
{
    /// <summary>
    /// Implementación de un DTO para modelar el renglon de la tabla de un Formato XBRL
    /// <author>Luis Angel Morales Gonzalez</author>
    /// <version>1.0</version>
    /// </summary>
    public class RenglonTablaDto
    {
        /** El concepto asociado al renglón del formato de captura genérico XBRL */
        public string idConcepto;

        /** el rol de la etiqueta del concepto del renglon del formato generico XBRL */
        public string rolEtiqueta;

        /** El nivel de indentación del renglón de captura */
        public int indentacion;

        /** Indica si el renglón es visible o no */
        public bool visible;

        //Indica que la celda corresponde un concepto abstracto
        public bool EsAbstracto;
    }
}
