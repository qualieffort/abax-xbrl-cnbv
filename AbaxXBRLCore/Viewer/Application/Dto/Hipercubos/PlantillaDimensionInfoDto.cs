using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Viewer.Application.Dto.Hipercubos
{
    /// <summary>
    /// Plantilla auxiliar para la generación de dimensiones.
    /// </summary>
    public class PlantillaDimensionInfoDto : DimensionInfoDto
    {
        ///<summary>
        /// Prefijo del valor a presentar.
        ///</summary>
        public string PrefijoValor{get; set;}
        ///<summary>
        /// Subfijo del valor a presentar.
        ////
        public string SubfijoValor{get; set;}
        ///<summary>
        /// Identificador de la etiqueta que será utilizada cuando se agergen nuevos elementos a la dimension.
        ///</summary>
        public string EtiquetaNuevoElemento { get; set; }
        /// <summary>
        /// Asigna los elementos de la dimensión a la plantilla.
        /// </summary>
        /// <param name="input">Elemento del que se tomarán los datos a popular.</param>
        public PlantillaDimensionInfoDto Deserialize(DimensionInfoDto input) 
        {
            this.Explicita = input.Explicita;
            this.IdDimension = input.IdDimension;
            this.QNameDimension = input.QNameDimension;
            //this.ElementoMiembroTipificado = input.ElementoMiembroTipificado;
            if (input.Explicita)
            {
                var indexToken = input.QNameItemMiembro.LastIndexOf(":");
                this.PrefijoValor = input.QNameItemMiembro.Substring(0, indexToken + 1);
                this.EtiquetaNuevoElemento = input.QNameItemMiembro.Substring(indexToken + 1);
                this.SubfijoValor = String.Empty;
            }
            else
            {
                var indexToken = input.ElementoMiembroTipificado.IndexOf(">");
                var indexTokenEnd = input.ElementoMiembroTipificado.IndexOf("<", indexToken);
                var elementoLength = (indexTokenEnd - indexToken) - 1;
                this.PrefijoValor = input.ElementoMiembroTipificado.Substring(0, (indexToken + 1));
                this.EtiquetaNuevoElemento = input.ElementoMiembroTipificado.Substring((indexToken + 1), elementoLength);
                this.SubfijoValor = input.ElementoMiembroTipificado.Substring(indexTokenEnd); ;
            }
            return this;
        }
        /// <summary>
        /// Obtiene el QNameItemMiembro ó el ElementoMiembroTipificado según el tipo  
        /// </summary>
        /// <returns></returns>
        public string ObtenIdMiembro(DimensionInfoDto dimension) 
        {
            var nombre = ObtenNombreMiembro(dimension);
            return nombre.Replace(" ", "_").Replace(":", "_");
            
        }
        /// <summary>
        /// Retorna le valor limpio del miembro de la dimensión
        /// </summary>
        /// <param name="dimension">Dimension a evaluar.</param>
        /// <returns>Nombre sin prefijo ni subfijo.</returns>
        public string ObtenNombreMiembro(DimensionInfoDto dimension)
        {
            string nombre = null;
            if (dimension.QNameDimension == QNameDimension) 
            {
                var nombreCompleto = Explicita ? dimension.QNameItemMiembro : dimension.ElementoMiembroTipificado;
                nombre = nombreCompleto.Replace(PrefijoValor, String.Empty);
                if (!String.IsNullOrEmpty(SubfijoValor)) 
                {
                    nombre = nombre.Replace(SubfijoValor,String.Empty);
                }
            }
            return nombre;
        }

        /// <summary>
        /// Genera el identificador de la dimension en base a un nombre base.
        /// </summary>
        /// <param name="nombreMiembro">Nombre del miebro que se pretende generar.</param>
        /// <returns>Identificador en base a la plantilla.</returns>
        public String GeneraIdentificador(String nombreMiembro)
        {
            var nombreAjustado = (nombreMiembro ?? "")
                .Replace("\"", "&quot;")
                .Replace("'", "&apos;")
                .Replace("<", "&lt;")
                .Replace(">", "&gt;")
                .Replace("&", "&amp;");

            var builder = new StringBuilder();
            builder.Append(PrefijoValor);
            builder.Append(nombreAjustado);
            builder.Append(SubfijoValor);
            return builder.ToString();
        }
        /// <summary>
        /// Genera un nuevo miembro de dimension con el template actual.
        /// </summary>
        /// <param name="nombreMiembro">Nombre del miembro.</param>
        /// <returns>Miembro de la dimensión.</returns>
        public DimensionInfoDto CreaMiembroDimension(String nombreMiembro)
        {
            var miembroDimension = new DimensionInfoDto()
            {
                Explicita = this.Explicita,
                IdDimension = this.IdDimension,
                IdItemMiembro = this.IdItemMiembro,
                QNameDimension = this.QNameDimension,
                QNameItemMiembro = this.QNameItemMiembro,
                ElementoMiembroTipificado = this.ElementoMiembroTipificado
            };
            if (Explicita)
            {
                var slashLastIndex = PrefijoValor.LastIndexOf("/");
                var prefijoId = PrefijoValor.Substring(slashLastIndex).Replace(":", "_");
                miembroDimension.IdItemMiembro = prefijoId + nombreMiembro;
                miembroDimension.QNameItemMiembro = GeneraIdentificador(nombreMiembro);
            }
            else
            {
                miembroDimension.ElementoMiembroTipificado = GeneraIdentificador(nombreMiembro);
            }
            return miembroDimension;
        }
    }
}
