using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRL.Constantes
{
    /// <summary>
    /// Códigos de error utilizado para las excepciones de la clase AbaxXbrlException
    /// </summary>
    public class CodigoErrorConstantes
    {
        /// <summary>
        /// Error que indica que el ID del contexto ya fue utilizado en el documento
        /// </summary>
        public const int CONTEXTO_REPETIDO = 1;
        /// <summary>
        /// Error que indica que el ID de la unidad ya fue utilizado en el documento
        /// </summary>
        public const int UNIDAD_REPETIDA = 2;
        /// <summary>
        /// Error que indica que se intenta agregar un hecho sin referencia a su concepto
        /// </summary>
        public const int HECHO_SIN_CONCEPTO = 3;
        /// <summary>
        /// Error que indica que se intenta agregar un hecho cuyo ID está repetido
        /// </summary>
        public const int HECHO_ID_REPETIDO = 4;
        /// <summary>
        /// Error que indica que un hecho intenta ser agegado con un concepto que no pertenece a la taxonomía
        /// </summary>
        public const int HECHO_CON_CONCEPTO_NO_TAXONOMIA = 5;
    }
}
