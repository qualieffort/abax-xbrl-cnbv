using System.Web.Script.Serialization;
using AbaxXBRLWeb.Providers;
using Microsoft.Owin;
using Microsoft.Owin.Security.OAuth;
using Owin;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Configuration;
using System.IO;
using AbaxXBRLCore.Common.Util;
using Quartz;
using AbaxXBRLCore.Services;
using Quartz.Impl;
using AbaxXBRLWeb.App_Code.Common.Service;
using System.Web.Configuration;
using AbaxXBRLWebServices.job;

[assembly: OwinStartup(typeof(AbaxXBRLWeb.Startup))]
namespace AbaxXBRLWeb
{
    public class Startup
    {
        Int32 DiasSesionActiva = 1;
        /// <summary>
        /// Constructor por defecto.
        /// </summary>
        public Startup()
        {
            try
            {
                var strDiasSesion = ConfigurationManager.AppSettings["numeroDiasSesionActiva"];
                if (!String.IsNullOrWhiteSpace(strDiasSesion))
                {
                    var diasSesion = Int32.Parse(strDiasSesion);
                    if (diasSesion > 0) 
                    {
                        DiasSesionActiva = diasSesion;
                    }
                }
                InicializaLog(); 

            }
            catch (Exception e)
            {
                System.Console.WriteLine(e.Message);
            }
        }
        /// <summary>
        /// Inicializa el archivo de escritura del log.
        /// </summary>
        private void InicializaLog() 
        {
            try
            {
                LogUtil.LogDirPath = HttpContext.Current.Server.MapPath("~/App_Data/");
                LogUtil.Inicializa();
            }
            catch (Exception e)
            {
                Console.WriteLine(e.ToString());
 
            }
        }

        public void Configuration(IAppBuilder app)
        {
            try
            {
                HttpConfiguration config = new HttpConfiguration();
                var json = GlobalConfiguration.Configuration.Formatters.JsonFormatter;
                json.SerializerSettings.DateFormatHandling = Newtonsoft.Json.DateFormatHandling.MicrosoftDateFormat;
                ConfigureOAuth(app);

                WebApiConfig.Register(config);
                app.UseWebApi(config);
            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
                throw;
            }
        }


        public void ConfigureOAuth(IAppBuilder app)
        {
            try 
            {
                app.Use<InvalidAuthenticationMiddleware>();

                OAuthAuthorizationServerOptions OAuthServerOptions = new OAuthAuthorizationServerOptions()
                {
                    AllowInsecureHttp = true,
                    TokenEndpointPath = new PathString("/token"),
                    AccessTokenExpireTimeSpan = TimeSpan.FromDays(DiasSesionActiva),
                    Provider = new SimpleAuthorizationServerProvider()
                };

                OAuthBearerAuthenticationOptions OAuthBearerOptions = new OAuthBearerAuthenticationOptions()
                {
                    Provider = new SimpleAuthBearerAuthenticationProvider()
                };

                // Token Generation
                app.UseOAuthAuthorizationServer(OAuthServerOptions);
                app.UseOAuthBearerAuthentication(OAuthBearerOptions);
            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
                throw;
            }
        }


        /**
         * Inicializa el proceso de sincronizacion de emisoras y fideicomisos en un proceso asincrono
         */
        

    }
}