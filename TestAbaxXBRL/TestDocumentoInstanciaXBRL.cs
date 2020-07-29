using System;
using System.Diagnostics;
using System.IO;
using System.Text;
using System.Xml;
using AbaxXBRL.Taxonomia;
using AbaxXBRL.Taxonomia.Impl;
using AbaxXBRL.Taxonomia.Validador;
using AbaxXBRL.Taxonomia.Validador.Impl;
using AbaxXBRLCore.Viewer.Application.Dto;
using AbaxXBRLCore.Viewer.Application.Service;
using AbaxXBRLCore.Viewer.Application.Service.Impl;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Globalization;

namespace TestAbaxXBRL
{
    [TestClass]
    public class TestDocumentoInstanciaXBRL
    {
        [TestMethod]
        public void CargarDocumentoInstanciaXbrl()
        {
            var documentoInstanciaXbrl = new DocumentoInstanciaXBRL();
            
            IManejadorErroresXBRL manejadorErrores = new ManejadorErroresCargaTaxonomia();

            documentoInstanciaXbrl.ManejadorErrores = manejadorErrores;
            //documentoInstanciaXbrl.Cargar("C:\\workspaces\\memoria_xbrl\\Ejercicio Práctico\\instancia_taxonomia1.xml");
            //documentoInstanciaXBRL.Cargar("C:\\dotNet\\AbaxXBRL_1\\AbaxXBRL\\XBRL-CONF-CR5-2012-01-24\\Common\\300-instance\\304-18-sameOrderDivisionMeasuresValid.xml");
            //documentoInstanciaXBRL.Cargar("C:\\dotNet\\AbaxXBRL_1\\AbaxXBRL\\XBRL-CONF-CR5-2012-01-24\\Common\\100-schema\\104-04-TupleExampleComplextype.xml");
            documentoInstanciaXbrl.Cargar(@"c:\tmp\ifrsxbrl_BAFAR_2014-4.xbrl");

            IGrupoValidadoresTaxonomia grupoValidadores = new GrupoValidadoresTaxonomia();
            grupoValidadores.ManejadorErrores = manejadorErrores;
            grupoValidadores.DocumentoInstancia = documentoInstanciaXbrl;
            grupoValidadores.AgregarValidador(new ValidadorDocumentoInstancia());
            grupoValidadores.AgregarValidador(new ValidadorDimensionesDocumentoInstancia());
            grupoValidadores.ValidarDocumento();

            foreach (var ctx in documentoInstanciaXbrl.Contextos.Values)
            {
                if (ctx.Entidad.Segmento != null && ctx.Entidad.Segmento.MiembrosDimension != null
                    && ctx.Entidad.Segmento.MiembrosDimension.Count > 0)
                {
                    ctx.Escenario = new Scenario();
                    ctx.Escenario.MiembrosDimension = ctx.Entidad.Segmento.MiembrosDimension;
                    ctx.Entidad.Segmento = null;
                }
            }

            var xbrl = documentoInstanciaXbrl.GenerarDocumentoXbrl();

            var encoding = Encoding.UTF8;
            foreach(var encActual in Encoding.GetEncodings()){
                if (encActual.Name.Equals("iso-8859-1"))
                {
                    encoding = encActual.GetEncoding();
                    break;
                }
            }


            var settings = new XmlWriterSettings();
            settings.CloseOutput = true;
            settings.Indent = true;
            settings.NamespaceHandling = NamespaceHandling.OmitDuplicates;
            settings.NewLineHandling = NewLineHandling.Entitize;
            settings.Encoding = encoding;
            var stream = new MemoryStream();
            var txtWriter = new StreamWriter(stream, encoding);
            var xmlWriterDebug = XmlWriter.Create(txtWriter, settings);
            xbrl.Save(xmlWriterDebug);
            String archivoFinal = encoding.GetString(stream.ToArray());
            Assert.IsTrue(manejadorErrores.PuedeContinuar());
        }

        [TestMethod]
        public void PrepararDocumentoParaVisorTest() {
            IDocumentoInstanciaXBRL documentoInstancia = new DocumentoInstanciaXBRL();

            ManejadorErroresCargaTaxonomia manejadorErrores = new ManejadorErroresCargaTaxonomia();

            documentoInstancia.ManejadorErrores = manejadorErrores;
            //documentoInstancia.Cargar("C:\\Users\\Antonio\\Desktop\\example1_2014-03-05\\xbrl_example1_2014-03-05.xbrl");
            //documentoInstancia.Cargar("C:\\Users\\Antonio\\Downloads\\example2_2014-03-05\\xbrl_example2_2014-03-05.xbrl");
            documentoInstancia.Cargar(@"C:\workspace_abax\AbaxXBRL\DocumentosInstancia\ifrs2014_t3_primer_anio_2.xbrl");
            if (manejadorErrores.PuedeContinuar())
            {
                IGrupoValidadoresTaxonomia grupoValidadores = new GrupoValidadoresTaxonomia();
                IValidadorDocumentoInstancia validador = new ValidadorDocumentoInstancia();
                grupoValidadores.ManejadorErrores = manejadorErrores;
                grupoValidadores.DocumentoInstancia = documentoInstancia;
                grupoValidadores.AgregarValidador(validador);
                grupoValidadores.AgregarValidador(new ValidadorDimensionesDocumentoInstancia());
                grupoValidadores.ValidarDocumento();
                if (manejadorErrores.PuedeContinuar())
                {
                    IXbrlViewerService xbrlViewerService = new XbrlViewerService();
                    DocumentoInstanciaXbrlDto dto = xbrlViewerService.PreparaDocumentoParaVisor(documentoInstancia,null);
                    Debug.WriteLine(dto);
                }
            }
        }
    }
}
