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

namespace TestAbaxXBRL
{
    /// <summary>
    /// Descarga los archivos json de un RSS
    /// </summary>
    [TestClass]
    public class DescargaJsonsRssTest
    {
        /// <summary>
        /// 
        /// </summary>
        [TestMethod]
        public void GetFactsByXBRL()
        {
            LogUtil.LogDirPath = @"..\..\TestOutput\";
            LogUtil.Inicializa();
            var outDirectoryPath = @"C:\CNBVDownloads\";
            var uri = @"file:///C:/2HSoftware/Notas/55_Documentaci%C3%B3nCNBV/02/02_Documentos/Respaldo/20181120/GetRSS_.xml";
            var reader = XmlReader.Create(uri);
            var feed = SyndicationFeed.Load(reader);
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
                    
                    var fileName = cnbvId + ".json";
                    outPath = outPath + fileName;
                    if (!File.Exists(outPath))
                    {
                        using (WebClient webClient = new WebClient())
                        {
                            System.Net.ServicePointManager.SecurityProtocol = System.Net.SecurityProtocolType.Tls12;
                            webClient.DownloadFile(linkUri, outPath);
                            File.SetLastWriteTime(outPath, receptionDate);
                        }
                    }
                }
            }
        }
    }
}
