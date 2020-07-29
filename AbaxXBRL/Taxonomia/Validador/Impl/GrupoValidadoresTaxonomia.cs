using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRL.Taxonomia.Validador.Impl
{
    /// <summary>
    /// Implementación de un grupo de validadores que serán aplicados a la taxonomía.
    /// <author>José Antonio Huizar Moreno</author>
    /// <version>1.0</version>
    /// </summary>
    public class GrupoValidadoresTaxonomia : IGrupoValidadoresTaxonomia
    {
        /// <summary>
        /// El documento instancia a validar.
        /// </summary>
        public IDocumentoInstanciaXBRL DocumentoInstancia { get; set; }

        /// <summary>
        /// La taxonomía a validar
        /// </summary>
        public ITaxonomiaXBRL Taxonomia { get; set; }

        /// <summary>
        /// Los validadores que serán aplicados a la taxonomía.
        /// </summary>
        private IList<IValidadorXBRL> Validadores = new List<IValidadorXBRL>();

        #region Miembros de IGrupoValidadoresTaxonomia

        public IManejadorErroresXBRL ManejadorErrores { get; set; }

        public void ValidarDocumento()
        {
            foreach (IValidadorXBRL validador in Validadores)
            {
                if (validador is IValidadorTaxonomia)
                {
                    ((IValidadorTaxonomia)validador).Taxonomia = Taxonomia;
                    validador.ValidarDocumento();
                }
                else
                {
                    ((IValidadorDocumentoInstancia)validador).DocumentoInstancia = DocumentoInstancia;
                    validador.ValidarDocumento();
                }
            }
        }

        public void AgregarValidador(IValidadorXBRL validador)
        {
            validador.ManejadorErrores = ManejadorErrores;
            Validadores.Add(validador);
        }

        #endregion
    }
}
