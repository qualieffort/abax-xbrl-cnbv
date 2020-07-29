namespace AbaxXBRLBlockStore.Common.Entity
{

    /// <summary>
    ///     Clase usada en el parseo del filtro en JSON para generar un filterDefinition que MongoDB pueda procesar sobre los BlockStore. 
    ///     <author>Ing. Joel Carmona Noriega.</author>
    ///     <creationDate>20151121</creationDate>         
    ///     <version>1.0.0.0</version>
    ///     <standard>SBBT 07.13</standard>
    /// </summary>
    public class EntFiltroBlockStore
    {
        public EntEstructuraFiltroConsulta miEstructuraFiltroConsulta { get; set; }
        public string miTipo { get; set; }
        public string miComando { get; set; }
    }

}
