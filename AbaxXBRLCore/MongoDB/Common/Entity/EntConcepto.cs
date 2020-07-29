using AbaxXBRLCore.Common.Entity;
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
        public string Nombre { get; set; }


        /// <summary>
        /// Definicion de la etiqueta que va a tener en la vista en el caso que se un concepto abstracto
        /// </summary>
        public string EtiquetaVista { get; set; }

        /// <summary>
        /// Definicion de etiquetas que tiene el concepto
        /// </summary>
        public List<EntEtiqueta> etiqueta { get; set; }


        /// <summary>
        /// Definicion de etiquetas que tiene el concepto abstracto
        /// </summary>
        public Dictionary<string,string> EtiquetaConceptoAbstracto { get; set; }

        /// <summary>
        /// Identificador unico del concepto
        /// </summary>
        public string Id;


        /// <summary>
        /// Espacio de nombres de la taxonomia del concepto
        /// </summary>
        public string EspacioNombres;

        /// <summary>
        /// Espacio de nombres de la taxonomia del concepto
        /// </summary>
        public string EspacioNombresTaxonomia;


        /// <summary>
        /// Orden de presentacion del concepto
        /// </summary>
        public int orden;

        /// <summary>
        /// Indentacion en la presentacion del concepto
        /// </summary>
        public int Indentacion;

        /// <summary>
        /// Indica si el valor que va a mostrar es abstracto y no tiene información de algun hecho
        /// </summary>
        public bool EsAbstracto;


        /// <summary>
        /// Informacion dimensional del concepto
        /// </summary>
        public EntInformacionDimensional[] InformacionDimensional;

        
    }

}
