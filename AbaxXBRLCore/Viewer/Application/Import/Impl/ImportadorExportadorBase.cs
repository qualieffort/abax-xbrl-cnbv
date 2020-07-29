using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Text;
using AbaxXBRL.Constantes;
using AbaxXBRL.Taxonomia;
using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Viewer.Application.Dto;
using NPOI.SS.UserModel;
using NPOI.SS.Util;
using Spring.Context;
using ContextoDto = AbaxXBRLCore.Viewer.Application.Dto.ContextoDto;
using AbaxXBRLCore.Common.Util;
using AbaxXBRL.Taxonomia.Linkbases;

namespace AbaxXBRLCore.Viewer.Application.Import.Impl
{
    /// <summary>
    /// Clase base de los importadores con la funcionalidad común y funciones adicionales de utilería
    /// </summary>
    /// <author>Emigdio Hernandez</author>

    public abstract class ImportadorExportadorBase : IImportadorExportadorArchivoADocumentoInstancia, IApplicationContextAware
    {
        /// <summary>
        /// Elementos de la URL a reemplazar
        /// </summary>
        public static string _dosPuntos = ":";
        public static string _diagonal = "/";
        public static string _punto = ".";
        public static string _guion = "-";
        public static string _caracterReemplazo = "_";
        public static string _puntoXSD = ".xsd";
        /// <summary>
        /// Application context relacionado con la creación de este objeto 
        /// </summary>
        private IApplicationContext _appContext = null;
        public IApplicationContext ApplicationContext
        {
            set
            {
                _appContext = value;
            }
        }

        /// <summary>
        /// Obtiene el APP context actual de Spring
        /// </summary>
        /// <returns></returns>
        protected IApplicationContext ObtenerApplicationContext()
        {
            return _appContext;
        }

        public abstract ResultadoOperacionDto ImportarDatosExcel(Stream archivoEntrada, DocumentoInstanciaXbrlDto instancia, IDictionary<string, bool> conceptosDescartar = null, IList<string> hojasDescartar = null);
        public abstract ResultadoOperacionDto ImportarNotasWord(Stream archivoEntrada, DocumentoInstanciaXbrlDto instancia);
        public abstract ResultadoOperacionDto ExportarDocumentoExcel(DocumentoInstanciaXbrlDto instancia, String idioma, TaxonomiaDto taxonomia, IDictionary<string, bool> conceptosDescartar = null, IList<string> hojasDescartar = null);
        public abstract ResultadoOperacionDto ExportarDocumentoWord(DocumentoInstanciaXbrlDto instancia, string claveIdioma);
        public abstract ResultadoOperacionDto ExportarDocumentoPdf(DocumentoInstanciaXbrlDto instancia, string claveIdioma);
        public abstract ResultadoOperacionDto ExportarDocumentoHtml(DocumentoInstanciaXbrlDto instancia, string claveIdioma);
        public abstract ResultadoOperacionDto ObtenerPlantillaWord(string espacioNombresPrincipal);
        public abstract ResultadoOperacionDto ObtenerPlantillaExcel(string espacioNombresPrincipal, String idioma, TaxonomiaDto taxonomia, IDictionary<string, bool> conceptosDescartar = null, IList<string> hojasDescartar = null);

        /// <summary>
        /// Busca las celdas con contenido del tipo   idConcept:{nombre_concepto}[:{nombre_rol}]
        /// Este tipo de etiquetado indica que la celda lleva el nombre de un concepto y opcionalmente
        /// con cierto rol de etiqueta y que se debe de poner en el idioma indicado
        /// </summary>
        /// <param name="hojaExportar">Hoja a verificar</param>
        /// <param name="instancia">Documento de instancia actualmente exportado</param>
        /// <param name="idioma">Idioma deseado para las etiquetas</param>
        protected void ReemplazarEtiquetasEnHojaExcel(ISheet hojaExportar, ISheet hojaPantilla, TaxonomiaDto taxonomia, String idioma)
        {
            var ultimoRenglon = hojaExportar.LastRowNum;
            for (int iRenglon = hojaExportar.FirstRowNum; iRenglon <= ultimoRenglon; iRenglon++)
            {
                var renglon = hojaExportar.GetRow(iRenglon);
                if (renglon != null) {
                    var ultimaColumna = renglon.LastCellNum;
                    for (int iCol = renglon.FirstCellNum;ultimaColumna >=0 && iCol <= ultimaColumna; iCol++)
                    {
                        var valorCelda = ExcelUtil.ObtenerValorCelda(renglon, iCol);
                        if (valorCelda == null)
                        {
                            valorCelda = "";
                        }
                        else
                        {
                            valorCelda = valorCelda.Trim();
                        }

                        if (!String.IsNullOrEmpty(valorCelda) && valorCelda.StartsWith("idConcepto;"))
                        {
                            var componentesEtiqueta = valorCelda.Split(';');
                            if (componentesEtiqueta != null)
                            {
                                if (componentesEtiqueta.Length >= 2)
                                {
                                    string idConcepto = null;
                                    string rol = null;
                                    idConcepto = componentesEtiqueta[1];
                                    if (componentesEtiqueta.Length >= 3)
                                    {
                                        rol = componentesEtiqueta[2];
                                    }
                                    var etiquetaFinal = valorCelda;
                                    if (taxonomia.ConceptosPorId.ContainsKey(idConcepto))
                                    {
                                        var concepto = taxonomia.ConceptosPorId[idConcepto];
                                        etiquetaFinal = concepto.Nombre;
                                        if (concepto.Etiquetas.ContainsKey(idioma))
                                        {
                                            etiquetaFinal = concepto.Etiquetas[idioma][Etiqueta.RolEtiqueta].Valor;
                                            if (rol != null && concepto.Etiquetas[idioma].ContainsKey(rol))
                                            {
                                                etiquetaFinal = concepto.Etiquetas[idioma][rol].Valor;
                                            }
                                        }
                                    }
                                    renglon.GetCell(iCol).SetCellValue(etiquetaFinal);
                                }
                            }
                        }
                    }
                }
            }
        }
        /// <summary>
        /// Elimina los placeHolders de la plantilla de captura del tipo "idHecho:124-XXX" 
        /// </summary>
        /// <param name="hojaExportar">Hoja a procesar</param>
        protected void QuitarPlaceHolderHechoEnHojaExcel(ISheet hojaExportar) { 
            var ultimoRenglon = hojaExportar.LastRowNum;
            for (int iRenglon = hojaExportar.FirstRowNum; iRenglon <= ultimoRenglon; iRenglon++)
            {
                var renglon = hojaExportar.GetRow(iRenglon);
                if (renglon != null)
                {
                    var ultimaColumna = renglon.LastCellNum;
                    for (int iCol = renglon.FirstCellNum;ultimaColumna >=0 && iCol <= ultimaColumna; iCol++)
                    {
                        var valorCelda = ExcelUtil.ObtenerValorCelda(renglon, iCol);
                        if (valorCelda == null)
                        {
                            valorCelda = "";
                        }
                        else
                        {
                            valorCelda = valorCelda.Trim();
                        }

                        if (!String.IsNullOrEmpty(valorCelda) && valorCelda.StartsWith("idHecho:"))
                        {
                            renglon.GetCell(iCol).SetCellValue("");
                        }
                    }
                }
            }
        }

        public static Stream evaluaElementosDescartarPlantillaExcel(Stream plantillaBase, IDictionary<string, bool> conceptosDescartar, IList<string> hojasDescartar, TaxonomiaDto taxonomia) {
            if ((conceptosDescartar == null || conceptosDescartar.Count == 0) && (hojasDescartar == null || hojasDescartar.Count == 0))
            {
                return plantillaBase;
            }
            var conceptoDto = new ConceptoDto();

            var plantilla = WorkbookFactory.Create(plantillaBase);

            foreach (var nombreHoja in hojasDescartar) {
                var hoja = plantilla.GetSheet(nombreHoja);
                var indiceHoja = plantilla.GetSheetIndex(nombreHoja);

                if (indiceHoja != -1) {
                    plantilla.RemoveSheetAt(indiceHoja);
                }
            }

            for (int i = 0; i < plantilla.NumberOfSheets; i++){
                var hoja = plantilla.GetSheetAt(i);

                IList<int> renglonesEliminar = new List<int>();
                IList<int> columnasEliminar = new List<int>();
                var nombreHoja = plantilla.GetSheetName(i);

                //var nombreNuevaHoja = nombreHoja + "_New";
                //plantilla.CreateSheet(nombreNuevaHoja);
                

                var ultimoRenglon = hoja.LastRowNum;
                for (int iRenglon = hoja.FirstRowNum; iRenglon <= ultimoRenglon; iRenglon++)
                {
                    var renglon = hoja.GetRow(iRenglon);
                    if (renglon != null)
                    {
                        var ultimaColumna = renglon.LastCellNum;
                        for (int iCol = renglon.FirstCellNum; ultimaColumna >= 0 && iCol <= ultimaColumna; iCol++)
                        {
                            var valorCelda = ExcelUtil.ObtenerIdConceptoDeCelda(hoja, iRenglon, iCol);
                            if (valorCelda == null)
                            {
                                valorCelda = "";
                            }
                            else
                            {
                                valorCelda = valorCelda.Trim();
                            }

                            if (!String.IsNullOrEmpty(valorCelda))
                            {
                                bool contieneConcepto = false;

                                if (conceptosDescartar.TryGetValue(valorCelda, out contieneConcepto) && iCol == 0){
                                    renglonesEliminar.Add(iRenglon);

                                    if (taxonomia.ConceptosPorId.TryGetValue(valorCelda, out conceptoDto))
                                    {
                                        if (conceptoDto.EsMiembroDimension == null || conceptoDto.EsMiembroDimension.Value)
                                        {
                                            var valorCeldaSiguiente = ExcelUtil.ObtenerIdConceptoDeCelda(hoja, iRenglon + 1, iCol);
                                            if (valorCeldaSiguiente == null || valorCeldaSiguiente.Equals("")) {
                                                renglonesEliminar.Add(iRenglon + 1);
                                                renglonesEliminar.Add(iRenglon + 2);
                                            }
                                        }
                                    }
                                }

                                if (conceptosDescartar.TryGetValue(valorCelda, out contieneConcepto) && iCol > 0)
                                {
                                    columnasEliminar.Add(iCol);
                                    hoja.GetRow(iRenglon).GetCell(iCol).SetCellValue("");
                                }


                            }
                        }
                    }
                }

                for (int indexListaEliminar = (renglonesEliminar.Count - 1); indexListaEliminar >= 0; indexListaEliminar--)
                {
                    var numRenglonEliminar = renglonesEliminar[indexListaEliminar];
                    if (numRenglonEliminar == hoja.LastRowNum)
                    {
                        hoja.CreateRow(numRenglonEliminar + 1);
                    }
                    if ((numRenglonEliminar) < hoja.LastRowNum)
                    {
                        hoja.ShiftRows(numRenglonEliminar + 1, hoja.LastRowNum, -1);
                    }
                }
                

                //for (int renglonEliminar = renglonesEliminar.Count; renglonEliminar >= 0; renglonEliminar--) {
                //    hoja.ShiftRows(renglonEliminar + 1, hoja.LastRowNum, -1);
                //}
            }



            MemoryStream memoryStream = new MemoryStream();
            plantilla.Write(memoryStream);
            //Workaround de NPOI, de los el flujo de salida de write se encuentra cerrado
            MemoryStream ms = new MemoryStream(memoryStream.ToArray());
            return ms;
        }
        /// <summary>
        /// Realiza los reemplazos necesarios para obtener el ID de bean de spring con el que se encuentra una taxonomía en la declaración
        /// de plantillas de Spring
        /// </summary>
        /// <param name="entryPointNamespace">Espacio de nombres</param>
        /// <returns>ID del bean de spring</returns>
        public static String ObtenerPlantillaTaxonomiaId(String entryPointNamespace) {
            return entryPointNamespace.Replace(_puntoXSD, String.Empty).Replace(_guion, _caracterReemplazo).Replace(_dosPuntos, _caracterReemplazo).
                        Replace(_diagonal, _caracterReemplazo).Replace(_punto, _caracterReemplazo);
        }
    }
}
