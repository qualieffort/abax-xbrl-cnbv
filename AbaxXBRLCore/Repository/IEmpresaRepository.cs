using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Entities;
using AbaxXBRLCore.Viewer.Application.Dto.Angular;

namespace AbaxXBRLCore.Repository
{
    /// <summary>
    /// Interface del repositorio base para operaciones con la entidad Empresa.
    /// <author>Eric Alan González Fuentes</author>
    /// <version>1.0</version>
    /// </summary>
    public interface IEmpresaRepository : IBaseRepository<Empresa>
    {

        /// <summary>
        /// Inserta/Actualiza la Empresa en la BD
        /// </summary>
        /// <param name="empresa"></param>
        /// <returns></returns>
        ResultadoOperacionDto GuardarEmpresa(Empresa empresa);

        /// <summary>
        /// Obtiene la empresa por su identificador
        /// </summary>
        /// <param name="idEmpresa"></param>
        /// <returns></returns>
        Empresa ObtenerEmpresaPorId(long idEmpresa);

        /// <summary>
        /// Onbtiene la empresa por su clave de cotización.
        /// </summary>
        /// <param name="claveCotizacion"></param>
        /// <returns></returns>
        Empresa ObtenerEmpresaClaveCotizacion(String claveCotizacion);

        /// <summary>
        /// Borra la empresa por el identificador
        /// </summary>
        /// <param name="idEmpresa"></param>
        void BorrarEmpresa(long idEmpresa);

        /// <summary>
        /// Obtiene todas las empresas existentes
        /// </summary>
        /// <returns></returns>
        List<EmpresaDto> ObtenerEmpresas();

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
        List<Empresa> ObtenerEmpresasPorGrupo(string GrupoEmpresa);

        /// <summary>
        /// Obtiene la información de Empresas dado el grupo de empresa.
        /// </summary>
        /// <param name="GrupoEmpresa">El grupo de empresa</param>
        /// <param name="peticionDataTable"></param>
        /// <returns></returns>
        PeticionInformationDataTableDto<Empresa> ObtenerEmpresasPorGrupoPaginacion(string GrupoEmpresa, PeticionInformationDataTableDto<Empresa> peticionDataTable);

        /// <summary>
        /// Obtiene las empresas de un grupo de empresa
        /// </summary>
        /// <param name="idGrupoEmpresa">Grupo de la empresa de consulta</param>
        /// <returns>LIstado de empresas de un grupo</returns>
        List<Empresa> ObtenerEmpresasPorGrupoEmpresa(long idGrupoEmpresa);

        /// <summary>
        /// Obtiene todas las empresas por filtro
        /// </summary>
        /// <returns></returns>
        IQueryable<Empresa> ObtenerEmpresasPorFiltro(string search);

        /// <summary>
        /// Borra a la empresa logicamente
        /// </summary>
        /// <param name="idEmpresa"></param>
        void BorrarLogicamenteEmpresa(long idEmpresa);

        /// <summary>
        /// Verifica si para algún tipo de empresa de los tipos asignados a la empresa existe la taxonomía cuyo
        /// punto de entrada se envía como parámetro para la consulta
        /// </summary>
        /// <param name="idEmpresa">ID de empresa a verificar</param>
        /// <param name="entryPoint">Entry point de la taxonomía a verificar</param>
        /// <returns></returns>
        Boolean ExisteTaxonomiaParaTipoEmpresaDeEmpresa(long idEmpresa, String entryPoint);

        /// <summary>
        /// Obtiene la empresas disponibles para ser asignads como fiduciarios de la empresa fideicomitente indicada.
        /// </summary>
        /// <param name="idFideicomitente">Identificador de la empresa fideicomitente a considerar.</param>
        /// <returns>Lista de empresas que no están asingadas a ningún fideicomientete o que están asignadas al fideicomitente indicado.</returns>
        IList<EmpresaDto> ObtenEmpresasDispniblesAFiduciarios(long idFideicomitente);

        /// <summary>
        /// Obtiene la empresas disponibles para ser asignads como fiduciarios del Representante común indicado.
        /// </summary>
        /// <param name="idFideicomitente">Identificador de la empresa Representante común a considerar.</param>
        /// <returns>Lista de empresas que no están asingadas a ningún Representante común.</returns>
        IList<EmpresaDto> ObtenEmpresasDispniblesARepresentanteComun(long idFideicomitente);

    }
}
