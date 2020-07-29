using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRL.Constantes
{
    /// <summary>
    /// Singelton para la sincronización del diccionario de tokens.
    /// </summary>
    public class TokenTaskHelper
    {
        /// <summary>
        /// Instancia única de la clase.
        /// </summary>
        private static TokenTaskHelper INSTANCE = null;

        /// <summary>
        /// Diccionario base con todos los tokens por id usuario.
        /// </summary>
        private static IDictionary<string, string> UsuarioToken = new Dictionary<string, string>();

        /// <summary>
        /// Constructor privado.
        /// </summary>
        private TokenTaskHelper() { }
        ///// <summary>
        ///// Acceso a la instancia única de la clase.
        ///// </summary>
        ///// <returns>Instancia única de la clase.</returns>
        //public static TokenTaskHelper GetInstance() 
        //{
        //    if (INSTANCE == null) 
        //    {
        //        INSTANCE = new TokenTaskHelper();
        //    }

        //    return INSTANCE;
        //}

        /// <summary>
        /// Retorna el token por el id de usuario;
        /// </summary>
        /// <param name="idUsuario"></param>
        /// <returns></returns>
        public static string GetToken(string idUsuario) 
        {
            string token = null;
            if (UsuarioToken.Keys.Contains(idUsuario))
            {
                token = UsuarioToken[idUsuario];
            }
            return token;
        }
        /// <summary>
        /// Intenta asignar el token al diccionario actual.
        /// </summary>
        /// <param name="idUsuario">Identificador del token.</param>
        /// <param name="token">Token que se pretende asignar.</param>
        /// <returns>Token asignado.</returns>
        public static string SetToken(string idUsuario, string token)
        {
            lock (UsuarioToken) 
            {
                var tokenAuxiliar = token??String.Empty;
                if (UsuarioToken.Keys.Contains(idUsuario))
                {
                    UsuarioToken[idUsuario] = tokenAuxiliar;
                }
                else 
                {
                    UsuarioToken.Add(idUsuario, tokenAuxiliar);
                }

                return tokenAuxiliar;
            }        
        }
    }
}
