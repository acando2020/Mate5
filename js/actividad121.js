function pregunta1() {
    var respact2 = ['64', '32', '16', '8', 'decreciente', 'división', '2', '2', '2', '2', '2', '2', '2', '2'];
    var cont = 0;
    for (var i = 0; i < 14; i++) {
        var res = $('#act1num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act1num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act1num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 10) / 14;
   // $('#nota1').val(parseFloat(total).toFixed(2));
     $('#txtNota').html(parseFloat(total).toFixed(2));
     document.getElementById('bt_comprobar').disabled = true;
     $('input').attr("disabled", true);
     $('#txtAlumno').attr("disabled", false);

}
//////////////pregunta2////////////////////////////////////
