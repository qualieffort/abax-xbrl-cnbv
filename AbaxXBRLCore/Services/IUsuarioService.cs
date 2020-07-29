#region

using System;
using System.Collections.Generic;
using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Entities;

#endregion

namespace AbaxXBRLCore.Services
{
    /// <summary>
    ///     Interfaz del Servicio base para operaciones del Usuario
    ///     <author>Eric Alan González Fuentes</author>
    ///     <version>1.0</version>
    /// </summary>
    public interface IUsuarioService
    {
        /// <summary>
        ///     Inserta o Actualiza al usuairo segun sea el caso.
        /// </summary>
        /// <param name="usuario">Entidad usuario que se va a guardar</param>
        /// <param name="idUsuarioExec"></param>
        /// <param name="url">Dirección web de abax</param>
        /// <param name="correoEnvio">Dirección de correo en la cual sera enviado un correo para confirmar su registro</param>
        /// <returns>Regresa instacia de ResultadoOperacionDto que indica el status de la operacion</returns>
        ResultadoOperacionDto GuardarUsuario(Usuario usuario, long idUsuarioExec, string url,string correoEnvio);

        /// <summary>
        /// Verifica si el Usuario es de la Empresa
        /// </summary>
        /// <param name="idEmpresa"></param>
        /// <param name="idUsuario"></param>
        /// <returns></returns>
        ResultadoOperacionDto VerificarUsuarioEsEmpresa(long idEmpresa, long idUsuario);

        /// <summary>
        ///     Obtiene al usuario por su identificador
        /// </summary>
        /// <param name="idUsuario">Identificador del Usuario</param>
        /// <returns>Regresa la instacia de usuario encontrado</returns>
        ResultadoOperacionDto ObtenerUsuarioPorId(long idUsuario);

        /// <summary>
        ///     Borra al usuario por identificador
        /// </summary>
        /// <param name="idUsuario">Identificador del Usuario</param>
        /// <param name="idUsuarioExec"></param>
        ResultadoOperacionDto BorrarUsuario(long idUsuario, long idUsuarioExec);

        /// <summary>
        ///     Obtiene toda la colección de usuarios.
        /// </summary>
        /// <returns>Coleccion de Usuarios</returns>
        ResultadoOperacionDto ObtenerUsuarios();

        /// <summary>
        ///     Obtiene al usuario por correo.
        /// </summary>
        /// <param name="usuario"></param>
        /// <returns>Regresa la instacia de usuario encontrado</returns>
        ResultadoOperacionDto BuscarUsuario(String usuario);

        /// <summary>
        /// BorraLogicamente el Usuario de la BD
        /// </summary>
        /// <param name="idUsuario"></param>
        /// <param name="idUsuarioExec"></param>
        /// <returns></returns>
        ResultadoOperacionDto BorrarLogicamenteUsuario(long idUsuario, long idUsuarioExec);

        /// <summary>
        /// Carga las facultades del usuario
        /// </summary>
        /// <param name="idUsuario"></param>
        /// <returns></returns>
        ResultadoOperacionDto CargarFacultades(long idUsuario, long idEmpresa);
        /// <summary>
        /// Elimina los grupos de usuario y los roles de usuario que ya no pertenecen a alguna empresa
        /// del usuario
        /// </summary>
        /// <param name="idUsuario">ID del usuario a examinar</param>
        /// <param name="idUsuarioExec">ID del usuario que ejecuta la acción</param>
        /// <returns></returns>
        ResultadoOperacionDto BorrarGruposYRolesNoAsociadosAEmpresaUsuario(long idUsuario, long idUsuarioExec);

        #region GrupoUsuarios

        /// <summary>
        ///     Guarda Grupo de Usuario en la BD
        /// </summary>
        /// <param name="grupoUsuarios"></param>
        /// <param name="idUsuarioExec"></param>
        /// <returns></returns>
        ResultadoOperacionDto GuardarGrupoUsuarios(GrupoUsuarios grupoUsuarios, long idUsuarioExec);

        /// <summary>
        ///     Obtiene el Grupo de Usuarios por identificador
        /// </summary>
        /// <param name="idGrupoUsuarios"></param>
        /// <returns></returns>
        ResultadoOperacionDto ObtenerGrupoUsuariosPorId(long idGrupoUsuarios);

        /// <summary>
        ///     Borra el Grupo de Usuarios por el identificador de la entidad
        /// </summary>
        /// <param name="idGrupoUsuarios"></param>
        /// <param name="idUsuarioExec"></param>
        /// <returns></returns>
        ResultadoOperacionDto BorrarGrupoUsuarios(long idGrupoUsuarios, long idUsuarioExec);

        /// <summary>
        ///     Obtienen todos los Grupo de Usuarios
        /// </summary>
        /// <returns></returns>
        ResultadoOperacionDto ObtenerGruposUsuarios(long idEmpresa);

        ResultadoOperacionDto ObtenerUsuariosPorEmisorayNombre(long? idEmpresa, String nombre);

        ResultadoOperacionDto ValidarGrupoEmpresa(long? idGrupo, long? idEmpresa);

        #endregion

        #region GrupoUsuarioRol

        /// <summary>
        ///     Guarda el Rol del Grupo de Usuarios en la BD
        /// </summary>
        /// <param name="grupoUsuariosRol"></param>
        /// <param name="idUsuarioExec"></param>
        /// <returns></returns>
        ResultadoOperacionDto GuardarGrupoUsuariosRol(GrupoUsuariosRol grupoUsuariosRol, long idUsuarioExec);

       

        /// <summary>
        ///     Obtiene el Rol del Grupo de Usuarios por su identificador
        /// </summary>
        /// <param name="idGrupoUsuariosRol"></param>
        /// <returns></returns>
        ResultadoOperacionDto ObtenerGrupoUsuariosRolPorId(long idGrupoUsuariosRol);

        /// <summary>
        ///     Borra el Grupo de usuarios del Rol por su identificador
        /// </summary>
        /// <param name="idGrupoUsuariosRol"></param>
        /// <param name="idUsuarioExec"></param>
        /// <returns></returns>
        ResultadoOperacionDto BorrarGrupoUsuariosRol(long idGrupoUsuariosRol, long idUsuarioExec);

        /// <summary>
        ///     Obtiene todos los grupos de Usario por Rol
        /// </summary>
        /// <returns></returns>
        ResultadoOperacionDto ObtenerGruposUsuariosRol();

        /// <summary>
        ///     Obtienen todos los grupos usuarios rol filtrados por idgrupoUsuario e IdRol
        /// </summary>
        /// <param name="idGrupoUsuario"></param>
        /// <param name="idRol"></param>
        /// <returns></returns>
        ResultadoOperacionDto ObtenerGrupoUsuariosRolPorIdRolIdGrupoUsuario(long? idGrupoUsuario, long? idRol);

        /// <summary>
        ///     Obtiene los GruposUsuarios por idRol
        /// </summary>
        /// <param name="idRol"></param>
        /// <returns></returns>
        ResultadoOperacionDto ObtenerGrupoUsuariosRolPorIdRol(long? idRol);

        /// <summary>
        ///     Obtienen los Grupos de Usuarios Rol por IdGrupoUsuario
        /// </summary>
        /// <param name="idGrupoUsuario"></param>
        /// <returns></returns>
        ResultadoOperacionDto ObtenerGrupoUsuariosRolPorIdGrupoUsuario(long? idGrupoUsuario);

        /// <summary>
        /// Borrado Logico de Grupo Usuario
        /// </summary>
        /// <param name="idGrupoUsuarios"></param>
        /// <param name="idUsuarioExec"></param>
        /// <returns></returns>
        ResultadoOperacionDto BorrarGrupoUsuariosLogico(long idGrupoUsuarios, long idUsuarioExec);
        /// <summary>
        ///Borra todos los roles del grupos
        /// </summary>
        /// <param name="idGrupo"></param>
        /// <param name="idUsuarioExec"></param>
        /// <returns></returns>
        ResultadoOperacionDto BorrarGrupoUsuariosRolPorIdGrupo(long idGrupo, long idUsuarioExec);
        #endregion

        #region UsuarioGrupo

        /// <summary>
        ///     Guarda el Grupo de Usuarios en la BD
        /// </summary>
        /// <param name="usuarioGrupo"></param>
        /// <param name="idUsuarioExec"></param>
        /// <returns></returns>
        ResultadoOperacionDto GuardarUsuarioGrupo(UsuarioGrupo usuarioGrupo);


        ResultadoOperacionDto GuardarUsuarioGrupoBulk(List<UsuarioGrupo> usuarioGrupo, long idUsuarioExec);

        

        /// <summary>
        ///     Obtienen el Grupo de Usuario por su identificador
        /// </summary>
        /// <param name="idUsuarioGrupo"></param>
        /// <returns></returns>
        ResultadoOperacionDto ObtenerUsuarioGrupoPorId(long idUsuarioGrupo);

        /// <summary>
        ///     Borra el Grupo de Usuarios
        /// </summary>
        /// <param name="idUsuarioGrupo"></param>
        /// <param name="idUsuarioExec"></param>
        /// <returns></returns>
        ResultadoOperacionDto BorrarUsuarioGrupo(long idUsuarioGrupo);

        /// <summary>
        ///     Obtiene todos los Grupos de Usuarios
        /// </summary>
        /// <returns></returns>
        ResultadoOperacionDto ObtenerUsuarioGrupos();

        /// <summary>
        ///     Obtiene todos los grupos de usuarios por idUsuario e IdGrupoUsuario
        /// </summary>
        /// <param name="idUsuario"></param>
        /// <param name="idGrupoUsuario"></param>
        /// <returns></returns>
        ResultadoOperacionDto ObtenerUsuarioGrupoPorUsuarioGrupoUsuario(long? idUsuario, long? idGrupoUsuario);

        /// <summary>
        /// Borrar a todos usuarios asignados al grupo
        /// </summary>
        /// <param name="idGrupo"></param>
        /// <param name="idUsuarioExec"></param>
        /// <returns></returns>
        ResultadoOperacionDto BorrarUsuarioGrupopPorGrupo(long idGrupo);
        #endregion

        #region UsuarioRol

        /// <summary>
        ///     Guarda el Usuario Rol en la BD
        /// </summary>
        /// <param name="usuarioRol"></param>
        /// <param name="idUsuarioExec"></param>
        /// <returns></returns>
        ResultadoOperacionDto GuardarUsuarioRol(UsuarioRol usuarioRol, long idUsuarioExec);

     

        /// <summary>
        ///     Obtienen el Usuario Rol por su identificador
        /// </summary>
        /// <param name="idUsuarioRol"></param>
        /// <returns></returns>
        ResultadoOperacionDto ObtenerUsuarioRolPorId(long idUsuarioRol);

        /// <summary>
        ///     Borra el Usuario Rol por su identificador
        /// </summary>
        /// <param name="idUsuarioRol"></param>
        /// <param name="idUsuarioExec"></param>
        /// <returns></returns>
        ResultadoOperacionDto BorrarUsuarioRol(long idUsuarioRol, long idUsuarioExec);

        /// <summary>
        ///     Obtiene los roles de usuarios
        /// </summary>
        /// <returns></returns>
        ResultadoOperacionDto ObtenerUsuariosRol();


        /// <summary>
        ///     Obtienene los roles de Usuario por idUsuariio y/o idRol
        /// </summary>
        /// <param name="idUsuario"></param>
        /// <param name="idRol"></param>
        /// <returns></returns>
        ResultadoOperacionDto ObtenerUsuariosRolPorUsuarioRol(long? idUsuario, long? idRol);

        /// <summary>
        /// Borra los roles asociados al usuario
        /// </summary>
        /// <param name="idUsuarioRol"></param>
        /// <param name="idUsuarioExec"></param>
        /// <returns></returns>
        ResultadoOperacionDto BorrarRolesUsuario(long idUsuarioRol, long idUsuarioExec);

        #endregion

        #region UsuarioEmpresa

        /// <summary>
        /// Guardar la realacion Usuario-Empresa en la BD
        /// </summary>
        /// <param name="usuarioEmpresa"></param>
        /// <param name="idUsuarioExec"></param>
        /// <returns></returns>
        ResultadoOperacionDto GuardarUsuarioEmpresa(UsuarioEmpresa usuarioEmpresa, long idUsuarioExec);

      
        /// <summary>
        /// OBtiene la realacion UsuarioEmpresa por su identificador
        /// </summary>
        /// <param name="idUsuarioEmpresa"></param>
        /// <returns></returns>
        ResultadoOperacionDto ObtenerUsuarioEmpresaPorId(long idUsuarioEmpresa);

        /// <summary>
        /// Borrar la relacion Usuario Empresa por su identificador
        /// </summary>
        /// <param name="idUsuarioEmpresa"></param>
        /// <param name="idUsuarioExec"></param>
        /// <returns></returns>
        ResultadoOperacionDto BorrarUsuarioEmpresa(long idUsuarioEmpresa);

        /// <summary>
        /// Obtiene las relaciones Usuario Empresa.
        /// </summary>
        /// <returns></returns>
        ResultadoOperacionDto ObtenerUsuarioEmpresas();

        /// <summary>
        /// Obtiene las empresas filtradas por IdEmpresa y/o IdUsuario
        /// </summary>
        /// <param name="idEmpresa"></param>
        /// <param name="idUsuario"></param>
        /// <returns></returns>
        ResultadoOperacionDto ObtenerEmpresasPorIdEmpresaIdUsuario(long? idEmpresa, long? idUsuario);

        /// <summary>
        /// Activa al Usuario
        /// </summary>
        /// <param name="idUsuario"></param>
        /// <returns></returns>
        ResultadoOperacionDto Activar(long idUsuario, long idUsuarioExec);

        /// <summary>
        /// Desactiva al usuario
        /// </summary>
        /// <param name="idUsuario"></param>
        /// <returns></returns>
        ResultadoOperacionDto Bloquear(long idUsuario, long idUsuarioExec);

        /// <summary>
        /// Desactiva el Usuario
        /// </summary>
        /// <param name="idUsuario"></param>
        /// <returns></returns>
        ResultadoOperacionDto Desactivar(long idUsuario, long idUsuarioExec);

        /// <summary>
        /// /Desbloquea al usuario
        /// </summary>
        /// <param name="idUsuario"></param>
        /// <returns></returns>
        ResultadoOperacionDto Desbloquear(long idUsuario, long idUsuarioExec);

        /// <summary>
        /// Borrar todas las empresas relacionadas con el usuario
        /// </summary>
        /// <param name="idUsuario"></param>
        /// <returns></returns>
        ResultadoOperacionDto BorrarEmpresasUsuario(long idUsuario);
         
        /// <summary>
        /// Obtiene el número de Roles para un usuario
        /// </summary>
        /// <param name="idUsuario">El identificador del usuario a consultar</param>
        /// <returns>EL numero de roles</returns>
        int CountRolesPorUsuario(long idUsuario);

        /// <summary>
        /// Obtiene el número de Empresas para un usuario
        /// </summary>
        /// <param name="idUsuario">El identificador del usuario a consultar</param>
        /// <returns>EL numero de empresas</returns>
        int CountEmpresasPorUsuario(long idUsuario);

        #endregion
    
        /// <summary>
        /// Actualiza el token de sesión del usuario.
        /// </summary>
        /// <param name="idUsuario">Identificador del usuario.</param>
        /// <param name="token">Valor del token que se asignará.</param>
        void ActualizaUsuarioToken(long idUsuario, string token);

        /// <summary>
        /// Obtiene el token de un usuario en particular.
        /// </summary>
        /// <param name="idUsuario">Identificador del usuario.</param>
        /// <returns>Token del usuario.</returns>
        string GetTokenUsuario(long idUsuario);

        /// <summary>
        /// Retorna la lista de fideicomisos.
        /// </summary>
        /// <returns>Lista con las claves de los fideicomisos.</returns>
        List<string> ObtenListaFideicomisos(string nombreCortoEmpresa);
    }
}