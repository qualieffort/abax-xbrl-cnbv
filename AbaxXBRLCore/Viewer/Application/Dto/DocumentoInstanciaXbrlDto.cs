using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using AbaxXBRL.Taxonomia;
using AbaxXBRLCore.Common.Util;

namespace AbaxXBRLCore.Viewer.Application.Dto
{
    /// <summary>
    /// Implementación de un Data Transfer Object para representar un documento instancia en el editor/visor de documentos XBRL.
    /// <author>José Antonio Huizar Moreno</author>
    /// <version>1.0</version>
    /// </summary>
    public class DocumentoInstanciaXbrlDto
    {


        /// <summary>
        /// Constructor por default
        /// </summary>
        public DocumentoInstanciaXbrlDto()
        {
            ContextosPorId = new Dictionary<string, ContextoDto>();
            UnidadesPorId = new Dictionary<string, UnidadDto>();
            HechosPorIdConcepto = new Dictionary<string, IList<string>>();
            HechosPorId = new Dictionary<string, HechoDto>();
            DtsDocumentoInstancia = new List<DtsDocumentoInstanciaDto>();
            ContextosPorFecha = new Dictionary<string, IList<string>>();
            EntidadesPorId = new Dictionary<string, EntidadDto>();
            Errores = new List<ErrorCargaTaxonomiaDto>();
            HechosPorIdContexto = new Dictionary<string, IList<string>>();
            HechosPorIdUnidad = new Dictionary<string, IList<string>>();
            estructurasDocumentoInstanciaPorRol = new Dictionary<string, IList<AbaxXBRLCore.Viewer.Application.Dto.EditorGenerico.ElementoDocumentoDto>>();

        }

        /// <summary>
        /// Busca uno o mas contextos en el documento de instancia basados en sus carecteríscitas enviadas como parámetros.
        /// </summary>
        /// <param name="qNameEntidad">Qname completo de la entidad buscada, este parámetro es opcional, si es null entonces
        /// la entidad no participa en el filtrado</param>
        /// <param name="tipoPeriodo">Tipo de periodo buscado, duración, instante o parasiempre</param>
        /// <param name="fechaInicio">Fecha de inicio del periodo buscado</param>
        /// <param name="fechaFin">Fecha de fin del periodo buscado, fecha instante para el caso del periodo Instante</param>
        /// <param name="valoresDimension">Valores dimensionales que debe de contener</param>
        /// <returns>Lista de periodos encontrados</returns>
        public IList<ContextoDto> BuscarContexto(string qNameEntidad, int tipoPeriodo, DateTime fechaInicio,
            DateTime fechaFin, IList<DimensionInfoDto> valoresDimension)
        {
            var contextosEncontrados = new List<ContextoDto>();
            foreach (var contextoDto in ContextosPorId.Values.Where(x => x.Periodo.Tipo == tipoPeriodo && x.SonDimensionesEquivalentes(valoresDimension) &&
                (qNameEntidad == null || x.Entidad.IdEntidad.Equals(qNameEntidad))))
            {
                if (Period.Instante == contextoDto.Periodo.Tipo)
                {
                    if (contextoDto.Periodo.FechaInstante.Equals(fechaFin))
                    {
                        contextosEncontrados.Add(contextoDto);
                    }
                }
                else if (Period.Duracion == contextoDto.Periodo.Tipo)
                {
                    if (contextoDto.Periodo.FechaInicio.Equals(fechaInicio) && contextoDto.Periodo.FechaFin.Equals(fechaFin))
                    {
                        contextosEncontrados.Add(contextoDto);
                    }
                }
                else
                {
                    contextosEncontrados.Add(contextoDto);
                }
            }
            return contextosEncontrados;
        }
        /// <summary>
        /// Busca una o mas unidades que cumplan con los criterios de tipo de unidad (medida o divisoria) 
        /// y que coincidan sus medidas de numerador o denominador
        /// </summary>
        /// <param name="tipoUnidad"></param>
        /// <param name="numerador"></param>
        /// <param name="denominador"></param>
        /// <returns></returns>
        public IList<UnidadDto> BuscarUnidades(int tipoUnidad, IList<MedidaDto> numerador, IList<MedidaDto> denominador)
        {

            var unidadMuestra = new UnidadDto()
                                {
                                    Tipo = tipoUnidad,
                                    Medidas = tipoUnidad == Unit.Medida ? numerador : null,
                                    MedidasNumerador = tipoUnidad == Unit.Divisoria ? numerador : null,
                                    MedidasDenominador = tipoUnidad == Unit.Divisoria ? denominador : null

                                };

            var unidadesResultado = new List<UnidadDto>();

            foreach (var unit in UnidadesPorId.Values.Where(x => x.EsEquivalente(unidadMuestra)))
            {
                unidadesResultado.Add(unit);
            }
            return unidadesResultado;
        }

        /// <summary>
        /// Crea un nuevo hecho para el concepto enviado, asociándolo al contexto y unidad enviados como parámetro, el 
        /// contexto y la unidad son opcionales, también asigna el ID de hecho enviado como parámetro.
        /// Agrega el hecho a los distintos índices del documento
        /// </summary>
        /// <param name="idConcepto">Identificador del concepto para el hecho a crear</param>
        /// <param name="idUnidad">Identificador opcional de la unidad del concepto, obligatorio para datos numéricos</param>
        /// <param name="idContexto">Contexto del hecho, no necesario para tuplas</param>
        /// <param name="idHecho">Identificador opcional del hecho</param>
        /// <returns>El hecho creado</returns>
        public HechoDto CrearHecho(string idConcepto, string idUnidad, string idContexto, string idHecho)
        {
            HechoDto hechoNuevo = null;

            if (String.IsNullOrEmpty(idConcepto) || Taxonomia == null || !Taxonomia.ConceptosPorId.ContainsKey(idConcepto))
                return null;

            var concepto = Taxonomia.ConceptosPorId[idConcepto];
            var EsAbstracto = concepto.EsAbstracto != null ? concepto.EsAbstracto.Value : false;

            if (!EsAbstracto)
            {
                if ((concepto.Tipo == Concept.Item && !ContextosPorId.ContainsKey(idContexto)) ||
                    (concepto.EsTipoDatoNumerico && !UnidadesPorId.ContainsKey(idUnidad)))
                {
                    return null;
                }
                if (idHecho!=null && HechosPorId.ContainsKey(idHecho))
                {
                    return null;
                }
                hechoNuevo = new HechoDto()
                {
                    IdConcepto = idConcepto,
                    NombreConcepto = concepto.Nombre,
                    EspacioNombres = concepto.EspacioNombres,
                    Tipo = concepto.Tipo,
                    Id = idHecho,
                    CambioValorComparador = false,
                };

                if (concepto.Tipo == Concept.Item)
                {
                    hechoNuevo.EsTupla = false;
                    hechoNuevo.TipoDato = concepto.TipoDato;
                    hechoNuevo.TipoDatoXbrl = concepto.TipoDatoXbrl;
                    if (concepto.EsTipoDatoNumerico)
                    {
                        hechoNuevo.EsNumerico = true;
                        hechoNuevo.IdContexto = idContexto;
                        hechoNuevo.Valor = null;
                        hechoNuevo.IdUnidad = idUnidad;
                        hechoNuevo.Decimales = "0";
                    }
                    else
                    {
                        hechoNuevo.NoEsNumerico = true;
                        hechoNuevo.IdContexto = idContexto;
                        hechoNuevo.Valor = null;
                    }
                }
                else if (concepto.Tipo == Concept.Tuple)
                {
                    hechoNuevo.EsTupla = true;
                    hechoNuevo.NoEsNumerico = true;
                }
            }
            return hechoNuevo;
        }

        /// <summary>
        /// Evalúa si la lista de puntos de entrada de este documento es equivalente a 
        /// la enviada como parámetro
        /// </summary>
        /// <param name="dtsComparar">Dts a comparar</param>
        public Boolean EsMismoDts(IList<DtsDocumentoInstanciaDto> dtsComparar)
        {
            if (dtsComparar == null || DtsDocumentoInstancia == null) return false;

            foreach (var unDtsOrigen in DtsDocumentoInstancia)
            {
                var encontrado = dtsComparar.Any(unDtsComparar => unDtsOrigen.Equals(unDtsComparar));
                if (!encontrado)
                {
                    return false;
                }
            }
            return true;
        }

        /// <summary>
        /// Evalúa si la lista de puntos de entrada enviados como parámetro son equivalentes
        /// </summary>
        /// <param name="dtsComparar">Dts a comparar</param>
        public static Boolean EsMismoDts(IList<DtsDocumentoInstanciaDto> dtsOrigen, IList<DtsDocumentoInstanciaDto> dtsComparar)
        {
            if (dtsComparar == null || dtsOrigen == null) return false;
            foreach (var unDtsOrigen in dtsOrigen)
            {
                var encontrado = dtsComparar.Any(unDtsComparar => unDtsOrigen.Equals(unDtsComparar));
                if (!encontrado)
                {
                    return false;
                }
            }
            return true;
        }

        /// <summary>
        /// Busca uno o mas hechos que correspondan con los filtros enviados como parámetro.
        /// Si un filtro es nulo entonces no se considera para filtrar al hecho
        /// </summary>
        /// <param name="idConcepto">Identificador del concepto buscad</param>
        /// <param name="entidad">Entidad a considerar del concepto</param>
        /// <param name="unidad">Unidad buscada del hecho</param>
        /// <param name="fechaInicio">Fecha posible de inicio</param>
        /// <param name="fechaFin">Fecha posible de fin</param>
        /// <param name="valoresDimensiones">Valores dimensionales a considerar</param>
        /// <param name="considerarDimensiones">Indica si se deben de considerar o no las dimensiones para buscar un hecho</param>
        /// <returns>Lista de hechos que corresponden con la búsqueda</returns>
        public IList<HechoDto> BuscarHechos(string idConcepto, EntidadDto entidad, UnidadDto unidad, DateTime fechaInicio, DateTime fechaFin, IList<DimensionInfoDto> valoresDimensiones,
            bool considerarDimensiones = true)
        {
            IList<HechoDto> hechosResultado = new List<HechoDto>();
            foreach (var listaHechos in HechosPorIdConcepto.Where(x => x.Key.Equals(idConcepto)))
            {
                foreach (var idHecho in listaHechos.Value)
                {
                    var hecho = HechosPorId[idHecho];
                    var contexto = ContextosPorId.ContainsKey(hecho.IdContexto) ? ContextosPorId[hecho.IdContexto] : null;
                    var unidadHecho = !String.IsNullOrEmpty(hecho.IdUnidad) && UnidadesPorId.ContainsKey(hecho.IdUnidad) ? UnidadesPorId[hecho.IdUnidad] : null;
                    if (contexto != null)
                    {
                        if (entidad != null)
                        {
                            //Revisar entidad
                            if (!String.IsNullOrEmpty(entidad.EsquemaId) && !entidad.EsquemaId.Equals(contexto.Entidad.EsquemaId))
                            {
                                continue;
                            }
                            if (!String.IsNullOrEmpty(entidad.Id) && !entidad.Id.Equals(contexto.Entidad.Id))
                            {
                                continue;
                            }
                        }
                        //Verificar unidad
                        if (unidad != null && unidadHecho != null && !unidadHecho.EsEquivalente(unidad))
                        {
                            continue;
                        }
                        //Verificar fechas
                        if (contexto.Periodo.Tipo == Period.Instante)
                        {
                            if (!contexto.Periodo.FechaInstante.Equals(fechaFin))
                            {
                                continue;
                            }
                        }
                        else if (contexto.Periodo.Tipo == Period.Duracion)
                        {
                            if (!contexto.Periodo.FechaFin.Equals(fechaFin) || !contexto.Periodo.FechaInicio.Equals(fechaInicio))
                            {
                                continue;
                            }
                        }
                        //Verificar dimensiones
                        if (considerarDimensiones && !contexto.SonDimensionesEquivalentes(valoresDimensiones))
                        {
                            continue;
                        }
                        hechosResultado.Add(hecho);
                    }

                }
            }
            return hechosResultado;
        }

        /// <summary>
        /// El título del documento instancia
        /// </summary>
        public string Titulo { get; set; }

        /// <summary>
        /// La taxonomía XBRL utilizada para la creación de este documento instancia
        /// </summary>
        public TaxonomiaDto Taxonomia { get; set; }

        /// <summary>
        /// Contiene la definición de todos los contextos indexados por su identificador.
        /// </summary>
        public IDictionary<string, ContextoDto> ContextosPorId { get; set; }

        /// <summary>
        /// Contiene la definición de todas las unidades indexadas por su identificador.
        /// </summary>
        public IDictionary<string, UnidadDto> UnidadesPorId { get; set; }

        /// <summary>
        /// Contiene los hechos del documento instancia organizados por el identificador del concepto asociado.
        /// </summary>
        public IDictionary<string, IList<string>> HechosPorIdConcepto { get; set; }

        /// <summary>
        /// Contiene los hechos del documento instancia organizados por el identificador del hecho presentado.
        /// </summary>
        public IDictionary<string, HechoDto> HechosPorId { get; set; }

        /// <summary>
        /// Lista de archivos importados por el documento de instancia
        /// </summary>
        public IList<DtsDocumentoInstanciaDto> DtsDocumentoInstancia { get; set; }
        /// <summary>
        /// Listado de conjuntos de contextos agrupados según su equivalencia, las sublistas
        /// de este atributo son conceptos que entre ellos mismos son C-Equal (contextos estructuralmente iguales)
        /// </summary>
        public IDictionary<string, IList<string>> GruposContextosEquivalentes { get; set; }
        /// <summary>
        /// Indice de los diferentes conjuntos de fechas presentes en el documento de instancia , la lista que representa los 
        /// conjuntos agrupados por fecha contiene únicamente su identificador
        /// </summary>
        public IDictionary<string, IList<string>> ContextosPorFecha { get; set; }

        /// <summary>
        /// Indice de hechos agrupados por el ID de contexto al que están asignados, el identifcador del mapa
        /// representa un identificador de contextos, como valor contiene una lista de identificadores de hechos asignados al contexto de la llave
        /// </summary>
        public IDictionary<string, IList<string>> HechosPorIdContexto { get; set; }

        /// <summary>
        /// Índice de hechos agrupados por el ID de la unidad a la que están asignados, el identificador del mapa 
        /// representa un identificador de unidad, como valor contiene unal ista de identificadores de hechos asignados a la unidad de la llave
        /// </summary>
        public IDictionary<string, IList<string>> HechosPorIdUnidad { get; set; }

        /// <summary>
        /// Estructura de presentacion de un documento instancia
        /// </summary>
        public Dictionary<string, IList<AbaxXBRLCore.Viewer.Application.Dto.EditorGenerico.ElementoDocumentoDto>> estructurasDocumentoInstanciaPorRol { get; set; }

        /// <summary>
        /// Índice de las diferentes entidades encontradas en el documento de instancia sin considerar
        /// la información dimensional, es decir, únicamente considerando el esquema y el ID de la entidad
        /// </summary>
        public IDictionary<string, EntidadDto> EntidadesPorId { get; set; }
        /// <summary>
        /// Lista de errores reportados en el documento instancia
        /// </summary>
        public IList<ErrorCargaTaxonomiaDto> Errores { get; set; }
        /// <summary>
        /// Identificador del documento de instancia
        /// </summary>
        public long? IdDocumentoInstancia { get; set; }
        /// <summary>
        /// Indica si el documento tiene errores de validación
        /// </summary>
        public Boolean EsCorrecto { get; set; }
        /// <summary>
        /// Referencia al nombre del archivo con el que fue importado este documento
        /// </summary>
        public String NombreArchivo { get; set; }
        /// <summary>
        /// Identificador de la plantilla de captura con la que es capturado este documento
        /// </summary>
        public long? IdPlantilla { get; set; }
        /// <summary>
        /// Identificador de la empresa a la que pertenece el documento
        /// </summary>
        public long IdEmpresa { get; set; }

        /// <summary>
        /// Indica si el usuario que consulta del documento instancia puede escribir datos
        /// </summary>
        public bool PuedeEscribir { get; set; }

        /// <summary>
        /// Indica si el usuario que consulta del documento instancia tiene privilegios de propietario
        /// </summary>
        public bool EsDueno { get; set; }

        /// <summary>
        /// Indica si el documento instancia se encuentra bloqueado por algún usuario.
        /// </summary>
        public bool Bloqueado { get; set; }
        /// <summary>
        /// Codificación configurada para el archivo XML
        /// </summary>
        public String Codificacion { get; set; }
        /// <summary>
        /// El identificador del usuario que realizó el bloqueo del documento.
        /// </summary>
        public long IdUsuarioBloqueo { get; set; }

        /// <summary>
        /// El nombre completo del usuario que realizó el bloqueo del documento.
        /// </summary>
        public string NombreUsuarioBloqueo { get; set; }
        /// <summary>
        /// Versión actual del documento de instancia
        /// </summary>
        public long Version { get; set; }
        /// <summary>
        /// Comentarios para el guardado de versiones
        /// </summary>
        public string Comentarios { get; set; }
        /// <summary>
        /// Parametros generales de configuración del documento de instancia para 
        /// editar o visualizar el documento en plantilla
        /// </summary>
        public IDictionary<string, string> ParametrosConfiguracion { get; set; }
        /// <summary>
        /// El espacio de nombres principal del punto de entrada de la taxonomía que importa
        /// </summary>
        public String EspacioNombresPrincipal { get; set; }
        /// <summary>
        /// Identificador de la periodicidad de la taxonomía.
        /// </summary>
        public int Periodicidad { get; set; }
        /// <summary>
        /// Verifica y agrega los elementos con los que este elemento se duplica a su lista interna de duplicados
        /// </summary>
        /// <param name="hecho">el elemento a verificar</param>
        public void VerificarDuplicidad(HechoDto hecho) {

            bool esDuplicado = true;

            if (hecho.Tipo == Concept.Item) {
                if (this.HechosPorIdConcepto.ContainsKey(hecho.IdConcepto)) {
                    foreach (var idHechoComparar in this.HechosPorIdConcepto[hecho.IdConcepto]) {
                        var hechoComparar = this.HechosPorId[idHechoComparar];

                        var contextoEquivalente = false;
                        var unidadEquivalente = false;
                        var mismaTupla = false;

                        if (hecho.IdContexto.Equals(hechoComparar.IdContexto)) {
                            contextoEquivalente = true;
                        } else {
                            if (this.ContextosPorId.ContainsKey(hecho.IdContexto) && this.ContextosPorId.ContainsKey(hechoComparar.IdContexto) && this.ContextosPorId[hecho.IdContexto].EstructuralmenteIgual(this.ContextosPorId[hechoComparar.IdContexto])) {
                                contextoEquivalente = true;
                            }
                        }

                        if (hecho.EsNumerico) {
                            if (hecho.IdUnidad.Equals(hechoComparar.IdUnidad)) {
                                unidadEquivalente = true;
                            } else {
                                var miUnidad = this.UnidadesPorId[hecho.IdUnidad];
                                var otraUnidad = this.UnidadesPorId[hechoComparar.IdUnidad];
                                if (miUnidad != null && otraUnidad != null && miUnidad.EsEquivalente(otraUnidad)) {
                                    unidadEquivalente = true;
                                }
                            }
                        } else {
                            unidadEquivalente = true;
                        }

                        if ((hecho.TuplaPadre != null && hechoComparar.TuplaPadre == null) || (hechoComparar.TuplaPadre != null && hecho.TuplaPadre == null)) {
                            mismaTupla = false;
                        } else {
                            if (hecho.TuplaPadre != null && hecho.TuplaPadre != null) {
                                if (hecho.TuplaPadre.Id.Equals(hechoComparar.TuplaPadre.Id)) {
                                    mismaTupla = true;
                                }
                            } else {
                                mismaTupla = true;
                            }
                        }

                        if (contextoEquivalente && unidadEquivalente && mismaTupla) {
                            if (hecho.DuplicadoCon == null) {
                                hecho.DuplicadoCon = new List<string>();
                            }
                            if (hechoComparar.DuplicadoCon == null) {
                                hechoComparar.DuplicadoCon = new List<string>();
                            }
                            if (!hecho.DuplicadoCon.Contains(hechoComparar.Id)) {
                                hecho.DuplicadoCon.Add(hechoComparar.Id);
                            }
                            if (!hechoComparar.DuplicadoCon.Contains(hecho.Id)) {
                                hechoComparar.DuplicadoCon.Add(hecho.Id);
                            }
                        }
                    }
                }
                else if (hecho.Tipo == Concept.Tuple) {

                    if (this.HechosPorIdConcepto.ContainsKey(hecho.IdConcepto)) {
                        foreach (var idHechoComparar in this.HechosPorIdConcepto[hecho.IdConcepto]) {
                            var hechoComparar = this.HechosPorId[idHechoComparar];
                            if (this.EsTuplaDuplicada(hecho, hechoComparar)) {
                                if (hecho.DuplicadoCon == null) {
                                    hecho.DuplicadoCon = new List<string>();
                                }
                                if (hechoComparar.DuplicadoCon == null) {
                                    hechoComparar.DuplicadoCon = new List<string>();
                                }
                                if (!hecho.DuplicadoCon.Contains(hechoComparar.Id)) {
                                    hecho.DuplicadoCon.Add(hechoComparar.Id);
                                }
                                if (!hechoComparar.DuplicadoCon.Contains(hecho.Id)) {
                                    hechoComparar.DuplicadoCon.Add(hecho.Id);
                                }
                            }
                        }
                    }
                }
            }

        }

        /// <summary>
        /// Determina si una tupla está duplicada con otra.
        /// </summary>
        /// <param name="tupla">la tupla que se tomará como referencia.</param>
        /// <param name="tuplaComparar">la tupla que se compara contra la referencia.</param>
        /// <returns>true si la tupla está duplicada con la de referencia. false en cualquier otro caso.</returns>
        bool EsTuplaDuplicada(HechoDto tupla, HechoDto tuplaComparar) {

            bool resultado = true;

            if (!tupla.IdConcepto.Equals(tuplaComparar.IdConcepto)) {
                resultado = false;
            } else if (tupla.Hechos.Count != tuplaComparar.Hechos.Count) {
                resultado = false;
            } else if (tupla.TuplaPadre != null && tuplaComparar.TuplaPadre != null && !tupla.TuplaPadre.Id.Equals(tuplaComparar.TuplaPadre.Id)) {
                resultado = false;
            } else {
                foreach (var hecho in tupla.Hechos) {
                    if (HechosPorId.ContainsKey(hecho))
                    {
                        var hechoDto = HechosPorId[hecho];
                        
                    bool hechoEquivalenteEncontrado = false;
                        foreach (var hechoComparar in tuplaComparar.Hechos)
                        {
                            var hechoCompararDto = HechosPorId[hechoComparar];
                            if (hechoDto.Tipo == Concept.Tuple && hechoCompararDto.Tipo == Concept.Tuple)
                            {
                                if (this.EsTuplaDuplicada(hechoDto, hechoCompararDto))
                                {
                                hechoEquivalenteEncontrado = true;
                                break;
                            }
                            }
                            else if (hechoDto.Tipo == Concept.Item && hechoCompararDto.Tipo == Concept.Item)
                            {
                                if (hechoDto.IdConcepto.Equals(hechoCompararDto.IdConcepto))
                                {
                                    if (hechoDto.IdContexto.Equals(hechoCompararDto.IdContexto) || this.ContextosPorId[hechoDto.IdContexto].EstructuralmenteIgual(this.ContextosPorId[hechoCompararDto.IdContexto]))
                                    {
                                        if (hechoDto.EsNumerico)
                                        {
                                            if (hechoDto.ValorRedondeado == hechoCompararDto.ValorRedondeado)
                                            {
                                            hechoEquivalenteEncontrado = true;
                                            break;
                                        }
                                        }
                                        else
                                        {
                                            if (hechoDto.Valor.Equals(hechoCompararDto.Valor))
                                        {
                                            hechoEquivalenteEncontrado = true;
                                            break;
                                        }
                                    }
                                }
                            }
                            break;
                        }
                    }
                        if (!hechoEquivalenteEncontrado)
                        {
                        resultado = false;
                        break;
                    }
                }
                    
                }
            }

            return resultado;
        }

        /// <summary>
        /// Importa los datos de un hecho de otro documento de instancia.
        /// Busca unidad o contexto que sea equivalente, de otra forma crea unidades y contextos asociados
        /// </summary>
        /// <param name="hechoImportar">Hecho a importar</param>
        /// <param name="instancia">Documento de instancia orgien del hecho</param>
        /// <returns>ID del hecho importado en le documento de instancia</returns>
        public String ImportarHecho(HechoDto hechoImportar, DocumentoInstanciaXbrlDto instancia) {

            String nuevoId = null;
            if (this.Taxonomia.ConceptosPorId.ContainsKey(hechoImportar.IdConcepto)) {
                nuevoId = "I" + Guid.NewGuid().ToString();
                String idContexto = null;
                String idUnidad = null;

                if (hechoImportar.IdUnidad != null) {
                    UnidadDto unidadOrigen = instancia.UnidadesPorId[hechoImportar.IdUnidad];
                    var uniadesNuevoHecho = BuscarUnidades(unidadOrigen.Tipo, Unit.Medida == unidadOrigen.Tipo ?unidadOrigen.Medidas :unidadOrigen.MedidasNumerador ,unidadOrigen.MedidasDenominador);
                    if (uniadesNuevoHecho != null && uniadesNuevoHecho.Count > 0)
                    {
                        idUnidad = uniadesNuevoHecho[0].Id;
                    }
                    else {
                        var  unidadDestino = new UnidadDto()
                        {
                            Id = "UI" + Guid.NewGuid().ToString(),
                            Tipo = unidadOrigen.Tipo,
                            Medidas = unidadOrigen.Medidas,
                            MedidasNumerador = unidadOrigen.MedidasNumerador,
                            MedidasDenominador = unidadOrigen.MedidasDenominador
                        };
                        UnidadesPorId.Add(unidadDestino.Id, unidadDestino);
                        idUnidad = unidadDestino.Id;
                    }
                }

                if(hechoImportar.IdContexto != null){
                    ContextoDto contextoOrigen = instancia.ContextosPorId[hechoImportar.IdContexto];
                    var valoresDim = new List<DimensionInfoDto>();
                    if(contextoOrigen.Entidad.ValoresDimension != null){
                        valoresDim.AddRange(contextoOrigen.Entidad.ValoresDimension);
                    }
                    if(contextoOrigen.ValoresDimension != null){
                        valoresDim.AddRange(contextoOrigen.ValoresDimension);
                    }

                    var contextos = BuscarContexto(contextoOrigen.Entidad.EsquemaId+":"+contextoOrigen.Entidad.Id,contextoOrigen.Periodo.Tipo,
                        contextoOrigen.Periodo.Tipo == Period.Instante? contextoOrigen.Periodo.FechaInstante:contextoOrigen.Periodo.FechaInicio, 
                        contextoOrigen.Periodo.Tipo == Period.Instante? contextoOrigen.Periodo.FechaInstante:contextoOrigen.Periodo.FechaFin,
                        valoresDim
                        );
                    if (contextos != null && contextos.Count > 0)
                    {
                        idContexto = contextos[0].Id;
                        //LogUtil.Info("{contextoOrigen.Entidad.Id: [" + contextoOrigen.Entidad.Id + "], contextoDocumento.Entidad.Id:[" + contextos[0].Entidad.Id + "]}");
                    }
                    else {
                        var contextoDestino = new ContextoDto()
                        {
                            Entidad = new EntidadDto()
                            {
                                ContieneInformacionDimensional = contextoOrigen.Entidad.ContieneInformacionDimensional,
                                EsquemaId = contextoOrigen.Entidad.EsquemaId,
                                Id = contextoOrigen.Entidad.Id
                            },
                            ContieneInformacionDimensional = contextoOrigen.ContieneInformacionDimensional,
                            Periodo = new PeriodoDto()
                            {
                                Tipo = contextoOrigen.Periodo.Tipo,
                                FechaInicio = contextoOrigen.Periodo.FechaInicio,
                                FechaFin = contextoOrigen.Periodo.FechaFin,
                                FechaInstante = contextoOrigen.Periodo.FechaInstante
                            },
                            ValoresDimension = contextoOrigen.ValoresDimension,
                            Id = "CI" + Guid.NewGuid().ToString()
                        };
                        ContextosPorId[contextoDestino.Id] = contextoDestino;
                        idContexto = contextoDestino.Id;
                    }
                }

                var hechoNuevo = CrearHecho(hechoImportar.IdConcepto, idUnidad, idContexto, nuevoId);
                hechoNuevo.Valor = hechoImportar.Valor;
                hechoNuevo.ValorNumerico = hechoImportar.ValorNumerico;
                

                HechosPorId[nuevoId] = hechoNuevo;
                if (!HechosPorIdConcepto.ContainsKey(hechoNuevo.IdConcepto)) {
                    HechosPorIdConcepto[hechoNuevo.IdConcepto] = new List<String>();
                }
                HechosPorIdConcepto[hechoNuevo.IdConcepto].Add(nuevoId);
            }

            return nuevoId;
        }
        /// <summary>
        /// Libera los recursos asociados al documento de instancia
        /// </summary>
        public void Cerrar()
        {
            
            this.Taxonomia = null;

            if (ContextosPorFecha != null)
            {
                ContextosPorFecha.Clear();
                ContextosPorFecha = null;
            }

            if (EntidadesPorId != null)
            {
                EntidadesPorId.Clear();
                EntidadesPorId = null;
            }

            if (Errores != null)
            {
                Errores.Clear();
                Errores = null;
            }

            if (HechosPorIdContexto != null)
            {
                HechosPorIdContexto.Clear();
                HechosPorIdContexto = null;
            }

            if (HechosPorIdConcepto != null)
            {
                HechosPorIdConcepto.Clear();
                HechosPorIdConcepto = null;
            }

            if (HechosPorIdUnidad != null)
            {
                HechosPorIdUnidad.Clear();
                HechosPorIdUnidad = null;
            }

            if (UnidadesPorId != null)
            {
                UnidadesPorId.Clear();
                UnidadesPorId = null;
            }

            if (ContextosPorId != null)
            {
                foreach (var ctx in ContextosPorId.Values)
                {
                    if (ctx.Entidad != null)
                    {
                        if (ctx.Entidad.ValoresDimension != null)
                        {
                            ctx.Entidad.ValoresDimension.Clear();
                            ctx.Entidad.ValoresDimension = null;
                        }
                        ctx.Entidad = null;
                    }
                    if (ctx.Periodo != null)
                    {
                        ctx.Periodo = null;
                    }
                    if (ctx.ValoresDimension != null)
                    {
                        ctx.ValoresDimension.Clear();
                        ctx.ValoresDimension = null;
                    }
                }
                ContextosPorId.Clear();
                ContextosPorId = null;
            }

            if (HechosPorId != null)
            {
                foreach (var hecho in HechosPorId.Values)
                {
                    LiberarHecho(hecho);
                }
                HechosPorId.Clear();
            }

            if (DtsDocumentoInstancia != null)
            {
                DtsDocumentoInstancia.Clear();
                DtsDocumentoInstancia = null;
            }

            if (estructurasDocumentoInstanciaPorRol != null)
            {
                foreach (var est in estructurasDocumentoInstanciaPorRol.Values)
                {
                    est.Clear();
                }
                estructurasDocumentoInstanciaPorRol.Clear();
            }
        }
        /// <summary>
        /// Libera la información del hecho y sus posibles hijos
        /// </summary>
        /// <param name="hecho"></param>
        private void LiberarHecho(HechoDto hecho)
        {
            if (hecho.DuplicadoCon != null)
            {
                hecho.DuplicadoCon.Clear();
                hecho.DuplicadoCon = null;
            }
            if (hecho.Hechos != null)
            {
                foreach (var hijo in hecho.Hechos)
                {
                    if(HechosPorId.ContainsKey(hijo))
                    {
                        LiberarHecho(HechosPorId[hijo]);
                    }
                    
                }
                hecho.Hechos.Clear();
            }
            if (hecho.NotasAlPie != null)
            {
                hecho.NotasAlPie.Clear();
                hecho.NotasAlPie = null;
            }
            hecho = null;
        }
    }
}