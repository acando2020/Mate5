document.getElementById('nota7').addEventListener('keypress', () => {
    validNumero(0, 1, 1);
});
document.getElementById('nota7').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota7'), 1)
});
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
//////////////pregunta2////////////////////////////////////

var act2 = [];
var multiplo2 = 1;
var num2 = Math.floor((Math.random() * 5) + 2);
for (var i = 0; i < 8; i++) {

    multiplo2 = parseInt(multiplo2) * parseInt(num2);
    act2[i] = parseInt(multiplo2);
}
$('#act2_1').html('' + act2[1] + ', ');
$('#act2_2').html('' + act2[2] + ', ');
$('#act2_3').html('' + act2[3] + ', ');
$('#act2_7').html('' + act2[7] + ' ');
$('#act2_8').html('' + act2[3] + ' × ');
$('#act2_9').html('' + act2[2] + ' ÷ ');

function pregunta2() {
    var respact2 = [act2[4], act2[5], act2[6], act2[0], ];
    var cont = 0;
    for (var i = 0; i < 4; i++) {
        var res = $('#act2num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act2num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act2num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 4;
    $('#nota2').val(parseFloat(total).toFixed(2));


}
///////////////////pregunta3/////////////////////////////////

function validarN(inputs) {

    $(inputs).on('keypress', function(e) {
        tecla = document.all ? e.keyCode : e.which;
        if (tecla == 8) return true;
        patron = /[,qwertyuiopñlkvjhfgdsazcxbnmQWERTYFVUIOPÑLKJHGDSAZCBNM<>.;-_""]/;
        te = String.fromCharCode(tecla);
        if (patron.test(te)) {
            //alert("INGRESE V(VERDADERO) O F(FALSO) ");
            return false;
        }

    });
}

validarN(".inputMult");



var act3 = [];
for (var i = 0; i < 28; i++) {
    act3[i] = Math.floor((Math.random() * 9) + 1);

}
for (var i = 1; i < 26; i++) {
    $('#num' + [i] + '').val(act3[i]);


}

///////////////////////tabla 1//////////////////////////////////////
var multiplicando = [act3[1], act3[2], act3[3]]
var multi = parseInt(multiplicando.join(''));
var multiplicador = [act3[4], act3[5]]
var multipli = parseInt(multiplicador.join(''));
var producto1_1 = multi * parseInt(act3[5]);
var producto1_2 = multi * parseInt(act3[4]);
var total1 = parseInt(multi) * parseInt(multipli);
///////////////////////tabla 2//////////////////////////////////////
var multiplicando2 = [act3[6], act3[7], act3[8], act3[9]]
var multi2 = parseInt(multiplicando2.join(''));
var multiplicador2 = [act3[10], act3[11]]
var multipli2 = parseInt(multiplicador2.join(''));
var producto2_1 = multi2 * parseInt(act3[11]);
var producto2_2 = multi2 * parseInt(act3[10]);
var total2 = parseInt(multi2) * parseInt(multipli2);
///////////////////////tabla 3//////////////////////////////////////
var multiplicando3 = [act3[12], act3[13], act3[14], act3[15]]
var multi3 = parseInt(multiplicando3.join(''));
var multiplicador3 = [act3[16], act3[17]]
var multipli3 = parseInt(multiplicador3.join(''));
var producto3_1 = multi3 * parseInt(act3[17]);
var producto3_2 = multi3 * parseInt(act3[16]);
var total3 = parseInt(multi3) * parseInt(multipli3);
///////////////////////tabla 4//////////////////////////////////////
var multiplicando4 = [act3[18], act3[19], act3[20], act3[21]]
var multi4 = parseInt(multiplicando4.join(''));
var multiplicador4 = [act3[22], act3[23]]
var multipli4 = parseInt(multiplicador4.join(''));
var producto4_1 = multi4 * parseInt(act3[23]);
var producto4_2 = multi4 * parseInt(act3[22]);
var total4 = parseInt(multi4) * parseInt(multipli4);


function pregunta3() {
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
    var total = (subtotal * 1) / 12;
    $('#nota3').val(parseFloat(total).toFixed(2));

}
//////////pregunta4/////////////////////////////////////////////////

function pregunta4() {
    var respact2 = ['e', 'b', 'a', 'd', ];
    var cont = 0;
    for (var i = 0; i < 4; i++) {
        var res = $('#act4num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act4num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act4num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 4;
    $('#nota4').val(parseFloat(total).toFixed(2));


}
///////////////////pregunta5////////////////////////////
act5 = [];
for (var i = 0; i < 12; i++) {

    act5[i] = Math.floor((Math.random() * 800) + 200);
}
act5.sort(function(a, b) { return a - b; });

$('#act5_1').html(' ' + act5[0] + ' × 10 =  ');
$('#act5_2').html(' ' + act5[0] + ' × 100 = ');
$('#act5_3').html(' ' + act5[0] + ' × 1000 =');
$('#act5_4').html(' ' + act5[1] + ' × 10 =  ');
$('#act5_5').html(' ' + act5[2] + ' × 100 = ');
$('#act5_6').html(' ' + act5[3] + ' × 1000 =');
$('#act5_7').html(' ' + act5[4] + ' × 0 =  ');
$('#act5_8').html(' ' + act5[5] + ' × 10 = ');
$('#act5_9').html(' ' + act5[6] + ' × 100 =');

var num7_1 = parseInt(act5[0]) * 10;
var num7_2 = parseInt(act5[0]) * 100;
var num7_3 = parseInt(act5[0]) * 1000;
var num7_4 = parseInt(act5[1]) * 10;
var num7_5 = parseInt(act5[2]) * 100;
var num7_6 = parseInt(act5[3]) * 1000;
var num7_7 = parseInt(act5[4]) * 0;
var num7_8 = parseInt(act5[5]) * 10;
var num7_9 = parseInt(act5[6]) * 100;
var correc = [num7_1, num7_2, num7_3, num7_4, num7_5, num7_6, num7_7, num7_8, num7_9]

function pregunta5() {

    var cont = 0;
    for (var i = 0; i < 9; i++) {
        var res = $('#act5num' + [i] + '').val();
        if (correc[i] == res) {
            cont = cont + 1;
            $('#act5num' + [i] + '').addClass('correcto');
        } else {
            $('#act5num' + [i] + '').addClass('incorrecto');
        }

    }
    var total = (cont * 1) / 9;

    $('#nota5').val(total.toFixed(2));
}
/////////////////////pregunta6///////////////////////////////////////
function pregunta6() {
    var respact2 = ['lllllllllllll', '13', 'lll', '3', 'll', '2', 'll', '2', '20', ];
    var cont = 0;
    for (var i = 0; i < 9; i++) {
        var res = $('#act6num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act6num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act6num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 9;
    $('#nota6').val(parseFloat(total).toFixed(2));


}
/////////////////////////////////////////////////////////////////////////////////////////////
function NotaFinal() {


    var nota1 = document.getElementById('nota1').value;
    var nota2 = document.getElementById('nota2').value;
    var nota3 = document.getElementById('nota3').value;
    var nota4 = document.getElementById('nota4').value;
    var nota5 = document.getElementById('nota5').value;
    var nota6 = document.getElementById('nota6').value;
    var nota7 = document.getElementById('nota7').value;
    if (nota7 == "") {
        alert("Ingresar nota de la prergunta 7");
    } else {
        pregunta1();
        pregunta2();
        pregunta3();
        pregunta4();
        pregunta5();
        pregunta6();
        //actividad96_6();
        // actividad96_7();
        var nota1 = document.getElementById('nota1').value;
        var nota2 = document.getElementById('nota2').value;
        var nota3 = document.getElementById('nota3').value;
        var nota4 = document.getElementById('nota4').value;
        var nota5 = document.getElementById('nota5').value;
        var nota6 = document.getElementById('nota6').value;
        var nota7 = document.getElementById('nota7').value;
        var subtotal = parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4) + parseFloat(nota5) + parseFloat(nota6) + parseFloat(nota7);
        var total = (subtotal *10)/7;
        $('#txtNota').html(total.toFixed(2));
        document.getElementById('bt_comprobar').disabled = true;
        $('input').attr("disabled", true);
        $('#txtAlumno').attr("disabled", false);
    }

}
