using System;
using System.Collections.Generic;
using System.Diagnostics.Eventing.Reader;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Common.Dtos
{
    /// <summary>
    /// Data Transfer Object el cual representa la información de auditoría que será registrada en la bitácora de la aplicación.
    /// <author>José Antonio Huizar Moreno</author>
    /// <version>1.0</version>
    /// </summary>
    public class InformacionAuditoriaDto
    {
        /// <summary>
        /// La cadena de texto que será almacenada en la bitácora la cual contiene una descripción de la operación realizada en el sistema.
        /// </summary>
        public string Registro { get; set; }

        /// <summary>
        /// El identificador del módulo en el cual se realizó la acción sujeta a auditoría
        /// </summary>
        public long  Modulo { get; set; }


        /// <summary>
        /// El identificador de la empresa realizada en el modulo
        /// </summary>
        public long? Empresa { get; set; }

        /// <summary>
        /// El identificador de la acción realizada en el módulo
        /// </summary>
        public long Accion { get; set; }

        /// <summary>
        /// La fecha en que se realizó la acción sujeta a auditoría
        /// </summary>
        public DateTime Fecha { get; set; }

        /// <summary>
        /// El identificador del usuario que realió la ácción sujeta a auditoría
        /// </summary>
        public long? IdUsuario { get; set; }


        public InformacionAuditoriaDto()
        {
        }

        public InformacionAuditoriaDto(long idUsuario, long accion, long modulo, string registro, List<object> param, long? empresa = null)
        {
            IdUsuario = idUsuario;
            Modulo = modulo;
            Accion = accion;
            Fecha = DateTime.Now;
            Registro = String.IsNullOrEmpty(registro) ? String.Empty : param == null ? registro :  String.Format(registro, param.ToArray());
            Empresa = empresa;
        }

        public InformacionAuditoriaDto(long idUsuario, long accion, long modulo, string registro, long? empresa = null)
        {
            IdUsuario = idUsuario;
            Modulo = modulo;
            Accion = accion;
            Fecha = DateTime.Now;
            Registro = registro;
            Empresa = empresa;
        }
    }
}
