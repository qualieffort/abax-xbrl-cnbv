using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TestAbaxXBRL.JBRL.Modelo;

namespace TestAbaxXBRL.JBRL.Constants
{
    public class ConstantsJBRL
    {
        /// <summary>
        /// Daton numérico 
        /// </summary>
        private static TipoDatoJBRL Numerico = new TipoDatoJBRL()
        {
            id = 1,
            nombre = "Numérico",
            descripcion = "Datos representados por infomración númerica."
        };
        /// <summary>
        /// Daton texto 
        /// </summary>
        private static TipoDatoJBRL Texto = new TipoDatoJBRL()
        {
            id = 2,
            nombre = "Texto",
            descripcion = "Datos representados por infomración alfanumerica."
        };
        /// <summary>
        /// Daton lista de valores.
        /// </summary>
        private static TipoDatoJBRL Lista = new TipoDatoJBRL()
        {
            id = 3,
            nombre = "Lista de Valores",
            descripcion = "Representa un arreglo de datos."
        };
        /// <summary>
        /// Daton porcentaje.
        /// </summary>
        private static TipoDatoJBRL Porcentaje = new TipoDatoJBRL()
        {
            id = 4,
            nombre = "Porcentaje",
            descripcion = "Representa un porcentaje."
        };
        /// <summary>
        /// Daton fecha.
        /// </summary>
        private static TipoDatoJBRL Fecha = new TipoDatoJBRL()
        {
            id = 5,
            nombre = "Fecha",
            descripcion = "Representa una fecha."
        };
        /// <summary>
        /// Daton entero positivo.
        /// </summary>
        private static TipoDatoJBRL EnteroPositivo = new TipoDatoJBRL()
        {
            id = 6,
            nombre = "Entero Positivo",
            descripcion = "Representa un entero positivo (modulo de un entero)."
        };
        /// <summary>
        /// Tipo de dato numérico 
        /// </summary>
        public static TipoDatoJBRL TIPO_DATO_NUMERICO { get { return Numerico; } }
        /// <summary>
        /// Tipo de dato texto
        /// </summary>
        public static TipoDatoJBRL TIPO_DATO_TEXTO { get { return Texto; } }
        /// <summary>
        /// Tipo de dato lista de valores
        /// </summary>
        public static TipoDatoJBRL TIPO_DATO_LISTA_VALORES { get { return Lista; } }
        /// <summary>
        /// Tipo de dato porcentaje
        /// </summary>
        public static TipoDatoJBRL TIPO_DATO_PORCENTAJE { get { return Porcentaje; } }
        /// <summary>
        /// Tipo de dato fecha
        /// </summary>
        public static TipoDatoJBRL TIPO_DATO_FECHA { get { return Fecha; } }
        /// <summary>
        /// Tipo de dato modulo de enteros.
        /// </summary>
        public static TipoDatoJBRL TIPO_DATO_ENTERO_POSITIVO { get { return EnteroPositivo; } }

        /// <summary>
        /// Alias generales para identificar las taxonomias.
        /// </summary>
        public static IDictionary<String, String> ALIAS_TAXONOMIAS = new Dictionary<String, String>
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

        /// <summary>
        /// Conceptos principales de cada taxonomía.
        /// </summary>
        public static IList<String> MAIN_TAXONOMY_CONCEPT = new List<String>()
        {
            "ifrs_mx-cor_20141205_ClaveDeCotizacionBloqueDeTexto",
            "mx_ccd_Ticker",
            "mx_deuda_Ticker",
            "mx_trac_Ticker",
            "ar_pros_TypeOfInstrument"
        };
        /// <summary>
        /// Conceptos donde obtener el trimestre.
        /// </summary>
        public static IList<String> QUARTER_CONCEPT = new List<String>()
        {
            "ifrs_mx-cor_20141205_NumeroDeTrimestre",
            "mx_ccd_NumberOfQuarter",
            "mx_deuda_NumberOfQuarter",
            "mx_trac_NumberOfQuarter"
        };
        /// <summary>
        /// Conceptos donde obtener el número de fideicomiso.
        /// </summary>
        public static IList<String> TRUST_NUMBRE_CONCEPT = new List<String>()
        {
            "mx_ccd_TrustNumber",
            "mx_deuda_TrustNumber",
            "mx_trac_TrustNumber",
            "ar_pros_NumberOfTrust"
        };
        public static string REPORT_ENTITY_ATT = "instanceDocmentEntity";
        public static string REPORT_DATE_ATT = "instanceDocmentReportedDate";
        public static string REPORT_YEAR_ATT = "instanceDocmentReportedYear";
        public static string REPORT_TAXONOMY_ATT = "taxonomyId";
        public static string REPORT_TAXONOMY_NAME_ATT = "taxonomyName";
        public static string REPORT_QUARTER_ATT = "instanceDocmentQuarter";
        public static string REPORT_TRUST_NUMBER_ATT = "trustNumber";
        public static string REPORT_REPLACED_ATT = "isReplaced";
        public static string REPORT_VERSION_ATT = "reportRecordId";
        public static string REPORT_REPORT_ID_ATT = "reportId";
        public static string REPORT_REGISTRATON_DATE_ATT = "registrationDate";

        public static string DOWNLOAD_KIND_JSON = "tipoArchivo=4";
        public static string DOWNLOAD_KIND_XBRL = "tipoArchivo=5";
        public static string DOWNLOAD_KIND_EXCEL = "tipoArchivo=1";
        public static string DOWNLOAD_KIND_WORD = "tipoArchivo=6";
        public static string DOWNLOAD_KIND_PDF = "tipoArchivo=2";

        /// <summary>
        /// Atributos que serán utiliados para determinar el identificador de un reporte.
        /// </summary>
        public static IList<string> REPORT_DIMENSIONS_KEYS_ATT_LIST = new List<string>()
        {
            REPORT_TAXONOMY_ATT,
            REPORT_ENTITY_ATT,
            REPORT_DATE_ATT,
            REPORT_TRUST_NUMBER_ATT
        };

    }
}

