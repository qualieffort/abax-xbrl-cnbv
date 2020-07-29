using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AbaxXBRLCore.Reports.Dto;
using AbaxXBRLCore.Viewer.Application.Dto;
using Aspose.Words;
using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.Viewer.Application.Dto.Hipercubos;
using System.Drawing;
using Aspose.Words.Tables;

namespace AbaxXBRLCore.Reports.Exporter.Impl.Rol.Prospecto.Tablas
{
    /// <summary>
    /// Exporta la información de un hipercubo en base a la configuración de peresentación ("ConfiguracionPresentacion") 
    /// existente en el archivo JSON (AbaxXBRLCore.Config.Reports.xx.xx.xx.json) de la definición del hipercubo.
    /// </summary>
    public class ExportadorTablaPorConfiguracion : IExportadorSubseccionConcepto
    {
        /// <summary>
        /// Identificador de la configuración que se debe utilizar.
        /// </summary>
        public String IdConfiguracion { get; set; }
        /// <summary>
        /// Identificador del concepto que contiene el hipercubo a evaluar.
        /// </summary>
        public String IdConceptoReferencia { get; set; }
        /// <summary>
        /// Constructor de la sección.
        /// </summary>
        /// <param name="conceptoOrigen">Concepto que encapsula el hipercubo.</param>
        /// <param name="docBuilder">Constructor del reporte.</param>
        /// <param name="instancia">Documento de instancia con la información.</param>
        /// <param name="rolAExportar">Rol que se pretende exprotar.</param>
        /// <param name="estructuraReporte">DTO con información general del reporte.</param>
        /// <param name="exportadorOrigen">Exportador actual que maneja la exportación del rol.</param>
        public void CreaSeccion(
                    ConceptoReporteDTO conceptoOrigen, 
                    DocumentBuilder docBuilder, 
                    DocumentoInstanciaXbrlDto instancia, 
                    IndiceReporteDTO rolAExportar, 
                    ReporteXBRLDTO estructuraReporte, 
                    IExportadorRolDocumentoInstancia exportadorOrigen)
        {
            try
            {
                docBuilder.Writeln();
                var exportadorBase = (ExportadorRolDocumentoBase)exportadorOrigen;
                var idConceptoHipercubo = ObtenIdConceptoHipercubo(conceptoOrigen, instancia, rolAExportar.Uri);
                HipercuboReporteDTO hipercuboReporteDto;
                if (estructuraReporte.Hipercubos.TryGetValue(idConceptoHipercubo, out hipercuboReporteDto) &&
                    hipercuboReporteDto.Titulos.Count > 0)
                {
                    var configuracionGeneral = hipercuboReporteDto.Utileria.configuracion;
                    if (configuracionGeneral.ConfiguracionPresentacion != null &&
                        configuracionGeneral.ConfiguracionPresentacion.Count > 0)
                    {
                        ConfiguracionPresentacionRegistroHipercuboDto configuracionPresentacion = null;
                        if (String.IsNullOrEmpty(IdConfiguracion) ||
                            !configuracionGeneral.ConfiguracionPresentacion.TryGetValue(IdConfiguracion, out configuracionPresentacion))
                        {
                            configuracionPresentacion = configuracionGeneral.ConfiguracionPresentacion.Values.FirstOrDefault();
                        }
                        if (configuracionPresentacion.Tipo.Equals("Tarjeta"))
                        {
                            PintaTarjetasHipercubo(
                                conceptoOrigen, docBuilder, instancia, 
                                rolAExportar, estructuraReporte, exportadorBase, 
                                hipercuboReporteDto, configuracionPresentacion);
                        }
                    }
                }

            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
            }
        }

        /// <summary>
        /// Constructor de la sección.
        /// </summary>
        /// <param name="conceptoOrigen">Concepto que encapsula el hipercubo.</param>
        /// <param name="docBuilder">Constructor del reporte.</param>
        /// <param name="instancia">Documento de instancia con la información.</param>
        /// <param name="rolAExportar">Rol que se pretende exprotar.</param>
        /// <param name="estructuraReporte">DTO con información general del reporte.</param>
        /// <param name="exportadorOrigen">Exportador actual que maneja la exportación del rol.</param>
        /// <param name="hipercuboReporteDto">Definición del hipercubo con la información a presentar.</param>
        /// <param name="configuracionPresentacion">Definición de la configuración que se pretende presentar.</param>
        public void PintaTarjetasHipercubo(
                    ConceptoReporteDTO conceptoOrigen,
                    DocumentBuilder docBuilder,
                    DocumentoInstanciaXbrlDto instancia,
                    IndiceReporteDTO rolAExportar,
                    ReporteXBRLDTO estructuraReporte,
                    ExportadorRolDocumentoBase exportadorOrigen,
                    HipercuboReporteDTO hipercuboReporteDto,
                    ConfiguracionPresentacionRegistroHipercuboDto configuracionPresentacion)
        {
            var diccionarioTarjetas = hipercuboReporteDto.Utileria.ReordenaConjutosPorExplicitaImplicitaConcepto(hipercuboReporteDto.Hechos);
            String idDimensionExplicita = null;
            foreach (var idPlantillaDimension in hipercuboReporteDto.Utileria.configuracion.PlantillaDimensiones.Keys)
            {
                var plantillaDimension = hipercuboReporteDto.Utileria.configuracion.PlantillaDimensiones[idPlantillaDimension];
                if (plantillaDimension.Explicita)
                {
                    idDimensionExplicita = plantillaDimension.IdDimension;
                    break;
                }
            }

            var idsPlantillasContextos = configuracionPresentacion.IdsPlantillasContextos;
            foreach (var clavePlantilla in diccionarioTarjetas.Keys)
            {
                if (idsPlantillasContextos != null && !idsPlantillasContextos.Contains(clavePlantilla))
                {
                    continue;
                }
                var listaTajetas = diccionarioTarjetas[clavePlantilla];
                var primerHecho = listaTajetas.First().First().Value;
                var miembroExplicita = hipercuboReporteDto.Utileria.ObtenMiembroDimension(primerHecho, idDimensionExplicita, instancia);
                var textoTituloMiembro = exportadorOrigen.
                    ObtenEtiquetaConcepto(miembroExplicita.IdItemMiembro, instancia, estructuraReporte.Lenguaje);
                exportadorOrigen.ImprimeSubTitulo(docBuilder, textoTituloMiembro);
                foreach (var tarjeta in listaTajetas)
                {
                    PintaTarjeta(
                        docBuilder,estructuraReporte,exportadorOrigen,
                        instancia,tarjeta,configuracionPresentacion);
                }
            }
        }

        /// <summary>
        /// Pinta el contenido de una tarjeta.
        /// </summary>
        /// <param name="docBuilder">Constructor del documento.</param>
        /// <param name="estructuraReporte">Datos generales del reporte.</param>
        /// <param name="exportadorOrigen">Exportador original.</param>
        /// <param name="instancia">Documento de instnacia.</param>
        /// <param name="tarjeta">Diccionario de hechos a presentar.</param>
        /// <param name="configuracionPresentacion">Configuración de la tarjeta a presentar.</param>
        private void PintaTarjeta(
            DocumentBuilder docBuilder,
            ReporteXBRLDTO estructuraReporte,
            ExportadorRolDocumentoBase exportadorOrigen,
            DocumentoInstanciaXbrlDto instancia,
            IDictionary<String, HechoDto> tarjeta, 
            ConfiguracionPresentacionRegistroHipercuboDto configuracionPresentacion)
        {
            var tabla = docBuilder.StartTable();
            docBuilder.ParagraphFormat.SpaceAfter = 0;
            docBuilder.ParagraphFormat.SpaceBefore = 2;

            foreach (var fila in configuracionPresentacion.Filas)
            {
                if (TarjetaContieneConceptosFila(fila, tarjeta))
                {
                    if (fila.Tipo.Equals("DosFilas"))
                    {
                        PintaDosFilas(docBuilder, tarjeta, fila, instancia, exportadorOrigen, estructuraReporte);
                    }
                    if (fila.Tipo.Equals("UnaFila"))
                    {
                        PintaUnaFila(docBuilder, tarjeta, fila, instancia, exportadorOrigen, estructuraReporte);
                    }
                }
            }

            exportadorOrigen.establecerBordesGrisesTabla(tabla);
            docBuilder.EndTable();
            EstablecerFuenteCeldaValor(docBuilder, exportadorOrigen);
            docBuilder.Writeln();
            docBuilder.Writeln();
        }
        /// <summary>
        /// Pinta un conjunto de elementos a dos filas.
        /// </summary>
        /// <param name="docBuilder">Constructor del documento.</param>
        /// <param name="tarjeta">Diccionario con los conceptos y hechos.</param>
        /// <param name="fila">Definición de la fila.</param>
        /// <param name="instancia">Documento de instancia.</param>
        /// <param name="exportadorOrigen">Esportador original del documento</param>
        /// <param name="estructuraReporte">Datos generales del reporte.</param>
        private void PintaDosFilas(
            DocumentBuilder docBuilder,
            IDictionary<string, HechoDto> tarjeta,
            FilaPresentacionHipercuboDto fila,
            DocumentoInstanciaXbrlDto instancia,
            ExportadorRolDocumentoBase exportadorOrigen,
            ReporteXBRLDTO estructuraReporte)
        {
            EstablecerFuenteCeldaTitulo(docBuilder, exportadorOrigen);
            foreach (var celda in fila.Celdas)
            {
                var tituloConcepto = ObtenTextoTituloConcepto(celda, instancia, exportadorOrigen, estructuraReporte);
                exportadorOrigen.SetCellColspan(docBuilder, tituloConcepto, celda.Colspan);
            }
            docBuilder.EndRow();
            EstablecerFuenteCeldaValor(docBuilder,exportadorOrigen);
            foreach (var celda in fila.Celdas)
            {
                if (!String.IsNullOrEmpty(celda.IdConcepto))
                {
                    PintaCeldaConceptoSimple(docBuilder, celda, tarjeta, exportadorOrigen,estructuraReporte);
                }
                else
                {
                    PintaCeldaCompuesta(docBuilder, celda, tarjeta, exportadorOrigen);
                }
            }
            docBuilder.EndRow();
        }
        /// <summary>
        /// Pinta un conjunto de elementos a dos filas.
        /// </summary>
        /// <param name="docBuilder">Constructor del documento.</param>
        /// <param name="tarjeta">Diccionario con los conceptos y hechos.</param>
        /// <param name="fila">Definición de la fila.</param>
        /// <param name="instancia">Documento de instancia.</param>
        /// <param name="exportadorOrigen">Esportador original del documento</param>
        /// <param name="estructuraReporte">Datos generales del reporte.</param>
        private void PintaUnaFila(
            DocumentBuilder docBuilder,
            IDictionary<string, HechoDto> tarjeta,
            FilaPresentacionHipercuboDto fila,
            DocumentoInstanciaXbrlDto instancia,
            ExportadorRolDocumentoBase exportadorOrigen,
            ReporteXBRLDTO estructuraReporte)
        {   
            foreach (var celda in fila.Celdas)
            {
                if (!celda.SoloValor)
                {
                    EstablecerFuenteCeldaTitulo(docBuilder, exportadorOrigen);
                    var tituloConcepto = ObtenTextoTituloConcepto(celda, instancia, exportadorOrigen, estructuraReporte);
                    exportadorOrigen.SetCellColspan(docBuilder, tituloConcepto, celda.ColspanTitulo);
                }
                if (celda.EsTitulo)
                {
                    EstablecerFuenteCeldaTitulo(docBuilder, exportadorOrigen);
                }
                else
                {
                    EstablecerFuenteCeldaValor(docBuilder, exportadorOrigen);
                }
                if (!String.IsNullOrEmpty(celda.IdConcepto))
                {
                    PintaCeldaConceptoSimple(docBuilder, celda, tarjeta, exportadorOrigen, estructuraReporte);
                }
                else
                {
                    PintaCeldaCompuesta(docBuilder, celda, tarjeta, exportadorOrigen);
                }
            }
            docBuilder.EndRow();
        }
        /// <summary>
        /// Pinta el contenido de una celda para un concepto simple.
        /// </summary>
        /// <param name="docBuilder">Constructor del documenot.</param>
        /// <param name="celda">Celda que se pretende presentar.</param>
        /// <param name="tarjeta">Tarjeta con el valor de la celda.</param>
        /// <param name="exportadorOrigen">Exportador original.</param>
        /// <param name="estructuraReporte">Dto con información general del reporte.</param>
        private void PintaCeldaConceptoSimple(
            DocumentBuilder docBuilder,
            CeldasPresentacionHipercuboDto celda,
            IDictionary<string, HechoDto> tarjeta,
            ExportadorRolDocumentoBase exportadorOrigen,
            ReporteXBRLDTO estructuraReporte)
        {
            HechoDto hecho;
            var texto = String.Empty;
            var esHtml = false;
            if (tarjeta.TryGetValue(celda.IdConcepto, out hecho))
            {
                esHtml = hecho.TipoDato.Contains(ExportadorRolDocumentoBase.TIPO_DATO_TEXT_BLOCK);
                texto = hecho.Valor ?? String.Empty;
            }
            if (celda.AgregarEnIndice)
            {
                AsignaEstilosParaIndice(docBuilder, exportadorOrigen);
            }
            if (celda.Colspan > 1)
            {
                var newCells = celda.Colspan - 1;
                docBuilder.InsertCell();
                docBuilder.CellFormat.HorizontalMerge = CellMerge.First;
                if (!esHtml)
                {
                    if (!WordUtil.EsRTF(texto))
                    {
                        docBuilder.Write(texto);
                    }
                    else
                    {
                        var lastIndex = texto.Length < 1000 ? texto.Length - 1 : 1000;
                        docBuilder.Write(texto.Substring(0, lastIndex));
                    }
                    EvaluaPresentarEnlaceArchivo(texto, docBuilder, celda, tarjeta, estructuraReporte);
                }
                else
                {
                    WordUtil.InsertHtml(docBuilder, ":celda", "<div style=\"font-family:Arial;font-size: 6pt;\">" + texto + "</div>", false);
                }
                for (var index = 0; index < newCells; index++)
                {
                    docBuilder.InsertCell();
                    docBuilder.CellFormat.HorizontalMerge = CellMerge.Previous;
                }
            }
            else
            {
                docBuilder.InsertCell();
                docBuilder.CellFormat.HorizontalMerge = CellMerge.None;
                if (!esHtml)
                {
                    docBuilder.Write(texto);
                    EvaluaPresentarEnlaceArchivo(texto, docBuilder, celda, tarjeta, estructuraReporte);
                }
                else
                {
                    WordUtil.InsertHtml(docBuilder, ":celda", "<div style=\"font-family:Arial;font-size: 6pt;\">" + texto + "</div>", false);
                }
            }
            if (celda.AgregarEnIndice)
            {
                EliminaEstilosParaIndice(docBuilder, exportadorOrigen);
            }
        }
        /// <summary>
        /// Determina si debe agregar un enalce a un documento adjunto.
        /// </summary>
        /// <param name="tituloReporte">Título con el que se presenta el reporte.</param>
        /// <param name="docBuilder">Constructor del documento.</param>
        /// <param name="celda">Celda que se presenta.</param>
        /// <param name="tarjeta">Diccionario con la información a presentar.</param>
        /// <param name="estructuraReporte">DTO con la estructura del reporte.</param>
        private void EvaluaPresentarEnlaceArchivo(
            String tituloReporte,
            DocumentBuilder docBuilder, 
            CeldasPresentacionHipercuboDto celda, 
            IDictionary<string, HechoDto> tarjeta,
            ReporteXBRLDTO estructuraReporte)
        {
            HechoDto hechoReporte;
            if (!String.IsNullOrEmpty(celda.ArchivoAdjunto) && tarjeta.TryGetValue(celda.ArchivoAdjunto, out hechoReporte) && !String.IsNullOrEmpty(hechoReporte.Valor))
            {
                if (estructuraReporte.ArchivosAdjuntos == null)
                {
                    estructuraReporte.ArchivosAdjuntos = new Dictionary<String, ArchivoReporteDTO>();
                }
                var archivoReporte = new ArchivoReporteDTO() { TituloArchivo = tituloReporte, HechoArchivo = hechoReporte };
                estructuraReporte.ArchivosAdjuntos[hechoReporte.Id] = archivoReporte;
                EscribeVinculoArchivo(docBuilder, archivoReporte);
            }
        }

        /// <summary>
        /// Escribe un enlace al hecho indicado.
        /// </summary>
        /// <param name="docBuilder">Constructor del documento.</param>
        /// <param name="archivo">Hecho que se quiere referenciar.</param>
        private void EscribeVinculoArchivo(DocumentBuilder docBuilder, ArchivoReporteDTO archivo)
        {
            var tokenLink = "link_hecho[" + archivo.HechoArchivo.Id + "]";
            docBuilder.Write(" ");
            docBuilder.Font.Superscript = true;
            docBuilder.Font.Color = Color.Blue;
            //docBuilder.StartBookmark(tokenLink);
            var token = archivo.TokenArchivo;
            docBuilder.InsertHyperlink("[Ir]", token, true);
            //docBuilder.EndBookmark(tokenLink);
            docBuilder.Font.Color = Color.Black;
            docBuilder.Font.Superscript = false;
        }

        /// <summary>
        /// Agrega estilos para ser incluido en el indice.
        /// </summary>
        /// <param name="docBuilder">Constructor del documento.</param>
        /// <param name="exportadorOrigen">Exportador origen.</param>
        private void AsignaEstilosParaIndice(DocumentBuilder docBuilder, ExportadorRolDocumentoBase exportadorOrigen)
        {
            docBuilder.ParagraphFormat.StyleIdentifier = StyleIdentifier.Heading3;
            docBuilder.Font.Size = exportadorOrigen.TamanioLetraContenidoTabla;
            docBuilder.Font.Name = exportadorOrigen.TipoLetraTextos;
        }
        /// <summary>
        /// Remueve el tipo de letra para el indice.
        /// </summary>
        /// <param name="docBuilder">Constructor del documento.</param>
        /// <param name="exportadorOrigen">Exportador origen.</param>
        private void EliminaEstilosParaIndice(DocumentBuilder docBuilder, ExportadorRolDocumentoBase exportadorOrigen)
        {
            docBuilder.ParagraphFormat.StyleIdentifier = StyleIdentifier.Normal;
            docBuilder.Font.Size = exportadorOrigen.TamanioLetraContenidoTabla;
            docBuilder.Font.Name = exportadorOrigen.TipoLetraTextos;
        }

        /// <summary>
        /// Pinta el contenido de una celda compuesta por varios conceptos.
        /// </summary>
        /// <param name="docBuilder">Constructor del documenot.</param>
        /// <param name="celda">Celda que se pretende presentar.</param>
        /// <param name="tarjeta">Tarjeta con el valor de la celda.</param>
        /// <param name="exportadorOrigen">Exportador original.</param>
        private void PintaCeldaCompuesta(
            DocumentBuilder docBuilder,
            CeldasPresentacionHipercuboDto celda,
            IDictionary<string, HechoDto> tarjeta,
            ExportadorRolDocumentoBase exportadorOrigen)
        {
            HechoDto hecho;
            var valor = new StringBuilder();
            var esHtml = false;
            var colspan = 1;
            foreach (var idConcepto in celda.IdsConceptos)
            {
                if (tarjeta.TryGetValue(idConcepto, out hecho))
                {
                    if (!esHtml)
                    {
                        esHtml = hecho.TipoDato.Contains(ExportadorRolDocumentoBase.TIPO_DATO_TEXT_BLOCK);
                    }
                    if (colspan < celda.Colspan)
                    {
                        colspan = celda.Colspan;
                    }

                    valor.Append(" ");
                    valor.Append(hecho.Valor ?? String.Empty);
                    if (!celda.ConcatenarValores)
                    {
                        break;
                    }
                }
            }
            var texto = valor.ToString().Substring(1);
            exportadorOrigen.SetCellColspan(docBuilder, texto, colspan, esHtml);
        }
        /// <summary>
        /// Obtiene el valor a presentar como título del concepto.
        /// </summary>
        /// <param name="celda">Celda que se pretende presentar.</param>
        /// <param name="instancia">Documento de instancia.</param>
        /// <param name="exportadorOrigen">Exportador original.</param>
        /// <param name="estructuraReporte">Datos generales del reporte.</param>
        /// <returns>Texto a presentar como título.</returns>
        private String ObtenTextoTituloConcepto(
            CeldasPresentacionHipercuboDto celda, 
            DocumentoInstanciaXbrlDto instancia,
            ExportadorRolDocumentoBase exportadorOrigen,
            ReporteXBRLDTO estructuraReporte)
        {
            var idConceptoTitulo = !String.IsNullOrEmpty(celda.IdConceptoTitulo) ? celda.IdConceptoTitulo : celda.IdConcepto;
            var tituloConcepto = exportadorOrigen.ObtenEtiquetaConcepto(idConceptoTitulo, instancia, estructuraReporte.Lenguaje);
            if (String.IsNullOrEmpty(tituloConcepto))
            {
                tituloConcepto = idConceptoTitulo;
            }
            return tituloConcepto;
        }

        /// <summary>
        /// Establece el estilo de la celdas para las celdas titulo.
        /// </summary>
        /// <param name="docBuilder">Constructor del documento.</param>
        /// <param name="exportadorOrigen">Exportador original del documento</param>
        private void EstablecerFuenteCeldaValor(DocumentBuilder docBuilder, ExportadorRolDocumentoBase exportadorOrigen)
        {
            docBuilder.CellFormat.Shading.BackgroundPatternColor = Color.White;
            docBuilder.Font.Color = Color.Black;
            docBuilder.Bold = false;
            docBuilder.Font.Size = exportadorOrigen.TamanioLetraContenidoTabla;
        }
        /// <summary>
        /// Establece el estilo de la celdas para las celdas titulo.
        /// </summary>
        /// <param name="docBuilder">Constructor del documento.</param>
        /// <param name="exportadorOrigen">Exportador original del documento</param>
        private void EstablecerFuenteCeldaTitulo(DocumentBuilder docBuilder, ExportadorRolDocumentoBase exportadorOrigen)
        {
            var colorTitulo = exportadorOrigen.ObtenColorTitulo();
            docBuilder.CellFormat.Shading.BackgroundPatternColor = colorTitulo;
            docBuilder.Font.Color = Color.White;
            docBuilder.Bold = true;
            docBuilder.Font.Size = exportadorOrigen.TamanioLetraContenidoTabla;
        }
        /// <summary>
        /// Determina si la tarjeta contiene todos los elementos necesarios para su presentación.
        /// </summary>
        /// <param name="fila">Fila a evaluar.</param>
        /// <param name="tarjeta">Diccionario a evaluar.</param>
        /// <returns>Si el diccionario contiene todos los conceptos indicados por la fila.</returns>
        private bool TarjetaContieneConceptosFila(FilaPresentacionHipercuboDto fila, IDictionary<String, HechoDto> tarjeta)
        {
            var contieneConceptos = true;
            HechoDto hecho = null;
            foreach (var celda in fila.Celdas)
            {
                if (celda.MostrarVacio)
                {
                    continue;
                }
                if (!String.IsNullOrEmpty(celda.IdConcepto) && 
                   (!tarjeta.TryGetValue(celda.IdConcepto, out hecho) || (String.IsNullOrWhiteSpace(hecho.Valor)) ))
                {
                    contieneConceptos = false;
                }
                else if (celda.IdsConceptos != null && celda.IdsConceptos.Count > 0)
                {
                    var contienAlmenosUnConcepto = false;
                    foreach (var idConcepto in celda.IdsConceptos)
                    {
                        if (tarjeta.TryGetValue(idConcepto, out hecho) && !String.IsNullOrEmpty(hecho.Valor))
                        {
                            contienAlmenosUnConcepto = true;
                            break;
                        }
                    }
                    if (!contienAlmenosUnConcepto)
                    {
                        contieneConceptos = false;
                    }
                }
                if (!contieneConceptos)
                {
                    break;
                }

            }
            return contieneConceptos;
        }

        /// <summary>
        /// Obtiene el identificador del concepto hipercubo.
        /// </summary>
        /// <param name="conceptoContenedorHipercubo">Concepto que contiene el hipercubo.</param>
        /// <param name="instancia">Instanica XBRL que se anliza.</param>
        /// <param name="idRol">Identificador del rol actual.</param>
        /// <returns>Identificador del hipercubo.</returns>
        private String ObtenIdConceptoHipercubo(ConceptoReporteDTO conceptoContenedorHipercubo, DocumentoInstanciaXbrlDto instancia, String idRol)
        {
            String idConceptoHipercubo = null;
            var listaEstructurasHipercubos = new List<EstructuraFormatoDto>();
            var rolPresentacion = instancia.Taxonomia.RolesPresentacion.Where(x => x.Uri.Equals(idRol)).FirstOrDefault();
            var conceptosTaxonomia = instancia.Taxonomia.ConceptosPorId;
            if (rolPresentacion != null)
            {
                var estructurasAnalizar = new List<EstructuraFormatoDto>(rolPresentacion.Estructuras);
                for (var indiceEstructrua = 0; indiceEstructrua < estructurasAnalizar.Count; indiceEstructrua++)
                {
                    var estructura = estructurasAnalizar[indiceEstructrua];
                    if (estructura.SubEstructuras != null && estructura.SubEstructuras.Count > 0)
                    {
                        var idConceptoContenedor = String.IsNullOrEmpty(IdConceptoReferencia) ?
                            conceptoContenedorHipercubo.IdConcepto : IdConceptoReferencia;
                        if (estructura.IdConcepto.Equals(idConceptoContenedor))
                        {
                            ConceptoDto concepto;
                            var conceptoHipercubo = estructura.SubEstructuras.
                                Where(x => (conceptosTaxonomia.TryGetValue(x.IdConcepto, out concepto) && concepto.EsHipercubo)).FirstOrDefault();
                            if (conceptoHipercubo != null)
                            {
                                idConceptoHipercubo = conceptoHipercubo.IdConcepto;
                            }
                            break;
                        }
                        else
                        {
                            estructurasAnalizar.AddRange(estructura.SubEstructuras);
                        }
                    }

                }
            }

            return idConceptoHipercubo;
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
            return null;
        }
    }
}
