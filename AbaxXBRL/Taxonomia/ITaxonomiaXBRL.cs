using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml;
using System.Xml.Schema;
using AbaxXBRL.Taxonomia.Cache;
using AbaxXBRL.Taxonomia.Dimensiones;
using AbaxXBRL.Taxonomia.Linkbases;

namespace AbaxXBRL.Taxonomia
{
    /// <summary>
    /// Representa una taxonomía a ser procesada por AbaxXBRL. La taxonomía debe ser compatible con la versión 2.1 de XBRL.
    /// Una taxonomía se compone de un esquema XML y de todos los linkbases contenidos en ese esquema o directamente referenciados por ese esquema. El
    /// esquema XML es conocido como Esquema Taxonomía.
    /// <author>José Antonio Huizar Moreno</author>
    /// <version>1.0</version>
    /// </summary>
    public interface ITaxonomiaXBRL
    {
        /// <summary>
        /// El manejador de errores del proceso de la carga de la taxonomía.
        /// </summary>
        IManejadorErroresXBRL ManejadorErrores { get; set; }

        /// <summary>
        /// Contiene los elementos que pueden o deben ser reportados en la taxonomía indexados por su identificador.
        /// </summary>
        IDictionary<string, Concept> ElementosTaxonomiaPorId { get; set; }

        /// <summary>
        /// Contiene los elementos que pueden o deben ser reportados en la taxonomía indexados por su nombre de etiqueta.
        /// </summary>
        IDictionary<XmlQualifiedName, Concept> ElementosTaxonomiaPorName { get; set; }

        /// <summary>
        /// El conjunto de elementos del tipo Custom Extended Links definidos en la taxonomía
        /// </summary>
        IList<CustomExtendedLink> CustomExtendedLinks { get; set; }

        /// <summary>
        /// Contiene los elementos que pueden o deben ser reportados en la taxonomía agrupados por el archivo en que fueron declarados
        /// y posteriormente por su identificador.
        /// </summary>
        IDictionary<string, IDictionary<string, Concept>> ElementosTaxonomiaPorArchivoPorId { get; set; }

        /// <summary>
        /// Contiene los elementos que pueden o deben ser reportados en la taxonomía agrupados por el archivo en que fueron declarados
        /// y posteriormente por el nombre de la etiquetda.
        /// </summary>
        IDictionary<string, IDictionary<string, Concept>> ElementosTaxonomiaPorArchivoPorName { get; set; }

        /// <summary>
        /// Contiene todos los diferentes tipos de datos que han sido definidos en la taxonomía.
        /// </summary>
        IDictionary<XmlQualifiedName, XmlSchemaType> TiposDeDato { get; set; }

        /// <summary>
        /// Contiene los roles definidos en la taxonomía así como los linkbases de cada uno.
        /// </summary>
        IDictionary<string, RoleType> RolesTaxonomia { get; set; }

        /// <summary>
        /// Contiene los arco roles definidos en la taxonomía.
        /// </summary>
        IDictionary<string, ArcRoleType> ArcoRolesTaxonomia { get; set; }

        /// <summary>
        /// Representa el conjunto de árboles creados por:
        /// Tipo de Rol y luego por cada linkbase existente en el tipo de rol de la taxonomía
        /// </summary>
        IDictionary<string, IDictionary<string, ArbolLinkbase>> ConjuntoArbolesLinkbase { get; set; }

        /// <summary>
        /// Contiene los archivos esquema que ya han sido procesados la ubicación en donde se encuentran.
        /// </summary>
        IDictionary<string, XmlSchema> ArchivosEsquema { get; set; }
        
        /// <summary>
        /// Agrega el rol estandar de los link bases a la taxonomia: http://www.xbrl.org/2003/role/link si no se ha agregado ya
        /// </summary>
        void AgregarRolEstandar();

        /// <summary>
        /// Permite procesar y agregar al DTS de una taxonomía un documento de tipo esquema.
        /// </summary>
        /// <param name="uriSchema">el URI donde se encuentra el esquema a procesar.</param>
        void ProcesarDefinicionDeEsquema(string uriSchema, bool ForzarEsquemaHttp=false);

        /// <summary>
        /// Procesa el fragmento del documento XML que contiene la definición de un elemento arcoRoleRef y lo agrega al DTS de la taxonomía.
        /// </summary>
        /// <param name="node">El nodo que contiene la definición del elemento arcoRoleRef</param>
        /// <param name="uriReferencia">El URI en el que se encuentra el archivo con la definición del elemento</param>
        /// <returns>el objeto <code>ArcRoleType</code> que representa el ArcoRol procesado. <code>null</code> si no fue posible procesar el elemento.</returns>
        ArcRoleType ProcesarDefinicionArcoRoleRef(XmlNode node, string uriReferencia);

        /// <summary>
        /// Procesa el fragmento del documento XML que contiene la definición de un elemento roleRef y lo agrega al DTS de la taxonomía.
        /// </summary>
        /// <param name="node">El nodo que contiene la definición del elemento roleRef</param>
        /// <param name="uriLinkbase">El URI en el que se encuentra el archivo con la definición del elemento</param>
        /// <returns>el objeto <code>RoleType</code> que representa el ArcoRol procesado. <code>null</code> si no fue posible procesar el elemento.</returns>
        RoleType ProcesarDefinicionRoleRef(XmlNode node, string uriReferencia);

        /// <summary>
        /// Procesa una definición de linkbase contenida en un documento XML y lo agrega al DTS de la taxonomía.
        /// </summary>
        /// <param name="uriLinkbase">El URI donde se encuentra el XML a procesar</param>
        /// <param name="linkbaseRole">El Rol con el que fue referenciado este linkbase. Puede ser <code>null</code> en caso de que no sea importado a través de un elemento linkbaseRef.</param>
        void ProcesarDefinicionDeLinkbase(string uriLinkbase, string linkbaseRole);

        /// <summary>
        /// Procesa el fragmento de la taxonomía que contiene la definición de un linkbaseRef.
        /// </summary>
        /// <param name="node">El nodo que contiene la referencia al linkbaseRef a procesar.</param>
        /// <param name="uriReferencia">El URI de referencia en donde se encuentra la declaración del elemento</param>
        void ProcesarDefinicionDeLinkbaseRef(XmlNode node, string uriReferencia);

        /// <summary>
        /// Crea un árbol de relaciones por cada linkbase y cada rol en base a los tipos de rol declarados en la taxonomía en cada uno de los linkbases cargados.
        /// El nodo raíz será siempre la declaración del RoleType al cuál están asociadas las relaciones descritas en los linkbases procesados
        /// El árbol se crea con los arcos de relación en cada uno de lo linkbases, el árbol se encarga de determinar la sobreescritura o la prohibición
        /// de los arcos conforme se vayan agregando.
        /// Este método se manda llamar cada vez que se termina de cargar una taxonomía, por lo tanto se debe limpiar el árbol y volver a llenarlo en caso
        /// de que se encuentren ya valores
        /// </summary>
        void CrearArbolDeRelaciones();
        /// <summary>
        /// Toma los árboles de relaciones para los linkbases de definición y ajusta los arcos definidos en los roles correspondientes a las relaciones dimensionales:
        /// TargetRole: Toma en cuenta el target role de los arcos dimensionales para unir los nodos declarados en diferentes roles entre sí
        /// Es importante que la Taxonomía no dimensional se valide antes de la dimensional ya que se pueden meter ciclos no válidos al conectar roles entre sí
        /// </summary>
        void CrearRelacionesDimensionales();

        /// <summary>
        /// Contiene apuntadores al primary item inicial de los hipercubos válidos en la taxonomía
        /// </summary>
        /// <returns></returns>
        IDictionary<string, IList<Hipercubo>> ListaHipercubos { get; }
        /// <summary>
        /// Obtiene la lista global de declaraciones de valores predeterminados para dimensiones
        /// </summary>
        /// <returns>Lista global de valores predeterminado</returns>
        IDictionary<ConceptDimensionItem, ConceptItem> ObtenerDimensionesDefaultsGlobales();
        /// <summary>
        /// Obtiene el prefijo declarado, si existe, para el espacio de nombres enviado como parámetro
        /// </summary>
        /// <param name="nameSpace">espacio de nombres para el cuál se busca el prefijo</param>
        /// <returns></returns>
        String ObtenerPrefijoDeEspacioNombres(String nameSpace);
        /// <summary>
        /// Consulta el esquema principal del punto de entrada de la taxonomía
        /// </summary>
        /// <returns></returns>
        XmlSchema ObtenerEsquemaPrincipal();
    }
}
