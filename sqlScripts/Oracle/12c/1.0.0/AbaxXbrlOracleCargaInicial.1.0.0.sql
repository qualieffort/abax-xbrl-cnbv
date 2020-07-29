INSERT INTO "ABAX_XBRL"."Empresa" ("RazonSocial", "NombreCorto", "RFC", "DomicilioFiscal", "Borrado") VALUES ('Grupo ALCON SA de CV', 'ALCON', 'GOFE860831EX1', 'Domicilio', 0);

INSERT INTO "ABAX_XBRL"."Usuario" ("Nombre", "ApellidoPaterno", "ApellidoMaterno", "CorreoElectronico", "Password", "HistoricoPassword", "VigenciaPassword", "IntentosErroneosLogin", "Bloqueado", "Activo", "Puesto", "Borrado") 
VALUES ('Administrador', 'Administrador', 'Administrador', 'admin@admin.com', '76DCD53F4765203853F14B107D393B3910105A20b9k5iIg=', '76DCD53F4765203853F14B107D393B3910105A20b9k5iIg=', SYSDATE, 0, 0, 1, 'Administrador', 0);

INSERT INTO "ABAX_XBRL"."UsuarioEmpresa" ("IdUsuario", "IdEmpresa") 
(SELECT "ABAX_XBRL"."Usuario"."IdUsuario", "ABAX_XBRL"."Empresa"."IdEmpresa" FROM "ABAX_XBRL"."Usuario", "ABAX_XBRL"."Empresa" WHERE "ABAX_XBRL"."Usuario"."CorreoElectronico" = 'admin@admin.com' AND "ABAX_XBRL"."Empresa"."NombreCorto" = 'ALCON');

INSERT INTO "ABAX_XBRL"."Rol" ("Nombre", "Descripcion", "IdEmpresa", "Borrado") (SELECT 'Administrador General', 'Rol con todos los privilegios de Abax XBRL', "ABAX_XBRL"."Empresa"."IdEmpresa", 0 FROM "ABAX_XBRL"."Empresa" WHERE "ABAX_XBRL"."Empresa"."NombreCorto" = 'ALCON');
INSERT INTO "ABAX_XBRL"."Rol" ("Nombre", "Descripcion", "IdEmpresa", "Borrado") (SELECT 'Administrador', 'Administrador con restricciones de creación de "Empresas", "Roles", "Grupos", "Usuarios", Usuarios Empresa', "ABAX_XBRL"."Empresa"."IdEmpresa", 0 FROM "ABAX_XBRL"."Empresa" WHERE "ABAX_XBRL"."Empresa"."NombreCorto" = 'ALCON');
INSERT INTO "ABAX_XBRL"."Rol" ("Nombre", "Descripcion", "IdEmpresa", "Borrado") (SELECT 'Usuario Negocio', 'Rol con privilegios para el Tablero de "Control",  Editor XBRL', "ABAX_XBRL"."Empresa"."IdEmpresa", 0 FROM "ABAX_XBRL"."Empresa" WHERE "ABAX_XBRL"."Empresa"."NombreCorto" = 'ALCON');
INSERT INTO "ABAX_XBRL"."Rol" ("Nombre", "Descripcion", "IdEmpresa", "Borrado") (SELECT 'Usuario Negocio solo lectura', 'Rol con privilegios para el Tablero de "Control",  Editor XBRL de solo lectura', "ABAX_XBRL"."Empresa"."IdEmpresa", 0 FROM "ABAX_XBRL"."Empresa" WHERE "ABAX_XBRL"."Empresa"."NombreCorto" = 'ALCON');

INSERT INTO "ABAX_XBRL"."UsuarioRol" ("IdUsuario", "IdRol") (SELECT "ABAX_XBRL"."Usuario"."IdUsuario", "ABAX_XBRL"."Rol"."IdRol" FROM "ABAX_XBRL"."Usuario", "ABAX_XBRL"."Rol"  WHERE "ABAX_XBRL"."Usuario"."CorreoElectronico" = 'admin@admin.com' AND "ABAX_XBRL"."Rol"."Nombre" =  'Administrador General');
INSERT INTO "ABAX_XBRL"."UsuarioRol" ("IdUsuario", "IdRol") (SELECT "ABAX_XBRL"."Usuario"."IdUsuario", "ABAX_XBRL"."Rol"."IdRol" FROM "ABAX_XBRL"."Usuario", "ABAX_XBRL"."Rol"  WHERE "ABAX_XBRL"."Usuario"."CorreoElectronico" = 'admin@admin.com' AND "ABAX_XBRL"."Rol"."Nombre" =  'Usuario Negocio');

INSERT INTO "ABAX_XBRL"."CategoriaFacultad" ("IdCategoriaFacultad", "Nombre", "Descripcion", "Borrado") VALUES (1, 'Facultades Usuarios ', 'Categoria de Facultades de Modulo Usuario', 0);
INSERT INTO "ABAX_XBRL"."CategoriaFacultad" ("IdCategoriaFacultad", "Nombre", "Descripcion", "Borrado") VALUES (2, 'Facultades Roles', 'Categoria de Facultades de Modulo Roles', 0);
INSERT INTO "ABAX_XBRL"."CategoriaFacultad" ("IdCategoriaFacultad", "Nombre", "Descripcion", "Borrado") VALUES (3, 'Facultades Empresas', 'Categoria de Facultades de Modulo Empresa', 0);
INSERT INTO "ABAX_XBRL"."CategoriaFacultad" ("IdCategoriaFacultad", "Nombre", "Descripcion", "Borrado") VALUES (4, 'Facultades Grupos', 'Categoria de Facultades de Modulo Grupos', 0);
INSERT INTO "ABAX_XBRL"."CategoriaFacultad" ("IdCategoriaFacultad", "Nombre", "Descripcion", "Borrado") VALUES (5, 'Facultades de Bitacora', 'Categoria de Facultades de Modulo Bitacora', 0);
INSERT INTO "ABAX_XBRL"."CategoriaFacultad" ("IdCategoriaFacultad", "Nombre", "Descripcion", "Borrado") VALUES (6, 'Facultades de Documentos de Instancia', 'Categoria de Facultades de Modulo de Documentos Instancia', 0);
INSERT INTO "ABAX_XBRL"."CategoriaFacultad" ("IdCategoriaFacultad", "Nombre", "Descripcion", "Borrado") VALUES (7, 'Facultades Misma Empresa', 'Categoria de Facultades de Empresa en Sesión', 0);
INSERT INTO "ABAX_XBRL"."CategoriaFacultad" ("IdCategoriaFacultad", "Nombre", "Descripcion", "Borrado") VALUES (9, 'Facultades Misma Empresa', 'Categoria de Facultades de Empresa en Sesión', 0);

INSERT INTO "ABAX_XBRL"."Facultad" ("IdFacultad", "Nombre", "Descripcion", "IdCategoriaFacultad", "Borrado") VALUES (1, 'Insertar Usuario', 'Facultad para Insertar Usuarios', 1, 0);
INSERT INTO "ABAX_XBRL"."Facultad" ("IdFacultad", "Nombre", "Descripcion", "IdCategoriaFacultad", "Borrado") VALUES (2, 'Editar Usuario', 'Facultad para Editar Usuarios', 1, 0);
INSERT INTO "ABAX_XBRL"."Facultad" ("IdFacultad", "Nombre", "Descripcion", "IdCategoriaFacultad", "Borrado") VALUES (3, 'Eliminar Usuario', 'Facultad para Eliminar Usuarios', 1, 0);
INSERT INTO "ABAX_XBRL"."Facultad" ("IdFacultad", "Nombre", "Descripcion", "IdCategoriaFacultad", "Borrado") VALUES (4, 'Asignar Emisoras', 'Facultad para Asignar Emisoras', 1, 0);
INSERT INTO "ABAX_XBRL"."Facultad" ("IdFacultad", "Nombre", "Descripcion", "IdCategoriaFacultad", "Borrado") VALUES (5, 'Activar/Desactivar Usuarios', 'Facultad para Activar/Desactivar Usuarios', 1, 0);
INSERT INTO "ABAX_XBRL"."Facultad" ("IdFacultad", "Nombre", "Descripcion", "IdCategoriaFacultad", "Borrado") VALUES (6, 'Bloquear/Desbloquear Usuarios', 'Facultad para Bloquear/Desbloquear Usuarios', 1, 0);
INSERT INTO "ABAX_XBRL"."Facultad" ("IdFacultad", "Nombre", "Descripcion", "IdCategoriaFacultad", "Borrado") VALUES (7, 'Generara Nueva Contraseña', 'Facultad para Generar Nueva Contraseña', 1, 0);
INSERT INTO "ABAX_XBRL"."Facultad" ("IdFacultad", "Nombre", "Descripcion", "IdCategoriaFacultad", "Borrado") VALUES (8, 'Insertar Roles', 'Facultad para Insertar Roles', 2, 0);
INSERT INTO "ABAX_XBRL"."Facultad" ("IdFacultad", "Nombre", "Descripcion", "IdCategoriaFacultad", "Borrado") VALUES (9, 'Editar Roles', 'Facultad para Editar Roles', 2, 0);
INSERT INTO "ABAX_XBRL"."Facultad" ("IdFacultad", "Nombre", "Descripcion", "IdCategoriaFacultad", "Borrado") VALUES (10, 'Eliminar Roles', 'Facultad para Eliminar Roles', 2, 0);
INSERT INTO "ABAX_XBRL"."Facultad" ("IdFacultad", "Nombre", "Descripcion", "IdCategoriaFacultad", "Borrado") VALUES (11, 'Asignar Facultades', 'Facultad para Asignar Facultades', 2, 0);
INSERT INTO "ABAX_XBRL"."Facultad" ("IdFacultad", "Nombre", "Descripcion", "IdCategoriaFacultad", "Borrado") VALUES (12, 'Insertar Empresas', 'Facultad para Insertar Empresas', 3, 0);
INSERT INTO "ABAX_XBRL"."Facultad" ("IdFacultad", "Nombre", "Descripcion", "IdCategoriaFacultad", "Borrado") VALUES (13, 'Editar Empresas', 'Facultad para Editar Empresas', 3, 0);
INSERT INTO "ABAX_XBRL"."Facultad" ("IdFacultad", "Nombre", "Descripcion", "IdCategoriaFacultad", "Borrado") VALUES (14, 'Eliminar Empresas', 'Facultad para Eliminar Empresas', 3, 0);
INSERT INTO "ABAX_XBRL"."Facultad" ("IdFacultad", "Nombre", "Descripcion", "IdCategoriaFacultad", "Borrado") VALUES (15, 'Insertar Grupos', 'Facultad para Insertar Grupos', 4, 0);
INSERT INTO "ABAX_XBRL"."Facultad" ("IdFacultad", "Nombre", "Descripcion", "IdCategoriaFacultad", "Borrado") VALUES (16, 'Editar Grupos', 'Facultad para Editar Grupos', 4, 0);
INSERT INTO "ABAX_XBRL"."Facultad" ("IdFacultad", "Nombre", "Descripcion", "IdCategoriaFacultad", "Borrado") VALUES (17, 'Eliminar Grupos', 'Facultad para Eliminar Grupos', 4, 0);
INSERT INTO "ABAX_XBRL"."Facultad" ("IdFacultad", "Nombre", "Descripcion", "IdCategoriaFacultad", "Borrado") VALUES (18, 'Asignar Roles', 'Facultad para Asignar Roles', 4, 0);
INSERT INTO "ABAX_XBRL"."Facultad" ("IdFacultad", "Nombre", "Descripcion", "IdCategoriaFacultad", "Borrado") VALUES (19, 'Asignar Usuarios', 'Facultad para Asignar Usuarios', 4, 0);
INSERT INTO "ABAX_XBRL"."Facultad" ("IdFacultad", "Nombre", "Descripcion", "IdCategoriaFacultad", "Borrado") VALUES (20, 'Consulta de Grupos', 'Facultad para Consultar Grupos', 1, 0);
INSERT INTO "ABAX_XBRL"."Facultad" ("IdFacultad", "Nombre", "Descripcion", "IdCategoriaFacultad", "Borrado") VALUES (21, 'Consulta de Roles', 'Facultad para Consulta de Roles', 2, 0);
INSERT INTO "ABAX_XBRL"."Facultad" ("IdFacultad", "Nombre", "Descripcion", "IdCategoriaFacultad", "Borrado") VALUES (22, 'Consulta de Empresas', 'Facultad para Consultar Empresas', 3, 0);
INSERT INTO "ABAX_XBRL"."Facultad" ("IdFacultad", "Nombre", "Descripcion", "IdCategoriaFacultad", "Borrado") VALUES (23, 'Consulta de  Usuarios', 'Facultad para Consultar Usuarios', 4, 0);
INSERT INTO "ABAX_XBRL"."Facultad" ("IdFacultad", "Nombre", "Descripcion", "IdCategoriaFacultad", "Borrado") VALUES (24, 'Exportar Datos de Usuario', 'Facultad para Exportar Datos de Usuario', 1, 0);
INSERT INTO "ABAX_XBRL"."Facultad" ("IdFacultad", "Nombre", "Descripcion", "IdCategoriaFacultad", "Borrado") VALUES (25, 'Exportar Datos de Roles', 'Facultad para Exportar Datos de Roles', 2, 0);
INSERT INTO "ABAX_XBRL"."Facultad" ("IdFacultad", "Nombre", "Descripcion", "IdCategoriaFacultad", "Borrado") VALUES (26, 'Exportar Datos de Empresa', 'Facultad para Exportar Datos de Empresa', 3, 0);
INSERT INTO "ABAX_XBRL"."Facultad" ("IdFacultad", "Nombre", "Descripcion", "IdCategoriaFacultad", "Borrado") VALUES (27, 'Exportar Datos de Grupos', 'Facultad para Exportar Datos de Grupos', 4, 0);
INSERT INTO "ABAX_XBRL"."Facultad" ("IdFacultad", "Nombre", "Descripcion", "IdCategoriaFacultad", "Borrado") VALUES (28, 'Consultar Datos de Bitacora', 'Facultad para Consultar Datos de Bitacora', 5, 0);
INSERT INTO "ABAX_XBRL"."Facultad" ("IdFacultad", "Nombre", "Descripcion", "IdCategoriaFacultad", "Borrado") VALUES (29, 'Exportar Datos de Bitacora', 'Facultad para Exportar Datos de Bitacora', 5, 0);
INSERT INTO "ABAX_XBRL"."Facultad" ("IdFacultad", "Nombre", "Descripcion", "IdCategoriaFacultad", "Borrado") VALUES (30, 'Asignar Roles a Usuario', 'Facultad para Asignar Roles a Usuario', 1, 0);
INSERT INTO "ABAX_XBRL"."Facultad" ("IdFacultad", "Nombre", "Descripcion", "IdCategoriaFacultad", "Borrado") VALUES (32, 'Insertar Usuario Misma Empresa', 'Facultad para Insertar Usuarios Misma Empresa', 7, 0);
INSERT INTO "ABAX_XBRL"."Facultad" ("IdFacultad", "Nombre", "Descripcion", "IdCategoriaFacultad", "Borrado") VALUES (33, 'Editar Usuario Misma Empresa', 'Facultad para Insertar Usuarios Misma Empresa', 7, 0);
INSERT INTO "ABAX_XBRL"."Facultad" ("IdFacultad", "Nombre", "Descripcion", "IdCategoriaFacultad", "Borrado") VALUES (34, 'Eliminar Usuario Misma Empresa', 'Facultad para Insertar Usuarios Misma Empresa', 7, 0);
INSERT INTO "ABAX_XBRL"."Facultad" ("IdFacultad", "Nombre", "Descripcion", "IdCategoriaFacultad", "Borrado") VALUES (35, 'Asignar Roles a Usuario Misma Empresa', 'Facultad para Asignar Roles a Usuario Misma Empresa', 7, 0);
INSERT INTO "ABAX_XBRL"."Facultad" ("IdFacultad", "Nombre", "Descripcion", "IdCategoriaFacultad", "Borrado") VALUES (36, 'Consulta de  Usuarios Misma Empresa', 'Facultad para Consulta de  Usuarios Misma Empresa', 7, 0);
INSERT INTO "ABAX_XBRL"."Facultad" ("IdFacultad", "Nombre", "Descripcion", "IdCategoriaFacultad", "Borrado") VALUES (37, 'Exportar Datos de Usuario Misma Empresa', 'Facultad para Exportar Datos de Usuario Misma Empresa', 7, 0);
INSERT INTO "ABAX_XBRL"."Facultad" ("IdFacultad", "Nombre", "Descripcion", "IdCategoriaFacultad", "Borrado") VALUES (38, 'Activar/Desactivar Usuarios Misma Empresa', 'Facultad para Activar/Desactivar Usuarios Misma Empresa', 7, 0);
INSERT INTO "ABAX_XBRL"."Facultad" ("IdFacultad", "Nombre", "Descripcion", "IdCategoriaFacultad", "Borrado") VALUES (39, 'Bloquear/Desbloquear Usuarios Misma Empresa', 'Facultad para Bloquear/Desbloquear Usuarios Misma Empresa', 7, 0);
INSERT INTO "ABAX_XBRL"."Facultad" ("IdFacultad", "Nombre", "Descripcion", "IdCategoriaFacultad", "Borrado") VALUES (40, 'Generara Nueva Contraseña Misma Empresa', 'Facultad para Generar Nueva Contraseña Misma Empresa', 7, 0);
INSERT INTO "ABAX_XBRL"."Facultad" ("IdFacultad", "Nombre", "Descripcion", "IdCategoriaFacultad", "Borrado") VALUES (41, 'Insertar Usuario Misma Empresa', 'Facultad para Insertar Usuarios Misma Empresa', 7, 0);
INSERT INTO "ABAX_XBRL"."Facultad" ("IdFacultad", "Nombre", "Descripcion", "IdCategoriaFacultad", "Borrado") VALUES (42, 'Editar Usuario Misma Empresa', 'Facultad para Insertar Usuarios Misma Empresa', 7, 0);
INSERT INTO "ABAX_XBRL"."Facultad" ("IdFacultad", "Nombre", "Descripcion", "IdCategoriaFacultad", "Borrado") VALUES (43, 'Eliminar Usuario Misma Empresa', 'Facultad para Insertar Usuarios Misma Empresa', 7, 0);
INSERT INTO "ABAX_XBRL"."Facultad" ("IdFacultad", "Nombre", "Descripcion", "IdCategoriaFacultad", "Borrado") VALUES (44, 'Asignar Roles a Usuario Misma Empresa', 'Facultad para Asignar Roles a Usuario Misma Empresa', 7, 0);
INSERT INTO "ABAX_XBRL"."Facultad" ("IdFacultad", "Nombre", "Descripcion", "IdCategoriaFacultad", "Borrado") VALUES (45, 'Consulta de  Usuarios Misma Empresa', 'Facultad para Consulta de  Usuarios Misma Empresa', 7, 0);
INSERT INTO "ABAX_XBRL"."Facultad" ("IdFacultad", "Nombre", "Descripcion", "IdCategoriaFacultad", "Borrado") VALUES (46, 'Exportar Datos de Usuario Misma Empresa', 'Facultad para Exportar Datos de Usuario Misma Empresa', 7, 0);
INSERT INTO "ABAX_XBRL"."Facultad" ("IdFacultad", "Nombre", "Descripcion", "IdCategoriaFacultad", "Borrado") VALUES (47, 'Activar/Desactivar Usuarios Misma Empresa', 'Facultad para Activar/Desactivar Usuarios Misma Empresa', 7, 0);
INSERT INTO "ABAX_XBRL"."Facultad" ("IdFacultad", "Nombre", "Descripcion", "IdCategoriaFacultad", "Borrado") VALUES (48, 'Bloquear/Desbloquear Usuarios Misma Empresa', 'Facultad para Bloquear/Desbloquear Usuarios Misma Empresa', 7, 0);
INSERT INTO "ABAX_XBRL"."Facultad" ("IdFacultad", "Nombre", "Descripcion", "IdCategoriaFacultad", "Borrado") VALUES (49, 'Generara Nueva Contraseña Misma Empresa', 'Facultad para Generar Nueva Contraseña Misma Empresa', 7, 0);
INSERT INTO "ABAX_XBRL"."Facultad" ("IdFacultad", "Nombre", "Descripcion", "IdCategoriaFacultad", "Borrado") VALUES (50, 'Fantasma', 'facultad fantasma', 7, 1);
INSERT INTO "ABAX_XBRL"."Facultad" ("IdFacultad", "Nombre", "Descripcion", "IdCategoriaFacultad", "Borrado") VALUES (51, 'Crear documento instancia', 'Facultad para Crear Documento instancia XBRL', 6, 0);
INSERT INTO "ABAX_XBRL"."Facultad" ("IdFacultad", "Nombre", "Descripcion", "IdCategoriaFacultad", "Borrado") VALUES (52, 'Opción de Listado documento instancia', 'Facultad para Listado de documentos instancia', 6, 0);
INSERT INTO "ABAX_XBRL"."Facultad" ("IdFacultad", "Nombre", "Descripcion", "IdCategoriaFacultad", "Borrado") VALUES (53, 'Consultar documento instancia', 'Facultad para Consultar documentos instancias', 6, 0);
INSERT INTO "ABAX_XBRL"."Facultad" ("IdFacultad", "Nombre", "Descripcion", "IdCategoriaFacultad", "Borrado") VALUES (54, 'Editar documento instancia', 'Facultad para Editar documento instancia', 6, 0);
INSERT INTO "ABAX_XBRL"."Facultad" ("IdFacultad", "Nombre", "Descripcion", "IdCategoriaFacultad", "Borrado") VALUES (55, 'Eliminar documento instancia', 'Facultad para Eliminar documento instancia', 6, 0);
INSERT INTO "ABAX_XBRL"."Facultad" ("IdFacultad", "Nombre", "Descripcion", "IdCategoriaFacultad", "Borrado") VALUES (56, 'Importar documento instancia', 'Facultad para Importar documento instancia ("Excel")', 6, 0);
INSERT INTO "ABAX_XBRL"."Facultad" ("IdFacultad", "Nombre", "Descripcion", "IdCategoriaFacultad", "Borrado") VALUES (57, 'Exportar documento instancia', 'Facultad para Exportar documento instancia ("XBRL",Excel, "Word", "Pdf", "Html")', 6, 0);
INSERT INTO "ABAX_XBRL"."Facultad" ("IdFacultad", "Nombre", "Descripcion", "IdCategoriaFacultad", "Borrado") VALUES (58, 'Importar notas documento instancia', 'Facultad para Importar notas de un documento ', 6, 0);
INSERT INTO "ABAX_XBRL"."Facultad" ("IdFacultad", "Nombre", "Descripcion", "IdCategoriaFacultad", "Borrado") VALUES (59, 'Bloquear documentos instancia', 'Facultad para Bloquear y desbloquear documentos', 6, 0);
INSERT INTO "ABAX_XBRL"."Facultad" ("IdFacultad", "Nombre", "Descripcion", "IdCategoriaFacultad", "Borrado") VALUES (60, 'Guardar documento instancia', 'Facultad para Guardar documento instancia', 6, 0);
INSERT INTO "ABAX_XBRL"."Facultad" ("IdFacultad", "Nombre", "Descripcion", "IdCategoriaFacultad", "Borrado") VALUES (61, 'Compartir documento instancia', 'Facultad para Compartir documento instancia', 6, 0);
INSERT INTO "ABAX_XBRL"."Facultad" ("IdFacultad", "Nombre", "Descripcion", "IdCategoriaFacultad", "Borrado") VALUES (62, 'Historial documento instancia', 'Facultad para el historial del documento instancia', 6, 0);
INSERT INTO "ABAX_XBRL"."Facultad" ("IdFacultad", "Nombre", "Descripcion", "IdCategoriaFacultad", "Borrado") VALUES (63, 'Depurar datos bitacora', 'Facultad para eliminar registros antiguos de la bitacora', 5, 0);



INSERT INTO "ABAX_XBRL"."RolFacultad" ("IdRol", "IdFacultad")  (SELECT "ABAX_XBRL"."Rol"."IdRol", 4 FROM "ABAX_XBRL"."Rol" WHERE "ABAX_XBRL"."Rol"."Nombre" = 'Administrador General');
INSERT INTO "ABAX_XBRL"."RolFacultad" ("IdRol", "IdFacultad")  (SELECT "ABAX_XBRL"."Rol"."IdRol", 5 FROM "ABAX_XBRL"."Rol" WHERE "ABAX_XBRL"."Rol"."Nombre" = 'Administrador General');
INSERT INTO "ABAX_XBRL"."RolFacultad" ("IdRol", "IdFacultad")  (SELECT "ABAX_XBRL"."Rol"."IdRol", 6 FROM "ABAX_XBRL"."Rol" WHERE "ABAX_XBRL"."Rol"."Nombre" = 'Administrador General');
INSERT INTO "ABAX_XBRL"."RolFacultad" ("IdRol", "IdFacultad")  (SELECT "ABAX_XBRL"."Rol"."IdRol", 7 FROM "ABAX_XBRL"."Rol" WHERE "ABAX_XBRL"."Rol"."Nombre" = 'Administrador General');
INSERT INTO "ABAX_XBRL"."RolFacultad" ("IdRol", "IdFacultad")  (SELECT "ABAX_XBRL"."Rol"."IdRol", 20 FROM "ABAX_XBRL"."Rol" WHERE "ABAX_XBRL"."Rol"."Nombre" = 'Administrador General');
INSERT INTO "ABAX_XBRL"."RolFacultad" ("IdRol", "IdFacultad")  (SELECT "ABAX_XBRL"."Rol"."IdRol", 24 FROM "ABAX_XBRL"."Rol" WHERE "ABAX_XBRL"."Rol"."Nombre" = 'Administrador General');
INSERT INTO "ABAX_XBRL"."RolFacultad" ("IdRol", "IdFacultad")  (SELECT "ABAX_XBRL"."Rol"."IdRol", 8 FROM "ABAX_XBRL"."Rol" WHERE "ABAX_XBRL"."Rol"."Nombre" = 'Administrador General');
INSERT INTO "ABAX_XBRL"."RolFacultad" ("IdRol", "IdFacultad")  (SELECT "ABAX_XBRL"."Rol"."IdRol", 9 FROM "ABAX_XBRL"."Rol" WHERE "ABAX_XBRL"."Rol"."Nombre" = 'Administrador General');
INSERT INTO "ABAX_XBRL"."RolFacultad" ("IdRol", "IdFacultad")  (SELECT "ABAX_XBRL"."Rol"."IdRol", 10 FROM "ABAX_XBRL"."Rol" WHERE "ABAX_XBRL"."Rol"."Nombre" = 'Administrador General');
INSERT INTO "ABAX_XBRL"."RolFacultad" ("IdRol", "IdFacultad")  (SELECT "ABAX_XBRL"."Rol"."IdRol", 11 FROM "ABAX_XBRL"."Rol" WHERE "ABAX_XBRL"."Rol"."Nombre" = 'Administrador General');
INSERT INTO "ABAX_XBRL"."RolFacultad" ("IdRol", "IdFacultad")  (SELECT "ABAX_XBRL"."Rol"."IdRol", 21 FROM "ABAX_XBRL"."Rol" WHERE "ABAX_XBRL"."Rol"."Nombre" = 'Administrador General');
INSERT INTO "ABAX_XBRL"."RolFacultad" ("IdRol", "IdFacultad")  (SELECT "ABAX_XBRL"."Rol"."IdRol", 25 FROM "ABAX_XBRL"."Rol" WHERE "ABAX_XBRL"."Rol"."Nombre" = 'Administrador General');
INSERT INTO "ABAX_XBRL"."RolFacultad" ("IdRol", "IdFacultad")  (SELECT "ABAX_XBRL"."Rol"."IdRol", 15 FROM "ABAX_XBRL"."Rol" WHERE "ABAX_XBRL"."Rol"."Nombre" = 'Administrador General');
INSERT INTO "ABAX_XBRL"."RolFacultad" ("IdRol", "IdFacultad")  (SELECT "ABAX_XBRL"."Rol"."IdRol", 16 FROM "ABAX_XBRL"."Rol" WHERE "ABAX_XBRL"."Rol"."Nombre" = 'Administrador General');
INSERT INTO "ABAX_XBRL"."RolFacultad" ("IdRol", "IdFacultad")  (SELECT "ABAX_XBRL"."Rol"."IdRol", 17 FROM "ABAX_XBRL"."Rol" WHERE "ABAX_XBRL"."Rol"."Nombre" = 'Administrador General');
INSERT INTO "ABAX_XBRL"."RolFacultad" ("IdRol", "IdFacultad")  (SELECT "ABAX_XBRL"."Rol"."IdRol", 18 FROM "ABAX_XBRL"."Rol" WHERE "ABAX_XBRL"."Rol"."Nombre" = 'Administrador General');
INSERT INTO "ABAX_XBRL"."RolFacultad" ("IdRol", "IdFacultad")  (SELECT "ABAX_XBRL"."Rol"."IdRol", 19 FROM "ABAX_XBRL"."Rol" WHERE "ABAX_XBRL"."Rol"."Nombre" = 'Administrador General');
INSERT INTO "ABAX_XBRL"."RolFacultad" ("IdRol", "IdFacultad")  (SELECT "ABAX_XBRL"."Rol"."IdRol", 27 FROM "ABAX_XBRL"."Rol" WHERE "ABAX_XBRL"."Rol"."Nombre" = 'Administrador General');
INSERT INTO "ABAX_XBRL"."RolFacultad" ("IdRol", "IdFacultad")  (SELECT "ABAX_XBRL"."Rol"."IdRol", 28 FROM "ABAX_XBRL"."Rol" WHERE "ABAX_XBRL"."Rol"."Nombre" = 'Administrador General');
INSERT INTO "ABAX_XBRL"."RolFacultad" ("IdRol", "IdFacultad")  (SELECT "ABAX_XBRL"."Rol"."IdRol", 29 FROM "ABAX_XBRL"."Rol" WHERE "ABAX_XBRL"."Rol"."Nombre" = 'Administrador General');
INSERT INTO "ABAX_XBRL"."RolFacultad" ("IdRol", "IdFacultad")  (SELECT "ABAX_XBRL"."Rol"."IdRol", 40 FROM "ABAX_XBRL"."Rol" WHERE "ABAX_XBRL"."Rol"."Nombre" = 'Administrador General');
INSERT INTO "ABAX_XBRL"."RolFacultad" ("IdRol", "IdFacultad")  (SELECT "ABAX_XBRL"."Rol"."IdRol", 41 FROM "ABAX_XBRL"."Rol" WHERE "ABAX_XBRL"."Rol"."Nombre" = 'Administrador General');
INSERT INTO "ABAX_XBRL"."RolFacultad" ("IdRol", "IdFacultad")  (SELECT "ABAX_XBRL"."Rol"."IdRol", 42 FROM "ABAX_XBRL"."Rol" WHERE "ABAX_XBRL"."Rol"."Nombre" = 'Administrador General');
INSERT INTO "ABAX_XBRL"."RolFacultad" ("IdRol", "IdFacultad")  (SELECT "ABAX_XBRL"."Rol"."IdRol", 44 FROM "ABAX_XBRL"."Rol" WHERE "ABAX_XBRL"."Rol"."Nombre" = 'Administrador General');
INSERT INTO "ABAX_XBRL"."RolFacultad" ("IdRol", "IdFacultad")  (SELECT "ABAX_XBRL"."Rol"."IdRol", 45 FROM "ABAX_XBRL"."Rol" WHERE "ABAX_XBRL"."Rol"."Nombre" = 'Administrador General');
INSERT INTO "ABAX_XBRL"."RolFacultad" ("IdRol", "IdFacultad")  (SELECT "ABAX_XBRL"."Rol"."IdRol", 46 FROM "ABAX_XBRL"."Rol" WHERE "ABAX_XBRL"."Rol"."Nombre" = 'Administrador General');
INSERT INTO "ABAX_XBRL"."RolFacultad" ("IdRol", "IdFacultad")  (SELECT "ABAX_XBRL"."Rol"."IdRol", 47 FROM "ABAX_XBRL"."Rol" WHERE "ABAX_XBRL"."Rol"."Nombre" = 'Administrador General');
INSERT INTO "ABAX_XBRL"."RolFacultad" ("IdRol", "IdFacultad")  (SELECT "ABAX_XBRL"."Rol"."IdRol", 48 FROM "ABAX_XBRL"."Rol" WHERE "ABAX_XBRL"."Rol"."Nombre" = 'Administrador General');
INSERT INTO "ABAX_XBRL"."RolFacultad" ("IdRol", "IdFacultad")  (SELECT "ABAX_XBRL"."Rol"."IdRol", 49 FROM "ABAX_XBRL"."Rol" WHERE "ABAX_XBRL"."Rol"."Nombre" = 'Administrador General');
INSERT INTO "ABAX_XBRL"."RolFacultad" ("IdRol", "IdFacultad")  (SELECT "ABAX_XBRL"."Rol"."IdRol", 2 FROM "ABAX_XBRL"."Rol" WHERE "ABAX_XBRL"."Rol"."Nombre" = 'Administrador General');
INSERT INTO "ABAX_XBRL"."RolFacultad" ("IdRol", "IdFacultad")  (SELECT "ABAX_XBRL"."Rol"."IdRol", 1 FROM "ABAX_XBRL"."Rol" WHERE "ABAX_XBRL"."Rol"."Nombre" = 'Administrador General');
INSERT INTO "ABAX_XBRL"."RolFacultad" ("IdRol", "IdFacultad")  (SELECT "ABAX_XBRL"."Rol"."IdRol", 38 FROM "ABAX_XBRL"."Rol" WHERE "ABAX_XBRL"."Rol"."Nombre" = 'Administrador General');
INSERT INTO "ABAX_XBRL"."RolFacultad" ("IdRol", "IdFacultad")  (SELECT "ABAX_XBRL"."Rol"."IdRol", 30 FROM "ABAX_XBRL"."Rol" WHERE "ABAX_XBRL"."Rol"."Nombre" = 'Administrador General');
INSERT INTO "ABAX_XBRL"."RolFacultad" ("IdRol", "IdFacultad")  (SELECT "ABAX_XBRL"."Rol"."IdRol", 35 FROM "ABAX_XBRL"."Rol" WHERE "ABAX_XBRL"."Rol"."Nombre" = 'Administrador General');
INSERT INTO "ABAX_XBRL"."RolFacultad" ("IdRol", "IdFacultad")  (SELECT "ABAX_XBRL"."Rol"."IdRol", 39 FROM "ABAX_XBRL"."Rol" WHERE "ABAX_XBRL"."Rol"."Nombre" = 'Administrador General');
INSERT INTO "ABAX_XBRL"."RolFacultad" ("IdRol", "IdFacultad")  (SELECT "ABAX_XBRL"."Rol"."IdRol", 36 FROM "ABAX_XBRL"."Rol" WHERE "ABAX_XBRL"."Rol"."Nombre" = 'Administrador General');
INSERT INTO "ABAX_XBRL"."RolFacultad" ("IdRol", "IdFacultad")  (SELECT "ABAX_XBRL"."Rol"."IdRol", 13 FROM "ABAX_XBRL"."Rol" WHERE "ABAX_XBRL"."Rol"."Nombre" = 'Administrador General');
INSERT INTO "ABAX_XBRL"."RolFacultad" ("IdRol", "IdFacultad")  (SELECT "ABAX_XBRL"."Rol"."IdRol", 33 FROM "ABAX_XBRL"."Rol" WHERE "ABAX_XBRL"."Rol"."Nombre" = 'Administrador General');
INSERT INTO "ABAX_XBRL"."RolFacultad" ("IdRol", "IdFacultad")  (SELECT "ABAX_XBRL"."Rol"."IdRol", 14 FROM "ABAX_XBRL"."Rol" WHERE "ABAX_XBRL"."Rol"."Nombre" = 'Administrador General');
INSERT INTO "ABAX_XBRL"."RolFacultad" ("IdRol", "IdFacultad")  (SELECT "ABAX_XBRL"."Rol"."IdRol", 3 FROM "ABAX_XBRL"."Rol" WHERE "ABAX_XBRL"."Rol"."Nombre" = 'Administrador General');
INSERT INTO "ABAX_XBRL"."RolFacultad" ("IdRol", "IdFacultad")  (SELECT "ABAX_XBRL"."Rol"."IdRol", 43 FROM "ABAX_XBRL"."Rol" WHERE "ABAX_XBRL"."Rol"."Nombre" = 'Administrador General');
INSERT INTO "ABAX_XBRL"."RolFacultad" ("IdRol", "IdFacultad")  (SELECT "ABAX_XBRL"."Rol"."IdRol", 34 FROM "ABAX_XBRL"."Rol" WHERE "ABAX_XBRL"."Rol"."Nombre" = 'Administrador General');
INSERT INTO "ABAX_XBRL"."RolFacultad" ("IdRol", "IdFacultad")  (SELECT "ABAX_XBRL"."Rol"."IdRol", 26 FROM "ABAX_XBRL"."Rol" WHERE "ABAX_XBRL"."Rol"."Nombre" = 'Administrador General');
INSERT INTO "ABAX_XBRL"."RolFacultad" ("IdRol", "IdFacultad")  (SELECT "ABAX_XBRL"."Rol"."IdRol", 37 FROM "ABAX_XBRL"."Rol" WHERE "ABAX_XBRL"."Rol"."Nombre" = 'Administrador General');
INSERT INTO "ABAX_XBRL"."RolFacultad" ("IdRol", "IdFacultad")  (SELECT "ABAX_XBRL"."Rol"."IdRol", 12 FROM "ABAX_XBRL"."Rol" WHERE "ABAX_XBRL"."Rol"."Nombre" = 'Administrador General');
INSERT INTO "ABAX_XBRL"."RolFacultad" ("IdRol", "IdFacultad")  (SELECT "ABAX_XBRL"."Rol"."IdRol", 32 FROM "ABAX_XBRL"."Rol" WHERE "ABAX_XBRL"."Rol"."Nombre" = 'Administrador General');
INSERT INTO "ABAX_XBRL"."RolFacultad" ("IdRol", "IdFacultad")  (SELECT "ABAX_XBRL"."Rol"."IdRol", 23 FROM "ABAX_XBRL"."Rol" WHERE "ABAX_XBRL"."Rol"."Nombre" = 'Administrador General');
INSERT INTO "ABAX_XBRL"."RolFacultad" ("IdRol", "IdFacultad")  (SELECT "ABAX_XBRL"."Rol"."IdRol", 22 FROM "ABAX_XBRL"."Rol" WHERE "ABAX_XBRL"."Rol"."Nombre" = 'Administrador General');
INSERT INTO "ABAX_XBRL"."RolFacultad" ("IdRol", "IdFacultad")  (SELECT "ABAX_XBRL"."Rol"."IdRol", 11 FROM "ABAX_XBRL"."Rol" WHERE "ABAX_XBRL"."Rol"."Nombre" = 'Administrador');
INSERT INTO "ABAX_XBRL"."RolFacultad" ("IdRol", "IdFacultad")  (SELECT "ABAX_XBRL"."Rol"."IdRol", 20 FROM "ABAX_XBRL"."Rol" WHERE "ABAX_XBRL"."Rol"."Nombre" = 'Administrador');
INSERT INTO "ABAX_XBRL"."RolFacultad" ("IdRol", "IdFacultad")  (SELECT "ABAX_XBRL"."Rol"."IdRol", 21 FROM "ABAX_XBRL"."Rol" WHERE "ABAX_XBRL"."Rol"."Nombre" = 'Administrador');
INSERT INTO "ABAX_XBRL"."RolFacultad" ("IdRol", "IdFacultad")  (SELECT "ABAX_XBRL"."Rol"."IdRol", 28 FROM "ABAX_XBRL"."Rol" WHERE "ABAX_XBRL"."Rol"."Nombre" = 'Administrador');
INSERT INTO "ABAX_XBRL"."RolFacultad" ("IdRol", "IdFacultad")  (SELECT "ABAX_XBRL"."Rol"."IdRol", 9 FROM "ABAX_XBRL"."Rol" WHERE "ABAX_XBRL"."Rol"."Nombre" = 'Administrador');
INSERT INTO "ABAX_XBRL"."RolFacultad" ("IdRol", "IdFacultad")  (SELECT "ABAX_XBRL"."Rol"."IdRol", 2 FROM "ABAX_XBRL"."Rol" WHERE "ABAX_XBRL"."Rol"."Nombre" = 'Administrador');
INSERT INTO "ABAX_XBRL"."RolFacultad" ("IdRol", "IdFacultad")  (SELECT "ABAX_XBRL"."Rol"."IdRol", 42 FROM "ABAX_XBRL"."Rol" WHERE "ABAX_XBRL"."Rol"."Nombre" = 'Administrador');
INSERT INTO "ABAX_XBRL"."RolFacultad" ("IdRol", "IdFacultad")  (SELECT "ABAX_XBRL"."Rol"."IdRol", 10 FROM "ABAX_XBRL"."Rol" WHERE "ABAX_XBRL"."Rol"."Nombre" = 'Administrador');
INSERT INTO "ABAX_XBRL"."RolFacultad" ("IdRol", "IdFacultad")  (SELECT "ABAX_XBRL"."Rol"."IdRol", 29 FROM "ABAX_XBRL"."Rol" WHERE "ABAX_XBRL"."Rol"."Nombre" = 'Administrador');
INSERT INTO "ABAX_XBRL"."RolFacultad" ("IdRol", "IdFacultad")  (SELECT "ABAX_XBRL"."Rol"."IdRol", 26 FROM "ABAX_XBRL"."Rol" WHERE "ABAX_XBRL"."Rol"."Nombre" = 'Administrador');
INSERT INTO "ABAX_XBRL"."RolFacultad" ("IdRol", "IdFacultad")  (SELECT "ABAX_XBRL"."Rol"."IdRol", 27 FROM "ABAX_XBRL"."Rol" WHERE "ABAX_XBRL"."Rol"."Nombre" = 'Administrador');
INSERT INTO "ABAX_XBRL"."RolFacultad" ("IdRol", "IdFacultad")  (SELECT "ABAX_XBRL"."Rol"."IdRol", 25 FROM "ABAX_XBRL"."Rol" WHERE "ABAX_XBRL"."Rol"."Nombre" = 'Administrador');
INSERT INTO "ABAX_XBRL"."RolFacultad" ("IdRol", "IdFacultad")  (SELECT "ABAX_XBRL"."Rol"."IdRol", 24 FROM "ABAX_XBRL"."Rol" WHERE "ABAX_XBRL"."Rol"."Nombre" = 'Administrador');
INSERT INTO "ABAX_XBRL"."RolFacultad" ("IdRol", "IdFacultad")  (SELECT "ABAX_XBRL"."Rol"."IdRol", 12 FROM "ABAX_XBRL"."Rol" WHERE "ABAX_XBRL"."Rol"."Nombre" = 'Administrador');
INSERT INTO "ABAX_XBRL"."RolFacultad" ("IdRol", "IdFacultad")  (SELECT "ABAX_XBRL"."Rol"."IdRol", 8 FROM "ABAX_XBRL"."Rol" WHERE "ABAX_XBRL"."Rol"."Nombre" = 'Administrador');
INSERT INTO "ABAX_XBRL"."RolFacultad" ("IdRol", "IdFacultad")  (SELECT "ABAX_XBRL"."Rol"."IdRol", 32 FROM "ABAX_XBRL"."Rol" WHERE "ABAX_XBRL"."Rol"."Nombre" = 'Administrador');
INSERT INTO "ABAX_XBRL"."RolFacultad" ("IdRol", "IdFacultad")  (SELECT "ABAX_XBRL"."Rol"."IdRol", 35 FROM "ABAX_XBRL"."Rol" WHERE "ABAX_XBRL"."Rol"."Nombre" = 'Administrador');
INSERT INTO "ABAX_XBRL"."RolFacultad" ("IdRol", "IdFacultad")  (SELECT "ABAX_XBRL"."Rol"."IdRol", 51 FROM "ABAX_XBRL"."Rol" WHERE "ABAX_XBRL"."Rol"."Nombre" = 'Administrador General');
INSERT INTO "ABAX_XBRL"."RolFacultad" ("IdRol", "IdFacultad")  (SELECT "ABAX_XBRL"."Rol"."IdRol", 60 FROM "ABAX_XBRL"."Rol" WHERE "ABAX_XBRL"."Rol"."Nombre" = 'Administrador General');
INSERT INTO "ABAX_XBRL"."RolFacultad" ("IdRol", "IdFacultad")  (SELECT "ABAX_XBRL"."Rol"."IdRol", 52 FROM "ABAX_XBRL"."Rol" WHERE "ABAX_XBRL"."Rol"."Nombre" = 'Administrador General');
INSERT INTO "ABAX_XBRL"."RolFacultad" ("IdRol", "IdFacultad")  (SELECT "ABAX_XBRL"."Rol"."IdRol", 54 FROM "ABAX_XBRL"."Rol" WHERE "ABAX_XBRL"."Rol"."Nombre" = 'Administrador General');
INSERT INTO "ABAX_XBRL"."RolFacultad" ("IdRol", "IdFacultad")  (SELECT "ABAX_XBRL"."Rol"."IdRol", 59 FROM "ABAX_XBRL"."Rol" WHERE "ABAX_XBRL"."Rol"."Nombre" = 'Usuario Negocio');
INSERT INTO "ABAX_XBRL"."RolFacultad" ("IdRol", "IdFacultad")  (SELECT "ABAX_XBRL"."Rol"."IdRol", 61 FROM "ABAX_XBRL"."Rol" WHERE "ABAX_XBRL"."Rol"."Nombre" = 'Usuario Negocio');
INSERT INTO "ABAX_XBRL"."RolFacultad" ("IdRol", "IdFacultad")  (SELECT "ABAX_XBRL"."Rol"."IdRol", 53 FROM "ABAX_XBRL"."Rol" WHERE "ABAX_XBRL"."Rol"."Nombre" = 'Usuario Negocio');
INSERT INTO "ABAX_XBRL"."RolFacultad" ("IdRol", "IdFacultad")  (SELECT "ABAX_XBRL"."Rol"."IdRol", 51 FROM "ABAX_XBRL"."Rol" WHERE "ABAX_XBRL"."Rol"."Nombre" = 'Usuario Negocio');
INSERT INTO "ABAX_XBRL"."RolFacultad" ("IdRol", "IdFacultad")  (SELECT "ABAX_XBRL"."Rol"."IdRol", 54 FROM "ABAX_XBRL"."Rol" WHERE "ABAX_XBRL"."Rol"."Nombre" = 'Usuario Negocio');
INSERT INTO "ABAX_XBRL"."RolFacultad" ("IdRol", "IdFacultad")  (SELECT "ABAX_XBRL"."Rol"."IdRol", 29 FROM "ABAX_XBRL"."Rol" WHERE "ABAX_XBRL"."Rol"."Nombre" = 'Usuario Negocio');
INSERT INTO "ABAX_XBRL"."RolFacultad" ("IdRol", "IdFacultad")  (SELECT "ABAX_XBRL"."Rol"."IdRol", 26 FROM "ABAX_XBRL"."Rol" WHERE "ABAX_XBRL"."Rol"."Nombre" = 'Usuario Negocio');
INSERT INTO "ABAX_XBRL"."RolFacultad" ("IdRol", "IdFacultad")  (SELECT "ABAX_XBRL"."Rol"."IdRol", 57 FROM "ABAX_XBRL"."Rol" WHERE "ABAX_XBRL"."Rol"."Nombre" = 'Usuario Negocio');
INSERT INTO "ABAX_XBRL"."RolFacultad" ("IdRol", "IdFacultad")  (SELECT "ABAX_XBRL"."Rol"."IdRol", 7 FROM "ABAX_XBRL"."Rol" WHERE "ABAX_XBRL"."Rol"."Nombre" = 'Usuario Negocio');
INSERT INTO "ABAX_XBRL"."RolFacultad" ("IdRol", "IdFacultad")  (SELECT "ABAX_XBRL"."Rol"."IdRol", 60 FROM "ABAX_XBRL"."Rol" WHERE "ABAX_XBRL"."Rol"."Nombre" = 'Usuario Negocio');
INSERT INTO "ABAX_XBRL"."RolFacultad" ("IdRol", "IdFacultad")  (SELECT "ABAX_XBRL"."Rol"."IdRol", 62 FROM "ABAX_XBRL"."Rol" WHERE "ABAX_XBRL"."Rol"."Nombre" = 'Usuario Negocio');
INSERT INTO "ABAX_XBRL"."RolFacultad" ("IdRol", "IdFacultad")  (SELECT "ABAX_XBRL"."Rol"."IdRol", 56 FROM "ABAX_XBRL"."Rol" WHERE "ABAX_XBRL"."Rol"."Nombre" = 'Usuario Negocio');
INSERT INTO "ABAX_XBRL"."RolFacultad" ("IdRol", "IdFacultad")  (SELECT "ABAX_XBRL"."Rol"."IdRol", 58 FROM "ABAX_XBRL"."Rol" WHERE "ABAX_XBRL"."Rol"."Nombre" = 'Usuario Negocio');
INSERT INTO "ABAX_XBRL"."RolFacultad" ("IdRol", "IdFacultad")  (SELECT "ABAX_XBRL"."Rol"."IdRol", 52 FROM "ABAX_XBRL"."Rol" WHERE "ABAX_XBRL"."Rol"."Nombre" = 'Usuario Negocio');
INSERT INTO "ABAX_XBRL"."RolFacultad" ("IdRol", "IdFacultad")  (SELECT "ABAX_XBRL"."Rol"."IdRol", 63 FROM "ABAX_XBRL"."Rol" WHERE "ABAX_XBRL"."Rol"."Nombre" = 'Administrador General');

INSERT INTO "ABAX_XBRL"."TaxonomiaXbrl" ("Nombre", "Descripcion", "Anio") VALUES ('IFRS BMV 2013'                  ,'Taxonomía IFRS de la BMV 2013', 2013);
INSERT INTO "ABAX_XBRL"."TaxonomiaXbrl" ("Nombre", "Descripcion", "Anio") VALUES ('IFRS BMV 2015 para ICS'         ,'Taxonomía IFRS de la BMV 2015 para Empresas Comerciales y de Servicios', 2015);
INSERT INTO "ABAX_XBRL"."TaxonomiaXbrl" ("Nombre", "Descripcion", "Anio") VALUES ('IFRS BMV 2015 para SAPIB'       ,'Taxonomía IFRS de la BMV 2015 para Empresas de Sociedad Anónima Promotora de Inversión Bursátil', 2015);
INSERT INTO "ABAX_XBRL"."TaxonomiaXbrl" ("Nombre", "Descripcion", "Anio") VALUES ('IFRS BMV 2015 para Corto Plazo' ,'Taxonomía IFRS de la BMV 2015 para Empresas de Corto Plazo', 2015);
INSERT INTO "ABAX_XBRL"."TaxonomiaXbrl" ("Nombre", "Descripcion", "Anio") VALUES ('IFRS BMV 2015 para FIBRAS'      ,'Taxonomía IFRS de la BMV 2015 para Fideicomisos de Inversión en Bienes Raíces', 2015);

INSERT INTO "ABAX_XBRL"."ArchivoTaxonomiaXbrl" ("IdTaxonomiaXbrl", "TipoReferencia", "Href", "Rol", "RolUri") (SELECT "ABAX_XBRL"."TaxonomiaXbrl"."IdTaxonomiaXbrl", 1, 'http://emisnet.bmv.com.mx/taxonomy/mx-ifrs-ics-2012-04-01/All/ifrs-mx-ics-entryPoint-all-2012-04-01.xsd', NULL, NULL FROM "ABAX_XBRL"."TaxonomiaXbrl" WHERE "ABAX_XBRL"."TaxonomiaXbrl"."Nombre" = 'IFRS BMV 2013'                 );
INSERT INTO "ABAX_XBRL"."ArchivoTaxonomiaXbrl" ("IdTaxonomiaXbrl", "TipoReferencia", "Href", "Rol", "RolUri") (SELECT "ABAX_XBRL"."TaxonomiaXbrl"."IdTaxonomiaXbrl", 1, 'http://emisnet.bmv.com.mx/taxonomy/mx-ifrs-2014-12-05/full_ifrs_mc_mx_ics_entry_point_2014-12-05.xsd', NULL, NULL    FROM "ABAX_XBRL"."TaxonomiaXbrl" WHERE "ABAX_XBRL"."TaxonomiaXbrl"."Nombre" = 'IFRS BMV 2015 para ICS'        );
INSERT INTO "ABAX_XBRL"."ArchivoTaxonomiaXbrl" ("IdTaxonomiaXbrl", "TipoReferencia", "Href", "Rol", "RolUri") (SELECT "ABAX_XBRL"."TaxonomiaXbrl"."IdTaxonomiaXbrl", 1, 'http://emisnet.bmv.com.mx/taxonomy/mx-ifrs-2014-12-05/full_ifrs_mc_mx_sapib_entry_point_2014-12-05.xsd', NULL, NULL  FROM "ABAX_XBRL"."TaxonomiaXbrl" WHERE "ABAX_XBRL"."TaxonomiaXbrl"."Nombre" = 'IFRS BMV 2015 para SAPIB'      );
INSERT INTO "ABAX_XBRL"."ArchivoTaxonomiaXbrl" ("IdTaxonomiaXbrl", "TipoReferencia", "Href", "Rol", "RolUri") (SELECT "ABAX_XBRL"."TaxonomiaXbrl"."IdTaxonomiaXbrl", 1, 'http://emisnet.bmv.com.mx/taxonomy/mx-ifrs-2014-12-05/full_ifrs_mc_mx_cp_entry_point_2014-12-05.xsd', NULL, NULL     FROM "ABAX_XBRL"."TaxonomiaXbrl" WHERE "ABAX_XBRL"."TaxonomiaXbrl"."Nombre" = 'IFRS BMV 2015 para Corto Plazo');
INSERT INTO "ABAX_XBRL"."ArchivoTaxonomiaXbrl" ("IdTaxonomiaXbrl", "TipoReferencia", "Href", "Rol", "RolUri") (SELECT "ABAX_XBRL"."TaxonomiaXbrl"."IdTaxonomiaXbrl", 1, 'http://emisnet.bmv.com.mx/taxonomy/mx-ifrs-2014-12-05/full_ifrs_mc_mx_fibras_entry_point_2014-12-05.xsd', NULL, NULL FROM "ABAX_XBRL"."TaxonomiaXbrl" WHERE "ABAX_XBRL"."TaxonomiaXbrl"."Nombre" = 'IFRS BMV 2015 para FIBRAS'     );

INSERT INTO "ABAX_XBRL"."TipoDato" ("IdTipoDato", "Nombre", "EsNumerico", "EsFraccion", "NombreXbrl") VALUES (1, 'http://www.xbrl.org/2003/instance:decimalItemType', 1, 0, 'decimal');
INSERT INTO "ABAX_XBRL"."TipoDato" ("IdTipoDato", "Nombre", "EsNumerico", "EsFraccion", "NombreXbrl") VALUES (2, 'http://www.xbrl.org/2003/instance:floatItemType', 1, 0, 'float');
INSERT INTO "ABAX_XBRL"."TipoDato" ("IdTipoDato", "Nombre", "EsNumerico", "EsFraccion", "NombreXbrl") VALUES (3, 'http://www.xbrl.org/2003/instance:doubleItemType', 1, 0, 'double');
INSERT INTO "ABAX_XBRL"."TipoDato" ("IdTipoDato", "Nombre", "EsNumerico", "EsFraccion", "NombreXbrl") VALUES (4, 'http://www.xbrl.org/2003/instance:integerItemType', 1, 0, 'decimal');
INSERT INTO "ABAX_XBRL"."TipoDato" ("IdTipoDato", "Nombre", "EsNumerico", "EsFraccion", "NombreXbrl") VALUES (5, 'http://www.xbrl.org/2003/instance:nonPositiveIntegerItemType', 1, 0, 'decimal');
INSERT INTO "ABAX_XBRL"."TipoDato" ("IdTipoDato", "Nombre", "EsNumerico", "EsFraccion", "NombreXbrl") VALUES (6, 'http://www.xbrl.org/2003/instance:negativeIntegerItemType', 1, 0, 'decimal');
INSERT INTO "ABAX_XBRL"."TipoDato" ("IdTipoDato", "Nombre", "EsNumerico", "EsFraccion", "NombreXbrl") VALUES (7, 'http://www.xbrl.org/2003/instance:longItemType', 1, 0, 'decimal');
INSERT INTO "ABAX_XBRL"."TipoDato" ("IdTipoDato", "Nombre", "EsNumerico", "EsFraccion", "NombreXbrl") VALUES (8, 'http://www.xbrl.org/2003/instance:intItemType', 1, 0, 'decimal');
INSERT INTO "ABAX_XBRL"."TipoDato" ("IdTipoDato", "Nombre", "EsNumerico", "EsFraccion", "NombreXbrl") VALUES (9, 'http://www.xbrl.org/2003/instance:shortItemType', 1, 0, 'decimal');
INSERT INTO "ABAX_XBRL"."TipoDato" ("IdTipoDato", "Nombre", "EsNumerico", "EsFraccion", "NombreXbrl") VALUES (10, 'http://www.xbrl.org/2003/instance:byteItemType', 1, 0, 'decimal');
INSERT INTO "ABAX_XBRL"."TipoDato" ("IdTipoDato", "Nombre", "EsNumerico", "EsFraccion", "NombreXbrl") VALUES (11, 'http://www.xbrl.org/2003/instance:nonNegativeIntegerItemType', 1, 0, 'decimal');
INSERT INTO "ABAX_XBRL"."TipoDato" ("IdTipoDato", "Nombre", "EsNumerico", "EsFraccion", "NombreXbrl") VALUES (12, 'http://www.xbrl.org/2003/instance:unsignedLongItemType', 1, 0, 'decimal');
INSERT INTO "ABAX_XBRL"."TipoDato" ("IdTipoDato", "Nombre", "EsNumerico", "EsFraccion", "NombreXbrl") VALUES (13, 'http://www.xbrl.org/2003/instance:unsignedIntItemType', 1, 0, 'decimal');
INSERT INTO "ABAX_XBRL"."TipoDato" ("IdTipoDato", "Nombre", "EsNumerico", "EsFraccion", "NombreXbrl") VALUES (14, 'http://www.xbrl.org/2003/instance:unsignedShortItemType', 1, 0, 'decimal');
INSERT INTO "ABAX_XBRL"."TipoDato" ("IdTipoDato", "Nombre", "EsNumerico", "EsFraccion", "NombreXbrl") VALUES (15, 'http://www.xbrl.org/2003/instance:unsignedByteItemType', 1, 0, 'decimal');
INSERT INTO "ABAX_XBRL"."TipoDato" ("IdTipoDato", "Nombre", "EsNumerico", "EsFraccion", "NombreXbrl") VALUES (16, 'http://www.xbrl.org/2003/instance:positiveIntegerItemType', 1, 0, 'decimal');
INSERT INTO "ABAX_XBRL"."TipoDato" ("IdTipoDato", "Nombre", "EsNumerico", "EsFraccion", "NombreXbrl") VALUES (17, 'http://www.xbrl.org/2003/instance:monetaryItemType', 1, 0, 'decimal');
INSERT INTO "ABAX_XBRL"."TipoDato" ("IdTipoDato", "Nombre", "EsNumerico", "EsFraccion", "NombreXbrl") VALUES (18, 'http://www.xbrl.org/2003/instance:sharesItemType', 1, 0, 'decimal');
INSERT INTO "ABAX_XBRL"."TipoDato" ("IdTipoDato", "Nombre", "EsNumerico", "EsFraccion", "NombreXbrl") VALUES (19, 'http://www.xbrl.org/2003/instance:pureItemType', 1, 0, 'decimal');
INSERT INTO "ABAX_XBRL"."TipoDato" ("IdTipoDato", "Nombre", "EsNumerico", "EsFraccion", "NombreXbrl") VALUES (20, 'http://www.xbrl.org/2003/instance:fractionItemType', 1, 1, 'fraction');
INSERT INTO "ABAX_XBRL"."TipoDato" ("IdTipoDato", "Nombre", "EsNumerico", "EsFraccion", "NombreXbrl") VALUES (21, 'http://www.xbrl.org/2003/instance:stringItemType', 0, 0, 'string');
INSERT INTO "ABAX_XBRL"."TipoDato" ("IdTipoDato", "Nombre", "EsNumerico", "EsFraccion", "NombreXbrl") VALUES (22, 'http://www.xbrl.org/2003/instance:booleanItemType', 0, 0, 'boolean');
INSERT INTO "ABAX_XBRL"."TipoDato" ("IdTipoDato", "Nombre", "EsNumerico", "EsFraccion", "NombreXbrl") VALUES (23, 'http://www.xbrl.org/2003/instance:hexBinaryItemType', 0, 0, 'hexBinary');
INSERT INTO "ABAX_XBRL"."TipoDato" ("IdTipoDato", "Nombre", "EsNumerico", "EsFraccion", "NombreXbrl") VALUES (24, 'http://www.xbrl.org/2003/instance:base64BinaryItemType', 0, 0, 'base64Binary');
INSERT INTO "ABAX_XBRL"."TipoDato" ("IdTipoDato", "Nombre", "EsNumerico", "EsFraccion", "NombreXbrl") VALUES (25, 'http://www.xbrl.org/2003/instance:anyURIItemType', 0, 0, 'anyURI');
INSERT INTO "ABAX_XBRL"."TipoDato" ("IdTipoDato", "Nombre", "EsNumerico", "EsFraccion", "NombreXbrl") VALUES (26, 'http://www.xbrl.org/2003/instance:QNameItemType', 0, 0, 'Qname');
INSERT INTO "ABAX_XBRL"."TipoDato" ("IdTipoDato", "Nombre", "EsNumerico", "EsFraccion", "NombreXbrl") VALUES (27, 'http://www.xbrl.org/2003/instance:durationItemType', 0, 0, 'duration');
INSERT INTO "ABAX_XBRL"."TipoDato" ("IdTipoDato", "Nombre", "EsNumerico", "EsFraccion", "NombreXbrl") VALUES (28, 'http://www.xbrl.org/2003/instance:dateTimeItemType', 0, 0, 'dateTime');
INSERT INTO "ABAX_XBRL"."TipoDato" ("IdTipoDato", "Nombre", "EsNumerico", "EsFraccion", "NombreXbrl") VALUES (29, 'http://www.xbrl.org/2003/instance:timeItemType', 0, 0, 'time');
INSERT INTO "ABAX_XBRL"."TipoDato" ("IdTipoDato", "Nombre", "EsNumerico", "EsFraccion", "NombreXbrl") VALUES (30, 'http://www.xbrl.org/2003/instance:dateItemType', 0, 0, 'date');
INSERT INTO "ABAX_XBRL"."TipoDato" ("IdTipoDato", "Nombre", "EsNumerico", "EsFraccion", "NombreXbrl") VALUES (31, 'http://www.xbrl.org/2003/instance:gYearMonthItemType', 0, 0, 'gYearMonth');
INSERT INTO "ABAX_XBRL"."TipoDato" ("IdTipoDato", "Nombre", "EsNumerico", "EsFraccion", "NombreXbrl") VALUES (32, 'http://www.xbrl.org/2003/instance:gYearItemType', 0, 0, 'gYear');
INSERT INTO "ABAX_XBRL"."TipoDato" ("IdTipoDato", "Nombre", "EsNumerico", "EsFraccion", "NombreXbrl") VALUES (33, 'http://www.xbrl.org/2003/instance:gMonthDayItemType', 0, 0, 'gMonthDay');
INSERT INTO "ABAX_XBRL"."TipoDato" ("IdTipoDato", "Nombre", "EsNumerico", "EsFraccion", "NombreXbrl") VALUES (34, 'http://www.xbrl.org/2003/instance:gDayItemType', 0, 0, 'gDay');
INSERT INTO "ABAX_XBRL"."TipoDato" ("IdTipoDato", "Nombre", "EsNumerico", "EsFraccion", "NombreXbrl") VALUES (35, 'http://www.xbrl.org/2003/instance:gMonthItemType', 0, 0, 'gMonth');
INSERT INTO "ABAX_XBRL"."TipoDato" ("IdTipoDato", "Nombre", "EsNumerico", "EsFraccion", "NombreXbrl") VALUES (36, 'http://www.xbrl.org/2003/instance:normalizedStringItemType', 0, 0, 'string');
INSERT INTO "ABAX_XBRL"."TipoDato" ("IdTipoDato", "Nombre", "EsNumerico", "EsFraccion", "NombreXbrl") VALUES (37, 'http://www.xbrl.org/2003/instance:tokenItemType', 0, 0, 'string');
INSERT INTO "ABAX_XBRL"."TipoDato" ("IdTipoDato", "Nombre", "EsNumerico", "EsFraccion", "NombreXbrl") VALUES (38, 'http://www.xbrl.org/2003/instance:languageItemType', 0, 0, 'string');
INSERT INTO "ABAX_XBRL"."TipoDato" ("IdTipoDato", "Nombre", "EsNumerico", "EsFraccion", "NombreXbrl") VALUES (39, 'http://www.xbrl.org/2003/instance:NameItemType', 0, 0, 'string');
INSERT INTO "ABAX_XBRL"."TipoDato" ("IdTipoDato", "Nombre", "EsNumerico", "EsFraccion", "NombreXbrl") VALUES (40, 'http://www.xbrl.org/2003/instance:NCNameItemType', 0, 0, 'string');
INSERT INTO "ABAX_XBRL"."TipoDato" ("IdTipoDato", "Nombre", "EsNumerico", "EsFraccion", "NombreXbrl") VALUES (41, 'http://www.xbrl.org/dtr/type/non-numeric:textBlockItemType', 0, 0, 'string');


INSERT INTO "ABAX_XBRL"."AccionAuditable" ("IdAccionAuditable","Nombre", "Descripcion") VALUES (1,'Login', 'Acción auditable del registro de la autenticación de los usuarios en el sitio');
INSERT INTO "ABAX_XBRL"."AccionAuditable" ("IdAccionAuditable","Nombre", "Descripcion") VALUES (2,'Insertar', 'Accion auditable de inserciones  en la aplicacion');
INSERT INTO "ABAX_XBRL"."AccionAuditable" ("IdAccionAuditable","Nombre", "Descripcion") VALUES (3,'Actualizar', 'Accion auditable de actualizaciones  en la aplicacion');
INSERT INTO "ABAX_XBRL"."AccionAuditable" ("IdAccionAuditable","Nombre", "Descripcion") VALUES (4,'Borrar', ' Accion auditable para el borrado en la aplicacion');
INSERT INTO "ABAX_XBRL"."AccionAuditable" ("IdAccionAuditable","Nombre", "Descripcion") VALUES (5,'Autentificación de Usuario', 'Acción auditable cuando se autentifica el usaurio');
INSERT INTO "ABAX_XBRL"."AccionAuditable" ("IdAccionAuditable","Nombre", "Descripcion") VALUES (6,'Envio de Correo', 'Acción auditable cuando se envia un correo desde la aplicación');
INSERT INTO "ABAX_XBRL"."AccionAuditable" ("IdAccionAuditable","Nombre", "Descripcion") VALUES (7,'Importar', 'Acción auditable cuando se importa un documento');
INSERT INTO "ABAX_XBRL"."AccionAuditable" ("IdAccionAuditable","Nombre", "Descripcion") VALUES (8,'Exportar', 'Acción auditable cuando se exporta un documento');
INSERT INTO "ABAX_XBRL"."AccionAuditable" ("IdAccionAuditable","Nombre", "Descripcion") VALUES (9,'Consultar', 'Acción auditable cuando consulta información');



INSERT INTO "ABAX_XBRL"."Modulo" ("IdModulo","Nombre", "Descripcion") VALUES (1,'Login', 'Modulo del acceso del sitio');
INSERT INTO "ABAX_XBRL"."Modulo" ("IdModulo","Nombre", "Descripcion") VALUES (2,'Usuarios', 'Modulo Administracion de Usuarios');
INSERT INTO "ABAX_XBRL"."Modulo" ("IdModulo","Nombre", "Descripcion") VALUES (3,'Empresa', 'Modulo Administracion de Empresas');
INSERT INTO "ABAX_XBRL"."Modulo" ("IdModulo","Nombre", "Descripcion") VALUES (4,'Rol', 'Modulo Administracion de Roles');
INSERT INTO "ABAX_XBRL"."Modulo" ("IdModulo","Nombre", "Descripcion") VALUES (5,'Grupos de Usuario', 'Modulo Administracion de Grupos de Usuario');
INSERT INTO "ABAX_XBRL"."Modulo" ("IdModulo","Nombre", "Descripcion") VALUES (6,'Asignación de Roles a Usuarios', 'Módulo Administración de Asignación de Roles a Usuarios');
INSERT INTO "ABAX_XBRL"."Modulo" ("IdModulo","Nombre", "Descripcion") VALUES (7,'Editor de Documentos Instancia XBRL', 'Modulo Editor de Documentos Instancia XBRL');


UPDATE "ABAX_XBRL"."TaxonomiaXbrl" SET "EspacioNombresPrincipal" = 'http://www.bmv.com.mx/fr/ics/2012-04-01/ifrs-mx-ics-entryPoint-all'
WHERE "Nombre" = 'IFRS BMV 2013'
;

UPDATE "ABAX_XBRL"."TaxonomiaXbrl" SET "EspacioNombresPrincipal" = 'http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_ics_entry_point_2014-12-05'
WHERE "Nombre" = 'IFRS BMV 2015 para ICS'
;

UPDATE "ABAX_XBRL"."TaxonomiaXbrl" SET "EspacioNombresPrincipal" = 'http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_sapib_entry_point_2014-12-05'
WHERE "Nombre" = 'IFRS BMV 2015 para SAPIB'
;

UPDATE "ABAX_XBRL"."TaxonomiaXbrl" SET "EspacioNombresPrincipal" = 'http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_cp_entry_point_2014-12-05'
WHERE "Nombre" = 'IFRS BMV 2015 para Corto Plazo'
;

UPDATE "ABAX_XBRL"."TaxonomiaXbrl" SET "EspacioNombresPrincipal" = 'http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_fibras_entry_point_2014-12-05'
WHERE "Nombre" = 'IFRS BMV 2015 para FIBRAS'
;

COMMIT;