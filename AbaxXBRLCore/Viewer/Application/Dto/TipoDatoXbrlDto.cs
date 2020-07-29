using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Viewer.Application.Dto
{
    /// <summary>
    /// Representa un tipo de dato XBRL.
    /// Se incluye, para los tipos de datos Token la lista de posibles valores
    /// a elegir
    /// </summary>
    /// <author>Emigdio Hernandez</author>
    public class TipoDatoXbrlDto
    {
        /// <summary>
        /// Espacio de nombres donde se definió el tipo de dato
        /// </summary>
        public string EspacioNombres { get; set; }
        /// <summary>
        /// Nombre local del tipo de dato
        /// </summary>
        public string Nombre { get; set; }
        /// <summary>
        /// Indica si el tipo de dato de este item es de tipo fractionItemType o derivado de este.
        /// </summary>
        public bool EsTipoDatoFraccion { get; set; }

        /// <summary>
        /// Indica si el tipo de dato de este item es derivado de alguno de los tipos numéricos XBRL.
        /// </summary>
        public bool EsTipoDatoNumerico { get; set; }

        /// <summary>
        /// Indica si el tipo de dato de este item es de tipo monetaryItemType o derivado de este.
        /// </summary>
        public bool EsTipoDatoMonetario { get; set; }
        /// <summary>
        /// Indica si el tipo de dato de este item es de tipo sharesItemType o derivado de este
        /// </summary>
        public bool EsTipoDatoAcciones { get; set; }
        /// <summary>
        /// Indica si el tipo de dato de este item es de tipo pureItemType o derivado de este
        /// </summary>
        public bool EsTipoDatoPuro { get; set; }
        /// <summary>
        /// Indica si el tipo de dato es tipo Token
        /// </summary>
        public bool EsTipoDatoToken { get; set; }

        /// <summary>
        /// Indica si el tipo de dato es tipo Boolean
        /// </summary>
        public bool EsTipoDatoBoolean { get; set; }
        /// <summary>
        /// Posible lista de valores para un tipo de dato token
        /// </summary>
        public IList<string> ListaValoresToken { get; set; }
        /// <summary>
        /// Para algunos tipos de datos token, es requerido el patrón que limita la cadena utilizada
        /// </summary>
        public string Pattern { get; set; }
    }
}
