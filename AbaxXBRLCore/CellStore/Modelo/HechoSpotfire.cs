using AbaxXBRLCore.CellStore.Util;
using MongoDB.Bson;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRLCore.CellStore.Modelo
{
    public class HechoSpotfire : ModeloBase
    {
        public IDictionary<String, Object> hechoSpotfire { get; }

        private IDictionary<String, Object> rolesSpotfire;

        private IDictionary<String, Object> dimensionesSpotfire;

        private IDictionary<String, String> AliasTaxonomia = new Dictionary<String, String>
        {
            {"http://www.bmv.com.mx/fr/ics/2012-04-01/ifrs-mx-ics-entryPoint-all", "ics_2012"},
            {"http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_ics_entry_point_2014-12-05", "ics"},
            {"http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_cp_entry_point_2014-12-05", "cp"},
            {"http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_fibras_entry_point_2014-12-05", "fibras"},
            {"http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_sapib_entry_point_2014-12-05", "sapib"},

            {"http://www.bmv.com.mx/2015-06-30/ccd/full_ifrs_ccd_entry_point_2015-06-30", "ccd"},
            {"http://www.bmv.com.mx/2015-06-30/trac/full_ifrs_trac_entry_point_2015-06-30", "trac"},
            {"http://www.bmv.com.mx/2015-06-30/deuda/full_ifrs_deuda_entry_point_2015-06-30", "deuda"},

            {"http://www.bmv.com.mx/2016-08-22/annext_entrypoint", "annext"},
            {"http://www.cnbv.gob.mx/2016-08-22/annext_entrypoint", "annext"},

            {"http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/pros_H_entry_point_2016-08-22", "H"},
            {"http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/pros_HBIS_entry_point_2016-08-22", "HBIS"},
            {"http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/pros_HBIS1_entry_point_2016-08-22", "HBIS1"},
            {"http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/pros_HBIS2_entry_point_2016-08-22", "HBIS2"},
            {"http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/pros_HBIS3_entry_point_2016-08-22", "HBIS3"},
            {"http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/pros_HBIS4_entry_point_2016-08-22", "HBIS4"},
            {"http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/pros_HBIS5_entry_point_2016-08-22", "HBIS5"},
            {"http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/pros_L_entry_point_2016-08-22", "L"},
            {"http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/pros_I_entry_point_2016-08-22", "I"},

            {"http://www.bmv.com.mx/2016-08-22/rel_ev_emisoras_entrypoint", "rel_ev_emisoras"},
            {"http://www.bmv.com.mx/2016-08-22/rel_ev_fondos_entrypoint", "rel_ev_fondos"},

            {"http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_fibras_entry_point_2016-08-22", "fibras_2016"},
            {"http://www.bmv.com.mx/2015-06-30/ccd/full_ifrs_ccd_entry_point_2016-08-22", "ccd_2016"},

            {"http://www.cnbv.gob.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_fibras_entry_point_2016-08-22", "fibras_2016"},
            {"http://www.cnbv.gob.mx/2015-06-30/ccd/full_ifrs_ccd_entry_point_2016-08-22", "ccd_2016"},

            {"http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/ar_N_entry_point_2016-08-22", "N"},
            {"http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/ar_NBIS_entry_point_2016-08-22", "NBIS"},
            {"http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/ar_NBIS1_entry_point_2016-08-22", "NBIS1"},
            {"http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/ar_NBIS2_entry_point_2016-08-22", "NBIS2"},
            {"http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/ar_NBIS3_entry_point_2016-08-22", "NBIS3"},
            {"http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/ar_NBIS4_entry_point_2016-08-22", "NBIS4"},
            {"http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/ar_NBIS5_entry_point_2016-08-22", "NBIS5"},
            {"http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/ar_O_entry_point_2016-08-22", "O"},

            {"http://www.cnbv.gob.mx/2017-08-01/relevant_events/rel_news_common_representative_view_entry_point", "rel_news_common_representative"},
            {"http://www.cnbv.gob.mx/2017-08-01/relevant_events/rel_news_investment_funds_view_entry_point", "rel_news_investment_funds"},
            {"http://www.cnbv.gob.mx/2017-08-01/relevant_events/rel_news_issuer_view_entry_point", "rel_news_issuer"},
            {"http://www.cnbv.gob.mx/2017-08-01/relevant_events/rel_news_rating_agency_view_entry_point", "rel_news_rating_agency"},
            {"http://www.cnbv.gob.mx/2017-08-01/relevant_events/rel_news_trust_issuer_view_entry_point", "rel_news_trust_issuer"},

        };

        public HechoSpotfire () { }

        public HechoSpotfire(Envio envio, Hecho hecho, IList<String> roles, IDictionary<String, IDictionary<String, int>> concepotsRol, IList<String> dimensiones) : this(envio, hecho, roles, concepotsRol)
        {
            this.dimensionesSpotfire = new Dictionary<String, Object>();

            foreach (var IdDimension in dimensiones)
            {
                var dimensionEtiqueta = IdDimension + "_Etiqueta";

                dimensionesSpotfire[IdDimension] = String.Empty;
                dimensionesSpotfire[dimensionEtiqueta] = String.Empty;
            }

            if (hecho.EsDimensional && hecho.MiembrosDimensionales != null && hecho.MiembrosDimensionales.Count > 0)
                ObtenerDimensiones(hecho.MiembrosDimensionales, this.dimensionesSpotfire);
        }


        public HechoSpotfire(Envio envio, Hecho hecho, IList<String> roles, IDictionary<String, IDictionary<String, int>> concepotsRol) : this(envio, hecho)
        {
            this.rolesSpotfire = new Dictionary<String, Object>();

            string idConcepto = hecho.Concepto.IdConcepto;
            IDictionary<String, int> conceptoPosicion = null;

            concepotsRol.TryGetValue(idConcepto, out conceptoPosicion);

            foreach (var rol in roles)
            {
                int posicion = 0;
                if (conceptoPosicion != null && conceptoPosicion.TryGetValue(rol, out posicion))
                {
                    rolesSpotfire[rol] = posicion;
                }
                else
                {
                    rolesSpotfire[rol] = -1;
                }
            }
        }

        public HechoSpotfire(Envio envio, Hecho hecho) : this(hecho)
        {
            hechoSpotfire["NumeroFideicomiso"] = envio.Parametros.ContainsKey("NumeroFideicomiso") ? envio.Parametros["NumeroFideicomiso"] : String.Empty;
            hechoSpotfire["AnioReporte"] = envio.Parametros.ContainsKey("Ano") ? envio.Parametros["Ano"] : String.Empty;
            hechoSpotfire["Trimestre"] = envio.Parametros.ContainsKey("trimestre") ? envio.Parametros["trimestre"] : String.Empty;
            hechoSpotfire["FechaRecepcion"] = envio.FechaRecepcion;
            hechoSpotfire["FechaDocumentoInstancia"] = envio.Periodo.Fecha;
            hechoSpotfire["EsVersionActual"] = envio.EsVersionActual;
            hechoSpotfire["IdEnvioRemplazo"] = envio.IdEnvioRemplazo;
        }

        private HechoSpotfire(Hecho hecho)
        {
            this.hechoSpotfire = new Dictionary<String, Object>();

            hechoSpotfire["IdHecho"] = hecho.IdHecho;
            hechoSpotfire["Taxonomia"] = AliasTaxonomia.ContainsKey(hecho.Taxonomia) ? AliasTaxonomia[hecho.Taxonomia]: hecho.Taxonomia;
            hechoSpotfire["EspacioNombresPrincipal"] = hecho.Taxonomia;
            hechoSpotfire["IdEnvio"] = hecho.IdEnvio;
            hechoSpotfire["Valor"] = hecho.Valor;
            hechoSpotfire["ValorNumerico"] = hecho.ValorNumerico;
            hechoSpotfire["EsValorChunks"] = hecho.EsValorChunks;
            hechoSpotfire["Precision"] = hecho.Precision;
            hechoSpotfire["Decimales"] = hecho.Decimales;
            hechoSpotfire["EsNumerico"] = hecho.EsNumerico;
            hechoSpotfire["EsFraccion"] = hecho.EsFraccion;
            hechoSpotfire["EsValorNil"] = hecho.EsValorNil;
            hechoSpotfire["EsTupla"] = hecho.EsTupla;
            hechoSpotfire["EsDimensional"] = hecho.EsDimensional;
            hechoSpotfire["Tupla_IdInterno"] = hecho.Tupla.IdInterno;
            hechoSpotfire["Tupla_IdPadre"] = hecho.Tupla.IdPadre;
            hechoSpotfire["Concepto_IdConcepto"] = hecho.Concepto.IdConcepto;
            hechoSpotfire["Concepto_EspacioNombres"] = hecho.Concepto.EspacioNombres;
            hechoSpotfire["Concepto_Tipo"] = hecho.Concepto.Tipo;
            hechoSpotfire["Concepto_Balance"] = hecho.Concepto.Balance;
            hechoSpotfire["Concepto_TipoDato"] = hecho.Concepto.TipoDato;
            hechoSpotfire["Concepto_Nombre"] = hecho.Concepto.Nombre;
            hechoSpotfire["Concepto_Etiqueta_es"] = ObtenerEtiqueta(hecho.Concepto.Etiquetas, "es");
            hechoSpotfire["Concepto_Etiqueta_en"] = ObtenerEtiqueta(hecho.Concepto.Etiquetas, "en");
            hechoSpotfire["Unidad_IdUnidad"] = hecho.Unidad.IdUnidad;
            hechoSpotfire["Unidad_Tipo"] = hecho.Unidad.Tipo;
            hechoSpotfire["Unidad_Medidas_EspaciosNombres"] = ObtenerMedida(hecho.Unidad.Medidas, false);
            hechoSpotfire["Unidad_Medidas_Nombre"] = ObtenerMedida(hecho.Unidad.Medidas, true);
            hechoSpotfire["Unidad_MedidasNumerador_EspaciosNombres"] = ObtenerMedida(hecho.Unidad.MedidasNumerador, false);
            hechoSpotfire["Unidad_MedidasNumerador_Nombre"] = ObtenerMedida(hecho.Unidad.MedidasNumerador, true);
            hechoSpotfire["Unidad_MedidasDenominador_EspaciosNombres"] = ObtenerMedida(hecho.Unidad.MedidasDenominador, false);
            hechoSpotfire["Unidad_MedidasDenominador_Nombre"] = ObtenerMedida(hecho.Unidad.MedidasDenominador, true);
            hechoSpotfire["Periodo_TipoPeriodo"] = hecho.Periodo.TipoPeriodo;
            hechoSpotfire["Periodo_FechaInicio"] = hecho.Periodo.FechaInicio;
            hechoSpotfire["Periodo_FechaFin"] = hecho.Periodo.FechaFin;
            hechoSpotfire["Periodo_FechaInstante"] = hecho.Periodo.FechaInstante;
            hechoSpotfire["Periodo_Alias"] = hecho.Periodo.Alias;
            hechoSpotfire["Entidad_IdEntidad"] = hecho.Entidad.IdEntidad;
            hechoSpotfire["Entidad_Esquema"] = hecho.Entidad.Esquema;
            hechoSpotfire["Entidad_Nombre"] = hecho.Entidad.Nombre;
            hechoSpotfire["IdHechoEnvio"] = hecho.IdHechoEnvio;
            hechoSpotfire["Remplazado"] = hecho.Remplazado;
            hechoSpotfire["IdEnvioRemplazo"] = hecho.IdEnvioRemplazo;

            if (hecho.Periodo.TipoPeriodo == 1)
                hechoSpotfire["Periodo_FechaHecho"] = hecho.Periodo.FechaInstante;
            
            if (hecho.Periodo.TipoPeriodo == 2)
                hechoSpotfire["Periodo_FechaHecho"] = hecho.Periodo.FechaFin;
        }

        public override string GeneraJsonId()
        {
            throw new NotImplementedException();
        }

        public override string ToJson()
        {
            string coma = ", ";

            bool esDimensional = (bool) hechoSpotfire["EsDimensional"];
            int tipoPeriodo = (int)hechoSpotfire["Periodo_TipoPeriodo"];

            string tipoDato = (string) hechoSpotfire["Concepto_TipoDato"];
            int index = tipoDato.LastIndexOf(":");
            tipoDato = tipoDato.Substring(index + 1);

            var json = new StringBuilder();
            json.Append("{");
            json.Append("\"IdEnvio\" : ").Append(ParseJson(AsString(hechoSpotfire["IdEnvio"]))).Append(coma);
            json.Append("\"FechaDocumentoInstancia\" : ").Append(ParseJson((DateTime)hechoSpotfire["FechaDocumentoInstancia"])).Append(coma);
            json.Append("\"EsVersionActual\" : ").Append(ParseJson((bool)hechoSpotfire["EsVersionActual"])).Append(coma);
            json.Append("\"IdEnvioRemplazo\" : ").Append(ParseJson(AsString(hechoSpotfire["IdEnvioRemplazo"]))).Append(coma);
            json.Append("\"NumeroFideicomiso\" : ").Append(ParseJson(AsString(hechoSpotfire["NumeroFideicomiso"]))).Append(coma);
            json.Append("\"AnioReporte\" : ").Append(ParseJson(AsString(hechoSpotfire["AnioReporte"]))).Append(coma);
            json.Append("\"Trimestre\" : ").Append(ParseJson(AsString(hechoSpotfire["Trimestre"]))).Append(coma);
            json.Append("\"FechaRecepcion\" : ").Append(ParseJson((DateTime)hechoSpotfire["FechaRecepcion"])).Append(coma);
            json.Append("\"IdHecho\" : ").Append(ParseJson(AsString(hechoSpotfire["IdHecho"]))).Append(coma);
            json.Append("\"Taxonomia\" : ").Append(ParseJson(AsString(hechoSpotfire["Taxonomia"]))).Append(coma);
            json.Append("\"EspacioNombresPrincipal\" : ").Append(ParseJson(AsString(hechoSpotfire["EspacioNombresPrincipal"]))).Append(coma);
            json.Append("\"Valor\" : ").Append(ParseJson(AsString(hechoSpotfire["Valor"]))).Append(coma);
            json.Append("\"ValorNumerico\" : ").Append(ParseJson((Decimal)hechoSpotfire["ValorNumerico"])).Append(coma);
            json.Append("\"EsValorChunks\" : ").Append(ParseJson((bool)hechoSpotfire["EsValorChunks"])).Append(coma);
            json.Append("\"Precision\" : ").Append(ParseJson(AsString(hechoSpotfire["Precision"]))).Append(coma);
            json.Append("\"Decimales\" : ").Append(ParseJson(AsString(hechoSpotfire["Decimales"]))).Append(coma);
            json.Append("\"EsNumerico\" : ").Append(ParseJson((bool)hechoSpotfire["EsNumerico"])).Append(coma);
            json.Append("\"EsFraccion\" : ").Append(ParseJson((bool)hechoSpotfire["EsFraccion"])).Append(coma);
            json.Append("\"EsValorNil\" : ").Append(ParseJson((bool)hechoSpotfire["EsValorNil"])).Append(coma);
            json.Append("\"EsTupla\" : ").Append(ParseJson((bool)hechoSpotfire["EsTupla"])).Append(coma);
            json.Append("\"EsDimensional\" : ").Append(ParseJson((bool)hechoSpotfire["EsDimensional"])).Append(coma);
            json.Append("\"Tupla_IdInterno\" : ").Append(ParseJson((long)hechoSpotfire["Tupla_IdInterno"])).Append(coma);
            json.Append("\"Tupla_IdPadre\" : ").Append(ParseJson((long)hechoSpotfire["Tupla_IdPadre"])).Append(coma);
            json.Append("\"Concepto_IdConcepto\" : ").Append(ParseJson(AsString(hechoSpotfire["Concepto_IdConcepto"]))).Append(coma);
            json.Append("\"Concepto_EspacioNombres\" : ").Append(ParseJson(AsString(hechoSpotfire["Concepto_EspacioNombres"]))).Append(coma);
            json.Append("\"Concepto_Tipo\" : ").Append(ParseJson((int)hechoSpotfire["Concepto_Tipo"])).Append(coma);
            json.Append("\"Concepto_Balance\" : ").Append(ParseJson((int)hechoSpotfire["Concepto_Balance"])).Append(coma);
            json.Append("\"Concepto_TipoDato\" : ").Append(ParseJson(tipoDato)).Append(coma);
            json.Append("\"Concepto_Nombre\" : ").Append(ParseJson(AsString(hechoSpotfire["Concepto_Nombre"]))).Append(coma);
            json.Append("\"Concepto_Etiqueta_es\" : ").Append(ParseJson(AsString(hechoSpotfire["Concepto_Etiqueta_es"]))).Append(coma);
            json.Append("\"Concepto_Etiqueta_en\" : ").Append(ParseJson(AsString(hechoSpotfire["Concepto_Etiqueta_en"]))).Append(coma);
            json.Append("\"Unidad_IdUnidad\" : ").Append(ParseJson(AsString(hechoSpotfire["Unidad_IdUnidad"]))).Append(coma);
            json.Append("\"Unidad_Tipo\" : ").Append(ParseJson((int)hechoSpotfire["Unidad_Tipo"])).Append(coma);
            json.Append("\"Unidad_Medidas_EspaciosNombres\" : ").Append(ParseJson(AsString(hechoSpotfire["Unidad_Medidas_EspaciosNombres"]))).Append(coma);
            json.Append("\"Unidad_Medidas_Nombre\" : ").Append(ParseJson(AsString(hechoSpotfire["Unidad_Medidas_Nombre"]))).Append(coma);
            json.Append("\"Unidad_MedidasNumerador_EspaciosNombres\" : ").Append(ParseJson(AsString(hechoSpotfire["Unidad_MedidasNumerador_EspaciosNombres"]))).Append(coma);
            json.Append("\"Unidad_MedidasNumerador_Nombre\" : ").Append(ParseJson(AsString(hechoSpotfire["Unidad_MedidasNumerador_Nombre"]))).Append(coma);
            json.Append("\"Unidad_MedidasDenominador_EspaciosNombres\" : ").Append(ParseJson(AsString(hechoSpotfire["Unidad_MedidasDenominador_EspaciosNombres"]))).Append(coma);
            json.Append("\"Unidad_MedidasDenominador_Nombre\" : ").Append(ParseJson(AsString(hechoSpotfire["Unidad_MedidasDenominador_Nombre"]))).Append(coma);
            json.Append("\"Periodo_TipoPeriodo\" : ").Append(ParseJson((int)hechoSpotfire["Periodo_TipoPeriodo"])).Append(coma);

            if (hechoSpotfire.ContainsKey("Periodo_FechaHecho"))
                json.Append("\"Periodo_FechaHecho\" : ").Append(ParseJson((DateTime)hechoSpotfire["Periodo_FechaHecho"])).Append(coma);

            json.Append("\"Periodo_FechaInicio\" : ").Append(ParseJson((DateTime)hechoSpotfire["Periodo_FechaInicio"])).Append(coma);
            json.Append("\"Periodo_FechaFin\" : ").Append(ParseJson((DateTime)hechoSpotfire["Periodo_FechaFin"])).Append(coma);
            json.Append("\"Periodo_FechaInstante\" : ").Append(ParseJson((DateTime)hechoSpotfire["Periodo_FechaInstante"])).Append(coma);
            json.Append("\"Periodo_Alias\" : ").Append(ParseJson(AsString(hechoSpotfire["Periodo_Alias"]))).Append(coma);
            json.Append("\"Entidad_IdEntidad\" : ").Append(ParseJson(AsString(hechoSpotfire["Entidad_IdEntidad"]))).Append(coma);
            json.Append("\"Entidad_Esquema\" : ").Append(ParseJson(AsString(hechoSpotfire["Entidad_Esquema"]))).Append(coma);
            json.Append("\"Entidad_Nombre\" : ").Append(ParseJson(AsString(hechoSpotfire["Entidad_Nombre"]))).Append(coma);
            json.Append("\"IdHechoEnvio\" : ").Append(ParseJson(AsString(hechoSpotfire["IdHechoEnvio"]))).Append(coma);
            json.Append("\"Remplazado\" : ").Append(ParseJson((bool)hechoSpotfire["Remplazado"])).Append(coma);
            

            json.Append(RolesJson()).Append(coma);
            json.Append(DimensionesJson());

            json.Append("}");

            return json.ToString();
        }

        public override string GetKeyPropertyName()
        {
            return "IdHecho";
        }

        public override string GetKeyPropertyVale()
        {
            return (string) hechoSpotfire["IdHecho"];
        }

        public BsonDocument ToBson()
        {
            return BsonDocument.Parse(this.ToJson());
        }

        private string RolesJson()
        {
            string coma = ", ";

            var json = new StringBuilder();

            foreach (var item in this.rolesSpotfire)
            {
                json.Append("\"").Append(item.Key).Append("\" : ");

                if (item.Value != null)
                    json.Append(ParseJson((int)item.Value)).Append(coma);
                else
                    json.Append("null").Append(coma);
            }

            var jsonRoles = json.ToString();
            var jsonFinal = jsonRoles.Substring(0, jsonRoles.Length - 2);

            return jsonFinal;
        }

        private string DimensionesJson()
        {
            string coma = ", ";

            var json = new StringBuilder();

            foreach (var item in this.dimensionesSpotfire)
            {
                json.Append("\"").Append(item.Key).Append("\" : ");
                json.Append(ParseJson((string)item.Value)).Append(coma);
            }

            var jsonDimensiones = json.ToString();
            var jsonFinal = jsonDimensiones.Substring(0, jsonDimensiones.Length - 2);

            return jsonFinal;
        }

        private string ObtenerEtiqueta(IList<Etiqueta> lista, string idioma, string rol = "http://www.xbrl.org/2003/role/label")
        {
            if (lista == null || lista.Count == 0)
            {
                return String.Empty;
            }

            var etiqueta = lista.Where(e => e.Rol == rol && e.Idioma == idioma).First();

            return etiqueta != null && !String.IsNullOrEmpty(etiqueta.Valor) ? etiqueta.Valor : String.Empty;
        }

        private string ObtenerMedida(IList<Medida> lista, bool obtenNombre)
        {
            string valor = String.Empty;

            if (lista == null || lista.Count == 0)
            {
                return valor;
            }

            var medida = lista.First();

            if (obtenNombre)
            {
                valor = medida.Nombre ?? valor;
            }
            else
            {
                valor = medida.EspacioNombres ?? valor;
            }

            return valor;
        }

        private void ObtenerDimensiones(IList<MiembrosDimensionales> listaDimensiones, IDictionary<String, Object> dimensionesSpotfire)
        {
            var dimensionesOrdenadas = listaDimensiones.OrderBy(d => d.QNameDimension).ThenBy(d => d.QNameItemMiembro).ThenBy(d => d.MiembroTipificado);

            foreach (var dimension in dimensionesOrdenadas)
            {
                if (dimension.Explicita)
                {
                    dimensionesSpotfire[dimension.IdDimension] = ObtenerEtiqueta(dimension.EtiquetasMiembroDimension, "es");
                }
                else
                {
                    dimensionesSpotfire[dimension.IdDimension] = CellStoreUtil.EliminaEtiquetas(dimension.MiembroTipificado);
                }

                var dimensionEtiqueta = dimension.IdDimension + "_Etiqueta";
                dimensionesSpotfire[dimensionEtiqueta] = ObtenerEtiqueta(dimension.EtiquetasDimension, "es");
            }
        }
    }
}
