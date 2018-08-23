document.getElementById('nota2').addEventListener('keypress', () => {
    validNumero(0, 2.5, 1);
});
document.getElementById('nota2').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota2'), 2.5)
});
var act78 = [];
var act78_1 = [];
var multiplo1 = 1;
var multiplo2 = 1;

var num1 = Math.floor((Math.random() * 5) + 2);
var num2 = (Math.floor((Math.random() * 4) + 1)) * 10;
for (var i = 0; i < 7; i++) {
    multiplo1 = parseInt(multiplo1) * parseInt(num1);
    act78[i] = parseInt(multiplo1);
    multiplo2 = parseInt(multiplo2) * parseInt(num2);
    act78_1[i] = parseInt(multiplo2);
}
var mult = String([act78[1], act78[2], act78[3], act78[4], act78[5], act78[6], ]);
$('#mult1').html(mult);
$('#mult2').html('' + act78[2] + '÷' + act78[1] + '=' + act78[0] + '');
$('#mult3').html('' + act78[5] + '÷' + act78[4] + '=');
/////////////////////////////////////////////////////////////////////////////

var mult2 = String([act78_1[1], act78_1[2], act78_1[3], act78_1[4], act78_1[5], ]);
$('#mult1_1').html(mult2);
$('#mult2_1').html('' + act78_1[2] + '÷' + act78_1[1] + '=' + act78_1[0] + '');
$('#mult3_1').html('' + act78_1[5] + '÷' + act78_1[4] + '=');
/////////////////////////////////////////////////////////////////////////////////////////////
var act78_3 = [];
var mult3_1 = 1;
var act78_4 = [];
var mult4_1 = 1;

var num3_1 = Math.floor((Math.random() * 4) + 2);
var num3_2 = Math.floor((Math.random() * 6) + 2);

for (var i = 0; i < 8; i++) {
    mult3_1 = parseInt(mult3_1) * num3_1;
    act78_3[i] = parseInt(mult3_1);
    mult4_1 = parseInt(mult4_1) * num3_2;
    act78_4[i] = parseInt(mult4_1);
}


document.getElementById('act3_1').value = act78_3[1];
document.getElementById('act3_2').value = act78_3[2];
document.getElementById('act3_3').value = act78_3[3];
document.getElementById('act3_4').value = act78_3[4];
document.getElementById('act3_5').value = act78_3[5];
document.getElementById('act3_6').value = act78_3[6];
document.getElementById('act3_7').value = act78_3[7];


document.getElementById('act4_1').value = act78_4[1];
document.getElementById('act4_2').value = act78_4[2];
document.getElementById('act4_3').value = act78_4[3];
document.getElementById('act4_4').value = act78_4[4];
document.getElementById('act4_5').value = act78_4[5];
document.getElementById('act4_6').value = act78_4[6];
document.getElementById('act4_7').value = act78_4[7];

function actividad78_1() {
    var act1_1 = document.getElementById('act1_1').value;
    var act1_2 = document.getElementById('act1_2').value.toLowerCase();
    var act1_3 = document.getElementById('act1_3').value;
    var act1_4 = document.getElementById('act1_4').value.toLowerCase();
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
        nt11 = 0;
    if (act1_1 == act78[0]) {
        nt1 = 1;
        $('#act1_1').css("background", "#00e600");

    } else {
        $('#act1_1').css("background", "#ff6666");

    }

    var ptr = ['x',act78[0]];
    var pt = String(ptr.join(''));

    if (act1_2 == pt) {
        nt2 = 1;
        $('#act1_2').css("background", "#00e600");

    } else {
        $('#act1_2').css("background", "#ff6666");

    }


    if (act1_3 == act78_1[0]) {
        nt3 = 1;
        $('#act1_3').css("background", "#00e600");

    } else {
        $('#act1_3').css("background", "#ff6666");

    }

    var ptr2 = ['x',act78_1[0]];
    var pt2 = String(ptr2.join(''));

    if (act1_4 == pt2) {
        nt4 = 1;
        $('#act1_4').css("background", "#00e600");

    } else {
        $('#act1_4').css("background", "#ff6666");

    }
    var subtotal = parseInt(nt1) + parseInt(nt2) + parseInt(nt3) + parseInt(nt4);
    var total = (subtotal * 2.5) / 4;
    $('#nota1').val(parseFloat(total).toFixed(2));

}

function actividad78_3() {

    var ptr3_1 = document.getElementById('ptr3_1').value.toLowerCase();
    var Ract3_4 = document.getElementById('Ract3_4').value;
    var Ract3_5 = document.getElementById('Ract3_5').value;
    var Ract3_6 = document.getElementById('Ract3_6').value;
    var ptr3_2 = document.getElementById('ptr3_2').value.toLowerCase();
    var Ract4_3 = document.getElementById('Ract4_3').value;
    var Ract4_5 = document.getElementById('Ract4_5').value;
    var Ract4_6 = document.getElementById('Ract4_6').value;



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

    ///////////////////////////////////////////////////////////////////
    var ptr = ["x", act78_3[0], ]
    var pt = String(ptr.join(''));

    if (ptr3_1 == pt) {
        nt5 = 1;
        $('#ptr3_1').css("background", "#00e600");

    } else {
        $('#ptr3_1').css("background", "#ff6666");

    }


    if (Ract3_4 == act78_3[4]) {
        nt6 = 1;
        $('#Ract3_4').css("background", "#00e600");

    } else {
        $('#Ract3_4').css("background", "#ff6666");

    }


    if (Ract3_5 == act78_3[5]) {
        nt7 = 1;
        $('#Ract3_5').css("background", "#00e600");

    } else {
        $('#Ract3_5').css("background", "#ff6666");

    }

    if (Ract3_6 == act78_3[6]) {
        nt8 = 1;
        $('#Ract3_6').css("background", "#00e600");

    } else {
        $('#Ract3_6').css("background", "#ff6666");

    }
    ////////////////////////////////////////////////////////////////////////////
    var ptr2 = ["x", act78_4[0], ]
    var pt2 = String(ptr2.join(''));

    if (ptr3_2 == pt2) {
        nt9 = 1;
        $('#ptr3_2').css("background", "#00e600");

    } else {
        $('#ptr3_2').css("background", "#ff6666");

    }



    if (Ract4_3 == act78_4[3]) {
        nt10 = 1;
        $('#Ract4_3').css("background", "#00e600");

    } else {
        $('#Ract4_3').css("background", "#ff6666");

    }

    if (Ract4_5 == act78_4[5]) {
        nt11 = 1;
        $('#Ract4_5').css("background", "#00e600");

    } else {
        $('#Ract4_5').css("background", "#ff6666");

    }

    if (Ract4_6 == act78_4[6]) {
        nt12 = 1;
        $('#Ract4_6').css("background", "#00e600");

    } else {
        $('#Ract4_6').css("background", "#ff6666");

    }
    var subtotal = parseInt(nt5) + parseInt(nt6) + parseInt(nt7) + parseInt(nt8) + parseInt(nt9) + parseInt(nt10) + parseInt(nt11) + parseInt(nt12);
    var total = (subtotal * 5) / 8;
    $('#nota3').val(parseFloat(total).toFixed(2));

}

function actividad78() {
    var nota1 = document.getElementById('nota1').value;
    var nota2 = document.getElementById('nota2').value;
    var nota3 = document.getElementById('nota3').value;
    if (nota2 == "") {
        alert("Ingrese la nota en la pregunta 2")
    } else {
        actividad78_1();
        actividad78_3();

        var nota1 = document.getElementById('nota1').value;
        var nota2 = document.getElementById('nota2').value;
        var nota3 = document.getElementById('nota3').value;
        var total = parseFloat(nota1)+parseFloat(nota2)+parseFloat(nota3);
        $('#txtNota').html(total.toFixed(2));
        document.getElementById('bt_comprobar').disabled = true;
        $('input').attr("disabled", true);
        $('#txtAlumno').attr("disabled", false);
    }



}
