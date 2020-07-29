module abaxXBRL.shared.modelos {

    /**
    * Define una ecuación matematica para ser aplicada en la consulta de conceptos de una taxonomía.
    **/
    export interface IMultiplo {

        /**
        * Identificador de la entidad.
        **/
        IdMultiplo: number;
        /**
        * Identificador de la taxonomía.
        **/
        IdTaxonomiaXbrl: number;
        /**
        * Empresa a la que pertenece el múltiplo.
        **/
        IdEmpresa: number;
        /**
        * Nombre del múltiplo.
        **/
        Nombre: string;
        /**
        * Ecuación matematica a evaluar.
        **/
        Ecuacion: string;
        /**
        * Variables a consultar.
        **/
        Variables: Array<IVariableMultiplo>;

    }
} 