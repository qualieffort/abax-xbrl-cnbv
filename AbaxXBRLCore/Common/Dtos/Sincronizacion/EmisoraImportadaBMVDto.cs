using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRLCore.Common.Dtos.Sincronizacion
{
    /// <summary>
    /// DTO que representa a una emisora importada de la información compartida por la BMV
    /// </summary>
    public class EmisoraImportadaBMVDto
    {
        /// <summary>
        /// Número de línea del archivo leído
        /// </summary>
        public long NumeroLinea { get; set; }
        /// <summary>
        /// Clave de la emisora importada
        /// </summary>
        public String Clave { get; set; }
        /// <summary>
        /// Razón social de la emisora importada
        /// </summary>
        public String RazonSocial { get; set; }
        /// <summary>
        /// RFC de la emisora importada
        /// </summary>
        public String RFC { get; set; }
        /// <summary>
        /// Fecha de inscripción de la emisora en formato ddMMyyyy
        /// </summary>
        public String FechaInscripcion { get; set; }
        /// <summary>
        /// Estatus de la emisora: ACTIVA,SUSPENDIDA,LISTADO_PREVENTIVO
        /// </summary>
        public String Estatus { get; set; }
        /// <summary>
        /// Identificador de referencia de la empresa en la base de datos
        /// </summary>
        public long IdReferencia { get; set; }
        /// <summary>
        /// Tipo de movimiento sobre la empresa
        /// </summary>
        public int TipoMovimiento { get; set; }
        /// <summary>
        /// Clave del fiduciario emisor en caso de que sea fideicomiso
        /// </summary>
        public String ClaveFiduciarioEmisor { get; set; }
        /// <summary>
        /// Razón social del fideicomiso / fideicomitente
        /// </summary>
        public String RazonSocialFideicomiso {get;set;}
        /// <summary>
        /// Indica si es fideicomiso
        /// </summary>
        public Boolean EsFideicomiso { get; set; }
        /// <summary>
        /// Error en el registro
        /// </summary>
        public String Error { get; set; }
    }
}
