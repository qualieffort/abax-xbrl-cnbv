USE [abax_xbrl_db]
GO
/****** Object:  User [usr_abax]    Script Date: 11/19/2014 16:02:21 ******/
CREATE USER [usr_abax] FOR LOGIN [usr_abax] WITH DEFAULT_SCHEMA=[dbo]
GO
/****** Object:  Table [dbo].[Usuario]    Script Date: 11/19/2014 16:02:25 ******/
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
 CONSTRAINT [PK_Usuario_1] PRIMARY KEY CLUSTERED 
(
	[IdUsuario] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[TipoDato]    Script Date: 11/19/2014 16:02:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[TipoDato](
	[IdTipoDato] [bigint] NOT NULL,
	[Nombre] [varchar](200) NOT NULL,
	[NombreXbrl] [varchar](200) NOT NULL,
 CONSTRAINT [PK_TipoDato] PRIMARY KEY CLUSTERED 
(
	[IdTipoDato] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[TipoContexto]    Script Date: 11/19/2014 16:02:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[TipoContexto](
	[IdTipoContexto] [bigint] NOT NULL,
	[Nombre] [varchar](50) NOT NULL,
 CONSTRAINT [PK_TipoContexto] PRIMARY KEY CLUSTERED 
(
	[IdTipoContexto] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Entidad]    Script Date: 11/19/2014 16:02:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Entidad](
	[IdEntidad] [bigint] IDENTITY(1,1) NOT NULL,
	[Identificador] [varchar](4000) NOT NULL,
	[Esquema] [varchar](4000) NOT NULL,
	[Escenario] [varchar](max) NULL,
 CONSTRAINT [PK_Entidad] PRIMARY KEY CLUSTERED 
(
	[IdEntidad] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Empresa]    Script Date: 11/19/2014 16:02:25 ******/
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
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[CategoriaFacultad]    Script Date: 11/19/2014 16:02:25 ******/
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
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[FORMATO]    Script Date: 11/19/2014 16:02:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[FORMATO](
	[ID_FORMATO] [bigint] NOT NULL,
	[NOMBRE_FORMATO] [varchar](400) NOT NULL,
 CONSTRAINT [PK_FORMATO] PRIMARY KEY CLUSTERED 
(
	[ID_FORMATO] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[PlantillaDocumentoInstancia]    Script Date: 11/19/2014 16:02:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[PlantillaDocumentoInstancia](
	[IdPlantillaDocumentoInstancia] [bigint] NOT NULL,
	[Nombre] [varchar](200) NOT NULL,
	[Ruta] [varchar](4000) NOT NULL,
 CONSTRAINT [PK_PlantillaDocumentoInstancia] PRIMARY KEY CLUSTERED 
(
	[IdPlantillaDocumentoInstancia] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Modulo]    Script Date: 11/19/2014 16:02:25 ******/
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
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Alerta]    Script Date: 11/19/2014 16:02:25 ******/
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
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[AccionAuditable]    Script Date: 11/19/2014 16:02:25 ******/
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
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[GrupoUsuarios]    Script Date: 11/19/2014 16:02:25 ******/
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
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Facultad]    Script Date: 11/19/2014 16:02:25 ******/
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
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[CATALOGO_ELEMENTOS]    Script Date: 11/19/2014 16:02:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[CATALOGO_ELEMENTOS](
	[ETIQUETA] [varchar](400) NOT NULL,
	[TITULO] [varchar](1000) NOT NULL,
	[COLUMNA] [varchar](400) NULL,
	[INDENTACION] [int] NOT NULL,
	[PREFIJO] [varchar](50) NULL,
	[ID_CATALOGO_ELEMENTOS] [bigint] IDENTITY(1,1) NOT NULL,
	[CUENTA_EMISNET] [varchar](50) NULL,
	[TIPO_DATO] [varchar](400) NOT NULL,
	[ID_FORMATO] [bigint] NOT NULL,
	[DIMENSION] [varchar](200) NULL,
	[ORDEN_RENGLON] [int] NULL,
	[ORDEN_COLUMNA] [int] NULL,
	[ID_COLUMNA] [varchar](50) NULL,
	[ID_RENGLON] [varchar](50) NULL,
	[ICONO] [varchar](500) NULL,
	[CLASE] [varchar](50) NULL,
 CONSTRAINT [PK_CATALOGO_ELEMENTOS] PRIMARY KEY CLUSTERED 
(
	[ID_CATALOGO_ELEMENTOS] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[DocumentoInstancia]    Script Date: 11/19/2014 16:02:25 ******/
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
	[IdPlantillaDocumentoInstancia] [bigint] NULL,
	[IdEmpresa] [bigint] NOT NULL,
	[EsCorrecto] [bit] NOT NULL,
	[Bloqueado] [bit] NOT NULL,
	[IdUsuarioBloqueo] [bigint] NULL,
	[IdUsuarioUltMod] [bigint] NULL,
	[FechaUltMod] [datetime] NULL,
	[UltimaVersion] [int] NULL,
 CONSTRAINT [PK_DocumentoInstancia] PRIMARY KEY CLUSTERED 
(
	[IdDocumentoInstancia] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Rol]    Script Date: 11/19/2014 16:02:25 ******/
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
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[RegistroAuditoria]    Script Date: 11/19/2014 16:02:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[RegistroAuditoria](
	[IdRegistroAuditoria] [bigint] IDENTITY(1,1) NOT NULL,
	[Fecha] [datetime] NOT NULL,
	[IdUsuario] [bigint] NULL,
	[IdModulo] [bigint] NULL,
	[IdAccionAuditable] [bigint] NULL,
	[Registro] [varchar](max) NOT NULL,
	[IdEmpresa] [bigint] NULL,
 CONSTRAINT [PK_RegistroAuditoria] PRIMARY KEY CLUSTERED 
(
	[IdRegistroAuditoria] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[UsuarioEmpresa]    Script Date: 11/19/2014 16:02:25 ******/
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
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[VersionDocumentoInstancia]    Script Date: 11/19/2014 16:02:25 ******/
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
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[UsuarioRol]    Script Date: 11/19/2014 16:02:25 ******/
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
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[UsuarioGrupo]    Script Date: 11/19/2014 16:02:25 ******/
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
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[UsuarioDocumentoInstancia]    Script Date: 11/19/2014 16:02:25 ******/
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
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Tupla]    Script Date: 11/19/2014 16:02:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Tupla](
	[IdTupla] [bigint] IDENTITY(1,1) NOT NULL,
	[Concepto] [varchar](4000) NOT NULL,
	[IdDocumentoInstancia] [bigint] NOT NULL,
	[IdTuplaPadre] [bigint] NULL,
 CONSTRAINT [PK_Tupla] PRIMARY KEY CLUSTERED 
(
	[IdTupla] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[GrupoUsuariosRol]    Script Date: 11/19/2014 16:02:25 ******/
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
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[RolFacultad]    Script Date: 11/19/2014 16:02:25 ******/
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
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[REPOSITORIO_HECHOS]    Script Date: 11/19/2014 16:02:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[REPOSITORIO_HECHOS](
	[ID_HECHO] [bigint] IDENTITY(1,1) NOT NULL,
	[CLAVE_EMPRESA] [varchar](50) NOT NULL,
	[FECHA] [datetime] NULL,
	[VALOR] [varchar](max) NULL,
	[ID_CATALOGO_ELEMENTOS] [bigint] NOT NULL,
	[UNIDAD] [varchar](50) NULL,
	[FECHA_INICIO] [datetime] NULL,
	[FECHA_FIN] [datetime] NULL,
	[IdDocumentoInstancia] [bigint] NOT NULL,
 CONSTRAINT [PK_REPOSIOTRIO_HECHO] PRIMARY KEY CLUSTERED 
(
	[ID_HECHO] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Unidad]    Script Date: 11/19/2014 16:02:25 ******/
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
 CONSTRAINT [PK_Unidad] PRIMARY KEY CLUSTERED 
(
	[IdUnidad] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[DtsDocumentoInstancia]    Script Date: 11/19/2014 16:02:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[DtsDocumentoInstancia](
	[IdDtsDocumentoInstancia] [bigint] IDENTITY(1,1) NOT NULL,
	[IdDocumentoInstancia] [bigint] NOT NULL,
	[NombreArchivo] [varchar](4000) NOT NULL,
	[EsEsquema] [bit] NOT NULL,
 CONSTRAINT [PK_DtsDocumentoInstancia] PRIMARY KEY CLUSTERED 
(
	[IdDtsDocumentoInstancia] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Contexto]    Script Date: 11/19/2014 16:02:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Contexto](
	[IdContexto] [bigint] IDENTITY(1,1) NOT NULL,
	[Nombre] [varchar](200) NOT NULL,
	[IdTipoContexto] [bigint] NOT NULL,
	[Fecha] [datetime] NULL,
	[FechaInicio] [datetime] NULL,
	[FechaFin] [datetime] NULL,
	[PorSiempre] [bit] NULL,
	[IdEntidad] [bigint] NOT NULL,
	[Segmento] [varchar](max) NULL,
	[IdDocumentoInstancia] [bigint] NULL,
 CONSTRAINT [PK_Contexto] PRIMARY KEY CLUSTERED 
(
	[IdContexto] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[AtributoPlantillaDocumentoInstancia]    Script Date: 11/19/2014 16:02:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[AtributoPlantillaDocumentoInstancia](
	[IdAtributoPlantilla] [bigint] IDENTITY(1,1) NOT NULL,
	[IdDocumentoInstancia] [bigint] NOT NULL,
	[Atributo] [varchar](200) NOT NULL,
	[Valor] [varchar](4000) NOT NULL,
 CONSTRAINT [PK_AtributoPlantillaDocumentoInstancia] PRIMARY KEY CLUSTERED 
(
	[IdAtributoPlantilla] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Hecho]    Script Date: 11/19/2014 16:02:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Hecho](
	[IdHecho] [bigint] IDENTITY(1,1) NOT NULL,
	[Concepto] [varchar](4000) NOT NULL,
	[Valor] [varchar](max) NOT NULL,
	[IdContexto] [bigint] NOT NULL,
	[IdUnidad] [bigint] NOT NULL,
	[Precision] [int] NULL,
	[Decimales] [int] NULL,
	[IdTipoDato] [bigint] NOT NULL,
	[IdDocumentoInstancia] [bigint] NOT NULL,
	[EspacioNombres] [varchar](4000) NOT NULL,
 CONSTRAINT [PK_Hecho] PRIMARY KEY CLUSTERED 
(
	[IdHecho] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[TuplaHecho]    Script Date: 11/19/2014 16:02:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TuplaHecho](
	[IdTuplaHecho] [bigint] IDENTITY(1,1) NOT NULL,
	[IdTupla] [bigint] NOT NULL,
	[IdHecho] [bigint] NOT NULL,
 CONSTRAINT [PK_TuplaHecho] PRIMARY KEY CLUSTERED 
(
	[IdTuplaHecho] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Default [DF_CategoriaFacultad_Borrado]    Script Date: 11/19/2014 16:02:25 ******/
ALTER TABLE [dbo].[CategoriaFacultad] ADD  CONSTRAINT [DF_CategoriaFacultad_Borrado]  DEFAULT ((0)) FOR [Borrado]
GO
/****** Object:  Default [DF_Facultad_Borrado]    Script Date: 11/19/2014 16:02:25 ******/
ALTER TABLE [dbo].[Facultad] ADD  CONSTRAINT [DF_Facultad_Borrado]  DEFAULT ((0)) FOR [Borrado]
GO
/****** Object:  Default [DF_DocumentoInstancia_EsCorrecto]    Script Date: 11/19/2014 16:02:25 ******/
ALTER TABLE [dbo].[DocumentoInstancia] ADD  CONSTRAINT [DF_DocumentoInstancia_EsCorrecto]  DEFAULT ((0)) FOR [EsCorrecto]
GO
/****** Object:  Default [DF_DocumentoInstancia_Bloqueado]    Script Date: 11/19/2014 16:02:25 ******/
ALTER TABLE [dbo].[DocumentoInstancia] ADD  CONSTRAINT [DF_DocumentoInstancia_Bloqueado]  DEFAULT ((0)) FOR [Bloqueado]
GO
/****** Object:  Default [DF_VersionDocumentoInstancia_EsCorrecto]    Script Date: 11/19/2014 16:02:25 ******/
ALTER TABLE [dbo].[VersionDocumentoInstancia] ADD  CONSTRAINT [DF_VersionDocumentoInstancia_EsCorrecto]  DEFAULT ((0)) FOR [EsCorrecto]
GO
/****** Object:  ForeignKey [FK_GrupoUsuarios_Empresa]    Script Date: 11/19/2014 16:02:25 ******/
ALTER TABLE [dbo].[GrupoUsuarios]  WITH CHECK ADD  CONSTRAINT [FK_GrupoUsuarios_Empresa] FOREIGN KEY([IdEmpresa])
REFERENCES [dbo].[Empresa] ([IdEmpresa])
GO
ALTER TABLE [dbo].[GrupoUsuarios] CHECK CONSTRAINT [FK_GrupoUsuarios_Empresa]
GO
/****** Object:  ForeignKey [FK_Facultad_CategoriaFacultad]    Script Date: 11/19/2014 16:02:25 ******/
ALTER TABLE [dbo].[Facultad]  WITH CHECK ADD  CONSTRAINT [FK_Facultad_CategoriaFacultad] FOREIGN KEY([IdCategoriaFacultad])
REFERENCES [dbo].[CategoriaFacultad] ([IdCategoriaFacultad])
GO
ALTER TABLE [dbo].[Facultad] CHECK CONSTRAINT [FK_Facultad_CategoriaFacultad]
GO
/****** Object:  ForeignKey [FK_CATALOGO_ELEMENTOS_FORMATO]    Script Date: 11/19/2014 16:02:25 ******/
ALTER TABLE [dbo].[CATALOGO_ELEMENTOS]  WITH CHECK ADD  CONSTRAINT [FK_CATALOGO_ELEMENTOS_FORMATO] FOREIGN KEY([ID_FORMATO])
REFERENCES [dbo].[FORMATO] ([ID_FORMATO])
GO
ALTER TABLE [dbo].[CATALOGO_ELEMENTOS] CHECK CONSTRAINT [FK_CATALOGO_ELEMENTOS_FORMATO]
GO
/****** Object:  ForeignKey [FK_DocumentoInstancia_Empresa]    Script Date: 11/19/2014 16:02:25 ******/
ALTER TABLE [dbo].[DocumentoInstancia]  WITH CHECK ADD  CONSTRAINT [FK_DocumentoInstancia_Empresa] FOREIGN KEY([IdEmpresa])
REFERENCES [dbo].[Empresa] ([IdEmpresa])
GO
ALTER TABLE [dbo].[DocumentoInstancia] CHECK CONSTRAINT [FK_DocumentoInstancia_Empresa]
GO
/****** Object:  ForeignKey [FK_DocumentoInstancia_PlantillaDocumentoInstancia1]    Script Date: 11/19/2014 16:02:25 ******/
ALTER TABLE [dbo].[DocumentoInstancia]  WITH CHECK ADD  CONSTRAINT [FK_DocumentoInstancia_PlantillaDocumentoInstancia1] FOREIGN KEY([IdPlantillaDocumentoInstancia])
REFERENCES [dbo].[PlantillaDocumentoInstancia] ([IdPlantillaDocumentoInstancia])
GO
ALTER TABLE [dbo].[DocumentoInstancia] CHECK CONSTRAINT [FK_DocumentoInstancia_PlantillaDocumentoInstancia1]
GO
/****** Object:  ForeignKey [FK_DocumentoInstancia_Usuario_Ult]    Script Date: 11/19/2014 16:02:25 ******/
ALTER TABLE [dbo].[DocumentoInstancia]  WITH CHECK ADD  CONSTRAINT [FK_DocumentoInstancia_Usuario_Ult] FOREIGN KEY([IdUsuarioUltMod])
REFERENCES [dbo].[Usuario] ([IdUsuario])
GO
ALTER TABLE [dbo].[DocumentoInstancia] CHECK CONSTRAINT [FK_DocumentoInstancia_Usuario_Ult]
GO
/****** Object:  ForeignKey [FK_Rol_Empresa]    Script Date: 11/19/2014 16:02:25 ******/
ALTER TABLE [dbo].[Rol]  WITH CHECK ADD  CONSTRAINT [FK_Rol_Empresa] FOREIGN KEY([IdEmpresa])
REFERENCES [dbo].[Empresa] ([IdEmpresa])
GO
ALTER TABLE [dbo].[Rol] CHECK CONSTRAINT [FK_Rol_Empresa]
GO
/****** Object:  ForeignKey [FK_RegistroAuditoria_AccionAuditable]    Script Date: 11/19/2014 16:02:25 ******/
ALTER TABLE [dbo].[RegistroAuditoria]  WITH CHECK ADD  CONSTRAINT [FK_RegistroAuditoria_AccionAuditable] FOREIGN KEY([IdAccionAuditable])
REFERENCES [dbo].[AccionAuditable] ([IdAccionAuditable])
GO
ALTER TABLE [dbo].[RegistroAuditoria] CHECK CONSTRAINT [FK_RegistroAuditoria_AccionAuditable]
GO
/****** Object:  ForeignKey [FK_RegistroAuditoria_Empresa]    Script Date: 11/19/2014 16:02:25 ******/
ALTER TABLE [dbo].[RegistroAuditoria]  WITH CHECK ADD  CONSTRAINT [FK_RegistroAuditoria_Empresa] FOREIGN KEY([IdEmpresa])
REFERENCES [dbo].[Empresa] ([IdEmpresa])
GO
ALTER TABLE [dbo].[RegistroAuditoria] CHECK CONSTRAINT [FK_RegistroAuditoria_Empresa]
GO
/****** Object:  ForeignKey [FK_RegistroAuditoria_Modulo]    Script Date: 11/19/2014 16:02:25 ******/
ALTER TABLE [dbo].[RegistroAuditoria]  WITH CHECK ADD  CONSTRAINT [FK_RegistroAuditoria_Modulo] FOREIGN KEY([IdModulo])
REFERENCES [dbo].[Modulo] ([IdModulo])
GO
ALTER TABLE [dbo].[RegistroAuditoria] CHECK CONSTRAINT [FK_RegistroAuditoria_Modulo]
GO
/****** Object:  ForeignKey [FK_RegistroAuditoria_Usuario]    Script Date: 11/19/2014 16:02:25 ******/
ALTER TABLE [dbo].[RegistroAuditoria]  WITH CHECK ADD  CONSTRAINT [FK_RegistroAuditoria_Usuario] FOREIGN KEY([IdUsuario])
REFERENCES [dbo].[Usuario] ([IdUsuario])
GO
ALTER TABLE [dbo].[RegistroAuditoria] CHECK CONSTRAINT [FK_RegistroAuditoria_Usuario]
GO
/****** Object:  ForeignKey [FK_UsuarioEmpresa_Empresa]    Script Date: 11/19/2014 16:02:25 ******/
ALTER TABLE [dbo].[UsuarioEmpresa]  WITH CHECK ADD  CONSTRAINT [FK_UsuarioEmpresa_Empresa] FOREIGN KEY([IdEmpresa])
REFERENCES [dbo].[Empresa] ([IdEmpresa])
GO
ALTER TABLE [dbo].[UsuarioEmpresa] CHECK CONSTRAINT [FK_UsuarioEmpresa_Empresa]
GO
/****** Object:  ForeignKey [FK_UsuarioEmpresa_Usuario]    Script Date: 11/19/2014 16:02:25 ******/
ALTER TABLE [dbo].[UsuarioEmpresa]  WITH CHECK ADD  CONSTRAINT [FK_UsuarioEmpresa_Usuario] FOREIGN KEY([IdUsuario])
REFERENCES [dbo].[Usuario] ([IdUsuario])
GO
ALTER TABLE [dbo].[UsuarioEmpresa] CHECK CONSTRAINT [FK_UsuarioEmpresa_Usuario]
GO
/****** Object:  ForeignKey [FK_VersionDocumentoInstancia_DocumentoInstancia]    Script Date: 11/19/2014 16:02:25 ******/
ALTER TABLE [dbo].[VersionDocumentoInstancia]  WITH CHECK ADD  CONSTRAINT [FK_VersionDocumentoInstancia_DocumentoInstancia] FOREIGN KEY([IdDocumentoInstancia])
REFERENCES [dbo].[DocumentoInstancia] ([IdDocumentoInstancia])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[VersionDocumentoInstancia] CHECK CONSTRAINT [FK_VersionDocumentoInstancia_DocumentoInstancia]
GO
/****** Object:  ForeignKey [FK_VersionDocumentoInstancia_Empresa]    Script Date: 11/19/2014 16:02:25 ******/
ALTER TABLE [dbo].[VersionDocumentoInstancia]  WITH CHECK ADD  CONSTRAINT [FK_VersionDocumentoInstancia_Empresa] FOREIGN KEY([IdEmpresa])
REFERENCES [dbo].[Empresa] ([IdEmpresa])
GO
ALTER TABLE [dbo].[VersionDocumentoInstancia] CHECK CONSTRAINT [FK_VersionDocumentoInstancia_Empresa]
GO
/****** Object:  ForeignKey [FK_VersionDocumentoInstancia_Usuario]    Script Date: 11/19/2014 16:02:25 ******/
ALTER TABLE [dbo].[VersionDocumentoInstancia]  WITH CHECK ADD  CONSTRAINT [FK_VersionDocumentoInstancia_Usuario] FOREIGN KEY([IdUsuario])
REFERENCES [dbo].[Usuario] ([IdUsuario])
GO
ALTER TABLE [dbo].[VersionDocumentoInstancia] CHECK CONSTRAINT [FK_VersionDocumentoInstancia_Usuario]
GO
/****** Object:  ForeignKey [FK_UsuarioRol_Rol]    Script Date: 11/19/2014 16:02:25 ******/
ALTER TABLE [dbo].[UsuarioRol]  WITH CHECK ADD  CONSTRAINT [FK_UsuarioRol_Rol] FOREIGN KEY([IdRol])
REFERENCES [dbo].[Rol] ([IdRol])
GO
ALTER TABLE [dbo].[UsuarioRol] CHECK CONSTRAINT [FK_UsuarioRol_Rol]
GO
/****** Object:  ForeignKey [FK_UsuarioRol_Usuario]    Script Date: 11/19/2014 16:02:25 ******/
ALTER TABLE [dbo].[UsuarioRol]  WITH CHECK ADD  CONSTRAINT [FK_UsuarioRol_Usuario] FOREIGN KEY([IdUsuario])
REFERENCES [dbo].[Usuario] ([IdUsuario])
GO
ALTER TABLE [dbo].[UsuarioRol] CHECK CONSTRAINT [FK_UsuarioRol_Usuario]
GO
/****** Object:  ForeignKey [FK_UsuarioGrupo_GrupoUsuarios]    Script Date: 11/19/2014 16:02:25 ******/
ALTER TABLE [dbo].[UsuarioGrupo]  WITH NOCHECK ADD  CONSTRAINT [FK_UsuarioGrupo_GrupoUsuarios] FOREIGN KEY([IdGrupoUsuarios])
REFERENCES [dbo].[GrupoUsuarios] ([IdGrupoUsuarios])
GO
ALTER TABLE [dbo].[UsuarioGrupo] CHECK CONSTRAINT [FK_UsuarioGrupo_GrupoUsuarios]
GO
/****** Object:  ForeignKey [FK_UsuarioGrupo_Usuario]    Script Date: 11/19/2014 16:02:25 ******/
ALTER TABLE [dbo].[UsuarioGrupo]  WITH NOCHECK ADD  CONSTRAINT [FK_UsuarioGrupo_Usuario] FOREIGN KEY([IdUsuario])
REFERENCES [dbo].[Usuario] ([IdUsuario])
GO
ALTER TABLE [dbo].[UsuarioGrupo] CHECK CONSTRAINT [FK_UsuarioGrupo_Usuario]
GO
/****** Object:  ForeignKey [FK_UsuarioDocumentoInstancia_DocumentoInstancia]    Script Date: 11/19/2014 16:02:25 ******/
ALTER TABLE [dbo].[UsuarioDocumentoInstancia]  WITH CHECK ADD  CONSTRAINT [FK_UsuarioDocumentoInstancia_DocumentoInstancia] FOREIGN KEY([IdDocumentoInstancia])
REFERENCES [dbo].[DocumentoInstancia] ([IdDocumentoInstancia])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[UsuarioDocumentoInstancia] CHECK CONSTRAINT [FK_UsuarioDocumentoInstancia_DocumentoInstancia]
GO
/****** Object:  ForeignKey [FK_UsuarioDocumentoInstancia_Usuario]    Script Date: 11/19/2014 16:02:25 ******/
ALTER TABLE [dbo].[UsuarioDocumentoInstancia]  WITH CHECK ADD  CONSTRAINT [FK_UsuarioDocumentoInstancia_Usuario] FOREIGN KEY([IdUsuario])
REFERENCES [dbo].[Usuario] ([IdUsuario])
GO
ALTER TABLE [dbo].[UsuarioDocumentoInstancia] CHECK CONSTRAINT [FK_UsuarioDocumentoInstancia_Usuario]
GO
/****** Object:  ForeignKey [FK_Tupla_DocumentoInstancia]    Script Date: 11/19/2014 16:02:25 ******/
ALTER TABLE [dbo].[Tupla]  WITH CHECK ADD  CONSTRAINT [FK_Tupla_DocumentoInstancia] FOREIGN KEY([IdDocumentoInstancia])
REFERENCES [dbo].[DocumentoInstancia] ([IdDocumentoInstancia])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Tupla] CHECK CONSTRAINT [FK_Tupla_DocumentoInstancia]
GO
/****** Object:  ForeignKey [FK_Tupla_Tupla]    Script Date: 11/19/2014 16:02:25 ******/
ALTER TABLE [dbo].[Tupla]  WITH CHECK ADD  CONSTRAINT [FK_Tupla_Tupla] FOREIGN KEY([IdTuplaPadre])
REFERENCES [dbo].[Tupla] ([IdTupla])
GO
ALTER TABLE [dbo].[Tupla] CHECK CONSTRAINT [FK_Tupla_Tupla]
GO
/****** Object:  ForeignKey [FK_GrupoUsuariosRol_GrupoUsuarios]    Script Date: 11/19/2014 16:02:25 ******/
ALTER TABLE [dbo].[GrupoUsuariosRol]  WITH CHECK ADD  CONSTRAINT [FK_GrupoUsuariosRol_GrupoUsuarios] FOREIGN KEY([IdGrupoUsuario])
REFERENCES [dbo].[GrupoUsuarios] ([IdGrupoUsuarios])
GO
ALTER TABLE [dbo].[GrupoUsuariosRol] CHECK CONSTRAINT [FK_GrupoUsuariosRol_GrupoUsuarios]
GO
/****** Object:  ForeignKey [FK_GrupoUsuariosRol_Rol]    Script Date: 11/19/2014 16:02:25 ******/
ALTER TABLE [dbo].[GrupoUsuariosRol]  WITH CHECK ADD  CONSTRAINT [FK_GrupoUsuariosRol_Rol] FOREIGN KEY([IdRol])
REFERENCES [dbo].[Rol] ([IdRol])
GO
ALTER TABLE [dbo].[GrupoUsuariosRol] CHECK CONSTRAINT [FK_GrupoUsuariosRol_Rol]
GO
/****** Object:  ForeignKey [FK_RolFacultad_Facultad1]    Script Date: 11/19/2014 16:02:25 ******/
ALTER TABLE [dbo].[RolFacultad]  WITH NOCHECK ADD  CONSTRAINT [FK_RolFacultad_Facultad1] FOREIGN KEY([IdFacultad])
REFERENCES [dbo].[Facultad] ([IdFacultad])
GO
ALTER TABLE [dbo].[RolFacultad] CHECK CONSTRAINT [FK_RolFacultad_Facultad1]
GO
/****** Object:  ForeignKey [FK_RolFacultad_Rol]    Script Date: 11/19/2014 16:02:25 ******/
ALTER TABLE [dbo].[RolFacultad]  WITH NOCHECK ADD  CONSTRAINT [FK_RolFacultad_Rol] FOREIGN KEY([IdRol])
REFERENCES [dbo].[Rol] ([IdRol])
GO
ALTER TABLE [dbo].[RolFacultad] CHECK CONSTRAINT [FK_RolFacultad_Rol]
GO
/****** Object:  ForeignKey [FK_REPOSITORIO_HECHOS_CATALOGO_ELEMENTOS1]    Script Date: 11/19/2014 16:02:25 ******/
ALTER TABLE [dbo].[REPOSITORIO_HECHOS]  WITH NOCHECK ADD  CONSTRAINT [FK_REPOSITORIO_HECHOS_CATALOGO_ELEMENTOS1] FOREIGN KEY([ID_CATALOGO_ELEMENTOS])
REFERENCES [dbo].[CATALOGO_ELEMENTOS] ([ID_CATALOGO_ELEMENTOS])
GO
ALTER TABLE [dbo].[REPOSITORIO_HECHOS] CHECK CONSTRAINT [FK_REPOSITORIO_HECHOS_CATALOGO_ELEMENTOS1]
GO
/****** Object:  ForeignKey [FK_REPOSITORIO_HECHOS_DocumentoInstancia]    Script Date: 11/19/2014 16:02:25 ******/
ALTER TABLE [dbo].[REPOSITORIO_HECHOS]  WITH NOCHECK ADD  CONSTRAINT [FK_REPOSITORIO_HECHOS_DocumentoInstancia] FOREIGN KEY([IdDocumentoInstancia])
REFERENCES [dbo].[DocumentoInstancia] ([IdDocumentoInstancia])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[REPOSITORIO_HECHOS] CHECK CONSTRAINT [FK_REPOSITORIO_HECHOS_DocumentoInstancia]
GO
/****** Object:  ForeignKey [FK_Unidad_DocumentoInstancia]    Script Date: 11/19/2014 16:02:25 ******/
ALTER TABLE [dbo].[Unidad]  WITH CHECK ADD  CONSTRAINT [FK_Unidad_DocumentoInstancia] FOREIGN KEY([IdDocumentoInstancia])
REFERENCES [dbo].[DocumentoInstancia] ([IdDocumentoInstancia])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Unidad] CHECK CONSTRAINT [FK_Unidad_DocumentoInstancia]
GO
/****** Object:  ForeignKey [FK_DtsDocumentoInstancia_DocumentoInstancia]    Script Date: 11/19/2014 16:02:25 ******/
ALTER TABLE [dbo].[DtsDocumentoInstancia]  WITH CHECK ADD  CONSTRAINT [FK_DtsDocumentoInstancia_DocumentoInstancia] FOREIGN KEY([IdDocumentoInstancia])
REFERENCES [dbo].[DocumentoInstancia] ([IdDocumentoInstancia])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[DtsDocumentoInstancia] CHECK CONSTRAINT [FK_DtsDocumentoInstancia_DocumentoInstancia]
GO
/****** Object:  ForeignKey [FK_Contexto_DocumentoInstancia]    Script Date: 11/19/2014 16:02:25 ******/
ALTER TABLE [dbo].[Contexto]  WITH CHECK ADD  CONSTRAINT [FK_Contexto_DocumentoInstancia] FOREIGN KEY([IdDocumentoInstancia])
REFERENCES [dbo].[DocumentoInstancia] ([IdDocumentoInstancia])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Contexto] CHECK CONSTRAINT [FK_Contexto_DocumentoInstancia]
GO
/****** Object:  ForeignKey [FK_Contexto_Entidad]    Script Date: 11/19/2014 16:02:25 ******/
ALTER TABLE [dbo].[Contexto]  WITH CHECK ADD  CONSTRAINT [FK_Contexto_Entidad] FOREIGN KEY([IdEntidad])
REFERENCES [dbo].[Entidad] ([IdEntidad])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Contexto] CHECK CONSTRAINT [FK_Contexto_Entidad]
GO
/****** Object:  ForeignKey [FK_Contexto_TipoContexto]    Script Date: 11/19/2014 16:02:25 ******/
ALTER TABLE [dbo].[Contexto]  WITH CHECK ADD  CONSTRAINT [FK_Contexto_TipoContexto] FOREIGN KEY([IdTipoContexto])
REFERENCES [dbo].[TipoContexto] ([IdTipoContexto])
GO
ALTER TABLE [dbo].[Contexto] CHECK CONSTRAINT [FK_Contexto_TipoContexto]
GO
/****** Object:  ForeignKey [FK_AtributoPlantillaDocumentoInstancia_DocumentoInstancia]    Script Date: 11/19/2014 16:02:25 ******/
ALTER TABLE [dbo].[AtributoPlantillaDocumentoInstancia]  WITH CHECK ADD  CONSTRAINT [FK_AtributoPlantillaDocumentoInstancia_DocumentoInstancia] FOREIGN KEY([IdDocumentoInstancia])
REFERENCES [dbo].[DocumentoInstancia] ([IdDocumentoInstancia])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[AtributoPlantillaDocumentoInstancia] CHECK CONSTRAINT [FK_AtributoPlantillaDocumentoInstancia_DocumentoInstancia]
GO
/****** Object:  ForeignKey [FK_Hecho_Contexto]    Script Date: 11/19/2014 16:02:25 ******/
ALTER TABLE [dbo].[Hecho]  WITH CHECK ADD  CONSTRAINT [FK_Hecho_Contexto] FOREIGN KEY([IdContexto])
REFERENCES [dbo].[Contexto] ([IdContexto])
GO
ALTER TABLE [dbo].[Hecho] CHECK CONSTRAINT [FK_Hecho_Contexto]
GO
/****** Object:  ForeignKey [FK_Hecho_DocumentoInstancia]    Script Date: 11/19/2014 16:02:25 ******/
ALTER TABLE [dbo].[Hecho]  WITH CHECK ADD  CONSTRAINT [FK_Hecho_DocumentoInstancia] FOREIGN KEY([IdDocumentoInstancia])
REFERENCES [dbo].[DocumentoInstancia] ([IdDocumentoInstancia])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Hecho] CHECK CONSTRAINT [FK_Hecho_DocumentoInstancia]
GO
/****** Object:  ForeignKey [FK_Hecho_TipoDato]    Script Date: 11/19/2014 16:02:25 ******/
ALTER TABLE [dbo].[Hecho]  WITH CHECK ADD  CONSTRAINT [FK_Hecho_TipoDato] FOREIGN KEY([IdTipoDato])
REFERENCES [dbo].[TipoDato] ([IdTipoDato])
GO
ALTER TABLE [dbo].[Hecho] CHECK CONSTRAINT [FK_Hecho_TipoDato]
GO
/****** Object:  ForeignKey [FK_Hecho_Unidad1]    Script Date: 11/19/2014 16:02:25 ******/
ALTER TABLE [dbo].[Hecho]  WITH CHECK ADD  CONSTRAINT [FK_Hecho_Unidad1] FOREIGN KEY([IdUnidad])
REFERENCES [dbo].[Unidad] ([IdUnidad])
GO
ALTER TABLE [dbo].[Hecho] CHECK CONSTRAINT [FK_Hecho_Unidad1]
GO
/****** Object:  ForeignKey [FK_TuplaHecho_Hecho]    Script Date: 11/19/2014 16:02:25 ******/
ALTER TABLE [dbo].[TuplaHecho]  WITH CHECK ADD  CONSTRAINT [FK_TuplaHecho_Hecho] FOREIGN KEY([IdHecho])
REFERENCES [dbo].[Hecho] ([IdHecho])
GO
ALTER TABLE [dbo].[TuplaHecho] CHECK CONSTRAINT [FK_TuplaHecho_Hecho]
GO
/****** Object:  ForeignKey [FK_TuplaHecho_Tupla]    Script Date: 11/19/2014 16:02:25 ******/
ALTER TABLE [dbo].[TuplaHecho]  WITH CHECK ADD  CONSTRAINT [FK_TuplaHecho_Tupla] FOREIGN KEY([IdTupla])
REFERENCES [dbo].[Tupla] ([IdTupla])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[TuplaHecho] CHECK CONSTRAINT [FK_TuplaHecho_Tupla]
GO
