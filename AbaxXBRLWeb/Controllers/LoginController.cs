#region

using AbaxXBRLCore.Common.Constants;
using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.Entities;
using AbaxXBRLCore.lang;
using AbaxXBRLCore.Repository;
using AbaxXBRLCore.Repository.Implementation;
using AbaxXBRLCore.Services;
using AbaxXBRLWeb.App_Code;
using AbaxXBRLWeb.App_Code.Common.Service;
using AbaxXBRLWeb.App_Code.Common.Utilerias;
using AbaxXBRLWeb.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Dynamic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Claims;
using System.Web.Http;
using System.Web.Routing;
using System.Web.Security;

#endregion

namespace AbaxXBRLWeb.Controllers
{
    /// <summary>
    ///     Servicio Api que contiene todas las operaciones de logueo.
    ///     <author>Alan Alberto Caballero Ibarra</author>
    ///     <version>1.0</version>
    /// </summary>
    [RoutePrefix("Login")]
    public class LoginController : BaseController
    {
        /// <summary>
        ///     Instancia del servicio de usuarios
        /// </summary>
        public readonly ILoginService LoginService;

        public readonly IUsuarioService UsuarioService;
        /// <summary>
        /// Diccionario con los parametros de configuración de la vista.
        /// </summary>
        private static IDictionary<string, string> ParametrosConfiguracionVista = null;

        private CopiadoSinReferenciasUtil CopiadoUtil = new CopiadoSinReferenciasUtil();

        #region Constructor
        /// <summary>
        /// Constructor del Controlador
        /// </summary>
        /// <param name="service"></param>
        public LoginController()
        {
            try
            {
                LoginService = (ILoginService)ServiceLocator.ObtenerFabricaSpring().GetObject("LoginService");
                UsuarioService = (IUsuarioService)ServiceLocator.ObtenerFabricaSpring().GetObject("usuarioService");
            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
                throw;
            }
        }
        /// <summary>
        /// Inicializa los parametros de configuración de la vista.
        /// </summary>
        private void IniciaParametrosConfiguracionVista()
        {
            ParametrosConfiguracionVista = new Dictionary<string, string>();
            var param = ConfigurationManager.AppSettings.Get("LoginActiveDirectory");
            if (!String.IsNullOrWhiteSpace(param) && param.Equals("true"))
            {
                ParametrosConfiguracionVista.Add("esSso", "true");
            }
            param = ConfigurationManager.AppSettings.Get("LICENCIA_FIDEICOMISO");
            if (!String.IsNullOrWhiteSpace(param) && param.Equals("7h8804YNW5i5KpV"))
            {
                ParametrosConfiguracionVista.Add("fideicomisosOn", "true");
            }
            param = ConfigurationManager.AppSettings.Get("CUSTOM_STYLE");
            if (!String.IsNullOrWhiteSpace(param))
            {
                ParametrosConfiguracionVista.Add("customStyle", param);
            }
            param = ConfigurationManager.AppSettings.Get("LoginOracleSingleSignOn");
            if (!String.IsNullOrWhiteSpace(param) && param.Equals("true"))
            {
                ParametrosConfiguracionVista.Add("logeoAutomatico", "true");
                if (!ParametrosConfiguracionVista.ContainsKey("esSso"))
                {
                    ParametrosConfiguracionVista.Add("esSso", "true");
                }
            }
            param = ConfigurationManager.AppSettings.Get("MostrarTerminosYConndiciones");
            if (!String.IsNullOrWhiteSpace(param) && param.Equals("true"))
            {
                ParametrosConfiguracionVista.Add("mostrarTerminosYConndiciones", "true");
            }

            param = ConfigurationManager.AppSettings.Get("UrlVisorExterno");
            if (!String.IsNullOrWhiteSpace(param) && !ParametrosConfiguracionVista.ContainsKey("UrlVisorExterno"))
            {
                ParametrosConfiguracionVista.Add("UrlVisorExterno", param);
            }


        }
        #endregion

        #region Servicios
        /// <summary>
        /// Devuelve las emisoras asignadas a un usuario. 
        /// </summary>
        /// <param name="id">Id del usuario del que se requieren las emisoras.</param>
        /// <returns>Lista de emisoras asignadas al usuario.</returns>
        [HttpPost]
        [AllowAnonymous]
        [Route("EmisoraLogin/{id}")]
        public IHttpActionResult EmisoraLogin(long id)
        {
            var empresas = UsuarioService.ObtenerEmpresasPorIdEmpresaIdUsuario(null, id).InformacionExtra as List<UsuarioEmpresa>;
            IEmpresaService empresaService = (IEmpresaService)ServiceLocator.ObtenerFabricaSpring().GetObject("EmpresaService");
            var list = empresas.Select(empresa =>
            {
                var emp = empresaService.ObtenerEmpresaPorId(empresa.IdEmpresa).InformacionExtra as Empresa;
                return new Emisora() { IdEmpresa = empresa.Empresa.IdEmpresa, NombreCorto = empresa.Empresa.NombreCorto };
            }).ToList();


            return Ok(list);
        }

        /// <summary>
        /// Devuelve el objeto sesion que contiene el owin con base en el token enviado en la cabecera.
        /// </summary>
        /// <returns>El objeto sesion que tiene el token de seguridad.</returns>
        [HttpPost]
        [Authorize]
        [Route("SesionPorToken")]
        public IHttpActionResult SesionPorToken()
        {
            var esLoginActiveDirectory = bool.Parse(ConfigurationManager.AppSettings.Get("LoginActiveDirectory"));
            ClaimsPrincipal principal = Request.GetRequestContext().Principal as ClaimsPrincipal;
            string sesionStr = principal.Claims.ToList().FirstOrDefault((c) => c.Type == "Session").Value;
            var sesion = JsonConvert.DeserializeObject(sesionStr, typeof(Session));
            var sesionEnvio = (sesion as Session);

            sesionEnvio.Sso = esLoginActiveDirectory;
            return Ok(sesionEnvio);
        }
        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        [AllowAnonymous]
        [Route("ObtenConfiguracionInicial")]
        public IHttpActionResult ObtenConfiguracionInicial()
        {
            if (ParametrosConfiguracionVista == null)
            {
                IniciaParametrosConfiguracionVista();
            }
            return Ok(ParametrosConfiguracionVista);
        }

        /// <summary>
        /// Cambia el password del usuario enviado.
        /// </summary>
        /// <param name="passwordAnterior">Password que se requiere cambiar.</param>
        /// <param name="passwordNuevo">Password que se tomara como nuevo.</param>
        /// <param name="passwordConfirmar">Confirmación del password nuevo.</param>
        /// <returns>Resultado de la operación.</returns>
        [HttpPost]
        [AllowAnonymous]
        [Route("CambioPassword")]
        public IHttpActionResult CambioPassword()
        {
            ResultadoOperacionDto resultado = new ResultadoOperacionDto();
            long idUsuario = Convert.ToInt64(getFormKeyValue("idUsuario"));
            string passwordAnterior = getFormKeyValue("passwordAnterior");
            string passwordNuevo = getFormKeyValue("passwordNuevo");
            string passwordConfirmar = getFormKeyValue("passwordConfirmar");

            try
            {
                if (!string.IsNullOrEmpty(passwordAnterior) && !string.IsNullOrEmpty(passwordNuevo) && !string.IsNullOrEmpty(passwordConfirmar) && Convert.ToInt64(idUsuario) > 0)
                {
                    SeguridadDto seguridadDto = LoginService.ObtenerParametrosConfiguracionSeguridad().InformacionExtra as SeguridadDto;
                    Usuario usuarioDto = UsuarioService.ObtenerUsuarioPorId(idUsuario).InformacionExtra as Usuario;

                    if ((bool)LoginService.VerificaPasswordEncriptado(usuarioDto, passwordAnterior).InformacionExtra)
                    {
                        if ((bool)LoginService.ValidarPasswordContraExpresionRegular(seguridadDto, passwordNuevo).InformacionExtra)
                        {
                            if (!(bool)LoginService.VerificaPasswordYaUsado(usuarioDto, passwordNuevo).InformacionExtra)
                            {
                                LoginService.ModificarPassword(ref usuarioDto, seguridadDto, passwordNuevo);
                                resultado = LoginService.RegistrarAcceso(usuarioDto, seguridadDto, true);
                                if (resultado.Resultado)
                                {
                                    var empresas = UsuarioService.ObtenerEmpresasPorIdEmpresaIdUsuario(null,
                                                            usuarioDto.IdUsuario).InformacionExtra as List<UsuarioEmpresa>;
                                    Session sesion = new Session();

                                    switch (empresas.Count)
                                    {
                                        case 0:
                                            resultado.Resultado = false;
                                            resultado.Mensaje = "MENSAJE_ERROR_AUTENTICAR_USUARIO_SIN_EMISORA";
                                            break;
                                        case 1:
                                            var usuarioEmpresa = empresas.First();
                                            sesion.IdEmpresa = usuarioEmpresa.IdEmpresa;
                                            sesion.GrupoEmpresa = usuarioEmpresa.Empresa.GrupoEmpresa;

                                            var entidades = UsuarioService.CargarFacultades(usuarioDto.IdUsuario, usuarioEmpresa.IdEmpresa).InformacionExtra as List<Facultad>;
                                            var facultades = CopiadoUtil.Copia(entidades);
                                            sesion.Facultades = facultades.ToList();
                                            resultado.Mensaje = string.Empty;
                                            resultado.InformacionExtra = sesion;

                                            LoginService.RegistrarAccesoAuditoria(usuarioDto.IdUsuario, sesion.IdEmpresa);

                                            break;
                                        default:
                                            resultado.Mensaje = "EmisoraLogin";
                                            break;
                                    }
                                }
                            }
                            else
                            {
                                resultado.Mensaje = AbaxXbrl.ContraseñaUsada;
                                resultado.InformacionExtra = seguridadDto.NumeroPasswordCiclo;
                            }
                        }
                        else
                        {
                            resultado.Mensaje = AbaxXbrl.ContraseñaNuevaFormato;
                        }
                    }
                    else
                    {
                        resultado.Mensaje = AbaxXbrl.ContraselaAnteriorNoCoincide;
                    }
                }
            }
            catch (Exception ex)
            {
                resultado.Mensaje = ex.Message;
                resultado.InformacionExtra = ex;
                resultado.Resultado = false;
            }
            return Ok(resultado);
        }
        
        /// <summary>
        /// Envia el password por email
        /// </summary>
        /// <param name="email"></param>
        /// <returns></returns>
        [HttpPost]
        [AllowAnonymous]
        [Route("EnvioPassword")]
        public IHttpActionResult EnvioPassword(string correo, string urlHref)
        {
            var resultado = new ResultadoOperacionDto();
            if (string.IsNullOrEmpty(correo))
            {
                resultado.Resultado = false;
                resultado.Mensaje = AbaxXbrl.EmailReq;
            }
            else {
                resultado = LoginService.EnvioCorreoOlvidoContrasena(correo, urlHref);
            }
            return Ok(resultado);
        }
        /// <summary>
        /// Envia el password por email
        /// </summary>
        /// <param name="email"></param>
        /// <returns></returns>
        [HttpPost]
        [AllowAnonymous]
        [Route("EnvioPasswordForm")]
        public IHttpActionResult EnvioPasswordForm()
        {
            var resultado = new ResultadoOperacionDto();
            if (string.IsNullOrEmpty(getFormKeyValue("correo")))
            {
                resultado.Resultado = false;
                resultado.Mensaje = AbaxXbrl.EmailReq;
            }
            else
            {
                resultado = LoginService.EnvioCorreoOlvidoContrasena(getFormKeyValue("correo"), getFormKeyValue("urlHref"));
            }
            return Ok(resultado);
        }
        #endregion

        #region Funciones


        /// <summary>
        /// Ejecuta la autentificación del usuario en el LDAP.
        /// </summary>
        /// <param name="nombreUsuario">Nombre del usuario que desea autnticarse</param>
        /// <returns>El objeto que contiene todos los datos necesarios para saber si fue un logueo exitoso o no.</returns>
        public ResultadoOperacionDto AutentificarUsuarioLDAP(string nombreUsuario)
        {

            ResultadoOperacionDto resultado = new ResultadoOperacionDto();

            var resultadoConsulta = LoginService.ObtenerUsuarioPorNombre(nombreUsuario);
            if (!resultadoConsulta.Resultado && !String.IsNullOrWhiteSpace(resultadoConsulta.Excepcion))
            {
                return resultadoConsulta;
            }
            var usuario = resultadoConsulta.InformacionExtra as Usuario;
            var seguridad = LoginService.ObtenerParametrosConfiguracionSeguridad().InformacionExtra as SeguridadDto;
            if (usuario != null)
            {
                if (usuario.Activo)
                {
                    if (!usuario.Bloqueado)
                    {
                        Session sesion = new Session();
                        sesion.Usuario = CopiadoUtil.Copia(usuario);

                        if ((bool)LoginService.ValidarDiasAutenticaciones(seguridad, usuario).InformacionExtra && usuario.VigenciaPassword >= DateTime.Now)
                        {
                            resultado = LoginService.RegistrarAcceso(usuario, seguridad, true);


                            if (resultado.Resultado)
                            {

                                var empresas = UsuarioService.ObtenerEmpresasPorIdEmpresaIdUsuario(null,
                                                usuario.IdUsuario).InformacionExtra as List<UsuarioEmpresa>;

                                switch (empresas.Count)
                                {
                                    case 0:
                                        resultado.Resultado = false;
                                        resultado.Mensaje = "MENSAJE_ERROR_AUTENTICAR_USUARIO_SIN_EMISORA";
                                        break;
                                    case 1:
                                        var usuarioEmpresa = empresas.First();
                                        sesion.IdEmpresa = usuarioEmpresa.IdEmpresa;
                                        sesion.GrupoEmpresa = usuarioEmpresa.Empresa.GrupoEmpresa;

                                        var entidades = UsuarioService.CargarFacultades(usuario.IdUsuario, usuarioEmpresa.IdEmpresa).InformacionExtra as List<Facultad>;
                                        var facultades = CopiadoUtil.Copia(entidades);
                                        sesion.Facultades = facultades.ToList();
                                        sesion.Ip = GetUserHostAddress();
                                        resultado.Mensaje = string.Empty;
                                        LoginService.RegistrarAccesoAuditoria(sesion.Usuario.IdUsuario, sesion.IdEmpresa);
                                        break;
                                    default:
                                        resultado.Mensaje = "EmisoraLogin";
                                        break;
                                }
                                resultado.InformacionExtra = sesion;
                            }
                            return resultado;
                        }
                        resultado.Resultado = true;
                        resultado.InformacionExtra = sesion;
                        resultado.Mensaje = "CambiarPassword";
                        return resultado;
                    }
                    resultado.Mensaje = AbaxXbrl.UsuarioBloqueado;
                }
                else
                {
                    resultado.Mensaje = AbaxXbrl.UsuarioDesactivado;
                }
                resultado.Resultado = false;
                return resultado;
            }
            var u = UsuarioService.BuscarUsuario(nombreUsuario).InformacionExtra as Usuario;
            if (u != null)
            {
                return LoginService.RegistrarAcceso(u, seguridad, false);
            }
            else
            {
                resultado.Resultado = false;
                resultado.Mensaje = AbaxXbrl.UsuarioNoEncontrado;
                return resultado;
            }
        }

        /// <summary>
        /// Ejecuta la autentificación del usuario.
        /// </summary>
        /// <param name="email"></param>
        /// <param name="password"></param>
        /// <returns>El objeto que contiene todos los datos necesarios para saber si fue un logueo exitoso o no.</returns>
        public ResultadoOperacionDto Autentificar(string email, string password)
        {
           
            ResultadoOperacionDto resultado = new ResultadoOperacionDto();
            string validaLogin = ValidarLogin(email, password);

            if (!string.IsNullOrEmpty(validaLogin))
            {
                resultado.Resultado = false;
                resultado.Mensaje = validaLogin;
                return resultado;
            }
            var resultadoConsulta = LoginService.AutentificarUsuario(email, password);
            if (!resultadoConsulta.Resultado && !String.IsNullOrWhiteSpace(resultadoConsulta.Excepcion))
            {
                return resultadoConsulta;
            }
            var usuario = resultadoConsulta.InformacionExtra as Usuario;
            var seguridad = LoginService.ObtenerParametrosConfiguracionSeguridad().InformacionExtra as SeguridadDto;
            if (usuario != null)
            {
                if (usuario.Activo)
                {
                    if (!usuario.Bloqueado)
                    {
                        Session sesion = new Session();
                        sesion.Usuario = CopiadoUtil.Copia(usuario);

                        if ((bool)LoginService.ValidarDiasAutenticaciones(seguridad, usuario).InformacionExtra && usuario.VigenciaPassword >= DateTime.Now)
                        {
                            resultado = LoginService.RegistrarAcceso(usuario, seguridad, true);


                            if (resultado.Resultado)
                            {
                                
                                var empresas = UsuarioService.ObtenerEmpresasPorIdEmpresaIdUsuario(null,
                                                usuario.IdUsuario).InformacionExtra as List<UsuarioEmpresa>;

                                switch (empresas.Count)
                                {
                                    case 0:
                                        resultado.Resultado = false;
                                        resultado.Mensaje = "MENSAJE_ERROR_AUTENTICAR_USUARIO_SIN_EMISORA";
                                        break;
                                    case 1:
                                        var usuarioEmpresa = empresas.First();
                                        sesion.IdEmpresa = usuarioEmpresa.IdEmpresa;
                                        sesion.GrupoEmpresa = usuarioEmpresa.Empresa.GrupoEmpresa;

                                        var entidades = UsuarioService.CargarFacultades(usuario.IdUsuario, usuarioEmpresa.IdEmpresa).InformacionExtra as List<Facultad>;
                                        var facultades = CopiadoUtil.Copia(entidades);
                                        sesion.Facultades = facultades.ToList();
                                        sesion.Ip = GetUserHostAddress();
                                        resultado.Mensaje = string.Empty;
                                        LoginService.RegistrarAccesoAuditoria(sesion.Usuario.IdUsuario, sesion.IdEmpresa);
                                        break;
                                    default:
                                        resultado.Mensaje = "EmisoraLogin";
                                        break;
                                }
                                resultado.InformacionExtra = sesion;
                            }
                            return resultado;
                        }
                        resultado.Resultado = true;
                        resultado.InformacionExtra = sesion;
                        resultado.Mensaje = "CambiarPassword";
                        return resultado;
                    }
                    resultado.Mensaje = AbaxXbrl.UsuarioBloqueado;
                }
                else
                {
                    resultado.Mensaje = AbaxXbrl.UsuarioDesactivado;
                }
                resultado.Resultado = false;
                return resultado;
            }
            var u = UsuarioService.BuscarUsuario(email).InformacionExtra as Usuario;
            if (u != null)
            {
                return LoginService.RegistrarAcceso(u, seguridad, false);
            }
            else
            {
                resultado.Resultado = false;
                resultado.Mensaje = AbaxXbrl.UsuarioNoEncontrado;
                return resultado;
            }
        }

        /// <summary>
        /// Actualiza el token de sesión del usuario.
        /// </summary>
        /// <param name="idUsuario">Identificador del usuario.</param>
        /// <param name="token">Valor del token que se asignará.</param>
        public void ActualizaToken(long idUsuario, string token)
        {
            UsuarioService.ActualizaUsuarioToken(idUsuario, token);
        }
        /// <summary>
        /// Obtiene el token de un usuario en particular.
        /// </summary>
        /// <param name="idUsuario">Identificador del usuario.</param>
        /// <returns>Token del usuario.</returns>
        public string GetTokenUsuario(long idUsuario)
        {
            return UsuarioService.GetTokenUsuario(idUsuario);
        }

        /// <summary>
        /// Metodo de validacion para forma del login.
        /// </summary>
        /// <param name="email"></param>
        /// <param name="password"></param>
        /// <returns>Retorna un string vacio en caso de que los parametros sean correctos, de lo contrario regresa un mensaje de error.</returns>
        public string ValidarLogin(string email, string password)
        {
            if (string.IsNullOrEmpty(email))
            {
                return AbaxXbrl.EmailReq;
            }
            if (string.IsNullOrEmpty(password))
            {
                return AbaxXbrl.PassReq;
            }
            return string.Empty;
        }

        /// <summary>
        /// Metodo para agregar el id de la empresa y las facultades que tendra un objeto de sesión.
        /// </summary>
        /// <param name="emisora">Emisora que sera agregada al objeto sesión.</param>
        /// <param name="resultado">Objeto de resultado que en su propiedad InformacionExtra seran guardadas tanto la emisora como las facultades.</param>
        /// <returns></returns>
        public void AgregarEmisoraFacultades(long emisora, ref ResultadoOperacionDto resultado)
        {
            IEmpresaService empresaService = (IEmpresaService)ServiceLocator.ObtenerFabricaSpring().GetObject("EmpresaService");

            var empresa = empresaService.ObtenerEmpresaPorId(emisora);

            (resultado.InformacionExtra as Session).IdEmpresa = emisora;
            (resultado.InformacionExtra as Session).GrupoEmpresa = ((Empresa)empresa.InformacionExtra).GrupoEmpresa;
            var entidades = UsuarioService.CargarFacultades((resultado.InformacionExtra as Session).Usuario.IdUsuario, emisora).InformacionExtra as List<Facultad>;
            var facultades = CopiadoUtil.Copia(entidades);

            //Si tiene desactivado el crear empresas se retira esa facultad.
            if (ConstantsAbax.DESHABILITAR_CREAR_EMPRESAS)
            {
                var facultadesRemover = new List<AbaxXBRLCore.Viewer.Application.Dto.Angular.FacultadDto>();
                foreach (var facultad in facultades)
                {
                    if (facultad.IdFacultad == 12)
                    {
                        facultadesRemover.Add(facultad);
                    }
                }
                foreach (var facultad in facultadesRemover)
                {
                    facultades.Remove(facultad);
                }
            }
            (resultado.InformacionExtra as Session).Facultades = facultades.ToList();

            LoginService.RegistrarAccesoAuditoria((resultado.InformacionExtra as Session).Usuario.IdUsuario, emisora);

        }
        #endregion
    }
}