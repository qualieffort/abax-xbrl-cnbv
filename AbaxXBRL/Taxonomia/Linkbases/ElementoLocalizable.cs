using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRL.Taxonomia.Linkbases
{
    /// <summary>
    /// Clase base para los elementos de un linkbase extendido que puedan ser referenciados por un arco en sus atributos from y to
    /// </summary>
    public class ElementoLocalizable 
    {
        /// <summary>
        /// Constructor predeterminado
        /// </summary>
        public ElementoLocalizable() { }
        /// <summary>
        /// Constructor que recibe elemento XBRL con contiene o al que apunta este elemento localizable
        /// </summary>
        /// <param name="elemento"></param>
        public ElementoLocalizable(ElementoXBRL elemento)
        {
            Destino = elemento;
            if (elemento.GetType() == typeof(Recurso))
            {
                //llenar los elelementos de recurso
                Recurso rec = (Recurso)elemento;
                Etiqueta = rec.Etiqueta;
                Rol = rec.Rol;
                Titulo = rec.Titulo;
                Tipo = rec.Tipo;
            }
        }
        /// <summary>
        /// Referencia al concepto que localiza este localizador
        /// </summary>
        public ElementoXBRL Destino { get; set; }
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
    }
}
