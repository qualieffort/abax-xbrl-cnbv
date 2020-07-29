using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Viewer.Application.Dto;
using AbaxXBRLCore.Viewer.Application.Model;
using Aspose.Words;
using NPOI.SS.UserModel;
using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.Reports.Util;
using AbaxXBRL.Util;
using AbaxXBRL.Constantes;
using AbaxXBRL.Taxonomia;

namespace AbaxXBRLCore.Viewer.Application.Import.Impl
{
    /// <summary>
    /// Implementación de un importador-exportador para excel para el rol 431000 personas responsables 
    /// de la taxonomía de Reporte Anual
    /// </summary>
    public class ImportadorExportadorRol431000_AR2016 : IImportadorExportadorRolDocumento
    {
        /// <summary>
        /// Números de columnas y renglones principales
        /// </summary>
        private int COL_CONCEPTO_FIGURA = 0;
        private int COL_CONCEPTO_INSTITUCION = 0;
        private int COL_CONCEPTO_LEYENDA = 1;
        private int COL_CONCEPTO_NOMBRE = 2;
        private int COL_CONCEPTO_CARGO = 3;
       
        private string _valorDecimalesHechos = "-3";
        /// <summary>
        /// Identificadores de concepto principales
        /// </summary>
        private String ID_DIMENSION_FIGURA = "ar_pros_TypeOfResponsibleFigureAxis";

        private String ID_DIMENSION_TYPED_INSTITUCION = "ar_pros_ResponsiblePersonsInstitutionSequenceTypedAxis";

        private String ID_DIMENSION_TYPED_PERSONA = "ar_pros_ResponsiblePersonsSequenceTypedAxis";

        private String[] MIEMBROS_DIMENSION_FIGURA = {
            "ar_pros_MembersOfTheBoardOfDirectorsA2N1Member",
            "ar_pros_MembersOfTheBoardOfDirectorsAuditCommitteeA2N1Member",
            "ar_pros_CommissionerA2N2Member",
            "ar_pros_CeoCfoAndGeneralCounselOrTheirEquivalentsA2N3Member",
            "ar_pros_UnderwriterA2N4Member",
            "ar_pros_UnderwriterSharesA2N4Member",
            "ar_pros_UnderwriterRestrictedOfferA2N4Member",
            "ar_pros_UnderwriterPublicOfferSharesAndRestrictedA2N4Member",
            "ar_pros_ExternalAuditorRepresentativeAndAuditorA2N5Member",
            "ar_pros_BachelorOfLawsA2N6Member",
            "ar_pros_LegalRepresentativeOrAvalGuarantorA3NEMember",
            "ar_pros_LegalRepresentativeOfTheTrustA2N8Member",
            "ar_pros_DirectGeneralChiefFinancialOfficerAndGeneralCounselRepresentingTheSettlorOrWhoSupplyGoodsToTheTrustA2N9Member",
            "ar_pros_CommonRepresentativeTrustSecuritiesOtherThanSharesA2N10Member",
            "ar_pros_ExternalAuditorCkdsFibersAndFiberCerpisEA2N11Member",
            "ar_pros_StructuringAgentA2N12Member",
            "ar_pros_CeoCfoAndGeneralCounselOrTheirEquivalentsA33N11Member",
            "ar_pros_ExternalAuditorRepresentativeAndAuditorA33N12Member"

        };

        /// <summary>
        /// Template de la dimension typed instutucion y persona
        /// </summary>
        private static string _templateTypedMemeberInstitucion = "<ar_pros:ResponsiblePersonInstitutionSequenceDomain xmlns:ar_pros=\"http://www.cnbv.gob.mx/2016-08-22/ar_prospectus\">{0}</ar_pros:ResponsiblePersonInstitutionSequenceDomain>";
        private static string _templateTypedMemeberPerson = "<ar_pros:ResponsiblePersonSequenceDomain xmlns:ar_pros=\"http://www.cnbv.gob.mx/2016-08-22/ar_prospectus\">{0}</ar_pros:ResponsiblePersonSequenceDomain>";


        /// <summary>
        /// Mapeo de las etiquetas de la taxonomía con los identificadores de concepto
        /// </summary>
        private IDictionary<string, string> _mapeoMiembrosDimension = null;

        private String[] ID_CONCEPTO_PERSONAS = { "ar_pros_ResponsiblePersonName", "ar_pros_ResponsiblePersonPosition" };

        private String[] ID_CONCEPTO_INSTITUCION = { "ar_pros_ResponsiblePersonInstitution", "ar_pros_ResponsiblePersonLegend", "ar_pros_ResponsiblePersonInstitutionExternalAuditor" };
        /// <summary>
        /// Secuencias utilizadas por las dimensiones typed al importar
        /// </summary>
        private int secuenciaInstitucion = 1;
        private int secuenciaPersona = 1;
        /// <summary>
        /// indica si ya se realizó la eliminación de los valores anteriores al encontrar el primer renglón con datos
        /// </summary>
        private bool valoresAnterioresBorrados = false;

        public void ExportarDatosDeHojaExcel(ISheet hojaAExportar, ISheet hojaPlantilla, DocumentoInstanciaXbrlDto instancia, string rol, IDefinicionPlantillaXbrl plantillaDocumento, string idioma)
        {

            String idMiembroFiguraActual = null;
            var consultaUtil = new ConsultaDocumentoInstanciaUtil(instancia, plantillaDocumento);
            int iRow = 0;
            int lastRowNum = hojaAExportar.LastRowNum;
            while (iRow <= lastRowNum)
            {

                //Si inicia un tipo de figura
                var valorCelda = ExcelUtil.ObtenerValorCelda(hojaAExportar, iRow, COL_CONCEPTO_FIGURA);
                var valorCeldaHojaPlantilla = ExcelUtil.ObtenerValorCelda(hojaPlantilla, iRow, COL_CONCEPTO_FIGURA);
                if (!String.IsNullOrEmpty(valorCelda))
                {
                    idMiembroFiguraActual = MIEMBROS_DIMENSION_FIGURA.FirstOrDefault(x => valorCelda.Contains(x));
                    if (idMiembroFiguraActual != null)
                    {

                        iRow = ExportarFigura(iRow, idMiembroFiguraActual,hojaAExportar, instancia, plantillaDocumento, consultaUtil);
                        lastRowNum = hojaAExportar.LastRowNum;
                    }
                }
                iRow++;
               
            }
        }
        

        /// <summary>
        /// Exporta todos los hechos asociados al miembro de la figura enviada como parámetro
        /// </summary>
        /// <returns></returns>
        private int ExportarFigura(int numRow, string idMiembroFiguraActual, ISheet hojaAExportar, DocumentoInstanciaXbrlDto instancia, IDefinicionPlantillaXbrl plantillaDocumento, ConsultaDocumentoInstanciaUtil consultaUtil)
        {
            

            var idsHechosConceptosInstitucion = consultaUtil.BuscaHechosPorFiltro(new Dto.Hipercubos.FiltroHechosDto()
            {
                IdConcepto = ID_CONCEPTO_INSTITUCION,
            });

            if (hojaAExportar.SheetName == "431000-Auditor") {
                ID_CONCEPTO_INSTITUCION[0] = "ar_pros_ResponsiblePersonInstitutionExternalAuditor";
            }
            else if (hojaAExportar.SheetName == "431000-Derecho")
            {
                ID_CONCEPTO_INSTITUCION[0] = "ar_pros_ResponsiblePersonInstitutionBacherlorOfLaws";
            }
            var idsContextosInstitucion = consultaUtil.ObtenIdsContextosHechos(idsHechosConceptosInstitucion);
            

            var contextosPorInstitucion = consultaUtil.AgrupaContextosPorMiembro("http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:TypeOfResponsibleFigureAxis", idsContextosInstitucion);

            if (contextosPorInstitucion.ContainsKey(idMiembroFiguraActual)) {

                var contextosFiguraActual = contextosPorInstitucion[idMiembroFiguraActual];

                foreach (var idContextoFigActual in contextosFiguraActual) {
                    var ctxFigActual = instancia.ContextosPorId[idContextoFigActual];
                    var dimTypedInst = ctxFigActual.ValoresDimension.FirstOrDefault(x => x.IdDimension == ID_DIMENSION_TYPED_INSTITUCION);

                    var idsHechosConceptosPersonas = consultaUtil.BuscaHechosPorFiltro(new Dto.Hipercubos.FiltroHechosDto()
                    {
                        IdConcepto = ID_CONCEPTO_PERSONAS,
                        ConjuntosParcialesDimensiones = new List<IList<DimensionInfoDto>>(){ ctxFigActual.ValoresDimension }
                    });
                    var idsContextosPersonas = consultaUtil.ObtenIdsContextosHechos(idsHechosConceptosPersonas);
                    var contextosPorPersona = consultaUtil.AgrupaContextosPorMiembro("http://www.cnbv.gob.mx/2016-08-22/ar_prospectus:ResponsiblePersonsSequenceTypedAxis", idsContextosPersonas);

                    foreach (var seqPersona in contextosPorPersona.Keys) {
                        foreach (var idCtxPersona in contextosPorPersona[seqPersona]) {
                            numRow++;
                            hojaAExportar.ShiftRows(numRow, hojaAExportar.LastRowNum, 1);

                            var renglon = hojaAExportar.CreateRow(numRow);


                            var ctxPersona = instancia.ContextosPorId[idCtxPersona];


                            var hecho = consultaUtil.ObtenerHechoPorIdConcepto(instancia.HechosPorIdContexto[idCtxPersona], ID_CONCEPTO_PERSONAS[0]);
                            var celda = renglon.GetCell(COL_CONCEPTO_NOMBRE, MissingCellPolicy.CREATE_NULL_AS_BLANK);
                            celda.SetCellValue(hecho.Valor);

                            hecho = consultaUtil.ObtenerHechoPorIdConcepto(instancia.HechosPorIdContexto[idCtxPersona], ID_CONCEPTO_PERSONAS[1]);
                            celda = renglon.GetCell(COL_CONCEPTO_CARGO, MissingCellPolicy.CREATE_NULL_AS_BLANK);
                            celda.SetCellValue(hecho.Valor);

                            hecho = consultaUtil.ObtenerHechoPorIdConcepto(instancia.HechosPorIdContexto[idContextoFigActual], ID_CONCEPTO_INSTITUCION[0]);
                            celda = renglon.GetCell(COL_CONCEPTO_INSTITUCION, MissingCellPolicy.CREATE_NULL_AS_BLANK);
                            celda.SetCellValue(hecho.Valor);

                            hecho = consultaUtil.ObtenerHechoPorIdConcepto(instancia.HechosPorIdContexto[idContextoFigActual], ID_CONCEPTO_INSTITUCION[1]);
                            celda = renglon.GetCell(COL_CONCEPTO_LEYENDA, MissingCellPolicy.CREATE_NULL_AS_BLANK);
                            celda.SetCellValue(hecho.Valor);


                        }
                        
                    }
                }

            }


            return numRow;
        }

        public void ExportarRolADocumentoWord(Document word, Section section, DocumentoInstanciaXbrlDto instancia, string rol, IDefinicionPlantillaXbrl plantillaDocumento, string claveIdioma)
        {
            //throw new NotImplementedException();
        }

        public void ImportarDatosDeHojaExcel(ISheet hojaAImportar, ISheet hojaPlantilla, DocumentoInstanciaXbrlDto instancia, string rol, ResumenProcesoImportacionExcelDto resumenImportacion, IDefinicionPlantillaXbrl plantillaDocumento)
        {
            this.Inicializar(instancia, plantillaDocumento,rol);
            

            String idMiembroFiguraActual = null;
            int iRow = 0;
            int lastRowNum = hojaAImportar.LastRowNum;
            while (iRow <= lastRowNum)
            {
                //Si inicia un tipo de figura
                var valorCelda = ExcelUtil.ObtenerValorCelda(hojaAImportar, iRow, COL_CONCEPTO_FIGURA);
                if (!String.IsNullOrEmpty(valorCelda) && _mapeoMiembrosDimension.ContainsKey(valorCelda.Trim()))
                {
                    idMiembroFiguraActual = _mapeoMiembrosDimension[valorCelda.Trim()];
                    if (idMiembroFiguraActual != null)
                    {

                        iRow = ImportarRenglonFigura(iRow+1, idMiembroFiguraActual, hojaAImportar, instancia, plantillaDocumento,resumenImportacion);

                    }
                }
                else
                {
                    iRow++;
                }
                
            }



        }
        /// <summary>
        /// Procesa un renglón de la tabla de personas responsables importando su contenido
        /// </summary>
       
        /// <returns></returns>
        private int ImportarRenglonFigura(int numRow, string idMiembroFiguraActual, ISheet hojaAImportar, DocumentoInstanciaXbrlDto instancia, IDefinicionPlantillaXbrl plantillaDocumento, ResumenProcesoImportacionExcelDto resumenImportacion)
        {
            var institucionesActuales = new Dictionary<string, int>();
            DateTime fechaInicio = DateTime.MinValue;
            DateTime fechaFin = DateTime.MinValue;
            if (XmlUtil.ParsearUnionDateTime(plantillaDocumento.ObtenerVariablePorId("fecha_2014_12_31"), out fechaFin)
                &&
                XmlUtil.ParsearUnionDateTime(plantillaDocumento.ObtenerVariablePorId("fecha_2014_12_31"), out fechaInicio))
            {
                

                //Si inicia un tipo de figura
                 
                int lastRowNum = hojaAImportar.LastRowNum;
                //Mientras no se termine el documento o no se encuentre el inicio de otra figura
                while (numRow <= lastRowNum)
                {
                    var valorCelda = ExcelUtil.ObtenerValorCelda(hojaAImportar, numRow, COL_CONCEPTO_FIGURA);

                    if (valorCelda != null && _mapeoMiembrosDimension.ContainsKey(valorCelda.Trim())) {
                        break;
                    }

                    var valorInstitucion = ExcelUtil.ObtenerValorCelda(hojaAImportar, numRow, COL_CONCEPTO_INSTITUCION);
                    var valorLeyenda = ExcelUtil.ObtenerValorCelda(hojaAImportar, numRow, COL_CONCEPTO_LEYENDA);
                    var valorNombre = ExcelUtil.ObtenerValorCelda(hojaAImportar, numRow, COL_CONCEPTO_NOMBRE);
                    var valorCargo = ExcelUtil.ObtenerValorCelda(hojaAImportar, numRow, COL_CONCEPTO_CARGO);


                    if (!String.IsNullOrEmpty(valorInstitucion) && !String.IsNullOrEmpty(valorNombre) && !String.IsNullOrEmpty(valorCargo))
                    {
                        if (!valoresAnterioresBorrados)
                        {
                            ReporteXBRLUtil.EliminarHechosConceptos(ID_CONCEPTO_PERSONAS, instancia);
                            ReporteXBRLUtil.EliminarHechosConceptos(ID_CONCEPTO_INSTITUCION, instancia);
                            valoresAnterioresBorrados = true;
                        }
                        var dimensionFigura = new DimensionInfoDto()
                        {
                            Explicita = true,
                            IdDimension = ID_DIMENSION_FIGURA,
                            QNameDimension = ObtenerQNameConcepto(instancia.Taxonomia.ConceptosPorId[ID_DIMENSION_FIGURA]),
                            IdItemMiembro = idMiembroFiguraActual,
                            QNameItemMiembro = ObtenerQNameConcepto(instancia.Taxonomia.ConceptosPorId[idMiembroFiguraActual])
                        };
                        var dimensionInstitucion = new DimensionInfoDto()
                        {
                            Explicita = false,
                            IdDimension = ID_DIMENSION_TYPED_INSTITUCION,
                            QNameDimension = ObtenerQNameConcepto(instancia.Taxonomia.ConceptosPorId[ID_DIMENSION_TYPED_INSTITUCION])
                        };

                        var dimensionPersona = new DimensionInfoDto()
                        {
                            Explicita = false,
                            IdDimension = ID_DIMENSION_TYPED_PERSONA,
                            QNameDimension = ObtenerQNameConcepto(instancia.Taxonomia.ConceptosPorId[ID_DIMENSION_TYPED_PERSONA])
                        };

                        if (!institucionesActuales.ContainsKey(valorInstitucion))
                        {
                            //Agregar hechos de institución y leyenda
                            dimensionInstitucion.ElementoMiembroTipificado = String.Format(_templateTypedMemeberInstitucion, secuenciaInstitucion);
                            institucionesActuales[valorInstitucion] = secuenciaInstitucion;
                            secuenciaInstitucion++;
                            ActualizarValorHecho(instancia.Taxonomia.ConceptosPorId[ID_CONCEPTO_INSTITUCION[0]],
                                valorInstitucion,
                                new List<DimensionInfoDto>() { dimensionFigura, dimensionInstitucion },
                                fechaInicio, fechaFin,
                                plantillaDocumento.ObtenerVariablePorId("esquemaEntidad") + ":" + plantillaDocumento.ObtenerVariablePorId("nombreEntidad"),
                                instancia, plantillaDocumento, resumenImportacion, hojaAImportar, numRow, COL_CONCEPTO_INSTITUCION);

                            ActualizarValorHecho(instancia.Taxonomia.ConceptosPorId[ID_CONCEPTO_INSTITUCION[1]],
                                valorLeyenda,
                                new List<DimensionInfoDto>() { dimensionFigura, dimensionInstitucion },
                                fechaInicio, fechaFin,
                                plantillaDocumento.ObtenerVariablePorId("esquemaEntidad") + ":" + plantillaDocumento.ObtenerVariablePorId("nombreEntidad"),
                                instancia, plantillaDocumento, resumenImportacion, hojaAImportar, numRow, COL_CONCEPTO_LEYENDA);

                        }
                        else
                        {
                            dimensionInstitucion.ElementoMiembroTipificado = String.Format(_templateTypedMemeberInstitucion, institucionesActuales[valorInstitucion]);
                        }

                        //Agregar hechos de nombre y cargo
                        dimensionPersona.ElementoMiembroTipificado = String.Format(_templateTypedMemeberPerson, secuenciaPersona++);

                        ActualizarValorHecho(instancia.Taxonomia.ConceptosPorId[ID_CONCEPTO_PERSONAS[0]],
                                valorNombre,
                                new List<DimensionInfoDto>() { dimensionFigura, dimensionInstitucion,dimensionPersona },
                                fechaInicio, fechaFin,
                                plantillaDocumento.ObtenerVariablePorId("esquemaEntidad") + ":" + plantillaDocumento.ObtenerVariablePorId("nombreEntidad"),
                                instancia, plantillaDocumento, resumenImportacion, hojaAImportar, numRow, COL_CONCEPTO_NOMBRE);

                        ActualizarValorHecho(instancia.Taxonomia.ConceptosPorId[ID_CONCEPTO_PERSONAS[1]],
                                valorCargo,
                                new List<DimensionInfoDto>() { dimensionFigura, dimensionInstitucion, dimensionPersona },
                                fechaInicio, fechaFin,
                                plantillaDocumento.ObtenerVariablePorId("esquemaEntidad") + ":" + plantillaDocumento.ObtenerVariablePorId("nombreEntidad"),
                                instancia, plantillaDocumento, resumenImportacion, hojaAImportar, numRow, COL_CONCEPTO_CARGO);

                    }

                    numRow++;
                }

            }
            

            return numRow;
        }

        /// <summary>
        /// Inicializa el mapeo a utiliza en la importación
        /// </summary>
        /// <param name="instancia"></param>
        /// <param name="plantillaDocumento"></param>
        /// <param name="rol"></param>
        private void Inicializar(DocumentoInstanciaXbrlDto instancia, IDefinicionPlantillaXbrl plantillaDocumento, string uriRol)
        {
            _mapeoMiembrosDimension = new Dictionary<string, string>();

            foreach (var idMiembro in MIEMBROS_DIMENSION_FIGURA) {
                if (instancia.Taxonomia.ConceptosPorId.ContainsKey(idMiembro)) {
                    var concepto = instancia.Taxonomia.ConceptosPorId[idMiembro];
                    foreach (var idioma in concepto.Etiquetas.Values)
                        {
                            foreach (var idiomaRol in idioma.Values)
                            {
                                _mapeoMiembrosDimension.Add(idiomaRol.Valor.Trim(), idMiembro);
                            }
                        }
                    }
            }
        }


        /// <summary>
        /// Actualiza o crea un hecho en base a los parámetros enviados
        /// </summary>
      
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
                    contextoDestino = new AbaxXBRLCore.Viewer.Application.Dto.ContextoDto()
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
                else
                {
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
        private Boolean ActualizarValor(ConceptoDto concepto, string valorCelda, AbaxXBRLCore.Viewer.Application.Dto.HechoDto hechoNuevo, IDefinicionPlantillaXbrl plantilla)
        {
            var fechaDefault = plantilla.ObtenerVariablePorId("fecha_2014_12_31");

            return UtilAbax.ActualizarValorHecho(concepto, hechoNuevo, valorCelda, fechaDefault);

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
