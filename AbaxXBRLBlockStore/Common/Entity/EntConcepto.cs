using System.Collections.Generic;

namespace AbaxXBRLBlockStore.Common.Entity
{

    /// <summary>
    ///     Clase que contiene la estructura del campo 'concepto' del documento instancia. 
    ///     <author>Ing. Joel Carmona Noriega.</author>
    ///     <creationDate>20151121</creationDate>         
    ///     <version>1.0.0.0</version>
    ///     <standard>SBBT 07.13</standard>
    /// </summary>
    public class EntConcepto
    {
        public string miIdConcepto { get; set; }
        public string miNombreConcepto { get; set; }
        public string miNamespace { get; set; }
        public List<EntEtiqueta> miEtiqueta { get; set; }
    }

}
