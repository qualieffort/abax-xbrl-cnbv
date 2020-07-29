using AbaxXBRLCore.Reports.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Reports.Util
{
    /// <summary>
    /// Retorna un listado con los titulos.
    /// </summary>
    public class TitulosReporteUtil
    {
        public static IDictionary<String, String> obtenerTitulos(ReporteXBRLDTO reporteXBRLDTO)
        {
            IDictionary<String, String> titulos = new Dictionary<String, String>();

            titulos.Add("trim_actual",                  reporteXBRLDTO.ObtenValorEtiquetaReporte("TRIMESTRE_ACTUAL"));					
            titulos.Add("cierre_trim_actual",           reporteXBRLDTO.ObtenValorEtiquetaReporte("CIERRE_TRIMESTRE_ACTUAL"));  
            titulos.Add("cierre_trim_anio_anterior",    reporteXBRLDTO.ObtenValorEtiquetaReporte("CIERRE_EJERCICIO_ANTERIOR"));
            titulos.Add("inicio_trim_anio_anterior",    reporteXBRLDTO.ObtenValorEtiquetaReporte("INICIO_EJERCICIO_ANTERIOR"));
            titulos.Add("trim_anio_actual",             reporteXBRLDTO.ObtenValorEtiquetaReporte("TRIMESTRE_ANO_ACTUAL"));     
            titulos.Add("trim_anio_anterior",           reporteXBRLDTO.ObtenValorEtiquetaReporte("TRIMESTRE_ANO_ANTERIOR"));   
            titulos.Add("acum_anio_actual",             reporteXBRLDTO.ObtenValorEtiquetaReporte("ACUMULADO_ANO_ACTUAL"));     
            titulos.Add("acum_anio_anterior",           reporteXBRLDTO.ObtenValorEtiquetaReporte("ACUMULADO_ANO_ANTERIOR"));   
            titulos.Add("anio_actual",                  reporteXBRLDTO.ObtenValorEtiquetaReporte("ANO_ACTUAL"));               
            titulos.Add("anio_anterior",                reporteXBRLDTO.ObtenValorEtiquetaReporte("ANO_ANTERIOR"));

            // Etiquetas para Reporte Anual y prospecto
            titulos.Add("periodo_actual",               reporteXBRLDTO.ObtenValorEtiquetaReporte("PERIODO_ACTUAL"));
            titulos.Add("periodo_anterior",             reporteXBRLDTO.ObtenValorEtiquetaReporte("PERIODO_ANTERIOR"));
            titulos.Add("periodo_pre_anterior",         reporteXBRLDTO.ObtenValorEtiquetaReporte("PERIODO_PRE_ANTERIOR"));
            titulos.Add("anual_actual",                 reporteXBRLDTO.ObtenValorEtiquetaReporte("ANUAL_ACTUAL"));
            titulos.Add("anual_anterior",               reporteXBRLDTO.ObtenValorEtiquetaReporte("ANUAL_ANTERIOR"));
            titulos.Add("anual_pre_anterior",           reporteXBRLDTO.ObtenValorEtiquetaReporte("ANUAL_PRE_ANTERIOR"));

            return titulos;
        }
    }
}
