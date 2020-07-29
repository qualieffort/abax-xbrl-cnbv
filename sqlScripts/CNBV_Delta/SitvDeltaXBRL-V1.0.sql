IF NOT EXISTS (SELECT * FROM sys.Columns WHERE Name = N'IdPeriodicidadReporte' and Object_ID = Object_ID(N'[dbo].[TaxonomiaXbrl]'))
BEGIN
	alter table cat_stiv_archivos_validos add [es_xbrl] [bit] CONSTRAINT DefaultEsXbrlArcVal DEFAULT 0 NOT NULL
END
GO

IF NOT EXISTS (SELECT * FROM sys.Columns WHERE Name = N'aplica_xbrl' and Object_ID = Object_ID(N'[dbo].[cat_stiv2_tipos_periodicidades]'))
BEGIN
	alter table cat_stiv2_tipos_periodicidades add [aplica_xbrl] [bit] CONSTRAINT DefaultApXbrlTiPe DEFAULT 0 NOT NULL
END
GO

UPDATE cat_stiv2_tipos_periodicidades set aplica_xbrl = 1 where upper(etiqueta_perioricidad) in ('P','M','T','A');