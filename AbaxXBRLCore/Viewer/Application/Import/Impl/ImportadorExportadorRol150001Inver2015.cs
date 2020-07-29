using AbaxXBRL.Constantes;
using AbaxXBRL.Taxonomia;
using AbaxXBRL.Util;

using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.Viewer.Application.Dto;
using NPOI.SS.UserModel;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Viewer.Application.Import.Impl
{
    public class ImportadorExportadorRol150001Inver2015: IImportadorExportadorRolDocumento
    {

        public const int _renglonInicioHechos = 10;
        public const int _renglonIdConceptos = 9;
        public const int _columnaInicioHechos = 1;
        public const int _columnaFinHechos = 23;

        public const int _columnaHechosEncabezado = 3;
        public const int _renglonFondoInversion = 3;
        public const int _renglonTipoSociedad = 4;
        public const int _renglonClaveSociedad = 5;
        public const int _renglonPeriodicidad = 6;

        public const string _idConceptoRegistroCartera = "inver_bmv_cor_RegistroCartera";
        public const string _idConceptoConsecutivo = "inver_bmv_cor_NumeroConsecutivoCartera";

        public void ImportarDatosDeHojaExcel(NPOI.SS.UserModel.ISheet hojaAImportar, NPOI.SS.UserModel.ISheet hojaPlantilla, Dto.DocumentoInstanciaXbrlDto instancia,
            string rol, AbaxXBRLCore.Common.Dtos.ResumenProcesoImportacionExcelDto resumenImportacion, Model.IDefinicionPlantillaXbrl plantillaDocumento)
        {
            //var idiomaDefault = instancia.Taxonomia != null && instancia.Taxonomia.IdiomasTaxonomia != null && instancia.Taxonomia.IdiomasTaxonomia.Keys.Count > 0 ?
            //                    instancia.Taxonomia.IdiomasTaxonomia.Keys.First() : String.Empty;
            //
            string idContextoGeneral = instancia.ContextosPorId.First().Value.Id;

            var numRenglones = hojaAImportar.LastRowNum;
            for (var iRenglon = _renglonInicioHechos; iRenglon <= numRenglones; iRenglon++)
            {
                var numColumnas = hojaAImportar.GetRow(iRenglon).LastCellNum;
               
                if (numColumnas > _columnaInicioHechos) {
                    
                    var valorConsecutivo = ExcelUtil.ObtenerValorCelda(hojaAImportar, iRenglon, _columnaInicioHechos);
                    if (!String.IsNullOrEmpty(valorConsecutivo))
                    {
                        //Localizar tupla
                       
                       //Crear tupla
                        var hechoTupla = instancia.CrearHecho(_idConceptoRegistroCartera, null, null, "INV" + Guid.NewGuid().ToString());
                        plantillaDocumento.InyectaHechoADocumentoInstancia(hechoTupla);
                        hechoTupla.Hechos = new List<String>();
                        
                        for (int iCol = _columnaInicioHechos; iCol <= numColumnas; iCol++)
                        {
                            var valorCelda = ExcelUtil.ObtenerValorCelda(hojaAImportar, iRenglon, iCol);
                            if (!String.IsNullOrEmpty(valorCelda))
                            {
                                var idConcepto = ExcelUtil.ObtenerValorCelda(hojaPlantilla, _renglonIdConceptos, iCol);
                                
                                if(!String.IsNullOrEmpty(idConcepto)){
                                    //buscar el hecho dentro de la tupla, si no existe, crearlo
                                    
                                    var hechoEnTupla = CrearHechoEnTupla(hechoTupla, idConcepto, instancia, plantillaDocumento, idContextoGeneral);
                                   
                                    hechoEnTupla.Valor = valorCelda;
                                    //hechoEnTupla.NotasAlPie = ExcelUtil.ObtenerComentariosCelda(hojaAImportar.GetRow(iRenglon), iCol, idiomaDefault);
                                }
                            }
                        }
                    }
                    
                }
            }
        }
        /// <summary>
        /// Crea un hecho y lo inyecta al documento de instancia y a la tupla padre
        /// </summary>
        /// <param name="hechoEnTupla"></param>
        /// <param name="idConcepto"></param>
        /// <param name="instancia"></param>
        /// <returns></returns>
        private AbaxXBRLCore.Viewer.Application.Dto.HechoDto CrearHechoEnTupla(AbaxXBRLCore.Viewer.Application.Dto.HechoDto tupla, string idConcepto, DocumentoInstanciaXbrlDto instancia,
            Model.IDefinicionPlantillaXbrl plantillaDocumento,string idContextoGeneral)
        {
            var idHecho = "INV_H_" + Guid.NewGuid().ToString();
            var concepto = instancia.Taxonomia.ConceptosPorId[idConcepto];
            List<MedidaDto> listaMedidas = null;
            string idUnidad = null;
            var decimales = "";
            if (concepto.TipoDatoXbrl.Contains(TiposDatoXBRL.MonetaryItemType)){
                
                idUnidad = "moneda_reporte";
                decimales = "2";
            }else if(concepto.EsTipoDatoNumerico){
                
                idUnidad = "pure";
                decimales = "2";
            }

            var hechoNuevo = instancia.CrearHecho(idConcepto, idUnidad, idContextoGeneral, idHecho);
            hechoNuevo.Decimales = decimales;
            plantillaDocumento.InyectaHechoADocumentoInstancia(hechoNuevo);
            tupla.Hechos.Add(hechoNuevo.Id);
            return hechoNuevo;
        }

        /// <summary>
        /// Localiza una tupla cuyo consecutivo sea el mismo que el del valor celda buscado
        /// </summary>
        /// <param name="valorCelda"></param>
        /// <param name="instancia"></param>
        /// <returns></returns>
        private AbaxXBRLCore.Viewer.Application.Dto.HechoDto BuscarTuplaConConsecutivo(string consecutivoBuscado, Dto.DocumentoInstanciaXbrlDto instancia)
        {
            HechoDto tuplaBuscada = null;
            int consecutivo = -1;
            if (Int32.TryParse(consecutivoBuscado, out consecutivo) && instancia.HechosPorIdConcepto.ContainsKey(_idConceptoRegistroCartera))
            {
                foreach (var idTupla in instancia.HechosPorIdConcepto[_idConceptoRegistroCartera])
                {
                    var tupla = instancia.HechosPorId[idTupla];
                    if(tupla.Hechos != null){
                        var HechoConsecutivo = tupla.Hechos.FirstOrDefault(x=>x == _idConceptoConsecutivo );
                        if (HechoConsecutivo != null)
                        {
                            return tupla;
                        }
                    } 
                }
            }
            return tuplaBuscada;
        }

        public void ExportarDatosDeHojaExcel(NPOI.SS.UserModel.ISheet hojaAExportar, NPOI.SS.UserModel.ISheet hojaPlantilla, Dto.DocumentoInstanciaXbrlDto instancia, string rol, Model.IDefinicionPlantillaXbrl plantillaDocumento, String idioma)
        {
            if (instancia.HechosPorIdConcepto.ContainsKey(_idConceptoRegistroCartera))
            {
                int renglonActual = _renglonInicioHechos;
                
                foreach (var idTupla in instancia.HechosPorIdConcepto[_idConceptoRegistroCartera])
                {
                    var tupla = instancia.HechosPorId[idTupla];
                    if (tupla.Hechos != null)
                    {
                        for (int iCol = _columnaInicioHechos; iCol <= _columnaFinHechos; iCol++ )
                        {
                            var idConcepto = ExcelUtil.ObtenerValorCelda(hojaPlantilla, _renglonIdConceptos, iCol);
                            var hecho = tupla.Hechos.FirstOrDefault(x=>x == idConcepto);
                            if (hecho != null) {

                                ExcelUtil.AsignarValorCelda(hojaAExportar, renglonActual, iCol, instancia.HechosPorId[hecho].Valor, CellType.String, instancia.HechosPorId[hecho]);
                            }
                        }

                        renglonActual++;
                    }
                }
            }
        }

        public void ExportarRolADocumentoWord(Aspose.Words.Document word, Aspose.Words.Section section, Dto.DocumentoInstanciaXbrlDto instancia, string rol, Model.IDefinicionPlantillaXbrl plantillaDocumento, string claveIdioma)
        {
            
        }
    }
}
