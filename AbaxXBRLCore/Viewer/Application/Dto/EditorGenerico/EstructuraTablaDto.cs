using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Viewer.Application.Dto
{
    /// <summary>
    /// Implementación de un DTO el cual representa una estructura de la tabla del documento instancia XBRL.
    /// <author>Luis Angel Morales Gonzalez</author>
    /// <version>1.0</version>
    /// </summary>
    public class EstructuraTablaDto
    {
        /** La información del encabezado de la tabla */
        public EncabezadoTablaDto encabezado;

        /** El listado de renglones que conforman la tabla */
        public List<RenglonTablaDto> renglones;

        //Indica si en esta tabla está agrupada la dimensión de fecha con otras fechas de inicio y fin
        public bool agruparFechas;
        
        //Tabla de hechos completos
        public Dictionary<int,Dictionary<int,CeldaTablaDto>> tablaHechos; 
        
        //Número de hechos encontrados en cada columna
        public Dictionary<int,int> numeroHechosPorColumna;
        
        //Indica si se deben mostrar las columnas sin hechos
        public bool mostrarColumnasVacias;

        //Indica si se deben mostrar los renglones vacios
        public bool mostrarRenglonesVacios;

        /// <summary>
        /// Constructor de la estructura de la tabla
        /// </summary>
        public EstructuraTablaDto(){
            this.encabezado = new EncabezadoTablaDto();
            this.renglones = new List<RenglonTablaDto>();
            this.numeroHechosPorColumna = new Dictionary<int,int>();
            this.mostrarColumnasVacias = false;
            this.mostrarRenglonesVacios = false;
            this.agruparFechas = false;
        }

    }
}
