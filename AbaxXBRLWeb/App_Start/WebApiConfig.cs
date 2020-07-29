using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Diagnostics;
using System.Linq;
using System.Net.Http.Formatting;
using System.Reflection;
using System.Text;
using System.Web.Http;
using System.Web.Http.Dispatcher;

namespace AbaxXBRLWeb
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            //Web API diagnostic.
            var inicializarWebApi = ConfigurationManager.AppSettings["DiagnosticarWebApi"];
            if(!String.IsNullOrWhiteSpace(inicializarWebApi) && inicializarWebApi.Equals("true")) 
            {
                EnabelDiagnosticWebApi(config);
            }

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{action}/{id}",
                //routeTemplate: "api/{controller}/{action}",
                defaults: new { id = RouteParameter.Optional }
            );

            var jsonFormatter = config.Formatters.OfType<JsonMediaTypeFormatter>().First();
            jsonFormatter.SerializerSettings.ContractResolver = new DefaultContractResolver();
        }
        /// <summary>
        /// Activa la configuración para diagnosticar la inicialización del WebApi.
        /// </summary>
        /// <param name="config">Objeto con la configuración del WebApi</param>
        private static void EnabelDiagnosticWebApi(HttpConfiguration config) 
        {
            IAssembliesResolver assembliesResolver = config.Services.GetAssembliesResolver();

            ICollection<Assembly> assemblies = assembliesResolver.GetAssemblies();

            StringBuilder errorsBuilder = new StringBuilder();

            foreach (Assembly assembly in assemblies)
            {
                Type[] exportedTypes = null;
                if (assembly == null || assembly.IsDynamic)
                {
                    // can't call GetExportedTypes on a dynamic assembly
                    continue;
                }

                try
                {
                    exportedTypes = assembly.GetExportedTypes();
                }
                catch (ReflectionTypeLoadException ex)
                {
                    exportedTypes = ex.Types;
                }
                catch (Exception ex)
                {
                    errorsBuilder.AppendLine(ex.ToString());
                }
            }

            if (errorsBuilder.Length > 0)
            {
                //Log errors into Event Log
                Trace.TraceError(errorsBuilder.ToString());
            }
            config.IncludeErrorDetailPolicy = IncludeErrorDetailPolicy.Always;
            //config.EnableSystemDiagnosticsTracing();
            //var ev = new System.Diagnostics.EventLogTraceListener();
        }
    }
}
