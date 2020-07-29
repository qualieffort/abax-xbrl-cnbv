using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRL.Taxonomia.Linkbases
{
    /// <summary>
    /// Algunos enlaces extendidos PUEDEN contener recursos. Un recurso es un fragmento XML en un enlace extendido que está relacionado a otros 
    /// recursos en el mismo enlace extendido y a recursos fuera del enlace extendido.
    /// <author>José Antonio Huizar Moreno</author>
    /// <version>1.0</version>
    /// </summary>
    public class Recurso : ElementoXBRL
    {
        /// <summary>
        /// El tipo que siempre debe ser utilizado para un <code>Recurso</code>
        /// </summary>
        public const string TipoRecurso = "resource";

        /// <summary>
        /// La etiqueta que se le da al <code>Recurso</code>. A partir de esta etiqueta será identificado el <code>Recurso</code> en un enlace extendido.
        /// </summary>
        public string Etiqueta { get; set; }

        /// <summary>
        /// El rol del <code>Recurso</code>. Este atributo es opcional.
        /// </summary>
        public string Rol { get; set; }

        /// <summary>
        /// El título del <code>Recurso</code>. Este atributo es opcional.
        /// </summary>
        public string Titulo { get; set; }

        /// <summary>
        /// El tipo del <code>Recurso</code> y siempre debe contener el valor <code>arc</code> 
        /// </summary>
        public string Tipo { get; set; }

        /// <summary>
        /// Valor del recurso
        /// </summary>
        public String Valor { get; set; }

        /// <summary>
        /// Código del lenguaje en el que está representado el valor del recurso
        /// </summary>
        public String Lenguaje { get; set; }
        /// <summary>
        /// Prioridad de la declaración del arco que conecta a este recurso
        /// </summary>
        public int Prioridad { get; set; }

        public override String ToString()
        {
            return Id + ":" + Rol + ":" + Valor;
        }
    }
}
