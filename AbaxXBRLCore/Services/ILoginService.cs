#region

using System;
using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Entities;
using AbaxXBRLCore.Viewer.Application.Dto;

#endregion

namespace AbaxXBRLCore.Services
{
    /// <summary>
    ///     Interface del Servicio  para el Login en la aplicación.
    ///     <author>Eric Alan González Fuentes</author>
    ///     <version>1.0</version>
    /// </summary>
    public interface ILoginService
    {
        /// <summary>
        ///     Verifica el usuario y password en la BD para operacion de Login.
        /// </summary>
        /// <param name="usuario">correo electronico del usuario</param>
        /// <param name="password">password de usuario</param>
        /// <returns>Regresa la instacia de usuario encontrado</returns>
        ResultadoOperacionDto AutentificarUsuario(String usuario, String password);


        /// <summary>
        ///     Verifica el usuario y password en la BD para operacion de Login.
        /// </summary>
        /// <param name="usuario">usuario ldap que desea enviar</param>
        /// <returns>Regresa la instacia de usuario encontrado</returns>
        ResultadoOperacionDto ObtenerUsuarioPorNombre(String usuario);

        /// <summary>
        ///     Envio de correo por olvido de contraseña
        /// </summary>
        /// <param name="correo"></param>
        /// <param name="url">Url desde donde se solicita el envio.</param>
        /// <returns></returns>
        ResultadoOperacionDto EnvioCorreoOlvidoContrasena(String correo,String url);

        /// <summary>
        ///     Obtiene las politicas del correo.
        /// </summary>
        /// <returns></returns>
        ResultadoOperacionDto ObtenerParametrosConfiguracionSeguridad();

        /// <summary>
        ///     Valida los dias autentificados del usuario
        /// </summary>
        /// <param name="seguridad"></param>
        /// <param name="usuario"></param>
        /// <returns></returns>
        ResultadoOperacionDto ValidarDiasAutenticaciones(SeguridadDto seguridad, Usuario usuario);

        /// <summary>
        ///     Registra el acceso del usuario
        /// </summary>
        /// <param name="usuario"></param>
        /// <param name="seguridad"></param>
        /// <param name="isExitoso"></param>
        /// <returns></returns>
        ResultadoOperacionDto RegistrarAcceso(Usuario usuarioDto, SeguridadDto seguridad, bool isExitoso);

        /// <summary>
        ///     Verifica el password encriptado
        /// </summary>
        /// <param name="usuarioDTO"></param>
        /// <param name="password"></param>
        /// <returns></returns>
        ResultadoOperacionDto VerificaPasswordEncriptado(Usuario usuarioDTO, string password);

        /// <summary>
        ///     Valida el pasword contra una expresion regular
        /// </summary>
        /// <param name="objSeguridadDTO"></param>
        /// <param name="password"></param>
        /// <returns></returns>
        ResultadoOperacionDto ValidarPasswordContraExpresionRegular(SeguridadDto objSeguridadDTO, string password);

        /// <summary>
        ///     Verifica si el password ya fue usado
        /// </summary>
        /// <param name="usuario"></param>
        /// <param name="password"></param>
        /// <returns></returns>
        ResultadoOperacionDto VerificaPasswordYaUsado(Usuario usuario, string password);

        /// <summary>
        ///     Modifica el password del usuario
        /// </summary>
        /// <param name="usuario"></param>
        /// <param name="objSeguridadDTO"></param>
        /// <param name="password"></param>
        /// <returns></returns>
        ResultadoOperacionDto ModificarPassword(ref Usuario usuario, SeguridadDto objSeguridadDTO, string password);

        /// <summary>
        /// Metodo para agregar en bitacora de auditoria el usuario y empresa que realizo la autentificacion correcta
        /// </summary>
        /// <param name="idUsuario">Identificador unico del usuario</param>
        /// <param name="idEmisora">Identificador de la empresa emisora</param>
        /// <returns>Resultado operacion de la solicitud</returns>
        ResultadoOperacionDto RegistrarAccesoAuditoria(long idUsuario, long idEmisora);

    }
}