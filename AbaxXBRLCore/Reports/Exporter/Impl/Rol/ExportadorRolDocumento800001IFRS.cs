using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.Reports.Dto;
using AbaxXBRLCore.Reports.Util;
using AbaxXBRLCore.Viewer.Application.Dto;
using Aspose.Words;
using Aspose.Words.Tables;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Reports.Exporter.Impl.Rol
{
    /// <summary>
    /// Implementación de una clase para poder generar la sección del reporte que corresponde al desglose de créditos.
    /// </summary>
    public class ExportadorRolDocumento800001IFRS : ExportadorRolDocumentoBase
    {
        ///
	    /// Tamaño de letra para esta reporte en específico
	    ////
        public int TamanioLetraReporteDesglose { get; set; }
	    ///
	     /// Color del titulo de las tablas
	     ////
        private int[] ColorTituloTabla { get; set; }
	    ///
	     /// (non-Javadoc)
	     /// @see com.bmv.spread.xbrl.reportes.exportador.ExportadorRolDocumentoInstancia#exportarRolAWord(com.aspose.words.DocumentBuilder, com.hh.xbrl.abax.viewer.application.dto.DocumentoInstanciaXbrlDto, com.bmv.spread.xbrl.reportes.dto.IndiceReporteDTO, com.bmv.spread.xbrl.reportes.dto.ReporteXBRLDTO)
	     ////

        public ExportadorRolDocumento800001IFRS() 
        {
            TamanioLetraReporteDesglose = 5;
            ColorTituloTabla = new int[] { 0, 53, 96 };
        }
	    override public void exportarRolAWord(DocumentBuilder docBuilder, DocumentoInstanciaXbrlDto instancia, IndiceReporteDTO rolAExportar, ReporteXBRLDTO estructuraReporte)
        {
		
		    docBuilder.CurrentSection.PageSetup.Orientation = Orientation.Landscape;
		    docBuilder.CurrentSection.PageSetup.PaperSize = PaperSize.Legal;
		    docBuilder.CurrentSection.PageSetup.LeftMargin = 10;
		    docBuilder.CurrentSection.PageSetup.RightMargin = 10;

		    Color colorTitulo = Color.FromArgb(ColorTituloTabla[0],ColorTituloTabla[1],ColorTituloTabla[2]);
		    escribirEncabezado(docBuilder,instancia,estructuraReporte,true);
		

		    imprimirTituloRol(docBuilder, rolAExportar);

		    Table tablaDesglose = docBuilder.StartTable();
		    docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Center;
		    establecerFuenteTituloCampo(docBuilder);
		    docBuilder.Font.Size = TamanioLetraReporteDesglose;

		    docBuilder.ParagraphFormat.SpaceAfter = 0;
		    docBuilder.ParagraphFormat.SpaceBefore = 2;

		    docBuilder.InsertCell();
		    docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Center;
		    docBuilder.RowFormat.HeadingFormat = true;
		
		    docBuilder.CellFormat.Shading.BackgroundPatternColor = colorTitulo;
		    docBuilder.CellFormat.PreferredWidth = PreferredWidth.Auto;
            docBuilder.Font.Color = Color.White;

            var idioma = estructuraReporte.Lenguaje;
		
		    docBuilder.CellFormat.VerticalMerge = CellMerge.First;
		    docBuilder.CellFormat.HorizontalMerge = CellMerge.None;
		    docBuilder.Write(DesgloseDeCreditosHelper.obtenerEtiquetaDeConcepto(instancia.Taxonomia, "ifrs_mx-cor_20141205_InstitucionEje",
				    idioma, ReporteXBRLUtil.ETIQUETA_DEFAULT));

		    docBuilder.InsertCell();
		    docBuilder.CellFormat.VerticalMerge = CellMerge.First;
		    docBuilder.CellFormat.HorizontalMerge = CellMerge.None;
		    docBuilder.Write(DesgloseDeCreditosHelper.obtenerEtiquetaDeConcepto(instancia.Taxonomia, "ifrs_mx-cor_20141205_InstitucionExtranjeraSiNo",
				    idioma, ReporteXBRLUtil.ETIQUETA_DEFAULT));

		    docBuilder.InsertCell();
		    docBuilder.CellFormat.VerticalMerge = CellMerge.First;
		    docBuilder.CellFormat.HorizontalMerge = CellMerge.None;
		    docBuilder.Write(DesgloseDeCreditosHelper.obtenerEtiquetaDeConcepto(instancia.Taxonomia, "ifrs_mx-cor_20141205_FechaDeFirmaContrato",
				    idioma, ReporteXBRLUtil.ETIQUETA_DEFAULT));

		    docBuilder.InsertCell();
		    docBuilder.CellFormat.VerticalMerge = CellMerge.First;
		    docBuilder.CellFormat.HorizontalMerge = CellMerge.None;
		    docBuilder.Write(DesgloseDeCreditosHelper.obtenerEtiquetaDeConcepto(instancia.Taxonomia, "ifrs_mx-cor_20141205_FechaDeVencimiento",
				    idioma, ReporteXBRLUtil.ETIQUETA_DEFAULT));

		    docBuilder.InsertCell();
		    docBuilder.CellFormat.VerticalMerge = CellMerge.First;
		    docBuilder.CellFormat.HorizontalMerge = CellMerge.None;
		    docBuilder.Write(DesgloseDeCreditosHelper.obtenerEtiquetaDeConcepto(instancia.Taxonomia, "ifrs_mx-cor_20141205_TasaDeInteresYOSobretasa",
				    idioma, ReporteXBRLUtil.ETIQUETA_DEFAULT));

		    docBuilder.InsertCell();
		    docBuilder.CellFormat.HorizontalMerge = CellMerge.First;
		    docBuilder.CellFormat.VerticalMerge = CellMerge.None;
		    docBuilder.Write(DesgloseDeCreditosHelper.obtenerEtiquetaDeConcepto(instancia.Taxonomia, "ifrs_mx-cor_20141205_DenominacionEje",
				    idioma, ReporteXBRLUtil.ETIQUETA_DEFAULT));

		    docBuilder.InsertCell();
		    docBuilder.CellFormat.HorizontalMerge = CellMerge.Previous;
		    docBuilder.CellFormat.VerticalMerge = CellMerge.None;

		    docBuilder.InsertCell();
		    docBuilder.CellFormat.HorizontalMerge = CellMerge.Previous;
		    docBuilder.CellFormat.VerticalMerge = CellMerge.None;

		    docBuilder.InsertCell();
		    docBuilder.CellFormat.HorizontalMerge = CellMerge.Previous;
		    docBuilder.CellFormat.VerticalMerge = CellMerge.None;

		    docBuilder.InsertCell();
		    docBuilder.CellFormat.HorizontalMerge = CellMerge.Previous;
		    docBuilder.CellFormat.VerticalMerge = CellMerge.None;

		    docBuilder.InsertCell();
		    docBuilder.CellFormat.HorizontalMerge = CellMerge.Previous;
		    docBuilder.CellFormat.VerticalMerge = CellMerge.None;

		    docBuilder.InsertCell();
		    docBuilder.CellFormat.HorizontalMerge = CellMerge.Previous;
		    docBuilder.CellFormat.VerticalMerge = CellMerge.None;

		    docBuilder.InsertCell();
		    docBuilder.CellFormat.HorizontalMerge = CellMerge.Previous;
		    docBuilder.CellFormat.VerticalMerge = CellMerge.None;

		    docBuilder.InsertCell();
		    docBuilder.CellFormat.HorizontalMerge = CellMerge.Previous;
		    docBuilder.CellFormat.VerticalMerge = CellMerge.None;

		    docBuilder.InsertCell();
		    docBuilder.CellFormat.HorizontalMerge = CellMerge.Previous;
		    docBuilder.CellFormat.VerticalMerge = CellMerge.None;

		    docBuilder.InsertCell();
		    docBuilder.CellFormat.HorizontalMerge = CellMerge.Previous;
		    docBuilder.CellFormat.VerticalMerge = CellMerge.None;

		    docBuilder.InsertCell();
		    docBuilder.CellFormat.HorizontalMerge = CellMerge.Previous;
		    docBuilder.CellFormat.VerticalMerge = CellMerge.None;

		    docBuilder.EndRow();
		
		    docBuilder.InsertCell();
		    docBuilder.RowFormat.HeadingFormat = true;
		    docBuilder.CellFormat.VerticalMerge = CellMerge.Previous;
		    docBuilder.CellFormat.HorizontalMerge = CellMerge.None;

		    docBuilder.InsertCell();
		    docBuilder.CellFormat.VerticalMerge = CellMerge.Previous;
		    docBuilder.CellFormat.HorizontalMerge = CellMerge.None;

		    docBuilder.InsertCell();
		    docBuilder.CellFormat.VerticalMerge = CellMerge.Previous;
		    docBuilder.CellFormat.HorizontalMerge = CellMerge.None;

		    docBuilder.InsertCell();
		    docBuilder.CellFormat.VerticalMerge = CellMerge.Previous;
		    docBuilder.CellFormat.HorizontalMerge = CellMerge.None;

		    docBuilder.InsertCell();
		    docBuilder.CellFormat.VerticalMerge = CellMerge.Previous;
		    docBuilder.CellFormat.HorizontalMerge = CellMerge.None;
		
		    docBuilder.InsertCell();
		    docBuilder.CellFormat.HorizontalMerge = CellMerge.First;
		    docBuilder.CellFormat.VerticalMerge = CellMerge.None;
		    docBuilder.Write(DesgloseDeCreditosHelper.obtenerEtiquetaDeConcepto(instancia.Taxonomia, "ifrs_mx-cor_20141205_MonedaNacionalMiembro",
				    idioma, ReporteXBRLUtil.ETIQUETA_DEFAULT));

		    docBuilder.InsertCell();
		    docBuilder.CellFormat.HorizontalMerge = CellMerge.Previous;
		    docBuilder.CellFormat.VerticalMerge = CellMerge.None;

		    docBuilder.InsertCell();
		    docBuilder.CellFormat.HorizontalMerge = CellMerge.Previous;
		    docBuilder.CellFormat.VerticalMerge = CellMerge.None;

		    docBuilder.InsertCell();
		    docBuilder.CellFormat.HorizontalMerge = CellMerge.Previous;
		    docBuilder.CellFormat.VerticalMerge = CellMerge.None;

		    docBuilder.InsertCell();
		    docBuilder.CellFormat.HorizontalMerge = CellMerge.Previous;
		    docBuilder.CellFormat.VerticalMerge = CellMerge.None;

		    docBuilder.InsertCell();
		    docBuilder.CellFormat.HorizontalMerge = CellMerge.Previous;
		    docBuilder.CellFormat.VerticalMerge = CellMerge.None;

		    docBuilder.InsertCell();
		    docBuilder.CellFormat.HorizontalMerge = CellMerge.First;
		    docBuilder.CellFormat.VerticalMerge = CellMerge.None;
		    docBuilder.Write(DesgloseDeCreditosHelper.obtenerEtiquetaDeConcepto(instancia.Taxonomia, "ifrs_mx-cor_20141205_MonedaExtranjeraMiembro",
				    idioma, ReporteXBRLUtil.ETIQUETA_DEFAULT));

		    docBuilder.InsertCell();
		    docBuilder.CellFormat.HorizontalMerge = CellMerge.Previous;
		    docBuilder.CellFormat.VerticalMerge = CellMerge.None;

		    docBuilder.InsertCell();
		    docBuilder.CellFormat.HorizontalMerge = CellMerge.Previous;
		    docBuilder.CellFormat.VerticalMerge = CellMerge.None;

		    docBuilder.InsertCell();
		    docBuilder.CellFormat.HorizontalMerge = CellMerge.Previous;
		    docBuilder.CellFormat.VerticalMerge = CellMerge.None;

		    docBuilder.InsertCell();
		    docBuilder.CellFormat.HorizontalMerge = CellMerge.Previous;
		    docBuilder.CellFormat.VerticalMerge = CellMerge.None;

		    docBuilder.InsertCell();
		    docBuilder.CellFormat.HorizontalMerge = CellMerge.Previous;
		    docBuilder.CellFormat.VerticalMerge = CellMerge.None;

		    docBuilder.EndRow();

		    docBuilder.InsertCell();
		    docBuilder.RowFormat.HeadingFormat = true;
		    docBuilder.CellFormat.VerticalMerge = CellMerge.Previous;
		    docBuilder.CellFormat.HorizontalMerge = CellMerge.None;

		    docBuilder.InsertCell();
		    docBuilder.CellFormat.VerticalMerge = CellMerge.Previous;
		    docBuilder.CellFormat.HorizontalMerge = CellMerge.None;

		    docBuilder.InsertCell();
		    docBuilder.CellFormat.VerticalMerge = CellMerge.Previous;
		    docBuilder.CellFormat.HorizontalMerge = CellMerge.None;

		    docBuilder.InsertCell();
		    docBuilder.CellFormat.VerticalMerge = CellMerge.Previous;
		    docBuilder.CellFormat.HorizontalMerge = CellMerge.None;

		    docBuilder.InsertCell();
		    docBuilder.CellFormat.VerticalMerge = CellMerge.Previous;
		    docBuilder.CellFormat.HorizontalMerge = CellMerge.None;

		    docBuilder.InsertCell();
		    docBuilder.CellFormat.HorizontalMerge = CellMerge.First;
		    docBuilder.CellFormat.VerticalMerge = CellMerge.None;
		    docBuilder.Write(DesgloseDeCreditosHelper.obtenerEtiquetaDeConcepto(instancia.Taxonomia, "ifrs_mx-cor_20141205_IntervaloDeTiempoEje",
				    idioma, ReporteXBRLUtil.ETIQUETA_DEFAULT));

		    docBuilder.InsertCell();
		    docBuilder.CellFormat.HorizontalMerge = CellMerge.Previous;
		    docBuilder.CellFormat.VerticalMerge = CellMerge.None;

		    docBuilder.InsertCell();
		    docBuilder.CellFormat.HorizontalMerge = CellMerge.Previous;
		    docBuilder.CellFormat.VerticalMerge = CellMerge.None;

		    docBuilder.InsertCell();
		    docBuilder.CellFormat.HorizontalMerge = CellMerge.Previous;
		    docBuilder.CellFormat.VerticalMerge = CellMerge.None;

		    docBuilder.InsertCell();
		    docBuilder.CellFormat.HorizontalMerge = CellMerge.Previous;
		    docBuilder.CellFormat.VerticalMerge = CellMerge.None;

		    docBuilder.InsertCell();
		    docBuilder.CellFormat.HorizontalMerge = CellMerge.Previous;
		    docBuilder.CellFormat.VerticalMerge = CellMerge.None;

		    docBuilder.InsertCell();
		    docBuilder.CellFormat.HorizontalMerge = CellMerge.First;
		    docBuilder.CellFormat.VerticalMerge = CellMerge.None;
		    docBuilder.Write(DesgloseDeCreditosHelper.obtenerEtiquetaDeConcepto(instancia.Taxonomia, "ifrs_mx-cor_20141205_IntervaloDeTiempoEje",
				    idioma, ReporteXBRLUtil.ETIQUETA_DEFAULT));

		    docBuilder.InsertCell();
		    docBuilder.CellFormat.HorizontalMerge = CellMerge.Previous;
		    docBuilder.CellFormat.VerticalMerge = CellMerge.None;

		    docBuilder.InsertCell();
		    docBuilder.CellFormat.HorizontalMerge = CellMerge.Previous;
		    docBuilder.CellFormat.VerticalMerge = CellMerge.None;

		    docBuilder.InsertCell();
		    docBuilder.CellFormat.HorizontalMerge = CellMerge.Previous;
		    docBuilder.CellFormat.VerticalMerge = CellMerge.None;

		    docBuilder.InsertCell();
		    docBuilder.CellFormat.HorizontalMerge = CellMerge.Previous;
		    docBuilder.CellFormat.VerticalMerge = CellMerge.None;

		    docBuilder.InsertCell();
		    docBuilder.CellFormat.HorizontalMerge = CellMerge.Previous;
		    docBuilder.CellFormat.VerticalMerge = CellMerge.None;

		    docBuilder.EndRow();

		    docBuilder.InsertCell();
		    docBuilder.RowFormat.HeadingFormat = true;
		    docBuilder.CellFormat.HorizontalMerge = CellMerge.None;
		    docBuilder.CellFormat.VerticalMerge = CellMerge.Previous;

		    docBuilder.InsertCell();
		    docBuilder.CellFormat.HorizontalMerge = CellMerge.None;
		    docBuilder.CellFormat.VerticalMerge = CellMerge.Previous;

		    docBuilder.InsertCell();
		    docBuilder.CellFormat.HorizontalMerge = CellMerge.None;
		    docBuilder.CellFormat.VerticalMerge = CellMerge.Previous;

		    docBuilder.InsertCell();
		    docBuilder.CellFormat.HorizontalMerge = CellMerge.None;
		    docBuilder.CellFormat.VerticalMerge = CellMerge.Previous;

		    docBuilder.InsertCell();
		    docBuilder.CellFormat.HorizontalMerge = CellMerge.None;
		    docBuilder.CellFormat.VerticalMerge = CellMerge.Previous;

		    docBuilder.InsertCell();
		    docBuilder.CellFormat.VerticalMerge = CellMerge.None;
		    docBuilder.Write(DesgloseDeCreditosHelper.obtenerEtiquetaDeConcepto(instancia.Taxonomia, "ifrs_mx-cor_20141205_AnoActualMiembro",
				    idioma, ReporteXBRLUtil.ETIQUETA_DEFAULT));

		    docBuilder.InsertCell();
		    docBuilder.CellFormat.VerticalMerge = CellMerge.None;
		    docBuilder.Write(DesgloseDeCreditosHelper.obtenerEtiquetaDeConcepto(instancia.Taxonomia, "ifrs_mx-cor_20141205_Hasta1AnoMiembro",
				    idioma, ReporteXBRLUtil.ETIQUETA_DEFAULT));

		    docBuilder.InsertCell();
		    docBuilder.CellFormat.VerticalMerge = CellMerge.None;
		    docBuilder.Write(DesgloseDeCreditosHelper.obtenerEtiquetaDeConcepto(instancia.Taxonomia, "ifrs_mx-cor_20141205_Hasta2AnosMiembro",
				    idioma, ReporteXBRLUtil.ETIQUETA_DEFAULT));

		    docBuilder.InsertCell();
		    docBuilder.CellFormat.VerticalMerge = CellMerge.None;
		    docBuilder.Write(DesgloseDeCreditosHelper.obtenerEtiquetaDeConcepto(instancia.Taxonomia, "ifrs_mx-cor_20141205_Hasta3AnosMiembro",
				    idioma, ReporteXBRLUtil.ETIQUETA_DEFAULT));

		    docBuilder.InsertCell();
		    docBuilder.CellFormat.VerticalMerge = CellMerge.None;
		    docBuilder.Write(DesgloseDeCreditosHelper.obtenerEtiquetaDeConcepto(instancia.Taxonomia, "ifrs_mx-cor_20141205_Hasta4AnosMiembro",
				    idioma, ReporteXBRLUtil.ETIQUETA_DEFAULT));

		    docBuilder.InsertCell();
		    docBuilder.CellFormat.VerticalMerge = CellMerge.None;
		    docBuilder.Write(DesgloseDeCreditosHelper.obtenerEtiquetaDeConcepto(instancia.Taxonomia, "ifrs_mx-cor_20141205_Hasta5AnosOMasMiembro",
				    idioma, ReporteXBRLUtil.ETIQUETA_DEFAULT));

		    docBuilder.InsertCell();
		    docBuilder.CellFormat.VerticalMerge = CellMerge.None;
		    docBuilder.Write(DesgloseDeCreditosHelper.obtenerEtiquetaDeConcepto(instancia.Taxonomia, "ifrs_mx-cor_20141205_AnoActualMiembro",
				    idioma, ReporteXBRLUtil.ETIQUETA_DEFAULT));

		    docBuilder.InsertCell();
		    docBuilder.CellFormat.VerticalMerge = CellMerge.None;
		    docBuilder.Write(DesgloseDeCreditosHelper.obtenerEtiquetaDeConcepto(instancia.Taxonomia, "ifrs_mx-cor_20141205_Hasta1AnoMiembro",
				    idioma, ReporteXBRLUtil.ETIQUETA_DEFAULT));

		    docBuilder.InsertCell();
		    docBuilder.CellFormat.VerticalMerge = CellMerge.None;
		    docBuilder.Write(DesgloseDeCreditosHelper.obtenerEtiquetaDeConcepto(instancia.Taxonomia, "ifrs_mx-cor_20141205_Hasta2AnosMiembro",
				    idioma, ReporteXBRLUtil.ETIQUETA_DEFAULT));

		    docBuilder.InsertCell();
		    docBuilder.CellFormat.VerticalMerge = CellMerge.None;
		    docBuilder.Write(DesgloseDeCreditosHelper.obtenerEtiquetaDeConcepto(instancia.Taxonomia, "ifrs_mx-cor_20141205_Hasta3AnosMiembro",
				    idioma, ReporteXBRLUtil.ETIQUETA_DEFAULT));

		    docBuilder.InsertCell();
		    docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Center;
		    docBuilder.CellFormat.VerticalMerge = CellMerge.None;
		    docBuilder.Write(DesgloseDeCreditosHelper.obtenerEtiquetaDeConcepto(instancia.Taxonomia, "ifrs_mx-cor_20141205_Hasta4AnosMiembro",
				    idioma, ReporteXBRLUtil.ETIQUETA_DEFAULT));

		    docBuilder.InsertCell();
		    docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Center;
		    docBuilder.CellFormat.VerticalMerge = CellMerge.None;
		    docBuilder.Write(DesgloseDeCreditosHelper.obtenerEtiquetaDeConcepto(instancia.Taxonomia, "ifrs_mx-cor_20141205_Hasta5AnosOMasMiembro",
				    idioma, ReporteXBRLUtil.ETIQUETA_DEFAULT));

		    docBuilder.EndRow();

            foreach (DesgloseDeCreditosReporteDto dto in estructuraReporte.DesgloseCreditos)
            {
			
			    docBuilder.InsertCell();
			    docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Left;
			
			    docBuilder.RowFormat.HeadingFormat = false;
			    docBuilder.CellFormat.HorizontalMerge = CellMerge.None;
			    docBuilder.CellFormat.VerticalMerge = CellMerge.None;
			
			
			    if(dto.TituloAbstracto) {
                    docBuilder.Font.Color = Color.White;
				    docBuilder.CellFormat.Shading.BackgroundPatternColor = colorTitulo;
				
				    docBuilder.Write(dto.Titulo);
				    for(int i = 0; i< 16; i++) {
					    docBuilder.InsertCell();
					    docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Left;
					    docBuilder.CellFormat.Shading.BackgroundPatternColor = colorTitulo;
                        docBuilder.Font.Color = Color.White;
					    if(i==0) {
						    docBuilder.CellFormat.HorizontalMerge = CellMerge.First;
						    docBuilder.CellFormat.VerticalMerge = CellMerge.None;
					    } else {
						    docBuilder.CellFormat.HorizontalMerge = CellMerge.Previous;
						    docBuilder.CellFormat.VerticalMerge = CellMerge.None;
					    }
				    }
			    } else {
				    docBuilder.CellFormat.Shading.BackgroundPatternColor = Color.White;
				    docBuilder.Font.Color = Color.Black;
				    docBuilder.Write(dto.Titulo);
				    docBuilder.InsertCell();
				    docBuilder.Font.Color = Color.Black;
				    docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Left;
				    docBuilder.CellFormat.Shading.BackgroundPatternColor = Color.White;
				    docBuilder.CellFormat.HorizontalMerge = CellMerge.None;
				    docBuilder.CellFormat.VerticalMerge = CellMerge.None;
				    if(dto.InstitucionExtranjera != null) {
					    docBuilder.Write(Boolean.Parse(dto.InstitucionExtranjera.Valor) ? "SI" : "NO");
                        escribirLinkNotaAlPie(docBuilder, dto.InstitucionExtranjera, estructuraReporte);
				    }
				
				    docBuilder.InsertCell();
				    docBuilder.CellFormat.HorizontalMerge = CellMerge.None;
				    docBuilder.CellFormat.VerticalMerge = CellMerge.None;
                    if (dto.FechaFirmaContrato != null && dto.FechaFirmaContrato.Valor != null && DateReporteUtil.obtenerFecha(dto.FechaFirmaContrato.Valor) != default(DateTime))
                    {
                        docBuilder.Write(DateUtil.ToFormatString(DateReporteUtil.obtenerFecha(dto.FechaFirmaContrato.Valor), ReporteXBRLUtil.FORMATO_FECHA_YYYY_MM_DD));
                        escribirLinkNotaAlPie(docBuilder, dto.FechaFirmaContrato, estructuraReporte);
				    }
				
				    docBuilder.InsertCell();
				    docBuilder.CellFormat.HorizontalMerge = CellMerge.None;
				    docBuilder.CellFormat.VerticalMerge = CellMerge.None;
                    if (dto.FechaVencimiento != null && dto.FechaVencimiento.Valor != null && DateReporteUtil.obtenerFecha(dto.FechaVencimiento.Valor) != default(DateTime))
                    {
                        docBuilder.Write(DateUtil.ToFormatString(DateReporteUtil.obtenerFecha(dto.FechaVencimiento.Valor), ReporteXBRLUtil.FORMATO_FECHA_YYYY_MM_DD));
                        escribirLinkNotaAlPie(docBuilder, dto.FechaVencimiento, estructuraReporte);
				    }
				
				    docBuilder.InsertCell();
				    docBuilder.CellFormat.HorizontalMerge = CellMerge.None;
				    docBuilder.CellFormat.VerticalMerge = CellMerge.None;
                    if (dto.TasaInteres != null && dto.TasaInteres.Valor != null)
                    {
					    docBuilder.Write(dto.TasaInteres.Valor);
                        escribirLinkNotaAlPie(docBuilder, dto.TasaInteres, estructuraReporte);
				    }
				
				    docBuilder.InsertCell();
				    docBuilder.CellFormat.WrapText = true;
				    docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Right;
				    docBuilder.CellFormat.HorizontalMerge = CellMerge.None;
				    docBuilder.CellFormat.VerticalMerge = CellMerge.None;
                    if (dto.MonedaNacionalAnioActual != null && dto.MonedaNacionalAnioActual.ValorFormateado != null)
                    {
                        escribirLinkNotaAlPie(docBuilder, dto.MonedaNacionalAnioActual, estructuraReporte);
                        docBuilder.Write(dto.MonedaNacionalAnioActual.ValorFormateado);
				    }
				
				    docBuilder.InsertCell();
				    docBuilder.CellFormat.WrapText = true;
				    docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Right;
				    docBuilder.CellFormat.HorizontalMerge = CellMerge.None;
				    docBuilder.CellFormat.VerticalMerge = CellMerge.None;
                    if (dto.MonedaNacionalUnAnio != null && dto.MonedaNacionalUnAnio.ValorFormateado != null)
                    {
                        escribirLinkNotaAlPie(docBuilder, dto.MonedaNacionalUnAnio, estructuraReporte);
					    docBuilder.Write(dto.MonedaNacionalUnAnio.ValorFormateado);
				    }
				
				    docBuilder.InsertCell();
				    docBuilder.CellFormat.WrapText = true;
				    docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Right;
				    docBuilder.CellFormat.HorizontalMerge = CellMerge.None;
				    docBuilder.CellFormat.VerticalMerge = CellMerge.None;
                    if (dto.MonedaNacionalDosAnio != null && dto.MonedaNacionalDosAnio.ValorFormateado != null)
                    {
                        escribirLinkNotaAlPie(docBuilder, dto.MonedaNacionalDosAnio, estructuraReporte);
					    docBuilder.Write(dto.MonedaNacionalDosAnio.ValorFormateado);
				    }
				
				    docBuilder.InsertCell();
				    docBuilder.CellFormat.WrapText = true;
				    docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Right;
				    docBuilder.CellFormat.HorizontalMerge = CellMerge.None;
				    docBuilder.CellFormat.VerticalMerge = CellMerge.None;
                    if (dto.MonedaNacionalTresAnio != null && dto.MonedaNacionalTresAnio.ValorFormateado != null)
                    {
                        escribirLinkNotaAlPie(docBuilder, dto.MonedaNacionalTresAnio, estructuraReporte);
					    docBuilder.Write(dto.MonedaNacionalTresAnio.ValorFormateado);
				    }
				
				    docBuilder.InsertCell();
				    docBuilder.CellFormat.WrapText = true;
				    docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Right;
				    docBuilder.CellFormat.HorizontalMerge = CellMerge.None;
				    docBuilder.CellFormat.VerticalMerge = CellMerge.None;
                    if (dto.MonedaNacionalCuatroAnio != null && dto.MonedaNacionalCuatroAnio.ValorFormateado != null)
                    {
                        escribirLinkNotaAlPie(docBuilder, dto.MonedaNacionalCuatroAnio, estructuraReporte);
					    docBuilder.Write(dto.MonedaNacionalCuatroAnio.ValorFormateado);
				    }
				
				    docBuilder.InsertCell();
				    docBuilder.CellFormat.WrapText = true;
				    docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Right;
				    docBuilder.CellFormat.HorizontalMerge = CellMerge.None;
				    docBuilder.CellFormat.VerticalMerge = CellMerge.None;
                    if (dto.MonedaNacionalCincoMasAnio != null && dto.MonedaNacionalCincoMasAnio.ValorFormateado != null)
                    {
                        escribirLinkNotaAlPie(docBuilder, dto.MonedaNacionalCincoMasAnio, estructuraReporte);
					    docBuilder.Write(dto.MonedaNacionalCincoMasAnio.ValorFormateado);
				    }
				
				    docBuilder.InsertCell();
				    docBuilder.CellFormat.WrapText = true;
				    docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Right;
				    docBuilder.CellFormat.HorizontalMerge = CellMerge.None;
				    docBuilder.CellFormat.VerticalMerge = CellMerge.None;
                    if (dto.MonedaExtranjeraAnioActual != null && dto.MonedaExtranjeraAnioActual.ValorFormateado != null)
                    {
                        escribirLinkNotaAlPie(docBuilder, dto.MonedaExtranjeraAnioActual, estructuraReporte);
					    docBuilder.Write(dto.MonedaExtranjeraAnioActual.ValorFormateado);
				    }
				
				    docBuilder.InsertCell();
				    docBuilder.CellFormat.WrapText = true;
				    docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Right;
				    docBuilder.CellFormat.HorizontalMerge = CellMerge.None;
				    docBuilder.CellFormat.VerticalMerge = CellMerge.None;
                    if (dto.MonedaExtranjeraUnAnio != null && dto.MonedaExtranjeraUnAnio.ValorFormateado != null)
                    {
                        escribirLinkNotaAlPie(docBuilder, dto.MonedaExtranjeraUnAnio, estructuraReporte);
					    docBuilder.Write(dto.MonedaExtranjeraUnAnio.ValorFormateado);
				    }
				
				    docBuilder.InsertCell();
				    docBuilder.CellFormat.WrapText = true;
				    docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Right;
				    docBuilder.CellFormat.HorizontalMerge = CellMerge.None;
				    docBuilder.CellFormat.VerticalMerge = CellMerge.None;
                    if (dto.MonedaExtranjeraDosAnio != null && dto.MonedaExtranjeraDosAnio.ValorFormateado != null)
                    {
                        escribirLinkNotaAlPie(docBuilder, dto.MonedaExtranjeraDosAnio, estructuraReporte);
					    docBuilder.Write(dto.MonedaExtranjeraDosAnio.ValorFormateado);
				    }
				
				    docBuilder.InsertCell();
				    docBuilder.CellFormat.WrapText = true;
				    docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Right;
				    docBuilder.CellFormat.HorizontalMerge = CellMerge.None;
				    docBuilder.CellFormat.VerticalMerge = CellMerge.None;
                    if (dto.MonedaExtranjeraTresAnio != null && dto.MonedaExtranjeraTresAnio.ValorFormateado != null)
                    {
                        escribirLinkNotaAlPie(docBuilder, dto.MonedaExtranjeraTresAnio, estructuraReporte);
					    docBuilder.Write(dto.MonedaExtranjeraTresAnio.ValorFormateado);
				    }
				
				    docBuilder.InsertCell();
				    docBuilder.CellFormat.WrapText = true;
				    docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Right;
				    docBuilder.CellFormat.HorizontalMerge = CellMerge.None;
				    docBuilder.CellFormat.VerticalMerge = CellMerge.None;
                    if (dto.MonedaExtranjeraCuatroAnio != null && dto.MonedaExtranjeraCuatroAnio.ValorFormateado != null)
                    {
                        escribirLinkNotaAlPie(docBuilder, dto.MonedaExtranjeraCuatroAnio, estructuraReporte);
					    docBuilder.Write(dto.MonedaExtranjeraCuatroAnio.ValorFormateado);
				    }
				
				    docBuilder.InsertCell();
				    docBuilder.CellFormat.WrapText = true;
				    docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Right;
				    docBuilder.CellFormat.HorizontalMerge = CellMerge.None;
				    docBuilder.CellFormat.VerticalMerge = CellMerge.None;
                    if (dto.MonedaExtranjeraCincoMasAnio != null && dto.MonedaExtranjeraCincoMasAnio.ValorFormateado != null)
                    {
                        escribirLinkNotaAlPie(docBuilder, dto.MonedaExtranjeraCincoMasAnio, estructuraReporte);
					    docBuilder.Write(dto.MonedaExtranjeraCincoMasAnio.ValorFormateado);
				    }
			    }
			    docBuilder.EndRow();
		    }
		    establecerBordesGrisesTabla(tablaDesglose);
		    docBuilder.EndTable();
	    }
	
    }
}
