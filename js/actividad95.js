function sinEspacios(inputs) {
    $(inputs).on('keypress', function(e) {
        if (e.which == 32)
            return false;
    });
}
sinEspacios(".sinEspacios");
var act85 = [360000, 34008, 21600, 216, 7475, 860, 1632, 160];

function actividad95() {

    var cont = 0;
    for (var i = 0; i < 8; i++) {
        var num = $('#num' + [i] + '').val();
        if (num == act85[i]) {
            cont = cont + 1;
            $('#num' + [i] + '').addClass('correcto');
        } else {
            $('#num' + [i] + '').addClass('incorrecto');
        }

    }
    var total = (cont * 10) / 8;
    $('#txtNota').html(total.toFixed(2));
    document.getElementById('bt_comprobar').disabled = true;
    $('input').attr("disabled", true);
    $('#txtAlumno').attr("disabled", false);

}
