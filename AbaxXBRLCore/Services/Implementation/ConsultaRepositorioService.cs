using AbaxXBRLCore.Common.Constants;
using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.Entities;
using AbaxXBRLCore.lang;
using AbaxXBRLCore.Repository;
using AbaxXBRLCore.Viewer.Application.Dto;
using AbaxXBRLCore.Viewer.Application.Dto.Angular;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Services.Implementation
{
    /// <summary>
    ///     Implementacion del Servicio de las consultas de informacion al repositorio.
    ///     <author>Luis Angel Morales Gonzalez</author>
    ///     <version>1.0</version>
    /// </summary>
    public class ConsultaRepositorioService : IConsultaRepositorioService
    {
        /// <summary>
        /// Repositorio con la referencia para la consulta
        /// </summary>
        public IConsultaRepositorioRepository ConsultaRepositorioRepository { get; set; }

        public ResultadoOperacionDto ObtenerConsultas()
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                resultado.InformacionExtra = ConsultaRepositorioRepository.ObtenerConsultasRepositorio();
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

        public ResultadoOperacionDto Eliminar(long idConsulta)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                var consulta = ConsultaRepositorioRepository.GetById(idConsulta);

                ConsultaRepositorioRepository.Delete(consulta);

                ConsultaRepositorioRepository.DbContext.SaveChanges();

                ConsultaRepositorioRepository.Commit();
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

        public ResultadoOperacionDto Registrar(ConsultaRepositorio consulta)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {


                ConsultaRepositorioRepository.Add(consulta);
                ConsultaRepositorioRepository.Commit();

                //resultado.InformacionExtra = consultaAnalisis.IdConsultaAnalisis;


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

        /// <summary>
        /// Retorna una lista de Dtos con la información a desplegar en la vista de listado de consutlas al repositorio.
        /// Se muestran las consultas privadas del usuario que consulta y todas las consultas públicas.
        /// </summary>
        /// <param name="idUsuario">Identificador del usuario que esta consultado.</param>
        /// <returns>Dtos con la infomración a mostrar.</returns>
        public IList<ConsultaRepositorioCnbvDto> ObtenConsultasRepositorioDtos(long idUsuario) 
        {
            return ConsultaRepositorioRepository.ObtenConsultasRepositorioDtos(idUsuario);
        }

        /// <summary>
        /// Retorna un dto auditable con los registros para generar el reporte de Excel.
        /// </summary>
        /// <param name="idUsuarioExec">Usuario que ejecuta el proceso.</param>
        /// <param name="idEmpresaExec">Empresa en sesión</param>
        /// <returns>Resultado auditable con los registros.</returns>
        public ResultadoOperacionDto ObtenRegistrosReporteExcel(long idUsuarioExec, long idEmpresaExec)
        {
            var resultado = new ResultadoOperacionDto() { Resultado = true };
            try
            {
                resultado.InformacionExtra = ConsultaRepositorioRepository.ObtenConsultasRepositorioDtos(idUsuarioExec);
                var param = new List<object>();
                var informacionAuditoria = new InformacionAuditoriaDto(idUsuarioExec, ConstantsAccionAuditable.Exportar, ConstantsModulo.ConsultasEspecializadas, MensajesServicios.ExportarExcelConsultasRepositorio, param, idEmpresaExec);
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
        /// Elimina la consulta al repositorio para el identificador dado.
        /// </summary>
        /// <param name="idConsultaRepositorio">Identificador de la consulta al repositorio.</param>
        /// <param name="idUsuarioExec">Id del usuario que ejecuto el proceso.</param>
        /// <param name="idEmpresaExc">Identificador de la empresa que realiza esta acción.</param>
        /// <returns>Resultado de la operación.</returns>
        public ResultadoOperacionDto EliminaConsultaRepositorio(long idConsultaRepositorio, long idUsuarioExec, long idEmpresaExc)
        {
            var resultado = new ResultadoOperacionDto() { Resultado = true };
            try
            {
                var entidad = ConsultaRepositorioRepository.GetById(idConsultaRepositorio);
                var param = new List<object>() { entidad.Nombre, entidad.IdConsultaRepositorio };
                var informacionAuditoria = new InformacionAuditoriaDto(idUsuarioExec, ConstantsAccionAuditable.Borrar, ConstantsModulo.ConsultasEspecializadas, MensajesServicios.BorrarConsultaRepositorio, param, idEmpresaExc);
                ConsultaRepositorioRepository.Delete(entidad);
                resultado.InformacionAuditoria = informacionAuditoria;
                resultado.Mensaje = entidad.Nombre;
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
        /// Agrega una nueva consulta al catalogo de consultas al repositorio.
        /// </summary>
        /// <param name="dto">Dto con la información a persitir.</param>
        /// <param name="idUsuarioExec">Identificador del usuario que realiza esta acción.</param>
        /// <param name="idEmpresaExc">Identificador de la empresa que realiza esta acción.</param>
        /// <returns>Resultado de la operación.</returns>
        public ResultadoOperacionDto GuardaConsultaRepositorio(ConsultaRepositorioCnbvDto dto, long idUsuarioExec, long idEmpresaExc)
        {
            var resultado = new ResultadoOperacionDto() { Resultado = true };
            try
            {
                var entidad = new ConsultaRepositorio()
                {
                    Nombre = dto.Nombre,
                    Descripcion = dto.Descripcion,
                    Consulta = dto.Consulta,
                    FechaCreacion = DateTime.Today,
                    IdUsuario = idUsuarioExec,
                    Publica = dto.Publica
                };

                ConsultaRepositorioRepository.Add(entidad);


                var param = new List<object>() { entidad.Nombre, entidad.IdConsultaRepositorio };
                var informacionAuditoria = new InformacionAuditoriaDto(idUsuarioExec, ConstantsAccionAuditable.Insertar, ConstantsModulo.ConsultasEspecializadas, MensajesServicios.InsertarConsultaRepositorio, param, idEmpresaExc);
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
        /// Agrega un nuevo elemento al catalogo de ConsultaRepositorio..
        /// </summary>
        /// <param name="dto">Dto con la información de la entidad.</param>
        /// <param name="idUsuarioExec">Identificador del usuario que realiza esta acción.</param>
        /// <param name="idEmpresaExc">Identificador de la empresa que realiza esta acción.</param>
        /// <returns>Resultado de la operación.</returns>
        public ResultadoOperacionDto ActualizarConsultaRepositorio(ConsultaRepositorioCnbvDto dto, long idUsuarioExec, long idEmpresaExc)
        {
            var resultado = new ResultadoOperacionDto() { Resultado = true };
            try
            {
                var entidad = ConsultaRepositorioRepository.GetById(dto.IdConsultaRepositorio);
                if (entidad == null)
                {
                    return GuardaConsultaRepositorio(dto, idUsuarioExec, idEmpresaExc);
                }

                entidad.Nombre = dto.Nombre;
                entidad.Descripcion = dto.Descripcion;
                entidad.Publica = dto.Publica;
                entidad.Consulta = dto.Consulta;

                ConsultaRepositorioRepository.Update(entidad);

                resultado.InformacionExtra = entidad;

                var param = new List<object>() { entidad.Nombre, entidad.IdConsultaRepositorio };
                var informacionAuditoria = new InformacionAuditoriaDto(idUsuarioExec, ConstantsAccionAuditable.Actualizar, ConstantsModulo.ConsultasEspecializadas, MensajesServicios.ActualizaConsultaRepositorio, param, idEmpresaExc);
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
