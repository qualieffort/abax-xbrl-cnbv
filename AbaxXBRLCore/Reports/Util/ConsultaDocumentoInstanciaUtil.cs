using AbaxXBRLCore.Viewer.Application.Dto;
using AbaxXBRLCore.Viewer.Application.Dto.Hipercubos;
using AbaxXBRLCore.Viewer.Application.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Reports.Util
{
    public class ConsultaDocumentoInstanciaUtil
    {
        /// <summary>
        /// Documento de instancia a evaluar.
        /// </summary>
        private DocumentoInstanciaXbrlDto documentoInstancia {get; set;}
        /// <summary>
        /// Definicion de la plantilla.
        /// </summary>
        private IDefinicionPlantillaXbrl definicionPlantilla {get; set;}
        /// <summary>
        /// Utilería para el filtrado y consumo de inofmración de un documento de instancia.
        /// </summary>
        /// <param name="documentoInstancia">Documento de instancia con la informacón a consumir.</param>
        /// <param name="definicionPlantilla">Definición de la plantillla con variables requeridas para el filtrado.</param>
        public ConsultaDocumentoInstanciaUtil(DocumentoInstanciaXbrlDto documentoInstancia, IDefinicionPlantillaXbrl definicionPlantilla) 
        {
            this.documentoInstancia = documentoInstancia;
            this.definicionPlantilla = definicionPlantilla;
        }

        /// <summary>
        /// Obtiene los hechos con los conceptos dados.
        /// </summary>
        /// <param name="idsConecptos">Identificadores de conceptos.</param>
        /// <param name="idsHechos">Conjunto de hechos validos. Si no es nulo solo se evaluaran los hechos dentro de esta lista</param>
        /// <returns>Lista con los identificadores de hechos que aplican</returns>
        private IList<string>  ObtenHechosIdsPorIdsConcepto(IList<string> idsConecptos, IList<string> idsHechos)
        {


            var index = 0;
            IList<string> hechosTemporales;
            IList<string> idsHechosConcepto = new List<string>();
            var diccionarioConceptosAuxiliar = new Dictionary<string,string>();
            var diccionarioHechoAuxiliar = new Dictionary<string,string>();

            for (index = 0; index < idsConecptos.Count; index++) {

                var idConcepto = idsConecptos[index];
                diccionarioConceptosAuxiliar[idConcepto] = idConcepto;
            }
            if (idsHechos != null) {

                for (index = 0; index < idsHechos.Count; index++) {

                    var idHecho = idsHechos[index];
                    if (!diccionarioHechoAuxiliar.ContainsKey(idHecho)) {

                        HechoDto hecho;
                        if(documentoInstancia.HechosPorId.TryGetValue(idHecho, out hecho))
                        {
                            if (diccionarioConceptosAuxiliar.ContainsKey(hecho.IdConcepto)) {

                                diccionarioHechoAuxiliar[idHecho] = idHecho;
                                idsHechosConcepto.Add(idHecho);
                            }
                        }
                    }
                }
            } else {
                foreach (var idConceptoItera in diccionarioConceptosAuxiliar.Keys) {

                    if (documentoInstancia.HechosPorIdConcepto.TryGetValue(idConceptoItera,out hechosTemporales)) 
                    {
                        idsHechosConcepto = new List<string>(idsHechosConcepto.Concat(hechosTemporales));
                    }
                }
            }
            return idsHechosConcepto;
        }

        /// <summary>
        /// Obtiene los hechos con los conceptos dados.
        /// </summary>
        /// <param name="idsContextos">Identificadores de contextos.</param>
        /// <param name="idsHechos">Conjunto de hechos validos. Si no es nulo solo se evaluaran los hechos dentro de esta lista</param>
        /// <returns>Lista con los identificadores de hechos que aplican</returns>
        private IList<string>  ObtenHechosIdPorContextosIds(IList<string> idsContextos, IList<string> idsHechos)
        {


            var index = 0;
            IList<string> hechosTemporales;
            IList<string> idsHechosContexto = new List<string>();
            var diccionarioContextoAuxiliar = new Dictionary<string,string>();
            var diccionarioHechoAuxiliar = new Dictionary<string,string>();

            for (index = 0; index < idsContextos.Count; index++) {

                var idContexto = idsContextos[index];
                diccionarioContextoAuxiliar[idContexto] = idContexto;
            }
            if (idsHechos != null) {

                for (index = 0; index < idsHechos.Count; index++) {

                    var idHecho = idsHechos[index];
                    if (!diccionarioHechoAuxiliar.ContainsKey(idHecho)) {

                        HechoDto hecho;
                        if(documentoInstancia.HechosPorId.TryGetValue(idHecho, out hecho))
                        {
                            if (diccionarioContextoAuxiliar.ContainsKey(hecho.IdContexto)) {

                                diccionarioHechoAuxiliar[idHecho] = idHecho;
                                idsHechosContexto.Add(idHecho);
                            }
                        }
                    }
                }
            } else {
                foreach (var idConceptoItera in diccionarioContextoAuxiliar.Keys) {

                    hechosTemporales = documentoInstancia.HechosPorIdContexto[idConceptoItera];
                    if (hechosTemporales != null) 
                    {
                        idsHechosContexto = new List<string>(idsHechosContexto.Concat(hechosTemporales));
                    }
                }
            }
            return idsHechosContexto;
        }
        /// <summary>
        /// Obtiene los hechos con las unidades dadas.
        /// </summary>
        /// <param name="idsUnidades">Identificadores de las unidades requeridas.</param>
        /// <param name="idsHechos">Identificadores de los hechos.</param>
        /// <returns></returns>
        private IList<string>  ObtenHechosIdsPorUnidadesIds(IList<string> idsUnidades, IList<string> idsHechos)
        {


            var index = 0;
            IList<string> hechosTemporales;
            IList<string> idsHechosUnidad = new List<string>();
            var diccionarioUnidadAuxiliar = new Dictionary<string,string>();
            var diccionarioHechoAuxiliar = new Dictionary<string,string>();

            for (index = 0; index < idsUnidades.Count; index++) {

                var idUnidad = idsUnidades[index];
                diccionarioUnidadAuxiliar[idUnidad] = idUnidad;
            }
            if (idsHechos != null) {

                for (index = 0; index < idsHechos.Count; index++) {

                    var idHecho = idsHechos[index];
                    if (!diccionarioHechoAuxiliar.ContainsKey(idHecho)) {

                        HechoDto hecho;
                        if(documentoInstancia.HechosPorId.TryGetValue(idHecho, out hecho))
                        {
                            if (diccionarioUnidadAuxiliar.ContainsKey(hecho.IdUnidad)) {

                                diccionarioHechoAuxiliar[idHecho] = idHecho;
                                idsHechosUnidad.Add(idHecho);
                            }
                        }
                    }
                }
            } else {
                foreach (var idConceptoItera in diccionarioUnidadAuxiliar.Keys) {

                    hechosTemporales = documentoInstancia.HechosPorIdUnidad[idConceptoItera];
                    if (hechosTemporales != null) 
                    {
                        idsHechosUnidad = new List<string>(idsHechosUnidad.Concat(hechosTemporales));
                    }
                }
            }
            return idsHechosUnidad;
        }
        /// <summary>
        /// Obtiene un subconjunto de elementos
        /// </summary>
        /// <typeparam name="T">Tipo de valores contenidos en el diccionario.</typeparam>
        /// <param name="diccionario">Diccionario a evaluar</param>
        /// <param name="llavesSubConjuto">Subconjunto de llaves que se buscan.</param>
        /// <returns></returns>
        private IDictionary<string,T> ObtenSubconjutoDiccionario<T>(IDictionary<string,T> diccionario, IList<string> llavesSubConjuto)
        {

            var subConjunto = new Dictionary<string,T>();
            for (var index = 0; index < llavesSubConjuto.Count; index++) {

                var llave = llavesSubConjuto[index];
                T elemento;
                if (diccionario.TryGetValue(llave, out elemento)) 
                {
                    subConjunto[llave] = elemento;
                }
            }
            return subConjunto;
        }
        /// <summary>
        /// Obtiene los identificadores de las unidades validas según el filtro.
        /// </summary>
        /// <param name="filtro">Flitro que será aplicado.</param>
        /// <returns>Lista con los identificadores de las unidades validas.</returns>
        public IList<string> ObtenIdsUnidadesPorFiltroUnidad(FiltroHechosDto filtro){

            var diccionarioUnidadesEvaluar = documentoInstancia.UnidadesPorId;
            var idsUnidadesValidas = new List<string>();
            var diccionarioUnidadesValidas = new Dictionary<string,string>();

            if (filtro.IdUnidad != null && filtro.IdUnidad.Count > 0) {

                diccionarioUnidadesEvaluar = ObtenSubconjutoDiccionario(diccionarioUnidadesEvaluar, filtro.IdUnidad);
            }

            foreach (var idUnidad in diccionarioUnidadesEvaluar.Keys) 
            {

                var unidad = diccionarioUnidadesEvaluar[idUnidad];
                if (filtro.TipoUnidad != null && (filtro.TipoUnidad != unidad.Tipo)) {
                    continue;
                }
                if (filtro.Unidad != null && filtro.Unidad.Count > 0) {

                    var contieneUnidad = false;
                    for (var index = 0; index < filtro.Unidad.Count; index++) {

                        var itemFiltroUnidad = filtro.Unidad[index];
                        if (unidad.EsEquivalente(itemFiltroUnidad)) {

                            contieneUnidad = true;
                            break;
                        }
                    }
                    if (!contieneUnidad) {

                        continue;
                    }
                }
                if (!diccionarioUnidadesValidas.ContainsKey(idUnidad)) {

                    diccionarioUnidadesValidas[idUnidad] = idUnidad;
                    idsUnidadesValidas.Add(idUnidad);
                }
            }

            return idsUnidadesValidas;
        }
        /// <summary>
        /// Obtiene una lista con los diferentes contextos de los hechos indicados.
        /// </summary>
        /// <param name="hechosIds">Lista con los identificadores de los hechos a evaluar.</param>
        /// <returns>Lista con los identificadores de los contextos.</returns>
        public IList<string> ObtenIdsContextosHechos(IList<string> hechosIds) 
        {

            var idsContextos = new  List<string>();
            var diccionario = new Dictionary<string,string>();

            for (var indexHecho = 0; indexHecho < hechosIds.Count; indexHecho++) {

                var idHecho = hechosIds[indexHecho];
                HechoDto hecho;
                if (documentoInstancia.HechosPorId.TryGetValue(idHecho, out hecho))
                {
                var idContexto = hecho.IdContexto;
                    if (!diccionario.ContainsKey(idContexto))
                    {
                    idsContextos.Add(idContexto);
                    diccionario[idContexto] = idContexto;
                }
            }
            }
            return idsContextos;
        }
        /// <summary>
        /// Obtiene una lista con los diferentes contextos de los hechos indicados.
        /// </summary>
        /// <param name="hechosIds">Lista con los identificadores de los hechos a evaluar.</param>
        /// <returns>Lista con los identificadores de los contextos.</returns>
        public IDictionary<string,IDictionary<string,string>> AgrupaHechosPorContextoConcepto(IList<string> hechosIds)
        {

            var diccionario = new Dictionary<string, IDictionary<string,string>>();

            for (var indexHecho = 0; indexHecho < hechosIds.Count; indexHecho++)
            {

                var idHecho = hechosIds[indexHecho];
                var hecho = documentoInstancia.HechosPorId[idHecho];
                var idContexto = hecho.IdContexto;
                var idConcepto = hecho.IdConcepto;
                IDictionary<string, string> diccionarioConceptos; 
                if (!diccionario.TryGetValue(idContexto,out diccionarioConceptos))
                {
                    diccionarioConceptos = new Dictionary<string, string>();
                    diccionario.Add(idContexto, diccionarioConceptos);
                }
                diccionarioConceptos[idConcepto] = hecho.Id;
            }
            return diccionario;
        }
        /// <summary>
        /// Verifica si un contexto cumple con las condiciones del fitro.
        /// </summary>
        /// <param name="contexto">Contexto que será evaluado.</param>
        /// <param name="filtro">Filtro con las condiciones a evaluar.</param>
        /// <returns>Si el contexto cumple o no con las condiciones de filtrado.</returns>
        private Boolean ContenidoEnGruposParcialesDimensionesFiltro(ContextoDto contexto, FiltroHechosDto filtro)
        {

            if (!contexto.ContieneInformacionDimensional && !contexto.Entidad.ContieneInformacionDimensional) 
            {

                return false;
            }
            var grupoDimensionesContexto = (contexto.ValoresDimension != null && contexto.ValoresDimension.Count > 0) ?
                contexto.ValoresDimension : contexto.Entidad.ValoresDimension;

            if (grupoDimensionesContexto == null || grupoDimensionesContexto.Count == 0) {

                return false;
            }
            
            var contenido = false;
            for (var index = 0; index < filtro.ConjuntosParcialesDimensiones.Count; index++) {

                var matchGroup = true;
                var dimensionGroup = filtro.ConjuntosParcialesDimensiones[index];

                if (dimensionGroup == null) {

                    continue;
                }
                for (var indexGroup = 0; indexGroup < dimensionGroup.Count; indexGroup++) {

                    var dimConteined = false;
                    var dimensionFilter = dimensionGroup[indexGroup];
                    for (var indexDimContext = 0; indexDimContext < grupoDimensionesContexto.Count; indexDimContext++) {

                        var dimensionContexto = grupoDimensionesContexto[indexDimContext];

                        if (dimensionFilter.QNameDimension != dimensionContexto.QNameDimension) {

                            continue;
                        }
                        if (dimensionFilter.Explicita != dimensionContexto.Explicita) {

                            continue;
                        }
                        if (dimensionFilter.QNameItemMiembro != null && dimensionFilter.QNameItemMiembro != dimensionContexto.QNameItemMiembro) {

                            continue;
                        }
                        if (dimensionFilter.ElementoMiembroTipificado != null && dimensionFilter.ElementoMiembroTipificado != dimensionContexto.ElementoMiembroTipificado) {

                            continue;
                        }
                        dimConteined = true;
                        break;
                    }
                    if (!dimConteined) {
                        matchGroup = false;
                        break;
                    }
                }
                if (matchGroup) {
                    contenido = true;
                    break;
                }
            }

            return contenido;
        }

        /// <summary>
        /// Verifica si un contexto cumple con las condiciones del fitro.
        /// </summary>
        /// <param name="contexto">Contexto que será evaluado.</param>
        /// <param name="filtro">Filtro con las condiciones a evaluar.</param>
        /// <returns>Si el contexto cumple o no con las condiciones de filtrado.</returns>
        private Boolean ContenidoEnGruposExactosDimensionesFiltro(ContextoDto contexto, FiltroHechosDto filtro)
        {

            if (!contexto.ContieneInformacionDimensional && !contexto.Entidad.ContieneInformacionDimensional)
            {

                return false;
            }
            var grupoDimensionesContexto = (contexto.ValoresDimension != null && contexto.ValoresDimension.Count > 0) ?
                contexto.ValoresDimension : contexto.Entidad.ValoresDimension;

            if (grupoDimensionesContexto == null || grupoDimensionesContexto.Count == 0)
            {

                return false;
            }

            var contenido = false;
            for (var index = 0; index < filtro.ConjuntosExactosDimensiones.Count; index++)
            {

                var matchGroup = true;
                var dimensionGroup = filtro.ConjuntosExactosDimensiones[index];
                if (dimensionGroup == null || dimensionGroup.Count != grupoDimensionesContexto.Count)
                {

                    continue;
                }
                for (var indexDimContext = 0; indexDimContext < grupoDimensionesContexto.Count; indexDimContext++)
                {

                    var dimConteined = false;
                    var dimensionContexto = grupoDimensionesContexto[indexDimContext];
                    for (var indexGroup = 0; indexGroup < dimensionGroup.Count; indexGroup++)
                    {

                        var dimensionFilter = dimensionGroup[indexGroup];
                        if (dimensionFilter.QNameDimension != dimensionContexto.QNameDimension)
                        {

                            continue;
                        }
                        if (dimensionFilter.Explicita != dimensionContexto.Explicita)
                        {

                            continue;
                        }
                        if (dimensionFilter.QNameItemMiembro != null && dimensionFilter.QNameItemMiembro != dimensionContexto.QNameItemMiembro)
                        {

                            continue;
                        }
                        if (dimensionFilter.ElementoMiembroTipificado != null && dimensionFilter.ElementoMiembroTipificado != dimensionContexto.ElementoMiembroTipificado)
                        {

                            continue;
                        }
                        dimConteined = true;
                        break;
                    }
                    if (!dimConteined)
                    {
                        matchGroup = false;
                        break;
                    }
                }
                if (matchGroup)
                {
                    contenido = true;
                    break;
                }
            }

            return contenido;
        }
        /// <summary>
        /// Retorna un diccionario que agrupa los contextos proporcionados por los distintos miembros de la dimensión indicada.
        /// </summary>
        /// <param name="qNameDimension">Dimension sobre la que se agrupan.</param>
        /// <param name="listaIdsContextos">Contextos a evaluar.</param>
        /// <returns>Diccionario con los contextos agrupados por los distintons miembros de la dimensión indicada.</returns>
        public IDictionary<String,IList<String>> AgrupaContextosPorMiembro(String qNameDimension, IList<String> listaIdsContextos)
        {
            var diccionarioContextosPorMiembro = new Dictionary<String, IList<String>>();
            foreach(var idContexto in listaIdsContextos)
            {
                ContextoDto contexto;
                if (documentoInstancia.ContextosPorId.TryGetValue(idContexto, out contexto))
                {
                    if (contexto.ContieneInformacionDimensional || contexto.Entidad.ContieneInformacionDimensional)
                    {
                        var valoresDimension = contexto.ContieneInformacionDimensional ?  contexto.ValoresDimension : contexto.Entidad.ValoresDimension;
                        if (valoresDimension != null && valoresDimension.Count > 0)
                        {
                            foreach (var miembroDimension in valoresDimension)
                            {
                                if (miembroDimension.QNameDimension.Equals(qNameDimension))
                                {
                                    var idMiembro = miembroDimension.Explicita ? miembroDimension.IdItemMiembro : miembroDimension.ElementoMiembroTipificado;
                                    IList<String> contextosMiembro;
                                    if (!diccionarioContextosPorMiembro.TryGetValue(idMiembro, out contextosMiembro))
                                    {
                                        contextosMiembro = new List<String>();
                                        diccionarioContextosPorMiembro.Add(idMiembro,contextosMiembro);
                                    }
                                    contextosMiembro.Add(idContexto);
                                }
                            }
                        }
                    }
                }
            }
            return diccionarioContextosPorMiembro;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="filtro"></param>
        /// <param name="subconjuntoContextosIds"></param>
        /// <returns></returns>
        public IList<string> ObtenIdsContextosPorFiltro(FiltroHechosDto filtro, IList<string> subconjuntoContextosIds) 
        {

            var contextosEvaluar = documentoInstancia.ContextosPorId;
            var idsContextosValidos = new List<string>();
            var idsContextosFechas = new List<string>();
            var diccionarioContextosValidos = new Dictionary<string,string>();
            if (filtro.IdContexto != null && filtro.IdContexto.Count > 0) {

                contextosEvaluar = ObtenSubconjutoDiccionario(contextosEvaluar, filtro.IdContexto);
            } 
            if (subconjuntoContextosIds != null && subconjuntoContextosIds.Count > 0) {

                contextosEvaluar = ObtenSubconjutoDiccionario(contextosEvaluar, subconjuntoContextosIds);
            }
            if (filtro.Periodo != null && filtro.Periodo.Count > 0) {

                for (var index = 0; index < filtro.Periodo.Count; index++) {

                    var periodo = filtro.Periodo[index];
                    periodo.EvaluaVariablesPlantilla(definicionPlantilla);
                    IList<String> idsConctextosGrupoFecha;
                    if (documentoInstancia.ContextosPorFecha.TryGetValue(periodo.IdGrupoFechas, out idsConctextosGrupoFecha))
                    {
                        idsContextosFechas = new List<string>(idsContextosFechas.Concat(idsConctextosGrupoFecha));
                    }
                    
                }
                if (idsContextosFechas != null && idsContextosFechas.Count > 0) {

                    contextosEvaluar = ObtenSubconjutoDiccionario(contextosEvaluar, idsContextosFechas);
                }
            }

            foreach (var idContexto in contextosEvaluar.Keys) {

                var contexto = contextosEvaluar[idContexto];
                if (filtro.ClaveEntidad != null && filtro.ClaveEntidad.Count > 0 && filtro.ClaveEntidad.IndexOf(contexto.Entidad.Id) == -1) {

                    continue;
                }
                if (filtro.ConjuntosParcialesDimensiones != null && 
                    filtro.ConjuntosParcialesDimensiones.Count > 0 && 
                    !ContenidoEnGruposParcialesDimensionesFiltro(contexto, filtro)) {

                    continue;
                }
                if (filtro.ConjuntosExactosDimensiones != null && 
                    filtro.ConjuntosExactosDimensiones.Count > 0 && 
                    !ContenidoEnGruposExactosDimensionesFiltro(contexto, filtro)) {

                    continue;
                }
                idsContextosValidos.Add(idContexto);
            }

            return idsContextosValidos;
        }


        /// <summary>
        /// Busca los hechos por el filtro dado.
        /// </summary>
        /// <param name="filtro">Objeto con los parametros de busqueda.</param>
        /// <returns>Lista con los identificadores de hecho encontrados.</returns>
        public IList <string> BuscaHechosPorFiltro(FiltroHechosDto filtro){

            
             IList<string> idsHechos = filtro.IdHecho != null && filtro.IdHecho.Count > 0 ? filtro.IdHecho : null;

            if (filtro.IdConcepto != null && filtro.IdConcepto.Count > 0) {
                
                idsHechos = ObtenHechosIdsPorIdsConcepto(filtro.IdConcepto, idsHechos);
                if (idsHechos.Count == 0) {

                    return idsHechos;
                }
            }
            var filtrarPorUnidad = (filtro.IdUnidad != null && filtro.IdUnidad.Count > 0) || (filtro.TipoUnidad > 0);
            if (filtrarPorUnidad) {

                var idsUnidadesValidas = ObtenIdsUnidadesPorFiltroUnidad(filtro);
                if (idsUnidadesValidas != null && idsUnidadesValidas.Count > 0) {

                    idsHechos = ObtenHechosIdsPorUnidadesIds(idsUnidadesValidas, idsHechos);
                    if (idsHechos.Count == 0) {

                        return idsHechos;
                    }
                } else {

                    return new List<string>();
                }
            }

            var filtrarPorContexto = (filtro.IdContexto != null && filtro.IdContexto.Count > 0) ||
                (filtro.Periodo != null && filtro.Periodo.Count > 0) ||
                (filtro.ClaveEntidad != null && filtro.ClaveEntidad.Count > 0) ||
                (filtro.ConjuntosParcialesDimensiones != null && filtro.ConjuntosParcialesDimensiones.Count > 0) ||
                (filtro.ConjuntosExactosDimensiones != null && filtro.ConjuntosExactosDimensiones.Count > 0);

            if (filtrarPorContexto) 
            { 
                var contextosHechos = idsHechos != null && idsHechos.Count > 0 ? ObtenIdsContextosHechos(idsHechos) : null;
                var idsContextosValidos = ObtenIdsContextosPorFiltro(filtro, contextosHechos);
                idsHechos = ObtenHechosIdPorContextosIds(idsContextosValidos, idsHechos);
            }
            return idsHechos != null ? idsHechos : new List<string>();
        }
        /// <summary>
        /// Obtiene el primer hecho de la lista de hechos que corresponde al concepto
        /// </summary>
        /// <param name="idHechos"></param>
        /// <returns></returns>
        public HechoDto ObtenerHechoPorIdConcepto(IList<string> idHechos, String idConcepto) {
            HechoDto hechoEncontrado = null;

            foreach(var idH in idHechos) {
                if (this.documentoInstancia.HechosPorId.ContainsKey(idH)) {
                    var hechoTmp = this.documentoInstancia.HechosPorId[idH];
                    if(hechoTmp.IdConcepto == idConcepto){
                        hechoEncontrado = hechoTmp;
                        break;
                    }
                }
            }

            return hechoEncontrado;
        }
    }
}
