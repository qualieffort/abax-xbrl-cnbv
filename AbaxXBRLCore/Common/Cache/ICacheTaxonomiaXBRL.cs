using AbaxXBRLCore.Viewer.Application.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Common.Cache
{
    /// <summary>
    /// Define la funcionalidad que debe tener un compoente para el caché de varias taxonomías XBRL
    /// <author>Emigdio Hernandez</author>
    /// <version>1.0</version>
    /// </summary>
    public interface ICacheTaxonomiaXBRL
    {
        /// <summary>
        /// Realiza cualquier tipo de actividad de inicialización del caché
        /// </summary>
        void init();

        /// <summary>
        /// Agrega al caché de taxonomías una nueva taxonomía representada por su DTO.
        /// Las taxonomías se guardan en el caché en función de su conjunto de dts de puntos de entrada.
        /// Indica si el caché de taxonomías fue actualizado, si es la primera vez que se agrega esa taxonomía se retorna false, si 
        /// la taxonomía ya existía y fue reemplazada se regresa un true
        /// </summary>
        /// <param name="dtsTaxonomia">Lista de puntos de entrada para la taxonomía</param>
        /// <param name="taxonomia">Taxonomía a agregar al caché</param>
        /// <returns>True si la taxonomía ya había sido agregada antes y fue reemplazada, false si es la primera vez que se agrega</returns>
        Boolean AgregarTaxonomia(IList<DtsDocumentoInstanciaDto> dtsTaxonomia,TaxonomiaDto taxonomia);
        /// <summary>
        /// Obtiene del caché de taxonomías la taxonomía representada por el conjunto de puntos de entrada enviados como parámetro.
        /// Retorna null si no existe la taxonomía en el caché
        /// </summary>
        /// <param name="dtsTaxonomia">Archivos de punto de entrada para la taxonomía</param>
        /// <returns>Objeto de taxonomía del caché</returns>
        TaxonomiaDto ObtenerTaxonomia(IList<DtsDocumentoInstanciaDto> dtsTaxonomia);
        /// <summary>
        /// Obtiene del caché de taxonomías la taxaonomía representada por el conjunto de puntos de entrada enviados como parámetro,
        /// la taxonomía se retorna en formato Json serializado.
        /// Retorna null si no existe la taxonomía en el caché
        /// </summary>
        /// <param name="dtsTaxonomia">Archivos de punto de entrada para la taxonomía</param>
        /// <returns>Cadena en formato Json que representa a la taxonomía del caché</returns>
        String ObtenerTaxonomiaJson(IList<DtsDocumentoInstanciaDto> dtsTaxonomia);

        /// <summary>
        /// Obtiene las diferentes taxonomías registrada en el caché
        /// </summary>
        /// <returns></returns>
        ICollection<TaxonomiaDto> ObtenerListaTaxonomias();
    }
}
