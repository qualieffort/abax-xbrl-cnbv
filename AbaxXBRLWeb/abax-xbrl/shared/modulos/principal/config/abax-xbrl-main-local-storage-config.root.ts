/// <reference path="../../../../../scripts/typings/angular-local-storage/angular-local-storage.d.ts" />


module abaxXBRL.localStorage {

    /**Clase para la configurasión del local-storage **/
    export class AbaxXBRLLocalStorage {

        /** 
        * Constructor base que recibe el provider del servicio al que se le asignan las propiedades iniciales.
        **/
        constructor(localStorageServiceProvider: ng.local.storage.ILocalStorageServiceProvider) {
            localStorageServiceProvider
                .setPrefix('abaxXBRL_')
                .setStorageType('localStorage')
                .setNotify(true, true)
        }
    }

    AbaxXBRLLocalStorage.$inject = ['localStorageServiceProvider'];

}  