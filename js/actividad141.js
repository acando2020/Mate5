
function pregunta1() {
  var respact2 = ['15', '6', 'azules', 'verdes', '4', '6', '15','5','15','4','15', ];
    var cont = 0;
    for (var i = 0; i < 11; i++) {
        var res = $('#act1num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act1num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act1num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 11;
    $('#nota1').val(parseFloat(total).toFixed(2));

}
///////////////pregunta3///////////////////////////////////
function pregunta3() {
    var respact2 = ['3', '81', '27', '9', '3', '27', '9', ];
    var cont = 0;
    for (var i = 0; i < 7; i++) {
        var res = $('#act2num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act2num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act2num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 7;
    $('#nota3').val(parseFloat(total).toFixed(2));

}
///////////////////pregunta4////////////

//////////////////////////////pregunta2//////////////////////////////////////////
var random4 = [
    ['<b style="color: #005ca4"><li></li></b>' +
        '<table class="table-bordered">' +
        '<tr>' +
        '<td></td>' +
        '<td>3</td>' +
        '<td>0</td>' +
        '<td>6</td>' +
        '<td style="border-left: 2px solid #000000; border-bottom:2px solid #000000;">9</td>' +
        '<td style="border-bottom:2px solid #000000;"></td>' +
        '<td style="border-bottom:2px solid #000000;"></td>' +
        '</tr>' +
        '<tr>' +
        '<td>' +
        '<input class="inputDiv soloNumeros sinEspacios" maxlength="1" id="act4num0"></input>' +
        '</td>' +
        '<td style="border-bottom:2px solid #000000;">' +
        '<input class="inputDiv soloNumeros sinEspacios" maxlength="1" id="act4num1"></input>' +
        '</td>' +
        '<td style="border-bottom:2px solid #000000;">' +
        '<input class="inputDiv soloNumeros sinEspacios" maxlength="1" id="act4num2"></input>' +
        '</td>' +
        '<td></td>' +
        '<td style="border-left: 2px solid #000000;">' +
        '<input class="inputDiv soloNumeros sinEspacios" maxlength="1" id="act4num3"></input>' +
        '</td>' +
        '<td>' +
        '<input class="inputDiv soloNumeros sinEspacios" maxlength="1" id="act4num4"></input>' +
        '</td>' +
        '<td></td>' +
        '</tr>' +
        '<tr>' +
        '<td></td>' +
        '<td></td>' +
        '<td>' +
        '<input class="inputDiv soloNumeros sinEspacios" maxlength="1" id="act4num5"></input>' +
        '</td>' +
        '<td>' +
        '<input class="inputDiv soloNumeros sinEspacios" maxlength="1" id="act4num6"></input>' +
        '</td>' +
        '<td style="border-left: 2px solid #000000;"></td>' +
        '<td></td>' +
        '<td></td>' +
        '</tr>' +
        '<tr>' +
        '<td></td>' +
        '<td style="border-bottom:2px solid #000000;">' +
        '<input class="inputDiv soloNumeros sinEspacios" maxlength="1" id="act4num7"></input>' +
        '</td>' +
        '<td style="border-bottom:2px solid #000000;">' +
        '<input class="inputDiv soloNumeros sinEspacios" maxlength="1" id="act4num8"></input>' +
        '</td>' +
        '<td style="border-bottom:2px solid #000000;">' +
        '<input class="inputDiv soloNumeros sinEspacios" maxlength="1" id="act4num9"></input>' +
        '</td>' +
        '<td style="border-left: 2px solid #000000;"></td>' +
        '<td></td>' +
        '<td></td>' +
        '</tr>' +
        '<tr>' +
        '<td></td>' +
        '<td></td>' +
        '<td></td>' +
        '<td>' +
        '<input class="inputDiv soloNumeros sinEspacios" maxlength="1" id="act4num10"></input>' +
        '</td>' +
        '<td style="border-left: 2px solid #000000;"></td>' +
        '<td></td>' +
        '<td></td>' +
        '</tr>' +
        '</table>'
    ],
    ['<b style="color: #005ca4"><li></li></b>' +
        '<table class="table-bordered">' +
        '<tr>' +
        '<td></td>' +
        '<td>2</td>' +
        '<td>8</td>' +
        '<td>7</td>' +
        '<td style="border-left: 2px solid #000000; border-bottom:2px solid #000000;">7</td>' +
        '<td style="border-bottom:2px solid #000000;"></td>' +
        '<td style="border-bottom:2px solid #000000;"></td>' +
        '</tr>' +
        '<tr>' +
        '<td>' +
        '<input class="inputDiv soloNumeros sinEspacios" maxlength="1" id="act4num11"></input>' +
        '</td>' +
        '<td style="border-bottom:2px solid #000000;">' +
        '<input class="inputDiv soloNumeros sinEspacios" maxlength="1" id="act4num12"></input>' +
        '</td>' +
        '<td style="border-bottom:2px solid #000000;">' +
        '<input class="inputDiv soloNumeros sinEspacios" maxlength="1" id="act4num13"></input>' +
        '</td>' +
        '<td></td>' +
        '<td style="border-left: 2px solid #000000;">' +
        '<input class="inputDiv soloNumeros sinEspacios" maxlength="1" id="act4num14"></input>' +
        '</td>' +
        '<td>' +
        '<input class="inputDiv soloNumeros sinEspacios" maxlength="1" id="act4num15"></input>' +
        '</td>' +
        '<td></td>' +
        '</tr>' +
        '<tr>' +
        '<td></td>' +
        '<td></td>' +
        '<td>' +
        '<input class="inputDiv soloNumeros sinEspacios" maxlength="1" id="act4num16"></input>' +
        '</td>' +
        '<td>' +
        '<input class="inputDiv soloNumeros sinEspacios" maxlength="1" id="act4num17"></input>' +
        '</td>' +
        '<td style="border-left: 2px solid #000000;"></td>' +
        '<td></td>' +
        '<td></td>' +
        '</tr>' +
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<input class="inputDiv soloNumeros sinEspacios" maxlength="1" id="act4num18" readonly></input>' +
        '</td>' +
        '<td style="border-bottom:2px solid #000000;">' +
        '<input class="inputDiv soloNumeros sinEspacios" maxlength="1" id="act4num19"></input>' +
        '</td>' +
        '<td style="border-bottom:2px solid #000000;">' +
        '<input class="inputDiv soloNumeros sinEspacios" maxlength="1" id="act4num20"></input>' +
        '</td>' +
        '<td style="border-left: 2px solid #000000;"></td>' +
        '<td></td>' +
        '<td></td>' +
        '</tr>' +
        '<tr>' +
        '<td></td>' +
        '<td></td>' +
        '<td></td>' +
        '<td>' +
        '<input class="inputDiv soloNumeros sinEspacios" maxlength="1" id="act4num21"></input>' +
        '</td>' +
        '<td style="border-left: 2px solid #000000;"></td>' +
        '<td></td>' +
        '<td></td>' +
        '</tr>' +
        '</table>'
    ],
    ['<b style="color: #005ca4"><li></li></b>' +
        '<table class="table-bordered">' +
        '<tr>' +
        '<td></td>' +
        '<td>4</td>' +
        '<td>3</td>' +
        '<td>5</td>' +
        '<td style="border-left: 2px solid #000000; border-bottom:2px solid #000000;">5</td>' +
        '<td style="border-bottom:2px solid #000000;"></td>' +
        '<td style="border-bottom:2px solid #000000;"></td>' +
        '</tr>' +
        '<tr>' +
        '<td>' +
        '<input class="inputDiv soloNumeros sinEspacios" maxlength="1" id="act4num22"></input>' +
        '</td>' +
        '<td style="border-bottom:2px solid #000000;">' +
        '<input class="inputDiv soloNumeros sinEspacios" maxlength="1" id="act4num23"></input>' +
        '</td>' +
        '<td style="border-bottom:2px solid #000000;">' +
        '<input class="inputDiv soloNumeros sinEspacios" maxlength="1" id="act4num24"></input>' +
        '</td>' +
        '<td></td>' +
        '<td style="border-left: 2px solid #000000;">' +
        '<input class="inputDiv soloNumeros sinEspacios" maxlength="1" id="act4num25"></input>' +
        '</td>' +
        '<td>' +
        '<input class="inputDiv soloNumeros sinEspacios" maxlength="1" id="act4num26"></input>' +
        '</td>' +
        '<td></td>' +
        '</tr>' +
        '<tr>' +
        '<td></td>' +
        '<td></td>' +
        '<td>' +
        '<input class="inputDiv soloNumeros sinEspacios" maxlength="1" id="act4num27"></input>' +
        '</td>' +
        '<td>' +
        '<input class="inputDiv soloNumeros sinEspacios" maxlength="1" id="act4num28"></input>' +
        '</td>' +
        '<td style="border-left: 2px solid #000000;"></td>' +
        '<td></td>' +
        '<td></td>' +
        '</tr>' +
        '<tr>' +
        '<td></td>' +
        '<td style="border-bottom:2px solid #000000;">' +
        '<input class="inputDiv soloNumeros sinEspacios" maxlength="1" id="act4num29"></input>' +
        '</td>' +
        '<td style="border-bottom:2px solid #000000;">' +
        '<input class="inputDiv soloNumeros sinEspacios" maxlength="1" id="act4num30"></input>' +
        '</td>' +
        '<td style="border-bottom:2px solid #000000;">' +
        '<input class="inputDiv soloNumeros sinEspacios" maxlength="1" id="act4num31"></input>' +
        '</td>' +
        '<td style="border-left: 2px solid #000000;"></td>' +
        '<td></td>' +
        '<td></td>' +
        '</tr>' +
        '<tr>' +
        '<td></td>' +
        '<td></td>' +
        '<td></td>' +
        '<td>' +
        '<input class="inputDiv soloNumeros sinEspacios" maxlength="1" id="act4num32"></input>' +
        '</td>' +
        '<td style="border-left: 2px solid #000000;"></td>' +
        '<td></td>' +
        '<td></td>' +
        '</tr>' +
        '</table>'
    ],
    ['<b style="color: #005ca4"><li></li></b>' +
        '<table class="table-bordered">' +
        '<tr>' +
        '<td></td>' +
        '<td>5</td>' +
        '<td>2</td>' +
        '<td>0</td>' +
        '<td style="border-left: 2px solid #000000; border-bottom:2px solid #000000;">8</td>' +
        '<td style="border-bottom:2px solid #000000;"></td>' +
        '<td style="border-bottom:2px solid #000000;"></td>' +
        '</tr>' +
        '<tr>' +
        '<td>' +
        '<input class="inputDiv soloNumeros sinEspacios" maxlength="1" id="act4num33"></input>' +
        '</td>' +
        '<td style="border-bottom:2px solid #000000;">' +
        '<input class="inputDiv soloNumeros sinEspacios" maxlength="1" id="act4num34"></input>' +
        '</td>' +
        '<td style="border-bottom:2px solid #000000;">' +
        '<input class="inputDiv soloNumeros sinEspacios" maxlength="1" id="act4num35"></input>' +
        '</td>' +
        '<td></td>' +
        '<td style="border-left: 2px solid #000000;">' +
        '<input class="inputDiv soloNumeros sinEspacios" maxlength="1" id="act4num36"></input>' +
        '</td>' +
        '<td>' +
        '<input class="inputDiv soloNumeros sinEspacios" maxlength="1" id="act4num37"></input>' +
        '</td>' +
        '<td></td>' +
        '</tr>' +
        '<tr>' +
        '<td></td>' +
        '<td></td>' +
        '<td>' +
        '<input class="inputDiv soloNumeros sinEspacios" maxlength="1" id="act4num38"></input>' +
        '</td>' +
        '<td>' +
        '<input class="inputDiv soloNumeros sinEspacios" maxlength="1" id="act4num39"></input>' +
        '</td>' +
        '<td style="border-left: 2px solid #000000;"></td>' +
        '<td></td>' +
        '<td></td>' +
        '</tr>' +
        '<tr>' +
        '<td></td>' +
        '<td style="border-bottom:2px solid #000000;">' +
        '<input class="inputDiv soloNumeros sinEspacios" maxlength="1" id="act4num40"></input>' +
        '</td>' +
        '<td style="border-bottom:2px solid #000000;">' +
        '<input class="inputDiv soloNumeros sinEspacios" maxlength="1" id="act4num41"></input>' +
        '</td>' +
        '<td style="border-bottom:2px solid #000000;">' +
        '<input class="inputDiv soloNumeros sinEspacios" maxlength="1" id="act4num42"></input>' +
        '</td>' +
        '<td style="border-left: 2px solid #000000;"></td>' +
        '<td></td>' +
        '<td></td>' +
        '</tr>' +
        '<tr>' +
        '<td></td>' +
        '<td></td>' +
        '<td></td>' +
        '<td>' +
        '<input class="inputDiv soloNumeros sinEspacios" maxlength="1" id="act4num43"></input>' +
        '</td>' +
        '<td style="border-left: 2px solid #000000;"></td>' +
        '<td></td>' +
        '<td></td>' +
        '</tr>' +
        '</table>'
    ],
];
var act04Txt = document.getElementsByClassName('act4class');

random4.sort(f_randomico);
for (i = 0; i < act04Txt.length; i++) {
    $('#' + act04Txt[i].id).html(random4[i]);
}

function pregunta4() {
    var respact2 = ['-', '2', '7', '3', '4', '3', '6', '-', '3', '6', '0', '-', '2', '8', '4', '1', '0', '7', '', '-', '7', '0', '-', '4', '0', '8', '7', '3', '5', '-', '3', '5', '0', '-', '4', '8', '6', '5', '4', '0', '-', '4', '0', '0', ];
    var cont = 0;
    for (var i = 0; i < 44; i++) {
        var res = $('#act4num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act4num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act4num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 44;
    $('#nota4').val(parseFloat(total).toFixed(2));
    /*$('#txtNota').html(total.toFixed(2));
     document.getElementById('bt_comprobar').disabled = true;
     $('input').attr("disabled", true);
     $('#txtAlumno').attr("disabled", false);*/
}
///////////////////pregunta5
var random5 = [
    ['<td><b style="color: #005ca4"><li></li></b></td> <td>2478 ÷ 21 =</td> <td><input id="act5num0" class="inputfraccciones"></input></td>'],
    ['<td><b style="color: #005ca4"><li></li></b></td> <td>4160 ÷ 32 =</td> <td><input id="act5num1" class="inputfraccciones"></input></td>'],
    [' <td><b style="color: #005ca4"><li></li></b></td> <td>8424 ÷ 72 =</td> <td><input id="act5num2" class="inputfraccciones"></input></td>'],
    ['<td><b style="color: #005ca4"><li></li></b></td> <td>9558 ÷ 54 =</td> <td><input id="act5num3" class="inputfraccciones"></input></td>'],
];
var act05Txt = document.getElementsByClassName('act5class');

random5.sort(f_randomico);
for (i = 0; i < act05Txt.length; i++) {
    $('#' + act05Txt[i].id).html(random5[i]);
}



function pregunta5() {
    var respact2 = ['118', '130', '117', '117', ];
    var cont = 0;
    for (var i = 0; i < 4; i++) {
        var res = $('#act5num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act5num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act5num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 4;
    $('#nota5').val(parseFloat(total).toFixed(2));

}
///////////////////////pregunta6
var random6 = [
    [' <td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>120</td>' +
        '<td>÷</td>' +
        '<td><input class="inputfraccciones" id="act6num0"></input></td>' +
        '<td>=</td>' +
        '<td>15</td>' +
        '<td><input class="form-control"></input></td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td><input class="inputfraccciones" id="act6num1"></input></td>' +
        '<td>÷</td>' +
        '<td>31</td>' +
        '<td>=</td>' +
        '<td>4</td>' +
        '<td><input class="form-control"></input></td>'
    ],
    [' <td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>19 x 9</td>' +
        '<td>+</td>' +
        '<td><input class="inputfraccciones" id="act6num2"></input></td>' +
        '<td>=</td>' +
        '<td>168</td>' +
        '<td><input class="form-control"></input></td>'
    ],
];
var act06Txt = document.getElementsByClassName('act6class');

random6.sort(f_randomico);
for (i = 0; i < act06Txt.length; i++) {
    $('#' + act06Txt[i].id).html(random6[i]);
}



function pregunta6() {
    var respact2 = ['8', '124', '6', ];
    var cont = 0;
    for (var i = 0; i < 3; i++) {
        var res = $('#act6num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act6num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act6num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 3;
    $('#nota6').val(parseFloat(total).toFixed(2));

}
///////////////////////////pregunta7/////////////////
var random7 = [
    ['<td><b style="color: #005ca4"><li></li></b></td> <td>(300 + 200) ÷ 100 =</td> <td><input class="inputfraccciones soloNumeros sinEspacios" id="act7num0"></input></td>'],
    ['<td><b style="color: #005ca4"><li></li></b></td> <td>(8 000 + 2 000) ÷ 1 000 =</td> <td><input class="inputfraccciones soloNumeros sinEspacios" id="act7num1"></input></td>'],
    ['<td><b style="color: #005ca4"><li></li></b></td> <td>(6 060 – 60) ÷ 10 =</td> <td><input class="inputfraccciones soloNumeros sinEspacios" id="act7num2"></input></td>'],
    ['<td><b style="color: #005ca4"><li></li></b></td> <td>(50 + 60) ÷ 10 =</td> <td><input class="inputfraccciones soloNumeros sinEspacios" id="act7num3"></input></td> </tr>'],
    ['<td><b style="color: #005ca4"><li></li></b></td> <td>(440 – 40) ÷ 100 =</td> <td><input class="inputfraccciones soloNumeros sinEspacios" id="act7num4"></input></td>'],
    ['<td><b style="color: #005ca4"><li></li></b></td> <td>(500 × 2) ÷ 1 000 =</td> <td><input class="inputfraccciones soloNumeros sinEspacios" id="act7num5"></input></td>'],
    ['<td><b style="color: #005ca4"><li></li></b></td> <td>(1 000 + 1 000) ÷ 100 =</td> <td><input class="inputfraccciones soloNumeros sinEspacios" id="act7num6"></input></td>'],
    ['<td><b style="color: #005ca4"><li></li></b></td> <td>(10 × 10) ÷ 10 =</td> <td><input class="inputfraccciones soloNumeros sinEspacios" id="act7num7"></input></td>'],
    ['<td><b style="color: #005ca4"><li></li></b></td> <td>(1 000 × 4) ÷ 100 =</td> <td><input class="inputfraccciones soloNumeros sinEspacios" id="act7num8"></input></td>'],
];
var act07Txt = document.getElementsByClassName('act7class');

random7.sort(f_randomico);
for (i = 0; i < act07Txt.length; i++) {
    $('#' + act07Txt[i].id).html(random7[i]);
}

function pregunta7() {
    var respact2 = ['5', '10', '600', '11', '4', '1', '20', '10', '40', ];
    var cont = 0;
    for (var i = 0; i < 9; i++) {
        var res = $('#act7num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act7num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act7num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 9;
    $('#nota7').val(parseFloat(total).toFixed(2));

}

function pregunta8() {
    var respact2 = ['480', '164', '1089', '8', ];
    var cont = 0;
    for (var i = 0; i < 4; i++) {
        var res = $('#act8num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act8num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act8num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 4;
    $('#nota8').val(parseFloat(total).toFixed(2));

}

function NotaFinal() {


        pregunta1();
        pregunta3();
        pregunta4();
        pregunta5();
        pregunta6();
        pregunta7();
        pregunta8();

        var nota1 = document.getElementById('nota1').value;
        var nota2 = document.getElementById('nota2').value;
        var nota3 = document.getElementById('nota3').value;
        var nota4 = document.getElementById('nota4').value;
        var nota5 = document.getElementById('nota5').value;
        var nota6 = document.getElementById('nota6').value;
        var nota7 = document.getElementById('nota7').value;
        var nota8 = document.getElementById('nota8').value;
        var subtotal = parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4) + parseFloat(nota5) + parseFloat(nota6) + parseFloat(nota7) + parseFloat(nota8);
        var total = (subtotal * 10) / 8;
        $('#txtNota').html(total.toFixed(2));
        document.getElementById('bt_comprobar').disabled = true;
        $('input').attr("disabled", true);
        $('#txtAlumno').attr("disabled", false);


}
