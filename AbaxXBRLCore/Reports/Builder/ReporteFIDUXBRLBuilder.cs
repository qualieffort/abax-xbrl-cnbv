using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.Reports.Constants;
using AbaxXBRLCore.Reports.Dto;
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
    /// Constructor para la taxonomia de Fideicomisos encargado de construir un objeto ReporteXBRLDTO a partir de un documento de instancia XBRL.
    /// </summary>
    public class ReporteFIDUXBRLBuilder : ReporteBuilder
    {
        ///
        /// Constructor por default.
        /// Inicia el idioma por default del ReporteXBRLDTO.
        ////
        private ReporteFIDUXBRLBuilder():base() {}
	
	    ///
        /// Constructor que recibe como parametro el idioma que utilizara el ReporteXBRLDTO.
        /// @param idioma
        ////
        private ReporteFIDUXBRLBuilder(String idioma):base(idioma) {}
	
        ///
        /// (non-Javadoc)
        /// @see com.bmv.spread.xbrl.reportes.builder.ReporteBuilder#newInstance()
        ////
        public override ReporteBuilder newInstance(IDefinicionPlantillaXbrl plantilla)
        {
            ReporteBuilder builder = new ReporteFIDUXBRLBuilder();
            builder.Cache = Cache;
            return builder;
        }
	
        ///
        /// (non-Javadoc)
        /// @see com.bmv.spread.xbrl.reportes.builder.ReporteBuilder#newInstance(java.lang.String)
        ////
        public override ReporteBuilder newInstance(IDefinicionPlantillaXbrl plantilla, String idioma)
        {
            ReporteBuilder builder = new ReporteFIDUXBRLBuilder(idioma);
            builder.Cache = Cache;
            return builder;
        }

        ///
        /// (non-Javadoc)
        /// @see com.bmv.spread.xbrl.reportes.builder.ReporteBuilder#obtenerValoresIniciales(com.hh.xbrl.abax.viewer.application.dto.DocumentoInstanciaXbrlDto)
        ////
        public override void obtenerValoresIniciales(DocumentoInstanciaXbrlDto instancia)
        {
            String nombreReporte = ReporteXBRLUtil.NOMBRE_REPORTE_FIDU;
		
            String claveCotizacion = ReporteXBRLUtil.obtenerValorHecho(reporteXBRLDTO.PrefijoTaxonomia + ReportConstants.NOMBRE_CONCEPTO_EMISORA, instancia);
            String fechaReporte = ReporteXBRLUtil.obtenerValorHecho(ReportConstants.ID_FECHA_CIERRE_REPORTE_2014, instancia);
            String anio = fechaReporte.Substring(0, fechaReporte.IndexOf("-"));
            String trimestre = ReporteXBRLUtil.obtenerValorHecho(reporteXBRLDTO.PrefijoTaxonomia + ReportConstants.NOMBRE_CONCEPTO_NUMERO_TRIMESTRE, instancia);
            String moneda = ReporteXBRLUtil.obtenerValorMoneda(instancia);
            Boolean consolidado = false;
            String fideicomiso = ReporteXBRLUtil.obtenerValorHecho(reporteXBRLDTO.PrefijoTaxonomia + ReportConstants.NOMBRE_CONCEPTO_NUMERO_FIDEICOMISO, instancia);
            String fechaCreacion = DateTime.Now.ToString(ReporteXBRLUtil.FORMATO_FECHA_CREACION);

            if (reporteXBRLDTO.Taxonomia.Equals(ReportConstants.CLAVE_CCD))
            {
                consolidado = ReporteXBRLUtil.obtenerValorHecho(ReportConstants.NOMBRE_CONCEPTO_CCD_CONSOLIDADO, instancia).ToUpper().Trim().Equals(ReportConstants.VALOR_SI) ||
                              ReporteXBRLUtil.obtenerValorHecho(ReportConstants.NOMBRE_CONCEPTO_CCD_CONSOLIDADO, instancia).ToLower().Trim().Equals(ReportConstants.VALOR_SI_TRUE) ||
                              ReporteXBRLUtil.obtenerValorHecho(ReportConstants.NOMBRE_CONCEPTO_CCD_CONSOLIDADO, instancia).ToLower().Trim().Equals(ReportConstants.VALOR_SI_2) ? true : false;

                reporteXBRLDTO.AplicaConsolidado = true;
            }
            else 
            {
                reporteXBRLDTO.AplicaConsolidado = false;
            }
		
            reporteXBRLDTO.ClaveCotizacion = claveCotizacion;
            reporteXBRLDTO.FechaReporte = fechaReporte;
            reporteXBRLDTO.RazonSocial = ReporteXBRLUtil.obtenerValorHecho(ReportConstants.ID_NOMBRE_RAZON_SOCIAL, instancia);
            reporteXBRLDTO.Anio = anio;
            reporteXBRLDTO.Trimestre = trimestre;
            reporteXBRLDTO.Moneda = moneda;
            reporteXBRLDTO.Consolidado = consolidado;
            reporteXBRLDTO.Fideicomiso = fideicomiso;
            reporteXBRLDTO.FechaCreacion = fechaCreacion;
		
            if (claveCotizacion != null && fechaReporte != null && trimestre != null && moneda != null && consolidado != null)
            {
                nombreReporte = nombreReporte.
                    Replace(ReporteXBRLUtil.CLAVE_COTIZACION, claveCotizacion).
                    Replace(ReporteXBRLUtil.ANIO, anio).
                    Replace(ReporteXBRLUtil.TRIMESTRE, trimestre).
                    Replace(ReporteXBRLUtil.MONEDA, moneda).
                    Replace(ReporteXBRLUtil.CONSOLIDACION, (consolidado ? ReporteXBRLUtil.CONSOLIDADO : ReporteXBRLUtil.NO_CONSOLIDADO)).
                    Replace(ReporteXBRLUtil.FIDEICOMISO, fideicomiso).
                    Replace(ReporteXBRLUtil.FECHA_CREACION, fechaCreacion);
			
                reporteXBRLDTO.NombreReporte = nombreReporte;
            }
        }

        ///
        /// (non-Javadoc)
        /// @see com.bmv.spread.xbrl.reportes.builder.ReporteBuilder#crearRoles(com.hh.xbrl.abax.viewer.application.dto.DocumentoInstanciaXbrlDto)
        ////
        public override void crearRoles(DocumentoInstanciaXbrlDto instancia)
        {
            //StopWatch w = new StopWatch();
            //w.start();
		
            IDictionary<String, IList<ConceptoReporteDTO>> roles = new Dictionary<String, IList<ConceptoReporteDTO>>();
            IList<ConceptoReporteDTO> conceptos = null;
		
            try
            {
                foreach (IndiceReporteDTO indice in reporteXBRLDTO.Indices)
                {
                    ////StopWatch w2 = new StopWatch();
                    //w2.start();
                    String id = indice.Rol;
				
                    //log.info("ID ROL: " + id);
                
                    if (id.Contains("610000"))
                    {
                            conceptos = llenarRol610000(id, obtenerConceptos(id), instancia);
                    }
                    else
                    {
                        switch (id)
                        {
                            case "105000": case "110000":
                            case "800500": case "800600":
                            case "813000":
                                conceptos = llenarRolNotas(obtenerConceptos(id), instancia);
                                break;

                            case "210000": case "310000":
                            case "410000": case "510000":
                            case "520000": case "700004":
                            case "800100": case "800200":
                            case "815101":
                            case "815100":

                                conceptos = llenarRolCalculo(obtenerConceptos(id), instancia);
                                break;
                        }
                    }
				
                    roles.Add(id, conceptos);
				
                    //w2.stop();
                    //log.info("Tiempo en generar rol [" + id + "] : " + ReporteXBRLUtil.obtenerTiempos(w2));
                }
            }
            catch (Exception e)
            {
                LogUtil.Error(e);
            }
		
            reporteXBRLDTO.Roles = roles;
		
            ajustarTercerColumnaEPF(instancia);
            quitarRolesAnexoAA(instancia);
            quitarRolesNoUsadosDeEstadoDeFlujoDeEfectivo(instancia);
            quitarConceptos4D(instancia);
            
            quitarTrimestralesParaTrimestre1(instancia);
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
                    if (rol.Equals("310000") || rol.Equals("410000")  || rol.Equals("800200") )
                    {
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

        /// <summary>
        /// Quita los roles de Anexo AA cuando no son requeridos
        /// </summary>
        ///  @param instancia
        private void quitarRolesAnexoAA(DocumentoInstanciaXbrlDto instancia)
        {
            foreach (var idHecho in instancia.HechosPorId.Keys)
            {
                var hecho = instancia.HechosPorId[idHecho];
                if ((hecho.IdConcepto == "ifrs_mx-cor_20160822_RequiresSubmittingAnnexAA" && hecho.Valor == "false"))
                {
                   IndiceReporteDTO indiceEliminar = null;
                   var listaIndices = new List<IndiceReporteDTO>();
                   String[] rolesEliminar = new String[] { "815100", "815101" };

                    foreach (IndiceReporteDTO indice in reporteXBRLDTO.Indices)
                    {
                        foreach (String rol in rolesEliminar)
                        {
                            if (indice.Rol.Equals(rol))
                            {
                                listaIndices.Add(indice);
                            }
                        }
                    }
                     foreach (IndiceReporteDTO indiceActual in listaIndices)
                     {
                        indiceEliminar = indiceActual;
                        if (indiceEliminar != null)
                        {
                           reporteXBRLDTO.Indices.Remove(indiceEliminar);
                           reporteXBRLDTO.Roles.Remove(indiceEliminar.Rol);

                           int index = Array.BinarySearch(reporteXBRLDTO.NombresHojas, indiceEliminar.Rol);
                           if (index >= 0)
                           reporteXBRLDTO.NombresHojas = reporteXBRLDTO.NombresHojas.Where((val, i) => i != index).ToArray();
                         }
                     }

                }
                    

            }

        }
       
        /**
        * Elimina del listado de roles 510 o 520 dependiendo de la bande que indica
        * si se va a usar el estado de flujo de efectivo por método indirecto o no
        * @param instancia documento de instancia procesado.
        */
        private void quitarRolesNoUsadosDeEstadoDeFlujoDeEfectivo(DocumentoInstanciaXbrlDto instancia)
        {
            if (!reporteXBRLDTO.PrefijoTaxonomia.Equals(ReportConstants.PREFIJO_ID_TRAC))
            {
                //Si existe la bandera CashFlowStatementForInderectMethod se elige si se elimina 510 o 520
                String idCashFlowIndirect = reporteXBRLDTO.PrefijoTaxonomia + "CashFlowStatementForInderectMethod";

                String indicadorCashFlowIndirect = ReporteXBRLUtil.obtenerValorHecho(idCashFlowIndirect, instancia);
                if (indicadorCashFlowIndirect != null)
                {
                    IndiceReporteDTO indiceEliminar = null;
                    String rolEliminar = null;
                    if ("SI".Equals(indicadorCashFlowIndirect))
                    {
                        //Se usa 520, elimina 510
                        rolEliminar = "510000";
                    }
                    else
                    {
                        //Se usa 510, elimina 520
                        rolEliminar = "520000";
                    }

                    foreach (IndiceReporteDTO indiceActual in reporteXBRLDTO.Indices)
                    {
                        if (indiceActual.Rol.Contains(rolEliminar))
                        {
                            indiceEliminar = indiceActual;
                            break;
                        }
                    }

                    if (indiceEliminar != null)
                    {
                        reporteXBRLDTO.Indices.Remove(indiceEliminar);
                        reporteXBRLDTO.Roles.Remove(indiceEliminar.Rol);

                        int index = Array.BinarySearch(reporteXBRLDTO.NombresHojas, indiceEliminar.Rol);
                        if (index >= 0)
                            reporteXBRLDTO.NombresHojas = reporteXBRLDTO.NombresHojas.Where((val, i) => i != index).ToArray();
                    }
                }
            }
        }

        private void quitarConceptos4D(DocumentoInstanciaXbrlDto instancia)
        {
            if (!string.Equals(reporteXBRLDTO.Trimestre, ReporteXBRLUtil.CUARTO_TRIMESTRE_DICTAMINADO, StringComparison.OrdinalIgnoreCase))
            {
                IList<ConceptoReporteDTO> rol110 = reporteXBRLDTO.Roles["110000"];

                if (rol110 != null)
                {
                    var conceptosARemover = rol110.Where(c => 
                        c.IdConcepto.Equals(reporteXBRLDTO.PrefijoTaxonomia + "DateOfOpinionOnTheFinancialStatements") ||
                        c.IdConcepto.Equals(reporteXBRLDTO.PrefijoTaxonomia + "NameServiceProviderExternalAudit") ||
                        c.IdConcepto.Equals(reporteXBRLDTO.PrefijoTaxonomia + "NameOfTheAsociadoSigningOpinion") ||
                        c.IdConcepto.Equals(reporteXBRLDTO.PrefijoTaxonomia + "TypeOfOpinionOnTheFinancialStatements")
                    ).ToList();

                    foreach(var concepto in conceptosARemover) 
                    {
                        rol110.Remove(concepto);
                    }
                }
            }
        }
	
        ///
        /// (non-Javadoc)
        /// @see com.bmv.spread.xbrl.reportes.builder.ReporteBuilder#crearParametrosReporte(com.hh.xbrl.abax.viewer.application.dto.DocumentoInstanciaXbrlDto)
        ////
        public override void crearParametrosReporte(DocumentoInstanciaXbrlDto instancia)
        {
            base.crearParametrosReporte(instancia);
		
            String[] idConceptosMiembro = new String[] {
                "ifrs-full_ComponentsOfEquityAxis",
                "ifrs-full_IssuedCapitalMember",
                "ifrs-full_RetainedEarningsMember",
                "ifrs-full_OtherReservesMember",
                "ifrs-full_EquityAttributableToOwnersOfParentMember",
                "ifrs-full_NoncontrollingInterestsMember",
                "ifrs-full_EquityMember",
				
                "mx_ccd_OtherComprehensiveIncomeMember",
                "mx_deuda_OtherComprehensiveIncomeMember"
            };
		
            IDictionary<Object, Object> parametrosReporte = reporteXBRLDTO.ParametrosReporte;
		
            foreach (String idConcepto in idConceptosMiembro)
            {
                if (idConcepto.StartsWith("ifrs") || idConcepto.StartsWith(reporteXBRLDTO.PrefijoTaxonomia))
                {
                    parametrosReporte.Add(ReporteXBRLUtil.HEADER.Replace(ReporteXBRLUtil.TITULO, idConcepto), ReporteXBRLUtil.obtenerEtiquetaConcepto(idioma, null, idConcepto, instancia));
                }
            }
		
            reporteXBRLDTO.ParametrosReporte = parametrosReporte;
        }
    }
}
