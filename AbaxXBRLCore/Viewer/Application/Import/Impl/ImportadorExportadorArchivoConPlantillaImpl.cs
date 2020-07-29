using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Globalization;
using System.IO;
using System.Reflection;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading;
using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.Viewer.Application.Dto;
using AbaxXBRLCore.Viewer.Application.Model;
using Aspose.Words;
using Aspose.Words.Saving;
using NPOI.SS.Formula.Functions;
using NPOI.SS.UserModel;
using NPOI.XSSF.UserModel;
using AbaxXBRLCore.Services;
using Spring.Util;
using AbaxXBRL.Taxonomia.Linkbases;
using System.Collections;
using System.Configuration;
using System.Net;

namespace AbaxXBRLCore.Viewer.Application.Import.Impl
{

    /// <summary>
    /// Implementación de un importador de archivos a documento de instancia mediante el uso de plantillas de captura
    /// </summary>
    /// <author>Emigdio Hernandez</author>
    public class ImportadorExportadorArchivoConPlantillaImpl : ImportadorExportadorBase
    {
        
        const string PATRON_ETIQUETA_NOTAS = @"\[XBRL-\S+\]";
        /// <summary>
        /// Caracter con el que se reemplazan los elementos a reemplazar
        /// </summary>
       
        /// <summary>
        /// Importador genérico basado en plantilla
        /// </summary>
        public IImportadorExportadorRolDocumento ImportadorRolPlantillaGenerico { get; set; }

        /// <summary>
        /// El servicio para las operaciones de carga, validación y guardado de documentos instancia XBRL
        /// </summary>
        public IDocumentoInstanciaService DocumentoInstanciaService { get; set; }
        
      

        public override ResultadoOperacionDto ImportarDatosExcel(Stream archivoEntrada, DocumentoInstanciaXbrlDto instancia, IDictionary<string, bool> conceptosDescartar = null, IList<string> hojasDescartar = null)
        {
            var res = new ResultadoOperacionDto();
            var resumenProceso = new ResumenProcesoImportacionExcelDto() { 
                HechosImportados = new Dictionary<string,List<InformacionHechoImportadoExcelDto>>(),
                HechosSobreescritos = new List<InformacionHechoSobreescritoDto>(),
                InformeErrores = new List<InformeErrorImportacion>(),
                TotalHechosImportados = 0
            };
            res.Resultado = true;


            string entryPointTax = instancia.EspacioNombresPrincipal;
            
            try
            {
                //Verificar si existe la plantilla para la taxonomía
                if (entryPointTax != null)
                {
                    entryPointTax = entryPointTax.Replace(_puntoXSD,String.Empty).Replace(_guion,_caracterReemplazo).Replace(_dosPuntos,_caracterReemplazo).
                        Replace(_diagonal,_caracterReemplazo).Replace(_punto,_caracterReemplazo);
                    if (ObtenerApplicationContext().ContainsObject(entryPointTax))
                    {
                        var plantillaDocumento = (IDefinicionPlantillaXbrl)ObtenerApplicationContext().GetObject(entryPointTax);
                        plantillaDocumento.Inicializar(instancia);
                        if (plantillaDocumento.ObtenerRutaPlantillaExcel() != null)
                        {
                            using (
                            var streamPlantilla =
                                Assembly.GetExecutingAssembly()
                                    .GetManifestResourceStream(plantillaDocumento.ObtenerRutaPlantillaExcel()))
                            {
                                if (streamPlantilla != null){

                                    Stream streamPlantillaEvaluada = evaluaElementosDescartarPlantillaExcel(streamPlantilla, conceptosDescartar, hojasDescartar, instancia.Taxonomia);
                                    
                                    var workBookImportar = WorkbookFactory.Create(archivoEntrada);
                                    var workBookPlantilla = WorkbookFactory.Create(streamPlantillaEvaluada);

                                    if (plantillaDocumento.ValidarPlantillaExcelImportacion(workBookImportar,resumenProceso)) {
                                        for (var iItem = 0; iItem < workBookPlantilla.NumberOfSheets; iItem++)
                                        {
                                            var hojaImportar =
                                                workBookImportar.GetSheet(workBookPlantilla.GetSheetAt(iItem).SheetName);
                                            if (hojaImportar != null)
                                            {
                                                ImportarHojaDeCalculo(hojaImportar, workBookPlantilla.GetSheetAt(iItem), instancia, resumenProceso, plantillaDocumento);
                                            }
                                        }
                                    }
                                    
                                }
                                
                            }
                        }

                        
                    }

                }
                
               
            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex.StackTrace);
                resumenProceso.InformeErrores.Add(new InformeErrorImportacion()
                {
                    Mensaje = "Ocurrió un error al importar el archivo:" + ex.Message
                });
                res.Resultado = false;
            }
            res.InformacionExtra = resumenProceso;

            return res;
        }

        public override ResultadoOperacionDto ImportarNotasWord(Stream archivoEntrada, DocumentoInstanciaXbrlDto instancia)
        {
            var resultadoOperacion = new ResultadoOperacionDto();
            var informeErrores = new List<InformeErrorImportacion>();

            string entryPointTax = instancia.EspacioNombresPrincipal;

            if (entryPointTax != null)
            {
                entryPointTax = entryPointTax
                    .Replace(_puntoXSD, String.Empty)
                    .Replace(_guion, _caracterReemplazo)
                    .Replace(_dosPuntos, _caracterReemplazo)
                    .Replace(_diagonal, _caracterReemplazo)
                    .Replace(_punto, _caracterReemplazo);
                if (ObtenerApplicationContext().ContainsObject(entryPointTax))
                {
                    var plantillaDocumento = (IDefinicionPlantillaXbrl)ObtenerApplicationContext().GetObject(entryPointTax);
                    plantillaDocumento.Inicializar(instancia);

                    resultadoOperacion = ImportarNotasDeDocumentoWord(archivoEntrada);
                    IDictionary<string, string> mapeoContenidoNotaArchivo = (IDictionary<string, string>)resultadoOperacion.InformacionExtra;

                    if (mapeoContenidoNotaArchivo != null)
                    {
                        foreach (string idPlantillaDocumento in mapeoContenidoNotaArchivo.Keys)
                        {
                            if (mapeoContenidoNotaArchivo.ContainsKey(idPlantillaDocumento))
                            {
                                var contenidoNota = mapeoContenidoNotaArchivo[idPlantillaDocumento];
                                var idHechoPlantilla = plantillaDocumento.ObtenerIdHechoPlantillaPorIdDocumentoNota(idPlantillaDocumento);
                                if (idHechoPlantilla != null)
                                {
                                    var hechoInstancia = plantillaDocumento.BuscarHechoPlantillaEnHechosDocumentoInstancia(idHechoPlantilla);
                                    //Si el hecho no existe crearlo en base a la plantilla
                                    if (hechoInstancia == null)
                                    {
                                        hechoInstancia = plantillaDocumento.CrearHechoAPartirDeIdDefinicionPlantilla(idHechoPlantilla);
                                    }
                                    if (hechoInstancia != null)
                                    {
                                    hechoInstancia.Valor = StringUtils.IsNullOrEmpty(contenidoNota) ? hechoInstancia.Valor : contenidoNota;
                                }
                                    else
                                    {
                                        LogUtil.Error("No fué posible generar el hecho para el identificador de palntilla \"" + idHechoPlantilla + "\"");
                                    }
                                    
                                }
                                
                            }
                        }
                        resultadoOperacion.InformacionExtra = instancia;
                        resultadoOperacion.Resultado = true;
                    }
                }
            }
            return resultadoOperacion;
        }


        public override ResultadoOperacionDto ExportarDocumentoWord(DocumentoInstanciaXbrlDto instancia, string claveIdioma)
        {
            var res = new ResultadoOperacionDto();
            res.InformacionExtra = new Dictionary<string, object>();
            try
            {
                var documentoExportar = ExportarInternoADocumentoWord(instancia,claveIdioma);
                using (var memoryStreamSalida = new MemoryStream())
                {
                    var currentCulture = Thread.CurrentThread.CurrentCulture;
                    Thread.CurrentThread.CurrentCulture = new CultureInfo("en-US");
                    documentoExportar.Save(memoryStreamSalida, SaveFormat.Docx);
                    Thread.CurrentThread.CurrentCulture = currentCulture;
                    (res.InformacionExtra as Dictionary<string, object>).Add("archivo", memoryStreamSalida.ToArray());
                    res.Resultado = true;
                }
            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
                res.Resultado = false;
                res.Mensaje = ex.Message;
            }
            return res;
        }

        public override ResultadoOperacionDto ExportarDocumentoPdf(DocumentoInstanciaXbrlDto instancia, string claveIdioma)
        {
            var res = new ResultadoOperacionDto();
            res.InformacionExtra = new Dictionary<string, object>();
            try
            {
                var documentoExportar = ExportarInternoADocumentoWord(instancia, claveIdioma);

                using (var memoryStreamSalida = new MemoryStream()) 
                {
                    var currentCulture = Thread.CurrentThread.CurrentCulture;
                    Thread.CurrentThread.CurrentCulture = new CultureInfo("en-US");
                    documentoExportar.Save(memoryStreamSalida, SaveFormat.Pdf);
                    Thread.CurrentThread.CurrentCulture = currentCulture;
                    (res.InformacionExtra as Dictionary<string, object>).Add("archivo", memoryStreamSalida.ToArray());
                    res.Resultado = true;
                }
            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
                res.Resultado = false;
                res.Mensaje = ex.Message;
            }
            return res;
        }

        public override ResultadoOperacionDto ExportarDocumentoHtml(DocumentoInstanciaXbrlDto instancia, string claveIdioma)
        {
            var res = new ResultadoOperacionDto();
            res.InformacionExtra = new Dictionary<string, object>();
            try
            {
                var documentoExportar = ExportarInternoADocumentoWord(instancia, claveIdioma);
                using (var memoryStreamSalida = new MemoryStream())
                {
                    var currentCulture = Thread.CurrentThread.CurrentCulture;
                    Thread.CurrentThread.CurrentCulture = new CultureInfo("en-US");
                    var saveOptions = new HtmlSaveOptions
                    {
                        ExportImagesAsBase64 = true,
                        ExportHeadersFootersMode = ExportHeadersFootersMode.None,
                        PrettyFormat = true,
                        CssStyleSheetType = CssStyleSheetType.Inline,
                        Encoding = Encoding.UTF8
                    };
                    documentoExportar.Save(memoryStreamSalida, saveOptions);
                    Thread.CurrentThread.CurrentCulture = currentCulture;
                    (res.InformacionExtra as Dictionary<string, object>).Add("archivo", memoryStreamSalida.ToArray());
                    res.Resultado = true;
                }
            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
                res.Resultado = false;
                res.Mensaje = ex.Message;
            }
            return res;
        }

        private Document ExportarInternoADocumentoWord(DocumentoInstanciaXbrlDto instancia,string claveIdioma)
        {
            Document res = null;
            string entryPointTax = instancia.EspacioNombresPrincipal;
                //Verificar si existe la plantilla para la taxonomía
                if (entryPointTax != null)
                {
                    entryPointTax = entryPointTax.Replace(_puntoXSD, String.Empty).Replace(_guion, _caracterReemplazo).Replace(_dosPuntos, _caracterReemplazo).
                        Replace(_diagonal, _caracterReemplazo).Replace(_punto, _caracterReemplazo);
                    if (ObtenerApplicationContext().ContainsObject(entryPointTax))
                    {
                        var plantillaDocumento = (IDefinicionPlantillaXbrl)ObtenerApplicationContext().GetObject(entryPointTax);
                        plantillaDocumento.Inicializar(instancia);
                        if (plantillaDocumento.ObtenerRutaPlantillaExportacionWord(claveIdioma) != null)
                        {
                            using (var streamPlantilla = Assembly.GetExecutingAssembly().GetManifestResourceStream(plantillaDocumento.ObtenerRutaPlantillaExportacionWord(claveIdioma)))
                            {
                                if (streamPlantilla != null)
                                {
                                    //Cargar el documento de WORD

                                    var documentoExportar = new Document(streamPlantilla);

                                    //Sustituir las variables de plantilla

                                    foreach (var keyValVar in plantillaDocumento.ObtenerVariablesDocumentoInstancia())
                                    {
                                        documentoExportar.Range.Replace("#" + keyValVar.Key, keyValVar.Value, false, false);
                                    }

                                    //Iterar los roles de la plantilla
                                    foreach (var rol in plantillaDocumento.DefinicionesDeElementosPlantillaPorRol.Keys)
                                    {
                                        ExportarRolADocumentoWord(documentoExportar, instancia, plantillaDocumento, rol, claveIdioma);
                                    }
                                    //Eliminar secciones vacías
                                    var seccionesEliminar = new List<Section>();
                                    foreach (Section seccion in documentoExportar.Sections)
                                    {
                                        if (seccion.ChildNodes == null || seccion.ChildNodes.Count == 0)
                                        {
                                            seccionesEliminar.Add(seccion);
                                        }
                                    }
                                    foreach (var section in seccionesEliminar)
                                    {
                                        documentoExportar.Sections[documentoExportar.IndexOf(section)].Remove();
                                    }
                                    res = documentoExportar;
                                }

                            }
                        }


                    }

                }

            return res;
        }
        /// <summary>
        /// Invoca la exportación a documento de WORD del rol actual en el exportador correspondiente
        /// </summary>
        /// <param name="documentoExportar">Documento de word que se está llenando</param>
        /// <param name="instancia">Documento de instancia con datos de origen</param>
        /// <param name="plantillaDocumento">Plantilla actual del documento de instancia</param>
        /// <param name="rol">Rol exportado</param>
        private void ExportarRolADocumentoWord(Document documentoExportar, DocumentoInstanciaXbrlDto instancia, IDefinicionPlantillaXbrl plantillaDocumento, string rol, string claveIdioma)
        {
            if (rol != null)
            {
                try
                {
                    var iSeccion = plantillaDocumento.ObtenerIndiceSeccionWordPorRol(rol);
                    Section seccionExportar = null;
                    if (iSeccion != null)
                    {
                        seccionExportar = documentoExportar.Sections[Int32.Parse(iSeccion)];
                    }
                    if (seccionExportar != null)
                    {
                        //Si el rol tiene implementación específica utilizarla, si no, utilizar el importador genérico de plantilla
                        var idSpringImportador = plantillaDocumento.ObtenerIdSpringDefinicionElementosPlantillaDeRol(rol);
                        if (ObtenerApplicationContext().ContainsObject("importador_" + idSpringImportador))
                        {
                            var importadorRol = (IImportadorExportadorRolDocumento)ObtenerApplicationContext().GetObject("importador_" + idSpringImportador);
                            importadorRol.ExportarRolADocumentoWord(documentoExportar, seccionExportar, instancia, rol, plantillaDocumento, claveIdioma);
                        }
                        else
                        {
                            ImportadorRolPlantillaGenerico.ExportarRolADocumentoWord(documentoExportar, seccionExportar, instancia, rol, plantillaDocumento, claveIdioma);
                        }
                    }
                    
                }
                catch (Exception ex)
                {
                    LogUtil.Error(ex);
                }
            }
        }

        public override ResultadoOperacionDto ObtenerPlantillaWord(string espacioNombresPrincipal)
        { 
            var resultadoOperacion = new ResultadoOperacionDto();
            string entryPointTax = espacioNombresPrincipal;
            try
            {
                if (entryPointTax != null)
                {
                    entryPointTax = entryPointTax.Replace(_puntoXSD, String.Empty).Replace(_guion, _caracterReemplazo).Replace(_dosPuntos, _caracterReemplazo).
                            Replace(_diagonal, _caracterReemplazo).Replace(_punto, _caracterReemplazo);

                    if (ObtenerApplicationContext().ContainsObject(entryPointTax))
                    {
                        var plantillaDocumento = (IDefinicionPlantillaXbrl)ObtenerApplicationContext().GetObject(entryPointTax);

                        if (plantillaDocumento.ObtenerRutaPlantillaNotasWord() != null)
                        {
                            using (var streamPlantilla = Assembly.GetExecutingAssembly().GetManifestResourceStream(plantillaDocumento.ObtenerRutaPlantillaNotasWord()))
                            {
                                using (StreamReader reader = new StreamReader(streamPlantilla))
                                {
                                    MemoryStream memoryStream = new MemoryStream();
                                    reader.BaseStream.CopyTo(memoryStream);
                                    resultadoOperacion.InformacionExtra = memoryStream;
                                    resultadoOperacion.Resultado = true;
                                }
                            }
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
                resultadoOperacion.Resultado = false;
            }

            return resultadoOperacion;

        }

        public override ResultadoOperacionDto ObtenerPlantillaExcel(string espacioNombresPrincipal, String idioma, TaxonomiaDto taxonomia, IDictionary<string, bool> conceptosDescartar = null, IList<string> hojasDescartar = null)
        {
            var resultadoOperacion = new ResultadoOperacionDto();

            string entryPointTax = espacioNombresPrincipal;

            try
            {

                if (entryPointTax != null)
                {
                    entryPointTax = entryPointTax.Replace(_puntoXSD, String.Empty).Replace(_guion, _caracterReemplazo).Replace(_dosPuntos, _caracterReemplazo).
                            Replace(_diagonal, _caracterReemplazo).Replace(_punto, _caracterReemplazo);

                    if (ObtenerApplicationContext().ContainsObject(entryPointTax))
                    {
                        var plantillaDocumento = (IDefinicionPlantillaXbrl)ObtenerApplicationContext().GetObject(entryPointTax);

                        if (plantillaDocumento.ObtenerRutaPlantillaExcel() != null)
                        {
                            using (var streamPlantilla = Assembly.GetExecutingAssembly().GetManifestResourceStream(plantillaDocumento.ObtenerRutaPlantillaExcel()))
                            {
                                //Preprocesar la plantilla de salida

                                Stream plantillaStream = evaluaElementosDescartarPlantillaExcel(streamPlantilla, conceptosDescartar, hojasDescartar, taxonomia);
                                var plantilla = WorkbookFactory.Create(plantillaStream);



                                for (int iSheet = 0; iSheet < plantilla.NumberOfSheets; iSheet++ )
                                {
                                    ReemplazarEtiquetasEnHojaExcel(plantilla.GetSheetAt(iSheet), plantilla.GetSheetAt(iSheet), taxonomia, idioma);
                                    QuitarPlaceHolderHechoEnHojaExcel(plantilla.GetSheetAt(iSheet));
                                }
                                MemoryStream memoryStream = new MemoryStream();
                                plantilla.Write(memoryStream);
                                //Workaround de NPOI, de los el flujo de salida de write se encuentra cerrado
                                MemoryStream ms = new MemoryStream(memoryStream.ToArray());
                                resultadoOperacion.InformacionExtra = ms;
                                resultadoOperacion.Resultado = true;
                                plantilla = null;
                            }
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                resultadoOperacion.Resultado = false;
                resultadoOperacion.Mensaje = ex.Message;
            }

            return resultadoOperacion;
        }

        private ResultadoOperacionDto ImportarNotasDeDocumentoWord(Stream archivoEntrada)
        {
            var resultado = new ResultadoOperacionDto();

            try
            {
                var contenido = "";

                var doc = new Document(archivoEntrada);

                resultado = WordUtil.ValidarVersionPlantilla(doc);

                if (!resultado.Resultado)
                {
                    return resultado;
                }

                resultado = WordUtil.ValidarTamanioYOrientacion(doc);

                if (resultado.Resultado)
                {
                var saveOptions = new HtmlSaveOptions
                {
                    ExportImagesAsBase64 = true,
                    ExportHeadersFootersMode = ExportHeadersFootersMode.None,
                    PrettyFormat = true,
                    CssStyleSheetType = CssStyleSheetType.Inline,
                    Encoding = Encoding.UTF8
                };
                var htmlStream = new MemoryStream();
                doc.Save(htmlStream, saveOptions);
                contenido = Encoding.UTF8.GetString(htmlStream.ToArray());
                htmlStream.Close();
                    resultado.InformacionExtra = ObtenerNotasDeHtml(contenido);
                }
            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
                resultado.Resultado = false;
                resultado.Mensaje = "Ocurrió un error al importar documento de word:" + ex.Message;
            }

            return resultado;
        }

        /// <summary>
        /// Separa y organiza las notas definidas en un documento HTML donde existen los marcadores de
        /// conceptos identificados con XBRL-#### por plantilla de taxonomia
        /// 
        /// </summary>
        /// <param name="contenido">Contenido HTML de la nota</param>
        /// <returns></returns>
        private Dictionary<string, string> ObtenerNotasDeHtml(string contenido)
        {
            var headerConceptoArchivo = new Dictionary<string, int>();

            var coincidencias = Regex.Match(contenido, PATRON_ETIQUETA_NOTAS);

            while (coincidencias.Success)
            {
                if (!headerConceptoArchivo.ContainsKey(coincidencias.Value))
                {
                    headerConceptoArchivo.Add(coincidencias.Value, coincidencias.Index);
                }

                coincidencias = coincidencias.NextMatch();
            }


            var notas = new Dictionary<string, string>();
            //Valida un paso adelante para agregar el contenido a la etiqueta de concepto
            string idEtiquetaConceptoXbrlDocumentoContenido = null;

            foreach (var iniciaContenidoConcepto in headerConceptoArchivo)
            {
                var idEtiquetaConceptoXbrlDocumento = iniciaContenidoConcepto.Key.Replace("[", "").Replace("]", "");

                if (!notas.ContainsKey(idEtiquetaConceptoXbrlDocumento))
                {
                    if (idEtiquetaConceptoXbrlDocumentoContenido != null)
                    {
                        string contenidoNota = ObtenerContenidoNota(headerConceptoArchivo[idEtiquetaConceptoXbrlDocumentoContenido], iniciaContenidoConcepto.Value, contenido);
                        idEtiquetaConceptoXbrlDocumentoContenido = idEtiquetaConceptoXbrlDocumentoContenido.Replace("[", "").Replace("]", "");
                        if (tieneInformacionNota(contenidoNota))
                        {
                            notas[idEtiquetaConceptoXbrlDocumentoContenido] = contenidoNota;
                        }
                    }

                    idEtiquetaConceptoXbrlDocumentoContenido = iniciaContenidoConcepto.Key;
                    notas.Add(idEtiquetaConceptoXbrlDocumento, "");
                }

            }
            //Se obtiene la informacion de la última nota.
            string contenidoNotaFinal = ObtenerContenidoNota(headerConceptoArchivo[idEtiquetaConceptoXbrlDocumentoContenido], contenido.Length, contenido);
            idEtiquetaConceptoXbrlDocumentoContenido = idEtiquetaConceptoXbrlDocumentoContenido.Replace("[", "").Replace("]", "");
            if (tieneInformacionNota(contenidoNotaFinal))
            {
                notas[idEtiquetaConceptoXbrlDocumentoContenido] = contenidoNotaFinal;
            }



            return notas;
        }

        /// <summary>
        /// Valida si la nota enviada en formato html tiene información para reemplazar el hecho
        /// </summary>
        /// <param name="contenido">Informacion del contenido</param>
        private bool tieneInformacionNota(string contenido)
        {
            string contenidoValidarInformacion = contenido.Replace("&#xa0;", "").Replace("\t", "").Replace("\t", "").Replace("\r", "").Replace("\n", "");

            //Verificar etiquetas de <img
            if (contenidoValidarInformacion.Contains("<img"))
            {
                return true;
            }
            contenidoValidarInformacion = WebUtility.HtmlDecode(Regex.Replace(contenidoValidarInformacion, "<[^>]*(>|$)", string.Empty)).Trim();

            if (!StringUtils.IsNullOrEmpty(contenidoValidarInformacion))
            {
                return true;
            }


            return false;
        }

        
        /// <summary>
        /// Obtiene una nota del contenido del concepto desde el indice de apertura e indice de termino del contenido
        /// </summary>
        /// <param name="indexApertura">Indice de apertura del concepto en el documento</param>
        /// <param name="indexCierre">Indice de cierre del siguiente concepto en el documento</param>
        /// <param name="contenido">Cadena del contenido de todo el documento</param>
        /// <returns>Cadena html con la nota del concepto</returns>
        private string ObtenerContenidoNota(int indexApertura, int indexCierre, string contenido)
        {
            string contenidoNota = "";



            if (indexApertura < indexCierre)
            {
                var seccion = contenido.Substring(indexApertura, indexCierre - indexApertura);

                //Desde el inicio de la cadena, buscar la primera apertura de elemento 
                //var primerElemento = Regex.Match(seccion, @"\<[a-z|A-Z]{1,}");
                var primerElemento = Regex.Match(seccion, @"\<p\s");
                int indiceRealInicio = 0;
                if (primerElemento.Success)
                {
                    indiceRealInicio = primerElemento.Index;
                }

                if (seccion.LastIndexOf("[Formato:") > 0 || seccion.LastIndexOf("[Contexto:") > 0)
                {
                    var indiceSeparadorSeccion = seccion.LastIndexOf("[Formato:") > 0
                        ? seccion.LastIndexOf("[Formato:") 
                        : seccion.LastIndexOf("[Contexto:");
                    seccion = seccion.Substring(0, indiceSeparadorSeccion);
                }


                int indiceRealFin = seccion.LastIndexOf("</", StringComparison.Ordinal);
                if (indiceRealFin > 0)
                {
                    int indiceTmpFin = seccion.IndexOf('>', indiceRealFin);
                    if (indiceTmpFin > 0)
                    {
                        indiceRealFin = indiceTmpFin + 1;
                    }
                }
                if (indiceRealFin < indiceRealInicio)
                {
                    contenidoNota = String.Empty;
                }
                else
                {
                    contenidoNota = seccion.Substring(indiceRealInicio, indiceRealFin - indiceRealInicio);
                }
            }
            
            contenidoNota = eliminarContenidoNotaNuevoFormato(contenidoNota);
            contenidoNota = WordUtil.EliminarSaltosSeccion(contenidoNota);

            return contenidoNota;
        }

        /// <summary>
        /// Valida si el contenido de la nota se le asigno el header de un nuevo formato del tipo "Formato: [" y elimina el contenido basura
        /// </summary>
        /// <param name="contenidoNota">Contenido de la nota a evaluar</param>
        /// <returns>Cadena sin el valor del formato</returns>
        private string eliminarContenidoNotaNuevoFormato(string contenidoNota)
        {

            var formatoSiguiente = Regex.Match(contenidoNota, @"Formato: \[");
            if (formatoSiguiente.Success)
            {
                contenidoNota = contenidoNota.Substring(0, formatoSiguiente.Index);
            }
            return contenidoNota;
        }

        

        public override ResultadoOperacionDto ExportarDocumentoExcel(DocumentoInstanciaXbrlDto instancia, String idioma, TaxonomiaDto taxonomia, IDictionary<string, bool> conceptosDescartar = null, IList<string> hojasDescartar = null)
        {
            var res = new ResultadoOperacionDto();
            res.InformacionExtra = new Dictionary<string, object>();
            var informeErrores = new List<InformeErrorImportacion>();
            string entryPointTax = instancia.EspacioNombresPrincipal;

            var memoryStreamNew = new MemoryStream();
            

            try
            {
                //Verificar si existe la plantilla para la taxonomía
                if (entryPointTax != null)
                {
                    entryPointTax = entryPointTax.Replace(_puntoXSD, String.Empty).Replace(_guion, _caracterReemplazo).Replace(_dosPuntos, _caracterReemplazo).
                        Replace(_diagonal, _caracterReemplazo).Replace(_punto, _caracterReemplazo);
                    if (ObtenerApplicationContext().ContainsObject(entryPointTax))
                    {
                        var plantillaDocumento = (IDefinicionPlantillaXbrl)ObtenerApplicationContext().GetObject(entryPointTax);
                        if (plantillaDocumento.ObtenerRutaPlantillaExcel() != null)
                        {
                            plantillaDocumento.Inicializar(instancia);
                            using (var streamPlantilla = Assembly.GetExecutingAssembly().GetManifestResourceStream(plantillaDocumento.ObtenerRutaPlantillaExcel()))
                            {
                                if (streamPlantilla != null)
                                {
                                    using (var streamExcelCaptura = Assembly.GetExecutingAssembly().GetManifestResourceStream(plantillaDocumento.ObtenerRutaPlantillaExcel()))
                                    {
                                        if (streamExcelCaptura != null)
                                        {


                                            XSSFWorkbook workBookExportar = null;

                                            XSSFWorkbook workBookPlantilla = null;


                                            if (conceptosDescartar != null && hojasDescartar != null)
                                            {
                                                Stream streamExcelCapturaDepurado = evaluaElementosDescartarPlantillaExcel(streamPlantilla, conceptosDescartar, hojasDescartar, taxonomia);
                                                workBookExportar = new XSSFWorkbook(streamExcelCapturaDepurado);

                                                Stream streamPlantillaDepurado = evaluaElementosDescartarPlantillaExcel(streamExcelCaptura, conceptosDescartar, hojasDescartar, taxonomia);
                                                workBookPlantilla = new XSSFWorkbook(streamPlantillaDepurado);
                                            }

                                            else {
                                                workBookExportar = new XSSFWorkbook(streamExcelCaptura);

                                                workBookPlantilla = new XSSFWorkbook(streamPlantilla);
                                            }



                                            
                                            
                                            for (var iItem = 0; iItem < workBookPlantilla.Count; iItem++)
                                            {
                                                var hojaExportar = workBookExportar.GetSheet(workBookPlantilla.GetSheetAt(iItem).SheetName);
                                                if (hojaExportar != null)
                                                {
                                                    ExportarHojaDeCalculo(hojaExportar, workBookPlantilla.GetSheetAt(iItem), instancia, plantillaDocumento, informeErrores, idioma);
                                                }
                                            }

                                            var memoryStreamSalida = new MemoryStream();
                                            var currentCulture = Thread.CurrentThread.CurrentCulture;
                                            Thread.CurrentThread.CurrentCulture = new CultureInfo("en-US");
                                            workBookExportar.Write(memoryStreamSalida);
                                            Thread.CurrentThread.CurrentCulture = currentCulture;

                                            (res.InformacionExtra as Dictionary<string, object>).Add("archivo", memoryStreamSalida.ToArray());
                                            res.Resultado = true;
                                        }
                                    }
                                }

                            }
                        }
                        else 
                        {
                            res.Mensaje = "NA";
                        }


                    }

                }
            }
            catch (Exception ex)
            {
                informeErrores.Add(new InformeErrorImportacion()
                {
                    Mensaje = "Ocurrió un error al exportar el archivo:" + ex.Message
                });
                
                res.Resultado = false;
                res.Mensaje = "Ocurrió un error al exportar el archivo:" + ex.Message;
                LogUtil.Error(new Dictionary<string, object>() { 
                
                    {"Error", res.Mensaje},
                    {"Exeption", ex}
                });
            }
            (res.InformacionExtra as Dictionary<string, object>).Add("errores", informeErrores);

            return res;
        }

        


        /// <summary>
        /// Carga los datos de una hoja de cálculo y aplica los valores encontrados al documento de instancia
        /// </summary>
        /// <param name="hojaImportar">Hoja de cálculo a importar</param>
        /// <param name="hojaPlantilla">Hoja de cálculo de la plantilla</param>
        /// <param name="instancia">Documento de instancia destino</param>
        /// <param name="informeErrores">Lista de de informe de errores</param>
        /// <param name="plantillaDocumento"></param>
        private void ImportarHojaDeCalculo(ISheet hojaImportar, ISheet hojaPlantilla, DocumentoInstanciaXbrlDto instancia, 
            ResumenProcesoImportacionExcelDto resumenImportacion,
            IDefinicionPlantillaXbrl plantillaDocumento)
        {

            var rolUri = plantillaDocumento.ObtenerRolDeAlias(hojaPlantilla.SheetName);

            if (rolUri != null)
            {
                try
                {
                    //Si el rol tiene implementación específica utilizarla, si no, utilizar el importador genérico de plantilla
                    var idSpringImportador = plantillaDocumento.ObtenerIdSpringDefinicionElementosPlantillaDeRol(rolUri);
                    if (ObtenerApplicationContext().ContainsObject("importador_"+idSpringImportador))
                    {
                        var importadorRol = (IImportadorExportadorRolDocumento) ObtenerApplicationContext().GetObject("importador_" + idSpringImportador);
                        importadorRol.ImportarDatosDeHojaExcel(hojaImportar, hojaPlantilla, instancia, rolUri, resumenImportacion, plantillaDocumento);
                    }
                    else
                    {
                        ImportadorRolPlantillaGenerico.ImportarDatosDeHojaExcel(hojaImportar, hojaPlantilla, instancia, rolUri, resumenImportacion, plantillaDocumento);
                    }
                }
                catch (Exception ex)
                {
                    LogUtil.Error(ex);
                    resumenImportacion.InformeErrores.Add(new InformeErrorImportacion()
                    {
                        IdRol = rolUri,
                        Mensaje = "Ocurrió un error al importar el rol : " + rolUri + " : " + ex.Message
                    });
                }
            }
        }

        /// <summary>
        /// Invoca al exportador definido para el rol a exportar, si no hay un exportador específico, se utiliza un exportador genérico
        /// para plantilla
        /// </summary>
        /// <param name="hojaExportar">Hoja del documento donde se colocan los datos</param>
        /// <param name="hojaPlantilla">Hoja del documento con la plantilla de captura</param>
        /// <param name="instancia">Documento de instancia</param>
        /// <param name="plantillaDocumento">Plantilla de captura del documento</param>
        /// <param name="informeErrores">Informe de errores</param>
        private void ExportarHojaDeCalculo(ISheet hojaExportar, ISheet hojaPlantilla, DocumentoInstanciaXbrlDto instancia, IDefinicionPlantillaXbrl plantillaDocumento, 
            List<InformeErrorImportacion> informeErrores, String idioma)
        {
            var rolUri = plantillaDocumento.ObtenerRolDeAlias(hojaPlantilla.SheetName);

            if (rolUri != null)
            {
                try
                {
                    //Si el rol tiene implementación específica utilizarla, si no, utilizar el importador genérico de plantilla
                    var idSpringImportador = plantillaDocumento.ObtenerIdSpringDefinicionElementosPlantillaDeRol(rolUri);
                    if (ObtenerApplicationContext().ContainsObject("importador_" + idSpringImportador))
                    {
                        var importadorRol = (IImportadorExportadorRolDocumento)ObtenerApplicationContext().GetObject("importador_" + idSpringImportador);
                        importadorRol.ExportarDatosDeHojaExcel(hojaExportar, hojaPlantilla, instancia, rolUri, plantillaDocumento,idioma);
                    }
                    else
                    {
                        ImportadorRolPlantillaGenerico.ExportarDatosDeHojaExcel(hojaExportar, hojaPlantilla, instancia, rolUri, plantillaDocumento,idioma);
                    }
                    
                }
                catch (Exception ex)
                {
                    LogUtil.Error(ex);
                    informeErrores.Add(new InformeErrorImportacion()
                    {
                        IdRol = rolUri,
                        Mensaje = "Ocurrió un error al exportar el rol : " + rolUri + " : " + ex.Message
                    });
                }
            }
            ReemplazarEtiquetasEnHojaExcel(hojaExportar, hojaPlantilla, instancia.Taxonomia, idioma);
            QuitarPlaceHolderHechoEnHojaExcel(hojaExportar);
        }
        

       
    }
}
