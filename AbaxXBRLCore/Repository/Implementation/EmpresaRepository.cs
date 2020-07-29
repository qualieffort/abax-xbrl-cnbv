using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Entities;
using AbaxXBRLCore.lang;
using AbaxXBRLCore.Common.Util;
using System.Data.SqlClient;
using AbaxXBRLCore.Viewer.Application.Dto.Angular;
using AbaxXBRLCore.Common.Constants;

namespace AbaxXBRLCore.Repository.Implementation
{
    /// <summary>
    /// Implementacion del repositorio base para operaciones con la entidad Empresa.
    /// <author>Eric Alan González Fuentes</author>
    /// <version>1.0</version>
    /// </summary>
    public class EmpresaRepository : BaseRepository<Empresa>, IEmpresaRepository
    {
        const string CONSULTA_FIDUCIARIOS_DISPONIBLES =
            "SELECT IdEmpresa, NombreCorto, Fideicomitente " +
            "FROM Empresa " +
            "WHERE Fideicomitente = 1" +
            "AND IdEmpresa <> @idFideicomitente";
            /*"WHERE NOT EXISTS " +
            "( " +
	            "SELECT IdEmpresaPrimaria " +
	            "FROM RelacionEmpresas " +
	            "WHERE IdTipoRelacionEmpresa = 1 " +
	              "AND IdEmpresaSecundaria = Empresa.IdEmpresa " +
	              "AND IdEmpresaPrimaria != @idFideicomitente " +
            ")";*/

        const string CONSULTA_FIDUCIARIOS_DISPONIBLES_PARA_REPRESENTANTE_COMUN =
            "SELECT IdEmpresa, NombreCorto,  " +
            "case when Fideicomitente is null then cast(0 as BIT) else Fideicomitente end AS Fideicomitente, " +
            "case when RepresentanteComun is null then cast(0 as BIT) else RepresentanteComun end AS RepresentanteComun " +
            "FROM Empresa " +
            "WHERE IdEmpresa not in (  " +
            "SELECT IdEmpresaSecundaria " +
            "FROM RepresentanteComunFideciomiso " +
            "WHERE IdTipoRelacionEmpresa = 2 )" +
            "and IdEmpresa <> @idFideicomitente " +
            "order by NombreCorto ASC ";           

        public ResultadoOperacionDto GuardarEmpresa(Empresa empresa)
        {
            var dto = new ResultadoOperacionDto();
            try
            {
                if (empresa.IdEmpresa == 0)
                {
                    empresa.Borrado = false;
                    Add(empresa);
                    dto.Mensaje = MensajesRepositorios.EmpresaGuardar;
                }
                else
                {
                    Update(empresa);
                    dto.Mensaje = MensajesRepositorios.EmpresaActualizar;
                }
                dto.Resultado = true;
                dto.InformacionExtra = empresa.IdEmpresa;
            }
            catch (Exception exception)
            {
                LogUtil.Error(exception);
                dto.Resultado = false;
                dto.Mensaje = exception.Message;
            }
            return dto;
        }

        public Empresa ObtenerEmpresaPorId(long idEmpresa)
        {
            return GetById(idEmpresa);
        }

        public Empresa ObtenerEmpresaClaveCotizacion(string claveCotizacion)
        {
            Empresa empresa = GetAll().ToList().Find(empresaAux => empresaAux.NombreCorto == claveCotizacion.Replace("'", ""));
            return empresa;
        }

        public void BorrarEmpresa(long idEmpresa)
        {
            Delete(idEmpresa);
        }

        public void BorrarLogicamenteEmpresa(long idEmpresa)
        {
            var empresa = GetById(idEmpresa);
            empresa.Borrado = true;
            Update(empresa);
        }

        public List<EmpresaDto> ObtenerEmpresas()
        {
            var consultaEmpresas = "SELECT e.*,(select NombreCorto from Empresa where IdEmpresa in (select top 1 IdEmpresaPrimaria from RelacionEmpresas where IdEmpresaSecundaria=e.IdEmpresa and IdTipoRelacionEmpresa=@TipoRelacion )) FiduciarioEmisor, (select NombreCorto from Empresa where IdEmpresa in (select top 1 IdEmpresaPrimaria from RepresentanteComunFideciomiso where IdEmpresaSecundaria=e.IdEmpresa and IdTipoRelacionEmpresa=@TipoRelacionRepComun)) RepresentanteComunDelFideicomiso FROM Empresa e WHERE e.Borrado=@Borrado ";
            var parameters = new SqlParameter[] { new SqlParameter("Borrado", false), new SqlParameter("TipoRelacion", ConstantsTipoRelacionEmpresa.FIDUCIARIO_DE_FIDEICOMITENTE), new SqlParameter("TipoRelacionRepComun", ConstantsTipoRelacionEmpresa.REPRESENTANTE_COMUN_DE_FIDEICOMITENTE) };
            var query = DbContext.Database.SqlQuery<EmpresaDto>(consultaEmpresas, parameters);

            //return GetAll().Where(r => r.Borrado == false).ToList();
            return query.ToList();
        }

        /// <summary>
        /// Obtiene de forma paginada las empresas.
        /// </summary>
        /// <param name="peticionDataTable"></param>
        /// <returns></returns>
        public PeticionInformationDataTableDto<EmpresaDto> ObtenerInformacionEmpresas(PeticionInformationDataTableDto<EmpresaDto> peticionDataTable)
        {

            String fiduciarioEmisor = " (select NombreCorto from Empresa where IdEmpresa in (select top 1 IdEmpresaPrimaria from RelacionEmpresas where IdEmpresaSecundaria = e.IdEmpresa and IdTipoRelacionEmpresa = @TipoRelacion )) ";
            String representanteComunDelFideicomiso = " (select NombreCorto from Empresa where IdEmpresa in (select top 1 IdEmpresaPrimaria from RepresentanteComunFideciomiso where IdEmpresaSecundaria = e.IdEmpresa and IdTipoRelacionEmpresa = @TipoRelacionRepComun)) ";

            String consultaSinSearch = "SELECT e.*," + fiduciarioEmisor + " FiduciarioEmisor," + representanteComunDelFideicomiso +" RepresentanteComunDelFideicomiso FROM Empresa e WHERE e.Borrado = @Borrado ";
            StringBuilder search = new StringBuilder();
            search.Append(" and ( RazonSocial like '%" + peticionDataTable.search + "%' ");
            search.Append(" or NombreCorto like '%" + peticionDataTable.search + "%' ");
            search.Append(" or RFC like '%" + peticionDataTable.search + "%' ");
            search.Append(" or DomicilioFiscal like '%" + peticionDataTable.search + "%' ");
            search.Append(" or " + fiduciarioEmisor + " like '%" + peticionDataTable.search + "%' ");
            search.Append(" or " + representanteComunDelFideicomiso + " like '%" + peticionDataTable.search + "%' )");

            var consultaEmpresas = consultaSinSearch;
            
            if (peticionDataTable.search.Length > 0)
            {
                consultaEmpresas+= search.ToString();
            }

            var parameters = new SqlParameter[] { new SqlParameter("Borrado", false), new SqlParameter("TipoRelacion", ConstantsTipoRelacionEmpresa.FIDUCIARIO_DE_FIDEICOMITENTE), new SqlParameter("TipoRelacionRepComun", ConstantsTipoRelacionEmpresa.REPRESENTANTE_COMUN_DE_FIDEICOMITENTE) };
            var query = DbContext.Database.SqlQuery<EmpresaDto>(consultaEmpresas, parameters);

            var listaEmpresas = query.ToList();

            listaEmpresas = ReporteUtil.ordenarListaElementosPorColumna(listaEmpresas, EmpresaDto.diccionarioColumnas.ElementAt(peticionDataTable.order[0].column).Key, peticionDataTable.order[0].dir, EmpresaDto.diccionarioColumnas.ElementAt(peticionDataTable.order[0].column).Value);

            if(listaEmpresas == null)
            {
                listaEmpresas = new List<EmpresaDto>();
            }

            peticionDataTable.recordsTotal = listaEmpresas.Count();

            if(listaEmpresas.Count == 0)
            {
                peticionDataTable.data = new List<EmpresaDto>();
            }

            if (peticionDataTable.start < listaEmpresas.Count())
            {
                var diferencia = listaEmpresas.Count() - peticionDataTable.start;

                if (diferencia >= peticionDataTable.length)
                {
                    peticionDataTable.data = listaEmpresas.GetRange(peticionDataTable.start, peticionDataTable.length);
                }
                else
                {
                    peticionDataTable.data = listaEmpresas.GetRange(peticionDataTable.start, diferencia);
                }

            }

            return peticionDataTable;
        }

        /// <summary>
        /// Obtiene las empresas relacionadas a un grupo de empresa.
        /// </summary>
        /// <param name="idGrupoEmpresa"></param>
        /// <returns></returns>
        public List<Empresa> ObtenerEmpresasPorGrupoEmpresa(long idGrupoEmpresa)
        {
            var consultaEmpresas = "select * from Empresa as E inner join EmpresaGrupoEmpresa as EGE on E.IdEmpresa = EGE.IdEmpresa where EGE.IdGrupoEmpresa = @idGrupoEmpresa; ";
            var parameters = new SqlParameter[] { new SqlParameter("idGrupoEmpresa", idGrupoEmpresa) };
            var query = DbContext.Database.SqlQuery<Empresa>(consultaEmpresas, parameters);

            //return GetAll().Where(r => r.Borrado == false).ToList();
            return query.ToList();
        }

        /// <summary>
        /// Obtiene la empresas disponibles para ser asignads como fiduciarios de la empresa fideicomitente indicada.
        /// </summary>
        /// <param name="idFideicomitente">Identificador de la empresa fideicomitente a considerar.</param>
        /// <returns>Lista de empresas que no están asingadas a ningún fideicomientete o que están asignadas al fideicomitente indicado.</returns>
        public IList<EmpresaDto> ObtenEmpresasDispniblesAFiduciarios(long idFideicomitente)
        {
            var parameters = new SqlParameter[] { new SqlParameter("idFideicomitente", idFideicomitente) };
            var query = DbContext.Database.SqlQuery<EmpresaDto>(CONSULTA_FIDUCIARIOS_DISPONIBLES, parameters);
            return query.ToList();
        }

        /// <summary>
        /// Obtiene la empresas disponibles para ser asignads como fiduciarios del Representante común indicado.
        /// </summary>
        /// <param name="idFideicomitente">Identificador de la empresa Representante común a considerar.</param>
        /// <returns>Lista de empresas que no están asingadas a ningún Representante común.</returns>
        public IList<EmpresaDto> ObtenEmpresasDispniblesARepresentanteComun(long idFideicomitente)
        {
            var parameters = new SqlParameter[] { new SqlParameter("idFideicomitente", idFideicomitente) };
            var query = DbContext.Database.SqlQuery<EmpresaDto>(CONSULTA_FIDUCIARIOS_DISPONIBLES_PARA_REPRESENTANTE_COMUN, parameters);
            return query.ToList();
        }

        public List<Empresa> ObtenerEmpresasPorGrupo(string GrupoEmpresa)
        {
            return GetAll().Where(r => r.Borrado == false && r.GrupoEmpresa.Equals(GrupoEmpresa)).ToList();
        }

        /// <summary>
        /// Obtiene la información de Empresas dado el grupo de empresa.
        /// </summary>
        /// <param name="GrupoEmpresa">El grupo de empresa</param>
        /// <param name="peticionDataTable"></param>
        /// <returns></returns>
        public PeticionInformationDataTableDto<Empresa> ObtenerEmpresasPorGrupoPaginacion(string GrupoEmpresa, PeticionInformationDataTableDto<Empresa> peticionDataTable)
        {

            var listaEmpresas = GetAll().Where(r => r.Borrado == false && r.GrupoEmpresa.Equals(GrupoEmpresa)).ToList();
                        
            peticionDataTable.recordsTotal = listaEmpresas.Count();

            if (peticionDataTable.start < listaEmpresas.Count())
            {
                var diferencia = listaEmpresas.Count() - peticionDataTable.start;

                if (diferencia >= peticionDataTable.length)
                {
                    peticionDataTable.data = listaEmpresas.GetRange(peticionDataTable.start, peticionDataTable.length);
                }
                else
                {
                    peticionDataTable.data = listaEmpresas.GetRange(peticionDataTable.start, diferencia);
                }

            }

            return peticionDataTable;
        }

        public IQueryable<Empresa> ObtenerEmpresasPorFiltro(string search)
        {
            if (!String.IsNullOrEmpty(search))
            {
                var query = GetQueryable().Where(r => r.Borrado == false);
                query = query.Where(empresa => empresa.NombreCorto == search).OrderBy(r => r.NombreCorto);
                return query;
            }
            else
            {
                return GetQueryable().Where(r => r.Borrado == false).OrderBy(r => r.NombreCorto);
            }

        }

        public Boolean ExisteTaxonomiaParaTipoEmpresaDeEmpresa(long idEmpresa, String entryPoint) { 
        
             List<SqlParameter> parameters = new List<SqlParameter>();
            parameters.Add(new SqlParameter("idEmpresa",idEmpresa));
            parameters.Add(new SqlParameter("href",entryPoint));

            var queryTaxos = @"
             select count(*) from ArchivoTaxonomiaXbrl archivoTax where LOWER(archivoTax.Href) = LOWER(@href)
             and exists (select taxo.IdTaxonomiaXbrl from TaxonomiaXbrl taxo where taxo.IdTaxonomiaXbrl = archivoTax.IdTaxonomiaXbrl and Activa = 1)
             and exists ( select tipoEmpTax.IdTaxonomiaXbrl from TipoEmpresaTaxonomiaXbrl tipoEmpTax where tipoEmpTax.IdTaxonomiaXbrl = archivoTax.IdTaxonomiaXbrl
			 and exists (select empresaTipoEmp.IdTipoEmpresa from EmpresaTipoEmpresa empresaTipoEmp where empresaTipoEmp.IdTipoEmpresa = tipoEmpTax.IdTipoEmpresa 
			 and empresaTipoEmp.IdEmpresa = @idEmpresa ))
            ";
            var listaResultados = DbContext.Database.SqlQuery<int>(queryTaxos, parameters.ToArray()).ToList();
            if (listaResultados != null && listaResultados.Count > 0) {
                return listaResultados[0] > 0;
            }
            return false;
        }
        
    }
}
