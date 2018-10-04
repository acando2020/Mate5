document.getElementById('nota2').addEventListener('keypress', () => {
    validNumero(0, 1, 1);
});
document.getElementById('nota2').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota2'), 1)
});
var random1 = [
    ['<div class="col-lg-12">' +
        '<br>' +
        '<div class="col-lg-1"><b style="color: #005ca4"><li></li></b></div>' +
        '<div class="col-lg-2">320 ÷ 2 = <input id="act1bnum0" class="inputfraccciones sinEspacios soloNumeros"></input></div>' +
        '<div class="col-lg-2">160 ÷ 2 = <input id="act1bnum1" class="inputfraccciones sinEspacios soloNumeros"></input></div>' +
        '<div class="col-lg-2"><input id="act1bnum2" class="inputfraccciones sinEspacios soloNumeros"></input> ÷ 2 = <input id="act1bnum3" class="inputfraccciones sinEspacios soloNumeros"></input></div>' +
        '<div class="col-lg-2"><input id="act1bnum4" class="inputfraccciones sinEspacios soloNumeros"></input> ÷ 2 = <input id="act1bnum5" class="inputfraccciones sinEspacios soloNumeros"></input></div>' +
        '<div class="col-lg-3"><input id="act1bnum6" class="inputfraccciones sinEspacios soloNumeros"></input> ÷ 2 = <input id="act1bnum7" class="inputfraccciones sinEspacios soloNumeros"></input></div>' +
        '</div>' +
        '<div class="col-lg-12">' +
        '<br>' +
        '<div class="col-lg-1"><span style="border-radius: 10px 0px 10px 0px;background: #decbe4; ">Sucesión:</span></div>' +
        '<div class="col-lg-2"><input id="act1bnum8" class="inputfraccciones sinEspacios soloNumeros"></input>,</div>' +
        '<div class="col-lg-2"><input id="act1bnum9" class="inputfraccciones sinEspacios soloNumeros"></input>,</div>' +
        '<div class="col-lg-2"><input id="act1bnum10" class="inputfraccciones sinEspacios soloNumeros"></input>,</div>' +
        '<div class="col-lg-2"><input id="act1bnum11" class="inputfraccciones sinEspacios soloNumeros"></input>,</div>' +
        '<div class="col-lg-2"><input id="act1bnum12" class="inputfraccciones sinEspacios soloNumeros"></input>,</div>' +
        '<div class="col-lg-1"><input id="act1bnum13" class="inputfraccciones sinEspacios soloNumeros"></input></div>' +
        '</div>'
    ],
    [' <div class="col-lg-12">' +
        '<br>' +
        '<div class="col-lg-1"><b style="color: #005ca4"><li></li></b></div>' +
        '<div class="col-lg-2">25 000 ÷ 5 = 5 000;</div>' +
        '<div class="col-lg-2">5 000 ÷ 5 = 1 000 ;</div>' +
        '<div class="col-lg-2"><input id="act1anum0" class="inputfraccciones sinEspacios soloNumeros"></input> ÷ 5 = <input id="act1anum1" class="inputfraccciones sinEspacios soloNumeros"></input>;</div>' +
        '<div class="col-lg-2"><input id="act1anum2" class="inputfraccciones sinEspacios soloNumeros"></input> ÷ 5 = <input id="act1anum3" class="inputfraccciones sinEspacios soloNumeros"></input>;</div>' +
        '<div class="col-lg-3"><input id="act1anum4" class="inputfraccciones sinEspacios soloNumeros"></input> ÷ 5 = <input id="act1anum5" class="inputfraccciones sinEspacios soloNumeros"></input></div>' +
        '</div>' +
        '<div class="col-lg-12">' +
        '<br>' +
        '<div class="col-lg-1"><span style="border-radius: 10px 0px 10px 0px;background: #cae4ce; ">Sucesión:</span></div>' +
        '<div class="col-lg-2"><input id="act1anum6" class="inputfraccciones sinEspacios soloNumeros"></input>,</div>' +
        '<div class="col-lg-2"><input id="act1anum7" class="inputfraccciones sinEspacios soloNumeros"></input>,</div>' +
        '<div class="col-lg-2"><input id="act1anum8" class="inputfraccciones sinEspacios soloNumeros"></input>,</div>' +
        '<div class="col-lg-2"><input id="act1anum9" class="inputfraccciones sinEspacios soloNumeros"></input>,</div>' +
        '<div class="col-lg-2"><input id="act1anum10" class="inputfraccciones sinEspacios soloNumeros"></input>,</div>' +
        '<div class="col-lg-1"><input id="act1anum11" class="inputfraccciones sinEspacios soloNumeros"></input></div>' +
        '</div>'
    ],
    [' <br>' +
        '<div class="col-lg-12">' +
        '<br>' +
        '<div class="col-lg-1"><b style="color: #005ca4"><li></li></b></div>' +
        '<div class="col-lg-2">6 144 ÷ 4 = 1 536;</div>' +
        '<div class="col-lg-2">1 536 ÷ 4 = 384 ;</div>' +
        '<div class="col-lg-2"><input id="act1cnum0" class="inputfraccciones sinEspacios soloNumeros"></input> ÷ 4 = <input id="act1cnum1" class="inputfraccciones sinEspacios soloNumeros"></input>;</div>' +
        '<div class="col-lg-2"><input id="act1cnum2" class="inputfraccciones sinEspacios soloNumeros"></input> ÷ 4 = <input id="act1cnum3" class="inputfraccciones sinEspacios soloNumeros"></input>;</div>' +
        '<div class="col-lg-3"><input id="act1cnum4" class="inputfraccciones sinEspacios soloNumeros"></input> ÷ 4 = <input id="act1cnum5" class="inputfraccciones sinEspacios soloNumeros"></input></div>' +
        '</div>' +
        '<div class="col-lg-12">' +
        '<br>' +
        '<div class="col-lg-1"><span style="border-radius: 10px 0px 10px 0px;background: #ffeaac; ">Sucesión:</span></div>' +
        '<div class="col-lg-2"><input id="act1cnum6" class="inputfraccciones sinEspacios soloNumeros"></input>,</div>' +
        '<div class="col-lg-2"><input id="act1cnum7" class="inputfraccciones sinEspacios soloNumeros"></input>,</div>' +
        '<div class="col-lg-2"><input id="act1cnum8" class="inputfraccciones sinEspacios soloNumeros"></input>,</div>' +
        '<div class="col-lg-2"><input id="act1cnum9" class="inputfraccciones sinEspacios soloNumeros"></input>,</div>' +
        '<div class="col-lg-2"><input id="act1cnum10" class="inputfraccciones sinEspacios soloNumeros"></input>,</div>' +
        '<div class="col-lg-1"><input id="act1cnum11" class="inputfraccciones sinEspacios soloNumeros"></input></div>' +
        '</div>'
    ],
]
var act01Txt = document.getElementsByClassName('act1class');

random1.sort(f_randomico);
for (i = 0; i < act01Txt.length; i++) {
    $('#' + act01Txt[i].id).html(random1[i]);
}

function pregunta1() {
    var respact1 = ['1000', '200', '200', '40', '40', '8', '25000', '5000', '1000', '200', '40', '8', ];
    var cont = 0;
    for (var i = 0; i < 12; i++) {
        var res = $('#act1anum' + [i] + '').val().toLowerCase();
        if (respact1[i] == res) {
            cont = cont + 1;
            $('#act1anum' + [i] + '').css("background", "#00e600");
        } else {
            $('#act1anum' + [i] + '').css("background", "#ff6666");
        }

    }
    var respact2 = ['160', '80', '80', '40', '40', '20', '20', '10', '320', '160', '80', '40', '20', '10', ];
    var cont2 = 0;
    for (var i = 0; i < 14; i++) {
        var res = $('#act1bnum' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont2 = cont2 + 1;
            $('#act1bnum' + [i] + '').css("background", "#00e600");
        } else {
            $('#act1bnum' + [i] + '').css("background", "#ff6666");
        }

    }

    var respact3 = ['384', '96', '96', '24', '24', '6', '6144', '1536', '384', '96', '24', '6', ];
    var cont3 = 0;
    for (var i = 0; i < 12; i++) {
        var res = $('#act1cnum' + [i] + '').val().toLowerCase();
        if (respact3[i] == res) {
            cont3 = cont3 + 1;
            $('#act1cnum' + [i] + '').css("background", "#00e600");
        } else {
            $('#act1cnum' + [i] + '').css("background", "#ff6666");
        }

    }
    var subtotal = parseFloat(cont) + parseFloat(cont2) + parseFloat(cont3);
    var total = (subtotal * 1) / 38;
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

    var nota1 = document.getElementById('nota1').value;
    var nota2 = document.getElementById('nota2').value;
    var nota3 = document.getElementById('nota3').value;
    var nota4 = document.getElementById('nota4').value;
    var nota5 = document.getElementById('nota5').value;
    var nota6 = document.getElementById('nota6').value;
    var nota7 = document.getElementById('nota7').value;
    var nota8 = document.getElementById('nota8').value;
    if (nota2 == "") {
        alert("Ingresar nota de la prergunta 2");
    } else {
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

}
