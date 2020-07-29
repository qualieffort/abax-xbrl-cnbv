using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.lang;
using AbaxXBRLCore.Viewer.Application.Dto.Angular;
using Novell.Directory.Ldap;
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
    public class LDAPNovellConnection : IActiveDirectoryConnection
    {

        public ResultadoOperacionDto EsUsuarioValido(String usuario, String contrasenia)
        {
            ResultadoOperacionDto resultadoValidacion = new ResultadoOperacionDto();
            var usuarioEnvio = new UsuarioDto();

            var server = ConfigurationManager.AppSettings.Get("ServerLDAPNovell");
            var puerto = ConfigurationManager.AppSettings.Get("puertoLDAPNovell");
            var baseDN = ConfigurationManager.AppSettings.Get("DNBaseLDAPNovell");

            LdapConnection conn = new LdapConnection();

            try
            {

                conn.Connect(server, int.Parse(puerto));
                conn.Bind(baseDN.Replace("{{0}}", usuario), contrasenia);

                LdapSearchResults lsc = conn.Search(baseDN.Replace("{{0}}", usuario), LdapConnection.SCOPE_BASE, "objectClass=*", null, false);

                while (lsc.hasMore())
                {
                    LdapEntry userEntry = null;
                    try
                    {
                        userEntry = lsc.next();
                    }
                    catch (LdapException ldapException)
                    {
                        LogUtil.Error(ldapException);
                        resultadoValidacion.Resultado = false;
                        resultadoValidacion.Mensaje = "MENSAJE_ERROR_CONEXION_NOVELL";
                        resultadoValidacion.InformacionExtra = ldapException.Message;
                        break;
                    }
                    try
                    {

                        var estatus = "A";
                        if (userEntry.getAttribute("employeeStatus") != null)
                        {
                            estatus = userEntry.getAttribute("employeeStatus").StringValue;
                        }


                        if (estatus.Equals("A"))
                        {
                            if (TieneRolAbax(conn, usuario))
                            {
                                if (userEntry.getAttribute("PNLUserTitleDesc") != null)
                                    usuarioEnvio.Puesto = userEntry.getAttribute("PNLUserTitleDesc").StringValue;

                                if (userEntry.getAttribute("givenName") != null)
                                    usuarioEnvio.Nombre = userEntry.getAttribute("givenName").StringValue;

                                if (userEntry.getAttribute("sn") != null)
                                    usuarioEnvio.ApellidoPaterno = userEntry.getAttribute("sn").StringValue;

                                if (userEntry.getAttribute("PNLUserSecondSurname") != null)
                                    usuarioEnvio.ApellidoMaterno = userEntry.getAttribute("PNLUserSecondSurname").StringValue;

                                if (userEntry.getAttribute("mail") != null)
                                    usuarioEnvio.CorreoElectronico = userEntry.getAttribute("mail").StringValue;

                                resultadoValidacion.Resultado = true;
                                resultadoValidacion.InformacionExtra = usuarioEnvio;
                            }
                            else
                            {
                                resultadoValidacion.Resultado = false;
                                resultadoValidacion.Mensaje = "MENSAJE_WARNING_USUARIO_SIN_GRUPO";
                            }
                        }
                        else
                        {
                            resultadoValidacion.Resultado = false;
                            resultadoValidacion.Mensaje = "MENSAJE_WARNING_USUARIO_NO_ACTIVO";
                        }

                    }
                    catch (LdapException e)
                    {
                        LogUtil.Error(e);
                        resultadoValidacion.Resultado = false;
                        resultadoValidacion.Mensaje = "MENSAJE_WARNING_USUARIO_NO_ENCONTRADO";
                    }
                }



            }
            catch (Exception e)
            {
                LogUtil.Error(e);
                resultadoValidacion.Resultado = false;
                resultadoValidacion.Mensaje = "MENSAJE_ERROR_CONEXION_NOVELL";
                resultadoValidacion.InformacionExtra = e.Message;
            }
            finally
            {
                if (conn != null)
                    conn.Disconnect();
            }

            return resultadoValidacion;
        }


        public ResultadoOperacionDto ObtenerUsuario(String usuarioConsulta)
        {
            ResultadoOperacionDto resultadoValidacion = new ResultadoOperacionDto();
            var usuarioEnvio = new UsuarioDto();

            var server = ConfigurationManager.AppSettings.Get("ServerLDAPNovell");
            var puerto = ConfigurationManager.AppSettings.Get("puertoLDAPNovell");
            var baseDN = ConfigurationManager.AppSettings.Get("DNBaseLDAPNovell");

            var baseUsuarioAplicacionDN = ConfigurationManager.AppSettings.Get("DNBaseUsuarioAplicacionLDAPNovell");
            

            var usuarioBase = ConfigurationManager.AppSettings.Get("DNUsuarioNovell");
            var contraseniaBase = ConfigurationManager.AppSettings.Get("DNContraseniaNovell");


            try
            {
                if (!String.IsNullOrEmpty(usuarioBase) && !String.IsNullOrEmpty(contraseniaBase))
                {
                    LdapConnection conn = new LdapConnection();
                    conn.Connect(server, int.Parse(puerto));
                    conn.Bind(baseUsuarioAplicacionDN.Replace("{{0}}", usuarioBase), contraseniaBase);

                    LdapSearchResults lsc = conn.Search(baseDN.Replace("{{0}}", usuarioConsulta), LdapConnection.SCOPE_BASE, "objectClass=*", null, false);

                    while (lsc.hasMore())
                    {
                        LdapEntry userEntry = null;
                        try
                        {
                            userEntry = lsc.next();

                            var estatus = "A";
                            if (userEntry.getAttribute("employeeStatus") != null)
                                estatus = userEntry.getAttribute("employeeStatus").StringValue;

                            if (estatus.Equals("A"))
                            {

                                if (TieneRolAbax(conn, usuarioConsulta))
                                {
                                    if (userEntry.getAttribute("PNLUserTitleDesc") != null)
                                        usuarioEnvio.Puesto = userEntry.getAttribute("PNLUserTitleDesc").StringValue;

                                    if (userEntry.getAttribute("givenName") != null)
                                        usuarioEnvio.Nombre = userEntry.getAttribute("givenName").StringValue;

                                    if (userEntry.getAttribute("sn") != null)
                                        usuarioEnvio.ApellidoPaterno = userEntry.getAttribute("sn").StringValue;

                                    if (userEntry.getAttribute("PNLUserSecondSurname") != null)
                                        usuarioEnvio.ApellidoMaterno = userEntry.getAttribute("PNLUserSecondSurname").StringValue;

                                    if (userEntry.getAttribute("mail") != null)
                                        usuarioEnvio.CorreoElectronico = userEntry.getAttribute("mail").StringValue;

                                    resultadoValidacion.Resultado = true;
                                    resultadoValidacion.InformacionExtra = usuarioEnvio;

                                }
                                else
                                {
                                    resultadoValidacion.Resultado = false;
                                    resultadoValidacion.Mensaje = "MENSAJE_WARNING_USUARIO_SIN_GRUPO";
                                }

                            }
                            else
                            {
                                resultadoValidacion.Resultado = false;
                                resultadoValidacion.Mensaje = "MENSAJE_WARNING_USUARIO_NO_ACTIVO";
                            }
                        }
                        catch (Exception e)
                        {
                            resultadoValidacion.Resultado = false;
                            resultadoValidacion.Mensaje = "MENSAJE_WARNING_USUARIO_NO_ENCONTRADO";
                        }
                    }
                    conn.Disconnect();

                }
                else
                {
                    resultadoValidacion.Resultado = true;
                }
            }
            catch (Exception ex)
            {
                resultadoValidacion.Resultado = false;
                resultadoValidacion.Mensaje = ex.Message;
            }
            return resultadoValidacion;
        }

        /// <summary>
        /// Valida si el usuario tiene el rol asignado
        /// </summary>
        /// <param name="conn">Conexion activa del lda de novell</param>
        /// <param name="usuario">Id de usuario a validar</param>
        /// <returns>Si el usuario tiene asignado el rol</returns>
        private bool TieneRolAbax(LdapConnection conn, String usuario)
        {
            var rolBaseDN = ConfigurationManager.AppSettings.Get("DNBaseRolLDAPNovell");
            LdapSearchResults gruposAbax = conn.Search(rolBaseDN, LdapConnection.SCOPE_BASE, "objectClass=*", null, false);
            bool tieneRolUsuario = false;
            while (gruposAbax.hasMore())
            {
                LdapEntry grupoEntry = null;

                try
                {
                    grupoEntry = gruposAbax.next();

                    LdapAttributeSet attributeSet = grupoEntry.getAttributeSet();
                    System.Collections.IEnumerator ienum = attributeSet.GetEnumerator();

                    while (ienum.MoveNext())
                    {
                        LdapAttribute attribute = (LdapAttribute)ienum.Current;
                        string attributeName = attribute.Name;
                        if (attributeName.Equals("member"))
                            foreach (var miembro in attribute.StringValueArray)
                            {
                                if (miembro.Contains(usuario))
                                {
                                    tieneRolUsuario = true;
                                    break;
                                }
                            }
                    }

                }
                catch (Exception e)
                {
                    continue;
                }
            }

            return tieneRolUsuario;
        }

    }
}
