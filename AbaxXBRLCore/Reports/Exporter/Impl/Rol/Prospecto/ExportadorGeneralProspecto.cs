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

namespace AbaxXBRLCore.Reports.Exporter.Impl.Rol.Prospecto
{
    /// <summary>
    /// Exportador general para la taxonomía de prospecto.
    /// </summary>
    public class ExportadorGeneralProspecto : ExportadorRolDocumentoBase
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
        public ExportadorGeneralProspecto()
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
            //var listaRolesDescartar = ObtenRolesDescartar(instancia);
            if (!ContieneInformacion(instancia,rolAExportar, estructuraReporte))
            {
                PresentarIncorporacionPorReferencia(docBuilder, instancia, rolAExportar, estructuraReporte, true);
                return;
            }
            InicializaConfiguracionPaginaDefault(docBuilder);
            imprimirTituloRol(docBuilder, rolAExportar);
            PresentarIncorporacionPorReferencia(docBuilder, instancia, rolAExportar, estructuraReporte, false);
            ImprimirContenidoRol(docBuilder, instancia, rolAExportar, estructuraReporte);
            if (ConcatenarAdjuntos)
            {
                ConcatenaArchivosAdjuntos(docBuilder, instancia, rolAExportar, estructuraReporte);
            }
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
            var conceptosHiercubos = ObtenConceptosHipercubos(instancia, rolAExportar.Uri);
            var idsConceptosDescartar = ObtenConceptosDescartar(instancia,rolAExportar,estructuraReporte);
            var posicionActual = 1;
            IList<String> listaIdConceptoPosicion;
            foreach (ConceptoReporteDTO concepto in estructuraReporte.Roles[rolAExportar.Rol])
            {

                if (ConceptosPorPosicion.TryGetValue(posicionActual, out listaIdConceptoPosicion))
                {
                    foreach(var idConceptoPosicion in listaIdConceptoPosicion)
                    {
                        var conceptoPosicion = ObtenConceptoReporte(idConceptoPosicion, estructuraReporte);
                        idsConceptosDescartar.Remove(idConceptoPosicion);
                        PresentaConcepto(docBuilder, instancia, rolAExportar, estructuraReporte, conceptoPosicion, idsConceptosDescartar, conceptosHiercubos);
                        idsConceptosDescartar.Add(idConceptoPosicion);
                    }
                }
                PresentaConcepto(docBuilder, instancia, rolAExportar, estructuraReporte, concepto, idsConceptosDescartar, conceptosHiercubos);
                posicionActual++;
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
            if (idsConceptosDescartar.Contains(concepto.IdConcepto))
            {
                return;
            }
            IExportadorSubseccionConcepto constructor;
            if (ConstructoresSubseccionConcepto.TryGetValue(concepto.IdConcepto, out constructor))
            {
                constructor.CreaSeccion(concepto, docBuilder, instancia, rolAExportar, estructuraReporte, this);
            }
            else
            {
                if (!conceptosHiercubos.ContainsKey(concepto.IdConcepto))
                {
                    if (concepto.Abstracto)
                    {
                        if (!PintaElementoBooleanoAgrupado(docBuilder, concepto.IdConcepto, instancia, estructuraReporte))
                        {
                            if (!DescartarAbastractos)
                            {
                                EscribeConceptoAbstracto(concepto, docBuilder);
                            }
                        }   
                    }
                    else
                    {
                        EscribeConcepto(concepto, docBuilder, estructuraReporte);
                    }
                }
            }
            if (ConstructoresPorMarca.TryGetValue(concepto.IdConcepto, out constructor))
            {
                constructor.CreaSeccion(concepto, docBuilder, instancia, rolAExportar, estructuraReporte, this);
            }
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
                    if (ConceptosSinEtiqueta != null && ConceptosSinEtiqueta.Contains(concepto.IdConcepto))
                    {
                        establecerFuenteValorCampo(docBuilder);
                        docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Justify;
                        docBuilder.Font.Size = 10;
                        AplicaEstilosValorConcepto(docBuilder ,concepto.IdConcepto, estructuraReporte);
                        docBuilder.Writeln();
                        escribirValorHecho(docBuilder, estructuraReporte, hechoReporteDTO, concepto);
                        docBuilder.Writeln();
                    }
                    else
                    {
                        if (ForzarDosColumnas)
                        {
                            EscribirADosColumnasConceptoValor(docBuilder, estructuraReporte, concepto, hechoReporteDTO);
                        }
                        else
                        {
                            EscribirTipoNotaTexto(docBuilder, estructuraReporte, hechoReporteDTO, concepto);
                        }
                    }
                }
                else
                {
                    EscribirADosColumnasConceptoValor(docBuilder, estructuraReporte, concepto, hechoReporteDTO);
                }
            }
            
            return hechoReporteDTO;
        }
        /// <summary>
        /// Pinta la etiqueta del concepto indicado como subtitulo.
        /// </summary>
        /// <param name="concepto">Concepto a pintar.</param>
        /// <param name="docBuilder">Constructor del documento.</param>
        private void EscribeConceptoAbstracto(ConceptoReporteDTO concepto, DocumentBuilder docBuilder)
        {

            var paragraph = docBuilder.InsertParagraph();
            docBuilder.Font.Name = TipoLetraTituloRol;
            docBuilder.Font.Bold = TituloRolNegrita;
            docBuilder.Font.Size = 12;
            docBuilder.Font.Color = Color.Black;

            if (DepurarEtiquetasAbstractos)
            {
                var valorAjustado = RegexEtiquetasAbstractos.Replace(concepto.Valor, "");
                docBuilder.Write(valorAjustado);
            }
            else
            {
                docBuilder.Write(concepto.Valor);
            }
            //docBuilder.InsertParagraph();
            //docBuilder.ParagraphFormat.StyleIdentifier = StyleIdentifier.Normal;
            docBuilder.Writeln();
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="concepto"></param>
        /// <param name="instancia"></param>
        /// <param name="contextosDimensionales"></param>
        /// <returns></returns>
        public bool EsHipercubo(
            ConceptoReporteDTO concepto, 
            DocumentoInstanciaXbrlDto instancia, 
            IDictionary<String, Boolean> contextosDimensionales)
        {
            var hecho = concepto.Hechos.Values.First();
            var esDimensional = false;
            if (!String.IsNullOrEmpty(hecho.IdContexto))
            {
                if (!contextosDimensionales.TryGetValue(hecho.IdContexto, out esDimensional))
                {
                    ContextoDto contexto;
                    if (instancia.ContextosPorId.TryGetValue(hecho.IdContexto, out contexto))
                    {
                        esDimensional = contexto.ContieneInformacionDimensional || contexto.Entidad.ContieneInformacionDimensional;
                    }
                    contextosDimensionales.Add(hecho.IdContexto, esDimensional);
                }
            }

            return esDimensional;
        }
        /// <summary>
        /// Retorna un diccionario con todos los conceptos que pertenecen a un hipercubo.
        /// </summary>
        /// <param name="instancia">Instancia que se analizará.</param>
        /// <param name="idRol">URI que identifica el Rol.</param>
        /// <returns>Diccionario de conceptos que pertenecen a un hipercubo.</returns>
        public IDictionary<String, bool> ObtenConceptosHipercubos(DocumentoInstanciaXbrlDto instancia, String idRol)
        {
            var diccionarioConceptos = new Dictionary<String, bool>();
            var listaEstructurasHipercubos = new List<EstructuraFormatoDto>();
            var conceptosTaxonomia = instancia.Taxonomia.ConceptosPorId;
            var rolPresentacion = instancia.Taxonomia.RolesPresentacion.Where(x => x.Uri.Equals(idRol)).FirstOrDefault();
            if (rolPresentacion != null)
            {
                var estructurasAnalizar = new List<EstructuraFormatoDto>(rolPresentacion.Estructuras);
                var indiceEstructrua = 0;
                for (indiceEstructrua = 0; indiceEstructrua < estructurasAnalizar.Count; indiceEstructrua++)
                {
                    var estructura = estructurasAnalizar[indiceEstructrua];
                    if (estructura.SubEstructuras != null && estructura.SubEstructuras.Count > 0)
                    {
                        ConceptoDto concepto;
                        if (estructura.SubEstructuras.Where(x => (conceptosTaxonomia.TryGetValue(x.IdConcepto, out concepto) && concepto.EsHipercubo)).Count() > 0)
                        {
                            listaEstructurasHipercubos.Add(estructura);
                        }
                        else
                        {
                            estructurasAnalizar.AddRange(estructura.SubEstructuras);
                        }
                    }
                }
                for (indiceEstructrua = 0; indiceEstructrua < listaEstructurasHipercubos.Count; indiceEstructrua++)
                {
                    var estructuraHipercubo = listaEstructurasHipercubos[indiceEstructrua];
                    if (estructuraHipercubo.SubEstructuras != null && estructuraHipercubo.SubEstructuras.Count > 0)
                    {
                        listaEstructurasHipercubos.AddRange(estructuraHipercubo.SubEstructuras);
                    }
                    diccionarioConceptos[estructuraHipercubo.IdConcepto] = true;
                }
            }
            return diccionarioConceptos;
        }
        /// <summary>
        /// Obtiene el listado de los conceptos que no deben ser presentados.
        /// </summary>
        /// <param name="instancia">Documento de instancia a evaluar.</param>
        /// <param name="rolAExportar">Rol que se pretende exportar.</param>
        /// <param name="estructuraReporte">Dto con datos generales del reporte</param>
        /// <returns>Lista de conceptos que no sepresentand.</returns>
        public virtual IList<String> ObtenConceptosDescartar(
            DocumentoInstanciaXbrlDto instancia,
            IndiceReporteDTO rolAExportar,
            ReporteXBRLDTO estructuraReporte)
        {
            var listaDescartar = new List<String>();
            if (ConceptosDescartar != null)
            {
                listaDescartar.AddRange(ConceptosDescartar);
            }
            if (RolesIncorporacionPorReferencia != null)
            {
                foreach (var configuracionRol in RolesIncorporacionPorReferencia)
                {
                    if (!String.IsNullOrEmpty(configuracionRol.IdConceptoIncorporacionPorReferencia))
                    {
                        listaDescartar.Add(configuracionRol.IdConceptoIncorporacionPorReferencia);
                    }
                    if (!String.IsNullOrEmpty(configuracionRol.IdConceptoTextoReferencia))
                    {
                        listaDescartar.Add(configuracionRol.IdConceptoTextoReferencia);
                    }
                }
            }
            foreach (var listaConceptosPosicion in ConceptosPorPosicion.Values)
            {
                foreach (var idConcepto in listaConceptosPosicion)
                {
                    listaDescartar.Add(idConcepto);
                }
            }
            foreach (var listaConceptosAgrupar in BooleanosAgrupar.Values)
            {
                foreach (var idConcepto in listaConceptosAgrupar)
                {
                    listaDescartar.Add(idConcepto);
                }
            }
            foreach (var idConceptoSubConstructor in ConstructoresSubseccionConcepto.Keys)
            {
                var subConstructor = ConstructoresSubseccionConcepto[idConceptoSubConstructor];
                IList<ConceptoReporteDTO> listaConceptosReporte;
                ConceptoReporteDTO conceptoSubConstructor = null;
                if (estructuraReporte.Roles.TryGetValue(rolAExportar.Rol, out listaConceptosReporte))
                {
                    conceptoSubConstructor = listaConceptosReporte.Where(x => x.IdConcepto.Equals(idConceptoSubConstructor)).FirstOrDefault();
                }
                var listaDescartarSubConstsructor = subConstructor.ObtenConceptosDescartar(
                        conceptoSubConstructor, instancia, rolAExportar, estructuraReporte, this);
                if (listaDescartarSubConstsructor != null)
                {
                    listaDescartar.AddRange(listaDescartarSubConstsructor);
                }
            }
            foreach (var idConcepto in PresentarCuandoValorIgual.Keys)
            {
                var valorRequerido = PresentarCuandoValorIgual[idConcepto];
                IList<String> idsHechosPorConcepto;
                if (instancia.HechosPorIdConcepto.TryGetValue(idConcepto, out idsHechosPorConcepto))
                {
                    foreach (var idHecho in idsHechosPorConcepto)
                    {
                        HechoDto hechoConcepto;
                        if (instancia.HechosPorId.TryGetValue(idHecho, out hechoConcepto) && 
                            !String.IsNullOrEmpty(hechoConcepto.Valor))
                        {
                            if (!hechoConcepto.Valor.Equals(valorRequerido))
                            {
                                listaDescartar.Add(idConcepto);
                            }
                        }
                    }
                }
            }

            return listaDescartar;
        }
        /// <summary>
        /// Obtiene el listado de los roles que se pretenden descartar.
        /// </summary>
        /// <param name="instancia">Documento de instancia a evaluar</param>
        /// <returns>Lista de roles que se deben descartar.</returns>
        public virtual IList<String> ObtenRolesDescartar(DocumentoInstanciaXbrlDto instancia)
        {
            var listaDescartar = new List<String>();
            if (RolesDescartar != null)
            {
                listaDescartar.AddRange(RolesDescartar);
            }
            var hechoFolleto = ObtenPrimerHechoPorIdConcepto(instancia, "ar_pros_Brochure");
            if (hechoFolleto != null && !String.IsNullOrEmpty(hechoFolleto.Valor))
            {
                listaDescartar.Add("http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/roles/417000-H");
                listaDescartar.Add("http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/roles/424000-H");
                listaDescartar.Add("http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/roles/427000-H");
                listaDescartar.Add("http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/roles/430000-H");
            }
            return listaDescartar;
        }
        /// <summary>
        /// Retorna un diccionario con los valores concatenados para un concepto en particular.
        /// </summary>
        /// <param name="docBuilder">Constructor del documento.</param>
        /// <param name="idConceptoAgrupa">Identificador del concepto bajo el que se agrupan elementos booleanos.</param>
        /// <param name="instancia">Documento de instancia.</param>
        /// <param name="estructuraReporte">Datos generales del reporte.</param>
        /// <returns>Diccionario con los conceptos de los grupos booleanos</returns>
        private bool PintaElementoBooleanoAgrupado(
            DocumentBuilder docBuilder,
            String idConceptoAgrupa,
            DocumentoInstanciaXbrlDto instancia,
            ReporteXBRLDTO estructuraReporte)
        {
            var pintar = false;
            IList<String> listaConceptosAgrupar = null;
            if (BooleanosAgrupar.TryGetValue(idConceptoAgrupa, out listaConceptosAgrupar))
            {
                pintar = true;
                String valorHecho = String.Empty;
                foreach (var idConcepto in listaConceptosAgrupar)
                {
                    var hecho = ObtenPrimerHechoPorIdConcepto(instancia, idConcepto);
                    if (hecho != null && !String.IsNullOrEmpty(hecho.Valor) && !hecho.Valor.Equals("NO"))
                    {
                        if (hecho.Valor.Equals("SI"))
                        {
                            var etiquetaConcepto =
                                DesgloseDeCreditosHelper.obtenerEtiquetaDeConcepto(
                                        instancia.Taxonomia, idConcepto,
                                        estructuraReporte.Lenguaje, ReporteXBRLUtil.ETIQUETA_DEFAULT);
                            if (!String.IsNullOrEmpty(etiquetaConcepto))
                            {
                                valorHecho += ", " + etiquetaConcepto;
                            }
                        }
                        else
                        {
                            valorHecho += ", " + hecho.Valor;
                        }

                    }
                }
                if (!String.IsNullOrEmpty(valorHecho))
                {
                    var titulo = DesgloseDeCreditosHelper.obtenerEtiquetaDeConcepto(
                                        instancia.Taxonomia, idConceptoAgrupa,
                                        estructuraReporte.Lenguaje, ReporteXBRLUtil.ETIQUETA_DEFAULT);
                    if (DepurarEtiquetasAbstractos)
                    {
                        titulo = RegexEtiquetasAbstractos.Replace(titulo, "");
                    }
                    valorHecho = valorHecho.Substring(2);
                    EscribirElementoTipoBloqueTexto(docBuilder, titulo, valorHecho);
                }
            }

            return pintar;
        }
        /// <summary>
        /// Determina si el rol de presentación conctien información que mostrar.
        /// </summary>
        /// <param name="instancia">Documento de instancia.</param>
        /// <param name="rolAExportar">Rol que se pretende evaluar.</param>
        /// <param name="estructuraReporte">Estructura del reporte que se pretende exportar.</param>
        /// <returns>Si existe información que presentar del rol.</returns>
        public bool ContieneInformacion(DocumentoInstanciaXbrlDto instancia, IndiceReporteDTO rolAExportar, ReporteXBRLDTO estructuraReporte)
        {
            var contieneInformacion = true;


                var listaIdsConceptosDescartar = ObtenConceptosDescartar(instancia, rolAExportar, estructuraReporte);

            var rolPresentacion = instancia.Taxonomia.RolesPresentacion.Where(x => x.Uri.Equals(rolAExportar.Uri)).FirstOrDefault();
            if (rolPresentacion != null)
            {
                contieneInformacion = ContieneInformacion(rolPresentacion.Estructuras, instancia, listaIdsConceptosDescartar);
            }
            return contieneInformacion;
        }
        /// <summary>
        /// Determina si la estructura contiene información.
        /// </summary>
        /// <param name="listaEstructuras">Arreglo de estructuras.</param>
        /// <param name="instancia">Docuemnto de instancia.</param>
        /// <param name="idsConceptosDescartar">Lista con los identificadores de los conceptos a descartar.</param>
        /// <returns>Si el listado de estructuras contienen información</returns>
        public bool ContieneInformacion(
            IList<EstructuraFormatoDto> listaEstructuras,
            DocumentoInstanciaXbrlDto instancia,
            IList<String> idsConceptosDescartar = null)
        {
            var contieneInformacion = false;
            var listaIdsConceptosDescartar = idsConceptosDescartar ?? ConceptosDescartar; 
            foreach (var estructura in listaEstructuras)
            {
                if (listaIdsConceptosDescartar != null && listaIdsConceptosDescartar.Contains(estructura.IdConcepto))
                {
                    continue;
                }

                if (ConceptosIgnorarReporte != null && ConceptosIgnorarReporte.Contains(estructura.IdConcepto)) {
                    continue;
                }
                ConceptoDto concepto;
                if (instancia.Taxonomia.ConceptosPorId.TryGetValue(estructura.IdConcepto, out concepto))
                {
                    var esTokenItemTipe = false;
                    foreach (var tipoToken in TIPOS_DATO_TOKEN_ITEM_TYPE)
                    {
                        if (concepto.TipoDato.Contains(tipoToken))
                        {
                            esTokenItemTipe = true;
                            break;
                        }
                    }
                    if (esTokenItemTipe)
                    {
                        continue;
                    }
                }
                IList<string> listaIdsHechos;
                if (instancia.HechosPorIdConcepto.TryGetValue(estructura.IdConcepto, out listaIdsHechos))
                {
                    
                    foreach (var idHecho in listaIdsHechos)
                    {
                        HechoDto hecho;
                        if (instancia.HechosPorId.TryGetValue(idHecho, out hecho) &&
                            !String.IsNullOrEmpty(hecho.Valor))
                        {
                            if (hecho.EsNumerico)
                            {
                                if (hecho.ValorNumerico > 0)
                                {
                                    contieneInformacion = true;
                                    break;
                                }
                            }
                            else
                            {
                                contieneInformacion = true;
                                break;
                            }
                        }
                    }
                }
                if (contieneInformacion)
                {
                    break;
                }
                if (estructura.SubEstructuras != null && estructura.SubEstructuras.Count > 0)
                {
                    if (ContieneInformacion(estructura.SubEstructuras, instancia))
                    {
                        contieneInformacion = true;
                        break;
                    }
                }

            }
            return contieneInformacion;
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
        /// Aplica los estilos personalizados para un concepto.
        /// </summary>
        /// <param name="idConcepto">Identificador del concepto.</param>
        /// <param name="estructuraReporte">DTO con información general del reporte.</param>
        public virtual void AplicaEstilosValorConcepto(DocumentBuilder docBuilder, String idConcepto, ReporteXBRLDTO estructuraReporte)
        {
            EstilosConceptoDTO estiloConcepto = ObtenEstilosConcepto(idConcepto, estructuraReporte);
            if (estiloConcepto != null && estiloConcepto.EstiloValor != null)
            {
                AplicaEstiloReporte(docBuilder, estiloConcepto.EstiloValor);
            }
        }
        /// <summary>
        /// Aplica los estilos personalizados para un concepto.
        /// </summary>
        /// <param name="idConcepto">Identificador del concepto.</param>
        /// <param name="estructuraReporte">DTO con información general del reporte.</param>
        public virtual void AplicaEstilosEtiquetaConcepto(DocumentBuilder docBuilder, String idConcepto, ReporteXBRLDTO estructuraReporte)
        {
            EstilosConceptoDTO estiloConcepto = ObtenEstilosConcepto(idConcepto, estructuraReporte);
            if (estiloConcepto != null && estiloConcepto.EstiloEtiqueta != null)
            {
                AplicaEstiloReporte(docBuilder, estiloConcepto.EstiloEtiqueta);
            }
        }

        /// <summary>
        /// Aplica los estilos de reporte indicados.
        /// </summary>
        /// <param name="docBuilder">Constructor del documento.</param>
        /// <param name="estilo">Estilo que se peretende aplicar.</param>
        public void AplicaEstiloReporte(DocumentBuilder docBuilder, EstilosReporteDTO estilo)
        {
            if (estilo.Tamaniofuente != null)
            {
                docBuilder.Font.Size = estilo.Tamaniofuente ?? 10;
            }
            if (estilo.Negrita != null)
            {
                docBuilder.Bold = estilo.Negrita ?? false;
            }
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
                    AplicaEstilosEtiquetaConcepto(docBuilder, conceptoActual.IdConcepto, estructuraReporte);
                    docBuilder.Write(conceptoActual.Valor);
                }

            }
            else
            {
                AplicaEstilosEtiquetaConcepto(docBuilder, conceptoActual.IdConcepto, estructuraReporte);
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
            AplicaEstilosValorConcepto(docBuilder, conceptoActual.IdConcepto, estructuraReporte);
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
            AplicaEstilosEtiquetaConcepto(docBuilder, concepto.IdConcepto, estructuraReporte);
            docBuilder.Write(concepto.Valor);
            docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Justify;
            docBuilder.Write(": ");

            docBuilder.InsertCell();
            if (AnchoSegundaColumnaCampo != null && AnchoSegundaColumnaCampo > 0)
            {
                docBuilder.CellFormat.PreferredWidth = PreferredWidth.FromPercent(AnchoSegundaColumnaCampo ?? 50);
            }
            establecerFuenteValorCampo(docBuilder);
            if (ForzarDosColumnas && !String.IsNullOrEmpty(hecho.Valor) && hecho.Valor.Length > 40)
            {
                docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Justify;
            }
            else
            {
                docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Right;
            }
            docBuilder.Font.Size = 10;
            AplicaEstilosValorConcepto(docBuilder, concepto.IdConcepto, estructuraReporte);
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
