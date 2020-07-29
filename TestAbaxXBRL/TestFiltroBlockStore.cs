using System;
using System.Collections.Generic;
using System.Diagnostics;
using AbaxXBRLBlockStore.BlockStore;
using AbaxXBRLBlockStore.Common.Entity;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace TestAbaxXBRL
{
    [TestClass]
    public class TestFiltroBlockStore
    {
        [TestMethod]
        public void TestFiltroBasico000()
        {
            var creaFiltros = new BlockStoreCrearFiltro();
            var entFiltroHechos = new EntFiltroBlockStoreHechos { EspacioNombresPrincipal= "http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_ics_entry_point_2014-12-05", IdEntidad = "MTROCB", ConceptoId = "ifrs-full_CurrentTradeReceivables", PeriodoFechaInicial = "null", PeriodoFechaFinal = "ISODate(\"2013-12-31T00:00:00Z\")", MedidaTipoMedidaNombre = "'MXN'" };
            var cadena = creaFiltros.crearCadenaFiltro(entFiltroHechos);
            Debug.Write(cadena);
        }

        [TestMethod]
        public void TestFiltroBasico001()
        {
            var creaFiltros = new BlockStoreCrearFiltro();
            var entFiltroHechos = new EntFiltroBlockStoreHechos { EspacioNombresPrincipal = "http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_ics_entry_point_2014-12-05", IdEntidad = "MTROCB", ConceptoId = "ifrs-full_AmountRemovedFromReserveOfCashFlowHedgesAndIncludedInInitialCostOrOtherCarryingAmountOfNonfinancialAssetLiabilityOrFirmCommitmentForWhichFairValueHedgeAccountingIsApplied", PeriodoFechaInicial = "ISODate(\"2013-01-01T00:00:00Z\")", PeriodoFechaFinal = "ISODate(\"2013-09-30T00:00:00Z\")", MedidaTipoMedidaNombre = "'MXN'", DimensionEspaciodeNombre = "'http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis'", DimensionNombre = "'ifrs-full_ComponentsOfEquityAxis'", DimensionNombreElementoMiembro = "'ifrs-full_EquityAttributableToOwnersOfParentMember'" };
            var cadena = creaFiltros.crearCadenaFiltro(entFiltroHechos);
            Debug.Write(cadena);
        }

        [TestMethod]
        public void TestFiltroBasico002()
        {
            var creaFiltros = new BlockStoreCrearFiltro();
            var entFiltroHechos = new EntFiltroBlockStoreHechos { EspacioNombresPrincipal= "http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_ics_entry_point_2014-12-05", IdEntidad = "MTROCB", ConceptoId = "ifrs_mx-cor_20141205_NumeroDeEmpleados", PeriodoFechaFinal = "ISODate(\"2012-12-31T00:00:00Z\")", MedidaTipoMedidaNombre = "'MXN'", MedidaTipoMedidaNumeradorNombre = "'shares'" };
            var cadena = creaFiltros.crearCadenaFiltro(entFiltroHechos);
            Debug.Write(cadena);
        }

        [TestMethod]
        public void TestFiltroBasico003()
        {
            var creaFiltros = new BlockStoreCrearFiltro();
            var entFiltroHechos = new EntFiltroBlockStoreHechos { EspacioNombresPrincipal = "http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_ics_entry_point_2014-12-05", IdEntidad = "MTROCB", ConceptoId = "ifrs_mx-cor_20141205_ColocacionesPrivadasQuirografarios", PeriodoFechaFinal = "ISODate(\"2014-09-30T00:00:00Z\")", MedidaTipoMedidaNombre = "'MXN'", DimensionEspaciodeNombre = "'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:DenominacionEje','http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:IntervaloDeTiempoEje', 'http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:InstitucionEje'", DimensionNombre = "'ifrs_mx-cor_20141205_DenominacionEje', 'ifrs_mx-cor_20141205_IntervaloDeTiempoEje', 'ifrs_mx-cor_20141205_InstitucionEje'", DimensionNombreElementoMiembro = "'ifrs_mx-cor_20141205_MonedaExtranjeraMiembro', 'ifrs_mx-cor_20141205_Hasta2AnosMiembro'", DimensionElementoMiembroTipificado = "'TOTAL'" };
            var cadena = creaFiltros.crearCadenaFiltro(entFiltroHechos);
            Debug.Write(cadena);
        }

        [TestMethod]
        public void TestFiltroBasico004()
        {
            var creaFiltros = new BlockStoreCrearFiltro();
            var entFiltroHechos = new EntFiltroBlockStoreHechos { EspacioNombresPrincipal= "http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_ics_entry_point_2014-12-05", IdEntidad = "MTROCB", ConceptoId = "ifrs-full_LevelOfRoundingUsedInFinancialStatements", PeriodoFechaInicial = "ISODate(\"2014-07-01T00:00:00Z\")", PeriodoFechaFinal = "ISODate(\"2014-09-30T00:00:00Z\")" };
            var cadena = creaFiltros.crearCadenaFiltro(entFiltroHechos);
            Debug.Write(cadena);
        }

        [TestMethod]
        public void TestFiltroCompuestoReporte()
        {
            var creaFiltros = new BlockStoreCrearFiltro();
            var entFiltroMultiHechos = new EntFiltroBlockStoreMultiHechos
            {
                EspacioNombresPrincipal = "http://www.bmv.com.mx/fr/ics/2012-04-01/ifrs-mx-ics-entryPoint-all",
                ListaIdEntidad = new List<string> { "ABNGOA", "ABCCB", "ABREGIO", "AC" },
                ListaPeriodo = new List<EntFiltroBlockStoreMultiHechos.EntFiltroPeriodos> { new EntFiltroBlockStoreMultiHechos.EntFiltroPeriodos { PeriodoFechaInicial = "ISODate(\"2014-01-01T00:00:00Z\")", PeriodoFecha = "ISODate(\"2014-06-01T00:00:00Z\")" } },
                ListaMedida = new List<EntFiltroBlockStoreMultiHechos.EntFiltroBlockStoreMedida> { new EntFiltroBlockStoreMultiHechos.EntFiltroBlockStoreMedida(), new EntFiltroBlockStoreMultiHechos.EntFiltroBlockStoreMedida { MedidaTipoMedidaNombre = "'MXN'" }, new EntFiltroBlockStoreMultiHechos.EntFiltroBlockStoreMedida { MedidaTipoMedidaNombre = "'USD'" } },
                ListaConceptoDimension = new List<EntFiltroBlockStoreMultiHechos.EntFiltroConceptoDimension>
                {
                    new EntFiltroBlockStoreMultiHechos.EntFiltroConceptoDimension{ ConceptoId="mx-ifrs-ics_UtilidadporFluctuacionCambiariaNeto"},
                    new EntFiltroBlockStoreMultiHechos.EntFiltroConceptoDimension{ ConceptoId="mx-ifrs-ics_UtilidadporCambiosValorRazonableInstrumentosFinancieros"}
                }
            };
            var cadena = creaFiltros.crearCadenaFiltro(entFiltroMultiHechos);
            Debug.Write(cadena.Count);
        }



    }
}
