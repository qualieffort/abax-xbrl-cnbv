using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Viewer.Application.Dto.EditorGenerico
{
    /// <summary>
    /// Implementación de un DTO para modelar el miembro de la dimensión de un Formato XBRL
    /// <author>Luis Angel Morales Gonzalez</author>
    /// <version>1.0</version>
    /// </summary>
    public class MiembroDimensionDto
    {
        /** El identificador del concepto que dió origen a este miembro de la dimensión */
        public string idConceptoMiembro;

        /** Identificador de la dimensión a la que pertenece */
        public string idDimension;

        /** El título del miembro en caso de ser ficticio */
        public string titulo;

        /** Indica si el miembro es visible en pantalla */
        public bool visible;

        /** La identación con que debe presentarse la etiqueta del miembro */
        public int indentacion;

        /** Miembro tipificado para el caso de dimensiones implicitas */
        public string elementoMiembroTipificado;

        /**Arreglo con información extra de la dimensión */
        public Dictionary<string, object> informacionExtra;

        /** Indica si el miembro de la dimensión no tiene un contexto definido*/
        public bool tieneContextoIndefinido;

        /** Indica si el miembro es de dimensión ficticia*/
        public bool esDimensionFicticia;

        /** Indica si este miembro, por ejemplo fecha, agrupa otras fechas de inicio y de fin **/
        public bool esMiembroAgrupado;

        //Miembros que este miembro agrupa
        public List<MiembroDimensionDto> miembrosAgrupados;

        /* Color de la dimensión en el encabezado */
        public string color;

    }
}
