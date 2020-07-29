(function ($) {

    var TableKeyNavigator = function (elementos, xContainer, yContainer, onBeforeActive, onAfterActive, estilos, tabIndex, onSpaceOrEnterKey, onAfterPaste, onAfterRangePaste, onBeforeCopy) {
        this.elementos = elementos;
        this.currentTd = undefined;
        this.parent = undefined;
        this.paused = false;
        this.xContainer = xContainer;
        this.yContainer = yContainer;
        this.onBeforeActive = onBeforeActive;
        this.onAfterActive = onAfterActive;
        this.estilos = estilos;
        this.tabIndex = tabIndex;
        this.onSpaceOrEnterKey = onSpaceOrEnterKey;
        this.textArea = undefined;
        this.contenedorTextArea = $('#clipboard-container');
        this.ctrlPresionado = false;
        this.onAfterPaste = onAfterPaste;
        this.onAfterRangePaste = onAfterRangePaste;
        this.ancho = 0;
        this.alto = 0;
        this.rangoSeleccionado = false;
        this.rangoActual = undefined;
        this.estaSeleccionando = false;
        this.onBeforeCopy = onBeforeCopy;
    }

    TableKeyNavigator.prototype = {
        activateCell: function (el, limpiarSeleccion) {
            if (this.onBeforeActive) {
                this.onBeforeActive(el);
            }

            if (this.rangoSeleccionado && limpiarSeleccion) {
                this.limpiarSeleccionRango();
            }

            this.currentTd.removeClass(this.estilos.activeClass);
            this.currentTd = el;
            this.currentTd.addClass(this.estilos.activeClass);

            this.currentTd.focus();

            var containerHeight = this.yContainer.height();
            var containerWidth = this.xContainer.width();
            var containerScrollY = this.yContainer.scrollTop();
            var containerScrollX = this.xContainer.scrollLeft();

            var elementTop = el.position().top;
            var elementLeft = el.position().left;
            var elementHeight = el.height();
            var elementWidth = el.width();

            if ((elementTop + elementHeight) > containerHeight) {
                this.yContainer.scrollTop(containerScrollY + elementTop);
            }

            if (elementTop < 0) {
                this.yContainer.scrollTop(containerScrollY + elementTop);
            }

            if ((elementLeft + elementWidth) > containerWidth) {
                this.xContainer.scrollLeft(containerScrollX + elementLeft);
            }

            if (elementLeft < 0) {
                this.xContainer.scrollLeft(containerScrollX + elementLeft);
            }

            if (elementLeft == 0 && containerScrollX > 0) {
                this.xContainer.scrollLeft(containerScrollX - elementWidth);
            }
            if (this.onAfterActive) {
                this.onAfterActive(el);
            }
        },

        handleKeyDown: function (e) {
            var td;
            if (e.which == 39) {
                // Right Arrow
                e.preventDefault();
                this.rigth();
            } else if (e.which == 37) {
                // Left Arrow
                e.preventDefault();
                this.left();
            } else if (e.which == 38) {
                // Up Arrow
                e.preventDefault();
                this.up();
            } else if (e.which == 40) {
                // Down Arrow
                e.preventDefault();
                this.down();
            } else if (e.which == 13 || e.which == 32) {
                // Enter or Spacebar - edit cell
                e.preventDefault();
                if (this.onSpaceOrEnterKey) {
                    this.onSpaceOrEnterKey(e, this.currentTd);
                }
            } else if (e.which == 9 && !e.shiftKey) {
                // Tab
                e.preventDefault();
                this.rigth();
            } else if (e.which == 9 && e.shiftKey) {
                // Shift + Tab
                e.preventDefault();
                this.left();
            } else if (e.which == 17) {
                // Ctrl
                if (!this.ctrlPresionado) {
                    this.ctrlPresionado = true;
                    this.textArea = $('<textarea id="clipboard" style="width:1px; height: 1px; padding: 0px;"></textarea>');
                    this.textArea.on('keyup', $.proxy(this.handleKeyUp, this));
                    this.contenedorTextArea.empty().show();
                    this.contenedorTextArea.append(this.textArea);
                    var self = this;
                    this.textArea.focus();
                    this.crearContenidoACopiar(function (valorACopiar) {
                        self.textArea.val(valorACopiar);
                        self.textArea.select();
                    });
                }
                //$(document).
            }
        },

        handleKeyUp: function (e) {
            if (this.ctrlPresionado) {
                var selectionStart = 0, selectionEnd = 0;
                if (this.textArea[0].selectionStart) selectionStart = this.textArea[0].selectionStart;
                if (this.textArea[0].selectionEnd) selectionEnd = this.textArea[0].selectionEnd;
                if (selectionStart == selectionEnd) {
                    this.pegarTexto(this.textArea.val(), this.currentTd);
                } else {
                    this.parent.find('.' + this.estilos.rangoSeleccionadoB).removeClass(this.estilos.rangoSeleccionadoB).addClass(this.estilos.rangoSeleccionadoBD);
                    this.parent.find('.' + this.estilos.rangoSeleccionadoT).removeClass(this.estilos.rangoSeleccionadoT).addClass(this.estilos.rangoSeleccionadoTD);
                    this.parent.find('.' + this.estilos.rangoSeleccionadoL).removeClass(this.estilos.rangoSeleccionadoL).addClass(this.estilos.rangoSeleccionadoLD);
                    this.parent.find('.' + this.estilos.rangoSeleccionadoR).removeClass(this.estilos.rangoSeleccionadoR).addClass(this.estilos.rangoSeleccionadoRD);
                }
                this.contenedorTextArea.empty();
                this.ctrlPresionado = false;
            }
        },

        crearContenidoACopiar: function (callback) {
            if (this.rangoActual) {

                var contenidos = new Array(this.rangoActual.alto);
                for (var i = 0; i < contenidos.length; i++) {
                    contenidos[i] = new Array(this.rangoActual.ancho);
                }

                var inicioRangoX = 0;
                var finRangoX = 0;
                var inicioRangoY = 0;
                var finRangoY = 0;

                if (this.rangoActual.ancho < 0) {
                    inicioRangoX = (this.rangoActual.x + this.rangoActual.ancho + 1) < 0 ? 0 : (this.rangoActual.x + this.rangoActual.ancho + 1);
                    finRangoX = this.rangoActual.x;
                } else {
                    inicioRangoX = this.rangoActual.x;
                    finRangoX = (this.rangoActual.x + this.rangoActual.ancho) > (this.ancho) ? (this.ancho - 1) : (this.rangoActual.x + this.rangoActual.ancho - 1);
                }

                if (this.rangoActual.alto < 0) {
                    inicioRangoY = (this.rangoActual.y + this.rangoActual.alto + 1) < 0 ? 0 : (this.rangoActual.y + this.rangoActual.alto + 1);
                    finRangoY = this.rangoActual.y;
                } else {
                    inicioRangoY = this.rangoActual.y;
                    finRangoY = (this.rangoActual.y + this.rangoActual.alto) > (this.alto) ? (this.alto - 1) : (this.rangoActual.y + this.rangoActual.alto - 1);
                }

                var self = this;

                this.elementos.each(function () {
                    var row = $(this).data('row');
                    var col = $(this).data('col');
                    if (row >= inicioRangoY && col >= inicioRangoX && row <= finRangoY && col <= finRangoX) {
                        var valor = '';
                        if (self.onBeforeCopy) {
                            valor = self.onBeforeCopy($(this));
                            if (!valor) {
                                valor = '';
                            }
                        }
                        contenidos[row - inicioRangoY][col - inicioRangoX] = valor;
                    }
                }).promise().done(function () {
                    var renglones = new Array();
                    for (var j = 0; j < contenidos.length; j++) {
                        renglones[j] = contenidos[j].join('\t');
                    }
                    callback(renglones.join('\n'));
                });

            } else {
                callback(this.onBeforeCopy($(this.currentTd)));
            }
        },

        pegarTexto: function (value, startTd) {
            var rows = value.split('\n');
            var rowStartTd = startTd;

            var ancho = 0;
            var alto = 0;

            var y = startTd.data('row');
            var x = startTd.data('col');

            if (this.onAfterPaste) {
                for (var i = 0; i < rows.length; i++) {
                    if (rows[i] === '') break;
                    alto++;
                    var cells = rows[i].split("\t");
                    if (cells.length > ancho) { ancho = cells.length; }
                    var cellStartTd = rowStartTd;
                    for (var j = 0; j < cells.length; j++) {
                        this.onAfterPaste(cells[j], cellStartTd);
                        cellStartTd = this.rigthTd(cellStartTd);
                        if (!cellStartTd) break;
                    }
                    rowStartTd = this.downTd(rowStartTd);
                    if (!rowStartTd) break;
                }
                if (this.onAfterRangePaste) {
                    this.onAfterRangePaste(value, startTd, x, y, ancho, alto);
                }
            }
        },

        seleccionarRango: function (x, y, ancho, alto) {
            var self = this;

            if (x === undefined || y === undefined || ancho === undefined || alto === undefined || x < 0 || y < 0 || ancho == 0 || alto == 0) { return; }

            var inicioRangoX = 0;
            var finRangoX = 0;
            var inicioRangoY = 0;
            var finRangoY = 0;

            if (ancho < 0) {
                inicioRangoX = (x + ancho + 1) < 0 ? 0 : (x + ancho + 1);
                finRangoX = x;
            } else {
                inicioRangoX = x;
                finRangoX = (x + ancho) > (this.ancho) ? (this.ancho - 1) : (x + ancho - 1);
            }

            if (alto < 0) {
                inicioRangoY = (y + alto + 1) < 0 ? 0 : (y + alto + 1);
                finRangoY = y;
            } else {
                inicioRangoY = y;
                finRangoY = (y + alto) > (this.alto) ? (this.alto - 1) : (y + alto - 1);
            }

            this.elementos.each(function () {
                var row = $(this).data('row');
                var col = $(this).data('col');
                if (row >= inicioRangoY && col >= inicioRangoX && row <= finRangoY && col <= finRangoX) {
                    $(this).addClass(self.estilos.rangoSeleccionado);
                    if (row == inicioRangoY) {
                        $(this).addClass(self.estilos.rangoSeleccionadoT);
                    } else {
                        $(this).removeClass(self.estilos.rangoSeleccionadoT);
                    }
                    if (row == finRangoY) {
                        $(this).addClass(self.estilos.rangoSeleccionadoB);
                    } else {
                        $(this).removeClass(self.estilos.rangoSeleccionadoB);
                    }
                    if (col == inicioRangoX) {
                        $(this).addClass(self.estilos.rangoSeleccionadoL);
                    } else {
                        $(this).removeClass(self.estilos.rangoSeleccionadoL);
                    }
                    if (col == finRangoX) {
                        $(this).addClass(self.estilos.rangoSeleccionadoR);
                    } else {
                        $(this).removeClass(self.estilos.rangoSeleccionadoR);
                    }
                } else {
                    $(this).removeClass(self.estilos.rangoSeleccionadoT);
                    $(this).removeClass(self.estilos.rangoSeleccionadoB);
                    $(this).removeClass(self.estilos.rangoSeleccionadoL);
                    $(this).removeClass(self.estilos.rangoSeleccionadoR);
                    $(this).removeClass(self.estilos.rangoSeleccionadoTD);
                    $(this).removeClass(self.estilos.rangoSeleccionadoBD);
                    $(this).removeClass(self.estilos.rangoSeleccionadoLD);
                    $(this).removeClass(self.estilos.rangoSeleccionadoRD);
                    $(this).removeClass(self.estilos.rangoSeleccionado);
                }
            });

            this.rangoSeleccionado = true;
        },

        limpiarSeleccionRango: function () {
            var self = this;
            this.elementos.each(function () {
                $(this).removeClass(self.estilos.rangoSeleccionadoT);
                $(this).removeClass(self.estilos.rangoSeleccionadoB);
                $(this).removeClass(self.estilos.rangoSeleccionadoL);
                $(this).removeClass(self.estilos.rangoSeleccionadoR);
                $(this).removeClass(self.estilos.rangoSeleccionadoTD);
                $(this).removeClass(self.estilos.rangoSeleccionadoBD);
                $(this).removeClass(self.estilos.rangoSeleccionadoLD);
                $(this).removeClass(self.estilos.rangoSeleccionadoRD);
                $(this).removeClass(self.estilos.rangoSeleccionado);
            });
            this.rangoSeleccionado = false;
            this.rangoActual = undefined;
        },

        editNext: function () {
            if (this.next()) {
                if (this.onSpaceOrEnterKey) {
                    this.onSpaceOrEnterKey(null, this.currentTd);
                }
            }
        },

        editPrev: function () {
            if (this.prev()) {
                if (this.onSpaceOrEnterKey) {
                    this.onSpaceOrEnterKey(null, this.currentTd);
                }
            }
        },

        leftTd: function (startTd) {
            var td;
            var next = startTd.prev();
            if (next && next.data('keynav')) {
                td = next;
            }
            return td;
        },

        rigthTd: function (startTd) {
            var td;
            var next = startTd.next();
            if (next && next.data('keynav')) {
                td = next;
            }
            return td;
        },

        upTd: function (startTd) {
            var td;
            var next = startTd.closest('tr').prev().find('td').eq(startTd.index());
            if (next && next.data('keynav')) {
                td = next;
            }
            return td;
        },

        downTd: function (startTd) {
            var td;
            var next = startTd.closest('tr').next().find('td').eq(startTd.index());
            if (next && next.data('keynav')) {
                td = next;
            }
            return td;
        },


        left: function () {
            var td = this.leftTd(this.currentTd);
            if (td && td.length > 0) {
                this.activateCell(td, true);
                return true;
            }
            return false;
        },

        rigth: function () {
            var td = this.rigthTd(this.currentTd);
            if (td && td.length > 0) {
                this.activateCell(td, true);
                return true;
            }
            return false;
        },

        next: function () {
            if (!this.rigth()) {
                var td = this.currentTd.closest('tr').next().find('td').first();
                while (td && td.length > 0 && !td.data('keynav')) {
                    td = td.next();
                }
                if (td && td.length > 0) {
                    this.activateCell(td, true);
                    return true;
                }
            } else {
                return true;
            }
            return false;
        },

        prev: function () {
            if (!this.left()) {
                var td = this.currentTd.closest('tr').prev().find('td').last('td');
                while (td && td.length > 0 && !td.data('keynav')) {
                    td = td.prev();
                }
                if (td && td.length > 0) {
                    this.activateCell(td, true);
                    return true;
                }
            } else {
                return true;
            }
            return false;
        },

        up: function () {
            var td = this.upTd(this.currentTd);
            if (td && td.length > 0) {
                this.activateCell(td, true);
                return true;
            }
            return false;
        },

        down: function () {
            var td = this.downTd(this.currentTd);
            if (td && td.length > 0) {
                this.activateCell(td, true);
                return true;
            }
            return false;
        },

        indexarElementos: function () {
            var rowTd = this.elementos.first();
            var renglon = 0;

            var alto = 0;
            var ancho = 0;

            while (rowTd && rowTd.length > 0) {
                var cellTd = rowTd;
                var columna = 0;
                while (cellTd && cellTd.length > 0) {
                    cellTd.data('row', renglon);
                    cellTd.data('col', columna++);

                    if (columna > ancho) { ancho = columna; }

                    cellTd = this.rigthTd(cellTd);
                }
                renglon++;
                if (renglon > alto) { alto = renglon; }
                rowTd = this.downTd(rowTd);
            }

            this.ancho = ancho;
            this.alto = alto;

        },

        build: function () {
            this.currentTd = this.elementos.first();
            this.elementos.data('keynav', true);
            this.indexarElementos();
            var self = this;

            this.elementos.bind('click', function (e) {
                if (this[0] != self.currentTd[0]) {
                    self.activateCell($(this), true);
                }
            });

            this.parent = $(this.elementos).closest('table');

            this.elementos.bind('mousedown', $.proxy(this.handleMouseDown, this));
            this.elementos.bind('mousemove', $.proxy(this.handleMouseMove, this));
            this.elementos.bind('mouseup', $.proxy(this.handleMouseUp, this));

            this.parent.css('user-select', 'none').prop('unselectable', 'on').on('selectstart', false);
            if (!this.parent.attr('tabindex')) {
                this.parent.attr({ tabindex: this.tabIndex || -1 });
            }
            this.parent.on('keydown', $.proxy(this.handleKeyDown, this));
        },

        pause: function () {
            this.parent.off('keydown');
            this.elementos.unbind('mousedown');
            this.elementos.unbind('mousemove');
            this.elementos.unbind('mouseup');
        },

        resume: function () {
            this.parent.on('keydown', $.proxy(this.handleKeyDown, this));
            this.elementos.bind('mousedown', $.proxy(this.handleMouseDown, this));
            this.elementos.bind('mousemove', $.proxy(this.handleMouseMove, this));
            this.elementos.bind('mouseup', $.proxy(this.handleMouseUp, this));
        },

        handleMouseDown: function (e) {
            if (this.isRightClick(e)) { return false }
            var target = $(e.target);
            if (!target.is('td')) {
                target = target.closest('td');
            }
            if (target.data('keynav')) {
                this.estaSeleccionando = true;
                this.rangoActual = {
                    x: target.data('col'),
                    y: target.data('row'),
                    ancho: 1,
                    alto: 1
                };
                this.seleccionarRango(this.rangoActual.x, this.rangoActual.y, this.rangoActual.ancho, this.rangoActual.alto);
                if (typeof e.preventDefault != 'undefined') { e.preventDefault(); }
                document.documentElement.onselectstart = function () { return false; };
                e.stopPropagation();
            }
            return false;
        },

        handleMouseUp: function (e) {
            if (this.isRightClick(e)) {
                return false;
            }
            if (this.estaSeleccionando) {
                this.parent.focus();
            }
            this.estaSeleccionando = false;
            document.documentElement.onselectstart = function () { return true; };

        },

        handleMouseMove: function (e) {
            if (this.estaSeleccionando) {
                var target = $(e.target);
                if (!target.is('td')) {
                    target = target.closest('td');
                }
                if (target.data('keynav')) {
                    var curCol = target.data('col');
                    var curRow = target.data('row');
                    var ancho = 0;
                    var alto = 0;

                    if ((curCol - this.rangoActual.x) >= 0) {
                        ancho = (curCol - this.rangoActual.x) + 1;
                    } else {
                        ancho = (curCol - this.rangoActual.x) - 1;
                    }

                    if ((curRow - this.rangoActual.y) >= 0) {
                        alto = (curRow - this.rangoActual.y) + 1;
                    } else {
                        alto = (curRow - this.rangoActual.y) - 1;
                    }

                    this.rangoActual = {
                        x: this.rangoActual.x,
                        y: this.rangoActual.y,
                        ancho: ancho,
                        alto: alto
                    };

                    this.seleccionarRango(this.rangoActual.x, this.rangoActual.y, this.rangoActual.ancho, this.rangoActual.alto);
                    this.activateCell(target, false);
                }
            }
        },

        isRightClick: function (e) {
            if (e.which) {
                return (e.which == 3);
            } else if (e.button) {
                return (e.button == 2);
            }
            return false;
        }
    }

    $.fn.tableKeyNavigator = function (action, options) {

        if (action == 'init') {

            var settings = $.extend({
                estilos: {
                    activeClass: 'celdaSeleccionada',
                    rangoSeleccionado: 'rangoSeleccionado',
                    rangoSeleccionadoL: 'rangoSeleccionadoL',
                    rangoSeleccionadoR: 'rangoSeleccionadoR',
                    rangoSeleccionadoT: 'rangoSeleccionadoT',
                    rangoSeleccionadoB: 'rangoSeleccionadoB',
                    rangoSeleccionadoLD: 'rangoSeleccionadoLD',
                    rangoSeleccionadoRD: 'rangoSeleccionadoRD',
                    rangoSeleccionadoTD: 'rangoSeleccionadoTD',
                    rangoSeleccionadoBD: 'rangoSeleccionadoBD'
                },
                onBeforeActive: $.noop,
                onAfterActive: $.noop,
                onSpaceOrEnterKey: $.noop,
                xContainer: this.parent(),
                yContainer: this.parent(),
                tabIndex: -1,
                onAfterCellPaste: $.noop,
                onAfterRangePaste: $.noop,
                onBeforeCopy: $.noop,
            }, options);

            var tableKeyNav = new TableKeyNavigator($(this), settings.xContainer, settings.yContainer, settings.onBeforeActive, settings.onAfterActive, settings.estilos, settings.tabIndex, settings.onSpaceOrEnterKey, settings.onAfterPaste, settings.onAfterRangePaste, settings.onBeforeCopy);

            tableKeyNav.build();

            $(tableKeyNav.parent).data('tableKeyNavigator', tableKeyNav);

        } else if (action == 'pause') {
            var tableKayNav = $(this).data('tableKeyNavigator');
            if (tableKayNav) {
                tableKayNav.pause();
            }
        } else if (action == 'resume') {
            var tableKayNav = $(this).data('tableKeyNavigator');
            if (tableKayNav) {
                tableKayNav.resume();
            }
        } else if (action == 'editNext') {
            var tableKayNav = $(this).data('tableKeyNavigator');
            if (tableKayNav) {
                tableKayNav.editNext();
            }
        } else if (action == 'editPrev') {
            var tableKayNav = $(this).data('tableKeyNavigator');
            if (tableKayNav) {
                tableKayNav.editPrev();
            }
        } else if (action == 'ancho') {
            var tableKayNav = $(this).data('tableKeyNavigator');
            if (tableKayNav) {
                return tableKayNav.ancho;
            }
        } else if (action == 'alto') {
            var tableKayNav = $(this).data('tableKeyNavigator');
            if (tableKayNav) {
                return tableKayNav.alto;
            }
        } else if (action == 'seleccionarRango') {

            var settings = $.extend({
                x: 0,
                y: 0,
                ancho: 0,
                alto: 0
            }, options);

            var tableKayNav = $(this).data('tableKeyNavigator');
            if (tableKayNav) {
                return tableKayNav.seleccionarRango(settings.x, settings.y, settings.ancho, settings.alto);
            }
        } else if (action == 'limpiarSeleccionRango') {
            var tableKayNav = $(this).data('tableKeyNavigator');
            if (tableKayNav) {
                return tableKayNav.limpiarSeleccionRango();
            }
        }

        return this;
    }
}(jQuery));