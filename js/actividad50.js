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

/*document.getElementById('num5').value = interesult[5];
document.getElementById('num6').value = interesult[6];
document.getElementById('num7').value = interesult[7];*/
////////////////////////////////////////////////////////////////////
var IntNum2 = Math.round(Math.random() * (99 - 1) + 1);
for (var j = 0; j <= 7; j++) {
    numeroInt2 = parseInt(numeroInt2) + parseInt(IntNum2);
    interesult2[j] = numeroInt2;
}
interesult2.sort(function(a, b) { return b - a; });
/*document.getElementById('nume1').value = interesult2[0];
document.getElementById('nume2').value = interesult2[1];
document.getElementById('nume4').value = interesult2[3];
document.getElementById('nume5').value = interesult2[4];*/
////////////////////////////////////////////////////////////////////

var interesult3 = [];
var IntNum3 = Math.floor(Math.random() * 900) + 50;
for (var v = 0; v <= 6; v++) {
    numeroInt3 = parseInt(numeroInt3) + parseInt(IntNum3);
    interesult3[v] = numeroInt3;
}
interesult3.sort(function(a, b) { return b - a; });

document.getElementById('numer1').value = interesult3[0];
var suma = Math.floor(Math.random() * 100) + 1;



document.getElementById('numer2').value = parseInt(interesult3[0]) + parseInt(suma);

var resta = Math.floor(Math.random() * 100) + 1;

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

var numero7 = document.getElementById('numer7').value;

document.getElementById('numer8').value = parseInt(numero7) - parseInt(suma);



var pt1 = ['+', suma]
var ptron1 = pt1.join('');
var pt2 = ['-', resta]
var ptron2 = pt2.join('');


function actividad50() {

    var numer7 = document.getElementById('numer7').value;
    var numero7 = document.getElementById('numero7').value;
    var numer8 = document.getElementById('numer8').value;
    var numero8 = document.getElementById('numero8').value;
    var ptr1 = document.getElementById('ptr1').value;
    var ptr2 = document.getElementById('ptr2').value;
    var ptr3 = document.getElementById('ptr3').value;
    var ptr4 = document.getElementById('ptr4').value;
    var ptr5 = document.getElementById('ptr5').value;
    var ptr6 = document.getElementById('ptr6').value;
    var ptr7 = document.getElementById('ptr7').value;
    var nota1 = 0,
        nota2 = 0,
        nota3 = 0,
        nota4 = 0,
        nota5 = 0,
        nota6 = 0,
        nota7 = 0,
        nota8 = 0,
        nota9 = 0,
        nota10 = 0;

    if (ptron1 == ptr1) {
        $('#ptr1').css("background", "#00e600");
        nota1 = 1;

    } else {
        $('#ptr1').css("background", "#ff6666");


    }
    if (ptron2 == ptr2) {
        $('#ptr2').css("background", "#00e600");
        nota2 = 1;

    } else {
        $('#ptr2').css("background", "#ff6666");


    }
    if (ptron1 == ptr3) {
        $('#ptr3').css("background", "#00e600");
        nota3 = 1;

    } else {
        $('#ptr3').css("background", "#ff6666");


    }

    if (ptron2 == ptr4) {
        $('#ptr4').css("background", "#00e600");
        nota4 = 1;

    } else {
        $('#ptr4').css("background", "#ff6666");


    }

    if (ptron1 == ptr5) {
        $('#ptr5').css("background", "#00e600");
        nota5 = 1;

    } else {
        $('#ptr5').css("background", "#ff6666");


    }

    if (ptron2 == ptr6) {
        $('#ptr6').css("background", "#00e600");
        nota6 = 1;

    } else {
        $('#ptr6').css("background", "#ff6666");


    }

    if (ptron1 == ptr7) {
        $('#ptr7').css("background", "#00e600");
        nota7 = 1;

    } else {
        $('#ptr7').css("background", "#ff6666");


    }




    if (numer7 == numero7) {
        $('#numero7').css("background", "#00e600");
        nota8 = 1;

    } else {
        $('#numero7').css("background", "#ff6666");


    }
    if (numer8 == numero8) {
        $('#numero8').css("background", "#00e600");
        nota9 = 1;
    } else {
        $('#numero8').css("background", "#ff6666");


    }


    var subtotal = parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4) + parseFloat(nota5) + parseFloat(nota6) + parseFloat(nota7) + parseFloat(nota8) + parseFloat(nota9) + parseFloat(nota10);
    total = (subtotal * 10) / 9;
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
