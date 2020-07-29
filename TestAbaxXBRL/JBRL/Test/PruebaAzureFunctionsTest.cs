using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Xml;
using System.ServiceModel.Syndication;
using System.IO;
using TestAbaxXBRL.JBRL.Util;
using AbaxXBRLCore.Viewer.Application.Dto;
using AbaxXBRLCore.XPE;
using AbaxXBRLCore.XPE.impl;
using TestAbaxXBRL.JBRL.Modelo;
using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.CellStore.Services.Impl;
using System.Net;
using System.Text.RegularExpressions;
using TestAbaxXBRL.JBRL.Constants;
using Newtonsoft.Json;
using System.Threading;
using System.Web;

namespace TestAbaxXBRL.JBRL.Test
{
    /// <summary>
    /// Prueba unitaria de los azure functions
    /// </summary>
    [TestClass]
    public class PruebaAzureFunctionsTest
    {
        public const string HOST = "http://localhost:7071/api/{{FUNCTION_NAME}}";
        public const string FUNCTION_NAME_TOKEN = "{{FUNCTION_NAME}}";
        public IList<AzureFunctionTestRequestDto> FUNCTIONS_TO_TEST = new List<AzureFunctionTestRequestDto>
        {
            new AzureFunctionTestRequestDto
            {
                testAlias = "1",
                name = "XBRLTaxonomy",
                isGet = true,
                parameters =
                {
                    { "language", "es" },
                    { "name", "información finaciera" },
                }
            },
            new AzureFunctionTestRequestDto
            {
                testAlias = "2",
                name = "XBRLTaxonomy",
                isPost = true,
                parameters =
                {
                    { "language", "en" },
                    { "name", "anual information" },
                }
            },
            new AzureFunctionTestRequestDto
            {
                testAlias = "3",
                name = "XBRLFindEntity",
                isGet = true,
                parameters =
                {
                    { "name", "Bimba" },
                }
            },
            new AzureFunctionTestRequestDto
            {
                testAlias = "4",
                name = "XBRLFindTrustNumber",
                isGet = true,
                parameters =
                {
                    { "entityId", "STEPCC"  },
                    { "trustNumberId", "41-3" }
                }
            },
            new AzureFunctionTestRequestDto
            {
                testAlias = "5",
                name = "XBRLFindPeriod",
                isGet = true,
                parameters =
                {
                    { "language", "en" },
                    { "entityId", "AEROMEX"  },
                    { "taxonomyId", "FINANCIAL_INFORMATION" },
                    { "name", "first quarter of 2018" },
                }
            },
            new AzureFunctionTestRequestDto
            {
                testAlias = "6",
                name = "XBRLFindPeriod",
                isGet = true,
                parameters =
                {
                    { "language", "es" },
                    { "entityId", "AEROMEX"  },
                    { "taxonomyId", "ANUAL_INFORMATION" },
                    { "name", "ultimo reporte" },
                }
            },
            new AzureFunctionTestRequestDto
            {
                testAlias = "7",
                name = "XBRLFindConcept",
                isGet = true,
                parameters =
                {
                    { "language", "en" },
                    { "taxonomyId", "FINANCIAL_INFORMATION" },
                    { "entityId", "WALMEX"  },
                    { "name", "Name of reporting entity or other" }
                }
            },
            new AzureFunctionTestRequestDto
            {
                testAlias = "8",
                name = "XBRLFindConcept",
                isGet = true,
                parameters =
                {
                    { "language", "es" },
                    { "taxonomyId", "ANUAL_INFORMATION" },
                    { "entityId", "BIMBO"  },
                    { "name", "asunto" },
                }
            },
            new AzureFunctionTestRequestDto
            {
                testAlias = "9",
                name = "QueryFact",
                isGet = true,
                parameters =
                {
                    { "language", "es" },
                    { "taxonomyId", "FINANCIAL_INFORMATION" },
                    { "entityId", "BIMBO"  },
                    { "periodId", "2016-03-31T00:00:00Z"  },
                    { "conceptId", "ifrs-mc_ManagementCommentaryExplanatory" },
                }
            },
            new AzureFunctionTestRequestDto
            {
                testAlias = "10",
                name = "QueryFact",
                isGet = true,
                parameters =
                {
                    { "language", "en" },
                    { "taxonomyId", "FINANCIAL_INFORMATION" },
                    { "entityId", "BIMBO"  },
                    { "periodId", "2016-03-31T00:00:00Z"  },
                    { "conceptId", "ifrs-mc_ManagementCommentaryExplanatory" },
                }
            },
            new AzureFunctionTestRequestDto
            {
                testAlias = "11",
                name = "QueryFact",
                isGet = true,
                parameters =
                {
                    { "language", "en" },
                    { "taxonomyId", "FINANCIAL_INFORMATION" },
                    { "entityId", "BIMBO"  },
                    { "periodId", "2016-03-31T00:00:00Z"  }
                }
            },
            new AzureFunctionTestRequestDto
            {
                testAlias = "12",
                name = "QueryFact",
                isGet = true,
                parameters =
                {
                    { "language", "es" },
                    { "taxonomyId", "FINANCIAL_INFORMATION" },
                    { "entityId", "BIMBO"  }
                }
            },
            new AzureFunctionTestRequestDto
            {
                testAlias = "13",
                name = "XBRLFindAdministrators",
                isGet = true,
                parameters =
                {
                    { "language", "es" },
                    { "taxonomyId", "ANUAL_INFORMATION" },
                    { "entityId", "WALMEX"  },
                    { "year", "2017"  }
                }
            },
            new AzureFunctionTestRequestDto
            {
                testAlias = "14",
                name = "XBRLFindAdministratorsGender",
                isGet = true,
                parameters =
                {
                    { "language", "es" },
                    { "taxonomyId", "ANUAL_INFORMATION" },
                    { "entityId", "WALMEX"  },
                    { "year", "2017"  }
                }
            },
            new AzureFunctionTestRequestDto
            {
                testAlias = "15",
                name = "XBRLEbitda",
                isGet = true,
                parameters =
                {
                    { "language", "es" },
                    { "taxonomyId", "FINANCIAL_INFORMATION" },
                    { "entityId", "WALMEX"  },
                    { "periodId", "2016-12-31T00:00:00Z"  }
                }
            },
            new AzureFunctionTestRequestDto
            {
                testAlias = "16",
                name = "XBRLSendMail",
                isPost = true,
                parameters =
                {
                    { "language", "en" },
                    { "email", "oscar.loyola@2hsoftware.com.mx" },
                    { "content", "<p><strong>Hi</strong></p><p>How are you?</p><p>asfdasdfasdf</p>"  },
                    { "reportId", "73FEC8054C6CDF24346E221ADE02AC0D"  },
                    { "subject","test" }
                }
            },
            new AzureFunctionTestRequestDto
            {
                testAlias = "17",
                name = "XBRLSendMail",
                isPost = true,
                parameters =
                {
                    { "language", "es" },
                    { "email", "oscar.loyola@2hsoftware.com.mx" },
                    { "content", "hola"  },
                    { "reportId", "73FEC8054C6CDF24346E221ADE02AC0D"  },
                    { "subject","test" }
                }
            },
            new AzureFunctionTestRequestDto
            {
                testAlias = "18",
                name = "XBRLFindPeriod",
                isGet = true,
                parameters =
                {
                    { "language", "en" },
                    { "entityId", "STEPCC"  },
                    { "trustNumberId", "3541-4"  },
                    { "taxonomyId", "FINANCIAL_INFORMATION" },
                    { "name", "first quarter of 2018" },
                }
            },
            new AzureFunctionTestRequestDto
            {
                testAlias = "19",
                name = "XBRLFindPeriod",
                isGet = true,
                parameters =
                {
                    { "language", "en" },
                    { "entityId", "STEPCC"  },
                    { "trustNumberId", "3541-4"  },
                    { "taxonomyId", "FINANCIAL_INFORMATION" },
                    { "name", "first quarter of 2018" },
                }
            },
            new AzureFunctionTestRequestDto
            {
                testAlias = "20",
                name = "XBRLFindAdministratorsGender",
                isGet = true,
                parameters =
                {
                    { "language", "en" },
                    { "taxonomyId", "ANUAL_INFORMATION" },
                    { "entityId", "FINN"  },
                    { "trustNumberId", "F/1616"  },
                    { "year", "2017"  }
                }
            },
            new AzureFunctionTestRequestDto
            {
                testAlias = "21",
                name = "XBRLFindAdministrators",
                isGet = true,
                parameters =
                {
                    { "language", "es" },
                    { "taxonomyId", "ANUAL_INFORMATION" },
                    { "entityId", "FINN"  },
                    { "trustNumberId", "F/1616"  },
                    { "year", "2017"  }
                }
            },
            new AzureFunctionTestRequestDto
            {
                testAlias = "22",
                name = "XBRLEbitda",
                isGet = true,
                parameters =
                {
                    { "language", "es" },
                    { "taxonomyId", "FINANCIAL_INFORMATION" },
                    { "entityId", "NGPE2CK"  },
                    { "trustNumberId", "CIB2889"  },
                    { "periodId", "2016-12-31T00:00:00Z"  }
                }
            },
            new AzureFunctionTestRequestDto
            {
                testAlias = "23",
                name = "QueryFact",
                isGet = true,
                parameters =
                {
                    { "language", "en" },
                    { "taxonomyId", "FINANCIAL_INFORMATION" },
                    { "entityId", "NGPE2CK"  },
                    { "trustNumberId", "CIB2889"  },
                    { "periodId", "2018-03-31T00:00:00Z"  },
                    { "conceptId", "ifrs-full_CashAndCashEquivalents" },
                }
            },
            new AzureFunctionTestRequestDto
            {
                testAlias = "24",
                name = "QueryFact",
                isGet = true,
                parameters =
                {
                    { "language", "en" },
                    { "taxonomyId", "FINANCIAL_INFORMATION" },
                    { "entityId", "NGPE2CK"  },
                    { "trustNumberId", "CIB2889"  },
                    { "periodId", "2018-03-31T00:00:00Z"  }
                }
            },
            new AzureFunctionTestRequestDto
            {
                testAlias = "25",
                name = "QueryFact",
                isGet = true,
                parameters =
                {
                    { "language", "es" },
                    { "taxonomyId", "FINANCIAL_INFORMATION" },
                    { "entityId", "NGPE2CK"  },
                    { "trustNumberId", "CIB2889"  },
                }
            },

        };
        [TestMethod]
        public async Task AzureFunctionTestAsync ()
        {
            LogUtil.LogDirPath = @"..\..\TestOutput\";
            LogUtil.Inicializa();
            try
            {
                var taskList = new List<Task<bool>>();
                foreach(var function in FUNCTIONS_TO_TEST)
                {
                    taskList.Add(TestFunctionAsync(function));
                }
                var resultList = await Task.WhenAll(taskList);
                foreach(var result in resultList)
                {
                    if(!result)
                    {
                        throw new Exception("Error al procesar las funciones.");
                    }
                }
            }
            catch(Exception ex)
            {
                //LogUtil.Error(ex);
                throw ex;
            }

        }
        /// <summary>
        /// Evalua una funcion.
        /// </summary>
        /// <param name="function">Función a evaluar.</param>
        /// <returns>Resultado de la prueba.</returns>
        public async Task<bool> TestFunctionAsync (AzureFunctionTestRequestDto function)
        {
            var success = false;
            var url = string.Empty;
            var jsonBody = string.Empty;
            try
            {
                using(WebClient webClient = new WebClient())
                {
                    ServicePointManager.SecurityProtocol = System.Net.SecurityProtocolType.Tls12;
                    url = HOST.Replace(FUNCTION_NAME_TOKEN, function.name);
                    string response = null;
                    if(function.isPost)
                    {
                        webClient.Headers[HttpRequestHeader.ContentType] = "application/json";
                        jsonBody = JsonConvert.SerializeObject(function.parameters);
                        var start = DateTime.Now;
                        response = await webClient.UploadStringTaskAsync(url, jsonBody);
                        var ends = DateTime.Now;
                        var duration = ends.Millisecond - start.Millisecond;
                        LogUtil.Info(" [POST] [" +function.name+ "] ["+ duration + " ms] [" + function.testAlias + "] : " + response);
                    }
                    if(function.isGet)
                    {
                        url = ParseURLParams(function, url);
                        var start = DateTime.Now;
                        response = await webClient.DownloadStringTaskAsync(url);
                        var ends = DateTime.Now;
                        var duration = ends.Millisecond - start.Millisecond;
                        LogUtil.Info(" [GET] [" + function.name + "] [" + duration + " ms] [" + function.testAlias + "] : " + response);
                    }
                    success = true;
                }
            }
            catch(Exception ex)
            {
                LogUtil.Error(new Dictionary<string, object> 
                {
                    { "Error", "Error on test function \"" + function.name + "\": " + ex.Message },
                    { "URL", url },
                    { "JsonBody", jsonBody },
                    { "Function", function },
                    { "Exception", ex}
                });
            }
            return success;
        }

        private static string ParseURLParams (AzureFunctionTestRequestDto function, string url)
        {
            var parametersString = string.Empty;
            foreach(var paramName in function.parameters.Keys)
            {
                var paramValue = function.parameters[paramName];
                var stringValue = string.Empty;
                if(paramValue is List<object>)
                {
                    foreach(var element in paramValue as IEnumerable<object>)
                    {
                        stringValue += "," + HttpUtility.UrlEncode(element.ToString());
                    }
                    if(stringValue.Length > 0)
                    {
                        stringValue = stringValue.Substring(1);
                    }
                }
                else
                {
                    stringValue = HttpUtility.UrlEncode(paramValue.ToString());
                }
                parametersString += "&" + paramName + "=" + stringValue;
            }
            if(parametersString.Length > 0)
            {
                parametersString = parametersString.Substring(0);
                url += url.Contains("?") ? "&" : "?";
                url += parametersString;
            }

            return url;
        }
    }
}
