module abaxXBRL.shared.modelos {

    /**
    * Enum con los distintos tipos de datos soportados por un elemento de un listado de detalle.
    **/
    export enum TipoElementoListadoDetalleEnum {
        /**
        * Texto plano.
        **/
        Text = 1,
        /**
        * Texto que será contenido dentro de un div con scroll automatico.
        **/
        TextScrollable = 2,
    }
    /**
    * Elemento de un listado de detalles a presentar en un dialogo.
    **/
    export interface IElementoListaDetalle
    {
        /**
        * Título para presentar el campo.
        **/
        Titulo: string;
        /**
        * Valor del campo que será desplegado.
        **/
        Valor: string;
        /**
        * Tipo utilizado para presentar el campo.
        **/
        Tipo: TipoElementoListadoDetalleEnum;
        /**
        * Clase con las reglas de estilo que se aplicarán al título.
        **/
        ClaseTitulo?: string;
        /**
        * Clase con las reglas de estilo que se aplicarán al varlo.
        **/
        ClaseValor?: string;
    }
} 