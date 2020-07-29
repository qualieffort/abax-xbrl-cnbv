using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.Reports.Constants;
using AbaxXBRLCore.Reports.Dto;
using AbaxXBRLCore.Reports.Util;
using AbaxXBRLCore.Viewer.Application.Dto;
using AbaxXBRLCore.Viewer.Application.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;

namespace AbaxXBRLCore.Reports.Builder
{
    public class ReporteAnexoTXBRLBuilder : ReporteBuilder
    {
        private ReporteAnexoTXBRLBuilder() : base() {}

        private ReporteAnexoTXBRLBuilder(String idioma) : base(idioma) { }

        public override ReporteBuilder newInstance(IDefinicionPlantillaXbrl plantilla)
        {
            ReporteBuilder builder = new ReporteAnexoTXBRLBuilder();
            builder.Cache = Cache;
            builder.plantilla = plantilla;
            return builder;
        }

        public override ReporteBuilder newInstance(IDefinicionPlantillaXbrl plantilla, string idioma)
        {
            ReporteBuilder builder = new ReporteAnexoTXBRLBuilder(idioma);
            builder.Cache = Cache;
            builder.plantilla = plantilla;
            return builder;
        }

        public override void obtenerValoresIniciales(DocumentoInstanciaXbrlDto instancia)
        {
            String claveCotizacion = ReporteXBRLUtil.obtenerValorHecho(reporteXBRLDTO.PrefijoTaxonomia + ReportConstants.NOMBRE_CONCEPTO_EMISORA, instancia);
            String fideicomiso = ReporteXBRLUtil.obtenerValorHecho(ReportConstants.CONCEPTO_ANNEXT_NUMERO_FIDEICOMISO, instancia);
            String fechaReporte = obtenerFechaAnexoT(instancia);
            String razonSocial = ReporteXBRLUtil.obtenerValorHecho(ReportConstants.CONCEPTO_ANNEXT_RAZON_SOCIAL, instancia);
            String series = ReporteXBRLUtil.obtenerValorHecho(ReportConstants.CONCEPTO_ANNEXT_SERIES, instancia);
            String moneda = ReporteXBRLUtil.obtenerValorMoneda(instancia);

            reporteXBRLDTO.ClaveCotizacion = claveCotizacion;
            reporteXBRLDTO.Fideicomiso = fideicomiso;
            reporteXBRLDTO.FechaReporte = fechaReporte;
            reporteXBRLDTO.RazonSocial = razonSocial;
            reporteXBRLDTO.Series = series;
            reporteXBRLDTO.Moneda = moneda;
        }

        public override void crearPeriodosReporte()
        {
            reporteXBRLDTO.PeriodosReporte = obtenerPeriodos(reporteXBRLDTO.FechaReporte);
        }

        private IDictionary<String, String> obtenerPeriodos(String periodo)
        {
            IDictionary<String, String> periodos = new Dictionary<String, String>();

            DateTime datePeriodo = DateReporteUtil.obtenerFecha(periodo);

            periodos.Add("periodo_actual", periodo);

            return periodos;
        }

        private IList<ConceptoReporteDTO> llenarRol301100(IList<ConceptoReporteDTO> conceptos, DocumentoInstanciaXbrlDto instancia)
        {
            foreach (ConceptoReporteDTO concepto in conceptos)
            {
                HechoReporteDTO hechoReporte = null;
                llenarConcepto(concepto, instancia);
                if (concepto.Abstracto)
                {
                    continue;
                }
                if (!concepto.Hechos.ContainsKey("periodo_actual"))
                {
                    IList<String> hechos;
                    if (!instancia.HechosPorIdConcepto.TryGetValue(concepto.IdConcepto, out hechos))
                    {
                        continue;
                    }

                    if (hechos != null)
                    {
                        foreach (String idHecho in hechos)
                        {
                            String fecha = null;

                            HechoDto hecho = instancia.HechosPorId[idHecho];
                            ContextoDto contexto = instancia.ContextosPorId[hecho.IdContexto];

                            if (contexto.ContieneInformacionDimensional)
                            {
                                //log.info(hecho.Valor);

                                if (contexto.Periodo.Tipo == PeriodoDto.Instante)
                                {
                                    fecha = DateReporteUtil.formatoFechaEstandar(contexto.Periodo.FechaInstante);

                                    if ((fecha.Equals(reporteXBRLDTO.PeriodosReporte["periodo_actual"]))
                                            && concepto.Hechos.ContainsKey(contexto.ValoresDimension[0].IdItemMiembro))
                                    {
                                        hechoReporte = concepto.Hechos[contexto.ValoresDimension[0].IdItemMiembro];
                                        llenarHecho(concepto, hecho, hechoReporte);
                                    }
                                }
                            }
                        }
                    }
                }
                else
                {
                    hechoReporte = concepto.Hechos["periodo_actual"];
                    obtenerHecho(concepto, hechoReporte, instancia);
                }
            }

            return conceptos;
        }

        public override void EvaluaEstructuraConcepto(EstructuraFormatoDto estructura, int tabuladores, IList<ConceptoReporteDTO> listaConceptos, String idRol)
        {
            List<String> idExcluyente = new List<String>() {
                "annext_UnpaidBalanceOfTheAssetsGroupedInArrearsAtTheEndOfThePeriodAbstract",
                "annext_CurrentMonth",
                "annext_LastMonth",

                "annext_NumberOfAssetsGroupedInArrearsAtTheEndOfThePeriodAbstract",
                "annext_NumberOfAssetsCurrentMonth",
                "annext_NumberOfAssetsLastMonth",
            };
            //LogUtil.Info("tabuladores:" + tabuladores + ",   idConcepto: " + estructura.IdConcepto);
            if (!reporteXBRLDTO.Instancia.Taxonomia.ConceptosPorId.ContainsKey(estructura.IdConcepto))
            {
                throw new NullReferenceException("No existe el contexto [" + estructura.IdConcepto + "] en la taxonomía.");
            }
            var concepto = reporteXBRLDTO.Instancia.Taxonomia.ConceptosPorId[estructura.IdConcepto];
            var hechosReporte = new Dictionary<string, HechoReporteDTO>();
            if (!reporteXBRLDTO.ConfiguracionReporte.PeriodosPorRol.ContainsKey(idRol) || (concepto.EsMiembroDimension??false) || concepto.EsHipercubo || (concepto.EsDimension??false))
            {
                return;
            }
            foreach (var idPeriodo in reporteXBRLDTO.ConfiguracionReporte.PeriodosPorRol[idRol])
            {
                if ((!idPeriodo.Equals("periodo_actual") && idExcluyente.Contains(concepto.Id)) || (idPeriodo.Equals("periodo_actual") && !idExcluyente.Contains(concepto.Id)))
                    hechosReporte.Add(idPeriodo, new HechoReporteDTO());
            }
            var conceptoReporte = new ConceptoReporteDTO()
            {
                IdConcepto = concepto.Id,
                Abstracto = concepto.EsAbstracto??false,
                Etiqueta = estructura.RolEtiquetaPreferido,
                Numerico = concepto.EsTipoDatoNumerico,
                Tabuladores = tabuladores * reporteXBRLDTO.ConfiguracionReporte.EstilosReporte.MultiploTabuladores,
                TipoDato = concepto.TipoDato,
                Hechos = hechosReporte,
                AtributosAdicionales = concepto.AtributosAdicionales
            };
            listaConceptos.Add(conceptoReporte);
            var listaSubEstructuras = estructura.SubEstructuras;
            if (listaSubEstructuras != null && listaSubEstructuras.Count() > 0)
            {
                var tabuladoresItera = tabuladores++;
                foreach (var subEstructura in listaSubEstructuras)
                {
                    EvaluaEstructuraConcepto(subEstructura, tabuladoresItera, listaConceptos, idRol);
                }
            }

        }

        private String obtenerFechaAnexoT(DocumentoInstanciaXbrlDto instancia)
        {
            var fechas = instancia.ContextosPorFecha.Keys.OrderByDescending(d => d).ToList();

            return fechas.First();
        }

        public override void crearRoles(DocumentoInstanciaXbrlDto instancia)
        {
            IDictionary<String, IList<ConceptoReporteDTO>> roles = new Dictionary<String, IList<ConceptoReporteDTO>>();
            IList<ConceptoReporteDTO> conceptos = null;

            try
            {
                foreach (IndiceReporteDTO indice in reporteXBRLDTO.Indices)
                {
                    String id = indice.Rol;
                    conceptos = null;

                    switch (id)
                    {
                        case "301100":
                            conceptos = llenarRol301100(obtenerConceptos(id), instancia);
                            break;
                    }

                    if (conceptos != null)
                    {
                        roles.Add(id, conceptos);
                    }
                }
            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
                throw;
            }

            reporteXBRLDTO.Roles = roles;
        }

        public override void crearParametrosReporte(DocumentoInstanciaXbrlDto instancia)
        {
            String[] idConceptosMiembro = new String[] {
                "annext_SerieTypedAxis",

                "annext_TimeIntervalAxis",
                "annext_LessThan1MonthOrLessThan30DaysMember",
                "annext_Between31And60DaysOrBetween1AndUpTo2MonthsMember",
                "annext_Between61And90DaysOrBetween2AndUpTo3MonthsMember",
                "annext_Between91And120DaysOr3ToUpTo4MonthsMember",
                "annext_Between121And150DaysOrFrom4To5MonthsMember",
                "annext_Between151And180DaysOrBetween5AndUpTo6MonthsMember",
                "annext_MoreThan180DaysOrMoreThan6MonthsMember",
                "annext_InJudicialProcessMember",
                "annext_ExtensionMember",
                "annext_TotalMember",
		    };

            IDictionary<Object, Object> parametrosReporte = new Dictionary<Object, Object>();

            foreach (String idConcepto in idConceptosMiembro)
            {
                parametrosReporte.Add((idConcepto + "_HEADER"), ReporteXBRLUtil.obtenerEtiquetaConcepto(idioma, null, idConcepto, instancia));
            }

            reporteXBRLDTO.ParametrosReporte = parametrosReporte;
        }

        public override void crearHipercubos(DocumentoInstanciaXbrlDto instancia)
        {
            reporteXBRLDTO.Hipercubos = new Dictionary<String, HipercuboReporteDTO>();

            foreach (var definitionRolUri in instancia.Taxonomia.ListaHipercubos.Keys)
            {
                var listaHipercubos = instancia.Taxonomia.ListaHipercubos[definitionRolUri];
            for (var indexHipercubo = 0; indexHipercubo < listaHipercubos.Count; indexHipercubo++)
            {
                    var hipercubo = listaHipercubos[indexHipercubo];

                var path = ReporteXBRLUtil.ANNEXT_PATH_HIPERCUBOS_JSON.
                    Replace(ReporteXBRLUtil.CLAVE_TAXONOMIA, reporteXBRLDTO.Taxonomia).
                        Replace(ReporteXBRLUtil.CONCEPTO_HIPERCUBO, hipercubo.IdConceptoHipercubo);

                var names = Assembly.GetExecutingAssembly().GetManifestResourceNames();
                if (names.Contains(path))
                {
                    plantilla.DeterminarParametrosConfiguracion(instancia);
                    plantilla.GenerarVariablesDocumentoInstancia();
                    var hipercuboUtil = new EvaluadorHipercuboUtil(path, instancia, plantilla);
                    var aliasDimensionEje = hipercuboUtil.configuracion.DimensionesDinamicas[0];
                    var miembrosEje = hipercuboUtil.ObtenMiembrosDimension(aliasDimensionEje);
                    miembrosEje = miembrosEje.OrderBy(o => o.ElementoMiembroTipificado).ToList();

                    var titulos = hipercuboUtil.ObtenTitulosMiembrosDimension(aliasDimensionEje, miembrosEje);
                    var hechos = hipercuboUtil.ObtenMatrizHechos(miembrosEje);

                    if (titulos != null && hechos != null)
                    {
                        var hipercuboDto = new HipercuboReporteDTO();
                        hipercuboDto.Titulos = titulos;
                        hipercuboDto.Hechos = hechos;
                        hipercuboDto.Utileria = hipercuboUtil;

                            reporteXBRLDTO.Hipercubos.Add(hipercubo.IdConceptoHipercubo, hipercuboDto);
                    }
                }
                }
            }
        }
    }
}
