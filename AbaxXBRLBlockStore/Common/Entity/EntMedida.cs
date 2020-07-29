using System.Collections.Generic;

namespace AbaxXBRLBlockStore.Common.Entity
{

    /// <summary>
    ///     Clase que contiene la estructura del campo 'Medida' del documento instancia. 
    ///     <author>Ing. Joel Carmona Noriega.</author>
    ///     <creationDate>20151121</creationDate>         
    ///     <version>1.0.0.0</version>
    ///     <standard>SBBT 07.13</standard>
    /// </summary>
    public class EntMedida
    {
        public bool miMedidaesDivisorio { get; set; }
        public List<EntUnidad> miTipoMedida { get; set; }
        public List<EntUnidad> miTipoMedidaDenominador { get; set; }
    }

}
