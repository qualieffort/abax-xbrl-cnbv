#region

using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Objects;
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
    ///     Implementación del repositorio base para operaciones con la entidad RegistroAuditoria.
    ///     <author>Eric Alan González Fuentes</author>
    ///     <version>1.0</version>
    /// </summary>
    public class RegistroAuditoriaRepository : BaseRepository<RegistroAuditoria>, IRegistroAuditoriaRepository
    {
        
        public ResultadoOperacionDto GuardarRegistroAuditoria(RegistroAuditoria registroAuditoria)
        {
            var dto = new ResultadoOperacionDto();
            try
            {
                if (registroAuditoria.IdRegistroAuditoria == 0)
                {
                    Add(registroAuditoria);
                    dto.Mensaje = MensajesRepositorios.RegistroAuditoriaGuardar;
                }
                else
                {
                    Update(registroAuditoria);
                    dto.Mensaje = MensajesRepositorios.RegistroAuditoriaActualizar;
                }
                dto.Resultado = true;
                dto.InformacionExtra = registroAuditoria.IdRegistroAuditoria;
            }
            catch (Exception exception)
            {
                LogUtil.Error(exception);
                dto.Resultado = false;
                dto.Mensaje = exception.Message;
            }
            return dto;
        }

        public RegistroAuditoria ObtenerRegistroAuditoriaPorId(long idRegistroAuditoria)
        {
            return GetById(idRegistroAuditoria);
        }

        public void BorrarRegistroAuditoria(long idRegistroAuditoria)
        {
            Delete(idRegistroAuditoria);
        }

        public List<RegistroAuditoria> ObtenerRegistrosAuditoria()
        {
            return GetAll().ToList();
        }

        public IList<RegistroAuditoria> ObtenerUltimosRegistrosAuditoriaDeUsuario(long idUsuario, int numeroRegistros)
        {
            var query = from ra in DbContext.RegistroAuditoria
                        where ra.IdUsuario == idUsuario
                        orderby ra.Fecha descending
                        select ra;

            return query.Take(numeroRegistros).ToList();
        }

        public IQueryable<RegistroAuditoria> ObtenerRegistrosAuditoriaPorModuloUsuarioAccion(long? idModulo, long? idUsuario,
            long? idAccion, long? idEmpresa, DateTime? fecha, String registro,long idUsuarioExec,string grupoEmpresa)
        {
            var res = GetQueryable();

            IList<long> idEmpresasUsuario = null;
            if (grupoEmpresa != null)
            {
                idEmpresasUsuario = DbContext.UsuarioEmpresa.Where(x => x.IdUsuario == idUsuarioExec && x.Empresa.GrupoEmpresa.Equals(grupoEmpresa)).Select(x => x.IdEmpresa).ToList();
            }
            else {
                idEmpresasUsuario = DbContext.UsuarioEmpresa.Where(x => x.IdUsuario == idUsuarioExec).Select(x => x.IdEmpresa).ToList();
            }
            

            res = res.Where(x => x.IdEmpresa == null || idEmpresasUsuario.Contains(x.IdEmpresa.Value));

            if (idEmpresa != null)
                res = res.Where(r => r.IdEmpresa == idEmpresa);
            if (fecha != null)
            {
                var fe = (DateTime) fecha;
                var f1 = new DateTime(fe.Year, fe.Month, fe.Day, 0, 0, 0);
                var f2 = new DateTime(fe.Year, fe.Month, fe.Day, 23, 59, 0);
                res = res.Where(r => r.Fecha >= f1 && r.Fecha <= f2);
            }
                
            if(!String.IsNullOrEmpty(registro))
                res = res.Where(r => r.Registro.ToUpper().Contains(registro.ToUpper()));
            if (idModulo != null)
                res = res.Where(r => r.IdModulo == idModulo);
            if (idUsuario != null)
                res = res.Where(r => r.IdUsuario == idUsuario);
            if (idAccion != null)
                res = res.Where(r => r.IdAccionAuditable == idAccion);
             res =  res.OrderByDescending(r => r.Fecha);
            res =
                res.Include(r => r.AccionAuditable)
                    .Include(r => r.Empresa)
                    .Include(r => r.Usuario)
                    .Include(r => r.Modulo);
            return res;
        }

        public IEnumerable<RegistroAuditoria> ObtenerRegistroAuditoriaPorFiltro(
            Expression<Func<RegistroAuditoria, bool>> filter = null,
            Func<IQueryable<RegistroAuditoria>, IOrderedQueryable<RegistroAuditoria>> orderBy = null,
            string includeProperties = "")
        {
            return Get(filter, orderBy, includeProperties);
        }

        public int EliminarRegistrosAuditoriaAnterioresALaFecha(DateTime fecha) 
        {
            int resultado = 0;
            var query = GetQueryable();

            if (fecha != null)
            {
                var fechaDesde = new DateTime(fecha.Year, fecha.Month, fecha.Day, 23, 59, 0);
                query = DbContext.RegistroAuditoria.Where(r => r.Fecha <= fechaDesde);

                foreach (RegistroAuditoria registro in query.ToList<RegistroAuditoria>())
                {
                    Delete(registro);
                    resultado++;
                }
                DbContext.SaveChanges(); 
            }  
            return resultado;
        }
    }
}