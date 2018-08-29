function sinEspacios(inputs) {
    $(inputs).on('keypress', function(e) {
        if (e.which == 32)
            return false;
    });
}
sinEspacios(".sinEspacios");

var act1 = [];
var num3 =1;
var num1 = Math.floor((Math.random() * 4) + 2);
for (var i = 0; i < 8; i++) {
     num3 = parseInt(num3) * parseInt(num1);
    act1[i] = num3;


}
$('#sucesion').html(''+act1[1]+',  '+act1[2]+',  '+act1[3]+',  '+act1[4]+',  '+act1[5]+',  '+act1[6]+',  '+act1[7]+'');
$('#num1_1').html(act1[2]);
$('#num1_2').html(act1[4]);
var act1 = [act1[0],act1[1],act1[3]];
for (var i = 0; i < 8; i++) {
    var num = $('#act1num'+[i]+'').val();
    }

/*
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
*/
