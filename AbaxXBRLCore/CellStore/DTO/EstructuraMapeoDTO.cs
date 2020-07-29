using AbaxXBRLCore.CellStore.Modelo;
using AbaxXBRLCore.Viewer.Application.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRLCore.CellStore.DTO
{
    /// <summary>
    /// Estructura con la informacion base apra el procesamiento de un documento de instancia.
    /// </summary>
    public class EstructuraMapeoDTO
    {
        /// <summary>
        /// Contiene los identificadores base de la taxonomía actual.
        /// </summary>
        public Taxonomia Taxonomia { get; set; }
        /// <summary>
        /// Dicionario de conceptos por hash.
        /// </summary>
        public IDictionary<string, Concepto> Conceptos { get; set; }
        /// <summary>
        /// Diccionario de dimensiones por su hash.
        /// </summary>
        public IDictionary<string, MiembrosDimensionales> DimensionesMiembroConcepto { get; set; }
        /// <summary>
        /// Diccionario de dimensiones miembro por hash.
        /// </summary>
        public IDictionary<string, MiembrosDimensionales> DimensionesMiembroGrupo { get; set; }
        /// <summary>
        /// Diccionario de empresas por su id.
        /// </summary>
        public IDictionary<string, Entidad> Entidades { get; set; }
        /// <summary>
        /// Diccionario e hechos por hash.
        /// </summary>
        public IDictionary<string, Hecho> Hechos { get; set; }
        /// <summary>
        /// Diccionario e hechos por idHecho del doocumento de instancia.
        /// </summary>
        public IDictionary<string, Hecho> HechosPorId { get; set; }
        /// <summary>
        /// Medidas por hash.
        /// </summary>
        public IDictionary<string, Medida> Medidas { get; set; }
        /// <summary>
        /// Periodos por hash.
        /// </summary>
        public IDictionary<string, Periodo> Periodos { get; set; }
        /// <summary>
        /// Unidades por hash.
        /// </summary>
        public IDictionary<string, Unidad> Unidades { get; set; }
        /// <summary>
        /// Etiquetas por hash.
        /// </summary>
        public IDictionary<string, Etiqueta> Etiquetas { get; set; }
        /// <summary>
        /// Diccionario que vincula los hash ids de los conceptos mapeados al id del concepto.
        /// </summary>
        public IDictionary<string, Concepto> ConceptosPorId { get; set; }
        /// <summary>
        /// Diccionario que relaciona las unidades en el documento con las unidades en el cellstrore.
        /// </summary>
        public IDictionary<string, Unidad> UnidadesPorId { get; set; }
        /// <summary>
        /// Diccionario que relaciona las entidades del documento con las entidades en el cellstore.
        /// </summary>
        public IDictionary<string, Entidad> EntidadesPorId { get; set; }
        /// <summary>
        /// Diccionario que relaciona los contextos del documento con los periodos del cellstore.
        /// </summary>
        public IDictionary<string, Periodo> PeriodosPorId { get; set; }
        /// <summary>
        /// Mantiene los hash del grupo de dimensiones miembro por id contexto.
        /// </summary>
        public IDictionary<string, IList<MiembrosDimensionales>> DimensionesMiembroGrupoPorId { get; set; }
        /// <summary>
        /// Diccionario por id Concepto con los diccionarios de dimensiones grupo por id contexto.
        /// </summary>
        public IDictionary<string, IDictionary<string, IList<MiembrosDimensionales>>> DimencionesMiembroGrupoProIdConcepto { get; set; }
        /// <summary>
        /// Documento de instancia a procesar.
        /// </summary>
        public DocumentoInstanciaXbrlDto DocumentoInstancia { get; set; }
        /// <summary>
        /// Listado con los comandos SQL para actualizar un elemento si existe.
        /// </summary>
        public IList<string> ComandosSQLUpdate { get; set; }
        /// <summary>
        /// Listado con los comandos SQL para insertar un nuevo elemento si no existe.
        /// </summary>
        public IList<string> ComandosSQLInsert { get; set; }
        /// <summary>
        /// Diccionarlo con los gurpos de medidas por hash.
        /// </summary>
        public IDictionary<string, IList<Medida>> ListasMedidasPorHash { get; set; }
        /// <summary>
        /// Diccionarlo con los gurpos de etiquetas por hash.
        /// </summary>
        public IDictionary<string, IList<Etiqueta>> ListasEtiquetasPorHash { get; set; }
        /// <summary>
        /// Diccionarlo con los gurpos de dimennsiones miembros por hash.
        /// </summary>
        public IDictionary<string, IList<MiembrosDimensionales>> ListasDimensionesMiembrosPorHash { get; set; }
        /// <summary>
        /// Diccionario con los roles de presentación por concepto.
        /// </summary>
        public IDictionary<string, IList<IModeloBase>> ListaRolesPresentaccionGrupoPorHash { get; set; }
        /// <summary>
        /// Diccionario con la lista de uris de rol presentacion existentes por idConcepto.
        /// </summary>
        public IDictionary<string, IList<string>> UrisRolesPresentacionGrupoPorIdConcepto { get; set; }
        /// <summary>
        /// Diccionario con la lista de los has de los grupos de roles presentacion existentes por idConcepto.
        /// </summary>
        public IDictionary<string, string> HashRolesPresentacionGrupoPorIdConcepto { get; set; }
        /// <summary>
        /// Diccionario con el catalog de roles presentación.
        /// </summary>
        public IDictionary<string, RolPresentacion> RolesPresentacionCatalogo { get; set; }
        /// <summary>
        /// Diccionario con el catalog de conceptos rol presentacion.
        /// </summary>
        public IDictionary<string, ConceptoRolPresentacion> ConceptosRolPresentacion { get; set; }

        /// <summary>
        /// Diccionario con el catalog registro de bitacora para el reporte de empresas presentacion.
        /// </summary>
        public Envio Envio { get; set; }
        /// <summary>
        /// Resultado de la operación.
        /// </summary>
        public AbaxXBRLCore.Common.Dtos.ResultadoOperacionDto ResultadoOperacion { get; set; }

        /// <summary>
        /// Contiene un set de string con los identificadores de los hecho de los cuales se ha generado una sentencia SQL.
        /// </summary>
        public HashSet<string> HashSetHechosUpsert { get; set; }
        /// <summary>
        /// Fecha en que fué generado el documento.
        /// </summary>
        public DateTime FechaRecepcion { get; set; }
        /// <summary>
        /// Diccionario con los hechos más recientes del informe.
        /// [idConcepto][hashDimensiones]=hecho.
        /// </summary>
        public IDictionary<String, IDictionary<String, Hecho>> DiccionarioHechosMasRecientesReporte { get; set; }

        /// <summary>
        /// Constructor único.
        /// </summary>
        /// <param name="instancia">Documento de instancia a procesar.</param>
        public EstructuraMapeoDTO(DocumentoInstanciaXbrlDto instancia)
        {
            Conceptos = new Dictionary<string, Concepto>();
            DimensionesMiembroGrupo = new Dictionary<string, MiembrosDimensionales>();
            Entidades = new Dictionary<string, Entidad>();
            Hechos = new Dictionary<string, Hecho>();
            Medidas = new Dictionary<string, Medida>();
            Periodos = new Dictionary<string, Periodo>();
            Unidades = new Dictionary<string, Unidad>();
            Etiquetas = new Dictionary<string, Etiqueta>();
            ConceptosPorId = new Dictionary<string, Concepto>();
            UnidadesPorId = new Dictionary<string, Unidad>();
            EntidadesPorId = new Dictionary<string, Entidad>();
            PeriodosPorId = new Dictionary<string, Periodo>();
            HashRolesPresentacionGrupoPorIdConcepto = new Dictionary<string, string>();
            ConceptosRolPresentacion = new Dictionary<string, ConceptoRolPresentacion>();
            RolesPresentacionCatalogo = new Dictionary<string, RolPresentacion>();
            UrisRolesPresentacionGrupoPorIdConcepto = new Dictionary<string, IList<string>>();

            DimensionesMiembroGrupoPorId = new Dictionary<string, IList<MiembrosDimensionales>>();
            HechosPorId = new Dictionary<string, Hecho>();
            ComandosSQLInsert = new List<string>();
            ComandosSQLUpdate = new List<string>();
            ListasMedidasPorHash = new Dictionary<string, IList<Medida>>();
            ListasEtiquetasPorHash = new Dictionary<string, IList<Etiqueta>>();
            ListasDimensionesMiembrosPorHash = new Dictionary<string, IList<MiembrosDimensionales>>();
            ListaRolesPresentaccionGrupoPorHash = new Dictionary<string, IList<IModeloBase>>();
            DimencionesMiembroGrupoProIdConcepto = new Dictionary<string, IDictionary<string, IList<MiembrosDimensionales>>>();
            DimensionesMiembroConcepto = new Dictionary<string, MiembrosDimensionales>();
            DocumentoInstancia = instancia;
            FechaRecepcion = DateTime.Now;
            DiccionarioHechosMasRecientesReporte = new Dictionary<String, IDictionary<String, Hecho>>();
        }
        /// <summary>
        /// Constructor por defecto sin referencias.
        /// </summary>
        public EstructuraMapeoDTO() { }

    }
}
