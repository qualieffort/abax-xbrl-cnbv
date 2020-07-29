using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Entities;
using AbaxXBRLCore.Viewer.Application.Dto.Angular;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;

namespace AbaxXBRLCore.Repository
{
    /// <summary>
    /// Interfaz del repositorio para las operaciones en base de datos para la adminsitración
    /// de documentos de instancia XBRL
    /// <author>Emigdio Hernandez</author>
    /// </summary>
    public interface IDocumentoInstanciaRepository: IBaseRepository<DocumentoInstancia>
    {
        /// <summary>
        /// Consulta los documentos de instancia asociados con el usuario enviado como parámetro.
        /// </summary>
        /// <param name="ClaveEmisora">Filtro para limitar la clave de la emisora del documento</param>
        /// <param name="fechaCreacion">Filtro para limitar la fecha de creación del documento</param>
        /// <param name="EsDueno">Indica si se consultan únicamente los documentos donde el usuario es dueño o no</param>
        /// <param name="IdUsuario">Usuario del que se desean consultar los documentos de instnacia</param>
        /// <returns>Resultado de la operación de consulta</returns>
        IQueryable<DocumentoInstancia> ObtenerDocumentosDeUsuario(string claveEmisora, DateTime fechaCreacion, bool esDueno, long idUsuario);

        /// <summary>
        /// Obtiene los usuarios asignados a un documento instancia que pertenecen a una empresa en específico.
        /// </summary>
        /// <param name="idDocumentoInstancia">El identificador del documento instancia</param>
        /// <param name="idEmpresa">El identificador de la empresa</param>
        /// <returns>Una lista con los usuarios actualmente asignados al documento</returns>
        IList<UsuarioDocumentoInstancia> ObtenerUsuariosDeDocumentoInstancia(long idDocumentoInstancia, long idEmpresa);

        /// <summary>
        /// Consulta los documentos de instancia que no están asociados a ningún usuario en específico, opcionalmente
        /// filtrados por clave de emisora y fecha de creación
        /// </summary>
        /// <param name="claveEmisora">Clave de emisora opcional a filtrar</param>
        /// <param name="fechaCreacion">Fecha de creación opcional a filtrar</param>
        /// <returns></returns>
        IQueryable<DocumentoInstancia> ObtenerDocumentosEnviadosSinUsuario(string claveEmisora, DateTime fechaCreacion);

        /// <summary>
        /// Ejecuta una consulta de documentos de instancia en base a los filtros y criterios de orden enviados como parámetros
        /// </summary>
        /// <param name="filter">Filtro</param>
        /// <param name="orderBy">Ordenamiento</param>
        /// <param name="includeProperties">Bandera para incluir propiedades</param>
        /// <returns>Resultado de la consulta</returns>
        IEnumerable<DocumentoInstancia> ObtenerDocumentosInstanciaPorFiltro(Expression<Func<DocumentoInstancia, bool>> filter = null,
           Func<IQueryable<DocumentoInstancia>, IOrderedQueryable<DocumentoInstancia>> orderBy = null, string includeProperties = "");
        
        void DeleteDocumentoInstancia(long idDocumento);

        /// <summary>
        /// Elimina con un query los hechos de un documento de instancia
        /// </summary>
        /// <param name="idDocumento"></param>
        void EliminarHechosDeDocumento(long idDocumento);

        /// <summary>
        /// Obtiene los últimos n documentos modificados o creados a los cuales tiene acceso el usuario.
        /// </summary>
        /// <param name="idUsuario">el identificador del usuario a consultar.</param>
        /// <param name="numeroRegistros">El número máximo de registros a obtener de la consulta</param>
        /// <returns>Una lista con los documentos que cumplen con los criterios de consulta. Una lista vacía en caso de no existir coincidencias.</returns>
        IList<DocumentoInstancia> ObtenerUltimosDocumentosDeUsuario(long idUsuario, int numeroRegistros);

        /// <summary>
        /// Cuenta el número de documentos a los que tiene acceso un usuario, además brinda el detalle de saber cuántos son correctos, cuántos son erroneos, cuanto son propios y cuantos son compartidos.
        /// </summary>
        /// <param name="idUsuario">El identificador del usuario a consultar.</param>
        /// <returns>Un diccionario en el cual las llaves identifican el tipo de cuenta. Siempre contiene 4 llaves: "correctos", "erroneos", "propios" y "compartidos".</returns>
        IDictionary<string, int> ContarDocumentosDeUsuario(long idUsuario);
        /// <summary>
        /// Obtiene el documento de instancia de la base de datos junto con todas sus relaciones relevantes para crear el modelo de presentación
        /// </summary>
        /// <param name="idDocumentoInstancia"></param>
        /// <returns></returns>
        DocumentoInstancia ObtenerDocumentoInstanciaCompleto(long idDocumentoInstancia);

        /// <summary>
        /// Retorna un listado con los identificadores de las entidades del documento de instancia.
        /// </summary>
        /// <returns>Lista de indentificadores de docummentos de instancia.</returns>
        List<long> ObtenIdsDocumentosInstancia();

        /// <summary>
        /// Obtiene los documentos instancia en base a la configuracion de una consulta de analisis
        /// </summary>
        /// <param name="consultaAnalisis">Objeto con la informacion de la consulta de analisis</param>
        /// <returns>Listado de documentos instancia</returns>
        List<DocumentoInstancia> ObtenerDocumentosInstanciaPorConsulta(ConsultaAnalisisDto consultaAnalisis);

        /// <summary>
        /// Obtiene los datos para graficar la cantidad de empresas que han reportado cada una de las taxonomías registradas para un trimestre determinado.
        /// </summary>
        /// <param name="anio">Año requerido</param>
        /// <param name="trimestre">Trinestre requerido</param>
        /// <returns>Datos para graficar.</returns>
        IList<EasyPieChartDto> IndicadorEmisorasTrimestreActualPorTaxonimia(int anio, string trimestre);
        /// <summary>
        /// Obtiene la empresa relacionada al documento de instancia, en caso de que la tenga
        /// </summary>
        /// <param name="idDocumentoInstancia">ID del documento buscado</param>
        /// <returns>Empresa relacionada al documento, null en caso de que no se encuentre</returns>
        Empresa ObtenerEmpresaDeDocumento(long idDocumentoInstancia);

        /// <summary>
        /// Retorna un Queryiable para la paginación de documentos.
        /// </summary>
        /// <param name="claveEmisora">Calve de emisora por la cula filtrar los resultados.</param>
        /// <param name="fechaCreacion">Fecha de creación del documento.</param>
        /// <param name="esDueno">Si el usuario es dueño del documenot.</param>
        /// <param name="idUsuario">Identificador del usuario, si no se indica se toman todos los documentos sin usuario.</param>
        /// <param name="filtro"></param>
        /// <returns>Consulta con los filtros indicados.</returns>
        IQueryable<DocumentoInstancia> ObtenerDocumentosQueryable(string claveEmisora, DateTime fechaCreacion, bool esDueno, long idUsuario, string filtro);

        /// <summary>
        /// Realiza una consluta de documentos con la paginación indicada.
        /// </summary>
        /// <param name="paginacion">DTO con la información de la paginación.</param>
        /// <param name="idUsuario">Identificador del usuario que ejecuta.</param>
        /// <param name="esDueno">Si debe retornar los documentos propios o compartidos.</param>
        /// <returns>Paginación evaluada con los datos obtenidos.</returns>
        PaginacionSimpleDto<AbaxXBRLCore.Viewer.Application.Dto.Angular.DocumentoInstanciaDto> ObtenerDocumentosPaginados(PaginacionSimpleDto<AbaxXBRLCore.Viewer.Application.Dto.Angular.DocumentoInstanciaDto> paginacion, long idUsuario, bool esDueno);

        /// <summary>
        /// Retorna los elementos del listado para el comparador de documentos de versión
        /// </summary>
        /// <param name="idDocumentoInstancia">Identificador del documento de instancia que se pretende comparar.</param>
        /// <returns></returns>
        IQueryable<DocumentoInstancia> ObtenerVersionesDocumentoInstanciaComparador(long idDocumentoInstancia);

        /// <summary>
        /// Retorna el nombre de una taxonomía en base a su espacio de nombres principal.
        /// </summary>
        /// <param name="espacioNombresPrincipal">Espacion de nombres de la taxonomía.</param>
        /// <returns>Nombre de la tazonomía.</returns>
        String ObtenerNombreTaxonomia(String espacioNombresPrincipal);

        /// <summary>
        /// Obtiene los documentos de instancia que podrían requerir sobreescribirse en mongo.
        /// </summary>
        /// <returns>Lista con los documentos de instancia</returns>
        IList<DocumentoInstancia> ObtenCandidatosReprocesarMongo();

        /// <summary>
        /// Obtiene los documentos de instancia que podrían requerir sobreescribirse en mongo.
        /// </summary>
        /// <returns>Lista con los documentos de instancia</returns>
        IList<DocumentoInstancia> ObtenCandidatosReprocesar();


        /// <summary>
        /// Obtiene los documentos de instancia resulntantes de la consulta.
        /// </summary>
        /// <param name="query">Consulta para obtener los documentos de instancia.</param>
        /// <returns>Lista con los documentos de instancia</returns>
        IList<DocumentoInstancia> ObtenDocumentosInstancia(String query);

        /// <summary>
        /// Retorna un listado con los documentos de instancia XBRL de tipo Anexo T que no cuenten con fideicomiso.
        /// </summary>
        /// <returns>Lista de objetos de tipo DocumentoInstanciaDto.</returns>
        IList<DocumentoInstancia> ObtenAnexoTSinFidecomiso ();

        /// <summary>
        /// Actualiza el número de fideicomiso de un documento de instancia en especifico.
        /// </summary>
        /// <param name="idDocumentoInstancia">Identificador del documento de instancia que se pretende actualizar.</param>
        /// <param name="numFideicomiso">Valor del número de fideicomiso que será asignado.</param>
        /// <returns>Cantidad de registros afectados.</returns>
        int ActualizaNumeroFideicomiso (long idDocumentoInstancia, string numFideicomiso);


    }
}
