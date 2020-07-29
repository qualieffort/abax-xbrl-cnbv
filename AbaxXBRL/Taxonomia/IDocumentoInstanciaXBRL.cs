using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml;
using AbaxXBRL.Taxonomia.Cache;

namespace AbaxXBRL.Taxonomia
{
    /// <summary>
    /// Representa un documento instancia XBRL.
    /// 
    /// Los documentos instancia XBRL son fragmentos XML con un elemento <code>&lt;xbrl&gt;</code>. Los documentos instancia XBRL contienen hechos,
    /// correspondiendo a cada hecho un Concepto definido en su respectivo DTS. Los documentos instancia XBRL también contienen elementos <code>&lt;context&gt;</code> y <code>&lt;unit&gt;</code>
    /// que aportan información adicional necesitada para interpretar los hechos en el documento instancia.
    /// <author>José Antonio Huizar Moreno</author>
    /// <version>1.0</version>
    /// </summary>
    public interface IDocumentoInstanciaXBRL
    {
        /// <summary>
        /// El identificador opcional del documento instancia
        /// </summary>
        string Id { get; set; }

        /// <summary>
        /// El DTS de documentos que conforman la taxonomía a la cual hace referencia el documento instancia.
        /// </summary>
        ITaxonomiaXBRL Taxonomia { get; set; }

        /// <summary>
        /// El Manejador de Errores del proceso de carga de la taxonomía.
        /// </summary>
        IManejadorErroresXBRL ManejadorErrores { get; set; }

        /// <summary>
        /// El conjunto de unidades utilizado en el documento instancia.
        /// </summary>
        Dictionary<string, Unit> Unidades { get; set; }

        /// <summary>
        /// El conjunto de contextos utilizado en el documento instancia.
        /// </summary>
        Dictionary<string, Context> Contextos { get; set; }

        /// <summary>
        /// La lista de hechos simples y compuestos que son reportados en este documento instancia.
        /// </summary>
        IList<Fact> Hechos { get; set; }

        /// <summary>
        /// Diccionario de hechos agrupados por el ID del concepto para el cuál está reportado
        /// </summary>
        IDictionary<string, IList<Fact>> HechosPorIdConcepto { get; set; }

        /// <summary>
        /// Listado de conjuntos de contextos agrupados según su equivalencia, las sublistas
        /// de este atributo son conceptos que entre ellos mismos son C-Equal (contextos estructuralmente iguales)
        /// </summary>
        IDictionary<string, IList<string>> GruposContextosEquivalentes { get; set; }

        /// <summary>
        /// Listado de roles definido o importado directamente en el documento de instancia
        /// </summary>
        IDictionary<string, RoleType> RolesInstacia { get; set; }

        /// <summary>
        /// Listado de tipos de arcos roles definidos o importados directamente en el documento de instancia
        /// </summary>
        IDictionary<string, ArcRoleType> ArcosRolesInstancia { get; set; }

        /// <summary>
        /// Carga un documento instancia en memoria para ser procesado posteriormente. Si existe un error en la estructura del archivo, el documento no será cargado.
        /// </summary>
        /// <param name="uriDocumento">el URI absoluto del documento que se desea cargar.</param>
        void Cargar(string uriDocumento, bool ForzarEsquemaHttp=false);

        /// <summary>
        /// Carga un documento instancia en memoria para ser procesado posteriormente. Si existe un error en la estructura del archivo, el documento no será cargado.
        /// </summary>
        /// <param name="archivoEntrada">Stream de entrada de datos para la carga.</param>
        void Cargar(Stream archivoEntrada, bool ForzarEsquemaHttp = false);

        /// <summary>
        /// Obtiene el conjunto de hechos reportados que son del tipo del concepto enviado como parámetro
        /// </summary>
        /// <param name="concepto">Concepto para filtrar los hechos</param>
        /// <returns>Lista de hechos reportados encontrados</returns>
        IList<Fact> ObtenerHechosPorConcepto(Concept concepto);

        /// <summary>
        /// Obtiene el prefijo asignado en el documento al espacio de nombres enviado como paráemtro
        /// </summary>
        /// <param name="espacioNombres">Espacio de nombres a examinar</param>
        /// <returns>Prefijo usado en el documento, cadena en blanco si no tiene prefijo, null si no existe el espacio de nombres</returns>
        String ObtenerPrefijoEspacioNombres(String espacioNombres);
        /// <summary>
        /// Genera un documento XML con los datos contenidos en el documento de instancia utilizando los prefijos usados en la
        /// taxonomía del documento
        /// </summary>
        /// <returns></returns>
        XmlDocument GenerarDocumentoXbrl();

        /// <summary>
        /// Obtiene una lista de los archivos importados en el documento de instancia
        /// </summary>
        /// <returns>Lista de archivos improtados en el documento</returns>
        IList<ArchivoImportadoDocumento> ObtenerArchivosImportados();
        /// <summary>
        /// Agrega un archivo importado a las declaraciones de referencias de esquema, rol, arco rol o linkbase
        /// </summary>
        void AgregarArchivoImportado(ArchivoImportadoDocumento archivoImportado);
        /// <summary>
        /// Agrega un hecho a la lista de hechos del documento de instancia.
        /// Se valida que no exista un hecho con el ID y que el concepto exista en la taxonomía
        /// </summary>
        /// <param name="hecho">Hecho a agregar</param>
        void AgregarHecho(Fact hecho);
        /// <summary>
        /// Contiene la implementación de la estrategia a utilizar para resolver de algún mecanismo de caché una taxonomía
        /// </summary>
        IEstrategiaCacheTaxonomia EstrategiaCacheTaxonomia { get; set; }
    }
}
