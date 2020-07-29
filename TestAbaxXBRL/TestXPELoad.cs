using java.util;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ubmatrix.xbrl.common.formatter.src;
using ubmatrix.xbrl.common.memo.src;
using ubmatrix.xbrl.common.memo.uriResolver.src;
using ubmatrix.xbrl.common.src;
using ubmatrix.xbrl.common.utility.src;
using ubmatrix.xbrl.domain.xbrl21Domain.instance.src;
using ubmatrix.xbrl.src;
using ubmatrix.xbrl.validation.formula.assertion.src;
using ubmatrix.xbrl.validation.formula.src;

namespace TestAbaxXBRL
{
    [TestClass]
    class TestXPELoad
    {
        private IFormatter m_formatter = null;
       
        private IURIResolver m_resolver = null;
        [TestMethod]
        public void testXPELoadFile() 
        {

            if (initXPE())
            {

                //Preload a taxonomy
                var xbrlTax = Xbrl.newInstance();

                if (xbrlTax.load("http://emisnet.bmv.com.mx/taxonomy/mx-ifrs-2014-12-05/full_ifrs_mc_mx_ics_entry_point_2014-12-05.xsd",true,true))
                {
                    xbrlTax.compileFormulas();

                    LoadAndValidate("C:\\temp\\load\\ifrsxbrl_DAIMLER_2015-2.xbrl");
                    LoadAndValidate("C:\\temp\\load\\ifrsxbrl_DAIMLER_2015-2_1.xbrl");
                    


                    xbrlTax.close();
                    xbrlTax.Shutdown();
                }
                else
                {
                    foreach (var memo in xbrlTax.getMemos())
                    {
                        Debug.WriteLine(memo);
                    }
                }
            }
        }

        private void LoadAndValidate(string fileToLoad)
        {
            Debug.WriteLine("Loading and Validating:" + fileToLoad);
            var xbrlDocIns = Xbrl.newInstance();
            var sw = Stopwatch.StartNew();
            if (xbrlDocIns.load(fileToLoad, true, true))
            {
                sw.Stop();
                Debug.WriteLine("Load time:" + sw.ElapsedMilliseconds);
                sw.Restart();
                if (xbrlDocIns.validate(getValidationOptions()))
                {
                    sw.Stop();
                    Debug.WriteLine("Validation time:" + sw.ElapsedMilliseconds);
                    foreach (var memo in xbrlDocIns.getMemos())
                    {
                        Debug.WriteLine(memo);
                    }

                    sw.Restart();
                    var config = new FormulaConfiguration();
                    config.setKeepResultDTSOpenFlag(false);
                    
                    if (xbrlDocIns.processFormulas(config, null, null, null))
                    {
                        sw.Stop();
                        Debug.WriteLine("Formula time:" + sw.ElapsedMilliseconds);
                        var assertions = config.getResult().getAssertionResults();
                        while (assertions.hasNext())
                        {
                            Object asResult = ((Map.Entry)assertions
                                    .next()).getValue();
                            ProcessAssertionResult(asResult);
                        }
                    }
                    else
                    {
                        sw.Stop();
                        Debug.WriteLine("Formula time:" + sw.ElapsedMilliseconds);
                        foreach (var memo in xbrlDocIns.getMemos())
                        {
                            Debug.WriteLine(memo);
                        }
                    }

                }
                else
                {
                    Debug.WriteLine("Failed to validate");
                    foreach (var memo in xbrlDocIns.getMemos())
                    {
                        Debug.WriteLine(memo);
                    }
                }
                xbrlDocIns.close();
            }
            else
            {
                Debug.WriteLine("Failed to load");
                foreach (var memo in xbrlDocIns.getMemos())
                {
                    Debug.WriteLine(memo);
                }
            }
        }

        private HashMap getValidationOptions()
        {
            String yes = "true";
            String no = "false";
            HashMap options = new HashMap();

            // enable for instance validation
            options.put("validation://ubmatrix.com/Xbrl/Validation#Xml,Xml", yes);
            options.put("validation://ubmatrix.com/Xbrl/Validation#DTS,InstanceDocument", yes);
            options.put("validation://ubmatrix.com/Xbrl/Validation#DTS,InstanceDimension", yes);
            options.put("validation://ubmatrix.com/Xbrl/Validation#DTS,Calculation", yes);

            // only required if taxonomy uses XBRL Extensible Enumerations (currently IFRS and the MX extension do not)
            options.put("validation://ubmatrix.com/Xbrl/Validation#DTS,Enum", no);

            // only required if units must conform to the Unit Type Registry - this is regulator specific
            options.put("validation://ubmatrix.com/Xbrl/Validation#DTS,UnitsRegistry", no);

            // disable for taxonomy validation
            options.put("validation://ubmatrix.com/Xbrl/Validation#DTS,Taxonomy", no);
            options.put("validation://ubmatrix.com/Xbrl/Validation#DTS,Linkbase", no);
            options.put("validation://ubmatrix.com/Xbrl/Validation#DTS,LinkbaseDimension", no);
            options.put("validation://ubmatrix.com/Xbrl/Validation#DTS,GenericLinkbase", no);
            options.put("validation://ubmatrix.com/Xbrl/Validation#DTS,Formula2008", no);
            options.put("validation://ubmatrix.com/Xbrl/Validation#DTS,Severity", no);

            // disable FRTA
            options.put("validation://ubmatrix.com/Xbrl/Validation#BestPractices,Frta", no);

            return options;
        }

        
        private bool  initXPE(){
            Xbrl xbrlProc = null;
            try
            {
                var configInstance = Configuration.getInstance();
                configInstance.setCoreRoot("C:\\coreroot");
                var lang = "en";

                var _coreroot = configInstance.getCoreRoot();
                configInstance.setProperty(Configuration.c_logging, "false");
                configInstance.setFormulaUnsatisfiedEvaluationThreshold(100);
                configInstance.setMemosErrorThreshold(100);
                configInstance.setProperty("extensionFunctionModuleLogicalUri", "");
                configInstance.setProperty("extensionFunctionModuleClassUri", "");
                configInstance.setModel(Configuration.s_fullModel);
                configInstance.setMode(Configuration.s_desktopMode);
                xbrlProc = Xbrl.newInstance();

                configInstance.setLanguage(lang);

                var errors = new List<IMemo>();
                Debug.WriteLine("COREROOT:" + _coreroot);
                try
                {
                    configInstance.clearWebCache();
                    configInstance.clearXPathExpressionCache();
                }
                catch (Exception ex) {
                    Debug.WriteLine(ex.StackTrace);
                }

                this.m_formatter = new ubmatrix.xbrl.common.formatter.src.Formatter();
                this.m_resolver = new ubmatrix.xbrl.common.memo.uriResolver.src.URIResolver();

                if (!xbrlProc.Initialize())
                {
                    if (xbrlProc.getNativeMemos() != null)
                    {
                        foreach (var memo in xbrlProc.getMemos())
                        {
                            Debug.WriteLine(memo);
                        }
                    }
                    return false;
                }
                
            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex.StackTrace);
                return false;
            }
            return true;
        }

        
        private Boolean ProcessAssertionResult(Object assertionResult)
        {

            // assume is satisfied until something fails
            var isSatisfied = true;
            String assertionResultStr = null;
            String idContextoOrigen = null;
            String idHechoOrigen = null;
            if (assertionResult is IConsistencyAssertionResult)
            {
                var consisAsser = (IConsistencyAssertionResult)assertionResult;
                String message = consisAsser.getMessage();
                if (message == null)
                    message = "Assertion failed";

                if (!consisAsser.isSatisfied())
                {
                    assertionResultStr = "Id: " + consisAsser.getXmlId()
                            + ", Msg: " + message;
                    if (consisAsser.getMatchedFact() != null)
                    {
                        idContextoOrigen = consisAsser.getMatchedFact().getContextRef();
                    }
                    isSatisfied = false;
                }
            }
            else if (assertionResult is IExistenceAssertionResult)
            {
                IExistenceAssertionResult existAsser = (IExistenceAssertionResult)assertionResult;
                String message = existAsser.getMessage();
                if (message == null)
                    message = "Assertion failed";

                if (!existAsser.isSatisfied())
                {
                    assertionResultStr = "Id: " + existAsser.getXmlId()
                            + ", Msg: " + message;
                    isSatisfied = false;

                }
            }
            else if (assertionResult is IValueAssertionResult)
            {
                IValueAssertionResult valAsser = (IValueAssertionResult)assertionResult;
                String message = valAsser.getMessage();
                if (message == null)
                    message = "Assertion failed";

                if (!valAsser.isSatisfied())
                {
                    assertionResultStr = "Id: " + valAsser.getXmlId()
                            + ", Msg: " + message;
                    isSatisfied = false;

                }
            }
            else if (assertionResult is List)
            {
                List assertionResults = (List)assertionResult;
                for (int iAs = 0; iAs < assertionResults.size(); iAs++)
                {
                    if (!ProcessAssertionResult(assertionResults.get(iAs)))
                    {
                        isSatisfied = false;
                    }
                }
            }
            else
            {
                isSatisfied = false;
                assertionResultStr = assertionResult.GetType().AssemblyQualifiedName;
            }

            if (assertionResultStr != null)
            {
                if (!isSatisfied)
                {
                    Debug.WriteLine(assertionResultStr);
                }
            }
            return isSatisfied;
        }
    }
}
