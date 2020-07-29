using System.Globalization;
using AbaxXBRL.Util;
using AbaxXBRLCore.Common.Util;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using AbaxXBRLCore.Viewer.Application.Dto;
using AbaxXBRL.Constantes;

namespace AbaxXBRLCore.Viewer.Application.Model.Impl
{
    /// <summary>
    /// Implementación específica de la definición de la plantilla para la taxonomía de fideicomisos en ccd, deuda y tracs.
    /// <author>Luis Angel Morales Gonzalez</author>
    /// <version>1.0</version>
    /// </summary>
    public class DefinicionPlantillaFideicomisos2015 : DefinicionPlantillaXbrlAbstract
    {
        public override string ObtenerIdSpringDefinicionElementosPlantillaDeRol(string rolURI)
        {
            return rolURI.Replace(":", "_").Replace("/", "_").Replace(".", "_").Replace("-", "_");
        }

        public override bool GenerarVariablesDocumentoInstancia()
        {
            bool resultado = true;

            var parametrosConfiguracion = this.ObtenerParametrosConfiguracion();

            var numeroTrimestre = parametrosConfiguracion.ContainsKey("trimestre") ? parametrosConfiguracion["trimestre"] : null;
            var emisora = parametrosConfiguracion.ContainsKey("emisora") ? parametrosConfiguracion["emisora"] : null;
            var anio = parametrosConfiguracion.ContainsKey("anio") ? parametrosConfiguracion["anio"] : null;
            var moneda = parametrosConfiguracion.ContainsKey("moneda") ? parametrosConfiguracion["moneda"] : null;

            var mesFinTrimestre = ((numeroTrimestre.Equals("4D") ? 4 : int.Parse(numeroTrimestre)) * 3);
            var mesInicioTrimestre = mesFinTrimestre - 2;
            DateTime fechaAnio = new DateTime();
            var nAnio = 0;
            if (XmlUtil.ParsearUnionDateTime(anio,out fechaAnio,DateTimeStyles.AdjustToUniversal))
            {
                nAnio = fechaAnio.Year;
            }

            var inicioTrimestre = new DateTime(nAnio, mesInicioTrimestre, 1);
            var finTrimestre = new DateTime(nAnio, mesFinTrimestre, DateTime.DaysInMonth(nAnio, mesFinTrimestre));
            var inicioAnio = new DateTime(nAnio, 1, 1);
            var finAnio = new DateTime(nAnio, 12, 31);


            this.variablesPlantilla.Add("nombreEntidad", emisora);

            if (parametrosConfiguracion.ContainsKey("namespaceEmisora") && parametrosConfiguracion["namespaceEmisora"] != null)
            {
                this.variablesPlantilla.Add("esquemaEntidad", parametrosConfiguracion["namespaceEmisora"]);
            }
            else
            {
                this.variablesPlantilla.Add("esquemaEntidad", "http://www.bmv.com.mx/id");
            }

            if (moneda == null)
            {
                moneda = "MXN";
            }

            this.variablesPlantilla.Add("medida_MXN", moneda.Replace("http://www.xbrl.org/2003/iso4217:", ""));
            this.variablesPlantilla.Add("medida_http___www_xbrl_org_2003_iso4217", "http://www.xbrl.org/2003/iso4217");
            this.variablesPlantilla.Add("valorDefaultNumerico", "0");
            this.variablesPlantilla.Add("valorDefaultNoNumerico", " ");
            this.variablesPlantilla.Add("medida_http___www_xbrl_org_2003_instance", "http://www.xbrl.org/2003/instance");
            this.variablesPlantilla.Add("medida_shares", "shares");
            this.variablesPlantilla.Add("medida_pure", "pure");


            this.variablesPlantilla.Add("fecha_2014_12_31", DateUtil.ToFormatString(finAnio.AddYears(-1), DateUtil.YMDateFormat));                 //fecha fin del año anterior
            this.variablesPlantilla.Add("fecha_2015_09_30", DateUtil.ToFormatString(finTrimestre, DateUtil.YMDateFormat));                         //fecha de fin de trimestre actual
            this.variablesPlantilla.Add("fecha_2014_07_01", DateUtil.ToFormatString(inicioTrimestre.AddYears(-1), DateUtil.YMDateFormat));         //fecha de inicio de trimestre del año anterior
            this.variablesPlantilla.Add("fecha_2014_09_30", DateUtil.ToFormatString(finTrimestre.AddYears(-1), DateUtil.YMDateFormat));            //fecha de fin de trimestre del año anterior
            this.variablesPlantilla.Add("fecha_2015_07_01", DateUtil.ToFormatString(inicioTrimestre, DateUtil.YMDateFormat));                      //fecha de inicio de trimestre año actual
            this.variablesPlantilla.Add("fecha_2014_01_01", DateUtil.ToFormatString(inicioAnio.AddYears(-1), DateUtil.YMDateFormat));              //fecha de inicio del año anterior
            this.variablesPlantilla.Add("fecha_2015_01_01", DateUtil.ToFormatString(inicioAnio, DateUtil.YMDateFormat));                           //fecha de inicio del año actual
            this.variablesPlantilla.Add("fecha_2013_10_01", DateUtil.ToFormatString(finTrimestre.AddYears(-2).AddDays(1), DateUtil.YMDateFormat)); //fecha de fin de trimestre de dos años atrás + 1 día
            this.variablesPlantilla.Add("fecha_2014_10_01", DateUtil.ToFormatString(finTrimestre.AddYears(-1).AddDays(1), DateUtil.YMDateFormat)); //fecha de fin de trimestre de un año atrás + 1 día
            this.variablesPlantilla.Add("fecha_2013_12_31", DateUtil.ToFormatString(finAnio.AddYears(-2), DateUtil.YMDateFormat));                 //fecha fin de dos años atrás
            this.variablesPlantilla.Add("esDictaminado", numeroTrimestre.Equals("4D") ? "true" : "false");                                                     

            return resultado;
        }

        public override string ObtenerTituloEspecificoDocumentoXbrl(DocumentoInstanciaXbrlDto instancia = null) { 
            
            return null;            
        }

        public override bool DeterminarParametrosConfiguracion(Dto.DocumentoInstanciaXbrlDto instancia)
        {
            this.parametrosConfiguracion = DeterminaParametrosConfiguracionDocumento(instancia);
            return parametrosConfiguracion.Count > 0;
        }

        public override IDictionary<string, string> DeterminaParametrosConfiguracionDocumento(DocumentoInstanciaXbrlDto instancia)
        {
            var prefijoId = "";
            if (instancia.EspacioNombresPrincipal.Contains("_ccd_"))
            {
                prefijoId = "mx_ccd_";
            }
            else if (instancia.EspacioNombresPrincipal.Contains("_deuda_"))
            {
                prefijoId = "mx_deuda_";
            }
            else
            {
                prefijoId = "mx_trac_";
            }

            var resultado = true;
            var parametrosConfiguracionCalculados = new Dictionary<string, string>();
            DateTime fechaFin = new DateTime();
            if (instancia.HechosPorIdConcepto.ContainsKey(prefijoId + "NumberOfQuarter"))
            {
                var hechosNumeroTrimestre = instancia.HechosPorIdConcepto[prefijoId + "NumberOfQuarter"];
                if (hechosNumeroTrimestre.Count > 0)
                {
                    var hechoNumTrimestre = instancia.HechosPorId[hechosNumeroTrimestre[0]];
                    parametrosConfiguracionCalculados["trimestre"] = hechoNumTrimestre.Valor;
                    var contexto = instancia.ContextosPorId[hechoNumTrimestre.IdContexto];
                    parametrosConfiguracionCalculados["emisora"] = contexto.Entidad.Id;
                    parametrosConfiguracionCalculados["namespaceEmisora"] = contexto.Entidad.EsquemaId;

                }
                if (instancia.HechosPorIdConcepto.ContainsKey("ifrs-full_DateOfEndOfReportingPeriod2013"))
                {
                    var hechosFechaFinReporte = instancia.HechosPorIdConcepto["ifrs-full_DateOfEndOfReportingPeriod2013"];
                    if (hechosFechaFinReporte.Count > 0)
                    {
                        var hechoFechaFin = instancia.HechosPorId[hechosFechaFinReporte[0]];

                        XmlUtil.ParsearUnionDateTime(hechoFechaFin.Valor, out fechaFin);

                        parametrosConfiguracionCalculados["anio"] = fechaFin.Year + "-01-01";
                    }
                }

                String moneda = null;
                foreach (var unidad in instancia.UnidadesPorId.Values)
                {
                    if (unidad.Tipo == UnidadDto.Medida)
                    {
                        if (unidad.Medidas.Count == 1 && unidad.Medidas[0].EspacioNombres == EspacioNombresConstantes.ISO_4217_Currency_Namespace)
                        {
                            moneda = unidad.Medidas[0].EspacioNombres + ':' + unidad.Medidas[0].Nombre;
                            break;
                        }
                    }
                }
                if (moneda != null)
                {
                    parametrosConfiguracionCalculados["moneda"] = moneda;
                }
                else
                {
                    resultado = false;
                }

                //Generamos la fecha de inicio del año anterior.


                var fechaInicioAnoAnterior = new DateTime(fechaFin.Year, 12, 31);
                fechaInicioAnoAnterior.AddYears(-2);

                //Creamos el periodo instante con la fecha de inicio del año anterior.
                var periodoInicioAnioAnterior = new PeriodoDto();
                periodoInicioAnioAnterior.Tipo = PeriodoDto.Instante;
                periodoInicioAnioAnterior.FechaInstante = fechaInicioAnoAnterior;


                parametrosConfiguracionCalculados["primerAnio"] = "false";
                parametrosConfiguracionCalculados["tieneComparativo"] = "true";
                parametrosConfiguracionCalculados["tieneCierreEjercicioAnterior"] = "true";

                if (instancia.HechosPorIdConcepto.ContainsKey("ifrs-full_EquityAndLiabilities"))
                {
                    //Buscamos si los hechos del concepto pertenecen al contexto equivalente a la fecha de inicio del año anterior.
                    var hechosPrimerAno = instancia.HechosPorIdConcepto["ifrs-full_EquityAndLiabilities"];
                    foreach (var idHecho in hechosPrimerAno)
                    {
                        var hecho = instancia.HechosPorId[idHecho];
                        var contexto = instancia.ContextosPorId[hecho.IdContexto];
                        if (contexto.Periodo.EstructuralmenteIgual(periodoInicioAnioAnterior))
                        {
                            parametrosConfiguracionCalculados["primerAnio"] = "true";
                            break;
                        }
                    }
                }


            }
            else
            {
                resultado = false;
            }
            if (!resultado)
            {
                parametrosConfiguracionCalculados.Clear();
            }
            return parametrosConfiguracionCalculados;
        }
    }
}
