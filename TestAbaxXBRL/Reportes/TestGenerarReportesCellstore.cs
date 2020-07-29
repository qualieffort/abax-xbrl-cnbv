using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Spring.Testing.Microsoft;
using AbaxXBRLCore.Distribucion;
using System.Collections.Generic;
using System.IO;
using AbaxXBRLCore.Services;
using AbaxXBRLCore.Repository;
using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.XPE.impl;
using AbaxXBRLCore.Viewer.Application.Dto;
using Newtonsoft.Json;
using AbaxXBRLCore.Distribucion.Impl;
using AbaxXBRLCore.Common.Cache;
using System.Linq;
using AbaxXBRLCore.CellStore.Services.Impl;
using System.Text;
using AbaxXBRLCore.Entities;
using AbaxXBRLCore.CellStore.Modelo;

namespace TestAbaxXBRL.Reportes
{
    /// <summary>
    /// Prueba unitaria para el envío de información financier a CNBV.
    /// </summary>
    [TestClass]
    public class TestGenerarReportesCellstore : AbstractDependencyInjectionSpringContextTests
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

       

        [TestMethod]
        public void GenerarReporteFichaTecnica()
        {
            LogUtil.LogDirPath = @"..\..\TestOutput\";
            LogUtil.Inicializa();
            /* var procesador = (IProcesarDistribucionDocumentoXBRLService)applicationContext.GetObject("ProcesarDistribucionDocumentoXBRLService");
             var documentoInstanciaRepository = (IDocumentoInstanciaRepository)applicationContext.GetObject("DocumentoInstanciaRepository");
             var cellStoreMongo = (AbaxXBRLCellStoreMongo)applicationContext.GetObject("AbaxXBRLCellStoreMongo");
             var versionDocumentoInstanciaRepository = (IVersionDocumentoInstanciaRepository)applicationContext.GetObject("VersionDocumentoInstanciaRepository");
             var distribucionCellstore = (IDistribucionDocumentoXBRL)applicationContext.GetObject("DistribucionCellStore");
             var candidatosReprocesar = documentoInstanciaRepository.ObtenCandidatosReprocesarMongo();
             */

            var reportesService = (IReporteFichaTecnicaCellStoreMongoService)applicationContext.GetObject("ReporteFichaTecnicaCellStoreMongoService");
            var parametros = new Dictionary<String, String>();
            var ticker = "LACOMER";
            parametros["claveCotizacion"] = "LACOMER";
            parametros["anio"] = "2017";
            parametros["trimestre"] = "4";
           
            var resultadoOut = reportesService.GenerarFichaTecnicaEmisora(parametros);

            if (resultadoOut.Resultado)
            {
                File.WriteAllBytes(@"..\..\TestOutput\"+ ticker + ".xlsx",resultadoOut.InformacionExtra as byte[]);
            }

        }

        


    }
}
