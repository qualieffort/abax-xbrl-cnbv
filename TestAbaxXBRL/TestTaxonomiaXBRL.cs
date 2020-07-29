using System;
using System.IO;
using AbaxXBRL.Constantes;
using AbaxXBRL.Taxonomia.Validador;
using AbaxXBRL.Taxonomia.Validador.Impl;
using AbaxXBRLCore.Common.Dtos;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using AbaxXBRL.Taxonomia;
using AbaxXBRL.Taxonomia.Impl;
using AbaxXBRL.Taxonomia.Linkbases;
using System.Diagnostics;
using System.Collections.Generic;
using System.Xml;
using AbaxXBRLCore.Viewer.Application.Service.Impl;
using AbaxXBRLCore.Services.Implementation;
using AbaxXBRLCore.Viewer.Application.Dto;
using AbaxXBRLCore.Viewer.Application.Dto.Angular;

namespace TestAbaxXBRL
{

    [TestClass]
    public class TestTaxonomiaXBRL
    {
        [TestMethod]
        public void TestCargaTaxonomia()
        {
            TaxonomiaXBRL taxonomiaXBRL = new TaxonomiaXBRL();

            IManejadorErroresXBRL manejadorErrores = new ManejadorErroresCargaTaxonomia();

            taxonomiaXBRL.ManejadorErrores = manejadorErrores;
            //Boolean correcto = taxonomiaXBRL.ProcesarDefinicionDeEsquemaRef("C:\\workspaces\\memoria_xbrl\\Ejercicio Práctico\\taxonomia1-2012-07-01-core.xsd");
            //Boolean correcto = taxonomiaXBRL.ProcesarDefinicionDeEsquemaRef("C:\\dotNet\\AbaxXBRL_1\\AbaxXBRL\\XBRL-CONF-CR5-2012-01-24\\Common\\100-schema\\155-TypeExtension-Valid.xsd");
            taxonomiaXBRL.ProcesarDefinicionDeEsquema(@"C:\taxonomy\mx-ifrs-2014-12-05\full_ifrs_mc_mx_ics_entry_point_2014-12-05.xsd");

            taxonomiaXBRL.CrearArbolDeRelaciones();

            XbrlViewerService serv = new XbrlViewerService();

            var taxDt = serv.CrearTaxonomiaAPartirDeDefinicionXbrl(taxonomiaXBRL);

            var docServ = new DocumentoInstanciaService();

            docServ.PerteneceConceptoAHipercuboEnRol("ifrs-full_ProfitLoss",taxDt,"http://bmv.com.mx/role/ifrs/ias_1_2014-03-05_role-610000");


            foreach (RoleType tipoRol in taxonomiaXBRL.RolesTaxonomia.Values)
            {

                ArbolLinkbase arbolPresentation = taxonomiaXBRL.ConjuntoArbolesLinkbase[tipoRol.RolURI.ToString()][LinkbasePresentacion.RolePresentacionLinkbaseRef];

                NodoLinkbase nodo = arbolPresentation.NodoRaiz;

              
                ImprimirNodo(0,nodo);

                Debug.WriteLine("________________________________________");
                if (tipoRol.Linkbases.ContainsKey(LinkbaseReferencia.RoleReferenceLinkbaseRef))
                {
                    LinkbaseReferencia linkbase = (LinkbaseReferencia)tipoRol.Linkbases[LinkbaseReferencia.RoleReferenceLinkbaseRef];
                    foreach (Arco arco in linkbase.Arcos)
                    {
                        foreach (ElementoLocalizable elementoDesde in arco.ElementoDesde)
                        {
                            Concept conceptoDesde = (Concept)((Localizador)elementoDesde).Destino;
                            foreach (ElementoLocalizable elementoHacia in arco.ElementoHacia)
                            {
                                Referencia referencia = (Referencia)elementoHacia.Destino;
                                Debug.WriteLine(conceptoDesde.Elemento.Id + " Referencias: ");
                                 foreach (ReferenciaParte refPart in referencia.PartesReferencia)
                                {
                                    Debug.WriteLine("\tReferencia:" + refPart.NombreLocal + " : " + refPart.Valor);
                                }
                            }
                        }
                    }
                }

                Debug.WriteLine("________________________________________");
                if (tipoRol.Linkbases.ContainsKey(LinkbaseCalculo.RoleCalculoLinkbaseRef))
                {
                    LinkbaseCalculo linkbase = (LinkbaseCalculo)tipoRol.Linkbases[LinkbaseCalculo.RoleCalculoLinkbaseRef];
                    //Escribir los elementos que no tienen padre
                    Debug.WriteLine(tipoRol.Id);
                    IDictionary<string, string> impresos = new Dictionary<string, string>();
                    foreach (ArcoCalculo arco in linkbase.Arcos)
                    {
                        foreach (ElementoLocalizable elementoDesde in arco.ElementoDesde)
                        {
                            Concept conceptoDesde = (Concept)elementoDesde.Destino;
                            if (!tienePadre(conceptoDesde, linkbase.Arcos))
                            {
                                if (!impresos.ContainsKey(conceptoDesde.Elemento.Id))
                                {
                                    Debug.WriteLine(conceptoDesde.Elemento.Id);
                                    imprimirHijosCalculo(1, conceptoDesde.Elemento.Id, linkbase.Arcos, (LinkbaseCalculo)tipoRol.Linkbases[LinkbaseCalculo.RoleCalculoLinkbaseRef]);
                                    impresos[conceptoDesde.Elemento.Id] = conceptoDesde.Elemento.Id;
                                }
                            }
                        }


                    }
                }

            }
            
            Assert.IsTrue(true);
        }

        [TestMethod]
        public void TestCargaInstancia()
        {

            TaxonomiaXBRL taxonomiaXBRL = new TaxonomiaXBRL();

            IManejadorErroresXBRL manejadorErroresTax = new ManejadorErroresCargaTaxonomia();
            Debug.WriteLine(DateTime.Now);
            taxonomiaXBRL.ManejadorErrores = manejadorErroresTax;
            taxonomiaXBRL.ProcesarDefinicionDeEsquema("http://emisnet.bmv.com.mx/taxonomy/mx-ifrs-ics-2012-04-01/All/ifrs-mx-ics-entryPoint-all-2012-04-01.xsd");
            taxonomiaXBRL.CrearArbolDeRelaciones();
            taxonomiaXBRL.CrearRelacionesDimensionales();
            Debug.WriteLine(DateTime.Now);
            DocumentoInstanciaXBRL inst = new DocumentoInstanciaXBRL();

            
            ManejadorErroresCargaTaxonomia manejadorErrores = new ManejadorErroresCargaTaxonomia();
            IGrupoValidadoresTaxonomia valTax = new GrupoValidadoresTaxonomia();
            valTax.ManejadorErrores = manejadorErroresTax;
            valTax.Taxonomia = taxonomiaXBRL;
            valTax.AgregarValidador(new ValidadorTaxonomia());
            valTax.AgregarValidador(new ValidadorTaxonomiaDinemsional());
            valTax.ValidarDocumento();


            inst.Taxonomia = taxonomiaXBRL;
            inst.ManejadorErrores = manejadorErrores;

            FileStream archivo = new FileStream("C:\\workspace_abax\\AbaxXBRL\\ifrsxbrl_AC_2014-2.xbrl", FileMode.Open);

            inst.Cargar(archivo);

            IGrupoValidadoresTaxonomia grupoValidadores = new GrupoValidadoresTaxonomia();
            IValidadorDocumentoInstancia validador = new ValidadorDocumentoInstancia();
            grupoValidadores.ManejadorErrores = inst.ManejadorErrores;
            grupoValidadores.DocumentoInstancia = inst;
            grupoValidadores.AgregarValidador(validador);
            validador = new ValidadorDimensionesDocumentoInstancia();
            validador.DocumentoInstancia = inst;
            grupoValidadores.AgregarValidador(validador);
            grupoValidadores.ValidarDocumento();

            FactItem hechoItem = null;
            //carga de contextos y hechos
            var instanciaDto = new AbaxXBRLCore.Viewer.Application.Dto.Angular.DocumentoInstanciaDto();
            if (manejadorErrores.PuedeContinuar())
            {

                foreach (Fact hecho in inst.Hechos)
                {
                    //Verificar si el contexto existe
                    if (hecho is FactItem)
                    {
                        hechoItem = (FactItem)hecho;
                        
                    }
                }

            }

            Assert.IsTrue(true);
        }
        
        /// <summary>
        /// Obtiene el miembro de la dimension del escenario
        /// </summary>
        /// <param name="xmlNode"></param>
        /// <returns></returns>
        private string ObtenerDimensionMember(System.Xml.XmlNode escenario)
        {
            foreach (XmlNode nodo in escenario.ChildNodes)
            {
                if (EspacioNombresConstantes.DimensionInstanceNamespace.Equals(nodo.NamespaceURI) && EtiquetasXBRLConstantes.ExplicitMemberElement.Equals(nodo.LocalName))
                {
                    return nodo.InnerText;
                }
            }
            return null;
        }
        

        private void ImprimirNodo(int nivel, NodoLinkbase nodo)
        {
            //Imprimir este nodo en el nivel
            int espacios = nivel * 5;
            for (int i = 0; i < espacios; i++)
            {
                Debug.Write(" ");
            }
            Debug.WriteLine(nodo.Elemento.Id);
            foreach(ConectorLinkbase conn in nodo.ConectoresSalientes){
                ImprimirNodo(nivel + 1, conn.NodoSiguiente);
            }
        }
        /// <summary>
        /// Busca las etiquetas de un concepto
        /// </summary>
        /// <param name="xmlSchemaElement"></param>
        /// <param name="linkbase"></param>
        /// <returns></returns>
        private string etiquetas(Concept concepto, LinkbaseEtiqueta linkbase)
        {
            String etiquetasFinales = "";
            //Verificar todos los elementos desde donde aparezca el concepto
            ArcoEtiqueta arcoEtiqueta = null;
            foreach (Arco arcoGen in linkbase.Arcos)
            {
                arcoEtiqueta = (ArcoEtiqueta)arcoGen;
                Localizador loc = null;
                foreach(ElementoLocalizable elemento in arcoEtiqueta.ElementoDesde){
                    loc = (Localizador)elemento;
                    if (loc.Destino.Elemento.Id.Equals(concepto.Elemento.Id))
                    {
                        //Concatenar las etiquetas disponibles
                      
                        foreach(ElementoLocalizable elementoRecurso in arcoEtiqueta.ElementoHacia)
                        {
                            etiquetasFinales += ((Etiqueta)elementoRecurso.Destino).Lenguaje + " : " + ((Etiqueta)elementoRecurso.Destino).Rol + " : " + ((Etiqueta)elementoRecurso.Destino).Valor + " ";
                        }
                    }
                }


            }

            return etiquetasFinales;

        }
        /// <summary>
        /// Imprime recursivamente los hijos de un padre
        /// </summary>
        /// <param name="nivel"></param>
        /// <param name="idPadre"></param>
        /// <param name="listaArcos"></param>
        private void imprimirHijos(int nivel, string idPadre, System.Collections.Generic.IList<Arco> listaArcos, LinkbaseEtiqueta linkbase)
        {
           
            foreach (ArcoPresentacion arco in listaArcos)
            {    //Imprime hijos con el nivel
                foreach (ElementoLocalizable conceptoLoc in arco.ElementoDesde)
                {
                    Concept concepto = (Concept)conceptoLoc.Destino;
                    if (concepto.Elemento.Id.Equals(idPadre))
                    {
                        for (int i = 0; i < nivel; i++)
                        {
                            Debug.Write("\t");
                        }
                        foreach (ElementoLocalizable conceptohaciaLoc in arco.ElementoHacia)
                        {
                            Concept conceptohacia = (Concept)conceptohaciaLoc.Destino;
                            Debug.WriteLine(" " + conceptohacia.Elemento.Id + " - " + etiquetas(conceptohacia, linkbase));
                            imprimirHijos(nivel + 1, conceptohacia.Elemento.Id, listaArcos,linkbase);
                        }
                        
                    }
                }
                
            }
        }

        /// <summary>
        /// Imprime recursivamente los hijos de un padre en el arco de calculo
        /// </summary>
        /// <param name="nivel"></param>
        /// <param name="idPadre"></param>
        /// <param name="listaArcos"></param>
        private void imprimirHijosCalculo(int nivel, string idPadre, System.Collections.Generic.IList<Arco> listaArcos, LinkbaseCalculo linkbase)
        {

            foreach (ArcoCalculo arco in listaArcos)
            {    //Imprime hijos con el nivel
                foreach (ElementoLocalizable conceptoLoc in arco.ElementoDesde)
                {
                    Concept concepto = (Concept)conceptoLoc.Destino;
                    if (concepto.Elemento.Id.Equals(idPadre))
                    {
                        for (int i = 0; i < nivel; i++)
                        {
                            Debug.Write("\t");
                        }
                        foreach (ElementoLocalizable conceptohaciaLoc in arco.ElementoHacia)
                        {
                            Concept conceptohacia = (Concept)conceptohaciaLoc.Destino;
                            Debug.WriteLine(((arco.Peso < 0) ? "" : "+") + arco.Peso + conceptohacia.Elemento.Id);
                            imprimirHijosCalculo(nivel + 1, conceptohacia.Elemento.Id, listaArcos, linkbase);
                        }

                    }
                }

            }
        }

       
        /// <summary>
        /// Verifica si este concepto tiene relaciones con algún padre
        /// </summary>
        /// <param name="concepto"></param>
        /// <param name="list"></param>
        /// <returns></returns>
        private bool tienePadre(Concept concepto, System.Collections.Generic.IList<Arco> list)
        {
           
                foreach (Arco arco in list)
                {
                    foreach (ElementoLocalizable conceptoHastaLoc in arco.ElementoHacia)
                    {
                        Concept conceptoHasta = (Concept)conceptoHastaLoc.Destino;
                        if (conceptoHasta.Elemento.Id.Equals(concepto.Elemento.Id))
                        {
                            //Es hijo de alguien
                            return true;
                        }
                    }
                    
                }
                
            
            return false;
            
        }

        public void TestPresentarEstructuraTaxoPresentacion()
        {
            TaxonomiaXBRL taxonomiaXBRL = new TaxonomiaXBRL();

            IManejadorErroresXBRL manejadorErrores = new ManejadorErroresCargaTaxonomia();

            taxonomiaXBRL.ManejadorErrores = manejadorErrores;
            //Boolean correcto = taxonomiaXBRL.ProcesarDefinicionDeEsquemaRef("C:\\workspaces\\memoria_xbrl\\Ejercicio Práctico\\taxonomia1-2012-07-01-core.xsd");
            //Boolean correcto = taxonomiaXBRL.ProcesarDefinicionDeEsquemaRef("C:\\dotNet\\AbaxXBRL_1\\AbaxXBRL\\XBRL-CONF-CR5-2012-01-24\\Common\\100-schema\\155-TypeExtension-Valid.xsd");
            taxonomiaXBRL.ProcesarDefinicionDeEsquema(@"http://emisnet.bmv.com.mx/taxonomy/mx-ifrs-ics-2012-04-01/All/ifrs-mx-ics-entryPoint-all-2012-04-01.xsd");

            taxonomiaXBRL.CrearArbolDeRelaciones();

            XbrlViewerService serv = new XbrlViewerService();

            var taxDt = serv.CrearTaxonomiaAPartirDeDefinicionXbrl(taxonomiaXBRL);

            foreach(var rolDto in taxDt.RolesPresentacion)
            {
                Debug.WriteLine(rolDto.Nombre);
                foreach(var estructura in rolDto.Estructuras)
                {

                    ImprimirEstructura(estructura, 0, taxDt);
                }
            } 
        }


        private void ImprimirEstructura(AbaxXBRLCore.Viewer.Application.Dto.EstructuraFormatoDto estructura, int nivel, AbaxXBRLCore.Viewer.Application.Dto.TaxonomiaDto taxDt)
        {
            Debug.Write(estructura.IdConcepto + "\t");
            for (var i = 0; i < nivel*5; i++)
            {
                Debug.Write(" ");
            }
            Debug.WriteLine(ObtenerEtiqueta(estructura,taxDt));
            if (estructura.SubEstructuras != null)
            {
                foreach (var subEstructur in estructura.SubEstructuras)
                {
                    ImprimirEstructura(subEstructur, nivel + 1, taxDt);
                }
            }
            
        }

        private string ObtenerEtiqueta(AbaxXBRLCore.Viewer.Application.Dto.EstructuraFormatoDto estructura, AbaxXBRLCore.Viewer.Application.Dto.TaxonomiaDto taxDt)
        {
            var concepto = taxDt.ConceptosPorId[estructura.IdConcepto];
            var rol = String.IsNullOrEmpty(estructura.RolEtiquetaPreferido) ? Etiqueta.RolEtiqueta : estructura.RolEtiquetaPreferido;
            return concepto.Etiquetas["es"][rol].Valor;
        }
    }
}
