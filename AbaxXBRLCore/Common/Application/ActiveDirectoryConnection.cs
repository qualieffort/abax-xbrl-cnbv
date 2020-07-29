using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.lang;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.DirectoryServices;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Common.Application
{
    /// <summary>
    /// Clase principal para el manejo de la validacion para validar usuarios
    /// del Active Directory
    /// </summary>
    /// <author>2H Software</author>
    public class ActiveDirectoryConnection
    {
        /// <summary>
        /// Valida en el active directory si el usuairo existe y esta activo
        /// </summary>
        /// <param name="usuario">Nombre del usuario del active direcory</param>
        /// <param name="contrasenia">Contraseña del usuario del active directory</param>
        /// <returns>Resulta de la operación con la información de validacion del usuario en el active directory</returns>
        public static ResultadoOperacionDto EsUsuarioValido(String usuario, String contrasenia)
        {
            ResultadoOperacionDto resultadoValidacion = new ResultadoOperacionDto();

            var server = ConfigurationManager.AppSettings.Get("ServerActiveDirectory");
            var usuarioLogin = ConfigurationManager.AppSettings.Get("usuarioActiveDirectory");
            var contraseniaLogin = ConfigurationManager.AppSettings.Get("contraseniaActiveDirectory");

            DirectoryEntry directoryEntry = null;

            if (!String.IsNullOrEmpty(usuarioLogin) && !String.IsNullOrEmpty(contraseniaLogin))
            {
                directoryEntry = new DirectoryEntry(server);
                directoryEntry.Username = usuarioLogin;
                directoryEntry.Password = contraseniaLogin;
                directoryEntry.AuthenticationType = AuthenticationTypes.Secure;

                var directorySearcher = new DirectorySearcher(directoryEntry);
                directorySearcher.Filter = String.Format("(&(objectClass=user)(SAMAccountName={0}))", usuario);

                SearchResult srResult = directorySearcher.FindOne();

                if (srResult != null)
                {
                    DirectoryEntry deUser = srResult.GetDirectoryEntry();
                    deUser.Username = usuario;
                    deUser.Password = contrasenia;
                    deUser.AuthenticationType = AuthenticationTypes.Secure;

                    try
                    {
                        var userSearcher = new DirectorySearcher(deUser);
                        userSearcher.SearchScope = SearchScope.Base;
                        SearchResult resEnt = userSearcher.FindOne();
                        resultadoValidacion.Resultado = true;
                    }
                    catch (Exception ex)
                    {
                        resultadoValidacion.Resultado = false;
                        resultadoValidacion.Mensaje = ex.Message;
                    }
                    finally
                    {
                        deUser.Dispose();
                    }
                }
                else
                {
                    resultadoValidacion.Resultado = false;
                    resultadoValidacion.Mensaje = "MENSAJE_WARNING_USUARIO_NO_ENCONTRADO";
                }


            }
            else
            {
                directoryEntry = new DirectoryEntry(server);
                directoryEntry.Username = usuario;
                directoryEntry.Password = contrasenia;

                var directorySearcher = new DirectorySearcher(directoryEntry);
                directorySearcher.SearchScope = SearchScope.Base;

                try
                {
                    SearchResult resEnt = directorySearcher.FindOne();
                    resultadoValidacion.Resultado = true;
                }
                catch (Exception e)
                {
                    resultadoValidacion.Resultado = false;
                    resultadoValidacion.Mensaje = "MENSAJE_WARNING_USUARIO_NO_ENCONTRADO";
                    Util.LogUtil.Error(e);
                }
            }


            return resultadoValidacion;
        }
    }
}
