#region

using System;
using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Entities;
using System.Collections.Generic;

#endregion

namespace AbaxXBRLCore.Services
{
    public interface IRolService
    {
        #region Rol

        /// <summary>
        ///     Guarda el Rol en la BD
        /// </summary>
        /// <param name="rol"></param>
        /// <param name="idUsuarioExec"></param>
        /// <returns></returns>
        ResultadoOperacionDto GuardarRol(Rol rol, long idUsuarioExec);

        /// <summary>
        ///     Obtiene el rol por su identificador
        /// </summary>
        /// <param name="idRol"></param>
        /// <returns></returns>
        ResultadoOperacionDto ObtenerRolPorId(long idRol);

        /// <summary>
        ///     Borrar el rol por su identificador
        /// </summary>
        /// <param name="idRol"></param>
        /// <param name="idUsuarioExec"></param>
        /// <returns></returns>
        ResultadoOperacionDto BorrarRol(long idRol, long idUsuarioExec);

        /// <summary>
        ///     Obtiene los roles existentes
        /// </summary>
        /// <returns></returns>
        ResultadoOperacionDto ObtenerRoles();

        /// <summary>
        ///     obtiene los roles por nombre
        /// </summary>
        /// <param name="nombre"></param>
        /// <returns></returns>
        ResultadoOperacionDto ObtenerRolesPorNombre(String nombre, long? idEmpresa);

        /// <summary>
        /// BorraLogicamente el rol
        /// </summary>
        /// <param name="idRol"></param>
        /// <param name="idUsuarioExec"></param>
        /// <returns></returns>
        ResultadoOperacionDto BorrarLogicamenteRol(long idRol, long idUsuarioExec);

        ResultadoOperacionDto VerificaRolEmpresa(long idRol, long idEmpresa);

        #endregion

        #region RolFacultad

        /// <summary>
        ///     Guarda el RolFacultad en la BD
        /// </summary>
        /// <param name="rolFacultad"></param>
        /// <param name="idUsuarioExec"></param>
        /// <returns></returns>
        ResultadoOperacionDto GuardarRolFacultad(RolFacultad rolFacultad);


        /// <summary>
        /// Bulk Insert para las facultades de los roles.
        /// </summary>
        /// <param name="rolFacultad"></param>
        /// <returns></returns>
        ResultadoOperacionDto GuardarRolFacultadBulk(List<RolFacultad> rolFacultad, long idUsuarioExec);

   

        /// <summary>
        ///     Obtiene el RolFacultad por su identificador
        /// </summary>
        /// <param name="idRolFacultad"></param>
        /// <returns></returns>
        ResultadoOperacionDto ObtenerRolFacultadPorId(long idRolFacultad);

        /// <summary>
        ///     Borrar el RolFacultad por su identificador
        /// </summary>
        /// <param name="idRolFacultad"></param>
        /// <param name="idUsuarioExec"></param>
        /// <returns></returns>
        ResultadoOperacionDto BorrarRolFacultad(long idRolFacultad);

        /// <summary>
        ///     Obtiene los RolesFacultad existentes
        /// </summary>
        /// <returns></returns>
        ResultadoOperacionDto ObtenerRolFacultades();

        /// <summary>
        ///     Obtiene los RolesFacultass por idRol y/o idFacultad
        /// </summary>
        /// <param name="idRol"></param>
        /// <param name="idFacultad"></param>
        /// <returns></returns>
        ResultadoOperacionDto ObtenerRolFacultadesPorRolFacultad(long? idRol, long? idFacultad);

        /// <summary>
        /// Borrar las Facultades por rol
        /// </summary>
        /// <param name="idRol"></param>
        /// <returns></returns>
        ResultadoOperacionDto BorrarFacultadesPorRol(long idRol);
        /// <summary>
        /// Obtienen los roles asignados por grupo
        /// </summary>
        /// <param name="idGrupo"></param>
        /// <returns></returns>
        ResultadoOperacionDto ObtenerRolesAsignadosPorGrupoResultado(long idGrupo);



        #endregion

        #region Facultad

        /// <summary>
        ///     Guarda la Facultad en la BD
        /// </summary>
        /// <param name="facultad"></param>
        /// <returns></returns>
        ResultadoOperacionDto GuardarFacultad(Facultad facultad);

        /// <summary>
        ///     Obtiene  la Facultad por su identificador
        /// </summary>
        /// <param name="idFacultad"></param>
        /// <returns></returns>
        ResultadoOperacionDto ObtenerFacultadPorId(long idFacultad);

        /// <summary>
        ///     Borra la facultas por su identificador
        /// </summary>
        /// <param name="idFacultad"></param>
        /// <returns></returns>
        ResultadoOperacionDto BorrarFacultad(long idFacultad);

        /// <summary>
        ///     Obtiene todas las facultades existentes
        /// </summary>
        /// <returns></returns>
        ResultadoOperacionDto ObtenerFacultades();

        /// <summary>
        ///     Obtienen las facultades por categoria
        /// </summary>
        /// <param name="idCategoria"></param>
        /// <returns></returns>
        ResultadoOperacionDto ObtenerFacultadesporCategoria(long idCategoria);

        #endregion

        #region CategoriaFacultad

        /// <summary>
        ///     Guarda la Categoria facultad en la BD
        /// </summary>
        /// <param name="categoriaFacultad"></param>
        /// <returns></returns>
        ResultadoOperacionDto GuardarCategoriaFacultad(CategoriaFacultad categoriaFacultad);

        /// <summary>
        ///     Obtiene la Categoria Facultas por identificador
        /// </summary>
        /// <param name="idCategoriaFacultad"></param>
        /// <returns></returns>
        ResultadoOperacionDto ObtenerCategoriaFacultadPorId(long idCategoriaFacultad);

        /// <summary>
        ///     Borra la Categoria Facultad por su identificador
        /// </summary>
        /// <param name="idCategoriaFacultad"></param>
        /// <returns></returns>
        ResultadoOperacionDto BorrarCategoriaFacultad(long idCategoriaFacultad);

        /// <summary>
        ///     Obtiene las categorias exitentess
        /// </summary>
        /// <returns></returns>
        ResultadoOperacionDto ObtenerCategoriasFacultad();

        #endregion

        #region Grupo Rol
        /// <summary>
        /// Asigna los roles grupos usuario 
        /// </summary>
        /// <param name="roles">Listado de roles</param>
        /// <param name="idGrupo">Identificador del grupo</param>
        /// <returns>Resultado Operacion de asignacion de roles al grupo</returns>
        ResultadoOperacionDto AsignarRolesGrupo(IList<Rol> roles, long idGrupo);

        /// <summary>
        /// Obtener roles asignados por grupo
        /// </summary>
        /// <param name="idGrupo">Identificador del grupo</param>
        /// <returns>Listado de roles asignados al grupo</returns>
        IList<Rol> ObtenerRolesAsignadosPorGrupo(long idGrupo);

        /// <summary>
        /// Obtener roles no asignados al grupo
        /// </summary>
        /// <param name="idGrupo">Identificador del grupo</param>
        /// <returns>Listado de roles no asignados al grupo</returns>
        IList<Rol> ObtenerRolesNoAsignadosPorGrupo(long idGrupo);

        #endregion

    }
}