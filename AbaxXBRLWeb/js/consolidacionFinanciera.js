
var validaciones = [
    {
        "resultado": "10000000",
        "operadores": [
            "11000000", "12000000"
        ]
    },
    {
        "resultado": "10000000",
        "operadores": [
            "20000000", "30000000"
        ]
    },
    {
        "resultado": "11000000",
        "operadores": [
            "11010000", "11020000", "11030000", "11040000", "11050000", "11051000", "11060000"
        ]
    },
    {
        "resultado": "11020000",
        "operadores": [
            "11020010", "11020020", "11020030"
        ]
    },
    {
        "resultado": "11030000",
        "operadores": [
            "11030010", "11030020"
        ]
    },
    {
        "resultado": "11040000",
        "operadores": [
            "11040010", "11040020"
        ]
    },
    {
        "resultado": "11060000",
        "operadores": [
            "11060010", "11060020", "11060030", "11060050", "11060060"
        ]
    },
    {
        "resultado": "12000000",
        "operadores": [
            "12010000", "12020000", "12030000", "12040000", "12050000", "12060000", "12070000", "12080000"
        ]
    },
    {
        "resultado": "12020000",
        "operadores": [
            "12020010", "12020020", "12020030", "12020040"
        ]
    },
    {
        "resultado": "12030000",
        "operadores": [
            "12030010", "12030020", "12030030", "12030040", "12030050"
        ]
    },
    {
        "resultado": "12060000",
        "operadores": [
            "12060010", "12060020", "12060030", "12060031", "12060040"
        ]
    },
    {
        "resultado": "12080000",
        "operadores": [
            "12080001", "12080010", "12080020", "12080021", "12080040", "12080050"
        ]
    },
    {
        "resultado": "20000000",
        "operadores": [
            "21000000", "22000000"
        ]
    },
    {
        "resultado": "21000000",
        "operadores": [
            "21010000", "21020000", "21030000", "21040000", "21050000", "21060000"
        ]
    },
    {
        "resultado": "21050000",
        "operadores": [
            "21050010", "21050020"
        ]
    },
    {
        "resultado": "21060000",
        "operadores": [
            "21060010", "21060020", "21060030", "21060050", "21060060", "21060061", "21060080"
        ]
    },
    {
        "resultado": "22000000",
        "operadores": [
            "22010000", "22020000", "22030000", "22040000", "22050000"
        ]
    },
    {
        "resultado": "22050000",
        "operadores": [
            "22050010", "22050020", "22050040", "22050050", "22050051", "22050070"
        ]
    },
    {
        "resultado": "30000000",
        "operadores": [
            "30010000", "30020000"
        ]
    },
    {
        "resultado": "30010000",
        "operadores": [
            "30030000", "30040000", "30050000", "30060000", "30070000", "30080000", "30090000"
        ]
    },
    {
        "resultado": "30080000",
        "operadores": [
            "30080010", "30080020", "30080030", "30080040", "30080050"
        ]
    },
    {
        "resultado": "30090000",
        "operadores": [
            "30090010", "30090020", "30090030", "30090040", "30090050", "30090060", "30090070", "30090080"
        ]
    }
];

var htmlAgregarContextoPopOver = '<div id="agregarContextoPopover">' +
    '        <form data-validate="parsley" id="forma-agregar-contexto">' +
    '                <div class="panel-body">' +
    '                    <div class="form-group">' +
    '                        <label>Nombre Contexto</label>' +
    '                        <input id="nombreContexto" type="text" class="form-control" data-required="true">' +
    '                    </div>' +
    '                    <div class="form-group">' +
    '                        <label>Clave Empresa</label>' +
    '                        <input id="claveEmpresaContexto" type="text" class="form-control" data-required="true">' +
    '                    </div>' +
    '                    <div class="form-group">' +
    '                        <label>Fecha de Reporte</label>' +
    '                        <input id="fechaContexto" type="text" class="form-control" data-type="dateIso" data-required="true" placeholder="AAAA-MM-DD">' +
    '                    </div>' +
    '                    <div class="form-group">' +
    '                        <label>Unidad</label>' +
    '                        <select id="unidadContexto" data-required="true" class="form-control m-t">' +
    '                            <option value="">Seleccione uno</option>' +
    '                            <option value="MXN">MXN</option>' +
    '                            <option value="USD">USD</option>' +
    '                        </select>' +
    '                    </div>' +
    '                </div>' +
    '                <div class="panel-footer text-right bg-light lter">' +
    '                    <button id="btnAgregarContexto" type="button" class="btn btn-success btn-s-xs">Agregar</button>' +
    '                </div>' +
    '        </form>' +
    '    </div>';

var idContextoEliminar = -1;
var contextos = new Array();

var Contexto = function(id) {
    this.Id = id;
    this.Nombre = "";
    this.Fecha = "";
    this.Unidad = "";
    this.ClaveEmpresa = "";
};
$(document).ready(function() {

    if (typeof String.prototype.startsWith != 'function') {
        // see below for better implementation!
        String.prototype.startsWith = function(str) {
            return this.slice(0, str.length) == str;
        };
    }

    $('#btnValidarEstadoFinanciero').click(function() {
        validarEstadoFinanciero();
    });

    $('#agregarContexto').popover({
        'animation': true,
        'html': true,
        'placement': 'auto',
        'trigger': 'click',
        'title': '<button type="button" class="close pull-right" data-dismiss="popover">&times;</button>Agregar Contexto',
        'content': htmlAgregarContextoPopOver
    });
    $('#agregarContexto').on('shown.bs.popover', function() {
        $('#btnAgregarContexto').click(function() {
            if ($('#forma-agregar-contexto').parsley('validate')) {
                $('#agregarContexto').popover('hide');

                var contexto = new Contexto(idContexto);

                contexto.ClaveEmpresa = $('#claveEmpresaContexto').val();
                contexto.Fecha = $('#fechaContexto').val();
                contexto.Nombre = $('#nombreContexto').val();
                contexto.Unidad = $('#unidadContexto').val();

                contextos[idContexto] = contexto;

                $('#tablaEstadoPosicionFinanciera thead tr').append('<th class="th-sortable" data-toggle="class" id="thEPFContexto_' + idContexto + '" style="width:200px;"><b>' + $('#claveEmpresaContexto').val() + '<br/>' + $('#fechaContexto').val() + '</b><span class="th-sort" id="btnEliminarColumna_' + idContexto + '">' +
                    '    <i class="fa fa-trash-o"></i>' +
                    '</span></th>');
                $('#tablaDatosInformativos thead tr').append('<th class="th-sortable" data-toggle="class" id="thDIContexto_' + idContexto + '" style="width:200px;"><b>' + $('#claveEmpresaContexto').val() + '<br/>' + $('#fechaContexto').val() + '</b><span class="th-sort" id="btnEliminarColumna_' + idContexto + '">' +
                    '    <i class="fa fa-trash-o"></i>' +
                    '</span></th>');
                for (index = 0; index < estructuraFormatoFinanciero.length; ++index) {
                    if (!estructuraFormatoFinanciero[index].CuentaEmisnet.startsWith("9")) {
                        $('#tr_EPF_' + estructuraFormatoFinanciero[index].CuentaEmisnet).append('<td><input type="text" class="form-control acurrency" id="input_EPF_' + idContexto + '_' + estructuraFormatoFinanciero[index].CuentaEmisnet + '"/></td>');
                    }
                }
                for (index = 0; index < estructuraFormatoFinanciero.length; ++index) {
                    if (estructuraFormatoFinanciero[index].CuentaEmisnet.startsWith("9")) {
                        $('#tr_DI_' + estructuraFormatoFinanciero[index].CuentaEmisnet).append('<td><input type="text" class="form-control anumeric" id="input_DI_' + idContexto + '_' + estructuraFormatoFinanciero[index].CuentaEmisnet + '"/></td>');
                    }
                }
                $('span[id^="btnEliminarColumna_"]').click(function() {
                    idContextoEliminar = $(this).attr('id').substring("btnEliminarColumna_".length);
                    $('#modalEliminarContexto').modal({
                        'backdrop': true,
                        'keyboard': true
                    });
                    $('#btnConfirmarEliminarContexto').click(function(e) {
                        $('#modalEliminarContexto').modal('hide');
                        delete contextos[idContextoEliminar];
                        $('#thEPFContexto_' + idContextoEliminar).remove();
                        $('#thDIContexto_' + idContextoEliminar).remove();
                        for (index = 0; index < estructuraFormatoFinanciero.length; ++index) {
                            if (estructuraFormatoFinanciero[index].CuentaEmisnet.startsWith("9")) {
                                $('#input_DI_' + idContextoEliminar + '_' + estructuraFormatoFinanciero[index].CuentaEmisnet).parent().remove();
                            }
                        }
                        for (index = 0; index < estructuraFormatoFinanciero.length; ++index) {
                            if (!estructuraFormatoFinanciero[index].CuentaEmisnet.startsWith("9")) {
                                $('#input_EPF_' + idContextoEliminar + '_' + estructuraFormatoFinanciero[index].CuentaEmisnet).parent().remove();
                            }
                        }
                    });
                });
                $('.acurrency').autoNumeric('init', { aSign: '$', pSign: 'p', vMin: '-99999999999999.00', nBracket: '(,)' });
                $('.anumeric').autoNumeric('init');
                idContexto++;
            }
        });
    });
    $(document).on('click', '.popover-title .close', function(e) {
        var $target = $(e.target), $popover = $target.closest('.popover').prev();
        $popover && $popover.popover('hide');
    });

    $('#tablaEstadoPosicionFinanciera').filterTable({
// apply filterTable to all tables on this page
        filterSelector: '#filtroTabla' // use the existing input instead of creating a new one
    });
    $('#tablaDatosInformativos').filterTable({
// apply filterTable to all tables on this page
        filterSelector: '#filtroTabla' // use the existing input instead of creating a new one
    });
    $('.acurrency').autoNumeric('init', { aSign: '$', pSign: 'p', vMin: '-99999999999999.00', nBracket: '(,)' });
    $('.anumeric').autoNumeric('init');

});

function validarEstadoFinanciero() {

    for (idCtx = 0; idCtx < contextos.length; ++idCtx) {
        if (contextos[idCtx] === undefined) {
            continue;
        }
        for (iVal = 0; iVal < validaciones.length; ++iVal) {
            var ctaResultado = $("#input_EPF_" + idCtx + "_" + validaciones[iVal].resultado);
            var valCtaResultado = ctaResultado.val();
            if ((valCtaResultado === undefined || valCtaResultado === "") && !ctaResultado.hasClass("parsley-error")) {
                ctaResultado.addClass("parsley-validated parsley-error");
                ctaResultado.parent().append('<ul class="parsley-error-list"><li>Este dato es requerido</li></ul>');
            }
        }
    }

}