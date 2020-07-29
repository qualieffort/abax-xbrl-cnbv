Insert into [dbo].[GrupoEmpresa] ([Nombre],[Descripcion])   
(SELECT 'NBIS2 2018', 'Grupo con las emisoras que reportan la taxonomía NBIS2' WHERE NOT EXISTS (SELECT * FROM [dbo].[GrupoEmpresa] WHERE [Nombre] = 'NBIS2 2018'));

Insert into [dbo].[EmpresaGrupoEmpresa] ([IdGrupoEmpresa],[IdEmpresa])
(
	SELECT GP.[IdGrupoEmpresa], EMP.[IdEmpresa] 
	FROM [dbo].[GrupoEmpresa] GP, [dbo].[Empresa] EMP
	WHERE GP.[Nombre] = 'NBIS2 2018'
	  AND EMP.[NombreCorto] IN  (
		'AA1CK',   'DATCK',  'IGNIACK', 'PRANACK',
		'ABJCK',   'DATPCK', 'IGS3CK',  'RCOCB',
		'ACONCK',  'EMXCK',  'IGSCK',   'RIVERCK',
		'ADMEXCK', 'EXI2CK', 'INFRACK', 'RSRENCK',
		'AGCCK',   'EXICK',  'LATINCK', 'SCGCK',
		'AMBCK',   'F1CC',   'LIVCK',   'SIRENCK',
		'ARTCK',   'FCICK',  'MHNOSCK', 'STEPCC',
		'ARTH4CK', 'FFLA1CK','MIFMXCK', 'THERMCK',
		'ARTH5CK', 'FFLA2CK','MRP2CK',  'VERTXCK',
		'ARTHACK', 'FFLA3CK','MRPCK',   'VEXCK',
		'AXIS2CK', 'FFLA4CK','NEXX6CK', 'VMZCK',
		'AXISCK',  'FIMMCK', 'NEXXCK',  'VTX2CK',
		'BALAMCK', 'FINSACK','NGCFICK', 'WSMX2CK',
		'BCCK',    'FINWSCK','NGPE2CK', 'WSMXCK',
		'CI3CK',   'FISECK', 'PBFF1CK',
		'CS2CK',   'GAVACK', 'PLA2CK',
		'CSCK',    'GBMESCK','PLACK',
		'CSMRTCK', 'GBMICK', 'PLANICK',
		'DAIVCK',  'ICUA2CK','PMCAPCK',
		'DALUSCK', 'ICUADCK','PMCPCK'
	  )
	  AND NOT EXISTS (SELECT * FROM [dbo].[EmpresaGrupoEmpresa] LOC WHERE LOC.[IdEmpresa] = EMP.[IdEmpresa] AND LOC.[IdGrupoEmpresa] = GP.[IdGrupoEmpresa])
);