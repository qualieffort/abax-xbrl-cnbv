using AbaxXBRL.Taxonomia.Impl;
using AbaxXBRLCore.Common.Cache.Impl;
using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.Viewer.Application.Dto;
using AbaxXBRLCore.Viewer.Application.Service.Impl;
using AbaxXBRLCore.XPE;
using AbaxXBRLCore.XPE.Common;
using AbaxXBRLCore.XPE.Common.Util;
using AbaxXBRLCore.XPE.impl;
using java.util;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Text;

namespace TestAbaxXBRL
{
     [TestClass]
    public class TestIntegracionXPE
    {
         [TestMethod]
         public void testInicializar() {


             DateTime fechaNet = new DateTime();
             DateUtil.ParseDate("2015-01-01", DateUtil.YMDateFormat, out fechaNet);
             Date fecha = XPEUtil.CrearJavaDate(fechaNet);
            
             Debug.WriteLine(fecha.getYear());

             XPEService serv = XPEServiceImpl.GetInstance(true);
            
             Debug.WriteLine("COREROOT:" + serv.GetCoreRoot());

             if (serv.GetErroresInicializacion() != null){
                 
             }

             var errores = new List<ErrorCargaTaxonomiaDto>();

           

            var config2 = new ConfiguracionCargaInstanciaDto();
            config2.CacheTaxonomia = null;
            config2.ConstruirTaxonomia = true;
            config2.EjecutarValidaciones = true;
            config2.Errores = new List<ErrorCargaTaxonomiaDto>();
            //config2.UrlArchivo = @"C:\Users\Emigdio\Desktop\tmp\AA_BMV\fiduxbrl_875171_CIB2919_2019-01_1.xbrl";

            config2.Archivo = new FileStream(@"C:\Users\Emigdio\Desktop\tmp\AA_BMV\fiduxbrl_875171_CIB2919_2019-01_1.xbrl", FileMode.Open);

            var doc2 = serv.CargarDocumentoInstanciaXbrl(config2);
            Debug.WriteLine("Errores:" + config2.Errores.Count);
            config2.Archivo.Close();

           var config1 = new ConfiguracionCargaInstanciaDto();
            config1.CacheTaxonomia = null;
            config1.ConstruirTaxonomia = true;
            config1.EjecutarValidaciones = true;
            config1.Errores = new List<ErrorCargaTaxonomiaDto>();
            config1.UrlArchivo = @"C:\tmp\ifrsxbrl_SENDA_2017-4.xbrl";
            var doc1 = serv.CargarDocumentoInstanciaXbrl(config1);
            Debug.WriteLine("Errores:" + config1.Errores.Count);

            /*
            var taxo = serv.CargarTaxonomiaXbrl("http://emisnet.bmv.com.mx/taxonomy/mx-ifrs-2014-12-05/full_ifrs_mc_mx_ics_entry_point_2014-12-05.xsd",errores,true);
            Debug.WriteLine(taxo.EspacioNombresPrincipal);
            Debug.WriteLine("Errores:" + errores.Count);
            errores.Clear();

            var taxo2 = serv.CargarTaxonomiaXbrl("https://taxonomiasxbrl.cnbv.gob.mx/taxonomy/ra-prospecto-2016-08-22/ar_N_entry_point_2016-08-22.xsd", errores, true);
            Debug.WriteLine(taxo2.EspacioNombresPrincipal);
            Debug.WriteLine("Errores:" + errores.Count);
            errores.Clear();
            */


            var cache = new CacheTaxonomiaEnMemoriaXBRL();

             var listaDts = new List<DtsDocumentoInstanciaDto>();
             listaDts.Add(new DtsDocumentoInstanciaDto(){
                HRef = "http://emisnet.bmv.com.mx/taxonomy/mx-ifrs-2014-12-05/full_ifrs_mc_mx_ics_entry_point_2014-12-05.xsd",
                Tipo = DtsDocumentoInstanciaDto.SCHEMA_REF
             });

             //cache.AgregarTaxonomia(listaDts, taxo);
             


            
                 var info = new AbaxCargaInfoDto();

                 ConfiguracionCargaInstanciaDto config = new ConfiguracionCargaInstanciaDto();

                 config.UrlArchivo = @"C:\temp\lois\ifrsxbrl_BIMBO_2015-2.xbrl";
                 config.Errores = errores;
                 config.CacheTaxonomia = cache;
                 config.InfoCarga = info;
                 config.EjecutarValidaciones = false;
                 config.ConstruirTaxonomia = true;
                 var instancia = serv.CargarDocumentoInstanciaXbrl(config);


                 Debug.WriteLine("Tiempo de carga:" + info.MsCarga);
                 Debug.WriteLine("Tiempo de Validación:" + info.MsValidacion);
                 Debug.WriteLine("Tiempo de Procesamiento de Fórmulas:" + info.MsFormulas);
                 Debug.WriteLine("Tiempo de Transformación:" + info.MsTransformacion);
                 


                 foreach (var dd in instancia.DtsDocumentoInstancia)
                 {
                     Debug.WriteLine(dd.HRef);
                 }

                 foreach (var Idhecho in instancia.HechosPorIdConcepto["ifrs-mc_ManagementCommentaryExplanatory"])
                 {
                     var hecho = instancia.HechosPorId[Idhecho];
                     Debug.WriteLine(hecho.IdConcepto + " : " + hecho.IdContexto + ":" + hecho.Valor);
                 }

                 var sw = Stopwatch.StartNew();

                 var streamSalid = serv.GenerarDocumentoInstanciaXbrl(instancia, cache);

                sw.Stop();
             Debug.WriteLine("Creación doc:" + sw.ElapsedMilliseconds);

                 var salida = File.Create("C:\\temp\\load\\salida.xbrl");

                 streamSalid.CopyTo(salida);
                 salida.Close();
                 streamSalid.Close();

             
             
             foreach(var err in errores){
                 Debug.WriteLine(err.Mensaje);
             }
            /* foreach (var rol in taxo.RolesPresentacion)
             {
                 Debug.WriteLine(rol.Uri);
             }*/
         }
    }
}
