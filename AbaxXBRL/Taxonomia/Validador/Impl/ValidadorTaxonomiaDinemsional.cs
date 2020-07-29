using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Xml;
using System.Xml.Linq;
using System.Xml.Schema;
using AbaxXBRL.Constantes;
using AbaxXBRL.Taxonomia.Linkbases;

namespace AbaxXBRL.Taxonomia.Validador.Impl
{
    /// <summary>
    /// Implementación de un validador de XBRL de una taxonomía dimensional.
    /// Realiza la validación de los elementos de hipercubo, elementos primarios, dimensiones, etc, declarados en una taxonomía
    /// 
    /// </summary>
    /// <author>Emigdio Hernandez</author>
    public class ValidadorTaxonomiaDinemsional: IValidadorTaxonomiaDimensional
    {
        /// <summary>
        /// Manejador de errores de este validador
        /// </summary>
        public IManejadorErroresXBRL ManejadorErrores { get; set; }
        /// <summary>
        /// Taxonomía a validar
        /// </summary>
        public ITaxonomiaXBRL Taxonomia { get; set; }
        /// <summary>
        /// Valida el documento de taxonomía dimensional
        /// </summary>
        public void ValidarDocumento()
        {
            if (ManejadorErrores == null)
            {
                throw new ArgumentNullException("El manejador de errores de un validador no debe ser nulo");
            }
            if (Taxonomia == null)
            {
                throw new ArgumentNullException("La taxonomía a validar no puede ser null");
            }

            try
            {
                Taxonomia.CrearArbolDeRelaciones();
                ValidarDeclaracionDeElementosDimensionales();
                ValidarDeclaracionDeArcos();
                ValidarCiclosEnHipercubos();
            }
            catch (Exception e)
            {
                ManejadorErrores.ManejarError(e, "Ocurrió un error al validar la taxonomía dimensional: " + e.StackTrace, XmlSeverityType.Error);
            }
        }
        /// <summary>
        /// Verifica la validez de ciclos en los arcos cuyo rol corresponde a la especificación de dimensiones
        /// </summary>
        private void ValidarCiclosEnHipercubos()
        {
            //Entre arcos has-hypercube + hypercube-dimension y dimension-domain no puede haber ciclos dirigidos
            foreach (var arbol in
               from rol in Taxonomia.ConjuntoArbolesLinkbase
               from arbol in rol.Value.Where(x => x.Key.Equals(LinkbaseDefinicion.RolDefitionLinkbaseRef))
               select arbol)
            {
                //los conjuntos de relaciones consecutivas que empiecen en HasHypercubeAllRole y HasHypercubeNotAllRole no deben tener ciclos dirigidos

                if (ValidarCiclosDirigidosEnHipercubos(arbol.Value.NodoRaiz,new List<ElementoXBRL>()))
                {
                    ManejadorErrores.ManejarError(CodigosErrorXBRL.DRSDirectedCycleError, null,
                        "2.4.3 Se encontró un conjunto de arcos que relacionan elementos que definen un hipercubo donde fue detectado un ciclo: "
                                            ,
                                            XmlSeverityType.Error);
                }
                else
                {
                    //Si el primary Item o sus hijos domain-member son también parte de los miembros validos de las dimensiones del cubo
                    ValidarPrimaryItemEnMiembrosValidos(arbol.Value.NodoRaiz, new List<ElementoXBRL>());
                }
           }
        }
        /// <summary>
        /// Recorre el árbol en busca de la definición de hipercubos y para cada declaración 
        /// recorre el subárbol del hipercubo buscando ciclos dirigidos
        /// </summary>
        /// <param name="nodo">Nodo actualemnte verificado</param>
        /// <returns>True si existe algún ciclo dirigido de hipercubo en el nodo</returns>
        private bool ValidarCiclosDirigidosEnHipercubos(NodoLinkbase nodo,IList<ElementoXBRL> nodosVisitadosPrincipal)
        {
            bool existeCiclo = false;
            

            
            foreach (var conector in nodo.ConectoresSalientes)
            {
                if (conector.Arco != null && (conector.Arco.ArcoRol.Equals(ArcoDefinicion.HasHypercubeAllRole) || conector.Arco.ArcoRol.Equals(ArcoDefinicion.HasHypercubeNotAllRole)))
                {
                    //Se encontró la declaración de un cubo, validar ciclos
                    IList<ConceptItem> nodosVisitados = new List<ConceptItem>();
                    if(ExisteCicloEnHipercubo(nodosVisitados, nodo, conector))
                    {
                        existeCiclo= true;
                        break;
                    }

                }
                if (nodosVisitadosPrincipal.Contains(nodo.Elemento)) return false;
                nodosVisitadosPrincipal.Add(nodo.Elemento);
                if (ValidarCiclosDirigidosEnHipercubos(conector.NodoSiguiente, nodosVisitadosPrincipal))
                {
                    existeCiclo= true;
                    break;
                }
            }
            nodosVisitadosPrincipal.Remove(nodo.Elemento);
            return existeCiclo;
        }
        /// <summary>
        /// Realiza el recorrido de un hipercubo validando si ya se ha visitado algún nodo realizando un recorrido ordenado
        /// </summary>
        /// <param name="nodosVisitados"></param>
        /// <param name="nodo"></param>
        /// <param name="conectorOrigen"></param>
        private bool ExisteCicloEnHipercubo(IList<ConceptItem> nodosVisitados, NodoLinkbase nodo, ConectorLinkbase conectorOrigen)
        {
            if(nodosVisitados.Contains(nodo.Elemento))
            {
                //Error
                return true;
            }
            nodosVisitados.Add(nodo.Elemento as ConceptItem);
            foreach (var conectorActual in nodo.ConectoresSalientes.Where(x => x.Arco != null && ArcoDefinicion.RolesArcosDimensionalesConsecutivos.ContainsKey(x.Arco.ArcoRol)))
            {
                if(ExisteCicloEnHipercubo(nodosVisitados,conectorActual.NodoSiguiente,conectorOrigen))
                {
                    return true;
                }
            }
            nodosVisitados.Remove(nodo.Elemento as ConceptItem);
            return false;

        }

        /// <summary>
        /// Recorre el árbol en busca de la definición de hipercubos y para cada hipercubo validar que sus primary items no sean 
        /// parte de los miembros válidos de las dimensiones del hipercubo
        /// </summary>
        /// <param name="nodo">Nodo actualmente verificado</param>
        /// <param name="elementoXbrls"> </param>
        private void ValidarPrimaryItemEnMiembrosValidos(NodoLinkbase nodo, IList<ElementoXBRL> nodosVisitados)
        {
            if (nodosVisitados.Contains(nodo.Elemento)) return;
            nodosVisitados.Add(nodo.Elemento);
            foreach (var conector in nodo.ConectoresSalientes)
            {
                if (conector.Arco != null && (conector.Arco.ArcoRol.Equals(ArcoDefinicion.HasHypercubeAllRole) || conector.Arco.ArcoRol.Equals(ArcoDefinicion.HasHypercubeNotAllRole)))
                {
                    //Se encontró la declaración de un cubo, obtener sus elementos primarios en forma de lista
                    IList<ConceptItem> elementosPrimarios = new List<ConceptItem>(); 
                    ObtenerListaElementosPrimarios(elementosPrimarios,nodo);
                    VerificarElementoPrimarioEnMiembro(elementosPrimarios,conector.NodoSiguiente,conector);
                }
                ValidarPrimaryItemEnMiembrosValidos(conector.NodoSiguiente, nodosVisitados);
            }
            nodosVisitados.Remove(nodo.Elemento);
        }

        /// <summary>
        /// Verifica si los elementos primarios existen también como miembros válidos de las dimensiones de un cubo, 
        /// notifica un error en caso de encontrar coincidencias
        /// </summary>
        /// <param name="elementosPrimarios">Lista de elementos primarios</param>
        /// <param name="nodo">Nodo origen</param>
        /// <param name="conectorOrigenHipercubo">Conector origen del hipercubo</param>
        /// <param name="miembroUsable">Indica si el miembro de la dimensión es usable de acuerdo a su arco antecesor</param>
        private void VerificarElementoPrimarioEnMiembro(IList<ConceptItem> elementosPrimarios, NodoLinkbase nodo, ConectorLinkbase conectorOrigenHipercubo,bool miembroUsable=true)
        {
            if (miembroUsable && elementosPrimarios.Contains(nodo.Elemento))
            {
                ManejadorErrores.ManejarError(CodigosErrorXBRL.PrimaryItemPolymorphismError, null,
                        "2.5.3.1.1.3 Se encontró un conjunto de arcos que relacionan elementos que definen un hipercubo donde fue detectado un ciclo: Hipercubo: "+
                        conectorOrigenHipercubo.NodoSiguiente.Elemento.Id,
                                           XmlSeverityType.Error);
            }
            foreach (var conector in nodo.ConectoresSalientes.Where(x => x.Arco != null && 
                (x.Arco.ArcoRol.Equals(ArcoDefinicion.HypercubeDimensionRole) || x.Arco.ArcoRol.Equals(ArcoDefinicion.DimensionDomainRole) || x.Arco.ArcoRol.Equals(ArcoDefinicion.DomainMemberRole))))
            {
                VerificarElementoPrimarioEnMiembro(elementosPrimarios, conector.NodoSiguiente, conectorOrigenHipercubo, (conector.Arco as ArcoDefinicion).Usable != null?
                    (conector.Arco as ArcoDefinicion).Usable.Value:true);
            }
        }
        /// <summary>
        /// Colecta una lista de elementos partiendo del nodo origen que estén relacionados por arcos domain-member
        /// </summary>
        /// <param name="nodo">Nodo origen</param>
        private void ObtenerListaElementosPrimarios(IList<ConceptItem> elementosPrimarios,NodoLinkbase nodo)
        {
            if (elementosPrimarios.Contains(nodo.Elemento))
                return;
            elementosPrimarios.Add(nodo.Elemento as ConceptItem);
            foreach (var conector in nodo.ConectoresSalientes.Where(x=>x.Arco != null && x.Arco.ArcoRol.Equals(ArcoDefinicion.DomainMemberRole)))
            {
                ObtenerListaElementosPrimarios(elementosPrimarios,conector.NodoSiguiente);
            }
        }
        /// <summary>
        /// Valida que la declaración de los elementos dimensionales (hipercubos,dimensiones,dominios y miembros) de la taxonomía sea correcta de acuerdo a la especificación
        /// </summary>
        private void ValidarDeclaracionDeElementosDimensionales()
        {
            
            foreach (var hipercubo  in Taxonomia.ElementosTaxonomiaPorId.Where(x=>x.Value.Tipo == Concept.HypercubeItem))
            {
                if (!(hipercubo.Value as ConceptItem).Abstracto)
                {
                    ManejadorErrores.ManejarError(CodigosErrorXBRL.HypercubeElementIsNotAbstractError, null, "2.2.1 Se encontró un elemento del tipo hypercubeItem con un atributo abstract cuyo valor no es 'true': " +
                                           "Elemento: " + hipercubo.Value.Id,
                                           XmlSeverityType.Error);
                }
            }
            foreach (var dimension in Taxonomia.ElementosTaxonomiaPorId.Where(x => x.Value.Tipo == Concept.DimensionItem))
            {
                var dimensionItem = (dimension.Value as ConceptDimensionItem);
                //Los elementos dimensionales deben de ser abstractos
                if (!dimensionItem.Abstracto)
                {
                    ManejadorErrores.ManejarError(CodigosErrorXBRL.DimensionElementIsNotAbstractError , null, 
                    "2.5.1.1 Se encontró un elemento del tipo dimensionItem con un atributo abstract cuyo valor no es 'true': " +
                                           "Elemento: " + dimension.Value.Id,
                                           XmlSeverityType.Error);
                }
                if(dimensionItem.ReferenciaDimensionTipificada != null)
                {
                    ValidarDeclaracionDeReferenciaDimensionTipificada(dimensionItem);
                }
            }
            XmlAttribute attrBuscado = null;
            foreach (var otroElemento in Taxonomia.ElementosTaxonomiaPorId.Where(x => x.Value.Tipo != Concept.DimensionItem))
            {
                if (otroElemento.Value.Elemento.UnhandledAttributes!=null &&
                    otroElemento.Value.Elemento.UnhandledAttributes.Any(x => EspacioNombresConstantes.DimensionTaxonomyNamespace.Equals(x.NamespaceURI) &&
                                                                                            EtiquetasXBRLConstantes.TypedDomainRefAttribute.Equals(x.LocalName)))
                {
                    //No debería tener este atributo
                    ManejadorErrores.ManejarError(CodigosErrorXBRL.TypedDomainRefError, null,
                        "2.5.2.1.1.2 Se encontró un elemento en la taxonomía que usa un atributo xbrldte:TypedDomainRefError y que no es la declaración de un domainItem : " 
                        + otroElemento.Value.Id + ". Nodo: " + otroElemento.Value.Elemento.ToString(),
                        XmlSeverityType.Error);
                }
            }
        }
        /// <summary>
        /// Valida la declaración del apuntado a un elemento de esquema que representa los elementos que pueden tomar los elementos del dominio de una dimensión
        /// </summary>
        /// <param name="dimensionItem"></param>
        private void ValidarDeclaracionDeReferenciaDimensionTipificada(ConceptDimensionItem dimensionItem)
        {
         
            XmlSchemaElement elemento = null;
            
            //Si se trata de la declaración de una dimensión del tipo typed o tipificada, entonces la declaración del elemento de esquema a la que apunta debe:
            if (dimensionItem.ReferenciaDimensionTipificada != null)
            {

                if (dimensionItem.ReferenciaDimensionTipificada.Identificador == null)
                {
                    //Apuntador mal formado
                    ManejadorErrores.ManejarError(CodigosErrorXBRL.TypedDimensionURIError, null,
                    "2.5.2.1.1.4  Se encontró un elemento del tipo dimensionItem con un atributo xbrldt:typedDomainRef  cuyo identificador de fragmento es inválido o nulo: " +
                                       "Ref: " + dimensionItem.ReferenciaDimensionTipificada.UbicacionArchivo + "#" + dimensionItem.ReferenciaDimensionTipificada.Identificador,
                                       XmlSeverityType.Error);
                }else
                {
                    //Buscar el elemento en los tipos globales del DTS
                    bool fueraDeDTS = true;
                    foreach (var esquema in Taxonomia.ArchivosEsquema.Where(x=>x.Key.Equals(dimensionItem.ReferenciaDimensionTipificada.UbicacionArchivo)))
                    {
                        fueraDeDTS = false;
                        foreach (XmlSchemaElement unElemento in esquema.Value.Elements.Values)
                        {
                            if (unElemento.Id!= null && unElemento.Id.Equals(dimensionItem.ReferenciaDimensionTipificada.Identificador))
                            {
                                elemento = unElemento;
                                break;
                            }
                        }
                    
                    }

                    //No apunta a nada
                    if (elemento == null)
                    {
                        if(fueraDeDTS)
                        {
                            ManejadorErrores.ManejarError(CodigosErrorXBRL.OutOfDTSSchemaError, null,
                            "2.5.2.1.1.1  Se encontró un elemento del tipo dimensionItem con un atributo xbrldt:typedDomainRef  cuya declaración apunta a un esquema que no está incluido  " +
                                           " en el DTS de la taxonomía : Ref: " + dimensionItem.ReferenciaDimensionTipificada.UbicacionArchivo + "#" + dimensionItem.ReferenciaDimensionTipificada.Identificador,
                                           XmlSeverityType.Error);
                        }else
                        {
                            ManejadorErrores.ManejarError(CodigosErrorXBRL.TypedDimensionError, null,
                            "2.5.2.1.1.3  Se encontró un elemento del tipo dimensionItem con un atributo xbrldt:typedDomainRef  cuya declaración del elemento no fue encontrada o no es un elemento global: " +
                                           "Ref: " + dimensionItem.ReferenciaDimensionTipificada.UbicacionArchivo + "#" + dimensionItem.ReferenciaDimensionTipificada.Identificador,
                                           XmlSeverityType.Error);
                        }
                        
                    }else
                    {
                        //Ser un elemento global y abstracto
                        if (elemento.Parent.Parent != null)
                        {
                            ManejadorErrores.ManejarError(CodigosErrorXBRL.TypedDimensionError, null,
                            "2.5.2.1.1.3  Se encontró un elemento del tipo dimensionItem con un atributo xbrldt:typedDomainRef  cuya declaración del elemento no es global: " +
                                           "Elemento: " + dimensionItem.ReferenciaDimensionTipificada.UbicacionArchivo + "#" + dimensionItem.ReferenciaDimensionTipificada.Identificador,
                                           XmlSeverityType.Error);
                        }
                        if (elemento.IsAbstract)
                        {
                            ManejadorErrores.ManejarError(CodigosErrorXBRL.TypedDimensionError, null,
                            "2.5.2.1.1.3  Se encontró un elemento del tipo dimensionItem con un atributo xbrldt:typedDomainRef  cuya declaración del elemento no fue encontrada: " +
                                           "Ref: " + dimensionItem.ReferenciaDimensionTipificada.UbicacionArchivo + "#" + dimensionItem.ReferenciaDimensionTipificada.Identificador,
                                           XmlSeverityType.Error);
                        }
                    }
                }
                
            }
        }

       

        /// <summary>
        /// Valida que la declaración de los arcos relevantes a la especificación de dimensiones cumplan con las reglas definidas
        /// </summary>
        private void ValidarDeclaracionDeArcos()
        {
            //Validar arcos all y notAlll para la declaración de hipercubos
            ValidarArcosHasHypercube();
            // ValidarArcos hypercube-dimension
            ValidarArcosHypercubeDimension();
            // Validar Arcos domension-domain
            ValidarArcosDimensionDomain();
            //Validar Arcos domain-member
            ValidarArcosDomainMember();
            //Validar Arcos dimension-default
            ValidarArcosDimensionDefault();

        }
        /// <summary>
        /// Valida las reglas de declaración para los arcos del tipo dimension-default
        /// </summary>
        private void ValidarArcosDimensionDefault()
        {
            //Inventario de las declaraciones de dimensi
            IDictionary<ElementoXBRL,ElementoXBRL> dimensionesConDefault = new Dictionary<ElementoXBRL, ElementoXBRL>();
            foreach (var arco in
                from rol in Taxonomia.RolesTaxonomia
                from linkbase in rol.Value.Linkbases.Where(x => x.Key.Equals(LinkbaseDefinicion.RolDefitionLinkbaseRef))
                from arco in linkbase.Value.ArcosFinales.Where(x => x.ArcoRol.Equals(ArcoDefinicion.DimensionDefaultRole))
                select arco)
            {
                //Elementos desde deben de ser declaraciones de dimension explicita, sin atributo xbrldt:typedDomainRef

                foreach (var elementoDesde in arco.ElementoDesde)
                {
                    if((elementoDesde.Destino as Concept).Tipo != Concept.DimensionItem)
                    {
                        //Concepto desde no es un  xbrldt:dimensionItem
                        ManejadorErrores.ManejarError(CodigosErrorXBRL.DimensionDefaultSourceError, null,
                                                  "2.7.1.1.1 Se encontró un arco del tipo " +
                                                  ArcoDefinicion.DimensionDefaultRole +
                                                  " donde su elemento 'from' no es una declaración de una dimensión explicita : " +
                                                  "Elemento: " + elementoDesde.Destino.Id + ": Nodo:" +
                                                  arco.ElementoXML.OuterXml,
                                                  XmlSeverityType.Error);
                    }

                    //Elementos hacia deben de ser declaraciones de un elemento miembro de dominio (es un item que no es hypercubeItem o dimensionItem)
                    foreach (var elementoHacia in arco.ElementoHacia)
                    {
                        if ((elementoHacia.Destino as Concept).Tipo != Concept.Item)
                        {
                            //Concepto desde no es un  xbrli:item
                            ManejadorErrores.ManejarError(CodigosErrorXBRL.DimensionDefaultTargetError, null,
                                                          "2.5.3.2.1.2 Se encontró un arco del tipo " +
                                                          ArcoDefinicion.DomainMemberRole +
                                                          " donde su elemento 'to' no es una declaración de un elemento primario : " +
                                                          "Elemento: " + elementoHacia.Destino.Id + ": Nodo:" +
                                                          arco.ElementoXML.OuterXml,
                                                          XmlSeverityType.Error);
                        }
                        //Agregar el concepto desde al inventario general de conceptos (sin importar el rol)
                        //Si ya contiene el elemento, entonces se está definiendo más de un default para la dimensión
                        if (dimensionesConDefault.ContainsKey(elementoDesde.Destino) && dimensionesConDefault[elementoDesde.Destino] != elementoHacia.Destino)
                        {
                            ManejadorErrores.ManejarError(CodigosErrorXBRL.TooManyDefaultMembersError, null,
                                                 "2.7.1.1.3 Se encontró un arco del tipo " +
                                                 ArcoDefinicion.DimensionDefaultRole +
                                                 " que define un miembro por default a una dimensión más de una vez : " +
                                                 "Elemento: " + elementoDesde.Destino.Id + ": Nodo:" +
                                                 arco.ElementoXML.OuterXml,
                                                 XmlSeverityType.Error);
                        }
                        else
                        {
                            if (!dimensionesConDefault.ContainsKey(elementoDesde.Destino))
                            {
                                dimensionesConDefault.Add(elementoDesde.Destino, elementoHacia.Destino);
                            }
                            
                        }
                    }
                }
            }
        }
        /// <summary>
        /// Valida las reglas de declaración para los arcos del tipo domain-member
        /// </summary>
        private void ValidarArcosDomainMember()
        {
            foreach (var arco in
                from rol in Taxonomia.RolesTaxonomia
                from linkbase in rol.Value.Linkbases.Where(x => x.Key.Equals(LinkbaseDefinicion.RolDefitionLinkbaseRef))
                from arco in linkbase.Value.ArcosFinales.Where(x => x.ArcoRol.Equals(ArcoDefinicion.DomainMemberRole))
                select arco)
            {
                //Elementos desde deben de ser declaraciones de un elemento primario
                foreach (
                    var elementoDesde in
                        arco.ElementoDesde.Where(x => (x.Destino as Concept).Tipo != Concept.Item))
                {
                    //Concepto desde no es un  xbrldt:item
                    ManejadorErrores.ManejarError(CodigosErrorXBRL.DomainMemberSourceError, null,
                                                  "2.5.3.2.1.1 Se encontró un arco del tipo " +
                                                  ArcoDefinicion.DomainMemberRole +
                                                  " donde su elemento 'from' no es una declaración de un elemento primario : " +
                                                  "Elemento: " + elementoDesde.Destino.Id + ": Nodo:" +
                                                  arco.ElementoXML.OuterXml,
                                                  XmlSeverityType.Error);
                }
                //Elementos desde deben de ser declaraciones de un elemento primario
                foreach (
                    var elementoHacia in
                        arco.ElementoHacia.Where(x => (x.Destino as Concept).Tipo != Concept.Item))
                {
                    //Concepto desde no es un  xbrldt:item
                    ManejadorErrores.ManejarError(CodigosErrorXBRL.DomainMemberTargetError, null,
                                                  "2.5.3.2.1.2 Se encontró un arco del tipo " +
                                                  ArcoDefinicion.DomainMemberRole +
                                                  " donde su elemento 'to' no es una declaración de un elemento primario : " +
                                                  "Elemento: " + elementoHacia.Destino.Id + ": Nodo:" +
                                                  arco.ElementoXML.OuterXml,
                                                  XmlSeverityType.Error);
                }
            }
        }

        /// <summary>
        /// Valida las reglas de declaración para los arcos del tipo domension-domain
        /// </summary>
        private void ValidarArcosDimensionDomain()
        {
            foreach (var arco in
                from rol in Taxonomia.RolesTaxonomia
                from linkbase in rol.Value.Linkbases.Where(x => x.Key.Equals(LinkbaseDefinicion.RolDefitionLinkbaseRef))
                from arco in linkbase.Value.ArcosFinales.Where(x => x.ArcoRol.Equals(ArcoDefinicion.DimensionDomainRole))
                select arco)
            {
                //Elementos desde deben de ser declaraciones de dimension explicita, sin atributo xbrldt:typedDomainRef
                foreach (var elementoDesde in arco.ElementoDesde.Where(x => (x.Destino as Concept).Tipo != Concept.DimensionItem))
                {
                    //Concepto dimension no es un  xbrldt:dimensionItem
                    ManejadorErrores.ManejarError(CodigosErrorXBRL.DimensionDomainSourceError , null,
                        "2.5.3.1.1.1 Se encontró un arco del tipo " + ArcoDefinicion.DimensionDomainRole +
                        " donde su elemento 'from' no es una declaración de un elemento en el grupo de sustitución xbrldt:dimensionItem : " +
                        "Elemento: " + elementoDesde.Destino.Id + ": Nodo:" + arco.ElementoXML.OuterXml,
                                           XmlSeverityType.Error);
                }
                //declaración de dominio en una dimensión typed
                foreach (var elementoDesde in arco.ElementoDesde.Where(x => (x.Destino as Concept).Tipo == Concept.DimensionItem))
                {
                    var dimItem = elementoDesde.Destino as ConceptDimensionItem;
                    if (dimItem.ReferenciaDimensionTipificada != null)
                    {
                        //Concepto dimension typed tiene un arco de dominio
                        ManejadorErrores.ManejarError(CodigosErrorXBRL.DimensionDomainSourceError, null,
                            "2.5.3.1.1.1 Se encontró un arco del tipo " + ArcoDefinicion.DimensionDomainRole +
                            " donde su elemento 'from' es una declaración de una dimensión tipificada (typed dimension): " +
                            "Elemento: " + elementoDesde.Destino.Id + ": Nodo:" + arco.ElementoXML.OuterXml,
                                               XmlSeverityType.Error);
                    }
                   
                }

                //Elementos hasta deben de ser declaraciones de elementos que son del grupo de sustitución item pero que no sean hipercubos o dimensiones
                foreach (var elementoHacia in arco.ElementoHacia.Where(x => (x.Destino as Concept).Tipo != Concept.Item))
                {
                    //Concepto dimension no es un  xbrldt:dimensionItem
                    ManejadorErrores.ManejarError(CodigosErrorXBRL.DimensionDomainTargetError, null,
                        "2.5.3.1.1.2 Se encontró un arco del tipo " + ArcoDefinicion.DimensionDomainRole +
                        " donde su elemento 'to' no es una declaración de un elemento en el grupo de sustitución xbrli:item y que no sea la declaración de un hipercubo o dimensión : " +
                        "Elemento: " + elementoHacia.Destino.Id + ": Nodo:" + arco.ElementoXML.OuterXml,
                                           XmlSeverityType.Error);
                }

            }
        }
        /// <summary>
        /// Valida la declaración y elementos relacionados de los arcos del tipo All y notAll para la declaración de cubos
        /// </summary>
        private void ValidarArcosHasHypercube()
        {
            foreach (var arco in
                from rol in Taxonomia.RolesTaxonomia
                from linkbase in rol.Value.Linkbases.Where(x => x.Key.Equals(LinkbaseDefinicion.RolDefitionLinkbaseRef))
                from arco in linkbase.Value.ArcosFinales.Where(x => x.ArcoRol.Equals(ArcoDefinicion.HasHypercubeAllRole) || x.ArcoRol.Equals(ArcoDefinicion.HasHypercubeNotAllRole))
                select arco)
            {
                foreach (var elementoDesde in arco.ElementoDesde.Where(x => (x.Destino as Concept).Tipo != Concept.Item  ))
                {
                    //Concepto primario no es un  xbrli:item
                    ManejadorErrores.ManejarError(CodigosErrorXBRL.HasHypercubeSourceError, null, 
                        "2.3.1.1.1 Se encontró un arco del tipo "+ArcoDefinicion.HasHypercubeAllRole +" o del tipo "+ArcoDefinicion.HasHypercubeNotAllRole+
                        " donde su elemento 'from' no es una declaración de un elemento en el grupo de sustitución  xbrli:item o está en el grupo de sustiución " +
                        " xbrldt:hypercubeItem o xbrldt:dimensionItem: "+ "Elemento: " + elementoDesde.Destino.Id + ": Nodo:"+arco.ElementoXML.OuterXml,
                                           XmlSeverityType.Error);
                }

                foreach (var elementoHacia in arco.ElementoHacia.Where(x => (x.Destino as Concept).Tipo != Concept.HypercubeItem))
                {
                    //Concepto hipercubo no es un hipercubo
                    ManejadorErrores.ManejarError(CodigosErrorXBRL.HasHypercubeTargetError, null,
                        "2.3.1.1.2 Se encontró un arco del tipo " + ArcoDefinicion.HasHypercubeAllRole + " o del tipo " + ArcoDefinicion.HasHypercubeNotAllRole +
                        " donde su elemento 'to' no es una declaración de un elemento hipercubo " +
                        "Elemento: " + elementoHacia.Destino.Id + ": Nodo:" + arco.ElementoXML.OuterXml,
                                           XmlSeverityType.Error);
                }

                //El atriburo de xbrldt:contextElement del arco de definición all o notAll
                if((arco as ArcoDefinicion).ElementoContexto == null)
                {
                    ManejadorErrores.ManejarError(CodigosErrorXBRL.HasHypercubeMissingContextElementAttributeError, null,
                        "2.3.1.1.3 Se encontró un arco del tipo " + ArcoDefinicion.HasHypercubeAllRole + " o del tipo " + ArcoDefinicion.HasHypercubeNotAllRole +
                        " donde su atributo requerido xbrldt:contextElement no está presente:" +
                        " Nodo:" + arco.ElementoXML.OuterXml,
                                           XmlSeverityType.Error);
                }

            }
        }

        /// <summary>
        /// Validar la declaración de los atributos y localizadores de los arcos del tipo hypercube-dimension
        /// </summary>
        private void ValidarArcosHypercubeDimension()
        {
            //los arcos hypercube-dimension deben de relacionar conceptos hipercubo con dimension
            foreach (var arco in 
                from rol in Taxonomia.RolesTaxonomia 
                from linkbase in rol.Value.Linkbases.Where(x=>x.Key.Equals(LinkbaseDefinicion.RolDefitionLinkbaseRef)) 
                from arco in linkbase.Value.ArcosFinales.Where(x=>x.ArcoRol.Equals(ArcoDefinicion.HypercubeDimensionRole)) 
                select arco)
            {
                foreach (var elementoDesde in arco.ElementoDesde.Where(x=>!(x.Destino is ConceptHypercubeItem)))
                {
                    //concepto no hipercubo
                    ManejadorErrores.ManejarError(CodigosErrorXBRL.HypercubeDimensionSourceError, null, 
                        "2.2.2.1 Se encontró un arco del tipo "+ArcoDefinicion.HypercubeDimensionRole+" donde su elemento 'from' no es un elemento hipercubo: " +
                                           "Elemento: " + elementoDesde.Destino.Id + ": Nodo:"+arco.ElementoXML.OuterXml,
                                           XmlSeverityType.Error);
                }
                foreach (var elementoHacia in arco.ElementoHacia.Where(x=>!(x.Destino is ConceptDimensionItem)))
                {
                    //concepto no dimension   
                    ManejadorErrores.ManejarError(CodigosErrorXBRL.HypercubeDimensionTargetError, null, 
                        "2.2.2.1 Se encontró un arco del tipo "+ArcoDefinicion.HypercubeDimensionRole+" donde su elemento 'to' no es un elemento dimension: " +
                                           "Elemento: " + elementoHacia.Destino.Id + ": Nodo:"+arco.ElementoXML.OuterXml,
                                           XmlSeverityType.Error);
                }
            }
        
        }
    }
}
