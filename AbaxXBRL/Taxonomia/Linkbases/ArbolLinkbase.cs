using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRL.Taxonomia.Linkbases
{
    /// <summary>
    /// Implementación de un árbol n-ario indexado el cual representa el modelo o árbol que forman las conexiones de los nodos de un linkbase XBRL.
    /// <author>José Antonio Huizar Moreno</author>
    /// <version>1.0</version>
    /// </summary>
    public class ArbolLinkbase
    {
        /// <summary>
        /// El nodo raíz del árbol, típicamente contendrá la definición de un ro.
        /// </summary>
        public NodoLinkbase NodoRaiz { get; set; }

        /// <summary>
        /// El índice de los nodos del árbol por medio del identificador del elemento
        /// </summary>
        public IDictionary<string, NodoLinkbase> IndicePorId { get; set; }

        private IList<NodoLinkbase> _listaNodos; 
        /// <summary>
        /// Constructor de la clase <code>ArbolLinkbase</code>
        /// </summary>
        /// <param name="rol">el rol que da origen a este árbol de linkbase</param>
        public ArbolLinkbase(RoleType rol)
        {
            NodoRaiz = new NodoLinkbase();
            NodoRaiz.Elemento = rol;
            
            IndicePorId = new Dictionary<string, NodoLinkbase>();
            NodoRaiz.ConectoresEntrantes = new List<ConectorLinkbase>();
            NodoRaiz.ConectoresSalientes = new List<ConectorLinkbase>();
            _listaNodos = new List<NodoLinkbase>();
        }


        public void ProcesarArcosSecuenciales(IList<Arco> arcos)
        {
            var nodosPorElemento = new Dictionary<ElementoXBRL, NodoLinkbase>();
            foreach (var arco in arcos)
            {
                //Para cada elemento origen
                foreach (ElementoLocalizable elementoDesde in arco.ElementoDesde)
                {
                    if (elementoDesde.Destino == null)
                        continue;
                    NodoLinkbase nodoOrigen = null;
                    if (nodosPorElemento.ContainsKey(elementoDesde.Destino))
                    {
                        nodoOrigen = nodosPorElemento[elementoDesde.Destino];
                    }else
                    {
                        nodoOrigen = CrearNodo(elementoDesde);
                        nodosPorElemento.Add(nodoOrigen.Elemento,nodoOrigen);
                    }
                    //Para cada nodo destino
                    foreach (ElementoLocalizable elementoHacia in arco.ElementoHacia)
                    {
                        if (elementoHacia.Destino == null)
                            continue;
                        NodoLinkbase nodoDestino = null;
                        if (nodosPorElemento.ContainsKey(elementoHacia.Destino))
                        {
                            nodoDestino = nodosPorElemento[elementoHacia.Destino];
                        }
                        else
                        {
                            nodoDestino = CrearNodo(elementoHacia);
                            nodosPorElemento.Add(nodoDestino.Elemento, nodoDestino);
                        }
                        AgregarArco(arco, nodoOrigen, nodoDestino);
                    }
                }
            }
            AjustarNodosHuerfanos();
        }
        

        /// <summary>
        /// Procesa la definición de un arco para que se refleje en la estructura de este arbol.
        /// </summary>
        /// <param name="arco">El arco a procesar</param>
        public void ProcesarArcoRecursivo(Arco arco)
        {
            //Para cada elemento origen
            foreach (ElementoLocalizable elementoDesde in arco.ElementoDesde)
            {
                if (elementoDesde.Destino == null)
                    continue;
                NodoLinkbase nodoOrigen = null;
                IList<NodoLinkbase> recorridoOrigen = new List<NodoLinkbase>();
                if(elementoDesde.Destino.Id != null){
                    //empezar a buscar el nodo destino empezando por el raiz considerando el rol
                    nodoOrigen = BuscarNodo(NodoRaiz,elementoDesde.Destino.Id, arco.ArcoRol, recorridoOrigen);
                }
                if (nodoOrigen == null)
                {
                    nodoOrigen = CrearNodo(elementoDesde);
                }
                

                //Para cada nodo destino
                foreach (ElementoLocalizable elementoHacia in arco.ElementoHacia)
                {

                    NodoLinkbase nodoDestino = null;
                    IList<NodoLinkbase> recorridoDestino = new List<NodoLinkbase>();
                    if (elementoHacia.Destino.Id != null)
                    {
                        //empezar a buscar el nodo destino empezando por el raiz considerando el rol
                        nodoDestino = BuscarNodo(NodoRaiz, elementoHacia.Destino.Id, arco.ArcoRol, recorridoDestino);
                    }
                    if (nodoDestino == null)
                    {
                        nodoDestino = CrearNodo(elementoHacia);
                    }
                   
                    AgregarArco(arco, nodoOrigen, nodoDestino);

                    //Verificar si el arco origen no tiene padres, se debe relacionar con el nodo raíz
                    if (!nodoOrigen.TienePadres())
                    {
                        AgregarArco(null, NodoRaiz, nodoOrigen);
                    }

                    //Si el nodo destino tiene como padre al raíz y no participó en un ciclo entonces quitar su relación
                    if (nodoDestino.EsNodoPadre(NodoRaiz) && !recorridoOrigen.Contains(nodoDestino))
                    {
                        QuitarArco(NodoRaiz, nodoDestino);
                    }
                }
            }
        }
        /// <summary>
        /// Recorre el arbol de nodos buscando un nodo con un elemento que contenga el ID buscado, 
        /// el recorrido se realiza considerando el arco rol de la relación y se van agregando los nodos visitados
        /// a la lista del recorrido, se detiene la busqueda al:
        /// encontrar el nodo buscado
        /// termina el recorrido del arbol
        /// se encuentra un ciclo en la rama
        /// </summary>
        /// <param name="NodoActual">Nodo actualmente visitado</param>
        /// <param name="IDBuscado">IDentificador buscado</param>
        /// <param name="ArcoRol">ArcoRol a considerar</param>
        /// <param name="recorrido">Lista donde se agregan los nodos visitados</param>
        /// <returns>Nodo encontrado, null si no se localiza el nodo</returns>
        private NodoLinkbase BuscarNodo(NodoLinkbase NodoActual, string IDBuscado, string ArcoRol, IList<NodoLinkbase> recorrido)
        {
            //Nodo buscado
            if (NodoActual.Elemento.Id.Equals(IDBuscado))
            {
                return NodoActual;
            }
            
            //Termina esta rama si hay ciclos
            if (recorrido.Contains(NodoActual))
            {
                return null;
            }
            recorrido.Add(NodoActual);
            //Evaluar relaciones
            foreach(ConectorLinkbase conectorNodo in  NodoActual.ConectoresSalientes.Where(con => con.Arco == null || con.Arco.ArcoRol.Equals(ArcoRol))){
                NodoLinkbase nodoEncontrado = BuscarNodo(conectorNodo.NodoSiguiente, IDBuscado, ArcoRol, recorrido);
                if (nodoEncontrado != null)
                {
                    return nodoEncontrado;
                }
            }

            recorrido.Remove(NodoActual);

            return null;
        }
       


        /// <summary>
        /// Elimina los conectores de relación que hay entre los 2 nodos
        /// </summary>
        /// <param name="nodoOrigen">Nodo origen de las relaciones a borrar</param>
        /// <param name="nodoDestino">Nodo destino de las relaciones a borrar</param>
        private void QuitarArco(NodoLinkbase nodoOrigen, NodoLinkbase nodoDestino)
        {
            //Para cada conector saliente del nodo origen
            IList<ConectorLinkbase> conectoresOrigenDestino = nodoOrigen.ConectoresSalientes.Where(conector => conector.NodoSiguiente == nodoDestino).ToList();
            nodoOrigen.ConectoresSalientes = nodoOrigen.ConectoresSalientes.Except(conectoresOrigenDestino).ToList();

            //Por cada conector entrante del destino
            conectoresOrigenDestino = nodoDestino.ConectoresEntrantes.Where(conector => conector.NodoSiguiente == nodoOrigen).ToList();
            nodoDestino.ConectoresEntrantes = nodoDestino.ConectoresEntrantes.Except(conectoresOrigenDestino).ToList();

        }

        /// <summary>
        /// Crea  una relación entre los nodos origen y destino de acuerdo al arco mandado como parámetro.
        /// 
        /// </summary>
        /// <param name="arco">El arco que representa la relación, si el arco es nulo entonces es una relación
        /// no especificada entre 2 nodos, por ejemplo, entre el nodo raíz y el primer hijo</param>
        /// <param name="nodoOrigen">Origen de la relación</param>
        /// <param name="nodoDestino">Destino de la relación</param>
        /// <param name="rol">Rol destino del arco, en caso de que sea importado de otro linkbase rol (caso dimensional)</param>
        private void AgregarArco(Arco arco, NodoLinkbase nodoOrigen, NodoLinkbase nodoDestino,string rol="")
        {
            
            
            
            //Relación entrante del destino
            var conectorEntrante = new ConectorLinkbase(arco, nodoOrigen);
            nodoDestino.ConectoresEntrantes.Add(conectorEntrante);
            //Relación saliente del origen
            var conectorSaliente = new ConectorLinkbase(arco, nodoDestino);
            if(!String.IsNullOrEmpty(rol))
            {
                conectorSaliente.RolOrigen = rol;
            }
            nodoOrigen.ConectoresSalientes.Add(conectorSaliente);
        }
        /// <summary>
        /// Crea un elemento de nodo en base al elemento enviado como parámetro
        /// </summary>
        /// <param name="elementoDesde">Elemento origen para crear el nodo</param>
        /// <returns>El nodo creado</returns>
        private NodoLinkbase CrearNodo(ElementoLocalizable elementoDesde)
        {
            //Hacer una segunda inspección por ID para evitar que no se haya encontrado un nodo buscando por arco rol
            if (elementoDesde.Destino.Id !=null && IndicePorId.ContainsKey(elementoDesde.Destino.Id))
            {
                return IndicePorId[elementoDesde.Destino.Id];
            }

            var nodoFinal = new NodoLinkbase();
            nodoFinal.Elemento = elementoDesde.Destino;
            nodoFinal.ConectoresEntrantes = new List<ConectorLinkbase>();
            nodoFinal.ConectoresSalientes = new List<ConectorLinkbase>();
            //Si el nodo creado corresponde a un concepto entonces agregarlo al índice con su ID, de lo contrario, generar uno temporal
            if ((elementoDesde.Destino is ConceptTuple || elementoDesde.Destino is ConceptItem) && elementoDesde.Destino.Id != null)
            {
                IndicePorId.Add(elementoDesde.Destino.Id, nodoFinal);
               
            }
            else
            {
                String id = "E" + Guid.NewGuid().ToString();
                if (nodoFinal.Elemento.Id == null)
                {
                    nodoFinal.Elemento.Id = id;
                }
                IndicePorId.Add(id, nodoFinal);
            }
            _listaNodos.Add(nodoFinal);
            return nodoFinal;
        }

        /// <summary>
        /// Valida si existen ciclos dirigidos en el grafo representado por este árbol considerando
        /// el rol del arco rol que crea la relación entre 2 nodos.
        /// </summary>
        /// <returns><code>true</code> si existen ciclos dirigidos. <code>false</code> en cualquier otro caso.</returns>
        public bool TieneCiclosDirigidos(List<String> arcoRol)
        {
            DetectorDeCiclosDirigidos detector = new DetectorDeCiclosDirigidos();
            IList<IList<NodoLinkbase>> componentes = detector.DetectarCiclosDirigidos(this,arcoRol);
            return componentes.Count > 0;
        }
        /// <summary>
        /// Valida si existen ciclos dirigidos en el grafo representado por los nodos salientes del nodo raíz
        /// considerando el rol del arco rol que crea la relación entre 2 nodos.
        /// </summary>
        /// <returns><code>true</code> si existen ciclos dirigidos. <code>false</code> en cualquier otro caso.</returns>
        public bool TieneCiclosDirigidosPorGrafo(List<String> arcoRol)
        {
            foreach (var conn in NodoRaiz.ConectoresSalientes)
            {
                /*DetectorDeCiclosDirigidos detector = new DetectorDeCiclosDirigidos();
                IList<IList<NodoLinkbase>> componentes = detector.DetectarCiclosDirigidos(this, arcoRol);
                return componentes.Count > 0;*/
            }
            return false;
        }

        /// <summary>
        /// Valida si existen ciclos dirigidos o no dirigidos en el grafo representado por este árbol.
        /// </summary>
        /// <returns><code>true</code> si existen ciclos dirigidos o no dirigidos. <code>false</code> en cualquier otro caso.</returns>
        public bool TieneCiclos(List<String> arcoRol)
        {
           
            DetectorDeCiclos detector = new DetectorDeCiclos();
            if(detector.ContieneCiclos(NodoRaiz,arcoRol))
            {
                    return true;
            }
            return false;
        }
        /// <summary>
        /// Valida si existen ciclos dirigidos o no dirifidos por cada grafo a partir del nodo raíz del árbol
        /// </summary>
        /// <param name="arcoRol">Tipo de arcos a validar</param>
        /// <returns>true si hay ciclos en algún grafo que parte del nodo raíz</returns>
        public bool TieneCiclosPorGrafo(List<string> arcoRol)
        {
            //Detección de ciclos por cada inicio de grafo a partir del nodo raíz
            foreach (var conn in NodoRaiz.ConectoresSalientes)
            {
                DetectorDeCiclos detector = new DetectorDeCiclos();
                if (detector.ContieneCiclos(conn.NodoSiguiente, arcoRol))
                {
                    return true;
                }
            }
            return false;
        }

        /// <summary>
        /// Implementación del algoritmo DFS el cual permite detectar ciclos en un grafo.
        /// <author>José Antonio Huizar Moreno</author>
        /// <version>1.0</version>
        /// </summary>
        private class DetectorDeCiclos
        {
            /// <summary>
            /// La lista de los nodos que ya han sido visitados
            /// </summary>
            private IList<ElementoXBRL> NodosVisitados = new List<ElementoXBRL>();

            /// <summary>
            /// Valida si este grafo contiene ciclos dirigidos o no dirigidos.
            /// </summary>
            /// <param name="nodo">el nodo a partir del cual se comenzará la validación.</param>
            /// <param name="arcoRol">El tipo de arco rol por el que se deben de filtrar las relaciones a evaluar</param>
            /// <returns><code>true</code> si contiene al menos un ciclo dirigido o no dirigido. <code>false</code> en cualquier otro caso.</returns>
            public bool ContieneCiclos(NodoLinkbase nodo,List<string> arcoRol)
            {
                bool tieneCiclos = false;
                if (!NodosVisitados.Contains(nodo.Elemento))
                {
                    NodosVisitados.Add(nodo.Elemento);
                    //Se verifica si el conector que lleva al siguiente nodo es válido, es parte de los roles que se están evaluando
                    //y si el arco es usable en la especificación de dimensiones
                    foreach (ConectorLinkbase conector in nodo.ConectoresSalientes.Where(con => con.Arco==null || arcoRol.Contains(con.Arco.ArcoRol)))
                    {
                        if (conector.Arco is ArcoDefinicion && (conector.Arco as ArcoDefinicion).Usable != null && !(conector.Arco as ArcoDefinicion).Usable.Value)
                        {
                            continue;
                        }
                        tieneCiclos = ContieneCiclos(conector.NodoSiguiente, arcoRol);
                        if (tieneCiclos) break;
                    }
                }
                else
                {
                    tieneCiclos = true;
                }
                return tieneCiclos;
            }
        }

        /// <summary>
        /// Implementación del algoritmo de Tarjan para detectar ciclos dirigidos.
        /// <author>José Antonio Huizar Moreno</author>
        /// <version>1.0</version>
        /// </summary>
        public class DetectorDeCiclosDirigidos
        {
            /// <summary>
            /// La lista de listas con los nodos que conforman ciclos dirigidos.
            /// </summary>
            private IList<IList<NodoLinkbase>> ComponentesConectadosFuertemente;

            /// <summary>
            /// Contiene la pila de nodos visitados
            /// </summary>
            private Stack<NodoLinkbase> PilaNodosVisitados;

            /// <summary>
            /// El índice que será utilizado para determinar los ciclos
            /// </summary>
            private int Indice;

            /// <summary>
            /// Implementación del algoritmo de Tarjan para detectar ciclos dirigidos en un grafo.
            /// </summary>
            /// <returns>Una lista con las listas de nodos que conforman ciclos dirigidos en el grafo.</returns>
            /// <param name="arcoRol">URI del arco rol a considerar para evaluar los ciclos</param>
            public IList<IList<NodoLinkbase>> DetectarCiclosDirigidos(ArbolLinkbase arbol,List<string> arcoRol)
            {
                ComponentesConectadosFuertemente = new List<IList<NodoLinkbase>>();
                IEnumerable<NodoLinkbase> nodosEntrada = arbol.IndicePorId.Values.Where(nod => ParticipaEnArcoRol(nod, arcoRol));
                foreach (NodoLinkbase nodoEntrada in nodosEntrada)
                {
                    Indice = 0;
                    PilaNodosVisitados = new Stack<NodoLinkbase>();
                    IEnumerable<NodoLinkbase> nodosAEvaluar = arbol.IndicePorId.Values.Where(nod => ParticipaEnArcoRol(nod, arcoRol));
                    foreach (NodoLinkbase nodo in nodosAEvaluar)
                    {
                        nodo.Indice = -1;
                        nodo.IndiceBajo = -1;
                    }
                    BuscarElementosFuertementeConectados(nodoEntrada, arcoRol);
                }
                return ComponentesConectadosFuertemente;
            }

            /// <summary>
            /// Evalúa si el nodo tiene conectores entrantes o salientes donde participe en una relación
            /// con el arco rol enviado como parámetro
            /// </summary>
            /// <param name="nod">Nodo a evaluar</param>
            /// <returns>True si participa en alguna relación con el arco rol enviado, false en otro caso</returns>
            private bool ParticipaEnArcoRol(NodoLinkbase nod, List<string> arcoRol)
            {
                
                //Conectores salientes
                if (nod.ConectoresSalientes != null && nod.ConectoresSalientes.Count(con => con.Arco != null && arcoRol.Contains(con.Arco.ArcoRol)) > 0)
                {
                    return true;
                }
                if (nod.ConectoresEntrantes != null && nod.ConectoresEntrantes.Count(con => con.Arco != null && arcoRol.Contains(con.Arco.ArcoRol)) > 0)
                {
                    return true;
                }
                return false;
            }

            /// <summary>
            /// Itera los nodos hijos del nodo pasado como parámetro en busca de ciclos dirigidos como parte del algorimo de Tarjan.
            /// </summary>
            /// <param name="nodo">el nodo que debe ser consultado</param>
            /// <param name="arcoRol">URI del arco rol a considerar para evaluar los ciclos</param>
            private void BuscarElementosFuertementeConectados(NodoLinkbase nodo, List<string> arcoRol)
            {
                bool cicloASiMismo = false;
                nodo.Indice = Indice;
                nodo.IndiceBajo = Indice;
                Indice++;
                PilaNodosVisitados.Push(nodo);

                if (nodo.ConectoresSalientes != null && nodo.ConectoresSalientes.Count > 0)
                {
                    //Evaluar relaciones representadas por arcos con el rol enviado como parámetro

                    foreach (ConectorLinkbase conector in nodo.ConectoresSalientes.Where(con => con.Arco==null || arcoRol.Contains(con.Arco.ArcoRol)))
                    {
                        if (conector.NodoSiguiente.Indice < 0)
                        {
                            BuscarElementosFuertementeConectados(conector.NodoSiguiente, arcoRol);
                            nodo.IndiceBajo = Math.Min(nodo.IndiceBajo, conector.NodoSiguiente.IndiceBajo);
                        }
                        else if (PilaNodosVisitados.Contains(conector.NodoSiguiente))
                        {
                            nodo.IndiceBajo = Math.Min(nodo.IndiceBajo, conector.NodoSiguiente.IndiceBajo);
                            if (conector.NodoSiguiente.Equals(nodo))
                            {
                                cicloASiMismo = true;
                            }
                        }
                    }
                }

                if (nodo.IndiceBajo == nodo.Indice)
                {
                    IList<NodoLinkbase> ComponenteFuertementeConectado = new List<NodoLinkbase>();
                    NodoLinkbase otroNodo;
                    do
                    {
                        otroNodo = PilaNodosVisitados.Pop();
                        if (ComponenteFuertementeConectado.Count > 0 || !otroNodo.Equals(nodo) || cicloASiMismo)
                        {
                            ComponenteFuertementeConectado.Add(otroNodo);
                        }
                    }
                    while (nodo != otroNodo);
                    if (ComponenteFuertementeConectado.Count > 0)
                    {
                        ComponentesConectadosFuertemente.Add(ComponenteFuertementeConectado);
                    }
                }
            }
        }
        /// <summary>
        /// Obtiene en forma de lista el conjunto de nodos que participan en el arbol de relaciones que inicia con el nodo orgien considerando
        /// los arcos roles enviados como parámetro.
        /// El nodo origen no se considera parte de la lista resultante
        /// </summary>
        /// <param name="nodoOrigen">Nodo origen de búsqueda</param>
        /// <param name="arcosAConsiderar">Arcos a considerar</param>
        /// <returns></returns>
        public static IList<NodoLinkbase> ObtenerListaNodosEnRelacion(NodoLinkbase nodoOrigen,IList<string> arcosAConsiderar)
        {
            IList<NodoLinkbase> resultado = new List<NodoLinkbase>();
            BuscarListarNodo(nodoOrigen, arcosAConsiderar, resultado);
            return resultado;
        }

        private static void BuscarListarNodo(NodoLinkbase nodoOrigen, IList<string> arcosAConsiderar, IList<NodoLinkbase> resultado)
        {
            foreach (var conectorSiguiente in nodoOrigen.ConectoresSalientes.Where(x=>x.Arco!=null && arcosAConsiderar.Contains(x.Arco.ArcoRol)))
            {
                if(!resultado.Contains(conectorSiguiente.NodoSiguiente))
                {
                    resultado.Add(conectorSiguiente.NodoSiguiente);
                    BuscarListarNodo(conectorSiguiente.NodoSiguiente,arcosAConsiderar,resultado);
                }
            }
        }
        /// <summary>
        /// Importa los arcos que han sido recuperado de otro role y los agrega a las relaciones del árbol únicamente a partir
        /// del conector inicial enviado como parámetro.
        /// Todos los arcos generan nuevos nodos para no interferir con las relaciones ya existentes
        /// </summary>
        /// <param name="conector">Conector inicial</param>
        /// <param name="arcosConsecutivos">Arcos a crear</param>
        public void ImportarArcos(ConectorLinkbase conector, IDictionary<Arco,String> arcosConsecutivos)
        {
            var nodosCreados = new List<NodoLinkbase>();
            nodosCreados.Add(conector.NodoSiguiente);
            //Si el nodo siguiente del conector no está en el inventario, agregar
            if(!IndicePorId.Values.Contains(conector.NodoSiguiente))
            {
                if(IndicePorId.ContainsKey(conector.NodoSiguiente.Elemento.Id))
                {
                    String id = "E" + Guid.NewGuid().ToString();
                    IndicePorId.Add(conector.NodoSiguiente.Elemento.Id + "_" + id, conector.NodoSiguiente);
                }
            }
            var arcosPendientes = arcosConsecutivos.ToDictionary(keyVal => keyVal.Key, keyVal => keyVal.Value);
            while(arcosPendientes.Count>0)
            {
                Arco arcoUsado = null;
                //buscar en los arcos pendientes el enlace entre el nodo siguiente y el arco
                foreach (var arcoActual in arcosPendientes)
                {
                    
                    //para este arco, buscar que nodo le corresponde
                    foreach (var elementoDesde in arcoActual.Key.ElementoDesde)
                    {
                        var nodoOrigenArco = nodosCreados.FirstOrDefault(x => x.Elemento == elementoDesde.Destino);
                        if (nodoOrigenArco != null)
                        {
                            //Nodo localizado, crear arco
                            foreach (var elementoHacia in arcoActual.Key.ElementoHacia)
                            {
                                NodoLinkbase nodoSiguiente = new NodoLinkbase();
                                nodosCreados.Add(nodoSiguiente);
                                nodoSiguiente.Elemento = elementoHacia.Destino;
                                nodoSiguiente.ConectoresEntrantes = new List<ConectorLinkbase>();
                                nodoSiguiente.ConectoresSalientes = new List<ConectorLinkbase>();
                                //Si el nodo creado corresponde a un concepto entonces agregarlo al índice con su ID, de lo contrario, generar uno temporal
                                if (elementoHacia.Destino is ConceptTuple || elementoHacia.Destino is ConceptItem)
                                {
                                    if (IndicePorId.ContainsKey(elementoHacia.Destino.Id))
                                    {
                                        String id = "E" + Guid.NewGuid().ToString();
                                        IndicePorId.Add(elementoHacia.Destino.Id + "_" + id, nodoSiguiente);
                                    }
                                    else
                                    {
                                        IndicePorId.Add(elementoHacia.Destino.Id, nodoSiguiente);
                                    }
                                }
                                else
                                {
                                    String id = "E" + Guid.NewGuid().ToString();
                                    nodoSiguiente.Elemento.Id = id;
                                    IndicePorId.Add(id, nodoSiguiente);
                                }
                                AgregarArco(arcoActual.Key, nodoOrigenArco, nodoSiguiente,arcoActual.Value);
                                arcoUsado = arcoActual.Key;
                            }
                        }
                    }
                    if(arcoUsado != null)
                    {
                        break;
                    }
                }
                if(arcoUsado!=null)
                {
                    arcosPendientes.Remove(arcoUsado);
                }
            }
            //Verificar los nodos que no tienen elementos entrantes, apuntarlos al raíz
            VerificarElementosHuerfanos();
        }
        /// <summary>
        /// Recorre el índice de elementos en busca de nodos sin padre para crear una relación con el nodo raíz
        /// </summary>
        private void VerificarElementosHuerfanos()
        {
            var remover = new List<string>();
            foreach (var nodoHuerfano in IndicePorId.Where(x=>x.Value.ConectoresEntrantes == null || x.Value.ConectoresEntrantes.Count == 0))
            {
                if (nodoHuerfano.Value.ConectoresSalientes == null || nodoHuerfano.Value.ConectoresSalientes.Count == 0)
                {
                    remover.Add(nodoHuerfano.Key);
                }else
                {
                    AgregarArco(null, NodoRaiz, nodoHuerfano.Value);
                }
                
            }
            foreach (var keyRm in remover)
            {
                IndicePorId.Remove(keyRm);
            }
        }
        /// <summary>
        /// Ajusta los nodos que no tienen padres, los asocia al raíz
        /// </summary>
        public void AjustarNodosHuerfanos()
        {
            foreach (var nodo in _listaNodos.Where(x=>x.ConectoresEntrantes == null  || x.ConectoresEntrantes.Count == 0))
            {
                AgregarArco(null, NodoRaiz, nodo);
            }
        }
    }
}
