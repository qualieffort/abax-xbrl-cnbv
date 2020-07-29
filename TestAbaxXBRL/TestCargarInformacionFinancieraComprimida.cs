using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using AbaxXBRLBlockStore.Common.Connection.MongoDb;
using AbaxXBRLBlockStore.BlockStore;
using AbaxXBRLBlockStore.Services;
using System.IO;



using System.Collections.Generic;
using System.Diagnostics;
using AbaxXBRLBlockStore.Services;
using MongoDB.Driver;
using AbaxXBRLCore.Common.Util;
using Ionic.Zip;
using Newtonsoft.Json;
using AbaxXBRLCore.Viewer.Application.Dto;


namespace TestAbaxXBRL
{
    /// <summary>
    /// Prueba unitaria para cargar la informacion financiera comprimida en la base de datos de Mongo
    /// </summary>
    [TestClass]
    public class TestCargarInformacionFinancieraComprimida
    {
        /// <summary>
        /// Metodo que realiza la prueba de la carga de 
        /// </summary>
        [TestMethod]
        public void CargarInformacionFinancieraComprimidaEnMongoDB()
        {
            var conectionServer = new ConnectionServer
            {
                //connectionString = "mongodb://usr_mongoDB:usr_mongoDB@ds048878.mongolab.com:48878/abaxxbrl",
                miBaseDatos = "abaxxbrl"
            };

            conectionServer.init();

            var conexion = new Conexion(conectionServer);
            var blockStore = new BlockStoreDocumentoInstancia(conexion);

            var BlockStoreHechoService = new BlockStoreHechoService
            {
                BlockStoreDocumentoInstancia = blockStore,
                Collection = "InfFinanXbrl"

            };

            var streamReader = new StreamReader("d:/InformacionFinancieraJSON1.zip");

            var stream = streamReader.BaseStream;

            using (var zipFile = ZipFile.Read(stream))
            {
                var tmpDir = UtilAbax.ObtenerDirectorioTemporal();
                zipFile.ExtractAll("d:/TemporalesJson1", ExtractExistingFileAction.OverwriteSilently);

                foreach (var archivoInterno in zipFile)
                {
                    if (!archivoInterno.IsDirectory)
                    {

                        var json = "";
                        using (var streamReaderFile = new StreamReader("d:/TemporalesJson1" + Path.DirectorySeparatorChar + archivoInterno.FileName))
                            json = streamReaderFile.ReadToEnd();

                        var settings = new JsonSerializerSettings { NullValueHandling = NullValueHandling.Ignore };
                        var documentoInstanciXbrlDto = JsonConvert.DeserializeObject<DocumentoInstanciaXbrlDto>(json, settings);

                        var resultadoOperacion = BlockStoreHechoService.registrarHechosDocumentoInstancia(documentoInstanciXbrlDto, 1, 1);


                    }
                }

            }
        }

        /// <summary>
        /// Cargar informacion financiera de un directorio en Mongo DB
        /// </summary>
        [TestMethod]
        public void CargarInformacionFinancieraDirectorioEnMongoDB()
        {
            var conectionServer = new ConnectionServer
            {
                //connectionString = "mongodb://usr_mongodb:usr_mongodb@ds027325-a0.mongolab.com:27325,ds027325-a1.mongolab.com:27325/abaxxbrl?replicaSet=rs-ds027325",
                miBaseDatos = "abaxxbrl"
            };

            conectionServer.init();

            var conexion = new Conexion(conectionServer);
            var blockStore = new BlockStoreDocumentoInstancia(conexion);

            var BlockStoreHechoService = new BlockStoreHechoService
            {
                BlockStoreDocumentoInstancia = blockStore,
                Collection = "InfFinanXbrl"

            };

            string[] fileEntries = Directory.GetFiles("D:/TemporalesJson/resultado");
            var numeroRegistros = 0;
            foreach (var file in fileEntries)
            {

                var json = "";
                using (var streamReaderFile = new StreamReader(file))
                    json = streamReaderFile.ReadToEnd();
                var settings = new JsonSerializerSettings { NullValueHandling = NullValueHandling.Ignore };
                var documentoInstanciXbrlDto = JsonConvert.DeserializeObject<DocumentoInstanciaXbrlDto>(json, settings);
                var resultadoOperacion = BlockStoreHechoService.registrarHechosDocumentoInstancia(documentoInstanciXbrlDto, 1, 1);
                Debug.WriteLine("Registro del archivo: " + file + ": Numero de registro: " + numeroRegistros);

                numeroRegistros++;

            }
        }


    }
}
