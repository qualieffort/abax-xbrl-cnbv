using AbaxXBRLCore.Common.Constants;
using AbaxXBRLCore.Entities;
using AbaxXBRLCore.Repository;
using Spring.Aop;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Remoting;
using System.Text;

namespace AbaxXBRLCore.Services.Implementation
{
    /// <summary>
    /// Advice que registra las incidencias presentadas en el sitio
    /// </summary>
    public class RemoteThrowsAdvice : IThrowsAdvice 
    {
        /// <summary>
        /// Definicion de respositorio para registro de auditoria
        /// </summary>
        public IRegistroAuditoriaRepository RegistroAuditoriaRepository { get; set; }

        public IUsuarioRepository UsuarioRepository { get; set; }

        public void AfterThrowing(Exception ex)
        {
            RegistroAuditoria registroAuditoria = new RegistroAuditoria();
            registroAuditoria.IdEmpresa = null;
            registroAuditoria.Registro = "Traza del Error generado en la perición: " + ex.Message + " : " + ex.StackTrace;
            registroAuditoria.IdAccionAuditable = ConstantsAccionAuditable.Actualizar;
            registroAuditoria.IdModulo = ConstantsModulo.EditorDocumentosXBRL;
            registroAuditoria.IdUsuario = UsuarioRepository.GetAll().First().IdUsuario;
            registroAuditoria.Fecha = DateTime.Now;

            AbaxDbEntities ctx = new AbaxDbEntities();
            ctx.RegistroAuditoria.Add(registroAuditoria);
            ctx.SaveChanges();

        }
    }
}
