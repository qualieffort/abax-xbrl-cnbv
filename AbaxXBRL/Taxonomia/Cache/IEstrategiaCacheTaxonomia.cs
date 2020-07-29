using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRL.Taxonomia.Cache
{
    /// <summary>
    /// Interfaz que define el comportamiento del componente del tipo "Strategy" para la resolución
    /// de taxonomías pre-cargadas o en un mecanismo de caché.
    /// El documento de instancia utiliza alguna implementación de esta interfaz para localizar una taxonomía
    /// ya cargada en algún mecanismo de caché.
    /// Si no se localiza alguna taxonomía en caché el documento de instancia carga y procesa la taxonomía como si fuera nueva, 
    /// sin embargo no la agrega automáticamente a ningún caché, esa responsabilidad queda de lado del cliente que usa el procesador.
    /// <author>Emigdio Hernandez</author>
    /// <version>1.0</version>
    /// </summary>
    public interface IEstrategiaCacheTaxonomia
    {
        /// <summary>
        /// Busca si existe una taxonomía pre-cargada que haya sido creada mediante la importación de los mismos
        /// archivos descritos por la lista de DTS enviada como parámetro. Retorna null si no se localiza
        /// </summary>
        /// <param name="dtsDocumento">Lista de archivos referenciados desde el documento de instancia</param>
        /// <returns>Objeto con la taxonomía resuelta, null si no se encuentra por ningún mecanismo de caché o pre-carga</returns>
        ITaxonomiaXBRL ResolverTaxonomiaXbrl(IList<ArchivoImportadoDocumento> dtsDocumento);
    }
}
