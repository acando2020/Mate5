function sinEspacios(inputs) {
    $(inputs).on('keypress', function(e) {
        if (e.which == 32)
            return false;
    });
}
sinEspacios(".sinEspacios");



var act2 = [];
for (var i = 0; i < 28; i++) {
    act2[i] = Math.floor((Math.random() * 9) + 1);

}
for (var i = 1; i < 26; i++) {
    $('#num' + [i] + '').val(act2[i]);


}

///////////////////////tabla 1//////////////////////////////////////
var multiplicando = [act2[1], act2[2], act2[3]]
var multi = parseInt(multiplicando.join(''));
var multiplicador = [act2[4], act2[5]]
var multipli = parseInt(multiplicador.join(''));
var producto1_1 = multi * parseInt(act2[5]);
var producto1_2 = multi * parseInt(act2[4]);
var total1 = parseInt(multi) * parseInt(multipli);
///////////////////////tabla 2//////////////////////////////////////
var multiplicando2 = [act2[6], act2[7], act2[8], act2[9]]
var multi2 = parseInt(multiplicando2.join(''));
var multiplicador2 = [act2[10], act2[11]]
var multipli2 = parseInt(multiplicador2.join(''));
var producto2_1 = multi2 * parseInt(act2[11]);
var producto2_2 = multi2 * parseInt(act2[10]);
var total2 = parseInt(multi2) * parseInt(multipli2);
///////////////////////tabla 3//////////////////////////////////////
var multiplicando3 = [act2[12], act2[13], act2[14], act2[15]]
var multi3 = parseInt(multiplicando3.join(''));
var multiplicador3 = [act2[16], act2[17]]
var multipli3 = parseInt(multiplicador3.join(''));
var producto3_1 = multi3 * parseInt(act2[17]);
var producto3_2 = multi3 * parseInt(act2[16]);
var total3 = parseInt(multi3) * parseInt(multipli3);
///////////////////////tabla 4//////////////////////////////////////
var multiplicando4 = [act2[18], act2[19], act2[20], act2[21]]
var multi4 = parseInt(multiplicando4.join(''));
var multiplicador4 = [act2[22], act2[23]]
var multipli4 = parseInt(multiplicador4.join(''));
var producto4_1 = multi4 * parseInt(act2[23]);
var producto4_2 = multi4 * parseInt(act2[22]);
var total4 = parseInt(multi4) * parseInt(multipli4);


function actividad94_1() {
    var nt1 = 0,
        nt2 = 0,
        nt3 = 0,
        nt4 = 0,
        nt5 = 0,
        nt6 = 0,
        nt7 = 0,
        nt8 = 0,
        nt9 = 0,
        nt10 = 0,
        nt11 = 0,
        nt12 = 0;
    var arr1 = [],
        arr2 = [],
        arrRespuesta = [];

    Array.from(document.querySelectorAll('#producto1 td input')).forEach(elemento => { arr1.push(elemento.value) });
    var num1 = parseInt(arr1.join(''));
    Array.from(document.querySelectorAll('#producto2 td input')).forEach(elemento => { arr2.push(elemento.value) });
    var num2 = parseInt(arr2.join(''));
    Array.from(document.querySelectorAll('#resultado1 td input')).forEach(elemento => { arrRespuesta.push(elemento.value) });
    var Res1 = parseInt(arrRespuesta.join(''));
    if (num1 == producto1_1) {
        nt1 = 1;
        $('#producto1 input').addClass('correcto');

    } else {
        $('#producto1 input').addClass('incorrecto');

    }

    if (num2 == producto1_2) {
        nt2 = 1;
        $('#producto2 input').addClass('correcto');

    } else {
        $('#producto2 input').addClass('incorrecto');

    }

    if (Res1 == total1) {
        nt3 = 1;
        $('#resultado1 input').addClass('correcto');

    } else {
        $('#resultado1 input').addClass('incorrecto');

    }
    /////////////////////////////////////////tabla 2//////////////////////////////////
    var arr3 = [],
        arr4 = [],
        arrRespuesta2 = [];

    Array.from(document.querySelectorAll('#producto2_1 td input')).forEach(elemento => { arr3.push(elemento.value) });
    var num3 = parseInt(arr3.join(''));
    Array.from(document.querySelectorAll('#producto2_2 td input')).forEach(elemento => { arr4.push(elemento.value) });
    var num4 = parseInt(arr4.join(''));
    Array.from(document.querySelectorAll('#resultado2 td input')).forEach(elemento => { arrRespuesta2.push(elemento.value) });
    var Res2 = parseInt(arrRespuesta2.join(''));
    if (num3 == producto2_1) {
        nt4 = 1;
        $('#producto2_1 input').addClass('correcto');

    } else {
        $('#producto2_1 input').addClass('incorrecto');

    }

    if (num4 == producto2_2) {
        nt5 = 1;

        $('#producto2_2 input').addClass('correcto');

    } else {
        $('#producto2_2 input').addClass('incorrecto');

    }

    if (Res2 == total2) {
        nt6 = 1;
        $('#resultado2 input').addClass('correcto');

    } else {
        $('#resultado2 input').addClass('incorrecto');

    }

    /////////////////////////////////////////tabla 3//////////////////////////////////
    var arr5 = [],
        arr6 = [],
        arrRespuesta3 = [];

    Array.from(document.querySelectorAll('#producto3_1 td input')).forEach(elemento => { arr5.push(elemento.value) });
    var num5 = parseInt(arr5.join(''));
    Array.from(document.querySelectorAll('#producto3_2 td input')).forEach(elemento => { arr6.push(elemento.value) });
    var num6 = parseInt(arr6.join(''));
    Array.from(document.querySelectorAll('#resultado3 td input')).forEach(elemento => { arrRespuesta3.push(elemento.value) });
    var Res3 = parseInt(arrRespuesta3.join(''));
    if (num5 == producto3_1) {
        nt7 = 1;
        $('#producto3_1 input').addClass('correcto');

    } else {
        $('#producto3_1 input').addClass('incorrecto');

    }

    if (num6 == producto3_2) {
        nt8 = 1;
        $('#producto3_2 input').addClass('correcto');

    } else {
        $('#producto3_2 input').addClass('incorrecto');

    }

    if (Res3 == total3) {
        nt9 = 1;
        $('#resultado3 input').addClass('correcto');

    } else {
        $('#resultado3 input').addClass('incorrecto');

    }

    /////////////////////////////////////////tabla 4//////////////////////////////////
    var arr7 = [],
        arr8 = [],
        arrRespuesta4 = [];

    Array.from(document.querySelectorAll('#producto4_1 td input')).forEach(elemento => { arr7.push(elemento.value) });
    var num7 = parseInt(arr7.join(''));
    Array.from(document.querySelectorAll('#producto4_2 td input')).forEach(elemento => { arr8.push(elemento.value) });
    var num8 = parseInt(arr8.join(''));
    Array.from(document.querySelectorAll('#resultado4 td input')).forEach(elemento => { arrRespuesta4.push(elemento.value) });
    var Res4 = parseInt(arrRespuesta4.join(''));
    if (num7 == producto4_1) {
        nt10 = 1;
        $('#producto4_1 input').addClass('correcto');

    } else {
        $('#producto4_1 input').addClass('incorrecto');

    }

    if (num8 == producto4_2) {
        nt11 = 1;
        $('#producto4_2 input').addClass('correcto');

    } else {
        $('#producto4_2 input').addClass('incorrecto');

    }

    if (Res4 == total4) {
        nt12 = 1;
        $('#resultado4 input').addClass('correcto');

    } else {
        $('#resultado4 input').addClass('incorrecto');

    }
    var subtotal = parseInt(nt1) + parseInt(nt2) + parseInt(nt3) + parseInt(nt4) + parseInt(nt5) + parseInt(nt6) + parseInt(nt7) + parseInt(nt8) + parseInt(nt9) + parseInt(nt10) + parseInt(nt11) + parseInt(nt12);
    var total = (subtotal * 2) / 12;
    $('#nota1').val(parseFloat(total).toFixed(2));

}
///////////////////////////////////////////////Pregunta 2/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

act3 = [];
for (var i = 0; i < 20; i++) {
    act3[i] = Math.floor((Math.random() * 150) + 20);
}
$('#num1_1').html('' + act3[0] + ' y ' + act3[1] + '');
$('#num1_2').html('' + act3[0] + ' × ' + act3[1] + '');
var mult1 = parseInt(act3[0]) * parseInt(act3[1]);
/////////////////////////////////////////////////
var num2_1 = [act3[2], 'y', act3[3]];
var stringnum2 = String(num2_1.join(''));
$('#num2_2').html('' + act3[2] + ' × ' + act3[3] + '');
var mult2 = parseInt(act3[2]) * parseInt(act3[3]);
$('#num2_3').html(mult2);

/////////////////////////////////////////////////

$('#num3_1').html('' + act3[4] + ' y ' + act3[5] + '');
var num3_2 = [act3[4], 'x', act3[5]];
var stringnum3 = String(num3_2.join(''));
var mult3 = parseInt(act3[4]) * parseInt(act3[5]);


/////////////////////////////////////////////////
var num4_1 = [act3[6], 'y', act3[7]];
var stringnum4 = String(num4_1.join(''));
$('#num4_2').html('' + act3[6] + ' × ' + act3[7] + '');
var mult4 = parseInt(act3[6]) * parseInt(act3[7]);
/////////////////////////////////////////////////
var num5_1 = [act3[8], 'y', act3[9]];
var stringnum5 = String(num5_1.join(''));
$('#num5_2').html('' + act3[8] + ' × ' + act3[9] + '');
var mult5 = parseInt(act3[8]) * parseInt(act3[9]);
$('#num5_3').html(mult5);

function actividad94_2() {
    var num1_3 = document.getElementById('num1_3').value.toLowerCase();
    var num2_1 = document.getElementById('num2_1').value.toLowerCase();
    var num3_2 = document.getElementById('num3_2').value.toLowerCase();
    var num3_3 = document.getElementById('num3_3').value.toLowerCase();
    var num4_1 = document.getElementById('num4_1').value.toLowerCase();
    var num4_3 = document.getElementById('num4_3').value.toLowerCase();
    var num5_1 = document.getElementById('num5_1').value.toLowerCase();
    var nt1 = 0,
        nt2 = 0,
        nt3 = 0,
        nt4 = 0,
        nt5 = 0,
        nt6 = 0,
        nt7 = 0,
        nt8 = 0,
        nt9 = 0,
        nt10 = 0,
        nt11 = 0,
        nt12 = 0;

    if (num1_3 == mult1) {
        nt1 = 1;
        $('#num1_3').addClass('correcto');

    } else {
        $('#num1_3').addClass('incorrecto');

    }

    if (num2_1 == stringnum2) {
        nt2 = 1;
        $('#num2_1').addClass('correcto');

    } else {
        $('#num2_1').addClass('incorrecto');

    }

    if (num3_2 == stringnum3) {
        nt3 = 1;
        $('#num3_2').addClass('correcto');

    } else {
        $('#num3_2').addClass('incorrecto');

    }

    if (num3_3 == mult3) {
        nt4 = 1;
        $('#num3_3').addClass('correcto');

    } else {
        $('#num3_3').addClass('incorrecto');

    }

    if (num4_1 == stringnum4) {
        nt5 = 1;
        $('#num4_1').addClass('correcto');

    } else {
        $('#num4_1').addClass('incorrecto');

    }

    if (num4_3 == mult4) {
        nt6 = 1;
        $('#num4_3').addClass('correcto');

    } else {
        $('#num4_3').addClass('incorrecto');

    }
    if (num5_1 == stringnum5) {
        nt7 = 1;
        $('#num5_1').addClass('correcto');

    } else {
        $('#num5_1').addClass('incorrecto');

    }
    var subtotal = parseInt(nt1) + parseInt(nt2) + parseInt(nt3) + parseInt(nt4) + parseInt(nt5) + parseInt(nt6) + parseInt(nt7);
    var total = (subtotal * 2) / 7;
    $('#nota2').val(parseFloat(total).toFixed(2));
}
///////////////////////////////////////////////Pregunta 3/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
act4 = [];
for (var i = 0; i < 4; i++) {
    act4[i] = Math.floor((Math.random() * 40) + 2);
}
$('#valor1').html(act4[0]);
$('#valor2').html(act4[1]);
$('#valor3').html(act4[2]);
$('#valor4').html(act4[3]);
var act4_1 = parseInt(act4[0]) * 12;
var act4_2 = parseInt(act4[0]) * 20;
var act4_3 = parseInt(act4[0]) * 41;
var act4_4 = parseInt(act4[0]) * 67;
var act4_5 = parseInt(act4[0]) * 125;
/////////////////////////////////////
var act4_6 = parseInt(act4[1]) * 12;
var act4_7 = parseInt(act4[1]) * 20;
var act4_8 = parseInt(act4[1]) * 41;
var act4_9 = parseInt(act4[1]) * 67;
var act4_10 = parseInt(act4[1]) * 125;

/////////////////////////////////////
var act4_11 = parseInt(act4[2]) * 12;
var act4_12 = parseInt(act4[2]) * 20;
var act4_13 = parseInt(act4[2]) * 41;
var act4_14 = parseInt(act4[2]) * 67;
var act4_15 = parseInt(act4[2]) * 125;
/////////////////////////////////////
var act4_16 = parseInt(act4[3]) * 12;
var act4_17 = parseInt(act4[3]) * 20;
var act4_18 = parseInt(act4[3]) * 41;
var act4_19 = parseInt(act4[3]) * 67;
var act4_20 = parseInt(act4[3]) * 125;
$('#valores0').val(act4_1);
var vl = [act4_1, act4_2, act4_3, act4_4, act4_5, act4_6, act4_7, act4_8, act4_9, act4_10, act4_11, act4_12, act4_13, act4_14, act4_15, act4_16, act4_17, act4_18, act4_19, act4_20];

function actividad94_3() {
    var cont = 0;
    for (var i = 0; i < 20; i++) {
        var valores = $('#valores' + [i] + '').val();

        if (valores == vl[i]) {
            $('#valores' + [i] + '').addClass('correcto');
            cont = cont + 1;
        } else {
            $('#valores' + [i] + '').addClass('incorrecto');
        }
    }
    var total = (cont * 2) / 19;
    $('#nota3').val(parseFloat(total).toFixed(2));
}

document.getElementById('nota4').addEventListener('keypress', () => {
    validNumero(0, 2, 1);
});
document.getElementById('nota4').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota4'), 2)
});

function actividad94_5() {
    var act5_1 = document.getElementById('act5_1').value;
    var act5_2 = document.getElementById('act5_2').value;
    var act5_3 = document.getElementById('act5_3').value;
    var act5_4 = document.getElementById('act5_4').value;
    var nt1 = 0,
        nt2 = 0,
        nt3 = 0,
        nt4 = 0;
    if (act5_1 == "832") {
        nt1 = 0.5;
        $('#act5_1').addClass('correcto');

    } else {
        $('#act5_1').addClass('incorrecto');

    }

    if (act5_2 == "1170") {
        nt2 = 0.5;
        $('#act5_2').addClass('correcto');

    } else {
        $('#act5_2').addClass('incorrecto');

    }
    if (act5_3 == "2000") {
        nt3 = 0.5;
        $('#act5_3').addClass('correcto');

    } else {
        $('#act5_3').addClass('incorrecto');

    }
    if (act5_4 == "4100") {
        nt4 = 0.5;
        $('#act5_4').addClass('correcto');

    } else {
        $('#act5_4').addClass('incorrecto');

    }
    var total = parseFloat(nt1) + parseFloat(nt2) + parseFloat(nt3) + parseFloat(nt4);
    $('#nota5').val(parseFloat(total).toFixed(2));
}


function actividad94() {


    var nota1 = document.getElementById('nota1').value;
    var nota2 = document.getElementById('nota2').value;
    var nota3 = document.getElementById('nota3').value;
    var nota4 = document.getElementById('nota4').value;
    var nota5 = document.getElementById('nota5').value;
    if (nota4 == "") {
        alert("Ingresar nota de la prergunta 4");
    } else {
        actividad94_1();
        actividad94_2();
        actividad94_3();
        actividad94_5();
        var nota1 = document.getElementById('nota1').value;
        var nota2 = document.getElementById('nota2').value;
        var nota3 = document.getElementById('nota3').value;
        var nota4 = document.getElementById('nota4').value;
        var nota5 = document.getElementById('nota5').value;
        var total = parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4) + parseFloat(nota5);
        $('#txtNota').html(total.toFixed(2));
        document.getElementById('bt_comprobar').disabled = true;
        $('input').attr("disabled", true);
        $('#txtAlumno').attr("disabled", false);
    }

}
