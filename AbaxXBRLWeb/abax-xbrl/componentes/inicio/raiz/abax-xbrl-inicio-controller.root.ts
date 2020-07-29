/// <reference path="../../../../scripts/typings/moment/moment.d.ts" />

module abaxXBRL.componentes.controllers {

    /**Contrato con la definición de los elementos del scope para la vista inicio. **/
    export interface IAbaxXBRLInicioScope extends IAbaxXBRLMainScope {
        /**Bandera que indica si se debe de mostrar el splash **/
        mostrarSplashContenido: boolean;
        /**
        * Da formato 'DD/MM/YYYY HH:mm' a una fecha determinada  
        * @param date Objeto tipo Date o cadena con formato de fecha haceptado por moment.
        * @return Cadena con la fecha en formato 'DD/MM/YYYY HH:mm'.
        **/
        formateaFechaHora(date: string): string;
        /**
        * Da formato 'DD/MM/YYYY' a una fecha determinada  
        * @param date Objeto tipo Date o cadena con formato de fecha haceptado por moment.
        * @return Cadena con la fecha en formato 'DD/MM/YYYY'.
        **/
        formateaFecha(date: string): string;
        /**
        * Carga el identificador del documento de instancia. 
        * @param idDocumentoInstancia Identificador del documento requerido.
        **/
        cargarDocumentoInstancia(idDocumentoInstancia: number): void;

        /**
        * Carga el identificador del documento de instancia. 
        * @param idDocumentoInstancia Identificador del documento requerido.
        **/
        cargarDocumentoInstanciaVisor(idDocumentoInstancia: number): void;

        /**
        * Muestra un documento instancia como visor. 
        * @param idDocumentoInstancia Identificador del documento requerido.
        **/
        visorDocumentoUsuario(idDocumentoInstancia: number): void;
        /**
        * Opciones del datatable
        **/
        dataTableOptions: {};
        /**
        * Lista con las alertas Bootstrap.
        **/
        alertasBootstrap: Array<shared.modelos.IAlertaBootsrap>
        /**
        * Cierra la alerta bootsrap en el indice indicado.
        * @param indice Indice de la alerta que se pretende cerrar.
        **/
        cerrarAlertaBootstrap(index: number): void;
        /**
        * Diccionario de facultades preevaluadas.
        **/
        Facultad: {[nombreFacultad:string]:boolean}
    }
    /**Controlador principal de la vista de inicio, su scope sirve de puente de comunicación entre los diferentes componentes (header, navegación y contenido) del sitio una vez iniciada la sesion.**/
    export class AbaxXBRLInicioController {
        /**Scope actual del componente **/
        private $scope: IAbaxXBRLInicioScope;
        /**Servicio para el manejo de la sesion. **/
        private abaxXBRLSessionService: shared.service.AbaxXBRLSessionService;
        /**Servicio para el cambio de estado de las vistas dentro del sitio. **/
        private $state: ng.ui.IStateService = null;
        /**Servicio para el manejo de etiquetas en multilenguaje **/
        private $translate: ng.translate.ITranslateService;
        /**Servicio de utilerias genericas de abax. **/
        private abaxXBRLUtilsService: shared.service.AbaxXBRLUtilsService;
        /** Servicio para presentar diálogos modales al usuario */
        private $modal: ng.ui.bootstrap.IModalService;

        /**
        * Cargamos los datos de la sesion 
        **/
        private cargaDatosSesion() {
            var self = this;
            var scope = self.$scope;
            var onSucess = function (sesion: shared.modelos.ISession) {
                scope.usuarioSesion.IdUsuario = sesion.Usuario.IdUsuario;
                scope.usuarioSesion.Nombre = sesion.Usuario.Nombre;
                scope.usuarioSesion.ApellidoPaterno = sesion.Usuario.ApellidoPaterno;
                scope.usuarioSesion.ApellidoMaterno = sesion.Usuario.ApellidoMaterno;
                scope.usuarioSesion.CorreoElectronico = sesion.Usuario.CorreoElectronico;
                scope.usuarioSesion.VigenciaPassword = sesion.Usuario.VigenciaPassword;
                scope.usuarioSesion.Bloqueado = sesion.Usuario.Bloqueado;
                scope.usuarioSesion.Activo = sesion.Usuario.Activo;
                scope.usuarioSesion.Puesto = sesion.Usuario.Puesto;
                scope.usuarioSesion.Borrado = sesion.Usuario.Borrado;
            };
            var onError = function (error) {
                console.log(error);
                self.abaxXBRLSessionService.cerrarSesion();
            }
            self.abaxXBRLSessionService.getSesion().then(onSucess,onError);
        }
        /**
        * Carga el identificador del documento de instancia. 
        * @param idDocumentoInstancia Identificador del documento requerido.
        **/
        private cargarDocumentoInstancia(idDocumentoInstancia: number): void {
            
            this.$scope.mostrarSplashContenido = true;
            var sesion = shared.service.AbaxXBRLSessionService;
            sesion.setAtributoSesion("esVisor", false);


            shared.service.AbaxXBRLUtilsService.cargaDefinicionModulo('abaxXBRLViewer').then(function () {
                sesion.setAtributoSesion("idDocumentoInstancia", idDocumentoInstancia);

                shared.service.AbaxXBRLUtilsService.cargaDefinicionModulo('abaxXbrlDesgloseCreditosViewerCNBV');
                shared.service.AbaxXBRLUtilsService.cargaDefinicionModulo('abaxXBRLDesgloseCreditosViewer');
                shared.service.AbaxXBRLUtilsService.cambiarEstadoVistasA("inicio.editorXBRL.editorXbrl");
            });
        }


        /**
        * Carga el identificador del documento de instancia. 
        * @param idDocumentoInstancia Identificador del documento requerido.
        **/
        private cargarDocumentoInstanciaVisor(idDocumentoInstancia: number): void {

            this.$scope.mostrarSplashContenido = true;
            var sesion = shared.service.AbaxXBRLSessionService;
            sesion.setAtributoSesion("esVisor", false);


            shared.service.AbaxXBRLUtilsService.cargaDefinicionModulo('abaxXBRLViewer').then(function () {
                sesion.setAtributoSesion("idDocumentoInstancia", idDocumentoInstancia);

                shared.service.AbaxXBRLUtilsService.cargaDefinicionModulo('abaxXbrlDesgloseCreditosViewerCNBV');                
                shared.service.AbaxXBRLUtilsService.cargaDefinicionModulo('abaxXBRLDesgloseCreditosViewer');
                shared.service.AbaxXBRLUtilsService.cambiarEstadoVistasA("inicio.editorXBRL.editorXbrl");
            });
        }


        /**
        * Carga el identificador del documento de instancia. 
        * @param idDocumentoInstancia Identificador del documento requerido.
        **/
        private visorDocumentoUsuario(idDocumentoInstancia: number): void {

            this.$scope.mostrarSplashContenido = true;
            var sesion = shared.service.AbaxXBRLSessionService;
            sesion.setAtributoSesion("esVisor", true);

            shared.service.AbaxXBRLUtilsService.cargaDefinicionModulo('abaxVisorXBRLViewer').then(function () {
                sesion.setAtributoSesion("idDocumentoInstancia", idDocumentoInstancia);
                shared.service.AbaxXBRLUtilsService.cambiarEstadoVistasA("inicio.visorXBRL.visorXbrl");
            });
        }
        /**
        * Evalua si están habilitadas las cookies en el navegador y de lo contrario muestra una advertencia.
        **/
        private evaluaCookies() {
            var $self = this;
            var $modal = this.$modal;
            if (!navigator.cookieEnabled) {
                $modal.open({
                    templateUrl: 'abax-xbrl/componentes/inicio/raiz/alerta-cookies/abax-xbrl-alerta-cookes-template.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                    controller: AbaxXBRLAlertaCookesController,
                    size: 'lg',
                }); 
            }

        }

        /**Inicializa los elementos del controller. **/
        private init(): void {
            //proxy de la instancia
            var self: AbaxXBRLInicioController = this;
            var scope: IAbaxXBRLInicioScope = self.$scope;
            var $util = shared.service.AbaxXBRLUtilsService;

            scope.formateaFechaHora = function (date: string):string {
                return moment(date).format('DD/MM/YYYY HH:mm');
            }

            scope.formateaFecha = function (date: string): string {
                return moment(date).format('DD/MM/YYYY');
            }
            scope.cargarDocumentoInstancia = function (idDocumentoInstancia) { self.cargarDocumentoInstancia(idDocumentoInstancia); }
            scope.cargarDocumentoInstanciaVisor = function (idDocumentoInstancia) { self.cargarDocumentoInstanciaVisor(idDocumentoInstancia); }

            
            scope.visorDocumentoUsuario = function (idDocumentoInstancia) { self.visorDocumentoUsuario(idDocumentoInstancia); }

            scope.dataTableOptions = shared.service.AbaxXBRLUtilsService.creaOpcionesDataTable();
            scope.navegacionXS = false;
            var currentState = self.$state.current.name;
            
            self.cargaDatosSesion();

            var listener = function (): void { self.evaluaCookies(); };

            $util.addEventListenerToRootScope('evaluaCookies', '$stateChangeSuccess', listener);
        }
        /**
        * Constructor base de la clase
        * @param $scope Scope actual del login.
        * @param abaxXBRLSessionService Servicio para el manejo de la sesion.
        * @param $state Servicio para el cambio de estado de las vistas dentro del sitio.
        * @param $translate Servicio para el manejo de multi idioma.
        * @param abaxXBRLUtilsService Servicio de utilerias genericas de abax.
        * @param $modal Servicio para el despliegue de dialogos modales.
        **/
        constructor(
            $scope: IAbaxXBRLInicioScope,
            abaxXBRLSessionService: shared.service.AbaxXBRLSessionService,
            $state: ng.ui.IStateService,
            $translate: ng.translate.ITranslateService,
            abaxXBRLUtilsService: shared.service.AbaxXBRLUtilsService,
            $modal: ng.ui.bootstrap.IModalService ) {
            this.$scope = $scope;
            this.abaxXBRLSessionService = abaxXBRLSessionService;
            this.$state = $state;
            this.$translate = $translate;
            this.abaxXBRLUtilsService = abaxXBRLUtilsService;
            this.$modal = $modal;
            this.init();
        }
    }
    AbaxXBRLInicioController.$inject = ['$scope', 'abaxXBRLSessionService', '$state', '$translate', 'abaxXBRLUtilsService','$modal'];
} 