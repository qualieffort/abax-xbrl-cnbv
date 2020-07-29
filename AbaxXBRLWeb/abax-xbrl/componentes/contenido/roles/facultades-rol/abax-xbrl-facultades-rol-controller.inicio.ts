module abaxXBRL.componentes.controllers {
    /**
    *  Contrato que define los elementos accesibles desde la vista.
    **/
    export interface AbaxXBRLFacultadesRolesIndexScope extends IAbaxXBRLInicioScope {
        /**
        * Listado de roles a mostrar.
        **/
        listadoRoles: Array<shared.modelos.IRol>;
        /**
        * Bandera que indica que se esta esperando la respuesta del servdor a la petisión de roles.
        **/
        cargandoRoles: boolean;
        /**
        * Filtro para del chosen superior de la vista de asingación de facultades.
        **/
        filtroChosenTop: shared.modelos.IRol;
        /**
        * Facultad por la que se filtran la lista de la izquierda.
        **/
        filtroChosenLeft: shared.modelos.ICategoriaFacultad;
        /**
        * Facultad por la que se filtran la lista de la derecha.
        **/
        filtroChosenRight: shared.modelos.ICategoriaFacultad;
        /**
        * Arreglo con la lista de las categorias de las facultades.
        **/
        listadoCategoriasFacultades: Array<shared.modelos.ICategoriaFacultad>;
        /**
        * Bandera que indica que se estan cargando el listado de categorias de facultades.
        **/
        cargandoCategoriasFacultades: boolean;
        /**
        * Texto para filtrar las facultades de la izquierda.
        **/
        filtroLeft: string;
        /**
        * Arreglo con el total de facultades existentes.
        **/
        listaFacultades: Array<shared.modelos.IFacultad>
        /**
        * Bandera que indica aun se está  esperando la respuesta del servidor.
        **/
        cargandoFacultades: boolean;
        /**
        * Arreglo con las facutades que tiene asignadas el rol actual.
        **/
        listaFacultadesAsignadas: Array<shared.modelos.IFacultad>
        /**
        * Bandera que indica que se están cargando las facultades asignadas al usuario.
        **/
        cargandoFacultadesAsignadas: boolean;
        /**
        * Diccionario que indica que facultades fueron checadas.
        **/
        listaChecks: { [idFacultad: number]: boolean }
        /**
        * Asinga las facultades seleccionadas.
        **/
        asignarTodos();
        /**
        * Quita las facultades seleccionadas.
        **/
        quitarTodos();
        /**
        * Bandera que indica que se están cargando las facultades No asignadas al usuario.
        **/
        listaFacultadesNoAsignadas: Array<shared.modelos.IFacultad>
        /**
        * Actualiza las facultades asignadas al rol.
        **/
        guardar();
        /**
        * Bandera con el valor del checkbox que cambia el estado de checado de las facultades de la izquierda.
        **/
        checkAllLeft: boolean;
        /**
        * Bandera con el valor del checkbox que cambia el estado de checado de las facultades de la derecha.
        **/
        checkAllRight: boolean;
        /**
        * Arreglo con las facultades asignadas visibles en el contenedor.
        **/
        asignadasVisibles: Array<shared.modelos.IFacultad>;
        /**
        * Arreglo con las facultades no asignadas visibles en el contenedor.
        **/
        noAsignadasVisibles: Array<shared.modelos.IFacultad>;
        /**
        * Compara la facultad contra una categoria para determinar si son iguales.
        * @param facultad Entidad de tipo facultad a comparar.
        * @param indice Indice del elemento iterado.
        * @result Retorna ture si la categoria es undefined o si tiene el mismo IdCategoriaFacultad que la facultad. Retorna false para cualquier otro caso.
        **/
        comparaFiltroIzquierda(facultad: shared.modelos.IFacultad, indice: number): boolean;
        /**
        * Compara la facultad contra una categoria para determinar si son iguales.
        * @param facultad Entidad de tipo facultad a comparar.
        * @param indice Indice del elemento iterado.
        * @result Retorna ture si la categoria es undefined o si tiene el mismo IdCategoriaFacultad que la facultad. Retorna false para cualquier otro caso.
        **/
        comparaFiltroDerecha(facultad: shared.modelos.IFacultad, indice: number): boolean;
        /**
        * Bandera que indica que se esta procesando una solicitud de guardar.
        **/
        guardando: boolean;
        /**
        * Carga las facultades asignadas al rol.
        **/
        obtenFacultadesRol():void;
    }



    /**
    * Controlador de la vista de roles.
    **/
    export class AbaxXBRLFacultadesRolesController {
        /** 
        * El scope del controlador 
        **/
        private $scope: AbaxXBRLFacultadesRolesIndexScope;

        /**Servicio para el manejo de las peticiones al servidor. **/
        private abaxXBRLRequestService: shared.service.AbaxXBRLRequestService;

        /**Servicio para el cambio de estado de las vistas dentro del sitio. **/
        private $state: ng.ui.IStateService = null;

        /**
        * Solicita al servidor el listado con las categorias de facutlades.
        **/
        private obtenListadoCategoriasFacultades(): void {
            var scope = this.$scope;
            var url = AbaxXBRLConstantes.OBTEN_CATEGORIAS_FACULTADES_PATH;
            this.abaxXBRLRequestService.asignaResultadoPost(url, {}, scope, 'listadoCategoriasFacultades', 'cargandoCategoriasFacultades'); 
        }
       
        
       /**
       * Llena el listado de roles.
       **/
        private obtenRoles(): void {
            var self = this;
            var scope = self.$scope;
            var url = AbaxXBRLConstantes.OBTEN_ROLES_EMPRESA_PATH;
            var onSucess = function () { self.asignaRolPorSesion();};
            this.abaxXBRLRequestService.asignaResultadoPost(url, {}, scope, 'listadoRoles', 'cargandoRoles').then(onSucess);
        }
        /**
        * Busca y asigna en el listado de roles el rol en sesion.
        **/
        private asignaRolPorSesion() {
            var scope = this.$scope;
            var listadoRoles = scope.listadoRoles;
            var idRol = shared.service.AbaxXBRLSessionService.getAtributoSesion(AbaxXBRLConstantes.ATRIBUTO_SESION_ID_ROL_PROCESADO);
            for (var index = 0; index < listadoRoles.length; index++) {
                var rol = listadoRoles[index];
                if (idRol == rol.IdRol) {
                    scope.filtroChosenTop = rol;
                    break;
                }
            }
            if (!scope.filtroChosenTop) { scope.filtroChosenTop = listadoRoles[0]; }
            this.obtenFacultades();
            
        }
       /**
       * Llena el listado de roles.
       **/
        private obtenFacultades(): void {
            var self = this;
            var scope = self.$scope;
            var url = AbaxXBRLConstantes.OBTEN_FACULTADES_PATH;
            var onSucess = function (result: any) { self.onObtenFacultadesSucess(result.data); };
            scope.cargandoFacultades = true;
            this.abaxXBRLRequestService.post(url, {}).then(onSucess);
            //this.abaxXBRLRequestService.asignaResultadoPost(url, {}, scope, 'listaFacultades', 'cargandoFacultades').then(onSucess);
        }
        /**
        * Retorna los identificadores de facultades. 
        **/
        private getIdsFacultadesEnum(): Array<number> {
            var facultadesIds: Array<number> = [];
            var index: number = 0
            var name: string;
            for (name in AbaxXBRLFacultadesEnum) {
                facultadesIds[index] = parseInt(AbaxXBRLFacultadesEnum[name]);
                index++;
            }
            return facultadesIds;
        }
        /**
        * Filtra un listado de facultades dejando solo las que coinciden con lo existente en el enum.
        * @param lista Lista que se pretende evaluar.
        * @return Lista filtrada dejando solo los valores que coincidian con los elementos del enum.
        **/
        private filtraFacultades(lista: Array<shared.modelos.IFacultad>): Array<shared.modelos.IFacultad>  {
            var self = this;
            var facultadesIds: Array<number> = self.getIdsFacultadesEnum();
            var facultades: Array<shared.modelos.IFacultad> = [];
            
            for (var index: number = 0; index < lista.length; index++) {
                var facultad = lista[index];
                if (facultad && facultad != null && facultadesIds.indexOf(facultad.IdFacultad) != -1) {
                    facultades.push(facultad);
                }
            }
            return facultades;
        }
        /**
        * Maneja la respuesta del servidor a la solicitud de facultades.
        * @param resulado Respuesta del servidor.
        **/
        private onObtenFacultadesSucess(resultado: shared.modelos.IResultadoOperacion):void {
            var self = this;
            var scope = self.$scope;
            if (resultado.Resultado) {
                var lista:Array<shared.modelos.IFacultad> = resultado.InformacionExtra;
                scope.listaFacultades = self.filtraFacultades(lista);
            }
            //self.determinaFacultadesNoAsignadas();
            this.obtenFacultadesRol();
            scope.cargandoFacultades = false;

        }

        /**
       * Llena el listado de roles.
       **/
        private obtenFacultadesRol(): void {

            var self = this;
            var scope = self.$scope;

            if (!scope.filtroChosenTop) {
                return;
            }

            
            var url = AbaxXBRLConstantes.OBTEN_FACULTADES_ASIGNADAS_ROL_PATH;
            var onSucess = function (result: any) { self.onObtenFacultadesRolSucess(result.data); };
            var idRol = scope.filtroChosenTop.IdRol;
            scope.cargandoFacultadesAsignadas = true;
            this.abaxXBRLRequestService.post(url, { "idRol": idRol.toString() }).then(onSucess);
            //this.abaxXBRLRequestService.asignaResultadoPost(url, {"idRol": idRol.toString()}, scope, 'listaFacultadesAsignadas', 'cargandoFacultadesAsignadas').then(onSucess);
        }
        /**
       * Maneja la respuesta del servidor a la solicitud de facultades.
       * @param resulado Respuesta del servidor.
       **/
        private onObtenFacultadesRolSucess(resultado: shared.modelos.IResultadoOperacion): void {
            var self = this;
            var scope = self.$scope;
            if (resultado.Resultado) {
                var lista: Array<shared.modelos.IFacultad> = resultado.InformacionExtra;
                scope.listaFacultadesAsignadas = self.filtraFacultades(lista);
            }
            self.determinaFacultadesNoAsignadas();
            scope.cargandoFacultadesAsignadas = false;

        }
        /**
        * Determina las facultades no asignadas en base al total de facultades y las facultades asignadas.
        **/
        private determinaFacultadesNoAsignadas():void {
            var scope = this.$scope;
            var listaFacultades = scope.listaFacultades;
            var listaAsignadas = scope.listaFacultadesAsignadas;
            var listaNoAsignadas = new Array<shared.modelos.IFacultad>();
            var listCheck: { [idFacultad: number]: boolean } = {};
            var idsNoAsignadas: Array<number> = [];

            for (var indexFacultad = 0; indexFacultad < listaFacultades.length; indexFacultad++) {
                var facultad = listaFacultades[indexFacultad];
                var estaAsignada = false;
                for (var indexAsignadas = 0; indexAsignadas < listaAsignadas.length; indexAsignadas++) {
                    var asignada = listaAsignadas[indexAsignadas];
                    if (facultad.IdFacultad == asignada.IdFacultad) {
                        estaAsignada = true;
                        break;
                    }
                }
                if (!estaAsignada && idsNoAsignadas.indexOf(facultad.IdFacultad) == -1) {
                    listaNoAsignadas.push(facultad);
                    idsNoAsignadas.push(facultad.IdFacultad);
                }
                listCheck[facultad.IdFacultad] = false;
            }
            scope.listaFacultadesNoAsignadas = listaNoAsignadas;
            scope.listaChecks = listCheck;
        }
        /**
        * Asigna las facultades seleccinadas la usuario.
        **/
        private guardar() {
            var self = this;
            var scope = self.$scope;
            var idRol = scope.filtroChosenTop.IdRol;
            var listaFacultades = scope.listaFacultadesAsignadas;
            var url = AbaxXBRLConstantes.ASIGNA_FACULTADES_ROL_PATH;
            var idsFacultades = new Array<number>();
            for (var index = 0; index < listaFacultades.length; index++){idsFacultades.push(listaFacultades[index].IdFacultad);}
            var json = angular.toJson(idsFacultades);
            var onSucess = function (response: any) { self.onGuardarSucess(response.data); };
            var onError = self.abaxXBRLRequestService.getOnErrorDefault();
            scope.guardando = true;
            self.abaxXBRLRequestService.post(url, { "listaJson": json, "idRol": idRol.toString() }).then(onSucess,onError);

        }
        /**
        * Procesa el resultado de la respuesta al evento guardar del servidor.
        * @resultado Resultado obtenido de la operación.
        **/
        private onGuardarSucess(resultado: shared.modelos.IResultadoOperacion) {
            var self = this;
            var util = shared.service.AbaxXBRLUtilsService;
            var rol = self.$scope.filtroChosenTop;
            if (resultado.Resultado) {
                var mensaje = util.getValorEtiqueta("MENSAJE_EXITO_ACTUALIZAR_FACULTADES_ROL", { "NOMBRE_ROL": rol.Nombre });
                util.ExitoBootstrap(mensaje);
                self.$state.go("inicio.roles");
            } else {
                console.log(resultado.Mensaje);
                var mensaje = util.getValorEtiqueta("MENSAJE_ERROR_ACTUALIZAR_FACULTADES_ROL", { "NOMBRE_ROL": rol.Nombre });
                util.ErrorBootstrap(mensaje);
            }
            self.$scope.guardando = false;
        }

        /**
        * Busca de un arreglo de facultades aquellas que esten checadas y las retorna.
        * @param facultades Lista de facultades a evaluar.
        * @return Lista de facultades que están checadas del listado ingresado.
        **/
        private getElementosChecados(fcultades: Array<shared.modelos.IFacultad>): Array<shared.modelos.IFacultad> {
            var checks = this.$scope.listaChecks;
            var facultadesChecadas = new Array<shared.modelos.IFacultad>();
            for (var indexFacultad = 0; indexFacultad < fcultades.length; indexFacultad++) {
                var facultad = fcultades[indexFacultad];
                if (checks[facultad.IdFacultad]) {
                    facultadesChecadas.push(facultad);
                }
            }

            return facultadesChecadas;
        }

        /**
        * Compara la facultad contra una categoria para determinar si son iguales.
        * @param facultad Entidad de tipo facultad a comparar.
        * @param categoriaFacultad Entidad de tipo categoria facutad a comparar.
        * @result Retorna ture si la categoria es undefined o si tiene el mismo IdCategoriaFacultad que la facultad. Retorna false para cualquier otro caso.
        **/
        private comparaCategoriaFacultades(facultad: shared.modelos.IFacultad, categoriaFacultad: shared.modelos.ICategoriaFacultad): boolean {
            if (!categoriaFacultad || categoriaFacultad == null || !categoriaFacultad.IdCategoriaFacultad) {
                return true;
            }
            var mismaCategoria:boolean = categoriaFacultad.IdCategoriaFacultad == facultad.IdCategoriaFacultad;
            return mismaCategoria;
        }
        

        /**
        * Asinga las facultades seleccionadas.
        **/
        private asignarTodos(): void{
            var scope = this.$scope;
            var visibles = filters.AbaxXBRLAsignarFilter.getResultadoFiltro('noAsignadasVisibles');
            var elementos = this.getElementosChecados(visibles);
            var origen = scope.listaFacultadesNoAsignadas;
            var destino = scope.listaFacultadesAsignadas;

            shared.service.AbaxXBRLUtilsService.mueveElementosDeArreglo(origen, destino, elementos, 'IdFacultad');
        }

        /**
        * Quita las facultades seleccionadas.
        **/
        private quitarTodos():void {
            var scope = this.$scope;
            var visibles = filters.AbaxXBRLAsignarFilter.getResultadoFiltro('asignadasVisibles');
            var elementos = this.getElementosChecados(visibles);
            var origen = scope.listaFacultadesAsignadas;
            var destino = scope.listaFacultadesNoAsignadas;

            shared.service.AbaxXBRLUtilsService.mueveElementosDeArreglo(origen, destino, elementos, 'IdFacultad');
        }
        /**
        * Asigna el valor al check de facultades para la lista de facultades dadas.
        * @param facultades Lista de facultades a evaluar.
        * @param value Valor que se asignara al check correspondiente.
        **/
        private setCheckValue(facultades, value) {
            if (facultades && facultades.length > 0) {
                var checks = this.$scope.listaChecks;
                for (var indexFacultad = 0; indexFacultad < facultades.length; indexFacultad++) {
                    var facultad = facultades[indexFacultad];
                    checks[facultad.IdFacultad] = value;
               }
            }
        }
        
        /**Inicializa los elementos del constructor.**/
        private init(): void {
            var self = this;
            var scope = self.$scope;

            scope.cargandoCategoriasFacultades = true;
            scope.cargandoFacultades = true;
            scope.cargandoFacultadesAsignadas = true;
            scope.cargandoRoles = true;
            scope.guardando = false;

            scope.asignadasVisibles = [];
            scope.noAsignadasVisibles = [];

            scope.guardar = function () { self.guardar() };
            scope.asignarTodos = function () { self.asignarTodos(); };
            scope.quitarTodos = function () { self.quitarTodos(); };

            scope.comparaFiltroIzquierda = function (facultad: shared.modelos.IFacultad, indice: number): boolean {
                return self.comparaCategoriaFacultades(facultad, scope.filtroChosenLeft);
            }

            scope.comparaFiltroDerecha = function (facultad: shared.modelos.IFacultad, indice:number):boolean {
                return self.comparaCategoriaFacultades(facultad, scope.filtroChosenRight);
            }

            

            scope.$watch('checkAllLeft', function () {
                if (scope.checkAllLeft != undefined) {
                    var arreglo = filters.AbaxXBRLAsignarFilter.getResultadoFiltro('asignadasVisibles');
                    self.setCheckValue(arreglo, scope.checkAllLeft);
                }
            });
            scope.$watch('checkAllRight', function () {
                if (scope.checkAllRight != undefined) {
                    var arreglo = filters.AbaxXBRLAsignarFilter.getResultadoFiltro('noAsignadasVisibles');
                    self.setCheckValue(arreglo, scope.checkAllRight);
                }
            });

            scope.obtenFacultadesRol = function () { self.obtenFacultadesRol(); };

            self.obtenListadoCategoriasFacultades();
            self.obtenRoles();
        }

        /**
         * Constructor de las instancias de la clase.
         * @param $scope Scope actual del login.
         * @param abaxXBRLRequestService Servicio para el envio de solicitudes al servidor.
         * @param $state Servicio para el cambio de estado de las vistas del sitio. 
        **/
        constructor($scope: AbaxXBRLFacultadesRolesIndexScope, abaxXBRLRequestService: shared.service.AbaxXBRLRequestService, $state: ng.ui.IStateService) {
            this.$scope = $scope;
            this.abaxXBRLRequestService = abaxXBRLRequestService;
            this.$state = $state;
            this.init();
        }
    }
    AbaxXBRLFacultadesRolesController.$inject = ['$scope', 'abaxXBRLRequestService', '$state'];
}
     