using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Entities;
using AbaxXBRLCore.lang;
using AbaxXBRLCore.Viewer.Application.Dto.Angular;
using System.Data.SqlClient;

namespace AbaxXBRLCore.Repository.Implementation
{
    /// <summary>
    /// Implementacion del repositorio base para operaciones con la entidad TipoEmpresa.
    /// <author>Eric Alan González Fuentes</author>
    /// <version>1.0</version>
    /// </summary>
    public class TipoEmpresaRepository : BaseRepository<TipoEmpresa>, ITipoEmpresaRepository
    {
        public List<TipoEmpresa> ObtenerTiposEmpresa()
        {
            return GetAll().Where(r => r.Borrado == false).ToList();
        }

        public List<TipoEmpresa> ObtenerTiposEmpresa(long idEmpresa)
        {
            StringBuilder sql = new StringBuilder();

            sql.Append("select * from TipoEmpresa where IdTipoEmpresa in (");
            sql.AppendFormat("select IdTipoEmpresa from EmpresaTipoEmpresa where IdEmpresa = {0}", idEmpresa);
            sql.Append(")");

            return ExecuteQuery(sql.ToString()).ToList();
        }

        public IQueryable<TipoEmpresa> ObtenerTiposEmpresa(string search)
        {
            if (!string.IsNullOrEmpty(search))
            {
                var query = GetQueryable().Where(r => r.Borrado == false);
                query = query.Where(tipoEmpresa => tipoEmpresa.Nombre == search).OrderBy(r => r.Nombre);
                return query;
            }
            else
            {
                return GetQueryable().Where(r => r.Borrado == false).OrderBy(r => r.Nombre);
            }
        }

        public TipoEmpresa ObtenerTipoEmpresa(long idEmpresa)
        {
            return GetById(idEmpresa);
        }

        public ResultadoOperacionDto GuardarTipoEmpresa(TipoEmpresa tipoEmpresa)
        {
            var dto = new ResultadoOperacionDto();
            try
            {
                if (tipoEmpresa.IdTipoEmpresa == 0)
                {
                    tipoEmpresa.Borrado = false;
                    Add(tipoEmpresa);
                    dto.Mensaje = MensajesRepositorios.EmpresaGuardar;
                }
                else
                {
                    Update(tipoEmpresa);
                    dto.Mensaje = MensajesRepositorios.EmpresaActualizar;
                }
                dto.Resultado = true;
                dto.InformacionExtra = tipoEmpresa.IdTipoEmpresa;
            }
            catch (Exception exception)
            {
                dto.Resultado = false;
                dto.Mensaje = exception.Message;
            }
            return dto;
        }

        public void BorrarTipoEmpresa(long idEmpresa)
        {
            Delete(idEmpresa);
        }

        public void BorrarLogicamenteTipoEmpresa(long idEmpresa)
        {
            var tipoEmpresa = GetById(idEmpresa);
            tipoEmpresa.Borrado = true;
            Update(tipoEmpresa);
        }

        /// <summary>
        /// Retorna un listado de dtos con la información necesaria para generar el reporte de Excel.
        /// </summary>
        /// <returns>Listado de Dtos.</returns>
        public IList<TipoEmpresaExcelDto> ObtenRegistrosReporte()
        {
            const string CONSULTA_REPORTE = @"
            SELECT TE.IdTipoEmpresa, TE.Nombre,TE.Descripcion,ISNULL(E.IdEmpresa,0) AS 'IdEmpresa', ISNULL(E.NombreCorto,'--') AS 'Empresa', ISNULL(E.RazonSocial,'--') AS 'RazonSocial'
            FROM EmpresaTipoEmpresa ETE
                 LEFT JOIN TipoEmpresa TE ON ETE.IdTipoEmpresa = TE.IdTipoEmpresa
                 LEFT OUTER JOIN Empresa E ON  ETE.IdEmpresa = E.IdEmpresa
            ORDER BY TE.Nombre ASC, E.NombreCorto ASC";

            var query = DbContext.Database.SqlQuery<TipoEmpresaExcelDto>(CONSULTA_REPORTE, new SqlParameter[0]);
            return query.ToList();
        }
    }
}