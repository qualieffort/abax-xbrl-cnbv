using Microsoft.VisualStudio.TestTools.UnitTesting;
using AbaxXBRLBlockStore.Common.Connection.MongoDb;
using AbaxXBRLBlockStore.BlockStore;
using System.Collections.Generic;
using System.Diagnostics;
using AbaxXBRLBlockStore.Services;
using System.IO;
using AbaxXBRLCore.Viewer.Application.Dto;
using Newtonsoft.Json;
using AbaxXBRLCore.MongoDB.Services.Impl;
using System.Threading;
using AbaxXBRLCore.Common.Util;

namespace TestAbaxXBRL
{
    /// <summary>
    /// Clase de prueba que maneja la creación de registros de un documento instancia
    /// </summary>
    [TestClass]
    public class TestCrearRegistrosBlockStore
    {

        /// <summary>
        /// Prueba unitaria pra la creación de registros de un documento instancia
        /// </summary>
        [TestMethod]
        public void registrarActualizarHechosBlockStoreDocumentoInstancia()
        {
            LogUtil.LogDirPath = @"..\..\TestOutput\";
            LogUtil.Inicializa();
            
            var conectionServer = new ConnectionServer
            {
                //miConnectionString = "mongodb://usr_RepositorioInformacion:4dm1n1str4t0r@ds035185-a0.mongolab.com:35185,ds035185-a1.mongolab.com:35185/repositorioabaxxbrl?replicaSet=rs-ds035185",
                //miConnectionString = "mongodb://usr_RepositorioInformacion:4dm1n1str4t0r@172.16.235.123:27017/repositorioAbaxXbrl",
                //miConnectionString = "mongodb://usrAbaxXbrl:usrAbaxXbrl@ds054298.mlab.com:54298/abaxxbrl",
                miConnectionString = "mongodb://localhost/abaxxbrl",

                miBaseDatos = "abaxxbrl"
                //miBaseDatos = "repositorioabaxxbrl"
            };

            conectionServer.init();

            var conexion = new Conexion(conectionServer);
            var blockStore = new BlockStoreDocumentoInstancia(conexion);
            var blockStoreConsulta = new BlockStoreConsulta(conexion);
            var ConsumerFactoryTaskHechoImpl = new ConsumerFactoryTaskHechoImpl { numeroMaximoConsumidores = 25, con = conexion };

            var blockStoreHechoService = new BlockStoreHechoService
            {
                BlockStoreDocumentoInstancia = blockStore,
                BlockStoreConsulta = blockStoreConsulta,
                Collection = "BlockStoreHecho",
                CollectionDimension = "BlockStoreDimension",
                CollectionEmpresas = "BlockStoreEmpresa",
                CollectionUnidades = "BlockStoreUnidad",
                CollectionConcepto = "BlockStoreConcepto",
                ConsumerFactoryTaskHecho = ConsumerFactoryTaskHechoImpl
            };



            string line;

            LogUtil.LogDirPath = ".\\";
            LogUtil.Inicializa();

            var procesarList = Directory.GetFiles("C:/TemporalesJson/jsons");

            //var procesarList = new List<string> { 
              
              
              //"C:/Users/Luis Angel/Documents/Workspace/DocumentosPrueba/DocumentosErroneos/ifrsxbrl_ASUR_2015-2.json"
              //"C:/Users/Luis Angel/Documents/Workspace/DocumentosPrueba/DocumentosErroneos/ifrsxbrl_GICSA_2015-3.json"
              //"C:/Users/Luis Angel/Documents/Workspace/DocumentosPrueba/DocumentosErroneos/ifrsxbrl_HCITY_2015-2.json"
              //"C:/Users/Luis Angel/Documents/Workspace/DocumentosPrueba/DocumentosErroneos/ifrsxbrl_LAB_2015-2.json"
              //"C:/Users/Luis Angel/Documents/Workspace/DocumentosPrueba/DocumentosErroneos/ifrsxbrl_OMA_2015-1.json"
              //"C:/Users/Luis Angel/Documents/Workspace/DocumentosPrueba/DocumentosErroneos/ifrsxbrl_SIGMA_2015-1.json"
              //"C:/Users/Luis Angel/Documents/Workspace/DocumentosPrueba/DocumentosErroneos/ifrsxbrl_VWLEASE_2015-3.json"

              
            //};


            //var targetDirectory = "C:/Users/Luis Angel/Documents/Workspace/DocumentosPrueba/resultado";
            //string[] fileEntries = Directory.GetFiles(targetDirectory);


            //foreach (var itemArchivo in fileEntries)
            var indexName = "C:/TemporalesJson/jsons/".Length;
            var index = 0;
            foreach (var itemArchivo in procesarList)
            {
                using (var streamReader = new StreamReader(itemArchivo))
                {
                    try
                    {
                        line = streamReader.ReadToEnd();
                        var settings = new JsonSerializerSettings { NullValueHandling = NullValueHandling.Ignore };
                        var documentoInstanciXbrlDto = JsonConvert.DeserializeObject<DocumentoInstanciaXbrlDto>(line, settings);

                        blockStoreHechoService.registrarHechosDocumentoInstancia(documentoInstanciXbrlDto, 1, 1);
                        Debug.WriteLine("Registro del archivo: " + itemArchivo);
                        var nombre = itemArchivo.Substring(indexName);
                        //File.Move(itemArchivo, "C:/TemporalesJson/procesados/" + nombre);
                    }
                    catch (System.Exception ex)
                    {
                        System.Console.Out.Write(ex);
                        LogUtil.Error(ex);
                    }
                    
                }
            }
            while (true)
            {
                Debug.WriteLine("Registro");
                Thread.Sleep(1000);
            }
        }


        /// <summary>
        /// Prueba unitaria para la generación 
        /// </summary>
        [TestMethod]
        public void generarDocumentoConHechosDocumentoInstancia()
        {

            var conectionServer = new ConnectionServer
            {
                miConnectionString = "mongodb://usr_RepositorioInformacion:4dm1n1str4t0r@172.16.235.125:27017/repositorioAbaxXbrl",
                miBaseDatos = "repositorioAbaxXbrl"
            };

            var conexion = new Conexion(conectionServer);
            var blockStore = new BlockStoreDocumentoInstancia(conexion);
            var blockStoreConsulta = new BlockStoreConsulta(conexion);
            var ConsumerFactoryTaskHechoImpl = new ConsumerFactoryTaskHechoImpl { numeroMaximoConsumidores = 25, con = conexion };

            var blockStoreHechoService = new BlockStoreHechoService
            {
                BlockStoreDocumentoInstancia = blockStore,
                BlockStoreConsulta = blockStoreConsulta,
                Collection = "BlockStoreHecho",
                CollectionDimension = "BlockStoreDimension",
                CollectionEmpresas = "BlockStoreEmpresa",
                CollectionUnidades = "BlockStoreUnidad",
                CollectionConcepto = "BlockStoreConcepto",
                ConsumerFactoryTaskHecho = ConsumerFactoryTaskHechoImpl
            };


            string line;

            LogUtil.LogDirPath = ".\\";
            LogUtil.Inicializa();

            var procesarList = new List<string> { 
              //"C:/Users/Luis Angel/Documents/Workspace/DocumentosPrueba/trac.json"
              //"C:/Users/Luis Angel/Documents/Workspace/DocumentosPrueba/2015/ifrsxbrl_622986_2015-02_1_AUTLAN.json"
              "C:/Users/Luis Angel/Documents/Workspace/DocumentosPrueba/2015/ifrsxbrl_636036_2015-01_1_ALPEK.json"
              
            };


            var targetDirectory = "C:/Users/Luis Angel/Documents/Workspace/DocumentosPrueba/resultado";
            string[] fileEntries = Directory.GetFiles(targetDirectory);

            using (StreamWriter archivoSalida = new StreamWriter(@"C:\Users\Luis Angel\Documents\Workspace\informacionTaxonomia2012.json"))
            {
                foreach (var itemArchivo in fileEntries)
                //foreach (var itemArchivo in procesarList)
                {
                    using (var streamReader = new StreamReader(itemArchivo)) line = streamReader.ReadToEnd();
                    var settings = new JsonSerializerSettings { NullValueHandling = NullValueHandling.Ignore };
                    var documentoInstanciXbrlDto = JsonConvert.DeserializeObject<DocumentoInstanciaXbrlDto>(line, settings);

                    blockStoreHechoService.generarHechosDocumentoInstancia(documentoInstanciXbrlDto, archivoSalida);

                }
            }

        }



    }
}
