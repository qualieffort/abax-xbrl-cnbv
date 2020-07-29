using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using AbaxXBRL.Taxonomia;
using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Entities;

namespace AbaxXBRLCore.Repository.Implementation
{

    /// <summary>
    /// Implementación del objeto Repository para las operaciones sobre la tabla de hechos de
    /// un documento de instancia
    /// </summary>
    public class HechoRepository: BaseRepository<Hecho>, IHechoRepository
    {
        public void EliminarHechosDeDocumento(long idDocumento)
        {
            DbContext.Database.CommandTimeout = 180;
            DbContext.Database.ExecuteSqlCommand("DELETE FROM Hecho WHERE IdDocumentoInstancia = @idDocumento",
                                       new object[] { new SqlParameter("idDocumento", idDocumento) });
        }

        public IList<ResultadoConsultaHechosDto> ConsultarHechosPorFiltro(string[] idConceptos, long idUsuario,string[] archivosRefTaxonomia)
        {
            DbContext.Database.CommandTimeout = 180;
            return GetQueryable().Where(
                x => x.DocumentoInstancia.UsuarioDocumentoInstancia.Any(y => y.IdUsuario == idUsuario)).Where(
                    x => idConceptos.Contains(x.IdConcepto)).Where(x => x.Valor != null && x.Valor != "").Where(x => x.DocumentoInstancia.DtsDocumentoInstancia.Where(di => archivosRefTaxonomia.Contains(di.Href)).Count()>0).
                OrderByDescending(x => x.IdDocumentoInstancia).Take(1000).
                Select(x=>new ResultadoConsultaHechosDto
                          {
                              IdConcepto = x.IdConcepto,
                              Valor = x.Valor,
                              FechaInicio = x.Contexto.FechaInicio,
                              FechaFin = x.Contexto.TipoContexto == Period.Instante ?
                              x.Contexto.Fecha:x.Contexto.FechaFin,
                              IdEntidad = x.Contexto.IdentificadorEntidad,
                              TituloDocumentoInstancia = x.DocumentoInstancia.Titulo,
                              IdDocumentoInstancia = x.IdDocumentoInstancia,
                              EsCorrecto = x.DocumentoInstancia.EsCorrecto,
                              FechaCreacion = x.DocumentoInstancia.FechaCreacion!=null?x.DocumentoInstancia.FechaCreacion.Value:DateTime.MinValue,
                              TipoDatoXbrl = x.TipoDato !=null?x.TipoDato.Nombre:null
                          }).ToList();
        }

        public IList<Hecho> ConsultarHechosPorEntidadConceptos(string claveEmisora, string[] idConceptos, long[] idContextos)
        {
            return GetQueryable().Where(x => x.DocumentoInstancia.ClaveEmisora == claveEmisora).Where(x => idConceptos.Contains(x.IdConcepto)).Where(x => idContextos.Contains(x.IdContexto.Value)).ToList();
        }

        public List<String> ConsultarConceptosConsultaAnalisis(AbaxXBRLCore.Viewer.Application.Dto.Angular.ConsultaAnalisisDto consultaAnalisis)
        {

            List<long> entidadesId = new List<long>();
            string queryConceptos = @"SELECT DISTINCT hec.IdConcepto FROM Hecho  AS hec LEFT JOIN DocumentoInstancia AS docIns on docIns.IdDocumentoInstancia=hec.IdDocumentoInstancia WHERE docIns.ClaveEmisora in (";

            foreach (var entidad in consultaAnalisis.ConsultaAnalisisEntidad)
            {
                queryConceptos = queryConceptos + "'"+entidad.NombreEntidad + "',";
            }

            queryConceptos = queryConceptos.Substring(0, queryConceptos.Length - 1);
            queryConceptos = queryConceptos + ")";

            var queryResult = DbContext.Database.SqlQuery<string>(queryConceptos).ToList();

            return queryResult;
        }
    }
}
