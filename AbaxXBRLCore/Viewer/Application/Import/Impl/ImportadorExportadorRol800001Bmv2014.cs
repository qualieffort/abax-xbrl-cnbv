using System.Data;
using System.Diagnostics;
using AbaxXBRL.Constantes;
using AbaxXBRL.Taxonomia;
using AbaxXBRL.Taxonomia.Dimensiones;
using AbaxXBRL.Taxonomia.Linkbases;
using AbaxXBRL.Util;
using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.Entities;
using AbaxXBRLCore.Viewer.Application.Dto;
using AbaxXBRLCore.Viewer.Application.Model;
using Aspose.Words;
using Aspose.Words.Tables;
using NPOI.SS.UserModel;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using AbaxXBRLCore.Common.Constants;
using NPOI.XSSF.UserModel;



namespace AbaxXBRLCore.Viewer.Application.Import.Impl
{
    /// <summary>
    /// Implementación específica para la importación y exportación del rol 800001 
    /// de la taxonomía 2014 IFRS de BMV - Desglose de créditos
    /// </summary>
    /// <author>Emigido Hernandez</author>
    class ImportadorExportadorRol800001Bmv2014 : IImportadorExportadorRolDocumento
    {
        ///
        /// Variables de configuración de la plantilla de captura
        ///

        private IDictionary<string, string> _mapeoElementosPrimariosRenglones = null;
        private IDictionary<string, string> _mapeoElementosPrimariosTotales = null;
        private static int _renglonPrimariosTotales = 2;
        private static int _columnaInicioHechosTotales = 1;
        private static int _columnaFinHechosTotales = 4;
        
        private static int _renglonItemMiembroDenominacion = 0;
        private static int _renglonItemMiembroIntervalo = 5;
        private static int _columnaInicioHechosMontos = 5;
        private static int _columnaFinHechosMontos = 16;
        private static int _renglonInicioHechos = 6;
        private static int _columnaIdHechos = 0;
        private static string _idDimensionInstitucion = "ifrs_mx-cor_20141205_InstitucionEje";
        private static string _valorDecimalesHechos = "-3";
        private static string _templateTypedMemeberInstitucion = "<ifrs_mx-cor_20141205:InstitucionDomain xmlns:ifrs_mx-cor_20141205=\"http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05\">{0}</ifrs_mx-cor_20141205:InstitucionDomain>";
        private static string _institucionTotal = "TOTAL";
        private static string _idDimensionDenominacion = "ifrs_mx-cor_20141205_DenominacionEje";
        private static string _idItemMiembroTotalMonedas = "ifrs_mx-cor_20141205_TotalMonedasMiembro";
        private static string _idDimensionIntervalo = "ifrs_mx-cor_20141205_IntervaloDeTiempoEje";
        private static string _idItemMiembroTotalIntervalos = "ifrs_mx-cor_20141205_TotalIntervalosMiembro";
        private static string[] _valorSI = new string[]{"si","Si","SI","True","true"};
        private static string[] _valorNO = new string[]{"no","No","NO","False","false"};
        private static string _totalDeCreditos = "Total de créditos";

        private static string[] _elementosPrimariosTotales = new String[]
                                           {
                                               "ifrs_mx-cor_20141205_InstitucionExtranjeraSiNo",
                                               "ifrs_mx-cor_20141205_FechaDeFirmaContrato",
                                               "ifrs_mx-cor_20141205_FechaDeVencimiento",
                                               "ifrs_mx-cor_20141205_TasaDeInteresYOSobretasa"
                                           };
        private static string[] _elementosPrimariosIntervalo = new string[]
                                                               {
                                                                    "ifrs_mx-cor_20141205_AnoActualMiembro",
                                                                    "ifrs_mx-cor_20141205_Hasta1AnoMiembro",
                                                                    "ifrs_mx-cor_20141205_Hasta2AnosMiembro",
                                                                    "ifrs_mx-cor_20141205_Hasta3AnosMiembro",
                                                                    "ifrs_mx-cor_20141205_Hasta4AnosMiembro",
                                                                    "ifrs_mx-cor_20141205_Hasta5AnosOMasMiembro",
                                                                    "ifrs_mx-cor_20141205_AnoActualMiembro",
                                                                    "ifrs_mx-cor_20141205_Hasta1AnoMiembro",
                                                                    "ifrs_mx-cor_20141205_Hasta2AnosMiembro",
                                                                    "ifrs_mx-cor_20141205_Hasta3AnosMiembro",
                                                                    "ifrs_mx-cor_20141205_Hasta4AnosMiembro",
                                                                    "ifrs_mx-cor_20141205_Hasta5AnosOMasMiembro",
                                                               } ;
        private static string[] _elementosPrimariosMonedas = new string[]
                                                             {
                                                                "ifrs_mx-cor_20141205_MonedaNacionalMiembro",
                                                                "ifrs_mx-cor_20141205_MonedaNacionalMiembro",
                                                                "ifrs_mx-cor_20141205_MonedaNacionalMiembro",
                                                                "ifrs_mx-cor_20141205_MonedaNacionalMiembro",
                                                                "ifrs_mx-cor_20141205_MonedaNacionalMiembro",
                                                                "ifrs_mx-cor_20141205_MonedaNacionalMiembro",
                                                                "ifrs_mx-cor_20141205_MonedaExtranjeraMiembro",
                                                                "ifrs_mx-cor_20141205_MonedaExtranjeraMiembro",
                                                                "ifrs_mx-cor_20141205_MonedaExtranjeraMiembro",
                                                                "ifrs_mx-cor_20141205_MonedaExtranjeraMiembro",
                                                                "ifrs_mx-cor_20141205_MonedaExtranjeraMiembro",
                                                                "ifrs_mx-cor_20141205_MonedaExtranjeraMiembro",
                                                             };
        private static string[] _elementosPrimariosSubTotales = new String[]
                                           {
                                               "ifrs_mx-cor_20141205_TotalBancarios",
                                               "ifrs_mx-cor_20141205_TotalBursatilesListadasEnBolsaYColocacionesPrivadas",
                                               "ifrs_mx-cor_20141205_TotalOtrosPasivosCirculantesYNoCirculantesConCosto",
                                               "ifrs_mx-cor_20141205_TotalProveedores",
                                                "ifrs_mx-cor_20141205_TotalOtrosPasivosCirculantesYNoCirculantesSinCosto",
                                                "ifrs_mx-cor_20141205_TotalDeCreditos"
                                           };

        private static string[] _elementosPrimariosMonetarios = new String[] 
                                            { 
                                                "ifrs_mx-cor_20141205_ComercioExteriorBancarios",
                                                "ifrs_mx-cor_20141205_ConGarantiaBancarios",
                                                "ifrs_mx-cor_20141205_BancaComercial",
                                                "ifrs_mx-cor_20141205_OtrosBancarios",
                                                "ifrs_mx-cor_20141205_BursatilesListadasEnBolsaQuirografarios",
                                                "ifrs_mx-cor_20141205_BursatilesListadasEnBolsaConGarantia",
                                                "ifrs_mx-cor_20141205_ColocacionesPrivadasQuirografarios",
                                                "ifrs_mx-cor_20141205_ColocacionesPrivadasConGarantia",
                                                "ifrs_mx-cor_20141205_OtrosPasivosCirculantesYNoCirculantesConCosto",
                                                "ifrs_mx-cor_20141205_Proveedores",
                                                "ifrs_mx-cor_20141205_OtrosPasivosCirculantesYNoCirculantesSinCosto"
                                            };
        /// <summary>
        /// Inicializar los mapeos
        /// </summary>
        public void ImportarDatosDeHojaExcel(ISheet hojaAImportar, ISheet hojaPlantilla, DocumentoInstanciaXbrlDto instancia, string rol,
            AbaxXBRLCore.Common.Dtos.ResumenProcesoImportacionExcelDto resumenImportacion, Model.IDefinicionPlantillaXbrl plantillaDocumento)
        {
            var listaInstitucionesProcesadasExcel = new List<string>();

            Inicializar(instancia, plantillaDocumento, rol);
            string idConceptoHechoActual = null;
            var numRenglones = hojaAImportar.LastRowNum;
            for (var iRenglon = _renglonInicioHechos; iRenglon <= numRenglones; iRenglon++)
            {

                var valorCelda = ExcelUtil.ObtenerValorCelda(hojaAImportar, iRenglon, _columnaIdHechos);
                if (!String.IsNullOrEmpty(valorCelda))
                {
                    if (_mapeoElementosPrimariosRenglones.ContainsKey(valorCelda.Trim()) && !_mapeoElementosPrimariosTotales.ContainsKey(valorCelda.Trim()))
                    {
                        idConceptoHechoActual = _mapeoElementosPrimariosRenglones[valorCelda.Trim()];
                    }
                    else
                    {
                        try
                        {
                            //Puede ser un crédito o un total
                            if (_mapeoElementosPrimariosTotales.ContainsKey(valorCelda.Trim()))
                            {
                                //Procesar total
                                ProcesarRenglon(_mapeoElementosPrimariosTotales[valorCelda.Trim()], valorCelda, instancia, plantillaDocumento, iRenglon, hojaAImportar, hojaPlantilla, resumenImportacion, listaInstitucionesProcesadasExcel);
                            }
                            else
                            {
                                //Procesar Banco
                                ProcesarRenglon(idConceptoHechoActual, valorCelda, instancia, plantillaDocumento, iRenglon, hojaAImportar, hojaPlantilla, resumenImportacion, listaInstitucionesProcesadasExcel);
                            }
                        }
                        catch (Exception ex) {
                            resumenImportacion.InformeErrores.Add(new InformeErrorImportacion()
                            {
                                IdRol = rol,
                                Mensaje = "Ocurrió un error al importar el rol : " + rol + " : " + ex.Message + ". Renglón:" + iRenglon+1
                            });
                        }
                        
                    }
                }
            }
        }
        /// <summary>
        /// Procesa el contenido de un renglón del desglose de créditos.
        /// </summary>
        /// <param name="idConceptoHechoActual"></param>
        /// <param name="instancia"></param>
        /// <param name="plantillaDocumento"></param>
        /// <param name="iRenglon"></param>
        /// <param name="listaInstituciones"></param>
        private void ProcesarRenglon(string idConceptoHechoActual, string valorCeldaIdConcepto,
            DocumentoInstanciaXbrlDto instancia, IDefinicionPlantillaXbrl plantillaDocumento, int iRenglon, ISheet hojaAImportar, ISheet hojaPlantilla,
            AbaxXBRLCore.Common.Dtos.ResumenProcesoImportacionExcelDto resumenImportacion, List<string> listaInstituciones)
        {
            if (!instancia.Taxonomia.ConceptosPorId.ContainsKey(idConceptoHechoActual))
            {
                return;
            }
            var dimensionInstitucion = new DimensionInfoDto()
                                       {
                                           Explicita = false,
                                           IdDimension = _idDimensionInstitucion,
                                           QNameDimension = ObtenerQNameConcepto(instancia.Taxonomia.ConceptosPorId[_idDimensionInstitucion])
                                       };
            var dimensionDenominacionTotal = new DimensionInfoDto()
                                        {
                                            Explicita = true,
                                            IdDimension = _idDimensionDenominacion,
                                            QNameDimension = ObtenerQNameConcepto(instancia.Taxonomia.ConceptosPorId[_idDimensionDenominacion]),
                                            IdItemMiembro = _idItemMiembroTotalMonedas,
                                            QNameItemMiembro = ObtenerQNameConcepto(instancia.Taxonomia.ConceptosPorId[_idItemMiembroTotalMonedas])
                                        };
            var dimensionIntervaloTotal = new DimensionInfoDto()
            {
                Explicita = true,
                IdDimension = _idDimensionIntervalo,
                QNameDimension = ObtenerQNameConcepto(instancia.Taxonomia.ConceptosPorId[_idDimensionIntervalo]),
                IdItemMiembro = _idItemMiembroTotalIntervalos,
                QNameItemMiembro = ObtenerQNameConcepto(instancia.Taxonomia.ConceptosPorId[_idItemMiembroTotalIntervalos])
            };

            //Verificar si la institución que utilizará este concepto no es ya utilizada por algún otro concepto 
            if (!_institucionTotal.Equals(valorCeldaIdConcepto.Trim()) && listaInstituciones.Contains(valorCeldaIdConcepto.Trim()))
            {
                resumenImportacion.InformeErrores.Add(new InformeErrorImportacion()
                {
                    Mensaje = "El nombre de la institución debe ser único para cada renglón de datos del desglose de créditos ( "+valorCeldaIdConcepto +")",
                    Hoja = hojaAImportar.SheetName,
                    Renglon = iRenglon.ToString(),
                    ValorLeido = valorCeldaIdConcepto
                });
                return;
            }

            DateTime fechaInicio = DateTime.MinValue;
            DateTime fechaFin = DateTime.MinValue;
            //Acumulado actual

            if (XmlUtil.ParsearUnionDateTime(plantillaDocumento.ObtenerVariablePorId("fecha_2015_09_30"), out fechaFin)
                &&
                XmlUtil.ParsearUnionDateTime(plantillaDocumento.ObtenerVariablePorId("fecha_2015_01_01"), out fechaInicio))
            {
                if (_mapeoElementosPrimariosTotales.Values.Contains(idConceptoHechoActual))
                {
                    dimensionInstitucion.ElementoMiembroTipificado = String.Format(_templateTypedMemeberInstitucion,
                        _institucionTotal);
                }
                else
                {
                    dimensionInstitucion.ElementoMiembroTipificado = String.Format(_templateTypedMemeberInstitucion,
                       System.Web.HttpUtility.HtmlEncode(valorCeldaIdConcepto));
                    if (!_institucionTotal.Equals(valorCeldaIdConcepto))
                    {
                        //Elementos referentes al banco
                        for (var iColumna = _columnaInicioHechosTotales; iColumna <= _columnaFinHechosTotales; iColumna++)
                        {
                            ActualizarValorHecho(instancia.Taxonomia.ConceptosPorId[ExcelUtil.ObtenerIdConceptoDeCelda(hojaPlantilla, _renglonPrimariosTotales, iColumna)],
                            ExcelUtil.ObtenerValorCelda(hojaAImportar, iRenglon, iColumna),
                            new List<DimensionInfoDto>() { dimensionInstitucion, dimensionDenominacionTotal, dimensionIntervaloTotal },
                            fechaInicio, fechaFin,
                            plantillaDocumento.ObtenerVariablePorId("esquemaEntidad") + ":" + plantillaDocumento.ObtenerVariablePorId("nombreEntidad"),
                            instancia, plantillaDocumento, resumenImportacion, hojaAImportar, iRenglon,iColumna);
                            
                        }
                    }
                    
                }

                //Elementos referentes al banco + monedas + intervalos
                for (var iColumna = _columnaInicioHechosMontos; iColumna <= _columnaFinHechosMontos; iColumna++)
                {
                    var valorMonto = ExcelUtil.ObtenerValorCelda(hojaAImportar, iRenglon, iColumna);
                    if (!String.IsNullOrEmpty(valorMonto))
                    {
                        ActualizarValorHecho(instancia.Taxonomia.ConceptosPorId[idConceptoHechoActual],
                        valorMonto,
                        new List<DimensionInfoDto>()
                            {
                                dimensionInstitucion, 
                                new DimensionInfoDto()
                                {
                                    Explicita = true,
                                    IdDimension = _idDimensionDenominacion,
                                    QNameDimension = ObtenerQNameConcepto(instancia.Taxonomia.ConceptosPorId[_idDimensionDenominacion]),
                                    IdItemMiembro = ExcelUtil.ObtenerIdConceptoDeCelda(hojaPlantilla,_renglonItemMiembroDenominacion,iColumna),
                                    QNameItemMiembro = ObtenerQNameConcepto(instancia.Taxonomia.ConceptosPorId[ExcelUtil.ObtenerIdConceptoDeCelda(hojaPlantilla,_renglonItemMiembroDenominacion,iColumna)])
                                } ,
                                new DimensionInfoDto()
                                {
                                    Explicita = true,
                                    IdDimension = _idDimensionIntervalo,
                                    QNameDimension = ObtenerQNameConcepto(instancia.Taxonomia.ConceptosPorId[_idDimensionIntervalo]),
                                    IdItemMiembro = ExcelUtil.ObtenerIdConceptoDeCelda(hojaPlantilla,_renglonItemMiembroIntervalo,iColumna),
                                    QNameItemMiembro = ObtenerQNameConcepto(instancia.Taxonomia.ConceptosPorId[ExcelUtil.ObtenerIdConceptoDeCelda(hojaPlantilla,_renglonItemMiembroIntervalo,iColumna)])
                                }
                            },
                        fechaInicio, fechaFin,
                        plantillaDocumento.ObtenerVariablePorId("esquemaEntidad") + ":" + plantillaDocumento.ObtenerVariablePorId("nombreEntidad"),
                        instancia, plantillaDocumento, resumenImportacion, hojaAImportar, iRenglon,iColumna);
                    }
                }
                listaInstituciones.Add(valorCeldaIdConcepto);
            }
        }

        /// <summary>
        /// Verifica si la dimensión de institución ya ha sido utilizada para desglosar créditos para otro elementro primario que no sea el actual
        /// </summary>
        /// <param name="instancia">Documento de instancia a buscar</param>
        /// <param name="idConceptoElementoPrimario">Elemento primario actualmente evaluado</param>
        /// <param name="valorInstitucion">Institución para la cuál está desglosado este concepto</param>
        /// <returns>True si la institución ya desglosa otros elementos primarios del cubo, false en otro caso</returns>
        private bool InstitucionYaUtilizadaEnOtroConcepto(DocumentoInstanciaXbrlDto instancia, string idConceptoElementoPrimario, string valorInstitucion)
        {
            HechoDto hecho = null;
            ContextoDto contexto = null;
            foreach (var idConceptoPrimario in _elementosPrimariosMonetarios.Where(x => !x.Equals(idConceptoElementoPrimario)))
            {
                if (instancia.HechosPorIdConcepto.ContainsKey(idConceptoPrimario))
                {
                    foreach (var idHecho in instancia.HechosPorIdConcepto[idConceptoPrimario])
                    {
                        hecho = instancia.HechosPorId[idHecho];
                        if (hecho.IdContexto != null && instancia.ContextosPorId.ContainsKey(hecho.IdContexto)) {
                            contexto = instancia.ContextosPorId[hecho.IdContexto];
                            if (contexto.ValoresDimension != null) { 
                                foreach(var dimension in contexto.ValoresDimension.Where(x=>x.IdDimension.Equals(_idDimensionInstitucion))){

                                    var xmlMiembro = XmlUtil.CrearElementoXML(dimension.ElementoMiembroTipificado);
                                    var xmlMiembroComparar = XmlUtil.CrearElementoXML(String.Format(_templateTypedMemeberInstitucion, System.Web.HttpUtility.HtmlEncode(valorInstitucion)));
                                    if (XmlUtil.EsNodoEquivalente(xmlMiembro, xmlMiembroComparar))
                                    {
                                        return true;
                                    }
                                }
                            }
                        }
                    }
                }
            }
            return false;
        }

        /// <summary>
        /// Inicializa el mapeo a utiliza en la importación
        /// </summary>
        /// <param name="instancia"></param>
        /// <param name="plantillaDocumento"></param>
        /// <param name="rol"></param>
        private void Inicializar(DocumentoInstanciaXbrlDto instancia, IDefinicionPlantillaXbrl plantillaDocumento, string uriRol)
        {
            _mapeoElementosPrimariosRenglones = new Dictionary<string, string>();

            var rolImportar = instancia.Taxonomia.RolesPresentacion.FirstOrDefault(x => x.Uri.Contains("800001"));
            if (rolImportar != null)
            {
                LlenarMapeoElementos(rolImportar.Estructuras, instancia.Taxonomia);
            }

            _mapeoElementosPrimariosTotales = new Dictionary<string, string>();
            ConceptoDto concepto = null;
            foreach (var idTotal in _elementosPrimariosSubTotales)
            {
                if (instancia.Taxonomia.ConceptosPorId.ContainsKey(idTotal))
                {
                    concepto = instancia.Taxonomia.ConceptosPorId[idTotal];
                    foreach(var idioma in concepto.Etiquetas.Values){
                        foreach(var idiomaRol in idioma.Values){
                            if (!_mapeoElementosPrimariosTotales.ContainsKey(idiomaRol.Valor))
                            {
                                _mapeoElementosPrimariosTotales.Add(idiomaRol.Valor, idTotal);
                            }
                        }
                    }
                }
            }
        }
        /// <summary>
        /// Recorre el arbol de estructuras para inicializar el mapeo
        /// </summary>
        /// <param name="estructuras"></param>
        private void LlenarMapeoElementos(IEnumerable<EstructuraFormatoDto> estructuras, TaxonomiaDto taxonomia)
        {
            foreach (var estructuraFormatoDto in estructuras)
            {
                var concepto = taxonomia.ConceptosPorId[estructuraFormatoDto.IdConcepto];

                foreach (var idioma in concepto.Etiquetas.Values)
                {
                    foreach (var idiomaRol in idioma.Values)
                    {
                        if (!_mapeoElementosPrimariosRenglones.ContainsKey(idiomaRol.Valor))
                        {
                            _mapeoElementosPrimariosRenglones.Add(idiomaRol.Valor, estructuraFormatoDto.IdConcepto);
                        }
                    }
                }
                if (estructuraFormatoDto.SubEstructuras != null)
                {
                    LlenarMapeoElementos(estructuraFormatoDto.SubEstructuras, taxonomia);
                }
            }
        }

        private void ActualizarValorHecho(ConceptoDto concepto, string valorCelda, List<DimensionInfoDto> dimensiones,
            DateTime fechaInicio, DateTime fechaFin, string qNameEntidad, DocumentoInstanciaXbrlDto instancia, IDefinicionPlantillaXbrl plantillaDocumento,
            AbaxXBRLCore.Common.Dtos.ResumenProcesoImportacionExcelDto resumenImportacion, ISheet hojaImportar, int iRenglon, int columna)
        {
            if (String.IsNullOrEmpty(valorCelda))
            {
                return;
            }
            var hechos = instancia.BuscarHechos(concepto.Id, null, null, fechaInicio, fechaFin, dimensiones);
            if (hechos.Count > 0)
            {
                foreach (var hechoActualizar in hechos)
                {
                    if (!ActualizarValor(concepto, valorCelda, hechoActualizar, plantillaDocumento))
                    {
                        resumenImportacion.AgregarErrorFormato(
                                            UtilAbax.ObtenerEtiqueta(instancia.Taxonomia, concepto.Id),
                                            hojaImportar.SheetName,
                                            iRenglon.ToString(),
                                            "0",
                                            valorCelda);
                    }
                    else
                    {
                        resumenImportacion.TotalHechosImportados++;
                        var hechoImportado = new AbaxXBRLCore.Common.Dtos.InformacionHechoImportadoExcelDto()
                        {
                            IdConcepto = hechoActualizar.IdConcepto,
                            IdHecho = hechoActualizar.Id,
                            ValorImportado = valorCelda,
                            HojaExcel = hojaImportar.SheetName,
                            Renglon = iRenglon,
                            Columna = columna
                        };
                        resumenImportacion.AgregarHechoImportado(hechoImportado, UtilAbax.ObtenerEtiqueta(instancia.Taxonomia, hechoActualizar.Id));
                    }
                }
            }
            else
            {
                var qNameCompleto = XmlUtil.ParsearQName(qNameEntidad);
                AbaxXBRLCore.Viewer.Application.Dto.ContextoDto contextoDestino = null;
                var tipoPeriodo = concepto.TipoPeriodo.Equals(EtiquetasXBRLConstantes.Instant) ? Period.Instante : Period.Duracion;
                var contextos = instancia.BuscarContexto(qNameEntidad,
                    tipoPeriodo, fechaInicio, fechaFin, dimensiones);
                if (contextos == null || contextos.Count == 0)
                {
                    contextoDestino = new ContextoDto()
                    {
                        Entidad = new EntidadDto()
                        {
                            ContieneInformacionDimensional = false,
                            EsquemaId = qNameCompleto.Namespace,
                            Id = qNameCompleto.Name
                            
                        },
                        ContieneInformacionDimensional = dimensiones.Count > 0,
                        ValoresDimension = dimensiones,
                        Periodo = new PeriodoDto()
                        {
                            Tipo = tipoPeriodo,
                            FechaInicio = fechaInicio,
                            FechaFin = fechaFin,
                            FechaInstante = fechaFin
                        },
                        
                        Id = "C" + Guid.NewGuid().ToString()
                    };
                    plantillaDocumento.InyectarContextoADocumentoInstancia(contextoDestino);

                }
                else
                {
                    contextoDestino = contextos[0];

                }

                UnidadDto unidadDestino = null;
                if (concepto.EsTipoDatoNumerico)
                {
                    //Si es moentario
                    var listaMedidas = new List<MedidaDto>();

                    if (concepto.TipoDatoXbrl.Contains(TiposDatoXBRL.MonetaryItemType))
                    {
                        listaMedidas.Add(new MedidaDto(){
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

                var hechoNuevo = instancia.CrearHecho(concepto.Id, unidadDestino != null ? unidadDestino.Id : null, contextoDestino.Id, "A" + Guid.NewGuid().ToString());
                if (concepto.EsTipoDatoNumerico)
                {
                    hechoNuevo.Decimales = _valorDecimalesHechos;
                }

                if (!ActualizarValor(concepto, valorCelda, hechoNuevo, plantillaDocumento))
                {
                    resumenImportacion.AgregarErrorFormato(
                                            UtilAbax.ObtenerEtiqueta(instancia.Taxonomia, concepto.Id),
                                            hojaImportar.SheetName,
                                            iRenglon.ToString(),
                                            "0",
                                            valorCelda);
                }
                else {
                    resumenImportacion.TotalHechosImportados++;
                    var hechoImportado = new AbaxXBRLCore.Common.Dtos.InformacionHechoImportadoExcelDto()
                    {
                        IdConcepto = hechoNuevo.IdConcepto,
                        IdHecho = hechoNuevo.Id,
                        ValorImportado = valorCelda,
                        HojaExcel = hojaImportar.SheetName,
                        Renglon = iRenglon,
                        Columna = columna
                    };
                    resumenImportacion.AgregarHechoImportado(hechoImportado, UtilAbax.ObtenerEtiqueta(instancia.Taxonomia, hechoNuevo.Id));
                }

                plantillaDocumento.InyectaHechoADocumentoInstancia(hechoNuevo);
            }
        }
        /// <summary>
        /// Actualiza el valor de un hecho en base a su tipo y valor
        /// </summary>
        /// <param name="concepto"></param>
        /// <param name="valorCelda"></param>
        /// <param name="hechoNuevo"></param>
        private Boolean ActualizarValor(ConceptoDto concepto, string valorCelda, AbaxXBRLCore.Viewer.Application.Dto.HechoDto hechoNuevo,IDefinicionPlantillaXbrl plantilla)
        {
            var fechaDefault = plantilla.ObtenerVariablePorId("fecha_2015_01_01");
            
            return UtilAbax.ActualizarValorHecho(concepto,hechoNuevo,valorCelda,fechaDefault);
                        
        }

        public void ExportarDatosDeHojaExcel(ISheet hojaAExportar, ISheet hojaPlantilla, DocumentoInstanciaXbrlDto instancia, string rol, Model.IDefinicionPlantillaXbrl plantillaDocumento, String idioma)
        {
            Inicializar(instancia, plantillaDocumento, rol);
            string idConceptoHechoActual = null;
            var comentariosEnRol = new Dictionary<XSSFCell, HechoDto>();
            var qNameEntidad = plantillaDocumento.ObtenerVariablePorId("esquemaEntidad") + ":" +
                              plantillaDocumento.ObtenerVariablePorId("nombreEntidad");

            for (var iRenglon = _renglonInicioHechos; iRenglon <= hojaAExportar.LastRowNum; iRenglon++)
            {
                var valorCeldaElementoPrimario = ExcelUtil.ObtenerIdConceptoDeCelda(hojaAExportar, iRenglon, _columnaIdHechos);
                if (!String.IsNullOrEmpty(valorCeldaElementoPrimario))
                {
                    if (_mapeoElementosPrimariosRenglones.Values.Contains(valorCeldaElementoPrimario.Trim()))
                    {
                        idConceptoHechoActual = valorCeldaElementoPrimario;
                        iRenglon += InsertarRenglon(idConceptoHechoActual, instancia, plantillaDocumento, iRenglon, hojaAExportar, hojaPlantilla,comentariosEnRol);
                        
                    }
                    if ("ifrs_mx-cor_20141205_TotalDeCreditos".Equals(valorCeldaElementoPrimario.Trim()))
                    {
                        //última fila
                        break;
                    }
                }

            }
            foreach (var celda in comentariosEnRol.Keys)
            {
                ExcelUtil.AgregarComentarioCelda(celda.Sheet, celda, comentariosEnRol[celda]);
            }
        }

        public void ExportarRolADocumentoWord(Document word, Section seccionActual, DocumentoInstanciaXbrlDto instancia, string rol, IDefinicionPlantillaXbrl plantillaDocumento, string claveIdioma)
        {
            Inicializar(instancia, plantillaDocumento, rol);
            //Buscar el la tabla   []
            Table tabla800001 = null;

            NodeCollection allTables = seccionActual.GetChildNodes(NodeType.Table, true);
            foreach (Table table in allTables)
            {
                if (table.Range.Text.Contains("Institución [eje]") || table.Range.Text.Contains("Institution [axis]"))
                {
                    tabla800001 = table;
                    break;
                }
            }

            if (tabla800001 != null)
            {
                for (int iRenglon = 1; iRenglon < tabla800001.Rows.Count; iRenglon++)
                {
                    var valorCeldaElementoPrimario = tabla800001.Rows[iRenglon].FirstCell.Range.Text;

                    var keyValElementoPrimario = _mapeoElementosPrimariosRenglones.FirstOrDefault(x => valorCeldaElementoPrimario.Contains(x.Key)).Key;

                    if (keyValElementoPrimario != null)
                    {
                        var idConceptoHechoActual = _mapeoElementosPrimariosRenglones[keyValElementoPrimario];
                        iRenglon += InsertarRenglonWord(idConceptoHechoActual, instancia, plantillaDocumento, iRenglon, word, tabla800001, claveIdioma);
                        if (valorCeldaElementoPrimario.Contains(_totalDeCreditos))
                        {
                            //última fila
                            break;
                        }
                    }
                }
            }

        }
        /// <summary>
        /// Inserta uno más renglones en la tabla de word con los datos del deslogse de créditos para bancos o totales
        /// </summary>
        /// <returns>Número de renglones insertados</returns>
        private int InsertarRenglonWord(string idConceptoHechoActual, DocumentoInstanciaXbrlDto instancia, IDefinicionPlantillaXbrl plantillaDocumento, int iRenglon, Document word, Table tabla800001, string claveIdioma)
        {
            int renglonesInsertados = 0;
            var fuente = tabla800001.Rows[iRenglon].FirstCell.FirstParagraph.Runs[0].Font;

            DateTime fechaInicio = DateTime.MinValue;
            DateTime fechaFin = DateTime.MinValue;
            //Trimestre actual

            if (XmlUtil.ParsearUnionDateTime(plantillaDocumento.ObtenerVariablePorId("fecha_2015_09_30"), out fechaFin)
                &&
                XmlUtil.ParsearUnionDateTime(plantillaDocumento.ObtenerVariablePorId("fecha_2015_01_01"), out fechaInicio))
            {
                var hechosElemento = instancia.BuscarHechos(idConceptoHechoActual, null, null, fechaInicio, fechaFin, null, false);

                var institucionesRelacionadas = ObtenerDistintasInstituciones(hechosElemento, instancia);

                var dimensionDenominacion = new DimensionInfoDto()
                {
                    Explicita = true,
                    IdDimension = _idDimensionDenominacion,
                    IdItemMiembro = _idItemMiembroTotalMonedas
                };
                var dimensionIntervalo = new DimensionInfoDto()
                {
                    Explicita = true,
                    IdDimension = _idDimensionIntervalo,
                    IdItemMiembro = _idItemMiembroTotalIntervalos
                };
                //Escribir renglón de institución


                //Si no es un subtotal
                if (!_elementosPrimariosSubTotales.Contains(idConceptoHechoActual))
                {
                    foreach (var institucionMember in institucionesRelacionadas)
                    {
                        renglonesInsertados++;
                        var renglonNuevo = iRenglon + renglonesInsertados;
                        var dimensiones = new List<DimensionInfoDto>() { dimensionDenominacion, dimensionIntervalo, institucionMember };
                        //insertar renglon
                        var renglon = (Row)tabla800001.Rows[renglonNuevo].Clone(true);
                        tabla800001.InsertAfter(renglon, tabla800001.Rows[renglonNuevo - 1]);
                        renglon.FirstCell.FirstParagraph.AppendChild(new Run(word, ObtenerNombreInstitucion(institucionMember)));
                        renglon.FirstCell.FirstParagraph.Runs[0].Font.Name = fuente.Name;
                        renglon.FirstCell.FirstParagraph.Runs[0].Font.Size = fuente.Size;
                        //Escribir los elementos primarios que van en total
                        dimensionDenominacion.IdItemMiembro = _idItemMiembroTotalMonedas;
                        dimensionIntervalo.IdItemMiembro = _idItemMiembroTotalIntervalos;
                        for (var iCol = _columnaInicioHechosTotales; iCol <= _columnaFinHechosTotales; iCol++)
                        {
                            var idConceptoHechoTotal = _elementosPrimariosTotales[iCol - _columnaInicioHechosTotales];
                            var hechoTotal = instancia.BuscarHechos(idConceptoHechoTotal, null, null, fechaInicio, fechaFin, dimensiones);
                            if (hechoTotal != null && hechoTotal.Count > 0)
                            {
                                string valor = hechoTotal[0].Valor;
                                if (iCol - _columnaInicioHechosTotales == 0)
                                {
                                    if (CommonConstants.CADENAS_VERDADERAS.Contains(valor.Trim().ToLower()))
                                    {
                                        valor = "True";
                                    }
                                    else
                                    {
                                        valor = "False";
                                    }
                                    if (claveIdioma == "en")
                                    {
                                        valor = Boolean.Parse(valor) ? "Yes" : "No";
                                    }
                                    else
                                    {
                                        valor = Boolean.Parse(valor) ? "Si" : "No";
                                    }
                                }

                                renglon.Cells[iCol].FirstParagraph.AppendChild(new Run(word, String.IsNullOrEmpty(valor)?String.Empty:valor));
                                renglon.Cells[iCol].FirstParagraph.Runs[0].Font.Name = fuente.Name;
                                renglon.Cells[iCol].FirstParagraph.Runs[0].Font.Size = fuente.Size;
                            }
                            else
                            {
                                //renglon.Cells[iCol].FirstParagraph.Runs[0].Text = "";
                            }
                        }
                        //Montos
                        for (var iCol = _columnaInicioHechosMontos; iCol <= _columnaFinHechosMontos; iCol++)
                        {
                            dimensionDenominacion.IdItemMiembro = _elementosPrimariosMonedas[iCol - _columnaInicioHechosMontos];
                            dimensionIntervalo.IdItemMiembro = _elementosPrimariosIntervalo[iCol - _columnaInicioHechosMontos];

                            var hechoMonto = instancia.BuscarHechos(idConceptoHechoActual, null, null, fechaInicio, fechaFin, dimensiones);
                            if (hechoMonto != null && hechoMonto.Count > 0)
                            {
                                string valor = "";
                                var concepto = instancia.Taxonomia.ConceptosPorId[idConceptoHechoActual];
                                if (concepto.TipoDatoXbrl.Contains(TiposDatoXBRL.MonetaryItemType))
                                {
                                    valor = "$ ";
                                }
                                double valorDouble = 0;
                                if (Double.TryParse(hechoMonto[0].Valor, NumberStyles.Any, CultureInfo.InvariantCulture,
                                    out valorDouble))
                                {
                                    valor += valorDouble.ToString("#,##0.00");
                                }
                                else
                                {
                                    valor = hechoMonto[0].Valor;
                                }
                                renglon.Cells[iCol].FirstParagraph.AppendChild(new Run(word, valor));
                                renglon.Cells[iCol].FirstParagraph.Runs[0].Font.Name = fuente.Name;
                                renglon.Cells[iCol].FirstParagraph.Runs[0].Font.Size = fuente.Size;
                            }

                        }
                    }
                }else
                {
                    //Escribir en renglón de total
                    foreach (var institucionMember in institucionesRelacionadas.Where(x => x.ElementoMiembroTipificado.Contains(_institucionTotal)))
                    {
                        var dimensiones = new List<DimensionInfoDto>() { dimensionDenominacion, dimensionIntervalo, institucionMember };
                        var renglon = tabla800001.Rows[iRenglon];
                        //Montos
                        for (var iCol = _columnaInicioHechosMontos; iCol <= _columnaFinHechosMontos; iCol++)
                        {
                            dimensionDenominacion.IdItemMiembro = _elementosPrimariosMonedas[iCol - _columnaInicioHechosMontos];
                            dimensionIntervalo.IdItemMiembro = _elementosPrimariosIntervalo[iCol - _columnaInicioHechosMontos];

                            var hechoMonto = instancia.BuscarHechos(idConceptoHechoActual, null, null, fechaInicio, fechaFin, dimensiones);
                            if (hechoMonto != null && hechoMonto.Count > 0)
                            {
                                string valor = "";
                                var concepto = instancia.Taxonomia.ConceptosPorId[idConceptoHechoActual];
                                if (concepto.TipoDatoXbrl.Contains(TiposDatoXBRL.MonetaryItemType))
                                {
                                    valor = "$ ";
                                }
                                double valorDouble = 0;
                                if (Double.TryParse(hechoMonto[0].Valor, NumberStyles.Any, CultureInfo.InvariantCulture,
                                    out valorDouble))
                                {
                                    valor += valorDouble.ToString("#,##0.00");
                                }
                                else
                                {
                                    valor = hechoMonto[0].Valor;
                                }
                                renglon.Cells[iCol].FirstParagraph.AppendChild(new Run(word, valor));
                                renglon.Cells[iCol].FirstParagraph.Runs[0].Font.Name = fuente.Name;
                                renglon.Cells[iCol].FirstParagraph.Runs[0].Font.Size = fuente.Size;
                            }

                        }
                    }
                }
                

            }
            return renglonesInsertados;
        }

        /// <summary>
        /// Insertar renglones correspondientes a las dimensiones de instituciones que tienen valor
        /// para el elemento primario de idConceptoHechoActual
        /// </summary>
        /// <param name="idConceptoHechoActual">ID del elemento primario</param>
        /// <param name="instancia">Documento de instancia</param>
        /// <param name="plantillaDocumento">Plantilla del documento</param>
        /// <param name="iRenglon">Renglón actual</param>
        /// <param name="hojaAExportar">Hoja para exportar</param>
        /// <param name="hojaPlantilla">Hoja de plantilla</param>
        /// <returns>Número de renglones insertados</returns>
        private int InsertarRenglon(string idConceptoHechoActual, DocumentoInstanciaXbrlDto instancia, IDefinicionPlantillaXbrl plantillaDocumento, int iRenglon,
            ISheet hojaAExportar, ISheet hojaPlantilla, Dictionary<XSSFCell, HechoDto> comentariosEnRol)
        {
            int renglonesInsertados = 0;
            DateTime fechaInicio = DateTime.MinValue;
            DateTime fechaFin = DateTime.MinValue;
            //Trimestre actual
            if (XmlUtil.ParsearUnionDateTime(plantillaDocumento.ObtenerVariablePorId("fecha_2015_09_30"), out fechaFin)
                &&
                XmlUtil.ParsearUnionDateTime(plantillaDocumento.ObtenerVariablePorId("fecha_2015_01_01"), out fechaInicio))
            {

                var hechosElemento = instancia.BuscarHechos(idConceptoHechoActual, null, null, fechaInicio, fechaFin, null, false);

                var institucionesRelacionadas = ObtenerDistintasInstituciones(hechosElemento, instancia);
                



                var dimensionDenominacion = new DimensionInfoDto()
                                                {
                                                    Explicita = true,
                                                    IdDimension = _idDimensionDenominacion,
                                                    IdItemMiembro = _idItemMiembroTotalMonedas
                                                };
                var dimensionIntervalo = new DimensionInfoDto()
                                                {
                                                    Explicita = true,
                                                    IdDimension = _idDimensionIntervalo,
                                                    IdItemMiembro = _idItemMiembroTotalIntervalos
                                                };
                //Si no es un subtotal
                if (!_elementosPrimariosSubTotales.Contains(idConceptoHechoActual))
                {
                    //Escribir renglón de institución
                    foreach (var institucionMember in institucionesRelacionadas)
                    {
                        renglonesInsertados++;
                        var renglonNuevo = iRenglon + renglonesInsertados;
                        var dimensiones = new List<DimensionInfoDto>()
                                          {
                                              dimensionDenominacion,
                                              dimensionIntervalo,
                                              institucionMember
                                          };
                        if (!institucionMember.ElementoMiembroTipificado.Contains(_institucionTotal))
                        {
                            //insertar renglon
                            hojaAExportar.ShiftRows(renglonNuevo, hojaAExportar.LastRowNum, 1);
                            var renglon = hojaAExportar.CreateRow(renglonNuevo);
                            var celda = renglon.GetCell(_columnaIdHechos, MissingCellPolicy.CREATE_NULL_AS_BLANK);

                            //Escribir institucion
                            ExcelUtil.AsignarValorCelda(hojaAExportar, renglonNuevo, _columnaIdHechos,
                                ObtenerNombreInstitucion(institucionMember), CellType.String,null);
                            dimensionDenominacion.IdItemMiembro = _idItemMiembroTotalMonedas;
                            dimensionIntervalo.IdItemMiembro = _idItemMiembroTotalIntervalos;
                            //Escribir los elementos primarios que van en total
                            for (var iCol = _columnaInicioHechosTotales; iCol <= _columnaFinHechosTotales; iCol++)
                            {
                                var idConceptoHechoTotal = ExcelUtil.ObtenerIdConceptoDeCelda(hojaPlantilla,
                                    _renglonPrimariosTotales, iCol);
                                var hechoTotal = instancia.BuscarHechos(idConceptoHechoTotal, null, null, fechaInicio,
                                    fechaFin, dimensiones);
                                if (hechoTotal != null && hechoTotal.Count > 0)
                                {
                                    var conceptoHechoTotal = instancia.Taxonomia.ConceptosPorId.ContainsKey(idConceptoHechoTotal) ?
                                        instancia.Taxonomia.ConceptosPorId[idConceptoHechoTotal] : null;
                                    var valorFinal = hechoTotal[0].Valor;

                                    if (conceptoHechoTotal != null && conceptoHechoTotal.TipoDatoXbrl.Contains(TiposDatoXBRL.BooleanItemType))
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
                                    ExcelUtil.AsignarValorCelda(hojaAExportar, renglonNuevo, iCol, valorFinal,
                                        CellType.String, hechoTotal[0], false);
                                    if (hechoTotal[0].NotasAlPie != null && hechoTotal[0].NotasAlPie.Count > 0)
                                    {
                                        comentariosEnRol.Add((XSSFCell)hojaAExportar.GetRow(renglonNuevo).GetCell(iCol, MissingCellPolicy.CREATE_NULL_AS_BLANK), hechoTotal[0]);
                                    }

                                }
                            }
                        }
                        else
                        {
                            renglonesInsertados++;
                            renglonNuevo = iRenglon + renglonesInsertados;
                        }
                        
                        //Montos
                        for (var iCol = _columnaInicioHechosMontos; iCol <= _columnaFinHechosMontos; iCol++)
                        {
                            dimensionDenominacion.IdItemMiembro = ExcelUtil.ObtenerIdConceptoDeCelda(hojaPlantilla,
                                _renglonItemMiembroDenominacion, iCol);
                            dimensionIntervalo.IdItemMiembro = ExcelUtil.ObtenerIdConceptoDeCelda(hojaPlantilla,
                                _renglonItemMiembroIntervalo, iCol);

                            var hechoMonto = instancia.BuscarHechos(idConceptoHechoActual, null, null, fechaInicio,
                                fechaFin, dimensiones);
                            if (hechoMonto != null && hechoMonto.Count > 0)
                            {
                                ExcelUtil.AsignarValorCelda(hojaAExportar, renglonNuevo, iCol, hechoMonto[0].Valor,
                                    CellType.Numeric, hechoMonto[0],false);
                                if (hechoMonto[0].NotasAlPie != null && hechoMonto[0].NotasAlPie.Count > 0)
                                {
                                    comentariosEnRol.Add((XSSFCell)hojaAExportar.GetRow(renglonNuevo).GetCell(iCol, MissingCellPolicy.CREATE_NULL_AS_BLANK), hechoMonto[0]);
                                }
                            }
                        }
                    }
                }
                else
                {
                    //Escribir en renglón de total
                    foreach (var institucionMember in institucionesRelacionadas.Where(x => x.ElementoMiembroTipificado.Contains(_institucionTotal)))
                    {
                        var dimensiones = new List<DimensionInfoDto>() { dimensionDenominacion, dimensionIntervalo, institucionMember };
                        //Montos
                        for (var iCol = _columnaInicioHechosMontos; iCol <= _columnaFinHechosMontos; iCol++)
                        {
                            dimensionDenominacion.IdItemMiembro = ExcelUtil.ObtenerIdConceptoDeCelda(hojaPlantilla, _renglonItemMiembroDenominacion, iCol);
                            dimensionIntervalo.IdItemMiembro = ExcelUtil.ObtenerIdConceptoDeCelda(hojaPlantilla, _renglonItemMiembroIntervalo, iCol);

                            var hechoMonto = instancia.BuscarHechos(idConceptoHechoActual, null, null, fechaInicio, fechaFin, dimensiones);
                            if (hechoMonto != null && hechoMonto.Count > 0)
                            {
                                ExcelUtil.AsignarValorCelda(hojaAExportar, iRenglon + renglonesInsertados, iCol, hechoMonto[0].Valor, CellType.Numeric, hechoMonto[0],false);
                                if (hechoMonto[0].NotasAlPie != null && hechoMonto[0].NotasAlPie.Count > 0)
                                {
                                    comentariosEnRol.Add((XSSFCell)hojaAExportar.GetRow(iRenglon + renglonesInsertados).GetCell(iCol, MissingCellPolicy.CREATE_NULL_AS_BLANK), hechoMonto[0]);
                                }
                            }
                        }
                    }
                }
                
               
                

            }
            return renglonesInsertados;
        }
        /// <summary>
        /// Obtiene el nombre de la institución
        /// </summary>
        /// <param name="institucionMember">institución con origen de datos</param>
        /// <returns>Nombre de la institucion</returns>
        private string ObtenerNombreInstitucion(DimensionInfoDto institucionMember)
        {
            var nodo = XmlUtil.CrearElementoXML(institucionMember.ElementoMiembroTipificado);
            if (nodo != null && nodo.HasChildNodes)
            {
                return nodo.ChildNodes[0].InnerText;
            }
            return null;
        }

        /// <summary>
        /// Obtiene las diferentes valores de dimensión en la dimensión tipificada de institucion
        /// </summary>
        /// <param name="hechosElemento">Conjunto de hechos para obtener las diferentes dimensiones de institucion</param>
        /// <param name="instancia">Documento de instancia de los hechos</param>
        /// <returns></returns>
        private IList<DimensionInfoDto> ObtenerDistintasInstituciones(IList<HechoDto> hechosElemento, DocumentoInstanciaXbrlDto instancia)
        {
            var miembrosInstitucion = new List<DimensionInfoDto>();
            //Asegurarse de que la dimensión total quede hasta el final
            DimensionInfoDto dimTotal = null;
            foreach (var hecho in hechosElemento)
            {
                var ctx = instancia.ContextosPorId[hecho.IdContexto];
                if (ctx.ValoresDimension != null)
                {
                    foreach (var dimensionInstitucion in ctx.ValoresDimension.Where(x=>x.IdDimension != null && x.IdDimension.Equals(_idDimensionInstitucion)))
                    {
                        if (dimensionInstitucion.ElementoMiembroTipificado != null)
                        {
                            var nodo = XmlUtil.CrearElementoXML(dimensionInstitucion.ElementoMiembroTipificado);
                            if (nodo != null && !nodo.IsEmpty && nodo.InnerText != String.Empty)
                            {
                                if (dimensionInstitucion.ElementoMiembroTipificado.Contains(_institucionTotal))
                                {
                                    dimTotal = dimensionInstitucion;
                                }
                                else
                                {
                                    if (!miembrosInstitucion.Any(x => x.EsEquivalente(dimensionInstitucion)))
                                    {
                                        miembrosInstitucion.Add(dimensionInstitucion);
	
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if (dimTotal != null)
            {
                miembrosInstitucion.Add(dimTotal);
            }
            return miembrosInstitucion;
        }

        private string ObtenerQNameConcepto(ConceptoDto concepto)
        {
            if (concepto != null)
            {
                return concepto.EspacioNombres + ":" + concepto.Nombre;
            }
            return null;
        }
    }
}
