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
    var total = parseFloat(nt1)+parseFloat(nt2)+parseFloat(nt3)+parseFloat(nt4);
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
    if (ptr1 == ptron1) {
        $('#ptr1').css("background", "#00e600");
        nota3 = 1;
    } else {
        $('#ptr1').css("background", "#ff6666");
    }
    if (ptr3 == ptron1) {
        $('#ptr3').css("background", "#00e600");
        nota3 = 1;
    } else {
        $('#ptr3').css("background", "#ff6666");
    }
    if (ptr5 == ptron1) {
        $('#ptr5').css("background", "#00e600");
        nota3 = 1;
    } else {
        $('#ptr5').css("background", "#ff6666");
    }

    if (ptr2 == ptron2) {
        $('#ptr2').css("background", "#00e600");
        nota4 = 1;
    } else {
        $('#ptr2').css("background", "#ff6666");
    }
    if (ptr4 == ptron2) {
        $('#ptr4').css("background", "#00e600");
        nota4 = 1;
    } else {
        $('#ptr4').css("background", "#ff6666");
    }
    if (ptr6 == ptron2) {
        $('#ptr6').css("background", "#00e600");
        nota4 = 1;
    } else {
        $('#ptr6').css("background", "#ff6666");
    }


    var nota39_2 = parseInt(nota1) + parseInt(nota2) + parseInt(nota3) + parseInt(nota4);
    $('#nota3').val(nota39_2.toFixed(2));

}



///////////////////////////////Pregunta 7 /////////////////////////////////////

function pregunt() {
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

function pregunta() {
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

function pregunta(argument) {
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
function pregunta1() {
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
