#region

using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Linq.Expressions;
using System.Text.RegularExpressions;
using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Entities;
using AbaxXBRLCore.lang;
using AbaxXBRLCore.Repository;
using AbaxXBRLCore.Util;
using AbaxXBRLCore.Common.Constants;
using Spring.Transaction;
using Spring.Transaction.Interceptor;
using System.Net;
using System.Net.Sockets;
using AbaxXBRLCore.Common.Util;

#endregion

namespace AbaxXBRLCore.Services.Implementation
{
    /// <summary>
    ///     Implementacion del Servicio para el Login en la aplicación.
    ///     <author>Eric Alan González Fuentes</author>
    ///     <version>1.0</version>
    /// </summary>
    public class LoginService : ILoginService
    {
        public IUsuarioRepository Repository { get; set; }
        [Transaction(TransactionPropagation.Required)]

        public ResultadoOperacionDto RegistrarAccesoAuditoria(long idUsuario, long idEmisora) {
            var resultado = new ResultadoOperacionDto();
            resultado.Resultado = true;
            resultado.InformacionAuditoria = new InformacionAuditoriaDto(idUsuario, ConstantsAccionAuditable.AutenficacionUsuario, ConstantsModulo.Login, MensajesServicios.UsuarioAutenficado, idEmisora);
            return resultado;
        }

        public ResultadoOperacionDto ObtenerUsuarioPorNombre(String usuario) {
            var resultado = new ResultadoOperacionDto();
            try
            {
                var user = Repository.BuscarUsuario(usuario);
                
                resultado.Resultado = user != null;
                resultado.InformacionExtra = user;
                resultado.Mensaje = String.Empty;
                if (user != null)
                {
                    resultado.InformacionAuditoria = new InformacionAuditoriaDto(user.IdUsuario, ConstantsAccionAuditable.AutenficacionUsuario, ConstantsModulo.Login, MensajesServicios.UsuarioAutenficado, null);
                }

            }
            catch (Exception exception)
            {
                LogUtil.Error(exception);
                resultado.Resultado = false;
                resultado.InformacionExtra = exception;
                resultado.Mensaje = exception.Message;
                resultado.Excepcion = exception.Message;
            }
            return resultado;
        }

        public ResultadoOperacionDto AutentificarUsuario(String usuario, String password)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                var us = Repository.BuscarUsuario(usuario);
                var user = Repository.LoginUsuario(usuario, password);
                resultado.Resultado = user != null;
                resultado.InformacionExtra = user;
                resultado.Mensaje = String.Empty;
                if (user != null)
                {
                    resultado.InformacionAuditoria = new InformacionAuditoriaDto(user.IdUsuario, ConstantsAccionAuditable.AutenficacionUsuario, ConstantsModulo.Login, MensajesServicios.UsuarioAutenficado, null);
                }
                else
                {
                    if(us !=  null)
                    resultado.InformacionAuditoria = new InformacionAuditoriaDto(us.IdUsuario, ConstantsAccionAuditable.AutenficacionUsuario, ConstantsModulo.Login,  MensajesServicios.FalloUsuarioAutentificado, null);
                }
                
            }
            catch (Exception exception)
            {
                LogUtil.Error(exception);
                resultado.Resultado = false;
                resultado.InformacionExtra = exception;
                resultado.Mensaje = exception.Message;
                resultado.Excepcion = exception.Message;
            }
            return resultado;
        }
        /// <summary>
        /// Retorna la ip del servidor actual.
        /// </summary>
        /// <returns>Retorna la ip del seridor actual.</returns>
        public string GetLocalIp() {
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
        /// Retorna la ruta absoluta del contexto actual.
        /// </summary>
        /// <returns>Ruta absoluta del contexto actual.</returns>
        public string GetUrlContext()
        {
            var url = System.Web.HttpContext.Current.Request.Url;
            var host = url.Host;
            if (host.ToLower().Equals("localhost")) { 
                try {
                    host = GetLocalIp();
                } 
                catch(Exception) {
                    host = url.Host;
                }
            }
            var absolute = url.Scheme + "://" + host + ":" + url.Port;
            return absolute;
        }
        [Transaction(TransactionPropagation.Required)]
        public ResultadoOperacionDto EnvioCorreoOlvidoContrasena(String correo, String urlHref)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {

                var users = Repository.GetQueryable(x => x.CorreoElectronico.Equals(correo) && (x.Borrado == null || !x.Borrado.Value)).ToList();   

                if (users.Any())
                {
                    var url = urlHref;
                    if (String.IsNullOrWhiteSpace(url) || url.Contains("localhost") || url.Contains("127.0.0.1"))
                    {
                        url = GetUrlContext();
                    }
                    var SeEnvioCorreo = Repository.EnvioCorreoOlvidoContrasena(users.First().IdUsuario,url);
                    if (SeEnvioCorreo)
                    {
                        resultado.Mensaje = AbaxXbrl.EnvioPassOlvidadoExito;
                        resultado.Resultado = true;
                        resultado.InformacionAuditoria = new InformacionAuditoriaDto(users.First().IdUsuario, ConstantsAccionAuditable.EnvioCorreo, ConstantsModulo.Login, MensajesServicios.EnvioCorreoOlvidoContraseña, null);
                    }
                    else {
                        resultado.Resultado = false;
                        resultado.Mensaje = AbaxXbrl.EnvioPassErrorCorreo;
                    }
                    
                }
                else
                {
                    resultado.Resultado = false;
                    resultado.Mensaje = AbaxXbrl.EnvioPassOlvidadoError;
                }
            }
            catch (Exception exception)
            {
                LogUtil.Error(exception);
                resultado.Resultado = false;
                resultado.Mensaje = exception.Message;
                resultado.InformacionExtra = exception;
            }

            return resultado;
        }

        public ResultadoOperacionDto ObtenerParametrosConfiguracionSeguridad()
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                var seguridad = new SeguridadDto();
                seguridad.ExpresionValidacionPassword = ConfigurationManager.AppSettings["expresionValidacionPassword"];
                seguridad.MensajeValidacion = ConfigurationManager.AppSettings["mensajeValidacion"];
                seguridad.NumeroAutentificaciones = ConfigurationManager.AppSettings["numeroAutentificaciones"];
                seguridad.NumeroDiasValidos = ConfigurationManager.AppSettings["numeroDiasValidos"];
                seguridad.NumeroAutentiticacionesValidasAntesModificacion =
                    ConfigurationManager.AppSettings["numeroAutentiticacionesValidasAntesModificacion"];
                seguridad.NumeroDiasValidosAntesModificacion =
                    ConfigurationManager.AppSettings["numeroDiasValidosAntesModificacion"];
                seguridad.NumeroPasswordCiclo = ConfigurationManager.AppSettings["numeroPasswordCiclo"];
                resultado.Resultado = true;
                resultado.InformacionExtra = seguridad;
            }
            catch (Exception exception)
            {
                LogUtil.Error(exception);
                resultado.Resultado = false;
                resultado.InformacionExtra = exception;
            }
            return resultado;
        }
        [Transaction(TransactionPropagation.Required)]
        public ResultadoOperacionDto RegistrarAcceso(Usuario usuarioDto, SeguridadDto seguridad, bool isExitoso)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                var usuario = Repository.ObtenerUsuarioPorId(usuarioDto.IdUsuario);
                if (isExitoso)
                {
                    usuario.IntentosErroneosLogin = 0;
                    resultado.Resultado = true;
                }
                else
                {
                    usuario.IntentosErroneosLogin = usuario.IntentosErroneosLogin + 1;
                    if (!(bool) ValidarNumeroAutenticaciones(seguridad, usuario).InformacionExtra)
                    {
                        usuario.Bloqueado = true;
                        resultado.Resultado = false;
                        resultado.Mensaje = MensajesServicios.IntentosExcedidos;
                    }
                    else
                    {
                        resultado.Resultado = false;
                        resultado.Mensaje = MensajesServicios.ContrasenaIncorrecta;
                    }
                }
                Repository.GuardarUsuario(usuario);
            }
            catch (Exception exception)
            {
                LogUtil.Error(exception);
                resultado.Resultado = false;
                resultado.Mensaje = exception.Message;
                resultado.InformacionExtra = exception;
            }

            //var informacionAuditoria = new InformacionAuditoriaDto
            //{
            //    Accion = ConstantsAccionAuditable.RegistroAutentificacion,
            //    Empresa = null,
            //    IdUsuario = usuario.IdUsuario,
            //    Modulo = ConstantsModulo.Login,
            //    Registro = MensajesServicios.RegistroAcceso
            //};
            //resultado.InformacionAuditoria = informacionAuditoria;
            return resultado;
        }

        public ResultadoOperacionDto ValidarDiasAutenticaciones(SeguridadDto seguridad, Usuario usuario)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                resultado.InformacionExtra = false;
                var hoy = DateTime.Today;
                if (usuario != null)
                {
                    var fechaLimite = usuario.VigenciaPassword.AddDays(Int32.Parse(seguridad.NumeroDiasValidos));
                    if (hoy < fechaLimite)
                    {
                        resultado.InformacionExtra = true;
                    }
                }
            }
            catch (Exception exception)
            {
                LogUtil.Error(exception);
                resultado.Resultado = false;
                resultado.Mensaje = exception.Message;
                resultado.InformacionExtra = exception;
            }
            return resultado;
        }

        public ResultadoOperacionDto VerificaPasswordEncriptado(Usuario usuarioDTO, string password)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                var valido = false;
                if (usuarioDTO != null && !String.IsNullOrEmpty(usuarioDTO.Password))
                {
                    var salt =
                        usuarioDTO.Password.Substring(usuarioDTO.Password.Length -
                                                      PasswordHashGenerator.TAMANIO_B64_NUMERO_SALT);
                    var hashedPassword = PasswordHashGenerator.CreatePasswordHash(password, salt);

                    valido = hashedPassword.Equals(usuarioDTO.Password);
                }
                resultado.InformacionExtra = valido;
                resultado.Resultado = valido;
            }
            catch (Exception exception)
            {
                LogUtil.Error(exception);
                resultado.Resultado = false;
                resultado.Mensaje = exception.Message;
                resultado.InformacionExtra = exception;
            }
            return resultado;
        }

        public ResultadoOperacionDto ValidarPasswordContraExpresionRegular(SeguridadDto objSeguridadDTO, string password)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                var valido = false;
                if (objSeguridadDTO != null && objSeguridadDTO.ExpresionValidacionPassword != null &&
                    !password.Equals(""))
                {
                    valido = Regex.Match(password, objSeguridadDTO.ExpresionValidacionPassword).Success;
                }
                resultado.InformacionExtra = valido;
                resultado.Resultado = valido;
            }
            catch (Exception exception)
            {
                LogUtil.Error(exception);
                resultado.Resultado = false;
                resultado.Mensaje = exception.Message;
                resultado.InformacionExtra = exception;
            }
            return resultado;
        }

        public ResultadoOperacionDto VerificaPasswordYaUsado(Usuario usuario, string password)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                var valido = false;
                if (usuario != null && !String.IsNullOrEmpty(usuario.Password))
                {
                    if (!String.IsNullOrWhiteSpace(usuario.HistoricoPassword))
                    {
                        var split = new string[1];
                        split[0] = "@@@";
                        var passwords = usuario.HistoricoPassword.Split(split, StringSplitOptions.None);
                        foreach (var p in passwords)
                        {
                            var dto = new Usuario();
                            dto.Password = p;
                            if ((bool)VerificaPasswordEncriptado(dto, password).InformacionExtra)
                            {
                                valido = true;
                                break;
                            }
                        }
                    }
                }
                resultado.InformacionExtra = valido;
                resultado.Resultado = valido;
            }
            catch (Exception exception)
            {
                LogUtil.Error(exception);
                resultado.Resultado = false;
                resultado.Mensaje = exception.Message;
                resultado.InformacionExtra = exception;
            }
            return resultado;
        }
        [Transaction(TransactionPropagation.Required)]
        public ResultadoOperacionDto ModificarPassword(ref Usuario usuarioParam, SeguridadDto objSeguridadDTO,
            string password)
        {
            var resultado = new ResultadoOperacionDto();
            var usuario = Repository.GetById(usuarioParam.IdUsuario);
            if (usuario != null && usuario.Password != null)
            {
                var passwEncriptado = SeguridadDto.EncriptarPassword(password);
                usuario.Password = passwEncriptado;
                usuario.VigenciaPassword = DateTime.Today.AddDays(60);
                usuario.Bloqueado = false;
                usuario.IntentosErroneosLogin = 0;
                if (!String.IsNullOrEmpty(usuario.HistoricoPassword))
                {
                    var split = new string[1];
                    split[0] = "@@@";
                    var passwAnteriores = usuario.HistoricoPassword.Split(split, StringSplitOptions.None);
                    var queuePasswords = new Queue<string>(passwAnteriores);
                    while(queuePasswords.Count >= Int32.Parse(objSeguridadDTO.NumeroPasswordCiclo))
                    {
                        queuePasswords.Dequeue(); //Elimina la contraseña mas antigua
                    }
                    queuePasswords.Enqueue(passwEncriptado);
                    usuario.HistoricoPassword = String.Empty;
                    foreach (var queuePassword in queuePasswords)
                    {
                        if (String.IsNullOrWhiteSpace(queuePassword))
                        {
                            continue;
                        }
                        usuario.HistoricoPassword += queuePassword + "@@@";
                    }
                }
                else
                {
                    usuario.HistoricoPassword = passwEncriptado;
                }
                Repository.Update(usuario);
                resultado.Resultado = true;
                resultado.Mensaje = MensajesServicios.ContraseñaModificada;
                var informacionAuditoria = new InformacionAuditoriaDto
                {
                    Accion = ConstantsAccionAuditable.Actualizar,
                    Empresa = null,
                    IdUsuario = usuario.IdUsuario,
                    Modulo = ConstantsModulo.Login,
                    Registro = MensajesServicios.ContrasenaModificada
                };
                resultado.InformacionAuditoria = informacionAuditoria;
                return resultado;
            }
            else
            {
                resultado.Resultado = false;
                resultado.Mensaje = MensajesServicios.SinDatosUsuario;
            }
            return resultado;
        }

        public ResultadoOperacionDto ValidarNumeroAutenticaciones(SeguridadDto objSeguridadDTO, Usuario usuarioDTO)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                var valido = false;
                if (usuarioDTO != null)
                {
                    if (usuarioDTO.IntentosErroneosLogin < Int32.Parse(objSeguridadDTO.NumeroAutentificaciones))
                    {
                        valido = true;
                    }
                }
                resultado.InformacionExtra = valido;
                resultado.Resultado = valido;
            }
            catch (Exception exception)
            {
                LogUtil.Error(exception);
                resultado.Resultado = false;
                resultado.Mensaje = exception.Message;
                resultado.InformacionExtra = exception;
            }
            return resultado;
        }
    }
}