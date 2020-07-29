using System;
using System.Net;

namespace AbaxXBRLCore.Common.Util
{
    /// <summary>
    /// Overwirte of WebClient to handle Https encode as gzip.
    /// </summary>
    public class XBRLWebClient:WebClient
    {
        /// <summary>
        /// Procesa la solicitud.
        /// </summary>
        /// <param name="address"></param>
        /// <returns></returns>
        protected override WebRequest GetWebRequest (Uri address)
        {
            HttpWebRequest request = base.GetWebRequest(address) as HttpWebRequest;
            request.AutomaticDecompression = DecompressionMethods.Deflate | DecompressionMethods.GZip;
            return request;
        }
    }
}
