using AbaxXBRLCore.Common.Application;
using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.Entities;
using AbaxXBRLCore.lang;
using AbaxXBRLCore.Services;
using AbaxXBRLCore.Viewer.Application.Dto.Angular;
using AbaxXBRLWeb.App_Code.Common.Service;
using AbaxXBRLWeb.App_Code.Common.Utilerias;
using AbaxXBRLWeb.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text.RegularExpressions;
using System.Web.Http;

namespace AbaxXBRLWeb.Controllers
{
    [RoutePrefix("Usuario")]
    [Authorize]
    public class UsuarioController : BaseController
    {
        public IUsuarioService UsuarioService { get; set; }
        public IEmpresaService EmpresaService { get; set; }
        public ILoginService LoginService { get; set; }

        /// <summary>
        /// Coneccion al directorio activo
        /// </summary>
        public IActiveDirectoryConnection activeDirectoryConnection { get; set; }

        private CopiadoSinReferenciasUtil CopiadoUtil = new CopiadoSinReferenciasUtil();
        
        public UsuarioController()
        {
            try
            {
                UsuarioService = (IUsuarioService)ServiceLocator.ObtenerFabricaSpring().GetObject("UsuarioService");
                EmpresaService = (IEmpresaService)ServiceLocator.ObtenerFabricaSpring().GetObject("EmpresaService");
                LoginService = (ILoginService)ServiceLocator.ObtenerFabricaSpring().GetObject("LoginService");
            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
                throw;
            }
        }

        [Route("GetUsuarios")]
        [HttpPost]
        public IHttpActionResult GetUsuarios()
        {
            long? idEmpresa = null;
            string idEmpresaTxt = getFormKeyValue("idEmpresa");
            string nombres = getFormKeyValue("nombres");
            string param = getFormKeyValue("esUsuarioEmpresa");
            byte esUsuarioEmpresa = Convert.ToByte(String.IsNullOrEmpty(param)?"1":param);

            if (esUsuarioEmpresa > 0)
                idEmpresa = IdEmpresa;
            else
                idEmpresa = !string.IsNullOrEmpty(idEmpresaTxt) ? Convert.ToInt64(idEmpresaTxt) : (long?)null;
            
            var entidades = UsuarioService.ObtenerUsuariosPorEmisorayNombre(idEmpresa, nombres).InformacionExtra as IQueryable<Usuario>;
            var usuarios = CopiadoUtil.Copia(entidades.ToList());
            return Ok(usuarios);
        }

        [Route("GetUsuario")]
        [HttpPost]
        public IHttpActionResult GetUsuario()
        {
            var param = getFormKeyValue("id");
            var id = Int64.Parse(param);
            var entidad = UsuarioService.ObtenerUsuarioPorId(id).InformacionExtra as Usuario;
            var usuario = CopiadoUtil.Copia(entidad);
            return Ok(usuario);
        }

        [Route("GetEmisoras")]
        [HttpPost]
        public IHttpActionResult GetEmisoras()
        {

            var grupoEmpresa = SesionActual.GrupoEmpresa;
            var entidades = new List<Empresa>();
            var empresas = new List<EmpresaDto>();
            if (grupoEmpresa != null)
            {
                entidades = EmpresaService.ObtenerEmpresasPorGrupo(grupoEmpresa).InformacionExtra as List<Empresa>;
                empresas = CopiadoUtil.Copia(entidades).ToList();
            }
            else
            {
                empresas = EmpresaService.ObtenerEmpresas().InformacionExtra as List<EmpresaDto>;
            }


            var emisoras = empresas.Select((e) => new Emisora() { IdEmpresa = e.IdEmpresa, NombreCorto = e.NombreCorto });
            return Ok(emisoras);
        }

        [Route("GetEmisorasUsuario")]
        [HttpPost]
        public IHttpActionResult GetEmisorasUsuario()
        {
            var idUsuarioTxt = getFormKeyValue("idUsuario");
            var idUsuario = Convert.ToInt64(idUsuarioTxt);

            var empresas = UsuarioService.ObtenerEmpresasPorIdEmpresaIdUsuario(null, idUsuario).InformacionExtra as List<UsuarioEmpresa>;
            IEmpresaService empresaService = (IEmpresaService)ServiceLocator.ObtenerFabricaSpring().GetObject("EmpresaService");
            var list = empresas.Select(empresa =>
            {
                var emp = empresaService.ObtenerEmpresaPorId(empresa.IdEmpresa).InformacionExtra as Empresa;
                return new Emisora() { IdEmpresa = empresa.Empresa.IdEmpresa, NombreCorto = empresa.Empresa.NombreCorto };
            }).ToList();
            return Ok(list);
        }

        [Route("ActivacionUsuario")]
        [HttpPost]
        public IHttpActionResult ActivacionUsuario()
        {
            long id = Convert.ToInt64(getFormKeyValue("id"));
            bool estado = Convert.ToBoolean(getFormKeyValue("estado"));
            byte esUsuarioEmpresa = Convert.ToByte(getFormKeyValue("esUsuarioEmpresa"));

            var resultado = new ResultadoOperacionDto();

            if(esUsuarioEmpresa > 0)
                if (!((bool)UsuarioService.VerificarUsuarioEsEmpresa(id, IdEmpresa).InformacionExtra))
                {
                    resultado.Resultado = false;
                    resultado.Mensaje = AbaxXbrl.ErrorUsuarioOperacion;
                    return Ok(resultado);
                }

            if (estado)
            {
                resultado = UsuarioService.Desactivar(id, IdUsuarioExec);
                resultado.Mensaje = resultado.Resultado ? AbaxXbrl.UsuarioDesactivado : AbaxXbrl.ErrorUsuarioOperacion;
            }
            else
            {
                resultado = UsuarioService.Activar(id, IdUsuarioExec);
                resultado.Mensaje = resultado.Resultado ? AbaxXbrl.UsuarioActivo : AbaxXbrl.ErrorUsuarioOperacion;
            }
            return Ok(resultado);

        }

        [Route("BloqueadoUsuario")]
        [HttpPost]
        public IHttpActionResult BloqueadoUsuario()
        {
            long id = Convert.ToInt64(getFormKeyValue("id"));
            bool estado = Convert.ToBoolean(getFormKeyValue("estado"));
            byte esUsuarioEmpresa = Convert.ToByte(getFormKeyValue("esUsuarioEmpresa"));

            var resultado = new ResultadoOperacionDto();

            if (esUsuarioEmpresa > 0)
                if (!((bool)UsuarioService.VerificarUsuarioEsEmpresa(id, IdEmpresa).InformacionExtra))
                {
                    resultado.Resultado = false;
                    resultado.Mensaje = AbaxXbrl.ErrorUsuarioOperacion;
                    return Ok(resultado);
                }

            if (estado)
            {
                resultado = UsuarioService.Desbloquear(id, IdUsuarioExec);
                resultado.Mensaje = resultado.Resultado ? AbaxXbrl.UsuarioDesbloqueado : AbaxXbrl.ErrorUsuarioOperacion;

            }
            else
            {
                resultado = UsuarioService.Bloquear(id, IdUsuarioExec);
                resultado.Mensaje = resultado.Resultado ? AbaxXbrl.UsuarioBloqueado : AbaxXbrl.ErrorUsuarioOperacion;
            }

            return Ok(resultado);
        }

        [Route("AddUsuario")]
        [HttpPost]
        public IHttpActionResult AddUsuario()
        {
            string jsonString = getFormKeyValue("json");
            Usuario usuario = new Usuario();
            ResultadoOperacionDto resultado = new ResultadoOperacionDto();
            resultado.Resultado = true;
            JsonConvert.PopulateObject(jsonString, usuario);

            var correoEnvioNotificacion = usuario.CorreoElectronico;

            var esLoginActiveDirectory = bool.Parse(ConfigurationManager.AppSettings.Get("LoginActiveDirectory"));

            if (esLoginActiveDirectory) {
                if (activeDirectoryConnection == null)
                {
                    var tipoLoginLDAP = ConfigurationManager.AppSettings.Get("TipoLoginLDAP");
                    activeDirectoryConnection = (IActiveDirectoryConnection)ServiceLocator.ObtenerFabricaSpring().GetObject(tipoLoginLDAP);
                }

                resultado = activeDirectoryConnection.ObtenerUsuario(usuario.CorreoElectronico);
                correoEnvioNotificacion = null;
                if(resultado.Resultado && resultado.InformacionExtra!=null){
                    correoEnvioNotificacion = ((UsuarioDto)resultado.InformacionExtra).CorreoElectronico;
                }
                else if (UtilAbax.esCorreoValido(usuario.CorreoElectronico))
                {
                    correoEnvioNotificacion=usuario.CorreoElectronico;
                }
                
            }

            //if (resultado.Resultado) {
                resultado = ValidateUsuario(usuario);
                if (string.IsNullOrEmpty(resultado.Mensaje))
                {
                    var urlHref = getFormKeyValue("urlHref");
                    if (String.IsNullOrWhiteSpace(urlHref) || urlHref.Contains("localhost") || urlHref.Contains("127.0.0.1"))
                    {
                        urlHref = GetUrlContext();
                    }
                    resultado = UsuarioService.GuardarUsuario(usuario, IdUsuarioExec, urlHref,correoEnvioNotificacion);

                    
                    var usuarioEmpresa = new UsuarioEmpresa();
                    usuarioEmpresa.IdUsuario = Convert.ToInt64(resultado.InformacionExtra.ToString());
                    usuarioEmpresa.IdEmpresa = IdEmpresa;
                    resultado = UsuarioService.GuardarUsuarioEmpresa(usuarioEmpresa, IdUsuarioExec);
                    

                    resultado.Mensaje = resultado.Resultado ? AbaxXbrl.UsuarioGuardado : AbaxXbrl.ErrorUsuarioGuardado;
                }
            
            


            return Ok(resultado);
        }

        

        [Route("UpdateUsuario")]
        [HttpPost]
        public IHttpActionResult UpdateUsuario()
        {

            var jsonString = getFormKeyValue("json");
            var usuario = new Usuario();
            var correoNotificacion = "";
            JsonConvert.PopulateObject(jsonString, usuario);
            ResultadoOperacionDto resultado = ValidateUsuario(usuario);

            if (string.IsNullOrEmpty(resultado.Mensaje))
            {
                var user = UsuarioService.ObtenerUsuarioPorId(usuario.IdUsuario).InformacionExtra as Usuario;
                user.Nombre = usuario.Nombre;
                user.ApellidoPaterno = usuario.ApellidoPaterno;
                user.ApellidoMaterno = usuario.ApellidoMaterno;
                user.CorreoElectronico = usuario.CorreoElectronico;
                user.Puesto = usuario.Puesto;
                correoNotificacion = user.CorreoElectronico;

                var esLoginActiveDirectory = bool.Parse(ConfigurationManager.AppSettings.Get("LoginActiveDirectory"));

                if (esLoginActiveDirectory)
                {
                    if (activeDirectoryConnection == null)
                    {
                        var tipoLoginLDAP = ConfigurationManager.AppSettings.Get("TipoLoginLDAP");
                        activeDirectoryConnection = (IActiveDirectoryConnection)ServiceLocator.ObtenerFabricaSpring().GetObject(tipoLoginLDAP);
                    }

                    resultado = activeDirectoryConnection.ObtenerUsuario(usuario.CorreoElectronico);
                    correoNotificacion = null;
                    if (resultado.Resultado && resultado.InformacionExtra != null)
                    {
                        correoNotificacion = ((UsuarioDto)resultado.InformacionExtra).CorreoElectronico;
                    }
                    else if (UtilAbax.esCorreoValido(usuario.CorreoElectronico))
                    {
                        correoNotificacion = usuario.CorreoElectronico;
                    }

                }

                
                    resultado = UsuarioService.GuardarUsuario(user, IdUsuarioExec, GetUrlContext(), correoNotificacion);
                    resultado.Mensaje = resultado.Resultado ? AbaxXbrl.UsuarioGuardado : AbaxXbrl.ErrorUsuarioGuardado;
                

                
            }

            return Ok(resultado);
        }

        [Route("DeleteUsuario")]
        [HttpPost]
        public IHttpActionResult DeleteUsuario()
        {
            var param = getFormKeyValue("id");
            var id = Int64.Parse(param);
            param = getFormKeyValue("esUsuarioEmpresa");
            var esUsuarioEmpresa = Boolean.Parse(param);
            var resultado = new ResultadoOperacionDto();
            var usuario = UsuarioService.ObtenerUsuarioPorId(id).InformacionExtra as Usuario;

            if (esUsuarioEmpresa)
            {
                if (usuario == null || !((bool)UsuarioService.VerificarUsuarioEsEmpresa(id, IdEmpresa).InformacionExtra))
                {
                    resultado.Resultado = false;
                    resultado.Mensaje = AbaxXbrl.ErrorUsuarioOperacion;
                    return Ok(resultado);
                }
            }
                

            resultado = UsuarioService.BorrarLogicamenteUsuario(id, this.IdUsuarioExec);
            resultado.Mensaje = resultado.Resultado ? AbaxXbrl.BorrarUsuario : AbaxXbrl.ErrorUsuarioBorrardo;
            return Ok(resultado);
        }

        [Route("ExportarDatos")]
        [HttpPost]
        public IHttpActionResult ExportarDatos()
        {
            long? idEmpresa = null;
            string idEmpresaTxt = getFormKeyValue("idEmpresa");
            string nombres = getFormKeyValue("nombres");
            byte esUsuarioEmpresa = Convert.ToByte(getFormKeyValue("esUsuarioEmpresa"));

            if (esUsuarioEmpresa > 0)
                idEmpresa = IdEmpresa;
            else
                idEmpresa = !string.IsNullOrEmpty(idEmpresaTxt) ? Convert.ToInt64(idEmpresaTxt) : (long?)null;

            var entidades = UsuarioService.ObtenerUsuariosPorEmisorayNombre(idEmpresa, nombres).InformacionExtra as IQueryable<Usuario>;
            var usuarios = CopiadoUtil.Copia(entidades.ToList());
            Dictionary<String, String> columns = new Dictionary<String, String>() { { "Nombre", "Nombre" }, { "ApellidoPaterno", "ApellidoPaterno" }, { "ApellidoMaterno", "ApellidoMaterno" }, { "CorreoElectronico", "CorreoElectronico" }, { "Puesto", "Puesto" } };
            return this.ExportDataToExcel("Index", usuarios.ToList(), "usuarios.xls", columns);
        }

        [Route("CambiarContrasena")]
        [HttpPost]
        public IHttpActionResult CambiarContrasena()
        {
            string passwordAnterior = getFormKeyValue("passwordAnterior");
            string passwordNuevo = getFormKeyValue("passwordNuevo");
            string passwordConfirmar = getFormKeyValue("passwordConfirmar");
            ResultadoOperacionDto resultado = new ResultadoOperacionDto();

            if (!string.IsNullOrEmpty(passwordAnterior) && !string.IsNullOrEmpty(passwordNuevo) && !string.IsNullOrEmpty(passwordConfirmar) && SesionActual.Usuario != null)
            {

                SeguridadDto seguridadDto = LoginService.ObtenerParametrosConfiguracionSeguridad().InformacionExtra as SeguridadDto;
                Usuario usuarioDto = UsuarioService.ObtenerUsuarioPorId(SesionActual.Usuario.IdUsuario).InformacionExtra as Usuario;

                if ((bool)LoginService.VerificaPasswordEncriptado(usuarioDto, passwordAnterior).InformacionExtra)
                {
                    if ((bool)LoginService.ValidarPasswordContraExpresionRegular(seguridadDto, passwordNuevo).InformacionExtra)
                    {
                        if (!(bool)LoginService.VerificaPasswordYaUsado(usuarioDto, passwordNuevo).InformacionExtra)
                        {
                            LoginService.ModificarPassword(ref usuarioDto, seguridadDto, passwordNuevo);
                            resultado = LoginService.RegistrarAcceso(usuarioDto, seguridadDto, true);
                            if (resultado.Resultado)
                                resultado.Mensaje = AbaxXbrl.ContraseñaModificada;
                        }
                        else
                        {
                            resultado.Mensaje = AbaxXbrl.ContraseñaUsada;
                            resultado.InformacionExtra = seguridadDto.NumeroPasswordCiclo;
                        }
                    }
                    else
                        resultado.Mensaje = AbaxXbrl.ContraseñaNuevaFormato;
                }
                else
                    resultado.Mensaje = AbaxXbrl.ContraselaAnteriorNoCoincide;
            }
            return Ok(resultado);
        }

        [HttpPost]
        [Route("AsignarEmisoras")]
        public IHttpActionResult AsignarEmisoras()
        {
            var idUsuarioTxt = getFormKeyValue("idUsuario");
            var idUsuario = Int64.Parse(idUsuarioTxt);
            var sListaJson = getFormKeyValue("listaJson");
            var idEmisoras = new List<long>();
            JsonConvert.PopulateObject(sListaJson, idEmisoras);
            var resultado = UsuarioService.BorrarEmpresasUsuario(idUsuario);
            var list = new List<UsuarioEmpresa>();
            if (resultado.Resultado)
            {
                foreach (var idEmisora in idEmisoras)
                {
                    var usuarioEmpresa = new UsuarioEmpresa();
                    usuarioEmpresa.IdUsuario = idUsuario;
                    usuarioEmpresa.IdEmpresa = idEmisora;
                    list.Add(usuarioEmpresa);
                }
                foreach (var usuarioEmpresa in list)
                {
                    resultado = UsuarioService.GuardarUsuarioEmpresa(usuarioEmpresa, IdUsuarioExec);
                }
            }
            UsuarioService.BorrarGruposYRolesNoAsociadosAEmpresaUsuario(idUsuario, IdUsuarioExec);
            resultado.Mensaje = resultado.Resultado ? AbaxXbrl.EmisorasAsignadasCorrectamente : AbaxXbrl.ErrorEmisorasAsignadas;
            return Ok(resultado);
        }

        [HttpPost]
        [Route("ValidarUsuarioDirectorioActivo")]
        public IHttpActionResult ValidarUsuarioDirectorioActivo()
        {
            var NombreUsuario = getFormKeyValue("nombreUsuario");

            if (activeDirectoryConnection == null) {
                var tipoLoginLDAP = ConfigurationManager.AppSettings.Get("TipoLoginLDAP");
                activeDirectoryConnection = (IActiveDirectoryConnection)ServiceLocator.ObtenerFabricaSpring().GetObject(tipoLoginLDAP);
            }

            var resultadoOperacion = activeDirectoryConnection.ObtenerUsuario(NombreUsuario);

            return Ok(resultadoOperacion);

        }

        

        /// <summary>
        /// Método que valida la existencia de los campos requeridos
        /// </summary>
        /// <param name="usuario">Usuario a validar.</param>
        /// <returns></returns>
        private ResultadoOperacionDto ValidateUsuario(Usuario usuario)
        {
            var resultado = new ResultadoOperacionDto();
            var regex = ConfigurationManager.AppSettings["expresionValidacionCorreo"];
            if (String.IsNullOrEmpty(usuario.Nombre))
                resultado.Mensaje = AbaxXbrl.NombreVacio;

            if (String.IsNullOrEmpty(usuario.ApellidoPaterno))
                resultado.Mensaje = AbaxXbrl.ApellidoPaternoVacio;

            if (String.IsNullOrEmpty(usuario.CorreoElectronico))
                resultado.Mensaje = AbaxXbrl.CorreoElectronicoVacio;

            var esLoginActiveDirectory = bool.Parse(ConfigurationManager.AppSettings.Get("LoginActiveDirectory"));

            if (!esLoginActiveDirectory) { 
            Regex expression = new Regex(regex);
                if (!expression.IsMatch(usuario.CorreoElectronico))
                    resultado.Mensaje = AbaxXbrl.CorreoSinFormato;
            }
            if (usuario.IdUsuario == 0)
            {
                var usuexistente = UsuarioService.BuscarUsuario(usuario.CorreoElectronico).InformacionExtra as Usuario;
                if (usuexistente != null)
                    resultado.Mensaje = AbaxXbrl.UsuarioConCorreoExistente;
            }

            resultado.Resultado = String.IsNullOrEmpty(resultado.Mensaje);

            return resultado;
        }
    }
}
