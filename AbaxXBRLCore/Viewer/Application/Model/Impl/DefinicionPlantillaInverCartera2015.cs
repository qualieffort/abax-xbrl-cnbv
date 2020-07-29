using System.Globalization;
using AbaxXBRL.Util;
using AbaxXBRLCore.Common.Util;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Viewer.Application.Model.Impl
{
    /// <summary>
    /// Implementación específica de la definición de la plantilla para la taxonomía de fondos de inversión 2015
    /// <author>Emigdio Hernandez</author>
    /// <version>1.0</version>
    /// </summary>
    public class DefinicionPlantillaInverCartera2015 : DefinicionPlantillaXbrlAbstract
    {
       

        public override string ObtenerIdSpringDefinicionElementosPlantillaDeRol(string rolURI)
        {
            return rolURI.Replace(":", "_").Replace("/", "_").Replace(".", "_").Replace("-", "_");
        }

        public override bool GenerarVariablesDocumentoInstancia()
        {
            bool resultado = true;

            var parametrosConfiguracion = this.ObtenerParametrosConfiguracion();

            var emisora = parametrosConfiguracion["emisora"];
            var fecha = parametrosConfiguracion["fecha"];
            DateTime fechaReporte = DateTime.MinValue;
            if (XmlUtil.ParsearUnionDateTime(fecha, out fechaReporte, DateTimeStyles.AdjustToUniversal))
            {
                fecha = DateUtil.ToFormatString(fechaReporte, DateUtil.YMDateFormat);
            }

            this.variablesPlantilla["fecha"] = fecha;
            
            
            this.variablesPlantilla["nombreEntidad"] = emisora;

            if (parametrosConfiguracion.ContainsKey("namespaceEmisora")) {
                this.variablesPlantilla["esquemaEntidad"] = parametrosConfiguracion["nombreEntidad"];
            } else {
                this.variablesPlantilla["esquemaEntidad"] = "http://www.bmv.com.mx/id";
            }
            this.variablesPlantilla["medida_http___www_xbrl_org_2003_iso4217"] = "http://www.xbrl.org/2003/iso4217";
            this.variablesPlantilla["valorDefaultNumerico"] = "0";
            this.variablesPlantilla["valorDefaultNoNumerico"] = " ";
            this.variablesPlantilla["medida_pure"] = "pure";
            this.variablesPlantilla["medida_MXN"] = "MXN";
            this.variablesPlantilla["medida_http___www_xbrl_org_2003_instance"] = "http://www.xbrl.org/2003/instance";
            this.variablesPlantilla["medida_shares"] = "shares";
            this.variablesPlantilla["redondeo"] = "0";
            this.variablesPlantilla["periodoReportado"] = "";
            
            
            return resultado;
        }



        public override bool DeterminarParametrosConfiguracion(Dto.DocumentoInstanciaXbrlDto instancia)
        {
            return true;
        }

        public override IDictionary<string, string> DeterminaParametrosConfiguracionDocumento(Dto.DocumentoInstanciaXbrlDto instancia)
        {
            return new Dictionary<string, string>();
        }
    }
}
