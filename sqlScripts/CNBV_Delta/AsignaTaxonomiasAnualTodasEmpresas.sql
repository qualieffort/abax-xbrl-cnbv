--SELECT * FROM [dbo].[TipoEmpresa];

--SELECT * FROM [dbo].[TaxonomiaXbrl];

--SELECT * FROM [dbo].[TipoEmpresaTaxonomiaXbrl];

INSERT INTO [TipoEmpresa](Nombre,Descripcion,Borrado) 
(SELECT 'Todas Reporte Anual', 'Todas las taxonomías de reporte anual', 0 
 WHERE NOT EXISTS (SELECT * FROM [TipoEmpresa] WHERE Nombre = 'Todas Reporte Anual'))
;

INSERT INTO [TipoEmpresaTaxonomiaXbrl] (IdTipoEmpresa, IdTaxonomiaXbrl) 
(SELECT TE.IdTipoEmpresa, TA.IdTaxonomiaXbrl 
 FROM [TipoEmpresa] TE, [TaxonomiaXbrl] TA 
 WHERE TE.Nombre = 'Todas Reporte Anual' 
   AND TA.EspacioNombresPrincipal LIKE '%ar_prospectus/ar_%'
   AND NOT EXISTS (SELECT * FROM [TipoEmpresaTaxonomiaXbrl] TET WHERE TET.IdTipoEmpresa = TE.IdTipoEmpresa AND TET.IdTaxonomiaXbrl = TA.IdTaxonomiaXbrl))
;


INSERT INTO [EmpresaTipoEmpresa] (IdEmpresa, IdTipoEmpresa)
(SELECT EM.IdEmpresa, TE.IdTipoEmpresa
 FROM [Empresa] EM, [TipoEmpresa] TE
 WHERE TE.Nombre = 'Todas Reporte Anual' 
   AND NOT EXISTS (SELECT * FROM [EmpresaTipoEmpresa] ETE WHERE  ETE.IdEmpresa = EM.IdEmpresa AND ETE.IdTipoEmpresa = TE.IdTipoEmpresa) )
;