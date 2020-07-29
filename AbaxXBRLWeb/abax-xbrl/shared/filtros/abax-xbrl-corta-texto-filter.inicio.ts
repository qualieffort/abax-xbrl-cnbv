module abaxXBRL.filters {
    /**
    * Filtro angular para cortar texto y completar con ...
    **/
    export class AbaxXBRLCortaTextoFilter {

        /**
        * Retorna el provedor delfiltro.
        **/
        public static factory(): any {
            //Retornamos el filtro.
            return function (value, max, tail, wordwise) {
                if (!value) return '';

                max = parseInt(max, 10);
                if (!max) return value;
                if (value.length <= max) return value;

                value = value.substr(0, max);
                if (wordwise != false) {
                    var lastspace = value.lastIndexOf(' ');
                    if (lastspace != -1) {
                        value = value.substr(0, lastspace);
                    }
                }
                return value + (tail || ' …');
            };
        }
    }
}