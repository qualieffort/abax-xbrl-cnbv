using AbaxXBRL.Constantes;
using AbaxXBRL.Taxonomia;
using AbaxXBRL.Util;
using AbaxXBRLCore.Common.Constants;
using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.Viewer.Application.Dto;
using NPOI.SS.UserModel;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using DateUtil = AbaxXBRLCore.Common.Util.DateUtil;

namespace AbaxXBRLCore.Viewer.Application.Model.Impl
{
    /// <summary>
    /// Implementación abstracta con la funcionalidad común para todas las plantillas de documentos instancia XBRL.
    /// <author>José Antonio Huizar Moreno</author>
    /// <version>1.0</version>
    /// </summary>
    public abstract class DefinicionPlantillaXbrlAbstract : IDefinicionPlantillaXbrl
    {

        /// <summary>
        /// Contiene las diferentes definiciones de elementos utilizados por cada uno de los roles de la taxonomía asociada a esta plantilla de documento instancia XBRL
        /// </summary>
        public IDictionary<string, DefinicionElementosPlantillaXbrl> DefinicionesDeElementosPlantillaPorRol { get; set; }

        /// <summary>
        /// Contiene los valores de los parámetros de configuración.
        /// </summary>
        protected IDictionary<string, string> parametrosConfiguracion { get; set; }

        /// <summary>
        /// El objeto que almacena la definición de los elementos de plantilla utilizados.
        /// </summary>
        protected DefinicionElementosPlantillaXbrl definicionElementosPlantilla;

        /// <summary>
        /// Las variables generadas para uso de la plantilla indexadas por su identificador.
        /// </summary>
        protected IDictionary<string, string> variablesPlantilla;

        /// <summary>
        /// El documento instancia ligado a esta instancia de la plantilla del documento instancia.
        /// </summary>
        protected DocumentoInstanciaXbrlDto documentoInstancia;

        /// <summary>
        /// Contiene el mapeo del índice de las secciones por ROL en el documento de WORD para poder procesar un rol a la vez
        /// </summary>
        public IDictionary<string, string> IndiceRolesSeccionWord { get; set; }

        /// <summary>
        /// Contiene un mapeo entre los identificadores de los contextos descritos por la plantilla y los identificadores de sus contextos equivalentes en el documento instancia
        /// </summary>
        protected IDictionary<string, string> mapeoContextosPlantillaAContextosDocumentoInstancia;

        /// <summary>
        /// Contiene un mapeo entre los identificadores de las unidades descritas por la plantilla y los identificadores de sus unidades equivalentes en el documento instancia
        /// </summary>
        protected IDictionary<string, string> mapeoUnidadesPlantillaAUnidadesDocumentoInstancia;

        /// <summary>
        /// Contiene un mapeo entre los identificadores de los hechos descritos por la plantilla y los identificadores de sus hechos equivalentes en el documento instancia
        /// </summary>
        protected IDictionary<string, string> mapeoHechosPlantillaAHechosDocumentoInstancia;

        /// <summary>
        /// Contiene las unidades que se generaron a partir de la definición de una unidad de plantilla
        /// </summary>
        protected IDictionary<string, UnidadDto> unidadPorIdUnidadPlantilla;

        /// <summary>
        /// Contiene los contextos que se generaron a partir de la definición de un contexto de plantilla
        /// </summary>
        protected IDictionary<string, ContextoDto> contextoPorIdContextoPlantilla;

        /// <summary>
        /// Contiene los hechos que se generaron a partir de la definición de un hecho de plantilla
        /// </summary>
        protected IDictionary<string, HechoDto> hechoPorIdHechoPlantilla;

        /// <summary>
        /// Lista de alias por URI de un rol, estos alias se utilizan para dar un sobre nombre a contenedores con información de hechos del rol, 
        /// por ejemplo, hojas de un documento de excel, etc
        /// </summary>
        public IDictionary<string, IList<string>> AliasRoles { get; set; }

        /// <summary>
        /// Ruta de la plantilla de excel de captura de importación
        /// </summary>
        public string RutaPlantillaExcel { get; set; }

        /// <summary>
        /// Ruta de la plantilla en word de captura de notas de hechos
        /// </summary>
        public string RutaPlantillaWord { get; set; }
        
        /// <summary>
        /// Ruta de la plantilla ne word para la exportación del reporte completo
        /// </summary>
        public IDictionary<string,string> RutaPlantillaExportacionWord { get; set; }

        /// <summary>
        /// Ruta para la plantilla a llenar
        /// </summary>
        public string RutaPlantilla { get; set; }
        /// <summary>
        /// Mapa que define el id del hecho de la plantilla en base a su etiqueta de documento para los hechos de tipo BlockItemType
        /// Del tipo <llave = identificadorPlantillaWord/ valor = identificadorPlantilla >
        /// </summary>
        public IDictionary<string, string> MapaHechoPlantillaEtiquetaDocumento { get; set; }


        /// <summary>
        /// Contiene el mapeo de los conceptos que deben comportarse como text bock
        /// </summary>
        public IDictionary<string, string> MapeoConceptoTextBlock { get; set; }
        
        /// <summary>
        /// Versión opcional de plantilla del documento 
        /// </summary>
        public String VersionPlantilla { get; set; }
        /// <summary>
        /// Constructor por defecto de la clase
        /// </summary>
        public DefinicionPlantillaXbrlAbstract()
        {
            this.definicionElementosPlantilla = new DefinicionElementosPlantillaXbrl();

            definicionElementosPlantilla.ContextosPlantillaPorId = new Dictionary<string, ContextoPlantillaDto>();
            definicionElementosPlantilla.HechosPlantillaPorId = new Dictionary<string, HechoPlantillaDto>();
            definicionElementosPlantilla.UnidadesPlantillaPorId  = new Dictionary<string, UnidadPlantillaDto>();

            this.variablesPlantilla = new Dictionary<string, string>();
            this.mapeoContextosPlantillaAContextosDocumentoInstancia = new Dictionary<string, string>();
            this.mapeoUnidadesPlantillaAUnidadesDocumentoInstancia = new Dictionary<string, string>();
            this.mapeoHechosPlantillaAHechosDocumentoInstancia = new Dictionary<string, string>();
            this.unidadPorIdUnidadPlantilla = new Dictionary<string, UnidadDto>();
            this.contextoPorIdContextoPlantilla = new Dictionary<string, ContextoDto>();
            this.hechoPorIdHechoPlantilla = new Dictionary<string, HechoDto>();
            this.AliasRoles = new Dictionary<string, IList<string>>();
            this.MapaHechoPlantillaEtiquetaDocumento = new Dictionary<string, string>();
        }

        public bool Inicializar(DocumentoInstanciaXbrlDto documentoInstancia) {



            this.DeterminarParametrosConfiguracion(documentoInstancia);
            
            this.documentoInstancia = documentoInstancia;

            if (this.DefinicionesDeElementosPlantillaPorRol != null && this.DefinicionesDeElementosPlantillaPorRol.Count > 0) {
                foreach (DefinicionElementosPlantillaXbrl definicion in this.DefinicionesDeElementosPlantillaPorRol.Values) {
                    if(definicion.ContextosPlantillaPorId != null && definicion.ContextosPlantillaPorId.Count > 0 ) {
                        foreach (var definicionContexto in definicion.ContextosPlantillaPorId)
                        {
                            if (!definicionElementosPlantilla.ContextosPlantillaPorId.ContainsKey(definicionContexto.Key))
                            {
                                this.definicionElementosPlantilla.ContextosPlantillaPorId.Add(definicionContexto.Key, definicionContexto.Value);
                            }
                            
                        }
                    }
                    if (definicion.UnidadesPlantillaPorId != null && definicion.UnidadesPlantillaPorId.Count > 0)
                    {
                        foreach (var definicionUnidad in definicion.UnidadesPlantillaPorId)
                        {
                            if (!definicionElementosPlantilla.UnidadesPlantillaPorId.ContainsKey(definicionUnidad.Key))
                            {
                                this.definicionElementosPlantilla.UnidadesPlantillaPorId.Add(definicionUnidad.Key, definicionUnidad.Value);
                            }
                            
                        }
                    }
                    if (definicion.HechosPlantillaPorId != null && definicion.HechosPlantillaPorId.Count > 0)
                    {
                        foreach (var definicionHecho in definicion.HechosPlantillaPorId)
                        {
                            if (!definicionElementosPlantilla.HechosPlantillaPorId.ContainsKey(definicionHecho.Key))
                            {
                                this.definicionElementosPlantilla.HechosPlantillaPorId.Add(definicionHecho.Key, definicionHecho.Value);
                            }
                            
                        }
                    }
                }
            }

            return this.GenerarVariablesDocumentoInstancia();
        }

        public virtual IDictionary<string, string> ObtenerParametrosConfiguracion() {
            return this.parametrosConfiguracion;
        }

        public void AgregarDefinicionElementos(DefinicionElementosPlantillaXbrl definicion)
        {
            if (definicion != null)
            {
                if (definicion.ContextosPlantillaPorId != null)
                {
                    foreach (var contexto in definicion.ContextosPlantillaPorId)
                    {
                        this.definicionElementosPlantilla.ContextosPlantillaPorId[contexto.Key] = contexto.Value;
                    }
                }
                if (definicion.UnidadesPlantillaPorId != null)
                {
                    foreach (var unidad in definicion.UnidadesPlantillaPorId)
                    {
                        this.definicionElementosPlantilla.UnidadesPlantillaPorId[unidad.Key] = unidad.Value;
                    }
                }
                if (definicion.HechosPlantillaPorId != null)
                {
                    foreach (var hecho in definicion.HechosPlantillaPorId)
                    {
                        this.definicionElementosPlantilla.HechosPlantillaPorId[hecho.Key] = hecho.Value;
                    }
                }
            }
        }

        public DefinicionElementosPlantillaXbrl ObtenerDefinicionDeElementos()
        {
            return definicionElementosPlantilla;
        }

        public IDictionary<string, string> ObtenerVariablesDocumentoInstancia()
        {
            return variablesPlantilla;
        }

        public string ObtenerVariablePorId(string id)
        {
            string valor = null;
            if (variablesPlantilla.ContainsKey(id)) {
                valor = variablesPlantilla[id];
            }
            return valor;
        }

        public string ObtenerRutaPlantillaExcel()
        {
            return RutaPlantillaExcel;
        }

        public string ObtenerRutaPlantillaNotasWord() {
            return RutaPlantillaWord;
        }

        public string ObtenerRutaPlantillaExportacionWord(string claveIdioma)
        {
            string ruta = null;
            if (String.IsNullOrWhiteSpace(claveIdioma) || !RutaPlantillaExportacionWord.ContainsKey(claveIdioma))
            {
                ruta = RutaPlantillaExportacionWord.Values.First();
                
            }
            else 
            {
                ruta = RutaPlantillaExportacionWord[claveIdioma];
            }
 

            return ruta;
        }
        /// <summary>
        /// Obtiene el identificador del contexto que corresponde a un contexto del documento instancia que coincide en todas sus características con el contexto descrito por el identificador de contexto de la plantilla.
        /// Si no existiese un contexto equivalente, se creará en el documento instancia a partir de la definición de la plantilla.
        /// </summary>
        /// <param name="idContextoPlantilla">el identificador del contexto de la plantilla que será consultado.</param>
        /// <param name="idConcepto">el identificador del concepto que se ligará al contexto.</param>
        /// <returns>el identificador del contexto en el documento instancia que coincide con el contexto de plantilla relacionado al identificador pasado como parámetro. null en caso de no poder encontrar un contexto equivalente o no poder crearlo.</returns>
        public string ObtenerIdContextoDocumentoInstanciaEquivalenteAIdContextoPlantilla(string idContextoPlantilla, string idConcepto) {
            string idContexto = null;

            if (this.documentoInstancia != null) {
                if (this.mapeoContextosPlantillaAContextosDocumentoInstancia.ContainsKey(idContextoPlantilla)) {
                    idContexto = this.mapeoContextosPlantillaAContextosDocumentoInstancia[idContextoPlantilla];
                } else {
                    var contexto = this.BuscarContextoPlantillaEnContextosDocumentoInstancia(idContextoPlantilla, idConcepto);
                    if (contexto == null) {
                        if (this.contextoPorIdContextoPlantilla.ContainsKey(idContextoPlantilla)) {
                            ContextoDto contextoACrear = this.contextoPorIdContextoPlantilla[idContextoPlantilla];
                            this.InyectarContextoADocumentoInstancia(contextoACrear);
                            idContexto = contextoACrear.Id;
                            this.mapeoContextosPlantillaAContextosDocumentoInstancia.Add(idContextoPlantilla,idContexto);
                        }
                    } else {
                        idContexto = contexto.Id;
                        this.mapeoContextosPlantillaAContextosDocumentoInstancia.Add(idContextoPlantilla,idContexto);
                    }
                }
            }

            return idContexto;
        }

        /// <summary>
        /// Agrega un contexto al modelo del documento instancia y actualiza los índices relacionados.
        /// </summary>
        /// <param name="contextoACrear">el contexto que se deberá agregar al documento instancia.</param>
        public void InyectarContextoADocumentoInstancia(ContextoDto contextoACrear) {
            string llaveFechas = null;
            if (contextoACrear.Periodo.Tipo == Period.Instante) {
                llaveFechas = Common.Util.DateUtil.ToFormatString(contextoACrear.Periodo.FechaInstante.ToUniversalTime(), DateUtil.YMDateFormat);
            } else {
                llaveFechas = DateUtil.ToFormatString(contextoACrear.Periodo.FechaInicio.ToUniversalTime(), DateUtil.YMDateFormat) +
                    ConstantesGenerales.Underscore_String
                    + DateUtil.ToFormatString(contextoACrear.Periodo.FechaFin.ToUniversalTime(), DateUtil.YMDateFormat);
            }
            if (!this.documentoInstancia.ContextosPorFecha.ContainsKey(llaveFechas)) {
                this.documentoInstancia.ContextosPorFecha.Add(llaveFechas, new List<string>());
            }
            if (!this.documentoInstancia.ContextosPorFecha[llaveFechas].Contains(contextoACrear.Id)) {
                this.documentoInstancia.ContextosPorFecha[llaveFechas].Add(contextoACrear.Id);
            }
            this.documentoInstancia.ContextosPorId.Add(contextoACrear.Id, contextoACrear);
        }

        /// <summary>
        /// Obtiene el identificador de la unidad que corresponde a una unidad del documento instancia que coincide en todas sus características con la unidad descrita por el identificador de unidad de la plantilla.
        /// Si no existiese una unidad equivalente, se creará en el documento instancia a partir de la definición de la plantilla.
        /// </summary>
        /// <param name="idUnidadPlantilla">el identificador de la unidad de la plantilla que será consultada.</param>
        /// <param name="idConcepto">el identificador del concepto que se va a relacionar con la unidad</param>
        /// <returns>el identificador de la unidad en el documento instancia que coincide con la unidad de plantilla relacionada al identificador pasado como parámetro. null en caso de no poder encontrar una unidad equivalente o no poder crearla.</returns>
        public string ObtenerIdUnidadDocumentoInstanciaEquivalenteAIdUnidadPlantilla(string idUnidadPlantilla, string idConcepto) {
            string idUnidad = null;

            if (String.IsNullOrEmpty(idUnidadPlantilla))
            {
                return idUnidad;
            }

            if (this.documentoInstancia != null) {
                if (this.mapeoUnidadesPlantillaAUnidadesDocumentoInstancia.ContainsKey(idUnidadPlantilla)) {
                    idUnidad = this.mapeoUnidadesPlantillaAUnidadesDocumentoInstancia[idUnidadPlantilla];
                } else {
                    var unidad = this.BuscarUnidadPlantillaEnUnidadesDocumentoInstancia(idUnidadPlantilla, idConcepto);
                    if (unidad == null) {
                        if (this.unidadPorIdUnidadPlantilla.ContainsKey(idUnidadPlantilla)) {
                            var unidadACrear = this.unidadPorIdUnidadPlantilla[idUnidadPlantilla];
                            this.documentoInstancia.UnidadesPorId.Add(unidadACrear.Id,unidadACrear);
                            idUnidad = unidadACrear.Id;
                            this.mapeoUnidadesPlantillaAUnidadesDocumentoInstancia.Add(idUnidadPlantilla, idUnidad);
                        }
                    } else {
                        idUnidad = unidad.Id;
                        this.mapeoUnidadesPlantillaAUnidadesDocumentoInstancia.Add(idUnidadPlantilla, idUnidad);
                    }
                }
            }
            return idUnidad;
        }

        /// <summary>
        /// Obtiene el identificador del hecho que corresponde a un hecho del documento instancia que coincide en todas sus características con el hecho descrito por el identificador de hecho de la plantilla.
        /// Si no existiese un hecho equivalente, se creará en el documento instancia a partir de la definición de la plantilla.
        /// </summary>
        /// <param name="idHechoPlantilla">el identificador del hecho de la plantilla que será consultada.</param>
        /// <returns>el identificador del hecho en el documento instancia que coincide con el hecho de plantilla relacionada al identificador pasado como parámetro. null en caso de no poder encontrar un hecho equivalente o no poder crearlo.</returns>
        public string ObtenerIdHechoDocumentoInstanciaEquivalenteAIdHechoPlantilla(string idHechoPlantilla) {
            string idHecho = null;

            if (this.documentoInstancia != null) {
                if (this.mapeoHechosPlantillaAHechosDocumentoInstancia.ContainsKey(idHechoPlantilla)) {
                    idHecho = this.mapeoHechosPlantillaAHechosDocumentoInstancia[idHechoPlantilla];
                } else {
                    var hecho = this.BuscarHechoPlantillaEnHechosDocumentoInstancia(idHechoPlantilla);
                    if (hecho == null) {
                        if (this.hechoPorIdHechoPlantilla.ContainsKey(idHechoPlantilla)) {
                            var hechoACrear = this.hechoPorIdHechoPlantilla[idHechoPlantilla];
                            this.InyectaHechoADocumentoInstancia(hechoACrear);
                            idHecho = hechoACrear.Id;
                            this.mapeoHechosPlantillaAHechosDocumentoInstancia.Add(idHechoPlantilla,idHecho);
                        }
                    } else {
                        idHecho = hecho.Id;
                        this.mapeoHechosPlantillaAHechosDocumentoInstancia.Add(idHechoPlantilla,idHecho);
                    }
                }
            }
            return idHecho;
        }
        
        /// <summary>
        /// Agrega un hecho al documento instancia.
        /// </summary>
        /// <param name="hechoACrear">Es el hecho que se va a inyectar al documento de instancia.</param>
        public void InyectaHechoADocumentoInstancia(HechoDto hechoACrear) {

            this.documentoInstancia.VerificarDuplicidad(hechoACrear);
            this.documentoInstancia.HechosPorId.Add(hechoACrear.Id, hechoACrear);
            if (!this.documentoInstancia.HechosPorIdConcepto.ContainsKey(hechoACrear.IdConcepto)) {
                this.documentoInstancia.HechosPorIdConcepto.Add(hechoACrear.IdConcepto, new List<string>());
            }
            this.documentoInstancia.HechosPorIdConcepto[hechoACrear.IdConcepto].Add(hechoACrear.Id);
            if (!String.IsNullOrEmpty(hechoACrear.IdContexto)){
                if (!this.documentoInstancia.HechosPorIdContexto.ContainsKey(hechoACrear.IdContexto))
                {
                    this.documentoInstancia.HechosPorIdContexto.Add(hechoACrear.IdContexto, new List<string>());
                }
                if (!this.documentoInstancia.HechosPorIdContexto[hechoACrear.IdContexto].Contains(hechoACrear.Id))
                {
                    this.documentoInstancia.HechosPorIdContexto[hechoACrear.IdContexto].Add(hechoACrear.Id);
                }
            }
            if (!String.IsNullOrEmpty(hechoACrear.IdUnidad))
            {
                if (!this.documentoInstancia.HechosPorIdUnidad.ContainsKey(hechoACrear.IdUnidad))
                {
                    this.documentoInstancia.HechosPorIdUnidad.Add(hechoACrear.IdUnidad, new List<string>());
                }
                if (!this.documentoInstancia.HechosPorIdUnidad[hechoACrear.IdUnidad].Contains(hechoACrear.Id))
                {
                    this.documentoInstancia.HechosPorIdUnidad[hechoACrear.IdUnidad].Add(hechoACrear.Id);
                }
            }
            
            
            
        }

        /// <summary>
        /// Busca una unidad en el documento instancia la cual es equivalente a una unidad definida en una plantilla.
        /// </summary>
        /// <param name="idUnidadPlantilla">el identificador de la unidad de la plantilla a buscar.</param>
        /// <param name="idConcepto">el identificador del concepto que se va a relacionar con la unidad</param>
        /// <returns>el objeto con la unidad que corresponde a la unidad. null si no es posible buscar o encontrar la unidad en el documento instancia.</returns>
        public UnidadDto BuscarUnidadPlantillaEnUnidadesDocumentoInstancia(string idUnidadPlantilla, string idConcepto) {
            UnidadDto unidadDocumentoInstancia = null;
            var unidadABuscar = this.unidadPorIdUnidadPlantilla.ContainsKey(idUnidadPlantilla) ? this.unidadPorIdUnidadPlantilla[idUnidadPlantilla] : null;
            if (unidadABuscar == null) {
                unidadABuscar = this.CrearUnidadAPartirDeDefinicionPlantilla(idUnidadPlantilla);
                if (unidadABuscar != null) {
                    this.unidadPorIdUnidadPlantilla[idUnidadPlantilla] = unidadABuscar;
                }
            }

            if (unidadABuscar != null && this.documentoInstancia != null) {
                UnidadDto unidadCandidata = null;
                foreach (var unidad in this.documentoInstancia.UnidadesPorId.Values) {
                    if (unidad.EsEquivalente(unidadABuscar)) {
                        IList<String> idsHechosPorUnidad;
                        if (documentoInstancia.HechosPorIdUnidad.TryGetValue(unidad.Id, out idsHechosPorUnidad) && idsHechosPorUnidad.Count > 0) {

                            bool hechoEncontrado = false;
                            foreach (var idHecho in idsHechosPorUnidad) {

                                HechoDto hechoUnidad;
                                if (documentoInstancia.HechosPorId.TryGetValue(idHecho,out hechoUnidad) && hechoUnidad.IdConcepto.Equals(idConcepto)) {
                                    hechoEncontrado = true;
                                    break;
                                }
                            }
                            if (hechoEncontrado) {
                                unidadDocumentoInstancia = unidad;
                                break;
                            } else {
                                unidadCandidata = unidad;
                            }
                        } else {
                            unidadCandidata = unidad;
                        }
                    }
                }
                if (unidadDocumentoInstancia == null && unidadCandidata != null) {
                    unidadDocumentoInstancia = unidadCandidata;
                }
            }

            return unidadDocumentoInstancia;
        }

        /// <summary>
        /// Busca un contexto en el documento instancia el cual es equivalente a un contexto definido en una plantilla.
        /// </summary>
        /// <param name="idContextoPlantilla">el identificador de la unidad de la plantilla a buscar.</param>
        /// <param name="idConcepto">el identificador del concepto que se ligará al contexto</param>
        /// <returns>el objeto con la unidad que corresponde a la unidad. null si no es posible buscar o encontrar la unidad en el documento instancia.</returns>
        public ContextoDto BuscarContextoPlantillaEnContextosDocumentoInstancia(string idContextoPlantilla, string idConcepto) {
            ContextoDto contextoDocumentoInstancia = null;
            var contextoABuscar = this.contextoPorIdContextoPlantilla.ContainsKey(idContextoPlantilla) ? this.contextoPorIdContextoPlantilla[idContextoPlantilla] : null;
            if (contextoABuscar == null) {
                contextoABuscar = this.CrearContextoAPartirDeDefinicionPlantilla(idContextoPlantilla);
                if (contextoABuscar != null) {
                    this.contextoPorIdContextoPlantilla[idContextoPlantilla] = contextoABuscar;
                }
            }

            if (contextoABuscar != null && this.documentoInstancia != null) {
                ContextoDto contextoCandidato = null;
                string llaveFechas = null;
                if (contextoABuscar.Periodo.Tipo == Period.Instante) {
                    llaveFechas = DateUtil.ToFormatString(contextoABuscar.Periodo.FechaInstante.ToUniversalTime(), DateUtil.YMDateFormat);
                } else {
                    llaveFechas = DateUtil.ToFormatString(contextoABuscar.Periodo.FechaInicio.ToUniversalTime(), DateUtil.YMDateFormat) +
                        ConstantesGenerales.Underscore_String
                        + DateUtil.ToFormatString(contextoABuscar.Periodo.FechaFin.ToUniversalTime(), DateUtil.YMDateFormat);
                }
                if (this.documentoInstancia.ContextosPorFecha.ContainsKey(llaveFechas)) {
                    foreach (var idContextoDocumentoInstancia in this.documentoInstancia.ContextosPorFecha[llaveFechas]) {
                        if (this.documentoInstancia.ContextosPorId.ContainsKey(idContextoDocumentoInstancia)) {
                            if (this.documentoInstancia.ContextosPorId[idContextoDocumentoInstancia].EstructuralmenteIgual(contextoABuscar)) {
                                if (this.documentoInstancia.HechosPorIdContexto.ContainsKey(idContextoDocumentoInstancia) && this.documentoInstancia.HechosPorIdContexto[idContextoDocumentoInstancia].Count > 0) {
                                    bool hechoEncontrado = false;
                                    foreach (var idHecho in this.documentoInstancia.HechosPorIdContexto[idContextoDocumentoInstancia]) {
                                        if (this.documentoInstancia.HechosPorId[idHecho].IdConcepto.Equals(idConcepto)) {
                                            hechoEncontrado = true;
                                            break;
                                        }
                                    }
                                    if (hechoEncontrado) {
                                        contextoDocumentoInstancia = this.documentoInstancia.ContextosPorId[idContextoDocumentoInstancia];
                                        break;
                                    } else {
                                        contextoCandidato = this.documentoInstancia.ContextosPorId[idContextoDocumentoInstancia];
                                    }
                                } else {
                                    contextoCandidato = this.documentoInstancia.ContextosPorId[idContextoDocumentoInstancia];
                                }
                            }
                        }
                    }
                }
                if (contextoDocumentoInstancia == null && contextoCandidato != null) {
                    contextoDocumentoInstancia = contextoCandidato;
                }
            }

            return contextoDocumentoInstancia;
        }

        /// <summary>
        /// Busca un hecho en el documento instancia el cual es equivalente a un hecho definido en una plantilla.
        /// </summary>
        /// <param name="idHechoPlantilla">el identificador del hecho de la plantilla a buscar.</param>
        /// <returns>el objeto con la unidad que corresponde a la unidad. null si no es posible buscar o encontrar la unidad en el documento instancia.</returns>
        public HechoDto BuscarHechoPlantillaEnHechosDocumentoInstancia(string idHechoPlantilla) {
            HechoDto hechoDocumentoInstancia = null;
            var hechoABuscar = hechoPorIdHechoPlantilla.ContainsKey(idHechoPlantilla)?hechoPorIdHechoPlantilla[idHechoPlantilla]:null;
            if (hechoABuscar == null) {
                hechoABuscar = this.CrearHechoAPartirDeIdDefinicionPlantilla(idHechoPlantilla);
                if (hechoABuscar != null) {
                    this.hechoPorIdHechoPlantilla.Add(idHechoPlantilla, hechoABuscar);
                }
            }

            if (hechoABuscar != null && this.documentoInstancia != null && this.documentoInstancia.HechosPorIdConcepto.ContainsKey(hechoABuscar.IdConcepto) && this.documentoInstancia.HechosPorIdConcepto[hechoABuscar.IdConcepto].Count > 0) {
                foreach (var idHecho in this.documentoInstancia.HechosPorIdConcepto[hechoABuscar.IdConcepto]) {
                    var hecho = this.documentoInstancia.HechosPorId[idHecho];
                    var contexto = this.documentoInstancia.ContextosPorId[hecho.IdContexto];
                    var contextoPlantilla = this.documentoInstancia.ContextosPorId[hechoABuscar.IdContexto];
                    if (contexto != null && contextoPlantilla != null && contexto.EstructuralmenteIgual(contextoPlantilla)) {
                        if (hecho.EsNumerico) {
                            var unidad = this.documentoInstancia.UnidadesPorId[hecho.IdUnidad];
                            var unidadPlantilla = this.documentoInstancia.UnidadesPorId[hechoABuscar.IdUnidad];
                            if (unidad != null && unidadPlantilla != null && unidad.EsEquivalente(unidadPlantilla)) {
                                hechoDocumentoInstancia = hecho;
                                break;
                            }
                        } else {
                            hechoDocumentoInstancia = hecho;
                            break;
                        }
                    }

                }
            }

            return hechoDocumentoInstancia;
        }

        /// <summary>
        /// Crea un objeto Hecho a partir de una definición de plantilla
        /// </summary>
        /// <param name="idHechoPlantilla">el identificador del hecho de plantilla</param>
        /// <returns>un objeto Hecho el cual representa el hecho descrito por la plantilla</returns>
        public HechoDto CrearHechoAPartirDeIdDefinicionPlantilla(string idHechoPlantilla) {
            HechoDto hecho = null;
            if(this.definicionElementosPlantilla.HechosPlantillaPorId.ContainsKey(idHechoPlantilla)) {
                hecho = this.CrearHechoAPartirDeDefinicionPlantilla(this.definicionElementosPlantilla.HechosPlantillaPorId[idHechoPlantilla]);
            }
            return hecho;
        }

        /// <summary>
        /// Crea un objeto Hecho a partir de una definición de plantilla
        /// </summary>
        /// <param name="hechoPlantilla">el hecho de plantilla</param>
        /// <returns>un objeto Hecho el cual representa el hecho descrito por la plantilla</returns>
        public HechoDto CrearHechoAPartirDeDefinicionPlantilla(HechoPlantillaDto hechoPlantilla) {
            HechoDto hecho = null;
            bool definicionCorrecta = true;

            if (hechoPlantilla != null) {
                var hechoTemp = new HechoDto();
                hechoTemp.Id = "F"+ Guid.NewGuid().ToString();
                hechoTemp.EsValorNil = false;

                if (hechoPlantilla.IdConcepto != null) {
                    var concepto = this.documentoInstancia.Taxonomia.ConceptosPorId[hechoPlantilla.IdConcepto];
                    if (concepto != null) {
                        hechoTemp.IdConcepto = concepto.Id;
                        hechoTemp.Tipo = concepto.Tipo;
                        hechoTemp.TipoDato = concepto.TipoDato;
                        hechoTemp.TipoDatoXbrl = concepto.TipoDatoXbrl;
                        if (concepto.Tipo == Concept.Item) {
                            hechoTemp.EsTupla = false;
                            hechoTemp.IdContexto = this.ObtenerIdContextoDocumentoInstanciaEquivalenteAIdContextoPlantilla(hechoPlantilla.IdContextoPlantilla, hechoPlantilla.IdConcepto);
                            if (hechoTemp.IdContexto == null) {
                                definicionCorrecta = false;
                            } else if (concepto.EsTipoDatoNumerico) {
                                hechoTemp.EsNumerico = true;
                                hechoTemp.NoEsNumerico = false;
                                hechoTemp.IdUnidad = this.ObtenerIdUnidadDocumentoInstanciaEquivalenteAIdUnidadPlantilla(hechoPlantilla.IdUnidadPlantilla, hechoPlantilla.IdConcepto);
                                if (hechoTemp.IdUnidad == null) {
                                    definicionCorrecta = false;
                                } else if (concepto.EsTipoDatoFraccion) {
                                    hechoTemp.EsFraccion = true;
                                    var valorNumerador = this.ReemplazarVariablesPlantilla(hechoPlantilla.ValorNumerador);
                                    var valorDenominador = this.ReemplazarVariablesPlantilla(hechoPlantilla.ValorDenominador);
                                    decimal valor = 0;
                                    if (valorNumerador != null && decimal.TryParse(valorNumerador, out valor)) {
                                        hechoTemp.ValorNumerador = new decimal(Double.Parse(valorNumerador, NumberStyles.Any, CultureInfo.InvariantCulture));
                                    }
                                    if (valorDenominador != null && decimal.TryParse(valorDenominador, out valor))
                                    {
                                        hechoTemp.ValorDenominador = new decimal(Double.Parse(valorDenominador, NumberStyles.Any, CultureInfo.InvariantCulture)); ;
                                    }
                                } else {
                                    hechoTemp.Valor = this.ReemplazarVariablesPlantilla(hechoPlantilla.Valor);
                                }
                                if (hechoPlantilla.Precision != null && hechoPlantilla.Decimales != null) {
                                    definicionCorrecta = false;
                                } else {
                                    if (hechoPlantilla.Precision == null && hechoPlantilla.Decimales == null) {
                                        definicionCorrecta = false;
                                    } else {
                                        if (hechoPlantilla.Precision != null) {
                                            if (hechoPlantilla.Precision.Equals(ConstantesGenerales.VALOR_ATRIBURO_INF)) {
                                                hechoTemp.EsPrecisionInfinita = true;
                                            } else {
                                                var valorPrecision = this.ReemplazarVariablesPlantilla(hechoPlantilla.Precision);
                                                int valor = 0;
                                                if (valorPrecision != null && int.TryParse(valorPrecision, out valor))
                                                {
                                                    hechoTemp.Precision = valorPrecision;
                                                } else {
                                                    definicionCorrecta = false;
                                                }
                                            }
                                        }
                                        if (hechoPlantilla.Decimales != null) {
                                            if (hechoPlantilla.Decimales.Equals(ConstantesGenerales.VALOR_ATRIBURO_INF)) {
                                                hechoTemp.EsDecimalesInfinitos = true;
                                            } else {
                                                var valorDecimales = this.ReemplazarVariablesPlantilla(hechoPlantilla.Decimales);
                                                int valor = 0;
                                                if (valorDecimales != null && int.TryParse(valorDecimales, out valor)) {
                                                    hechoTemp.Decimales = valorDecimales;
                                                } else {
                                                    definicionCorrecta = false;
                                                }
                                            }
                                        }
                                    }
                                }
                            } else {
                                hechoTemp.EsNumerico = false;
                                hechoTemp.NoEsNumerico = true;
                                hechoTemp.EsFraccion = false;
                                hechoTemp.EsPrecisionInfinita = false;
                                hechoTemp.EsDecimalesInfinitos = false;
                                hechoTemp.Valor = this.ReemplazarVariablesPlantilla(hechoPlantilla.Valor);
                            }
                        } else {
                            hechoTemp.EsTupla = true;
                            hechoTemp.EsNumerico = false;
                            hechoTemp.NoEsNumerico = true;
                            hechoTemp.EsFraccion = false;
                            hechoTemp.EsPrecisionInfinita = false;
                            hechoTemp.EsDecimalesInfinitos = false;

                            hechoTemp.Hechos = new List<String>();
                            foreach (var hechoPlantillaHijo in hechoPlantilla.Hechos) {
                                var hechoHijo = this.CrearHechoAPartirDeDefinicionPlantilla(hechoPlantillaHijo);
                                if (hechoHijo != null) {
                                    hechoHijo.TuplaPadre = hechoTemp;
                                    hechoTemp.Hechos.Add(hechoHijo.Id);
                                } else {
                                    definicionCorrecta = false;
                                    break;
                                }
                            }
                        }
                    } else {
                        definicionCorrecta = false;
                    }
                }
                if (definicionCorrecta) {
                    hecho = hechoTemp;
                }
            }
            return hecho;
        }

        /// <summary>
        /// Crea un objeto Contexto a partir de una definición de plantilla
        /// </summary>
        /// <param name="idContextoPlantilla">el identificador del contexto de plantilla</param>
        /// <returns>un objeto Contexto el cual representa el contexto descrita por la plantilla.</returns>
        public ContextoDto CrearContextoAPartirDeDefinicionPlantilla(string idContextoPlantilla) {
            ContextoDto contexto = null;
            bool definicionCorrecta = true;

            
            if (this.definicionElementosPlantilla.ContextosPlantillaPorId.ContainsKey(idContextoPlantilla)) {
                var contextoPlantilla = this.definicionElementosPlantilla.ContextosPlantillaPorId[idContextoPlantilla];
                var contextoTemp = new ContextoDto();
                contextoTemp.Id = "C" + Guid.NewGuid().ToString();
                if (contextoPlantilla.Periodo != null) {
                    if (contextoPlantilla.Periodo.Tipo == Period.Instante) {
                        var fechaInstanteString = this.ReemplazarVariablesPlantilla(contextoPlantilla.Periodo.FechaInstante);
                        DateTime fechaInstante = new DateTime();

                        if (fechaInstanteString != null) {
                            if (XmlUtil.ParsearUnionDateTime(fechaInstanteString, out fechaInstante))
                            {
                                contextoTemp.Periodo = new PeriodoDto();
                                contextoTemp.Periodo.Tipo = Period.Instante;
                                contextoTemp.Periodo.FechaInstante = fechaInstante;
                            } else {
                                definicionCorrecta = false;
                            }
                        } else {
                            definicionCorrecta = false;
                        }
                    } else if (contextoPlantilla.Periodo.Tipo == Period.Duracion) {
                        var fechaInicioString = this.ReemplazarVariablesPlantilla(contextoPlantilla.Periodo.FechaInicio);
                        DateTime fechaInicio = new DateTime();
                        var fechaFinString = this.ReemplazarVariablesPlantilla(contextoPlantilla.Periodo.FechaFin);
                        DateTime fechaFin = new DateTime();

                        if (fechaInicioString != null) {
                            
                            if (!XmlUtil.ParsearUnionDateTime(fechaInicioString,out fechaInicio)) {
                                definicionCorrecta = false;
                            }
                        }

                        if (fechaFinString != null) {
                            if (!XmlUtil.ParsearUnionDateTime(fechaFinString, out fechaFin))
                            {
                                definicionCorrecta = false;
                            }
                        }

                        if (definicionCorrecta) {
                            contextoTemp.Periodo = new PeriodoDto();
                            contextoTemp.Periodo.Tipo = contextoPlantilla.Periodo.Tipo;
                            contextoTemp.Periodo.FechaInicio= fechaInicio;
                            contextoTemp.Periodo.FechaFin= fechaFin;
                        } else {
                            definicionCorrecta = false;
                        }
                    } else {
                        definicionCorrecta = false;
                    }
                } else {
                    definicionCorrecta = false;
                }

                if (contextoPlantilla.Entidad != null) {

                    var idEntidad = this.ReemplazarVariablesPlantilla(contextoPlantilla.Entidad.Id);
                    var esquemaId = this.ReemplazarVariablesPlantilla(contextoPlantilla.Entidad.EsquemaId);
                    var contieneInformacionDimensional = contextoPlantilla.Entidad.ContieneInformacionDimensional;

                    if (contieneInformacionDimensional) {
                        var segmento = this.ReemplazarVariablesPlantilla(contextoPlantilla.Entidad.Segmento);
                        var valoresDimension = this.CrearValoresDimensionAPartirDeDefinicionPlantilla(contextoPlantilla.Entidad.ValoresDimension);

                        if (idEntidad != null && esquemaId != null && segmento != null && valoresDimension != null) {
                            contextoTemp.Entidad = new EntidadDto();
                            contextoTemp.Entidad.EsquemaId = esquemaId;
                            contextoTemp.Entidad.Id= idEntidad;
                            contextoTemp.Entidad.ContieneInformacionDimensional= contieneInformacionDimensional;
                            contextoTemp.Entidad.Segmento= segmento;
                            contextoTemp.Entidad.ValoresDimension= valoresDimension;
                        } else {
                            definicionCorrecta = false;
                        }
                    } else {
                        if (idEntidad != null && esquemaId != null) {
                            contextoTemp.Entidad = new EntidadDto();
                            contextoTemp.Entidad.EsquemaId = esquemaId;
                            contextoTemp.Entidad.Id = idEntidad;
                            contextoTemp.Entidad.ContieneInformacionDimensional = contieneInformacionDimensional;
                        } else {
                            definicionCorrecta = false;
                        }
                    }
                } else {
                    definicionCorrecta = false;
                }
                contextoTemp.ContieneInformacionDimensional = contextoPlantilla.ContieneInformacionDimensional;
                if (contextoPlantilla.ContieneInformacionDimensional) {
                    var escenario = this.ReemplazarVariablesPlantilla(contextoPlantilla.Escenario);
                    var valoresDimension = this.CrearValoresDimensionAPartirDeDefinicionPlantilla(contextoPlantilla.ValoresDimension);

                    if (escenario != null && valoresDimension != null) {
                        contextoTemp.Escenario = escenario;
                        contextoTemp.ValoresDimension = valoresDimension;
                    } else {
                        definicionCorrecta = false;
                    }
                }
                if (definicionCorrecta) {
                    contexto = contextoTemp;
                }
            }
            return contexto;
        }

        /// <summary>
        /// Crea un arreglo de información dimensional en base a la información dimensional provista para un contexto de una plantilla.
        /// </summary>
        /// <param name="valoresDimensionPlantilla">la información dimensional provista en la plantilla.</param>
        /// <returns>unf arreglo de información dimensional creado a partir de lo que se definió en la plantilla de captura. null si ocurrió un error al generar la información.</returns>
        public IList<DimensionInfoDto> CrearValoresDimensionAPartirDeDefinicionPlantilla(IList<DimensionInfoDto> valoresDimensionPlantilla) {
            IList<DimensionInfoDto> valoresDimension = null;
            bool definicionCorrecta = true;
            if (valoresDimensionPlantilla != null && valoresDimensionPlantilla.Count > 0) {
                IList<DimensionInfoDto> valoresDimensionTemp = new List<DimensionInfoDto>();
                foreach (var dimensionInfo in valoresDimensionPlantilla) {
                    if (dimensionInfo.Explicita) {
                        var idDimension = this.ReemplazarVariablesPlantilla(dimensionInfo.IdDimension);
                        var qnameDimension = this.ReemplazarVariablesPlantilla(dimensionInfo.QNameDimension);
                        var idItemMiembro = this.ReemplazarVariablesPlantilla(dimensionInfo.IdItemMiembro);
                        var qnameItemMiembro = this.ReemplazarVariablesPlantilla(dimensionInfo.QNameItemMiembro);
                        if (idDimension != null && qnameDimension != null && idItemMiembro != null && qnameItemMiembro != null) {
                            var dimInfo = new DimensionInfoDto();
                            dimInfo.Explicita = dimensionInfo.Explicita;
                            dimInfo.IdDimension = idDimension;
                            dimInfo.IdItemMiembro = idItemMiembro;
                            dimInfo.QNameDimension = qnameDimension;
                            dimInfo.QNameItemMiembro = qnameItemMiembro;
                            valoresDimensionTemp.Add(dimInfo);
                        } else {
                            definicionCorrecta = false;
                        }
                    } else {
                        var qnameDimension = this.ReemplazarVariablesPlantilla(dimensionInfo.QNameDimension);
                        var elementoMiembroTipificado = this.ReemplazarVariablesPlantilla(dimensionInfo.ElementoMiembroTipificado);
                        if (qnameDimension != null && elementoMiembroTipificado != null) {
                            var dimInfo = new DimensionInfoDto();
                            dimInfo.Explicita = dimensionInfo.Explicita;
                            dimInfo.QNameDimension = qnameDimension;
                            dimInfo.ElementoMiembroTipificado = elementoMiembroTipificado;
                            valoresDimensionTemp.Add(dimInfo);
                        } else {
                            definicionCorrecta = false;
                        }
                    }
                }
                if (definicionCorrecta) {
                    valoresDimension = valoresDimensionTemp;
                }
            }
            return valoresDimension;
        }

        /// <summary>
        /// Crea un objeto Unidad a partir de una definición de plantilla
        /// </summary>
        /// <param name="idUnidadPlantilla">el identificador de la unidad de plantilla</param>
        /// <returns>un objeto Unidad el cual representa la unidad descrita por la plantilla.</returns>
        public UnidadDto CrearUnidadAPartirDeDefinicionPlantilla(string idUnidadPlantilla) {
            UnidadDto unidad = null;
            bool definicionCorrecta = true;
            if (this.definicionElementosPlantilla.UnidadesPlantillaPorId.ContainsKey(idUnidadPlantilla)) {
                var unidadPlantilla = this.definicionElementosPlantilla.UnidadesPlantillaPorId[idUnidadPlantilla];
                var unidadTemp = new UnidadDto();
                unidadTemp.Id = "U"+Guid.NewGuid().ToString();
                unidadTemp.Tipo = unidadPlantilla.Tipo;

                if (unidadPlantilla.Tipo == Unit.Medida) {
                    var medidasTemp = this.CrearMedidasAPartirMedidasPlantilla(unidadPlantilla.Medidas);
                    if (medidasTemp != null) {
                        unidadTemp.Medidas = medidasTemp;
                    } else {
                        definicionCorrecta = false;
                    }
                } else {
                    var medidasTemp = this.CrearMedidasAPartirMedidasPlantilla(unidadPlantilla.MedidasNumerador);
                    if (medidasTemp != null) {
                        unidadTemp.MedidasNumerador = medidasTemp;
                        medidasTemp = this.CrearMedidasAPartirMedidasPlantilla(unidadPlantilla.MedidasDenominador);
                        if (medidasTemp != null) {
                            unidadTemp.MedidasDenominador = medidasTemp;
                        } else {
                            definicionCorrecta = false;
                        }
                    } else {
                        definicionCorrecta = false;
                    }
                }
                if (definicionCorrecta) {
                    unidad = unidadTemp;
                }
            }
            return unidad;
        }

        /// <summary>
        /// Crea un arreglo de medidas a partir de su definición en una unidad de la plantilla del documento instancia.
        /// </summary>
        /// <param name="medidas">las medidas que se definieron en la unidad de la plantilla.</param>
        /// <returns>un arreglo con las medidas creadas a partir de la definición. null en caso de que haya un problema al crear las medidas en base a la definición.</returns>
        public IList<MedidaDto> CrearMedidasAPartirMedidasPlantilla(IList<MedidaPlantillaDto> medidas) {
            IList<MedidaDto> medidasGeneradas = null;
            bool definicionCorrecta = true;
            if (medidas != null && medidas.Count > 0) {
                IList<MedidaDto> medidasTemp = new List<MedidaDto>();
                foreach (var medidaPlantilla in medidas) {
                    var espacioNombres = this.ReemplazarVariablesPlantilla(medidaPlantilla.EspacioNombres);
                    var nombre = this.ReemplazarVariablesPlantilla(medidaPlantilla.Nombre);
                    if (espacioNombres != null && nombre != null) {
                        var medida = new MedidaDto();
                        medida.EspacioNombres = espacioNombres;
                        medida.Nombre = nombre;
                        medidasTemp.Add(medida);
                    } else {
                        definicionCorrecta = false;
                        break;
                    }
                }
                if (definicionCorrecta) {
                    medidasGeneradas = medidasTemp;
                }
            }
            return medidasGeneradas;
        }

        /// <summary>
        /// Analiza la expresión pasada como parámetros y si comienza con el caracter '#' reemplaza el contenido de la expresión por la variable del documento instancia que le corresponda.
        /// Si la expresión no comienza con el caracter '#' regresa la misma cadena sin modificaciones. Si la expresión comienza con el caracter '#' pero no existe una variable de documento
        /// instancia que corresponda con la expresión, se regresará null.
        /// </summary>
        /// <param name="expresion">la expresión a evaluar.</param>
        /// <returns>el resultado de la evaluación según lo descrito anteriormente.</returns>
        public string ReemplazarVariablesPlantilla(string expresion) {
            string resultado = expresion;
            if (expresion != null && expresion.StartsWith(ConstantesGenerales.PrefijoVariablesDocumentoInstancia))
            {
                var idVariable = expresion.Substring(ConstantesGenerales.PrefijoVariablesDocumentoInstancia.Length);
                var valorVariable = this.ObtenerVariablePorId(idVariable);
                if (valorVariable != null) {
                    resultado = valorVariable;
                }
            }
            return resultado;
        }

        /// <summary>
        /// Determina los parámetros de configuración en base a los datos del documento de instancia
        /// </summary>
        /// <param name="instancia">Instancia actual</param>
        /// <returns>True si se pueden determinar los parámetros de configuración, false si no es posible</returns>
        public abstract bool DeterminarParametrosConfiguracion(DocumentoInstanciaXbrlDto instancia);

        public abstract string ObtenerIdSpringDefinicionElementosPlantillaDeRol(string rolURI);

        public abstract bool GenerarVariablesDocumentoInstancia();

        public abstract IDictionary<string, string> DeterminaParametrosConfiguracionDocumento(DocumentoInstanciaXbrlDto documentoInstanciaXbrl);

        public IList<string> ObtenerAliasDeRol(string rolUri)
        {
            if (AliasRoles != null && AliasRoles.ContainsKey(rolUri))
            {
                return AliasRoles[rolUri];
            }
            return null;
        }

        public string ObtenerRolDeAlias(string alias)
        {
            if (AliasRoles != null)
            {
                return (from keyVal in AliasRoles where keyVal.Value.Contains(alias) select keyVal.Key).FirstOrDefault();
            }
            return null;
        }

        public string ObtenerIdHechoPlantillaPorIdDocumentoNota(string idDocumentoNota) {
            
            string idHechoPlantilla = null;

            if (idDocumentoNota != null)
            {
                if (MapaHechoPlantillaEtiquetaDocumento.ContainsKey(idDocumentoNota)) {
                    idHechoPlantilla = MapaHechoPlantillaEtiquetaDocumento[idDocumentoNota];
                }
            }
            return idHechoPlantilla;
        }

        public string ObtenerIndiceSeccionWordPorRol(string rol)
        {
            if (IndiceRolesSeccionWord != null && IndiceRolesSeccionWord.ContainsKey(rol))
            {
                return IndiceRolesSeccionWord[rol];
            }
            return null;
        }


        public string ObtenerRutaPlantillaLlenado()
        {
            return RutaPlantilla;
        }
        
        public virtual string ObtenerTituloEspecificoDocumentoXbrl(DocumentoInstanciaXbrlDto instancia) {
            if (!String.IsNullOrEmpty(instancia.Titulo)){
                var tituloDocumentoProcesado = RemueveCaracteresEspecialesTituloDocumento(instancia.Titulo);
                return ObtenerSubStringTituloDocumento(tituloDocumentoProcesado);

            }
            return null;
        }

        private string RemueveCaracteresEspecialesTituloDocumento(string tituloDocumento)
        {
            var tituloNormalizado = new String(tituloDocumento.Normalize(NormalizationForm.FormD)
            .Where(c => CharUnicodeInfo.GetUnicodeCategory(c) != UnicodeCategory.NonSpacingMark)
            .ToArray());
            var tituloSinEspacios = tituloNormalizado.Replace(" ", "_");

           return Regex.Replace(tituloSinEspacios, @"[^0-9A-Za-z_.-]", "", RegexOptions.None);
        }

        private string ObtenerSubStringTituloDocumento(string tituloDocumento)
        {
            var maximoCaracteresPermitidos = 60;
            if (tituloDocumento.Length > maximoCaracteresPermitidos) {
                return tituloDocumento.Substring(0, maximoCaracteresPermitidos - 1);
            }

            return tituloDocumento;
        }

        public bool ConceptoSeComportaComoTextBlockItem(string idConcepto) {
            if (MapeoConceptoTextBlock != null && MapeoConceptoTextBlock.ContainsKey(idConcepto))
                return true;
            return false;
        }
        /// <summary>
        /// Determina si el contexto origen es mayor al contexto a comparar.
        /// </summary>
        /// <param name="contextoOrigen">Contexto del que se parte la comparación.</param>
        /// <param name="contextoComparar">Contexto contra le que se compara.</param>
        /// <returns>Si el contexto origen es mayor que el contexto a comparar.</returns>
        private bool EsContextoMaryor(ContextoDto contextoOrigen, ContextoDto contextoComparar) 
        {

            var esMayor= false;
            var fechaContextoOrigen = DateTime.Now;
            var fechaContextoComparar = DateTime.Now;

            if (contextoComparar.Periodo.Tipo == PeriodoDto.ParaSiempre) {

                esMayor = true;
            }
            if (!esMayor) {
                if (contextoOrigen.Periodo.Tipo == PeriodoDto.Duracion) 
                {

                    fechaContextoOrigen = contextoOrigen.Periodo.FechaFin;
                } 
                else if (contextoOrigen.Periodo.Tipo == PeriodoDto.Instante) 
                {

                    fechaContextoOrigen = contextoOrigen.Periodo.FechaFin;
                }

                if (contextoComparar.Periodo.Tipo == PeriodoDto.Duracion) 
                {

                    fechaContextoComparar = contextoOrigen.Periodo.FechaFin;
                } 
                else if (contextoComparar.Periodo.Tipo == PeriodoDto.Instante) 
                {

                    fechaContextoComparar = contextoOrigen.Periodo.FechaFin;
                }
                if (fechaContextoComparar.CompareTo(fechaContextoOrigen) > 0) 
                {
                    esMayor = true;
                }
            }

            return esMayor;
        }

        /// <summary>
        /// Obtiene el hecho reportado en la fecha de mayor tamaño.
        /// </summary>
        /// <param name="listaIdsHechos"> Lista de hechos que serán evaluados.</param>
        protected HechoDto ObtenHechoMayorFechaReporte(IList<string> listaIdsHechos, DocumentoInstanciaXbrlDto documentoInstanciaXbrl)
        {

            HechoDto hechoMayor = null;
            for (var index = 0; index < listaIdsHechos.Count; index++) {

                HechoDto  itemHecho;
                if (!documentoInstanciaXbrl.HechosPorId.TryGetValue(listaIdsHechos[index], out itemHecho)) {
                    continue;
                }
                if (hechoMayor != null) {

                    ContextoDto contextoOrigen = null;
                    ContextoDto contextoComparar = null;
                    if(documentoInstanciaXbrl.ContextosPorId.TryGetValue(hechoMayor.IdContexto, out contextoOrigen) && 
                        documentoInstanciaXbrl.ContextosPorId.TryGetValue(itemHecho.IdContexto, out contextoComparar) &&
                        EsContextoMaryor(contextoOrigen, contextoComparar))
                    {
                        hechoMayor = itemHecho;
                    }
                } 
                else 
                {

                    hechoMayor = itemHecho;
                }
            }
            return hechoMayor;
        }
        /// <summary>
        /// Determina la fecha minima reportada en el documento de instancia.
        /// </summary>
        /// <param name="documentoInstancia">Documento de instancia a evaluar</param>
        /// <returns>Fecha mínima del reporte o null si no es posible determinarla.</returns>
        protected Nullable<DateTime> ObtenFechaMinimaReporte(DocumentoInstanciaXbrlDto documentoInstancia)
        {
            Nullable<DateTime> fechaMinima = null;
            foreach(var idContexto in documentoInstancia.ContextosPorId.Keys)
            {
                var ctx = documentoInstancia.ContextosPorId[idContexto];
                if (ctx.Periodo.Tipo == PeriodoDto.Instante)
                {
                    if (fechaMinima == null || ctx.Periodo.FechaInstante < fechaMinima)
                    {
                        fechaMinima = ctx.Periodo.FechaInstante;
                    }
                }
                else if (ctx.Periodo.Tipo == PeriodoDto.Duracion)
                {
                    if (fechaMinima == null || ctx.Periodo.FechaFin < fechaMinima)
                    {
                        fechaMinima = ctx.Periodo.FechaFin;
                    }
                }
            }

            return fechaMinima;
        }
        /// <summary>
        /// Obtiene la fecha máxima en la que se reporta un hecho en el documento.
        /// </summary>
        /// <param name="documentoInstancia">Documento a evaluar.</param>
        /// <returns>Fecha máxima encontrada.</returns>
        public DateTime ObtenMaximaFechaReporte(DocumentoInstanciaXbrlDto documentoInstancia)
        {
            var fechaMaxima = DateTime.MinValue.ToUniversalTime();
            var sFechaMaxima = DateUtil.ToFormatString(fechaMaxima, DateUtil.YMDateFormat);
            var regularExpresionDuracion = new Regex("\\d{4}\\-\\d{2}\\-\\d{2}_\\d{4}\\-\\d{2}\\-\\d{2}", RegexOptions.Compiled | RegexOptions.Multiline);
            foreach (var llaveFecha in documentoInstancia.ContextosPorFecha.Keys)
            {
                var itemFeha = llaveFecha;
                var match = regularExpresionDuracion.Match(llaveFecha);
                if (match.Success)
                {
                    var split = itemFeha.Split('_');
                    itemFeha = split[1];
                }
                if (sFechaMaxima.CompareTo(itemFeha) < 0)
                {
                    sFechaMaxima = itemFeha;
                }
            }
            DateUtil.ParseDate(sFechaMaxima, DateUtil.YMDateFormat, out fechaMaxima);

            return fechaMaxima;
        }
        /// <summary>
        /// Implementació default
        /// </summary>
        /// <param name="workbook"></param>
        /// <param name="resumenProceso"></param>
        /// <returns></returns>
        public virtual bool ValidarPlantillaExcelImportacion(IWorkbook workbook, 
            Common.Dtos.ResumenProcesoImportacionExcelDto resumenProceso)
        {
            return true;
        }
        /// <summary>
        /// Implementación default sin versión
        /// </summary>
        /// <returns></returns>
        public virtual string ObtenerNumeroVersionPlantilla()
        {
            return VersionPlantilla;
        }
    }
}
