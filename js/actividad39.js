var interesult = [],
    numeroInt = 0,
    interesult2 = [],
    numeroInt2 = 0,
    numeroInt3 = 0;

var IntNum = Math.floor(Math.random() * 50) + 1;
var h = 1;
for (var h = 0; h <= 8; h++) {

    numeroInt = parseInt(numeroInt) + parseInt(IntNum);
    interesult[h] = numeroInt;

}

document.getElementById('num5').value = interesult[5];
document.getElementById('num6').value = interesult[6];
document.getElementById('num7').value = interesult[7];
////////////////////////////////////////////////////////////////////
var IntNum2 = Math.round(Math.random() * (99 - 1) + 1);
for (var j = 0; j <= 7; j++) {
    numeroInt2 = parseInt(numeroInt2) + parseInt(IntNum2);
    interesult2[j] = numeroInt2;
}
interesult2.sort(function(a, b) { return b - a; });
document.getElementById('nume1').value = interesult2[0];
document.getElementById('nume2').value = interesult2[1];
document.getElementById('nume4').value = interesult2[3];
document.getElementById('nume5').value = interesult2[4];
////////////////////////////////////////////////////////////////////

var interesult3 = [];
var IntNum3 = Math.floor(Math.random() * 50) + 1;
for (var v = 0; v <= 6; v++) {
    numeroInt3 = parseInt(numeroInt3) + parseInt(IntNum3);
    interesult3[v] = numeroInt3;
}
interesult3.sort(function(a, b) { return b - a; });

document.getElementById('numer1').value = interesult3[0];
var suma = Math.floor(Math.random() * 10) + 1;



document.getElementById('numer2').value = parseInt(interesult3[0]) + parseInt(suma);

var resta = Math.floor(Math.random() * 10) + 1;

var numero2 = document.getElementById('numer2').value;

document.getElementById('numer3').value = parseInt(numero2) - parseInt(resta);

var numero3 = document.getElementById('numer3').value;

document.getElementById('numer4').value = parseInt(numero3) + parseInt(suma);


var numero4 = document.getElementById('numer4').value;

document.getElementById('numer5').value = parseInt(numero4) - parseInt(resta);

var numero5 = document.getElementById('numer5').value;

document.getElementById('numer6').value = parseInt(numero5) + parseInt(suma);

var numero6 = document.getElementById('numer6').value;

document.getElementById('numer7').value = parseInt(numero6) - parseInt(resta);



function actividad39_1() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var num3 = document.getElementById('num3').value;
    var num4 = document.getElementById('num4').value;
    var patron1 = document.getElementById('patron1').value;
    var pt = ['+', interesult[0]]
    var ptron = pt.join('');

    if (num1 == interesult[1]) {
        $('#num1').css("background", "#00e600");
    } else {
        $('#num1').css("background", "#ff6666");
    }

    if (num2 == interesult[2]) {
        $('#num2').css("background", "#00e600");
    } else {
        $('#num2').css("background", "#ff6666");
    }
    if (num3 == interesult[3]) {
        $('#num3').css("background", "#00e600");
    } else {
        $('#num3').css("background", "#ff6666");
    }
    if (num4 == interesult[4]) {
        $('#num4').css("background", "#00e600");
    } else {
        $('#num4').css("background", "#ff6666");
    }
    if (num4 == interesult[4]) {
        $('#num4').css("background", "#00e600");
    } else {
        $('#num4').css("background", "#ff6666");
    }
    if (patron1 == ptron) {
        $('#patron1').css("background", "#00e600");
    } else {
        $('#patron1').css("background", "#ff6666");
    }
}

function actividad39_2() {
    var nume3 = document.getElementById('nume3').value;
    var nume6 = document.getElementById('nume6').value;
    var nume7 = document.getElementById('nume7').value;
    if (nume3 == interesult2[2]) {
        $('#nume3').css("background", "#00e600");
    } else {
        $('#nume3').css("background", "#ff6666");
    }

    if (nume6 == interesult2[5]) {
        $('#nume6').css("background", "#00e600");
    } else {
        $('#nume6').css("background", "#ff6666");
    }
    if (nume7 == interesult2[6]) {
        $('#nume7').css("background", "#00e600");
    } else {
        $('#nume7').css("background", "#ff6666");
    }

}

function actividad39_3() {
    var numer6 = document.getElementById('numer6').value;
    var numer7 = document.getElementById('numer7').value;
    var sr1 = document.getElementById('sr1').value;
    var sr2 = document.getElementById('sr2').value;

    if (sr1 == numer6) {
        $('#sr1').css("background", "#00e600");
    } else {
        $('#sr1').css("background", "#ff6666");
    }

    if (sr2 == numer7) {
        $('#sr2').css("background", "#00e600");
    } else {
        $('#sr2').css("background", "#ff6666");
    }


}
