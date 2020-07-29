using AbaxXBRLCore.Common.Constants;
using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.Entities;
using AbaxXBRLCore.lang;
using AbaxXBRLCore.Repository;
using AbaxXBRLCore.Viewer.Application.Dto.Angular;
using Spring.Transaction;
using Spring.Transaction.Interceptor;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRLCore.Services.Implementation
{
    /// <summary>
    /// Implementación del servicio con la lógica de negocio para la administración de las entidades del tipo ListaNotificacion.
    /// </summary>
    public class ListaNotificacionService : IListaNotificacionService
    {
        #region Propiedades
        /// <summary>
        /// Repositorio para el manejo de la persistencia de las entidades DestinatarioNotificacion.
        /// </summary>
        public IDestinatarioNotificacionRepository DestinatarioNotificacionRepository { get; set; }

        /// <summary>
        /// Repositorio para el manejo de la persistencia de las entidades ListaNotificacion.
        /// </summary>
        public IListaNotificacionRepository ListaNotificacionRepository { get; set; }

        /// <summary>
        /// Definicion de respositorio para registro de auditoria
        /// </summary>
        public IRegistroAuditoriaRepository RegistroAuditoriaRepository { get; set; }
        #endregion

        #region Servicios de Listas de Notificación
        /// <summary>
        /// Retorna todas las listas de notificación existentes en BD.
        /// </summary>
        /// <returns>Lista con todas las listas de notificación existentes.</returns>
        public List<ListaNotificacionDto> ObtenerListasNotificacion()
        {
            return ListaNotificacionRepository.Obtener();
        }

        /// <summary>
        /// Retorna las listas de notificación que cumplan con un criterio de busqueda.
        /// </summary>
        /// <returns>Lista con las listas de notificación.</returns>
        public IQueryable<ListaNotificacionDto> ObtenerListasNotificacion(string search)
        {
            return ListaNotificacionRepository.Obtener(search);
        }

        /// <summary>
        /// Retorna una lista de notificación basandose en su identificador.
        /// </summary>
        /// <returns>Un entity con la información de una lista de notificación.</returns>
        public ListaNotificacionDto ObtenerListaNotificacion(long idListaNotificacion)
        {
            return ListaNotificacionRepository.Obtener(idListaNotificacion);
        }

        /// <summary>
        /// Actualiza una lista de notificación.
        /// </summary>
        /// <param name="dto">Dto con la información de la lista.</param>
        /// <param name="idUsuarioExec">Identificador del usuario que realiza esta acción.</param>
        /// <param name="idEmpresaExc">Identificador de la empresa que realiza esta acción.</param>
        /// <returns>Resultado de la operación.</returns>
        [Transaction(TransactionPropagation.Required)]
        public ResultadoOperacionDto GuardarListaNotificacion(ListaNotificacionDto dto, long idUsuarioExec, long idEmpresaExc)
        {
            var resultado = new ResultadoOperacionDto() { Resultado = true };
            try
            {
                resultado=ListaNotificacionRepository.Guardar(dto);

                var param = new List<object>() { dto.Nombre };
                var informacionAuditoria = new InformacionAuditoriaDto(
                    idUsuarioExec,
                    dto.IdListaNotificacion == 0 ? ConstantsAccionAuditable.Insertar : ConstantsAccionAuditable.Actualizar,
                    ConstantsModulo.ListasNotificacion,
                    dto.IdListaNotificacion == 0 ? MensajesServicios.InsertarListaNotificacion : MensajesServicios.ActualizarListaNotificacion,
                    param,
                    idEmpresaExc
                );
                resultado.InformacionAuditoria = informacionAuditoria;
            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
                resultado.Resultado = false;
                resultado.InformacionAuditoria = null;
            }

            return resultado;
        }

        /// <summary>
        /// Borra un destinatario de notificación.
        /// </summary>
        /// <param name="idListaNotificacion">Identificador del destinatario que se desea borrar</param>
        /// <param name="idUsuarioExec">Identificador del usuario que exporto la información.</param>
        /// <param name="idEmpresaExc">Identificador de la empresa que realiza esta acción.</param>
        /// <returns>Resultado de la operación.</returns>
        [Transaction(TransactionPropagation.Required)]
        public ResultadoOperacionDto BorrarListaNotificacion(long idListaNotificacion, long idUsuarioExec, long idEmpresaExc)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                var param = new List<object>() { ListaNotificacionRepository.Obtener(idListaNotificacion).Nombre };
                resultado.InformacionAuditoria = new InformacionAuditoriaDto(
                    idUsuarioExec,
                    ConstantsAccionAuditable.Borrar,
                    ConstantsModulo.ListasNotificacion,
                    MensajesServicios.BorrarListaNotificacion,
                    param);
                ListaNotificacionRepository.Borrar(idListaNotificacion);
                resultado.Resultado = true;
                resultado.InformacionExtra = true;
            }
            catch (Exception exception)
            {
                resultado.Resultado = false;
                resultado.Mensaje = exception.Message;
                resultado.InformacionExtra = exception;
                resultado.InformacionAuditoria = null;
            }
            return resultado;
        }

        /// <summary>
        /// Genera el registro de auditoría para bitacorizar la exportación a excel de las listas de notificación.
        /// </summary>
        /// <param name="idUsuarioExec">Identificador del usuario que exporto la información.</param>
        /// <param name="idEmpresaExc">Identificador de la empresa que realiza esta acción.</param>
        /// <returns>Resultado de la operación.</returns>
        public ResultadoOperacionDto RegistrarAccionAuditoriaExportarExcelListas(long idUsuarioExec, long idEmpresaExc)
        {
            var resultado = new ResultadoOperacionDto() { Resultado = true };
            try
            {
                var param = new List<object>();
                var informacionAuditoria = new InformacionAuditoriaDto(
                    idUsuarioExec,
                    ConstantsAccionAuditable.Exportar,
                    ConstantsModulo.ListasNotificacion,
                    MensajesServicios.ExportarExcelListasNotificacion,
                    param,
                    idEmpresaExc
                );
                RegistrarAccionAuditoria(informacionAuditoria);
            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
                resultado.Resultado = false;
                resultado.InformacionAuditoria = null;
            }
            return resultado;

        }
        #endregion

        #region Servicios de Destinatarios de Notificación
        /// <summary>
        /// Retorna todos los destinatarios de la notificación existentes en BD.
        /// </summary>
        /// <returns>Destinatario con todos los destinatario de la notificación existentes.</returns>
        public List<DestinatarioNotificacionDto> ObtenerDestinatariosNotificacion()
        {
            return DestinatarioNotificacionRepository.Obtener();
        }

        /// <summary>
        /// Retorna los destinatarios que pertenecen a una lista de notificación.
        /// </summary>
        /// <param name="idListaNotificacion">Id de la lista de notificación</param>
        /// <returns>Lista con los destinatarios.</returns>
        public List<DestinatarioNotificacionDto> ObtenerDestinatariosNotificacion(long idListaNotificacion)
        {
            return DestinatarioNotificacionRepository.ObtenerAsignados(idListaNotificacion);
        }

        /// <summary>
        /// Retorna las listas de notificación que cumplan con un criterio de busqueda.
        /// </summary>
        /// <returns>Destinatario con las listas de notificación.</returns>
        public IQueryable<DestinatarioNotificacionDto> ObtenerDestinatariosNotificacion(string search)
        {
            return DestinatarioNotificacionRepository.Obtener(search);
        }

        /// <summary>
        /// Retorna un destinatario de notificación basandose en su identificador.
        /// </summary>
        /// <returns>Un entity con la información de un destinatario de notificación.</returns>
        public DestinatarioNotificacionDto ObtenerDestinatarioNotificacion(long idDestinatarioNotificacion)
        {
            return DestinatarioNotificacionRepository.Obtener(idDestinatarioNotificacion);
        }

        /// <summary>
        /// Actualiza un destinatario de notificación.
        /// </summary>
        /// <param name="dto">Dto con la información del destinatario.</param>
        /// <param name="idUsuarioExec">Identificador del usuario que realiza esta acción.</param>
        /// <param name="idEmpresaExc">Identificador de la empresa que realiza esta acción.</param>
        /// <returns>Resultado de la operación.</returns>
        [Transaction(TransactionPropagation.Required)]
        public ResultadoOperacionDto GuardarDestinatarioNotificacion(DestinatarioNotificacionDto dto, long idUsuarioExec, long idEmpresaExc)
        {
            var resultado = new ResultadoOperacionDto() { Resultado = true };
            try
            {
                DestinatarioNotificacionRepository.Guardar(dto);

                var param = new List<object> { dto.Nombre, ListaNotificacionRepository.Obtener(dto.IdListaNotificacion).Nombre };
                var informacionAuditoria = new InformacionAuditoriaDto(
                    idUsuarioExec,
                    dto.IdDestinatarioNotificacion == 0 ? ConstantsAccionAuditable.Insertar : ConstantsAccionAuditable.Actualizar,
                    ConstantsModulo.ListasNotificacion,
                    dto.IdDestinatarioNotificacion == 0 ? MensajesServicios.InsertarDestinatarioNotificacion : MensajesServicios.ActualizarDestinatarioNotificacion,
                    param,
                    idEmpresaExc
                );
                resultado.InformacionAuditoria = informacionAuditoria;
            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
                resultado.Resultado = false;
                resultado.InformacionAuditoria = null;
            }

            return resultado;
        }

        /// <summary>
        /// Borra un destinatario de notificación.
        /// </summary>
        /// <param name="idDestinatarioNotificacion">Identificador del destinatario que se desea borrar</param>
        /// <param name="idUsuarioExec">Identificador del usuario que exporto la información.</param>
        /// <param name="idEmpresaExc">Identificador de la empresa que realiza esta acción.</param>
        /// <returns>Resultado de la operación.</returns>
        [Transaction(TransactionPropagation.Required)]
        public ResultadoOperacionDto BorrarDestinatarioNotificacion(long idDestinatarioNotificacion, long idUsuarioExec, long idEmpresaExc)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                var dto = DestinatarioNotificacionRepository.Obtener(idDestinatarioNotificacion);
                var param = new List<object> { dto.Nombre, ListaNotificacionRepository.Obtener(dto.IdListaNotificacion).Nombre };
                resultado.InformacionAuditoria = new InformacionAuditoriaDto(
                    idUsuarioExec,
                    ConstantsAccionAuditable.Borrar,
                    ConstantsModulo.ListasNotificacion,
                    MensajesServicios.BorrarDestinatarioNotificacion,
                    param,
                    idEmpresaExc
                );
                DestinatarioNotificacionRepository.Borrar(idDestinatarioNotificacion);
                resultado.Resultado = true;
                resultado.InformacionExtra = true;
            }
            catch (Exception exception)
            {
                resultado.Resultado = false;
                resultado.Mensaje = exception.Message;
                resultado.InformacionExtra = exception;
                resultado.InformacionAuditoria = null;
            }
            return resultado;
        }

        /// <summary>
        /// Genera el registro de auditoría para bitacorizar la exportación a excel de los destinatarios de una lista de notificación.
        /// </summary>
        /// <param name="idListaNotificacion">Identificador de la lista de notificación.</param>
        /// <param name="idUsuarioExec">Identificador del usuario que exporto la información.</param>
        /// <param name="idEmpresaExc">Identificador de la empresa que realiza esta acción.</param>
        /// <returns>Resultado de la operación.</returns>
        public ResultadoOperacionDto RegistrarAccionAuditoriaExportarExcelDestinatarios(long idListaNotificacion, long idUsuarioExec, long idEmpresaExc)
        {
            var resultado = new ResultadoOperacionDto() { Resultado = true };
            try
            {
                var param = new List<object> { ListaNotificacionRepository.Obtener(idListaNotificacion).Nombre };
                var informacionAuditoria = new InformacionAuditoriaDto(
                    idUsuarioExec,
                    ConstantsAccionAuditable.Exportar,
                    ConstantsModulo.ListasNotificacion,
                    MensajesServicios.ExportarExcelDestinatariosNotificacion,
                    param,
                    idEmpresaExc
                );
                RegistrarAccionAuditoria(informacionAuditoria);
            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
                resultado.Resultado = false;
                resultado.InformacionAuditoria = null;
            }
            return resultado;

        }
        #endregion

        #region Utilidades
        /// <summary>
        /// Persiste la información de auditoria.
        /// </summary>
        /// <param name="inforAudit">Dto con la información a persistir.</param>
        /// <returns></returns>
        private void RegistrarAccionAuditoria(InformacionAuditoriaDto inforAudit)
        {
            RegistroAuditoria registroAuditoria = new RegistroAuditoria();
            registroAuditoria.IdEmpresa = inforAudit.Empresa;
            registroAuditoria.Registro = inforAudit.Registro;
            registroAuditoria.IdAccionAuditable = inforAudit.Accion;
            registroAuditoria.IdModulo = inforAudit.Modulo;
            registroAuditoria.IdUsuario = inforAudit.IdUsuario;
            registroAuditoria.Fecha = DateTime.Now;
            registroAuditoria.IdEmpresa = inforAudit.Empresa;
            RegistroAuditoriaRepository.GuardarRegistroAuditoria(registroAuditoria);
        }
        #endregion
    }
}