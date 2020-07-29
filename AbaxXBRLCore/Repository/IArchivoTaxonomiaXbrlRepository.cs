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
    public interface IArchivoTaxonomiaXbrlRepository : IBaseRepository<ArchivoTaxonomiaXbrl>
    {
        /// <summary>
        /// Obtiene una taxonomía mediante su identificador.
        /// </summary>
        /// <param name="idTaxonomiaXbrl"></param>
        /// <returns></returns>
        ArchivoTaxonomiaXbrl Obtener(long idTaxonomiaXbrl);

        /// <summary>
        /// Inserta o actualiza una taxonomia xbrl
        /// </summary>
        /// <param name="taxonomiaXbrl"></param>
        /// <returns></returns>
        ResultadoOperacionDto Guardar(ArchivoTaxonomiaXbrl taxonomiaXbrl);

        /// <summary>
        /// Borra una taxonomia mediante su identificador.
        /// </summary>
        /// <param name="idTaxonomiaXbrl"></param>
        void Borrar(long idTaxonomiaXbrl);
    }
}
