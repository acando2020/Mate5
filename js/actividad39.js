var img1 = "img/i1_p31_act39.png";

var ir = [];

function agregar(x) {

    ir.push('<img src="' + img1 + '" />')
    $('#caja4').html('').append(ir);

}
function sinEspacios(inputs) {
    $(inputs).on('keypress', function(e) {
        if (e.which == 32)
            return false;
    });
}
sinEspacios(".text-question .form-control");
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
    var nota1 = 0,
        nota2 = 0,
        nota3 = 0,
        nota4 = 0,
        nota5 = 0;

    if (num1 == interesult[1]) {
        $('#num1').css("background", "#00e600");
        nota1 = 1;
    } else {
        $('#num1').css("background", "#ff6666");
    }

    if (num2 == interesult[2]) {
        $('#num2').css("background", "#00e600");
        nota2 = 1;
    } else {
        $('#num2').css("background", "#ff6666");
    }
    if (num3 == interesult[3]) {
        $('#num3').css("background", "#00e600");
        nota3 = 1;
    } else {
        $('#num3').css("background", "#ff6666");
    }
    if (num4 == interesult[4]) {
        $('#num4').css("background", "#00e600");
        nota4 = 1;
    } else {
        $('#num4').css("background", "#ff6666");
    }

    if (patron1 == ptron) {
        $('#patron1').css("background", "#00e600");
        nota5 = 1;
    } else {
        $('#patron1').css("background", "#ff6666");
    }

    var nota39_1 = parseInt(nota1) + parseInt(nota2) + parseInt(nota3) + parseInt(nota4) + parseInt(nota5);
    $('#nota1').val(nota39_1.toFixed(2));
}

function actividad39_2() {
    var nume3 = document.getElementById('nume3').value;
    var nume6 = document.getElementById('nume6').value;
    var nume7 = document.getElementById('nume7').value;
    var patron2 = document.getElementById('patron2').value;
    var nota1 = 0,
        nota2 = 0,
        nota3 = 0,
        nota4 = 0;

    var pt = ['-', interesult2[7]]
    var ptron = pt.join('');

    if (nume3 == interesult2[2]) {
        $('#nume3').css("background", "#00e600");
        nota1 = 1;
    } else {
        $('#nume3').css("background", "#ff6666");
    }

    if (nume6 == interesult2[5]) {
        $('#nume6').css("background", "#00e600");
        nota2 = 1;
    } else {
        $('#nume6').css("background", "#ff6666");
    }
    if (nume7 == interesult2[6]) {
        $('#nume7').css("background", "#00e600");
        nota3 = 1;
    } else {
        $('#nume7').css("background", "#ff6666");
    }

    if (patron2 == ptron) {
        $('#patron2').css("background", "#00e600");
        nota4 = 1;
    } else {
        $('#patron2').css("background", "#ff6666");
    }

    var nota39_2 = parseInt(nota1) + parseInt(nota2) + parseInt(nota3) + parseInt(nota4);
    $('#nota2').val(nota39_2.toFixed(2));

}

function actividad39_3() {
    var numer6 = document.getElementById('numer6').value;
    var numer7 = document.getElementById('numer7').value;
    var sr1 = document.getElementById('sr1').value;
    var sr2 = document.getElementById('sr2').value;
    var patron3 = document.getElementById('patron3').value;
    var patron4 = document.getElementById('patron4').value;
    var nota1 = 0,
        nota2 = 0,
        nota3 = 0,
        nota4 = 0,
        nota5 = 0;


    var pt1 = ['+', suma]
    var ptron1 = pt1.join('');
    var pt2 = ['-', resta]
    var ptron2 = pt2.join('');

    if (sr1 == numer6) {
        $('#sr1').css("background", "#00e600");
        nota1 = 1;
    } else {
        $('#sr1').css("background", "#ff6666");
    }

    if (sr2 == numer7) {
        $('#sr2').css("background", "#00e600");
        nota2 = 1;
    } else {
        $('#sr2').css("background", "#ff6666");

    }
    if (patron3 == ptron1) {
        $('#patron3').css("background", "#00e600");
        nota3 = 1;
    } else {
        $('#patron3').css("background", "#ff6666");
    }

    if (patron4 == ptron2) {
        $('#patron4').css("background", "#00e600");
        nota4 = 1;
    } else {
        $('#patron4').css("background", "#ff6666");
    }


    var nota39_2 = parseInt(nota1) + parseInt(nota2) + parseInt(nota3) + parseInt(nota4);
    $('#nota3').val(nota39_2.toFixed(2));

}

function actividad39() {
    actividad39_1();
    actividad39_2();
    actividad39_3();
    actividad39_4();
    var nota1 = document.getElementById('nota1').value;
    var nota2 = document.getElementById('nota2').value;
    var nota3 = document.getElementById('nota3').value;
    var nota4 = document.getElementById('nota4').value;

    var subtotal = parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4);
    total = (subtotal * 10) / 14;
    $('#txtNota').html(total.toFixed(2));
    document.getElementById('bt_comprobar').disabled = true;
    $('input').attr("disabled", true);
    $('#txtAlumno').attr("disabled", false);
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var claseAnimada = 'animate bounceIn';
f_iniciar();

function f_iniciar() {
    sum_total = 0;
    QuitaClase(".nota", claseAnimada);
    AgregaClase(".actividad", claseAnimada);
    removerClase($(".c_destino"));

    $("#trace").hide();
    $(".c_destino").html('');
    n1 = (Math.floor(Math.random() * 90) + 10);
    $("#numero").html(n1);
    $("#numero").css('z-index', '9');
    $(".drag").draggable({
        rever: "invalid",
        helper: "clone"
    });
    $(".drop").droppable({
        drop: function(e, ui) {
            ui.helper.clone().appendTo(this);
            $.each($(this).children(), function(index, value) {
                $(this).attr("style", "");
            })
            $(this).find(".drop").draggable({ disabled: true });
            str = (ui.draggable.attr("id")); //capturamos los IDS
            str == 'b1' ? sum_total += 10 : sum_total += 1;
        }
    });
}

function actividad39_4() {
    var cajas = $('.cajas .drag').length;
    var resp = 0;
    if (ir.length == 15) {
        resp = 1;
        $('#actividad39_2').css("background", "#00e600");
    } else {

        $('#actividad39_2').css("background", "#ff6666");
    }

    $('#nota4').val(resp.toFixed(2));
}
