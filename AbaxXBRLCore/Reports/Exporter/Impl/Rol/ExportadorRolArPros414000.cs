﻿using AbaxXBRLCore.Common.Constants;
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
    /// Implementación de un exportador de rol personalizado
    /// para el formato 110000 de las taxonomías IFRS
    /// </summary>
    public class ExportadorRolArPros414000 : ExportadorRolDocumentoBase
    {
        /// <summary>
        /// Identificadores utilizados en este exportador
        /// </summary>
        public static String ID_Tipo_Oferta = "ar_pros_TypeOfOffer";
        public static String ID_Descripcion_Forma = "ar_pros_DescriptionOfHowThePlacementPriceIsDetermined";
        public static String ID_Denominacion_moneda = "ar_pros_NameOfTheReferenceCurrencyInWhichTheIssueIsMade";
        public static String ID_Monto_Total = "ar_pros_TotalAmountOfTheIssueInMexicoAndAbroadIfNecessary";
        public static String ID_Precio = "ar_pros_PlacementPriceValues";
        public static String ID_Distribucion = "ar_pros_DistributionPlan";
        public static String ID_hipercubo2 = "ar_pros_AdditionalValuesLineItems";
        public static String ID_hipercubo1 = "ar_pros_CostsRelatedToTheOfferAbstract";
        //public static String ID_type_string = "http://www.xbrl.org/2003/instance:stringItemType";
        //public static String ID_type_textBlock = "http://www.xbrl.org/dtr/type/non-numeric:textBlockItemType";
        //ReporteXBRLUtil.TIPO_DATO_TEXT_BLOCK;
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
        private IList<string> ConceptosOcultar = new List<string>()
        {
            "ar_pros_HomeOfTheAnnualReportAbstract",
            "ar_pros_LeafletCoverAbstract",
            "ar_pros_SpecificationOfTheCharacteristicsOfOutstandingSecuritiesAbstract",
            "ar_pros_TheIssuerAbstract",
            "ar_pros_SelectedFinancialInformationAbstract",
            "ar_pros_AdministrationAbstract",
            "ar_pros_EquityMarket",
            "ar_pros_ResponsiblePersonsAbstract",
            "ar_pros_ExhibitAbstract",
            "ar_pros_AdditionalValuesAbstract",
            "ar_pros_GuaranteesAndGuarantorsAbstract",
            "ar_pros_GeneralDataAbstract",
            "ar_pros_LeafletCoverAbstract",
            "ar_pros_InTheCaseOfAuctionSecuritiesAbstract",
            "ar_pros_NameOfTheUnderWriter",
            "ar_pros_WhereAppropriateRateGivenByRatingInstitutionAbstract",
            "ar_pros_InTheCaseOfSharesInAdditionShallIncludeTheFollowingAbstract",
            "ar_pros_InTheCaseOfDebtSecuritiesAbstract",
            "ar_pros_InTheCaseOfStructuredValuesAbstract",
            "ar_pros_InTheCaseOfSecuritiesIssuedUnderATrustAbstract",
            "ar_pros_NameOfTheCommonRepresentativeOfTheHoldersOfSecurities",
            "ar_pros_InTheCaseOfSecuritiesIssuedByATrustAbstract",
            "ar_pros_AdditionalValuesLineItems",
            "ar_pros_SupplyProgram",

        };
        private IList<string> hipercubosSerie = new List<string>()
        {
            "ar_pros_DebtSeriesCharacteristicsTable",
            "ar_pros_SpecificationOfTheCharacteristicsOfOutstandingSecuritiesTable",
            "ar_pros_NumberAndCharacteristicsOfTheSecuritiesBeingOfferedTable",
            "ar_pros_AdditionalValuesTable",
            "ar_pros_CharacteristicsOfTheCurrentListedSeriesTable",
              "ar_pros_SpecificationOfTheCharacteristicsOfOutstandingSecuritiesAbstract",
              "ar_pros_InTheCaseOfDebtIssuersAbstract",
              "ar_pros_NumberAndCharacteristicsOfTheSecuritiesBeingOfferedAbstract",
              "ar_pros_CharacteristicsOfTheCurrentListedSeriesAbstract"
        };
        private IList<string> hipercubosExist = new List<string>()
        {
          
            "ar_pros_SecuritiesRatingAbstract",
            "ar_pros_CompanyAdministratorsAbstract",
            "ar_pros_ResponsiblePersonsOfTheReportAbstract",
            "ar_pros_NameOfTheUnderWriter",
            "ar_pros_WhereAppropriateRateGivenByRatingInstitutionAbstract",
            "ar_pros_NameOfTheCommonRepresentativeOfTheHoldersOfSecurities",
            "ar_pros_NameOfTheCommonRepresentativeOfTheHoldersOfStructuredSecurities",
            "ar_pros_AdditionalValuesAbstract",
            "ar_pros_MultiplesAbstract",
            "ar_pros_SecuritiesRatingAbstract",
            "ar_pros_ParticipantsInTheOfferAbstract",
            "ar_pros_CompanyAdministratorsAbstract",
            "ar_pros_ResponsiblePersonsOfTheReportAbstract"


        };

        private IList<string> Evaluador = new List<string>();
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

            escribirEncabezado(docBuilder, instancia, estructuraReporte, true);
            imprimirTituloRol(docBuilder, rolAExportar);
           
            desplegarTablas(docBuilder, instancia, rolAExportar, estructuraReporte);
            docBuilder.Writeln();
            Evaluador.Clear();
        }
        private void PintaTablaDimensionExplicita(DocumentBuilder docBuilder, String valor, DocumentoInstanciaXbrlDto instancia, IndiceReporteDTO rolAExportar, ReporteXBRLDTO estructuraReporte)
        {
            docBuilder.Writeln();

            foreach (var dato in estructuraReporte.Hipercubos)
            {
                if (dato.Value.Hechos.Count > 0)
                {
                    var variable = dato;
                    // modificaciones en la condicion para obtner un hipercubo exlicito
                    string[] d = variable.Key.Split(new string[] { "Table" }, StringSplitOptions.None);
                    string conceptoHipercuboTable = (d[0]);

                    if (conceptoHipercuboTable == valor && !Evaluador.Contains(variable.Key))
                    {
                        var hipercubo = variable;
                        docBuilder.InsertBreak(BreakType.PageBreak);
                        Table tablaActual = docBuilder.StartTable();
                        Color colorTitulo = Color.FromArgb(ColorTituloTabla[0], ColorTituloTabla[1], ColorTituloTabla[2]);
                        docBuilder.ParagraphFormat.SpaceAfter = 0;
                        docBuilder.ParagraphFormat.SpaceBefore = 2;

                        //docBuilder.InsertCell(); 
                        // docBuilder.EndRow(); 
                        // Formatos de celdas que le da el color de fondo de los titulos de la tabla que se crea
                        docBuilder.CellFormat.Shading.BackgroundPatternColor = colorTitulo;
                        docBuilder.Font.Color = Color.White;
                        docBuilder.Font.Size = TamanioLetraContenidoTabla;

                        //   docBuilder.InsertCell();


                        foreach (var idConcepto in hipercubo.Value.Hechos.Keys)
                        {
                            var matrizPlantillaContexto = hipercubo.Value.Hechos[idConcepto];
                            docBuilder.InsertCell();
                            var nombreConcepto =
                                DesgloseDeCreditosHelper
                                .obtenerEtiquetaDeConcepto(instancia.Taxonomia, idConcepto, "es", ReporteXBRLUtil.ETIQUETA_DEFAULT);
                            docBuilder.Write(nombreConcepto);
                        }
                        docBuilder.EndRow();

                        docBuilder.CellFormat.Shading.BackgroundPatternColor = Color.White;
                        docBuilder.CellFormat.PreferredWidth = PreferredWidth.Auto;
                        docBuilder.Font.Color = Color.Black;
                        var cantidadCeldasVacias = hipercubo.Value.Hechos.Count - 1;

                        foreach (var idPlantillaContexto in hipercubo.Value.Utileria.configuracion.PlantillasContextos.Keys)
                        {

                            var plantilla = hipercubo.Value.Utileria.configuracion.PlantillasContextos[idPlantillaContexto];
                            var miembroPlantilla = plantilla.ValoresDimension[0];
                            var nombreMiembro =
                                   DesgloseDeCreditosHelper.obtenerEtiquetaDeConcepto(instancia.Taxonomia, miembroPlantilla.IdItemMiembro, "es", ReporteXBRLUtil.ETIQUETA_DEFAULT);
                            /* docBuilder.CellFormat.Shading.BackgroundPatternColor = Color.LightGray;
                               docBuilder.CellFormat.PreferredWidth = PreferredWidth.Auto;
                               docBuilder.Font.Color = Color.Black;*/
                            docBuilder.CellFormat.Shading.BackgroundPatternColor = colorTitulo;
                            docBuilder.Font.Color = Color.White;
                            docBuilder.Font.Size = TamanioLetraContenidoTabla;
                            docBuilder.InsertCell();
                            docBuilder.Write(nombreMiembro);
                            if (cantidadCeldasVacias > 0)
                            {
                                for (var indexMiembro = 0; indexMiembro < cantidadCeldasVacias; indexMiembro++)
                                {
                                    docBuilder.InsertCell();
                                    docBuilder.Write(String.Empty);
                                }
                                docBuilder.EndRow();
                            }
                            var countType = 0;
                            docBuilder.CellFormat.Shading.BackgroundPatternColor = Color.White;
                            docBuilder.CellFormat.PreferredWidth = PreferredWidth.Auto;
                            docBuilder.Font.Color = Color.Black;
                            docBuilder.Bold = false;
                            foreach (var idConcepto in hipercubo.Value.Hechos.Keys)
                            {
                                var matrizPlantillaContexto = hipercubo.Value.Hechos[idConcepto];
                                countType = matrizPlantillaContexto[idPlantillaContexto].Length;
                                break;
                            }
                            Boolean dimensiones = false;
                            for (var indexType = 0; indexType < countType; indexType++)
                            {


                                if (indexType > 0)
                                {
                                    dimensiones = true;
                                }

                                docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Left;
                                foreach (var idConcepto in hipercubo.Value.Hechos.Keys)
                                {


                                    var matrizPlantillaContexto = hipercubo.Value.Hechos[idConcepto];
                                    var listaHechos = matrizPlantillaContexto[idPlantillaContexto];
                                    if (listaHechos != null)
                                    {
                                        var hecho = listaHechos[indexType];

                                        var valorHecho = hecho.Valor;
                                        if (dimensiones)
                                        {
                                            docBuilder.EndRow();
                                            docBuilder.InsertCell();
                                            dimensiones = false;
                                        }
                                        else
                                        {
                                            docBuilder.InsertCell();
                                        }

                                        if (hecho.NoEsNumerico)
                                        {
                                            docBuilder.CellFormat.WrapText = true;
                                            docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Left;
                                        }
                                        else
                                        {
                                            docBuilder.CellFormat.WrapText = false;
                                            docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Right;

                                        }
                                        if ((hecho != null && !String.IsNullOrWhiteSpace(hecho.Valor)))
                                        {
                                            docBuilder.Write(valorHecho);
                                        }
                                    }

                                }


                            }

                            docBuilder.RowFormat.AllowBreakAcrossPages = true;
                            docBuilder.RowFormat.HeadingFormat = false;
                            docBuilder.EndRow();
                        }


                        establecerBordesGrisesTabla(tablaActual);
                        docBuilder.EndTable();
                        docBuilder.Writeln();
                        Evaluador.Add(variable.Key);



                    }
                }

            }





        }

        private void PintaTablaDimensionSerie(DocumentBuilder docBuilder, String valor, DocumentoInstanciaXbrlDto instancia, IndiceReporteDTO rolAExportar, ReporteXBRLDTO estructuraReporte, ConceptoReporteDTO concepto)
        {
            docBuilder.Writeln();
            // var listaConseptosReportes = estructuraReporte.Hipercubos;
            foreach (var dato in estructuraReporte.Hipercubos)
            {

                var variable = dato;
                string[] d = variable.Key.Split(new string[] { "Table" }, StringSplitOptions.None);
                string conceptoHipercuboTable = (d[0]);

                if (conceptoHipercuboTable == valor && !Evaluador.Contains(variable.Key))
                {

                    ConceptoReporteDTO primerConcepto = null;

                    if (!estructuraReporte.Roles.ContainsKey(rolAExportar.Rol))
                    {
                        throw new IndexOutOfRangeException("No existe el rol [" + rolAExportar.Rol + "] dentro del listado de roles del reporte.");
                    }
                    if (estructuraReporte.Roles.ContainsKey(rolAExportar.Rol))
                    {

                        if (!concepto.Abstracto)
                        {
                            primerConcepto = concepto;
                            break;
                        }

                    }

                    var hipercubo = variable;


                    Table tablaActual = docBuilder.StartTable();
                    Color colorTitulo = Color.FromArgb(ColorTituloTabla[0], ColorTituloTabla[1], ColorTituloTabla[2]);
                    docBuilder.ParagraphFormat.SpaceAfter = 0;
                    docBuilder.ParagraphFormat.SpaceBefore = 2;

                    //docBuilder.InsertCell(); 
                    // docBuilder.EndRow(); 
                    docBuilder.CellFormat.Shading.BackgroundPatternColor = colorTitulo;
                    docBuilder.Font.Color = Color.White;
                    docBuilder.Font.Size = TamanioLetraContenidoTabla;

                    docBuilder.InsertCell();

                    docBuilder.CellFormat.Shading.BackgroundPatternColor = colorTitulo;
                    docBuilder.CellFormat.PreferredWidth = PreferredWidth.Auto;
                    docBuilder.Font.Color = Color.White;
                    establecerFuenteTituloCampo(docBuilder);
                    docBuilder.Font.Size = TamanioLetraTituloTabla;
                    docBuilder.Write("Serie [Eje]");
                    docBuilder.CellFormat.HorizontalMerge = CellMerge.None;

                    if (hipercubo.Value.Titulos.Count > 0)
                    {
                        for (var indexTitulo = 0; indexTitulo < hipercubo.Value.Titulos.Count; indexTitulo++)
                        {
                            var titulo = hipercubo.Value.Titulos[indexTitulo];
                            docBuilder.InsertCell();
                            docBuilder.Write(titulo);
                        }
                        docBuilder.EndRow();
                    }



                    establecerFuenteTituloCampo(docBuilder);
                    docBuilder.Font.Size = TamanioLetraTituloTabla;

                    int fila = 0;


                    if (concepto.Abstracto)
                    {
                        fila = +1;

                        for (int iCell = 0; iCell < fila; iCell++)
                        {

                            docBuilder.InsertCell();
                            docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Left;
                        }

                    }
                    if (concepto.Abstracto)
                    {
                        docBuilder.Bold = true;
                        docBuilder.Font.Color = Color.White;
                        docBuilder.CellFormat.Shading.BackgroundPatternColor = colorTitulo;

                        docBuilder.ParagraphFormat.LeftIndent = (concepto.Tabuladores < 0 ? concepto.Tabuladores : 0);
                        docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Left;
                        docBuilder.Write(concepto.Valor);
                        docBuilder.InsertCell();
                        docBuilder.EndRow();
                        //  tituloAbstracto.Add(concepto.Valor);


                    }
                    else
                    {
                        docBuilder.Bold = false;

                    }


                    docBuilder.CellFormat.Shading.BackgroundPatternColor = Color.White;
                    docBuilder.CellFormat.PreferredWidth = PreferredWidth.Auto;
                    docBuilder.Font.Color = Color.Black;
                    docBuilder.Bold = false;
                    foreach (var idConcepto in hipercubo.Value.Hechos.Keys)
                    {


                        var matrizPlantillaContexto = hipercubo.Value.Hechos[idConcepto];
                        docBuilder.InsertCell();
                        var nombreConcepto =
                        DesgloseDeCreditosHelper.obtenerEtiquetaDeConcepto(instancia.Taxonomia, idConcepto, "es", ReporteXBRLUtil.ETIQUETA_DEFAULT);
                        docBuilder.Write(nombreConcepto);


                        foreach (var idPlantillaContexto in matrizPlantillaContexto.Keys)
                        {
                            docBuilder.CellFormat.WrapText = true;
                            docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Left;
                            var listaHechos = matrizPlantillaContexto[idPlantillaContexto];
                            for (var indexHecho = 0; indexHecho < listaHechos.Length; indexHecho++)
                            {
                                var hecho = listaHechos[indexHecho];
                                var valorHecho = hecho.Valor;

                                docBuilder.InsertCell();
                                if (hecho.NoEsNumerico)
                                {
                                    docBuilder.CellFormat.WrapText = true;
                                    docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Left;
                                }
                                else
                                {
                                    docBuilder.CellFormat.WrapText = false;
                                    docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Right;

                                }


                                if ((hecho != null && !String.IsNullOrWhiteSpace(hecho.Valor)))
                                {
                                    if (hecho.TipoDato.Contains(TIPO_DATO_TEXT_BLOCK))
                                    {
                                        WordUtil.InsertHtml(docBuilder, hecho.IdConcepto + ":" + hecho.Id, PARRAFO_HTML_NOTAS_Texblock + valorHecho + "</p>", false, true);
                                        //docBuilder.InsertHtml(PARRAFO_HTML_NOTAS_Texblock + limpiarBloqueTexto(valorHecho) + "</p>", true);
                                    }
                                    else
                                    {
                                        docBuilder.Writeln(valorHecho);
                                    }

                                }
                            }
                        }

                        docBuilder.EndRow();
                    }


                    establecerBordesGrisesTabla(tablaActual);
                    docBuilder.EndTable();
                    docBuilder.Writeln();
                    docBuilder.Writeln();
                    Evaluador.Add(variable.Key);
                    break;
                }

            }



        }
        public void desplegarTablas(DocumentBuilder docBuilder, DocumentoInstanciaXbrlDto instancia, IndiceReporteDTO rolAExportar, ReporteXBRLDTO estructuraReporte)
        {
            var listaConseptosReporte = estructuraReporte.Roles[rolAExportar.Rol];
            var bandera = 0;
            var interruptor = 0;
            var contador = -1;
            
            foreach (ConceptoReporteDTO concepto in listaConseptosReporte)
            {
                String ID_type_text_Block=ObtenertipoDato(concepto, TIPO_DATO_TEXT_BLOCK);

               if(concepto.TipoDato==ID_type_text_Block)// if (concepto.IdConcepto == ID_Tipo_Oferta)
                {
                    bandera = 1;
                }
                if (bandera == 1)
                {

                    String ID_type_textBlock = ObtenertipoDato(concepto, TIPO_DATO_TEXT_BLOCK);
                    String ID_type_string = ObtenertipoDato(concepto, TIPO_DATO_STRING);
                    String ID_type_moneda=ObtenertipoDato(concepto,TIPO_DATO_MONEDA);
                    String ID_type_nonNegative = ObtenertipoDato(concepto, TIPO_DATO_NONNEGATIVE);
                    if (concepto.TipoDato == ID_type_string || concepto.TipoDato == ID_type_textBlock)
                    {

                        escribirAUnaColumnasConceptoValor(docBuilder, concepto.IdConcepto, rolAExportar, estructuraReporte);
                        interruptor++;
                    }
                    else if (concepto.IdConcepto != ID_Monto_Total)
                    {
                        if (concepto.TipoDato != ID_type_moneda && concepto.TipoDato != ID_type_nonNegative)
                        {
                            escribirADosColumnasConceptoValor(docBuilder, concepto.IdConcepto, rolAExportar, estructuraReporte);
                            interruptor++;
                        }
                        
                        
                    }
                    else
                    {

                        if (concepto.IdConcepto == ID_Monto_Total)
                        {
                            bandera = 0;
                            break;
                        }

                    }

                }

            }

            docBuilder.Writeln();
            PintaTabla(docBuilder, instancia, rolAExportar, estructuraReporte, listaConseptosReporte);

            docBuilder.Writeln();

            PintaTabla2(docBuilder, instancia, rolAExportar, estructuraReporte, listaConseptosReporte);
            docBuilder.Writeln();

            foreach (ConceptoReporteDTO concepto in listaConseptosReporte)
            {
                String ID_type_mondeda = ObtenertipoDato(concepto, TIPO_DATO_MONETARY);
            contador++;
                if(concepto.TipoDato!=ID_type_mondeda)//if (concepto.IdConcepto == ID_Precio)
                {
                    bandera = 1;
                }
                if (bandera == 1)
                {

                    if (concepto.IdConcepto != ID_Distribucion)
                    {
                        String ID_type_textBlock = ObtenertipoDato(concepto, TIPO_DATO_TEXT_BLOCK);
                        String ID_type_string = ObtenertipoDato(concepto, TIPO_DATO_STRING);
                        String ID_type_moneda = ObtenertipoDato(concepto, TIPO_DATO_MONEDA);
                        String ID_type_nonNegative = ObtenertipoDato(concepto, TIPO_DATO_NONNEGATIVE);
                        if (concepto.TipoDato == ID_type_string || concepto.TipoDato == ID_type_textBlock )
                        {
                            if (contador > interruptor)
                            {
                                escribirAUnaColumnasConceptoValor(docBuilder, concepto.IdConcepto, rolAExportar, estructuraReporte); 
                            }
                            
                        }
                        else
                        {
                            if (concepto.TipoDato != ID_type_moneda && concepto.TipoDato != ID_type_nonNegative )
                            {
                                if (contador > interruptor)
                                {
                                    escribirADosColumnasConceptoValor(docBuilder, concepto.IdConcepto, rolAExportar, estructuraReporte);
                                }
                                
                            }
                        }
                        
                    }
                    else
                    {
                        bandera = 0;
                        break;
                    }

                }
                if (hipercubosSerie.Contains(concepto.IdConcepto))
                {
                    docBuilder.Writeln();
                    var conceptoActual = concepto;
                    string[] d = concepto.IdConcepto.Split(new string[] { "Abstract" }, StringSplitOptions.None);
                    string ConceptoHipercubo = (d[0]);
                    PintaTablaDimensionSerie(docBuilder, ConceptoHipercubo, instancia, rolAExportar, estructuraReporte, conceptoActual);

                }
                else if (hipercubosExist.Contains(concepto.IdConcepto))
                {
                    docBuilder.Writeln();
                    
                    string[] d = concepto.IdConcepto.Split(new string[] { "Abstract" }, StringSplitOptions.None);
                    string ConceptoHipercubo = (d[0]);
                    PintaTablaDimensionExplicita(docBuilder, ConceptoHipercubo, instancia, rolAExportar, estructuraReporte);
                }

            }

            docBuilder.InsertParagraph();


        }

        private IList<ConceptoReporteDTO> ObtenSubLista(IList<ConceptoReporteDTO> lista, int index)
        {
            var subLista = new List<ConceptoReporteDTO>();
            for (var indice = index; indice < lista.Count(); indice++)
            {
                subLista.Add(lista[indice]);
            }
            return subLista;
        }

        private void PintaTabla2(DocumentBuilder docBuilder, DocumentoInstanciaXbrlDto instancia, IndiceReporteDTO rolAExportar, ReporteXBRLDTO estructuraReporte, IList<ConceptoReporteDTO> listaConseptosReporte)
        {
            var bandera = 0;
            Table tablaActual = docBuilder.StartTable();
            Color colorTitulo = Color.FromArgb(ColorTituloTabla[0], ColorTituloTabla[1], ColorTituloTabla[2]);
            docBuilder.ParagraphFormat.SpaceAfter = 0;
            docBuilder.ParagraphFormat.SpaceBefore = 2;

            ConceptoReporteDTO primerConcepto = null;

            if (!estructuraReporte.Roles.ContainsKey(rolAExportar.Rol))
            {
                throw new IndexOutOfRangeException("No existe el rol [" + rolAExportar.Rol + "] dentro del listado de roles del reporte.");
            }
            if (estructuraReporte.Roles.ContainsKey(rolAExportar.Rol))
            {
                foreach (ConceptoReporteDTO concepto in estructuraReporte.Roles[rolAExportar.Rol])
                {
                    if (!concepto.Abstracto)
                    {
                        primerConcepto = concepto;
                        break;
                    }
                }
            }
            establecerFuenteTituloCampo(docBuilder);
            docBuilder.Font.Size = TamanioLetraTituloTabla;
            docBuilder.InsertCell();

            //tablaActual.StyleIdentifier = StyleIdentifier.LIGHT_GRID_ACCENT_1;
            //tablaActual.StyleOptions = TableStyleOptions.FIRST_ROW;

            docBuilder.CellFormat.Shading.BackgroundPatternColor = colorTitulo;
            docBuilder.CellFormat.PreferredWidth = PreferredWidth.Auto;
            docBuilder.Font.Color = Color.White;
            docBuilder.Write(estructuraReporte.ObtenValorEtiquetaReporte("ETIQUETA_CONCEPTO"));

            foreach (String periodo in primerConcepto.Hechos.Keys)
            {
                docBuilder.InsertCell();
                docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Center;
                docBuilder.CellFormat.PreferredWidth = PreferredWidth.FromPoints(AnchoPreferidoColumnaDatos);
                //docBuilder.CellFormat.Width = 35;
                docBuilder.CellFormat.WrapText = false;
                docBuilder.CellFormat.Shading.BackgroundPatternColor = colorTitulo;
                String descPeriodo = estructuraReporte.PeriodosReporte[periodo];
                docBuilder.Writeln(estructuraReporte.Titulos[periodo]);
                docBuilder.Write(descPeriodo.Replace("_", " - "));
            }
            docBuilder.RowFormat.HeadingFormat = true;
            docBuilder.EndRow();

            establecerFuenteValorCampo(docBuilder);
            docBuilder.Font.Size = TamanioLetraContenidoTabla;
            foreach (ConceptoReporteDTO concepto in listaConseptosReporte)
            {
                String ID_tipo_nonNegative = ObtenertipoDato(concepto, TIPO_DATO_NONNEGATIVE);
                if (concepto.TipoDato == ID_tipo_nonNegative)
                {
                    bandera = 1;
                }
                else
                {
                    if (concepto.IdConcepto == ID_hipercubo2 || concepto.IdConcepto == ID_hipercubo1)
                    {
                        bandera = 0;
                        break;
                    }
                    else
                    {
                        bandera = 0;

                    }
                }

                if (bandera == 1)
                {
                    docBuilder.InsertCell();
                    docBuilder.CellFormat.PreferredWidth = PreferredWidth.Auto;
                    docBuilder.CellFormat.Shading.BackgroundPatternColor = Color.White;
                    docBuilder.CellFormat.WrapText = true;
                    docBuilder.Font.Color = Color.Black;
                    if (concepto.Abstracto)
                    {
                        docBuilder.Bold = true;
                        docBuilder.Font.Color = Color.White;
                        docBuilder.CellFormat.Shading.BackgroundPatternColor = colorTitulo;
                    }
                    else
                    {
                        docBuilder.Bold = false;
                    }
                    docBuilder.ParagraphFormat.LeftIndent = (concepto.Tabuladores < 0 ? concepto.Tabuladores : 0);
                    docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Left;
                    if (concepto.IdConcepto != ID_hipercubo2 && concepto.IdConcepto != ID_hipercubo1)
                    {
                        if (concepto.TipoDato == ID_tipo_nonNegative)
                        {
                            if (concepto.AtributosAdicionales != null)
                            {
                                if (concepto.AtributosAdicionales.Count== 1)
                                {
                                    conceptosEnIndice(docBuilder, concepto);

                                }
                                else
                                {
                                    docBuilder.Write(concepto.Valor);
                                }

                            }
                            else
                            {
                                docBuilder.Write(concepto.Valor);
                            }

                        }
                        else
                        {
                            docBuilder.Write(concepto.Valor);
                            bandera = 0;

                        }
                    }



                    if (concepto.Abstracto)
                    {
                        for (int iCell = 0; iCell < primerConcepto.Hechos.Count(); iCell++)
                        {

                            docBuilder.InsertCell();
                            docBuilder.CellFormat.PreferredWidth = PreferredWidth.FromPoints(AnchoPreferidoColumnaDatos);
                        }
                    }
                    else
                    {
                        foreach (HechoReporteDTO hecho in concepto.Hechos.Values)
                        {
                            docBuilder.InsertCell();
                            docBuilder.CellFormat.PreferredWidth = PreferredWidth.FromPoints(AnchoPreferidoColumnaDatos);
                            String ID_tipo_nonNegativo = ObtenertipoDato(concepto, TIPO_DATO_NONNEGATIVE);
                            docBuilder.ParagraphFormat.LeftIndent = 0;
                            if (concepto.Numerico)
                            {
                                docBuilder.CellFormat.WrapText = true;
                                docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Right;
                            }
                            else
                            {
                                docBuilder.CellFormat.WrapText = false;
                                docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Left;
                            }
                            if (concepto.IdConcepto != ID_hipercubo2 && concepto.IdConcepto != ID_hipercubo1)
                            {
                                if (concepto.TipoDato == ID_tipo_nonNegativo)
                                {

                                    escribirValorHecho(docBuilder, estructuraReporte, hecho, concepto);
                                }
                                else
                                {
                                    bandera = 0;

                                    break;
                                }
                            }
                            else
                            {
                                bandera = 0;
                                break;
                            }


                        }

                    }
                    docBuilder.RowFormat.AllowBreakAcrossPages = true;
                    docBuilder.RowFormat.HeadingFormat = false;
                    docBuilder.EndRow();
                }
                if (concepto.TipoDato != ID_tipo_nonNegative)
                {
                    bandera = 0;
                    // break;
                }
            }
            establecerBordesGrisesTabla(tablaActual);
            docBuilder.EndTable();


        }

        private void PintaTabla(DocumentBuilder docBuilder, DocumentoInstanciaXbrlDto instancia, IndiceReporteDTO rolAExportar, ReporteXBRLDTO estructuraReporte, IList<ConceptoReporteDTO> listaConseptosReporte)
        {
            var bandera = 0;
            Table tablaActual = docBuilder.StartTable();
            Color colorTitulo = Color.FromArgb(ColorTituloTabla[0], ColorTituloTabla[1], ColorTituloTabla[2]);
            docBuilder.ParagraphFormat.SpaceAfter = 0;
            docBuilder.ParagraphFormat.SpaceBefore = 2;

            ConceptoReporteDTO primerConcepto = null;

            if (!estructuraReporte.Roles.ContainsKey(rolAExportar.Rol))
            {
                throw new IndexOutOfRangeException("No existe el rol [" + rolAExportar.Rol + "] dentro del listado de roles del reporte.");
            }
            if (estructuraReporte.Roles.ContainsKey(rolAExportar.Rol))
            {
                foreach (ConceptoReporteDTO concepto in estructuraReporte.Roles[rolAExportar.Rol])
                {
                    if (!concepto.Abstracto)
                    {
                        primerConcepto = concepto;
                        break;
                    }
                }
            }
            establecerFuenteTituloCampo(docBuilder);
            docBuilder.Font.Size = TamanioLetraTituloTabla;
            docBuilder.InsertCell();

            //tablaActual.StyleIdentifier = StyleIdentifier.LIGHT_GRID_ACCENT_1;
            //tablaActual.StyleOptions = TableStyleOptions.FIRST_ROW;

            docBuilder.CellFormat.Shading.BackgroundPatternColor = colorTitulo;
            docBuilder.CellFormat.PreferredWidth = PreferredWidth.Auto;
            docBuilder.Font.Color = Color.White;
            docBuilder.Write(estructuraReporte.ObtenValorEtiquetaReporte("ETIQUETA_CONCEPTO"));

            foreach (String periodo in primerConcepto.Hechos.Keys)
            {
                docBuilder.InsertCell();
                docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Center;
                docBuilder.CellFormat.PreferredWidth = PreferredWidth.FromPoints(AnchoPreferidoColumnaDatos);
                //docBuilder.CellFormat.Width = 35;
                docBuilder.CellFormat.WrapText = false;
                docBuilder.CellFormat.Shading.BackgroundPatternColor = colorTitulo;
                String descPeriodo = estructuraReporte.PeriodosReporte[periodo];
                docBuilder.Writeln(estructuraReporte.Titulos[periodo]);
                docBuilder.Write(descPeriodo.Replace("_", " - "));
            }
            docBuilder.RowFormat.HeadingFormat = true;
            docBuilder.EndRow();

            establecerFuenteValorCampo(docBuilder);
            docBuilder.Font.Size = TamanioLetraContenidoTabla;
            foreach (ConceptoReporteDTO concepto in listaConseptosReporte)
            {
                String ID_tipo_Monetary = ObtenertipoDato(concepto, TIPO_DATO_MONEDA);
                if (concepto.TipoDato == ID_tipo_Monetary)
                {
                    bandera = 1;
                }
                else
                {
                    if (concepto.IdConcepto == ID_hipercubo2 || concepto.IdConcepto == ID_hipercubo1)
                    {
                        bandera = 0;
                        break;
                    }
                    else
                    {
                        bandera = 0;
                        
                    }
                }

                if (bandera == 1)
                {
                    docBuilder.InsertCell();
                    docBuilder.CellFormat.PreferredWidth = PreferredWidth.Auto;
                    docBuilder.CellFormat.Shading.BackgroundPatternColor = Color.White;
                    docBuilder.CellFormat.WrapText = true;
                    docBuilder.Font.Color = Color.Black;
                    if (concepto.Abstracto)
                    {
                        docBuilder.Bold = true;
                        docBuilder.Font.Color = Color.White;
                        docBuilder.CellFormat.Shading.BackgroundPatternColor = colorTitulo;
                    }
                    else
                    {
                        docBuilder.Bold = false;
                    }
                    docBuilder.ParagraphFormat.LeftIndent = (concepto.Tabuladores < 0 ? concepto.Tabuladores : 0);
                    docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Left;
                    if (concepto.IdConcepto != ID_hipercubo2 && concepto.IdConcepto != ID_hipercubo1)
                    {
                        if (concepto.TipoDato == ID_tipo_Monetary)
                        {
                            if (concepto.AtributosAdicionales != null)
                            {
                                if (concepto.AtributosAdicionales.Count == 1)
                                {
                                    conceptosEnIndice(docBuilder, concepto);

                                }
                                else
                                {
                                    docBuilder.Write(concepto.Valor);
                                }

                            }
                            else
                            {
                                docBuilder.Write(concepto.Valor);
                            }

                        }
                        else
                        {
                            docBuilder.Write(concepto.Valor);
                            bandera = 0;

                        }
                    }
                    
                   
                    
                    if (concepto.Abstracto)
                    {
                        for (int iCell = 0; iCell < primerConcepto.Hechos.Count(); iCell++)
                        {

                            docBuilder.InsertCell();
                            docBuilder.CellFormat.PreferredWidth = PreferredWidth.FromPoints(AnchoPreferidoColumnaDatos);
                        }
                    }
                    else
                    {
                        foreach (HechoReporteDTO hecho in concepto.Hechos.Values)
                        {
                            docBuilder.InsertCell();
                            docBuilder.CellFormat.PreferredWidth = PreferredWidth.FromPoints(AnchoPreferidoColumnaDatos);
                            String ID_type_monetary = ObtenertipoDato(concepto,TIPO_DATO_MONEDA);
                            docBuilder.ParagraphFormat.LeftIndent = 0;
                            if (concepto.Numerico)
                            {
                                docBuilder.CellFormat.WrapText = true;
                                docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Right;
                            }
                            else
                            {
                                docBuilder.CellFormat.WrapText = false;
                                docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Left;
                            }
                            if (concepto.IdConcepto != ID_hipercubo2 && concepto.IdConcepto != ID_hipercubo1)
                            {
                                if (concepto.TipoDato == ID_type_monetary)
                                {

                                    escribirValorHecho(docBuilder, estructuraReporte, hecho, concepto);
                                }
                                else
                                {
                                    bandera = 0;
                                    
                                    break;
                                }
                            }
                            else
                            {
                                bandera = 0;
                                break;
                            }
                           
                            
                        }
                        
                    }
                    docBuilder.RowFormat.AllowBreakAcrossPages = true;
                    docBuilder.RowFormat.HeadingFormat = false;
                    docBuilder.EndRow();
               }
               if (concepto.TipoDato != ID_tipo_Monetary)
                {
                    bandera = 0;
                   // break;
                }
            }
            establecerBordesGrisesTabla(tablaActual);
            docBuilder.EndTable();

        }

        public void EscribeNotas(DocumentBuilder docBuilder, DocumentoInstanciaXbrlDto instancia, IndiceReporteDTO rolAExportar, ReporteXBRLDTO estructuraReporte, IList<ConceptoReporteDTO> listaConseptosReporte)
        {

            HechoReporteDTO hecho = null;
            var ExportarNotasVacias = true;
            foreach (ConceptoReporteDTO concepto in listaConseptosReporte)
            {
                if (concepto.Abstracto || concepto.Numerico)
                {
                    var subLista = ObtenSubLista(listaConseptosReporte, listaConseptosReporte.IndexOf(concepto));
                    PintaTabla(docBuilder, instancia, rolAExportar, estructuraReporte, subLista);
                    return;
                }


                if (concepto.Hechos != null)
                {
                    var imprimePeriodo = concepto.Hechos.Count > 1;

                    foreach (String llave in concepto.Hechos.Keys)
                    {
                        hecho = concepto.Hechos[llave];
                        if ((hecho != null && !String.IsNullOrWhiteSpace(hecho.Valor)) || ExportarNotasVacias)
                        {

                            //Escribir titulo campo
                            escribirConceptoEnTablaNotaPeriodo(docBuilder, hecho, concepto, estructuraReporte, llave);
                        }
                    }
                }
            }
        }
        protected override void escribirConceptoEnTablaNota(DocumentBuilder docBuilder, ReporteXBRLDTO estructuraReporte, HechoReporteDTO hecho, ConceptoReporteDTO conceptoActual, bool forzarHtml = false)
        {
            establecerFuenteTituloCampo(docBuilder);
            docBuilder.Font.Size = TamanioLetraTituloConceptoNota;
            docBuilder.Font.Color = Color.Black;
            docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Left;
            if (conceptoActual.AtributosAdicionales != null)
            {
                if (conceptoActual.AtributosAdicionales.Count == 1)
                {
                    conceptosEnIndice(docBuilder, conceptoActual);

                }
                else
                {
                    docBuilder.Write(conceptoActual != null ? conceptoActual.Valor + ":" : "");
                }
            }
           

            
            Table tablaActual = docBuilder.StartTable();
            docBuilder.InsertCell();
            docBuilder.Font.Size = 1;
            docBuilder.Font.Spacing = 1;
            tablaActual.SetBorders(LineStyle.None, 0, Color.Black);
            docBuilder.CellFormat.Borders.Top.Color = Color.DarkGray;
            docBuilder.CellFormat.Borders.Top.LineStyle = LineStyle.Single;
            docBuilder.CellFormat.Borders.Top.LineWidth = 2;
            docBuilder.EndRow();
            docBuilder.EndTable();

            establecerFuenteValorCampo(docBuilder);
            docBuilder.Font.Color = Color.Black;
            docBuilder.InsertParagraph();
            docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Left;
            escribirValorHecho(docBuilder, estructuraReporte, hecho, conceptoActual);

            tablaActual = docBuilder.StartTable();
            docBuilder.InsertCell();
            docBuilder.Font.Size = 1;
            docBuilder.Font.Spacing = 1;
            tablaActual.SetBorders(LineStyle.None, 0, Color.Black);
            docBuilder.CellFormat.Borders.Bottom.Color = Color.DarkGray;
            docBuilder.CellFormat.Borders.Bottom.LineStyle = LineStyle.Single;
            docBuilder.CellFormat.Borders.Bottom.LineWidth = 2;
            docBuilder.EndRow();
            docBuilder.EndTable();

            docBuilder.Writeln();
            docBuilder.Writeln();
        }

        protected void escribirConceptoEnTablaNotaPeriodo(DocumentBuilder docBuilder, HechoReporteDTO hecho, ConceptoReporteDTO conceptoActual, ReporteXBRLDTO estructuraReporte, String periodo)
        {

            docBuilder.Writeln();
            Table tablaActual = docBuilder.StartTable();

            String descPeriodo = estructuraReporte.PeriodosReporte[periodo];

            docBuilder.InsertCell();
            tablaActual.SetBorders(LineStyle.None, 0, Color.Black);
            establecerFuenteTituloCampo(docBuilder);
            docBuilder.Font.Size = TamanioLetraTituloConceptoNota;
            docBuilder.Font.Color = Color.Gray;
            docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Center;
            docBuilder.Writeln(conceptoActual != null ? conceptoActual.Valor : String.Empty);
            docBuilder.Writeln(estructuraReporte.Titulos[periodo]);
            docBuilder.Write(descPeriodo.Replace("_", " - "));
            docBuilder.RowFormat.HeadingFormat = true;

            docBuilder.EndRow();
            docBuilder.InsertCell();
            docBuilder.Font.Color = Color.Black;
            tablaActual.SetBorders(LineStyle.None, 0, Color.Black);

            establecerBordesNota(docBuilder);

            docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Left;
            establecerFuenteValorCampo(docBuilder);
            escribirValorHecho(docBuilder, estructuraReporte, hecho, conceptoActual);
            docBuilder.RowFormat.HeadingFormat = false;
            docBuilder.EndRow();
            docBuilder.EndTable();
            docBuilder.InsertParagraph();

        }




        ///
        /// Escribe NOMBRE : VALOR de un hecho en 2 columnas y una tercera más de relleno
        ///
        private void escribirATresColumnasConceptoValor(DocumentBuilder docBuilder, String idConcepto, IndiceReporteDTO rolAExportar, ReporteXBRLDTO estructuraReporte)
        {

            docBuilder.InsertCell();
            establecerFuenteTituloCampo(docBuilder);
            escribirTituloConcepto(docBuilder, idConcepto, estructuraReporte.Roles[rolAExportar.Rol]);
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
            Table tablaActual = docBuilder.StartTable();
            docBuilder.ParagraphFormat.SpaceAfter = 5;
            docBuilder.ParagraphFormat.SpaceBefore = 5;

            docBuilder.InsertCell();
            establecerFuenteTituloCampo(docBuilder);
            escribirTituloConcepto(docBuilder, idConcepto, estructuraReporte.Roles[rolAExportar.Rol]);
            docBuilder.Write(": ");
            docBuilder.InsertCell();
            establecerFuenteValorCampo(docBuilder);
            escribirValorHecho(docBuilder, estructuraReporte, estructuraReporte.Roles[rolAExportar.Rol], idConcepto);
            docBuilder.EndRow();

            tablaActual.SetBorders(LineStyle.None, 0, Color.Black);
            tablaActual.SetBorder(BorderType.Horizontal, LineStyle.Single, .75, Color.DarkGray, true);
            tablaActual.SetBorder(BorderType.Bottom, LineStyle.Single, .75, Color.DarkGray, true);
            docBuilder.EndTable();
            //docBuilder.Writeln();
            

        }

        private void escribirAUnaColumnasConceptoValor(DocumentBuilder docBuilder, String idConcepto, IndiceReporteDTO rolAExportar, ReporteXBRLDTO estructuraReporte)
        {
            establecerFuenteTituloCampo(docBuilder);
            //docBuilder.Font.Size = TamanioLetraTituloConceptoNota;
            docBuilder.Font.Color = Color.Black;
            docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Left;
            escribirTituloConcepto(docBuilder, idConcepto, estructuraReporte.Roles[rolAExportar.Rol]);

            Table tablaActual = docBuilder.StartTable();
            docBuilder.ParagraphFormat.SpaceAfter = 1;
            docBuilder.ParagraphFormat.SpaceBefore = 1;
            docBuilder.InsertCell();
            docBuilder.Font.Size = 1;
            docBuilder.Font.Spacing = 1;
            tablaActual.SetBorders(LineStyle.None, 0, Color.Black);
            docBuilder.CellFormat.Borders.Top.Color = Color.DarkGray;
            docBuilder.CellFormat.Borders.Top.LineStyle = LineStyle.Single;
            docBuilder.CellFormat.Borders.Top.LineWidth = 1;
            docBuilder.EndRow();
            docBuilder.EndTable();

            establecerFuenteValorCampo(docBuilder);
            docBuilder.Font.Color = Color.Black;
            docBuilder.InsertParagraph();
            docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Left;
            escribirValorHecho(docBuilder, estructuraReporte, estructuraReporte.Roles[rolAExportar.Rol], idConcepto);

            tablaActual = docBuilder.StartTable();
            docBuilder.InsertCell();
            docBuilder.Font.Size = 1;
            docBuilder.Font.Spacing = 1;
            tablaActual.SetBorders(LineStyle.None, 0, Color.Black);
            docBuilder.CellFormat.Borders.Bottom.Color = Color.DarkGray;
            docBuilder.CellFormat.Borders.Bottom.LineStyle = LineStyle.Single;
            docBuilder.CellFormat.Borders.Bottom.LineWidth = 1;
            docBuilder.EndRow();
            docBuilder.EndTable();

            //docBuilder.Writeln();
            //docBuilder.Writeln();
           /* establecerFuenteTituloCampo(docBuilder);
            docBuilder.Font.Color = Color.Black;
            docBuilder.ParagraphFormat.Alignment = ParagraphAlignment.Left;
            escribirTituloConcepto(docBuilder, idConcepto, estructuraReporte.Roles[rolAExportar.Rol]);

            Table tablaActual = docBuilder.StartTable();
            docBuilder.ParagraphFormat.SpaceAfter = 2;
            docBuilder.ParagraphFormat.SpaceBefore = 0;
            
            docBuilder.InsertCell();
            establecerFuenteTituloCampo(docBuilder);
           
            tablaActual.SetBorders(LineStyle.None, 0, Color.Black);
            docBuilder.CellFormat.Borders.Top.Color = Color.DarkGray;
            docBuilder.CellFormat.Borders.Top.LineStyle = LineStyle.Single;
            docBuilder.CellFormat.Borders.Top.LineWidth = 2;
            
            
            establecerFuenteValorCampo(docBuilder);
            docBuilder.InsertParagraph();
            escribirValorHecho(docBuilder, estructuraReporte, estructuraReporte.Roles[rolAExportar.Rol], idConcepto);
            docBuilder.EndRow();
            tablaActual.SetBorders(LineStyle.None, 1, Color.Black);
            tablaActual.SetBorder(BorderType.Horizontal, LineStyle.Single, .75, Color.DarkGray, true);
            tablaActual.SetBorder(BorderType.Bottom, LineStyle.Single, .75, Color.DarkGray, true);
            docBuilder.EndTable();
            //docBuilder.Writeln();*/
            
        }
    }

}
