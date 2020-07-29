using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.Reports.Dto;
using AbaxXBRLCore.Viewer.Application.Dto;
using Aspose.Words;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Web;

namespace AbaxXBRLCore.Reports.Exporter.Impl.Rol
{
    public class ExportadorRolDocumentoNotasAlPie : ExportadorRolDocumentoBase
    {
        override public void exportarRolAWord(DocumentBuilder docBuilder, DocumentoInstanciaXbrlDto instancia, IndiceReporteDTO rolAExportar, ReporteXBRLDTO estructuraReporte)
        {
            docBuilder.CurrentSection.PageSetup.Orientation = Orientation.Portrait;
            docBuilder.CurrentSection.PageSetup.PaperSize = PaperSize.Letter;
            docBuilder.CurrentSection.PageSetup.LeftMargin = 40;
            docBuilder.CurrentSection.PageSetup.RightMargin = 40;

            //escribirEncabezado(docBuilder, instancia, estructuraReporte, true);
            imprimirTituloRol(docBuilder, rolAExportar);

            docBuilder.Font.Name = TipoLetraTextos;
            docBuilder.Font.Bold = false;
            docBuilder.Font.Size = TamanioLetraTextos;
            docBuilder.Font.Color = Color.Black;
            docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Left;

            foreach (String i in estructuraReporte.NotasAlPie.Keys)
            {
                var kv = (KeyValuePair<Int32, String>)estructuraReporte.NotasAlPie[i];
                var nota = limpiarBloqueTexto(kv.Value);

                if (Regex.IsMatch(nota, "&lt;") || Regex.IsMatch(nota, "&gt;"))
                {
                    nota = HttpUtility.HtmlDecode(nota);
                }
                else
                {
                    nota = REGEXP_SALTO_LINEA.Replace(nota, "<br/>");
                }

                docBuilder.InsertHyperlink("[" + kv.Key + "] " + FLECHA_ARRIBA, MARCADOR_LINK_NOTAALPIE + kv.Key + "]", true);
                docBuilder.StartBookmark(MARCADOR_NOTAALPIE + kv.Key + "]");
                WordUtil.InsertHtml(docBuilder, "nn", PARRAFO_HTML_NOTAS + nota + "</p>", false, true);
              

                docBuilder.EndBookmark(MARCADOR_NOTAALPIE + kv.Key + "]");
            }
        }
    }
}
