using AbaxXBRLCore.Common.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Common.Application
{
    /// <summary>
    /// Interface para el manejo de los directorios activos
    /// </summary>
    /// <authot>Luis Angel Morales Gonzalez, 2H Software</authot>
    public interface IActiveDirectoryConnection
    {
        /// <summary>
        /// Valida si es un usuario valido en el active directory
        /// </summary>
        /// <param name="usuario">Nombre del usuario a validar</param>
        /// <param name="contrasenia">Contraseña del usuario a validar</param>
        /// <returns>Resultado de la operacion de la autenticación con el usuario en información extra</returns>
        ResultadoOperacionDto EsUsuarioValido(String usuario, String contrasenia);


        /// <summary>
        /// Obtiene un usuario del directorio activo
        /// </summary>
        /// <param name="usuario">Nombre del usuario que se va a obtener la información</param>
        /// <returns>Resultado de operacion del usuario</returns>
        ResultadoOperacionDto ObtenerUsuario(String usuario);
    }
}
