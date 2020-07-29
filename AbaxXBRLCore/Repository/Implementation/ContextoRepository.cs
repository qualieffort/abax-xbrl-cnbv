using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using AbaxXBRLCore.Entities;

namespace AbaxXBRLCore.Repository.Implementation
{
    /// <summary>
    /// Implementación del objeto de Repository para el acceso a los datos del contexto
    /// </summary>
    public class ContextoRepository : BaseRepository<Contexto>, IContextoRepository
    {
        public void EliminarContextosDeDocumento(long idDocumento)
        {
            DbContext.Database.CommandTimeout = 180;
            DbContext.Database.ExecuteSqlCommand("DELETE FROM Contexto WHERE IdDocumentoInstancia = @idDocumento",
                                       new object[] { new SqlParameter("idDocumento", idDocumento) });
        }

        public List<AbaxXBRLCore.Viewer.Application.Dto.Angular.ContextoDto> ConsultarContextosPorPeriodo(List<long> idContextos)
        {

            var query = GetQueryable().Where(pe => pe.Segmento == null && pe.Escenario == null);
            query = query.Where(pe => idContextos.Contains(pe.IdContexto));
            return query.Select(x => new AbaxXBRLCore.Viewer.Application.Dto.Angular.ContextoDto { IdContexto = x.IdContexto, Fecha = x.Fecha, FechaInicio = x.FechaInicio, FechaFin = x.FechaFin }).ToList();
        }

        public long[] ObtenerListadoContextosPorPeriodoConsulta(AbaxXBRLCore.Viewer.Application.Dto.Angular.ConsultaAnalisisDto consultaAnalisis)
        {
            string queryContextos = @"SELECT ctx.IdContexto FROM Contexto AS ctx LEFT JOIN DocumentoInstancia docIns on ctx.IdDocumentoInstancia=docIns.IdDocumentoInstancia ";

            queryContextos = queryContextos + " where  docIns.ClaveEmisora in (";
            foreach (var entidad in consultaAnalisis.ConsultaAnalisisEntidad)
            {
                queryContextos = queryContextos + "'"+entidad.NombreEntidad + "',";
            }
            queryContextos = queryContextos.Substring(0, queryContextos.Length - 1);
            queryContextos = queryContextos + ") and ctx.Segmento is null and ctx.Escenario is null and ( ";

            List<SqlParameter> parameters = new List<SqlParameter>();


            var indicePeriodo = 0;
            foreach (var periodo in consultaAnalisis.ConsultaAnalisisPeriodo)
            {
                if (indicePeriodo > 0)
                {
                    queryContextos = queryContextos + " or ";
                }

                if (periodo.TipoPeriodo == 1)
                {
                    queryContextos = queryContextos + " ctx.Fecha=@fecha" + indicePeriodo;
                    parameters.Add(new SqlParameter("fecha" + indicePeriodo, periodo.Fecha.Value));
                }
                else
                {
                    queryContextos = queryContextos + " ( ctx.FechaInicio=@fechaInicio" + indicePeriodo;
                    queryContextos = queryContextos + " and ctx.FechaFin=@fechaFinal" + indicePeriodo;
                    queryContextos = queryContextos + " ) ";

                    parameters.Add(new SqlParameter("fechaInicio" + indicePeriodo, periodo.FechaInicio.Value));
                    parameters.Add(new SqlParameter("fechaFinal" + indicePeriodo, periodo.FechaFinal.Value));
                }

                indicePeriodo++;
            }

            queryContextos = queryContextos + " ) ";

            var contextosID = DbContext.Database.SqlQuery<long>(queryContextos, parameters.ToArray()).Distinct().ToArray();

            return contextosID;

        }

        public List<AbaxXBRLCore.Viewer.Application.Dto.Angular.ContextoDto> ObtenerListadoContextosPorDocumentoInstancia(List<string> idEmpresas)
        {


            IQueryable<AbaxXBRLCore.Viewer.Application.Dto.Angular.ContextoDto> queryAblePrincipal = null;

            for (int indiceIdEmpresa = 0; indiceIdEmpresa < idEmpresas.Count; indiceIdEmpresa++)
            {
                string claveEmisora = idEmpresas[indiceIdEmpresa];
                var queryAbleEjecucion = DbContext.Contexto.Where(ctx => ctx.Segmento == null && ctx.Escenario == null && ctx.DocumentoInstancia.ClaveEmisora == claveEmisora).Select(
                      x => new AbaxXBRLCore.Viewer.Application.Dto.Angular.ContextoDto { TipoContexto = x.TipoContexto, Fecha = x.Fecha, FechaInicio = x.FechaInicio, FechaFin = x.FechaFin }
                    ).Distinct();

                if (indiceIdEmpresa > 0)
                {
                    queryAblePrincipal = queryAblePrincipal.Intersect(queryAbleEjecucion);
                }

                if (indiceIdEmpresa == 0)
                {
                    queryAblePrincipal = queryAbleEjecucion;
                }
            }

            return queryAblePrincipal.ToList();

        }

    }
}
