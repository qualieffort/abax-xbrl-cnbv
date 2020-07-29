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
    public class ParametroSistemaRepository : BaseRepository<ParametroSistema>, IParametroSistemaRepository
    {
        public List<ParametroSistema> Obtener()
        {
            return GetAll().ToList();
        }

        public IQueryable<ParametroSistema> Obtener(string search)
        {
            if (!string.IsNullOrEmpty(search))
            {
                var query = GetQueryable().Where(parametroSistema => parametroSistema.Nombre == search).OrderBy(r => r.Nombre);
                return query;
            }
            else
            {
                return GetQueryable().OrderBy(r => r.Nombre);
            }
        }

        public ParametroSistema Obtener(long idParametroSistema)
        {
            return GetById(idParametroSistema);
        }

        public ResultadoOperacionDto Guardar(ParametroSistema parametroSistema)
        {
            var dto = new ResultadoOperacionDto();
            try
            {
                Update(parametroSistema);
                dto.Resultado = true;
                dto.InformacionExtra = parametroSistema.IdParametroSistema;
            }
            catch (Exception exception)
            {
                dto.Resultado = false;
                dto.Mensaje = exception.Message;
            }
            return dto;
        }
    }
}