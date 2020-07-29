using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Viewer.Application.Dto;
using AbaxXBRLCore.Viewer.Application.Model;
using Aspose.Words;
using NPOI.SS.UserModel;
using System.Text.RegularExpressions;
using AbaxXBRLCore.Reports.Util;
using AbaxXBRLCore.Reports.Dto;
using AbaxXBRLCore.Viewer.Application.Dto.Hipercubos;
using AbaxXBRLCore.Common.Util;
using AbaxXBRL.Taxonomia;
using AbaxXBRL.Constantes;

namespace AbaxXBRLCore.Viewer.Application.Import.Impl
{
    class ImportadorExportadorRol412000_AR2016 : IImportadorExportadorRolDocumento
    {

        private IDictionary<String, String> ConceptosHipercuboPorHoja = new Dictionary<String, String>()
        {
            {"412000-Capitales","ar_pros_SpecificationOfTheCharacteristicsOfOutstandingSecuritiesTable"},
            {"412000-Deuda","ar_pros_DebtSeriesCharacteristicsTable"},
            {"412000-Estructurados","ar_pros_StructuredSeriesCharacteristicsTable"},
        };
        private IList<String> ConceptosCalificaciones = new List<String>()
        {
            "ar_pros_Rating",
            "ar_pros_RatingMeaning",
            "ar_pros_SecuritiesRatingOherName"
        };
        /// <summary>
        /// Expresion regular que encuentra el alias de la taxonomía.
        /// </summary>
        private Regex ALIAS_TAXONOMIA = new Regex("((ar)|(pros))_[NOHLI](BIS\\d?)?_", RegexOptions.Compiled | RegexOptions.Multiline| RegexOptions.IgnoreCase);

        /// <summary>
        /// Determina el alias de la taxonomía.
        /// </summary>
        /// <param name="espacioNombres">Espacio de nombres a evaluar.</param>
        /// <returns>Alias de la taxonomía requerida.</returns>
        private String ObtenClaveTaxonomia(String espacioNombres)
        {

            String alias = null;
            var match = ALIAS_TAXONOMIA.Match(espacioNombres);
            if (match.Success)
            {
                alias = match.Value.Replace("ar", String.Empty).Replace("pros", String.Empty).Replace("_", String.Empty);
                alias = alias.ToUpper();
            }
            return alias;
        }
        /// <summary>
        /// Obtiene la configuración del hipercubo que se pretende evaluar.
        /// </summary>
        /// <param name="idConceptoHipercubo">Identificador del concepto del hipercubo.</param>
        /// <param name="instancia">Documento de instancia.</param>
        /// <param name="plantilla">Plantilla del documento de instancia.</param>
        /// <returns>DTO con la configuración general del hipercubo.</returns>
        private HipercuboReporteDTO ObtenConfiguracionHipercubo(String idConceptoHipercubo,DocumentoInstanciaXbrlDto instancia, IDefinicionPlantillaXbrl plantilla)
        {
            var claveTaxonomia = ObtenClaveTaxonomia(instancia.EspacioNombresPrincipal);
            var path = ReporteXBRLUtil.AR_PROS_PATH_HIPERCUBOS_JSON.
                      Replace(ReporteXBRLUtil.CLAVE_TAXONOMIA, claveTaxonomia).
                      Replace(ReporteXBRLUtil.CONCEPTO_HIPERCUBO, idConceptoHipercubo);
            var hipercuboUtil = new EvaluadorHipercuboUtil(path, instancia, plantilla);
            var aliasDimensionEje = hipercuboUtil.configuracion.DimensionesDinamicas[0];
            var miembrosEje = hipercuboUtil.ObtenMiembrosDimension(aliasDimensionEje);
            miembrosEje = miembrosEje.OrderBy(o => o.ElementoMiembroTipificado).ToList();
            var titulos = hipercuboUtil.ObtenTitulosMiembrosDimension(aliasDimensionEje, miembrosEje);
            var hechos = hipercuboUtil.ObtenMatrizHechos(miembrosEje);

            var hipercuboDto = new HipercuboReporteDTO();
            hipercuboDto.Titulos = titulos;
            hipercuboDto.Hechos = hechos;
            hipercuboDto.Utileria = hipercuboUtil;
            return hipercuboDto;
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="hojaAExportar"></param>
        /// <param name="hojaPlantilla"></param>
        /// <param name="instancia"></param>
        /// <param name="rol"></param>
        /// <param name="plantillaDocumento"></param>
        /// <param name="idioma"></param>
        public void ExportarDatosDeHojaExcel(ISheet hojaAExportar, ISheet hojaPlantilla, DocumentoInstanciaXbrlDto instancia, string rol, IDefinicionPlantillaXbrl plantillaDocumento, string idioma)
        {
            var nombreHoja = hojaPlantilla.SheetName;
            String idConceptoHipercubo;
            if (ConceptosHipercuboPorHoja.TryGetValue(nombreHoja, out idConceptoHipercubo))
            {
                var hiperCubo = ObtenConfiguracionHipercubo(idConceptoHipercubo, instancia,plantillaDocumento);
                HipercuboReporteDTO hiperCuboCalificaciones = null;
                var miembroCalificadora = String.Empty;
                
                for (var indexRow = hojaPlantilla.FirstRowNum; indexRow <= hojaPlantilla.LastRowNum; indexRow++)
                {
                    var rowPlantilla = hojaPlantilla.GetRow(indexRow);
                    var rowExportar = hojaAExportar.GetRow(indexRow);
                    var celdaConcepto = rowPlantilla.GetCell(rowPlantilla.FirstCellNum);
                    if (celdaConcepto == null || 
                        !celdaConcepto.CellType.Equals(CellType.String) || 
                        String.IsNullOrWhiteSpace(celdaConcepto.StringCellValue) ||
                        !celdaConcepto.StringCellValue.Contains("idConcepto"))
                    {
                        continue;
                    }
                    var elementosCelda = celdaConcepto.StringCellValue.Split(';');
                    var idConcepto = elementosCelda[1];
                    ConceptoDto concepto;
                    var indiceColumnaImprimir = celdaConcepto.ColumnIndex + 1;
                    if (instancia.Taxonomia.ConceptosPorId.TryGetValue(idConcepto, out concepto))
                    {
                        if (concepto.EsDimension??false)
                        {
                            PintaSeries(concepto.Id, rowExportar, indiceColumnaImprimir, hiperCubo);
                        }
                        else if (concepto.EsMiembroDimension??false)
                        {
                            if (hiperCuboCalificaciones == null)
                            {
                                hiperCuboCalificaciones = ObtenConfiguracionHipercubo("ar_pros_SecuritiesRatingTable", instancia, plantillaDocumento);
                            }
                            miembroCalificadora = concepto.Nombre;
                        }
                        else if (!concepto.EsAbstracto??false && !concepto.EsHipercubo)
                        {
                            if (ConceptosCalificaciones.Contains(concepto.Id))
                            {
                                if (hiperCuboCalificaciones != null && !String.IsNullOrEmpty(miembroCalificadora))
                                {
                                    IDictionary<String, Dto.HechoDto[]> hechosPorConceptoPlantilla;
                                    if (hiperCuboCalificaciones.Hechos.TryGetValue(concepto.Id, out hechosPorConceptoPlantilla))
                                    {
                                        Dto.HechoDto[] hechos;
                                        if (hechosPorConceptoPlantilla.TryGetValue(miembroCalificadora, out hechos))
                                        {
                                            PintaValoresHechos(hechos, rowExportar, indiceColumnaImprimir);
                                        }
                                    }
                                }
                            }
                            else
                            {
                                IDictionary<String,Dto.HechoDto[]> diccionarioHechosPorcontextoPlantilla;
                                if (hiperCubo.Hechos.TryGetValue(concepto.Id,out diccionarioHechosPorcontextoPlantilla))
                                {
                                    if(diccionarioHechosPorcontextoPlantilla.Count > 0)
                                    {
                                        var hechos = diccionarioHechosPorcontextoPlantilla.First().Value;
                                        PintaValoresHechos(hechos, rowExportar, indiceColumnaImprimir);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        /// <summary>
        /// Pinta las series y retorna un diccionario con la información de los hechos del hipercubo.
        /// </summary>
        /// <param name="idDimension">Identificador de la dimension.</param>
        /// <param name="filaSerie">Fila donde se presentaran los valores de la serie.</param>
        /// <param name="indiceColumnaInicial">Indice de la columna donde se iniciara la presentación de las series.</param>
        /// <param name="hipercuboUtil">Utilería con la información del hipercubo.</param>
        private void PintaSeries(String idDimension,IRow filaSerie,int indiceColumnaInicial, HipercuboReporteDTO hipercubo)
        {
            var series = hipercubo.Titulos;
            for (var indexSerie = 0; indexSerie < series.Count; indexSerie++)
            {
                var nombreSerie = series[indexSerie];
                var indexColumn = indexSerie + indiceColumnaInicial;
                var celda = filaSerie.GetCell(indexColumn);
                if (celda == null)
                {
                    celda = filaSerie.CreateCell(indexColumn, CellType.String);
                    celda.CellStyle.BorderBottom = BorderStyle.Medium;
                    celda.CellStyle.BorderTop = BorderStyle.Medium;
                    celda.CellStyle.BorderLeft = BorderStyle.Medium;
                    celda.CellStyle.BorderRight = BorderStyle.Medium;
                }
                celda.SetCellValue(nombreSerie);
            }
        }
        /// <summary>
        /// Pinta los hechos indicados.
        /// </summary>
        /// <param name="arregloHechos">Arreglo de hechos a pintar.</param>
        /// <param name="fila">Fila sobre la que se pintarán los hechos.</param>
        /// <param name="indiceColumnaInicial">Indice de la columna donde inician los elementos a presentar.</param>
        private void PintaValoresHechos(Dto.HechoDto[] arregloHechos, IRow fila, int indiceColumnaInicial)
        {
            for (var indexHecho = 0; indexHecho < arregloHechos.Length; indexHecho++)
            {
                var hecho = arregloHechos[indexHecho];
                var indexColumn = indexHecho + indiceColumnaInicial;
                var celda = fila.GetCell(indexColumn);
                if (celda == null)
                {
                    celda = fila.CreateCell(indexColumn, hecho.EsNumerico ? CellType.Numeric : CellType.String);
                    celda.CellStyle.BorderBottom = BorderStyle.Medium;
                    celda.CellStyle.BorderTop = BorderStyle.Medium;
                    celda.CellStyle.BorderLeft = BorderStyle.Medium;
                    celda.CellStyle.BorderRight = BorderStyle.Medium;
                }   
                if (hecho.EsNumerico)
                {
                    celda.SetCellValue(Double.Parse(hecho.Valor));
                }
                else
                {
                    celda.SetCellValue(hecho.Valor);
                }
            }
        }

        public void ExportarRolADocumentoWord(Document word, Section section, DocumentoInstanciaXbrlDto instancia, string rol, IDefinicionPlantillaXbrl plantillaDocumento, string claveIdioma)
        {
            throw new NotImplementedException();
        }
        /// <summary>
        /// Obtiene el nombre de un concepto.
        /// </summary>
        /// <param name="idConcepto">Identificador del concepto.</param>
        /// <param name="taxonomia">Taxonomía.</param>
        /// <param name="claveIdioma">Idioma</param>
        /// <returns></returns>
        private String ObtenEtiquetaConcepto(String idConcepto, TaxonomiaDto taxonomia, String claveIdioma = "es")
        {
            String textoEtiqueta = String.Empty;
            ConceptoDto concepto;
            if (taxonomia.ConceptosPorId.TryGetValue(idConcepto, out concepto))
            {
                IDictionary<string, EtiquetaDto> etiquetaPorRol;
                if (!concepto.Etiquetas.TryGetValue(claveIdioma, out etiquetaPorRol))
                {
                    etiquetaPorRol = concepto.Etiquetas.First().Value;
                }
                EtiquetaDto etiquetaDto;
                if (etiquetaPorRol.TryGetValue(ReporteXBRLUtil.ETIQUETA_DEFAULT, out etiquetaDto))
                {
                    etiquetaDto = etiquetaPorRol.First().Value;
                }
                if (etiquetaDto != null)
                {
                    textoEtiqueta = etiquetaDto.Valor;
                }
            }
            return textoEtiqueta;
        }
        /// <summary>
        /// Genera los contextos de la serie.
        /// </summary>
        /// <param name="idDimension">Identificador de la idmensión evaluada.</param>
        /// <param name="rowImportar">Fila a iterar.</param>
        /// <param name="indiceColumnaInicio">Columna donde inicia la iteración.</param>
        /// <param name="hipercuboUtil">Utilería con la información del hipercubo.</param>
        /// <param name="resumenImportacion">Resumen de la importación para agregar errores en caso de presentarse.</param>
        /// <param name="nombreHoja">Nombre de la hoja.</param>
        /// <param name="instancia">Documento de instancia.</param>
        /// <param name="plantillaDocumento">Plantilla del documento.</param>
        /// <param name="claveIdioma"></param>
        /// <returns>Diccionario con los identificadores de contexto por columna.</returns>
        private IDictionary<int, Dto.ContextoDto> GeneraContextosSeries(
            String idDimension, 
            IRow rowImportar,
            int indiceColumnaInicio, 
            EvaluadorHipercuboUtil hipercuboUtil, 
            ResumenProcesoImportacionExcelDto resumenImportacion, 
            String nombreHoja, 
            DocumentoInstanciaXbrlDto instancia,
            IDefinicionPlantillaXbrl plantillaDocumento,
            string claveIdioma)
        {
            var nombreConcepto = ObtenEtiquetaConcepto(idDimension,instancia.Taxonomia,claveIdioma);
            var contextosColumna = new Dictionary<int, Dto.ContextoDto>();
            PlantillaDimensionInfoDto plantillaDimension = null;
            if (!hipercuboUtil.configuracion.PlantillaDimensiones.TryGetValue(idDimension, out plantillaDimension))
            {
                LogUtil.Error("No existe una definición de plantilla con el identificador \"" + idDimension + "\".");
                return contextosColumna;
            }
            PlantillaContextoDto plantillaContexto = hipercuboUtil.configuracion.PlantillasContextos.Values.First();
            var seriesEvaluadas = new Dictionary<String, int>();
            for (var indexSerie = indiceColumnaInicio; indexSerie <= rowImportar.LastCellNum; indexSerie++)
            {
                var celdaSerie = rowImportar.GetCell(indexSerie);
                if (celdaSerie != null && !celdaSerie.CellType.Equals(CellType.Blank))
                {
                    var nombreSerie = ExcelUtil.ObtenerValorCelda(celdaSerie.CellType, celdaSerie);
                    if (String.IsNullOrWhiteSpace(nombreSerie))
                    {
                        continue;
                    }
                    if (seriesEvaluadas.ContainsKey(nombreSerie))
                    {

                        resumenImportacion.InformeErrores.Add(new InformeErrorImportacion()
                        {
                            Mensaje = "No fue posible agregar la serie \"" + nombreSerie +
                            "\", de la hoja \"" + nombreHoja +
                            "\" renglon \""+ rowImportar.RowNum.ToString() + "\" columna \"" + celdaSerie.ColumnIndex.ToString() + 
                            "\", debido a que este nombre de serie ya fué indicado previamente en la columna \"" + seriesEvaluadas[nombreSerie] + "\".",
                        });
                        continue;
                    }
                    var miembroDimensionSerie = plantillaDimension.CreaMiembroDimension(nombreSerie);
                    var listaDimensiones = new List<DimensionInfoDto>() { miembroDimensionSerie };
                    var contexto = plantillaContexto.GeneraContexto(instancia, plantillaDocumento, listaDimensiones);
                    plantillaDocumento.InyectarContextoADocumentoInstancia(contexto);
                    contextosColumna.Add(celdaSerie.ColumnIndex, contexto);
                    seriesEvaluadas.Add(nombreSerie, celdaSerie.ColumnIndex);
                }
            }
            return contextosColumna;
        }

        /// <summary>
        /// Genera un diccionario con los contextos por columna para las calificaciones.
        /// </summary>
        /// <param name="conceptoMiembro">Concepto miembro de las calificadoras.</param>
        /// <param name="diccionarioContextosSerie">Diccionario con los contextos por serie.</param>
        /// <param name="hipercuboUtil"></param>
        /// <param name="instancia">Documento de instancia a evaluar.</param>
        /// <param name="plantillaDocumento">Plantilla del documento de instancia.</param>
        /// <returns></returns>
        private IDictionary<int, Dto.ContextoDto> GeneraContextosCalificaciones(
            ConceptoDto conceptoMiembro, 
            IDictionary<int, Dto.ContextoDto> diccionarioContextosSerie,
            EvaluadorHipercuboUtil hipercuboUtil,
            DocumentoInstanciaXbrlDto instancia,
            IDefinicionPlantillaXbrl plantillaDocumento)
        {
            var contextosColumna = new Dictionary<int, Dto.ContextoDto>();
            try
            {
                PlantillaContextoDto plantillaContextoDto = null;
                if (!hipercuboUtil.configuracion.PlantillasContextos.TryGetValue(conceptoMiembro.Nombre, out plantillaContextoDto))
                {
                    LogUtil.Error("No existe una definición de plantilla con el identificador \"" + conceptoMiembro.Nombre + "\".");
                    return contextosColumna;
                }
                foreach (var indexColumn in diccionarioContextosSerie.Keys)
                {
                    var contextoSerie = diccionarioContextosSerie[indexColumn];
                    var dimensiones = contextoSerie.ValoresDimension;
                    var contextoCalificacion = plantillaContextoDto.GeneraContexto(instancia, plantillaDocumento, dimensiones);
                    plantillaDocumento.InyectarContextoADocumentoInstancia(contextoCalificacion);
                    contextosColumna.Add(indexColumn, contextoCalificacion);
                }
            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
            }
            return contextosColumna;
        }
        /// <summary>
        /// Retorna la unidad que aplica para el concepto indicado.
        /// </summary>
        /// <param name="concepto">Concepto a evaluar.</param>
        /// <param name="instancia">Documento de instancia a evaluar.</param>
        /// <param name="plantillaDocumento">Plantilla del documento.</param>
        /// <returns>Unidad que aplica al concepto.</returns>
        public UnidadDto ObtenUniadConcepto(ConceptoDto concepto, DocumentoInstanciaXbrlDto instancia, IDefinicionPlantillaXbrl plantillaDocumento)
        {
            UnidadDto unidadDestino = null;
            if (concepto.EsTipoDatoNumerico)
            {
                //Si es moentario
                var listaMedidas = new List<MedidaDto>();

                if (concepto.TipoDatoXbrl.Contains(TiposDatoXBRL.MonetaryItemType))
                {
                    listaMedidas.Add(new MedidaDto()
                    {
                        EspacioNombres = plantillaDocumento.ObtenerVariablePorId("medida_http___www_xbrl_org_2003_iso4217"),
                        Nombre = plantillaDocumento.ObtenerVariablePorId("medida_MXN")
                    });

                }
                else
                {
                    //Unidad pure
                    listaMedidas.Add(new MedidaDto()
                    {
                        EspacioNombres = plantillaDocumento.ObtenerVariablePorId("medida_http___www_xbrl_org_2003_instance"),
                        Nombre = plantillaDocumento.ObtenerVariablePorId("medida_pure")
                    });

                }

                var unidades = instancia.BuscarUnidades(Unit.Medida, listaMedidas, null);
                if (unidades == null || unidades.Count == 0)
                {
                    unidadDestino = new UnidadDto()
                    {
                        Id = "U" + Guid.NewGuid().ToString(),
                        Tipo = Unit.Medida,
                        Medidas = listaMedidas
                    };
                    instancia.UnidadesPorId.Add(unidadDestino.Id, unidadDestino);
                }
                else
                {
                    unidadDestino = unidades[0];
                }

            }
            return unidadDestino;
        }

        /// <summary>
        /// Actualiza el valor de un hecho en base a su tipo y valor
        /// </summary>
        /// <param name="concepto"></param>
        /// <param name="valorCelda"></param>
        /// <param name="hechoNuevo"></param>
        private Boolean ActualizarValor(ConceptoDto concepto, string valorCelda, AbaxXBRLCore.Viewer.Application.Dto.HechoDto hechoNuevo, IDefinicionPlantillaXbrl plantilla)
        {
            var fechaDefault = plantilla.ObtenerVariablePorId("fecha_2014_12_31");
            return UtilAbax.ActualizarValorHecho(concepto, hechoNuevo, valorCelda, fechaDefault);
        }
        /// <summary>
        /// Crea un nuevo hecho.
        /// </summary>
        /// <param name="valor">Valor del hecho.</param>
        /// <param name="concepto">Concepto del hecho.</param>
        /// <param name="contexto">Contexto del hecho.</param>
        /// <param name="idUnidad">Identificador de la unidad.</param>
        /// <param name="instancia">Documento de instancia.</param>
        /// <param name="plantilla">Plantilla del documento.</param>
        /// <param name="resumenImportacion">Detalle de la importación.</param>
        /// <param name="nombreHoja">Nombre de la hoja.</param>
        /// <param name="numeroFila">Indice de la fila.</param>
        /// <param name="numeroColumna">Indice de la columna.</param>
        private void CreaHecho(
            String valor, 
            ConceptoDto concepto, 
            Dto.ContextoDto contexto, 
            String idUnidad, 
            DocumentoInstanciaXbrlDto instancia, 
            IDefinicionPlantillaXbrl plantilla,
            ResumenProcesoImportacionExcelDto resumenImportacion,
            String nombreHoja,
            int numeroFila,
            int numeroColumna)
        {
            var idHecho = "A" + Guid.NewGuid().ToString();
            var hechoNuevo = instancia.CrearHecho(concepto.Id, idUnidad, contexto.Id, idHecho);
            if (concepto.EsTipoDatoNumerico)
            {
                if (concepto.TipoDatoXbrl.Contains(TiposDatoXBRL.MonetaryItemType))
                {
                    hechoNuevo.Decimales = "-3";
                }
                else
                {
                    hechoNuevo.Decimales = "0";
                }
            }
            if (!ActualizarValor(concepto, valor, hechoNuevo, plantilla))
            {
                resumenImportacion.AgregarErrorFormato(
                                        UtilAbax.ObtenerEtiqueta(instancia.Taxonomia, concepto.Id),
                                        nombreHoja,
                                        numeroFila.ToString(),
                                        numeroColumna.ToString(),
                                        valor);
            }
            else
            {
                resumenImportacion.TotalHechosImportados++;
                var hechoImportado = new AbaxXBRLCore.Common.Dtos.InformacionHechoImportadoExcelDto()
                {
                    IdConcepto = hechoNuevo.IdConcepto,
                    IdHecho = hechoNuevo.Id,
                    ValorImportado = valor,
                    HojaExcel = nombreHoja,
                    Renglon = numeroFila,
                    Columna = numeroColumna
                };
                resumenImportacion.AgregarHechoImportado(hechoImportado, UtilAbax.ObtenerEtiqueta(instancia.Taxonomia, hechoNuevo.Id));
            }

            plantilla.InyectaHechoADocumentoInstancia(hechoNuevo);
        }
        /// <summary>
        /// Genera los hechos de la fila indicada.
        /// </summary>
        /// <param name="fila">Fila que se pretende evaluar.</param>
        /// <param name="concepto">Concepto que se pretende evaluar.</param>
        /// <param name="diccionarioContextos">Diccionario de contextos.</param>
        /// <param name="instancia">Documento de instancia.</param>
        /// <param name="plantilla">Plantilla de documento.</param>
        /// <param name="resumenImportacion">Resume de importación.</param>
        /// <param name="nombreHoja">Nombre de la hoja.</param>
        public void GeneraHechos(
            IRow fila,
            ConceptoDto concepto, 
            IDictionary<int, Dto.ContextoDto> diccionarioContextos,
            DocumentoInstanciaXbrlDto instancia, 
            IDefinicionPlantillaXbrl plantilla,
            ResumenProcesoImportacionExcelDto resumenImportacion,
            String nombreHoja)
        {
            UnidadDto unidad = ObtenUniadConcepto(concepto,instancia,plantilla);
            var idUnidad = unidad == null ? null : unidad.Id;
            foreach (var indexColumna in diccionarioContextos.Keys)
            {
                ICell celda = null;
                try
                {
                    celda = fila.GetCell(indexColumna);
                    String valorHecho = String.Empty;
                    if (celda != null && !celda.CellType.Equals(CellType.Blank))
                    {
                        valorHecho = ExcelUtil.ObtenerValorCelda(celda.CellType, celda);
                    }
                    var contexto = diccionarioContextos[indexColumna];
                    CreaHecho(
                        valorHecho,
                        concepto,
                        contexto,
                        idUnidad,
                        instancia,
                        plantilla,
                        resumenImportacion,
                        nombreHoja,
                        fila.RowNum,
                        celda.ColumnIndex);
                }
                catch (Exception ex)
                {
                    LogUtil.Error(ex);
                    var columnaCelda = (celda == null ? 0 : celda.ColumnIndex);
                    resumenImportacion.InformeErrores.Add(new InformeErrorImportacion()
                    {
                        Mensaje = "Error al obtener el valor de la celda en la fila \"" + fila.RowNum +
                        "\" columna \"" + columnaCelda +
                        "\"  de la hoja \"" + nombreHoja + 
                        "\".(" + ex.Message + ")"
                    });
                }
            }
        }

        public void ImportarDatosDeHojaExcel(ISheet hojaAImportar, ISheet hojaPlantilla, DocumentoInstanciaXbrlDto instancia, string rol, ResumenProcesoImportacionExcelDto resumenImportacion, IDefinicionPlantillaXbrl plantillaDocumento)
        {
            var nombreHoja = hojaPlantilla.SheetName;
            String idConceptoHipercubo;
            IDictionary<int, Dto.ContextoDto> diccionarioContextosSeries = null;
            IDictionary<int, Dto.ContextoDto> diccionarioContextosCalificaciones = null;
            if (ConceptosHipercuboPorHoja.TryGetValue(nombreHoja, out idConceptoHipercubo))
            {
                HipercuboReporteDTO hiperCubo = ObtenConfiguracionHipercubo(idConceptoHipercubo, instancia, plantillaDocumento);
                HipercuboReporteDTO hiperCuboCalificaciones = null;
                var miembroCalificadora = String.Empty;

                for (var indexRow = hojaPlantilla.FirstRowNum; indexRow <= hojaPlantilla.LastRowNum; indexRow++)
                {
                    var rowPlantilla = hojaPlantilla.GetRow(indexRow);
                    var rowImportar = hojaAImportar.GetRow(indexRow);
                    var celdaConcepto = rowPlantilla.GetCell(rowPlantilla.FirstCellNum);
                    if (celdaConcepto == null ||
                        !celdaConcepto.CellType.Equals(CellType.String) ||
                        String.IsNullOrWhiteSpace(celdaConcepto.StringCellValue) ||
                        !celdaConcepto.StringCellValue.Contains("idConcepto"))
                    {
                        continue;
                    }
                    var elementosCelda = celdaConcepto.StringCellValue.Split(';');
                    var idConcepto = elementosCelda[1];
                    ConceptoDto concepto;
                    var indiceColumnaImprimir = celdaConcepto.ColumnIndex + 1;
                    if (instancia.Taxonomia.ConceptosPorId.TryGetValue(idConcepto, out concepto))
                    {
                        if (concepto.EsDimension??false)
                        {
                            diccionarioContextosSeries = 
                                GeneraContextosSeries(
                                    concepto.Id, 
                                    rowImportar, 
                                    indiceColumnaImprimir, 
                                    hiperCubo.Utileria, 
                                    resumenImportacion, 
                                    hojaAImportar.SheetName, 
                                    instancia, 
                                    plantillaDocumento, "es");
                            if (diccionarioContextosSeries.Count > 0)
                            {
                                EliminarHechos(hojaPlantilla, instancia);
                            }
                        }
                        else if (concepto.EsMiembroDimension??false)
                        {
                            if (hiperCuboCalificaciones == null)
                            {
                                hiperCuboCalificaciones = ObtenConfiguracionHipercubo("ar_pros_SecuritiesRatingTable", instancia, plantillaDocumento);
                            }
                            diccionarioContextosCalificaciones = GeneraContextosCalificaciones(
                                concepto,
                                diccionarioContextosSeries,
                                hiperCuboCalificaciones.Utileria,
                                instancia,
                                plantillaDocumento);
                        }
                        else if (!concepto.EsAbstracto??false && !concepto.EsHipercubo)
                        {
                            var diccionarioContextos = diccionarioContextosSeries;
                            if (ConceptosCalificaciones.Contains(concepto.Id))
                            {
                                if (hiperCuboCalificaciones != null && diccionarioContextosCalificaciones != null)
                                {
                                    diccionarioContextos = diccionarioContextosCalificaciones;
                                }
                            }
                            GeneraHechos(rowImportar, concepto, diccionarioContextos, instancia, plantillaDocumento, resumenImportacion, hojaAImportar.SheetName);
                        }
                    }
                }
            }
        }
        /// <summary>
        /// Elimina los hechos definidos en la hoja de importación.
        /// </summary>
        /// <param name="hojaPlantilla">Definición de la hoja.</param>
        /// <param name="instancia">Documento de instancia donde se eliminaran los hechos.</param>
        private void EliminarHechos(ISheet hojaPlantilla, DocumentoInstanciaXbrlDto instancia)
        {
            var listaIdsConceptosEliminar = new List<String>();
            for (var indexRow = hojaPlantilla.FirstRowNum; indexRow <= hojaPlantilla.LastRowNum; indexRow++)
            {
                
                var rowPlantilla = hojaPlantilla.GetRow(indexRow);
                var celdaConcepto = rowPlantilla.GetCell(rowPlantilla.FirstCellNum);
                if (celdaConcepto == null ||
                    !celdaConcepto.CellType.Equals(CellType.String) ||
                    String.IsNullOrWhiteSpace(celdaConcepto.StringCellValue) ||
                    !celdaConcepto.StringCellValue.Contains("idConcepto"))
                {
                    continue;
                }
                var elementosCelda = celdaConcepto.StringCellValue.Split(';');
                var idConcepto = elementosCelda[1];
                listaIdsConceptosEliminar.Add(idConcepto);
            }
            ReporteXBRLUtil.EliminarHechosConceptos(listaIdsConceptosEliminar, instancia);
        }
    }
}
