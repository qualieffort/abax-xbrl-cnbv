using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Common.Dtos
{
    /// <summary>
    /// Calse auxilia con configuraciones adicionales para el manejo de documentos de instancia XBRL.
    /// </summary>
    public class ConfiguracionAuxiliarXBRL
    {
        /// <summary>
        /// Diccionario con los sustituso de determinados puntos de entrada cuando se lee o se genera una instancia XBRL.
        /// </summary>
        public IDictionary<String,String> DominiosSustitutosDocumentoInstancia { get; set; }

        /// <summary>
        /// Diccionario con los sustituso de determinados puntos de entrada cuando se carga una taxonomía.
        /// </summary>
        public IDictionary<String, String> DominiosSustitutosTaxonomia { get; set; }
    }
}
