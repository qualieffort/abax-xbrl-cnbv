using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Viewer.Application.Dto.EditorGenerico
{
    /// <summary>
    /// Implementación de un DTO el cual representa informacion dimensional del documento instancia XBRL.
    /// <author>Luis Angel Morales Gonzalez</author>
    /// <version>1.0</version>
    /// </summary>
    public class InformacionDimensionDto
    {
        /** Indica que la dimensión existe en la definición de la taxonomía */

        public const int Real=1; 

        /** Indica que la dimensión no existe en la definición de la taxonomía, como la fecha o la entidad */
        public const int Ficticia=2;

        /** 
        Constantes para los identificadores de dimensión de tiempo y entidad
        */
        public static string ID_DIMENSION_TIEMPO = "abax_dim_tiempo";

        public static string ID_DIMENSION_ENTIDAD = "abax_dim_entidad";

        /** El tipo de la dimensión real o ficticia */
        public int tipo;

        /** El identificador del concepto que da origen a la dimensión */
        public string idConceptoEje;

        /** El título que debe desplegarse al usuario */
        public string titulo;

        /** El listado de valores de miembros que componen la dimensión */
        public Dictionary<string, MiembroDimensionDto> miembros;

        /** El orden en que debe presentarse la dimensión con respecto a los demás */
        public int orden;

        /** Profundidad total de los miembros de la dimensión */

        public int profundidad;

        /** Estructura de vista que da origen a la dimension */
        public EstructuraFormatoDto subEstructuraOrigen;
        /**
         * Constructor por defecto de la clase InformacionDimension
         */
        public InformacionDimensionDto()
        {
            this.miembros = new Dictionary<string, MiembroDimensionDto>();
        }

    }
}
