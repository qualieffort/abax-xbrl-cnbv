/// <reference path="../../../filtros/abax-xbrl-asigna-filter.inicio.ts" />
/// <reference path="../../../filtros/abax-xbrl-asigna-filter.inicio.ts" />
/// <reference path="../../../../../scripts/typings/oclazyload/oclazyload.d.ts" />


module abaxXBRL.dependenciesLoader {

    /**Clase que configura las dependencias de cada uno de los modulos angular que se cargan en la vista del sistema (excepto el modulo raíz) **/
    export class AbaxXBRLDependencyLoadConfig {
        /**Provedor del servicio a configurar. **/
        private $ocLazyLoadProvider: oc.ILazyLoadProvider;

        /**
        * Crea la configuración para el modulo de toda la sección de inicio (Home) que se carga una vez que se inicia sesión. 
        * @return Definición del nombre y las dependencias del modulo.
        **/
        private static get CONFIGURACION_MODULO_INICIO(): oc.ILazyLoadModuleConfig {
            var config: oc.ILazyLoadModuleConfig = {
                //Nombre del modulo
                name: root.AbaxXBRLConstantesRoot.NOMBRE_MODULO_ABAX_XBRL_INICIO,
                //Dependencias
                files: [
                    //Estilos css
                    "/Scripts/chosen/chosen.css",
                    "/Scripts/chosen/chosen-spinner.css",
                    //Archivos no TS
                    "/js/autoNumeric/autoNumeric-1.9.22.js",
                    "/Scripts/chosen/chosen.jquery.min.js",
                    "/Scripts/chosen/chosen.js",
                    "/Scripts/moment/moment.js",
                    "/Scripts/dirPagination.js",
                    "/Scripts/FileSaver.min.js",
                    //Constantes
                    "/abax-xbrl/shared/constantes/abax-xbrl-constantes.inicio.js",
                    "/abax-xbrl/shared/constantes/abax-xbrl-tipo-contexto-enum.inicio.js",
                    "/abax-xbrl/shared/constantes/abax-xbrl-facultades.inicio.js",
                    //Modelos
                    "/abax-xbrl/shared/modelos/i-accion-auditable.inicio.js",
                    "/abax-xbrl/shared/modelos/i-alerta.inicio.js",
                    "/abax-xbrl/shared/modelos/i-contexto.inicio.js",
                    "/abax-xbrl/shared/modelos/i-documento-instancia.inicio.js",
                    "/abax-xbrl/shared/modelos/i-empresa.inicio.js",
                    "/abax-xbrl/shared/modelos/i-modulo.inicio.js",
                    "/abax-xbrl/shared/modelos/i-registro-auditoria.inicio.js",
                    "/abax-xbrl/shared/modelos/i-resultado-operacion.root.js",
                    "/abax-xbrl/shared/modelos/i-consulta-repositorio.inicio.js",
                    "/abax-xbrl/shared/modelos/i-hecho.inicio.js",
                    "/abax-xbrl/shared/modelos/i-facultad.inicio.js",
                    "/abax-xbrl/shared/modelos/i-rol.inicio.js",
                    "/abax-xbrl/shared/modelos/i-alerta-bootsrap.inicio.js",
                    "/abax-xbrl/shared/modelos/i-alerta-bootsrap.inicio.js",
                    "/abax-xbrl/shared/modelos/i-categoria-facultad.inicio.js",
                    "/abax-xbrl/shared/modelos/i-grupo-usuarios.inicio.js",
                    "/abax-xbrl/shared/modelos/i-material-apoyo.inicio.js",

                    //Controllers
                    "/abax-xbrl/componentes/inicio/cabecera/abax-xbrl-cabecera-inicio-controller.inicio.js",
                    "/abax-xbrl/componentes/inicio/barra-navegacion/abax-xbrl-barra-navegacion-inicio-controller.inicio.js",
                    "/abax-xbrl/componentes/contenido/panel-control/abax-xbrl-panel-control-controller.inicio.js",
                    "/abax-xbrl/componentes/contenido/alertas/abax-xbrl-alertas-controller.inicio.js",
                    "/abax-xbrl/componentes/contenido/consulta-repositorio/abax-xbrl-consulta-repositorio-controller.inicio.js",
                    "/abax-xbrl/componentes/contenido/roles/index/abax-xbrl-roles-index-controller.inicio.js",
                    "/abax-xbrl/componentes/contenido/roles/borrar-rol/abax-xbrl-borrar-rol-controller.inicio.js",
                    "/abax-xbrl/componentes/contenido/roles/facultades-rol/abax-xbrl-facultades-rol-controller.inicio.js",
                    "/abax-xbrl/componentes/contenido/empresa/indice/abax-xbrl-indice-empresa-controller.inicio.js",
                    "/abax-xbrl/componentes/contenido/empresa/agrega/abax-xbrl-agrega-empresa-controller.inicio.js",
                    "/abax-xbrl/componentes/contenido/empresa/edita/abax-xbrl-edita-empresa-controller.inicio.js",
                    "/abax-xbrl/componentes/contenido/empresa/elimina/abax-xbrl-elimina-empresa-controller.inicio.js",
                    "/abax-xbrl/componentes/contenido/usuario/indice/abax-xbrl-indice-usuario-controller.inicio.js",
                    "/abax-xbrl/componentes/lista-documentos-instancia/elimina/abax-xbrl-elimina-documento-instancia-controller.inicio.js",

                    "/abax-xbrl/componentes/contenido/usuario/agrega/abax-xbrl-agrega-usuario-controller.inicio.js",
                    "/abax-xbrl/componentes/contenido/usuario/edita/abax-xbrl-edita-usuario-controller.inicio.js",
                    "/abax-xbrl/componentes/contenido/usuario/elimina/abax-xbrl-elimina-usuario-controller.inicio.js",
                    "/abax-xbrl/componentes/contenido/usuario/cambia_contrasena/abax-xbrl-cambia-contrasena-usuario-controller.inicio.js",
                    "/abax-xbrl/componentes/contenido/usuario/asigna_emisoras/abax-xbrl-asigna-emisoras-usuario-controller.inicio.js",
                    "/abax-xbrl/componentes/contenido/grupos/index/abax-xbrl-grupos-index-controller.inicio.js",
                    "/abax-xbrl/componentes/contenido/grupos/asignar-roles/abax-xbrl-roles-grupos-controller.inicio.js",
                    "/abax-xbrl/componentes/contenido/grupos/asignar-usuarios/abax-xbrl-usuarios-grupo-controller.inicio.js",
                    "/abax-xbrl/componentes/contenido/usuario/asignar-rol/abax-xbrl-roles-usuarios-controller.inicio.js",
                    "/abax-xbrl/componentes/contenido/bitacora/index/abax-xbrl-bitacora-controller.inicio.js",
                    "/abax-xbrl/componentes/contenido/ayuda/abax-xbrl-ayuda-controller.js",
                    "/abax-xbrl/componentes/editor-xbrl/abax-xbrl-editor-xbrl-controller.inicio.js",
                    "/abax-xbrl/componentes/visor-xbrl/abax-xbrl-visor-xbrl-controller.inicio.js",
                    '/abax-xbrl/componentes/lista-documentos-instancia/abax-xbrl-lista-documentos-instancia-controller.inicio.js',
                    //Directivas
                    "/abax-xbrl/componentes/inicio/cabecera/abax-xbrl-cabecera-inicio-directive.inicio.js",
                    "/abax-xbrl/componentes/inicio/barra-navegacion/abax-xbrl-barra-navegacion-inicio-directive.inicio.js",
                    "/abax-xbrl/shared/directivas/splash-contenido/abax-xbrl-splash-contenido-directive.inicio.js",
                    "/abax-xbrl/shared/directivas/start-view-state/abax-xbr-estado-inicial-vista-directive.inicio.js",
                    "/abax-xbrl/shared/directivas/xbrl-autonumeric/xbrl-autonumeric.js",
                    "/abax-xbrl/shared/directivas/xbrl-resize/xbrl-resize.js",
                    //Filtros
                    "/abax-xbrl/shared/filtros/abax-xbrl-asigna-filter.inicio.js",
                    //Configuracion
                    "/abax-xbrl/shared/modulos/inicio/config/abax-xbrl-inicio-routes-config.inicio.js",
                    //Definicion del Modulo
                    "/abax-xbrl/shared/modulos/inicio/abax-xbrl-inicio-module.inicio.js"
                ],
                //Que no reconfigure el modulo una vez cargado.
                reconfig: false,
                //Que guarde cache de los archivos ya cargados.
                cache: true,
                //Que cargue los archivos en orden
                serie: true
            };
            return config;
        }

        /**
        * Crea la configuración para el modulo de toda la sección de xbrl. 
        * @return Definición del nombre y las dependencias del modulo.
        **/
        private static get CONFIGURACION_MODULO_EDITOR_XBRL(): oc.ILazyLoadModuleConfig {
            var config: oc.ILazyLoadModuleConfig = {
                //Nombre del modulo
                name: 'abaxXBRLViewer',
                //Dependencias
                files: [
                    "/js/datepicker/datepicker.css",
                    "/js/slider/slider.css",
                    "/js/chosen/chosen.css",
                    "/js/impromptu/jquery-impromptu.min.css",
                    "/js/intro/introjs.min.css",
                    "/js/toolbartip/jquery.toolbars.css",
                    "/js/chosen/chosen.css",
                    "/js/datatables/datatables.css",
                    "/css/layout-default.css",

                    "/js/app.js",
                    "/js/slimscroll/jquery.slimscroll.min.js",

                    "/js/datepicker/bootstrap-datepicker.js",
                    "/js/datepicker/locales/bootstrap-datepicker.es.js",

                    "/js/app.plugin.js",
                    "/js/jquery.ui.touch-punch.min.js",
                    "/js/jquery-ui-1.10.3.custom.min.js",
                    "/js/autocomplete/jquery.autocomplete.min.js",
                    "/js/impromptu/jquery-impromptu.min.js",
                    "/js/toolbartip/jquery.toolbar.js",

                    
                    "/Scripts/angular-animate.js",
                    "/Scripts/angular-cookies.min.js",
                    "/Scripts/angular-resource.min.js",
                    "/Scripts/angular-route.min.js",
                    "/Scripts/angular-sanitize.min.js",
                    "/Scripts/angular-file-upload-shim.min.js",
                    "/Scripts/angular-file-upload.min.js",
                    "/js/slimscroll/angular-slimscroll.js",
                    "/js/mask/masks.min.js",
                    "/js/autoNumeric/autoNumeric-1.9.22.js",
                    "/js/datepicker/moment.min.js",
                    "/js/ckeditor/ckeditor.js",
                    "/js/ngckeditor/angular-ckeditor.js",
                    
                    "/js/json/jquery.json.min.js",
                    "/js/math/math.min.js",
                    "/js/intro/intro.min.js",
                    "/js/angular-ui/ui-bootstrap-custom-0.12.0.min.js",
                    "/js/angular-ui/ui-bootstrap-custom-tpls-0.12.0.min.js",
                    "/js/angular-aside/angular-aside.js",
                    "/js/intro/angular-intro.min.js",
                    "/js/xml2json/xml2json.min.js",
                    "/js/livequery/jquery.livequery.js",
                    "/js/fileDownload/jquery.fileDownload.js",
                    "/js/fileDownload/jquery.fileDownload.js",
                    "/abax-xbrl/shared/directivas/xbrl-resize/xbrl-resize.js",

                    //"/ts/abax.min.js",

                    "/ts/utileriasAbax.js",
                    "/ts/modeloAbax.js",
                    "/ts/modeloPlantillaAbax.js",
                    "/ts/serviciosAbax.js",
                    "/ts/serviciosLogout.js",
                    "/ts/controladoresAbax.js",
                    "/ts/directivasAbax.js",
                    "/ts/elegirPlantillaAbax.js",
                    "/ts/directivasEditorGenerico.js",
                    "/ts/versionesDocumentoAbax.js",
                    "/ts/usuariosDocumentoAbax.js",
                    "/ts/elegirPlantillaAbax.js",
                    "/ts/editorXbrl.js"

                ],
                //Que no reconfigure el modulo una vez cargado.
                reconfig: false,
                //Que guarde cache de los archivos ya cargados.
                cache: true,
                //Que cargue los archivos en orden
                serie: true
            };
            return config;
        }

        /**
        * Crea la configuración para el modulo de toda la sección de xbrl. 
        * @return Definición del nombre y las dependencias del modulo.
        **/
        private static get CONFIGURACION_MODULO_VISOR_XBRL(): oc.ILazyLoadModuleConfig {
            var config: oc.ILazyLoadModuleConfig = {
                //Nombre del modulo
                name: 'abaxVisorXBRLViewer',
                //Dependencias
                files: [
                    "/js/datepicker/datepicker.css",
                    "/js/slider/slider.css",
                    "/js/chosen/chosen.css",
                    "/js/impromptu/jquery-impromptu.min.css",
                    "/js/intro/introjs.min.css",
                    "/js/toolbartip/jquery.toolbars.css",
                    "/js/chosen/chosen.css",
                    "/js/datatables/datatables.css",
                    "/css/layout-default.css",

                    "/js/app.js",
                    "/js/slimscroll/jquery.slimscroll.min.js",

                    "/js/datepicker/bootstrap-datepicker.js",
                    "/js/datepicker/locales/bootstrap-datepicker.es.js",

                    "/js/app.plugin.js",
                    "/js/jquery.ui.touch-punch.min.js",
                    "/js/jquery-ui-1.10.3.custom.min.js",
                    "/js/autocomplete/jquery.autocomplete.min.js",
                    "/js/impromptu/jquery-impromptu.min.js",
                    "/js/toolbartip/jquery.toolbar.js",


                    "/Scripts/angular-animate.js",
                    "/Scripts/angular-cookies.min.js",
                    "/Scripts/angular-resource.min.js",
                    "/Scripts/angular-route.min.js",
                    "/Scripts/angular-sanitize.min.js",
                    "/Scripts/angular-file-upload-shim.min.js",
                    "/Scripts/angular-file-upload.min.js",
                    "/js/slimscroll/angular-slimscroll.js",
                    "/js/mask/masks.min.js",
                    "/js/autoNumeric/autoNumeric-1.9.22.js",
                    "/js/datepicker/moment.min.js",
                    "/js/ckeditor/ckeditor.js",
                    "/js/ngckeditor/angular-ckeditor.js",

                    "/js/json/jquery.json.min.js",
                    "/js/math/math.min.js",
                    "/js/intro/intro.min.js",
                    "/js/angular-ui/ui-bootstrap-custom-0.12.0.min.js",
                    "/js/angular-ui/ui-bootstrap-custom-tpls-0.12.0.min.js",
                    "/js/angular-aside/angular-aside.js",
                    "/js/intro/angular-intro.min.js",
                    "/js/xml2json/xml2json.min.js",
                    "/js/livequery/jquery.livequery.js",
                    "/js/fileDownload/jquery.fileDownload.js",
                    "/abax-xbrl/shared/directivas/xbrl-resize/xbrl-resize.js",
                    "/ts/utileriasAbax.js",
                    "/ts/modeloAbax.js",
                    "/ts/modeloPlantillaAbax.js",
                    "/ts/serviciosAbax.js",
                    "/ts/serviciosLogout.js",
                    "/ts/controladoresAbax.js",
                    "/ts/visorDirectivasAbax.js",
                    "/ts/elegirPlantillaAbax.js",
                    "/ts/directivasEditorGenerico.js",
                    "/ts/versionesDocumentoAbax.js",
                    "/ts/usuariosDocumentoAbax.js",
                    "/ts/elegirPlantillaAbax.js",

                    "/ts/visorXbrl.js"
                ],
                //Que no reconfigure el modulo una vez cargado.
                reconfig: false,
                //Que guarde cache de los archivos ya cargados.
                cache: true,
                //Que cargue los archivos en orden
                serie: true
            };
            return config;
        }

        /**
        * Configura el servicio que carga los modulos angular con sus dependencias.
        * @param $ocLazyLoadProvider Provedor del servicio "$ocLazyLoad" que se va ha configurar.
        **/
        constructor($ocLazyLoadProvider: oc.ILazyLoadProvider) {

            $ocLazyLoadProvider.config({
                asyncLoader: undefined,
                modules: [AbaxXBRLDependencyLoadConfig.CONFIGURACION_MODULO_INICIO, AbaxXBRLDependencyLoadConfig.CONFIGURACION_MODULO_EDITOR_XBRL, AbaxXBRLDependencyLoadConfig.CONFIGURACION_MODULO_VISOR_XBRL]
            });

        }
    }
    //Arreglo con las depndencias a inyectar
    AbaxXBRLDependencyLoadConfig.$inject = ['$ocLazyLoadProvider'];
} 