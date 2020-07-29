using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Entities;
using AbaxXBRLCore.Viewer.Application.Dto.Angular;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Data.Entity;

namespace AbaxXBRLCore.Repository.Implementation
{
    /// <summary>
    /// Implementación del objeto "Repository" para el acceso a los datos de las listas de notificación
    /// registradas en base de datos.
    /// </summary>
    /// <author>Alan Alberto Caballero Ibarra</author>
    public class ListaNotificacionRepository : BaseRepository<ListaNotificacion>, IListaNotificacionRepository
    {
        public List<ListaNotificacionDto> Obtener()
        {
            return GetAll().Select(
                listaNotificacion =>
                    new ListaNotificacionDto
                    {
                        IdListaNotificacion = listaNotificacion.IdListaNotificacion,
                        Nombre = listaNotificacion.Nombre,
                        Descripcion = listaNotificacion.Descripcion,
                        TituloMensaje = listaNotificacion.TituloMensaje,
                        ClaveLista = listaNotificacion.ClaveLista
                    }).ToList();
        }

        public IQueryable<ListaNotificacionDto> Obtener(string search)
        {
            var query = GetQueryable().Select(listaNotificacion =>
                    new ListaNotificacionDto
                    {
                        IdListaNotificacion = listaNotificacion.IdListaNotificacion,
                        Nombre = listaNotificacion.Nombre,
                        Descripcion = listaNotificacion.Descripcion,
                        TituloMensaje = listaNotificacion.TituloMensaje,
                        ClaveLista = listaNotificacion.ClaveLista
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

        public ListaNotificacionDto Obtener(long idListaNotificacion)
        {
            var entidad = GetById(idListaNotificacion);

            if(entidad == null)
            {
                return null;
            }

            return new ListaNotificacionDto
            {
                IdListaNotificacion = entidad.IdListaNotificacion,
                Nombre = entidad.Nombre,
                Descripcion = entidad.Descripcion,
                TituloMensaje = entidad.TituloMensaje,
                ClaveLista = entidad.ClaveLista
            };
        }

        public ResultadoOperacionDto Guardar(ListaNotificacionDto listaNotificacionDto)
        {
            var dto = new ResultadoOperacionDto();

            StringBuilder sql = new StringBuilder();

            sql.Append("select * from ListaNotificacion ");

            try
            {
                
                    if (listaNotificacionDto.IdListaNotificacion == 0)
                    {
                        List<string> ClaveListas = ExecuteQuery(sql.ToString()).Select(t => t.ClaveLista).ToList();
                        if (!ClaveListas.Contains(listaNotificacionDto.ClaveLista))
                        {

                            var listaNotificacion = new ListaNotificacion
                            {
                                Nombre = listaNotificacionDto.Nombre,
                                Descripcion = listaNotificacionDto.Descripcion,
                                TituloMensaje = listaNotificacionDto.TituloMensaje,
                                ClaveLista = listaNotificacionDto.ClaveLista
                            };
                            Add(listaNotificacion);

                            dto.InformacionExtra = listaNotificacion.IdListaNotificacion;
                        }
                        else
                        {
                            dto.Resultado = true;
                            dto.InformacionExtra = "-1";
                            dto.Mensaje = null;
                        }
                    }
                    else
                    {
                        var listaNotificacion = GetById(listaNotificacionDto.IdListaNotificacion);

                        listaNotificacion.Nombre = listaNotificacionDto.Nombre;
                        listaNotificacion.Descripcion = listaNotificacionDto.Descripcion;
                        listaNotificacion.TituloMensaje = listaNotificacionDto.TituloMensaje;
                        listaNotificacion.ClaveLista = listaNotificacionDto.ClaveLista;

                        Update(listaNotificacion);

                        dto.InformacionExtra = listaNotificacion.IdListaNotificacion;
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

        public void Borrar(long idListaNotificacion)
        {
            var listaNotificacion = GetById(idListaNotificacion);
            if (listaNotificacion != null)
                DeleteCascade(listaNotificacion);
        }


        public ListaNotificacion ObtenerListaNotificacionCompletaPorClave(string claveLista)
        {
            return GetQueryable().Where(x => x.ClaveLista.Equals(claveLista)).Include(x => x.DestinatarioNotificacion).
                FirstOrDefault();
        }
    }
}