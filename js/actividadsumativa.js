/////////////////////////pregunta1//////////////////////////////////////


function pregunta1() {
    var respact2 = ['2', '2', '2', '2', '2', '4', '8', '16', '32', '32', '25', '25', '25', '180', '155', '130', '105', '105', ];
    var cont = 0;
    for (var i = 0; i < 18; i++) {
        var res = $('#act1num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act1num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act1num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 2) / 18;
    $('#nota1').val(parseFloat(total).toFixed(2));

}

/////////////////////////pregunta2//////////////////////////////////////

function pregunta2() {
    var respact2 = ['24', '2', '12', '2', '6', '2', '3', '3', '12', '6', '3', '3', ];
    var cont = 0;
    for (var i = 0; i < 12; i++) {
        var res = $('#act2num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act2num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act2num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 12;
    $('#nota2').val(parseFloat(total).toFixed(2));
    /*$('#txtNota').html(total.toFixed(2));
     document.getElementById('bt_comprobar').disabled = true;
     $('input').attr("disabled", true);
     $('#txtAlumno').attr("disabled", false);*/
}


////////////pregunta3/////////////////////////////////////


function pregunta3() {
    var respact2 = ['210', '2', '105', '3', '35', '5', '7', '210', '210', ];
    var cont = 0;
    for (var i = 0; i < 9; i++) {
        var res = $('#act3num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act3num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act3num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 9;
    $('#nota3').val(parseFloat(total).toFixed(2));
    /*$('#txtNota').html(total.toFixed(2));
     document.getElementById('bt_comprobar').disabled = true;
     $('input').attr("disabled", true);
     $('#txtAlumno').attr("disabled", false);*/
}


//////////////////pregunta4/////////////////////////

function pregunta4() {
    var respact2 = ['24', '8', '12', '2', '4', '6', '2', '2', '3', '2', '1', '3', '3', '1', ];
    var cont = 0;
    for (var i = 0; i < 14; i++) {
        var res = $('#act4num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act4num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act4num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 14;
    $('#nota4').val(parseFloat(total).toFixed(2));

}
///////////////////////pregunta5/////////////////////////////////////////////////////////////////
var num1 = Math.floor((Math.random() * 20) + 10);
var num2 = Math.floor((Math.random() * 40) + 20);
var num3 = Math.floor((Math.random() * 20) + 10);
var num4 = Math.floor((Math.random() * 40) + 20);
$('#num1').html(num1);
$('#num2').html(num2);
$('#nume1').html(num1);
$('#nume2').html(num2);
//////////////////////////////////////
$('#num3').html(num3);
$('#num4').html(num4);
var mxcd = [];

function mcd() {
    var mcd = 0;
    var a = Math.max(num1, num2);
    var b = Math.min(num1, num2);
    do {
        mcd = b;
        b = a % b;
        a = mcd;
        mxcd.push(mcd);
        mxcd.sort((a, b) => a - b);
    } while (b != 0) {
        return mcd;
    }
}


var mncm = [];

function mcm() {
    var mcm = 0;
    var a = Math.max(num1, num2);
    var b = Math.min(num1, num2);
    mcm = (a / mcd(a, b)) * b;
    mncm.push(mcm);
}

function pregunta5() {
    var respact2 = [mxcd[0], mncm[0], '', '', ];
    var cont = 0;
    for (var i = 0; i < 4; i++) {
        var res = $('#act5num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act5num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act5num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 4;
    $('#nota5').val(parseFloat(total).toFixed(2));

}



function NotaFinal() {

    /*var nota10 = document.getElementById('nota10').value;
    if ((nota8 == "") || (nota9 == "") || (nota10 == "")) {
        alert("Debe ingresar la nota de la pregunta 8, 9 o 10.")
    } else {*/
    pregunta1();
    pregunta2();
    pregunta3();
    pregunta4();
    pregunta5();
    pregunta6();
    pregunta7();
    pregunta8();
    pregunta9();
    var nota1 = document.getElementById('nota1').value;
    var nota2 = document.getElementById('nota2').value;
    var nota3 = document.getElementById('nota3').value;
    var nota4 = document.getElementById('nota4').value;
    var nota5 = document.getElementById('nota5').value;
    var nota6 = document.getElementById('nota6').value;
    var nota7 = document.getElementById('nota7').value;
    var nota8 = document.getElementById('nota8').value;
    var nota9 = document.getElementById('nota9').value;
    var total = parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4) + parseFloat(nota5) + parseFloat(nota6) + parseFloat(nota7) + parseFloat(nota8) + parseFloat(nota9);
    $('#txtNota').html(total.toFixed(2));
    document.getElementById('bt_comprobar').disabled = true;
    $('input').attr("disabled", true);
    $('#txtAlumno').attr("disabled", false);
    //}
}
