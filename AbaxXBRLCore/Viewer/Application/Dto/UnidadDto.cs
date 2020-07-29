using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using AbaxXBRL.Taxonomia;

namespace AbaxXBRLCore.Viewer.Application.Dto
{
    /// <summary>
    /// Implementación de un Data Transfer Object el cual representa una unidad utilizada para expresar un hecho en un documento instancia XBRL.
    /// <author>José Antonio Huizar Moreno</author>
    /// <version>1.0</version>
    /// </summary>
    public class UnidadDto
    {
        /// <summary>
        /// Indica que la unidad sólo se compone de una medida
        /// </summary>
        public const int Medida = 1;

        /// <summary>
        /// Indica que la unidad se compone de un numerador y denominador
        /// </summary>
        public const int Divisoria = 2;
        /// <summary>
        /// El identificador de la unidad dentro del documento instancia.
        /// </summary>
        public string Id { get; set; }

        /// <summary>
        /// El identificador del tipo de unidad
        /// </summary>
        public int Tipo { set; get; }

        /// <summary>
        /// Las medidas utilizadas para describir esta unidad.
        /// </summary>
        public IList<MedidaDto> Medidas { get; set; }

        /// <summary>
        /// Las medidas utilizadas para describir el numerador de la unidad.
        /// </summary>
        public IList<MedidaDto> MedidasNumerador { get; set; }

        /// <summary>
        /// Las medidas utilizadas para describir el denominador de la unidad.
        /// </summary>
        public IList<MedidaDto> MedidasDenominador { get; set; }
        
        /// <summary>
        /// Verifica si la unidad enviada como parámetro es equivalente a esta unidad
        /// </summary>
        /// <param name="unidadComparar">Unidad a comparar</param>
        /// <returns></returns>
        public bool EsEquivalente(UnidadDto unidadComparar)
        {
            //Si es medida comparar todos los elementos measure
            if (Tipo == Unit.Medida)
            {
                //Los elementos pueden estar en desorden
                if (!MedidasEquivalentes(Medidas, unidadComparar.Medidas))
                {
                    return false;
                }
            }
            //Si es una división comparar elementos numerador y denominador
            if (Tipo == Unit.Divisoria)
            {
                if (!MedidasEquivalentes(MedidasNumerador, unidadComparar.MedidasNumerador))
                {
                    return false;
                }
                if (!MedidasEquivalentes(MedidasDenominador, unidadComparar.MedidasDenominador))
                {
                    return false;
                }
            }
            return true;
        }
        /// <summary>
        /// Verifica si la lista de medidas orignales son equivalentes a las medidas a comparar
        /// </summary>
        /// <param name="MedidasOrigen">Lista de medidas origen</param>
        /// <param name="MedidasComparar">Lista de medidas a comparar</param>
        /// <returns>True si son equivalentes, false en otro caso</returns>
        private bool MedidasEquivalentes(IList<MedidaDto> MedidasOrigen, IList<MedidaDto> MedidasComparar)
        {
            if (MedidasOrigen == null && MedidasComparar == null) return true;
            if ((MedidasOrigen != null & MedidasComparar == null) || (MedidasOrigen == null & MedidasComparar != null)) return false;
            if (MedidasOrigen == MedidasComparar) return true;

            if (MedidasOrigen.Count != MedidasComparar.Count)
            {
                return false;
            }
            foreach (var medidaOrigen in MedidasOrigen)
            {
                bool medidaEncontrada = false;
                foreach (var medidaComparar in MedidasComparar)
                {
                    if (medidaOrigen.EsEquivalente(medidaComparar))
                    {
                        medidaEncontrada = true;
                    }
                }
                if (!medidaEncontrada)
                {
                    return false;
                }
            }
            return true;
        }
    }
}
