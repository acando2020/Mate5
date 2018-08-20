var act13 = [];
for (var i = 0; i < 26; i++) {
    act13[i] = Math.floor(Math.random() * 5) + 5;

}

var sumaNum = document.getElementsByClassName('sut');
act13.sort(f_randomico);
for (i = 0; i < sumaNum.length; i++) {

    $('#' + sumaNum[i].id).html('<span width="50px">' + act13[i] + '</span> ');

}

var act29 = [];
for (var i = 0; i < 26; i++) {
    act29[i] = Math.floor(Math.random() * 5) + 1;

}

var sumaNum = document.getElementsByClassName('dif');
act29.sort(f_randomico);
for (i = 0; i < sumaNum.length; i++) {

    $('#' + sumaNum[i].id).html('<span width="50px">' + act29[i] + '</span> ');

}


function pregunta1() {
    //////////////primera suma///////////////////////////////
    var arr1 = [],
        arr2 = [],
        arrtotal = [];
    Array.from(document.querySelectorAll('#resta1_1 td div span')).forEach(elemento => { arr1.push(elemento.textContent) });
    var num1 = parseInt(arr1.join(''));

    Array.from(document.querySelectorAll('#resta1_2 td div span')).forEach(elemento => { arr2.push(elemento.textContent) });
    var num2 = parseInt(arr2.join(''));

    Array.from(document.querySelectorAll('#respuesta1 td input')).forEach(elemento => { arrtotal.push(elemento.value) });
    var resta = parseInt(arrtotal.join(''));

    var restaTotal = parseInt(num1) - parseInt(num2);
    var Rresta1 = 0,
        Rresta2 = 0,
        Rresta3 = 0,
        Rresta4 = 0;
    if (resta == restaTotal) {
        Rresta1 = 2.5;
        $('#R1').css("background", "#00e600");
        $('#R2').css("background", "#00e600");
        $('#R3').css("background", "#00e600");
        $('#R4').css("background", "#00e600");
        $('#R5').css("background", "#00e600");
        $('#R6').css("background", "#00e600");
        $('#R7').css("background", "#00e600");
    } else {
        $('#R1').css("background", "#ff6666");
        $('#R2').css("background", "#ff6666");
        $('#R3').css("background", "#ff6666");
        $('#R4').css("background", "#ff6666");
        $('#R5').css("background", "#ff6666");
        $('#R6').css("background", "#ff6666");
        $('#R7').css("background", "#ff6666");

    }

    ////////////////////////segunda suma///////////////////
    var arr3 = [],
        arr4 = [],
        arrtotal2 = [];
    Array.from(document.querySelectorAll('#resta2_1 td div span')).forEach(elemento => { arr3.push(elemento.textContent) });
    var num3 = parseInt(arr3.join(''));

    Array.from(document.querySelectorAll('#resta2_2 td div span')).forEach(elemento => { arr4.push(elemento.textContent) });
    var num4 = parseInt(arr4.join(''));

    Array.from(document.querySelectorAll('#respuesta2 td input')).forEach(elemento => { arrtotal2.push(elemento.value) });
    var resta2 = parseInt(arrtotal2.join(''));

    var restaTotal2 = parseInt(num3) + parseInt(num4);


    if (resta2 == restaTotal2) {
        Rresta2 = 2.5;
        $('#T1').css("background", "#00e600");
        $('#T2').css("background", "#00e600");
        $('#T3').css("background", "#00e600");
        $('#T4').css("background", "#00e600");
        $('#T5').css("background", "#00e600");
        $('#T6').css("background", "#00e600");
        $('#T7').css("background", "#00e600");
        $('#T8').css("background", "#00e600");
    } else {
        $('#T1').css("background", "#ff6666");
        $('#T2').css("background", "#ff6666");
        $('#T3').css("background", "#ff6666");
        $('#T4').css("background", "#ff6666");
        $('#T5').css("background", "#ff6666");
        $('#T6').css("background", "#ff6666");
        $('#T7').css("background", "#ff6666");
        $('#T8').css("background", "#ff6666");


    }
    /////////////////tercera suma//////////////////////////

    var arr5 = [],
        arr6 = [],
        arrtotal3 = [];
    Array.from(document.querySelectorAll('#resta3_1 td div span')).forEach(elemento => { arr5.push(elemento.textContent) });
    var num5 = parseInt(arr5.join(''));

    Array.from(document.querySelectorAll('#resta3_2 td div span')).forEach(elemento => { arr6.push(elemento.textContent) });
    var num6 = parseInt(arr6.join(''));

    Array.from(document.querySelectorAll('#respuesta3 td input')).forEach(elemento => { arrtotal3.push(elemento.value) });
    var resta3 = parseInt(arrtotal3.join(''));

    var restaTotal3 = parseInt(num5) - parseInt(num6);
    if (resta3 == restaTotal3) {
        Rresta3 = 2.5;
        $('#V1').css("background", "#00e600");
        $('#V2').css("background", "#00e600");
        $('#V3').css("background", "#00e600");
        $('#V4').css("background", "#00e600");
        $('#V5').css("background", "#00e600");
        $('#V6').css("background", "#00e600");
        $('#V7').css("background", "#00e600");
    } else {
        $('#V1').css("background", "#ff6666");
        $('#V2').css("background", "#ff6666");
        $('#V3').css("background", "#ff6666");
        $('#V4').css("background", "#ff6666");
        $('#V5').css("background", "#ff6666");
        $('#V6').css("background", "#ff6666");
        $('#V7').css("background", "#ff6666");
    }

    ////////////////////////////////////resta 4//////////////////////////////////
    var arr7 = [],
        arr8 = [],
        arrtotal4 = [];
    Array.from(document.querySelectorAll('#resta4_1 td div span')).forEach(elemento => { arr7.push(elemento.textContent) });
    var num7 = parseInt(arr7.join(''));

    Array.from(document.querySelectorAll('#resta4_2 td div span')).forEach(elemento => { arr8.push(elemento.textContent) });
    var num8 = parseInt(arr8.join(''));

    Array.from(document.querySelectorAll('#respuesta4 td input')).forEach(elemento => { arrtotal4.push(elemento.value) });
    var resta4 = parseInt(arrtotal4.join(''));

    var restaTotal4 = parseInt(num7) + parseInt(num8);
    if (resta4 == restaTotal4) {
        Rresta4 = 2.5;
        $('#W1').css("background", "#00e600");
        $('#W2').css("background", "#00e600");
        $('#W3').css("background", "#00e600");
        $('#W4').css("background", "#00e600");
        $('#W5').css("background", "#00e600");
        $('#W6').css("background", "#00e600");
        $('#W7').css("background", "#00e600");
    } else {
        $('#W1').css("background", "#ff6666");
        $('#W2').css("background", "#ff6666");
        $('#W3').css("background", "#ff6666");
        $('#W4').css("background", "#ff6666");
        $('#W5').css("background", "#ff6666");
        $('#W6').css("background", "#ff6666");
        $('#W7').css("background", "#ff6666");
    }



    var total = parseFloat(Rresta1) + parseFloat(Rresta2) + parseFloat(Rresta3) + parseFloat(Rresta4);
    $('#txtNota').html(total.toFixed(2));
    $('#nota1_1').val(parseFloat(total).toFixed(2));
}
///////////////////////////pregunta 2//////////////////////////////////////
document.getElementById('nota1_2').addEventListener('keypress', () => {
    validNumero(0, 1, 1);
});
document.getElementById('nota1_2').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_2'), 1)
});
////////////////////////pregunta 3////////////////////////////////////////////////

function sinEspacios(inputs) {
    $(inputs).on('keypress', function(e) {
        if (e.which == 32)
            return false;
    });
}
sinEspacios(".input");

var act74 = [];
for (var i = 0; i < 3; i++) {
    act74[i] = Math.floor(Math.random() * 999) + 1;

}




var sumaNum = document.getElementsByClassName('prg3');
act74.sort(f_randomico);
for (i = 0; i < sumaNum.length; i++) {

    $('#' + sumaNum[i].id).html('<span width="50px">' + act74[i] + '</span> ');

}

function pregunta3() {
    var suma = parseInt(act74[0]) + parseInt(act74[1]) + parseInt(act74[2]);
    var Totalprg3 = document.getElementById('Totalprg3').value;
    var nt3 = 0;
    if (suma == Totalprg3) {
        nt3 = 1;
        $('#Totalprg3').css("background", "#00e600");

    } else {
        $('#Totalprg3').css("background", "#ff6666");

    }

    $('#nota1_3').val(parseFloat(nt3).toFixed(2));


}

///////////////////////////pregunta 4//////////////////////////////////////
document.getElementById('nota1_4').addEventListener('keypress', () => {
    validNumero(0, 1, 1);
});
document.getElementById('nota1_4').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_4'), 1)
});
/////////////////////////////pregunta 5////////////////////////////////////////////
function sinEspacios(inputs) {
    $(inputs).on('keypress', function(e) {
        if (e.which == 32)
            return false;
    });
}
sinEspacios(".sinespacios");

var act74_3 = [];
for (var i = 0; i < 6; i++) {
    act74_3[i] = Math.floor(Math.random() * 9) + 1;

}
var prg4 = parseInt(act74_3.join(''));
$('#sNum1').html(prg4);

var pos = [act74_3[0], "cm", "+", act74_3[1], "dm", "+", act74_3[2], "um", "+", act74_3[3], "c", "+", act74_3[4], "d", "+", act74_3[5], "u", ];
var posicional = String(pos.join(''));

var equi1 = act74_3[0] * 100000;
var equi2 = act74_3[1] * 10000;
var equi3 = act74_3[2] * 1000;
var equi4 = act74_3[3] * 100;
var equi5 = act74_3[4] * 10;
var equi6 = act74_3[5] * 1;
var equi = [equi1, "+", equi2, "+", equi3, "+", equi4, "+", equi4, "+", equi5, "+", equi6, ];
var equivalente = String(equi.join(''));

function pregunta5() {
    var act4Posicional = document.getElementById('act4Posicional').value;
    var act4Equivalencia = document.getElementById('act4Equivalencia').value;
    var nt1 = 0,
        nt2 = 0;
    if (posicional == act4Posicional) {
        $('#act4Posicional').css("background", "#00e600");
        nt1 = 0.5;

    } else {
        $('#act4Posicional').css("background", "#ff6666");

    }

    if (equivalente == act4Equivalencia) {
        $('#act4Equivalencia').css("background", "#00e600");
        nt2 = 0.5;

    } else {
        $('#act4Equivalencia').css("background", "#ff6666");

    }
    var total = parseFloat(nt1) + parseFloat(nt2);

    $('#nota1_5').val(parseFloat(total).toFixed(2));


}
/////////////////////////////pregunta 6////////////////////////////////////////////



var act74_6 = [];
for (var i = 0; i < 4; i++) {
    act74_6[i] = Math.floor(Math.random() * 9999) + 999;

}
var pgr6Num = document.getElementsByClassName('prg6');
act74_6.sort(f_randomico);
for (i = 0; i < pgr6Num.length; i++) {

    $('#' + pgr6Num[i].id).html('<span width="50px">' + act74_6[i] + '</span> ');

}

act74_6.sort(function(a, b) { return a - b; });

function pregunta6() {
    var act6_1 = document.getElementById('act6_1').value;
    var act6_2 = document.getElementById('act6_2').value;
    var act6_3 = document.getElementById('act6_3').value;
    var act6_4 = document.getElementById('act6_4').value;
    var act6_5 = document.getElementById('act6_5').value;
    var act6_6 = document.getElementById('act6_6').value;
    var act6_7 = document.getElementById('act6_7').value;
    var act6_8 = document.getElementById('act6_8').value;
    var nt1 = 0,
        nt2 = 0,
        nt3 = 0,
        nt4 = 0,
        nt5 = 0,
        nt6 = 0,
        nt7 = 0,
        nt8 = 0;

    if (act6_1 == act74_6[0]) {
        $('#act6_1').css("background", "#00e600");
        nt1 = 1;
    } else {
        $('#act6_1').css("background", "#ff6666");
    }

    if (act6_2 == act74_6[1]) {
        $('#act6_2').css("background", "#00e600");
        nt2 = 1;
    } else {
        $('#act6_2').css("background", "#ff6666");
    }
    if (act6_3 == act74_6[2]) {
        $('#act6_3').css("background", "#00e600");
        nt3 = 1;
    } else {
        $('#act6_3').css("background", "#ff6666");
    }
    if (act6_4 == act74_6[3]) {
        $('#act6_4').css("background", "#00e600");
        nt4 = 1;
    } else {
        $('#act6_4').css("background", "#ff6666");
    }
    if (act6_5 == act74_6[0]) {
        $('#act6_5').css("background", "#00e600");
        nt5 = 1;
    } else {
        $('#act6_5').css("background", "#ff6666");
    }
    if (act6_6 == act74_6[1]) {
        $('#act6_6').css("background", "#00e600");
        nt6 = 1;
    } else {
        $('#act6_6').css("background", "#ff6666");
    }
    if (act6_7 == act74_6[2]) {
        $('#act6_7').css("background", "#00e600");
        nt7 = 1;
    } else {
        $('#act6_7').css("background", "#ff6666");
    }
    if (act6_8 == act74_6[3]) {
        $('#act6_8').css("background", "#00e600");
        nt8 = 1;
    } else {
        $('#act6_8').css("background", "#ff6666");
    }
    var subtotal = parseInt(nt1) + parseInt(nt2) + parseInt(nt3) + parseInt(nt4) + parseInt(nt5) + parseInt(nt6) + parseInt(nt7) + parseInt(nt8);
    var total = (subtotal * 1) / 8;
    $('#nota1_6').val(parseFloat(total).toFixed(2));





}
///////////////////////////pregunta 7//////////////////////////////////////
document.getElementById('nota1_7').addEventListener('keypress', () => {
    validNumero(0, 1, 1);
});
document.getElementById('nota1_7').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_7'), 1)
});
//////////////////////////////////////////////////////////////pregunta 8 ///////////////////////////////////////////////////
var act74_8 = [
    ['<img class="img-responsive" src="img/i4_p50_act74.jpg"></img>' +
        '<input type="text" id="act8_1" style="text-align:center;" class="sinEspacios form-control text-lowercase  input">'
    ],
    ['<img class="img-responsive" src="img/i5_p50_act74.jpg"></img>' +
        '<input type="text" id="act8_2" style="text-align:center;" class="sinEspacios form-control text-lowercase  input">'
    ],
    ['<img class="img-responsive" src="img/i6_p50_act74.jpg"></img>' +
        '<input type="text" id="act8_3" style="text-align:center;" class="sinEspacios form-control text-lowercase  input">'
    ],
];

var pgr8Num = document.getElementsByClassName('prg8');
act74_8.sort(f_randomico);
for (i = 0; i < pgr8Num.length; i++) {

    $('#' + pgr8Num[i].id).html('<span width="50px">' + act74_8[i] + '</span> ');

}

function pregunta8() {
    var act8_1 = document.getElementById('act8_1').value.toLowerCase();
    var act8_2 = document.getElementById('act8_2').value.toLowerCase();
    var act8_3 = document.getElementById('act8_3').value.toLowerCase();
    var nt1 = 0,
        nt2 = 0,
        nt3 = 0;
    if (act8_1 == "paralelas") {
        nt1 = 1;
        $('#act8_1').css("background", "#00e600");

    } else {
        $('#act8_1').css("background", "#ff6666");

    }
    if (act8_2 == "perpendiculares") {
        nt2 = 1;
        $('#act8_2').css("background", "#00e600");

    } else {
        $('#act8_2').css("background", "#ff6666");

    }
    if (act8_3 == "oblicuas") {
        nt3 = 1;
        $('#act8_3').css("background", "#00e600");

    } else {
        $('#act8_3').css("background", "#ff6666");

    }
    var subtotal = parseInt(nt1) + parseInt(nt2) + parseInt(nt3);
    var total = (subtotal * 1) / 3;
    $('#nota1_8').val(parseFloat(total).toFixed(2));

}

///////////////////pregunta 9 //////////////////////////////
//////////////////////////////////////////////////////////////pregunta 8 ///////////////////////////////////////////////////
var act74_9 = [
    ['<img class="img-responsive" src="img/i7_p50_act74.jpg"></img>' +
        '<span>Medida:<input type="text" id="act9_1" maxl maxlength="3" style="text-align:center;border-radius: 20px;" class="sinEspacios text-lowercase  input"></span>'
    ],
    ['<img class="img-responsive" src="img/i8_p50_act74.jpg"></img>' +
        '<span>Medida:<input type="text" id="act9_2" maxl maxlength="3" style="text-align:center;border-radius: 20px;" class="sinEspacios text-lowercase  input"></span>'
    ],
    ['<img class="img-responsive" src="img/i9_p50_act74.jpg"></img>' +
        '<span>Medida:<input type="text" id="act9_3" maxl maxlength="3" style="text-align:center;border-radius: 20px;" class="sinEspacios text-lowercase  input"></span>'
    ],
];

var pgr9Num = document.getElementsByClassName('prg9');
act74_9.sort(f_randomico);
for (i = 0; i < pgr9Num.length; i++) {

    $('#' + pgr9Num[i].id).html('<span width="50px">' + act74_9[i] + '</span> ');

}

function pregunta9() {
    var act9_1 = document.getElementById('act9_1').value.toLowerCase();
    var act9_2 = document.getElementById('act9_2').value.toLowerCase();
    var act9_3 = document.getElementById('act9_3').value.toLowerCase();
    var nt1 = 0,
        nt2 = 0,
        nt3 = 0;
    if ((act9_1 == "50°") || (act9_1 == "50")) {
        nt1 = 1;
        $('#act9_1').css("background", "#00e600");

    } else {
        $('#act9_1').css("background", "#ff6666");

    }
    if ((act9_2 == "30°") || (act9_2 == "30")) {
        nt2 = 1;
        $('#act9_2').css("background", "#00e600");

    } else {
        $('#act9_2').css("background", "#ff6666");

    }
    if ((act9_3 == "90°") || (act9_3 == "90")) {
        nt3 = 1;
        $('#act9_3').css("background", "#00e600");

    } else {
        $('#act9_3').css("background", "#ff6666");

    }
    var subtotal = parseInt(nt1) + parseInt(nt2) + parseInt(nt3);
    var total = (subtotal * 1) / 3;
    $('#nota1_9').val(parseFloat(total).toFixed(2));

}
///////////////////////////pregunta 10////////////////////////
function pregunta10() {
    var act10_1 = document.getElementById('act10_1').value;
    var nt1 = 0;
    if (act10_1 == "2") {
        nt1 = 1;
        $('#act10_1').css("background", "#00e600");

    } else {
        $('#act10_1').css("background", "#ff6666");

    }
    $('#nota1_10').val(parseFloat(nt1).toFixed(2));
}



function calcularTotal() {
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
    if ((nota11_2 == "") || (nota11_4 == "") || (nota11_7 == "")) {
        alert("Debe ingresar la nota en la actividad 2, 4 ó 7")
    } else {

        pregunta1();
        pregunta3();
        pregunta5();
        pregunta6();
        pregunta8();
        pregunta9();
        pregunta10();
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
        var SuperTotal = parseFloat(nota11_1) + parseFloat(nota11_2) + parseFloat(nota11_3) + parseFloat(nota11_4) + parseFloat(nota11_5) + parseFloat(nota11_6) + parseFloat(nota11_7) + parseFloat(nota11_8) + parseFloat(nota11_9) + parseFloat(nota11_10) + parseFloat(nota11_10);

        $('#txtNota').html(SuperTotal.toFixed(2));
        document.getElementById('bt_comprobar').disabled = true;
        $('input').attr("disabled", true);
        $('#txtAlumno').attr("disabled", false);

    }


}
