using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using AbaxXBRLCore.Entities;
using AbaxXBRLCore.Common.Dtos;

namespace AbaxXBRLCore.Repository
{
    /// <summary>
    /// Define la funcionalidad del objeto de repository para el acceso a los datos de las 
    /// taxonomías registradas en base datos.
    /// </summary>
    /// <author>Alan Alberto Caballero Ivarra</author>
    public interface IParametroSistemaRepository:IBaseRepository<ParametroSistema>
    {
        /// <summary>
        /// Obtiene todas las taxonomias xbrl.
        /// </summary>
        /// <returns></returns>
        List<ParametroSistema> Obtener();

        /// <summary>
        /// Obtiene las taxonomias xbrl que cumplan con el criterio de busqueda
        /// </summary>
        /// <param name="search"></param>
        /// <returns></returns>
        IQueryable<ParametroSistema> Obtener(string search);

        /// <summary>
        /// Obtiene una taxonomía mediante su identificador.
        /// </summary>
        /// <param name="idParametroSistema"></param>
        /// <returns></returns>
        ParametroSistema Obtener(long idParametroSistema);

        /// <summary>
        /// Inserta o actualiza una taxonomia xbrl
        /// </summary>
        /// <param name="parametroSistema"></param>
        /// <returns></returns>
        ResultadoOperacionDto Guardar(ParametroSistema parametroSistema);
    }
}
