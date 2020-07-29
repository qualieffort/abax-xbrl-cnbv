using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Text;
using System.Xml;
using AbaxXBRL.Taxonomia;
using AbaxXBRL.Taxonomia.Impl;
using AbaxXBRL.Taxonomia.Validador;
using AbaxXBRL.Taxonomia.Validador.Impl;
using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Entities;
using AbaxXBRLCore.Repository.Implementation;
using AbaxXBRLCore.Services.Implementation;
using AbaxXBRLCore.Viewer.Application.Dto;
using AbaxXBRLCore.Viewer.Application.Service.Impl;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Newtonsoft.Json;
using NPOI.SS.UserModel;
using NPOI.XSSF.UserModel;
using ContextoDto = AbaxXBRLCore.Common.Dtos.ContextoDto;

namespace TestAbaxXBRL
{
    [TestClass]
    public class TestDocumentoInstanciaService
    {




      

        [TestMethod]
        public void TestDecimales()
        {
            String valor = "+.0000E01";
            double val = Double.Parse(valor, NumberStyles.Any, CultureInfo.InvariantCulture);
        }

        [TestMethod]
        public void TestWordImport()
        {
            var wordPath = "F:\\Workspace\\SUBVERSION\\AbaxXbrl\\word\\notasXbrlDocumentoInstancia1.docx";
            var entity = new AbaxDbEntities();
            var service = new DocumentoInstanciaService
                              {
                                  DocumentoInstanciaRepository = new DocumentoInstanciaRepository(),
                                  UsuarioDocumentoInstanciaRepository = new UsuarioDocumentoInstanciaRepository(),
                                  VersionDocumentoInstanciaRepository = new VersionDocumentoInstanciaRepository(),
                             
                                  UsuarioRepository = new UsuarioRepository()
                              };

            var archivo = new FileStream(wordPath, FileMode.Open);

            var notasRes = service.ImportarDocumentoWord(archivo);
            if (notasRes.Resultado)
            {

                Debug.WriteLine(notasRes.InformacionExtra);
                
            }
            else
            {
                Debug.WriteLine(notasRes.Mensaje);
            }

        }


        


        [TestMethod]
        public void TestContextosPorRol()
        {
            var entity = new AbaxDbEntities();
            var service = new DocumentoInstanciaService
                              {
                                  DocumentoInstanciaRepository = new DocumentoInstanciaRepository(),
                                  UsuarioDocumentoInstanciaRepository = new UsuarioDocumentoInstanciaRepository(),
                                  VersionDocumentoInstanciaRepository = new VersionDocumentoInstanciaRepository(),
                               
                                  UsuarioRepository = new UsuarioRepository()
                              };

            var doc = new DocumentoInstanciaXBRL();
            doc.Cargar("file:///C:/workspace_abax/AbaxXBRL/ifrsxbrl_AC_2014-2.xbrl");

            if (doc.ManejadorErrores.PuedeContinuar())
            {
                var keyValRol = doc.Taxonomia.ConjuntoArbolesLinkbase.Where(x => x.Value.Count > 0).ToList();
                foreach (var rolType in keyValRol)
                {
                    Debug.WriteLine("__________________________________________");
                    Debug.WriteLine(doc.Taxonomia.RolesTaxonomia[rolType.Key].Id);
                    foreach (var ctx in doc.ObtenerContextosDeRol(rolType.Key))
                    {
                        Debug.WriteLine(ctx.Periodo.ToString());
                    }
                }
            }
        }

        [TestMethod]
        public void TestGruposContextosPorRol()
        {
            var entity = new AbaxDbEntities();
            var service = new DocumentoInstanciaService
                              {
                                  DocumentoInstanciaRepository = new DocumentoInstanciaRepository(),
                                  UsuarioDocumentoInstanciaRepository = new UsuarioDocumentoInstanciaRepository(),
                                  VersionDocumentoInstanciaRepository = new VersionDocumentoInstanciaRepository(),
                               
                                  UsuarioRepository = new UsuarioRepository()
                              };

            var doc = new DocumentoInstanciaXBRL();
            doc.Cargar("file:///C:/workspace_abax/AbaxXBRL/ifrsxbrl_AC_2014-2.xbrl");

            if (doc.ManejadorErrores.PuedeContinuar())
            {
                var keyValRol = doc.Taxonomia.ConjuntoArbolesLinkbase.Where(x => x.Value.Count > 0).ToList();
                foreach (var rolType in keyValRol)
                {
                    Debug.WriteLine("__________________________________________");
                    Debug.WriteLine(doc.Taxonomia.RolesTaxonomia[rolType.Key].Id);
                    int iCtx = 1;
                    foreach (var ctx in doc.ObtenerGruposDeContextosDeRol(rolType.Key))
                    {
                        Debug.Write(iCtx + "-" + ctx.Key.Entidad.Id + "-" + ctx.Key.Periodo.ToString());
                        iCtx++;
                        foreach (var miembro in ctx.Key.ObtenerMiembrosDimension())
                        {
                            Debug.Write("-" + miembro.QNameMiembro.ToString());
                        }
                        Debug.WriteLine("(" + ctx.Value.Count + ") ");
                    }
                }
            }
        }

        [TestMethod]
        public void TestAgrupacionGruposContextosPorRol()
        {
            var entity = new AbaxDbEntities();
            var service = new DocumentoInstanciaService
                              {
                                  DocumentoInstanciaRepository = new DocumentoInstanciaRepository(),
                                  UsuarioDocumentoInstanciaRepository = new UsuarioDocumentoInstanciaRepository(),
                                  VersionDocumentoInstanciaRepository = new VersionDocumentoInstanciaRepository(),
                                
                                  UsuarioRepository = new UsuarioRepository()
                              };

            var doc = new DocumentoInstanciaXBRL();
            doc.Cargar("file:///C:/workspace_abax/AbaxXBRL/ifrsxbrl_AC_2014-2.xbrl");

            if (doc.ManejadorErrores.PuedeContinuar())
            {
                var keyValRol = doc.Taxonomia.ConjuntoArbolesLinkbase.Where(x => x.Value.Count > 0).ToList();
                foreach (var rolType in keyValRol)
                {
                    Debug.WriteLine("__________________________________________");
                    Debug.WriteLine(doc.Taxonomia.RolesTaxonomia[rolType.Key].Id);
                    int iCtx = 1;

                    foreach (var identificador in doc.ObtenerOpcionesParaGruposDeContextos(rolType.Key))
                    {
                        Debug.WriteLine(identificador.Key);
                        foreach (var periodo in identificador.Value)
                        {
                            Debug.WriteLine("\t" + periodo.Key);
                            foreach (var dimension in periodo.Value)
                            {
                                Debug.WriteLine("\t\t" + dimension.Key);
                                foreach (var ctx in dimension.Value)
                                {
                                    Debug.WriteLine("\t\t\t" + ctx.Id);
                                }
                            }
                        }
                    }
                }
            }
        }
        [TestMethod]
        public void TestCargarExcelGenerico()
        {
            var entity = new AbaxDbEntities();
            var service = new DocumentoInstanciaService
            {
                DocumentoInstanciaRepository = new DocumentoInstanciaRepository(),
                UsuarioDocumentoInstanciaRepository = new UsuarioDocumentoInstanciaRepository(),
                VersionDocumentoInstanciaRepository = new VersionDocumentoInstanciaRepository(),
               
                EmpresaRepository = new EmpresaRepository(),
                UsuarioRepository = new UsuarioRepository()
            };

            FileStream fs = File.Open(@"C:\workspace_abax\AbaxXBRL\AbaxXBRLWeb\formato_ifrs_smes_T1.xlsx", FileMode.Open, FileAccess.Read);

            var documentoInstancia = new DocumentoInstanciaXBRL();
            var manejadorErrores = new ManejadorErroresCargaTaxonomia();
            var resultadoOperacion = new ResultadoOperacionDto();
            documentoInstancia.ManejadorErrores = manejadorErrores;
            documentoInstancia.Cargar("C:\\workspace_abax\\AbaxXBRL\\example1_2014-03-05\\xbrl_example1_2014-03-05.xbrl");
            if (manejadorErrores.PuedeContinuar())
            {
                IGrupoValidadoresTaxonomia grupoValidadores = new GrupoValidadoresTaxonomia();
                IValidadorDocumentoInstancia validador = new ValidadorDocumentoInstancia();
                grupoValidadores.ManejadorErrores = manejadorErrores;
                grupoValidadores.DocumentoInstancia = documentoInstancia;
                grupoValidadores.AgregarValidador(validador);
                grupoValidadores.ValidarDocumento();
                var xbrlViewerService = new XbrlViewerService();

                resultadoOperacion.InformacionExtra = xbrlViewerService.PreparaDocumentoParaVisor(documentoInstancia,null);
                var inst = resultadoOperacion.InformacionExtra as DocumentoInstanciaXbrlDto;
             
                resultadoOperacion.Resultado = true;
                
            }
            
            
            fs.Close();
            Debug.WriteLine(resultadoOperacion);
        }
        [TestMethod]
        public void TestCrearAtributos()
        {
            FileStream fs = File.Open(@"C:\workspace_abax\AbaxXBRL\formato.html", FileMode.Open, FileAccess.Read);
            using (StreamWriter sw = new StreamWriter(@"C:\workspace_abax\AbaxXBRL\formato_out.html"))
            {
                using (var sr = new StreamReader(fs))
                {
                    string linea = null;
                    while (sr.Peek() >= 0)
                    {
                        linea = sr.ReadLine();

                        if(linea.Contains("class=\"concepto\""))
                        {
                            linea = ProcesarLinea(linea);
                        }
                        sw.WriteLine(linea);
                    }
                }
            }
        }

        [TestMethod]
        public void TestGenerarArchivoBase64()
        {

            AbaxXBRLCore.Common.Util.LogUtil.LogDirPath = @"..\..\TestOutput\";
            var archivoAdjuntoXbrlRepository = new ArchivoAdjuntoXbrlRepository();
            var archivoAdjunto = archivoAdjuntoXbrlRepository.GetById(1);
            AbaxXBRLCore.Common.Util.LogUtil.Info("Id del concepto en test:" + archivoAdjunto.IdConcepto);
            File.WriteAllBytes(@"C:\XpAbaxXp\TestAbaxXBRL\archivo.pdf", Convert.FromBase64String(archivoAdjunto.Archivo));
            Console.WriteLine(archivoAdjunto.IdConcepto);


        }

        private string ProcesarLinea(string linea)
        {
            var indiceId = linea.IndexOf("id=\"", System.StringComparison.Ordinal);
            if(indiceId > 0)
            {
                indiceId += 4;
                var indiceFinId = linea.IndexOf("\"", indiceId);
                if(indiceFinId >= 0)
                {
                    var cadenaId = linea.Substring(indiceId, indiceFinId - indiceId);
                    var componentesId = cadenaId.Split('-');
                    if(componentesId.Length == 3)
                    {
                        var contexto = componentesId[1];
                        var conceptoId = componentesId[2];

                        var cadenaExtra = " data-format=\"" + GetNumFormato(contexto) + "\" " +
                            "data-context=\"" + contexto + "\" data-concept=\"" + conceptoId + "\"";

                        return linea.Insert(indiceFinId + 1, cadenaExtra);

                    }
                }
            }
            return linea;
        }

        private string GetNumFormato(string contexto)
        {
            if ("IG".Equals(contexto))
            {
                return "108";
            }

            if ("EPF".Equals(contexto))
            {
                return "109";
            }

            if ("ER".Equals(contexto))
            {
                return "111";
            }

            if ("EFE".Equals(contexto))
            {
                return "112";
            }
            if ("VCC".Equals(contexto))
            {
                return "113";
            }

            if ("ERAC".Equals(contexto))
            {
                return "111";
            }

            if ("ER12".Equals(contexto))
            {
                return "107";
            }

            if ("ERA".Equals(contexto))
            {
                return "111";
            }

            if ("EPFA".Equals(contexto))
            {
                return "109";
            }

            if ("VCCA".Equals(contexto))
            {
                return "113";
            }
            if ("EFEA".Equals(contexto))
            {
                return "112";
            }
            if ("ERACA".Equals(contexto))
            {
                return "111";
            }

            if ("ER12A".Equals(contexto))
            {
                return "107";
            }

            return "";
        }

        [TestMethod]
        public void TestNPOIExcel()
        {

            FileStream fs = File.Open(@"C:\workspace_abax\AbaxXBRL\excel completo.xlsx", FileMode.Open, FileAccess.Read);

            var workbook = new XSSFWorkbook(fs);

            for(int i=0;i < workbook.Count; i++)
            {
                var  hoja = workbook.GetSheetAt(i);
                for (int row = 0; row <= hoja.LastRowNum;row++)
                {
                    var renglon = hoja.GetRow(row);
                    for (int col = 0;renglon != null && col <= renglon.LastCellNum; col++)
                    {
                        var celda = renglon.GetCell(col);
                        if(celda != null)
                        {
                            Debug.Write("("+row+","+col+")" + obtenerValorCelda(celda.CellType,celda));
                            Debug.Write("\t");
                        }
                        
                    }
                    Debug.WriteLine("");
                }
            }
        }

        public string obtenerValorCelda(CellType tipoCelda,ICell celda)
        {
            string valor = "";
            switch(tipoCelda)
            {
                case CellType.String:
                    valor = celda.StringCellValue;
                    break;
                case CellType.Numeric:
                    if (DateUtil.IsCellDateFormatted(celda))
                    {
                        valor = celda.DateCellValue.ToShortDateString();
                    } else {
                        valor = celda.NumericCellValue.ToString();
                    }
                    break;
                case CellType.Formula:
                    valor = obtenerValorCelda(celda.CachedFormulaResultType,celda);
                    break;
                case CellType.Boolean:
                    valor = celda.BooleanCellValue.ToString();
                    break;
                case CellType.Blank:
                    valor = "";
                    break;
            }
            return valor;
        }

        [TestMethod]
        public void TestInsertarModeloVistaDocumentoInstancia()
        {
           
            var service = new DocumentoInstanciaService
            {
                DocumentoInstanciaRepository = new DocumentoInstanciaRepository(),
                UsuarioDocumentoInstanciaRepository = new UsuarioDocumentoInstanciaRepository(),
                VersionDocumentoInstanciaRepository = new VersionDocumentoInstanciaRepository(),
                
                EmpresaRepository = new EmpresaRepository(),
                UsuarioRepository = new UsuarioRepository(),
                UnidadRepository = new UnidadRepository(),
                HechoRepository = new HechoRepository(),
                ContextoRepository = new ContextoRepository(),
                DtsDocumentoInstanciaRepository = new DtsDocumentoInstanciaRepository()
            };

            var instancia = new DocumentoInstanciaXbrlDto
                                {EsCorrecto = true, IdEmpresa = 1, NombreArchivo = "Titulo1", Titulo = "Titulo1",UnidadesPorId =  new Dictionary<string, UnidadDto>()};

            var unidad = new UnidadDto
            {
                Id = "MXN",
                Tipo = Unit.Medida,
                Medidas =
                    new List<MedidaDto>
                                         {
                                             new MedidaDto
                                                 {EspacioNombres = "http://www.xbrl.org/2003/iso4217", Nombre = "MXN"}
                                         }
            };
            instancia.UnidadesPorId.Add(unidad.Id, unidad);

            //Contextos
            var contexto = new AbaxXBRLCore.Viewer.Application.Dto.ContextoDto()
            {
                ContieneInformacionDimensional = false,
                Escenario = null,
                Id = "ctx1",
                Entidad = new EntidadDto
                {
                    EsquemaId = "http://2hsoftware.com",
                    Id = "e1",
                    Segmento = null
                },
                Periodo = new PeriodoDto
                {
                    Tipo = Period.Instante,
                    FechaInstante = AbaxXBRLCore.Common.Util.DateUtil.ParseStandarDate("01/03/2014")
                }
            };
            instancia.ContextosPorId = new Dictionary<string, AbaxXBRLCore.Viewer.Application.Dto.ContextoDto>();
            instancia.ContextosPorId.Add(contexto.Id, contexto);

            instancia.DtsDocumentoInstancia = new List<DtsDocumentoInstanciaDto>();
            instancia.DtsDocumentoInstancia.Add(new DtsDocumentoInstanciaDto
            {
                Tipo = DtsDocumentoInstanciaDto.SCHEMA_REF,
                HRef = "ifrsxbrl2014.xsd"
            });

            var hecho = new AbaxXBRLCore.Viewer.Application.Dto.HechoDto
            {
                IdConcepto = "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:NameOfReportingEntityOrOtherMeansOfIdentification",
                EsFraccion = false,
                EsNumerico = false,
                NoEsNumerico = true,
                EsTupla = false,
                IdContexto = "ctx1",
                IdUnidad = "MXN",
                Tipo = Concept.Item,
                EsValorNil = false,
                Valor = "ALCON",
                TipoDato = "stringItemType"
            };
            instancia.HechosPorIdConcepto = new Dictionary<string, IList<string>>();
            instancia.HechosPorId = new Dictionary<string, AbaxXBRLCore.Viewer.Application.Dto.HechoDto>();
            instancia.HechosPorIdConcepto[hecho.IdConcepto] = new List<string>();
            instancia.HechosPorIdConcepto[hecho.IdConcepto].Add(hecho.Id);
            instancia.HechosPorId.Add(hecho.Id, hecho);

            instancia.DtsDocumentoInstancia = new List<DtsDocumentoInstanciaDto>();

            instancia.DtsDocumentoInstancia.Add(new DtsDocumentoInstanciaDto
            {
                Tipo = DtsDocumentoInstanciaDto.SCHEMA_REF,
                HRef = "http://emisnet.bmv.com.mx/taxonomy/mx-ifrs-ics-2012-04-01/All/ifrs-mx-ics-entryPoint-all-2012-04-01.xsd"
            });

            service.GuardarDocumentoInstanciaXbrl(instancia, 3);

        }


        [TestMethod]
        public void TestActualizarModeloVistaDocumentoInstancia()
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

            var instancia = new DocumentoInstanciaXbrlDto { IdDocumentoInstancia = 160, EsCorrecto = true, IdEmpresa = 1, NombreArchivo = "Titulo1", Titulo = "Titulo1", UnidadesPorId = new Dictionary<string, UnidadDto>() };

            var unidad = new UnidadDto
            {
                Id = "MXN",
                Tipo = Unit.Medida,
                Medidas =
                    new List<MedidaDto>
                                         {
                                             new MedidaDto
                                                 {EspacioNombres = "http://www.xbrl.org/2003/iso4217", Nombre = "MXN"}
                                         }
            };
            instancia.UnidadesPorId.Add(unidad.Id, unidad);

            //Contextos
            var contexto = new AbaxXBRLCore.Viewer.Application.Dto.ContextoDto()
                               {
                                   ContieneInformacionDimensional = false,
                                   Escenario = null,
                                   Id = "ctx1",
                                   Entidad = new EntidadDto
                                                 {
                                                     EsquemaId = "http://2hsoftware.com",
                                                     Id = "e1",
                                                     Segmento = null
                                                 },
                                   Periodo = new PeriodoDto
                                                 {
                                                     Tipo = Period.Instante,
                                                     FechaInstante = AbaxXBRLCore.Common.Util.DateUtil.ParseStandarDate("01/03/2014")
                                                 }
                               };
            instancia.ContextosPorId = new Dictionary<string, AbaxXBRLCore.Viewer.Application.Dto.ContextoDto>();
            instancia.ContextosPorId.Add(contexto.Id,contexto);
            
            instancia.DtsDocumentoInstancia = new List<DtsDocumentoInstanciaDto>();
            instancia.DtsDocumentoInstancia.Add(new DtsDocumentoInstanciaDto
                                                    {
                                                        Tipo = DtsDocumentoInstanciaDto.SCHEMA_REF,
                                                        HRef = "ifrsxbrl2014.xsd"
                                                    });

            var hecho = new AbaxXBRLCore.Viewer.Application.Dto.HechoDto
                            {
                                IdConcepto = "http://xbrl.ifrs.org/taxonomy/2011-03-25/ifrs:NameOfReportingEntityOrOtherMeansOfIdentification",
                                EsFraccion = false,
                                EsNumerico = false,
                                NoEsNumerico = true,
                                EsTupla = false,
                                IdContexto = "ctx1",
                                IdUnidad = "MXN",
                                Tipo = Concept.Item,
                                EsValorNil = false,
                                Valor = "ALCON",
                                TipoDato = "stringItemType"
                            };
            instancia.HechosPorIdConcepto = new Dictionary<string, IList<string>>();
            instancia.HechosPorId = new Dictionary<string, AbaxXBRLCore.Viewer.Application.Dto.HechoDto>();
            instancia.HechosPorIdConcepto[hecho.IdConcepto] = new List<string>();
            instancia.HechosPorIdConcepto[hecho.IdConcepto].Add(hecho.Id);
            instancia.HechosPorId.Add(hecho.Id, hecho);

            instancia.DtsDocumentoInstancia = new List<DtsDocumentoInstanciaDto>();

            instancia.DtsDocumentoInstancia.Add(new DtsDocumentoInstanciaDto { Tipo = DtsDocumentoInstanciaDto.SCHEMA_REF,
                HRef = "http://emisnet.bmv.com.mx/taxonomy/mx-ifrs-ics-2012-04-01/All/ifrs-mx-ics-entryPoint-all-2012-04-01.xsd" });

            var viewService = new XbrlViewerService();

       

        }

        [TestMethod]
        public void TestConsultarDocumentoInstancia()
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

            var resultado = service.ObtenerModeloDocumentoInstanciaXbrl(342, 3);

            //var taxonomia = service.ObtenerTaxonomiaIFRS_BMV();

            var inst = resultado.InformacionExtra as DocumentoInstanciaXbrlDto;

            //inst.Taxonomia = viewService.CrearTaxonomiaAPartirDeDefinicionXbrl(taxonomia);



            Debug.WriteLine(resultado.InformacionExtra);
        }

        [TestMethod]
        public void TestDocumentoInstanciaCompleto()
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

            foreach (var hecho in instanciaDto.HechosPorId.Values)
            {
                Debug.WriteLine(hecho.IdConcepto + " = " +hecho.Valor);
            }


            instanciaDto.IdEmpresa = 1;

            var tax = new TaxonomiaXBRL();
            tax.ManejadorErrores = new ManejadorErroresCargaTaxonomia();
            tax.ProcesarDefinicionDeEsquema("http://www.2hsoftware.com.mx/mx_taxonomy/mx_taxonomy/full_ifrs_mc_mx_ics_entry_point_2014-12-05.xsd");

            var viewer = new XbrlViewerService();

            var documentoInstanciaXbrl = viewer.CrearDocumentoInstanciaXbrl(tax, instanciaDto);

            var xbrl = documentoInstanciaXbrl.GenerarDocumentoXbrl(); 

            var settings = new XmlWriterSettings();
            settings.CloseOutput = true;
            settings.Indent = true;
            settings.NamespaceHandling = NamespaceHandling.OmitDuplicates;
            settings.NewLineHandling = NewLineHandling.Entitize;
            settings.Encoding = Encoding.ASCII;
            var txtWriter = new StringWriter();
            var xmlWriterDebug = XmlWriter.Create(txtWriter, settings);

            xbrl.Save(xmlWriterDebug);
            String archivoFinal = txtWriter.ToString().Replace("utf-16", "ISO-8859-1");

            var stream = new MemoryStream();
            var writer = new StreamWriter(stream);
            writer.Write(archivoFinal);
            writer.Flush();
            stream.Position = 0;

            using (var fileStream = new FileStream(@"C:\Users\Emigdio\Desktop\salida.xbrl", FileMode.Create))
            {
                xbrl.Save(fileStream);
            }

        }

        [TestMethod]
        public void TestConsultaRepositorio()
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

            var res = service.ObtenerHechosPorFiltro(new string[] {"ifrs-full_Assets"}, 3,2);

            Debug.WriteLine(res.Resultado);

        }
    }




    
}
