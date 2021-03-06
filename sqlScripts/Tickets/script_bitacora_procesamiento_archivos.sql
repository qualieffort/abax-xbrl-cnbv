/****** Tabla pra llevar el control del procesamiento de archivos procesados por la BMV   ******/
CREATE TABLE [dbo].[BitacoraProcesarArchivosBMV](
	[IdBitacoraProcesarArchivosBMV] [bigint] IDENTITY(1,1) NOT NULL,
	[FechaHoraProcesamiento] [datetime] NOT NULL,
	[Estatus] [int] NOT NULL,
	[RutaOrigenArchivoEmisoras] [varchar](500) NOT NULL,
	[RutaDestinoArchivoEmisoras] [varchar](500) NOT NULL,
	[RutaOrigenArchivoFideicomisos] [varchar](500) NOT NULL,
	[RutaDestinoArchivoFideicomisos] [varchar](500) NOT NULL,
	[NumeroEmisorasReportadas] [int] NOT NULL,
	[NumeroFideicomisosReportados] [int] NOT NULL,
	[InformacionSalida] [text] NOT NULL,
 CONSTRAINT [PK_BitacoraProcesarArchivosBMV] PRIMARY KEY CLUSTERED 
(
	[IdBitacoraProcesarArchivosBMV] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]