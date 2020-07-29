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
    public interface ITaxonomiaXbrlRepository:IBaseRepository<TaxonomiaXbrl>
    {
        /// <summary>
        /// Obtiene todas las taxonomias xbrl.
        /// </summary>
        /// <returns></returns>
        List<TaxonomiaXbrl> Obtener();

        /// <summary>
        /// Obtiene las taxonomias xbrl que cumplan con el criterio de busqueda
        /// </summary>
        /// <param name="search"></param>
        /// <returns></returns>
        IQueryable<TaxonomiaXbrl> Obtener(string search);

        /// <summary>
        /// Obtiene una taxonomía mediante su identificador.
        /// </summary>
        /// <param name="idTaxonomiaXbrl"></param>
        /// <returns></returns>
        TaxonomiaXbrl Obtener(long idTaxonomiaXbrl);

        /// <summary>
        /// Obtiene las taxonomias xbrl asignadas a un tipo de empresa.
        /// </summary>
        /// <returns></returns>
        List<TaxonomiaXbrl> ObtenerAsignadas(long idTipoEmpresa);

        /// <summary>
        /// Inserta o actualiza una taxonomia xbrl
        /// </summary>
        /// <param name="taxonomiaXbrl"></param>
        /// <returns></returns>
        ResultadoOperacionDto Guardar(TaxonomiaXbrl taxonomiaXbrl);

        /// <summary>
        /// Borra una taxonomia mediante su identificador.
        /// </summary>
        /// <param name="idTaxonomiaXbrl"></param>
        void Borrar(long idTaxonomiaXbrl);

        /// <summary>
        /// Obtiene la periodicidad de la taxonomía dado su espacio de nombres principal.
        /// </summary>
        /// <param name="espacioNombresPrincipal">Espacio de nombres principal de la taxonomía.</param>
        /// <returns>ResultadoOperacionDto con un objeto PeriodicidadReporte en informacioón extra cuando exista la taxonomía, en caso contrario será null.</returns>
        ResultadoOperacionDto ObtenerPeriodicidadReportePorEspacioNombresPrincipal(string espacioNombresPrincipal);
    }
}
