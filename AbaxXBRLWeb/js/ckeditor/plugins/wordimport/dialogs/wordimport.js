(function () {

    var archivoWord = '';
    var importacionExitosa = false;

    function resetFormElement(e) {
        e.wrap('<form>').closest('form').get(0).reset();
        e.unwrap();
    }

    CKEDITOR.dialog.add('wordimportDialog', function (editor) {
        return {
            title: 'Importar contenido desde documento Word',
            minWidth: 400,
            minHeight: 200,

            contents: [
                {
                    id: 'tab-basic',
                    label: 'Seleccionar Documento',

                    elements: [
                        {
                            type: "html",
                            id: "plupload2_doksoft_file",
                            html: '<div class="form-group"><label>Archivo a importar</label><br/><br/><input id="archivoWord" type="file" class="filestyle" data-icon="false" data-classButton="btn btn-default" data-classInput="form-control inline v-middle input-s"/></div><br/><br/><a style="-webkit-user-select: none; color: #ffffff;" title="Importar Documento" class="cke_dialog_ui_button cke_dialog_ui_button_ok" role="button" id="btnImportarDocumentoWord"><span style="color: #ffffff;" class="cke_dialog_ui_button">Importar Documento</span></a>'
                        }
                    ]
                }
            ],
            onShow: function () {

                var dialog = this;

                $('#archivoWord').unbind('change');
                $('#archivoWord').bind('change', function (event) {
                    archivoWord = event.target.files;
                    if (archivoWord !== undefined && archivoWord[0] && archivoWord[0].name) {
                        var nombreArchivo = archivoWord[0].name;
                        $('#archivoWord').next().find('input').val(nombreArchivo);
                    }
                });

                $('#archivoWord').unbind('click');
                $('#archivoWord').bind('click', function () {
                    $('#archivoWord').next().find('input').val('');
                    resetFormElement($("#archivoWord"));
                });

                $('#btnImportarDocumentoWord').unbind('click');
                $('#btnImportarDocumentoWord').bind('click', function () {
                    var validExtensions = ['doc', 'docx'];
                    var filename = $("#archivoWord").val();

                    if (filename === undefined || filename === '') {
                        alert('Debe seleccionar un archivo word a importar, verifique.');
                        $('#archivoWord').next().find('input').val('');
                        resetFormElement($("#archivoWord"));
                        return false;
                    }

                    var fileNameExt = filename.substr(filename.lastIndexOf('.') + 1);
                    if ($.inArray(fileNameExt, validExtensions) == -1) {
                        alert('La extensión del documento a importar sólo puede ser doc o docx, verifique.');
                        $('#archivoWord').next().find('input').val('');
                        resetFormElement($("#archivoWord"));
                        return false;
                    }

                    var data = new FormData();
                    $.each(archivoWord, function (key, value) {
                        data.append('archivoDOC', value);
                    });

                    $.isLoading({ text: "Importando información del documento Word, espere..." });
                    $('#btnImportarDocumentoWord').prop('disabled', true);

                    $.ajax({
                        url: 'DocumentoInstancia/ImportarDocumentoWord',
                        type: 'POST',
                        data: data,
                        cache: false,
                        dataType: 'json',
                        processData: false,
                        contentType: false,
                        success: function (data, textStatus, jqXHR) {
                            if (data.Resultado) {
                                //procesar éxito
                                editor.setData(data.InformacionExtra);
                                importacionExitosa = true;
                                dialog.getButton("ok").click();
                            } else if (data.Mensaje != null) {
                                alert(data.Mensaje);
                                editor.setData(data.InformacionExtra);
                                importacionExitosa = true;
                                dialog.getButton("ok").click();
                                editor.fire('blur');
                            } else {
                                alert('El formato del documento Word no es correcto, verifique e inténtelo nuevamente.');
                            }
                        },
                        error: function (jqXHR, textStatus, errorThrown) {
                            alert('Ocurrió un error al importar el documento de Word al documento instancia. Inténtelo nuevamente.');
                        }
                    }).always(function () {
                        $('#btnImportarDocumentoWord').prop('disabled', false);
                        $.isLoading('hide');
                        $('#archivoExcel').next().find('input').val('');
                    });

                });

            },
            onOk: function () {
                var dialog = this;

                if (importacionExitosa) {
                    return true;
                } else {
                    alert('Primero debe importar el documento de Word.');
                    return false;
                }
            }
        };
    });
})();
