using AbaxXBRLCore.Viewer.Application.Dto.Angular;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AbaxXBRLWeb.Models
{
    public class Session
    {
        /// <summary>
        /// Identificador de la empresa.
        /// </summary>
        public long IdEmpresa { get; set; }
        /// <summary>
        /// Dto con la información del usuario en sesión.
        /// </summary>
        public UsuarioDto Usuario { get; set; }
        /// <summary>
        /// Lista de Dto con los datos de las facultades del usuario.
        /// </summary>
        public List<FacultadDto> Facultades { get; set; }
        /// <summary>
        /// Ip a la que pertenece la sesión actual.
        /// </summary>
        public String Ip { get; set; }

        /// <summary>
        /// Indica si se trata de una autenticacion por single sign on
        /// </summary>
        public Boolean Sso { get; set; }

    }
}