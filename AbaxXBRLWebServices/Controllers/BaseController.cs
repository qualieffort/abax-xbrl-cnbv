﻿using System;
using System.Collections.Generic;
using System.Data;
using System.Diagnostics.Eventing.Reader;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.DynamicData;
using System.Web.UI;
using System.Web.UI.WebControls;
using AbaxXBRLCore.Common.Constants;
using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.Entities;
using AbaxXBRLCore.Services;
using AbaxXBRLWeb.App_Code.Common.Service;
using System.Web.Http;
using System.Security.Claims;
using AbaxXBRLWeb.Models;
using Newtonsoft.Json;
using System.Net.Http.Headers;
using System.Net.Http;
using System.Net;
using System.Text;
using System.Net.Sockets;

namespace AbaxXBRLWeb.Controllers
{

    public class BaseController : ApiController
    {
        /// <summary>
        /// El nombre del cookie requerido para que funcionen las descargas AJAX.
        /// </summary>
        private const string FILE_DOWNLOAD_COOKIE_NAME = "fileDownload";

        public Session SesionActual
        {
            get
            {
                ClaimsPrincipal principal = RequestContext.Principal as ClaimsPrincipal;
                string sesionStr = principal.Claims.ToList().FirstOrDefault((c) => c.Type == "Session").Value;
                return (Session)JsonConvert.DeserializeObject(sesionStr, typeof(Session));
            }
        }

        public long IdUsuarioExec
        {
            get
            {

                return SesionActual.Usuario.IdUsuario;
            }

        }
        public String NombreUsuario
        {
            get
            {
                return SesionActual.Usuario.NombreCompleto(); ;
            }

        }
        public long IdEmpresa
        {
            get
            {
                if (SesionActual.IdEmpresa != null)
                {
                    return SesionActual.IdEmpresa;
                }   
                return 0;
            }
            
        }
        /*
        public bool? Exito
        {
            get { throw new NotImplementedException("No implementado"); }
            set { throw new NotImplementedException("No implementado"); }

        }
        */
        /*
        public String Mensaje
        {
            get { throw new NotImplementedException("No implementado"); }
            set { throw new NotImplementedException("No implementado"); }
        }
        */

        public IHttpActionResult ExportDataToExcel<T>(String view, List<T> list, String filename, Dictionary<String, String> columnsVisible)
        {
            var gv = new GridView {DataSource = list};                                 
            foreach (var column in columnsVisible)
            {
                BoundField bfield = new BoundField();
                bfield.DataField = column.Key;
                bfield.HeaderText = column.Value;
                
                gv.Columns.Add(bfield);
                gv.AutoGenerateColumns = false;
            }
           
            gv.DataBind();
            
            var sw = new StringWriter();
            var htw = new HtmlTextWriter(sw);
            gv.RenderControl(htw);


            byte[] byteArray = Encoding.ASCII.GetBytes(sw.ToString());
            MemoryStream s = new MemoryStream(byteArray);

            var response = new HttpResponseMessage();
            response.StatusCode = HttpStatusCode.OK;
            response.Content = new StreamContent(s);
            response.Content.Headers.ContentDisposition = new ContentDispositionHeaderValue("attachment");
            response.Content.Headers.ContentDisposition.FileName = filename;
            response.Content.Headers.ContentType = new MediaTypeHeaderValue("application/vnd.ms-excel");

            return ResponseMessage(response);
        }
        /// <summary>
        /// Retorna el valor de un parametro enviado en la solicitud actual.
        /// </summary>
        /// <param name="key">Nombre del parametro.</param>
        /// <returns>Valor del parametro.</returns>
        public string getFormKeyValue(string key)
        {
            string[] values;
            string value = null;
            values = HttpContext.Current.Request.Form.GetValues(key);
            if (values != null && values.Length > 0)
            {
                value = values[0];
            }
            return value;
        }

        /// <summary>
        /// Retorna la ip del servidor actual.
        /// </summary>
        /// <returns>Retorna la ip del seridor actual.</returns>
        public string GetLocalIp()
        {
            IPHostEntry host;
            string localIP = "?";
            host = Dns.GetHostEntry(Dns.GetHostName());
            foreach (IPAddress ip in host.AddressList)
            {
                if (ip.AddressFamily == AddressFamily.InterNetwork)
                {
                    localIP = ip.ToString();
                }
            }
            return localIP;
        }
        /// <summary>
        /// Retorna la Ip desde donde se realizo la petición actual.
        /// </summary>
        /// <returns>Ip remota dle usuario.</returns>
        public string GetUserHostAddress() 
        {
            return HttpContext.Current.Request.UserHostAddress;
        }
        /// <summary>
        /// Retorna la ruta absoluta del contexto actual.
        /// </summary>
        /// <returns>Ruta absoluta del contexto actual.</returns>
        public string GetUrlContext()
        {
            var url = System.Web.HttpContext.Current.Request.Url;
            var host = url.Host;
            if (host.ToLower().Equals("localhost"))
            {
                try
                {
                    host = GetLocalIp();
                }
                catch (Exception)
                {
                    host = url.Host;
                }
            }
            var absolute = url.Scheme + "://" + host + ":" + url.Port;
            return absolute;
        }

    }
}
