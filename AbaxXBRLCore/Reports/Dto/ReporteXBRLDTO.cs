using AbaxXBRLCore.Viewer.Application.Dto;
using AbaxXBRLCore.Viewer.Application.Model;
using AbaxXBRLCore.Viewer.Application.Model.Impl;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Reports.Dto
{
    public class ReporteXBRLDTO
    {

        public ReporteXBRLDTO() 
        {
 
        }
        public String Taxonomia {get; set;}

        public String PrefijoTaxonomia {get; set;}

        public String PrefijoRaProspecto { get; set; }

        public String ClaveCotizacion {get; set;}

        public String FechaReporte {get; set;}

        public String Anio {get; set;}

        public String Trimestre {get; set;}

        public String Moneda {get; set;}

        public Boolean Consolidado {get; set;}

        public String Fideicomiso {get; set;}

        public String Fideicomitente {get; set;}

        public String Series { get; set; }

        public String FechaCreacion {get; set;}

        public String NombreReporte {get; set;}

        public String RazonSocial {get; set;}

        public String IndicadorConsolidado {get; set;}
        /// <summary>
        /// Diccionario con parametros generales de configuración.
        /// </summary>
        public IDictionary<string, object> ParametrosConfiguracion {get; set;}

        public IDictionary<Object, Object> ParametrosReporte {get; set;}

        public IDictionary<String, String> PeriodosReporte {get; set;}

        public IDictionary<String, String> Titulos {get; set;}

        public String[] NombresHojas {get; set;}

        public IList<IndiceReporteDTO> Indices {get; set;}

        public IDictionary<String, IList<ConceptoReporteDTO>> Roles {get; set;}

        public IDictionary<String, HipercuboReporteDTO> Hipercubos { get; set; }

        public IList<DesgloseDeCreditosReporteDto> DesgloseCreditos {get; set;}

        public IList<IngresosProductoReporteDto> IngresosProducto {get; set;}
        /// <summary>
        /// Documento de instancia iterado para este reporte.
        /// </summary>
        public DocumentoInstanciaXbrlDto Instancia { get; set; }

        /// <summary>
        /// Plantilla del documento de instancia.
        /// </summary>
        public IDefinicionPlantillaXbrl Plantilla { get; set; }
        /// <summary>
        /// Código del lenguaje en el que esta presentado este reporte.
        /// </summary>
        public string Lenguaje { get; set; }
        /// <summary>
        /// Diccionario con las etiquetas que aplican por rol.
        /// </summary>
        public IDictionary<string, EtiquetaDto> EtiquetasConceptos { get; set;}
        /// <summary>
        /// Configuración general para la generación del reporte.
        /// </summary>
        public ConfiguracionReporteDTO ConfiguracionReporte { get; set; }
        /// <summary>
        /// Diccionario con la lista de conceptos a presentar por cada rol.
        /// </summary>
        public IDictionary<string, IList<ConceptoReporteDTO>> ConceptosReportePorRol { get; set; }
        /// <summary>
        /// Diccionario de notas al pie. Mantiene el orden en que son agregadas.
        /// </summary>
        public IOrderedDictionary NotasAlPie { get; set; }
        /// <summary>
        /// Bandera que indica si aplica el consolidado o no.
        /// </summary>
        public bool AplicaConsolidado {get; set;}
        /// <summary>
        /// Bandera que indica si se debe agregar el signo de pesos a los datos moentarios.
        /// </summary>
        public bool AgregarSignoAMonetarios { get; set; }
        /// <summary>
        /// Diccionario con los archivos adjuntos por el identificador del hecho.
        /// </summary>
        public IDictionary<String, ArchivoReporteDTO> ArchivosAdjuntos { get; set; }

        /// <summary>
        /// Retorna el valor de la etiqueta por su nombre.
        /// </summary>
        /// <param name="nombreEtiqueta">Nombre de la etiqueta solicitada.</param>
        /// <returns>Valor de la etiqueta.</returns>
        public string ObtenValorEtiquetaReporte(string nombreEtiqueta)
        {
            var etiquetasPorLenguaje = ConfiguracionReporte.EtiquetasReportePorLenguaje;
            IDictionary<string, string> etiquetas = null;
            if (etiquetasPorLenguaje != null && etiquetasPorLenguaje.ContainsKey(Lenguaje))
            {
                etiquetas = etiquetasPorLenguaje[Lenguaje];
            }
            else 
            {
                etiquetas = etiquetasPorLenguaje.Values.First();
            }

            return etiquetas[nombreEtiqueta];
        }
    }
}
