using System;
using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.Viewer.Application.Import;
using Aspose.Words;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using AbaxXBRLCore.Entities;
using AbaxXBRLCore.Services.Implementation;
using AbaxXBRLCore.Repository.Implementation;
using System.IO;
using System.Diagnostics;
using AbaxXBRLCore.Viewer.Application.Dto;
using Newtonsoft.Json;
using System.Collections.Generic;
using Spring.Testing.Microsoft;
using AbaxXBRL.Constantes;
using AbaxXBRLCore.Viewer.Application.Model.Impl;
using AbaxXBRLCore.Viewer.Application.Model;

namespace TestAbaxXBRL
{
    /// <summary>
    /// Prueba unitaria para la importación de notas de word en un documento instancia
    /// </summary>
    [TestClass]
    public class TestImportarNotasArchivosDocumento : AbstractDependencyInjectionSpringContextTests
    {
        public string TextBlockItemType = "textBlockItemType";

        protected override string[] ConfigLocations
        {
            get
            {
                return new string[]
                {
                    "assembly://AbaxXBRLCore/AbaxXBRLCore.Config/templates.xml"
                };
            }
        }

        /// <summary>
        /// Prueba unitaria para importar de un documento word las notas y generar un diccionario de tipo 
        /// concepto/contenidoNota
        /// </summary>
        [TestMethod]
        public void TestNotasWordImport()
        {
            var wordPath = "F:\\Workspace\\SUBVERSION\\AbaxXbrl\\word\\importInfoXbrl.docx";
            var entity = new AbaxDbEntities();
            var service = new DocumentoInstanciaService
            {
                DocumentoInstanciaRepository = new DocumentoInstanciaRepository(),
                UsuarioDocumentoInstanciaRepository = new UsuarioDocumentoInstanciaRepository(),
                VersionDocumentoInstanciaRepository = new VersionDocumentoInstanciaRepository(),
                UsuarioRepository = new UsuarioRepository()
            };

            var archivo = new FileStream(wordPath, FileMode.Open);

            var resultadoOperacion = service.ImportarNotasDeDocumentoWord(archivo, "ASPOSE");
            if (resultadoOperacion.Resultado)
            {
                Debug.WriteLine(resultadoOperacion.InformacionExtra);
            }
            else
            {
                Debug.WriteLine(resultadoOperacion.Mensaje);
            }

        }

        /// <summary>
        /// Carga un documento instancia y muestra los roles, hechos y contexto al que pertenecen de tipo blockItemType
        /// </summary>
        [TestMethod]
        public void TestImportarNotasDocumentoWordDocumentoInstancia()
        {
            DocumentoInstanciaXbrlDto instanciaDto = null;
            using (var reader = new StreamReader(@"doinstTest.json"))
            {
                instanciaDto = JsonConvert.DeserializeObject<DocumentoInstanciaXbrlDto>(reader.ReadToEnd());
            }
            instanciaDto.ParametrosConfiguracion = new Dictionary<string, string>();
            instanciaDto.ParametrosConfiguracion.Add("trimestre", "3");
            instanciaDto.ParametrosConfiguracion.Add("primerAnio", "true");
            instanciaDto.ParametrosConfiguracion.Add("emisora", "PEMEX");
            instanciaDto.ParametrosConfiguracion.Add("anio", "2014-01-01");
            instanciaDto.ParametrosConfiguracion.Add("moneda", "http://www.xbrl.org/2003/iso4217:MXN");

            ActivadorLicenciaAsposeUtil.ActivarAsposeWords();

            var importador = (IImportadorExportadorArchivoADocumentoInstancia)applicationContext.GetObject("ImportadorExportadorArchivosPlantilla");

            using (var archivoword = new FileStream(@"C:\Users\Emigdio\Desktop\NotasDocumentoInstancia.docx", FileMode.Open))
            {
                importador.ImportarNotasWord(archivoword, instanciaDto);
            }



        }



        /// <summary>
        /// Carga un documento instancia y muestra los roles, hechos y contexto al que pertenecen de tipo blockItemType
        /// </summary>
        [TestMethod]
        public void TestExportarWord()
        {
            ActivadorLicenciaAsposeUtil.ActivarAsposeWords();

            var word = new Document(@"C:\Users\Emigdio\Desktop\210000.docx");

            word.Range.Replace("[ABC]", "$ 13,445,000.00", false, false);
            word.Range.Replace("[DEF]", "$ 13,445,001.00", false, false);

            word.Save(@"C:\Users\Emigdio\Desktop\210000_op.docx");

        }

    }
}
