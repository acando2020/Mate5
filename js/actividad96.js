function sinEspacios(inputs) {
    $(inputs).on('keypress', function(e) {
        if (e.which == 32)
            return false;
    });
}
sinEspacios(".sinEspacios");

///////////////////////////solo numeros////////////////
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




var act1 = [];
var num3 = 1;
var num1 = Math.floor((Math.random() * 4) + 2);
for (var i = 0; i < 8; i++) {
    num3 = parseInt(num3) * parseInt(num1);
    act1[i] = num3;


}
$('#sucesion').html('' + act1[1] + ',  ' + act1[2] + ',  ' + act1[3] + ',  ' + act1[4] + ',  ' + act1[5] + ',  ' + act1[6] + ',  ' + act1[7] + '');
$('#num1_1').html(act1[2]);
$('#num1_2').html(act1[4]);
var act1nums = [act1[0], act1[1], act1[0], act1[5], act1[0], act1[7], act1[6], act1[0]];

function actividad96_1() {
    var cont = 0;
    for (var i = 0; i < 8; i++) {
        var num = $('#act1num' + [i] + '').val();
        if (act1nums[i] == num) {
            cont = cont + 1;
            $('#act1num' + [i] + '').addClass('correcto');
        } else {
            $('#act1num' + [i] + '').addClass('incorrecto');

        }
    }
    var total = (cont * 1) / 8;
    $('#nota1').val(parseFloat(total).toFixed(2));
}

//////////////////////////////pregunta2///////////////////////////////////////////////////////////////
document.getElementById('nota2').addEventListener('keypress', () => {
    validNumero(0, 1, 1);
});
document.getElementById('nota2').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota2'), 1)
});
//////////////////////////////pregunta3///////////////////////////////////////////////////////////////
act3_1 = [];
act3_2 = [];
for (var i = 0; i < 12; i++) {
    act3_1[i] = Math.floor((Math.random() * 800) + 10);
    act3_2[i] = Math.floor((Math.random() * 90) + 21);

}
act3_1.sort(function(a, b) { return a - b; });
act3_2.sort(function(a, b) { return a - b; });
$('#act3_1').html(' ' + act3_2[1] + ' × ' + act3_2[0] + '');
$('#act3_2').html(' ' + act3_2[3] + ' × ' + act3_2[2] + '');
$('#act3_3').html(' ' + act3_1[5] + ' × ' + act3_1[4] + '');
$('#act3_4').html(' ' + act3_1[7] + ' × ' + act3_1[6] + '');
var numtabla1 = String(act3_2[1]);
var numeros = numtabla1.split('', 2);
$('#num2').val(numeros[0]);
$('#num3').val(numeros[1]);
var numtabla2 = String(act3_2[0]);
var numeros2 = numtabla2.split('', 2);
$('#num4').val(numeros2[0]);
$('#num5').val(numeros2[1]);

function actividad96_3() {
    var resulttado1 = parseInt(act3_2[1]) * parseInt(act3_2[0]);
    var resulttado2 = parseInt(act3_2[3]) * parseInt(act3_2[2]);
    var resulttado3 = parseInt(act3_1[5]) * parseInt(act3_1[4]);
    var resulttado4 = parseInt(act3_1[7]) * parseInt(act3_1[6]);
    var arr1 = [],
        arr2 = [],
        arr3 = [],
        arr4 = [];
    var nt1 = 0,
        nt2 = 0,
        nt3 = 0,
        nt4 = 0;

    Array.from(document.querySelectorAll('#producto1 td input')).forEach(elemento => { arr1.push(elemento.value) });
    var num1 = parseInt(arr1.join(''));
    Array.from(document.querySelectorAll('#producto2 td input')).forEach(elemento => { arr2.push(elemento.value) });
    var num2 = parseInt(arr2.join(''));
    Array.from(document.querySelectorAll('#producto3 td input')).forEach(elemento => { arr3.push(elemento.value) });
    var num3 = parseInt(arr3.join(''));
    Array.from(document.querySelectorAll('#producto4 td input')).forEach(elemento => { arr4.push(elemento.value) });
    var num4 = parseInt(arr4.join(''));
    if (num1 == resulttado1) {
        nt1 = 1;
        $('#producto1 input').addClass('correcto');

    } else {
        $('#producto1 input').addClass('incorrecto');
    }
    if (num2 == resulttado2) {
        nt2 = 1;
        $('#producto2 input').addClass('correcto');

    } else {
        $('#producto2 input').addClass('incorrecto');
    }
    if (num3 == resulttado3) {
        nt3 = 1;
        $('#producto3 input').addClass('correcto');

    } else {
        $('#producto3 input').addClass('incorrecto');
    }
    if (num4 == resulttado4) {
        nt4 = 1;
        $('#producto4 input').addClass('correcto');

    } else {
        $('#producto4 input').addClass('incorrecto');
    }

    var total = parseFloat(nt1) + parseFloat(nt2) + parseFloat(nt3) + parseFloat(nt4);
    $('#nota3').val(parseFloat(total).toFixed(2));

}

//////////////////////////////pregunta4///////////////////////////////////////////////////////////////
var act4num1 = parseInt(act3_2[5]) * parseInt(act3_2[4]);
$('#act4_1').html(' ' + act3_2[5] + ' × ' + act3_2[4] + ' = ' + act4num1 + '');

$('#act4_2').html(' ' + act3_2[7] + ' × ' + act3_2[6] + ' = ');
$('#act4_3').html(' ' + act3_2[9] + ' × ' + act3_2[8] + ' = ');
$('#act4_4').html(' ' + act3_2[11] + ' × ' + act3_2[10] + ' = ');
$('#act4_5').html(' ' + act3_1[1] + ' × ' + act3_1[0] + ' = ');
$('#act4_6').html(' ' + act3_1[3] + ' × ' + act3_1[2] + ' = ');

function actividad96_4() {
    var num2 = parseInt(act3_2[7]) * parseInt(act3_2[6]);
    var num3 = parseInt(act3_2[9]) * parseInt(act3_2[8]);
    var num4 = parseInt(act3_2[11]) * parseInt(act3_2[10]);
    var num5 = parseInt(act3_1[1]) * parseInt(act3_1[0]);
    var num6 = parseInt(act3_1[3]) * parseInt(act3_1[2]);
    var cor = [num2, num3, num4, num5, num6];
    var cont = 0;
    for (var i = 0; i < 5; i++) {
        var res = $('#act4num' + [i] + '').val();
        if (cor[i] == res) {
            cont = cont + 1;
            $('#act4num' + [i] + '').addClass('correcto');
        } else {
            $('#act4num' + [i] + '').addClass('incorrecto');
        }

    }
    var total = (cont * 1) / 5;
    $('#nota4').val(total.toFixed(2));
}

//////////////////////////////pregunta5///////////////////////////////////////////////////////////////

act5 = [];
for (var i = 0; i < 12; i++) {

    act5[i] = Math.floor((Math.random() * 70) + 21);

}
act5.sort(function(a, b) { return a - b; });

$('#act5_1').html(' ' + act5[5] + ' × ' + act5[4] + '');
$('#act5_2').html(' ' + act5[7] + ' × ' + act5[6] + '');
$('#act5_3').html(' ' + act5[9] + ' × ' + act5[8] + '');
$('#act5_4').html(' ' + act5[11] + ' × ' + act5[10] + '');
$('#act5_5').html(' ' + act5[1] + ' × ' + act5[0] + '');

var num5_1 = parseInt(act5[5]) * parseInt(act5[4]);
var num5_2 = parseInt(act5[7]) * parseInt(act5[6]);
var num5_3 = parseInt(act5[9]) * parseInt(act5[8]);
var num5_4 = parseInt(act5[11]) * parseInt(act5[10]);
var num5_5 = parseInt(act5[1]) * parseInt(act5[0]);
var correctas = [num5_1, num5_1, num5_2, num5_2, num5_3, num5_3, num5_4, num5_4, num5_5, num5_5]

function actividad96_5() {

    var cont = 0;
    for (var i = 0; i < 10; i++) {
        var res = $('#act5num' + [i] + '').val();
        if (correctas[i] == res) {
            cont = cont + 1;
            $('#act5num' + [i] + '').addClass('correcto');
        } else {
            $('#act5num' + [i] + '').addClass('incorrecto');
        }

    }
    var total = (cont * 1) / 10;
    $('#nota5').val(total.toFixed(2));
}
//////////////////////////////pregunta6///////////////////////////////////////////////////////////////
act6 = [];
for (var i = 0; i < 12; i++) {

    act6[i] = Math.floor((Math.random() * 19) + 2);
}
act6.sort(function(a, b) { return a - b; });

$('#act6_1').html(' ' + act6[0] + ' × (' + act6[1] + '×' + act6[2] + ')');
$('#act6_2').html(' (' + act6[3] + ' × ' + act6[4] + ') × (' + act6[5] + ' × ' + act6[6] + ')');
$('#act6_3').html(' ' + act6[7] + ' × (' + act6[8] + ' × ' + act6[9] + ' × ' + act6[10] + ')');

var num6_1 = parseInt(act6[0]) * parseInt(act6[1]) * parseInt(act6[2]);
var num6_2 = parseInt(act6[3]) * parseInt(act6[4]) * parseInt(act6[5]) * parseInt(act6[6]);
var num6_3 = parseInt(act6[7]) * parseInt(act6[8]) * parseInt(act6[9]) * parseInt(act6[10]);
var correct = [num6_1, num6_1, num6_2, num6_2, num6_3, num6_3]

function actividad96_6() {

    var cont = 0;
    for (var i = 0; i < 6; i++) {
        var res = $('#act6num' + [i] + '').val();
        if (correct[i] == res) {
            cont = cont + 1;
            $('#act6num' + [i] + '').addClass('correcto');
        } else {
            $('#act6num' + [i] + '').addClass('incorrecto');
        }

    }
    var total = (cont * 1) / 6;

    $('#nota6').val(total.toFixed(2));
}
//////////////////////////////pregunta7///////////////////////////////////////////////////////////////
act7 = [];
for (var i = 0; i < 12; i++) {

    act7[i] = Math.floor((Math.random() * 800) + 200);
}
act7.sort(function(a, b) { return a - b; });

$('#act7_1').html(' ' + act7[0] + ' × 10 =  ');
$('#act7_2').html(' ' + act7[0] + ' × 100 = ');
$('#act7_3').html(' ' + act7[0] + ' × 1000 =');
$('#act7_4').html(' ' + act7[1] + ' × 10 =  ');
$('#act7_5').html(' ' + act7[2] + ' × 100 = ');
$('#act7_6').html(' ' + act7[3] + ' × 1000 =');
$('#act7_7').html(' ' + act7[4] + ' × 0 =  ');
$('#act7_8').html(' ' + act7[5] + ' × 10 = ');
$('#act7_9').html(' ' + act7[6] + ' × 100 =');

var num7_1 = parseInt(act7[0]) * 10;
var num7_2 = parseInt(act7[0]) * 100;
var num7_3 = parseInt(act7[0]) * 1000;
var num7_4 = parseInt(act7[1]) * 10;
var num7_5 = parseInt(act7[2]) * 100;
var num7_6 = parseInt(act7[3]) * 1000;
var num7_7 = parseInt(act7[4]) * 0;
var num7_8 = parseInt(act7[5]) * 10;
var num7_9 = parseInt(act7[6]) * 100;
var correc = [num7_1, num7_2, num7_3, num7_4, num7_5, num7_6, num7_7, num7_8, num7_9]

function actividad96_7() {

    var cont = 0;
    for (var i = 0; i < 9; i++) {
        var res = $('#act7num' + [i] + '').val();
        if (correc[i] == res) {
            cont = cont + 1;
            $('#act7num' + [i] + '').addClass('correcto');
        } else {
            $('#act7num' + [i] + '').addClass('incorrecto');
        }

    }
    var total = (cont * 1) / 9;

    $('#nota7').val(total.toFixed(2));
}

function actividad96() {


    var nota1 = document.getElementById('nota1').value;
    var nota2 = document.getElementById('nota2').value;
    var nota3 = document.getElementById('nota3').value;
    var nota4 = document.getElementById('nota4').value;
    var nota5 = document.getElementById('nota5').value;
    var nota6 = document.getElementById('nota6').value;
    var nota7 = document.getElementById('nota7').value;
    if (nota2 == "") {
        alert("Ingresar nota de la prergunta 2");
    } else {
        actividad96_1();
        actividad96_3();
        actividad96_4();
        actividad96_5();
        actividad96_6();
        actividad96_7();
        var nota1 = document.getElementById('nota1').value;
        var nota2 = document.getElementById('nota2').value;
        var nota3 = document.getElementById('nota3').value;
        var nota4 = document.getElementById('nota4').value;
        var nota5 = document.getElementById('nota5').value;
        var nota6 = document.getElementById('nota6').value;
        var nota7 = document.getElementById('nota7').value;
        var total = parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4) + parseFloat(nota5) + parseFloat(nota6) + parseFloat(nota7);
        $('#txtNota').html(total.toFixed(2));
        document.getElementById('bt_comprobar').disabled = true;
        $('input').attr("disabled", true);
        $('#txtAlumno').attr("disabled", false);
    }

}
