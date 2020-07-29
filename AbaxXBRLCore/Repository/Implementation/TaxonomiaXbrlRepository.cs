using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Repository.Implementation
{
    /// <summary>
    /// Implementación del objeto "Repository" para el acceso a los datos de las taxonomías
    /// registradas en base de datos.
    /// </summary>
    /// <author>Alan Alberto Caballero Ibarra</author>
    public class TaxonomiaXbrlRepository: BaseRepository<TaxonomiaXbrl>, ITaxonomiaXbrlRepository
    {
        public List<TaxonomiaXbrl> Obtener()
        {
            return GetAll().ToList();
        }

        public IQueryable<TaxonomiaXbrl> Obtener(string search)
        {
            if (!string.IsNullOrEmpty(search))
            {
                var query = GetQueryable().Where(taxonomiaXbrl => taxonomiaXbrl.Nombre == search).OrderBy(r => r.Nombre);
                return query;
            }
            else
            {
                return GetQueryable().OrderBy(r => r.Nombre);
            }
        }

        public TaxonomiaXbrl Obtener(long idTaxonomiaXbrl)
        {
            return GetById(idTaxonomiaXbrl);
        }

        public List<TaxonomiaXbrl> ObtenerAsignadas(long idTipoEmpresa)
        {
            StringBuilder sql = new StringBuilder();

            sql.Append("select * from TaxonomiaXbrl where IdTaxonomiaXbrl in (");
            sql.AppendFormat("select IdTaxonomiaXbrl from TipoEmpresaTaxonomiaXbrl where IdTipoEmpresa = {0}", idTipoEmpresa);
            sql.Append(")");

            return ExecuteQuery(sql.ToString()).ToList();
        }

        public ResultadoOperacionDto Guardar(TaxonomiaXbrl taxonomiaXbrl)
        {
            var dto = new ResultadoOperacionDto();
            try
            {
                if (taxonomiaXbrl.IdTaxonomiaXbrl == 0)
                {
                    taxonomiaXbrl.Activa = true;
                    Add(taxonomiaXbrl);
                }
                else
                {
                    Update(taxonomiaXbrl);
                }
                dto.Resultado = true;
                dto.InformacionExtra = taxonomiaXbrl.IdTaxonomiaXbrl;
            }
            catch (Exception exception)
            {
                dto.Resultado = false;
                dto.Mensaje = exception.Message;
            }
            return dto;
        }

        public void Borrar(long idTaxonomiaXbrl)
        {
            Delete(idTaxonomiaXbrl);
        }

        /// <inheritdoc/>
        public ResultadoOperacionDto ObtenerPeriodicidadReportePorEspacioNombresPrincipal(string espacioNombresPrincipal)
        {
            ResultadoOperacionDto resultadoOperacionDto = new ResultadoOperacionDto { Resultado = false };

            var result = GetQueryable().Where(taxonomiaXbrl => taxonomiaXbrl.EspacioNombresPrincipal == espacioNombresPrincipal).FirstOrDefault();

            if (result != null)
            {
                resultadoOperacionDto.Resultado = true;
                resultadoOperacionDto.InformacionExtra = result.PeriodicidadReporte;
            }

            return resultadoOperacionDto;                        
        }
    }
}