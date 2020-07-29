using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Common.Constants
{
    /// <summary>
    /// Constantes de las acciones auditables de las pantallas del sitio
    /// </summary>
    public static class ConstantsAccionAuditable
    {
        /// <summary>
        /// Accion auditable para el login del sitio
        /// </summary>
        public const long RegistroAutentificacion = 1;
        /// <summary>
        /// Accion auditable de inserciones  en la aplicacion
        /// </summary>
        public const long Insertar = 2;
        /// <summary>
        /// Accion auditable de actualizaciones  en la aplicacion
        /// </summary>
        public const long Actualizar = 3;
        /// <summary>
        /// Accion auditable para el borrado en la aplicacion
        /// </summary>
        public const long Borrar = 4;

        /// <summary>
        /// Accion auditable para la autentificacion del usuario en la aplicacion
        /// </summary>
        public const long AutenficacionUsuario = 5;


        /// <summary>
        /// Accion auditable para envio de correo
        /// </summary>
        public const long EnvioCorreo = 6;

        /// <summary>
        /// Acción auditable cuando se importa un documento
        /// </summary>
        public const long Importar = 7;


        /// <summary>
        ///Acción auditable cuando se exporta un documento
        /// </summary>
        public const long Exportar = 8;

        /// <summary>
        /// Acción auditable cuando consulta información
        /// </summary>
        public const long Consultar = 9;
        /// <summary>
        /// Acción auditable para la validación de documentos de instancia
        /// </summary>
        public const long Validar = 10;
    }
}
