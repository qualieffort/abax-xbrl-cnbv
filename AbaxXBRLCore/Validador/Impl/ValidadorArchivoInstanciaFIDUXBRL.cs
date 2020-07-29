using AbaxXBRL.Constantes;
using AbaxXBRL.Util;
using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.Repository;
using AbaxXBRLCore.Viewer.Application.Dto;
using com.sun.org.apache.xerces.@internal.jaxp;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Validador.Impl
{
    /// <summary>
    /// Implementación de un validador de reglas de negocio para un documento de instancia XBRL 
    /// que pertenece a las taxonomías de Fideicomisos BMV 2015
    /// </summary>
    public class ValidadorArchivoInstanciaFIDUXBRL : ValidadorArchivoInstanciaXBRLBase
    {
        /// <summary>
        /// Nombre del parámetro de la clave de pizarra del fideicomitente a validar
        /// </summary>
        private const String CVE_FIDEICOMITENTE = "cveFideicomitente";
        /// <summary>
        /// Nombre del parámetro de fecha de cierre del trimestre enviado
        /// </summary>
        private const String FECHA_TRIMESTRE = "fechaTrimestre";
        /// <summary>
        /// Ticker corresponde al identificador de la emisora
        /// </summary>
        public const String NOMBRE_CONCEPTO_FIDEICOMITENTE = "Ticker";
        /// <summary>
        /// Nombre de concepto para el número de trimestre
        /// </summary>
        public const String NOMBRE_CONCEPTO_NUMERO_TRIMESTRE = "NumberOfQuarter";
        /// <summary>
        /// Nombre del concepto de número de fideicomiso
        /// </summary>
        public const String NOMBRE_CONCEPTO_NUMERO_FIDEICOMISO = "TrustNumber";
        /// <summary>
        /// ID del concepto donde se coloca la fecha de cierre del reporte
        /// </summary>
        private const String ID_FECHA_CIERRE_REPORTE_2014 = "ifrs-full_DateOfEndOfReportingPeriod2013";
        /// <summary>
        /// ID del concepto de capital contable y pasivos
        /// </summary>
        private const String ID_EQUITY_AND_LIABILITES = "ifrs-full_EquityAndLiabilities";
        /// <summary>
        /// ID del concepto de útilidad o perdida neta
        /// </summary>
        private const String ID_UTILIDAD_PERDIDA_NETA = "ifrs-full_ProfitLoss";
        /// <summary>
        /// ID del concepto de resulado integral
        /// </summary>
        private const String ID_RESULTADO_INTEGRAL = "ifrs-full_ComprehensiveIncome";
        /// <summary>
        /// ID del concepto de cambios en el capital contable
        /// </summary>
        private const String ID_CAMBIOS_EN_EL_CAPITAL_CONTABLE = "ifrs-full_ChangesInEquity";
        /// <summary>
        /// ID del concepto de capital contable
        /// </summary>
        private const String ID_CAPITAL_CONTABLE = "ifrs-full_Equity";
        /// <summary>
        /// ID de la dimensión de componentes del capital contable
        /// </summary>
        private const String ID_COMPONENTES_DEL_CAPITAL = "ifrs-full_ComponentsOfEquityAxis";
        /// <summary>
        /// ID de concepto de Incremento (disminución) en el efectivo y equivalentes de efectivo, antes del efecto de los cambios en la tasa de cambio
        /// </summary>
        public const String ID_CONCEPTO_INCREMENTO_DISMINUCION_EFECTIVO_ANTES_DE_CAMBIO_EN_TASA = "ifrs-full_IncreaseDecreaseInCashAndCashEquivalentsBeforeEffectOfExchangeRateChanges";
        /// <summary>
        /// Cadenas que contienen los puntos de entrada de cada taxonomía de fideicomisos
        /// </summary>
        public const String CCD_ENTRY_POINT = "_ccd_";
        public const String DEUDA_ENTRY_POINT = "_deuda_";
        public const String TRAC_ENTRY_POINT = "_trac_";
        /// <summary>
        /// Valor de un cuarto trimestre dictaminado
        /// </summary>
        public const String CUARTO_TRIMESTRE_DICTAMINADO = "4D";
        /// <summary>
        /// Prefijo para los identificadores de cuentas MX para taxonomías de fideicomisos
        /// </summary>
        public const String PREFIJO_ID_CCD = "mx_ccd_";
        public const String PREFIJO_ID_DEUDA = "mx_deuda_";
        public const String PREFIJO_ID_TRAC = "mx_trac_";
        /// <summary>
        /// Nombre corto de las taxonomías de fideicomisos
        /// </summary>
        public const String CLAVE_CCD = "ccd";
        public const String CLAVE_DEUDA = "deuda";
        public const String CLAVE_TRAC = "trac";

        /// <summary>
        /// Miembros del capital contable de CCD
        /// </summary>
        private static String[] ID_MIEMBROS_ECC_CCD = new String[]{
		
		"ifrs-full_EquityAttributableToOwnersOfParentMember",
		"ifrs-full_IssuedCapitalMember",
		"ifrs-full_RetainedEarningsMember",
		"ifrs-full_OtherReservesMember",
		"mx_ccd_OtherComprehensiveIncomeMember",
		"ifrs-full_NoncontrollingInterestsMember"
	    };
        /// <summary>
        /// Miembros del capital contable de DEUDA
        /// </summary>
        private static String[] ID_MIEMBROS_ECC_DEUDA = new String[]{
		
		"ifrs-full_EquityAttributableToOwnersOfParentMember",
		"ifrs-full_IssuedCapitalMember",
		"ifrs-full_RetainedEarningsMember",
		"ifrs-full_OtherReservesMember",
		"mx_deuda_OtherComprehensiveIncomeMember"
	    };
        /// <summary>
        ///  Miembros del capital contable de TRAC
        /// </summary>
        private static String[] ID_MIEMBROS_ECC_TRAC = new String[]{
		
		"ifrs-full_EquityAttributableToOwnersOfParentMember",
		"ifrs-full_IssuedCapitalMember",
	    };
        /// <summary>
        /// Mapa con la relación de las taxonomías de fideicomisos y el ID prefijo de cuentas
        /// </summary>
        public static IDictionary<string, string> PREFIJOS_TAXONOMIAS = null;
        /// <summary>
        /// Mapa con la relación entre las taxonomías de fideicomisos y los miembros de su capital
        /// contable
        /// </summary>
        private static IDictionary<string, string[]> MIEMBROS_CAPITAL = null;
        /// <summary>
        /// Mapa con la relación entre las taxonomías de fideicomisos y las claves de sus espacios de nombres
        /// </summary>
        private static IDictionary<String, String> CLAVE_TAXONOMIAS = null;
        /// <summary>
        /// Mensajes de error de las validaciones de negocio
        /// </summary>
        public static String M_ERROR_FID_RV011 = "El archivo XBRL proporcionado pertenece a la entidad con clave {0}. Sólo puede enviar información de la entidad que usted representa";
        public static String M_ERROR_FID_RV012 = "La fecha del reporte contenida en el archivo XBRL no corresponde al periodo reportado seleccionado";
        public static String M_ERROR_FID_RV013 = "El documento de instancia XBRL no contiene información obligatoria del contexto {0}";
        public static String M_ERROR_FID_RV014 = "Se debe reportar información monetaria únicamente en las monedas definidas MXN o USD y no utilizar más de una moneda en el documento de instancia.";
        public static String M_ERROR_FID_RV015 = "Los hechos te tipo Monetary cuyo valor sea diferente de '0' deberán indicar el atributo 'decimals' con un valor de '-3'";
        public static String M_ERROR_FID_RV016 = "Debe reportar los elementos de bloque de texto en el contexto correspondiente al acumulado del año actual ({0})";
        /// <summary>
        /// Roles cuyos conceptos se deben de reportar al acumulado
        /// </summary>
        public static String[] ROL_URI_CONCEPTOS_REPORTADOS_AL_ACUMULADO = new String[]{
		"http://bmv.com.mx/role/ifrs/{0}/2015/ias_1_2014-03-05_role-800500",
		"http://bmv.com.mx/role/ifrs/{0}/2015/ias_1_2014-03-05_role-800500",
		"http://bmv.com.mx/role/ifrs/{0}/2015/ias_34_2014-03-05_role-813000"		
	    };
        /// <summary>
        /// Valor de los decimales permitidos en los hechos monetarios
        /// </summary>
        private int DECIMALES_PERMITIDOS = -3;
        /// <summary>
        /// Inicializar el campo de prefijos de taxonomías
        /// </summary>
        static ValidadorArchivoInstanciaFIDUXBRL() {
            PREFIJOS_TAXONOMIAS = new Dictionary<String, String>();
            PREFIJOS_TAXONOMIAS.Add("http://emisnet.bmv.com.mx/taxonomy/mx-ifrs-fid-2015-06-30/ccd/full_ifrs_ccd_entry_point_2015-06-30.xsd", PREFIJO_ID_CCD);
            PREFIJOS_TAXONOMIAS.Add("http://emisnet.bmv.com.mx/taxonomy/mx-ifrs-fid-2015-06-30/deuda/full_ifrs_deuda_entry_point_2015-06-30.xsd", PREFIJO_ID_DEUDA);
            PREFIJOS_TAXONOMIAS.Add("http://emisnet.bmv.com.mx/taxonomy/mx-ifrs-fid-2015-06-30/trac/full_ifrs_trac_entry_point_2015-06-30.xsd", PREFIJO_ID_TRAC);
            PREFIJOS_TAXONOMIAS.Add("https://taxonomiasxbrl.cnbv.gob.mx/taxonomy/mx-ifrs-fid-2018-08-20/ccd/full_ifrs_ccd_entry_point_2016-08-22.xsd", PREFIJO_ID_CCD);
            MIEMBROS_CAPITAL = new Dictionary<string, string[]>();
            MIEMBROS_CAPITAL.Add("http://emisnet.bmv.com.mx/taxonomy/mx-ifrs-fid-2015-06-30/ccd/full_ifrs_ccd_entry_point_2015-06-30.xsd",ID_MIEMBROS_ECC_CCD);
            MIEMBROS_CAPITAL.Add("http://emisnet.bmv.com.mx/taxonomy/mx-ifrs-fid-2015-06-30/deuda/full_ifrs_deuda_entry_point_2015-06-30.xsd",ID_MIEMBROS_ECC_DEUDA);
            MIEMBROS_CAPITAL.Add("http://emisnet.bmv.com.mx/taxonomy/mx-ifrs-fid-2015-06-30/trac/full_ifrs_trac_entry_point_2015-06-30.xsd", ID_MIEMBROS_ECC_TRAC);
            MIEMBROS_CAPITAL.Add("https://taxonomiasxbrl.cnbv.gob.mx/taxonomy/mx-ifrs-fid-2018-08-20/ccd/full_ifrs_ccd_entry_point_2016-08-22.xsd", ID_MIEMBROS_ECC_CCD);
            CLAVE_TAXONOMIAS = new Dictionary<String, String>();
            CLAVE_TAXONOMIAS.Add("http://emisnet.bmv.com.mx/taxonomy/mx-ifrs-fid-2015-06-30/ccd/full_ifrs_ccd_entry_point_2015-06-30.xsd",CLAVE_CCD);
            CLAVE_TAXONOMIAS.Add("http://emisnet.bmv.com.mx/taxonomy/mx-ifrs-fid-2015-06-30/deuda/full_ifrs_deuda_entry_point_2015-06-30.xsd",CLAVE_DEUDA);
            CLAVE_TAXONOMIAS.Add("http://emisnet.bmv.com.mx/taxonomy/mx-ifrs-fid-2015-06-30/trac/full_ifrs_trac_entry_point_2015-06-30.xsd", CLAVE_TRAC);
            CLAVE_TAXONOMIAS.Add("https://taxonomiasxbrl.cnbv.gob.mx/taxonomy/mx-ifrs-fid-2018-08-20/ccd/full_ifrs_ccd_entry_point_2016-08-22.xsd", CLAVE_CCD);

        }
        /// <summary>
        /// Lista de unidades monetarias permitidas en un documento de instancia
        /// </summary>
        private static String[] UNIDADES_PERMITIDAS = new String[] { "MXN", "USD" };

        /// <summary>
        /// Objeto de repository para el acceso a datos de empresas
        /// </summary>
        public IEmpresaRepository EmpresaRepository { get; set; }

        public override void ValidarArchivoInstanciaXBRL(DocumentoInstanciaXbrlDto instancia, IDictionary<string, string> parametros, ResultadoValidacionDocumentoXBRLDto resultadoValidacion)
        {
            LogUtil.Info("Validando reglas FIDECOMISOS 2015 para:" + instancia.NombreArchivo);
            string hrefTax = null;
            foreach(var dts in instancia.DtsDocumentoInstancia){
                if (dts.Tipo == DtsDocumentoInstanciaDto.SCHEMA_REF) {
                    hrefTax = dts.HRef;
                    break;
                }
            }
            if (hrefTax == null)
            {
                throw new Exception("Documento de instancia sin DTS de tipo HREF");
            }
            if (!PREFIJOS_TAXONOMIAS.ContainsKey(hrefTax)) {
                throw new Exception("Documento de instancia a validar no corresponde a ninguna taxonomía de Fideicomisos BMV 2015");
            }
            var prefijoIdConceptos = PREFIJOS_TAXONOMIAS[hrefTax];

            
            //La clave del fideicomitente reportada en el documento de instancia debe ser la misma clave del fide (clave de fideicomitente) enviada como parámetro
            String cvePizarra = parametros.ContainsKey(CVE_FIDEICOMITENTE) ? parametros[CVE_FIDEICOMITENTE] : null;
            if (cvePizarra == null)
            {
                AgregarError(resultadoValidacion, null, null, String.Format(MSG_ERROR_FALTA_PARAMETRO, CVE_FIDEICOMITENTE), true);
                LogUtil.Info("claveFideicomientente: " + cvePizarra);
                return;
            }

            //Buscar alias de la clave de pizarra
            var aliasClaveCotizacion = obtenerAliasEmpresa(cvePizarra);
            if (aliasClaveCotizacion != null)
            {
                cvePizarra = aliasClaveCotizacion;
                LogUtil.Info("alias: " + cvePizarra);
            }

            string claveCotizacionXBRL = ObtenerValorNoNumerico(prefijoIdConceptos + NOMBRE_CONCEPTO_FIDEICOMITENTE, instancia);
            if (claveCotizacionXBRL != null && !claveCotizacionXBRL.Equals(cvePizarra,StringComparison.InvariantCultureIgnoreCase))
            {
                LogUtil.Info("Error comparar {clavePizarra: [" + cvePizarra + "],claveCotizacionXBRL: [" + claveCotizacionXBRL + "]}");
                AgregarError(resultadoValidacion, null, null, String.Format(M_ERROR_FID_RV011, claveCotizacionXBRL), true);
                return;
            }
            //El dato dentro del archivo “Fecha de cierre del periodo sobre el que se informa”  debe de coincidir con la fecha del trimestre a reportar enviada como parámetro.
            String strFechaTrimestre = parametros.ContainsKey(FECHA_TRIMESTRE) ? parametros[FECHA_TRIMESTRE] : null;
            if (strFechaTrimestre == null)
            {
                AgregarError(resultadoValidacion, null, null, String.Format(MSG_ERROR_FALTA_PARAMETRO, FECHA_TRIMESTRE), true);
                return;
            }
            DateTime fechaTrimestreParam = DateTime.MinValue;
            if (!XmlUtil.ParsearUnionDateTime(strFechaTrimestre, out fechaTrimestreParam))
            {
                AgregarError(resultadoValidacion, null, null, String.Format(MSG_ERROR_FORMATO_PARAMETRO, FECHA_TRIMESTRE, strFechaTrimestre), true);
                return;
            }
            var fechaTrimestreXbrl = ObtenerValorFecha(ID_FECHA_CIERRE_REPORTE_2014, instancia);
            if (!fechaTrimestreXbrl.Equals(DateTime.MinValue))
            {
                if (!fechaTrimestreXbrl.Equals(fechaTrimestreParam))
                {
                    AgregarError(resultadoValidacion, null, null, M_ERROR_FID_RV012, true);
                    return;
                }
            }

            if (!ValidarPeriodosRequeridos(instancia, parametros, fechaTrimestreParam,hrefTax, resultadoValidacion))
            {
                return;
            }
            if (!ValidarMonedasDocumento(instancia, UNIDADES_PERMITIDAS))
            {
                AgregarError(resultadoValidacion, null, null, String.Format(M_ERROR_FID_RV014), true);
                return;
            }

            if (!ValidarDecimalesHechosMonetarios(instancia, DECIMALES_PERMITIDOS))
            {
                AgregarError(resultadoValidacion, null, null, String.Format(M_ERROR_FID_RV015), true);
                return;
            }
            if (!ValidarHechosReportadosAlAcumulado(instancia, hrefTax, fechaTrimestreParam, resultadoValidacion))
            {
                return;
            }
        }
        /// <summary>
        /// Verifica si la empresa correspondiente al nombre corto enviado tiene un alias de clave de cotización, 
        /// si tiene se retorna el alias, null en otro caso
        /// </summary>
        /// <param name="nombreCorto">Nombre corto de la empresa buscada</param>
        /// <returns>Alias de la empresa</returns>
        private String obtenerAliasEmpresa(string nombreCorto)
        {
            var empresaBuscada = EmpresaRepository.GetQueryable().Where(x => x.AliasClaveCotizacion == nombreCorto && x.Borrado == false ).FirstOrDefault();
            if (empresaBuscada != null)
            {
                return empresaBuscada.NombreCorto;
            }
            return null;
        }
        /// <summary>
        /// Aplica las reglas de validacion de periodos de acuerdo a lo requerido:
        /// Se valida que exista por lo menos la acumulada del ejercicio reportado
        /// para los formatos principales de la taxonomía
        /// </summary>
        /// <param name="instancia">Documento de instancia a validar</param>
        /// <param name="parametros">Parametros de validación</param>
        /// <param name="fechaTrimestreParam">Fecha de trimestre reportado</param>
        /// <param name="hrefTax">Dirección HREF de la taxonomía referenciada</param>
        /// <param name="resultadoValidacion">Objeto de resultado de validación</param>
        /// <returns>True si la validación es exitosa, false si falta algún dato requerido, si faltan datos requeridos se agregan los mensajes de error correspondientes</returns>
        private bool ValidarPeriodosRequeridos(DocumentoInstanciaXbrlDto instancia, IDictionary<string, string> parametros, DateTime fechaTrimestreParam, String hrefTax,ResultadoValidacionDocumentoXBRLDto resultadoValidacion)
        {
            DateTime fechaInicioEjercicio = new DateTime(fechaTrimestreParam.Year, 1, 1);
            DateTime fechaInicioTrimestre = new DateTime(fechaTrimestreParam.Ticks).AddDays(1).AddMonths(-3);
            //Estado de situación financiera: Existencia del cierre del trimestre
            if (!ExisteInformacionEnPeriodo(instancia, ID_EQUITY_AND_LIABILITES, fechaInicioEjercicio, fechaTrimestreParam, null))
            {
                AgregarError(resultadoValidacion, null, null, String.Format(M_ERROR_FID_RV013, DateUtil.ToStandarString(fechaTrimestreParam)), false);
                return false;
            }

            //Estado de resultados: 
            //Trimestral
            if (!ExisteInformacionEnPeriodo(instancia, ID_UTILIDAD_PERDIDA_NETA, fechaInicioTrimestre, fechaTrimestreParam, null))
            {
                AgregarError(resultadoValidacion, null, null, String.Format(M_ERROR_FID_RV013, DateUtil.ToStandarString(fechaInicioTrimestre) + " - " + DateUtil.ToStandarString(fechaTrimestreParam)), false);
                return false;
            }
            //Acumulado
            if (!ExisteInformacionEnPeriodo(instancia, ID_UTILIDAD_PERDIDA_NETA, fechaInicioEjercicio, fechaTrimestreParam, null))
            {
                AgregarError(resultadoValidacion, null, null, String.Format(M_ERROR_FID_RV013, DateUtil.ToStandarString(fechaInicioEjercicio) + " - " + DateUtil.ToStandarString(fechaTrimestreParam)), false);
                return false;
            }

            //Estado de resultados ORI: 
            //Trimestral
            if (!ExisteInformacionEnPeriodo(instancia, ID_RESULTADO_INTEGRAL, fechaInicioTrimestre, fechaTrimestreParam, null))
            {
                AgregarError(resultadoValidacion, null, null, String.Format(M_ERROR_FID_RV013, DateUtil.ToStandarString(fechaInicioTrimestre) + " - " + DateUtil.ToStandarString(fechaTrimestreParam)), false);
                return false;
            }
            //Acumulado
            if (!ExisteInformacionEnPeriodo(instancia, ID_RESULTADO_INTEGRAL, fechaInicioEjercicio, fechaTrimestreParam, null))
            {
                AgregarError(resultadoValidacion, null, null, String.Format(M_ERROR_FID_RV013, DateUtil.ToStandarString(fechaInicioEjercicio) + " - " + DateUtil.ToStandarString(fechaTrimestreParam)), false);
                return false;
            }

            //Estado de flujos de efectivo
            if (!ExisteInformacionEnPeriodo(instancia, ID_CONCEPTO_INCREMENTO_DISMINUCION_EFECTIVO_ANTES_DE_CAMBIO_EN_TASA, fechaInicioEjercicio, fechaTrimestreParam, null))
            {
                AgregarError(resultadoValidacion, null, null, String.Format(M_ERROR_FID_RV013, DateUtil.ToStandarString(fechaInicioEjercicio) + " - " + DateUtil.ToStandarString(fechaTrimestreParam)), false);
                return false;
            }

            //Estado de cambios en el capital contable
            //Para cada miembro, empezando por la dim default
            
            /* Reactiva eventualmente esta validación
            if (!ExisteInformacionEnPeriodo(instancia, ID_CAMBIOS_EN_EL_CAPITAL_CONTABLE, fechaInicioEjercicio, fechaTrimestreParam, new List<DimensionInfoDto>()))
            {
                AgregarError(resultadoValidacion, null, null, String.Format(M_ERROR_FID_RV013, DateUtil.ToStandarString(fechaInicioEjercicio) + " - " + DateUtil.ToStandarString(fechaTrimestreParam)), false);
                return false;
            }
            if (!ExisteInformacionEnPeriodo(instancia, ID_CAPITAL_CONTABLE, fechaInicioEjercicio, fechaTrimestreParam, new List<DimensionInfoDto>()))
            {
                AgregarError(resultadoValidacion, null, null, String.Format(M_ERROR_FID_RV013, DateUtil.ToStandarString(fechaTrimestreParam)), false);
                return false;
            }
            */
            var listaDimCapital = new List<DimensionInfoDto>();
            var dimensionBuscada = new DimensionInfoDto()
            {
                IdDimension = ID_COMPONENTES_DEL_CAPITAL,
                Explicita = true
            };
            listaDimCapital.Add(dimensionBuscada);

            foreach (var idMiembroCapital in MIEMBROS_CAPITAL[hrefTax])
            {
                dimensionBuscada.IdItemMiembro = idMiembroCapital;
                if (!ExisteInformacionEnPeriodo(instancia, ID_CAMBIOS_EN_EL_CAPITAL_CONTABLE, fechaInicioEjercicio, fechaTrimestreParam, listaDimCapital))
                {
                    AgregarError(resultadoValidacion, null, null, String.Format(M_ERROR_FID_RV013, DateUtil.ToStandarString(fechaInicioEjercicio) + " - " + DateUtil.ToStandarString(fechaTrimestreParam)), false);
                    return false;
                }
                if (!ExisteInformacionEnPeriodo(instancia, ID_CAPITAL_CONTABLE, fechaInicioEjercicio, fechaTrimestreParam, listaDimCapital))
                {
                    AgregarError(resultadoValidacion, null, null, String.Format(M_ERROR_FID_RV013, DateUtil.ToStandarString(fechaTrimestreParam)), false);
                    return false;
                }
            }


            return true;
        }

        /// <summary>
        /// Valida que los hechos de los roles y conceptos que requieran reportarse al acumulado actual tengan las fechas deseadas
        /// </summary>
        /// <param name="instancia">Documento de instancia a validar</param>
        /// <param name="hrefTax">HRef de la taxonpmía del documento</param>
        /// <param name="fechaTrimestreParam">Fecha de trimestre que se reporta</param>
        /// <param name="resultadoValidacion">Objeto de resultado de la validación</param>
        /// <returns></returns>
        private bool ValidarHechosReportadosAlAcumulado(DocumentoInstanciaXbrlDto instancia,string hrefTax, DateTime fechaTrimestreParam, ResultadoValidacionDocumentoXBRLDto resultadoValidacion)
        {
            var claveTax = CLAVE_TAXONOMIAS[hrefTax];
            var listaConceptosAValidar = new List<string>();
            foreach (var rol in ROL_URI_CONCEPTOS_REPORTADOS_AL_ACUMULADO)
            {
                var listaConceptosRol = UtilAbax.ObtenerListaConceptosDeRolPresentacion(instancia.Taxonomia,String.Format(rol,claveTax));
                foreach (var concepto in listaConceptosRol)
                {
                    listaConceptosAValidar.Add(concepto.Id);
                }
            }
            DateTime fechaInicioEjercicio = new DateTime(fechaTrimestreParam.Year, 1, 1);
            foreach (var idConcepto in listaConceptosAValidar)
            {
                //Si se encuentran hechos, al menos uno debe estar reportado en el acumulado actual
                if (!ValidarAlMenosunHechoEnPeriodo(idConcepto, instancia, fechaInicioEjercicio, fechaTrimestreParam))
                {
                    AgregarError(resultadoValidacion, null, null, String.Format(M_ERROR_FID_RV016, idConcepto), true);
                    return false;
                }
            }
             
            return true;
        }
        
    }
}
