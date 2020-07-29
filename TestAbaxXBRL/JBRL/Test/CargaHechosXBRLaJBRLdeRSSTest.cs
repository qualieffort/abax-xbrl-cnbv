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
    /// <summary>
    /// Carga los documentos XBRL del RSS de CNBV a la base de datos de Mongo.
    /// </summary>
    [TestClass]
    public class CargaHechosXBRLaJBRLdeRSSTest
    {

        private IList<Task> taskList { get; set; }

        private AbaxXBRLCellStoreMongo abaxXBRLCellStoreMongo { get; set; }

        public CargaHechosXBRLaJBRLdeRSSTest()
        {
            abaxXBRLCellStoreMongo = new AbaxXBRLCellStoreMongo();
            abaxXBRLCellStoreMongo.JSONOutDirectory = @"..\..\TestOutput\";
            //abaxXBRLCellStoreMongo.ConnectionString = "mongodb://localhost/test";
            abaxXBRLCellStoreMongo.ConnectionString = "mongodb+srv://oscarloyola:oscar.loyola.2h@abaxxbrl-dk4sr.azure.mongodb.net/test";
            abaxXBRLCellStoreMongo.DataBaseName = "xbrlcellstore";
            //abaxXBRLCellStoreMongo.Init2();
            taskList = new List<Task>();
        }
        /// <summary>
        /// The download ids of the report upload in the data base.
        /// </summary>
        /// <returns>List with the existing download ids.</returns>
        public async Task<IList<string>> GetDownloadIds()
        {
            var listToReturn = new List<string>();
            var azureFunctionURI = "http://localhost:7071/api/XBRLGetDownloadsIds";
            using(WebClient webClient = new WebClient())
            {
                webClient.Headers[HttpRequestHeader.ContentType] = "application/json";
                var jsonResponse = await webClient.DownloadStringTaskAsync(azureFunctionURI);
                listToReturn = JsonConvert.DeserializeObject<List<string>>(jsonResponse);
            }
            return listToReturn;
        }

        /// <summary>
        /// The download ids of the report upload in the data base.
        /// </summary>
        /// <returns>List with the existing download ids.</returns>
        public async Task<IList<string>> GetFactReportsIds()
        {
            var collection = abaxXBRLCellStoreMongo.getCollection("fact");
            var match = new BsonDocument { { "isReplaced", false } };
            var groupDownloadId = new BsonDocument
            {
                { "_id","$reportRecordId" }
            };
            var listToReturn = await collection.Distinct<string>("reportRecordId",match).ToListAsync();
            return listToReturn;
        }

        /// <summary>
        /// The download ids of the report upload in the data base.
        /// </summary>
        /// <returns>List with the existing download ids.</returns>
        //[TestMethod]
        public async Task EvaluateReports ()
        {
            LogUtil.LogDirPath = @"..\..\TestOutput\";
            LogUtil.Inicializa();
            var collection = abaxXBRLCellStoreMongo.getCollection("report");
            var reportRecordIdList = await GetFactReportsIds();
            var notMatch = new BsonDocument
            {
                { "reportRecordId", new BsonDocument { { "$nin", new BsonArray(reportRecordIdList) }  } }
            };
            var aggregation = collection.Aggregate().Match(notMatch);
            var documentsList = await aggregation.ToListAsync();
            var list = new List<string>();
            foreach(var document in documentsList)
            {
                list.Add(document["reportRecordId"].AsString);
                /*LogUtil.Info("Documento no procesado: " + 
                    "{ reportRecordId:\"" + document["reportRecordId"].AsString + "\"" +
                    ", entity:\"" + document["entity"].AsString + "\"" +
                    ", reportedDate:\"" + document["reportedDate"].ToUniversalTime() + "\"" +
                    ", taxonomyId:\"" + document["taxonomyId"].AsString + "\"" +
                    "\" }");*/
            }
            LogUtil.Info("Lista:\r\n");
            LogUtil.Info(list);
        }





        /// <summary>
        /// 
        /// </summary>
        //[TestMethod]
        public void GetFactsByXBRL()
        {
            LogUtil.LogDirPath = @"..\..\TestOutput\";
            LogUtil.Inicializa();
            var outDirectoryPath = @"C:\CNBVDownloads\";
            //var uri = @"file:///C:/2HSoftware/Notas/55_Documentaci%C3%B3nCNBV/02/02_Documentos/Respaldo/20181030/GetRSSWalmexAnual.xml";
            var uri = @"file:///C:/2HSoftware/Notas/55_Documentaci%C3%B3nCNBV/02/02_Documentos/Respaldo/2018/20181030/GetRSS_erb_.xml";
            
            var reader = XmlReader.Create(uri);
            var feed = SyndicationFeed.Load(reader);
            var regEntity 
                = new Regex("^(.+?)\\s", RegexOptions.Compiled | RegexOptions.Multiline);
            reader.Close();
            foreach (SyndicationItem item in feed.Items)
            {
                String subject = item.Title.Text;
                String summary = item.Summary.Text;
                if (item.Links.Count > 0)
                {
                    var link = item.Links.First();
                    var linkUri = link.Uri.ToString();
                    var downloadUri = new Uri(linkUri);
                    var cnbvId = item.Id;
                    var documentName = item.Title.Text;
                    var receptionDate = item.LastUpdatedTime.DateTime;
                    var description = item.Summary.Text;
                    var entity = String.Empty;
                    var outPath = outDirectoryPath;
                    if (regEntity.IsMatch(description))
                    {
                        var match = regEntity.Match(description);
                        if (match.Groups.Count > 1)
                        {
                            entity = match.Groups[1].Value;
                            outPath = outPath + "\\" + entity + "\\";
                            Directory.CreateDirectory(outPath);
                        }
                    }
                    var fileName = "id_" + cnbvId + "_" + documentName.Replace(".xbrl", String.Empty) + ".zip";
                    outPath = outPath + fileName;
                    if (!File.Exists(outPath))
                    {
                        try
                        {
	                        using (WebClient webClient = new WebClient())
	                        {
	                            System.Net.ServicePointManager.SecurityProtocol = System.Net.SecurityProtocolType.Tls12;
	                            webClient.DownloadFile(linkUri, outPath);
	                            File.SetLastWriteTime(outPath, receptionDate);
	                        }
                    	}   
                        catch(Exception ex)
                        {
                            LogUtil.Error("Error al descargar el archivo: " + cnbvId);
                            LogUtil.Error(ex);
                        }
                    }
                    if( (description.Contains("mx_ics_entry_point") || 
                        description.Contains("ar_N_entry_point") ||
                        description.Contains("rel_news_issuer"))
                        && !JBRLUtils.ExistsDownloadId(cnbvId, abaxXBRLCellStoreMongo))
                    {
                    	ProcessFile(outPath, cnbvId, downloadUri.Host,receptionDate);
                	}
            	}
            }
            Task.WaitAll(taskList.ToArray());
        }

        public void ProcessFile(
            string rutaArchivo,
            string downloadId,
            string downloadPage,
            DateTime registrationDate)
        {
            try
            {
                XPEService xpeService = XPEServiceImpl.GetInstance(true);
                var fileName = Path.GetFileName(rutaArchivo);
                using (var reader = File.OpenRead(rutaArchivo))
                {
                    var reportParams = new Dictionary<String, String>();
                    reportParams["downloadId"] = downloadId;
                    reportParams["downloadPage"] = downloadPage;
                    var factsList = new List<FactJBRL>();
                    DocumentoInstanciaXbrlDto documentoInstanciXbrlDto = xpeService.CargaInstanciaXBRLStreamFile(reader, fileName);
                    if (documentoInstanciXbrlDto.Taxonomia == null)
                    {
                        JBRLUtils.ObtenerTaxonomia(documentoInstanciXbrlDto);
                    }
                    JBRLUtils.InsertFacts(
                        documentoInstanciXbrlDto,
                        reportParams,
                        factsList,
                        taskList,
                        registrationDate,
                        abaxXBRLCellStoreMongo);
                }
                System.GC.Collect();
            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
            }
        }


        [TestMethod]
        public async Task ProccessReportsByAzureFunctionAsync()
        {
            try
            {
                LogUtil.LogDirPath = @"..\..\TestOutput\";
                LogUtil.Inicializa();
                //var RSS_URI = @"file:///C:/2HSoftware/Notas/55_Documentaci%C3%B3nCNBV/02/02_Documentos/Respaldo/2018/20181030/GetRSSWalmexAnual.xml";
                //var RSS_URI = @"file:///C:/2HSoftware/Notas/55_Documentaci%C3%B3nCNBV/02/02_Documentos/Respaldo/20190128/GetRSS.xml";
                //var RSS_URI = @"file:///C:/2HSoftware/Notas/55_Documentaci%C3%B3nCNBV/02/02_Documentos/Respaldo/2018/20181030/GetRSS_erb_.xml";
                var RSS_URI = @"file:///C:/2HSoftware/Notas/55_Documentaci%C3%B3nCNBV/02/02_Documentos/Respaldo/20190205/GetRSS.txt";
                var MAX_XBRL_PRCCESS_TASK = 15;
                var reader = XmlReader.Create(RSS_URI);
                var feed = SyndicationFeed.Load(reader);
                var taskList = new List<Task<ResponseDto>>();
                var processedCount = 0;
                var findItems = feed.Items.Count();
                reader.Close();
                var existingDonloadIds = await GetDownloadIds();
                using (SemaphoreSlim concurrencySemaphore = new SemaphoreSlim(MAX_XBRL_PRCCESS_TASK))
                {
                    foreach (SyndicationItem item in feed.Items)
                    {
                        //processedCount += await EvaluateTaskListAsync(taskList);
                        String subject = item.Title.Text;
                        String summary = item.Summary.Text;
                        if (item.Links.Count > 0)
                        {
                            var link = item.Links.First();
                            var linkUri = link.Uri.ToString();
                            linkUri = linkUri.Replace(ConstantsJBRL.DOWNLOAD_KIND_XBRL, ConstantsJBRL.DOWNLOAD_KIND_JSON);
                            var downloadUri = new Uri(linkUri);
                            var cnbvId = item.Id;
                            var documentName = item.Title.Text;
                            var receptionDate = item.LastUpdatedTime.DateTime;
                            if(existingDonloadIds.Contains(cnbvId))
                            {
                                continue;
                            }
                            concurrencySemaphore.Wait();
                            var task = ProcessFileAsync(downloadUri, cnbvId, receptionDate, concurrencySemaphore);
                            taskList.Add(task);
                        }
                    }
                    processedCount += await EvaluateTaskListAsync(taskList);
                }
                LogUtil.Info($"Se procesaron {processedCount} de {findItems} facts obtenidos.");
            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
            }
        }

        /// <summary>
        /// Evaluate the number of XBRL files processed
        /// </summary>
        /// <param name="taskList">The list of task that process the XBRL files.</param>
        /// <returns></returns>
        public static async Task<int> EvaluateTaskListAsync(IList<Task<ResponseDto>> taskList)
        {
            var resultsList = await Task.WhenAll(taskList.ToArray());
            var processedCount = 0;
            foreach (var factsNumber in resultsList)
            {
                if (factsNumber.isSuccess)
                {
                    processedCount++;
                }
            }
            return processedCount;
        }

        public static async Task<ResponseDto> ProcessFileAsync(Uri downloadUri, string cnbvId, DateTime receptionDate, SemaphoreSlim concurrencySemaphore)
        {
            try
            {
                using (WebClient webClient = new WebClient())
                {
                    //var azureFunctionURI = new Uri("http://localhost:7071/api/XBRLUploadFromJsonURI");
                    var azureFunctionURI = new Uri("https://jbrl-bot.azurewebsites.net/api/XBRLUploadFromJsonURI?code=gDAMhiFMTI1AW374tDqrE6nel3ddNX3FWOSDeFSF2ZJsRsdsbrJenQ==");
                    //var azureFunctionURI = new Uri("https://jbrl-bot.azurewebsites.net/api/XBRLUpdateTextFactsFromJonsURI?code=7i6yO9Cl4v/TcvwobhAiENAsR/jnSjTvFHk9ley8khItX1Kk7iTVTA==");
                    ServicePointManager.SecurityProtocol = System.Net.SecurityProtocolType.Tls12;
                    webClient.Headers[HttpRequestHeader.ContentType] = "application/json";
                    var respectionDateSting = receptionDate.ToString("yyyy-MM-ddTHH:mm:ssZ");
                    var jsonBody =
                        "{" +
                        "\"uri\":" + FactJBRL.ParseJson(downloadUri.AbsoluteUri) + ", " +
                        "\"downloadId\": \"" + cnbvId + "\", " +
                        "\"receptionDate\": \"" + respectionDateSting + "\"" +
                        "}";
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
            catch (Exception ex)
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
