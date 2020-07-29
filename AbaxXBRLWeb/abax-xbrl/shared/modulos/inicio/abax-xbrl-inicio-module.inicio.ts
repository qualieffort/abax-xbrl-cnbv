module abaxXBRL.modulos {
    /**
     * Implementación de un singleton para contener la instancia única de la declaración del módulo abaxXBRL con los elementos solo accesibles para cuando el usuario inicio session.
     * El nombre del modulo es "abaxXBRL.inicio".
     *
     * @author Oscar Ernesto Loyola Sánchez - 2H
     * @version 1.0
     */
    export class AbaxXBRLInicioModule {

        /** La instancia única de la clase */
        private static _instance: AbaxXBRLInicioModule = null;

        /** La declaración del módulo angular que contiene al visor */
        public module: ng.IModule;

        /**Inicializa los elementos del modulo **/
        private init(): void {

            //Creamos el modulo
            var abaxXBRLInicioModule = this.module;
            //Definimos las referencias a los controladores del modulo.
            abaxXBRLInicioModule.controller('abaxXBRLCabeceraInicioController', componentes.controllers.AbaxXBRLCabeceraInicioController);
            abaxXBRLInicioModule.controller('abaxXBRLBarraNavegacionInicioController', componentes.controllers.AbaxXBRLBarraNavegacionInicioController);
            abaxXBRLInicioModule.controller('abaxXBRLInicioController', componentes.controllers.AbaxXBRLInicioController);
            abaxXBRLInicioModule.controller('abaxXBRLPanelControlController', componentes.controllers.AbaxXBRLPanelControlController);
            abaxXBRLInicioModule.controller('abaxXBRLAlertasController', componentes.controllers.AbaxXBRLAlertasController);
            abaxXBRLInicioModule.controller('abaxXBRLConsultaRepositorioController', componentes.controllers.AbaxXBRLConsultaRepositorioController);
            abaxXBRLInicioModule.controller('abaxXBRLConsultaXBRLController', componentes.controllers.AbaxXBRLConsultaXBRLController);
            abaxXBRLInicioModule.controller('abaxXBRLRolesIndexController', componentes.controllers.AbaxXBRLRolesIndexController);
            abaxXBRLInicioModule.controller('abaxXBRLRolesBorrarController', componentes.controllers.AbaxXBRLRolesBorrarController);
            abaxXBRLInicioModule.controller('abaxXBRLFacultadesRolesController', componentes.controllers.AbaxXBRLFacultadesRolesController);
            abaxXBRLInicioModule.controller('abaxXBRLIndiceEmpresaController', componentes.controllers.AbaxXBRLIndiceEmpresaController);
            abaxXBRLInicioModule.controller('abaxXBRLAgregaEmpresaController', componentes.controllers.AbaxXBRLAgregaEmpresaController);
            abaxXBRLInicioModule.controller('abaxXBRLEditaEmpresaController', componentes.controllers.AbaxXBRLEditaEmpresaController);
            abaxXBRLInicioModule.controller('abaxXBRLEliminaEmpresaController', componentes.controllers.AbaxXBRLEliminaEmpresaController);
            abaxXBRLInicioModule.controller('abaxXBRLIndiceUsuarioController', componentes.controllers.AbaxXBRLIndiceUsuarioController);
            abaxXBRLInicioModule.controller('abaxXBRLAgregaUsuarioController', componentes.controllers.AbaxXBRLAgregaUsuarioController);
            abaxXBRLInicioModule.controller('abaxXBRLEditaUsuarioController', componentes.controllers.AbaxXBRLEditaUsuarioController);
            abaxXBRLInicioModule.controller('abaxXBRLEliminaUsuarioController', componentes.controllers.AbaxXBRLEliminaUsuarioController);
            abaxXBRLInicioModule.controller('abaxXBRLCambioContrasenaUsuarioController', componentes.controllers.AbaxXBRLCambioContrasenaUsuarioController);
            abaxXBRLInicioModule.controller('abaxXBRLAsignaEmisorasUsuarioController', componentes.controllers.AbaxXBRLAsignaEmisorasUsuarioController);
            abaxXBRLInicioModule.controller('abaxXBRLAlertaCookesController', componentes.controllers.AbaxXBRLAlertaCookesController);
           
            abaxXBRLInicioModule.controller('abaxXBRLGruposUsuariosIndexController', componentes.controllers.AbaxXBRLGruposUsuariosIndexController);
            abaxXBRLInicioModule.controller('abaxXBRLAsignaRolesGruposController', componentes.controllers.AbaxXBRLAsignaRolesGruposController);
            abaxXBRLInicioModule.controller('abaxXBRLAsignaUsuariosGruposController', componentes.controllers.AbaxXBRLAsignaUsuariosGruposController);
            abaxXBRLInicioModule.controller('abaxXBRLAsignaRolesUsuariosController', componentes.controllers.AbaxXBRLAsignaRolesUsuariosController);

            abaxXBRLInicioModule.controller('abaxXBRLBitacoraController', componentes.controllers.AbaxXBRLBitacoraController);
            abaxXBRLInicioModule.controller('abaxXBRLDepurarBitacoraController', componentes.controllers.AbaxXBRLDepurarBitacoraController);
            abaxXBRLInicioModule.controller('abaxXBRLConfirmarDepurarBitacoraController', componentes.controllers.AbaxXBRLConfirmarDepurarBitacoraController); 
            
            abaxXBRLInicioModule.controller('abaxXBRLAyudaController', componentes.controllers.AbaxXBRLAyudaController);
            abaxXBRLInicioModule.controller('abaxXBREditorXBRLController', componentes.controllers.AbaxXBREditorXBRLController);
            abaxXBRLInicioModule.controller('abaxVisorXBRLController', componentes.controllers.AbaxVisorXBRLController);

            abaxXBRLInicioModule.controller('abaxXBRLListaDocumentosInstanciaController', componentes.controllers.AbaxXBRLListaDocumentosInstanciaController);
            abaxXBRLInicioModule.controller('abaxXBRLEliminaDocumentoInstanciaController', componentes.controllers.AbaxXBRLEliminaDocumentoInstanciaController);
            abaxXBRLInicioModule.controller('abaxXBRLMigrarVersionController', componentes.controllers.AbaxXBRLMigrarVersionController);

            abaxXBRLInicioModule.controller('abaxXBRLAnalisisConsultaController', componentes.controllers.AbaxXBRLAnalisisConsultasController);
            abaxXBRLInicioModule.controller('abaxXBRLAnalisisConfigurarConsultaController', componentes.controllers.AbaxXBRLAnalisisConfigurarConsultaController);
            abaxXBRLInicioModule.controller('abaxXBRLAnalisisEjecutarConsultaController', componentes.controllers.AbaxXBRLAnalisisEjecutarConsultaController);
            abaxXBRLInicioModule.controller('abaxXBRLAnalisisMostrarConsultaController', componentes.controllers.AbaxXBRLAnalisisMostrarConsultaController);
            abaxXBRLInicioModule.controller('abaxXBRLListaFideicomisosController', componentes.controllers.AbaxXBRLListaFideicomisosController);
            abaxXBRLInicioModule.controller('abaxXBREdicionFideicomisoController', componentes.controllers.AbaxXBREdicionFideicomisoController);

            abaxXBRLInicioModule.controller('abaxXBRLListadoTipoEmpresaController', componentes.controllers.AbaxXBRLListadoTipoEmpresaController);
            abaxXBRLInicioModule.controller('abaxXBRLEditarTipoEmpresaController', componentes.controllers.AbaxXBRLEditarTipoEmpresaController);
            abaxXBRLInicioModule.controller('abaxXBRLAsignaTiposEmpresaController', componentes.controllers.AbaxXBRLAsignaTiposEmpresaController);
            abaxXBRLInicioModule.controller('abaxXBRLAsignaFiduciariosController', componentes.controllers.AbaxXBRLAsignaFiduciariosController);
            abaxXBRLInicioModule.controller('abaxXBRLAsignaFiduciariosRepresentanteComunController', componentes.controllers.AbaxXBRLAsignaFiduciariosRepresentanteComunController);

            abaxXBRLInicioModule.controller('abaxXBRLListadoTaxonomiasController', componentes.controllers.AbaxXBRLListadoTaxonomiasController);
            abaxXBRLInicioModule.controller('abaxXBRLEditarTaxonomiaController', componentes.controllers.AbaxXBRLEditarTaxonomiaController);
            abaxXBRLInicioModule.controller('abaxXBRLAsignaTaxonomiasController', componentes.controllers.AbaxXBRLAsignaTaxonomiasController);
            abaxXBRLInicioModule.controller('abaxXBRLListadoBitacoraVersionDocumentoController', componentes.controllers.AbaxXBRLListadoBitacoraVersionDocumentoController);
            abaxXBRLInicioModule.controller('abaxXBRLListadoBitacoraArchivoBMVController', componentes.controllers.AbaxXBRLListadoBitacoraArchivoBMVController);

            
            
            abaxXBRLInicioModule.controller('abaxXBRLListadoGrupoEmpresaController', componentes.controllers.AbaxXBRLListadoGrupoEmpresaController);
            abaxXBRLInicioModule.controller('abaxXBRLEditarGrupoEmpresaController', componentes.controllers.AbaxXBRLEditarGrupoEmpresaController);
            abaxXBRLInicioModule.controller('abaxXBRLAsignaEmpresasGrupoEmpresasController', componentes.controllers.AbaxXBRLAsignaEmpresasGrupoEmpresasController);
            abaxXBRLInicioModule.controller('abaxXBRLAsignaGruposAEmpresaEmpresasController', componentes.controllers.AbaxXBRLAsignaGruposAEmpresaEmpresasController);

            abaxXBRLInicioModule.controller('abaxXBRLListadoParametroSistemaController', componentes.controllers.AbaxXBRLListadoParametroSistemaController);
            abaxXBRLInicioModule.controller('abaxXBRLEditarParametroSistemaController', componentes.controllers.AbaxXBRLEditarParametroSistemaController);

            abaxXBRLInicioModule.controller('abaxXBRLListadoListasNotificacionesController', componentes.controllers.AbaxXBRLListadoListasNotificacionesController);
            abaxXBRLInicioModule.controller('abaxXBRLEditarListaNotificacionController', componentes.controllers.AbaxXBRLEditarListaNotificacionController);

            abaxXBRLInicioModule.controller('abaxXBRLListadoDestinatariosNotificacionController', componentes.controllers.AbaxXBRLListadoDestinatariosNotificacionController);
            abaxXBRLInicioModule.controller('abaxXBRLEditarDestinatarioNotificacionController', componentes.controllers.AbaxXBRLEditarDestinatarioNotificacionController);

            abaxXBRLInicioModule.controller('abaxXBRLListadoConsultasRepositorioController', componentes.controllers.AbaxXBRLListadoConsultasRepositorioController);
            abaxXBRLInicioModule.controller('abaxXBRLEditarConsultaRepositorioController', componentes.controllers.AbaxXBRLEditarConsultaRepositorioController);

            abaxXBRLInicioModule.controller('abaxXBRLPersonasResponsablesController', componentes.controllers.AbaxXBRLPersonasResponsablesController);
            abaxXBRLInicioModule.controller('abaxXBRLAdministradoresController', componentes.controllers.AbaxXBRLAdministradoresController);
            abaxXBRLInicioModule.controller('abaxXBRLEnviosTaxonomiaController', componentes.controllers.AbaxXBRLEnviosTaxonomiaController);
            abaxXBRLInicioModule.controller('abaxXBRLResumenInformacion4DController', componentes.controllers.AbaxXBRLResumenInformacion4DController);
            abaxXBRLInicioModule.controller('abaxXBRLReporteController', componentes.controllers.AbaxXBRLReporteController);
            abaxXBRLInicioModule.controller('abaxXBRLReporteDescripcionSectoresController', componentes.controllers.AbaxXBRLReporteDescripcionSectoresController);
            abaxXBRLInicioModule.controller('abaxXBRLReporteCalculoMaterialidadController', componentes.controllers.AbaxXBRLReporteCalculoMaterialidadController);

            //Definimos las directivas
            abaxXBRLInicioModule.directive('abaxXbrlCabeceraInicio', componentes.directivas.AbaxXBRLCabeceraInicio.AbaxXBRLCabeceraInicioDirective);
            abaxXBRLInicioModule.directive('abaxXBrlSplashContenidoInicio', shared.directivas.AbaxXBRLSplashContenidoInicio.AbaxXBRLSplashContenidoInicioDirective);
            abaxXBRLInicioModule.directive('abaxXbrlBarraNavegacionInicio', componentes.directivas.AbaxXBRLBarraNavegacionInicio.AbaxXBRLBarraNavegacionInicioDirective);
            abaxXBRLInicioModule.directive('abaxXbrlEstadoInicialVista', componentes.directivas.AbaxXBRLEstadoInicialVista.AbaxXBRLEstadoInicialVistaDirective);
            abaxXBRLInicioModule.directive('xbrlResize', abaxXBRL.directives.XbrlResize.XbrlResizeDirective);
            abaxXBRLInicioModule.directive('abaxXbrlEasyPieChart', componentes.directivas.AbaxXbrlEasyPieChartDirective.AbaxXbrlEasyPieChart);
            //Definimos las directivas que son utilizadas en el visor y en el editor de documentos.
            abaxXBRLInicioModule.directive('xbrlEstructuraDocumento', abaxXBRL.directives.XbrlEstructuraDocumento.XbrlEstructuraDocumentoDirective);

            //abaxXBRLInicioModule.directive('xbrlAutoNumeric', abaxXBRL.directives.XbrlAutoNumeric.XbrlAutoNumericDirective);
            //Definimos las directivas.
            abaxXBRLInicioModule.filter('abaxXBRLAsignarFilter', abaxXBRL.filters.AbaxXBRLAsignarFilter.factory);
            abaxXBRLInicioModule.filter('abaxCut', abaxXBRL.filters.AbaxXBRLCortaTextoFilter.factory);
            //Se agrega la configuración del ruteo del modulo de inicio.
            abaxXBRLInicioModule.config(routes.AbaxXBRLInicioRoutesConfig);

        }
        

        /**
         * Constructor de la clase ModuloVisor
         */
        constructor() {
            if (AbaxXBRLInicioModule._instance) {
                throw new Error("Error: Fallo al instanciar: Utilice getInstance() en lugar de new.");
            }
            var self = this;
            AbaxXBRLInicioModule._instance = self ;
            shared.service.AbaxXBRLUtilsService.cargaModulosAngularPoNombre(['localytics.directives', 'angularUtils.directives.dirPagination'])
                .then(function () {
                //Agregamos los siguientes modulos de dependencias:
                //- abaxXBRL: Modulo principal de la aplicación.
                //- localytics.directives: Directivas para el manejo de chosen dentro de los combos de selección.
                //- angularUtils.directives.dirPagination: Modulo con la definición de directivas para el paginado de listas.
                self.module = angular.module(root.AbaxXBRLConstantesRoot.NOMBRE_MODULO_ABAX_XBRL_INICIO, ['abaxXBRL', 'localytics.directives', 'angularUtils.directives.dirPagination']);
                self.init();
            }, function (error) {
                    if (console && console.log) {
                        console.log(error);
                    }
            });
        }

        /**
         * Obtiene la instancia única de esta clase. Si no existe, la crea.
         *
         * @return la instancia única de esta clase.
         */
        public static getInstance(): AbaxXBRLInicioModule {
            if (AbaxXBRLInicioModule._instance === null) {
                AbaxXBRLInicioModule._instance = new AbaxXBRLInicioModule();
            }
            return AbaxXBRLInicioModule._instance;
        }
    }
    //Disparamos la creación del modulo
    modulos.AbaxXBRLInicioModule.getInstance();
    

    
}  