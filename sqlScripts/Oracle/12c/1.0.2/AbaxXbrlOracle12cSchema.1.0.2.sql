-- --------------------------------------------------
-- Entity Designer DDL Script for Oracle database
-- --------------------------------------------------
-- Date Created: 01/05/2015 02:23:07 p. m.
-- Generated from EDMX file: C:\2H\Proyectos\github\AbaxXBRL\trunk\AbaxXBRLCore\Entities\AbaxModel.edmx
-- --------------------------------------------------

-- --------------------------------------------------
-- Dropping existing FOREIGN KEY constraints
-- --------------------------------------------------

-- ALTER TABLE "ABAX_XBRL"."RegistroAuditoria" DROP CONSTRAINT "FK_RegistroAuditoria_AccionAud" CASCADE;

-- ALTER TABLE "ABAX_XBRL"."Alerta" DROP CONSTRAINT "FK_Alerta_DocumentoInstancia" CASCADE;

-- ALTER TABLE "ABAX_XBRL"."ArchivoTaxonomiaXbrl" DROP CONSTRAINT "FK_ArchivoTaxonomiaXbrl_Taxono" CASCADE;

-- ALTER TABLE "ABAX_XBRL"."Facultad" DROP CONSTRAINT "FK_Facultad_CategoriaFacultad" CASCADE;

-- ALTER TABLE "ABAX_XBRL"."Contexto" DROP CONSTRAINT "FK_Contexto_DocumentoInstancia" CASCADE;

-- ALTER TABLE "ABAX_XBRL"."Hecho" DROP CONSTRAINT "FK_Hecho_Contexto" CASCADE;

-- ALTER TABLE "ABAX_XBRL"."DocumentoInstancia" DROP CONSTRAINT "FK_DocumentoInstancia_Empresa" CASCADE;

-- ALTER TABLE "ABAX_XBRL"."DocumentoInstancia" DROP CONSTRAINT "FK_DocumentoInstancia_Usuario_" CASCADE;

-- ALTER TABLE "ABAX_XBRL"."DtsDocumentoInstancia" DROP CONSTRAINT "FK_DtsDocumentoInstancia_Docum" CASCADE;

-- ALTER TABLE "ABAX_XBRL"."Hecho" DROP CONSTRAINT "FK_Hecho_DocumentoInstancia" CASCADE;

-- ALTER TABLE "ABAX_XBRL"."NotaAlPie" DROP CONSTRAINT "FK_NotaAlPie_DocumentoInstanci" CASCADE;

-- ALTER TABLE "ABAX_XBRL"."Unidad" DROP CONSTRAINT "FK_Unidad_DocumentoInstancia" CASCADE;

-- ALTER TABLE "ABAX_XBRL"."UsuarioDocumentoInstancia" DROP CONSTRAINT "FK_UsuarioDocumentoInstancia_D" CASCADE;

-- ALTER TABLE "ABAX_XBRL"."VersionDocumentoInstancia" DROP CONSTRAINT "FK_VersionDocumentoInstancia_D" CASCADE;

-- ALTER TABLE "ABAX_XBRL"."GrupoUsuarios" DROP CONSTRAINT "FK_GrupoUsuarios_Empresa" CASCADE;

-- ALTER TABLE "ABAX_XBRL"."RegistroAuditoria" DROP CONSTRAINT "FK_RegistroAuditoria_Empresa" CASCADE;

-- ALTER TABLE "ABAX_XBRL"."Rol" DROP CONSTRAINT "FK_Rol_Empresa" CASCADE;

-- ALTER TABLE "ABAX_XBRL"."UsuarioEmpresa" DROP CONSTRAINT "FK_UsuarioEmpresa_Empresa" CASCADE;

-- ALTER TABLE "ABAX_XBRL"."VersionDocumentoInstancia" DROP CONSTRAINT "FK_VersionDocumentoInstancia_E" CASCADE;

-- ALTER TABLE "ABAX_XBRL"."RolFacultad" DROP CONSTRAINT "FK_RolFacultad_Facultad1" CASCADE;

-- ALTER TABLE "ABAX_XBRL"."GrupoUsuariosRol" DROP CONSTRAINT "FK_GrupoUsuariosRol_GrupoUsuar" CASCADE;

-- ALTER TABLE "ABAX_XBRL"."UsuarioGrupo" DROP CONSTRAINT "FK_UsuarioGrupo_GrupoUsuarios" CASCADE;

-- ALTER TABLE "ABAX_XBRL"."GrupoUsuariosRol" DROP CONSTRAINT "FK_GrupoUsuariosRol_Rol" CASCADE;

-- ALTER TABLE "ABAX_XBRL"."Hecho" DROP CONSTRAINT "FK_Hecho_TipoDato" CASCADE;

-- ALTER TABLE "ABAX_XBRL"."Hecho" DROP CONSTRAINT "FK_Hecho_Unidad1" CASCADE;

-- ALTER TABLE "ABAX_XBRL"."RegistroAuditoria" DROP CONSTRAINT "FK_RegistroAuditoria_Modulo" CASCADE;

-- ALTER TABLE "ABAX_XBRL"."RegistroAuditoria" DROP CONSTRAINT "FK_RegistroAuditoria_Usuario" CASCADE;

-- ALTER TABLE "ABAX_XBRL"."RolFacultad" DROP CONSTRAINT "FK_RolFacultad_Rol" CASCADE;

-- ALTER TABLE "ABAX_XBRL"."UsuarioRol" DROP CONSTRAINT "FK_UsuarioRol_Rol" CASCADE;

-- ALTER TABLE "ABAX_XBRL"."UsuarioDocumentoInstancia" DROP CONSTRAINT "FK_UsuarioDocumentoInstancia_U" CASCADE;

-- ALTER TABLE "ABAX_XBRL"."UsuarioEmpresa" DROP CONSTRAINT "FK_UsuarioEmpresa_Usuario" CASCADE;

-- ALTER TABLE "ABAX_XBRL"."UsuarioGrupo" DROP CONSTRAINT "FK_UsuarioGrupo_Usuario" CASCADE;

-- ALTER TABLE "ABAX_XBRL"."UsuarioRol" DROP CONSTRAINT "FK_UsuarioRol_Usuario" CASCADE;

-- ALTER TABLE "ABAX_XBRL"."VersionDocumentoInstancia" DROP CONSTRAINT "FK_VersionDocumentoInstancia_U" CASCADE;
-- --------------------------------------------------
-- Dropping existing tables
-- --------------------------------------------------

-- DROP TABLE "ABAX_XBRL"."AccionAuditable";

-- DROP TABLE "ABAX_XBRL"."Alerta";

-- DROP TABLE "ABAX_XBRL"."ArchivoTaxonomiaXbrl";

-- DROP TABLE "ABAX_XBRL"."CategoriaFacultad";

-- DROP TABLE "ABAX_XBRL"."Contexto";

-- DROP TABLE "ABAX_XBRL"."DocumentoInstancia";

-- DROP TABLE "ABAX_XBRL"."DtsDocumentoInstancia";

-- DROP TABLE "ABAX_XBRL"."Empresa";

-- DROP TABLE "ABAX_XBRL"."Facultad";

-- DROP TABLE "ABAX_XBRL"."GrupoUsuarios";

-- DROP TABLE "ABAX_XBRL"."GrupoUsuariosRol";

-- DROP TABLE "ABAX_XBRL"."Hecho";

-- DROP TABLE "ABAX_XBRL"."Modulo";

-- DROP TABLE "ABAX_XBRL"."NotaAlPie";

-- DROP TABLE "ABAX_XBRL"."RegistroAuditoria";

-- DROP TABLE "ABAX_XBRL"."Rol";

-- DROP TABLE "ABAX_XBRL"."RolFacultad";

-- DROP TABLE "ABAX_XBRL"."TaxonomiaXbrl";

-- DROP TABLE "ABAX_XBRL"."TipoDato";

-- DROP TABLE "ABAX_XBRL"."Unidad";

-- DROP TABLE "ABAX_XBRL"."Usuario";

-- DROP TABLE "ABAX_XBRL"."UsuarioDocumentoInstancia";

-- DROP TABLE "ABAX_XBRL"."UsuarioEmpresa";

-- DROP TABLE "ABAX_XBRL"."UsuarioGrupo";

-- DROP TABLE "ABAX_XBRL"."UsuarioRol";

-- DROP TABLE "ABAX_XBRL"."VersionDocumentoInstancia";

-- --------------------------------------------------
-- Creating all tables
-- --------------------------------------------------

-- Creating table 'AccionAuditable'
CREATE TABLE "ABAX_XBRL"."AccionAuditable" (
   "IdAccionAuditable" NUMBER(19) NOT NULL,
   "Nombre" VARCHAR2 (200 CHAR) NOT NULL,
   "Descripcion" VARCHAR2 (4000 CHAR) 
);

-- Creating table 'Alerta'
CREATE TABLE "ABAX_XBRL"."Alerta" (
   "IdAlerta" NUMBER(19) GENERATED AS IDENTITY NOT NULL,
   "Contenido" VARCHAR2 (4000 CHAR) NOT NULL,
   "IdUsuario" NUMBER(19) NOT NULL,
   "IdDocumentoInstancia" NUMBER(19) NOT NULL,
   "Fecha" TIMESTAMP NOT NULL,
   "DocumentoCorrecto" NUMBER(1) NOT NULL
);

-- Creating table 'ArchivoTaxonomiaXbrl'
CREATE TABLE "ABAX_XBRL"."ArchivoTaxonomiaXbrl" (
   "IdArchivoTaxonomiaXbrl" NUMBER(19) GENERATED AS IDENTITY NOT NULL,
   "IdTaxonomiaXbrl" NUMBER(19) NOT NULL,
   "TipoReferencia" NUMBER(10) NOT NULL,
   "Href" VARCHAR2 (1000 CHAR) ,
   "Rol" VARCHAR2 (500 CHAR) ,
   "RolUri" VARCHAR2 (500 CHAR) 
);

-- Creating table 'CategoriaFacultad'
CREATE TABLE "ABAX_XBRL"."CategoriaFacultad" (
   "IdCategoriaFacultad" NUMBER(19) NOT NULL,
   "Nombre" VARCHAR2 (200 CHAR) NOT NULL,
   "Descripcion" VARCHAR2 (4000 CHAR) ,
   "Borrado" NUMBER(1) NOT NULL
);

-- Creating table 'Contexto'
CREATE TABLE "ABAX_XBRL"."Contexto" (
   "IdContexto" NUMBER(19) GENERATED AS IDENTITY NOT NULL,
   "Nombre" VARCHAR2 (800 CHAR) NOT NULL,
   "TipoContexto" NUMBER(10) NOT NULL,
   "Fecha" TIMESTAMP ,
   "FechaInicio" TIMESTAMP ,
   "FechaFin" TIMESTAMP ,
   "PorSiempre" NUMBER(1) ,
   "Escenario" CLOB ,
   "IdDocumentoInstancia" NUMBER(19) ,
   "EsquemaEntidad" VARCHAR2 (400 CHAR) ,
   "IdentificadorEntidad" VARCHAR2 (400 CHAR) ,
   "Segmento" CLOB 
);

-- Creating table 'DocumentoInstancia'
CREATE TABLE "ABAX_XBRL"."DocumentoInstancia" (
   "IdDocumentoInstancia" NUMBER(19) GENERATED AS IDENTITY NOT NULL,
   "Titulo" VARCHAR2 (200 CHAR) ,
   "RutaArchivo" VARCHAR2 (4000 CHAR) ,
   "FechaCreacion" TIMESTAMP ,
   "IdEmpresa" NUMBER(19) NOT NULL,
   "EsCorrecto" NUMBER(1) NOT NULL,
   "Bloqueado" NUMBER(1) NOT NULL,
   "IdUsuarioBloqueo" NUMBER(19) ,
   "IdUsuarioUltMod" NUMBER(19) ,
   "FechaUltMod" TIMESTAMP ,
   "UltimaVersion" NUMBER(10) ,
   "GruposContextosEquivalentes" CLOB ,
   "ParametrosConfiguracion" CLOB ,
   "EspacioNombresPrincipal" VARCHAR2 (1000 CHAR),
   "ClaveEmisora" VARCHAR2 (50 CHAR),
   "Anio" NUMBER(10) ,
   "Trimestre" NUMBER(10)
);

-- Creating table 'DtsDocumentoInstancia'
CREATE TABLE "ABAX_XBRL"."DtsDocumentoInstancia" (
   "IdDtsDocumentoInstancia" NUMBER(19) GENERATED AS IDENTITY NOT NULL,
   "IdDocumentoInstancia" NUMBER(19) NOT NULL,
   "Href" VARCHAR2 (4000 CHAR) NOT NULL,
   "Rol" VARCHAR2 (500 CHAR) ,
   "RolUri" VARCHAR2 (500 CHAR) ,
   "TipoReferencia" NUMBER(10) NOT NULL
);

-- Creating table 'Empresa'
CREATE TABLE "ABAX_XBRL"."Empresa" (
   "IdEmpresa" NUMBER(19) GENERATED AS IDENTITY NOT NULL,
   "RazonSocial" VARCHAR2 (400 CHAR) NOT NULL,
   "NombreCorto" VARCHAR2 (50 CHAR) NOT NULL,
   "RFC" VARCHAR2 (50 CHAR) ,
   "DomicilioFiscal" VARCHAR2 (2000 CHAR) ,
   "Borrado" NUMBER(1) 
);

-- Creating table 'Facultad'
CREATE TABLE "ABAX_XBRL"."Facultad" (
   "IdFacultad" NUMBER(19) NOT NULL,
   "Nombre" VARCHAR2 (200 CHAR) NOT NULL,
   "Descripcion" VARCHAR2 (4000 CHAR) ,
   "IdCategoriaFacultad" NUMBER(19) NOT NULL,
   "Borrado" NUMBER(1) NOT NULL
);

-- Creating table 'GrupoUsuarios'
CREATE TABLE "ABAX_XBRL"."GrupoUsuarios" (
   "IdGrupoUsuarios" NUMBER(19) GENERATED AS IDENTITY NOT NULL,
   "Nombre" VARCHAR2 (200 CHAR) NOT NULL,
   "Descripcion" VARCHAR2 (4000 CHAR) NOT NULL,
   "IdEmpresa" NUMBER(19) NOT NULL,
   "Borrado" NUMBER(1) 
);

-- Creating table 'GrupoUsuariosRol'
CREATE TABLE "ABAX_XBRL"."GrupoUsuariosRol" (
   "IdGrupoUsuariosRol" NUMBER(19) GENERATED AS IDENTITY NOT NULL,
   "IdGrupoUsuario" NUMBER(19) NOT NULL,
   "IdRol" NUMBER(19) NOT NULL
);

-- Creating table 'Hecho'
CREATE TABLE "ABAX_XBRL"."Hecho" (
   "IdHecho" NUMBER(19) GENERATED AS IDENTITY NOT NULL,
   "Concepto" VARCHAR2 (4000 CHAR) NOT NULL,
   "Valor" CLOB ,
   "IdContexto" NUMBER(19) ,
   "IdUnidad" NUMBER(19) ,
   "Precision" VARCHAR2 (100 CHAR) ,
   "Decimales" VARCHAR2 (100 CHAR) ,
   "IdTipoDato" NUMBER(19) ,
   "IdDocumentoInstancia" NUMBER(19) NOT NULL,
   "EspacioNombres" VARCHAR2 (4000 CHAR) NOT NULL,
   "IdConcepto" VARCHAR2 (500 CHAR) ,
   "EsTupla" NUMBER(1) NOT NULL,
   "IdInternoTuplaPadre" NUMBER(19) ,
   "IdInterno" NUMBER(19) ,
   "IdRef" VARCHAR2 (500 CHAR) 
);

-- Creating table 'Modulo'
CREATE TABLE "ABAX_XBRL"."Modulo" (
   "IdModulo" NUMBER(19) NOT NULL,
   "Nombre" VARCHAR2 (200 CHAR) NOT NULL,
   "Descripcion" VARCHAR2 (4000 CHAR) 
);

-- Creating table 'NotaAlPie'
CREATE TABLE "ABAX_XBRL"."NotaAlPie" (
   "IdNotaAlPie" NUMBER(19) GENERATED AS IDENTITY NOT NULL,
   "Idioma" VARCHAR2 (50 CHAR) ,
   "Valor" CLOB ,
   "IdDocumentoInstancia" NUMBER(19) NOT NULL,
   "IdRef" VARCHAR2 (255 CHAR) NOT NULL,
   "Rol" VARCHAR2 (500 CHAR) 
);

-- Creating table 'RegistroAuditoria'
CREATE TABLE "ABAX_XBRL"."RegistroAuditoria" (
   "IdRegistroAuditoria" NUMBER(19) GENERATED AS IDENTITY NOT NULL,
   "Fecha" TIMESTAMP NOT NULL,
   "IdUsuario" NUMBER(19) NOT NULL,
   "IdModulo" NUMBER(19) NOT NULL,
   "IdAccionAuditable" NUMBER(19) NOT NULL,
   "Registro" CLOB NOT NULL,
   "IdEmpresa" NUMBER(19) 
);

-- Creating table 'Rol'
CREATE TABLE "ABAX_XBRL"."Rol" (
   "IdRol" NUMBER(19) GENERATED AS IDENTITY NOT NULL,
   "Nombre" VARCHAR2 (200 CHAR) NOT NULL,
   "Descripcion" VARCHAR2 (4000 CHAR) ,
   "IdEmpresa" NUMBER(19) NOT NULL,
   "Borrado" NUMBER(1) 
);

-- Creating table 'RolFacultad'
CREATE TABLE "ABAX_XBRL"."RolFacultad" (
   "IdRolFacultad" NUMBER(19) GENERATED AS IDENTITY NOT NULL,
   "IdRol" NUMBER(19) NOT NULL,
   "IdFacultad" NUMBER(19) NOT NULL
);

-- Creating table 'TaxonomiaXbrl'
CREATE TABLE "ABAX_XBRL"."TaxonomiaXbrl" (
   "IdTaxonomiaXbrl" NUMBER(19) GENERATED AS IDENTITY NOT NULL,
   "Nombre" VARCHAR2 (300 CHAR) ,
   "Descripcion" VARCHAR2 (1000 CHAR) ,
   "Anio" NUMBER(10) ,
   "EspacioNombresPrincipal" VARCHAR2 (1000 CHAR) 
);

-- Creating table 'TipoDato'
CREATE TABLE "ABAX_XBRL"."TipoDato" (
   "IdTipoDato" NUMBER(19) NOT NULL,
   "Nombre" VARCHAR2 (200 CHAR) NOT NULL,
   "EsNumerico" NUMBER(1) NOT NULL,
   "EsFraccion" NUMBER(1) NOT NULL,
   "NombreXbrl" VARCHAR2 (200 CHAR) NOT NULL
);

-- Creating table 'Unidad'
CREATE TABLE "ABAX_XBRL"."Unidad" (
   "IdUnidad" NUMBER(19) GENERATED AS IDENTITY NOT NULL,
   "Medida" VARCHAR2 (4000 CHAR) ,
   "Numerador" VARCHAR2 (4000 CHAR) ,
   "Denominador" VARCHAR2 (4000 CHAR) ,
   "EsFraccion" NUMBER(1) NOT NULL,
   "IdDocumentoInstancia" NUMBER(19) ,
   "IdRef" VARCHAR2 (500 CHAR) NOT NULL
);

-- Creating table 'Usuario'
CREATE TABLE "ABAX_XBRL"."Usuario" (
   "IdUsuario" NUMBER(19) GENERATED AS IDENTITY NOT NULL,
   "Nombre" VARCHAR2 (200 CHAR) NOT NULL,
   "ApellidoPaterno" VARCHAR2 (200 CHAR) NOT NULL,
   "ApellidoMaterno" VARCHAR2 (200 CHAR) ,
   "CorreoElectronico" VARCHAR2 (400 CHAR) NOT NULL,
   "Password" VARCHAR2 (50 CHAR) NOT NULL,
   "HistoricoPassword" VARCHAR2 (500 CHAR) ,
   "VigenciaPassword" TIMESTAMP NOT NULL,
   "IntentosErroneosLogin" NUMBER(10) ,
   "Bloqueado" NUMBER(1) NOT NULL,
   "Activo" NUMBER(1) NOT NULL,
   "Puesto" VARCHAR2 (200 CHAR) ,
   "Borrado" NUMBER(1) ,
   "TipoUsuario" NUMBER(10),
   "TokenSesion" CLOB
);

-- Creating table 'UsuarioDocumentoInstancia'
CREATE TABLE "ABAX_XBRL"."UsuarioDocumentoInstancia" (
   "IdusuarioDocumentoInstancia" NUMBER(19) GENERATED AS IDENTITY NOT NULL,
   "IdUsuario" NUMBER(19) NOT NULL,
   "IdDocumentoInstancia" NUMBER(19) NOT NULL,
   "PuedeEscribir" NUMBER(1) NOT NULL,
   "PuedeLeer" NUMBER(1) NOT NULL,
   "EsDueno" NUMBER(1) NOT NULL
);

-- Creating table 'UsuarioEmpresa'
CREATE TABLE "ABAX_XBRL"."UsuarioEmpresa" (
   "IdUsuarioEmpresa" NUMBER(19) GENERATED AS IDENTITY NOT NULL,
   "IdUsuario" NUMBER(19) NOT NULL,
   "IdEmpresa" NUMBER(19) NOT NULL
);

-- Creating table 'UsuarioGrupo'
CREATE TABLE "ABAX_XBRL"."UsuarioGrupo" (
   "IdUsuarioGrupo" NUMBER(19) GENERATED AS IDENTITY NOT NULL,
   "IdUsuario" NUMBER(19) NOT NULL,
   "IdGrupoUsuarios" NUMBER(19) NOT NULL
);

-- Creating table 'UsuarioRol'
CREATE TABLE "ABAX_XBRL"."UsuarioRol" (
   "IdUsuarioRol" NUMBER(19) GENERATED AS IDENTITY NOT NULL,
   "IdUsuario" NUMBER(19) NOT NULL,
   "IdRol" NUMBER(19) NOT NULL
);

-- Creating table 'VersionDocumentoInstancia'
CREATE TABLE "ABAX_XBRL"."VersionDocumentoInstancia" (
   "IdVersionDocumentoInstancia" NUMBER(19) GENERATED AS IDENTITY NOT NULL,
   "IdDocumentoInstancia" NUMBER(19) NOT NULL,
   "Version" NUMBER(10) NOT NULL,
   "IdUsuario" NUMBER(19) NOT NULL,
   "Fecha" TIMESTAMP NOT NULL,
   "Comentarios" VARCHAR2 (4000 CHAR) ,
   "Datos" CLOB NOT NULL,
   "IdEmpresa" NUMBER(19) NOT NULL,
   "EsCorrecto" NUMBER(1) NOT NULL
);


-- ---------------------------------------------------------------
-- Tablas 1.8.4.
-- ---------------------------------------------------------------

CREATE TABLE "ABAX_XBRL"."ConsultaAnalisis" (
   "IdConsultaAnalisis" NUMBER(19) GENERATED AS IDENTITY NOT NULL,
   "Nombre" VARCHAR2(500 CHAR) NOT NULL,
   "Descripcion" VARCHAR2(1000 CHAR),
   "TipoConsulta" NUMBER(10) NULL,
	"IdTaxonomiaXbrl" NUMBER(19) NULL,
);

CREATE TABLE "ABAX_XBRL"."ConsultaAnalisisPeriodo" (
   "IdConsultaAnalisisPeriodo" NUMBER(19) GENERATED AS IDENTITY NOT NULL,
   "IdConsultaAnalisis" NUMBER(19) NOT NULL,
   "Periodo" VARCHAR2(400 CHAR) NOT NULL,
   "Fecha" TIMESTAMP,
   "FechaInicio" TIMESTAMP,
   "FechaFinal" TIMESTAMP,
   "TipoPeriodo" NUMBER(10)
);
   
CREATE TABLE "ABAX_XBRL"."ConsultaAnalisisEntidad" (
   "IdConsultaAnalisisEntidad" NUMBER(19) GENERATED AS IDENTITY NOT NULL,
   "IdConsultaAnalisis" NUMBER(19) NOT NULL,
   "idEmpresa" NUMBER(19) NOT NULL,
   "NombreEntidad" VARCHAR2(50 CHAR)
);

CREATE TABLE "ABAX_XBRL"."ConsultaAnalisisConcepto" (
   "IdConsultaAnalisisConcepto" NUMBER(19) GENERATED AS IDENTITY NOT NULL,
   "IdConsultaAnalisis" NUMBER(19) NOT NULL,
   "idConcepto" VARCHAR2(500 CHAR) NOT NULL,
   "descripcionConcepto" VARCHAR2(4000)
);

-- --------------------------------------------------
-- Creating all PRIMARY KEY constraints
-- --------------------------------------------------

-- Creating primary key on "IdAccionAuditable"in table 'AccionAuditable'
ALTER TABLE "ABAX_XBRL"."AccionAuditable"
ADD CONSTRAINT "PK_AccionAuditable"
   PRIMARY KEY ("IdAccionAuditable" )
   ENABLE
   VALIDATE;


-- Creating primary key on "IdAlerta"in table 'Alerta'
ALTER TABLE "ABAX_XBRL"."Alerta"
ADD CONSTRAINT "PK_Alerta"
   PRIMARY KEY ("IdAlerta" )
   ENABLE
   VALIDATE;


-- Creating primary key on "IdArchivoTaxonomiaXbrl"in table 'ArchivoTaxonomiaXbrl'
ALTER TABLE "ABAX_XBRL"."ArchivoTaxonomiaXbrl"
ADD CONSTRAINT "PK_ArchivoTaxonomiaXbrl"
   PRIMARY KEY ("IdArchivoTaxonomiaXbrl" )
   ENABLE
   VALIDATE;


-- Creating primary key on "IdCategoriaFacultad"in table 'CategoriaFacultad'
ALTER TABLE "ABAX_XBRL"."CategoriaFacultad"
ADD CONSTRAINT "PK_CategoriaFacultad"
   PRIMARY KEY ("IdCategoriaFacultad" )
   ENABLE
   VALIDATE;


-- Creating primary key on "IdContexto"in table 'Contexto'
ALTER TABLE "ABAX_XBRL"."Contexto"
ADD CONSTRAINT "PK_Contexto"
   PRIMARY KEY ("IdContexto" )
   ENABLE
   VALIDATE;


-- Creating primary key on "IdDocumentoInstancia"in table 'DocumentoInstancia'
ALTER TABLE "ABAX_XBRL"."DocumentoInstancia"
ADD CONSTRAINT "PK_DocumentoInstancia"
   PRIMARY KEY ("IdDocumentoInstancia" )
   ENABLE
   VALIDATE;


-- Creating primary key on "IdDtsDocumentoInstancia"in table 'DtsDocumentoInstancia'
ALTER TABLE "ABAX_XBRL"."DtsDocumentoInstancia"
ADD CONSTRAINT "PK_DtsDocumentoInstancia"
   PRIMARY KEY ("IdDtsDocumentoInstancia" )
   ENABLE
   VALIDATE;


-- Creating primary key on "IdEmpresa"in table 'Empresa'
ALTER TABLE "ABAX_XBRL"."Empresa"
ADD CONSTRAINT "PK_Empresa"
   PRIMARY KEY ("IdEmpresa" )
   ENABLE
   VALIDATE;


-- Creating primary key on "IdFacultad"in table 'Facultad'
ALTER TABLE "ABAX_XBRL"."Facultad"
ADD CONSTRAINT "PK_Facultad"
   PRIMARY KEY ("IdFacultad" )
   ENABLE
   VALIDATE;


-- Creating primary key on "IdGrupoUsuarios"in table 'GrupoUsuarios'
ALTER TABLE "ABAX_XBRL"."GrupoUsuarios"
ADD CONSTRAINT "PK_GrupoUsuarios"
   PRIMARY KEY ("IdGrupoUsuarios" )
   ENABLE
   VALIDATE;


-- Creating primary key on "IdGrupoUsuariosRol"in table 'GrupoUsuariosRol'
ALTER TABLE "ABAX_XBRL"."GrupoUsuariosRol"
ADD CONSTRAINT "PK_GrupoUsuariosRol"
   PRIMARY KEY ("IdGrupoUsuariosRol" )
   ENABLE
   VALIDATE;


-- Creating primary key on "IdHecho"in table 'Hecho'
ALTER TABLE "ABAX_XBRL"."Hecho"
ADD CONSTRAINT "PK_Hecho"
   PRIMARY KEY ("IdHecho" )
   ENABLE
   VALIDATE;


-- Creating primary key on "IdModulo"in table 'Modulo'
ALTER TABLE "ABAX_XBRL"."Modulo"
ADD CONSTRAINT "PK_Modulo"
   PRIMARY KEY ("IdModulo" )
   ENABLE
   VALIDATE;


-- Creating primary key on "IdNotaAlPie"in table 'NotaAlPie'
ALTER TABLE "ABAX_XBRL"."NotaAlPie"
ADD CONSTRAINT "PK_NotaAlPie"
   PRIMARY KEY ("IdNotaAlPie" )
   ENABLE
   VALIDATE;


-- Creating primary key on "IdRegistroAuditoria"in table 'RegistroAuditoria'
ALTER TABLE "ABAX_XBRL"."RegistroAuditoria"
ADD CONSTRAINT "PK_RegistroAuditoria"
   PRIMARY KEY ("IdRegistroAuditoria" )
   ENABLE
   VALIDATE;


-- Creating primary key on "IdRol"in table 'Rol'
ALTER TABLE "ABAX_XBRL"."Rol"
ADD CONSTRAINT "PK_Rol"
   PRIMARY KEY ("IdRol" )
   ENABLE
   VALIDATE;


-- Creating primary key on "IdRolFacultad"in table 'RolFacultad'
ALTER TABLE "ABAX_XBRL"."RolFacultad"
ADD CONSTRAINT "PK_RolFacultad"
   PRIMARY KEY ("IdRolFacultad" )
   ENABLE
   VALIDATE;


-- Creating primary key on "IdTaxonomiaXbrl"in table 'TaxonomiaXbrl'
ALTER TABLE "ABAX_XBRL"."TaxonomiaXbrl"
ADD CONSTRAINT "PK_TaxonomiaXbrl"
   PRIMARY KEY ("IdTaxonomiaXbrl" )
   ENABLE
   VALIDATE;


-- Creating primary key on "IdTipoDato"in table 'TipoDato'
ALTER TABLE "ABAX_XBRL"."TipoDato"
ADD CONSTRAINT "PK_TipoDato"
   PRIMARY KEY ("IdTipoDato" )
   ENABLE
   VALIDATE;


-- Creating primary key on "IdUnidad"in table 'Unidad'
ALTER TABLE "ABAX_XBRL"."Unidad"
ADD CONSTRAINT "PK_Unidad"
   PRIMARY KEY ("IdUnidad" )
   ENABLE
   VALIDATE;


-- Creating primary key on "IdUsuario"in table 'Usuario'
ALTER TABLE "ABAX_XBRL"."Usuario"
ADD CONSTRAINT "PK_Usuario"
   PRIMARY KEY ("IdUsuario" )
   ENABLE
   VALIDATE;


-- Creating primary key on "IdusuarioDocumentoInstancia"in table 'UsuarioDocumentoInstancia'
ALTER TABLE "ABAX_XBRL"."UsuarioDocumentoInstancia"
ADD CONSTRAINT "PK_UsuarioDocumentoInstancia"
   PRIMARY KEY ("IdusuarioDocumentoInstancia" )
   ENABLE
   VALIDATE;


-- Creating primary key on "IdUsuarioEmpresa"in table 'UsuarioEmpresa'
ALTER TABLE "ABAX_XBRL"."UsuarioEmpresa"
ADD CONSTRAINT "PK_UsuarioEmpresa"
   PRIMARY KEY ("IdUsuarioEmpresa" )
   ENABLE
   VALIDATE;


-- Creating primary key on "IdUsuarioGrupo"in table 'UsuarioGrupo'
ALTER TABLE "ABAX_XBRL"."UsuarioGrupo"
ADD CONSTRAINT "PK_UsuarioGrupo"
   PRIMARY KEY ("IdUsuarioGrupo" )
   ENABLE
   VALIDATE;


-- Creating primary key on "IdUsuarioRol"in table 'UsuarioRol'
ALTER TABLE "ABAX_XBRL"."UsuarioRol"
ADD CONSTRAINT "PK_UsuarioRol"
   PRIMARY KEY ("IdUsuarioRol" )
   ENABLE
   VALIDATE;


-- Creating primary key on "IdVersionDocumentoInstancia"in table 'VersionDocumentoInstancia'
ALTER TABLE "ABAX_XBRL"."VersionDocumentoInstancia"
ADD CONSTRAINT "PK_VersionDocumentoInstancia"
   PRIMARY KEY ("IdVersionDocumentoInstancia" )
   ENABLE
   VALIDATE;
   
-- ---------------------------------------------------------------
-- Llaves primarias 1.8.4.
-- ---------------------------------------------------------------   
ALTER TABLE "ABAX_XBRL"."ConsultaAnalisis"
ADD CONSTRAINT "PK_ConsultaAnalisis"
   PRIMARY KEY ("IdConsultaAnalisis" )
   ENABLE
   VALIDATE;

ALTER TABLE "ABAX_XBRL"."ConsultaAnalisisPeriodo"
ADD CONSTRAINT "PK_ConsultaAnalisisPeriodo"
   PRIMARY KEY ("IdConsultaAnalisisPeriodo")
   ENABLE
   VALIDATE;

ALTER TABLE "ABAX_XBRL"."ConsultaAnalisisEntidad"
ADD CONSTRAINT "PK_ConsultaAnalisisEntidad"
   PRIMARY KEY ("IdConsultaAnalisisEntidad")
   ENABLE
   VALIDATE;


ALTER TABLE "ABAX_XBRL"."ConsultaAnalisisConcepto"
ADD CONSTRAINT "PK_ConsultaAnalisisConcepto"
   PRIMARY KEY ("IdConsultaAnalisisConcepto")
   ENABLE
   VALIDATE;


-- --------------------------------------------------
-- Creating all FOREIGN KEY constraints
-- --------------------------------------------------

-- Creating foreign key on "IdAccionAuditable" in table 'RegistroAuditoria'
ALTER TABLE "ABAX_XBRL"."RegistroAuditoria"
ADD CONSTRAINT "FK_RegistroAuditoria_AccionAud"
   FOREIGN KEY ("IdAccionAuditable")
   REFERENCES "ABAX_XBRL"."AccionAuditable"
       ("IdAccionAuditable")
   ENABLE
   VALIDATE;

-- Creating index for FOREIGN KEY 'FK_RegistroAuditoria_AccionAuditable'
CREATE INDEX "IX_FK_RegistroAuditoria_Accion"
ON "ABAX_XBRL"."RegistroAuditoria"
   ("IdAccionAuditable");

-- Creating foreign key on "IdDocumentoInstancia" in table 'Alerta'
ALTER TABLE "ABAX_XBRL"."Alerta"
ADD CONSTRAINT "FK_Alerta_DocumentoInstancia"
   FOREIGN KEY ("IdDocumentoInstancia")
   REFERENCES "ABAX_XBRL"."DocumentoInstancia"
       ("IdDocumentoInstancia")
   ON DELETE CASCADE
   ENABLE
   VALIDATE;

-- Creating index for FOREIGN KEY 'FK_Alerta_DocumentoInstancia'
CREATE INDEX "IX_FK_Alerta_DocumentoInstanci"
ON "ABAX_XBRL"."Alerta"
   ("IdDocumentoInstancia");

-- Creating foreign key on "IdTaxonomiaXbrl" in table 'ArchivoTaxonomiaXbrl'
ALTER TABLE "ABAX_XBRL"."ArchivoTaxonomiaXbrl"
ADD CONSTRAINT "FK_ArchivoTaxonomiaXbrl_Taxono"
   FOREIGN KEY ("IdTaxonomiaXbrl")
   REFERENCES "ABAX_XBRL"."TaxonomiaXbrl"
       ("IdTaxonomiaXbrl")
   ENABLE
   VALIDATE;

-- Creating index for FOREIGN KEY 'FK_ArchivoTaxonomiaXbrl_TaxonomiaXbrl'
CREATE INDEX "IX_FK_ArchivoTaxonomiaXbrl_Tax"
ON "ABAX_XBRL"."ArchivoTaxonomiaXbrl"
   ("IdTaxonomiaXbrl");

-- Creating foreign key on "IdCategoriaFacultad" in table 'Facultad'
ALTER TABLE "ABAX_XBRL"."Facultad"
ADD CONSTRAINT "FK_Facultad_CategoriaFacultad"
   FOREIGN KEY ("IdCategoriaFacultad")
   REFERENCES "ABAX_XBRL"."CategoriaFacultad"
       ("IdCategoriaFacultad")
   ENABLE
   VALIDATE;

-- Creating index for FOREIGN KEY 'FK_Facultad_CategoriaFacultad'
CREATE INDEX "IX_FK_Facultad_CategoriaFacult"
ON "ABAX_XBRL"."Facultad"
   ("IdCategoriaFacultad");

-- Creating foreign key on "IdDocumentoInstancia" in table 'Contexto'
ALTER TABLE "ABAX_XBRL"."Contexto"
ADD CONSTRAINT "FK_Contexto_DocumentoInstancia"
   FOREIGN KEY ("IdDocumentoInstancia")
   REFERENCES "ABAX_XBRL"."DocumentoInstancia"
       ("IdDocumentoInstancia")
   ON DELETE CASCADE
   ENABLE
   VALIDATE;

-- Creating index for FOREIGN KEY 'FK_Contexto_DocumentoInstancia'
CREATE INDEX "IX_FK_Contexto_DocumentoInstan"
ON "ABAX_XBRL"."Contexto"
   ("IdDocumentoInstancia");

-- Creating foreign key on "IdContexto" in table 'Hecho'
ALTER TABLE "ABAX_XBRL"."Hecho"
ADD CONSTRAINT "FK_Hecho_Contexto"
   FOREIGN KEY ("IdContexto")
   REFERENCES "ABAX_XBRL"."Contexto"
       ("IdContexto")
   ENABLE
   VALIDATE;

-- Creating index for FOREIGN KEY 'FK_Hecho_Contexto'
CREATE INDEX "IX_FK_Hecho_Contexto"
ON "ABAX_XBRL"."Hecho"
   ("IdContexto");

-- Creating foreign key on "IdEmpresa" in table 'DocumentoInstancia'
ALTER TABLE "ABAX_XBRL"."DocumentoInstancia"
ADD CONSTRAINT "FK_DocumentoInstancia_Empresa"
   FOREIGN KEY ("IdEmpresa")
   REFERENCES "ABAX_XBRL"."Empresa"
       ("IdEmpresa")
   ENABLE
   VALIDATE;

-- Creating index for FOREIGN KEY 'FK_DocumentoInstancia_Empresa'
CREATE INDEX "IX_FK_DocumentoInstancia_Empre"
ON "ABAX_XBRL"."DocumentoInstancia"
   ("IdEmpresa");

-- Creating foreign key on "IdUsuarioUltMod" in table 'DocumentoInstancia'
ALTER TABLE "ABAX_XBRL"."DocumentoInstancia"
ADD CONSTRAINT "FK_DocumentoInstancia_Usuario_"
   FOREIGN KEY ("IdUsuarioUltMod")
   REFERENCES "ABAX_XBRL"."Usuario"
       ("IdUsuario")
   ENABLE
   VALIDATE;

-- Creating index for FOREIGN KEY 'FK_DocumentoInstancia_Usuario_Ult'
CREATE INDEX "IX_FK_DocumentoInstancia_Usuar"
ON "ABAX_XBRL"."DocumentoInstancia"
   ("IdUsuarioUltMod");

-- Creating foreign key on "IdDocumentoInstancia" in table 'DtsDocumentoInstancia'
ALTER TABLE "ABAX_XBRL"."DtsDocumentoInstancia"
ADD CONSTRAINT "FK_DtsDocumentoInstancia_Docum"
   FOREIGN KEY ("IdDocumentoInstancia")
   REFERENCES "ABAX_XBRL"."DocumentoInstancia"
       ("IdDocumentoInstancia")
   ON DELETE CASCADE
   ENABLE
   VALIDATE;

-- Creating index for FOREIGN KEY 'FK_DtsDocumentoInstancia_DocumentoInstancia'
CREATE INDEX "IX_FK_DtsDocumentoInstancia_Do"
ON "ABAX_XBRL"."DtsDocumentoInstancia"
   ("IdDocumentoInstancia");

-- Creating foreign key on "IdDocumentoInstancia" in table 'Hecho'
ALTER TABLE "ABAX_XBRL"."Hecho"
ADD CONSTRAINT "FK_Hecho_DocumentoInstancia"
   FOREIGN KEY ("IdDocumentoInstancia")
   REFERENCES "ABAX_XBRL"."DocumentoInstancia"
       ("IdDocumentoInstancia")
   ON DELETE CASCADE
   ENABLE
   VALIDATE;

-- Creating index for FOREIGN KEY 'FK_Hecho_DocumentoInstancia'
CREATE INDEX "IX_FK_Hecho_DocumentoInstancia"
ON "ABAX_XBRL"."Hecho"
   ("IdDocumentoInstancia");

-- Creating foreign key on "IdDocumentoInstancia" in table 'NotaAlPie'
ALTER TABLE "ABAX_XBRL"."NotaAlPie"
ADD CONSTRAINT "FK_NotaAlPie_DocumentoInstanci"
   FOREIGN KEY ("IdDocumentoInstancia")
   REFERENCES "ABAX_XBRL"."DocumentoInstancia"
       ("IdDocumentoInstancia")
   ON DELETE CASCADE
   ENABLE
   VALIDATE;

-- Creating index for FOREIGN KEY 'FK_NotaAlPie_DocumentoInstancia'
CREATE INDEX "IX_FK_NotaAlPie_DocumentoInsta"
ON "ABAX_XBRL"."NotaAlPie"
   ("IdDocumentoInstancia");

-- Creating foreign key on "IdDocumentoInstancia" in table 'Unidad'
ALTER TABLE "ABAX_XBRL"."Unidad"
ADD CONSTRAINT "FK_Unidad_DocumentoInstancia"
   FOREIGN KEY ("IdDocumentoInstancia")
   REFERENCES "ABAX_XBRL"."DocumentoInstancia"
       ("IdDocumentoInstancia")
   ON DELETE CASCADE
   ENABLE
   VALIDATE;

-- Creating index for FOREIGN KEY 'FK_Unidad_DocumentoInstancia'
CREATE INDEX "IX_FK_Unidad_DocumentoInstanci"
ON "ABAX_XBRL"."Unidad"
   ("IdDocumentoInstancia");

-- Creating foreign key on "IdDocumentoInstancia" in table 'UsuarioDocumentoInstancia'
ALTER TABLE "ABAX_XBRL"."UsuarioDocumentoInstancia"
ADD CONSTRAINT "FK_UsuarioDocumentoInstancia_D"
   FOREIGN KEY ("IdDocumentoInstancia")
   REFERENCES "ABAX_XBRL"."DocumentoInstancia"
       ("IdDocumentoInstancia")
   ON DELETE CASCADE
   ENABLE
   VALIDATE;

-- Creating index for FOREIGN KEY 'FK_UsuarioDocumentoInstancia_DocumentoInstancia'
CREATE INDEX "IX_FK_UsuarioDocumentoInstancA"
ON "ABAX_XBRL"."UsuarioDocumentoInstancia"
   ("IdDocumentoInstancia");

-- Creating foreign key on "IdDocumentoInstancia" in table 'VersionDocumentoInstancia'
ALTER TABLE "ABAX_XBRL"."VersionDocumentoInstancia"
ADD CONSTRAINT "FK_VersionDocumentoInstancia_D"
   FOREIGN KEY ("IdDocumentoInstancia")
   REFERENCES "ABAX_XBRL"."DocumentoInstancia"
       ("IdDocumentoInstancia")
   ON DELETE CASCADE
   ENABLE
   VALIDATE;

-- Creating index for FOREIGN KEY 'FK_VersionDocumentoInstancia_DocumentoInstancia'
CREATE INDEX "IX_FK_VersionDocumentoInstancA"
ON "ABAX_XBRL"."VersionDocumentoInstancia"
   ("IdDocumentoInstancia");

-- Creating foreign key on "IdEmpresa" in table 'GrupoUsuarios'
ALTER TABLE "ABAX_XBRL"."GrupoUsuarios"
ADD CONSTRAINT "FK_GrupoUsuarios_Empresa"
   FOREIGN KEY ("IdEmpresa")
   REFERENCES "ABAX_XBRL"."Empresa"
       ("IdEmpresa")
   ENABLE
   VALIDATE;

-- Creating index for FOREIGN KEY 'FK_GrupoUsuarios_Empresa'
CREATE INDEX "IX_FK_GrupoUsuarios_Empresa"
ON "ABAX_XBRL"."GrupoUsuarios"
   ("IdEmpresa");

-- Creating foreign key on "IdEmpresa" in table 'RegistroAuditoria'
ALTER TABLE "ABAX_XBRL"."RegistroAuditoria"
ADD CONSTRAINT "FK_RegistroAuditoria_Empresa"
   FOREIGN KEY ("IdEmpresa")
   REFERENCES "ABAX_XBRL"."Empresa"
       ("IdEmpresa")
   ENABLE
   VALIDATE;

-- Creating index for FOREIGN KEY 'FK_RegistroAuditoria_Empresa'
CREATE INDEX "IX_FK_RegistroAuditoria_Empres"
ON "ABAX_XBRL"."RegistroAuditoria"
   ("IdEmpresa");

-- Creating foreign key on "IdEmpresa" in table 'Rol'
ALTER TABLE "ABAX_XBRL"."Rol"
ADD CONSTRAINT "FK_Rol_Empresa"
   FOREIGN KEY ("IdEmpresa")
   REFERENCES "ABAX_XBRL"."Empresa"
       ("IdEmpresa")
   ENABLE
   VALIDATE;

-- Creating index for FOREIGN KEY 'FK_Rol_Empresa'
CREATE INDEX "IX_FK_Rol_Empresa"
ON "ABAX_XBRL"."Rol"
   ("IdEmpresa");

-- Creating foreign key on "IdEmpresa" in table 'UsuarioEmpresa'
ALTER TABLE "ABAX_XBRL"."UsuarioEmpresa"
ADD CONSTRAINT "FK_UsuarioEmpresa_Empresa"
   FOREIGN KEY ("IdEmpresa")
   REFERENCES "ABAX_XBRL"."Empresa"
       ("IdEmpresa")
   ENABLE
   VALIDATE;

-- Creating index for FOREIGN KEY 'FK_UsuarioEmpresa_Empresa'
CREATE INDEX "IX_FK_UsuarioEmpresa_Empresa"
ON "ABAX_XBRL"."UsuarioEmpresa"
   ("IdEmpresa");

-- Creating foreign key on "IdEmpresa" in table 'VersionDocumentoInstancia'
ALTER TABLE "ABAX_XBRL"."VersionDocumentoInstancia"
ADD CONSTRAINT "FK_VersionDocumentoInstancia_E"
   FOREIGN KEY ("IdEmpresa")
   REFERENCES "ABAX_XBRL"."Empresa"
       ("IdEmpresa")
   ENABLE
   VALIDATE;

-- Creating index for FOREIGN KEY 'FK_VersionDocumentoInstancia_Empresa'
CREATE INDEX "IX_FK_VersionDocumentoInstancB"
ON "ABAX_XBRL"."VersionDocumentoInstancia"
   ("IdEmpresa");

-- Creating foreign key on "IdFacultad" in table 'RolFacultad'
ALTER TABLE "ABAX_XBRL"."RolFacultad"
ADD CONSTRAINT "FK_RolFacultad_Facultad1"
   FOREIGN KEY ("IdFacultad")
   REFERENCES "ABAX_XBRL"."Facultad"
       ("IdFacultad")
   ENABLE
   VALIDATE;

-- Creating index for FOREIGN KEY 'FK_RolFacultad_Facultad1'
CREATE INDEX "IX_FK_RolFacultad_Facultad1"
ON "ABAX_XBRL"."RolFacultad"
   ("IdFacultad");

-- Creating foreign key on "IdGrupoUsuario" in table 'GrupoUsuariosRol'
ALTER TABLE "ABAX_XBRL"."GrupoUsuariosRol"
ADD CONSTRAINT "FK_GrupoUsuariosRol_GrupoUsuar"
   FOREIGN KEY ("IdGrupoUsuario")
   REFERENCES "ABAX_XBRL"."GrupoUsuarios"
       ("IdGrupoUsuarios")
   ENABLE
   VALIDATE;

-- Creating index for FOREIGN KEY 'FK_GrupoUsuariosRol_GrupoUsuarios'
CREATE INDEX "IX_FK_GrupoUsuariosRol_GrupoUs"
ON "ABAX_XBRL"."GrupoUsuariosRol"
   ("IdGrupoUsuario");

-- Creating foreign key on "IdGrupoUsuarios" in table 'UsuarioGrupo'
ALTER TABLE "ABAX_XBRL"."UsuarioGrupo"
ADD CONSTRAINT "FK_UsuarioGrupo_GrupoUsuarios"
   FOREIGN KEY ("IdGrupoUsuarios")
   REFERENCES "ABAX_XBRL"."GrupoUsuarios"
       ("IdGrupoUsuarios")
   ENABLE
   VALIDATE;

-- Creating index for FOREIGN KEY 'FK_UsuarioGrupo_GrupoUsuarios'
CREATE INDEX "IX_FK_UsuarioGrupo_GrupoUsuari"
ON "ABAX_XBRL"."UsuarioGrupo"
   ("IdGrupoUsuarios");

-- Creating foreign key on "IdRol" in table 'GrupoUsuariosRol'
ALTER TABLE "ABAX_XBRL"."GrupoUsuariosRol"
ADD CONSTRAINT "FK_GrupoUsuariosRol_Rol"
   FOREIGN KEY ("IdRol")
   REFERENCES "ABAX_XBRL"."Rol"
       ("IdRol")
   ENABLE
   VALIDATE;

-- Creating index for FOREIGN KEY 'FK_GrupoUsuariosRol_Rol'
CREATE INDEX "IX_FK_GrupoUsuariosRol_Rol"
ON "ABAX_XBRL"."GrupoUsuariosRol"
   ("IdRol");

-- Creating foreign key on "IdTipoDato" in table 'Hecho'
ALTER TABLE "ABAX_XBRL"."Hecho"
ADD CONSTRAINT "FK_Hecho_TipoDato"
   FOREIGN KEY ("IdTipoDato")
   REFERENCES "ABAX_XBRL"."TipoDato"
       ("IdTipoDato")
   ENABLE
   VALIDATE;

-- Creating index for FOREIGN KEY 'FK_Hecho_TipoDato'
CREATE INDEX "IX_FK_Hecho_TipoDato"
ON "ABAX_XBRL"."Hecho"
   ("IdTipoDato");

-- Creating foreign key on "IdUnidad" in table 'Hecho'
ALTER TABLE "ABAX_XBRL"."Hecho"
ADD CONSTRAINT "FK_Hecho_Unidad1"
   FOREIGN KEY ("IdUnidad")
   REFERENCES "ABAX_XBRL"."Unidad"
       ("IdUnidad")
   ENABLE
   VALIDATE;

-- Creating index for FOREIGN KEY 'FK_Hecho_Unidad1'
CREATE INDEX "IX_FK_Hecho_Unidad1"
ON "ABAX_XBRL"."Hecho"
   ("IdUnidad");

-- Creating foreign key on "IdModulo" in table 'RegistroAuditoria'
ALTER TABLE "ABAX_XBRL"."RegistroAuditoria"
ADD CONSTRAINT "FK_RegistroAuditoria_Modulo"
   FOREIGN KEY ("IdModulo")
   REFERENCES "ABAX_XBRL"."Modulo"
       ("IdModulo")
   ENABLE
   VALIDATE;

-- Creating index for FOREIGN KEY 'FK_RegistroAuditoria_Modulo'
CREATE INDEX "IX_FK_RegistroAuditoria_Modulo"
ON "ABAX_XBRL"."RegistroAuditoria"
   ("IdModulo");

-- Creating foreign key on "IdUsuario" in table 'RegistroAuditoria'
ALTER TABLE "ABAX_XBRL"."RegistroAuditoria"
ADD CONSTRAINT "FK_RegistroAuditoria_Usuario"
   FOREIGN KEY ("IdUsuario")
   REFERENCES "ABAX_XBRL"."Usuario"
       ("IdUsuario")
   ENABLE
   VALIDATE;

-- Creating index for FOREIGN KEY 'FK_RegistroAuditoria_Usuario'
CREATE INDEX "IX_FK_RegistroAuditoria_Usuari"
ON "ABAX_XBRL"."RegistroAuditoria"
   ("IdUsuario");

-- Creating foreign key on "IdRol" in table 'RolFacultad'
ALTER TABLE "ABAX_XBRL"."RolFacultad"
ADD CONSTRAINT "FK_RolFacultad_Rol"
   FOREIGN KEY ("IdRol")
   REFERENCES "ABAX_XBRL"."Rol"
       ("IdRol")
   ENABLE
   VALIDATE;

-- Creating index for FOREIGN KEY 'FK_RolFacultad_Rol'
CREATE INDEX "IX_FK_RolFacultad_Rol"
ON "ABAX_XBRL"."RolFacultad"
   ("IdRol");

-- Creating foreign key on "IdRol" in table 'UsuarioRol'
ALTER TABLE "ABAX_XBRL"."UsuarioRol"
ADD CONSTRAINT "FK_UsuarioRol_Rol"
   FOREIGN KEY ("IdRol")
   REFERENCES "ABAX_XBRL"."Rol"
       ("IdRol")
   ENABLE
   VALIDATE;

-- Creating index for FOREIGN KEY 'FK_UsuarioRol_Rol'
CREATE INDEX "IX_FK_UsuarioRol_Rol"
ON "ABAX_XBRL"."UsuarioRol"
   ("IdRol");

-- Creating foreign key on "IdUsuario" in table 'UsuarioDocumentoInstancia'
ALTER TABLE "ABAX_XBRL"."UsuarioDocumentoInstancia"
ADD CONSTRAINT "FK_UsuarioDocumentoInstancia_U"
   FOREIGN KEY ("IdUsuario")
   REFERENCES "ABAX_XBRL"."Usuario"
       ("IdUsuario")
   ENABLE
   VALIDATE;

-- Creating index for FOREIGN KEY 'FK_UsuarioDocumentoInstancia_Usuario'
CREATE INDEX "IX_FK_UsuarioDocumentoInstancB"
ON "ABAX_XBRL"."UsuarioDocumentoInstancia"
   ("IdUsuario");

-- Creating foreign key on "IdUsuario" in table 'UsuarioEmpresa'
ALTER TABLE "ABAX_XBRL"."UsuarioEmpresa"
ADD CONSTRAINT "FK_UsuarioEmpresa_Usuario"
   FOREIGN KEY ("IdUsuario")
   REFERENCES "ABAX_XBRL"."Usuario"
       ("IdUsuario")
   ENABLE
   VALIDATE;

-- Creating index for FOREIGN KEY 'FK_UsuarioEmpresa_Usuario'
CREATE INDEX "IX_FK_UsuarioEmpresa_Usuario"
ON "ABAX_XBRL"."UsuarioEmpresa"
   ("IdUsuario");

-- Creating foreign key on "IdUsuario" in table 'UsuarioGrupo'
ALTER TABLE "ABAX_XBRL"."UsuarioGrupo"
ADD CONSTRAINT "FK_UsuarioGrupo_Usuario"
   FOREIGN KEY ("IdUsuario")
   REFERENCES "ABAX_XBRL"."Usuario"
       ("IdUsuario")
   ENABLE
   VALIDATE;

-- Creating index for FOREIGN KEY 'FK_UsuarioGrupo_Usuario'
CREATE INDEX "IX_FK_UsuarioGrupo_Usuario"
ON "ABAX_XBRL"."UsuarioGrupo"
   ("IdUsuario");

-- Creating foreign key on "IdUsuario" in table 'UsuarioRol'
ALTER TABLE "ABAX_XBRL"."UsuarioRol"
ADD CONSTRAINT "FK_UsuarioRol_Usuario"
   FOREIGN KEY ("IdUsuario")
   REFERENCES "ABAX_XBRL"."Usuario"
       ("IdUsuario")
   ENABLE
   VALIDATE;

-- Creating index for FOREIGN KEY 'FK_UsuarioRol_Usuario'
CREATE INDEX "IX_FK_UsuarioRol_Usuario"
ON "ABAX_XBRL"."UsuarioRol"
   ("IdUsuario");

-- Creating foreign key on "IdUsuario" in table 'VersionDocumentoInstancia'
ALTER TABLE "ABAX_XBRL"."VersionDocumentoInstancia"
ADD CONSTRAINT "FK_VersionDocumentoInstancia_U"
   FOREIGN KEY ("IdUsuario")
   REFERENCES "ABAX_XBRL"."Usuario"
       ("IdUsuario")
   ENABLE
   VALIDATE;

-- Creating index for FOREIGN KEY 'FK_VersionDocumentoInstancia_Usuario'
CREATE INDEX "IX_FK_VersionDocumentoInstancC"
ON "ABAX_XBRL"."VersionDocumentoInstancia"
   ("IdUsuario");
   
   
-- ---------------------------------------------------------------
-- Llaves foraneas 1.8.4.
-- ---------------------------------------------------------------   

ALTER TABLE "ABAX_XBRL"."ConsultaAnalisisEntidad"
ADD CONSTRAINT "FK_ConsultaAnalisisEntidad_Con"
   FOREIGN KEY ("IdConsultaAnalisis")
   REFERENCES "ABAX_XBRL"."ConsultaAnalisis"
       ("IdConsultaAnalisis")
   ENABLE
   VALIDATE;

CREATE INDEX "IX_FK_ConsAnaEntidad_Con"
ON "ABAX_XBRL"."ConsultaAnalisisEntidad"
   ("IdConsultaAnalisis");
   
ALTER TABLE "ABAX_XBRL"."ConsultaAnalisisPeriodo"
ADD CONSTRAINT "FK_ConsultaAnalisisPeriodo_Con"
   FOREIGN KEY ("IdConsultaAnalisis")
   REFERENCES "ABAX_XBRL"."ConsultaAnalisis"
       ("IdConsultaAnalisis")
   ENABLE
   VALIDATE;

CREATE INDEX "IX_FK_ConsAnaPeriodo_Con"
ON "ABAX_XBRL"."ConsultaAnalisisPeriodo"
   ("IdConsultaAnalisis");
   
ALTER TABLE "ABAX_XBRL"."ConsultaAnalisisConcepto"
ADD CONSTRAINT "FK_ConsultaAnalisisConcepto_Co"
   FOREIGN KEY ("IdConsultaAnalisis")
   REFERENCES "ABAX_XBRL"."ConsultaAnalisis"
       ("IdConsultaAnalisis")
   ENABLE
   VALIDATE;

CREATE INDEX "IX_FK_ConsAnaConcepto_Co"
ON "ABAX_XBRL"."ConsultaAnalisisConcepto"
   ("IdConsultaAnalisis");

-- --------------------------------------------------
-- Script has ended
-- --------------------------------------------------
