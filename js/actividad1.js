var titulos = 'evaluacion';
numero_pagina(10);

var loadValues = {
    preg1: [568, 1742, 2050, 'seis mil trescientos cinco', 'siete mil noventa y ocho', 'nueve mil ochocientos'],
    preg2: [
        ['4 um + 1 c + 7 d + 6 u', '9 000 + 200 + 10 + 5', '6 um + 2 c + 7 d + 8 u', '3 000 + 600 + 50 + 2', '2 um + 4 c + 9 u', '1 000 + 800 + 90 + 3'],
        [6278, 1893, 3652, 9215, 2409, 4176],
        ['9 um + 2 c + 1 d + 5 u', '3 um + 6 c + 5 d + 2 u', '1 um + 8 c + 9 d + 3 u', '4 000 + 100 + 70 + 6', '6 000 + 200 + 70 + 8', '2 000 + 400 + 9']
    ]
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
    preg2: [
        ['6 000 + 200 + 70 + 8', '6 um + 2 c + 7 d + 8 u', '6278'],
        ['1 000 + 800 + 90 + 3', '1 um + 8 c + 9 d + 3 u', '1893'],
        ['3 000 + 600 + 50 + 2', '3 um + 6 c + 5 d + 2 u', '3652'],
        ['9 000 + 200 + 10 + 5', '9 um + 2 c + 1 d + 5 u', '9215'],
        ['2 000 + 400 + 9', '2 um + 4 c + 9 u', '2409'],
        ['4 000 + 100 + 70 + 6', '4 um + 1 c + 7 d + 6 u', '4176']
    ]
};
var valuesAdic = {
    selectorsAct1: ['.tabact1 tr td div span', '.tabact1 tr td div input'],
    selectorsAct2: ['.columna1draggable span', '.columna1droppable', '.columna3draggable span']
};
var classes = {
    preg2DnD: ['dndAligned']
};
initElementos('.preg1', 'span', loadValues.preg1, true);
initElementos('.columna1draggable', 'span', loadValues.preg2[0], true);
initElementos('.columna1droppable', 'span', loadValues.preg2[1], true);
initElementos('.columna3draggable', 'span', loadValues.preg2[2], true);

insertAttributeDraggableElements('.columna1draggable');
insertAttributeDroppableElements('.columna1droppable', classes.preg2DnD);
insertAttributeDraggableElements('.columna3draggable');


function pregunta1() {
    calcLinkActivity(valuesAdic.selectorsAct1, respCor.preg1, valuesAdic.selectorsAct1[1], 'nota1_1', 1);
}

function pregunta2() {
    var selector = [];
    selector.push(valuesAdic.selectorsAct2[1]);
    calcMultiLinkActivity(selector, respCor.preg2, valuesAdic.selectorsAct2[1], 'nota1_2', 1, true);

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

for (var i = 0; i <= 5; i++) {
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







function pregunta3() {
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
}

//////////////////////pregunta 4//////////////////////////////////////////////////////
function pregunta4() {
    var num1 = $('div#cajasNum1').children("div").html();
    var signo = document.getElementById('n1').value;
    var num2 = $('div#cajasNum3').children("div").html();
    /////////////////////////////////////////////////////
    var num3 = $('div#cajasNum2').children("div").html();
    var signo2 = document.getElementById('n2').value;
    var num4 = $('div#cajasNum5').children("div").html();
    /////////////////////////////////////////////////////
    var num5 = $('div#cajasNum4').children("div").html();
    var signo3 = document.getElementById('n3').value;
    var num6 = $('div#cajasNum6').children("div").html();
    /////////////////////////////////////////////////////
    var num7 = $('div#cajasNume1').children("div").html();
    var signo4 = document.getElementById('n4').value;
    var num8 = $('div#cajasNume2').children("div").html();
    /////////////////////////////////////////////////////
    var num9 = $('div#cajasNume4').children("div").html();
    var signo5 = document.getElementById('n5').value;
    var num10 = $('div#cajasNume3').children("div").html();
    /////////////////////////////////////////////////////
    var num11 = $('div#cajasNume5').children("div").html();
    var signo6 = document.getElementById('n6').value;
    var num12 = $('div#cajasNume6').children("div").html();
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
            if (num1 > num2) {
                nt = 1;
                $('#n1').css("background", "#00e600");
            } else {
                $('#n1').css("background", "#ff6666");

            }


        } else if (signo == "<") {
            if (num1 < num2) {
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
            if (num3 > num4) {
                nt2 = 1;
                $('#n2').css("background", "#00e600");
            } else {
                $('#n2').css("background", "#ff6666");

            }


        } else if (signo2 == "<") {
            if (num3 < num4) {
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
            if (num5 > num6) {
                nt3 = 1;
                $('#n3').css("background", "#00e600");
            } else {
                $('#n3').css("background", "#ff6666");

            }


        } else if (signo3 == "<") {
            if (num5 < num6) {
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
    $("#nota1_4").val(parseFloat(ResPre4).toFixed(2));


}

var enteros = [];
var enteros2 = [];
var enteros3 = [];
var enteros4 = [];
var enteros5 = [];
var enteros6 = [];

for (var i = 0; i < 9; i++) {
    enteros[i] = Math.round(Math.random() * i) + 1;
    enteros2[i] = Math.round(Math.random() * i) + 1;
}
for (var i = 5; i < 9; i++) {
    enteros3[i] = Math.round(Math.random() * i) + 1;
    enteros4[i] = Math.round(Math.random() * i) + 1;
}
for (var i = 0; i < 5; i++) {
    enteros5[i] = Math.round(Math.random() * i) + 1;
    enteros6[i] = Math.round(Math.random() * i) + 1;
}




var sumaNum = document.getElementsByClassName('sum');
enteros.sort(f_randomico);
for (i = 0; i < sumaNum.length; i++) {

    $('#' + sumaNum[i].id).html('<div width="50px">' + enteros[i] + '</div> ');

}

var sumaNume = document.getElementsByClassName('sum2');
enteros2.sort(f_randomico);
for (i = 0; i < sumaNume.length; i++) {

    $('#' + sumaNume[i].id).html('<div width="50px">' + enteros2[i] + '</div> ');

}
/////////////////////////////Restas///////////////////////////////////////////////////
var sumaNumer = document.getElementsByClassName('sum3');
enteros3.sort(f_randomico);
for (i = 0; i < sumaNumer.length; i++) {

    $('#' + sumaNumer[i].id).html('<div width="50px">' + enteros3[i] + '</div> ');

}
var sumaNumero = document.getElementsByClassName('sum4');
enteros5.sort(f_randomico);
for (i = 0; i < sumaNumero.length; i++) {

    $('#' + sumaNumero[i].id).html('<div width="50px">' + enteros5[i] + '</div> ');

}
var resNume = document.getElementsByClassName('sum5');
enteros4.sort(f_randomico);
for (i = 0; i < resNume.length; i++) {

    $('#' + resNume[i].id).html('<div width="50px">' + enteros4[i] + '</div> ');

}
var resNumero = document.getElementsByClassName('sum6');
enteros6.sort(f_randomico);
for (i = 0; i < resNumero.length; i++) {

    $('#' + resNumero[i].id).html('<div width="50px">' + enteros6[i] + '</div> ');

}
///////////////////////////////pregunta 5 /////////////////////////////////////////////////////////


function pregunta5() {
    var arr1 = [],
        arr2 = [],
        res = [],
        arr3 = [],
        arr4 = [],
        res2 = [],
        arr5 = [],
        arr6 = [],
        res3 = [],
        arr7 = [],
        arr8 = [],
        res4 = [];
    var Respre5_1 = 0,
        Respre5_2 = 0,
        Respre5_3 = 0,
        Respre5_4 = 0;

    Array.from(document.querySelectorAll('#fila1 td div div')).forEach(elemento => { arr1.push(elemento.textContent) });
    var Snum1 = parseInt(arr1.join(''));
    Array.from(document.querySelectorAll('#fila2 td div div')).forEach(elemento => { arr2.push(elemento.textContent) });
    var Snum2 = parseInt(arr2.join(''));
    Array.from(document.querySelectorAll('#resp1 td input')).forEach(elemento => { res.push(elemento.value) });
    var Rsuma = parseInt(res.join(''));
    var suma = parseInt(Snum1) + parseInt(Snum2);
    if (Rsuma == suma) {
        $('#rsSuma1').css("background", "#00e600");
        $('#rsSuma2').css("background", "#00e600");
        $('#rsSuma3').css("background", "#00e600");
        Respre5_1 = 1;
    } else {
        $('#rsSuma1').css("background", "#ff6666");
        $('#rsSuma2').css("background", "#ff6666");
        $('#rsSuma3').css("background", "#ff6666");
        Respre5_1 = 0;
    }

    Array.from(document.querySelectorAll('#fila3 td div div')).forEach(elemento => { arr3.push(elemento.textContent) });
    var Snum3 = parseInt(arr3.join(''));
    Array.from(document.querySelectorAll('#fila4 td div div')).forEach(elemento => { arr4.push(elemento.textContent) });
    var Snum4 = parseInt(arr4.join(''));
    Array.from(document.querySelectorAll('#resp2 td input')).forEach(elemento => { res2.push(elemento.value) });
    var Rsuma2 = parseInt(res2.join(''));
    var suma2 = parseInt(Snum3) + parseInt(Snum4);
    if (Rsuma2 == suma2) {
        $('#rsSuma4').css("background", "#00e600");
        $('#rsSuma5').css("background", "#00e600");
        $('#rsSuma6').css("background", "#00e600");
        $('#rsSuma7').css("background", "#00e600");
        Respre5_2 = 1;
    } else {
        $('#rsSuma4').css("background", "#ff6666");
        $('#rsSuma5').css("background", "#ff6666");
        $('#rsSuma6').css("background", "#ff6666");
        $('#rsSuma7').css("background", "#ff6666");
        Respre5_2 = 0;
    }

    Array.from(document.querySelectorAll('#fila5 td div div')).forEach(elemento => { arr5.push(elemento.textContent) });
    var Rnum5 = parseInt(arr5.join(''));
    Array.from(document.querySelectorAll('#fila6 td div div')).forEach(elemento => { arr6.push(elemento.textContent) });
    var Rnum6 = parseInt(arr6.join(''));
    Array.from(document.querySelectorAll('#resp3 td input')).forEach(elemento => { res3.push(elemento.value) });
    var Rresta3 = parseInt(res3.join(''));
    var resta3 = parseInt(Rnum5) - parseInt(Rnum6);
    if (Rresta3 == resta3) {
        $('#rsResta1').css("background", "#00e600");
        $('#rsResta2').css("background", "#00e600");
        $('#rsResta3').css("background", "#00e600");
        Respre5_3 = 1;
    } else {
        $('#rsResta1').css("background", "#ff6666");
        $('#rsResta2').css("background", "#ff6666");
        $('#rsResta3').css("background", "#ff6666");
        Respre5_3 = 0;
    }

    Array.from(document.querySelectorAll('#fila7 td div div')).forEach(elemento => { arr7.push(elemento.textContent) });
    var Rnum7 = parseInt(arr7.join(''));
    Array.from(document.querySelectorAll('#fila8 td div div')).forEach(elemento => { arr8.push(elemento.textContent) });
    var Rnum8 = parseInt(arr8.join(''));
    Array.from(document.querySelectorAll('#resp4 td input')).forEach(elemento => { res4.push(elemento.value) });
    var Rresta4 = parseInt(res4.join(''));
    var resta4 = parseInt(Rnum7) - parseInt(Rnum8);
    if (Rresta4 == resta4) {
        $('#rsResta4').css("background", "#00e600");
        $('#rsResta5').css("background", "#00e600");
        $('#rsResta6').css("background", "#00e600");
        $('#rsResta7').css("background", "#00e600");
        Respre5_4 = 1;
    } else {
        $('#rsResta4').css("background", "#ff6666");
        $('#rsResta5').css("background", "#ff6666");
        $('#rsResta6').css("background", "#ff6666");
        $('#rsResta7').css("background", "#ff6666");
        Respre5_4 = 0;
    }
    var Subtotalr5 = parseInt(Respre5_1) + parseInt(Respre5_2) + parseInt(Respre5_3) + parseInt(Respre5_4);
    var Totalr5 = (Subtotalr5 * 1) / 4;
    $('#nota1_5').val(parseFloat(Totalr5).toFixed(2));

}

////////////////////////////////pregunta 6/////////////////////////////////////////////////////



var interesult = [],
    numeroInt = 0,
    interesult2 = [],
    numeroInt2 = 0;

var IntNum = Math.floor(Math.random() * (50 - 1)) + 1;
var h = 1;
for (var h = 0; h <= 6; h++) {

    numeroInt = parseInt(numeroInt) + parseInt(IntNum);
    interesult[h] = numeroInt;

}
document.getElementById('numI1').value = interesult[0];
document.getElementById('numI2').value = interesult[1];
document.getElementById('numI3').value = interesult[4];
document.getElementById('numI4').value = interesult[6];

var IntNum2 = Math.round(Math.random() * (99 - 1) + 1);

var h = 1;
for (var j = 0; j <= 6; j++) {
    numeroInt2 = parseInt(numeroInt2) + parseInt(IntNum2);
    interesult2[j] = numeroInt2;
}
interesult2.sort(function(a, b) { return b - a; });
document.getElementById('numR1').value = interesult2[0];
document.getElementById('numR2').value = interesult2[1];
document.getElementById('numR3').value = interesult2[5];





function pregunta6() {
    var suc = document.getElementById('succ1').value;
    var suc2 = document.getElementById('succ2').value;
    var suc3 = document.getElementById('succ3').value;
    var Res6_1 = 0,
        Res6_2 = 0,
        Res6_3 = 0,
        Res6_4 = 0,
        Res6_5 = 0;
    if (interesult[2] == suc) {
        $('#succ1').addClass('valid')
        Res6_1 = 1;
    } else {
        $('#succ1').addClass('no-valid')

    }
    if (interesult[3] == suc2) {
        $('#succ2').addClass('valid')
        Res6_2 = 1;
    } else {
        $('#succ2').addClass('no-valid')
    }
    if (interesult[5] == suc3) {
        $('#succ3').addClass('valid')
        Res6_3 = 1;
    } else {
        $('#succ3').addClass('no-valid')
    }
    var ResSuc = parseInt(Res6_1) + parseInt(Res6_2) + parseInt(Res6_3);

    var pt = ['+', interesult[0]]
    var ptron = pt.join('');
    var resPtr1 = 0;
    for (var i = 1; i <= 6; i++) {
        var p = $('#ptr' + [i] + '').val();
        if (p == ptron) {
            resPtr1 = parseInt(resPtr1) + 1;
            $('#ptr' + [i] + '').addClass('valid');
            Res6_4 = Res6_4 + 1;

        } else {
            $('#ptr' + [i] + '').removeClass('valid');
            $('#ptr' + [i] + '').addClass('no-valid');



        }

    }


    var succ = document.getElementById('succe1').value;
    var succ2 = document.getElementById('succe2').value;
    var succ3 = document.getElementById('succe3').value;
    var succ4 = document.getElementById('succe4').value;
    var ResPre6_1 = 0,
        ResPre6_2 = 0,
        ResPre6_3 = 0,
        ResPre6_4 = 0;

    if (interesult2[2] == succ) {
        $('#succe1').addClass('valid')
        ResPre6_1 = 1;
    } else {
        $('#succe1').addClass('no-valid')
    }
    if (interesult2[3] == succ2) {
        $('#succe2').addClass('valid')
        ResPre6_2 = 1;
    } else {
        $('#succe2').addClass('no-valid')
    }
    if (interesult2[4] == succ3) {
        $('#succe3').addClass('valid')
        ResPre6_3 = 1;
    } else {
        $('#succe3').addClass('no-valid')
    }
    if (interesult2[6] == succ4) {
        $('#succe4').addClass('valid')
        ResPre6_4 = 1;
    } else {
        $('#succe4').addClass('no-valid')
    }
    var Pr6 = parseInt(ResPre6_1) + parseInt(ResPre6_2) + parseInt(ResPre6_3) + parseInt(ResPre6_4);


    var ResPre6_5 = 0,
        ResPre6_6 = 0;
    var pt2 = ['-', interesult2[6]]
    var ptron2 = pt2.join('');
    var resPtr2 = 0;
    for (var i = 1; i <= 6; i++) {
        var p = $('#patron' + [i] + '').val();
        if (p == ptron2) {
            resPtr2 = parseInt(resPtr2) + 1;
            $('#patron' + [i] + '').addClass('valid');
            ResPre6_5 = ResPre6_5 + 1;

        } else {
            $('#patron' + [i] + '').removeClass('valid');
            $('#patron' + [i] + '').addClass('no-valid');

        }
    }

    var RPregun6 = parseInt(ResSuc) + parseInt(Res6_4) + parseInt(Pr6) + parseInt(ResPre6_5);
    var totalRp6 = (RPregun6 * 1) / 19;
    $('#nota1_6').val(parseFloat(totalRp6).toFixed(2));
}
///////////////////////////////Pregunta 7 /////////////////////////////////////

function pregunt7() {
    var tx1 = document.getElementById('tx1').value;
    var tx2 = document.getElementById('tx2').value;
    var tx3 = document.getElementById('tx3').value;
    var respuesta = 0,
        respuesta1 = 0,
        respuesta2 = 0;
    if ((tx1 == "") || (tx2 == "") || (tx3 == "")) {
        alert("Hay campos vacios");

    } else {
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

    var per10 = parseInt($('span[id=s4]').text());
    var per11 = parseInt($('span[id=s5]').text());
    var per12 = parseInt($('span[id=s6]').text());
    var per13 = parseInt($('span[id=s7]').text());
    var per14 = parseInt($('span[id=s8]').text());

    var reperi = per1 + per2 + per3 + per4;
    var reperi2 = per5 + per6 + per7 + per8 + per9;
    var reperi3 = per10 + per11 + per12 + per13 + per14;
    var resP9_1 = 0,resP9_2 = 0,resP9_3 = 0;


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

    var subRP9= parseInt(resP9_1)+parseInt(resP9_2)+parseInt(resP9_3);
    var tltrp9 = (subRP9*1)/3;
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
    if (txtAng == "recto") {

    }else {

    }
    if (txtAng == "agudo") {

    }else {

    }
    if (txtAng == "llano") {

    }else {

    }
    if (txtAng == "obtuso") {

    }else {

    }

}
