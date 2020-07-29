using AbaxXBRLCore.Viewer.Application.Dto.EditorGenerico;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Viewer.Application.Dto
{
    /// <summary>
    /// Implementación de un DTO el cual representa una celada de la tabla del documento instancia XBRL.
    /// <author>Luis Angel Morales Gonzalez</author>
    /// <version>1.0</version>
    /// </summary>
    public class CeldaTablaDto
    {
        //Miembro que la dimensión que se pinta en la celda
        public MiembroDimensionDto  miembroDimension;

        //Hechos encontrados que corresponden a la celda
        public List<HechoDto> hechosEnCelda;

        //Hecho actual mostrado 
        public HechoDto hechoMostrado;
        /// <summary>
        /// Valor del hecho con formato
        /// </summary>
        public string ValorHechoFormato;

        //Indica si el hecho es el último de la estructura del elemento
        public bool esUltimoHecho;

        /// <summary>
        /// Identifica si el campo a mostrar es de tipo text block
        /// </summary>
        public bool EsCampoTextBlock;

        //colspan
        public int numeroColumnas;

        // Numero de renglones que abarca esta celda
        public int rowspan;

        //Indica si se pinta esta celda o no
        public bool visible;

        //Indica si es una celda que debe de poner una linea derecha como termino de agrupación
        public bool presentaTerminoAgrupacion;
        /// <summary>
        /// Bandera que indica si cambio el vloar del hecho para el comparador de documentos.
        /// </summary>
        public bool CambioValorComparador;

    }
}
