using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestAbaxXBRL.JBRL.Modelo
{
    /// <summary>
    /// Definición de un dato expresado dentro de la definición JBRL
    /// </summary>
    public class ConceptoXBRL
    {
        /// <summary>
        /// El identificador del concepto dentro del reporte. Debe ser único a los demás conceptos.
        /// </summary>
        public String id { get; set; }
        /// <summary>
        /// La etiqueta del concepto que se presentará al usuario
        /// </summary>
        public String etiqueta { get; set; }
        /// <summary>
        /// La descripción para documentar el propósito del concepto en el reporte de negocio
        /// </summary>
        public String descripcion { get; set; }
        /// <summary>
        ///  El identificador del tipo de dato
        /// </summary>
        public TipoDatoJBRL tipoDato { get; set; }
    }
}
