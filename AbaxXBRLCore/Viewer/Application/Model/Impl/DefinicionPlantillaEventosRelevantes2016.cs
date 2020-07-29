using AbaxXBRL.Util;
using AbaxXBRLCore.Common.Util;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Viewer.Application.Model.Impl
{
    /// <summary>
    /// Implementación específica de la definición de la plantilla para las taxonomías de
    /// eventos relevantes 2016.
    /// <author>Emigdio Hernández</author>
    /// <version>1.0</version>
    /// </summary>
    class DefinicionPlantillaEventosRelevantes2016 : DefinicionPlantillaXbrlAbstract
    {
        public override string ObtenerIdSpringDefinicionElementosPlantillaDeRol(string rolURI)
        {
            return rolURI.Replace(":", "_").Replace("/", "_").Replace(".", "_").Replace("-", "_");
        }

        public override bool GenerarVariablesDocumentoInstancia()
        {
            bool resultado = true;

            var parametrosConfiguracion = this.ObtenerParametrosConfiguracion();
            var emisora = parametrosConfiguracion.ContainsKey("emisora") ? parametrosConfiguracion["emisora"] : null;
            var strFechaEvento = parametrosConfiguracion.ContainsKey("fechaEvento") ? parametrosConfiguracion["fechaEvento"] : null;
            var moneda = parametrosConfiguracion.ContainsKey("moneda") ? parametrosConfiguracion["moneda"] : null;

            
            DateTime fechaEvento = new DateTime();
            if (!XmlUtil.ParsearUnionDateTime(strFechaEvento, out fechaEvento, DateTimeStyles.AdjustToUniversal))
            {
                return false;
            }
           

            this.variablesPlantilla.Add("nombreEntidad", emisora);

            if (parametrosConfiguracion.ContainsKey("namespaceEmisora") && parametrosConfiguracion["namespaceEmisora"] != null)
            {
                this.variablesPlantilla.Add("esquemaEntidad", parametrosConfiguracion["namespaceEmisora"]);
            }
            else
            {
                this.variablesPlantilla.Add("esquemaEntidad", "http://www.bmv.com.mx/id");
            }

           
            
            this.variablesPlantilla["medida_http___www_xbrl_org_2003_iso4217"] = "http://www.xbrl.org/2003/iso4217";
            this.variablesPlantilla["valorDefaultNumerico"] =  "0";
            this.variablesPlantilla["valorDefaultNoNumerico"] =  " ";
            this.variablesPlantilla["medida_http___www_xbrl_org_2003_instance"] = "http://www.xbrl.org/2003/instance";
            this.variablesPlantilla["medida_shares"] = "shares";
            this.variablesPlantilla["medida_pure"] = "pure";
            this.variablesPlantilla["fecha_2016_10_12"] = DateUtil.ToFormatString(fechaEvento, DateUtil.YMDateFormat);                 //fecha fin del año anterior
            
            return resultado;
        }

        public override bool DeterminarParametrosConfiguracion(Dto.DocumentoInstanciaXbrlDto documentoInstanciaXbrl)
        {
            this.parametrosConfiguracion = DeterminaParametrosConfiguracionDocumento(documentoInstanciaXbrl);
            return parametrosConfiguracion.Count > 0;
        }

        public override IDictionary<string, string> DeterminaParametrosConfiguracionDocumento(Dto.DocumentoInstanciaXbrlDto documentoInstanciaXbrl)
        {
            var parametrosConfiguracionCalculados = new Dictionary<string, string>();
            IList<string> idsHechosEventoRelevante;
            if (documentoInstanciaXbrl.HechosPorIdConcepto.TryGetValue("rel_news_RelevantEventContent", out idsHechosEventoRelevante))
            {
                DateTime fechaEvento = DateTime.Now;
                string valorDefaultAnnualReport = String.Empty;
                string emisora = String.Empty;
                string anio = String.Empty;
                string moneda = String.Empty;
                string namespaceEmisora = String.Empty;
                var hechoEventoRelevante = ObtenHechoMayorFechaReporte(idsHechosEventoRelevante, documentoInstanciaXbrl);
                Dto.ContextoDto contextoEventoRelevante;
                if (hechoEventoRelevante != null &&
                    documentoInstanciaXbrl.ContextosPorId.TryGetValue(hechoEventoRelevante.IdContexto, out contextoEventoRelevante))
                {
                    var periodo = contextoEventoRelevante.Periodo;
                    fechaEvento = periodo.Tipo == Dto.PeriodoDto.Instante ? periodo.FechaInstante : periodo.FechaFin;
                    emisora = contextoEventoRelevante.Entidad.Id;
                    namespaceEmisora = contextoEventoRelevante.Entidad.EsquemaId;
                }
                foreach (var idUnidad in documentoInstanciaXbrl.UnidadesPorId.Keys)
                {
                    var unidad = documentoInstanciaXbrl.UnidadesPorId[idUnidad];
                    if (unidad.Tipo == Dto.UnidadDto.Medida)
                    {
                        for (var indexMedida = 0; indexMedida < unidad.Medidas.Count; indexMedida++)
                        {
                            var medida = unidad.Medidas[indexMedida];
                            if (medida.EspacioNombres.Equals("http://www.xbrl.org/2003/iso4217"))
                            {
                                moneda = medida.EspacioNombres + ":" + medida.Nombre;
                            }
                        }
                    }

                }
                IList<string> idsConceptosFecha;
                if (documentoInstanciaXbrl.HechosPorIdConcepto.TryGetValue("rel_news_Date", out idsConceptosFecha))
                {
                    var hechoFecha = ObtenHechoMayorFechaReporte(idsConceptosFecha, documentoInstanciaXbrl);
                    if (hechoFecha != null)
                    {
                        parametrosConfiguracionCalculados.Add("fechaColocacion", hechoFecha.Valor);
                    }
                }
                parametrosConfiguracionCalculados.Add("emisora", emisora);
                parametrosConfiguracionCalculados.Add("fechaEvento", DateUtil.ToFormatString(fechaEvento, DateUtil.YMDateFormat));
                parametrosConfiguracionCalculados.Add("namespaceEmisora", namespaceEmisora);
                parametrosConfiguracionCalculados.Add("moneda", moneda);
            }
            return parametrosConfiguracionCalculados;
        }
    }
}
