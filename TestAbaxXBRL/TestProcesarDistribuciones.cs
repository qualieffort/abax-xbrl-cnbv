using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Spring.Testing.Microsoft;
using AbaxXBRLCore.Distribucion;
using System.Collections.Generic;
using System.IO;
using AbaxXBRLCore.Services;
using AbaxXBRLCore.Repository;
using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.XPE.impl;
using AbaxXBRLCore.Viewer.Application.Dto;
using Newtonsoft.Json;
using AbaxXBRLCore.Distribucion.Impl;
using AbaxXBRLCore.Common.Cache;
using System.Linq;

namespace TestAbaxXBRL
{
    /// <summary>
    /// Prueba unitaria para el envío de información financier a CNBV.
    /// </summary>
    [TestClass]
    public class TestProcesarDistribuciones : AbstractDependencyInjectionSpringContextTests
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
                    //"assembly://AbaxXBRLCore/AbaxXBRLCore.Config.custom/servicesrest_desarrollo_solo_mongo.xml",
                    //"assembly://AbaxXBRLCore/AbaxXBRLCore.Config.custom/servicesrest_desarrollo.xml",
                    "assembly://AbaxXBRLCore/AbaxXBRLCore.Config.custom/servicesrest_mongodisable.xml",
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
        /// <summary>
        /// Token que se asigna como llave para obtene la ruta del archivo de prueba.
        /// </summary>
        private static string TestUrlToken = "testUrl";

        [TestMethod]
        public void TestProcesarDistribucionDocumentoXBRL()
        {
            var procesador = (IProcesarDistribucionDocumentoXBRLService)applicationContext.GetObject("ProcesarDistribucionDocumentoXBRLService");
            procesador.DistribuirDocumentoInstanciaXBRL(41, 1, new Dictionary<string, object>());
        }
        /// <summary>
        /// Genear una lista de parametros para ejecutar la prueba de distribución para varios documentos de pureba.
        /// </summary>
        /// <returns>Lista con la información para la realización de la distribución de los documentos de prueba.</returns>
        private IList<IDictionary<string, string>> ObtenParametrosTest()
        {

            var listaResultado = new List<IDictionary<string, string>>();


            //eventoRelEmi
            var eventoRelMEXCHEM1 = new Dictionary<string, string>();
            eventoRelMEXCHEM1.Add("cvePizarra", "MEXCHEM");
            eventoRelMEXCHEM1.Add("cveUsuario", "1");
            eventoRelMEXCHEM1.Add("idEnvio", "100292");
            eventoRelMEXCHEM1.Add("valorPeroiodo", "2018-05-30");
            eventoRelMEXCHEM1.Add("acuse", "AC443549466763-rqqszr");
            eventoRelMEXCHEM1.Add(TestUrlToken, "C:/2HSoftware/Notas/55_DocumentaciónCNBV/02/02_Documentos/Respaldo/20181030/Eventos Relevantes/MEXCHEM/ER Calificadora MEXICHEM Calificaciones.zip");
            listaResultado.Add(eventoRelMEXCHEM1);


            ////ar_N
            //var ar_N = new Dictionary<string, string>();
            //ar_N.Add("cvePizarra", "CREAL");
            //ar_N.Add("cveUsuario", "1");
            //ar_N.Add("idEnvio", "100292");
            //ar_N.Add("valorPeroiodo", "2017");
            //ar_N.Add("acuse", "AC443549466763-rqqszr");
            //ar_N.Add(TestUrlToken, "../../TestInput/XBRL/otro/XBRL_CREAL_2017_4_20180504133503.zip");
            //listaResultado.Add(ar_N);


            ////ar_N
            //var ar_N = new Dictionary<string, string>();
            //ar_N.Add("cvePizarra", "WALMEX");
            //ar_N.Add("cveUsuario", "1");
            //ar_N.Add("idEnvio", "100292");
            //ar_N.Add("valorPeroiodo", "2017");
            //ar_N.Add("acuse", "AC443549466763-rqqszr");
            //ar_N.Add(TestUrlToken, "../../TestInput/XBRL/otro/Reporte Anual 2017 WALMEX XBRL.zip");
            //listaResultado.Add(ar_N);

            ////eventoRelEmi
            //var eventoRelEmi = new Dictionary<string, string>();
            //eventoRelEmi.Add("cvePizarra", "2HSOFT");
            //eventoRelEmi.Add("cveUsuario", "1");
            //eventoRelEmi.Add("idEnvio", "100292");
            //eventoRelEmi.Add("acuse", "AC443549466763-rqqszr");
            //eventoRelEmi.Add(TestUrlToken, "../../TestInput/XBRL/otro/eventoRelevante.zip");
            //listaResultado.Add(eventoRelEmi);

            ////AnexoT
            //var anexoT = new Dictionary<string, string>();
            //anexoT.Add("cvePizarra", "2HSOFT");
            //anexoT.Add("cveUsuario", "1");
            //anexoT.Add("idEnvio", "100292");
            //anexoT.Add("acuse", "AC443549466763-rqqszr");
            //anexoT.Add("valorPeroiodo", "2018 - 08");
            //anexoT.Add(TestUrlToken, "../../TestInput/XBRL/otro/ANEXOT_Ale.zip");
            //listaResultado.Add(anexoT);

            ////AA FIBRA
            //var funoAA = new Dictionary<string, string>();
            //funoAA.Add("cvePizarra", "2HSOFT");
            //funoAA.Add("cveUsuario", "1");
            //funoAA.Add("idEnvio", "100292");
            //funoAA.Add("acuse", "AC443549466763-rqqszr");
            //funoAA.Add("fechaTrimestre", "2018-06-30");
            //funoAA.Add(TestUrlToken, "../../TestInput/XBRL/otro/ifrsxbrl_2HSOFT_2018-2.zip");
            //listaResultado.Add(funoAA);

            ////CCD Anexo AA.zip
            //var CCDAA = new Dictionary<string, string>();
            //CCDAA.Add("cvePizarra", "2HSOFT");
            //CCDAA.Add("cveUsuario", "1");
            //CCDAA.Add("idEnvio", "100292");
            //CCDAA.Add("acuse", "AC443549466763-rqqszr");
            //CCDAA.Add("fechaTrimestre", "2018-06-30");
            //CCDAA.Add(TestUrlToken, "../../TestInput/XBRL/otro/Anexo AA CCD-2018T2.zip");
            //listaResultado.Add(CCDAA);


            ////MEXCHEM
            //var MEXCHEMT1_16 = new Dictionary<string, string>();
            //MEXCHEMT1_16.Add("fechaTrimestre", "2016-03-31");
            //MEXCHEMT1_16.Add("cvePizarra", "MEXCHEM");
            //MEXCHEMT1_16.Add("trimestre", "1");
            //MEXCHEMT1_16.Add("cveUsuario", "1");
            //MEXCHEMT1_16.Add("idEnvio", "100291");
            //MEXCHEMT1_16.Add("acuse", "AC443549466763-rqqszr");
            //MEXCHEMT1_16.Add(TestUrlToken, "../../TestInput/XBRL/zip/ifrsxbrl_MEXCHEM_2016-1.zip");
            //listaResultado.Add(MEXCHEMT1_16);

            //var MEXCHEMT2_16 = new Dictionary<string, string>();
            //MEXCHEMT2_16.Add("fechaTrimestre", "2016-06-30");
            //MEXCHEMT2_16.Add("cvePizarra", "MEXCHEM");
            //MEXCHEMT2_16.Add("trimestre", "2");
            //MEXCHEMT2_16.Add("cveUsuario", "1");
            //MEXCHEMT2_16.Add("idEnvio", "100291");
            //MEXCHEMT2_16.Add("acuse", "AC443549466763-rqqszr");
            //MEXCHEMT2_16.Add(TestUrlToken, "../../TestInput/XBRL/zip/ifrsxbrl_MEXCHEM_2016-2.zip");
            //listaResultado.Add(MEXCHEMT2_16);

            //var MEXCHEMT3_16 = new Dictionary<string, string>();
            //MEXCHEMT3_16.Add("fechaTrimestre", "2016-09-30");
            //MEXCHEMT3_16.Add("cvePizarra", "MEXCHEM");
            //MEXCHEMT3_16.Add("trimestre", "3");
            //MEXCHEMT3_16.Add("cveUsuario", "1");
            //MEXCHEMT3_16.Add("idEnvio", "100291");
            //MEXCHEMT3_16.Add("acuse", "AC443549466763-rqqszr");
            //MEXCHEMT3_16.Add(TestUrlToken, "../../TestInput/XBRL/zip/ifrsxbrl_MEXCHEM_2016-3.zip");
            //listaResultado.Add(MEXCHEMT3_16);

            //var MEXCHEMT4_16 = new Dictionary<string, string>();
            //MEXCHEMT4_16.Add("fechaTrimestre", "2016-12-31");
            //MEXCHEMT4_16.Add("cvePizarra", "MEXCHEM");
            //MEXCHEMT4_16.Add("trimestre", "4D");
            //MEXCHEMT4_16.Add("cveUsuario", "1");
            //MEXCHEMT4_16.Add("idEnvio", "100291");
            //MEXCHEMT4_16.Add("acuse", "AC443549466763-rqqszr");
            //MEXCHEMT4_16.Add(TestUrlToken, "../../TestInput/XBRL/zip/ifrsxbrl_MEXCHEM_2016-4.zip");
            //listaResultado.Add(MEXCHEMT4_16);

            //var MEXCHEMT1_17 = new Dictionary<string, string>();
            //MEXCHEMT1_17.Add("fechaTrimestre", "2017-03-31");
            //MEXCHEMT1_17.Add("cvePizarra", "MEXCHEM");
            //MEXCHEMT1_17.Add("trimestre", "1");
            //MEXCHEMT1_17.Add("cveUsuario", "1");
            //MEXCHEMT1_17.Add("idEnvio", "100291");
            //MEXCHEMT1_17.Add("acuse", "AC443549466763-rqqszr");
            //MEXCHEMT1_17.Add(TestUrlToken, "../../TestInput/XBRL/zip/ifrsxbrl_MEXCHEM_2017-1.zip");
            //listaResultado.Add(MEXCHEMT1_17);

            //var MEXCHEMT2_17 = new Dictionary<string, string>();
            //MEXCHEMT2_17.Add("fechaTrimestre", "2017-06-30");
            //MEXCHEMT2_17.Add("cvePizarra", "MEXCHEM");
            //MEXCHEMT2_17.Add("trimestre", "2");
            //MEXCHEMT2_17.Add("cveUsuario", "1");
            //MEXCHEMT2_17.Add("idEnvio", "100291");
            //MEXCHEMT2_17.Add("acuse", "AC443549466763-rqqszr");
            //MEXCHEMT2_17.Add(TestUrlToken, "../../TestInput/XBRL/zip/ifrsxbrl_MEXCHEM_2017-2.zip");
            //listaResultado.Add(MEXCHEMT2_17);

            //var MEXCHEMT3_17 = new Dictionary<string, string>();
            //MEXCHEMT3_17.Add("fechaTrimestre", "2017-09-30");
            //MEXCHEMT3_17.Add("cvePizarra", "MEXCHEM");
            //MEXCHEMT3_17.Add("trimestre", "3");
            //MEXCHEMT3_17.Add("cveUsuario", "1");
            //MEXCHEMT3_17.Add("idEnvio", "100291");
            //MEXCHEMT3_17.Add("acuse", "AC443549466763-rqqszr");
            //MEXCHEMT3_17.Add(TestUrlToken, "../../TestInput/XBRL/zip/ifrsxbrl_MEXCHEM_2017-3.zip");
            //listaResultado.Add(MEXCHEMT3_17);

            //var MEXCHEMT4_17 = new Dictionary<string, string>();
            //MEXCHEMT4_17.Add("fechaTrimestre", "2017-12-31");
            //MEXCHEMT4_17.Add("cvePizarra", "MEXCHEM");
            //MEXCHEMT4_17.Add("trimestre", "4D");
            //MEXCHEMT4_17.Add("cveUsuario", "1");
            //MEXCHEMT4_17.Add("idEnvio", "100291");
            //MEXCHEMT4_17.Add("acuse", "AC443549466763-rqqszr");
            //MEXCHEMT4_17.Add(TestUrlToken, "../../TestInput/XBRL/zip/ifrsxbrl_MEXCHEM_2017-4.zip");
            //listaResultado.Add(MEXCHEMT4_17);

            //var MEXCHEMT1_18 = new Dictionary<string, string>();
            //MEXCHEMT1_18.Add("fechaTrimestre", "2018-03-31");
            //MEXCHEMT1_18.Add("cvePizarra", "MEXCHEM");
            //MEXCHEMT1_18.Add("trimestre", "1");
            //MEXCHEMT1_18.Add("cveUsuario", "1");
            //MEXCHEMT1_18.Add("idEnvio", "100291");
            //MEXCHEMT1_18.Add("acuse", "AC443549466763-rqqszr");
            //MEXCHEMT1_18.Add(TestUrlToken, "../../TestInput/XBRL/zip/ifrsxbrl_MEXCHEM_2018-1.zip");
            //listaResultado.Add(MEXCHEMT1_18);

            //var MEXCHEMT2_18 = new Dictionary<string, string>();
            //MEXCHEMT2_18.Add("fechaTrimestre", "2018-06-30");
            //MEXCHEMT2_18.Add("cvePizarra", "MEXCHEM");
            //MEXCHEMT2_18.Add("trimestre", "2");
            //MEXCHEMT2_18.Add("cveUsuario", "1");
            //MEXCHEMT2_18.Add("idEnvio", "100291");
            //MEXCHEMT2_18.Add("acuse", "AC443549466763-rqqszr");
            //MEXCHEMT2_18.Add(TestUrlToken, "../../TestInput/XBRL/zip/ifrsxbrl_MEXCHEM_2018-2.zip");
            //listaResultado.Add(MEXCHEMT2_18);

            ////BIMBO
            //var BIMBOT1_16 = new Dictionary<string, string>();
            //BIMBOT1_16.Add("fechaTrimestre", "2016-03-31");
            //BIMBOT1_16.Add("cvePizarra", "BIMBO");
            //BIMBOT1_16.Add("trimestre", "1");
            //BIMBOT1_16.Add("cveUsuario", "1");
            //BIMBOT1_16.Add("idEnvio", "100291");
            //BIMBOT1_16.Add("acuse", "AC443549466763-rqqszr");
            //BIMBOT1_16.Add(TestUrlToken, "../../TestInput/XBRL/zip/ifrsxbrl_BIMBO_2016-1.zip");
            //listaResultado.Add(BIMBOT1_16);

            //var BIMBOT2_16 = new Dictionary<string, string>();
            //BIMBOT2_16.Add("fechaTrimestre", "2016-06-30");
            //BIMBOT2_16.Add("cvePizarra", "BIMBO");
            //BIMBOT2_16.Add("trimestre", "2");
            //BIMBOT2_16.Add("cveUsuario", "1");
            //BIMBOT2_16.Add("idEnvio", "100291");
            //BIMBOT2_16.Add("acuse", "AC443549466763-rqqszr");
            //BIMBOT2_16.Add(TestUrlToken, "../../TestInput/XBRL/zip/ifrsxbrl_BIMBO_2016-2.zip");
            //listaResultado.Add(BIMBOT2_16);

            //var BIMBOT3_16 = new Dictionary<string, string>();
            //BIMBOT3_16.Add("fechaTrimestre", "2016-09-30");
            //BIMBOT3_16.Add("cvePizarra", "BIMBO");
            //BIMBOT3_16.Add("trimestre", "3");
            //BIMBOT3_16.Add("cveUsuario", "1");
            //BIMBOT3_16.Add("idEnvio", "100291");
            //BIMBOT3_16.Add("acuse", "AC443549466763-rqqszr");
            //BIMBOT3_16.Add(TestUrlToken, "../../TestInput/XBRL/zip/ifrsxbrl_BIMBO_2016-3.zip");
            //listaResultado.Add(BIMBOT3_16);

            //var BIMBOT4_16 = new Dictionary<string, string>();
            //BIMBOT4_16.Add("fechaTrimestre", "2016-12-31");
            //BIMBOT4_16.Add("cvePizarra", "BIMBO");
            //BIMBOT4_16.Add("trimestre", "4D");
            //BIMBOT4_16.Add("cveUsuario", "1");
            //BIMBOT4_16.Add("idEnvio", "100291");
            //BIMBOT4_16.Add("acuse", "AC443549466763-rqqszr");
            //BIMBOT4_16.Add(TestUrlToken, "../../TestInput/XBRL/zip/ifrsxbrl_BIMBO_2016-4.zip");
            //listaResultado.Add(BIMBOT4_16);

            //var BIMBOT1_17 = new Dictionary<string, string>();
            //BIMBOT1_17.Add("fechaTrimestre", "2017-03-31");
            //BIMBOT1_17.Add("cvePizarra", "BIMBO");
            //BIMBOT1_17.Add("trimestre", "1");
            //BIMBOT1_17.Add("cveUsuario", "1");
            //BIMBOT1_17.Add("idEnvio", "100291");
            //BIMBOT1_17.Add("acuse", "AC443549466763-rqqszr");
            //BIMBOT1_17.Add(TestUrlToken, "../../TestInput/XBRL/zip/ifrsxbrl_BIMBO_2017-1.zip");
            //listaResultado.Add(BIMBOT1_17);

            //var BIMBOT2_17 = new Dictionary<string, string>();
            //BIMBOT2_17.Add("fechaTrimestre", "2017-06-30");
            //BIMBOT2_17.Add("cvePizarra", "BIMBO");
            //BIMBOT2_17.Add("trimestre", "2");
            //BIMBOT2_17.Add("cveUsuario", "1");
            //BIMBOT2_17.Add("idEnvio", "100291");
            //BIMBOT2_17.Add("acuse", "AC443549466763-rqqszr");
            //BIMBOT2_17.Add(TestUrlToken, "../../TestInput/XBRL/zip/ifrsxbrl_BIMBO_2017-2.zip");
            //listaResultado.Add(BIMBOT2_17);

            //var BIMBOT3_17 = new Dictionary<string, string>();
            //BIMBOT3_17.Add("fechaTrimestre", "2017-09-30");
            //BIMBOT3_17.Add("cvePizarra", "BIMBO");
            //BIMBOT3_17.Add("trimestre", "3");
            //BIMBOT3_17.Add("cveUsuario", "1");
            //BIMBOT3_17.Add("idEnvio", "100291");
            //BIMBOT3_17.Add("acuse", "AC443549466763-rqqszr");
            //BIMBOT3_17.Add(TestUrlToken, "../../TestInput/XBRL/zip/ifrsxbrl_BIMBO_2017-3.zip");
            //listaResultado.Add(BIMBOT3_17);

            //var BIMBOT4_17 = new Dictionary<string, string>();
            //BIMBOT4_17.Add("fechaTrimestre", "2017-12-31");
            //BIMBOT4_17.Add("cvePizarra", "BIMBO");
            //BIMBOT4_17.Add("trimestre", "4D");
            //BIMBOT4_17.Add("cveUsuario", "1");
            //BIMBOT4_17.Add("idEnvio", "100291");
            //BIMBOT4_17.Add("acuse", "AC443549466763-rqqszr");
            //BIMBOT4_17.Add(TestUrlToken, "../../TestInput/XBRL/zip/ifrsxbrl_BIMBO_2017-4.zip");
            //listaResultado.Add(BIMBOT4_17);

            //var BIMBOT1_18 = new Dictionary<string, string>();
            //BIMBOT1_18.Add("fechaTrimestre", "2018-03-31");
            //BIMBOT1_18.Add("cvePizarra", "BIMBO");
            //BIMBOT1_18.Add("trimestre", "1");
            //BIMBOT1_18.Add("cveUsuario", "1");
            //BIMBOT1_18.Add("idEnvio", "100291");
            //BIMBOT1_18.Add("acuse", "AC443549466763-rqqszr");
            //BIMBOT1_18.Add(TestUrlToken, "../../TestInput/XBRL/zip/ifrsxbrl_BIMBO_2018-1.zip");
            //listaResultado.Add(BIMBOT1_18);

            //var BIMBOT2_18 = new Dictionary<string, string>();
            //BIMBOT2_18.Add("fechaTrimestre", "2018-06-30");
            //BIMBOT2_18.Add("cvePizarra", "BIMBO");
            //BIMBOT2_18.Add("trimestre", "2");
            //BIMBOT2_18.Add("cveUsuario", "1");
            //BIMBOT2_18.Add("idEnvio", "100291");
            //BIMBOT2_18.Add("acuse", "AC443549466763-rqqszr");
            //BIMBOT2_18.Add(TestUrlToken, "../../TestInput/XBRL/zip/ifrsxbrl_BIMBO_2018-2.zip");
            //listaResultado.Add(BIMBOT2_18);

            ////Walmex

            //var walmexT1_16 = new Dictionary<string, string>();
            //walmexT1_16.Add("fechaTrimestre", "2016-03-31");
            //walmexT1_16.Add("cvePizarra", "WALMEX");
            //walmexT1_16.Add("trimestre", "1");
            //walmexT1_16.Add("cveUsuario", "1");
            //walmexT1_16.Add("idEnvio", "100291");
            //walmexT1_16.Add("acuse", "AC443549466763-rqqszr");
            //walmexT1_16.Add(TestUrlToken, "../../TestInput/XBRL/zip/ifrsxbrl_WALMEX_2016-1.zip");
            //listaResultado.Add(walmexT1_16);

            //var walmexT2_16 = new Dictionary<string, string>();
            //walmexT2_16.Add("fechaTrimestre", "2016-06-30");
            //walmexT2_16.Add("cvePizarra", "WALMEX");
            //walmexT2_16.Add("trimestre", "2");
            //walmexT2_16.Add("cveUsuario", "1");
            //walmexT2_16.Add("idEnvio", "100291");
            //walmexT2_16.Add("acuse", "AC443549466763-rqqszr");
            //walmexT2_16.Add(TestUrlToken, "../../TestInput/XBRL/zip/ifrsxbrl_WALMEX_2016-2.zip");
            //listaResultado.Add(walmexT2_16);

            //var walmexT3_16 = new Dictionary<string, string>();
            //walmexT3_16.Add("fechaTrimestre", "2016-09-30");
            //walmexT3_16.Add("cvePizarra", "WALMEX");
            //walmexT3_16.Add("trimestre", "3");
            //walmexT3_16.Add("cveUsuario", "1");
            //walmexT3_16.Add("idEnvio", "100291");
            //walmexT3_16.Add("acuse", "AC443549466763-rqqszr");
            //walmexT3_16.Add(TestUrlToken, "../../TestInput/XBRL/zip/ifrsxbrl_WALMEX_2016-3.zip");
            //listaResultado.Add(walmexT3_16);

            //var walmexT4_16 = new Dictionary<string, string>();
            //walmexT4_16.Add("fechaTrimestre", "2016-12-31");
            //walmexT4_16.Add("cvePizarra", "WALMEX");
            //walmexT4_16.Add("trimestre", "4D");
            //walmexT4_16.Add("cveUsuario", "1");
            //walmexT4_16.Add("idEnvio", "100291");
            //walmexT4_16.Add("acuse", "AC443549466763-rqqszr");
            //walmexT4_16.Add(TestUrlToken, "../../TestInput/XBRL/zip/ifrsxbrl_WALMEX_2016-4.zip");
            //listaResultado.Add(walmexT4_16);

            //var walmexT1_17 = new Dictionary<string, string>();
            //walmexT1_17.Add("fechaTrimestre", "2017-03-31");
            //walmexT1_17.Add("cvePizarra", "WALMEX");
            //walmexT1_17.Add("trimestre", "1");
            //walmexT1_17.Add("cveUsuario", "1");
            //walmexT1_17.Add("idEnvio", "100291");
            //walmexT1_17.Add("acuse", "AC443549466763-rqqszr");
            //walmexT1_17.Add(TestUrlToken, "../../TestInput/XBRL/zip/ifrsxbrl_WALMEX_2017-1.zip");
            //listaResultado.Add(walmexT1_17);

            //var walmexT2_17 = new Dictionary<string, string>();
            //walmexT2_17.Add("fechaTrimestre", "2017-06-30");
            //walmexT2_17.Add("cvePizarra", "WALMEX");
            //walmexT2_17.Add("trimestre", "2");
            //walmexT2_17.Add("cveUsuario", "1");
            //walmexT2_17.Add("idEnvio", "100291");
            //walmexT2_17.Add("acuse", "AC443549466763-rqqszr");
            //walmexT2_17.Add(TestUrlToken, "../../TestInput/XBRL/zip/ifrsxbrl_WALMEX_2017-2.zip");
            //listaResultado.Add(walmexT2_17);

            //var walmexT3_17 = new Dictionary<string, string>();
            //walmexT3_17.Add("fechaTrimestre", "2017-09-30");
            //walmexT3_17.Add("cvePizarra", "WALMEX");
            //walmexT3_17.Add("trimestre", "3");
            //walmexT3_17.Add("cveUsuario", "1");
            //walmexT3_17.Add("idEnvio", "100291");
            //walmexT3_17.Add("acuse", "AC443549466763-rqqszr");
            //walmexT3_17.Add(TestUrlToken, "../../TestInput/XBRL/zip/ifrsxbrl_WALMEX_2017-3.zip");
            //listaResultado.Add(walmexT3_17);

            //var walmexT4_17 = new Dictionary<string, string>();
            //walmexT4_17.Add("fechaTrimestre", "2017-12-31");
            //walmexT4_17.Add("cvePizarra", "WALMEX");
            //walmexT4_17.Add("trimestre", "4D");
            //walmexT4_17.Add("cveUsuario", "1");
            //walmexT4_17.Add("idEnvio", "100291");
            //walmexT4_17.Add("acuse", "AC443549466763-rqqszr");
            //walmexT4_17.Add(TestUrlToken, "../../TestInput/XBRL/zip/ifrsxbrl_WALMEX_2017-4.zip");
            //listaResultado.Add(walmexT4_17);

            //var walmexT1_18 = new Dictionary<string, string>();
            //walmexT1_18.Add("fechaTrimestre", "2018-03-31");
            //walmexT1_18.Add("cvePizarra", "WALMEX");
            //walmexT1_18.Add("trimestre", "1");
            //walmexT1_18.Add("cveUsuario", "1");
            //walmexT1_18.Add("idEnvio", "100291");
            //walmexT1_18.Add("acuse", "AC443549466763-rqqszr");
            //walmexT1_18.Add(TestUrlToken, "../../TestInput/XBRL/zip/ifrsxbrl_WALMEX_2018-1.zip");
            //listaResultado.Add(walmexT1_18);

            //var walmexT2_18 = new Dictionary<string, string>();
            //walmexT2_18.Add("fechaTrimestre", "2018-06-30");
            //walmexT2_18.Add("cvePizarra", "WALMEX");
            //walmexT2_18.Add("trimestre", "2");
            //walmexT2_18.Add("cveUsuario", "1");
            //walmexT2_18.Add("idEnvio", "100291");
            //walmexT2_18.Add("acuse", "AC443549466763-rqqszr");
            //walmexT2_18.Add(TestUrlToken, "../../TestInput/XBRL/zip/ifrsxbrl_WALMEX_2018-2.zip");
            //listaResultado.Add(walmexT2_18);


            ////Walmex
            //var walmex = new Dictionary<string, string>();
            //walmex.Add("fechaTrimestre", "2017-03-31");
            //walmex.Add("cvePizarra", "WALMEX");
            //walmex.Add("cveUsuario", "1");
            ////walmex.Add("cveFideicomitente", "FIDECCD");
            //walmex.Add("idEnvio", "100291");
            //walmex.Add("acuse", "AC443549466763-rqqszr");
            //walmex.Add(TestUrlToken, "../../TestInput/XBRL/zip/ifrsxbrl_WALMEX_2017-1_modificado.zip");
            //listaResultado.Add(walmex);

            ////Asur
            //var asur = new Dictionary<string, string>();
            //asur.Add("fechaTrimestre", "2017-06-30");
            //asur.Add("cvePizarra", "ASUR");
            //asur.Add("cveUsuario", "1");
            ////asur.Add("cveFideicomitente", "FIDECCD");
            //asur.Add("idEnvio", "100292");
            //asur.Add("acuse", "AC443549466763-rqqszr");
            //asur.Add(TestUrlToken, "../../TestInput/XBRL/zip/ifrsxbrl_ASUR_2017-2.zip");
            //listaResultado.Add(asur);

            ////Nbis
            //var nbis = new Dictionary<string, string>();
            //nbis.Add("cvePizarra", "2HSOFT");
            //nbis.Add("cveUsuario", "1");
            //nbis.Add("idEnvio", "100292");
            //nbis.Add("valorPeroiodo", "2017");
            //nbis.Add("acuse", "AC443549466763-rqqszr");
            //nbis.Add(TestUrlToken, "../../TestInput/XBRL/zip/NBIS.zip");
            //listaResultado.Add(nbis);
            ////H1
            //var h1 = new Dictionary<string, string>();
            //h1.Add("cvePizarra", "2HSOFT");
            //h1.Add("cveUsuario", "1");
            //h1.Add("idEnvio", "100292");
            //h1.Add("acuse", "AC443549466763-rqqszr");
            //h1.Add("fechaColocacion", "2017-05-01");
            //h1.Add(TestUrlToken, "../../TestInput/XBRL/zip/Anexo H prueba.zip");
            //listaResultado.Add(h1);
            ////H1Bis
            //var hbis1 = new Dictionary<string, string>();
            //hbis1.Add("cvePizarra", "2HSOFT");
            //hbis1.Add("cveUsuario", "1");
            //hbis1.Add("idEnvio", "100292");
            //hbis1.Add("acuse", "AC443549466763-rqqszr");
            //hbis1.Add("fechaColocacion", "2017-05-01");
            //hbis1.Add(TestUrlToken, "../../TestInput/XBRL/zip/Anexo HBIS1 prueba.zip");
            //listaResultado.Add(hbis1);

            ////AnexoT
            //var anexoT = new Dictionary<string, string>();
            //anexoT.Add("cvePizarra", "2HSOFT");
            //anexoT.Add("cveUsuario", "1");
            //anexoT.Add("idEnvio", "100292");
            //anexoT.Add("acuse", "AC443549466763-rqqszr");
            //anexoT.Add("valorPeroiodo", "2017 - 05");
            //anexoT.Add(TestUrlToken, "../../TestInput/XBRL/zip/2H - Anexo T.zip");
            //listaResultado.Add(anexoT);

            ////eventoRelEmi
            //var eventoRelEmi = new Dictionary<string, string>();
            //eventoRelEmi.Add("cvePizarra", "2HSOFT");
            //eventoRelEmi.Add("cveUsuario", "1");
            //eventoRelEmi.Add("idEnvio", "100292");
            //eventoRelEmi.Add("acuse", "AC443549466763-rqqszr");
            //eventoRelEmi.Add(TestUrlToken, "../../TestInput/XBRL/zip/rel_ev-emisoras.zip");
            //listaResultado.Add(eventoRelEmi);

            ////eventoRelEmi
            //var eventoRelFon = new Dictionary<string, string>();
            //eventoRelFon.Add("cvePizarra", "2HSOFT");
            //eventoRelFon.Add("cveUsuario", "1");
            //eventoRelFon.Add("idEnvio", "100292");
            //eventoRelFon.Add("acuse", "AC443549466763-rqqszr");
            //eventoRelFon.Add(TestUrlToken, "../../TestInput/XBRL/zip/rel_ev-fondos.zip");
            //listaResultado.Add(eventoRelFon);
            //AA FUNO
            //var funoAA = new Dictionary<string, string>();
            //funoAA.Add("cvePizarra", "FUNO");
            //funoAA.Add("cveUsuario", "1");
            //funoAA.Add("idEnvio", "100292");
            //funoAA.Add("acuse", "AC443549466763-rqqszr");
            //funoAA.Add("fechaTrimestre", "2016-03-31");
            //funoAA.Add(TestUrlToken, "../../TestInput/XBRL/zip/ifrsxbrl_FUNO_2016.zip");
            //listaResultado.Add(funoAA);
            ////CCD Anexo AA.zip
            //var CCDAA = new Dictionary<string, string>();
            //CCDAA.Add("cvePizarra", "2HSOFT");
            //CCDAA.Add("cveUsuario", "1");
            //CCDAA.Add("idEnvio", "100292");
            //CCDAA.Add("acuse", "AC443549466763-rqqszr");
            //CCDAA.Add("fechaTrimestre", "2016-03-31");
            //CCDAA.Add(TestUrlToken, "../../TestInput/XBRL/zip/CCDAnexoAA.zip");
            //listaResultado.Add(CCDAA);

            //CFE ICS
            //var CFE = new Dictionary<string, string>();
            //CFE.Add("cvePizarra", "2HSOFT");
            //CFE.Add("cveUsuario", "1");
            //CFE.Add("idEnvio", "100292");
            //CFE.Add("acuse", "AC443549466763-rqqszr");
            //CFE.Add("fechaTrimestre", "2017-09-30");
            //CFE.Add(TestUrlToken, "../../TestInput/XBRL/zip/ifrsxbrl_CFE_2017-3.zip");
            //listaResultado.Add(CFE);

            //Walmex
            //var bimbo = new Dictionary<string, string>();
            //bimbo.Add("fechaTrimestre", "2017-03-31");
            //bimbo.Add("cvePizarra", "BIMBO");
            //bimbo.Add("cveUsuario", "1");
            //bimbo.Add("idEnvio", "100291");
            //bimbo.Add("acuse", "AC443549466763-rqqszr");
            //bimbo.Add("valorPeroiodo", "2017");
            //bimbo.Add(TestUrlToken, "../../TestInput/XBRL/zip/BIMBOAjustado.zip");
            //listaResultado.Add(bimbo);

            //var alfa201704 = new Dictionary<string, string>();
            //alfa201704.Add("fechaTrimestre", "2017-04-31");
            //alfa201704.Add("cvePizarra", "ALFA");
            //alfa201704.Add("cveUsuario", "1");
            //alfa201704.Add("idEnvio", "100291");
            //alfa201704.Add("acuse", "AC443549466763-rqqszr");
            //alfa201704.Add(TestUrlToken, "../../TestInput/XBRL/zip/ifrsxbrl_ALFA_2017-4.zip");
            //listaResultado.Add(alfa201704);

            //var bimboAnual = new Dictionary<string, string>();
            //bimboAnual.Add("fechaTrimestre", "2017-04-31");
            //bimboAnual.Add("cvePizarra", "BIMBO");
            //bimboAnual.Add("cveUsuario", "1");
            //bimboAnual.Add("idEnvio", "100291");
            //bimboAnual.Add("valorPeroiodo", "2017");
            //bimboAnual.Add("acuse", "AC443549466763-rqqszr");
            //bimboAnual.Add(TestUrlToken, "../../TestInput/XBRL/zip/Bimbo_2016_Anual.zip");
            //listaResultado.Add(bimboAnual);

            //Asur
            //var asur = new Dictionary<string, string>();
            //asur.Add("fechaTrimestre", "2017-06-30");
            //asur.Add("cvePizarra", "2HSOFT");
            //asur.Add("cveUsuario", "1");
            //asur.Add("cveFideicomitente", "12345");
            //asur.Add("idEnvio", "100292");
            //asur.Add("acuse", "AC443549466763-rqqszr");
            //asur.Add(TestUrlToken, "../../TestInput/XBRL/zip/SCGCK16 4T17 Final.zip");
            //listaResultado.Add(asur);

            //ar_n
            //var ar_n = new dictionary<string, string>();
            //ar_n.add("cvepizarra", "2hsoft");
            //ar_n.add("cveusuario", "1");
            //ar_n.add("idenvio", "100292");
            //ar_n.add("valorperoiodo", "2018");
            //ar_n.add("acuse", "ac443549466763-rqqszr");
            //ar_n.add(testurltoken, "../../testinput/xbrl/reporteanual/n.zip");
            //listaresultado.add(ar_n);

            ////ar_N
            //var ar_N = new Dictionary<string, string>();
            //ar_N.Add("cvePizarra", "2HSOFT");
            //ar_N.Add("cveUsuario", "1");
            //ar_N.Add("idEnvio", "100292");
            //ar_N.Add("valorPeroiodo", "2018");
            //ar_N.Add("acuse", "AC443549466763-rqqszr");
            //ar_N.Add(TestUrlToken, "../../TestInput/XBRL/zip/Anexo N Plantillas.zip");
            //listaResultado.Add(ar_N);
            //ar_NBIS1
            //var ar_NBIS1 = new Dictionary<string, string>();
            //ar_NBIS1.Add("cvePizarra", "2HSOFT");
            //ar_NBIS1.Add("cveUsuario", "1");
            //ar_NBIS1.Add("idEnvio", "100292");
            //ar_NBIS1.Add("valorPeroiodo", "2018");
            //ar_NBIS1.Add("acuse", "AC443549466763-rqqszr");
            //ar_NBIS1.Add(TestUrlToken, "../../TestInput/XBRL/reporteAnual/NBIS1.zip");
            //listaResultado.Add(ar_NBIS1);

            ////ar_NBIS2
            //var ar_NBIS2 = new Dictionary<string, string>();
            //ar_NBIS2.Add("cvePizarra", "2HSOFT");
            //ar_NBIS2.Add("cveUsuario", "1");
            //ar_NBIS2.Add("idEnvio", "100292");
            //ar_NBIS2.Add("valorPeroiodo", "2018");
            //ar_NBIS2.Add("acuse", "AC443549466763-rqqszr");
            //ar_NBIS2.Add(TestUrlToken, "../../TestInput/XBRL/reporteAnual/NBIS2.zip");
            //listaResultado.Add(ar_NBIS2);

            ////ar_NBIS3
            //var ar_NBIS3 = new Dictionary<string, string>();
            //ar_NBIS3.Add("cvePizarra", "2HSOFT");
            //ar_NBIS3.Add("cveUsuario", "1");
            //ar_NBIS3.Add("idEnvio", "100292");
            //ar_NBIS3.Add("valorPeroiodo", "2018");
            //ar_NBIS3.Add("acuse", "AC443549466763-rqqszr");
            //ar_NBIS3.Add(TestUrlToken, "../../TestInput/XBRL/reporteAnual/NBIS3.zip");
            //listaResultado.Add(ar_NBIS3);

            ////ar_NBIS4
            //var ar_NBIS4 = new Dictionary<string, string>();
            //ar_NBIS4.Add("cvePizarra", "2HSOFT");
            //ar_NBIS4.Add("cveUsuario", "1");
            //ar_NBIS4.Add("idEnvio", "100292");
            //ar_NBIS4.Add("valorPeroiodo", "2018");
            //ar_NBIS4.Add("cveFideicomitente", "2HSOFT");
            //ar_NBIS4.Add("acuse", "AC443549466763-rqqszr");
            //ar_NBIS4.Add(TestUrlToken, "../../TestInput/XBRL/reporteAnual/NBIS4-12345.zip");
            //listaResultado.Add(ar_NBIS4);

            ////ar_NBIS4B
            //var ar_NBIS4B = new Dictionary<string, string>();
            //ar_NBIS4B.Add("cvePizarra", "2HSOFT");
            //ar_NBIS4B.Add("cveUsuario", "1");
            //ar_NBIS4B.Add("idEnvio", "100292");
            //ar_NBIS4B.Add("valorPeroiodo", "2018");
            //ar_NBIS4B.Add("cveFideicomitente", "2HSOFT");
            //ar_NBIS4B.Add("acuse", "AC443549466763-rqqszr");
            //ar_NBIS4B.Add(TestUrlToken, "../../TestInput/XBRL/reporteAnual/NBIS4-67890.zip");
            //listaResultado.Add(ar_NBIS4B);

            ////ar_NBIS5
            //var ar_NBIS5 = new Dictionary<string, string>();
            //ar_NBIS5.Add("cvePizarra", "2HSOFT");
            //ar_NBIS5.Add("cveUsuario", "1");
            //ar_NBIS5.Add("idEnvio", "100292");
            //ar_NBIS5.Add("valorPeroiodo", "2018");
            //ar_NBIS5.Add("acuse", "AC443549466763-rqqszr");
            //ar_NBIS5.Add(TestUrlToken, "../../TestInput/XBRL/reporteAnual/NBIS5.zip");
            //listaResultado.Add(ar_NBIS5);

            ////ar_O
            //var ar_O = new Dictionary<string, string>();
            //ar_O.Add("cvePizarra", "2HSOFT");
            //ar_O.Add("cveUsuario", "1");
            //ar_O.Add("idEnvio", "100292");
            //ar_O.Add("valorPeroiodo", "2018");
            //ar_O.Add("acuse", "AC443549466763-rqqszr");
            //ar_O.Add(TestUrlToken, "../../TestInput/XBRL/reporteAnual/O.zip");
            //listaResultado.Add(ar_O);

            ////Walmex
            //var walmex = new Dictionary<string, string>();
            //walmex.Add("fechaTrimestre", "2017-12-31");
            //walmex.Add("cvePizarra", "2HSOFT");
            //walmex.Add("cveUsuario", "1");
            ////walmex.Add("cveFideicomitente", "FIDECCD");
            //walmex.Add("idEnvio", "100291");
            //walmex.Add("acuse", "AC443549466763-rqqszr");
            //walmex.Add(TestUrlToken, "../../TestInput/XBRL/auxiliar/WSMX2CK16 4T 2017.zip");
            //listaResultado.Add(walmex);

            ////ar_N_01
            //var ar_N_01 = new Dictionary<string, string>();
            //ar_N_01.Add("cvePizarra", "2HSOFT");
            //ar_N_01.Add("cveUsuario", "1");
            //ar_N_01.Add("idEnvio", "100292");
            //ar_N_01.Add("valorPeroiodo", "2016");
            //ar_N_01.Add("acuse", "AC443549466763-rqqszr");
            //ar_N_01.Add(TestUrlToken, "../../TestInput/XBRL/auxiliar/XBRL_GBM_2016_4_20180402062424.zip");
            //listaResultado.Add(ar_N_01);


            ////ar_N
            //var bimbo = new Dictionary<string, string>();
            //bimbo.Add("cvePizarra", "BIMBO");
            //bimbo.Add("cveUsuario", "1");
            //bimbo.Add("idEnvio", "100292");
            //bimbo.Add("valorPeroiodo", "2018");
            //bimbo.Add("acuse", "AC443549466763-rqqszr");
            //bimbo.Add(TestUrlToken, @"C:\2HSoftware\Proyectos\AbaxXBRL\AbaxXBRL\TestAbaxXBRL\TestInput\XBRL\zip\Reporte Anual BMV 2017 BIMBO.zip");
            //listaResultado.Add(bimbo);

            //Findep
            //var Findep = new Dictionary<string, string>();
            //Findep.Add("cvePizarra", "SFPLUS");
            //Findep.Add("cveUsuario", "1");
            //Findep.Add("idEnvio", "10318");
            //Findep.Add("valorPeroiodo", "2017");
            //Findep.Add("acuse", "AC443549466763-rqqszr");
            //Findep.Add(TestUrlToken, "../../TestInput/XBRL/auxiliar/XBRL_SFPLUS_2017_4_20180430143010.xbrl");
            //listaResultado.Add(Findep);
            /*
            Findep = new Dictionary<string, string>();
            Findep.Add("cvePizarra", "FINDEP");
            Findep.Add("cveUsuario", "1");
            Findep.Add("idEnvio", "100292");
            Findep.Add("valorPeroiodo", "2017");
            Findep.Add("acuse", "AC443549466763-rqqszr");
            Findep.Add(TestUrlToken, "../../TestInput/XBRL/auxiliar/Findep.zip");
            listaResultado.Add(Findep);
            */

            ////ar_NBIS1 ABCCB_F959
            //var ABCCB_F959 = new Dictionary<string, string>();
            //ABCCB_F959.Add("cvePizarra", "ABCCB");
            //ABCCB_F959.Add("cveFideicomitente", "ABCCB");
            //ABCCB_F959.Add("cveUsuario", "1");
            //ABCCB_F959.Add("idEnvio", "100292");
            //ABCCB_F959.Add("valorPeroiodo", "2017");
            //ABCCB_F959.Add("acuse", "AC443549466763-rqqszr");
            //ABCCB_F959.Add(TestUrlToken, "../../TestInput/XBRL/reporteAnual/ABCCB_F959.zip");
            //listaResultado.Add(ABCCB_F959);

            ////ar_NBIS1 ABCCB_1061
            //var ABCCB_1061 = new Dictionary<string, string>();
            //ABCCB_1061.Add("cvePizarra", "ABCCB");
            //ABCCB_1061.Add("cveFideicomitente", "ABCCB");
            //ABCCB_1061.Add("cveUsuario", "1");
            //ABCCB_1061.Add("idEnvio", "100292");
            //ABCCB_1061.Add("valorPeroiodo", "2017");
            //ABCCB_1061.Add("acuse", "AC443549466763-rqqszr");
            //ABCCB_1061.Add(TestUrlToken, "../../TestInput/XBRL/reporteAnual/ABCCB_1061.zip");
            //listaResultado.Add(ABCCB_1061);

            ////ar_NBIS1 ABCCB_F1061
            //var ABCCB_F1061 = new Dictionary<string, string>();
            //ABCCB_F1061.Add("cvePizarra", "ABCCB");
            //ABCCB_F1061.Add("cveFideicomitente", "ABCCB");
            //ABCCB_F1061.Add("cveUsuario", "1");
            //ABCCB_F1061.Add("idEnvio", "100292");
            //ABCCB_F1061.Add("valorPeroiodo", "2017");
            //ABCCB_F1061.Add("acuse", "AC443549466763-rqqszr");
            //ABCCB_F1061.Add(TestUrlToken, "../../TestInput/XBRL/reporteAnual/ABCCB_F1061.zip");
            //listaResultado.Add(ABCCB_F1061);

            ////AXIS2CK
            //var axis2ck = new Dictionary<string, string>();
            //axis2ck.Add("cvePizarra", "AXIS2CK");
            //axis2ck.Add("cveFideicomitente", "AXIS2CK");
            //axis2ck.Add("cveUsuario", "1");
            //axis2ck.Add("fechaTrimestre", "2017-12-31");
            //axis2ck.Add("idEnvio", "100292");
            //axis2ck.Add("valorPeroiodo", "2017");
            //axis2ck.Add("acuse", "ac443549466763-rqqszr");
            //axis2ck.Add(TestUrlToken, "../../TestInput/XBRL/reporteAnual/AXIS2CK-2071_2017_4D.zip");
            //listaResultado.Add(axis2ck);

            ////AUTLAN
            //var AUTLAN = new Dictionary<string, string>();
            //AUTLAN.Add("cvePizarra", "AUTLAN");
            //AUTLAN.Add("cveUsuario", "1");
            //AUTLAN.Add("idEnvio", "100292");
            //AUTLAN.Add("valorPeroiodo", "2017");
            //AUTLAN.Add("fechaTrimestre", "2017-12-31");
            //AUTLAN.Add("acuse", "AC443549466763-rqqszr");
            //AUTLAN.Add(TestUrlToken, "../../TestInput/XBRL/reporteAnual/AUTLAN_2017-4D.zip");
            //listaResultado.Add(AUTLAN);

            //RASSINI4D2017
            //var RASSINI4D2017 = new Dictionary<string, string>();
            //RASSINI4D2017.Add("cvePizarra", "RASSINI");
            //RASSINI4D2017.Add("cveUsuario", "1");
            //RASSINI4D2017.Add("idEnvio", "100292");
            //RASSINI4D2017.Add("valorPeroiodo", "2017");
            //RASSINI4D2017.Add("fechaTrimestre", "2017-12-31");
            //RASSINI4D2017.Add("acuse", "AC443549466763-rqqszr");
            //RASSINI4D2017.Add(TestUrlToken, "../../TestInput/XBRL/reporteAnual/ifrsxbrl_RASSINI_2017-4.zip");
            //listaResultado.Add(RASSINI4D2017);
            ////RASSINI012018
            //var RASSINI012018 = new Dictionary<string, string>();
            //RASSINI012018.Add("cvePizarra", "RASSINI");
            //RASSINI012018.Add("cveUsuario", "1");
            //RASSINI012018.Add("idEnvio", "100292");
            //RASSINI012018.Add("valorPeroiodo", "2018");
            //RASSINI012018.Add("fechaTrimestre", "2018-03-31");
            //RASSINI012018.Add("acuse", "AC443549466763-rqqszr");
            //RASSINI012018.Add(TestUrlToken, "../../TestInput/XBRL/reporteAnual/ifrsxbrl_RASSINI_2018-1.zip");
            //listaResultado.Add(RASSINI012018);




            return listaResultado;
        }


        /// <summary>
        /// Prueba unitaria para el envío y distribución del documento de instancia sin conectarse alos queue
        /// </summary>
        [TestMethod]
        public void TestProcesarDistribucionDocumentosXBRL()
        {
            LogUtil.LogDirPath = @"..\..\TestOutput\";
            LogUtil.Inicializa();
            var xpe = XPEServiceImpl.GetInstance(true);
            var listaParametros = ObtenParametrosTest();
            var procesador = (IProcesarDistribucionDocumentoXBRLService)applicationContext.GetObject("ProcesarDistribucionDocumentoXBRLService");
            var servicioAlmacenamiento = (IAlmacenarDocumentoInstanciaService)applicationContext.GetObject("AlmacenarDocumentoInstanciaService");
            for (var indexParametro = 0; indexParametro< listaParametros.Count;indexParametro++)
            {

                var parametros = listaParametros[indexParametro];
                var rutaArchivo = parametros[TestUrlToken];
                var nombreArchivo = Path.GetFileName(rutaArchivo);

                using (var streamArchivo = new FileStream(rutaArchivo, FileMode.Open))
                {
                    var resultado = servicioAlmacenamiento.GuardarDocumentoInstanciaXBRL(streamArchivo,Path.GetFullPath(rutaArchivo), nombreArchivo, parametros);
                    if (resultado.Resultado)
                    {
                        var idDocmentoInstancia = ((long[])resultado.InformacionExtra)[0];
                        var versionDocumento = ((long[])resultado.InformacionExtra)[1];
                        procesador.DistribuirDocumentoInstanciaXBRL(idDocmentoInstancia, versionDocumento, new Dictionary<string, object>());
                    }
                    else
                    {
                        LogUtil.Error(resultado);
                    }
                }
                System.GC.Collect();
            }
            
        }

        /// <summary>
        /// Prueba unitaria para el envío y distribución del documento de instancia sin conectarse alos queue
        /// </summary>
        [TestMethod]
        public void TestProcesarDistribucionDocumentosXBRLSinAlmacenar()
        {
            LogUtil.LogDirPath = @"..\..\TestOutput\";
            LogUtil.Inicializa();
            var xpe = XPEServiceImpl.GetInstance(true);
            var listaParametros = ObtenParametrosTest();
            var procesador = (IProcesarDistribucionDocumentoXBRLService)applicationContext.GetObject("ProcesarDistribucionDocumentoXBRLService");
            var servicioAlmacenamiento = (IAlmacenarDocumentoInstanciaService)applicationContext.GetObject("AlmacenarDocumentoInstanciaService");
            for (var indexParametro = 0; indexParametro < listaParametros.Count; indexParametro++)
            {
                var parametros = listaParametros[indexParametro];
                var idEnvio = parametros["idEnvio"];

                procesador.DistribuirDocumentoInstanciaXBRL(Int32.Parse(idEnvio), 1, new Dictionary<string, object>());
            }

        }

        /// <summary>
        /// Prueba unitaria para el envío y distribución del documento de instancia sin conectarse alos queue
        /// </summary>
        [TestMethod]
        public void TestReProcesarDistribucionPDF()
        {
            LogUtil.LogDirPath = @"..\..\TestOutput\";
            LogUtil.Inicializa();
            var xpe = XPEServiceImpl.GetInstance(true);
            var listaParametros = ObtenParametrosTest();
            var procesador = (IProcesarDistribucionDocumentoXBRLService)applicationContext.GetObject("ProcesarDistribucionDocumentoXBRLService");
            var servicioAlmacenamiento = (IAlmacenarDocumentoInstanciaService)applicationContext.GetObject("AlmacenarDocumentoInstanciaService");
            var DocumentoInstanciaRepository = (IDocumentoInstanciaRepository)applicationContext.GetObject("DocumentoInstanciaRepository");
            var VersionDocumentoInstanciaRepository = (IVersionDocumentoInstanciaRepository)applicationContext.GetObject("VersionDocumentoInstanciaRepository");
            var DistribucionExportarPDFLocal = (DistribucionExportarPdfXBRL)applicationContext.GetObject("DistribucionExportarPDFLocal");
            var ArchivoDocumentoInstanciaRepository = (IArchivoDocumentoInstanciaRepository)applicationContext.GetObject("ArchivoDocumentoInstanciaRepository");
            var xpeServ = XPEServiceImpl.GetInstance(true);


            var idDocumentoInstancia = 10317;
            var instanciaDb = DocumentoInstanciaRepository.GetById(idDocumentoInstancia);
            var versionBD = VersionDocumentoInstanciaRepository
                .ObtenerUltimaVersionDocumentoInstancia(idDocumentoInstancia, instanciaDb.UltimaVersion.Value);
            var documentoInstanciaXbrlDto =
                   JsonConvert.DeserializeObject<DocumentoInstanciaXbrlDto>(ZipUtil.UnZip(versionBD.Datos));

            //if (documentoInstanciaXbrlDto.ParametrosConfiguracion == null || documentoInstanciaXbrlDto.ParametrosConfiguracion.Count == 0)
            //{
            //    documentoInstanciaXbrlDto.ParametrosConfiguracion = ObtenParametrosConfiguracion(documentoInstanciaXbrlDto, parametros);
            //}


            if (documentoInstanciaXbrlDto.Taxonomia == null)
            {
                ObtenerTaxonomia(documentoInstanciaXbrlDto);
            }

            ArchivoDocumentoInstanciaRepository.EliminaArchivosDistribucion(idDocumentoInstancia, 2);

            DistribucionExportarPDFLocal.EjecutarDistribucion(documentoInstanciaXbrlDto, null);
        }
        /// <summary>
        /// Obtiene la taxonomía de un documento de instacia.
        /// </summary>
        /// <param name="instanciaDto">Documento de instancia del cual se pretende obtener la taxonomía.</param>
        private void ObtenerTaxonomia(DocumentoInstanciaXbrlDto instanciaDto)
        {
            var _cacheTaxonomiaXbrl = (ICacheTaxonomiaXBRL)applicationContext.GetObject("CacheTaxonomia");
            var xpeServ = XPEServiceImpl.GetInstance(true);
            var taxonomiaDto = _cacheTaxonomiaXbrl.ObtenerTaxonomia(instanciaDto.DtsDocumentoInstancia);
            if (taxonomiaDto == null)
            {
                var erroresTax = new List<ErrorCargaTaxonomiaDto>();
                foreach (var dts in instanciaDto.DtsDocumentoInstancia)
                {
                    if (dts.Tipo == DtsDocumentoInstanciaDto.SCHEMA_REF)
                    {
                        taxonomiaDto = xpeServ.CargarTaxonomiaXbrl(dts.HRef, erroresTax, true);
                        break;
                    }
                }

                if (!erroresTax.Any(x => x.Severidad == ErrorCargaTaxonomiaDto.SEVERIDAD_FATAL))
                {
                    _cacheTaxonomiaXbrl.AgregarTaxonomia(instanciaDto.DtsDocumentoInstancia, taxonomiaDto);
                }
                else
                {
                    LogUtil.Error(erroresTax);

                }
            }

            if (taxonomiaDto != null)
            {
                instanciaDto.EspacioNombresPrincipal = taxonomiaDto.EspacioNombresPrincipal;
                instanciaDto.Taxonomia = taxonomiaDto;
            }
        }

    }
}
