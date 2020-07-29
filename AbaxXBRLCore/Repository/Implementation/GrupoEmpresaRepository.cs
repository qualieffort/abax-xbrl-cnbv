using AbaxXBRLCore.Entities;
using AbaxXBRLCore.Viewer.Application.Dto.Angular;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRLCore.Repository.Implementation
{
    /// <summary>
    /// Implementación del repositorio para el menjo de la peristencia sobre las entidades GrupoEmpresa.
    /// </summary>
    public class GrupoEmpresaRepository : BaseRepository<GrupoEmpresa>, IGrupoEmpresaRepository
    {
        /// <summary>
        /// Consulta que retorna tods los grupos con un outer join a los datos de empresa.
        /// </summary>
        private const string CONSULTA_REPORTE =
            "SELECT GP.IdGrupoEmpresa, GP.Nombre,GP.Descripcion,ISNULL(EM.IdEmpresa,0) AS 'IdEmpresa', ISNULL(EM.NombreCorto,'--') AS 'Empresa', ISNULL(EM.RazonSocial,'--') AS 'RazonSocial' " +
            "FROM  GrupoEmpresa GP " +
                 "LEFT JOIN EmpresaGrupoEmpresa GEM ON GEM.IdGrupoEmpresa = GP.IdGrupoEmpresa " +
                 "LEFT OUTER JOIN Empresa EM ON  GEM.IdEmpresa = EM.IdEmpresa " +
            "ORDER BY GP.Nombre ASC, EM.NombreCorto ASC";
        /// <summary>
        /// Consulta que retorna los items con los ids y nombres cortos de todas las empresas.
        /// </summary>
        private const string CONSULTA_EMPRESAS_ASIGNABLES =
            "SELECT CAST(IdEmpresa as varchar(max)) AS 'Valor', NombreCorto AS 'Etiqueta',Fideicomitente AS 'Fideicomitente' FROM Empresa";
        /// <summary>
        /// Consulta que retorna los items con los ids y nombres cortos de todas las empresas.
        /// </summary>
        private const string CONSULTA_GRUPOS_ASIGNABLES =
            "SELECT CAST(IdGrupoEmpresa as varchar(max)) AS 'Valor', Nombre AS 'Etiqueta' FROM GrupoEmpresa";
        /// <summary>
        /// Consulta que retorna los items con los ids y nombres cortos de las empresas asignadas a un grupo en particular.
        /// </summary>
        private const string CONSULTA_EMPRESAS_ASIGNADAS_A_GRUPO =
            "SELECT CAST(EM.IdEmpresa as varchar(max)) AS 'Valor', EM.NombreCorto AS 'Etiqueta' FROM Empresa EM,EmpresaGrupoEmpresa EGE WHERE EGE.IdEmpresa = EM.IdEmpresa AND EGE.IdGrupoEmpresa = @idGrupoEmpresa";

        /// <summary>
        /// Consulta que retorna los items con los ids y nombres cortos de las empresas asignadas a un grupo en particular.
        /// </summary>
        private const string CONSULTA_EMPRESAS_ASIGNADAS_A_GRUPOS =
            "SELECT CAST(EM.IdEmpresa as varchar(max)) AS 'Valor', EM.NombreCorto AS 'Etiqueta' FROM Empresa EM,EmpresaGrupoEmpresa EGE WHERE EGE.IdEmpresa = EM.IdEmpresa AND EGE.IdGrupoEmpresa IN ({0})";
        
        /// <summary>
        /// Consulta que retorna los items con los ids y nombres cortos todos los grupos asignados a una empresa en particular.
        /// </summary>
        private const string CONSULTA_GRUPO_ASIGNADOS_A_EMPRESA =
            "SELECT CAST(GP.IdGrupoEmpresa as varchar(max)) AS 'Valor', GP.Nombre AS 'Etiqueta' FROM GrupoEmpresa GP ,EmpresaGrupoEmpresa EGE WHERE EGE.IdGrupoEmpresa = GP.IdGrupoEmpresa AND EGE.IdEmpresa = @idEmpresa";

        /// <summary>
        /// Sentencia para eliminar todas las relaciones de una empresa determinada a los grupos de empresas
        /// </summary>
        private const string SENTENCIA_ELIMINA_RELACIONES_EMPRESA =
            "DELETE EmpresaGrupoEmpresa WHERE IdEmpresa = @idEmpresa";

        /// <summary>
        /// Sentencia para eliminar todas las relaciones de un grupo de empreas determinado a todas las empresas.
        /// </summary>
        private const string SENTENCIA_ELIMINA_RELACIONES_GRUPO_EMPRESA =
            "DELETE EmpresaGrupoEmpresa WHERE IdGrupoEmpresa = @idGrupoEmpresa";

        /// <summary>
        /// Sentencia para insertar una relacion entre una empresa y un grupo empresa determinado.
        /// </summary>
        private const string SENTENCIA_AGREGA_RELACION_EMPRESA_GRUPO =
            "INSERT EmpresaGrupoEmpresa (IdEmpresa,IdGrupoEmpresa) (SELECT @idEmpresa, @idGrupoEmpresa WHERE NOT EXISTS (SELECT IdEmpresa FROM EmpresaGrupoEmpresa WHERE IdEmpresa = @idEmpresa AND IdGrupoEmpresa = @idGrupoEmpresa))";


        /// <summary>
        /// Retorna un listado de dtos con la información necesaria para generar el reporte de Excel.
        /// </summary>
        /// <returns>Listado de Dtos.</returns>
        public IList<GrupoEmpresaExcelDto> ObtenRegistrosReporte()
        {
            var query = DbContext.Database.SqlQuery<GrupoEmpresaExcelDto>(CONSULTA_REPORTE, new SqlParameter[0]);
            return query.ToList();
        }
        /// <summary>
        /// Retorna un listado con todos los elementos asignables tipo empresa.
        /// </summary>
        /// <returns>Lista de elementos asignables.</returns>
        public IList<SelectItemDto> ObtenEmpresasAsignables()
        {
            var query = DbContext.Database.SqlQuery<SelectItemDto>(CONSULTA_EMPRESAS_ASIGNABLES, new SqlParameter[0]);
            return query.ToList();
        }

        /// <summary>
        /// Retorna un listado con todos los elementos asignables tipo grupoEmpresa.
        /// </summary>
        /// <returns>Lista de elementos asignables.</returns>
        public IList<SelectItemDto> ObtenGruposAsignables()
        {
            var query = DbContext.Database.SqlQuery<SelectItemDto>(CONSULTA_GRUPOS_ASIGNABLES, new SqlParameter[0]);
            return query.ToList();
        }

        /// <summary>
        /// Retorna un listado con todos los elementos asignados de tipo empresa a un grupo empresa en particular.
        /// </summary>
        /// <param name="idGrupoEmpresa">Identificador del grupo de empresas al que están asignados los elementos.</param>
        /// <returns>Lista de elementos asignables.</returns>
        public IList<SelectItemDto> ObtenEmpresasAsignadas(long idGrupoEmpresa)
        {
            var parameters = new SqlParameter[]
            {
                new SqlParameter("idGrupoEmpresa", idGrupoEmpresa)
            };
            var query = DbContext.Database.SqlQuery<SelectItemDto>(CONSULTA_EMPRESAS_ASIGNADAS_A_GRUPO, parameters);
            return query.ToList();
        }


        /// <summary>
        /// Retorna un listado con todos los elementos asignados de tipo empresa a un grupo empresa en particular.
        /// </summary>
        /// <param name="idGrupoEmpresa">Identificador del grupo de empresas al que están asignados los elementos.</param>
        /// <returns>Lista de elementos asignables.</returns>
        public IList<SelectItemDto> ObtenEmpresasAsignadas(long[] idGruposEmpresa)
        {
            var parameters = new SqlParameter[idGruposEmpresa.Length];

            string[] paramNames = idGruposEmpresa.Select((s, i) => "@tag" + i.ToString()).ToArray();


            string inClause = string.Join(",", paramNames);
            var statement = CONSULTA_EMPRESAS_ASIGNADAS_A_GRUPOS.Replace("{0}",inClause);

            for (var indice = 0; indice < idGruposEmpresa.Length;indice++ )
            {
                var idGrupoEmpresa = idGruposEmpresa[indice];

                parameters[indice] = new SqlParameter("tag" + indice, idGrupoEmpresa);
            }

            var query = DbContext.Database.SqlQuery<SelectItemDto>(statement, parameters);
            return query.ToList();
            
        }

        /// <summary>
        /// Retorna un listado con todos los elementos asignados de tipo GrupoEmpresa a una Empresa en particular.
        /// </summary>
        /// <param name="idEmpresa">Identificador de la Empresa a la que están asignados los elementos.</param>
        /// <returns>Lista de elementos asignables.</returns>
        public IList<SelectItemDto> ObtenGruposEmpresasAsignados(long idEmpresa)
        {
            var parameters = new SqlParameter[]
            {
                new SqlParameter("idEmpresa", idEmpresa)
            };
            var query = DbContext.Database.SqlQuery<SelectItemDto>(CONSULTA_GRUPO_ASIGNADOS_A_EMPRESA, parameters);
            return query.ToList();
        }
        /// <summary>
        /// Elimina todos los registros existentes en la relacion EmpresaGrupoEmpresa con el IdEmpresa indicado.
        /// </summary>
        /// <param name="idEmpresa">Identificador de la empresa de las relaciones a eliminar.</param>
        public void LimpiaRelacionesEmpresa(long idEmpresa)
        {
            var parameters = new SqlParameter[]
            {
                new SqlParameter("idEmpresa", idEmpresa)
            };
            DbContext.Database.ExecuteSqlCommand(SENTENCIA_ELIMINA_RELACIONES_EMPRESA, parameters);
        }

        /// <summary>
        /// Elimina todos los registros existentes en la relacion EmpresaGrupoEmpresa con el IdGrupoEmpresa indicado.
        /// </summary>
        /// <param name="idGrupoEmpresa">Identificador del grupo de empresas de las relaciones a eliminar.</param>
        public void LimpiaRelacionesGrupoEmpresa(long idGrupoEmpresa)
        {
            var parameters = new SqlParameter[]
            {
                new SqlParameter("idGrupoEmpresa", idGrupoEmpresa)
            };
            DbContext.Database.ExecuteSqlCommand(SENTENCIA_ELIMINA_RELACIONES_GRUPO_EMPRESA, parameters);
        }

        /// <summary>
        /// Inserta una relacion entre empresa y grupo empresa si no existe.
        /// </summary>
        /// <param name="idEmpresa">Identificador de la emrpesa a relacionar.</param>
        /// <param name="idGrupoEmpresa">Identificaodr de grupo empresa a relacionar.</param>
        public void AgregaRelacionEmpresaGrupoEmpresa(long idEmpresa,long idGrupoEmpresa)
        {
            var parameters = new SqlParameter[]
            {
                new SqlParameter("idEmpresa", idEmpresa),
                new SqlParameter("idGrupoEmpresa", idGrupoEmpresa)
            };
            DbContext.Database.ExecuteSqlCommand(SENTENCIA_AGREGA_RELACION_EMPRESA_GRUPO, parameters);
        }


    }
}
