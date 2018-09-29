function pregunta1() {
    var respact2 = ['2', '5', '2', '1', '5', '0', '7', '6', '1', '2', '5', '2', '7', '5', '6', '1', ];
    var cont = 0;
    for (var i = 0; i < 16; i++) {
        var res = $('#act1num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act1num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act1num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 10) / 16;
    //$('#nota1').val(parseFloat(total).toFixed(2));
    $('#txtNota').html(total.toFixed(2));
    document.getElementById('bt_comprobar').disabled = true;
    $('input').attr("disabled", true);
    $('#txtAlumno').attr("disabled", false);
}
