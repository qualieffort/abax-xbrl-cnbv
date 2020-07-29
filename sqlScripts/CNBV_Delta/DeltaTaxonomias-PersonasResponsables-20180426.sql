INSERT INTO [dbo].[TaxonomiaXbrl] ([Nombre],[Descripcion],[Anio],[EspacioNombresPrincipal],[IdPeriodicidadReporte]) 
(	SELECT	'Eventos relevantes - representante común','Taxonomía de eventos relevantes para representantes comunes',2017,
			'http://www.cnbv.gob.mx/2017-08-01/relevant_events/rel_news_common_representative_view_entry_point',4
	WHERE NOT EXISTS (
						SELECT [IdTaxonomiaXbrl] 
						FROM [dbo].[TaxonomiaXbrl] 
						WHERE [EspacioNombresPrincipal] = 'http://www.cnbv.gob.mx/2017-08-01/relevant_events/rel_news_common_representative_view_entry_point' ))
GO

INSERT INTO [dbo].[TaxonomiaXbrl] ([Nombre],[Descripcion],[Anio],[EspacioNombresPrincipal],[IdPeriodicidadReporte]) 
(	SELECT	'Eventos relevantes - fondos de inversión','Taxonomía de eventos relevantes para fondos de inversión',2017,
			'http://www.cnbv.gob.mx/2017-08-01/relevant_events/rel_news_investment_funds_view_entry_point',4 
	WHERE NOT EXISTS (
						SELECT [IdTaxonomiaXbrl] 
						FROM [dbo].[TaxonomiaXbrl] 
						WHERE [EspacioNombresPrincipal] = 'http://www.cnbv.gob.mx/2017-08-01/relevant_events/rel_news_investment_funds_view_entry_point' ))
GO

INSERT INTO [dbo].[TaxonomiaXbrl] ([Nombre],[Descripcion],[Anio],[EspacioNombresPrincipal],[IdPeriodicidadReporte]) 
(	SELECT	'Eventos relevantes - emisoras','Taxonomía de eventos relevantes para emisoras',2017,
			'http://www.cnbv.gob.mx/2017-08-01/relevant_events/rel_news_issuer_view_entry_point',4 
	WHERE NOT EXISTS (
						SELECT [IdTaxonomiaXbrl] 
						FROM [dbo].[TaxonomiaXbrl] 
						WHERE [EspacioNombresPrincipal] = 'http://www.cnbv.gob.mx/2017-08-01/relevant_events/rel_news_issuer_view_entry_point' ))
GO

INSERT INTO [dbo].[TaxonomiaXbrl] ([Nombre],[Descripcion],[Anio],[EspacioNombresPrincipal],[IdPeriodicidadReporte]) 
(	SELECT	'Eventos relevantes - agencia calificadora','Taxonomía de eventos relevantes para agencias calificadoras',2017,
			'http://www.cnbv.gob.mx/2017-08-01/relevant_events/rel_news_rating_agency_view_entry_point',4 
	WHERE NOT EXISTS (
						SELECT [IdTaxonomiaXbrl] 
						FROM [dbo].[TaxonomiaXbrl] 
						WHERE [EspacioNombresPrincipal] = 'http://www.cnbv.gob.mx/2017-08-01/relevant_events/rel_news_rating_agency_view_entry_point' ))
GO

INSERT INTO [dbo].[TaxonomiaXbrl] ([Nombre],[Descripcion],[Anio],[EspacioNombresPrincipal],[IdPeriodicidadReporte]) 
(	SELECT	'Eventos relevantes - agencia calificadora','Taxonomía de eventos relevantes para agencias calificadoras',2017,
			'http://www.cnbv.gob.mx/2017-08-01/relevant_events/rel_news_trust_issuer_view_entry_point',4
	WHERE NOT EXISTS (
						SELECT [IdTaxonomiaXbrl] 
						FROM [dbo].[TaxonomiaXbrl] 
						WHERE [EspacioNombresPrincipal] = 'http://www.cnbv.gob.mx/2017-08-01/relevant_events/rel_news_trust_issuer_view_entry_point' ))
GO


INSERT INTO [dbo].[ArchivoTaxonomiaXbrl] ([IdTaxonomiaXbrl] ,[TipoReferencia] ,[Href] ,[Rol] ,[RolUri])
(	SELECT [IdTaxonomiaXbrl], 1,'https://taxonomiasxbrl.cnbv.gob.mx/taxonomy/eventos-relevantes-2017-08-01/rel_news_common_representative_view_entry_point_2017-08-01.xsd', NULL,NULL 
	FROM [dbo].[TaxonomiaXbrl] TAX 
	WHERE TAX.[EspacioNombresPrincipal] = 'http://www.cnbv.gob.mx/2017-08-01/relevant_events/rel_news_common_representative_view_entry_point'  
	AND NOT EXISTS (
					SELECT AR.[IdArchivoTaxonomiaXbrl] 
					FROM [ArchivoTaxonomiaXbrl] AR 
					WHERE AR.[Href] = 'https://taxonomiasxbrl.cnbv.gob.mx/taxonomy/eventos-relevantes-2017-08-01/rel_news_common_representative_view_entry_point_2017-08-01.xsd' 
					AND AR.[IdTaxonomiaXbrl] = TAX.[IdTaxonomiaXbrl]))
GO					
INSERT INTO [dbo].[ArchivoTaxonomiaXbrl] ([IdTaxonomiaXbrl] ,[TipoReferencia] ,[Href] ,[Rol] ,[RolUri])
(	SELECT [IdTaxonomiaXbrl], 1,'https://taxonomiasxbrl.cnbv.gob.mx/taxonomy/eventos-relevantes-2017-08-01/rel_news_investment_funds_view_entry_point_2017-08-01.xsd', NULL,NULL 
	FROM [dbo].[TaxonomiaXbrl] TAX 
	WHERE TAX.[EspacioNombresPrincipal] = 'http://www.cnbv.gob.mx/2017-08-01/relevant_events/rel_news_investment_funds_view_entry_point'  
	AND NOT EXISTS (
					SELECT AR.[IdArchivoTaxonomiaXbrl] 
					FROM [ArchivoTaxonomiaXbrl] AR 
					WHERE AR.[Href] = 'https://taxonomiasxbrl.cnbv.gob.mx/taxonomy/eventos-relevantes-2017-08-01/rel_news_investment_funds_view_entry_point_2017-08-01.xsd' 
					AND AR.[IdTaxonomiaXbrl] = TAX.[IdTaxonomiaXbrl]))
GO					
INSERT INTO [dbo].[ArchivoTaxonomiaXbrl] ([IdTaxonomiaXbrl] ,[TipoReferencia] ,[Href] ,[Rol] ,[RolUri])
(	SELECT [IdTaxonomiaXbrl], 1,'https://taxonomiasxbrl.cnbv.gob.mx/taxonomy/eventos-relevantes-2017-08-01/rel_news_issuer_view_entry_point_2017-08-01.xsd', NULL,NULL 
	FROM [dbo].[TaxonomiaXbrl] TAX 
	WHERE TAX.[EspacioNombresPrincipal] = 'http://www.cnbv.gob.mx/2017-08-01/relevant_events/rel_news_issuer_view_entry_point'  
	AND NOT EXISTS (
					SELECT AR.[IdArchivoTaxonomiaXbrl] 
					FROM [ArchivoTaxonomiaXbrl] AR 
					WHERE AR.[Href] = 'https://taxonomiasxbrl.cnbv.gob.mx/taxonomy/eventos-relevantes-2017-08-01/rel_news_issuer_view_entry_point_2017-08-01.xsd' 
					AND AR.[IdTaxonomiaXbrl] = TAX.[IdTaxonomiaXbrl]))
GO
INSERT INTO [dbo].[ArchivoTaxonomiaXbrl] ([IdTaxonomiaXbrl] ,[TipoReferencia] ,[Href] ,[Rol] ,[RolUri])
(	SELECT [IdTaxonomiaXbrl], 1,'https://taxonomiasxbrl.cnbv.gob.mx/taxonomy/eventos-relevantes-2017-08-01/rel_news_rating_agency_view_entry_point_2017-08-01.xsd', NULL,NULL 
	FROM [dbo].[TaxonomiaXbrl] TAX 
	WHERE TAX.[EspacioNombresPrincipal] = 'http://www.cnbv.gob.mx/2017-08-01/relevant_events/rel_news_rating_agency_view_entry_point'  
	AND NOT EXISTS (
					SELECT AR.[IdArchivoTaxonomiaXbrl] 
					FROM [ArchivoTaxonomiaXbrl] AR 
					WHERE AR.[Href] = 'https://taxonomiasxbrl.cnbv.gob.mx/taxonomy/eventos-relevantes-2017-08-01/rel_news_rating_agency_view_entry_point_2017-08-01.xsd' 
					AND AR.[IdTaxonomiaXbrl] = TAX.[IdTaxonomiaXbrl]))
GO
INSERT INTO [dbo].[ArchivoTaxonomiaXbrl] ([IdTaxonomiaXbrl] ,[TipoReferencia] ,[Href] ,[Rol] ,[RolUri])
(	SELECT [IdTaxonomiaXbrl], 1,'https://taxonomiasxbrl.cnbv.gob.mx/taxonomy/eventos-relevantes-2017-08-01/rel_news_trust_issuer_view_entry_point_2017-08-01.xsd', NULL,NULL 
	FROM [dbo].[TaxonomiaXbrl] TAX 
	WHERE TAX.[EspacioNombresPrincipal] = 'http://www.cnbv.gob.mx/2017-08-01/relevant_events/rel_news_trust_issuer_view_entry_point'  
	AND NOT EXISTS (
					SELECT AR.[IdArchivoTaxonomiaXbrl] 
					FROM [ArchivoTaxonomiaXbrl] AR 
					WHERE AR.[Href] = 'https://taxonomiasxbrl.cnbv.gob.mx/taxonomy/eventos-relevantes-2017-08-01/rel_news_trust_issuer_view_entry_point_2017-08-01.xsd' 
					AND AR.[IdTaxonomiaXbrl] = TAX.[IdTaxonomiaXbrl]))
GO

