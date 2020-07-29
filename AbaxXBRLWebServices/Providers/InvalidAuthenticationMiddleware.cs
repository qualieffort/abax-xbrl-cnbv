using AbaxXBRLCore.Common.Util;
using Microsoft.Owin;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;

namespace AbaxXBRLWeb.Providers
{
    public class InvalidAuthenticationMiddleware : OwinMiddleware
    {
        public InvalidAuthenticationMiddleware(OwinMiddleware next)
            : base(next)
        {
        }

        public override async Task Invoke(IOwinContext context)
        {
            try
            {
                await Next.Invoke(context);

                if (context.Response.StatusCode == 400 && context.Response.Headers.ContainsKey("AuthorizationResponse"))
                {
                    context.Response.Headers.Remove("AuthorizationResponse");
                    context.Response.StatusCode = 200;
                }
            }
            catch (Exception e)
            {
                LogUtil.Error(e);
                throw new HttpUnhandledException("Ocurrió un error al procesar la solicitud:" + e.Message, e);
            }
        }
    }
}