using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using AbaxXBRLCore.Util;

namespace AbaxXBRLCore.Common.Dtos
{
    /// <summary>
    /// DTO que contiene la información de las caracteristicas de seguridad para la autenticacion.
    /// <author>Christian E. Badillo - 2H Software</author>
    /// <version>1.0</version>
    /// </summary>
    public class SeguridadDto
    {

        /// <summary>
        /// Expresion regular del password
        /// </summary>
        public string ExpresionValidacionPassword {get;set;}

        /// <summary>
        /// Mensaje a desplegar.
        /// </summary>
        public string MensajeValidacion { get; set; }

        /// <summary>
        /// Numero valido de autentificaciones.
        /// </summary>
        public string NumeroAutentificaciones { get; set; }

        /// <summary>
        /// Numero de dias que es valida la contraseña.
        /// </summary>
        public string NumeroDiasValidos { get; set; }
        /// <summary>
        /// Numero de autenticaciones restantes apartir del cual enviara el mensaje de modificacion
        /// </summary>
        public string NumeroAutentiticacionesValidasAntesModificacion { get; set; }

        /// <summary>
        /// Numero de dias restantes apartir del cual enviara el mensaje de modificacion
        /// </summary>
        public string NumeroDiasValidosAntesModificacion { get; set; }

        /// <summary>
        /// Numero de passwords que forman un ciclo en el que no se puede reutilizar un password
        /// </summary>
        public string NumeroPasswordCiclo { get; set; }

        /// <summary>
        /// Genera la cadena encriptada
        /// </summary>
        /// <param name="password"></param>
        /// <returns></returns>
        public static String EncriptarPassword(String password)
        {
            string salt = PasswordHashGenerator.CreateSalt(PasswordHashGenerator.TAMANIO_NUMERO_SALT);
            return PasswordHashGenerator.CreatePasswordHash(password, salt);
        }


    }
}
