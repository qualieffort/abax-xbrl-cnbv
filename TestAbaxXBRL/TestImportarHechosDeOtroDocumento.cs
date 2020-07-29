using AbaxXBRL.Taxonomia.Impl;
using AbaxXBRLCore.Common.Cache.Impl;
using AbaxXBRLCore.Repository.Implementation;
using AbaxXBRLCore.Services.Implementation;
using AbaxXBRLCore.Viewer.Application.Dto;
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
    class TestImportarHechosDeOtroDocumento
    {

        [TestMethod]
        public void TestImportarHechosDeDocumento() {
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

            var _cacheTaxonomiaXbrl = new CacheTaxonomiaEnMemoriaXBRL();

            var resultadoDocumento = service.ObtenerModeloDocumentoInstanciaXbrl(105, 19);
            var instanciaDto = resultadoDocumento.InformacionExtra as DocumentoInstanciaXbrlDto;
            agregarTaxonomia(instanciaDto,_cacheTaxonomiaXbrl);
            foreach(var hecho in instanciaDto.HechosPorId.Values){
                Debug.WriteLine(hecho.IdConcepto+":"+hecho.Id+":"+hecho.Valor);
            }
            resultadoDocumento = service.ImportarHechosADocumentoInstancia(instanciaDto, 97,false,true, 19);
            Debug.WriteLine(resultadoDocumento.InformacionExtra);
            foreach (var hecho in instanciaDto.HechosPorId.Values)
            {
                Debug.WriteLine(hecho.IdConcepto + ":" + hecho.Id + ":" + hecho.Valor);
            }
        }

        private void agregarTaxonomia(DocumentoInstanciaXbrlDto instanciaDto, CacheTaxonomiaEnMemoriaXBRL _cacheTaxonomiaXbrl)
        {
            var viewerService = new XbrlViewerService();
            var taxonomiaDto = _cacheTaxonomiaXbrl.ObtenerTaxonomia(instanciaDto.DtsDocumentoInstancia);
            var manejadorErrores = new ManejadorErroresCargaTaxonomia();
            if (taxonomiaDto == null)
            {
                var taxo = new TaxonomiaXBRL { ManejadorErrores = manejadorErrores };
                foreach (var dts in instanciaDto.DtsDocumentoInstancia)
                {
                    if (dts.Tipo == DtsDocumentoInstanciaDto.SCHEMA_REF)
                    {
                        taxo.ProcesarDefinicionDeEsquema(dts.HRef);
                    }
                }
                taxo.CrearArbolDeRelaciones();
                taxonomiaDto = viewerService.CrearTaxonomiaAPartirDeDefinicionXbrl(taxo);
                if (manejadorErrores.PuedeContinuar())
                {
                    _cacheTaxonomiaXbrl.AgregarTaxonomia(instanciaDto.DtsDocumentoInstancia, taxonomiaDto);

                }
                else {
                    return;
                }
               
            }
            instanciaDto.Taxonomia = taxonomiaDto;
        }

    }
}
