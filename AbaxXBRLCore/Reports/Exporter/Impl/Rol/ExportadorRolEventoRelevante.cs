using AbaxXBRLCore.Reports.Dto;
using AbaxXBRLCore.Reports.Util;
using AbaxXBRLCore.Viewer.Application.Dto;
using Aspose.Words;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Reports.Exporter.Impl.Rol
{
    /// <summary>
    /// Implementación de un exportador de rol de documento de instancia que realiza la exportación
    /// de los datos de los roles de la taxonomía de Eventos Relevantes.
    /// Este exportador es muy específico para los roles de eventos relevantes y busca
    /// específicamente los hechos requeridos en un documento de instnacia para las 2 taxonomías
    /// de eventos relevantes.
    /// </summary>
    public class ExportadorRolEventoRelevante : ExportadorRolDocumentoBase
    {
        public override void exportarRolAWord(DocumentBuilder docBuilder, DocumentoInstanciaXbrlDto instancia, IndiceReporteDTO rolAExportar, ReporteXBRLDTO estructuraReporte)
        {
           
            //estructuraReporte.ConceptosReportePorRol[""][0].Hechos[""].Valor
            foreach (HeaderFooter head in docBuilder.Document.FirstSection.HeadersFooters)
            {
                head.Range.Replace("${label_rel_ev_RelevantEventReportAbstract}",
                ReporteXBRLUtil.obtenerEtiquetaConcepto(estructuraReporte.Lenguaje, null, "rel_ev_RelevantEventReportAbstract", instancia),
                false, false);

                head.Range.Replace("${label_rel_ev_Date}",
                ReporteXBRLUtil.obtenerEtiquetaConcepto(estructuraReporte.Lenguaje, null, "rel_ev_Date", instancia),
                false, false);

                head.Range.Replace("${rel_ev_Date}",
                ReporteXBRLUtil.obtenerValorHechoDefault("rel_ev_Date",instancia,""),
                false, false);

                head.Range.Replace("${rel_ev_BusinessName}",
                ReporteXBRLUtil.obtenerValorHechoDefault("rel_ev_BusinessName", instancia,""),
                false, false);
            }

            docBuilder.Document.FirstSection.Range.Replace("${label_rel_ev_Ticker}",
               ReporteXBRLUtil.obtenerEtiquetaConcepto(estructuraReporte.Lenguaje, null, "rel_ev_Ticker", instancia),
               false, false);

            docBuilder.Document.FirstSection.Range.Replace("${rel_ev_Ticker}",
              ReporteXBRLUtil.obtenerValorHechoDefault("rel_ev_Ticker", instancia,""),
              false, false);

            docBuilder.Document.FirstSection.Range.Replace("${label_rel_ev_BusinessName}",
              ReporteXBRLUtil.obtenerEtiquetaConcepto(estructuraReporte.Lenguaje, null, "rel_ev_BusinessName", instancia),
              false, false);

            docBuilder.Document.FirstSection.Range.Replace("${rel_ev_BusinessName}",
              ReporteXBRLUtil.obtenerValorHechoDefault("rel_ev_BusinessName", instancia,""),
              false, false);

            docBuilder.Document.FirstSection.Range.Replace("${label_rel_ev_Place}",
              ReporteXBRLUtil.obtenerEtiquetaConcepto(estructuraReporte.Lenguaje, null, "rel_ev_Place", instancia),
              false, false);

            docBuilder.Document.FirstSection.Range.Replace("${rel_ev_Place}",
              ReporteXBRLUtil.obtenerValorHechoDefault("rel_ev_Place", instancia,""),
              false, false);


            docBuilder.Document.FirstSection.Range.Replace("${label_rel_ev_ForeignMarket}",
              ReporteXBRLUtil.obtenerEtiquetaConcepto(estructuraReporte.Lenguaje, null, "rel_ev_ForeignMarket", instancia),
              false, false);

            docBuilder.Document.FirstSection.Range.Replace("${rel_ev_ForeignMarket}",
              ReporteXBRLUtil.obtenerValorHechoDefault("rel_ev_ForeignMarket", instancia,""),
              false, false);



            docBuilder.Document.FirstSection.Range.Replace("${label_rel_ev_RelevantEventTypesAxis}",
              ReporteXBRLUtil.obtenerEtiquetaConcepto(estructuraReporte.Lenguaje, null, "rel_ev_RelevantEventTypesAxis", instancia),
              false, false);

            string descTipoEvento = String.Empty;

            if(instancia.HechosPorIdConcepto.ContainsKey("rel_ev_RelevantEventContent")){
                  var listaHechosId = instancia.HechosPorIdConcepto["rel_ev_RelevantEventContent"];
                if(listaHechosId.Count>0){
                    var hechoContenido = instancia.HechosPorId[listaHechosId[0]];
                    var contexto = instancia.ContextosPorId[hechoContenido.IdContexto];
                    if(contexto.ValoresDimension != null && contexto.ValoresDimension.Count>0){
                        descTipoEvento = ReporteXBRLUtil.obtenerEtiquetaConcepto(estructuraReporte.Lenguaje, null, contexto.ValoresDimension[0].IdItemMiembro, instancia);
                    }
                }
            }

            docBuilder.Document.FirstSection.Range.Replace("${rel_ev_RelevantEventTypesAxis}",
              descTipoEvento,
              false, false);

            docBuilder.Document.FirstSection.Range.Replace("${label_rel_ev_Subject}",
             ReporteXBRLUtil.obtenerEtiquetaConcepto(estructuraReporte.Lenguaje, null, "rel_ev_Subject", instancia),
             false, false);

            docBuilder.Document.FirstSection.Range.Replace("${rel_ev_Subject}",
              ReporteXBRLUtil.obtenerValorHechoDefault("rel_ev_Subject", instancia,""),
              false, false);


            docBuilder.Document.FirstSection.Range.Replace("${label_rel_ev_RelevantEventContent}",
            ReporteXBRLUtil.obtenerEtiquetaConcepto(estructuraReporte.Lenguaje, null, "rel_ev_RelevantEventContent", instancia),
            false, false);
            docBuilder.MoveToSection(0);
            docBuilder.MoveToDocumentEnd();

            foreach(var rol in estructuraReporte.ConceptosReportePorRol.Keys){
                var concepto = estructuraReporte.ConceptosReportePorRol[rol].FirstOrDefault(x=>x.IdConcepto == "rel_ev_RelevantEventContent");
                if (concepto != null)
                {
                    escribirValorHecho(docBuilder, estructuraReporte, concepto.Hechos["trim_actual"], concepto);
                }   
            }

            docBuilder.MoveToDocumentEnd();
            
            
          
            /*
            foreach (var rol in estructuraReporte.ConceptosReportePorRol.Keys)
            {
                var concepto = estructuraReporte.ConceptosReportePorRol[rol].FirstOrDefault(x => x.IdConcepto == "rel_ev_AttachedDocumentPdf");
                if (concepto != null)
                {
                    //escribirConceptoEnTablaNota(docBuilder, estructuraReporte, concepto.Hechos["trim_actual"], concepto);
                    
                    escribirValorHecho(docBuilder, estructuraReporte, concepto.Hechos["trim_actual"], concepto);
                }
            }
            */



        }

        public override void escribirEncabezado(DocumentBuilder docBuilder, DocumentoInstanciaXbrlDto instancia, ReporteXBRLDTO estructuraReporte, bool imprimirFooter)
        {

        }

    }

    
}
