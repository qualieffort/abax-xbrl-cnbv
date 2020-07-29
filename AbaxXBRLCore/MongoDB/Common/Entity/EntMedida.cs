namespace AbaxXBRLBlockStore.Common.Entity
{

    /// <summary>
    ///     Clase que contiene la estructura del campo 'Unidad' del documento instancia. 
    ///     <author>Ing. Joel Carmona Noriega.</author>
    ///     <creationDate>20151121</creationDate>         
    ///     <version>1.0.0.0</version>
    ///     <standard>SBBT 07.13</standard>
    /// </summary>
    public class EntMedida
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
    }

}
