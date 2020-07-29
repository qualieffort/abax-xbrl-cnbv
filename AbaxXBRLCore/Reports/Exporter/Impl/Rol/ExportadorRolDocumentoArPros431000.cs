using AbaxXBRLCore.Reports.Dto;
using AbaxXBRLCore.Viewer.Application.Dto;
using Aspose.Words;
using System;
using System.Collections.Generic;
using System.Linq;
using AbaxXBRLCore.Common.Util;
using System.IO;
using AbaxXBRLCore.Reports.Util;
using AbaxXBRLCore.Viewer.Application.Dto.Hipercubos;
using System.Drawing;
using Aspose.Words.Tables;
using AbaxXBRLCore.Viewer.Application.Model;


namespace AbaxXBRLCore.Reports.Exporter.Impl.Rol
{
    /// <summary>
    /// Para las taxonomías de reporte anual exporta el rol 427000 el cual contiene bloques de texto y tarjetas con datos de administradores.
    /// </summary>
    public class ExportadorRolDocumentoArPros431000 : ExportadorRolDocumentoBase
    {
        ///
	    /// Indica si se deben de exportar las notas vacías
	    ////
        public bool ExportarNotasVacias { get; set; }
        /// <summary>
        /// Idioma en el que se esta reportando.
        /// </summary>
        public string Idioma { get; set; }

        /// <summary>
        /// Constructor por defecto.
        /// </summary>
        public ExportadorRolDocumentoArPros431000()
        {
            ExportarNotasVacias = true;
            Idioma = "es";
        }

        private IDictionary<String, Boolean> ConceptosHipercubos = new Dictionary<String, Boolean>()
        {

            {"ar_pros_ResponsiblePersonName", true},
            {"ar_pros_ResponsiblePersonPosition", true},
            {"ar_pros_ResponsiblePersonInstitution", true},
            {"ar_pros_ResponsiblePersonLegend", true},
            {"ar_pros_SignIssuanceUnderArt13OfTheCUE", true},
            {"ar_pros_ResponsiblePersonInstitutionExternalAuditor", true},
            {"ar_pros_OtherInstitutionExternalAuditor", true},
            {"ar_pros_ResponsiblePersonInstitutionBacherlorOfLaws", true},
            {"ar_pros_OtherInstitutionBacherlorOfLaws", true},
        };

        /// <summary>
        /// Implementación de método abstracto que dispara la generación del report.
        /// </summary>
        /// <param name="docBuilder">Constructor de Aspose para la generación del contenido.</param>
        /// <param name="instancia">Documento de instancia XBRL.</param>
        /// <param name="rolAExportar">Definición del rol que se pretende presentar.</param>
        /// <param name="estructuraReporte">Información adicional sobre la estructura del reporte.</param>
        override public void exportarRolAWord(DocumentBuilder docBuilder, DocumentoInstanciaXbrlDto instancia, IndiceReporteDTO rolAExportar, ReporteXBRLDTO estructuraReporte)
        {
            Idioma = estructuraReporte.Lenguaje;

            docBuilder.CurrentSection.PageSetup.Orientation = Orientation.Portrait;
            docBuilder.CurrentSection.PageSetup.PaperSize = PaperSize.Letter;
            docBuilder.CurrentSection.PageSetup.LeftMargin = 40;
            docBuilder.CurrentSection.PageSetup.RightMargin = 40;
            escribirEncabezado(docBuilder, instancia, estructuraReporte, true);
            //Titulo rol
            //imprimirPortada(docBuilder, rolAExportar);

            //PintaCamposTablaPersonaResponsable(docBuilder,estructuraReporte);

            
            IList<String> idsHechosFirmasPersonasResponsables;
            if (instancia.HechosPorIdConcepto.TryGetValue("ar_pros_NameAndPositionsOfResponsiblePersonsPdf", out idsHechosFirmasPersonasResponsables) && idsHechosFirmasPersonasResponsables.Count > 0)
            {
                var idHechoFirmas = idsHechosFirmasPersonasResponsables.FirstOrDefault();
                HechoDto hechoFirmaPersonasResponsables;
                if (instancia.HechosPorId.TryGetValue(idHechoFirmas, out hechoFirmaPersonasResponsables))
                {
                    AgregaImagenFirmas(docBuilder, hechoFirmaPersonasResponsables);
                }
            }
            
        }

        /// <summary>
        /// Obtiene las imagenes del PDF adjunto al concepto indicado y las agrega al documento.
        /// </summary>
        /// <param name="docBuilder">Constructor del documento.</param>
        /// <param name="hecho">Hecho del concepto que contiene el binario</param>
        private void AgregaImagenFirmas(DocumentBuilder docBuilder, HechoDto hecho)
        {
            var imagenes = PDFUtil.GetImagesFromPDFAsPathFiles(hecho.Valor);
            var index = 0;
            foreach (String imagePath in imagenes)
            {
                try
                {
                    //docBuilder.InsertBreak(BreakType.SectionBreakNewPage);
                    PageSetup ps = docBuilder.CurrentSection.PageSetup;
                    var background = docBuilder.InsertImage(imagePath);
                    background.Width = ps.PageWidth;
                    background.Height = ps.PageHeight;
                    background.RelativeHorizontalPosition = Aspose.Words.Drawing.RelativeHorizontalPosition.Page;
                    background.RelativeVerticalPosition = Aspose.Words.Drawing.RelativeVerticalPosition.Page;
                    background.Left = 0;
                    background.Top = 0;
                    background.WrapType = Aspose.Words.Drawing.WrapType.None;
                    background.BehindText = true;
                    index++;
                    if (index < imagenes.Count)
                    {
                        docBuilder.InsertBreak(BreakType.SectionBreakNewPage);
                    }

                }
                catch (Exception ex)
                {
                    LogUtil.Error(ex);
                }

            }
        }
        /// <summary>
        /// Genera una plantilla con el formato para las firmas.
        /// </summary>
        /// <param name="instancia">Documento de instancia.</param>
        /// <param name="plantilla">Plantilla de la taxonomía.</param>
        /// <param name="idioma">Idioma utilizado.</param>
        /// <returns>Flujo con el PDF para las fimras.</returns>
        public Stream GeneraDocumentoFirmasPersonasResponsables(DocumentoInstanciaXbrlDto instancia, IDefinicionPlantillaXbrl plantilla, String idioma="es")
        {
            var documento = new Aspose.Words.Document();
            var builder = new DocumentBuilder(documento);
            var estructuraReporte = new ReporteXBRLDTO()
            {
                Instancia = instancia,
                Plantilla = plantilla,
                Lenguaje = idioma
            };
            PintaCamposTablaPersonaResponsable(builder, estructuraReporte);

            var streamSalida = new MemoryStream();
            var savePdf = new Aspose.Words.Saving.PdfSaveOptions()
            {
                UseHighQualityRendering = true
            };
            documento.Save(streamSalida, SaveFormat.Docx);

            return streamSalida;
        }

        /// <summary>
        /// Genera una plantilla con el formato para las firmas.
        /// </summary>
        /// <param name="instancia">Documento de instancia.</param>
        /// <param name="plantilla">Plantilla de la taxonomía.</param>
        /// <param name="idioma">Idioma utilizado.</param>
        /// <returns>Flujo con el PDF para las fimras.</returns>
        public Stream GeneraDocumentoFirmasArticulo13(DocumentoInstanciaXbrlDto instancia, IDefinicionPlantillaXbrl plantilla, String idioma = "es")
        {
            var documento = new Aspose.Words.Document();
            var builder = new DocumentBuilder(documento);
            var estructuraReporte = new ReporteXBRLDTO()
            {
                Instancia = instancia,
                Plantilla = plantilla,
                Lenguaje = idioma
            };
            PintaCamposTablaFirmaArticulo13(builder, estructuraReporte);

            var streamSalida = new MemoryStream();
            var savePdf = new Aspose.Words.Saving.PdfSaveOptions()
            {
                UseHighQualityRendering = true
            };
            documento.Save(streamSalida, SaveFormat.Docx);

            return streamSalida;
        }
        /// <summary>
        /// Pinta los campos de persona responsable.
        /// </summary>
        /// <param name="docBuilder">Constructor del documento.</param>
        /// <param name="estructuraReporte">Estructura del reporte</param>
        public void PintaCamposTablaPersonaResponsable(DocumentBuilder docBuilder, ReporteXBRLDTO estructuraReporte)
        {
            var diccionarioFiguraResponsable = GeneraDiccionarioPersonasResponsables(estructuraReporte);
            var indexFiguraResponsable = 0;
            foreach (var idItemMiembroFiguraResponsable in diccionarioFiguraResponsable.Keys)
            {
                if (indexFiguraResponsable > 0)
                {
                    docBuilder.InsertBreak(BreakType.PageBreak);
                }
                indexFiguraResponsable++;
                //ImprimirTituloFiguraResponsable(idItemMiembroFiguraResponsable, docBuilder, estructuraReporte);
                var listaInstituciones = diccionarioFiguraResponsable[idItemMiembroFiguraResponsable];
                for (var indexInstitucion = 0; indexInstitucion < listaInstituciones.Count; indexInstitucion++)
                {
                    var institucionPersonaResponsable = listaInstituciones[indexInstitucion];
                    if (indexInstitucion > 0)
                    {
                        docBuilder.InsertBreak(BreakType.PageBreak);
                    }
                    ImprimirLeyenda(institucionPersonaResponsable.Leyenda,docBuilder);
                    ImprimirTituloInstitucion(institucionPersonaResponsable.Institucion, docBuilder);
                    var listaMiembros = institucionPersonaResponsable.Miembros;
                    for (var indexMiembro = 0; indexMiembro < listaMiembros.Count; indexMiembro += 2)
                    {
                        var listaMiembrosTabla = new List<PersonaResponsableMiembro431000DTO>();
                        listaMiembrosTabla.Add(institucionPersonaResponsable.Miembros[indexMiembro]);
                        var siguienteIndice = (indexMiembro + 1);
                        if (siguienteIndice < listaMiembros.Count)
                        {
                            listaMiembrosTabla.Add(institucionPersonaResponsable.Miembros[siguienteIndice]);
                        }
                        ImprimirMiembrosPersonasResponsables(listaMiembrosTabla, docBuilder);
                    }
                }
                
                
            }
        }

        /// <summary>
        /// Pinta los campos de persona responsable.
        /// </summary>
        /// <param name="docBuilder">Constructor del documento.</param>
        /// <param name="estructuraReporte">Estructura del reporte</param>
        public void PintaCamposTablaFirmaArticulo13(DocumentBuilder docBuilder, ReporteXBRLDTO estructuraReporte)
        {
            var diccionarioFiguraResponsable = GeneraDiccionarioPersonasResponsables(estructuraReporte);
            var indexFiguraResponsable = 0;
            var leyendaArticulo13 = "";
            IList<String> listaIdHechoFirmaLeyenda13 = null;
            if (estructuraReporte.Instancia.HechosPorIdConcepto.TryGetValue("ar_pros_IssuanceUnderArt13OfTheCUELegend", out listaIdHechoFirmaLeyenda13))
            {
                var idHechoFirmas = listaIdHechoFirmaLeyenda13.First();
                HechoDto hechoFirmas = null;
                if (estructuraReporte.Instancia.HechosPorId.TryGetValue(idHechoFirmas, out hechoFirmas))
                {
                    leyendaArticulo13 = hechoFirmas.Valor;
                }
            }
            foreach (var idItemMiembroFiguraResponsable in diccionarioFiguraResponsable.Keys)
            {
                if (indexFiguraResponsable > 0)
                {
                    docBuilder.InsertBreak(BreakType.PageBreak);
                }
                indexFiguraResponsable++;
                var listaInstituciones = diccionarioFiguraResponsable[idItemMiembroFiguraResponsable];
                var contieneLeyendaArt13 = false;
                foreach (var institucionArt13 in listaInstituciones)
                {
                    if (institucionArt13.ContieneFirmasLeyendaArt13)
                    {
                        contieneLeyendaArt13 = true;
                        break;
                    }
                }
                if (!contieneLeyendaArt13)
                {
                    continue;
                }
                //ImprimirTituloFiguraResponsable(idItemMiembroFiguraResponsable, docBuilder, estructuraReporte);
                for (var indexInstitucion = 0; indexInstitucion < listaInstituciones.Count; indexInstitucion++)
                {
                    var institucionPersonaResponsable = listaInstituciones[indexInstitucion];
                    if (!institucionPersonaResponsable.ContieneFirmasLeyendaArt13)
                    {
                        continue;
                    }
                    if (indexInstitucion > 0)
                    {
                        docBuilder.InsertBreak(BreakType.PageBreak);
                    }
                    ImprimirLeyenda(leyendaArticulo13, docBuilder);
                    ImprimirTituloInstitucion(institucionPersonaResponsable.Institucion, docBuilder);
                    var listaMiembrosOriginal = institucionPersonaResponsable.Miembros;
                    var listaMiembros = new List<PersonaResponsableMiembro431000DTO>();

                    foreach (var mienbroOriginal in listaMiembrosOriginal) {
                        if (mienbroOriginal.FirmaArticulo13) {
                            listaMiembros.Add(mienbroOriginal);
                        }
                    }

                    for (var indexMiembro = 0; indexMiembro < listaMiembros.Count; indexMiembro += 2)
                    {
                        var listaMiembrosTabla = new List<PersonaResponsableMiembro431000DTO>();
                        listaMiembrosTabla.Add(listaMiembros[indexMiembro]);
                        var siguienteIndice = (indexMiembro + 1);
                        if (siguienteIndice < listaMiembros.Count)
                        {
                            listaMiembrosTabla.Add(listaMiembros[siguienteIndice]);
                        }
                        ImprimirMiembrosPersonasResponsables(listaMiembrosTabla, docBuilder);
                    }
                }


            }
        }
        /// <summary>
        /// Imprime el contenido de la celda con firma.
        /// </summary>
        /// <param name="miembro">Miembro a pintar.</param>
        /// <param name="docBuilder">Constructor del documento.</param>
        /// <param name="widthPercent">Porcentaje en ancho.</param>
        private void ImprimeCeldaFirmas(PersonaResponsableMiembro431000DTO miembro, DocumentBuilder docBuilder, double widthPercent)
        {
            docBuilder.InsertCell();
            docBuilder.CellFormat.PreferredWidth = PreferredWidth.FromPercent(widthPercent);
            docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Center;
            docBuilder.ParagraphFormat.Borders.Top.Color = Color.Black;
            docBuilder.ParagraphFormat.Borders.Top.LineStyle = LineStyle.Single;
            docBuilder.ParagraphFormat.Borders.Top.LineWidth = 1;

            docBuilder.Font.Bold = true;
            docBuilder.Writeln(miembro.Nombre);
            docBuilder.Font.Bold = false;
            docBuilder.Writeln(miembro.Cargo);
        }
        /// <summary>
        /// Imprime el contenido de la celda con firma.
        /// </summary>
        /// <param name="saltosLinea">Cantidad de saltos de linea.</param>
        /// <param name="docBuilder">Constructor del documento.</param>
        /// <param name="widthPercent">Porcentaje en ancho.</param>
        private void ImprimeCeldaComplementaria(DocumentBuilder docBuilder, double widthPercent, int saltosLinea = 0)
        {
            docBuilder.InsertCell();
            docBuilder.CellFormat.PreferredWidth = PreferredWidth.FromPercent(widthPercent);
            docBuilder.ParagraphFormat.Borders.Color = Color.White;
            docBuilder.ParagraphFormat.Borders.LineStyle = LineStyle.None;
            docBuilder.ParagraphFormat.Borders.LineWidth = 0;
            for (var index = 0; index < saltosLinea; index++)
            {
                docBuilder.Writeln();
            }
            docBuilder.Font.Bold = false;
        }
        /// <summary>
        /// Imprime uno de los miembreso de las personas responsables.
        /// </summary>
        /// <param name="listaMiembros">Lista de miembros a pintar.</param>
        /// <param name="docBuilder">Constructor del documento.</param>
        private void ImprimirMiembrosPersonasResponsables(IList<PersonaResponsableMiembro431000DTO> listaMiembros, DocumentBuilder docBuilder)
        {
            var saltosLinea = 5;
            if (listaMiembros.Count == 1)
            {
                var miembro = listaMiembros.First();
                docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Center;
                docBuilder.StartTable();
                docBuilder.CellFormat.Borders.LineWidth = 0;

                ImprimeCeldaComplementaria(docBuilder, 22, saltosLinea);
                ImprimeCeldaComplementaria(docBuilder, 45, saltosLinea);
                ImprimeCeldaComplementaria(docBuilder, 23, saltosLinea);
                docBuilder.EndRow();
                ImprimeCeldaComplementaria(docBuilder, 22);
                ImprimeCeldaFirmas(miembro,docBuilder, 45);
                ImprimeCeldaComplementaria(docBuilder, 23);
                docBuilder.EndRow();
            }
            else
            {
                docBuilder.StartTable();
                docBuilder.CellFormat.Borders.LineWidth = 0;

                ImprimeCeldaComplementaria(docBuilder, 45, saltosLinea);
                ImprimeCeldaComplementaria(docBuilder, 10, saltosLinea);
                ImprimeCeldaComplementaria(docBuilder, 45, saltosLinea);
                docBuilder.EndRow();

                for (var index = 0; index < listaMiembros.Count; index++)
                {

                            var miembro = listaMiembros[index];
                            ImprimeCeldaFirmas(miembro, docBuilder, 45);
                    
                        var esMiembroPar = ((index + 1) % 2) == 0;
                        if (!esMiembroPar)
                        {
                        ImprimeCeldaComplementaria(docBuilder, 10, 0);
                        }
                        else
                        {
                            docBuilder.EndRow();
                        }
                    }
                }
            
            docBuilder.EndTable();
            docBuilder.Writeln();
        }
        /// <summary>
        /// Imprieme el texto de leyenda.
        /// </summary>
        /// <param name="leyenda">Texto a imprimir</param>
        /// <param name="docBuilder">Constructor del documento.</param>
        private void ImprimirLeyenda(String leyenda, DocumentBuilder docBuilder)
        {
            docBuilder.Font.Name = TipoLetraTituloRol;
            docBuilder.Font.Bold = false;
            docBuilder.Font.Size = 12;
            docBuilder.ParagraphFormat.StyleIdentifier = StyleIdentifier.Normal;
            docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Justify;
            docBuilder.Font.Color = Color.Black;

            WordUtil.InsertHtml(docBuilder, "leyenda", "<p style=\"font-family:Arial;font-size: 12pt; text-align:justify;\" >" + leyenda + "</p>", false);

         
                
            docBuilder.InsertParagraph();
            docBuilder.ParagraphFormat.StyleIdentifier = StyleIdentifier.Normal;
            docBuilder.Writeln();
        }
        /// <summary>
        /// Imprime el titulo de una institucón dentro del documento.
        /// </summary>
        /// <param name="institucion">Texto que será impreso.</param>
        /// <param name="docBuilder">Constructor del documento.</param>
        private void ImprimirTituloInstitucion(String institucion, DocumentBuilder docBuilder)
        {
            docBuilder.Font.Name = TipoLetraTituloRol;
            docBuilder.Font.Bold = TituloRolNegrita;
            docBuilder.Font.Size = 14;
            docBuilder.ParagraphFormat.StyleIdentifier = StyleIdentifier.Normal;
            docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Center;
            docBuilder.Font.Color = Color.Black;
            docBuilder.Write(institucion??"");
            docBuilder.InsertParagraph();
            docBuilder.ParagraphFormat.StyleIdentifier = StyleIdentifier.Normal;
            docBuilder.Writeln();
        }
        /// <summary>
        /// Imprime el título de la figura responsable.
        /// </summary>
        /// <param name="idItemMiembroFiguraResponsable">Identificador del concepto de figura responsable.</param>
        /// <param name="docBuilder">Constructor de la persona responsable.</param>
        /// <param name="estructuraReporte">Estructrua del reporte.</param>
        private void ImprimirTituloFiguraResponsable(String idItemMiembroFiguraResponsable, DocumentBuilder docBuilder, ReporteXBRLDTO estructuraReporte)
        {
            var tituloFiguraResponsable = ObtenEtiquetaConcepto(idItemMiembroFiguraResponsable, estructuraReporte.Instancia, estructuraReporte.Lenguaje);
            docBuilder.Font.Name = TipoLetraTituloRol;
            docBuilder.Font.Bold = TituloRolNegrita;
            docBuilder.Font.Size = 14;
            docBuilder.ParagraphFormat.StyleIdentifier = StyleIdentifier.Normal;
            docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Left;
            docBuilder.Font.Color = Color.Black;
            docBuilder.StartBookmark(idItemMiembroFiguraResponsable);
            docBuilder.InsertHyperlink(tituloFiguraResponsable, "index", true);
            docBuilder.EndBookmark(idItemMiembroFiguraResponsable);
            docBuilder.InsertParagraph();
            docBuilder.ParagraphFormat.StyleIdentifier = StyleIdentifier.Normal;
            docBuilder.Writeln();
        }

        /// <summary>
        /// Genera un diccionaro con la información de las personas responsables.
        /// </summary>
        /// <param name="estructuraReporte">Estructura del reporte.</param>
        /// <returns>Diccionario con la información de las personas responsables.</returns>
        private IDictionary<String, IList<PersonaResponsable431000DTO>> GeneraDiccionarioPersonasResponsables(ReporteXBRLDTO estructuraReporte)
        {
            var documentoInstancia = estructuraReporte.Instancia;
            var consultaUtil = new ConsultaDocumentoInstanciaUtil(documentoInstancia, estructuraReporte.Plantilla);
            var diccionario = new Dictionary<String, IList<PersonaResponsable431000DTO>>();
            var filtroHechos = new FiltroHechosDto()
            {
                IdConcepto = new List<String>()
                {
                    "ar_pros_ResponsiblePersonName",
                    "ar_pros_ResponsiblePersonPosition",
                    "ar_pros_ResponsiblePersonInstitution",
                    "ar_pros_ResponsiblePersonLegend",
                    "ar_pros_SignIssuanceUnderArt13OfTheCUE",
                    "ar_pros_ResponsiblePersonInstitutionExternalAuditor",
                    "ar_pros_OtherInstitutionExternalAuditor",
                    "ar_pros_ResponsiblePersonInstitutionBacherlorOfLaws",
                    "ar_pros_OtherInstitutionBacherlorOfLaws",
                }
            };
            var diccionarioPersonasResponsables = new Dictionary<String, IList<PersonaResponsable431000DTO>>();
            var idsHechosConceptos =  consultaUtil.BuscaHechosPorFiltro(filtroHechos);
            var idsContextos = consultaUtil.ObtenIdsContextosHechos(idsHechosConceptos);
            var contextosPorFiguraResponsable = consultaUtil.AgrupaContextosPorMiembro("http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfResponsibleFigureAxis", idsContextos);
            foreach (var idItemMiembroFiguraResponsable in contextosPorFiguraResponsable.Keys)
            {
                var listaContextosPorFiguraResponsable = contextosPorFiguraResponsable[idItemMiembroFiguraResponsable];
                var contextosPorEntidad = consultaUtil.AgrupaContextosPorMiembro("http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:ResponsiblePersonsInstitutionSequenceTypedAxis", listaContextosPorFiguraResponsable);
                IList<PersonaResponsable431000DTO> listaPersonasResponsablesMiembro;
                if (!diccionario.TryGetValue(idItemMiembroFiguraResponsable, out listaPersonasResponsablesMiembro))
                {
                    listaPersonasResponsablesMiembro = new List<PersonaResponsable431000DTO>();
                    diccionario.Add(idItemMiembroFiguraResponsable, listaPersonasResponsablesMiembro);
                }
                foreach (var miembroTipificadoInstitucion in contextosPorEntidad.Keys)
                {
                var personaResponsableDto = new PersonaResponsable431000DTO()
                {
                    Miembros = new List<PersonaResponsableMiembro431000DTO>()
                };
                listaPersonasResponsablesMiembro.Add(personaResponsableDto);

                    var listaContextosPorInstitucion = contextosPorEntidad[miembroTipificadoInstitucion];
                    var listaIdsHechosInstitucion = consultaUtil.BuscaHechosPorFiltro(new FiltroHechosDto()
                    {
                        IdConcepto = new List<String>() {
                            "ar_pros_ResponsiblePersonInstitution",
                            "ar_pros_ResponsiblePersonLegend",
                            "ar_pros_ResponsiblePersonInstitutionExternalAuditor",
                            "ar_pros_OtherInstitutionExternalAuditor",
                            "ar_pros_ResponsiblePersonInstitutionBacherlorOfLaws",
                            "ar_pros_OtherInstitutionBacherlorOfLaws"
                        },
                        IdContexto = listaContextosPorInstitucion
                    });
                    String otraInstitucion = String.Empty;
                    foreach (var idHechoInstitucion in listaIdsHechosInstitucion)
                    {
                        HechoDto hechoInsititucionLeyenda;
                        if (documentoInstancia.HechosPorId.TryGetValue(idHechoInstitucion, out hechoInsititucionLeyenda))
                        {
                            if (hechoInsititucionLeyenda.IdConcepto.Equals("ar_pros_ResponsiblePersonInstitution"))
                            {
                                personaResponsableDto.Institucion = hechoInsititucionLeyenda.Valor;
                            }
                            if (hechoInsititucionLeyenda.IdConcepto.Equals("ar_pros_ResponsiblePersonInstitutionExternalAuditor") ||
                                hechoInsititucionLeyenda.IdConcepto.Equals("ar_pros_ResponsiblePersonInstitutionBacherlorOfLaws"))
                            {
                                personaResponsableDto.Institucion = hechoInsititucionLeyenda.Valor;
                            }
                            if (hechoInsititucionLeyenda.IdConcepto.Equals("ar_pros_OtherInstitutionExternalAuditor") ||
                                hechoInsititucionLeyenda.IdConcepto.Equals("ar_pros_OtherInstitutionBacherlorOfLaws"))
                            {
                                otraInstitucion = hechoInsititucionLeyenda.Valor;
                            }
                            if (hechoInsititucionLeyenda.IdConcepto.Equals("ar_pros_ResponsiblePersonLegend"))
                            {
                                personaResponsableDto.Leyenda = hechoInsititucionLeyenda.Valor;
                            }
                        }
                    }
                    if (!String.IsNullOrEmpty(otraInstitucion) && personaResponsableDto.Institucion.Equals("Otro"))
                    {
                        personaResponsableDto.Institucion = otraInstitucion;
                    }
                    var diccionarioMiembrosPersonasResponsables = consultaUtil.AgrupaContextosPorMiembro("http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:ResponsiblePersonsSequenceTypedAxis", listaContextosPorInstitucion);
                    foreach (var idMiembroResponsable in diccionarioMiembrosPersonasResponsables.Keys)
                    {
                        var listaContextosPersonaResponsable = diccionarioMiembrosPersonasResponsables[idMiembroResponsable];
                        var idPrimerContexto = listaContextosPersonaResponsable.First();
                        IList<String> listaIdsHechosPersonaResponsable;
                        if (documentoInstancia.HechosPorIdContexto.TryGetValue(idPrimerContexto, out listaIdsHechosPersonaResponsable))
                        {
                            var miembroPresonaResponsable = new PersonaResponsableMiembro431000DTO();
                            for (var indexHechoPresona = 0; indexHechoPresona < listaIdsHechosPersonaResponsable.Count; indexHechoPresona++)
                            {
                                var idHechoPersona = listaIdsHechosPersonaResponsable[indexHechoPresona];
                                HechoDto hechoPersonaResponsable;
                                if (documentoInstancia.HechosPorId.TryGetValue(idHechoPersona, out hechoPersonaResponsable))
                                {
                                    if (hechoPersonaResponsable.IdConcepto.Equals("ar_pros_ResponsiblePersonName"))
                                    {
                                        miembroPresonaResponsable.Nombre = hechoPersonaResponsable.Valor;
                                    }
                                    if (hechoPersonaResponsable.IdConcepto.Equals("ar_pros_ResponsiblePersonPosition"))
                                    {
                                        miembroPresonaResponsable.Cargo = hechoPersonaResponsable.Valor;
                                    }
                                    if (hechoPersonaResponsable.IdConcepto.Equals("ar_pros_SignIssuanceUnderArt13OfTheCUE"))
                                    {
                                        miembroPresonaResponsable.FirmaArticulo13 = hechoPersonaResponsable.Valor.Equals("SI");
                                        if (miembroPresonaResponsable.FirmaArticulo13)
                                        {
                                            personaResponsableDto.ContieneFirmasLeyendaArt13 = true;
                                        }
                                    }

                                }
                            }
                            if (!String.IsNullOrEmpty(miembroPresonaResponsable.Nombre))
                            {
                                personaResponsableDto.Miembros.Add(miembroPresonaResponsable);
                            }
                        }
                    }
                }
            }

            return diccionario;
        }

        /// <summary>
        /// Imprime una tarjeta de presentación de persona responsable.
        /// </summary>
        /// <param name="docBuilder">Constructor del documento.</param>
        /// <param name="tarjeta">Diccionario con los datos del miembro.</param>
        /// <param name="instancia">Documento de instancia.</param>
        private void PintaTarjetaPersonaResponsable(DocumentBuilder docBuilder, IDictionary<string, HechoDto> tarjeta, DocumentoInstanciaXbrlDto instancia)
        {
            docBuilder.StartTable();

            establecerBordesCeldaTabla(docBuilder);
            var conceptosNombre = new List<string>() { "ar_pros_ResponsiblePersonName"};
            var tituloNombre = ConcatenaElementosTarjeta(tarjeta, conceptosNombre, " ");
            establecerFuenteCeldaTitulo(docBuilder);
            SetCellColspan(docBuilder, tituloNombre, 2);
            docBuilder.EndRow();
            var conceptosPrimeraFila = new List<string>() {
                "ar_pros_ResponsiblePersonPosition",
                "ar_pros_ResponsiblePersonInstitution"};
            ImprimeConceptosTarjetaDosFilas(docBuilder, tarjeta, conceptosPrimeraFila, instancia, 0, Idioma);
            var conceptosSegundaFila = new List<string>() {
                "ar_pros_ResponsiblePersonLegend"};
            ImprimeConceptosTarjetaDosFilas(docBuilder, tarjeta, conceptosSegundaFila, instancia, 2, Idioma);
            
            docBuilder.EndTable();
            docBuilder.Writeln();
        }
        /// <summary>
        /// Imprime las tarjetas de los administradores.
        /// </summary>
        /// <param name="docBuilder">Constructor del documento.</param>
        /// <param name="instancia">Documento de instancia.</param>
        /// <param name="hipercubo">Información del hipercubo.</param>
        private void PintaPersonasResponsables(DocumentBuilder docBuilder, DocumentoInstanciaXbrlDto instancia, HipercuboReporteDTO hipercubo)
        {

            var matrizPlantillaContexto = hipercubo.Hechos;
            var diccionarioTarjetas = hipercubo.Utileria.ReordenaConjutosPorExplicitaImplicitaConcepto(matrizPlantillaContexto);

            foreach (var clavePlantilla in diccionarioTarjetas.Keys)
            {
                var listaTajetas = diccionarioTarjetas[clavePlantilla];
                var primerHecho = listaTajetas.First().First().Value;
                var miembroExplicita = hipercubo.Utileria.ObtenMiembroDimension(primerHecho, "ar_pros_TypeOfResponsibleFigureAxis", instancia);
                var textoTituloMiembro = ObtenEtiquetaConcepto(miembroExplicita.IdItemMiembro, instancia, Idioma);
                ImprimeSubTitulo(docBuilder, textoTituloMiembro);
                foreach (var tarjeta in listaTajetas)
                {
                    PintaTarjetaPersonaResponsable(docBuilder, tarjeta, instancia);
                }
            }
        }

    }
    /// <summary>
    /// Persona responsable de un puesto dentro de la institución.
    /// </summary>
    public class PersonaResponsableMiembro431000DTO
    {
        /// <summary>
        /// Nombre de la persona.
        /// </summary>
        public String Nombre { get; set; }
        /// <summary>
        /// Cargo que ocupa.
        /// </summary>
        public String Cargo { get; set; }
        /// <summary>
        /// Firma la leyenda del articulo 13.
        /// </summary>
        public Boolean FirmaArticulo13 { get; set; }


    }
    /// <summary>
    /// Conjunto de personas responsables.
    /// </summary>
    public class PersonaResponsable431000DTO
    {
        /// <summary>
        /// Institución a la que pertenecen.
        /// </summary>
        public String Institucion { get; set; }
        /// <summary>
        /// Leyenda que les aplica.
        /// </summary>
        public String Leyenda { get; set; }
        /// <summary>
        /// Lista de miembros que ocupan los cargos.
        /// </summary>
        public IList<PersonaResponsableMiembro431000DTO> Miembros {get; set;}
        /// <summary>
        /// Bandera que indica si alguno de los miembros contiene firma del articulo 13.
        /// </summary>
        public bool ContieneFirmasLeyendaArt13 { get; set; }
    }
}
