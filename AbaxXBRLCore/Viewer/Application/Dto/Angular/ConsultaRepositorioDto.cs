using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Viewer.Application.Dto.Angular
{
    /// <summary>
    /// DTO con la información para el despliegue de hechos en la consulta de repositorio.
    /// </summary>
    public class ConsultaRepositorioDto
    {
        
        /// <summary>
        /// Listado con los documentos de instancia a mostrar.
        /// </summary>
        public IList<DocumentoInstanciaDto> DocumentosInsntacia;
        /// <summary>
        /// Listado de contextos en los que se hace referencia a los hechos de los conceptos buscados.
        /// </summary>
        public IList<ContextoDto> Contextos;
        /// <summary>
        /// Diccionario de Hechos por documento instancia y contexto.
        /// </summary>
        public IDictionary<long, IDictionary<long,HechoDto>> DiccionarioHechos;
        /// <summary>
        /// Cantidad de registros que se están mostrando.
        /// </summary>
        public int Mostrando;
        /// <summary>
        /// Total de registros existentes para la busqueda.
        /// </summary>
        public int Total;
    }
}
