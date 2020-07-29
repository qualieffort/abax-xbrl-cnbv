/// <reference path="../../../shared/services/abax-xbrl-session-service.root.ts" />


module abaxXBRL.componentes.controllers {

    /**Contrato con la definición de los elementos del scope para la barra de navegación izquierda del sitio. **/
    export interface IAbaxXbrlBarraNavegacionIzquierdaScope extends IAbaxXBRLInicioScope{
        /**Bandera que indica si se debe de colapsar el sub menú de configurar **/
        colapsarSubmenuConfigurar: boolean;
        /**Bandera que indica si se debe de colapsar el sub menú  del Editor XBRL**/
        colapsarSubmenuEditorXbrl: boolean;
        /**Bandera que indica si se debe de colapsar el submenú de consultas. **/
        colapsarSubmenuConsulta: boolean;
        /**Bandera que indica si se debe de colapsar el submenú de bitacoras. **/
        colapsarSubmenuBitacora: boolean;
        /**Bandera que indica si se debe de colapsar el submenú de bitacoras. **/
        colapsarReportes: boolean;
        /** Url para levantar tickets de soporte por parte de las emisoras*/
        urlSoporteTecnico: string;
        /**
        * Bandera que indica si el usuario tiene facultades de configuración.
        **/
        tieneFacultadesConfiguracion: boolean;
        /**
        * Bandera que indica si el usuario tiene facultades consultar la bitacora de versionamiento de documentos.
        **/
        tieneFacultadBigacoraVersionDocumentos: boolean;
        /**
        * Bandera que indica si el usuario tiene facultad de  consultar empresa.
        **/
        tieneFacultadConsultaEmpresas: boolean;
        /**
        * Bandera que indica si el usuario tiene la facultad de consultar los tipos de empresa.
        **/
        tieneFacultadConsultarTipoEmpresas: boolean;
        /**
        * Bandera que indica si el usuario tiene la facultad de consultar los grupos de empresa.
        **/
        tieneFacultadConsultarGrupoEmpresa: boolean;
        /**
        * Bandera que indica si el usuario tiene facultad para consultar taxonomias.
        **/
        tieneFacultadConsultarTaxonomias: boolean;
        /**
        * Bandera que indica si el usuario tiene facultad de consultar roles.
        **/
        tieneFacultadConsultaRoles: boolean;
        /**
        * Bandera que indica si el usuario tiene facultad de conslutar grupos.
        **/
        tieneFacultadConsultaGrupos: boolean;
        /**
        * Bandera que indica si el usuario tiene facultad de  consultar usuarios.
        **/
        tieneFacultadConsultaUsuarios: boolean;
        /**
        * Bandera que indica si el usuario tiene facultad de consultar usuarios misma empresa.
        **/
        tieneFacultadConsultaUsuariosMismaEmpresa: boolean;
        /**
        * Bandera que indica si el usuario tiene facultad de consultar datos de bitacora.
        **/
        tieneFacultadConsultarDatosBitacora: boolean;
        /**
        * Bandera que indica si el usuario tiene la facultad de consultar los parametros del sistema.
        **/
        tieneFacultadConsultarParametroSistema: boolean;
        /**
        * Bandera que indica si el usuario tiene la facultad para consultar las listas de notificacion.
        **/
        tieneFacultadListasNotificacion: boolean;
        /**
        * Bandera que indica si el usuario tiene la facultad para acceder a la consulta de repositorios.
        **/
        tieneFacultadConsultasRepositorio: boolean;
        /**
        * Bandera que indica si el usuario tiene la facultad para acceder a la consulta generica del repositorio XBRL.
        **/
        tieneFacultadConsultarRepositorioXBRL: boolean;
        /**
        * Bandera que indica si se debe de mostrar las opciones de consulta.
        **/
        tieneFacultadesConsultas: boolean;
        /** Version publicada del control de versiones. **/
        versionApp: string;

        /**
        *   Indicador si se trata de un single sign on 
        */
        sso: boolean
        /**
        * Facultad para acceder al listado de consultas listadas.
        **/
        tieneFacultadConsultasListadas: boolean;
        /**
        * Facultad para acceder a las consultas personalizadas.
        **/
        tieneFacultadConsultasPersonalizadas: boolean;

    }
    /**Controlador de la vista de la barra de navegación izquierda del sitio. **/
    export class AbaxXBRLBarraNavegacionInicioController {
        /**Scope actual del componente **/
        private $scope: IAbaxXbrlBarraNavegacionIzquierdaScope;
        /**Servicio para el manejo de la sesion. **/
        private abaxXBRLSessionService: shared.service.AbaxXBRLSessionService;
        /**Servicio para el cambio de estado de las vistas dentro del sitio. **/
        private $state: ng.ui.IStateService = null;

        /**
       * Determina si el usuario tiene facultades de configuración.
       **/
        private tieneFacultadesConfiguracion(): boolean {
            var scope = this.$scope;
            var tieenFacultadConfiguracion =
                scope.tieneFacultadConsultaEmpresas || scope.tieneFacultadConsultaRoles ||
                scope.tieneFacultadConsultaGrupos || scope.tieneFacultadConsultaUsuarios ||
                scope.tieneFacultadConsultaUsuariosMismaEmpresa || scope.tieneFacultadConsultarDatosBitacora || scope.Facultad["Inicio_Fideicomisos"];
                scope.tieneFacultadConsultarTipoEmpresas || scope.tieneFacultadConsultarTaxonomias ||
                scope.tieneFacultadConsultarGrupoEmpresa || scope.tieneFacultadConsultarParametroSistema || scope.tieneFacultadListasNotificacion;
            return tieenFacultadConfiguracion;
        }
        /**
        * Determina si se tene al menos úna facultad para el sub menún de consultas.
        **/
        private tieneFacultadesConsulta(): boolean {
            var $scope = this.$scope;
            var tieneFacultadesConsultas = $scope.tieneFacultadConsultasRepositorio || $scope.tieneFacultadConsultarRepositorioXBRL;
            return tieneFacultadesConsultas;
        }

        /**Inicializa los elementos del controller. **/
        private init(): void {
            //proxy de la instancia
            var self: AbaxXBRLBarraNavegacionInicioController = this;
            var scope: IAbaxXbrlBarraNavegacionIzquierdaScope = self.$scope;

            scope.Facultad = {};
            scope.colapsarSubmenuConfigurar = true;
            scope.colapsarSubmenuEditorXbrl = true;
            scope.colapsarSubmenuConsulta = true;
            scope.colapsarSubmenuBitacora = true;
            scope.colapsarReportes = true;
            
            scope.sso = shared.service.AbaxXBRLSessionService.getAtributoSesion(shared.service.AbaxXBRLSessionService.AUTENTICACION_SSO_NAME);
            scope.FacultadesEnum = AbaxXBRLFacultadesEnum;
            scope.cerrarAlertaBootstrap = shared.service.AbaxXBRLUtilsService.cerrarAlertaBootsrap;
            scope.alertasBootstrap = shared.service.AbaxXBRLUtilsService.getListaAlertasBootsrap();
            scope.urlSoporteTecnico = AbaxXBRLConstantes.URL_SOPORTE_TECNICO;

            var sesion = shared.service.AbaxXBRLSessionService;
            var FacultadesEnum = AbaxXBRLFacultadesEnum;

            scope.tieneFacultadConsultaEmpresas = sesion.tieneFacultad(FacultadesEnum.ConsultaEmpresas);
            scope.tieneFacultadConsultarTipoEmpresas = sesion.tieneFacultad(FacultadesEnum.ConsultarListadoTiposEmpresa);
            scope.tieneFacultadConsultarGrupoEmpresa  = sesion.tieneFacultad(FacultadesEnum.ConsultarListadoGrupoEmpresas);
            scope.tieneFacultadConsultarTaxonomias = sesion.tieneFacultad(FacultadesEnum.ConsultarTaxonomias);
            scope.tieneFacultadConsultaRoles = sesion.tieneFacultad(FacultadesEnum.ConsultaRoles);
            scope.tieneFacultadConsultaGrupos = sesion.tieneFacultad(FacultadesEnum.ConsultaGrupos);
            scope.tieneFacultadConsultaUsuarios = sesion.tieneFacultad(FacultadesEnum.ConsultaUsuarios);
            scope.tieneFacultadConsultaUsuariosMismaEmpresa = sesion.tieneFacultad(FacultadesEnum.ConsultaUsuariosMismaEmpresa);
            scope.tieneFacultadConsultarDatosBitacora = sesion.tieneFacultad(FacultadesEnum.ConsultarDatosBitacora);
            scope.tieneFacultadConsultasListadas = sesion.tieneFacultad(FacultadesEnum.ConsultasListadas);
            scope.tieneFacultadConsultasPersonalizadas = sesion.tieneFacultad(FacultadesEnum.ConsultasPersonalizadas); 
            scope.tieneFacultadBigacoraVersionDocumentos = sesion.tieneFacultad(FacultadesEnum.ConsultarBitacoraVersionDocumento);
            scope.tieneFacultadConsultarParametroSistema = sesion.tieneFacultad(FacultadesEnum.ConsultarListadoTiposEmpresa);
            scope.tieneFacultadListasNotificacion = sesion.tieneFacultad(FacultadesEnum.ConsultarListaNotificacion);
            scope.tieneFacultadConsultasRepositorio = sesion.tieneFacultad(FacultadesEnum.ConsultarConsultasRepositorio);
            scope.tieneFacultadConsultarRepositorioXBRL = sesion.tieneFacultad(FacultadesEnum.ConsultarRepositorioXBRL);
            /** Version publicada del control de versiones. **/
            scope.versionApp = root.AbaxXBRLConstantesRoot.VERSION_APP.etiquetaVersion;

            scope.Facultad = shared.service.AbaxXBRLSessionService.getDiccionarioFacultades();
            scope.tieneFacultadesConfiguracion = self.tieneFacultadesConfiguracion();
            scope.tieneFacultadesConsultas = self.tieneFacultadesConsulta();
        }
        /**
        * Constructor base de la clase
        * @param $scope Scope actual del login.
        * @param abaxXBRLSessionService Servicio para el manejo de la sesion.
        **/
        constructor($scope: IAbaxXbrlBarraNavegacionIzquierdaScope, abaxXBRLSessionService: shared.service.AbaxXBRLSessionService, $state: ng.ui.IStateService) {
            this.$scope = $scope;
            this.abaxXBRLSessionService = abaxXBRLSessionService;
            this.$state = $state;
            this.init();
        }
    }
    AbaxXBRLBarraNavegacionInicioController.$inject = ['$scope', 'abaxXBRLSessionService','$state'];
} 