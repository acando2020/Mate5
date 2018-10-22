document.getElementById('nota9').addEventListener('keypress', () => {
    validNumero(0, 1, 1);
});
document.getElementById('nota9').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota9'), 1)
});
/////////////////////////pregunta2//////////////////////////////////////
var random1 = [
    ['<tr>' +
        '<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td><span style="border-radius: 10px 0px 10px 0px;background: #ffecb8;padding: 5px;">Patrón:</span><input class="inputfraccciones sinEspacios" id="act1num0"></input></td>' +
        '<td></td>' +
        '<td colspan="2"><span style="border-radius: 10px 0px 10px 0px;background: #d3e8ca;padding: 5px;">Cálculo del patrón:</span></td>' +
        '<td colspan="2">1458÷<input type="text" class="inputfraccciones">;</td>' +
        '<td colspan="2"><input class="form-control"></input></td> </tr> <tr>' +
        '<td></td> <td><span style="border-radius: 10px 0px 10px 0px;background: #b5dfee;padding: 5px;">Sucesión:</span></td>' +
        '<td>1458, &nbsp;&nbsp;&nbsp;</td>' +
        '<td> &nbsp; &nbsp;486,</td>' +
        '<td><input class="inputfraccciones sinEspacios" id="act1num1"></input>,</td>' +
        '<td> &nbsp; &nbsp;54,</td>' +
        '<td> &nbsp; &nbsp;18,</td>' +
        '<td><input class="inputfraccciones sinEspacios" id="act1num2"></input>,</td>' +
        '<td><input class="inputfraccciones sinEspacios" id="act1num3"></input>,</td>' +
        '</tr>'
    ],
    [' <tr>' +
        '<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td><span style="border-radius: 10px 0px 10px 0px;background: #f7c7cd;padding: 5px;">Patrón:</span><input class="inputfraccciones sinEspacios" id="act1num4"></input></td>' +
        '<td></td>' +
        '<td colspan="2"><span style="border-radius: 10px 0px 10px 0px;background: #d3e8ca;padding: 5px;">Cálculo del patrón:</span></td>' +
        '<td colspan="2"><input type="text" class="form-control"></td>' +
        '<td colspan="2"><input class="form-control"></input></td> </tr> <tr>' +
        '<td></td>' +
        '<td><span style="border-radius: 10px 0px 10px 0px;background: #b5dfee;padding: 5px;">Sucesión:</span></td>' +
        '<td>16,</td>' +
        '<td>&nbsp;&nbsp;&nbsp;32,</td>' +
        '<td><input class="inputfraccciones sinEspacios" id="act1num5"></input>,</td>' +
        '<td>128,</td>' +
        '<td>256,</td>' +
        '<td><input class="inputfraccciones sinEspacios" id="act1num6"></input>,</td>' +
        '<td><input class="inputfraccciones sinEspacios" id="act1num7"></input>,</td>' +
        '</tr>'
    ],
    ['<tr>' +
        '<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td><span style="border-radius: 10px 0px 10px 0px;background: #dfcae3;padding: 5px;">Patrón:</span><input class="inputfraccciones sinEspacios" id="act1num8"></input></td>' +
        '<td></td>' +
        '<td colspan="2"><span style="border-radius: 10px 0px 10px 0px;background: #d3e8ca;padding: 5px;">Cálculo del patrón:</span></td>' +
        '<td colspan="2"><input type="text" class="form-control"></td>' +
        '<td colspan="2"><input class="form-control"></input></td> </tr> <tr>' +
        '<td></td>' +
        '<td><span style="border-radius: 10px 0px 10px 0px;background: #b5dfee;padding: 5px;">Sucesión:</span></td>' +
        '<td>654,</td>' +
        '<td>&nbsp;&nbsp;&nbsp;<input class="inputfraccciones sinEspacios" id="act1num9"></input>,</td>' +
        '<td>444,</td>' +
        '<td>339,</td>' +
        '<td>234,</td>' +
        '<td><input class="inputfraccciones sinEspacios" id="act1num10"></input>,</td>' +
        '<td><input class="inputfraccciones sinEspacios" id="act1num11"></input>,</td>' +
        '</tr>'
    ],
];
var act01Txt = document.getElementsByClassName('act1class');

random1.sort(f_randomico);
for (i = 0; i < act01Txt.length; i++) {
    $('#' + act01Txt[i].id).html(random1[i]);
}

function pregunta1() {
    var respact2 = ['÷3', '162', '6', '2', 'x2', '64', '512', '1024', '-105', '549', '129', '24', ];
    var cont = 0;
    for (var i = 0; i < 12; i++) {
        var res = $('#act1num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act1num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act1num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 12;
    $('#nota1').val(parseFloat(total).toFixed(2));

}

/////////////////////////pregunta2//////////////////////////////////////
function pregunta2() {
    var respact2 = ['4', '4', '4', '262144', '65536', '16384', '4096', 'provincias', 'cantones', 'escuelas', '4096', ];
    var cont = 0;
    for (var i = 0; i < 11; i++) {
        var res = $('#act2num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act2num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act2num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 11;
    $('#nota2').val(parseFloat(total).toFixed(2));

}
//////////////////////////////pregunta3
function pregunta3() {
    var respact2 = ['-', '5', '6', '8', '3', '2', '2', '3', '-', '2', '1', '2', '0', '-', '1', '4', '6', '8', '3', '2', '7', '5', '8', '2', '4', '6', '5', '8', '3', '0', 'dividendo', 'divisor', 'cociente', 'residuo'];
    var cont = 0;
    for (var i = 0; i < 34; i++) {
        var res = $('#act3num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act3num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act3num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 34;
    $('#nota3').val(parseFloat(total).toFixed(2));
    /*$('#txtNota').html(total.toFixed(2));
     document.getElementById('bt_comprobar').disabled = true;
     $('input').attr("disabled", true);
     $('#txtAlumno').attr("disabled", false);*/
}


//////////////////pregunta4/////////////////////////
var random4 = [
    ['<td><b style="color: #005ca4"><li></li></b></td> <td>1 035 ÷ 45 =</td> <td><input class="inputfraccciones sinEspacios soloNumeros" id="act4num0"></input></td>'],
    [' <td><b style="color: #005ca4"><li></li></b></td> <td>2 268 ÷ 27 =</td> <td><input class="inputfraccciones sinEspacios soloNumeros" id="act4num1"></input></td>'],
    [' <td><b style="color: #005ca4"><li></li></b></td> <td>2 625 ÷ 21 =</td> <td><input class="inputfraccciones sinEspacios soloNumeros" id="act4num2"></input></td>'],
    ['<td><b style="color: #005ca4"><li></li></b></td> <td>2 808 ÷ 72 =</td> <td><input class="inputfraccciones sinEspacios soloNumeros" id="act4num3"></input></td>'],
    [' <td><b style="color: #005ca4"><li></li></b></td> <td>3 876 ÷ 68 =</td> <td><input class="inputfraccciones sinEspacios soloNumeros" id="act4num4"></input></td>'],
    ['<td><b style="color: #005ca4"><li></li></b></td> <td>3 913 ÷ 43 =</td> <td><input class="inputfraccciones sinEspacios soloNumeros" id="act4num5"></input></td>'],
];

var act04Txt = document.getElementsByClassName('act4class');

random4.sort(f_randomico);
for (i = 0; i < act04Txt.length; i++) {
    $('#' + act04Txt[i].id).html(random4[i]);
}

function pregunta4() {
    var respact2 = ['23', '84', '125', '39', '57', '91', ];
    var cont = 0;
    for (var i = 0; i < 6; i++) {
        var res = $('#act4num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act4num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act4num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 6;
    $('#nota4').val(parseFloat(total).toFixed(2));
}
///////////////////////pregunta5///////////////////////////
function pregunta5() {
    var nt1 = 0;
    var act5num0 = document.getElementById('act5num0').value;
    if (act5num0 == 21) {
        nt1 = 1;
        $('#act5num0').css("background", "#00e600");
    } else {
        $('#act5num0').css("background", "#ff6666");
    }
    $('#nota5').val(parseFloat(nt1).toFixed(2));
}
//////////////////pregunta6/////////////////////////
var random6 = [
    ['<td><b style="color: #005ca4"><li></li></b></td> <td>7 450 ÷ 10 =</td> <td><input class="inputfraccciones soloNumeros sinEspacios" id="act6num0"></input></td>'],
    ['<td><b style="color: #005ca4"><li></li></b></td> <td>9 700 ÷ 100 =</td> <td><input class="inputfraccciones soloNumeros sinEspacios" id="act6num1"></input></td>'],
    ['<td><b style="color: #005ca4"><li></li></b></td> <td>87 000 ÷ 1 000 =</td> <td><input class="inputfraccciones soloNumeros sinEspacios" id="act6num2"></input></td>'],
    ['<td><b style="color: #005ca4"><li></li></b></td> <td>5 430 ÷ 1 =</td> <td><input class="inputfraccciones soloNumeros sinEspacios" id="act6num3"></input></td>'],
    ['<td><b style="color: #005ca4"><li></li></b></td> <td>92 600 ÷ 10 =</td> <td><input class="inputfraccciones soloNumeros sinEspacios" id="act6num4"></input></td>'],
    ['<td><b style="color: #005ca4"><li></li></b></td> <td>10 500 ÷ 100 =</td> <td><input class="inputfraccciones soloNumeros sinEspacios" id="act6num5"></input></td>'],
];

var act06Txt = document.getElementsByClassName('act6class');

random6.sort(f_randomico);
for (i = 0; i < act06Txt.length; i++) {
    $('#' + act06Txt[i].id).html(random6[i]);
}

function pregunta6() {
    var respact2 = ['745', '97', '87', '5430', '9260', '105', ];
    var cont = 0;
    for (var i = 0; i < 6; i++) {
        var res = $('#act6num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act6num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act6num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 6;
    $('#nota6').val(parseFloat(total).toFixed(2));
}
////////////////pregunta7/////////////////|
var random7 = [
    [' <table> <tr> <td><b style="color: #005ca4"><li></li></b></td> <td colspan="3">8 – (2 × 3) + 9 – (4 ÷ 4) + (5 × 2) =</td> </tr> <tr> <td></td> <td><input class="form-control"></input></td> <td>=</td> <td><input class="inputfraccciones" id="act7num0"></input></td> </tr> </table>'],
    [' <table> <tr> <td><b style="color: #005ca4"><li></li></b></td> <td colspan="2">6 ÷ (5 – 2) + (4 × 3) – (12 ÷ 3) =</td> </tr> <tr> <td></td> <td><input class="form-control"></input></td> <td>=</td> <td><input class="inputfraccciones" id="act7num1"></input></td> </tr> </table>'],
];
var act07Txt = document.getElementsByClassName('act7class');

random7.sort(f_randomico);
for (i = 0; i < act07Txt.length; i++) {
    $('#' + act07Txt[i].id).html(random7[i]);
}

function pregunta7() {
    var respact2 = ['20', '10', ];
    var cont = 0;
    for (var i = 0; i < 2; i++) {
        var res = $('#act7num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act7num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act7num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 2;
    $('#nota7').val(parseFloat(total).toFixed(2));
    /*$('#txtNota').html(total.toFixed(2));
     document.getElementById('bt_comprobar').disabled = true;
     $('input').attr("disabled", true);
     $('#txtAlumno').attr("disabled", false);*/
}
///////////////////////pregunta8///////////////////////////
function pregunta8() {
    var nt1 = 0;
    var act8num0 = document.getElementById('act8num0').value;
    if (act8num0 == 756) {
        nt1 = 1;
        $('#act8num0').css("background", "#00e600");
    } else {
        $('#act8num0').css("background", "#ff6666");
    }
    $('#nota8').val(parseFloat(nt1).toFixed(2));
}
/////////////////////pregunta10//////////////////
function pregunta10() {
    var respact2 = ['2', '9', '2', '9', '1', '9', '4', '9', ];
    var cont = 0;
    for (var i = 0; i < 8; i++) {
        var res = $('#act10num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act10num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act10num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 8;
    $('#nota10').val(parseFloat(total).toFixed(2));

}


function NotaFinal() {
    /* var nota1 = document.getElementById('nota1').value;
     var nota2 = document.getElementById('nota2').value;
     var nota3 = document.getElementById('nota3').value;
     var nota4 = document.getElementById('nota4').value;
     var nota5 = document.getElementById('nota5').value;
     var nota6 = document.getElementById('nota6').value;
     var nota7 = document.getElementById('nota7').value;
     var nota8 = document.getElementById('nota8').value;
     var nota9 = document.getElementById('nota9').value;
     var nota10 = document.getElementById('nota10').value;
     if (nota9 == "") {
         alert("Debe ingresar la nota de la pregunta 9")
     } else {*/
    pregunta1();
    pregunta2();
    pregunta3();
    pregunta4();
    pregunta5();
    pregunta6();
    pregunta7();
    pregunta8();
    pregunta10();

    var nota1 = document.getElementById('nota1').value;
    var nota2 = document.getElementById('nota2').value;
    var nota3 = document.getElementById('nota3').value;
    var nota4 = document.getElementById('nota4').value;
    var nota5 = document.getElementById('nota5').value;
    var nota6 = document.getElementById('nota6').value;
    var nota7 = document.getElementById('nota7').value;
    var nota8 = document.getElementById('nota8').value;
    var nota9 = document.getElementById('nota9').value;
    var nota10 = document.getElementById('nota10').value;
    var total = parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4) + parseFloat(nota5) + parseFloat(nota6) + parseFloat(nota7) + parseFloat(nota8) + parseFloat(nota9) + parseFloat(nota10);
    $('#txtNota').html(total.toFixed(2));
    document.getElementById('bt_comprobar').disabled = true;
    $('input').attr("disabled", true);
    $('#txtAlumno').attr("disabled", false);
    //}
}
