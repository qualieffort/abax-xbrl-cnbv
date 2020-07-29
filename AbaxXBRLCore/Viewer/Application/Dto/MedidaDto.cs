using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Viewer.Application.Dto
{
    /// <summary>
    /// Representa una unidad de medida utilizada por una unidad.
    /// <author>José Antonio Huizar Moreno</author>
    /// <version>1.0</version>
    /// </summary>
    public class MedidaDto
    {
        /// <summary>
        /// El nombre de la etiqueta que describe la medida
        /// </summary>
        public string Nombre { get; set; }

        /// <summary>
        /// El espacio de nombres en que se definió la medida
        /// </summary>
        public string EspacioNombres { get; set; }

        /// <summary>
        /// La etiqueta que deberá ser utilizada para presentar la medida
        /// </summary>
        public string Etiqueta { get; set; }
        /// <summary>
        /// Verifica si una medida es equivalente a otra
        /// </summary>
        /// <returns></returns>
        public bool EsEquivalente(MedidaDto comparar)
        {
            if (EspacioNombres == null && comparar.EspacioNombres == null && Nombre == null && comparar.Nombre == null)
            {
                return true;
            }

            if ((EspacioNombres == null && comparar.EspacioNombres != null) || (EspacioNombres != null && comparar.EspacioNombres == null))
            {
                return false;
            }

            if ((Nombre == null && comparar.Nombre != null) || (Nombre != null && comparar.Nombre == null))
            {
                return false;
            }

            return EspacioNombres.Equals(comparar.EspacioNombres) && Nombre.Equals(comparar.Nombre);
        }
    }
}
