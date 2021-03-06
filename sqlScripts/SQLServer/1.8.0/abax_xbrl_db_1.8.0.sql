USE [abax_xbrl_db]
GO
/****** Object:  Table [dbo].[AccionAuditable]    Script Date: 07/06/2015 03:19:42 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[AccionAuditable](
	[IdAccionAuditable] [bigint] IDENTITY(1,1) NOT NULL,
	[Nombre] [varchar](200) NOT NULL,
	[Descripcion] [varchar](4000) NULL,
 CONSTRAINT [PK_AccionAuditable] PRIMARY KEY CLUSTERED 
(
	[IdAccionAuditable] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Alerta]    Script Date: 07/06/2015 03:19:42 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Alerta](
	[IdAlerta] [bigint] IDENTITY(1,1) NOT NULL,
	[Contenido] [varchar](4000) NOT NULL,
	[IdUsuario] [bigint] NOT NULL,
	[IdDocumentoInstancia] [bigint] NOT NULL,
	[Fecha] [datetime] NOT NULL,
	[DocumentoCorrecto] [bit] NOT NULL,
 CONSTRAINT [PK_Alerta] PRIMARY KEY CLUSTERED 
(
	[IdAlerta] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[ArchivoTaxonomiaXbrl]    Script Date: 07/06/2015 03:19:42 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[ArchivoTaxonomiaXbrl](
	[IdArchivoTaxonomiaXbrl] [bigint] IDENTITY(1,1) NOT NULL,
	[IdTaxonomiaXbrl] [bigint] NOT NULL,
	[TipoReferencia] [int] NOT NULL,
	[Href] [varchar](1000) NULL,
	[Rol] [varchar](500) NULL,
	[RolUri] [varchar](500) NULL,
 CONSTRAINT [PK_ArchivoTaxonomiaXbrl] PRIMARY KEY CLUSTERED 
(
	[IdArchivoTaxonomiaXbrl] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[CategoriaFacultad]    Script Date: 07/06/2015 03:19:42 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[CategoriaFacultad](
	[IdCategoriaFacultad] [bigint] IDENTITY(1,1) NOT NULL,
	[Nombre] [varchar](200) NOT NULL,
	[Descripcion] [varchar](4000) NULL,
	[Borrado] [bit] NOT NULL,
 CONSTRAINT [PK_CategoriaFacultad] PRIMARY KEY CLUSTERED 
(
	[IdCategoriaFacultad] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Contexto]    Script Date: 07/06/2015 03:19:42 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Contexto](
	[IdContexto] [bigint] IDENTITY(1,1) NOT NULL,
	[Nombre] [varchar](800) NOT NULL,
	[TipoContexto] [int] NOT NULL,
	[Fecha] [datetime] NULL,
	[FechaInicio] [datetime] NULL,
	[FechaFin] [datetime] NULL,
	[PorSiempre] [bit] NULL,
	[Escenario] [varchar](max) NULL,
	[IdDocumentoInstancia] [bigint] NULL,
	[EsquemaEntidad] [varchar](400) NULL,
	[IdentificadorEntidad] [varchar](400) NULL,
	[Segmento] [varchar](max) NULL,
 CONSTRAINT [PK_Contexto] PRIMARY KEY CLUSTERED 
(
	[IdContexto] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[DocumentoInstancia]    Script Date: 07/06/2015 03:19:42 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[DocumentoInstancia](
	[IdDocumentoInstancia] [bigint] IDENTITY(1,1) NOT NULL,
	[Titulo] [varchar](200) NULL,
	[RutaArchivo] [varchar](4000) NULL,
	[FechaCreacion] [datetime] NULL,
	[IdEmpresa] [bigint] NOT NULL,
	[EsCorrecto] [bit] NOT NULL,
	[Bloqueado] [bit] NOT NULL,
	[IdUsuarioBloqueo] [bigint] NULL,
	[IdUsuarioUltMod] [bigint] NULL,
	[FechaUltMod] [datetime] NULL,
	[UltimaVersion] [int] NULL,
	[GruposContextosEquivalentes] [varchar](max) NULL,
	[ParametrosConfiguracion] [varchar](max) NULL,
	[EspacioNombresPrincipal] [varchar](1000) NULL,
 CONSTRAINT [PK_DocumentoInstancia] PRIMARY KEY CLUSTERED 
(
	[IdDocumentoInstancia] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[DtsDocumentoInstancia]    Script Date: 07/06/2015 03:19:42 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[DtsDocumentoInstancia](
	[IdDtsDocumentoInstancia] [bigint] IDENTITY(1,1) NOT NULL,
	[IdDocumentoInstancia] [bigint] NOT NULL,
	[Href] [varchar](4000) NOT NULL,
	[Rol] [varchar](500) NULL,
	[RolUri] [varchar](500) NULL,
	[TipoReferencia] [int] NOT NULL,
 CONSTRAINT [PK_DtsDocumentoInstancia] PRIMARY KEY CLUSTERED 
(
	[IdDtsDocumentoInstancia] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Empresa]    Script Date: 07/06/2015 03:19:42 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Empresa](
	[IdEmpresa] [bigint] IDENTITY(1,1) NOT NULL,
	[RazonSocial] [varchar](400) NOT NULL,
	[NombreCorto] [varchar](50) NOT NULL,
	[RFC] [varchar](50) NULL,
	[DomicilioFiscal] [varchar](2000) NULL,
	[Borrado] [bit] NULL,
 CONSTRAINT [PK_Empresa] PRIMARY KEY CLUSTERED 
(
	[IdEmpresa] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Facultad]    Script Date: 07/06/2015 03:19:42 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Facultad](
	[IdFacultad] [bigint] IDENTITY(1,1) NOT NULL,
	[Nombre] [varchar](200) NOT NULL,
	[Descripcion] [varchar](4000) NULL,
	[IdCategoriaFacultad] [bigint] NOT NULL,
	[Borrado] [bit] NOT NULL,
 CONSTRAINT [PK_Facultad_1] PRIMARY KEY CLUSTERED 
(
	[IdFacultad] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[GrupoUsuarios]    Script Date: 07/06/2015 03:19:42 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[GrupoUsuarios](
	[IdGrupoUsuarios] [bigint] IDENTITY(1,1) NOT NULL,
	[Nombre] [varchar](200) NOT NULL,
	[Descripcion] [varchar](4000) NOT NULL,
	[IdEmpresa] [bigint] NOT NULL,
	[Borrado] [bit] NULL,
 CONSTRAINT [PK_GrupoUsuarios] PRIMARY KEY CLUSTERED 
(
	[IdGrupoUsuarios] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[GrupoUsuariosRol]    Script Date: 07/06/2015 03:19:42 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[GrupoUsuariosRol](
	[IdGrupoUsuariosRol] [bigint] IDENTITY(1,1) NOT NULL,
	[IdGrupoUsuario] [bigint] NOT NULL,
	[IdRol] [bigint] NOT NULL,
 CONSTRAINT [PK_GrupoUsuariosRol] PRIMARY KEY CLUSTERED 
(
	[IdGrupoUsuariosRol] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Hecho]    Script Date: 07/06/2015 03:19:42 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Hecho](
	[IdHecho] [bigint] IDENTITY(1,1) NOT NULL,
	[Concepto] [varchar](4000) NOT NULL,
	[Valor] [varchar](max) NULL,
	[IdContexto] [bigint] NULL,
	[IdUnidad] [bigint] NULL,
	[Precision] [varchar](100) NULL,
	[Decimales] [varchar](100) NULL,
	[IdTipoDato] [bigint] NULL,
	[IdDocumentoInstancia] [bigint] NOT NULL,
	[EspacioNombres] [varchar](4000) NOT NULL,
	[IdConcepto] [varchar](500) NULL,
	[EsTupla] [bit] NOT NULL,
	[IdInternoTuplaPadre] [bigint] NULL,
	[IdInterno] [bigint] NULL,
	[IdRef] [varchar](500) NULL,
 CONSTRAINT [PK_Hecho] PRIMARY KEY CLUSTERED 
(
	[IdHecho] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Modulo]    Script Date: 07/06/2015 03:19:42 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Modulo](
	[IdModulo] [bigint] IDENTITY(1,1) NOT NULL,
	[Nombre] [varchar](200) NOT NULL,
	[Descripcion] [varchar](4000) NULL,
 CONSTRAINT [PK_Modulo] PRIMARY KEY CLUSTERED 
(
	[IdModulo] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[NotaAlPie]    Script Date: 07/06/2015 03:19:42 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[NotaAlPie](
	[IdNotaAlPie] [bigint] IDENTITY(1,1) NOT NULL,
	[Idioma] [varchar](50) NULL,
	[Valor] [varchar](max) NULL,
	[IdDocumentoInstancia] [bigint] NOT NULL,
	[IdRef] [varchar](255) NOT NULL,
	[Rol] [varchar](500) NULL,
 CONSTRAINT [PK_NotaAlPie] PRIMARY KEY CLUSTERED 
(
	[IdNotaAlPie] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[RegistroAuditoria]    Script Date: 07/06/2015 03:19:42 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[RegistroAuditoria](
	[IdRegistroAuditoria] [bigint] IDENTITY(1,1) NOT NULL,
	[Fecha] [datetime] NOT NULL,
	[IdUsuario] [bigint] NOT NULL,
	[IdModulo] [bigint] NOT NULL,
	[IdAccionAuditable] [bigint] NOT NULL,
	[Registro] [varchar](max) NOT NULL,
	[IdEmpresa] [bigint] NULL,
 CONSTRAINT [PK_RegistroAuditoria] PRIMARY KEY CLUSTERED 
(
	[IdRegistroAuditoria] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Rol]    Script Date: 07/06/2015 03:19:42 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Rol](
	[IdRol] [bigint] IDENTITY(1,1) NOT NULL,
	[Nombre] [varchar](200) NOT NULL,
	[Descripcion] [varchar](4000) NULL,
	[IdEmpresa] [bigint] NOT NULL,
	[Borrado] [bit] NULL,
 CONSTRAINT [PK_Rol_1] PRIMARY KEY CLUSTERED 
(
	[IdRol] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[RolFacultad]    Script Date: 07/06/2015 03:19:42 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[RolFacultad](
	[IdRolFacultad] [bigint] IDENTITY(1,1) NOT NULL,
	[IdRol] [bigint] NOT NULL,
	[IdFacultad] [bigint] NOT NULL,
 CONSTRAINT [PK_RolFacultad] PRIMARY KEY CLUSTERED 
(
	[IdRolFacultad] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[TaxonomiaXbrl]    Script Date: 07/06/2015 03:19:42 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[TaxonomiaXbrl](
	[IdTaxonomiaXbrl] [bigint] IDENTITY(1,1) NOT NULL,
	[Nombre] [varchar](300) NULL,
	[Descripcion] [varchar](1000) NULL,
	[Anio] [int] NULL,
	[EspacioNombresPrincipal] [varchar](1000) NULL,
 CONSTRAINT [PK_TaxonomiaXbrl] PRIMARY KEY CLUSTERED 
(
	[IdTaxonomiaXbrl] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[TipoDato]    Script Date: 07/06/2015 03:19:42 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[TipoDato](
	[IdTipoDato] [bigint] NOT NULL,
	[Nombre] [varchar](200) NOT NULL,
	[EsNumerico] [bit] NOT NULL,
	[EsFraccion] [bit] NOT NULL,
	[NombreXbrl] [varchar](200) NOT NULL,
 CONSTRAINT [PK_TipoDato] PRIMARY KEY CLUSTERED 
(
	[IdTipoDato] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Unidad]    Script Date: 07/06/2015 03:19:42 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Unidad](
	[IdUnidad] [bigint] IDENTITY(1,1) NOT NULL,
	[Medida] [varchar](4000) NULL,
	[Numerador] [varchar](4000) NULL,
	[Denominador] [varchar](4000) NULL,
	[EsFraccion] [bit] NOT NULL,
	[IdDocumentoInstancia] [bigint] NULL,
	[IdRef] [varchar](500) NOT NULL,
 CONSTRAINT [PK_Unidad] PRIMARY KEY CLUSTERED 
(
	[IdUnidad] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Usuario]    Script Date: 07/06/2015 03:19:42 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Usuario](
	[IdUsuario] [bigint] IDENTITY(1,1) NOT NULL,
	[Nombre] [varchar](200) NOT NULL,
	[ApellidoPaterno] [varchar](200) NOT NULL,
	[ApellidoMaterno] [varchar](200) NULL,
	[CorreoElectronico] [varchar](400) NOT NULL,
	[Password] [varchar](50) NOT NULL,
	[HistoricoPassword] [varchar](500) NULL,
	[VigenciaPassword] [date] NOT NULL,
	[IntentosErroneosLogin] [int] NULL,
	[Bloqueado] [bit] NOT NULL,
	[Activo] [bit] NOT NULL,
	[Puesto] [varchar](200) NULL,
	[Borrado] [bit] NULL,
	[TipoUsuario] [int] NULL,
	[TokenSesion] [varchar](4000) NULL,
 CONSTRAINT [PK_Usuario_1] PRIMARY KEY CLUSTERED 
(
	[IdUsuario] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[UsuarioDocumentoInstancia]    Script Date: 07/06/2015 03:19:42 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UsuarioDocumentoInstancia](
	[IdusuarioDocumentoInstancia] [bigint] IDENTITY(1,1) NOT NULL,
	[IdUsuario] [bigint] NOT NULL,
	[IdDocumentoInstancia] [bigint] NOT NULL,
	[PuedeEscribir] [bit] NOT NULL,
	[PuedeLeer] [bit] NOT NULL,
	[EsDueno] [bit] NOT NULL,
 CONSTRAINT [PK_UsuarioDocumentoInstancia] PRIMARY KEY CLUSTERED 
(
	[IdusuarioDocumentoInstancia] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[UsuarioEmpresa]    Script Date: 07/06/2015 03:19:42 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UsuarioEmpresa](
	[IdUsuarioEmpresa] [bigint] IDENTITY(1,1) NOT NULL,
	[IdUsuario] [bigint] NOT NULL,
	[IdEmpresa] [bigint] NOT NULL,
 CONSTRAINT [PK_UsuarioEmpresa] PRIMARY KEY CLUSTERED 
(
	[IdUsuarioEmpresa] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[UsuarioGrupo]    Script Date: 07/06/2015 03:19:42 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UsuarioGrupo](
	[IdUsuarioGrupo] [bigint] IDENTITY(1,1) NOT NULL,
	[IdUsuario] [bigint] NOT NULL,
	[IdGrupoUsuarios] [bigint] NOT NULL,
 CONSTRAINT [PK_UsuarioGrupo] PRIMARY KEY CLUSTERED 
(
	[IdUsuarioGrupo] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[UsuarioRol]    Script Date: 07/06/2015 03:19:42 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UsuarioRol](
	[IdUsuarioRol] [bigint] IDENTITY(1,1) NOT NULL,
	[IdUsuario] [bigint] NOT NULL,
	[IdRol] [bigint] NOT NULL,
 CONSTRAINT [PK_UsuarioRol] PRIMARY KEY CLUSTERED 
(
	[IdUsuarioRol] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[VersionDocumentoInstancia]    Script Date: 07/06/2015 03:19:42 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[VersionDocumentoInstancia](
	[IdVersionDocumentoInstancia] [bigint] IDENTITY(1,1) NOT NULL,
	[IdDocumentoInstancia] [bigint] NOT NULL,
	[Version] [int] NOT NULL,
	[IdUsuario] [bigint] NOT NULL,
	[Fecha] [datetime] NOT NULL,
	[Comentarios] [varchar](4000) NULL,
	[Datos] [varchar](max) NOT NULL,
	[IdEmpresa] [bigint] NOT NULL,
	[EsCorrecto] [bit] NOT NULL,
 CONSTRAINT [PK_VersionDocumentoInstancia] PRIMARY KEY CLUSTERED 
(
	[IdVersionDocumentoInstancia] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [IX_IdConcepto]    Script Date: 07/06/2015 03:19:42 p. m. ******/
CREATE NONCLUSTERED INDEX [IX_IdConcepto] ON [dbo].[Hecho]
(
	[IdConcepto] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_IdContexto]    Script Date: 07/06/2015 03:19:42 p. m. ******/
CREATE NONCLUSTERED INDEX [IX_IdContexto] ON [dbo].[Hecho]
(
	[IdContexto] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_IdDocumentoInstancia]    Script Date: 07/06/2015 03:19:42 p. m. ******/
CREATE NONCLUSTERED INDEX [IX_IdDocumentoInstancia] ON [dbo].[Hecho]
(
	[IdDocumentoInstancia] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_IdUnidad]    Script Date: 07/06/2015 03:19:42 p. m. ******/
CREATE NONCLUSTERED INDEX [IX_IdUnidad] ON [dbo].[Hecho]
(
	[IdUnidad] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
ALTER TABLE [dbo].[CategoriaFacultad] ADD  DEFAULT ((0)) FOR [Borrado]
GO
ALTER TABLE [dbo].[DocumentoInstancia] ADD  CONSTRAINT [DF_DocumentoInstancia_EsCorrecto]  DEFAULT ((0)) FOR [EsCorrecto]
GO
ALTER TABLE [dbo].[DocumentoInstancia] ADD  CONSTRAINT [DF_DocumentoInstancia_Bloqueado]  DEFAULT ((0)) FOR [Bloqueado]
GO
ALTER TABLE [dbo].[Facultad] ADD  DEFAULT ((0)) FOR [Borrado]
GO
ALTER TABLE [dbo].[VersionDocumentoInstancia] ADD  CONSTRAINT [DF_VersionDocumentoInstancia_EsCorrecto]  DEFAULT ((0)) FOR [EsCorrecto]
GO
ALTER TABLE [dbo].[Alerta]  WITH CHECK ADD  CONSTRAINT [FK_Alerta_DocumentoInstancia] FOREIGN KEY([IdDocumentoInstancia])
REFERENCES [dbo].[DocumentoInstancia] ([IdDocumentoInstancia])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Alerta] CHECK CONSTRAINT [FK_Alerta_DocumentoInstancia]
GO
ALTER TABLE [dbo].[ArchivoTaxonomiaXbrl]  WITH CHECK ADD  CONSTRAINT [FK_ArchivoTaxonomiaXbrl_TaxonomiaXbrl] FOREIGN KEY([IdTaxonomiaXbrl])
REFERENCES [dbo].[TaxonomiaXbrl] ([IdTaxonomiaXbrl])
GO
ALTER TABLE [dbo].[ArchivoTaxonomiaXbrl] CHECK CONSTRAINT [FK_ArchivoTaxonomiaXbrl_TaxonomiaXbrl]
GO
ALTER TABLE [dbo].[Contexto]  WITH NOCHECK ADD  CONSTRAINT [FK_Contexto_DocumentoInstancia] FOREIGN KEY([IdDocumentoInstancia])
REFERENCES [dbo].[DocumentoInstancia] ([IdDocumentoInstancia])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Contexto] CHECK CONSTRAINT [FK_Contexto_DocumentoInstancia]
GO
ALTER TABLE [dbo].[DocumentoInstancia]  WITH CHECK ADD  CONSTRAINT [FK_DocumentoInstancia_Empresa] FOREIGN KEY([IdEmpresa])
REFERENCES [dbo].[Empresa] ([IdEmpresa])
GO
ALTER TABLE [dbo].[DocumentoInstancia] CHECK CONSTRAINT [FK_DocumentoInstancia_Empresa]
GO
ALTER TABLE [dbo].[DocumentoInstancia]  WITH CHECK ADD  CONSTRAINT [FK_DocumentoInstancia_Usuario_Ult] FOREIGN KEY([IdUsuarioUltMod])
REFERENCES [dbo].[Usuario] ([IdUsuario])
GO
ALTER TABLE [dbo].[DocumentoInstancia] CHECK CONSTRAINT [FK_DocumentoInstancia_Usuario_Ult]
GO
ALTER TABLE [dbo].[DtsDocumentoInstancia]  WITH CHECK ADD  CONSTRAINT [FK_DtsDocumentoInstancia_DocumentoInstancia] FOREIGN KEY([IdDocumentoInstancia])
REFERENCES [dbo].[DocumentoInstancia] ([IdDocumentoInstancia])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[DtsDocumentoInstancia] CHECK CONSTRAINT [FK_DtsDocumentoInstancia_DocumentoInstancia]
GO
ALTER TABLE [dbo].[Facultad]  WITH CHECK ADD  CONSTRAINT [FK_Facultad_CategoriaFacultad] FOREIGN KEY([IdCategoriaFacultad])
REFERENCES [dbo].[CategoriaFacultad] ([IdCategoriaFacultad])
GO
ALTER TABLE [dbo].[Facultad] CHECK CONSTRAINT [FK_Facultad_CategoriaFacultad]
GO
ALTER TABLE [dbo].[GrupoUsuarios]  WITH CHECK ADD  CONSTRAINT [FK_GrupoUsuarios_Empresa] FOREIGN KEY([IdEmpresa])
REFERENCES [dbo].[Empresa] ([IdEmpresa])
GO
ALTER TABLE [dbo].[GrupoUsuarios] CHECK CONSTRAINT [FK_GrupoUsuarios_Empresa]
GO
ALTER TABLE [dbo].[GrupoUsuariosRol]  WITH CHECK ADD  CONSTRAINT [FK_GrupoUsuariosRol_GrupoUsuarios] FOREIGN KEY([IdGrupoUsuario])
REFERENCES [dbo].[GrupoUsuarios] ([IdGrupoUsuarios])
GO
ALTER TABLE [dbo].[GrupoUsuariosRol] CHECK CONSTRAINT [FK_GrupoUsuariosRol_GrupoUsuarios]
GO
ALTER TABLE [dbo].[GrupoUsuariosRol]  WITH CHECK ADD  CONSTRAINT [FK_GrupoUsuariosRol_Rol] FOREIGN KEY([IdRol])
REFERENCES [dbo].[Rol] ([IdRol])
GO
ALTER TABLE [dbo].[GrupoUsuariosRol] CHECK CONSTRAINT [FK_GrupoUsuariosRol_Rol]
GO
ALTER TABLE [dbo].[Hecho]  WITH NOCHECK ADD  CONSTRAINT [FK_Hecho_Contexto] FOREIGN KEY([IdContexto])
REFERENCES [dbo].[Contexto] ([IdContexto])
GO
ALTER TABLE [dbo].[Hecho] CHECK CONSTRAINT [FK_Hecho_Contexto]
GO
ALTER TABLE [dbo].[Hecho]  WITH NOCHECK ADD  CONSTRAINT [FK_Hecho_DocumentoInstancia] FOREIGN KEY([IdDocumentoInstancia])
REFERENCES [dbo].[DocumentoInstancia] ([IdDocumentoInstancia])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Hecho] CHECK CONSTRAINT [FK_Hecho_DocumentoInstancia]
GO
ALTER TABLE [dbo].[Hecho]  WITH CHECK ADD  CONSTRAINT [FK_Hecho_TipoDato] FOREIGN KEY([IdTipoDato])
REFERENCES [dbo].[TipoDato] ([IdTipoDato])
GO
ALTER TABLE [dbo].[Hecho] CHECK CONSTRAINT [FK_Hecho_TipoDato]
GO
ALTER TABLE [dbo].[Hecho]  WITH NOCHECK ADD  CONSTRAINT [FK_Hecho_Unidad] FOREIGN KEY([IdUnidad])
REFERENCES [dbo].[Unidad] ([IdUnidad])
GO
ALTER TABLE [dbo].[Hecho] CHECK CONSTRAINT [FK_Hecho_Unidad]
GO
ALTER TABLE [dbo].[NotaAlPie]  WITH NOCHECK ADD  CONSTRAINT [FK_NotaAlPie_DocumentoInstancia] FOREIGN KEY([IdDocumentoInstancia])
REFERENCES [dbo].[DocumentoInstancia] ([IdDocumentoInstancia])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[NotaAlPie] CHECK CONSTRAINT [FK_NotaAlPie_DocumentoInstancia]
GO
ALTER TABLE [dbo].[RegistroAuditoria]  WITH CHECK ADD  CONSTRAINT [FK_RegistroAuditoria_AccionAuditable] FOREIGN KEY([IdAccionAuditable])
REFERENCES [dbo].[AccionAuditable] ([IdAccionAuditable])
GO
ALTER TABLE [dbo].[RegistroAuditoria] CHECK CONSTRAINT [FK_RegistroAuditoria_AccionAuditable]
GO
ALTER TABLE [dbo].[RegistroAuditoria]  WITH CHECK ADD  CONSTRAINT [FK_RegistroAuditoria_Empresa] FOREIGN KEY([IdEmpresa])
REFERENCES [dbo].[Empresa] ([IdEmpresa])
GO
ALTER TABLE [dbo].[RegistroAuditoria] CHECK CONSTRAINT [FK_RegistroAuditoria_Empresa]
GO
ALTER TABLE [dbo].[RegistroAuditoria]  WITH CHECK ADD  CONSTRAINT [FK_RegistroAuditoria_Modulo] FOREIGN KEY([IdModulo])
REFERENCES [dbo].[Modulo] ([IdModulo])
GO
ALTER TABLE [dbo].[RegistroAuditoria] CHECK CONSTRAINT [FK_RegistroAuditoria_Modulo]
GO
ALTER TABLE [dbo].[RegistroAuditoria]  WITH CHECK ADD  CONSTRAINT [FK_RegistroAuditoria_Usuario] FOREIGN KEY([IdUsuario])
REFERENCES [dbo].[Usuario] ([IdUsuario])
GO
ALTER TABLE [dbo].[RegistroAuditoria] CHECK CONSTRAINT [FK_RegistroAuditoria_Usuario]
GO
ALTER TABLE [dbo].[Rol]  WITH CHECK ADD  CONSTRAINT [FK_Rol_Empresa] FOREIGN KEY([IdEmpresa])
REFERENCES [dbo].[Empresa] ([IdEmpresa])
GO
ALTER TABLE [dbo].[Rol] CHECK CONSTRAINT [FK_Rol_Empresa]
GO
ALTER TABLE [dbo].[RolFacultad]  WITH NOCHECK ADD  CONSTRAINT [FK_RolFacultad_Facultad1] FOREIGN KEY([IdFacultad])
REFERENCES [dbo].[Facultad] ([IdFacultad])
GO
ALTER TABLE [dbo].[RolFacultad] CHECK CONSTRAINT [FK_RolFacultad_Facultad1]
GO
ALTER TABLE [dbo].[RolFacultad]  WITH NOCHECK ADD  CONSTRAINT [FK_RolFacultad_Rol] FOREIGN KEY([IdRol])
REFERENCES [dbo].[Rol] ([IdRol])
GO
ALTER TABLE [dbo].[RolFacultad] CHECK CONSTRAINT [FK_RolFacultad_Rol]
GO
ALTER TABLE [dbo].[Unidad]  WITH CHECK ADD  CONSTRAINT [FK_Unidad_DocumentoInstancia] FOREIGN KEY([IdDocumentoInstancia])
REFERENCES [dbo].[DocumentoInstancia] ([IdDocumentoInstancia])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Unidad] CHECK CONSTRAINT [FK_Unidad_DocumentoInstancia]
GO
ALTER TABLE [dbo].[UsuarioDocumentoInstancia]  WITH CHECK ADD  CONSTRAINT [FK_UsuarioDocumentoInstancia_DocumentoInstancia] FOREIGN KEY([IdDocumentoInstancia])
REFERENCES [dbo].[DocumentoInstancia] ([IdDocumentoInstancia])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[UsuarioDocumentoInstancia] CHECK CONSTRAINT [FK_UsuarioDocumentoInstancia_DocumentoInstancia]
GO
ALTER TABLE [dbo].[UsuarioDocumentoInstancia]  WITH CHECK ADD  CONSTRAINT [FK_UsuarioDocumentoInstancia_Usuario] FOREIGN KEY([IdUsuario])
REFERENCES [dbo].[Usuario] ([IdUsuario])
GO
ALTER TABLE [dbo].[UsuarioDocumentoInstancia] CHECK CONSTRAINT [FK_UsuarioDocumentoInstancia_Usuario]
GO
ALTER TABLE [dbo].[UsuarioEmpresa]  WITH CHECK ADD  CONSTRAINT [FK_UsuarioEmpresa_Empresa] FOREIGN KEY([IdEmpresa])
REFERENCES [dbo].[Empresa] ([IdEmpresa])
GO
ALTER TABLE [dbo].[UsuarioEmpresa] CHECK CONSTRAINT [FK_UsuarioEmpresa_Empresa]
GO
ALTER TABLE [dbo].[UsuarioEmpresa]  WITH CHECK ADD  CONSTRAINT [FK_UsuarioEmpresa_Usuario] FOREIGN KEY([IdUsuario])
REFERENCES [dbo].[Usuario] ([IdUsuario])
GO
ALTER TABLE [dbo].[UsuarioEmpresa] CHECK CONSTRAINT [FK_UsuarioEmpresa_Usuario]
GO
ALTER TABLE [dbo].[UsuarioGrupo]  WITH NOCHECK ADD  CONSTRAINT [FK_UsuarioGrupo_GrupoUsuarios] FOREIGN KEY([IdGrupoUsuarios])
REFERENCES [dbo].[GrupoUsuarios] ([IdGrupoUsuarios])
GO
ALTER TABLE [dbo].[UsuarioGrupo] CHECK CONSTRAINT [FK_UsuarioGrupo_GrupoUsuarios]
GO
ALTER TABLE [dbo].[UsuarioGrupo]  WITH NOCHECK ADD  CONSTRAINT [FK_UsuarioGrupo_Usuario] FOREIGN KEY([IdUsuario])
REFERENCES [dbo].[Usuario] ([IdUsuario])
GO
ALTER TABLE [dbo].[UsuarioGrupo] CHECK CONSTRAINT [FK_UsuarioGrupo_Usuario]
GO
ALTER TABLE [dbo].[UsuarioRol]  WITH CHECK ADD  CONSTRAINT [FK_UsuarioRol_Rol] FOREIGN KEY([IdRol])
REFERENCES [dbo].[Rol] ([IdRol])
GO
ALTER TABLE [dbo].[UsuarioRol] CHECK CONSTRAINT [FK_UsuarioRol_Rol]
GO
ALTER TABLE [dbo].[UsuarioRol]  WITH CHECK ADD  CONSTRAINT [FK_UsuarioRol_Usuario] FOREIGN KEY([IdUsuario])
REFERENCES [dbo].[Usuario] ([IdUsuario])
GO
ALTER TABLE [dbo].[UsuarioRol] CHECK CONSTRAINT [FK_UsuarioRol_Usuario]
GO
ALTER TABLE [dbo].[VersionDocumentoInstancia]  WITH CHECK ADD  CONSTRAINT [FK_VersionDocumentoInstancia_DocumentoInstancia] FOREIGN KEY([IdDocumentoInstancia])
REFERENCES [dbo].[DocumentoInstancia] ([IdDocumentoInstancia])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[VersionDocumentoInstancia] CHECK CONSTRAINT [FK_VersionDocumentoInstancia_DocumentoInstancia]
GO
ALTER TABLE [dbo].[VersionDocumentoInstancia]  WITH CHECK ADD  CONSTRAINT [FK_VersionDocumentoInstancia_Empresa] FOREIGN KEY([IdEmpresa])
REFERENCES [dbo].[Empresa] ([IdEmpresa])
GO
ALTER TABLE [dbo].[VersionDocumentoInstancia] CHECK CONSTRAINT [FK_VersionDocumentoInstancia_Empresa]
GO
ALTER TABLE [dbo].[VersionDocumentoInstancia]  WITH CHECK ADD  CONSTRAINT [FK_VersionDocumentoInstancia_Usuario] FOREIGN KEY([IdUsuario])
REFERENCES [dbo].[Usuario] ([IdUsuario])
GO
ALTER TABLE [dbo].[VersionDocumentoInstancia] CHECK CONSTRAINT [FK_VersionDocumentoInstancia_Usuario]
GO

SET ANSI_PADDING OFF
GO

SET IDENTITY_INSERT [dbo].[Empresa] ON
INSERT [dbo].[Empresa] ([IdEmpresa], [RazonSocial], [NombreCorto], [RFC], [DomicilioFiscal], [Borrado]) VALUES (1, N'Grupo ALCON SA de CV', N'ALCON', N'GOFE860831EX1', N'Domicilio', 0)
SET IDENTITY_INSERT [dbo].[Empresa] OFF

SET IDENTITY_INSERT [dbo].[Usuario] ON
INSERT [dbo].[Usuario] ([IdUsuario], [Nombre], [ApellidoPaterno], [ApellidoMaterno], [CorreoElectronico], [Password], [HistoricoPassword], [VigenciaPassword], [IntentosErroneosLogin], [Bloqueado], [Activo], [Puesto], [Borrado]) VALUES (3, N'Administrador', N'Administrador', N'Administrador', N'admin@admin.com', N'76DCD53F4765203853F14B107D393B3910105A20b9k5iIg=', N'76DCD53F4765203853F14B107D393B3910105A20b9k5iIg=', CAST(0xDD390B00 AS Date), 0, 0, 1, N'Administrador', 0)
SET IDENTITY_INSERT [dbo].[Usuario] OFF

SET IDENTITY_INSERT [dbo].[UsuarioEmpresa] ON
INSERT [dbo].[UsuarioEmpresa] ([IdUsuarioEmpresa], [IdUsuario], [IdEmpresa]) VALUES (133, 3, 1)
SET IDENTITY_INSERT [dbo].[UsuarioEmpresa] OFF

SET IDENTITY_INSERT [dbo].[Rol] ON
INSERT [dbo].[Rol] ([IdRol], [Nombre], [Descripcion], [IdEmpresa], [Borrado]) VALUES (93, N'Administrador General', N'Rol con todos los privilegios de Abax XBRL', 1, 0)
INSERT [dbo].[Rol] ([IdRol], [Nombre], [Descripcion], [IdEmpresa], [Borrado]) VALUES (104, N'Administrador', N'Administrador con restricciones de creación de Empresas, Roles, Grupos, Usuarios, Usuarios Empresa', 1, 0)
INSERT [dbo].[Rol] ([IdRol], [Nombre], [Descripcion], [IdEmpresa], [Borrado]) VALUES (10124, N'Usuario Negocio', N'Rol con privilegios para el Tablero de Control,  Editor XBRL', 1, 0)
INSERT [dbo].[Rol] ([IdRol], [Nombre], [Descripcion], [IdEmpresa], [Borrado]) VALUES (10125, N'Usuario Negocio solo lectura', N'Rol con privilegios para el Tablero de Control,  Editor XBRL de solo lectura', 1, 0)
SET IDENTITY_INSERT [dbo].[Rol] OFF

SET IDENTITY_INSERT [dbo].[UsuarioRol] ON
INSERT [dbo].[UsuarioRol] ([IdUsuarioRol], [IdUsuario], [IdRol]) VALUES (10063, 3, 93)
INSERT [dbo].[UsuarioRol] ([IdUsuarioRol], [IdUsuario], [IdRol]) VALUES (10064, 3, 10124)
SET IDENTITY_INSERT [dbo].[UsuarioRol] OFF

SET IDENTITY_INSERT [dbo].[CategoriaFacultad] ON
INSERT [dbo].[CategoriaFacultad] ([IdCategoriaFacultad], [Nombre], [Descripcion], [Borrado]) VALUES (1, N'Facultades Usuarios ', N'Categoria de Facultades de Modulo Usuario', 0)
INSERT [dbo].[CategoriaFacultad] ([IdCategoriaFacultad], [Nombre], [Descripcion], [Borrado]) VALUES (2, N'Facultades Roles', N'Categoria de Facultades de Modulo Roles', 0)
INSERT [dbo].[CategoriaFacultad] ([IdCategoriaFacultad], [Nombre], [Descripcion], [Borrado]) VALUES (3, N'Facultades Empresas', N'Categoria de Facultades de Modulo Empresa', 0)
INSERT [dbo].[CategoriaFacultad] ([IdCategoriaFacultad], [Nombre], [Descripcion], [Borrado]) VALUES (4, N'Facultades Grupos', N'Categoria de Facultades de Modulo Grupos', 0)
INSERT [dbo].[CategoriaFacultad] ([IdCategoriaFacultad], [Nombre], [Descripcion], [Borrado]) VALUES (5, N'Facultades de Bitacora', N'Categoria de Facultades de Modulo Bitacora', 0)
INSERT [dbo].[CategoriaFacultad] ([IdCategoriaFacultad], [Nombre], [Descripcion], [Borrado]) VALUES (6, N'Facultades de Documentos de Instancia', N'Categoria de Facultades de Modulo de Documentos Instancia', 0)
INSERT [dbo].[CategoriaFacultad] ([IdCategoriaFacultad], [Nombre], [Descripcion], [Borrado]) VALUES (7, N'Facultades Misma Empresa', N'Categoria de Facultades de Empresa en Sesión', 0)
INSERT [dbo].[CategoriaFacultad] ([IdCategoriaFacultad], [Nombre], [Descripcion], [Borrado]) VALUES (9, N'Facultades Misma Empresa', N'Categoria de Facultades de Empresa en Sesión', 0)
SET IDENTITY_INSERT [dbo].[CategoriaFacultad] OFF

SET ANSI_PADDING OFF
GO
SET IDENTITY_INSERT [dbo].[Facultad] ON
INSERT [dbo].[Facultad] ([IdFacultad], [Nombre], [Descripcion], [IdCategoriaFacultad], [Borrado]) VALUES (1, N'Insertar Usuario', N'Facultad para Insertar Usuarios', 1, 0)
INSERT [dbo].[Facultad] ([IdFacultad], [Nombre], [Descripcion], [IdCategoriaFacultad], [Borrado]) VALUES (2, N'Editar Usuario', N'Facultad para Editar Usuarios', 1, 0)
INSERT [dbo].[Facultad] ([IdFacultad], [Nombre], [Descripcion], [IdCategoriaFacultad], [Borrado]) VALUES (3, N'Eliminar Usuario', N'Facultad para Eliminar Usuarios', 1, 0)
INSERT [dbo].[Facultad] ([IdFacultad], [Nombre], [Descripcion], [IdCategoriaFacultad], [Borrado]) VALUES (4, N'Asignar Emisoras', N'Facultad para Asignar Emisoras', 1, 0)
INSERT [dbo].[Facultad] ([IdFacultad], [Nombre], [Descripcion], [IdCategoriaFacultad], [Borrado]) VALUES (5, N'Activar/Desactivar Usuarios', N'Facultad para Activar/Desactivar Usuarios', 1, 0)
INSERT [dbo].[Facultad] ([IdFacultad], [Nombre], [Descripcion], [IdCategoriaFacultad], [Borrado]) VALUES (6, N'Bloquear/Desbloquear Usuarios', N'Facultad para Bloquear/Desbloquear Usuarios', 1, 0)
INSERT [dbo].[Facultad] ([IdFacultad], [Nombre], [Descripcion], [IdCategoriaFacultad], [Borrado]) VALUES (7, N'Generara Nueva Contraseña', N'Facultad para Generar Nueva Contraseña', 1, 0)
INSERT [dbo].[Facultad] ([IdFacultad], [Nombre], [Descripcion], [IdCategoriaFacultad], [Borrado]) VALUES (8, N'Insertar Roles', N'Facultad para Insertar Roles', 2, 0)
INSERT [dbo].[Facultad] ([IdFacultad], [Nombre], [Descripcion], [IdCategoriaFacultad], [Borrado]) VALUES (9, N'Editar Roles', N'Facultad para Editar Roles', 2, 0)
INSERT [dbo].[Facultad] ([IdFacultad], [Nombre], [Descripcion], [IdCategoriaFacultad], [Borrado]) VALUES (10, N'Eliminar Roles', N'Facultad para Eliminar Roles', 2, 0)
INSERT [dbo].[Facultad] ([IdFacultad], [Nombre], [Descripcion], [IdCategoriaFacultad], [Borrado]) VALUES (11, N'Asignar Facultades', N'Facultad para Asignar Facultades', 2, 0)
INSERT [dbo].[Facultad] ([IdFacultad], [Nombre], [Descripcion], [IdCategoriaFacultad], [Borrado]) VALUES (12, N'Insertar Empresas', N'Facultad para Insertar Empresas', 3, 0)
INSERT [dbo].[Facultad] ([IdFacultad], [Nombre], [Descripcion], [IdCategoriaFacultad], [Borrado]) VALUES (13, N'Editar Empresas', N'Facultad para Editar Empresas', 3, 0)
INSERT [dbo].[Facultad] ([IdFacultad], [Nombre], [Descripcion], [IdCategoriaFacultad], [Borrado]) VALUES (14, N'Eliminar Empresas', N'Facultad para Eliminar Empresas', 3, 0)
INSERT [dbo].[Facultad] ([IdFacultad], [Nombre], [Descripcion], [IdCategoriaFacultad], [Borrado]) VALUES (15, N'Insertar Grupos', N'Facultad para Insertar Grupos', 4, 0)
INSERT [dbo].[Facultad] ([IdFacultad], [Nombre], [Descripcion], [IdCategoriaFacultad], [Borrado]) VALUES (16, N'Editar Grupos', N'Facultad para Editar Grupos', 4, 0)
INSERT [dbo].[Facultad] ([IdFacultad], [Nombre], [Descripcion], [IdCategoriaFacultad], [Borrado]) VALUES (17, N'Eliminar Grupos', N'Facultad para Eliminar Grupos', 4, 0)
INSERT [dbo].[Facultad] ([IdFacultad], [Nombre], [Descripcion], [IdCategoriaFacultad], [Borrado]) VALUES (18, N'Asignar Roles', N'Facultad para Asignar Roles', 4, 0)
INSERT [dbo].[Facultad] ([IdFacultad], [Nombre], [Descripcion], [IdCategoriaFacultad], [Borrado]) VALUES (19, N'Asignar Usuarios', N'Facultad para Asignar Usuarios', 4, 0)
INSERT [dbo].[Facultad] ([IdFacultad], [Nombre], [Descripcion], [IdCategoriaFacultad], [Borrado]) VALUES (20, N'Consulta de Grupos', N'Facultad para Consultar Grupos', 1, 0)
INSERT [dbo].[Facultad] ([IdFacultad], [Nombre], [Descripcion], [IdCategoriaFacultad], [Borrado]) VALUES (21, N'Consulta de Roles', N'Facultad para Consulta de Roles', 2, 0)
INSERT [dbo].[Facultad] ([IdFacultad], [Nombre], [Descripcion], [IdCategoriaFacultad], [Borrado]) VALUES (22, N'Consulta de Empresas', N'Facultad para Consultar Empresas', 3, 0)
INSERT [dbo].[Facultad] ([IdFacultad], [Nombre], [Descripcion], [IdCategoriaFacultad], [Borrado]) VALUES (23, N'Consulta de  Usuarios', N'Facultad para Consultar Usuarios', 4, 0)
INSERT [dbo].[Facultad] ([IdFacultad], [Nombre], [Descripcion], [IdCategoriaFacultad], [Borrado]) VALUES (24, N'Exportar Datos de Usuario', N'Facultad para Exportar Datos de Usuario', 1, 0)
INSERT [dbo].[Facultad] ([IdFacultad], [Nombre], [Descripcion], [IdCategoriaFacultad], [Borrado]) VALUES (25, N'Exportar Datos de Roles', N'Facultad para Exportar Datos de Roles', 2, 0)
INSERT [dbo].[Facultad] ([IdFacultad], [Nombre], [Descripcion], [IdCategoriaFacultad], [Borrado]) VALUES (26, N'Exportar Datos de Empresa', N'Facultad para Exportar Datos de Empresa', 3, 0)
INSERT [dbo].[Facultad] ([IdFacultad], [Nombre], [Descripcion], [IdCategoriaFacultad], [Borrado]) VALUES (27, N'Exportar Datos de Grupos', N'Facultad para Exportar Datos de Grupos', 4, 0)
INSERT [dbo].[Facultad] ([IdFacultad], [Nombre], [Descripcion], [IdCategoriaFacultad], [Borrado]) VALUES (28, N'Consultar Datos de Bitacora', N'Facultad para Consultar Datos de Bitacora', 5, 0)
INSERT [dbo].[Facultad] ([IdFacultad], [Nombre], [Descripcion], [IdCategoriaFacultad], [Borrado]) VALUES (29, N'Exportar Datos de Bitacora', N'Facultad para Exportar Datos de Bitacora', 5, 0)
INSERT [dbo].[Facultad] ([IdFacultad], [Nombre], [Descripcion], [IdCategoriaFacultad], [Borrado]) VALUES (30, N'Asignar Roles a Usuario', N'Facultad para Asignar Roles a Usuario', 1, 0)
INSERT [dbo].[Facultad] ([IdFacultad], [Nombre], [Descripcion], [IdCategoriaFacultad], [Borrado]) VALUES (32, N'Insertar Usuario Misma Empresa', N'Facultad para Insertar Usuarios Misma Empresa', 7, 0)
INSERT [dbo].[Facultad] ([IdFacultad], [Nombre], [Descripcion], [IdCategoriaFacultad], [Borrado]) VALUES (33, N'Editar Usuario Misma Empresa', N'Facultad para Insertar Usuarios Misma Empresa', 7, 0)
INSERT [dbo].[Facultad] ([IdFacultad], [Nombre], [Descripcion], [IdCategoriaFacultad], [Borrado]) VALUES (34, N'Eliminar Usuario Misma Empresa', N'Facultad para Insertar Usuarios Misma Empresa', 7, 0)
INSERT [dbo].[Facultad] ([IdFacultad], [Nombre], [Descripcion], [IdCategoriaFacultad], [Borrado]) VALUES (35, N'Asignar Roles a Usuario Misma Empresa', N'Facultad para Asignar Roles a Usuario Misma Empresa', 7, 0)
INSERT [dbo].[Facultad] ([IdFacultad], [Nombre], [Descripcion], [IdCategoriaFacultad], [Borrado]) VALUES (36, N'Consulta de  Usuarios Misma Empresa', N'Facultad para Consulta de  Usuarios Misma Empresa', 7, 0)
INSERT [dbo].[Facultad] ([IdFacultad], [Nombre], [Descripcion], [IdCategoriaFacultad], [Borrado]) VALUES (37, N'Exportar Datos de Usuario Misma Empresa', N'Facultad para Exportar Datos de Usuario Misma Empresa', 7, 0)
INSERT [dbo].[Facultad] ([IdFacultad], [Nombre], [Descripcion], [IdCategoriaFacultad], [Borrado]) VALUES (38, N'Activar/Desactivar Usuarios Misma Empresa', N'Facultad para Activar/Desactivar Usuarios Misma Empresa', 7, 0)
INSERT [dbo].[Facultad] ([IdFacultad], [Nombre], [Descripcion], [IdCategoriaFacultad], [Borrado]) VALUES (39, N'Bloquear/Desbloquear Usuarios Misma Empresa', N'Facultad para Bloquear/Desbloquear Usuarios Misma Empresa', 7, 0)
INSERT [dbo].[Facultad] ([IdFacultad], [Nombre], [Descripcion], [IdCategoriaFacultad], [Borrado]) VALUES (40, N'Generara Nueva Contraseña Misma Empresa', N'Facultad para Generar Nueva Contraseña Misma Empresa', 7, 0)
INSERT [dbo].[Facultad] ([IdFacultad], [Nombre], [Descripcion], [IdCategoriaFacultad], [Borrado]) VALUES (41, N'Insertar Usuario Misma Empresa', N'Facultad para Insertar Usuarios Misma Empresa', 7, 0)
INSERT [dbo].[Facultad] ([IdFacultad], [Nombre], [Descripcion], [IdCategoriaFacultad], [Borrado]) VALUES (42, N'Editar Usuario Misma Empresa', N'Facultad para Insertar Usuarios Misma Empresa', 7, 0)
INSERT [dbo].[Facultad] ([IdFacultad], [Nombre], [Descripcion], [IdCategoriaFacultad], [Borrado]) VALUES (43, N'Eliminar Usuario Misma Empresa', N'Facultad para Insertar Usuarios Misma Empresa', 7, 0)
INSERT [dbo].[Facultad] ([IdFacultad], [Nombre], [Descripcion], [IdCategoriaFacultad], [Borrado]) VALUES (44, N'Asignar Roles a Usuario Misma Empresa', N'Facultad para Asignar Roles a Usuario Misma Empresa', 7, 0)
INSERT [dbo].[Facultad] ([IdFacultad], [Nombre], [Descripcion], [IdCategoriaFacultad], [Borrado]) VALUES (45, N'Consulta de  Usuarios Misma Empresa', N'Facultad para Consulta de  Usuarios Misma Empresa', 7, 0)
INSERT [dbo].[Facultad] ([IdFacultad], [Nombre], [Descripcion], [IdCategoriaFacultad], [Borrado]) VALUES (46, N'Exportar Datos de Usuario Misma Empresa', N'Facultad para Exportar Datos de Usuario Misma Empresa', 7, 0)
INSERT [dbo].[Facultad] ([IdFacultad], [Nombre], [Descripcion], [IdCategoriaFacultad], [Borrado]) VALUES (47, N'Activar/Desactivar Usuarios Misma Empresa', N'Facultad para Activar/Desactivar Usuarios Misma Empresa', 7, 0)
INSERT [dbo].[Facultad] ([IdFacultad], [Nombre], [Descripcion], [IdCategoriaFacultad], [Borrado]) VALUES (48, N'Bloquear/Desbloquear Usuarios Misma Empresa', N'Facultad para Bloquear/Desbloquear Usuarios Misma Empresa', 7, 0)
INSERT [dbo].[Facultad] ([IdFacultad], [Nombre], [Descripcion], [IdCategoriaFacultad], [Borrado]) VALUES (49, N'Generara Nueva Contraseña Misma Empresa', N'Facultad para Generar Nueva Contraseña Misma Empresa', 7, 0)
INSERT [dbo].[Facultad] ([IdFacultad], [Nombre], [Descripcion], [IdCategoriaFacultad], [Borrado]) VALUES (50, N'Fantasma', N'facultad fantasma', 7, 1)
INSERT [dbo].[Facultad] ([IdFacultad], [Nombre], [Descripcion], [IdCategoriaFacultad], [Borrado]) VALUES (51, N'Crear documento instancia', N'Facultad para Crear Documento instancia XBRL', 6, 0)
INSERT [dbo].[Facultad] ([IdFacultad], [Nombre], [Descripcion], [IdCategoriaFacultad], [Borrado]) VALUES (52, N'Opción de Listado documento instancia', N'Facultad para Listado de documentos instancia', 6, 0)
INSERT [dbo].[Facultad] ([IdFacultad], [Nombre], [Descripcion], [IdCategoriaFacultad], [Borrado]) VALUES (53, N'Consultar documento instancia', N'Facultad para Consultar documentos instancias', 6, 0)
INSERT [dbo].[Facultad] ([IdFacultad], [Nombre], [Descripcion], [IdCategoriaFacultad], [Borrado]) VALUES (54, N'Editar documento instancia', N'Facultad para Editar documento instancia', 6, 0)
INSERT [dbo].[Facultad] ([IdFacultad], [Nombre], [Descripcion], [IdCategoriaFacultad], [Borrado]) VALUES (55, N'Eliminar documento instancia', N'Facultad para Eliminar documento instancia', 6, 0)
INSERT [dbo].[Facultad] ([IdFacultad], [Nombre], [Descripcion], [IdCategoriaFacultad], [Borrado]) VALUES (56, N'Importar documento instancia', N'Facultad para Importar documento instancia (Excel)', 6, 0)
INSERT [dbo].[Facultad] ([IdFacultad], [Nombre], [Descripcion], [IdCategoriaFacultad], [Borrado]) VALUES (57, N'Exportar documento instancia', N'Facultad para Exportar documento instancia (XBRL,Excel, Word, Pdf, Html)', 6, 0)
INSERT [dbo].[Facultad] ([IdFacultad], [Nombre], [Descripcion], [IdCategoriaFacultad], [Borrado]) VALUES (58, N'Importar notas documento instancia', N'Facultad para Importar notas de un documento ', 6, 0)
INSERT [dbo].[Facultad] ([IdFacultad], [Nombre], [Descripcion], [IdCategoriaFacultad], [Borrado]) VALUES (59, N'Bloquear documentos instancia', N'Facultad para Bloquear y desbloquear documentos', 6, 0)
INSERT [dbo].[Facultad] ([IdFacultad], [Nombre], [Descripcion], [IdCategoriaFacultad], [Borrado]) VALUES (60, N'Guardar documento instancia', N'Facultad para Guardar documento instancia', 6, 0)
INSERT [dbo].[Facultad] ([IdFacultad], [Nombre], [Descripcion], [IdCategoriaFacultad], [Borrado]) VALUES (61, N'Compartir documento instancia', N'Facultad para Compartir documento instancia', 6, 0)
INSERT [dbo].[Facultad] ([IdFacultad], [Nombre], [Descripcion], [IdCategoriaFacultad], [Borrado]) VALUES (62, N'Historial documento instancia', N'Facultad para el historial del documento instancia', 6, 0)
INSERT [dbo].[Facultad] ([IdFacultad], [Nombre], [Descripcion], [IdCategoriaFacultad], [Borrado]) VALUES (63, N'Depurar datos bitacora', N'Facultad para eliminar registros antiguos de la bitacora', 5, 0)
SET IDENTITY_INSERT [dbo].[Facultad] OFF

SET IDENTITY_INSERT [dbo].[RolFacultad] ON
INSERT [dbo].[RolFacultad] ([IdRolFacultad], [IdRol], [IdFacultad]) VALUES (1099, 93, 4)
INSERT [dbo].[RolFacultad] ([IdRolFacultad], [IdRol], [IdFacultad]) VALUES (1100, 93, 5)
INSERT [dbo].[RolFacultad] ([IdRolFacultad], [IdRol], [IdFacultad]) VALUES (1101, 93, 6)
INSERT [dbo].[RolFacultad] ([IdRolFacultad], [IdRol], [IdFacultad]) VALUES (1102, 93, 7)
INSERT [dbo].[RolFacultad] ([IdRolFacultad], [IdRol], [IdFacultad]) VALUES (1103, 93, 20)
INSERT [dbo].[RolFacultad] ([IdRolFacultad], [IdRol], [IdFacultad]) VALUES (1104, 93, 24)
INSERT [dbo].[RolFacultad] ([IdRolFacultad], [IdRol], [IdFacultad]) VALUES (1105, 93, 8)
INSERT [dbo].[RolFacultad] ([IdRolFacultad], [IdRol], [IdFacultad]) VALUES (1106, 93, 9)
INSERT [dbo].[RolFacultad] ([IdRolFacultad], [IdRol], [IdFacultad]) VALUES (1107, 93, 10)
INSERT [dbo].[RolFacultad] ([IdRolFacultad], [IdRol], [IdFacultad]) VALUES (1108, 93, 11)
INSERT [dbo].[RolFacultad] ([IdRolFacultad], [IdRol], [IdFacultad]) VALUES (1109, 93, 21)
INSERT [dbo].[RolFacultad] ([IdRolFacultad], [IdRol], [IdFacultad]) VALUES (1110, 93, 25)
INSERT [dbo].[RolFacultad] ([IdRolFacultad], [IdRol], [IdFacultad]) VALUES (1111, 93, 15)
INSERT [dbo].[RolFacultad] ([IdRolFacultad], [IdRol], [IdFacultad]) VALUES (1112, 93, 16)
INSERT [dbo].[RolFacultad] ([IdRolFacultad], [IdRol], [IdFacultad]) VALUES (1113, 93, 17)
INSERT [dbo].[RolFacultad] ([IdRolFacultad], [IdRol], [IdFacultad]) VALUES (1114, 93, 18)
INSERT [dbo].[RolFacultad] ([IdRolFacultad], [IdRol], [IdFacultad]) VALUES (1115, 93, 19)
INSERT [dbo].[RolFacultad] ([IdRolFacultad], [IdRol], [IdFacultad]) VALUES (1116, 93, 27)
INSERT [dbo].[RolFacultad] ([IdRolFacultad], [IdRol], [IdFacultad]) VALUES (1117, 93, 28)
INSERT [dbo].[RolFacultad] ([IdRolFacultad], [IdRol], [IdFacultad]) VALUES (1118, 93, 29)
INSERT [dbo].[RolFacultad] ([IdRolFacultad], [IdRol], [IdFacultad]) VALUES (1119, 93, 40)
INSERT [dbo].[RolFacultad] ([IdRolFacultad], [IdRol], [IdFacultad]) VALUES (1120, 93, 41)
INSERT [dbo].[RolFacultad] ([IdRolFacultad], [IdRol], [IdFacultad]) VALUES (1121, 93, 42)
INSERT [dbo].[RolFacultad] ([IdRolFacultad], [IdRol], [IdFacultad]) VALUES (1122, 93, 44)
GO
print 'Processed 200 total records'
INSERT [dbo].[RolFacultad] ([IdRolFacultad], [IdRol], [IdFacultad]) VALUES (1123, 93, 45)
INSERT [dbo].[RolFacultad] ([IdRolFacultad], [IdRol], [IdFacultad]) VALUES (1124, 93, 46)
INSERT [dbo].[RolFacultad] ([IdRolFacultad], [IdRol], [IdFacultad]) VALUES (1125, 93, 47)
INSERT [dbo].[RolFacultad] ([IdRolFacultad], [IdRol], [IdFacultad]) VALUES (1126, 93, 48)
INSERT [dbo].[RolFacultad] ([IdRolFacultad], [IdRol], [IdFacultad]) VALUES (1127, 93, 49)
INSERT [dbo].[RolFacultad] ([IdRolFacultad], [IdRol], [IdFacultad]) VALUES (1128, 93, 2)
INSERT [dbo].[RolFacultad] ([IdRolFacultad], [IdRol], [IdFacultad]) VALUES (1129, 93, 1)
INSERT [dbo].[RolFacultad] ([IdRolFacultad], [IdRol], [IdFacultad]) VALUES (1130, 93, 38)
INSERT [dbo].[RolFacultad] ([IdRolFacultad], [IdRol], [IdFacultad]) VALUES (1131, 93, 30)
INSERT [dbo].[RolFacultad] ([IdRolFacultad], [IdRol], [IdFacultad]) VALUES (1132, 93, 35)
INSERT [dbo].[RolFacultad] ([IdRolFacultad], [IdRol], [IdFacultad]) VALUES (1133, 93, 39)
INSERT [dbo].[RolFacultad] ([IdRolFacultad], [IdRol], [IdFacultad]) VALUES (1134, 93, 36)
INSERT [dbo].[RolFacultad] ([IdRolFacultad], [IdRol], [IdFacultad]) VALUES (1136, 93, 13)
INSERT [dbo].[RolFacultad] ([IdRolFacultad], [IdRol], [IdFacultad]) VALUES (1137, 93, 33)
INSERT [dbo].[RolFacultad] ([IdRolFacultad], [IdRol], [IdFacultad]) VALUES (1138, 93, 14)
INSERT [dbo].[RolFacultad] ([IdRolFacultad], [IdRol], [IdFacultad]) VALUES (1139, 93, 3)
INSERT [dbo].[RolFacultad] ([IdRolFacultad], [IdRol], [IdFacultad]) VALUES (1140, 93, 43)
INSERT [dbo].[RolFacultad] ([IdRolFacultad], [IdRol], [IdFacultad]) VALUES (1141, 93, 34)
INSERT [dbo].[RolFacultad] ([IdRolFacultad], [IdRol], [IdFacultad]) VALUES (1142, 93, 26)
INSERT [dbo].[RolFacultad] ([IdRolFacultad], [IdRol], [IdFacultad]) VALUES (1143, 93, 37)
INSERT [dbo].[RolFacultad] ([IdRolFacultad], [IdRol], [IdFacultad]) VALUES (1144, 93, 12)
INSERT [dbo].[RolFacultad] ([IdRolFacultad], [IdRol], [IdFacultad]) VALUES (1145, 93, 32)
INSERT [dbo].[RolFacultad] ([IdRolFacultad], [IdRol], [IdFacultad]) VALUES (1146, 93, 23)
INSERT [dbo].[RolFacultad] ([IdRolFacultad], [IdRol], [IdFacultad]) VALUES (1147, 93, 22)
INSERT [dbo].[RolFacultad] ([IdRolFacultad], [IdRol], [IdFacultad]) VALUES (11148, 104, 11)
INSERT [dbo].[RolFacultad] ([IdRolFacultad], [IdRol], [IdFacultad]) VALUES (11149, 104, 20)
INSERT [dbo].[RolFacultad] ([IdRolFacultad], [IdRol], [IdFacultad]) VALUES (11150, 104, 21)
INSERT [dbo].[RolFacultad] ([IdRolFacultad], [IdRol], [IdFacultad]) VALUES (11151, 104, 28)
INSERT [dbo].[RolFacultad] ([IdRolFacultad], [IdRol], [IdFacultad]) VALUES (11152, 104, 9)
INSERT [dbo].[RolFacultad] ([IdRolFacultad], [IdRol], [IdFacultad]) VALUES (11153, 104, 2)
INSERT [dbo].[RolFacultad] ([IdRolFacultad], [IdRol], [IdFacultad]) VALUES (11154, 104, 42)
INSERT [dbo].[RolFacultad] ([IdRolFacultad], [IdRol], [IdFacultad]) VALUES (11155, 104, 10)
INSERT [dbo].[RolFacultad] ([IdRolFacultad], [IdRol], [IdFacultad]) VALUES (11156, 104, 29)
INSERT [dbo].[RolFacultad] ([IdRolFacultad], [IdRol], [IdFacultad]) VALUES (11157, 104, 26)
INSERT [dbo].[RolFacultad] ([IdRolFacultad], [IdRol], [IdFacultad]) VALUES (11158, 104, 27)
INSERT [dbo].[RolFacultad] ([IdRolFacultad], [IdRol], [IdFacultad]) VALUES (11159, 104, 25)
INSERT [dbo].[RolFacultad] ([IdRolFacultad], [IdRol], [IdFacultad]) VALUES (11160, 104, 24)
INSERT [dbo].[RolFacultad] ([IdRolFacultad], [IdRol], [IdFacultad]) VALUES (11161, 104, 12)
INSERT [dbo].[RolFacultad] ([IdRolFacultad], [IdRol], [IdFacultad]) VALUES (11162, 104, 8)
INSERT [dbo].[RolFacultad] ([IdRolFacultad], [IdRol], [IdFacultad]) VALUES (11163, 104, 32)
INSERT [dbo].[RolFacultad] ([IdRolFacultad], [IdRol], [IdFacultad]) VALUES (11164, 104, 35)
INSERT [dbo].[RolFacultad] ([IdRolFacultad], [IdRol], [IdFacultad]) VALUES (11165, 93, 51)
INSERT [dbo].[RolFacultad] ([IdRolFacultad], [IdRol], [IdFacultad]) VALUES (11166, 93, 60)
INSERT [dbo].[RolFacultad] ([IdRolFacultad], [IdRol], [IdFacultad]) VALUES (11167, 93, 52)
INSERT [dbo].[RolFacultad] ([IdRolFacultad], [IdRol], [IdFacultad]) VALUES (11168, 93, 54)
INSERT [dbo].[RolFacultad] ([IdRolFacultad], [IdRol], [IdFacultad]) VALUES (11179, 10124, 59)
INSERT [dbo].[RolFacultad] ([IdRolFacultad], [IdRol], [IdFacultad]) VALUES (11180, 10124, 61)
INSERT [dbo].[RolFacultad] ([IdRolFacultad], [IdRol], [IdFacultad]) VALUES (11181, 10124, 53)
INSERT [dbo].[RolFacultad] ([IdRolFacultad], [IdRol], [IdFacultad]) VALUES (11182, 10124, 51)
INSERT [dbo].[RolFacultad] ([IdRolFacultad], [IdRol], [IdFacultad]) VALUES (11183, 10124, 54)
INSERT [dbo].[RolFacultad] ([IdRolFacultad], [IdRol], [IdFacultad]) VALUES (11184, 10124, 29)
INSERT [dbo].[RolFacultad] ([IdRolFacultad], [IdRol], [IdFacultad]) VALUES (11185, 10124, 26)
INSERT [dbo].[RolFacultad] ([IdRolFacultad], [IdRol], [IdFacultad]) VALUES (11186, 10124, 57)
INSERT [dbo].[RolFacultad] ([IdRolFacultad], [IdRol], [IdFacultad]) VALUES (11187, 10124, 7)
INSERT [dbo].[RolFacultad] ([IdRolFacultad], [IdRol], [IdFacultad]) VALUES (11188, 10124, 60)
INSERT [dbo].[RolFacultad] ([IdRolFacultad], [IdRol], [IdFacultad]) VALUES (11189, 10124, 62)
INSERT [dbo].[RolFacultad] ([IdRolFacultad], [IdRol], [IdFacultad]) VALUES (11190, 10124, 56)
INSERT [dbo].[RolFacultad] ([IdRolFacultad], [IdRol], [IdFacultad]) VALUES (11191, 10124, 58)
INSERT [dbo].[RolFacultad] ([IdRolFacultad], [IdRol], [IdFacultad]) VALUES (11192, 10124, 52)
INSERT [dbo].[RolFacultad] ([IdRolFacultad], [IdRol], [IdFacultad]) VALUES (11193, 93, 63)
SET IDENTITY_INSERT [dbo].[RolFacultad] OFF

SET IDENTITY_INSERT [dbo].[TaxonomiaXbrl] ON
INSERT [dbo].[TaxonomiaXbrl] ([IdTaxonomiaXbrl], [Nombre], [Descripcion], [Anio]) VALUES (1, N'IFRS BMV 2013', N'Taxonomía IFRS de la BMV 2013', 2013)
INSERT [dbo].[TaxonomiaXbrl] ([IdTaxonomiaXbrl], [Nombre], [Descripcion], [Anio]) VALUES (2, N'IFRS BMV 2015 para ICS', N'Taxonomía IFRS de la BMV 2015 para Empresas Comerciales y de Servicios', 2015)
INSERT [dbo].[TaxonomiaXbrl] ([IdTaxonomiaXbrl], [Nombre], [Descripcion], [Anio]) VALUES (3, N'IFRS BMV 2015 para SAPIB', N'Taxonomía IFRS de la BMV 2015 para Empresas de Sociedad Anónima Promotora de Inversión Bursátil', 2015)
INSERT [dbo].[TaxonomiaXbrl] ([IdTaxonomiaXbrl], [Nombre], [Descripcion], [Anio]) VALUES (4, N'IFRS BMV 2015 para Corto Plazo', N'Taxonomía IFRS de la BMV 2015 para Empresas de Corto Plazo', 2015)
INSERT [dbo].[TaxonomiaXbrl] ([IdTaxonomiaXbrl], [Nombre], [Descripcion], [Anio]) VALUES (5, N'IFRS BMV 2015 para FIBRAS', N'Taxonomía IFRS de la BMV 2015 para Fideicomisos de Inversión en Bienes Raíces', 2015)
SET IDENTITY_INSERT [dbo].[TaxonomiaXbrl] OFF


SET ANSI_PADDING OFF
GO
SET IDENTITY_INSERT [dbo].[ArchivoTaxonomiaXbrl] ON
INSERT [dbo].[ArchivoTaxonomiaXbrl] ([IdArchivoTaxonomiaXbrl], [IdTaxonomiaXbrl], [TipoReferencia], [Href], [Rol], [RolUri]) VALUES (1, 1, 1, N'http://emisnet.bmv.com.mx/taxonomy/mx-ifrs-ics-2012-04-01/All/ifrs-mx-ics-entryPoint-all-2012-04-01.xsd', NULL, NULL)
INSERT [dbo].[ArchivoTaxonomiaXbrl] ([IdArchivoTaxonomiaXbrl], [IdTaxonomiaXbrl], [TipoReferencia], [Href], [Rol], [RolUri]) VALUES (2, 2, 1, N'http://emisnet.bmv.com.mx/taxonomy/mx-ifrs-2014-12-05/full_ifrs_mc_mx_ics_entry_point_2014-12-05.xsd', NULL, NULL)
INSERT [dbo].[ArchivoTaxonomiaXbrl] ([IdArchivoTaxonomiaXbrl], [IdTaxonomiaXbrl], [TipoReferencia], [Href], [Rol], [RolUri]) VALUES (3, 3, 1, N'http://emisnet.bmv.com.mx/taxonomy/mx-ifrs-2014-12-05/full_ifrs_mc_mx_sapib_entry_point_2014-12-05.xsd', NULL, NULL)
INSERT [dbo].[ArchivoTaxonomiaXbrl] ([IdArchivoTaxonomiaXbrl], [IdTaxonomiaXbrl], [TipoReferencia], [Href], [Rol], [RolUri]) VALUES (4, 4, 1, N'http://emisnet.bmv.com.mx/taxonomy/mx-ifrs-2014-12-05/full_ifrs_mc_mx_cp_entry_point_2014-12-05.xsd', NULL, NULL)
INSERT [dbo].[ArchivoTaxonomiaXbrl] ([IdArchivoTaxonomiaXbrl], [IdTaxonomiaXbrl], [TipoReferencia], [Href], [Rol], [RolUri]) VALUES (5, 5, 1, N'http://emisnet.bmv.com.mx/taxonomy/mx-ifrs-2014-12-05/full_ifrs_mc_mx_fibras_entry_point_2014-12-05.xsd', NULL, NULL)
SET IDENTITY_INSERT [dbo].[ArchivoTaxonomiaXbrl] OFF

SET ANSI_PADDING OFF
GO
INSERT [dbo].[TipoDato] ([IdTipoDato], [Nombre], [EsNumerico], [EsFraccion], [NombreXbrl]) VALUES (1, N'http://www.xbrl.org/2003/instance:decimalItemType', 1, 0, N'decimal')
INSERT [dbo].[TipoDato] ([IdTipoDato], [Nombre], [EsNumerico], [EsFraccion], [NombreXbrl]) VALUES (2, N'http://www.xbrl.org/2003/instance:floatItemType', 1, 0, N'float')
INSERT [dbo].[TipoDato] ([IdTipoDato], [Nombre], [EsNumerico], [EsFraccion], [NombreXbrl]) VALUES (3, N'http://www.xbrl.org/2003/instance:doubleItemType', 1, 0, N'double')
INSERT [dbo].[TipoDato] ([IdTipoDato], [Nombre], [EsNumerico], [EsFraccion], [NombreXbrl]) VALUES (4, N'http://www.xbrl.org/2003/instance:integerItemType', 1, 0, N'decimal')
INSERT [dbo].[TipoDato] ([IdTipoDato], [Nombre], [EsNumerico], [EsFraccion], [NombreXbrl]) VALUES (5, N'http://www.xbrl.org/2003/instance:nonPositiveIntegerItemType', 1, 0, N'decimal')
INSERT [dbo].[TipoDato] ([IdTipoDato], [Nombre], [EsNumerico], [EsFraccion], [NombreXbrl]) VALUES (6, N'http://www.xbrl.org/2003/instance:negativeIntegerItemType', 1, 0, N'decimal')
INSERT [dbo].[TipoDato] ([IdTipoDato], [Nombre], [EsNumerico], [EsFraccion], [NombreXbrl]) VALUES (7, N'http://www.xbrl.org/2003/instance:longItemType', 1, 0, N'decimal')
INSERT [dbo].[TipoDato] ([IdTipoDato], [Nombre], [EsNumerico], [EsFraccion], [NombreXbrl]) VALUES (8, N'http://www.xbrl.org/2003/instance:intItemType', 1, 0, N'decimal')
INSERT [dbo].[TipoDato] ([IdTipoDato], [Nombre], [EsNumerico], [EsFraccion], [NombreXbrl]) VALUES (9, N'http://www.xbrl.org/2003/instance:shortItemType', 1, 0, N'decimal')
INSERT [dbo].[TipoDato] ([IdTipoDato], [Nombre], [EsNumerico], [EsFraccion], [NombreXbrl]) VALUES (10, N'http://www.xbrl.org/2003/instance:byteItemType', 1, 0, N'decimal')
INSERT [dbo].[TipoDato] ([IdTipoDato], [Nombre], [EsNumerico], [EsFraccion], [NombreXbrl]) VALUES (11, N'http://www.xbrl.org/2003/instance:nonNegativeIntegerItemType', 1, 0, N'decimal')
INSERT [dbo].[TipoDato] ([IdTipoDato], [Nombre], [EsNumerico], [EsFraccion], [NombreXbrl]) VALUES (12, N'http://www.xbrl.org/2003/instance:unsignedLongItemType', 1, 0, N'decimal')
INSERT [dbo].[TipoDato] ([IdTipoDato], [Nombre], [EsNumerico], [EsFraccion], [NombreXbrl]) VALUES (13, N'http://www.xbrl.org/2003/instance:unsignedIntItemType', 1, 0, N'decimal')
INSERT [dbo].[TipoDato] ([IdTipoDato], [Nombre], [EsNumerico], [EsFraccion], [NombreXbrl]) VALUES (14, N'http://www.xbrl.org/2003/instance:unsignedShortItemType', 1, 0, N'decimal')
INSERT [dbo].[TipoDato] ([IdTipoDato], [Nombre], [EsNumerico], [EsFraccion], [NombreXbrl]) VALUES (15, N'http://www.xbrl.org/2003/instance:unsignedByteItemType', 1, 0, N'decimal')
INSERT [dbo].[TipoDato] ([IdTipoDato], [Nombre], [EsNumerico], [EsFraccion], [NombreXbrl]) VALUES (16, N'http://www.xbrl.org/2003/instance:positiveIntegerItemType', 1, 0, N'decimal')
INSERT [dbo].[TipoDato] ([IdTipoDato], [Nombre], [EsNumerico], [EsFraccion], [NombreXbrl]) VALUES (17, N'http://www.xbrl.org/2003/instance:monetaryItemType', 1, 0, N'decimal')
INSERT [dbo].[TipoDato] ([IdTipoDato], [Nombre], [EsNumerico], [EsFraccion], [NombreXbrl]) VALUES (18, N'http://www.xbrl.org/2003/instance:sharesItemType', 1, 0, N'decimal')
INSERT [dbo].[TipoDato] ([IdTipoDato], [Nombre], [EsNumerico], [EsFraccion], [NombreXbrl]) VALUES (19, N'http://www.xbrl.org/2003/instance:pureItemType', 1, 0, N'decimal')
INSERT [dbo].[TipoDato] ([IdTipoDato], [Nombre], [EsNumerico], [EsFraccion], [NombreXbrl]) VALUES (20, N'http://www.xbrl.org/2003/instance:fractionItemType', 1, 1, N'fraction')
INSERT [dbo].[TipoDato] ([IdTipoDato], [Nombre], [EsNumerico], [EsFraccion], [NombreXbrl]) VALUES (21, N'http://www.xbrl.org/2003/instance:stringItemType', 0, 0, N'string')
INSERT [dbo].[TipoDato] ([IdTipoDato], [Nombre], [EsNumerico], [EsFraccion], [NombreXbrl]) VALUES (22, N'http://www.xbrl.org/2003/instance:booleanItemType', 0, 0, N'boolean')
INSERT [dbo].[TipoDato] ([IdTipoDato], [Nombre], [EsNumerico], [EsFraccion], [NombreXbrl]) VALUES (23, N'http://www.xbrl.org/2003/instance:hexBinaryItemType', 0, 0, N'hexBinary')
INSERT [dbo].[TipoDato] ([IdTipoDato], [Nombre], [EsNumerico], [EsFraccion], [NombreXbrl]) VALUES (24, N'http://www.xbrl.org/2003/instance:base64BinaryItemType', 0, 0, N'base64Binary')
INSERT [dbo].[TipoDato] ([IdTipoDato], [Nombre], [EsNumerico], [EsFraccion], [NombreXbrl]) VALUES (25, N'http://www.xbrl.org/2003/instance:anyURIItemType', 0, 0, N'anyURI')
INSERT [dbo].[TipoDato] ([IdTipoDato], [Nombre], [EsNumerico], [EsFraccion], [NombreXbrl]) VALUES (26, N'http://www.xbrl.org/2003/instance:QNameItemType', 0, 0, N'Qname')
INSERT [dbo].[TipoDato] ([IdTipoDato], [Nombre], [EsNumerico], [EsFraccion], [NombreXbrl]) VALUES (27, N'http://www.xbrl.org/2003/instance:durationItemType', 0, 0, N'duration')
INSERT [dbo].[TipoDato] ([IdTipoDato], [Nombre], [EsNumerico], [EsFraccion], [NombreXbrl]) VALUES (28, N'http://www.xbrl.org/2003/instance:dateTimeItemType', 0, 0, N'dateTime')
INSERT [dbo].[TipoDato] ([IdTipoDato], [Nombre], [EsNumerico], [EsFraccion], [NombreXbrl]) VALUES (29, N'http://www.xbrl.org/2003/instance:timeItemType', 0, 0, N'time')
INSERT [dbo].[TipoDato] ([IdTipoDato], [Nombre], [EsNumerico], [EsFraccion], [NombreXbrl]) VALUES (30, N'http://www.xbrl.org/2003/instance:dateItemType', 0, 0, N'date')
INSERT [dbo].[TipoDato] ([IdTipoDato], [Nombre], [EsNumerico], [EsFraccion], [NombreXbrl]) VALUES (31, N'http://www.xbrl.org/2003/instance:gYearMonthItemType', 0, 0, N'gYearMonth')
INSERT [dbo].[TipoDato] ([IdTipoDato], [Nombre], [EsNumerico], [EsFraccion], [NombreXbrl]) VALUES (32, N'http://www.xbrl.org/2003/instance:gYearItemType', 0, 0, N'gYear')
INSERT [dbo].[TipoDato] ([IdTipoDato], [Nombre], [EsNumerico], [EsFraccion], [NombreXbrl]) VALUES (33, N'http://www.xbrl.org/2003/instance:gMonthDayItemType', 0, 0, N'gMonthDay')
INSERT [dbo].[TipoDato] ([IdTipoDato], [Nombre], [EsNumerico], [EsFraccion], [NombreXbrl]) VALUES (34, N'http://www.xbrl.org/2003/instance:gDayItemType', 0, 0, N'gDay')
INSERT [dbo].[TipoDato] ([IdTipoDato], [Nombre], [EsNumerico], [EsFraccion], [NombreXbrl]) VALUES (35, N'http://www.xbrl.org/2003/instance:gMonthItemType', 0, 0, N'gMonth')
INSERT [dbo].[TipoDato] ([IdTipoDato], [Nombre], [EsNumerico], [EsFraccion], [NombreXbrl]) VALUES (36, N'http://www.xbrl.org/2003/instance:normalizedStringItemType', 0, 0, N'string')
INSERT [dbo].[TipoDato] ([IdTipoDato], [Nombre], [EsNumerico], [EsFraccion], [NombreXbrl]) VALUES (37, N'http://www.xbrl.org/2003/instance:tokenItemType', 0, 0, N'string')
INSERT [dbo].[TipoDato] ([IdTipoDato], [Nombre], [EsNumerico], [EsFraccion], [NombreXbrl]) VALUES (38, N'http://www.xbrl.org/2003/instance:languageItemType', 0, 0, N'string')
INSERT [dbo].[TipoDato] ([IdTipoDato], [Nombre], [EsNumerico], [EsFraccion], [NombreXbrl]) VALUES (39, N'http://www.xbrl.org/2003/instance:NameItemType', 0, 0, N'string')
INSERT [dbo].[TipoDato] ([IdTipoDato], [Nombre], [EsNumerico], [EsFraccion], [NombreXbrl]) VALUES (40, N'http://www.xbrl.org/2003/instance:NCNameItemType', 0, 0, N'string')
INSERT [dbo].[TipoDato] ([IdTipoDato], [Nombre], [EsNumerico], [EsFraccion], [NombreXbrl]) VALUES (41, N'http://www.xbrl.org/dtr/type/non-numeric:textBlockItemType', 0, 0, N'string')

SET IDENTITY_INSERT [dbo].[AccionAuditable] ON
INSERT [dbo].[AccionAuditable] ([IdAccionAuditable], [Nombre], [Descripcion]) VALUES (1, N'Login', N'Acción auditable del registro de la autenticación de los usuarios en el sitio')
INSERT [dbo].[AccionAuditable] ([IdAccionAuditable], [Nombre], [Descripcion]) VALUES (2, N'Insertar', N'Accion auditable de inserciones  en la aplicacion')
INSERT [dbo].[AccionAuditable] ([IdAccionAuditable], [Nombre], [Descripcion]) VALUES (3, N'Actualizar', N'Accion auditable de actualizaciones  en la aplicacion')
INSERT [dbo].[AccionAuditable] ([IdAccionAuditable], [Nombre], [Descripcion]) VALUES (4, N'Borrar', N' Accion auditable para el borrado en la aplicacion')
INSERT [dbo].[AccionAuditable] ([IdAccionAuditable], [Nombre], [Descripcion]) VALUES (5, N'Autentificación de Usuario', N'Acción auditable cuando se autentifica el usaurio')
INSERT [dbo].[AccionAuditable] ([IdAccionAuditable], [Nombre], [Descripcion]) VALUES (6, N'Envio de Correo', N'Acción auditable cuando se envia un correo desde la aplicación')
INSERT [dbo].[AccionAuditable] ([IdAccionAuditable], [Nombre], [Descripcion]) VALUES (7, N'Importar', N'Acción auditable cuando se importa un documento')
INSERT [dbo].[AccionAuditable] ([IdAccionAuditable], [Nombre], [Descripcion]) VALUES (8, N'Exportar', N'Acción auditable cuando se exporta un documento')
INSERT [dbo].[AccionAuditable] ([IdAccionAuditable], [Nombre], [Descripcion]) VALUES (9, N'Consultar', N'Acción auditable cuando consulta información')
SET IDENTITY_INSERT [dbo].[AccionAuditable] OFF

SET IDENTITY_INSERT [dbo].[Modulo] ON
INSERT [dbo].[Modulo] ([IdModulo], [Nombre], [Descripcion]) VALUES (1, N'Login', N'Modulo del acceso del sitio')
INSERT [dbo].[Modulo] ([IdModulo], [Nombre], [Descripcion]) VALUES (2, N'Usuarios', N'Modulo Administracion de Usuarios')
INSERT [dbo].[Modulo] ([IdModulo], [Nombre], [Descripcion]) VALUES (3, N'Empresa', N'Modulo Administracion de Empresas')
INSERT [dbo].[Modulo] ([IdModulo], [Nombre], [Descripcion]) VALUES (4, N'Rol', N'Modulo Administracion de Roles')
INSERT [dbo].[Modulo] ([IdModulo], [Nombre], [Descripcion]) VALUES (5, N'Grupos de Usuario', N'Modulo Administracion de Grupos de Usuario')
INSERT [dbo].[Modulo] ([IdModulo], [Nombre], [Descripcion]) VALUES (6, N'Asignación de Roles a Usuarios', N'Módulo Administración de Asignación de Roles a Usuarios')
INSERT [dbo].[Modulo] ([IdModulo], [Nombre], [Descripcion]) VALUES (7, N'Editor de Documentos Instancia XBRL', N'Modulo Editor de Documentos Instancia XBRL')
SET IDENTITY_INSERT [dbo].[Modulo] OFF

UPDATE [TaxonomiaXbrl] SET [EspacioNombresPrincipal] = 'http://www.bmv.com.mx/fr/ics/2012-04-01/ifrs-mx-ics-entryPoint-all'
WHERE [Nombre] = 'IFRS BMV 2013'
;

UPDATE [TaxonomiaXbrl] SET [EspacioNombresPrincipal] = 'http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_ics_entry_point_2014-12-05'
WHERE [Nombre] = 'IFRS BMV 2015 para ICS'
;

UPDATE [TaxonomiaXbrl] SET [EspacioNombresPrincipal] = 'http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_sapib_entry_point_2014-12-05'
WHERE [Nombre] = 'IFRS BMV 2015 para SAPIB'
;

UPDATE [TaxonomiaXbrl] SET [EspacioNombresPrincipal] = 'http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_cp_entry_point_2014-12-05'
WHERE [Nombre] = 'IFRS BMV 2015 para Corto Plazo'
;

UPDATE [TaxonomiaXbrl] SET [EspacioNombresPrincipal] = 'http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_fibras_entry_point_2014-12-05'
WHERE [Nombre] = 'IFRS BMV 2015 para FIBRAS'
;