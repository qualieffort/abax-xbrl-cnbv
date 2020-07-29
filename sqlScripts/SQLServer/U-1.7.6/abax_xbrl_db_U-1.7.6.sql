SET NUMERIC_ROUNDABORT OFF
GO
SET ANSI_PADDING, ANSI_WARNINGS, CONCAT_NULL_YIELDS_NULL, ARITHABORT, QUOTED_IDENTIFIER, ANSI_NULLS ON
GO
SET XACT_ABORT ON
GO
SET TRANSACTION ISOLATION LEVEL SERIALIZABLE
GO
BEGIN TRANSACTION
GO
IF @@ERROR <> 0 SET NOEXEC ON
GO
PRINT N'Dropping foreign keys from [dbo].[Hecho]'
GO

/*ELIMINAMOS ELEMENTOS YA NO USADOS*/

IF EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[dbo].[FK_Hecho_DocumentoInstancia]') AND type = 'F')
BEGIN
ALTER TABLE [dbo].[Hecho] DROP CONSTRAINT [FK_Hecho_DocumentoInstancia]
END
GO
IF @@ERROR <> 0 SET NOEXEC ON
GO
PRINT N'Dropping constraints from [dbo].[CATALOGO_ELEMENTOS]'
GO
IF EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[dbo].[PK_CATALOGO_ELEMENTOS]') AND type = 'K')
BEGIN
ALTER TABLE [dbo].[CATALOGO_ELEMENTOS] DROP CONSTRAINT [PK_CATALOGO_ELEMENTOS]
END
GO
IF @@ERROR <> 0 SET NOEXEC ON
GO
PRINT N'Dropping constraints from [dbo].[FORMATO]'
GO
IF EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[dbo].[PK_FORMATO]') AND type = 'K')
BEGIN
ALTER TABLE [dbo].[FORMATO] DROP CONSTRAINT [PK_FORMATO]
END
GO
IF @@ERROR <> 0 SET NOEXEC ON
GO
PRINT N'Dropping constraints from [dbo].[REPOSITORIO_HECHOS]'
GO
IF EXISTS (SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[dbo].[PK_REPOSIOTRIO_HECHO]') AND type = 'K')
BEGIN
ALTER TABLE [dbo].[REPOSITORIO_HECHOS] DROP CONSTRAINT [PK_REPOSIOTRIO_HECHO]
END
GO
IF @@ERROR <> 0 SET NOEXEC ON
GO
PRINT N'Dropping index [IX_IdDocumentoInstancia] from [dbo].[Hecho]'
GO
IF EXISTS (SELECT * FROM dbo.sysindexes WHERE name = 'IX_IdDocumentoInstancia')
BEGIN
DROP INDEX [IX_IdDocumentoInstancia] ON [dbo].[Hecho]
END
GO
IF @@ERROR <> 0 SET NOEXEC ON
GO
PRINT N'Dropping [dbo].[REPOSITORIO_HECHOS]'
GO
IF EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[REPOSITORIO_HECHOS]') AND type in (N'U'))
BEGIN
DROP TABLE [dbo].[REPOSITORIO_HECHOS]
END
GO
IF @@ERROR <> 0 SET NOEXEC ON
GO
PRINT N'Dropping [dbo].[FORMATO]'
GO
IF EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[FORMATO]') AND type in (N'U'))
BEGIN
DROP TABLE [dbo].[FORMATO]
END
GO
IF @@ERROR <> 0 SET NOEXEC ON
GO
PRINT N'Dropping [dbo].[CATALOGO_ELEMENTOS]'
GO
IF EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[CATALOGO_ELEMENTOS]') AND type in (N'U'))
BEGIN
DROP TABLE [dbo].[CATALOGO_ELEMENTOS]
END
GO
IF @@ERROR <> 0 SET NOEXEC ON
GO
PRINT N'Altering [dbo].[TaxonomiaXbrl]'
GO
IF @@ERROR <> 0 SET NOEXEC ON
GO

/*AGREGAMOS COLUMNA PARA ESPACIO DE NOMBRES DE TAXONOMIA*/

IF NOT EXISTS (SELECT * FROM sys.columns WHERE Name = N'EspacioNombresPrincipal' and Object_ID = Object_ID(N'[dbo].[TaxonomiaXbrl]'))
BEGIN
ALTER TABLE [dbo].[TaxonomiaXbrl] ADD
[EspacioNombresPrincipal] [varchar] (1000) COLLATE SQL_Latin1_General_CP1_CI_AS NULL
END
GO

IF NOT EXISTS (SELECT * FROM sys.columns WHERE Name = N'EspacioNombresPrincipal' and Object_ID = Object_ID(N'[dbo].[DocumentoInstancia]'))
BEGIN
ALTER TABLE [dbo].[DocumentoInstancia] ADD 
[EspacioNombresPrincipal] [varchar] (1000) COLLATE SQL_Latin1_General_CP1_CI_AS NULL
END
GO
IF NOT EXISTS (SELECT * FROM sys.columns WHERE Name = N'TipoUsuario' and Object_ID = Object_ID(N'[dbo].[Usuario]'))
BEGIN
ALTER TABLE [dbo].[Usuario] ADD
[TipoUsuario] [int] NULL
END
GO
IF @@ERROR <> 0 SET NOEXEC ON
GO
PRINT N'Altering [dbo].[Contexto]'
GO
IF @@ERROR <> 0 SET NOEXEC ON
GO
ALTER TABLE [dbo].[Contexto] ALTER COLUMN [Nombre] [varchar] (800) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL
GO
IF @@ERROR <> 0 SET NOEXEC ON
GO
PRINT N'Altering [dbo].[Hecho]'
GO
IF @@ERROR <> 0 SET NOEXEC ON
GO
ALTER TABLE [dbo].[Hecho] ALTER COLUMN [Concepto] [varchar] (4000) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL
ALTER TABLE [dbo].[Hecho] ALTER COLUMN [IdDocumentoInstancia] [bigint] NOT NULL
ALTER TABLE [dbo].[Hecho] ALTER COLUMN [IdRef] [varchar] (500) COLLATE SQL_Latin1_General_CP1_CI_AS NULL
GO
IF @@ERROR <> 0 SET NOEXEC ON
GO
PRINT N'Creating index [IX_IdDocumentoInstancia] on [dbo].[Hecho]'
GO
/** AGREGAMOS NUEVOS ELEMENTOS **/
IF NOT EXISTS (SELECT * FROM dbo.sysindexes WHERE name = 'IX_IdDocumentoInstancia')
BEGIN
CREATE NONCLUSTERED INDEX [IX_IdDocumentoInstancia] ON [dbo].[Hecho] ([IdDocumentoInstancia])
END
GO
IF @@ERROR <> 0 SET NOEXEC ON
GO
PRINT N'Altering [dbo].[RegistroAuditoria]'
GO
IF @@ERROR <> 0 SET NOEXEC ON
GO
ALTER TABLE [dbo].[RegistroAuditoria] ALTER COLUMN [IdUsuario] [bigint] NOT NULL
ALTER TABLE [dbo].[RegistroAuditoria] ALTER COLUMN [IdModulo] [bigint] NOT NULL
ALTER TABLE [dbo].[RegistroAuditoria] ALTER COLUMN [IdAccionAuditable] [bigint] NOT NULL
GO
IF @@ERROR <> 0 SET NOEXEC ON
GO
PRINT N'Adding constraints to [dbo].[CategoriaFacultad]'
GO
IF NOT EXISTS(SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[dbo].[DF__Categoria__Borra__403A8C7D]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[CategoriaFacultad] ADD CONSTRAINT [DF__Categoria__Borra__403A8C7D] DEFAULT ((0)) FOR [Borrado]
END
GO
IF @@ERROR <> 0 SET NOEXEC ON
GO
PRINT N'Adding constraints to [dbo].[DocumentoInstancia]'
GO
IF NOT EXISTS(SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[dbo].[DF_DocumentoInstancia_EsCorrecto]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[DocumentoInstancia] ADD CONSTRAINT [DF_DocumentoInstancia_EsCorrecto] DEFAULT ((0)) FOR [EsCorrecto]
END
GO
IF @@ERROR <> 0 SET NOEXEC ON
GO
IF NOT EXISTS(SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[dbo].[DF_DocumentoInstancia_Bloqueado]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[DocumentoInstancia] ADD CONSTRAINT [DF_DocumentoInstancia_Bloqueado] DEFAULT ((0)) FOR [Bloqueado]
END
GO
IF @@ERROR <> 0 SET NOEXEC ON
GO
PRINT N'Adding constraints to [dbo].[Facultad]'
GO
IF NOT EXISTS(SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[dbo].[DF__Facultad__Borrad__4316F928]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[Facultad] ADD CONSTRAINT [DF__Facultad__Borrad__4316F928] DEFAULT ((0)) FOR [Borrado]
END
GO
IF @@ERROR <> 0 SET NOEXEC ON
GO
PRINT N'Adding constraints to [dbo].[VersionDocumentoInstancia]'
GO
IF NOT EXISTS(SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[dbo].[DF_VersionDocumentoInstancia_EsCorrecto]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[VersionDocumentoInstancia] ADD CONSTRAINT [DF_VersionDocumentoInstancia_EsCorrecto] DEFAULT ((0)) FOR [EsCorrecto]
END
GO
IF @@ERROR <> 0 SET NOEXEC ON
GO
PRINT N'Adding foreign keys to [dbo].[Hecho]'
GO
IF NOT EXISTS(SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[dbo].[FK_Hecho_DocumentoInstancia]') AND type = 'F')
BEGIN
ALTER TABLE [dbo].[Hecho] WITH NOCHECK  ADD CONSTRAINT [FK_Hecho_DocumentoInstancia] FOREIGN KEY ([IdDocumentoInstancia]) REFERENCES [dbo].[DocumentoInstancia] ([IdDocumentoInstancia]) ON DELETE CASCADE
END
IF NOT EXISTS(SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[dbo].[FK_Hecho_Contexto]') AND type = 'F')
BEGIN
ALTER TABLE [dbo].[Hecho] WITH NOCHECK  ADD CONSTRAINT [FK_Hecho_Contexto] FOREIGN KEY ([IdContexto]) REFERENCES [dbo].[Contexto] ([IdContexto])
END
IF NOT EXISTS(SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[dbo].[FK_Hecho_TipoDato]') AND type = 'F')
BEGIN
ALTER TABLE [dbo].[Hecho] WITH NOCHECK  ADD CONSTRAINT [FK_Hecho_TipoDato] FOREIGN KEY ([IdTipoDato]) REFERENCES [dbo].[TipoDato] ([IdTipoDato])
END
IF NOT EXISTS(SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[dbo].[FK_Hecho_Unidad1]') AND type = 'F')
BEGIN
ALTER TABLE [dbo].[Hecho] WITH NOCHECK  ADD CONSTRAINT [FK_Hecho_Unidad1] FOREIGN KEY ([IdUnidad]) REFERENCES [dbo].[Unidad] ([IdUnidad])
END
GO
IF @@ERROR <> 0 SET NOEXEC ON
GO
PRINT N'Adding foreign keys to [dbo].[RolFacultad]'
GO
IF NOT EXISTS(SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[dbo].[FK_RolFacultad_Facultad1]') AND type = 'F')
BEGIN
ALTER TABLE [dbo].[RolFacultad] WITH NOCHECK  ADD CONSTRAINT [FK_RolFacultad_Facultad1] FOREIGN KEY ([IdFacultad]) REFERENCES [dbo].[Facultad] ([IdFacultad])
END
IF NOT EXISTS(SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[dbo].[FK_RolFacultad_Rol]') AND type = 'F')
BEGIN
ALTER TABLE [dbo].[RolFacultad] WITH NOCHECK  ADD CONSTRAINT [FK_RolFacultad_Rol] FOREIGN KEY ([IdRol]) REFERENCES [dbo].[Rol] ([IdRol])
END
GO
IF @@ERROR <> 0 SET NOEXEC ON
GO
PRINT N'Adding foreign keys to [dbo].[UsuarioGrupo]'
GO
IF NOT EXISTS(SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[dbo].[FK_UsuarioGrupo_GrupoUsuarios]') AND type = 'F')
BEGIN
ALTER TABLE [dbo].[UsuarioGrupo] WITH NOCHECK  ADD CONSTRAINT [FK_UsuarioGrupo_GrupoUsuarios] FOREIGN KEY ([IdGrupoUsuarios]) REFERENCES [dbo].[GrupoUsuarios] ([IdGrupoUsuarios])
END
IF NOT EXISTS(SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[dbo].[FK_UsuarioGrupo_Usuario]') AND type = 'F')
BEGIN
ALTER TABLE [dbo].[UsuarioGrupo] WITH NOCHECK  ADD CONSTRAINT [FK_UsuarioGrupo_Usuario] FOREIGN KEY ([IdUsuario]) REFERENCES [dbo].[Usuario] ([IdUsuario])
END
GO
IF @@ERROR <> 0 SET NOEXEC ON
GO
PRINT N'Adding foreign keys to [dbo].[ArchivoTaxonomiaXbrl]'
GO
IF NOT EXISTS(SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[dbo].[FK_ArchivoTaxonomiaXbrl_TaxonomiaXbrl]') AND type = 'F')
BEGIN
ALTER TABLE [dbo].[ArchivoTaxonomiaXbrl] ADD CONSTRAINT [FK_ArchivoTaxonomiaXbrl_TaxonomiaXbrl] FOREIGN KEY ([IdTaxonomiaXbrl]) REFERENCES [dbo].[TaxonomiaXbrl] ([IdTaxonomiaXbrl])
END
GO
IF @@ERROR <> 0 SET NOEXEC ON
GO
PRINT N'Adding foreign keys to [dbo].[DocumentoInstancia]'
GO
IF NOT EXISTS(SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[dbo].[FK_DocumentoInstancia_Empresa]') AND type = 'F')
BEGIN
ALTER TABLE [dbo].[DocumentoInstancia] ADD CONSTRAINT [FK_DocumentoInstancia_Empresa] FOREIGN KEY ([IdEmpresa]) REFERENCES [dbo].[Empresa] ([IdEmpresa])
END
IF NOT EXISTS(SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[dbo].[FK_DocumentoInstancia_Usuario_Ult]') AND type = 'F')
BEGIN
ALTER TABLE [dbo].[DocumentoInstancia] ADD CONSTRAINT [FK_DocumentoInstancia_Usuario_Ult] FOREIGN KEY ([IdUsuarioUltMod]) REFERENCES [dbo].[Usuario] ([IdUsuario])
END
GO
IF @@ERROR <> 0 SET NOEXEC ON
GO
PRINT N'Adding foreign keys to [dbo].[Facultad]'
GO
IF NOT EXISTS(SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[dbo].[FK_Facultad_CategoriaFacultad]') AND type = 'F')
BEGIN
ALTER TABLE [dbo].[Facultad] ADD CONSTRAINT [FK_Facultad_CategoriaFacultad] FOREIGN KEY ([IdCategoriaFacultad]) REFERENCES [dbo].[CategoriaFacultad] ([IdCategoriaFacultad])
END
GO
IF @@ERROR <> 0 SET NOEXEC ON
GO
PRINT N'Adding foreign keys to [dbo].[GrupoUsuariosRol]'
GO
IF NOT EXISTS(SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[dbo].[FK_GrupoUsuariosRol_GrupoUsuarios]') AND type = 'F')
BEGIN
ALTER TABLE [dbo].[GrupoUsuariosRol] ADD CONSTRAINT [FK_GrupoUsuariosRol_GrupoUsuarios] FOREIGN KEY ([IdGrupoUsuario]) REFERENCES [dbo].[GrupoUsuarios] ([IdGrupoUsuarios])
END
IF NOT EXISTS(SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[dbo].[FK_GrupoUsuariosRol_Rol]') AND type = 'F')
BEGIN
ALTER TABLE [dbo].[GrupoUsuariosRol] ADD CONSTRAINT [FK_GrupoUsuariosRol_Rol] FOREIGN KEY ([IdRol]) REFERENCES [dbo].[Rol] ([IdRol])
END
GO
IF @@ERROR <> 0 SET NOEXEC ON
GO
PRINT N'Adding foreign keys to [dbo].[GrupoUsuarios]'
GO
IF NOT EXISTS(SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[dbo].[FK_GrupoUsuarios_Empresa]') AND type = 'F')
BEGIN
ALTER TABLE [dbo].[GrupoUsuarios] ADD CONSTRAINT [FK_GrupoUsuarios_Empresa] FOREIGN KEY ([IdEmpresa]) REFERENCES [dbo].[Empresa] ([IdEmpresa])
END
GO
IF @@ERROR <> 0 SET NOEXEC ON
GO
PRINT N'Adding foreign keys to [dbo].[RegistroAuditoria]'
GO
IF NOT EXISTS(SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[dbo].[FK_RegistroAuditoria_Usuario]') AND type = 'F')
BEGIN
ALTER TABLE [dbo].[RegistroAuditoria] ADD CONSTRAINT [FK_RegistroAuditoria_Usuario] FOREIGN KEY ([IdUsuario]) REFERENCES [dbo].[Usuario] ([IdUsuario])
END
IF NOT EXISTS(SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[dbo].[FK_RegistroAuditoria_Modulo]') AND type = 'F')
BEGIN
ALTER TABLE [dbo].[RegistroAuditoria] ADD CONSTRAINT [FK_RegistroAuditoria_Modulo] FOREIGN KEY ([IdModulo]) REFERENCES [dbo].[Modulo] ([IdModulo])
END
IF NOT EXISTS(SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[dbo].[FK_RegistroAuditoria_AccionAuditable]') AND type = 'F')
BEGIN
ALTER TABLE [dbo].[RegistroAuditoria] ADD CONSTRAINT [FK_RegistroAuditoria_AccionAuditable] FOREIGN KEY ([IdAccionAuditable]) REFERENCES [dbo].[AccionAuditable] ([IdAccionAuditable])
END
IF NOT EXISTS(SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[dbo].[FK_RegistroAuditoria_Empresa]') AND type = 'F')
BEGIN
ALTER TABLE [dbo].[RegistroAuditoria] ADD CONSTRAINT [FK_RegistroAuditoria_Empresa] FOREIGN KEY ([IdEmpresa]) REFERENCES [dbo].[Empresa] ([IdEmpresa])
END
GO
IF @@ERROR <> 0 SET NOEXEC ON
GO
PRINT N'Adding foreign keys to [dbo].[Rol]'
GO
IF NOT EXISTS(SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[dbo].[FK_Rol_Empresa]') AND type = 'F')
BEGIN
ALTER TABLE [dbo].[Rol] ADD CONSTRAINT [FK_Rol_Empresa] FOREIGN KEY ([IdEmpresa]) REFERENCES [dbo].[Empresa] ([IdEmpresa])
END
GO
IF @@ERROR <> 0 SET NOEXEC ON
GO
PRINT N'Adding foreign keys to [dbo].[UsuarioDocumentoInstancia]'
GO
IF NOT EXISTS(SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[dbo].[FK_UsuarioDocumentoInstancia_Usuario]') AND type = 'F')
BEGIN
ALTER TABLE [dbo].[UsuarioDocumentoInstancia] ADD CONSTRAINT [FK_UsuarioDocumentoInstancia_Usuario] FOREIGN KEY ([IdUsuario]) REFERENCES [dbo].[Usuario] ([IdUsuario])
END
GO
IF @@ERROR <> 0 SET NOEXEC ON
GO
PRINT N'Adding foreign keys to [dbo].[UsuarioEmpresa]'
GO
IF NOT EXISTS(SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[dbo].[FK_UsuarioEmpresa_Empresa]') AND type = 'F')
BEGIN
ALTER TABLE [dbo].[UsuarioEmpresa] ADD CONSTRAINT [FK_UsuarioEmpresa_Empresa] FOREIGN KEY ([IdEmpresa]) REFERENCES [dbo].[Empresa] ([IdEmpresa])
END
IF NOT EXISTS(SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[dbo].[FK_UsuarioEmpresa_Usuario]') AND type = 'F')
BEGIN
ALTER TABLE [dbo].[UsuarioEmpresa] ADD CONSTRAINT [FK_UsuarioEmpresa_Usuario] FOREIGN KEY ([IdUsuario]) REFERENCES [dbo].[Usuario] ([IdUsuario])
END
GO
IF @@ERROR <> 0 SET NOEXEC ON
GO
PRINT N'Adding foreign keys to [dbo].[UsuarioRol]'
GO
IF NOT EXISTS(SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[dbo].[FK_UsuarioRol_Rol]') AND type = 'F')
BEGIN
ALTER TABLE [dbo].[UsuarioRol] ADD CONSTRAINT [FK_UsuarioRol_Rol] FOREIGN KEY ([IdRol]) REFERENCES [dbo].[Rol] ([IdRol])
END
IF NOT EXISTS(SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[dbo].[FK_UsuarioRol_Usuario]') AND type = 'F')
BEGIN
ALTER TABLE [dbo].[UsuarioRol] ADD CONSTRAINT [FK_UsuarioRol_Usuario] FOREIGN KEY ([IdUsuario]) REFERENCES [dbo].[Usuario] ([IdUsuario])
END
GO
IF @@ERROR <> 0 SET NOEXEC ON
GO
PRINT N'Adding foreign keys to [dbo].[VersionDocumentoInstancia]'
GO
IF NOT EXISTS(SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[dbo].[FK_VersionDocumentoInstancia_Empresa]') AND type = 'F')
BEGIN
ALTER TABLE [dbo].[VersionDocumentoInstancia] ADD CONSTRAINT [FK_VersionDocumentoInstancia_Empresa] FOREIGN KEY ([IdEmpresa]) REFERENCES [dbo].[Empresa] ([IdEmpresa])
END
IF NOT EXISTS(SELECT * FROM dbo.sysobjects WHERE id = OBJECT_ID(N'[dbo].[FK_VersionDocumentoInstancia_Usuario]') AND type = 'F')
BEGIN
ALTER TABLE [dbo].[VersionDocumentoInstancia] ADD CONSTRAINT [FK_VersionDocumentoInstancia_Usuario] FOREIGN KEY ([IdUsuario]) REFERENCES [dbo].[Usuario] ([IdUsuario])
END
GO
IF @@ERROR <> 0 SET NOEXEC ON
GO
COMMIT TRANSACTION
GO
IF @@ERROR <> 0 SET NOEXEC ON
GO
DECLARE @Success AS BIT
SET @Success = 1
SET NOEXEC OFF
IF (@Success = 1) PRINT 'The database update succeeded'
ELSE BEGIN
	IF @@TRANCOUNT > 0 ROLLBACK TRANSACTION
	PRINT 'The database update failed'
END
GO

UPDATE [TaxonomiaXbrl] SET [EspacioNombresPrincipal] = 'http://www.bmv.com.mx/fr/ics/2012-04-01/ifrs-mx-ics-entryPoint-all'
WHERE [Nombre] = 'IFRS BMV 2013'
GO

UPDATE [TaxonomiaXbrl] SET [EspacioNombresPrincipal] = 'http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_ics_entry_point_2014-12-05'
WHERE [Nombre] = 'IFRS BMV 2015 para ICS'
GO

UPDATE [TaxonomiaXbrl] SET [EspacioNombresPrincipal] = 'http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_sapib_entry_point_2014-12-05'
WHERE [Nombre] = 'IFRS BMV 2015 para SAPIB'
GO

UPDATE [TaxonomiaXbrl] SET [EspacioNombresPrincipal] = 'http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_cp_entry_point_2014-12-05'
WHERE [Nombre] = 'IFRS BMV 2015 para Corto Plazo'
GO

UPDATE [TaxonomiaXbrl] SET [EspacioNombresPrincipal] = 'http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_fibras_entry_point_2014-12-05'
WHERE [Nombre] = 'IFRS BMV 2015 para FIBRAS'
GO

IF NOT EXISTS( SELECT * FROM [dbo].[Facultad] WHERE [IdFacultad] = 63)
BEGIN
SET IDENTITY_INSERT [dbo].[Facultad] ON
INSERT [dbo].[Facultad] ([IdFacultad], [Nombre], [Descripcion], [IdCategoriaFacultad], [Borrado]) VALUES (63, N'Depurar datos bitacora', N'Facultad para eliminar registros antiguos de la bitacora', 5, 0)
SET IDENTITY_INSERT [dbo].[Facultad] OFF
END
GO