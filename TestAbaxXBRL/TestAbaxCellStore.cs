using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Spring.Testing.Microsoft;
using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.CellStore.Services.Impl;
using Newtonsoft.Json;
using AbaxXBRLCore.Common.Entity;
using AbaxXBRLBlockStore.Services;

namespace TestAbaxXBRL
{
    [TestClass]
    public class TestAbaxCellStore : AbstractDependencyInjectionSpringContextTests
    {
        protected override string[] ConfigLocations
        {
            get
            {
                return new string[]
                {
                    "assembly://AbaxXBRLCore/AbaxXBRLCore.Config/common.xml",
                    "assembly://AbaxXBRLCore/AbaxXBRLCore.Config/repository.xml",
                    "assembly://AbaxXBRLCore/AbaxXBRLCore.Config.custom/services_desarrollo.xml",
                    "assembly://AbaxXBRLCore/AbaxXBRLCore.Config.custom/servicesrest_desarrollo_solo_mongo.xml",
                    //"assembly://AbaxXBRLCore/AbaxXBRLCore.Config.custom/servicesrest_desarrollo.xml",
                    //"assembly://AbaxXBRLCore/AbaxXBRLCore.Config.custom/servicesrest_mongodisable.xml",
                    "assembly://AbaxXBRLCore/AbaxXBRLCore.Config/bitacora.xml",
                    "assembly://AbaxXBRLCore/AbaxXBRLCore.Config/transaccion.xml",
                    "assembly://AbaxXBRLCore/AbaxXBRLCore.Config/templates.xml",
                    "assembly://AbaxXBRLCore/AbaxXBRLCore.Config/templatesold.xml",
                    "assembly://AbaxXBRLCore/AbaxXBRLCore.Config.Reports/reportesXBRL.xml",
                    "assembly://AbaxXBRLCore/AbaxXBRLCore.Config/connectionMongoDB.xml",
                    "assembly://AbaxXBRLCore/AbaxXBRLCore.Config/serviceBlockStore.xml",

                };
            }
        }

        //[TestMethod]
        public void TestConsultarTaxonomias()
        {
            LogUtil.LogDirPath = @"..\..\TestOutput\";
            LogUtil.Inicializa();

            var cellStoreService = (AbaxXBRLCellStoreService)applicationContext.GetObject("AbaxXBRLCellStoreService");

            var result = cellStoreService.ConsultarTaxonomias();
        }

        [TestMethod]
        public void TestConsultarRoles()
        {
            LogUtil.LogDirPath = @"..\..\TestOutput\";
            LogUtil.Inicializa();

            var cellStoreService = (AbaxXBRLCellStoreService)applicationContext.GetObject("AbaxXBRLCellStoreService");
            
            //var result = cellStoreService.ConsultarRoles("http://www.bmv.com.mx/2015-06-30/ccd/full_ifrs_ccd_entry_point_2015-06-30", "en");
            var result = cellStoreService.ConsultarRoles("http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/ar_O_entry_point_2016-08-22", "en");
        }

        //[TestMethod]
        public void TestConsultarConceptosTaxonomiaRol()
        {
            LogUtil.LogDirPath = @"..\..\TestOutput\";
            LogUtil.Inicializa();

            var cellStoreService = (AbaxXBRLCellStoreService)applicationContext.GetObject("AbaxXBRLCellStoreService");

            var result = cellStoreService.ConsultarConceptos("http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_cp_entry_point_2014-12-05", "http://bmv.com.mx/role/ifrs/mc_2014-03-05_role-105000");
        }

        //[TestMethod]
        public void TestConsultarConceptos()
        {
            LogUtil.LogDirPath = @"..\..\TestOutput\";
            LogUtil.Inicializa();

            var cellStoreService = (AbaxXBRLCellStoreService)applicationContext.GetObject("AbaxXBRLCellStoreService");

            cellStoreService.ConsultarConceptos("http://www.bmv.com.mx/2015-06-30/ccd/full_ifrs_ccd_entry_point_2015-06-30");
        }

        //[TestMethod]
        public void TestConsultarEmisorasPorTaxonomia()
        {
            LogUtil.LogDirPath = @"..\..\TestOutput\";
            LogUtil.Inicializa();

            var cellStoreService = (AbaxXBRLCellStoreService)applicationContext.GetObject("AbaxXBRLCellStoreService");

            cellStoreService.ConsultarEmisoras("http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_ics_entry_point_2014-12-05");
        }

        //[TestMethod]
        public void TestConsultarEmisoras()
        {
            LogUtil.LogDirPath = @"..\..\TestOutput\";
            LogUtil.Inicializa();

            var cellStoreService = (AbaxXBRLCellStoreService)applicationContext.GetObject("AbaxXBRLCellStoreService");

            cellStoreService.ConsultarEmisoras();
        }

        //[TestMethod]
        public void TestConsultarFideicomisos()
        {
            LogUtil.LogDirPath = @"..\..\TestOutput\";
            LogUtil.Inicializa();

            var cellStoreService = (AbaxXBRLCellStoreService)applicationContext.GetObject("AbaxXBRLCellStoreService");

            cellStoreService.ConsultarFideicomisos("AMCCB", "DEUDA", "GDFECB");
        }

        //[TestMethod]
        public void TestConsultarFechasReporte()
        {
            LogUtil.LogDirPath = @"..\..\TestOutput\";
            LogUtil.Inicializa();

            var cellStoreService = (AbaxXBRLCellStoreService)applicationContext.GetObject("AbaxXBRLCellStoreService");

            cellStoreService.ConsultarFechasReporte("AMCCB", "DEUDA", "GDFECB");
        }

        //[TestMethod]
        public void TestConsultarUnidades()
        {
            LogUtil.LogDirPath = @"..\..\TestOutput\";
            LogUtil.Inicializa();

            var cellStoreService = (AbaxXBRLCellStoreService)applicationContext.GetObject("AbaxXBRLCellStoreService");

            cellStoreService.ConsultarUnidades();
        }

        //[TestMethod]
        public void TestConsultarTrimestres()
        {
            LogUtil.LogDirPath = @"..\..\TestOutput\";
            LogUtil.Inicializa();

            var cellStoreService = (AbaxXBRLCellStoreService)applicationContext.GetObject("AbaxXBRLCellStoreService");

            cellStoreService.ConsultarTrimestres();
        }

        //[TestMethod]
        public void TestConsultarRepositorio()
        {
            LogUtil.LogDirPath = @"..\..\TestOutput\";
            LogUtil.Inicializa();

            var cellStoreService = (AbaxXBRLCellStoreService)applicationContext.GetObject("AbaxXBRLCellStoreService");
            var blockStoreService = (BlockStoreHechoService)applicationContext.GetObject("BlockStoreHechoService");
            var filtrosConsulta = "{\"Conceptos\":[{\"EsElementoProcesado\":true,\"EsAbstracto\":false,\"EspacioNombres\":\"http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-mc\",\"EspacioNombresTaxonomia\":\"http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_ics_entry_point_2014-12-05\",\"EsDimensional\":false,\"InformacionDimensional\":null,\"Etiqueta\":null,\"EtiquetaConceptoAbstracto\":{\"en\":\"Disclosure of nature of business [text block]\",\"es\":\"Información a revelar sobre la naturaleza del negocio [bloque de texto]\"},\"Id\":\"ifrs-mc_DisclosureOfNatureOfBusinessExplanatory\",\"Indentacion\":0,\"Orden\":0,\"TipoDatoXBRL\":\"textBlockItemType\",\"UUID\":\"f9b54f7a-5e74-48de-9d20-43d25ccbf427_concepto\",\"EtiquetaVista\":\"Información a revelar sobre la naturaleza del negocio [bloque de texto]\"},{\"EsElementoProcesado\":true,\"EsAbstracto\":false,\"EspacioNombres\":\"http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-mc\",\"EspacioNombresTaxonomia\":\"http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_ics_entry_point_2014-12-05\",\"EsDimensional\":false,\"InformacionDimensional\":null,\"Etiqueta\":null,\"EtiquetaConceptoAbstracto\":{\"en\":\"Disclosure of entity's most significant resources, risks and relationships [text block]\",\"es\":\"Información a revelar sobre los recursos, riesgos y relaciones más significativos de la entidad [bloque de texto]\"},\"Id\":\"ifrs-mc_DisclosureOfEntitysMostSignificantResourcesRisksAndRelationshipsExplanatory\",\"Indentacion\":0,\"Orden\":1,\"TipoDatoXBRL\":\"textBlockItemType\",\"UUID\":\"61e8c2be-828d-476f-fd16-6b82ace88fc0_concepto\",\"EtiquetaVista\":\"Información a revelar sobre los recursos, riesgos y relaciones más significativos de la entidad [bloque de texto]\"},{\"EsElementoProcesado\":true,\"EsAbstracto\":false,\"EspacioNombres\":\"http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full\",\"EspacioNombresTaxonomia\":\"http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_ics_entry_point_2014-12-05\",\"EsDimensional\":false,\"InformacionDimensional\":null,\"Etiqueta\":null,\"EtiquetaConceptoAbstracto\":{\"en\":\"Disclosure of associates [text block]\",\"es\":\"Información a revelar sobre asociadas [bloque de texto]\"},\"Id\":\"ifrs-full_DisclosureOfSignificantInvestmentsInAssociatesExplanatory\",\"Indentacion\":0,\"Orden\":2,\"TipoDatoXBRL\":\"textBlockItemType\",\"UUID\":\"33b24efb-3ed7-4e9e-f12f-19b9ab7fe597_concepto\",\"EtiquetaVista\":\"Información a revelar sobre asociadas [bloque de texto]\"}],\"Filtros\":{\"GruposEntidades\":[10004],\"Entidades\":[],\"Fideicomisos\":[],\"Unidades\":[],\"Periodos\":[{\"FechaInicio\":\"2018-01-01T00:00:00.000Z\",\"FechaFin\":\"2018-03-31T00:00:00.000Z\"}],\"FechasReporte\":[\"2018-03-31T00:00:00Z\"],\"Trimestres\":[]},\"Idioma\":\"es\"}";
            //var filtrosConsulta = "{\"Conceptos\":[{\"EsElementoProcesado\":true,\"EsAbstracto\":false,\"EspacioNombres\":\"http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full\",\"EspacioNombresTaxonomia\":\"http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_ics_entry_point_2014-12-05\",\"EsDimensional\":false,\"InformacionDimensional\":null,\"Etiqueta\":null,\"EtiquetaConceptoAbstracto\":{\"en\":\"Current assets\",\"es\":\"Activos circulantes\"},\"Id\":\"ifrs-full_CurrentAssets\",\"Indentacion\":0,\"Orden\":0,\"TipoDatoXBRL\":\"monetaryItemType\",\"UUID\":\"3de156c7-4790-40af-c8f2-a8702dc6f274_concepto\",\"EtiquetaVista\":\"Activos circulantes\"},{\"EsElementoProcesado\":true,\"EsAbstracto\":false,\"EspacioNombres\":\"http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full\",\"EspacioNombresTaxonomia\":\"http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_ics_entry_point_2014-12-05\",\"EsDimensional\":false,\"InformacionDimensional\":null,\"Etiqueta\":null,\"EtiquetaConceptoAbstracto\":{\"en\":\"Net current assets (liabilities)\",\"es\":\"Activos (pasivos) circulantes netos\"},\"Id\":\"ifrs-full_CurrentAssetsLiabilities\",\"Indentacion\":0,\"Orden\":1,\"TipoDatoXBRL\":\"monetaryItemType\",\"UUID\":\"b6eb822b-9c07-4a13-d131-287c098c1df7_concepto\",\"EtiquetaVista\":\"Activos (pasivos) circulantes netos\"},{\"EsElementoProcesado\":true,\"EsAbstracto\":false,\"EspacioNombres\":\"http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full\",\"EspacioNombresTaxonomia\":\"http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_ics_entry_point_2014-12-05\",\"EsDimensional\":false,\"InformacionDimensional\":null,\"Etiqueta\":null,\"EtiquetaConceptoAbstracto\":{\"en\":\"Total equity and liabilities\",\"es\":\"Total de capital contable y pasivos\"},\"Id\":\"ifrs-full_EquityAndLiabilities\",\"Indentacion\":0,\"Orden\":2,\"TipoDatoXBRL\":\"monetaryItemType\",\"UUID\":\"37bdb51a-abff-4240-80fb-3fc31ebfd225_concepto\",\"EtiquetaVista\":\"Total de capital contable y pasivos\"},{\"EsElementoProcesado\":true,\"EsAbstracto\":false,\"EspacioNombres\":\"http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05\",\"EspacioNombresTaxonomia\":\"http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_ics_entry_point_2014-12-05\",\"EsDimensional\":false,\"InformacionDimensional\":null,\"Etiqueta\":null,\"EtiquetaConceptoAbstracto\":{\"en\":\"Other current and non-current liabilities\",\"es\":\"Otros pasivos circulantes y no circulantes sin costo\"},\"Id\":\"ifrs_mx-cor_20141205_OtrosPasivosCirculantesYNoCirculantesSinCosto\",\"Indentacion\":0,\"Orden\":3,\"TipoDatoXBRL\":\"monetaryItemType\",\"UUID\":\"41a75a46-afca-49b5-da87-0b6b421b0bad_concepto\",\"EtiquetaVista\":\"Otros pasivos circulantes y no circulantes sin costo\"},{\"EsElementoProcesado\":true,\"EsAbstracto\":false,\"EspacioNombres\":\"http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05\",\"EspacioNombresTaxonomia\":\"http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_ics_entry_point_2014-12-05\",\"EsDimensional\":false,\"InformacionDimensional\":null,\"Etiqueta\":null,\"EtiquetaConceptoAbstracto\":{\"en\":\"Total other current and non-current liabilities\",\"es\":\"Total otros pasivos circulantes y no circulantes sin costo\"},\"Id\":\"ifrs_mx-cor_20141205_TotalOtrosPasivosCirculantesYNoCirculantesSinCosto\",\"Indentacion\":0,\"Orden\":4,\"TipoDatoXBRL\":\"monetaryItemType\",\"UUID\":\"65aa42d0-cf09-4f26-8d20-01e0fa0fcba2_concepto\",\"EtiquetaVista\":\"Total otros pasivos circulantes y no circulantes sin costo\"},{\"EsElementoProcesado\":true,\"EsAbstracto\":false,\"EspacioNombres\":\"http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full\",\"EspacioNombresTaxonomia\":\"http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_ics_entry_point_2014-12-05\",\"EsDimensional\":false,\"InformacionDimensional\":null,\"Etiqueta\":null,\"EtiquetaConceptoAbstracto\":{\"en\":\"Current liabilities\",\"es\":\"Pasivos circulantes\"},\"Id\":\"ifrs-full_CurrentLiabilities\",\"Indentacion\":0,\"Orden\":5,\"TipoDatoXBRL\":\"monetaryItemType\",\"UUID\":\"3603f106-c890-4798-fd50-2be7a129c7e5_concepto\",\"EtiquetaVista\":\"Pasivos circulantes\"}],\"Filtros\":{\"GruposEntidades\":[10004],\"Entidades\":[{\"IdEntidad\":\"http://www.bmv.com.mx/id:GCARSO\",\"EsquemaId\":\"http://www.bmv.com.mx/id\",\"Id\":\"GCARSO\",\"Segmento\":null,\"ContieneInformacionDimensional\":false,\"ValoresDimension\":null},{\"IdEntidad\":\"http://www.bmv.com.mx/id:SPORT\",\"EsquemaId\":\"http://www.bmv.com.mx/id\",\"Id\":\"SPORT\",\"Segmento\":null,\"ContieneInformacionDimensional\":false,\"ValoresDimension\":null},{\"IdEntidad\":\"http://www.bmv.com.mx/id:AUTLAN\",\"EsquemaId\":\"http://www.bmv.com.mx/id\",\"Id\":\"AUTLAN\",\"Segmento\":null,\"ContieneInformacionDimensional\":false,\"ValoresDimension\":null}],\"Fideicomisos\":[],\"Unidades\":[\"MXN\"],\"Periodos\":[{\"FechaInicio\":\"2018-03-01T00:00:00.000Z\",\"FechaFin\":\"2018-03-31T00:00:00.000Z\"}],\"FechasReporte\":[\"2018-03-31T00:00:00Z\"],\"Trimestres\":[\"1\"]},\"Idioma\":\"es\"}";
            var paginaRequerida = "1";
            var numeroRegistros = "100";

            var settings = new JsonSerializerSettings { NullValueHandling = NullValueHandling.Ignore };
            var filtrosConsultaHecho = JsonConvert.DeserializeObject<EntFiltroConsultaHecho>(filtrosConsulta, settings);

            var entidadesId = new string[filtrosConsultaHecho.filtros.entidades.Length];
            for (var indice = 0; indice < filtrosConsultaHecho.filtros.entidades.Length; indice++)
            {
                entidadesId[indice] = filtrosConsultaHecho.filtros.entidades[indice].Id;
            }
            filtrosConsultaHecho.filtros.entidadesId = entidadesId;

            var blockResult = blockStoreService.ConsultarRepositorio(filtrosConsultaHecho, int.Parse(paginaRequerida), int.Parse(numeroRegistros));
            //var cellResult = cellStoreService.ConsultarRepositorio(filtrosConsultaHecho, int.Parse(paginaRequerida), int.Parse(numeroRegistros));

        }

        //[TestMethod]
        public void TestConsultarRepositorioHecho()
        {
            LogUtil.LogDirPath = @"..\..\TestOutput\";
            LogUtil.Inicializa();

            var cellStoreService = (AbaxXBRLCellStoreService)applicationContext.GetObject("AbaxXBRLCellStoreService");
            var blockStoreService = (BlockStoreHechoService)applicationContext.GetObject("BlockStoreHechoService");

            //var filtrosConsulta = "{\"Conceptos\":[{\"EsElementoProcesado\":true,\"EsAbstracto\":false,\"EspacioNombres\":\"http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-mc\",\"EspacioNombresTaxonomia\":\"http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_ics_entry_point_2014-12-05\",\"EsDimensional\":false,\"InformacionDimensional\":null,\"Etiqueta\":null,\"EtiquetaConceptoAbstracto\":{\"en\":\"Disclosure of nature of business [text block]\",\"es\":\"Información a revelar sobre la naturaleza del negocio [bloque de texto]\"},\"Id\":\"ifrs-mc_DisclosureOfNatureOfBusinessExplanatory\",\"Indentacion\":0,\"Orden\":0,\"TipoDatoXBRL\":\"textBlockItemType\",\"UUID\":\"f9b54f7a-5e74-48de-9d20-43d25ccbf427_concepto\",\"EtiquetaVista\":\"Información a revelar sobre la naturaleza del negocio [bloque de texto]\"},{\"EsElementoProcesado\":true,\"EsAbstracto\":false,\"EspacioNombres\":\"http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-mc\",\"EspacioNombresTaxonomia\":\"http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_ics_entry_point_2014-12-05\",\"EsDimensional\":false,\"InformacionDimensional\":null,\"Etiqueta\":null,\"EtiquetaConceptoAbstracto\":{\"en\":\"Disclosure of entity's most significant resources, risks and relationships [text block]\",\"es\":\"Información a revelar sobre los recursos, riesgos y relaciones más significativos de la entidad [bloque de texto]\"},\"Id\":\"ifrs-mc_DisclosureOfEntitysMostSignificantResourcesRisksAndRelationshipsExplanatory\",\"Indentacion\":0,\"Orden\":1,\"TipoDatoXBRL\":\"textBlockItemType\",\"UUID\":\"61e8c2be-828d-476f-fd16-6b82ace88fc0_concepto\",\"EtiquetaVista\":\"Información a revelar sobre los recursos, riesgos y relaciones más significativos de la entidad [bloque de texto]\"},{\"EsElementoProcesado\":true,\"EsAbstracto\":false,\"EspacioNombres\":\"http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full\",\"EspacioNombresTaxonomia\":\"http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_ics_entry_point_2014-12-05\",\"EsDimensional\":false,\"InformacionDimensional\":null,\"Etiqueta\":null,\"EtiquetaConceptoAbstracto\":{\"en\":\"Disclosure of associates [text block]\",\"es\":\"Información a revelar sobre asociadas [bloque de texto]\"},\"Id\":\"ifrs-full_DisclosureOfSignificantInvestmentsInAssociatesExplanatory\",\"Indentacion\":0,\"Orden\":2,\"TipoDatoXBRL\":\"textBlockItemType\",\"UUID\":\"33b24efb-3ed7-4e9e-f12f-19b9ab7fe597_concepto\",\"EtiquetaVista\":\"Información a revelar sobre asociadas [bloque de texto]\"}],\"Filtros\":{\"GruposEntidades\":[10004],\"Entidades\":[],\"Fideicomisos\":[],\"Unidades\":[],\"Periodos\":[{\"FechaInicio\":\"2018-01-01T00:00:00.000Z\",\"FechaFin\":\"2018-03-31T00:00:00.000Z\"}],\"FechasReporte\":[\"2018-03-31T00:00:00Z\"],\"Trimestres\":[]},\"Idioma\":\"es\"}";
            //var filtrosConsulta = "{\"Conceptos\":[{\"EsElementoProcesado\":true,\"EsAbstracto\":false,\"EspacioNombres\":\"http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-mc\",\"EspacioNombresTaxonomia\":\"http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_ics_entry_point_2014-12-05\",\"EsDimensional\":false,\"InformacionDimensional\":null,\"Etiqueta\":null,\"EtiquetaConceptoAbstracto\":{\"en\":\"Disclosure of nature of business [text block]\",\"es\":\"Información a revelar sobre la naturaleza del negocio [bloque de texto]\"},\"Id\":\"ifrs-mc_DisclosureOfNatureOfBusinessExplanatory\",\"Indentacion\":0,\"Orden\":0,\"TipoDatoXBRL\":\"textBlockItemType\",\"UUID\":\"f9b54f7a-5e74-48de-9d20-43d25ccbf427_concepto\",\"EtiquetaVista\":\"Información a revelar sobre la naturaleza del negocio [bloque de texto]\"},{\"EsElementoProcesado\":true,\"EsAbstracto\":false,\"EspacioNombres\":\"http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-mc\",\"EspacioNombresTaxonomia\":\"http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_ics_entry_point_2014-12-05\",\"EsDimensional\":false,\"InformacionDimensional\":null,\"Etiqueta\":null,\"EtiquetaConceptoAbstracto\":{\"en\":\"Disclosure of entity's most significant resources, risks and relationships [text block]\",\"es\":\"Información a revelar sobre los recursos, riesgos y relaciones más significativos de la entidad [bloque de texto]\"},\"Id\":\"ifrs-mc_DisclosureOfEntitysMostSignificantResourcesRisksAndRelationshipsExplanatory\",\"Indentacion\":0,\"Orden\":1,\"TipoDatoXBRL\":\"textBlockItemType\",\"UUID\":\"61e8c2be-828d-476f-fd16-6b82ace88fc0_concepto\",\"EtiquetaVista\":\"Información a revelar sobre los recursos, riesgos y relaciones más significativos de la entidad [bloque de texto]\"},{\"EsElementoProcesado\":true,\"EsAbstracto\":false,\"EspacioNombres\":\"http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full\",\"EspacioNombresTaxonomia\":\"http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_ics_entry_point_2014-12-05\",\"EsDimensional\":false,\"InformacionDimensional\":null,\"Etiqueta\":null,\"EtiquetaConceptoAbstracto\":{\"en\":\"Disclosure of associates [text block]\",\"es\":\"Información a revelar sobre asociadas [bloque de texto]\"},\"Id\":\"ifrs-full_DisclosureOfSignificantInvestmentsInAssociatesExplanatory\",\"Indentacion\":0,\"Orden\":2,\"TipoDatoXBRL\":\"textBlockItemType\",\"UUID\":\"33b24efb-3ed7-4e9e-f12f-19b9ab7fe597_concepto\",\"EtiquetaVista\":\"Información a revelar sobre asociadas [bloque de texto]\"}],\"Filtros\":{\"GruposEntidades\":[10004],\"Entidades\":[],\"Fideicomisos\":[],\"Unidades\":[],\"Periodos\":[],\"FechasReporte\":[\"2018-03-31T00:00:00Z\"],\"Trimestres\":[]},\"Idioma\":\"es\"}";
            var filtrosConsulta = "{\"Conceptos\":[{\"EsElementoProcesado\":true,\"EsAbstracto\":false,\"EspacioNombres\":\"http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full\",\"EspacioNombresTaxonomia\":\"http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_ics_entry_point_2014-12-05\",\"EsDimensional\":false,\"InformacionDimensional\":null,\"Etiqueta\":null,\"EtiquetaConceptoAbstracto\":{\"en\":\"Current assets\",\"es\":\"Activos circulantes\"},\"Id\":\"ifrs-full_CurrentAssets\",\"Indentacion\":0,\"Orden\":0,\"TipoDatoXBRL\":\"monetaryItemType\",\"UUID\":\"3de156c7-4790-40af-c8f2-a8702dc6f274_concepto\",\"EtiquetaVista\":\"Activos circulantes\"},{\"EsElementoProcesado\":true,\"EsAbstracto\":false,\"EspacioNombres\":\"http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full\",\"EspacioNombresTaxonomia\":\"http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_ics_entry_point_2014-12-05\",\"EsDimensional\":false,\"InformacionDimensional\":null,\"Etiqueta\":null,\"EtiquetaConceptoAbstracto\":{\"en\":\"Net current assets (liabilities)\",\"es\":\"Activos (pasivos) circulantes netos\"},\"Id\":\"ifrs-full_CurrentAssetsLiabilities\",\"Indentacion\":0,\"Orden\":1,\"TipoDatoXBRL\":\"monetaryItemType\",\"UUID\":\"b6eb822b-9c07-4a13-d131-287c098c1df7_concepto\",\"EtiquetaVista\":\"Activos (pasivos) circulantes netos\"},{\"EsElementoProcesado\":true,\"EsAbstracto\":false,\"EspacioNombres\":\"http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full\",\"EspacioNombresTaxonomia\":\"http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_ics_entry_point_2014-12-05\",\"EsDimensional\":false,\"InformacionDimensional\":null,\"Etiqueta\":null,\"EtiquetaConceptoAbstracto\":{\"en\":\"Total equity and liabilities\",\"es\":\"Total de capital contable y pasivos\"},\"Id\":\"ifrs-full_EquityAndLiabilities\",\"Indentacion\":0,\"Orden\":2,\"TipoDatoXBRL\":\"monetaryItemType\",\"UUID\":\"37bdb51a-abff-4240-80fb-3fc31ebfd225_concepto\",\"EtiquetaVista\":\"Total de capital contable y pasivos\"},{\"EsElementoProcesado\":true,\"EsAbstracto\":false,\"EspacioNombres\":\"http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05\",\"EspacioNombresTaxonomia\":\"http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_ics_entry_point_2014-12-05\",\"EsDimensional\":false,\"InformacionDimensional\":null,\"Etiqueta\":null,\"EtiquetaConceptoAbstracto\":{\"en\":\"Other current and non-current liabilities\",\"es\":\"Otros pasivos circulantes y no circulantes sin costo\"},\"Id\":\"ifrs_mx-cor_20141205_OtrosPasivosCirculantesYNoCirculantesSinCosto\",\"Indentacion\":0,\"Orden\":3,\"TipoDatoXBRL\":\"monetaryItemType\",\"UUID\":\"41a75a46-afca-49b5-da87-0b6b421b0bad_concepto\",\"EtiquetaVista\":\"Otros pasivos circulantes y no circulantes sin costo\"},{\"EsElementoProcesado\":true,\"EsAbstracto\":false,\"EspacioNombres\":\"http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05\",\"EspacioNombresTaxonomia\":\"http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_ics_entry_point_2014-12-05\",\"EsDimensional\":false,\"InformacionDimensional\":null,\"Etiqueta\":null,\"EtiquetaConceptoAbstracto\":{\"en\":\"Total other current and non-current liabilities\",\"es\":\"Total otros pasivos circulantes y no circulantes sin costo\"},\"Id\":\"ifrs_mx-cor_20141205_TotalOtrosPasivosCirculantesYNoCirculantesSinCosto\",\"Indentacion\":0,\"Orden\":4,\"TipoDatoXBRL\":\"monetaryItemType\",\"UUID\":\"65aa42d0-cf09-4f26-8d20-01e0fa0fcba2_concepto\",\"EtiquetaVista\":\"Total otros pasivos circulantes y no circulantes sin costo\"},{\"EsElementoProcesado\":true,\"EsAbstracto\":false,\"EspacioNombres\":\"http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full\",\"EspacioNombresTaxonomia\":\"http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_ics_entry_point_2014-12-05\",\"EsDimensional\":false,\"InformacionDimensional\":null,\"Etiqueta\":null,\"EtiquetaConceptoAbstracto\":{\"en\":\"Current liabilities\",\"es\":\"Pasivos circulantes\"},\"Id\":\"ifrs-full_CurrentLiabilities\",\"Indentacion\":0,\"Orden\":5,\"TipoDatoXBRL\":\"monetaryItemType\",\"UUID\":\"3603f106-c890-4798-fd50-2be7a129c7e5_concepto\",\"EtiquetaVista\":\"Pasivos circulantes\"}],\"Filtros\":{\"GruposEntidades\":[10004],\"Entidades\":[{\"IdEntidad\":\"http://www.bmv.com.mx/id:GCARSO\",\"EsquemaId\":\"http://www.bmv.com.mx/id\",\"Id\":\"GCARSO\",\"Segmento\":null,\"ContieneInformacionDimensional\":false,\"ValoresDimension\":null},{\"IdEntidad\":\"http://www.bmv.com.mx/id:SPORT\",\"EsquemaId\":\"http://www.bmv.com.mx/id\",\"Id\":\"SPORT\",\"Segmento\":null,\"ContieneInformacionDimensional\":false,\"ValoresDimension\":null},{\"IdEntidad\":\"http://www.bmv.com.mx/id:AUTLAN\",\"EsquemaId\":\"http://www.bmv.com.mx/id\",\"Id\":\"AUTLAN\",\"Segmento\":null,\"ContieneInformacionDimensional\":false,\"ValoresDimension\":null}],\"Fideicomisos\":[],\"Unidades\":[\"MXN\"],\"Periodos\":[{\"FechaInicio\":\"2018-03-01T00:00:00.000Z\",\"FechaFin\":\"2018-03-31T00:00:00.000Z\"}],\"FechasReporte\":[\"2018-03-31T00:00:00Z\"],\"Trimestres\":[\"1\"]},\"Idioma\":\"es\"}";
            var paginaRequerida = "1";
            var numeroRegistros = "100";

            var settings = new JsonSerializerSettings { NullValueHandling = NullValueHandling.Ignore };
            var filtrosConsultaHecho = JsonConvert.DeserializeObject<EntFiltroConsultaHecho>(filtrosConsulta, settings);

            var cellResult = cellStoreService.ConsultarRepositorio(filtrosConsultaHecho, int.Parse(paginaRequerida), int.Parse(numeroRegistros));
        }
    }
}
