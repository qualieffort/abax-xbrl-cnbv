interface JQuery {
    /**
    * Inicializa el contenido de un easyPieChart.
    * @param selector Selector Jquery de los elementos a inicializar.
    **/
    setEasyPieChart(selector: string): void;
    /**
    * Inicializa el easyPieChart Directamente.
    * @param data Datos para inicializar la grafica.
    **/
    easyPieChart(data: any);
}    