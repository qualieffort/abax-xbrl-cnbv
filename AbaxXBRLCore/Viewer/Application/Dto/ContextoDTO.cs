using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Viewer.Application.Dto
{
    /// <summary>
    /// Implementación de un Data Transfer Object el cual representa un Contexto de Información dentro de un documento instancia XBRL.
    /// <author>José Antonio Huizar Moreno</author>
    /// <version>1.0</version>
    /// </summary>
    public class ContextoDto
    {
        /// <summary>
        /// El identificador único del contexto dentro del documento instancia XBRL.
        /// </summary>
        public string Id { get; set; }

        /// <summary>
        /// El objeto que contiene la definición del periodo asociado al contexto
        /// </summary>
        public PeriodoDto Periodo { get; set; }

        /// <summary>
        ///  El elemento opcional segmento permite que se incluyan etiquetas válidas adicionales para identificar las condiciones en que se reporta la información.
        /// </summary>
        public string Escenario { get; set; }

        /// <summary>
        /// Indica que este contexto ha sido creado para relacionarse con información de un formato dimensional
        /// </summary>
        public bool ContieneInformacionDimensional { get; set; }
        /// <summary>
        /// Contiene los valores de miembros de dimensión existentes en el contexto
        /// </summary>
        public IList<DimensionInfoDto> ValoresDimension { get; set; }
        /// <summary>
        /// Objeto de entidad a la cual se reporta este contexto, contiene la información del segmento también
        /// </summary>
        public EntidadDto Entidad { get; set; }

        /// <summary>
        /// Verifica si las dimensiones enviadas como parámetro son equivalentes a los valores dimensionales del contexto, ya sea en el escenario o en el segmento
        /// </summary>
        /// <param name="valoresDimensiones">Valores a comprar</param>
        /// <returns>True si son valores equivalentes, false ne otro caso</returns>
        public bool SonDimensionesEquivalentes(IList<DimensionInfoDto> valoresDimensiones)
        {
            var valoresDimensionPropios = new List<DimensionInfoDto>();
            if (ValoresDimension != null)
            {
                valoresDimensionPropios.AddRange(ValoresDimension);
            }
            if (Entidad.ValoresDimension != null)
            {
                valoresDimensionPropios.AddRange(Entidad.ValoresDimension);
            }

            var countValoresComparar = valoresDimensiones != null ? valoresDimensiones.Count : 0;
            if (countValoresComparar != valoresDimensionPropios.Count)
            {
                return false;
            }

            if (valoresDimensiones != null)
            {
                foreach (var dimension in valoresDimensionPropios)
                {
                    var encontrada = false;
                    foreach (var dimensionComparar in valoresDimensiones)
                    {
                        if (dimension.EsEquivalente(dimensionComparar))
                        {
                            encontrada = true;
                            break;
                        }
                    }
                    if (!encontrada)
                    {
                        return false;
                    }
                }
            }

            
            return true;
        }

        /// <summary>
        /// Determina si un contexto es estructuralmente igual a este contexto.
        /// </summary>
        /// <param name="contexto">contexto el contexto contra el cual se comparará este concepto.</param>
        /// <returns>true si ambos contextos son estructuralmente iguales. false en cualquier otro caso.</returns>
        public bool EstructuralmenteIgual(ContextoDto contexto)
        {
            bool resultado = true;

            if (contexto == null)
            {
                resultado = false;
            }
            else
            {
                if ((this.Periodo != null && contexto.Periodo == null) ||
                    (this.Periodo == null && contexto.Periodo != null))
                {
                    resultado = false;
                }
                else
                {
                    if (this.Periodo != null && contexto.Periodo != null)
                    {
                        if (this.Periodo.EstructuralmenteIgual(contexto.Periodo))
                        {
                            if ((this.Entidad != null && contexto.Entidad == null) || (this.Entidad == null && contexto.Entidad != null))
                            {
                                resultado = false;
                            }
                            else
                            {
                                if (this.Entidad != null && contexto.Entidad != null)
                                {
                                    if (this.Entidad.EstructuralmenteIgual(contexto.Entidad))
                                    {
                                        if (this.ContieneInformacionDimensional != contexto.ContieneInformacionDimensional)
                                        {
                                            resultado = false;
                                        }
                                        else
                                        {
                                            if ((this.ValoresDimension != null && contexto.ValoresDimension == null) || (contexto.ValoresDimension != null && this.ValoresDimension == null))
                                            {
                                                return false;
                                            }
                                            else
                                            {
                                                if (this.ValoresDimension != null && contexto.ValoresDimension != null)
                                                {
                                                    if (this.ValoresDimension.Count != contexto.ValoresDimension.Count)
                                                    {
                                                        resultado = false;
                                                    }
                                                    else
                                                    {
                                                        foreach (var valorDimension in this.ValoresDimension)
                                                        {
                                                            bool equivalenteEncontrado = false;
                                                            foreach (var valorDimensionComparar in contexto.ValoresDimension)
                                                            {
                                                                if (valorDimensionComparar.EsEquivalente(valorDimension))
                                                                {
                                                                    equivalenteEncontrado = true;
                                                                    break;
                                                                }
                                                            }
                                                            if (!equivalenteEncontrado)
                                                            {
                                                                resultado = false;
                                                                break;
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    else
                                    {
                                        resultado = false;
                                    }
                                }
                            }
                        }
                        else
                        {
                            resultado = false;
                        }
                    }
                }
            }

            return resultado;
        }

       
    }
}
