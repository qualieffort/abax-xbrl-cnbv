/**
* Mapeo local del servicio para el manejo de excepciones de Raven.
* @author Oscar Ernesto Loyla Sánchez.
**/
interface IRaven {
    /**
    * Obtiene una excpesión y la envia a sentry.
    * @param exception Excepsión ocurrida.
    * @param data Diccionario con información adicional del error.
    **/
    captureException(exception: any, data?: any): void;
    /**
    * Asigna el contexto de usuario para el reporteo de errores.
    *@param userContext Obejeto con los datos del contexto de usuario.
    **/
    setUserContext(userContext: any): void;
    /**
    * Asinga el contexto.
    **/
    setReleaseContext(context: any): void;

    /**
    * Inicializa Raven reportar a sentry.
    * @param sentryKey Llave de la cuenta de Sentry a la que se reporta.
    * @param options Opciones de configuración de Raven.
    * @reurn Entidad para activar el reporteo.
    **/
    config(sentryKey:string, options: any):any;
} 
/**
* Declaramos la variable para acceder a los métodos de Raven.
**/
declare var Raven: IRaven;