using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Validador.Impl
{
    /// <summary>
    /// Implementación de un objeto de tipo Factory para obtener un objeto específico de validación de acuerdo
    /// a la taxonomía utilizada durante el procesamiento.
    /// Esta implementación es configurada a través de un bean de spring para obtener el validador
    /// de una taxonomía
    /// </summary>
    public class ValidadorArchivoInstanciaXBRLSpringFactory : IValidadorArchivoInstanciaXBRLFactory
    {
        /// <summary>
        /// Inventario de validadores disponibles por URL de entry point de taxonomía
        /// </summary>
        public IDictionary<String, IValidadorArchivoInstanciaXBRL> Validadores { get; set; }
        public IValidadorArchivoInstanciaXBRL ObtenerValidadorInstanciaXBRL(string entryPoint)
        {
            IValidadorArchivoInstanciaXBRL validador = null;
            if (Validadores.ContainsKey(entryPoint)) {
                validador = Validadores[entryPoint];
            }
            return validador;
        }
    }
}
