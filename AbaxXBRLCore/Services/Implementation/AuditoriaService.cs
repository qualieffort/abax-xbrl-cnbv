#region

using System;
using System.Configuration;
using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Entities;
using AbaxXBRLCore.Repository;
using Spring.Transaction;
using Spring.Transaction.Interceptor;
using AbaxXBRLCore.Common.Constants;
using AbaxXBRLCore.lang;
using System.Collections.Generic;
using AbaxXBRLCore.Common.Util;

#endregion

namespace AbaxXBRLCore.Services.Implementation
{
    /// <summary>
    ///     Implementacion del Servicio la auditoria de la aplicacion.
    ///     <author>Eric Alan González Fuentes</author>
    ///     <version>1.0</version>
    /// </summary>
    public class AuditoriaService : IAuditoriaService
    {
        public IAccionAuditableRepository Repository { get; set; }
        public IRegistroAuditoriaRepository RegistroAuditoriaRepository { get; set; }
        public IModuloRepository ModuloRepository { get; set; }

        #region AccionAuditable
        [Transaction(TransactionPropagation.Required)]
        public ResultadoOperacionDto GuardarAccionAuditable(AccionAuditable accionAuditable)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                resultado = Repository.GuardarAccionAuditable(accionAuditable);
            }
            catch (Exception exception)
            {
                LogUtil.Error(exception);
                resultado.Resultado = false;
                resultado.Mensaje = exception.Message;
                resultado.InformacionExtra = exception;
            }
            return resultado;
        }

        public ResultadoOperacionDto ObtenerAccionAuditablePorId(long idAccionAuditable)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                resultado.InformacionExtra = Repository.ObtenerAccionAuditablePorId(idAccionAuditable);
                resultado.Resultado = true;
            }
            catch (Exception exception)
            {
                LogUtil.Error(exception);
                resultado.Resultado = false;
                resultado.Mensaje = exception.Message;
                resultado.InformacionExtra = exception;
            }
            return resultado;
        }
        [Transaction(TransactionPropagation.Required)]
        public ResultadoOperacionDto BorrarAccionAuditable(long idAccionAuditable)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                Repository.BorrarAccionAuditable(idAccionAuditable);
                resultado.InformacionExtra = true;
                resultado.Resultado = true;
            }
            catch (Exception exception)
            {
                LogUtil.Error(exception);
                resultado.Resultado = false;
                resultado.Mensaje = exception.Message;
                resultado.InformacionExtra = exception;
            }
            return resultado;
        }

        public ResultadoOperacionDto ObtenerAccionesAuditable()
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                resultado.InformacionExtra = Repository.ObtenerAccionesAuditable();
                resultado.Resultado = true;
            }
            catch (Exception exception)
            {
                LogUtil.Error(exception);
                resultado.Resultado = false;
                resultado.Mensaje = exception.Message;
                resultado.InformacionExtra = exception;
            }
            return resultado;
        }

        #endregion

        #region RegistroAuditoria
        [Transaction(TransactionPropagation.Required)]
        public ResultadoOperacionDto GuardarRegistroAuditoria(RegistroAuditoria registroAuditoria)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                resultado = RegistroAuditoriaRepository.GuardarRegistroAuditoria(registroAuditoria);
            }
            catch (Exception exception)
            {
                LogUtil.Error(exception);
                resultado.Resultado = false;
                resultado.Mensaje = exception.Message;
                resultado.InformacionExtra = exception;
            }
            return resultado;
        }

        public ResultadoOperacionDto ObtenerRegistroAuditoriaPorId(long idRegistroAuditoria)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                resultado.InformacionExtra =
                    RegistroAuditoriaRepository.ObtenerRegistroAuditoriaPorId(idRegistroAuditoria);
                resultado.Resultado = true;
            }
            catch (Exception exception)
            {
                LogUtil.Error(exception);
                resultado.Resultado = false;
                resultado.Mensaje = exception.Message;
                resultado.InformacionExtra = exception;
            }
            return resultado;
        }
        [Transaction(TransactionPropagation.Required)]
        public ResultadoOperacionDto BorrarRegistroAuditoria(long idRegistroAuditoria)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                RegistroAuditoriaRepository.BorrarRegistroAuditoria(idRegistroAuditoria);
                resultado.Resultado = true;
            }
            catch (Exception exception)
            {
                LogUtil.Error(exception);
                resultado.Resultado = false;
                resultado.Mensaje = exception.Message;
                resultado.InformacionExtra = exception;
            }
            return resultado;
        }

        public ResultadoOperacionDto ObtenerRegistrosAuditoria()
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                resultado.InformacionExtra = RegistroAuditoriaRepository.ObtenerRegistrosAuditoria();
                resultado.Resultado = true;
            }
            catch (Exception exception)
            {
                LogUtil.Error(exception);
                resultado.Resultado = false;
                resultado.Mensaje = exception.Message;
                resultado.InformacionExtra = exception;
            }
            return resultado;
        }
        [Transaction(TransactionPropagation.Required)]
        public ResultadoOperacionDto EliminarRegistrosAuditoriaAnterioresALaFecha(DateTime fecha, long idUsuario, long idEmpresa) {
            var resultado = new ResultadoOperacionDto();
            var eliminados = 0;

            try
            {
                eliminados = RegistroAuditoriaRepository.EliminarRegistrosAuditoriaAnterioresALaFecha(fecha);
                resultado.Mensaje = "Se eliminarón: "+ eliminados + " regitros.";
                resultado.Resultado = true;
                resultado.InformacionExtra = eliminados;
                var param = new List<object>() { fecha };
                resultado.InformacionAuditoria = new InformacionAuditoriaDto(idUsuario, ConstantsAccionAuditable.Borrar, ConstantsModulo.Usuarios, MensajesServicios.DepurarBitacora,param, idEmpresa);
                GuardarRegistroAuditoria(new RegistroAuditoria() { 
                    Fecha = DateTime.Now,
                    IdModulo = resultado.InformacionAuditoria.Modulo,
                    IdUsuario = resultado.InformacionAuditoria.IdUsuario,
                    IdAccionAuditable = resultado.InformacionAuditoria.Accion,
                    IdEmpresa = resultado.InformacionAuditoria.Empresa,
                    Registro = resultado.InformacionAuditoria.Registro
                });
            }
            catch (Exception exception)
            {
                LogUtil.Error(exception);
                resultado.Resultado = false;
                resultado.Mensaje = exception.Message;
                resultado.InformacionExtra = exception;
            }
            return resultado;
        }

        public ResultadoOperacionDto ObtenerRegistrosAuditoriaPorModuloUsuarioAccion(long? idModulo, long? idUsuario,
            long? idAccion, long? idEmpresa, DateTime? fecha, String registro,long idUsuarioExec,string grupoEmpresa)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                resultado.InformacionExtra =
                    RegistroAuditoriaRepository.ObtenerRegistrosAuditoriaPorModuloUsuarioAccion(idModulo, idUsuario,
                        idAccion, idEmpresa, fecha, registro, idUsuarioExec, grupoEmpresa);
                resultado.Resultado = true;
            }
            catch (Exception exception)
            {
                resultado.Resultado = false;
                resultado.Mensaje = exception.Message;
                resultado.InformacionExtra = exception;
            }
            return resultado;
        }

        #endregion

        #region Modulo
        [Transaction(TransactionPropagation.Required)]
        public ResultadoOperacionDto GuardarModulo(Modulo modulo)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                resultado.InformacionExtra = ModuloRepository.GuardarModulo(modulo);
                resultado.Resultado = true;
            }
            catch (Exception exception)
            {
                LogUtil.Error(exception);
                resultado.Resultado = false;
                resultado.Mensaje = exception.Message;
                resultado.InformacionExtra = exception;
            }
            return resultado;
        }

        public ResultadoOperacionDto ObtenerModuloPorId(long idModulo)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                resultado.InformacionExtra = ModuloRepository.ObtenerModuloPorId(idModulo);
                resultado.Resultado = true;
            }
            catch (Exception exception)
            {
                LogUtil.Error(exception);
                resultado.Resultado = false;
                resultado.Mensaje = exception.Message;
                resultado.InformacionExtra = exception;
            }
            return resultado;
        }
        [Transaction(TransactionPropagation.Required)]
        public ResultadoOperacionDto BorrarModulo(long idModulo)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                ModuloRepository.BorrarModulo(idModulo);
                resultado.Resultado = true;
            }
            catch (Exception exception)
            {
                LogUtil.Error(exception);
                resultado.Resultado = false;
                resultado.Mensaje = exception.Message;
                resultado.InformacionExtra = exception;
            }
            return resultado;
        }

        public ResultadoOperacionDto ObtenerModulos()
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                resultado.InformacionExtra = ModuloRepository.ObtenerModulos();
                resultado.Resultado = true;
            }
            catch (Exception exception)
            {
                LogUtil.Error(exception);
                resultado.Resultado = false;
                resultado.Mensaje = exception.Message;
                resultado.InformacionExtra = exception;
            }
            return resultado;
        }

        #endregion
    }
}