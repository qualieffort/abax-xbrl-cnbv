module abaxXBRL.shared.modelos {

    /**
    * Opciones para el procesamiento de un proceso asincrono.
    **/
    export interface IOpcionesAsyncTask {
        /**
        * Identificador del proceso al que será asignado el proceso.
        **/
        Name: string;
        /**
        * Proceso que será ejecutado por el hilo.
        **/
        Process: Function;
        /**
        * Milisegundos que transcurren entre cada ejecución del proceso.
        * Si no se indica se entiede que debe de estar ejecutandoce de forma permanente (esto implica un mayor costo de procesamiento y recursos de CPU).
        **/
        Timeout?: number;
        /**
        * Es "true" si el proceso sustituirá a el conjunto de procesos ya asignados al hilo.
        * Es "false" si el proceso se agregara como parte del conjunto de operaciones a ejecutar por el hilo en cada intervalo. 
        * Por defecto es "true".
        **/
        Replace?: boolean;
        /**
        * Identificador del hilo (intervalo) que esta ejecutando los procesos asignados.
        * Este dato se llena en como respuesta del proceso de asingación, no se puede asignar y si se asinga no se toma en cuenta.
        **/
        IdMainTask?: number;
        /**
        * Lista de proceso a ejecutarse por el hilo.
        * Este dato se llena en como respuesta del proceso de asingación, no se puede asignar.
        **/
        ProcessListLength?: number;
        /**
        * Objeto o elemento que se utilizará para ejecutar el proceso asignado.
        * Si no se indica pueden precentarse problemas de referencia al utilizar el elemento this dentro de proceso.
        **/
        Executor?: any;
        /**
        * Indica si este proceso se ejecutara una y otra vez de forma constante o si solo se ejecutará una sola vez.
        * Por defecto es false.
        **/
        Repeat?: boolean;
        /**
        * Promesa de la ejecución del proceso, solo aplica cuando el proceso no se repite.
        **/
        Promise?: ng.IPromise<any>;
        /**
        * Indica si se debe de iniciar la ejecución del hilol en la definición del proceso.
        * Es decir si se ejecuta cuando se pasas el handler en el método setAsyncTask.
        * Por defecto es true.
        **/
        StartOnDefine?: boolean;
    }
}