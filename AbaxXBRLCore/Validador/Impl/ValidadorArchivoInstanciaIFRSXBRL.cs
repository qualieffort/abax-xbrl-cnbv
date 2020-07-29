using AbaxXBRL.Constantes;
using AbaxXBRL.Util;
using AbaxXBRLCore.Common.Constants;
using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.Repository;
using AbaxXBRLCore.Viewer.Application.Dto;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Validador.Impl
{
    /// <summary>
    /// Implementación de un validador de reglas de negocio para un documento de instancia XBRL 
    /// correspondiente a la taxonomía IFRS BMV 2015
    /// </summary>
    public class ValidadorArchivoInstanciaIFRSXBRL: ValidadorArchivoInstanciaXBRLBase
    {
        /// <summary>
        /// Nombre del parámetro de la clave de pizarra a validar
        /// </summary>
        private const String CVE_PIZARRA = "cvePizarra";
        /// <summary>
        /// Nombre del parámetro de la clave de pizarra del fideicomitente a validar
        /// </summary>
        private const String CVE_FIDEICOMITENTE = "cveFideicomitente";

        /// <summary>
        /// Nombre del parámetro de fecha de cierre del trimestre enviado
        /// </summary>
        private const String FECHA_TRIMESTRE = "fechaTrimestre";
        /// <summary>
        /// ID del concepto de clave de cotización
        /// </summary>
        private const String ID_CLAVE_COTIZACION_2014 = "ifrs_mx-cor_20141205_ClaveDeCotizacionBloqueDeTexto";
        /// <summary>
        /// ID del concepto donde se coloca la fecha de cierre del reporte
        /// </summary>
        private const String ID_FECHA_CIERRE_REPORTE_2014 = "ifrs-full_DateOfEndOfReportingPeriod2013";
        /// <summary>
        /// ID del concepto de total de activos
        /// </summary>
	    private const String ID_ACTIVOS = "ifrs-full_Assets";
        /// <summary>
        /// ID del concepto de útilidad o perdida neta
        /// </summary>
        private const String ID_UTILIDAD_PERDIDA_NETA = "ifrs-full_ProfitLoss";

        /// <summary>
        /// ID del concepto de resulado integral
        /// </summary>
        private const String ID_RESULTADO_INTEGRAL = "ifrs-full_ComprehensiveIncome";
        /// <summary>
        /// ID del resultado integral de la part controladora
        /// </summary>
	    public const String ID_RESULTADO_INTEGRAL_CONTROLADORA = "ifrs-full_ComprehensiveIncomeAttributableToOwnersOfParent";
	    /// <summary>
	    /// ID del resultado integral de la part no controladora
	    /// </summary>
        public const String ID_RESULTADO_INTEGRAL_NO_CONTROLADORA = "ifrs-full_ComprehensiveIncomeAttributableToNoncontrollingInterests";
        /// <summary>
        /// ID del concepto de incremento o disminución en el efectivo o equivalentes al efectivo
        /// </summary>
	    private const String ID_INCREMENTO_DISMINUCION_EFECTIVO_Y_EQUIVALENTES = "ifrs-full_IncreaseDecreaseInCashAndCashEquivalents";
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
	    /// ID de la cuenta miembro capital contable
	    /// </summary>
	    private const String ID_MIEMBRO_CAPITAL_CONTABLE = "ifrs-full_EquityMember";
        /// <summary>
        /// Identificador de la cuenta que indica si el reporte es consolidado
        /// </summary>
        private const String ID_CUENTA_CONSOLIDADO = "ifrs_mx-cor_20141205_Consolidado";

        /// <summary>
        /// ID del concepto de utilidad o perdida neta de la participación controladora
        /// </summary>
	    public const String ID_UTILIDAD_PERDIDA_NETA_PARTICIPANCION_CONTROLADORA = "ifrs-full_ProfitLossAttributableToOwnersOfParent";
	    /// <summary>
	    /// ID de utilidad perdida neta de la participación no controladora
	    /// </summary>
        public const String ID_UTILIDAD_PERDIDA_NETA_PARTICIPANCION_NO_CONTROLADORA = "ifrs-full_ProfitLossAttributableToNoncontrollingInterests";

        /// <summary>
        /// ID de la cuenta de efectivo y equivalentes de efectivo
        /// </summary>
        public const String ID_EFECTIVO_Y_EQUIVALENTES = "ifrs-full_CashAndCashEquivalents";
	    /// <summary>
        /// Miembros del formato de variaciones del capital contable
	    /// </summary>
	    private static String[] ID_MIEMBROS_CAPITAL_CONTABLE = new String[]{
		    "ifrs-full_IssuedCapitalMember",
            "ifrs-full_SharePremiumMember",
            "ifrs-full_TreasurySharesMember",
            "ifrs-full_RetainedEarningsMember",
            "ifrs-full_RevaluationSurplusMember",
            "ifrs-full_ReserveOfExchangeDifferencesOnTranslationMember",
            "ifrs-full_ReserveOfCashFlowHedgesMember",
            "ifrs-full_ReserveOfGainsAndLossesOnHedgingInstrumentsThatHedgeInvestmentsInEquityInstrumentsMember",
            "ifrs-full_ReserveOfChangeInValueOfTimeValueOfOptionsMember",
            "ifrs-full_ReserveOfChangeInValueOfForwardElementsOfForwardContractsMember",
            "ifrs-full_ReserveOfChangeInValueOfForeignCurrencyBasisSpreadsMember",
            "ifrs-full_ReserveOfGainsAndLossesOnRemeasuringAvailableforsaleFinancialAssetsMember",
            "ifrs-full_ReserveOfSharebasedPaymentsMember",
            "ifrs-full_ReserveOfRemeasurementsOfDefinedBenefitPlansMember",
            "ifrs-full_AmountRecognisedInOtherComprehensiveIncomeAndAccumulatedInEquityRelatingToNoncurrentAssetsOrDisposalGroupsHeldForSaleMember",
            "ifrs-full_ReserveOfGainsAndLossesFromInvestmentsInEquityInstrumentsMember",
            "ifrs-full_ReserveOfChangeInFairValueOfFinancialLiabilityAttributableToChangeInCreditRiskOfLiabilityMember",
            "ifrs-full_ReserveForCatastropheMember",
            "ifrs-full_ReserveForEqualisationMember",
            "ifrs-full_ReserveOfDiscretionaryParticipationFeaturesMember",
            "ifrs_mx-cor_20141205_OtrosResultadosIntegralesMiembro",
            "ifrs-full_OtherReservesMember",
            "ifrs-full_EquityAttributableToOwnersOfParentMember",
            "ifrs-full_NoncontrollingInterestsMember"
	    };

        /// <summary>
        /// Roles que deben de reportarse al acumulados sus conceptos que tengan tipo de periodo = duracion
        /// </summary>
        private static String[] ROL_URI_CONCEPTOS_REPORTADOS_AL_ACUMULADO = new String[]{
			"http://bmv.com.mx/role/ifrs/mc_2014-03-05_role-105000",
			"http://bmv.com.mx/role/ifrs/ias_1_2014-03-05_role-110000",
			"http://bmv.com.mx/role/ifrs/ias_1_2014-03-05_role-800500",
			"http://bmv.com.mx/role/ifrs/ias_1_2014-03-05_role-800600",
			"http://bmv.com.mx/role/ifrs/ias_34_2014-03-05_role-813000",
			"http://bmv.com.mx/role/ifrs/mx_extension_2014-12-05_role-800007",			
	    };

        /// <summary>
        /// Hechos que deben reportarse al acumulado del año
        /// </summary>
        private static String[] ID_CONCEPTOS_ACUMULADOS = new String[]{

			"ifrs_mx-cor_20141205_ImporteDeIngresos",
            "ifrs_mx-cor_20141205_InstitucionExtranjeraSiNo",
			"ifrs_mx-cor_20141205_FechaDeFirmaContrato",
			"ifrs_mx-cor_20141205_FechaDeVencimiento",
		    "ifrs_mx-cor_20141205_TasaDeInteresYOSobretasa"
			
	    };

        /// <summary>
        /// Lista de unidades monetarias permitidas en un documento de instancia
        /// </summary>
        private static String[] UNIDADES_PERMITIDAS = new String[] {"MXN","USD" };
        /// <summary>
        /// Valor de los decimales permitidos en los hechos monetarios
        /// </summary>
        private int DECIMALES_PERMITIDOS = -3;
        /// <summary>
        /// Mensajes de error
        /// </summary>
        public static String M_ERROR_RV007 = "El archivo XBRL proporcionado pertenece a la emisora con clave {0}. Sólo puede enviar información de la emisora que usted representa";

        public static String M_ERROR_RV008 = "El valor del hecho: 'Fecha de cierre del periodo sobre el que se informa' del documento de instancia ({0}) no corresponde a la fecha de cierre del trimestre enviado como parámetro ({1})";

        public static String M_ERROR_RV009 = "El documento de instancia XBRL no contiene información obligatoria del contexto {0}";

        public static String M_ERROR_RV012 = "Debe reportar los elementos de bloque de texto en el contexto correspondiente al acumulado del año actual ({0})";

        public static String M_ERROR_RV010 = "Se debe reportar información monetaria únicamente en las monedas definidas MXN o USD y no utilizar más de una moneda en el documento de instancia";

        public static String M_ERROR_RV011 = "Los hechos de tipo Monetary cuyo valor sea diferente de '0' deberán indicar el atributo 'decimals' con un valor de '-3'";

        public static String M_ERROR_RV013 = "El valor de Utilidad (pérdida) neta ({0}) debe ser igual a la suma de Utilidad (pérdida) atribuible a la participación controladora ({1}) + Utilidad (pérdida) atribuible a la participación no controladora ({2})";

        public static String M_ERROR_RV014 = "El valor de Resultado integral total ({0}) debe ser igual a la suma de Resultado integral atribuible a la participación controladora ({1}) + Resultado integral atribuible a la participación no controladora ({2})";

        public static String M_ERROR_RV015 = "El valor de Efectivo y equivalentes de efectivo al final del periodo ({0}) debe ser igual a la suma de Efectivo y equivalentes de efectivo al principio del periodo ({1}) + Incremento (disminuci\u00F3n) neto de efectivo y equivalentes de efectivo ({2})";

        public static String M_ERROR_RV016 = "El valor de Capital contable al final del periodo ({0})  debe ser igual a la suma de Capital contable al principio del periodo ({1})  + Total Incremento (disminución) en el capital contable ({2})";

        /// <summary>
        /// Objeto de repository para el acceso a datos de empresas
        /// </summary>
        public IEmpresaRepository EmpresaRepository { get; set; }

        public override void  ValidarArchivoInstanciaXBRL(DocumentoInstanciaXbrlDto instancia, IDictionary<string, string> parametros, ResultadoValidacionDocumentoXBRLDto resultadoValidacion)
        {
            LogUtil.Info("Validando reglas IFRS 2015 para:" + instancia.NombreArchivo);

            //La clave de la emisora reportada en el documento de instancia debe ser la misma clave de emisora (clave de pizarra) enviada como parámetro
            //2016-03-25 Para fibras, caso específico, se tomará en cuenta, si existe, la cveFideicomitente
            String cvePizarra = null;
            if (parametros.ContainsKey(CVE_FIDEICOMITENTE) && !String.IsNullOrEmpty(parametros[CVE_FIDEICOMITENTE]))
            {
                cvePizarra = parametros[CVE_FIDEICOMITENTE];
                LogUtil.Info("claveFideicomientente: " + cvePizarra);
            }
            if (cvePizarra == null)
            {
                cvePizarra = parametros.ContainsKey(CVE_PIZARRA) ? parametros[CVE_PIZARRA] : null;
                LogUtil.Info("clavePizarra: " + cvePizarra);
            }
           
            if (cvePizarra == null) {
                AgregarError(resultadoValidacion, null, null,String.Format(MSG_ERROR_FALTA_PARAMETRO,CVE_PIZARRA), true);
                return;
            }

            //Buscar alias de la clave de pizarra
            var aliasClaveCotizacion = obtenerAliasEmpresa(cvePizarra);
            if (aliasClaveCotizacion != null)
            {
                cvePizarra = aliasClaveCotizacion;
                LogUtil.Info("alias: " + cvePizarra);
            }

            string claveCotizacionXBRL = ObtenerValorNoNumerico(ID_CLAVE_COTIZACION_2014, instancia);
            if (claveCotizacionXBRL != null && !claveCotizacionXBRL.Equals(cvePizarra, StringComparison.InvariantCultureIgnoreCase))
            {
                LogUtil.Info("Error comparar {clavePizarra: [" + cvePizarra + "],claveCotizacionXBRL: [" + claveCotizacionXBRL + "]}");
                AgregarError(resultadoValidacion, null, null, String.Format(M_ERROR_RV007,claveCotizacionXBRL), true);
                return;
            }
            //El dato dentro del archivo “Fecha de cierre del periodo sobre el que se informa”  debe de coincidir con la fecha del trimestre a reportar enviada como parámetro.
            String strFechaTrimestre = parametros.ContainsKey(FECHA_TRIMESTRE) ? parametros[FECHA_TRIMESTRE] : null;
            if(strFechaTrimestre == null){
                AgregarError(resultadoValidacion, null, null, String.Format(MSG_ERROR_FALTA_PARAMETRO, FECHA_TRIMESTRE), true);
                return;
            }
            DateTime fechaTrimestreParam = DateTime.MinValue;
            if (!XmlUtil.ParsearUnionDateTime(strFechaTrimestre, out fechaTrimestreParam)) {
                AgregarError(resultadoValidacion, null, null, String.Format(MSG_ERROR_FORMATO_PARAMETRO, FECHA_TRIMESTRE,strFechaTrimestre), true);
                return;
            }
            var fechaTrimestreXbrl = ObtenerValorFecha(ID_FECHA_CIERRE_REPORTE_2014, instancia);
            if (!fechaTrimestreXbrl.Equals(DateTime.MinValue)) { 
                if(!fechaTrimestreXbrl.Equals(fechaTrimestreParam)){
                    AgregarError(resultadoValidacion, null, null, String.Format(M_ERROR_RV008, fechaTrimestreXbrl, fechaTrimestreParam), true);
                    return;
                }
            }

            if (!ValidarPeriodosRequeridos(instancia,parametros,fechaTrimestreParam,resultadoValidacion)) {
                return;
            }

            if(!ValidarHechosReportadosAlAcumulado(instancia,parametros,fechaTrimestreParam,resultadoValidacion)){
                return;
            }

            if(!ValidarMonedasDocumento(instancia,UNIDADES_PERMITIDAS)){
                AgregarError(resultadoValidacion, null, null, String.Format(M_ERROR_RV010), true);
                return;
            }

            if (!ValidarDecimalesHechosMonetarios(instancia,DECIMALES_PERMITIDOS)) {
                AgregarError(resultadoValidacion, null, null, String.Format(M_ERROR_RV011), true);
                return;
            }

            if(!ValidarCuentasExtras(instancia,parametros,fechaTrimestreParam,resultadoValidacion)){
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
            var empresaBuscada = EmpresaRepository.GetQueryable().Where(x => x.AliasClaveCotizacion == nombreCorto && x.Borrado == false).FirstOrDefault();
            if (empresaBuscada != null)
            {
                return empresaBuscada.NombreCorto;
            }
            return null;
        }



        /// <summary>
        /// Valida las operaciones extras sobre cuentas específicas del documento de instancia:
        /// Validaciones de consolidado = true : 
        /// Utilidad (pérdida) neta = Utilidad (pérdida) atribuible a la participación controladora + Utilidad (pérdida) atribuible a la participación no controladora
        /// Resultado integral =resultado integral de la participación controladora + resultado integral de la participación no controladora
        /// Validaciones generales
        /// Incremento (disminución) neto de efectivo y equivalentes de efectivo + Efectivo y equivalentes de efectivo al principio del periodo = Efectivo y equivalentes de efectivo al final del periodo
        /// </summary>
        /// <param name="instancia">Documento de instancia a validar</param>
        /// <param name="parametros">Parametros extras para validación</param>
        /// <param name="fechaTrimestreParam">Fecha de cierre de trimestre del reporte</param>
        /// <param name="resultadoValidacion">Objeto del resultado de la validación</param>
        /// <returns></returns>
        private bool ValidarCuentasExtras(DocumentoInstanciaXbrlDto instancia, IDictionary<string, string> parametros, DateTime fechaTrimestreParam, ResultadoValidacionDocumentoXBRLDto resultadoValidacion)
        {
            var strConsolidado = ObtenerValorNoNumerico(ID_CUENTA_CONSOLIDADO, instancia);
            if (strConsolidado != null && CommonConstants.CADENAS_VERDADERAS.Any(x=>x.Equals(strConsolidado,StringComparison.InvariantCultureIgnoreCase))) { 
                //Validaciones para Consolidado = si
                
                //Utilidad (pérdida) neta = Utilidad (pérdida) atribuible a la participación controladora + Utilidad (pérdida) atribuible a la participación no controladora
                if (instancia.HechosPorIdConcepto.ContainsKey(ID_UTILIDAD_PERDIDA_NETA)) { 
                    var dimensiones = new List<DimensionInfoDto>();
                    foreach(var idHechoutilidadPerdidaNeta in instancia.HechosPorIdConcepto[ID_UTILIDAD_PERDIDA_NETA]){
                        if(instancia.HechosPorId.ContainsKey(idHechoutilidadPerdidaNeta)){
                            var utilidadPerdidaNeta = instancia.HechosPorId[idHechoutilidadPerdidaNeta];
                            var ctx = instancia.ContextosPorId[utilidadPerdidaNeta.IdContexto];
                            if (!ctx.ContieneInformacionDimensional) {
                                var utilidadPerdidaNetaControladora = instancia.BuscarHechos(ID_UTILIDAD_PERDIDA_NETA_PARTICIPANCION_CONTROLADORA, null, null, ctx.Periodo.FechaInicio, ctx.Periodo.FechaFin, dimensiones, true);
                                var utilidadPerdidaNetaNoControladora = instancia.BuscarHechos(ID_UTILIDAD_PERDIDA_NETA_PARTICIPANCION_NO_CONTROLADORA, null, null, ctx.Periodo.FechaInicio, ctx.Periodo.FechaFin, dimensiones, true);
                                if (utilidadPerdidaNetaControladora.Count > 0 && utilidadPerdidaNetaNoControladora.Count > 0) {

                                    if (utilidadPerdidaNeta.ValorNumerico != utilidadPerdidaNetaControladora[0].ValorNumerico + utilidadPerdidaNetaNoControladora[0].ValorNumerico)
                                    {
                                        AgregarError(resultadoValidacion, null, ctx.Id,
                                            String.Format(M_ERROR_RV013, utilidadPerdidaNeta.ValorNumerico, utilidadPerdidaNetaControladora[0].ValorNumerico, utilidadPerdidaNetaNoControladora[0].ValorNumerico), true);
                                        return false;
                                    }
                                
                                }
                            }
                        }
                        

                    }
                
                }

                //Resultado integral =resultado integral de la participación controladora + resultado integral de la participación no controladora
                if (instancia.HechosPorIdConcepto.ContainsKey(ID_RESULTADO_INTEGRAL))
                {
                    var dimensiones = new List<DimensionInfoDto>();
                    foreach (var idHechoResultadoIntegral in instancia.HechosPorIdConcepto[ID_RESULTADO_INTEGRAL])
                    {
                        if (instancia.HechosPorId.ContainsKey(idHechoResultadoIntegral))
                        {
                            var resultadoIntegral = instancia.HechosPorId[idHechoResultadoIntegral];
                            var ctx = instancia.ContextosPorId[resultadoIntegral.IdContexto];
                            if (!ctx.ContieneInformacionDimensional)
                            {
                                var resultadoIntegralControladora = instancia.BuscarHechos(ID_RESULTADO_INTEGRAL_CONTROLADORA, null, null, ctx.Periodo.FechaInicio, ctx.Periodo.FechaFin, dimensiones, true);
                                var resultadoIntegralNoControladora = instancia.BuscarHechos(ID_RESULTADO_INTEGRAL_NO_CONTROLADORA, null, null, ctx.Periodo.FechaInicio, ctx.Periodo.FechaFin, dimensiones, true);
                                if (resultadoIntegralControladora.Count > 0 && resultadoIntegralNoControladora.Count > 0)
                                {

                                    if (resultadoIntegral.ValorNumerico != resultadoIntegralControladora[0].ValorNumerico + resultadoIntegralNoControladora[0].ValorNumerico)
                                    {
                                        AgregarError(resultadoValidacion, null, ctx.Id,
                                            String.Format(M_ERROR_RV014, resultadoIntegral.ValorNumerico, resultadoIntegralControladora[0].ValorNumerico, resultadoIntegralNoControladora[0].ValorNumerico), true);
                                        return false;
                                    }

                                }
                            }
                        }
                    }
                }
            }
            //Incremento (disminución) neto de efectivo y equivalentes de efectivo + Efectivo y equivalentes de efectivo al principio del periodo = Efectivo y equivalentes de efectivo al final del periodo
            if (instancia.HechosPorIdConcepto.ContainsKey(ID_INCREMENTO_DISMINUCION_EFECTIVO_Y_EQUIVALENTES))
            {
                var dimensiones = new List<DimensionInfoDto>();
                foreach (var idHechoIncrementoDisminucion in instancia.HechosPorIdConcepto[ID_INCREMENTO_DISMINUCION_EFECTIVO_Y_EQUIVALENTES])
                {
                    if (instancia.HechosPorId.ContainsKey(idHechoIncrementoDisminucion))
                    {
                        var incrementoDisminucion = instancia.HechosPorId[idHechoIncrementoDisminucion];
                        var ctx = instancia.ContextosPorId[incrementoDisminucion.IdContexto];
                        if (!ctx.ContieneInformacionDimensional)
                        {
                            var efectivoAlInicio = instancia.BuscarHechos(ID_EFECTIVO_Y_EQUIVALENTES, null, null, ctx.Periodo.FechaInicio, ctx.Periodo.FechaInicio.AddDays(-1), dimensiones, true);
                            var efectivoAlFinal = instancia.BuscarHechos(ID_EFECTIVO_Y_EQUIVALENTES, null, null, ctx.Periodo.FechaInicio, ctx.Periodo.FechaFin, dimensiones, true);
                            if (efectivoAlInicio.Count > 0 && efectivoAlFinal.Count > 0)
                            {

                                if (incrementoDisminucion.ValorNumerico != efectivoAlFinal[0].ValorNumerico - efectivoAlInicio[0].ValorNumerico)
                                {
                                    AgregarError(resultadoValidacion, null, ctx.Id,
                                        String.Format(M_ERROR_RV015, efectivoAlFinal[0].ValorNumerico, efectivoAlInicio[0].ValorNumerico, incrementoDisminucion.ValorNumerico), true);
                                    return false;
                                }

                            }
                        }
                    }
                }
            }

            //El valor de Capital contable al final del periodo  debe ser igual a la suma de Capital contable al principio del periodo  + Total Incremento (disminuci\u00F3n) en el capital contable  para el miembro de dominio 
            if (instancia.HechosPorIdConcepto.ContainsKey(ID_CAMBIOS_EN_EL_CAPITAL_CONTABLE))
            {
                var dimensiones = new List<DimensionInfoDto>();
                foreach (var idHechosCambiosEnCapital in instancia.HechosPorIdConcepto[ID_CAMBIOS_EN_EL_CAPITAL_CONTABLE])
                {
                    if (instancia.HechosPorId.ContainsKey(idHechosCambiosEnCapital))
                    {
                        var cambiosCapital = instancia.HechosPorId[idHechosCambiosEnCapital];
                        var ctx = instancia.ContextosPorId[cambiosCapital.IdContexto];
                        dimensiones.Clear();
                        if (ctx.ValoresDimension != null) {
                            dimensiones.AddRange(ctx.ValoresDimension);
                        }
                        var capitalInicial = instancia.BuscarHechos(ID_CAPITAL_CONTABLE, null, null, ctx.Periodo.FechaInicio, ctx.Periodo.FechaInicio.AddDays(-1), dimensiones, true);
                        var capitalFinal = instancia.BuscarHechos(ID_CAPITAL_CONTABLE, null, null, ctx.Periodo.FechaInicio, ctx.Periodo.FechaFin, dimensiones, true);
                        if (capitalInicial.Count > 0 && capitalFinal.Count > 0)
                        {
                            if (cambiosCapital.ValorNumerico != capitalFinal[0].ValorNumerico - capitalInicial[0].ValorNumerico)
                            {
                                AgregarError(resultadoValidacion, null, ctx.Id,
                                    String.Format(M_ERROR_RV016, capitalFinal[0].ValorNumerico, capitalInicial[0].ValorNumerico, cambiosCapital.ValorNumerico), true);
                                return false;
                            }

                        }
                        
                    }
                }
            }


            return true;
        }

        
        

        /// <summary>
        /// Valida que los hechos de los roles y conceptos que requieran reportarse al acumulado actual tengan las fechas deseadas
        /// </summary>
        /// <param name="instancia">Documento de instancia a validar</param>
        /// <param name="parametros">Parametros de validación</param>
        /// <param name="fechaTrimestreParam">Fecha de trimestre que se reporta</param>
        /// <param name="resultadoValidacion">Objeto de resultado de la validación</param>
        /// <returns></returns>
        private bool ValidarHechosReportadosAlAcumulado(DocumentoInstanciaXbrlDto instancia, IDictionary<string, string> parametros, DateTime fechaTrimestreParam, ResultadoValidacionDocumentoXBRLDto resultadoValidacion)
        {
            var listaConceptosAValidar = new List<string>();
            foreach(var rol in ROL_URI_CONCEPTOS_REPORTADOS_AL_ACUMULADO){
                var listaConceptosRol = UtilAbax.ObtenerListaConceptosDeRolPresentacion(instancia.Taxonomia, rol);
                foreach(var concepto in listaConceptosRol){
                    listaConceptosAValidar.Add(concepto.Id);
                }
            }
            listaConceptosAValidar.AddRange(ID_CONCEPTOS_ACUMULADOS);
            DateTime fechaInicioEjercicio = new DateTime(fechaTrimestreParam.Year, 1, 1);

            foreach(var idConcepto in listaConceptosAValidar){
	    		//Si se encuentran hechos, al menos uno debe estar reportado en el acumulado actual
                if (!ValidarAlMenosunHechoEnPeriodo(idConcepto, instancia, fechaInicioEjercicio,fechaTrimestreParam))
                {
                    AgregarError(resultadoValidacion, null, null, String.Format(M_ERROR_RV012, idConcepto), true);
                    return false; 
	    		}
	    	}


            return true;
        }

        
        /// <summary>
        /// Aplica las reglas de validacion de periodos de acuerdo a lo requerido:
        /// Se valida que exista por lo menos la información trimestral y acumulada del ejercicio reportado
        /// para los formatos principales de la taxonomía
        /// </summary>
        /// <param name="instancia">Documento de instancia a validar</param>
        /// <param name="parametros">Parametros de validación</param>
        /// <param name="fechaTrimestreParam">Fecha de trimestre reportado</param>
        /// <param name="resultadoValidacion">Objeto de resultado de validación</param>
        /// <returns>True si la validación es exitosa, false si falta algún dato requerido, si faltan datos requeridos se agregan los mensajes de error correspondientes</returns>
        private bool ValidarPeriodosRequeridos(DocumentoInstanciaXbrlDto instancia, IDictionary<string, string> parametros, DateTime fechaTrimestreParam, ResultadoValidacionDocumentoXBRLDto resultadoValidacion)
        {

            DateTime fechaInicioEjercicio = new DateTime(fechaTrimestreParam.Year, 1, 1);
            DateTime fechaInicioTrimestre = new DateTime(fechaTrimestreParam.Ticks).AddDays(1).AddMonths(-3);
            DateTime fechaA12Meses = new DateTime(fechaTrimestreParam.Ticks).AddDays(1).AddYears(-1);
            LogUtil.Info("FechaInicioEjercicio:"+ DateUtil.ToStandarString(fechaInicioEjercicio));
            LogUtil.Info("FechaInicioTrimestre:" + DateUtil.ToStandarString(fechaInicioTrimestre));
            //Estado de situación financiera: Exitencia del cierre del trimestre
            if (!ExisteInformacionEnPeriodo(instancia, ID_ACTIVOS, fechaInicioTrimestre, fechaTrimestreParam, null)) {
                AgregarError(resultadoValidacion, null, null, String.Format(M_ERROR_RV009, DateUtil.ToStandarString(fechaTrimestreParam)), false);
                return false;
            }
            
            //Estado de resultados: 
            //Trimestral
            if (!ExisteInformacionEnPeriodo(instancia, ID_UTILIDAD_PERDIDA_NETA, fechaInicioTrimestre, fechaTrimestreParam, null) || !ExisteInformacionEnPeriodo(instancia, ID_RESULTADO_INTEGRAL, fechaInicioTrimestre, fechaTrimestreParam, null))
            {
                AgregarError(resultadoValidacion, null, null, String.Format(M_ERROR_RV009, DateUtil.ToStandarString(fechaInicioTrimestre) + " - " + DateUtil.ToStandarString(fechaTrimestreParam)), false);
                return false;
            }
           
            //Acumulado
            if (!ExisteInformacionEnPeriodo(instancia, ID_UTILIDAD_PERDIDA_NETA, fechaInicioEjercicio, fechaTrimestreParam, null) || !ExisteInformacionEnPeriodo(instancia, ID_RESULTADO_INTEGRAL, fechaInicioEjercicio, fechaTrimestreParam, null))
            {
                AgregarError(resultadoValidacion, null, null, String.Format(M_ERROR_RV009, DateUtil.ToStandarString(fechaInicioEjercicio) + " - " + DateUtil.ToStandarString(fechaTrimestreParam)), false);
                return false;
            }
          
            //Informativos a 12 meses
            /*if (!ExisteInformacionEnPeriodo(instancia, ID_UTILIDAD_PERDIDA_NETA, fechaA12Meses, fechaTrimestreParam, null))
            {
                AgregarError(resultadoValidacion, null, null, String.Format(M_ERROR_RV009, DateUtil.ToStandarString(fechaA12Meses) + " - " + DateUtil.ToStandarString(fechaTrimestreParam)), false);
                return false;
            }*/

            //Estado de flujos de efectivo
            if (!ExisteInformacionEnPeriodo(instancia, ID_INCREMENTO_DISMINUCION_EFECTIVO_Y_EQUIVALENTES, fechaInicioEjercicio, fechaTrimestreParam, null))
            {
                AgregarError(resultadoValidacion, null, null, String.Format(M_ERROR_RV009, DateUtil.ToStandarString(fechaInicioEjercicio) + " - " + DateUtil.ToStandarString(fechaTrimestreParam)), false);
                return false;
            }

            //Estado de cambios en el capital contable
            //Para cada miembro, empezando por la dim default

            /* Temporalmente ignorar la dimension defaul
            if (!ExisteInformacionEnPeriodo(instancia, ID_CAMBIOS_EN_EL_CAPITAL_CONTABLE, fechaInicioEjercicio, fechaTrimestreParam, new List<DimensionInfoDto>()))
            {
                AgregarError(resultadoValidacion, null, null, String.Format(M_ERROR_RV009, DateUtil.ToStandarString(fechaInicioEjercicio) + " - " + DateUtil.ToStandarString(fechaTrimestreParam)), false);
                return false;
            }
            */
            if (!ExisteInformacionEnPeriodo(instancia, ID_CAPITAL_CONTABLE, fechaInicioEjercicio, fechaTrimestreParam, new List<DimensionInfoDto>()))
            {
                AgregarError(resultadoValidacion, null, null, String.Format(M_ERROR_RV009, DateUtil.ToStandarString(fechaTrimestreParam)), false);
                return false;
            }
            
            var listaDimCapital = new List<DimensionInfoDto>();
            var dimensionBuscada = new DimensionInfoDto()
            {
                IdDimension = ID_COMPONENTES_DEL_CAPITAL,
                Explicita = true
            };
            listaDimCapital.Add(dimensionBuscada);

            foreach (var idMiembroCapital in ID_MIEMBROS_CAPITAL_CONTABLE)
            {
                dimensionBuscada.IdItemMiembro = idMiembroCapital;
                if (!ExisteInformacionEnPeriodo(instancia, ID_CAMBIOS_EN_EL_CAPITAL_CONTABLE, fechaInicioEjercicio, fechaTrimestreParam, listaDimCapital))
                {
                    AgregarError(resultadoValidacion, null, null, String.Format(M_ERROR_RV009, DateUtil.ToStandarString(fechaInicioEjercicio) + " - " + DateUtil.ToStandarString(fechaTrimestreParam)), false);
                    return false;
                }
                if (!ExisteInformacionEnPeriodo(instancia, ID_CAPITAL_CONTABLE, fechaInicioEjercicio, fechaTrimestreParam, listaDimCapital))
                {
                    AgregarError(resultadoValidacion, null, null, String.Format(M_ERROR_RV009, DateUtil.ToStandarString(fechaTrimestreParam)), false);
                    return false;
                }
            }


            return true;
        }

    }
}
