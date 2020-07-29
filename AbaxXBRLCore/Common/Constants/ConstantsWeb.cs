using System;

namespace AbaxXBRLCore.Common.Constants
{
    /// <summary>
    ///     Clase que contiene las constantes web
    ///     <author>Eric Alan González Fuentes</author>
    ///     <version>1.0</version>
    /// </summary>
    public class ConstantsWeb
    {
        /// <summary>
        /// Nombre de Usuario en Session
        /// </summary>
        public const string UsuarioSession = "User";

        public const string UsuarioTempSession = "UserTemp";

        public const string IdUsuarioSession = "IdUsuario";

        public const string IdEmpresaSession = "IdEmpresa";

        public const String FacultadesUsuario = "Facultades";
        /// <summary>
        /// Parametro de auditoría con el identificador del usuario.
        /// </summary>
        public const String ParametroAuditoriaIdUsuarioExe = "audit_IdUsuarioExec";
        /// <summary>
        /// Parametro de auditoría con el identificador de la emisora.
        /// </summary>
        public const String ParametroAuditoriaIdEmpresaExe = "audit_IdEmpresaExce";
        /// <summary>
        /// Parametro de auditoria con la IP.
        /// </summary>
        public const String ParametroAuditoriaIpExe = "audit_IpExe";

    }
}