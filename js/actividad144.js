document.getElementById('nota9').addEventListener('keypress', () => {
    validNumero(0, 1, 1);
});
document.getElementById('nota9').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota9'), 1)
});
var act78 = [];
var act78_1 = [];
var multiplo1 = 1;
var multiplo2 = 1;

var num1 = Math.floor((Math.random() * 5) + 2);
var num2 = (Math.floor((Math.random() * 4) + 1)) * 10;
for (var i = 0; i < 7; i++) {
    multiplo1 = parseInt(multiplo1) * parseInt(num1);
    act78[i] = parseInt(multiplo1);
    multiplo2 = parseInt(multiplo2) * parseInt(num2);
    act78_1[i] = parseInt(multiplo2);
}

act78.sort(function(a, b) { return b - a; });
$('#num1_2').html('' + act78[0] + ',' + act78[1] + ',' + act78[2] + ',' + act78[3] + ',' + act78[4] + ',' + act78[5] + '');
$('#num1_1').html('' + act78[0] + ' ÷ ' + act78[1] + ' =');

function pregunta1() {
    var respact2 = [act78[6], act78[6], '3', '243', '9', ];
    var cont = 0;
    for (var i = 0; i < 5; i++) {
        var res = $('#act1num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act1num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act1num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 5;
    $('#nota1').val(parseFloat(total).toFixed(2));

}
///oregunta2
function pregunta2() {
    var respact2 = ['2', '2', '2', '840', '420', '210', '105', '1575', ];
    var cont = 0;
    for (var i = 0; i < 8; i++) {
        var res = $('#act2num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act2num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act2num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 8;
    $('#nota2').val(parseFloat(total).toFixed(2));

}

/////pregunta3

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
    var total = (cont * 1) / 66;
    $('#nota3').val(parseFloat(total).toFixed(2));
    /*$('#txtNota').html(total.toFixed(2));
     document.getElementById('bt_comprobar').disabled = true;
     $('input').attr("disabled", true);
     $('#txtAlumno').attr("disabled", false);*/
}
///////////////////////pregunta4/////////
random4 = [
    ['<table> <tr> <td><b style="color: #005ca4"><li></li></b></td> <td>5 863 ÷ 13 =</td> <td><input class="inputfraccciones sinEspacios soloNumeros" id="act4num0"></input></td> </tr> </table>'],
    [' <table> <tr> <td><b style="color: #005ca4"><li></li></b></td> <td>8 085 ÷ 21 =</td> <td><input class="inputfraccciones sinEspacios soloNumeros" id="act4num1"></input></td> </tr> </table>'],
    [' <table> <tr> <td><b style="color: #005ca4"><li></li></b></td> <td>7 968 ÷ 83 =</td> <td><input class="inputfraccciones sinEspacios soloNumeros" id="act4num2"></input></td> </tr> </table>'],
    [' <table> <tr> <td><b style="color: #005ca4"><li></li></b></td> <td>46 224 ÷ 54 =</td> <td><input class="inputfraccciones sinEspacios soloNumeros" id="act4num3"></input></td> </tr> </table>'],
];
var act04Txt = document.getElementsByClassName('act4class');

random4.sort(f_randomico);
for (i = 0; i < act04Txt.length; i++) {
    $('#' + act04Txt[i].id).html(random4[i]);
}

function pregunta4() {
    var respact2 = ['451', '385', '96', '856', ]
    var cont = 0;
    for (var i = 0; i < 4; i++) {
        var res = $('#act4num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act4num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act4num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 4;
    $('#nota4').val(parseFloat(total).toFixed(2));
    /*$('#txtNota').html(total.toFixed(2));
     document.getElementById('bt_comprobar').disabled = true;
     $('input').attr("disabled", true);
     $('#txtAlumno').attr("disabled", false);*/
}

function NotaFinal() {

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




}
