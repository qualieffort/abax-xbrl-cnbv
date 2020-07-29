using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRL.Constantes
{
    /// <summary>
    /// Contiene la definición de los Linkbases soportados por AbaxXBRL.
    /// <author>José Antonio Huizar Moreno</author>
    /// <version>1.0</version>
    /// </summary>
    public sealed class LinkbasesXBRL
    {
        /// <summary>
        /// El Linkbase de Presentacion
        /// </summary>
        public static readonly LinkbasesXBRL LinkbasePresentacion = new LinkbasesXBRL("presentationLink");

        /// <summary>
        /// El Linkbase de Cálculo
        /// </summary>
        public static readonly LinkbasesXBRL LinkbaseCalculo = new LinkbasesXBRL("calculationLink");

        /// <summary>
        /// El Linkbase de Definición
        /// </summary>
        public static readonly LinkbasesXBRL LinkbaseDefinicion = new LinkbasesXBRL("definitionLink");

        /// <summary>
        /// El Linkbase de Etiquetas
        /// </summary>
        public static readonly LinkbasesXBRL LinkbaseEtiqueta = new LinkbasesXBRL("labelLink");

        /// <summary>
        /// El Linkbase de Referencia
        /// </summary>
        public static readonly LinkbasesXBRL LinkbaseReferencia = new LinkbasesXBRL("referenceLink");

        /// <summary>
        /// El Linkbase Genérico
        /// </summary>
        public static readonly LinkbasesXBRL LinkbaseGenerico = new LinkbasesXBRL("link");

        /// <summary>
        /// El valor del linkbase como cadena.
        /// </summary>
        public string Valor { get; private set; }

        /// <summary>
        /// Constructor privado de la clase.
        /// </summary>
        /// <param name="valor">El valor para el linkbase.</param>
        private LinkbasesXBRL(string valor)
        {
            Valor = valor;
        }

        /// <summary>
        /// Obtiene la representación en cadena del linkbase.
        /// </summary>
        /// <param name="ne">el linkbase a representar como cadena</param>
        /// <returns>el valor como cadena del linkbase</returns>
        public static implicit operator string(LinkbasesXBRL ne) 
        {
            return ne.Valor; 
        }
    }
}
