using AbaxXBRL.Constantes;
using AbaxXBRLCore.Common.Application;
using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Entities;
using AbaxXBRLWeb.App_Code.Common.Service;
using AbaxXBRLWeb.Controllers;
using AbaxXBRLWeb.Models;
using Microsoft.Owin.Security;
using Microsoft.Owin.Security.OAuth;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Net;
using System.Security.Claims;
using System.Threading.Tasks;
using System.Web;

namespace AbaxXBRLWeb.Providers
{
    public class SimpleAuthorizationServerProvider : OAuthAuthorizationServerProvider
    {

        public override async Task ValidateClientAuthentication(OAuthValidateClientAuthenticationContext context)
        {
            context.Validated();
        }

        public override async Task GrantResourceOwnerCredentials(OAuthGrantResourceOwnerCredentialsContext context)
        {

            context.OwinContext.Response.Headers.Add("Access-Control-Allow-Origin", new[] { "*" });

            var esLoginActiveDirectory = bool.Parse(ConfigurationManager.AppSettings.Get("LoginActiveDirectory"));

            LoginController login =  null;
            ResultadoOperacionDto resultado = new ResultadoOperacionDto();

            if (esLoginActiveDirectory)
            {
                var tipoLoginLDAP = ConfigurationManager.AppSettings.Get("TipoLoginLDAP");

                var activeDirectoryConnection = (IActiveDirectoryConnection)ServiceLocator.ObtenerFabricaSpring().GetObject(tipoLoginLDAP);

                resultado = activeDirectoryConnection.EsUsuarioValido(context.UserName, context.Password);
                //Obtiene el usuario con el nombre LDAP
                login = new LoginController();
                if (resultado.Resultado) {
                    resultado = login.AutentificarUsuarioLDAP(context.UserName);
                }
            }
            else
            {
                login = new LoginController();
                resultado = login.Autentificar(context.UserName, context.Password);
            }

            if (!resultado.Resultado)
            {
                var description = resultado.Mensaje;
                try 
                {
                    description = JsonConvert.SerializeObject(resultado);
                }
                catch (Exception e) { 
                    System.Console.Write(e.Message); 
                }
                context.SetError("Autorization Error", description);
                context.Response.Headers.Add("AuthorizationResponse", new[] { "Failed" });
            }
            else
            {
                var data = await context.Request.ReadFormAsync();
                long emisora = Convert.ToInt64(data.FirstOrDefault((d) => d.Key == "emisora").Value[0]);

                if (emisora != 0)
                {
                    login.AgregarEmisoraFacultades(emisora, ref resultado);
                    resultado.Mensaje = string.Empty;
                }

                var identity = new ClaimsIdentity(context.Options.AuthenticationType);
                
                (resultado.InformacionExtra as Session).Ip = context.Request.RemoteIpAddress;

                identity.AddClaim(new Claim("Session", JsonConvert.SerializeObject(resultado.InformacionExtra as Session)));

                var properties = new AuthenticationProperties(new Dictionary<string, string>
                {
                    {
                        "Resultado", resultado.Resultado.ToString()
                    },
                    {
                        "Mensaje", resultado.Mensaje
                    },
                    {
                        "Session", JsonConvert.SerializeObject((resultado.InformacionExtra as Session))
                    },
                    { 
                        "UserName", (resultado.InformacionExtra as Session).Usuario.Nombre
                    },
                    {
                        "UserIp", context.Request.RemoteIpAddress
                    },
                    {
                        "IdUsuario", (resultado.InformacionExtra as Session).Usuario.IdUsuario.ToString()
                    }
                });
                var ticket = new AuthenticationTicket(identity, properties);
                context.Validated(ticket);
            }
        }

        public override Task TokenEndpoint(OAuthTokenEndpointContext context)
        {
            foreach (KeyValuePair<string, string> property in context.Properties.Dictionary)
            {
                context.AdditionalResponseParameters.Add(property.Key, property.Value);
            }
            return Task.FromResult<object>(null);
        }

        /// <summary>
        /// Actualiza el token antes de retornar la respuesta.
        /// </summary>
        /// <param name="context">Contexto actual de la solicitud.</param>
        /// <returns>Task retornado por la clase padre.</returns>
        public override Task TokenEndpointResponse(OAuthTokenEndpointResponseContext context)
        {
            var token = context.AccessToken;
            var strIdUsuario = context.Properties.Dictionary["IdUsuario"];
            var idUsuario = Int64.Parse(context.Properties.Dictionary["IdUsuario"]);
            var login = new LoginController();
            login.ActualizaToken(idUsuario, token);
            //var tokenTaskHelper = TokenTaskHelper.GetInstance();
            TokenTaskHelper.SetToken(strIdUsuario, token);
            return base.TokenEndpointResponse(context);
        }

    }
}