var numeroErrores = 0;
var tieneErrores = '';
var detalleOperaciones = {};
var detalleErrores = {};
var esBotonActualizar = false;
var realizoCambios = false;
var archivoExcel = '';
var cambiosPendientesGuardar = false;

$(document).ready(function () {

    
    $('#btnBloquearEstadoFinanciero').bind('click', function() {
        bloquearLiberarDocumentoInstancia();
    });
    
    $('#btnImportarEstadoFinanciero').click(function () {
        presentarFormatoImportacionExcel();
    });
    
    $('#btnExportarEstadoFinanciero').click(function () {
        presentarFormatoExportarDocumentoInstancia();
    });
    
    validarPermisosUsuario();
});

function bloquearLiberarDocumentoInstancia() {
    if (cambiosPendientesGuardar) {
        $.prompt('Tiene cambios pendientes por guardar. No puede liberar el documento hasta que haya guardado sus cambios.',
            {
                title: 'Bloquear documento instancia',
                buttons: { 'Aceptar': true }
            });
        return;
    }

    var bloquear = !formatoCaptura.Bloqueado;

    if (formatoCaptura.Bloqueado) {
        $.isLoading({ text: "Liberando el documento instancia, espere..." });
    } else {
        $.isLoading({ text: "Solicitando el bloqueo del documento instancia, espere..." });
    }

    $('#btnBloquearEstadoFinanciero').prop('disabled', true);

    $.post('/DocumentosInstancia/BloquearLiberarDocumentoInstancia',
            {
                idDocumentoInstancia: formatoCaptura.IdDocumentoInstancia,
                bloquear: bloquear
            }, function (data, textStatus, jqXHR) {
                if (data.Resultado) {

                    formatoCaptura.Bloqueado = data.InformacionExtra.Bloqueado;
                    formatoCaptura.IdUsuarioBloqueo = data.InformacionExtra.IdUsuarioBloqueo;
                    formatoCaptura.NombreUsuarioBloqueo = data.InformacionExtra.NombreUsuarioBloqueo;

                    validarPermisosUsuario();

                    if (formatoCaptura.Bloqueado) {
                        $('#btnBloquearEstadoFinanciero i').removeClass('fa-lock');
                        $('#btnBloquearEstadoFinanciero i').addClass('fa-unlock');
                        $('#btnBloquearEstadoFinanciero').prop('title', 'Desbloquear');
                        $('#datosBloqueo').text('El documento ha sido bloqueado por el usuario: ' + formatoCaptura.NombreUsuarioBloqueo);
                        $.prompt('Se bloqueó con éxito el documento instancia.',
                                {
                                    title: 'Bloquear documento instancia',
                                    buttons: { 'Aceptar': true }
                                });
                    } else {
                        $('#btnBloquearEstadoFinanciero i').removeClass('fa-unlock');
                        $('#btnBloquearEstadoFinanciero i').addClass('fa-lock');
                        $('#btnBloquearEstadoFinanciero').prop('title', 'Bloquear');
                        $('#datosBloqueo').text('El documento no está bloqueado.');
                        $.prompt('Se liberó con éxito el documento instancia.',
                                {
                                    title: 'Liberar documento instancia',
                                    buttons: { 'Aceptar': true }
                                });
                    }

                    $('#btnBloquearEstadoFinanciero').prop('disabled', false);
                    $('#contenedorFormatos').show();
                    $('#historicoVersiones').hide();
                    $('#usuariosAsignados').hide();
                }
            }, 'json').done(function () {

            }).fail(function () {
                $('#resultadoGuardarVersion').html('<p>Lo sentimos, ocurri&oacute; un error al actualizar los usuarios asignados al documento instancia.</p><p>Int&eacute;ntelo nuevamente</p>');
            }).always(function () {
                $('#asignarUsuarios').removeAttr('disabled');
                $.isLoading('hide');
            });


}

function validarPermisosUsuario() {
    if (formatoCaptura.Bloqueado && formatoCaptura.PuedeEscribir && formatoCaptura.IdUsuarioBloqueo == idUsuarioExec) {
        

        $('#btnGuardarEstadoFinanciero').prop('disabled', !cambiosPendientesGuardar);
        $('#btnCompartirEstadoFinanciero').prop('disabled', false);
        $('#btnActualizarDatos').show();

        $('#btnBloquearEstadoFinanciero i').removeClass('fa-lock');
        $('#btnBloquearEstadoFinanciero i').addClass('fa-unlock');
        $('#btnBloquearEstadoFinanciero').prop('title', 'Desbloquear');
        $('#btnImportarEstadoFinanciero').prop('disabled', false);
    } else {
        
        $('#btnImportarEstadoFinanciero').prop('disabled', true);
        $('#btnGuardarEstadoFinanciero').prop('disabled', true);
        $('#btnCompartirEstadoFinanciero').prop('disabled', true);
        $('#btnActualizarDatos').hide();
    }

    $('#btnCompartirEstadoFinanciero').prop('disabled', !formatoCaptura.EsDueno);
    $('#btnBloquearEstadoFinanciero').prop('disabled', !formatoCaptura.PuedeEscribir);
}

function presentarFormatoImportacionExcel() {

    if (!formatoCaptura.Bloqueado || formatoCaptura.IdUsuarioBloqueo != idUsuarioExec) {
        $.prompt('No puede importar información al documento sin antes bloquearlo para edición.', {
            title: 'Importar documento instancia',
            buttons: { 'Aceptar': true }
        });
        return;
    }

    archivoExcel = '';

    $('#contenedorFormatos').show();
    $('#historicoVersiones').hide();
    $('#usuariosAsignados').hide();

    $('#modalImportarExcelDocumentoInstancia').modal({
        'backdrop': true,
        'keyboard': true
    });

    $('#archivoExcel').unbind('change');
    $('#archivoExcel').bind('change', function (event) {
        archivoExcel = event.target.files;
        if (archivoExcel !== undefined && archivoExcel[0] && archivoExcel[0].name) {
            var nombreArchivo = archivoExcel[0].name;
            $('#archivoExcel').next().find('input').val(nombreArchivo);
        }
    });

    $('#archivoExcel').unbind('click');
    $('#archivoExcel').bind('click', function () {
        $('#archivoExcel').next().find('input').val('');
        resetFormElement($("#archivoExcel"));
    });

    $('#btnDescargarPlantillaExcel').unbind('click');
    $('#btnDescargarPlantillaExcel').bind('click', function () {
        if (numeroTrimestre == 1) {
            window.location = '/formatoT1.xlsx';
        } else {
            window.location = '/formatoT234.xlsx';
        }
    });

    $('#btnCancelarImportar').unbind('click');
    $('#btnCancelarImportar').bind('click', function () {
        $('#modalImportarExcelDocumentoInstancia').modal('hide');
    });

    $('#btnImportarDocumentoExcel').unbind('click');
    $('#btnImportarDocumentoExcel').bind('click', function () {
        var validExtensions = ['xls', 'xlsx'];
        var filename = $("#archivoExcel").val();

        if (filename === undefined || filename === '') {
            $.prompt('Debe seleccionar un archivo excel a importar, verifique.', {
                title: 'Importar documento instancia',
                buttons: { 'Aceptar': true }
            });
            $('#archivoExcel').next().find('input').val('');
            resetFormElement($("#archivoExcel"));
            return false;
        }

        var fileNameExt = filename.substr(filename.lastIndexOf('.') + 1);
        if ($.inArray(fileNameExt, validExtensions) == -1) {
            $.prompt('La extensión del documento a importar sólo puede ser xls o xlsx, verifique.', {
                title: 'Importar documento instancia',
                buttons: { 'Aceptar': true }
            });
            $('#archivoExcel').next().find('input').val('');
            resetFormElement($("#archivoExcel"));
            return false;
        }

        var data = new FormData();
        $.each(archivoExcel, function (key, value) {
            data.append('archivoXLS', value);
        });

        //crearFormatoCapturaVersionDocumento();
        data.append('formatoCapturaJSON', $.toJSON(formatoCaptura));

        $.isLoading({ text: "Importando información del documento instancia, espere..." });
        $('#btnImportarDocumentoExcel').prop('disabled', true);

        $.ajax({
            url: '/DocumentosInstancia/ImportarDocumentoInstanciaExcel',
            type: 'POST',
            data: data,
            cache: false,
            dataType: 'json',
            processData: false,
            contentType: false,
            success: function (data, textStatus, jqXHR) {
                if (data.Resultado) {
                    formatoCaptura = data.InformacionExtra;
                    actualizarDatosFormatoCaptuta();
                    $.prompt('Se importaron exitósamente los hechos al documento instancia a partir del documento Excel.',
                    {
                        title: 'Importar documento instancia',
                        buttons: { 'Aceptar': true }
                    });
                    $('#modalImportarExcelDocumentoInstancia').modal('hide');
                    indicarCambiosPendientesGuardar();
                } else {
                    $.prompt('El formato del documento Excel no es correcto, verifique e inténtelo nuevamente.',
                    {
                        title: 'Error al importar documento Excel',
                        buttons: { 'Aceptar': true }
                    });
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                $.prompt('Ocurrió un error al importar los hechos del documento instancia a partir del documento Excel. Inténtelo nuevamente.',
                    {
                        title: 'Error al contactar al servidor',
                        buttons: { 'Aceptar': true }
                    });
                $('#modalImportarExcelDocumentoInstancia').modal('hide');
            }
        }).always(function () {
            $('#btnImportarDocumentoExcel').prop('disabled', false);
            $.isLoading('hide');
            $('#archivoExcel').next().find('input').val('');
        });

    });
}


function resetFormElement(e) {
    e.wrap('<form>').closest('form').get(0).reset();
    e.unwrap();
}

function actualizarDatosFormatoCaptuta() {

    $('.form-control').each(function () {
        var formato;
        var contexto;
        var id = $(this)[0].id;
        
            if (!id.startsWith('input-')) return;

            var cuentaEmisnet = id.split('-')[2];
            var idContexto = id.split('-')[1];
            var valor;

            if (idContexto.startsWith("EPF")) {
                formato = formatoCaptura.FormatoEPF;
            } else if (idContexto == "ER" || idContexto == "ERA" || idContexto == "ERAC" || idContexto == "ERACA") {
                formato = formatoCaptura.FormatoER;
            } else if (idContexto.startsWith("EFE")) {
                formato = formatoCaptura.FormatoEFE;
            } else if (idContexto.startsWith("VCC")) {
                formato = formatoCaptura.FormatoVCC;
            } else if (idContexto.startsWith("IG")) {
                formato = formatoCaptura.FormatoIG;
            } else if (idContexto.startsWith("ER12")) {
                formato = formatoCaptura.FormatoDI12M;
            }

            for (i = 0; i < formato.Contextos.length; i++) {
                if (formato.Contextos[i].Id == idContexto) {
                    contexto = formato.Contextos[i];
                    break;
                }
            }

            if ($(this).hasClass('acurrency') || $(this).hasClass('anumeric')) {
                $(this).autoNumeric('set', contexto.Hechos[cuentaEmisnet]);
            } else {
                $(this).val(contexto.Hechos[cuentaEmisnet]);
            }
        
        

    }).promise().done(function () {
        validarFormatos();
        formatoCaptura.EsCorrecto = !tieneErrores;
    });

    console.log($.toJSON(formatoCaptura));

}

function presentarFormatoExportarDocumentoInstancia() {
    $('#contenedorFormatos').show();
    $('#historicoVersiones').hide();
    $('#usuariosAsignados').hide();

    $('#modalExportarDocumentoInstancia').modal({
        'backdrop': true,
        'keyboard': true
    });

    $('#btnCancelarExportar').unbind('click');
    $('#btnCancelarExportar').bind('click', function () {
        $('#modalExportarDocumentoInstancia').modal('hide');
    });

    $('#btnExportarDocumentoInstancia').unbind('click');
    $('#btnExportarDocumentoInstancia').bind('click', function () {

        var url = '';
        var data = '';
        if ($('#formatoExportar').val() == 1) {
            url = '/DocumentosInstancia/ExportarDocumentoInstanciaExcel';
            crearFormatoCapturaVersionDocumento();
            data = {
                formatoCapturaJSON: $.toJSON(formatoCaptura)
            };
        } else if ($('#formatoExportar').val() == 2) {
            url = '/DocumentoInstancia/GenerarDocumentoXBRL';
            if (!formatoCaptura.IdDocumentoInstancia || formatoCaptura.IdDocumentoInstancia < 1) {
                $.prompt('Para poder exportar en formato XBRL debe guardar primero su archivo, reintente.', {
                    title: 'Descarga de archivo',
                    buttons: { 'Aceptar': true }
                });
                return;
            }
            if (cambiosPendientesGuardar) {
                $.prompt('Para poder exportar en formato XBRL debe guardar los cambios en su documento, reintente.', {
                    title: 'Descarga de archivo',
                    buttons: { 'Aceptar': true }
                });
                return;
            }
            data = {
                idDocumentoInstancia: formatoCaptura.IdDocumentoInstancia
            };
        } else if ($('#formatoExportar').val() == 3) {
            
            $('#btnExportarDocumentoInstancia').prop('disabled', false);
            $('#modalExportarDocumentoInstancia').modal('hide');
            window.location = '/ifrsxbrl_AC_2014-2.docx';
            
            return;
        } else if ($('#formatoExportar').val() == 4) {
            
            $('#btnExportarDocumentoInstancia').prop('disabled', false);
            $('#modalExportarDocumentoInstancia').modal('hide');
            window.open('/ifrsxbrl_AC_2014-2.pdf');
            
            return;
        }

        /*$('#formatoCapturaJSON').val($.toJSON(formatoCaptura));
        $('#exportarForm').submit();
        */
        $('#btnExportarDocumentoInstancia').prop('disabled', true);
        $.isLoading({ text: "Preparando su descarga, espere..." });

        $.fileDownload(url, {
            httpMethod: "POST",
            data: data,
            successCallback: function (url) {
                $.isLoading('hide');
                $('#btnExportarDocumentoInstancia').prop('disabled', false);
                $('#modalExportarDocumentoInstancia').modal('hide');
            },
            failCallback: function (responseHtml, url) {
                $('#btnExportarDocumentoInstancia').prop('disabled', false);
                $.isLoading('hide');
                $.prompt('Ocurrió un error en la descarga del archivo, reintente.', {
                    title: 'Descarga de archivo',
                    buttons: { 'Aceptar': true }
                });
            }
        });

    });
}
