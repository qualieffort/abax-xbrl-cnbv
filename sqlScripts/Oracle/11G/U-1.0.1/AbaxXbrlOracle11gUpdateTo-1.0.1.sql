--DROP TABLE "ABAX_XBRL"."ConsultaAnalisisEntidad";
--DROP TABLE "ABAX_XBRL"."ConsultaAnalisisPeriodo";
--DROP TABLE "ABAX_XBRL"."ConsultaAnalisisConcepto";
--DROP TABLE "ABAX_XBRL"."ConsultaAnalisis";
--
--DROP SEQUENCE "ABAX_XBRL"."IdConsAna_SEQ";
--DROP SEQUENCE "ABAX_XBRL"."IdConsAnaPeriodo_SEQ";
--DROP SEQUENCE "ABAX_XBRL"."IdConsAnaEntidad_SEQ";
--DROP SEQUENCE "ABAX_XBRL"."IdConsAnaConcepto_SEQ";

DECLARE
  existeConsultaAnalisis number(1);
  existeConsultaAnalisisPeriodo number(1);
  existeConsultaAnalisisEntidad number(1);
  existeConsultaAnalisisConcepto number(1);
  existeExisteColumnaTokenSesion number(1);
  existeExisteColClaveEmisora number(1);
BEGIN

-- Columna TokenSesion
  SELECT CASE WHEN EXISTS (SELECT * FROM ALL_TAB_COLUMNS WHERE COLUMN_NAME = 'TokenSesion' AND  TABLE_NAME = 'Usuario' AND OWNER = 'ABAX_XBRL') then 1 else 0 end  into existeExisteColumnaTokenSesion FROM DUAL;
  IF existeExisteColumnaTokenSesion = 0
  THEN
      DBMS_OUTPUT.put_line('Se agrega columna TokenSesion');
      EXECUTE IMMEDIATE 'ALTER TABLE "ABAX_XBRL"."Usuario" ADD ("TokenSesion" CLOB)';
  ELSE
     DBMS_OUTPUT.put_line('Ya existe la columna TokenSesion');
  END IF;
  
--Columna ClaveEmisora
  SELECT CASE WHEN EXISTS (SELECT * FROM ALL_TAB_COLUMNS WHERE COLUMN_NAME = 'ClaveEmisora' AND  TABLE_NAME = 'DocumentoInstancia' AND OWNER = 'ABAX_XBRL') then 1 else 0 end  into existeExisteColClaveEmisora FROM DUAL;
  IF existeExisteColClaveEmisora = 0
  THEN
      DBMS_OUTPUT.put_line('Se agrega columna ClaveEmisora');
      EXECUTE IMMEDIATE 'ALTER TABLE "ABAX_XBRL"."DocumentoInstancia" ADD ("ClaveEmisora" VARCHAR2 (50 CHAR))';
  ELSE
     DBMS_OUTPUT.put_line('Ya existe la columna ClaveEmisora');
  END IF;

-- ConsultaAnalisis
  SELECT CASE WHEN EXISTS (SELECT * FROM ALL_TABLES WHERE TABLE_NAME = 'ConsultaAnalisis' AND OWNER = 'ABAX_XBRL') then 1 else 0 end  into existeConsultaAnalisis FROM DUAL;
  IF existeConsultaAnalisis = 0
  THEN
    DBMS_OUTPUT.put_line('Creando tabla consulta analisis');
    EXECUTE IMMEDIATE 
    'CREATE TABLE "ABAX_XBRL"."ConsultaAnalisis" (
       "IdConsultaAnalisis" NUMBER(19) NOT NULL,
       "Nombre" VARCHAR2(500 CHAR) NOT NULL,
       "Descripcion" VARCHAR2(1000 CHAR)
    )';
    EXECUTE IMMEDIATE
    'ALTER TABLE "ABAX_XBRL"."ConsultaAnalisis"
     ADD CONSTRAINT "PK_ConsultaAnalisis"
        PRIMARY KEY ("IdConsultaAnalisis" )
        ENABLE
        VALIDATE';
    EXECUTE IMMEDIATE
    'CREATE SEQUENCE "ABAX_XBRL"."IdConsAna_SEQ"';
  ELSE
    DBMS_OUTPUT.put_line('Ya existe la tabla ConsultaAnalisis');
  END IF;
  
  
-- ConsultaAnalisisPeriodo
  SELECT CASE WHEN EXISTS (SELECT * FROM ALL_TABLES WHERE TABLE_NAME = 'ConsultaAnalisisPeriodo' AND OWNER = 'ABAX_XBRL') then 1 else 0 end  into existeConsultaAnalisisPeriodo FROM DUAL;  
  IF existeConsultaAnalisisPeriodo = 0
  THEN
    DBMS_OUTPUT.put_line('Creando tabla ConsultaAnalisisPeriodo');
    EXECUTE IMMEDIATE 
    'CREATE TABLE "ABAX_XBRL"."ConsultaAnalisisPeriodo" (
       "IdConsultaAnalisisPeriodo" NUMBER(19) NOT NULL,
       "IdConsultaAnalisis" NUMBER(19) NOT NULL,
       "Periodo" VARCHAR2(400 CHAR) NOT NULL,
       "Fecha" TIMESTAMP,
       "FechaInicio" TIMESTAMP,
       "FechaFinal" TIMESTAMP,
       "TipoPeriodo" NUMBER(10)
    )';
    EXECUTE IMMEDIATE
    'ALTER TABLE "ABAX_XBRL"."ConsultaAnalisisPeriodo"
      ADD CONSTRAINT "PK_ConsultaAnalisisPeriodo"
         PRIMARY KEY ("IdConsultaAnalisisPeriodo")
         ENABLE
         VALIDATE';
    EXECUTE IMMEDIATE
    'ALTER TABLE "ABAX_XBRL"."ConsultaAnalisisPeriodo"
     ADD CONSTRAINT "FK_ConsultaAnalisisPeriodo_Co"
       FOREIGN KEY ("IdConsultaAnalisis")
       REFERENCES "ABAX_XBRL"."ConsultaAnalisis"
           ("IdConsultaAnalisis")
       ENABLE
       VALIDATE';
    EXECUTE IMMEDIATE
    'CREATE INDEX "IX_FK_ConsAnaPeriodo_Con"
     ON "ABAX_XBRL"."ConsultaAnalisisPeriodo"
        ("IdConsultaAnalisis")';
    EXECUTE IMMEDIATE
    'CREATE SEQUENCE "ABAX_XBRL"."IdConsAnaPeriodo_SEQ"';
  ELSE
    DBMS_OUTPUT.put_line('Ya existe la tabla ConsultaAnalisisPeriodo');
  END IF;


-- ConsultaAnalisisEntidad
  SELECT CASE WHEN EXISTS (SELECT * FROM ALL_TABLES WHERE TABLE_NAME = 'ConsultaAnalisisEntidad' AND OWNER = 'ABAX_XBRL') then 1 else 0 end  into existeConsultaAnalisisEntidad FROM DUAL;  
  IF existeConsultaAnalisisEntidad = 0
  THEN
    DBMS_OUTPUT.put_line('Creando tabla ConsultaAnalisisEntidad');
    EXECUTE IMMEDIATE 
    'CREATE TABLE "ABAX_XBRL"."ConsultaAnalisisEntidad" (
       "IdConsultaAnalisisEntidad" NUMBER(19) NOT NULL,
       "IdConsultaAnalisis" NUMBER(19) NOT NULL,
       "idEmpresa" NUMBER(19) NOT NULL,
       "NombreEntidad" VARCHAR2(50 CHAR)
    )';
    EXECUTE IMMEDIATE
    'ALTER TABLE "ABAX_XBRL"."ConsultaAnalisisEntidad"
     ADD CONSTRAINT "PK_ConsultaAnalisisEntidad"
         PRIMARY KEY ("IdConsultaAnalisisEntidad")
         ENABLE
         VALIDATE';
    EXECUTE IMMEDIATE
    'ALTER TABLE "ABAX_XBRL"."ConsultaAnalisisEntidad"
      ADD CONSTRAINT "FK_ConsultaAnalisisEntidad_Con"
         FOREIGN KEY ("IdConsultaAnalisis")
         REFERENCES "ABAX_XBRL"."ConsultaAnalisis"
             ("IdConsultaAnalisis")
         ENABLE
         VALIDATE';
    EXECUTE IMMEDIATE
    'CREATE INDEX "IX_FK_ConsAnaEntidad_Con"
      ON "ABAX_XBRL"."ConsultaAnalisisEntidad"
         ("IdConsultaAnalisis")';
    EXECUTE IMMEDIATE
    'CREATE SEQUENCE "ABAX_XBRL"."IdConsAnaEntidad_SEQ"';
  ELSE
    DBMS_OUTPUT.put_line('Ya existe la tabla ConsultaAnalisisEntidad');
  END IF;


-- ConsultaAnalisisConcepto
  SELECT CASE WHEN EXISTS (SELECT * FROM ALL_TABLES WHERE TABLE_NAME = 'ConsultaAnalisisConcepto' AND OWNER = 'ABAX_XBRL') then 1 else 0 end  into existeConsultaAnalisisConcepto FROM DUAL;  
  IF existeConsultaAnalisisConcepto = 0
  THEN
    DBMS_OUTPUT.put_line('Creando tabla ConsultaAnalisisConcepto');
    EXECUTE IMMEDIATE 
    'CREATE TABLE "ABAX_XBRL"."ConsultaAnalisisConcepto" (
       "IdConsultaAnalisisConcepto" NUMBER(19) NOT NULL,
       "IdConsultaAnalisis" NUMBER(19) NOT NULL,
       "idConcepto" VARCHAR2(500 CHAR) NOT NULL,
       "descripcionConcepto" VARCHAR2(4000)
    )';
    EXECUTE IMMEDIATE
    'ALTER TABLE "ABAX_XBRL"."ConsultaAnalisisConcepto"
      ADD CONSTRAINT "PK_ConsultaAnalisisConcepto"
         PRIMARY KEY ("IdConsultaAnalisisConcepto")
         ENABLE
         VALIDATE';
    EXECUTE IMMEDIATE
    'ALTER TABLE "ABAX_XBRL"."ConsultaAnalisisConcepto"
      ADD CONSTRAINT "FK_ConsultaAnalisisConcepto_Co"
         FOREIGN KEY ("IdConsultaAnalisis")
         REFERENCES "ABAX_XBRL"."ConsultaAnalisis"
             ("IdConsultaAnalisis")
         ENABLE
         VALIDATE';
    EXECUTE IMMEDIATE
    'CREATE INDEX "IX_FK_ConsAnaConcepto_Co"
      ON "ABAX_XBRL"."ConsultaAnalisisConcepto"
         ("IdConsultaAnalisis")';
    EXECUTE IMMEDIATE
    'CREATE SEQUENCE "ABAX_XBRL"."IdConsAnaConcepto_SEQ"';
  ELSE
    DBMS_OUTPUT.put_line('Ya existe la tabla ConsultaAnalisisConcepto');
  END IF;
END;
/

CREATE OR REPLACE TRIGGER "ABAX_XBRL"."ConsAna_TR" BEFORE INSERT ON "ABAX_XBRL"."ConsultaAnalisis" FOR EACH ROW BEGIN SELECT "ABAX_XBRL"."IdConsAna_SEQ".NEXTVAL INTO   :new."IdConsultaAnalisis" FROM   dual; END;
/

CREATE OR REPLACE TRIGGER "ABAX_XBRL"."ConsAnaPeriodo_TR" BEFORE INSERT ON "ABAX_XBRL"."ConsultaAnalisisPeriodo" FOR EACH ROW BEGIN SELECT "ABAX_XBRL"."IdConsAnaPeriodo_SEQ".NEXTVAL INTO   :new."IdConsultaAnalisisPeriodo" FROM   dual; END;
/

CREATE OR REPLACE TRIGGER "ABAX_XBRL"."ConsAnaEntidad_TR" BEFORE INSERT ON "ABAX_XBRL"."ConsultaAnalisisEntidad" FOR EACH ROW BEGIN SELECT "ABAX_XBRL"."IdConsAnaEntidad_SEQ".NEXTVAL INTO   :new."IdConsultaAnalisisEntidad" FROM   dual; END;
/

CREATE OR REPLACE TRIGGER "ABAX_XBRL"."ConsAnaConcepto_TR" BEFORE INSERT ON "ABAX_XBRL"."ConsultaAnalisisConcepto" FOR EACH ROW BEGIN SELECT "ABAX_XBRL"."IdConsAnaConcepto_SEQ".NEXTVAL INTO   :new."IdConsultaAnalisisConcepto" FROM   dual; END;
/


INSERT INTO "ABAX_XBRL"."Facultad" ("IdFacultad", "Nombre", "Descripcion", "IdCategoriaFacultad", "Borrado")
  (SELECT 70, 'Importar hechos de documento instancia', 'Facultad para importar hechos de otro documento de instancia.', 6, 0 FROM DUAL WHERE NOT EXISTS (SELECT * FROM "ABAX_XBRL"."Facultad" WHERE "IdFacultad" = 70));
  
INSERT INTO "ABAX_XBRL"."Facultad" ("IdFacultad", "Nombre", "Descripcion", "IdCategoriaFacultad", "Borrado") 
  (SELECT 300, 'Migrar versión documentos instancia', 'Facultad migrar los contextos de los documentos de instancia en una nueva veresión.', 6, 0 FROM DUAL WHERE NOT EXISTS (SELECT * FROM "ABAX_XBRL"."Facultad" WHERE "IdFacultad" = 300));

INSERT INTO "ABAX_XBRL"."Facultad" ("IdFacultad", "Nombre", "Descripcion", "IdCategoriaFacultad", "Borrado")  
  (SELECT 64, 'Configuración de consultas', 'Facultad para lka configuración y ejecución de consultas',6,0 FROM DUAL WHERE NOT EXISTS (SELECT * FROM "ABAX_XBRL"."Facultad" WHERE "IdFacultad" = 64));
  
INSERT INTO "ABAX_XBRL"."RolFacultad" ("IdRol", "IdFacultad")  
  (SELECT "ABAX_XBRL"."Rol"."IdRol", 70 
   FROM "ABAX_XBRL"."Rol" 
   WHERE "IdRol" IN (SELECT "IdRol" FROM "ABAX_XBRL"."RolFacultad" WHERE "IdFacultad" = 58) 
   AND "IdRol" NOT IN (SELECT "IdRol" FROM "ABAX_XBRL"."RolFacultad" WHERE "IdFacultad" = 70)
  );

COMMIT;