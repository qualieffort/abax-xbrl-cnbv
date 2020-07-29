#region

using System;
using System.Collections.Generic;
using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.Viewer.Application.Dto.Angular;
using System.Data.SqlClient;
using AbaxXBRLCore.Entities;
using AbaxXBRLCore.DbContext;
using System.Data.Entity.Core.Objects;
using System.Linq;
using Spring.Data.Generic;
using System.Data;
using System.Activities.Expressions;

#endregion

namespace AbaxXBRLCore.Repository.Implementation
{
    /// <summary>
    ///     Implementación del repositorio base para operaciones con la entidad RegistroAuditoria.
    ///     <author>Eric Alan González Fuentes</author>
    ///     <version>1.0</version>
    /// </summary>
    public class ConsultaEnviosTaxonomiaRepository : IConsultaEnviosTaxonomiaRepository
    {
        /// <summary>
        /// 
        /// </summary>
        public AbaxDbEntities DbContext
        {
            get
            {
                return ContextManager.GetDBContext();
            }
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="peticionDataTable"></param>
        /// <returns></returns>
        public PeticionInformationDataTableDto<EnviosTaxonomiaDto> ObtenerInformacionConsultaEnviosTaxonomia(PeticionInformationDataTableDto<EnviosTaxonomiaDto> peticionDataTable)
        {

            var parametersListQuery = new List<SqlParameter>();

            var whereString = "";

            if (peticionDataTable.filtros.Count > 0)
            {
                foreach (var filtro in peticionDataTable.filtros)
                {
                    if(filtro.Key.Equals("GE.IdGrupoEmpresa") || filtro.Key.Equals("TE.IdTipoEmpresa"))
                    {
                        whereString = whereString + "and " + filtro.Key + " = @" + filtro.Key.Substring(filtro.Key.IndexOf(".")+1) + " ";
                    }else if(filtro.Key.Equals("FechaCreacionInicial"))
                    {
                        whereString = whereString + "and " + filtro.Key + " > @" + filtro.Key.Substring(filtro.Key.IndexOf(".") + 1) + " ";

                    }else if(filtro.Key.Equals("FechaCreacionFinal"))
                    {
                        whereString = whereString + "and " + filtro.Key + " < @" + filtro.Key.Substring(filtro.Key.IndexOf(".") + 1) + " ";
                    }
                    else
                    {
                        whereString = whereString + "and " + filtro.Key + " = @" + filtro.Key + " ";
                    }
                }
            }

            var sentenciaOrder = "order by ";

            switch (peticionDataTable.order[0].column)
            {
                case 0:
                    sentenciaOrder += " ClaveCotizacion " + peticionDataTable.order[0].dir;
                    break;
                case 1:
                    sentenciaOrder += " RazonSocial " + peticionDataTable.order[0].dir;
                    break;
                case 2:
                    sentenciaOrder += " NumFideicomiso " + peticionDataTable.order[0].dir;
                    break;
                case 3:
                    sentenciaOrder += " FechaReporte " + peticionDataTable.order[0].dir;
                    break;
                case 4:
                    sentenciaOrder += " Taxonomia " + peticionDataTable.order[0].dir;
                    break;
                case 5:
                    sentenciaOrder += " FechaEnvio " + peticionDataTable.order[0].dir;
                    break;
            }

            var query = @"SELECT DISTINCT * FROM (
	                SELECT 
			                ISNULL(Doc.[ClaveEmisora],ISNULL(Emp.[AliasClaveCotizacion],Emp.[NombreCorto])) AS ClaveCotizacion,
			                Emp.RazonSocial,
			                Doc.[Anio],
			                Doc.[NumFideicomiso],
                            Doc.[FechaReporte],
			                Doc.[FechaCreacion] as FechaCreacionInicial,
                            Doc.[FechaCreacion] as FechaCreacionFinal,
                            CONVERT(varchar, Doc.[FechaReporte], 103) as FechaReporteFormateada,
			                ISNULL(Doc.[Taxonomia],'No Envió') as Taxonomia,
			                Doc.[FechaCreacion] AS FechaEnvio
	                FROM	[dbo].[Empresa] Emp
			                LEFT OUTER JOIN (
				                SELECT	Doc.[FechaCreacion],
						                Doc.[ClaveEmisora], 
						                Doc.[Anio],
						                Doc.[NumFideicomiso],
                                        Doc.[FechaReporte],
						                Doc.[FechaCreacion] as FechaCreacionInicial,
                                        Doc.[FechaCreacion] as FechaCreacionFinal,
                                        CONVERT(varchar, Doc.[FechaReporte], 103) as FechaReporteFormateada,
						                Doc.[IdEmpresa],
						                Tax.[Nombre] as Taxonomia
				                FROM	[dbo].[DocumentoInstancia] Doc JOIN  [dbo].[TaxonomiaXbrl] Tax ON Doc.EspacioNombresPrincipal = Tax.EspacioNombresPrincipal
				                
			                ) Doc  ON Doc.[IdEmpresa] = Emp.[IdEmpresa]
                              inner JOIN  [dbo].EmpresaGrupoEmpresa EGE on Emp.IdEmpresa = EGE.IdEmpresa 
					          inner JOIN [dbo].GrupoEmpresa GE on EGE.IdGrupoEmpresa = GE.IdGrupoEmpresa 
                              inner JOIN  [dbo].EmpresaTipoEmpresa ETE on Emp.IdEmpresa = ETE.IdEmpresa 
					          inner JOIN [dbo].TipoEmpresa TE on ETE.IdTipoEmpresa = TE.IdTipoEmpresa 
	                WHERE Emp.Borrado = 0 " + whereString +
                ") AUXILIAR " + sentenciaOrder;

            if (peticionDataTable.filtros.Count > 0)
            {
                foreach (var filtro in peticionDataTable.filtros)
                {
                    if (filtro.Key.Equals("GE.IdGrupoEmpresa") || filtro.Key.Equals("TE.IdTipoEmpresa"))
                    {
                        parametersListQuery.Add(new SqlParameter("@" + filtro.Key.Substring(filtro.Key.IndexOf(".")+1), SqlDbType.Int));
                        parametersListQuery.ElementAt(parametersListQuery.Count - 1).Value = filtro.Value;
                    }
                    else
                    {
                        parametersListQuery.Add(new SqlParameter("@" + filtro.Key, filtro.Value));
                    }                    
                }
            }

            if (parametersListQuery.Count > 0)
            {
                var sqlStatement = DbContext.Database.SqlQuery<EnviosTaxonomiaDto>(query, parametersListQuery.ToArray()).ToList();
                peticionDataTable.recordsTotal = sqlStatement.Count();
                peticionDataTable.data = sqlStatement.Skip(peticionDataTable.start).Take(peticionDataTable.length).ToList();
            }
            else
            {
                var sqlStatement = DbContext.Database.SqlQuery<EnviosTaxonomiaDto>(query).ToList();
                peticionDataTable.recordsTotal = sqlStatement.Count();
                peticionDataTable.data = sqlStatement.Skip(peticionDataTable.start).Take(peticionDataTable.length).ToList();
            }




            return peticionDataTable;
        }

        /// <summary>
        ///  Obtiene la informacón de las Consultas de Envios de Taxonomias i para el Reporte de Excel.
        /// </summary>
        /// <param name="parametros"></param>
        /// <returns></returns>
        public List<EnviosTaxonomiaDto> ObtenerInformacionReporteConsultaEnviosTaxonomias(Dictionary<string, object> parametros)
        {
            Dictionary<String, String> filtrosDataTable = new Dictionary<String, String>();
            foreach (var filtro in parametros)
            {
                filtrosDataTable.Add(filtro.Key, Convert.ToString(filtro.Value));
            }
            var parametersListQuery = new List<SqlParameter>();

            var whereString = "";

            if (filtrosDataTable.Count > 0)
            {
                foreach (var filtro in filtrosDataTable)
                {
                    if (filtro.Key.Equals("GE.IdGrupoEmpresa") || filtro.Key.Equals("TE.IdTipoEmpresa"))
                    {
                        whereString = whereString + "and " + filtro.Key + " = @" + filtro.Key.Substring(filtro.Key.IndexOf(".") + 1) + " ";
                    }
                    else if (filtro.Key.Equals("FechaCreacionInicial"))
                    {
                        whereString = whereString + "and " + filtro.Key + " > @" + filtro.Key.Substring(filtro.Key.IndexOf(".") + 1) + " ";

                    }
                    else if (filtro.Key.Equals("FechaCreacionFinal"))
                    {
                        whereString = whereString + "and " + filtro.Key + " < @" + filtro.Key.Substring(filtro.Key.IndexOf(".") + 1) + " ";
                    }
                    else 
                    {
                        whereString = whereString + "and " + filtro.Key + " = @" + filtro.Key + " ";
                    }
                }
            }

            var query = @"SELECT DISTINCT * FROM (
	                SELECT 
			                ISNULL(Doc.[ClaveEmisora],ISNULL(Emp.[AliasClaveCotizacion],Emp.[NombreCorto])) AS ClaveCotizacion,
			                Emp.RazonSocial,
			                Doc.[Anio],
			                Doc.[NumFideicomiso],
			                Doc.[FechaReporte],
                            CONVERT(varchar, Doc.[FechaReporte], 103) as FechaReporteFormateada,
                            Doc.[FechaCreacion] as FechaCreacionInicial,
                            Doc.[FechaCreacion] as FechaCreacionFinal,
			                ISNULL(Doc.[Taxonomia],'No Envió') as Taxonomia,
			                Doc.[FechaCreacion] AS FechaEnvio
	                FROM	[dbo].[Empresa] Emp
			                LEFT OUTER JOIN (
				                SELECT	Doc.[FechaCreacion],
						                Doc.[ClaveEmisora], 
						                Doc.[Anio],
						                Doc.[NumFideicomiso],
						                Doc.[FechaReporte],
                                        CONVERT(varchar, Doc.[FechaReporte], 103) as FechaReporteFormateada,
                                        Doc.[FechaCreacion] as FechaCreacionInicial,
                                        Doc.[FechaCreacion] as FechaCreacionFinal,
						                Doc.[IdEmpresa],
						                Tax.[Nombre] as Taxonomia
				                FROM	[dbo].[DocumentoInstancia] Doc JOIN  [dbo].[TaxonomiaXbrl] Tax ON Doc.EspacioNombresPrincipal = Tax.EspacioNombresPrincipal
				                
			                ) Doc  ON Doc.[IdEmpresa] = Emp.[IdEmpresa]
                              inner JOIN  [dbo].EmpresaGrupoEmpresa EGE on Emp.IdEmpresa = EGE.IdEmpresa 
					          inner JOIN [dbo].GrupoEmpresa GE on EGE.IdGrupoEmpresa = GE.IdGrupoEmpresa
                              inner JOIN  [dbo].EmpresaTipoEmpresa ETE on Emp.IdEmpresa = ETE.IdEmpresa 
					          inner JOIN [dbo].TipoEmpresa TE on ETE.IdTipoEmpresa = TE.IdTipoEmpresa 
	                WHERE Emp.Borrado = 0 " + whereString +
               ") AUXILIAR ";

            if (filtrosDataTable.Count > 0)
            {
                foreach (var filtro in filtrosDataTable)
                {
                    if (filtro.Key.Equals("GE.IdGrupoEmpresa") || filtro.Key.Equals("TE.IdTipoEmpresa"))
                    {
                        parametersListQuery.Add(new SqlParameter("@" + filtro.Key.Substring(filtro.Key.IndexOf(".") + 1), SqlDbType.Int));
                        parametersListQuery.ElementAt(parametersListQuery.Count - 1).Value = filtro.Value;
                    }
                    else
                    {
                        parametersListQuery.Add(new SqlParameter("@" + filtro.Key, filtro.Value));
                    }
                }
            }

       

                var sqlStatement = DbContext.Database.SqlQuery<EnviosTaxonomiaDto>(query, parametersListQuery.ToArray()).ToList();
        

        
            return sqlStatement;
        }
        /// <summary>
        /// Obtiene el listado de Trimestres disponibles
        /// </summary>
        /// <returns></returns>
        public List<string> OntenerNumeroFideicomisos()
        {
            return DbContext.Database.SqlQuery<string>("SELECT DISTINCT NumFideicomiso FROM DocumentoInstancia where NumFideicomiso is not null").ToList();
        }
    }
}