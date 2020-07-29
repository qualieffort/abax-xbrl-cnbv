using AbaxXBRL.Taxonomia;
using AbaxXBRL.Taxonomia.Impl;
using AbaxXBRL.Taxonomia.Validador;
using AbaxXBRL.Taxonomia.Validador.Impl;
using AbaxXBRLCore.Viewer.Application.Service.Impl;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;

namespace TestAbaxXBRL
{
    [TestClass]
    class TestCargarTaxoColombia
    {
        [TestMethod]
        public void testCargarTaxonomia() {


            TaxonomiaXBRL taxonomiaXBRL = new TaxonomiaXBRL();

            IManejadorErroresXBRL manejadorErrores = new ManejadorErroresCargaTaxonomia();

            taxonomiaXBRL.ManejadorErrores = manejadorErrores;

            taxonomiaXBRL.ProcesarDefinicionDeEsquema("http://superwas.supersociedades.gov.co/sirfin/xbrl/2015-03-04/sds_ifrs-inicio-plenas-individuales-2015-03-04.xsd");
            taxonomiaXBRL.CrearArbolDeRelaciones();
            IGrupoValidadoresTaxonomia valTax = new GrupoValidadoresTaxonomia();
            valTax.ManejadorErrores = manejadorErrores;
            valTax.Taxonomia = taxonomiaXBRL;
            valTax.AgregarValidador(new ValidadorTaxonomia());
            valTax.AgregarValidador(new ValidadorTaxonomiaDinemsional());
            valTax.ValidarDocumento();

            XbrlViewerService serv = new XbrlViewerService();

            DocumentoInstanciaXBRL inst = new DocumentoInstanciaXBRL();
            inst.ManejadorErrores = manejadorErrores;

            inst.Cargar(@"C:\workspace_abax\XBRL Colombia\T01_E10_8190009868_2014-12-31.xbrl");

            valTax = new GrupoValidadoresTaxonomia();
            valTax.ManejadorErrores = manejadorErrores;
            valTax.DocumentoInstancia = inst;
            valTax.AgregarValidador(new ValidadorDocumentoInstancia());
            valTax.AgregarValidador(new ValidadorDimensionesDocumentoInstancia());
            valTax.ValidarDocumento();
            foreach(var error in manejadorErrores.GetErroresTaxonomia()){
                Debug.WriteLine(error.Mensaje);
            }

            foreach(var hecho in inst.Hechos){
                Debug.WriteLine(hecho.Concepto.Id + " = " + ((FactItem)hecho).Valor);
            }

            var taxDt = serv.CrearTaxonomiaAPartirDeDefinicionXbrl(taxonomiaXBRL);
        }
    }
}
