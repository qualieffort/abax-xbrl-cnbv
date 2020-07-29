using AbaxXBRL.Util;
using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.Viewer.Application.Dto;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;

namespace AbaxXBRLCore.Viewer.Application.Model.Impl
{
    /// <summary>
    /// Implementación específica de la definición de la plantilla para las taxonomías de
    /// reporte anual y prospecto 2016.
    /// <author>Emigdio Hernández</author>
    /// <version>1.0</version>
    /// </summary>
    public class DefinicionPlantillaReporteAnualProspecto2016 : DefinicionPlantillaXbrlAbstract
    {
        /// <summary>
        /// Expresion regular para la evaluación del espacio de nombres para taxonomías de prospecto.
        /// </summary>
        private static Regex REGEX_PROSPECTO = new Regex("prospectus.pros", RegexOptions.Compiled | RegexOptions.Multiline);
        public override string ObtenerIdSpringDefinicionElementosPlantillaDeRol(string rolURI)
        {
            return rolURI.Replace(":", "_").Replace("/", "_").Replace(".", "_").Replace("-", "_");
        }
        /// <summary>
        /// Determina los parametros de configuración en base al documento proporcionado.
        /// </summary>
        /// <param name="documentoInstancia">Documento que será evaluado</param>
        public override bool DeterminarParametrosConfiguracion(DocumentoInstanciaXbrlDto documentoInstancia)
        {
            this.parametrosConfiguracion = DeterminaParametrosConfiguracionDocumento(documentoInstancia);
            return parametrosConfiguracion.Count > 0;
        }

        public override bool GenerarVariablesDocumentoInstancia()
        {
            
            var resultado = true;
            var parametrosConfiguracion = this.ObtenerParametrosConfiguracion();

            string anio = null;
            if (!parametrosConfiguracion.TryGetValue("anio", out anio))
            {
                parametrosConfiguracion.TryGetValue("fecha", out anio);
            }

            
            DateTime fechaAnio = new DateTime();
            var numeroAnio = 0;
            if (XmlUtil.ParsearUnionDateTime(anio, out fechaAnio, DateTimeStyles.AdjustToUniversal))
            {
                numeroAnio = fechaAnio.Year;
            }
            String moneda;
            parametrosConfiguracion.TryGetValue("moneda", out moneda);
            var emisora = parametrosConfiguracion.ContainsKey("emisora") ? parametrosConfiguracion["emisora"] : null;

            this.variablesPlantilla["nombreEntidad"] = emisora;

            if (parametrosConfiguracion.ContainsKey("namespaceEmisora") && parametrosConfiguracion["namespaceEmisora"] != null)
            {
                this.variablesPlantilla["esquemaEntidad"] = parametrosConfiguracion["namespaceEmisora"];
            }
            else
            {
                this.variablesPlantilla["esquemaEntidad"] =  "http://www.bmv.com.mx/id";
            }

            var iniciAnio = new DateTime(numeroAnio, 1, 1);
            var finAnio = fechaAnio;
            var finAnioAnt = new DateTime((numeroAnio - 1), 12, 31);
            var iniciAnioAnt = new DateTime((numeroAnio - 1), 1, 1);
            var finAnioAntAnt = new DateTime((numeroAnio-2), 12, 31);
            var iniciAnioAntAnt = new DateTime((numeroAnio-2), 1, 1);

            //inicio año ante anterior
            if (!variablesPlantilla.ContainsKey("fecha_2012_01_01"))
                this.variablesPlantilla.Add("fecha_2012_01_01", DateUtil.ToFormatString(iniciAnioAntAnt, DateUtil.YMDateFormat));

            //fin año ante anterior
            if (!variablesPlantilla.ContainsKey("fecha_2012_12_31"))
                this.variablesPlantilla.Add("fecha_2012_12_31", DateUtil.ToFormatString(finAnioAntAnt, DateUtil.YMDateFormat));

            //Inivio año anterior
            if (!variablesPlantilla.ContainsKey("fecha_2013_01_01"))
                this.variablesPlantilla.Add("fecha_2013_01_01", DateUtil.ToFormatString(iniciAnioAnt, DateUtil.YMDateFormat));

            //Finvaño anterior
            if (!variablesPlantilla.ContainsKey("fecha_2013_12_31"))
                this.variablesPlantilla.Add("fecha_2013_12_31", DateUtil.ToFormatString(finAnioAnt, DateUtil.YMDateFormat));

            //Inivio año actual
            if (!variablesPlantilla.ContainsKey("fecha_2014_01_01"))
                this.variablesPlantilla.Add("fecha_2014_01_01", DateUtil.ToFormatString(iniciAnio, DateUtil.YMDateFormat));

            //Finvaño actual
            if (!variablesPlantilla.ContainsKey("fecha_2014_12_31"))
                this.variablesPlantilla.Add("fecha_2014_12_31", DateUtil.ToFormatString(finAnio, DateUtil.YMDateFormat));

            if (!variablesPlantilla.ContainsKey("medida_MXN"))
                this.variablesPlantilla.Add("medida_MXN", moneda.Replace("http://www.xbrl.org/2003/iso4217:", ""));

            if (!variablesPlantilla.ContainsKey("medida_http___www_xbrl_org_2003_iso4217"))
                this.variablesPlantilla.Add("medida_http___www_xbrl_org_2003_iso4217", "http://www.xbrl.org/2003/iso4217");

            if (!variablesPlantilla.ContainsKey("valorDefaultNumerico"))
                this.variablesPlantilla.Add("valorDefaultNumerico", "0");

            if (!variablesPlantilla.ContainsKey("valorDefaultNoNumerico"))
                this.variablesPlantilla.Add("valorDefaultNoNumerico", " ");

            if (!variablesPlantilla.ContainsKey("medida_http___www_xbrl_org_2003_instance"))
                this.variablesPlantilla.Add("medida_http___www_xbrl_org_2003_instance", "http://www.xbrl.org/2003/instance");

            if (!variablesPlantilla.ContainsKey("medida_shares"))
                this.variablesPlantilla.Add("medida_shares", "shares");

            if (!variablesPlantilla.ContainsKey("medida_pure"))
                this.variablesPlantilla.Add("medida_pure", "pure");

            return resultado;
        }
        /// <summary>
        /// Determina el tipo de reporte de prospecto.
        /// </summary>
        /// <param name="documentoInstancia">Documento a evaluar.</param>
        /// <returns>Clave correspondiente al tipo de reprote pp:Programa, fo:Follento, su:Suplemento, pe:EmisionUnica</returns>
        private String DeterminaTipoReporteProspecto(DocumentoInstanciaXbrlDto documentoInstancia)
        {
            var tipoReporte = "pp";

            IList<string> hechosFolleto;
            if (documentoInstancia.HechosPorIdConcepto.TryGetValue("ar_pros_Brochure", out hechosFolleto) && hechosFolleto.Count > 0)
            {
                tipoReporte = "fo";
            }
            else
            {

                IList<string> hechosSuplemento;
                if (documentoInstancia.HechosPorIdConcepto.TryGetValue("ar_pros_Supplement", out hechosSuplemento) && hechosSuplemento.Count > 0)
                {
                    tipoReporte = "su";
                }
                else
                {
                    IList<string> hechosProspecto;
                    if (documentoInstancia.HechosPorIdConcepto.TryGetValue("ar_pros_PlacementProspectus", out hechosProspecto) && hechosProspecto.Count > 0)
                    {
                        tipoReporte = "pp";
                        IList<string> hechosEmisionUnica;
                        if (documentoInstancia.HechosPorIdConcepto.TryGetValue("ar_pros_OnlyEmission", out hechosEmisionUnica) && hechosEmisionUnica.Count > 0)
                        {
                            var hechoEmisionUnica = ObtenHechoMayorFechaReporte(hechosEmisionUnica,documentoInstancia);
                            if (hechoEmisionUnica.Valor == "SI")
                            {
                                tipoReporte = "pe";
                            }
                        }
                    }
                }
            }
            return tipoReporte;
        }
        /// <summary>
        /// Determina la fecha de colocación para los reportes de tipo prospecto.
        /// </summary>
        /// <param name="documentoInstancia">Documento de instancia a evaluar.</param>
        /// <returns>Valor del concepto de fecha de colocación.</returns>
        private string DeterminaFechaColocacion(DocumentoInstanciaXbrlDto documentoInstancia)
        {
            string fechaColocacion = null;
            IList<string> idsConceptosFechaPublicacion;
            if (documentoInstancia.HechosPorIdConcepto.TryGetValue("ar_pros_DateOfPublicationOfTenderNotice", out idsConceptosFechaPublicacion))
            {
                var hechoFechaColocacion = ObtenHechoMayorFechaReporte(idsConceptosFechaPublicacion, documentoInstancia);
                if (hechoFechaColocacion != null)
                {
                    fechaColocacion =  hechoFechaColocacion.Valor;
                }
            }
            return fechaColocacion;
        }

        public override IDictionary<string, string> DeterminaParametrosConfiguracionDocumento(DocumentoInstanciaXbrlDto documentoInstancia)
        {
            var parametrosConfiguracionCalculados = new Dictionary<string, string>();
            parametrosConfiguracionCalculados = new Dictionary<string, string>();
            IList<string> listaHechosConceptoPrincipal  = null;

            IList<string> listaHechosConceptoAnual = null;
            IList<string> listaHechosConceptoBrochure = null;
            IList<string> listaHechosConceptoSupplement = null;
            IList<string> listaHechosConceptoProspectus = null;

            if (documentoInstancia.HechosPorIdConcepto.TryGetValue("ar_pros_AnnualReport", out listaHechosConceptoAnual)) {
                if(listaHechosConceptoAnual.Count > 0)
                {
                    listaHechosConceptoPrincipal = listaHechosConceptoAnual;
                }
            }

            if (documentoInstancia.HechosPorIdConcepto.TryGetValue("ar_pros_PlacementProspectus", out listaHechosConceptoProspectus))
            {
                if (listaHechosConceptoProspectus.Count > 0)
                {
                    listaHechosConceptoPrincipal = listaHechosConceptoProspectus;
                }
            }

            if (documentoInstancia.HechosPorIdConcepto.TryGetValue("ar_pros_Supplement", out listaHechosConceptoSupplement))
            {
                if (listaHechosConceptoSupplement.Count > 0)
                {
                    listaHechosConceptoPrincipal = listaHechosConceptoSupplement;
                }
            }

            if (documentoInstancia.HechosPorIdConcepto.TryGetValue("ar_pros_Brochure", out listaHechosConceptoBrochure))
            {
                if (listaHechosConceptoBrochure.Count > 0)
                {
                    listaHechosConceptoPrincipal = listaHechosConceptoBrochure;
                }
            }

                parametrosConfiguracionCalculados["tipoReporte"] = DeterminaTipoReporteProspecto(documentoInstancia);
                parametrosConfiguracionCalculados["fechaColocacion"] = DeterminaFechaColocacion(documentoInstancia);
       

            parametrosConfiguracionCalculados["fechaConstitucion"] = DateUtil.ToFormatString(ObtenFechaMinimaReporte(documentoInstancia) ?? DateTime.MinValue, DateUtil.YMDateFormat);

            DateTime fechaCierre = DateTime.MinValue;
            string valorDefaultAnnualReport = String.Empty;
            string emisora = String.Empty;
            string anio = String.Empty;
            string moneda = String.Empty;
            string namespaceEmisora = String.Empty;
            var hechoPrincipal = ObtenHechoMayorFechaReporte(listaHechosConceptoPrincipal, documentoInstancia);
            var idContexto = hechoPrincipal.IdContexto;
            Dto.ContextoDto contexto;
            if (documentoInstancia.ContextosPorId.TryGetValue(idContexto, out contexto))
            {
                var periodo = contexto.Periodo;
                if (periodo.Tipo == PeriodoDto.Instante)
                {
                    fechaCierre = periodo.FechaInstante;
                }
                if (periodo.Tipo == PeriodoDto.Duracion)
                {
                    fechaCierre = periodo.FechaFin;
                }
                emisora = contexto.Entidad.Id;
                valorDefaultAnnualReport = hechoPrincipal.Valor;
                namespaceEmisora = contexto.Entidad.EsquemaId;
            }
            foreach (var idUnidad in documentoInstancia.UnidadesPorId.Keys)
            {
                var unidad = documentoInstancia.UnidadesPorId[idUnidad];
                if (unidad.Tipo == UnidadDto.Medida)
                {
                    for (var indexMedida = 0; indexMedida < unidad.Medidas.Count; indexMedida++)
                    {
                        var medida = unidad.Medidas[indexMedida];
                        if (medida.EspacioNombres.Equals("http://www.xbrl.org/2003/iso4217"))
                        {
                            moneda = medida.EspacioNombres + ":" + medida.Nombre;
                            if (String.IsNullOrEmpty(medida.EspacioNombres) || String.IsNullOrEmpty(medida.Nombre))
                            {
                                documentoInstancia.ParametrosConfiguracion.TryGetValue("moneda", out moneda);
                            }
                        }
                    }
                }
            }
            if (String.IsNullOrEmpty(moneda))
            {
                if (documentoInstancia.ParametrosConfiguracion != null && documentoInstancia.ParametrosConfiguracion.ContainsKey("moneda")) {
                documentoInstancia.ParametrosConfiguracion.TryGetValue("moneda", out moneda);
                }
                else
                {
                    moneda = "http://www.xbrl.org/2003/iso4217:MXN"; 
                }
                
            }
            var valorAnio = DateUtil.ToFormatString(fechaCierre, DateUtil.YMDateFormat) + "T06:00:00.000Z";
            parametrosConfiguracionCalculados["emisora"] =  emisora;
            parametrosConfiguracionCalculados["anio"] = valorAnio;
            parametrosConfiguracionCalculados["namespaceEmisora"] = namespaceEmisora;
            parametrosConfiguracionCalculados["moneda"] = moneda;
            parametrosConfiguracionCalculados["fecha"] = valorAnio;

            return parametrosConfiguracionCalculados;
        }
    }
}
