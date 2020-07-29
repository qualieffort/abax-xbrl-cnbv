using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Viewer.Application.Dto
{
    /// <summary>
    /// Implementación de un Data Transfere Object el cual representa el DTS de una taxonomía XBRL utilizada para la creación de un documento instancia XBRL.
    /// <author>José Antonio Huizar Moreno</author>
    /// <version>1.0</version>
    /// </summary>
    public class TaxonomiaDto
    {
        /// <summary>
        /// Los roles contenidos, con estructuras de presentación, dentro de la taxonomía
        /// </summary>
        public IList<RolDto<EstructuraFormatoDto>> RolesPresentacion { get; set; }

        /// <summary>
        /// Los roles contenidos, con estructuras de cálculo, dentro de la taxonomía
        /// </summary>
        public IList<RolCalculoDTO> RolesCalculo { get; set; }

        /// <summary>
        /// Lista de los roles de definición en la taxonomía
        /// </summary>
        public IList<RolDto<EstructuraFormatoDto>> RolesDefinicion { get; set; }

        /// <summary>
        /// Contiene la definición de todos los conceptos indexados por su identificador.
        /// </summary>
        public IDictionary<string, ConceptoDto> ConceptosPorId { get; set; }

        /// <summary>
        /// Indice que contiene a los conceptos de la taxonía organizados por su Qname completo
        /// </summary>
        public IDictionary<string, string> ConceptosPorNombre { get; set; }
        
        /// <summary>
        /// Contiene el listado de valores predeterminados para una dimensión, estos aplican
        /// en cualquier hipercubo donde se declare la dimensión
        /// la llave es el ID de la dimensión y el valor es su miembro predeterminado
        /// </summary>
        public IDictionary<string, string> DimensionDefaults { get; set; }
        /// <summary>
        /// Conjunto de tipos de datos XBRL de la taxonomía organizados por nombre
        /// </summary>
        public IDictionary<string, TipoDatoXbrlDto> TiposDeDatoXbrlPorNombre { get; set; }

        /// <summary>
        /// Contiene el listado de idiomas dentro de la taxonomía
        /// </summary>
        public IDictionary<string, string> IdiomasTaxonomia { get; set; }

        /// <summary>
        /// Las diferentes etiquetas asociadas a los roles organizadas por idioma y posteriormente por rol.
        /// </summary>
        public IDictionary<string, IDictionary<string, EtiquetaDto>> EtiquetasRol { get; set; }
        /// <summary>
        /// Lista de los hipercubos declarados en la taxonomía, organizados por Rol donde fueron declarados
        /// </summary>
        public IDictionary<string, IList<HipercuboDto>> ListaHipercubos { get; set; }
        /// <summary>
        /// El prefijo del espacio de nombres del entry point
        /// </summary>
        public String PrefijoTaxonomia { get; set; }
        /// <summary>
        /// El espacio de nombres objetivo de la taxonomía
        /// </summary>
        public String EspacioDeNombres { get; set; }
        /// <summary>
        /// Espacio de nombres del punto de entrada de la taxonomía
        /// </summary>
        public String EspacioNombresPrincipal { get; set; }

        public IDictionary<String, IDictionary<String,IList<String>>> ConceptosHipercubosNegados { get; set; }
        /// <summary>
        /// Nombre con el que esta registrada la taxonomía en BD.
        /// </summary>
        public String nombreAbax { get; set; }
    }
}
