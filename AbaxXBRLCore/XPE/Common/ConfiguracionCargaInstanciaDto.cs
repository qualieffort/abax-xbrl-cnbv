using AbaxXBRLCore.Common.Cache;
using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.Viewer.Application.Dto;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.XPE.Common
{
    /// <summary>
    ///  DTO de configuración de carga de un documento de instancia, engloba las opciones de carga en un solo objeto de configuración
    /// </summary>
    /// 
    public class ConfiguracionCargaInstanciaDto
    {
        /// <summary>
        /// Indica que el documento de instancia debe de ser cargado desde este flujo de bytes, tiene prioridad sobre el URL
        /// </summary>
        public Stream Archivo { get; set; }
        /// <summary>
        /// Indica que el documento de instancia debe ser cargado desde esta ruta
        /// </summary>
        public String UrlArchivo { get; set; }
        /// <summary>
        /// Contiene el objeto que representa al caché de taxonomías, en caso que se requiera utilizar, puede ser null
        /// </summary>
        public ICacheTaxonomiaXBRL CacheTaxonomia { get; set; }
        /// <summary>
        /// Lista de errores a llenar en caso de problemas en la carga, no null
        /// </summary>
        public IList<ErrorCargaTaxonomiaDto> Errores { get; set; }
        /// <summary>
        /// Indica si se deben de ejecutar las validaciones al documento de instancia
        /// </summary>
        public bool EjecutarValidaciones { get; set; }
        /// <summary>
        /// Objeto para llenar la información estadística de la carga, puede ser null
        /// </summary>
        public AbaxCargaInfoDto InfoCarga { get; set; }
        /// <summary>
        /// Indica si al no encontrar la taxonomía en el caché y el caché no es nulo se debe de crear un objeto nuevo de taxonomía para el caché
        /// </summary>
        public bool ConstruirTaxonomia { get; set; }
        /// <summary>
        /// Indica si se debe de forzar el cerrado de los recursos abiertos al procesar un XBRL
        /// </summary>
        public bool ForzarCerradoDeXbrl { get; set; }
    }
}
