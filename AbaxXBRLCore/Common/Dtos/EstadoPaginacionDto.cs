namespace AbaxXBRLCore.Common.Dtos
{
    /// <summary>
    /// DTO que contiene la información necesaria para realizar la paginación de una consulta.
    /// <author>José Antonio Huizar Moreno</author>
    /// <version>1.0</version>
    /// </summary>
    public class EstadoPaginacionDto
    {
        #region propiedades

        private long totalRegistros;
        private long tamanioPagina;
        private long paginaActual;
        private long numeroPaginas;

        #endregion

        #region atributos

        /// <summary>
        /// El total de registros arrojados por la consulta.
        /// </summary>
        public long TotalRegistros
        {
            get { return totalRegistros; }
            set { totalRegistros = value; }
        }

        /// <summary>
        /// El número de registros por página.
        /// </summary>
        public long TamanioPagina
        {
            get { return tamanioPagina; }
            set { tamanioPagina = value; }
        }

        /// <summary>
        /// El número de página actual.
        /// </summary>
        public long PaginaActual
        {
            get { return paginaActual; }
            set { paginaActual = value; }
        }

        /// <summary>
        /// El número de páginas que arroja la consulta.
        /// </summary>
        public long NumeroPaginas
        {
            get { return numeroPaginas; }
            set { numeroPaginas = value; }
        }

        #endregion

        /// <summary>
        /// Obtiene el número de registro inicial para obtener una página de resultados.
        /// </summary>
        /// <returns>el número de registro inicial para una página de resultados.</returns>
        public long ObtenerNumeroRegistroInicial()
        {
            return (paginaActual - 1) * tamanioPagina + 1;
        }

        /// <summary>
        /// Obtiene el número de registro final para obtener una página de resultados.
        /// </summary>
        /// <returns>el número de registro final para una página de resultados.</returns>
        public long ObtenerNumeroRegistroFinal()
        {
            return (paginaActual * tamanioPagina) > totalRegistros ? totalRegistros : (paginaActual * tamanioPagina);
        }
    }
}
