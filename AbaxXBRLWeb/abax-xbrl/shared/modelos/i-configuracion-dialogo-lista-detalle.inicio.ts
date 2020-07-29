module abaxXBRL.shared.modelos {

    /**
    * Estrucutra con la información necesaria para desplegar un dialogo con los detalles del listado de datos.
    **/
    export interface IConfiguracionDialogoListaDetalle {

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
        parametrosTexto?: { [nombre: string]: string };
        /**
        * Listado con los elementos a desplegar en el dialogo.
        **/
        datos: Array<IElementoListaDetalle>;
    }
} 