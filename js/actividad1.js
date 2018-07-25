var titulos = 'exploro';
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


var sum = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var sumaNum = document.getElementsByClassName('sum');
sum.sort(f_randomico);
for (i = 0; i < sumaNum.length; i++) {

        $('#' + sumaNum[i].id).html('<div width="50px">' + sum[i] + '</div> ');

}
///////////////////////////////pregunta 5 /////////////////////////////////////////////////////////

var enteros = [];

var i = 1;


for (var i = 0; i <= 20; i++) {
    enteros[i] = Math.round(Math.random() * i)+1;
}

function Sumas() {
    var arr1 = [],
        arr2 = [],
        res = [];

    Array.from(document.querySelectorAll('#fila1 td div div')).forEach(elemento => { arr1.push(elemento.textContent) });
    var Snum1 = parseInt(arr1.join(''));
    Array.from(document.querySelectorAll('#fila2 td div div')).forEach(elemento => { arr2.push(elemento.textContent) });
    var Snum2 = parseInt(arr2.join(''));
    Array.from(document.querySelectorAll('#resp1 td input')).forEach(elemento => { res.push(elemento.value) });
    var Rsuma = parseInt(res.join(''));
    var suma = parseInt(Snum1) + parseInt(Snum2);
    if (Rsuma == suma) {
        alert("bien");
    } else {
        alert("fracasaste")
    }

}
