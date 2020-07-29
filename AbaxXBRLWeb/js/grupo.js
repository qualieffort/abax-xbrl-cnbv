/**
*Scripts necesarios para el manejo de la administración de Grupos de Usuarios
*Author: Luis Angel Morales González
*/
$(document).ready(function () {

    $('#eliminarGrupoUsuario').hide();
    
    $('#btnConfirmarEliminarGrupo').click(function (e) {
        $.isLoading({ text: 'Eliminando datos de Grupo, espere...' });
        window.location.href = "Delete/" + $('#idGrupoEliminar').val();
    });
    

});


/**
*Metodo a eliminar el grupo
*/
function EliminarGrupo(idGrupo) {
    $('#idGrupoEliminar').val(idGrupo);
    $('#modalEliminarGrupo').modal({
        'backdrop': true,
        'keyboard': true
    });
}