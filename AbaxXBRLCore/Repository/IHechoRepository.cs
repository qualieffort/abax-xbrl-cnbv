using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Entities;

namespace AbaxXBRLCore.Repository
{
    /// <summary>
    /// Interfaz del objeto Repository que define las operaciones de la tabla de hechos de un
    /// documento de instancia
    /// </summary>
    public interface IHechoRepository: IBaseRepository<Hecho>
    {
        /// <summary>
        /// Elimina, por condición todos los hechos de un documento de instancia
        /// </summary>
        /// <param name="idDocumento">Identificador del documento al cual borrar los hechos</param>
        void EliminarHechosDeDocumento(long idDocumento);
        /// <summary>
        /// Consulta los diferentes hechos encontrados en los documentos de instancia del usuario enviado como parámetro
        /// </summary>
        /// <param name="idConceptos">Conceptos a buscar</param>
        /// <param name="idUsuario">Usuario que realiza la búsqueda</param>
        /// <param name="archivosRefTaxonomia">Documentos de punto de entrada de la taxonomia</param>
        /// <returns></returns>
        IList<ResultadoConsultaHechosDto> ConsultarHechosPorFiltro(string[] idConceptos, long idUsuario, string[] archivosRefTaxonomia);

        /// <summary>
        /// Consulta todos los hechos de los conceptos en una empresa
        /// </summary>
        /// <param name="claveEntidad">Identificador de la empresa</param>
        /// <param name="idConceptos">Arreglo de conceptos a consultar</param>
        /// <param name="idContextos">Arreglo de contextos a consultar</param>
        /// <returns>Listado de hechos por empresa</returns>
        IList<Hecho> ConsultarHechosPorEntidadConceptos(string claveEntidad, string[] idConceptos, long[] idContextos);

        /// <summary>
        /// Obtiene todos los identificadores de conceptos que pueden ser seleccionada en una configuracion de una consulta de analisis
        /// </summary>
        /// <param name="consultaAnalisis">Contiene la informacion de una configuracion de consulta</param>
        /// <returns>Listado de identificadores de conceptos</returns>
        List<String> ConsultarConceptosConsultaAnalisis(AbaxXBRLCore.Viewer.Application.Dto.Angular.ConsultaAnalisisDto consultaAnalisis);

    }
}
