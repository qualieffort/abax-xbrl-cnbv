var secuenciaCalendario = 0;
var puedeGenerar = false;

$(document).ready(function() {

    var emisorasDisponibles = [
        { value: 'ACCELSA', data: "ACCELSA" },
        { value: 'AHMSA', data: "AHMSA" },
        { value: 'ALMACO', data: "ALMACO" },
        { value: 'ALPEK', data: "ALPEK" },
        { value: 'ALSEA', data: "ALSEA" },
        { value: 'BEVIDES', data: "BEVIDES" },
        { value: 'CIDMEGA', data: "CIDMEGA" },
        { value: 'CIE', data: "CIE" },
        { value: 'CULTIBA', data: "CULTIBA" },
        { value: 'ELEKTRA', data: "ELEKTRA" },
        { value: 'FEMSA', data: "FEMSA" },
        { value: 'GCC', data: "GCC" },
        { value: 'GIGANTE', data: "GIGANTE" },
        { value: 'GISSA', data: "GISSA" },
        { value: 'GSANBOR', data: "GSANBOR" },
        { value: 'KUO', data: "KUO" },
        { value: 'MEXCHEM', data: "MEXCHEM" },
        { value: 'PAPPEL', data: "PAPPEL" },
        { value: 'POCHTEC', data: "POCHTEC" },
        { value: 'WALMEX', data: "WALMEX" }
    ];
    $("#claveEmpresa").autocomplete({
        lookup: emisorasDisponibles
    });

    var cTime = new Date(), month = cTime.getMonth() + 1, year = cTime.getFullYear();

    theMonths = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    theDays = ["D", "L", "M", "M", "J", "V", "S"];
    events = [
    ];
    $('#calendar').calendar({
        months: theMonths,
        days: theDays,
        events: events,
        calendarSequence: secuenciaCalendario,
        popover_options: {
            placement: 'top',
            html: true
        }
    });

    $('#btnBuscarDatos').click(function() {
        if ($('#formaGeneracionReporte').parsley('validate')) {
            var fechaConsulta = $('#fechaConsulta').val();
            var unidadConsulta = $('#unidadConsulta').val();
            if ((fechaConsulta === '' || fechaConsulta === '31-03-2014') && unidadConsulta === 'MXN') {
                secuenciaCalendario++;
                events[0] = [
                    '31/3/2014',
                    'ACCELSA',
                    '#',
                    '#1bbacc',
                    'Estado de Posición Financiera'
                ];
                $('#calendar').remove();
                $('<div id="calendar" class="bg-light dker m-l-n-xxs m-r-n-xxs"></div>').insertAfter('#headerPanelCalendario');
                $('#calendar').calendar({
                    months: theMonths,
                    dateToShow: new Date(2014, 2, 31),
                    calendarSequence: secuenciaCalendario,
                    days: theDays,
                    events: events,
                    popover_options: {
                        placement: 'top',
                        html: true
                    }
                });
                $('#cal_' + secuenciaCalendario + ' ' + '.event_popover a').popover('toggle');
                $('#notaCalendario').text('Se encontró información el día 31/03/2014');
                puedeGenerar = true;
            }
        }
    });

    $('#btnLimpiar').click(function() {
        secuenciaCalendario++;
        puedeGenerar = false;
        $('#calendar').remove();
        $('#fechaConsulta').val('');
        $('#tipoInformacionConsulta').val('');
        $('#plantillaReporteConsulta option').remove();
        $('#plantillaReporteConsulta').append('<option value="">Primero seleccione un tipo de informaci&oacute;n</option>');
        $('#plantillaReporteConsulta').val('');
        $('#claveEmpresa').val('');
        $('#unidadConsulta').val('');
        $('#rowPortletPDF').remove();

        if ($('.panel-body').hasClass('collapse')) {
            $('.panel-body').removeClass('collapse');
        }

        $('#notaCalendario').text('Primero haga clic en el botón Buscar');
        $('<div id="calendar" class="bg-light dker m-l-n-xxs m-r-n-xxs"></div>').insertAfter('#headerPanelCalendario');
        events = [
        ];
        $('#calendar').calendar({
            months: theMonths,
            days: theDays,
            events: events,
            calendarSequence: secuenciaCalendario,
            popover_options: {
                placement: 'top',
                html: true
            }
        });
    });

    $('#btnGenerar').click(function() {
        var claveEmisora = $('#claveEmpresa').val();
        if (puedeGenerar) {
            $('#btnGenerar').attr('disabled', 'disabled');
            $.getJSON('CrearReporte.ashx?ce=' + claveEmisora + '&tr=pdf&mv=s', function(data) {
                if (data.exito) {
                    $('.panel-toggle').trigger('click');
                    var htmlGenerado =
                        '<section id="rowPortletPDF" class="row m-b-md"> ' +
                            '   <div class="col-sm-12 portlet">' +
                            '       <section class="panel panel-warning portlet-item">' +
                            '           <header class="panel-heading">Reporte Generado</header>' +
                            '           <div class="bg-white b-b clearfix">' +
                            '              <div class="row m-t-sm">' +
                            '                   <div class="col-sm-2 m-b-xs">&nbsp;</div>' +
                            '                  <div class="col-sm-10 m-b-xs">' +
                            '                      <div class="btn-group">' +
                            '                          <button type="button" class="btn btn-sm btn-default" title="Actualizar"><i class="fa fa-refresh"></i>&nbsp;&nbsp;&nbsp;Actualizar&nbsp;&nbsp;&nbsp;</button>' +
                            '                         <button type="button" class="btn btn-sm btn-default" title="Imprimir"><i class="fa fa-print"></i>&nbsp;&nbsp;&nbsp;Imprimir&nbsp;&nbsp;&nbsp;</button>' +
                            '                         <button type="button" class="btn btn-sm btn-default" title="Guardar" data-toggle="dropdown"><i class="fa  fa-save"></i>&nbsp;&nbsp;&nbsp;Exportar&nbsp;&nbsp;&nbsp;<span class="caret"></span></button>' +
                            '                         <ul class="dropdown-menu">' +
                            '                            <li><a target="_blank" href="CrearReporte.ashx?ce=' + claveEmisora + '&tr=pdf&mv=n"><i class="i i-file-pdf"></i>&nbsp;&nbsp;PDF</a></li>' +
                            '                               <li><a target="_blank" href="CrearReporte.ashx?ce=' + claveEmisora + '&tr=docx&mv=n"><i class="i i-file-word"></i>&nbsp;&nbsp;WORD</a></li>' +
                            '                               <li><a target="_blank" href="CrearReporte.ashx?ce=' + claveEmisora + '&tr=html&mv=n"><i class="i i-world"></i>&nbsp;&nbsp;HTML</a></li>' +
                            '                               <li class="divider"></li>' +
                            '                               <li><a target="_blank" href="CrearReporte.ashx?ce=' + claveEmisora + '&tr=xbrl&mv=n"><i class="i i-file-xml"></i>&nbsp;&nbsp;XBRL</a></li>' +
                            '                          </ul>' +
                            '                       </div>' +
                            '                   </div>' +
                            '               </div>' +
                            '           </div>' +
                            '           <embed src="REPORTE.pdf" width="100%" height="500" alt="pdf" pluginspage="http://www.adobe.com/products/acrobat/readstep2.html"/>' +
                            '       </section>' +
                            '   </div>' +
                            '</section>';

                    $(htmlGenerado).insertAfter('#rowPortlet');
                    puedeGenerar = false;
                }
            }).fail(function() {
                console.log("error");
            }).always(function() {
                console.log("complete");
                $('#btnGenerar').removeAttr('disabled');
            });
        }
    });

    $('#tipoInformacionConsulta').change(function() {
        $('#plantillaReporteConsulta option').remove();
        if ($('#tipoInformacionConsulta').val() !== '') {
            $('#plantillaReporteConsulta').append('<option value="">Seleccione una plantilla</option>');
            $('#plantillaReporteConsulta').append('<option value="EPF">Plantilla de Estado de Posición Financiera</option>');
        } else {
            $('#plantillaReporteConsulta').append('<option value="">Primero seleccione un tipo de informaci&oacute;n</option>');
        }
    });
});