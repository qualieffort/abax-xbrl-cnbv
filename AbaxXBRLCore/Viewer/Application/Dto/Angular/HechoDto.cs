using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Viewer.Application.Dto.Angular
{
    /// <summary>
    /// DTO con la información del hecho a mostrar.
    /// </summary>
    public class HechoDto
    {  
        /// <summary>
        /// Identificador del hecho.
        /// </summary>
        public long IdHecho;
        /// <summary>
        /// Empresa a la que hacer referencia el hecho.
        /// </summary>
        public string ClaveEmpresa; 
        /// <summary>
        /// Valor del hecho.
        /// </summary>
        public double Valor;
        /// <summary>
        /// Tipo de únidad del hecho.
        /// </summary>
        public string Unidad;
        /// <summary>
        /// Identificador del documento al que pertenece el hecho.
        /// </summary>
        public long IdDocumentoInstancia;
        /// <summary>
        /// Etiqueta del hecho.
        /// </summary>
        public string Etiqueta;
        /// <summary>
        /// Descripción de la dimensión.
        /// </summary>
        public string Dimension;
        /// <summary>
        /// Estilo a utilizar para mostrar el campo.
        /// </summary>
        public string Clase;
    }
    
}
