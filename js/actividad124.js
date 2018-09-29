var random1 = [
    [' <td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>48 ÷ 8 =' +
        '<input id="act1num0" class="inputfraccciones sinEspacios soloNumeros" style="border: 1px solid #00CC9A"></input>' +
        '</td>' +
        '<td>porque</td>' +
        '<td>' +
        '<input id="act1num1" class="form-control sinEspacios text-lowercase" style="border: 1px solid #00CC9A"></input>' +
        '</td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>90 ÷ 9 =' +
        '<input id="act1num2" class="inputfraccciones sinEspacios soloNumeros" style="border: 1px solid #00CC9A"></input>' +
        '</td>' +
        '<td>porque</td>' +
        '<td>' +
        '<input id="act1num3" class="form-control sinEspacios text-lowercase" style="border: 1px solid #00CC9A"></input>' +
        '</td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>60 ÷ 5 =' +
        '<input id="act1num4" class="inputfraccciones sinEspacios soloNumeros" style="border: 1px solid #00CC9A"></input>' +
        '</td>' +
        '<td>porque</td>' +
        '<td>' +
        '<input id="act1num5" class="form-control sinEspacios text-lowercase" style="border: 1px solid #00CC9A"></input>' +
        '</td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>72 ÷ 9 =' +
        '<input id="act1num6" class="inputfraccciones sinEspacios soloNumeros" style="border: 1px solid #00CC9A"></input>' +
        '</td>' +
        '<td>porque</td>' +
        '<td>' +
        '<input id="act1num7" class="form-control sinEspacios text-lowercase" style="border: 1px solid #00CC9A"></input>' +
        '</td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>120 ÷ 6 =' +
        '<input id="act1num8" class="inputfraccciones sinEspacios soloNumeros" style="border: 1px solid #00CC9A"></input>' +
        '</td>' +
        '<td>porque</td>' +
        '<td>' +
        '<input id="act1num9" class="form-control sinEspacios text-lowercase" style="border: 1px solid #00CC9A"></input>' +
        '</td>'
    ],
];
var act01Txt = document.getElementsByClassName('act1class');

random1.sort(f_randomico);
for (i = 0; i < act01Txt.length; i++) {
    $('#' + act01Txt[i].id).html(random1[i]);
}

function pregunta1() {
    var respact2 = ['6', '6x8=48', '10', '10x9=90', '12', '12x5=60', '8', '8x9=72', '20', '20x6=120', ];
    var cont = 0;
    for (var i = 0; i < 10; i++) {
        var res = $('#act1num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act1num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act1num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 10;
    $('#nota1').val(parseFloat(total).toFixed(2));
    /*$('#txtNota').html(total.toFixed(2));
     document.getElementById('bt_comprobar').disabled = true;
     $('input').attr("disabled", true);
     $('#txtAlumno').attr("disabled", false);*/
}
//////////////////////////////pregunta2//////////////////////////////////////////
var random2 = [
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
        '<input class="inputDiv soloNumeros sinEspacios" maxlength="1" id="act2num0"></input>' +
        '</td>' +
        '<td style="border-bottom:2px solid #000000;">' +
        '<input class="inputDiv soloNumeros sinEspacios" maxlength="1" id="act2num1"></input>' +
        '</td>' +
        '<td style="border-bottom:2px solid #000000;">' +
        '<input class="inputDiv soloNumeros sinEspacios" maxlength="1" id="act2num2"></input>' +
        '</td>' +
        '<td></td>' +
        '<td style="border-left: 2px solid #000000;">' +
        '<input class="inputDiv soloNumeros sinEspacios" maxlength="1" id="act2num3"></input>' +
        '</td>' +
        '<td>' +
        '<input class="inputDiv soloNumeros sinEspacios" maxlength="1" id="act2num4"></input>' +
        '</td>' +
        '<td></td>' +
        '</tr>' +
        '<tr>' +
        '<td></td>' +
        '<td></td>' +
        '<td>' +
        '<input class="inputDiv soloNumeros sinEspacios" maxlength="1" id="act2num5"></input>' +
        '</td>' +
        '<td>' +
        '<input class="inputDiv soloNumeros sinEspacios" maxlength="1" id="act2num6"></input>' +
        '</td>' +
        '<td style="border-left: 2px solid #000000;"></td>' +
        '<td></td>' +
        '<td></td>' +
        '</tr>' +
        '<tr>' +
        '<td></td>' +
        '<td style="border-bottom:2px solid #000000;">' +
        '<input class="inputDiv soloNumeros sinEspacios" maxlength="1" id="act2num7"></input>' +
        '</td>' +
        '<td style="border-bottom:2px solid #000000;">' +
        '<input class="inputDiv soloNumeros sinEspacios" maxlength="1" id="act2num8"></input>' +
        '</td>' +
        '<td style="border-bottom:2px solid #000000;">' +
        '<input class="inputDiv soloNumeros sinEspacios" maxlength="1" id="act2num9"></input>' +
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
        '<input class="inputDiv soloNumeros sinEspacios" maxlength="1" id="act2num10"></input>' +
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
        '<input class="inputDiv soloNumeros sinEspacios" maxlength="1" id="act2num11"></input>' +
        '</td>' +
        '<td style="border-bottom:2px solid #000000;">' +
        '<input class="inputDiv soloNumeros sinEspacios" maxlength="1" id="act2num12"></input>' +
        '</td>' +
        '<td style="border-bottom:2px solid #000000;">' +
        '<input class="inputDiv soloNumeros sinEspacios" maxlength="1" id="act2num13"></input>' +
        '</td>' +
        '<td></td>' +
        '<td style="border-left: 2px solid #000000;">' +
        '<input class="inputDiv soloNumeros sinEspacios" maxlength="1" id="act2num14"></input>' +
        '</td>' +
        '<td>' +
        '<input class="inputDiv soloNumeros sinEspacios" maxlength="1" id="act2num15"></input>' +
        '</td>' +
        '<td></td>' +
        '</tr>' +
        '<tr>' +
        '<td></td>' +
        '<td></td>' +
        '<td>' +
        '<input class="inputDiv soloNumeros sinEspacios" maxlength="1" id="act2num16"></input>' +
        '</td>' +
        '<td>' +
        '<input class="inputDiv soloNumeros sinEspacios" maxlength="1" id="act2num17"></input>' +
        '</td>' +
        '<td style="border-left: 2px solid #000000;"></td>' +
        '<td></td>' +
        '<td></td>' +
        '</tr>' +
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<input class="inputDiv soloNumeros sinEspacios" maxlength="1" id="act2num18" readonly></input>' +
        '</td>' +
        '<td style="border-bottom:2px solid #000000;">' +
        '<input class="inputDiv soloNumeros sinEspacios" maxlength="1" id="act2num19"></input>' +
        '</td>' +
        '<td style="border-bottom:2px solid #000000;">' +
        '<input class="inputDiv soloNumeros sinEspacios" maxlength="1" id="act2num20"></input>' +
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
        '<input class="inputDiv soloNumeros sinEspacios" maxlength="1" id="act2num21"></input>' +
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
        '<input class="inputDiv soloNumeros sinEspacios" maxlength="1" id="act2num22"></input>' +
        '</td>' +
        '<td style="border-bottom:2px solid #000000;">' +
        '<input class="inputDiv soloNumeros sinEspacios" maxlength="1" id="act2num23"></input>' +
        '</td>' +
        '<td style="border-bottom:2px solid #000000;">' +
        '<input class="inputDiv soloNumeros sinEspacios" maxlength="1" id="act2num24"></input>' +
        '</td>' +
        '<td></td>' +
        '<td style="border-left: 2px solid #000000;">' +
        '<input class="inputDiv soloNumeros sinEspacios" maxlength="1" id="act2num25"></input>' +
        '</td>' +
        '<td>' +
        '<input class="inputDiv soloNumeros sinEspacios" maxlength="1" id="act2num26"></input>' +
        '</td>' +
        '<td></td>' +
        '</tr>' +
        '<tr>' +
        '<td></td>' +
        '<td></td>' +
        '<td>' +
        '<input class="inputDiv soloNumeros sinEspacios" maxlength="1" id="act2num27"></input>' +
        '</td>' +
        '<td>' +
        '<input class="inputDiv soloNumeros sinEspacios" maxlength="1" id="act2num28"></input>' +
        '</td>' +
        '<td style="border-left: 2px solid #000000;"></td>' +
        '<td></td>' +
        '<td></td>' +
        '</tr>' +
        '<tr>' +
        '<td></td>' +
        '<td style="border-bottom:2px solid #000000;">' +
        '<input class="inputDiv soloNumeros sinEspacios" maxlength="1" id="act2num29"></input>' +
        '</td>' +
        '<td style="border-bottom:2px solid #000000;">' +
        '<input class="inputDiv soloNumeros sinEspacios" maxlength="1" id="act2num30"></input>' +
        '</td>' +
        '<td style="border-bottom:2px solid #000000;">' +
        '<input class="inputDiv soloNumeros sinEspacios" maxlength="1" id="act2num31"></input>' +
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
        '<input class="inputDiv soloNumeros sinEspacios" maxlength="1" id="act2num32"></input>' +
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
        '<input class="inputDiv soloNumeros sinEspacios" maxlength="1" id="act2num33"></input>' +
        '</td>' +
        '<td style="border-bottom:2px solid #000000;">' +
        '<input class="inputDiv soloNumeros sinEspacios" maxlength="1" id="act2num34"></input>' +
        '</td>' +
        '<td style="border-bottom:2px solid #000000;">' +
        '<input class="inputDiv soloNumeros sinEspacios" maxlength="1" id="act2num35"></input>' +
        '</td>' +
        '<td></td>' +
        '<td style="border-left: 2px solid #000000;">' +
        '<input class="inputDiv soloNumeros sinEspacios" maxlength="1" id="act2num36"></input>' +
        '</td>' +
        '<td>' +
        '<input class="inputDiv soloNumeros sinEspacios" maxlength="1" id="act2num37"></input>' +
        '</td>' +
        '<td></td>' +
        '</tr>' +
        '<tr>' +
        '<td></td>' +
        '<td></td>' +
        '<td>' +
        '<input class="inputDiv soloNumeros sinEspacios" maxlength="1" id="act2num38"></input>' +
        '</td>' +
        '<td>' +
        '<input class="inputDiv soloNumeros sinEspacios" maxlength="1" id="act2num39"></input>' +
        '</td>' +
        '<td style="border-left: 2px solid #000000;"></td>' +
        '<td></td>' +
        '<td></td>' +
        '</tr>' +
        '<tr>' +
        '<td></td>' +
        '<td style="border-bottom:2px solid #000000;">' +
        '<input class="inputDiv soloNumeros sinEspacios" maxlength="1" id="act2num40"></input>' +
        '</td>' +
        '<td style="border-bottom:2px solid #000000;">' +
        '<input class="inputDiv soloNumeros sinEspacios" maxlength="1" id="act2num41"></input>' +
        '</td>' +
        '<td style="border-bottom:2px solid #000000;">' +
        '<input class="inputDiv soloNumeros sinEspacios" maxlength="1" id="act2num42"></input>' +
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
        '<input class="inputDiv soloNumeros sinEspacios" maxlength="1" id="act2num43"></input>' +
        '</td>' +
        '<td style="border-left: 2px solid #000000;"></td>' +
        '<td></td>' +
        '<td></td>' +
        '</tr>' +
        '</table>'
    ],
];
var act02Txt = document.getElementsByClassName('act2class');

random2.sort(f_randomico);
for (i = 0; i < act02Txt.length; i++) {
    $('#' + act02Txt[i].id).html(random2[i]);
}

function pregunta2() {
    var respact2 = ['-', '2', '7', '3', '4', '3', '6', '-', '3', '6', '0', '-', '2', '8', '4', '1', '0', '7', '', '-', '7', '0', '-', '4', '0', '8', '7', '3', '5', '-', '3', '5', '0', '-', '4', '8', '6', '5', '4', '0', '-', '4', '0', '0', ];
    var cont = 0;
    for (var i = 0; i < 44; i++) {
        var res = $('#act2num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act2num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act2num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 44;
    $('#nota2').val(parseFloat(total).toFixed(2));
    /*$('#txtNota').html(total.toFixed(2));
     document.getElementById('bt_comprobar').disabled = true;
     $('input').attr("disabled", true);
     $('#txtAlumno').attr("disabled", false);*/
}