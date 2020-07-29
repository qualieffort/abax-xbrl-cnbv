-- --------------------------------------------------
-- Entity Designer DDL Script for Oracle database
-- --------------------------------------------------
-- Date Created: 01/05/2015 02:23:07 p. m.
-- Generated from EDMX file: C:\2H\Proyectos\github\AbaxXBRL\trunk\AbaxXBRLCore\Entities\AbaxModel.edmx
-- --------------------------------------------------


DROP TRIGGER "ABAX_XBRL"."Alerta_TR";
DROP TRIGGER "ABAX_XBRL"."ArchivoTaxonomiaXbrl_TR";
DROP TRIGGER "ABAX_XBRL"."Contexto_TR";
DROP TRIGGER "ABAX_XBRL"."DocumentoInstancia_TR";
DROP TRIGGER "ABAX_XBRL"."DtsDocumentoInstancia_TR";
DROP TRIGGER "ABAX_XBRL"."Empresa_TR";
DROP TRIGGER "ABAX_XBRL"."GrupoUsuarios_TR";
DROP TRIGGER "ABAX_XBRL"."GrupoUsuariosRol_TR";
DROP TRIGGER "ABAX_XBRL"."Hecho_TR";
DROP TRIGGER "ABAX_XBRL"."NotaAlPie_TR";
DROP TRIGGER "ABAX_XBRL"."RegistroAuditoria_TR";
DROP TRIGGER "ABAX_XBRL"."Rol_TR";
DROP TRIGGER "ABAX_XBRL"."RolFacultad_TR";
DROP TRIGGER "ABAX_XBRL"."TaxonomiaXbrl_TR";
DROP TRIGGER "ABAX_XBRL"."Unidad_TR";
DROP TRIGGER "ABAX_XBRL"."Usuario_TR";
DROP TRIGGER "ABAX_XBRL"."UsuarioDocumento_TR";
DROP TRIGGER "ABAX_XBRL"."UsuarioEmpresa_TR";
DROP TRIGGER "ABAX_XBRL"."UsuarioGrupo_TR";
DROP TRIGGER "ABAX_XBRL"."UsuarioRol_TR";
DROP TRIGGER "ABAX_XBRL"."VersionDocumento_TR";


DROP SEQUENCE "ABAX_XBRL"."IdAlerta_SEQ";
DROP SEQUENCE "ABAX_XBRL"."IdArchivoTaxonomiaXbrl_SEQ";
DROP SEQUENCE "ABAX_XBRL"."IdContexto_SEQ";
DROP SEQUENCE "ABAX_XBRL"."IdDocumentoInstancia_SEQ";
DROP SEQUENCE "ABAX_XBRL"."IdDtsDocumentoInstancia_SEQ";
DROP SEQUENCE "ABAX_XBRL"."IdEmpresa_SEQ";
DROP SEQUENCE "ABAX_XBRL"."IdGrupoUsuarios_SEQ";
DROP SEQUENCE "ABAX_XBRL"."IdGrupoUsuariosRol_SEQ";
DROP SEQUENCE "ABAX_XBRL"."IdHecho_SEQ";
DROP SEQUENCE "ABAX_XBRL"."IdNotaAlPie_SEQ";
DROP SEQUENCE "ABAX_XBRL"."IdRegistroAuditoria_SEQ";
DROP SEQUENCE "ABAX_XBRL"."IdRol_SEQ";
DROP SEQUENCE "ABAX_XBRL"."IdRolFacultad_SEQ";
DROP SEQUENCE "ABAX_XBRL"."IdTaxonomiaXbrl_SEQ";
DROP SEQUENCE "ABAX_XBRL"."IdUnidad_SEQ";
DROP SEQUENCE "ABAX_XBRL"."IdUsuario_SEQ";
DROP SEQUENCE "ABAX_XBRL"."IdusuarioDocumento_SEQ";
DROP SEQUENCE "ABAX_XBRL"."IdUsuarioEmpresa_SEQ";
DROP SEQUENCE "ABAX_XBRL"."IdUsuarioGrupo_SEQ";
DROP SEQUENCE "ABAX_XBRL"."IdUsuarioRol_SEQ";
DROP SEQUENCE "ABAX_XBRL"."IdVersionDocumento_SEQ";


-- --------------------------------------------------
--DROPping existing FOREIGN KEY constraints
-- --------------------------------------------------


ALTER TABLE "ABAX_XBRL"."RegistroAuditoria" DROP CONSTRAINT "FK_RegistroAuditoria_AccionAud" CASCADE;

ALTER TABLE "ABAX_XBRL"."Alerta" DROP CONSTRAINT "FK_Alerta_DocumentoInstancia" CASCADE;

ALTER TABLE "ABAX_XBRL"."ArchivoTaxonomiaXbrl" DROP CONSTRAINT "FK_ArchivoTaxonomiaXbrl_Taxono" CASCADE;

ALTER TABLE "ABAX_XBRL"."Facultad" DROP CONSTRAINT "FK_Facultad_CategoriaFacultad" CASCADE;

ALTER TABLE "ABAX_XBRL"."Contexto" DROP CONSTRAINT "FK_Contexto_DocumentoInstancia" CASCADE;

ALTER TABLE "ABAX_XBRL"."Hecho" DROP CONSTRAINT "FK_Hecho_Contexto" CASCADE;

ALTER TABLE "ABAX_XBRL"."DocumentoInstancia" DROP CONSTRAINT "FK_DocumentoInstancia_Empresa" CASCADE;

ALTER TABLE "ABAX_XBRL"."DocumentoInstancia" DROP CONSTRAINT "FK_DocumentoInstancia_Usuario_" CASCADE;

ALTER TABLE "ABAX_XBRL"."DtsDocumentoInstancia" DROP CONSTRAINT "FK_DtsDocumentoInstancia_Docum" CASCADE;

ALTER TABLE "ABAX_XBRL"."Hecho" DROP CONSTRAINT "FK_Hecho_DocumentoInstancia" CASCADE;

ALTER TABLE "ABAX_XBRL"."NotaAlPie" DROP CONSTRAINT "FK_NotaAlPie_DocumentoInstanci" CASCADE;

ALTER TABLE "ABAX_XBRL"."Unidad" DROP CONSTRAINT "FK_Unidad_DocumentoInstancia" CASCADE;

ALTER TABLE "ABAX_XBRL"."UsuarioDocumentoInstancia" DROP CONSTRAINT "FK_UsuarioDocumentoInstancia_D" CASCADE;

ALTER TABLE "ABAX_XBRL"."VersionDocumentoInstancia" DROP CONSTRAINT "FK_VersionDocumentoInstancia_D" CASCADE;

ALTER TABLE "ABAX_XBRL"."GrupoUsuarios" DROP CONSTRAINT "FK_GrupoUsuarios_Empresa" CASCADE;

ALTER TABLE "ABAX_XBRL"."RegistroAuditoria" DROP CONSTRAINT "FK_RegistroAuditoria_Empresa" CASCADE;

ALTER TABLE "ABAX_XBRL"."Rol" DROP CONSTRAINT "FK_Rol_Empresa" CASCADE;

ALTER TABLE "ABAX_XBRL"."UsuarioEmpresa" DROP CONSTRAINT "FK_UsuarioEmpresa_Empresa" CASCADE;

ALTER TABLE "ABAX_XBRL"."VersionDocumentoInstancia" DROP CONSTRAINT "FK_VersionDocumentoInstancia_E" CASCADE;

ALTER TABLE "ABAX_XBRL"."RolFacultad" DROP CONSTRAINT "FK_RolFacultad_Facultad1" CASCADE;

ALTER TABLE "ABAX_XBRL"."GrupoUsuariosRol" DROP CONSTRAINT "FK_GrupoUsuariosRol_GrupoUsuar" CASCADE;

ALTER TABLE "ABAX_XBRL"."UsuarioGrupo" DROP CONSTRAINT "FK_UsuarioGrupo_GrupoUsuarios" CASCADE;

ALTER TABLE "ABAX_XBRL"."GrupoUsuariosRol" DROP CONSTRAINT "FK_GrupoUsuariosRol_Rol" CASCADE;

ALTER TABLE "ABAX_XBRL"."Hecho" DROP CONSTRAINT "FK_Hecho_TipoDato" CASCADE;

ALTER TABLE "ABAX_XBRL"."Hecho" DROP CONSTRAINT "FK_Hecho_Unidad1" CASCADE;

ALTER TABLE "ABAX_XBRL"."RegistroAuditoria" DROP CONSTRAINT "FK_RegistroAuditoria_Modulo" CASCADE;

ALTER TABLE "ABAX_XBRL"."RegistroAuditoria" DROP CONSTRAINT "FK_RegistroAuditoria_Usuario" CASCADE;

ALTER TABLE "ABAX_XBRL"."RolFacultad" DROP CONSTRAINT "FK_RolFacultad_Rol" CASCADE;

ALTER TABLE "ABAX_XBRL"."UsuarioRol" DROP CONSTRAINT "FK_UsuarioRol_Rol" CASCADE;

ALTER TABLE "ABAX_XBRL"."UsuarioDocumentoInstancia" DROP CONSTRAINT "FK_UsuarioDocumentoInstancia_U" CASCADE;

ALTER TABLE "ABAX_XBRL"."UsuarioEmpresa" DROP CONSTRAINT "FK_UsuarioEmpresa_Usuario" CASCADE;

ALTER TABLE "ABAX_XBRL"."UsuarioGrupo" DROP CONSTRAINT "FK_UsuarioGrupo_Usuario" CASCADE;

ALTER TABLE "ABAX_XBRL"."UsuarioRol" DROP CONSTRAINT "FK_UsuarioRol_Usuario" CASCADE;

ALTER TABLE "ABAX_XBRL"."VersionDocumentoInstancia" DROP CONSTRAINT "FK_VersionDocumentoInstancia_U" CASCADE;
-- --------------------------------------------------
--DROPping existing tables
-- --------------------------------------------------

DROP TABLE "ABAX_XBRL"."AccionAuditable";

DROP TABLE "ABAX_XBRL"."Alerta";

DROP TABLE "ABAX_XBRL"."ArchivoTaxonomiaXbrl";

DROP TABLE "ABAX_XBRL"."CategoriaFacultad";

DROP TABLE "ABAX_XBRL"."Contexto";

DROP TABLE "ABAX_XBRL"."DocumentoInstancia";

DROP TABLE "ABAX_XBRL"."DtsDocumentoInstancia";

DROP TABLE "ABAX_XBRL"."Empresa";

DROP TABLE "ABAX_XBRL"."Facultad";

DROP TABLE "ABAX_XBRL"."GrupoUsuarios";

DROP TABLE "ABAX_XBRL"."GrupoUsuariosRol";

DROP TABLE "ABAX_XBRL"."Hecho";

DROP TABLE "ABAX_XBRL"."Modulo";

DROP TABLE "ABAX_XBRL"."NotaAlPie";

DROP TABLE "ABAX_XBRL"."RegistroAuditoria";

DROP TABLE "ABAX_XBRL"."Rol";

DROP TABLE "ABAX_XBRL"."RolFacultad";

DROP TABLE "ABAX_XBRL"."TaxonomiaXbrl";

DROP TABLE "ABAX_XBRL"."TipoDato";

DROP TABLE "ABAX_XBRL"."Unidad";

DROP TABLE "ABAX_XBRL"."Usuario";

DROP TABLE "ABAX_XBRL"."UsuarioDocumentoInstancia";

DROP TABLE "ABAX_XBRL"."UsuarioEmpresa";

DROP TABLE "ABAX_XBRL"."UsuarioGrupo";

DROP TABLE "ABAX_XBRL"."UsuarioRol";

DROP TABLE "ABAX_XBRL"."VersionDocumentoInstancia";

