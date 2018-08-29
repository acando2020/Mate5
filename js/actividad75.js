/////////////////////pregunta1//////////////////////////
var act75_1 = [
    ['<div class="col-lg-1">295802</div>' +
        '<div class="col-lg-11">' +
        '<input type="text" id="prg1_1" onKeyUp="this.value=this.value.toLowerCase();" class="form-control" name="">' +
        '<br>' +
        '</div>'
    ],
    ['<div class="col-lg-1">851326</div>' +
        '<div class="col-lg-11">' +
        '<input type="text" id="prg1_2" onKeyUp="this.value=this.value.toLowerCase();" class="form-control" name="">' +
        '<br>' +
        '</div>'
    ],
    ['<div class="col-lg-1">603794</div>' +
        '<div class="col-lg-11">' +
        '<input type="text" id="prg1_3" onKeyUp="this.value=this.value.toLowerCase();" class="form-control" name="">' +
        ' <br>' +
        '</div>'
    ],
];
var pgr1Num = document.getElementsByClassName('prg1');

act75_1.sort(f_randomico);
for (i = 0; i < pgr1Num.length; i++) {

    $('#' + pgr1Num[i].id).html('<div width="50px">' + act75_1[i] + '</div> ');


}

function pregunta1() {
    var prg1_1 = document.getElementById('prg1_1').value;
    var prg1_2 = document.getElementById('prg1_2').value;
    var prg1_3 = document.getElementById('prg1_3').value;
    var nt1 = 0,
        nt2 = 0,
        nt3 = 0;

    if (prg1_1 == "doscientos noventa y cinco mil ochocientos dos") {
        $('#prg1_1').css("background", "#00e600");
        nt1 = 1;

    } else {
        $('#prg1_1').css("background", "#ff6666");

    }

    if ((prg1_2 == "ochocientos cincuenta y un mil trescientos veintiséis") || (prg1_2 == "ochocientos cincuenta y un mil trescientos veintiseis")) {
        $('#prg1_2').css("background", "#00e600");
        nt2 = 1;

    } else {
        $('#prg1_2').css("background", "#ff6666");

    }
    if (prg1_3 == "seiscientos tres mil setecientos noventa y cuatro") {
        $('#prg1_3').css("background", "#00e600");
        nt3 = 1;

    } else {
        $('#prg1_3').css("background", "#ff6666");

    }
    subtotal = parseInt(nt1) + parseInt(nt2) + parseInt(nt3);
    total = (subtotal * 1) / 3;
    $('#nota1_1').val(parseFloat(total).toFixed(2));
}




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

    $('#' + cajasImg[i].id).html('<h4><div id="drag' + [i] + '" draggable="true" ondragstart="drag(event)">' + arreglo[i] + '</div></h4> ');


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

function pregunta2() {
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
    $("#nota1_2").val(total.toFixed(2));
}

//////////////////////pregunta 4//////////////////////////////////////////////////////


var enteros = [];
var enteros2 = [];
var enteros3 = [];
var enteros4 = [];
var enteros5 = [];
var enteros6 = [];

for (var i = 0; i < 10; i++) {
    enteros[i] = Math.round(Math.random() * i) + 1;
    enteros2[i] = Math.round(Math.random() * i) + 1;
}
for (var i = 5; i < 10; i++) {
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
///////////////////////////////pregunta 3 /////////////////////////////////////////////////////////


function pregunta3() {
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
        $('#rsSuma4').css("background", "#00e600");
        $('#rsSuma5').css("background", "#00e600");
        Respre5_1 = 1;
    } else {
        $('#rsSuma1').css("background", "#ff6666");
        $('#rsSuma2').css("background", "#ff6666");
        $('#rsSuma3').css("background", "#ff6666");
        $('#rsSuma4').css("background", "#ff6666");
        $('#rsSuma5').css("background", "#ff6666");
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
        $('#rsSuma6').css("background", "#00e600");
        $('#rsSuma7').css("background", "#00e600");
        $('#rsSuma8').css("background", "#00e600");
        $('#rsSuma9').css("background", "#00e600");
        $('#rsSuma10').css("background", "#00e600");
        Respre5_2 = 1;
    } else {
        $('#rsSuma6').css("background", "#ff6666");
        $('#rsSuma7').css("background", "#ff6666");
        $('#rsSuma8').css("background", "#ff6666");
        $('#rsSuma9').css("background", "#ff6666");
        $('#rsSuma10').css("background", "#ff6666");
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
        $('#rsResta4').css("background", "#00e600");
        $('#rsResta5').css("background", "#00e600");
        Respre5_3 = 1;
    } else {
        $('#rsResta1').css("background", "#ff6666");
        $('#rsResta2').css("background", "#ff6666");
        $('#rsResta3').css("background", "#ff6666");
        $('#rsResta4').css("background", "#ff6666");
        $('#rsResta5').css("background", "#ff6666");
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

        $('#rsResta6').css("background", "#00e600");
        $('#rsResta7').css("background", "#00e600");
        $('#rsResta8').css("background", "#00e600");
        $('#rsResta9').css("background", "#00e600");
        $('#rsResta10').css("background", "#00e600");
        Respre5_4 = 1;
    } else {

        $('#rsResta6').css("background", "#ff6666");
        $('#rsResta7').css("background", "#ff6666");
        $('#rsResta8').css("background", "#ff6666");
        $('#rsResta9').css("background", "#ff6666");
        $('#rsResta10').css("background", "#ff6666");
        Respre5_4 = 0;
    }
    var Subtotalr5 = parseInt(Respre5_1) + parseInt(Respre5_2) + parseInt(Respre5_3) + parseInt(Respre5_4);
    var Totalr5 = (Subtotalr5 * 1) / 4;
    $('#nota1_3').val(parseFloat(Totalr5).toFixed(2));

}
////////////////////////////////pregunta 4/////////////////////////////////////////////////////

function sinEspacios(inputs) {
    $(inputs).on('keypress', function(e) {
        if (e.which == 32)
            return false;
    });
}
sinEspacios(".sinEspacios");

prg4 = [];
for (var i = 0; i < 4; i++) {
    prg4[i] = Math.floor((Math.random() * 900) + 100);
}

var act4Num = document.getElementsByClassName('prg4');
prg4.sort(f_randomico);
for (i = 0; i < act4Num.length; i++) {

    $('#' + act4Num[i].id).html(prg4[i]);

}


var conmut1 = [prg4[1], "+", prg4[0], ];
var conmutativa1 = String(conmut1.join(''));
var sumaconm = parseInt(prg4[0]) + parseInt(prg4[1]);

var conmut2 = [prg4[3], "+", prg4[2], ];
var conmutativa2 = String(conmut2.join(''));

var sumaconm2 = parseInt(prg4[2]) + parseInt(prg4[3]);

function pregunta4() {
    var propiedad1 = document.getElementById('propiedad1').value;
    var total1 = document.getElementById('total1').value;
    var propiedad2 = document.getElementById('propiedad2').value;
    var total2_1 = document.getElementById('total2_1').value;
    var total2_2 = document.getElementById('total2_2').value;
    var propiedad3 = document.getElementById('propiedad3').value;
    var total3_1 = document.getElementById('total3_1').value;
    var total3_2 = document.getElementById('total3_2').value;
    var nt1 = 0,
        nt2 = 0,
        nt3 = 0,
        nt4 = 0,
        nt5 = 0,
        nt6 = 0,
        nt7 = 0,
        nt8 = 0;
    if (propiedad1 == "145+425") {
        $('#propiedad1').css("background", "#00e600");
        nt1 = 1;

    } else {
        $('#propiedad1').css("background", "#ff6666");

    }

    if (total1 == "570") {
        $('#total1').css("background", "#00e600");
        nt2 = 1;

    } else {
        $('#total1').css("background", "#ff6666");

    }

    if (propiedad2 == conmutativa1) {
        $('#propiedad2').css("background", "#00e600");
        nt3 = 1;

    } else {
        $('#propiedad2').css("background", "#ff6666");

    }

    if (total2_1 == sumaconm) {
        $('#total2_1').css("background", "#00e600");
        nt4 = 1;

    } else {
        $('#total2_1').css("background", "#ff6666");

    }

    if (total2_2 == sumaconm) {
        $('#total2_2').css("background", "#00e600");
        nt5 = 1;

    } else {
        $('#total2_2').css("background", "#ff6666");

    }

    if (propiedad3 == conmutativa2) {
        $('#propiedad3').css("background", "#00e600");
        nt6 = 1;

    } else {
        $('#propiedad3').css("background", "#ff6666");

    }

    if (total3_1 == sumaconm2) {
        $('#total3_1').css("background", "#00e600");
        nt7 = 1;

    } else {
        $('#total3_1').css("background", "#ff6666");

    }

    if (total3_2 == sumaconm2) {
        $('#total3_2').css("background", "#00e600");
        nt8 = 1;

    } else {
        $('#total3_2').css("background", "#ff6666");

    }
    var subtotal = parseInt(nt1) + parseInt(nt2) + parseInt(nt3) + parseInt(nt4) + parseInt(nt5) + parseInt(nt6) + parseInt(nt7) + parseInt(nt8);
    var total = (subtotal * 1) / 8;
    $('#nota1_4').val(parseFloat(total).toFixed(2));
}

////////////////////////////////pregunta 5/////////////////////////////////////////////////////


prg5 = [];
for (var i = 0; i < 6; i++) {
    prg5[i] = Math.floor((Math.random() * 900) + 100);
}

var act5Num = document.getElementsByClassName('prg5');
prg5.sort(f_randomico);
for (i = 0; i < act5Num.length; i++) {

    $('#' + act5Num[i].id).html(prg5[i]);

}


var conmut1 = ["(", prg5[0], "+", prg5[1], ")", "-", prg5[2], ];
var conmutativa1 = String(conmut1.join(''));
var sumac = parseInt(prg5[0]) + parseInt(prg5[1]);
var suma1 = [sumac, "-", prg5[2], ]
var sum = String(suma1.join(''));
var sumaconm = parseInt(prg5[0]) + parseInt(prg5[1]) - parseInt(prg5[2]);
////////////////////////////////////////////////////////////////

var conmut2 = ["(", prg5[3], "+", prg5[5], ")", "-", prg5[4], ];
var conmutativa2 = String(conmut2.join(''));
sumaco = parseInt(prg5[3]) + parseInt(prg5[5]);
sumaco1 = [sumaco, "-", prg5[4], ];
sumc = String(sumaco1.join(''));
var sumaconm2 = parseInt(prg5[3]) + parseInt(prg5[5]) - parseInt(prg5[4]);

function pregunta5() {
    var act5_1 = document.getElementById('act5_1').value;
    var act5_2 = document.getElementById('act5_2').value;
    ////////////////////////////////////////////////////////////////
    var act5_3 = document.getElementById('act5_3').value;
    var act5_4 = document.getElementById('act5_4').value;
    var act5_5 = document.getElementById('act5_5').value;
    //////////////////////////////////////////////////////////////
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
    if (act5_1 == "929+40") {
        $('#act5_1').css("background", "#00e600");
        nt1 = 0;

    } else {
        $('#act5_1').css("background", "#ff6666");

    }

    if (act5_2 == "969") {
        $('#act5_2').css("background", "#00e600");
        nt2 = 1;

    } else {
        $('#act5_2').css("background", "#ff6666");

    }
    //////////////////////////////////////////////////////////////

    if (act5_3 == conmutativa1) {
        $('#act5_3').css("background", "#00e600");
        nt3 = 0;

    } else {
        $('#act5_3').css("background", "#ff6666");

    }

    if (act5_4 == sum) {
        $('#act5_4').css("background", "#00e600");
        nt4 = 0;

    } else {
        $('#act5_4').css("background", "#ff6666");

    }

    if (act5_5 == sumaconm) {
        $('#act5_5').css("background", "#00e600");
        nt5 = 1;

    } else {
        $('#act5_5').css("background", "#ff6666");

    }
    //////////////////////////////////////////////////////////

    if (act5_6 == conmutativa2) {
        $('#act5_6').css("background", "#00e600");
        nt6 = 0;

    } else {
        $('#act5_6').css("background", "#ff6666");

    }

    if (act5_7 == sumaconm2) {
        $('#act5_7').css("background", "#00e600");
        nt7 = 0;

    } else {
        $('#act5_7').css("background", "#ff6666");

    }

    if (act5_8 == sumaconm2) {
        $('#act5_8').css("background", "#00e600");
        nt8 = 1;

    } else {
        $('#act5_8').css("background", "#ff6666");

    }
    var subtotal = parseInt(nt1) + parseInt(nt2) + parseInt(nt3) + parseInt(nt4) + parseInt(nt5) + parseInt(nt6) + parseInt(nt7) + parseInt(nt8);
    var total = (subtotal * 1) / 3;
    $('#nota1_5').val(parseFloat(total).toFixed(2));
}

////////////////////////////////pregunta 6/////////////////////////////////////////////////////

function pregunta6() {
    var act6 = document.getElementById('act6').value;
    var nt1 = 0;
    if ((act6 == "$64") || (act6 == "64")) {

        $('#act6').css("background", "#00e600");
        nt1 = 1;


    } else {
        $('#act6').css("background", "#ff6666");

    }
    $('#nota1_6').val(parseFloat(nt1).toFixed(2));
}

////////////////////////////////pregunta 7/////////////////////////////////////////////////////
function pregunta7() {
    var act7_1 = $('#act7_1').prop('checked');
    var act7_2 = $('#act7_2').prop('checked');
    var act7_3 = $('#act7_3').prop('checked');
    var act7_4 = $('#act7_4').prop('checked');
    var nt1 = 0,
        nt2 = 0,
        nt3 = 0,
        nt4 = 0;
    if (act7_1 == true) {
        $('#act7_1_1').css("background", "#00e600");
        nt1 = 0.25;

    } else {
        $('#act7_1_1').css("background", "#ff6666");

    }

    if (act7_2 == true) {
        $('#act7_3_1').css("background", "#00e600");
        nt2 = 0.25;

    } else {
        $('#act7_3_1').css("background", "#ff6666");

    }

    if (act7_3 == true) {
        $('#act7_4_1').css("background", "#00e600");
        nt3 = 0.25;

    } else {
        $('#act7_4_1').css("background", "#ff6666");

    }

    if (act7_4 == true) {
        $('#act7_2_1').css("background", "#00e600");
        nt4 = 0.25;

    } else {
        $('#act7_2_1').css("background", "#ff6666");

    }
    var total = parseFloat(nt1) + parseFloat(nt2) + parseFloat(nt3) + parseFloat(nt4);
    $('#nota1_7').val(parseFloat(total).toFixed(2));
}
////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////
var interesult = [],
    numeroInt = 0,
    interesult2 = [],
    numeroInt2 = 0,
    numeroInt3 = 0;

var interesult3 = [];
var IntNum3 = Math.floor(Math.random() * 50) + 1;
for (var v = 0; v <= 6; v++) {
    numeroInt3 = parseInt(numeroInt3) + parseInt(IntNum3);
    interesult3[v] = numeroInt3;
}
interesult3.sort(function(a, b) { return b - a; });

document.getElementById('numer1').value = interesult3[0];

document.getElementById('ptr8_2').value = interesult3[0];

var suma = Math.floor(Math.random() * 10) + 1;



document.getElementById('numer2').value = parseInt(interesult3[0]) + parseInt(suma);
document.getElementById('ptr8_1').value = parseInt(interesult3[0]) + parseInt(suma);

document.getElementById('ptr8_3').value = parseInt(interesult3[0]) + parseInt(suma);

var resta = Math.floor(Math.random() * 10) + 1;

var numero2 = document.getElementById('numer2').value;

document.getElementById('numer3').value = parseInt(numero2) - parseInt(resta);



document.getElementById('ptr8_4').value = parseInt(numero2) - parseInt(resta);

var numero3 = document.getElementById('numer3').value;

document.getElementById('numer4').value = parseInt(numero3) + parseInt(suma);


var numero4 = document.getElementById('numer4').value;

document.getElementById('numer5').value = parseInt(numero4) - parseInt(resta);

var numero5 = document.getElementById('numer5').value;

document.getElementById('numer6').value = parseInt(numero5) + parseInt(suma);

var numero6 = document.getElementById('numer6').value;

document.getElementById('numer7').value = parseInt(numero6) - parseInt(resta);


function pregunta8() {
    var numer6 = document.getElementById('numer6').value;
    var numer7 = document.getElementById('numer7').value;
    var sr1 = document.getElementById('sr1').value;
    var sr2 = document.getElementById('sr2').value;
    var ptr1 = document.getElementById('ptr1').value;
    var ptr3 = document.getElementById('ptr3').value;
    var ptr5 = document.getElementById('ptr5').value;
    var ptr2 = document.getElementById('ptr2').value;
    var ptr4 = document.getElementById('ptr4').value;
    var ptr6 = document.getElementById('ptr6').value;
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
    if (ptr1 == ptron1) {
        $('#ptr1').css("background", "#00e600");
        nota3 = 1;
    } else {
        $('#ptr1').css("background", "#ff6666");
    }
    if (ptr3 == ptron1) {
        $('#ptr3').css("background", "#00e600");
        nota4 = 1;
    } else {
        $('#ptr3').css("background", "#ff6666");
    }
    if (ptr5 == ptron1) {
        $('#ptr5').css("background", "#00e600");
        nota5 = 1;
    } else {
        $('#ptr5').css("background", "#ff6666");
    }

    if (ptr2 == ptron2) {
        $('#ptr2').css("background", "#00e600");
        nota6 = 1;
    } else {
        $('#ptr2').css("background", "#ff6666");
    }
    if (ptr4 == ptron2) {
        $('#ptr4').css("background", "#00e600");
        nota7 = 1;
    } else {
        $('#ptr4').css("background", "#ff6666");
    }
    if (ptr6 == ptron2) {
        $('#ptr6').css("background", "#00e600");
        nota8 = 1;
    } else {
        $('#ptr6').css("background", "#ff6666");
    }


    var subtotal = parseInt(nota1) + parseInt(nota2) + parseInt(nota3) + parseInt(nota4) + parseInt(nota5) + parseInt(nota6) + parseInt(nota7) + parseInt(nota8);
    var total = (subtotal * 1) / 8;
    $('#nota1_8').val(total.toFixed(2));

}



///////////////////////////////Pregunta 9 /////////////////////////////////////


var resp_cor_len3_act13_p14 = [
    ["líneas secantes oblicuas", "img/i2_p54_act75.jpg"],
    ["ángulo agudo", "img/i3_p54_act75.jpg"],
    ["líneas secantes perpendiculares", "img/i4_p54_act75.jpg"],
    ["cuadrilátero", "img/i5_p54_act75.jpg"],
    ["ángulo recto", "img/i6_p54_act75.jpg"],
    ["líneas paralelas", "img/i7_p54_act75.jpg"],

]
var cajas = document.getElementsByClassName('cajas1');
var loadImg = ['img/i2_p54_act75.jpg', 'img/i3_p54_act75.jpg', 'img/i4_p54_act75.jpg', 'img/i5_p54_act75.jpg', 'img/i6_p54_act75.jpg', 'img/i7_p54_act75.jpg'];
var loadTxt = ['líneas secantes oblicuas', 'ángulo agudo', 'líneas secantes perpendiculares', 'cuadrilátero', 'ángulo recto', 'líneas paralelas'];
var divs = $(".imagenes, .textos");
var cont_resp_cor = {};
var divsImg, divsTxt;
var indice;
var contador_nota = 0;



initElementos2("imagenes", loadImg);
initElementos2("textos", loadTxt);
insertDraggable();
enviarEventosListener("caja_imgn1", "caja_txts1"); //caja1 img y texto
enviarEventosListener("caja_imgn2", "caja_txts2"); //caja1 img y texto
enviarEventosListener("caja_imgn3", "caja_txts3"); //caja1 img y texto
enviarEventosListener("caja_imgn4", "caja_txts4"); //caja1 img y texto
enviarEventosListener("caja_imgn5", "caja_txts5"); //caja1 img y texto
enviarEventosListener("caja_imgn6", "caja_txts6"); //caja1 img y texto


function genIdRandom() {
    //genera un Id Aleatorio en base a milisegundos para que no se repita
    var d = new Date();
    var a = d.getSeconds();
    var b = d.getMilliseconds();

    return a * b;
}

function enviarEventosListener(id, id2) {
    document.getElementById(id).addEventListener('dragstart', function() {
        dragStart(id);
    });
    document.getElementById(id2).addEventListener('drop', function() {
        onDrop(id2, divsImg);
    });
    document.getElementById(id).addEventListener('drop', function() {
        onDropReturn(id);
    });


}

function onDropReturn(id) {
    divsImg = $('#' + id).find("img")[0].alt;
    var objetoLength = Object.keys(cont_resp_cor).length;
    var objComparar = Object.assign({}, cont_resp_cor);

    for (i = 0; i < objetoLength; i++) {

        if (Object.values(objComparar)[i].indexOf(divsImg) != -1) {

            indice = Object.keys(objComparar)[i];
            delete cont_resp_cor[indice];

        }

    }

}

function dragStart(id) {
    divsImg = $('#' + id).find("img")[0].alt;

}

function insertaParOnDrop(id) {
    divsTxt = $('#' + id).find("span").text();

    var prop = Object.keys(cont_resp_cor);

    cont_resp_cor[genIdRandom()] = [divsTxt, divsImg];

}

function onDrop(id, divsImg) {
    var objetoLength = Object.keys(cont_resp_cor).length;
    var contador = 0;
    if (objetoLength == 0) {
        insertaParOnDrop(id);
    } else {
        for (i = 0; i < objetoLength; i++) {
            if (Object.values(cont_resp_cor)[i].indexOf(divsImg) != -1) {
                contador = contador + 1;

            }

        }
        if (contador == 0) {
            insertaParOnDrop(id);
        }
    }
}

function initElementos2(classDiv, arrayElement) { //Funcion para iniciar elementos como imagenes o texto en divs de acuerdo a un array
    var cajas = document.getElementsByClassName(classDiv);
    arrayElement.sort(f_randomico);
    for (i = 0; i < cajas.length; i++) {
        if (classDiv == "imagenes") {
            $('#' + cajas[i].id).html('<img class="center"  src="' + arrayElement[i] + '" alt="' + arrayElement[i] + '"   id="img' + [i] + '">');
        } else if (classDiv == "textos") {
            $('#' + cajas[i].id).html('<span class= "cajas-cuentos"  id="' + arrayElement[i] + '">' + arrayElement[i] + '</span>');
        }

    }
}

function insertDraggable() {


    for (i = 0; i < divs.length; i++) {
        $('#' + divs[i].id).attr({
            "ondrop": "drop(event)",
            "ondragover": "allowDrop(event)"
        });
    }
    for (i = 0; i < divs.find("img").length; i++) {
        $('#img' + i).attr({
            "draggable": "true",
            "ondragstart": "drag(event)"
        });

    }
    /*     for(i=0; i< divs.find("span").length; i++){
            $('#'+divs.find("span")[i].id).attr({
                "draggable" : "true",
                "ondragstart" : "drag(event)"
            });

        } */





}

function contarRespCorrectaDnD() {
    var arrayCorrestarColorear = [];

    //i=respcorrectas j= a comprobar
    for (var i = 0; i < Object.values(resp_cor_len3_act13_p14).length; i++) {
        for (j = 0; j < Object.values(cont_resp_cor).length; j++) {
            if (JSON.stringify(Object.values(resp_cor_len3_act13_p14)[i]) === JSON.stringify(Object.values(cont_resp_cor)[j])) {
                contador_nota = contador_nota + 1;
                arrayCorrestarColorear.push(Object.values(cont_resp_cor)[j][0]);
            } else {
                $('.textos').addClass('incorrecto')
            }
        }
    }
    for (i = 0; i < arrayCorrestarColorear.length; i++) {
        var id = document.getElementById(arrayCorrestarColorear[i]).parentNode.id;
        document.getElementById(id).style.background = '#65CE6D';


    }
    calcularNotaGeneral(
        5,
        contador_nota,
        Object.keys(cont_resp_cor).length,
        1);

}

function calcularNotaGeneral(total_nota, r_correctas, op_seleccionadas, total_preguntas) {
    var result_sobre = 1;
    var calculo = 0;
    //var tiempoReload=4000; //en milisegundos

    if (op_seleccionadas < total_nota) {
        alert('Debe escoger ' + total_nota + ' respuestas de la pregunta 9');

    } else {
        var calculo = (result_sobre * r_correctas) / total_nota;


    }

    $('#nota1_9').val(calculo.toFixed(2));
    //setTimeout('document.location.reload()',tiempoReload)

}



//////////////////////////pregunta 10////////////////////////////
act10 = [
    ['<img src="img/i8_p54_act75.jpg" class="img-responsive">' +
        '<input style="text-align: center;" type="text" id="act10_1" class="sinEspacios form-control text-lowercase" name="">' +
        '<br>'
    ],
    ['<img src="img/i9_p54_act75.jpg" class="img-responsive">' +
        '<input style="text-align: center;" type="text" id="act10_2" class="sinEspacios form-control text-lowercase" name="">' +
        '<br>'
    ],
    [' <img src="img/i10_p54_act75.jpg" class="img-responsive">' +
        '<input style="text-align: center;" type="text" id="act10_3" class="sinEspacios form-control text-lowercase" name="">' +
        '<br>'
    ],
    ['<img src="img/i11_p54_act75.jpg" class="img-responsive">' +
        '<input style="text-align: center;" type="text" id="act10_4" class="sinEspacios form-control text-lowercase" name="">' +
        '<br>'
    ],
    ['<img src="img/i12_p54_act75.jpg" class="img-responsive">' +
        '<input style="text-align: center;" type="text" id="act10_5" class="sinEspacios form-control text-lowercase" name="">' +
        '<br>'
    ],
]

var pgr10Num = document.getElementsByClassName('prg10');

act10.sort(f_randomico);
for (i = 0; i < pgr10Num.length; i++) {

    $('#' + pgr10Num[i].id).html('<div width="50px">' + act10[i] + '</div> ');


}

function pregunta10() {
    var act10_1 = document.getElementById('act10_1').value.toLowerCase();
    var act10_2 = document.getElementById('act10_2').value.toLowerCase();
    var act10_3 = document.getElementById('act10_3').value.toLowerCase();
    var act10_4 = document.getElementById('act10_4').value.toLowerCase();
    var act10_5 = document.getElementById('act10_5').value.toLowerCase();
    var nt1 = 0,
        nt2 = 0,
        nt3 = 0,
        nt4 = 0,
        nt5 = 0;

    if ((act10_1 == "4lados") || (act10_1 == "4")) {
        nt1 = 0.20;
        $('#act10_1').css("background", "#00e600");

    } else {
        $('#act10_1').css("background", "#ff6666");

    }


    if ((act10_2 == "5lados") || (act10_2 == "5")) {
        nt2 = 0.20;
        $('#act10_2').css("background", "#00e600");

    } else {
        $('#act10_2').css("background", "#ff6666");

    }


    if ((act10_3 == "3lados") || (act10_3 == "3")) {
        nt3 = 0.20;
        $('#act10_3').css("background", "#00e600");

    } else {
        $('#act10_3').css("background", "#ff6666");

    }
    if ((act10_4 == "6lados") || (act10_4 == "6")) {
        nt4 = 0.20;
        $('#act10_4').css("background", "#00e600");

    } else {
        $('#act10_4').css("background", "#ff6666");

    }
    if ((act10_5 == "7lados") || (act10_5 == "7")) {
        nt5 = 0.20;
        $('#act10_5').css("background", "#00e600");

    } else {
        $('#act10_5').css("background", "#ff6666");

    }

    var total = parseFloat(nt1) + parseFloat(nt2) + parseFloat(nt3) + parseFloat(nt4) + parseFloat(nt5);
    $('#nota1_10').val(parseFloat(total).toFixed(2));

}
//////////////////////////////pregunta 11////////////////////////////////////////
var act11 = [
    ['Estoy formada por una línea curva cerrada.'],
    ['Estoy formado por tres líneas que se cortan.'],
    ['Estoy formado por cuatro líneas que se cortan.'],
]


var act11Txt = document.getElementsByClassName('act11txt');

act11.sort(f_randomico);
for (i = 0; i < act11Txt.length; i++) {

    $('#' + act11Txt[i].id).html('<h4><div id="dra' + [i] + '" draggable="true" ondragstart="drag2(event)">' + act11[i] + '</div></h4> ');


}


var act11_1 = [
    ['<img class="img-responsive" src="img/i13_p54_act75.jpg"></img><div id="act11_1" class="cajas1" ondrop="drop2(event)" ondragover="allowDrop2(event)"></div>'],
    ['<img class="img-responsive" src="img/i14_p54_act75.jpg"></img><div id="act11_2" class="cajas1" ondrop="drop2(event)" ondragover="allowDrop2(event)"></div>'],
    ['<img class="img-responsive" src="img/i15_p54_act75.jpg"></img><div id="act11_3" class="cajas1" ondrop="drop2(event)" ondragover="allowDrop2(event)"></div>'],
]


var act11_1Txt = document.getElementsByClassName('act11_1txt');

act11_1.sort(f_randomico);
for (i = 0; i < act11_1Txt.length; i++) {

    $('#' + act11_1Txt[i].id).html('<h4><div id="dra' + [i] + '" draggable="true" ondragstart="drag2(event)">' + act11_1[i] + '</div></h4> ');


}

function pregunta11() {
    var nt1 = 0,
        nt2 = 0,
        nt3 = 0;

    if ($('#act11_1').children("div").html() == "Estoy formado por tres líneas que se cortan.") {
        nt1 = 1;
        $('#act11_1').css("background", "#00e600");

    } else {
        $('#act11_1').css("background", "#ff6666");

    }

    if ($('#act11_2').children("div").html() == "Estoy formada por una línea curva cerrada.") {
        nt2 = 1;
        $('#act11_2').css("background", "#00e600");

    } else {
        $('#act11_2').css("background", "#ff6666");

    }
    if ($('#act11_3').children("div").html() == "Estoy formado por cuatro líneas que se cortan.") {
        nt3 = 1;
        $('#act11_3').css("background", "#00e600");

    } else {
        $('#act11_3').css("background", "#ff6666");

    }
    var subtotal = parseInt(nt1) + parseInt(nt2) + parseInt(nt3);
    var total = (subtotal * 1) / 3;
    $('#nota1_11').val(parseFloat(total).toFixed(2));
}


//////////////////////////////////prergunta 12/////////////////////////////////////////////////////////

var act12 = [
    ['<img class="img-responsive" src="img/i16_p54_act75.jpg"></img> <input type="text" class="form-control sinEspacios text-lowercase" style="text-align: center;" id="act12_1" name="">'],
    ['<img class="img-responsive" src="img/i17_p54_act75.jpg"></img> <input type="text" class="form-control sinEspacios text-lowercase" style="text-align: center;" id="act12_2" name="">'],
    ['<img class="img-responsive" src="img/i18_p54_act75.jpg"></img> <input type="text" class="form-control sinEspacios text-lowercase" style="text-align: center;" id="act12_3" name="">'],
    ['<img class="img-responsive" src="img/i19_p54_act75.jpg"></img> <input type="text" class="form-control sinEspacios text-lowercase" style="text-align: center;" id="act12_4" name="">'],
]


var act12Txt = document.getElementsByClassName('act12txt');

act12.sort(f_randomico);
for (i = 0; i < act12Txt.length; i++) {

    $('#' + act12Txt[i].id).html('<h4><div id="dra' + [i] + '" draggable="true" ondragstart="drag2(event)">' + act12[i] + '</div></h4> ');


}

function pregunta12() {
    var act12_1 = document.getElementById('act12_1').value.toLowerCase();
    var act12_2 = document.getElementById('act12_2').value.toLowerCase();
    var act12_3 = document.getElementById('act12_3').value.toLowerCase();
    var act12_4 = document.getElementById('act12_4').value.toLowerCase();
    var nt1 = 0,
        nt2 = 0,
        nt3 = 0,
        nt4 = 0;
    if (act12_1 == "circunferencia") {
        $('#act12_1').css("background", "#00e600");
        nt1 = 0.25;

    } else {
        $('#act12_1').css("background", "#ff6666");


    }

    if ((act12_2 == "círculo") || (act12_2 == "circulo")) {
        $('#act12_2').css("background", "#00e600");
        nt2 = 0.25;

    } else {
        $('#act12_2').css("background", "#ff6666");


    }
    if (act12_3 == "circunferencia") {
        $('#act12_3').css("background", "#00e600");
        nt3 = 0.25;

    } else {
        $('#act12_3').css("background", "#ff6666");


    }
    if ((act12_4 == "círculo") || (act12_4 == "circulo")) {
        $('#act12_4').css("background", "#00e600");
        nt4 = 0.25;

    } else {
        $('#act12_4').css("background", "#ff6666");


    }
    var total = parseFloat(nt1) + parseFloat(nt2) + parseFloat(nt3) + parseFloat(nt4);
    $('#nota1_12').val(parseFloat(total).toFixed(2));
}


function calcularTotal() {

    pregunta1();
    pregunta2();
    pregunta3();
    pregunta4();
    pregunta5();
    pregunta6();
    pregunta7();
    pregunta8();
    contarRespCorrectaDnD();
    pregunta10();
    pregunta11();
    pregunta12();
    var nota11_1 = document.getElementById('nota1_1').value;
    var nota11_2 = document.getElementById('nota1_2').value;
    var nota11_3 = document.getElementById('nota1_3').value;
    var nota11_4 = document.getElementById('nota1_4').value;
    var nota11_5 = document.getElementById('nota1_5').value;
    var nota11_6 = document.getElementById('nota1_6').value;
    var nota11_7 = document.getElementById('nota1_7').value;
    var nota11_8 = document.getElementById('nota1_8').value;
    var nota11_9 = document.getElementById('nota1_9').value;
    var nota11_10 = document.getElementById('nota1_10').value;
    var nota11_11 = document.getElementById('nota1_11').value;
    var nota11_12 = document.getElementById('nota1_12').value;


    var SuperTotal = parseFloat(nota11_1) + parseFloat(nota11_2) + parseFloat(nota11_3) + parseFloat(nota11_4) + parseFloat(nota11_5) + parseFloat(nota11_6) + parseFloat(nota11_7) + parseFloat(nota11_8) + parseFloat(nota11_9) + parseFloat(nota11_10) + parseFloat(nota11_11) + parseFloat(nota11_12);
    var total = (SuperTotal * 10) / 12;
    $('#txtNota').html(total.toFixed(2));
    document.getElementById('bt_comprobar').disabled = true;
    $('input').attr("disabled", true);
    $('#txtAlumno').attr("disabled", false);





}
