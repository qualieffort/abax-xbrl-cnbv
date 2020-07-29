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
    /// Implementación del servicio con la lógica de negocio para la administración de las entidades del tipo ParametroSistema.
    /// </summary>
    public class ParametroSistemaService: IParametroSistemaService
    {
        #region Propiedades
        /// <summary>
        /// Repositorio para el manejo de la persistencia de las entidades ParametroSistema.
        /// </summary>
        public IParametroSistemaRepository ParametroSistemaRepository { get; set; }

        /// <summary>
        /// Definicion de respositorio para registro de auditoria
        /// </summary>
        public IRegistroAuditoriaRepository RegistroAuditoriaRepository { get; set; }
        #endregion

        #region Funciones
        /// <summary>
        /// Retorna todos los parametros del sistema existentes en BD.
        /// </summary>
        /// <returns>Lista con todos los parametros del sistema existentes.</returns>
        public List<ParametroSistema> Obtener()
        {
            return ParametroSistemaRepository.Obtener();
        }

        /// <summary>
        /// Retorna un parametro del sistema basandose en su identificador.
        /// </summary>
        /// <returns>Un entity con la información de un parametro del sistema.</returns>
        public ParametroSistema Obtener(long idParametroSistema)
        {
            return ParametroSistemaRepository.Obtener(idParametroSistema);
        }

        /// <summary>
        /// Actualiza un parametro del sistema.
        /// </summary>
        /// <param name="dto">Dto con la información del parametro.</param>
        /// <param name="idUsuarioExec">Identificador del usuario que realiza esta acción.</param>
        /// <param name="idEmpresaExc">Identificador de la empresa que realiza esta acción.</param>
        /// <returns>Resultado de la operación.</returns>
        [Transaction(TransactionPropagation.Required)]
        public ResultadoOperacionDto ActualizarParametroSistema(ParametroSistema dto, long idUsuarioExec, long idEmpresaExc)
        {
            var resultado = new ResultadoOperacionDto() { Resultado = true };
            try
            {
                var entidad = ParametroSistemaRepository.Obtener(dto.IdParametroSistema);
                if (entidad == null)
                {
                    throw new Exception("No se encontro el parametro buscado.");
                }

                entidad.Valor = dto.Valor;

                ParametroSistemaRepository.Guardar(entidad);

                var param = new List<object>() { entidad.Nombre, entidad.IdParametroSistema };
                var informacionAuditoria = new InformacionAuditoriaDto(idUsuarioExec, ConstantsAccionAuditable.Actualizar, ConstantsModulo.ParametrosSistema, MensajesServicios.ActualizarParametroSistema, param, idEmpresaExc);
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
        /// Genera el registro de auditoría para bitacorizar la exportación a excel de los parametros del sistema.
        /// </summary>
        /// <param name="idUsuarioExec">Identificador del usuario que exporto la información.</param>
        /// <param name="idEmpresaExc">Identificador de la empresa que realiza esta acción.</param>
        /// <returns>Resultado de la operación.</returns>
        public ResultadoOperacionDto RegistrarAccionAuditoriaExportarExcel(long idUsuarioExec, long idEmpresaExc)
        {
            var resultado = new ResultadoOperacionDto() { Resultado = true };
            try
            {
                var param = new List<object>();
                var informacionAuditoria = new InformacionAuditoriaDto(
                    idUsuarioExec, 
                    ConstantsAccionAuditable.Exportar, 
                    ConstantsModulo.ParametrosSistema, 
                    MensajesServicios.ExportarExcelParametrosSistema, 
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
        public string ObtenerValorParametroSistema(string claveParametro, string valorDefault)
        {
            var parametro = ParametroSistemaRepository.GetQueryable(x => x.Nombre.Equals(claveParametro)).FirstOrDefault();
            if (parametro != null) {
                return parametro.Valor;            
            }
            return valorDefault;
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