using AbaxXBRLCore.Viewer.Application.Dto;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Common.Cache.Impl
{
    /// <summary>
    /// Implementación de un caché de taxonomías XBRL en memoria
    /// <author>Emigdio Hernandez</author>
    /// </summary>
    public class CacheTaxonomiaEnMemoriaXBRL: ICacheTaxonomiaXBRL
    {
        private readonly IDictionary<IList<DtsDocumentoInstanciaDto>, TaxonomiaDto> _cacheTaxonomias = new Dictionary<IList<DtsDocumentoInstanciaDto>, TaxonomiaDto>();

        private readonly IDictionary<IList<DtsDocumentoInstanciaDto>, string> _cacheTaxonomiasJson = new Dictionary<IList<DtsDocumentoInstanciaDto>, String>();


        public void init()
        {
            
        }

        public bool AgregarTaxonomia(IList<Viewer.Application.Dto.DtsDocumentoInstanciaDto> dtsTaxonomia, Viewer.Application.Dto.TaxonomiaDto taxonomia)
        {
            
            if (dtsTaxonomia == null) return true;
            //Buscar si la taxonomía ya existe en el caché
            foreach(var keyValTax in _cacheTaxonomias)
            {
                if(EsMismoDTS(keyValTax.Key,dtsTaxonomia)){
                    //Reemplazar
                    _cacheTaxonomias[keyValTax.Key] = taxonomia;
                    _cacheTaxonomiasJson[keyValTax.Key] = JsonConvert.SerializeObject(taxonomia, Formatting.Indented, new JsonSerializerSettings
                    {
                        ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                    });
                    return true;
                }
            }
            //Taxonomía nueva
            try
            {
                var listaDts = CopiarListaDts(dtsTaxonomia);
                _cacheTaxonomias.Add(listaDts, taxonomia);
                _cacheTaxonomiasJson.Add(listaDts, JsonConvert.SerializeObject(taxonomia, Formatting.Indented, new JsonSerializerSettings
                        {
                            ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                        }));
            }
            catch (Exception e)
            {
                System.Console.Write(e);
            }
            return false;
        }



        public Viewer.Application.Dto.TaxonomiaDto ObtenerTaxonomia(IList<Viewer.Application.Dto.DtsDocumentoInstanciaDto> dtsTaxonomia)
        {
            foreach(var keyValTax in _cacheTaxonomias)
            {
                if(EsMismoDTS(keyValTax.Key,dtsTaxonomia))
                {
                    return _cacheTaxonomias[keyValTax.Key];
                }
            }
            return null;
        }

        public string ObtenerTaxonomiaJson(IList<Viewer.Application.Dto.DtsDocumentoInstanciaDto> dtsTaxonomia)
        {
            foreach(var keyValTax in _cacheTaxonomias)
            {
                if(EsMismoDTS(keyValTax.Key,dtsTaxonomia))
                {
                    return _cacheTaxonomiasJson[keyValTax.Key];
                }
            }
            return null;
        }

        public ICollection<TaxonomiaDto> ObtenerListaTaxonomias()
        {
            return _cacheTaxonomias.Values;
        }

        /// <summary>
        /// Evalúa si la lista de puntos de entrada de taxonomía es equivalente
        /// </summary>
        /// <param name="dtsOrigen">Dts de origen</param>
        /// <param name="dtsComparar">Dts a comparar</param>
        private static Boolean EsMismoDTS(IList<DtsDocumentoInstanciaDto> dtsOrigen,IList<DtsDocumentoInstanciaDto> dtsComparar)
        {
            if(dtsOrigen == null || dtsComparar == null) return false;

            foreach(var unDtsOrigen in dtsOrigen){
                var encontrado = dtsComparar.Any(unDtsComparar => unDtsOrigen.Equals(unDtsComparar));
                if(!encontrado){
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
        private static IList<DtsDocumentoInstanciaDto> CopiarListaDts(IList<DtsDocumentoInstanciaDto> dtsTaxonomia)
        {
            return dtsTaxonomia.Select(dtsOrigen => new DtsDocumentoInstanciaDto()
                                                    {
                                                        Tipo = dtsOrigen.Tipo, HRef = dtsOrigen.HRef, Role = dtsOrigen.Role, RoleUri = dtsOrigen.RoleUri
                                                    }).ToList();
        }
    }
}
