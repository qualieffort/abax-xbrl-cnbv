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
using MongoDB.Bson;
using MongoDB.Driver;

namespace TestAbaxXBRL.JBRL.Test
{
    [TestClass]
    public class ActualizaConceptosTaxonomiaTest
    {
        public IList<string> REPORTES_REQUEST = new List<string> 
        {
            "{\"uri\":\"https://xbrl.cnbv.gob.mx/DocumentoInstancia/BajarArchivoDocumentoInstancia?idDocIns=16161&tipoArchivo=4&nombreArchivo=ACONCK%20Evento%20Relevante.xbrl\", \"downloadId\": \"16161\", \"receptionDate\": \"2019-02-01T17:17:59Z\"}",
            "{\"uri\":\"http://qa2hsoftware.southcentralus.cloudapp.azure.com/visorCNBV/DocumentoInstancia/BajarArchivoDocumentoInstancia?idDocIns=31675&tipoArchivo=4&nombreArchivo=ER%20Emisora%20MEXICHEM%20Adquisici%C3%B3n%20accionaria.xbrl\", \"downloadId\": \"31675\", \"receptionDate\": \"2018-11-07T16:25:36Z\"}",
            "{\"uri\":\"https://xbrl.cnbv.gob.mx/DocumentoInstancia/BajarArchivoDocumentoInstancia?idDocIns=16064&tipoArchivo=4&nombreArchivo=REPORTE%20ANUAL%202017.xbrl\", \"downloadId\": \"16064\", \"receptionDate\": \"2018-12-20T08:25:05Z\"}",
            "{\"uri\":\"https://xbrl.cnbv.gob.mx/DocumentoInstancia/BajarArchivoDocumentoInstancia?idDocIns=14403&tipoArchivo=4&nombreArchivo=DANHOS_17.xbrl\", \"downloadId\": \"14403\", \"receptionDate\": \"2018-04-27T20:04:24Z\"}",
            "{\"uri\":\"http://qa2hsoftware.southcentralus.cloudapp.azure.com/visorCNBV/DocumentoInstancia/BajarArchivoDocumentoInstancia?idDocIns=31692&tipoArchivo=4&nombreArchivo=Walmex%20ER%20AC.xbrl\", \"downloadId\": \"31692\", \"receptionDate\": \"2018-11-07T19:03:02Z\"}",
            "{\"uri\":\"https://xbrl.cnbv.gob.mx/DocumentoInstancia/BajarArchivoDocumentoInstancia?idDocIns=652&tipoArchivo=4&nombreArchivo=ifrsxbrl_ANGELD_2016-1.xbrl\", \"downloadId\": \"652\", \"receptionDate\": \"2016-04-28T16:50:56Z\"}",
            "{\"uri\":\"https://xbrl.cnbv.gob.mx/DocumentoInstancia/BajarArchivoDocumentoInstancia?idDocIns=832&tipoArchivo=4&nombreArchivo=ifrsxbrl_RLH_2016-1.xbrl\", \"downloadId\": \"832\", \"receptionDate\": \"2016-06-17T14:10:24Z\"}",
            "{\"uri\":\"https://xbrl.cnbv.gob.mx/DocumentoInstancia/BajarArchivoDocumentoInstancia?idDocIns=14559&tipoArchivo=4&nombreArchivo=F1061-%20RA%202017.xbrl\", \"downloadId\": \"14559\", \"receptionDate\": \"2018-04-30T14:42:39Z\"}",
            "{\"uri\":\"https://xbrl.cnbv.gob.mx/DocumentoInstancia/BajarArchivoDocumentoInstancia?idDocIns=14761&tipoArchivo=4&nombreArchivo=AA1CK2017Anual.xbrl\", \"downloadId\": \"14761\", \"receptionDate\": \"2018-05-01T13:22:53Z\"}",
            "{\"uri\":\"https://xbrl.cnbv.gob.mx/DocumentoInstancia/BajarArchivoDocumentoInstancia?idDocIns=477&tipoArchivo=4&nombreArchivo=F00959-1Q2016.xbrl\", \"downloadId\": \"477\", \"receptionDate\": \"2016-04-23T16:55:04Z\"}",
            "{\"uri\":\"http://qa2hsoftware.southcentralus.cloudapp.azure.com/visorCNBV/DocumentoInstancia/BajarArchivoDocumentoInstancia?idDocIns=31683&tipoArchivo=4&nombreArchivo=ERRepComunMEXCHEM.xbrl\", \"downloadId\": \"31683\", \"receptionDate\": \"2018-11-07T17:07:54Z\"}",
            "{\"uri\":\"https://xbrl.cnbv.gob.mx/DocumentoInstancia/BajarArchivoDocumentoInstancia?idDocIns=584&tipoArchivo=4&nombreArchivo=ABJCK_1Q2016.xbrl\", \"downloadId\": \"584\", \"receptionDate\": \"2016-04-28T09:08:45Z\"}",
            "{\"uri\":\"https://xbrl.cnbv.gob.mx/DocumentoInstancia/BajarArchivoDocumentoInstancia?idDocIns=3150&tipoArchivo=4&nombreArchivo=ifrsxbrl_INGEAL_2014-4.xbrl\", \"downloadId\": \"3150\", \"receptionDate\": \"2017-10-12T11:41:05Z\"}",
            "{\"uri\":\"https://xbrl.cnbv.gob.mx/DocumentoInstancia/BajarArchivoDocumentoInstancia?idDocIns=15145&tipoArchivo=4&nombreArchivo=REPORTE%20ANUAL%202017%20EMISION%2013.xbrl\", \"downloadId\": \"15145\", \"receptionDate\": \"2018-06-13T14:28:18Z\"}",
            "{\"uri\":\"https://xbrl.cnbv.gob.mx/DocumentoInstancia/BajarArchivoDocumentoInstancia?idDocIns=14161&tipoArchivo=4&nombreArchivo=REPORTE%20ANUAL%202017%202h.xbrl\", \"downloadId\": \"14161\", \"receptionDate\": \"2018-04-26T21:50:50Z\"}",
            "{\"uri\":\"https://xbrl.cnbv.gob.mx/DocumentoInstancia/BajarArchivoDocumentoInstancia?idDocIns=1255&tipoArchivo=4&nombreArchivo=ifrsxbrl_ABNGOA_2016-1.xbrl\", \"downloadId\": \"1255\", \"receptionDate\": \"2016-10-13T17:11:45Z\"}",
            "{\"uri\":\"https://xbrl.cnbv.gob.mx/DocumentoInstancia/BajarArchivoDocumentoInstancia?idDocIns=774&tipoArchivo=4&nombreArchivo=ifrsxbrl_FIBRAHD_2016-1.xbrl\", \"downloadId\": \"774\", \"receptionDate\": \"2016-06-07T12:37:45Z\"}",
            "{\"uri\":\"https://xbrl.cnbv.gob.mx/DocumentoInstancia/BajarArchivoDocumentoInstancia?idDocIns=13856&tipoArchivo=4&nombreArchivo=Anexo%20N%202016.xbrl\", \"downloadId\": \"13856\", \"receptionDate\": \"2018-04-02T21:01:52Z\"}",
            "{\"uri\":\"https://xbrl.cnbv.gob.mx/DocumentoInstancia/BajarArchivoDocumentoInstancia?idDocIns=14774&tipoArchivo=4&nombreArchivo=REPORTE%20ANUAL%202017.xbrl\", \"downloadId\": \"14774\", \"receptionDate\": \"2018-05-01T13:51:24Z\"}"
        };

        [TestMethod]
        public void ProccessReportsByAzureFunction ()
        {
            try
            {
                LogUtil.LogDirPath = @"..\..\TestOutput\";
                LogUtil.Inicializa();
                var MAX_XBRL_PRCCESS_TASK = 15;
                var taskList = new List<Task<ResponseDto>>();
                var existingDonloadIds = new List<string>();//await GetDownloadIds();
                using(SemaphoreSlim concurrencySemaphore = new SemaphoreSlim(MAX_XBRL_PRCCESS_TASK))
                {
                    foreach(var jsonBody in REPORTES_REQUEST)
                    {
                        concurrencySemaphore.Wait();
                        var task = ProcessFileAsync(jsonBody, concurrencySemaphore);
                        taskList.Add(task);
                    }
                    Task.WaitAll(taskList.ToArray());
                }
                LogUtil.Info($"Se completo el procesamiento de los reportes.");
            }
            catch(Exception ex)
            {
                LogUtil.Error(ex);
            }
        }

        public static async Task<ResponseDto> ProcessFileAsync (string jsonBody, SemaphoreSlim concurrencySemaphore)
        {
            try
            {
                using(WebClient webClient = new WebClient())
                {
                    var azureFunctionURI = new Uri("https://jbrl-bot.azurewebsites.net/api/XBRLUpdateConceptsDefinition?code=S70QRYo29CKH9bPQErulNQyXaWqjjm9kGHQ4QpL2EU4qmJ2MCDzt5g==");
                    ServicePointManager.SecurityProtocol = System.Net.SecurityProtocolType.Tls12;
                    webClient.Headers[HttpRequestHeader.ContentType] = "application/json";
                    LogUtil.Info(jsonBody);
                    var jsonResponse = await webClient.UploadStringTaskAsync(azureFunctionURI, jsonBody);
                    var response = JsonConvert.DeserializeObject<ResponseDto>(jsonResponse);
                    if(response.exception == null)
                    {
                        LogUtil.Info(jsonResponse);
                    }
                    else
                    {
                        LogUtil.Error(response);
                    }

                    return response;
                }
            }
            catch(Exception ex)
            {
                LogUtil.Error(ex);
            }
            finally
            {
                concurrencySemaphore.Release();
            }
            return new ResponseDto();
        }

    }
}
