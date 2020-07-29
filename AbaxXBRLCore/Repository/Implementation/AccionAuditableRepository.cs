#region

using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Entities;
using AbaxXBRLCore.lang;
using AbaxXBRLCore.Common.Util;

#endregion

namespace AbaxXBRLCore.Repository.Implementation
{
    /// <summary>
    ///     Implementacion del repositorio base para operaciones con la entidad AccionAuditable.
    ///     <author>Eric Alan González Fuentes</author>
    ///     <version>1.0</version>
    /// </summary>
    public class AccionAuditableRepository : BaseRepository<AccionAuditable>, IAccionAuditableRepository
    {
       
        public ResultadoOperacionDto GuardarAccionAuditable(AccionAuditable accionAuditable)
        {
            var dto = new ResultadoOperacionDto();
            try
            {
                if (accionAuditable.IdAccionAuditable == 0)
                {
                    Add(accionAuditable);
                    dto.Mensaje = MensajesRepositorios.AccionAuditableGuardar;
                }
                else
                {
                    Update(accionAuditable);
                    dto.Mensaje = MensajesRepositorios.AccionAuditableActualizar;
                }
                dto.Resultado = true;
                dto.InformacionExtra = accionAuditable.IdAccionAuditable;
            }
            catch (Exception exception)
            {
                LogUtil.Error(exception);
                dto.Resultado = false;
                dto.Mensaje = exception.Message;
            }
            return dto;
        }

        public AccionAuditable ObtenerAccionAuditablePorId(long idAccionAuditable)
        {
            return GetById(idAccionAuditable);
        }

        public void BorrarAccionAuditable(long idAccionAuditable)
        {
            Delete(idAccionAuditable);
        }

        public List<AccionAuditable> ObtenerAccionesAuditable()
        {
            return GetAll().ToList();
        }


        public IEnumerable<AccionAuditable> ObtenerAccionAuditablePorFiltro(
            Expression<Func<AccionAuditable, bool>> filter = null,
            Func<IQueryable<AccionAuditable>, IOrderedQueryable<AccionAuditable>> orderBy = null,
            string includeProperties = "")
        {
            return Get(filter, orderBy, includeProperties);
        }
    }
}