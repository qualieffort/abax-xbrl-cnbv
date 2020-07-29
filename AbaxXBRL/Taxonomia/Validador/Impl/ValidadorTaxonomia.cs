using System; 
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Schema;
using AbaxXBRL.Taxonomia.Linkbases;
using System.Diagnostics;
using AbaxXBRL.Constantes;

namespace AbaxXBRL.Taxonomia.Validador.Impl
{
    /// <summary>
    /// Implementación de un validador de la taxonomía el cual valida que el DTS de la taxonomía cumpla con la especificación XBRL 2.1
    /// <author>José Antonio Huizar Moreno</author>
    /// <version>1.0</version>
    /// </summary>
    public class ValidadorTaxonomia : IValidadorTaxonomia
    {
        #region Miembros de IValidadorTaxonomia

        public IManejadorErroresXBRL ManejadorErrores { get; set; }

        public ITaxonomiaXBRL Taxonomia { get; set; }

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

                ValidarCiclosEnLinkbases();
                ValidarEtiquetasEnPresentationLinkbase();
            }
            catch (Exception e)
            {
                ManejadorErrores.ManejarError(e, "Ocurrió un error al validar la taxonomía: " + e.Message, XmlSeverityType.Error);
            }
        }
        /// <summary>
        /// Valida que las etiquetas especificadas como preferredLabel existan en el linkbase de etiquetas
        /// </summary>
        private void ValidarEtiquetasEnPresentationLinkbase()
        {
            foreach (var tipoRol in Taxonomia.RolesTaxonomia.Values)
            {
                foreach (var linkbase in tipoRol.Linkbases.Where(x=>LinkbasePresentacion.RolePresentacionLinkbaseRef.Equals(x.Value.RoleLinkBaseRef)).ToList())
                {
                    foreach (var arcoPresentacion in linkbase.Value.ArcosFinales)
                    {
                        if(arcoPresentacion is ArcoPresentacion)
                        {
                           if(!String.IsNullOrEmpty((arcoPresentacion as ArcoPresentacion).EtiquetaPreferida))
                           {
                               //Validar que la etiqueta de presentación preferida exista en el label linkbase para el elemento hacia
                               
                               foreach (var elementoLocalizable in arcoPresentacion.ElementoHacia)
                               {
                                   if(!ExisteEtiqueta(elementoLocalizable.Destino as Concept,(arcoPresentacion as ArcoPresentacion).EtiquetaPreferida))
                                   {
                                       ManejadorErrores.ManejarError(null,"5.2.4.2.1 Se encontró un elemento presentationArc con un atributo preferredLabel cuyo rol no existe para el elemento 'hacia': " + 
                                           "Elemento: " + elementoLocalizable.Destino.Id + "; Etiqueta no localizada: " + (arcoPresentacion as ArcoPresentacion).EtiquetaPreferida + " Nodo: "
                                           + arcoPresentacion.ElementoXML.OuterXml,
                                           XmlSeverityType.Error);
                                   }
                               }
                           }
                        }
                    }
                }
            }
        }
        /// <summary>
        /// Busca la etiqueta enviada como paráemtro para el concepto especificado por el parámetro concepto, retorna true si la encuentra, false en otro caso 
        /// </summary>
        /// <param name="concepto">Concepto a buscar</param>
        /// <param name="labelRole">Etiqueta a buscar</param>
        /// <returns></returns>
        private bool ExisteEtiqueta(Concept concepto, string labelRole)
        {
            foreach (var arbolesPorLinkbase in Taxonomia.ConjuntoArbolesLinkbase.Values)
            {
                foreach (var arbolLinkbase in arbolesPorLinkbase.Where(x=>LinkbaseEtiqueta.RoleLabelLinkbaseRef.Equals(x.Key)))
                {
                    if(arbolLinkbase.Value.IndicePorId.ContainsKey(concepto.Id))
                    {
                        var nodoElemento = arbolLinkbase.Value.IndicePorId[concepto.Id];
                        foreach (var nodoEtiqueta in nodoElemento.ConectoresSalientes)
                        {
                            if(nodoEtiqueta.NodoSiguiente.Elemento is Etiqueta)
                            {
                                if(labelRole.Equals((nodoEtiqueta.NodoSiguiente.Elemento as Etiqueta).Rol))
                                {
                                    return true;
                                }
                            }
                        }
                    }
                }
            }
            return false;
        }

        #endregion

        /// <summary>
        /// Valida la existencia de ciclos dentro de los linkbases y asegura que los ciclos existentes sean permitidos por el tipo de arco rol utilizado.
        /// </summary>
        private void ValidarCiclosEnLinkbases()
        {
            foreach (string rolUri in Taxonomia.ConjuntoArbolesLinkbase.Keys)
            {
                foreach (string rolLinkbase in Taxonomia.ConjuntoArbolesLinkbase[rolUri].Keys)
                {
                    ArbolLinkbase arbol = Taxonomia.ConjuntoArbolesLinkbase[rolUri][rolLinkbase];
                    Debug.WriteLine("ValidadorAbaxXbrl: Validando ciclos de rol " + rolUri + " en linkbase " + rolLinkbase);
                    //ImprimirNodo(0, arbol.NodoRaiz, new List<NodoLinkbase>());
                    if (rolLinkbase.Equals(LinkbasePresentacion.RolePresentacionLinkbaseRef))
                    {
                        //Se valida que los arcos parent-child no tengan ciclos dirigidos       
                        if (arbol.TieneCiclosDirigidos(new List<string>(){ArcoPresentacion.RolArcoPresentacion}))
                        {
                            ManejadorErrores.ManejarError(null, "5.2.4.2 Un linkbase de presentación no debe contener ciclos dirigidos.", XmlSeverityType.Error);
                        }
                    }

                    if (rolLinkbase.Equals(LinkbaseDefinicion.RolDefitionLinkbaseRef))
                    {
                        //Se valida que los arcos general-special no tengan ciclos dirigidos       
                        if (arbol.TieneCiclosDirigidos(new List<string>(){ArcoDefinicion.GeneralSpecialRole}))
                        {
                            ManejadorErrores.ManejarError(null, "5.2.6.2.1 Los arcos del tipo http://www.xbrl.org/2003/arcrole/general-special no debe contener ciclos dirigidos.", XmlSeverityType.Error);
                        }
                        //se valida que los ciclos essence-alias no tengan ciclos dirigidos
                        if (arbol.TieneCiclosDirigidos(new List<string>(){ArcoDefinicion.EssenceAliasRole}))
                        {
                            ManejadorErrores.ManejarError(null, "5.2.6.2.2 Los arcos del tipo http://www.xbrl.org/2003/arcrole/essence-alias no debe contener ciclos dirigidos.", XmlSeverityType.Error);
                        }
                    }

                    //Validar los ciclos de los arcos roles personalizados únicamente en los linkbases estándar
                    if (EtiquetasXBRLConstantes.ValidLinkBasesHref.Contains(rolLinkbase))
                    {
                        foreach (ArcRoleType arcoPersonalizado in Taxonomia.ArcoRolesTaxonomia.Values)
                        {
                            
                            if (!String.IsNullOrEmpty(arcoPersonalizado.CiclosPermitidos))
                            {
                                //Se omiten en este validador los arcos dimension-domain y dimension-default
                                if (!ArcosDimensionalesOmitidos(arcoPersonalizado))
                                {
                                    if (TiposCicloArco.Ninguno.Valor.Equals(arcoPersonalizado.CiclosPermitidos))
                                    {
                                        if (arbol.TieneCiclos(new List<string>() { arcoPersonalizado.ArcoRolURI.ToString() }) || arbol.TieneCiclosDirigidos(new List<string>() { arcoPersonalizado.ArcoRolURI.ToString() }))
                                        {
                                            ManejadorErrores.ManejarError(null, "5.1.4.3 Los arcos personalizados del tipo " + arcoPersonalizado.ArcoRolURI.ToString() +
                                                " no debe contener ciclos.", XmlSeverityType.Error);

                                        }
                                    }
                                    else if (TiposCicloArco.NoDirigidos.Valor.Equals(arcoPersonalizado.CiclosPermitidos))
                                    {
                                        if (arbol.TieneCiclosDirigidos(new List<string>() { arcoPersonalizado.ArcoRolURI.ToString() }))
                                        {
                                            ManejadorErrores.ManejarError(null, "5.1.4.3 Los arcos personalizados del tipo " + arcoPersonalizado.ArcoRolURI.ToString() +
                                                " no debe contener ciclos dirigidos.", XmlSeverityType.Error);
                                        }
                                    }
                                }else
                                {
                                    if (TiposCicloArco.Ninguno.Valor.Equals(arcoPersonalizado.CiclosPermitidos))
                                    {
                                        if (arbol.TieneCiclosPorGrafo(new List<string>() { arcoPersonalizado.ArcoRolURI.ToString() }) || arbol.TieneCiclosDirigidos(new List<string>() { arcoPersonalizado.ArcoRolURI.ToString() }))
                                        {
                                            ManejadorErrores.ManejarError(null, "5.1.4.3 Los arcos personalizados del tipo " + arcoPersonalizado.ArcoRolURI.ToString() +
                                                " no debe contener ciclos.", XmlSeverityType.Error);

                                        }
                                    }
                                    else if (TiposCicloArco.NoDirigidos.Valor.Equals(arcoPersonalizado.CiclosPermitidos))
                                    {
                                        if (arbol.TieneCiclosDirigidos(new List<string>() { arcoPersonalizado.ArcoRolURI.ToString() }))
                                        {
                                            ManejadorErrores.ManejarError(null, "5.1.4.3 Los arcos personalizados del tipo " + arcoPersonalizado.ArcoRolURI.ToString() +
                                                " no debe contener ciclos dirigidos.", XmlSeverityType.Error);
                                        }
                                    }
                                }

                                
                            }
                        }
                    }
                    

                }
            }
        }
        /// <summary>
        /// Verifica si el arco es parte de los arcos dimensionales omitidos en la validación de ciclos de la
        /// spec 2.1 ya que se valida en la especificación de dimensiones
        /// </summary>
        /// <param name="arcoPersonalizado">Tipo de arco</param>
        /// <returns></returns>
        private bool ArcosDimensionalesOmitidos(ArcRoleType arcoPersonalizado)
        {
            string rolUri = arcoPersonalizado.ArcoRolURI.ToString();
            if(ArcoDefinicion.DimensionDomainRole.Equals(rolUri) ||
               ArcoDefinicion.DimensionDefaultRole.Equals(rolUri) ||
               ArcoDefinicion.HypercubeDimensionRole.Equals(rolUri))
            {
                return true;
            }
            return false;
        }
        private void ImprimirNodo(int nivel, NodoLinkbase nodo, List<NodoLinkbase> impresos)
        {
            if (nivel > 50) return;
            if (impresos.Count(nod => nod == nodo)>1) return;
            //Imprimir este nodo en el nivel
            int espacios = nivel * 5;
            for (int i = 0; i < espacios; i++)
            {
                Debug.Write(" ");
            }
            
            Debug.WriteLine(nodo.Elemento.Id);
            impresos.Add(nodo);
            foreach (ConectorLinkbase conn in nodo.ConectoresSalientes)
            {
                ImprimirNodo(nivel + 1, conn.NodoSiguiente, impresos);
            }
        }

        public bool TipoCicloArco { get; set; }
    }
}
