using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRL.Taxonomia.Validador
{
    /// <summary>
    /// Representa el mecanismo de validación de documentos relacionados con el estándar XBRL.
    /// <author>José Antonio Huizar Moreno</author>
    /// <version>1.0</version>
    /// </summary>
    public interface IValidadorXBRL
    {
        /// <summary>
        /// El manejador de errores del validador.
        /// </summary>
        IManejadorErroresXBRL ManejadorErrores { get; set; }

        /// <summary>
        /// Valida la estructura del documento. Los errores son reportados a través del manejador de errores.
        /// </summary>
        void ValidarDocumento();
    }
}
