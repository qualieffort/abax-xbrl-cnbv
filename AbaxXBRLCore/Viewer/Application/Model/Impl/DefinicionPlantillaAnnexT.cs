using AbaxXBRL.Util;
using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.Viewer.Application.Dto;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Viewer.Application.Model.Impl
{
    public class DefinicionPlantillaAnnexT : DefinicionPlantillaXbrlAbstract
    {

        public override string ObtenerIdSpringDefinicionElementosPlantillaDeRol(string rolURI)
        {
            return rolURI.Replace(":", "_").Replace("/", "_").Replace(".", "_").Replace("-", "_");
        }

        public override bool GenerarVariablesDocumentoInstancia()
        {
            bool resultado = true;

            var parametrosConfiguracion = this.ObtenerParametrosConfiguracion();
            string emisora = null;
            string strFechaEvento = null;
            string moneda = null;
            string namespaceEmisora = null;

            if (!parametrosConfiguracion.TryGetValue("fecha", out strFechaEvento))
            {
                if (!parametrosConfiguracion.TryGetValue("fechaEvento", out strFechaEvento))
                {
                    return false;
                }
            }

            if( !parametrosConfiguracion.TryGetValue("emisora", out emisora) ||
                !parametrosConfiguracion.TryGetValue("moneda", out moneda))
            {
                return false;
            }

            DateTime fechaEvento = new DateTime();
            if (!XmlUtil.ParsearUnionDateTime(strFechaEvento, out fechaEvento, DateTimeStyles.AdjustToUniversal))
            {
                return false;
            }

            if (!this.variablesPlantilla.ContainsKey("nombreEntidad"))
            {
            	this.variablesPlantilla.Add("nombreEntidad", emisora);
            }

            if (!this.variablesPlantilla.ContainsKey("esquemaEntidad"))
            {
	            if (parametrosConfiguracion.TryGetValue("namespaceEmisora", out namespaceEmisora))
	            {
	            	if(namespaceEmisora != null)
	            	{
	                	this.variablesPlantilla.Add("esquemaEntidad", namespaceEmisora);
	            	}
	            }
	            else
	            {
	                this.variablesPlantilla.Add("esquemaEntidad", "http://www.bmv.com.mx/id");
	            }
            }

            if (!this.variablesPlantilla.ContainsKey("medida_MXN"))
            {
                this.variablesPlantilla.Add("medida_MXN", moneda.Replace("http://www.xbrl.org/2003/iso4217:", ""));
            }
          

            if (!this.variablesPlantilla.ContainsKey("medida_http___www_xbrl_org_2003_iso4217"))
                this.variablesPlantilla.Add("medida_http___www_xbrl_org_2003_iso4217", "http://www.xbrl.org/2003/iso4217");

            if (!this.variablesPlantilla.ContainsKey("valorDefaultNumerico"))
            	this.variablesPlantilla.Add("valorDefaultNumerico", "0");

            if (!this.variablesPlantilla.ContainsKey("valorDefaultNoNumerico"))
            	this.variablesPlantilla.Add("valorDefaultNoNumerico", " ");

            if (!this.variablesPlantilla.ContainsKey("fecha_2016_09_30"))
                this.variablesPlantilla.Add("fecha_2016_09_30", DateUtil.ToFormatString(fechaEvento, DateUtil.YMDateFormat));                 //fecha fin del año anterior

            if (!variablesPlantilla.ContainsKey("medida_http___www_xbrl_org_2003_instance"))
                this.variablesPlantilla.Add("medida_http___www_xbrl_org_2003_instance", "http://www.xbrl.org/2003/instance");

            if (!variablesPlantilla.ContainsKey("medida_pure"))
                this.variablesPlantilla.Add("medida_pure", "pure");

            return resultado;
        }

        public override bool DeterminarParametrosConfiguracion(DocumentoInstanciaXbrlDto documentoInstanciaXbrl)
        {
            this.parametrosConfiguracion = DeterminaParametrosConfiguracionDocumento(documentoInstanciaXbrl);
            return parametrosConfiguracion.Count > 0;
        }

        public override IDictionary<string, string> DeterminaParametrosConfiguracionDocumento(DocumentoInstanciaXbrlDto instancia)
        {
            var parametrosConfiguracion = new Dictionary<string, string>();
            IList<string> idsHechosAnnexT;
            string nombreConcepto = null;
            foreach (string a in instancia.HechosPorIdConcepto.Keys)
            {
                nombreConcepto = a;
                break;
            }

            if (instancia.HechosPorIdConcepto.TryGetValue(nombreConcepto, out idsHechosAnnexT))
            {
                DateTime fechaCierre = DateTime.MinValue;
                string valorDefaultAnnexT = String.Empty;
                string emisora = String.Empty;
                string anio = String.Empty;
                string moneda = String.Empty;
                string namespaceEmisora = String.Empty;
                HechoDto hechoAnnexT;
                for (var indexHecho = 0; indexHecho < idsHechosAnnexT.Count; indexHecho++)
                {
                    var idHechoAnnexT = idsHechosAnnexT[indexHecho];
                    HechoDto hechoItera;
                    if (instancia.HechosPorId.TryGetValue(idHechoAnnexT, out hechoItera))
                    {
                        var idContexto = hechoItera.IdContexto;
                        ContextoDto contexto;
                        if (instancia.ContextosPorId.TryGetValue(idContexto, out contexto))
                        {
                            var periodo = contexto.Periodo;
                            var fechaContexto = fechaCierre;
                            if (periodo.Tipo == PeriodoDto.Instante)
                            {
                                fechaContexto = periodo.FechaInstante;
                }
                            if (periodo.Tipo == PeriodoDto.Duracion)
                {
                                fechaContexto = periodo.FechaFin;
                            }

                            if (fechaCierre < fechaContexto)
                            {
                                fechaCierre = fechaContexto;
                                hechoAnnexT = hechoItera;
                                emisora = contexto.Entidad.Id;
                                valorDefaultAnnexT = hechoAnnexT.Valor;
                                namespaceEmisora = contexto.Entidad.EsquemaId;
                            }
                        }
                    }
                }
                foreach (var idUnidad in instancia.UnidadesPorId.Keys)
                {
                    var unidad = instancia.UnidadesPorId[idUnidad];
                    if (unidad.Tipo == UnidadDto.Medida)
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
                var valorAnio = DateUtil.ToFormatString(fechaCierre, DateUtil.YMDateFormat) + "T06:00:00.000Z";
                parametrosConfiguracion.Add("emisora", emisora);
                parametrosConfiguracion.Add("fecha", valorAnio);
                parametrosConfiguracion.Add("namespaceEmisora", namespaceEmisora);
                parametrosConfiguracion.Add("moneda", moneda);
            }

            return parametrosConfiguracion;
        }
    }
}
