function sinEspacios(inputs) {
    $(inputs).on('keypress', function(e) {
        if (e.which == 32)
            return false;
    });
}
sinEspacios(".sinEspacios");



var act2 = [];
for (var i = 0; i < 10; i++) {
    act2[i] = Math.floor((Math.random() * 200) + 2);

}


$('#num1').html('' + act2[0] + ' × 1 =')
$('#num2').html('' + act2[0] + ' × 10 =')
$('#num3').html('' + act2[0] + ' × 100 =')
$('#num4').html('' + act2[0] + ' × 1000 =')

$('#num5').html('' + act2[1] + ' × 1 =')
$('#num6').html('' + act2[1] + ' × 10 =')
$('#num7').html('' + act2[1] + ' × 100 =')
$('#num8').html('' + act2[1] + ' × 1000 =')


function actividad90_1() {
    var num1 = parseInt(act2[0]) * 1;
    var num2 = parseInt(act2[0]) * 10;
    var num3 = parseInt(act2[0]) * 100;
    var num4 = parseInt(act2[0]) * 1000;
    var num5 = parseInt(act2[1]) * 1;
    var num6 = parseInt(act2[1]) * 10;
    var num7 = parseInt(act2[1]) * 100;
    var num8 = parseInt(act2[1]) * 1000;
    var act90_1 = document.getElementById('act90_1').value;
    var act90_2 = document.getElementById('act90_2').value;
    var act90_3 = document.getElementById('act90_3').value;
    var act90_4 = document.getElementById('act90_4').value;
    var act90_5 = document.getElementById('act90_5').value;
    var act90_6 = document.getElementById('act90_6').value;
    var act90_7 = document.getElementById('act90_7').value;
    var act90_8 = document.getElementById('act90_8').value;
    var nt1 = 0,
        nt2 = 0,
        nt3 = 0,
        nt4 = 0,
        nt5 = 0,
        nt6 = 0,
        nt7 = 0,
        nt8 = 0;
    if (act90_1 == num1) {
        nt1 = 1;
        $('#act90_1').css("background", "#00e600");

    } else {
        $('#act90_1').css("background", "#ff6666");

    }
    if (act90_2 == num2) {
        nt2 = 1;
        $('#act90_2').css("background", "#00e600");

    } else {
        $('#act90_2').css("background", "#ff6666");

    }

    if (act90_3 == num3) {
        nt3 = 1;
        $('#act90_3').css("background", "#00e600");

    } else {
        $('#act90_3').css("background", "#ff6666");

    }

    if (act90_4 == num4) {
        nt4 = 1;
        $('#act90_4').css("background", "#00e600");

    } else {
        $('#act90_4').css("background", "#ff6666");

    }

    if (act90_5 == num5) {
        nt5 = 1;
        $('#act90_5').css("background", "#00e600");

    } else {
        $('#act90_5').css("background", "#ff6666");

    }
    if (act90_6 == num6) {
        nt6 = 1;
        $('#act90_6').css("background", "#00e600");

    } else {
        $('#act90_6').css("background", "#ff6666");

    }

    if (act90_7 == num7) {
        nt7 = 1;
        $('#act90_7').css("background", "#00e600");

    } else {
        $('#act90_7').css("background", "#ff6666");

    }
    if (act90_8 == num8) {
        nt8 = 1;
        $('#act90_8').css("background", "#00e600");

    } else {
        $('#act90_8').css("background", "#ff6666");

    }


    var subtotal = parseFloat(nt1) + parseFloat(nt2) + parseFloat(nt3) + parseFloat(nt4) + parseFloat(nt5) + parseFloat(nt6) + parseFloat(nt7) + parseFloat(nt8);
    var total = (subtotal * 2.5) / 8;
    //$('#nota2').val(parseFloat(total).toFixed(2));
    $('#nota1').val(total.toFixed(2));

}


var act90_2 = [];
for (var i = 0; i < 10; i++) {
    act90_2[i] = Math.floor((Math.random() * 100) + 20);

}

var act90_3 = [];
for (var i = 0; i < 10; i++) {
    act90_3[i] = Math.floor((Math.random() * 20) + 2);

}

$('#num9').html('(' + act90_2[0] + ' + ' + act90_2[1] + ') × 10 =')
$('#num10').html('(' + act90_2[2] + ' × ' + act90_2[3] + ') × 100 =')
$('#num11').html('(' + act90_2[4] + ' - ' + act90_3[0] + ') × 100 =')
$('#num12').html('(' + act90_2[5] + ' + ' + act90_2[6] + ' - ' + act90_3[1] + ') × 1000 =')

function actividad90_2() {
    var num1 = (parseInt(act90_2[0]) + parseInt(act90_2[1])) * 10;
    var num2 = parseInt(act90_2[2]) * parseInt(act90_2[3]) * 100;
    var num3 = (parseInt(act90_2[4]) - parseInt(act90_3[0])) * 100;
    var num4 = (parseInt(act90_2[5]) + act90_2[6] - act90_3[1]) * 1000;
    var act90_9 = document.getElementById('act90_9').value;
    var act90_10 = document.getElementById('act90_10').value;
    var act90_11 = document.getElementById('act90_11').value;
    var act90_12 = document.getElementById('act90_12').value;
    var nt1 = 0,
        nt2 = 0,
        nt3 = 0,
        nt4 = 0,
        nt5 = 0,
        nt6 = 0,
        nt7 = 0,
        nt8 = 0;

    if (act90_9 == num1) {
        nt1 = 1;
        $('#act90_9').css("background", "#00e600");

    } else {
        $('#act90_9').css("background", "#ff6666");

    }

    if (act90_10 == num2) {
        nt2 = 1;
        $('#act90_10').css("background", "#00e600");

    } else {
        $('#act90_10').css("background", "#ff6666");

    }
    if (act90_11 == num3) {
        nt3 = 1;
        $('#act90_11').css("background", "#00e600");

    } else {
        $('#act90_11').css("background", "#ff6666");

    }
    if (act90_12 == num4) {
        nt4 = 1;
        $('#act90_12').css("background", "#00e600");

    } else {
        $('#act90_12').css("background", "#ff6666");

    }


    var subtotal = parseFloat(nt1) + parseFloat(nt2) + parseFloat(nt3) + parseFloat(nt4);
    var total = (subtotal * 2.5) / 4;
    //$('#nota2').val(parseFloat(total).toFixed(2));
    $('#nota2').val(total.toFixed(2));

}


var act3 = [];
for (var i = 0; i < 10; i++) {
    act3[i] = Math.floor((Math.random() * 900) + 100);

}

$('#a1').html(act3[0])
$('#a2').html(act3[1])
$('#a3').html(act3[2])

$('#b1').html(act3[3])
$('#b2').html(act3[4])
$('#b3').html(act3[5])


$('#c1').html(act3[6])
$('#c2').html(act3[7])
$('#c3').html(act3[8])

function actividad90_3() {
    var num1 = parseInt(act3[0]) * 10;
    var num2 = parseInt(act3[1]) * 10;
    var num3 = parseInt(act3[2]) * 10;

    var num4 = parseInt(act3[3]) * 100;
    var num5 = parseInt(act3[4]) * 100;
    var num6 = parseInt(act3[5]) * 100;

    var num7 = parseInt(act3[6]) * 1000;
    var num8 = parseInt(act3[7]) * 1000;
    var num9 = parseInt(act3[8]) * 1000;

    var act3_1 = document.getElementById('act3_1').value;
    var act3_2 = document.getElementById('act3_2').value;
    var act3_3 = document.getElementById('act3_3').value;
    var act3_4 = document.getElementById('act3_4').value;

    var act3_5 = document.getElementById('act3_5').value;
    var act3_6 = document.getElementById('act3_6').value;
    var act3_7 = document.getElementById('act3_7').value;
    var act3_8 = document.getElementById('act3_8').value;
    var act3_9 = document.getElementById('act3_9').value;

    var nt1 = 0,
        nt2 = 0,
        nt3 = 0,
        nt4 = 0,
        nt5 = 0,
        nt6 = 0,
        nt7 = 0,
        nt8 = 0,
        nt9 = 0;

    if (act3_1 == num1) {
        nt1 = 1;
        $('#act3_1').css("background", "#00e600");

    } else {
        $('#act3_1').css("background", "#ff6666");

    }

    if (act3_2 == num2) {
        nt2 = 1;
        $('#act3_2').css("background", "#00e600");

    } else {
        $('#act3_2').css("background", "#ff6666");

    }
    if (act3_3 == num3) {
        nt3 = 1;
        $('#act3_3').css("background", "#00e600");

    } else {
        $('#act3_3').css("background", "#ff6666");

    }
    if (act3_4 == num4) {
        nt4 = 1;
        $('#act3_4').css("background", "#00e600");

    } else {
        $('#act3_4').css("background", "#ff6666");

    }

    if (act3_5 == num5) {
        nt5 = 1;
        $('#act3_5').css("background", "#00e600");

    } else {
        $('#act3_5').css("background", "#ff6666");

    }

    if (act3_6 == num6) {
        nt6 = 1;
        $('#act3_6').css("background", "#00e600");

    } else {
        $('#act3_6').css("background", "#ff6666");

    }
    if (act3_7 == num7) {
        nt7 = 1;
        $('#act3_7').css("background", "#00e600");

    } else {
        $('#act3_7').css("background", "#ff6666");

    }
    if (act3_8 == num8) {
        nt8 = 1;
        $('#act3_8').css("background", "#00e600");

    } else {
        $('#act3_8').css("background", "#ff6666");

    }

    if (act3_9 == num9) {
        nt9 = 1;
        $('#act3_9').css("background", "#00e600");

    } else {
        $('#act3_9').css("background", "#ff6666");

    }


    var subtotal = parseFloat(nt1) + parseFloat(nt2) + parseFloat(nt3) + parseFloat(nt4) + parseFloat(nt5) + parseFloat(nt6) + parseFloat(nt7) + parseFloat(nt8) + parseFloat(nt9);
    var total = (subtotal * 2.5) / 9;
    //$('#nota2').val(parseFloat(total).toFixed(2));
    $('#nota3').val(total.toFixed(2));
}


function actividad90_4() {
    var act4_1 = document.getElementById('act4_1').value;
    var act4_2 = document.getElementById('act4_2').value;
    var act4_3 = document.getElementById('act4_3').value;
    var nt1 = 0,
        nt2 = 0,
        nt3 = 0;

    if (act4_1 == "5") {
        nt1 = 1;
        $('#act4_1').css("background", "#00e600");

    } else {
        $('#act4_1').css("background", "#ff6666");
    }

    if (act4_2 == "9") {
        nt2 = 1;
        $('#act4_2').css("background", "#00e600");

    } else {
        $('#act4_2').css("background", "#ff6666");
    }

    if (act4_3 == "19") {
        nt3 = 1;
        $('#act4_3').css("background", "#00e600");

    } else {
        $('#act4_3').css("background", "#ff6666");
    }
    var subtotal = parseFloat(nt1) + parseFloat(nt2) + parseFloat(nt3);
    var total = (subtotal * 2.5) / 3;
    //$('#nota2').val(parseFloat(total).toFixed(2));
    $('#nota4').val(total.toFixed(2));


}

function actividad90() {

    actividad90_1();
    actividad90_2();
    actividad90_3();
    actividad90_4();
    var nota1 = document.getElementById('nota1').value;
    var nota2 = document.getElementById('nota2').value;
    var nota3 = document.getElementById('nota3').value;
    var nota4 = document.getElementById('nota4').value;
    var total = parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4);
    $('#txtNota').html(total.toFixed(2));
    document.getElementById('bt_comprobar').disabled = true;
    $('input').attr("disabled", true);
    $('#txtAlumno').attr("disabled", false);
}
