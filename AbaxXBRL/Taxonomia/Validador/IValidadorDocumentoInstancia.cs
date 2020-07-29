using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRL.Taxonomia.Validador
{
    /// <summary>
    /// Definición de un validador de la estructura y contenido de un documento instancia.
    /// <author>José Antonio Huizar Moreno</author>
    /// <version>1.0</version>
    /// </summary>
    public interface IValidadorDocumentoInstancia : IValidadorXBRL
    {
        /// <summary>
        /// El documento instancia a validar.
        /// </summary>
        IDocumentoInstanciaXBRL DocumentoInstancia { get; set; }
    }
}
