interface JQuery {

    /**
     * Implementación de un plugin de JQuery el cual presenta una tabla que tiene la estructura de un árbol.
     *
     * @param action la acción a realizar sobre el plugin
     * @param los parámetros de configuración del plugin que son sobreescritos para la ejecución del mismo.
     * @return el objeto JQuery sobre el cual se ejecutó el plugin para propósitos de encadenamiento.
     */
    hhTreeTable(action: string, settings?: any): JQuery;

}

(function ($: JQueryStatic) {

    $.fn.hhTreeTable = function (action: string, settings?: any): any {
        if (!action || action === 'init') {
            return this.each(function () {
                var treeTable = new abaxXBRL.plugins.TreeTable(this, settings);
                $(this).data('hhTreeTable', treeTable);
                try {
                    treeTable.render();
                } catch (e) {
                    console.log(e);
                    if (e.stack) {
                        console.error(e.stack);
                    }
                }
            });
        } else if (action === 'increaseIndentation') {
            return this.each(function () {
                var treeTable: abaxXBRL.plugins.TreeTable = $(this).data('hhTreeTable');
                if (treeTable) {
                    treeTable.increaseIndentationOfSelectedRows();
                }
            });
        } else if (action === 'decreaseIndentation') {
            return this.each(function () {
                var treeTable: abaxXBRL.plugins.TreeTable = $(this).data('hhTreeTable');
                if (treeTable) {
                    treeTable.decreaseIndentationOfSelectedRows();
                }
            });
        } else if (action === 'deleteSelectedRows') {
            return this.each(function () {
                var treeTable: abaxXBRL.plugins.TreeTable = $(this).data('hhTreeTable');
                if (treeTable) {
                    treeTable.deleteSelectedRows();
                }
            });
        } else if (action === 'handleMouseUp') {
            return this.each(function () {
                var treeTable: abaxXBRL.plugins.TreeTable = $(this).data('hhTreeTable');
                if (treeTable) {
                    treeTable.handleMouseUpRows(settings);
                }
            });
        } else if (action === 'handleMouseMove') {
            return this.each(function () {
                var treeTable: abaxXBRL.plugins.TreeTable = $(this).data('hhTreeTable');
                if (treeTable) {
                    treeTable.handleMouseMoveRows(settings);
                }
            });
        } else if (action === 'setIsReceiving') {
            return this.each(function () {
                var treeTable: abaxXBRL.plugins.TreeTable = $(this).data('hhTreeTable');
                if (treeTable) {
                    treeTable.setIsReceiving(settings.isReceiving, settings.elementClone);
                }
            });
        } else if (action === 'addTitleRow') {
            return this.each(function () {
                var treeTable: abaxXBRL.plugins.TreeTable = $(this).data('hhTreeTable');
                if (treeTable) {
                    treeTable.addTitleRow(settings.title);
                }
            });
        } else if (action === 'getArrayOfTreeObjects') {
            var treeTable: abaxXBRL.plugins.TreeTable = $(this).data('hhTreeTable');
            if (treeTable) {
                return treeTable.getArrayOfTreeObjects();
            }
        } else if (action === 'filterTable') {
            return this.each(function () {
                var treeTable: abaxXBRL.plugins.TreeTable = $(this).data('hhTreeTable');
                if (treeTable) {
                    treeTable.filterTable(settings);
                }
            });
        } 
    }

})(jQuery);

module abaxXBRL.plugins {

    /**
     * Definición de un nodo de datos dentro del árbol.
     *
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export class TreeNode {

        Id: string;

        /** Los datos asociados al nodo del árbol */
        Data: any;

        /** El orden del nodo en comparación con sus hermanos */
        Order: number;

        /** Indica si el nodo está seleccionado o no */
        Selected: boolean;

        /** Contiene el nivel de indentación del nodo dentro del árbol */
        Indentation: number;
    }

    /**
     * Definición del encabezado de una columa de la tabla.
     *
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export class TreeTableColumnHeader {

        /** El título de la columna */
        Title: string; 

        /** El ancho máximo de la columna */
        MaxWidth: number;

        /** El ancho mínimo de la columna */
        MinWidth: number;

    }

    /**
     * Definición de los settings que pueden especificarse para la presentación de la tabla-árbol.
     *
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export class TreeTableSettings {

        /** Indica que los renglones de la tabla pueden ser reacomodados */
        Sortable: boolean;

        /** Indica si el estado de la tabla es bloqueada o desbloqueada. Cuando una tabla está bloqueada, no puede editarse */
        Blocked: boolean;

        /**
         * Función que será utilizada para obtener el texto que deberá ser presentado en pantalla en una columna en específico.
         *
         * @param rowData los datos asociados al renglón
         * @param columnNumber el número de columna que está por ser presentado en pantalla
         * @return el texto que deberá ser presentado en la columna indicada basándose en los datos asociados al renglón.
         */
        TextColumnFunction: (rowData: any, columnNumber: number) => string;

        /**
        *Funcion que será utilizada al terminar de agregar los renglones se ejecutan eventos en el caso que se utilicen
        */
        initExternalEvent:()=> void;

        /**
         * Función que será utilizada para convertir un elemento cuaquiera a un objeto TreeNode.
         *
         * @param rawData el elemento cualquiera que será utilizado para generar un objeto TreeNode.
         * @return un objeto TreeNode generado a partir del elemento cualquiera.
         */
        AnyToTreeNodeFunction: (rawData: any) => TreeNode;

        /**
         * Función que será utilizada para convertir un nodo de la tabla-árbol a un elemento any.
         *
         * @param node el nodo de la tabla-árbol en turno.
         * @param idx el índice del nodo dentro de la tabla.
         * @return un objeto cualquier javascript creado a partir del nodo de la tabla-árbol.
         */
        TreeNodeToAnyFunction: (node: TreeNode, idx: number) => any;

        /** La lista de datos que serán utilizados para crear la tabla-árbol */
        DataList: Array<any>;

        /** Los títulos de las columnas */
        ColumnDefinitions: OrderedList<TreeTableColumnHeader>;

        /** Indica que esta tabla-árbol puede donar elementos a otra tabla-árbol */
        RowDonator: boolean;

        /** Contiene los selectores que pueden ser utilizados para identificar a los receptores de los elementos que dona esta tabla árbol */
        RowReceptors: Array<string>;
    }

    /**
     * Implementación de una lista ordenada basada en un arreglo.
     *
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export class OrderedList<T> {

        /** La lista de elementos dentro de la lista */
        private elements: Array<T>;

        /**
         * Constructor por defecto de la lista ordenada.
         */
        constructor() {
            this.elements = new Array<T>();
        }

        /**
         * Regresa el número de elementos almacenados dentro de la lista ordenada
         *
         * @return el número de elementos almacenados dentro de la lista ordenada
         */
        public size(): number {
            return this.elements.length;
        }

        /**
         * Agrega un elemento al final de la lista ordenada
         *
         * @param element el elemento que se agregará al final de lista
         */
        public append(element: T): void {
            this.elements.push(element);
        }

        /**
         * Inserta un elemento a la lista ordenada en la posición solicitada.
         *
         * @param element el elemento que se insertará en la lista
         * @param atPosition la posición en que se insertará el elemento dentro de la lista
         */
        public insert(element: any, atPosition: number): void {
            this.elements.splice(atPosition, 0, element);
        }

        /**
         * Elimina un elemento de la lista ordenada basado en la posición proporcionada.
         *
         * @param atPosition el índice del elemento que se desea remover la lista
         */
        public remove(atPosition: number): void {
            if (atPosition >= 0 && atPosition < this.size()) {
                this.elements.splice(atPosition, 1);
            }
        }

        /**
         * Intercambia la posición de dos elementos en la lista ordenada según los parámetros indicados.
         *
         * @param from el índice del elemento origen a intercambiar
         * @param to el índice del elemento destino a intercambiar
         */
        public swap(from: number, to: number): void {
            var tmp = this.elements[from];
            this.elements[from] = this.elements[to];
            this.elements[to] = tmp;
        }

        /**
         * Establece el valor de un elemento dentro de la lista ordenada a un valor específico
         *
         * @param element el valor a establecer para el elemento.
         * @param at la posición del elemento a establecer
         */
        public setElement(element: any, at: number): void {
            if (at >= 0 && at < this.size()) {
                this.elements[at] = element;
            }
        }

        /**
         * Obtiene un elemento en una posición específica dentro de la lista
         *
         * @param at la posición del elemento que se desea obtener
         * @return el elemento en la posición solicitada. null en caso de no existir un elemento en la posición solicitada.
         */
        public getElement(at: number): T {
            var element = null;
            if (at >= 0 && at < this.size()) {
                element = this.elements[at];
            }
            return element;
        }
    }

    /**
     * Implementación de un plugin de jquery para presentar una tabla con funcionalidad de árbol
     *
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export class TreeTable {

        /** Contiene el listado de los selectores que permiten acceder a las tablas-árbol que han sido declaradas al momento. */
        public static CurrentTreeTables = new Array<string>();

        /** La lista con los nodos que componen la tabla. */
        private nodes: OrderedList<TreeNode>;

        /** Los parámetros de configuración de la tabla-árbol */
        private tableSettings: TreeTableSettings;

        /** El identificador del contenedor de los encabezados de la tabla */
        private tableHeaderId: string;

        /** El identificador del elemento de la tabla-árbol */
        private tableElementId: string;

        /** El elemento del DOM que albergará la tabla-árbol */
        private tableContainer: JQuery;

        /** Indica que el usuario está marcando renglones de la tabla por medio del arrastre del mouse */
        private isSelecting: boolean;

        /** Indica que el usuario está ordenando los renglones de la tabla por medio del arrastre del mouse */
        private isSorting: boolean;

        /** Indica que la tabla está recibiendo un elemento que proviene de otra tabla-árbol */
        private isReceiving: boolean;

        /** Contiene temporalmente el índice que sirve como origen para la selección */
        private selectionStartIdx: number;

        /** Contiene temporalmente un clon del elemento que está siendo ordenado dentro de la tabla-árbol */
        private sortElementClone: JQuery;

        /** El elemento que representa el lugar donde se insertará el elemento que se está reordenando dentro de la tabla árbol */
        private sortGhostElement: JQuery;

        /**
         * Constructor por defecto de la clase TreeTable
         *
         * @param tableContainer el elemento JQuery que contendrá la tabla-árbol.
         * @param tableSettings los parámetros de configuración para la tabla-árbol.
         */
        public constructor(tableContainer: JQuery, tableSettings: TreeTableSettings) {
            this.tableSettings = tableSettings;
            if (!this.tableSettings || this.tableSettings === null) {
                this.tableSettings = new TreeTableSettings();
                this.tableSettings.Blocked = false;
                this.tableSettings.Sortable = true;
            }
            if (tableContainer && tableContainer !== null) {
                this.tableContainer = $(tableContainer);
            }
            this.tableElementId = utils.UUIDUtils.generarUUID();
            this.tableHeaderId = utils.UUIDUtils.generarUUID();
            this.nodes = new OrderedList<TreeNode>();
            if (tableSettings.DataList && tableSettings.DataList !== null) {
                for (var z = 0; z < tableSettings.DataList.length; z++) {
                    this.nodes.append(this.tableSettings.AnyToTreeNodeFunction(tableSettings.DataList[z]));
                }
            }
            if ($.inArray('#' + this.tableContainer.attr('id'), TreeTable.CurrentTreeTables) == -1) {
                TreeTable.CurrentTreeTables.push('#' + this.tableContainer.attr('id'));
            }
        }

        /** 
         * Filtra el contenido de la tabla-árbol según un texto contenido en la tabla.
         * 
         * @param filter el filtro a utilizar para filtrar la tabla
         */
        public filterTable(filter: string): void {
            if (filter === '') {
                this.tableContainer.find('.tree-table-row').show();
            } else {
                if (filter.length < 4) return;
                this.tableContainer.find('.tree-table-row').each(function () {
                    if (~$(this).text().toLowerCase().indexOf(filter.toLowerCase())) {
                        $(this).show();
                    } else {
                        $(this).hide();
                    }
                });
            }
        }

        /**
         * Obtiene un arreglo de objetos que representan los nodos del árbol en el orden de presentación en pantalla.
         *
         * @return un arreglo de objetos que representan los nodos del árbol en el orden de presentación en pantalla.
         */
        public getArrayOfTreeObjects(): Array<any> {
            var elements = new Array<any>();

            var rows = $(this.tableContainer).find('.tree-table-row');
            for (var z = 0; z < rows.length; z++) {
                var nodo: TreeNode = $(rows[z]).data('tree-table-node');
                elements.push(this.tableSettings.TreeNodeToAnyFunction(nodo, z));
            }

            return elements;
        }

        /** 
         * Establece el valor del atributo isReceiving de esta tabla-árbol
         *
         * @param isReceiving el valor del atributo isReceiving de esta tabla-árbol a establecer.
         */
        public setIsReceiving(isReceiving: boolean, cloneElement: JQuery): void {
            this.isReceiving = isReceiving;
            this.sortElementClone = cloneElement;
            this.clearRowSelection();
            if (isReceiving) {
                if (this.tableContainer.find('.tree-table-row').length == 0) {
                    this.sortGhostElement = $('<div class="tree-table-row tree-table-empty-row"></div>');
                    for (var y = 0; y < this.tableSettings.ColumnDefinitions.size(); y++) {
                        this.sortGhostElement.append($('<div class="tree-table-cell">&nbsp;</div>'));
                    }
                    this.tableContainer.find('.tree-table-container').append(this.sortGhostElement);
                }
            }
        }

        /** 
         * Presenta la tabla/árbol en pantalla basada en el modelo.
         */
        public render(): void {
            var tableElement = $('<div class="tree-table-container" id="' + this.tableElementId + '"></div>');
            tableElement.append(this.renderHeaders());
            this.renderRows(tableElement);
            this.tableContainer.html('');
            this.tableContainer.append(tableElement);
            this.pauseEvents();
            this.resumeEvents();
        }

        /**
         * Maneja el evento click del mouse para los controles que permiten colapsar y expandir un grupo de renglones
         * 
         * @param e el evento del mouse que disparó esta acción.
         */
        public handleClickCollapseExpand(e: JQueryMouseEventObject): void {

            var div = $(e.target).parents('div.tree-table-row');
            var children = div.parent().children('.tree-table-row');
            var idx = children.index(div);

            var colapsar: boolean = false;
            if ($(e.target).hasClass('fa-chevron-down')) {
                colapsar = true;
            } else if ($(e.target).hasClass('fa-chevron-right')) {
                colapsar = false;
            }

            var node = div.data('tree-table-node');

            for (var z = idx; z < children.length; z++) {
                var childrenNode = $(children[z]).data('tree-table-node');
                if (childrenNode && childrenNode != null && childrenNode.Indentation > node.Indentation) {
                    if (colapsar) {
                        $(children[z]).hide();
                    } else {
                        $(children[z]).show();
                        if ($(children[z]).find('.fa-chevron-right').length > 0) {
                            var indentacionActual = childrenNode.Indentation;
                            var nodosIgnorados = 0;
                            if ((z + 1) < children.length) {
                                var nodoSiguiente = $(children[z + 1]).data('tree-table-node');
                                while (nodoSiguiente && nodoSiguiente !== null && nodoSiguiente.Indentation > indentacionActual) {
                                    nodosIgnorados++;
                                    nodoSiguiente = $(children[z + nodosIgnorados + 1]).data('tree-table-node');
                                }
                                z += nodosIgnorados;
                            }
                        }
                    }
                }
            }

            if (colapsar) {
                $(e.target).removeClass('fa-chevron-down').addClass('fa-chevron-right');
            } else {
                $(e.target).removeClass('fa-chevron-right').addClass('fa-chevron-down');
            }
        }


        /**
         * Maneja el evento mousedown cuando sucede sobre los renglones de la tabla excel. 
         * Si el destino de la acción es el handle del renglón, se ignora para que sea procesado por otro manejador.
         * 
         * @param e el evento del mouse que disparó la invocación de este método.
         * @return true si se desea propagar el evento. false en cualquier otro caso.
         */
        public handleMouseDownRows(e: JQueryMouseEventObject): boolean {
            if (this.isRightClick(e)) { return false; }
            var target = $(e.target);
            if (target.hasClass('fa-bars')) { return true; }
            this.clearRowSelection();
            if (!target.is('div') || !target.hasClass('tree-table-row')) {
                target = target.closest('div.tree-table-row');
            }
            this.isSelecting = true;
            this.isSorting = false;
            this.selectionStartIdx = $(this.tableContainer).find('.tree-table-row').index(target);
            this.markRowsAsSelected(this.selectionStartIdx, 0);
            if (typeof e.preventDefault != 'undefined') { e.preventDefault(); }
            document.documentElement.onselectstart = function () { return false; };
            e.stopPropagation();
        }

        /**
         * Maneja el evento mousedown cuando sucede sobre el icono de ordenamiento de los renglones de la tabla excel.
         * 
         * @param e el evento del mouse que disparó la invocación de este método.
         * @return true si se desea propagar el evento. false en cualquier otro caso.
         */
        public handleMouseDownRowHandler(e: JQueryMouseEventObject): boolean {
            if (this.isRightClick(e)) { return false; }
            var target = $(e.target);
            if (!target.hasClass('fa-bars')) { return true; }
            this.clearRowSelection();
            this.isSorting = true;
            this.isSelecting = false;

            var targetRow = target.closest('div.tree-table-row');

            var rows = $(this.tableContainer).find('.tree-table-row');
            var targetIdx = rows.index(targetRow);
            var targetCloned = targetRow.clone(true, true);

            this.sortElementClone = $('<div class="tree-table-container"></div>');
            this.sortElementClone.append(targetCloned);
            this.sortElementClone.width(this.tableContainer.find('tree-table-container').width());
            this.sortGhostElement = targetRow.clone(false);
            this.sortGhostElement.find('.tree-table-cell').html('&nbsp');
            this.sortGhostElement.removeClass('tree-table-odd tree-table-even').addClass('tree-table-empty-row');

            targetRow.replaceWith(this.sortGhostElement);

            var columnasGhost = this.sortGhostElement.find('.tree-table-cell');
            var columnasClone = targetCloned.find('.tree-table-cell');
            for (var z = 0; z < columnasGhost.length; z++) {
                $(columnasClone[z]).css('width', $(columnasGhost[z]).width());
            }

            var nodosRemovidos = 0;
            while ((targetIdx + nodosRemovidos + 1) < rows.length) {
                var nodoActual: TreeNode = targetCloned.data('tree-table-node');
                var nodoSiguiente: TreeNode = $(rows[targetIdx + nodosRemovidos + 1]).data('tree-table-node');
                if (nodoActual && nodoSiguiente && nodoActual !== null && nodoSiguiente !== null) {
                    if (nodoActual.Indentation < nodoSiguiente.Indentation) {
                        var rowCloned = $(rows[targetIdx + nodosRemovidos + 1]).clone(true, true);
                        $(rows[targetIdx + nodosRemovidos + 1]).remove();
                        this.sortElementClone.append(rowCloned);
                    } else {
                        break;
                    }
                } else {
                    break;
                }
                nodosRemovidos++;
            }

            this.sortElementClone.css('width', this.tableContainer.width());
            this.sortElementClone.css('opacity', 0.8);
            this.sortElementClone.css('position', 'absolute');
            this.sortElementClone.offset({
                left: e.pageX,
                top: e.pageY
            });
            this.sortElementClone.css('z-index', 999);
            this.sortElementClone.css('position', 'absolute');

            $(document.body).append(this.sortElementClone);
            if (typeof e.preventDefault != 'undefined') { e.preventDefault(); }
            document.documentElement.onselectstart = function () { return false; };
            e.stopPropagation();
        }

        /**
         * Maneja el evento mousedown cuando sucede sobre el icono de arrastre de los renglones de la tabla excel.
         * 
         * @param e el evento del mouse que disparó la invocación de este método.
         * @return true si se desea propagar el evento. false en cualquier otro caso.
         */
        public handleMouseDownRowDrag(e: JQueryMouseEventObject): boolean {
            if (this.isRightClick(e)) { return false; }
            var target = $(e.target);
            if (!target.hasClass('fa-crosshairs')) { return true; }
            this.isSorting = false;
            this.isSelecting = false;
            this.isReceiving = false;

            var rows = $(this.tableContainer).find('.tree-table-row');
            var selectedRows = $(this.tableContainer).find('.tree-table-row.tree-table-selected');
            if (selectedRows.length == 0) {
                selectedRows = target.closest('div.tree-table-row');
            }

            this.sortElementClone = $('<div class="tree-table-container"></div>');
            this.sortElementClone.width(this.tableContainer.find('tree-table-container').width());
            this.sortElementClone.css('width', this.tableContainer.width());
            this.sortElementClone.css('opacity', 0.8);
            this.sortElementClone.css('position', 'absolute');
            this.sortElementClone.offset({
                left: e.pageX,
                top: e.pageY
            });
            this.sortElementClone.css('z-index', 999);
            this.sortElementClone.css('position', 'absolute');
            var self = this;
            $(selectedRows).each(function () {
                var row = $(this);
                var clonedRow = row.clone(true, true);
                var columnasRow = row.find('.tree-table-cell');
                var columnasClone = clonedRow.find('.tree-table-cell');
                for (var z = 0; z < columnasRow.length; z++) {
                    $(columnasClone[z]).css('width', $(columnasRow[z]).width());
                }
                self.sortElementClone.append(clonedRow);
            }).promise().done(function () {
                $(document.body).append(self.sortElementClone);
            });


            for (var x = 0; x < this.tableSettings.RowReceptors.length; x++) {
                $(this.tableSettings.RowReceptors[x]).hhTreeTable('setIsReceiving', { isReceiving: true, elementClone: this.sortElementClone });
            }

            if (typeof e.preventDefault != 'undefined') { e.preventDefault(); }
            document.documentElement.onselectstart = function () { return false; };
            e.stopPropagation();
        }

        /**
         * Agrega un renglón de tipo abstracto utilizando el título pasado como parámetro.
         *
         * @param rowTitle el título del renglón a crear.
         */
        public addTitleRow(rowTitle: string): void {

            this.isSorting = false;
            this.isSelecting = false;
            this.isReceiving = false;

            var concepto: shared.modelos.ConceptoConsultaRepositorioXBRL = {
                Id: utils.UUIDUtils.generarUUID(),
                UUID:null,
                EsAbstracto: true,
                EsDimensional:false,
                EspacioNombres: '',
                Etiqueta: rowTitle,
                TipoDatoXBRL: null,
                IdConcepto: '',
                Indentacion: 0,
                Orden: 0,
                InformacionDimensional: null,
                InformacionDimensionalPorConcepto:null,
                EspacioNombresTaxonomia: null,
                EtiquetaVista: null,
                EsElementoProcesado: true,
                EtiquetaConceptoAbstracto: {}
            };

            var nuevoConcepto: TreeNode = {
                Id: abaxXBRL.utils.UUIDUtils.generarUUID(),
                Data: concepto,
                Indentation: 0,
                Order: 0,
                Selected: false
            };

            var row = this.createRowFromNode(nuevoConcepto, null);

            this.sortElementClone = $('<div class="tree-table-container"></div>');
            this.sortElementClone.width(this.tableContainer.find('tree-table-container').width());
            this.sortElementClone.css('width', this.tableContainer.width());
            this.sortElementClone.css('opacity', 0.8);
            this.sortElementClone.css('position', 'absolute');
            this.sortElementClone.css('z-index', 999);
            this.sortElementClone.offset({
                top: this.tableContainer.offset().top,
                left: this.tableContainer.offset().left,
            });
            this.sortElementClone.css('position', 'absolute');
            this.sortElementClone.append(row);

            $(document.body).append(this.sortElementClone);
            this.setIsReceiving(true, this.sortElementClone);

            

            document.documentElement.onselectstart = function () { return false; };

        }

        /**
         * Marca una serie de renglones de la tabla-árbol contiguos como seleccionados.
         *
         * @param startIdx el índice del renglón de la tabla que será tomado como origen de la selección.
         * @param length la cantidad de renglones contiguos que deberán ser marcados.
         */
        public markRowsAsSelected(startIdx: number, length: number): void {
            this.clearRowSelection();
            var renglones = $(this.tableContainer).find('.tree-table-row');
            if (length >= 0) {
                for (var z = 0; z <= length; z++) {
                    if ($(renglones[startIdx + z]).css('display') !== 'none') {
                        $(renglones[startIdx + z]).addClass('tree-table-selected');
                    }
                }
            } else {
                for (var z = 0; z >= length; z--) {
                    if ($(renglones[startIdx + z]).css('display') !== 'none') {
                        $(renglones[startIdx + z]).addClass('tree-table-selected');
                    }
                }
            }
        }

        /**
         * Maneja el evento mousemove cuando sucede sobre el body del documento.
         * 
         * @param e el evento del mouse que disparó la invocación de este método.
         */
        public handleMouseMove(e: JQueryMouseEventObject): void {
            for (var x = 0; x < TreeTable.CurrentTreeTables.length; x++) {
                $(TreeTable.CurrentTreeTables[x]).hhTreeTable('handleMouseMove', e);
            }
        }

        /**
         * Maneja el evento mouseup cuando sucede sobre el body del documento
         * 
         * @param e el evento del mouse que disparó la invocación de este método.
         * @return true si se desea propagar el evento. false en cualquier otro caso.
         */
        public handleMouseUp(e: JQueryMouseEventObject): void {
            for (var x = 0; x < TreeTable.CurrentTreeTables.length; x++) {
                $(TreeTable.CurrentTreeTables[x]).hhTreeTable('handleMouseUp', e);
            }
        }

        /**
         * Maneja el evento mousemove cuando sucede sobre la tabla-árbol.
         * 
         * @param e el evento del mouse que disparó la invocación de este método.
         */
        public handleMouseMoveRows(e: JQueryMouseEventObject): void {
            var target = $(e.target);
            if (!target.is('div') || !target.hasClass('tree-table-row')) {
                target = target.closest('div.tree-table-row');
            }
            if (!this.isSelecting && !this.isSorting && !this.isReceiving) return;
            if (this.isSorting || this.isReceiving) {
                if (!this.sortElementClone || this.sortElementClone === null) return;
                this.sortElementClone.offset({
                    left: e.pageX + 10,
                    top: e.pageY + 10
                });
            }
            if (!target || target === null || target.length == 0) return;
            var rows = $(this.tableContainer).find('.tree-table-row');
            var targetIdx = rows.index(target);
            if (targetIdx == -1) {
                if (this.isReceiving && this.sortGhostElement && this.sortGhostElement !== null && !target.hasClass('tree-table-empty-row') && this.tableContainer.find('.tree-table-row').not('.tree-table-empty-row').length > 0) {
                    this.sortGhostElement.remove();
                }
                return;
            };
            var containerHeight = this.tableContainer.height();
            var containerScrollY = this.tableContainer.scrollTop();

            var elementTop = target.position().top - this.tableContainer.position().top;
            var elementHeight = target.outerHeight();

            if ((elementTop + (elementHeight * 2)) > containerHeight) {
                this.tableContainer.scrollTop(containerScrollY + elementHeight + 20);
            }
            if (elementTop <= 5) {
                this.tableContainer.scrollTop(containerScrollY + elementTop - 20);
            }
            if (this.isSelecting) {
                this.markRowsAsSelected(this.selectionStartIdx, targetIdx - this.selectionStartIdx);
            } else if (this.isSorting) {
                var nodoActual = $(rows[targetIdx]).data('tree-table-node');
                var nodoReferencia = this.sortElementClone.find('.tree-table-row:first').data('tree-table-node');
                if (!nodoActual || nodoActual === null) return;
                if (nodoActual.Indentation == nodoReferencia.Indentation) {
                    var distanciaSuperior = e.pageY - target.offset().top;
                    var altoElemento = target.height();
                    var esLaMitadInferior = distanciaSuperior > (altoElemento / 2);
                    if (esLaMitadInferior) {
                        if ((targetIdx + 1) < rows.length) {
                            var nodoSiguiente = ((targetIdx + 1) < rows.length) ? $(rows[targetIdx + 1]).data('tree-table-node') : null;
                            while (nodoSiguiente && nodoSiguiente !== null && nodoSiguiente.Indentation > nodoActual.Indentation) {
                                targetIdx++;
                                target = $(rows[targetIdx]);
                                nodoSiguiente = ((targetIdx + 1) < rows.length) ? $(rows[targetIdx + 1]).data('tree-table-node') : null;
                            }
                        }
                        target.after(this.sortGhostElement);
                    } else {
                        target.before(this.sortGhostElement);
                    }
                }
            } else if (this.isReceiving) {
                var distanciaSuperior = e.pageY - target.offset().top;
                var altoElemento = target.height();
                var esLaMitadInferior = distanciaSuperior > (altoElemento / 2);

                if (!this.sortGhostElement || this.sortGhostElement === null) {
                    this.sortGhostElement = target.clone(false);
                    this.sortGhostElement.find('.tree-table-cell').html('&nbsp');
                    this.sortGhostElement.removeClass('tree-table-odd tree-table-even').addClass('tree-table-empty-row');
                }

                if (esLaMitadInferior) {
                    target.after(this.sortGhostElement);
                } else {
                    target.before(this.sortGhostElement);
                }
            }
        }

        /**
         * Maneja el evento mouseup cuando sucede sobre los renglones de la tabla-árbol.
         * 
         * @param e el evento del mouse que disparó la invocación de este método.
         * @return true si se desea propagar el evento. false en cualquier otro caso.
         */
        public handleMouseUpRows(e: JQueryMouseEventObject): boolean {
            if (this.isRightClick(e)) {
                return false;
            }
            this.isSelecting = false;
            if (this.isSorting) {
                var renglonesClon = this.sortElementClone.find('.tree-table-row');
                for (var z = renglonesClon.length - 1; z >= 0; z--) {
                    var rowCloned = $(renglonesClon[z]).clone(true, true);
                    $(renglonesClon[z]).remove();
                    this.sortGhostElement.after(rowCloned);
                }
                this.sortGhostElement.remove();
                this.sortElementClone.remove();
                this.sortGhostElement = null;
                this.sortElementClone = null;
                this.isSorting = false;
                this.isReceiving = false;
                this.pauseEvents();
                this.resumeEvents();
            } else if (this.isReceiving) {
                if (this.sortGhostElement && this.sortGhostElement !== null) {
                    var siguienteRenglon = this.sortGhostElement.next('.tree-table-row');
                    var anteriorRenglon = this.sortGhostElement.prev('.tree-table-row');
                    var nodoSiguiente: TreeNode = null;
                    var nodoAnterior: TreeNode = null;
                    if (siguienteRenglon && siguienteRenglon.length > 0) {
                        nodoSiguiente = siguienteRenglon.data('tree-table-node');
                    }
                    if (anteriorRenglon && anteriorRenglon.length > 0) {
                        nodoAnterior = anteriorRenglon.data('tree-table-node');
                    }
                    var rowsToAdd = $(this.sortElementClone).find('.tree-table-row');

                    for (var z = rowsToAdd.length - 1; z >= 0; z--) {
                        var nodoDonado: TreeNode = $(rowsToAdd[z]).data('tree-table-node');
                        var nodoEquivalente = this.tableSettings.AnyToTreeNodeFunction(nodoDonado.Data);
                        if (nodoSiguiente !== null) {
                            nodoEquivalente.Indentation = nodoSiguiente.Indentation;
                        }
                        if (nodoAnterior !== null) {
                            if (nodoSiguiente === null) {
                                nodoEquivalente.Indentation = nodoAnterior.Indentation;
                            }
                            if (nodoSiguiente !== null && nodoAnterior.Indentation > nodoSiguiente.Indentation) {
                                nodoEquivalente.Indentation = nodoAnterior.Indentation;
                            }
                        } else {
                            nodoEquivalente.Indentation = 0;
                        }
                        this.sortGhostElement.after(this.createRowFromNode(nodoEquivalente, nodoSiguiente));
                    }
                    this.sortGhostElement.remove();
                }
                this.sortElementClone.remove();
                this.sortGhostElement = null;
                this.sortElementClone = null;
                this.isSorting = false;
                this.isReceiving = false;
                this.pauseEvents();
                this.resumeEvents();
            }
            this.selectionStartIdx = null;
            document.documentElement.onselectstart = function () { return true; };

            this.tableSettings.initExternalEvent();

            return true;
        }

        /**
         * Limpia la selección de renglones dentro de la tabla-árbol.
         */
        public clearRowSelection() {
            this.tableContainer.find('.tree-table-row').removeClass('tree-table-selected');
        }

        /**
         * Indica si el evento del mouse fue disparado por el botón derecho del mouse.
         *
         * @param e el evento del mouse que disparó la invocación de este método.
         * @return true si el evento del mouse fue disparado por el botón derecho del mouse. false en cualquier otro caso.
         */
        public isRightClick(e: JQueryMouseEventObject): boolean {
            if (e.which) {
                return (e.which == 3);
            } else if (e.button) {
                return (e.button == 2);
            }
            return false;
        }

        /**
         * Elimina los renglones seleccionados por el usuario. El método no solicita la confirmación del usuario, es responsabilidad
         * de quien invoca el método confirmar previamente la intención del usuario.
         */
        public deleteSelectedRows(): void {
            var renglones = $(this.tableContainer).find('.tree-table-row');
            var renglonesSeleccionados = $(this.tableContainer).find('.tree-table-row.tree-table-selected');
            if (renglonesSeleccionados.length == 0) return;
            var startIdx = renglones.index(renglonesSeleccionados[0]);
            for (var z = 0; z < renglonesSeleccionados.length; z++) {
                $(renglones[startIdx + z]).remove();
            }
        }

        /**
         * Incrementa la indentación de los renglones seleccionados siempre que esto sea posible dada la estructura
         * de la tabla-árbol.
         */
        public increaseIndentationOfSelectedRows(): void {
            var renglones = $(this.tableContainer).find('.tree-table-row');
            var renglonesSeleccionados = $(this.tableContainer).find('.tree-table-row.tree-table-selected');
            if (renglonesSeleccionados.length == 0) return;
            var startIdx = renglones.index(renglonesSeleccionados[0]);
            for (var z = 0; z < renglonesSeleccionados.length; z++) {
                if (startIdx + z == 0) continue;
                var nodoAnterior = $(renglones[startIdx + z - 1]).data('tree-table-node');
                var nodoActual = $(renglones[startIdx + z]).data('tree-table-node');
                var nodoSiguiente = ((startIdx + z + 1) < renglones.length) ? $(renglones[startIdx + z + 1]).data('tree-table-node') : null;
                if (nodoAnterior.Indentation < nodoActual.Indentation) continue;
                if (nodoAnterior.Indentation == nodoActual.Indentation) {
                    var row = renglones[startIdx + z - 1];
                    $(row).find('.tree-table-cell:first').find('table tr td.tree-table-check').html('<i class="fa tt-row-check fa-chevron-down"></i>');
                }
                var nodosActualizados = 0;
                while (nodoSiguiente && nodoSiguiente !== null && nodoSiguiente.Indentation > nodoActual.Indentation) {
                    nodosActualizados++;
                    nodoSiguiente.Indentation++;
                    var row = renglones[startIdx + z + nodosActualizados];
                    $(row).find('.tree-table-cell:first').find('table tr td:first').after('<td class="tree-table-indent">&nbsp;</td>');
                    nodoSiguiente = $(renglones[startIdx + z + nodosActualizados + 1]).data('tree-table-node');
                }
                var row = renglones[startIdx + z];
                nodoActual.Indentation++;
                $(row).find('.tree-table-cell:first').find('table tr td:first').after('<td class="tree-table-indent">&nbsp;</td>');
                z += nodosActualizados;
            }
            this.pauseEvents();
            this.resumeEvents();
        }

        /**
         * Decrementa la indentación de los renglones seleccionados siempre que esto sea posible dada la estructura
         * de la tabla-árbol.
         */
        public decreaseIndentationOfSelectedRows(): void {
            var renglones = $(this.tableContainer).find('.tree-table-row');
            var renglonesSeleccionados = $(this.tableContainer).find('.tree-table-row.tree-table-selected');
            if (renglonesSeleccionados.length == 0) return;
            var startIdx = renglones.index(renglonesSeleccionados[0]);
            for (var z = 0; z < renglonesSeleccionados.length; z++) {
                if (startIdx + z == 0) continue;
                var nodoAnterior = $(renglones[startIdx + z - 1]).data('tree-table-node');
                var nodoActual = $(renglones[startIdx + z]).data('tree-table-node');
                var nodoSiguiente = ((startIdx + z + 1) < renglones.length) ? $(renglones[startIdx + z + 1]).data('tree-table-node') : null;
                if (nodoActual.Indentation == 0) continue;
                if (nodoAnterior.Indentation < nodoActual.Indentation) {
                    var row = renglones[startIdx + z - 1];
                    $(row).find('.tree-table-cell:first').find('table tr td.tree-table-check').html('&nbsp;');
                }
                if (nodoSiguiente && nodoSiguiente !== null && nodoSiguiente.Indentation == nodoActual.Indentation) {
                    var row = renglones[startIdx + z];
                    $(row).find('.tree-table-cell:first').find('table tr td.tree-table-check').html('<i class="fa tt-row-check fa-chevron-down"></i>');
                }
                var nodosActualizados = 0;
                while (nodoSiguiente && nodoSiguiente !== null && nodoSiguiente.Indentation > nodoActual.Indentation) {
                    nodosActualizados++;
                    nodoSiguiente.Indentation--;
                    var row = renglones[startIdx + z + nodosActualizados];
                    $(row).find('.tree-table-cell:first').find('table tr td.tree-table-indent:first').remove();
                    nodoSiguiente = $(renglones[startIdx + z + nodosActualizados + 1]).data('tree-table-node');
                }
                var row = renglones[startIdx + z];
                nodoActual.Indentation--;
                $(row).find('.tree-table-cell:first').find('table tr td.tree-table-indent:first').remove();
                z += nodosActualizados;
            }
            this.pauseEvents();
            this.resumeEvents();
        }

        /**
         * Genera el HTML requerido para presentar los renglones de la tabla-árbol.
         * 
         * @param tableContainer el objeto JQuery que representa la tabla-arbol.
         */
        public renderRows(tableContainer: JQuery): void {
            var odd: boolean = false;
            for (var z = 0; z < this.nodes.size(); z++) {
                var nodo = this.nodes.getElement(z);
                var nodoSiguiente = ((z + 1) < this.nodes.size()) ? this.nodes.getElement(z + 1) : null;
                tableContainer.append(this.createRowFromNode(nodo, nodoSiguiente));
            }
        }

        /**
         * Crea un renglón de la tabla-árbol a partir de su definición del nodo y del siguiente nodo dentro de la tabla-árbol si es que existe.
         *
         * @param nodo el nodo en el cual se basará la creación del renglón.
         * @param nodoSiguiente el siguiente nodo en la tabla árbol en caso de estar disponible. Si no está disponible, deberá ser especificado como null.
         * @return el objeto JQuery que representa el renglón creado.
         */
        private createRowFromNode(nodo: TreeNode, nodoSiguiente: TreeNode): JQuery {
            var row = $('<div class="tree-table-row"></div>');
            var esPadre = nodoSiguiente !== null && nodoSiguiente.Indentation > nodo.Indentation;
            for (var y = 0; y < this.tableSettings.ColumnDefinitions.size(); y++) {
                var textCell = this.tableSettings.TextColumnFunction(nodo.Data, y);
                var cell = $('<div class="tree-table-cell"></div>');
                if (this.tableSettings.Sortable && y == 0) {
                    var table = $('<table></table>');
                    var tableRow = $('<tr></tr>');
                    tableRow.append('<td class="tree-table-row-handle"><i class="fa fa-bars tt-row-handle"></i></td>');
                    for (var x = 0; x < nodo.Indentation; x++) {
                        tableRow.append('<td class="tree-table-indent">&nbsp;</td>');
                    }
                    if (esPadre) {
                        tableRow.append('<td class="tree-table-check"><i class="fa fa-chevron-down tt-row-check"></i></td>');
                    } else {
                        tableRow.append('<td class="tree-table-check">&nbsp;</td>');
                    }
                    tableRow.append('<td>' + textCell + '</td>');
                    table.append(tableRow);
                    cell.append(table);
                } else if (this.tableSettings.RowDonator && y == 0) {
                    var table = $('<table></table>');
                    var tableRow = $('<tr></tr>');
                    tableRow.append('<td class="tree-table-row-handle"><i class="fa fa-crosshairs tt-row-drag"></i></td>');
                    tableRow.append('<td>' + textCell + '</td>');
                    table.append(tableRow);
                    cell.append(table);
                } else {
                    if (textCell && textCell !== null) {
                        cell.html(textCell);
                    } else {
                        cell.html('&nbsp;');
                    }
                }
                row.append(cell);
                row.data('tree-table-node', nodo);
            }
            return row;
        }

        /**
         * Pausa el manejo de eventos de la tabla-árbol.
         */
        public pauseEvents(): void {
            $(this.tableContainer).find('.tt-row-check').off('click');

            $(this.tableContainer).find('.tree-table-row').off('mousedown');
            $(this.tableContainer).find('.tt-row-handle').off('mousedown');
            $(this.tableContainer).find('.tt-row-drag').off('mousedown');
            $(document.body).off('mouseup');
            $(document.body).off('mousemove');
        }

        /**
         * Reanuda el manejo de eventos de la tabla-árbol.
         */
        public resumeEvents(): void {
            $(this.tableContainer).find('.tt-row-check').on('click', $.proxy(this.handleClickCollapseExpand, this));
            $(this.tableContainer).find('.tree-table-row').on('mousedown', $.proxy(this.handleMouseDownRows, this));
            $(this.tableContainer).find('.tt-row-handle').on('mousedown', $.proxy(this.handleMouseDownRowHandler, this));
            $(this.tableContainer).find('.tt-row-drag').on('mousedown', $.proxy(this.handleMouseDownRowDrag, this));
            $(document.body).on('mouseup', $.proxy(this.handleMouseUp, this));
            $(document.body).on('mousemove', $.proxy(this.handleMouseMove, this));
        }

        /**
         * Genera el HTML necesario para presentar los encabezados de la tabla/árbol.
         *
         * @return un objeto jQuery el cual representa los encabezados de la tabla/árbol.
         */
        public renderHeaders(): JQuery {
            var columnHeaders = null;

            columnHeaders = $('<div id="' + this.tableHeaderId + '" class="tree-table-head"></div>');

            var i = 0;
            for (i = 0; i < this.tableSettings.ColumnDefinitions.size(); i++) {
                columnHeaders.append('<div class="tree-table-cell tree-table-title-head">' + this.tableSettings.ColumnDefinitions.getElement(i).Title + '</div>');
            }
            return columnHeaders;
        }
    }

}