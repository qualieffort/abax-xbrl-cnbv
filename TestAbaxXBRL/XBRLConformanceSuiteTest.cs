using System;
using System.Linq;
using System.Collections.Generic;
using System.Diagnostics;
using System.Xml;
using AbaxXBRL.Taxonomia;
using AbaxXBRL.Taxonomia.Impl;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using TestAbaxXBRL.Modelo;
using AbaxXBRL.Taxonomia.Validador;
using AbaxXBRL.Taxonomia.Validador.Impl;
using System.IO;
using System.Text;
using System.Xml.Schema;
using System.Xml.Xsl;
using System.Xml.XPath;

namespace TestAbaxXBRL
{
    /// <summary>
    /// Implementación de una prueba unitaria para validar el apego del procesador Abax XBRL a la especificación 2.1
    /// <author>José Antonio Huizar Moreno</author>
    /// <version>1.0</version>
    /// </summary>
    [TestClass]
    public class XBRLConformanceSuiteTest
    {

        /// <summary>
        /// El nombre de la etiqueta que agrupa los casos de prueba
        /// </summary>
        private const string TestCasesTag = "testcases";

        /// <summary>
        /// El nombre de la etiqueta que contiene la definición de un caso de prueba
        /// </summary>
        private const string TestCaseTag = "testcase";

        /// <summary>
        /// El nombre de la etiqueta que contiene la definición de una variación o escenario de un caso de prueba
        /// </summary>
        private const string VariationTag = "variation";

        /// <summary>
        /// El nombre de la etiqueta que agrupa los datos de una variación de un caso de prueba
        /// </summary>
        private const string DataTag = "data";

        /// <summary>
        /// El nombre de la etiqueta que contiene la definición de un archivo de prueba de tipo XSD
        /// </summary>
        private const string XsdTag = "xsd";

        /// <summary>
        /// El nombre de la etiqueta que contiene la definición de un archivo de prueba de tipo LINKBASE
        /// </summary>
        private const string LinkbaseTag = "linkbase";

        /// <summary>
        /// El nombre de la etiqueta que contiene la definición de un archivo de prueba de tipo INSTANCE
        /// </summary>
        private const string InstanceTag = "instance";

        /// <summary>
        /// El nombre de la etiqueta que contiene la definición del resultado esperado del caso de prueba
        /// </summary>
        private const string ResultTag = "result";

        /// <summary>
        /// El nombre de la etiqueta que contiene la descripción del elemento
        /// </summary>
        private const string DescriptionTag = "description";

        /// <summary>
        /// El nombre del atributo que indica si el archivo deberá ser el primer leído por el procesador XBRL
        /// </summary>
        private const string ReadMeFirstAttribute = "readMeFirst";

        /// <summary>
        /// El nombre del atributo que contiene el resultado esperado de la variación del caso de prueba
        /// </summary>
        private const string ExpectedAttribute = "expected";

        /// <summary>
        /// El nombre del atributo que contiene el uri donde se encuentra el archivo con la definición del caso de prueba
        /// </summary>
        private const string UriAttribute = "uri";

        /// <summary>
        /// El nombre del atributo que contiene el identificador del elemento
        /// </summary>
        private const string IdAttribute = "id";

        /// <summary>
        /// El nombre del atributo que contiene el nombre del elemento en el caso de prueba
        /// </summary>
        private const string NameAttribute = "name";

        /// <summary>
        /// El nombre del atributo que contiene la descripción del elemento
        /// </summary>
        private const string DescriptionAttribute = "description";

        /// <summary>
        /// El nombre del atributo que contiene la ruta de salida del caso de prueba
        /// </summary>
        private const string OutpathAttribute = "outpath";

        /// <summary>
        /// El nombre del atributo que contiene el correo electrónico del contacto principal del caso de prueba
        /// </summary>
        private const string OwnerAttribute = "owner";

        /// <summary>
        /// El nombre del atributo que indica si el caso de prueba es parte del Minimal Conformance Suite
        /// </summary>
        private const string MinimalAttribute = "minimal";

        /// <summary>
        /// Los casos de prueba que se ejecutarán
        /// </summary>
        private static IList<TestCase> casosPrueba = new List<TestCase>();

        /// <summary>
        /// La ruta base donde se encuentran los casos de prueba
        /// </summary>
        private static Uri uriBaseCasosPrueba;

        /// <summary>
        /// Carga los XML con la configuración de los casos de prueba
        /// </summary>
        public static void CargarCasosPrueba()
        {
            Uri startUri = new Uri("C:\\workspace_abax\\AbaxXBRL\\XBRL-CONF-CR5-2012-01-24\\xbrl.xml", UriKind.Absolute);
            //Uri startUri = new Uri("C:\\dotNet\\AbaxXBRL_1\\AbaxXBRL\\XBRL-CONF-CR5-2012-01-24\\xbrl.xml", UriKind.Absolute);
            uriBaseCasosPrueba = startUri;

            XmlReaderSettings settings = new XmlReaderSettings();
            settings.IgnoreComments = true;

            XmlReader xmlReader = XmlReader.Create(startUri.AbsolutePath, settings);

            if (xmlReader.Read())
            {
                XmlDocument documentoCasosPrueba = new XmlDocument();
                documentoCasosPrueba.Load(xmlReader);

                foreach (XmlNode nodo in documentoCasosPrueba.ChildNodes)
                {
                    if (nodo.Name.Equals(TestCasesTag, StringComparison.InvariantCultureIgnoreCase))
                    {
                        foreach (XmlNode nodoCasoPrueba in nodo.ChildNodes)
                        {
                            if (nodoCasoPrueba.Name.Equals(TestCaseTag, StringComparison.InvariantCultureIgnoreCase))
                            {
                                XmlAttribute uriCasoPrueba = nodoCasoPrueba.Attributes[UriAttribute];
                                Assert.IsNotNull(uriCasoPrueba, "Se encontró la definición de un caso de prueba sin el atributo URI.");

                                Uri uri = new Uri(startUri, uriCasoPrueba.Value);

                                try
                                {
                                    ProcesarCasoDePrueba(uri);
                                }
                                catch (Exception e)
                                {
                                    Debug.WriteLine(e, "Ocurrió un error al procesar el caso de prueba ubicado en el URI " + uri.ToString());
                                }
                            }
                        }
                    }
                }
            }
            else
            {
                Assert.Fail("No fue posible cargar el documento con los casos de prueba del Conformance Suite.");
            }
        }
        /// <summary>
        /// Carga los XML de configuración correspondientes a la especificación de dimensiones 1.0
        /// </summary>
        public static void CargarCasosPruebaDimensions()
        {
            Uri startUri = new Uri("C:\\workspace_abax\\AbaxXBRL\\XDT-CONF-CR4-2009-10-06\\xdt.xml", UriKind.Absolute);
            //Uri startUri = new Uri("C:\\dotNet\\AbaxXBRL_1\\AbaxXBRL\\XDT-CONF-CR4-2009-10-06\\xdt.xml", UriKind.Absolute);
            uriBaseCasosPrueba = startUri;

            XmlReaderSettings settings = new XmlReaderSettings();
            settings.IgnoreComments = true;

            XmlReader xmlReader = XmlReader.Create(startUri.AbsolutePath, settings);

            if (xmlReader.Read())
            {
                XmlDocument documentoCasosPrueba = new XmlDocument();
                documentoCasosPrueba.Load(xmlReader);

                foreach (XmlNode nodo in documentoCasosPrueba.ChildNodes)
                {
                    if (nodo.Name.Equals(TestCasesTag, StringComparison.InvariantCultureIgnoreCase))
                    {
                        foreach (XmlNode nodoCasoPrueba in nodo.ChildNodes)
                        {
                            if (nodoCasoPrueba.Name.Equals(TestCaseTag, StringComparison.InvariantCultureIgnoreCase))
                            {
                                XmlAttribute uriCasoPrueba = nodoCasoPrueba.Attributes[UriAttribute];
                                Assert.IsNotNull(uriCasoPrueba, "Se encontró la definición de un caso de prueba sin el atributo URI.");

                                Uri uri = new Uri(startUri, uriCasoPrueba.Value);

                                try
                                {
                                    ProcesarCasoDePrueba(uri);
                                }
                                catch (Exception e)
                                {
                                    Debug.WriteLine(e, "Ocurrió un error al procesar el caso de prueba ubicado en el URI " + uri.ToString());
                                }
                            }
                        }
                    }
                }
            }
            else
            {
                Assert.Fail("No fue posible cargar el documento con los casos de prueba del Conformance Suite.");
            }
        }

        /// <summary>
        /// Valida el apego del procesador Abax XBRL a la suite de conformidad de la especificación 2.1
        /// </summary>
        [TestMethod]
        public void XBRLConformanceAllTests()
        {
            XBRLConformanceSuiteTest.CargarCasosPrueba();
            foreach (TestCase testCase in casosPrueba)
            {
                EjecutarTodasLasVariacionesDeCasoDePrueba(testCase);
            }
        }

        /// <summary>
        /// Valida los casos de prueba Schema - 100
        /// </summary>
        [TestMethod]
        public void XBRLConformance100SchemaTests()
        {
            XBRLConformanceSuiteTest.CargarCasosPrueba();
            foreach (TestCase testCase in casosPrueba.Where(c => c.Path.Contains("Common/100-schema/")))
            {
                EjecutarTodasLasVariacionesDeCasoDePrueba(testCase);
            }
        }
        /// <summary>
        /// Valida el caso de prueba 114 - 02
        /// </summary>
        [TestMethod]
        public void XBRLConformance114V04Tests()
        {
            XBRLConformanceSuiteTest.CargarCasosPrueba();
            foreach (TestCase testCase in casosPrueba.Where(c => c.Name.Equals("LAX validation tests")))
            {
                EjecutarVariacionDeCasoDePrueba(testCase, "v04-appinfo-has-linkbase-no-errors");
            }
        }

        /// <summary>
        /// Valida el caso de prueba 114 - 02
        /// </summary>
        [TestMethod]
        public void XBRLConformance114V02Tests()
        {
            XBRLConformanceSuiteTest.CargarCasosPrueba();
            foreach (TestCase testCase in casosPrueba.Where(c => c.Name.Equals("LAX validation tests")))
            {
                EjecutarVariacionDeCasoDePrueba(testCase, "v02-appinfo-string-in-integer-element");
            }
        }

        /// <summary>
        /// Valida el caso de prueba 104 - V11
        /// </summary>
        [TestMethod]
        public void XBRLConformance104V11Tests()
        {
            XBRLConformanceSuiteTest.CargarCasosPrueba();
            foreach (TestCase testCase in casosPrueba.Where(c => c.Name.Equals("Tuple")))
            {
                EjecutarVariacionDeCasoDePrueba(testCase, "TupleGroupCounterExample");
            }
        }

        /// <summary>
        /// Valida el caso de prueba 104 - V18
        /// </summary>
        [TestMethod]
        public void XBRLConformance104V18Tests()
        {
            XBRLConformanceSuiteTest.CargarCasosPrueba();
            foreach (TestCase testCase in casosPrueba.Where(c => c.Name.Equals("Tuple")))
            {
                EjecutarVariacionDeCasoDePrueba(testCase, "Redefine");
            }
        }
        /// <summary>
        /// Valida el caso de prueba 102
        /// </summary>
        [TestMethod]
        public void XBRLConformance102Tests()
        {
            XBRLConformanceSuiteTest.CargarCasosPrueba();
            foreach (TestCase testCase in casosPrueba.Where(c => c.Name.Equals("Item")))
            {
                EjecutarTodasLasVariacionesDeCasoDePrueba(testCase);
            }
        }

        /// <summary>
        /// Valida el caso de prueba 103
        /// </summary>
        [TestMethod]
        public void XBRLConformance103Tests()
        {
            XBRLConformanceSuiteTest.CargarCasosPrueba();
            foreach (TestCase testCase in casosPrueba.Where(c => c.Name.Equals("Type")))
            {
                EjecutarTodasLasVariacionesDeCasoDePrueba(testCase);
            }
        }

        /// <summary>
        /// Valida el caso de prueba 104
        /// </summary>
        [TestMethod]
        public void XBRLConformance104Tests()
        {
            XBRLConformanceSuiteTest.CargarCasosPrueba();
            foreach (TestCase testCase in casosPrueba.Where(c => c.Name.Equals("Tuple")))
            {
                EjecutarTodasLasVariacionesDeCasoDePrueba(testCase);
            }
        }

        /// <summary>
        /// Valida el caso de prueba 105
        /// </summary>
        [TestMethod]
        public void XBRLConformance105Tests()
        {
            XBRLConformanceSuiteTest.CargarCasosPrueba();
            foreach (TestCase testCase in casosPrueba.Where(c => c.Name.Equals("Balance Attribute")))
            {
                EjecutarTodasLasVariacionesDeCasoDePrueba(testCase);
            }
        }

        /// <summary>
        /// Valida el caso de prueba 106
        /// </summary>
        [TestMethod]
        public void XBRLConformance106Tests()
        {
            XBRLConformanceSuiteTest.CargarCasosPrueba();
            foreach (TestCase testCase in casosPrueba.Where(c => c.Name.Equals("tagetNamespace")))
            {
                EjecutarTodasLasVariacionesDeCasoDePrueba(testCase);
            }
        }

        /// <summary>
        /// Valida el caso de prueba 107
        /// </summary>
        [TestMethod]
        public void XBRLConformance107Tests()
        {
            XBRLConformanceSuiteTest.CargarCasosPrueba();
            foreach (TestCase testCase in casosPrueba.Where(c => c.Name.Equals("DTS discovery involving linkbases within schemas")))
            {
                EjecutarTodasLasVariacionesDeCasoDePrueba(testCase);
            }
        }

        /// <summary>
        /// Valida el caso de prueba 114
        /// </summary>
        [TestMethod]
        public void XBRLConformance114Tests()
        {
            XBRLConformanceSuiteTest.CargarCasosPrueba();
            foreach (TestCase testCase in casosPrueba.Where(c => c.Path.Contains("Common/100-schema/114-lax-validation-testcase.xml")))
            {
                EjecutarTodasLasVariacionesDeCasoDePrueba(testCase);
            }
        }

        /// <summary>
        /// Valida el caso de prueba 115
        /// </summary>
        [TestMethod]
        public void XBRLConformance115Tests()
        {
            XBRLConformanceSuiteTest.CargarCasosPrueba();
            foreach (TestCase testCase in casosPrueba.Where(c => c.Path.Contains("Common/100-schema/115-ArcroleAndRoleRefs-testcase.xml")))
            {
                EjecutarTodasLasVariacionesDeCasoDePrueba(testCase);
            }
        }

        /// <summary>
        /// Valida el caso de prueba 160
        /// </summary>
        [TestMethod]
        public void XBRLConformance160Tests()
        {
            XBRLConformanceSuiteTest.CargarCasosPrueba();
            foreach (TestCase testCase in casosPrueba.Where(c => c.Path.Contains("Common/100-schema/160-UsedOn.xml")))
            {
                EjecutarTodasLasVariacionesDeCasoDePrueba(testCase);
            }
        }

        /// <summary>
        /// Valida el caso de prueba 160
        /// </summary>
        [TestMethod]
        public void XBRLConformance160V09Tests()
        {
            XBRLConformanceSuiteTest.CargarCasosPrueba();
            foreach (TestCase testCase in casosPrueba.Where(c => c.Path.Contains("Common/100-schema/160-UsedOn.xml")))
            {
                EjecutarVariacionDeCasoDePrueba(testCase, "160-09-arcroleType-UsedOnNonArcElements-valid");
            }
        }

        /// <summary>
        /// Valida el caso de prueba 161
        /// </summary>
        [TestMethod]
        public void XBRLConformance161Tests()
        {
            XBRLConformanceSuiteTest.CargarCasosPrueba();
            foreach (TestCase testCase in casosPrueba.Where(c => c.Path.Contains("Common/100-schema/161-Appinfo.xml")))
            {
                EjecutarTodasLasVariacionesDeCasoDePrueba(testCase);
            }
        }

        /// <summary>
        /// Valida los casos de prueba Linkbase - 200
        /// </summary>
        [TestMethod]
        public void XBRLConformance200LinkbaseTests()
        {
            XBRLConformanceSuiteTest.CargarCasosPrueba();
            foreach (TestCase testCase in casosPrueba.Where(c => c.Path.Contains("Common/200-linkbase/")))
            {
                EjecutarTodasLasVariacionesDeCasoDePrueba(testCase);
            }
        }
        /// <summary>
        /// Valida el caso de prueba 201
        /// </summary>
        [TestMethod]
        public void XBRLConformance201Tests()
        {
            XBRLConformanceSuiteTest.CargarCasosPrueba();
            foreach (TestCase testCase in casosPrueba.Where(c => c.Path.Contains("Common/200-linkbase/201-linkref.xml")))
            {
                EjecutarTodasLasVariacionesDeCasoDePrueba(testCase);
            }
        }
       
        /// <summary>
        /// Valida el caso de prueba 202
        /// </summary>
        [TestMethod]
        public void XBRLConformance202Tests()
        {
            XBRLConformanceSuiteTest.CargarCasosPrueba();
            foreach (TestCase testCase in casosPrueba.Where(c => c.Path.Contains("Common/200-linkbase/202-xlinkLocator.xml")))
            {
                EjecutarTodasLasVariacionesDeCasoDePrueba(testCase);
            }
        }

        /// <summary>
        /// Valida el caso de prueba 204
        /// </summary>
        [TestMethod]
        public void XBRLConformance204Tests()
        {
            XBRLConformanceSuiteTest.CargarCasosPrueba();
            foreach (TestCase testCase in casosPrueba.Where(c => c.Path.Contains("Common/200-linkbase/204-arcCycles.xml")))
            {
                EjecutarTodasLasVariacionesDeCasoDePrueba(testCase);
            }
        }

        /// <summary>
        /// Valida el caso de prueba 205
        /// </summary>
        [TestMethod]
        public void XBRLConformance205Tests()
        {
            XBRLConformanceSuiteTest.CargarCasosPrueba();
            foreach (TestCase testCase in casosPrueba.Where(c => c.Path.Contains("Common/200-linkbase/205-roleDeclared.xml")))
            {
                EjecutarTodasLasVariacionesDeCasoDePrueba(testCase);
            }
        }

        /// <summary>
        /// Valida el caso de prueba 206
        /// </summary>
        [TestMethod]
        public void XBRLConformance206Tests()
        {
            XBRLConformanceSuiteTest.CargarCasosPrueba();
            foreach (TestCase testCase in casosPrueba.Where(c => c.Path.Contains("Common/200-linkbase/206-arcDeclared.xml")))
            {
                EjecutarTodasLasVariacionesDeCasoDePrueba(testCase);
            }
        }

        /// <summary>
        /// Valida el caso de prueba 207
        /// </summary>
        [TestMethod]
        public void XBRLConformance207Tests()
        {
            XBRLConformanceSuiteTest.CargarCasosPrueba();
            foreach (TestCase testCase in casosPrueba.Where(c => c.Path.Contains("Common/200-linkbase/207-arcDeclaredCycles.xml")))
            {
                EjecutarTodasLasVariacionesDeCasoDePrueba(testCase);
            }
        }
        /// <summary>
        /// Valida el caso de prueba 208
        /// </summary>
        [TestMethod]
        public void XBRLConformance208Tests()
        {
            XBRLConformanceSuiteTest.CargarCasosPrueba();
            foreach (TestCase testCase in casosPrueba.Where(c => c.Path.Contains("Common/200-linkbase/208-balance.xml")))
            {
                EjecutarTodasLasVariacionesDeCasoDePrueba(testCase);
            }
        }
        /// <summary>
        /// Valida el caso de prueba 209
        /// </summary>
        [TestMethod]
        public void XBRLConformance209Tests()
        {
            XBRLConformanceSuiteTest.CargarCasosPrueba();
            foreach (TestCase testCase in casosPrueba.Where(c => c.Path.Contains("Common/200-linkbase/209-Arcs.xml")))
            {
                EjecutarTodasLasVariacionesDeCasoDePrueba(testCase);
            }
        }
        /// <summary>
        /// Valida el caso de prueba 210
        /// </summary>
        [TestMethod]
        public void XBRLConformance210Tests()
        {
            XBRLConformanceSuiteTest.CargarCasosPrueba();
            foreach (TestCase testCase in casosPrueba.Where(c => c.Path.Contains("Common/200-linkbase/210-relationshipEquivalence.xml")))
            {
                EjecutarTodasLasVariacionesDeCasoDePrueba(testCase);
            }
        }
        /// <summary>
        /// Valida el caso de prueba 211
        /// </summary>
        [TestMethod]
        public void XBRLConformance211Tests()
        {
            XBRLConformanceSuiteTest.CargarCasosPrueba();
            foreach (TestCase testCase in casosPrueba.Where(c => c.Path.Contains("Common/200-linkbase/211-Testcase-sEqualUsedOn.xml")))
            {
                EjecutarTodasLasVariacionesDeCasoDePrueba(testCase);
            }
        }
        /// <summary>
        /// Valida el caso de prueba 212
        /// </summary>
        [TestMethod]
        public void XBRLConformance212Tests()
        {
            XBRLConformanceSuiteTest.CargarCasosPrueba();
            foreach (TestCase testCase in casosPrueba.Where(c => c.Path.Contains("Common/200-linkbase/212-Testcase-linkbaseDocumentation.xml")))
            {
                EjecutarTodasLasVariacionesDeCasoDePrueba(testCase);
            }
        }

        /// <summary>
        /// Valida el caso de prueba 213
        /// </summary>
        [TestMethod]
        public void XBRLConformance213Tests()
        {
            XBRLConformanceSuiteTest.CargarCasosPrueba();
            foreach (TestCase testCase in casosPrueba.Where(c => c.Path.Contains("Common/200-linkbase/213-SummationItemArcEndpoints.xml")))
            {
                EjecutarTodasLasVariacionesDeCasoDePrueba(testCase);
            }
        }

        /// <summary>
        /// Valida el caso de prueba 214
        /// </summary>
        [TestMethod]
        public void XBRLConformance214Tests()
        {
            XBRLConformanceSuiteTest.CargarCasosPrueba();
            foreach (TestCase testCase in casosPrueba.Where(c => c.Path.Contains("Common/200-linkbase/214-lax-validation-testcase.xml")))
            {
                EjecutarTodasLasVariacionesDeCasoDePrueba(testCase);
            }
        }

        /// <summary>
        /// Valida el caso de prueba 215
        /// </summary>
        [TestMethod]
        public void XBRLConformance215Tests()
        {
            XBRLConformanceSuiteTest.CargarCasosPrueba();
            foreach (TestCase testCase in casosPrueba.Where(c => c.Path.Contains("Common/200-linkbase/215-ArcroleAndRoleRefs-testcase.xml")))
            {
                EjecutarTodasLasVariacionesDeCasoDePrueba(testCase);
            }
        }

        /// <summary>
        /// Valida el caso de prueba 220
        /// </summary>
        [TestMethod]
        public void XBRLConformance220Tests()
        {
            XBRLConformanceSuiteTest.CargarCasosPrueba();
            foreach (TestCase testCase in casosPrueba.Where(c => c.Path.Contains("Common/200-linkbase/220-NonStandardArcsAndTypes.xml")))
            {
                EjecutarTodasLasVariacionesDeCasoDePrueba(testCase);
            }
        }

        /// <summary>
        /// Valida el caso de prueba 230
        /// </summary>
        [TestMethod]
        public void XBRLConformance230Tests()
        {
            XBRLConformanceSuiteTest.CargarCasosPrueba();
            foreach (TestCase testCase in casosPrueba.Where(c => c.Path.Contains("Common/200-linkbase/230-CustomLinkbasesAndLocators.xml")))
            {
                EjecutarTodasLasVariacionesDeCasoDePrueba(testCase);
            }
        }
        /// <summary>
        /// Valida el caso de prueba 231
        /// </summary>
        [TestMethod]
        public void XBRLConformance231Tests()
        {
            XBRLConformanceSuiteTest.CargarCasosPrueba();
            foreach (TestCase testCase in casosPrueba.Where(c => c.Path.Contains("Common/200-linkbase/231-SyntacticallyEqualArcsThatAreNotEquivalentArcs.xml")))
            {
                EjecutarTodasLasVariacionesDeCasoDePrueba(testCase);
            }
        }

        /// <summary>
        /// Valida el caso de prueba 232
        /// </summary>
        [TestMethod]
        public void XBRLConformance232Tests()
        {
            XBRLConformanceSuiteTest.CargarCasosPrueba();
            foreach (TestCase testCase in casosPrueba.Where(c => c.Path.Contains("Common/200-linkbase/232-ArcsUsingNonCanonicalDecimal.xml")))
            {
                EjecutarTodasLasVariacionesDeCasoDePrueba(testCase);
            }
        }

        /// <summary>
        /// Valida el caso de prueba 291
        /// </summary>
        [TestMethod]
        public void XBRLConformance291Tests()
        {
            XBRLConformanceSuiteTest.CargarCasosPrueba();
            foreach (TestCase testCase in casosPrueba.Where(c => c.Path.Contains("Common/200-linkbase/291-inferArcOverride.xml")))
            {
                EjecutarTodasLasVariacionesDeCasoDePrueba(testCase);
            }
        }
        /// <summary>
        /// Valida el caso de prueba 292
        /// </summary>
        [TestMethod]
        public void XBRLConformance292Tests()
        {
            XBRLConformanceSuiteTest.CargarCasosPrueba();
            foreach (TestCase testCase in casosPrueba.Where(c => c.Path.Contains("Common/200-linkbase/292-Embeddedlinkbaseinthexsd.xml")))
            {
                EjecutarTodasLasVariacionesDeCasoDePrueba(testCase);
            }
        }

        /// <summary>
        /// Valida el caso de prueba 293
        /// </summary>
        [TestMethod]
        public void XBRLConformance293Tests()
        {
            XBRLConformanceSuiteTest.CargarCasosPrueba();
            foreach (TestCase testCase in casosPrueba.Where(c => c.Path.Contains("Common/200-linkbase/293-UsedOn.xml")))
            {
                EjecutarTodasLasVariacionesDeCasoDePrueba(testCase);
            }
        }

        /// Valida el caso de prueba 293
        /// </summary>
        [TestMethod]
        public void XBRLConformancePrefLabelTests()
        {
            XBRLConformanceSuiteTest.CargarCasosPrueba();
            foreach (TestCase testCase in casosPrueba.Where(c => c.Path.Contains("Common/200-linkbase/preferredLabel.xml")))
            {
                EjecutarTodasLasVariacionesDeCasoDePrueba(testCase);
            }
        }

        /// <summary>
        /// Valida los casos de prueba Instance - 300
        /// </summary>
        [TestMethod]
        public void XBRLConformance300InstanceTests()
        {
            XBRLConformanceSuiteTest.CargarCasosPrueba();
            foreach (TestCase testCase in casosPrueba.Where(c => c.Path.Contains("Common/300-instance/")))
            {
                EjecutarTodasLasVariacionesDeCasoDePrueba(testCase);
            }
        }

        /// <summary>
        /// Valida el caso de prueba 301
        /// </summary>
        [TestMethod]
        public void XBRLConformance301Tests()
        {
            XBRLConformanceSuiteTest.CargarCasosPrueba();
            foreach (TestCase testCase in casosPrueba.Where(c => c.Path.Contains("Common/300-instance/301-idScope.xml")))
            {
                EjecutarTodasLasVariacionesDeCasoDePrueba(testCase);
            }
        }

        /// <summary>
        /// Valida el caso de prueba 302
        /// </summary>
        [TestMethod]
        public void XBRLConformance302Tests()
        {
            XBRLConformanceSuiteTest.CargarCasosPrueba();
            foreach (TestCase testCase in casosPrueba.Where(c => c.Path.Contains("Common/300-instance/302-context.xml")))
            {
                EjecutarTodasLasVariacionesDeCasoDePrueba(testCase);
            }
        }

        /// <summary>
        /// Valida el caso de prueba 303
        /// </summary>
        [TestMethod]
        public void XBRLConformance303Tests()
        {
            XBRLConformanceSuiteTest.CargarCasosPrueba();
            foreach (TestCase testCase in casosPrueba.Where(c => c.Path.Contains("Common/300-instance/303-periodType.xml")))
            {
                EjecutarTodasLasVariacionesDeCasoDePrueba(testCase);
            }
        }

        /// <summary>
        /// Valida el caso de prueba 304
        /// </summary>
        [TestMethod]
        public void XBRLConformance304Tests()
        {
            XBRLConformanceSuiteTest.CargarCasosPrueba();
            foreach (TestCase testCase in casosPrueba.Where(c => c.Path.Contains("Common/300-instance/304-unitOfMeasure.xml")))
            {
                EjecutarTodasLasVariacionesDeCasoDePrueba(testCase);
            }
        }

        /// <summary>
        /// Valida el caso de prueba 305
        /// </summary>
        [TestMethod]
        public void XBRLConformance305Tests()
        {
            XBRLConformanceSuiteTest.CargarCasosPrueba();
            foreach (TestCase testCase in casosPrueba.Where(c => c.Path.Contains("Common/300-instance/305-decimalPrecision.xml")))
            {
                EjecutarTodasLasVariacionesDeCasoDePrueba(testCase);
            }
        }
        /// <summary>
        /// Valida el caso de prueba 306
        /// </summary>
        [TestMethod]
        public void XBRLConformance306Tests()
        {
            XBRLConformanceSuiteTest.CargarCasosPrueba();
            foreach (TestCase testCase in casosPrueba.Where(c => c.Path.Contains("Common/300-instance/306-required.xml")))
            {
                EjecutarTodasLasVariacionesDeCasoDePrueba(testCase);
            }
        }
        /// <summary>
        /// Valida el caso de prueba 307
        /// </summary>
        [TestMethod]
        public void XBRLConformance307Tests()
        {
            XBRLConformanceSuiteTest.CargarCasosPrueba();
            foreach (TestCase testCase in casosPrueba.Where(c => c.Path.Contains("Common/300-instance/307-schemaRef.xml")))
            {
                EjecutarTodasLasVariacionesDeCasoDePrueba(testCase);
            }
        }
        /// <summary>
        /// Valida el caso de prueba 308
        /// </summary>
        [TestMethod]
        public void XBRLConformance308Tests()
        {
            XBRLConformanceSuiteTest.CargarCasosPrueba();
            foreach (TestCase testCase in casosPrueba.Where(c => c.Path.Contains("Common/300-instance/308-ArcroleAndRoleRefs-testcase.xml")))
            {
                EjecutarTodasLasVariacionesDeCasoDePrueba(testCase);
            }
        }
        /// <summary>
        /// Valida el caso de prueba 310
        /// </summary>
        [TestMethod]
        public void XBRLConformance310Tests()
        {
            XBRLConformanceSuiteTest.CargarCasosPrueba();
            foreach (TestCase testCase in casosPrueba.Where(c => c.Path.Contains("Common/300-instance/310-custom-linkbases-on-instances.xml")))
            {
                EjecutarTodasLasVariacionesDeCasoDePrueba(testCase);
            }
        }
        /// <summary>
        /// Valida el caso de prueba 314
        /// </summary>
        [TestMethod]
        public void XBRLConformance314Tests()
        {
            XBRLConformanceSuiteTest.CargarCasosPrueba();
            foreach (TestCase testCase in casosPrueba.Where(c => c.Path.Contains("Common/300-instance/314-lax-validation-testcase.xml")))
            {
                EjecutarTodasLasVariacionesDeCasoDePrueba(testCase);
            }
        }
        /// <summary>
        /// Valida el caso de prueba 320
        /// </summary>
        [TestMethod]
        public void XBRLConformance320Tests()
        {
            XBRLConformanceSuiteTest.CargarCasosPrueba();
            foreach (TestCase testCase in casosPrueba.Where(c => c.Path.Contains("Common/300-instance/320-CalculationBinding.xml")))
            {
                EjecutarTodasLasVariacionesDeCasoDePrueba(testCase);
            }
        }
        /// <summary>
        /// Valida el caso de prueba 321
        /// </summary>
        [TestMethod]
        public void XBRLConformance321Tests()
        {
            XBRLConformanceSuiteTest.CargarCasosPrueba();
            foreach (TestCase testCase in casosPrueba.Where(c => c.Path.Contains("Common/300-instance/321-internationalization.xml")))
            {
                EjecutarTodasLasVariacionesDeCasoDePrueba(testCase);
            }
        }
        /// <summary>
        /// Valida el caso de prueba 322
        /// </summary>
        [TestMethod]
        public void XBRLConformance322Tests()
        {
            XBRLConformanceSuiteTest.CargarCasosPrueba();
            foreach (TestCase testCase in casosPrueba.Where(c => c.Path.Contains("Common/300-instance/322-XmlXbrlInteraction.xml")))
            {
                EjecutarTodasLasVariacionesDeCasoDePrueba(testCase);
            }
        }
        /// <summary>
        /// Valida el caso de prueba 330
        /// </summary>
        [TestMethod]
        public void XBRLConformance330Tests()
        {
            XBRLConformanceSuiteTest.CargarCasosPrueba();
            foreach (TestCase testCase in casosPrueba.Where(c => c.Path.Contains("Common/300-instance/330-s-equal-testcase.xml")))
            {
                EjecutarTodasLasVariacionesDeCasoDePrueba(testCase);
            }
        }
        /// <summary>
        /// Valida el caso de prueba 331
        /// </summary>
        [TestMethod]
        public void XBRLConformance331Tests()
        {
            XBRLConformanceSuiteTest.CargarCasosPrueba();
            foreach (TestCase testCase in casosPrueba.Where(c => c.Path.Contains("Common/300-instance/331-equivalentRelationships-testcase.xml")))
            {
                EjecutarTodasLasVariacionesDeCasoDePrueba(testCase);
            }
        }
        /// <summary>
        /// Valida el caso de prueba 391
        /// </summary>
        [TestMethod]
        public void XBRLConformance391Tests()
        {
            XBRLConformanceSuiteTest.CargarCasosPrueba();
            foreach (TestCase testCase in casosPrueba.Where(c => c.Path.Contains("Common/300-instance/391-inferDecimalPrecision.xml")))
            {
                EjecutarTodasLasVariacionesDeCasoDePrueba(testCase);
            }
        }

        /// <summary>
        /// Valida el caso de prueba 392
        /// </summary>
        [TestMethod]
        public void XBRLConformance392Tests()
        {
            XBRLConformanceSuiteTest.CargarCasosPrueba();
            foreach (TestCase testCase in casosPrueba.Where(c => c.Path.Contains("Common/300-instance/392-inferEssenceAlias.xml")))
            {
                EjecutarTodasLasVariacionesDeCasoDePrueba(testCase);
            }
        }
        /// <summary>
        /// Valida el caso de prueba 395
        /// </summary>
        [TestMethod]
        public void XBRLConformance395Tests()
        {
            XBRLConformanceSuiteTest.CargarCasosPrueba();
            foreach (TestCase testCase in casosPrueba.Where(c => c.Path.Contains("Common/300-instance/395-inferNumericConsistency.xml")))
            {
                EjecutarTodasLasVariacionesDeCasoDePrueba(testCase);
            }
        }
        /// <summary>
        /// Valida el caso de prueba 397
        /// </summary>
        [TestMethod]
        public void XBRLConformance397Tests()
        {
            XBRLConformanceSuiteTest.CargarCasosPrueba();
            foreach (TestCase testCase in casosPrueba.Where(c => c.Path.Contains("Common/300-instance/397-Testcase-SummationItem.xml")))
            {
                EjecutarTodasLasVariacionesDeCasoDePrueba(testCase);
            }
        }
        /// <summary>
        /// Valida el caso de prueba 398
        /// </summary>
        [TestMethod]
        public void XBRLConformance398Tests()
        {
            XBRLConformanceSuiteTest.CargarCasosPrueba();
            foreach (TestCase testCase in casosPrueba.Where(c => c.Path.Contains("Common/300-instance/398-Testcase-Nillable.xml")))
            {
                EjecutarTodasLasVariacionesDeCasoDePrueba(testCase);
            }
        }

        /// <summary>
        /// Valida los casos de prueba Instance - 400
        /// </summary>
        [TestMethod]
        public void XBRLConformance400MiscTests()
        {
            XBRLConformanceSuiteTest.CargarCasosPrueba();
            foreach (TestCase testCase in casosPrueba.Where(c => c.Path.Contains("Common/400-misc/")))
            {
                EjecutarTodasLasVariacionesDeCasoDePrueba(testCase);
            }
        }

        /// <summary>
        /// Valida el caso de prueba 400
        /// </summary>
        [TestMethod]
        public void XBRLConformance400Tests()
        {
            XBRLConformanceSuiteTest.CargarCasosPrueba();
            foreach (TestCase testCase in casosPrueba.Where(c => c.Path.Contains("Common/400-misc/400-nestedElements.xml")))
            {
                EjecutarTodasLasVariacionesDeCasoDePrueba(testCase);
            }
        }

        /// <summary>
        /// Valida el caso de prueba 401
        /// </summary>
        [TestMethod]
        public void XBRLConformance401Tests()
        {
            XBRLConformanceSuiteTest.CargarCasosPrueba();
            foreach (TestCase testCase in casosPrueba.Where(c => c.Path.Contains("Common/400-misc/401-datatypes.xml")))
            {
                EjecutarTodasLasVariacionesDeCasoDePrueba(testCase);
            }
        }

        /// <summary>
        /// Valida el caso de prueba personalizado
        /// </summary>
        [TestMethod]
        public void XBRLConformanceCustomTests()
        {
            XBRLConformanceSuiteTest.CargarCasosPrueba();
            foreach (TestCase testCase in casosPrueba.Where(c => c.Path.Contains("Common/300-instance/397")))
            {
                EjecutarVariacionDeCasoDePrueba(testCase, "DecimalsTrailingDigitsValid");
            }
        }

        

        

        /// <summary>
        /// Procesa un caso de prueba cuya definición se encuentra en el URI definido.
        /// </summary>
        /// <param name="uriCasoPrueba">El URI del caso de prueba a validar</param>
        private static void ProcesarCasoDePrueba(Uri uriCasoPrueba)
        {
            XmlReaderSettings settings = new XmlReaderSettings();
            settings.IgnoreComments = true;
            XmlReader xmlReader = XmlReader.Create(uriCasoPrueba.AbsolutePath, settings);
            if (xmlReader.Read())
            {
                XmlDocument documentoCasoPrueba = new XmlDocument();
                documentoCasoPrueba.Load(xmlReader);

                foreach (XmlNode testCaseNode in documentoCasoPrueba.ChildNodes)
                {

                    if (testCaseNode.LocalName.Equals(TestCaseTag, StringComparison.InvariantCultureIgnoreCase))
                    {

                        TestCase testCase = new TestCase();
                        testCase.Path = uriCasoPrueba.AbsolutePath;
                        testCase.Name = testCaseNode.Attributes[NameAttribute] != null ? testCaseNode.Attributes[NameAttribute].Value : null;
                        testCase.Description = testCaseNode.Attributes[DescriptionAttribute] != null ? testCaseNode.Attributes[DescriptionAttribute].Value : null;
                        testCase.Outpath = testCaseNode.Attributes[OutpathAttribute] != null ? testCaseNode.Attributes[OutpathAttribute].Value : null;
                        testCase.Minimal = testCaseNode.Attributes[MinimalAttribute] != null ? bool.Parse(testCaseNode.Attributes[MinimalAttribute].Value) : true;
                        testCase.Owner = testCaseNode.Attributes[OwnerAttribute] != null ? testCaseNode.Attributes[OwnerAttribute].Value : null;
                        testCase.Variations = new List<Variation>();
                        foreach (XmlNode variationNode in testCaseNode.ChildNodes)
                        {
                            if (variationNode.LocalName.Equals(VariationTag, StringComparison.InvariantCultureIgnoreCase))
                            {
                                Variation variation = new Variation();
                                variation.Id = variationNode.Attributes[IdAttribute] != null ? variationNode.Attributes[IdAttribute].Value : null;
                                variation.Name = variationNode.Attributes[NameAttribute] != null ? variationNode.Attributes[NameAttribute].Value : null;
                                variation.Description = variationNode.Attributes[DescriptionAttribute] != null ? variationNode.Attributes[DescriptionAttribute].Value : null;

                                IList<TestData> variationData = new List<TestData>();

                                foreach (XmlNode child in variationNode.ChildNodes)
                                {
                                    if (child.LocalName.Equals(DescriptionTag, StringComparison.InvariantCultureIgnoreCase))
                                    {
                                        variation.Description = child.InnerText;
                                    }
                                    if (child.LocalName.Equals(DataTag, StringComparison.InvariantCultureIgnoreCase))
                                    {
                                        foreach (XmlNode grandSon in child.ChildNodes)
                                        {
                                            if (grandSon.LocalName.Equals(XsdTag, StringComparison.InvariantCultureIgnoreCase))
                                            {
                                                TestData testData = new TestData();
                                                testData.Type = TestData.Xsd;
                                                testData.ReadMeFirst = grandSon.Attributes[ReadMeFirstAttribute] != null ? bool.Parse(grandSon.Attributes[ReadMeFirstAttribute].Value) : false;
                                                testData.RelativePath = grandSon.InnerText;
                                                variationData.Add(testData);
                                            }
                                            if (grandSon.LocalName.Equals(InstanceTag, StringComparison.InvariantCultureIgnoreCase))
                                            {
                                                TestData testData = new TestData();
                                                testData.Type = TestData.Instance;
                                                testData.ReadMeFirst = grandSon.Attributes[ReadMeFirstAttribute] != null ? bool.Parse(grandSon.Attributes[ReadMeFirstAttribute].Value) : false;
                                                testData.RelativePath = grandSon.InnerText;
                                                variationData.Add(testData);
                                            }
                                            if (grandSon.LocalName.Equals(LinkbaseTag, StringComparison.InvariantCultureIgnoreCase))
                                            {
                                                TestData testData = new TestData();
                                                testData.Type = TestData.Linkbase;
                                                testData.ReadMeFirst = grandSon.Attributes[ReadMeFirstAttribute] != null ? bool.Parse(grandSon.Attributes[ReadMeFirstAttribute].Value) : false;
                                                testData.RelativePath = grandSon.InnerText;
                                                variationData.Add(testData);
                                            }
                                        }
                                    }
                                    if (child.LocalName.Equals(ResultTag, StringComparison.InvariantCultureIgnoreCase))
                                    {
                                        if (child.Attributes[ExpectedAttribute] != null)
                                        {
                                            //Procesar expected result y excpected result path
                                            variation.ExpectedResult = child.Attributes[ExpectedAttribute].Value;
                                            variation.ExpectedResultRelativePath = child.InnerText;
                                            variation.TestDimensional = false;
                                        }
                                        else
                                        {
                                            variation.TestDimensional = true;
                                            variation.ExpectedResult = "valid";
                                            //buscar etiqueta de error, si la hay , colocarlo
                                            foreach (XmlElement resultChild in child.ChildNodes)
                                            {
                                                if(resultChild.Name.Equals("error"))
                                                {
                                                    variation.ExpectedResult = "invalid";
                                                    variation.ErrorCode = resultChild.InnerText;
                                                }
                                                if (resultChild.Name.Equals("file"))
                                                {
                                                    variation.ExpectedResultRelativePath = resultChild.InnerText;
                                                }
                                            }
                                           
                                            
                                            
                                        }
                                         
                                    }
                                }

                                variation.Data = variationData;
                                testCase.Variations.Add(variation);
                            }

                        }
                        casosPrueba.Add(testCase);
                    }
                }
            }
        }

        /// <summary>
        /// Ejecuta todas las variaciones de un caso de prueba
        /// </summary>
        /// <param name="testCase">el caso de prueba a ejecutar</param>
        private static void EjecutarTodasLasVariacionesDeCasoDePrueba(TestCase testCase)
        {
            Debug.WriteLine(">>>>>>>>> Caso de Prueba a Ejecutar: " + testCase.Name + " Mínimo: " + testCase.Minimal);
            Debug.WriteLine("\tDescripción: " + testCase.Description);
            Debug.WriteLine("\tResponsable: " + testCase.Owner);
            Debug.WriteLine("\tRuta Salida: " + testCase.Outpath);

            foreach (Variation variation in testCase.Variations)
            {
                EjecutarVariacionDeCasoDePrueba(testCase, variation);
            }
        }

        /// <summary>
        /// Ejecuta  una variación de un caso de prueba por medio de su nombre
        /// </summary>
        /// <param name="testCase">el caso de prueba a ejecutar</param>
        /// <param name="variationName">el nombre de la variación a ejecutar</param>
        private static void EjecutarVariacionDeCasoDePrueba(TestCase testCase, string variationName)
        {
            Debug.WriteLine(">>>>>>>>> Caso de Prueba a Ejecutar: " + testCase.Name + " Mínimo: " + testCase.Minimal);
            Debug.WriteLine("\tDescripción: " + testCase.Description);
            Debug.WriteLine("\tResponsable: " + testCase.Owner);
            Debug.WriteLine("\tRuta Salida: " + testCase.Outpath);

            foreach (Variation variation in testCase.Variations.Where(v => v.Name.Equals(variationName)))
            {
                EjecutarVariacionDeCasoDePrueba(testCase, variation);
            }
        }

        /// <summary>
        /// Ejecuta todas las variaciones de un caso de prueba
        /// </summary>
        /// <param name="uriCasoPrueba">La ruta donde se encuentra la declaración del caso de prueba</param>
        /// <param name="testCase">el caso de prueba a ejecutar</param>
        /// <param name="variationNames">Los nombres de los casos de prueba a ejecutar</param>
        private static void EjecutarVariacionesDeCasoDePrueba(Uri uriCasoPrueba, TestCase testCase, string []variationNames)
        {
            Debug.WriteLine(">>>>>>>>> Caso de Prueba a Ejecutar: " + testCase.Name + " Mínimo: " + testCase.Minimal);
            Debug.WriteLine("\tDescripción: " + testCase.Description);
            Debug.WriteLine("\tResponsable: " + testCase.Owner);
            Debug.WriteLine("\tRuta Salida: " + testCase.Outpath);

            foreach (Variation variation in testCase.Variations.Where(v => variationNames.Contains(v.Name)))
            {
                EjecutarVariacionDeCasoDePrueba(testCase, variation);
            }
        }

        /// <summary>
        /// Ejecuta una variación de un caso de prueba.
        /// </summary>
        /// <param name="testCase">el caso de prueba a ejecutar</param>
        /// <param name="variation">la variación del caso de prueba a ejecutar</param>
        private static void EjecutarVariacionDeCasoDePrueba(TestCase testCase, Variation variation)
        {
            Debug.WriteLine("------- Variación a Ejecutar: " + variation.Name + " Mínimo: " + testCase.Minimal);
            Debug.WriteLine("\tDescripción: " + variation.Description);
            Debug.WriteLine("\tResultado Esperado: " + variation.ExpectedResult);

            if (!string.IsNullOrWhiteSpace(variation.ExpectedResultRelativePath))
            {
                Debug.WriteLine("\tRuta de Archivo Esperado: " + variation.ExpectedResultRelativePath);
            }
            if (!string.IsNullOrWhiteSpace(variation.ErrorCode))
            {
                Debug.WriteLine("\tCódigo de Error Esperado: " + variation.ErrorCode);
            }

            bool valido = false;
            Uri uriData = null;
            ManejadorErroresCargaTaxonomia manejadorErrores = new ManejadorErroresCargaTaxonomia();
            int tipoReadMeFirst = 0;
            TaxonomiaXBRL  taxonomiaXBRL = null;
            DocumentoInstanciaXBRL documentoInstanciaXBRL = null;
            try
            {
                foreach (TestData data in variation.Data)
                {
                    if (data.ReadMeFirst)
                    {
                        if (data.Type == TestData.Xsd)
                        {
                            tipoReadMeFirst = TestData.Xsd;
                            taxonomiaXBRL = new TaxonomiaXBRL();
                            taxonomiaXBRL.ManejadorErrores = manejadorErrores;
                            uriData = new Uri(new Uri(testCase.Path), data.RelativePath);
                            taxonomiaXBRL.ProcesarDefinicionDeEsquema(uriData.AbsolutePath);

                            IGrupoValidadoresTaxonomia grupoValidadores = new GrupoValidadoresTaxonomia();
                            IValidadorTaxonomia validador = new ValidadorTaxonomia();
                            grupoValidadores.ManejadorErrores = manejadorErrores;
                            grupoValidadores.Taxonomia = taxonomiaXBRL;
                            grupoValidadores.AgregarValidador(validador);
                            IValidadorTaxonomia validadorDimensiones = new ValidadorTaxonomiaDinemsional();
                            grupoValidadores.AgregarValidador(validadorDimensiones);
                            grupoValidadores.ValidarDocumento();
                        }
                        if (data.Type == TestData.Linkbase)
                        {
                            tipoReadMeFirst = TestData.Linkbase;
                            taxonomiaXBRL = new TaxonomiaXBRL();
                            taxonomiaXBRL.ManejadorErrores = manejadorErrores;
                            uriData = new Uri(new Uri(testCase.Path), data.RelativePath);
                            taxonomiaXBRL.ProcesarDefinicionDeLinkbase(uriData.AbsolutePath, null);

                            IGrupoValidadoresTaxonomia grupoValidadores = new GrupoValidadoresTaxonomia();
                            IValidadorTaxonomia validador = new ValidadorTaxonomia();
                            grupoValidadores.ManejadorErrores = manejadorErrores;
                            grupoValidadores.Taxonomia = taxonomiaXBRL;
                            grupoValidadores.AgregarValidador(validador);
                            IValidadorTaxonomia validadorDimensiones = new ValidadorTaxonomiaDinemsional();
                            validadorDimensiones.Taxonomia = taxonomiaXBRL;
                            grupoValidadores.AgregarValidador(validadorDimensiones);
                            grupoValidadores.ValidarDocumento();
                        }
                        if (data.Type == TestData.Instance)
                        {
                            tipoReadMeFirst = TestData.Instance;
                            documentoInstanciaXBRL = new DocumentoInstanciaXBRL();
                            documentoInstanciaXBRL.ManejadorErrores = manejadorErrores;
                            uriData = new Uri(new Uri(testCase.Path), data.RelativePath);
                            documentoInstanciaXBRL.Cargar(uriData.AbsolutePath);

                            IGrupoValidadoresTaxonomia grupoValidadores = new GrupoValidadoresTaxonomia();
                            IValidadorDocumentoInstancia validador = new ValidadorDocumentoInstancia();
                            grupoValidadores.ManejadorErrores = manejadorErrores;
                            grupoValidadores.DocumentoInstancia = documentoInstanciaXBRL;
                            grupoValidadores.AgregarValidador(validador);
                            validador = new ValidadorDimensionesDocumentoInstancia();
                            validador.DocumentoInstancia = documentoInstanciaXBRL;
                            grupoValidadores.AgregarValidador(validador);
                            grupoValidadores.ValidarDocumento();
                        }
                        break;
                    }
                }
                valido = manejadorErrores.PuedeContinuar();

                bool exito = (variation.ExpectedResult.Equals(Variation.ResultadoValido) && valido) || (!variation.ExpectedResult.Equals(Variation.ResultadoValido) && !valido);

                if (exito)
                {

                    if (!string.IsNullOrWhiteSpace(variation.ExpectedResultRelativePath))
                    {

                        //verificar si se debe crear ptvi o ptvli
                        /**  The testcase has the value false for the minimal attribute on the testcase element.
                         * The variation has the value valid for the expected attribute on the result element.
                         * The variation has the value true for the readMeFirst attribute on an xsd or linkbase element.
                         * The variation has a value for the result element that indicates the location of a reference file in the out subdirectory.*/
                        if (variation.ExpectedResult.Equals(Variation.ResultadoValido))
                        {
                            XmlDocument ptv = null;
                            Uri schemaPTV = new Uri(uriBaseCasosPrueba, "Common\\lib\\ptv-2003-12-31.xsd");
                            Uri xslPTV = new Uri(uriBaseCasosPrueba, "xbrl-infoset.xsl");
                            XslCompiledTransform  transformacionPTV = new XslCompiledTransform ();
                            transformacionPTV.Load(xslPTV.ToString());
                            

                            if (tipoReadMeFirst == TestData.Xsd || tipoReadMeFirst == TestData.Linkbase)
                            {
                                //Generar PTVL
                                ptv = taxonomiaXBRL.CrearDocumentoPTVL(schemaPTV.ToString());
                                                               
                            }
                            else
                            {
                               //ptvi
                                if(variation.TestDimensional)
                                {
                                    Uri schemaFactList = new Uri(uriBaseCasosPrueba, "lib//facts.xsd");
                                    ptv = documentoInstanciaXBRL.CrearDocumentoFactList("../../../lib/facts.xsd");
                                }else
                                {
                                    ptv = documentoInstanciaXBRL.CrearDocumentoPTVI(schemaPTV.ToString());
                                }
                                
                            }

                            if (ptv != null)
                            {
                                XmlWriterSettings settings = new XmlWriterSettings();
                                settings.CloseOutput = true;
                                settings.Indent = true;
                                settings.NamespaceHandling = NamespaceHandling.OmitDuplicates;
                                settings.NewLineHandling = NewLineHandling.Entitize;
                                settings.Encoding = null;
                                TextWriter txtWriter = new StringWriter();
                                XmlWriter xmlWriterDebug = XmlWriter.Create(txtWriter, settings);
                               
                                ptv.Save(xmlWriterDebug);
                                //Debug.WriteLine(txtWriter.ToString().Replace("dospuntos",":"));
                                //Debug.WriteLine("______________________________________________");

                                //Obtener PTVL 
                                XmlDocument ptvlEsperado = CargarPTV(testCase.Outpath + "\\" + variation.ExpectedResultRelativePath, testCase.Path);
                                TextWriter txtWriterPTVEsperado = new StringWriter();
                                XmlWriter xwriterPTVEsperado = XmlWriter.Create(txtWriterPTVEsperado);
                                StringReader sReader = new StringReader(ptvlEsperado.OuterXml);
                                transformacionPTV.Transform(XmlReader.Create(sReader), xwriterPTVEsperado);

                                //transformar el resultado de ambos ptv
                                TextWriter txtWriterPTVSalida = new StringWriter();
                                XmlWriter xwriterPTVSalida = XmlWriter.Create(txtWriterPTVSalida);

                                sReader = new StringReader(ptv.OuterXml.Replace("dospuntos",":"));
                                transformacionPTV.Transform(XmlReader.Create(sReader), xwriterPTVSalida);

                                //Debug.WriteLine(txtWriterPTVSalida.ToString());
                                //Debug.WriteLine("______________________________________________");
                                //Debug.WriteLine(txtWriterPTVEsperado.ToString());

                                exito = txtWriterPTVSalida.ToString().Replace("dospuntos", ":").Equals(txtWriterPTVEsperado.ToString());
                            }
                            
                            

                        }
                        if (exito)
                        {
                            Debug.WriteLine("###### RESULTADO ###### ");
                            Debug.WriteLine("#        EXITO        # ");
                            Debug.WriteLine("####################### ");
                        }
                        else
                        {
                            Debug.WriteLine("###### RESULTADO ###### ");
                            Debug.WriteLine("#       PARCIAL       # ");
                            Debug.WriteLine("####################### ");
                            Assert.Fail("Los archivos PTV generados para la prueba no son iguales: " + variation.Name + " del caso de prueba: " + testCase.Name);
                        }

                        
                    }else if(!String.IsNullOrEmpty(variation.ErrorCode))
                    {
                        //Verificar el código de error
                        if (manejadorErrores.ErroresCarga.Any(error => variation.ErrorCode.Equals(error.CodigoError)))
                        {
                            Debug.WriteLine("###### RESULTADO ###### ");
                            Debug.WriteLine("#        EXITO        # ");
                            Debug.WriteLine("####################### ");
                        }else
                        {
                            Debug.WriteLine("###### RESULTADO ###### ");
                            Debug.WriteLine("#       PARCIAL       # ");
                            Debug.WriteLine("####################### ");
                            Assert.Fail("Falló la evaluación de la variación del caso de prueba (Código de error esperado no encontrado): " + variation.Name + " del caso de prueba: " + testCase.Name);
                        }
                        

                    }
                    else
                    {
                        Debug.WriteLine("###### RESULTADO ###### ");
                        Debug.WriteLine("#        EXITO        # ");
                        Debug.WriteLine("####################### ");
                    }
                }
                else
                {
                    Debug.WriteLine("###### RESULTADO ###### ");
                    Debug.WriteLine("#       FALLIDO       # ");
                    Debug.WriteLine("####################### ");
                    Assert.Fail("Falló la evaluación de la variación del caso de prueba: " + variation.Name + " del caso de prueba: " + testCase.Name);
                }
            }
            catch (Exception e)
            {
                Debug.WriteLine("Ocurrió un error al ejecutar la variación: " + variation.Name + " del caso de prueba: " + testCase.Name);
                Debug.WriteLine("Error: " + e.Message);
                Debug.WriteLine("Stacktrace: " + e.StackTrace);

                Debug.WriteLine("###### RESULTADO ###### ");
                Debug.WriteLine("#       FALLIDO       # ");
                Debug.WriteLine("####################### ");
                Assert.Fail("Falló la evaluación de la variación del caso de prueba: " + variation.Name + " del caso de prueba: " + testCase.Name);
            }
        }
        /// <summary>
        /// Carga el archivo PTV indicado por el path relativo
        /// </summary>
        /// <param name="p"></param>
        /// <returns></returns>
        private static XmlDocument CargarPTV(string uriptv,String basePath)
        {
            Uri uriPTVL = new Uri(new Uri(basePath),  uriptv);

            XmlReaderSettings settings = new XmlReaderSettings();
            settings.IgnoreComments = true;
            settings.ValidationType = ValidationType.Schema;
            settings.ValidationFlags |= XmlSchemaValidationFlags.ProcessInlineSchema;
            settings.ValidationFlags |= XmlSchemaValidationFlags.ProcessSchemaLocation;
            XmlReader xmlReader = XmlReader.Create(uriPTVL.ToString(), settings);
            if (xmlReader.Read())
            {
                XmlDocument doc = new XmlDocument();
                doc.Load(xmlReader);
                return doc;
            }
            return null;
        }


        #region Pruebas de la especificación de dimensiones

        /// <summary>
        /// Valida los casos de prueba Schema - 000
        /// </summary>
        [TestMethod]
        public void XBRLDimensionsConformance000SchemaInvalidTests()
        {
            XBRLConformanceSuiteTest.CargarCasosPruebaDimensions();
            foreach (TestCase testCase in casosPrueba.Where(c => c.Path.Contains("000-Schema-invalid/001-Taxonomy/")))
            {
                EjecutarTodasLasVariacionesDeCasoDePrueba(testCase);
            }
        }
        /// <summary>
        /// Valida los casos de prueba 100 - XBRLDTE
        /// </summary>
        [TestMethod]
        public void XBRLDimensionsConformance100XBRLDTE()
        {
            XBRLConformanceSuiteTest.CargarCasosPruebaDimensions();
            foreach (TestCase testCase in casosPrueba.Where(c => c.Path.Contains("100-xbrldte/")))
            {
                EjecutarTodasLasVariacionesDeCasoDePrueba(testCase);
            }
        }

        /// <summary>
        /// Valida los casos de prueba 101 - HypercubeElementIsNotAbstractError
        /// </summary>
        [TestMethod]
        public void XBRLDimensionsConformance101HypercubeElementIsNotAbstractError()
        {
            XBRLConformanceSuiteTest.CargarCasosPruebaDimensions();
            foreach (TestCase testCase in casosPrueba.Where(c => c.Path.Contains("100-xbrldte/101")))
            {
                EjecutarTodasLasVariacionesDeCasoDePrueba(testCase);
            }
        }

        /// <summary>
        /// Valida los casos de prueba 102-TestCase-HypercubeDimensionSourceError.xml
        /// </summary>
        [TestMethod]
        public void XBRLDimensionsConformance102HypercubeDimensionSourceError()
        {
            XBRLConformanceSuiteTest.CargarCasosPruebaDimensions();
            foreach (TestCase testCase in casosPrueba.Where(c => c.Path.Contains("100-xbrldte/102")))
            {
                EjecutarTodasLasVariacionesDeCasoDePrueba(testCase);
            }
        }

        /// <summary>
        /// Valida los casos de prueba 103-TestCase-HypercubeDimensionTargetError.xml
        /// </summary>
        [TestMethod]
        public void XBRLDimensionsConformance103HypercubeDimensionTargetError()
        {
            XBRLConformanceSuiteTest.CargarCasosPruebaDimensions();
            foreach (TestCase testCase in casosPrueba.Where(c => c.Path.Contains("100-xbrldte/103")))
            {
                EjecutarTodasLasVariacionesDeCasoDePrueba(testCase);
            }
        }
        /// <summary>
        /// Valida los casos de prueba 104-TestCase-HasHypercubeSourceError.xml
        /// </summary>
        [TestMethod]
        public void XBRLDimensionsConformance104HasHypercubeSourceError()
        {
            XBRLConformanceSuiteTest.CargarCasosPruebaDimensions();
            foreach (TestCase testCase in casosPrueba.Where(c => c.Path.Contains("100-xbrldte/104")))
            {
                EjecutarTodasLasVariacionesDeCasoDePrueba(testCase);
            }
        }

        /// <summary>
        /// Valida los casos de prueba 105-TestCase-HasHypercubeTargetError.xml
        /// </summary>
        [TestMethod]
        public void XBRLDimensionsConformance105TestCaseHasHypercubeTargetError()
        {
            XBRLConformanceSuiteTest.CargarCasosPruebaDimensions();
            foreach (TestCase testCase in casosPrueba.Where(c => c.Path.Contains("100-xbrldte/105")))
            {
                EjecutarTodasLasVariacionesDeCasoDePrueba(testCase);
            }
        }

        /// <summary>
        /// Valida los casos de prueba 106-TestCase-HasHypercubeMissingContextElementAttributeError.xml
        /// </summary>
        [TestMethod]
        public void XBRLDimensionsConformance106TestCaseHasHypercubeMissingContextElementAttributeError()
        {
            XBRLConformanceSuiteTest.CargarCasosPruebaDimensions();
            foreach (TestCase testCase in casosPrueba.Where(c => c.Path.Contains("100-xbrldte/106")))
            {
                EjecutarTodasLasVariacionesDeCasoDePrueba(testCase);
            }
        }

        /// <summary>
        /// Valida los casos de prueba 107-TestCase-TargetRoleNotResolvedError.xml
        /// </summary>
        [TestMethod]
        public void XBRLDimensionsConformance107TargetRoleNotResolvedError()
        {
            XBRLConformanceSuiteTest.CargarCasosPruebaDimensions();
            foreach (TestCase testCase in casosPrueba.Where(c => c.Path.Contains("100-xbrldte/107")))
            {
                EjecutarTodasLasVariacionesDeCasoDePrueba(testCase);
            }
        }

        /// <summary>
        /// Valida los casos de prueba 108-TestCase-DimensionElementIsNotAbstractError.xml
        /// </summary>
        [TestMethod]
        public void XBRLDimensionsConformance108DimensionElementIsNotAbstractError()
        {
            XBRLConformanceSuiteTest.CargarCasosPruebaDimensions();
            foreach (TestCase testCase in casosPrueba.Where(c => c.Path.Contains("100-xbrldte/108")))
            {
                EjecutarTodasLasVariacionesDeCasoDePrueba(testCase);
            }
        }

        /// <summary>
        /// Valida los casos de prueba 109-TestCase-TypedDomainRefError.xml
        /// </summary>
        [TestMethod]
        public void XBRLDimensionsConformance109TypedDomainRefError()
        {
            XBRLConformanceSuiteTest.CargarCasosPruebaDimensions();
            foreach (TestCase testCase in casosPrueba.Where(c => c.Path.Contains("100-xbrldte/109")))
            {
                EjecutarTodasLasVariacionesDeCasoDePrueba(testCase);
            }
        }

        /// <summary>
        /// Valida los casos de prueba 110-TestCase-TypedDimensionError.xml
        /// </summary>
        [TestMethod]
        public void XBRLDimensionsConformance110TypedDimensionError()
        {
            XBRLConformanceSuiteTest.CargarCasosPruebaDimensions();
            foreach (TestCase testCase in casosPrueba.Where(c => c.Path.Contains("100-xbrldte/110")))
            {
                EjecutarTodasLasVariacionesDeCasoDePrueba(testCase);
            }
        }


        /// <summary>
        /// Valida los casos de prueba 111-TestCase-TypedDimensionURIError.xml
        /// </summary>
        [TestMethod]
        public void XBRLDimensionsConformance111TypedDimensionURIError()
        {
            XBRLConformanceSuiteTest.CargarCasosPruebaDimensions();
            foreach (TestCase testCase in casosPrueba.Where(c => c.Path.Contains("100-xbrldte/111")))
            {
                EjecutarTodasLasVariacionesDeCasoDePrueba(testCase);
            }
        }

        /// <summary>
        /// Valida los casos de prueba 112-TestCase-DimensionDomainSourceError.xml
        /// </summary>
        [TestMethod]
        public void XBRLDimensionsConformance112DimensionDomainSourceError()
        {
            XBRLConformanceSuiteTest.CargarCasosPruebaDimensions();
            foreach (TestCase testCase in casosPrueba.Where(c => c.Path.Contains("100-xbrldte/112")))
            {
                EjecutarTodasLasVariacionesDeCasoDePrueba(testCase);
            }
        }

        /// <summary>
        /// Valida los casos de prueba 113-TestCase-DimensionDomainTargetError.xml
        /// </summary>
        [TestMethod]
        public void XBRLDimensionsConformance113DimensionDomainTargetError()
        {
            XBRLConformanceSuiteTest.CargarCasosPruebaDimensions();
            foreach (TestCase testCase in casosPrueba.Where(c => c.Path.Contains("100-xbrldte/113")))
            {
                EjecutarTodasLasVariacionesDeCasoDePrueba(testCase);
            }
        }

        /// <summary>
        /// Valida los casos de prueba 115-TestCase-PrimaryItemPolymorphismError.xml
        /// </summary>
        [TestMethod]
        public void XBRLDimensionsConformance115PrimaryItemPolymorphismError()
        {
            XBRLConformanceSuiteTest.CargarCasosPruebaDimensions();
            foreach (TestCase testCase in casosPrueba.Where(c => c.Path.Contains("100-xbrldte/115")))
            {
                EjecutarTodasLasVariacionesDeCasoDePrueba(testCase);
            }
        }

        /// <summary>
        /// Valida los casos de prueba 116-TestCase-DomainMemberSourceError.xml
        /// </summary>
        [TestMethod]
        public void XBRLDimensionsConformance116DomainMemberSourceError()
        {
            XBRLConformanceSuiteTest.CargarCasosPruebaDimensions();
            foreach (TestCase testCase in casosPrueba.Where(c => c.Path.Contains("100-xbrldte/116")))
            {
                EjecutarTodasLasVariacionesDeCasoDePrueba(testCase);
            }
        }

        /// <summary>
        /// Valida los casos de prueba 117-TestCase-DomainMemberTargetError.xml
        /// </summary>
        [TestMethod]
        public void XBRLDimensionsConformance117DomainMemberTargetError()
        {
            XBRLConformanceSuiteTest.CargarCasosPruebaDimensions();
            foreach (TestCase testCase in casosPrueba.Where(c => c.Path.Contains("100-xbrldte/117")))
            {
                EjecutarTodasLasVariacionesDeCasoDePrueba(testCase);
            }
        }

        /// <summary>
        /// Valida los casos de prueba 122-TestCase-DimensionDefaultSourceError.xml
        /// </summary>
        [TestMethod]
        public void XBRLDimensionsConformance122DimensionDefaultSourceError()
        {
            XBRLConformanceSuiteTest.CargarCasosPruebaDimensions();
            foreach (TestCase testCase in casosPrueba.Where(c => c.Path.Contains("100-xbrldte/122")))
            {
                EjecutarTodasLasVariacionesDeCasoDePrueba(testCase);
            }
        }
        /// <summary>
        /// Valida los casos de prueba 123-TestCase-DimensionDefaultTargetError.xml
        /// </summary>
        [TestMethod]
        public void XBRLDimensionsConformance123DimensionDefaultTargetError()
        {
            XBRLConformanceSuiteTest.CargarCasosPruebaDimensions();
            foreach (TestCase testCase in casosPrueba.Where(c => c.Path.Contains("100-xbrldte/123")))
            {
                EjecutarTodasLasVariacionesDeCasoDePrueba(testCase);
            }
        }

        /// <summary>
        /// Valida los casos de prueba 124-TestCase-TooManyDefaultMembersError.xml
        /// </summary>
        [TestMethod]
        public void XBRLDimensionsConformance124TooManyDefaultMembersError()
        {
            XBRLConformanceSuiteTest.CargarCasosPruebaDimensions();
            foreach (TestCase testCase in casosPrueba.Where(c => c.Path.Contains("100-xbrldte/124")))
            {
                EjecutarTodasLasVariacionesDeCasoDePrueba(testCase);
            }
        }

        /// <summary>
        /// Valida los casos de prueba 125-TestCase-DRSUndirectedCycleError.xml
        /// </summary>
        [TestMethod]
        public void XBRLDimensionsConformance125DRSUndirectedCycleError()
        {
            XBRLConformanceSuiteTest.CargarCasosPruebaDimensions();
            foreach (TestCase testCase in casosPrueba.Where(c => c.Path.Contains("100-xbrldte/125")))
            {
                EjecutarTodasLasVariacionesDeCasoDePrueba(testCase);
            }
        }

        /// <summary>
        /// Valida los casos de prueba 126-TestCase-DRSDirectedCycleError.xml
        /// </summary>
        [TestMethod]
        public void XBRLDimensionsConformance126DRSDirectedCycleError()
        {
            XBRLConformanceSuiteTest.CargarCasosPruebaDimensions();
            foreach (TestCase testCase in casosPrueba.Where(c => c.Path.Contains("100-xbrldte/126")))
            {
                EjecutarTodasLasVariacionesDeCasoDePrueba(testCase);
            }
        }

        /// <summary>
        /// Valida los casos de prueba 127-TestCase-OutOfDTSSchemaError.xml
        /// </summary>
        [TestMethod]
        public void XBRLDimensionsConformance127OutOfDTSSchemaError()
        {
            XBRLConformanceSuiteTest.CargarCasosPruebaDimensions();
            foreach (TestCase testCase in casosPrueba.Where(c => c.Path.Contains("100-xbrldte/127")))
            {
                EjecutarTodasLasVariacionesDeCasoDePrueba(testCase);
            }
        }

        /// <summary>
        /// Valida los casos de prueba de la variaciones 200
        /// </summary>
        [TestMethod]
        public void XBRLDimensionsConformance200XBRLDIE()
        {
            XBRLConformanceSuiteTest.CargarCasosPruebaDimensions();
            foreach (TestCase testCase in casosPrueba.Where(c => c.Path.Contains("200-xbrldie/")))
            {
                EjecutarTodasLasVariacionesDeCasoDePrueba(testCase);
            }
        }
        /// <summary>
        /// Valida los casos de prueba 202-TestCase-DefaultValueUsedInInstanceError.xml
        /// </summary>
        [TestMethod]
        public void XBRLDimensionsConformance202DefaultValueUsedInInstanceError()
        {
            XBRLConformanceSuiteTest.CargarCasosPruebaDimensions();
            foreach (TestCase testCase in casosPrueba.Where(c => c.Path.Contains("200-xbrldie/202")))
            {
                EjecutarTodasLasVariacionesDeCasoDePrueba(testCase);
            }
        }

        /// <summary>
        /// Valida los casos de prueba 203-TestCase-PrimaryItemDimensionallyInvalidError.xml
        /// </summary>
        [TestMethod]
        public void XBRLDimensionsConformance203PrimaryItemDimensionallyInvalidError()
        {
            XBRLConformanceSuiteTest.CargarCasosPruebaDimensions();
            foreach (TestCase testCase in casosPrueba.Where(c => c.Path.Contains("200-xbrldie/203")))
            {
                EjecutarTodasLasVariacionesDeCasoDePrueba(testCase);
            }
        }
        /// <summary>
        /// Valida los casos de prueba 204-TestCase-RepeatedDimensionInInstanceError.xml
        /// </summary>
        [TestMethod]
        public void XBRLDimensionsConformance204RepeatedDimensionInInstanceError()
        {
            XBRLConformanceSuiteTest.CargarCasosPruebaDimensions();
            foreach (TestCase testCase in casosPrueba.Where(c => c.Path.Contains("200-xbrldie/204")))
            {
                EjecutarTodasLasVariacionesDeCasoDePrueba(testCase);
            }
        }

        /// <summary>
        /// Valida los casos de prueba 205-TestCase-TypedMemberNotTypedDimensionError.xml
        /// </summary>
        [TestMethod]
        public void XBRLDimensionsConformance205TypedMemberNotTypedDimensionError()
        {
            XBRLConformanceSuiteTest.CargarCasosPruebaDimensions();
            foreach (TestCase testCase in casosPrueba.Where(c => c.Path.Contains("200-xbrldie/205")))
            {
                EjecutarTodasLasVariacionesDeCasoDePrueba(testCase);
            }
        }

        /// <summary>
        /// Valida los casos de prueba 206-TestCase-ExplicitMemberNotExplicitDimensionError.xml
        /// </summary>
        [TestMethod]
        public void XBRLDimensionsConformance206ExplicitMemberNotExplicitDimensionError()
        {
            XBRLConformanceSuiteTest.CargarCasosPruebaDimensions();
            foreach (TestCase testCase in casosPrueba.Where(c => c.Path.Contains("200-xbrldie/206")))
            {
                EjecutarTodasLasVariacionesDeCasoDePrueba(testCase);
            }
        }
        /// <summary>
        /// Valida los casos de prueba 207-TestCase-ExplicitMemberUndefinedQNameError.xml
        /// </summary>
        [TestMethod]
        public void XBRLDimensionsConformance207ExplicitMemberUndefinedQNameError()
        {
            XBRLConformanceSuiteTest.CargarCasosPruebaDimensions();
            foreach (TestCase testCase in casosPrueba.Where(c => c.Path.Contains("200-xbrldie/207")))
            {
                EjecutarTodasLasVariacionesDeCasoDePrueba(testCase);
            }
        }

        /// <summary>
        /// Valida los casos de prueba 208-TestCase-IllegalTypedDimensionContentError.xml
        /// </summary>
        [TestMethod]
        public void XBRLDimensionsConformance208IllegalTypedDimensionContentError()
        {
            XBRLConformanceSuiteTest.CargarCasosPruebaDimensions();
            foreach (TestCase testCase in casosPrueba.Where(c => c.Path.Contains("200-xbrldie/208")))
            {
                EjecutarTodasLasVariacionesDeCasoDePrueba(testCase);
            }
        }

        /// <summary>
        /// Valida los casos de prueba 270-DefaultValueExamples.xml
        /// </summary>
        [TestMethod]
        public void XBRLDimensionsConformance270DefaultValueExamples()
        {
            XBRLConformanceSuiteTest.CargarCasosPruebaDimensions();
            foreach (TestCase testCase in casosPrueba.Where(c => c.Path.Contains("200-xbrldie/270")))
            {
                EjecutarTodasLasVariacionesDeCasoDePrueba(testCase);
            }
        }

        /// <summary>
        /// Valida los casos de prueba 271-Testcase-PrimaryItemDimensionallyInvalidError.xml
        /// </summary>
        [TestMethod]
        public void XBRLDimensionsConformance271PrimaryItemDimensionallyInvalidError()
        {
            XBRLConformanceSuiteTest.CargarCasosPruebaDimensions();
            foreach (TestCase testCase in casosPrueba.Where(c => c.Path.Contains("200-xbrldie/271")))
            {
                EjecutarTodasLasVariacionesDeCasoDePrueba(testCase);
            }
        }

        /// <summary>
        /// Valida los casos de prueba de la variaciones 300
        /// </summary>
        [TestMethod]
        public void XBRLDimensionsConformance300XBRLDIE()
        {
            XBRLConformanceSuiteTest.CargarCasosPruebaDimensions();
            foreach (TestCase testCase in casosPrueba.Where(c => c.Path.Contains("300-factlist/")))
            {
                EjecutarTodasLasVariacionesDeCasoDePrueba(testCase);
            }
        }

        /// <summary>
        /// Valida el caso de prueba personalizado
        /// </summary>
        [TestMethod]
        public void XBRLDimensionsConformanceCustomTests()
        {
            XBRLConformanceSuiteTest.CargarCasosPruebaDimensions();
            foreach (TestCase testCase in casosPrueba.Where(c => c.Path.Contains("300-instance/391")))
            {
                EjecutarVariacionDeCasoDePrueba(testCase, "InferPrecisionFromDecimals 01");
            }
        }


        #endregion
    }
}
