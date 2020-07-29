
var abaxXbrlSpread;
var documentoInstanciaXbrl;
var pageLayout;
var editorLayout;
var editorHtml;
var notaEditada;

var Tupla = 1;
var Item = 2;
var Hipercubo = 3;
var Dimension = 4;

var Instante = 1;
var Duracion = 2;
var ParaSiempre = 3;

var EspaciosPorIndentacion = 4;

var IdiomaDefault = 'es';
var IdiomaIngles = 'en';

var TipoDatoMonetary = "monetaryItemType";
var TipoDatoMonetary = "monetaryItemType";
var TipoDatoNonNegtiveInteger = "nonNegativeIntegerItemType";
var TipoDatoString = "stringItemType";
var TipoDatoDate = "dateItemType";
var TipoAcciones = "sharesItemType";
var TipoBloqueDeTexto = "http://www.xbrl.org/dtr/type/non-numeric:textBlockItemType";

var FormatoFecha = 'DD/MM/YYYY';

var FormatoFechaCalendar = 'yyyy-mm-dd';

var RatioTabStrip = 0.7;

var ColorFondoCeldaBloqueada = '#F7EDD1';

var RolEtiquetaDefault = 'http://www.xbrl.org/2003/role/label';

$(document).ready(function () {

    $.isLoading({ text: "Preparando el documento instancia, espere..." });

    pageLayout = $('#contenedorEditorEstandar').layout({
        defaults: {
        },
        east: {
            size: 239
			, resizable: false
			, togglerLength_open: 0
			, spacing_open: 1 /* cosmetic only */
			, initHidden: true
            , onhide_end: function () { $("#contenedorHojaCalculo").wijspread('refresh'); }
            , onresize_end: function () { $("#contenedorHojaCalculo").wijspread('refresh'); }
            , onshow_end: function () { $("#contenedorHojaCalculo").wijspread('refresh'); }
            , onclose_end: function () { $("#contenedorHojaCalculo").wijspread('refresh'); }
        },
        west: {
            size: 239
			, spacing_closed: 22
			, togglerLength_closed: 140
			, togglerAlign_closed: "top"
			, togglerContent_closed: "F<BR>o<BR>r<BR>m<BR>a<BR>t<BR>o<BR>s"
			, togglerTip_closed: "Abrir y Fijar el Panel"
			, sliderTip: "Deslizar y Abrir Panel"
			, slideTrigger_open: "mouseover"
            , onhide_end: function () { $("#contenedorHojaCalculo").wijspread('refresh'); }
            , onresize_end: function () { $("#contenedorHojaCalculo").wijspread('refresh'); }
            , onshow_end: function () { $("#contenedorHojaCalculo").wijspread('refresh'); }
            , onclose_end: function () { $("#contenedorHojaCalculo").wijspread('refresh'); }
        }
    });

    editorLayout = $('#contenedorEditor').layout({
        defaults: {
        },
        south: {
            size: 300
			, resizable: true
			, initHidden: true
            , onhide_end: function () { $("#contenedorHojaCalculo").wijspread('refresh'); }
            , onresize_end: function () {
                $("#contenedorHojaCalculo").wijspread('refresh');
                if (editorHtml) {
                    editorHtml.resize('100%', editorLayout.state.south.size - 25);
                }
            }
            , onshow_end: function () {
                $("#contenedorHojaCalculo").wijspread('refresh');
                if (editorHtml) {
                    editorHtml.resize('100%', editorLayout.state.south.size - 25);
                }
            }
            , onclose_end: function () { $("#contenedorHojaCalculo").wijspread('refresh'); }
        }
    });

    $('#btnOcultarMenu').click(function () {
        window.setTimeout(function () { pageLayout.resizeAll(); $("#contenedorHojaCalculo").wijspread('refresh'); },1);
    });

    $("#botonErroresFormato").toggle(function () {
        pageLayout.open('east');
    }, function () {
        pageLayout.hide('east');
    });
    pageLayout.addToggleBtn("#botonFormatosReporte", "west");

    $.post('/DocumentosInstancia/ObtenerModeloVisorXbrl',
        {
            //documentoUrl: 'C:\\Users\\Antonio\\Desktop\\ifrsxbrl_CEMEX_2014-2.xbrl'
            //documentoUrl: 'C:\\Users\\Antonio\\Downloads\\q4-fy13-form-10k-xbrl_0\\dis-20130928.xml'
            //documentoUrl: 'C:\\Users\\Antonio\\Downloads\\q3-fy14-form-10q-xbrl\\dis-20140628.xml'
            //documentoUrl: 'C:\\Users\\Antonio\\Downloads\\mx_taxonomy draft 9\\mx_taxonomy\\Anexo_800005.xbrl'
            documentoUrl: 'C:\\Users\\Antonio\\Downloads\\mx_taxonomy draft 12\\mx_taxonomy\\Complete_sample_data_instance.xbrl'
            //documentoUrl: 'C:\\Users\\Antonio\\Desktop\\example1_2014-03-05\\xbrl_example1_2014-03-05.xbrl'
        }, function (data, textStatus, jqXHR) {
            if (data.Resultado) {
                console.log(data.InformacionExtra);
                presentarDocumentoInstancia(data.InformacionExtra);
            } else {
                $.prompt('Ocurrió un error al obtener el documento instancia. Inténtelo nuevamente.',
                {
                    title: 'Error al contactar al servidor',
                    buttons: { 'Aceptar': true }
                });
            }

        }).always(function () {
            $.isLoading('hide');
        }).error(function () {
            $.prompt('Ocurrió un error al obtener el documento instancia. Inténtelo nuevamente.',
                {
                    title: 'Error al contactar al servidor',
                    buttons: { 'Aceptar': true }
                });
        });

});

function presentarDocumentoInstancia(documentoInstancia) {
    documentoInstanciaXbrl = documentoInstancia;

    if (documentoInstanciaXbrl.Taxonomia && documentoInstanciaXbrl.Taxonomia.RolesPresentacion) {

        $("#contenedorHojaCalculo").wijspread();
        abaxXbrlSpread = $('#contenedorHojaCalculo').wijspread('spread', documentoInstanciaXbrl.Taxonomia.RolesPresentacion.length);
        //abaxXbrlSpread.tabStripVisible(false);
        abaxXbrlSpread.tabEditable(false);
        abaxXbrlSpread.newTabVisible(false);
        abaxXbrlSpread.setTabStripRatio(RatioTabStrip, true);
        abaxXbrlSpread.useWijmoTheme = true;
        abaxXbrlSpread.autoFitType($.wijmo.wijspread.AutoFitType.CellWithHeader);
        abaxXbrlSpread.removeSheet(0);
        abaxXbrlSpread.allowUndo(true);
        abaxXbrlSpread.isPaintSuspended(true);

        var i = 0;
        for (i = 0; i < documentoInstanciaXbrl.Taxonomia.RolesPresentacion.length; i++) {
            $('#listadoRolesDocumento').append('<li class="b-b ' + (i == 0 ? 'active' : '') + '"><a class="navegacionFormatos" title="' + documentoInstanciaXbrl.Taxonomia.RolesPresentacion[i].Uri + '" data-toggle="pill"><i class="fa fa-chevron-right pull-right m-t-xs text-xs"></i>' + documentoInstanciaXbrl.Taxonomia.RolesPresentacion[i].Nombre + '</a></li>');
            presentarRolDeDocumentoInstancia(documentoInstanciaXbrl.Taxonomia.RolesPresentacion[i].Uri);
        }

        abaxXbrlSpread.isPaintSuspended(false);

        redimensionarColumnasDeHojas();

        $('.navegacionFormatos').bind('click', function () {
            var rolUri = $(this).prop('title');
            var j = 0;
            for (j = 0; j < documentoInstanciaXbrl.Taxonomia.RolesPresentacion.length; j++) {
                if (documentoInstanciaXbrl.Taxonomia.RolesPresentacion[j].Uri == rolUri) {
                    abaxXbrlSpread.setActiveSheetIndex(j);
                    var sheet = abaxXbrlSpread.getSheet(j);
                    var icolr = 0;
                    for (icolr = 0; icolr < sheet.getColumnCount($.wijmo.wijspread.SheetArea.viewport) ; icolr++) {
                        sheet.autoFitColumn(icolr);
                    }
                    return;
                }
            }
        });
    }
}

function redimensionarColumnasDeHojas() {

    var i = 0;
    for (i = 0; i < abaxXbrlSpread.getSheetCount() ; i++) {
        var sheet = abaxXbrlSpread.getSheet(i);
        var j = 0;
        for (j = 0; j < sheet.getColumnCount($.wijmo.wijspread.SheetArea.viewport) ; j++) {
            sheet.autoFitColumn(j);
        }
    }

}

function presentarRolDeDocumentoInstancia(rolUri) {
    if (!documentoInstanciaXbrl) { return; }

    var rol = '';
    var i = 0;
    for (i = 0; i < documentoInstanciaXbrl.Taxonomia.RolesPresentacion.length; i++) {
        if (documentoInstanciaXbrl.Taxonomia.RolesPresentacion[i].Uri == rolUri) {
            rol = documentoInstanciaXbrl.Taxonomia.RolesPresentacion[i];
            break;
        }
    }

    if (rol == '') { return; }
    rol.contextosUtilizados = [];
    rol.conceptosUtilizados = [];
    rol.grupos = [];
    rol.hipercubos = [];
    rol.informacionContextos = [];
    rol.periodosEfectivos = [];
    recorrerSubEstructurasDeRol(rol, rol.Estructuras, 1, null);
    rol.contextosUtilizados = ordenarContextos(rol.contextosUtilizados);
    //determinarOperacionesCalculoTaxonomia(documentoInstanciaXbrl.Taxonomia);
    llenarHojaCalculoConDatosDeRol(rol);
}

function ordenarContextos(periodos) {
    periodos.sort(function (b, a) {
        if (a.Periodo.Tipo == ParaSiempre)
            return -1;
        if (b.Periodo.Tipo == ParaSiempre)
            return 1;
        if (a.Periodo.Tipo == ParaSiempre && b.Tipo == ParaSiempre)
            return 0;
        fechaA = moment(a.Periodo.Tipo == Instante ? a.Periodo.FechaInstante :
        a.Periodo.FechaInicio);
        fechaB = moment(b.Periodo.Tipo == Instante ? b.Periodo.FechaInstante :
        b.Periodo.FechaInicio);
        return fechaB - fechaA;
    });
    return periodos;
}

function llenarHojaCalculoConDatosDeRol(rol) {

    var sheetRol = new $.wijmo.wijspread.Sheet();
    
    sheetRol.setName(rol.Nombre);
    abaxXbrlSpread.addSheet(abaxXbrlSpread.getSheetCount(), sheetRol);
    var colsAdicionales = 0;
    var maxNivel = 1;
    
     for (var iHc = 0; iHc < rol.hipercubos.length; iHc++) {
        rol.hipercubos[iHc].MiembrosEfectivos = calcularMiembrosEfectivosHipercubo(rol.hipercubos[iHc], rol.periodosEfectivos);
        colsAdicionales += rol.hipercubos[iHc].TotalMiembrosEfectivos;
        if(rol.hipercubos[iHc].NivelesMiembrosEfectivos > maxNivel) {
            maxNivel = rol.hipercubos[iHc].NivelesMiembrosEfectivos;
        }
    }
    
    sheetRol.setRowCount(rol.conceptosUtilizados.length + 1, $.wijmo.wijspread.SheetArea.viewport);
    //total de columnas adicionales de hipercubos
    sheetRol.setColumnCount(rol.contextosUtilizados.length + colsAdicionales, $.wijmo.wijspread.SheetArea.viewport);
    sheetRol.setRowCount(maxNivel, $.wijmo.wijspread.SheetArea.colHeader);
    var cellRowRol = sheetRol.getCell(0, 0, $.wijmo.wijspread.SheetArea.rowHeader);
    cellRowRol.value(rol.Nombre);

    var j = 0;
    
    //Para cada hipercubo en este rol
    for (iHc = 0; iHc < rol.hipercubos.length; iHc++) {
        imprimirTitulosHipercubo(rol.hipercubos[iHc], maxNivel, j, sheetRol,rol);
        j += rol.hipercubos[iHc].TotalMiembrosEfectivos;
    }

    j = colsAdicionales;
    for (i=0; i < rol.contextosUtilizados.length; i++,j++) {
        var cell = sheetRol.getCell(0, j, $.wijmo.wijspread.SheetArea.colHeader);
        var contexto = rol.contextosUtilizados[i];
        rol.informacionContextos[j] = {};
        rol.informacionContextos[j].Contextos =[];
        rol.informacionContextos[j].Contextos[0] = contexto;
        cell.value(obtenerNombreContexto(contexto));
        cell.wordWrap(true);
        sheetRol.addSpan(0, j, maxNivel, 1, $.wijmo.wijspread.SheetArea.colHeader);
       
    }

    sheetRol.setRowHeight(maxNivel - 1, calcularAltoCeldaTitulo(2), $.wijmo.wijspread.SheetArea.colHeader);
    var cell = sheetRol.getCell(0, 0, $.wijmo.wijspread.SheetArea.rowHeader);
    var maximaLongitudEtiqueta = 0;
    var etiquetaRol = rol.Nombre;
    maximaLongitudEtiqueta = etiquetaRol.length;
    bloquearRenglon(sheetRol, 0);
    cell.value(etiquetaRol);

    var i = 0;
    for (i = 0; i < rol.conceptosUtilizados.length; i++) {

        var cell = sheetRol.getCell(i + 1, 0, $.wijmo.wijspread.SheetArea.rowHeader);
        var concepto = documentoInstanciaXbrl.Taxonomia.ConceptosPorId[rol.conceptosUtilizados[i].IdConcepto];
        cell.hAlign($.wijmo.wijspread.HorizontalAlign.left);
        cell.vAlign($.wijmo.wijspread.VerticalAlign.center);
        var etiqueta = indent(obtenerEtiquetaDeConcepto(concepto, IdiomaDefault, rol.conceptosUtilizados[i].RolEtiquetaPreferido), rol.conceptosUtilizados[i].Indentacion, EspaciosPorIndentacion);
        if (etiqueta.length > maximaLongitudEtiqueta) {
            maximaLongitudEtiqueta = etiqueta.length;
        }
        cell.value(etiqueta);
        sheetRol.autoFitRow(i + 1);

        if (concepto.EsAbstracto) {
            bloquearRenglon(sheetRol, i + 1);
        } else {
            sheetRol.getRow(i + 1).locked(false);
            var hechos = documentoInstanciaXbrl.HechosPorIdConcepto[concepto.Id];
            
            for (var iCell = 0; iCell < sheetRol.getColumnCount() ;iCell++)
            {
                var contextos = rol.informacionContextos[iCell].Contextos;
                if (contextos) {
                    
                    var j = 0;
                    for (j = 0;hechos && hechos.length && j < hechos.length; j++) {
                        var hecho = hechos[j];
                       
                        if (existeContexto(hecho.IdContexto,contextos)) {
                            switch (concepto.TipoDato) {
                                case TipoBloqueDeTexto:
                                    sheetRol.setCellType(i + 1, iCell, new HtmlContentCellType(hecho));
                                    break;
                                default:
                                    switch (concepto.TipoDatoXbrl) {
                                        case TipoDatoString:
                                            break;
                                        case TipoDatoNonNegtiveInteger:
                                            sheetRol.setCellType(i + 1, iCell, new BigDecimalCellType(BigDecimalCellType.NonNegativeIntegerType));
                                            break;
                                        case TipoDatoMonetary:
                                            sheetRol.setCellType(i + 1, iCell, new BigDecimalCellType(BigDecimalCellType.CurrencyType));
                                            break;
                                        case TipoAcciones:
                                            sheetRol.setCellType(i + 1, iCell, new BigDecimalCellType(BigDecimalCellType.PositiveIntegerType));
                                            break;
                                        case TipoDatoDate:
                                            sheetRol.setCellType(i + 1, iCell, new CalendarCellType(FormatoFechaCalendar));
                                            break;
                                    }

                                    break;
                            }

                            var cell = sheetRol.getCell(i + 1, iCell);
                            cell.value(hecho.Valor);

                            switch (concepto.TipoDato) {
                                case TipoBloqueDeTexto:
                                    sheetRol.getRow(i + 1).height(250);
                                    cell.shrinkToFit(true);
                                    break;
                                default:
                                    switch (concepto.TipoDatoXbrl) {
                                        case TipoDatoString:
                                            break;
                                        case TipoDatoMonetary:
                                            cell.hAlign($.wijmo.wijspread.HorizontalAlign.right);
                                            break;
                                        case TipoDatoNonNegtiveInteger:
                                            cell.hAlign($.wijmo.wijspread.HorizontalAlign.right);
                                            break;
                                        case TipoAcciones:
                                            cell.hAlign($.wijmo.wijspread.HorizontalAlign.right);
                                            break;
                                        case TipoDatoDate:
                                            //cell.formatter(FormatoFechaCalendar);
                                            break;
                                    }
                                    break;
                            }
                        }
                    }
                    
                }
            }
         }
    }

    for (i = 0; i < rol.grupos.length; i++) {
        sheetRol.rowRangeGroup.group(rol.grupos[i].IndiceInicio + 1, rol.grupos[i].Tamanio - 1);
    }

    sheetRol.rowRangeGroup.direction = $.wijmo.wijspread.RangeGroupDirection.Backward;
    sheetRol.setColumnWidth(0, calcularAnchoCeldaTitulo(maximaLongitudEtiqueta), $.wijmo.wijspread.SheetArea.rowHeader);
    sheetRol.setIsProtected(true);
    sheetRol.canUserDragDrop(false);
    sheetRol.canUserDragFill(false);
    sheetRol.selectionPolicy($.wijmo.wijspread.SelectionPolicy.Range);
    sheetRol.clipBoardOptions($.wijmo.wijspread.ClipboardPasteOptions.Values);

    sheetRol.bind($.wijmo.wijspread.Events.CellDoubleClick, function (sender, args) {
        if (args.sheetArea === $.wijmo.wijspread.SheetArea.viewport) {
            var idConcepto = rol.conceptosUtilizados[args.row - 1].IdConcepto;
            var concepto = documentoInstanciaXbrl.Taxonomia.ConceptosPorId[idConcepto];
            if (concepto.TipoDato == TipoBloqueDeTexto) {
                
                if (editorHtml && editorHtml !== null) {
                    editorHtml.destroy();
                    editorHtml = null;
                    $('#editorHtmlForm').html('');
                }

                $('#editorHtmlForm').append('<textarea id="editorHtml" style="width:100%; height:100%;"></textarea>');

                editorHtml = CKEDITOR.replace('editorHtml', {
                    width: '100%',
                    height: editorLayout.state.south.size - 25
                });

                editorHtml.on('save', function (evt, editor) {
                    evt.cancel();

                    if (editorHtml.commands.maximize.state == 1) {
                        editorHtml.execCommand('maximize');
                    }

                    notaEditada.Valor = editorHtml.getData();
                    representarHtmlComoImagenEnCanvas(notaEditada, true);
                    editorLayout.hide('south');

                    editorHtml.destroy();
                    editorHtml = null;
                    $('#editorHtmlForm').html('');
                });

                var cell = sheetRol.getCell(args.row, args.row);
                var idContexto = null;
                if(rol.contextosUtilizados[args.col]) {
                    idContexto = rol.contextosUtilizados[args.col];
                }else {
                    idContexto = rol.informacionContextos[args.col].Contextos[0];
                }
                
                if (documentoInstanciaXbrl.HechosPorIdConcepto[idConcepto] && documentoInstanciaXbrl.HechosPorIdConcepto[idConcepto].length) {
                    var hechos = documentoInstanciaXbrl.HechosPorIdConcepto[idConcepto];
                    for (var z = 0; z < hechos.length; z++) {
                        var hecho = hechos[z];
                        if (hecho.IdContexto == idContexto.Id) {
                            notaEditada = hecho;
                            editorHtml.setData(hecho.Valor);
                        }
                    }
                }
                editorHtml.on('loaded', function (evt, editor) {
                    editorLayout.open('south');
                    editorHtml.resize('100%', editorLayout.state.south.size - 25);
                });
            }
        }
    });

    sheetRol.addKeyMap($.wijmo.wijspread.Key.del, false, false, false, function (sender, args) {
        /*var selectedRanges = sheetRol.getSelections().toArray();
        for (var z = 0; z < selectedRanges.length; z++) {
            alert(selectedRanges[z].row);
            alert(selectedRanges[z].rowCount);
            alert(selectedRanges[z].col);
            alert(selectedRanges[z].colCount);
        }*/

        //Se deshabilita la tecla del para que el usuario no pueda borrar las celdas utilizando dicha tecla
    });

    for (j = 0; j < sheetRol.getColumnCount($.wijmo.wijspread.SheetArea.viewport) ; j++) {
        sheetRol.autoFitColumn(j);
    }
}
/**
Busca un contexto con un ID específico en una lista de contextos
*/
function existeContexto(idContexto,listaContextos) {
    for(var i=0;i< listaContextos.length;i++) {
        if(listaContextos[i].Id == idContexto) {
            return true;
        }
    }
    return false;
}

/**
Imprime de forma recursiva los títulos de la combinación de dimensiones de un hipercubo
Se envia la altura total de los título de las columnas y la columna a partir de la cuál
se deben pintar las columnas

*/
function imprimirTitulosHipercubo(hipercubo, alturaColumas, iColumnaInicio, sheetRol,rol) {
    var inicioRenglon = alturaColumas - hipercubo.NivelesMiembrosEfectivos;
    var iControl = [];
    iControl[0] = inicioRenglon;
    iControl[1] = iColumnaInicio;
    for (var iHijo = 0; hipercubo.MiembrosEfectivos && iHijo < hipercubo.MiembrosEfectivos.length; iHijo++) {
        crearTituloHipercubo(sheetRol, iControl, hipercubo.MiembrosEfectivos[iHijo], alturaColumas,rol,hipercubo);
        iControl[1] = iControl[1] + 1;
    }
    return iControl[1];
    
}
/**
Recorre el arbol de estructura final de titulos del hipercubo para imprimir los titulos
en las columnas. La variable de iControl almacena la información
de renglón (0) y columna (1) donde va el titulo
*/
function crearTituloHipercubo(sheetRol, iControl, nodoActual, alturaColumas, rol, hipercubo)
{
    var cell = null;
    var colInicial = iControl[1];
    //Imprimir hijos
    for (var iHijo = 0; nodoActual.SubEstructuras && iHijo < nodoActual.SubEstructuras.length; iHijo++) {
        iControl[0] = iControl[0] + 1;
        crearTituloHipercubo(sheetRol, iControl, nodoActual.SubEstructuras[iHijo], alturaColumas, rol, hipercubo);
        iControl[1] = iControl[1] + 1;
    }
    cell = sheetRol.getCell(iControl[0], colInicial, $.wijmo.wijspread.SheetArea.colHeader);
    if (nodoActual.IdDimension == "Periodo") {
        switch (nodoActual.TipoPeriodo) {
            case Instante:
                cell.value(moment(nodoActual.FechaInstante).format(FormatoFecha));
                break;
            case Duracion:
                cell.value(moment(nodoActual.FechaInicio).format(FormatoFecha) + ' - ' + moment(nodoActual.FechaFin).format(FormatoFecha));
                break;
            case ParaSiempre:
                cell.value('Por Siempre');
        }
    }else {
        var concepto = documentoInstanciaXbrl.Taxonomia.ConceptosPorId[nodoActual.IdConcepto];
        cell.value(obtenerEtiquetaDeConcepto(concepto,
        IdiomaDefault,
        nodoActual.RolEtiquetaPreferido));
        cell.wordWrap(true);
    }
    //si el concepto tuvo hijos de su misma dimension, entonces imprimirse al lado de sus hijos
    if (nodoActual.SubEstructuras && nodoActual.SubEstructuras.length > 0) {
        var tieneHijosMismaDimension = false;
        var tieneHijosOtraDimension = false;
        for (var isub = 0;isub < nodoActual.SubEstructuras.length; isub++) {
            if (nodoActual.SubEstructuras[isub].IdDimension == nodoActual.IdDimension) {
                tieneHijosMismaDimension = true;
            }else {
                tieneHijosOtraDimension = true;
            }
        }
        
        if (tieneHijosMismaDimension) {
            if (!tieneHijosOtraDimension) {
                cell = sheetRol.getCell(iControl[0] + 1, iControl[1], $.wijmo.wijspread.SheetArea.colHeader);
                cell.value("");
                cell.wordWrap(true);
                //crear el span del concepto padre en renglones
                sheetRol.addSpan(iControl[0] + 1, iControl[1], alturaColumas - iControl[0], 1, $.wijmo.wijspread.SheetArea.colHeader);
                rol.informacionContextos[iControl[1]] = {};
                rol.informacionContextos[iControl[1]].ValoresDimension = nodoActual.ValoresDimension;
                rol.informacionContextos[iControl[1]].Contextos = buscarContextos(nodoActual.ValoresDimension, hipercubo,rol);
            }else {
                //No se deja el espacio para el padre, se regresa una posición
                iControl[1] = iControl[1] - 1;
            }
            //crear el span del concepto padre en columnas
            sheetRol.addSpan(iControl[0], colInicial, 1, iControl[1] - colInicial + 1, $.wijmo.wijspread.SheetArea.colHeader);
        } else {
            //No se deja el espacio para el padre, se regresa una posición
            iControl[1] = iControl[1] - 1;
            //crear el span del concepto padre en columnas
            sheetRol.addSpan(iControl[0], colInicial, 1, iControl[1] - colInicial+1, $.wijmo.wijspread.SheetArea.colHeader);
        }
    }else {
        //si es una hoja y no se imprimó hasta abajo entonces crear un span
        if(iControl[0]<alturaColumas-1) {
            sheetRol.addSpan(iControl[0], colInicial, alturaColumas - iControl[0], 1, $.wijmo.wijspread.SheetArea.colHeader);
        }
        rol.informacionContextos[colInicial] = {};
        rol.informacionContextos[colInicial].ValoresDimension = nodoActual.ValoresDimension;
        rol.informacionContextos[colInicial].Contextos = buscarContextos(nodoActual.ValoresDimension, hipercubo, rol, colInicial);
    }
    iControl[0] = iControl[0] - 1;
}
/**
Busca un contexto que corresponda con los valores dimensionales enviados como parámetro:
*/
function buscarContextos(valoresDimension, hipercubo, rol,columnaDestino) {
    //Si el valor de la dimensión incluye la fecha:
    var dimensionFecha = null;
    if (valoresDimension && valoresDimension.length) {
        for (var idim = 0; idim < valoresDimension.length; idim++) {
            if (valoresDimension[idim].IdDimension == "Periodo") {
                dimensionFecha = valoresDimension[idim];
            }
        }
    }
    if (dimensionFecha == null) {
        //Se toma fecha global
        dimensionFecha = {
            TipoPeriodo: 1,
            FechaInstante: "",
            FechaInicio: "",
            FechaFin:"" 
        };
    }
    var dimensionEntidad = null;
    if (valoresDimension && valoresDimension.length) {
        for (var idim = 0; idim < valoresDimension.length; idim++) {
            if (valoresDimension[idim].IdDimension == "Entidad") {
                dimensionEntidad = valoresDimension[idim];
            }
        }
    }
    if (dimensionEntidad == null) {
        //Se toma la entidad global
        dimensionEntidad = {
            IdEntidad: ""
        };
    }
    var valoresDimensionales = [];
    if (valoresDimension && valoresDimension.length) {
        for (var i = 0; i < valoresDimension.length; i++) {
            if (valoresDimension[i].IdDimension != "Entidad" && valoresDimension[i].IdDimension != "Periodo") {
                valoresDimensionales.push(valoresDimension[i]);
            }
        }
    }
    
    var contextosEncontrados = [];

    for (ctx in documentoInstanciaXbrl.ContextosPorId) {
        
        var contexto = documentoInstanciaXbrl.ContextosPorId[ctx];
        var dimensionesoOk = true;
        var fechaOk = false;
        var entidadOk = false;
        //Evaluar dimensiones
        var dimensionesContexto = [];
        if (contexto.ValoresDimension) {
            for (var ix = 0; ix < contexto.ValoresDimension.length; ix++) {
                dimensionesContexto.push(contexto.ValoresDimension[ix]);
            }
        }
        //si este contexto está asociado a algún concepto en el rol que sea elemento primario del hipercubo y el hipercubo tiene dimension default
        if (true || contextoAsociadoAElementoPrimario(ctx, hipercubo.Partidas, dimensionFecha, dimensionEntidad)) {
            //poner valor default de dimensiones si aplica
            for (var idim = 0; idim < hipercubo.Dimensiones.length;idim++)
            {
                if(hipercubo.Dimensiones[idim].DimensionDefault) {
                    //Si el contexto no tiene valor para la dim default, se pone
                    var tieneValor = false;
                    for (var j = 0; j < dimensionesContexto.length; j++) {
                        if(hipercubo.Dimensiones[idim].IdConcepto == dimensionesContexto[j].IdDimension) {
                            tieneValor = true;
                            break;
                        }
                    }
                    //si no tiene valor dimensional, se agrega a la lista para verificar si el contexto se agrega a la lista
                    if(!tieneValor) {
                        var dimDefault = {
                            IdDimension:hipercubo.Dimensiones[idim].IdConcepto,
                            Explicita:true,
                            IdItemMiembro: hipercubo.Dimensiones[idim].DimensionDefault
                        };
                        dimensionesContexto.push(dimDefault);
                    }
                }
            }
        }

        if (dimensionesContexto && dimensionesContexto.length>0) {
            
            for (var iValorDim = 0; iValorDim < dimensionesContexto.length; iValorDim++) {
                dimensionesoOk = false;
                for (var iValorDimBuscado = 0; valoresDimensionales && iValorDimBuscado < valoresDimensionales.length; iValorDimBuscado++) {
                    if (dimensionesContexto[iValorDim].IdDimension == valoresDimensionales[iValorDimBuscado].IdDimension) {
                        if (dimensionesContexto[iValorDim].Explicita) {
                            if (dimensionesContexto[iValorDim].IdItemMiembro == valoresDimensionales[iValorDimBuscado].IdConcepto) {
                                dimensionesoOk = true;
                                break;
                            }
                        } else {


                        }
                    }
                }
                if (!dimensionesoOk) {
                    break;
                }
            }
        }
        if ((dimensionesContexto == null || dimensionesContexto.length == 0) && valoresDimensionales.length > 0) {
            dimensionesoOk = false;
        }
        //Evaluar fecha
        fechaOk = false;
        if(dimensionFecha.TipoPeriodo == contexto.Periodo.Tipo) {
            if(dimensionFecha.TipoPeriodo == Instante) {
                if(dimensionFecha.FechaInstante == contexto.Periodo.FechaInstante) {
                    fechaOk = true;
                }
            } else if (dimensionFecha.TipoPeriodo == Duracion) {
                if (dimensionFecha.FechaInicio == contexto.Periodo.FechaInicio &&
                dimensionFecha.FechaFin == contexto.Periodo.FechaFin) {
                    fechaOk = true;
                }
            }
        }  
        //Evaluar entidad
        entidadOk = true;//dimensionEntidad.IdEntidad == contexto.IdEntidad;
        if(dimensionesoOk && fechaOk && entidadOk) {
            contextosEncontrados.push(contexto);
        }
    }
    return contextosEncontrados;
}

function contextoAsociadoAElementoPrimario(contexto,listaConceptos,dimensionFecha,dimensionEntidad) {
    for (var i = 0; i < listaConceptos.length; i++)
    {
        if(documentoInstanciaXbrl.HechosPorIdConcepto[listaConceptos[i]]) {
            for (var j = 0; j < documentoInstanciaXbrl.HechosPorIdConcepto[listaConceptos[i]].length; j++) {
               
                if(contexto == documentoInstanciaXbrl.HechosPorIdConcepto[listaConceptos[i]][j].IdContexto) {
                    return true;
                }
            }
        }
    }
    return false;
}

function bloquearRenglon(hoja, numeroRenglon) {
    var row = hoja.getRow(numeroRenglon);
    row.locked(true);
    row.backColor(ColorFondoCeldaBloqueada);
}

function calcularAnchoCeldaTitulo(longitudContenido) {
    return 500;//longitudContenido * 6;
}

function calcularAltoCeldaTitulo(numeroLineas) {
    return numeroLineas * 20;
}

function obtenerNombreContexto(contexto) {
    var nombreContexto = '';

    var entidad = documentoInstanciaXbrl.EntidadesPorId[contexto.IdEntidad];

    nombreContexto += entidad.Id;

    switch (contexto.Periodo.Tipo) {
        case Instante:
            nombreContexto += '\n' + moment(contexto.Periodo.FechaInstante).format(FormatoFecha);
            break;
        case Duracion:
            nombreContexto += '\n' + moment(contexto.Periodo.FechaInicio).format(FormatoFecha) + ' - ' + moment(contexto.Periodo.FechaFin).format(FormatoFecha);
            break;
        case ParaSiempre:
            nombreContexto += '\n Por Siempre';
            break;
    }

    return nombreContexto;
}

function obtenerEtiquetaDeConcepto(concepto, idioma, rol) {
    var etiqueta = '';
    if (concepto.Etiquetas) {
        var etiquetasXidioma = obtenerEtiquetasPorIdiomaDeConcepto(concepto, idioma);
        if (etiquetasXidioma !== '') {
            etiqueta = obtenerEtiquetaDeConceptoPorRolDeIdioma(etiquetasXidioma, rol);
        }
    }
    return etiqueta;
}

function obtenerEtiquetasPorIdiomaDeConcepto(concepto, idioma) {
    var idioma = '';
    if (idioma && idioma !== null) {
        if (concepto.Etiquetas[idioma]) {
            idioma = concepto.Etiquetas[idioma];
        }
    }

    if (idioma === '') {
        if (concepto.Etiquetas[IdiomaDefault]) {
            idioma = concepto.Etiquetas[IdiomaDefault];
        } else if (concepto.Etiquetas[IdiomaIngles]) {
            idioma = concepto.Etiquetas[IdiomaIngles]
        } else {
            for (var idiomaEtiqueta in concepto.Etiquetas) {
                idioma = concepto.Etiquetas[idiomaEtiqueta];
                break;
            }
        }
    }

    return idioma;
}

function obtenerEtiquetaDeConceptoPorRolDeIdioma(etiquetasXidioma, rol) {
    var etiqueta = '';
    if (rol && rol !== null) {
        if (etiquetasXidioma[rol]) {
            etiqueta = etiquetasXidioma[rol].Valor;
        }
    }

    if (etiqueta === '') {
        if (etiquetasXidioma[RolEtiquetaDefault]) {
            etiqueta = etiquetasXidioma[RolEtiquetaDefault].Valor;
        } else {
            for (var rol in etiquetasXidioma) {
                etiqueta = etiquetasXidioma[rol].Valor;
                break;
            }
        }
    }

    return etiqueta;
}

function determinarOperacionesCalculoTaxonomia(taxonomia) {

    taxonomia.reglasCalculo = new Array();

    for (var i = 0; i < taxonomia.RolesCalculo.length; i++) {
        var rolCalculo = taxonomia.RolesCalculo[i];
        for(var j = 0; j < rolCalculo.Estructuras.length; j ++) {
            recorrerSubEstructurasDeCalculo(taxonomia, rolCalculo.Estructuras[j]);
        }
    }
}

function agregarContextoAGrupos(taxonomia, contexto) {
    if (contexto) {

    }
}

function sonContextosEquivalentes(contexto1, contexto2) {

    var resultado = false;

    if (contexto1 && contexto2) {
        if (contexto1.ContieneInformacionDimensional == contexto2.ContieneInformacionDimensional) {

        }
    }

    return resultado;
}

function recorrerSubEstructurasDeCalculo(taxonomia, nodoCalculo) {

    var concepto = taxonomia.ConceptosPorId[nodoCalculo.IdConcepto];;

    var reglaCalculo = {
        resultado: concepto,
        operandos: new Array()
    };

    for (var i = 0; i < nodoCalculo.Operandos.length; i++) {
        var operando = nodoCalculo.Operandos[i];
        reglaCalculo.operandos.push({
            peso: operando.Peso,
            concepto: taxonomia.ConceptosPorId[operando.IdConcepto]
        });

        if (operando.Operandos && operando.Operandos.length && operando.Operandos.length > 0) {
            recorrerSubEstructurasDeCalculo(taxonomia, operando);
        }
    }

    taxonomia.reglasCalculo.push(reglaCalculo);
}

function recorrerSubEstructurasDeRol(rol, subEstructuras, indentacion,padre) {
    var tamanioSubEstructuras = 0;
    var i = 0;
    
    for (i = 0; i < subEstructuras.length; i++) {
        var estructura = subEstructuras[i];
        var concepto = null;
        if (documentoInstanciaXbrl.HechosPorIdConcepto[estructura.IdConcepto]) {
                var hechosDeConcepto = documentoInstanciaXbrl.HechosPorIdConcepto[estructura.IdConcepto];
                if (hechosDeConcepto.length > 0) {
                    var j = 0;
                    for (j = 0; j < hechosDeConcepto.length; j++) {
                        var hecho = hechosDeConcepto[j];
                     concepto = documentoInstanciaXbrl.Taxonomia.ConceptosPorId[estructura.IdConcepto];

                    if (concepto.TipoDato == TipoBloqueDeTexto) {
                        representarHtmlComoImagenEnCanvas(hecho, false);
                    }

                    var contexto = documentoInstanciaXbrl.ContextosPorId[hecho.IdContexto];

                        if (contexto.ContieneInformacionDimensional) {
                            agregarContextoAGrupo(rol.periodosEfectivos,contexto);
                        } else {
                            //su el rol es dimensional y el concepto es elemento primario de algún cubo del rol, no agregar este contexto
                            if(rol.EsDimensional) {
                                /*if(!esElementoPrimarioDeCubo(rol,estructura.IdConcepto)) {
                                    if ($.inArray(contexto, rol.contextosUtilizados) == -1) {
                                        rol.contextosUtilizados.push(contexto);
                                    }
                                }*/
                            }else {
                                if ($.inArray(contexto, rol.contextosUtilizados) == -1) {
                                    rol.contextosUtilizados.push(contexto);
                                }
                            }
                        }
                    }
                }
        }
        concepto = documentoInstanciaXbrl.Taxonomia.ConceptosPorId[estructura.IdConcepto];
        //Verificar si es un concepto dimensional en un rol dimensional
        if (rol.EsDimensional && concepto.EsHipercubo) {
            //Inicio de un hipercubo
            var hipercubo = { Dimensiones: estructura.SubEstructuras};
            hipercubo.IdConceptoTabla = estructura.IdConcepto;
            rol.hipercubos[rol.hipercubos.length] = hipercubo;
            hipercubo.Partidas = [];
            //Buscar los otros hijos del padre
            if(padre) {
                for(var iPadre=0;iPadre < padre.SubEstructuras.length;iPadre++)
                {
                    if (padre.SubEstructuras[iPadre].IdConcepto != estructura.IdConcepto) {
                        llenarPartidasCubo(hipercubo.Partidas, padre.SubEstructuras[iPadre]);
                    }
                }
            }
            //Verifica si tiene dimensiones default
            for (var idim = 0; idim < hipercubo.Dimensiones.length; idim++) {
                for(var dimDef in documentoInstanciaXbrl.Taxonomia.DimensionDefaults) {
                    if(hipercubo.Dimensiones[idim].IdConcepto == dimDef) {
                        hipercubo.Dimensiones[idim].DimensionDefault = documentoInstanciaXbrl.Taxonomia.DimensionDefaults[dimDef];
                    }
                }
            }
            
        }else {
            var iConcepto = rol.conceptosUtilizados.length;
            rol.conceptosUtilizados[iConcepto] = {
                IdConcepto: estructura.IdConcepto,
                RolEtiquetaPreferido: estructura.RolEtiquetaPreferido,
                Indentacion: indentacion,
            };
            var tamanioGrupo = 0;
            tamanioSubEstructuras += 1;
            if (estructura.SubEstructuras && estructura.SubEstructuras != null && estructura.SubEstructuras.length > 0) {
                tamanioGrupo += recorrerSubEstructurasDeRol(rol, estructura.SubEstructuras, indentacion + 1, estructura);
                tamanioSubEstructuras += tamanioGrupo;
            }
            if (tamanioGrupo > 0) {
                rol.grupos.push({
                    IndiceInicio: iConcepto + 1,
                    Tamanio: tamanioGrupo + 1
                });
            }
        }
        
    }
    return tamanioSubEstructuras;
}
/*
Verifica si el concepto es elemento primario en algún cubo del rol
*/
function esElementoPrimarioDeCubo(rol,idConcepto) {
    
    for (var ic = 0; ic < rol.hipercubos.length; ic++)
    {
        if(rol.hipercubos[ic].Partidas) {
            if($.inArray(idConcepto,rol.hipercubos[ic].Partidas) >= 0) {
                return true;
            }
        }
    }
    return false;
}
/*
*Llena una lista plana con la estructura del arbol
*/
function llenarPartidasCubo(partidas,nodo) {
    partidas.push(nodo.IdConcepto);
    for (var inodo = 0; nodo.SubEstructuras && inodo < nodo.SubEstructuras.length; inodo++)
    {
        llenarPartidasCubo(partidas, nodo.SubEstructuras[inodo]);
    }
    
}
/**
Agrega, en caso que no se tenga, el periodo a un grupo de fechas
*/
function agregarContextoAGrupo(gruposFechas,contexto) {
    var idContexto = "";
    //instante
    if(contexto.Periodo.Tipo == 1) {
        idContexto = contexto.Periodo.FechaInstante;
    }else if(contexto.Periodo.Tipo == 2) {
        //duracion
        idContexto = contexto.Periodo.FechaInicio + "-" + contexto.Periodo.FechaFin;
    } else {
        //parasiempre
        idContexto = "Forever";
    }
    for(var ictx = 0;ictx < gruposFechas.length;ictx++) {
        
        if(gruposFechas[ictx].Id == idContexto) {
            return;
        }
    }
    //periodo aún no existe
    var nuevoPeriodo = {
        Id:idContexto,
        Tipo:contexto.Periodo.Tipo,
        FechaInicio:contexto.Periodo.FechaInicio,
        FechaFin:contexto.Periodo.FechaFin,
        FechaInstante:contexto.Periodo.FechaInstante
        };

    gruposFechas[gruposFechas.length] = nuevoPeriodo;
}

function representarHtmlComoImagenEnCanvas(hecho, actualizar) {
    var iframe = $('<iframe></iframe>')[0];
    $('body').append($(iframe));
    setTimeout(function () {
        var iframedoc = iframe.contentDocument || iframe.contentWindow.document;
        $('body', $(iframedoc)).html(hecho.Valor);
        html2canvas(iframedoc.body).then(function (canvas) {
            $(iframe).remove();
            hecho.canvas = canvas;
            if (actualizar) {
                $("#contenedorHojaCalculo").wijspread('refresh');
            }
        }, function (error) {
            console.log(error);
        });
    }, 10);
}

/**
* Calcula el producto cartesiano de los miembros efectivos de todas las dimensiones mas la dimensión de fechas o periodos.
* Si el parámetro filtroDimensiones está presente, se toma en cuenta par calcular únicamente
* las dimensiones presentes en el filtro 
* El filtro es un arreglo de cadenas con el ID de las dimensiones a mostrar
*
*/
function calcularMiembrosEfectivosHipercubo(hipercubo,periodos,filtroDimensiones) {
    var count = [];
    count['totalNodos'] = 0;
    count['niveles'] = 0;
    var estructuraFinal = [];
    var listaDimensiones = [];
    for (var iDim = 0; iDim < hipercubo.Dimensiones.length; iDim++) {
        hipercubo.Dimensiones[iDim].TipoDimension = "Dimension";
        listaDimensiones.push(hipercubo.Dimensiones[iDim]);
    }
    if (periodos && periodos.length > 0) {
        //ordenar los periodos
        var dimFechas = {
            SubEstructuras: ordenarPeriodos(periodos),
            TipoDimension:"Periodo"
        };
        listaDimensiones.push(dimFechas);
    }
    explotarDimensiones(estructuraFinal, listaDimensiones[0], listaDimensiones, 0, count,1,[]);
    hipercubo.TotalMiembrosEfectivos = count['totalNodos'];
    hipercubo.NivelesMiembrosEfectivos = count['niveles'];
    return estructuraFinal;
}
/*
Crea un array ordenado de los elementos de los periodos
*/
function ordenarPeriodos(periodos) {
    periodos.sort(function (b,a) {
        if (a.Tipo == ParaSiempre)
            return -1;
        if (b.Tipo == ParaSiempre)
            return 1;
        if (a.Tipo == ParaSiempre && b.Tipo == ParaSiempre)
            return 0;
        fechaA = moment(a.Tipo == Instante ? a.FechaInstante :
        a.FechaInicio);
        fechaB = moment(b.Tipo == Instante ? b.FechaInstante :
        b.FechaInicio);
        return fechaB - fechaA;
    });
    return periodos;
}
/**
Combina los valores de una dimension con las otras dimensiones a modo de producto cartesiano
*/
function explotarDimensiones(estructuraFinal,nodoActual,listaDimensiones,nivelDimension,count,nivelArbol,valoresDimension) {
    if (!nodoActual || nodoActual == null)
        return;
    if(nodoActual.SubEstructuras && nodoActual.SubEstructuras != null && nodoActual.SubEstructuras.length > 0) {
        if(count['niveles'] < nivelArbol){
            count['niveles'] = nivelArbol;
        }
        for (var iMiembro = 0; iMiembro < nodoActual.SubEstructuras.length; iMiembro++) {
            count['totalNodos'] = count['totalNodos'] + 1;
            var nodoNuevo = {};
            if (listaDimensiones[nivelDimension].TipoDimension == "Dimension") {
                nodoNuevo.IdDimension = listaDimensiones[nivelDimension].IdConcepto;
                nodoNuevo.IdConcepto = nodoActual.SubEstructuras[iMiembro].IdConcepto;
                nodoNuevo.RolEtiquetaPreferido = nodoActual.SubEstructuras[iMiembro].RolEtiquetaPreferido;
            } else {
                nodoNuevo.IdDimension = "Periodo";
                nodoNuevo.TipoPeriodo = nodoActual.SubEstructuras[iMiembro].Tipo;
                nodoNuevo.Id = nodoActual.SubEstructuras[iMiembro].Id;
                nodoNuevo.FechaInstante = nodoActual.SubEstructuras[iMiembro].FechaInstante;
                nodoNuevo.FechaInicio = nodoActual.SubEstructuras[iMiembro].FechaInicio;
                nodoNuevo.FechaFin = nodoActual.SubEstructuras[iMiembro].FechaFin;
            }
            nodoNuevo.SubEstructuras = [];
            estructuraFinal[estructuraFinal.length] = nodoNuevo;
            
            
            explotarDimensiones(nodoNuevo.SubEstructuras, nodoActual.SubEstructuras[iMiembro], listaDimensiones, nivelDimension, count, nivelArbol + 1, valoresDimension);
            //Nodo llenado, combinar la siguiente dimensión
            valoresDimension[nivelDimension] = nodoNuevo;
            if ((nivelDimension+1) < listaDimensiones.length) {
                valoresDimension[nivelDimension] = nodoNuevo;
                explotarDimensiones(nodoNuevo.SubEstructuras, listaDimensiones[nivelDimension + 1], listaDimensiones, nivelDimension + 1, count, nivelArbol + 1, valoresDimension);
                count['totalNodos'] = count['totalNodos'] - 1;
            }else{
                //Copiar los valores dimensionales al nodo hoja
                nodoNuevo.ValoresDimension = [];
                for (var iDim = 0; iDim < valoresDimension.length; iDim++) {
                    nodoNuevo.ValoresDimension[iDim] = valoresDimension[iDim];
                }
            }
        }
    }
    
}
/**
 * Indents the given string
 * @param {string} str  The string to be indented.
 * @param {number} numOfIndents  The amount of indentations to place at the
 *     beginning of each line of the string.
 * @param {number=} opt_spacesPerIndent  Optional.  If specified, this should be
 *     the number of spaces to be used for each tab that would ordinarily be
 *     used to indent the text.  These amount of spaces will also be used to
 *     replace any tab characters that already exist within the string.
 * @return {string}  The new string with each line beginning with the desired
 *     amount of indentation.
 */
function indent(str, numOfIndents, opt_spacesPerIndent) {
    str = str.replace(/^(?=.)/gm, new Array(numOfIndents + 1).join('\t'));
    numOfIndents = new Array(opt_spacesPerIndent + 1 || 0).join(' '); // re-use
    return opt_spacesPerIndent
      ? str.replace(/^\t+/g, function (tabs) {
          return tabs.replace(/./g, numOfIndents);
      })
      : str;
}

function BigDecimalCellType(numberType) {
    this.EditorWidth = 150;
    this.MultiplicadorAnchoColumna = 7;
    this.EditorWidthPx = '150px';
    this.uuid = generateUuid();
    this.numberType = numberType;
    this.optionsCurrency = { aSign: '$', pSign: 'p', vMin: '-999999999999999.00', nBracket: '(,)' };
    this.optionsDecimal = { pSign: 'p', vMin: '-999999999999999.00', nBracket: '(,)' };
    this.optionsPositiveInteger = { vMin: '0', vMax: '999999999999999' };
    this.optionsNonNegativeInteger = { vMin: '1', vMax: '999999999999999' };
    this.optionsInteger = { pSign: 'p', vMin: '-999999999999999', nBracket: '(,)' };
}

BigDecimalCellType.DecimalType = 1;
BigDecimalCellType.IntegerType = 2;
BigDecimalCellType.PositiveIntegerType = 3;
BigDecimalCellType.CurrencyType = 4;
BigDecimalCellType.NonNegativeIntegerType = 5;

BigDecimalCellType.prototype = new $.wijmo.wijspread.CustomCellType();

BigDecimalCellType.prototype.crearInputEditor = function () {
    var options;

    switch (this.numberType) {
        case BigDecimalCellType.DecimalType:
            options = this.optionsDecimal;
            break;
        case BigDecimalCellType.CurrencyType:
            options = this.optionsCurrency;
            break;
        case BigDecimalCellType.IntegerType:
            options = this.optionsInteger;
            break;
        case BigDecimalCellType.PositiveIntegerType:
            options = this.optionsPositiveInteger;
            break;
        case BigDecimalCellType.NonNegativeIntegerType:
            options = this.optionsNonNegativeInteger;
            break;
    }

    var contenedor = $('<div class="input-group"><span class="input-group-btn"><button id="btn_' + this.uuid + '" class="btn btn-default" style="width:40px;" type="button"><i class="text-default fa fa-calculator text-success"></i></button></span></div>');
    contenedor.attr("gcUIElement", "gcEditingInput");
    contenedor.css("position", "absolute");
    contenedor.css("overflow", "hidden");
    contenedor.css("border", "2px #5292f7 solid");

    this.input = crearElementoInputBigDecimal(this.uuid, options);
    contenedor.prepend($(this.input));

    this.editorContainer = contenedor[0];

};

BigDecimalCellType.prototype.paint = function (ctx, value, x, y, w, h, style, context) {
    if (value) {
        if (!this.input) {
            this.crearInputEditor();
        }
        $(this.input).autoNumeric('set', value);
        var val = $(this.input).val();
        $.wijmo.wijspread.CustomCellType.prototype.paint.apply(this, [ctx, val, x, y, w, h, style, context]);
    }
};
BigDecimalCellType.prototype.updateEditor = function (editorContext, cellStyle, cellRect) {
    if (editorContext) {
        if (cellRect.width < this.EditorWidth) {
            $(editorContext).width(this.EditorWidthPx);
        } else {
            $(editorContext).width(cellRect.width);
            $(editorContext).css('font-size', (cellRect.height * .6) + 'px');
        }
    }
    $(editorContext).height(cellRect.height);
};
BigDecimalCellType.prototype.createEditorElement = function () {
    if (!this.input) {
        this.crearInputEditor();
    }
    return this.editorContainer;
};

BigDecimalCellType.prototype.getAutoFitWidth = function (value, text, cellStyle, zoomFactor, context) {
    var val = $(this.input).val();
    return (val ? val.length : 0) * this.MultiplicadorAnchoColumna;
}

BigDecimalCellType.prototype.getAutoFitHeight = function (value, text, cellStyle, zoomFactor, context) {
    return calcularAltoCeldaTitulo(1);
}

BigDecimalCellType.prototype.getEditorValue = function (editorContext) {
    if (editorContext) {
        return $(this.input).autoNumeric('get');
    }
};
BigDecimalCellType.prototype.setEditorValue = function (editorContext, value) {
    if (editorContext) {
        $(this.input).autoNumeric('set', value);
    }
};

BigDecimalCellType.prototype.isEditingValueChanged = function (oldValue, newValue) {
    if (Number(oldValue) !== Number(newValue)) {
        return true;
    }
    return false;
};

BigDecimalCellType.prototype.processMouseUp = function (hitInfo) {
    return false;
}

BigDecimalCellType.prototype.getHitInfo = function (x, y, cellStyle, cellRect, context) {
    var xm = cellRect.x + cellRect.width / 2,
            ym = cellRect.y + cellRect.height / 2,
            size = 10;
    var info = { x: x, y: y, row: context.row, col: context.col, cellRect: cellRect, sheetArea: context.sheetArea };
    /*if (xm - size <= x && x <= xm + size && ym - size <= y && y <= ym + size) {
        info.isReservedLocation = true;
    }*/
    return info;
};



function HtmlContentCellType(hecho) {
    this.EditorWidth = 400;
    this.MultiplicadorAnchoColumna = 7;
    this.EditorWidthPx = '400px';
    this.uuid = generateUuid();
    this.hecho = hecho;
    this.editor = undefined;
}
HtmlContentCellType.prototype = new $.wijmo.wijspread.CustomCellType();

HtmlContentCellType.prototype.paint = function (ctx, value, x, y, w, h, style, context) {
    if (!ctx) {
        return;
    }

    if (value && this.hecho.canvas) {
        ctx.save();
        ctx.clearRect(x, y, w, h);

        var width = (w > this.hecho.canvas.width) ? this.hecho.canvas.width : w;
        var height = (h > this.hecho.canvas.height) ? this.hecho.canvas.height : h;

        ctx.drawImage(this.hecho.canvas, 0, 0, width, height, x, y, width, height);
        ctx.restore();
    }
};

HtmlContentCellType.prototype.getAutoFitWidth = function (value, text, cellStyle, zoomFactor, context) {
    var width = 100;
    if (value && this.hecho.canvas) {
        width = this.hecho.canvas.width;
    }
    return width;
}

HtmlContentCellType.prototype.getAutoFitHeight = function (value, text, cellStyle, zoomFactor, context) {
    var height = 100;
    if (value && this.hecho.canvas) {
        height = this.hecho.canvas.height;
    }
    return height;
}




function CalendarCellType(dateFormat) {
    this.EditorWidth = 150;
    this.MultiplicadorAnchoColumna = 7;
    this.EditorWidthPx = '150px';
    this.uuid = generateUuid();
    this.dateFormat = dateFormat;
}
CalendarCellType.prototype = new $.wijmo.wijspread.CustomCellType();
CalendarCellType.prototype.crearInputEditor = function () {

    var input = $('<input type="text" id="' + this.uuid + '" name="' + this.uuid + '" gcUIElement="gcEditingInput"/>');
    input.css("background-color", "white");
    input.css("position", "absolute");
    input.css("overflow", "hidden");
    input.css("border", "2px #5292f7 solid");
    input.datepicker({
        format: this.dateFormat,
        language: 'es',
        autoclose: true,
    });

    input.datepicker().on('show', function (e) {
        $('.datepicker').prop('gcUIElement', 'gcEditingInput');
    });

    this.input = input[0];
};

CalendarCellType.prototype.deactivateEditor = function (editorContext, context) {
    //Dispose the create editor when end editing mode.
    $(this.input).datepicker('remove');
    this.input = undefined;
    $.wijmo.wijspread.CustomCellType.prototype.deactivateEditor.apply(this, arguments);
}


CalendarCellType.prototype.paint = function (ctx, value, x, y, w, h, style, context) {
    if (value) {
        if (!this.input) {
            this.crearInputEditor();
        }
        if (value instanceof Date) {
            $(this.input).datepicker('setDate', value);
        } else {
            $(this.input).val(value);
        }
        var val = $(this.input).val();
        $.wijmo.wijspread.CustomCellType.prototype.paint.apply(this, [ctx, val, x, y, w, h, style, context]);
    }
};
CalendarCellType.prototype.updateEditor = function (editorContext, cellStyle, cellRect) {
    if (editorContext) {
        if (cellRect.width < this.EditorWidth) {
            $(editorContext).width(this.EditorWidthPx);
        } else {
            $(editorContext).width(cellRect.width);
            $(editorContext).css('font-size', (cellRect.height * .6) + 'px');
        }
    }
    $(editorContext).height(cellRect.height);
};
CalendarCellType.prototype.createEditorElement = function () {
    if (!this.input) {
        this.crearInputEditor();
    }
    return this.input;
};

CalendarCellType.prototype.getAutoFitWidth = function (value, text, cellStyle, zoomFactor, context) {
    var val = $(this.input).val();
    return (val ? val.length : 0) * this.MultiplicadorAnchoColumna;
}

CalendarCellType.prototype.getAutoFitHeight = function (value, text, cellStyle, zoomFactor, context) {
    return calcularAltoCeldaTitulo(1);
}

CalendarCellType.prototype.getEditorValue = function (editorContext) {
    if (editorContext) {
        return $(this.input).val();
    }
};
CalendarCellType.prototype.setEditorValue = function (editorContext, value) {
    if (editorContext) {
        if (value instanceof Date) {
            $(this.input).datepicker('setDate', value);
        } else {
            $(this.input).val(value);
        }
    }
};

CalendarCellType.prototype.isEditingValueChanged = function (oldValue, newValue) {
    if (Number(oldValue) !== Number(newValue)) {
        return true;
    }
    return false;
};

CalendarCellType.prototype.processMouseUp = function (hitInfo) {
    return false;
}

CalendarCellType.prototype.getHitInfo = function (x, y, cellStyle, cellRect, context) {
    var xm = cellRect.x + cellRect.width / 2,
            ym = cellRect.y + cellRect.height / 2,
            size = 10;
    var info = { x: x, y: y, row: context.row, col: context.col, cellRect: cellRect, sheetArea: context.sheetArea };
    /*if (xm - size <= x && x <= xm + size && ym - size <= y && y <= ym + size) {
        info.isReservedLocation = true;
    }*/
    return info;
};




function generateUuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

function crearElementoInputBigDecimal(uuid, options) {

    var input = $('<input type="text"  class="form-control" id="' + uuid + '" name="' + uuid + '"/>');
    input.autoNumeric(options);

    return input[0];
}