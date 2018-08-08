var interesult = [],
    numeroInt = 0,
    interesult2 = [],
    numeroInt2 = 0;

var IntNum = Math.floor(Math.random() * 50) + 1;
var h = 1;
for (var h = 0; h <= 8; h++) {

    numeroInt = parseInt(numeroInt) + parseInt(IntNum);
    interesult[h] = numeroInt;

}
document.getElementById('numI1').value = interesult[1];
document.getElementById('numI2').value = interesult[2];
document.getElementById('numI3').value = interesult[3];
document.getElementById('numI5').value = interesult[5];
document.getElementById('numI6').value = interesult[6];

document.getElementById('todosN').innerHTML = interesult;
document.getElementById('num1').innerHTML = interesult[3];
document.getElementById('num2').innerHTML = interesult[0];
document.getElementById('num3').innerHTML = interesult[4];


document.getElementById('num4').innerHTML = interesult[6];
document.getElementById('num5').innerHTML = interesult[0];
document.getElementById('num6').innerHTML = interesult[7];

document.getElementById('num7').innerHTML = interesult[7];
document.getElementById('num8').innerHTML = interesult[0];
document.getElementById('num9').innerHTML = interesult[8];

document.getElementById('num10').innerHTML = interesult[1];
document.getElementById('num11').innerHTML = interesult[2];
document.getElementById('num12').innerHTML = interesult[0];


document.getElementById('num13').innerHTML = interesult[5];
document.getElementById('num14').innerHTML = interesult[6];
document.getElementById('num15').innerHTML = interesult[0];

function actividad38() {
    var numI4 = document.getElementById('numI4').value;
    var numI7 = document.getElementById('numI7').value;
    var numI8 = document.getElementById('numI8').value;
    var respuesta1 = 0,
        respuesta2 = 0,
        respuesta3 = 0;
    if (numI4 == interesult[4]) {
        $('#numI4').css("background", "#00e600");
        respuesta1 = 1;

    } else {
        $('#numI4').css("background", "#ff6666");

    }

    if (numI7 == interesult[7]) {
        $('#numI7').css("background", "#00e600");
        respuesta2 = 1;

    } else {
        $('#numI7').css("background", "#ff6666");

    }
    if (numI8 == interesult[8]) {
        $('#numI8').css("background", "#00e600");
        respuesta3 = 1;

    } else {
        $('#numI8').css("background", "#ff6666");
    }
    var Res38_4 = 0;
    var pt = ['+', interesult[0]]
    var ptron = pt.join('');
    var resPtr1 = 0;
    for (var i = 1; i <= 7; i++) {
        var p = $('#ptr' + [i] + '').val();
        if (p == ptron) {
            resPtr1 = parseInt(resPtr1) + 1;
            $('#ptr' + [i] + '').css("background", "#00e600");
            Res38_4 = Res38_4 + 1;

        } else {

            $('#ptr' + [i] + '').css("background", "#ff6666");



        }


    }

    var total = parseFloat(respuesta1) + parseFloat(respuesta2) + parseFloat(respuesta3) + parseFloat(Res38_4);
    $('#txtNota').html(total.toFixed(2));
    document.getElementById('bt_comprobar').disabled = true;
    $('input').attr("disabled", true);
    $('#txtAlumno').attr("disabled", false);



}
