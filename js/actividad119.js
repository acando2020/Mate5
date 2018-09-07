function pregunta1() {
    var act1num1 = document.getElementById('act1num1').value;
    var act1num2 = document.getElementById('act1num2').value;
    var nt1 = 0,
        nt2 = 0;

    if (act1num1 == "60") {
        nt1 = 0.5;
        $('#act1num1').addClass('correcto');

    } else {
        $('#act1num1').addClass('incorrecto');

    }

    if (act1num2 == "4500") {
        nt2 = 0.5;
        $('#act1num2').addClass('correcto');

    } else {
        $('#act1num2').addClass('incorrecto');

    }
    var total = parseFloat(nt1) + parseFloat(nt2);
    $('#nota1_1').val(parseFloat(total).toFixed(2));


}
//////////////////pregunta 2////////////////////////////////////////////////////
var act2 = [];
for (var i = 0; i < 6; i++) {
    act2[i] = Math.floor((Math.random() * 100) + 20);
}
$('#act2num1').html(act2[0]);
$('#act2num2').html(act2[1]);
$('#act2num3').html(act2[2]);
$('#act2num4').html(act2[3]);
$('#act2num5').html(act2[4]);
$('#act2num6').html(act2[5]);
var prod1 = parseInt(act2[0]) * parseInt(act2[1]);
var prod2 = parseInt(act2[2]) * parseInt(act2[3]);
var prod3 = parseInt(act2[4]) * parseInt(act2[5]);
var respact2 = [prod1, 'factor', 'factor', 'producto', prod2, 'factor', 'factor', 'producto', prod3, 'factor', 'factor', 'producto', ];

function pregunta2() {
    var cont = 0;
    for (var i = 0; i < 12; i++) {
        var res = $('#act2res' + [i] + '').val();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act2res' + [i] + '').addClass('correcto');
        } else {
            $('#act2res' + [i] + '').addClass('incorrecto');
        }

    }
    var total = (cont * 1) / 12;
    $('#nota1_2').val(total.toFixed(2));
}
//////////////////pregunta 3////////////////////////////////////////////////////


act3_1 = [];
act3_2 = [];
for (var i = 0; i < 12; i++) {
    act3_1[i] = Math.floor((Math.random() * 800) + 10);
    act3_2[i] = Math.floor((Math.random() * 90) + 21);

}
var act3num1 = parseInt(act3_2[5]) * parseInt(100);
$('#act3num1').html(' ' + act3_2[5] + ' ×  100 = ' + act3num1 + '');

$('#act3num2').html(' ' + act3_2[7] + ' × 10 = ');
$('#act3num3').html(' ' + act3_2[9] + ' × 1 = ');
$('#act3num4').html(' ' + act3_2[11] + ' × 1000 = ');
$('#act3num5').html(' ' + act3_1[1] + ' × 10 = ');
$('#act3num6').html(' ' + act3_1[3] + ' × 100 = ');

function pregunta3() {
    var num2 = parseInt(act3_2[7]) * 10;
    var num3 = parseInt(act3_2[9]) * 1;
    var num4 = parseInt(act3_2[11]) * 1000;
    var num5 = parseInt(act3_1[1]) * 10;
    var num6 = parseInt(act3_1[3]) * 100;
    var cor = [num2, num3, num4, num5, num6];
    var cont = 0;
    for (var i = 0; i < 5; i++) {
        var res = $('#act5res' + [i] + '').val();
        if (cor[i] == res) {
            cont = cont + 1;
            $('#act5res' + [i] + '').addClass('correcto');
        } else {
            $('#act5res' + [i] + '').addClass('incorrecto');
        }

    }
    var total = (cont * 1) / 5;
    $('#nota1_3').val(total.toFixed(2));
}
