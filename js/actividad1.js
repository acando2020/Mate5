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

document.getElementById('bt_comprobar').addEventListener('click', function() {
    //calcLinkActivity(valuesAdic.selectorsAct1,respCor.preg1,valuesAdic.selectorsAct1[1],'txtNota',10);
    var selector = [];
    selector.push(valuesAdic.selectorsAct2[1]);
    calcMultiLinkActivity(selector, respCor.preg2, valuesAdic.selectorsAct2[1], 'txtNota', 10, true);
});

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



function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("Text", ev.target.id);
}

function drop(ev) {
    var data = ev.dataTransfer.getData("Text");
    ev.target.appendChild(document.getElementById(data));
    ev.preventDefault();
}







function verificarNum() {
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
        $('#div1').removeClass('no-valid')
    }
    if ($('td#div2').children("div").html() == ordenado[1]) {
        nota2 = 1;
        $('#div2').addClass('valid')
    } else {
        $('#div2').removeClass('no-valid')
    }
    if ($('td#div3').children("div").html() == ordenado[2]) {
        nota3 = 1;
        $('#div3').addClass('valid')
    } else {
        $('#div3').removeClass('no-valid')
    }
    if ($('td#div4').children("div").html() == ordenado[3]) {
        nota4 = 1;
        $('#div4').addClass('valid')
    } else {
        $('#div4').removeClass('no-valid')
    }
    if ($('td#div5').children("div").html() == ordenado[4]) {
        nota5 = 1;
        $('#div5').addClass('valid')
    } else {
        $('#div5').removeClass('no-valid')
    }
    if ($('td#div6').children("div").html() == ordenado[5]) {
        nota6 = 1;
        $('#div6').addClass('valid')
    } else {
        $('#div6').removeClass('no-valid')
    }
    var subtotal = parseInt(nota) + parseInt(nota2) + parseInt(nota3) + parseInt(nota4) + parseInt(nota5) + parseInt(nota6);
    var total = (subtotal * 1) / 6;
    alert(total.toFixed(2));
}

//////////////////////pregunta 4//////////////////////////////////////////////////////
function comparar() {
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

    if (signo == "=") {
        if (num1 == num2) {
            nt = 10;
            $('#n1').css("background", "#00e600");

        } else {
            $('#n1').css("background", "#ff6666");

        }
    } else if (signo == ">") {
        if (num1 > num2) {
            nt = 10;
            $('#n1').css("background", "#00e600");
        } else {
            $('#n1').css("background", "#ff6666");

        }


    } else if (signo == "<") {
        if (num1 < num2) {
            nt = 10;
            $('#n1').css("background", "#00e600");

        } else {
            $('#n1').css("background", "#ff6666");

        }
    }
    ///////////////////////2//////////////////////////////
    if (signo2 == "=") {
        if (num3 == nu42) {
            nt2 = 10;
            $('#n2').css("background", "#00e600");

        } else {
            $('#n2').css("background", "#ff6666");

        }
    } else if (signo2 == ">") {
        if (num3 > num4) {
            nt2 = 10;
            $('#n2').css("background", "#00e600");
        } else {
            $('#n2').css("background", "#ff6666");

        }


    } else if (signo2 == "<") {
        if (num3 < num4) {
            nt2 = 10;
            $('#n2').css("background", "#00e600");

        } else {
            $('#n2').css("background", "#ff6666");
        }
    }
    //////////////////////3//////////////////////////
    if (signo3 == "=") {
        if (num5 == num6) {
            nt3 = 10;
            $('#n3').css("background", "#00e600");

        } else {
            $('#n3').css("background", "#ff6666");

        }
    } else if (signo3 == ">") {
        if (num5 > num6) {
            nt3 = 10;
            $('#n3').css("background", "#00e600");
        } else {
            $('#n3').css("background", "#ff6666");

        }


    } else if (signo3 == "<") {
        if (num5 < num6) {
            nt3 = 10;
            $('#n3').css("background", "#00e600");

        } else {
            $('#n3').css("background", "#ff6666");

        }
    }
    ////////////////////4/////////////////////////////
    if (signo4 == "=") {
        if (num7 == num8) {
            nt4 = 10;
            $('#n4').css("background", "#00e600");

        } else {
            $('#n4').css("background", "#ff6666");

        }
    } else if (signo4 == ">") {
        if (num7 > num8) {
            nt4 = 10;
            $('#n4').css("background", "#00e600");
        } else {
            $('#n4').css("background", "#ff6666");

        }


    } else if (signo4 == "<") {
        if (num7 < num8) {
            nt4 = 10;
            $('#n4').css("background", "#00e600");

        } else {
            $('#n4').css("background", "#ff6666");

        }
    }
    ////////////////////5////////////////////////
    if (signo5 == "=") {
        if (num9 == num10) {
            nt5 = 10;
            $('#n5').css("background", "#00e600");

        } else {
            $('#n5').css("background", "#ff6666");

        }
    } else if (signo5 == ">") {
        if (num9 > num10) {
            nt5 = 10;
            $('#n5').css("background", "#00e600");
        } else {
            $('#n5').css("background", "#ff6666");

        }


    } else if (signo5 == "<") {
        if (num9 < num10) {
            nt5 = 10;
            $('#n5').css("background", "#00e600");

        } else {
            $('#n5').css("background", "#ff6666");

        }
    }
    /////////////////////////////////////////////////
    if (signo6 == "=") {
        if (num11 == num12) {
            nt6 = 10;
            $('#n6').css("background", "#00e600");

        } else {
            $('#n6').css("background", "#ff6666");

        }
    } else if (signo6 == ">") {
        if (num11 > num12) {
            nt6 = 10;
            $('#n6').css("background", "#00e600");
        } else {
            $('#n6').css("background", "#ff6666");

        }


    } else if (signo6 == "<") {
        if (num11 < num12) {
            nt6 = 10;
            $('#n6').css("background", "#00e600");

        } else {
            $('#n6').css("background", "#ff6666");
        }
    }
    var suma = parseInt(nt) + parseInt(nt2) + parseInt(nt3) + parseInt(nt4) + parseInt(nt5) + parseInt(nt6);
    alert(suma);

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


function Sumas() {
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
    } else {
        $('#rsSuma1').css("background", "#ff6666");
        $('#rsSuma2').css("background", "#ff6666");
        $('#rsSuma3').css("background", "#ff6666");
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
    } else {
        $('#rsSuma4').css("background", "#ff6666");
        $('#rsSuma5').css("background", "#ff6666");
        $('#rsSuma6').css("background", "#ff6666");
        $('#rsSuma7').css("background", "#ff6666");
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
    } else {
        $('#rsResta1').css("background", "#ff6666");
        $('#rsResta2').css("background", "#ff6666");
        $('#rsResta3').css("background", "#ff6666");
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
    } else {
        $('#rsResta4').css("background", "#ff6666");
        $('#rsResta5').css("background", "#ff6666");
        $('#rsResta6').css("background", "#ff6666");
        $('#rsResta7').css("background", "#ff6666");
    }

}

////////////////////////////////pregunta 7/////////////////////////////////////////////////////



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





function verificarIntervalos() {
    var suc = document.getElementById('succ1').value;
    var suc2 = document.getElementById('succ2').value;
    var suc3 = document.getElementById('succ3').value;
    if (interesult[2] == suc) {
        $('#succ1').addClass('valid')
    } else {
        $('#succ1').addClass('no-valid')
    }
    if (interesult[3] == suc2) {
        $('#succ2').addClass('valid')
    } else {
        $('#succ2').addClass('no-valid')
    }
    if (interesult[5] == suc3) {
        $('#succ3').addClass('valid')
    } else {
        $('#succ3').addClass('no-valid')
    }
    var pt = ['+', interesult[0]]
    var ptron = pt.join('');
    var resPtr1 = 0;
    for (var i = 1; i <= 6; i++) {
        var p = $('#ptr' + [i] + '').val();
        if (p == ptron) {
            resPtr1 = parseInt(resPtr1) + 1;
            $('#ptr' + [i] + '').addClass('valid');

        } else {
            $('#ptr' + [i] + '').removeClass('valid');
            $('#ptr' + [i] + '').addClass('no-valid');

        }
    }

}
