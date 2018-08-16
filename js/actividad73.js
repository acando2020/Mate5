var loadValues = {
    preg1: [568, 1742, 2050, 'seis mil trescientos cinco', 'siete mil noventa y ocho', 'nueve mil ochocientos'],

};
var respCor = {
    preg1: [
        ['568', 'quinientos sesenta y ocho'],
        ['1742', 'mil setecientos cuarenta y dos'],
        ['2050', 'dos mil cincuenta'],
        ['seis mil trescientos cinco', '6305'],
        ['siete mil noventa y ocho', '7098'],
        ['nueve mil ochocientos', '9800']
    ],

};
var valuesAdic = {
    selectorsAct1: ['.tabact1 tr td div span', '.tabact1 tr td div input'],
    selectorsAct2: ['.columna1draggable span', '.columna1droppable', '.columna3draggable span']
};
var classes = {
    preg2DnD: ['dndAligned']
};
initElementos('.preg1', 'span', loadValues.preg1, true);
i



function pregunta1() {
    calcLinkActivity(valuesAdic.selectorsAct1, respCor.preg1, valuesAdic.selectorsAct1[1], 'nota1_1', 1);
}



Array.from(document.getElementsByClassName('nota-abierta')).forEach((elemento => {
    elemento.addEventListener('keypress', () => {
        validNumero(0, 9);
    });
    elemento.addEventListener('keyup', () => {
        validMaxIngreso(elemento, 10);
    });
}));







var arreglo = [];
var i = 1;

for (var i = 0; i <= 5; i++) {
    arreglo[i] = Math.round(Math.random() * (1000 - 1) + 1);
}
var arreglo2 = [];
var i = 1;

for (var i = 0; i <= 12; i++) {
    arreglo2[i] = Math.round(Math.random() * (1000 - 1) + 1);
}

var cajasImg = document.getElementsByClassName('imagen');

arreglo.sort(f_randomico);
for (i = 0; i < cajasImg.length; i++) {

    $('#' + cajasImg[i].id).html('<div id="drag' + [i] + '" draggable="true" ondragstart="drag(event)">' + arreglo[i] + '</div> ');


}
var cajasNum = document.getElementsByClassName('numeros');

arreglo2.sort(f_randomico);
for (i = 0; i < cajasNum.length; i++) {

    $('#' + cajasNum[i].id).html('<div width="50px">' + arreglo2[i] + '</div> ');


}

var num = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
var num2 = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

var cajasNume = document.getElementsByClassName('num');

num.sort(f_randomico);
num2.sort(f_randomico);
for (i = 0; i < cajasNume.length; i++) {
    for (var j = 0; j < cajasNume.length; j++) {




        $('#' + cajasNume[i].id).html('<div width="50px">' + num[i] + ' um + ' + num2[j] + ' c + ' + num2[j] + ' d + ' + num[i] + ' u</div> ');


    }
}



/*function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("Text", ev.target.id);
}

function drop(ev) {
    var data = ev.dataTransfer.getData("Text");
    ev.target.appendChild(document.getElementById(data));
    ev.preventDefault();
}*/
var act72 = [
    ['<span>6<h style="color: #00F0FF">5</h>3 218<input type="text" id="act2_1" class="inputst text-lowercase" name=""></span>'],
    ['<span>748 <h style="color: #00F0FF">2</h>53<input type="text" id="act2_2" class="inputst text-lowercase" name=""></span>'],
    ['<span><h style="color: #00F0FF">1</h>70 645<input type="text" id="act2_3" class="inputst text-lowercase" name=""></span>'],
    ['<span>39<h style="color: #00F0FF">6</h> 174<input type="text" id="act2_4" class="inputst text-lowercase" name=""></span>'],
];
var p2Num = document.getElementsByClassName('act2');
act72.sort(f_randomico);
for (i = 0; i < p2Num.length; i++) {

    $('#' + p2Num[i].id).html(act72[i][0]);

}

function pregunta2() {
    var act2_1 = document.getElementById('act2_1').value.toLowerCase();
    var act2_2 = document.getElementById('act2_2').value.toLowerCase();
    var act2_3 = document.getElementById('act2_3').value.toLowerCase();
    var act2_4 = document.getElementById('act2_4').value.toLowerCase();
    var nt1 = 0,
        nt2 = 0,
        nt3 = 0,
        nt4 = 0;
    if (act2_1 == "5 decenas de mil") {
        nt1 = 2.5;
        $('#act2_1').css("background", "#00e600");

    } else {
        $('#act2_1').css("background", "#ff6666");

    }
    if (act2_2 == "2 centenas") {
        nt2 = 2.5;
        $('#act2_2').css("background", "#00e600");

    } else {
        $('#act2_2').css("background", "#ff6666");

    }
    if (act2_3 == "1 centena de mil") {
        nt3 = 2.5;
        $('#act2_3').css("background", "#00e600");

    } else {
        $('#act2_3').css("background", "#ff6666");

    }
    if (act2_4 == "6 unidades de mil") {
        nt4 = 2.5;
        $('#act2_4').css("background", "#00e600");

    } else {
        $('#act2_4').css("background", "#ff6666");

    }
    var total = (parseFloat(nt1) + parseFloat(nt2) + parseFloat(nt3) + parseFloat(nt4)) / 10;
    $("#nota1_2").val(parseFloat(total).toFixed(2));

}

/*function pregunta3() {
    var ordenado = [];
    ordenado = arreglo.sort((a, b) => a - b);
    var nota = 0,
        nota2 = 0,
        nota3 = 0,
        nota4 = 0,
        nota5 = 0,
        nota6 = 0;
    if ($('td#div1').children("div").html() == ordenado[0]) {
        nota = 1;

        $('#div1').addClass('valid')
    } else {
        $('#div1').css("background", "#ff6666");

    }
    if ($('td#div2').children("div").html() == ordenado[1]) {
        nota2 = 1;
        $('#div2').addClass('valid')
    } else {
        $('#div2').css("background", "#ff6666");
    }
    if ($('td#div3').children("div").html() == ordenado[2]) {
        nota3 = 1;
        $('#div3').addClass('valid')
    } else {
        $('#div3').css("background", "#ff6666");
    }
    if ($('td#div4').children("div").html() == ordenado[3]) {
        nota4 = 1;
        $('#div4').addClass('valid')
    } else {
        $('#div4').css("background", "#ff6666");
    }
    if ($('td#div5').children("div").html() == ordenado[4]) {
        nota5 = 1;
        $('#div5').addClass('valid')
    } else {
        $('#div5').css("background", "#ff6666");
    }
    if ($('td#div6').children("div").html() == ordenado[5]) {
        nota6 = 1;
        $('#div6').addClass('valid')
    } else {
        $('#div6').css("background", "#ff6666");
    }
    var subtotal = parseInt(nota) + parseInt(nota2) + parseInt(nota3) + parseInt(nota4) + parseInt(nota5) + parseInt(nota6);
    var total = (subtotal * 1) / 6;
    $("#nota1_3").val(total.toFixed(2));
}*/

//////////////////////pregunta 3//////////////////////////////////////////////////////
function pregunta3() {
    var num1 = $('div#cajasNum1').children("div").html();
    var signo = $("#n1").val();
    var num2 = $('div#cajasNum3').children("div").html();
    /////////////////////////////////////////////////////
    var num3 = $('div#cajasNum2').children("div").html();
    var signo2 = $("#n2").val();
    var num4 = $('div#cajasNum5').children("div").html();
    /////////////////////////////////////////////////////
    var num5 = $('div#cajasNum4').children("div").html();
    var signo3 = $("#n3").val();
    var num6 = $('div#cajasNum6').children("div").html();
    /////////////////////////////////////////////////////
    var num7 = $('div#cajasNum7').children("div").html();
    var signo4 = $("#n4").val();
    var num8 = $('div#cajasNum8').children("div").html();
    /////////////////////////////////////////////////////
    var num9 = $('div#cajasNum9').children("div").html();
    var signo5 = $("#n5").val();
    var num10 = $('div#cajasNum10').children("div").html();
    /////////////////////////////////////////////////////
    var num11 = $('div#cajasNum11').children("div").html();
    var signo6 = $("#n6").val();
    var num12 = $('div#cajasNum12').children("div").html();
    var nt = 0,
        nt2 = 0,
        nt3 = 0,
        nt4 = 0,
        nt5 = 0,
        nt6 = 0;

    if (signo == "") {
        $('#n1').css("background", "#ff6666");
    } else {
        if (signo == "=") {
            if (num1 == num2) {
                nt = 1;
                $('#n1').css("background", "#00e600");

            } else {
                $('#n1').css("background", "#ff6666");

            }
        } else if (signo == ">") {
            if (num1 >= num2) {
                nt = 1;
                $('#n1').css("background", "#00e600");
            } else {
                $('#n1').css("background", "#ff6666");

            }


        } else if (signo == "<") {
            if (num1 <= num2) {
                nt = 1;
                $('#n1').css("background", "#00e600");

            } else {
                $('#n1').css("background", "#ff6666");

            }
        }
    }


    ///////////////////////2//////////////////////////////
    if (signo2 == "") {
        $('#n2').css("background", "#ff6666");

    } else {
        if (signo2 == "=") {
            if (num3 == num4) {
                nt2 = 1;
                $('#n2').css("background", "#00e600");

            } else {
                $('#n2').css("background", "#ff6666");

            }
        } else if (signo2 == ">") {
            if (num3 >= num4) {
                nt2 = 1;
                $('#n2').css("background", "#00e600");
            } else {
                $('#n2').css("background", "#ff6666");

            }


        } else if (signo2 == "<") {
            if (num3 <= num4) {
                nt2 = 1;
                $('#n2').css("background", "#00e600");

            } else {
                $('#n2').css("background", "#ff6666");
            }
        }
    }

    //////////////////////3//////////////////////////
    if (signo3 == "") {
        $('#n3').css("background", "#ff6666");
    } else {
        if (signo3 == "=") {
            if (num5 == num6) {
                nt3 = 1;
                $('#n3').css("background", "#00e600");

            } else {
                $('#n3').css("background", "#ff6666");

            }
        } else if (signo3 == ">") {
            if (num5 >= num6) {
                nt3 = 1;
                $('#n3').css("background", "#00e600");
            } else {
                $('#n3').css("background", "#ff6666");

            }


        } else if (signo3 == "<") {
            if (num5 <= num6) {
                nt3 = 1;
                $('#n3').css("background", "#00e600");

            } else {
                $('#n3').css("background", "#ff6666");

            }
        }
    }

    ////////////////////4/////////////////////////////
    if (signo4 == "") {
        $('#n4').css("background", "#ff6666");

    } else {
        if (signo4 == "=") {
            if (num7 == num8) {
                nt4 = 1;
                $('#n4').css("background", "#00e600");

            } else {
                $('#n4').css("background", "#ff6666");

            }
        } else if (signo4 == ">") {
            if (num7 > num8) {
                nt4 = 1;
                $('#n4').css("background", "#00e600");
            } else {
                $('#n4').css("background", "#ff6666");

            }


        } else if (signo4 == "<") {
            if (num7 < num8) {
                nt4 = 1;
                $('#n4').css("background", "#00e600");

            } else {
                $('#n4').css("background", "#ff6666");

            }
        }

    }

    ////////////////////5////////////////////////
    if (signo5 == "") {
        $('#n5').css("background", "#ff6666");
    } else {
        if (signo5 == "=") {
            if (num9 == num10) {
                nt5 = 1;
                $('#n5').css("background", "#00e600");

            } else {
                $('#n5').css("background", "#ff6666");

            }
        } else if (signo5 == ">") {
            if (num9 > num10) {
                nt5 = 1;
                $('#n5').css("background", "#00e600");
            } else {
                $('#n5').css("background", "#ff6666");

            }


        } else if (signo5 == "<") {
            if (num9 < num10) {
                nt5 = 1;
                $('#n5').css("background", "#00e600");

            } else {
                $('#n5').css("background", "#ff6666");

            }
        }
    }

    /////////////////////////////////////////////////
    if (signo6 == "") {
        $('#n6').css("background", "#ff6666");

    } else {

    }
    if (signo6 == "=") {
        if (num11 == num12) {
            nt6 = 1;
            $('#n6').css("background", "#00e600");

        } else {
            $('#n6').css("background", "#ff6666");

        }
    } else if (signo6 == ">") {
        if (num11 > num12) {
            nt6 = 1;
            $('#n6').css("background", "#00e600");
        } else {
            $('#n6').css("background", "#ff6666");

        }


    } else if (signo6 == "<") {
        if (num11 < num12) {
            nt6 = 1;
            $('#n6').css("background", "#00e600");

        } else {
            $('#n6').css("background", "#ff6666");
        }
    }
    var suma = parseInt(nt) + parseInt(nt2) + parseInt(nt3) + parseInt(nt4) + parseInt(nt5) + parseInt(nt6);
    var ResPre4 = (suma * 1) / 6;
    $("#nota1_3").val(parseFloat(ResPre4).toFixed(2));


}

function sinEspacios(inputs) {
    $(inputs).on('keypress', function(e) {
        if (e.which == 32)
            return false;
    });
}
sinEspacios(".sinEspacio");

function pregunta4() {
    var act4_1 = document.getElementById('act4_1').value;
    var act4_2 = document.getElementById('act4_2').value;
    var nt1 = 0,
        nt2 = 0;
    if (act4_1 == "1768") {
        $('#act4_1').css("background", "#00e600");
        nt1 = 0.5;

    } else {
        $('#act4_1').css("background", "#ff6666");

    }
    if (act4_2 == "302") {
        $('#act4_2').css("background", "#00e600");
        nt2 = 0.5;

    } else {
        $('#act4_2').css("background", "#ff6666");

    }
    var suma = parseFloat(nt1) + parseFloat(nt2);

    $("#nota1_4").val(parseFloat(suma).toFixed(2));

}

function pregunta5() {
    var act5_1 = document.getElementById('act5_1').value;
    var act5_2 = document.getElementById('act5_2').value;
    var act5_3 = document.getElementById('act5_3').value;
    var act5_4 = document.getElementById('act5_4').value;
    var act5_5 = document.getElementById('act5_5').value;
    var act5_6 = document.getElementById('act5_6').value;
    var act5_7 = document.getElementById('act5_7').value;
    var act5_8 = document.getElementById('act5_8').value;
    var nt1 = 0,
        nt2 = 0,
        nt3 = 0,
        nt4 = 0,
        nt5 = 0,
        nt6 = 0,
        nt7 = 0,
        nt8 = 0;

    if (act5_1 == "1109") {
        $('#act5_1').css("background", "#00e600");
        nt1 = 1;
    } else {
        $('#act5_1').css("background", "#ff6666");

    }
    if (act5_2 == "259+850") {
        nt2 = 1;
        $('#act5_2').css("background", "#00e600");
    } else {
        $('#act5_2').css("background", "#ff6666");

    }
    if (act5_3 == "1109") {
        nt3 = 1;
        $('#act5_3').css("background", "#00e600");
    } else {
        $('#act5_3').css("background", "#ff6666");

    }
    if (act5_4 == "1109") {
        nt4 = 1;
        $('#act5_4').css("background", "#00e600");
    } else {
        $('#act5_4').css("background", "#ff6666");

    }
    if (act5_5 == "230+(451+345)") {
        nt5 = 1;
        $('#act5_5').css("background", "#00e600");
    } else {
        $('#act5_5').css("background", "#ff6666");

    }
    if (act5_6 == "230+796") {
        nt6 = 1;
        $('#act5_6').css("background", "#00e600");
    } else {
        $('#act5_6').css("background", "#ff6666");

    }
    if (act5_7 == "1026") {
        nt7 = 1;
        $('#act5_7').css("background", "#00e600");
    } else {
        $('#act5_7').css("background", "#ff6666");

    }
    if (act5_8 == "1026") {
        nt8 = 1;
        $('#act5_8').css("background", "#00e600");
    } else {
        $('#act5_8').css("background", "#ff6666");

    }
    var subtotal = parseFloat(nt1) + parseFloat(nt2) + parseFloat(nt3) + parseFloat(nt4) + parseFloat(nt5) + parseFloat(nt6) + parseFloat(nt7) + parseFloat(nt8);
    var total = (subtotal * 1) / 8;
    $("#nota1_5").val(parseFloat(total).toFixed(2));


}

////////////////////////////////////////////////////////////////////
var interesult = [],
    numeroInt = 0,
    interesult2 = [],
    numeroInt2 = 0,
    numeroInt3 = 0;

var IntNum = Math.floor(Math.random() * 5) + 1;
var h = 1;
for (var h = 0; h <= 3; h++) {

    numeroInt = parseInt(numeroInt) + parseInt(IntNum);
    interesult[h] = numeroInt;

}
var img1 = "img/i1_p31_act39.png";
for (i = 0; i < interesult[0]; i++) {
    $('#caja1').append('<img src="' + img1 + '" />');
}
for (i = 0; i < interesult[1]; i++) {
    $('#caja2').append('<img src="' + img1 + '" />');
}
for (i = 0; i < interesult[2]; i++) {
    $('#caja3').append('<img src="' + img1 + '" />');
}
var ir = [];

function agregar(x) {

    ir.push('<img src="' + img1 + '" />')
    $('#caja4').html('').append(ir);

}
////////////////////////////////////////////////////////////////////
var IntNum2 = Math.round(Math.random() * (99 - 1) + 1);
for (var j = 0; j <= 7; j++) {
    numeroInt2 = parseInt(numeroInt2) + parseInt(IntNum2);
    interesult2[j] = numeroInt2;
}
interesult2.sort(function(a, b) { return b - a; });

////////////////////////////////////////////////////////////////////

var interesult3 = [];
var IntNum3 = Math.floor(Math.random() * 50) + 1;
for (var v = 0; v <= 6; v++) {
    numeroInt3 = parseInt(numeroInt3) + parseInt(IntNum3);
    interesult3[v] = numeroInt3;
}
interesult3.sort(function(a, b) { return b - a; });

document.getElementById('numer1').value = interesult3[0];
var suma = Math.floor(Math.random() * 100) + 1;



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
var numero7 = document.getElementById('numer7').value;

document.getElementById('numer8').value = parseInt(numero7) + parseInt(suma);

var numero8 = document.getElementById('numer8').value;

document.getElementById('numer9').value = parseInt(numero8) - parseInt(resta);



function pregunta6() {
    var numer6 = document.getElementById('numer6').value;
    var numer7 = document.getElementById('numer7').value;
    var numer8 = document.getElementById('numer8').value;
    var sr1 = document.getElementById('sr1').value;
    var sr2 = document.getElementById('sr2').value;
    var sr3 = document.getElementById('sr3').value;
    var patron3 = document.getElementById('patron3').value;
    var patron4 = document.getElementById('patron4').value;

    var patron5 = document.getElementById('patron5').value;

    var nota1 = 0,
        nota2 = 0,
        nota3 = 0,
        nota4 = 0,
        nota5 = 0,
        nota6 = 0,
        nota7 = 0;


    var pt1 = ['+', suma]
    var ptron1 = pt1.join('');
    var pt2 = ['-', resta]
    var ptron2 = pt2.join('');
    var pt3 = ['+', interesult[0]]
    var ptron3 = pt3.join('');


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
    if (sr3 == numer8) {
        $('#sr3').css("background", "#00e600");
        nota3 = 1;
    } else {
        $('#sr3').css("background", "#ff6666");
    }
    if (patron3 == ptron1) {
        $('#patron3').css("background", "#00e600");
        nota4 = 1;
    } else {
        $('#patron3').css("background", "#ff6666");
    }

    if (patron4 == ptron2) {
        $('#patron4').css("background", "#00e600");
        nota5 = 1;
    } else {
        $('#patron4').css("background", "#ff6666");
    }

    if (patron5 == ptron3) {
        $('#patron5').css("background", "#00e600");
        nota6 = 1;
    } else {
        $('#patron5').css("background", "#ff6666");
    }
    if (ir.length == interesult[3]) {
        $('#caja4').css("background", "#00e600");
        nota7 = 1;
    } else {
        $('#caja4').css("background", "#ff6666");
    }



    var nota39_2 = parseInt(nota1) + parseInt(nota2) + parseInt(nota3) + parseInt(nota4) + parseInt(nota5) + parseInt(nota6) + parseInt(nota7);
    var total = (nota39_2 * 1) / 7;
    $('#nota1_6').val(total.toFixed(2));
}

///////////////////////////////Pregunta 7 /////////////////////////////////////

function pregunt7() {
    var tx1 = document.getElementById('tx1').value;
    var tx2 = document.getElementById('tx2').value;
    var tx3 = document.getElementById('tx3').value;
    var respuesta = 0,
        respuesta1 = 0,
        respuesta2 = 0;

    if (tx1 == "a") {
        $('#tx1').css("background", "#00e600");
        respuesta = 1;
    } else {
        $('#tx1').css("background", "#ff6666");
        respuesta = 0;
    }
    if (tx2 == "d") {
        $('#tx2').css("background", "#00e600");
        respuesta1 = 1;

    } else {
        $('#tx2').css("background", "#ff6666");
        respuesta1 = 0;

    }
    if (tx3 == "b") {
        $('#tx3').css("background", "#00e600");
        respuesta2 = 1;

    } else {
        $('#tx3').css("background", "#ff6666");
        respuesta2 = 0;


    }
    var subtotalR7 = parseInt(respuesta) + parseInt(respuesta1) + parseInt(respuesta2);
    var totalR7 = (subtotalR7 * 1) / 3;
    $('#nota1_7').val(parseFloat(totalR7).toFixed(2));


}
/////////////////////Pregunta 8///////////////////////////
var numAl = ['12', '8', '13', '14'];
var numAle = document.getElementsByClassName('numerosAl');

numAl.sort(f_randomico);
for (i = 0; i < numAle.length; i++) {

    $('#' + numAle[i].id).html('<span class="pin" id=P' + [i] + '>' + numAl[i] + '</span>');


}

$('.pin').click(function() {
    if ($(this).hasClass('pintar')) {
        $(this).removeClass('pintar')

    } else {
        $(this).addClass('pintar')
    }
    if ($('#P0').hasClass('pintar')) {
        $('#P1').removeClass('pintar')
        $('#P2').removeClass('pintar')
        $('#P3').removeClass('pintar')

    } else if ($('#P1').hasClass('pintar')) {
        $('#P0').removeClass('pintar')
        $('#P2').removeClass('pintar')
        $('#P3').removeClass('pintar')

    } else if ($('#P2').hasClass('pintar')) {
        $('#P0').removeClass('pintar')
        $('#P1').removeClass('pintar')
        $('#P3').removeClass('pintar')

    } else if ($('#P3').hasClass('pintar')) {
        $('#P0').removeClass('pintar')
        $('#P1').removeClass('pintar')
        $('#P2').removeClass('pintar')

    }
});

function pregunta8() {
    var respr5 = 0;
    for (var i = 0; i <= 3; i++) {
        var caja = $('span[id=P' + [i] + ']').text();
        if ($('#P' + [i] + '').hasClass("pintar")) {

            if ((caja == "12")) {
                respr5 = 1;
                $('#P' + [i] + '').addClass('valid')
            } else {
                $('#P' + [i] + '').removeClass('valid')
                $('#P' + [i] + '').addClass('no-valid')
            }
        } else {

        }
    }
    $('#nota1_8').val(respr5);
}

////////////////pregunta 9////////////////////////////////////////



var numAl = [];
for (var i = 0; i <= 20; i++) {
    numAl.push(Math.floor(Math.random() * 6) + 1)
}
var nAlt = document.getElementsByClassName('numerosAletorio');

numAl.sort(f_randomico);

for (i = 0; i < nAlt.length; i++) {

    $('#' + nAlt[i].id).html('<div><span id=s' + [i] + '>' + numAl[i] + '</span> cm</div>');


}

function pregunta9(argument) {
    var perim = document.getElementById('peri1').value;
    var perim2 = document.getElementById('peri2').value;
    var perim3 = document.getElementById('peri3').value;
    var reperi = 0,
        reperi2 = 0,
        reperi3 = 0,
        reperi4 = 0,
        reperi5 = 0,
        reperi6 = 0;
    var per1 = parseInt($('span[id=s0]').text());
    var per2 = parseInt($('span[id=s1]').text());
    var per3 = parseInt($('span[id=s2]').text());
    var per4 = parseInt($('span[id=s3]').text());

    var per5 = parseInt($('span[id=s4]').text());
    var per6 = parseInt($('span[id=s5]').text());
    var per7 = parseInt($('span[id=s6]').text());
    var per8 = parseInt($('span[id=s7]').text());
    var per9 = parseInt($('span[id=s8]').text());

    var per10 = parseInt($('span[id=s9]').text());
    var per11 = parseInt($('span[id=s10]').text());
    var per12 = parseInt($('span[id=s11]').text());
    var per13 = parseInt($('span[id=s12]').text());
    var per14 = parseInt($('span[id=s13]').text());

    var reperi = per1 + per2 + per3 + per4;
    var reperi2 = per5 + per6 + per7 + per8 + per9;
    var reperi3 = per10 + per11 + per12 + per13 + per14;
    var resP9_1 = 0,
        resP9_2 = 0,
        resP9_3 = 0;


    if (reperi == perim) {
        $('#peri1').css("background", "#00e600");
        resP9_1 = 1;

    } else {
        $('#peri1').css("background", "#ff6666");

    }

    if (reperi2 == perim2) {
        $('#peri2').css("background", "#00e600");
        resP9_2 = 1;

    } else {
        $('#peri2').css("background", "#ff6666");

    }
    if (reperi3 == perim3) {
        $('#peri3').css("background", "#00e600");
        resP9_3 = 1;


    } else {
        $('#peri3').css("background", "#ff6666");

    }

    var subRP9 = parseInt(resP9_1) + parseInt(resP9_2) + parseInt(resP9_3);
    var tltrp9 = (subRP9 * 1) / 3;
    $('#nota1_9').val(parseFloat(tltrp9).toFixed(2));


}
/////////////////////////pregunta 10////////////////////////////
document.getElementById('nota1_10').addEventListener('keypress', () => {
    validNumero(0, 0.5, 1);
});
document.getElementById('nota1_10').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_10'), 0.5)
});
//////////////////pregunta 11 /////////////
function pregunta11() {
    var txtAng = document.getElementById('ang1').value;
    var txtAng2 = document.getElementById('ang2').value;
    var txtAng3 = document.getElementById('ang3').value;
    var txtAng4 = document.getElementById('ang4').value;
    var Rp11_1 = 0,
        Rp11_2 = 0,
        Rp11_3 = 0,
        Rp11_4 = 0;
    if (txtAng == "recto") {
        $('#ang1').css("background", "#00e600");
        Rp11_1 = 1;

    } else {
        $('#ang1').css("background", "#ff6666");

    }
    if (txtAng2 == "agudo") {
        $('#ang2').css("background", "#00e600");
        Rp11_2 = 1;

    } else {
        $('#ang2').css("background", "#ff6666");

    }
    if (txtAng3 == "llano") {
        $('#ang3').css("background", "#00e600");
        Rp11_3 = 1;

    } else {
        $('#ang3').css("background", "#ff6666");

    }
    if (txtAng4 == "obtuso") {
        $('#ang4').css("background", "#00e600");
        Rp11_4 = 1;

    } else {
        $('#ang4').css("background", "#ff6666");

    }
    var subRp11 = parseInt(Rp11_1) + parseInt(Rp11_2) + parseInt(Rp11_3) + parseInt(Rp11_4);
    var subRp11_1 = (subRp11 * 0.5) / 4;
    $('#nota1_11').val(parseFloat(subRp11_1).toFixed(2));
    //var TtlRp11 = subRp11_1/2;

}


function calcularTotal() {
    var nota11_10 = document.getElementById('nota1_10').value;
    if (nota11_10 == "") {
        alert("Ingrese la nota de la pregunta 10");
    } else {
        pregunta1();
        pregunta2();
        pregunta3();
        pregunta4();
        pregunta5();
        pregunta6();
        pregunt7();
        pregunta8();
        pregunta9();
        pregunta11();
        var nota11_1 = document.getElementById('nota1_1').value;
        var nota11_2 = document.getElementById('nota1_2').value;
        var nota11_3 = document.getElementById('nota1_3').value;
        var nota11_4 = document.getElementById('nota1_4').value;
        var nota11_5 = document.getElementById('nota1_5').value;
        var nota11_6 = document.getElementById('nota1_6').value;
        var nota11_7 = document.getElementById('nota1_7').value;
        var nota11_8 = document.getElementById('nota1_8').value;
        var nota11_9 = document.getElementById('nota1_9').value;
        var nota11_11 = document.getElementById('nota1_11').value;

        var SuperTotal = parseFloat(nota11_1) + parseFloat(nota11_2) + parseFloat(nota11_3) + parseFloat(nota11_4) + parseFloat(nota11_5) + parseFloat(nota11_6) + parseFloat(nota11_7) + parseFloat(nota11_8) + parseFloat(nota11_9) + parseFloat(nota11_10) + parseFloat(nota11_11);

        $('#txtNota').html(SuperTotal.toFixed(2));
        document.getElementById('bt_comprobar').disabled = true;
        $('input').attr("disabled", true);
        $('#txtAlumno').attr("disabled", false);



    }
}
