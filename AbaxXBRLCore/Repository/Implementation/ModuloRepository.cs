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
    ///     Implementación del repositorio base para operaciones con la entidad Modulo.
    ///     <author>Eric Alan González Fuentes</author>
    ///     <version>1.0</version>
    /// </summary>
    public class ModuloRepository : BaseRepository<Modulo>, IModuloRepository
    {
        

        public ResultadoOperacionDto GuardarModulo(Modulo modulo)
        {
            var dto = new ResultadoOperacionDto();
            try
            {
                if (modulo.IdModulo == 0)
                {
                    Add(modulo);
                    dto.Mensaje = MensajesRepositorios.ModuloGuardar;
                }
                else
                {
                    Update(modulo);
                    dto.Mensaje = MensajesRepositorios.ModuloActualizar;
                }
                dto.Resultado = true;
                dto.InformacionExtra = modulo.IdModulo;
            }
            catch (Exception exception)
            {
                LogUtil.Error(exception);
                dto.Resultado = false;
                dto.Mensaje = exception.Message;
            }
            return dto;
        }

        public Modulo ObtenerModuloPorId(long idModulo)
        {
            return GetById(idModulo);
        }

        public void BorrarModulo(long idModulo)
        {
            Delete(idModulo);
        }

        public List<Modulo> ObtenerModulos()
        {
            return GetAll().ToList();
        }

        public IEnumerable<Modulo> ObtenerModuloPorFiltro(Expression<Func<Modulo, bool>> filter = null,
            Func<IQueryable<Modulo>, IOrderedQueryable<Modulo>> orderBy = null, string includeProperties = "")
        {
            return Get(filter, orderBy, includeProperties);
        }
    }
}