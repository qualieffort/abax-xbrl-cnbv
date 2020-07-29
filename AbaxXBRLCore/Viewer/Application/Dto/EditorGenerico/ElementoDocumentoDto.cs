using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Viewer.Application.Dto.EditorGenerico
{
    /// <summary>
    /// Implementación de un DTO el cual representa un elemento del documento dentro del documento instancia XBRL.
    /// <author>Luis Angel Morales Gonzalez</author>
    /// <version>1.0</version>
    /// </summary>
    public class ElementoDocumentoDto
    {
        /** El tipo de elemento Título */
        public const int Titulo = 1;

        /** El tipo de elemento Tabla */
        public const int Tabla = 2;


        /** El tipo del elemento que compone la estructura del documento */
        public int tipo;


        /** El identificador del concepto abstracto que dió origen al título */
        public string idConcepto;

        /** El nivel del indentación que debe aplicarse al elemento */
        public int indentacion;

        /** Contiene la definición de la estructura de la tabla */
        public EstructuraTablaDto tabla;

        /** Indica si se debe de presentar la tabla en el caso que se tengan hechos que presentar*/
        public bool mostrarElementoDocumento;

        /** Indica si el formato se encuentra en actualización de dimensiones, renglones y columnas*/
        public bool actualizarDatosPorConfiguracion;
    }
}
