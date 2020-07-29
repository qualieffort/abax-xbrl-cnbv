using AbaxXBRL.Constantes;
using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.Reports.Constants;
using AbaxXBRLCore.Viewer.Application.Dto;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Web;

namespace AbaxXBRLCore.Reports.Util
{
    /// <summary>
    /// Define constantes y metodos comunes que pueden ser utilizados para le generacion de un ReporteXBRLDTO.
    /// </summary>
    public class ReporteXBRLUtil
    {
        /** La clave del idioma por default para la generación de los reportes */
	public static string IDIOMA_DEFAULT = "es";
	
	public static string NOMBRE_REPORTE_IFRS = "${claveCotizacion}_${anio}_${trimestre}_${moneda}_${consolidacion}_${fechaCreacion}.${extension}";

    public static string NOMBRE_REPORTE_IFRS_FIDEICOMISO = "${claveCotizacion}_${anio}_${trimestre}_${moneda}_${consolidacion}_${fideicomiso}_${fideicomitente}_${fechaCreacion}.${extension}";
	
	public static string NOMBRE_REPORTE_FIDU = "${claveCotizacion}_${anio}_${trimestre}_${moneda}_${consolidacion}_${fideicomiso}_${fechaCreacion}.${extension}";

    public static string NOMBRE_REPORTE_EVENTO_RELEVANTE = "${claveCotizacion}_${fecha}.${extension}";

    public static string IFRS_PATH_JSON = "AbaxXBRLCore.Config.Reports.bmv2014.ifrs_rol_${rol}.json";

    public static string FIDU_PATH_JSON = "AbaxXBRLCore.Config.Reports.fideicomisos2015.${claveTaxonomia}.fidu_${claveTaxonomia}_rol_${rol}.json";

    /// <summary>
    /// Estructura del path donde esta la configuración para los reportes IFRS.
    /// </summary>
    public static string IFRS_PATH_REPORT_CONFIG_JSON = "AbaxXBRLCore.Config.Reports.bmv2014.ifrs_report_config.json";
    /// <summary>
    /// Estructura del path donde esta la configuración para los reportes IFRS.
    /// </summary>
    public static string IFRS_2019_PATH_REPORT_CONFIG_JSON = "AbaxXBRLCore.Config.Reports.ifrs2019.ifrs_report_config.json";
    /// <summary>
    /// Estructura del path donde esta la configuración para los reportes de fideicomisos.
    /// </summary>
    public static string FIDU_PATH_REPORT_CONFIG_JSON = "AbaxXBRLCore.Config.Reports.fideicomisos2015.${claveTaxonomia}.fidu_${claveTaxonomia}_report_config.json";
    /// <summary>
    /// Estructura del path donde esta la configuración para los reportes de anexo T.
    /// </summary>
    public static string ANNEXT_PATH_REPORT_CONFIG_JSON = "AbaxXBRLCore.Config.Reports.${claveTaxonomia}.${claveTaxonomia}_report_config.json";

    public static string ANNEXT_PATH_HIPERCUBOS_JSON = "AbaxXBRLCore.Config.Reports.${claveTaxonomia}.hipercubos.${conceptoHipercubo}.json";
    /// <summary>
    /// Estructura del path donde esta la configuración para los reportes de reporte anual y prospecto.
    /// </summary>
    public static string AR_PROS_PATH_REPORT_CONFIG_JSON = "AbaxXBRLCore.Config.Reports.ar_prospectus.${claveTaxonomia}.${claveRaProspecto}_${claveTaxonomia}_report_config.json";

    public static string AR_PROS_PATH_HIPERCUBOS_JSON = "AbaxXBRLCore.Config.Reports.ar_prospectus.${claveTaxonomia}.hipercubos.${conceptoHipercubo}.json";
    /// <summary>
    /// Estructura del path donde esta la configuración para las etiquetas por lenguaje.
    /// </summary>
    public static string PATH_ETIQUETAS_POR_LENGUAJE_JSON = "AbaxXBRLCore.Config.Reports.Common.etiquetas.json";
    /// <summary>
    /// Estructura del path donde esta la configuración los estilos comunes.
    /// </summary>
    public static string PATH_ESTILOS_COMUNES = "AbaxXBRLCore.Config.Reports.Common.estilos.json";
    
    /// <summary>
    /// Path donde se puede encontrar la configuración para los reportes de eventos relevantes
    /// </summary>
    public static string EVENTOS_RELEVANTES_EMISORAS_REPORT_CONFIG_JSON = "AbaxXBRLCore.Config.Reports.eventosRelevantes.rel_events_emisoras.json";

	public static string TITULO_ROL = "TITULO_${rol}";

    public static string HEADER = "${titulo}_HEADER";
	
	public static string CLAVE_COTIZACION = "${claveCotizacion}";
	
	public static string ANIO = "${anio}";
	
	public static string TRIMESTRE = "${trimestre}";
	
	public static string MONEDA = "${moneda}";
	
	public static string CONSOLIDACION = "${consolidacion}";
	
	public static string FIDEICOMISO = "${fideicomiso}";
	
	public static string FIDEICOMITENTE = "${fideicomitente}";
	
	public static string FECHA_CREACION = "${fechaCreacion}";
	
	public static string EXTENSION = "${extension}";
	
	public static string ROL = "${rol}";
    
	public static string TITULO = "${titulo}";
	
	public static string CLAVE_TAXONOMIA = "${claveTaxonomia}";

    public static string CONCEPTO_HIPERCUBO = "${conceptoHipercubo}";

    public static string CLAVE_RA_PROS = "${claveRaProspecto}";

    public static string EMISORA = "${emisora}";
	
    public static string FECHA = "${fecha}";
	
	public static string XLS_EXTENSION = "xls";
	
	public static string HTML_EXTENSION = "htm";
	
	public static string DOCX_EXTENSION = "docx";
	
	public static string PDF_EXTENSION = "pdf";
	
	public static string CONSOLIDADO = "CONSOLIDADO";
	
	public static string NO_CONSOLIDADO = "NOCONSOLIDADO";
	
	public static string FORMATO_FECHA_CREACION = "yyyyMMdd";
	
	/** Contiene el formato de fecha Año-Mes-Día */
	public static string FORMATO_FECHA_YYYY_MM_DD = "yyyy-MM-dd";
	
	/** El rol por default de una etiqueta XBRL */
	public static string ETIQUETA_DEFAULT = "http://www.xbrl.org/2003/role/label";
	
    //public static final Charset UTF_8 = Charset.forName("UTF-8");
	
    //public static final Charset ISO_8859_1 = Charset.forName("ISO-8859-1");
	
	/** El formato a utilizar para expresar cantidades como moneda */
    public static string FORMATO_CANTIDADES_MONETARIAS = "#,##0.##########;(#,##0.##########)";

    public static string FORMATO_CANTIDADES_DECIMALES_AUX = "#,##0.00########; -#,##0.00########";

    public static string FORMATO_CANTIDADES_ENTERAS = "#,###;(#,###)";

    public static string FORMATO_CANTIDADES_DECIMALES = "#,##0.0#########;(#,##0.0#########)";

    public static string FORMATO_CANTIDADES_PORCENTAJE = "#,##0.##########;(#,##0.##########)";

    public static string PRODUCTO_XBR = "XBR";
	
	public static string PRODUCTO_XBRH = "XBRH";
	
	public static string CODIGO_ISO_PESO_MEXICANO = "MXN";
	
	public static string CODIGO_ISO_USD = "USD";
	
	public static string CODIGO_ISO_4217 = "http://www.xbrl.org/2003/iso4217";

    public static string CUARTO_TRIMESTRE_DICTAMINADO = "4D";
	/**
	 * Nombre del tipo de dato XBRL de bloque de texto
	 */
	public static string TIPO_DATO_TEXT_BLOCK = "textBlockItemType";
	/**
	 * Nombre del tipo de datos XBRL de cadena
	 */
	public static string TIPO_DATO_STRING = "stringItemType";
	/**
	 * Nombre del tipo de datos XBRL booleano
	 */
	public static string TIPO_DATO_BOOLEAN = "booleanItemType";
    /**
     * Nombre del tipo de dato XBRL SiNo
     */
    public static string TIPO_DATO_SI_NO = "SiNoItemType";
	/**
	 * Nombre del tipo de datos XBRL monetary
	 */
    public static string TIPO_DATO_MONETARY = "monetaryItemType";
	
	/**
	 * Nombre del tipo de datos XBRL decimal
	 */
	public static string TIPO_DATO_DECIMAL = "decimalItemType";
	
	/**
	 * Nombre del tipo de datos XBRL non negative integer
	 */
	public static string TIPO_DATO_ENTERO_NO_NEGATIVO = "nonNegativeIntegerItemType";

    /**
     * Nombre del tipo de datos XBRL percent
     */
    public static string TIPO_DATO_PORCENTAJE = "percentItemType";

     /**
     * Nombre del tipo de datos XBRL per share
     */
    public static string TIPO_DATO_PER_SHARE = "perShareItemType";
	/**
	 * Indicadores de valor verdadero
	 */
	public static string[] VALORES_BOOLEAN_SI = new string[]{"true","2","si"};
	/**
	 * Valores booleanos 
	 */
	public static string VALOR_SI = "Si";
	public static string VALOR_NO = "No";

    /// <summary>
    /// Expresion regular para identificar saltos de sección en una expresión HTML generada a partir de Word.
    /// </summary>
    private static Regex REGEXP_ETIQUETAS_HTML = new Regex("\\<.*?\\>",RegexOptions.Compiled | RegexOptions.Multiline);
        /// <summary>
    /// Expresion regular para identificar saltos de sección en una expresión HTML generada a partir de Word.
    /// </summary>
    private static Regex REGEXP_SALTO_LINEA = new Regex("(\n\r)|(\n)",RegexOptions.Compiled | RegexOptions.Multiline);
	
	public static String obtenerIdPrefijoDeTaxonomia(DocumentoInstanciaXbrlDto instancia){
		if(instancia != null && instancia.DtsDocumentoInstancia != null &&
				instancia.DtsDocumentoInstancia.Count() > 0){
			DtsDocumentoInstanciaDto dts = instancia.DtsDocumentoInstancia[0];
			
			if (dts.HRef != null) {
				if(dts.HRef.Contains(ReportConstants.CCD_ENTRY_POINT)) {
					return ReportConstants.PREFIJO_ID_CCD;
				} else if(dts.HRef.Contains(ReportConstants.DEUDA_ENTRY_POINT)) {
					return ReportConstants.PREFIJO_ID_DEUDA;
				} else if(dts.HRef.Contains(ReportConstants.TRAC_ENTRY_POINT)) {
					return ReportConstants.PREFIJO_ID_TRAC;
                } else if (dts.HRef.Contains(ReportConstants.IIFC_ENTRY_POINT)) {
                    return ReportConstants.PREFIJO_ID_IIFC;
                } else if (dts.HRef.Contains(ReportConstants.ANNEXT_ENTRY_POINT)) {
                    return ReportConstants.PREFIJO_ANNEXT;
                } else if ( dts.HRef.Contains(ReportConstants.N_ENTRY_POINT)        || dts.HRef.Contains(ReportConstants.NBIS_ENTRY_POINT) ||
                            dts.HRef.Contains(ReportConstants.NBIS1_ENTRY_POINT)    || dts.HRef.Contains(ReportConstants.NBIS2_ENTRY_POINT) ||
                            dts.HRef.Contains(ReportConstants.NBIS3_ENTRY_POINT)    || dts.HRef.Contains(ReportConstants.NBIS4_ENTRY_POINT) ||
                            dts.HRef.Contains(ReportConstants.NBIS5_ENTRY_POINT)    || dts.HRef.Contains(ReportConstants.O_ENTRY_POINT) ||
                            dts.HRef.Contains(ReportConstants.H_ENTRY_POINT)        || dts.HRef.Contains(ReportConstants.HBIS_ENTRY_POINT) ||
                            dts.HRef.Contains(ReportConstants.HBIS1_ENTRY_POINT)    || dts.HRef.Contains(ReportConstants.HBIS2_ENTRY_POINT) ||
                            dts.HRef.Contains(ReportConstants.HBIS3_ENTRY_POINT)    || dts.HRef.Contains(ReportConstants.HBIS4_ENTRY_POINT) ||
                            dts.HRef.Contains(ReportConstants.HBIS5_ENTRY_POINT)    || dts.HRef.Contains(ReportConstants.L_ENTRY_POINT) ||
                            dts.HRef.Contains(ReportConstants.I_ENTRY_POINT)) {
                    return ReportConstants.PREFIJO_AR_PROS;
                }
                else if (dts.HRef.Contains(ReportConstants.IIFC_ENTRY_POINT))
                {
                    return ReportConstants.PREFIJO_ID_IIFC;
                }
                else if (dts.HRef.Contains(ReportConstants.REL_EV_EMISORAS))
                {
                    return ReportConstants.PREFIJO_REL_EV_EMISORAS;
                }
			}
		}
		return null;
	}
	
	public static String obtenerNombreCortoTaxonomia(DocumentoInstanciaXbrlDto instancia){		
		if(instancia != null && instancia.DtsDocumentoInstancia != null &&
				instancia.DtsDocumentoInstancia.Count() > 0){
			DtsDocumentoInstanciaDto dts = instancia.DtsDocumentoInstancia[0];
			
			if (dts.HRef != null) {
				if (dts.HRef.Contains(ReportConstants.CP_ENTRY_POINT)) {
					return ReportConstants.CLAVE_CP;
				} else if (dts.HRef.Contains(ReportConstants.ICS_ENTRY_POINT)) {
					return ReportConstants.CLAVE_ICS;
				} else if (dts.HRef.Contains(ReportConstants.FIBRAS_ENTRY_POINT)) {
					return ReportConstants.CLAVE_FIBRAS;
				} else if (dts.HRef.Contains(ReportConstants.SAPIB_ENTRY_POINT)) {
					return ReportConstants.CLAVE_SAPIB;
				} else if (dts.HRef.Contains(ReportConstants.CCD_ENTRY_POINT)) {
					return ReportConstants.CLAVE_CCD;
				} else if (dts.HRef.Contains(ReportConstants.DEUDA_ENTRY_POINT)) {
					return ReportConstants.CLAVE_DEUDA;
				} else if (dts.HRef.Contains(ReportConstants.TRAC_ENTRY_POINT)) {
					return ReportConstants.CLAVE_TRAC;
                } else if (dts.HRef.Contains(ReportConstants.IIFC_ENTRY_POINT)) {
                    return ReportConstants.CLAVE_IIFC;
                } else if (dts.HRef.Contains(ReportConstants.ANNEXT_ENTRY_POINT)) {
                    return ReportConstants.CLAVE_ANNEXT;
                } else if (dts.HRef.Contains(ReportConstants.N_ENTRY_POINT)) {
	                return ReportConstants.CLAVE_N;
                } else if (dts.HRef.Contains(ReportConstants.NBIS_ENTRY_POINT)) {
	                return ReportConstants.CLAVE_NBIS;
                } else if (dts.HRef.Contains(ReportConstants.NBIS1_ENTRY_POINT)) {
	                return ReportConstants.CLAVE_NBIS1;
                } else if (dts.HRef.Contains(ReportConstants.NBIS2_ENTRY_POINT)) {
	                return ReportConstants.CLAVE_NBIS2;
                } else if (dts.HRef.Contains(ReportConstants.NBIS3_ENTRY_POINT)) {
	                return ReportConstants.CLAVE_NBIS3;
                } else if (dts.HRef.Contains(ReportConstants.NBIS4_ENTRY_POINT)) {
	                return ReportConstants.CLAVE_NBIS4;
                } else if (dts.HRef.Contains(ReportConstants.NBIS5_ENTRY_POINT)) {
	                return ReportConstants.CLAVE_NBIS5;
                } else if (dts.HRef.Contains(ReportConstants.O_ENTRY_POINT)) {
	                return ReportConstants.CLAVE_O;
                } else if (dts.HRef.Contains(ReportConstants.H_ENTRY_POINT)) {
	                return ReportConstants.CLAVE_H;
                } else if (dts.HRef.Contains(ReportConstants.HBIS_ENTRY_POINT)) {
	                return ReportConstants.CLAVE_HBIS;
                } else if (dts.HRef.Contains(ReportConstants.HBIS1_ENTRY_POINT)) {
	                return ReportConstants.CLAVE_HBIS1;
                } else if (dts.HRef.Contains(ReportConstants.HBIS2_ENTRY_POINT)) {
	                return ReportConstants.CLAVE_HBIS2;
                } else if (dts.HRef.Contains(ReportConstants.HBIS3_ENTRY_POINT)) {
	                return ReportConstants.CLAVE_HBIS3;
                } else if (dts.HRef.Contains(ReportConstants.HBIS4_ENTRY_POINT)) {
	                return ReportConstants.CLAVE_HBIS4;
                } else if (dts.HRef.Contains(ReportConstants.HBIS5_ENTRY_POINT)) {
	                return ReportConstants.CLAVE_HBIS5;
                } else if (dts.HRef.Contains(ReportConstants.L_ENTRY_POINT)) {
	                return ReportConstants.CLAVE_L;
                } else if (dts.HRef.Contains(ReportConstants.I_ENTRY_POINT)) {
	                return ReportConstants.CLAVE_I;
                } else if (dts.HRef.Contains(ReportConstants.REL_EV_EMISORAS)) {
                    return ReportConstants.CLAVE_REL_EV_EMISORAS;
                } else if (dts.HRef.Contains(ReportConstants.REL_EV_FONDOS)) {
                    return ReportConstants.CLAVE_REL_EV_FONDOS;
                } else if (dts.HRef.Contains(ReportConstants.REL_EV_REP_COMMON)) {
                    return ReportConstants.CLAVE_REL_EV_REP_COMMON;
                } else if (dts.HRef.Contains(ReportConstants.REL_EV_INV_FOUNDS))
                {
                    return ReportConstants.CLAVE_REL_EV_INV_FOUNDS;
                } else if (dts.HRef.Contains(ReportConstants.REL_EV_ISSUER))
                {
                    return ReportConstants.CLAVE_REL_EV_ISSUER;
                } else if (dts.HRef.Contains(ReportConstants.REL_EV_RATING_AG))
                {
                    return ReportConstants.CLAVE_REL_EV_RATING_AG;
                } else if (dts.HRef.Contains(ReportConstants.REL_EV_TRUST_ISSUER))
                {
                    return ReportConstants.CLAVE_REL_EV_TRUST_ISSUER;
                }
            }
		}
		return null;
	}

    public static String obtenerPrefijoDeRaProspecto(DocumentoInstanciaXbrlDto instancia){
		if(instancia != null && instancia.DtsDocumentoInstancia != null &&
				instancia.DtsDocumentoInstancia.Count() > 0){
			DtsDocumentoInstanciaDto dts = instancia.DtsDocumentoInstancia[0];
			
			if (dts.HRef != null) {
                if (dts.HRef.Contains(ReportConstants.N_ENTRY_POINT)        || dts.HRef.Contains(ReportConstants.NBIS_ENTRY_POINT) ||
                    dts.HRef.Contains(ReportConstants.NBIS1_ENTRY_POINT)    || dts.HRef.Contains(ReportConstants.NBIS2_ENTRY_POINT) ||
                    dts.HRef.Contains(ReportConstants.NBIS3_ENTRY_POINT)    || dts.HRef.Contains(ReportConstants.NBIS4_ENTRY_POINT) ||
                    dts.HRef.Contains(ReportConstants.NBIS5_ENTRY_POINT)    || dts.HRef.Contains(ReportConstants.O_ENTRY_POINT))
                {
                    return ReportConstants.PREFIJO_AR;
                }
                else if (dts.HRef.Contains(ReportConstants.H_ENTRY_POINT)   || dts.HRef.Contains(ReportConstants.HBIS_ENTRY_POINT) ||
                    dts.HRef.Contains(ReportConstants.HBIS1_ENTRY_POINT)    || dts.HRef.Contains(ReportConstants.HBIS2_ENTRY_POINT) ||
                    dts.HRef.Contains(ReportConstants.HBIS3_ENTRY_POINT)    || dts.HRef.Contains(ReportConstants.HBIS4_ENTRY_POINT) ||
                    dts.HRef.Contains(ReportConstants.HBIS5_ENTRY_POINT)    || dts.HRef.Contains(ReportConstants.L_ENTRY_POINT) ||
                    dts.HRef.Contains(ReportConstants.I_ENTRY_POINT))
                {
                    return ReportConstants.PREFIJO_PROS;
                }
                else if (dts.HRef.Contains(ReportConstants.REL_EV_EMISORAS))
                {
                    return ReportConstants.CLAVE_REL_EV_EMISORAS;
                }
                else if (dts.HRef.Contains(ReportConstants.REL_EV_FONDOS))
                {
                    return ReportConstants.CLAVE_REL_EV_FONDOS;
                }
			}
		}
		return null;
	}

	
	/**
	 * Obtiene el valor de la cadena de acuero al id de concepto.
	 * 
	 * @param idConcepto identificador del concepto a buscar.
	 * @param instancia documento de instancia donde buscar el valor.
	 * @return Cadena de contiene el valor del concepto, de no encontrarse se regresa null.
	 */
	public static String obtenerValorHecho(String idConcepto, DocumentoInstanciaXbrlDto instancia) {
		String valorHecho = null;
        if (instancia.HechosPorIdConcepto.ContainsKey(idConcepto))
        {
            IList<String> idHechos = instancia.HechosPorIdConcepto[idConcepto];
            if (idHechos != null && idHechos.Count() > 0)
            {
                HechoDto hecho = instancia.HechosPorId[idHechos[0]];
                if (hecho != null)
                {
                    valorHecho = hecho.Valor;
                }
            }
        }
		
		
		return valorHecho;
	}
    /**
     * Obtiene el valor de la cadena de acuero al id de concepto, si el valor resultante es nulo, entonces se devuelve el valor default.
     * 
     * @param idConcepto identificador del concepto a buscar.
     * @param instancia documento de instancia donde buscar el valor.
     * @param defaultValue valor para retornar si el resultado es nulo
     * @return Cadena de contiene el valor del concepto, de no encontrarse se regresa el valor por default enviado como parámetro.
     */
    public static String obtenerValorHechoDefault(String idConcepto, DocumentoInstanciaXbrlDto instancia,String defaultValue)
    {
        String valorHecho = obtenerValorHecho(idConcepto, instancia);
        return valorHecho!=null?valorHecho:defaultValue;
    }
	
	public static String obtenerEtiquetaConcepto(String lenguaje, String etiqueta, String idConcepto, DocumentoInstanciaXbrlDto instancia) {
		String valorConcepto = "";
		
		lenguaje = (lenguaje == null || String.IsNullOrEmpty(lenguaje)? ReporteXBRLUtil.IDIOMA_DEFAULT : lenguaje);
		etiqueta = (etiqueta == null || String.IsNullOrEmpty(etiqueta) ? ReporteXBRLUtil.ETIQUETA_DEFAULT : etiqueta);

        if (!instancia.Taxonomia.ConceptosPorId.ContainsKey(idConcepto))
        {
            return idConcepto;
        }

		ConceptoDto concepto = instancia.Taxonomia.ConceptosPorId[idConcepto];

        //log.info(conceptoReporte.getIdConcepto());
        if (concepto != null)
        {
            IDictionary<String, EtiquetaDto> etiquetas = null;
            if (!concepto.Etiquetas.TryGetValue(lenguaje, out etiquetas))
            {
                etiquetas = concepto.Etiquetas.Values.FirstOrDefault();
            }
            EtiquetaDto etiquetaDto;
            if (etiquetas != null && etiquetas.TryGetValue(etiqueta, out etiquetaDto))
            {
                    valorConcepto = etiquetaDto.Valor;
			}
		}
		
		return valorConcepto;
	}
	
	public static String formatoMoneda(Decimal valor) {
        return valor.ToString("C" ,CultureInfo.CreateSpecificCulture("es-MX"));
	}
	
	public static String formatoDecimal(Decimal valor, String formato) {
        //return valor.ToString("0,0",CultureInfo.CreateSpecificCulture("es-MX"));
        //return valor == 0 ? "0" : valor.ToString("0,0", CultureInfo.InvariantCulture);
        return valor == 0 ? "0" : valor.ToString(formato, CultureInfo.InvariantCulture);
	}
	
	public static String eliminaEtiquetas(String valor) {
		String decoded =  HttpUtility.HtmlDecode(valor);
        decoded = REGEXP_ETIQUETAS_HTML.Replace(decoded,String.Empty);
        decoded = REGEXP_SALTO_LINEA.Replace(decoded,String.Empty);
		return decoded;
	}
	
	public static String generarNombreArchivo(DocumentoInstanciaXbrlDto instancia) {
		String prefijoTaxonomia = obtenerIdPrefijoDeTaxonomia(instancia);
		String taxonomia = obtenerNombreCortoTaxonomia(instancia);
		String nombreReporte = null;
		
		String claveCotizacion = null;
		String fechaReporte = null;
		String anio = null;
		String trimestre = null;
		String moneda = null;
		Boolean consolidado = false;
		String fechaCreacion = null;
		String fideicomiso = null;
		
		fechaReporte = ReporteXBRLUtil.obtenerValorHecho(ReportConstants.ID_FECHA_CIERRE_REPORTE_2014, instancia);
		anio = fechaReporte.Substring(0, fechaReporte.IndexOf("-"));
		moneda = obtenerValorMoneda(instancia);
		fechaCreacion = DateTime.Now.ToString(FORMATO_FECHA_CREACION);

        nombreReporte = NOMBRE_REPORTE_IFRS_FIDEICOMISO;
		
		if (prefijoTaxonomia == null) {
			claveCotizacion = ReporteXBRLUtil.obtenerValorHecho(ReportConstants.ID_CLAVE_COTIZACION_2014, instancia);
			trimestre = ReporteXBRLUtil.obtenerValorHecho(ReportConstants.ID_TRIMESTRE_REPORTADO, instancia);
			Boolean.TryParse(obtenerValorHecho(ReportConstants.ID_CUENTA_CONSOLIDADO, instancia),out consolidado);
			
		} else {			
			claveCotizacion = ReporteXBRLUtil.obtenerValorHecho(prefijoTaxonomia + ReportConstants.NOMBRE_CONCEPTO_EMISORA, instancia);
			trimestre = ReporteXBRLUtil.obtenerValorHecho(prefijoTaxonomia + ReportConstants.NOMBRE_CONCEPTO_NUMERO_TRIMESTRE, instancia);
			consolidado = false;
			fideicomiso = ReporteXBRLUtil.obtenerValorHecho(prefijoTaxonomia + ReportConstants.NOMBRE_CONCEPTO_NUMERO_FIDEICOMISO, instancia);

			if (taxonomia.Equals(ReportConstants.CLAVE_CCD)) {
				consolidado = ReporteXBRLUtil.obtenerValorHecho(ReportConstants.NOMBRE_CONCEPTO_CCD_CONSOLIDADO, instancia).Equals(ReportConstants.VALOR_SI) ? true : false;
			}
		}
		
		nombreReporte = nombreReporte.
				Replace(CLAVE_COTIZACION, claveCotizacion).
				Replace(ANIO, anio).
				Replace(TRIMESTRE, trimestre).
				Replace(MONEDA, moneda).
				Replace(CONSOLIDACION, (consolidado ? CONSOLIDADO : NO_CONSOLIDADO)).
				Replace(FECHA_CREACION, fechaCreacion);
		
		if (fideicomiso != null) {
			nombreReporte = nombreReporte.Replace(FIDEICOMISO, fideicomiso).Replace(FIDEICOMITENTE, "");
		}				
		
		return nombreReporte;
	}
	
	public static String obtenerValorMoneda(DocumentoInstanciaXbrlDto instancia) {
		
		String moneda = null;
		
		foreach(UnidadDto unidad in instancia.UnidadesPorId.Values) 
        {
			if(unidad != null && (unidad.Tipo == UnidadDto.Medida || unidad.Tipo == UnidadDto.Divisoria)) 
            {
				if(unidad.Medidas != null && unidad.Medidas.Count() > 0)
                {
					foreach (MedidaDto medida in unidad.Medidas) {
						if(medida != null && medida.EspacioNombres.Equals(CODIGO_ISO_4217, StringComparison.InvariantCultureIgnoreCase)) 
                        {
							if (medida.Nombre != null && (medida.Nombre.Equals(CODIGO_ISO_PESO_MEXICANO, StringComparison.InvariantCultureIgnoreCase) || medida.Nombre.Equals(CODIGO_ISO_USD, StringComparison.InvariantCultureIgnoreCase))) 
                            {
								moneda = medida.Nombre;
								goto iIteracionBusquedaMoneda;
							}
						}
					}
				}
			}
		}
		
        iIteracionBusquedaMoneda:

		return moneda;
	}

    /// <summary>
    /// Evalúa si el concepto contiene un Atributo extra llamado "ar_pros:index" y cuyo valor
    /// sea "true"
    /// </summary>
    /// <param name="concepto">Concepto a evaluar</param>
    /// <returns>True si el concepto es parte del índice, false en otro caso</returns>
    public static Boolean EsConceptoParteDeIndice(ConceptoDto concepto)
    {
        var resultado = false;
        if (concepto != null && concepto.AtributosAdicionales != null)
        {
            foreach (var llave in concepto.AtributosAdicionales.Keys)
            {
                if (llave.Contains("index"))
                {
                    if (concepto.AtributosAdicionales[llave] != null && concepto.AtributosAdicionales[llave].Contains("true"))
                    {
                        resultado = true;
                        break;
                    }
                }
            }
        }
        return resultado;
    }
        /// <summary>
        /// Elimina los hechos de los conceptos indicados del documento de instancia.
        /// </summary>
        /// <param name="listaIdsConceptos">Lista con los identificadores de conceptos.</param>
        /// <param name="instancia">Documento de instancia de donde se eliminarán los hechos.</param>
        public static void EliminarHechosConceptos(IList<String> listaIdsConceptos, DocumentoInstanciaXbrlDto instancia)
        {
            foreach (var idConcepto in listaIdsConceptos)
            {
                try
                {
                    ConceptoDto concepto;
                    if (instancia.Taxonomia.ConceptosPorId.TryGetValue(idConcepto, out concepto))
                    {

                        if (!(concepto.EsAbstracto??false) && !concepto.EsHipercubo && !(concepto.EsMiembroDimension??false))
                        {
                            EliminarHechosConcepto(concepto, instancia);
                        }
                    }
                }
                catch (Exception ex)
                {
                    LogUtil.Error(ex);
                }
            }
        }

        /// <summary>
        /// Elimina todos los hechos del concepto indicado.
        /// </summary>
        /// <param name="concepto">Concepto a evaluar.</param>
        /// <param name="instancia">Documento de instancia.</param>
        public static void EliminarHechosConcepto(ConceptoDto concepto, DocumentoInstanciaXbrlDto instancia)
        {
            IList<String> listaIdsHechosConcepto;
            IList<String> listaIdsContextos = new List<String>();
            if (instancia.HechosPorIdConcepto.TryGetValue(concepto.Id, out listaIdsHechosConcepto))
            {
                HechoDto hechoConcepto;
                for (var indexIdHecho = 0; indexIdHecho < listaIdsHechosConcepto.Count; indexIdHecho++)
                {
                    var idHecho = listaIdsHechosConcepto[indexIdHecho];
                    if (instancia.HechosPorId.TryGetValue(idHecho, out hechoConcepto))
                    {
                        var idContexto = hechoConcepto.IdContexto;
                        var idUnidad = hechoConcepto.IdUnidad;
                        listaIdsContextos.Add(idContexto);
                        IList<String> hechosPorUnidad;
                        if (!String.IsNullOrEmpty(idUnidad) && instancia.HechosPorIdUnidad.TryGetValue(idUnidad, out hechosPorUnidad))
                        {
                            hechosPorUnidad.Remove(idHecho);
                        }
                    }
                    instancia.HechosPorId.Remove(idHecho);
                }
            }
            instancia.HechosPorIdConcepto[concepto.Id] = new List<String>();
            for (var indexIdContexto = 0; indexIdContexto < listaIdsContextos.Count; indexIdContexto++)
            {
                var idContexto = listaIdsContextos[indexIdContexto];
                IList<String> listaIdsHechosContexto;
                IList<String> hechosContextoEliminado = new List<String>();
                if (instancia.HechosPorIdContexto.TryGetValue(idContexto, out listaIdsHechosContexto))
                {
                    for (var indexIdHecho = 0; indexIdHecho < listaIdsHechosContexto.Count; indexIdHecho++)
                    {
                        var idHecho = listaIdsHechosContexto[indexIdHecho];
                        instancia.HechosPorId.Remove(idHecho);
                        hechosContextoEliminado.Add(idHecho);
                    }
                    ContextoDto contexto;
                    if (instancia.ContextosPorId.TryGetValue(idContexto, out contexto))
                    {
                        var claveFecha = GeneraLlaveFechasContexto(contexto);
                        IList<String> listaContextosPorFecha;
                        if (instancia.ContextosPorFecha.TryGetValue(claveFecha, out listaContextosPorFecha))
                        {
                            listaContextosPorFecha.Remove(idContexto);
                        }
                        IList<String> listaIdsContextosEquivalentes;
                        if (instancia.GruposContextosEquivalentes.TryGetValue(idContexto, out listaIdsContextosEquivalentes))
                        {
                            foreach (var idContextoEquivalente in listaIdsContextosEquivalentes)
                            {
                                if (idContexto.Equals(idContextoEquivalente))
                                {
                                    continue;
                                }
                                IList<String> listaSubContextosEquievalentes;
                                if (instancia.GruposContextosEquivalentes.TryGetValue(idContextoEquivalente, out listaSubContextosEquievalentes))
                                {
                                    listaSubContextosEquievalentes.Remove(idContexto);
                                }
                                IList<String> listaIdsHechosContextoEquivalente;
                                if (instancia.HechosPorIdContexto.TryGetValue(idContextoEquivalente, out listaIdsHechosContextoEquivalente))
                                {
                                    foreach (var idHechoEliminado in hechosContextoEliminado)
                                    {
                                        listaIdsHechosContextoEquivalente.Remove(idHechoEliminado);
                                    }
                                }

                            }
                        }
                        instancia.GruposContextosEquivalentes.Remove(idContexto);
                    }
                    instancia.ContextosPorId.Remove(idContexto);
                }
                instancia.HechosPorIdContexto.Remove(idContexto);
            }
        }

        /// <summary>
        /// Crea una llave de fechas para el contexto dado.
        /// </summary>
        /// <param name="contexto">Contexto a evaluar.</param>
        /// <returns>Llave generada en base al periodo.</returns>
        public static String GeneraLlaveFechasContexto(ContextoDto contexto)
        {
            string llaveFechas = null;
            if (contexto.Periodo.Tipo == PeriodoDto.Instante)
            {
                llaveFechas = Common.Util.DateUtil.ToFormatString(contexto.Periodo.FechaInstante.ToUniversalTime(), Common.Util.DateUtil.YMDateFormat);
            }
            else
            {
                llaveFechas = Common.Util.DateUtil.ToFormatString(contexto.Periodo.FechaInicio.ToUniversalTime(), Common.Util.DateUtil.YMDateFormat) +
                    ConstantesGenerales.Underscore_String
                    + Common.Util.DateUtil.ToFormatString(contexto.Periodo.FechaFin.ToUniversalTime(), Common.Util.DateUtil.YMDateFormat);
            }
            return llaveFechas;
        }
	
    //public static String obtenerTiempos(StopWatch w) {
    //    StringBuffer buf = new StringBuffer();
		
    //    buf.append(w.getTime()).append("ms");
		
    //    if (w.getTime() >= 1000)
    //        buf.append(", ").append((double)w.getTime() / 1000).append("s");
		
    //    if (w.getTime() >= 60000)
    //        buf.append(", ").append(((double)w.getTime() / 1000) / 60).append("min");
		
    //    return buf.toString();
    //}
    }
}
