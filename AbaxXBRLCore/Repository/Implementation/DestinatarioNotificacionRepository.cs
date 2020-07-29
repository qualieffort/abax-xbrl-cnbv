using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Entities;
using AbaxXBRLCore.Viewer.Application.Dto.Angular;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Repository.Implementation
{
    /// <summary>
    /// Implementación del objeto "Repository" para el acceso a los datos de las listas de notificación
    /// registradas en base de datos.
    /// </summary>
    /// <author>Alan Alberto Caballero Ibarra</author>
    public class DestinatarioNotificacionRepository : BaseRepository<DestinatarioNotificacion>, IDestinatarioNotificacionRepository
    {
        public List<DestinatarioNotificacionDto> Obtener()
        {
            return GetAll().Select(
                destinatarioNotificacion => new DestinatarioNotificacionDto
                {
                    IdDestinatarioNotificacion = destinatarioNotificacion.IdDestinatarioNotificacion,
                    IdListaNotificacion = destinatarioNotificacion.IdListaNotificacion,
                    Nombre = destinatarioNotificacion.Nombre,
                    CorreoElectronico = destinatarioNotificacion.CorreoElectronico
                }).ToList();
        }

        public IQueryable<DestinatarioNotificacionDto> Obtener(string search)
        {
            var query = GetQueryable().Select(destinatarioNotificacion =>
                    new DestinatarioNotificacionDto
                    {
                        IdDestinatarioNotificacion = destinatarioNotificacion.IdDestinatarioNotificacion,
                        IdListaNotificacion = destinatarioNotificacion.IdListaNotificacion,
                        Nombre = destinatarioNotificacion.Nombre,
                        CorreoElectronico = destinatarioNotificacion.CorreoElectronico
                    });

            if (!string.IsNullOrEmpty(search))
            {
                return query.Where(parametroSistema => parametroSistema.Nombre == search).OrderBy(r => r.Nombre);
            }
            else
            {
                return query.OrderBy(r => r.Nombre);
            }
        }

        public DestinatarioNotificacionDto Obtener(long idDestinatarioNotificacion)
        {
            var entidad = GetById(idDestinatarioNotificacion);

            if (entidad == null)
            {
                return null;
            }

            return new DestinatarioNotificacionDto
            {
                IdDestinatarioNotificacion = entidad.IdDestinatarioNotificacion,
                IdListaNotificacion = entidad.IdListaNotificacion,
                Nombre = entidad.Nombre,
                CorreoElectronico = entidad.CorreoElectronico
            };
        }

        public List<DestinatarioNotificacionDto> ObtenerAsignados(long idListaNotificacion)
        {
            return GetAll().Where(destinatarioNotificacion => destinatarioNotificacion.IdListaNotificacion == idListaNotificacion).Select(
                destinatarioNotificacion => new DestinatarioNotificacionDto
                {
                    IdDestinatarioNotificacion = destinatarioNotificacion.IdDestinatarioNotificacion,
                    IdListaNotificacion = destinatarioNotificacion.IdListaNotificacion,
                    Nombre = destinatarioNotificacion.Nombre,
                    CorreoElectronico = destinatarioNotificacion.CorreoElectronico
                }).ToList();
        }

        public ResultadoOperacionDto Guardar(DestinatarioNotificacionDto destinatarioNotificacionDto)
        {
            var dto = new ResultadoOperacionDto();

            try
            {
                if (destinatarioNotificacionDto.IdDestinatarioNotificacion == 0)
                {
                    var destinatarioNotificacion = new DestinatarioNotificacion
                    {
                        Nombre = destinatarioNotificacionDto.Nombre,
                        IdListaNotificacion = destinatarioNotificacionDto.IdListaNotificacion,
                        CorreoElectronico = destinatarioNotificacionDto.CorreoElectronico
                    };
                    Add(destinatarioNotificacion);

                    dto.InformacionExtra = destinatarioNotificacion.IdDestinatarioNotificacion;
                }
                else
                {
                    var destinatarioNotificacion = GetById(destinatarioNotificacionDto.IdDestinatarioNotificacion);

                    destinatarioNotificacion.IdListaNotificacion = destinatarioNotificacionDto.IdListaNotificacion;
                    destinatarioNotificacion.Nombre = destinatarioNotificacionDto.Nombre;
                    destinatarioNotificacion.CorreoElectronico = destinatarioNotificacionDto.CorreoElectronico;

                    Update(destinatarioNotificacion);

                    dto.InformacionExtra = destinatarioNotificacion.IdDestinatarioNotificacion;
                }

                dto.Resultado = true;
            }
            catch (Exception exception)
            {
                dto.Resultado = false;
                dto.Mensaje = exception.Message;
            }
            return dto;
        }

        public void Borrar(long idDestinatarioNotificacion)
        {
            Delete(idDestinatarioNotificacion);
        }
    }
}