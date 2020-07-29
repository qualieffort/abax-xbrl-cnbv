
/**
* Mapeo a definición de utilería freshWidget.
**/
interface IFreshWidget {

    /**
    * Inicializa la utilería FreshWidget para el reporte de incidentes.
    * @param key Llave de la cuenta.
    * @param options Opciones de la configuración. 
    **/
    init(key: string, options: any): void;
} 

/**
* Variable para mapear el metodo a typescript.
**/
declare var FreshWidget: IFreshWidget;