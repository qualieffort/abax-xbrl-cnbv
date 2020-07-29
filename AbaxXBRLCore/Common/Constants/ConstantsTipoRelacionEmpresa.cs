using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Common.Constants
{
    /// <summary>
    /// Clase de constantes de los tipos de relación entre empresas
    /// </summary>
    public static class ConstantsTipoRelacionEmpresa
    {
        /// <summary>
        /// Indica que la empresa primaria es fiduciaria de la empresa secundaria que es fideicomitente
        /// </summary>
        public const int FIDUCIARIO_DE_FIDEICOMITENTE = 1;

        /// <summary>
        /// Indica que la empresa primaria es Representante común de la empresa secundaria que es fideicomitente.
        /// </summary>
        public const int REPRESENTANTE_COMUN_DE_FIDEICOMITENTE = 2;

    }
}
