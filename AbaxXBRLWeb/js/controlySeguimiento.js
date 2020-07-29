$(document).ready(function() {

    $.fn.datetimepicker.defaults = {
        icons: {
            time: 'glyphicon glyphicon-time',
            date: 'glyphicon glyphicon-calendar',
            up: 'i i-circleup',
            down: 'i i-circledown'
        }
    };

    $('#horaMaximaReporte').datetimepicker({
        pickDate: false
    });

    $('#btnAgregarReglaSeguimiento').click(function() {
        if ($('#formaAgregarReglaSeguimiento').parsley('validate')) {
        }
    });

    $('#tablaSeguimiento').filterTable({
// apply filterTable to all tables on this page
        filterSelector: '#filtroSeguimiento' // use the existing input instead of creating a new one
    });
});