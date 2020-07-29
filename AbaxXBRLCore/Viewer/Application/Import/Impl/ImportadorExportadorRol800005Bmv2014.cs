using System.Activities.Expressions;
using System.Data;
using AbaxXBRL.Constantes;
using AbaxXBRL.Taxonomia;
using AbaxXBRL.Taxonomia.Linkbases;
using AbaxXBRL.Util;
using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.Entities;
using AbaxXBRLCore.Viewer.Application.Dto;
using AbaxXBRLCore.Viewer.Application.Model;
using Aspose.Words;
using Aspose.Words.Tables;
using NPOI.HSSF.Record;
using NPOI.SS.UserModel;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;


namespace AbaxXBRLCore.Viewer.Application.Import.Impl
{
    /// <summary>
    /// Implementación específica para la importación y exportación del rol 800005 
    /// de la taxonomía 2014 IFRS de BMV - Distribución de ingresos por producto
    /// </summary>
    /// <author>Emigido Hernandez</author>
    class ImportadorExportadorRol800005Bmv2014 : IImportadorExportadorRolDocumento
    {
        ///
        /// Variables de configuración de la plantilla de captura
        ///

        private static int _renglonDimensionMarca = 5;
        private static int _renglonDimensionProducto = 5;
        private static int _renglonDimensionTipoIngreso = 4;
        private static int _renglonDimensionItemTipoIngreso = 5;
        private static int _renglonInicioHechos = 6;
        private static int _columnaMarca = 0;
        private static int _columnaProducto = 1;
        private static int _columnaInicioHechos = 2;
        private static int _columnaFinHechos = 5;
        private static string _valorDecimalesHechos = "-3";
        private static string _todasLasMarcas = "TODAS";
        private static string _todosLosProductos = "TODOS";

        private static string _templateTypedMemeberMarcas = "<ifrs_mx-cor_20141205:PrincipalesMarcasDomain xmlns:ifrs_mx-cor_20141205=\"http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05\">{0}</ifrs_mx-cor_20141205:PrincipalesMarcasDomain>";
        private static string _templateTypedMemeberProducto = "<ifrs_mx-cor_20141205:PrincipalesProductosOLineaDeProductosDomain xmlns:ifrs_mx-cor_20141205=\"http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05\">{0}</ifrs_mx-cor_20141205:PrincipalesProductosOLineaDeProductosDomain>";

        private static string _tituloRenglonTotal = "Total";
        private static string _idElementoPrimarioIngresos = "ifrs_mx-cor_20141205_ImporteDeIngresos";
        private static string _idDimensionMarcas = "ifrs_mx-cor_20141205_PrincipalesMarcasEje";
        private static string _idDimensionProductos = "ifrs_mx-cor_20141205_PrincipalesProductosOLineaDeProductosEje";
        private static string _idDimensionTipoIngresos = "ifrs_mx-cor_20141205_TipoDeIngresoEje";
        private static string _total = "Total";

        private static int _renglonWordInicioHechos = 2;

        private static string[] _elementosMiembroTipoIngreso = new string[]
                                                                  {
                                                                      "ifrs_mx-cor_20141205_IngresosNacionalesMiembro",
                                                                      "ifrs_mx-cor_20141205_IngresosPorExportacionMiembro",
                                                                      "ifrs_mx-cor_20141205_IngresosDeSubsidiariasEnElExtranjeroMiembro",
                                                                      "ifrs_mx-cor_20141205_IngresosTotalesMiembro"
                                                                  };

        public void ImportarDatosDeHojaExcel(ISheet hojaAImportar, ISheet hojaPlantilla, DocumentoInstanciaXbrlDto instancia, string rol,
             AbaxXBRLCore.Common.Dtos.ResumenProcesoImportacionExcelDto resumenImportacion, Model.IDefinicionPlantillaXbrl plantillaDocumento)
        {
            var numRenglones = hojaAImportar.LastRowNum;
            var qNameEntidad = plantillaDocumento.ObtenerVariablePorId("esquemaEntidad") + ":" +
                              plantillaDocumento.ObtenerVariablePorId("nombreEntidad");
            for (var iRenglon = _renglonInicioHechos; iRenglon <= numRenglones; iRenglon++)
            {
                var valorMarca = ExcelUtil.ObtenerValorCelda(hojaAImportar, iRenglon, _columnaMarca);
                var valorProducto = ExcelUtil.ObtenerValorCelda(hojaAImportar, iRenglon, _columnaProducto);

                if (_tituloRenglonTotal.Equals(valorProducto.Trim()))
                {
                    //Fin de tabla
                    valorMarca = _todasLasMarcas;
                    valorProducto = _todosLosProductos;
                }

                if (!String.IsNullOrEmpty(valorMarca) && !String.IsNullOrEmpty(valorProducto))
                {
                    for (var iCol = _columnaInicioHechos; iCol <= _columnaFinHechos; iCol++)
                    {
                        var valorHecho = ExcelUtil.ObtenerValorCelda(hojaAImportar, iRenglon, iCol);
                        if (!String.IsNullOrEmpty(valorHecho))
                        {
                            var dimensionMarca = new DimensionInfoDto()
                            {
                                Explicita = false,
                                IdDimension = ExcelUtil.ObtenerIdConceptoDeCelda(hojaPlantilla, _renglonDimensionMarca, _columnaMarca),
                                QNameDimension = ObtenerQNameConcepto(instancia.Taxonomia.ConceptosPorId[ExcelUtil.ObtenerIdConceptoDeCelda(hojaPlantilla, _renglonDimensionMarca, _columnaMarca)]),
                                ElementoMiembroTipificado = String.Format(_templateTypedMemeberMarcas, System.Web.HttpUtility.HtmlEncode(valorMarca))
                            };
                            var dimensionProducto = new DimensionInfoDto()
                            {
                                Explicita = false,
                                IdDimension = ExcelUtil.ObtenerIdConceptoDeCelda(hojaPlantilla, _renglonDimensionProducto, _columnaProducto),
                                QNameDimension = ObtenerQNameConcepto(instancia.Taxonomia.ConceptosPorId[ExcelUtil.ObtenerIdConceptoDeCelda(hojaPlantilla, _renglonDimensionProducto, _columnaProducto)]),
                                ElementoMiembroTipificado = String.Format(_templateTypedMemeberProducto, System.Web.HttpUtility.HtmlEncode(valorProducto))
                            };
                            var dimensionTipoIngreso = new DimensionInfoDto()
                            {
                                Explicita = true,
                                IdDimension = _idDimensionTipoIngresos,
                                QNameDimension = ObtenerQNameConcepto(instancia.Taxonomia.ConceptosPorId[_idDimensionTipoIngresos]),
                                IdItemMiembro = ExcelUtil.ObtenerIdConceptoDeCelda(hojaPlantilla, _renglonDimensionItemTipoIngreso, iCol),
                                QNameItemMiembro = ObtenerQNameConcepto(instancia.Taxonomia.ConceptosPorId[ExcelUtil.ObtenerIdConceptoDeCelda(hojaPlantilla, _renglonDimensionItemTipoIngreso, iCol)]),
                            };

                            DateTime fechaInicio = DateTime.MinValue;
                            DateTime fechaFin = DateTime.MinValue;
                            //Trimestre actual

                            if (XmlUtil.ParsearUnionDateTime(plantillaDocumento.ObtenerVariablePorId("fecha_2015_09_30"), out fechaFin)
                                &&
                                XmlUtil.ParsearUnionDateTime(plantillaDocumento.ObtenerVariablePorId("fecha_2015_01_01"), out fechaInicio))
                            {

                                ActualizarValorHecho(instancia.Taxonomia.ConceptosPorId[_idElementoPrimarioIngresos],
                                valorHecho,
                                new List<DimensionInfoDto>()
                                    {
                                        dimensionMarca, 
                                        dimensionProducto,
                                        dimensionTipoIngreso
                                    },
                                fechaInicio, fechaFin, qNameEntidad,
                                instancia, plantillaDocumento, resumenImportacion, hojaAImportar, iRenglon, iCol);
                            }
                        }
                    }
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

            var fechaDefault = plantillaDocumento.ObtenerVariablePorId("fecha_2015_01_01");
            List<HechoDto> hechosAActualizar = new List<HechoDto>();

            var hechos = instancia.BuscarHechos(concepto.Id, null, null, fechaInicio, fechaFin, dimensiones);
            if (hechos.Count > 0)
            {
                hechosAActualizar.AddRange(hechos);
            }
            else
            {
                var qNameCompleto = XmlUtil.ParsearQName(qNameEntidad);
                ContextoDto contextoDestino = null;
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
                    var listaMedidas = new List<MedidaDto>() { 
                    new MedidaDto(){
                        EspacioNombres = plantillaDocumento.ObtenerVariablePorId("medida_http___www_xbrl_org_2003_iso4217"),
                        Nombre = plantillaDocumento.ObtenerVariablePorId("medida_MXN")
                    }};

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
                    hechoNuevo.Valor = "0";
                    hechoNuevo.Decimales = _valorDecimalesHechos;
                }
                hechosAActualizar.Add(hechoNuevo);

                plantillaDocumento.InyectaHechoADocumentoInstancia(hechoNuevo);
            }

            foreach (var hechoActualizar in hechosAActualizar)
            {
                var conceptoImportar = instancia.Taxonomia.ConceptosPorId[hechoActualizar.IdConcepto];
                if (!UtilAbax.ActualizarValorHecho(conceptoImportar, hechoActualizar, valorCelda, fechaDefault))
                {
                    resumenImportacion.AgregarErrorFormato(
                        UtilAbax.ObtenerEtiqueta(instancia.Taxonomia, conceptoImportar.Id),
                        hojaImportar.SheetName,
                        iRenglon.ToString(),
                        columna.ToString(),
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

                    resumenImportacion.AgregarHechoImportado(hechoImportado, UtilAbax.ObtenerEtiqueta(instancia.Taxonomia, conceptoImportar.Id));

                }
            }
        }
        /// <summary>
        /// Actualiza el valor de un hecho en base a su tipo y valor
        /// </summary>
        /// <param name="concepto"></param>
        /// <param name="valorCelda"></param>
        /// <param name="hechoNuevo"></param>
        private void ActualizarValor(ConceptoDto concepto, string valorCelda, AbaxXBRLCore.Viewer.Application.Dto.HechoDto hechoNuevo)
        {
            if (concepto.EsTipoDatoNumerico)
            {
                double valorNumerico = 0;
                if (Double.TryParse(valorCelda, System.Globalization.NumberStyles.Any, CultureInfo.InvariantCulture, out valorNumerico))
                {
                    hechoNuevo.Valor = valorCelda;
                }
            }
            else
            {
                hechoNuevo.Valor = valorCelda;
            }
        }

        public void ExportarDatosDeHojaExcel(ISheet hojaAExportar, ISheet hojaPlantilla, DocumentoInstanciaXbrlDto instancia, string rol, Model.IDefinicionPlantillaXbrl plantillaDocumento, String idioma)
        {
            DateTime fechaInicio = DateTime.MinValue;
            DateTime fechaFin = DateTime.MinValue;
            //Trimestre actual

            if (XmlUtil.ParsearUnionDateTime(plantillaDocumento.ObtenerVariablePorId("fecha_2015_09_30"), out fechaFin)
                &&
                XmlUtil.ParsearUnionDateTime(plantillaDocumento.ObtenerVariablePorId("fecha_2015_01_01"), out fechaInicio))
            {

                var todasLasMarcas = new DimensionInfoDto()
                {
                    Explicita = false,
                    IdDimension = _idDimensionMarcas,
                    QNameDimension = ObtenerQNameConcepto(instancia.Taxonomia.ConceptosPorId[_idDimensionMarcas]),
                    ElementoMiembroTipificado = String.Format(_templateTypedMemeberMarcas, _todasLasMarcas)
                };
                var todosLosProductos = new DimensionInfoDto()
                {
                    Explicita = false,
                    IdDimension = _idDimensionProductos,
                    QNameDimension = ObtenerQNameConcepto(instancia.Taxonomia.ConceptosPorId[_idDimensionProductos]),
                    ElementoMiembroTipificado = String.Format(_templateTypedMemeberProducto, _todosLosProductos)
                };


                var combinacionesMarcaProducto = ObtenerCombinacionesDimensionesMarcaProducto(instancia, fechaInicio, fechaFin);
                if (combinacionesMarcaProducto.Count > 0)
                {
                    hojaAExportar.ShiftRows(_renglonInicioHechos, hojaAExportar.LastRowNum, combinacionesMarcaProducto.Count);
                }

                var iRenglon = _renglonInicioHechos;
                foreach (var combinacion in combinacionesMarcaProducto)
                {
                    var renglon = hojaAExportar.CreateRow(iRenglon);

                    ExcelUtil.AsignarValorCelda(hojaAExportar, iRenglon, _columnaMarca, ObtenerNombreMarcaOProducto(combinacion[0]), CellType.String, null);
                    ExcelUtil.AsignarValorCelda(hojaAExportar, iRenglon, _columnaProducto, ObtenerNombreMarcaOProducto(combinacion[1]), CellType.String, null);

                    var dimensionTipoIngreso = new DimensionInfoDto()
                    {
                        Explicita = true,
                    };

                    var listaDimensiones = new List<DimensionInfoDto>
                                           {
                                               combinacion[0],
                                               combinacion[1],
                                               dimensionTipoIngreso
                                           };

                    for (var iCol = _columnaInicioHechos; iCol <= _columnaFinHechos; iCol++)
                    {
                        dimensionTipoIngreso.IdDimension = _idDimensionTipoIngresos;
                        dimensionTipoIngreso.QNameDimension = ObtenerQNameConcepto(instancia.Taxonomia.ConceptosPorId[_idDimensionTipoIngresos]);
                        dimensionTipoIngreso.IdItemMiembro = ExcelUtil.ObtenerIdConceptoDeCelda(hojaPlantilla, _renglonDimensionItemTipoIngreso, iCol);
                        dimensionTipoIngreso.QNameItemMiembro = ObtenerQNameConcepto(instancia.Taxonomia.ConceptosPorId[ExcelUtil.ObtenerIdConceptoDeCelda(hojaPlantilla, _renglonDimensionItemTipoIngreso, iCol)]);

                        var hecho = instancia.BuscarHechos(_idElementoPrimarioIngresos, null, null, fechaInicio,
                            fechaFin, listaDimensiones);
                        if (hecho != null && hecho.Count > 0)
                        {
                            ExcelUtil.AsignarValorCelda(hojaAExportar, iRenglon, iCol, hecho[0].Valor, CellType.Numeric, hecho[0]);
                        }
                    }
                    iRenglon++;
                }

                var numRenglones = hojaAExportar.LastRowNum;
                for (; iRenglon <= numRenglones; iRenglon++)
                {
                    if (_tituloRenglonTotal.Equals(ExcelUtil.ObtenerValorCelda(hojaAExportar, iRenglon, _columnaProducto)))
                    {
                        for (var iCol = _columnaInicioHechos; iCol <= _columnaFinHechos; iCol++)
                        {
                            var tipoIngreso = new DimensionInfoDto()
                            {
                                Explicita = true,
                                IdDimension = _idDimensionTipoIngresos,
                                QNameDimension = ObtenerQNameConcepto(instancia.Taxonomia.ConceptosPorId[_idDimensionTipoIngresos]),
                                IdItemMiembro = ExcelUtil.ObtenerIdConceptoDeCelda(hojaPlantilla, _renglonDimensionItemTipoIngreso, iCol),
                                QNameItemMiembro = ObtenerQNameConcepto(instancia.Taxonomia.ConceptosPorId[ExcelUtil.ObtenerIdConceptoDeCelda(hojaPlantilla, _renglonDimensionItemTipoIngreso, iCol)])
                            };

                            var hecho = instancia.BuscarHechos(_idElementoPrimarioIngresos, null, null, fechaInicio,
                                fechaFin, new List<DimensionInfoDto>() { todasLasMarcas, todosLosProductos, tipoIngreso });
                            if (hecho != null && hecho.Count > 0)
                            {
                                ExcelUtil.AsignarValorCelda(hojaAExportar, iRenglon, iCol, hecho[0].Valor, CellType.Numeric, hecho[0]);
                            }
                        }
                        break;
                    }
                }
            }
        }

        public void ExportarRolADocumentoWord(Document word, Section seccionActual, DocumentoInstanciaXbrlDto instancia, string rol, IDefinicionPlantillaXbrl plantillaDocumento, string claveIdioma)
        {

            //Buscar el la tabla   []
            Table tabla800005 = null;

            NodeCollection allTables = seccionActual.GetChildNodes(NodeType.Table, true);
            foreach (Table table in allTables)
            {
                if (table.Range.Text.Contains("Ingresos nacionales [miembro]") || table.Range.Text.Contains("National income [member]"))
                {
                    tabla800005 = table;
                    break;
                }
            }

            if (tabla800005 != null)
            {
                DateTime fechaInicio = DateTime.MinValue;
                DateTime fechaFin = DateTime.MinValue;
                //Trimestre actual


                if (XmlUtil.ParsearUnionDateTime(plantillaDocumento.ObtenerVariablePorId("fecha_2015_09_30"), out fechaFin)
                    &&
                    XmlUtil.ParsearUnionDateTime(plantillaDocumento.ObtenerVariablePorId("fecha_2015_01_01"), out fechaInicio))
                {
                    var todasLasMarcas = new DimensionInfoDto()
                    {
                        Explicita = false,
                        IdDimension = _idDimensionMarcas,
                        ElementoMiembroTipificado = String.Format(_templateTypedMemeberMarcas, _todasLasMarcas)
                    };
                    var todosLosProductos = new DimensionInfoDto()
                    {
                        Explicita = false,
                        IdDimension = _idDimensionProductos,
                        ElementoMiembroTipificado = String.Format(_templateTypedMemeberProducto, _todosLosProductos)
                    };


                    var combinacionesMarcaProducto = ObtenerCombinacionesDimensionesMarcaProducto(instancia, fechaInicio, fechaFin);

                    var iRenglon = _renglonWordInicioHechos;
                    var renglonInicioHechos = tabla800005.Rows[_renglonWordInicioHechos];

                    foreach (var combinacion in combinacionesMarcaProducto)
                    {

                        var renglonNuevo = (Row)renglonInicioHechos.Clone(true);

                        tabla800005.InsertBefore(renglonNuevo, renglonInicioHechos);

                        renglonNuevo.Cells[0].FirstParagraph.AppendChild(new Run(word, ObtenerNombreMarcaOProducto(combinacion[0])));
                        renglonNuevo.Cells[0].FirstParagraph.Runs[0].Font.Name = "Arial";
                        renglonNuevo.Cells[0].FirstParagraph.Runs[0].Font.Size = 6;
                        renglonNuevo.Cells[1].FirstParagraph.AppendChild(new Run(word, ObtenerNombreMarcaOProducto(combinacion[1])));
                        renglonNuevo.Cells[1].FirstParagraph.Runs[0].Font.Name = "Arial";
                        renglonNuevo.Cells[1].FirstParagraph.Runs[0].Font.Size = 6;

                        var dimensionTipoIngreso = new DimensionInfoDto()
                        {
                            Explicita = true,
                        };

                        var listaDimensiones = new List<DimensionInfoDto>
                                           {
                                               combinacion[0],
                                               combinacion[1],
                                               dimensionTipoIngreso
                                           };

                        for (var iCol = _columnaInicioHechos; iCol <= _columnaFinHechos; iCol++)
                        {
                            dimensionTipoIngreso.IdDimension = _idDimensionTipoIngresos;
                            dimensionTipoIngreso.IdItemMiembro = _elementosMiembroTipoIngreso[iCol - _columnaInicioHechos];

                            var hecho = instancia.BuscarHechos(_idElementoPrimarioIngresos, null, null, fechaInicio,
                                fechaFin, listaDimensiones);
                            if (hecho != null && hecho.Count > 0)
                            {
                                string valor = "$ ";

                                double valorDouble = 0;
                                if (Double.TryParse(hecho[0].Valor, NumberStyles.Any, CultureInfo.InvariantCulture,
                                    out valorDouble))
                                {
                                    valor += valorDouble.ToString("#,##0.00");
                                }
                                else
                                {
                                    valor = hecho[0].Valor;
                                }
                                renglonNuevo.Cells[iCol].FirstParagraph.AppendChild(new Run(word, valor));
                                renglonNuevo.Cells[iCol].FirstParagraph.Runs[0].Font.Name = "Arial";
                                renglonNuevo.Cells[iCol].FirstParagraph.Runs[0].Font.Size = 6;
                            }
                        }
                        iRenglon++;
                    }
                    var renglonTotal = tabla800005.LastRow;
                    for (var iCol = _columnaInicioHechos; iCol <= _columnaFinHechos; iCol++)
                    {
                        var tipoIngreso = new DimensionInfoDto()
                        {
                            Explicita = true,
                            IdDimension = _idDimensionTipoIngresos,
                            IdItemMiembro = _elementosMiembroTipoIngreso[iCol - _columnaInicioHechos]
                        };

                        var hecho = instancia.BuscarHechos(_idElementoPrimarioIngresos, null, null, fechaInicio,
                            fechaFin, new List<DimensionInfoDto>() { todasLasMarcas, todosLosProductos, tipoIngreso });
                        if (hecho != null && hecho.Count > 0)
                        {
                            string valor = "$ ";
                            double valorDouble = 0;
                            if (Double.TryParse(hecho[0].Valor, NumberStyles.Any, CultureInfo.InvariantCulture,
                                out valorDouble))
                            {
                                valor += valorDouble.ToString("#,##0.00");
                            }
                            else
                            {
                                valor = hecho[0].Valor;
                            }
                            renglonTotal.Cells[iCol].FirstParagraph.AppendChild(new Run(word, valor));
                            renglonTotal.Cells[iCol].FirstParagraph.Runs[0].Font.Name = "Arial";
                            renglonTotal.Cells[iCol].FirstParagraph.Runs[0].Font.Size = 6;
                        }
                    }
                }
            }
        }

        /// <summary>
        /// Obtiene las diferentes combinaciones de Marca-Producto en los contextos de cierta fecha
        /// </summary>
        /// <param name="instancia"></param>
        /// <param name="fechaInicio"></param>
        /// <param name="fechaFin"></param>
        /// <returns></returns>
        private IList<DimensionInfoDto[]> ObtenerCombinacionesDimensionesMarcaProducto(DocumentoInstanciaXbrlDto instancia, DateTime fechaInicio, DateTime fechaFin)
        {
            var listaCombinaciones = new List<DimensionInfoDto[]>();

            foreach (var ctx in instancia.ContextosPorId.Values)
            {
                if (ctx.Periodo.Tipo == Period.Instante)
                {
                    if (!ctx.Periodo.FechaInstante.Equals(fechaFin))
                    {
                        continue;
                    }
                }
                else
                {
                    if (!ctx.Periodo.FechaInicio.Equals(fechaInicio) || !ctx.Periodo.FechaFin.Equals(fechaFin))
                    {
                        continue;
                    }
                }

                if (ctx.ValoresDimension != null && ctx.ValoresDimension.Count > 0)
                {
                    var dimensionMarca = ctx.ValoresDimension.FirstOrDefault(x => x.IdDimension != null && x.IdDimension.Equals(_idDimensionMarcas) && x.ElementoMiembroTipificado != null &&
                        !x.ElementoMiembroTipificado.Contains(_todasLasMarcas));
                    var dimensionProductos = ctx.ValoresDimension.FirstOrDefault(x => x.IdDimension != null && x.IdDimension.Equals(_idDimensionProductos) && x.ElementoMiembroTipificado != null &&
                        !x.ElementoMiembroTipificado.Contains(_todosLosProductos));

                    if (dimensionMarca != null && dimensionProductos != null)
                    {
                        //SI la lista no tiene la combinación, agregarla
                        if (!listaCombinaciones.Any(x =>
                            ObtenerNombreMarcaOProducto(x[0]).Equals(ObtenerNombreMarcaOProducto(dimensionMarca)) &&
                            ObtenerNombreMarcaOProducto(x[1]).Equals(ObtenerNombreMarcaOProducto(dimensionProductos))
                            ))
                        {
                            listaCombinaciones.Add(new DimensionInfoDto[] { dimensionMarca, dimensionProductos });
                        }
                    }
                }

            }
            return listaCombinaciones;
        }
        /// <summary>
        /// Obtiene el nombre de la marca o producto
        /// </summary>
        /// <param name="dimensionMember">dimension con origen de datos</param>
        /// <returns>Valor del miembro de la dimensión</returns>
        private string ObtenerNombreMarcaOProducto(DimensionInfoDto dimensionMember)
        {
            var nodo = XmlUtil.CrearElementoXML(dimensionMember.ElementoMiembroTipificado);
            if (nodo != null && nodo.HasChildNodes)
            {
                return nodo.ChildNodes[0].InnerText;
            }
            return String.Empty;
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
