using System;
using System.Collections.Generic;
using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.Entities;
using AbaxXBRLCore.Repository;
using AbaxXBRLCore.Services;
using AbaxXBRLWeb.App_Code;
using AbaxXBRLWeb.App_Code.Common.Service;
using AbaxXBRLWeb.App_Code.Common.Utilerias;
using System.Web;
using System.Web.Http;
using AbaxXBRLCore.Common.Dtos;
using Newtonsoft.Json;
using System.Linq;
using AbaxXBRLCore.Viewer.Application.Dto.Angular;

namespace AbaxXBRLWeb.Controllers
{
    /// <summary>
    /// Controler para los elementos de ro.
    /// </summary>
    [RoutePrefix("Grupo")]
    public class GrupoUsuarioController : BaseController
    {
        /// <summary>
        /// Servicio para la administración de roles.
        /// </summary>
        public IRolService RolService { get; set; }
        /// <summary>
        /// Servicio para la administración de usuarios.
        /// </summary>
        public IUsuarioService UsuarioService { get; set; }
        /// <summary>
        /// Utilería auxiliar para el copiado de entidades a dtos.
        /// </summary>
        private CopiadoSinReferenciasUtil CopiadoUtil = new CopiadoSinReferenciasUtil();
        /// <summary>
        /// Constructor por defecto.
        /// </summary>
        public GrupoUsuarioController()
        {
            try
            {
                RolService = (IRolService)ServiceLocator.ObtenerFabricaSpring().GetObject("RolService");
                UsuarioService = (IUsuarioService)ServiceLocator.ObtenerFabricaSpring().GetObject("UsuarioService");
            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
                throw;
            }
        }
        /// <summary>
        /// Retorna el listado de grupos de usuarios para la empresa en sesión.
        /// </summary>
        /// <returns>Listado de grupos.</returns>
        [HttpPost]
        [Authorize]
        [Route("ObtenGruposUsuarios")]
        public IHttpActionResult ObtenGruposUsuarios()
        {
            var grupos = ((IQueryable<GrupoUsuarios>)UsuarioService.ObtenerGruposUsuarios(IdEmpresa).InformacionExtra).ToList();

            var dtos = new List<GrupoUsuariosDto>();
            foreach (var entidad in grupos)
            {
                if (entidad != null && entidad.Borrado != true)
                {
                    dtos.Add(CopiadoUtil.Copia(entidad));
                }
            }

            var resultado = new ResultadoOperacionDto()
            {
                Resultado = true,
                Mensaje = "OK",
                InformacionExtra = dtos,

            };

            return Ok(resultado);
        }
        /// <summary>
        /// Retorna el listado de usuarios para la empresa en sesión.
        /// </summary>
        /// <returns>Listado de usuarios.</returns>
        [HttpPost]
        [Authorize]
        [Route("ObtenUsuariosEmpresa")]
        public IHttpActionResult ObtenUsuariosEmpresa() 
        {
            var usuarios = ((IQueryable<Usuario>)UsuarioService.ObtenerUsuariosPorEmisorayNombre(IdEmpresa,null).InformacionExtra).ToList();
            var dtos = new List<UsuarioDto>();
            foreach (var entidad in usuarios) 
            {
                if (entidad != null && entidad.Borrado != true)
                {
                    dtos.Add(CopiadoUtil.Copia(entidad));
                }
            }
            var resultado = new ResultadoOperacionDto()
            {
                Resultado = true,
                Mensaje = "OK",
                InformacionExtra = dtos,

            };

            return Ok(resultado);
        }

        /// <summary>
        /// Retorna el listado de usuarios asignados al grupo indicado.
        /// </summary>
        /// <returns>Listado de usuarios asignados al grupo.</returns>
        [HttpPost]
        [Authorize]
        [Route("ObtenUsuariosGrupo")]
        public IHttpActionResult ObtenUsuariosGrupo()
        {
            var sIdGrupoUsuarios = getFormKeyValue("idGrupoUsuarios");
            var idGrupoUsuarios = Int64.Parse(sIdGrupoUsuarios);
            var usuariosGrupo = (IEnumerable<UsuarioGrupo>)UsuarioService.ObtenerUsuarioGrupoPorUsuarioGrupoUsuario(null, idGrupoUsuarios).InformacionExtra;
            IList<Usuario> usuarios = new List<Usuario>();
            foreach (var usuarioGrupo in usuariosGrupo) {

                var entidad = UsuarioService.ObtenerUsuarioPorId(usuarioGrupo.IdUsuario).InformacionExtra as Usuario;
                if (entidad != null && entidad.Borrado != true)
                {
                    usuarios.Add(entidad);
                }
            }
            var resultado = new ResultadoOperacionDto()
            {
                Resultado = true,
                Mensaje = "OK",
                InformacionExtra = CopiadoUtil.Copia(usuarios),

            };

            return Ok(resultado);
        }

        /// <summary>
        /// Retorna el listado de roles para el grupo de usuarios indicado.
        /// </summary>
        /// <returns>Listado de roles asignados al grupo.</returns>
        [HttpPost]
        [Authorize]
        [Route("ObtenRolesGrupo")]
        public IHttpActionResult ObtenRolesGrupo()
        {
            var sIdGrupoUsuarios = getFormKeyValue("idGrupoUsuarios");
            var idGrupoUsuarios = Int64.Parse(sIdGrupoUsuarios);
            var rolesGrupo = (IEnumerable<GrupoUsuariosRol>)UsuarioService.ObtenerGrupoUsuariosRolPorIdGrupoUsuario(idGrupoUsuarios).InformacionExtra;
            IList<Rol> roles = new List<Rol>();
            foreach (var rolGrupo in rolesGrupo)
            {
                var entidad = RolService.ObtenerRolPorId(rolGrupo.IdRol).InformacionExtra as Rol;
                if (entidad != null && entidad.Borrado != true)
                {
                    roles.Add(entidad);
                }
            }
            var resultado = new ResultadoOperacionDto()
            {
                Resultado = true,
                Mensaje = "OK",
                InformacionExtra = CopiadoUtil.Copia(roles),

            };

            return Ok(resultado);
        }

        /// <summary>
        /// Registra un nuevo grupo.
        /// </summary>
        /// <returns>Resultado de la operación.</returns>
        [HttpPost]
        [Authorize]
        [Route("RegistrarGrupo")]
        public IHttpActionResult RegistrarGrupo()
        {

            var jsonString = getFormKeyValue("json");
            var grupo = new GrupoUsuarios();
            JsonConvert.PopulateObject(jsonString, grupo);
            grupo.IdEmpresa = IdEmpresa;
            var resultado = UsuarioService.GuardarGrupoUsuarios(grupo,IdUsuarioExec);
            return Ok(resultado);
        }

        /// <summary>
        /// Actualizar Rol.
        /// </summary>
        /// <returns>Resultado de la operación de eliminado.</returns>
        [HttpPost]
        [Authorize]
        [Route("ActualizarGrupo")]
        public IHttpActionResult ActualizarGrupo()
        {

            var jsonString = getFormKeyValue("json");
            var dto = new GrupoUsuariosDto();
            JsonConvert.PopulateObject(jsonString, dto);
            var grupo = UsuarioService.ObtenerGrupoUsuariosPorId(dto.IdGrupoUsuarios).InformacionExtra as GrupoUsuarios;
            grupo.Nombre = dto.Nombre;
            grupo.Descripcion = dto.Descripcion;
            var resultado = UsuarioService.GuardarGrupoUsuarios(grupo, IdUsuarioExec); ;
            return Ok(resultado);
        }

        /// <summary>
        /// Elimina un grupo.
        /// </summary>
        /// <returns>Resultado de la operación de eliminado.</returns>
        [HttpPost]
        [Authorize]
        [Route("Eliminar")]
        public IHttpActionResult Eliminar()
        {

            var sIdGrupoUsuarios = getFormKeyValue("idGrupoUsuarios");
            var idGrupoUsuarios = Int64.Parse(sIdGrupoUsuarios);
            var resultado = UsuarioService.BorrarGrupoUsuariosLogico(idGrupoUsuarios, IdUsuarioExec);
            return Ok(resultado);
        }

        /// <summary>
        /// Exporta el listado de grupos a excel.
        /// </summary>
        /// <returns>Flujo con de salida con el archivo de excel.</returns>
        [HttpPost]
        [Authorize]
        [Route("Exportar")]
        public IHttpActionResult Exportar()
        {
            var grupos = UsuarioService.ObtenerGruposUsuarios(this.IdEmpresa).InformacionExtra as IQueryable<GrupoUsuarios>;
            var lista = grupos.ToList();
            var activos = new List<GrupoUsuarios>();
            foreach (var entidad in grupos)
            {
                if (entidad != null && entidad.Borrado != true)
                {
                    activos.Add(entidad);
                }
            }


            Dictionary<String, String> columns = new Dictionary<String, String>() { { "Nombre", "Nombre" }, { "Descripcion", "Descripcion" }, { "Empresa.NombreCorto", "Empresa" } };
            
            return this.ExportDataToExcel("IndexGrupo", activos, "grupos.xls", columns);
        }

        /// <summary>
        /// Reasigna una lista de usuarios al grupo indicado.
        /// </summary>
        /// <returns>Resultado de la operación.</returns>
        [HttpPost]
        [Authorize]
        [Route("AsignaUsuariosGrupo")]
        public IHttpActionResult AsignaUsuariosGrupo()
        {
            var sIdGrupoUsuarios = getFormKeyValue("idGrupoUsuarios");
            var idGrupoUsuarios = Int64.Parse(sIdGrupoUsuarios);
            var sListaJson = getFormKeyValue("listaJson");
            var idsUsuarios = new List<long>();
            JsonConvert.PopulateObject(sListaJson, idsUsuarios);
            var resultado = UsuarioService.BorrarUsuarioGrupopPorGrupo(idGrupoUsuarios);
            var list = new List<UsuarioGrupo>();
            if (resultado.Resultado)
            {

                foreach (var idUsuario in idsUsuarios)
                {
                    var usuarioGrupo = new UsuarioGrupo() { 
                        IdUsuario = idUsuario,
                        IdGrupoUsuarios = idGrupoUsuarios,
                    };

                    list.Add(usuarioGrupo);
                }
                if (list.Any())
                {
                    resultado = UsuarioService.GuardarUsuarioGrupoBulk(list,IdUsuarioExec);
                }
            }
            return Ok(resultado);
        }

        /// <summary>
        /// Reasigna una lista de roles al grupo indicado.
        /// </summary>
        /// <returns>Resultado de la operación.</returns>
        [HttpPost]
        [Authorize]
        [Route("AsignaRolesGrupo")]
        public IHttpActionResult AsignaRolesGrupo()
        {
            var sIdGrupoUsuarios = getFormKeyValue("idGrupoUsuarios");
            var idGrupoUsuarios = Int64.Parse(sIdGrupoUsuarios);
            var sListaJson = getFormKeyValue("listaJson");
            var idsRoles = new List<long>();
            JsonConvert.PopulateObject(sListaJson, idsRoles);
            var resultado = UsuarioService.BorrarGrupoUsuariosRolPorIdGrupo(idGrupoUsuarios,IdUsuarioExec);
            var list = new List<GrupoUsuariosRol>();
            if (resultado.Resultado)
            {

                foreach (var idRol in idsRoles)
                {
                    var rolGrupo = new GrupoUsuariosRol()
                    {
                        IdRol = idRol,
                        IdGrupoUsuario = idGrupoUsuarios
                    };

                    list.Add(rolGrupo);
                }
                if (list.Any())
                {
                    foreach (var rol in list)
                    {
                        resultado = UsuarioService.GuardarGrupoUsuariosRol(rol, IdUsuarioExec);
                    }
                }
            }
            return Ok(resultado);
        }


    }
}