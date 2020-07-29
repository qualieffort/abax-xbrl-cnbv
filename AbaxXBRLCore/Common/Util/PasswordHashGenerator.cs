using System;
using System.Linq;
using System.Security.Cryptography;
using System.Web.Security;

namespace AbaxXBRLCore.Util
{
    /// <summary>
    /// Clase útil para la generación de hash para passwords, así como para autenticar un password.
    /// <author>José Antonio Huizar Moreno</author>
    /// <version>1.0</version>
    /// </summary>
    public class PasswordHashGenerator
    {
        /// <summary>
        /// Número recomendado de dígitos para la cadena SALT utilizada para generar el HASH de los passwords.
        /// </summary>
        public const int TAMANIO_NUMERO_SALT = 5;

        /// <summary>
        /// Tamaño de la cadena resultante de la codificación en Base 64 de la cadena SALT.
        /// </summary>
        public const int TAMANIO_B64_NUMERO_SALT = 8;

        /// <summary>
        /// Crea un número random de un tamaño determinado utilizando el servicio de criptografía de .Net
        /// </summary>
        /// <param name="size">el tamaño del número random en número de dígitos</param>
        /// <returns>una cadena con el número SALT para las contraseñas</returns>
        public static string CreateSalt(int size)
        {

            RNGCryptoServiceProvider rng = new RNGCryptoServiceProvider();
            byte[] buff = new byte[size];
            rng.GetBytes(buff);
            return Convert.ToBase64String(buff, 0, 5);
        }

        /// <summary>
        /// Crea el hash que deberá ser almacenado utilizando el password proporcionado por el usuario y una cadena SALT
        /// </summary>
        /// <param name="pwd">la contraseña proporcionada por el usuario.</param>
        /// <param name="salt">la cadena SALT para generar el hash del password del usuario.</param>
        /// <returns></returns>
        public static string CreatePasswordHash(string pwd, string salt)
        {
            string saltAndPwd = String.Concat(pwd, salt);
            string hashedPwd = FormsAuthentication.HashPasswordForStoringInConfigFile(saltAndPwd, "SHA1");
            hashedPwd = String.Concat(hashedPwd, salt);
            return hashedPwd;
        }


        /// <summary>
        /// Funcion para generar contraseña aleatoria
        /// </summary>
        /// <returns></returns>
        public static String GenerarPassword()
        {
            var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            var random = new Random();
            var result = new string(
                Enumerable.Repeat(chars, 8)
                          .Select(s => s[random.Next(s.Length)])
                          .ToArray());
            return result;
        }
    }
}