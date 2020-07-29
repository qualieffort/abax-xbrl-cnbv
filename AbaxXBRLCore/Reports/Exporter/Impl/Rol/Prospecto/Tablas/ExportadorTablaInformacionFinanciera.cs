using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AbaxXBRLCore.Reports.Dto;
using AbaxXBRLCore.Viewer.Application.Dto;
using Aspose.Words;
using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.Reports.Util;
using Aspose.Words.Tables;
using System.Drawing;

namespace AbaxXBRLCore.Reports.Exporter.Impl.Rol.Prospecto.Tablas
{
    /// <summary>
    /// Pinta una tabla de información no dimensiónal en varios periodos.
    /// </summary>
    public class ExportadorTablaInformacionFinanciera : IExportadorSubseccionConcepto
    {
        /// <summary>
        /// Lista con los identificadores de concepto que aplican para la tabla que se presenta.
        /// </summary>
        public IList<String> ConceptosTabla { get; set; }
        /// <summary>
        /// Constructor por defecto de la calse.
        /// </summary>
        public ExportadorTablaInformacionFinanciera()
        {
            ConceptosTabla = new List<String>();
        }
        /// <summary>
        /// Crea la tabla de series.
        /// </summary>
        /// <param name="conceptoOrigen">Concepto que contiene la definición del hipercubo de la tabla de series a evaluar.</param>
        /// <param name="docBuilder">Constructor del documento.</param>
        /// <param name="instancia">Instancia XBRL con la información a presentar.</param>
        /// <param name="rolAExportar">Rol donde esta contenida la tabla.</param>
        /// <param name="estructuraReporte">DTO con información general del reporte.</param>
        /// <param name="exportadorOrigen">Exportador original del rol.</param>
        public void CreaSeccion(
            ConceptoReporteDTO conceptoOrigen, 
            DocumentBuilder docBuilder, 
            DocumentoInstanciaXbrlDto instancia, 
            IndiceReporteDTO rolAExportar, 
            ReporteXBRLDTO estructuraReporte, 
            IExportadorRolDocumentoInstancia exportadorOrigen)
        {

            docBuilder.Writeln();
            var exportadorBase = (ExportadorRolDocumentoBase)exportadorOrigen;
            try
            {   
                if (!ContieneInformacion(instancia))
                {
                    return;
                }
                var diccionarioHechos = ObtenDiccionarioHechos(instancia);
                var listaContextos = ObtenIdentificadoresContexto(diccionarioHechos, instancia);
                if (listaContextos.Count == 0 || diccionarioHechos.Values.First().Values.FirstOrDefault() == null)
                {
                    return;
                }
                UnidadDto unidad = null;
                var hechoNumerico = diccionarioHechos.Values.First().Values.Where(X => X.EsNumerico).FirstOrDefault();
                if (hechoNumerico != null)
                {
                    instancia.UnidadesPorId.TryGetValue(hechoNumerico.IdUnidad, out unidad);
                }
                var numeroColumnas = listaContextos.Count() + 1;
                var tablaActual = docBuilder.StartTable();
                docBuilder.ParagraphFormat.SpaceAfter = 0;
                docBuilder.ParagraphFormat.SpaceBefore = 2;

                var etiquetaTitulo =
                    DesgloseDeCreditosHelper
                        .obtenerEtiquetaDeConcepto(instancia.Taxonomia, conceptoOrigen.IdConcepto, estructuraReporte.Lenguaje, ReporteXBRLUtil.ETIQUETA_DEFAULT);

                PintaFilaSubTitulo(etiquetaTitulo, docBuilder, numeroColumnas, exportadorBase);

                PintaEncabezadoTabla(listaContextos, docBuilder, (ExportadorRolDocumentoBase)exportadorOrigen, unidad);
                PintaFilasHechos(instancia, listaContextos, diccionarioHechos, docBuilder, exportadorBase, estructuraReporte);

                establecerBordesGrisesTabla(tablaActual);
                docBuilder.EndTable();
                docBuilder.Writeln();
                docBuilder.Writeln();
            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
            }
            
        }
        /// <summary>
        /// Escribe el valor de un concepto directamente en la página actual.
        /// </summary>
        /// <param name="concepto">Concepto del reporte que se pretende presentar.</param>
        /// <param name="docBuilder">Constructor del documento.</param>
        /// <param name="estructuraReporte">Datos generales del reporte.</param>
        /// <returns>Hecho presentado</returns>
        private HechoReporteDTO EscribeConcepto(ConceptoDto concepto, HechoDto hecho,  DocumentBuilder docBuilder, ReporteXBRLDTO estructuraReporte, ExportadorRolDocumentoBase exportadorBase)
        {

            HechoReporteDTO hechoReporteDTO = null;
            var esBloqueDeTexto = false;
            var cadenaMuyGrande = false;
            if (hechoReporteDTO != null && !String.IsNullOrEmpty(hechoReporteDTO.Valor))
            {
                // condicion para obtener el formato de los tres primeros conceptos
                esBloqueDeTexto = concepto.TipoDato.Contains(ExportadorRolDocumentoBase.TIPO_DATO_TEXT_BLOCK);
                cadenaMuyGrande = hechoReporteDTO.Valor.Length > 20;
                if (esBloqueDeTexto || cadenaMuyGrande)
                {
                    if (!docBuilder.CurrentParagraph.PreviousSibling.NodeType.Equals(NodeType.Paragraph))
                    {
                        docBuilder.Font.Size = 8;
                        docBuilder.Font.Bold = false;
                        docBuilder.Writeln();
                        docBuilder.Writeln();
                    }
                    exportadorBase.EscribirNotaTextoAtributosAdicionales(docBuilder, estructuraReporte, hecho, concepto);
                }
                else
                {
                    var etiquetaConcepto = exportadorBase.ObtenEtiquetaConcepto(concepto.Id, estructuraReporte.Instancia, estructuraReporte.Lenguaje);

                    exportadorBase.EscribirADosColumnasConceptoValor(etiquetaConcepto, hecho.Valor, docBuilder);
                }
            }

            return hechoReporteDTO;
        }
        /// <summary>
        /// Pinta el encabezado de la tabla.
        /// </summary>
        /// <param name="listacontextos">Lista con los contextoos que se van a pintar.</param>
        /// <param name="docBuilder">Constructor del documento.</param>
        /// <param name="exportadorOrigen">Exportador origen.</param>
        /// <param name="unidad">Unidad en la que se reporta la información.</param>
        public void PintaEncabezadoTabla(IList<ContextoDto> listacontextos, DocumentBuilder docBuilder, ExportadorRolDocumentoBase exportadorOrigen, UnidadDto unidad)
        {
            Color colorTitulo = exportadorOrigen.ObtenColorTitulo();
            String textoUnidad = exportadorOrigen.ObtenTextoUnidad(unidad);
            docBuilder.InsertCell();
            docBuilder.CellFormat.Shading.BackgroundPatternColor = colorTitulo;
            docBuilder.Font.Color = Color.White;
            docBuilder.Font.Size = exportadorOrigen.TamanioLetraContenidoTabla;
            docBuilder.RowFormat.HeadingFormat = true;
            docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Left;

            docBuilder.Write("Concepto");

            foreach (var contexto in listacontextos)
            {
                var fechaPeriodo = contexto.Periodo.Tipo == PeriodoDto.Duracion ? contexto.Periodo.FechaFin : contexto.Periodo.FechaInstante;
                var textoFecha = fechaPeriodo.ToString(DateUtil.DMYDateFormat);
                docBuilder.InsertCell();
                docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Center;
                docBuilder.Writeln(textoFecha);
                docBuilder.Write(textoUnidad);
            }

            docBuilder.EndRow();
            docBuilder.CellFormat.HorizontalMerge = CellMerge.None;

            docBuilder.CellFormat.Shading.BackgroundPatternColor = Color.White;
            docBuilder.Font.Color = Color.Black;
            docBuilder.Bold = false;


            
        }
        /// <summary>
        /// Obtiene el listado de contextos que aplican para el diccionario de hechos dado ordenados por periodo de forma decendente.
        /// </summary>
        /// <param name="diccionarioHechos">Diccionario con los hechos a evaluar ([IdConcepto][IdContexto]).</param>
        /// <param name="instancia">Documento de instancia.</param>
        /// <returns>Listado de contextos ordenados por periodo.</returns>
        public IList<ContextoDto> ObtenIdentificadoresContexto(IDictionary<string, IDictionary<string, HechoDto>> diccionarioHechos, DocumentoInstanciaXbrlDto instancia)
        {
            var listaContextos = new List<ContextoDto>();
            var diccionarioContextos = diccionarioHechos.Values.Where(X => X.Count > 0).FirstOrDefault();
            if (diccionarioContextos != null)
            {
                foreach (var idContexto in diccionarioContextos.Keys)
                {
                    ContextoDto contexto;
                    if (instancia.ContextosPorId.TryGetValue(idContexto, out contexto))
                    {
                        listaContextos.Add(contexto);
                    }
                }
                listaContextos = listaContextos
                    .OrderByDescending(X => ((X.Periodo.Tipo == PeriodoDto.Duracion) ? X.Periodo.FechaFin : X.Periodo.FechaInstante) )
                    .ToList();
            }
            return listaContextos;
        }


        /// Establece los bordes est⯤ar de una tabla
        /// <param name="tablaActual"></param>
        ///
        public void establecerBordesGrisesTabla(Table tablaActual)
        {
            tablaActual.SetBorders(LineStyle.Single, 1, Color.FromArgb(99, 99, 99));

        }
        /// <summary>
        /// Pinta todas las filas de la tabla de hechos.
        /// </summary>
        /// <param name="instancia">Documento de instancia donde se obtiene la información.</param>
        /// <param name="listacontextos">Lista con los contextos a presentar.</param>
        /// <param name="diccionarioHechos">Diccionario con los hechos a presentar.</param>
        /// <param name="docBuilder">Constructor del documento.</param>
        /// <param name="exportadorBase">Exportador original del reporte.</param>
        /// <param name="estructuraReporte">Dto con datos auxiliares para la presentación del documento.</param>
        public void PintaFilasHechos(
            DocumentoInstanciaXbrlDto instancia, 
            IList<ContextoDto> listacontextos, 
            IDictionary<string, IDictionary<string, HechoDto>> diccionarioHechos,
            DocumentBuilder docBuilder,
            ExportadorRolDocumentoBase exportadorBase,
            ReporteXBRLDTO estructuraReporte)
        {
            var numeroColumnas = listacontextos.Count + 1;
            foreach (var idConcepto in ConceptosTabla)
            {
                ConceptoDto concepto;
                if (instancia.Taxonomia.ConceptosPorId.TryGetValue(idConcepto, out concepto))
                {
                    var etiquetaConcepto =
                        DesgloseDeCreditosHelper
                           .obtenerEtiquetaDeConcepto(instancia.Taxonomia, concepto.Id, estructuraReporte.Lenguaje, ReporteXBRLUtil.ETIQUETA_DEFAULT);
                    if (concepto.EsAbstracto ?? false)
                    {
                        PintaFilaSubTitulo(etiquetaConcepto, docBuilder, numeroColumnas, exportadorBase);
                    }
                    else
                    {
                        if (!concepto.EsTipoDatoNumerico)
                        {
                            continue;
                        }
                        docBuilder.InsertCell();
                        docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Left;
                        docBuilder.Bold = true;
                        docBuilder.Write(etiquetaConcepto);
                        IDictionary<string, HechoDto> diccionarioHechosPorContexto = null;
                        diccionarioHechos.TryGetValue(concepto.Id, out diccionarioHechosPorContexto);
                        foreach(var contexto in listacontextos)
                        {
                            docBuilder.InsertCell();
                            docBuilder.Bold = false;
                            HechoDto hecho;
                            if (diccionarioHechosPorContexto != null && diccionarioHechosPorContexto.TryGetValue(contexto.Id, out hecho))
                            {
                                docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Right;
                                exportadorBase.EscribirValorHecho(docBuilder, estructuraReporte, hecho, concepto);
                            }
                        }
                        docBuilder.EndRow();
                    }
                }
            }
            docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Left;
        }

        /// <summary>
        /// Obtiene un diccionario con los hechos existentes para la lista de estructuras dada.
        /// </summary>
        /// <param name="instancia">Documento de instancia donde se extreran los hechos.</param>
        /// <param name="diccionarioHechos">Diccionario de hechos a completar.</param>
        /// <returns>Diccionario de  hechos populado con la información obteneida. [idConcepto][idContexto]=hecho</returns>
        public IDictionary<string, IDictionary<string, HechoDto>> ObtenDiccionarioHechos(
            DocumentoInstanciaXbrlDto instancia,
            IDictionary<string, IDictionary<string, HechoDto>> diccionarioHechos = null)
        {
            if (diccionarioHechos == null)
            {
                diccionarioHechos = new Dictionary<string, IDictionary<string, HechoDto>>();
            }
            foreach (var idConcepto in ConceptosTabla)
            {
                IList<string> listaIdsHechos;
                if (instancia.HechosPorIdConcepto.TryGetValue(idConcepto, out listaIdsHechos))
                {
                    IDictionary<string, HechoDto> diccionarioHechosPorContexto;
                    if (!diccionarioHechos.TryGetValue(idConcepto, out diccionarioHechosPorContexto))
                    {
                        diccionarioHechosPorContexto = new Dictionary<string, HechoDto>();
                        diccionarioHechos.Add(idConcepto, diccionarioHechosPorContexto);
                    }
                    foreach (var idHecho in listaIdsHechos)
                    {
                        HechoDto hecho;
                        if (instancia.HechosPorId.TryGetValue(idHecho, out hecho))
                        {
                            diccionarioHechosPorContexto[hecho.IdContexto] = hecho;
                        }
                    }
                }
            }
            return diccionarioHechos;
        }
        /// <summary>
        /// Determina si la estructura contiene información.
        /// </summary>
        /// <param name="instancia">Docuemnto de instancia.</param>
        /// <returns>Si el listado de estructuras contienen información</returns>
        public bool ContieneInformacion(DocumentoInstanciaXbrlDto instancia)
        {
            var contieneInformacion = false;
            foreach (var idConcepto in ConceptosTabla)
            {
                IList<string> listaIdsHechos;
                if (instancia.HechosPorIdConcepto.TryGetValue(idConcepto, out listaIdsHechos))
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
            }
            return contieneInformacion;
        }

        public EstructuraFormatoDto ObtenEstructura(ConceptoReporteDTO conceptoOrigen, DocumentoInstanciaXbrlDto instancia, IndiceReporteDTO rolAExportar)
        {
            EstructuraFormatoDto estructuraRequerida = null;
            var listaEstructurasHipercubos = new List<EstructuraFormatoDto>();
            var rolPresentacion = instancia.Taxonomia.RolesPresentacion.Where(x => x.Uri.Equals(rolAExportar.Uri)).FirstOrDefault();
            var conceptosTaxonomia = instancia.Taxonomia.ConceptosPorId;
            if (rolPresentacion != null)
            {
                var estructurasAnalizar = new List<EstructuraFormatoDto>(rolPresentacion.Estructuras);
                for (var indiceEstructrua = 0; indiceEstructrua < estructurasAnalizar.Count; indiceEstructrua++)
                {
                    var estructura = estructurasAnalizar[indiceEstructrua];
                    if (estructura.SubEstructuras != null && estructura.SubEstructuras.Count > 0)
                    {
                        if (estructura.IdConcepto.Equals(conceptoOrigen.IdConcepto))
                        {
                            estructuraRequerida = estructura;
                            break;
                        }
                        estructurasAnalizar.AddRange(estructura.SubEstructuras);
                    }
                }
            }
            return estructuraRequerida;
        }

        /// <summary>
        /// Pinta una fila con el titulo indicado.
        /// </summary>
        /// <param name="textoTitulo">Texto del título.</param>
        /// <param name="docBuilder">Puntero del documento.</param>
        /// <param name="numeroSeries">Cantidad de series existentes.</param>
        /// <param name="exportadorOrigen">Exportador original</param>
        private void PintaFilaSubTitulo(String textoTitulo, DocumentBuilder docBuilder, int numeroSeries, ExportadorRolDocumentoBase exportadorOrigen)
        {
            Color colorTitulo = exportadorOrigen.ObtenColorTitulo();
            docBuilder.InsertCell();
            docBuilder.CellFormat.Shading.BackgroundPatternColor = colorTitulo;
            docBuilder.Font.Color = Color.White;
            docBuilder.Font.Size = exportadorOrigen.TamanioLetraContenidoTabla;
            docBuilder.RowFormat.HeadingFormat = true;
            docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Left;

            docBuilder.Write(textoTitulo);
            docBuilder.CellFormat.HorizontalMerge = CellMerge.First;
            if (numeroSeries > 0)
            {
                for (var indexTitulo = 0; indexTitulo < numeroSeries; indexTitulo++)
                {
                    docBuilder.InsertCell();
                    docBuilder.CellFormat.HorizontalMerge = CellMerge.Previous;
                }
            }
            docBuilder.EndRow();
            docBuilder.CellFormat.HorizontalMerge = CellMerge.None;

            docBuilder.CellFormat.Shading.BackgroundPatternColor = Color.White;
            docBuilder.Font.Color = Color.Black;
            docBuilder.Bold = false;
        }
        /// <summary>
        /// Retorna un listado con los conceptos que deben ser considerados para no ser evaluados por el exportador origen.
        /// </summary>
        /// <param name="conceptoOrigen">Concepto origen que sirve como marca para iniciar la generación de la sección.</param>
        /// <param name="instancia">Documento de instancia evaluado.</param>
        /// <param name="rolAExportar">Rol que se está exportando.</param>
        /// <param name="estructuraReporte">DTO con información general del reporte.</param>
        /// <param name="exportadorOrigen">Exportador del rol.</param>
        /// <returns>Retorna un listado con los conceptos que deben ser descartados en la presentación del exportador original.</returns>
        public IList<string> ObtenConceptosDescartar(ConceptoReporteDTO conceptoOrigen, DocumentoInstanciaXbrlDto instancia, IndiceReporteDTO rolAExportar, ReporteXBRLDTO estructuraReporte, IExportadorRolDocumentoInstancia exportadorOrigen)
        {
            return ConceptosTabla;
        }
    }
}
