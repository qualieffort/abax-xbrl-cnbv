using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Entities;
using AbaxXBRLCore.Viewer.Application.Dto.Angular;
using AbaxXBRLCore.Common.Dtos.Sincronizacion;

namespace AbaxXBRLCore.Services
{
    /// <summary>
    ///     Interface del Servicio para operaciones relacionadas con la Empresa.
    ///     <author>Eric Alan González Fuentes</author>
    ///     <version>1.0</version>
    /// </summary>
    public interface IEmpresaService
    {
        #region Servicios Empresas
        /// <summary>
        /// Guarda la Empresa en la BD
        /// </summary>
        /// <param name="empresa"></param>
        /// <param name="idUsuarioExec"></param>
        /// <returns></returns>
        ResultadoOperacionDto GuardarEmpresa(Empresa empresa, long idUsuarioExec);

        /// <summary>
        /// Obtiene la Empresa por su identificador
        /// </summary>
        /// <param name="idEmpresa"></param>
        /// <returns></returns>
        ResultadoOperacionDto ObtenerEmpresaPorId(long idEmpresa);
        
        /// <summary>
        /// Borrar la empresa por su identificador
        /// </summary>
        /// <param name="idEmpresa"></param>
        /// <returns></returns>
        ResultadoOperacionDto BorrarEmpresa(long idEmpresa, long idUsuarioExec);

        /// <summary>
        /// Obtiene todas las empresa por su identificador
        /// </summary>
        /// <returns></returns>
        ResultadoOperacionDto ObtenerEmpresas();

        /// <summary>
        /// Obtiene de forma paginada las empresas.
        /// </summary>
        /// <param name="peticionDataTable"></param>
        /// <returns></returns>
        PeticionInformationDataTableDto<EmpresaDto> ObtenerInformacionEmpresas(PeticionInformationDataTableDto<EmpresaDto> peticionDataTable);

        /// <summary>
        /// Obtiene las empresas de un grupo de empresa
        /// </summary>
        /// <param name="GrupoEmpresa">Grupo de la empresa de consulta</param>
        /// <returns>LIstado de empresas de un grupo</returns>
        ResultadoOperacionDto ObtenerEmpresasPorGrupo(string GrupoEmpresa);

        /// <summary>
        /// Obtiene de forma paginada las empresas de un grupo de empresa.
        /// </summary>
        /// <param name="GrupoEmpresa">Grupo de la empresa de consulta</param>
        /// <param name="peticionDataTable">Información del paginado, ordenamiento, etc.</param>
        /// <returns></returns>
        PeticionInformationDataTableDto<Empresa> ObtenerInformacionEmpresasPorGrupoEmpresa(string GrupoEmpresa, PeticionInformationDataTableDto<Empresa> peticionDataTable);

        /// <summary>
        /// Obtiene las empresas por un grupo de empresa
        /// </summary>
        /// <param name="idGrupoEmpresa">Grupo de la empresa de consulta</param>
        /// <returns>LIstado de empresas de un grupo</returns>
        ResultadoOperacionDto ObtenerEmpresasPorGrupoEmpresa(long idGrupoEmpresa);

        /// <summary>
        /// Asigna los tipos de empresa a la que se especifica.
        /// </summary>
        /// <param name="idEmpresa"></param>
        /// <param name="idsTiposEmpresa"></param>
        /// <returns></returns>
        ResultadoOperacionDto AsignarTiposEmpresa(long idEmpresa, List<long> idsTiposEmpresa, long idUsuarioExec);
        #endregion

        #region Servicios Tipos de Empresa
        /// <summary>
        /// Obtiene todas las empresa por su identificador
        /// </summary>
        /// <returns></returns>
        List<TipoEmpresa> ObtenerTiposEmpresa();

        /// <summary>
        /// Obtiene todas los tipos empresa que están asignados a una empresa
        /// </summary>
        /// <param name="idEmpresa">Id de la Empresa</param>
        /// <returns></returns>
        List<TipoEmpresa> ObtenerTiposEmpresa(long idEmpresa);

        /// <summary>
        /// Obtiene todas las empresa que coincidan con el filtro de consulta
        /// </summary>
        /// <param name="search">Parte del NombreCorto ó Razon Social de la Empresa</param>
        /// <returns></returns>
        ResultadoOperacionDto ObtenerEmpresasPorFiltro(string search);

        /// <summary>
        /// Obtiene todas las empresas fideicomitentes de la clave de fiduciario proporcionada
        /// </summary>
        /// <param name="search">Parte del NombreCorto ó Razon Social de la Empresa</param>
        /// <returns></returns>
        ResultadoOperacionDto ConsultarFideicomitentesDeFiduciario(string search);

        /// <summary>
        /// Obtiene todas las empresa que coincidan con el filtro de consulta
        /// </summary>
        /// <param name="search">Parte del NombreCorto ó Razon Social de la Empresa</param>
        /// <returns></returns>
        IQueryable<TipoEmpresa> ObtenerTiposEmpresa(string search);

        /// <summary>
        /// Obtiene la Empresa por su identificador
        /// </summary>
        /// <param name="idTipoEmpresa"></param>
        /// <returns></returns>
        TipoEmpresa ObtenerTipoEmpresa(long idTipoEmpresa);

        /// <summary>
        /// Guarda la Empresa en la BD
        /// </summary>
        /// <param name="tipoEmpresa"></param>
        /// <param name="idUsuarioExec"></param>
        /// <returns></returns>
        ResultadoOperacionDto GuardarTipoEmpresa(TipoEmpresa tipoEmpresa, long idUsuarioExec);

        /// <summary>
        /// Borrar la empresa por su identificador
        /// </summary>
        /// <param name="idTipoEmpresa"></param>
        /// <param name="idUsuarioExec"></param>
        /// <returns></returns>
        ResultadoOperacionDto BorrarTipoEmpresa(long idTipoEmpresa, long idUsuarioExec);
        /// <summary>
        /// Borra logicamente la empresa
        /// </summary>
        /// <param name="idEmpresa"></param>
        /// <param name="idUsuarioExec"></param>
        /// <returns></returns>
        ResultadoOperacionDto BorrarEmpresaLogicamente(long idEmpresa, long idUsuarioExec);
        /// <summary>
        /// Borra logicamente la empresa
        /// </summary>
        /// <param name="idTipoEmpresa"></param>
        /// <param name="idUsuarioExec"></param>
        /// <returns></returns>
        ResultadoOperacionDto BorrarTipoEmpresaLogicamente(long idTipoEmpresa, long idUsuarioExec);

        /// <summary>
        /// Obtiene los registros utilizados para generar el reporte de excel.
        /// </summary>
        /// <param name="idUsuarioExec">Identificador del usuario que ejecuta.</param>
        /// <param name="idEmpresaExc">Identificador de la empresa que ejecuta.</param>
        /// <returns>Resultado de la operación.</returns>
        ResultadoOperacionDto ObtenRegistrosReporte(long idUsuarioExec, long idEmpresaExc);
        #endregion

        #region Servicios de TaxonomiaXbrl
        /// <summary>
        /// Obtiene todas las taxonomias xbrl.
        /// </summary>
        /// <returns></returns>
        List<TaxonomiaXbrlDto> ObtenerTaxonomiasXbrl();

        /// <summary>
        /// Obtiene todas las taxonomías que están asignados a un tipo de empresa
        /// </summary>
        /// <param name="idTipoEmpresa">Id del tipo de Empresa</param>
        /// <returns></returns>
        List<TaxonomiaXbrlDto> ObtenerTaxonomiasXbrl(long idTipoEmpresa);

        /// <summary>
        /// Obtiene una taxonomia xbrl por su identificador
        /// </summary>
        /// <param name="idTaxonomiaXbrl"></param>
        /// <returns></returns>
        TaxonomiaXbrlDto ObtenerTaxonomiaXbrlPorId(long idTaxonomiaXbrl);

        /// <summary>
        /// Guarda una taxonomia en la BD
        /// </summary>
        /// <param name="taxonomiaXbrl"></param>
        /// <param name="idUsuarioExec"></param>
        /// <returns></returns>
        ResultadoOperacionDto GuardarTaxonomiaXbrl(TaxonomiaXbrlDto taxonomiaXbrl, long idUsuarioExec);

        /// <summary>
        /// Borrar la taxonomia por su identificador
        /// </summary>
        /// <param name="idEmpresa"></param>
        /// <param name="idUsuarioExec"></param>
        /// <returns></returns>
        ResultadoOperacionDto BorrarTaxonomiaXbrl(long idEmpresa, long idUsuarioExec);

        /// <summary>
        /// Asigna los tipos de empresa a la que se especifica.
        /// </summary>
        /// <param name="idTipoEmpresa"></param>
        /// <param name="idsTaxonomias"></param>
        /// <returns></returns>
        ResultadoOperacionDto AsignarTaxonomias(long idTipoEmpresa, List<long> idsTaxonomias, long idUsuarioExec);
        #endregion

        #region Servicios de RelacionEmpresas
        /// <summary>
        /// Consulta un listado de empresas cuyo tipo de relación con la empresa primaria enviada como parámetro
        /// es el tipo de relación enviado como parámetro
        /// </summary>
        /// <param name="tipoRelacion">Tipo de Relación buscada</param>
        /// <param name="idEmpresaPrimaria">Identificador de la empresa primaria buscada en la relación</param>
        /// <returns>Resultado de la operación con la información extra conteniendo un listado de empresas 
        /// que cumplen con los criterios de búsqueda</returns>
        ResultadoOperacionDto ConsultarEmpresasSecundariasPorTipoRelacionYEmpresaPrimaria(int tipoRelacion,long idEmpresaPrimaria);
        
        /// <summary>
        /// Consulta un listado de empresas cuyo tipo de relación con la empresa primaria enviada como parámetro
        /// es el tipo de relación enviado como parámetro
        /// </summary>
        /// <param name="tipoRelacion">Tipo de Relación buscada</param>
        /// <param name="idEmpresaPrimaria">Identificador de la empresa primaria buscada en la relación</param>
        /// <returns>Resultado de la operación con la información extra conteniendo un listado de empresas 
        /// que cumplen con los criterios de búsqueda</returns>
        ResultadoOperacionDto ConsultarEmpresasSecundariasRepComunPorTipoRelacionYEmpresaPrimaria(int tipoRelacion, long idEmpresaPrimaria);

        /// <summary>
        /// Asigna los fideicomitentes al fiduciario especificado.
        /// </summary>
        /// <param name="idFideicomitente">Id Fiduciario Emisor</param>
        /// <param name="idsFideicomitentes">Ids de los fideicomitentes a asignar</param>
        /// <param name="idUsuarioExec">Ide del usuario que ejecutó la operación</param>
        /// <returns></returns>
        ResultadoOperacionDto AsignarFiduciarios(long idFideicomitente, List<long> idsFideicomitentes, long idUsuarioExec);

        /// <summary>
        /// Asigna fideicomitentes al Representa comun especificado
        /// </summary>
        /// <param name="idFideicomitente">Id Fiduciario Emisor</param>
        /// <param name="idsFideicomitentes">Ids de los fideicomitentes a asignar</param>
        /// <param name="idUsuarioExec">Ide del usuario que ejecutó la operación</param>
        /// <returns></returns>
        ResultadoOperacionDto AsignarFiduciariosRepComun(long idFideicomitente, List<long> idsFideicomitentes, long idUsuarioExec);

        /// <summary>
        /// Obtiene la empresas disponibles para ser asignads como fiduciarios de la empresa fideicomitente indicada.
        /// </summary>
        /// <param name="idFideicomitente">Identificador de la empresa fideicomitente a considerar.</param>
        /// <returns>Lista de empresas que no están asingadas a ningún fideicomientete o que están asignadas al fideicomitente indicado.</returns>
        IList<EmpresaDto> ObtenEmpresasDispniblesAFiduciarios(long idFideicomitente);

        /// <summary>
        /// Obtiene la empresas disponibles para ser asignados como fiduciarios de la empresa Representante común indicada.
        /// </summary>
        /// <param name="idFideicomitente">Identificador de la empresa Representante común a considerar.</param>
        /// <returns>Lista de empresas disponibles para ser asignadas a un Representante común.</returns>
        IList<EmpresaDto> ObtenEmpresasDisponiblesParaRepresentanteComun(long idFideicomitente);

        /// <summary>
        /// Procesa los archivos de emisoras y fideicomisos para que los catalogos queden sincronizados
        /// </summary>
        /// <param name="infoProcesoImportacionDto">Objeto con la informacion de las emisoras y fideicomisos </param>
        /// <returns></returns>
        ResultadoOperacionDto ProcesarImportacionArchivosBMV(InformacionProcesoImportacionArchivosBMVDto infoProcesoImportacionDto);

        /// <summary>
        /// Verifica si existe una clave de cotización y si es un fiduciario.
        /// </summary>
        /// <param name="idEmpresaPrimaria">Identificador de la empresa en sesión.</param>
        /// <param name="idEmpresaSecundaria">Identificador de la empresa contenida en el sobre.</param>
        /// <returns>ResultadoOperacionDto donde se indica con "Resultado" si la empresa existe,
        /// y en "InformacionExtra" un booleano que indica si es o no fiduciario.</returns>
        ResultadoOperacionDto EsFideicomisoDeFiduciario(long idEmpresaPrimaria, long idEmpresaSecundaria);

        /// <summary>
        /// Verifica si la empresa proporcionada es un fiducario o un representante común.
        /// </summary>
        /// <param name="idEmpresa">Identificador de la empresa en sesión.</param>
        /// <returns>ResultadoOperacionDto donde se indica con "Resultado" si la empresa es fiduciario o representante común</returns>
        ResultadoOperacionDto EsFiduciarioORepresentanteComun(long idEmpresa);

        /// <summary>
        /// Retorna los identificadores de la empresas empresas coincidentes con el ticker
        /// </summary>
        /// <param name="idEmpresa">Identificador de la empresa en sesión.</param>
        /// <returns>ResultadoOperacionDto donde se indica con "Resultado" si la empresa es fiduciario o representante común</returns>
        ResultadoOperacionDto ObtenerIdEmpresaPorTicker(String ticker);

        /// <summary>
        /// Valida las claves de cotización del usuario STIV y del XBRL Sobre, verifica si el usuario es un fiduciario
        /// Y si la clave del sobre es fideicomiso del fiduciario.
        /// </summary>
        /// <param name="tickerSesion">Ticker del usuario STEVE (stiv).</param>
        /// <param name="tickerSobre">Ticker del XBRL Sobre.</param>
        /// <returns>ResultadoOperacionDto donde se indica con "Resultado" si la empresa es fiduciario o representante común</returns>
        ResultadoOperacionDto ValidarTickersXbrlSobre(String tickerSesion, String tickerSobre);
        #endregion
    }
}
