module abaxXBRL.componentes.directivas {

    /**
    * Scope de la directiva.
    **/
    export interface AbaxEasyPieChartScope extends ng.IScope {
        /**
        * Dto con la información necesaria para inicializar la grafica.
        **/
        abaxXbrlEasyPieChartData: shared.modelos.IEasyPieChart;
    }

    /**
    * Directiva para inicializar easyPieChart.
    **/
    export class AbaxXbrlEasyPieChartDirective {

        /**Fabrica de la directiva. **/
        public static AbaxXbrlEasyPieChart(): ng.IDirective {
            return {
                restrict: 'A',
                scope: {
                    abaxXbrlEasyPieChartData: '='
                },
                replace: false,
                transclude: false,
                link: function (scope: AbaxEasyPieChartScope, element: any) {
                    var abaxData = scope.abaxXbrlEasyPieChartData;
                    var stepValue: number = 0;
                    var $element = $(element);
                    var $percentText = $element.find('.chart-percent-text');
                    if (isNaN(abaxData.Porcentaje)) {
                        abaxData.Porcentaje = 0;
                    }
                    var data = {
                        percent: abaxData.Porcentaje,
                        barColor: abaxData.Color,
                        lineWidth: abaxData.AnchoLinea,
                        loop: abaxData.Ciclar,
                        size: abaxData.Diametro,
                        onStep: function (value) {
                            var intValue: number = parseInt(value);
                            var text:string =  isNaN(intValue) ? "0" : intValue.toString();
                            $percentText.text(text);
                            //abaxData.TextoPorcentaje = parseInt(value).toString();
                        },
                        onStop: function () {
                            $percentText.text(abaxData.Porcentaje.toString());
                        },
                        animate: 3000,
                        delay: 200,
                    }
                    $element.data('percent', data.percent);
                    $element.easyPieChart(data);
                }
            }
        }
    }
}   