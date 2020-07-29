/// <reference path="../../../../../scripts/typings/angularjs/angular.d.ts" /> 
/// <reference path="../../../../../scripts/typings/angularjs/angular-route.d.ts" />
/// <reference path="../../../../../scripts/typings/angular-ui-router/angular-ui-router.ts" />

module abaxXBRL.routes {
    

    /**
    * Clase que especifica la configuración de las rutas para los componetes del modulo de inicio.
    **/
    export class AbaxXBRLInicioRoutesConfig {

        /** 
        * Constructor de la clase.
        * @param $stateProvider Proveedor de los cambios de estado de las vistas del sitio.
        **/
        constructor($stateProvider: ng.ui.IStateProvider) {
            
            //Cambia el contenido por el panel de control
            $stateProvider.state("inicio.panelControl", { 
                url:"panelControl",
                //parent: 'inicio',
                views: {
                    'contenido': {
                        templateUrl: 'abax-xbrl/componentes/contenido/panel-control/abax-xbrl-panel-control-template.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                        controller: 'abaxXBRLPanelControlController'
                    }
                }
            });
            //Cambia el contenido por el desglose e alertas.
            $stateProvider.state("inicio.alertas", { 
				url:"alertas",
                //parent: 'inicio',
                views: {
                    'contenido': {
                        templateUrl: 'abax-xbrl/componentes/contenido/alertas/abax-xbrl-alertas-template.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                        controller: 'abaxXBRLAlertasController'
                    }
                }
            });
            $stateProvider.state("inicio.consultaRepositorio", { 
				url:"consultaRepositorio",
                //parent: 'inicio',
                views: {
                    'contenido': {
                        templateUrl: 'abax-xbrl/componentes/contenido/consulta-repositorio/abax-xbrl-consulta-repositorio-template.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                        controller: 'abaxXBRLConsultaRepositorioController'
                    }
                }
            });
            $stateProvider.state("inicio.consultaXBRL", {
                url: "consultaXBRL",
                //parent: 'inicio',
                views: {
                    'contenido': {
                        templateUrl: 'abax-xbrl/componentes/contenido/consulta-xbrl/abax-xbrl-consulta-xbrl-template.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                        controller: 'abaxXBRLConsultaXBRLController'
                    }
                }
            });

            $stateProvider.state("inicio.mostrarAyuda", {
                url: "mostrarAyuda",
                //parent: 'inicio',
                views: {
                    'contenido': {
                        templateUrl: 'abax-xbrl/componentes/contenido/ayuda/abax-xbrl-ayuda-template.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                        controller: 'abaxXBRLAyudaController'
                    }
                }
            });
            

            $stateProvider.state("inicio.roles", { 
				url:"roles",
                //parent: 'inicio',
                views: {
                    'contenido': {
                        templateUrl: 'abax-xbrl/componentes/contenido/roles/index/abax-xbrl-roles-index-template.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                        controller: 'abaxXBRLRolesIndexController'
                    }
                }
            });
            $stateProvider.state("inicio.rolesEditar", { 
				url:"rolesEditar",
                //parent: 'inicio',
                views: {
                    'contenido': {
                        templateUrl: 'abax-xbrl/componentes/contenido/roles/editar-rol/abax-xbrl-editar-rol-template.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                        controller: 'abaxXBRLRolesIndexController'
                    }
                }
            });
            $stateProvider.state("inicio.rolesFacultades", { 
				url:"rolesFacultades",
                //parent: 'inicio',
                views: {
                    'contenido': {
                        templateUrl: 'abax-xbrl/componentes/contenido/roles/facultades-rol/abax-xbrl-facultades-rol-template.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                        controller: 'abaxXBRLFacultadesRolesController'
                    }
                }
            });

            //Cambia el contenido por la configuración de empresas.
            $stateProvider.state("inicio.empresa", { 
				url:"empresa",
                //parent: 'inicio',
                views: {
                    'contenido': {
                        templateUrl: 'abax-xbrl/componentes/contenido/empresa/abax-xbrl-empresa-template.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version
                    }
                }
            });
            $stateProvider.state("inicio.empresa.indice", {
                //parent: 'inicio.empresa',
                url: "empresa/indice",
                views: {
                    'empresa': {
                        templateUrl: 'abax-xbrl/componentes/contenido/empresa/indice/abax-xbrl-indice-empresa-template.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                        controller: 'abaxXBRLIndiceEmpresaController'
                    }
                }

            });
            $stateProvider.state("inicio.empresa.agrega", {
                //parent: 'inicio',
                url: "empresa/agrega",
                views: {
                    'empresa': {
                        templateUrl: 'abax-xbrl/componentes/contenido/empresa/agrega/abax-xbrl-agrega-empresa-template.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                        controller: 'abaxXBRLAgregaEmpresaController'
                    }
                }

            });
            $stateProvider.state("inicio.empresa.edita", {
                //parent: 'inicio',
                url: '/:id',
                views: {
                    'empresa': {
                        templateUrl: 'abax-xbrl/componentes/contenido/empresa/edita/abax-xbrl-edita-empresa-template.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                        controller: 'abaxXBRLEditaEmpresaController'
                    }
                }

            });
            $stateProvider.state("inicio.asignaTipoEmpresa", {
                //parent: 'inicio',
                url: '/asignaTipoEmpresa',
                views: {
                    'contenido': {
                        templateUrl: 'abax-xbrl/componentes/contenido/empresa/asignar-tipos/abax-xbrl-asignar-tipos-empresa-template.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                        controller: 'abaxXBRLAsignaTiposEmpresaController'
                    }
                }

            });
            $stateProvider.state("inicio.asignaFiduciarios", {
                //parent: 'inicio',
                url: '/asignaFiduciarios',
                views: {
                    'contenido': {
                        templateUrl: 'abax-xbrl/componentes/contenido/empresa/asignar-fiduciarios/abax-xbrl-asignar-fiduciarios-template.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                        controller: 'abaxXBRLAsignaFiduciariosController'
                    }
                }

            });
            $stateProvider.state("inicio.asignaFiduciariosRepComun", {
                //parent: 'inicio',
                url: '/asignaFiduciariosARepresentanteComun',
                views: {
                    'contenido': {
                        templateUrl: 'abax-xbrl/componentes/contenido/empresa/asignar-fideicomisos-a-representante-comun/abax-xbrl-asignar-fiduciarios-a-representante-comun-template.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                        controller: 'abaxXBRLAsignaFiduciariosRepresentanteComunController'
                    }
                }

            });
            $stateProvider.state("inicio.tipoEmpresaListado", {
                //parent: 'inicio',
                url: '/tipoEmpresaListado',
                views: {
                    'contenido': {
                        templateUrl: 'abax-xbrl/componentes/contenido/tipo-empresa/listado-tipo-empresa/abax-xbrl-listado-tipo-empresa-template.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                        controller: 'abaxXBRLListadoTipoEmpresaController'
                    }
                }

            });
            $stateProvider.state("inicio.tipoEmpresaEdicion", {
                //parent: 'inicio',
                url: '/tipoEmpresaEdicion',
                views: {
                    'contenido': {
                        templateUrl: 'abax-xbrl/componentes/contenido/tipo-empresa/editar-tipo-empresa/abax-xbrl-editar-tipo-empresa-template.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                        controller: 'abaxXBRLEditarTipoEmpresaController'
                    }
                }

            });

            $stateProvider.state("inicio.asignaTaxonomia", {
                //parent: 'inicio',
                url: '/asignaTaxonomia',
                views: {
                    'contenido': {
                        templateUrl: 'abax-xbrl/componentes/contenido/tipo-empresa/asignar-taxonomias/abax-xbrl-asignar-taxonomias-template.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                        controller: 'abaxXBRLAsignaTaxonomiasController'
                    }
                }

            });

            $stateProvider.state("inicio.taxonomiasListado", {
                //parent: 'inicio',
                url: '/taxonomiasListado',
                views: {
                    'contenido': {
                        templateUrl: 'abax-xbrl/componentes/contenido/taxonomias/listado-taxonomias/abax-xbrl-listado-taxonomia-template.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                        controller: 'abaxXBRLListadoTaxonomiasController'
                    }
                }

            });
            $stateProvider.state("inicio.taxonomiaEdicion", {
                //parent: 'inicio',
                url: '/taxonomiaEdicion',
                views: {
                    'contenido': {
                        templateUrl: 'abax-xbrl/componentes/contenido/taxonomias/editar-taxonomia/abax-xbrl-editar-taxonomia-template.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                        controller: 'abaxXBRLEditarTaxonomiaController'
                    }
                }

            });
            //abax-xbrl/componentes/contenido/tipo-empresa/editar-tipo-empresa/abax-xbrl-editar-tipo-empresa-template.html

            //Cambia el contenido por la configuración de usuarios.
            $stateProvider.state("inicio.usuario", { 
				url:"usuario",
                //parent: 'inicio',
                views: {
                    'contenido': {
                        templateUrl: 'abax-xbrl/componentes/contenido/usuario/abax-xbrl-usuario-template.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version
                    }
                }

            });

            $stateProvider.state("inicio.usuario.indice", {
                //parent: 'inicio',
                url: ":esUsuarioEmpresa",
                views: {
                    'usuario': {
                        templateUrl: 'abax-xbrl/componentes/contenido/usuario/indice/abax-xbrl-indice-usuario-template.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                        controller: 'abaxXBRLIndiceUsuarioController'
                    }
                }

            });

            

            $stateProvider.state("inicio.usuario.agrega", {
                //parent: 'inicio',
                url: "usuario/agregar",
                views: {
                    'usuario': {
                        templateUrl: 'abax-xbrl/componentes/contenido/usuario/agrega/abax-xbrl-agrega-usuario-template.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                        controller: 'abaxXBRLAgregaUsuarioController'
                    }
                }

            });
            
            $stateProvider.state("inicio.usuario.edita", {
                //parent: 'inicio',
                url: "/:id",
                views: {
                    'usuario': {
                        templateUrl: 'abax-xbrl/componentes/contenido/usuario/edita/abax-xbrl-edita-usuario-template.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                        controller: 'abaxXBRLEditaUsuarioController'
                    }
                }

            });


            $stateProvider.state("inicio.usuario.cambiarContrasena", {
                //parent: 'inicio',
                url:"usuario/cambiar-contrasena",
                views: {
                    'usuario': {
                        templateUrl: 'abax-xbrl/componentes/contenido/usuario/cambia_contrasena/abax-xbrl-cambia-contrasena-usuario-template.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                        controller: 'abaxXBRLCambioContrasenaUsuarioController'
                    }
                }

            });
            $stateProvider.state("inicio.usuarioAsignarRoles", { 
				url:"usuarioAsignarRoles",
                //parent: 'inicio',
                views: {
                    'contenido': {
                        templateUrl: 'abax-xbrl/componentes/contenido/usuario/asignar-rol/abax-xbrl-roles-usuarios-template.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                        controller: 'abaxXBRLAsignaRolesUsuariosController'
                    }
                }
            });
            $stateProvider.state("inicio.usuario.asignarEmisoras", {
                //parent: 'inicio',
                url: "/:id",
                views: {
                    'usuario': {
                        templateUrl: 'abax-xbrl/componentes/contenido/usuario/asigna_emisoras/abax-xbrl-asigna-emisoras-usuario-template.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                        controller: 'abaxXBRLAsignaEmisorasUsuarioController'
                    }
                }

            });
            //GruposUsuarios
            $stateProvider.state("inicio.grupos", { 
				url:"grupos",
                views: {
                    'contenido': {
                        templateUrl: 'abax-xbrl/componentes/contenido/grupos/index/abax-xbrl-grupos-index-template.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                        controller: 'abaxXBRLGruposUsuariosIndexController'
                    }
                }
            });
            $stateProvider.state("inicio.gruposEditar", { 
				url:"gruposEditar",
                //parent: 'inicio',
                views: {
                    'contenido': {
                        templateUrl: 'abax-xbrl/componentes/contenido/grupos/editando-grupo/abax-xbrl-editando-grupo-template.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                        controller: 'abaxXBRLGruposUsuariosIndexController'
                    }
                }
            });
            $stateProvider.state("inicio.gruposAsignaRoles", { 
				url:"gruposAsignaRoles",
                //parent: 'inicio',
                views: {
                    'contenido': {
                        templateUrl: 'abax-xbrl/componentes/contenido/grupos/asignar-roles/abax-xbrl-asignar-roles-grupos-template.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                        controller: 'abaxXBRLAsignaRolesGruposController'
                    }
                }
            });
            $stateProvider.state("inicio.gruposAsignaUsuarios", { 
				url:"gruposAsignaUsuarios",
                //parent: 'inicio',
                views: {
                    'contenido': {
                        templateUrl: 'abax-xbrl/componentes/contenido/grupos/asignar-usuarios/abax-xbrl-asingar-usuarios-grupo-template.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                        controller: 'abaxXBRLAsignaUsuariosGruposController'
                    }
                }
            });

            $stateProvider.state("inicio.bitacora", { 
				url:"bitacora",
                //parent: 'inicio',
                views: {
                    'contenido': {
                        templateUrl: 'abax-xbrl/componentes/contenido/bitacora/index/abax-xbrl-bitacora-template.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                        controller: 'abaxXBRLBitacoraController'
                    }
                }
            });
            $stateProvider.state("inicio.bitacoraDepurar", {
                //parent: 'inicio',
                url: "bitacora/depurar",
                views: {
                    'contenido': {
                        templateUrl: 'abax-xbrl/componentes/contenido/bitacora/depurar/abax-xbrl-depurar-bitacora-template.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                        controller: 'abaxXBRLDepurarBitacoraController'
                    }
                } 
            });

            $stateProvider.state("inicio.editorXBRL", { 
				//url:"editorXBRL",
                //parent: 'inicio',
                views: {
                    'contenido': {
                        templateUrl: 'abax-xbrl/componentes/editor-xbrl/abax-xbrl-editor-xbrl-template.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                        controller: 'abaxXBREditorXBRLController'
                    }
                }
            });

            $stateProvider.state("inicio.visorXBRL", { 
                //url:"editorXBRL",
                //parent: 'inicio',
                views: {
                    'contenido': {
                        templateUrl: 'abax-xbrl/componentes/visor-xbrl/abax-xbrl-visor-xbrl-template.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                        controller: 'abaxVisorXBRLController'
                    }
                }
            });

            $stateProvider.state("inicio.analisis", {
                url: "analisis",
                views: {
                    'contenido': {
                        templateUrl: 'abax-xbrl/componentes/contenido/analisis/abax-xbrl-analisis-template.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version
                    }
                }
            });


            $stateProvider.state("inicio.analisis.multiplos", {
                url: "analisis/multiplos",
                views: {
                    'analisis': {
                        templateUrl: 'abax-xbrl/componentes/contenido/analisis/multiplos/abax-xbrl-multiplos-template.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                        controller: 'abaxXBRLAnalisisMultiploController'
                    }
                }
            });

            $stateProvider.state("inicio.analisis.editarMultiplo", {
                url: "analisis/multiplos/editar",
                views: {
                    'analisis': {
                        templateUrl: 'abax-xbrl/componentes/contenido/analisis/multiplos/editar/abax-xbrl-multiplos-editar-template.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                        controller: 'abaxXBRLAnalisisEdicionMultiploController'
                    }
                }
            });

            $stateProvider.state("inicio.analisis.consultas", {
                url: "analisis/consultas",
                views: {
                    'analisis': {
                        templateUrl: 'abax-xbrl/componentes/contenido/analisis/consultas/abax-xbrl-consulta-template.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                        controller: 'abaxXBRLAnalisisConsultaController'
                    }
                }
            });


            $stateProvider.state("inicio.analisis.configuracion", {
                url: "/configuracion",
                views: {
                    'analisis': {
                        templateUrl: 'abax-xbrl/componentes/contenido/analisis/consultas/abax-xbrl-configuracion-template.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                        controller: 'abaxXBRLAnalisisConfigurarConsultaController'
                    }
                }
            });



            $stateProvider.state("inicio.analisis.ejecutar", {
                url: "analisis/ejecutar",
                views: {
                    'analisis': {
                        templateUrl: 'abax-xbrl/componentes/contenido/analisis/consultas/abax-xbrl-ejecutar-consulta.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                        controller: 'abaxXBRLAnalisisEjecutarConsultaController'
                    }
                }
            });

            $stateProvider.state("inicio.analisis.ejecutarConsulta", {
                url: "analisis/ejecutar/:id",
                views: {
                    'analisis': {
                        templateUrl: 'abax-xbrl/componentes/contenido/analisis/consultas/abax-xbrl-ejecutar-consulta.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                        controller: 'abaxXBRLAnalisisEjecutarConsultaController'
                    }
                }

            });

            $stateProvider.state("inicio.analisis.mostrarConsulta", {
                url: "analisis/mostrarConsulta/:id",
                views: {
                    'analisis': {
                        templateUrl: 'abax-xbrl/componentes/contenido/analisis/consultas/abax-xbrl-mostrar-consulta.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                        controller: 'abaxXBRLAnalisisMostrarConsultaController'
                    }
                }

            });


            $stateProvider.state("inicio.listaDocumentosInstancia", {
                views: {
                    'contenido': {
                        templateUrl: 'abax-xbrl/componentes/lista-documentos-instancia/abax-xbrl-lista-documentos-instancia-template.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                        controller: 'abaxXBRLListaDocumentosInstanciaController'
                    }
                }
            });

            $stateProvider.state("inicio.generarVersionActualizadaDocumentosInstancia", {
                url:"generarVersionActualizadaDocumentosinstancia",
                views: {
                    'contenido': {
                        templateUrl: 'abax-xbrl/componentes/contenido/utilerias/abax-xbrl-migrar-version-template.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                        controller: 'abaxXBRLMigrarVersionController'
                    }
                }
            });

            $stateProvider.state("inicio.fideicomisos", {
                url: "fideicomisos",
                views: {
                    'contenido': {
                        templateUrl: 'abax-xbrl/componentes/contenido/fideicomisos/listado/abax-xbrl-lista-fideicomisos-template.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                        controller: 'abaxXBRLListaFideicomisosController'
                    }
                }
            });

            $stateProvider.state("inicio.fideicomisoEditar", {
                url: "fideicomisoEditar",
                views: {
                    'contenido': {
                        templateUrl: 'abax-xbrl/componentes/contenido/fideicomisos/edicion/abax-xbrl-edicion-fideicomiso-template.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                        controller: 'abaxXBREdicionFideicomisoController'
                    }
                }
            });

            $stateProvider.state("inicio.bitacoraVersionDocumentos", {
                url: "bitacoraVersionDocumentos",
                views: {
                    'contenido': {
                        templateUrl: 'abax-xbrl/componentes/contenido/bitacora-version-documento/listado/abax-xbrl-listado-bitacora-version-documento-template.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                        controller: 'abaxXBRLListadoBitacoraVersionDocumentoController'
                    }
                }
            });


            $stateProvider.state("inicio.bitacoraArchivosBMV", {
                url: "bitacoraArchivosBMV",
                views: {
                    'contenido': {
                        templateUrl: 'abax-xbrl/componentes/contenido/bitacora-archivo-bmv/listado/abax-xbrl-listado-bitacora-archivo-bmv-template.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                        controller: 'abaxXBRLListadoBitacoraArchivoBMVController'
                    }
                }
            });



            $stateProvider.state("inicio.listaGrupoEmpresas", {
                url: "listaGrupoEmpresas",
                views: {
                    'contenido': {
                        templateUrl: 'abax-xbrl/componentes/contenido/grupo-empresa/listado-grupo-empresas/abax-xbrl-listado-grupo-empresas-template.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                        controller: 'abaxXBRLListadoGrupoEmpresaController'
                    }
                }
            });

            $stateProvider.state("inicio.editarGrupoEmpresas", {
                url: "editarGrupoEmpresas",
                views: {
                    'contenido': {
                        templateUrl: 'abax-xbrl/componentes/contenido/grupo-empresa/editar-grupo-empresas/abax-xbrl-editar-grupo-empresas-template.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                        controller: 'abaxXBRLEditarGrupoEmpresaController'
                    }
                }
            });

            $stateProvider.state("inicio.asignarEmpresasGrupoEmpresa", {
                url: "asignarEmpresasGrupoEmpresa",
                views: {
                    'contenido': {
                        templateUrl: 'abax-xbrl/componentes/contenido/grupo-empresa/asignar-empresas/abax-xbrl-asignar-empresas-template.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                        controller: 'abaxXBRLAsignaEmpresasGrupoEmpresasController'
                    }
                }
            });

            $stateProvider.state("inicio.asignarGruposEmpresaAempresa", {
                url: "asignarGruposEmpresaAempresa",
                views: {
                    'contenido': {
                        templateUrl: 'abax-xbrl/componentes/contenido/empresa/asignar-grupo-empresa/abax-xbrl-asignar-grupo-empresa-template.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                        controller: 'abaxXBRLAsignaGruposAEmpresaEmpresasController'
                    }
                }
            });

            $stateProvider.state("inicio.listaParametrosSistema", {
                url: "listaParametrosSistema",
                views: {
                    'contenido': {
                        templateUrl: 'abax-xbrl/componentes/contenido/parametro-sistema/listado-parametro-sistema/abax-xbrl-listado-parametro-sistema-template.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                        controller: 'abaxXBRLListadoParametroSistemaController'
                    }
                }
            });

            $stateProvider.state("inicio.editarParametroSistema", {
                url: "editarParametroSistema",
                views: {
                    'contenido': {
                        templateUrl: 'abax-xbrl/componentes/contenido/parametro-sistema/editar-parametro-sistema/abax-xbrl-editar-parametro-sistema-template.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                        controller: 'abaxXBRLEditarParametroSistemaController'
                    }
                }
            });

            $stateProvider.state("inicio.listadoListasNotificacion", {
                url: "listadoListasNotificacion",
                views: {
                    'contenido': {
                        templateUrl: 'abax-xbrl/componentes/contenido/listas-notificacion/listas/listado/abax-xbrl-listado-listas-notificaciones-template.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                        controller: 'abaxXBRLListadoListasNotificacionesController'
                    }
                }
            });

            $stateProvider.state("inicio.editarListaNotificacion", {
                url: "editarListaNotificacion",
                views: {
                    'contenido': {
                        templateUrl: 'abax-xbrl/componentes/contenido/listas-notificacion/listas/editar/abax-xbrl-editar-lista-notificacion-template.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                        controller: 'abaxXBRLEditarListaNotificacionController'
                    }
                }
            });

            $stateProvider.state("inicio.listaDestinatariosNotificacion", {
                url: "listaDestinatariosNotificacion",
                views: {
                    'contenido': {
                        templateUrl: 'abax-xbrl/componentes/contenido/listas-notificacion/destinatarios/listado/abax-xbrl-listado-destinatarios-template.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                        controller: 'abaxXBRLListadoDestinatariosNotificacionController'
                    }
                }
            });

            $stateProvider.state("inicio.editarDestinatarioNotificacion", {
                url: "editarDestinatarioNotificacion",
                views: {
                    'contenido': {
                        templateUrl: 'abax-xbrl/componentes/contenido/listas-notificacion/destinatarios/editar/abax-xbrl-editar-destinatario-template.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                        controller: 'abaxXBRLEditarDestinatarioNotificacionController'
                    }
                }
            });

            $stateProvider.state("inicio.listadoConsultasRepositorio", {
                url: "listadoConsultasRepositorio",
                views: {
                    'contenido': {
                        templateUrl: 'abax-xbrl/componentes/contenido/consultas-repo-admin/listado/abax-xbrl-listado-consultas-repositorio-template.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                        controller: 'abaxXBRLListadoConsultasRepositorioController'
                    }
                }
            });

            $stateProvider.state("inicio.editarConsultaRepositorio", {
                url: "editarConsultaRepositorio",
                views: {
                    'contenido': {
                        templateUrl: 'abax-xbrl/componentes/contenido/consultas-repo-admin/editar/abax-xbrl-editar-consulta-repositorio-template.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                        controller: 'abaxXBRLEditarConsultaRepositorioController'
                    }
                }
            });

            $stateProvider.state("inicio.responsables", {
                url: "responsables",
                //parent: 'inicio',
                views: {
                    'contenido': {
                        templateUrl: 'abax-xbrl/componentes/contenido/consulta-personas-responsables/listado/abax-xbrl-consulta-personas-responsables.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                        controller: 'abaxXBRLPersonasResponsablesController'
                    }
                }
            });

            $stateProvider.state("inicio.administradores", {
                url: "administradores",
                //parent: 'inicio',
                views: {
                    'contenido': {
                        templateUrl: 'abax-xbrl/componentes/contenido/reporte-administradores/listado/abax-xbrl-consulta-administradores.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                        controller: 'abaxXBRLAdministradoresController'
                    }
                }
            });

            $stateProvider.state("inicio.resumenInformacion4D", {
                url: "resumenInformacion4D",
                //parent: 'inicio',
                views: {
                    'contenido': {
                        templateUrl: 'abax-xbrl/componentes/contenido/reportes/resumen-informacion-reportes-4D/abax-xbrl-consulta-resumen-informacion-reportes-4D.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                        controller: 'abaxXBRLResumenInformacion4DController'
                    }
                }
            });

            $stateProvider.state("inicio.enviosTaxonomia", {
                url: "enviosTaxonomia",
                //parent: 'inicio',
                views: {
                    'contenido': {
                        templateUrl: 'abax-xbrl/componentes/contenido/consulta-envios-taxonomia/listado/abax-xbrl-consulta-envios-taxonomia.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                        controller: 'abaxXBRLEnviosTaxonomiaController'
                    }
                }
            });

            $stateProvider.state("inicio.reporteFichaAdministrativa", {
                url: "fichaAdministrativa",
                //parent: 'inicio',
                views: {
                    'contenido': {
                        templateUrl: 'abax-xbrl/componentes/contenido/reportes/otros-reportes/abax-xbrl-consulta-reportes.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                        controller: 'abaxXBRLReporteController'
                    }
                },
                resolve: { "$tipoReporte": function (): number { return 0; } }
            });

            $stateProvider.state("inicio.reporteFichaTecnica", {
                url: "fichaTecnica",
                //parent: 'inicio',
                views: {
                    'contenido': {
                        templateUrl: 'abax-xbrl/componentes/contenido/reportes/otros-reportes/abax-xbrl-consulta-reportes.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                        controller: 'abaxXBRLReporteController'
                    }
                },
                resolve: { "$tipoReporte": function (): number { return 1; } }
            });

            $stateProvider.state("inicio.reporteDescripcionSectores", {
                url: "reporteDescripcionPorSectores",
                //parent: 'inicio',
                views: {
                    'contenido': {
                        templateUrl: 'abax-xbrl/componentes/contenido/reportes/descripcion-por-sectores/abax-xbrl-reporte-descripcion-por-sectores.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                        controller: 'abaxXBRLReporteDescripcionSectoresController'
                    }
                }                
            });

            $stateProvider.state("inicio.reporteCalculoDeMaterialidad", {
                url: "reporteCalculoDeMaterialidad",
                //parent: 'inicio',
                views: {
                    'contenido': {
                        templateUrl: 'abax-xbrl/componentes/contenido/reportes/calculo-materialidad/abax-xbrl-reporte-calculo-materialidad.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                        controller: 'abaxXBRLReporteCalculoMaterialidadController'
                    }
                }
            });

            shared.service.AbaxXBRLUtilsService.cambiarEstadoVistasA('inicio.panelControl');
        }
    }
    AbaxXBRLInicioRoutesConfig.$inject = ['$stateProvider'];
}