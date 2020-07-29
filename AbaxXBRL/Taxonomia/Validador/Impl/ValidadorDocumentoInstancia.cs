using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using AbaxXBRL.Constantes;
using System.Globalization;
using AbaxXBRL.Taxonomia.Linkbases;
using AbaxXBRL.Util;
using System.Xml;

namespace AbaxXBRL.Taxonomia.Validador.Impl
{
    /// <summary>
    /// Implementación del mecanismo de validación de la estructura y contenido de un documento instancia.
    /// <author>José Antonio Huizar Moreno</author>
    /// <version>1.0</version>
    /// </summary>
    public class ValidadorDocumentoInstancia : IValidadorDocumentoInstancia
    {

      

        public IDocumentoInstanciaXBRL DocumentoInstancia
        {
            get;
            set;
        }


        public IManejadorErroresXBRL ManejadorErrores
        {
            get;
            set;
        }

        public void ValidarDocumento()
        {
            ValidarIdentificadores();
            ValidarContextosDeInstancia();
            ValidarContextosDeHechosReportados();
            ValidarUnidadesDeHechosReportados();
            ValidarConsistenciaDeLinkbases();
        }
        /// <summary>
        /// Valida los identificadores de los Hechos, contextos y unidades
        /// </summary>
        private void ValidarIdentificadores()
        {
            //throw new NotImplementedException();
        }

        /// <summary>
        /// Realiza la validación de los contextos leídos de la instancia
        /// </summary>
        private void ValidarContextosDeInstancia()
        {
            foreach (Context contexto in DocumentoInstancia.Contextos.Values)
            {
                ValidarContexto(contexto);
            }
        }
        /// <summary>
        /// Realiza la validación de un contexto en el documento de instancia
        /// </summary>
        /// <param name="contexto"></param>
        private void ValidarContexto(Context contexto)
        {
            //Los elementos hijos del elemento Segmento no deben de pertenecer al espacio de nombres http://www.xbrl.org/2003/instance,
            //si esl segmento es definido, no debe ser vacío
            if (contexto.Entidad.Segmento != null)
            {
                ValidarSegmentoDeEntidad(contexto.Entidad);
            }

            //Los elementos hijos del elemento scenario no deben de pertenecer al espacio de nombres http://www.xbrl.org/2003/instance,
            //si esl scenario es definido, no debe ser vacío
            if (contexto.Escenario != null)
            {
                ValidarEscenarioDeContexto(contexto);
            }

            //Para un contexto del tipo duración la fecha de fin no debe ser menor a la fecha de inicio
            if (contexto.Periodo.Tipo == Period.Duracion)
            {
                if (contexto.Periodo.FechaFin.CompareTo(contexto.Periodo.FechaInicio) < 0)
                {
                    ManejadorErrores.ManejarError(null, "4.7.2 Se encontró un contexto del tipo duración cuya fecha de fin es anterior a la fecha de inicio " +
                               " ID del Contexto :" + contexto.Id , System.Xml.Schema.XmlSeverityType.Error);
                   
                }

            }
        }
        

        /// <summary>
        /// Para cada linkbase estándar que tenga reglas de validación según la especificación XBRL se realizan las operaciones de validación
        /// </summary>
        private void ValidarConsistenciaDeLinkbases()
        {
            if (DocumentoInstancia == null || DocumentoInstancia.Taxonomia == null ||
                DocumentoInstancia.Taxonomia.RolesTaxonomia == null)
            {
                return;
            }
            foreach (RoleType rol in DocumentoInstancia.Taxonomia.RolesTaxonomia.Values)
            {
                foreach (Linkbase link in rol.Linkbases.Values)
                {
                    if (link is LinkbaseDefinicion)
                    {
                        ValidarLinkBaseDefinicion(link.ArcosFinales);
                    }
                    if (link is LinkbaseCalculo)
                    {
                        ValidarLinkBaseCalculo(link.ArcosFinales);
                    }
                }
            }
        }
        /// <summary>
        /// Valida la consistencia de los arcos declarados de un linkbase de cálculo
        /// respecto a los hechos reportados en un documento de instancia
        /// </summary>
        /// <param name="list">Lista de arcos de cálculo finales</param>
        private void ValidarLinkBaseCalculo(IList<Arco> arcosCalculo)
        {
            if (arcosCalculo == null) return;
            //Realizar la validación de los arcos
            //Crear mapa y organiza arcos por concepto de sumatoria con arcos de sumandos
            IDictionary<ConceptItem, IList<ArcoCalculo>> sumatoriasAValidar = new Dictionary<ConceptItem, IList<ArcoCalculo>>();
            foreach (ArcoCalculo arco in arcosCalculo.Where(arc => arc is ArcoCalculo))
            {
                if (ArcoCalculo.SummationItemRole.Equals(arco.ArcoRol))
                {
                    foreach (ElementoLocalizable desde in arco.ElementoDesde)
                    {
                        if (!sumatoriasAValidar.ContainsKey((ConceptItem)desde.Destino))
                        {
                            sumatoriasAValidar.Add((ConceptItem)desde.Destino, new List<ArcoCalculo>());
                        }
                        sumatoriasAValidar[(ConceptItem)desde.Destino].Add(arco);
                    }
                }
            }
            foreach(ConceptItem conceptoSumatoria in sumatoriasAValidar.Keys){
                ValidarSumatoriasDeConcepto(conceptoSumatoria, sumatoriasAValidar[conceptoSumatoria]);
            }
        }

       
        /// <summary>
        /// Realiza la validación de consistencia del documento de instancia respecto al linkbase de definición
        /// </summary>
        private void ValidarLinkBaseDefinicion(IList<Arco> arcosDefinicion)
        {
            if (arcosDefinicion == null) return;
            //Realizar la validación de los arcos
            foreach (ArcoDefinicion arco in arcosDefinicion.Where(arc => arc is ArcoDefinicion))
            {
                if (ArcoDefinicion.EssenceAliasRole.Equals(arco.ArcoRol))
                {
                    ValidarHechosEssenceAlias(arco);
                }
                else if (ArcoDefinicion.RequieresElement.Equals(arco.ArcoRol))
                {
                    ValidarHechosRequiresElement(arco);
                }
            }
        }
        /// <summary>
        /// Valida el punto 5.2.6.2.4 de la especificación de XBRL 2.1 donde se describe que la relación 
        /// del tipo requires-elemento implica que si en un documento de instancia existe un hecho 
        /// del elemento desde, entonces al menos un hecho del tipo hacia debe existir también en el documento de instancia
        /// </summary>
        /// <param name="arco"></param>
        private void ValidarHechosRequiresElement(ArcoDefinicion arco)
        {
            foreach (ElementoLocalizable desde in arco.ElementoDesde)
            {
                foreach (ElementoLocalizable hacia in arco.ElementoHacia)
                {
                    //Si existe elemento desde
                    IList<Fact> hechoElemento = DocumentoInstancia.ObtenerHechosPorConcepto((Concept)desde.Destino);
                    IList<Fact> hechoRequerido = DocumentoInstancia.ObtenerHechosPorConcepto((Concept)hacia.Destino);
                    if (hechoElemento != null && hechoElemento.Count > 0)
                    {
                        //existe elemento , verificar si existe el requerido
                        if (hechoRequerido == null || hechoRequerido.Count == 0)
                        {
                            ManejadorErrores.ManejarError(null, "5.2.6.2.4 Se encontró un hecho del tipo ("+desde.Destino.Id+") en el documento de instancia pero no se encontró "+
                                 " el hecho requerido ("+hacia.Destino.Id+") definido en el arco: " + arco.ElementoXML.OuterXml, System.Xml.Schema.XmlSeverityType.Error);
                        }
                    }
                }
            }
        }
        /// <summary>
        /// Realiza la validación de un arco essence-alias respecto al contenido de hechos de un documento de instancia.
        /// 
        /// </summary>
        /// <param name="arco">Arco a validar</param>
        private void ValidarHechosEssenceAlias(ArcoDefinicion arco)
        {
            ConceptItem itemDesde = null;
            ConceptItem itemHacia = null;
            foreach(ElementoLocalizable desde in arco.ElementoDesde){
                if (desde.Destino is ConceptItem)
                {
                    itemDesde = (ConceptItem)desde.Destino;
                    foreach (ElementoLocalizable hacia in arco.ElementoHacia)
                    {
                        if (hacia.Destino is ConceptItem)
                        {
                            itemHacia = (ConceptItem)hacia.Destino;

                            //Buscar todos los facts que correspondan al elemento desde
                            foreach (Fact hechoEssence in DocumentoInstancia.Hechos.Where(fct=>fct.Concepto.Id.Equals(itemDesde.Id)))
                            {
                                foreach (Fact hechoAlias in DocumentoInstancia.Hechos.Where(fct => fct.Concepto.Id.Equals(itemHacia.Id)))
                                {
                                    //Validar la pareja de hechos si son consistentes en una relación essence-alias
                                    //De acuerdo a la especificación los arcos de essence-alias solo pueden unir conteptos del tipo item y no tuple
                                    ValidarParejaHechosEssenceAlias((FactItem)hechoEssence, (FactItem)hechoAlias);
                                }
                            }

                        }
                    }
                }
                
            }
        }


        /// <summary>
        /// Valida la pareja concreta de hechos de un documento de instancia que están relacionados con un arco del tipo essence-alias
        /// </summary>
        /// <param name="hechoEssence">Hecho Primario</param>
        /// <param name="hechoAlias">Hecho opcional o alias</param>
        private void ValidarParejaHechosEssenceAlias(FactItem hechoEssence, FactItem hechoAlias)
        {
            //Si un concepto essence y alias existen en una instancia y son C-Equal y P-Equal  (contexto y padre)
            if (hechoEssence.Contexto.StructureEquals(hechoAlias.Contexto) && hechoEssence.ParentEqual(hechoAlias))
            {
                //Entonces estos 2 hechos deben de ser  Value Equal y Unit Equal
                if (hechoEssence is FactNumericItem && hechoAlias is FactNumericItem)
                {
                    if (!((FactNumericItem)hechoEssence).Unidad.StructureEquals(((FactNumericItem)hechoAlias).Unidad))
                    {
                        ManejadorErrores.ManejarError(null, "5.2.6.2.2 Se encontraron dos hechos relacionados como essence-alias en el mismo contexto " +
                                 " pero cuya unidad no es igual o equivalente", System.Xml.Schema.XmlSeverityType.Error);
                            
                    }
                }
                if ( (hechoEssence is FactNumericItem && !(hechoAlias is FactNumericItem) ) || (! (hechoEssence is FactNumericItem) && hechoAlias is FactNumericItem))
                {
                    ManejadorErrores.ManejarError(null, "5.2.6.2.2 Se encontraron dos hechos relacionados como essence-alias en el mismo contexto " +
                                " pero cuyo tipo de dato no es equivalente" , System.Xml.Schema.XmlSeverityType.Error);
                        
                }
                //Comparar valores  solo si ambos son diferentes de vacio o nulo
                if (!String.IsNullOrEmpty(hechoEssence.Valor) && !String.IsNullOrEmpty(hechoAlias.Valor))
                {
                    if (hechoEssence is FactNumericItem)
                    {
                        if (!((FactNumericItem)hechoEssence).ValueEquals((FactNumericItem)hechoAlias))
                        {
                            ManejadorErrores.ManejarError(null, "5.2.6.2.2 Se encontraron dos hechos relacionados como essence-alias en el mismo contexto " +
                                " pero cuyo valor no es el mismo" , System.Xml.Schema.XmlSeverityType.Error);
                        }
                    }
                    else 
                    {
                        if (!hechoEssence.ValueEquals(hechoAlias))
                        {
                            ManejadorErrores.ManejarError(null, "5.2.6.2.2 Se encontraron dos hechos relacionados como essence-alias en el mismo contexto " +
                                " pero cuyo valor no es el mismo" , System.Xml.Schema.XmlSeverityType.Error);
                        }
                    }
                }
            }
        }
        /// <summary>
        /// Valida la consistencia de un conjunto de arcos summation-item
        /// que aportan a la suma de un concepto
        /// </summary>
        /// <param name="arco">Arco a validar</param>
        private void ValidarSumatoriasDeConcepto(ConceptItem conceptoSumatoria,IList<ArcoCalculo> arcosSumandos)
        {
            //Buscar en la lista de hechos todos los conceptos de la sumatoria
            IList<Fact> hechosAValidar = DocumentoInstancia.ObtenerHechosPorConcepto(conceptoSumatoria);
            if (hechosAValidar != null)
            {
                foreach (FactNumericItem hechoSumatoria in hechosAValidar)
                {
                    Decimal valorDeSumandos = 0;
                    Boolean tieneSumandosDuplicados = false;
                    Boolean tieneElementosQueContribuyen = false;
                    List<FactNumericItem> sumandos = new List<FactNumericItem>();
                    //Para validar la sumatoria el elemento de sumatoria no debe ser nil y la precision debe ser diferente que cero y no debe tener hechos duplicados
                    if (!hechoSumatoria.IsNilValue)
                    {

                        if (hechoSumatoria.EsPrecisionEstablecida() && !hechoSumatoria.EsPrecisionInfinita && hechoSumatoria.PrecisionInferida != null && hechoSumatoria.PrecisionInferida == 0)
                        {
                            ManejadorErrores.ManejarError(null, "5.2.5.2 Se encontró un hecho que participa en una verificación de cálculo en arco summation-item " +
                               " cuya precision es '0' por lo tanto el cálculo es inconsistente" , System.Xml.Schema.XmlSeverityType.Warning);
                            return;
                        }
                        if (hechoSumatoria.DuplicadoCon != null && hechoSumatoria.DuplicadoCon.Count > 0)
                        {
                            ManejadorErrores.ManejarError(null, "5.2.5.2 Se encontró un hecho que participa en una verificación de cálculo en arco summation-item " +
                               " que tiene duplicidad con otro hechos . No se validará la consistencia de este cálculo" , System.Xml.Schema.XmlSeverityType.Warning);
                            continue;
                        }
                        
                        foreach (ArcoCalculo arco in arcosSumandos)
                        {
                           //Procesar elementos de arco
                           foreach (ElementoLocalizable elementoHacia in arco.ElementoHacia)
                           {
                                IList<Fact> elementosSumatoria = DocumentoInstancia.ObtenerHechosPorConcepto((ConceptItem)elementoHacia.Destino);
                                        
                                foreach(FactNumericItem hechoSumando in elementosSumatoria)
                                {
                                    
                                    //Verificar que sean del mismo contexto o equivalente
                                    if (!DocumentoInstancia.GruposContextosEquivalentes[hechoSumando.Contexto.Id].Contains(hechoSumatoria.Contexto.Id))
                                    {
                                        //Este hecho no contribuye a la sumatoria
                                        continue;
                                    }
                                    //Verificar que sean Unit - equal
                                    if(!hechoSumatoria.UnitEquals(hechoSumando))
                                    {
                                        //Este hecho no contribuye a la sumatoria
                                        continue;
                                    }
                                    //Verificar que el hecho sumando no tenga duplicados
                                    if (hechoSumando.DuplicadoCon != null && hechoSumando.DuplicadoCon.Count > 0)
                                    {
                                        ManejadorErrores.ManejarError(null, "5.2.5.2 Se encontró un hecho que participa en una verificación de cálculo en arco summation-item " +
                                        " que tiene duplicidad con otro hechos. No se validará la consistencia de este cálculo" , System.Xml.Schema.XmlSeverityType.Warning);
                                        tieneSumandosDuplicados = true;
                                        break;
                                    }
                                    //Que el sumando no tenga valor nil
                                    if (hechoSumando.IsNilValue)
                                    {
                                        continue;
                                    }
                                    //Si el hecho es un descendiente del padre

                                    if (hechoSumatoria.Nodo!=null)
                                        /*if (!XmlUtil.EsNodoDescendiente(hechoSumatoria.Nodo.ParentNode ,hechoSumando.Nodo))
                                        {
                                            //no contribuye
                                            continue;
                                        }*/

                                    //Verficar la precision del sumando
                                    if (hechoSumatoria.EsPrecisionEstablecida() && !hechoSumando.EsPrecisionInfinita && hechoSumando.PrecisionInferida != null && hechoSumando.PrecisionInferida == 0)
                                    {
                                        ManejadorErrores.ManejarError(null, "5.2.5.2 Se encontró un hecho que participa en una verificación de cálculo en arco summation-item " +
                                            " cuya precision es '0' por lo tanto el cálculo es inconsistente" , System.Xml.Schema.XmlSeverityType.Warning);
                                        return;
                                    }
                                    //Este hecho participa en la sumatoria como sumando
                                    tieneElementosQueContribuyen = true;
                                    valorDeSumandos += hechoSumando.ValorRedondeado * arco.Peso;
                                    sumandos.Add(hechoSumando);
                                }

                            }
                            
                        }
                        if (tieneElementosQueContribuyen && !tieneSumandosDuplicados)
                        {
                            //comparar el valor con la sumatoria

                            //Aplicar el redondeo de decimales
                            if (hechoSumatoria.ValorRedondeado != hechoSumatoria.Redondear(valorDeSumandos))
                            {
                                var err = ManejadorErrores.ManejarError(null, "5.2.5.2 Error en Verificación de cálculo: Contexto: " + hechoSumatoria.Contexto.Id + " : " +
                                " Valor de Sumatoria (" + hechoSumatoria.Concepto.Id + ") : " + hechoSumatoria.ValorRedondeado.ToString() + " :  Valor Resultado de Sumandos: " +
                                hechoSumatoria.Redondear(valorDeSumandos).ToString(), System.Xml.Schema.XmlSeverityType.Warning);
                                err.IdHechoPrincipal = hechoSumatoria.Id;
                                err.IdHechosRelacionados = new List<String>();
                                foreach(var sum in sumandos){
                                    err.IdHechosRelacionados.Add(sum.Id);
                                }
                            }
                        }


                    }
                }
            }
            
        }
       
        /// <summary>
        /// Aplica las diferentes reglas de validación de un hecho hacia la unidad a la que está relacionado
        /// </summary>
        private void ValidarUnidadesDeHechosReportados()
        {
            foreach (Fact hecho in DocumentoInstancia.Hechos)
            {
                ValidarUnidadDeHeho(hecho);
            }
        }

       

        /// <summary>
        /// Valida que el periodo asociado al contexto relacionado con los hechos reportados correspondan según el tipo de periodo indicado para los distintos elementos definidos
        /// en la taxonomía.
        /// </summary>
        private void ValidarContextosDeHechosReportados()
        {
            foreach (Fact hecho in DocumentoInstancia.Hechos)
            {
                ValidarContextoDeHecho(hecho);
            }
        }
        /// <summary>
        /// Valida la correspondencia entre el tipo de unidad declarada en el hecho y la unidad con la cuál está asociado en un 
        /// documento de instancia
        /// </summary>
        /// <param name="hecho">Hecho a validar</param>
        private void ValidarUnidadDeHeho(Fact hecho)
        {
            if (hecho is FactNumericItem)
            {
                ConceptItem itemDecl = (ConceptItem)hecho.Concepto;
                FactNumericItem hechoNumerico = (FactNumericItem)hecho;
                //Tipo de dato moneda o derivado de moneda: 
                //Debe estar asociado a una unidad con un solo elemento xbrli:measure cuyo Qname sea:
                //Namespace http://www.xbrl.org/2003/iso4217 y Nombre local sea valido
                if (itemDecl.EsTipoDatoMonetario)
                {
                    if (hechoNumerico.Unidad.Tipo == Unit.Medida && hechoNumerico.Unidad.Medidas.Count == 1)
                    {
                        if(EspacioNombresConstantes.ISO_4217_Currency_Namespace.Equals(hechoNumerico.Unidad.Medidas[0].Namespace)){
                            if (!ValidarCodigoMoneda(hechoNumerico.Unidad.Medidas[0]))
                            {
                                ManejadorErrores.ManejarError(null, "4.8.2 Se encontró un hecho numérico reportado en el documento instancia cuya unidad " +
                                 " es de tipo monetaria pero la declaración de moneda no es válida: " + hechoNumerico.Unidad.Medidas[0] .LocalName, System.Xml.Schema.XmlSeverityType.Error);
                            }
                        }else{
                             ManejadorErrores.ManejarError(null, "4.8.2 Se encontró un hecho numérico reportado en el documento instancia cuya unidad " +
                            " es de tipo monetaria pero la declaración de medida no tiene el espacio de nombres de http://www.xbrl.org/2003/iso4217.  Espacio de Nombres de la Unidad: " + hechoNumerico.Unidad.Medidas[0].Namespace, System.Xml.Schema.XmlSeverityType.Error);
                        }
                    }
                    else
                    {
                        ManejadorErrores.ManejarError(null, "4.8.2 Se encontró un hecho numérico reportado en el documento instancia cuyo tipo es monetaryItemType o derivado y" +
                         " está asociado a una unidad que tiene mas de una medida declarada" , System.Xml.Schema.XmlSeverityType.Error);
                    }
                }
                //Tipo de dato shares o derivado de shares
                //Debe estar asociado a una unidad con un solo elemento xbrli:measure  cuyo Qname sea:
                //Nombre local debe ser "shares" y el namespace debe ser http://www.xbrl.org/2003/instance
                if (itemDecl.EsTipoDatoAcciones)
                {
                    if (hechoNumerico.Unidad.Tipo == Unit.Medida && hechoNumerico.Unidad.Medidas.Count == 1)
                    {
                        if (EspacioNombresConstantes.InstanceNamespace.Equals(hechoNumerico.Unidad.Medidas[0].Namespace))
                        {
                            if (!ConstantesGenerales.SHARES_UNIT_LOCAL_NAME.Equals(hechoNumerico.Unidad.Medidas[0].LocalName))
                            {
                                ManejadorErrores.ManejarError(null, "4.8.2 Se encontró un hecho numérico reportado en el documento instancia cuya unidad " +
                                 " es de tipo Acciones pero el nombre de la unidad no es válido, debe ser 'shares': " + hechoNumerico.Unidad.Medidas[0].LocalName, System.Xml.Schema.XmlSeverityType.Error);
                            }
                        }
                        else
                        {
                            ManejadorErrores.ManejarError(null, "4.8.2 Se encontró un hecho numérico reportado en el documento instancia cuya unidad " +
                           " es de tipo Acciones pero la declaración de medida no tiene el espacio de nombres de http://www.xbrl.org/2003/instance.  Espacio de Nombres de la Unidad: " + hechoNumerico.Unidad.Medidas[0].Namespace, System.Xml.Schema.XmlSeverityType.Error);
                        }
                    }
                     else
                     {
                         ManejadorErrores.ManejarError(null, "4.8.2 Se encontró un hecho numérico reportado en el documento instancia cuyo tipo es sharesItemType o derivado y" +
                          " está asociado a una unidad que tiene mas de una medida declarada  " , System.Xml.Schema.XmlSeverityType.Error);
                     }
                }
                
                //Tipo de dato pure o derivado de pure debe tener una sola medida
                //Si el espacio de nombres es http://www.xbrl.org/2003/instance entonces
                //nombre local debe ser "pure"
                if (itemDecl.EsTipoDatoPuro)
                {
                    if (hechoNumerico.Unidad.Tipo == Unit.Medida && hechoNumerico.Unidad.Medidas.Count == 1)
                    {
                        if (EspacioNombresConstantes.InstanceNamespace.Equals(hechoNumerico.Unidad.Medidas[0].Namespace))
                        {
                            if (!ConstantesGenerales.PURE_UNIT_LOCAL_NAME.Equals(hechoNumerico.Unidad.Medidas[0].LocalName))
                            {
                                ManejadorErrores.ManejarError(null, "4.8.2 Se encontró un hecho numérico reportado en el documento instancia cuya unidad " +
                                 " es de tipo Puro pero el nombre de la unidad no es válido, debe ser 'pure': " + hechoNumerico.Unidad.Medidas[0].LocalName, System.Xml.Schema.XmlSeverityType.Error);
                            }
                        }
                    }
                    else
                    {
                        ManejadorErrores.ManejarError(null, "4.8.2 Se encontró un hecho numérico reportado en el documento instancia cuyo tipo es pureItemType o derivado y" +
                         " está asociado a una unidad que tiene mas de una medida declarada " , System.Xml.Schema.XmlSeverityType.Error);
                    }
                }



                
            }

            if (hecho is FactFractionItem || hecho is FactNumericItem)
            {
                Unit unidad = null;
                if (hecho is FactFractionItem)
                {
                    unidad = ((FactFractionItem)hecho).Unidad;
                }
                if (hecho is FactNumericItem)
                {
                    unidad = ((FactNumericItem)hecho).Unidad;
                }

                // 4.8.3 Evitar que en las unidades de fraction items se repita la misma unidad para numerador y denominador
                if (unidad.Tipo == Unit.Divisoria)
                {
                    bool valido = true;
                    foreach(Measure medidaNumerador in unidad.Numerador){
                        foreach (Measure medidaDenominador in unidad.Denominador)
                        {
                            if (medidaNumerador.Equals(medidaDenominador))
                            {
                                ManejadorErrores.ManejarError(null, "4.8.3 Se encontró un hechoreportado en el documento instancia que " +
                                 " está asociado a una unidad que tiene elementos Measure repetidos en el numerador y denominador.", System.Xml.Schema.XmlSeverityType.Error);
                                valido = false;
                                break;
                            }
                        }
                        if (!valido)
                        {
                            break;
                        }
                    }
                }
            }


            
        }
        /// <summary>
        /// Valida y asigna la información relativa a Culture info en base al código de la moneda
        /// </summary>
        /// <param name="medida">Medida a validar / asignar</param>
        /// <returns></returns>
        private bool ValidarCodigoMoneda(Measure medida)
        {
            if (medida.CultureInformation != null)
            {
                //Medida ya validada
                return true;
            }
            String moneda = null;
             
            //Si el código ISO no está activo, verificar en las monedas en desuso
            moneda = UnitsUtil.EsMonedaEnDesuso(medida.LocalName);
            if (moneda == null)
            {
                //la moneda no está en desuso, colocar la moneda original
                moneda = medida.LocalName;
            }
            CultureInfo[] AllSpecificCultures = CultureInfo.GetCultures(CultureTypes.SpecificCultures);
            foreach (CultureInfo CurrentCultureInfo in AllSpecificCultures)
            {
                RegionInfo CurrentRegionInfo = new RegionInfo(CurrentCultureInfo.LCID);
                if (CurrentRegionInfo.ISOCurrencySymbol == moneda)
                {
                    medida.CultureInformation = CurrentCultureInfo;
                    medida.RegionInformation = CurrentRegionInfo;
                    return true;
                }
            }
            return false;
        }

        /// <summary>
        /// Valida que el periodo asociado al contexto relacionado con un hecho reportado corresponga según el tipo de periodo indicado para el elemento en la taxonomía.
        /// </summary>
        /// <param name="hecho">el hecho a validar</param>
        private void ValidarContextoDeHecho(Fact hecho)
        {
            if (hecho is FactItem)
            {
                FactItem item = (FactItem)hecho;
                if (((ConceptItem)item.Concepto).TipoPeriodo.Name.Equals(ConceptItem.InstantPeriodType) && item.Contexto.Periodo.Tipo != Period.Instante)
                {
                    ManejadorErrores.ManejarError(null, "5.1.1.1 Se encontró un hecho reportado en el documento instancia cuyo tipo de periodo es instante en la taxonomía y el contexto asociado de reporte no es de tipo instante. ", System.Xml.Schema.XmlSeverityType.Error);
                }
                else if (((ConceptItem)item.Concepto).TipoPeriodo.Name.Equals(ConceptItem.DurationPeriodType) && (item.Contexto.Periodo.Tipo == Period.Instante))
                {
                    ManejadorErrores.ManejarError(null, "5.1.1.1 Se encontró un hecho reportado en el documento instancia cuyo tipo de periodo es duración en la taxonomía y el contexto asociado de reporte no es de tipo duración. ", System.Xml.Schema.XmlSeverityType.Error);
                }
                
            }
            else
            {
                FactTuple tuple = (FactTuple)hecho;
                foreach (Fact factTuple in tuple.Hechos)
                {
                    ValidarContextoDeHecho(factTuple);
                }
            }
        }
        /// <summary>
        /// Valida que los elementos hijos del elemento Segmento no deben de pertenecer al espacio de nombres 
        /// http://www.xbrl.org/2003/instance, si esl segmento es definido, no debe ser vacío
        /// </summary>
        /// <param name="entidad">Entidad a validar</param>
        private void ValidarSegmentoDeEntidad(Entity entidad)
        {
            if (entidad.Segmento != null)
            {
                //Segmento vacío
                if (entidad.Segmento.ElementoOrigen.ChildNodes.Count == 0)
                {
                    ManejadorErrores.ManejarError(null, "4.7.3.2 Se encontró un elemento segment definido para la entidad " +
                       entidad.EsquemaId + ":" + entidad.EsquemaId + " vacío, si se define un elemento segment, éste no debe estar vacío. ", System.Xml.Schema.XmlSeverityType.Error);
                }
                //Validar los hijos del segmento que todos los elementos hijos no pertenezcan al espacio de nombres xbrli
                foreach (XmlNode nodo in entidad.Segmento.ElementoOrigen.ChildNodes)
                {
                    if (PerteneceAEspacioNombres(nodo, EspacioNombresConstantes.InstanceNamespace))
                    {
                        ManejadorErrores.ManejarError(null, "4.7.3.2 Se encontró un elemento segment definido para la entidad " +
                       entidad.EsquemaId + ":" + entidad.EsquemaId + " con un elemento hijo definido en el espacio de nombres " + EspacioNombresConstantes.InstanceNamespace , System.Xml.Schema.XmlSeverityType.Error);
                
                    }
                    if (PerteneceAGrupoDeSustitucion(nodo, EspacioNombresConstantes.InstanceNamespace))
                    {
                        ManejadorErrores.ManejarError(null, "4.7.3.2 Se encontró un elemento segment definido para la entidad " +
                      entidad.EsquemaId + ":" + entidad.EsquemaId + " con un elemento hijo definido el el grupo de sustición de un elemento del espacio de nombres " + EspacioNombresConstantes.InstanceNamespace, System.Xml.Schema.XmlSeverityType.Error);
                    }
                }
                
            }
        }
        /// <summary>
        /// Verifica si un nodo o alguno de sus hijos fueron definidos utilizando el grupo de sustitución definidos
        /// en el espacio de nombres enviado como parámetro
        /// </summary>
        /// <param name="nodo">Nodos a validar</param>
        /// <param name="espacioNombres">Espacio de nombres a verificar</param>
        /// <returns></returns>
        private bool PerteneceAGrupoDeSustitucion(XmlNode nodo, string espacioNombres)
        {
            if(nodo.SchemaInfo != null && nodo.SchemaInfo.SchemaElement != null && nodo.SchemaInfo.SchemaElement.SubstitutionGroup !=null)
            {
                if (nodo.SchemaInfo.SchemaElement.SubstitutionGroup.Namespace.Equals(espacioNombres))
                {
                    return true;
                }
            }
            foreach (XmlNode nodoHijo in nodo.ChildNodes)
            {
                if(PerteneceAGrupoDeSustitucion(nodoHijo,espacioNombres)){
                    return true;
                }
            }
            return false;
        }
        /// <summary>
        /// Valida el elemento <scenario> dentro de un contexto
        /// </summary>
        /// <param name="contexto">Contexto a validar su escenario</param>
        private void ValidarEscenarioDeContexto(Context contexto)
        {
            if (contexto.Escenario != null)
            {
                //Escenario vacío
                if (contexto.Escenario.ElementoOrigen == null || contexto.Escenario.ElementoOrigen.ChildNodes.Count == 0)
                {
                    ManejadorErrores.ManejarError(null, "4.7.4 Se encontró un elemento scenario definido para el contexto " +
                       contexto.Id + " vacío, si se define un elemento scenario, éste no debe estar vacío ", System.Xml.Schema.XmlSeverityType.Error);
                }
                //Validar los hijos del escenario que todos los elementos hijos no pertenezcan al espacio de nombres xbrli o
                //al grupo de sustitución de algun elemento definido en  http://www.xbrl.org/2003/instance
                 if (contexto.Escenario.ElementoOrigen != null)
                foreach (XmlNode nodo in contexto.Escenario.ElementoOrigen)
                {
                    if (PerteneceAEspacioNombres(nodo, EspacioNombresConstantes.InstanceNamespace))
                    {
                        ManejadorErrores.ManejarError(null, "4.7.4 Se encontró un elemento escenario definido para el contexto " +
                       contexto.Id + " con un elemento hijo definido en el espacio de nombres " + EspacioNombresConstantes.InstanceNamespace , System.Xml.Schema.XmlSeverityType.Error);

                    }
                    if (PerteneceAGrupoDeSustitucion(nodo, EspacioNombresConstantes.InstanceNamespace))
                    {
                        ManejadorErrores.ManejarError(null, "4.7.3.2 Se encontró un elemento escenario definido para el contexto " +
                        contexto.Id + " con un elemento hijo definido el el grupo de sustición de un elemento del espacio de nombres " + EspacioNombresConstantes.InstanceNamespace , System.Xml.Schema.XmlSeverityType.Error);
                    }
                }

            }
        }
        /// <summary>
        /// Verifica si el elemento nodo o alguno de sus hijos pertener al espacio de nombres indicado como parámetro
        /// </summary>
        /// <param name="nodo">Nodo a validar</param>
        /// <param name="espacioNombres">Espacio de nombres buscado</param>
        /// <returns>true si el nodo o algún hijo pertenece al espacio de nombres, false en otro caso</returns>
        private bool PerteneceAEspacioNombres(XmlNode nodo, string espacioNombres)
        {
            if (nodo.NamespaceURI.Equals(espacioNombres))
            {
                return true;
            }
            foreach (XmlNode nodoHijo in nodo.ChildNodes) {
                if (PerteneceAEspacioNombres(nodoHijo, espacioNombres))
                {
                    return true;
                }
            }
            return false;
        }
    }
}
