using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Text;
using System.Xml;
using AbaxXBRL.Taxonomia.Impl;
using AbaxXBRL.Taxonomia.Validador;
using AbaxXBRL.Taxonomia.Validador.Impl;
using AbaxXBRLCore.Repository.Implementation;
using AbaxXBRLCore.Services.Implementation;
using AbaxXBRLCore.Viewer.Application.Dto;
using AbaxXBRLCore.Viewer.Application.Service.Impl;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace TestAbaxXBRL
{
    /// <summary>
    /// Pruebas para la conversión del formatos de XBRL a DTO y de DTO a XBRL
    /// </summary>
    [TestClass]
    public class TestXbrlViewerService
    {
        [TestMethod]
        public void TestObtenerXBRL()
        {
            var service = new DocumentoInstanciaService
            {
                DocumentoInstanciaRepository = new DocumentoInstanciaRepository(),
                UsuarioDocumentoInstanciaRepository = new UsuarioDocumentoInstanciaRepository(),
                VersionDocumentoInstanciaRepository = new VersionDocumentoInstanciaRepository(),
                EmpresaRepository = new EmpresaRepository(),
                UsuarioRepository = new UsuarioRepository(),
                UnidadRepository = new UnidadRepository(),
                ContextoRepository = new ContextoRepository(),
                
                DtsDocumentoInstanciaRepository = new DtsDocumentoInstanciaRepository(),
                HechoRepository = new HechoRepository()
            };

            var documentoInstancia = new DocumentoInstanciaXBRL();
            documentoInstancia.Cargar(new FileStream(@"C:\temp\lois\ifrsxbrl_BIMBO_2015-2.xbrl", FileMode.Open));


            if (documentoInstancia.ManejadorErrores.PuedeContinuar())
            {
                IGrupoValidadoresTaxonomia grupoValidadores = new GrupoValidadoresTaxonomia();
                grupoValidadores.ManejadorErrores = documentoInstancia.ManejadorErrores;
                grupoValidadores.DocumentoInstancia = documentoInstancia;
                grupoValidadores.AgregarValidador(new ValidadorDocumentoInstancia());
                grupoValidadores.AgregarValidador(new ValidadorDimensionesDocumentoInstancia());
                grupoValidadores.ValidarDocumento();
            }

            var viewService = new XbrlViewerService();

            var instanciaDto = viewService.PreparaDocumentoParaVisor(documentoInstancia,null);
            instanciaDto.IdEmpresa = 1;
            var resultado = service.GuardarDocumentoInstanciaXbrl(instanciaDto, 3);
            var idDoc = instanciaDto.IdDocumentoInstancia;
            Debug.WriteLine("Nuevo Id:" + idDoc);

            resultado = service.ObtenerModeloDocumentoInstanciaXbrl(idDoc.Value, 3);
            
            var nuevoXbrl = viewService.CrearDocumentoInstanciaXbrl(documentoInstancia.Taxonomia, resultado.InformacionExtra as DocumentoInstanciaXbrlDto);

            var xmlDoc = nuevoXbrl.GenerarDocumentoXbrl();

            var settings = new XmlWriterSettings
                               {
                                   CloseOutput = true,
                                   Indent = true,
                                   NamespaceHandling = NamespaceHandling.OmitDuplicates,
                                   NewLineHandling = NewLineHandling.Entitize,
                                   Encoding = Encoding.UTF8
                               };
            string res = null;
            using(var memStream = new MemoryStream())
            {
                using(XmlWriter xmlWriterDebug = XmlWriter.Create(memStream, settings))
                {
                    xmlDoc.Save(xmlWriterDebug);
                    res = Encoding.UTF8.GetString(memStream.ToArray());

                }
            }
            Debug.WriteLine(res);
            
        }
    
        [TestMethod]
        public void TestObtenerXBRLBMV2015()
        {
            var service = new DocumentoInstanciaService
            {
                DocumentoInstanciaRepository = new DocumentoInstanciaRepository(),
                UsuarioDocumentoInstanciaRepository = new UsuarioDocumentoInstanciaRepository(),
                VersionDocumentoInstanciaRepository = new VersionDocumentoInstanciaRepository(),
               
                EmpresaRepository = new EmpresaRepository(),
                UsuarioRepository = new UsuarioRepository(),
                UnidadRepository = new UnidadRepository(),
                ContextoRepository = new ContextoRepository(),
                
                DtsDocumentoInstanciaRepository = new DtsDocumentoInstanciaRepository(),
                HechoRepository = new HechoRepository(),
                NotaAlPieRepository = new NotaAlPieRepository()
            };

            var documentoInstancia = new DocumentoInstanciaXBRL();
            documentoInstancia.Cargar(new FileStream(@"C:\workspace_abax\AbaxXBRL\mx_taxonomy\Complete_sample_data_instance_notes.xbrl", FileMode.Open));

           // documentoInstancia.Cargar(@"C:\workspace_abax\AbaxXBRL\XBRL-CONF-CR5-2012-01-24\Common\100-schema\104-02-TupleExampleAnyOrder.xml");

            

            if (documentoInstancia.ManejadorErrores.PuedeContinuar())
            {
                IGrupoValidadoresTaxonomia grupoValidadores = new GrupoValidadoresTaxonomia();
                grupoValidadores.ManejadorErrores = documentoInstancia.ManejadorErrores;
                grupoValidadores.DocumentoInstancia = documentoInstancia;
                grupoValidadores.AgregarValidador(new ValidadorDocumentoInstancia());
                grupoValidadores.AgregarValidador(new ValidadorDimensionesDocumentoInstancia());
                grupoValidadores.ValidarDocumento();
            }

            var viewService = new XbrlViewerService();

            var instanciaDto = viewService.PreparaDocumentoParaVisor(documentoInstancia,null);
            instanciaDto.IdEmpresa = 1;
            var resultado = service.GuardarDocumentoInstanciaXbrl(instanciaDto, 3);
            var idDoc = instanciaDto.IdDocumentoInstancia;
            Debug.WriteLine("Nuevo Id:" + idDoc);

            resultado = service.ObtenerModeloDocumentoInstanciaXbrl(idDoc.Value, 3);
            
            var nuevoXbrl = viewService.CrearDocumentoInstanciaXbrl(documentoInstancia.Taxonomia, resultado.InformacionExtra as DocumentoInstanciaXbrlDto);

            var xmlDoc = nuevoXbrl.GenerarDocumentoXbrl();

            var settings = new XmlWriterSettings
                               {
                                   CloseOutput = true,
                                   Indent = true,
                                   NamespaceHandling = NamespaceHandling.OmitDuplicates,
                                   NewLineHandling = NewLineHandling.Entitize,
                                   Encoding = Encoding.UTF8
                               };
            string res = null;
            using(var memStream = new MemoryStream())
            {
                using(XmlWriter xmlWriterDebug = XmlWriter.Create(memStream, settings))
                {
                    xmlDoc.Save(xmlWriterDebug);
                    res = Encoding.UTF8.GetString(memStream.ToArray());

                }
            }
            Debug.WriteLine(res);
            
        }

        [TestMethod]
        public void TestObtenerXBRLBMV2015DeBaseDeDatos()
        {
            var service = new DocumentoInstanciaService
            {
                DocumentoInstanciaRepository = new DocumentoInstanciaRepository(),
                UsuarioDocumentoInstanciaRepository = new UsuarioDocumentoInstanciaRepository(),
                VersionDocumentoInstanciaRepository = new VersionDocumentoInstanciaRepository(),
                
                EmpresaRepository = new EmpresaRepository(),
                UsuarioRepository = new UsuarioRepository(),
                UnidadRepository = new UnidadRepository(),
                ContextoRepository = new ContextoRepository(),
               
                DtsDocumentoInstanciaRepository = new DtsDocumentoInstanciaRepository(),
                HechoRepository = new HechoRepository()
            };
            var viewService = new XbrlViewerService();
            var resultado = service.ObtenerModeloDocumentoInstanciaXbrl(251, 3);
            var modeloDto = resultado.InformacionExtra as DocumentoInstanciaXbrlDto;
            var taxo = new TaxonomiaXBRL();
            taxo.ManejadorErrores = new ManejadorErroresCargaTaxonomia();
            taxo.ProcesarDefinicionDeEsquema(modeloDto.DtsDocumentoInstancia.First(x=>x.Tipo == DtsDocumentoInstanciaDto.SCHEMA_REF).HRef);

            var nuevoXbrl = viewService.CrearDocumentoInstanciaXbrl(taxo, modeloDto);

            var xmlDoc = nuevoXbrl.GenerarDocumentoXbrl();

            var settings = new XmlWriterSettings
            {
                CloseOutput = true,
                Indent = true,
                NamespaceHandling = NamespaceHandling.OmitDuplicates,
                NewLineHandling = NewLineHandling.Entitize,
                Encoding = Encoding.UTF8
            };
            string res = null;
            using (var memStream = new MemoryStream())
            {
                using (XmlWriter xmlWriterDebug = XmlWriter.Create(memStream, settings))
                {
                    xmlDoc.Save(xmlWriterDebug);
                    res = Encoding.UTF8.GetString(memStream.ToArray());

                }
            }
            Debug.WriteLine(res);
        }

        [TestMethod]
        public void testUnidadesRepetidas() {

            XbrlViewerService serv = new XbrlViewerService();

            var docInst = new DocumentoInstanciaXBRL();

            docInst.Cargar(@"C:\temp\Prueba GNM BMV 7 10 abril 15.xbrl");

            var docDto = serv.PreparaDocumentoParaVisor(docInst,null);

            serv.EliminarElementosDuplicados(docDto);

            serv.CrearDocumentoInstanciaXbrl(docInst.Taxonomia, docDto).GenerarDocumentoXbrl().Save(@"C:\temp\Prueba GNM BMV 7 10 abril 15 salida.xbrl");

        }
    }



    
    
}
