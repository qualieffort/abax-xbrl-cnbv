using System.Globalization;
using System.Security.Cryptography;
using AbaxXBRL.Util;
using AbaxXBRLCore.Common.Util;
using Aspose.Words;
using Aspose.Words.Tables;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Text;
using AbaxXBRL.Taxonomia.Impl;
using AbaxXBRLCore.Viewer.Application.Dto;
using AbaxXBRLCore.Viewer.Application.Import;
using AbaxXBRLCore.Viewer.Application.Import.Impl;
using AbaxXBRLCore.Viewer.Application.Model;
using AbaxXBRLCore.Viewer.Application.Model.Impl;
using AbaxXBRLCore.Viewer.Application.Service.Impl;
using Newtonsoft.Json;
using NPOI.SS.Formula.Functions;
using Spring.Testing.Microsoft;
using Row = Aspose.Words.Tables.Row;
using AbaxXBRLCore.XPE.Common.Util;
using AbaxXBRLCore.XPE;
using AbaxXBRLCore.XPE.impl;
using java.util;
using AbaxXBRLCore.Common.Cache.Impl;
using AbaxXBRLCore.XPE.Common;

namespace TestAbaxXBRL
{

       

    /// <summary>
    /// Prueba unitaria para la importación genérica de excel
    /// </summary>
    [TestClass]
    public class TestImportarArchivosDocumento:  AbstractDependencyInjectionSpringContextTests
    {
        private static int _renglonPrimariosTotales = 2;
        private static int _columnaInicioHechosTotales = 1;
        private static int _columnaFinHechosTotales = 4;
        private static int _renglonDimensionDenominacion = 2;
        private static int _renglonDimensionIntervalo = 4;
        private static int _renglonItemMiembroDenominacion = 3;
        private static int _renglonItemMiembroIntervalo = 5;
        private static int _columnaInicioHechosMontos = 5;
        private static int _columnaFinHechosMontos = 16;
        private static int _renglonInicioHechos = 6;
        private static int _columnaIdHechos = 0;
        private static string _idDimensionInstitucion = "ifrs_mx-cor_20141205_InstitucionEje";
        private static string _templateTypedMemeberInstitucion = "<ifrs_mx-cor_20141205:InstitucionDomain xmlns:ifrs_mx-cor_20141205=\"http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05\">{0}</ifrs_mx-cor_20141205:InstitucionDomain>";
        private static string _institucionTotal = "TOTAL";
        private static string _idDimensionDenominacion = "ifrs_mx-cor_20141205_DenominacionEje";
        private static string _idItemMiembroTotalMonedas = "ifrs_mx-cor_20141205_TotalMonedasMiembro";
        private static string _idDimensionIntervalo = "ifrs_mx-cor_20141205_IntervaloDeTiempoEje";
        private static string _idItemMiembroTotalIntervalos = "ifrs_mx-cor_20141205_TotalIntervalosMiembro";
        private static string _valorSI = "si";
        private static string _valorNO = "no";
        private static string _totalDeCreditos = "Total de créditos";

        protected override string[] ConfigLocations
        {
            get
            {
                return new string[]
                {
                    "assembly://AbaxXBRLCore/AbaxXBRLCore.Config/templates.xml",
                    "assembly://AbaxXBRLCore/AbaxXBRLCore.Config/templatesold.xml"
                };
            }
        }

        [TestMethod]
        public void TestImportarExcelConPlantilla()
        {


             var documentoInstancia = new DocumentoInstanciaXBRL();
             documentoInstancia.Cargar(new FileStream(@"C:\Users\LMORALESG\Downloads\PruebaLuisAngel.xbrl", FileMode.Open));

             var viewService = new XbrlViewerService();

             var instanciaDto = viewService.PreparaDocumentoParaVisor(documentoInstancia,null);
             instanciaDto.IdEmpresa = 1;

             var jsonDoc = JsonConvert.SerializeObject(instanciaDto, new JsonSerializerSettings()
             {
                 ReferenceLoopHandling = ReferenceLoopHandling.Ignore
             });

             using (StreamWriter outfile = new StreamWriter(@"doinstTest.json"))
             {
                 outfile.Write(jsonDoc);
             }
            
            instanciaDto = null;
            using (var reader = new StreamReader(@"doinstTest.json"))
            {
                instanciaDto = JsonConvert.DeserializeObject<DocumentoInstanciaXbrlDto>(reader.ReadToEnd());
            }

            var tax = instanciaDto.Taxonomia;
            var dts = instanciaDto.DtsDocumentoInstancia;
            instanciaDto = new DocumentoInstanciaXbrlDto();

            instanciaDto.Taxonomia = tax;
            instanciaDto.DtsDocumentoInstancia = dts;

            ActivadorLicenciaAsposeUtil.ActivarAsposeWords();

            instanciaDto.ParametrosConfiguracion = new Dictionary<string, string>();
            instanciaDto.ParametrosConfiguracion.Add("trimestre", "3");
            instanciaDto.ParametrosConfiguracion.Add("primerAnio", "true");
            instanciaDto.ParametrosConfiguracion.Add("emisora", "PEMEX");
            instanciaDto.ParametrosConfiguracion.Add("anio", "2015-01-01T06:00:00.000Z");
            instanciaDto.ParametrosConfiguracion.Add("moneda", "http://www.xbrl.org/2003/iso4217:MXN");
            instanciaDto.EspacioNombresPrincipal = "http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_ics_entry_point_2014-12-05";
            using (var archivo = new FileStream(@"C:\Users\Emigdio\Desktop\ifrs_2014_ics_lleno_nuevo.xlsx", FileMode.Open))
            {
                var importador = (IImportadorExportadorArchivoADocumentoInstancia)applicationContext.GetObject("ImportadorExportadorArchivosPlantilla");
                importador.ImportarDatosExcel(archivo, instanciaDto);
                var resultado = importador.ExportarDocumentoExcel(instanciaDto,"es");
                using (var fileStream = new FileStream(@"C:\Users\Emigdio\Desktop\ifrs_2014_ics_llenado_nuevo_salida.xlsx", FileMode.Create))
                {
                    var instanciaSalida = (byte[])(resultado.InformacionExtra as Dictionary<string, object>)["archivo"];
                    fileStream.Write(instanciaSalida, 0, instanciaSalida.Length);
                }

                resultado = importador.ExportarDocumentoWord(instanciaDto,"es");
                using (var fileStream = new FileStream(@"C:\Users\Emigdio\Desktop\ifrs_2014_ics_llenado_nuevo_salida.docx", FileMode.Create))
                {
                    var instanciaSalida = (byte[])(resultado.InformacionExtra as Dictionary<string, object>)["archivo"];
                    fileStream.Write(instanciaSalida, 0, instanciaSalida.Length);
                }
            }
             
            foreach (var hecho in instanciaDto.HechosPorId.Values)
            {
                Debug.WriteLine(instanciaDto.Taxonomia.ConceptosPorId[hecho.IdConcepto].Id + " : " + hecho.Valor);
            }

        }

        [TestMethod]
        public void TestExportarExcelBmv2014()
        {

            
           
         
            DocumentoInstanciaXbrlDto instanciaDto = null;
            using (var reader = new StreamReader(@"doinstTest.json"))
            {
                instanciaDto = JsonConvert.DeserializeObject<DocumentoInstanciaXbrlDto>(reader.ReadToEnd());
            }
        

           /* var documentoInstancia = new DocumentoInstanciaXBRL();
            documentoInstancia.Cargar(new FileStream(@"C:\workspace_abax\AbaxXBRL\DocumentosInstancia\ifrs2014_t3_primer_anio.xbrl", FileMode.Open));

            var viewService = new XbrlViewerService();

            var instanciaDto = viewService.PreparaDocumentoParaVisor(documentoInstancia);
            instanciaDto.IdEmpresa = 1;

            var jsonDoc = JsonConvert.SerializeObject(instanciaDto, new JsonSerializerSettings()
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            });*/
            
            instanciaDto.ParametrosConfiguracion = new Dictionary<string, string>();
            instanciaDto.ParametrosConfiguracion.Add("trimestre", "3");
            instanciaDto.ParametrosConfiguracion.Add("primerAnio", "true");
            instanciaDto.ParametrosConfiguracion.Add("emisora", "PEMEX");
            instanciaDto.ParametrosConfiguracion.Add("anio", "2015-01-01T06:00:00.000Z");
            instanciaDto.ParametrosConfiguracion.Add("moneda", "http://www.xbrl.org/2003/iso4217:MXN");

            var importador = (IImportadorExportadorArchivoADocumentoInstancia)applicationContext.GetObject("ImportadorExportadorArchivosPlantilla");
            var resultado = importador.ExportarDocumentoExcel(instanciaDto,"es");

            using (var fileStream = new FileStream(@"C:\Users\Emigdio\Desktop\ifrs_2014_ics_llenado.xlsx", FileMode.Create))
            {
                var instanciaSalida = (byte[])(resultado.InformacionExtra as Dictionary<string,object>)["archivo"];
                fileStream.Write(instanciaSalida,0,instanciaSalida.Length);
            }

        
        }
        
        [TestMethod]
        public void TestExportarExcelBmv2012()
        {




           var documentoInstancia = new DocumentoInstanciaXBRL();
           documentoInstancia.Cargar(new FileStream(@"C:\workspace_abax\AbaxXBRL\ifrsxbrl_AC_2014-2.xbrl", FileMode.Open));

             var viewService = new XbrlViewerService();

             var instanciaDto = viewService.PreparaDocumentoParaVisor(documentoInstancia,null);
             instanciaDto.IdEmpresa = 1;

           

            instanciaDto.ParametrosConfiguracion = new Dictionary<string, string>();
            instanciaDto.ParametrosConfiguracion.Add("trimestre", "2");
            instanciaDto.ParametrosConfiguracion.Add("primerAnio", "false");
            instanciaDto.ParametrosConfiguracion.Add("emisora", "AC");
            instanciaDto.ParametrosConfiguracion.Add("anio", "2014-01-27T00:00:00.000Z");
            instanciaDto.ParametrosConfiguracion.Add("moneda", "http://www.xbrl.org/2003/iso4217:MXN");

            var importador = (IImportadorExportadorArchivoADocumentoInstancia)applicationContext.GetObject("ImportadorExportadorArchivosPlantilla");
            var resultado = importador.ExportarDocumentoExcel(instanciaDto,"es");

            using (var fileStream = new FileStream(@"C:\Users\Emigdio\Desktop\ifrs_2012_ics_llenado.xlsx", FileMode.Create))
            {
                var instanciaSalida = (byte[])(resultado.InformacionExtra as Dictionary<string, object>)["archivo"];
                fileStream.Write(instanciaSalida, 0, instanciaSalida.Length);
            }


        }

        [TestMethod]
        public void TestExportarWordBmv2014()
        {
            DateTime fechaNet = new DateTime();
            DateUtil.ParseDate("2015-01-01", DateUtil.YMDateFormat, out fechaNet);
            Date fecha = XPEUtil.CrearJavaDate(fechaNet);

            Debug.WriteLine(fecha.getYear());

            XPEService serv = XPEServiceImpl.GetInstance();

            Debug.WriteLine("COREROOT:" + serv.GetCoreRoot());

            if (serv.GetErroresInicializacion() != null)
            {

            }

            var errores = new List<ErrorCargaTaxonomiaDto>();
            var cache = new CacheTaxonomiaEnMemoriaXBRL();

            var info = new AbaxCargaInfoDto();

            ConfiguracionCargaInstanciaDto config = new ConfiguracionCargaInstanciaDto();

            config.UrlArchivo = @"C:\Users\carlos\Desarrollo\ABAX\CNBV\plani_error\ifrsxbrl_PLANI_2016-3.xbrl";
            config.Errores = errores;
            config.CacheTaxonomia = cache;
            config.InfoCarga = info;
            config.EjecutarValidaciones = false;
            config.ConstruirTaxonomia = true;
            var instancia = serv.CargarDocumentoInstanciaXbrl(config);


            Debug.WriteLine("Tiempo de carga:" + info.MsCarga);
            Debug.WriteLine("Tiempo de Validación:" + info.MsValidacion);
            Debug.WriteLine("Tiempo de Procesamiento de Fórmulas:" + info.MsFormulas);
            Debug.WriteLine("Tiempo de Transformación:" + info.MsTransformacion);
            

            ActivadorLicenciaAsposeUtil.ActivarAsposeWords();

            instancia.ParametrosConfiguracion = new Dictionary<string, string>();
            instancia.ParametrosConfiguracion.Add("trimestre", "3");
            instancia.ParametrosConfiguracion.Add("primerAnio", "false");
            instancia.ParametrosConfiguracion.Add("emisora", "PLANI");
            instancia.ParametrosConfiguracion.Add("anio", "2015-01-01T06:00:00.000Z");
            instancia.ParametrosConfiguracion.Add("moneda", "http://www.xbrl.org/2003/iso4217:MXN");

            var importador = (IImportadorExportadorArchivoADocumentoInstancia)applicationContext.GetObject("ImportadorExportadorArchivosPlantilla");
            var resultado = importador.ExportarDocumentoWord(instancia, "es");

            using (var fileStream = new FileStream(@"C:\Users\carlos\Desarrollo\ABAX\CNBV\plani_error\ifrsxbrl_PLANI_2016-3-test.docx", FileMode.Create))
            {
                var instanciaSalida = (byte[])(resultado.InformacionExtra as Dictionary<string, object>)["archivo"];
                fileStream.Write(instanciaSalida, 0, instanciaSalida.Length);   
            }


        }

        [TestMethod]
        public void TestLicenciaAspose()
        {
            string encryptedFilePath = @"C:\workspace_abax\AbaxXBRL\EncryptedAsposeWordsLicense.txt";

            // Load the contents of the license into a byte array.
            byte[] licBytes = File.ReadAllBytes(@"C:\workspace_abax\AbaxXBRL\Aspose.Words.lic");
            // Use this key only once for this license file.
            //To protect another file first generate a new key.
            byte[] key = GenerateKey(licBytes.Length);

            // Write the encrypted license to disk.
            File.WriteAllBytes(encryptedFilePath, EncryptDecryptLicense(licBytes, key));

            // Load the encrypted license and decrypt it using the key.
            byte[] decryptedLicense;
            decryptedLicense = EncryptDecryptLicense(File.ReadAllBytes(encryptedFilePath), key);

            // Load the decrypted license into a stream and set the license.
            MemoryStream licenseStream = new MemoryStream(decryptedLicense);

            License license = new License();
            license.SetLicense(licenseStream);

        }


        /// <summary>
        /// A method used for encrypting and decrypting data using XOR.
        /// </summary>
        public byte[] EncryptDecryptLicense(byte[] licBytes, byte[] key)
        {
            byte[] output = new byte[licBytes.Length];

            for (int i = 0; i < licBytes.Length; i++)
                output[i] = Convert.ToByte(licBytes[i] ^ key[i]);

            return output;
        }

        /// <summary>
        /// Generates a random key the same length as the license (a one time pad).
        /// </summary>
        public byte[] GenerateKey(long size)
        {
            RNGCryptoServiceProvider rng = new RNGCryptoServiceProvider();
            byte[] strongBytes = new Byte[size];
            rng.GetBytes(strongBytes);

            return strongBytes;
        }

        /*[TestMethod]
        public void TestTablasApose()
        {

            ActivadorLicenciaAsposeUtil.ActivarAsposeWords();

            var doc = new Document(@"C:\Users\Emigdio\Desktop\vcc.docx");

            

            DocumentoInstanciaXbrlDto instanciaDto = null;
            using (var reader = new StreamReader(@"doinstTest.json"))
            {
                instanciaDto = JsonConvert.DeserializeObject<DocumentoInstanciaXbrlDto>(reader.ReadToEnd());
            }


            instanciaDto.ParametrosConfiguracion = new Dictionary<string, string>();
            instanciaDto.ParametrosConfiguracion.Add("trimestre", "3");
            instanciaDto.ParametrosConfiguracion.Add("primerAnio", "true");
            instanciaDto.ParametrosConfiguracion.Add("emisora", "PEMEX");
            instanciaDto.ParametrosConfiguracion.Add("anio", "2015-01-01T06:00:00.000Z");
            instanciaDto.ParametrosConfiguracion.Add("moneda", "http://www.xbrl.org/2003/iso4217:MXN");

            //[A-0-0-0]
            //[Actual-Ajustes Retrospectivos-Elemento Primario-Componentes del Capital]

            DateTime fechaInicio = new DateTime(2015, 1, 1), fechaFin = new DateTime(2015, 9, 30);

            var itemsAjustes = new String[]
                               {
                                   "ifrs-full_RestatedMember",
                                   "ifrs-full_PreviouslyStatedMember",
                                   "ifrs-full_IncreaseDecreaseDueToChangesInAccountingPolicyAndCorrectionsOfPriorPeriodErrorsMember",
                                   "ifrs-full_FinancialEffectOfChangesInAccountingPolicyMember",
                                   "ifrs-full_IncreaseDecreaseDueToChangesInAccountingPolicyRequiredByIFRSsMember",
                                   "ifrs-full_IncreaseDecreaseDueToVoluntaryChangesInAccountingPolicyMember",
                                   "ifrs-full_FinancialEffectOfCorrectionsOfAccountingErrorsMember"
                               };

            var itemComponentesCapital = new string[]
                                         {
                                            "ifrs-full_IssuedCapitalMember",
                                            "ifrs-full_SharePremiumMember",
                                            "ifrs-full_TreasurySharesMember",
                                            "ifrs-full_RetainedEarningsMember",
                                            "ifrs-full_RevaluationSurplusMember",
                                            "ifrs-full_ReserveOfExchangeDifferencesOnTranslationMember",
                                            "ifrs-full_ReserveOfCashFlowHedgesMember",
                                            "ifrs-full_ReserveOfCashFlowHedgesMember",
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

            var elementosPrimarios = new string[]
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


            for (var iAjustes = 0; iAjustes < itemsAjustes.Length; iAjustes++)
            {
                for (var iPrimario=0; iPrimario < elementosPrimarios.Length; iPrimario++)
                {
                    for (var iComponentesCapital = 0;
                        iComponentesCapital < itemComponentesCapital.Length;
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
                                                     IdItemMiembro = itemsAjustes[iAjustes]
                                                 });
                        }
                        if (iComponentesCapital != 24)
                        {
                            listaDimensiones.Add(new DimensionInfoDto()
                                                {
                                                    Explicita = true,
                                                    IdDimension = "ifrs-full_ComponentsOfEquityAxis",
                                                    IdItemMiembro = itemComponentesCapital[iComponentesCapital]
                                                });
                        }

                        var hechos = instanciaDto.BuscarHechos(elementosPrimarios[iPrimario], null, null, fechaInicio, fechaFinFinal,
                            listaDimensiones);
                        if (hechos != null && hechos.Count > 0)
                        {

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

                            doc.Range.Replace("[A-" + iAjustes + "-" + iPrimario + "-" + iComponentesCapital + "]",
                                valorFinal, false, false);
                        }
                        else
                        {
                            doc.Range.Replace("[A-" + iAjustes + "-" + iPrimario + "-" + iComponentesCapital + "]",
                                   "", false, false);
                            
                        }

                    }
                }
            }

            doc.Save(@"c:\Users\Emigdio\Desktop\vcc_salida.docx");



        }*/


        [TestMethod]
        public void TestDesgloseCreditos()
        {

            ActivadorLicenciaAsposeUtil.ActivarAsposeWords();

            var doc = new Document(@"C:\Users\Emigdio\Desktop\800001.docx");



            DocumentoInstanciaXbrlDto instanciaDto = null;
            using (var reader = new StreamReader(@"doinstTest.json"))
            {
                instanciaDto = JsonConvert.DeserializeObject<DocumentoInstanciaXbrlDto>(reader.ReadToEnd());
            }


            instanciaDto.ParametrosConfiguracion = new Dictionary<string, string>();
            instanciaDto.ParametrosConfiguracion.Add("trimestre", "3");
            instanciaDto.ParametrosConfiguracion.Add("primerAnio", "true");
            instanciaDto.ParametrosConfiguracion.Add("emisora", "PEMEX");
            instanciaDto.ParametrosConfiguracion.Add("anio", "2015-01-01T06:00:00.000Z");
            instanciaDto.ParametrosConfiguracion.Add("moneda", "http://www.xbrl.org/2003/iso4217:MXN");

            var plantillaDocumento = (IDefinicionPlantillaXbrl)applicationContext.GetObject("http___www_2hsoftware_com_mx_mx_taxonomy_mx_taxonomy_full_ifrs_mc_mx_ics_entry_point_2014_12_05");
            plantillaDocumento.Inicializar(instanciaDto);
            DateTime fechaInicio = new DateTime(2015, 1, 1), fechaFin = new DateTime(2015, 9, 30);

            //Buscar el la tabla   []
            Table tabla800001 = null;

            NodeCollection allTables = doc.GetChildNodes(NodeType.Table, true);
            foreach (Table table in allTables)
            {
                var celda = table.FirstRow.FirstCell;
                foreach (Paragraph par in celda.Paragraphs)
                {
                    Debug.Write(par.GetText());
                    Debug.WriteLine("");
                    if (par.GetText().Trim().Contains("Institución [eje]"))
                    {
                        tabla800001 = table;
                        break;
                    }
                }
                if (tabla800001 != null)
                {
                    break;
                }
            }

            var _mapeoElementosPrimariosRenglones = new Dictionary<string, string>();
            var _totalDeCreditos = "Total de créditos";
            _mapeoElementosPrimariosRenglones.Add("Comercio exterior (bancarios)", "ifrs_mx-cor_20141205_ComercioExteriorBancarios");

            if (tabla800001 != null)
            {
                for (int iRenglon = 1; iRenglon < tabla800001.Rows.Count; iRenglon++)
                {
                    var valorCeldaElementoPrimario = ObtenerValorCelda(tabla800001.Rows[iRenglon].FirstCell);
                    var keyValElementoPrimario = _mapeoElementosPrimariosRenglones.FirstOrDefault(x => valorCeldaElementoPrimario.Contains(x.Key)).Key;

                    if (keyValElementoPrimario != null)
                    {
                        var idConceptoHechoActual = _mapeoElementosPrimariosRenglones[keyValElementoPrimario];
                            iRenglon += InsertarRenglon(idConceptoHechoActual, instanciaDto, plantillaDocumento, iRenglon, doc, tabla800001);
                        if (_totalDeCreditos.Equals(valorCeldaElementoPrimario.Trim()))
                        {
                            //última fila
                            break;
                        }
                    }
                }
            }
            doc.Save(@"C:\Users\Emigdio\Desktop\800001_out.docx");
            
        }

        private int InsertarRenglon(string idConceptoHechoActual, DocumentoInstanciaXbrlDto instancia, IDefinicionPlantillaXbrl plantillaDocumento, int iRenglon, Document doc, Table tabla800001)
        {


            var _renglonPrimariosTotales = new String[]
                                           {
                                               "ifrs_mx-cor_20141205_InstitucionExtranjeraSiNo",
                                               "ifrs_mx-cor_20141205_FechaDeFirmaContrato",
                                               "ifrs_mx-cor_20141205_FechaDeVencimiento",
                                               "ifrs_mx-cor_20141205_TasaDeInteresYOSobretasa"
                                           };
            			
            int renglonesInsertados = 0;
            DateTime fechaInicio = DateTime.MinValue;
            DateTime fechaFin = DateTime.MinValue;
            //Trimestre actual
            if (AbaxXBRLCore.Common.Util.DateUtil.ParseDate(
                plantillaDocumento.ObtenerVariablePorId("fecha_2015_09_30"),
                AbaxXBRLCore.Common.Util.DateUtil.YMDateFormat, out fechaFin)
                &&
                AbaxXBRLCore.Common.Util.DateUtil.ParseDate(
                    plantillaDocumento.ObtenerVariablePorId("fecha_2015_07_01"),
                    AbaxXBRLCore.Common.Util.DateUtil.YMDateFormat, out fechaInicio))
            {
                var hechosElemento = instancia.BuscarHechos(idConceptoHechoActual, null, null, fechaInicio, fechaFin, null, false);

                var institucionesRelacionadas = ObtenerDistintasInstituciones(hechosElemento, instancia);

                var dimensionDenominacion = new DimensionInfoDto()
                {
                    Explicita = true,
                    IdDimension = _idDimensionDenominacion,
                    IdItemMiembro = _idItemMiembroTotalMonedas
                };
                var dimensionIntervalo = new DimensionInfoDto()
                {
                    Explicita = true,
                    IdDimension = _idDimensionIntervalo,
                    IdItemMiembro = _idItemMiembroTotalIntervalos
                };
                //Escribir renglón de institución
                foreach (var institucionMember in institucionesRelacionadas.Where(x => !x.ElementoMiembroTipificado.Contains(_institucionTotal)))
                {
                    renglonesInsertados++;
                    var renglonNuevo = iRenglon + renglonesInsertados;
                    var dimensiones = new List<DimensionInfoDto>() { dimensionDenominacion, dimensionIntervalo, institucionMember };
                    //insertar renglon

                    var renglon = (Row)tabla800001.Rows[renglonNuevo].Clone(true);

                    tabla800001.InsertAfter(renglon, tabla800001.Rows[renglonNuevo - 1]);

                    renglon.FirstCell.FirstParagraph.AppendChild(new Run(doc, ObtenerNombreInstitucion(institucionMember)));
                    renglon.FirstCell.FirstParagraph.Runs[0].Font.Name = "Arial";
                    renglon.FirstCell.FirstParagraph.Runs[0].Font.Size = 6;
                    //Escribir los elementos primarios que van en total
                    for (var iCol = _columnaInicioHechosTotales; iCol <= _columnaFinHechosTotales; iCol++)
                    {
                        
                        var idConceptoHechoTotal = _renglonPrimariosTotales[iCol - _columnaInicioHechosTotales];

                        var hechoTotal = instancia.BuscarHechos(idConceptoHechoTotal, null, null, fechaInicio, fechaFin, dimensiones);
                        if (hechoTotal != null && hechoTotal.Count > 0)
                        {
                            renglon.Cells[iCol].FirstParagraph.AppendChild(new Run(doc, hechoTotal[0].Valor));
                            renglon.Cells[iCol].FirstParagraph.Runs[0].Font.Name = "Arial";
                            renglon.Cells[iCol].FirstParagraph.Runs[0].Font.Size = 6;
                        }
                        else
                        {
                            //renglon.Cells[iCol].FirstParagraph.Runs[0].Text = "";
                        }
                    }
                    //Montos
                    for (var iCol = _columnaInicioHechosMontos; iCol <= _columnaFinHechosMontos; iCol++)
                    {
                        //dimensionDenominacion.IdItemMiembro = ExcelUtil.ObtenerValorCelda(hojaPlantilla, _renglonItemMiembroDenominacion, iCol);
                        //dimensionIntervalo.IdItemMiembro = ExcelUtil.ObtenerValorCelda(hojaPlantilla, _renglonItemMiembroIntervalo, iCol);

                        //var hechoMonto = instancia.BuscarHechos(idConceptoHechoActual, null, null, fechaInicio, fechaFin, dimensiones);
                        //if (hechoMonto != null && hechoMonto.Count > 0)
                        //{
                        //    ExcelUtil.AsignarValorCelda(hojaAExportar, renglonNuevo, iCol, hechoMonto[0].Valor, CellType.Numeric);
                        //}
                        renglon.Cells[iCol].FirstParagraph.AppendChild(new Run(doc, "0"));
                        renglon.Cells[iCol].FirstParagraph.Runs[0].Font.Name = "Arial";
                        renglon.Cells[iCol].FirstParagraph.Runs[0].Font.Size = 6;
                    }
                }
                //Escribir en renglón de total
                foreach (var institucionMember in institucionesRelacionadas.Where(x => x.ElementoMiembroTipificado.Contains(_institucionTotal)))
                {
                    var dimensiones = new List<DimensionInfoDto>() { dimensionDenominacion, dimensionIntervalo, institucionMember };
                    var renglon = tabla800001.Rows[iRenglon];
                    //Montos
                    for (var iCol = _columnaInicioHechosMontos; iCol <= _columnaFinHechosMontos; iCol++)
                    {
                        /*dimensionDenominacion.IdItemMiembro = ExcelUtil.ObtenerValorCelda(hojaPlantilla, _renglonItemMiembroDenominacion, iCol);
                        dimensionIntervalo.IdItemMiembro = ExcelUtil.ObtenerValorCelda(hojaPlantilla, _renglonItemMiembroIntervalo, iCol);

                        var hechoMonto = instancia.BuscarHechos(idConceptoHechoActual, null, null, fechaInicio, fechaFin, dimensiones);
                        if (hechoMonto != null && hechoMonto.Count > 0)
                        {
                            ExcelUtil.AsignarValorCelda(hojaAExportar, iRenglon + renglonesInsertados, iCol, hechoMonto[0].Valor, CellType.Numeric);
                        }*/
                        renglon.Cells[iCol].FirstParagraph.AppendChild(new Run(doc, "0"));
                        renglon.Cells[iCol].FirstParagraph.Runs[0].Font.Name = "Arial";
                        renglon.Cells[iCol].FirstParagraph.Runs[0].Font.Size = 6;
                    }
                }

            }
            return renglonesInsertados;
        }


        /// <summary>
        /// Obtiene las diferentes valores de dimensión en la dimensión tipificada de institucion
        /// </summary>
        /// <param name="hechosElemento">Conjunto de hechos para obtener las diferentes dimensiones de institucion</param>
        /// <param name="instancia">Documento de instancia de los hechos</param>
        /// <returns></returns>
        private IList<DimensionInfoDto> ObtenerDistintasInstituciones(IList<HechoDto> hechosElemento, DocumentoInstanciaXbrlDto instancia)
        {
            var miembrosInstitucion = new List<DimensionInfoDto>();
            foreach (var hecho in hechosElemento)
            {
                var ctx = instancia.ContextosPorId[hecho.IdContexto];
                if (ctx.Entidad.ValoresDimension != null)
                {
                    foreach (var dimensionInstitucion in ctx.Entidad.ValoresDimension.Where(x => x.IdDimension.Equals(_idDimensionInstitucion)))
                    {
                        if (!miembrosInstitucion.Any(x => x.EsEquivalente(dimensionInstitucion)))
                        {
                            miembrosInstitucion.Add(dimensionInstitucion);
                        }
                    }
                }
            }
            return miembrosInstitucion;
        }

        private string ObtenerValorCelda(Cell cell)
        {
            if (cell.FirstParagraph != null)
            {
                return cell.FirstParagraph.GetText();
            }
            return String.Empty;
        }
        /// <summary>
        /// Obtiene el nombre de la institución
        /// </summary>
        /// <param name="institucionMember">institución con origen de datos</param>
        /// <returns>Nombre de la institucion</returns>
        private string ObtenerNombreInstitucion(DimensionInfoDto institucionMember)
        {
            var nodo = XmlUtil.CrearElementoXML(institucionMember.ElementoMiembroTipificado);
            if (nodo != null && nodo.HasChildNodes)
            {
                return nodo.ChildNodes[0].InnerText;
            }
            return null;
        }
    }


    
}
