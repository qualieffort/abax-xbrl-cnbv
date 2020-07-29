namespace AbaxXBRLBlockStore.Common.Entity
{

    /// <summary>
    ///     Clase que contiene la estructura del campo 'Dimension' del documento instancia. 
    ///     <author>Ing. Joel Carmona Noriega.</author>
    ///     <creationDate>20151121</creationDate>         
    ///     <version>1.0.0.0</version>
    ///     <standard>SBBT 07.13</standard>
    /// </summary>
    public class EntDimension
    {
        public bool miDimensionExplicita { get; set; }
        public string miespaciodeNombreDimension { get; set; }
        public string miNombreDimension { get; set; }
        public string miEspaciodeNombreElementoMiembro { get; set; }
        public string miNombreElementoMiembro { get; set; }
        public string miTipoDimension { get; set; }
    }

}
