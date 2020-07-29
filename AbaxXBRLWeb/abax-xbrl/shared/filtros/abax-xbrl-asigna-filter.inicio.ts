module abaxXBRL.filters {

    /**
    * Filtro que te permite recuperar el resultado de un filtrado.
    **/
    export class AbaxXBRLAsignarFilter {

        /**
        * Diccionario con las copias de los elementos buscados.
        **/
        private static DIRECTORIO_RESULTADOS: { [nombre: string]: any } = {};

        /**
        * Obtiene el resultado de un filtrado si es que existe.
        * @param Nombre del resultado del filtro buscado.
        **/
        public static getResultadoFiltro(nombre: string) {

            return AbaxXBRLAsignarFilter.DIRECTORIO_RESULTADOS[nombre];
        }

        /**
        * Retorna el provedor delfiltro.
        **/
        public static factory(): any {
            //Retornamos el filtro.
            return function (origen: any, nombre: string) {
                return AbaxXBRLAsignarFilter.filtra(origen, nombre);
            }

        }
        /**
        * Asigna el origen al destino.
        * @origen Resultado arrojado por otros filtros.
        * @nombre Nombre del resultado del filtro donde será asignado.
        **/
        private static filtra(origen: any, nombre: string): any {
            AbaxXBRLAsignarFilter.DIRECTORIO_RESULTADOS[nombre] = angular.copy(origen);
            return origen;
        }
    }
}