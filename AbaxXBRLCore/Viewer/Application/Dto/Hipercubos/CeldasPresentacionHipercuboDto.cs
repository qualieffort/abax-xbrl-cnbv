using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRLCore.Viewer.Application.Dto.Hipercubos
{
    /// <summary>
    /// Contiene la definición de una celda que será presentada.
    /// </summary>
    public class CeldasPresentacionHipercuboDto
    {
        /// <summary>
        /// Constructor por defecto.
        /// </summary>
        public CeldasPresentacionHipercuboDto()
        {
            Colspan = 1;
            ColspanTitulo = 1;
        }
        /// <summary>
        /// Identificador del concepto que se va a presentar.
        /// </summary>
        public String IdConcepto { get; set; }
        /// <summary>
        /// Lista con los identificadores de conceptos que se pretenden presentar.
        /// Esto aplica cuando se requieren concatenar o cuando debe tomarse el primero que se encuentre.
        /// </summary>
        public IList<String> IdsConceptos { get; set; }
        /// <summary>
        /// Indica que solo se presentará el valor de la celda sin el título o nombre del concepto.
        /// </summary>
        public bool SoloValor { get; set; }
        /// <summary>
        /// Indica cuando es solo valor que se debe manejar con los estilos de los títlos.
        /// </summary>
        public bool EsTitulo { get; set; }
        /// <summary>
        /// Indica que debe concetenar los valores encontardos en el listado de identificadores de conceptos.
        /// </summary>
        public bool ConcatenarValores { get; set; }
        /// <summary>
        /// Indica la cantidad de columnas que abarca esta celda.
        /// </summary>
        public int Colspan { get; set; }
        /// <summary>
        /// Colspan que será asignado al título de la celda, si este no se indica se asignará un colspan de 1.
        /// Este se aplica únicamente cuando el título y el valor se presentan en la misma fila.
        /// </summary>
        public int ColspanTitulo { get; set; }
        /// <summary>
        /// Indica si la celda debe de presentarse aun cuando este vacía.
        /// </summary>
        public bool MostrarVacio { get; set; }
        /// <summary>
        /// Concepto que se utlizará con título del elemento, en caso de que no corresponda con el IdConcepto dado.
        /// </summary>
        public String IdConceptoTitulo { get; set; }
        /// <summary>
        /// Indica si el elemento debe agregarse en el indice.
        /// </summary>
        public bool AgregarEnIndice { get; set; }
        /// <summary>
        /// Indica el archivo adjunto al que se debe hacer referencia.
        /// </summary>
        public String ArchivoAdjunto { get; set; }
    }
}
