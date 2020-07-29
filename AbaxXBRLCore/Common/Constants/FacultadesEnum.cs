
using System;

namespace AbaxXBRLCore.Common.Constants
{
    /// <summary>
    /// Enum de las Facultades de la Aplicacion
    /// </summary>
    [Flags]
    public enum FacultadesEnum
    {
        [CategoriaType(CategoriasFacultad.FacultadesUsuarios)]
        InsertarUsuario = 1,
        [CategoriaType(CategoriasFacultad.FacultadesUsuarios)]
        EditarUsuario = 2,
        [CategoriaType(CategoriasFacultad.FacultadesUsuarios)]
        EliminarUsuario = 3,
        [CategoriaType(CategoriasFacultad.FacultadesUsuarios)]
        AsignarEmisorasUsuarios = 4,
        [CategoriaType(CategoriasFacultad.FacultadesUsuarios)]
        ActivarDesactivarUsuarios = 5,
        [CategoriaType(CategoriasFacultad.FacultadesUsuarios)]
        BloquearDesbloquearUsuarios = 6,
        [CategoriaType(CategoriasFacultad.FacultadesUsuarios)]
        GeneraraNuevaContraseña = 7,
        [CategoriaType(CategoriasFacultad.FacultadesRoles)]
        InsertarRoles = 8,
        [CategoriaType(CategoriasFacultad.FacultadesRoles)]
        EditarRoles = 9,
        [CategoriaType(CategoriasFacultad.FacultadesRoles)]
        EliminarRoles = 10,
        [CategoriaType(CategoriasFacultad.FacultadesRoles)]
        AsignarFacultadesRoles = 11,
        [CategoriaType(CategoriasFacultad.FacultadesEmpresas)]
        InsertarEmpresas = 12,
        [CategoriaType(CategoriasFacultad.FacultadesEmpresas)]
        EditarEmpresas = 13,
        [CategoriaType(CategoriasFacultad.FacultadesEmpresas)]
        EliminarEmpresas = 14,
        [CategoriaType(CategoriasFacultad.FacultadesGrupos)]
        InsertarGrupos = 15,
        [CategoriaType(CategoriasFacultad.FacultadesGrupos)]
        EditarGrupos = 16,
        [CategoriaType(CategoriasFacultad.FacultadesGrupos)]
        EliminarGrupos = 17,
        [CategoriaType(CategoriasFacultad.FacultadesGrupos)]
        AsignarRolesGrupos = 18,
        [CategoriaType(CategoriasFacultad.FacultadesGrupos)]
        AsignarUsuariosGrupos = 19,
        [CategoriaType(CategoriasFacultad.FacultadesGrupos)]
        ConsultaGrupos = 20,
        [CategoriaType(CategoriasFacultad.FacultadesRoles)]
        ConsultaRoles = 21,
        [CategoriaType(CategoriasFacultad.FacultadesEmpresas)]
        ConsultaEmpresas = 22,
        [CategoriaType(CategoriasFacultad.FacultadesUsuarios)]
        ConsultaUsuarios = 23,
        [CategoriaType(CategoriasFacultad.FacultadesUsuarios)]
        ExportarDatosUsuario = 24,
        [CategoriaType(CategoriasFacultad.FacultadesRoles)]
        ExportarDatosRoles = 25,
        [CategoriaType(CategoriasFacultad.FacultadesEmpresas)]
        ExportarDatosEmpresa = 26,
        [CategoriaType(CategoriasFacultad.FacultadesGrupos)]
        ExportarDatosGrupos = 27,
        [CategoriaType(CategoriasFacultad.FacultadesBitacora)]
        ConsultarDatosBitacora = 28,
        [CategoriaType(CategoriasFacultad.FacultadesBitacora)]
        ExportarDatosBitacora = 29, 
        [CategoriaType(CategoriasFacultad.FacultadesUsuarios)]
        AsignarRolesUsuario = 30,
        [CategoriaType(CategoriasFacultad.FacultadesUsuarios)]
        EditorDocumentos = 32,
        [CategoriaType(CategoriasFacultad.FacultadesMismaEmpresa)]
        InsertarUsuarioMismaEmpresa = 33,
        [CategoriaType(CategoriasFacultad.FacultadesMismaEmpresa)]
        EditarUsuarioMismaEmpresa = 34,
        [CategoriaType(CategoriasFacultad.FacultadesMismaEmpresa)]
        EliminarUsuarioMismaEmpresa = 35,
        [CategoriaType(CategoriasFacultad.FacultadesMismaEmpresa)]
        AsignarRolesUsuarioMismaEmpresa = 36,
        [CategoriaType(CategoriasFacultad.FacultadesMismaEmpresa)]
        ConsultaUsuariosMismaEmpresa = 37,
        [CategoriaType(CategoriasFacultad.FacultadesMismaEmpresa)]
        ExportarDatosUsuarioMismaEmpresa = 38,
        [CategoriaType(CategoriasFacultad.FacultadesMismaEmpresa)]
        ActivarDesactivarUsuariosMismaEmpresa = 39,
        [CategoriaType(CategoriasFacultad.FacultadesMismaEmpresa)]
     	BloquearDesbloquearUsuariosMismaEmpresa = 40,
        [CategoriaType(CategoriasFacultad.FacultadesMismaEmpresa)]
        GeneraraNuevaContraseñaMismaEmpresa = 41,
        [CategoriaType(CategoriasFacultad.FacultadesBitacora)]
        DepurarDatosBitacora = 42,
    }
}
