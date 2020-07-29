using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Reports.Constants
{
    /// <summary>
    /// Contiene las constantes generales para la generación de los reportes.
    /// </summary>
    public class ReportConstants
    {
        /// <summary>
        /// El código RGB  del color primario utilizado en los reportes de BMV
        /// </summary>
        public static String COLOR_PRIMARIO_BMV_RGB = "18AFA4";
        /// <summary>
        /// Puntos de entrada para fideicomisos.
        /// </summary>
        public static String CCD_ENTRY_POINT = "_ccd_";
        public static String DEUDA_ENTRY_POINT = "_deuda_";
        public static String TRAC_ENTRY_POINT = "_trac_";
        public static String IIFC_ENTRY_POINT = "iifc-entry_point_semestral_individual";
       
        public static String REL_EV_EMISORAS = "rel_ev_emisoras";
        public static String REL_EV_FONDOS = "rel_ev_fondos";
        /// <summary>
        /// Id de fideicomisos.
        /// </summary>
        public static String PREFIJO_ID_CCD = "mx_ccd_";
        public static String PREFIJO_ID_DEUDA = "mx_deuda_";
        public static String PREFIJO_ID_TRAC = "mx_trac_";
        public static String PREFIJO_ID_IIFC = "iifc";

        public static String PREFIJO_ANNEXT = "annext_";
        
        public static String PREFIJO_AR = "ar";
        public static String PREFIJO_PROS = "pros";
        public static String PREFIJO_AR_PROS = "ar_pros_";

        public static String PREFIJO_REL_EV_EMISORAS = "rel_ev_";
        /// <summary>
        /// Cadenas que contienen los puntos de entrada de cada taxonomía de ifrs
        /// </summary>
        public static String CP_ENTRY_POINT = "_cp_";
        public static String ICS_ENTRY_POINT = "_ics_";
        public static String FIBRAS_ENTRY_POINT = "_fibras_";
        public static String SAPIB_ENTRY_POINT = "_sapib_";
        /// <summary>
        /// Nombre corto de las taxonomía de ifrs
        /// </summary>
        public static String CLAVE_CP = "cp";
        public static String CLAVE_ICS = "ics";
        public static String CLAVE_FIBRAS = "fibras";
        public static String CLAVE_SAPIB = "sapib";
        /// <summary>
        /// Nombre corto de las taxonomías de fideicomisos
        /// </summary>
        public static String CLAVE_CCD = "ccd";
        public static String CLAVE_DEUDA = "deuda";
        public static String CLAVE_TRAC = "trac";
        public static String CLAVE_IIFC = "iifc";
        /// <summary>
        /// Calve taxonomías eventos relevantes
        /// </summary>
        public static String CLAVE_REL_EV_EMISORAS = "rel_ev_";
        public static String CLAVE_REL_EV_FONDOS = "rel_ev_";

        /// <summary>
        /// Puntos de entrada para reporte anual y prospecto.
        /// </summary>
        public static String N_ENTRY_POINT = "_N_";
        public static String NBIS_ENTRY_POINT = "_NBIS_";
        public static String NBIS1_ENTRY_POINT = "_NBIS1_";
        public static String NBIS2_ENTRY_POINT = "_NBIS2_";
        public static String NBIS3_ENTRY_POINT = "_NBIS3_";
        public static String NBIS4_ENTRY_POINT = "_NBIS4_";
        public static String NBIS5_ENTRY_POINT = "_NBIS5_";
        public static String O_ENTRY_POINT = "_O_";
        public static String H_ENTRY_POINT = "_H_";
        public static String HBIS_ENTRY_POINT = "_HBIS_";
        public static String HBIS1_ENTRY_POINT = "_HBIS1_";
        public static String HBIS2_ENTRY_POINT = "_HBIS2_";
        public static String HBIS3_ENTRY_POINT = "_HBIS3_";
        public static String HBIS4_ENTRY_POINT = "_HBIS4_";
        public static String HBIS5_ENTRY_POINT = "_HBIS5_";
        public static String L_ENTRY_POINT = "_L_";
        public static String I_ENTRY_POINT = "_I_";
        /// <summary>
        /// Nombre corto de las taxonomías de reporte anual y prospecto.
        /// </summary>
        public static String CLAVE_N = "N";
        public static String CLAVE_NBIS = "NBIS";
        public static String CLAVE_NBIS1 = "NBIS1";
        public static String CLAVE_NBIS2 = "NBIS2";
        public static String CLAVE_NBIS3 = "NBIS3";
        public static String CLAVE_NBIS4 = "NBIS4";
        public static String CLAVE_NBIS5 = "NBIS5";
        public static String CLAVE_O = "O";
        public static String CLAVE_H = "H";
        public static String CLAVE_HBIS = "HBIS";
        public static String CLAVE_HBIS1 = "HBIS1";
        public static String CLAVE_HBIS2 = "HBIS2";
        public static String CLAVE_HBIS3 = "HBIS3";
        public static String CLAVE_HBIS4 = "HBIS4";
        public static String CLAVE_HBIS5 = "HBIS5";
        public static String CLAVE_L = "L";
        public static String CLAVE_I = "I";

        public static String REL_EV_REP_COMMON = "rel_news_common_representative_view_entry_point";
        public static String REL_EV_INV_FOUNDS = "rel_news_investment_funds_view_entry_point";
        public static String REL_EV_ISSUER = "rel_news_issuer_view_entry_point";
        public static String REL_EV_RATING_AG = "rel_news_rating_agency_view_entry_point";
        public static String REL_EV_TRUST_ISSUER = "rel_news_trust_issuer_view_entry_point";

        public static String CLAVE_REL_EV_REP_COMMON = "rel_ev_";
        public static String CLAVE_REL_EV_INV_FOUNDS = "rel_ev_";
        public static String CLAVE_REL_EV_ISSUER = "rel_ev_";
        public static String CLAVE_REL_EV_RATING_AG = "rel_ev_";
        public static String CLAVE_REL_EV_TRUST_ISSUER = "rel_ev_";

        /// <summary>
        /// Puntos de entrada para anexo t.
        /// </summary>
        public static String ANNEXT_ENTRY_POINT = "annext_";
        /// <summary>
        /// Nombre corto de las taxonomías de anexo t.
        /// </summary>
        public static String CLAVE_ANNEXT = "annext";
        /// <summary>
        /// Identificador de la razon social o nombre que reporta para anexo t
        /// </summary>
        public static string CONCEPTO_ANNEXT_RAZON_SOCIAL = "annext_CorporateNameOfTheIssuer";
        /// <summary>
        /// Nombre del concepto de número de fideicomiso
        /// </summary>
        public static String CONCEPTO_ANNEXT_NUMERO_FIDEICOMISO = "annext_ContractNumberOfTheTrust";
        /// <summary>
        /// Nombre del concepto de número de fideicomiso
        /// </summary>
        public static String CONCEPTO_ANNEXT_SERIES = "annext_Series";

        /// <summary>
        /// ID del concepto donde se coloca la fecha de cierre del reporte
        /// </summary>
	    public static string ID_FECHA_CIERRE_REPORTE_2014 = "ifrs-full_DateOfEndOfReportingPeriod2013";
	
	    /// <summary>
	    /// ID de la cuenta de trimestre reportado
	    /// </summary>
	    public static string ID_TRIMESTRE_REPORTADO = "ifrs_mx-cor_20141205_NumeroDeTrimestre";
	
	    /// <summary>
	    /// ID de la moneda utilizada en el reporte
	    /// </summary>
	    public static string ID_MONEDA_REPORTADA = "ifrs-full_DescriptionOfPresentationCurrency";
	
	    /// <summary>
	    /// Identificador de la cuenta que indica si el reporte es consolidado
	    /// </summary>
	    public static string ID_CUENTA_CONSOLIDADO = "ifrs_mx-cor_20141205_Consolidado";
	
	    /// <summary>
	    /// Identificador de la razon social o nombre que reporta
	    /// </summary>
	    public static string ID_NOMBRE_RAZON_SOCIAL = "ifrs-full_NameOfReportingEntityOrOtherMeansOfIdentification";
        
        /// <summary>
        /// ID del concepto de clave de cotización
        /// </summary>
	    public static string ID_CLAVE_COTIZACION_2014 = "ifrs_mx-cor_20141205_ClaveDeCotizacionBloqueDeTexto";

        /// <summary>
	    /// Ticker corresponde al identificador de la emisora
	    /// </summary>
        public static String NOMBRE_CONCEPTO_EMISORA = "Ticker";

        /// <summary>
        /// Nombre de concepto para el número de trimestre
         /// </summary>
        public static String NOMBRE_CONCEPTO_NUMERO_TRIMESTRE = "NumberOfQuarter";
        
        /// <summary>
        /// Nombre del concepto de número de fideicomiso para anexo t
        /// </summary>
        public static String NOMBRE_CONCEPTO_NUMERO_FIDEICOMISO = "TrustNumber";

        /// <summary>
        /// Nombre del concepto del fideicomitente
        /// </summary>
        public static String NOMBRE_CONCEPTO_FIDEICOMITENTE = "TrusteesAdministratorAvalOrGuarantor";

        /// <summary>
        /// ID de la cuenta de patrimonio / activos netos
        /// </summary>
        public static String ID_CONCEPTO_EQUITY_AND_LIABILITIES = "ifrs-full_EquityAndLiabilities";

        /// <summary>
        /// Nombre del concepto ccd consolidado
        /// </summary>
        public static String NOMBRE_CONCEPTO_CCD_CONSOLIDADO = "mx_ccd_Consolidated";

        /// <summary>
        /// Valor para SI en método indirecto
        /// </summary>
        public static String VALOR_SI = "SI";
        public static String VALOR_SI_TRUE = "true";
        public static String VALOR_SI_2 = "2";

        public static String LOGO_CABECERA = "AbaxXBRLCore.Resources.logo_abax_mini.png";

        /// <summary>
        /// Gris por defecto para el borde de las tablas.
        /// </summary>
        public static Color DEFAULT_BORDER_GREY_COLOR = Color.FromArgb(99, 99, 99);


        
    }
}
