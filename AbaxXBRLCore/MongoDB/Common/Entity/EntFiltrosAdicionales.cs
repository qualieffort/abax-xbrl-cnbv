using AbaxXBRLBlockStore.Common.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRLCore.Common.Entity
{
    /// <summary>
    /// Filtro que indica los valores de consulta de emisoras, unidades y periodod
    /// </summary>
    public class EntFiltrosAdicionales
    {
        /// <summary>
        /// Identificadores de grupos de entidades para integrar a las unidades
        /// </summary>
        public long[] gruposEntidades;

        /// <summary>
        /// Arreglo de Entidades 
        /// </summary>
        public EntEntidad[] entidades;

        /// <summary>
        /// Listado de fideicomisos a consultar
        /// </summary>
        public string[] fideicomisos;

        /// <summary>
        /// Listado de fechas reporte a consultar
        /// </summary>
        public DateTime[] fechasReporte;

        /// <summary>
        /// Listado de trimestres a consultar
        /// </summary>
        public string[] trimestres;

        /// <summary>
        /// Listado de unidades a consultar
        /// </summary>
        public string[] unidades;

        /// <summary>
        /// Listado de periodos de la consulta de informacion
        /// </summary>
        public EntPeriodo[] periodos;



        /// <summary>
        /// Listado de entidades de la consulta de informacion
        /// </summary>
        public string[] entidadesId;

        /// <summary>
        /// Se agregan en el diccionario las entidades totales que se realizo la consulta, incluye las que tienen los grupos de entidades
        /// </summary>
        public Dictionary<string, string> entidadesDiccionario;
    }
}
