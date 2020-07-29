/****** Object:  Table [dbo].[TipoEmpresa] ******/
IF Object_ID(N'[dbo].[TipoEmpresa]') is null
BEGIN
SET ANSI_NULLS ON
SET QUOTED_IDENTIFIER ON
SET ANSI_PADDING ON
CREATE TABLE [dbo].[TipoEmpresa](
	[IdTipoEmpresa] [bigint] IDENTITY(1,1) NOT NULL,
	[Nombre] [varchar](50) NOT NULL,
	[Descripcion] [varchar](500) NULL,
	[Borrado] [bit] NULL,
 CONSTRAINT [PK_TipoEmpresa] PRIMARY KEY CLUSTERED 
(
	[IdTipoEmpresa] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
SET ANSI_PADDING OFF
END
GO
/****** Object:  Table [dbo].[EmpresaTipoEmpresa] ******/
IF Object_ID(N'[dbo].[EmpresaTipoEmpresa]') is null
BEGIN
SET ANSI_NULLS ON
SET QUOTED_IDENTIFIER ON
SET ANSI_PADDING ON
CREATE TABLE [dbo].[EmpresaTipoEmpresa](
	[IdEmpresa] [bigint] NOT NULL,
	[IdTipoEmpresa] [bigint] NOT NULL,
 CONSTRAINT [PK_EmpresaTipoEmpresa] PRIMARY KEY CLUSTERED 
(
	[IdEmpresa] ASC, [IdTipoEmpresa] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
SET ANSI_PADDING OFF
ALTER TABLE [dbo].[EmpresaTipoEmpresa]  WITH CHECK ADD  CONSTRAINT [FK_EmpresaTipoEmpresa_Empresa] FOREIGN KEY([IdEmpresa]) REFERENCES [dbo].[Empresa] ([IdEmpresa]) ON DELETE CASCADE
ALTER TABLE [dbo].[EmpresaTipoEmpresa]  WITH CHECK ADD  CONSTRAINT [FK_EmpresaTipoEmpresa_TipoEmpresa] FOREIGN KEY([IdTipoEmpresa]) REFERENCES [dbo].[TipoEmpresa] ([IdTipoEmpresa]) ON DELETE CASCADE
END
GO
/****** Object:  Table [dbo].[TipoRelacionEmpresa] ******/
IF Object_ID(N'[dbo].[TipoRelacionEmpresa]') is null
BEGIN
SET ANSI_NULLS ON
SET QUOTED_IDENTIFIER ON
SET ANSI_PADDING ON
CREATE TABLE [dbo].[TipoRelacionEmpresa](
	[IdTipoRelacionEmpresa] [bigint] NOT NULL,
	[Nombre] [varchar](50) NOT NULL,
	[Descripcion] [varchar](500) NULL,
 CONSTRAINT [PK_TipoRelacionEmpresa] PRIMARY KEY CLUSTERED 
(
	[IdTipoRelacionEmpresa] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
SET ANSI_PADDING OFF
END 
GO
/****** Object:  Table [dbo].[RelacionEmpresas] ******/
IF Object_ID(N'[dbo].[RelacionEmpresas]') is null
BEGIN
SET ANSI_NULLS ON
SET QUOTED_IDENTIFIER ON
SET ANSI_PADDING ON
CREATE TABLE [dbo].[RelacionEmpresas](
    [IdTipoRelacionEmpresa] [bigint] NOT NULL,
	[IdEmpresaPrimaria] [bigint] NOT NULL,
	[IdEmpresaSecundaria] [bigint] NOT NULL,
	[Parametros][varchar](4000) NULL,
 CONSTRAINT [PK_RelacionEmpresas] PRIMARY KEY CLUSTERED 
(
	[IdTipoRelacionEmpresa] ASC, [IdEmpresaPrimaria] ASC, [IdEmpresaSecundaria] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
SET ANSI_PADDING OFF
ALTER TABLE [dbo].[RelacionEmpresas]  WITH CHECK ADD  CONSTRAINT [FK_RelacionEmpresas_Tipo] FOREIGN KEY([IdTipoRelacionEmpresa]) REFERENCES [dbo].[TipoRelacionEmpresa] ([IdTipoRelacionEmpresa])
ALTER TABLE [dbo].[RelacionEmpresas]  WITH CHECK ADD  CONSTRAINT [FK_RelacionEmpresas_Primaria] FOREIGN KEY([IdEmpresaPrimaria]) REFERENCES [dbo].[Empresa] ([IdEmpresa]) ON DELETE CASCADE
ALTER TABLE [dbo].[RelacionEmpresas]  WITH CHECK ADD  CONSTRAINT [FK_RelacionEmpresas_Secundaria] FOREIGN KEY([IdEmpresaSecundaria]) REFERENCES [dbo].[Empresa] ([IdEmpresa]) ON DELETE CASCADE
END
GO
/****** Object:  Table [dbo].[TipoEmpresaTaxonomiaXbrl] ******/
IF Object_ID(N'[dbo].[TipoEmpresaTaxonomiaXbrl]') is null
BEGIN
SET ANSI_NULLS ON
SET QUOTED_IDENTIFIER ON
SET ANSI_PADDING ON
CREATE TABLE [dbo].[TipoEmpresaTaxonomiaXbrl](
    [IdTipoEmpresa] [bigint] NOT NULL,
	[IdTaxonomiaXbrl] [bigint] NOT NULL,
 CONSTRAINT [PK_TipoEmpresaTaxonomiaXbrl] PRIMARY KEY CLUSTERED 
(
	[IdTipoEmpresa] ASC, [IdTaxonomiaXbrl] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
SET ANSI_PADDING OFF
ALTER TABLE [dbo].[TipoEmpresaTaxonomiaXbrl]  WITH CHECK ADD  CONSTRAINT [FK_TipoEmpresaTaxonomia_Tipo] FOREIGN KEY([IdTipoEmpresa]) REFERENCES [dbo].[TipoEmpresa] ([IdTipoEmpresa]) ON DELETE CASCADE
ALTER TABLE [dbo].[TipoEmpresaTaxonomiaXbrl]  WITH CHECK ADD  CONSTRAINT [FK_TipoEmpresaTaxonomia_Taxonomia] FOREIGN KEY([IdTaxonomiaXbrl]) REFERENCES [dbo].[TaxonomiaXbrl] ([IdTaxonomiaXbrl]) ON DELETE CASCADE
END
GO

/** Agregamos delete on cascade a las relaciones con las llaves foraneas de TipoEmpresaTaxonomiaXbrl para evitar conflictos en el borrado***/

IF NOT EXISTS (SELECT CONSTRAINT_NAME FROM INFORMATION_SCHEMA.REFERENTIAL_CONSTRAINTS  WHERE CONSTRAINT_SCHEMA = 'dbo' AND CONSTRAINT_NAME = 'FK_TipoEmpresaTaxonomia_Tipo' AND DELETE_RULE ='CASCADE')
BEGIN
ALTER TABLE [dbo].[TipoEmpresaTaxonomiaXbrl] DROP CONSTRAINT [FK_TipoEmpresaTaxonomia_Tipo]
ALTER TABLE [dbo].[TipoEmpresaTaxonomiaXbrl]  WITH CHECK ADD  CONSTRAINT [FK_TipoEmpresaTaxonomia_Tipo] FOREIGN KEY([IdTipoEmpresa]) REFERENCES [dbo].[TipoEmpresa] ([IdTipoEmpresa]) ON DELETE CASCADE
END
GO

IF NOT EXISTS (SELECT CONSTRAINT_NAME FROM INFORMATION_SCHEMA.REFERENTIAL_CONSTRAINTS  WHERE CONSTRAINT_SCHEMA = 'dbo' AND CONSTRAINT_NAME = 'FK_TipoEmpresaTaxonomia_Taxonomia' AND DELETE_RULE ='CASCADE')
BEGIN
ALTER TABLE [dbo].[TipoEmpresaTaxonomiaXbrl] DROP CONSTRAINT [FK_TipoEmpresaTaxonomia_Taxonomia]
ALTER TABLE [dbo].[TipoEmpresaTaxonomiaXbrl]  WITH CHECK ADD  CONSTRAINT [FK_TipoEmpresaTaxonomia_Taxonomia] FOREIGN KEY([IdTaxonomiaXbrl]) REFERENCES [dbo].[TaxonomiaXbrl] ([IdTaxonomiaXbrl]) ON DELETE CASCADE
END
GO

IF NOT EXISTS (SELECT CONSTRAINT_NAME FROM INFORMATION_SCHEMA.REFERENTIAL_CONSTRAINTS  WHERE CONSTRAINT_SCHEMA = 'dbo' AND CONSTRAINT_NAME = 'FK_EmpresaGrupoEmpresa_Empresa' AND DELETE_RULE ='CASCADE')
BEGIN
ALTER TABLE [dbo].[EmpresaGrupoEmpresa] DROP             CONSTRAINT [FK_EmpresaGrupoEmpresa_Empresa]
ALTER TABLE [dbo].[EmpresaGrupoEmpresa]  WITH CHECK ADD  CONSTRAINT [FK_EmpresaGrupoEmpresa_Empresa] FOREIGN KEY([IdEmpresa]) REFERENCES [dbo].[Empresa] ([IdEmpresa])  ON DELETE CASCADE
END
GO

IF NOT EXISTS (SELECT CONSTRAINT_NAME FROM INFORMATION_SCHEMA.REFERENTIAL_CONSTRAINTS  WHERE CONSTRAINT_SCHEMA = 'dbo' AND CONSTRAINT_NAME = 'FK_EmpresaGrupoEmpresa_Grupo' AND DELETE_RULE ='CASCADE')
BEGIN
ALTER TABLE [dbo].[EmpresaGrupoEmpresa] DROP             CONSTRAINT [FK_EmpresaGrupoEmpresa_Grupo]
ALTER TABLE [dbo].[EmpresaGrupoEmpresa]  WITH CHECK ADD  CONSTRAINT [FK_EmpresaGrupoEmpresa_Grupo] FOREIGN KEY([IdGrupoEmpresa]) REFERENCES [dbo].[GrupoEmpresa] ([IdGrupoEmpresa]) ON DELETE CASCADE
END
GO

IF NOT EXISTS (SELECT CONSTRAINT_NAME FROM INFORMATION_SCHEMA.REFERENTIAL_CONSTRAINTS  WHERE CONSTRAINT_SCHEMA = 'dbo' AND CONSTRAINT_NAME = 'FK_RelacionEmpresas_Primaria' AND DELETE_RULE ='CASCADE')
BEGIN
ALTER TABLE [dbo].[RelacionEmpresas] DROP             CONSTRAINT [FK_RelacionEmpresas_Primaria]
ALTER TABLE [dbo].[RelacionEmpresas]  WITH CHECK ADD  CONSTRAINT [FK_RelacionEmpresas_Primaria] FOREIGN KEY([IdEmpresaPrimaria]) REFERENCES [dbo].[Empresa] ([IdEmpresa]) ON DELETE CASCADE
END
GO


/****** Object:  Table [dbo].[BitacoraDistribucionDocumento] ******/
IF Object_ID(N'[dbo].[BitacoraDistribucionDocumento]') is null
BEGIN
CREATE TABLE [dbo].[BitacoraDistribucionDocumento](
	[IdBitacoraDistribucionDocumento] [bigint] IDENTITY(1,1) NOT NULL,
	[IdBitacoraVersionDocumento] [bigint] NOT NULL,
	[CveDistribucion] [varchar](100) NOT NULL,
	[Estatus] [int] NOT NULL,
	[MensajeError] [varchar](max) NULL,
	[FechaRegistro] [datetime] NOT NULL,
	[FechaUltimaModificacion] [datetime] NOT NULL,
 CONSTRAINT [PK_BitacoraDistribucionDocumento] PRIMARY KEY CLUSTERED 
(
	[IdBitacoraDistribucionDocumento] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
SET ANSI_PADDING OFF
ALTER TABLE [dbo].[BitacoraDistribucionDocumento]  WITH CHECK ADD  CONSTRAINT [FK_BitacoraDistribucionDocumento_BitacoraVersionDocumento] FOREIGN KEY([IdBitacoraVersionDocumento]) REFERENCES [dbo].[BitacoraVersionDocumento] ([IdBitacoraVersionDocumento]) ON DELETE CASCADE
ALTER TABLE [dbo].[BitacoraDistribucionDocumento] CHECK CONSTRAINT [FK_BitacoraDistribucionDocumento_BitacoraVersionDocumento]
END
GO
/****** Object:  Table [dbo].[GrupoEmpresa] ******/
IF Object_ID(N'[dbo].[GrupoEmpresa]') is null
BEGIN
SET ANSI_NULLS ON
SET QUOTED_IDENTIFIER ON
SET ANSI_PADDING ON
CREATE TABLE [dbo].[GrupoEmpresa](
	[IdGrupoEmpresa] [bigint] IDENTITY(1,1) NOT NULL,
	[Nombre] [varchar](100) NOT NULL,
	[Descripcion] [varchar](500) NULL,
 CONSTRAINT [PK_GrupoEmpresa] PRIMARY KEY CLUSTERED 
(
	[IdGrupoEmpresa] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
SET ANSI_PADDING OFF
END
GO
/****** Object:  Table [dbo].[EmpresaGrupoEmpresa] ******/
IF Object_ID(N'[dbo].[EmpresaGrupoEmpresa]') is null
BEGIN
SET ANSI_NULLS ON
SET QUOTED_IDENTIFIER ON
SET ANSI_PADDING ON
CREATE TABLE [dbo].[EmpresaGrupoEmpresa](
	[IdEmpresa] [bigint] NOT NULL,
	[IdGrupoEmpresa] [bigint] NOT NULL,
 CONSTRAINT [PK_EmpresaGrupoEmpresa] PRIMARY KEY CLUSTERED 
(
	[IdEmpresa] ASC, [IdGrupoEmpresa] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
SET ANSI_PADDING OFF
ALTER TABLE [dbo].[EmpresaGrupoEmpresa]  WITH CHECK ADD  CONSTRAINT [FK_EmpresaGrupoEmpresa_Empresa] FOREIGN KEY([IdEmpresa]) REFERENCES [dbo].[Empresa] ([IdEmpresa])  ON DELETE CASCADE
ALTER TABLE [dbo].[EmpresaGrupoEmpresa]  WITH CHECK ADD  CONSTRAINT [FK_EmpresaGrupoEmpresa_Grupo] FOREIGN KEY([IdGrupoEmpresa]) REFERENCES [dbo].[GrupoEmpresa] ([IdGrupoEmpresa]) ON DELETE CASCADE
END
GO

/** Agregamos la columna activo en la tabla de taxonomías si no existe **/
IF NOT EXISTS (SELECT * FROM sys.columns WHERE Name = N'Activa' and Object_ID = Object_ID(N'[dbo].[TaxonomiaXbrl]'))
BEGIN
ALTER TABLE [dbo].[TaxonomiaXbrl] ADD [Activa] [bit] NOT NULL DEFAULT(1)
END
GO

/**Quitamos el identity de la columan IdFacultad de la tabla Facultad *****/

IF EXISTS (SELECT * FROM sys.columns WHERE Name = N'IdFacultad' and Object_ID = Object_ID(N'[dbo].[Facultad]') and is_identity = 1)
BEGIN
ALTER TABLE [dbo].[RolFacultad] DROP CONSTRAINT [FK_RolFacultad_Facultad1]
ALTER TABLE [dbo].[Facultad] DROP CONSTRAINT [PK_Facultad_1]
ALTER TABLE [dbo].[Facultad] ADD [IdFacultadOld] [bigint] NOT NULL DEFAULT -1
EXEC(N'UPDATE [dbo].[Facultad] SET IdFacultadOld = [IdFacultad];')
--Esto es solo para eliminar los default constraints
DECLARE @TABLE_NAME NVARCHAR(256)
DECLARE @COL_NAME NVARCHAR(256)
DECLARE @COMMAND  NVARCHAR(1000)
SET @TABLE_NAME = N'Facultad'
SET @COL_NAME = N'IdFacultad'
SELECT @COMMAND = 'ALTER TABLE ' + @TABLE_NAME + ' DROP CONSTRAINT ' + D.NAME  FROM SYS.TABLES T JOIN SYS.DEFAULT_CONSTRAINTS D ON D.PARENT_OBJECT_ID = T.OBJECT_ID JOIN    SYS.COLUMNS C ON C.OBJECT_ID = T.OBJECT_ID AND C.COLUMN_ID = D.PARENT_COLUMN_ID WHERE T.NAME = @TABLE_NAME AND C.NAME = @COL_NAME
PRINT @COMMAND
EXECUTE (@COMMAND)
ALTER TABLE [dbo].[Facultad] DROP COLUMN [IdFacultad]
--Continuamos
ALTER TABLE [dbo].[Facultad] ADD [IdFacultad] [bigint] NOT NULL DEFAULT -1
EXEC(N'UPDATE [dbo].[Facultad] SET [IdFacultad] = IdFacultadOld;')
--Lo mismo para la otra columan
SET @COL_NAME = N'IdFacultadOld'
SELECT @COMMAND = 'ALTER TABLE ' + @TABLE_NAME + ' DROP CONSTRAINT ' + D.NAME  FROM SYS.TABLES T JOIN SYS.DEFAULT_CONSTRAINTS D ON D.PARENT_OBJECT_ID = T.OBJECT_ID JOIN    SYS.COLUMNS C ON C.OBJECT_ID = T.OBJECT_ID AND C.COLUMN_ID = D.PARENT_COLUMN_ID WHERE T.NAME = @TABLE_NAME AND C.NAME = @COL_NAME
PRINT @COMMAND
EXECUTE (@COMMAND)
ALTER TABLE [dbo].[Facultad] DROP COLUMN [IdFacultadOld]
--Creamos nuevamente los scripts
ALTER TABLE [dbo].[Facultad] ADD CONSTRAINT [PK_Facultad_1] PRIMARY KEY CLUSTERED ([IdFacultad] ASC)
ALTER TABLE [dbo].[RolFacultad]  WITH NOCHECK ADD  CONSTRAINT [FK_RolFacultad_Facultad1] FOREIGN KEY([IdFacultad]) REFERENCES [dbo].[Facultad] ([IdFacultad])
END
GO

/***Quitamos el identity de la columna IdTipoRelacionEmpresa de la columna TipoRelacionEmpresa **/

IF EXISTS (SELECT * FROM sys.columns WHERE Name = N'IdTipoRelacionEmpresa' and Object_ID = Object_ID(N'[dbo].[TipoRelacionEmpresa]') and is_identity = 1)
BEGIN
ALTER TABLE [dbo].[RelacionEmpresas] DROP CONSTRAINT [FK_RelacionEmpresas_Tipo]
ALTER TABLE [dbo].[TipoRelacionEmpresa] DROP CONSTRAINT [PK_TipoRelacionEmpresa]
ALTER TABLE [dbo].[TipoRelacionEmpresa] ADD [IdTipoRelacionEmpresaOld] [bigint] NOT NULL DEFAULT -1
EXEC(N'UPDATE [dbo].[TipoRelacionEmpresa] SET [IdTipoRelacionEmpresaOld] = [IdTipoRelacionEmpresa];')
--Esto es solo para eliminar los default constraints
DECLARE @TABLE_NAME NVARCHAR(256)
DECLARE @COL_NAME NVARCHAR(256)
DECLARE @COMMAND  NVARCHAR(1000)
SET @TABLE_NAME = N'TipoRelacionEmpresa'
SET @COL_NAME = N'IdTipoRelacionEmpresa'
SELECT @COMMAND = 'ALTER TABLE ' + @TABLE_NAME + ' DROP CONSTRAINT ' + D.NAME  FROM SYS.TABLES T JOIN SYS.DEFAULT_CONSTRAINTS D ON D.PARENT_OBJECT_ID = T.OBJECT_ID JOIN    SYS.COLUMNS C ON C.OBJECT_ID = T.OBJECT_ID AND C.COLUMN_ID = D.PARENT_COLUMN_ID WHERE T.NAME = @TABLE_NAME AND C.NAME = @COL_NAME
PRINT @COMMAND
EXECUTE (@COMMAND)
ALTER TABLE [dbo].[TipoRelacionEmpresa] DROP COLUMN [IdTipoRelacionEmpresa]
--Continuamos
ALTER TABLE [dbo].[TipoRelacionEmpresa] ADD [IdTipoRelacionEmpresa] [bigint] NOT NULL DEFAULT -1
EXEC(N'UPDATE [dbo].[TipoRelacionEmpresa] SET [IdTipoRelacionEmpresa] = [IdTipoRelacionEmpresaOld];')
--Lo mismo para la otra columan
SET @COL_NAME = N'IdTipoRelacionEmpresaOld'
SELECT @COMMAND = 'ALTER TABLE ' + @TABLE_NAME + ' DROP CONSTRAINT ' + D.NAME  FROM SYS.TABLES T JOIN SYS.DEFAULT_CONSTRAINTS D ON D.PARENT_OBJECT_ID = T.OBJECT_ID JOIN    SYS.COLUMNS C ON C.OBJECT_ID = T.OBJECT_ID AND C.COLUMN_ID = D.PARENT_COLUMN_ID WHERE T.NAME = @TABLE_NAME AND C.NAME = @COL_NAME
PRINT @COMMAND
EXECUTE (@COMMAND)
ALTER TABLE [dbo].[TipoRelacionEmpresa] DROP COLUMN [IdTipoRelacionEmpresaOld]
--Creamos nuevamente los scripts
ALTER TABLE [dbo].[TipoRelacionEmpresa] ADD CONSTRAINT [PK_TipoRelacionEmpresa] PRIMARY KEY CLUSTERED ([IdTipoRelacionEmpresa] ASC)
ALTER TABLE [dbo].[RelacionEmpresas]  WITH CHECK ADD  CONSTRAINT [FK_RelacionEmpresas_Tipo] FOREIGN KEY([IdTipoRelacionEmpresa]) REFERENCES [dbo].[TipoRelacionEmpresa] ([IdTipoRelacionEmpresa])
END
GO

/** Agregamos la columna Empresa en la tabla de BitacoraVersionDocumento si no existe **/
IF NOT EXISTS (SELECT * FROM sys.columns WHERE Name = N'Empresa' and Object_ID = Object_ID(N'[dbo].[BitacoraVersionDocumento]'))
BEGIN
ALTER TABLE [dbo].[BitacoraVersionDocumento] ADD [Empresa] [varchar](50) NULL
END
GO

/** Agregamos la columna Usuario en la tabla de BitacoraVersionDocumento si no existe **/
IF NOT EXISTS (SELECT * FROM sys.columns WHERE Name = N'Usuario' and Object_ID = Object_ID(N'[dbo].[BitacoraVersionDocumento]'))
BEGIN
ALTER TABLE [dbo].[BitacoraVersionDocumento] ADD [Usuario] [varchar](50) NULL
END
GO

IF NOT EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[dbo].[UC_Emp_NombreCorto]'))
BEGIN
ALTER TABLE [Empresa] ADD CONSTRAINT [UC_Emp_NombreCorto] UNIQUE ([NombreCorto])
END
GO

/****** Object:  Table [dbo].[Parametro] ******/
IF Object_ID(N'[dbo].[ParametroSistema]') is null
BEGIN
SET ANSI_NULLS ON
SET QUOTED_IDENTIFIER ON
SET ANSI_PADDING ON
CREATE TABLE [dbo].[ParametroSistema](
    [IdParametroSistema] [bigint] NOT NULL,
	[Nombre] [varchar](50) NOT NULL,
	[Descripcion] [varchar](500) NOT NULL,
	[Valor] [varchar](4000) NOT NULL,
 CONSTRAINT [PK_ParametroSistema] PRIMARY KEY CLUSTERED 
(
	[IdParametroSistema] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
SET ANSI_PADDING OFF
ALTER TABLE [dbo].[ParametroSistema] WITH CHECK ADD  CONSTRAINT [UC_PARAMETRO_SIS_NOMBRE] UNIQUE ([Nombre])
END
GO
/****** Object:  Table [dbo].[ListaNotificacion] ******/
IF Object_ID(N'[dbo].[ListaNotificacion]') is null
BEGIN
SET ANSI_NULLS ON
SET QUOTED_IDENTIFIER ON
SET ANSI_PADDING ON
CREATE TABLE [dbo].[ListaNotificacion](
	[IdListaNotificacion] [bigint] IDENTITY(1,1) NOT NULL,
	[Nombre] [varchar](50) NOT NULL,
	[Descripcion] [varchar](500) NOT NULL,
	[TituloMensaje] [varchar](200) NOT NULL,
	[ClaveLista] [varchar](255) NOT NULL,
 CONSTRAINT [PK_ListaNotificacion] PRIMARY KEY CLUSTERED 
(
	[IdListaNotificacion] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
SET ANSI_PADDING OFF
ALTER TABLE [dbo].[ListaNotificacion] WITH CHECK ADD  CONSTRAINT [UC_LIS_NOTIFICACION_NOMBRE] UNIQUE ([Nombre])
ALTER TABLE [dbo].[ListaNotificacion] WITH CHECK ADD  CONSTRAINT [UC_LIS_NOTIFICACION_CLAVE] UNIQUE ([ClaveLista])
END
GO
/****** Object:  Table [dbo].[DestinatarioNotificacion] ******/
IF Object_ID(N'[dbo].[DestinatarioNotificacion]') is null
BEGIN
SET ANSI_NULLS ON
SET QUOTED_IDENTIFIER ON
SET ANSI_PADDING ON
CREATE TABLE [dbo].[DestinatarioNotificacion](
	[IdDestinatarioNotificacion] [bigint] IDENTITY(1,1) NOT NULL,
	[IdListaNotificacion] [bigint],
	[Nombre] [varchar](500) NOT NULL,
	[CorreoElectronico] [varchar](400) NOT NULL,
 CONSTRAINT [PK_DestinatarioNotificacion] PRIMARY KEY CLUSTERED 
(
	[IdDestinatarioNotificacion] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
SET ANSI_PADDING OFF
ALTER TABLE [dbo].[DestinatarioNotificacion]  WITH CHECK ADD  CONSTRAINT [FK_Destinatario_Lista_Notificacion] FOREIGN KEY([IdListaNotificacion]) REFERENCES [dbo].[ListaNotificacion] ([IdListaNotificacion]) ON DELETE CASCADE
ALTER TABLE [dbo].[DestinatarioNotificacion] WITH CHECK ADD  CONSTRAINT [UC_Dest_Lista_Notificacion] UNIQUE ([IdListaNotificacion],[CorreoElectronico])
END
GO

/** Agregamos la columna ClaveLista en la tabla de ListaNotificacion si no existe **/
IF NOT EXISTS (SELECT * FROM sys.columns WHERE Name = N'ClaveLista' and Object_ID = Object_ID(N'[dbo].[ListaNotificacion]'))
BEGIN
ALTER TABLE [dbo].[ListaNotificacion] ADD [ClaveLista] [varchar](255) NOT NULL DEFAULT('LISTA_')
EXEC(N'UPDATE [dbo].[ListaNotificacion] SET [ClaveLista] = CONCAT([ClaveLista],[IdListaNotificacion]);')
ALTER TABLE [dbo].[ListaNotificacion] WITH CHECK ADD  CONSTRAINT [UC_LIS_NOTIFICACION_CLAVE] UNIQUE ([ClaveLista])
END
GO

/** Insertamos los modulos adicionales **/

SET IDENTITY_INSERT [dbo].[Modulo] ON
INSERT [dbo].[Modulo] ([IdModulo], [Nombre], [Descripcion])  (SELECT 8, N'Servicio de Validación de Documentos XBRL', N'Módulo Servicio de Validación de Documentos XBRL'        WHERE NOT EXISTS(SELECT IdModulo FROM Modulo WHERE IdModulo = 8))
INSERT [dbo].[Modulo] ([IdModulo], [Nombre], [Descripcion])  (SELECT 9, N'Servicio de Almacenamiento de Documentos XBRL', N'Módulo Servicio de Almacenamiento de Documentos XBRL'WHERE NOT EXISTS(SELECT IdModulo FROM Modulo WHERE IdModulo = 9))
INSERT [dbo].[Modulo] ([IdModulo], [Nombre], [Descripcion])  (SELECT 10, N'Tipo Empresa', N'Modulo Administración de Tipos de Empresa'                                           WHERE NOT EXISTS(SELECT IdModulo FROM Modulo WHERE IdModulo = 10))
INSERT [dbo].[Modulo] ([IdModulo], [Nombre], [Descripcion])  (SELECT 11, N'Taxonomia XBRL', N'Modulo Administración de Taxonomías Xbrl'                                          WHERE NOT EXISTS(SELECT IdModulo FROM Modulo WHERE IdModulo = 11))
INSERT [dbo].[Modulo] ([IdModulo], [Nombre], [Descripcion])  (SELECT 12, N'Grupo Empresa', N'Módulo Administración de Grupos de Empresas'                                        WHERE NOT EXISTS(SELECT IdModulo FROM Modulo WHERE IdModulo = 12))
INSERT [dbo].[Modulo] ([IdModulo], [Nombre], [Descripcion])  (SELECT 13, N'Parametros Sistema', N'Módulo Administración de los Parámetros del sistema'                           WHERE NOT EXISTS(SELECT IdModulo FROM Modulo WHERE IdModulo = 13))
INSERT [dbo].[Modulo] ([IdModulo], [Nombre], [Descripcion])  (SELECT 14, N'Listas Notificación', N'Módulo Administración de las Listas de Notificación'                          WHERE NOT EXISTS(SELECT IdModulo FROM Modulo WHERE IdModulo = 14))
SET IDENTITY_INSERT [dbo].[Modulo] OFF
GO
/** Insertamos los tipos de relaciones de empresas **/

INSERT INTO [dbo].[TipoRelacionEmpresa]([IdTipoRelacionEmpresa], [Nombre],[Descripcion]) (SELECT 1, 'Fiduciario de Fideicomitente', 'Relaciona un fideuciario con un Fideicomitente' WHERE NOT EXISTS (SELECT [IdTipoRelacionEmpresa] FROM [TipoRelacionEmpresa] WHERE [IdTipoRelacionEmpresa] = 1))
GO
/** Insertamos las nuevas categorias de facultades ***/
SET IDENTITY_INSERT [dbo].[CategoriaFacultad] ON
INSERT [dbo].[CategoriaFacultad] ([IdCategoriaFacultad], [Nombre], [Descripcion], [Borrado]) (SELECT 9,  N'Facultades Parametros Sistema', N'Facultades para la administración de los Parametros generales del sistema', 0 WHERE NOT EXISTS (SELECT [IdCategoriaFacultad] FROM [CategoriaFacultad] WHERE [IdCategoriaFacultad] = 9))
INSERT [dbo].[CategoriaFacultad] ([IdCategoriaFacultad], [Nombre], [Descripcion], [Borrado]) (SELECT 10, N'Facultades Notificacion',       N'Facultades para la administración de las notificaciones del sistema',       0 WHERE NOT EXISTS (SELECT [IdCategoriaFacultad] FROM [CategoriaFacultad] WHERE [IdCategoriaFacultad] = 10))
SET IDENTITY_INSERT [dbo].[CategoriaFacultad] OFF
GO
/*** Insertamos las nuevas facultades **/

INSERT [dbo].[Facultad] ([IdFacultad], [Nombre], [Descripcion], [IdCategoriaFacultad], [Borrado]) (SELECT 500, N'Consultar Listado Tipos Empresas', N'Facultad para consultar tipos de empresa.',3,0 WHERE NOT EXISTS(SELECT [IdFacultad] FROM [dbo].[Facultad] WHERE IdFacultad =	500))
INSERT [dbo].[Facultad] ([IdFacultad], [Nombre], [Descripcion], [IdCategoriaFacultad], [Borrado]) (SELECT 501, N'Exportar Listado TiposEmpresa', N'Facultad para exportar los tipos de empresa.',3,0 WHERE NOT EXISTS(SELECT [IdFacultad] FROM [dbo].[Facultad] WHERE IdFacultad =	501))
INSERT [dbo].[Facultad] ([IdFacultad], [Nombre], [Descripcion], [IdCategoriaFacultad], [Borrado]) (SELECT 502, N'Insertar Tipo Empresa', N'Facultad para un nuevo tipo de empresa.',3,0 WHERE NOT EXISTS(SELECT [IdFacultad] FROM [dbo].[Facultad] WHERE IdFacultad =	502))
INSERT [dbo].[Facultad] ([IdFacultad], [Nombre], [Descripcion], [IdCategoriaFacultad], [Borrado]) (SELECT 503, N'Editar Tipo Empresa', N'Facultad para editar los datos de un tipo de empresa.',3,0 WHERE NOT EXISTS(SELECT [IdFacultad] FROM [dbo].[Facultad] WHERE IdFacultad =	503))
INSERT [dbo].[Facultad] ([IdFacultad], [Nombre], [Descripcion], [IdCategoriaFacultad], [Borrado]) (SELECT 504, N'Eliminar Tipo Empresa', N'Facultad para eliminar los tipos de empresa.',3,0 WHERE NOT EXISTS(SELECT [IdFacultad] FROM [dbo].[Facultad] WHERE IdFacultad =	504))
INSERT [dbo].[Facultad] ([IdFacultad], [Nombre], [Descripcion], [IdCategoriaFacultad], [Borrado]) (SELECT 505, N'Consultar Taxonomías', N'Facultad consultar las taxonomías.',3,0 WHERE NOT EXISTS(SELECT [IdFacultad] FROM [dbo].[Facultad] WHERE IdFacultad =	505))
INSERT [dbo].[Facultad] ([IdFacultad], [Nombre], [Descripcion], [IdCategoriaFacultad], [Borrado]) (SELECT 506, N'Exportar Taxonomías', N'Facultad para exportar las taxonomías.',3,0 WHERE NOT EXISTS(SELECT [IdFacultad] FROM [dbo].[Facultad] WHERE IdFacultad =	506))
INSERT [dbo].[Facultad] ([IdFacultad], [Nombre], [Descripcion], [IdCategoriaFacultad], [Borrado]) (SELECT 507, N'Insertar Taxonomías', N'Facultad para insratar una nueva taxonomía.',3,0 WHERE NOT EXISTS(SELECT [IdFacultad] FROM [dbo].[Facultad] WHERE IdFacultad =	507))
INSERT [dbo].[Facultad] ([IdFacultad], [Nombre], [Descripcion], [IdCategoriaFacultad], [Borrado]) (SELECT 508, N'Editar Taxonomías', N'Facultad para ediar los valores de una taxonomía.',3,0 WHERE NOT EXISTS(SELECT [IdFacultad] FROM [dbo].[Facultad] WHERE IdFacultad =	508))
INSERT [dbo].[Facultad] ([IdFacultad], [Nombre], [Descripcion], [IdCategoriaFacultad], [Borrado]) (SELECT 509, N'Eliminar Taxonomías', N'Facultad para eliminar las taxonomías.',3,0 WHERE NOT EXISTS(SELECT [IdFacultad] FROM [dbo].[Facultad] WHERE IdFacultad =	509))
INSERT [dbo].[Facultad] ([IdFacultad], [Nombre], [Descripcion], [IdCategoriaFacultad], [Borrado]) (SELECT 510, N'Activar Desactivar Taxonomía', N'Facultad para activar o desactivar las taxonomías.',3,0 WHERE NOT EXISTS(SELECT [IdFacultad] FROM [dbo].[Facultad] WHERE IdFacultad =	510))
INSERT [dbo].[Facultad] ([IdFacultad], [Nombre], [Descripcion], [IdCategoriaFacultad], [Borrado]) (SELECT 511, N'Consultar Listado Grupo Empresas', N'Facultad para consultar los grupos de empresas.',3,0 WHERE NOT EXISTS(SELECT [IdFacultad] FROM [dbo].[Facultad] WHERE IdFacultad =	511))
INSERT [dbo].[Facultad] ([IdFacultad], [Nombre], [Descripcion], [IdCategoriaFacultad], [Borrado]) (SELECT 512, N'Exportar Listado Grupo Empresa', N'Facultad para exportar los grupos de empresa.',3,0 WHERE NOT EXISTS(SELECT [IdFacultad] FROM [dbo].[Facultad] WHERE IdFacultad =	512))
INSERT [dbo].[Facultad] ([IdFacultad], [Nombre], [Descripcion], [IdCategoriaFacultad], [Borrado]) (SELECT 513, N'Insertar Grupo Empresa', N'Facultad para un nuevo grupo de empresas.',3,0 WHERE NOT EXISTS(SELECT [IdFacultad] FROM [dbo].[Facultad] WHERE IdFacultad =	513))
INSERT [dbo].[Facultad] ([IdFacultad], [Nombre], [Descripcion], [IdCategoriaFacultad], [Borrado]) (SELECT 514, N'Editar Grupo Empresa', N'Facultad para editar los datos de un grupo de empresas.',3,0 WHERE NOT EXISTS(SELECT [IdFacultad] FROM [dbo].[Facultad] WHERE IdFacultad =	514))
INSERT [dbo].[Facultad] ([IdFacultad], [Nombre], [Descripcion], [IdCategoriaFacultad], [Borrado]) (SELECT 515, N'Eliminar Grupo Empresa', N'Facultad para eliminar un grupo de empresas.',3,0 WHERE NOT EXISTS(SELECT [IdFacultad] FROM [dbo].[Facultad] WHERE IdFacultad =	515))
INSERT [dbo].[Facultad] ([IdFacultad], [Nombre], [Descripcion], [IdCategoriaFacultad], [Borrado]) (SELECT 516, N'Consultar Bitacora Version Documentos', N'Facultad para consultar la Bitacora de Versionamiento de Documentos.',6,0 WHERE NOT EXISTS(SELECT [IdFacultad] FROM [dbo].[Facultad] WHERE IdFacultad =	516))
INSERT [dbo].[Facultad] ([IdFacultad], [Nombre], [Descripcion], [IdCategoriaFacultad], [Borrado]) (SELECT 517, N'Exportar Bitacora Version Documentos', N'Facultad para exportar la Bitacora de Versionamiento de Documentos.',6,0 WHERE NOT EXISTS(SELECT [IdFacultad] FROM [dbo].[Facultad] WHERE IdFacultad =	517))
INSERT [dbo].[Facultad] ([IdFacultad], [Nombre], [Descripcion], [IdCategoriaFacultad], [Borrado]) (SELECT 518, N'Reprocesar Bitacora Version Documentos', N'Facultad enviar a reprocesar la Bitacora de Versionamiento de Documentos.',6,0 WHERE NOT EXISTS(SELECT [IdFacultad] FROM [dbo].[Facultad] WHERE IdFacultad =	518))
INSERT [dbo].[Facultad] ([IdFacultad], [Nombre], [Descripcion], [IdCategoriaFacultad], [Borrado]) (SELECT 519, N'Asignar Tipo Empresa', N'Facultad asignar los tipos de empresa a las empresas.',3,0 WHERE NOT EXISTS(SELECT [IdFacultad] FROM [dbo].[Facultad] WHERE IdFacultad =	519))
INSERT [dbo].[Facultad] ([IdFacultad], [Nombre], [Descripcion], [IdCategoriaFacultad], [Borrado]) (SELECT 520, N'Asignar Taxonomia a Tipo Empresa', N'Facultad para asignar taxonomias a un tipo de empresa.',3,0 WHERE NOT EXISTS(SELECT [IdFacultad] FROM [dbo].[Facultad] WHERE IdFacultad =	520))
INSERT [dbo].[Facultad] ([IdFacultad], [Nombre], [Descripcion], [IdCategoriaFacultad], [Borrado]) (SELECT 521, N'Relacionar Fiduciario a Fideicomitente', N'Facultad para asingar fiduciario a un fideicomitente.',3,0 WHERE NOT EXISTS(SELECT [IdFacultad] FROM [dbo].[Facultad] WHERE IdFacultad =	521))
INSERT [dbo].[Facultad] ([IdFacultad], [Nombre], [Descripcion], [IdCategoriaFacultad], [Borrado]) (SELECT 522, N'Asignar Grupo Empresa', N'Facultad para asingar una empresa a un grupo de empresas.',3,0 WHERE NOT EXISTS(SELECT [IdFacultad] FROM [dbo].[Facultad] WHERE IdFacultad =	522))


INSERT [dbo].[Facultad] ([IdFacultad], [Nombre], [Descripcion], [IdCategoriaFacultad], [Borrado]) (SELECT 523, N'Consultar Parametros Sistema', N'Facultad para consultar el listado de parametros del sistema.',9,0 WHERE NOT EXISTS(SELECT [IdFacultad] FROM [dbo].[Facultad] WHERE IdFacultad =	523))
INSERT [dbo].[Facultad] ([IdFacultad], [Nombre], [Descripcion], [IdCategoriaFacultad], [Borrado]) (SELECT 524, N'Exportar Parametros Sistema', N'Facultad para exportar los parametros del sistema a un archivo.',9,0 WHERE NOT EXISTS(SELECT [IdFacultad] FROM [dbo].[Facultad] WHERE IdFacultad =	524))
INSERT [dbo].[Facultad] ([IdFacultad], [Nombre], [Descripcion], [IdCategoriaFacultad], [Borrado]) (SELECT 525, N'Actualizar Parametros Sistema', N'Facultad para modificar el valor de los parametros del sistema.',9,0 WHERE NOT EXISTS(SELECT [IdFacultad] FROM [dbo].[Facultad] WHERE IdFacultad =	525))

INSERT [dbo].[Facultad] ([IdFacultad], [Nombre], [Descripcion], [IdCategoriaFacultad], [Borrado]) (SELECT 526, N'Consultar Listas Notificación', N'Facultad para las listas de notificación de eventos.',10,0 WHERE NOT EXISTS(SELECT [IdFacultad] FROM [dbo].[Facultad] WHERE IdFacultad =	526))
INSERT [dbo].[Facultad] ([IdFacultad], [Nombre], [Descripcion], [IdCategoriaFacultad], [Borrado]) (SELECT 527, N'Exportar Listas Notificación', N'Facultad para exportar las listas de notificación a un archivo.',10,0 WHERE NOT EXISTS(SELECT [IdFacultad] FROM [dbo].[Facultad] WHERE IdFacultad =	527))
INSERT [dbo].[Facultad] ([IdFacultad], [Nombre], [Descripcion], [IdCategoriaFacultad], [Borrado]) (SELECT 528, N'Insertar Lista Notificación', N'Facultad para agregar una nueva lista de notificación.',10,0 WHERE NOT EXISTS(SELECT [IdFacultad] FROM [dbo].[Facultad] WHERE IdFacultad =	528))
INSERT [dbo].[Facultad] ([IdFacultad], [Nombre], [Descripcion], [IdCategoriaFacultad], [Borrado]) (SELECT 529, N'Editar Lista Notificación', N'Facultad para editar los datos de una lista de notificación.',10,0 WHERE NOT EXISTS(SELECT [IdFacultad] FROM [dbo].[Facultad] WHERE IdFacultad =	529))
INSERT [dbo].[Facultad] ([IdFacultad], [Nombre], [Descripcion], [IdCategoriaFacultad], [Borrado]) (SELECT 530, N'Eliminar Lista Notificación', N'Facultad para eliminar una lista de notificación.',10,0 WHERE NOT EXISTS(SELECT [IdFacultad] FROM [dbo].[Facultad] WHERE IdFacultad =	530))

INSERT [dbo].[Facultad] ([IdFacultad], [Nombre], [Descripcion], [IdCategoriaFacultad], [Borrado]) (SELECT 531, N'Consultar Destinatarios Notificación', N'Facultad para las listas de notificación de eventos.',10,0 WHERE NOT EXISTS(SELECT [IdFacultad] FROM [dbo].[Facultad] WHERE IdFacultad =	531))
INSERT [dbo].[Facultad] ([IdFacultad], [Nombre], [Descripcion], [IdCategoriaFacultad], [Borrado]) (SELECT 532, N'Exportar Destinatarios Notificación', N'Facultad para exportar los destinatarios de notificación.',10,0 WHERE NOT EXISTS(SELECT [IdFacultad] FROM [dbo].[Facultad] WHERE IdFacultad =	532))
INSERT [dbo].[Facultad] ([IdFacultad], [Nombre], [Descripcion], [IdCategoriaFacultad], [Borrado]) (SELECT 533, N'Insertar Destinatario Notificación', N'Facultad para agregar destinatarios a una lista de notificación.',10,0 WHERE NOT EXISTS(SELECT [IdFacultad] FROM [dbo].[Facultad] WHERE IdFacultad =	533))
INSERT [dbo].[Facultad] ([IdFacultad], [Nombre], [Descripcion], [IdCategoriaFacultad], [Borrado]) (SELECT 534, N'Editar Destinatario Notificación', N'Facultad para editar los datos de un destinatario de notificación.',10,0 WHERE NOT EXISTS(SELECT [IdFacultad] FROM [dbo].[Facultad] WHERE IdFacultad =	534))
INSERT [dbo].[Facultad] ([IdFacultad], [Nombre], [Descripcion], [IdCategoriaFacultad], [Borrado]) (SELECT 535, N'Eliminar Lista Notificación', N'Facultad para eliminar un destinatario de una lista de notificación.',10,0 WHERE NOT EXISTS(SELECT [IdFacultad] FROM [dbo].[Facultad] WHERE IdFacultad =	535))

GO

INSERT [dbo].[RolFacultad] ([IdRol], [IdFacultad]) (
	SELECT Rol.IdRol, Facultad.IdFacultad FROM Rol, Facultad WHERE Rol.Nombre = 'Administrador General' AND Facultad.IdFacultad >= 500 AND Facultad.IdFacultad < 600 AND NOT EXISTS (SELECT IdRolFacultad FROM RolFacultad WHERE IdRol = Rol.IdRol AND IdFacultad = Facultad.IdFacultad)
)
GO

INSERT [dbo].[ListaNotificacion] ([Nombre], [Descripcion] , [TituloMensaje]) (SELECT 'Error Envio STIV', 'A quienes se notifica en caso de error en el evnío del STIV.', 'Error en Envio STIV' WHERE NOT EXISTS (SELECT [IdListaNotificacion] FROM [ListaNotificacion] WHERE [Nombre] = 'Error Envio STIV'))
INSERT [dbo].[ListaNotificacion] ([Nombre], [Descripcion] , [TituloMensaje]) (SELECT 'Exito Envio STIV', 'A quienes se notifica en caso de exito en el evnío del STIV.', 'Exito en Envio STIV' WHERE NOT EXISTS (SELECT [IdListaNotificacion] FROM [ListaNotificacion] WHERE [Nombre] = 'Exito Envio STIV'))
GO

INSERT [dbo].[ParametroSistema] ([IdParametroSistema],[Nombre], [Descripcion],[Valor]) (SELECT 1, 'NumeroIntentosEnvioSTIV',    'Cantidad de intentos antes de desistir',                                  '5' WHERE NOT EXISTS (SELECT IdParametroSistema FROM [ParametroSistema] WHERE [IdParametroSistema] = 1))
INSERT [dbo].[ParametroSistema] ([IdParametroSistema],[Nombre], [Descripcion],[Valor]) (SELECT 2, 'ListaDistribucionErrorSTIV', 'Nombre de la lista de distribución a la que se notifican los errores.',   'Error Envio STIV' WHERE NOT EXISTS (SELECT IdParametroSistema FROM [ParametroSistema] WHERE [IdParametroSistema] = 2))
INSERT [dbo].[ParametroSistema] ([IdParametroSistema],[Nombre], [Descripcion],[Valor]) (SELECT 3, 'MaximosMensajesErrorSTIV',   'Máximo número de mensajes de error.',                                     '10' WHERE NOT EXISTS (SELECT IdParametroSistema FROM [ParametroSistema] WHERE [IdParametroSistema] = 3))
INSERT [dbo].[ParametroSistema] ([IdParametroSistema],[Nombre], [Descripcion],[Valor]) (SELECT 4, 'ListaDistribucionExitoSTIV', 'Nombre de la lista de distribución a la que se notifica en caso de exito','Exito Envio STIV' WHERE NOT EXISTS (SELECT IdParametroSistema FROM [ParametroSistema] WHERE [IdParametroSistema] = 4))
GO