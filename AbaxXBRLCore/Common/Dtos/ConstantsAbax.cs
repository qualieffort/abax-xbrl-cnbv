using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Common.Dtos
{
    /// <summary>
    /// Contiene las constantes que utilizara la aplicación.
    /// <author>Eric Alan Gonzalez Fuentes</author>
    /// <version>1.0</version>
    /// </summary>
    public class ConstantsAbax
    {
        /// <summary>
        /// Ruta del template html para correo del usuario
        /// </summary>
        public const String TemplateUsuario = @"\Templates\Usuario.html";


        /// <summary>
        /// Ruta del template html para correo del usuario
        /// </summary>
        public const String TemplateBienvenida = @"\Templates\Bienvenida.html";

        /// <summary>
        /// Ruta del template para usuarios que esten en un directorio activo html para correo del usuario
        /// </summary>
        public const String TemplateBienvenidaLDAP = @"\Templates\BienvenidaLDAP.html";
        
        /// <summary>
        /// Ruta del template para el correo de bienvenida para usuarios SSO.
        /// </summary>
        public const String TemplateBienvenidaSSO = @"\Templates\BienvenidaSSO.html";
        
        /// <summary>
        /// Correo origen para envio de correos de la aplicación
        /// </summary>
        public const String CorreoAdmin = @"abax@xbrl.mx";

        /// <summary>
        /// Nombre del mensaje error
        /// </summary>
        public const String MensajeError = "MensajeError";

        /// <summary>
        /// Nombde del mensaje exito
        /// </summary>
        public const String MensajeExito = "MensajeExito";
        /// <summary>
        /// Ruta de la imagen con el logo de Abax.
        /// </summary>
        public const String LogoAbaxPath = @"\img\logo_abax_horizontal.png";
        /// <summary>
        /// Parametro que indica si se debe desactivar la facultad para registrar nuevas empresas desde la aplciación.
        /// </summary>
        public static bool DESHABILITAR_CREAR_EMPRESAS = false;
    }
}
