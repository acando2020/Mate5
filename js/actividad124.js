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
    var total = (cont * 2) / 10;
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
    var total = (cont * 2) / 44;
    $('#nota2').val(parseFloat(total).toFixed(2));
    /*$('#txtNota').html(total.toFixed(2));
     document.getElementById('bt_comprobar').disabled = true;
     $('input').attr("disabled", true);
     $('#txtAlumno').attr("disabled", false);*/
}
////////////pregunta3/////////////////////////////////////
var random3 = [
    ['<div class="col-lg-6">' +
        '<b style="color: #005ca4"><li></li></b>' +
        '<table class="table-bordered">' +
        '<tr>' +
        '<td></td>' +
        '<td>5</td>' +
        '<td>8</td>' +
        '<td>3</td>' +
        '<td>0</td>' +
        '<td style="border-left: 2px solid #000000; border-bottom: 2px solid #000000;">7</td>' +
        '<td style="border-bottom: 2px solid #000000;"></td>' +
        '<td style="border-bottom: 2px solid #000000;"></td>' +
        '</tr>' +
        '<tr>' +
        '<td>' +
        '<input id="act3num0" class="inputDiv soloNumeros" maxlength="1"></input>' +
        '</td>' +
        '<td style="border-bottom: 2px solid #000000;">' +
        '<input id="act3num1" class="inputDiv soloNumeros" maxlength="1"></input>' +
        '</td>' +
        '<td style="border-bottom: 2px solid #000000;">' +
        '<input id="act3num2" class="inputDiv soloNumeros" maxlength="1"></input>' +
        '</td>' +
        '<td></td>' +
        '<td></td>' +
        '<td style="border-left: 2px solid #000000;">' +
        '<input id="act3num3" class="inputDiv soloNumeros" maxlength="1"></input>' +
        '</td>' +
        '<td>' +
        '<input id="act3num4" class="inputDiv soloNumeros" maxlength="1"></input>' +
        '</td>' +
        '<td>' +
        '<input id="act3num5" class="inputDiv soloNumeros" maxlength="1"></input>' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td></td>' +
        '<td></td>' +
        '<td>' +
        '<input id="act3num6" class="inputDiv soloNumeros" maxlength="1"></input>' +
        '</td>' +
        '<td>' +
        '<input id="act3num7" class="inputDiv soloNumeros" maxlength="1"></input>' +
        '</td>' +
        '<td></td>' +
        '<td style="border-left: 2px solid #000000;"></td>' +
        '<td></td>' +
        '<td></td>' +
        '</tr>' +
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<input id="act3num8" class="inputDiv soloNumeros" maxlength="1"></input>' +
        '</td>' +
        '<td style="border-bottom: 2px solid #000000;">' +
        '<input id="act3num9" class="inputDiv soloNumeros" maxlength="1"></input>' +
        '</td>' +
        '<td style="border-bottom: 2px solid #000000;">' +
        '<input id="act3num10" class="inputDiv soloNumeros" maxlength="1"></input>' +
        '</td>' +
        '<td></td>' +
        '<td style="border-left: 2px solid #000000;"></td>' +
        '<td></td>' +
        '<td></td>' +
        '</tr>' +
        '<tr>' +
        '<td></td>' +
        '<td></td>' +
        '<td></td>' +
        '<td>' +
        '<input id="act3num11" class="inputDiv soloNumeros" maxlength="1">' +
        '</td>' +
        '<td>' +
        '<input id="act3num12" class="inputDiv soloNumeros" maxlength="1">' +
        '</td>' +
        '<td style="border-left: 2px solid #000000;"></td>' +
        '<td></td>' +
        '<td></td>' +
        '</tr>' +
        '<tr>' +
        '<td></td>' +
        '<td></td>' +
        '<td>' +
        '<input id="act3num13" class="inputDiv soloNumeros" maxlength="1">' +
        '</td>' +
        '<td style="border-bottom: 2px solid #000000;">' +
        '<input id="act3num14" class="inputDiv soloNumeros" maxlength="1">' +
        '</td>' +
        '<td style="border-bottom: 2px solid #000000;">' +
        '<input id="act3num15" class="inputDiv soloNumeros" maxlength="1">' +
        '</td>' +
        '<td style="border-left: 2px solid #000000;"></td>' +
        '<td></td>' +
        '<td></td>' +
        '</tr>' +
        '<tr>' +
        '<td></td>' +
        '<td></td>' +
        '<td></td>' +
        '<td></td>' +
        '<td>' +
        '<input id="act3num16" class="inputDiv soloNumeros" maxlength="1">' +
        '</td>' +
        '<td style="border-left: 2px solid #000000;"></td>' +
        '<td></td>' +
        '<td></td>' +
        '</tr>' +
        '</table>' +
        '</div>' +
        '<div class="col-lg-6">' +
        '<b style="color: #005ca4">Comprobación</b>' +
        '<table class="table-bordered">' +
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<input id="act3num17" class="inputDiv soloNumeros" maxlength="1">' +
        '</td>' +
        '<td>' +
        '<input id="act3num18" class="inputDiv soloNumeros" maxlength="1">' +
        '</td>' +
        '<td>' +
        '<input id="act3num19" class="inputDiv soloNumeros" maxlength="1">' +
        '</td>' +
        '</tr>' +
        '<tr style="border-bottom: 2px solid #000000;">' +
        '<td>×</td>' +
        '<td></td>' +
        '<td></td>' +
        '<td>' +
        '<input id="act3num20" class="inputDiv soloNumeros" maxlength="1">' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td>' +
        '<input id="act3num21" class="inputDiv soloNumeros" maxlength="1">' +
        '</td>' +
        '<td>' +
        '<input id="act3num22" class="inputDiv soloNumeros" maxlength="1">' +
        '</td>' +
        '<td>' +
        '<input id="act3num23" class="inputDiv soloNumeros" maxlength="1">' +
        '</td>' +
        '<td>' +
        '<input id="act3num24" class="inputDiv soloNumeros" maxlength="1">' +
        '</td>' +
        '</tr>' +
        '<tr style="border-bottom: 2px solid #000000;">' +
        '<td>+</td>' +
        '<td></td>' +
        '<td></td>' +
        '<td>' +
        '<input id="act3num25" class="inputDiv soloNumeros" maxlength="1">' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td>' +
        '<input id="act3num26" class="inputDiv soloNumeros" maxlength="1">' +
        '</td>' +
        '<td>' +
        '<input id="act3num27" class="inputDiv soloNumeros" maxlength="1">' +
        '</td>' +
        '<td>' +
        '<input id="act3num28" class="inputDiv soloNumeros" maxlength="1">' +
        '</td>' +
        '<td>' +
        '<input id="act3num29" class="inputDiv soloNumeros" maxlength="1">' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>'
    ],
    ['<div class="col-lg-6">  <b style="color: #005ca4"><li></li></b>' +
        '<table class="table-bordered">' +
        '<tr>' +
        '<td></td>' +
        '<td>6</td>' +
        '<td>1</td>' +
        '<td>3</td>' +
        '<td>4</td>' +
        '<td style="border-bottom: 2px solid #000000;border-left: 2px solid #000000;">4</td>' +
        '<td style="border-bottom: 2px solid #000000;"></td>' +
        '<td style="border-bottom: 2px solid #000000;"></td>' +
        '<td style="border-bottom: 2px solid #000000;"></td>' +
        '</tr>' +
        '<tr>' +
        '<td>' +
        '<input id="act3num30" class="inputDiv soloNumeros" maxlength="1">' +
        '</td>' +
        '<td style="border-bottom: 2px solid #000000;">' +
        '<input id="act3num31" class="inputDiv soloNumeros" maxlength="1">' +
        '</td>' +
        '<td style="border-bottom: 2px solid #000000;"></td>' +
        '<td></td>' +
        '<td></td>' +
        '<td style="border-left: 2px solid #000000;">' +
        '<input id="act3num32" class="inputDiv soloNumeros" maxlength="1">' +
        '</td>' +
        '<td>' +
        '<input id="act3num33" class="inputDiv soloNumeros" maxlength="1">' +
        '</td>' +
        '<td>' +
        '<input id="act3num34" class="inputDiv soloNumeros" maxlength="1">' +
        '</td>' +
        '<td>' +
        '<input id="act3num35" class="inputDiv soloNumeros" maxlength="1">' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<input id="act3num36" class="inputDiv soloNumeros" maxlength="1">' +
        '</td>' +
        '<td>' +
        '<input id="act3num37" class="inputDiv soloNumeros" maxlength="1">' +
        '</td>' +
        '<td></td>' +
        '<td></td>' +
        '<td style="border-left: 2px solid #000000;"></td>' +
        '<td></td>' +
        '<td></td>' +
        '<td></td>' +
        '</tr>' +
        '<tr>' +
        '<td>' +
        '<input id="act3num38" class="inputDiv soloNumeros" maxlength="1">' +
        '</td>' +
        '<td style="border-bottom: 2px solid #000000;">' +
        '<input id="act3num39" class="inputDiv soloNumeros" maxlength="1">' +
        '</td>' +
        '<td style="border-bottom: 2px solid #000000;">' +
        '<input id="act3num40" class="inputDiv soloNumeros" maxlength="1">' +
        '</td>' +
        '<td></td>' +
        '<td></td>' +
        '<td style="border-left: 2px solid #000000;"></td>' +
        '<td></td>' +
        '<td></td>' +
        '<td></td>' +
        '</tr>' +
        '<tr>' +
        '<td></td>' +
        '<td></td>' +
        '<td>' +
        '<input id="act3num41" class="inputDiv soloNumeros" maxlength="1">' +
        '</td>' +
        '<td>' +
        '<input id="act3num42" class="inputDiv soloNumeros" maxlength="1">' +
        '</td>' +
        '<td></td>' +
        '<td style="border-left: 2px solid #000000;"></td>' +
        '<td></td>' +
        '<td></td>' +
        '<td></td>' +
        '</tr>' +
        '<tr>' +
        '<td></td>' +
        '<td>' +
        '<input id="act3num43" class="inputDiv soloNumeros" maxlength="1">' +
        '</td>' +
        '<td style="border-bottom: 2px solid #000000;">' +
        '<input id="act3num44" class="inputDiv soloNumeros" maxlength="1">' +
        '</td>' +
        '<td style="border-bottom: 2px solid #000000;">' +
        '<input id="act3num45" class="inputDiv soloNumeros" maxlength="1">' +
        '</td>' +
        '<td></td>' +
        '<td style="border-left: 2px solid #000000;"></td>' +
        '<td></td>' +
        '<td></td>' +
        '<td></td>' +
        '</tr>' +
        '<tr>' +
        '<td></td>' +
        '<td></td>' +
        '<td></td>' +
        '<td>' +
        '<input id="act3num46" class="inputDiv soloNumeros" maxlength="1">' +
        '</td>' +
        '<td>' +
        '<input id="act3num47" class="inputDiv soloNumeros" maxlength="1">' +
        '</td>' +
        '<td style="border-left: 2px solid #000000;"></td>' +
        '<td></td>' +
        '<td></td>' +
        '<td></td>' +
        '</tr>' +
        '<tr>' +
        '<td></td>' +
        '<td></td>' +
        '<td>' +
        '<input id="act3num48" class="inputDiv soloNumeros" maxlength="1">' +
        '</td>' +
        '<td style="border-bottom: 2px solid #000000;">' +
        '<input id="act3num49" class="inputDiv soloNumeros" maxlength="1">' +
        '</td>' +
        '<td style="border-bottom: 2px solid #000000;">' +
        '<input id="act3num50" class="inputDiv soloNumeros" maxlength="1">' +
        '</td>' +
        '<td style="border-left: 2px solid #000000;"></td>' +
        '<td></td>' +
        '<td></td>' +
        '<td></td>' +
        '</tr>' +
        '<tr>' +
        '<td></td>' +
        '<td></td>' +
        '<td></td>' +
        '<td></td>' +
        '<td>' +
        '<input id="act3num51" class="inputDiv soloNumeros" maxlength="1">' +
        '</td>' +
        '<td style="border-left: 2px solid #000000;"></td>' +
        '<td></td>' +
        '<td></td>' +
        '<td></td>' +
        '</tr>' +
        '</table>' +
        '</div>' +
        '<div class="col-lg-6">' +
        '<b style="color: #005ca4">Comprobación</b>' +
        '<table class="table-bordered">' +
        '<tr>' +
        '<td><input id="act3num52" class="inputDiv soloNumeros" maxlength="1"></td>' +
        '<td>' +
        '<input id="act3num53" class="inputDiv soloNumeros" maxlength="1">' +
        '</td>' +
        '<td>' +
        '<input id="act3num54" class="inputDiv soloNumeros" maxlength="1">' +
        '</td>' +
        '<td>' +
        '<input id="act3num55" class="inputDiv soloNumeros" maxlength="1">' +
        '</td>' +
        '</tr>' +
        '<tr style="border-bottom: 2px solid #000000;">' +
        '<td>×</td>' +
        '<td></td>' +
        '<td></td>' +
        '<td>' +
        '<input id="act3num56" class="inputDiv soloNumeros" maxlength="1">' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td>' +
        '<input id="act3num57" class="inputDiv soloNumeros" maxlength="1">' +
        '</td>' +
        '<td>' +
        '<input id="act3num58" class="inputDiv soloNumeros" maxlength="1">' +
        '</td>' +
        '<td>' +
        '<input id="act3num59" class="inputDiv soloNumeros" maxlength="1">' +
        '</td>' +
        '<td>' +
        '<input id="act3num60" class="inputDiv soloNumeros" maxlength="1">' +
        '</td>' +
        '</tr>' +
        '<tr style="border-bottom: 2px solid #000000;">' +
        '<td>+</td>' +
        '<td></td>' +
        '<td></td>' +
        '<td>' +
        '<input id="act3num61" class="inputDiv soloNumeros" maxlength="1">' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td>' +
        '<input id="act3num62" class="inputDiv soloNumeros" maxlength="1">' +
        '</td>' +
        '<td>' +
        '<input id="act3num63" class="inputDiv soloNumeros" maxlength="1">' +
        '</td>' +
        '<td>' +
        '<input id="act3num64" class="inputDiv soloNumeros" maxlength="1">' +
        '</td>' +
        '<td>' +
        '<input id="act3num65" class="inputDiv soloNumeros" maxlength="1">' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>'
    ],
];
var act03Txt = document.getElementsByClassName('act3class');

random3.sort(f_randomico);
for (i = 0; i < act03Txt.length; i++) {
    $('#' + act03Txt[i].id).html(random3[i]);
}

function pregunta3() {
    var respact2 = ['-', '5', '6', '8', '3', '2', '2', '3', '-', '2', '1', '2', '0', '-', '1', '4', '6', '8', '3', '2', '7', '5', '8', '2', '4', '6', '5', '8', '3', '0', '-', '4', '1', '5', '3', '3', '2', '1', '-', '2', '0', '1', '3', '-', '1', '2', '1', '4', '-', '1', '2', '2', '1', '5', '3', '3', '4', '6', '1', '3', '2', '2', '6', '1', '3', '4', ];
    var cont = 0;
    for (var i = 0; i < 66; i++) {
        var res = $('#act3num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act3num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act3num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 2) / 66;
    $('#nota3').val(parseFloat(total).toFixed(2));
    /*$('#txtNota').html(total.toFixed(2));
     document.getElementById('bt_comprobar').disabled = true;
     $('input').attr("disabled", true);
     $('#txtAlumno').attr("disabled", false);*/
}
////////////////////pregunta4//////////////////////////////
var random4 = [
    ['<td><b style="color: #005ca4"><li></li></b></td> <td>783 ÷ 9 =</td> <td> <input id="act4num0" type="number" class="form-control"> </td>'],
    ['<td><b style="color: #005ca4"><li></li></b></td> <td>2 720 ÷ 4 =</td> <td> <input id="act4num4" type="number" class="form-control"> </td>'],
    [' <td><b style="color: #005ca4"><li></li></b></td> <td>1 704 ÷ 8 =</td> <td> <input id="act4num1" type="number" class="form-control"> </td>'],
    [' <td><b style="color: #005ca4"><li></li></b></td> <td>7 356 ÷ 3 =</td> <td> <input id="act4num6" type="number" class="form-control"> </td>'],
    ['<td><b style="color: #005ca4"><li></li></b></td> <td>5 160 ÷ 8 =</td> <td> <input id="act4num2" type="number" class="form-control"> </td>'],
    ['<td><b style="color: #005ca4"><li></li></b></td> <td>6 244 ÷ 2 =</td> <td> <input id="act4num5" type="number" class="form-control"> </td>'],
    [' <td><b style="color: #005ca4"><li></li></b></td> <td>4 320 ÷ 5 =</td> <td> <input id="act4num3" type="number" class="form-control"> </td>'],
    ['<td><b style="color: #005ca4"><li></li></b></td> <td>11 124 ÷ 6 =</td> <td> <input id="act4num7" type="number" class="form-control"> </td>'],
];
var act04Txt = document.getElementsByClassName('act4class');

random4.sort(f_randomico);
for (i = 0; i < act04Txt.length; i++) {
    $('#' + act04Txt[i].id).html(random4[i]);
}

function pregunta4() {
    var respact2 = ['87', '213', '645', '864', '680', '3122', '2452', '1854', ];
    var cont = 0;
    for (var i = 0; i < 8; i++) {
        var res = $('#act4num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act4num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act4num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 2) / 8;
    $('#nota4').val(parseFloat(total).toFixed(2));
    /*$('#txtNota').html(total.toFixed(2));
     document.getElementById('bt_comprobar').disabled = true;
     $('input').attr("disabled", true);
     $('#txtAlumno').attr("disabled", false);*/
}
//////////////////////////////////
function pregunta5() {
    var nt1 = 0;
    var act5num0 = document.getElementById('act5num0').value;
    if (act5num0 == 920) {
        $('#act5num0').css("background", "#00e600");
        nt1 = 2;
    } else {
        $('#act5num0').css("background", "#ff6666");
    }
    $('#nota5').val(parseFloat(nt1).toFixed(2));
}


function NotaFinal() {
    pregunta1();
    pregunta2();
    pregunta3();
    pregunta4();
    pregunta5();
    var nota1 = document.getElementById('nota1').value;
    var nota2 = document.getElementById('nota2').value;
    var nota3 = document.getElementById('nota3').value;
    var nota4 = document.getElementById('nota4').value;
    var nota5 = document.getElementById('nota5').value;

    var total = parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4) + parseFloat(nota5);

    $('#txtNota').html(total.toFixed(2));
    document.getElementById('bt_comprobar').disabled = true;
    $('input').attr("disabled", true);
    $('#txtAlumno').attr("disabled", false);


}