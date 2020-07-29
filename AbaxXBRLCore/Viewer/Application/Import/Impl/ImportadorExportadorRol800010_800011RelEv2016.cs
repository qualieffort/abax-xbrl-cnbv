using AbaxXBRL.Taxonomia;
using AbaxXBRL.Util;
using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.Reports.Util;
using AbaxXBRLCore.Viewer.Application.Dto;
using AbaxXBRLCore.Viewer.Application.Model;
using NPOI.SS.UserModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Viewer.Application.Import.Impl
{
    
    /// <summary>
    /// Importador exportador Específico para los roles de la taxonomía de eventos relevantes.
    /// 
    /// </summary>
    public class ImportadorExportadorRol800010_800011RelEv2016 : IImportadorExportadorRolDocumento
    {
        private static int COLUMNA_DATOS = 1;

        private static int RENGLON_INICIO_DATOS = 2;
        public void ImportarDatosDeHojaExcel(NPOI.SS.UserModel.ISheet hojaAImportar, NPOI.SS.UserModel.ISheet hojaPlantilla, Dto.DocumentoInstanciaXbrlDto instancia, string rol, Common.Dtos.ResumenProcesoImportacionExcelDto resumenImportacion, Model.IDefinicionPlantillaXbrl plantillaDocumento)
        {
            DateTime fechaEvento = DateTime.MinValue;
            int numeroRenglonActual = RENGLON_INICIO_DATOS;
            var qNameEntidad = plantillaDocumento.ObtenerVariablePorId("esquemaEntidad") + ":" +
                              plantillaDocumento.ObtenerVariablePorId("nombreEntidad");
            ContextoDto contextoDestinoSimple = null;
            ContextoDto contextoDestinoDimension = null;
            if (XmlUtil.ParsearUnionDateTime(plantillaDocumento.ObtenerVariablePorId("fecha_2016_10_12"), out fechaEvento))
            {
                contextoDestinoSimple = ObtenerContextoDestino(instancia, plantillaDocumento, qNameEntidad, fechaEvento, new List<DimensionInfoDto>());

                ActualizarValorHecho(instancia, "rel_ev_Ticker", hojaAImportar, numeroRenglonActual++, COLUMNA_DATOS, contextoDestinoSimple, plantillaDocumento, resumenImportacion);
                ActualizarValorHecho(instancia, "rel_ev_Date", hojaAImportar, numeroRenglonActual++, COLUMNA_DATOS, contextoDestinoSimple, plantillaDocumento, resumenImportacion);
                ActualizarValorHecho(instancia, "rel_ev_BusinessName", hojaAImportar, numeroRenglonActual++, COLUMNA_DATOS, contextoDestinoSimple, plantillaDocumento, resumenImportacion);
                ActualizarValorHecho(instancia, "rel_ev_Place", hojaAImportar, numeroRenglonActual++, COLUMNA_DATOS, contextoDestinoSimple, plantillaDocumento, resumenImportacion);
                ActualizarValorHecho(instancia, "rel_ev_Subject", hojaAImportar, numeroRenglonActual++, COLUMNA_DATOS, contextoDestinoSimple, plantillaDocumento, resumenImportacion);

                if (!instancia.EspacioNombresPrincipal.Contains("fondos"))
                {
                    ActualizarValorHecho(instancia, "rel_ev_ForeignMarket", hojaAImportar, numeroRenglonActual++, COLUMNA_DATOS, contextoDestinoSimple, plantillaDocumento, resumenImportacion);
                }
                
              
                var valorTipoEvento = ExcelUtil.ObtenerValorCelda(hojaAImportar, numeroRenglonActual++, COLUMNA_DATOS);
                var idConceptoTipoEvento = BuscarTipoEvento(valorTipoEvento,instancia);
                if (idConceptoTipoEvento != null)
                {
                    DimensionInfoDto dimInfo = new DimensionInfoDto()
                    {
                       Explicita = true,
                       IdDimension = "rel_ev_RelevantEventTypesAxis",
                       QNameDimension = instancia.Taxonomia.ConceptosPorId["rel_ev_RelevantEventTypesAxis"].EspacioNombres + ":" + instancia.Taxonomia.ConceptosPorId["rel_ev_RelevantEventTypesAxis"].Nombre,
                       IdItemMiembro = idConceptoTipoEvento,
                       QNameItemMiembro = instancia.Taxonomia.ConceptosPorId[idConceptoTipoEvento].EspacioNombres + ":" + instancia.Taxonomia.ConceptosPorId[idConceptoTipoEvento].Nombre
                    };
                    contextoDestinoDimension = ObtenerContextoDestino(instancia, plantillaDocumento, qNameEntidad, fechaEvento, new List<DimensionInfoDto>() { dimInfo });
                    ActualizarValorHecho(instancia, "rel_ev_RelevantEventContent", hojaAImportar, numeroRenglonActual++, COLUMNA_DATOS, contextoDestinoDimension, plantillaDocumento, resumenImportacion);
                }
            }
        }

        /// <summary>
        /// Busca un miembro en específico en la taxonomía dada su etiqueta (inglés o español)
        /// </summary>
        /// <param name="valorTipoEvento">Estiqueta del tipo de evento</param>
        /// <param name="instancia">Documento de instancia actualmente procesado</param>
        /// <returns>Identificador del concepto encontrado, null si no se encuentra</returns>
        private string BuscarTipoEvento(string valorTipoEvento, DocumentoInstanciaXbrlDto instancia)
        {
            foreach(var concepto in instancia.Taxonomia.ConceptosPorId.Values){

                if (concepto.EsMiembroDimension ?? false) 
                {
                    foreach (var conjuntoEtiquetas in concepto.Etiquetas.Values)
                    {
                        foreach (var etiqueta in conjuntoEtiquetas.Values)
                        {
                            if (etiqueta.Valor.Equals(valorTipoEvento))
                            {
                                return concepto.Id;
                            }
                        }
                    }
                }
                
            }
            return null;
        }

        /// <summary>
        /// Busca un contexto en el documento de instancia considerando las dimensiones enviadas, lo crea en caso de no encontrarlo
        /// </summary>
        /// <param name="instancia"></param>
        /// <param name="plantillaDocumento"></param>
        /// <param name="qNameEntidad"></param>
        /// <param name="fechaEvento"></param>
        /// <param name="list"></param>
        /// <returns></returns>
        private ContextoDto ObtenerContextoDestino(DocumentoInstanciaXbrlDto instancia, IDefinicionPlantillaXbrl plantillaDocumento, string qNameEntidad, 
            DateTime fechaEvento, List<DimensionInfoDto> dimensiones)
        {
            ContextoDto contextoDestino = null;
            
            foreach (var contextoActual in instancia.ContextosPorId.Values)
            {
                if (dimensiones != null && dimensiones.Count > 0)
                {
                    if (contextoActual.ValoresDimension != null && contextoActual.ValoresDimension.Count > 0)
                    {
                        contextoDestino = contextoActual;
                        contextoDestino.ValoresDimension[0].IdItemMiembro = dimensiones[0].IdItemMiembro;
                        contextoDestino.ValoresDimension[0].QNameItemMiembro = dimensiones[0].QNameItemMiembro;
                        break;
                    }
                }else
                {
                    if (contextoActual.ValoresDimension == null || contextoActual.ValoresDimension.Count == 0)
                    {
                        contextoDestino = contextoActual;
                        break;
                    }
                }
            }

            if (contextoDestino != null)
            {
                if (!(contextoDestino.Periodo.Tipo == Period.Instante && contextoDestino.Periodo.FechaInstante.CompareTo(fechaEvento) == 0))
                {
                    contextoDestino = null;
                }
            }
            
                
            if (contextoDestino == null)
            {
                List<DimensionInfoDto> dimensionesFinales = null;
                if (dimensiones != null && dimensiones.Count > 0)
                {
                    dimensionesFinales = new List<DimensionInfoDto>();
                    dimensionesFinales.AddRange(dimensiones);
                }
                contextoDestino = new ContextoDto()
                {
                    Entidad = new EntidadDto()
                    {
                        ContieneInformacionDimensional = false,
                        EsquemaId = plantillaDocumento.ObtenerVariablePorId("esquemaEntidad"),
                        Id = plantillaDocumento.ObtenerVariablePorId("nombreEntidad")
                    },
                    ContieneInformacionDimensional = dimensiones.Count>0,
                    ValoresDimension = dimensionesFinales,
                    Periodo = new PeriodoDto()
                    {
                        Tipo = Period.Instante,
                        FechaInicio = fechaEvento,
                        FechaFin = fechaEvento,
                        FechaInstante = fechaEvento
                    },
                    Id = "C" + Guid.NewGuid().ToString()
                };
                plantillaDocumento.InyectarContextoADocumentoInstancia(contextoDestino);

            }

            return contextoDestino;
        }

        /// <summary>
        /// Actualiza o crea un hecho en base a los criterios enviados como parámetro
        /// </summary>
        /// <param name="instancia">Documento instnacia actual</param>
        /// <param name="idConcepto">Concepto actual</param>
        /// <param name="hojaAImportar">Hoja actualmente procesada</param>
        /// <param name="renglonActual">Renglón actualmente procesado</param>
        /// <param name="numColumna">Columna actualmente procesada</param>
        /// <param name="contextoDestino">Contexto a donde se asignarán los hechos creados</param>
        private void ActualizarValorHecho(DocumentoInstanciaXbrlDto instancia, string idConcepto, ISheet hojaAImportar, int renglonActual, int numColumna,
            AbaxXBRLCore.Viewer.Application.Dto.ContextoDto contextoDestino, IDefinicionPlantillaXbrl plantillaDocumento, AbaxXBRLCore.Common.Dtos.ResumenProcesoImportacionExcelDto resumenImportacion)
        {
           var valorCelda =  ExcelUtil.ObtenerValorCelda(hojaAImportar, renglonActual, numColumna);
           var fechaDefault = plantillaDocumento.ObtenerVariablePorId("fecha_2016_10_12");
            if(!String.IsNullOrEmpty(valorCelda)){
                ConceptoDto conceptoImportado = instancia.Taxonomia.ConceptosPorId[idConcepto];
                HechoDto hechoActualizar = null;

                var hechos = instancia.BuscarHechos(idConcepto, null, null, contextoDestino.Periodo.FechaInstante, contextoDestino.Periodo.FechaInstante, null, false);
            
                if (hechos.Count > 0)
                {
                    hechoActualizar = hechos[0];

                }
                else
                {
                    hechoActualizar = instancia.CrearHecho(idConcepto, null, contextoDestino.Id, "A" + Guid.NewGuid().ToString());

                    plantillaDocumento.InyectaHechoADocumentoInstancia(hechoActualizar);
                }

                if (!UtilAbax.ActualizarValorHecho(conceptoImportado, hechoActualizar, valorCelda, fechaDefault))
                {
                    resumenImportacion.AgregarErrorFormato(
                        UtilAbax.ObtenerEtiqueta(instancia.Taxonomia, conceptoImportado.Id),
                        hojaAImportar.SheetName,
                        renglonActual.ToString(),
                        numColumna.ToString(),
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
                        HojaExcel = hojaAImportar.SheetName,
                        Renglon = renglonActual,
                        Columna = numColumna
                    };

                    resumenImportacion.AgregarHechoImportado(hechoImportado, UtilAbax.ObtenerEtiqueta(instancia.Taxonomia, conceptoImportado.Id));

                }
            }

            
            
        }

        public void ExportarDatosDeHojaExcel(ISheet hojaAExportar, ISheet hojaPlantilla, DocumentoInstanciaXbrlDto instancia, string rol,IDefinicionPlantillaXbrl plantillaDocumento, String idioma)
        {
            int numeroRenglonActual = RENGLON_INICIO_DATOS;

            EscribirValorPrimerHecho(instancia, "rel_ev_Ticker", hojaAExportar, numeroRenglonActual++, COLUMNA_DATOS);
            EscribirValorPrimerHecho(instancia, "rel_ev_Date", hojaAExportar, numeroRenglonActual++, COLUMNA_DATOS);
            EscribirValorPrimerHecho(instancia, "rel_ev_BusinessName", hojaAExportar, numeroRenglonActual++, COLUMNA_DATOS);
            EscribirValorPrimerHecho(instancia, "rel_ev_Place", hojaAExportar, numeroRenglonActual++, COLUMNA_DATOS);
            EscribirValorPrimerHecho(instancia, "rel_ev_Subject", hojaAExportar, numeroRenglonActual++, COLUMNA_DATOS);

            if (!instancia.EspacioNombresPrincipal.Contains("fondos"))
            {
                EscribirValorPrimerHecho(instancia, "rel_ev_ForeignMarket", hojaAExportar, numeroRenglonActual++, COLUMNA_DATOS);
            }
            


            var descTipoEvento = "";
            if (instancia.HechosPorIdConcepto.ContainsKey("rel_ev_RelevantEventContent"))
            {
                var listaHechosId = instancia.HechosPorIdConcepto["rel_ev_RelevantEventContent"];
                if (listaHechosId.Count > 0)
                {
                    var hechoContenido = instancia.HechosPorId[listaHechosId[0]];
                    var contexto = instancia.ContextosPorId[hechoContenido.IdContexto];
                    if (contexto.ValoresDimension != null && contexto.ValoresDimension.Count > 0)
                    {
                        descTipoEvento = ReporteXBRLUtil.obtenerEtiquetaConcepto(idioma, null, contexto.ValoresDimension[0].IdItemMiembro, instancia);
                    }
                }
            }

            ExcelUtil.AsignarValorCelda(hojaAExportar, numeroRenglonActual++, COLUMNA_DATOS, descTipoEvento,
                        CellType.String, null);

            EscribirValorPrimerHecho(instancia, "rel_ev_RelevantEventContent", hojaAExportar, numeroRenglonActual++, COLUMNA_DATOS);
        }
        /// <summary>
        /// Obtiene y escribe el valor del primer hecho correspondiente al id de concepto enviado como parámetro
        /// </summary>
        /// <param name="instancia">Documento de instancia actualmente procesado</param>
        /// <param name="idConcepto">Concepto a escribir</param>
        private void EscribirValorPrimerHecho(DocumentoInstanciaXbrlDto instancia, string idConcepto, ISheet hojaAExportar,
            int renglonDestino, int columnaDestino)
        {
            if (instancia.HechosPorIdConcepto.ContainsKey(idConcepto) && instancia.HechosPorIdConcepto[idConcepto].Count > 0)
            {
                var hecho = instancia.HechosPorId[instancia.HechosPorIdConcepto[idConcepto][0]];
                if (hecho != null)
                {
                    ExcelUtil.AsignarValorCelda(hojaAExportar, renglonDestino, columnaDestino, hecho.Valor,
                        instancia.Taxonomia.ConceptosPorId[idConcepto].EsTipoDatoNumerico ?
                                            CellType.Numeric : CellType.String
                                            , hecho);
                }
            }
        }

        
        private HechoDto ObtenerPrimerHecho(DocumentoInstanciaXbrlDto instancia, string idConcepto)
        {
            throw new NotImplementedException();
        }

        public void ExportarRolADocumentoWord(Aspose.Words.Document word, Aspose.Words.Section section, Dto.DocumentoInstanciaXbrlDto instancia, string rol, Model.IDefinicionPlantillaXbrl plantillaDocumento, string claveIdioma)
        {
            throw new NotImplementedException();
        }
    }
}
