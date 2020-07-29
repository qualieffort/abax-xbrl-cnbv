/**
*Scripts necesarios para el manejo de la administración de usuarios
*Author: Eric Alan Gonzalez Fuentes
*/
$(document).ready(function () {

    $('#eliminarUsuario').hide();

    $('#btnConfirmarEliminarUsuario').click(function (e) {
        $.isLoading({ text: 'Eliminando datos de Usuario, espere...' });
        window.location.href = "DeleteUsuario/" + $('#idUsuarioEliminar').val();
    });


});


/**
*Metodo a eliminar el grupo
*/
function EliminarUsuario(idGrupo) {
    $('#idUsuarioEliminar').val(idGrupo);
    $('#modalEliminarUsuario').modal({
        'backdrop': true,
        'keyboard': true
    });
}