using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.Reports.Cache;
using AbaxXBRLCore.Reports.Cache.Impl;
using AbaxXBRLCore.Reports.Dto;
using AbaxXBRLCore.Reports.Util;
using AbaxXBRLCore.Viewer.Application.Dto;
using AbaxXBRLCore.Viewer.Application.Model;
using Newtonsoft.Json;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;

namespace AbaxXBRLCore.Reports.Builder
{
    /// <summary>
    /// Constructor base encargado de construir un objeto ReporteXBRLDTO a partir de un documento de instancia XBRL.
    /// </summary>
    public abstract class ReporteBuilder
    {
        /// Estructura que contiene los datos procesados para llenar los reportes. ////
        protected ReporteXBRLDTO reporteXBRLDTO;

        public IDefinicionPlantillaXbrl plantilla { get; set; }

        /// Cache utilizado principalmente para contener los bytes de los json de cada rol. ////
        public ICacheReporte<String, Object> Cache { get; set; }

        /// Define el idioma en que se manejaran las etiquetas y otros campos en el reporte. ////
        protected String idioma;

        /// Contador que sirve para el manejo de lo indices del mapa de notas al pie
        protected int ContadorNotasAlPie = 0;

        /// <summary>
        /// Diccionario con la configuración de reporte por taxonomía.
        /// </summary>
        private IDictionary<string, ConfiguracionReporteDTO> CONFIGURACION_REPORTE_TAXONOMIA = new Dictionary<string, ConfiguracionReporteDTO>();

        ///
        /// Constructor por default.
        /// Inicia el idioma por default del ReporteXBRLDTO.
        ////
        protected ReporteBuilder()
        {
            this.idioma = ReporteXBRLUtil.IDIOMA_DEFAULT;
        }

        ///
        /// Constructor que recibe como parametro el idioma que utilizara el ReporteXBRLDTO.
        /// @param idioma
        ////
        protected ReporteBuilder(String idioma)
        {
            if (idioma != null)
            {
                this.idioma = idioma;
            }
            else
            {
                this.idioma = ReporteXBRLUtil.IDIOMA_DEFAULT;
            }
        }

        /// <summary>
        /// Inicializa los elementos generales de la instancia.
        /// </summary>
        /// <param name="instanciaDto">Documento de instancia a inicializar.</param>
        private void inicializaInstancia(DocumentoInstanciaXbrlDto instanciaDto)
        {
            foreach (var hecho in instanciaDto.HechosPorId.Values)
            {
                if (hecho.EsNumerico && hecho.ValorNumerico == 0)
                {
                    hecho.ValorNumerico = hecho.ObtenerValorRedondeado(hecho.Valor);
                }
            }
        }

        /// <summary>
        /// Inicializa los parametros de configuracion de la plantilla
        /// </summary>
        /// <param name="instancia">Documento de instancia necesario para inicializar.</param>
        private void inicializaPlantilla(DocumentoInstanciaXbrlDto instancia)
        {
            if (plantilla != null)
            {
                plantilla.DeterminarParametrosConfiguracion(instancia);
                plantilla.GenerarVariablesDocumentoInstancia();
                reporteXBRLDTO.Plantilla = plantilla;
            }
        }

        ///
        /// Llama a cada uno de los métodos necesarios para crear el ReporteXBRLDTO y algunos otros
        /// datos necesarios para el reporte que no necesariamente están dentro del DTO.
        /// 
        /// @param instancia Documento de instancia del cual se obtienen los datos.
        ////
        public void crearReporteXBRLDTO(DocumentoInstanciaXbrlDto instancia)
        {
            //StopWatch w = new StopWatch();
            //w.start();
            inicializaInstancia(instancia);
            reporteXBRLDTO = new ReporteXBRLDTO();
            reporteXBRLDTO.Lenguaje = idioma;
            reporteXBRLDTO.Instancia = instancia;

            reporteXBRLDTO.NotasAlPie = new OrderedDictionary();

            inicializaPlantilla(instancia);
            obtenerPrefijoTaxonomia(instancia);
            obtenerConfiguracionReporte();
            crearConceptosReporte();
            obtenerValoresIniciales(instancia);
            crearIndices(instancia);
            crearParametrosReporte(instancia);
            crearNombresHojas();
            crearPeriodosReporte();
            crearTitulos();
            crearRoles(instancia);
            crearIndiceNotasAlPie();
            crearHipercubos(instancia);
            //w.stop();
            //log.info("Tiempo en generar ReporteXBRLDTO : " + ReporteXBRLUtil.obtenerTiempos(w));
        }

        ///
        /// Obtiene el ReporteXBRLDTO.
        /// Debe ser llamado después de la construcción del ReporteXBRLDTO 
        /// siguiendo los plantemientos del patrón de diseño.
        /// 
        /// @return 
        ////
        public ReporteXBRLDTO ReporteXBRLDTO
        {
            get
            {
                return reporteXBRLDTO;
            }
        }

        ///
        /// Crea una nueva instancia de un ReporteBuilder
        /// con el idioma por default "es".
        /// 
        /// @return ReporteBuilder en base al namespace del documento de instancia.
        ////
        public abstract ReporteBuilder newInstance(IDefinicionPlantillaXbrl plantilla);

        ///
        /// Crea una nueva instancia de un ReporteBuilder
        /// con el idioma indicado.
        /// 
        /// @param idioma
        /// @return ReporteBuilder en base al namespace del documento de instancia.
        ////
        public abstract ReporteBuilder newInstance(IDefinicionPlantillaXbrl plantilla, String idioma);

        ///
        /// Se encarga de obtener valores de id de conceptos escenciales del documento instancia.
        /// Cada constructor por tipo de taxonomia realiza la obtencion y construcción.
        /// 
        /// @param instancia Documento de instancia del cual se obtienen los datos.
        ////
        public abstract void obtenerValoresIniciales(DocumentoInstanciaXbrlDto instancia);

        ///
        /// Se encarga del llenado de cada uno de los roles que corresponden a la taxonomia
        /// de acuerdo al archivo de instancia.
        /// Cada constructor por tipo de taxonomia realiza el llenado.
        /// 
        /// @param instancia Documento de instancia del cual se obtienen los datos.
        ////
        public abstract void crearRoles(DocumentoInstanciaXbrlDto instancia);

        ///
        /// Obtiene el nombre de la taxonomia y el prefijo.
        /// 
        /// @param instancia Documento de instancia del cual se obtienen los datos.
        ////
        public void obtenerPrefijoTaxonomia(DocumentoInstanciaXbrlDto instancia)
        {
            String taxonomia = ReporteXBRLUtil.obtenerNombreCortoTaxonomia(instancia);
            String prefijoTaxonomia = ReporteXBRLUtil.obtenerIdPrefijoDeTaxonomia(instancia);
            String prefijoRaProspecto = ReporteXBRLUtil.obtenerPrefijoDeRaProspecto(instancia);

            if (taxonomia != null)
            {
                reporteXBRLDTO.Taxonomia = taxonomia;
            }

            if (prefijoTaxonomia != null)
            {
                reporteXBRLDTO.PrefijoTaxonomia = prefijoTaxonomia;
            }

            if (prefijoRaProspecto != null)
            {
                reporteXBRLDTO.PrefijoRaProspecto = prefijoRaProspecto;
            }
        }

        ///
        /// Crea una lista de indices de los roles que contiene el documento de instancia. 
        /// 
        /// @param instancia Documento de instancia del cual se obtienen los datos.
        ////
        protected void crearIndices(DocumentoInstanciaXbrlDto instancia)
        {
            IList<IndiceReporteDTO> indices = new List<IndiceReporteDTO>();
            var idioma = reporteXBRLDTO.Lenguaje;

            IndiceReporteDTO indice = null;

            foreach (RolDto<EstructuraFormatoDto> rol in instancia.Taxonomia.RolesPresentacion)
            {
                indice = new IndiceReporteDTO();
                
                String nombre = rol.Nombre;
                String rolId = nombre.Contains("[") ?  nombre.Substring(nombre.IndexOf("[") + 1, nombre.IndexOf("]")  - 1) : rol.Uri;
                String uri = rol.Uri;

                if (instancia.Taxonomia.EtiquetasRol.ContainsKey(idioma) && instancia.Taxonomia.EtiquetasRol[idioma].ContainsKey(rol.Uri))
                {
                    nombre = instancia.Taxonomia.EtiquetasRol[idioma][rol.Uri].Valor;
                }

                //LogUtil.Info("rolId:" + rolId);

                if (rolId.Equals("610000"))
                {
                    indice.Rol = rolId + "-Actual";
                    indice.Descripcion = nombre + " - " + reporteXBRLDTO.ObtenValorEtiquetaReporte("ETIQUETA_ACUMULADO") + " " + reporteXBRLDTO.ObtenValorEtiquetaReporte("ETIQUETA_ACTUAL");
                    indice.Uri = uri;
                    indices.Add(indice);

                    indice = new IndiceReporteDTO();
                    indice.Rol = rolId + "-Anterior";
                    indice.Descripcion = nombre + " - " + reporteXBRLDTO.ObtenValorEtiquetaReporte("ETIQUETA_ACUMULADO") + " " + reporteXBRLDTO.ObtenValorEtiquetaReporte("ETIQUETA_ANTERIOR");
                    indice.Uri = uri;
                    indices.Add(indice);
                }
                else
                {
                    indice.Rol = rolId;
                    indice.Descripcion = nombre;
                    indice.Uri = uri;
                    indices.Add(indice);
                }
            }

            reporteXBRLDTO.Indices = indices;
        }

        ///
        /// Crea un mapa con parametros que pueden ser utilizados 
        /// para los constructores de los formatos de los reportes.
        /// Por lo regular contendrá los headers de las tablas.
        /// 
        /// @param instancia Documento de instancia del cual se obtienen los datos.
        ////
        public virtual void crearParametrosReporte(DocumentoInstanciaXbrlDto instancia)
        {

            IDictionary<Object, Object> parametrosReporte = new Dictionary<Object, Object>();

            foreach (IndiceReporteDTO indice in reporteXBRLDTO.Indices)
            {
                String key = ReporteXBRLUtil.TITULO_ROL.Replace(ReporteXBRLUtil.ROL, indice.Rol);

                if (key.Contains("610000"))
                {
                    key = key.Replace("-", "_").ToUpper();
                }

                parametrosReporte.Add(key, indice.Descripcion);
            }

            reporteXBRLDTO.ParametrosReporte = parametrosReporte;
        }

        ///
        /// Crea un arreglo de String que será de uso exclusivo para el formato Excel.
        ////
        protected void crearNombresHojas()
        {
            String[] nombresHojas = null;

            IList<String> nombres = new List<String>();
            nombres.Add("Indices");

            foreach (IndiceReporteDTO indice in reporteXBRLDTO.Indices)
            {
                nombres.Add(indice.Rol);
            }

            nombresHojas = nombres.ToArray();

            reporteXBRLDTO.NombresHojas = nombresHojas;
        }

        /// <summary>
        /// Crea un mapa con las fechas formateadas y calculadas a partir de la fecha de cierre de periodo.
        /// </summary>
        public virtual void crearPeriodosReporte()
        {
            reporteXBRLDTO.PeriodosReporte = DateReporteUtil.obtenerPeriodos(reporteXBRLDTO.FechaReporte);
        }

        ///
        /// Crea un arreglo con las cabeceras de las columnas de los periodos.
        ////
        protected void crearTitulos()
        {
            reporteXBRLDTO.Titulos = TitulosReporteUtil.obtenerTitulos(reporteXBRLDTO);
        }

        /// <summary>
        /// Agrega el indice de "Notas al Pie" a la tabla de contenidos dentro del reporte.
        /// </summary>
        protected void crearIndiceNotasAlPie()
        {
            if (reporteXBRLDTO.NotasAlPie != null && reporteXBRLDTO.NotasAlPie.Count > 0)
            {
                IndiceReporteDTO indiceNotasAlPie = new IndiceReporteDTO();

                indiceNotasAlPie.Rol = "footnote";
                indiceNotasAlPie.Descripcion = reporteXBRLDTO.ObtenValorEtiquetaReporte("EIQUETA_NOTASALPIE");
                indiceNotasAlPie.Uri = "footnote";

                reporteXBRLDTO.Indices.Add(indiceNotasAlPie);
            }
        }

        ///
        /// Obtiene los hechos de acuerdo al Concepto.
        /// El método está hecho espeficamente para los roles de notas y por lo tanto sólo obtiene un hecho.
        /// 
        /// @param concepto Concepto del cual obtendrá el hecho.
        /// @param hechoReporte Hecho del cual llenará los valores.
        /// @param instancia Documento de instancia del cual se obtienen los datos.
        ////
        protected void obtenerHecho(ConceptoReporteDTO concepto, HechoReporteDTO hechoReporte, DocumentoInstanciaXbrlDto instancia)
        {
            if (instancia.HechosPorIdConcepto.ContainsKey(concepto.IdConcepto))
            {
                IList<String> idHechos = instancia.HechosPorIdConcepto[concepto.IdConcepto];
                if (idHechos != null && idHechos.Count() > 0)
                {
                    HechoDto hecho = instancia.HechosPorId[idHechos[0]];
                    if (hecho != null)
                    {
                        llenarHecho(concepto, hecho, hechoReporte);
                    }
                }
            }
        }

        
        /// <summary>
        /// Obtiene los hechos de acuerdo al Concepto.
        /// El método está hecho espeficamente para los roles de calculo.
        /// </summary>
        /// <param name="concepto"> Concepto del cual obtendrá el hecho </param>
        /// <param name="hechoReporteDTO"> Hecho del cual llenará los valores.</param>
        /// <param name="idPeriodoHecho">Identificador del periodo requerido.</param>
        /// <param name="instancia">Documento de instancia del cual se obtienen los datos.</param>
        protected virtual void obtenerHecho(ConceptoReporteDTO concepto, HechoReporteDTO hechoReporteDTO, String idPeriodoHecho, DocumentoInstanciaXbrlDto instancia)
        {
            
            if (!reporteXBRLDTO.PeriodosReporte.ContainsKey(idPeriodoHecho) || !instancia.HechosPorIdConcepto.ContainsKey(concepto.IdConcepto))
            {
                return;
            }
            String fechaPeriodo = reporteXBRLDTO.PeriodosReporte[idPeriodoHecho];
            IList<String> idHechos = instancia.HechosPorIdConcepto[concepto.IdConcepto];
            if(idHechos == null || idHechos.Count() == 0)
            {
                return;
            }
            bool esHechoInstante = EsHechoInstante(idHechos.Count() > 0 ? idHechos[0] : null, instancia);
            //Si el hecho pertenece a un instante, pero el periodo que se llena es una duración
            IList<String> idContextos = null;
            if (fechaPeriodo.Contains("_") && esHechoInstante)
            {
                String[] strFechasDuracion = fechaPeriodo.Split("_".ToCharArray());
                String fechaBuscada = null;
                if (!String.IsNullOrEmpty(concepto.Etiqueta) && concepto.Etiqueta.ToUpper().Contains("periodStartLabel".ToUpper()))
                {
                    fechaBuscada = DateReporteUtil.obtenerFechaMenosUnDia(strFechasDuracion[0]);
                }
                else
                {
                    fechaBuscada = strFechasDuracion[1];
                }
                if (instancia.ContextosPorFecha.ContainsKey(fechaBuscada)) 
                {
                    idContextos = instancia.ContextosPorFecha[fechaBuscada]; 
                }
            }
            else
            {
                if (instancia.ContextosPorFecha.ContainsKey(fechaPeriodo))
                {
                    idContextos = instancia.ContextosPorFecha[fechaPeriodo];
                }
                
            }
            
            //quitar los contextos dimensionales
            var idContextosNoDimensionales = new List<String>();
            if (idContextos != null)
            {
                foreach (var idCtx in idContextos)
                {
                    var ctxTmp = instancia.ContextosPorId[idCtx];
                    if (ctxTmp.ValoresDimension == null || ctxTmp.ValoresDimension.Count == 0)
                    {
                        idContextosNoDimensionales.Add(idCtx);
                    }
                }
            }

            if ((idContextosNoDimensionales != null && idContextosNoDimensionales.Count() > 0) && (idHechos != null && idHechos.Count() > 0))
            {
                foreach (String idHecho in idHechos)
                {
                    var hecho = instancia.HechosPorId[idHecho];

                    if (idContextosNoDimensionales.Contains(hecho.IdContexto))
                    {
                        llenarHecho(concepto, hecho, hechoReporteDTO);
                    }
                }
            }
        }

        /// <summary>
        /// Verifica si el hecho enviado está asociado a un instante 
        /// </summary>
        /// <param name="idHecho"></param>
        /// <param name="instancia"></param>
        /// <returns></returns>
        protected bool EsHechoInstante(String idHecho, DocumentoInstanciaXbrlDto instancia)
        {
            if(!instancia.HechosPorId.ContainsKey(idHecho))
            {
                return false;
            }
            HechoDto hecho = instancia.HechosPorId[idHecho];
            if (!String.IsNullOrEmpty(hecho.IdContexto))
            {
                ContextoDto ctx = instancia.ContextosPorId[hecho.IdContexto];
                if (ctx.Periodo.Tipo == PeriodoDto.Instante)
                {
                    return true;
                }
            }
            return false;
        }

        /// <summary>
        /// Llena los atributos valor, valorFormateado y valorNumerico de HechoReporteDTO de acuerdo al tipo de dato.
        /// </summary>
        /// @param concepto Datos del concepto al que pertenece el hecho.
        /// @param hecho Hecho del documnento de instancia del que se obtienen los datos.
        /// @param hechoReporte Hecho del ReporteXBRLDTO a llenar.
        ////
        protected void llenarHecho(ConceptoReporteDTO concepto, HechoDto hecho, HechoReporteDTO hechoReporte)
        {
            hechoReporte.IdContexto = hecho.IdContexto;
            hechoReporte.IdHecho = hecho.Id;
            if (concepto.Numerico && hecho.EsNumerico && hecho.Valor != null && concepto.TipoDato.Contains(ReporteXBRLUtil.TIPO_DATO_MONETARY))
            {   
                hechoReporte.Valor = hecho.Valor;
                hechoReporte.ValorFormateado = ReporteXBRLUtil.formatoDecimal(hecho.ValorNumerico, ReporteXBRLUtil.FORMATO_CANTIDADES_MONETARIAS);
                hechoReporte.ValorNumerico = hecho.ValorNumerico;
            }
            else if (concepto.Numerico && hecho.EsNumerico && hecho.Valor != null && concepto.TipoDato.Contains(ReporteXBRLUtil.TIPO_DATO_PER_SHARE))
            {
                //hechoReporte.Valor = ReporteXBRLUtil.formatoDecimalSinParentesis(hecho.ValorNumerico, ReporteXBRLUtil.FORMATO_CANTIDADES_DECIMALES);
                hechoReporte.Valor = ReporteXBRLUtil.formatoDecimal(hecho.ValorNumerico, ReporteXBRLUtil.FORMATO_CANTIDADES_DECIMALES);
                hechoReporte.ValorFormateado = ReporteXBRLUtil.formatoDecimal(hecho.ValorNumerico, ReporteXBRLUtil.FORMATO_CANTIDADES_DECIMALES);
                hechoReporte.ValorNumerico = hecho.ValorNumerico;
            }
            else if (concepto.Numerico && hecho.EsNumerico && hecho.Valor != null && concepto.TipoDato.Contains(ReporteXBRLUtil.TIPO_DATO_PORCENTAJE))
            {
                //hechoReporte.Valor = ReporteXBRLUtil.formatoDecimalSinParentesis(hecho.ValorNumerico, ReporteXBRLUtil.FORMATO_CANTIDADES_DECIMALES);
                hechoReporte.Valor = ReporteXBRLUtil.formatoDecimal(hecho.ValorNumerico, ReporteXBRLUtil.FORMATO_CANTIDADES_PORCENTAJE);
                hechoReporte.ValorFormateado = ReporteXBRLUtil.formatoDecimal(hecho.ValorNumerico, ReporteXBRLUtil.FORMATO_CANTIDADES_PORCENTAJE);
                hechoReporte.ValorNumerico = hecho.ValorNumerico;
            }
            else if (concepto.Numerico && hecho.EsNumerico && hecho.Valor != null && concepto.TipoDato.Contains(ReporteXBRLUtil.TIPO_DATO_ENTERO_NO_NEGATIVO))
            {
                hechoReporte.Valor = ReporteXBRLUtil.formatoDecimal(hecho.ValorNumerico, ReporteXBRLUtil.FORMATO_CANTIDADES_ENTERAS);
                hechoReporte.ValorFormateado = ReporteXBRLUtil.formatoDecimal(hecho.ValorNumerico, ReporteXBRLUtil.FORMATO_CANTIDADES_ENTERAS);
                hechoReporte.ValorNumerico = hecho.ValorNumerico;
            }
            else if (concepto.Numerico && hecho.EsNumerico && hecho.Valor != null)
            {
                hechoReporte.Valor = hecho.Valor;
                hechoReporte.ValorFormateado = ReporteXBRLUtil.formatoDecimal(hecho.ValorNumerico, ReporteXBRLUtil.FORMATO_CANTIDADES_ENTERAS);
                hechoReporte.ValorNumerico = hecho.ValorNumerico;
            }
            else if (concepto.TipoDato.Contains(ReporteXBRLUtil.TIPO_DATO_BOOLEAN) || concepto.TipoDato.Contains(ReporteXBRLUtil.TIPO_DATO_SI_NO))
            {
                String valorFinal = null;
                if (hecho.Valor != null && (ReporteXBRLUtil.VALORES_BOOLEAN_SI[0].ToLower().Equals(hecho.Valor.ToLower().Trim()) || ReporteXBRLUtil.VALORES_BOOLEAN_SI[1].ToLower().Equals(hecho.Valor.ToLower().Trim()) || ReporteXBRLUtil.VALORES_BOOLEAN_SI[2].ToLower().Equals(hecho.Valor.ToLower().Trim())))
                {
                    valorFinal = reporteXBRLDTO.ObtenValorEtiquetaReporte("ETIQUETA_SI");
                }
                else
                {
                    valorFinal = reporteXBRLDTO.ObtenValorEtiquetaReporte("ETIQUETA_NO");
                }
                hechoReporte.Valor = valorFinal;
                hechoReporte.ValorFormateado = valorFinal;
            }
            else if (hecho.Valor != null)
            {
                byte[] hechoUTF8Bytes = Encoding.UTF8.GetBytes(hecho.Valor);
                String hechoUTF8 = Encoding.UTF8.GetString(hechoUTF8Bytes);

                hechoReporte.Valor = hechoUTF8;
                hechoReporte.ValorFormateado = ReporteXBRLUtil.eliminaEtiquetas(hechoUTF8);
            }

            obtenerNotasAlPie(hecho, hechoReporte);
        }

        /// <summary>
        /// Busca y agrega las notas al pie en el diccionario.
        /// Actualiza el estado de HechoReporteDTO para crear el enlace
        /// dentro del reporte.
        /// </summary>
        /// <param name="hecho">Hecho que puede contener notas al pie</param>
        /// <param name="hechoReporteDTO">Hecho para el reporte que se actualiza el estado</param>
        protected void obtenerNotasAlPie(HechoDto hecho, HechoReporteDTO hechoReporteDTO)
        {
            if ((hecho.NotasAlPie != null && hecho.NotasAlPie.Count > 0) &&
                (hecho.Valor != null && !String.IsNullOrEmpty(hecho.Valor.Trim())) &&
                (hecho.NotasAlPie.Values != null && hecho.NotasAlPie.Values.Count > 0))
            {
                if (reporteXBRLDTO.NotasAlPie.Contains(hecho.Id))
                {
                    hechoReporteDTO.NotaAlPie = true;
                    hechoReporteDTO.IdHecho = hecho.Id;
                }
                else
                {
                    String textoNota = "";

                    foreach (IList<NotaAlPieDto> notas in hecho.NotasAlPie.Values)
                    {
                        foreach (NotaAlPieDto subnota in notas)
                        {
                            if (subnota.Idioma.Equals(reporteXBRLDTO.Lenguaje.ToLower()))
                            {
                                textoNota = textoNota + "<p>&mdash;&nbsp;</p>" + subnota.Valor;
                            }
                        }
                    }

                    if (String.IsNullOrEmpty(textoNota) && hecho.NotasAlPie.First().Value.ElementAt(0) != null)
                    {
                        textoNota = hecho.NotasAlPie.First().Value.ElementAt(0).Valor;
                    }

                    if (!String.IsNullOrEmpty(textoNota) && !reporteXBRLDTO.NotasAlPie.Contains(hecho.Id))
                    {
                        hechoReporteDTO.NotaAlPie = true;
                        hechoReporteDTO.IdHecho = hecho.Id;

                        ContadorNotasAlPie++;
                        reporteXBRLDTO.NotasAlPie.Add(hecho.Id, new KeyValuePair<int, string>(ContadorNotasAlPie, textoNota));
                    }
                }
            }
        }

        /// <summary>
        /// Obtiene una lista de id conceptos de acuerdo al rol.
        /// </summary>
        /// @param id Identificador del rol.
        /// @return Lista de conceptos que se obtienen del json.
        /// @throws JsonParseException
        /// @throws JsonMappingException
        /// @throws IOException
        ////
        protected IList<ConceptoReporteDTO> obtenerConceptos(String id)
        {
            //

            if (reporteXBRLDTO.ConceptosReportePorRol.ContainsKey(id)) 
            {
                return reporteXBRLDTO.ConceptosReportePorRol[id];
            }

            var idRol = id.Contains("-") ? id.Substring(0, id.IndexOf("-")).Trim() : id;
            if (!reporteXBRLDTO.ConceptosReportePorRol.ContainsKey(idRol))
            {
                throw new NullReferenceException("No existe una configuración disponible para el rol \"" + idRol + "\"");
            }
            var listaOrigen = reporteXBRLDTO.ConceptosReportePorRol[idRol];
            var conceptos = CopiaListaConceptosReporte(listaOrigen);

            return conceptos;
        }
        /// <summary>
        /// Copia un listado de conceptos de reporte.
        /// </summary>
        /// <param name="listaOrigen">Lista de conceptos origen.</param>
        /// <returns>Copia de la lista.</returns>
        private IList<ConceptoReporteDTO> CopiaListaConceptosReporte(IList<ConceptoReporteDTO> listaOrigen)
        {
            var conceptos = new List<ConceptoReporteDTO>();
            foreach (var conceptoOrigen in listaOrigen)
            {
                var conceptoReporte = new ConceptoReporteDTO()
                {
                    IdConcepto = conceptoOrigen.IdConcepto,
                    Abstracto = conceptoOrigen.Abstracto,
                    Etiqueta = conceptoOrigen.Etiqueta,
                    Numerico = conceptoOrigen.Numerico,
                    Tabuladores = conceptoOrigen.Tabuladores,
                    TipoDato = conceptoOrigen.TipoDato,
                    Hechos = CopiaHechosPorPeriodo(conceptoOrigen.Hechos),
                    EsHipercubo = conceptoOrigen.EsHipercubo
                };
                conceptos.Add(conceptoReporte);
            }
            return conceptos;
        }

        /// <summary>
        /// Copia los periodos de un diccionario de hechos en otro diccionario de hechos con los mismos periodos.
        /// </summary>
        /// <param name="origen">Diccionario origen.</param>
        /// <returns>Diccionario copia.</returns>
        private IDictionary<String, HechoReporteDTO> CopiaHechosPorPeriodo(IDictionary<String, HechoReporteDTO> origen) 
        {
            var copia = new Dictionary<String, HechoReporteDTO>();
            foreach (var key in origen.Keys)
            {
                copia.Add(key, new HechoReporteDTO());
            }
            return copia;
        }

        /// <summary>
        /// Buscar los archivos JSON 
        /// </summary>
        private void obtenerConfiguracionReporte()
        {
            String path = null;
            //LogUtil.Info(id);
            if (CONFIGURACION_REPORTE_TAXONOMIA.ContainsKey(reporteXBRLDTO.Taxonomia))
            {
                reporteXBRLDTO.ConfiguracionReporte = CONFIGURACION_REPORTE_TAXONOMIA[reporteXBRLDTO.Taxonomia];
            }

            if (this is ReporteIFRSXBRLBuilder)
            {
                path = ReporteXBRLUtil.IFRS_PATH_REPORT_CONFIG_JSON;
            }
            else if (this is ReporteIFRSXBRLBuilder2019)
            {
                path = ReporteXBRLUtil.IFRS_2019_PATH_REPORT_CONFIG_JSON;
            }
            else if (this is ReporteFIDUXBRLBuilder)
            {
                path = ReporteXBRLUtil.FIDU_PATH_REPORT_CONFIG_JSON.
                        Replace(ReporteXBRLUtil.CLAVE_TAXONOMIA, reporteXBRLDTO.Taxonomia);
            }
            else if (this is ReporteAnexoTXBRLBuilder)
            {
                path = ReporteXBRLUtil.ANNEXT_PATH_REPORT_CONFIG_JSON.
                    Replace(ReporteXBRLUtil.CLAVE_TAXONOMIA, reporteXBRLDTO.Taxonomia);
            }
            else if (this is ReporteAnualProspectoXBRLBuilder)
            {
                path = ReporteXBRLUtil.AR_PROS_PATH_REPORT_CONFIG_JSON.
                    Replace(ReporteXBRLUtil.CLAVE_RA_PROS, reporteXBRLDTO.PrefijoRaProspecto).
                    Replace(ReporteXBRLUtil.CLAVE_TAXONOMIA, reporteXBRLDTO.Taxonomia);
            }
            else if (this is ReporteEventosRelevantesBuilder)
            {
                path = ReporteXBRLUtil.EVENTOS_RELEVANTES_EMISORAS_REPORT_CONFIG_JSON;
            }

            if (String.IsNullOrWhiteSpace(path))
            {
                throw new NullReferenceException("No existe definición de configuracion de reportes para la taxonomia [" + reporteXBRLDTO.Taxonomia + "]");
            }
            var configuracion = obtenerJSON<ConfiguracionReporteDTO>(path);
            configuracion.EstilosReporte = obtenerJSON<EstilosReporteDTO>(ReporteXBRLUtil.PATH_ESTILOS_COMUNES);
            configuracion.EtiquetasReportePorLenguaje = obtenerJSON<IDictionary<string, IDictionary<string, string>>>(ReporteXBRLUtil.PATH_ETIQUETAS_POR_LENGUAJE_JSON);
            
            CONFIGURACION_REPORTE_TAXONOMIA.Add(reporteXBRLDTO.Taxonomia, configuracion);
            reporteXBRLDTO.ConfiguracionReporte = CONFIGURACION_REPORTE_TAXONOMIA[reporteXBRLDTO.Taxonomia];
        }
        /// <summary>
        /// Crea las estructuras de conceptos a utilizar en la presentación de los formatos de roles.
        /// </summary>
        private void crearConceptosReporte()
        {
            var listaRolesPresentacion = reporteXBRLDTO.Instancia.Taxonomia.RolesPresentacion;
            reporteXBRLDTO.ConceptosReportePorRol = new Dictionary<string,IList<ConceptoReporteDTO>>();
            var rolId = String.Empty;
            foreach (var rolPrescentacion in listaRolesPresentacion)
            {
                var listaEstructuras = rolPrescentacion.Estructuras;
                var conceptos = new List<ConceptoReporteDTO>();
                var rolNombre = rolPrescentacion.Nombre;
                var startIndex = rolNombre.IndexOf("[") + 1;
                var lengthSubstring = rolNombre.IndexOf("]") - startIndex;
                if (startIndex > -1 && lengthSubstring > -1)
                {
                    rolId = rolNombre.Substring(startIndex, lengthSubstring);
                }
                else
                {
                    rolId = rolPrescentacion.Uri;
                }
                //LogUtil.Info(rolPrescentacion);
                foreach (var estructura in listaEstructuras)
                {
                    EvaluaEstructuraConcepto(estructura, 0, conceptos, rolId);
                }
                reporteXBRLDTO.ConceptosReportePorRol.Add(rolId, conceptos);
            }
        }
            
        
        /// <summary>
        /// Llena el listado de conceptos reporte con la información obtenida del link de presentación.
        /// </summary>
        /// <param name="estructura">Estructura del formato.</param>
        /// <param name="tabuladores">Cantidad de tabuladores que se agregan.</param>
        /// <param name="listaConceptos">Listado donde se agregarán los conceptos.</param>
        public virtual void EvaluaEstructuraConcepto(EstructuraFormatoDto estructura, int tabuladores, IList<ConceptoReporteDTO> listaConceptos, String idRol)
        {
            //LogUtil.Info("tabuladores:" + tabuladores + ",   idConcepto: " + estructura.IdConcepto);
            if (!reporteXBRLDTO.Instancia.Taxonomia.ConceptosPorId.ContainsKey(estructura.IdConcepto))
            {
                 throw new NullReferenceException("No existe el contexto [" + estructura.IdConcepto + "] en la taxonomía.");
            }
            var concepto = reporteXBRLDTO.Instancia.Taxonomia.ConceptosPorId[estructura.IdConcepto];
            var hechosReporte = new Dictionary<string,HechoReporteDTO>();
            if (!reporteXBRLDTO.ConfiguracionReporte.PeriodosPorRol.ContainsKey(idRol) || (concepto.EsMiembroDimension??false) || concepto.EsHipercubo || (concepto.EsDimension??false))
            {
                return;
            }
            foreach(var idPeriodo in reporteXBRLDTO.ConfiguracionReporte.PeriodosPorRol[idRol])
            {
                hechosReporte.Add(idPeriodo,new HechoReporteDTO());
            }
            var conceptoReporte = new ConceptoReporteDTO()
            {
                IdConcepto = concepto.Id,
                Abstracto = concepto.EsAbstracto??false,
                Etiqueta = estructura.RolEtiquetaPreferido,
                Numerico = concepto.EsTipoDatoNumerico,
                Tabuladores = tabuladores * reporteXBRLDTO.ConfiguracionReporte.EstilosReporte.MultiploTabuladores,
                TipoDato = concepto.TipoDato,
                Hechos = hechosReporte,
                AtributosAdicionales = concepto.AtributosAdicionales,
                EsHipercubo = concepto.EsHipercubo
            };
            listaConceptos.Add(conceptoReporte);
            var listaSubEstructuras = estructura.SubEstructuras;
            if (listaSubEstructuras != null && listaSubEstructuras.Count() > 0) 
            {
                var tabuladoresItera = tabuladores++; 
                foreach (var subEstructura in listaSubEstructuras)
                {
                    EvaluaEstructuraConcepto(subEstructura, tabuladoresItera, listaConceptos, idRol);
                }
            }
        
        }

        /// <summary>
        /// Retorna el recurso json solicitaddo y lo deserializa al objeto indicado.
        /// </summary>
        /// <typeparam name="T">Tipo de elemento a deserializar.</typeparam>
        /// <param name="ubicacionDefinicion">Ubicación del recurson con la cadena JSON a deserializar.</param>
        /// <returns>Objeto deserializado.</returns>
        private T obtenerJSON<T>(String ubicacionDefinicion)
        {
            var assembly = Assembly.GetExecutingAssembly();
            T definicion;
            using (Stream stream = assembly.GetManifestResourceStream(ubicacionDefinicion))
            using (StreamReader reader = new StreamReader(stream))
            {
                string result = reader.ReadToEnd();
                definicion = JsonConvert.DeserializeObject<T>(result);
            }
            return definicion;
        }

        ///
        /// Llena la lista de conceptos con los valores correspondientes a cada uno de los id concepto de la lista.
        /// 
        /// @param conceptos Lista de conceptos con los datos completos.
        /// @param instancia Documento de instancia del cual se obtienen los datos.
        /// @return Lista de conceptos con los valores obtenidos del documento de instancia.
        ////
        protected IList<ConceptoReporteDTO> llenarRolNotas(IList<ConceptoReporteDTO> conceptos, DocumentoInstanciaXbrlDto instancia)
        {

            foreach (ConceptoReporteDTO concepto in conceptos)
            {
                HechoReporteDTO hechoReporte = null;
                llenarConcepto(concepto, instancia);
                if (concepto.Abstracto)
                {
                    continue;
                }
                if (concepto.Hechos.ContainsKey("trim_actual"))
                {
                    hechoReporte = concepto.Hechos["trim_actual"];
                    obtenerHecho(concepto, hechoReporte, instancia);
                }
            }

            return conceptos;
        }

        ///
        /// Llena la lista de conceptos con los valores correspondientes a cada uno de los id concepto de la lista.
        /// 
        /// @param conceptos Lista de conceptos con los datos completos.
        /// @param instancia Documento de instancia del cual se obtienen los datos.
        /// @return Lista de conceptos con los valores obtenidos del documento de instancia.
        ////
        protected IList<ConceptoReporteDTO> llenarRolCalculo(IList<ConceptoReporteDTO> conceptos, DocumentoInstanciaXbrlDto instancia)
        {
            foreach (ConceptoReporteDTO concepto in conceptos)
            {

                llenarConcepto(concepto, instancia);

                IDictionary<String, HechoReporteDTO> hechos = concepto.Hechos;

                if (!concepto.Abstracto && hechos != null && hechos.Count() > 0)
                {
                    foreach (String idPeriodoHecho in hechos.Keys)
                    {
                        
                        if (hechos.ContainsKey(idPeriodoHecho))
                        {
                            HechoReporteDTO hechoReporte = hechos[idPeriodoHecho];
                            obtenerHecho(concepto, hechoReporte, idPeriodoHecho, instancia);
                        }
                    }
                }
            }

            return conceptos;
        }

        ///
        /// Llena los atributos obteniendo los datos del documento de instancia correspondientes al idConcepto.
        /// 
        /// @param conceptoReporte Objeto del concepto a llenar.
        /// @param instancia Documento de instancia del cual se obtienen los datos.
        ////
        protected void llenarConcepto(ConceptoReporteDTO conceptoReporte, DocumentoInstanciaXbrlDto instancia)
        {
            //log.info(conceptoReporte.IdConcepto);

            if (instancia.Taxonomia.ConceptosPorId.ContainsKey(conceptoReporte.IdConcepto))
            {
                ConceptoDto concepto = instancia.Taxonomia.ConceptosPorId[conceptoReporte.IdConcepto];
                conceptoReporte.Valor = ReporteXBRLUtil.obtenerEtiquetaConcepto(this.idioma, conceptoReporte.Etiqueta, conceptoReporte.IdConcepto, instancia);
                conceptoReporte.Numerico = concepto.EsTipoDatoNumerico;

                if (!String.IsNullOrEmpty(concepto.TipoDato))
                {
                    conceptoReporte.TipoDato = concepto.TipoDato;
                }
            }
        }

        ///
        /// Llena la lista de conceptos con los valores correspondientes a cada uno de los id concepto de la lista.
        /// Método exclusivo para el rol 610000.
        /// 
        /// @param conceptos Lista de conceptos con los datos completos.
        /// @param instancia Documento de instancia del cual se obtienen los datos.
        /// @return Lista de conceptos con los valores obtenidos del documento de instancia.
        ////
        protected IList<ConceptoReporteDTO> llenarRol610000(String rolId, IList<ConceptoReporteDTO> conceptos, DocumentoInstanciaXbrlDto instancia)
        {

            String trimestre = null;
            String cierre_trimestre = null;
            String acumulado = null;
            var defaultDate = default(DateTime);

            if (rolId.ToUpper().Contains("Actual".ToUpper()))
            {
                trimestre = reporteXBRLDTO.PeriodosReporte["cierre_trim_actual"];
                cierre_trimestre = reporteXBRLDTO.PeriodosReporte["cierre_trim_anio_anterior"];
                acumulado = reporteXBRLDTO.PeriodosReporte["acum_anio_actual"];
            }
            else
            {
                trimestre = reporteXBRLDTO.PeriodosReporte["trim_anterior"];
                cierre_trimestre = reporteXBRLDTO.PeriodosReporte["inicio_trim_anio_anterior"];
                acumulado = reporteXBRLDTO.PeriodosReporte["acum_anio_anterior"];
            }
            var tieneReexpresion = false;
           
            foreach (ConceptoReporteDTO concepto in conceptos)
            {

                llenarConcepto(concepto, instancia);
                IList<String> hechos = null;
                if (instancia.HechosPorIdConcepto.ContainsKey(concepto.IdConcepto))
                {
                    hechos = instancia.HechosPorIdConcepto[concepto.IdConcepto];
                }
                //LogUtil.Info("LlenarRol == > Concepto:[" + concepto.IdConcepto + "],\t\t\tAbstracto:[" + concepto.Abstracto + "],\t\thechos:[" + concepto.Hechos.Count() + "]");
                if (!concepto.Abstracto && hechos != null)
                {
                    foreach (String idHecho in hechos)
                    {
                        String fecha = null;
                        String fechaBuscada = null;
                        HechoDto hecho = instancia.HechosPorId[idHecho];
                        ContextoDto contexto = instancia.ContextosPorId[hecho.IdContexto];
                        HechoReporteDTO hechoReporte = null;

                        if (contexto.Periodo.Tipo == PeriodoDto.Instante)
                        {
                            fecha = DateReporteUtil.formatoFechaEstandar(contexto.Periodo.FechaInstante);
                        }
                        else
                        {
                            fecha = DateReporteUtil.formatoFechaEstandar(contexto.Periodo.FechaInicio) + "_" + DateReporteUtil.formatoFechaEstandar(contexto.Periodo.FechaFin);
                        }

                        if (contexto.Periodo.Tipo == PeriodoDto.Instante)
                        {
                            //Verificar que fecha se compara
                            if (concepto.Etiqueta != null && concepto.Etiqueta.Contains("periodStartLabel"))
                            {
                                fechaBuscada = cierre_trimestre;
                            }
                            else
                            {
                                fechaBuscada = trimestre;
                            }

                        }
                        else
                        {
                            fechaBuscada = acumulado;
                        }

                        if (fecha.Equals(fechaBuscada))
                        {

                            if (contexto.ContieneInformacionDimensional)
                            {
                                if (contexto.ValoresDimension.Count == 1) {
                                    if (concepto.Hechos.ContainsKey(contexto.ValoresDimension[0].IdItemMiembro))
                                    {
                                        hechoReporte = concepto.Hechos[contexto.ValoresDimension[0].IdItemMiembro];
                                    }

                                    if (hechoReporte == null && concepto.Etiqueta != null && concepto.Etiqueta.Contains("periodStartLabel"))
                                    {
                                        //Se tiene solo la dimensión de reexpresión
                                        var indice = "ifrs-full_EquityMember," + contexto.ValoresDimension[0].IdItemMiembro;
                                        hechoReporte = new HechoReporteDTO()
                                        {
                                            Valor = "0"
                                        };
                                        concepto.Hechos[indice] = hechoReporte;
                                        tieneReexpresion = true;
                                    }
                                }
                                else
                                {
                                    //si tiene reexpresión y es el saldo al inicio
                                    if (concepto.Etiqueta != null && concepto.Etiqueta.Contains("periodStartLabel")) {
                                        var miembroCapital = contexto.ValoresDimension[0].IdDimension.Equals("ifrs-full_ComponentsOfEquityAxis") ?
                                                            contexto.ValoresDimension[0].IdItemMiembro :
                                                            contexto.ValoresDimension[1].IdItemMiembro;
                                        var miembroReexpresion = contexto.ValoresDimension[0].IdDimension.Equals("ifrs-full_RetrospectiveApplicationAndRetrospectiveRestatementAxis") ?
                                                                contexto.ValoresDimension[0].IdItemMiembro :
                                                                contexto.ValoresDimension[1].IdItemMiembro;
                                        var indice = miembroCapital + "," + miembroReexpresion;

                                        hechoReporte = new HechoReporteDTO()
                                        {
                                            Valor = "0"
                                        };
                                        concepto.Hechos[indice] = hechoReporte;
                                        tieneReexpresion = true;
                                    }
                                    
                                }
                                

                            }
                            else
                            {
                                hechoReporte = concepto.Hechos["ifrs-full_EquityMember"];
                            }
                            if (hechoReporte != null)
                            {
                                llenarHecho(concepto, hecho, hechoReporte);
                            }
                        }

                    }

                }
            }

            if (tieneReexpresion)
            {
                //Reacomodar los hechos de la reexpresión como conceptos
                var miembrosReexpresion = new List<string>()
                    {
                        "ifrs-full_PreviouslyStatedMember",
                        "ifrs-full_IncreaseDecreaseDueToChangesInAccountingPolicyAndCorrectionsOfPriorPeriodErrorsMember",
                        "ifrs-full_FinancialEffectOfChangesInAccountingPolicyMember",
                        "ifrs-full_IncreaseDecreaseDueToChangesInAccountingPolicyRequiredByIFRSsMember",
                        "ifrs-full_IncreaseDecreaseDueToVoluntaryChangesInAccountingPolicyMember",
                        "ifrs-full_FinancialEffectOfCorrectionsOfAccountingErrorsMember"
                    };

                var conceptosReexpresion = new List<ConceptoReporteDTO>();
                ConceptoReporteDTO capitalAlInicio = null;
                foreach (ConceptoReporteDTO concepto in conceptos)
                {
                    if (concepto.IdConcepto.Equals("ifrs-full_Equity"))
                    {
                        capitalAlInicio = concepto;
                        break;
                    }
                }

                foreach (var miembroReexp in miembrosReexpresion) {
                    var conceptoReexpresion = new ConceptoReporteDTO() {
                        IdConcepto = miembroReexp
                    };
                    llenarConcepto(conceptoReexpresion, instancia);
                    conceptoReexpresion.Abstracto = false;
                    conceptoReexpresion.Hechos = new Dictionary<String, HechoReporteDTO>();
                    var keysAProcesar = new List<String>();
                    foreach (var keyHechos in capitalAlInicio.Hechos.Keys.Where(j => j.Contains(miembroReexp)))
                    {
                        keysAProcesar.Add(keyHechos);
                    }

                    foreach (var keyHechos in keysAProcesar)
                    {
                        var llavesmiembro = keyHechos.Split(',');
                        conceptoReexpresion.Hechos[llavesmiembro[0]] = capitalAlInicio.Hechos[keyHechos];
                        capitalAlInicio.Hechos.Remove(keyHechos);
                    }
                    conceptosReexpresion.Add(conceptoReexpresion);
                }
                var indiceInicial = conceptos.IndexOf(capitalAlInicio)+1;
                foreach (var conceptoCreado in conceptosReexpresion)
                {
                    conceptos.Insert(indiceInicial++, conceptoCreado);
                }
                

            }
            

            return conceptos;
        }

        //////
        /// Quita la tarcer columna del estado de posición financiera si no hay datos para capital contable y pasivos
        /// @param instancia Documento origen
        /// @param reporteXBRLDTO DTO resultado
        ////
        protected void ajustarTercerColumnaEPF(DocumentoInstanciaXbrlDto instancia)
        {   
            if (reporteXBRLDTO.Roles.ContainsKey("210000"))
            {
                IList<ConceptoReporteDTO> rol210 = reporteXBRLDTO.Roles["210000"];
                bool quitarAnioAnterior = false;
                foreach (ConceptoReporteDTO equityAndLiab in rol210)
                {
                    if (equityAndLiab.IdConcepto.Equals("ifrs-full_EquityAndLiabilities"))
                    {
                        var hechoItera = equityAndLiab.Hechos["inicio_trim_anio_anterior"];
                        if (hechoItera == null || String.IsNullOrWhiteSpace(hechoItera.Valor))
                        {
                            quitarAnioAnterior = true;
                            break;
                        }
                    }
                }

                if (quitarAnioAnterior)
                {
                    foreach (String rol in reporteXBRLDTO.Roles.Keys)
                    {
                        if (rol.Equals("210000") || rol.Equals("700000") || rol.Equals("700004") || rol.Equals("800100"))
                        {
                            foreach (ConceptoReporteDTO concepto in reporteXBRLDTO.Roles[rol])
                            {
                                if (concepto.Hechos != null)
                                {
                                    concepto.Hechos.Remove("inicio_trim_anio_anterior");
                                }

                            }
                        }
                    }
                }
            }
        }
        /// <summary>
        /// Inicializa el diccionario de hipercubos.
        /// </summary>
        /// <param name="instancia">Documento de instancia con los hipercubos a inicializar.</param>
        public virtual void crearHipercubos(DocumentoInstanciaXbrlDto instancia)
        {
            //LogUtil.Info("Se intenta inicializar los hipercubos desde el método padre.");
        }
        /// <summary>
        /// Crea un diccionario con la información base del documento de instancia para reportar algún error.
        /// </summary>
        /// <param name="instancia">Documento de instancia sobre el que se cometio el error.</param>
        /// <param name="errorMessage">Mesnaje de error que será incluido.</param>
        /// <returns>Diccionario con la información general para identificar el documento sobre el cual ocurrió el errro.</returns>
        protected IDictionary<string, object> CreaDetalleError(DocumentoInstanciaXbrlDto instancia, string errorMessage) 
        {
            var detalleError = new Dictionary<string, object>() 
            { 
                {"Error",errorMessage},
                {"IdDocumentoInstancia", instancia.IdDocumentoInstancia??0},
                {"NombreArchivo", instancia.NombreArchivo??String.Empty},
                {"ParametrosConfiguracion", instancia.ParametrosConfiguracion??new Dictionary<string,string>()},
                {"EspacioNombresPrincipal", instancia.Taxonomia != null?  instancia.Taxonomia.EspacioNombresPrincipal??String.Empty : instancia.EspacioNombresPrincipal??String.Empty}
            };

            ContextoDto primerContexto = null;
            if (instancia.ContextosPorId != null && instancia.ContextosPorId.Count > 0) 
            {
                primerContexto = instancia.ContextosPorId.Values.First();
            }
            if (primerContexto != null)
            {
                detalleError.Add("PrimerContexto", primerContexto);
            }
            return detalleError;
        }
    }
}
