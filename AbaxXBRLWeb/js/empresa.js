/**
*Scripts necesarios para el manejo de la administración de Empreasas
*Author: Eric Alan Gonzalez Fuentes
*/
$(document).ready(function () {

    $('#eliminarEmpresa').hide();

    $('#btnConfirmarEliminarEmpresa').click(function (e) {
        window.location.href = "Delete/" + $('#idEmpresaEliminar').val();
    });


});


/**
*Metodo a eliminar el grupo
*/
function EliminarEmpresa(idEmpresa) {
    $('#idEmpresaEliminar').val(idEmpresa);
    $('#modalEliminarEmpresa').modal({
        'backdrop': true,
        'keyboard': true
    });
}