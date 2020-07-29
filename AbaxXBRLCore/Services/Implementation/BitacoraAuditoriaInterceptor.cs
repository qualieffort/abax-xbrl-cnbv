using System.Web;
using AbaxXBRLCore.Common.Constants;
using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Entities;
using AbaxXBRLCore.Repository;
using AopAlliance.Intercept;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using AbaxXBRLCore.Common.Util;

namespace AbaxXBRLCore.Services.Implementation
{
    /// <summary>
    /// Luis Angel Morales Gonzalez
    /// Interceptor que registra datos de auditoria por ejecuciones a metodos auditables
    /// </summary>
    public class BitacoraAuditoriaInterceptor : IMethodInterceptor
    {

        /// <summary>
        /// Definicion de respositorio para registro de auditoria
        /// </summary>
        public IRegistroAuditoriaRepository RegistroAuditoriaRepository { get; set; }

        /// <summary>
        /// Ejucion del metodo auditable
        /// </summary>
        /// <param name="invocation">Datos de invocacion del metodo</param>
        /// <returns>Resultado de la operacion del metodo autitable</returns>
        public object Invoke(IMethodInvocation invocation)
        {
            
            object resultadoMetodo = invocation.Proceed();

            if (resultadoMetodo is ResultadoOperacionDto)
            {
                ResultadoOperacionDto resultadoOperacionDto = (ResultadoOperacionDto)resultadoMetodo;
                InformacionAuditoriaDto informacionAuditoriaDto = resultadoOperacionDto.InformacionAuditoria;
                RegistroAuditoria registroAuditoria = new RegistroAuditoria();
                if (informacionAuditoriaDto != null)
                {
                    registroAuditoria.IdEmpresa = informacionAuditoriaDto.Empresa;
                    registroAuditoria.Registro = informacionAuditoriaDto.Registro;
                    registroAuditoria.IdAccionAuditable = informacionAuditoriaDto.Accion;
                    registroAuditoria.IdModulo = informacionAuditoriaDto.Modulo;
                    registroAuditoria.IdUsuario = informacionAuditoriaDto.IdUsuario;
                    registroAuditoria.Fecha = DateTime.Now;
                    if (HttpContext.Current != null)
                    {
                        var session = HttpContext.Current.Session;
                        if (session != null)
                        {
                            if (registroAuditoria.IdEmpresa == 0 && session[ConstantsWeb.IdEmpresaSession] != null)
                                registroAuditoria.IdEmpresa = long.Parse(session[ConstantsWeb.IdEmpresaSession].ToString());
                        }
                    }
                    RegistroAuditoriaRepository.GuardarRegistroAuditoria(registroAuditoria);
                }
            }
            return resultadoMetodo;
        }
        /// <summary>
        /// Carga los parametros de auditoría de la solicitud.
        /// </summary>
        /// <param name="registroAuditoria">Registro de auditoría.</param>
        private void CargaParemetrosAuditoriaRequest(RegistroAuditoria registroAuditoria)
        {
            try
            {
                if (HttpContext.Current != null && HttpContext.Current.Items != null)
                {
                    if (registroAuditoria.IdUsuario == 0)
                    {
                        registroAuditoria.IdUsuario = (long)HttpContext.Current.Items[ConstantsWeb.ParametroAuditoriaIdUsuarioExe];
                    }
                    if ((registroAuditoria.IdEmpresa == null || registroAuditoria.IdEmpresa == 0) && 
                        HttpContext.Current.Items.Contains(ConstantsWeb.ParametroAuditoriaIdEmpresaExe))
                    {
                        registroAuditoria.IdEmpresa = (long?)HttpContext.Current.Items[ConstantsWeb.ParametroAuditoriaIdEmpresaExe];
                    }
                }
            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
            }
        }
    }
}
