using AbaxXBRLCore.Reports.Dto;
using AbaxXBRLCore.Reports.Util;
using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.Viewer.Application.Dto;
using Aspose.Words;
using Aspose.Words.Tables;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.IO;
using Aspose.Words.Drawing;
using System.Text.RegularExpressions;

namespace AbaxXBRLCore.Reports.Exporter.Impl.Rol
{
    /// <summary>
    /// Exportador general para la taxonomía de prospecto.
    /// </summary>
    public class ExportadorRolDocumento815101 : ExportadorRolDocumentoBase
    {
        /// <summary>
        /// Diccionario con las definiciones de los constructores de las sub secciones por concepto.
        /// </summary>
        public IDictionary<String, IExportadorSubseccionConcepto> ConstructoresSubseccionConcepto { get; set; }
        /// <summary>
        /// Bandera que indica si se deben concatenar los archivos adjuntos al final del rol.
        /// </summary>
        public bool ConcatenarAdjuntos { get; set; }
        /// <summary>
        /// Diccionario con las definiciones de los constructores de secciones que se presentan despues de un concepto (marca) determinado.
        /// La llave del diccionario es el identificador del concepto que funge como marca.
        /// </summary>
        public IDictionary<String,IExportadorSubseccionConcepto> ConstructoresPorMarca { get; set; }
        /// <summary>
        /// Diccionario de conceptos que deben presentarse por marca.
        /// </summary>
        public IDictionary<int, IList<String>> ConceptosPorPosicion { get; set; }
        /// <summary>
        /// Conceptos que no deben presentarse de forma automática en el reporte.
        /// </summary>
        public IList<String> ConceptosDescartar { get; set; }
        /// <summary>
        /// Conceptos que no deben presentarse de forma automática en el reporte.tomarse en cuenta para saber si se capturo información en un rol.
        /// </summary>
        public IList<String> ConceptosIgnorarReporte { get; set; }
        /// <summary>s
        /// Diccionario con la definición de los concepots que solo deben presentarse cuando su valor coincida con el indicado.
        /// </summary>
        public IDictionary<String, String> PresentarCuandoValorIgual { get; set; }
        /// <summary>
        /// Conceptos de los que solo se presentará el valor.
        /// </summary>
        public IList<String> ConceptosSinEtiqueta { get; set; }
        /// <summary>
        /// Lista con los identificadores de los roles que se pretenden descartar.
        /// </summary>
        public IList<String> RolesDescartar { get; set; }
        /// <summary>
        /// Contiene la definición de los concepots 
        /// </summary>
        public IList<RolIncorporacionPorReferenciaDto> RolesIncorporacionPorReferencia { get; set; }
        /// <summary>
        /// Bandera que indica si las etiquetas abstractas deben ser modificadas para retirar los textos de tipo [Sinopsis]
        /// </summary>
        public bool DepurarEtiquetasAbstractos { get; set; }
        /// <summary>
        /// Bandera que indica si se deben descartar los conceptos abstractos.
        /// </summary>
        public bool DescartarAbastractos { get; set; }
        /// <summary>
        /// Expresion regular para depurar etiquetas de abstractos.
        /// </summary>
        public Regex RegexEtiquetasAbstractos = new Regex("\\[.+?\\]",RegexOptions.Compiled | RegexOptions.Multiline);
        /// <summary>
        /// Diccionario con el conjunto de conceptos booleanos que deben agruparse.
        /// </summary>
        public IDictionary<String, IList<String>> BooleanosAgrupar { get; set; }
        /// <summary>
        /// Diccionario con los estilos que aplican por concepto.
        /// </summary>
        public IDictionary<String, EstilosConceptoDTO> EstilosPorConcepto { get; set; }
        /// <summary>
        /// Bandera que indica si se debe forzar a dos columnas la impresción de los conceptos.
        /// </summary>
        public bool ForzarDosColumnas { get; set; }
        /// <summary>
        /// Porcentaje que debe ocupar el título a dos columnas.
        /// </summary>
        public int? AnchoMinimoTitulodosColumnas { get; set; }
        /// <summary>
        /// Porcentaje que debe ocupar el título a dos columnas.
        /// </summary>
        public int? AnchoSegundaColumnaCampo { get; set; }
        /// <summary>
        /// Constructor por defecto.
        /// </summary>
        public ExportadorRolDocumento815101()
        {
            ConstructoresSubseccionConcepto = new Dictionary<String, IExportadorSubseccionConcepto>();
            ConstructoresPorMarca = new Dictionary<String, IExportadorSubseccionConcepto>();
            ConceptosPorPosicion = new Dictionary<int, IList<String>>();
            BooleanosAgrupar = new Dictionary<String, IList<String>>();
            PresentarCuandoValorIgual = new Dictionary<String, String>();
            EstilosPorConcepto = new Dictionary<String, EstilosConceptoDTO>();
        }

        /// <summary>
        /// Exportador a Word.
        /// </summary>
        /// <param name="docBuilder">Constructor del documento.</param>
        /// <param name="instancia">DTO con la información de la instancia XBRL</param>
        /// <param name="rolAExportar">DTO con la información del rol a exportar.</param>
        /// <param name="estructuraReporte"></param>
        public override void exportarRolAWord(DocumentBuilder docBuilder, DocumentoInstanciaXbrlDto instancia, IndiceReporteDTO rolAExportar, ReporteXBRLDTO estructuraReporte)
        {
            InicializaConfiguracionPaginaDefault(docBuilder);

            escribirEncabezado(docBuilder, instancia, estructuraReporte, true);

            imprimirTituloRol(docBuilder, rolAExportar);
            ImprimirContenidoRol(docBuilder, instancia, rolAExportar, estructuraReporte);
        }
        /// <summary>
        /// Concatena los archivos al final del documento.
        /// </summary>
        /// <param name="docBuilder">Constructor del documento.</param>
        /// <param name="instancia">Documento de instancia.</param>
        /// <param name="rolAExportar">Rol que se exporta</param>
        /// <param name="estructuraReporte">DTO con información general del reporte.</param>
        public void ConcatenaArchivosAdjuntos(
            DocumentBuilder docBuilder, 
            DocumentoInstanciaXbrlDto instancia, 
            IndiceReporteDTO rolAExportar, 
            ReporteXBRLDTO estructuraReporte)
        {
            if (estructuraReporte.ArchivosAdjuntos != null)
            {
                foreach (var archivoAdjuntar in estructuraReporte.ArchivosAdjuntos.Values)
                {
                    GeneraPortadaArchivoAdjunto(archivoAdjuntar, docBuilder);
                    AgregaImagenHechoPDF(docBuilder, archivoAdjuntar.HechoArchivo);
                }
            }
        }
        /// <summary>
        /// Obtiene las imagenes del PDF adjunto al concepto indicado y las agrega al documento.
        /// </summary>
        /// <param name="docBuilder">Constructor del documento.</param>
        /// <param name="hecho">Hecho del concepto que contiene el binario</param>
        private void AgregaImagenHechoPDF(DocumentBuilder docBuilder, HechoDto hecho)
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
        /// Genera la portada de un archivo adjunto.
        /// </summary>
        /// <param name="titulo">Título del archivo.</param>
        /// <param name="docBuilder">Constructor del documento.</param>
        public void GeneraPortadaArchivoAdjunto(ArchivoReporteDTO archivo, DocumentBuilder docBuilder)
        {
            docBuilder.InsertBreak(BreakType.SectionBreakNewPage);
            docBuilder.Font.Name = "Arial";
            docBuilder.Font.Bold = false;
            docBuilder.Font.Size = 14;
            docBuilder.ParagraphFormat.StyleIdentifier = StyleIdentifier.Normal;
            docBuilder.Font.Color = Color.Black;

            docBuilder.Writeln(); docBuilder.Writeln();
            docBuilder.Writeln(); docBuilder.Writeln();
            docBuilder.Writeln(); docBuilder.Writeln();
            docBuilder.Writeln(); docBuilder.Writeln();
            docBuilder.Writeln(); docBuilder.Writeln();
            docBuilder.Writeln(); docBuilder.Writeln();

            var tabla = docBuilder.StartTable();
            docBuilder.InsertCell();

            tabla.SetBorders(LineStyle.None, 0, Color.Black);
            docBuilder.CellFormat.Borders.Bottom.Color = Color.Black;
            docBuilder.CellFormat.Borders.Bottom.LineStyle = LineStyle.Single;
            docBuilder.CellFormat.Borders.Bottom.LineWidth = 0.5;
            docBuilder.CellFormat.Borders.Top.Color = Color.Black;
            docBuilder.CellFormat.Borders.Top.LineStyle = LineStyle.Single;
            docBuilder.CellFormat.Borders.Top.LineWidth = 0.5;
            docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Center;
            docBuilder.ParagraphFormat.SpaceAfter = 8;
            docBuilder.Writeln();
            var tokenLink = archivo.TokenArchivo;
            docBuilder.StartBookmark(tokenLink);
            docBuilder.Write(archivo.TituloArchivo);
            docBuilder.EndBookmark(tokenLink);
            docBuilder.Writeln();

            docBuilder.EndRow();
            docBuilder.EndTable();
            docBuilder.Writeln(); docBuilder.Writeln();
            docBuilder.Writeln(); docBuilder.Writeln();
            docBuilder.InsertBreak(BreakType.SectionBreakNewPage);
        }


        /// <summary>
        /// Presenta la incorporación por referencia para los elementos que aplican.
        /// </summary>
        /// <param name="docBuilder">Constructor del documento.</param>
        /// <param name="instancia">Documento de instancia.</param>
        /// <param name="rolAExportar">Rol que se pretende exportar.</param>
        /// <param name="estructuraReporte">Estructura del reporte</param>
        /// <param name="incluirTituloRol">Bandera que indica si se debe de incluir el título del rol.</param>
        /// <returns>Si se agrego incorporaicón por repferencia al rol indicado.</returns>
        public Boolean PresentarIncorporacionPorReferencia(DocumentBuilder docBuilder, DocumentoInstanciaXbrlDto instancia, IndiceReporteDTO rolAExportar, ReporteXBRLDTO estructuraReporte, bool incluirTituloRol)
        {
            var porReferencia = false;
            if (RolesIncorporacionPorReferencia != null)
            {
                foreach (var configuracionRol in RolesIncorporacionPorReferencia)
                {
                    if (configuracionRol.Uri.Equals(rolAExportar.Uri))
                    {
                        var hechoIncoporacionPorReferencia = ObtenPrimerHechoPorIdConcepto(instancia, configuracionRol.IdConceptoIncorporacionPorReferencia);
                        if (hechoIncoporacionPorReferencia != null &&
                           !String.IsNullOrEmpty(hechoIncoporacionPorReferencia.Valor) &&
                           hechoIncoporacionPorReferencia.Valor.Equals("SI"))
                        {
                            porReferencia = true;
                            var hechoTexto = ObtenPrimerHechoPorIdConcepto(instancia, configuracionRol.IdConceptoTextoReferencia);
                            if (hechoTexto != null && !String.IsNullOrEmpty(hechoTexto.Valor))
                            {
                                AgregarReferenciaIndice(docBuilder, rolAExportar, hechoTexto.Valor);
                            }
                        }
                    }
                }
            }
            return porReferencia;
        }
        /// <summary>
        /// Inserta una referencia a la portada para ser considerada en el indice.
        /// </summary>
        /// <param name="docBuilder">Constructor del documento.</param>
        /// <param name="rolAExportar">Rol que se pretende exportar.</param>
        /// <param name="texto">Texto que se pretende agregar al indice.</param>
        protected void AgregarReferenciaIndice(DocumentBuilder docBuilder, IndiceReporteDTO rolAExportar, String texto)
        {
            docBuilder.ParagraphFormat.StyleIdentifier = StyleIdentifier.Heading3;
            docBuilder.Font.Color = Color.Transparent;
            docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Justify;
            docBuilder.Font.Size = 1;
            docBuilder.StartBookmark(rolAExportar.Rol);
            docBuilder.InsertHyperlink(texto.Replace("\n","").Replace("\r",""), "index", true);
            //docBuilder.Write(rolAExportar.Descripcion);
            docBuilder.EndBookmark(rolAExportar.Rol);
            docBuilder.InsertParagraph();

            docBuilder.Font.Size = TamanioLetraTituloRol;
            docBuilder.ParagraphFormat.StyleIdentifier = StyleIdentifier.Normal;
            //docBuilder.Writeln();
        }
        /// <summary>
        /// Inicializa los valores por defecto de la sección a imprimir.
        /// </summary>
        /// <param name="docBuilder">Constructor del documento.</param>
        public void InicializaConfiguracionPaginaDefault(DocumentBuilder docBuilder)
        {
            docBuilder.CurrentSection.PageSetup.Orientation = Orientation.Portrait;
            docBuilder.CurrentSection.PageSetup.PaperSize = PaperSize.Letter;
            docBuilder.CurrentSection.PageSetup.LeftMargin = 40;
            docBuilder.CurrentSection.PageSetup.RightMargin = 40;
        }
        /// <summary>
        /// Crea el conetenido para el rol indicado.
        /// </summary>
        /// <param name="docBuilder">Constructor del docuemnto.</param>
        /// <param name="instancia">Instancia XBRL con la información a pintar.</param>
        /// <param name="rolAExportar">Rol que se pinta.</param>
        /// <param name="estructuraReporte">DTO con información general del reporte.</param>
        public void ImprimirContenidoRol(
            DocumentBuilder docBuilder, 
            DocumentoInstanciaXbrlDto instancia, 
            IndiceReporteDTO rolAExportar, 
            ReporteXBRLDTO estructuraReporte)
        {
            var posicionActual = 1;
            IList<String> listaIdConceptoPosicion;
            foreach (ConceptoReporteDTO concepto in estructuraReporte.Roles[rolAExportar.Rol])
            {

                EscribeConcepto(concepto, docBuilder, estructuraReporte);
            }
        }
        /// <summary>
        /// Retorna el ConceptoReporteDTO con el identificador dado.
        /// </summary>
        /// <param name="idConcepto">Identificador del concepto.</param>
        /// <param name="estructuraReporte">Estructura del reporte.</param>
        /// <returns>Elemento requerido.</returns>
        public ConceptoReporteDTO ObtenConceptoReporte(String idConcepto ,ReporteXBRLDTO estructuraReporte)
        {
            ConceptoReporteDTO conceptoReporte = null;
            foreach (var idRol in estructuraReporte.Roles.Keys)
            {
                var listaConceptosRol = estructuraReporte.Roles[idRol];
                if (listaConceptosRol != null)
                {
                    conceptoReporte = listaConceptosRol.Where(X => X.IdConcepto.Equals(idConcepto)).FirstOrDefault();
                    break;
                }
            }
            return conceptoReporte;
        }

        /// <summary>
        /// Presenta un concepto determinado
        /// </summary>
        /// <param name="docBuilder">Constructor del documento.</param>
        /// <param name="instancia">Documento de instancia.</param>
        /// <param name="rolAExportar">Rol a exportar.</param>
        /// <param name="estructuraReporte">Dto con información general del reporte.</param>
        /// <param name="concepto">Concepto que se presenta.</param>
        /// <param name="idsConceptosDescartar">Listado de identificadores de concepto a descartar.</param>
        /// <param name="conceptosHiercubos">Listado de conceptos que pertenecen a hipercubos.</param>
        public void PresentaConcepto(
            DocumentBuilder docBuilder,
            DocumentoInstanciaXbrlDto instancia,
            IndiceReporteDTO rolAExportar,
            ReporteXBRLDTO estructuraReporte, 
            ConceptoReporteDTO concepto, 
            IList<string> idsConceptosDescartar, 
            IDictionary<string, bool> conceptosHiercubos)
        {
            EscribeConcepto(concepto, docBuilder, estructuraReporte);

        }

        /// <summary>
        /// Obtiene el primer hecho con el identificador de concepto indicado.
        /// </summary>
        /// <param name="instancia">Documento de instancia con la información.</param>
        /// <param name="idConcepto">Identificador del concepto buscado.</param>
        /// <returns>Primer hecho encontrado o null si no se encontro hecho.</returns>
        public HechoDto ObtenPrimerHechoPorIdConcepto(DocumentoInstanciaXbrlDto instancia, String idConcepto)
        {
            HechoDto hecho = null;
            IList<String> listaIdsHechosPorconcepto;
            if (instancia.HechosPorIdConcepto.TryGetValue(idConcepto, out listaIdsHechosPorconcepto))
            {
                var idHecho = listaIdsHechosPorconcepto.FirstOrDefault();
                if (!String.IsNullOrEmpty(idHecho))
                {
                    instancia.HechosPorId.TryGetValue(idHecho, out hecho);
                }
            }
            return hecho;
        }
        /// <summary>
        /// Escribe el valor de un concepto directamente en la página actual.
        /// </summary>
        /// <param name="concepto">Concepto del reporte que se pretende presentar.</param>
        /// <param name="docBuilder">Constructor del documento.</param>
        /// <param name="estructuraReporte">Datos generales del reporte.</param>
        /// <returns>Hecho presentado</returns>
        private HechoReporteDTO EscribeConcepto(ConceptoReporteDTO concepto, DocumentBuilder docBuilder, ReporteXBRLDTO estructuraReporte)
        {
          
            HechoReporteDTO hechoReporteDTO = null;
            foreach (var idHecho in concepto.Hechos.Keys)
            {
                if (concepto.Hechos.TryGetValue(idHecho, out hechoReporteDTO) && 
                    hechoReporteDTO != null && !String.IsNullOrEmpty(hechoReporteDTO.Valor))
                {
                    break;
                }
            }
            var esBloqueDeTexto = false;
            var cadenaMuyGrande = false;
            if (hechoReporteDTO != null && !String.IsNullOrEmpty(hechoReporteDTO.Valor))
            {
                // condicion para obtener el formato de los tres primeros conceptos
                string text_block = ObtenertipoDato(concepto, ExportadorRolDocumentoBase.TIPO_DATO_TEXT_BLOCK);
                esBloqueDeTexto = concepto.TipoDato == text_block;
                var longitudFila = concepto.Valor.Length + hechoReporteDTO.Valor.Length;
                cadenaMuyGrande = longitudFila > 40;
                if (esBloqueDeTexto || cadenaMuyGrande)
                {
                    if (!docBuilder.CurrentParagraph.PreviousSibling.NodeType.Equals(NodeType.Paragraph))
                    {
                        docBuilder.Font.Size = 8;
                        docBuilder.Font.Bold = false;
                        docBuilder.Writeln();
                        docBuilder.Writeln();
                    }

                    EscribirTipoNotaTexto(docBuilder, estructuraReporte, hechoReporteDTO, concepto);
                }
                else
                {
                    EscribirADosColumnasConceptoValor(docBuilder, estructuraReporte, concepto, hechoReporteDTO);
                }
            }
            
            return hechoReporteDTO;
        }


        /// <summary>
        /// Intenta obtener los estilos personalizados para un concepto determinado.
        /// </summary>
        /// <param name="idConcepto">Identificador del concepto.</param>
        /// <param name="estructuraReporte">Estructura del reporte.</param>
        /// <returns></returns>
        public virtual EstilosConceptoDTO ObtenEstilosConcepto(String idConcepto, ReporteXBRLDTO estructuraReporte)
        {
            EstilosConceptoDTO estilo = null;
            EstilosPorConcepto.TryGetValue(idConcepto, out estilo);
            return estilo;
        }



        /// <summary>
        /// Escribe el contenido de un hecho de tipo textbloc marcando los estilos del título en color negro.
        /// También lo marca compo titulo 2 para que se muestre en la tabla de contenido.
        /// </summary>
        /// <param name="docBuilder">Constructor del documento..</param>
        /// <param name="estructuraReporte">Información general de la distribución de elementos en el reporte.</param>
        /// <param name="hecho">Hecho de tipo nota de texot que se pretende imprimir.</param>
        /// <param name="conceptoActual">Identificador del concepto de tipo bloque de texot.</param>
        public override void EscribirTipoNotaTexto(DocumentBuilder docBuilder, ReporteXBRLDTO estructuraReporte, HechoReporteDTO hecho, ConceptoReporteDTO conceptoActual)
        {
            establecerFuenteTituloCampo(docBuilder);
            docBuilder.Font.Size = TamanioLetraTituloConceptoNota;
            docBuilder.Font.Color = Color.Black;
            docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Justify;
            docBuilder.ParagraphFormat.Borders.Bottom.LineStyle = LineStyle.Single;
            docBuilder.ParagraphFormat.Borders.Bottom.Color = Color.DarkGray;
            docBuilder.ParagraphFormat.Borders.Bottom.LineWidth = 2;
            if (conceptoActual.AtributosAdicionales != null)
            {
                if (conceptoActual.AtributosAdicionales.Count == 1)
                {
                    conceptosEnIndice(docBuilder, conceptoActual);

                }
                else
                {
                    //AplicaEstilosEtiquetaConcepto(docBuilder, conceptoActual.IdConcepto, estructuraReporte);
                    docBuilder.Write(conceptoActual.Valor);
                }

            }
            else
            {
                //AplicaEstilosEtiquetaConcepto(docBuilder, conceptoActual.IdConcepto, estructuraReporte);
                docBuilder.Write(conceptoActual.Valor);
            }
            //Table tablaActual = docBuilder.StartTable();
            //docBuilder.InsertCell();
            //docBuilder.Font.Size = 1;
            //docBuilder.Font.Spacing = 1;
            //tablaActual.SetBorders(LineStyle.None, 0, Color.Black);
            //docBuilder.CellFormat.Borders.Top.Color = Color.DarkGray;
            //docBuilder.CellFormat.Borders.Top.LineStyle = LineStyle.Single;
            //docBuilder.CellFormat.Borders.Top.LineWidth = 2;
            //docBuilder.EndRow();
            //docBuilder.EndTable();

            docBuilder.ParagraphFormat.Borders.LineStyle = LineStyle.None;

            establecerFuenteValorCampo(docBuilder);
            docBuilder.Font.Color = Color.Black;
            docBuilder.InsertParagraph();
            docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Justify;
            //AplicaEstilosValorConcepto(docBuilder, conceptoActual.IdConcepto, estructuraReporte);
            escribirValorHecho(docBuilder, estructuraReporte, hecho, conceptoActual);

            docBuilder.Writeln();
            docBuilder.ParagraphFormat.Borders.Top.LineStyle = LineStyle.Single;
            docBuilder.ParagraphFormat.Borders.Top.Color = Color.DarkGray;
            docBuilder.ParagraphFormat.Borders.Top.LineWidth = 2;
            docBuilder.Writeln();
            docBuilder.ParagraphFormat.Borders.LineStyle = LineStyle.None;
            //tablaActual = docBuilder.StartTable();
            //docBuilder.InsertCell();
            //docBuilder.Font.Size = 1;
            //docBuilder.Font.Spacing = 1;
            //tablaActual.SetBorders(LineStyle.None, 0, Color.Black);
            //docBuilder.CellFormat.Borders.Bottom.Color = Color.DarkGray;
            //docBuilder.CellFormat.Borders.Bottom.LineStyle = LineStyle.Single;
            //docBuilder.CellFormat.Borders.Bottom.LineWidth = 2;
            //docBuilder.EndRow();
            //docBuilder.EndTable();
            //docBuilder.Writeln();
            //docBuilder.Writeln();
        }

        /// <summary>
        /// Imprime el valor de un hecho a dos columnas.
        /// </summary>
        /// <param name="docBuilder">Constructor del documento.</param>
        /// <param name="estructuraReporte">DTO con información general del reporte actual</param>
        /// <param name="concepto">Concepto que se presenta.</param>
        /// <param name="hecho">Hecho que se persenta.</param>
        public override void EscribirADosColumnasConceptoValor(DocumentBuilder docBuilder, ReporteXBRLDTO estructuraReporte, ConceptoReporteDTO concepto, HechoReporteDTO hecho)
        {
            Table tablaActual = docBuilder.StartTable();
            docBuilder.ParagraphFormat.SpaceAfter = 5;
            docBuilder.ParagraphFormat.SpaceBefore = 5;

            docBuilder.InsertCell();
            if (AnchoMinimoTitulodosColumnas != null && AnchoMinimoTitulodosColumnas > 0)
            {
                docBuilder.CellFormat.PreferredWidth = PreferredWidth.FromPercent(AnchoMinimoTitulodosColumnas ?? 50);
            }

            establecerFuenteTituloCampo(docBuilder);
            docBuilder.Font.Size = 11;
            docBuilder.Font.Color = Color.Black;
            //AplicaEstilosEtiquetaConcepto(docBuilder, concepto.IdConcepto, estructuraReporte);
            docBuilder.Write(concepto.Valor);
            docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Justify;
            docBuilder.Write(": ");

            docBuilder.InsertCell();
            int porcentajeSegundaColumna = 50;
            docBuilder.CellFormat.PreferredWidth = PreferredWidth.FromPercent(porcentajeSegundaColumna);
            establecerFuenteValorCampo(docBuilder);
            docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Right;
            docBuilder.Font.Size = 10;
            //AplicaEstilosValorConcepto(docBuilder, concepto.IdConcepto, estructuraReporte);
            escribirValorHecho(docBuilder, estructuraReporte, hecho, concepto);
            docBuilder.EndRow();

            tablaActual.SetBorders(LineStyle.None, 0, Color.Black);
            tablaActual.SetBorder(BorderType.Horizontal, LineStyle.Single, .75, Color.DarkGray, true);
            tablaActual.SetBorder(BorderType.Bottom, LineStyle.Single, .75, Color.DarkGray, true);

            docBuilder.EndTable();
            docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Left;
        }
    }
}
