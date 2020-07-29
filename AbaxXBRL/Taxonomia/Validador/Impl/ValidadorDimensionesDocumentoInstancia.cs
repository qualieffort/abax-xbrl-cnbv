using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Xml.Schema;
using AbaxXBRL.Constantes;
using System.Globalization;
using AbaxXBRL.Taxonomia.Dimensiones;
using AbaxXBRL.Taxonomia.Linkbases;
using AbaxXBRL.Util;
using System.Xml;

namespace AbaxXBRL.Taxonomia.Validador.Impl
{
    /// <summary>
    /// Implementación del mecanismo de validación de los hechos y contextos que tienen que ver con la especificación
    /// de dimensiones de XBRL
    /// <author>Emigdio Hernández</author>
    /// <version>1.0</version>
    /// </summary>
    public class ValidadorDimensionesDocumentoInstancia : IValidadorDocumentoInstancia
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

       
        /// <summary>
        /// Realiza la validación de los elementos hechos, contextos, etc que participan en relaciones dimensionales 
        /// de acuerdo a las reglas de la especificación de dimensiones 1.0 de XBRL
        /// </summary>
        public void ValidarDocumento()
        {
            ValidarContextos();
            ValidarElementosPrimariosEnInstancia();
        }
        /// <summary>
        /// Valida que los elementos primarios de los hipercubos presentes en la taxonomía que aparecen en contextos 
        /// sean válidos respecto a sus hipercubos donde aparecen.
        /// Cada hipercubo relacionado a cada elemento primario se valida respecto a su declaración.
        /// Un elemento primario debe ser válido de acuerdo al menos a uno de los hipercubos donde aparece.
        /// </summary>
        private void ValidarElementosPrimariosEnInstancia()
        {
            //Realizar el inventario de los elementos primarios presentes en la instancia y con qué hipercubos está asociado
            IDictionary<FactItem, IList<Hipercubo>> elementosPrimarios = new Dictionary<FactItem, IList<Hipercubo>>();
            IList<Hipercubo> hipercubos = null;
            foreach (var hecho in DocumentoInstancia.Hechos)
            {
                //verificar si el hecho ya está en la lista
                if(hecho.Concepto is ConceptItem)
                {
                    //Verificar si el hecho es parte de un hipercubo
                    hipercubos = ObtenerHipercubosDeHecho(hecho);
                    if(hipercubos.Count>0)
                    {
                        elementosPrimarios.Add(hecho as FactItem, hipercubos);
                    }
                }
            }
            
            //Por cada hecho validar todos los hipercubos
            //El elemento debe ser válido en al menos un linkbase role donde se definen sus hipercubos
            foreach (var elementoHipercubos in elementosPrimarios)
            {
                IDictionary<RoleType, bool> validezElementoEnRol = new Dictionary<RoleType, bool>();

                foreach (var hipercubo in elementoHipercubos.Value)
                {
                    if (!validezElementoEnRol.ContainsKey(hipercubo.Rol))
                    {
                        validezElementoEnRol.Add(hipercubo.Rol, true);
                    }
                    if(hipercubo.ArcRoleDeclaracion.Equals(ArcoDefinicion.HasHypercubeNotAllRole))
                    {
                        validezElementoEnRol[hipercubo.Rol] = validezElementoEnRol[hipercubo.Rol] && !ValidarHechoEnHipercubo(elementoHipercubos.Key, hipercubo);
                    }
                    if(hipercubo.ArcRoleDeclaracion.Equals(ArcoDefinicion.HasHypercubeAllRole))
                    {
                        validezElementoEnRol[hipercubo.Rol] = validezElementoEnRol[hipercubo.Rol] && ValidarHechoEnHipercubo(elementoHipercubos.Key, hipercubo);
                    }
                }
                //Evaluar la combinación de la validez de los hipercubos
                bool elementoValido = false;
                foreach(var validez in validezElementoEnRol)
                {
                    elementoValido = elementoValido || validez.Value;
                }

                if (!elementoValido)
                {
                    ManejadorErrores.ManejarError(CodigosErrorXBRL.PrimaryItemDimensionallyInvalidError, null,
                                   "3.1.1.1  Se encontró un elemento primario que participa en al menos un hipercubo y cuya definición " + 
                                   "es inválida: Elemento: " + elementoHipercubos.Key.Concepto.Id + " : Contexto :" + elementoHipercubos.Key.Contexto.Id,
                                                  XmlSeverityType.Error);
                }
            }
        }
        /// <summary>
        /// Valida que el hecho sea valido respecto al hipercubo donde se reporta, esta
        /// función evalúa el contexto y que sus dimensiones sean válidas y correctas respecto a sus dominios
        /// </summary>
        /// <param name="hecho">Hecho a validar</param>
        /// <param name="hipercubo">Hipercubo a evaluar</param>
        /// <returns></returns>
        private bool ValidarHechoEnHipercubo(FactItem hecho, Hipercubo hipercubo)
        {
            IList<MiembroDimension> valoresDimension = new List<MiembroDimension>();
            IList<XmlElement> elementosExtras = new List<XmlElement>();
            if(hipercubo.ElementoContexto == TipoElementoContexto.Escenario)
            {
                if(hecho.Contexto.Escenario != null)
                {
                    valoresDimension = hecho.Contexto.Escenario.MiembrosDimension;
                    elementosExtras = hecho.Contexto.Escenario.ElementosAdicionales;
                }
            }else
            {
                if(hecho.Contexto.Entidad.Segmento != null)
                {
                    valoresDimension = hecho.Contexto.Entidad.Segmento.MiembrosDimension;
                    elementosExtras = hecho.Contexto.Entidad.Segmento.ElementosAdicionales;
                }
            }

            
            IList<MiembroDimension> valoresEfectivosDimension = new List<MiembroDimension>();
            foreach (var nodoDimension in hipercubo.ListaDimensiones)
            {
                //Para cada dimension buscar su valor
                var valorMiembro = valoresDimension.FirstOrDefault(x => x.Dimension == nodoDimension.ConceptoDimension);
                if (valorMiembro != null)
                {
                    //Valor de dimensión encontrada
                    
                    //Dimensión OK
                    //Validar el dominio
                    if(!EsDominioValido(valorMiembro,nodoDimension))
                    {
                        return false;
                    }
                    valoresEfectivosDimension.Add(valorMiembro);
                    
                }else
                {
                    //El valor de la dimensión no existe, verificar si tiene default para inferirlo
                    ConceptItem dimDefault = hipercubo.ObtenerDimensionDefault(nodoDimension.ConceptoDimension);
                    if (dimDefault != null)
                    {
                        //Verificar si la dimensión default es parte del dominio válido
                        if(nodoDimension.MiembrosDominio.Contains(dimDefault))
                        {
                            valoresEfectivosDimension.Add(new MiembroDimension(nodoDimension.ConceptoDimension, dimDefault));
                        }
                    }
                }
            }
            //Contar los valores  para las dimensiones
            if(hipercubo.ListaDimensiones.Count != valoresEfectivosDimension.Count)
            {
                return false;
            }
            if(hipercubo.Cerrado)
            {
                //Si el hipercubo es cerrado y tiene más información de la que debería
                if (elementosExtras!=null)
                    if (hipercubo.ListaDimensiones.Count < (valoresDimension.Count + elementosExtras.Count))
                    {
                        return false;
                    }
            }

            return true;

        }
        /// <summary>
        /// Valida que el miembro de dominio de un valor de dimensión sea válido respecto a su dimensión
        /// </summary>
        /// <param name="valorMiembro"></param>
        /// <param name="nodoDimension"></param>
        /// <returns></returns>
        private bool EsDominioValido(MiembroDimension valorMiembro, Dimension nodoDimension)
        {
            if (nodoDimension.Explicita)
            {
                return valorMiembro.ItemMiembro != null && nodoDimension.MiembrosDominio.Contains(valorMiembro.ItemMiembro);
            }
            else
            {
                return valorMiembro.ElementoMiembroTipificado != null &&
                       valorMiembro.ElementoMiembroTipificado.NamespaceURI.Equals(
                           nodoDimension.ConceptoDimension.ElementoDimensionTipificada.QualifiedName.Namespace) &&
                       valorMiembro.ElementoMiembroTipificado.LocalName.Equals(
                           nodoDimension.ConceptoDimension.ElementoDimensionTipificada.QualifiedName.Name);
            }
        }

        /// <summary>
        /// Verifica si el hecho es parte de un hipercubo de la taxonomía
        /// </summary>
        /// <param name="hecho">Hecho a verificar</param>
        /// <returns></returns>
        private IList<Hipercubo> ObtenerHipercubosDeHecho(Fact hecho)
        {
            return (from listaHipercubo in DocumentoInstancia.Taxonomia.ListaHipercubos.Values 
                    from hipercubo in listaHipercubo where 
                    (hipercubo.ElementoPrimarioPerteneceAHipercubo(hecho.Concepto as ConceptItem) 
                    || hipercubo.DeclaracionElementoPrimario.Elemento == hecho.Concepto)
                    select hipercubo).ToList();
        }

        /// <summary>
        /// Valida que los valores por default de una dimensión no aparezcan y que no aparezcan dimensiones repetidas
        /// </summary>
        private void ValidarContextos()
        {
            foreach (var ctx in DocumentoInstancia.Contextos.Values)
            {
                //por cada hipercubo con dimension default, validar si la información dimensional en los contextos no contiene al default value
                foreach (var listaHipercubo in DocumentoInstancia.Taxonomia.ListaHipercubos.Values)
                {
                    foreach (var hipercubo in listaHipercubo)
                    {
                        //Obtener las dimensiones en contexto
                        IList<MiembroDimension> valoresDimension = new List<MiembroDimension>();
                        if (hipercubo.ElementoContexto == TipoElementoContexto.Escenario)
                        {
                            if (ctx.Escenario != null)
                            {
                                valoresDimension = ctx.Escenario.MiembrosDimension;
                            }
                        }
                        else
                        {
                            if (ctx.Entidad.Segmento != null)
                            {
                                valoresDimension = ctx.Entidad.Segmento.MiembrosDimension;
                            }
                        }
                        foreach (var nodoDimension in hipercubo.ListaDimensiones)
                        {
                            var dimDef = hipercubo.ObtenerDimensionDefault(nodoDimension.ConceptoDimension as ConceptDimensionItem);
                            if (dimDef != null)
                            {
                                //Hipercubo tiene dimension default, verificar el contextos
                                VerificarDimensionDefaultEnContexto(valoresDimension, nodoDimension.ConceptoDimension as ConceptDimensionItem, dimDef, ctx);
                            }
                        }
                    }
                }
                //Verificar los duplicados
                VerificarDimensionesDeContexto(ctx);
            }
        }
        /// <summary>
        /// De la declaración de dimensiones en un contexto verifica que:
        /// No estén repetidas
        /// Cada dimensión apunte a una dimensión existente en el DTS
        /// </summary>
        /// <param name="ctx"></param>
        private void VerificarDimensionesDeContexto(Context ctx)
        {
            var valoresDimensionContexto = new List<MiembroDimension>();
            if (ctx.Escenario != null && ctx.Escenario.MiembrosDimension != null)
            {
                valoresDimensionContexto.AddRange(ctx.Escenario.MiembrosDimension);
            }
            if (ctx.Entidad.Segmento != null && ctx.Entidad.Segmento.MiembrosDimension != null)
            {
                valoresDimensionContexto.AddRange(ctx.Entidad.Segmento.MiembrosDimension);
            }

            VerificarDimensionesRepetidas(ctx, valoresDimensionContexto);
            VerificarDimensionesExistentes(ctx, valoresDimensionContexto);
        }
        /// <summary>
        /// Verifica que la dimensión a donde apunta el atributo de dimensión exista
        /// </summary>
        /// <param name="ctx">Contexto a validar</param>
        /// <param name="valoresDimensionContexto">Valores de dimensiones encontrados</param>
        private void VerificarDimensionesExistentes(Context ctx, List<MiembroDimension> valoresDimensionContexto)
        {
            foreach (var valorDimension in valoresDimensionContexto)
            {
                if(valorDimension.Explicita)
                {
                    //Debe apuntar a una dimensión explicita
                    if (valorDimension.Dimension == null || !valorDimension.Dimension.Explicita)
                    {
                        //Error, dimensiónes no explicita
                        ManejadorErrores.ManejarError(CodigosErrorXBRL.ExplicitMemberNotExplicitDimensionError, null,
                            "3.1.4.5.2.1  Se encontró un contexto donde aparece un miembro de una dimensión explícita cuyo atributo 'dimension' no apunta a una dimensión explícita" +
                            ": Contexto: " + ctx.Id +
                            ": Dimension: " + valorDimension.QNameDimension, XmlSeverityType.Error);
                        
                    }
                    //Verificar el miembro
                    if(valorDimension.ItemMiembro == null)
                    {
                        //Error, dimensiónes no explicita
                        ManejadorErrores.ManejarError(CodigosErrorXBRL.ExplicitMemberUndefinedQNameError, null,
                            "3.1.4.5.3.1  Se encontró un contexto donde aparece un miembro de una dimensión explícita cuyo valor de dominio no apunta a un elemento" +
                            ": Contexto: " + ctx.Id +
                            ": Dimension: " + valorDimension.QNameMiembro, XmlSeverityType.Error);
                    }
                }
                else
                {
                    //Debe apuntar a una dimensión typed
                    if(valorDimension.Dimension == null || valorDimension.Dimension.Explicita)
                    {
                        //Error, dimensión es no typed
                        ManejadorErrores.ManejarError(CodigosErrorXBRL.TypedMemberNotTypedDimensionError, null,
                            "3.1.4.4.2.1  Se encontró un contexto donde aparece un miembro de una dimensión tipificada cuyo atributo 'dimension' no apunta a una dimensión tipificada"+
                            ": Contexto: " + ctx.Id +
                            ": Dimension: " + valorDimension.QNameDimension, XmlSeverityType.Error);
                        
                    }
                    //Verificar la validez del miembro
                    if (valorDimension.Dimension!=null && valorDimension.ElementoMiembroTipificado != null && 
                        valorDimension.Dimension != null && valorDimension.Dimension.ElementoDimensionTipificada != null &&
                        valorDimension.Dimension.ElementoDimensionTipificada.QualifiedName != null && valorDimension.Dimension.ElementoDimensionTipificada.QualifiedName.Name != null)
                    {
                        if(!(valorDimension.ElementoMiembroTipificado.LocalName.Equals(valorDimension.Dimension.ElementoDimensionTipificada.QualifiedName.Name) &&
                            valorDimension.ElementoMiembroTipificado.NamespaceURI.Equals(valorDimension.Dimension.ElementoDimensionTipificada.QualifiedName.Namespace)))
                        {
                            //Error, dominio no corresponde
                            ManejadorErrores.ManejarError(CodigosErrorXBRL.IllegalTypedDimensionContentError, null,
                                "3.1.4.4.3.3  Se encontró un contexto donde aparece un miembro de una dimensión tipificada cuyo miembro de dominio no apunta a la declaración del elemento" +
                                ": Contexto: " + ctx.Id +
                                ": Dimension: " + valorDimension.QNameDimension +
                                ": Dominio: " + valorDimension.ElementoMiembroTipificado.NamespaceURI+":"+valorDimension.ElementoMiembroTipificado.LocalName, XmlSeverityType.Error);
                        }
                    }
                }
                
                
            }
        }
        /// <summary>
        /// Verifica las dimensiones repetidas en todo el contexto enviado como parámetro
        /// </summary>
        /// <param name="ctx">Contexto</param>
        private void VerificarDimensionesRepetidas(Context ctx, List<MiembroDimension> valoresDimensionContexto)
        {
            if (valoresDimensionContexto == null) return;
            var listaDimensiones = new List<ConceptDimensionItem>();
            foreach (var miembroDimension in valoresDimensionContexto)
            {
                if (miembroDimension.Dimension!= null && listaDimensiones.Contains(miembroDimension.Dimension))
                {
                    //Error, dimensiónes repetidas
                    ManejadorErrores.ManejarError(CodigosErrorXBRL.RepeatedDimensionInInstanceError, null,
                        "3.1.4.2.1  Se encontró un contexto donde aparece un miembro repetido de una dimensión: Contexto: " + ctx.Id +
                        ": Dimension: " + miembroDimension.Dimension.Id ,
                                        XmlSeverityType.Error);
                    break;
                }
                listaDimensiones.Add(miembroDimension.Dimension);
            }
        }

        /// <summary>
        /// Verifica si para algún contexto de la instancia existe la dimensión default en el tipo de elemento de contexto indicado (escenario o segmento)
        /// </summary>
        /// <param name="valoresDimension">Valores de dimensión en el contexto</param>
        /// <param name="dimension">Dimensión a buscar en el contexto</param>
        /// <param name="dimDefault">Valor de la dimensión default</param>
        /// <param name="context"> </param>
        private void VerificarDimensionDefaultEnContexto(IList<MiembroDimension> valoresDimension, ConceptDimensionItem dimension, ConceptItem dimDefault, Context context)
        {
            var miembroDim = valoresDimension.FirstOrDefault(x => x.Dimension == dimension);

            if (miembroDim != null && miembroDim.ItemMiembro != null)
            {
                if (miembroDim.ItemMiembro == dimDefault)
                {
                    //Error, dimensión default está presente en contexto
                    ManejadorErrores.ManejarError(CodigosErrorXBRL.DefaultValueUsedInInstanceError , null,
                        "2.7.1.2.1  Se encontró un contexto donde aparece un miembro predeterminado de una dimensión: Contexto: " + context.Id +
                        ": Dimension: " + dimension.Id + " : Valor Predeterminado:" + dimDefault.Id,
                                        XmlSeverityType.Error);
                }
            }
        }
    }

    
}
