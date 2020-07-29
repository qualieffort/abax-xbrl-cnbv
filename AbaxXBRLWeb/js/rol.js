/**
*Scripts necesarios para el manejo de la administración de Roles
*Author: Eric Alan Gonzalez Fuentes
*/
$(document).ready(function () {

    $('#eliminarRol').hide();
    
    $('#btnConfirmarEliminarRol').click(function (e) {
        $.isLoading({ text: 'Eliminando Rol, espere...' });
        window.location.href = "DeleteRol/" + $('#idRolEliminar').val();
    });


});


/**
*Metodo a eliminar el grupo
*/
function EliminarRol(idGrupo) {
    $('#idRolEliminar').val(idGrupo);
    $('#modalEliminarRol').modal({
        'backdrop': true,
        'keyboard': true
    });
}