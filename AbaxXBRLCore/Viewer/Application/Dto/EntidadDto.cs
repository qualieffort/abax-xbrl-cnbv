using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using AbaxXBRLCore.Common.Constants;

namespace AbaxXBRLCore.Viewer.Application.Dto
{
    /// <summary>
    /// Implementación de un Data Transfer Object el cual representa un entidad referenciada desde un Contexto XBRL en un documento instancia.
    /// <author>José Antonio Huizar Moreno</author>
    /// <version>1.0</version>
    /// </summary>
    public class EntidadDto
    {
        /// <summary>
        /// Constructor predeterminado
        /// </summary>
        public EntidadDto()
        {
        }
        /// <summary>
        /// Constructor mínimo con el esquema id y el identificador de la entidad
        /// </summary>
        /// <param name="_esquemaId">Esquema a asignar</param>
        /// <param name="_id">Identificador a asignar</param>
        public EntidadDto(string _esquemaId, string _id)
        {
            this.EsquemaId = _esquemaId;
            this.Id = _id;
        }
        /// <summary>
        /// Obtiene el identificador interno de la aplicación de la entidad el cual consiste en el nombre completamente calificado de la entidad.
        /// </summary>
        public string IdEntidad { get { return EsquemaId + CommonConstants.SeparadorNombreCalificado + Id; } }

        /// <summary>
        /// El URI del espacio de nombres del esquema de identificación, provee un mecanismo para referencias autoridades de nombrado.
        /// </summary>
        public string EsquemaId { get; set; }

        /// <summary>
        /// El token que identifica a la entidad dentro del espacio de nombres del esquema de identificación.
        /// </summary>
        public string Id { get; set; }

        /// <summary>
        /// El elemento segmento es un contenedor opcional para etiquetas que el preparador del documento instancia DEBERÍA utilizar para identificar mejor el segmento de negocio  en los casos que el identificador de la Entidad no es suficiente.
        /// </summary>
        public string Segmento { get; set; }
        /// <summary>
        /// Indica si el segmento de la entidad tiene información dimensional
        /// </summary>
        public bool ContieneInformacionDimensional { get; set; }
        /// <summary>
        /// Contiene los valores de miembros de dimensión existentes en el contexto
        /// </summary>
        public IList<DimensionInfoDto> ValoresDimension { get; set; }

        /// <summary>
        /// Verifica si este objeto es igual o equivalente a otra entidad
        /// </summary>
        /// <param name="entidad">entidad la entidad contra la cual se comparará esta entidad.</param>
        /// <returns>true si las dos entidad son estructuralmente iguales. false en cualquier otro caso</returns>
        public bool EstructuralmenteIgual(EntidadDto entidad) {
            bool resultado = true;
            if (entidad == null) {
                resultado = false;
            } else {
                if (this.EsquemaId.Equals(entidad.EsquemaId) && this.Id.Equals(entidad.Id) && this.ContieneInformacionDimensional == entidad.ContieneInformacionDimensional) {
                    if (this.ContieneInformacionDimensional) {

                        if ((this.ValoresDimension != null && entidad.ValoresDimension == null) || (entidad.ValoresDimension != null && this.ValoresDimension == null)) {
                            return false;
                        } else {
                            if (this.ValoresDimension != null && entidad.ValoresDimension != null) {
                                if (this.ValoresDimension.Count != entidad.ValoresDimension.Count) {
                                    resultado = false;
                                } else {
                                    foreach (var valorDimension in this.ValoresDimension) {
                                        bool equivalenteEncontrado = false;
                                        foreach (var valorDimensionComparar in entidad.ValoresDimension) {
                                            if (valorDimensionComparar.EsEquivalente(valorDimension)) {
                                                equivalenteEncontrado = true;
                                                break;
                                            }
                                        }
                                        if (!equivalenteEncontrado) {
                                            resultado = false;
                                            break;
                                        }
                                    }
                                }
                            }
                        }
                    }
                } else {
                    resultado = false;
                }
            }
            return resultado;
        }
    }
}
