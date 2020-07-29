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
    [RoutePrefix("Rol")]
    public class RolController : BaseController
    {      
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
        /// Constructor único.
        /// </summary>
        public RolController()
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
        /// Retorna el listado de roles para la empresa en sesión.
        /// </summary>
        /// <returns>Listado de roles.</returns>
        [HttpPost]
        [Authorize]
        [Route("ObtenRolesEmpesa")]
        public IHttpActionResult ObtenRolesEmpesa() {
            var roles = ((IQueryable<Rol>) RolService.ObtenerRolesPorNombre(null, IdEmpresa).InformacionExtra).ToList();
            var rolesDto = new List<RolDto>();

            foreach (var rol in roles) {
                //Solo agregamos los que no tengan borrado lógico.
                if (rol != null && rol.Borrado != true) {
                    rolesDto.Add(CopiadoUtil.Copia(rol));
                }
            }
            var resultado = new ResultadoOperacionDto() {
                Resultado= true,
                Mensaje = "OK",
                InformacionExtra = rolesDto,
            
            };

            return Ok(resultado);
        }
        /// <summary>
        /// Elimina un rol.
        /// </summary>
        /// <returns>Resultado de la operación de eliminado.</returns>
        [HttpPost]
        [Authorize]
        [Route("EliminarRol")]
        public IHttpActionResult EliminarRol() {

            var sIdRol = getFormKeyValue("idRol");
            var idRol = Int64.Parse(sIdRol);
            var resultado = RolService.BorrarLogicamenteRol(idRol,IdUsuarioExec);
            return Ok(resultado);
        }

        /// <summary>
        /// Exporta el listado de roles a excel.
        /// </summary>
        /// <returns>Flujo con de salida con el archivo de excel.</returns>
        [HttpPost]
        [Authorize]
        [Route("Exportar")]
        public IHttpActionResult Exportar()
        {
            string search = String.Empty;
            var roles = RolService.ObtenerRolesPorNombre(search, IdEmpresa).InformacionExtra as IQueryable<Rol>;
            var lista = roles.ToList();
            var rolesActivos = new List<Rol>();
            foreach (var rol in lista) 
            {
                if (rol != null || rol.Borrado != true) 
                { 
                    rolesActivos.Add(rol);
                }
            }

            Dictionary<String, String> columns = new Dictionary<String, String>() { { "Nombre", "Nombre" }, { "Descripcion", "Descripcion" } };
            return this.ExportDataToExcel("IndexRol", rolesActivos, "roles.xls", columns);
        }


        /// <summary>
        /// Actualizar Rol.
        /// </summary>
        /// <returns>Resultado de la operación de eliminado.</returns>
        [HttpPost]
        [Authorize]
        [Route("ActualizarRol")]
        public IHttpActionResult ActualizarRol()
        {

            var jsonString = getFormKeyValue("json");
            var dto = new RolDto();
            JsonConvert.PopulateObject(jsonString, dto);
            var rol = RolService.ObtenerRolPorId(dto.IdRol).InformacionExtra as Rol;
            rol.Nombre = dto.Nombre;
            rol.Descripcion = dto.Descripcion;

            
            var resultado = RolService.GuardarRol(rol, IdUsuarioExec);
            return Ok(resultado);
        }

        /// <summary>
        /// Actualizar Rol.
        /// </summary>
        /// <returns>Resultado de la operación de eliminado.</returns>
        [HttpPost]
        [Authorize]
        [Route("RegistrarRol")]
        public IHttpActionResult RegistrarRol()
        {

            var jsonString = getFormKeyValue("json");
            var rol = new Rol();
            JsonConvert.PopulateObject(jsonString, rol);
            rol.IdEmpresa = IdEmpresa;
            var resultado = RolService.GuardarRol(rol, IdUsuarioExec);
            return Ok(resultado);
        }

        /// <summary>
        /// Obtiene un listado con todas las facultades.
        /// </summary>
        /// <returns>Resultado de la operación de eliminado.</returns>
        [HttpPost]
        [Authorize]
        [Route("ObtenFacultades")]
        public IHttpActionResult ObtenFacultades()
        {
            var resultado = RolService.ObtenerFacultades();
            var facultades = (List<Facultad>)resultado.InformacionExtra;
            resultado.InformacionExtra = CopiadoUtil.Copia(facultades);
            return Ok(resultado);
        }

        /// <summary>
        /// Obtiene un listado con todas las categorias.
        /// </summary>
        /// <returns>Resultado de la operación de eliminado.</returns>
        [HttpPost]
        [Authorize]
        [Route("ObtenCategoriasFacultades")]
        public IHttpActionResult ObtenCategoriasFacultades()
        {
            var resultado = RolService.ObtenerCategoriasFacultad();
            var categorias = (List<CategoriaFacultad>)resultado.InformacionExtra;
            resultado.InformacionExtra = CopiadoUtil.Copia(categorias);
            return Ok(resultado);
        }

        /// <summary>
        /// Obtiene las facultades asignadas a un rol en particular.
        /// </summary>
        /// <returns>Resultado de la operación de eliminado.</returns>
        [HttpPost]
        [Authorize]
        [Route("ObtenFacultadesRol")]
        public IHttpActionResult ObtenFacultadesRol()
        {
            var sIdRol = getFormKeyValue("idRol");
            var idRol = Int64.Parse(sIdRol);
            var facultadesRol = (IEnumerable < RolFacultad >) RolService.ObtenerRolFacultadesPorRolFacultad(idRol,null).InformacionExtra;
            var facultades = new List<FacultadDto>();
            FacultadDto dto;
            foreach (var rolFacultad in facultadesRol)
            {
                dto = CopiadoUtil.Copia(rolFacultad.Facultad);
                facultades.Add(dto);
            }
            var resultado = new ResultadoOperacionDto()
            {
                Resultado = true,
                InformacionExtra = facultades,
                Mensaje = "OK"
            };

            return Ok(resultado);
        }

        /// <summary>
        /// Reasigna una lista de facultades al rol.
        /// </summary>
        /// <returns>Resultado de la operación de eliminado.</returns>
        [HttpPost]
        [Authorize]
        [Route("AsignaFacultadesRol")]
        public IHttpActionResult AsignaFacultadesRol()
        {
            var sIdRol = getFormKeyValue("idRol");
            var idRol = Int64.Parse(sIdRol);
            var sListaJson = getFormKeyValue("listaJson");
            var idsFacultades = new List<long>();
            JsonConvert.PopulateObject(sListaJson, idsFacultades);
            var resultado = RolService.BorrarFacultadesPorRol(idRol);
            var list = new List<RolFacultad>();
            if (resultado.Resultado)
            {

                foreach (var idFacultad in idsFacultades)
                {
                    var rolFacultad = new RolFacultad();
                    rolFacultad.IdRol = idRol;
                    rolFacultad.IdFacultad = idFacultad;
                    list.Add(rolFacultad);
                }
                if (list.Any())
                {
                    resultado = RolService.GuardarRolFacultadBulk(list, IdUsuarioExec);
                }
            }
            return Ok(resultado);
        }

        /// <summary>
        /// Retorna el listado de roles asignados al usuario indicado.
        /// </summary>
        /// <returns>Listado de roles.</returns>
        [HttpPost]
        [Authorize]
        [Route("ObtenRolesUsuario")]
        public IHttpActionResult ObtenRolesUsuario()
        {

            var sIdEmpresa = getFormKeyValue("idEmpresa");
            var idEmpresa = Convert.ToInt64(sIdEmpresa);
            var sIdUsuario = getFormKeyValue("idUsuario");
            var idUsuario = Int64.Parse(sIdUsuario);
            var lista = (IEnumerable<UsuarioRol>)UsuarioService.ObtenerUsuariosRolPorUsuarioRol(idUsuario, null).InformacionExtra;
            IList<RolDto> dtos = new List<RolDto>();
            foreach (var item in lista)
            {
                var entidad = RolService.ObtenerRolPorId(item.IdRol).InformacionExtra as Rol;
                if (entidad != null && entidad.Borrado != true && entidad.IdEmpresa == idEmpresa)
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
        /// Retorna el listado de roles asignados al usuario indicado.
        /// </summary>
        /// <returns>Listado de roles.</returns>
        [HttpPost]
        [Authorize]
        [Route("ObtenRolesUsuarioEmpesas")]
        public IHttpActionResult ObtenRolesUsuarioEmpesas()
        {

            var sIdEmpresa = getFormKeyValue("idEmpresa");
            var idEmpresa = Convert.ToInt64(sIdEmpresa);
            var sIdUsuario = getFormKeyValue("idUsuario");
            var idUsuario = Convert.ToInt64(sIdUsuario);
            var dtos = new List<RolDto>();
            var lista = ((IQueryable<Rol>)RolService.ObtenerRolesPorNombre(null, idEmpresa).InformacionExtra).ToList();
            foreach (var entidad in lista)
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
        /// Retorna el listado de roles asignados al usuario indicado.
        /// </summary>
        /// <returns>Listado de roles.</returns>
        [HttpPost]
        [Authorize]
        [Route("ObtenUsuarioPorEmpresa")]
        public IHttpActionResult ObtenUsuarioPorEmpresa()
        {

            var sIdEmpresa = getFormKeyValue("idEmpresa");
            var idEmpresa = Convert.ToInt64(sIdEmpresa);
            IList<UsuarioDto> dtos = new List<UsuarioDto>();
            var lista = UsuarioService.ObtenerEmpresasPorIdEmpresaIdUsuario(idEmpresa, null).InformacionExtra as List<UsuarioEmpresa>;
            foreach (var item in lista)
            {
                var entidad = UsuarioService.ObtenerUsuarioPorId(item.IdUsuario).InformacionExtra as Usuario;
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
        /// Reasigna una lista de roles al grupo indicado.
        /// </summary>
        /// <returns>Resultado de la operación.</returns>
        [HttpPost]
        [Authorize]
        [Route("AsignaRolesUsuario")]
        public IHttpActionResult AsignaRolesUsuario()
        {
            var sIdEmpresa = getFormKeyValue("idEmpresa");
            var idEmpresa = Convert.ToInt64(sIdEmpresa);
            var sIdUsuario = getFormKeyValue("idUsuario");
            var idUsuario = Convert.ToInt64(sIdUsuario);
            var sListaJson = getFormKeyValue("listaJson");
            var idsRoles = new List<long>();
            JsonConvert.PopulateObject(sListaJson, idsRoles);

            var resultado = new ResultadoOperacionDto();

            var listaUsuarioRol = new List<UsuarioRol>();
            var lista = (IEnumerable<UsuarioRol>)UsuarioService.ObtenerUsuariosRolPorUsuarioRol(idUsuario, null).InformacionExtra;
            foreach (var item in lista)
            {
                var entidad = RolService.ObtenerRolPorId(item.IdRol).InformacionExtra as Rol;
                if (entidad != null && entidad.Borrado != true && entidad.IdEmpresa == idEmpresa)
                {
                    listaUsuarioRol.Add(item);
                }
            }

            if (listaUsuarioRol.Any())
            {
                foreach (var usuarioRol in listaUsuarioRol)
                {
                    resultado = UsuarioService.BorrarUsuarioRol(usuarioRol.IdUsuarioRol, IdUsuarioExec);
                }
            }
            else
            {
                resultado.Resultado = true;
            }
            

            var list = new List<UsuarioRol>();
            if (resultado.Resultado)
            {

                foreach (var idRol in idsRoles)
                {
                    var usuarioRol = new UsuarioRol()
                    {
                        IdRol = idRol,
                        IdUsuario = idUsuario
                    };

                    list.Add(usuarioRol);
                }
                if (list.Any())
                {   
                    foreach (var rol in list)
                    {
                        resultado = UsuarioService.GuardarUsuarioRol(rol, IdUsuarioExec);
                    }
                }
            }
            return Ok(resultado);
        }





     
    }
}