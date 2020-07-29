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
using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.XPE.impl;
using AbaxXBRLCore.Viewer.Application.Dto;
using AbaxXBRLWeb.App_Code.Common.Service;
using AbaxXBRLCore.Validador;
using AbaxXBRLCore.Validador.Impl;
using AbaxXBRLCore.Common.Cache;
using Quartz;
using Quartz.Impl;
using AbaxXBRLCore.Services.Implementation;
using AbaxXBRLCore.Services;
using System.Web.Configuration;

[assembly: OwinStartup(typeof(AbaxXBRLWeb.Startup))]
namespace AbaxXBRLWeb
{
    
    public class Startup
    {
        private static Object _lock = new Object();
        private static Boolean _iniciado = false;
        
        public void Configuration(IAppBuilder app)
        {
            lock(_lock){
                if(!_iniciado){
                    try
                    {
                        LogUtil.Info("StartupClass");
                        InicializaLog();
                        LogUtil.Info("InicializaLog");
                        
                        
                        HttpConfiguration config = new HttpConfiguration();
                        var json = GlobalConfiguration.Configuration.Formatters.JsonFormatter;
                        json.SerializerSettings.DateFormatHandling = Newtonsoft.Json.DateFormatHandling.MicrosoftDateFormat;
                        ConfigureOAuth(app);

                        WebApiConfig.Register(config);
                        app.UseWebApi(config);

                        app.Run(context =>
                        {
                            LogUtil.Info("En clase Startup: Pidiendo servicio");
                            var serv = (IDocumentoInstanciaService)ServiceLocator.ObtenerFabricaSpring().GetObject("DocumentoInstanciaService");
                            LogUtil.Info("Servicio:" + (serv == null ? "El servicio es nulo" : "Servicio pedido OK"));
                            
                            return context.Response.WriteAsync("AppOK");
                        });




                    }
                    catch (Exception ex)
                    {
                        LogUtil.Error(ex);
                        throw;
                    }
                    _iniciado = true;
                }
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
                    AccessTokenExpireTimeSpan = TimeSpan.FromDays(1),
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


        



    }
}