﻿using AbaxXBRLCore.Common.Constants;
using AbaxXBRLCore.Reports.Dto;
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
    /// Implementación de un exportador de rol personalizado
    /// para el formato 110000 de las taxonomías IFRS
    /// </summary>
    public class ExportadorRolDocumento110000IFRS : ExportadorRolDocumentoBase
    {
        /// <summary>
	    /// Identificadores utilizados en este exportador
	    /// </summary>
	    public static String ID_CLAVE_COTIZACION  = "ifrs_mx-cor_20141205_ClaveDeCotizacionBloqueDeTexto";
	    public static String ID_PERIODO_CUBIERTO = "ifrs-full_PeriodCoveredByFinancialStatements";
	    public static String ID_DATE_OF_END = "ifrs-full_DateOfEndOfReportingPeriod2013";
	    public static String ID_NAME_OF_ENTITY = "ifrs-full_NameOfReportingEntityOrOtherMeansOfIdentification";
	    public static String ID_MONEDA_PRESENTACION = "ifrs-full_DescriptionOfPresentationCurrency";
	    public static String ID_GRADO_REDONDEO = "ifrs-full_LevelOfRoundingUsedInFinancialStatements";
	    public static String ID_CONSOLIDADO = "ifrs_mx-cor_20141205_Consolidado";
	    public static String ID_NUM_TRIMESTRE = "ifrs_mx-cor_20141205_NumeroDeTrimestre";
	    public static String ID_TIPO_EMISORA = "ifrs_mx-cor_20141205_TipoDeEmisora";
	    public static String ID_DESCRIPCION_NATURALEZA = "ifrs-full_DescriptionOfNatureOfFinancialStatements";
	    public static String ID_INFO_A_REVELAR_SOBRE_INFO_GENERAL  = "ifrs-full_DisclosureOfGeneralInformationAboutFinancialStatementsExplanatory";
	    public static String ID_EXPLICACION_EN_EL_CAMBIO = "ifrs-full_ExplanationOfChangeInNameOfReportingEntityOrOtherMeansOfIdentificationFromEndOfPrecedingReportingPeriod";
	    public static String ID_SEGUIMIENTO_ANALISIS = "ifrs_mx-cor_20141205_SeguimientoDeAnalisisBloqueDeTexto";
	    /// <summary>
	    /// Conceptos activados para un 4D
	    /// </summary>
	    public static String[] ID_CONCEPTOS_4D = new String[]{
		    "ifrs_mx-cor_20141205_NombreDeProveedorDeServiciosDeAuditoriaExternaBloqueDeTexto",
		    "ifrs_mx-cor_20141205_NombreDelSocioQueFirmaLaOpinionBloqueDeTexto",
		    "ifrs_mx-cor_20141205_TipoDeOpinionALosEstadosFinancierosBloqueDeTexto",
		    "ifrs_mx-cor_20141205_FechaDeOpinionSobreLosEstadosFinancierosBloqueDeTexto",
		    "ifrs_mx-cor_20141205_FechaDeAsambleaEnQueSeAprobaronLosEstadosFinancierosBloqueDeTexto"		
	    };
	
	
	    /// <summary>
	    /// Indicador de trimestre 4 Dictaminado
	    /// </summary>
	    public static String TRIM_4D = "4D";
	
	    /// <summary>
	    /// Nombres de las variables en la plantilla que hay que reemplazar
	    /// </summary>
	    public static String VARIABLE_CVE_COTIZACION = "cveCotizacion";
	    public static String VARIABLE_TRIMESTRE = "trimestre";
	    public static String VARIABLE_ANIO = "anio";
	    public static String VARIABLE_RAZON_SOCIAL = "razonSocial";
	    public static String VARIABLE_CONSOLIDADO = "consolidado";
	
	
	   override public void exportarRolAWord(DocumentBuilder docBuilder, DocumentoInstanciaXbrlDto instancia, IndiceReporteDTO rolAExportar, ReporteXBRLDTO estructuraReporte)  
       {
		
		    IList<ConceptoReporteDTO> listaConceptos = estructuraReporte.Roles[rolAExportar.Rol];
		    docBuilder.CurrentSection.PageSetup.Orientation = Orientation.Portrait;
		    docBuilder.CurrentSection.PageSetup.PaperSize = PaperSize.Letter;
		    escribirEncabezado(docBuilder,instancia,estructuraReporte,true);
		    imprimirTituloRol(docBuilder, rolAExportar);
		
		    Table tablaActual = docBuilder.StartTable();
		    docBuilder.ParagraphFormat.SpaceAfter = 5;
		    docBuilder.ParagraphFormat.SpaceBefore = 5;
		
		
		
		    escribirADosColumnasConceptoValor(docBuilder,ID_CLAVE_COTIZACION, rolAExportar, estructuraReporte);
		
		    escribirADosColumnasConceptoValor(docBuilder,ID_PERIODO_CUBIERTO, rolAExportar, estructuraReporte);
				
		    escribirADosColumnasConceptoValor(docBuilder,ID_DATE_OF_END, rolAExportar, estructuraReporte);
		
		    escribirADosColumnasConceptoValor(docBuilder,ID_NAME_OF_ENTITY, rolAExportar, estructuraReporte);
		
		    escribirADosColumnasConceptoValor(docBuilder,ID_MONEDA_PRESENTACION, rolAExportar, estructuraReporte);
		
		    escribirADosColumnasConceptoValor(docBuilder,ID_GRADO_REDONDEO, rolAExportar, estructuraReporte);
		
		    escribirADosColumnasConceptoValor(docBuilder,ID_CONSOLIDADO, rolAExportar, estructuraReporte);
		
		    escribirADosColumnasConceptoValor(docBuilder,ID_NUM_TRIMESTRE, rolAExportar, estructuraReporte);
		
		    escribirADosColumnasConceptoValor(docBuilder,ID_TIPO_EMISORA, rolAExportar, estructuraReporte);

            escribirADosColumnasConceptoValor(docBuilder, ID_EXPLICACION_EN_EL_CAMBIO, rolAExportar, estructuraReporte);
		
		    escribirADosColumnasConceptoValor(docBuilder,ID_DESCRIPCION_NATURALEZA, rolAExportar, estructuraReporte);
		
		
		    tablaActual.SetBorders(LineStyle.None, 0,Color.Black);
		    tablaActual.SetBorder(BorderType.Horizontal, LineStyle.Single, .75, Color.DarkGray, true);
		    tablaActual.SetBorder(BorderType.Bottom, LineStyle.Single, .75, Color.DarkGray, true);
		    docBuilder.EndTable();
		    docBuilder.InsertParagraph();

            escribirConceptoEnTablaNota(docBuilder, estructuraReporte, ID_INFO_A_REVELAR_SOBRE_INFO_GENERAL, listaConceptos);

		    String numTrimestre = obtenerValorNoNumerico(instancia, ID_NUM_TRIMESTRE);
		
		    if(TRIM_4D.Equals(numTrimestre)){
			    foreach(String idConcepto  in  ID_CONCEPTOS_4D)
			    {
                    escribirConceptoEnTablaNota(docBuilder, estructuraReporte, idConcepto, listaConceptos);
			    }
		    }

            escribirConceptoEnTablaNota(docBuilder, estructuraReporte, ID_SEGUIMIENTO_ANALISIS, listaConceptos);
		
		    //Reemplazar variables
		
		    String consolidado = obtenerValorNoNumerico(instancia, ID_CONSOLIDADO);
		
		    String razonSocial = obtenerValorNoNumerico(instancia, ID_NAME_OF_ENTITY);

            if (CommonConstants.CADENAS_VERDADERAS.Contains(consolidado.ToLower().Trim()))
            {
			    consolidado = "Consolidado";
		    }else{
			    consolidado = "No consolidado";
		    }
		
		
		
		    docBuilder.Document.Range.Replace("#"+VARIABLE_CVE_COTIZACION, estructuraReporte.ClaveCotizacion, false, false);
		    docBuilder.Document.Range.Replace("#"+VARIABLE_TRIMESTRE, numTrimestre, false, false);
		    docBuilder.Document.Range.Replace("#"+VARIABLE_ANIO, estructuraReporte.Anio, false, false);
		    docBuilder.Document.Range.Replace("#"+VARIABLE_RAZON_SOCIAL, razonSocial, false, false);
		    docBuilder.Document.Range.Replace("#"+VARIABLE_CONSOLIDADO, consolidado, false, false);
		
		    estructuraReporte.RazonSocial = razonSocial;
		    estructuraReporte.IndicadorConsolidado = consolidado;
		
	    }
	
	    ///
	    /// Escribe NOMBRE : VALOR de un hecho en 2 columnas y una tercera más de relleno
	    ///
	    private void escribirATresColumnasConceptoValor(DocumentBuilder docBuilder, String idConcepto, IndiceReporteDTO rolAExportar, ReporteXBRLDTO estructuraReporte)  
        {
		
		    docBuilder.InsertCell();
		    establecerFuenteTituloCampo(docBuilder);
		    escribirTituloConcepto(docBuilder,idConcepto, estructuraReporte.Roles[rolAExportar.Rol]);
		    docBuilder.Write(": ");
		    docBuilder.InsertCell();
		    establecerFuenteValorCampo(docBuilder);
            escribirValorHecho(docBuilder, estructuraReporte, estructuraReporte.Roles[rolAExportar.Rol], idConcepto);
		    docBuilder.InsertCell();
		    docBuilder.EndRow();
	    }
	
	
	    /// <summary>
	    /// Escribe NOMBRE : VALOR de un hecho en 2 columnas 
	    /// </summary>
	    private void escribirADosColumnasConceptoValor(DocumentBuilder docBuilder, String idConcepto, IndiceReporteDTO rolAExportar, ReporteXBRLDTO estructuraReporte)  
        {
		
		    docBuilder.InsertCell();
		    establecerFuenteTituloCampo(docBuilder);
		    escribirTituloConcepto(docBuilder,idConcepto, estructuraReporte.Roles[rolAExportar.Rol]);
		    docBuilder.Write(": ");
		    docBuilder.InsertCell();
		    establecerFuenteValorCampo(docBuilder);
            escribirValorHecho(docBuilder, estructuraReporte, estructuraReporte.Roles[rolAExportar.Rol], idConcepto);
		    docBuilder.EndRow();
	    }
    }
}
