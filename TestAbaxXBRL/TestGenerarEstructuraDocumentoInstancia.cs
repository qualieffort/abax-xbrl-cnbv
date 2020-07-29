using AbaxXBRLCore.Repository.Implementation;
using AbaxXBRLCore.Services.Implementation;
using AbaxXBRLCore.Viewer.Application.Dto;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;

namespace TestAbaxXBRL
{
    [TestClass]
    public class TestGenerarEstructuraDocumentoInstancia
    {

        [TestMethod]
        public void TestCrearEstructuraDocumentoInstancia() {
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

            DocumentoInstanciaXbrlDto instanciaDto = null;
            using (var reader = new StreamReader(@"doinstTest.json"))
            {
                instanciaDto = JsonConvert.DeserializeObject<DocumentoInstanciaXbrlDto>(reader.ReadToEnd());
            }
            instanciaDto.ParametrosConfiguracion = new Dictionary<string, string>();
            instanciaDto.ParametrosConfiguracion.Add("trimestre", "3");
            instanciaDto.ParametrosConfiguracion.Add("primerAnio", "true");
            instanciaDto.ParametrosConfiguracion.Add("emisora", "PEMEX");
            instanciaDto.ParametrosConfiguracion.Add("anio", "2015-01-01T06:00:00.000Z");
            instanciaDto.ParametrosConfiguracion.Add("moneda", "http://www.xbrl.org/2003/iso4217:MXN");

            service.CrearEstructuraDocumento(instanciaDto);

           

        }
    }
}
