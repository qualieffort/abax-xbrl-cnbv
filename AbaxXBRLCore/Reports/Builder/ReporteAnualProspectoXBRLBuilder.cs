using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.Reports.Constants;
using AbaxXBRLCore.Reports.Dto;
using AbaxXBRLCore.Reports.Util;
using AbaxXBRLCore.Viewer.Application.Dto;
using AbaxXBRLCore.Viewer.Application.Model;
using AbaxXBRLCore.Viewer.Application.Model.Impl;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;

namespace AbaxXBRLCore.Reports.Builder
{
    public class ReporteAnualProspectoXBRLBuilder : ReporteBuilder
    {
        private ReporteAnualProspectoXBRLBuilder() : base() {}

        private ReporteAnualProspectoXBRLBuilder(String idioma) : base(idioma) {}

        public override ReporteBuilder newInstance(IDefinicionPlantillaXbrl plantilla)
        {
            ReporteBuilder builder = new ReporteAnualProspectoXBRLBuilder();
            builder.Cache = Cache;
            builder.plantilla = plantilla;
            return builder;
        }

        public override ReporteBuilder newInstance(IDefinicionPlantillaXbrl plantilla, string idioma)
        {
            ReporteBuilder builder = new ReporteAnualProspectoXBRLBuilder(idioma);
            builder.Cache = Cache;
            builder.plantilla = plantilla;
            return builder;
        }

        public override void obtenerValoresIniciales(DocumentoInstanciaXbrlDto instancia)
        {
            String claveCotizacion = ReporteXBRLUtil.obtenerValorHecho(reporteXBRLDTO.PrefijoTaxonomia + ReportConstants.NOMBRE_CONCEPTO_EMISORA, instancia);
            String moneda = ReporteXBRLUtil.obtenerValorMoneda(instancia);
            String fechaReporte = obtenerFechaReporteAnual(instancia);

            reporteXBRLDTO.ClaveCotizacion = claveCotizacion;
            reporteXBRLDTO.Moneda = moneda;
            reporteXBRLDTO.FechaReporte = fechaReporte;
        }

        public override void crearPeriodosReporte()
        {
            reporteXBRLDTO.PeriodosReporte = obtenerPeriodos(reporteXBRLDTO.FechaReporte);
        }

        private IDictionary<String, String> obtenerPeriodos(String periodo)
        {
            IDictionary<String, String> periodos = new Dictionary<String, String>();

            DateTime datePeriodo = DateReporteUtil.obtenerFecha(periodo);

            String periodoAnterior = DateReporteUtil.modificadorFechas(datePeriodo, -1, 0, 0, 0, 12, 31);
            String periodoPreAnterior = DateReporteUtil.modificadorFechas(datePeriodo, -2, 0, 0, 0, 12, 31);

            String inicioPeriodo = DateReporteUtil.modificadorFechas(datePeriodo, 0, 0, 0, 0, 1, 1);
            String inicioPeriodoAnterior = DateReporteUtil.modificadorFechas(datePeriodo, -1, 0, 0, 0, 1, 1);
            String inicioPeriodoPreAnterior = DateReporteUtil.modificadorFechas(datePeriodo, -2, 0, 0, 0, 1, 1);

            periodos.Add("periodo_actual", periodo);
            periodos.Add("periodo_anterior", periodoAnterior);
            periodos.Add("periodo_pre_anterior", periodoPreAnterior);
            periodos.Add("anual_actual", inicioPeriodo + "_" + periodo);
            periodos.Add("anual_anterior", inicioPeriodoAnterior + "_" + periodoAnterior);
            periodos.Add("anual_pre_anterior", inicioPeriodoPreAnterior + "_" + periodoPreAnterior);

            return periodos;
        }
        /// <summary>
        /// Llena los elementos con el primer hecho encontrado del concepto indicado.
        /// </summary>
        /// <param name="conceptos">Arreglo con los conceptos buscados</param>
        /// <param name="instancia">Documento de insntacia.</param>
        /// <returns>Lista de conceptos evaluados</returns>
        private IList<ConceptoReporteDTO> llenarRolAnualProspecto(IList<ConceptoReporteDTO> conceptos, DocumentoInstanciaXbrlDto instancia)
        {
            IList<String> listaAliasPeriodos = new List<String>()
            {
                "periodo_actual",
                "periodo_anterior",
                "periodo_pre_anterior",
                "anual_actual",
                "anual_anterior",
                "anual_pre_anterior"
            };
            foreach (ConceptoReporteDTO concepto in conceptos)
            {
                HechoReporteDTO hechoReporte = null;
                llenarConcepto(concepto, instancia);
                if (concepto.Abstracto)
                {
                    continue;
                }
                foreach (var aliasPeriodo in listaAliasPeriodos)
                {
                    if (concepto.Hechos.TryGetValue(aliasPeriodo, out hechoReporte))
                    {
                        obtenerHecho(concepto, hechoReporte, instancia);
                    }
                }
            }

            return conceptos;
        }
        /// <summary>
        /// Llena los conceptos haciendo uso de identificador del periodo evaluado.
        /// </summary>
        /// <param name="conceptos"></param>
        /// <param name="instancia"></param>
        /// <returns></returns>
        private IList<ConceptoReporteDTO> llenarRolAnualProspecto424000(IList<ConceptoReporteDTO> conceptos, DocumentoInstanciaXbrlDto instancia)
        {
            IList<String> listaAliasPeriodos = new List<String>()
            {
                "periodo_actual",
                "periodo_anterior",
                "periodo_pre_anterior",
                "anual_actual",
                "anual_anterior",
                "anual_pre_anterior"
            };
            foreach (ConceptoReporteDTO concepto in conceptos)
            {
                HechoReporteDTO hechoReporte = null;
                llenarConcepto(concepto, instancia);
                if (concepto.Abstracto)
                {
                    continue;
                }
                foreach (var aliasPeriodo in listaAliasPeriodos)
                {
                    if (concepto.Hechos.TryGetValue(aliasPeriodo, out hechoReporte))
                    {
                        obtenerHecho(concepto, hechoReporte, aliasPeriodo, instancia);

                        if (hechoReporte != null)
                        {
                            if (concepto.Numerico && concepto.TipoDato.Contains(ReporteXBRLUtil.TIPO_DATO_MONETARY))
                            {   
                                hechoReporte.ValorFormateado = ReporteXBRLUtil.formatoDecimal(hechoReporte.ValorNumerico, ReporteXBRLUtil.FORMATO_CANTIDADES_DECIMALES);
                            }
                        }
                    }
                }
            }

            return conceptos;
        }

        private String obtenerFechaReporteAnual(DocumentoInstanciaXbrlDto instancia) {
            var fechas = instancia.ContextosPorFecha.Keys.OrderByDescending(d => d).ToList();

            return fechas.First();
        }
        /// <summary>
        /// Determina si el listado de conceptos contiene información.
        /// </summary>
        /// <param name="listaConceptos">Lista de conceptos de reporet a evaluar.</param>
        /// <returns>Si existe al menos un hecho con infomración</returns>
        private bool ContienenInformacionConceptos(IList<ConceptoReporteDTO> listaConceptos)
        {
            var contieneDatos = false;
            for (var indexConcepto = 0; indexConcepto < listaConceptos.Count; indexConcepto++)
            {
                var concepto = listaConceptos[indexConcepto];
                if (concepto.Hechos != null && concepto.Hechos.Count > 0)
                {
                    foreach (var clavePeriodo in concepto.Hechos.Keys)
                    {
                        var hecho = concepto.Hechos[clavePeriodo];
                        if (hecho != null && hecho.Valor != null && !String.IsNullOrEmpty(hecho.Valor))
                        {
                            contieneDatos = true;
                            break;
                        }
                    }
                    if (contieneDatos)
                    {
                        break;
                    }
                }
            }

            return contieneDatos;
        }

        public override void crearRoles(DocumentoInstanciaXbrlDto instancia)
        {
            IDictionary<String, IList<ConceptoReporteDTO>> roles = new Dictionary<String, IList<ConceptoReporteDTO>>();
            IList<ConceptoReporteDTO> conceptos = null;
            IList<String> rolesNoUsados = new List<String>();
            try 
            {
			    foreach(IndiceReporteDTO indice  in  reporteXBRLDTO.Indices)
			    {
				    String id = indice.Rol;
                    conceptos = null;

                    if (id.Contains("411000") || id.Contains("412000") || id.Contains("413000") ||
                        id.Contains("414000") || id.Contains("415000") || id.Contains("416000") ||
                        id.Contains("417000") || id.Contains("418000") || id.Contains("419000") ||
                        id.Contains("420000") || id.Contains("421000") || id.Contains("422000") ||
                        id.Contains("423000") || id.Contains("425000") ||
                        id.Contains("426000") || id.Contains("427000") || id.Contains("428000") ||
                        id.Contains("429000") || id.Contains("430000") || id.Contains("431000") ||
                        id.Contains("432000") || id.Contains("430500"))
                    {
                        conceptos = llenarRolAnualProspecto(obtenerConceptos(id), instancia);
                    }
                    else if (id.Contains("424000"))
                    {
                        conceptos = llenarRolAnualProspecto424000(obtenerConceptos(id), instancia);
                    }

                    if (conceptos != null)
                    {

                        if (ContienenInformacionConceptos(conceptos))
                        {
                            roles.Add(id, conceptos);
                        }
                        else
                        {
                            rolesNoUsados.Add(id);
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
                throw;
            }
            if (rolesNoUsados.Count > 0)
            {
                QuitarRolesNoUsados(instancia, rolesNoUsados);
            }
            reporteXBRLDTO.Roles = roles;
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

                    var path = ReporteXBRLUtil.AR_PROS_PATH_HIPERCUBOS_JSON.
                        Replace(ReporteXBRLUtil.CLAVE_TAXONOMIA, reporteXBRLDTO.Taxonomia).
                        Replace(ReporteXBRLUtil.CLAVE_RA_PROS, reporteXBRLDTO.PrefijoRaProspecto).
                        Replace(ReporteXBRLUtil.CONCEPTO_HIPERCUBO, hipercubo.IdConceptoHipercubo);

                    var names = Assembly.GetExecutingAssembly().GetManifestResourceNames();
                    if (names.Contains(path))
                    {
                        plantilla.DeterminarParametrosConfiguracion(instancia);
                        plantilla.GenerarVariablesDocumentoInstancia();
                        var hipercuboUtil = new EvaluadorHipercuboUtil(path, instancia, plantilla);
                        if (hipercuboUtil.configuracion.DimensionesDinamicas.Count == 0)
                        {
                            LogUtil.Info("No existen dimensiones dinamicas en la configuración de hipercubo: " + path);
                            continue;
                        }
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
                            try
                            {
                                reporteXBRLDTO.Hipercubos[hipercubo.IdConceptoHipercubo] = hipercuboDto;
                            }
                            catch (Exception e)
                            {
                                throw e;
                            }
                            
                        }
                    }
                }                
            }
        }
        /// <summary>
        /// Elimina los roles indicados del documento a evaluar.
        /// </summary>
        /// <param name="instancia">Documento de instancia a evaluar.</param>
        /// <param name="rolesNoUsados">Lista con los didentificadores de los roles no utilizados.</param>
        private void QuitarRolesNoUsados(DocumentoInstanciaXbrlDto instancia, IList<String> rolesNoUsados)
        {

            var indicesEliminar = new List<IndiceReporteDTO>();
            foreach(var idRolEliminar in rolesNoUsados)
            {
                foreach (IndiceReporteDTO indiceActual in reporteXBRLDTO.Indices)
                {
                    if (indiceActual.Rol.Contains(idRolEliminar))
                    {
                        if (reporteXBRLDTO.Roles != null)
                        {
                            reporteXBRLDTO.Roles.Remove(indiceActual.Rol);
                        }
                        int index = Array.BinarySearch(reporteXBRLDTO.NombresHojas, indiceActual.Rol);
                        if (index >= 0)
                        {
                            reporteXBRLDTO.NombresHojas = reporteXBRLDTO.NombresHojas.Where((val, i) => i != index).ToArray();
                        }
                        indicesEliminar.Add(indiceActual);
                    }
                }
            }
            foreach(IndiceReporteDTO indice in indicesEliminar)
            {
                reporteXBRLDTO.Indices.Remove(indice);
            }
        }
    }
}