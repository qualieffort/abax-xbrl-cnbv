using AbaxXBRLCore.Common.Cache.Impl;
using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.Viewer.Application.Dto;
using AbaxXBRLCore.XPE.Common;
using AbaxXBRLCore.XPE.impl;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Text;

namespace TestAbaxXBRL
{
    /// <summary>
    /// Lee un conjunto de XBRL de una carpeta y genera repreentacion JSON
    /// </summary>
    [TestClass]
    class TestCrearJsonHistorico
    {
        /// <summary>
        /// Procesa los XBRL de una carpeta y los transforma a otra
        /// </summary>
        /// 
        [TestMethod]
        public void testProcesarCarpeta() {
            LogUtil.LogDirPath = ".\\";
            LogUtil.Inicializa();

            var archivos = Directory.GetFiles(@"C:\temp\transjson", "*.xbrl");
            var carpetaSalida = @"C:\temp\transjson\salida\";
            var xbrlService = XPEServiceImpl.GetInstance();
            Debug.WriteLine("COREROOT:" + xbrlService.GetCoreRoot());
            ConfiguracionCargaInstanciaDto configCarga = null;
            var cache = new CacheTaxonomiaEnMemoriaXBRL();

            LogUtil.Info("Iniciando proceso de transformación de archivos:" + archivos.Length);
            int i = 0;
            foreach(var rutaArchivo in archivos){
                i++;
                configCarga = new ConfiguracionCargaInstanciaDto()
                {
                    UrlArchivo = rutaArchivo,
                    CacheTaxonomia = cache,
                    ConstruirTaxonomia = true,
                    EjecutarValidaciones = false,
                    Errores = new List<ErrorCargaTaxonomiaDto>(),
                    ForzarCerradoDeXbrl = false,
                    InfoCarga = new AbaxCargaInfoDto()                    
                };
                LogUtil.Info("(" + i + ") Leyendo archivo:" + Path.GetFileName(rutaArchivo));
                var docIns = xbrlService.CargarDocumentoInstanciaXbrl(configCarga);
                LogUtil.Info("(" + i + ") Archivo Leido:" + Path.GetFileName(rutaArchivo));
                if (docIns != null) {
                    VerificarTaxonomiaEnCache(docIns, cache);
                    LogUtil.Info("(" + i + ") Generando JSON:" + Path.GetFileName(rutaArchivo));
                    string objJson = JsonConvert.SerializeObject(docIns, Formatting.Indented, new JsonSerializerSettings
                    {
                        ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                    });

                    using (var streamSalida = new FileStream(carpetaSalida + Path.GetFileNameWithoutExtension(rutaArchivo)+".json", FileMode.Create))
                    {
                        LogUtil.Info("(" + i + ") Escribiendo JSON:" + carpetaSalida + Path.GetFileNameWithoutExtension(rutaArchivo)+".json");
                        var bytesEscribir = Encoding.UTF8.GetBytes(objJson);
                        streamSalida.Write(bytesEscribir, 0, bytesEscribir.Length);
                    }
                }
                
            }

        }

        /// <summary>
        /// Veirifica si la taxonomía del archivo está en caché, si no está, se carga y agrega
        /// </summary>
        /// <param name="docIns"></param>
        /// <param name="cache"></param>

        private void VerificarTaxonomiaEnCache(DocumentoInstanciaXbrlDto docIns, CacheTaxonomiaEnMemoriaXBRL cache)
        {
            if (cache.ObtenerTaxonomia(docIns.DtsDocumentoInstancia) == null) {
                var servicio = XPEServiceImpl.GetInstance();
                var errores = new List<ErrorCargaTaxonomiaDto>();
                cache.AgregarTaxonomia(docIns.DtsDocumentoInstancia,
                    servicio.CargarTaxonomiaXbrl(docIns.DtsDocumentoInstancia[0].HRef, errores, true)
                    );
            }
        }
    }
}
