using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRL.Taxonomia.Validador.Impl
{
    /// <summary>
    /// Implementación de un validador de documento de instancia que sirve para validar los elementos duplicados
    /// de un documento de instancia
    /// </summary>
    /// <author>Emigdio Hernandez</author>
    class ValidadorDuplicadosDocumentoInstancia : IValidadorDocumentoInstancia
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
            if (DocumentoInstancia != null && ManejadorErrores != null)
            {
                foreach(var keyValHechos in DocumentoInstancia.HechosPorIdConcepto){
                    foreach (var hecho in keyValHechos.Value) {
                        if (hecho.DuplicadoCon == null)
                        {
                            foreach (var hechoComp in keyValHechos.Value)
                            {
                                if (hecho != hechoComp)
                                {
                                    if (VerificarDuplicidad(hecho, hechoComp, DocumentoInstancia.Hechos))
                                    {
                                        //Hecho duplicado
                                        hecho.DuplicadoCon = new List<Fact>();
                                        hechoComp.DuplicadoCon = new List<Fact>();
                                        hecho.DuplicadoCon.Add(hechoComp);
                                        hechoComp.DuplicadoCon.Add(hecho);
                                    }
                                }
                            }
                        }
                    }
                    
                }

            }
        }

        /// <summary>
        /// Verifica y agrega los elementos con los que este elemento se duplica a su lista interna de duplicados
        /// </summary>
        /// <param name="hecho">Elemento a verificar</param>
        private Boolean VerificarDuplicidad(Fact hecho, Fact hechoComparar, IList<Fact> Hechos)
        {
            var duplicado = false;
            if (hecho is FactItem)
            {

                if (((FactItem)hecho).Contexto.StructureEquals(((FactItem)hechoComparar).Contexto) && hecho.ParentEqual(hechoComparar))
                    {
                        duplicado = true;

                        if (hecho is FactNumericItem)
                        {
                            duplicado = (hecho as FactNumericItem).UnitEquals(hechoComparar as FactNumericItem);
                        }
                        
                    }
                
            }
            else if (hecho is FactTuple)
            {
                //buscar otras tuplas
                foreach (FactTuple tuplaComparar in Hechos.Where(hc => hc != hecho && hc is FactTuple))
                {
                    //Verificar duplicidad de tuplas
                    if (EsTuplaDuplicada((FactTuple)hecho, tuplaComparar))
                    {
                        duplicado = true;
                    }
                }
            }
            return duplicado;
        }
        /// <summary>
        /// Verifica si las tuplas enviadas como parámetro están duplicadas
        /// Todos los elementos dentro de la tupla deben ser s-equals y v-equals y si
        /// tiene otras tuplas anidadas deben ser duplicadas
        /// </summary>
        /// <param name="factTuple">Tupla origen</param>
        /// <param name="tuplaComparar">Tupla con la que se compara</param>
        /// <returns></returns>
        private bool EsTuplaDuplicada(FactTuple factTuple, FactTuple tuplaComparar)
        {
            if (factTuple == tuplaComparar) return false;
            if (!factTuple.Concepto.Id.Equals(tuplaComparar.Concepto.Id)) return false;
            if (factTuple.Hechos.Count != tuplaComparar.Hechos.Count) return false;
            if (!factTuple.ParentEqual(tuplaComparar)) return false;

            foreach (Fact hechoEnTupla in factTuple.Hechos)
            {
                Boolean equivalenteEncontrado = false;
                foreach (Fact hechoEnTuplaComparar in tuplaComparar.Hechos)
                {
                    //otra tupla
                    if (hechoEnTupla is FactTuple)
                    {
                        if (hechoEnTuplaComparar is FactTuple && EsTuplaDuplicada((FactTuple)hechoEnTupla, (FactTuple)hechoEnTuplaComparar))
                        {
                            equivalenteEncontrado = true;
                            break;
                        }
                    }
                    else if (hechoEnTupla is FactNumericItem) //un numeric item
                    {
                        if (hechoEnTuplaComparar is FactNumericItem &&
                            hechoEnTupla.Concepto == hechoEnTuplaComparar.Concepto &&
                            ((FactNumericItem)hechoEnTupla).ValueEquals((FactNumericItem)hechoEnTuplaComparar))
                        {
                            equivalenteEncontrado = true;
                            break;
                        }
                    }
                    else
                    {
                        //no numeric item
                        if (hechoEnTuplaComparar is FactItem &&
                            hechoEnTupla.Concepto == hechoEnTuplaComparar.Concepto &&
                            ((FactItem)hechoEnTupla).ValueEquals((FactItem)hechoEnTuplaComparar))
                        {
                            equivalenteEncontrado = true;
                            break;
                        }
                    }
                }
                if (!equivalenteEncontrado)
                {
                    //elemento sin match
                    return false;
                }

            }
            return true;
        }
    }
}
