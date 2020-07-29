module abaxXBRL.shared.modelos {

    /**
    * Estructura que define los elementos necearios para llevar un control de paginación simple.
    **/
    export interface IPaginacionSimple<T> {
        /**
        * Total de registros existentes.
        **/
        TotalRregistros: number;
        /**
        * Cantidad de registros a mostrar en una sola página.
        **/
        RegistrosPorPagina: number;
        /**
        * Página que se esta mostrando actualmente.
        **/
        PaginaActual: number;

        /**
        * Muestra el total de registros que muestra.
        **/
        RegistrosMostrando?: number;

        /**Numro de paginas que se tienen*/
        NumeroPaginas?: Array<number>;

        
        /**
        * Diccionario para definir un ordenamiento de los datos en el cual se indica el nombre del campo por el cuar se va ha ordenar el tipo de ordenamiento.
        * 0.- Acendente.
        * 1.- Decendente.
        **/
        Ordenamiento?: { [nombreColumna: string]: number }
        /**
        * Diccionario con los parametros para filtrar.
        **/
        Filtro?: { [parametro: string]: string };
        /**
        * Lista con los registros retornados para desplegarse en la página acutal.
        **/
        ListaRegistros?: Array<T>;
    }
} 