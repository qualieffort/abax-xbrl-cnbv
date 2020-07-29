using AbaxXBRL.Constantes;
using AbaxXBRL.Taxonomia;
using AbaxXBRL.Util;

using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.Viewer.Application.Dto;
using AbaxXBRLCore.Viewer.Application.Model;
using Aspose.Words;
using Aspose.Words.Tables;
using NPOI.SS.UserModel;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Globalization;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Viewer.Application.Import.Impl
{
    /// <summary>
    /// Implementación específica para la importación y exportación del rol 610000 
    /// de la taxonomía 2014 IFRS de BMV
    /// </summary>
    /// <author>Emigido Hernandez</author>
    public class ImportadorExportadorRol610000Bmv2014 : IImportadorExportadorRolDocumento
    {
        ///
        /// Variables de configuración de la plantilla de captura
        ///
        private static int _renglonInicioHechos = 6;
        private static int _columnaIdConcepto = 0;
        private static int _columnaInicioHechos = 1;
        private static int _renglonDimensionComponentesCapital = 4;
        private static int _renglonMiembroComponentesCapital = 5;
        private static int _renglonCapitalInicial = 6;
        private static int _renglonFinalAjustesRetrospectivos = 12;
        private static int _renglonCapitalFinal = 31;
        private static string _valorDecimalesHechos = "-3";
        private static string _idDimensionAjustes = "ifrs-full_RetrospectiveApplicationAndRetrospectiveRestatementAxis";
        private static string _idItemMiembroSenialadoActualmenteAjustes = "ifrs-full_RestatedMember";
        private static String[] _itemsAjustes = new String[]
                               {
                                   "ifrs-full_RestatedMember",
                                   "ifrs-full_PreviouslyStatedMember",
                                   "ifrs-full_IncreaseDecreaseDueToChangesInAccountingPolicyAndCorrectionsOfPriorPeriodErrorsMember",
                                   "ifrs-full_FinancialEffectOfChangesInAccountingPolicyMember",
                                   "ifrs-full_IncreaseDecreaseDueToChangesInAccountingPolicyRequiredByIFRSsMember",
                                   "ifrs-full_IncreaseDecreaseDueToVoluntaryChangesInAccountingPolicyMember",
                                   "ifrs-full_FinancialEffectOfCorrectionsOfAccountingErrorsMember"
                               };

        private static String[] _itemComponentesCapital = new string[]
                                         {
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
                                            "ifrs-full_NoncontrollingInterestsMember",
                                            "ifrs-full_EquityMember"
                                         };

        private static String[] _elementosPrimarios = new string[]
                                     {
                                         "ifrs-full_Equity",
                                         "ifrs-full_ProfitLoss",
                                         "ifrs-full_OtherComprehensiveIncome",
                                         "ifrs-full_ComprehensiveIncome",
                                         "ifrs-full_IssueOfEquity",
                                         "ifrs-full_DividendsPaid",
                                         "ifrs-full_IncreaseDecreaseThroughOtherContributionsByOwners",
                                         "ifrs-full_IncreaseDecreaseThroughOtherDistributionsToOwners",
                                         "ifrs-full_IncreaseDecreaseThroughTransfersAndOtherChangesEquity",
                                         "ifrs-full_IncreaseDecreaseThroughTreasuryShareTransactions",
                                         "ifrs-full_IncreaseDecreaseThroughChangesInOwnershipInterestsInSubsidiariesThatDoNotResultInLossOfControl",
                                         "ifrs-full_IncreaseDecreaseThroughSharebasedPaymentTransactions",
                                         "ifrs-full_AmountRemovedFromReserveOfCashFlowHedgesAndIncludedInInitialCostOrOtherCarryingAmountOfNonfinancialAssetLiabilityOrFirmCommitmentForWhichFairValueHedgeAccountingIsApplied",
                                         "ifrs-full_AmountRemovedFromReserveOfChangeInValueOfTimeValueOfOptionsAndIncludedInInitialCostOrOtherCarryingAmountOfNonfinancialAssetLiabilityOrFirmCommitmentForWhichFairValueHedgeAccountingIsApplied",
                                         "ifrs-full_AmountRemovedFromReserveOfChangeInValueOfForwardElementsOfForwardContractsAndIncludedInInitialCostOrOtherCarryingAmountOfNonfinancialAssetLiabilityOrFirmCommitmentForWhichFairValueHedgeAccountingIsApplied",
                                         "ifrs-full_AmountRemovedFromReserveOfChangeInValueOfForeignCurrencyBasisSpreadsAndIncludedInInitialCostOrOtherCarryingAmountOfNonfinancialAssetLiabilityOrFirmCommitmentForWhichFairValueHedgeAccountingIsApplied",
                                         "ifrs-full_ChangesInEquity",
                                         "ifrs-full_Equity"
                                     };

        private static String[] _anios = new string[]{"A","P"};
        /// <summary>
        /// Cantidad de tablas a mostrar por periodo.
        /// </summary>
        private int TablasPorPeriodo = 3;
        public void ImportarDatosDeHojaExcel(ISheet hojaAImportar, ISheet hojaPlantilla, DocumentoInstanciaXbrlDto instancia, string rol,
            AbaxXBRLCore.Common.Dtos.ResumenProcesoImportacionExcelDto resumenImportacion, Model.IDefinicionPlantillaXbrl plantillaDocumento)
        {
            var numRenglones = hojaAImportar.LastRowNum;
            for (var iRenglon = _renglonInicioHechos; iRenglon <= numRenglones; iRenglon++)
            {
                var idElementoPrimario = ExcelUtil.ObtenerIdConceptoDeCelda(hojaPlantilla, iRenglon, _columnaIdConcepto);
                if (idElementoPrimario != null && instancia.Taxonomia.ConceptosPorId.ContainsKey(idElementoPrimario))
                {
                    var concepto = instancia.Taxonomia.ConceptosPorId[idElementoPrimario];
                    var EsAbstracto = concepto.EsAbstracto != null ? concepto.EsAbstracto.Value : false;

                    if (!EsAbstracto || (concepto.EsMiembroDimension != null && concepto.EsMiembroDimension.Value))
                    {
                        var idItemAjustes = _idItemMiembroSenialadoActualmenteAjustes;
                        //Si el concepto es un miembro de dimension, entonces se expresa el capital inicial para ese miembro
                        if (concepto.EsMiembroDimension != null && concepto.EsMiembroDimension.Value)
                        {
                            //Cambiar el concepto a capital contable y colocar el concepto a describir como miembro de la dimensión ajustes
                            idItemAjustes = concepto.Id;
                            concepto = instancia.Taxonomia.ConceptosPorId[_elementosPrimarios[0]];
                        }
                        var numColumnas = hojaAImportar.GetRow(iRenglon).LastCellNum;
                        for (int iCol = _columnaInicioHechos; iCol <= numColumnas; iCol++)
                        {
                            var valorCelda = ExcelUtil.ObtenerValorCelda(hojaAImportar, iRenglon, iCol);
                            if (!String.IsNullOrEmpty(valorCelda))
                            {
                                var valorDimensionAjustes = new DimensionInfoDto()
                                {
                                    IdDimension = _idDimensionAjustes,
                                    IdItemMiembro = idItemAjustes,
                                    QNameDimension = instancia.Taxonomia.ConceptosPorId[_idDimensionAjustes].EspacioNombres+":"+instancia.Taxonomia.ConceptosPorId[_idDimensionAjustes].Nombre,
                                    QNameItemMiembro = instancia.Taxonomia.ConceptosPorId[idItemAjustes].EspacioNombres + ":" + instancia.Taxonomia.ConceptosPorId[idItemAjustes].Nombre,
                                    Explicita = true
                                };
                                var idDimensionCapital = ExcelUtil.ObtenerIdConceptoDeCelda(hojaPlantilla, _renglonDimensionComponentesCapital, _columnaInicioHechos);
                                var idItemCapital = ExcelUtil.ObtenerIdConceptoDeCelda(hojaPlantilla, _renglonMiembroComponentesCapital, iCol);

                                if (!String.IsNullOrEmpty(idItemCapital) && instancia.Taxonomia.ConceptosPorId.ContainsKey(idItemCapital)) {

                                    var valorDimensionComponentesCapital = new DimensionInfoDto()
                                    {
                                        IdDimension = idDimensionCapital,
                                        IdItemMiembro = idItemCapital,
                                        QNameDimension = instancia.Taxonomia.ConceptosPorId[idDimensionCapital].EspacioNombres + ":" + instancia.Taxonomia.ConceptosPorId[idDimensionCapital].Nombre,
                                        QNameItemMiembro = instancia.Taxonomia.ConceptosPorId[idItemCapital].EspacioNombres + ":" + instancia.Taxonomia.ConceptosPorId[idItemCapital].Nombre,
                                        Explicita = true
                                    };

                                    if (!String.IsNullOrEmpty(valorDimensionAjustes.IdDimension) && !String.IsNullOrEmpty(valorDimensionAjustes.IdItemMiembro) &&
                                        !String.IsNullOrEmpty(valorDimensionComponentesCapital.IdDimension) &&
                                        !String.IsNullOrEmpty(valorDimensionComponentesCapital.IdItemMiembro))
                                    {
                                        DateTime fechaInicio = DateTime.MinValue;
                                        DateTime fechaFin = DateTime.MinValue;
                                        var variableFechaFin = hojaPlantilla.SheetName.Contains("Actual") ? "fecha_2015_09_30" : "fecha_2014_09_30";
                                        var variableFechaInicio = hojaPlantilla.SheetName.Contains("Actual") ? "fecha_2015_01_01" : "fecha_2014_01_01";
                                        if (XmlUtil.ParsearUnionDateTime(plantillaDocumento.ObtenerVariablePorId(variableFechaFin), out fechaFin)
                                            &&
                                            XmlUtil.ParsearUnionDateTime(plantillaDocumento.ObtenerVariablePorId(variableFechaInicio), out fechaInicio))
                                        {
                                            //Si es capital contable al inicio se envía de fecha de fin = fecha de inicio - 1 día
                                            //Si es capital contable al final se envía fecha de fin = fecha de fin
                                            if (iRenglon <= _renglonFinalAjustesRetrospectivos)
                                            {
                                                fechaFin = fechaInicio.AddDays(-1);
                                            }
                                            var listaDimensiones = new List<DimensionInfoDto>();

                                            if (instancia.Taxonomia.DimensionDefaults.ContainsKey(valorDimensionAjustes.IdDimension) &&
                                                !valorDimensionAjustes.IdItemMiembro.Equals(instancia.Taxonomia.DimensionDefaults[valorDimensionAjustes.IdDimension]))
                                            {
                                                listaDimensiones.Add(valorDimensionAjustes);
                                            }
                                            if (instancia.Taxonomia.DimensionDefaults.ContainsKey(valorDimensionComponentesCapital.IdDimension) &&
                                                !valorDimensionComponentesCapital.IdItemMiembro.Equals(instancia.Taxonomia.DimensionDefaults[valorDimensionComponentesCapital.IdDimension]))
                                            {
                                                listaDimensiones.Add(valorDimensionComponentesCapital);
                                            }

                                            ActualizarValorHecho(concepto, valorCelda,
                                                listaDimensiones,
                                                fechaInicio, fechaFin,
                                                plantillaDocumento.ObtenerVariablePorId("esquemaEntidad") + ":" + plantillaDocumento.ObtenerVariablePorId("nombreEntidad"),
                                                instancia, plantillaDocumento, resumenImportacion, hojaAImportar, iRenglon, iCol
                                                );
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        private void ActualizarValorHecho(ConceptoDto concepto, string valorCelda, List<DimensionInfoDto> dimensiones,
            DateTime fechaInicio, DateTime fechaFin, string qNameEntidad, DocumentoInstanciaXbrlDto instancia, IDefinicionPlantillaXbrl plantillaDocumento,
             AbaxXBRLCore.Common.Dtos.ResumenProcesoImportacionExcelDto resumenImportacion,ISheet hojaImportar, int iRenglon, int columna)
        {
            var fechaDefault = plantillaDocumento.ObtenerVariablePorId("fecha_2015_01_01");
            List<HechoDto> hechosAActualizar = new List<HechoDto>();
            var hechos = instancia.BuscarHechos(concepto.Id, null, null, fechaInicio, fechaFin, dimensiones);
            if (hechos.Count > 0)
            {
                hechosAActualizar.AddRange(hechos);
            }
            else
            {
                
                var qNameCompleto = XmlUtil.ParsearQName(qNameEntidad);
                ContextoDto contextoDestino = null;
                var tipoPeriodo = concepto.TipoPeriodo.Equals(EtiquetasXBRLConstantes.Instant) ? Period.Instante : Period.Duracion;
                var contextos = instancia.BuscarContexto(qNameEntidad,
                    tipoPeriodo, fechaInicio, fechaFin, dimensiones);
                if (contextos == null || contextos.Count == 0)
                {
                    contextoDestino = new ContextoDto()
                    {
                        Entidad = new EntidadDto()
                        {
                            ContieneInformacionDimensional = false,
                            EsquemaId = qNameCompleto.Namespace,
                            Id = qNameCompleto.Name
                        },
                        ContieneInformacionDimensional = dimensiones.Count > 0,
                        Periodo = new PeriodoDto()
                        {
                            Tipo = tipoPeriodo,
                            FechaInicio = fechaInicio,
                            FechaFin = fechaFin,
                            FechaInstante = fechaFin
                        },
                        ValoresDimension = dimensiones,
                        Id = "CVCC" + Guid.NewGuid().ToString()
                    };
                    plantillaDocumento.InyectarContextoADocumentoInstancia(contextoDestino);

                }
                else
                {
                    contextoDestino = contextos[0];

                }

                UnidadDto unidadDestino = null;
                var listaMedidas = new List<MedidaDto>() { 
                    new MedidaDto(){
                        EspacioNombres = plantillaDocumento.ObtenerVariablePorId("medida_http___www_xbrl_org_2003_iso4217"),
                        Nombre = plantillaDocumento.ObtenerVariablePorId("medida_MXN")
                    }};

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
                var idHecho = "VCC" + Guid.NewGuid().ToString();
                var hechoNuevo = instancia.CrearHecho(concepto.Id, unidadDestino.Id, contextoDestino.Id, idHecho);
                hechoNuevo.Decimales = _valorDecimalesHechos;
                hechoNuevo.Valor = "0";
                plantillaDocumento.InyectaHechoADocumentoInstancia(hechoNuevo);

                hechosAActualizar.Add(hechoNuevo);

            }

            foreach(var hechoActualizar in hechosAActualizar){
                var conceptoImportar = instancia.Taxonomia.ConceptosPorId[hechoActualizar.IdConcepto];
                if (!UtilAbax.ActualizarValorHecho(conceptoImportar, hechoActualizar, valorCelda, fechaDefault))
                {
                    resumenImportacion.AgregarErrorFormato(
                        UtilAbax.ObtenerEtiqueta(instancia.Taxonomia, conceptoImportar.Id),
                        hojaImportar.SheetName,
                        iRenglon.ToString(),
                        columna.ToString(),
                        valorCelda);

                }
                else
                {
                    resumenImportacion.TotalHechosImportados++;
                    var hechoImportado = new AbaxXBRLCore.Common.Dtos.InformacionHechoImportadoExcelDto()
                    {
                        IdConcepto = hechoActualizar.IdConcepto,
                        IdHecho = hechoActualizar.Id,
                        ValorImportado = valorCelda,
                        HojaExcel = hojaImportar.SheetName,
                        Renglon = iRenglon,
                        Columna = columna
                    };

                    resumenImportacion.AgregarHechoImportado(hechoImportado, UtilAbax.ObtenerEtiqueta(instancia.Taxonomia, conceptoImportar.Id));

                }
            }
        }

        public void ExportarDatosDeHojaExcel(ISheet hojaAExportar, ISheet hojaPlantilla, DocumentoInstanciaXbrlDto instancia, string rol, Model.IDefinicionPlantillaXbrl plantillaDocumento,String idioma)
        {
            var numRenglones = hojaPlantilla.LastRowNum;
            
            for (var iRenglon = _renglonInicioHechos; iRenglon <= numRenglones; iRenglon++)
            {
                var idElementoPrimario = ExcelUtil.ObtenerIdConceptoDeCelda(hojaPlantilla, iRenglon, _columnaIdConcepto);
                if (idElementoPrimario != null && instancia.Taxonomia.ConceptosPorId.ContainsKey(idElementoPrimario))
                {
                    var concepto = instancia.Taxonomia.ConceptosPorId[idElementoPrimario];
                    var EsAbstracto = concepto.EsAbstracto != null ? concepto.EsAbstracto.Value : false;
                    if (!EsAbstracto || (concepto.EsMiembroDimension != null && concepto.EsMiembroDimension.Value))
                    {
                        var idItemAjustes = _idItemMiembroSenialadoActualmenteAjustes;
                        //Si el concepto es un miembro de dimension, entonces se expresa el capital inicial para ese miembro
                        if (concepto.EsMiembroDimension != null && concepto.EsMiembroDimension.Value)
                        {
                            //Cambiar el concepto a capital contable y colocar el concepto a describir como miembro de la dimensión ajustes
                            idItemAjustes = concepto.Id;
                            concepto = instancia.Taxonomia.ConceptosPorId[_elementosPrimarios[0]];
                        }
                        var numColumnas = hojaPlantilla.GetRow(iRenglon).LastCellNum;
                        for (int iCol = _columnaInicioHechos; iCol <= numColumnas; iCol++)
                        {
                            
                            var valorDimensionAjustes = new DimensionInfoDto()
                            {
                                IdDimension = _idDimensionAjustes,
                                IdItemMiembro = idItemAjustes,
                                Explicita = true
                            };
                            var valorDimensionComponentesCapital = new DimensionInfoDto()
                            {
                                IdDimension = ExcelUtil.ObtenerIdConceptoDeCelda(hojaPlantilla, _renglonDimensionComponentesCapital, _columnaInicioHechos),
                                IdItemMiembro = ExcelUtil.ObtenerIdConceptoDeCelda(hojaPlantilla, _renglonMiembroComponentesCapital, iCol),
                                Explicita = true
                            };

                            if (!String.IsNullOrEmpty(valorDimensionAjustes.IdDimension) && !String.IsNullOrEmpty(valorDimensionAjustes.IdItemMiembro) &&
                                !String.IsNullOrEmpty(valorDimensionComponentesCapital.IdDimension) &&
                                !String.IsNullOrEmpty(valorDimensionComponentesCapital.IdItemMiembro))
                            {
                                DateTime fechaInicio = DateTime.MinValue;
                                DateTime fechaFin = DateTime.MinValue;
                                var variableFechaFin = hojaPlantilla.SheetName.Contains("Actual") ? "fecha_2015_09_30" : "fecha_2014_09_30";
                                var variableFechaInicio = hojaPlantilla.SheetName.Contains("Actual") ? "fecha_2015_01_01" : "fecha_2014_01_01";
                                   
                                if (XmlUtil.ParsearUnionDateTime(plantillaDocumento.ObtenerVariablePorId(variableFechaFin), out fechaFin)
                                    &&
                                    XmlUtil.ParsearUnionDateTime(plantillaDocumento.ObtenerVariablePorId(variableFechaInicio), out fechaInicio))
                                {
                                    //Si es capital contable al inicio se envía de fecha de fin = fecha de inicio - 1 día
                                    //Si es capital contable al final se envía fecha de fin = fecha de fin
                                    if (iRenglon <= _renglonFinalAjustesRetrospectivos)
                                    {
                                        fechaFin = fechaInicio.AddDays(-1);
                                    }
                                    var listaDimensiones = new List<DimensionInfoDto>();

                                    if (instancia.Taxonomia.DimensionDefaults.ContainsKey(valorDimensionAjustes.IdDimension) &&
                                        !valorDimensionAjustes.IdItemMiembro.Equals(instancia.Taxonomia.DimensionDefaults[valorDimensionAjustes.IdDimension]))
                                    {
                                        listaDimensiones.Add(valorDimensionAjustes);
                                    }
                                    if (instancia.Taxonomia.DimensionDefaults.ContainsKey(valorDimensionComponentesCapital.IdDimension) &&
                                        !valorDimensionComponentesCapital.IdItemMiembro.Equals(instancia.Taxonomia.DimensionDefaults[valorDimensionComponentesCapital.IdDimension]))
                                    {
                                        listaDimensiones.Add(valorDimensionComponentesCapital);
                                    }

                                    var hechoDto = instancia.BuscarHechos(concepto.Id, null, null, fechaInicio, fechaFin,
                                        listaDimensiones);

                                    if (hechoDto != null && hechoDto.Count > 0)
                                    {
                                        ExcelUtil.AsignarValorCelda(hojaAExportar,iRenglon,iCol,hechoDto[0].Valor,
                                            concepto.EsTipoDatoNumerico?
                                            CellType.Numeric:CellType.String
                                            , hechoDto[0]);
                                    }

                                }
                            }
                        }
                    }
                }
            }
        }

        public void ExportarRolADocumentoWord(Document word, Section section, DocumentoInstanciaXbrlDto instancia, string rol, IDefinicionPlantillaXbrl plantillaDocumento, string claveIdioma)
        {
            DateTime fechaInicio = DateTime.MinValue;
            DateTime fechaFin = DateTime.MinValue;
            //Navegar por secciones
          
            for (var iAnio=0;iAnio<_anios.Length;iAnio++)
            {
                var variableFechaFin = _anios[iAnio].Equals("A") ? "fecha_2015_09_30" : "fecha_2014_09_30";
                var variableFechaInicio = _anios[iAnio].Equals("A") ? "fecha_2015_01_01" : "fecha_2014_01_01";
                var conAjustes = false;

                 if (XmlUtil.ParsearUnionDateTime(plantillaDocumento.ObtenerVariablePorId(variableFechaFin), out fechaFin)
                    &&
                    XmlUtil.ParsearUnionDateTime(plantillaDocumento.ObtenerVariablePorId(variableFechaInicio), out fechaInicio))
                 {
                    for (var iAjustes = 0; iAjustes < _itemsAjustes.Length; iAjustes++)
                    {
                        for (var iPrimario = 0; iPrimario < _elementosPrimarios.Length; iPrimario++)
                        {
                            for (var iComponentesCapital = 0;
                                iComponentesCapital < _itemComponentesCapital.Length;
                                iComponentesCapital++)
                            {
                                //Si es capital contable al inicio se envía de fecha de fin = fecha de inicio - 1 día
                                //Si es capital contable al final se envía fecha de fin = fecha de fin
                                DateTime fechaFinFinal = fechaFin;
                                if (iPrimario == 0)
                                {
                                    fechaFinFinal = fechaInicio.AddDays(-1);
                                }
                                var listaDimensiones = new List<DimensionInfoDto>();

                                if (iAjustes != 0)
                                {
                                    listaDimensiones.Add(new DimensionInfoDto()
                                    {
                                        Explicita = true,
                                        IdDimension = "ifrs-full_RetrospectiveApplicationAndRetrospectiveRestatementAxis",
                                        IdItemMiembro = _itemsAjustes[iAjustes]
                                    });
                                }
                                if (iComponentesCapital != 24)
                                {
                                    listaDimensiones.Add(new DimensionInfoDto()
                                    {
                                        Explicita = true,
                                        IdDimension = "ifrs-full_ComponentsOfEquityAxis",
                                        IdItemMiembro = _itemComponentesCapital[iComponentesCapital]
                                    });
                                }

                                var hechos = instancia.BuscarHechos(_elementosPrimarios[iPrimario], null, null, fechaInicio, fechaFinFinal,
                                    listaDimensiones);
                                if (hechos != null && hechos.Count > 0)
                                {
                                    //conHechos = true;
                                    string valorFinal = "$ ";

                                    double valorDouble = 0;
                                    if (Double.TryParse(hechos[0].Valor, NumberStyles.Any, CultureInfo.InvariantCulture,
                                        out valorDouble))
                                    {
                                        valorFinal = valorFinal + valorDouble.ToString("#,##0.00");
                                    }
                                    else
                                    {
                                        valorFinal = hechos[0].Valor;
                                    }

                                    section.Range.Replace("[" + _anios[iAnio] + "-" + iAjustes + "-" + iPrimario + "-" + iComponentesCapital + "]",
                                        valorFinal, false, false);
                                    if (iAjustes > 0)
                                    {
                                        conAjustes = true;
                                    }
                                }
                                else
                                {
                                    section.Range.Replace("[" + _anios[iAnio] + "-" + iAjustes + "-" + iPrimario + "-" + iComponentesCapital + "]",
                                           "", false, false);

                                }
                            }
                        }
                        
                    }
                    //Si no existen datos para ajustes, eliminar renglón  5 a 11
                    if (!conAjustes)
                    {
                        //Buscar la tabla para eliminar renglones
                        NodeCollection allTables = section.GetChildNodes(NodeType.Table, true);
                        var indiceInicioTablaBorrar = iAnio * TablasPorPeriodo;
                        for (int indiceTablaBorrar = 0; indiceTablaBorrar < TablasPorPeriodo; indiceTablaBorrar++)
                        {
                            for (int iBorrar = 11; iBorrar >= 5; iBorrar--)
                            {
                                ((Table)allTables[indiceTablaBorrar + indiceInicioTablaBorrar]).Rows.RemoveAt(iBorrar);
                            }
                        }
                    }
                }
            }
        }
    }
}
