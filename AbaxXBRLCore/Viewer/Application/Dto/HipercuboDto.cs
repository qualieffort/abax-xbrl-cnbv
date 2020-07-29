using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Viewer.Application.Dto
{
    /// <summary>
    /// Representa la declaración de un hipercubo en la taxonomía a la que pertenece.
    /// Incluye información de su concepto, tipo de relación que crea el hipercubo, si es cerrado o abierto
    /// y el tipo de elemento donde se declara así como su lista de dimensiones y elementos primarios
    /// 
    /// </summary>
    /// <author>Emigdio Hernandez</author>
    public class HipercuboDto
    {
        /// <summary>
        /// Linkbase role donde se declara el hipercubo
        /// </summary>
        public string Rol { get; set; }
        /// <summary>
        /// Arco role con el cuál se declara el hipercubo, all o not-all
        /// </summary>
        public string ArcRoleDeclaracion { get; set; }
        /// <summary>
        /// Tipo de elemento donde se declaran las dimensiones del hipercubo en el contexto, "segment" o "escenario"
        /// </summary>
        public string TipoElementoContexto { get; set; }
        /// <summary>
        /// Indica si el hipercubo es cerrado
        /// </summary>
        public Boolean Cerrado { get; set; }
        /// <summary>
        /// Concepto de la declaración de la tabla
        /// </summary>
        public string IdConceptoHipercubo { get; set; }
        /// <summary>
        /// Concepto abstracto que declara el hipercubo, padre del la declaración del concpeto hipercubo y padre de los elementos primarios (line items)
        /// </summary>
        public string IdConceptoDeclaracionHipercubo { get; set; }
        /// <summary>
        /// Conjunto de Identificadores de los elementos primarios
        /// </summary>
        public IList<string> ElementosPrimarios { get; set; }
        /// <summary>
        /// Conjunto de identificadores de conceptos de cada dimensión del hipercubo
        /// </summary>
        public IList<string> Dimensiones { get; set; }

        /// <summary>
        /// Conjunto de dominios de dimensión estructurados de acuerdo a su declaración en el hipercubo
        /// La llave del diccionario es el id de la dimensión y tiene como valor a su estructura de dominios
        /// </summary>
        public IDictionary<string, IList<EstructuraFormatoDto>> EstructuraDimension;
    }
}
