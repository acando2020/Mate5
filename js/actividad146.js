document.getElementById('nota8').addEventListener('keypress', () => {
    validNumero(0, 1, 1);
});
document.getElementById('nota8').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota8'), 1)
});
document.getElementById('nota9').addEventListener('keypress', () => {
    validNumero(0, 1, 1);
});
document.getElementById('nota9').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota9'), 1)
});
document.getElementById('nota10').addEventListener('keypress', () => {
    validNumero(0, 1, 1);
});
document.getElementById('nota10').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota10'), 1)
});
/////////////////////////pregunta2//////////////////////////////////////
var random1 = [
    '<tr>' +
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
    '</tr>',
    ' <tr>' +
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
    '</tr>',
    '<tr>' +
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
    '</tr>',
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
    var respact2 = ['-', '5', '6', '8', '3', '2', '2', '3', '-', '2', '1', '2', '0', '-', '1', '4', '6', 'dividendo', 'divisor', 'cociente', 'residuo', '9', '0', '5', '3', '5', '6', '5', '4', '2', ];
    var cont = 0;
    for (var i = 0; i < 30; i++) {
        var res = $('#act2num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act2num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act2num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 30;
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


//////////////////pregunta4/////////////////////////
var random4 = [
    ['<tr>' +
        '<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td colspan="2">Si el cociente de una división exacta es 342 y el divisor es 14, ¿cuál es el dividendo?</td></tr><tr>' +
        '<td></td> <td><input class="form-control" style="border: 2px dotted #009771;"> </input></td>' +
        '<td><b style="color: #005ca4">R.</b> El dividendo es <input type="text" id="act4num0" class="inputfraccciones sinEspacios"></td>' +
        '</tr>'
    ],
    ['<tr>' +
        '<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td colspan="2">Si el cociente de una división es 23, el divisor es 56 y el dividendo es 1 289, ¿cuál es el residuo?</td></tr> <tr>' +
        '<td></td> <td><input class="form-control" style="border: 2px dotted #b01480;"> </input></td>' +
        '<td><b style="color: #005ca4">R.</b> El residuo es <input type="text" id="act4num1" class="inputfraccciones sinEspacios"></td>' +
        '</tr>'
    ],
    ['<tr>' +
        '<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td colspan="2">Si el dividendo es 834, el cociente es 39 y el residuo es 15, ¿cuál es el divisor?</td> </tr> <tr>' +
        '<td></td> <td><input class="form-control" style="border: 2px dotted #ef7c00;"> </input></td>' +
        '<td><b style="color: #005ca4">R.</b> El divisor es <input type="text" id="act4num2" class="inputfraccciones sinEspacios"></td>' +
        '</tr>'
    ],
];

var act04Txt = document.getElementsByClassName('act4class');

random4.sort(f_randomico);
for (i = 0; i < act04Txt.length; i++) {
    $('#' + act04Txt[i].id).html(random4[i]);
}

function pregunta4() {
    var respact2 = ['4788', '1', '21', ];
    var cont = 0;
    for (var i = 0; i < 3; i++) {
        var res = $('#act4num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act4num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act4num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 3;
    $('#nota4').val(parseFloat(total).toFixed(2));
}
///////////////////////pregunta5///////////////////////////
var random5 = [
    ['<td><b style="color: #005ca4"><li></li></b></td> <td>9520 ÷ 10 =</td> <td><input class="inputfraccciones sinEspacios" id="act5num0"></input></td>'],
    ['<td><b style="color: #005ca4"><li></li></b></td> <td>1830 ÷ 1 =</td> <td><input class="inputfraccciones sinEspacios" id="act5num1"></input></td>'],
    ['<td><b style="color: #005ca4"><li></li></b></td> <td>19700 ÷ 100 =</td> <td><input class="inputfraccciones sinEspacios" id="act5num2"></input></td>'],
    ['<td><b style="color: #005ca4"><li></li></b></td> <td>250000 ÷ 1 000 =</td> <td><input class="inputfraccciones sinEspacios" id="act5num3"></input></td>'],
    ['<td><b style="color: #005ca4"><li></li></b></td> <td>94600 ÷ 100 =</td> <td><input class="inputfraccciones sinEspacios" id="act5num4"></input></td>'],
    ['<td><b style="color: #005ca4"><li></li></b></td> <td>56000 ÷ 1 000 =</td> <td><input class="inputfraccciones sinEspacios" id="act5num5"></input></td>'],
];
var act05Txt = document.getElementsByClassName('act5class');

random5.sort(f_randomico);
for (i = 0; i < act05Txt.length; i++) {
    $('#' + act05Txt[i].id).html(random5[i]);
}

function pregunta5() {
    var respact2 = ['952', '1830', '197', '250', '946', '56', ];
    var cont = 0;
    for (var i = 0; i < 6; i++) {
        var res = $('#act5num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act5num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act5num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 6;
    $('#nota5').val(parseFloat(total).toFixed(2));
}
//////////////pregunta6/////////////////////////////
function pregunta6() {
    var nt1 = 0;
    var act6num0 = document.getElementById('act6num0').value;
    if (act6num0 == 132) {
        nt1 = 1;
        $('#act6num0').css("background", "#00e600");
    } else {
        $('#act6num0').css("background", "#ff6666");
    }
    $('#nota6').val(parseFloat(nt1).toFixed(2));
}
//////////////////pregunta6/////////////////////////
/*var random6 = [
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
}*/
////////////////pregunta7/////////////////|
var random7 = [
    ['<span class="enc" id="act7num0">8</span>'],
    ['<span class="enc" id="act7num1">40</span>'],
    ['<span class="enc" id="act7num2">58</span>'],
    ['<span class="enc" id="act7num3">55</span>'],
    ['<span class="enc" id="act7num4">14</span>'],
    ['<span class="enc" id="act7num5">27</span>'],
    ['<span class="enc" id="act7num6">41</span>'],
    ['<span class="enc" id="act7num7">56</span>'],
    ['<span class="enc" id="act7num8">96</span>'],
    ['<span class="enc" id="act7num9">49</span>'],
    ['<span class="enc" id="act7num10">18</span>'],
    ['<span class="enc" id="act7num11">15</span>'],
    ['<span class="enc" id="act7num12">47</span>'],
    ['<span class="enc" id="act7num13">63</span>'],
    ['<span class="enc" id="act7num14">9</span>'],
    ['<span class="enc" id="act7num15">10</span>'],
];
var act07Txt = document.getElementsByClassName('act7class');

random7.sort(f_randomico);
for (i = 0; i < act07Txt.length; i++) {
    $('#' + act07Txt[i].id).html(random7[i]);
}
$('.enc').click(function() {

    if ($(this).hasClass('vacio')) {
        $(this).removeClass('vacio')
        $(this).addClass('circulo')

    } else if ($(this).hasClass('circulo')) {
        $(this).removeClass('circulo')
        $(this).addClass('cuadrado')
    } else {
        $(this).removeClass('cuadrado')
        $(this).addClass('vacio')
    }
});



function pregunta7() {


    var cont = 0;
    for (var i = 0; i < 4; i++) {
        var cirID = [1, 3, 11, 15];
        if ($('#act7num' + cirID[i] + '').hasClass('circulo')) {
            cont = cont + 1;
            $('#act7num' + cirID[i] + '').css("background", "#00e600");
        } else {
            $('#act7num' + cirID[i] + '').css("background", "#ff6666");
        }

    }
    for (var i = 0; i < 4; i++) {
        var cuadID = [4, 7, 9, 13];
        if ($('#act7num' + cuadID[i] + '').hasClass('cuadrado')) {
            cont = cont + 1;
            $('#act7num' + cuadID[i] + '').css("background", "#00e600");
        } else {
            $('#act7num' + cuadID[i] + '').css("background", "#ff6666");
        }

    }
    /*for (var i = 0; i < 2; i++) {
        var res = $('#act7num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act7num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act7num' + [i] + '').css("background", "#ff6666");
        }

    }*/
    var total = (cont * 1) / 8;
    $('#nota7').val(parseFloat(total).toFixed(2));
    /*$('#txtNota').html(total.toFixed(2));
     document.getElementById('bt_comprobar').disabled = true;
     $('input').attr("disabled", true);
     $('#txtAlumno').attr("disabled", false);*/
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
     var nota9 = document.getElementById('nota9').value;
     var nota10 = document.getElementById('nota10').value;
     if ((nota8 == "")||(nota9 == "")||(nota10 == "")) {
         alert("Debe ingresar la nota de la pregunta 8, 9 o 10.")
     } else {
    pregunta1();
    pregunta2();
    pregunta3();
    pregunta4();
    pregunta5();
    pregunta6();
    pregunta7();
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
}
