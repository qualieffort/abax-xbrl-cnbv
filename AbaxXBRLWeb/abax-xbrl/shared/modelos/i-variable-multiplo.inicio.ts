module abaxXBRL.shared.modelos {

    /**
    * Define una variable para ser utilizada en la ecuación de un multiplo.
    **/
    export interface IVariableMultiplo {

        
        /**
        * Identificador único de la entidad.
        ***/
        IdVariableMultiplo: number;

        /**
        * Identificador del múltiplo al que pertenece la variable.
        **/
        IdMultiplo: number;
        /**
        * Identificador del concepto.
        **/
        IdConcepto: string;
        /**
        * Nombre de la variable.
        **/
        Nombre: string;
        
        /**
        * Fecha inicial del arngo de contexto.
        **/
        FechaInicio: string;

        /**
        * Fecha limite del rango del contexto.
        **/
        FechaFin: string;

    }
}  