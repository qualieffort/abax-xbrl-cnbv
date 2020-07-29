using System;
using System.Collections;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using AbaxXBRL.Constantes;
using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.Entities;
using AbaxXBRLCore.Viewer.Application.Dto;
using AbaxXBRLCore.Viewer.Application.Model;
using Aspose.Words;
using NPOI.SS.UserModel;
using System.Reflection;
using AbaxXBRLCore.Common.Constants;
using System.Diagnostics;
using AbaxXBRLCore.Common.Dtos;

namespace AbaxXBRLCore.Viewer.Application.Import.Impl
{
    /// <summary>
    /// Implementa la funcionalidad de importador exportador de rol de documento en 
    /// base a una plantilla de captura o importación de excel o word
    /// </summary>
    /// <author>Emigdio Hernandez</author>
    public class ImportadorExportadorRolDocumentoPlantilla : IImportadorExportadorRolDocumento
    {
        /// <summary>
        /// Prefijo de el id de hecho de la celda
        /// </summary>
        private static string PREFIJO_CELDA_HECHO_PLANTILLA = "idHecho:";
        private static string PREFIJO_PLACEHOLDER_HECHO = "[";
        private static string POSFIJO_PLACEHOLDER_HECHO = "]";

        public void ImportarDatosDeHojaExcel(ISheet hojaAImportar, ISheet hojaPlantilla, DocumentoInstanciaXbrlDto instancia,
            string rol, ResumenProcesoImportacionExcelDto resumenImportacion, IDefinicionPlantillaXbrl plantillaDocumento)
        {
            var maxRow = hojaPlantilla.LastRowNum;
            var fechaDefault = plantillaDocumento.ObtenerVariablePorId("fecha_2015_01_01");
            var idiomaDefault = instancia.Taxonomia != null && instancia.Taxonomia.IdiomasTaxonomia != null && instancia.Taxonomia.IdiomasTaxonomia.Keys.Count > 0 ?
                                instancia.Taxonomia.IdiomasTaxonomia.Keys.First() : String.Empty;
            for (var iRenglon = 0; iRenglon <= maxRow; iRenglon++)
            {
                var renglon = hojaPlantilla.GetRow(iRenglon);
                if (renglon != null) {
                    var maxCol = renglon.LastCellNum;

                    for (var iCol = 0; iCol <= maxCol; iCol++)
                    {
                        var valorHechoPlantilla = ExcelUtil.ObtenerValorCelda(renglon, iCol);
                        if (!String.IsNullOrEmpty(valorHechoPlantilla) && valorHechoPlantilla.StartsWith(PREFIJO_CELDA_HECHO_PLANTILLA) &&
                            valorHechoPlantilla.Length > PREFIJO_CELDA_HECHO_PLANTILLA.Length)
                        {
                            var idHechoPlantilla = valorHechoPlantilla.Substring(PREFIJO_CELDA_HECHO_PLANTILLA.Length);

                            var valorCeldaImportar = ExcelUtil.ObtenerValorCelda(hojaAImportar, iRenglon, iCol);

                            if (!String.IsNullOrEmpty(valorCeldaImportar))
                            {

                                //Buscar el hecho de plantilla en el documento de instancia
                                var hechoInstancia =
                                    plantillaDocumento.BuscarHechoPlantillaEnHechosDocumentoInstancia(
                                        idHechoPlantilla);


                                //Si el hecho no existe crearlo en base a la plantilla
                                if (hechoInstancia == null)
                                {
                                    hechoInstancia =
                                        plantillaDocumento.CrearHechoAPartirDeIdDefinicionPlantilla(
                                            idHechoPlantilla);
                                    if (hechoInstancia != null)
                                    {
                                        hechoInstancia.NotasAlPie = ExcelUtil.ObtenerComentariosCelda(renglon, iCol, idiomaDefault);
                                        plantillaDocumento.InyectaHechoADocumentoInstancia(hechoInstancia);
                                    }
                                }
                                if (hechoInstancia != null)
                                {
                                    var conceptoImportar = instancia.Taxonomia.ConceptosPorId[hechoInstancia.IdConcepto];
                                    if (!UtilAbax.ActualizarValorHecho(conceptoImportar, hechoInstancia, valorCeldaImportar, fechaDefault))
                                    {
                                        resumenImportacion.AgregarErrorFormato(
                                            UtilAbax.ObtenerEtiqueta(instancia.Taxonomia, conceptoImportar.Id),
                                            hojaAImportar.SheetName,
                                            iRenglon.ToString(),
                                            iCol.ToString(),
                                            valorCeldaImportar);

                                    }
                                    else
                                    {
                                        resumenImportacion.TotalHechosImportados++;
                                        var hechoImportado = new InformacionHechoImportadoExcelDto()
                                        {
                                            IdConcepto = hechoInstancia.IdConcepto,
                                            IdHecho = hechoInstancia.Id,
                                            ValorImportado = valorCeldaImportar,
                                            HojaExcel = hojaAImportar.SheetName,
                                            Renglon = iRenglon,
                                            Columna = iCol
                                        };

                                        resumenImportacion.AgregarHechoImportado(hechoImportado, UtilAbax.ObtenerEtiqueta(instancia.Taxonomia, conceptoImportar.Id));

                                    }
                                }

                            }

                        }
                    }
                }
                
            }
            
        }

        public void ExportarDatosDeHojaExcel(ISheet hojaAExportar, ISheet hojaPlantilla, DocumentoInstanciaXbrlDto instancia, string rol, IDefinicionPlantillaXbrl plantillaDocumento, String idioma)
        {
            var numRenglones = hojaPlantilla.LastRowNum;
            for (var iRenglon = 0 ;iRenglon <= numRenglones ; iRenglon++)
            {
                var renglon = hojaPlantilla.GetRow(iRenglon);
                if(renglon != null){
                    var numCols = renglon.LastCellNum;

                    for (var iCol = 0; iCol <= numCols; iCol++)
                    {
                        var valorHechoPlantilla = ExcelUtil.ObtenerValorCelda(hojaPlantilla, iRenglon, iCol);
                        if (!String.IsNullOrEmpty(valorHechoPlantilla) &&
                            valorHechoPlantilla.StartsWith(PREFIJO_CELDA_HECHO_PLANTILLA) &&
                            valorHechoPlantilla.Length > PREFIJO_CELDA_HECHO_PLANTILLA.Length)
                        {
                            //Celda con valor de hecho plantilla
                            var idHechoPlantilla = valorHechoPlantilla.Substring(PREFIJO_CELDA_HECHO_PLANTILLA.Length);
                            var hechoInstancia = plantillaDocumento.BuscarHechoPlantillaEnHechosDocumentoInstancia(idHechoPlantilla);
                            if (hechoInstancia != null)
                            {
                                var concepto = instancia.Taxonomia.ConceptosPorId[hechoInstancia.IdConcepto];
                                //Si existe hecho, asignar valor

                                //Si la celda es de tipo boolean, transformar el valor de salida a si y no
                                var valorFinal = hechoInstancia.Valor;
                                if (concepto.TipoDatoXbrl.Contains(TiposDatoXBRL.BooleanItemType))
                                {
                                    if (!String.IsNullOrEmpty(valorFinal))
                                    {
                                        if (CommonConstants.CADENAS_VERDADERAS.Contains(valorFinal.Trim().ToLower()))
                                        {
                                            valorFinal = CommonConstants.SI;
                                        }
                                        else
                                        {
                                            valorFinal = CommonConstants.NO;
                                        }
                                    }
                                    else
                                    {
                                        valorFinal = CommonConstants.NO;
                                    }
                                }
                                ExcelUtil.AsignarValorCelda(hojaAExportar, iRenglon, iCol, valorFinal,
                                    concepto.EsTipoDatoNumerico ? CellType.Numeric : CellType.String, hechoInstancia);
                            }
                        }
                    }
                }
            }
        }

        public virtual void ExportarRolADocumentoWord(Document word, Section seccionActual, DocumentoInstanciaXbrlDto instancia, string rol, IDefinicionPlantillaXbrl plantillaDocumento, string claveIdioma)
        {
            var docBuilder = new DocumentBuilder(word);
            var handlerReemplazar = new ReemplazarHechoDocumentoHandler(instancia, plantillaDocumento, docBuilder);
            var rangoDoc = seccionActual.Range;
            foreach (var hechosPlantilla in plantillaDocumento.DefinicionesDeElementosPlantillaPorRol[rol].HechosPlantillaPorId)
            {
                var hechoInstancia =
                    plantillaDocumento.BuscarHechoPlantillaEnHechosDocumentoInstancia(hechosPlantilla.Key);
                if (hechoInstancia != null)
                {
                    //Usar el handler solo para text block
                    var concepto = instancia.Taxonomia.ConceptosPorId[hechoInstancia.IdConcepto];
                    if (concepto.TipoDato.Contains(TiposDatoXBRL.TextBlockItemType))
                    {
                        handlerReemplazar.IdHechoPlantilla = hechosPlantilla.Key;
                        handlerReemplazar.HechoInstancia = hechoInstancia;
                        rangoDoc.Replace(new Regex("(?:" + hechosPlantilla.Key + ")"), handlerReemplazar, false);
                    }
                    else if (concepto.EsTipoDatoNumerico)
                    {
                        var valor = "";
                        //Si es monetario, escribir el formato
                        if (concepto.TipoDatoXbrl.Contains(TiposDatoXBRL.MonetaryItemType))
                        {
                            valor = "$ ";
                        }
                        double valorDouble = 0;
                        if (Double.TryParse(hechoInstancia.Valor, NumberStyles.Any, CultureInfo.InvariantCulture,
                            out valorDouble))
                        {
                            valor += valorDouble.ToString("#,##0.00");
                        }
                        else
                        {
                            valor = hechoInstancia.Valor;
                        }
                        rangoDoc.Replace(hechosPlantilla.Key, valor, false, false);
                    }
                    else if (concepto.TipoDatoXbrl.Contains(TiposDatoXBRL.BooleanItemType))
                    {
                        //Si el concepto es de tipo boolean, transformar el valor de salida a si y no
                        var valorFinal = hechoInstancia.Valor;
                        if (!String.IsNullOrEmpty(valorFinal))
                        {
                            if (CommonConstants.CADENAS_VERDADERAS.Contains(valorFinal.Trim().ToLower()))
                            {
                                valorFinal = CommonConstants.SI;
                            }
                            else
                            {
                                valorFinal = CommonConstants.NO;
                            }
                        }
                        else
                        {
                            valorFinal = CommonConstants.NO;
                        }
                        rangoDoc.Replace(hechosPlantilla.Key, valorFinal, false, false);
                    }
                    else {
                        //rangoDoc.Replace(hechosPlantilla.Key, hechoInstancia.Valor, false, false);
                        handlerReemplazar.IdHechoPlantilla = hechosPlantilla.Key;
                        handlerReemplazar.HechoInstancia = hechoInstancia;
                        rangoDoc.Replace(new Regex("(?:" + hechosPlantilla.Key + ")"), handlerReemplazar, false);
                        
                    }
                }
                else
                {
                    rangoDoc.Replace(hechosPlantilla.Key, "", false, false);
                }
            }
                
            
        }
    }
    /// <summary>
    /// Clase para manejar el remplazo de valores de la plantilla de exportación por 
    /// el valor de un hecho
    /// </summary>
    public class ReemplazarHechoDocumentoHandler : IReplacingCallback
    {

        public ReemplazarHechoDocumentoHandler(DocumentoInstanciaXbrlDto instancia, IDefinicionPlantillaXbrl plantilla,DocumentBuilder docBuilder)
        {
            this._documentoInstancia = instancia;
            this._plantilla = plantilla;
            this._documentBuilder = docBuilder;
        }
        public string IdHechoPlantilla { get; set; }
        public AbaxXBRLCore.Viewer.Application.Dto.HechoDto HechoInstancia { get; set; }

        private DocumentoInstanciaXbrlDto _documentoInstancia = null;
        private IDefinicionPlantillaXbrl _plantilla = null;
        private DocumentBuilder _documentBuilder = null;
        public ReplaceAction Replacing(ReplacingArgs args){
            ArrayList runs = FindAndSplitMatchRuns(args);
            _documentBuilder.MoveTo((Run)runs[runs.Count - 1]);

            foreach (Run run in runs)
            {
                run.Remove();
            }
            var concepto = _documentoInstancia.Taxonomia.ConceptosPorId[HechoInstancia.IdConcepto];
            if (concepto.EsTipoDatoNumerico)
            {
                //Si es monetario, escribir el formato
                if (concepto.TipoDatoXbrl.Contains(TiposDatoXBRL.MonetaryItemType))
                {
                    _documentBuilder.Write("$ ");
                }
                double valorDouble = 0;
                if (Double.TryParse(HechoInstancia.Valor, NumberStyles.Any, CultureInfo.InvariantCulture,
                    out valorDouble))
                {
                    _documentBuilder.Write( valorDouble.ToString("#,##0.00"));
                }
                else
                {
                    _documentBuilder.Write(HechoInstancia.Valor);
                }
                
            }
            else if (
				concepto.TipoDato.Contains(
					TiposDatoXBRL.TextBlockItemType) ||
					this._plantilla.ConceptoSeComportaComoTextBlockItem(concepto.Id))
            {

                WordUtil.InsertHtml(_documentBuilder, concepto.Id+":"+HechoInstancia.Id, HechoInstancia.Valor, true);

            }
            else
            {
                _documentBuilder.Write(HechoInstancia.Valor);
            }

            
            // Signal to the replace engine to do nothing because we have already done all what we wanted.
            return ReplaceAction.Skip;
        }
        /// <summary>
        /// Finds and splits the match runs and returns them in an ArrayList.
        /// </summary>
        public ArrayList FindAndSplitMatchRuns(ReplacingArgs args)
        {
            // This is a Run node that contains either the beginning or the complete match.
            Node currentNode = args.MatchNode;

            // The first (and may be the only) run can contain text before the match, 
            // in this case it is necessary to split the run.
            if (args.MatchOffset > 0)
                currentNode = SplitRun((Run)currentNode, args.MatchOffset);

            // This array is used to store all nodes of the match for further removing.
            ArrayList runs = new ArrayList();

            // Find all runs that contain parts of the match string.
            int remainingLength = args.Match.Value.Length;
            while (
                (remainingLength > 0) &&
                (currentNode != null) &&
                (currentNode.GetText().Length <= remainingLength))
            {
                runs.Add(currentNode);
                remainingLength = remainingLength - currentNode.GetText().Length;

                // Select the next Run node. 
                // Have to loop because there could be other nodes such as BookmarkStart etc.
                do
                {
                    currentNode = currentNode.NextSibling;
                }
                while ((currentNode != null) && (currentNode.NodeType != NodeType.Run));
            }

            // Split the last run that contains the match if there is any text left.
            if ((currentNode != null) && (remainingLength > 0))
            {
                SplitRun((Run)currentNode, remainingLength);
                runs.Add(currentNode);
            }

            return runs;
        }
        /// <summary>
        /// Splits text of the specified run into two runs.
        /// Inserts the new run just after the specified run.
        /// </summary>
        private Run SplitRun(Run run, int position)
        {
            Run afterRun = (Run)run.Clone(true);
            afterRun.Text = run.Text.Substring(position);
            run.Text = run.Text.Substring(0, position);
            run.ParentNode.InsertAfter(afterRun, run);
            return afterRun;

        }
    }
}
