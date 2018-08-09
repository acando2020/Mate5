function sinEspacios(inputs) {
    $(inputs).on('keypress', function(e) {
        if (e.which == 32)
            return false;
    });
}
sinEspacios(".text-question .form-control");
var interesult = [],
    interesult2 = [],
    interesult3 = [];

var h = 1;
for (var h = 0; h <= 5; h++) {
    interesult.push(Math.floor(Math.random() * 9) + 1)
    interesult2.push(Math.floor(Math.random() * 9) + 1)
    interesult3.push(Math.floor(Math.random() * 9) + 1)
}
/////////////////////////////////////////////////////

var completar = document.getElementsByClassName('com');
var completar1 = parseInt(interesult.join(''));
var completar2 = parseInt(interesult2.join(''));
var completar3 = parseInt(interesult3.join(''));



$('#completar1').html(completar1);
$('#completar2').html(completar2);
$('#completar3').html(completar3);

var unidad = interesult[5];
var unidad2 = interesult2[5];
var unidad3 = interesult3[5];

////////////////////////////////////////////////////////////////////////////////////////
var decena = interesult[4] * 10;
var decena2 = interesult2[4] * 10;
var decena3 = interesult3[4] * 10;
////////////////////////////////////////////////////////////////////////////////////////
var centena = interesult[3] * 100;
var centena2 = interesult2[3] * 100;
var centena3 = interesult3[3] * 100;
////////////////////////////////////////////////////////////////////////////////////////
var umil = interesult[2] * 1000;
var umil2 = interesult2[2] * 1000;
var umil3 = interesult3[2] * 1000;
////////////////////////////////////////////////////////////////////////////////////////
var dmil = interesult[1] * 10000;
var dmil2 = interesult2[1] * 10000;
var dmil3 = interesult3[1] * 10000;
////////////////////////////////////////////////////////////////////////////////////////
var cmil = interesult[0] * 100000;
var cmil2 = interesult2[0] * 100000;
var cmil3 = interesult3[0] * 100000;
///////////////////concatenar 1////////////////////////////////////////
var concate = [cmil, "+", dmil, "+", umil, "+", centena, "+", decena, "+", unidad];
var concatenar = String(concate.join(''));
///////////////////concatenar 2////////////////////////////////////////
var concate2 = [cmil2, "+", dmil2, "+", umil2, "+", centena2, "+", decena2, "+", unidad2];
var concatenar2 = String(concate2.join(''));
///////////////////concatenar 1////////////////////////////////////////
var concate3 = [cmil3, "+", dmil3, "+", umil3, "+", centena3, "+", decena3, "+", unidad3];
var concatenar3 = String(concate3.join(''));


function actividad43() {

    var numero1 = document.getElementById('numero1').value;
    var numero2 = document.getElementById('numero2').value;
    var numero3 = document.getElementById('numero3').value;
    var respuesta1 = 0,
        respuesta2 = 0,
        respuesta3 = 0;


    if (numero1 == concatenar) {

        $('#numero1').css("background", "#00e600");


        respuesta1 = 1;

    } else {

        $('#numero1').css("background", "#ff6666");


    }

    if (numero2 == concatenar2) {

        $('#numero2').css("background", "#00e600");


        respuesta2 = 1;


    } else {

        $('#numero2').css("background", "#ff6666");


    }

    if (numero3 == concatenar3) {

        $('#numero3').css("background", "#00e600");


        respuesta3 = 1;


    } else {

        $('#numero3').css("background", "#ff6666");


    }


    var totalR18 = parseFloat(respuesta1) + parseFloat(respuesta2) + parseFloat(respuesta3);
    var total = (totalR18 * 10) / 3;
    $('#txtNota').html(total.toFixed(2));
    document.getElementById('bt_comprobar').disabled = true;
    $('input').attr("disabled", true);
    $('#txtAlumno').attr("disabled", false);



}
