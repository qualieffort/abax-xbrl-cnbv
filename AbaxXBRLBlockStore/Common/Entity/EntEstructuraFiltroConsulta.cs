using System.Collections.Generic;

namespace AbaxXBRLBlockStore.Common.Entity
{

    /// <summary>
    ///     Clase usada para el filtro de la consulta. 
    ///     <author>Ing. Joel Carmona Noriega.</author>
    ///     <creationDate>20151121</creationDate>         
    ///     <version>1.0.0.0</version>
    ///     <standard>SBBT 07.13</standard>
    /// </summary>
    public class EntEstructuraFiltroConsulta
    {
        public string miFiltroCampo { get; set; }
        public List<string> miListaValoresFiltro { get; set; }
    }

}
