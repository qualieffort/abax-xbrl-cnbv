SELECT DISTINCT * FROM (
	SELECT 
			ISNULL(Doc.[ClaveEmisora],ISNULL(Emp.[AliasClaveCotizacion],Emp.[NombreCorto])) AS ClaveCotizacion,
			Emp.RazonSocial,
			Doc.[Anio],
			Doc.[NumFideicomiso],
			Doc.[FechaReporte],
			Doc.[IdEmpresa],
			ISNULL(Doc.[Taxonomia],'No Envió') as Taxonomia,
			Doc.[FechaCreacion] AS FechaEnvio
	FROM	[dbo].[Empresa] Emp
			LEFT OUTER JOIN (
				SELECT	Doc.[FechaCreacion],
						Doc.[ClaveEmisora], 
						Doc.[Anio],
						Doc.[NumFideicomiso],
						Doc.[FechaReporte],
						Doc.[IdEmpresa],
						Tax.[Nombre] as Taxonomia
				FROM	[dbo].[DocumentoInstancia] Doc JOIN  [dbo].[TaxonomiaXbrl] Tax ON Doc.EspacioNombresPrincipal = Tax.EspacioNombresPrincipal
				WHERE	Tax.Nombre IN (	'Reporte Anual - Anexo N', 
										'Reporte Anual - Anexo NBIS', 
										'Reporte Anual - Anexo NBIS1', 
										'Reporte Anual - Anexo NBIS2', 
										'Reporte Anual - Anexo NBIS3', 
										'Reporte Anual - Anexo NBIS4', 
										'Reporte Anual - Anexo NBIS5', 
										'Reporte Anual - Anexo O')
			) Doc  ON Doc.[IdEmpresa] = Emp.[IdEmpresa]
	WHERE Emp.Borrado = 0
) AUXILIAR
ORDER BY FechaEnvio DESC, ClaveCotizacion ASC
