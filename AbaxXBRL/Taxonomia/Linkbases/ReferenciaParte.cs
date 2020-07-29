using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRL.Taxonomia.Linkbases
{
    /// <summary>
    /// Elemento genérico que representa la referencia a un elemento part de la taxonomía y 
    /// almacena el valor de su referencia
    /// </summary>
    public class ReferenciaParte
    {
        /// <summary>
        /// Concepto del tipo Parte al cuál hace referencia el elemento de documentación
        /// </summary>
        public Concept Parte { get; set; }
        /// <summary>
        /// Nombre local con el fué declarado el elemento de referencia
        /// </summary>
        public String NombreLocal { get; set; }
        /// <summary>
        /// Valor del contenido del elemento de referencia
        /// </summary>
        public String Valor { get; set; }
        /// <summary>
        /// Espacio de Nombres del nombre local del elemento de parte
        /// </summary>
        public String EspacioNombres { get; set; }
        /// <summary>
        /// Prefijo usado para la declaración
        /// </summary>
        public String Prefijo { get; set; }

    }
}
