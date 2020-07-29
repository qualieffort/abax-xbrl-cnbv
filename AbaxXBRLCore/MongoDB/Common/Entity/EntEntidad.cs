namespace AbaxXBRLBlockStore.Common.Entity
{

    /// <summary>
    ///     Clase que contiene la estructura del campo 'Entidad' del documento instancia. 
    ///     <author>Ing. Joel Carmona Noriega.</author>
    ///     <creationDate>20151121</creationDate>         
    ///     <version>1.0.0.0</version>
    ///     <standard>SBBT 07.13</standard>
    /// </summary>
    public class EntEntidad
    {
        public string miId { get; set; }
        public string miEspaciodeNombresEntidad { get; set; }

        /// <summary>
        /// Identificador de la identidad
        /// </summary>
        public string IdEntidad { get; set; }

        /// <summary>
        /// Identificador del esquema
        /// </summary>
        public string EsquemaId { get; set; }

        /// <summary>
        /// Identificador de la entidad
        /// </summary>
        public string Id { get; set; }



    }

}
