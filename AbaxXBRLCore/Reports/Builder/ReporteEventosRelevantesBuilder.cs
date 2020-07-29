using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.Reports.Constants;
using AbaxXBRLCore.Reports.Dto;
using AbaxXBRLCore.Reports.Util;
using AbaxXBRLCore.Viewer.Application.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Reports.Builder
{
    /// <summary>
    /// Constructor para la taxonomia Eventos Relevantes encargado de construir un objeto ReporteXBRLDTO a partir de un documento de instancia XBRL.
    /// </summary>
    public class ReporteEventosRelevantesBuilder : ReporteBuilder
    {
       /// <summary>
	    /// Constructor por default.
	    /// Inicia el idioma por default del ReporteXBRLDTO.
	    /// </summary>
	    private ReporteEventosRelevantesBuilder():base() {}
	

	    /// <summary>
	    /// Constructor que recibe como parametro el idioma que utilizara el ReporteXBRLDTO.
	    /// </summary>
	    ///  @param idioma
        private ReporteEventosRelevantesBuilder(String idioma) : base(idioma) { }
	

	    /// <summary>
	    /// (non-Javadoc)
	    /// </summary>
	    ///  @see com.bmv.spread.xbrl.reportes.builder.ReporteBuilder#newInstance()
        override public ReporteBuilder newInstance(IDefinicionPlantillaXbrl plantilla)
        {
            ReporteBuilder builder = new ReporteEventosRelevantesBuilder();
		    builder.Cache = Cache;
		    return builder;
	    }
	

	    /// <summary>
	    /// (non-Javadoc)
	    /// </summary>
	    ///  @see com.bmv.spread.xbrl.reportes.builder.ReporteBuilder#newInstance(java.lang.String)
	    override public ReporteBuilder newInstance(IDefinicionPlantillaXbrl plantilla, String idioma) {
            ReporteBuilder builder = new ReporteEventosRelevantesBuilder(idioma);
		    builder.Cache = Cache;
		    return builder;
	    }

        public override void obtenerValoresIniciales(Viewer.Application.Dto.DocumentoInstanciaXbrlDto instancia)
        {
            String nombreReporte = ReporteXBRLUtil.NOMBRE_REPORTE_EVENTO_RELEVANTE;

            String claveCotizacion = ReporteXBRLUtil.obtenerValorHecho("rel_ev_Ticker", instancia);
            String razonSocial = ReporteXBRLUtil.obtenerValorHecho("rel_ev_BusinessName", instancia);
            String fechaReporte = ReporteXBRLUtil.obtenerValorHecho("rel_ev_Date", instancia);
            String fechaCreacion = DateUtil.ToFormatString(DateTime.Now, ReporteXBRLUtil.FORMATO_FECHA_CREACION);

            if (String.IsNullOrEmpty(claveCotizacion))
            {
                claveCotizacion = ReporteXBRLUtil.obtenerValorHecho("rel_news_Ticker", instancia);
            }
            if (String.IsNullOrEmpty(razonSocial))
            {
                razonSocial = ReporteXBRLUtil.obtenerValorHecho("rel_news_BusinessName", instancia);
            }
            if (String.IsNullOrEmpty(fechaReporte))
            {
                fechaReporte = ReporteXBRLUtil.obtenerValorHecho("rel_news_Date", instancia);
            }

            reporteXBRLDTO.ClaveCotizacion = claveCotizacion;
            reporteXBRLDTO.RazonSocial = razonSocial;
            reporteXBRLDTO.FechaReporte = fechaReporte;
           
            reporteXBRLDTO.FechaCreacion = fechaCreacion;

            if (claveCotizacion != null && fechaReporte != null)
            {
                nombreReporte = nombreReporte.
                        Replace(ReporteXBRLUtil.CLAVE_COTIZACION, claveCotizacion).
                        Replace(ReporteXBRLUtil.FECHA_CREACION, fechaCreacion).Replace(ReporteXBRLUtil.FECHA, fechaReporte);

                reporteXBRLDTO.NombreReporte = nombreReporte;
            }
        }

        public override void crearRoles(Viewer.Application.Dto.DocumentoInstanciaXbrlDto instancia)
        {
            IDictionary<String, IList<ConceptoReporteDTO>> roles = new Dictionary<String, IList<ConceptoReporteDTO>>();
            IList<ConceptoReporteDTO> conceptos = null;
            try
            {
                foreach (IndiceReporteDTO indice in reporteXBRLDTO.Indices)
                {
                    String id = indice.Rol;
                    conceptos = llenarRolNotas(obtenerConceptos(id), instancia);
                    roles.Add(id, conceptos);
                }
            }
            catch (Exception e)
            {
                LogUtil.Error(e);
            }

            reporteXBRLDTO.Roles = roles;
        }
    }
}
