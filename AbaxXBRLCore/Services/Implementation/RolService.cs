#region

using System;
using System.Collections.Generic;
using System.Linq;
using AbaxXBRLCore.Common.Constants;
using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Entities;
using AbaxXBRLCore.lang;
using AbaxXBRLCore.Repository;
using AbaxXBRLCore.Repository.Implementation;
using Spring.Transaction;
using Spring.Transaction.Interceptor;

#endregion

namespace AbaxXBRLCore.Services.Implementation
{
    public class RolService : IRolService
    {
        public IRolRepository RolRepository { get; set; }
        public IRolFacultadRepository RolFacultadRepository { get; set; }
        public IGrupoUsuariosRolRepository GrupoUsuariosRolRepository { get; set; }

        public IFacultadRepository FacultadRepository { get; set; }
        public ICategoriaFacultadRepository CategoriaFacultadRepository { get; set; }

        #region Rol
        [Transaction(TransactionPropagation.Required)]
        public ResultadoOperacionDto GuardarRol(Rol rol, long idUsuarioExec)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                var param = new List<object>(){rol.Nombre};
                var informacionAuditoria = new InformacionAuditoriaDto(idUsuarioExec, rol.IdRol == 0
                    ? ConstantsAccionAuditable.Insertar
                    : ConstantsAccionAuditable.Actualizar, ConstantsModulo.Rol,rol.IdRol == 0 ? MensajesServicios.InsertarRol : MensajesServicios.ActualizarRol, param);
                resultado = RolRepository.GuardarRol(rol);
                resultado.InformacionAuditoria = informacionAuditoria;
            }
            catch (Exception exception)
            {
                resultado.Resultado = false;
                resultado.Mensaje = exception.Message;
                resultado.InformacionExtra = exception;
            }
            return resultado;
        }

        public ResultadoOperacionDto VerificaRolEmpresa(long idRol, long idEmpresa)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                
                resultado.InformacionExtra = RolRepository.VerificaRolEmpresa(idRol,idEmpresa);
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

      

        public ResultadoOperacionDto ObtenerRolPorId(long idRol)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                resultado.InformacionExtra = RolRepository.ObtenerRolPorId(idRol);
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
        [Transaction(TransactionPropagation.Required)]
        public ResultadoOperacionDto BorrarRol(long idRol, long idUsuarioExec)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                var param = new List<object>() { RolRepository.ObtenerRolPorId(idRol).Nombre};
                RolRepository.BorrarRol(idRol);               
                resultado.InformacionAuditoria = new InformacionAuditoriaDto(idUsuarioExec, ConstantsAccionAuditable.Borrar, ConstantsModulo.Rol, MensajesServicios.BorrarRol, param);
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

        [Transaction(TransactionPropagation.Required)]
        public ResultadoOperacionDto BorrarLogicamenteRol(long idRol, long idUsuarioExec)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                var param = new List<object>() { RolRepository.ObtenerRolPorId(idRol).Nombre };
                RolRepository.BorrardoLogicoRol(idRol);                
                resultado.InformacionAuditoria = new InformacionAuditoriaDto(idUsuarioExec, ConstantsAccionAuditable.Borrar, ConstantsModulo.Rol, MensajesServicios.BorrarRol, param);
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

        public ResultadoOperacionDto ObtenerRoles()
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                resultado.InformacionExtra = RolRepository.ObtenerRoles();
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


        public ResultadoOperacionDto ObtenerRolesPorNombre(String nombre, long? idEmpresa)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                resultado.InformacionExtra = RolRepository.ObtenerRolesPorNombre(nombre, idEmpresa);
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

        #region RolFacultad
        [Transaction(TransactionPropagation.Required)]
        public ResultadoOperacionDto GuardarRolFacultad(RolFacultad rolFacultad)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                
                resultado = RolFacultadRepository.GuardarRolFacultad(rolFacultad);               
            }
            catch (Exception exception)
            {
                resultado.Resultado = false;
                resultado.Mensaje = exception.Message;
                resultado.InformacionExtra = exception;
            }
            return resultado;
        }
        [Transaction(TransactionPropagation.Required)]
        public ResultadoOperacionDto GuardarRolFacultadBulk(List<RolFacultad> rolFacultad, long idUsuarioExec)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                var param = new List<object>() { RolRepository.ObtenerRolPorId(rolFacultad.First().IdRol).Nombre };
                resultado = RolFacultadRepository.GuardarRolFacultadBulk(rolFacultad);
                resultado.InformacionAuditoria = new InformacionAuditoriaDto(idUsuarioExec, ConstantsAccionAuditable.Borrar, ConstantsModulo.Rol, MensajesServicios.AsignarFacultadesARoles, param);
            }
            catch (Exception exception)
            {
                resultado.Resultado = false;
                resultado.Mensaje = exception.Message;
                resultado.InformacionExtra = exception;
            }
            return resultado;
        }
             
        
        public ResultadoOperacionDto ObtenerRolFacultadPorId(long idRolFacultad)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                RolFacultadRepository.ObtenerRolFacultadPorId(idRolFacultad);
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
        [Transaction(TransactionPropagation.Required)]
        public ResultadoOperacionDto BorrarRolFacultad(long idRolFacultad)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                RolFacultadRepository.BorrarRolFacultad(idRolFacultad);
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

        [Transaction(TransactionPropagation.Required)]
        public ResultadoOperacionDto BorrarFacultadesPorRol(long idRol)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                RolFacultadRepository.BorrarFacultadesPorRol(idRol);
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

        public ResultadoOperacionDto ObtenerRolFacultades()
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                resultado.InformacionExtra = RolFacultadRepository.ObtenerRolFacultades();
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


        public ResultadoOperacionDto ObtenerRolFacultadesPorRolFacultad(long? idRol, long? idFacultad)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                resultado.InformacionExtra = RolFacultadRepository.ObtenerRolFacultadesPorRolFacultad(idRol, idFacultad);
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

        #region Facultad
        [Transaction(TransactionPropagation.Required)]
        public ResultadoOperacionDto GuardarFacultad(Facultad facultad)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                resultado = FacultadRepository.GuardarFacultad(facultad);
            }
            catch (Exception exception)
            {
                resultado.Resultado = false;
                resultado.Mensaje = exception.Message;
                resultado.InformacionExtra = exception;
            }
            return resultado;
        }

        public ResultadoOperacionDto ObtenerFacultadPorId(long idFacultad)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                resultado.InformacionExtra = FacultadRepository.ObtenerFacultadPorId(idFacultad);
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

        public ResultadoOperacionDto BorrarFacultad(long idFacultad)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                FacultadRepository.BorrarFacultad(idFacultad);
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

        public ResultadoOperacionDto ObtenerFacultades()
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                resultado.InformacionExtra = FacultadRepository.ObtenerFacultades();
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

        public ResultadoOperacionDto ObtenerFacultadesporCategoria(long idCategoria)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                resultado.InformacionExtra = FacultadRepository.ObtenerFacultadesporCategoria(idCategoria);
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

        #region CategoriaFacultad

        public ResultadoOperacionDto GuardarCategoriaFacultad(CategoriaFacultad categoriaFacultad)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                resultado = CategoriaFacultadRepository.GuardarCategoriaFacultad(categoriaFacultad);
            }
            catch (Exception exception)
            {
                resultado.Resultado = false;
                resultado.Mensaje = exception.Message;
                resultado.InformacionExtra = exception;
            }
            return resultado;
        }

        public ResultadoOperacionDto ObtenerCategoriaFacultadPorId(long idCategoriaFacultad)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                resultado.InformacionExtra =
                    CategoriaFacultadRepository.ObtenerCategoriaFacultadPorId(idCategoriaFacultad);
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

        public ResultadoOperacionDto BorrarCategoriaFacultad(long idCategoriaFacultad)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                CategoriaFacultadRepository.BorrarCategoriaFacultad(idCategoriaFacultad);
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

        public ResultadoOperacionDto ObtenerCategoriasFacultad()
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                resultado.InformacionExtra = CategoriaFacultadRepository.ObtenerCategoriasFacultad();
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

        #region Grupo Rol
        public ResultadoOperacionDto AsignarRolesGrupo(IList<Rol> roles, long idGrupo) {
            var resultado = new ResultadoOperacionDto();
            GrupoUsuariosRolRepository.BorrarGrupoUsuariosRolPorIdGrupo(idGrupo);

            foreach (Rol rol in roles)
            {
                GrupoUsuariosRol grupoUsuarioRol = new GrupoUsuariosRol();
                grupoUsuarioRol.IdGrupoUsuario=idGrupo;
                grupoUsuarioRol.IdRol=rol.IdRol;
                GrupoUsuariosRolRepository.GuardarGrupoUsuariosRol(grupoUsuarioRol);
            }
            resultado.Resultado = true;
            return resultado;
        }


        public IList<Rol> ObtenerRolesAsignadosPorGrupo(long idGrupo) {
            return RolRepository.ObtenerRolesAsignadosPorGrupo(idGrupo);
        }

        public ResultadoOperacionDto ObtenerRolesAsignadosPorGrupoResultado(long idGrupo)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                resultado.InformacionExtra = RolRepository.ObtenerRolesAsignadosPorGrupo(idGrupo);
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





        public IList<Rol> ObtenerRolesNoAsignadosPorGrupo(long idGrupo) {
            return RolRepository.ObtenerRolesNoAsignadosPorGrupo(idGrupo);
        }


        #endregion
    }
}