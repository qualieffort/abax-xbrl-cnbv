using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.Reports.Constants;
using AbaxXBRLCore.Reports.Dto;
using AbaxXBRLCore.Reports.Exporter.Impl.Rol;
using AbaxXBRLCore.Reports.Util;
using AbaxXBRLCore.Viewer.Application.Dto;
using AbaxXBRLCore.Viewer.Application.Model;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Reports.Builder
{
    /// <summary>
    /// Constructor para la taxonomia IFRS encargado de construir un objeto ReporteXBRLDTO a partir de un documento de instancia XBRL.
    /// </summary>
    public class ReporteIFRSXBRLBuilder2019 : ReporteBuilder
    { 
	    /// <summary>
	    /// Constructor por default.
	    /// Inicia el idioma por default del ReporteXBRLDTO.
	    /// </summary>
	    private ReporteIFRSXBRLBuilder2019():base() {}

	    /// <summary>
	    /// Constructor que recibe como parametro el idioma que utilizara el ReporteXBRLDTO.
	    /// </summary>
	    ///  @param idioma
	    private ReporteIFRSXBRLBuilder2019(String idioma):base(idioma) {}

	    /// <summary>
	    /// (non-Javadoc)
	    /// </summary>
	    ///  @see com.bmv.spread.xbrl.reportes.builder.ReporteBuilder#newInstance()
        public override ReporteBuilder newInstance(IDefinicionPlantillaXbrl plantilla)
        {
		    ReporteBuilder builder = new ReporteIFRSXBRLBuilder2019();
		    builder.Cache = Cache;
		    return builder;
	    }

	    /// <summary>
	    /// (non-Javadoc)
	    /// </summary>
	    ///  @see com.bmv.spread.xbrl.reportes.builder.ReporteBuilder#newInstance(java.lang.String)
        public override ReporteBuilder newInstance(IDefinicionPlantillaXbrl plantilla, String idioma)
        {
		    ReporteBuilder builder = new ReporteIFRSXBRLBuilder2019(idioma);
		    builder.Cache = Cache;
		    return builder;
	    }

	    /// <summary>
	    /// (non-Javadoc)
	    /// </summary>
	    ///  @see com.bmv.spread.xbrl.reportes.builder.ReporteBuilder#obtenerValoresIniciales(com.hh.xbrl.abax.viewer.application.dto.DocumentoInstanciaXbrlDto)
	    public override void obtenerValoresIniciales(DocumentoInstanciaXbrlDto instancia)
        {
		    String nombreReporte = ReporteXBRLUtil.NOMBRE_REPORTE_IFRS;
		
		    String claveCotizacion = ReporteXBRLUtil.obtenerValorHecho(ReportConstants.ID_CLAVE_COTIZACION_2014, instancia);
		    String fechaReporte = ReporteXBRLUtil.obtenerValorHecho(ReportConstants.ID_FECHA_CIERRE_REPORTE_2014, instancia);
		    String anio = fechaReporte.Substring(0, fechaReporte.IndexOf("-"));
		    String trimestre = ReporteXBRLUtil.obtenerValorHecho(ReportConstants.ID_TRIMESTRE_REPORTADO, instancia);
		    String moneda = ReporteXBRLUtil.obtenerValorMoneda(instancia);
		    String fechaCreacion =  DateUtil.ToFormatString(DateTime.Now,ReporteXBRLUtil.FORMATO_FECHA_CREACION);
            String stringConsolidado = ReporteXBRLUtil.obtenerValorHecho(ReportConstants.ID_CUENTA_CONSOLIDADO, instancia);
            Boolean consolidado = false;
            Boolean.TryParse(stringConsolidado,out consolidado);

            reporteXBRLDTO.AplicaConsolidado = true;
		    reporteXBRLDTO.ClaveCotizacion = claveCotizacion;
		    reporteXBRLDTO.RazonSocial = ReporteXBRLUtil.obtenerValorHecho(ReportConstants.ID_NOMBRE_RAZON_SOCIAL, instancia);
		    reporteXBRLDTO.FechaReporte = fechaReporte;
		    reporteXBRLDTO.Anio = anio;
		    reporteXBRLDTO.Trimestre = trimestre;
		    reporteXBRLDTO.Moneda = moneda;
		    reporteXBRLDTO.Consolidado = consolidado;
		    reporteXBRLDTO.FechaCreacion = fechaCreacion;
		
		    if (claveCotizacion != null && fechaReporte != null && trimestre != null && moneda != null && consolidado != null)
            {
			    nombreReporte = nombreReporte.
				    Replace(ReporteXBRLUtil.CLAVE_COTIZACION, claveCotizacion).
				    Replace(ReporteXBRLUtil.ANIO, anio).
				    Replace(ReporteXBRLUtil.TRIMESTRE, trimestre).
				    Replace(ReporteXBRLUtil.MONEDA, moneda).
				    Replace(ReporteXBRLUtil.CONSOLIDACION, (consolidado ? ReporteXBRLUtil.CONSOLIDADO : ReporteXBRLUtil.NO_CONSOLIDADO)).
				    Replace(ReporteXBRLUtil.FECHA_CREACION, fechaCreacion);
			
			    reporteXBRLDTO.NombreReporte = nombreReporte;
		    }
	    }

	    /// <summary>
	    /// (non-Javadoc)
	    /// </summary>
	    ///  @see com.bmv.spread.xbrl.reportes.builder.ReporteBuilder#crearRoles(com.hh.xbrl.abax.viewer.application.dto.DocumentoInstanciaXbrlDto)
	    public override void crearRoles(DocumentoInstanciaXbrlDto instancia)
        {
            //StopWatch w = new StopWatch();
            //w.start();
		    IDictionary<String, IList<ConceptoReporteDTO>> roles = new Dictionary<String, IList<ConceptoReporteDTO>>();
		    IList<ConceptoReporteDTO> conceptos = null;
		
		    try 
            {
                //LogUtil.Info(reporteXBRLDTO.Indices);
			    foreach(IndiceReporteDTO indice  in  reporteXBRLDTO.Indices)
			    {
                    //StopWatch w2 = new StopWatch();
                    //w2.start();
				    String id = indice.Rol;
                    //LogUtil.Info(indice);
                    conceptos = null;
				    //LogUtil.Info("ID ROL: " + id);
                    
                    if (id.Contains("610000"))
                    {
                        conceptos = llenarRol610000(id, obtenerConceptos(id), instancia);
                    }
                    else
                    {
                        switch(id)
                        {
                            case "105000": case "110000":
                            case "800007": case "800500":
                            case "800600": case "813000":
                                conceptos = llenarRolNotas(obtenerConceptos(id), instancia);
                                break;

                            case "210000": case "310000":
                            case "410000": case "520000":
                            case "700000": case "700002":
                            case "700003": case "800100":
                            case "800200": case "800201":
                            case "815101":
                            case "815100":
                                conceptos = llenarRolCalculo(obtenerConceptos(id), instancia);
                                break;

                            case "800001":
                                reporteXBRLDTO.DesgloseCreditos = llenarDesgloseDeCreditos(instancia);
                                break;

                            case "800003":
                                conceptos = llenarRol800003(obtenerConceptos(id), instancia);
                                break;

                            case "800005":
                                reporteXBRLDTO.IngresosProducto = llenarIngresosProducto(instancia);
                                break;
                        }
                    }

				    if (conceptos != null)
                    {
					    roles.Add(id, conceptos);
				    }

                    //w2.stop();
                    //log.info("Tiempo en generar rol [" + id + "] : " + ReporteXBRLUtil.obtenerTiempos(w2));
			    }
			
			    //Realizar ajustes específicos de la taxonomia
		    }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
                throw;
		    }
		
		    reporteXBRLDTO.Roles = roles;
		    ajustarTercerColumnaEPF(instancia);
		    quitarTrimestralesParaTrimestre1(instancia);
            quitarConceptos4D(instancia);
		
            //w.stop();
            //log.info("Tiempo en crearRoles() : " + ReporteXBRLUtil.obtenerTiempos(w));
	    }

	    /// <summary>
	    /// Quita las columnas con información trimestral cuando es un trimestre 1 de forma
	    /// que solo se quede la información de acumulado anual
	    /// </summary>
	    ///  @param instancia
	    private void quitarTrimestralesParaTrimestre1(DocumentoInstanciaXbrlDto instancia)
        {
		    if (ReporteXBRLDTO.Trimestre.Equals("1"))
            {
			    foreach (String rol in reporteXBRLDTO.Roles.Keys)
                {
				    if (rol.Equals("310000") || rol.Equals("410000") || rol.Equals("700002") || rol.Equals("800200") || rol.Equals("800201")){
					    foreach (ConceptoReporteDTO concepto in reporteXBRLDTO.Roles[rol])
                        {
						    if (concepto.Hechos != null)
                            {
							    concepto.Hechos.Remove("trim_anio_actual");
							    concepto.Hechos.Remove("trim_anio_anterior");
						    }
					    }
				    }
			    }
		    }
	    }

        private void quitarConceptos4D(DocumentoInstanciaXbrlDto instancia)
        {
            if (!string.Equals(reporteXBRLDTO.Trimestre, ReporteXBRLUtil.CUARTO_TRIMESTRE_DICTAMINADO))
            {
                IList<ConceptoReporteDTO> rol110 = reporteXBRLDTO.Roles["110000"];
                if (rol110 != null)
                {
                    var conceptosARemover = rol110.Where(c =>
                        c.IdConcepto.Equals("ifrs_mx-cor_20141205_FechaDeOpinionSobreLosEstadosFinancierosBloqueDeTexto") ||
                        c.IdConcepto.Equals("ifrs_mx-cor_20141205_NombreDeProveedorDeServiciosDeAuditoriaExternaBloqueDeTexto") ||
                        c.IdConcepto.Equals("ifrs_mx-cor_20141205_NombreDelSocioQueFirmaLaOpinionBloqueDeTexto") ||
                        c.IdConcepto.Equals("ifrs_mx-cor_20141205_TipoDeOpinionALosEstadosFinancierosBloqueDeTexto") ||
                        c.IdConcepto.Equals("ifrs_mx-cor_20141205_FechaDeAsambleaEnQueSeAprobaronLosEstadosFinancierosBloqueDeTexto")
                    ).ToList();

                    foreach (var concepto in conceptosARemover)
                    {
                        rol110.Remove(concepto);
                    }
                }
            }
        }	

	    private IList<ConceptoReporteDTO> llenarRol800003(IList<ConceptoReporteDTO> conceptos, DocumentoInstanciaXbrlDto instancia)
        {
		    foreach(ConceptoReporteDTO concepto  in  conceptos)
		    {
			    HechoReporteDTO hechoReporte = null;
			
			    llenarConcepto(concepto, instancia);
			
			    IDictionary<String, HechoReporteDTO> hechosReporte = concepto.Hechos;
			
			    if (!concepto.Abstracto && hechosReporte != null)
                {
				    if (hechosReporte.ContainsKey("cierre_trim_actual"))
                    {
					    hechoReporte = hechosReporte["cierre_trim_actual"];
					    hechoReporte.Valor = ReporteXBRLUtil.obtenerValorHecho(concepto.IdConcepto, instancia);
				    }
                    else
                    {

                        IList<String> hechos;
                        if (!instancia.HechosPorIdConcepto.TryGetValue(concepto.IdConcepto, out hechos))
                        {

                            //var detalleError = CreaDetalleError(instancia, "No fue posible obtener el listado de hechos para el concepto \"" + concepto.IdConcepto + "\".");
                            //detalleError.Add("ConceptoError", concepto);
                            //LogUtil.Error(detalleError);
                            continue;
                        }
					
					    if (hechos != null)
                        {
						    foreach(String idHecho  in  hechos)
						    {
							    String fecha = null;
							
                                HechoDto hecho;
                                ContextoDto contexto;
							
                                if (instancia.HechosPorId.TryGetValue(idHecho, out hecho) &&
                                    instancia.ContextosPorId.TryGetValue(hecho.IdContexto, out contexto) &&
                                    contexto.ContieneInformacionDimensional)
                                {
								    //log.info(hecho.Valor);
								    if (contexto.Periodo.Tipo == PeriodoDto.Instante)
                                    {
									    fecha = DateReporteUtil.formatoFechaEstandar(contexto.Periodo.FechaInstante);
                                        String fechaCierrreTrimestreActual;
                                        String idItemMiembroContexto = contexto.ValoresDimension[0].IdItemMiembro;
                                        if (reporteXBRLDTO.PeriodosReporte.TryGetValue("cierre_trim_actual", out fechaCierrreTrimestreActual) &&
                                            fecha.Equals(fechaCierrreTrimestreActual) &&
                                            concepto.Hechos.TryGetValue(idItemMiembroContexto, out hechoReporte))
                                        {
										    llenarHecho(concepto, hecho, hechoReporte);
									    }
								    }
							    }
						    }
					    }
				    }
			    }
		    }
		
		    return conceptos;
	    }
	
	    private IList<DesgloseDeCreditosReporteDto> llenarDesgloseDeCreditos(DocumentoInstanciaXbrlDto instancia)
        {
		    IList<DesgloseDeCreditosReporteDto> desgloseCreditos = null;
		
		    try 
            {
                int outContadorNotasAlPie = 0;
                desgloseCreditos = DesgloseDeCreditosHelper.generarContenidoDeReporte(instancia, reporteXBRLDTO, ContadorNotasAlPie, out outContadorNotasAlPie);
                ContadorNotasAlPie = outContadorNotasAlPie;
		    }
            catch (Exception ex) 
            {
                LogUtil.Error(ex);
		    }
		
		    return desgloseCreditos;
	    }
	
	    private IList<IngresosProductoReporteDto> llenarIngresosProducto(DocumentoInstanciaXbrlDto instancia)
        {
		    IList<IngresosProductoReporteDto> ingresosProducto = null;

            int outContadorNotasAlPie = 0;
		    ingresosProducto = IngresosProductoHelper.generaContenidoReporte(instancia, reporteXBRLDTO, ContadorNotasAlPie, out outContadorNotasAlPie);
            ContadorNotasAlPie = outContadorNotasAlPie;
		
		    return ingresosProducto;
	    }

	    /// <summary>
	    /// (non-Javadoc)
	    /// </summary>
	    ///  @see com.bmv.spread.xbrl.reportes.builder.ReporteBuilder#crearParametrosReporte(com.hh.xbrl.abax.viewer.application.dto.DocumentoInstanciaXbrlDto)
	    public override void crearParametrosReporte(DocumentoInstanciaXbrlDto instancia)
        {
		    base.crearParametrosReporte(instancia);
		
		    String[] idConceptosMiembro = new String[] {
				    "ifrs-full_ComponentsOfEquityAxis",
				    "ifrs-full_IssuedCapitalMember",
				    "ifrs-full_SharePremiumMember",
				    "ifrs-full_TreasurySharesMember",
				    "ifrs-full_RetainedEarningsMember",
				    "ifrs-full_RevaluationSurplusMember",
				    "ifrs-full_ReserveOfExchangeDifferencesOnTranslationMember",
				    "ifrs-full_ReserveOfCashFlowHedgesMember",
				    "ifrs-full_ReserveOfGainsAndLossesOnHedgingInstrumentsThatHedgeInvestmentsInEquityInstrumentsMember",
				    "ifrs-full_ReserveOfChangeInValueOfTimeValueOfOptionsMember",
				    "ifrs-full_ReserveOfChangeInValueOfForwardElementsOfForwardContractsMember",
				    "ifrs-full_ReserveOfChangeInValueOfForeignCurrencyBasisSpreadsMember",
                    "ifrs-full_ReserveOfGainsAndLossesOnFinancialAssetsMeasuredAtFairValueThroughOtherComprehensiveIncomeMember",
                    "ifrs-full_ReserveOfGainsAndLossesOnRemeasuringAvailableforsaleFinancialAssetsMember",
				    "ifrs-full_ReserveOfSharebasedPaymentsMember",
				    "ifrs-full_ReserveOfRemeasurementsOfDefinedBenefitPlansMember",
				    "ifrs-full_AmountRecognisedInOtherComprehensiveIncomeAndAccumulatedInEquityRelatingToNoncurrentAssetsOrDisposalGroupsHeldForSaleMember",
				    "ifrs-full_ReserveOfGainsAndLossesFromInvestmentsInEquityInstrumentsMember",
				    "ifrs-full_ReserveOfChangeInFairValueOfFinancialLiabilityAttributableToChangeInCreditRiskOfLiabilityMember",
				    "ifrs-full_ReserveForCatastropheMember",
				    "ifrs-full_ReserveForEqualisationMember",
				    "ifrs-full_ReserveOfDiscretionaryParticipationFeaturesMember",
				    "ifrs_mx-cor_20141205_OtrosResultadosIntegralesMiembro",
				    "ifrs-full_OtherReservesMember",
				    "ifrs-full_EquityAttributableToOwnersOfParentMember",
				    "ifrs-full_NoncontrollingInterestsMember",
				    "ifrs-full_EquityMember",
				
				    "ifrs_mx-cor_20141205_MonedasEje",
				    "ifrs_mx-cor_20141205_DolaresMiembro",
				    "ifrs_mx-cor_20141205_DolaresContravalorPesosMiembro",
				    "ifrs_mx-cor_20141205_OtrasMonedasContravalorDolaresMiembro",
				    "ifrs_mx-cor_20141205_OtrasMonedasContravalorPesosMiembro",
				    "ifrs_mx-cor_20141205_TotalDePesosMiembro",
				
				    "ifrs_mx-cor_20141205_InstitucionEje",
				    "ifrs_mx-cor_20141205_InstitucionExtranjeraSiNo",
				    "ifrs_mx-cor_20141205_FechaDeFirmaContrato",
				    "ifrs_mx-cor_20141205_FechaDeVencimiento",
				    "ifrs_mx-cor_20141205_TasaDeInteresYOSobretasa",
				    "ifrs_mx-cor_20141205_DenominacionEje",
				    "ifrs_mx-cor_20141205_MonedaNacionalMiembro",
				    "ifrs_mx-cor_20141205_IntervaloDeTiempoEje",
				    "ifrs_mx-cor_20141205_MonedaExtranjeraMiembro",
				    "ifrs_mx-cor_20141205_AnoActualMiembro",
				    "ifrs_mx-cor_20141205_Hasta1AnoMiembro",
				    "ifrs_mx-cor_20141205_Hasta2AnosMiembro",
				    "ifrs_mx-cor_20141205_Hasta3AnosMiembro",
				    "ifrs_mx-cor_20141205_Hasta4AnosMiembro",
				    "ifrs_mx-cor_20141205_Hasta5AnosOMasMiembro",

				    "ifrs_mx-cor_20141205_PrincipalesProductosOLineaDeProductosPartidas",
				    "ifrs_mx-cor_20141205_TipoDeIngresoEje",
				    "ifrs_mx-cor_20141205_PrincipalesMarcasEje",
				    "ifrs_mx-cor_20141205_PrincipalesProductosOLineaDeProductosEje",
				    "ifrs_mx-cor_20141205_IngresosNacionalesMiembro",
				    "ifrs_mx-cor_20141205_IngresosPorExportacionMiembro",
				    "ifrs_mx-cor_20141205_IngresosDeSubsidiariasEnElExtranjeroMiembro",
				    "ifrs_mx-cor_20141205_IngresosTotalesMiembro"
		    };
		
		    IDictionary<Object, Object> parametrosReporte = reporteXBRLDTO.ParametrosReporte;
		
		    foreach (String idConcepto in  idConceptosMiembro)
		    {
			    parametrosReporte.Add((idConcepto + "_HEADER"), ReporteXBRLUtil.obtenerEtiquetaConcepto(idioma, null, idConcepto, instancia));
		    }
		
		    reporteXBRLDTO.ParametrosReporte = parametrosReporte;
	    }
    }
}
