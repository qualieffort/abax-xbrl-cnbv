using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRL.Taxonomia.Validador
{
    /// <summary>
    /// Representa un grupo de validadores que serán aplicados a la taxonomía.
    /// <author>José Antonio Huizar Moreno</author>
    /// <version>1.0</version>
    /// </summary>
    public interface IGrupoValidadoresTaxonomia
    {
        /// <summary>
        /// El manejador de errores del validador.
        /// </summary>
        IManejadorErroresXBRL ManejadorErrores { get; set; }

        /// <summary>
        /// El documento instancia a validar.
        /// </summary>
        IDocumentoInstanciaXBRL DocumentoInstancia { get; set; }

        /// <summary>
        /// La taxonomía a validar
        /// </summary>
        ITaxonomiaXBRL Taxonomia { get; set; }

        /// <summary>
        /// Valida la estructura de la taxonomía y el documento instancia.  Los errores son reportados a través del manejador de errores.
        /// </summary>
        /// <param name="taxonomia">la taxonomía a validar</param>
        void ValidarDocumento();

        /// <summary>
        /// Agrega un validador al grupo de validadores que serán aplicados 
        /// </summary>
        /// <param name="validador">el validador a agregar</param>
        void AgregarValidador(IValidadorXBRL validador);
    }
}
