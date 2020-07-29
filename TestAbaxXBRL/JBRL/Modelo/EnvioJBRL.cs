using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestAbaxXBRL.JBRL.Modelo
{
    public class EnvioJBRL
    {
        /// <summary>
        /// Identificador del reporte considerando la fecha de creación o recepción del documento.
        /// </summary>
        public String id { get; set; }
        /// <summary>
        /// Identificador único que permite identificar el archivo o conjunto de información de un mismo reporte.
        /// </summary>
        public String reporteId { get; set; }
        /// <summary>
        /// Identificador del tipo de reporte generado, taxonomía a la que pertenece el reporte, punto de entrada.
        /// </summary>
        public String taxonomia { get; set; }
        /// <summary>
        /// Mapa de parametros de clasificación del reporte, es similar al contexto del hecho pero a un nivel más general que permite clasificar el conjunto en su totalidad.
        /// Ej. Entidad, FechaReportada,  Fideicomiso, nombreArchivo.
        /// </summary>
        public IDictionary<String, String> parametros;
        /// <summary>
        /// Indica la fecha de recepción o creación del documento actual.
        /// </summary>
        public DateTime fechaCreacion { get; set; }
    }
}
