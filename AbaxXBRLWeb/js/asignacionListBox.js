
      $(document).ready(function () {
          $('#moveright').click(function () {
              if (!isSelected("#origenSelectBox")) { return false; }
              $('#origenSelectBox option:selected').remove().appendTo('#destinoSelectBox');
              return false;
          });

          //Moving selected item(s) to left select box provided
          $('#moveleft').click(function () {
              if (!noOptions("#destinoSelectBox") || !isSelected("#destinoSelectBox")) { return false; }
              $('#destinoSelectBox option:selected').remove().appendTo('#origenSelectBox');
              return false;
          });

          $('#quitarTodos').click(function () {
              if (selectAll('destinoSelectBox')) {
                  if (!noOptions("#destinoSelectBox") || !isSelected("#destinoSelectBox")) { return; }
                  $('#destinoSelectBox option:selected').remove().appendTo('#origenSelectBox');
              }
              return false;
          });

          $('#asignarTodos').click(function () {
              if (selectAll('origenSelectBox')) {
                  if (!isSelected("#origenSelectBox")) { return; }                    
                  $('#origenSelectBox option:selected').remove().appendTo('#destinoSelectBox');
              }
              return false;
          });
      });

/**
    * Valida si las opciones seleccionadas ya se encuentran dentro de la lista multiple
    */
function isSelected(thisObj) {
    if (!$(thisObj + " option:selected").length) {
        // alert("kjhkh");
        return false;
    }
    return true;
}

/*
    *Selecciona todos los valores de la lista multiple origen o destino 
    */
function selectAll(thisObj) {
    if (!noOptions("#" + thisObj)) { return false; }
    $('#' + thisObj + ' option').each(function () { $(this).attr("selected", "selected"); });
    return true;

}
/**
    *Valida si se ha seleccionado alguna opcion para pasarla a la lista multiple origen o destino
    */
function noOptions(thisObj) {
    if (!$(thisObj + " option").length) {
        // alert("<%= Resources.AdministracionSeguridad.JAVASCRIPT_NO_SELECCIONADAS_MOVER %>");
        return false;
    }
    return true;
}


/**
*Limpia los valores seleccionados de la lista multiple origen o destino
*/
function clearAll(thisObj) {
    $('#' + thisObj).each(function () { $(this).find('option:selected').removeAttr("selected"); });
    return false;
}
        

function SelectAllFinal() {
           
    var multi = document.getElementById("origenSelectBox");
    for (var i = 0; i < multi.options.length; i++) {
        multi.options[i].selected = true;
    }
            
    var multi = document.getElementById("destinoSelectBox");
    for (var i = 0; i < multi.options.length; i++) {
        multi.options[i].selected = true;
    }
            
}

$(document).ready(function () {

    $('#quitarTodos').click(function () {
        $('#tableAsignado tbody').find('tr').each(function () {
            var row = $(this);
            if (row.find('input[type="checkbox"]').is(':checked')) {
                row.find('input[type="checkbox"]').attr("name", "idsNoasig");
                $("#tableDesasignado").append(row);
                //$("#tableAsignado").remove(row);

            }
        });
        return false;
    });

    $('#asignarTodos').click(function () {
        $('#tableDesasignado tbody').find('tr').each(function () {
            var row = $(this);
            if (row.find('input[type="checkbox"]').is(':checked')) {
                row.find('input[type="checkbox"]').attr("name", "idsASig");
                $("#tableAsignado").append(row);
                //$("#tableDesasignado").remove(row);
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


    $('#tableDesasignado tbody tr').find('td:first :checkbox').each(function () {
        $(this).prop('checked', checkedStatus);
    });
}






