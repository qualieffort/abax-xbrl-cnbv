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
    public class EntEstructuraInstancia
    {
        public string miIdTaxonomia { get; set; }
        public EntEntidad miEntidad { get; set; }
        public string miRoll { get; set; }
        public EntConcepto miConcepto { get; set; }
        public string miTipoBalance { get; set; }
        public string miIdTipoDato { get; set; }
        public string miValor { get; set; }
        public decimal miValorRedondeado { get; set; }
        public string miPrecision { get; set; }
        public string miDecimales { get; set; }
        public bool miEsTipoDatoNumerico { get; set; }
        public bool miEsTipoDatoFraccion { get; set; }
        public bool miEsValorNil { get; set; }
        public string miIdContexto { get; set; }
        public EntPeriodo miPeriodo { get; set; }
        public int? miAño { get; set; }
        public string miTrimestre { get; set; }
        public EntMedida miMedida { get; set; }
        public List<EntDimension> miDimension { get; set; }
        public string miIdUnidad { get; set; }
    }

}
