using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRLCore.Viewer.Application.Dto.Angular
{
    /// <summary>
    /// Estructura que define los elementos necearios para llevar un control de paginación simple.
    /// </summary>
    public class PaginacionSimpleDto <T>
    {
        /// <summary>
        /// Total de registros existentes.
        /// </summary>
        public int TotalRregistros { get; set; }
        /// <summary>
        /// Cantidad de registros a mostrar en una sola página.
        /// </summary>
        public int RegistrosPorPagina { get; set; }
        /// <summary>
        /// Página que se esta mostrando actualmente.
        /// </summary>
        public int PaginaActual { get; set; }
        /// <summary>
        /// Diccionario para definir un ordenamiento de los datos en el cual se indica el nombre del campo por el cuar se va ha ordenar el tipo de ordenamiento.
        /// 0.- Acendente.
        /// 1.- Decendente.
        /// </summary>
        public IDictionary<string, int> Ordenamiento { get; set; }
        /// <summary>
        /// Diccionario con parametros para el filtrado.
        /// </summary>
        public IDictionary<string,string> Filtro { get; set; }
        /// <summary>
        /// Lista con los registros retornados para desplegarse en la página acutal.
        /// </summary>
        public IList<T> ListaRegistros { get; set; }
    }
}
