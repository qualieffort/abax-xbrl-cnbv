using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using AbaxXBRL.Taxonomia.Cache;

namespace AbaxXBRL.Taxonomia.Impl
{
    /// <summary>
    /// Implementación sencilla de un cache de taxonomías en memoria
    /// </summary>
    /// <author>
    /// Emigdio Hernandez
    /// </author>
    public class EstrategiaCacheTaxonomiaMemoria: IEstrategiaCacheTaxonomia
    {
        /// <summary>
        /// Caché de taxonomía implementado en memoria
        /// </summary>
        private readonly IDictionary<IList<ArchivoImportadoDocumento>, ITaxonomiaXBRL> _cacheTaxonomias =
            new Dictionary<IList<ArchivoImportadoDocumento>, ITaxonomiaXBRL>();

        /// <summary>
        /// Agrega al caché de taxonomías una nueva taxonomía.
        /// Las taxonomías se guardan en el caché en función de su conjunto de dts de puntos de entrada.
        /// Indica si el caché de taxonomías fue actualizado, si es la primera vez que se agrega esa taxonomía se retorna false, si 
        /// la taxonomía ya existía y fue reemplazada se regresa un true
        /// </summary>
        /// <param name="dtsTaxonomia">Lista de puntos de entrada para la taxonomía</param>
        /// <param name="taxonomia">Taxonomía a agregar al caché</param>
        /// <returns>True si la taxonomía ya había sido agregada antes y fue reemplazada, false si es la primera vez que se agrega</returns>
        public bool AgregarTaxonomia(IList<ArchivoImportadoDocumento> dtsTaxonomia, ITaxonomiaXBRL taxonomia)
        {
            if (dtsTaxonomia == null) return true;
            //Buscar si la taxonomía ya existe en el caché
            foreach (var keyValTax in _cacheTaxonomias)
            {
                if (EsMismoDTS(keyValTax.Key, dtsTaxonomia))
                {
                    //Reemplazar
                    _cacheTaxonomias[keyValTax.Key] = taxonomia;
                    return true;
                }
            }
            //Taxonomía nueva
            var listaDts = CopiarListaDts(dtsTaxonomia);
            _cacheTaxonomias.Add(listaDts, taxonomia);
            return false;
        }

        /// <summary>
        /// Evalúa si la lista de puntos de entrada de taxonomía es equivalente
        /// </summary>
        /// <param name="dtsOrigen">Dts de origen</param>
        /// <param name="dtsComparar">Dts a comparar</param>
        private static Boolean EsMismoDTS(IList<ArchivoImportadoDocumento> dtsOrigen, IList<ArchivoImportadoDocumento> dtsComparar)
        {
            if (dtsOrigen == null || dtsComparar == null) return false;

            foreach (var unDtsOrigen in dtsOrigen)
            {
                var encontrado = dtsComparar.Any(unDtsComparar => unDtsOrigen.EsMismoArchivo(unDtsComparar));
                if (!encontrado)
                {
                    return false;
                }
            }
            return true;
        }
        /// <summary>
        /// Crea una copia de la lista original con objetos copiados de la lista original
        /// </summary>
        /// <param name="dtsTaxonomia"></param>
        /// <returns></returns>
        private static IList<ArchivoImportadoDocumento> CopiarListaDts(IList<ArchivoImportadoDocumento> dtsTaxonomia)
        {
            return dtsTaxonomia.Select(dtsOrigen => new ArchivoImportadoDocumento()
            {
                TipoArchivo = dtsOrigen.TipoArchivo,
                HRef = dtsOrigen.HRef,
                Role = dtsOrigen.Role,
                RoleUri = dtsOrigen.RoleUri
            }).ToList();
        }

        public ITaxonomiaXBRL ResolverTaxonomiaXbrl(IList<ArchivoImportadoDocumento> dtsDocumento)
        {
            foreach (var keyValTax in _cacheTaxonomias)
            {
                if (EsMismoDTS(keyValTax.Key, dtsDocumento))
                {
                    return _cacheTaxonomias[keyValTax.Key];
                }
            }
            return null;
        }


    }
}
