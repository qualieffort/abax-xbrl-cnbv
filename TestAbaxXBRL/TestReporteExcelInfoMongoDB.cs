using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using AbaxXBRLBlockStore.Common.Connection.MongoDb;
using AbaxXBRLBlockStore.BlockStore;
using AbaxXBRLBlockStore.Services;
using System.Collections.Generic;
using MongoDB.Bson;
using System.Diagnostics;
using MongoDB.Driver;
using System.Text.RegularExpressions;
using AbaxXBRLCore.Common.Entity;
using Newtonsoft.Json;
using AbaxXBRLCore.ExportGeneric;
using AbaxXBRLBlockStore.Common.Entity;
using AbaxXBRL.Taxonomia;
using System.Linq;
using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Viewer.Application.Dto;
using AbaxXBRLCore.Export;
using AbaxXBRLCore.Services.Implementation;
using AbaxXBRLCore.Repository.Implementation;
using AbaxXBRLCore.Common.Util;
using System.IO;
using System.Runtime.InteropServices;

namespace TestAbaxXBRL
{
    [TestClass]
    public class TestReporteExcelInfoMongoDB
    {

        [TestMethod]
        public void ReportePrueba()
        {


            var conectionServer = new ConnectionServer
            {
                //miConnectionString = "mongodb://usr_RepositorioInformacion:4dm1n1str4t0r@ds035185-a0.mongolab.com:35185,ds035185-a1.mongolab.com:35185/repositorioabaxxbrl?replicaSet=rs-ds035185",
                //miBaseDatos = "repositorioabaxxbrl"
                miConnectionString = "mongodb://usr_RepositorioInformacion:4dm1n1str4t0r@172.16.235.123:27017/repositorioAbaxXbrl",
                miBaseDatos = "repositorioAbaxXbrl"
            };

            conectionServer.init();

            var conexion = new Conexion(conectionServer);
            var blockStoreDocIns = new BlockStoreDocumentoInstancia(conexion);
            var blockStoreConsulta = new BlockStoreConsulta(conexion);
            var GrupoEmpresaService = new GrupoEmpresaService
            {
                EmpresaRepository = new EmpresaRepository(),
                GrupoEmpresaRepository = new GrupoEmpresaRepository(),
                RegistroAuditoriaRepository = new RegistroAuditoriaRepository()
            };

            var BlockStoreHechoService = new BlockStoreHechoService
            {
                BlockStoreDocumentoInstancia = blockStoreDocIns,
                BlockStoreConsulta = blockStoreConsulta,
                Collection = "BlockStoreHecho",
                CollectionDimension = "BlockStoreDimension",
                CollectionEmpresas = "BlockStoreEmpresa",
                CollectionUnidades = "BlockStoreUnidad",
                CollectionConcepto = "BlockStoreConcepto",
                GrupoEmpresaService = GrupoEmpresaService
            };

            var filtrosConsulta = "{\"conceptos\":[{\"Id\":\"ifrs-full_AdministrativeExpense\",\"EspacioNombres\":null,\"EspacioNombresTaxonomia\":\"http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_ics_entry_point_2014-12-05\",\"orden\":1,\"Indentacion\":1,\"esAbstracto\":false,\"dimension\":null,\"Nombre\":null,\"etiqueta\":null},{\"Id\":\"ifrs-full_DistributionCosts\",\"EspacioNombres\":null,\"EspacioNombresTaxonomia\":\"http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_ics_entry_point_2014-12-05\",\"orden\":2,\"indentacion\":1,\"esAbstracto\":false,\"dimension\":null,\"Nombre\":null,\"etiqueta\":null},{\"Id\":\"ifrs-full_Inventories\",\"EspacioNombres\":null,\"EspacioNombresTaxonomia\":\"http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_ics_entry_point_2014-12-05\",\"orden\":2,\"indentacion\":1,\"esAbstracto\":false,\"dimension\":null,\"Nombre\":null,\"etiqueta\":null},{\"Id\":\"ifrs-full_Equity\",\"EspacioNombres\":null,\"EspacioNombresTaxonomia\":\"http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_ics_entry_point_2014-12-05\",\"orden\":2,\"indentacion\":2,\"esAbstracto\":false,\"dimension\":[{\"Filtro\":null,\"Explicita\":true,\"IdDimension\":\"ifrs-full_ComponentsOfEquityAxis\",\"IdItemMiembro\":\"ifrs-full_OtherReservesMember\",\"QNameDimension\":\"http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis\",\"QNameItemMiembro\":\"http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:OtherReservesMember\",\"ElementoMiembroTipificado\":null}],\"Nombre\":null,\"etiqueta\":null},{\"Id\":\"ifrs_mx-cor_20141205_ComercioExteriorBancarios\",\"EspacioNombres\":null,\"EspacioNombresTaxonomia\":\"http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_ics_entry_point_2014-12-05\",\"orden\":5,\"indentacion\":2,\"esAbstracto\":false,\"dimension\":[{\"Filtro\":\"TOTAL\",\"Explicita\":false,\"IdDimension\":\"ifrs_mx-cor_20141205_InstitucionEje\",\"IdItemMiembro\":null,\"QNameDimension\":\"http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:InstitucionEje\",\"QNameItemMiembro\":null,\"ElementoMiembroTipificado\":null}],\"Nombre\":null,\"etiqueta\":null}],\"filtros\":{\"entidades\":[\"DAIMLER\",\"AEROMEX\"],\"entidadesDiccionario\":null,\"unidades\":[\"MXN\",\"USD\"],\"gruposEntidades\":null,\"periodos\":[{\"Tipo\":0,\"EsTipoInstante\":false,\"FechaInstante\":null,\"FechaInicio\":\"2015-01-01T00:00:00\",\"FechaFin\":\"2015-06-30T00:00:00\"},{\"Tipo\":0,\"EsTipoInstante\":false,\"FechaInstante\":null,\"FechaInicio\":\"2015-04-01T00:00:00\",\"FechaFin\":\"2015-06-30T00:00:00\"},{\"Tipo\":0,\"EsTipoInstante\":false,\"FechaInstante\":null,\"FechaInicio\":\"2014-04-01T00:00:00\",\"FechaFin\":\"2014-12-31T00:00:00\"}]},\"idioma\":\"es\"}";

            var settings = new JsonSerializerSettings { NullValueHandling = NullValueHandling.Ignore };
            var filtrosConsultaHecho = JsonConvert.DeserializeObject<EntFiltroConsultaHecho>(filtrosConsulta, settings);

            var resultado = BlockStoreHechoService.ConsultarRepositorio(filtrosConsultaHecho,1,100);

            ReporteGenericoMongoDB reporteGenericoMongoDB = new ReporteGenericoMongoDB();

            // Crear estructura de reporte
            EstructuraReporteGenerico estructuraReporteGenerico = reporteGenericoMongoDB.CrearEstructuraGenerica(filtrosConsultaHecho, resultado, true);
            resultado.InformacionExtra = estructuraReporteGenerico;

            if (estructuraReporteGenerico != null)
            {
                string rutaDestino = @"E:\VictorCastro\ExcelXbrlGenerico\plantillaMongoDB_2015_LuisStrem.xlsx";
                CrearReporteGenerico crearReporteGenerico = new CrearReporteGenerico();
                var contenido = crearReporteGenerico.ExcelStream(estructuraReporteGenerico).ToArray();
                crearReporteGenerico.CrearArchivoEnExcel(contenido, rutaDestino);
            }
        }

        /// <summary>
        /// Prueba que obtiene los hechos del repositorio con el filtro de consulta
        /// </summary>
        [TestMethod]
        public void ReporteGenericoExcelMongoDb_Varios()
        {
            var conectionServer = new ConnectionServer
            {
                //miConnectionString = "mongodb://usr_RepositorioInformacion:4dm1n1str4t0r@ds035185-a0.mongolab.com:35185,ds035185-a1.mongolab.com:35185/repositorioabaxxbrl?replicaSet=rs-ds035185",
                //miBaseDatos = "repositorioabaxxbrl"
                miConnectionString = "mongodb://usr_RepositorioInformacion:4dm1n1str4t0r@172.16.235.123:27017/repositorioAbaxXbrl",
                miBaseDatos = "repositorioAbaxXbrl"
            };

            conectionServer.init();

            var conexion = new Conexion(conectionServer);
            var blockStoreDocIns = new BlockStoreDocumentoInstancia(conexion);
            var blockStoreConsulta = new BlockStoreConsulta(conexion);
            var GrupoEmpresaService = new GrupoEmpresaService
            {
                EmpresaRepository = new EmpresaRepository(),
                GrupoEmpresaRepository = new GrupoEmpresaRepository(),
                RegistroAuditoriaRepository = new RegistroAuditoriaRepository()
            };

            var BlockStoreHechoService = new BlockStoreHechoService
            {
                BlockStoreDocumentoInstancia = blockStoreDocIns,
                BlockStoreConsulta = blockStoreConsulta,
                Collection = "BlockStoreHecho",
                CollectionDimension = "BlockStoreDimension",
                CollectionEmpresas = "BlockStoreEmpresa",
                CollectionUnidades = "BlockStoreUnidad",
                CollectionConcepto = "BlockStoreConcepto",
                GrupoEmpresaService = GrupoEmpresaService
            };

            #region filtros
            var filtroConsulta = new EntFiltroConsultaHecho();
            filtroConsulta.filtros = new EntFiltrosAdicionales();

            filtroConsulta.filtros.entidadesId = new string[2];
            filtroConsulta.filtros.entidadesId[0] = "DAIMLER";
            filtroConsulta.filtros.entidadesId[1] = "AEROMEX";

            filtroConsulta.filtros.unidades = new string[2];
            filtroConsulta.filtros.unidades[0] = "MXN";
            filtroConsulta.filtros.unidades[1] = "USD";

            filtroConsulta.filtros.periodos = new EntPeriodo[4];

            filtroConsulta.filtros.periodos[0] = new EntPeriodo();
            filtroConsulta.filtros.periodos[1] = new EntPeriodo();
            filtroConsulta.filtros.periodos[2] = new EntPeriodo();
            filtroConsulta.filtros.periodos[3] = new EntPeriodo();

            filtroConsulta.filtros.periodos[0].FechaFin = new DateTime(2015, 6, 30);
            filtroConsulta.filtros.periodos[0].FechaInicio = new DateTime(2015, 1, 1);

            filtroConsulta.filtros.periodos[1].FechaFin = new DateTime(2015, 6, 30);
            filtroConsulta.filtros.periodos[1].FechaInicio = new DateTime(2015, 4, 1);

            filtroConsulta.filtros.periodos[2].FechaFin = new DateTime(2014, 12, 31);
            filtroConsulta.filtros.periodos[2].FechaInicio = new DateTime(2014, 4, 1);

            filtroConsulta.filtros.periodos[3].FechaFin = new DateTime(2015, 09, 30);
            filtroConsulta.filtros.periodos[3].FechaInicio = new DateTime(2015, 1, 1);


            filtroConsulta.idioma = "es";
            filtroConsulta.conceptos = new EntConcepto[5];
            filtroConsulta.conceptos[0] = new EntConcepto();
            filtroConsulta.conceptos[1] = new EntConcepto();
            filtroConsulta.conceptos[2] = new EntConcepto();
            filtroConsulta.conceptos[3] = new EntConcepto();
            filtroConsulta.conceptos[4] = new EntConcepto();


            filtroConsulta.conceptos[0].Id = "ifrs-full_AdministrativeExpense";
            filtroConsulta.conceptos[0].EsAbstracto = false;
            filtroConsulta.conceptos[0].EspacioNombresTaxonomia = "http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_ics_entry_point_2014-12-05";
            filtroConsulta.conceptos[0].Indentacion = 1;
            filtroConsulta.conceptos[0].orden = 1;



            filtroConsulta.conceptos[1].Id = "ifrs-full_DistributionCosts";
            filtroConsulta.conceptos[1].EsAbstracto = false;
            filtroConsulta.conceptos[1].EspacioNombresTaxonomia = "http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_ics_entry_point_2014-12-05";
            filtroConsulta.conceptos[1].Indentacion = 1;
            filtroConsulta.conceptos[1].orden = 2;

            filtroConsulta.conceptos[2].Id = "ifrs-full_Inventories";
            filtroConsulta.conceptos[2].EsAbstracto = false;
            filtroConsulta.conceptos[2].EspacioNombresTaxonomia = "http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_ics_entry_point_2014-12-05";
            filtroConsulta.conceptos[2].Indentacion = 1;
            filtroConsulta.conceptos[2].orden = 2;

            filtroConsulta.conceptos[3].Id = "ifrs-full_Equity";
            filtroConsulta.conceptos[3].EsAbstracto = false;
            filtroConsulta.conceptos[3].EspacioNombresTaxonomia = "http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_ics_entry_point_2014-12-05";
            filtroConsulta.conceptos[3].Indentacion = 2;
            filtroConsulta.conceptos[3].orden = 2;
            filtroConsulta.conceptos[3].InformacionDimensional = new EntInformacionDimensional[1];
            filtroConsulta.conceptos[3].InformacionDimensional[0] = new EntInformacionDimensional();
            filtroConsulta.conceptos[3].InformacionDimensional[0].Explicita = true;
            filtroConsulta.conceptos[3].InformacionDimensional[0].IdDimension = "ifrs-full_ComponentsOfEquityAxis";
            filtroConsulta.conceptos[3].InformacionDimensional[0].IdItemMiembro = "ifrs-full_OtherReservesMember";
            filtroConsulta.conceptos[3].InformacionDimensional[0].QNameDimension = "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis";
            filtroConsulta.conceptos[3].InformacionDimensional[0].QNameItemMiembro = "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:OtherReservesMember";



            filtroConsulta.conceptos[4].Id = "ifrs_mx-cor_20141205_ComercioExteriorBancarios";
            filtroConsulta.conceptos[4].EsAbstracto = false;
            filtroConsulta.conceptos[4].EspacioNombresTaxonomia = "http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_ics_entry_point_2014-12-05";
            filtroConsulta.conceptos[4].Indentacion = 2;
            filtroConsulta.conceptos[4].orden = 5;
            filtroConsulta.conceptos[4].InformacionDimensional = new EntInformacionDimensional[1];
            filtroConsulta.conceptos[4].InformacionDimensional[0] = new EntInformacionDimensional();
            filtroConsulta.conceptos[4].InformacionDimensional[0].Explicita = false;
            filtroConsulta.conceptos[4].InformacionDimensional[0].IdDimension = "ifrs_mx-cor_20141205_InstitucionEje";
            filtroConsulta.conceptos[4].InformacionDimensional[0].QNameDimension = "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:InstitucionEje";
            filtroConsulta.conceptos[4].InformacionDimensional[0].Filtro = "TOTAL";

            #endregion

            var listaDeHechos = BlockStoreHechoService.ConsultarRepositorio(filtroConsulta, 1, 100);

            ReporteGenericoMongoDB reporteGenericoMongoDB = new ReporteGenericoMongoDB();
            // Crear estructura de reporte
            EstructuraReporteGenerico estructuraReporteGenerico = reporteGenericoMongoDB.CrearEstructuraGenerica(filtroConsulta, listaDeHechos, true);

            if (estructuraReporteGenerico != null)
            {
                string rutaDestino = @"E:\VictorCastro\ExcelXbrlGenerico\plantillaMongoDB_2015_VariosEmigdio.xlsx";
                CrearReporteGenerico crearReporteGenerico = new CrearReporteGenerico();
                var contenido = crearReporteGenerico.ExcelStream(estructuraReporteGenerico).ToArray();
                crearReporteGenerico.CrearArchivoEnExcel(contenido, rutaDestino);
            }

        }



        [TestMethod]
        public void ReporteGenericoExcelMongoDb_VariosIdiomaEn()
        {
            var conectionServer = new ConnectionServer
            {
                //miConnectionString = "mongodb://usr_RepositorioInformacion:4dm1n1str4t0r@ds035185-a0.mongolab.com:35185,ds035185-a1.mongolab.com:35185/repositorioabaxxbrl?replicaSet=rs-ds035185",
                //miBaseDatos = "repositorioabaxxbrl"
                miConnectionString = "mongodb://usr_RepositorioInformacion:4dm1n1str4t0r@172.16.235.123:27017/repositorioAbaxXbrl",
                miBaseDatos = "repositorioAbaxXbrl"
            };

            conectionServer.init();

            var conexion = new Conexion(conectionServer);
            var blockStoreDocIns = new BlockStoreDocumentoInstancia(conexion);
            var blockStoreConsulta = new BlockStoreConsulta(conexion);
            var GrupoEmpresaService = new GrupoEmpresaService
            {
                EmpresaRepository = new EmpresaRepository(),
                GrupoEmpresaRepository = new GrupoEmpresaRepository(),
                RegistroAuditoriaRepository = new RegistroAuditoriaRepository()
            };

            var BlockStoreHechoService = new BlockStoreHechoService
            {
                BlockStoreDocumentoInstancia = blockStoreDocIns,
                BlockStoreConsulta = blockStoreConsulta,
                Collection = "BlockStoreHecho",
                CollectionDimension = "BlockStoreDimension",
                CollectionEmpresas = "BlockStoreEmpresa",
                CollectionUnidades = "BlockStoreUnidad",
                CollectionConcepto = "BlockStoreConcepto",
                GrupoEmpresaService = GrupoEmpresaService
            };

            #region filtros
            var filtroConsulta = new EntFiltroConsultaHecho();
            filtroConsulta.filtros = new EntFiltrosAdicionales();

            filtroConsulta.filtros.entidadesId = new string[2];
            filtroConsulta.filtros.entidadesId[0] = "DAIMLER";
            filtroConsulta.filtros.entidadesId[1] = "AEROMEX";

            filtroConsulta.filtros.unidades = new string[2];
            filtroConsulta.filtros.unidades[0] = "MXN";
            filtroConsulta.filtros.unidades[1] = "USD";

            filtroConsulta.filtros.periodos = new EntPeriodo[3];

            filtroConsulta.filtros.periodos[0] = new EntPeriodo();
            filtroConsulta.filtros.periodos[1] = new EntPeriodo();
            filtroConsulta.filtros.periodos[2] = new EntPeriodo();

            filtroConsulta.filtros.periodos[0].FechaFin = new DateTime(2015, 6, 30);
            filtroConsulta.filtros.periodos[0].FechaInicio = new DateTime(2015, 1, 1);

            filtroConsulta.filtros.periodos[1].FechaFin = new DateTime(2015, 6, 30);
            filtroConsulta.filtros.periodos[1].FechaInicio = new DateTime(2015, 4, 1);

            filtroConsulta.filtros.periodos[2].FechaFin = new DateTime(2014, 12, 31);
            filtroConsulta.filtros.periodos[2].FechaInicio = new DateTime(2014, 4, 1);


            filtroConsulta.idioma = "en";
            filtroConsulta.conceptos = new EntConcepto[5];
            filtroConsulta.conceptos[0] = new EntConcepto();
            filtroConsulta.conceptos[1] = new EntConcepto();
            filtroConsulta.conceptos[2] = new EntConcepto();
            filtroConsulta.conceptos[3] = new EntConcepto();
            filtroConsulta.conceptos[4] = new EntConcepto();


            filtroConsulta.conceptos[0].Id = "ifrs-full_AdministrativeExpense";
            filtroConsulta.conceptos[0].EsAbstracto = false;
            filtroConsulta.conceptos[0].EspacioNombresTaxonomia = "http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_ics_entry_point_2014-12-05";
            filtroConsulta.conceptos[0].Indentacion = 1;
            filtroConsulta.conceptos[0].orden = 1;



            filtroConsulta.conceptos[1].Id = "ifrs-full_DistributionCosts";
            filtroConsulta.conceptos[1].EsAbstracto = false;
            filtroConsulta.conceptos[1].EspacioNombresTaxonomia = "http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_ics_entry_point_2014-12-05";
            filtroConsulta.conceptos[1].Indentacion = 1;
            filtroConsulta.conceptos[1].orden = 2;

            filtroConsulta.conceptos[2].Id = "ifrs-full_Inventories";
            filtroConsulta.conceptos[2].EsAbstracto = false;
            filtroConsulta.conceptos[2].EspacioNombresTaxonomia = "http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_ics_entry_point_2014-12-05";
            filtroConsulta.conceptos[2].Indentacion = 1;
            filtroConsulta.conceptos[2].orden = 2;

            filtroConsulta.conceptos[3].Id = "ifrs-full_Equity";
            filtroConsulta.conceptos[3].EsAbstracto = false;
            filtroConsulta.conceptos[3].EspacioNombresTaxonomia = "http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_ics_entry_point_2014-12-05";
            filtroConsulta.conceptos[3].Indentacion = 2;
            filtroConsulta.conceptos[3].orden = 2;
            filtroConsulta.conceptos[3].InformacionDimensional = new EntInformacionDimensional[1];
            filtroConsulta.conceptos[3].InformacionDimensional[0] = new EntInformacionDimensional();
            filtroConsulta.conceptos[3].InformacionDimensional[0].Explicita = true;
            filtroConsulta.conceptos[3].InformacionDimensional[0].IdDimension = "ifrs-full_ComponentsOfEquityAxis";
            filtroConsulta.conceptos[3].InformacionDimensional[0].IdItemMiembro = "ifrs-full_OtherReservesMember";
            filtroConsulta.conceptos[3].InformacionDimensional[0].QNameDimension = "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis";
            filtroConsulta.conceptos[3].InformacionDimensional[0].QNameItemMiembro = "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:OtherReservesMember";



            filtroConsulta.conceptos[4].Id = "ifrs_mx-cor_20141205_ComercioExteriorBancarios";
            filtroConsulta.conceptos[4].EsAbstracto = false;
            filtroConsulta.conceptos[4].EspacioNombresTaxonomia = "http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_ics_entry_point_2014-12-05";
            filtroConsulta.conceptos[4].Indentacion = 2;
            filtroConsulta.conceptos[4].orden = 5;
            filtroConsulta.conceptos[4].InformacionDimensional = new EntInformacionDimensional[1];
            filtroConsulta.conceptos[4].InformacionDimensional[0] = new EntInformacionDimensional();
            filtroConsulta.conceptos[4].InformacionDimensional[0].Explicita = false;
            filtroConsulta.conceptos[4].InformacionDimensional[0].IdDimension = "ifrs_mx-cor_20141205_InstitucionEje";
            filtroConsulta.conceptos[4].InformacionDimensional[0].QNameDimension = "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:InstitucionEje";
            filtroConsulta.conceptos[4].InformacionDimensional[0].Filtro = "TOTAL";

            #endregion

            var listaDeHechos = BlockStoreHechoService.ConsultarRepositorio(filtroConsulta,1,100);

            ReporteGenericoMongoDB reporteGenericoMongoDB = new ReporteGenericoMongoDB();
            // Crear estructura de reporte
            EstructuraReporteGenerico estructuraReporteGenerico = reporteGenericoMongoDB.CrearEstructuraGenerica(filtroConsulta, listaDeHechos, true);

            if (estructuraReporteGenerico != null)
            {
                string rutaDestino = @"E:\VictorCastro\ExcelXbrlGenerico\plantillaMongoDB_2015_VariosEn.xlsx";
                CrearReporteGenerico crearReporteGenerico = new CrearReporteGenerico();
                var contenido = crearReporteGenerico.ExcelStream(estructuraReporteGenerico).ToArray();
                crearReporteGenerico.CrearArchivoEnExcel(contenido, rutaDestino);
            }
        }





        [TestMethod]
        public void ReporteGenericoExcelMongoDb_VariosIdiomaXXX()
        {
            var conectionServer = new ConnectionServer
            {
                //miConnectionString = "mongodb://usr_RepositorioInformacion:4dm1n1str4t0r@ds035185-a0.mongolab.com:35185,ds035185-a1.mongolab.com:35185/repositorioabaxxbrl?replicaSet=rs-ds035185",
                //miBaseDatos = "repositorioabaxxbrl"
                miConnectionString = "mongodb://usr_RepositorioInformacion:4dm1n1str4t0r@172.16.235.123:27017/repositorioAbaxXbrl",
                miBaseDatos = "repositorioAbaxXbrl"
            };

            conectionServer.init();

            var conexion = new Conexion(conectionServer);
            var blockStoreDocIns = new BlockStoreDocumentoInstancia(conexion);
            var blockStoreConsulta = new BlockStoreConsulta(conexion);
            var GrupoEmpresaService = new GrupoEmpresaService
            {
                EmpresaRepository = new EmpresaRepository(),
                GrupoEmpresaRepository = new GrupoEmpresaRepository(),
                RegistroAuditoriaRepository = new RegistroAuditoriaRepository()
            };

            var BlockStoreHechoService = new BlockStoreHechoService
            {
                BlockStoreDocumentoInstancia = blockStoreDocIns,
                BlockStoreConsulta = blockStoreConsulta,
                Collection = "BlockStoreHecho",
                CollectionDimension = "BlockStoreDimension",
                CollectionEmpresas = "BlockStoreEmpresa",
                CollectionUnidades = "BlockStoreUnidad",
                CollectionConcepto = "BlockStoreConcepto",
                GrupoEmpresaService = GrupoEmpresaService
            };

            #region filtros
            var filtroConsulta = new EntFiltroConsultaHecho();
            filtroConsulta.filtros = new EntFiltrosAdicionales();

            filtroConsulta.filtros.entidadesId = new string[2];
            filtroConsulta.filtros.entidadesId[0] = "DAIMLER";
            filtroConsulta.filtros.entidadesId[1] = "AEROMEX";

            filtroConsulta.filtros.unidades = new string[2];
            filtroConsulta.filtros.unidades[0] = "MXN";
            filtroConsulta.filtros.unidades[1] = "USD";

            filtroConsulta.filtros.periodos = new EntPeriodo[3];

            filtroConsulta.filtros.periodos[0] = new EntPeriodo();
            filtroConsulta.filtros.periodos[1] = new EntPeriodo();
            filtroConsulta.filtros.periodos[2] = new EntPeriodo();

            filtroConsulta.filtros.periodos[0].FechaFin = new DateTime(2015, 6, 30);
            filtroConsulta.filtros.periodos[0].FechaInicio = new DateTime(2015, 1, 1);

            filtroConsulta.filtros.periodos[1].FechaFin = new DateTime(2015, 6, 30);
            filtroConsulta.filtros.periodos[1].FechaInicio = new DateTime(2015, 4, 1);

            filtroConsulta.filtros.periodos[2].FechaFin = new DateTime(2014, 12, 31);
            filtroConsulta.filtros.periodos[2].FechaInicio = new DateTime(2014, 4, 1);


            filtroConsulta.idioma = "xxx";
            filtroConsulta.conceptos = new EntConcepto[5];
            filtroConsulta.conceptos[0] = new EntConcepto();
            filtroConsulta.conceptos[1] = new EntConcepto();
            filtroConsulta.conceptos[2] = new EntConcepto();
            filtroConsulta.conceptos[3] = new EntConcepto();
            filtroConsulta.conceptos[4] = new EntConcepto();


            filtroConsulta.conceptos[0].Id = "ifrs-full_AdministrativeExpense";
            filtroConsulta.conceptos[0].EsAbstracto = false;
            filtroConsulta.conceptos[0].EspacioNombresTaxonomia = "http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_ics_entry_point_2014-12-05";
            filtroConsulta.conceptos[0].Indentacion = 1;
            filtroConsulta.conceptos[0].orden = 1;



            filtroConsulta.conceptos[1].Id = "ifrs-full_DistributionCosts";
            filtroConsulta.conceptos[1].EsAbstracto = false;
            filtroConsulta.conceptos[1].EspacioNombresTaxonomia = "http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_ics_entry_point_2014-12-05";
            filtroConsulta.conceptos[1].Indentacion = 1;
            filtroConsulta.conceptos[1].orden = 2;

            filtroConsulta.conceptos[2].Id = "ifrs-full_Inventories";
            filtroConsulta.conceptos[2].EsAbstracto = false;
            filtroConsulta.conceptos[2].EspacioNombresTaxonomia = "http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_ics_entry_point_2014-12-05";
            filtroConsulta.conceptos[2].Indentacion = 1;
            filtroConsulta.conceptos[2].orden = 2;

            filtroConsulta.conceptos[3].Id = "ifrs-full_Equity";
            filtroConsulta.conceptos[3].EsAbstracto = false;
            filtroConsulta.conceptos[3].EspacioNombresTaxonomia = "http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_ics_entry_point_2014-12-05";
            filtroConsulta.conceptos[3].Indentacion = 2;
            filtroConsulta.conceptos[3].orden = 2;
            filtroConsulta.conceptos[3].InformacionDimensional = new EntInformacionDimensional[1];
            filtroConsulta.conceptos[3].InformacionDimensional[0] = new EntInformacionDimensional();
            filtroConsulta.conceptos[3].InformacionDimensional[0].Explicita = true;
            filtroConsulta.conceptos[3].InformacionDimensional[0].IdDimension = "ifrs-full_ComponentsOfEquityAxis";
            filtroConsulta.conceptos[3].InformacionDimensional[0].IdItemMiembro = "ifrs-full_OtherReservesMember";
            filtroConsulta.conceptos[3].InformacionDimensional[0].QNameDimension = "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis";
            filtroConsulta.conceptos[3].InformacionDimensional[0].QNameItemMiembro = "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:OtherReservesMember";



            filtroConsulta.conceptos[4].Id = "ifrs_mx-cor_20141205_ComercioExteriorBancarios";
            filtroConsulta.conceptos[4].EsAbstracto = false;
            filtroConsulta.conceptos[4].EspacioNombresTaxonomia = "http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_ics_entry_point_2014-12-05";
            filtroConsulta.conceptos[4].Indentacion = 2;
            filtroConsulta.conceptos[4].orden = 5;
            filtroConsulta.conceptos[4].InformacionDimensional = new EntInformacionDimensional[1];
            filtroConsulta.conceptos[4].InformacionDimensional[0] = new EntInformacionDimensional();
            filtroConsulta.conceptos[4].InformacionDimensional[0].Explicita = false;
            filtroConsulta.conceptos[4].InformacionDimensional[0].IdDimension = "ifrs_mx-cor_20141205_InstitucionEje";
            filtroConsulta.conceptos[4].InformacionDimensional[0].QNameDimension = "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:InstitucionEje";
            filtroConsulta.conceptos[4].InformacionDimensional[0].Filtro = "TOTAL";

            #endregion

            var listaDeHechos = BlockStoreHechoService.ConsultarRepositorio(filtroConsulta, 1, 100);

            ReporteGenericoMongoDB reporteGenericoMongoDB = new ReporteGenericoMongoDB();
            // Crear estructura de reporte
            EstructuraReporteGenerico estructuraReporteGenerico = reporteGenericoMongoDB.CrearEstructuraGenerica(filtroConsulta, listaDeHechos, true);

            if (estructuraReporteGenerico != null)
            {
                string rutaDestino = @"E:\VictorCastro\ExcelXbrlGenerico\plantillaMongoDB_2015_VariosEnXXX.xlsx";
                CrearReporteGenerico crearReporteGenerico = new CrearReporteGenerico();
                var contenido = crearReporteGenerico.ExcelStream(estructuraReporteGenerico).ToArray();
                crearReporteGenerico.CrearArchivoEnExcel(contenido, rutaDestino);
            }

        }


        [TestMethod]
        public void ReporteGenericoExcelMongoDb_VariosIdiomaEs_EtiquetasVaciasEnConceptos()
        {
            var conectionServer = new ConnectionServer
            {
                //miConnectionString = "mongodb://usr_RepositorioInformacion:4dm1n1str4t0r@ds035185-a0.mongolab.com:35185,ds035185-a1.mongolab.com:35185/repositorioabaxxbrl?replicaSet=rs-ds035185",
                //miBaseDatos = "repositorioabaxxbrl"
                miConnectionString = "mongodb://usr_RepositorioInformacion:4dm1n1str4t0r@172.16.235.123:27017/repositorioAbaxXbrl",
                miBaseDatos = "repositorioAbaxXbrl"
            };

            conectionServer.init();

            var conexion = new Conexion(conectionServer);
            var blockStoreDocIns = new BlockStoreDocumentoInstancia(conexion);
            var blockStoreConsulta = new BlockStoreConsulta(conexion);
            var GrupoEmpresaService = new GrupoEmpresaService
            {
                EmpresaRepository = new EmpresaRepository(),
                GrupoEmpresaRepository = new GrupoEmpresaRepository(),
                RegistroAuditoriaRepository = new RegistroAuditoriaRepository()
            };

            var BlockStoreHechoService = new BlockStoreHechoService
            {
                BlockStoreDocumentoInstancia = blockStoreDocIns,
                BlockStoreConsulta = blockStoreConsulta,
                Collection = "BlockStoreHecho",
                CollectionDimension = "BlockStoreDimension",
                CollectionEmpresas = "BlockStoreEmpresa",
                CollectionUnidades = "BlockStoreUnidad",
                CollectionConcepto = "BlockStoreConcepto",
                GrupoEmpresaService = GrupoEmpresaService
            };

            #region filtros
            var filtroConsulta = new EntFiltroConsultaHecho();
            filtroConsulta.filtros = new EntFiltrosAdicionales();

            filtroConsulta.filtros.entidadesId = new string[2];
            filtroConsulta.filtros.entidadesId[0] = "DAIMLER";
            filtroConsulta.filtros.entidadesId[1] = "AEROMEX";

            filtroConsulta.filtros.unidades = new string[2];
            filtroConsulta.filtros.unidades[0] = "MXN";
            filtroConsulta.filtros.unidades[1] = "USD";

            filtroConsulta.filtros.periodos = new EntPeriodo[3];

            filtroConsulta.filtros.periodos[0] = new EntPeriodo();
            filtroConsulta.filtros.periodos[1] = new EntPeriodo();
            filtroConsulta.filtros.periodos[2] = new EntPeriodo();

            filtroConsulta.filtros.periodos[0].FechaFin = new DateTime(2015, 6, 30);
            filtroConsulta.filtros.periodos[0].FechaInicio = new DateTime(2015, 1, 1);

            filtroConsulta.filtros.periodos[1].FechaFin = new DateTime(2015, 6, 30);
            filtroConsulta.filtros.periodos[1].FechaInicio = new DateTime(2015, 4, 1);

            filtroConsulta.filtros.periodos[2].FechaFin = new DateTime(2014, 12, 31);
            filtroConsulta.filtros.periodos[2].FechaInicio = new DateTime(2014, 4, 1);


            filtroConsulta.idioma = "xxx";
            filtroConsulta.conceptos = new EntConcepto[5];
            filtroConsulta.conceptos[0] = new EntConcepto();
            filtroConsulta.conceptos[1] = new EntConcepto();
            filtroConsulta.conceptos[2] = new EntConcepto();
            filtroConsulta.conceptos[3] = new EntConcepto();
            filtroConsulta.conceptos[4] = new EntConcepto();


            filtroConsulta.conceptos[0].Id = "ifrs-full_AdministrativeExpense";
            filtroConsulta.conceptos[0].EsAbstracto = false;
            filtroConsulta.conceptos[0].EspacioNombresTaxonomia = "http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_ics_entry_point_2014-12-05";
            filtroConsulta.conceptos[0].Indentacion = 1;
            filtroConsulta.conceptos[0].orden = 1;



            filtroConsulta.conceptos[1].Id = "ifrs-full_DistributionCosts";
            filtroConsulta.conceptos[1].EsAbstracto = false;
            filtroConsulta.conceptos[1].EspacioNombresTaxonomia = "http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_ics_entry_point_2014-12-05";
            filtroConsulta.conceptos[1].Indentacion = 1;
            filtroConsulta.conceptos[1].orden = 2;

            filtroConsulta.conceptos[2].Id = "ifrs-full_Inventories";
            filtroConsulta.conceptos[2].EsAbstracto = false;
            filtroConsulta.conceptos[2].EspacioNombresTaxonomia = "http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_ics_entry_point_2014-12-05";
            filtroConsulta.conceptos[2].Indentacion = 1;
            filtroConsulta.conceptos[2].orden = 2;

            filtroConsulta.conceptos[3].Id = "ifrs-full_Equity";
            filtroConsulta.conceptos[3].EsAbstracto = false;
            filtroConsulta.conceptos[3].EspacioNombresTaxonomia = "http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_ics_entry_point_2014-12-05";
            filtroConsulta.conceptos[3].Indentacion = 2;
            filtroConsulta.conceptos[3].orden = 2;
            filtroConsulta.conceptos[3].InformacionDimensional = new EntInformacionDimensional[1];
            filtroConsulta.conceptos[3].InformacionDimensional[0] = new EntInformacionDimensional();
            filtroConsulta.conceptos[3].InformacionDimensional[0].Explicita = true;
            filtroConsulta.conceptos[3].InformacionDimensional[0].IdDimension = "ifrs-full_ComponentsOfEquityAxis";
            filtroConsulta.conceptos[3].InformacionDimensional[0].IdItemMiembro = "ifrs-full_OtherReservesMember";
            filtroConsulta.conceptos[3].InformacionDimensional[0].QNameDimension = "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis";
            filtroConsulta.conceptos[3].InformacionDimensional[0].QNameItemMiembro = "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:OtherReservesMember";



            filtroConsulta.conceptos[4].Id = "ifrs_mx-cor_20141205_ComercioExteriorBancarios";
            filtroConsulta.conceptos[4].EsAbstracto = false;
            filtroConsulta.conceptos[4].EspacioNombresTaxonomia = "http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_ics_entry_point_2014-12-05";
            filtroConsulta.conceptos[4].Indentacion = 2;
            filtroConsulta.conceptos[4].orden = 5;
            filtroConsulta.conceptos[4].InformacionDimensional = new EntInformacionDimensional[1];
            filtroConsulta.conceptos[4].InformacionDimensional[0] = new EntInformacionDimensional();
            filtroConsulta.conceptos[4].InformacionDimensional[0].Explicita = false;
            filtroConsulta.conceptos[4].InformacionDimensional[0].IdDimension = "ifrs_mx-cor_20141205_InstitucionEje";
            filtroConsulta.conceptos[4].InformacionDimensional[0].QNameDimension = "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:InstitucionEje";
            filtroConsulta.conceptos[4].InformacionDimensional[0].Filtro = "TOTAL";

            #endregion

            var listaDeHechos = BlockStoreHechoService.ConsultarRepositorio(filtroConsulta, 1, 100);
            int numEliminarEtiquetasDeConcepto = 5;
            if (((EntHecho[])listaDeHechos.InformacionExtra).Count() >0)
                for (int i = 0; i <= ((EntHecho[])listaDeHechos.InformacionExtra).Count() - 1; i++) {
                    if (i == numEliminarEtiquetasDeConcepto) break;
                    ((EntHecho[])listaDeHechos.InformacionExtra)[i].concepto.etiqueta = new List<EntEtiqueta>();
                }

            ReporteGenericoMongoDB reporteGenericoMongoDB = new ReporteGenericoMongoDB();
            // Crear estructura de reporte
            EstructuraReporteGenerico estructuraReporteGenerico = reporteGenericoMongoDB.CrearEstructuraGenerica(filtroConsulta, listaDeHechos, true);

            if (estructuraReporteGenerico != null)
            {
                string rutaDestino = @"E:\VictorCastro\ExcelXbrlGenerico\plantillaMongoDB_2015_VariosIdiomaEs_EtiquetasVaciasEnConceptos.xlsx";
                CrearReporteGenerico crearReporteGenerico = new CrearReporteGenerico();
                var contenido = crearReporteGenerico.ExcelStream(estructuraReporteGenerico).ToArray();
                crearReporteGenerico.CrearArchivoEnExcel(contenido, rutaDestino);
            }
        }


        [TestMethod]
        public void ReporteGenericoExcelMongoDb_VariosIdiomaEs_EtiquetasVaciasEnDimension()
        {
            var conectionServer = new ConnectionServer
            {
                //miConnectionString = "mongodb://usr_RepositorioInformacion:4dm1n1str4t0r@ds035185-a0.mongolab.com:35185,ds035185-a1.mongolab.com:35185/repositorioabaxxbrl?replicaSet=rs-ds035185",
                //miBaseDatos = "repositorioabaxxbrl"

                miConnectionString = "mongodb://usr_RepositorioInformacion:4dm1n1str4t0r@172.16.235.123:27017/repositorioAbaxXbrl",
                miBaseDatos = "repositorioAbaxXbrl"
            };

            conectionServer.init();

            var conexion = new Conexion(conectionServer);
            var blockStoreDocIns = new BlockStoreDocumentoInstancia(conexion);
            var blockStoreConsulta = new BlockStoreConsulta(conexion);
            var GrupoEmpresaService = new GrupoEmpresaService
            {
                EmpresaRepository = new EmpresaRepository(),
                GrupoEmpresaRepository = new GrupoEmpresaRepository(),
                RegistroAuditoriaRepository = new RegistroAuditoriaRepository()
            };

            var BlockStoreHechoService = new BlockStoreHechoService
            {
                BlockStoreDocumentoInstancia = blockStoreDocIns,
                BlockStoreConsulta = blockStoreConsulta,
                Collection = "BlockStoreHecho",
                CollectionDimension = "BlockStoreDimension",
                CollectionEmpresas = "BlockStoreEmpresa",
                CollectionUnidades = "BlockStoreUnidad",
                CollectionConcepto = "BlockStoreConcepto",
                GrupoEmpresaService = GrupoEmpresaService
            };

            #region filtros
            var filtroConsulta = new EntFiltroConsultaHecho();
            filtroConsulta.filtros = new EntFiltrosAdicionales();

            filtroConsulta.filtros.entidadesId = new string[2];
            filtroConsulta.filtros.entidadesId[0] = "DAIMLER";
            filtroConsulta.filtros.entidadesId[1] = "AEROMEX";

            filtroConsulta.filtros.unidades = new string[2];
            filtroConsulta.filtros.unidades[0] = "MXN";
            filtroConsulta.filtros.unidades[1] = "USD";

            filtroConsulta.filtros.periodos = new EntPeriodo[3];

            filtroConsulta.filtros.periodos[0] = new EntPeriodo();
            filtroConsulta.filtros.periodos[1] = new EntPeriodo();
            filtroConsulta.filtros.periodos[2] = new EntPeriodo();

            filtroConsulta.filtros.periodos[0].FechaFin = new DateTime(2015, 6, 30);
            filtroConsulta.filtros.periodos[0].FechaInicio = new DateTime(2015, 1, 1);

            filtroConsulta.filtros.periodos[1].FechaFin = new DateTime(2015, 6, 30);
            filtroConsulta.filtros.periodos[1].FechaInicio = new DateTime(2015, 4, 1);

            filtroConsulta.filtros.periodos[2].FechaFin = new DateTime(2014, 12, 31);
            filtroConsulta.filtros.periodos[2].FechaInicio = new DateTime(2014, 4, 1);


            filtroConsulta.idioma = "es";
            filtroConsulta.conceptos = new EntConcepto[5];
            filtroConsulta.conceptos[0] = new EntConcepto();
            filtroConsulta.conceptos[1] = new EntConcepto();
            filtroConsulta.conceptos[2] = new EntConcepto();
            filtroConsulta.conceptos[3] = new EntConcepto();
            filtroConsulta.conceptos[4] = new EntConcepto();


            filtroConsulta.conceptos[0].Id = "ifrs-full_AdministrativeExpense";
            filtroConsulta.conceptos[0].EsAbstracto = false;
            filtroConsulta.conceptos[0].EspacioNombresTaxonomia = "http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_ics_entry_point_2014-12-05";
            filtroConsulta.conceptos[0].Indentacion = 1;
            filtroConsulta.conceptos[0].orden = 1;



            filtroConsulta.conceptos[1].Id = "ifrs-full_DistributionCosts";
            filtroConsulta.conceptos[1].EsAbstracto = false;
            filtroConsulta.conceptos[1].EspacioNombresTaxonomia = "http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_ics_entry_point_2014-12-05";
            filtroConsulta.conceptos[1].Indentacion = 1;
            filtroConsulta.conceptos[1].orden = 2;

            filtroConsulta.conceptos[2].Id = "ifrs-full_Inventories";
            filtroConsulta.conceptos[2].EsAbstracto = false;
            filtroConsulta.conceptos[2].EspacioNombresTaxonomia = "http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_ics_entry_point_2014-12-05";
            filtroConsulta.conceptos[2].Indentacion = 1;
            filtroConsulta.conceptos[2].orden = 2;

            filtroConsulta.conceptos[3].Id = "ifrs-full_Equity";
            filtroConsulta.conceptos[3].EsAbstracto = false;
            filtroConsulta.conceptos[3].EspacioNombresTaxonomia = "http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_ics_entry_point_2014-12-05";
            filtroConsulta.conceptos[3].Indentacion = 2;
            filtroConsulta.conceptos[3].orden = 2;
            filtroConsulta.conceptos[3].InformacionDimensional = new EntInformacionDimensional[1];
            filtroConsulta.conceptos[3].InformacionDimensional[0] = new EntInformacionDimensional();
            filtroConsulta.conceptos[3].InformacionDimensional[0].Explicita = true;
            filtroConsulta.conceptos[3].InformacionDimensional[0].IdDimension = "ifrs-full_ComponentsOfEquityAxis";
            filtroConsulta.conceptos[3].InformacionDimensional[0].IdItemMiembro = "ifrs-full_OtherReservesMember";
            filtroConsulta.conceptos[3].InformacionDimensional[0].QNameDimension = "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis";
            filtroConsulta.conceptos[3].InformacionDimensional[0].QNameItemMiembro = "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:OtherReservesMember";



            filtroConsulta.conceptos[4].Id = "ifrs_mx-cor_20141205_ComercioExteriorBancarios";
            filtroConsulta.conceptos[4].EsAbstracto = false;
            filtroConsulta.conceptos[4].EspacioNombresTaxonomia = "http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_ics_entry_point_2014-12-05";
            filtroConsulta.conceptos[4].Indentacion = 2;
            filtroConsulta.conceptos[4].orden = 5;
            filtroConsulta.conceptos[4].InformacionDimensional = new EntInformacionDimensional[1];
            filtroConsulta.conceptos[4].InformacionDimensional[0] = new EntInformacionDimensional();
            filtroConsulta.conceptos[4].InformacionDimensional[0].Explicita = false;
            filtroConsulta.conceptos[4].InformacionDimensional[0].IdDimension = "ifrs_mx-cor_20141205_InstitucionEje";
            filtroConsulta.conceptos[4].InformacionDimensional[0].QNameDimension = "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:InstitucionEje";
            filtroConsulta.conceptos[4].InformacionDimensional[0].Filtro = "TOTAL";

            #endregion

            var listaDeHechos = BlockStoreHechoService.ConsultarRepositorio(filtroConsulta, 1, 100);
            int numEliminarEtiquetasDeConcepto = 5;
            if (((EntHecho[])listaDeHechos.InformacionExtra).Count() > 0)
                for (int i = 0; i <= ((EntHecho[])listaDeHechos.InformacionExtra).Count() - 1; i++)
                {
                    if (i == numEliminarEtiquetasDeConcepto) break;
                    if (((EntHecho[])listaDeHechos.InformacionExtra)[i].dimension != null)
                    {
                        ((EntHecho[])listaDeHechos.InformacionExtra)[i].dimension[0].etiquetasDimension = null;
                        ((EntHecho[])listaDeHechos.InformacionExtra)[i].dimension[0].etiquetasMiembro = null;
                    }
                }

            ReporteGenericoMongoDB reporteGenericoMongoDB = new ReporteGenericoMongoDB();
            // Crear estructura de reporte
            EstructuraReporteGenerico estructuraReporteGenerico = reporteGenericoMongoDB.CrearEstructuraGenerica(filtroConsulta, listaDeHechos, true);

            if (estructuraReporteGenerico != null)
            {
                string rutaDestino = @"E:\VictorCastro\ExcelXbrlGenerico\plantillaMongoDB_2015_VariosIdiomaEs_EtiquetasVaciasEnDimension.xlsx";
                CrearReporteGenerico crearReporteGenerico = new CrearReporteGenerico();
                var contenido = crearReporteGenerico.ExcelStream(estructuraReporteGenerico).ToArray();
                crearReporteGenerico.CrearArchivoEnExcel(contenido, rutaDestino);
            }
        }



        [TestMethod]
        public void ReporteGenericoExcelMongoDb_ConMedidas()
        {
            var conectionServer = new ConnectionServer
            {
                //miConnectionString = "mongodb://usr_RepositorioInformacion:4dm1n1str4t0r@ds035185-a0.mongolab.com:35185,ds035185-a1.mongolab.com:35185/repositorioabaxxbrl?replicaSet=rs-ds035185",
                //miBaseDatos = "repositorioabaxxbrl"
                miConnectionString = "mongodb://usr_RepositorioInformacion:4dm1n1str4t0r@172.16.235.123:27017/repositorioAbaxXbrl",
                miBaseDatos = "repositorioAbaxXbrl"
            };

            conectionServer.init();

            var conexion = new Conexion(conectionServer);
            var blockStoreDocIns = new BlockStoreDocumentoInstancia(conexion);
            var blockStoreConsulta = new BlockStoreConsulta(conexion);
            var GrupoEmpresaService = new GrupoEmpresaService
            {
                EmpresaRepository = new EmpresaRepository(),
                GrupoEmpresaRepository = new GrupoEmpresaRepository(),
                RegistroAuditoriaRepository = new RegistroAuditoriaRepository()
            };

            var BlockStoreHechoService = new BlockStoreHechoService
            {
                BlockStoreDocumentoInstancia = blockStoreDocIns,
                BlockStoreConsulta = blockStoreConsulta,
                Collection = "BlockStoreHecho",
                CollectionDimension = "BlockStoreDimension",
                CollectionEmpresas = "BlockStoreEmpresa",
                CollectionUnidades = "BlockStoreUnidad",
                CollectionConcepto = "BlockStoreConcepto",
                GrupoEmpresaService = GrupoEmpresaService
            };

            #region filtros
            var filtroConsulta = new EntFiltroConsultaHecho();
            filtroConsulta.filtros = new EntFiltrosAdicionales();

            filtroConsulta.filtros.entidadesId = new string[2];
            filtroConsulta.filtros.entidadesId[0] = "DAIMLER";
            filtroConsulta.filtros.entidadesId[1] = "AEROMEX";

            filtroConsulta.filtros.unidades = new string[2];
            filtroConsulta.filtros.unidades[0] = "MXN";
            filtroConsulta.filtros.unidades[1] = "USD";

            filtroConsulta.filtros.periodos = new EntPeriodo[3];

            filtroConsulta.filtros.periodos[0] = new EntPeriodo();
            filtroConsulta.filtros.periodos[1] = new EntPeriodo();
            filtroConsulta.filtros.periodos[2] = new EntPeriodo();

            filtroConsulta.filtros.periodos[0].FechaFin = new DateTime(2015, 6, 30);
            filtroConsulta.filtros.periodos[0].FechaInicio = new DateTime(2015, 1, 1);

            filtroConsulta.filtros.periodos[1].FechaFin = new DateTime(2015, 6, 30);
            filtroConsulta.filtros.periodos[1].FechaInicio = new DateTime(2015, 4, 1);

            filtroConsulta.filtros.periodos[2].FechaFin = new DateTime(2014, 12, 31);
            filtroConsulta.filtros.periodos[2].FechaInicio = new DateTime(2014, 4, 1);


            filtroConsulta.idioma = "es";
            filtroConsulta.conceptos = new EntConcepto[2];
            filtroConsulta.conceptos[0] = new EntConcepto();
            filtroConsulta.conceptos[1] = new EntConcepto();

            filtroConsulta.conceptos[0].Id = "ifrs-full_BasicEarningsLossPerShareFromContinuingOperations";
            filtroConsulta.conceptos[0].EsAbstracto = false;
            filtroConsulta.conceptos[0].EspacioNombresTaxonomia = "http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_ics_entry_point_2014-12-05";
            filtroConsulta.conceptos[0].Indentacion = 1;
            filtroConsulta.conceptos[0].orden = 1;


            filtroConsulta.conceptos[1].Id = "ifrs-full_DistributionCostsxxxx";
            filtroConsulta.conceptos[1].EsAbstracto = false;
            filtroConsulta.conceptos[1].EspacioNombresTaxonomia = "http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_ics_entry_point_2014-12-05";
            filtroConsulta.conceptos[1].Indentacion = 1;
            filtroConsulta.conceptos[1].orden = 2;


            #endregion

            var listaDeHechos = BlockStoreHechoService.ConsultarRepositorio(filtroConsulta, 1, 100);

            ReporteGenericoMongoDB reporteGenericoMongoDB = new ReporteGenericoMongoDB();
            // Crear estructura de reporte
            EstructuraReporteGenerico estructuraReporteGenerico = reporteGenericoMongoDB.CrearEstructuraGenerica(filtroConsulta, listaDeHechos, true);

            if (estructuraReporteGenerico != null)
            {
                string rutaDestino = @"E:\VictorCastro\ExcelXbrlGenerico\plantillaMongoDB_2015_ConMedida.xlsx";
                CrearReporteGenerico crearReporteGenerico = new CrearReporteGenerico();
                var contenido = crearReporteGenerico.ExcelStream(estructuraReporteGenerico).ToArray();
                crearReporteGenerico.CrearArchivoEnExcel(contenido, rutaDestino);
            }
        }


        [TestMethod]
        public void ReporteGenericoExcelMongoDb_ConMedidasyDimensiones()
        {
            var conectionServer = new ConnectionServer
            {
                //miConnectionString = "mongodb://usr_RepositorioInformacion:4dm1n1str4t0r@ds035185-a0.mongolab.com:35185,ds035185-a1.mongolab.com:35185/repositorioabaxxbrl?replicaSet=rs-ds035185",
                //miBaseDatos = "repositorioabaxxbrl"
                miConnectionString = "mongodb://usr_RepositorioInformacion:4dm1n1str4t0r@172.16.235.123:27017/repositorioAbaxXbrl",
                miBaseDatos = "repositorioAbaxXbrl"
            };

            conectionServer.init();

            var conexion = new Conexion(conectionServer);
            var blockStoreDocIns = new BlockStoreDocumentoInstancia(conexion);
            var blockStoreConsulta = new BlockStoreConsulta(conexion);
            var GrupoEmpresaService = new GrupoEmpresaService
            {
                EmpresaRepository = new EmpresaRepository(),
                GrupoEmpresaRepository = new GrupoEmpresaRepository(),
                RegistroAuditoriaRepository = new RegistroAuditoriaRepository()
            };

            var BlockStoreHechoService = new BlockStoreHechoService
            {
                BlockStoreDocumentoInstancia = blockStoreDocIns,
                BlockStoreConsulta = blockStoreConsulta,
                Collection = "BlockStoreHecho",
                CollectionDimension = "BlockStoreDimension",
                CollectionEmpresas = "BlockStoreEmpresa",
                CollectionUnidades = "BlockStoreUnidad",
                CollectionConcepto = "BlockStoreConcepto",
                GrupoEmpresaService = GrupoEmpresaService
            };

            #region filtros
            var filtroConsulta = new EntFiltroConsultaHecho();
            filtroConsulta.filtros = new EntFiltrosAdicionales();

            filtroConsulta.filtros.entidadesId = new string[2];
            filtroConsulta.filtros.entidadesId[0] = "DAIMLER";
            filtroConsulta.filtros.entidadesId[1] = "AEROMEX";

            filtroConsulta.filtros.unidades = new string[2];
            filtroConsulta.filtros.unidades[0] = "MXN";
            filtroConsulta.filtros.unidades[1] = "USD";

            filtroConsulta.filtros.periodos = new EntPeriodo[3];

            filtroConsulta.filtros.periodos[0] = new EntPeriodo();
            filtroConsulta.filtros.periodos[1] = new EntPeriodo();
            filtroConsulta.filtros.periodos[2] = new EntPeriodo();

            filtroConsulta.filtros.periodos[0].FechaFin = new DateTime(2015, 6, 30);
            filtroConsulta.filtros.periodos[0].FechaInicio = new DateTime(2015, 1, 1);

            filtroConsulta.filtros.periodos[1].FechaFin = new DateTime(2015, 6, 30);
            filtroConsulta.filtros.periodos[1].FechaInicio = new DateTime(2015, 4, 1);

            filtroConsulta.filtros.periodos[2].FechaFin = new DateTime(2014, 12, 31);
            filtroConsulta.filtros.periodos[2].FechaInicio = new DateTime(2014, 4, 1);


            filtroConsulta.idioma = "es";
            filtroConsulta.conceptos = new EntConcepto[2];
            filtroConsulta.conceptos[0] = new EntConcepto();
            filtroConsulta.conceptos[1] = new EntConcepto();

            // Entidad: DAIMLER , Dimension =false, Divisora = true 
            filtroConsulta.conceptos[0].Id = "ifrs-full_BasicEarningsLossPerShareFromContinuingOperations";
            filtroConsulta.conceptos[0].EsAbstracto = false;
            filtroConsulta.conceptos[0].EspacioNombresTaxonomia = "http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_ics_entry_point_2014-12-05";
            filtroConsulta.conceptos[0].Indentacion = 1;
            filtroConsulta.conceptos[0].orden = 1;

            // Entidad : AEROMEX  - Tiene dimensiones  - Divisora = false
            filtroConsulta.conceptos[1].Id = "ifrs_Equity";
            filtroConsulta.conceptos[1].EsAbstracto = false;
            filtroConsulta.conceptos[1].EspacioNombresTaxonomia = "http://www.bmv.com.mx/fr/ics/2012-04-01/ifrs-mx-ics-entryPoint-all";
            filtroConsulta.conceptos[1].Indentacion = 2;
            filtroConsulta.conceptos[1].orden = 2;

            #endregion

            var listaDeHechos = BlockStoreHechoService.ConsultarRepositorio(filtroConsulta, 1, 100);

            
            ReporteGenericoMongoDB reporteGenericoMongoDB = new ReporteGenericoMongoDB();
            // Crear estructura de reporte
            EstructuraReporteGenerico estructuraReporteGenerico = reporteGenericoMongoDB.CrearEstructuraGenerica(filtroConsulta, listaDeHechos, true);

            if (estructuraReporteGenerico != null)
            {
                string rutaDestino = @"E:\VictorCastro\ExcelXbrlGenerico\plantillaMongoDB_2015_ConMedidasyDimensiones.xlsx";
                CrearReporteGenerico crearReporteGenerico = new CrearReporteGenerico();
                var contenido = crearReporteGenerico.ExcelStream(estructuraReporteGenerico).ToArray();
                crearReporteGenerico.CrearArchivoEnExcel(contenido, rutaDestino);
            }

        }




        [TestMethod]
        public void ReporteGenericoExcelMongoDb_ConMedidasySinDimensiones()
        {
            var conectionServer = new ConnectionServer
            {
                //miConnectionString = "mongodb://usr_RepositorioInformacion:4dm1n1str4t0r@ds035185-a0.mongolab.com:35185,ds035185-a1.mongolab.com:35185/repositorioabaxxbrl?replicaSet=rs-ds035185",
                //miBaseDatos = "repositorioabaxxbrl"
                miConnectionString = "mongodb://usr_RepositorioInformacion:4dm1n1str4t0r@172.16.235.123:27017/repositorioAbaxXbrl",
                miBaseDatos = "repositorioAbaxXbrl"
            };

            conectionServer.init();

            var conexion = new Conexion(conectionServer);
            var blockStoreDocIns = new BlockStoreDocumentoInstancia(conexion);
            var blockStoreConsulta = new BlockStoreConsulta(conexion);
            var GrupoEmpresaService = new GrupoEmpresaService
            {
                EmpresaRepository = new EmpresaRepository(),
                GrupoEmpresaRepository = new GrupoEmpresaRepository(),
                RegistroAuditoriaRepository = new RegistroAuditoriaRepository()
            };

            var BlockStoreHechoService = new BlockStoreHechoService
            {
                BlockStoreDocumentoInstancia = blockStoreDocIns,
                BlockStoreConsulta = blockStoreConsulta,
                Collection = "BlockStoreHecho",
                CollectionDimension = "BlockStoreDimension",
                CollectionEmpresas = "BlockStoreEmpresa",
                CollectionUnidades = "BlockStoreUnidad",
                CollectionConcepto = "BlockStoreConcepto",
                GrupoEmpresaService = GrupoEmpresaService
            };

            #region filtros
            var filtroConsulta = new EntFiltroConsultaHecho();
            filtroConsulta.filtros = new EntFiltrosAdicionales();

            filtroConsulta.filtros.entidadesId = new string[2];
            filtroConsulta.filtros.entidadesId[0] = "DAIMLER";
            filtroConsulta.filtros.entidadesId[1] = "AEROMEX";

            filtroConsulta.filtros.unidades = new string[2];
            filtroConsulta.filtros.unidades[0] = "MXN";
            filtroConsulta.filtros.unidades[1] = "USD";

            filtroConsulta.filtros.periodos = new EntPeriodo[3];

            filtroConsulta.filtros.periodos[0] = new EntPeriodo();
            filtroConsulta.filtros.periodos[1] = new EntPeriodo();
            filtroConsulta.filtros.periodos[2] = new EntPeriodo();

            filtroConsulta.filtros.periodos[0].FechaFin = new DateTime(2015, 6, 30);
            filtroConsulta.filtros.periodos[0].FechaInicio = new DateTime(2015, 1, 1);

            filtroConsulta.filtros.periodos[1].FechaFin = new DateTime(2015, 6, 30);
            filtroConsulta.filtros.periodos[1].FechaInicio = new DateTime(2015, 4, 1);

            filtroConsulta.filtros.periodos[2].FechaFin = new DateTime(2014, 12, 31);
            filtroConsulta.filtros.periodos[2].FechaInicio = new DateTime(2014, 4, 1);


            filtroConsulta.idioma = "es";
            filtroConsulta.conceptos = new EntConcepto[4];
            filtroConsulta.conceptos[0] = new EntConcepto();
            filtroConsulta.conceptos[1] = new EntConcepto();
            filtroConsulta.conceptos[2] = new EntConcepto();
            filtroConsulta.conceptos[3] = new EntConcepto();

            // Entidad: DAIMLER , Dimension =false, Divisora = true 
            filtroConsulta.conceptos[0].Id = "ifrs-full_BasicEarningsLossPerShareFromContinuingOperations";
            filtroConsulta.conceptos[0].EsAbstracto = false;
            filtroConsulta.conceptos[0].EspacioNombresTaxonomia = "http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_ics_entry_point_2014-12-05";
            filtroConsulta.conceptos[0].Indentacion = 1;
            filtroConsulta.conceptos[0].orden = 1;

            // Entidad : AEROMEX  - Dimension = false - Divisora = false
            filtroConsulta.conceptos[1].Id = "mx-ifrs-ics_ResultadoEjercicio";
            filtroConsulta.conceptos[1].EsAbstracto = false;
            filtroConsulta.conceptos[1].EspacioNombresTaxonomia = "http://www.bmv.com.mx/fr/ics/2012-04-01/ifrs-mx-ics-entryPoint-all";
            filtroConsulta.conceptos[1].Indentacion = 1;
            filtroConsulta.conceptos[1].orden = 2;

            // Entidad : AEROMEX  - Dimension = false - Divisora = false
            filtroConsulta.conceptos[2].Id = "ifrs-cp_1_AccumulatedOtherComprehensiveIncome";
            filtroConsulta.conceptos[2].EsAbstracto = false;
            filtroConsulta.conceptos[2].EspacioNombresTaxonomia = "http://www.bmv.com.mx/fr/ics/2012-04-01/ifrs-mx-ics-entryPoint-all";
            filtroConsulta.conceptos[2].Indentacion = 1;
            filtroConsulta.conceptos[2].orden = 3;

            // Entidad : DAIMLER  - Dimension = false - Divisora = false
            filtroConsulta.conceptos[3].Id = "ifrs-full_ProfitLossBeforeTax";
            filtroConsulta.conceptos[3].EsAbstracto = false;
            filtroConsulta.conceptos[3].EspacioNombresTaxonomia = "http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_ics_entry_point_2014-12-05";
            filtroConsulta.conceptos[3].Indentacion = 1;
            filtroConsulta.conceptos[3].orden = 4;

            #endregion

            var listaDeHechos = BlockStoreHechoService.ConsultarRepositorio(filtroConsulta, 1, 100);

            
            ReporteGenericoMongoDB reporteGenericoMongoDB = new ReporteGenericoMongoDB();
            // Crear estructura de reporte
            EstructuraReporteGenerico estructuraReporteGenerico = reporteGenericoMongoDB.CrearEstructuraGenerica(filtroConsulta, listaDeHechos, true);

            if (estructuraReporteGenerico != null)
            {
                string rutaDestino = @"E:\VictorCastro\ExcelXbrlGenerico\plantillaMongoDB_2015_ConMedidasySinDimensiones.xlsx";
                CrearReporteGenerico crearReporteGenerico = new CrearReporteGenerico();
                var contenido = crearReporteGenerico.ExcelStream(estructuraReporteGenerico).ToArray();
                crearReporteGenerico.CrearArchivoEnExcel(contenido, rutaDestino);
            }
        }



        [TestMethod]
        public void ReporteGenericoExcelMongoDb_SinDimensionesSinDivisora()
        {
            var conectionServer = new ConnectionServer
            {
                //miConnectionString = "mongodb://usr_RepositorioInformacion:4dm1n1str4t0r@ds035185-a0.mongolab.com:35185,ds035185-a1.mongolab.com:35185/repositorioabaxxbrl?replicaSet=rs-ds035185",
                //miBaseDatos = "repositorioabaxxbrl"
                miConnectionString = "mongodb://usr_RepositorioInformacion:4dm1n1str4t0r@172.16.235.123:27017/repositorioAbaxXbrl",
                miBaseDatos = "repositorioAbaxXbrl"
            };

            conectionServer.init();

            var conexion = new Conexion(conectionServer);
            var blockStoreDocIns = new BlockStoreDocumentoInstancia(conexion);
            var blockStoreConsulta = new BlockStoreConsulta(conexion);
            var GrupoEmpresaService = new GrupoEmpresaService
            {
                EmpresaRepository = new EmpresaRepository(),
                GrupoEmpresaRepository = new GrupoEmpresaRepository(),
                RegistroAuditoriaRepository = new RegistroAuditoriaRepository()
            };

            var BlockStoreHechoService = new BlockStoreHechoService
            {
                BlockStoreDocumentoInstancia = blockStoreDocIns,
                BlockStoreConsulta = blockStoreConsulta,
                Collection = "BlockStoreHecho",
                CollectionDimension = "BlockStoreDimension",
                CollectionEmpresas = "BlockStoreEmpresa",
                CollectionUnidades = "BlockStoreUnidad",
                CollectionConcepto = "BlockStoreConcepto",
                GrupoEmpresaService = GrupoEmpresaService
            };

            #region filtros
            var filtroConsulta = new EntFiltroConsultaHecho();
            filtroConsulta.filtros = new EntFiltrosAdicionales();

            filtroConsulta.filtros.entidadesId = new string[2];
            filtroConsulta.filtros.entidadesId[0] = "DAIMLER";
            filtroConsulta.filtros.entidadesId[1] = "AEROMEX";

            filtroConsulta.filtros.unidades = new string[2];
            filtroConsulta.filtros.unidades[0] = "MXN";
            filtroConsulta.filtros.unidades[1] = "USD";

            filtroConsulta.filtros.periodos = new EntPeriodo[3];

            filtroConsulta.filtros.periodos[0] = new EntPeriodo();
            filtroConsulta.filtros.periodos[1] = new EntPeriodo();
            filtroConsulta.filtros.periodos[2] = new EntPeriodo();

            filtroConsulta.filtros.periodos[0].FechaFin = new DateTime(2015, 6, 30);
            filtroConsulta.filtros.periodos[0].FechaInicio = new DateTime(2015, 1, 1);

            filtroConsulta.filtros.periodos[1].FechaFin = new DateTime(2015, 6, 30);
            filtroConsulta.filtros.periodos[1].FechaInicio = new DateTime(2015, 4, 1);

            filtroConsulta.filtros.periodos[2].FechaFin = new DateTime(2014, 12, 31);
            filtroConsulta.filtros.periodos[2].FechaInicio = new DateTime(2014, 4, 1);


            filtroConsulta.idioma = "es";
            filtroConsulta.conceptos = new EntConcepto[3];
            filtroConsulta.conceptos[0] = new EntConcepto();
            filtroConsulta.conceptos[1] = new EntConcepto();
            filtroConsulta.conceptos[2] = new EntConcepto();


            // Entidad : AEROMEX  - Dimension = false - Divisora = false
            filtroConsulta.conceptos[0].Id = "mx-ifrs-ics_ResultadoEjercicio";
            filtroConsulta.conceptos[0].EsAbstracto = false;
            filtroConsulta.conceptos[0].EspacioNombresTaxonomia = "http://www.bmv.com.mx/fr/ics/2012-04-01/ifrs-mx-ics-entryPoint-all";
            filtroConsulta.conceptos[0].Indentacion = 1;
            filtroConsulta.conceptos[0].orden = 1;

            // Entidad : AEROMEX  - Dimension = false - Divisora = false
            filtroConsulta.conceptos[1].Id = "ifrs-cp_1_AccumulatedOtherComprehensiveIncome";
            filtroConsulta.conceptos[1].EsAbstracto = false;
            filtroConsulta.conceptos[1].EspacioNombresTaxonomia = "http://www.bmv.com.mx/fr/ics/2012-04-01/ifrs-mx-ics-entryPoint-all";
            filtroConsulta.conceptos[1].Indentacion = 2;
            filtroConsulta.conceptos[1].orden = 2;

            // Entidad : DAIMLER  - Dimension = false - Divisora = false
            filtroConsulta.conceptos[2].Id = "ifrs-full_ProfitLossBeforeTax";
            filtroConsulta.conceptos[2].EsAbstracto = false;
            filtroConsulta.conceptos[2].EspacioNombresTaxonomia = "http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_ics_entry_point_2014-12-05";
            filtroConsulta.conceptos[2].Indentacion = 2;
            filtroConsulta.conceptos[2].orden = 3;

            #endregion

            var listaDeHechos = BlockStoreHechoService.ConsultarRepositorio(filtroConsulta, 1, 100);

            ReporteGenericoMongoDB reporteGenericoMongoDB = new ReporteGenericoMongoDB();
            // Crear estructura de reporte
            EstructuraReporteGenerico estructuraReporteGenerico = reporteGenericoMongoDB.CrearEstructuraGenerica(filtroConsulta, listaDeHechos, true);

            if (estructuraReporteGenerico != null)
            {
                string rutaDestino = @"E:\VictorCastro\ExcelXbrlGenerico\plantillaMongoDB_2015_SinDimensionesSinDivisora.xlsx";
                CrearReporteGenerico crearReporteGenerico = new CrearReporteGenerico();
                var contenido = crearReporteGenerico.ExcelStream(estructuraReporteGenerico).ToArray();
                crearReporteGenerico.CrearArchivoEnExcel(contenido, rutaDestino);
            }
        }


        [TestMethod]
        public void ReporteGenericoExcelMongoDb_ConDimension()
        {
            var conectionServer = new ConnectionServer
            {
                //miConnectionString = "mongodb://usr_RepositorioInformacion:4dm1n1str4t0r@ds035185-a0.mongolab.com:35185,ds035185-a1.mongolab.com:35185/repositorioabaxxbrl?replicaSet=rs-ds035185",
                //miBaseDatos = "repositorioabaxxbrl"
                miConnectionString = "mongodb://usr_RepositorioInformacion:4dm1n1str4t0r@172.16.235.123:27017/repositorioAbaxXbrl",
                miBaseDatos = "repositorioAbaxXbrl"
            };

            conectionServer.init();

            var conexion = new Conexion(conectionServer);
            var blockStoreDocIns = new BlockStoreDocumentoInstancia(conexion);
            var blockStoreConsulta = new BlockStoreConsulta(conexion);
            var GrupoEmpresaService = new GrupoEmpresaService
            {
                EmpresaRepository = new EmpresaRepository(),
                GrupoEmpresaRepository = new GrupoEmpresaRepository(),
                RegistroAuditoriaRepository = new RegistroAuditoriaRepository()
            };

            var BlockStoreHechoService = new BlockStoreHechoService
            {
                BlockStoreDocumentoInstancia = blockStoreDocIns,
                BlockStoreConsulta = blockStoreConsulta,
                Collection = "BlockStoreHecho",
                CollectionDimension = "BlockStoreDimension",
                CollectionEmpresas = "BlockStoreEmpresa",
                CollectionUnidades = "BlockStoreUnidad",
                CollectionConcepto = "BlockStoreConcepto",
                GrupoEmpresaService = GrupoEmpresaService
            };

            #region filtros
            var filtroConsulta = new EntFiltroConsultaHecho();
            filtroConsulta.filtros = new EntFiltrosAdicionales();

            filtroConsulta.filtros.entidadesId = new string[2];
            filtroConsulta.filtros.entidadesId[0] = "DAIMLER";
            filtroConsulta.filtros.entidadesId[1] = "AEROMEX";

            filtroConsulta.filtros.unidades = new string[2];
            filtroConsulta.filtros.unidades[0] = "MXN";
            filtroConsulta.filtros.unidades[1] = "USD";

            filtroConsulta.filtros.periodos = new EntPeriodo[3];

            filtroConsulta.filtros.periodos[0] = new EntPeriodo();
            filtroConsulta.filtros.periodos[1] = new EntPeriodo();
            filtroConsulta.filtros.periodos[2] = new EntPeriodo();

            filtroConsulta.filtros.periodos[0].FechaFin = new DateTime(2015, 6, 30);
            filtroConsulta.filtros.periodos[0].FechaInicio = new DateTime(2015, 1, 1);

            filtroConsulta.filtros.periodos[1].FechaFin = new DateTime(2015, 6, 30);
            filtroConsulta.filtros.periodos[1].FechaInicio = new DateTime(2015, 4, 1);

            filtroConsulta.filtros.periodos[2].FechaFin = new DateTime(2014, 12, 31);
            filtroConsulta.filtros.periodos[2].FechaInicio = new DateTime(2014, 4, 1);


            filtroConsulta.idioma = "es";
            filtroConsulta.conceptos = new EntConcepto[4];
            filtroConsulta.conceptos[0] = new EntConcepto();
            filtroConsulta.conceptos[1] = new EntConcepto();
            filtroConsulta.conceptos[2] = new EntConcepto();
            filtroConsulta.conceptos[3] = new EntConcepto();

            // Entidad : AEROMEX  - Dimension = true - Divisora = false
            filtroConsulta.conceptos[0].Id = "ifrs_Equity";
            filtroConsulta.conceptos[0].EsAbstracto = false;
            filtroConsulta.conceptos[0].EspacioNombresTaxonomia = "http://www.bmv.com.mx/fr/ics/2012-04-01/ifrs-mx-ics-entryPoint-all";
            filtroConsulta.conceptos[0].Indentacion = 1;
            filtroConsulta.conceptos[0].orden = 1;

            // Entidad : AEROMEX  - Dimension = true - Divisora = false
            filtroConsulta.conceptos[1].Id = "ifrs_IssuedCapital";
            filtroConsulta.conceptos[1].EsAbstracto = false;
            filtroConsulta.conceptos[1].EspacioNombresTaxonomia = "http://www.bmv.com.mx/fr/ics/2012-04-01/ifrs-mx-ics-entryPoint-all";
            filtroConsulta.conceptos[1].Indentacion = 0;
            filtroConsulta.conceptos[1].orden = 4;

            // Entidad : DAIMLER  - Dimension = true - Divisora = false
            filtroConsulta.conceptos[2].Id = "ifrs-full_ProfitLoss";
            filtroConsulta.conceptos[2].EsAbstracto = false;
            filtroConsulta.conceptos[2].EspacioNombresTaxonomia = "http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_ics_entry_point_2014-12-05";
            filtroConsulta.conceptos[2].Indentacion =0;
            filtroConsulta.conceptos[2].orden = 1;

            // Entidad : DAIMLER  - Dimension = true - Divisora = false
            filtroConsulta.conceptos[3].Id = "ifrs-full_OtherComprehensiveIncome";
            filtroConsulta.conceptos[3].EsAbstracto = false;
            filtroConsulta.conceptos[3].EspacioNombresTaxonomia = "http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_ics_entry_point_2014-12-05";
            filtroConsulta.conceptos[3].Indentacion = 1;
            filtroConsulta.conceptos[3].orden = 3;

            #endregion

            var listaDeHechos = BlockStoreHechoService.ConsultarRepositorio(filtroConsulta, 1, 100);

            ReporteGenericoMongoDB reporteGenericoMongoDB = new ReporteGenericoMongoDB();
            // Crear estructura de reporte
            EstructuraReporteGenerico estructuraReporteGenerico = reporteGenericoMongoDB.CrearEstructuraGenerica(filtroConsulta, listaDeHechos, true);

            if (estructuraReporteGenerico != null)
            {
                string rutaDestino = @"E:\VictorCastro\ExcelXbrlGenerico\plantillaMongoDB_2015_ConDimension.xlsx";
                CrearReporteGenerico crearReporteGenerico = new CrearReporteGenerico();
                var contenido = crearReporteGenerico.ExcelStream(estructuraReporteGenerico).ToArray();
                crearReporteGenerico.CrearArchivoEnExcel(contenido, rutaDestino);
            }
        }

    }
}
