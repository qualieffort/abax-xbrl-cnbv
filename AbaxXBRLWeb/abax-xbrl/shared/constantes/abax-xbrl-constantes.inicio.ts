

module abaxXBRL {

    /**
    * Clase que funje como repositoriode las constantes de la aplicasión.
    **/
    export class AbaxXBRLConstantes {
  
        /**
        * Path con la ruta del servicio para obtener el listado de alertas recientes. 
        **/
        public static get ALERTAS_RECIENTES_PATH(): string { return "Home/AlertasRecientes"; }
        /**
        * Path con la ruta del servicio que retorna los conceptos. 
        **/
        public static get CONCEPTOS_BUSQUEDA_PATH(): string { return "DocumentoInstancia/ObtenerListaConceptosTaxonomias"; }

        /**
        * Path con la ruta del servicio que retorna los roles de la taxonomia seleccionada. 
        **/
        public static get ROLES_TAXONOMIA_BUSQUEDA_PATH(): string { return "DocumentoInstancia/ObtenerListaRolesTaxonomia"; }
        /**
        * Año en que se generó la primer taxonomía XBRL.
        **/
        public static get ANO_PRIMER_TAXONOMIA_XBRL(): number { return 1998; }
        /**
         * Path del servicio que retorna los últimos registros de auditoria del usuario. 
        **/
        public static get ULTIMAS_ALERTAS_USUARIO_PATH(): string { return "Home/UltimasAlertasUsuario"; }
        /**
        * Nombre el atributo de sesion con el valor del concepto de busqueda.
        **/
        public static get ATRIBUTO_SESION_CONCEPTO_BUSQUEDA(): string { return "CONCEPTO_BUSQUEDA" }


        /**
        * Nombre el atributo de sesion con el valor de la taxonomia consultada.
        **/
        public static get ATRIBUTO_SESION_ID_TAXONOMIA(): string { return "ID_TAXONOMIA_CONSULTA" }

        

        /**
        * Nombre el atributo de sesion con el id del rol que se esta procesando.
        **/
        public static get ATRIBUTO_SESION_ID_ROL_PROCESADO(): string { return "ID_ROL_PROCESADO" }
        /**
        * Nombre del atributo temporal tipo booleano que indica si se esta registrando un nuevo elemento.
        **/
        public static get ATRIBUTO_ES_NUEVO_ELEMENTO(): string { return "ES_NUEVO_ELEMENTO" }
        /**
        * Nombre del atributo temporal que contiene el elemento a editar.
        **/
        public static get ATRIBUTO_ELEMENTO_EDITAR(): string { return "ELEMENTO_EDITAR" }
        /**
        * Nombre del atributo temporal que contiene la entidad padre propietaria de una o más entidades hijas.
        **/
        public static get ATRIBUTO_ENTIDAD_PADRE(): string { return "ENTIDAD_PADRE" }
        /**
        * Nombre el atributo de sesion con el id de la consulta de la configuracion que se esta procesando.
        **/
        public static get ATRIBUTO_SESION_ID_CONSULTA_CONFIGURACION(): string { return "ID_CONFIGURACION_CONSULTA" }

        /**
        * Identificador del parametro booleano de la vista que indica si se esta haciendo refrencia a la misma empresa u otra.
        **/
        public static get ATRIBUTO_SESION_MISMA_EMPRESA(): string { return "MISMA_EMPRESA"; }
        /**
        * Nombre el elemento que se esta procesando.
        **/
        public static get ATRIBUTO_SESION_ID_ELEMENTO_PROCESADO(): string { return "ID_ELEMENTO_PROCESADO"; }
        /**
        * Nombre del segundo elemento que se esta procesando.
        **/
        public static get ATRIBUTO_SESION_ID_ELEMENTO_PROCESADO_2(): string { return "ID_ELEMENTO_PROCESADO_2"; }
        /**
        * Nombre del atributo para obtener los elementos resultantes de un filtro que estan asignados a una entidad.
        **/
        public static get ATRIBUTO_FILTRO_ASIGNADAS_VISBLES(): string { return "asignadasVisibles"; }
        /**
        * Nombre del atributo para obtener los elementos resultantes de un filtro que aunque estan disponibles no han sido asignados a una entidad.
        **/
        public static get ATRIBUTO_FILTRO_NO_ASIGNADAS_VISBLES(): string { return "noAsignadasVisibles"; }
        /**
        * Nombre el atributo de sesion que indica si se esta editando o registrando una entidad.
        **/
        public static get ATRIBUTO_SESION_EDITANDO_ENTIDAD(): string { return "EDITANDO_ENTIDAD"; }
        /**
        * Nombre el atributo de sesion que contiene al entidad que se esta procesando.
        **/
        public static get ATRIBUTO_SESION_ENTIDAD_ACTUAL(): string { return "ENTIDAD_ACTUAL"; }
        /**
        * Nombre el atributo de sesion que contiene al entidad que se esta procesando.
        **/
        public static get ATRIBUTO_SESION_ES_USUARIO_EMPRESA(): string { return "ES_USUARIO_EMPRESA"; }
        /**
        * Nombre del atributo con el arreglo de errores resultantes de la carga de una taxonomía.
        **/
        public static get ATRIBUTO_LISTADO_ERRORES(): string { return "LISTADO_ERRORES"; }
        /**
        * Nombre del atributo que contiene el múltiplo a editar.
        **/
        public static get ATRIBUTO_MULTIPLO(): string { return "MULTIPLO"; }
        /**
        * Nombre del atributo que guarda la bandera de request indicando si el usuario actual es de la misma empresa o no.
        **/
        public static get ATRIBUTO_USUARIO_MISMA_EMPRESA(): string { return "USUARIO_MISMA_EMPRESA"; }
        /**
        * Nombre del atributo con la configuración para un dialogo de confirmación.
        **/
        public static get ATRIBUTO_CONFIGURACION_DIALOGO_CONFIRMACION(): string { return "CONFIGURACION_DIALOGO_CONFIRMACION"; }
        /**
        * Nombre del atributo con la configuración para un dialogo para desplegar información detallada.
        **/
        public static get ATRIBUTO_CONFIGURACION_DIALOGO_DETALLE(): string { return "CONFIGURACION_DIALOGO_DETALLE"; }
        /**
        * Ruta donde se consultan los hechos por concepto.
        **/
        public static get HECHOS_POR_CONCEPTO_PATH(): string { return "DocumentoInstancia/ObtenerHechosPorConcepto"; }

        /**
        * Ruta donde se consultan los hechos por una configuracion de analisis.
        **/
        public static get HECHOS_POR_CONSULTA_ANALISIS_PATH(): string { return "ConsultaAnalisis/ObtenerHechosPorConsultaAnalisis"; }

        /**
        * Path con la ruta del servicio que retorna las entidades. 
        **/
        public static get ENTIDADES_BUSQUEDA_PATH(): string { return "ConsultaAnalisis/ObtenerListaEntidades"; }

        /**
        * Ruta donde se registra una consulta de analisis 
        **/
        public static get REGISTRAR_CONSULTA_ANALISIS_PATH(): string { return "ConsultaAnalisis/RegistrarConsultaAnalisis"; }

        /**
        * Ruta donde se consulta la definicion de una consulta de analisis de informacion
        **/
        public static get OBTENER_CONSULTA_ANALISIS_PATH(): string { return "ConsultaAnalisis/ConsultaAnalisisPorId"; }

        /**
        * Ruta que se define la eliminacion de la consulta de analisis de informacion
        **/
        public static get ELIMINAR_CONSULTA_PATH(): string { return "ConsultaAnalisis/EliminarConsulta"; }
        
        /**
        * Ruta que se define para la descarga de una consulta en ejecucion
        **/
        public static get DESCARGA_EJECUCION_CONSULTA_PATH(): string { return "ConsultaAnalisis/DescargarEjecucionConsulta"; }


        /**
        * Ruta que se define para la descarga de una consulta en ejecucion
        **/
        public static get DESCARGA_EJECUCION_CONSULTA_PERSONALIZADA_PATH(): string { return "ConsultaAnalisis/DescargarEjecucionConsultaParametrizada"; }


        /**
        * Ruta para obtener un listado de conceptos por entidad
        */
        public static get CONCEPTOS_POR_ENTIDAD_PATH(): string { return "ConsultaAnalisis/ConceptosPorEntidad"; }

        /**
        * Ruta para obtener un listado de contextos del listado de empresas especificado
        */
        public static get CONTEXTOS_POR_EMPRESA_PATH(): string { return "ConsultaAnalisis/ObtenerListadoContextosPorEmpresas"; }
        


        /**
        * Ruta para la obtención de los roles de usuario.
        **/
        public static get OBTEN_ROLES_EMPRESA_PATH(): string { return "Rol/ObtenRolesEmpesa"; }
        /**
        * Ruta del servicio para eliminar un rol.
        **/
        public static get ELIMINAR_ROL_PATH(): string { return "Rol/EliminarRol"; }
        /**
        * Ruta del servicio para registrar un nuevo un rol.
        **/
        public static get REGISTRAR_ROL_PATH(): string { return "Rol/RegistrarRol"; }
        /**
        * Ruta del servicio para actualizar un rol existente.
        **/
        public static get ACTUALIZAR_ROL_PATH(): string { return "Rol/ActualizarRol"; }
        /**
        * Ruta del servicio para obtener el listado de categorías de facultades.
        **/
        public static get OBTEN_CATEGORIAS_FACULTADES_PATH(): string { return "Rol/ObtenCategoriasFacultades"; }
        /**
        * Ruta del servicio para obtener el listado de todas las facultades.
        **/
        public static get OBTEN_FACULTADES_PATH(): string { return "Rol/ObtenFacultades"; }
        /**
        * Ruta del servicio para obtener el listado de todas las facultades asignadas a un rol en particular..
        **/
        public static get OBTEN_FACULTADES_ASIGNADAS_ROL_PATH(): string { return "Rol/ObtenFacultadesRol"; }
        /**
        * Ruta del servicio para asignar un conjunto de facultades a un rol determinado.
        **/
        public static get ASIGNA_FACULTADES_ROL_PATH(): string { return "Rol/AsignaFacultadesRol"; }
        /**
        * Ruta del servicio para exportar a excel el contenido de la tabla de roles.
        **/
        public static get EXPORTAR_ROLES_PATH(): string { return "Rol/Exportar"; }
        /**
        * Ruta del servicio para obtener las empresas al catálogo.
        **/
        public static get OBTENER_EMPRESAS_PATH(): string { return "Empresa/GetEmpresas"; }
        /**
        * Ruta del servicio para obtener las empresas del catálogo.
        **/
        public static get OBTENER_EMPRESA_PATH(): string { return "Empresa/GetEmpresa"; }
        /**
        * Ruta del servicio para agregar una empresa al catálogo.
        **/
        public static get AGREGA_EMPRESA_PATH(): string { return "Empresa/AddEmpresa"; }

        /**
        * Ruta del servicio para inicializar pantalla de edición y registro.
        **/
        public static get INIT_EMPRESA_PATH(): string { return "Empresa/InitEmpresa"; }
        

        /**
        * Ruta del servicio para actualizar una empresa al catálogo.
        **/
        public static get ACTUALIZA_EMPRESA_PATH(): string { return "Empresa/UpdateEmpresa"; }
        /**
        * Ruta del servicio para eliminar una empresa al catálogo.
        **/
        public static get ELIMINA_EMPRESA_PATH(): string { return "Empresa/DeleteEmpresa"; }
        /**
        * Ruta del servicio para eliminar una empresa al catálogo.
        **/
        public static get DESCARGA_EMPRESAS_PATH(): string { return "Empresa/ExportEmpresas"; }
        /**
        * Ruta del servicio para consultar el listado de elementos del catálogo de tipo de empresa.
        **/
        public static get CONSULTA_TIPOS_EMPRESA_PATH(): string { return "Empresa/GetTiposEmpresa"; }
        /**
        * Ruta del servicio para actualizar un elemento del catálogo de tipo de empresa.
        **/
        public static get GUARDAR_TIPO_EMPRESA_PATH(): string { return "Empresa/SaveTipoEmpresa"; }
        /**
        * Ruta del servicio para eliminar un tipo de empresa del cálogo.
        **/
        public static get BORRAR_TIPO_EMPRESA_PATH(): string { return "Empresa/DeleteTipoEmpresa"; }
        /**
        * Ruta del servicio para la exportación de los tipos de empresa.
        **/
        public static get EXPORTAR_TIPO_EMPRESA_PATH(): string { return "Empresa/ExportTiposEmpresa"; }
        /**
        * Ruta del servicio para eliminar un tipo de empresa del cálogo.
        **/
        public static get OBTEN_TIPOS_EMPRESA_ASIGNADOS_PATH(): string { return "Empresa/ObtenTiposEmpresaAsignados" }
        /**
        * Ruta del servicio para la exportación de los tipos de empresa.
        **/
        public static get ASIGNA_TIPOS_EMPRESA_PATH(): string { return "Empresa/AsignaTiposEmpresa" }
        /**
        * Ruta del servicio para consultar el listado de elementos del catálogo de taxonomías.
        **/
        public static get CONSULTA_TAXONOMIAS_PATH(): string { return "Empresa/GetTaxonomiasXbrl"; }
        /**
        * Ruta del servicio para actualizar un elemento las taxonomias de tipo de empresa.
        **/
        public static get GUARDAR_TAXONOMIA_PATH(): string { return "Empresa/SaveTaxonomiaXbrl"; }
        /**
        * Ruta del servicio para eliminar una Taxonomía del cálogo.
        **/
        public static get BORRAR_TAXONOMIA_PATH(): string { return "Empresa/DeleteTaxonomiaXbrl"; }
        /**
        * Ruta del servicio para la exportación de las taxonomías.
        **/
        public static get EXPORTAR_TAXONOMIAS_PATH(): string { return "Empresa/ExportTaxonomiasXbrl"; }
        /**
        * Ruta del servicio para consultar el listado de elementos del catálogo de grupos de empresas.
        **/
        public static get CONSULTA_GRUPO_EMPRESAS_PATH(): string { return "GrupoEmpresaController/ConsultaGrupoEmpresas"; }
        /**
        * Ruta del servicio para eliminar un grupo de empresas del cálogo.
        **/
        public static get BORRAR_GRUPO_EMPRESAS_PATH(): string { return "GrupoEmpresaController/BorraGrupoEmpresa"; }
        /**
        * Ruta del servicio para la exportación de el listado de grupos de empreas.
        **/
        public static get EXPORTAR_GRUPO_EMPRESAS_PATH(): string { return "GrupoEmpresaController/ExportarExcelGruposEmpresas"; }
        /**
        * Ruta del servicio para actualizar un grupo de empresas.
        **/
        public static get GUARDAR_GRUPO_EMPRESAS_PATH(): string { return "GrupoEmpresaController/GuardarGrupoEmpresa"; }
        /**
        * Retorna una lista de elementos para un combo con los grupos de empresas disponibles.
        **/
        public static get OBTEN_GRUPOS_EMPRESAS_COMBO_PATH(): string { return "GrupoEmpresaController/ObtenGruposEmpresasAsignables"; }
        /**
        * Ruta del servicio para obtender las empresas que están disponibles a ser asignadas a un grupo de empresas en particular.
        **/
        public static get OBTEN_EMPRESAS_ASIGNABLES_GRUPO_EMPRESA_PATH(): string { return "GrupoEmpresaController/ObtenEmpresasAsignables" }
        /**
        * Ruta del servicio para obtender las empresas que están asignadas a un grupo de empresas en particular.
        **/
        public static get OBTEN_EMPRESAS_ASINGADAS_GRUPO_EMPRESA_PATH(): string { return "GrupoEmpresaController/ObtenEmpresasAsignadas" }
        /**
        * Ruta del servicio para obtender las empresas que están asignadas a un grupo de empresas en particular.
        **/
        public static get GUARDA_ASINGACION_EMPRESAS_GRUPO_EMPRESA_PATH(): string { return "GrupoEmpresaController/GuardarEmpresasAsignadasGrupoEmpresas" }
        /**
        * Retorna una lista de elementos para un combo con las empresas disponibles.
        **/
        public static get OBTEN_EMPRESAS_COMBO_PATH(): string { return "GrupoEmpresaController/ObtenEmpresasAsignables"; }
        /**
        * Ruta del servicio para obtender los grupos de empresas que están disponibles a ser asignadas a una empresa en particular.
        **/
        public static get OBTEN_GRUPOS_EMPRESA_ASIGNABLES_EMPRESA_PATH(): string { return "GrupoEmpresaController/ObtenGruposEmpresasAsignables" }
        /**
        * Ruta del servicio para obtender los grupos de empresas que están asignados a una empresa en particular.
        **/
        public static get OBTEN_GRUPOS_EMPRESA_ASIGNADOS_EMPRESA_PATH(): string { return "GrupoEmpresaController/ObtenGruposEmpresasAsignados" }
        /**
        * Ruta del servicio para guardar los grupos de empresa asingados a la empresa.
        **/
        public static get GUARDA_ASINGACION_GRUPO_EMPRESA_A_EMPRESA_PATH(): string { return "GrupoEmpresaController/GuardarGruposEmpresasAsingadosEmpresa" }
        /**
        * Ruta del servicio para obtener las taxonomias asignadas a un tipo de empresa del cálogo.
        **/
        public static get OBTEN_TAXONOMIAS_ASIGNADAS_PATH(): string { return "Empresa/ObtenTaxonomiasAsignadas" }
        /**
        * Ruta del servicio para la asignación de taxonomias a un tipos de empresa.
        **/
        public static get ASIGNA_TAXONOMIAS_PATH(): string { return "Empresa/AsignaTaxonomias" }
        /**
        * Ruta del servicio para consultar los fiduciarios primarios .
        **/
        public static get CONSULTA_FIDUCIARIOS_PATH(): string { return "Empresa/GetFiduciarios"; }

        /**
        * Ruta del servicio para consultar los fiduciarios primarios disponibles para asignar a RepComun.
        **/
        public static get CONSULTA_FIDUCIARIOS_DISPONIBLES_REP_COMUN_PATH(): string { return "Empresa/GetFiduciariosDisponiblesRepComun"; }
        
        /**
        * Ruta del servicio para consultar todas las empresas existentes en la estructura general para el llenado de un combo.
        **/
        public static get CONSULTA_TODAS_EMPRESAS_COMBO_PATH(): string { return "Empresa/ObtenTodasEmpresasCombo"; }
        /**
        * Ruta del servicio para obtener los fiduciarios secundarios asignados a un fiduciario primario.
        **/
        public static get OBTEN_FIDUCIARIOS_ASIGNADOS_PATH(): string { return "Empresa/ObtenFiduciariosAsignados" }

        /**
        * Ruta del servicio para obtener los fiduciarios secundarios asignados a un Representante común(fiduciario primario).
        **/
        public static get OBTEN_FIDUCIARIOS_ASIGNADOS_REP_COMUN_PATH(): string { return "Empresa/ObtenFiduciariosAsignadosRepComun" }

        /**
        * Ruta del servicio para la asignación de taxonomias a un tipos de empresa.
        **/
        public static get ASIGNA_FIDUCIARIOS_PATH(): string { return "Empresa/AsignaFiduciarios" }

        /**
         * Ruta del servicio para relacionar los fiduciarios secundarios a un Representante común(fiduciario primario).
        **/
        public static get ASIGNA_FIDUCIARIOS_A_REPRESENTATE_COMUN_PATH(): string { return "Empresa/AsignaFiduciariosARepresentanteComun" }
        /**
        * Ruta del servicio para consultar la bitacora de versionamiento de documentos de instancia.
        **/
        public static get OBTENER_BITACORA_VERSION_DOCUMENOT_PATH(): string { return "BitacoraVersionDocumento/ObtenListaBitacoraVersionDocumentos"; }

        /**
        * Ruta del servicio para consultar la bitacora de Archivos enviados BMV.
        **/
        public static get OBTENER_BITACORA_ARCHIVOS_BMV_PATH(): string { return "BitacoraVersionDocumento/ObtenListaBitacoraArchivosBMV"; }

        public static get EXPORTAR_BITACORA_ARCHIVOS_BMV_PATH(): string { return "BitacoraVersionDocumento/ExportarListaBitacoraArchivosBMV"; }

        

        /**
        * Ruta del servicio para la exportación de la bitacora de versionamiento de documentos de instancia.
        **/
        public static get EXPORTAR_BITACORA_VERSION_DOCUMENOT_PATH(): string { return "BitacoraVersionDocumento/ExportaBitacoraVersionDocumentos"; }
        /**
        * Ruta del servicio para reprocear archivos de la bistacora de versionamiento de documentos.
        **/
        public static get REPROCEAR_BITACORA_VERSION_DOCUMENOT_PATH(): string { return "BitacoraVersionDocumento/ReProcesarVersionDocumentos"; }
        /** Ruta del servicio para obtener todas las emisoras **/
        public static get OBTENER_EMISORAS(): string { return "Bitacora/GetEmisoras"; }

        /** Ruta del servicio para obtener todas las emisoras por grupo de empresa **/
        public static get OBTENER_EMISORAS_POR_GRUPO_EMPRESA(): string { return "PersonasResponsables/GetEmisorasByGrupoEmpresa"; }

        /** Ruta del servicio para obtener todas las modulos **/
        public static get OBTENER_MODULOS(): string { return "Bitacora/GetModulos"; }

        /** Ruta del servicio para obtener todas las acciones **/
        public static get OBTENER_ACCIONES(): string { return "Bitacora/GetAcciones"; }

        /** Ruta del servicio para obtener todas los usuarios **/
        public static get OBTENER_USUARIOS(): string { return "Bitacora/GetUsuarios"; }

        /** Ruta del servicio para obtener todas los registros de la bitacora **/
        public static get OBTENER_BITACORA(): string { return "Bitacora/GetBitacora"; }

        /** Ruta del servicio para obtener la cantidad de resgistros de una consulta. **/
        public static get OBTEN_NUMERO_REGISTROS_PATH(): string { return "Bitacora/ObtenNumeroRegistros"; }

        /** Ruta del servicio para eliminar registros de la bitacora **/
        public static get ELIMINA_REGISTROS_BITACORA_PATH(): string { return "Bitacora/EliminarRegistros"; }

        /**
        * Ruta del servicio para obtener los usuarios del catálogo.
        **/
        public static get OBTENER_USUARIOS_PATH(): string { return "Usuario/GetUsuarios"; }
        /**
        * Ruta del servicio para obtener un usuario del catálogo.
        **/
        public static get OBTENER_USUARIO_PATH(): string { return "Usuario/GetUsuario"; }
        /**
        * Ruta del servicio para agregar un usuario al catálogo.
        **/
        public static get AGREGA_USUARIO_PATH(): string { return "Usuario/AddUsuario"; }

        /**
        * Ruta del servicio para validar si un usuario esta activo en el directorio activo configurado
        */
        public static get VALIDAR_USUARIO_DIRECTORIO_ACTIVO_PATH(): string { return "Usuario/ValidarUsuarioDirectorioActivo"; }

        /**
        * Ruta del servicio para actualizar un usuario al catálogo.
        **/
        public static get ACTUALIZA_USUARIO_PATH(): string { return "Usuario/UpdateUsuario"; }
        /**
        * Ruta del servicio para eliminar un usuario al catálogo.
        **/
        public static get ELIMINA_USUARIO_PATH(): string { return "Usuario/DeleteUsuario"; }
        /**
        * Ruta del servicio para eliminar un usuario al catálogo.
        **/
        public static get DESCARGA_USUARIOS_PATH(): string { return "Usuario/ExportarDatos"; }
        /**
        * Ruta del servicio para eliminar una empresa al catálogo.
        **/
        public static get CAMBIA_CONTRASEÑA_USUARIO_PATH(): string { return "Usuario/CambiarContrasena"; }
        /**
        * Ruta del servicio para obtener las emisoras del catálogo.
        **/
        public static get OBTENER_EMISORAS_PATH(): string { return "Usuario/GetEmisoras"; }
        /**
        * Ruta del servicio para obtener las emisoras asignadas al usuario del catálogo.
        **/
        public static get OBTENER_EMISORAS_USUARIO_PATH(): string { return "Usuario/GetEmisorasUsuario"; }
        /**
        * Ruta del servicio para la activación o desactivacion del usuario especificado.
        **/
        public static get ACTIVACION_USUARIO_PATH(): string { return "Usuario/ActivacionUsuario"; }
        /**
        * Ruta del servicio para el bloqueo o desbloqueo del usuario especificado.
        **/
        public static get BLOQUEADO_USUARIO_PATH(): string { return "Usuario/BloqueadoUsuario"; }
        /**
        * Ruta del servicio para eliminar una empresa al catálogo.
        **/
        public static get ASIGNA_EMISORAS_USUARIO_PATH(): string { return "Usuario/AsignarEmisoras"; }
        /** Ruta del servicio para enviar un nuevo password a un usuario */
        public static get ENVIA_PASSWORD_USUARIO(): string { return "Login/EnvioPasswordForm"; }
        /**
        * Ruta que expone el servicio para obtener los grupos de usuarios existentes en la empresa actual.
        **/
        public static get OBTEN_GRUPOS_USUARIOS_EMPRESA_PATH(): string { return "Grupo/ObtenGruposUsuarios"; }
        /**
        * Ruta que expone el servicio para obtener los roles asigandos a un grupo de usuarios.
        **/
        public static get OBTEN_ROLES_ASIGNADOS_GRUPO_USUARIO_PATH(): string { return "Grupo/ObtenRolesGrupo"; }
        /**
        * Ruta que expone el servicio para obtener los usuarios existentes en la empresa actual.
        **/
        public static get OBTEN_USUARIOS_EMPRESA_PATH(): string { return "Grupo/ObtenUsuariosEmpresa"; }
        /**
        * Ruta que expone el servicio para obtener los usuarios asigandos a un grupo de usuarios.
        **/
        public static get OBTEN_USUARIOS_GRUPO_PATH(): string { return "Grupo/ObtenUsuariosGrupo"; }
        /**
        * Ruta del servicio para registrar un nuevo un grupo.
        **/
        public static get REGISTRAR_GRUPO_PATH(): string { return "Grupo/RegistrarGrupo"; }
        /**
        * Ruta del servicio para actualizar un grupo existente.
        **/
        public static get ACTUALIZAR_GRUPO_PATH(): string { return "Grupo/ActualizarGrupo"; }
        /**
        * Ruta del servicio para exportar a excel el contenido de la tabla de gupos de usuarios.
        **/
        public static get ELIMINAR_GRUPOS_USUARIOS_PATH(): string { return "Grupo/Eliminar"; }
        /**
        * Ruta del servicio para exportar a excel el contenido de la tabla de gupos de usuarios.
        **/
        public static get EXPORTAR_GRUPOS_USUARIOS_PATH(): string { return "Grupo/Exportar"; }
        /**
        * Ruta del servicio para asignar un conjunto de usuarios al grupo indicado.
        **/
        public static get ASIGNA_USUARIOS_A_GRUPO_PATH(): string { return "Grupo/AsignaUsuariosGrupo"; }
        /**
        * Ruta del servicio para asignar un conjunto de roles al grupo indicado.
        **/
        public static get ASIGNA_ROLES_A_GRUPO_PATH(): string { return "Grupo/AsignaRolesGrupo"; }
        /**
        * Ruta del servicio para obtener los roles asingados a un usuario.
        **/
        public static get OBTEN_ROLES_ASIGNADOS_USUARIOS(): string { return "Rol/ObtenRolesUsuario"; }
        /**
        * Ruta del servicio para obtener los roles asingados a un usuario.
        **/
        public static get OBTEN_ROLES_POR_EMPRESAS_USUARIO(): string { return "Rol/ObtenRolesUsuarioEmpesas"; }
        /**
        * Ruta del servicio para obtener los roles asingados a un usuario.
        **/
        public static get OBTEN_USUARIOS_POR_EMPRESA(): string { return "Rol/ObtenUsuarioPorEmpresa"; }
        /**
        * Ruta para asignar los usuarios por empresa.
        **/
        public static get ASIGNA_ROLES_USUARIO(): string { return "Rol/AsignaRolesUsuario"; }
        /**
        * Ruta del servidor donde se obtienen los registros de auditoria.
        **/
        public static get OBTEN_REGISTROS_AUDITORIA_PATH(): string { return "Bitacora/GetBitacora"; }
        /**
        * Ruta del servidor donde se obtienen los registros de auditoria como excel.
        **/
        public static get EXPORTA_BITACORA_EXCEL_PATH(): string { return "Bitacora/Exportar"; }

        /** Url para levantar tickets de soporte de las emisoras*/
        public static get URL_SOPORTE_TECNICO(): string{return "https://soporte.2hsoftware.com.mx";}
        /**
        * Ruta del servicio para obtener los documentos del usuario del catálogo.
        **/
        public static get OBTENER_DOCUMENTOS_PATH(): string { return "DocumentoInstancia/ListaDocumentosInstancia"; }

        /** Ruta del servicio para eliminar un documento instancia */
        public static get ELIMINAR_DOCUMENTO_INSTANCIA(): string { return "DocumentoInstancia/EliminarDocumentoInstancia"; }
        /**
        * Ruta del servicio para consultar el listado de elementos del catálogo de parametros del sistema.
        **/
        public static get CONSULTA_PARAMETROS_SISTEMA_PATH(): string { return "ParametroSistema/Obtener"; }
        /**
        * Ruta del servicio para actualizar un parametro del sistema.
        **/
        public static get ACTUALIZAR_PARAMETROS_SISTEMA_PATH(): string { return "ParametroSistema/Actualizar"; }
        /**
        * Ruta del servicio para la exportación de el listado de parametros del sistema.
        **/
        public static get EXPORTAR_PARAMETROS_SISTEMA_PATH(): string { return "ParametroSistema/Exportar"; }

        /**
        * Máxima cantidad de registros que puede retornar la exportación a excel de una consulta a la bitacora.
        **/
        public static get MAXIMOS_REGISTROS_RESPUESTA_EXCEL_BITACORA(): number { return 65000; }
        /**
        * Ruta del directorío raíz con los elementos de plantilla para la toxonomía de soiciedades de inversión para la BMV.
        **/
        public static get DIRECTORIO_TAXONOMIA_INVER_BMV_PATH(): string { return "ts/templates/taxonomias/inver-bmv/"; }
        /**
        * Ruta para ejecutar el servico para generar nuevos documentos de instancia con los contextos actualizados.
        **/
        public static get GENERAR_DOCUMENTOS_CONTEXTOS_ACTUALIZADOS_PATH(): string { return "DocumentoInstancia/GenerarDocumentosContextosActualizados"; }

        /**
        * Atributo con las opciones actuales de una tabla dinamica.
        **/
        public static get ATRIBUTO_OPCIONES_ACTUALES_DINAMIC_TABLE(): string { return "OPCIONES_ACTUALES_DINAMIC_TABLE" }

        /**
        * Atributo con las opciones actuales de una tabla dinamica.
        **/
        public static get ATRIBUTO_OPCIONES_ORIGINALES_DINAMIC_TABLE(): string { return "OPCIONES_ORIGINALES_DINAMIC_TABLE" }
        /**
        * Ruta del directorío raíz para obtener las consultas de analisis registradas.
        **/
        public static get CONSULTAS_ANALISIS_PATH(): string { return "ConsultaAnalisis/ObtenerConsultasAnalisis"; }

        /**
        * Ruta del servicio para descargar las consultas.
        **/
        public static get DESCARGA_CONSULTAS_PATH(): string { return "ConsultaAnalisis/ExportarDatos"; }

        /**
        * Path con la ruta del servicio para obtener el listado de alertas recientes. 
        **/
        public static get OBTEN_MULTIPLOS_PATH(): string { return "ConsultaAnalisis/ObtenMultiplos"; }
        /**
        * Path con el servicio para obtener la taxonomias.
        **/
        public static get OBTEN_TAXONOMIAS_PATH(): string { return "DocumentoInstancia/ObtenerTaxonomiasRegistradasJsonResult"; }

        /**
        * Path donde se expone el servicio que retorna el listado de conceptos de una taxonomía.
        **/
        public static get OBTEN_CONCEPTOS_TAXONOMIA_PATH(): string { return "DocumentoInstancia/ObtenConceptosTaxonomia"; }

        /**
        * Path donde se expone el servicio que retorna la estructura de un documento.
        **/
        public static get OBTEN_ESTRUCTURA_DOCUMENTO_PATH(): string { return "DocumentoInstancia/ObtenerEstructuraDocumento"; }

        /**
        * Path donde se expone el servicio que retorna la actualizacion de la estructura de documento
        **/
        public static get ACTUALIZAR_ESTRUCTURA_DOCUMENTO_PATH(): string { return "DocumentoInstancia/ActualizarEstructuraDocumento"; }
        /**
        * Path donde se expone el servicio que guarda el múltiplo.
        **/
        public static get GUARDA_MULTIPLO_PATH(): string { return "ConsultaAnalisis/GuardaMultiplo"; }
        /**
        * Ruta del servicio para actualizar un fideicomiso existente.
        **/
        public static get OBTEN_LISTA_FIDEICOMISOS_PATH(): string { return "Fideicomiso/ObtenListaFideicomisos"; }
        
        /**
        * Ruta del servicio para actualizar un fideicomiso existente.
        **/
        public static get ACTUALIZAR_FIDEICOMISO_PATH(): string { return "Fideicomiso/ActualizarFideicomiso"; }

        /**
        * Ruta del servicio para registrar un fideicomiso existente.
        **/
        public static get REGISTRAR_FIDEICOMISO_PATH(): string { return "Fideicomiso/RegistrarFideicomiso"; }

        /**
        * Ruta del servicio para eliminar un fideicomiso existente.
        **/
        public static get ELIMINAR_FIDEICOMISO_PATH(): string { return "Fideicomiso/EliminarFideicomiso"; }

        /**
        * Ruta del servicio para exportar un fideicomiso existente.
        **/
        public static get EXPORTAR_FIDEICOMISO_PATH(): string { return "Fideicomiso/ExportarExcel"; }

        /**
        * Ruta del servicio para consultar el listado de listas de notificación.
        **/
        public static get CONSULTA_LISTA_NOTIFICACION_PATH(): string { return "ListaNotificacion/ObtenerListasNotificacion"; }

        /**
        * Ruta del servicio para la exportación de el listado de listas de notificación.
        **/
        public static get EXPORTAR_LISTAS_NOTIFICACIONES_PATH(): string { return "ListaNotificacion/ExportarListasNotificacion"; }
        
        /**
        * Ruta del servicio para eliminar una lista de notificaciones.
        **/
        public static get BORRAR_LISTA_NOTIFICACION_PATH(): string { return "ListaNotificacion/BorrarListaNotificacion"; }

        /**
        * Ruta del servicio para actualizar una lista de notificaciones.
        **/
        public static get GUARDAR_LISTA_NOTIFICACION_PATH(): string { return "ListaNotificacion/GuardarListaNotificacion"; }

        /**
        * Ruta del servicio para persistir los datos de un destinatario de notificación.
        **/
        public static get GUARDAR_DESTINATARIO_NOTIFICACION_PATH(): string { return "ListaNotificacion/GuardarDestinatarioNotificacion"; }

        /**
        * Ruta del servicio para consultar el listado de destinatarios asignados a una lista determinada de notificación.
        **/
        public static get CONSULTA_DESTINATARIOS_NOTIFICACION_PATH(): string { return "ListaNotificacion/ObtenerDestinatariosNotificacion"; }

        /**
        * Ruta del servicio para la exportación de el listado de destinatarios para una lista de notificación.
        **/
        public static get EXPORTAR_DESTINATARIOS_NOTIFICACION_PATH(): string { return "ListaNotificacion/ExportarDestinatariosNotificacion"; }

        /**
        * Ruta del servicio para eliminar un destinatario de una lista de notificación.
        **/
        public static get BORRAR_DESTINATARIO_NOTIFICACION_PATH(): string { return "ListaNotificacion/BorrarDestinatarioNotificacion"; }
        /**
        * Retorna el contador de documentos con un estado en particular.
        **/
        public static get OBTEN_CONTADOR_BITACORA_VERSION_DOCUMPENTOS_POR_ESTADO_PATH(): string { return "BitacoraVersionDocumento/VersionDocumentosPorEstado"; }
        /**
        * Retorna el contador de distribuciones con un estado en particular.
        **/
        public static get OBTEN_CONTADOR_BITACORA_DISTRIBUCIONES_POR_ESTADO_PATH(): string { return "BitacoraVersionDocumento/DistribucionDocumentosPorEstado"; }
        /**
        * Ruta del servicio para obtener los datos para presentar las graficas de empresas que han reportado por taxonomía en el trimestre actual.
        **/
        public static get OBTENER_LISTA_GRAFICAS_EMPRESAS_POR_TAXONOMIA_TRIMESTRE_ACTUAL_PATH(): string { return "DocumentoInstancia/IndicadorEmisorasTrimestreActualPorTaxonimia"; }
        /**
        * Ruta del servicio para consultar el listado de elementos del catálogo de consultas repositorio.
        **/
        public static get CONSULTA_CONSULTAS_REPOSITORIO_PATH(): string { return "ConsultaRepositorioInformacion/ObtenerListadoConsultasRepositorio"; }
        /**
        * Ruta del servicio para la exportación de el listado de consultas al repositorio.
        **/
        public static get EXPORTAR_CONSULTAS_REPOSITORIO_PATH(): string { return "ConsultaRepositorioInformacion/ObtenerReporteExcelConsultasRepositorio"; }
        /**
        * Ruta del servicio para eliminar un grupo de empresas del cálogo.
        **/
        public static get BORRAR_CONSULTA_REPOSITORIO_PATH(): string { return "ConsultaRepositorioInformacion/BorrarConsultaRepositorio"; }
        /**
        * Ruta del servicio para actualizar o guardar una nueva consulta al repositorio.
        **/
        public static get GUARDAR_CONSULTA_REPOSITORIO_PATH(): string { return "ConsultaRepositorioInformacion/PersistirConsultaRepositorio"; }
        
        /**
        * Ruta del servicio para consultar los grupos de empresa configurados.
        **/
        public static get GRUPO_ENTIDADES_REPOSITORIO_XBRL_PATH(): string { return "GrupoEmpresaController/ConsultaGrupoEmpresas"; }

        /**
        * Ruta del servicio con las unidades que se tenga informacion en el repositorio xbrl.
        **/
        public static get UNIDADES_REPOSITORIO_XBRL_PATH(): string { return "ConsultaRepositorioInformacion/ConsultarUnidades"; }

        /**
        * Ruta del servicio con las unidades que se tenga informacion en el repositorio xbrl.
        **/
        public static get TRIMESTRES_REPOSITORIO_XBRL_PATH(): string { return "ConsultaRepositorioInformacion/ConsultarTrimestres"; }

        /**
        * Ruta del servicio con las entdades que se tenga informacion en el repositorio xbrl.
        **/
        public static get ENTIDADES_REPOSITORIO_XBRL_PATH(): string { return "ConsultaRepositorioInformacion/ConsultarEntidades"; }

        /**
        * Ruta del servicio con los fideicomisos que se tenga informacion en el repositorio xbrl.
        **/
        public static get FIDEICOMISOS_REPOSITORIO_XBRL_PATH(): string { return "ConsultaRepositorioInformacion/ConsultarFideicomisos"; }

        /**
        * Ruta del servicio con las fechas que se tenga informacion en el repositorio xbrl.
        **/
        public static get FECHAS_REPORTE_REPOSITORIO_XBRL_PATH(): string { return "ConsultaRepositorioInformacion/ConsultarFechasReporte"; }
        
        /**
         * Ruta del servicio con las entdades que se tenga informacion en el repositorio xbrl.
         */
        public static get ESPACIOS_DE_NOMBRES_REPOSITORIO_XBRL_PATH(): string { return "ConsultaRepositorioInformacion/ConsultarEspacioNombresTaxonomia"; }

        /**
         * Ruta del servicio con las entdades que se tenga informacion en el repositorio xbrl.
         */
        public static get ROLES_POR_ESPACIO_DE_NOMBRES_REPOSITORIO_XBRL_PATH(): string { return "ConsultaRepositorioInformacion/ConsultarRolesPorTaxonomia"; }

        /**
         * Ruta del servicio con las entdades que se tenga informacion en el repositorio xbrl.
         */
        public static get CONCEPTOS_POR_TAXONOMIA_Y_ROL_REPOSITORIO_XBRL_PATH(): string { return "ConsultaRepositorioInformacion/ConsultarConceptosPorTaxonomiaYRol"; }

        /**
         * Ruta del servicio con las entdades que se tenga informacion en el repositorio xbrl.
         */
        public static get CONCEPTOS_POR_ESPACIO_DE_NOMBRES_REPOSITORIO_XBRL_PATH(): string { return "ConsultaRepositorioInformacion/ConsultarConceptosPorTaxonomia"; }

        /**
        * Ruta del servicio con la CONSULTA principal de la informacion en el repositorio xbrl.
        **/
        public static get CONSULTA_REPOSITORIO_XBRL_PATH(): string { return "ConsultaRepositorioInformacion/ConsultarRepositorio"; }

        /**
        * Ruta del servicio para conocer el total de documentos de hechos del repositorio xbrl.
        **/
        public static get CONSULTA_NUMERO_REGISTROS_REPOSITORIO_XBRL_PATH(): string { return "ConsultaRepositorioInformacion/NumeroRegistrosHechos"; }

        /**
        * Ruta del servicio con las entdades que se tenga informacion en el repositorio xbrl.
        **/
        public static get EXPORTAR_REPORTE_EXCEL_CONSULTA_REPOSITORIO_PATH(): string { return "ConsultaRepositorioInformacion/ExportarReporteExcelConsultasRepositorio"; }

        /**
        * Ruta del servicio para obtener los documentos del usuario con paginación real.
        **/
        public static get OBTENER_DOCUMENTOS_PAGINADOS_PATH(): string { return "DocumentoInstancia/ListaDocumentosInstanciaPaginados"; }

        /**
        * Ruta del servicio para descargar la plantilla de personas responsables.
        **/
        public static get DESCARGAR_PLANTILLA_PERSONAS_RESPONSABLES_PATH(): string { return "DocumentoInstancia/GeneraPlantillaFirmasPersonasResponsablesWord"; }

        /**
        * Ruta del servicio para descargar la plantilla de firmas de articulo 13.
        **/
        public static get DESCARGAR_PLANTILLA_FIRMA_ARTICULO_13(): string { return "DocumentoInstancia/GeneraPlantillaFirmasArticulo13"; }

        /** Ruta del servicio para obtener todas las taxonomias  **/

        public static get OBTENER_EMISORAS_PERSONAS_RESPONSABLES(): string { return "PersonasReponsables/GetEmisoras"; }

        /** Ruta del servicio para obtener información de personas responsables  **/
        public static get OBTENER_PERSONAS_RESPONSABLES(): string { return "PersonasResponsables/GetPersonasResponsables"; }

        /** Ruta del servicio para obtener información de administradores  **/
        public static get OBTENER_ADMINISTRADORES(): string { return "PersonasResponsables/GetAdministradores"; }

        /** Ruta del servicio para obtener información de administradores  **/
        public static get OBTENER_RESUMEN_INFORMACION_4D(): string { return "PersonasResponsables/GetResumenInformacion4D"; }

        /** Exportar Excel de Administradores. **/
        public static get EXPORTA_ADMINISTRADORES_A_EXCEL(): string { return "PersonasResponsables/ExportExcelAdministradores"; }

        /** Exportar Excel Resumen Informacion 4D. **/
        public static get EXPORTA_RESUMEN_INFORMACION_4D_A_EXCEL(): string { return "PersonasResponsables/ExportExcelResumenInformacion4D"; }

        /** Exporta Ficha Técnica.**/
        public static get EXPORTA_REPORTE_FICHA_TECNICA(): string { return "PersonasResponsables/GenerarReporteFichaTecnica"; }

        /** Exporta Ficha Administrativa.**/
        public static get EXPORTA_REPORTE_FICHA_ADMINISTRATIVA(): string { return "PersonasResponsables/GenerarReporteFichaAdministrativa"; }

        /** Exportar Excel de Personas Responsables. **/
        public static get EXPORTA_PERSONAS_RESPONSABLES_A_EXCEL(): string { return "PersonasResponsables/ExportExcelPersonasResponsables"; }

        /** Ruta del servicio para obtener información de envios por taxonomía  **/
        public static get OBTENER_ENVIOS_TAXONOMIA(): string { return "EnviosTaxonomia/GetEnviosTaxonomia"; }

        /** Obtiene los años de los envíos de ICS por ENTIDAD**/
        public static get OBTENER_ENVIOS_POR_ENTIDAD(): string { return "PersonasResponsables/ObtenerAniosEnvioReporteAnual"; }

        /** Obtiene los trimestres de envios ICS por año**/
        public static get OBTENER_TRIMESTRES_ICS_POR_ENTIDAD_Y_ANIO_ENVIO(): string { return "PersonasResponsables/ObtenerTrimestresICSPorEntidadYAnio"; }

        /**
        * Ruta del servidor donde se obtienen los registros de auditoria como excel.
        **/
        public static get EXPORTA_ENVIOS_TAXONOMIAS_EXCEL_PATH(): string { return "EnviosTaxonomia/ExportarEnviosTaxonomiaExcel"; }

        /** Ruta del servicio para obtener el reporte excel de Calculo de Materialidad. **/
        public static get OBTENER_NUMEROS_FIDEICOMISOS(): string { return "EnviosTaxonomia/GetNumeroFideicomisos"; }

        /** Ruta del servicio para obtener todas las taxonomias  **/
        public static get OBTENER_TAXONOMIAS(): string { return "PersonasResponsables/GetTaxonomiasXbrl"; }

        /** Ruta del servicio para obtener los sectores. **/
        public static get OBTENER_SECTORES(): string { return "PersonasResponsables/GetSectores"; }

        /** Ruta del servicio para obtener los subsectores. **/
        public static get OBTENER_SUB_SECTORES(): string { return "PersonasResponsables/GetSubSectores"; }

        /** Ruta del servicio para obtener los ramos**/
        public static get OBTENER_RAMOS(): string { return "PersonasResponsables/GetRamos"; }

        /** Exporta Reporte Descripción por sectores. **/
        public static get EXPORTA_DESCRIPCION_POR_SECTORES_A_EXCEL(): string { return "PersonasResponsables/GenerarReporteDescripcionPorSectores"; }

        /** Obtiene las opciones del combo anios en el reporte Descripcion por sectores. **/
        public static get OBTENER_COMBO_ANIOS_REPORTE_DESCRIPCION_POR_SECTORES(): string { return "PersonasResponsables/GetAniosIfrsReporteDescripcionSectores"; }

        /** Obtiene las opciones del combo trimestres en el reporte Descripcion por sectores. **/
        public static get OBTENER_COMBO_TRIMESTRES_REPORTE_DESCRIPCION_POR_SECTORES(): string { return "PersonasResponsables/GetTrimestresIfrsReporteDescripcionSectores"; }


        /** Ruta del servicio para obtener todas las taxonomias  **/
        public static get REPROCESA_TODOS_DOCUMENTOS_INSTANCIA(): string { return "DocumentoInstancia/ReprocesaCellStore"; }

        /** Ruta del servicio para obtener todas las taxonomias  **/
        public static get OBTENER_DOCUMENTOS_INSTANCIA(): string { return "DocumentoInstancia/obtenerNumeroCandidatosReprocesar"; }

        /** Ruta del servicio para obtener el porcentaje de documentos reprocesados  **/
        public static get REPROCESAR_DOCUMENTOS(): string { return "DocumentoInstancia/ejecutarReprocesamiento"; }

        /** Ruta del servicio para obtener el porcentaje de documentos reprocesados  **/
        public static get OBTENER_PORCENTAJE_REPROCESAMIENTO(): string { return "DocumentoInstancia/obtenerPorcentajeProcesamiento"; }

        /** Ruta del servicio para obtener el porcentaje de documentos reprocesados  **/
        public static get VERIFICAR_ESTA_REPROCESANDO(): string { return "DocumentoInstancia/estaEjecutandoReprocesamiento"; }

        /** Ruta del servicio para obtener el reporte excel de Calculo de Materialidad. **/
        public static get EXPORTA_CALCULO_DE_MATERIALIDAD_A_EXCEL(): string { return "PersonasResponsables/GenerarReporteCalculoDeMaterialidad"; }

        
    }
} 