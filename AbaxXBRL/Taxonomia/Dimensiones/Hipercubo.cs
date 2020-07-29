using System.Xml.Schema;
using AbaxXBRL.Constantes;
using AbaxXBRL.Taxonomia.Linkbases;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Xml;
using System.Xml.Linq;

namespace AbaxXBRL.Taxonomia.Dimensiones
{
    /// <summary>
    /// Objeto que sirve para representar la estructura ordenada de un hipercubo, ordena los elementos de un hipercubo
    /// para que sea más fácil de utilizarlos tanto para validación como para presentación
    /// <author>Emigdio Hernández</author>
    /// </summary>
    public class Hipercubo
    {
        /// <summary>
        /// Elemento origen del hipercubo en cierto arbol de linkbase
        /// </summary>
        public NodoLinkbase DeclaracionElementoPrimario { get; set; }
        /// <summary>
        /// Arco rol de la declaración del hipercubo (all or notAll)
        /// </summary>
        public String ArcRoleDeclaracion { get; set; }
        /// <summary>
        /// Rol al que pertenece la declaración del hipercubo
        /// </summary>
        public RoleType Rol { get; set; }
        /// <summary>
        /// Elementos primarios (partidas) del cubo puesto en forma de lista para su ágil localización
        /// </summary>
        private readonly IList<ConceptItem> _elementosPrimarios = new List<ConceptItem>();
        /// <summary>
        /// Tipo de elemento en el contexto donde se encuentra la definición  de las dimensiones de este hipercubo
        /// </summary>
        public TipoElementoContexto ElementoContexto { get; set; }
        /// <summary>
        /// Indica si este cubo es cerrado o abierto
        /// </summary>
        public Boolean Cerrado { get; set; }
        /// <summary>
        /// Acceso directo al elemento hypercube-item
        /// </summary>
        public NodoLinkbase ElementoHipercubo { get; set; }
        /// <summary>
        /// Acceso directo a la lista de dimensiones del hipercubo
        /// </summary>
        public IList<Dimension> ListaDimensiones { get; set; } 
        /// <summary>
        /// Inventario de miembros predeterminados de la dimension
        /// </summary>
        private readonly IDictionary<ConceptDimensionItem,ConceptItem> _dimensionDefaults = new Dictionary<ConceptDimensionItem, ConceptItem>();
        /// <summary>
        /// Constructor básico, se necesita un nodo con la declaración del elemento primario para inicial el hipercubo
        /// </summary>
        /// <param name="nodoOrigen"></param>
        public Hipercubo(NodoLinkbase nodoOrigen, ConectorLinkbase conectorInicial, RoleType rol, IDictionary<ConceptDimensionItem,ConceptItem> listaDimensionesDefault,ITaxonomiaXBRL tax)
        {
            ListaDimensiones = new List<Dimension>();
            Rol = rol;
            DeclaracionElementoPrimario = nodoOrigen;
            //Elementos primarios
            _elementosPrimarios.Add(nodoOrigen.Elemento as ConceptItem);
            LlenarElementosPrimarios(nodoOrigen);
            //Determinar el tipo de elemento en el contexto donde aparece la información dimensional del hipercubo
            ElementoContexto = (conectorInicial.Arco as ArcoDefinicion).ElementoContexto;
            //Atributo cerrado
            Cerrado = (conectorInicial.Arco as ArcoDefinicion).Closed != null
                          ? (conectorInicial.Arco as ArcoDefinicion).Closed.Value
                          : false;
            ArcRoleDeclaracion = conectorInicial.Arco.ArcoRol;

            ElementoHipercubo = conectorInicial.NodoSiguiente;
            //Dimensiones
            foreach (var conectoresDimension in ElementoHipercubo.ConectoresSalientes.Where(x=>x.Arco.ArcoRol.Equals(ArcoDefinicion.HypercubeDimensionRole)))
            {
                var dimDec = new Dimension();
                
                dimDec.ConceptoDimension = conectoresDimension.NodoSiguiente.Elemento as ConceptDimensionItem;
                dimDec.Explicita = dimDec.ConceptoDimension.ReferenciaDimensionTipificada == null;
                ListaDimensiones.Add(dimDec);
                foreach (var dimDefault in listaDimensionesDefault.Where(x => x.Key == conectoresDimension.NodoSiguiente.Elemento))
                {
                    if (!_dimensionDefaults.ContainsKey(dimDefault.Key))
                    {
                        _dimensionDefaults.Add(dimDefault.Key, dimDefault.Value);
                        dimDec.MiembroDefault = dimDefault.Value;
                    }
                }
                //Llenar dominio de dimensión
                LlenarDominioDeDimension(dimDec, conectoresDimension.NodoSiguiente,tax);
                //Quitar del dominio a los elementos no usables que pudieran quedar repetidos
                foreach (var noUsable in dimDec.MiembrosDominioNoUsables)
                {
                    dimDec.MiembrosDominio.Remove(noUsable);
                }
            }
        }

        /// <summary>
        /// Colecta los miembros válidos de dominio de dimensiones
        /// </summary>
        /// <param name="dimension">Declaración de la dimensión</param>
        /// <param name="nodoActual"> </param>
        /// <param name="tax"> </param>
        private void LlenarDominioDeDimension(Dimension dimension, NodoLinkbase nodoActual, ITaxonomiaXBRL tax)
        {
            IList<string> arcoRolesBuscados = new List<string>(){ArcoDefinicion.DimensionDomainRole,ArcoDefinicion.DomainMemberRole};
            foreach (var conectorSiguiente in nodoActual.ConectoresSalientes.Where(x => x.Arco != null && arcoRolesBuscados.Contains(x.Arco.ArcoRol)))
            {
                //considerar el atributo usable
                if(!((conectorSiguiente.Arco as ArcoDefinicion).Usable != null && !(conectorSiguiente.Arco as ArcoDefinicion).Usable.Value))
                {
                    if (!dimension.MiembrosDominio.Contains(conectorSiguiente.NodoSiguiente.Elemento))
                    {
                        dimension.MiembrosDominio.Add(conectorSiguiente.NodoSiguiente.Elemento as ConceptItem);
                    }
                        
                }else
                {
                    if (!dimension.MiembrosDominioNoUsables.Contains(conectorSiguiente.NodoSiguiente.Elemento))
                    {
                        dimension.MiembrosDominioNoUsables.Add(conectorSiguiente.NodoSiguiente.Elemento as ConceptItem);
                    }
                }
                LlenarDominioDeDimension(dimension, conectorSiguiente.NodoSiguiente, tax);
            }
            if(!dimension.Explicita)
            {
                //Localizar el schema element de la dimensión
                if(dimension.ConceptoDimension.ReferenciaDimensionTipificada != null)
                {
                    foreach (var esquema in tax.ArchivosEsquema.Where(x => x.Key.Equals(dimension.ConceptoDimension.ReferenciaDimensionTipificada.UbicacionArchivo)))
                    {
                        foreach (XmlSchemaElement unElemento in esquema.Value.Elements.Values)
                        {
                            if (unElemento.Id != null && unElemento.Id.Equals(dimension.ConceptoDimension.ReferenciaDimensionTipificada.Identificador))
                            {
                                dimension.ConceptoDimension.ElementoDimensionTipificada = unElemento;
                                break;
                            }
                        }

                    }
                   
                }
            }
        }
        /// <summary>
        /// Recorre el arbol de relaciones dimensionales en busca de elemento primarios, los agrega a la lista de elementos primarios
        /// </summary>
        /// <param name="nodoActual"></param>
        private void LlenarElementosPrimarios(NodoLinkbase nodoActual)
        {
            foreach (var conector in nodoActual.ConectoresSalientes.Where(x=>x.Arco.ArcoRol.Equals(ArcoDefinicion.DomainMemberRole)))
            {
                if(!_elementosPrimarios.Contains(conector.NodoSiguiente.Elemento))
                {
                    _elementosPrimarios.Add(conector.NodoSiguiente.Elemento as ConceptItem);
                    LlenarElementosPrimarios(conector.NodoSiguiente);
                }
            }
        }
        /// <summary>
        /// Busca el concepto en la lista de elementos primarios del hipercubo
        /// </summary>
        /// <param name="concepto">Concepto a buscar</param>
        /// <returns>True si existe en la lista de primarios, false si no</returns>
        public Boolean ElementoPrimarioPerteneceAHipercubo(ConceptItem concepto)
        {
            return _elementosPrimarios.Contains(concepto);
        }
        /// <summary>
        /// Obtiene la lista de elementos primarios
        /// </summary>
        /// <returns>Lista de elementos primarios</returns>
        public IList<ConceptItem> ObtenerElementosPrimarios()
        {
            return _elementosPrimarios;
        } 
        /// <summary>
        /// Obtiene el miembro predeterminado de una dimensión, si es que la tiene
        /// </summary>
        /// <param name="dimension">Dimensión para la cuál se busca su default</param>
        /// <returns>Concepto default si lo tiene, null si no tiene</returns>
        public ConceptItem ObtenerDimensionDefault(ConceptDimensionItem dimension)
        {
            if(_dimensionDefaults.ContainsKey(dimension))
            {
                return _dimensionDefaults[dimension];
            }
            return null;
        }
    }
}
