///<reference path="../scripts/typings/angularjs/angular.d.ts" /> 
///<reference path="../scripts/typings/json/jquery.json.d.ts" />
///<reference path="../scripts/typings/moment/moment.d.ts" />
///<reference path="../scripts/typings/angular-ui-bootstrap/angular-ui-bootstrap.d.ts" />
///<reference path="modeloAbax.ts" />
///<reference path="serviciosAbax.ts" />

module abaxXBRL.directives {


    import services = abaxXBRL.services;
    import UsuarioDocumentoInstancia = abaxXBRL.model.UsuarioDocumentoInstancia;
    import ResultadoOperacion = abaxXBRL.model.ResultadoOperacion;
    /**
    * Implementación de una directiva para presentar y manipular el listado de los usuarios asignados o por asignar a un documento de instancia
    *
    * @author Emigdio Hernandez Rodriguez
    * @version 1.0
    */
    export class XbrlUsuariosDocumentoInstancia {

        /**
        * Crea la definción de la directiva.
        *
        * @return la definición de la directiva.
        */
        public static XbrlUsuariosDocumentoInstanciaDirective(): ng.IDirective {
            return {
                restrict: 'E',
                replace: false,
                transclude: false,
                scope: {
                    xbrlIdDocumentoInstancia: '=',
                    xbrlFnListaActualizada: '&'
                },
                templateUrl: 'ts/templates/template-xbrl-usuarios-documento.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                controller: XbrlUsuariosDocumentoController
            };
        }
    }

    /**
    * Implementación de un controlador para presentar y manipular el listado de usuarios asignados a un documento de instancia
    *
    * @author Emigdio Hernandez Rodriguez
    * @version 1.0
    */
    export class XbrlUsuariosDocumentoController {

        /** el scope de la directiva que presenta el listado de usuarios asignados a un documento de instancia */
        private $scope: IXbrlUsuariosDocumentoScope;

        /**
        * El servicio que permite la consulta y guardado de los usuarios asignados a un documento de instancia
        */
        private abaxXBRLServices: services.AbaxXBRLServices;

        /**
         * Inicializa el controlador al asociarlo con el listado de usuarios del documento de instancia correspondiente
         */
        private init(): void {

            //Obtener los listados de usuarios por asignar y asignados
            $.isLoading({
                text: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_OBTENIENDO_USUARIOS')
            });

            var aceptar = shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_ACEPTAR');
            var $util = shared.service.AbaxXBRLUtilsService;

            var self = this;
            this.abaxXBRLServices.obtenerUsuariosDocumentoInstancia().then(
                function (resultadoOperacion: ResultadoOperacion) {
                    //se reciben las listas de usuarios
                    self.$scope.usuariosAsignados = new Array<UsuarioDocumentoInstancia>();
                    self.$scope.usuariosNoAsignados = new Array<UsuarioDocumentoInstancia>();
                    if (resultadoOperacion.InformacionExtra && resultadoOperacion.InformacionExtra != null) {
                        if (resultadoOperacion.InformacionExtra.UsuariosPorAsignar && resultadoOperacion.InformacionExtra.UsuariosPorAsignar.length &&
                            resultadoOperacion.InformacionExtra.UsuariosPorAsignar.length > 0) {
                            for (var i = 0; i < resultadoOperacion.InformacionExtra.UsuariosPorAsignar.length; i++) {
                                self.$scope.usuariosNoAsignados.push(new UsuarioDocumentoInstancia().deserialize(resultadoOperacion.InformacionExtra.UsuariosPorAsignar[i]));
                            }
                        }
                        if (resultadoOperacion.InformacionExtra.UsuariosAsignados && resultadoOperacion.InformacionExtra.UsuariosAsignados.length &&
                            resultadoOperacion.InformacionExtra.UsuariosAsignados.length > 0) {
                            for (var i = 0; i < resultadoOperacion.InformacionExtra.UsuariosAsignados.length; i++) {
                                self.$scope.usuariosAsignados.push(new UsuarioDocumentoInstancia().deserialize(resultadoOperacion.InformacionExtra.UsuariosAsignados[i]));
                            }
                        }
                    }
                },
                function (resultadoOperacion: abaxXBRL.model.ResultadoOperacion) {

                    var etiqueta = resultadoOperacion && resultadoOperacion.Mensaje ? resultadoOperacion.Mensaje : "EDITOR_XBRL_ERROR_CONTACTAR_SERVIDOR";
                    var mensaje = $util.getValorEtiqueta(etiqueta);
                    $util.error({ texto: mensaje}).then(function () {
                        self.$scope.xbrlFnListaActualizada();
                    });
                }).finally(function () {
                $.isLoading('hide');
            }
                );

            this.$scope.quitarUsuariosAsignados = function (): void {
                if (self.$scope.usuariosAsignados != null) {
                    var nuevoAsignados = new Array<UsuarioDocumentoInstancia>();
                    for (var i = 0; i < self.$scope.usuariosAsignados.length; i++) {
                        var usr = self.$scope.usuariosAsignados[i];
                        if (usr.Seleccionado) {
                            usr.Seleccionado = false;
                            usr.EsDueno = false;
                            usr.PuedeEscribir = false;
                            usr.PuedeLeer = true;
                            self.$scope.usuariosNoAsignados.push(usr);
                        } else {
                            nuevoAsignados.push(usr);
                        }
                    }
                    self.$scope.usuariosAsignados = nuevoAsignados;
                }
                self.$scope.buscarAsignados = "";
            }

            this.$scope.asignarUsuarios = function (): void {
                if (self.$scope.usuariosNoAsignados != null) {
                    var nuevosNoAsignados = new Array<UsuarioDocumentoInstancia>();
                    for (var i = 0; i < self.$scope.usuariosNoAsignados.length; i++) {
                        var usr = self.$scope.usuariosNoAsignados[i];
                        if (usr.Seleccionado) {
                            usr.Seleccionado = false;
                            self.$scope.usuariosAsignados.push(usr);
                        } else {
                            nuevosNoAsignados.push(usr);
                        }
                    }
                    self.$scope.usuariosNoAsignados = nuevosNoAsignados;
                }
                self.$scope.buscarNoAsignados = "";
            }

            this.$scope.guardarCambios = function (): void {
                //Validar que tiene al menos un usuario en la lista
                if (self.$scope.usuariosAsignados == null || self.$scope.usuariosAsignados.length == 0) {
                    $.prompt(shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_COMPARTIR_ASIGNAR_UN_USUARIO'),
                        {
                            title: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_COMPARTIR_ERROR'),
                            buttons: { aceptar: true }
                        });
                    return;
                }
                //Validar que exista al menos un propietario
                var existePropiertario = false;
                var existeMismoUsuario = true;
                for (var i = 0; i < self.$scope.usuariosAsignados.length; i++) {
                    var usr = self.$scope.usuariosAsignados[i];
                    if (usr.EsDueno) {
                        existePropiertario = true;
                    }

                }
                if (!existePropiertario) {
                    $.prompt(shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_COMPARTIR_UN_DUENO'),
                        {
                            title: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_COMPARTIR_ERROR'),
                            buttons: { aceptar: true }
                        });
                    return;
                }
                //Guardar cambios

                $.isLoading({
                    text: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_COMPARTIR_ACTUALIZANDO_LISTA')
                });

                self.abaxXBRLServices.actualizarUsuariosDocumentoAsignados(self.$scope.usuariosAsignados).then(
                    function (resultadoOperacion: ResultadoOperacion) {
                        if (resultadoOperacion.Resultado) {
                            $.prompt(shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_COMPARTIR_EXITO_GUARDAR'),
                                {
                                    title: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_COMPARTIR_DOCUMENTO_INSTANCIA'),
                                    buttons: { aceptar: true }
                                });
                            if (self.$scope.xbrlFnListaActualizada()) {
                                self.$scope.xbrlFnListaActualizada();
                            }
                        }

                    },
                    function (resultadoOperacion: ResultadoOperacion) {
                        if (resultadoOperacion.Mensaje && resultadoOperacion.Mensaje.indexOf("MENSAJE_ERROR_") == 0) {
                            var mensajeError =
                                $util.error({ texto: $util.getValorEtiqueta(resultadoOperacion.Mensaje, { "USUARIO": resultadoOperacion.InformacionExtra }) });
                        } else {

                            $.prompt(shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_COMPARTIR_ERROR_GUARDAR'),
                                {
                                    title: shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_ERROR_CONTACTAR_SERVIDOR'),
                                    buttons: { aceptar: true }
                                });
                        }
                    }).finally(function () { $.isLoading('hide'); });
            }
        }

        /**
         * Constructor de la clase
         *
         * @param $scope el scope de la directiva a la que está asociado este controlador
         * @param abaxXBRLServices el servicio para la manipulación de usuarios asignados a un documento de instancia
        */
        constructor($scope: IXbrlUsuariosDocumentoScope, abaxXBRLServices: services.AbaxXBRLServices) {
            this.$scope = $scope;
            this.abaxXBRLServices = abaxXBRLServices;
            this.init();
        }
    }

    XbrlUsuariosDocumentoController.$inject = ['$scope', 'abaxXBRLServices'];


    /**
     * Define la estructura del Scope de la Directiva para la presentación del listado de usuarios
     * asignados a un documento de instancia.
     *
     * @author Emigdio Hernandez Rodriguez
     * @version 1.0
     */
    export interface IXbrlUsuariosDocumentoScope extends ng.IScope {

        /** El identificador del documento de instancia del cuál presentar los usuarios */
        xbrlIdDocumentoInstancia: number;
        /** Lista de usuarios por asignar al documento */
        usuariosNoAsignados: Array<model.UsuarioDocumentoInstancia>;
        /** Lista de usuarios asignados al documento */
        usuariosAsignados: Array<model.UsuarioDocumentoInstancia>;
        /** Mueve los usuarios seleccionados de la lista de usuarios por asignar a la lista de asignados */
        asignarUsuarios(): void;
        /** Mueve los usuarios seleeccionados de la lista de usuarios asignados a la lista de por asignar */
        quitarUsuariosAsignados(): void;
        /** Guarda los cambios de la lista de usuarios asignados */
        guardarCambios(): void;
        /** Criterio de búsqueda para usuarios asignados */
        buscarAsignados: string;
        /** Criterio de búsqueda para usuarios no asignados */
        buscarNoAsignados: string;
        /** Funcion para avisar a la directiva superior que se terminó de actualizar la lista de usuarios */
        xbrlFnListaActualizada(): void;
    }


} 