module abaxXBRL {

    /**
    * Interface que define los elementos de estilo que serán aplicados en Abax XBRL.
    **/
    export interface IAbaxXBRLEstilo {
        /**
        * Contiene el src del logo horizontal de la aplicación.
        **/
        imagenHorizontal: string;
        /**
        * Valor del atributo src que será asignado al logo minificado de la barra de tareas.
        **/
        logoMini: string;
        /**
        * Arreglo con dependencias de estilo adicionales (*.css).
        **/
        dependenciasCss?: Array<string>;
    }

    /**
    * Clase que contiene las definiciones de estilo de AbaxXBRL.
    **/
    export class AbaxXBRLEstilos {

        /**
        * Diccionario con las definiciones de estilos.
        **/
        public static DEFINICION: { [nombre: string]: IAbaxXBRLEstilo } = {
            "default": {
                imagenHorizontal: "logo_cnbv.png",
                logoMini: "logo_cnbv_loading.png",
                dependenciasCss: ["css/cnbv.css?version=" + root.AbaxXBRLConstantesRoot.VERSION_APP.version + "&tipo=.css"]
            },
            "gnf": {
                imagenHorizontal: "logo_gnf_horizontal.png",
                logoMini: "logo_gnf_mini.png",
                dependenciasCss: ["css/gnf.css?version=" + root.AbaxXBRLConstantesRoot.VERSION_APP.version + "&tipo=.css"]
            },
            "abax": {
                imagenHorizontal: "logo_abax_horizontal.png",
                logoMini: "logo_abax_mini.png",
            },
            "cnbv": {
                imagenHorizontal: "logo_cnbv.png",
                logoMini: "logo_cnbv_loading.png",
                dependenciasCss: ["css/cnbv.css?version=" + root.AbaxXBRLConstantesRoot.VERSION_APP.version + "&tipo=.css"]
            }
        }
    }

}  