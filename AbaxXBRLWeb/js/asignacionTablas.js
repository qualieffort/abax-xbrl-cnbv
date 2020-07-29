
//      $(document).ready(function () {
//          $('#moveright').click(function () {
//              if (!isSelected("#origenSelectBox")) { return false; }
//              $('#origenSelectBox option:selected').remove().appendTo('#destinoSelectBox');
//              return false;
//          });

//          //Moving selected item(s) to left select box provided
//          $('#moveleft').click(function () {
//              if (!noOptions("#destinoSelectBox") || !isSelected("#destinoSelectBox")) { return false; }
//              $('#destinoSelectBox option:selected').remove().appendTo('#origenSelectBox');
//              return false;
//          });

//          $('#quitarTodos').click(function () {
//              if (selectAll('destinoSelectBox')) {
//                  if (!noOptions("#destinoSelectBox") || !isSelected("#destinoSelectBox")) { return; }
//                  $('#destinoSelectBox option:selected').remove().appendTo('#origenSelectBox');
//              }
//              return false;
//          });

//          $('#asignarTodos').click(function () {
//              if (selectAll('origenSelectBox')) {
//                  if (!isSelected("#origenSelectBox")) { return; }                    
//                  $('#origenSelectBox option:selected').remove().appendTo('#destinoSelectBox');
//              }
//              return false;
//          });
//      });

///**
//    * Valida si las opciones seleccionadas ya se encuentran dentro de la lista multiple
//    */
//function isSelected(thisObj) {
//    if (!$(thisObj + " option:selected").length) {
//        // alert("kjhkh");
//        return false;
//    }
//    return true;
//}

///*
//    *Selecciona todos los valores de la lista multiple origen o destino 
//    */
//function selectAll(thisObj) {
//    if (!noOptions("#" + thisObj)) { return false; }
//    $('#' + thisObj + ' option').each(function () { $(this).attr("selected", "selected"); });
//    return true;

//}
///**
//    *Valida si se ha seleccionado alguna opcion para pasarla a la lista multiple origen o destino
//    */
//function noOptions(thisObj) {
//    if (!$(thisObj + " option").length) {
//        // alert("<%= Resources.AdministracionSeguridad.JAVASCRIPT_NO_SELECCIONADAS_MOVER %>");
//        return false;
//    }
//    return true;
//}


///**
//*Limpia los valores seleccionados de la lista multiple origen o destino
//*/
//function clearAll(thisObj) {
//    $('#' + thisObj).each(function () { $(this).find('option:selected').removeAttr("selected"); });
//    return false;
//}
        

//function SelectAllFinal() {
           
//    var multi = document.getElementById("origenSelectBox");
//    for (var i = 0; i < multi.options.length; i++) {
//        multi.options[i].selected = true;
//    }
            
//    var multi = document.getElementById("destinoSelectBox");
//    for (var i = 0; i < multi.options.length; i++) {
//        multi.options[i].selected = true;
//    }
            
//}

$(document).ready(function () {

    $('#quitarTodos').click(function () {
        $('#tableAsignado tbody').find('tr').each(function() {
            var row = $(this);
            if (row.find('input[type="checkbox"]').is(':checked')) {
                row.find('input[type="checkbox"]').attr("name", "idsNoasig");
                $("#tableDesasignado").append(row);
                row.find('input[type="checkbox"]').attr("checked", false);               
                
              
            }
        }       
        );
        
        return false;
    }
     
    
    );


    

    $('#asignarTodos').click(function () {
        $('#tableDesasignado tbody').find('tr').each(function () {
            var row = $(this);
            if (row.find('input[type="checkbox"]').is(':checked')) {
                row.find('input[type="checkbox"]').attr("name", "idsASig");
                $("#tableAsignado").append(row);
                row.find('input[type="checkbox"]').attr("checked", false);
               
            }
        });
       
        return false;
    });
});

function SelectAllTable() {

    var checkedStatus = true;
    $('#tableAsignado tbody tr').find('td:first :checkbox').each(function () {
        $(this).prop('checked', checkedStatus);
    });


    //$('#tableDesasignado tbody tr').find('td:first :checkbox').each(function () {
    //    $(this).prop('checked', checkedStatus);
    //});
}



$("#asignado").keyup(function () {
    var data = this.value.split(" ");    
    var tbl = $("#tableAsignado tbody").find("tr");
    if (this.value == "") {
        tbl.show();
        return;
    }
    tbl.hide();
    tbl.filter(function (i, v) {
        var t = $(this);
        for (var d = 0; d < data.length; d++) {
            if (t.is(":containsIN('" + data[d].toLowerCase() + "')")) {
                return true;
            }
        }
        return false;
    }).show();
});


$.extend($.expr[":"], {
    "containsIN": function (elem, i, match, array) {
        return (elem.textContent || elem.innerText || "").toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0;
    }
});

$("#desasignado").keyup(function () {
    var data = this.value.split(" ");
    var tbl = $("#tableDesasignado tbody").find("tr");
    if (this.value == "") {
        tbl.show();
        return;
    }
    tbl.hide();
    tbl.filter(function (i, v) {
        var t = $(this);
        for (var d = 0; d < data.length; d++) {
            if (t.is(":containsIN('" + data[d].toLowerCase() + "')")) {
                return true;
            }
        }
        return false;
    }).show();
});



