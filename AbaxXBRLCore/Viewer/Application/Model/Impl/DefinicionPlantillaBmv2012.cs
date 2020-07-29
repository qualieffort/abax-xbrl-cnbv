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
    /// Implementación específica de la definición de la plantilla para la taxonomía de la BMV 2012.
    /// <author>José Antonio Huizar Moreno</author>
    /// <version>1.0</version>
    /// </summary>
    public class DefinicionPlantillaBmv2012 : DefinicionPlantillaXbrlAbstract
    {
        /// <summary>
        /// Ruta para la plantilla a llenar del trimestre 1
        /// </summary>
        public string RutaPlantillaT1 {get;set;}

        /// <summary>
        /// Ruta para la plantilla a llenar del trimestre 2, 3 y 4
        /// </summary>
        public string RutaPlantillaT234 { get; set; }

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
            var fechaAnio = new DateTime();
            var nAnio = 0;
            if (XmlUtil.ParsearUnionDateTime(anio, out fechaAnio, DateTimeStyles.AdjustToUniversal))
            {
                nAnio = fechaAnio.Year;
            }
            
            var inicioTrimestre = new DateTime( nAnio, mesInicioTrimestre, 1 );
            var finTrimestre = new DateTime( nAnio, mesFinTrimestre, DateTime.DaysInMonth(nAnio, mesFinTrimestre));
            var inicioAnio = new DateTime(nAnio, 1, 1);
            var finAnio = new DateTime(nAnio, 12, 31 );
            
            
            this.variablesPlantilla.Add("nombreEntidad",emisora);

            if (parametrosConfiguracion.ContainsKey("namespaceEmisora") && parametrosConfiguracion["namespaceEmisora"] != null) {
                this.variablesPlantilla.Add("esquemaEntidad", parametrosConfiguracion["namespaceEmisora"]);
            } else {
                this.variablesPlantilla.Add("esquemaEntidad", "http://www.bmv.com.mx/id");
            }
            
            this.variablesPlantilla.Add("medida_MXN", moneda.Replace("http://www.xbrl.org/2003/iso4217:", ""));
            this.variablesPlantilla.Add("medida_http___www_xbrl_org_2003_iso4217", "http://www.xbrl.org/2003/iso4217");
            this.variablesPlantilla.Add("valorDefaultNumerico","0");
            this.variablesPlantilla.Add("valorDefaultNoNumerico", " ");
            this.variablesPlantilla.Add("medida_pure", "pure");
            this.variablesPlantilla.Add("medida_http___www_xbrl_org_2003_instance", "http://www.xbrl.org/2003/instance");
            this.variablesPlantilla.Add("medida_shares", "shares");


            this.variablesPlantilla.Add("fecha_2013_12_31", DateUtil.ToFormatString(finAnio.AddYears(-1), DateUtil.YMDateFormat));                 //fecha fin del año anterior
            this.variablesPlantilla.Add("fecha_2014_09_30", DateUtil.ToFormatString(finTrimestre, DateUtil.YMDateFormat));                         //fecha de fin de trimestre actual
            this.variablesPlantilla.Add("fecha_2013_07_01", DateUtil.ToFormatString(inicioTrimestre.AddYears(-1), DateUtil.YMDateFormat));         //fecha de inicio de trimestre del año anterior
            this.variablesPlantilla.Add("fecha_2013_09_30", DateUtil.ToFormatString(finTrimestre.AddYears(-1), DateUtil.YMDateFormat));            //fecha de fin de trimestre del año anterior
            this.variablesPlantilla.Add("fecha_2014_07_01", DateUtil.ToFormatString(inicioTrimestre, DateUtil.YMDateFormat));                      //fecha de inicio de trimestre año actual
            this.variablesPlantilla.Add("fecha_2013_01_01", DateUtil.ToFormatString(inicioAnio.AddYears(-1), DateUtil.YMDateFormat));              //fecha de inicio del año anterior
            this.variablesPlantilla.Add("fecha_2014_01_01", DateUtil.ToFormatString(inicioAnio, DateUtil.YMDateFormat));                           //fecha de inicio del año actual
            this.variablesPlantilla.Add("fecha_2012_10_01", DateUtil.ToFormatString(finTrimestre.AddYears(-2).AddDays(1), DateUtil.YMDateFormat)); //fecha de fin de trimestre de dos años atrás + 1 día
            this.variablesPlantilla.Add("fecha_2013_10_01", DateUtil.ToFormatString(finTrimestre.AddYears(-1).AddDays(1), DateUtil.YMDateFormat)); //fecha de fin de trimestre de un año atrás + 1 día
            this.variablesPlantilla.Add("fecha_2012_12_31", DateUtil.ToFormatString(finAnio.AddYears(-2), DateUtil.YMDateFormat));                 //fecha fin de dos años atrás
            this.variablesPlantilla.Add("redondeo", "0");                                                                                          //Grado de redondeo 
            this.variablesPlantilla.Add("periodoReportado", this.variablesPlantilla["fecha_2014_07_01"] + " - " + this.variablesPlantilla["fecha_2014_09_30"]);            
            
            return resultado;
        }



        public override bool DeterminarParametrosConfiguracion(Dto.DocumentoInstanciaXbrlDto instancia)
        {
            this.parametrosConfiguracion = DeterminaParametrosConfiguracionDocumento(instancia);
            return parametrosConfiguracion.Count > 0;
        }

        public override IDictionary<string, string> DeterminaParametrosConfiguracionDocumento(DocumentoInstanciaXbrlDto instancia)
        {
            var resultado = true;
            var parametrosConfiguracionCalculados = new Dictionary<string, string>();
            DateTime fechaFin = new DateTime();
            if (instancia.HechosPorIdConcepto.ContainsKey("ifrs_DateOfEndOfReportingPeriod"))
            {
                var hechosFechaFinReporte = instancia.HechosPorIdConcepto["ifrs_DateOfEndOfReportingPeriod"];
                if (hechosFechaFinReporte.Count > 0)
                {

                    var hechoFechaFin = instancia.HechosPorId[hechosFechaFinReporte[0]];
                    XmlUtil.ParsearUnionDateTime(hechoFechaFin.Valor, out fechaFin);
                    parametrosConfiguracionCalculados["anio"] = fechaFin.Year + "-01-01";

                    if (fechaFin.Month == 3 && fechaFin.Day == 31)
                    {
                        parametrosConfiguracionCalculados["trimestre"] = "1";
                    }
                    else if (fechaFin.Month == 6 && fechaFin.Day == 30)
                    {
                        parametrosConfiguracionCalculados["trimestre"] = "2";
                    }
                    else if (fechaFin.Month == 9 && fechaFin.Day == 31)
                    {
                        parametrosConfiguracionCalculados["trimestre"] = "3";
                    }
                    else if (fechaFin.Month == 12 && fechaFin.Day == 31)
                    {
                        parametrosConfiguracionCalculados["trimestre"] = "4";
                        if (instancia.HechosPorIdConcepto.ContainsKey("mx-ifrs-ics_Dictaminado") && instancia.HechosPorIdConcepto["mx-ifrs-ics_Dictaminado"].Count > 0)
                        {
                            if (instancia.HechosPorId[instancia.HechosPorIdConcepto["mx-ifrs-ics_Dictaminado"][0]].Valor.Equals("SI"))
                            {
                                parametrosConfiguracionCalculados["trimestre"] = "4D";
                            }
                        }
                    }
                    else
                    {
                        resultado = false;
                    }


                    var contexto = instancia.ContextosPorId[hechoFechaFin.IdContexto];
                    parametrosConfiguracionCalculados["emisora"] = contexto.Entidad.Id;
                    parametrosConfiguracionCalculados["namespaceEmisora"] = contexto.Entidad.EsquemaId;

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
