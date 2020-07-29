(function ($) {

    var HechoXbrl = function (elemento, formato, contexto, concepto, valor, tablaNavegable, claseCampoVacio, onBtnClick, onValueChanged) {
        this.elemento = $('<div></div>');
        this.campoEditor = undefined;
        this.formato = formato;
        this.contexto = contexto;
        this.concepto = concepto;
        this.tipoDato = concepto.TIPO_DATO;
        this.id = concepto.CUENTA_EMISNET;
        this.valor = valor;
        this.editando = false;
        this.idElemento = elemento.prop('id');
        this.estadoValidacion = this.estadosValidacion.SinValidar;
        this.tablaNavegable = tablaNavegable;
        this.claseCampoVacio = claseCampoVacio;
        this.pausarEventoBlur = false;
        this.editable = true;
        this.detalleOperaciones = false;
        this.onBtnClick = onBtnClick;
        this.onValueChanged = onValueChanged;
        this.clicEnControlPropio = false;

        this.elemento.prop('id', this.idElemento);
        elemento.replaceWith(this.elemento);
    }

    HechoXbrl.prototype = {

        formatoFecha: 'DD/MM/YYYY',

        dataTypes: {
            1: 'astring',
            2: 'adate',
            3: 'anumber',
            4: 'acurrency',
            5: 'acombo',
            6: 'ahtml'
        },

        estadosValidacion: {
            Valido: 1,
            Invalido: 2,
            SinValidar: 3
        },

        estilosEstadosValidacion: {
            1: 'text-success',
            2: 'text-danger',
            3: 'text-default'
        },

        clearSelection: function () {
            var selection = null;
            if (window.getSelection) {
                selection = window.getSelection();
            } else if (document.selection) {
                selection = document.selection;
            }
            if (selection) {
                if (selection.empty) {
                    selection.empty();
                }
                if (selection.removeAllRanges) {
                    selection.removeAllRanges();
                }
            }
        },

        crearVisorDeCampo: function () {

            var elementoVisor;

            if (this.tipoDato == 1) {
                elementoVisor = $('<span"></span>');
                elementoVisor.addClass(this.dataTypes[this.tipoDato]);
                if (this.valor) {
                    elementoVisor.text(this.valor);
                }
                if (this.estadoValidacion == this.estadosValidacion.Invalido) {
                    elementoVisor.addClass(this.estilosEstadosValidacion[this.estadoValidacion]);
                }
            } else if (this.tipoDato == 2) {
                elementoVisor = $('<span"></span>');
                elementoVisor.addClass(this.dataTypes[this.tipoDato]);
                if (this.valor) {
                    elementoVisor.text(moment(this.valor).format(this.formatoFecha));
                }
                if (this.estadoValidacion == this.estadosValidacion.Invalido) {
                    elementoVisor.addClass(this.estilosEstadosValidacion[this.estadoValidacion]);
                }
            } else if (this.tipoDato == 3) {
                var button;
                var contenedor = $('<div style="text-align:right; padding-right:20px;"></div>');
                elementoVisor = $('<span></span>');
                elementoVisor.addClass(this.dataTypes[this.tipoDato]);
                elementoVisor.autoNumeric('init', { vMin: '0', vMax: '999999999999' });
                if (this.valor) {
                    elementoVisor.autoNumeric('set', this.valor);
                }
                if (this.estadoValidacion == this.estadosValidacion.Invalido) {
                    elementoVisor.addClass(this.estilosEstadosValidacion[this.estadoValidacion]);
                }
                contenedor.append(elementoVisor);
                var icono = this.concepto.ICONO;
                if (this.detalleOperaciones) {
                    icono = 'fa fa-calculator';
                    button = $('<i class="text-default ' + icono + ' ' + this.estilosEstadosValidacion[this.estadoValidacion] + '" style="cursor:pointer; float:right; margin-right:-20px;"></i>');
                    var self = this;
                    button.click(function () {
                        self.onBtnClick(self.contexto.Id, self.id);
                    });
                    contenedor.prepend(button);
                }
                elementoVisor = contenedor;
            } else if (this.tipoDato == 4) {
                var button;
                var contenedor = $('<div style="text-align:right; padding-right:20px;"></div>');
                elementoVisor = $('<span></span>');
                elementoVisor.addClass(this.dataTypes[this.tipoDato]);
                elementoVisor.autoNumeric('init', { aSign: '$', pSign: 'p', vMin: '-99999999999999.00', nBracket: '(,)' });
                if (this.valor) {
                    elementoVisor.autoNumeric('set', this.valor);
                }
                if (this.estadoValidacion == this.estadosValidacion.Invalido) {
                    elementoVisor.addClass(this.estilosEstadosValidacion[this.estadoValidacion]);
                }
                contenedor.append(elementoVisor);
                var icono = this.concepto.ICONO;
                if (this.detalleOperaciones) {
                    icono = 'fa fa-calculator';
                    button = $('<i class="text-default ' + icono + ' ' + this.estilosEstadosValidacion[this.estadoValidacion] + '" style="cursor:pointer; float:right; margin-right:-20px;"></i>');
                    var self = this;
                    button.click(function () {
                        self.onBtnClick(self.contexto.Id, self.id);
                    });
                    contenedor.prepend(button);
                }
                elementoVisor = contenedor;
            } else if (this.tipoDato == 5) {
                elementoVisor = $('<span style="text-align:right;"></span>');
                elementoVisor.addClass(this.dataTypes[this.tipoDato]);
                if (this.valor) {
                    elementoVisor.text(this.valor);
                }
                if (this.estadoValidacion == this.estadosValidacion.Invalido) {
                    elementoVisor.addClass(this.estilosEstadosValidacion[this.estadoValidacion]);
                }
            } else if (this.tipoDato == 6) {
                CKEDITOR.disableAutoInline = true;
                if (this.elemento.is('div')) {
                    this.elemento.addClass(this.dataTypes[this.tipoDato]);
                } else {
                    this.elemento = $('<div></div>');
                    this.elemento.addClass(this.dataTypes[this.tipoDato]);
                }
                if (this.valor) {
                    this.elemento.html(this.valor);
                }
            }

            if (this.tipoDato != 6) {
                this.elemento.html(elementoVisor);
            } 
            this.elemento.addClass('concepto');

            if (this.claseCampoVacio) {
                if (!this.valor && (this.tipoDato == 1 || this.tipoDato == 2 || this.tipoDato == 5 || this.tipoDato == 6)) {
                    this.elemento.parent().addClass(this.claseCampoVacio);
                } else {
                    this.elemento.parent().removeClass(this.claseCampoVacio);
                }
            }

            if (this.editable) {
                this.elemento.parent().on('dblclick', $.proxy(this.handleDblClick, this));
            } else {
                this.elemento.parent().off('dblclick');
            }

            $(this.elemento).data('hechoXbrl', this);
        },

        handleDblClick: function (e) {
            e.preventDefault();
            this.cambiarAModoEdicion();
        },

        cambiarAModoEdicion: function () {
            if (!this.editable) return;
            if (!this.editando) {
                this.editando = true;
                this.crearEditorDeCampo();
            } else {
                if (this.campoEditor) {
                    this.campoEditor.focus();
                }
            }

            this.elemento.parent().off('dblclick');
            if (this.tablaNavegable) {
                $(this.tablaNavegable).tableKeyNavigator('pause');
            }
            if(this.tipoDato != 6) {
                this.campoEditor.off('blur');
                this.campoEditor.on('blur', $.proxy(this.handleBlur, this));
                this.campoEditor.off('keydown');
                this.campoEditor.on('keydown', $.proxy(this.handleKeyDown, this));
            }
        },

        handleKeyDown: function (e) {
            if (this.editando && (e.which == 9 && !e.shiftKey)) {
                // Tab
                e.preventDefault();
                if (this.pausarEventoBlur) {
                    this.pausarEventoBlur = false;
                }
                if (this.tablaNavegable) {
                    $(this.tablaNavegable).tableKeyNavigator('editNext');
                }
            } else if (this.editando && (e.which == 9 && e.shiftKey)) {
                // Shift + Tab
                e.preventDefault();
                if (this.pausarEventoBlur) {
                    this.pausarEventoBlur = false;
                }
                if (this.tablaNavegable) {
                    $(this.tablaNavegable).tableKeyNavigator('editPrev');
                }
            }
        },

        handleBlur: function (e) {
            if (!this.pausarEventoBlur && !this.clicEnControlPropio) {

                this.editando = false;
                var nuevoValor = this.obtenerValorDeCampo();
                if (nuevoValor != this.valor) {
                    this.setValor(nuevoValor);
                }
                this.crearVisorDeCampo();
                if (this.tablaNavegable) {
                    $(this.tablaNavegable).tableKeyNavigator('resume');
                }

            }
            this.clicEnControlPropio = false;
        },

        generateUuid: function () {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        },

        obtenerValorDeCampo: function () {

            var valor;

            if (this.tipoDato == 1) {
                valor = this.campoEditor.val();
            } else if (this.tipoDato == 2) {
                valor = this.campoEditor.val();
            } else if (this.tipoDato == 3) {
                valor = this.campoEditor.autoNumeric('get');
            } else if (this.tipoDato == 4) {
                valor = this.campoEditor.autoNumeric('get');
            } else if (this.tipoDato == 5) {
                valor = this.campoEditor.val();
            } else if (this.tipoDato == 6) {
                valor = this.campoEditor.getData();
            }

            return valor;
        },

        valido: function (estado) {
            if (estado) {
                if (estado != this.estadoValidacion) {
                    this.estadoValidacion = estado;
                    this.rebuild();
                }
            } else {
                return this.estadoValidacion;
            }
        },

        actualizar: function (formatos) {

            var idFormato = this.formato.IdFormato;
            var idContexto = this.contexto.Id;
            var idConcepto = this.id;

            if (idFormato && idContexto) {
                for (f in formatos) {
                    if (formatos[f].IdFormato == idFormato) {
                        this.formato = formatos[f];
                        break;
                    }
                }
                if (this.formato) {
                    for (var i = 0; i < this.formato.Contextos.length; i++) {
                        var c = this.formato.Contextos[i];
                        if (c.Id == idContexto) {
                            this.contexto = c;
                            break;
                        }
                    }
                }
            }

            var valor = this.contexto.Hechos[idConcepto];
            this.setValor(valor);
        },

        detalleOperacion: function (detalleOp) {
            if (detalleOp != this.detalleOperaciones) {
                this.detalleOperaciones = detalleOp;
                this.rebuild();
            }
        },

        readonly: function (read) {
            if(read != this.editable) {
                this.editable = read;
                this.crearVisorDeCampo();
            }
        },

        getValor: function () {
            return this.valor;
        },

        setValor: function (valor) {
            if (valor !== undefined && valor !== null) {

                if (valor != this.valor) {
                    this.valor = valor;
                    this.contexto.Hechos[this.id] = this.valor;
                    this.onValueChanged(this);
                }
            }
        },

        setValorBatch: function (valor) {
            this.valor = valor;
            this.contexto.Hechos[this.id] = this.valor;
        },

        crearEditorDeCampo: function () {
            var elementoEditor;
            var campoEditor;
            var self = this;
            if (this.tipoDato == 1) {
                elementoEditor = $('<input type="text"/>')
                elementoEditor.addClass(this.dataTypes[this.tipoDato]);
                elementoEditor.width(this.elemento.parent().width());
                if (this.valor) {
                    elementoEditor.val(this.valor);
                }
                campoEditor = elementoEditor;
            } else if (this.tipoDato == 2) {
                elementoEditor = $('<input type="text"/>')
                elementoEditor.addClass(this.dataTypes[this.tipoDato]);
                elementoEditor.width(this.elemento.parent().width());
                elementoEditor.datepicker({
                    format: 'yyyy-mm-dd',
                    autoclose: true,
                    language: 'es'
                });
                elementoEditor.datepicker().on('show', function (e) {
                    self.pausarEventoBlur = true;
                });
                elementoEditor.datepicker().on('hide', function (e) {
                    self.pausarEventoBlur = false;
                    self.campoEditor.trigger('blur');
                });

                if (this.valor) {
                    elementoEditor.val(this.valor);
                }
                campoEditor = elementoEditor;
            } else if (this.tipoDato == 3) {

                var icono = this.concepto.ICONO;
                if (this.detalleOperaciones) {
                    icono = 'fa fa-calculator ' + this.estilosEstadosValidacion[this.estadoValidacion];
                }

                elementoEditor = $('<div class="input-group"><span class="input-group-btn"><button class="btn btn-default" style="width:40px;" type="button"><i class="text-default ' + icono + '"></i></button></span></div>');
                var input = $('<input type="text" class="form-control"/>');
                input.autoNumeric('init', { vMin: '0', vMax: '999999999999' });
                if (this.valor) {
                    input.autoNumeric('set', this.valor);
                }
                if (this.detalleOperaciones) {
                    elementoEditor.find('button').mousedown(function () {
                        self.onBtnClick(self.contexto.Id, self.id, input);
                    });
                } else {
                    elementoEditor.find('button').click(function () {
                        input.focus();
                    });
                    elementoEditor.find('button').mousedown(function () {
                        self.clicEnControlPropio = true;
                    });
                }
                elementoEditor.width(this.elemento.parent().width());
                elementoEditor.prepend(input);
                campoEditor = input;
            } else if (this.tipoDato == 4) {
                var icono = this.concepto.ICONO;
                if (this.detalleOperaciones) {
                    icono = 'fa fa-calculator ' + this.estilosEstadosValidacion[this.estadoValidacion];
                }

                elementoEditor = $('<div class="input-group"><span class="input-group-btn"><button class="btn btn-default" style="width:40px;" type="button"><i class="text-default ' + icono + '"></i></button></span></div>');
                var input = $('<input type="text" class="form-control"/>');
                input.autoNumeric('init', { aSign: '$', pSign: 'p', vMin: '-99999999999999.00', nBracket: '(,)' });
                if (this.valor) {
                    input.autoNumeric('set', this.valor);
                }
                if (this.detalleOperaciones) {
                    var self = this;
                    elementoEditor.find('button').mousedown(function () {
                        self.onBtnClick(self.contexto.Id, self.id, input);
                    });
                } else {
                    elementoEditor.find('button').click(function () {
                        input.focus();
                    });
                    elementoEditor.find('button').mousedown(function () {
                        self.clicEnControlPropio = true;
                    });
                }
                elementoEditor.width(this.elemento.parent().width());
                elementoEditor.prepend(input);
                campoEditor = input;
            } else if (this.tipoDato == 5) {

                elementoEditor = $('<select name="' + this.idElemento + '" class="form-control m-b acombo"><option value="SI">SI</option><option value="NO">NO</option></select>');
                if (this.valor) {
                    elementoEditor.val(this.valor);
                }
                elementoEditor.width(this.elemento.parent().width());
                campoEditor = elementoEditor;
            } else if (this.tipoDato == 6) {
                elementoEditor = this.elemento;
                elementoEditor.prop('contenteditable', true);
                if (!this.campoEditor) {
                    campoEditor = CKEDITOR.inline(elementoEditor[0]);
                    campoEditor.on('blur', $.proxy(this.handleBlur, this));
                } else {
                    campoEditor = this.campoEditor;
                }
            }

            if (this.tipoDato != 6) {
                this.elemento.html(elementoEditor);
            }
            this.campoEditor = campoEditor;
            this.campoEditor.focus();
            this.elemento.addClass('concepto');
            this.clearSelection();
            $(this.elemento).data('hechoXbrl', this);
        },

        rebuild: function () {
            if (!this.editando) {
                this.crearVisorDeCampo();
            } else {
                this.crearEditorDeCampo();
            }
        }
    }

    $.fn.campoCapturaXbrl = function (action, options) {

        if (!action || action == 'init') {

            return this.each(function () {
                var editando = false;
                var idFormato;
                var idContexto;
                var idConcepto;

                var concepto;
                var contexto;
                var formato;
                var valor;

                var settings = $.extend({
                    formatos: undefined,
                    catalogoConceptos: undefined,
                    tablaNavegable: undefined,
                    claseCampoVacio: undefined,
                    onBtnClick: $.noop,
                    onValueChanged: $.noop
                }, options);

                if (settings.formatos && settings.catalogoConceptos) {

                    idFormato = $(this).data('format');
                    idContexto = $(this).data('context');
                    idConcepto = $(this).data('concept');

                    if (idFormato && idContexto) {
                        for (f in settings.formatos) {
                            if (settings.formatos[f].IdFormato == idFormato) {
                                formato = settings.formatos[f];
                                break;
                            }
                        }
                        if (formato) {
                            for (var i = 0; i < formato.Contextos.length; i++) {
                                var c = formato.Contextos[i];
                                if (c.Id == idContexto) {
                                    contexto = c;
                                    break;
                                }
                            }
                        }
                    }
                    if (idConcepto) {
                        for (var i = 0; i < settings.catalogoConceptos.length; i++) {
                            var c = settings.catalogoConceptos[i];
                            if (c.CUENTA_EMISNET == idConcepto) {
                                concepto = c;
                                break;
                            }
                        }
                    }

                    if (formato && contexto && concepto) {

                        if (contexto.Hechos) {
                            valor = contexto.Hechos[idConcepto];
                        }

                        if (!settings.tablaNavegable) {
                            if ($(this).parent().is('td')) {
                                var table = $(this).closest('table');
                                if (table.tableKeyNavigator) {
                                    settings.tablaNavegable = table;
                                }
                            }
                        }

                        var hechoXbrl = new HechoXbrl($(this), formato, contexto, concepto, valor, settings.tablaNavegable, settings.claseCampoVacio, settings.onBtnClick, settings.onValueChanged);

                        hechoXbrl.rebuild();
                    }
                }
            });
        } else if (action == 'readonly') {
            return this.each(function () {
                var hechoXbrl = $(this).data('hechoXbrl');
                if (hechoXbrl) {
                    hechoXbrl.readonly(options);
                }
            });
        } else if (action == 'setValor') {
            return this.each(function () {
                var hechoXbrl = $(this).data('hechoXbrl');
                if (hechoXbrl) {
                    hechoXbrl.setValor(options);
                }
            });
        } else if (action == 'getValor') {
            var hechoXbrl = $(this).data('hechoXbrl');
            if (hechoXbrl) {
                return hechoXbrl.getValor();
            }
        } else if (action == 'valido') {
            return this.each(function () {
                var hechoXbrl = $(this).data('hechoXbrl');
                if (hechoXbrl) {
                    hechoXbrl.valido(options);
                }
            });
        } else if (action == 'detalleOperacion') {
            return this.each(function () {
                var hechoXbrl = $(this).data('hechoXbrl');
                if (hechoXbrl) {
                    hechoXbrl.detalleOperacion(options);
                }
            });
        } else if (action == 'actualizar') {
            return this.each(function () {
                var hechoXbrl = $(this).data('hechoXbrl');
                if (hechoXbrl) {

                    idFormato = hechoXbrl.formato.IdFormato;
                    idContexto = hechoXbrl.contexto.Id;
                    idConcepto = hechoXbrl.id;
                    var formato;
                    var contexto;
                    if (idFormato && idContexto) {
                        for (f in formatoCaptura) {
                            if (formatoCaptura[f].IdFormato && formatoCaptura[f].IdFormato == idFormato) {
                                formato = formatoCaptura[f];
                                break;
                            }
                        }
                        if (formato) {
                            for (var i = 0; i < formato.Contextos.length; i++) {
                                var c = formato.Contextos[i];
                                if (c.Id == idContexto) {
                                    contexto = c;
                                    break;
                                }
                            }
                        }
                    }
                    if (formato && contexto) {
                        hechoXbrl.formato = formato;
                        hechoXbrl.contexto = contexto;
                        hechoXbrl.setValorBatch(contexto.Hechos[idConcepto]);
                        hechoXbrl.rebuild();
                    }
                }
            });
        } else if (action == 'redibujar') {
            return this.each(function () {
                var hechoXbrl = $(this).data('hechoXbrl');
                if (hechoXbrl) {
                    hechoXbrl.rebuild();
                }
            });
        } else if (action == 'editar') {
            var hechoXbrl = $(this).data('hechoXbrl');
            if (hechoXbrl) {
                hechoXbrl.cambiarAModoEdicion();
            }
        } else if (action == 'setValorBatch') {
            var hechoXbrl = $(this).data('hechoXbrl');
            if (hechoXbrl) {
                hechoXbrl.setValorBatch(options);
            }
        }

    }
}(jQuery));