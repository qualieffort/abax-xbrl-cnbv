using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.Owin.Security.OAuth;
using System.Threading.Tasks;
using AbaxXBRL.Constantes;
using AbaxXBRLWeb.Controllers;

namespace AbaxXBRLWeb.Providers
{
    public class SimpleAuthBearerAuthenticationProvider : OAuthBearerAuthenticationProvider
    {

        public override Task ValidateIdentity(OAuthValidateIdentityContext context)
        {
            
            var ipToken = context.Ticket.Properties.Dictionary["UserIp"];
            var ipRequest = context.Request.RemoteIpAddress;
            if (!ipToken.Equals(ipRequest))
            {
                context.Rejected();
                context.SetError("MENSAJE_ERROR_TOKEN_IP_INVALIDA");
                return Task.FromResult<object>(null);
            }
            if (context.Request.Headers.ContainsKey("Authorization"))
            {
                var tokenRequest = context.Request.Headers["Authorization"].Replace("Bearer ", "").Trim();
                var strIdUsuario = context.Ticket.Properties.Dictionary["IdUsuario"];
                //var tokenTaskHelper = TokenTaskHelper.GetInstance();
                var tokenUsuario = TokenTaskHelper.GetToken(strIdUsuario);
                if (tokenUsuario == null || !tokenUsuario.Equals(tokenRequest))
                {
                    var login = new LoginController();
                    var idUsuario = Int64.Parse(strIdUsuario);
                    var tokenAux = login.GetTokenUsuario(idUsuario);
                    tokenUsuario = TokenTaskHelper.SetToken(strIdUsuario, tokenAux);
                }
                if (!tokenUsuario.Equals(tokenRequest))
                {
                    context.Rejected();
                    context.SetError("MENSAJE_ERROR_TOKEN_USUAIRO_INCONSISTENTE");
                    return Task.FromResult<object>(null);
                }
            }
           
            
            return base.ValidateIdentity(context);
        }
    }
}