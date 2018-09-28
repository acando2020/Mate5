var act1 = [];
var act2 = [];
var multiplo1 = 0;
var multiplo2 = 0;
var num1 = Math.floor((Math.random() * 5) + 2);
var num2 = Math.floor((Math.random() * 5) + 2);
for (var i = 0; i < 7; i++) {
    multiplo1 = parseInt(multiplo1) + parseInt(num1);
    act1[i] = parseInt(multiplo1);
    multiplo2 = parseInt(multiplo2) + parseInt(num2);
    act2[i] = parseInt(multiplo2);
}
$('#act1').html('' + act1[1] + ', ' + act1[2] + ', ' + act1[3] + ', ' + act1[4] + ', ' + act1[5] + ', ' + act1[6] + '');
$('#act1_1').html('' + act1[2] + ' - ' + act1[1] + ' = ');
$('#act1_2').html('' + act1[5] + ' - ' + act1[4] + ' = ');

function pregunta1() {
    var respact2 = [act1[0], act1[0], act1[0], ];
    var cont = 0;
    for (var i = 0; i < 3; i++) {
        var res = $('#act1num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act1num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act1num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 3;
    $('#nota1').val(parseFloat(total).toFixed(2));
    /* $('#txtNota').html(parseFloat(total).toFixed(2));
     document.getElementById('bt_comprobar').disabled = true;
     $('input').attr("disabled", true);
     $('#txtAlumno').attr("disabled", false);*/

}
