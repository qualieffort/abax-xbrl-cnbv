using AbaxXBRL.Constantes;
using AbaxXBRL.Util;
using AbaxXBRLCore.Reports.Util;
using AbaxXBRLCore.Viewer.Application.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;

namespace AbaxXBRLCore.XPE.Common.Util
{
    /// <summary>
    ///  Clase de utilerías para operaciones comnunes con taxonomías XBRL
    /// </summary>
    public class TaxonomiaXbrlUtil
    {
        /// <summary>
        /// Obtiene la etiqueta del concepto requerida en el idioma y rol de etiqueta preferido
        /// El idioma y el rol de etiqueta es opcional
        /// </summary>
        /// <param name="taxonomia">Taxonomía a buscar</param>
        /// <param name="idConcepto">Concepto a buscar</param>
        /// <param name="idioma">Idioma opcional a buscar</param>
        /// <param name="rolEtiquetaPreferido">Rol opcional a buscar</param>
        /// <returns>Etiqueta encontrada, null si no existe</returns>
        public static String ObtenerEtiquetaConcepto(TaxonomiaDto taxonomia, String idConcepto, String idioma, String rolEtiquetaPreferido)
        {
            String etiqueta = null;

            if (taxonomia != null && taxonomia.ConceptosPorId != null && taxonomia.ConceptosPorId.ContainsKey(idConcepto))
            {
                var concepto = taxonomia.ConceptosPorId[idConcepto];
                if (concepto.Etiquetas != null)
                {
                    IDictionary<String, EtiquetaDto> etiquetasPorRol = null;
                    if (idioma != null && concepto.Etiquetas.ContainsKey(idioma))
                    {
                        etiquetasPorRol = concepto.Etiquetas[idioma];
                    }
                    else
                    {
                        if (concepto.Etiquetas.Count > 0)
                        {
                           etiquetasPorRol =  concepto.Etiquetas.First().Value;
                        }
                    }
                    if (etiquetasPorRol != null)
                    {
                        if (rolEtiquetaPreferido != null && etiquetasPorRol.ContainsKey(rolEtiquetaPreferido))
                        {
                            etiqueta = etiquetasPorRol[rolEtiquetaPreferido].Valor;
                        }
                        else
                        {
                            if (etiquetasPorRol.ContainsKey(EspacioNombresConstantes.DefaultLabelRole))
                            {
                                etiqueta = etiquetasPorRol[EspacioNombresConstantes.DefaultLabelRole].Valor;
                            }
                        }
                    }
                }
            }

            return etiqueta;
        }
        /// <summary>
        /// Propone un nuevo nombre de contexto en base a fechas y dimensiones del mismo
        /// </summary>
        /// <param name="ctxNuevo">Contexto creado</param>
        /// <param name="instancia">Instancia actual</param>
        /// <returns></returns>
        public static String CrearContextoID(ContextoDto ctxNuevo, DocumentoInstanciaXbrlDto instancia)
        {
            String nombreCtx = ProponerNombreContexto(ctxNuevo,instancia);
            long ixContexto = 0;

            while (instancia.ContextosPorId.ContainsKey(nombreCtx + (ixContexto > 0 ? "_" + ixContexto : "")))
            {
                ixContexto++;
            }
            return nombreCtx + (ixContexto > 0 ? "_" + ixContexto : "");
        }
        /// <summary>
        /// Propone un nuevo nombre de unidad en base a las medidas de la misma
        /// </summary>
        /// <param name="unidadNueva">Unidad creada</param>
        /// <param name="instanca">Instancia atual</param>
        /// <returns></returns>
        public static String CrearUnidadID(UnidadDto unidadNueva,DocumentoInstanciaXbrlDto instanca)
        {
            String nombreUnidad = ProponerNombreUnidad(unidadNueva);
            long ixUnidad = 0;
            while (instanca.UnidadesPorId.ContainsKey(nombreUnidad + (ixUnidad > 0 ? "_" + ixUnidad : "")))
            {
               ixUnidad++; 
            }
            return nombreUnidad + (ixUnidad > 0 ? "_" + ixUnidad : "");
        }
        /// <summary>
        /// Propone un nombre de la unidad en base a sus medidas
        /// </summary>
        /// <param name="unidadNueva">Unidad origen</param>
        /// <returns>Nombre propuesto</returns>
        private static string ProponerNombreUnidad(UnidadDto unidadNueva)
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("unidad");
            if (unidadNueva.Tipo == UnidadDto.Medida)
            {
                foreach(var medida in unidadNueva.Medidas){
                    sb.Append("_"+medida.Nombre);
                }
            }
            else
            {
                foreach (var medida in unidadNueva.MedidasNumerador)
                {
                    sb.Append("_" + medida.Nombre);
                }
                sb.Append("-");
                foreach (var medida in unidadNueva.MedidasDenominador)
                {
                    sb.Append("_" + medida.Nombre);
                }
            }
            return sb.ToString();
        }
        /// <summary>
        /// Genera nombre legible de contexto
        /// </summary>
        /// <param name="ctxNuevo">Contexto origen</param>
        /// <returns>Nombre propuesto</returns>
        private static string ProponerNombreContexto(ContextoDto ctxNuevo,DocumentoInstanciaXbrlDto instancia)
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("ctx");
            //tipo de periodo - fechas
            if (ctxNuevo.Periodo.Tipo == PeriodoDto.ParaSiempre)
            {
                sb.Append("_porSiempre");
            }
            else if (ctxNuevo.Periodo.Tipo == PeriodoDto.Duracion)
            {
                sb.Append("_" + XmlUtil.ToUnionDateTimeString(ctxNuevo.Periodo.FechaInicio) + "_" + XmlUtil.ToUnionDateTimeString(ctxNuevo.Periodo.FechaFin) );
            }else{
                sb.Append("_" + XmlUtil.ToUnionDateTimeString(ctxNuevo.Periodo.FechaInstante));
            }
            //Dimensiones
            var dimTotales = new List<DimensionInfoDto>();
            if (ctxNuevo.ValoresDimension != null)
            {
                dimTotales.AddRange(ctxNuevo.ValoresDimension);
            }
            if (ctxNuevo.Entidad.ValoresDimension != null)
            {
                dimTotales.AddRange(ctxNuevo.Entidad.ValoresDimension);
            }
            foreach(var dimension in dimTotales){
                if (dimension.Explicita)
                {
                    sb.Append("_" + instancia.Taxonomia.ConceptosPorId[dimension.IdItemMiembro].Nombre);
                }
                else
                {
                    if (String.IsNullOrEmpty(dimension.ElementoMiembroTipificado))
                    {
                        sb.Append("_" + instancia.Taxonomia.ConceptosPorId[dimension.IdDimension].Nombre);
                    }
                    else
                    {
                        sb.Append("_" + ReporteXBRLUtil.eliminaEtiquetas(dimension.ElementoMiembroTipificado));
                    }
                }
            }
            return sb.ToString();
        }

        /// <summary>
        /// Propone un ID de hecho en base a sus datos
        /// </summary>
        /// <param name="hechoNuevo"></param>
        /// <param name="instancia"></param>
        /// <returns></returns>
        public static string CrearHechoID(HechoDto hechoNuevo, DocumentoInstanciaXbrlDto instancia)
        {
            var idHecho = "hecho_" + RemoveSpecialCharacters(instancia.Taxonomia.ConceptosPorId[hechoNuevo.IdConcepto].Nombre);
                
                

            long idxHecho = 0;

            while (instancia.HechosPorId.ContainsKey(idHecho+(idxHecho>0?"_"+idxHecho:"")))
            {
                idxHecho++;
            }

            return idHecho + (idxHecho > 0 ? "_" + idxHecho : "");
        }

        public static string RemoveSpecialCharacters(string str)
        {
            return Regex.Replace(str, "[^a-zA-Z0-9_.]+", "", RegexOptions.Compiled);
        }


        /// <summary>
        /// Obtiene una lista de todas las etiquetas asignadas al concepto, de cualquier idioma y rol
        /// </summary>
        /// <param name="taxonomia">Taxonomía de donde se buscarán las etiquetas</param>
        /// <param name="idConcepto">Concepto buscado</param>
        /// <returns>Conjunto de etiquetas encontradas</returns>
        public static IList<string> ObtenerEtiquetasConcepto(TaxonomiaDto taxonomia, String idConcepto)
        {
            var etiquetasResultado = new List<String>();
            if (taxonomia != null && taxonomia.ConceptosPorId.ContainsKey(idConcepto))
            {
                var concepto = taxonomia.ConceptosPorId[idConcepto];
                if (concepto.Etiquetas != null)
                {
                    foreach(var etqInRol in concepto.Etiquetas.Values){
                        foreach(var etq in etqInRol.Values){
                            etiquetasResultado.Add(etq.Valor);
                        }
                    }
                }
            }
            return etiquetasResultado;
        }
    }
}
