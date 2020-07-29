using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Spring.Testing.Microsoft;
using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.CellStore.Services.Impl;
using MongoDB.Driver.Builders;
using MongoDB.Bson;
using System.Collections.Generic;
using AbaxXBRLCore.CellStore.Modelo;
using Newtonsoft.Json;
using AbaxXBRLCore.CellStore.Util;

using static AbaxXBRLCore.CellStore.Constants.ConstantesCellStore.ColeccionMongoEnum;
using AbaxXBRLCore.Viewer.Application.Dto;
using System.Linq;
using AbaxXBRLCore.Common.Cache;

namespace TestAbaxXBRL
{
    [TestClass]
    public class TestAbaxCellStoreSpotfire : AbstractDependencyInjectionSpringContextTests
    {
        protected override string[] ConfigLocations
        {
            get
            {
                return new string[]
                {
                    "assembly://AbaxXBRLCore/AbaxXBRLCore.Config/common.xml",
                    "assembly://AbaxXBRLCore/AbaxXBRLCore.Config/repository.xml",
                    "assembly://AbaxXBRLCore/AbaxXBRLCore.Config.custom/services_desarrollo.xml",
                    "assembly://AbaxXBRLCore/AbaxXBRLCore.Config.custom/servicesrest_desarrollo_solo_mongo.xml",
                    //"assembly://AbaxXBRLCore/AbaxXBRLCore.Config.custom/servicesrest_desarrollo.xml",
                    //"assembly://AbaxXBRLCore/AbaxXBRLCore.Config.custom/servicesrest_mongodisable.xml",
                    "assembly://AbaxXBRLCore/AbaxXBRLCore.Config/bitacora.xml",
                    "assembly://AbaxXBRLCore/AbaxXBRLCore.Config/transaccion.xml",
                    "assembly://AbaxXBRLCore/AbaxXBRLCore.Config/templates.xml",
                    "assembly://AbaxXBRLCore/AbaxXBRLCore.Config/templatesold.xml",
                    "assembly://AbaxXBRLCore/AbaxXBRLCore.Config.Reports/reportesXBRL.xml",
                    "assembly://AbaxXBRLCore/AbaxXBRLCore.Config/connectionMongoDB.xml",
                    "assembly://AbaxXBRLCore/AbaxXBRLCore.Config/serviceBlockStore.xml",

                };
            }
        }
        /// <summary>
        /// Diccionario conlos Documentos por taxonomía.
        /// </summary>
        private IDictionary<String, String> ArchivoTaxonomiasPorEspacioNombres = new Dictionary<String, String>()
        {
            {"http://www.bmv.com.mx/fr/ics/2012-04-01/ifrs-mx-ics-entryPoint-all", "http://emisnet.bmv.com.mx/taxonomy/mx-ifrs-ics-2012-04-01/All/ifrs-mx-ics-entryPoint-all-2012-04-01.xsd"},
            {"http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_ics_entry_point_2014-12-05", "http://emisnet.bmv.com.mx/taxonomy/mx-ifrs-2014-12-05/full_ifrs_mc_mx_ics_entry_point_2014-12-05.xsd"},
            {"http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_cp_entry_point_2014-12-05", "http://emisnet.bmv.com.mx/taxonomy/mx-ifrs-2014-12-05/full_ifrs_mc_mx_cp_entry_point_2014-12-05.xsd"},
            {"http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_fibras_entry_point_2014-12-05", "http://emisnet.bmv.com.mx/taxonomy/mx-ifrs-2014-12-05/full_ifrs_mc_mx_fibras_entry_point_2014-12-05.xsd"},
            {"http://www.bmv.com.mx/2015-06-30/ccd/full_ifrs_ccd_entry_point_2015-06-30", "http://emisnet.bmv.com.mx/taxonomy/mx-ifrs-fid-2015-06-30/ccd/full_ifrs_ccd_entry_point_2015-06-30.xsd"},
            {"http://www.bmv.com.mx/2015-06-30/trac/full_ifrs_trac_entry_point_2015-06-30", "http://emisnet.bmv.com.mx/taxonomy/mx-ifrs-fid-2015-06-30/trac/full_ifrs_trac_entry_point_2015-06-30.xsd"},
            {"http://www.bmv.com.mx/2016-08-22/annext_entrypoint", "http://emisnet.bmv.com.mx/taxonomy/anexot-2016-08-22/annext_entry_point_2016-08-22.xsd"},
            {"http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_sapib_entry_point_2014-12-05", "http://emisnet.bmv.com.mx/taxonomy/mx-ifrs-2014-12-05/full_ifrs_mc_mx_sapib_entry_point_2014-12-05.xsd"},
            {"http://www.bmv.com.mx/2015-06-30/deuda/full_ifrs_deuda_entry_point_2015-06-30", "http://emisnet.bmv.com.mx/taxonomy/mx-ifrs-fid-2015-06-30/deuda/full_ifrs_deuda_entry_point_2015-06-30.xsd"},
            {"http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/pros_H_entry_point_2016-08-22", "http://cnbv.xbrl.mx/taxonomy/ra-prospecto-2016-08-22/pros_H_entry_point_2016-08-22.xsd"},
            {"http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/pros_HBIS_entry_point_2016-08-22", "http://cnbv.xbrl.mx/taxonomy/ra-prospecto-2016-08-22/pros_HBIS_entry_point_2016-08-22.xsd"},
            {"http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/pros_HBIS1_entry_point_2016-08-22", "http://cnbv.xbrl.mx/taxonomy/ra-prospecto-2016-08-22/pros_HBIS1_entry_point_2016-08-22.xsd"},
            {"http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/pros_HBIS2_entry_point_2016-08-22", "http://cnbv.xbrl.mx/taxonomy/ra-prospecto-2016-08-22/pros_HBIS2_entry_point_2016-08-22.xsd"},
            {"http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/pros_HBIS3_entry_point_2016-08-22", "http://cnbv.xbrl.mx/taxonomy/ra-prospecto-2016-08-22/pros_HBIS3_entry_point_2016-08-22.xsd"},
            {"http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/pros_HBIS4_entry_point_2016-08-22", "http://cnbv.xbrl.mx/taxonomy/ra-prospecto-2016-08-22/pros_HBIS4_entry_point_2016-08-22.xsd"},
            {"http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/pros_HBIS5_entry_point_2016-08-22", "http://cnbv.xbrl.mx/taxonomy/ra-prospecto-2016-08-22/pros_HBIS5_entry_point_2016-08-22.xsd"},
            {"http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/pros_L_entry_point_2016-08-22", "http://cnbv.xbrl.mx/taxonomy/ra-prospecto-2016-08-22/pros_L_entry_point_2016-08-22.xsd"},
            {"http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/pros_I_entry_point_2016-08-22", "http://cnbv.xbrl.mx/taxonomy/ra-prospecto-2016-08-22/pros_I_entry_point_2016-08-22.xsd"},
            {"http://www.bmv.com.mx/2016-08-22/rel_ev_emisoras_entrypoint", "http://emisnet.bmv.com.mx/taxonomy/eventos-relevantes-2016-08-22/rel_ev_emisoras_entry_point_2016-08-22.xsd"},
            {"http://www.bmv.com.mx/2016-08-22/rel_ev_fondos_entrypoint", "http://emisnet.bmv.com.mx/taxonomy/eventos-relevantes-2016-08-22/rel_ev_fondos_entry_point_2016-08-22.xsd"},
            {"http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_fibras_entry_point_2016-08-22", "http://emisnet.bmv.com.mx/taxonomy/mx-ifrs-2014-12-05/full_ifrs_mc_mx_fibras_entry_point_2016-08-22.xsd"},
            {"http://www.bmv.com.mx/2015-06-30/ccd/full_ifrs_ccd_entry_point_2016-08-22", "http://emisnet.bmv.com.mx/taxonomy/mx-ifrs-fid-2015-06-30/ccd/full_ifrs_ccd_entry_point_2016-08-22.xsd"},
            {"http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/ar_N_entry_point_2016-08-22", "https://taxonomiasxbrl.cnbv.gob.mx/taxonomy/ra-prospecto-2016-08-22/ar_N_entry_point_2016-08-22.xsd"},
            {"http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/ar_NBIS_entry_point_2016-08-22", "https://taxonomiasxbrl.cnbv.gob.mx/taxonomy/ra-prospecto-2016-08-22/ar_NBIS_entry_point_2016-08-22.xsd"},
            {"http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/ar_NBIS1_entry_point_2016-08-22", "https://taxonomiasxbrl.cnbv.gob.mx/taxonomy/ra-prospecto-2016-08-22/ar_NBIS1_entry_point_2016-08-22.xsd"},
            {"http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/ar_NBIS2_entry_point_2016-08-22", "https://taxonomiasxbrl.cnbv.gob.mx/taxonomy/ra-prospecto-2016-08-22/ar_NBIS2_entry_point_2016-08-22.xsd"},
            {"http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/ar_NBIS3_entry_point_2016-08-22", "https://taxonomiasxbrl.cnbv.gob.mx/taxonomy/ra-prospecto-2016-08-22/ar_NBIS3_entry_point_2016-08-22.xsd"},
            {"http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/ar_NBIS4_entry_point_2016-08-22", "https://taxonomiasxbrl.cnbv.gob.mx/taxonomy/ra-prospecto-2016-08-22/ar_NBIS4_entry_point_2016-08-22.xsd"},
            {"http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/ar_NBIS5_entry_point_2016-08-22", "https://taxonomiasxbrl.cnbv.gob.mx/taxonomy/ra-prospecto-2016-08-22/ar_NBIS5_entry_point_2016-08-22.xsd"},
            {"http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/ar_O_entry_point_2016-08-22", "https://taxonomiasxbrl.cnbv.gob.mx/taxonomy/ra-prospecto-2016-08-22/ar_O_entry_point_2016-08-22.xsd"},
            {"http://www.cnbv.gob.mx/2017-08-01/relevant_events/rel_news_common_representative_view_entry_point", "https://taxonomiasxbrl.cnbv.gob.mx/taxonomy/eventos-relevantes-2017-08-01/rel_news_common_representative_view_entry_point_2017-08-01.xsd"},
            {"http://www.cnbv.gob.mx/2017-08-01/relevant_events/rel_news_investment_funds_view_entry_point", "https://taxonomiasxbrl.cnbv.gob.mx/taxonomy/eventos-relevantes-2017-08-01/rel_news_investment_funds_view_entry_point_2017-08-01.xsd"},
            {"http://www.cnbv.gob.mx/2017-08-01/relevant_events/rel_news_issuer_view_entry_point", "https://taxonomiasxbrl.cnbv.gob.mx/taxonomy/eventos-relevantes-2017-08-01/rel_news_issuer_view_entry_point_2017-08-01.xsd"},
            {"http://www.cnbv.gob.mx/2017-08-01/relevant_events/rel_news_rating_agency_view_entry_point", "https://taxonomiasxbrl.cnbv.gob.mx/taxonomy/eventos-relevantes-2017-08-01/rel_news_rating_agency_view_entry_point_2017-08-01.xsd"},
            {"http://www.cnbv.gob.mx/2017-08-01/relevant_events/rel_news_trust_issuer_view_entry_point", "https://taxonomias.xbrl.cnbv.gob.mx/taxonomy/eventos-relevantes-2017-08-01/rel_news_trust_issuer_view_entry_point_2017-08-01.xsd"}
        };
        /// <summary>
        /// Diccionario de taxonomías por espacio de nombres.
        /// </summary>
        private IDictionary<String, TaxonomiaDto> TaxonomiasPorEspacioNombres = new Dictionary<String, TaxonomiaDto>();

        [TestMethod]
        public void TestLLenarHechoSpotfire()
        {
            LogUtil.LogDirPath = @"..\..\TestOutput\";
            LogUtil.Inicializa();

            JsonSerializerSettings settings = new JsonSerializerSettings();
            settings.NullValueHandling = NullValueHandling.Ignore;

            var cellStoreMongo = (AbaxXBRLCellStoreMongo)applicationContext.GetObject("AbaxXBRLCellStoreMongo");

            var spotfireCollection = cellStoreMongo.ObtenerCollection("HechoSpotfire");
            var envioCollection = cellStoreMongo.ObtenNombreCollecion(ENVIO);
            var hechoCollection = cellStoreMongo.ObtenNombreCollecion(HECHO);

            var queryEnvio = Query.EQ("EsVersionActual", true);

            var enviosBSON = cellStoreMongo.Consulta(envioCollection, queryEnvio);
            var enviosJSON = CellStoreUtil.DepurarIdentificadorBson(enviosBSON.ToJson());
            var envios = JsonConvert.DeserializeObject<List<Envio>>(enviosJSON, settings);


            var queryNoChunks = Query.EQ("EsValorChunks", false);

            var types = new List<BsonValue>();
            types.Add("http://www.xbrl.org/2003/instance:base64BinaryItemType");
            types.Add("http://www.xbrl.org/dtr/type/non-numeric:textBlockItemType");
            var queryTiposNoIncluidos = Query.NotIn("Concepto.TipoDato", types);

            foreach (var envio in envios)
            {
                try
                {
                    var queryIdEnvio = Query.EQ("IdEnvio", envio.IdEnvio);
                    
                    //var countHechosSpotfire = cellStoreMongo.Count("HechoSpotfire", queryIdEnvio);
                    //if (countHechosSpotfire > 0)
                    //{
                    //    continue;
                    //}
                    var queryHecho = Query.And(
                        queryIdEnvio,
                        queryNoChunks,
                        queryTiposNoIncluidos
                    );

                    var hechosBSON = cellStoreMongo.Consulta(hechoCollection, queryHecho);
                    var hechosJSON = CellStoreUtil.DepurarIdentificadorBson(hechosBSON.ToJson());
                    var hechos = JsonConvert.DeserializeObject<List<Hecho>>(hechosJSON, settings);
                    var taxonomia = ObtenerTaxonomia(envio.Taxonomia);

                    IList<String> roles = null;
                    IList<String> dimensiones = null;
                    IDictionary<String, IDictionary<String, int>> concepotsRol = null;
                    ObtenElementosTaxonomia(cellStoreMongo,taxonomia, out roles, out dimensiones, out concepotsRol);

                    List<BsonDocument> hechosSpotfire = new List<BsonDocument>();
                    foreach (var hecho in hechos)
                    {
                        var queryIdHecho = Query.EQ("IdHecho", hecho.IdHecho);
                        var countHechosSpotfire = cellStoreMongo.Count("HechoSpotfire", queryIdHecho);
                        if (countHechosSpotfire > 0)
                        {
                            continue;
                        }
                        HechoSpotfire hechoSpotfire = new HechoSpotfire(envio, hecho, roles, concepotsRol, dimensiones);
                        hechosSpotfire.Add(hechoSpotfire.ToBson());
                    }
                    if (hechosSpotfire.Count > 0)
                    {
                        spotfireCollection.InsertBatch(hechosSpotfire);
                    }
                }
                catch (Exception ex)
                {
                    LogUtil.Error(ex);
                }
            }
        }
        /// <summary>
        /// Obtiene la taxonomía en base al espacio de nombres.
        /// </summary>
        /// <param name="espacioNombres">Espacio de nombres de la taxonomía requerida</param>
        /// <returns>Taxonomía obtenida</returns>
        private TaxonomiaDto ObtenerTaxonomia(String espacioNombres)
        {
            TaxonomiaDto taxonomia = null;
            if (!TaxonomiasPorEspacioNombres.TryGetValue(espacioNombres, out taxonomia))
            {
                String puntoEntrada;
                var xpe = AbaxXBRLCore.XPE.impl.XPEServiceImpl.GetInstance();
                if (ArchivoTaxonomiasPorEspacioNombres.TryGetValue(espacioNombres, out puntoEntrada))
                {
                    var errores = new List<ErrorCargaTaxonomiaDto>();
                    taxonomia = xpe.CargarTaxonomiaXbrl(puntoEntrada, errores, true);
                    if (errores.Count > 0)
                    {
                        LogUtil.Error(errores);
                    }
                    else
                    {
                        TaxonomiasPorEspacioNombres.Add(espacioNombres, taxonomia);
                    }
                }
            }
            return taxonomia;
        }
        /// <summary>
        /// Obtiene un alias que se utilizará como nombre del atributo.
        /// </summary>
        /// <param name="uri">Uri a evaluar.</param>
        /// <returns>Alias.</returns>
        private String ObtenAliasRol(String uri)
        {
            String alias = null;
            var index = uri.LastIndexOf("role-");
            if (index != -1)
            {
                alias = uri.Substring(index + 5);
            }
            else
            {
                index = uri.LastIndexOf("/");
                if (index != -1)
                {
                    alias = uri.Substring(index + 1);
                }
            }

            return "Rol_" +  alias;
        }
        /// <summary>
        /// Evalua la taxonomía y llena los elementos necearios para su persistencia.
        /// </summary>
        /// <param name="taxonomia">TAxonomía que se evalua.</param>
        /// <param name="roles">Lista de roles de presentación.</param>
        /// <param name="dimensiones">Lista de dimensiónes.</param>
        /// <param name="concepotsRol">Posición de los roles de presentación por concepto.</param>
        private void ObtenElementosTaxonomia(
            AbaxXBRLCellStoreMongo cellStoreMongo,
            TaxonomiaDto taxonomia, out IList<String> roles, out IList<String> dimensiones, out IDictionary<String, IDictionary<String, int>> concepotsRol)
        {
            roles = cellStoreMongo.RolesSpotfire;
            dimensiones = cellStoreMongo.DimensionesSpotfire;
            concepotsRol = new Dictionary<String, IDictionary<String, int>>();
            foreach (var rolPresentacion in taxonomia.RolesPresentacion)
            {
                var aliasRol = ObtenAliasRol(rolPresentacion.Uri);
                EvaluaEstructuras(taxonomia, rolPresentacion.Estructuras, aliasRol, roles, dimensiones, concepotsRol, 0);
            }
        }
        /// <summary>
        /// Evalua las estructuras y llena los componentes requeridos.
        /// </summary>
        /// <param name="taxonomia">Taxonomía de donde se extrae la información.</param>
        /// <param name="listaEstructuras">Lista de estructuras a evaluar.</param>
        /// <param name="aliasRol">Identificador del rol</param>
        /// <param name="roles">Lista de roles existentes.</param>
        /// <param name="dimensiones">Lista de dimensiones existentes.</param>
        /// <param name="concepotsRol">Conceptos por rol.</param>
        /// <param name="indexEstructrua">Indice de la estructrua actual.</param>
        /// <returns></returns>
        private int EvaluaEstructuras(
            TaxonomiaDto taxonomia, 
            IList<EstructuraFormatoDto> listaEstructuras, 
            String aliasRol, IList<String> roles, 
            IList<String> dimensiones, 
            IDictionary<String, IDictionary<String, int>> concepotsRol, 
            int indexEstructrua)
        {
            foreach (var estructrua in listaEstructuras)
            {
                ConceptoDto concepto;
                if (taxonomia.ConceptosPorId.TryGetValue(estructrua.IdConcepto, out concepto))
                {
                    if (!(concepto.EsAbstracto ?? false))
                    {
                        IDictionary<String, int> posicionRol;
                        if (!concepotsRol.TryGetValue(concepto.Id, out posicionRol))
                        {
                            posicionRol = new Dictionary<String, int>();
                            concepotsRol.Add(concepto.Id, posicionRol);
                        }
                        if (posicionRol.ContainsKey(aliasRol))
                        {
                            var indexAlias = 2;
                            var aliasAuxiliar = aliasRol + "_" + indexAlias;
                            while (posicionRol.ContainsKey(aliasAuxiliar))
                            {
                                indexAlias++;
                                aliasAuxiliar = aliasAuxiliar + "_" + indexAlias;
                            }
                            posicionRol.Add(aliasAuxiliar, indexEstructrua);
                            if (!roles.Contains(aliasAuxiliar))
                            {
                                roles.Add(aliasAuxiliar);
                            }
                        }
                        else
                        {
                            posicionRol.Add(aliasRol, indexEstructrua);
                        }

                    }
                    else if ((concepto.EsDimension ?? false) && !dimensiones.Contains(concepto.Id))
                    {
                        dimensiones.Add(concepto.Id);
                    }
                }
                if (estructrua.SubEstructuras != null && estructrua.SubEstructuras.Count > 0)
                {
                    indexEstructrua = EvaluaEstructuras(taxonomia, estructrua.SubEstructuras, aliasRol, roles, dimensiones, concepotsRol, indexEstructrua);
                }
                indexEstructrua++;
            }
            return indexEstructrua;
        }
    }
}
