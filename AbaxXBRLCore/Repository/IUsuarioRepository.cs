#region

using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Entities;

#endregion

namespace AbaxXBRLCore.Repository
{
    /// <summary>
    ///     Interface del repositorio base para operaciones con la entidad USUARIO.
    ///     <author>Eric Alan González Fuentes</author>
    ///     <version>1.0</version>
    /// </summary>
    public interface IUsuarioRepository : IBaseRepository<Usuario>
    {
        /// <summary>
        ///     Inserta/Actualiza al usuario .
        /// </summary>
        /// <param name="usuario">Entidad usuario que se va a guardar</param>
        /// <returns>Regresa instacia de ResultadoOperacionDto que indica el status de la operacion</returns>
        ResultadoOperacionDto GuardarUsuario(Usuario usuario);

        /// <summary>
        ///     Obtiene al usuario por su identificador
        /// </summary>
        /// <param name="idUsuario">Identificador del Usuario</param>
        /// <returns>Regresa la instacia de usuario encontrado</returns>
        Usuario ObtenerUsuarioPorId(long idUsuario);

        /// <summary>
        ///     Borra al usuario por identificador
        /// </summary>
        /// <param name="idUsuario">Identificador del Usuario</param>
        void BorrarUsuario(long idUsuario);

        /// <summary>
        ///     Obtiene toda la colección de usuarios.
        /// </summary>
        /// <returns>Coleccion de Usuarios</returns>
        List<Usuario> ObtenerUsuarios();

        /// <summary>
        ///     Verifica el usuario y password en la BD para operacion de Login.
        /// </summary>
        /// <param name="usuario">correo electronico del usuario</param>
        /// <param name="password">password de usuario</param>
        /// <returns>Regresa la instacia de usuario encontrado</returns>
        Usuario AutentificarUsuario(String usuario, String password);

        /// <summary>
        ///     Verifica el usuario y password en la BD para operacion de Login.
        /// </summary>
        /// <param name="usuario">correo electronico del usuario</param>
        /// <param name="password">password de usuario</param>
        /// <returns>Regresa la instacia de usuario encontrado</returns>
        Usuario LoginUsuario(String usuario, String password);

        /// <summary>
        ///     Obtiene al usuario por correo.
        /// </summary>
        /// <param name="usuario"></param>
        /// <returns>Regresa la instacia de usuario encontrado</returns>
        Usuario BuscarUsuario(String usuario);

        //Usuario BuscarUsuarioPorUuid(string uuid);      
        /// <summary>
        ///     Obtiene al usuario por uuid
        /// </summary>
        /// <param name="uuid">uuid del usuario</param>
        /// <returns>Regresa la instacia de usuario encontrado</returns>
        /// <summary>
        ///     Consulta generica para obtener usuarios por diferentes filtros.
        /// </summary>
        /// <param name="filter"></param>
        /// <param name="orderBy"></param>
        /// <param name="includeProperties"></param>
        IEnumerable<Usuario> ObtenerUsuariosPorFiltro(Expression<Func<Usuario, bool>> filter = null,
            Func<IQueryable<Usuario>, IOrderedQueryable<Usuario>> orderBy = null, string includeProperties = "");

        /// <summary>
        ///     Envio de contraseña a usuario.
        /// </summary>
        /// <param name="usuario"></param>
        /// <param name="url">Dirección web donde esta la aplicación.</param>
        /// <returns></returns>
        bool EnvioCorreoOlvidoContrasena(long IdUsuario, string url);

        /// <summary>
        /// Obtiene los usuarios por empresa
        /// </summary>
        /// <param name="idEmpresa"></param>
        /// <returns></returns>
        IEnumerable<Usuario> ObtenerUsuariosPorEmpresa(long idEmpresa);

        /// <summary>
        /// 
        /// </summary>
        /// <param name="idEmpresa"></param>
        /// <param name="nombre"></param>
        /// <returns></returns>
        IQueryable<Usuario> ObtenerUsuariosPorEmisorayNombre(long? idEmpresa, String nombre);

        /// <summary>
        /// Activa el usuario
        /// </summary>
        /// <param name="idUsuario"></param>
        void Activar(long idUsuario);
        /// <summary>
        /// Bloquea a el usuario
        /// </summary>
        /// <param name="idUsuario"></param>
        void Bloquear(long idUsuario);

        /// <summary>
        /// Desactiva el usuario
        /// </summary>
        /// <param name="idUsuario"></param>
        void DesActivar(long idUsuario);
        /// <summary>
        /// Desbloquea el usuario
        /// </summary>
        /// <param name="idUsuario"></param>
        void Desbloquear(long idUsuario);

        /// <summary>
        /// Envio de Correo de Bienvenida
        /// </summary>
        /// <param name="usuario"></param>
        /// <param name="password"></param>
        /// <param name="url">Dirección web donde esta instalada la aplicación.</param>
        /// <returns></returns>
        bool EnvioCorreoRegistro(Usuario usuario, String password, string url);

        /// <summary>
        /// Envia el correo electronico a la cuenta registrada en el LDAP
        /// </summary>
        /// <param name="usuario">Definicion del objeto del usuario</param>
        /// <param name="url">Dirección web donde esta instalada la aplicación</param>
        /// <param name="correoElectronico">Informacion de la cuenta de correo que se enviara la notificacion</param>
        /// <returns></returns>
        bool EnvioCorreoRegistroLDAP(Usuario usuario, string url,string correoElectronico);


        /// <summary>
        /// Validacion que se envia correctamente correos electronicos
        /// </summary>
        /// <param name="correoElectronico">Correo a enviar</param>
        /// <returns>Si fue posible enviar el correo</returns>
        bool EnvioCorreoPrueba(string correoElectronico);

        /// <summary>
        /// Borra de manera logica al usuario en la BD
        /// </summary>
        /// <param name="idUsuario"></param>
        void BorrardoLogicoUsuario(long idUsuario);

        /// <summary>
        /// Carga todas las facultades
        /// </summary>
        /// <param name="idUsuario"></param>
        /// <returns></returns>
        List<Facultad> LoadFacultades(long idUsuario, long idEmpresa);

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
        /// <summary>
        /// Lista de fideicomisos.
        /// </summary>
        /// <returns>Lista con la clave de los fideicomisos.</returns>
        List<string> ObtenListaFideicomisos(string nombreCortoEmpresa);

    }
}