using java.lang;
using System;
using System.Collections.Generic;

namespace AbaxXBRLBlockStore.Common.Entity
{

    /// <summary>
    ///     Clase que contiene la estructura del documento instancia a guardar en el BlockStore. 
    ///     <author>Ing. Joel Carmona Noriega.</author>
    ///     <creationDate>20151121</creationDate>         
    ///     <version>1.0.0.0</version>
    ///     <standard>SBBT 07.13</standard>
    /// </summary>
    public class EntEstructuraInstancia : ICloneable
    {

        public string EspacioNombresPrincipal { get; set; }
        public EntEntidad Entidad { get; set; }
        public string Rol { get; set; }
        public EntConcepto Concepto { get; set; }
        public string TipoBalance { get; set; }
        public string IdTipoDato { get; set; }
        public string Valor { get; set; }
        public decimal ValorRedondeado { get; set; }
        public string Precision { get; set; }
        public string Decimales { get; set; }
        public bool EsTipoDatoNumerico { get; set; }
        public bool EsTipoDatoFraccion { get; set; }
        public bool EsValorNil { get; set; }
        public string IdContexto { get; set; }
        public EntPeriodo Periodo { get; set; }
        public int? Ejercicio { get; set; }
        public int? Trimestre { get; set; }
        public EntUnidades Medida { get; set; }
        public List<EntDimension> Dimension { get; set; }
        public string IdUnidad { get; set; }

        public string IdHecho { get; set; }

        /// <summary>
        /// Codigo que identifica el hash de un registro
        /// </summary>
        public string codigoHashRegistro { get; set; }

        /// <summary>
        /// Constructor principal de la estructura de instancia
        /// </summary>
        public EntEstructuraInstancia() { }

        /// <summary>
        /// Realiza un clon de la estrcutura de instancia s
        /// </summary>
        /// <returns></returns>
        public object Clone()
        {
            return this.MemberwiseClone();
        }

    }
}
