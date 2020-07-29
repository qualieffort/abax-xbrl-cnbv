module abaxXBRL.shared.modelos {

    /**
    * Estrucutra con la información necesaria para desplegar un dialogo de confirmación.
    **/
    export interface IConfiguracionDialogoConfirmacion {

        /**
        * Clase del icono a utilizar en el titulo por defecto es un check.
        **/
        claseIconoTitulo?: string;
        /**
        * Clase que asigna el color a la cabecera del dialogo.
        **/
        claseTitulo?: string;
        /**
        * Texto a mostrar como título.
        **/
        textoTititulo?: string;
        /**
        * Parametros que se agregaran al texto.
        **/
        parametrosTexto?: {[nombre:string]: string};
        /**
        * Texto a mostrar.
        **/
        texto: string;
    }
} 