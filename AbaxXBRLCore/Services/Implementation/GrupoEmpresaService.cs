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
    /// Implementación del servicio con la lógica de negocio para la administración de las entidades del tipo GrupoEmpresa.
    /// </summary>
    public class GrupoEmpresaService: IGrupoEmpresaService
    {
        /// <summary>
        /// Repositorio para el manejo de la persistencia de las entidades GrupoEmpresa.
        /// </summary>
        public IGrupoEmpresaRepository GrupoEmpresaRepository {get; set;}

        /// <summary>
        /// Definicion de respositorio para registro de auditoria
        /// </summary>
        public IRegistroAuditoriaRepository RegistroAuditoriaRepository { get; set; }
        /// <summary>
        /// Repositorio para el acceso a los datos de Empresa.
        /// </summary>
        public IEmpresaRepository EmpresaRepository { get; set; } 

        /// <summary>
        /// Retorna todos los grupos de empresas existentes en BD.
        /// </summary>
        /// <returns>Lista con todos los grupos de empresas existentes.</returns>
        public IList<GrupoEmpresa> ObtenTodosGruposEmpresa()
        {
            return GrupoEmpresaRepository.GetAll().ToList();
        }
        /// <summary>
        /// Elimina el grupo de empresa del repositorio.
        /// </summary>
        /// <param name="idGrupoEmpresa">Identificador del gurpo de empresas a eliminar.</param>
        /// <param name="idUsuarioExec">Id del usuario que ejecuto el proceso.</param>
        /// <param name="idEmpresaExc">Identificador de la empresa que realiza esta acción.</param>
        /// <returns>Resultado de la operación.</returns>
        public ResultadoOperacionDto EliminaGrupoEmpresa(long idGrupoEmpresa, long idUsuarioExec, long idEmpresaExc)
        {
            var resultado = new ResultadoOperacionDto() { Resultado = true};
            try
            {
                var entidad = GrupoEmpresaRepository.GetById(idGrupoEmpresa);
                var param = new List<object>() { entidad.Nombre, entidad.IdGrupoEmpresa };
                var informacionAuditoria = new InformacionAuditoriaDto(idUsuarioExec, ConstantsAccionAuditable.Borrar, ConstantsModulo.GrupoEmpresa, MensajesServicios.BorrarGrupoEmpresa, param, idEmpresaExc);
                GrupoEmpresaRepository.Delete(entidad);
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
        /// Agrega un nuevo grupo de empresa al catalogo general.
        /// </summary>
        /// <param name="dto">Dto con la información del grupo.</param>
        /// <param name="idUsuarioExec">Identificador del usuario que realiza esta acción.</param>
        /// <param name="idEmpresaExc">Identificador de la empresa que realiza esta acción.</param>
        /// <returns>Resultado de la operación.</returns>
        public ResultadoOperacionDto GuardaGrupoEmpresa(GrupoEmpresaDto dto, long idUsuarioExec, long idEmpresaExc)
        {
            var resultado = new ResultadoOperacionDto() { Resultado = true };
            try
            {
                var entidad = new GrupoEmpresa() 
                {
                    Nombre = dto.Nombre,
                    Descripcion = dto.Descripcion,
                };
                GrupoEmpresaRepository.Add(entidad);

                var param = new List<object>() { entidad.Nombre, entidad.IdGrupoEmpresa };
                var informacionAuditoria = new InformacionAuditoriaDto(idUsuarioExec, ConstantsAccionAuditable.Insertar, ConstantsModulo.GrupoEmpresa, MensajesServicios.InsertarGrupoEmpresa, param,idEmpresaExc);
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
        /// Agrega un nuevo grupo de empresa al catalogo general.
        /// </summary>
        /// <param name="dto">Dto con la información del grupo.</param>
        /// <param name="idUsuarioExec">Identificador del usuario que realiza esta acción.</param>
        /// <param name="idEmpresaExc">Identificador de la empresa que realiza esta acción.</param>
        /// <returns>Resultado de la operación.</returns>
        public ResultadoOperacionDto ActualizarGrupoEmpresa(GrupoEmpresaDto dto, long idUsuarioExec, long idEmpresaExc)
        {
            var resultado = new ResultadoOperacionDto() { Resultado = true };
            try
            {
                var entidad = GrupoEmpresaRepository.GetById(dto.IdGrupoEmpresa);
                if (entidad == null)
                {
                    return GuardaGrupoEmpresa(dto, idUsuarioExec, idEmpresaExc);
                }

                entidad.Nombre = dto.Nombre;
                entidad.Descripcion = dto.Descripcion;

                GrupoEmpresaRepository.Update(entidad);

                var param = new List<object>() { entidad.Nombre, entidad.IdGrupoEmpresa };
                var informacionAuditoria = new InformacionAuditoriaDto(idUsuarioExec, ConstantsAccionAuditable.Actualizar, ConstantsModulo.GrupoEmpresa, MensajesServicios.ActualizarGrupoEmpresa, param, idEmpresaExc);
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
        /// Obtiene los registros utilizados para generar el reporte de excel.
        /// </summary>
        /// <param name="idUsuarioExec">Identificador del usuario que ejecuta.</param>
        /// <param name="idEmpresaExc">Identificador de la empresa que ejecuta.</param>
        /// <returns>Resultado de la operación.</returns>
        public ResultadoOperacionDto ObtenRegistrosReporte(long idUsuarioExec, long idEmpresaExc)
        {
            var resultado = new ResultadoOperacionDto() { Resultado = true };
            try
            {
                resultado.InformacionExtra = GrupoEmpresaRepository.ObtenRegistrosReporte();
                var param = new List<object>();
                var informacionAuditoria = new InformacionAuditoriaDto(idUsuarioExec, ConstantsAccionAuditable.Exportar, ConstantsModulo.GrupoEmpresa, MensajesServicios.ExportarExcelGrupoEmpresas, param, idEmpresaExc);
                resultado.InformacionAuditoria = informacionAuditoria;
            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
                resultado.Resultado = false;
                resultado.InformacionExtra = null;
                resultado.InformacionAuditoria = null;
            }

            return resultado;
        }

        /// <summary>
        /// Genera el registro de auditoría para bitacorizar la exportación a excel de los grupos de empresas.
        /// </summary>
        /// <param name="idUsuarioExec">Identificador del usuario que exporto la información.</param>
        /// <param name="idEmpresaExc">Identificador de la empresa que realiza esta acción.</param>
        /// <returns>Resultado de la operación.</returns>
        public ResultadoOperacionDto RegistrarAccionAuditoriaExportarExcel(long idUsuarioExec, long idEmpresaExc)
        {
            var resultado = new ResultadoOperacionDto() { Resultado = true};
            try
            {
                var param = new List<object>();
                var informacionAuditoria = new InformacionAuditoriaDto(idUsuarioExec, ConstantsAccionAuditable.Exportar, ConstantsModulo.GrupoEmpresa, MensajesServicios.ExportarExcelGrupoEmpresas, param, idEmpresaExc);
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
        /// <summary>
        /// Persiste la información de auditoria.
        /// </summary>
        /// <param name="inforAudit">Dto con la información a persistir.</param>
        /// <returns></returns>
        public void RegistrarAccionAuditoria(InformacionAuditoriaDto inforAudit)
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




        public IList<SelectItemDto> ObtenEmpresasAsignables()
        {
            return GrupoEmpresaRepository.ObtenEmpresasAsignables();
        }

        public IList<SelectItemDto> ObtenGruposAsignables()
        {
            return GrupoEmpresaRepository.ObtenGruposAsignables();
        }

        public IList<SelectItemDto> ObtenEmpresasAsignadas(long idGrupoEmpresa)
        {
            return GrupoEmpresaRepository.ObtenEmpresasAsignadas(idGrupoEmpresa);
        }

        public IList<SelectItemDto> ObtenEmpresasAsignadas(long[] idGrupoEmpresa)
        {
            return GrupoEmpresaRepository.ObtenEmpresasAsignadas(idGrupoEmpresa);
        }

        public IList<SelectItemDto> ObtenGruposEmpresasAsignados(long idEmpresa)
        {
            return GrupoEmpresaRepository.ObtenGruposEmpresasAsignados(idEmpresa);
        }
        [Transaction(TransactionPropagation.Required)]
        public void LimpiaRelacionesEmpresa(long idEmpresa)
        {
            GrupoEmpresaRepository.LimpiaRelacionesEmpresa(idEmpresa);
        }
        [Transaction(TransactionPropagation.Required)]
        public void LimpiaRelacionesGrupoEmpresa(long idGrupoEmpresa)
        {
            GrupoEmpresaRepository.LimpiaRelacionesGrupoEmpresa(idGrupoEmpresa);
        }
        
        /// <summary>
        /// Actualiza las relaciones entre empresas y grupoEmpresa de una empresa determinada.
        /// </summary>
        /// <param name="idEmpresa">Identificador de la empresa que se pretende actualizar.</param>
        /// <param name="idsGruposEmpresas">Grupos a los que será asignada la empresa.</param>
        /// <param name="idUsuarioExec">Usuario que ejecuta el proceso.</param>
        /// <param name="idEmpresaExc">Empresa que ejecuta el proceso.</param>
        /// <returns>Resultado de la operación.</returns>
        [Transaction(TransactionPropagation.Required)]
        public ResultadoOperacionDto ActualizaRelacionEmpresa(long idEmpresa, IList<long> idsGruposEmpresas, long idUsuarioExec, long idEmpresaExc)
        {
            var resultado = new ResultadoOperacionDto() { Resultado = true };
            try
            {
                var entidad = EmpresaRepository.GetById(idEmpresa);
                var param = new List<object>() 
                { 
                    entidad.NombreCorto
                };
                var informacionAuditoria = new InformacionAuditoriaDto(idUsuarioExec, ConstantsAccionAuditable.Actualizar, ConstantsModulo.GrupoEmpresa, MensajesServicios.ActualizarRelacionesEmpresaAgruposEmprea, param, idEmpresaExc);

                GrupoEmpresaRepository.LimpiaRelacionesEmpresa(idEmpresa);
                foreach (var idGrupoEmpresa in idsGruposEmpresas)
                {
                    GrupoEmpresaRepository.AgregaRelacionEmpresaGrupoEmpresa(idEmpresa, idGrupoEmpresa);
                }
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
        /// Actualiza las relaciones entre empresas y grupoEmpresa de un grupo de empresas determinado.
        /// </summary>
        /// <param name="idGrupoEmpresa">Identificador del grupo de emrpesas que se pretende actualizar.</param>
        /// <param name="idsEmpreas">Identificadores de las empresas a actualizar.</param>
        /// <param name="idUsuarioExec">Usuario que ejecuta el proceso.</param>
        /// <param name="idEmpresaExc">Empresa que ejecuta el proceso.</param>
        /// <returns>Resultado de la operación.</returns>
        [Transaction(TransactionPropagation.Required)]
        public ResultadoOperacionDto ActualizaRelacionGrupoEmpresas(long idGrupoEmpresa, IList<long> idsEmpreas, long idUsuarioExec, long idEmpresaExc)
        {
            var resultado = new ResultadoOperacionDto() { Resultado = true };
            try
            {
                var entidad = GrupoEmpresaRepository.GetById(idGrupoEmpresa);
                var param = new List<object>() 
                { 
                    entidad.Nombre
                };
                var informacionAuditoria = new InformacionAuditoriaDto(idUsuarioExec, ConstantsAccionAuditable.Actualizar, ConstantsModulo.GrupoEmpresa, MensajesServicios.ActualizarRelacioesGrupoEmpresaAempresa, param, idEmpresaExc);

                GrupoEmpresaRepository.LimpiaRelacionesGrupoEmpresa(idGrupoEmpresa);
                foreach (var idEmpresa in idsEmpreas)
                {
                    GrupoEmpresaRepository.AgregaRelacionEmpresaGrupoEmpresa(idEmpresa, idGrupoEmpresa);
                }
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
    }
}
