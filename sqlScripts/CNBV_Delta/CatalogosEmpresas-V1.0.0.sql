/****** Object:  Table [dbo].[TipoEmpresa] ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
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
GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[EmpresaTipoEmpresa] ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[EmpresaTipoEmpresa](
	[IdEmpresa] [bigint] NOT NULL,
	[IdTipoEmpresa] [bigint] NOT NULL,
 CONSTRAINT [PK_EmpresaTipoEmpresa] PRIMARY KEY CLUSTERED 
(
	[IdEmpresa] ASC, [IdTipoEmpresa] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
ALTER TABLE [dbo].[EmpresaTipoEmpresa]  WITH CHECK ADD  CONSTRAINT [FK_EmpresaTipoEmpresa_Empresa] FOREIGN KEY([IdEmpresa])
REFERENCES [dbo].[Empresa] ([IdEmpresa])
GO
ALTER TABLE [dbo].[EmpresaTipoEmpresa]  WITH CHECK ADD  CONSTRAINT [FK_EmpresaTipoEmpresa_TipoEmpresa] FOREIGN KEY([IdTipoEmpresa])
REFERENCES [dbo].[TipoEmpresa] ([IdTipoEmpresa])
GO
/****** Object:  Table [dbo].[TipoRelacionEmpresa] ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[TipoRelacionEmpresa](
	[IdTipoRelacionEmpresa] [bigint] IDENTITY(1,1) NOT NULL,
	[Nombre] [varchar](50) NOT NULL,
	[Descripcion] [varchar](500) NULL,
 CONSTRAINT [PK_TipoRelacionEmpresa] PRIMARY KEY CLUSTERED 
(
	[IdTipoRelacionEmpresa] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[RelacionEmpresas] ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
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
GO
SET ANSI_PADDING OFF
GO
ALTER TABLE [dbo].[RelacionEmpresas]  WITH CHECK ADD  CONSTRAINT [FK_RelacionEmpresas_Tipo] FOREIGN KEY([IdTipoRelacionEmpresa])
REFERENCES [dbo].[TipoRelacionEmpresa] ([IdTipoRelacionEmpresa])
GO
ALTER TABLE [dbo].[RelacionEmpresas]  WITH CHECK ADD  CONSTRAINT [FK_RelacionEmpresas_Primaria] FOREIGN KEY([IdEmpresaPrimaria])
REFERENCES [dbo].[Empresa] ([IdEmpresa])
GO
ALTER TABLE [dbo].[RelacionEmpresas]  WITH CHECK ADD  CONSTRAINT [FK_RelacionEmpresas_Secundaria] FOREIGN KEY([IdEmpresaSecundaria])
REFERENCES [dbo].[Empresa] ([IdEmpresa])
GO
/****** Object:  Table [dbo].[TipoEmpresaTaxonomiaXbrl] ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[TipoEmpresaTaxonomiaXbrl](
    [IdTipoEmpresa] [bigint] NOT NULL,
	[IdTaxonomiaXbrl] [bigint] NOT NULL,
 CONSTRAINT [PK_TipoEmpresaTaxonomiaXbrl] PRIMARY KEY CLUSTERED 
(
	[IdTipoEmpresa] ASC, [IdTaxonomiaXbrl] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
ALTER TABLE [dbo].[TipoEmpresaTaxonomiaXbrl]  WITH CHECK ADD  CONSTRAINT [FK_TipoEmpresaTaxonomia_Tipo] FOREIGN KEY([IdTipoEmpresa])
REFERENCES [dbo].[TipoEmpresa] ([IdTipoEmpresa])
GO
ALTER TABLE [dbo].[TipoEmpresaTaxonomiaXbrl]  WITH CHECK ADD  CONSTRAINT [FK_TipoEmpresaTaxonomia_Taxonomia] FOREIGN KEY([IdTaxonomiaXbrl])
REFERENCES [dbo].[TaxonomiaXbrl] ([IdTaxonomiaXbrl])
GO
/** Agregamos la columna activo en la tabla de taxonomías si no existe **/
IF NOT EXISTS (SELECT * FROM sys.columns WHERE Name = N'Activa' and Object_ID = Object_ID(N'[dbo].[TaxonomiaXbrl]'))
BEGIN
ALTER TABLE [dbo].[TaxonomiaXbrl] ADD [Activa] [bit] NOT NULL DEFAULT(1)
END
GO

SET IDENTITY_INSERT [dbo].[Facultad] ON
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
SET IDENTITY_INSERT [dbo].[Facultad] OFF
GO
