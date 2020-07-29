using System.Data.Entity;
using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using AbaxXBRLCore.Viewer.Application.Dto.Angular;
using AbaxXBRLCore.Common.Util;
using System.Data.SqlClient;

namespace AbaxXBRLCore.Repository.Implementation
{
    /// <summary>
    /// Implementación del objeto Repository para el acceso a datos de documentos de instancia XBRL
    /// </summary>
    public class DocumentoInstanciaRepository : BaseRepository<DocumentoInstancia>, IDocumentoInstanciaRepository
    {
        private const string CONSULTA_INDICADOR = @"
            SELECT TAX.Nombre AS 'Etiqueta', COUNT(A.NombreCorto) AS 'Cantidad',
	            (SELECT COUNT(EM.IdEmpresa) 
	             FROM Empresa EM, EmpresaTipoEmpresa ETE, TipoEmpresa TE, TipoEmpresaTaxonomiaXbrl TT  
	             WHERE EM.Borrado = 0
	               AND ETE.IdEmpresa = EM.IdEmpresa
	               AND ETE.IdTipoEmpresa = TE.IdTipoEmpresa
	               AND TT.IdTipoEmpresa = TE.IdTipoEmpresa
	               AND TT.IdTaxonomiaXbrl = TAX.IdTaxonomiaXbrl
	             ) Total
            FROM TaxonomiaXbrl TAX LEFT OUTER JOIN (
	            SELECT DISTINCT T.IdTaxonomiaXbrl, T.Nombre, E.NombreCorto
	            FROM DocumentoInstancia D, TaxonomiaXbrl T, Empresa E
	            WHERE D.EspacioNombresPrincipal = T.EspacioNombresPrincipal
		            and D.IdEmpresa = E.IdEmpresa
		            and E.Borrado = 0
		            and D.Anio = @anio
		            and D.Trimestre = @trimestre
            ) A ON TAX.IdTaxonomiaXbrl = A.IdTaxonomiaXbrl
            GROUP BY TAX.Nombre, TAX.IdTaxonomiaXbrl";


        /// <summary>
        /// Token para replazar la coulta.
        /// </summary>
        const string TOKEN_CONSULTA = "{CONSULTA}";
        /// <summary>
        /// Token para indicar el area de los campos consultas.
        /// </summary>
        const string TOKEN_CAMPOS_CONSULTA = "{{TOKEN_CAMPOS}}";
        /// <summary>
        /// Template para el pagindado de una consulta.
        /// </summary>
        const string CONSULTA_PAGINACION = "SELECT * FROM ({CONSULTA}) TAUX WHERE TAUX.RowNumber >= @primerElemento AND TAUX.RowNumber < @ultimoElemento";
        /// <summary>
        /// Template para la obtención de la cantidad de registros.
        /// </summary>
        const string CONSULTA_COUNT = "SELECT COUNT(*) FROM ({CONSULTA}) TAUX";

        public IList<UsuarioDocumentoInstancia> ObtenerUsuariosDeDocumentoInstancia(long idDocumentoInstancia, long idEmpresa)
        {
            var query = from udi in DbContext.UsuarioDocumentoInstancia
                        join ue in DbContext.UsuarioEmpresa on udi.Usuario.IdUsuario equals ue.IdUsuario
                        where ue.Empresa.IdEmpresa == idEmpresa && udi.IdDocumentoInstancia == idDocumentoInstancia
                        select udi;

            return query.ToList();
        }

        public IQueryable<DocumentoInstancia> ObtenerDocumentosDeUsuario(string claveEmisora, DateTime fechaCreacion, bool esDueno, long idUsuario)
        {
            DateTime fechaInicio = new DateTime(fechaCreacion.Year, fechaCreacion.Month, fechaCreacion.Day, 0, 0, 0);
            DateTime fechaFin = new DateTime(fechaCreacion.Year, fechaCreacion.Month, fechaCreacion.Day, 23, 59, 59);

            var res = GetQueryable();

            if(!string.IsNullOrEmpty(claveEmisora))
            {
                res = res.Where(x => x.Empresa.NombreCorto == claveEmisora);
            }

            if (!fechaCreacion.Equals(DateTime.MinValue))
            {
                res = res.Where(di => di.FechaCreacion >= fechaInicio && di.FechaCreacion <= fechaFin);
            }

            res = res.Where(x => x.UsuarioDocumentoInstancia.Any(y => y.IdUsuario == idUsuario && y.EsDueno == esDueno));

            res = res.OrderByDescending(x => x.FechaCreacion);
            
            return res;
        }

        public IQueryable<DocumentoInstancia> ObtenerDocumentosEnviadosSinUsuario(string claveEmisora, DateTime fechaCreacion)
        {
            DateTime fechaInicio = new DateTime(fechaCreacion.Year, fechaCreacion.Month, fechaCreacion.Day, 0, 0, 0);
            DateTime fechaFin = new DateTime(fechaCreacion.Year, fechaCreacion.Month, fechaCreacion.Day, 23, 59, 59);

            var res = GetQueryable();

            if (!string.IsNullOrEmpty(claveEmisora))
            {
                res = res.Where(x => x.Empresa.NombreCorto == claveEmisora);
            }

            if (!fechaCreacion.Equals(DateTime.MinValue))
            {
                res = res.Where(di => di.FechaCreacion >= fechaInicio && di.FechaCreacion <= fechaFin);
            }

            res = res.Where(x => x.UsuarioDocumentoInstancia.Count == 0);

            res = res.OrderByDescending(x => x.FechaCreacion);

            return res;
        }

        public IList<DocumentoInstancia> ObtenerUltimosDocumentosDeUsuario(long idUsuario, int numeroRegistros)
        {
            var query = from di in DbContext.DocumentoInstancia
                        where
                        (from udi in DbContext.UsuarioDocumentoInstancia
                         where udi.IdUsuario == idUsuario
                         select udi.IdDocumentoInstancia).Contains(di.IdDocumentoInstancia)
                        orderby di.FechaCreacion descending
                        select di;

            return query.Take(numeroRegistros).ToList();
        }

        public IDictionary<string, int> ContarDocumentosDeUsuario(long idUsuario)
        {
            var resultado = new Dictionary<string, int>();
            resultado.Add("propios", (from di in DbContext.DocumentoInstancia
                                      where
                                      (from udi in DbContext.UsuarioDocumentoInstancia
                                       where udi.IdUsuario == idUsuario && udi.EsDueno
                                       select udi.IdDocumentoInstancia).Contains(di.IdDocumentoInstancia)
                                      orderby di.FechaCreacion descending
                                      select di).Count());
            resultado.Add("compartidos", (from di in DbContext.DocumentoInstancia
                                      where
                                      (from udi in DbContext.UsuarioDocumentoInstancia
                                       where udi.IdUsuario == idUsuario && !udi.EsDueno
                                       select udi.IdDocumentoInstancia).Contains(di.IdDocumentoInstancia)
                                      orderby di.FechaCreacion descending
                                      select di).Count());
            resultado.Add("correctos", (from di in DbContext.DocumentoInstancia
                                          where di.EsCorrecto && 
                                          (from udi in DbContext.UsuarioDocumentoInstancia
                                           where udi.IdUsuario == idUsuario
                                           select udi.IdDocumentoInstancia).Contains(di.IdDocumentoInstancia)
                                          orderby di.FechaCreacion descending
                                          select di).Count());
            resultado.Add("erroneos", (from di in DbContext.DocumentoInstancia
                                        where !di.EsCorrecto &&
                                        (from udi in DbContext.UsuarioDocumentoInstancia
                                         where udi.IdUsuario == idUsuario
                                         select udi.IdDocumentoInstancia).Contains(di.IdDocumentoInstancia)
                                        orderby di.FechaCreacion descending
                                        select di).Count());
            return resultado;
        }


        public IEnumerable<DocumentoInstancia> ObtenerDocumentosInstanciaPorFiltro(System.Linq.Expressions.Expression<Func<DocumentoInstancia, bool>> filter = null, Func<IQueryable<DocumentoInstancia>, IOrderedQueryable<DocumentoInstancia>> orderBy = null, string includeProperties = "")
        {
            return Get(filter, orderBy, includeProperties);
        }

        public void DeleteDocumentoInstancia(long idDocumento)
        {
            try
            {
                var query = GetQueryable()
                .SingleOrDefault(r => r.IdDocumentoInstancia == idDocumento);
                DeleteCascade(query);

            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
            }

        }

        public void EliminarHechosDeDocumento(long idDocumento)
        {
            ExecuteCommand("delete from REPOSITORIO_HECHOS where IdDocumentoInstancia = " + idDocumento);
        }

        public DocumentoInstancia ObtenerDocumentoInstanciaCompleto(long idDocumentoInstancia)
        {
            return GetQueryable().Where(x => x.IdDocumentoInstancia == idDocumentoInstancia).
                Include(x => x.Contexto).Include(x => x.Unidad).Include(x => x.DtsDocumentoInstancia).Include(
                    x => x.Hecho).Include(x=>x.NotaAlPie).FirstOrDefault();
        }

        /// <summary>
        /// Retorna un listado con los identificadores de las entidades del documento de instancia.
        /// </summary>
        /// <returns>Lista de indentificadores de docummentos de instancia.</returns>
        public List<long> ObtenIdsDocumentosInstancia() {

            var query = GetQueryable().Select(r => r.IdDocumentoInstancia).Distinct();
            return query.ToList();
        }


        public List<DocumentoInstancia> ObtenerDocumentosInstanciaPorConsulta(ConsultaAnalisisDto consultaAnalisis) { 

             List<long> entidadesId = new List<long>();
            string queryDocumentosInstancia = @" select * from DocumentoInstancia where IdDocumentoInstancia in(";
            queryDocumentosInstancia +=" select DISTINCT first_value(\"IdDocumentoInstancia\") OVER (PARTITION BY \"ClaveEmisora\",\"Anio\",\"Trimestre\" ORDER BY \"FechaUltMod\"  DESC)  ";
            queryDocumentosInstancia +=" from DocumentoInstancia doc where ClaveEmisora IN (";


            foreach (var entidad in consultaAnalisis.ConsultaAnalisisEntidad)
            {
                queryDocumentosInstancia = queryDocumentosInstancia + "'"+entidad.NombreEntidad + "',";
            }
            queryDocumentosInstancia = queryDocumentosInstancia.Substring(0, queryDocumentosInstancia.Length - 1);
            queryDocumentosInstancia = queryDocumentosInstancia + ") AND ";

            foreach (var periodo in consultaAnalisis.ConsultaAnalisisPeriodo)
            {
                queryDocumentosInstancia = queryDocumentosInstancia + " ( Anio ="+periodo.Anio;
                queryDocumentosInstancia = queryDocumentosInstancia + " AND Trimestre="+periodo.Trimestre+") OR";
            }

            queryDocumentosInstancia = queryDocumentosInstancia.Substring(0, queryDocumentosInstancia.Length - 2);
            queryDocumentosInstancia = queryDocumentosInstancia + " ) AND ClaveEmisora IN (";

            foreach (var entidad in consultaAnalisis.ConsultaAnalisisEntidad)
            {
                queryDocumentosInstancia = queryDocumentosInstancia + "'" + entidad.NombreEntidad + "',";
            }
            queryDocumentosInstancia = queryDocumentosInstancia.Substring(0, queryDocumentosInstancia.Length - 1);
            queryDocumentosInstancia = queryDocumentosInstancia + " )";

            var queryResult = DbContext.Database.SqlQuery<DocumentoInstancia>(queryDocumentosInstancia).ToList();

            

            return queryResult;

        }

        /// <summary>
        /// Obtiene los datos para graficar la cantidad de empresas que han reportado cada una de las taxonomías registradas para un trimestre determinado.
        /// </summary>
        /// <param name="anio">Año requerido</param>
        /// <param name="trimestre">Trinestre requerido</param>
        /// <returns>Datos para graficar.</returns>
        public IList<EasyPieChartDto> IndicadorEmisorasTrimestreActualPorTaxonimia(int anio, string trimestre)
        {
            var perametros = new SqlParameter[] 
            {
                new SqlParameter("anio", anio),
                new SqlParameter("trimestre", trimestre)
            };
            var query = DbContext.Database.SqlQuery<EasyPieChartDto>(CONSULTA_INDICADOR, perametros);
            return query.ToList();
        }


        public Empresa ObtenerEmpresaDeDocumento(long idDocumentoInstancia)
        {
            return GetQueryable(x => x.IdDocumentoInstancia == idDocumentoInstancia).Select(x => x.Empresa).FirstOrDefault();
        }

        /// <summary>
        /// Retorna un Queryiable para la paginación de documentos.
        /// </summary>
        /// <param name="claveEmisora">Calve de emisora por la cula filtrar los resultados.</param>
        /// <param name="fechaCreacion">Fecha de creación del documento.</param>
        /// <param name="esDueno">Si el usuario es dueño del documenot.</param>
        /// <param name="idUsuario">Identificador del usuario, si no se indica se toman todos los documentos sin usuario.</param>
        /// <param name="filtro"></param>
        /// <returns>Consulta con los filtros indicados.</returns>
        public IQueryable<DocumentoInstancia> ObtenerDocumentosQueryable(string claveEmisora, DateTime fechaCreacion, bool esDueno, long idUsuario, string filtro)
        {
            DateTime fechaInicio = new DateTime(fechaCreacion.Year, fechaCreacion.Month, fechaCreacion.Day, 0, 0, 0);
            DateTime fechaFin = new DateTime(fechaCreacion.Year, fechaCreacion.Month, fechaCreacion.Day, 23, 59, 59);

            var res = GetQueryable();

            if (!string.IsNullOrEmpty(claveEmisora))
            {
                res = res.Where(x => x.Empresa.NombreCorto == claveEmisora);
            }

            if (!fechaCreacion.Equals(DateTime.MinValue))
            {
                res = res.Where(di => di.FechaCreacion >= fechaInicio && di.FechaCreacion <= fechaFin);
            }

            if (!String.IsNullOrWhiteSpace(filtro))
            {
                res = res.Where(fi => fi.Titulo.ToUpper().Contains(filtro.ToUpper()) || fi.ClaveEmisora.ToUpper().Contains(filtro.ToUpper()));
            }

            if (idUsuario > 0)
            {
                res = res.Where(x => x.UsuarioDocumentoInstancia.Any(y => y.IdUsuario == idUsuario && y.EsDueno == esDueno));
            }
            else 
            {
                res = res.Where(x => x.UsuarioDocumentoInstancia.Count == 0);
            }

            res = res.OrderByDescending(x => x.FechaCreacion);

            return res;
        }

        /// <summary>
        /// Realiza una consluta de documentos con la paginación indicada.
        /// </summary>
        /// <param name="paginacion">DTO con la información de la paginación.</param>
        /// <param name="idUsuario">Identificador del usuario que ejecuta.</param>
        /// <param name="esDueno">Si debe retornar los documentos propios o compartidos.</param>
        /// <returns>Paginación evaluada con los datos obtenidos.</returns>
        public PaginacionSimpleDto<AbaxXBRLCore.Viewer.Application.Dto.Angular.DocumentoInstanciaDto> ObtenerDocumentosPaginados(PaginacionSimpleDto<AbaxXBRLCore.Viewer.Application.Dto.Angular.DocumentoInstanciaDto> paginacion, long idUsuario, bool esDueno)
        {
            
            var parametersListCount = new List<SqlParameter>();
            var parametersListQuery = new List<SqlParameter>();
            var query = "SELECT DI.IdDocumentoInstancia,DI.Titulo,DI.FechaCreacion, DI.IdEmpresa, DI.EsCorrecto, DI.Bloqueado, DI.IdUsuarioBloqueo, DI.IdUsuarioUltMod, DI.FechaUltMod, DI.UltimaVersion, " +
                        "EM.NombreCorto AS 'ClaveEmisora', " +
                        "TA.Nombre AS 'Taxonomia', ROW_NUMBER() OVER (ORDER BY DI.FechaUltMod DESC) AS 'RowNumber' " +
                        "FROM DocumentoInstancia DI LEFT OUTER JOIN  TaxonomiaXbrl TA ON DI.EspacioNombresPrincipal = TA.EspacioNombresPrincipal , Empresa EM " +
                        "WHERE DI.IdEmpresa = EM.IdEmpresa ";

            if (paginacion.Filtro.ContainsKey("fechaCreacion") && !String.IsNullOrWhiteSpace(paginacion.Filtro["fechaCreacion"]))
            {
                var fechaCreacion = DateUtil.ParseStandarDate(paginacion.Filtro["fechaCreacion"]);
                DateTime fechaInicio = new DateTime(fechaCreacion.Year, fechaCreacion.Month, fechaCreacion.Day, 0, 0, 0);
                DateTime fechaFin = new DateTime(fechaCreacion.Year, fechaCreacion.Month, fechaCreacion.Day, 23, 59, 59);
                
                parametersListCount.Add(new SqlParameter("fechaInicio", fechaInicio));
                parametersListCount.Add(new SqlParameter("fechaFin", fechaFin));
                
                parametersListQuery.Add(new SqlParameter("fechaInicio", fechaInicio));
                parametersListQuery.Add(new SqlParameter("fechaFin", fechaFin));
                
                query += "AND DI.FechaCreacion >= @fechaInicio ";
                query += "AND DI.FechaCreacion <= @fechaFin ";
            }

            if (paginacion.Filtro.ContainsKey("claveEmisora") && !String.IsNullOrWhiteSpace(paginacion.Filtro["claveEmisora"]))
            {
                var claveEmisora = paginacion.Filtro["claveEmisora"];
                
                parametersListCount.Add(new SqlParameter("claveEmisora", claveEmisora));
                
                parametersListQuery.Add(new SqlParameter("claveEmisora", claveEmisora));
                
                query += "AND EM.NombreCorto = @claveEmisora ";
            }
            if (paginacion.Filtro.ContainsKey("filtro") && !String.IsNullOrWhiteSpace(paginacion.Filtro["filtro"]))
            {
                var filtro = paginacion.Filtro["filtro"];
                var filtroAjustado = filtro.Replace("%", String.Empty).Replace("\r", String.Empty).Replace("\n", String.Empty);
                query += "AND UPPER(CONCAT(EM.NombreCorto, ' ', TA.Nombre, ' ', DI.Titulo)) LIKE UPPER('%" + filtroAjustado + "%') ";
            }
            if (idUsuario > 0)
            {
                parametersListCount.Add(new SqlParameter("idUsuario", idUsuario));
                parametersListCount.Add(new SqlParameter("esDueno", esDueno));
                
                parametersListQuery.Add(new SqlParameter("idUsuario", idUsuario));
                parametersListQuery.Add(new SqlParameter("esDueno", esDueno));
                query += "AND EXISTS (SELECT UD.IdusuarioDocumentoInstancia FROM UsuarioDocumentoInstancia UD WHERE UD.IdDocumentoInstancia = DI.IdDocumentoInstancia AND UD.IdUsuario = @idUsuario AND UD.EsDueno = @esDueno ) ";
            }
            else
            {
                query += "AND NOT EXISTS (SELECT UD.IdusuarioDocumentoInstancia FROM UsuarioDocumentoInstancia UD WHERE UD.IdDocumentoInstancia = DI.IdDocumentoInstancia )";
            }
            var statementCunt = CONSULTA_COUNT.Replace(TOKEN_CONSULTA, query);
            paginacion.TotalRregistros = DbContext.Database.SqlQuery<int>(statementCunt, parametersListCount.ToArray()).First();
            if (paginacion.TotalRregistros == 0)
            {
                paginacion.PaginaActual = 1;
                paginacion.TotalRregistros = 0;
                paginacion.ListaRegistros = new List<AbaxXBRLCore.Viewer.Application.Dto.Angular.DocumentoInstanciaDto>();
                return paginacion;
            }
            var statementPaginacion = CONSULTA_PAGINACION.Replace(TOKEN_CONSULTA, query);
            var primerElemento = ((paginacion.PaginaActual - 1) * paginacion.RegistrosPorPagina) + 1;
            var ultimoElemento = primerElemento + paginacion.RegistrosPorPagina;

            if (paginacion.TotalRregistros < primerElemento)
            {
                paginacion.PaginaActual = 1;
                primerElemento = 1;
                ultimoElemento = paginacion.RegistrosPorPagina;
            }
            parametersListQuery.Add(new SqlParameter("primerElemento", primerElemento));
            parametersListQuery.Add(new SqlParameter("ultimoElemento", ultimoElemento));


            var sqlStatement = DbContext.Database.SqlQuery<AbaxXBRLCore.Viewer.Application.Dto.Angular.DocumentoInstanciaDto>(statementPaginacion, parametersListQuery.ToArray());

            paginacion.ListaRegistros = sqlStatement.ToList();


            return paginacion;
        }

        public IQueryable<DocumentoInstancia> ObtenerVersionesDocumentoInstanciaComparador(long idDocumentoInstancia)
        {

            var documentoOriginal = GetById(idDocumentoInstancia);
            var res = GetQueryable();
            res = res.Where(
                x => x.EspacioNombresPrincipal == documentoOriginal.EspacioNombresPrincipal && 
                x.IdEmpresa == documentoOriginal.IdEmpresa &&
                x.FechaReporte == documentoOriginal.FechaReporte);
            res = res.OrderByDescending(x => x.FechaCreacion);
            return res;
        }

        public string ObtenerNombreTaxonomia(string espacioNombresPrincipal)
        {
            var parametros = new SqlParameter[] { new SqlParameter("espacioNombresPrincipal", espacioNombresPrincipal) };
            var nombre = DbContext.Database.SqlQuery<string>("SELECT Nombre FROM TaxonomiaXbrl WHERE EspacioNombresPrincipal = @espacioNombresPrincipal", parametros).FirstOrDefault();
            return nombre;
        }
        /// <summary>
        /// Obtiene los documentos de instancia que podrían requerir sobreescribirse en mongo.
        /// </summary>
        /// <returns>Lista con los documentos de instancia</returns>
        public IList<DocumentoInstancia> ObtenCandidatosReprocesarMongo()
        {
            var query = 
                "SELECT DOCU.* " +
                "FROM DocumentoInstancia AS DOCU, " +
                "( " +
                    "SELECT DOC.[EspacioNombresPrincipal],DOC.[ClaveEmisora],DOC.[FechaReporte],DOC.[NumFideicomiso], MAX(DOC.[FechaCreacion]) AS FechaCreacion " +
                    "FROM ( " +
                        "SELECT [EspacioNombresPrincipal],[ClaveEmisora],[FechaReporte],COUNT([NumFideicomiso]) AS Cantidad " +
                        "FROM [DocumentoInstancia] " +
                        "WHERE [EspacioNombresPrincipal] IS NOT NULL " +
                          "AND [IdUsuarioUltMod] IS NULL " +
                          "AND [ClaveEmisora] IS NOT NULL " +
                          "AND [FechaReporte] IS NOT NULL " +
                        "GROUP BY [EspacioNombresPrincipal],[ClaveEmisora],[FechaReporte] " +
                        ") AS SUB_AUX, " +
                        "DocumentoInstancia DOC " +
                    "WHERE DOC.[EspacioNombresPrincipal] = SUB_AUX.[EspacioNombresPrincipal] " +
                      "AND DOC.[ClaveEmisora] = SUB_AUX.[ClaveEmisora] " +
                      "AND DOC.[FechaReporte] = SUB_AUX.[FechaReporte] " +
                      "AND DOC.[NumFideicomiso] IS NOT NULL " +
                      "AND SUB_AUX.Cantidad > 1 " +
                    "GROUP BY DOC.[EspacioNombresPrincipal],DOC.[ClaveEmisora],DOC.[FechaReporte],DOC.[NumFideicomiso] " +
                ") AS AUXB " +
                "WHERE DOCU.[EspacioNombresPrincipal] = AUXB.[EspacioNombresPrincipal] " +
                  "AND DOCU.[ClaveEmisora] = AUXB.[ClaveEmisora] " +
                  "AND DOCU.[FechaReporte] = AUXB.[FechaReporte] " +
                  "AND DOCU.[NumFideicomiso] = AUXB.[NumFideicomiso] " +
                  "AND DOCU.[FechaCreacion] = AUXB.[FechaCreacion] ";
            var documentosInstancia = DbContext.Database.SqlQuery<DocumentoInstancia>(query).ToList();
            return documentosInstancia;
        }

        /// <summary>
        /// Obtiene los documentos de instancia que podrían requerir sobreescribirse en mongo.
        /// </summary>
        /// <returns>Lista con los documentos de instancia</returns>
        public IList<DocumentoInstancia> ObtenCandidatosReprocesar()
        {
            var query =
                "SELECT DOCU.* " +
                "FROM DocumentoInstancia AS DOCU, " +
                "( " +
                    "SELECT DOC.[EspacioNombresPrincipal],DOC.[ClaveEmisora],DOC.[FechaReporte],DOC.[NumFideicomiso], MAX(DOC.[FechaCreacion]) AS FechaCreacion " +
                    "FROM ( " +
                        "SELECT [EspacioNombresPrincipal],[ClaveEmisora],[FechaReporte],COUNT([NumFideicomiso]) AS Cantidad " +
                        "FROM [DocumentoInstancia] " +
                        "WHERE [EspacioNombresPrincipal] IS NOT NULL " +
                          "AND [IdUsuarioUltMod] IS NULL " +
                          "AND [ClaveEmisora] IS NOT NULL " +
                          "AND [FechaReporte] IS NOT NULL " +
                        "GROUP BY [EspacioNombresPrincipal],[ClaveEmisora],[FechaReporte] " +
                        ") AS SUB_AUX, " +
                        "DocumentoInstancia DOC " +
                    "WHERE DOC.[EspacioNombresPrincipal] = SUB_AUX.[EspacioNombresPrincipal] " +
                      "AND DOC.[ClaveEmisora] = SUB_AUX.[ClaveEmisora] " +
                      "AND DOC.[FechaReporte] = SUB_AUX.[FechaReporte] " +
                    "GROUP BY DOC.[EspacioNombresPrincipal],DOC.[ClaveEmisora],DOC.[FechaReporte],DOC.[NumFideicomiso] " +
                ") AS AUXB " +
                "WHERE DOCU.[EspacioNombresPrincipal] = AUXB.[EspacioNombresPrincipal] " +
                  "AND DOCU.[ClaveEmisora] = AUXB.[ClaveEmisora] " +
                  "AND DOCU.[FechaReporte] = AUXB.[FechaReporte] " +
                  "AND (DOCU.[NumFideicomiso] = AUXB.[NumFideicomiso]  OR (DOCU.[NumFideicomiso] IS NULL AND AUXB.[NumFideicomiso] IS NULL) ) " +
                  "AND DOCU.[FechaCreacion] = AUXB.[FechaCreacion] ";
            var documentosInstancia = DbContext.Database.SqlQuery<DocumentoInstancia>(query).ToList();
            return documentosInstancia;
        }

        /// <summary>
        /// Obtiene los documentos de instancia que podrían requerir sobreescribirse en mongo.
        /// </summary>
        /// <returns>Lista con los documentos de instancia</returns>
        public IList<DocumentoInstancia> ObtenDocumentosInstancia(String query)
        {
            var documentosInstancia = DbContext.Database.SqlQuery<DocumentoInstancia>(query).ToList();
            return documentosInstancia;
        }

        /// <summary>
        /// Retorna un listado con los documentos de instancia XBRL de tipo Anexo T que no cuenten con fideicomiso.
        /// </summary>
        /// <returns>Lista de objetos de tipo DocumentoInstanciaDto.</returns>
        public IList<DocumentoInstancia> ObtenAnexoTSinFidecomiso ()
        {
            var query =
                "SELECT *  " +
                "FROM DocumentoInstancia DOC LEFT OUTER JOIN TaxonomiaXbrl TAX ON LOWER(DOC.EspacioNombresPrincipal) = LOWER(TAX.EspacioNombresPrincipal) " +
                "WHERE LOWER(TAX.[EspacioNombresPrincipal]) = 'http://www.cnbv.gob.mx/2016-08-22/annext_entrypoint' " +
                  "AND DOC.[NumFideicomiso] IS NULL " +
                  "AND EXISTS (SELECT ARC.IdArchivoDocumentoInstancia FROM ArchivoDocumentoInstancia ARC WHERE ARC.IdDocumentoInstancia = DOC.IdDocumentoInstancia )";

            var listaDocumentos = DbContext.Database.SqlQuery<DocumentoInstancia>(query).ToList();
            return listaDocumentos;
        }
        /// <summary>
        /// Actualiza el número de fideicomiso de un documento de instancia en especifico.
        /// </summary>
        /// <param name="idDocumentoInstancia">Identificador del documento de instancia que se pretende actualizar.</param>
        /// <param name="numFideicomiso">Valor del número de fideicomiso que será asignado.</param>
        /// <returns>Cantidad de registros afectados.</returns>
        public int ActualizaNumeroFideicomiso (long idDocumentoInstancia, string numFideicomiso)
        {
            var query = "UPDATE [DocumentoInstancia] SET  [NumFideicomiso] = @numFideicomiso WHERE [IdDocumentoInstancia] = @idDocumentoInstancia";
            var parametros = new SqlParameter[] { new SqlParameter("idDocumentoInstancia ", idDocumentoInstancia), new SqlParameter("numFideicomiso ", numFideicomiso) };
            return DbContext.Database.ExecuteSqlCommand(query, parametros);
        }


    }
}
