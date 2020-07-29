using AbaxXBRL.Constantes;
using AbaxXBRL.Taxonomia;
using AbaxXBRL.Util;
using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.Reports.Util;
using AbaxXBRLCore.Viewer.Application.Dto;
using AbaxXBRLCore.Viewer.Application.Model;
using AbaxXBRLCore.XPE.Common.Util;
using NPOI.SS.UserModel;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Viewer.Application.Import.Impl
{
    /// <summary>
    /// Implementación específica para la importación y exportación del rol 815100 
    /// de la taxonomía 2016 IFRS de BMV - Anexo AA Desglose de pasivos
    /// </summary>
    /// <author>Emigido Hernandez</author>
    public class ImportadorExportadorRol815100Bmv2014 : IImportadorExportadorRolDocumento
    {

        public static string[] _miembrosTipoPasivo = new string[] { 
            "ifrs_mx-cor_20160822_BankingMember", 
            "ifrs_mx-cor_20160822_TotalBankingMember", 
            "ifrs_mx-cor_20160822_SotckMarketMember", 
            "ifrs_mx-cor_20160822_PrivatePlacementsMember", 
            "ifrs_mx-cor_20160822_TotalStockMarketListedInTheStockMarketAndPrivatePlacementsMember",
            "ifrs_mx-cor_20160822_OtherCurrentAndNonCurrentLiabilitiesWithCostMember",
            "ifrs_mx-cor_20160822_TotalOtherCurrentAndNonCurrentLiabilitiesWithCostInNationalCurrencyMember",
            "ifrs_mx-cor_20160822_GrandTotalLiabilitiesMember"};

        public static string[] _miembrosIntervaloDeTiempo = new string[] { 
            "ifrs_mx-cor_20160822_ZeroToSixMonthsMember",
            "ifrs_mx-cor_20160822_SevenToTwelveMonthsMember",
            "ifrs_mx-cor_20160822_ThirteenToEightTeenMonthsMember",
            "ifrs_mx-cor_20160822_NineTeenToThirtySixMonthsMember",
            "ifrs_mx-cor_20160822_ThirtySevenMonthsOrMoreMember"
        };

        public static string[] _miembrosBancarios = new string[] { 
            "ifrs_mx-cor_20160822_BankingMember", 
            "ifrs_mx-cor_20160822_TotalBankingMember"
        };
        public static string[] _miembrosBursatiles = new string[] { 
            "ifrs_mx-cor_20160822_SotckMarketMember", 
            "ifrs_mx-cor_20160822_PrivatePlacementsMember", 
            "ifrs_mx-cor_20160822_TotalStockMarketListedInTheStockMarketAndPrivatePlacementsMember"
        };

        public static string[] _miembrosOtros = new string[] { 
            "ifrs_mx-cor_20160822_OtherCurrentAndNonCurrentLiabilitiesWithCostMember",
            "ifrs_mx-cor_20160822_TotalOtherCurrentAndNonCurrentLiabilitiesWithCostInNationalCurrencyMember"
        };

        public static string[] _miembrosTipoPasivoTotales = new string[] { 
            "ifrs_mx-cor_20160822_TotalBankingMember",
            "ifrs_mx-cor_20160822_TotalStockMarketListedInTheStockMarketAndPrivatePlacementsMember",
            "ifrs_mx-cor_20160822_TotalOtherCurrentAndNonCurrentLiabilitiesWithCostInNationalCurrencyMember",
            "ifrs_mx-cor_20160822_GrandTotalLiabilitiesMember"
            };


        public static string[] _elementosPrimariosBancarios = new string[] { 
            "ifrs_mx-cor_20160822_InstitutionName" ,
            "ifrs_mx-cor_20160822_NumberOfContract",
            "ifrs_mx-cor_20160822_TypeOfCreditRevolvingPayingAtExpirationConstantPayments",
            "ifrs_mx-cor_20160822_LiabilityCurrency",
            "ifrs_mx-cor_20160822_RefinancingClauseToMaturatyYesNo",
            "ifrs_mx-cor_20160822_PriorityOfPayment",
            "ifrs_mx-cor_20160822_SignatureDateContract",
            "ifrs_mx-cor_20160822_SettlementDate",
            "ifrs_mx-cor_20160822_DeterminationOfTheRateOfReference",
            "ifrs_mx-cor_20160822_InterestRate",
            "ifrs_mx-cor_20160822_DescriptionOfWarrantyOrSignificantFeatures",
            "ifrs_mx-cor_20160822_InitialCreditLine",
            "ifrs_mx-cor_20160822_OutstandingBalance",
            "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
            "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
            "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
            "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
            "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
            "ifrs_mx-cor_20160822_AmortizationDenominatedInDomesticCurrency",
            "ifrs_mx-cor_20160822_PercentageOfTheTotalDebt",
            "ifrs_mx-cor_20160822_MonthsOfDelaysPrincipalOrInterest"
        };

        public static string[] _elementosPrimariosBursatiles = new string[] { 
            "ifrs_mx-cor_20160822_IsinAndOrTicker" ,
            "ifrs_mx-cor_20160822_ListedMexicoOrForeign",
            "ifrs_mx-cor_20160822_ScheduleOfAmortization",
            "ifrs_mx-cor_20160822_LiabilityCurrency",
            "ifrs_mx-cor_20160822_IsReferredAPlanOfRefinancingAtExpiration",
            "ifrs_mx-cor_20160822_PriorityOfPayment",
            "ifrs_mx-cor_20160822_SignatureDateContract",
            "ifrs_mx-cor_20160822_SettlementDate",
            "ifrs_mx-cor_20160822_DeterminationOfTheRateOfReference",
            "ifrs_mx-cor_20160822_InterestRate",
            "ifrs_mx-cor_20160822_DescriptionOfWarrantyOrSignificantFeatures",
            "ifrs_mx-cor_20160822_InitialAmountOfTheIssuance",
            "ifrs_mx-cor_20160822_OutstandingBalance",
            "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
            "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
            "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
            "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
            "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
            "ifrs_mx-cor_20160822_AmortizationDenominatedInDomesticCurrency",
            "ifrs_mx-cor_20160822_PercentageOfTheTotalDebt",
            "ifrs_mx-cor_20160822_MonthsOfDelaysPrincipalOrInterest"
        };


        public static string[] _elementosPrimariosOtros = new string[] { 
            "ifrs_mx-cor_20160822_LiabilityCreditor" ,
            "ifrs_mx-cor_20160822_LiabilityConcept",
            "ifrs_mx-cor_20160822_PaymentScheme",
            "ifrs_mx-cor_20160822_LiabilityCurrency",
            "ifrs_mx-cor_20160822_RefinancingClauseToMaturatyYesNo",
            "ifrs_mx-cor_20160822_PriorityOfPayment",
            "ifrs_mx-cor_20160822_SignatureDateContract",
            "ifrs_mx-cor_20160822_SettlementDate",
            "ifrs_mx-cor_20160822_DeterminationOfTheRateOfReference",
            "ifrs_mx-cor_20160822_InterestRate",
            "ifrs_mx-cor_20160822_DescriptionOfWarrantyOrSignificantFeatures",
            "ifrs_mx-cor_20160822_InitialCreditLine",
            "ifrs_mx-cor_20160822_OutstandingBalance",
            "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
            "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
            "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
            "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
            "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
            "ifrs_mx-cor_20160822_AmortizationDenominatedInDomesticCurrency",
            "ifrs_mx-cor_20160822_PercentageOfTheTotalDebt",
            "ifrs_mx-cor_20160822_MonthsOfDelaysPrincipalOrInterest"

        };

        public static string[] _elementosPrimariosGranTotal = new string[] { 
            "" ,
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "ifrs_mx-cor_20160822_TotalInitialCreditLineAndInitialAmountOfTheIssuance",
            "ifrs_mx-cor_20160822_OutstandingBalance",
            "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
            "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
            "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
            "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
            "ifrs_mx-cor_20160822_OutstandingBalanceDetail",
            "ifrs_mx-cor_20160822_AmortizationDenominatedInDomesticCurrency"
        };

        public static string[] _elementosPrimariosTotal = new string[] { 
            "ifrs_mx-cor_20160822_InitialCreditLine","ifrs_mx-cor_20160822_OutstandingBalance",
            "ifrs_mx-cor_20160822_InitialAmountOfTheIssuance","ifrs_mx-cor_20160822_TotalInitialCreditLineAndInitialAmountOfTheIssuance",
            "ifrs_mx-cor_20160822_OutstandingBalanceDetail","ifrs_mx-cor_20160822_AmortizationDenominatedInDomesticCurrency"
        };

        public static string[] _elementosDescripcionPasivo = { "ifrs_mx-cor_20160822_InstitutionName", "ifrs_mx-cor_20160822_IsinAndOrTicker", "ifrs_mx-cor_20160822_LiabilityCreditor" };

        public static string _idHipercuboDesglosePasivos = "ifrs_mx-cor_20160822_BreakdownOfLiabilitiesTable";
        public static string _idDimensionTipoPasivo = "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis";
        public static string _idDimensionSecuencia = "ifrs_mx-cor_20160822_LiabilitiesSequenceTypedAxis";
        public static string _idDimensionIntervalo = "ifrs_mx-cor_20160822_TimeIntervalBreakdownOfLiabilitiesAxis";
        public static string _idItemMiembroGranTotal = "ifrs_mx-cor_20160822_GrandTotalLiabilitiesMember";
        public static string _idConceptoSubtabla = "ifrs_mx-cor_20160822_OutstandingBalanceDetail";
        public static int _columnaTituloTipoPasivo = 0;
        public static int _columnaInicioDatos = 0;
        public static string _elementoTypedSecuencia = "<ifrs_mx-cor_20160822:LiabilitiesSequenceDomain xmlns:ifrs_mx-cor_20160822=\"http://cnbv.gob.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22\">{0}</ifrs_mx-cor_20160822:LiabilitiesSequenceDomain>";
        public static string _valorDecimalesHechos = "-3";

        public void ImportarDatosDeHojaExcel(NPOI.SS.UserModel.ISheet hojaAImportar, NPOI.SS.UserModel.ISheet hojaPlantilla, Dto.DocumentoInstanciaXbrlDto instancia, string rol, Common.Dtos.ResumenProcesoImportacionExcelDto resumenImportacion, Model.IDefinicionPlantillaXbrl plantillaDocumento)
        {
            var secuenciasAsignadas = new Dictionary<string, string>();
            foreach(var ctx in instancia.ContextosPorId.Values){
                var seq = ObtenerSecuenciaDeContexto(ctx, _idDimensionSecuencia);
                if (seq != null)
                {
                    if (!secuenciasAsignadas.ContainsKey(seq))
                    {
                        secuenciasAsignadas[seq] = ctx.Id;
                    }
                }
            }

            var etiquetasConceptosMiembro = ObtenerListaEtiquetasConceptosMiembro(instancia.Taxonomia, _miembrosTipoPasivo);

            foreach (var tipoPasivoActual in _miembrosTipoPasivo)
            {
                //Utilizar etiquetas
                var etiquetasTipoPasivo = TaxonomiaXbrlUtil.ObtenerEtiquetasConcepto(instancia.Taxonomia, tipoPasivoActual);
                foreach(var etqTipo in etiquetasTipoPasivo){
                    int renglonTipoPasivo = LocalizarRenglonTipoPasivo(hojaAImportar, etqTipo, _columnaTituloTipoPasivo);
                    if (renglonTipoPasivo >= 0)
                    {
                        ImportarGrupoTipoPasivo(hojaAImportar, renglonTipoPasivo, tipoPasivoActual, instancia, plantillaDocumento, resumenImportacion, secuenciasAsignadas, etiquetasConceptosMiembro);
                        break;
                    }
                }
                
            }
        }

        private IList<String> ObtenerListaEtiquetasConceptosMiembro(TaxonomiaDto taxonoima,string[] miembros)
        {
            var etiquetasTotales = new List<String>();
            foreach(var idMiembro in miembros){
                var etiquetas = TaxonomiaXbrlUtil.ObtenerEtiquetasConcepto(taxonoima, idMiembro);
                etiquetasTotales.AddRange(etiquetas);
            }
            return etiquetasTotales;
        }

        

        public void ExportarDatosDeHojaExcel(NPOI.SS.UserModel.ISheet hojaAExportar, NPOI.SS.UserModel.ISheet hojaPlantilla, Dto.DocumentoInstanciaXbrlDto instancia, string rol, Model.IDefinicionPlantillaXbrl plantillaDocumento, string idioma)
        {
            foreach (var tipoPasivoActual in _miembrosTipoPasivo)
            {
                int renglonTipoPasivo = LocalizarRenglonTipoPasivo(hojaAExportar, tipoPasivoActual,_columnaTituloTipoPasivo);
                if (renglonTipoPasivo >= 0)
                {
                    ExportarGrupoTipoPasivo(hojaAExportar,renglonTipoPasivo,tipoPasivoActual, instancia, plantillaDocumento);
                }
            }
        }
        /// <summary>
        /// Inserta los valores a exportar de un grupo de hechos relacionados a un miembro de la dimensión de tipo de pasivo
        /// En caso de que sea alguno de los miembros que totalizan entonces no se insertan renglones
        /// </summary>
        /// <param name="hojaAExportar"></param>
        /// <param name="renglonTipoPasivo"></param>
        /// <param name="tipoPasivoActual"></param>
        /// <param name="instancia"></param>
        /// <param name="plantillaDocumento"></param>
        private void ExportarGrupoTipoPasivo(NPOI.SS.UserModel.ISheet hojaAExportar, int renglonTipoPasivo, string tipoPasivoActual, DocumentoInstanciaXbrlDto instancia, 
            IDefinicionPlantillaXbrl plantillaDocumento)
        {
            var hechosDeTipoPasivo = ObtenerHechosPorDimensionYMiembro(instancia, plantillaDocumento,_idDimensionTipoPasivo, tipoPasivoActual);
            int iCol = _columnaInicioDatos;
            int iRenglon = renglonTipoPasivo;

            string[] listaPrimarios = null;
            if (_miembrosBancarios.Contains(tipoPasivoActual))
            {
                listaPrimarios = _elementosPrimariosBancarios;
            }
            if (_miembrosBursatiles.Contains(tipoPasivoActual))
            {
                listaPrimarios = _elementosPrimariosBursatiles;
            }
            if (_miembrosOtros.Contains(tipoPasivoActual))
            {
                listaPrimarios = _elementosPrimariosOtros;
            }
            if (_idItemMiembroGranTotal.Equals(tipoPasivoActual))
            {
                listaPrimarios = _elementosPrimariosGranTotal;
            }
            
            //aplica para renglón primarios
            if (_miembrosTipoPasivoTotales.Contains(tipoPasivoActual))
            {
                int iMiembroSubtabla = 0;
                foreach (var elementoPrimario in listaPrimarios)
                {
                    if (_elementosPrimariosTotal.Contains(elementoPrimario))
                    {
                        IList<HechoDto> listaHechos = null;
                        if (elementoPrimario.Equals(_idConceptoSubtabla))
                        {
                            listaHechos = ObtenerHechosPorElementoPrimarioYSecuencia(instancia, hechosDeTipoPasivo, elementoPrimario, null);
                            listaHechos = FiltrarHechosPorDimensionYMiembro(instancia, listaHechos, _idDimensionIntervalo, _miembrosIntervaloDeTiempo[iMiembroSubtabla++]);
                        }
                        else
                        {
                            listaHechos = ObtenerHechosPorElementoPrimarioYSecuencia(instancia, hechosDeTipoPasivo, elementoPrimario, null);
                        }
                        if (listaHechos.Count > 0)
                        {
                            ExcelUtil.AsignarValorCelda(hojaAExportar, renglonTipoPasivo, iCol,
                                listaHechos[0].Valor, CellType.Numeric, null);
                        }
                    }
                    iCol++;
                }
            }
            else
            {
                //Organizar por secuencia
                var secuenciasEnHechos = OrganizarHechosPorSecuencia(instancia, hechosDeTipoPasivo);
                if (secuenciasEnHechos.Count > 0)
                {

                    hojaAExportar.ShiftRows(iRenglon+1, hojaAExportar.LastRowNum, secuenciasEnHechos.Count);
                    iRenglon++;
                    foreach (var secuencia in secuenciasEnHechos.Keys)
                    {
                        var renglon = hojaAExportar.CreateRow(iRenglon);
                        iCol = _columnaInicioDatos;
                        int iMiembroSubtabla = 0;
                        foreach (var elementoPrimario in listaPrimarios)
                        {
                            IList<HechoDto> listaHechos = null; 

                            if (elementoPrimario.Equals(_idConceptoSubtabla))
                            {
                                listaHechos = ObtenerHechosPorElementoPrimarioYSecuencia(instancia, secuenciasEnHechos[secuencia], elementoPrimario, null);
                                listaHechos = FiltrarHechosPorDimensionYMiembro(instancia, listaHechos, _idDimensionIntervalo, _miembrosIntervaloDeTiempo[iMiembroSubtabla++]);
                            }
                            else
                            {
                                listaHechos = ObtenerHechosPorElementoPrimarioYSecuencia(instancia, secuenciasEnHechos[secuencia], elementoPrimario, null);
                            }

                            if (listaHechos.Count > 0)
                            {
                                var cellType = CellType.String;
                                if (listaHechos[0].EsNumerico)
                                {
                                    cellType = CellType.Numeric;
                                }

                                ExcelUtil.AsignarValorCelda(hojaAExportar, iRenglon, iCol,
                                    listaHechos[0].Valor, cellType, null);
                            }
                            iCol++;
                        }
                        iRenglon++;
                    }
                }
            }
        }

        /// <summary>
        /// Filtra un conjunto de hechos por el contenido de un item miembro de una dimensión en específico
        /// </summary>
        /// <param name="instancia"></param>
        /// <param name="listaHechos"></param>
        /// <param name="_idDimensionIntervalo"></param>
        /// <param name="p"></param>
        /// <returns></returns>
        private IList<HechoDto> FiltrarHechosPorDimensionYMiembro(DocumentoInstanciaXbrlDto instancia, IList<HechoDto> listaHechos, string idDimension, string idItemMiembro)
        {
            var hechosFinales = new List<HechoDto>();
            ContextoDto contexto = null;
            foreach(var hechoActual in listaHechos){
                contexto = instancia.ContextosPorId[hechoActual.IdContexto];
                if (ContieneDimension(idDimension, idItemMiembro, contexto))
                {
                    hechosFinales.Add(hechoActual);
                }
            }
            return hechosFinales;
        }
        /// <summary>
        /// Organiza un listado de hechos que contienen información dimensional de secuencia
        /// </summary>
        /// <param name="hechosDeTipoPasivo"></param>
        /// <returns></returns>
        private IDictionary<string,IList<HechoDto>> OrganizarHechosPorSecuencia(DocumentoInstanciaXbrlDto instancia, IList<HechoDto> hechosDeTipoPasivo)
        {
            ContextoDto contexto = null;
            String secuencia = null;
            var hechosAgrupados = new Dictionary<string,IList<HechoDto>>();
            foreach (var hecho in hechosDeTipoPasivo)
            {
                contexto = instancia.ContextosPorId[hecho.IdContexto];
                secuencia = ObtenerSecuenciaDeContexto(contexto,_idDimensionSecuencia);
                if (secuencia != null)
                {
                    if (!hechosAgrupados.ContainsKey(secuencia))
                    {
                        hechosAgrupados[secuencia] = new List<HechoDto>();
                    }
                    hechosAgrupados[secuencia].Add(hecho);
                }
            }
            return hechosAgrupados;
        }

        /// <summary>
        /// Obtiene el contenido del valor de secuencia de un contexto con la dimension Typed indicada
        /// en el parámetro
        /// </summary>
        /// <param name="contexto"></param>
        /// <param name="_idDimensionSecuencia"></param>
        /// <returns></returns>
        private string ObtenerSecuenciaDeContexto(ContextoDto contextoDto, string idDimension)
        {
            var dimensionesContexto = new List<DimensionInfoDto>();
            if (contextoDto.ValoresDimension != null)
            {
                dimensionesContexto.AddRange(contextoDto.ValoresDimension);
            }
            if (contextoDto.Entidad.ValoresDimension != null)
            {
                dimensionesContexto.AddRange(contextoDto.Entidad.ValoresDimension);
            }
            foreach (var dimActual in dimensionesContexto)
            {
                if (idDimension.Equals(dimActual.IdDimension))
                {
                    if (dimActual.ElementoMiembroTipificado != null)
                    {
                        int startIndex = dimActual.ElementoMiembroTipificado.IndexOf('>');
                        int endIndex = dimActual.ElementoMiembroTipificado.LastIndexOf('<');
                        if (startIndex >= 0 && endIndex >= 0 && endIndex > startIndex)
                        {
                            return dimActual.ElementoMiembroTipificado.Substring(startIndex+1, endIndex - startIndex-1).Trim() ;
                        }
                    }
                }
            }
            return null;
        }
        /// <summary>
        /// Filtra los hechos por concepto y opcionalmente secuencia de la dimensión typed
        /// </summary>
        /// <param name="hechos"></param>
        /// <param name="idConcpeto"></param>
        /// <param name="secuencia"></param>
        /// <returns></returns>
        IList<HechoDto> ObtenerHechosPorElementoPrimarioYSecuencia(DocumentoInstanciaXbrlDto instancia,IList<HechoDto> hechos, string idConcpeto, string secuencia)
        {
            List<HechoDto> hechosFinales = new List<HechoDto>();
            foreach (var hecho in hechos)
            {
                if (hecho.IdConcepto.Equals(idConcpeto))
                {
                    if (secuencia == null)
                    {
                        hechosFinales.Add(hecho);
                    }
                    else
                    {
                        if (ContextoContieneSecuencia(instancia.ContextosPorId[hecho.IdContexto],_idDimensionSecuencia,secuencia))
                        {
                            hechosFinales.Add(hecho);
                        }
                    }
                }
            }
            return hechosFinales;
        }

        /// <summary>
        /// Verifica si el contexto contiene la secuencia buscada en sus valores dimensionales (dimension typed)
        /// </summary>
        /// <param name="contextoDto"></param>
        /// <param name="secuencia"></param>
        /// <returns></returns>
        private bool ContextoContieneSecuencia(ContextoDto contextoDto,string idDimension, string secuencia)
        {
            var dimensionesContexto = new List<DimensionInfoDto>();
            if (contextoDto.ValoresDimension != null)
            {
                dimensionesContexto.AddRange(contextoDto.ValoresDimension);
            }
            if (contextoDto.Entidad.ValoresDimension != null)
            {
                dimensionesContexto.AddRange(contextoDto.Entidad.ValoresDimension);
            }
            foreach (var dimActual in dimensionesContexto)
            {
                if (idDimension.Equals(dimActual.IdDimension) )
                {
                    if (dimActual.ElementoMiembroTipificado != null && dimActual.ElementoMiembroTipificado.Contains(">"+secuencia+"<"))
                    {
                        return true;
                    }
                    
                }
            }
            return false;
        }

        /// <summary>
        /// Consulta todos los hechos del documento que tienen la dimensión tipo de pasivo en su contexto y cuyo miembro
        /// corresponde al tipo de pasivo enviado como parámetro
        /// </summary>
        /// <param name="instancia"></param>
        /// <param name="plantillaDocumento"></param>
        /// <param name="tipoPasivoActual"></param>
        /// <returns></returns>
        private IList<HechoDto> ObtenerHechosPorDimensionYMiembro(DocumentoInstanciaXbrlDto instancia, IDefinicionPlantillaXbrl plantillaDocumento,string idDimension, string idItemMiembro)
        {
            var listaHechos = new List<HechoDto>();
            foreach(var contextoActual in instancia.ContextosPorId.Values){
                if (ContieneDimension(idDimension, idItemMiembro, contextoActual))
                {
                    if(instancia.HechosPorIdContexto.ContainsKey(contextoActual.Id)){
                        foreach(var idHecho in instancia.HechosPorIdContexto[contextoActual.Id]){
                            listaHechos.Add(instancia.HechosPorId[idHecho]);
                        }
                    }
                }
            }
            return listaHechos;
        }
        /// <summary>
        /// Verifica si el contexto contiene la información de dimensión y miembro enviada como paráemtro
        /// </summary>
        /// <param name="_idDimensionTipoPasivo"></param>
        /// <param name="tipoPasivoActual"></param>
        /// <param name="contextoActual"></param>
        /// <returns></returns>
        private bool ContieneDimension(string idDimensionBuscada, string idMiembroBuscado, ContextoDto contextoActual)
        {
            var dimensionesContexto = new List<DimensionInfoDto>();
            if (contextoActual.ValoresDimension != null)
            {
                dimensionesContexto.AddRange(contextoActual.ValoresDimension);
            }
            if (contextoActual.Entidad.ValoresDimension != null)
            {
                dimensionesContexto.AddRange(contextoActual.Entidad.ValoresDimension);
            }
            foreach (var dimActual in dimensionesContexto)
            {
                if (idDimensionBuscada.Equals(dimActual.IdDimension) && idMiembroBuscado.Equals(dimActual.IdItemMiembro))
                {
                    return true;
                }
            }
            return false;
        }

        /// <summary>
        /// Localiza el valor del tipo de pasivo actual enviado como parámetro en la columna donde
        /// se localiza el dato
        /// </summary>
        /// <param name="hojaAExportar">Hoja de excel donde se busca el dato</param>
        /// <param name="IdTipoPasivoActual">Tipo de pasivo buscado</param>
        /// <param name="columnaTituloTipoPasivo">Columna donde se busca el tipo de pasivo</param>
        /// <returns></returns>
        private int LocalizarRenglonTipoPasivo(NPOI.SS.UserModel.ISheet hojaAExportar, string IdTipoPasivoActual, int columnaTituloTipoPasivo)
        {
            var numRenglones = hojaAExportar.LastRowNum;

            for(int renglonActual = 0;renglonActual <= numRenglones;renglonActual++)
            {
                var valorCelda = ExcelUtil.ObtenerValorCelda(hojaAExportar, renglonActual, columnaTituloTipoPasivo);
                if (!String.IsNullOrEmpty(valorCelda))
                {
                    if (valorCelda.Contains(IdTipoPasivoActual))
                    {
                        return renglonActual;
                    }
                }
            }
            return -1;
        }

        /// <summary>
        /// Importa los datos de un grupo de hechos que corresponden a un tipo de pasivo en específico
        /// </summary>
        private void ImportarGrupoTipoPasivo(ISheet hojaAImportar, int renglonTipoPasivo, string tipoPasivoActual, DocumentoInstanciaXbrlDto instancia,
            IDefinicionPlantillaXbrl plantillaDocumento, Common.Dtos.ResumenProcesoImportacionExcelDto resumenImportacion,IDictionary<string, string> secuenciasAsignadas,
            IList<string> etiquetasConceptosMiembro)
        {
            var hechosDeTipoPasivo = ObtenerHechosPorDimensionYMiembro(instancia, plantillaDocumento, _idDimensionTipoPasivo, tipoPasivoActual);
            int iCol = _columnaInicioDatos;
            int iRenglon = renglonTipoPasivo;

            string[] listaPrimarios = null;
            if (_miembrosBancarios.Contains(tipoPasivoActual))
            {
                listaPrimarios = _elementosPrimariosBancarios;
            }
            if (_miembrosBursatiles.Contains(tipoPasivoActual))
            {
                listaPrimarios = _elementosPrimariosBursatiles;
            }
            if (_miembrosOtros.Contains(tipoPasivoActual))
            {
                listaPrimarios = _elementosPrimariosOtros;
            }
            if (_idItemMiembroGranTotal.Equals(tipoPasivoActual))
            {
                listaPrimarios = _elementosPrimariosGranTotal;
            }


            if (_miembrosTipoPasivoTotales.Contains(tipoPasivoActual))
            {
                int iMiembroSubtabla = 0;
                var dimensiones = new List<DimensionInfoDto>() { 
                                        new DimensionInfoDto(){
                                            Explicita = true,
                                            IdDimension = _idDimensionTipoPasivo,
                                            IdItemMiembro = tipoPasivoActual
                                        }
                                    };
                var contextoTotales = BuscarOCrearContexto(instancia,plantillaDocumento,dimensiones,_idDimensionSecuencia,null,secuenciasAsignadas);
                foreach (var elementoPrimario in listaPrimarios)
                {
                    if (_elementosPrimariosTotal.Contains(elementoPrimario))
                    {
                        var valorImportar = ExcelUtil.ObtenerValorCelda(hojaAImportar,iRenglon,iCol);
                        if(!String.IsNullOrEmpty(valorImportar)){
                            HechoDto hechoActualizar = null;
                            if (elementoPrimario.Equals(_idConceptoSubtabla))
                            {
                                var dimensionesSubtabla = new List<DimensionInfoDto>();
                                dimensionesSubtabla.AddRange(dimensiones);
                                dimensionesSubtabla.Add(new DimensionInfoDto() {
                                    Explicita = true,
                                    IdDimension = _idDimensionIntervalo,
                                    IdItemMiembro = _miembrosIntervaloDeTiempo[iMiembroSubtabla]
                                });
                                var contextoSubtabla = BuscarOCrearContexto(instancia, plantillaDocumento, dimensionesSubtabla, _idDimensionSecuencia, null, secuenciasAsignadas);
                                var listaHechos = ObtenerHechosPorElementoPrimarioYSecuencia(instancia, hechosDeTipoPasivo, elementoPrimario, null);
                                listaHechos = FiltrarHechosPorDimensionYMiembro(instancia, listaHechos, _idDimensionIntervalo, _miembrosIntervaloDeTiempo[iMiembroSubtabla++]);
                                if (listaHechos.Count > 0)
                                {
                                    hechoActualizar = listaHechos[0];
                                }
                                else
                                {
                                    hechoActualizar = CrearHecho(instancia, plantillaDocumento, elementoPrimario, contextoSubtabla);
                                }
                            }
                            else
                            {
                                var listaHechos = ObtenerHechosPorElementoPrimarioYSecuencia(instancia, hechosDeTipoPasivo, elementoPrimario, null);
                                if (listaHechos.Count > 0)
                                {
                                    hechoActualizar = listaHechos[0];
                                }
                                else
                                {
                                    hechoActualizar = CrearHecho(instancia, plantillaDocumento, elementoPrimario, contextoTotales);
                                }
                            }
                            if (hechoActualizar != null)
                            {
                                ActualizarValorHecho(resumenImportacion, hechoActualizar, valorImportar, plantillaDocumento,instancia,hojaAImportar,iRenglon,iCol);
                            }
                        }
                    }
                    iCol++;
                }
            }
            else
            {
                //Inicio de un grupo de detalle de pasivos
                iRenglon++;
                
                var dimensiones = new List<DimensionInfoDto>() { 
                                        new DimensionInfoDto(){
                                            Explicita = true,
                                            IdDimension = _idDimensionTipoPasivo,
                                            IdItemMiembro = tipoPasivoActual
                                        }
                                    };
                bool finGrupo = false;
                while (!finGrupo)
                {
                    int iMiembroSubtabla = 0;
                    //Determinar la secuencia
                    string secuencia = null;
                    var nombrePasivo = ExcelUtil.ObtenerValorCelda(hojaAImportar, iRenglon, _columnaInicioDatos);
                    if (!String.IsNullOrEmpty(nombrePasivo))
                    {
                        secuencia = BuscarSecuenciaDePasivo(instancia,hechosDeTipoPasivo,nombrePasivo);
                        if (secuencia == null)
                        {
                            secuencia = ObtenerSiguienteSecuencia(secuenciasAsignadas);
                        }

                        var contextoDestino = BuscarOCrearContexto(instancia, plantillaDocumento, dimensiones, _idDimensionSecuencia, secuencia, secuenciasAsignadas);
                        iCol = _columnaInicioDatos;
                        foreach (var elementoPrimario in listaPrimarios)
                        { 
                            var valorImportar = ExcelUtil.ObtenerValorCelda(hojaAImportar,iRenglon,iCol);
                            if (!String.IsNullOrEmpty(valorImportar)) {
                                HechoDto hechoActualizar = null;
                                if (elementoPrimario.Equals(_idConceptoSubtabla))
                                {
                                    var dimensionesSubtabla = new List<DimensionInfoDto>();
                                    dimensionesSubtabla.AddRange(dimensiones);
                                    dimensionesSubtabla.Add(new DimensionInfoDto()
                                    {
                                        Explicita = true,
                                        IdDimension = _idDimensionIntervalo,
                                        IdItemMiembro = _miembrosIntervaloDeTiempo[iMiembroSubtabla]
                                    });
                                    var contextoSubtabla = BuscarOCrearContexto(instancia, plantillaDocumento, dimensionesSubtabla, _idDimensionSecuencia, secuencia, secuenciasAsignadas);
                                    var listaHechos = ObtenerHechosPorElementoPrimarioYSecuencia(instancia, hechosDeTipoPasivo, elementoPrimario, secuencia);
                                    listaHechos = FiltrarHechosPorDimensionYMiembro(instancia, listaHechos, _idDimensionIntervalo, _miembrosIntervaloDeTiempo[iMiembroSubtabla++]);
                                    if (listaHechos.Count > 0)
                                    {
                                        hechoActualizar = listaHechos[0];
                                    }
                                    else
                                    {
                                        hechoActualizar = CrearHecho(instancia, plantillaDocumento, elementoPrimario, contextoSubtabla);
                                    }
                                }
                                else
                                {
                                    var listaHechos = ObtenerHechosPorElementoPrimarioYSecuencia(instancia, hechosDeTipoPasivo, elementoPrimario, secuencia);
                                    if (listaHechos.Count > 0)
                                    {
                                        hechoActualizar = listaHechos[0];
                                    }
                                    else
                                    {
                                        hechoActualizar = CrearHecho(instancia, plantillaDocumento, elementoPrimario, contextoDestino);
                                    }
                                }
                                if (hechoActualizar != null)
                                {
                                    ActualizarValorHecho(resumenImportacion, hechoActualizar, valorImportar, plantillaDocumento, instancia, hojaAImportar, iRenglon, iCol);
                                }
                            }

                            iCol++;
                        }
                    }


                    iRenglon++;
                    finGrupo = iRenglon > hojaAImportar.LastRowNum ||
                         etiquetasConceptosMiembro.Contains(ExcelUtil.ObtenerValorCelda(hojaAImportar, iRenglon, _columnaTituloTipoPasivo));
                }
            }
        }

        /// <summary>
        /// Busca la secuencia correspondiente a un hecho que corresponde a la descripción del pasivo y cuyo
        /// valor es igual al nombre de pasivo enviado como parámetro
        /// </summary>
        /// <param name="hechosDeTipoPasivo"> Conjunto de hechos a buscar</param>
        /// <param name="nombrePasivo">Valor buscado</param>
        /// <returns></returns>
        private string BuscarSecuenciaDePasivo(DocumentoInstanciaXbrlDto instancia,IList<HechoDto> hechosDeTipoPasivo, string nombrePasivo)
        {
            if (hechosDeTipoPasivo != null)
            {
                var hecho = hechosDeTipoPasivo.Where(x => _elementosDescripcionPasivo.Contains(x.IdConcepto)).Where(x => x.Valor == nombrePasivo).FirstOrDefault();
                if (hecho != null)
                {
                    return ObtenerSecuenciaDeContexto(instancia.ContextosPorId[hecho.IdContexto],_idDimensionSecuencia);
                }
            }
            return null;
        }


        /// <summary>
        /// Busca o crea un contexto con las características requeridas
        /// </summary>
        /// <returns></returns>
        private ContextoDto BuscarOCrearContexto(DocumentoInstanciaXbrlDto instancia,IDefinicionPlantillaXbrl plantillaDocumento,IList<DimensionInfoDto> dimensiones,
            String idDimensionSecuencia, String secuenciaBuscada, IDictionary<string,string> secuenciasAsignadas)
        {
            ContextoDto ctxDestino = null;

            foreach(var ctx in instancia.ContextosPorId.Values){
                //Verificar los contextos con 2 y 3 dimensiojnes
                if (ctx.ValoresDimension != null && ctx.ValoresDimension.Count == (dimensiones.Count + 1))
                {
                    var encontrado = true;
                    foreach (var dimBuscada in dimensiones)
                    {
                        if (!ContieneDimension(dimBuscada.IdDimension, dimBuscada.IdItemMiembro, ctx))
                        {
                            encontrado = false;
                            break;
                        }
                    }
                    if (encontrado)
                    {
                        if (secuenciaBuscada != null)
                        {
                            if (ContextoContieneSecuencia(ctx, idDimensionSecuencia, secuenciaBuscada))
                            {
                                ctxDestino = ctx;
                                break;
                            }
                            else
                            {
                                encontrado = false;
                            }
                        }
                        else
                        {
                            ctxDestino = ctx;
                            break;
                        }
                    }
                }
            }

            if (ctxDestino == null)
            {

                var dimensionesFinales = new List<DimensionInfoDto>();

                foreach (var dimBuscada in dimensiones){
                    dimensionesFinales.Add(new DimensionInfoDto() { 
                        Explicita = dimBuscada.Explicita,
                        IdDimension = dimBuscada.IdDimension,
                        QNameDimension = instancia.Taxonomia.ConceptosPorId[dimBuscada.IdDimension].EspacioNombres+":"+instancia.Taxonomia.ConceptosPorId[dimBuscada.IdDimension].Nombre,
                        IdItemMiembro = dimBuscada.IdItemMiembro,
                        QNameItemMiembro = instancia.Taxonomia.ConceptosPorId[dimBuscada.IdItemMiembro].EspacioNombres + ":" + instancia.Taxonomia.ConceptosPorId[dimBuscada.IdItemMiembro].Nombre
                    });
                }
                var secuenciaFinal = secuenciaBuscada;
                if (secuenciaFinal == null)
                {
                    secuenciaFinal = ObtenerSiguienteSecuencia(secuenciasAsignadas);
                }
                dimensionesFinales.Add(new DimensionInfoDto()
                    {
                        Explicita = false,
                        IdDimension = idDimensionSecuencia,
                        QNameDimension = instancia.Taxonomia.ConceptosPorId[idDimensionSecuencia].EspacioNombres + ":" + instancia.Taxonomia.ConceptosPorId[idDimensionSecuencia].Nombre,
                        ElementoMiembroTipificado = String.Format(_elementoTypedSecuencia, secuenciaFinal)
                    });
                
                DateTime fechaInstante = DateTime.MinValue;
                XmlUtil.ParsearUnionDateTime(plantillaDocumento.ObtenerVariablePorId("fecha_2015_09_30"), out fechaInstante);
                ctxDestino = new ContextoDto()
                {
                    Entidad = new EntidadDto()
                    {
                        ContieneInformacionDimensional = false,
                        EsquemaId = plantillaDocumento.ObtenerVariablePorId("esquemaEntidad"),
                        Id = plantillaDocumento.ObtenerVariablePorId("nombreEntidad")

                    },
                    ContieneInformacionDimensional = dimensionesFinales.Count > 0,
                    ValoresDimension = dimensionesFinales,
                    Periodo = new PeriodoDto()
                    {
                        Tipo = PeriodoDto.Instante,
                        FechaInicio = DateTime.MinValue,
                        FechaFin = DateTime.MinValue,
                        FechaInstante = fechaInstante
                    },

                    Id = "C_AA" + Guid.NewGuid().ToString()
                };
                plantillaDocumento.InyectarContextoADocumentoInstancia(ctxDestino);
                secuenciasAsignadas[secuenciaFinal] = ctxDestino.Id;
            }

            return ctxDestino;
        }
        /// <summary>
        /// Obtiene la siguiente secuencia disponible en el índice de secuencias
        /// </summary>
        /// <param name="secuenciasAsignadas"></param>
        /// <returns></returns>
        private string ObtenerSiguienteSecuencia(IDictionary<string, string> secuenciasAsignadas)
        {
            for (int iSeq = 1; iSeq <= 150000; iSeq++)
            {
                var stringSeq = iSeq.ToString();
                if (!secuenciasAsignadas.ContainsKey(stringSeq))
                {
                    return stringSeq;
                }
            }
            return "0";
        }

        /// <summary>
        /// Crea un nuevo hecho en el documento de instancia basado en los parámetros enviados.
        /// </summary>
        /// <returns></returns>
        private HechoDto CrearHecho(DocumentoInstanciaXbrlDto instancia, IDefinicionPlantillaXbrl plantillaDocumento,string idConcepto,
            ContextoDto contextoDestino)
        {
            HechoDto hechoNuevo = null;
            ConceptoDto concepto = instancia.Taxonomia.ConceptosPorId[idConcepto];
            UnidadDto unidadDestino = null;
            if (concepto.EsTipoDatoNumerico)
            {
                //Si es moentario
                var listaMedidas = new List<MedidaDto>();

                if (concepto.TipoDatoXbrl.Contains(TiposDatoXBRL.MonetaryItemType))
                {
                    listaMedidas.Add(new MedidaDto()
                    {
                        EspacioNombres = plantillaDocumento.ObtenerVariablePorId("medida_http___www_xbrl_org_2003_iso4217"),
                        Nombre = plantillaDocumento.ObtenerVariablePorId("medida_MXN")
                    });

                }
                else
                {
                    //Unidad pure
                    listaMedidas.Add(new MedidaDto()
                    {
                        EspacioNombres = plantillaDocumento.ObtenerVariablePorId("medida_http___www_xbrl_org_2003_instance"),
                        Nombre = plantillaDocumento.ObtenerVariablePorId("medida_pure")
                    });

                }

                var unidades = instancia.BuscarUnidades(Unit.Medida, listaMedidas, null);
                if (unidades == null || unidades.Count == 0)
                {
                    unidadDestino = new UnidadDto()
                    {
                        Id = "U" + Guid.NewGuid().ToString(),
                        Tipo = Unit.Medida,
                        Medidas = listaMedidas
                    };
                    instancia.UnidadesPorId.Add(unidadDestino.Id, unidadDestino);
                }
                else
                {
                    unidadDestino = unidades[0];
                }

            }
            
            hechoNuevo = instancia.CrearHecho(concepto.Id, unidadDestino != null ? unidadDestino.Id : null, contextoDestino.Id, "A" + Guid.NewGuid().ToString());
            if (concepto.EsTipoDatoNumerico)
            {
                hechoNuevo.Decimales = _valorDecimalesHechos;
            }
            plantillaDocumento.InyectaHechoADocumentoInstancia(hechoNuevo);

            return hechoNuevo;
        }

        /// <summary>
        /// Actualiza el valor de un hecho en el documento de instancia
        /// </summary>
        /// <param name="resumenImportacion"></param>
        /// <param name="hechoActualizar"></param>
        /// <param name="valorImportar"></param>
        /// <param name="plantillaDocumento"></param>
        private void ActualizarValorHecho(Common.Dtos.ResumenProcesoImportacionExcelDto resumenImportacion, HechoDto hechoActualizar, string valorImportar,
            IDefinicionPlantillaXbrl plantillaDocumento, DocumentoInstanciaXbrlDto instancia, ISheet hojaImportar, int iRenglon, int columna)
        {
            var concepto = instancia.Taxonomia.ConceptosPorId[hechoActualizar.IdConcepto];
            if (!ActualizarValor(concepto, valorImportar, hechoActualizar, plantillaDocumento))
            {
                resumenImportacion.AgregarErrorFormato(
                                    UtilAbax.ObtenerEtiqueta(instancia.Taxonomia, concepto.Id),
                                    hojaImportar.SheetName,
                                    iRenglon.ToString(),
                                    "0",
                                    valorImportar);
            }
            else
            {
                resumenImportacion.TotalHechosImportados++;
                var hechoImportado = new AbaxXBRLCore.Common.Dtos.InformacionHechoImportadoExcelDto()
                {
                    IdConcepto = hechoActualizar.IdConcepto,
                    IdHecho = hechoActualizar.Id,
                    ValorImportado = valorImportar,
                    HojaExcel = hojaImportar.SheetName,
                    Renglon = iRenglon,
                    Columna = columna
                };
                resumenImportacion.AgregarHechoImportado(hechoImportado, UtilAbax.ObtenerEtiqueta(instancia.Taxonomia, hechoActualizar.Id));
            }
        }
        /// <summary>
        /// Actualiza el valor de un hecho en base a su tipo y valor
        /// </summary>
        /// <param name="concepto"></param>
        /// <param name="valorCelda"></param>
        /// <param name="hechoNuevo"></param>
        private Boolean ActualizarValor(ConceptoDto concepto, string valorCelda, AbaxXBRLCore.Viewer.Application.Dto.HechoDto hechoNuevo, IDefinicionPlantillaXbrl plantilla)
        {
            var fechaDefault = plantilla.ObtenerVariablePorId("fecha_2015_09_30");

            return UtilAbax.ActualizarValorHecho(concepto, hechoNuevo, valorCelda, fechaDefault);

        }

        public void ExportarRolADocumentoWord(Aspose.Words.Document word, Aspose.Words.Section section, Dto.DocumentoInstanciaXbrlDto instancia, string rol, Model.IDefinicionPlantillaXbrl plantillaDocumento, string claveIdioma)
        {
            throw new NotImplementedException();
        }
    }
}
