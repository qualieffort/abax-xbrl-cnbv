using System.Collections.Generic;

namespace AbaxXBRLBlockStore.Common.Entity
{

    /// <summary>
    ///     Clase usada para obtener los valores distintos de una configuración determinada. 
    ///     <author>Ing. Joel Carmona Noriega.</author>
    ///     <creationDate>20151203</creationDate>         
    ///     <version>1.0.0.0</version>
    ///     <standard>SBBT 07.13</standard>
    /// </summary>
    public class EntConsultaDistinct
    {
        public List<EntFiltroBlockStore> miListaFiltroBlockStore { get; set; }
        public List<EntProyeccionCampos> miListaProyeccionCampos { get; set; }
    }

}
