using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using System.Net.Http;
using Newtonsoft.Json;
using TestAbaxXBRL.JBRL.Modelo;
using AbaxXBRLCore.CellStore.Services.Impl;
using MongoDB.Bson;
using MongoDB.Driver.Builders;
using MongoDB.Driver;

namespace TestAbaxXBRL.JBRL.Test
{
    [TestClass]
    public class ReproceaNotasXBRLTest
    {
        /// <summary>
        /// Expersión regular para buscar la última palabra (por si esta cortada) al final del archivo.
        /// </summary>
        Regex whiteSpaceRegex = new Regex(@"\s+\S+$", RegexOptions.Compiled | RegexOptions.Multiline);

        String ACCES_TOCKEN_SERVICE_URI = "https://southcentralus.api.cognitive.microsoft.com/sts/v1.0/issueToken";
        String TRANSLATE_SERVICE_URI = "https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&to={{to}}&from={{from}}";
        String SUSCRIPTION_KEY = "0472a6cdf20f4672a039708f0b37f8e3";

        [TestMethod]
        public void ReprocesaTextoTest()
        {
            var reportIdList = GetReportsToEvaluate();
            for (var indexReport = 0; indexReport < reportIdList.Count; indexReport+=10)
            {

            }
        }

        /// <summary>
        /// Obtiene la conexión a la base de datos.
        /// </summary>
        /// <returns>Base de datos con la conexión.</returns>
        public AbaxXBRLCellStoreMongo GetCellStoreMongo()
        {
            AbaxXBRLCellStoreMongo abaxXBRLCellStoreMongo = new AbaxXBRLCellStoreMongo();
            abaxXBRLCellStoreMongo.JSONOutDirectory = @"..\..\TestOutput\";
            abaxXBRLCellStoreMongo.ConnectionString = "mongodb://localhost/jbrl";
            abaxXBRLCellStoreMongo.DataBaseName = "jbrl";
            abaxXBRLCellStoreMongo.Init();
            return abaxXBRLCellStoreMongo;
        }
        
        public async Task ActualizaHechosAsync(String reportId)
        {
            var cellstore = GetCellStoreMongo();
            var factCollection = cellstore.getCollection("fact");
            FilterDefinition<BsonDocument> filter = 
                "{\"dataType\":/text|string/, " +
                "\"dimensionMap.valueEn\": {\"$exists\":false}, " +
                "\"reportId\": \"" + reportId + "\", " +
                "\"factId\" : \"E8DD92A0EECCB167201475E766DA8198\"}";
            var cursor = await factCollection.FindAsync(filter);
            var factList = cursor.ToList();
            var token = await ObtenTokenAccesoAsync();
            
            foreach (var factBson in factList)
            {
                var factId = factBson.GetValue("factId").AsString;
                var value = DepuraValor(factBson.GetValue("value").AsString);
                var valueEn = await TraduceTextoAsync(value,"es","en",token);
                FilterDefinition<BsonDocument> updateFilter = "{ \"factId\": \"" + factId + "\" }";
                UpdateDefinition<BsonDocument> updateDefinition = 
                    "{ $set: {" +
                        "\"dimensionMap.valueEs\": " + JsonConvert.ToString(value) +
                        ", \"dimensionMap.valueEn\": " + JsonConvert.ToString(valueEn) +
                    "} }";
                var updateResult  = await factCollection.UpdateOneAsync(updateFilter, updateDefinition);
            }


        }

        /// <summary>
        /// Obtiene el listado de documentos a reprocesar.
        /// </summary>
        /// <returns></returns>
        public IList<String> GetReportsToEvaluate()
        {
            var cellstore = GetCellStoreMongo();
            var campos = Fields.Include("reportId");
            var listaReportsBson = cellstore.ObtenerDocumentos("report", campos);
            var listaIdsDocumentos = new List<String>();
            foreach (var report in listaReportsBson)
            {
                if (report.Contains("reportId"))
                {
                    listaIdsDocumentos.Add(report.GetValue("reportId").AsString);
                }
            }
            return listaIdsDocumentos;
        }
        /// <summary>
        /// Traduce una cadena de texto dada.
        /// </summary>
        /// <param name="texto">Texto a evaluar</param>
        /// <param name="lengaOrigen">Clave del texto origen.</param>
        /// <param name="lenguaDestino">Clave del texto destino</param>
        /// <returns>Resultado de la traducción.</returns>
        public async Task<String> TraduceTextoAsync(String texto, String lengaOrigen, String lenguaDestino, String token)
        {
            String textResult = null;
            using (var client = new HttpClient())
            using (var request = new HttpRequestMessage())
            {
                var url = TRANSLATE_SERVICE_URI.Replace("{{from}}", lengaOrigen).Replace("{{to}}", lenguaDestino);
                request.Method = HttpMethod.Post;
                request.RequestUri = new Uri(url);
                request.Content = new StringContent("[{\"Text\":\"" + texto + "\"}]", Encoding.UTF8, "application/json");
                request.Headers.Add("Authorization", "Bearer " + token);

                // Send request, get response
                var response = await client.SendAsync(request);
                var jsonResponse = response.Content.ReadAsStringAsync().Result;
                var translateResult = (IList<TranslationResultDto>)JsonConvert.DeserializeObject(jsonResponse, typeof(IList<TranslationResultDto>));
                
                if (translateResult != null && translateResult.Count > 0)
                {
                    var translations = translateResult.First().translations;
                    if (translations != null && translations.Count > 0)
                    {
                        textResult = translations.First().text;
                    }
                }
                return textResult;
            }
        }
        /// <summary>
        /// Obtiene un token de acceso a los servicios cognitivos de azure.
        /// </summary>
        /// <returns>Tocken de acceso.</returns>
        public async Task<string> ObtenTokenAccesoAsync()
        {
            using (var client = new HttpClient())
            using (var request = new HttpRequestMessage())
            {
                request.Method = HttpMethod.Post;
                request.RequestUri = new Uri(ACCES_TOCKEN_SERVICE_URI);
                request.Headers.Add("Ocp-Apim-Subscription-Key", SUSCRIPTION_KEY);
                var response = await client.SendAsync(request);
                var token = await response.Content.ReadAsStringAsync();

                return token;
            }
        }

        /// <summary>
        /// Depura el contenido de un texto para eliminar el html y dejar la cadena más corta posible.
        /// </summary>
        /// <param name="valor"></param>
        /// <returns></returns>
        public String DepuraValor(String valor)
        {
            String depurado = String.Empty;
            //Limpiar HTML
            depurado = WebUtility.HtmlDecode(valor);
            depurado = Regex.Replace(depurado, @"<[^>]*(>|$)|[\s\r\n]", " ");
            depurado = Regex.Replace(depurado, @"[\s\r\n]+", " ").TrimStart();
            if (depurado.Length > 1000)
            {
                depurado = depurado.Substring(0, 1000);
                depurado = Regex.Replace(depurado, @"\s+\S+$", String.Empty);
            }
            depurado = depurado.Trim();
            return depurado;
        }
        [TestMethod]
        public void EvaluaDepuradoTest()
        {
            var textToTest = "<p>Hola,</p>\r\n<span>Oscar</span><img src=\"logo.png\" /><label>¿Como estas?</label> aasdf";
            var valor = DepuraValor(textToTest);
            textToTest = "<p>Hola,</p>\r\n<span>Oscar</span><img src=\"logo.png\" /><label>¿Como estas?</label> aasdf  ";
            var valor2 = DepuraValor(textToTest);

        }
        [TestMethod]
        public async Task TraduceTextoTestAsync()
        {
            var textoEspaniol = "Hola Oscar.\r\n¿Cómo estas?";
            var token = await ObtenTokenAccesoAsync();
            var textoIngles = await TraduceTextoAsync(textoEspaniol, "es", "en", token);
        }
    }
}
