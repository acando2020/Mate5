/*document.getElementById('nota8').addEventListener('keypress', () => {
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
});*/
/////////////////////////pregunta2//////////////////////////////////////
var random1 = [
    ['<td style="background: #dfe3f2;">4</td>' +
        '<td>8</td>' +
        '<td><input class="inputfraccciones sinEspacios" id="act1num0"></input></td>' +
        '<td><input class="inputfraccciones sinEspacios" id="act1num1"></input></td>' +
        '<td><input class="inputfraccciones sinEspacios" id="act1num2"></input></td>' +
        '<td><input class="inputfraccciones sinEspacios" id="act1num3"></input></td>' +
        '<td><input class="inputfraccciones sinEspacios" id="act1num4"></input></td>' +
        '<td><input class="inputfraccciones sinEspacios" id="act1num5"></input></td>' +
        '<td><input class="inputfraccciones sinEspacios" id="act1num6"></input></td>' +
        '<td><input class="inputfraccciones sinEspacios" id="act1num7"></input></td>'
    ],
    ['<td style="background: #dfe3f2;">6</td>' +
        '<td>12</td>' +
        '<td><input class="inputfraccciones sinEspacios" id="act1num8"></input></td>' +
        '<td><input class="inputfraccciones sinEspacios" id="act1num9"></input></td>' +
        '<td><input class="inputfraccciones sinEspacios" id="act1num10"></input></td>' +
        '<td><input class="inputfraccciones sinEspacios" id="act1num11"></input></td>' +
        '<td><input class="inputfraccciones sinEspacios" id="act1num12"></input></td>' +
        '<td><input class="inputfraccciones sinEspacios" id="act1num13"></input></td>' +
        '<td><input class="inputfraccciones sinEspacios" id="act1num14"></input></td>' +
        '<td><input class="inputfraccciones sinEspacios" id="act1num15"></input></td>'
    ],
    ['<td style="background: #dfe3f2;">7</td>' +
        '<td>14</td>' +
        '<td><input class="inputfraccciones sinEspacios" id="act1num16"></input></td>' +
        '<td><input class="inputfraccciones sinEspacios" id="act1num17"></input></td>' +
        '<td><input class="inputfraccciones sinEspacios" id="act1num18"></input></td>' +
        '<td><input class="inputfraccciones sinEspacios" id="act1num19"></input></td>' +
        '<td><input class="inputfraccciones sinEspacios" id="act1num20"></input></td>' +
        '<td><input class="inputfraccciones sinEspacios" id="act1num21"></input></td>' +
        '<td><input class="inputfraccciones sinEspacios" id="act1num22"></input></td>' +
        '<td><input class="inputfraccciones sinEspacios" id="act1num23"></input></td>'
    ],
    ['<td style="background: #dfe3f2;">8</td>' +
        '<td>16</td>' +
        '<td><input class="inputfraccciones sinEspacios" id="act1num24"></input></td>' +
        '<td><input class="inputfraccciones sinEspacios" id="act1num25"></input></td>' +
        '<td><input class="inputfraccciones sinEspacios" id="act1num26"></input></td>' +
        '<td><input class="inputfraccciones sinEspacios" id="act1num27"></input></td>' +
        '<td><input class="inputfraccciones sinEspacios" id="act1num28"></input></td>' +
        '<td><input class="inputfraccciones sinEspacios" id="act1num29"></input></td>' +
        '<td><input class="inputfraccciones sinEspacios" id="act1num30"></input></td>' +
        '<td><input class="inputfraccciones sinEspacios" id="act1num31"></input></td>'
    ],
];

var act01Txt = document.getElementsByClassName('act1class');

random1.sort(f_randomico);
for (i = 0; i < act01Txt.length; i++) {
    $('#' + act01Txt[i].id).html(random1[i]);
}

function pregunta1() {
    var respact2 = ['12', '16', '20', '24', '28', '32', '36', '40', '18', '24', '30', '36', '42', '48', '54', '60', '21', '28', '35', '42', '49', '56', '63', '70', '24', '32', '40', '48', '56', '64', '72', '80', ];
    var cont = 0;
    for (var i = 0; i < 32; i++) {
        var res = $('#act1num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act1num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act1num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 2.5) / 32;
    $('#nota1').val(parseFloat(total).toFixed(2));

}
/////////////////pregunta2//////////////////////////////////////////
var random2 = [
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>Múltiplos de 9 mayores que 18 y menores que 81: <input type="text" class="inputfraccciones sinEspacios" id="act2num0">,' +
        '<input type="text" class="inputfraccciones sinEspacios" id="act2num1">,' +
        '<input type="text" class="inputfraccciones sinEspacios" id="act2num2">,' +
        '<input type="text" class="inputfraccciones sinEspacios" id="act2num3">,' +
        '<input type="text" class="inputfraccciones sinEspacios" id="act2num4">,' +
        '<input type="text" class="inputfraccciones sinEspacios" id="act2num5"></td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>Múltiplos de 10 mayores que 30 y menores que 100: <input type="text" class="inputfraccciones sinEspacios" id="act2num6">,' +
        '<input type="text" class="inputfraccciones sinEspacios" id="act2num7">,' +
        '<input type="text" class="inputfraccciones sinEspacios" id="act2num8">,' +
        '<input type="text" class="inputfraccciones sinEspacios" id="act2num9">,' +
        '<input type="text" class="inputfraccciones sinEspacios" id="act2num10">,' +
        '<input type="text" class="inputfraccciones sinEspacios" id="act2num11"></td>'
    ],
    ['  <td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>Múltiplos de 12 mayores que 24 y menores que 108: <input type="text" class="inputfraccciones sinEspacios" id="act2num12">,' +
        '<input type="text" class="inputfraccciones sinEspacios" id="act2num13">,' +
        '<input type="text" class="inputfraccciones sinEspacios" id="act2num14">,' +
        '<input type="text" class="inputfraccciones sinEspacios" id="act2num15">,' +
        '<input type="text" class="inputfraccciones sinEspacios" id="act2num16">,' +
        '<input type="text" class="inputfraccciones sinEspacios" id="act2num17"></td>'
    ],
];
var act02Txt = document.getElementsByClassName('act2class');

random2.sort(f_randomico);
for (i = 0; i < act02Txt.length; i++) {
    $('#' + act02Txt[i].id).html(random2[i]);
}

function pregunta2() {
    var respact2 = ['27', '36', '45', '54', '63', '72', '40', '50', '60', '70', '80', '90', '36', '48', '60', '72', '84', '96', ];
    var cont = 0;
    for (var i = 0; i < 18; i++) {
        var res = $('#act2num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act2num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act2num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 2.5) / 18;
    $('#nota2').val(parseFloat(total).toFixed(2));

}


//////////////pregunta3////////////////////////////////////////////
var random3 = [
    [' <td><b style="color: #005ca4"><li></li></b></td> <td>80 es múltiplo de 10 porque</td> <td><input class="form-control sinEspacios" id="act3num0"></input></td>'],
    ['<td><b style="color: #005ca4"><li></li></b></td> <td>54 es múltiplo de 6 porque</td> <td><input class="form-control sinEspacios" id="act3num1"></input></td>'],
    ['<td><b style="color: #005ca4"><li></li></b></td> <td>140 es múltiplo de 2 porque</td> <td><input class="form-control sinEspacios" id="act3num2"></input></td>'],
];
var act03Txt = document.getElementsByClassName('act3class');

random3.sort(f_randomico);
for (i = 0; i < act03Txt.length; i++) {
    $('#' + act03Txt[i].id).html(random3[i]);
}

function pregunta3() {
    var respact2 = ['10x8=80', '6x9=54', '2x70=140', ];
    var cont = 0;
    for (var i = 0; i < 3; i++) {
        var res = $('#act3num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act3num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act3num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 2.5) / 3;
    $('#nota3').val(parseFloat(total).toFixed(2));

}


function pregunta4() {
    var respact2 = ['48', '7', ];
    var cont = 0;
    for (var i = 0; i < 2; i++) {
        var res = $('#act4num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act4num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act4num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 2.5) / 2;
    $('#nota4').val(parseFloat(total).toFixed(2));

}



function NotaFinal() {
    /*var nota1 = document.getElementById('nota1').value;
    var nota2 = document.getElementById('nota2').value;
    var nota3 = document.getElementById('nota3').value;
    var nota4 = document.getElementById('nota4').value;
    var nota5 = document.getElementById('nota5').value;
    var nota6 = document.getElementById('nota6').value;
    var nota7 = document.getElementById('nota7').value;
    var nota8 = document.getElementById('nota8').value;
    var nota9 = document.getElementById('nota9').value;
    var nota10 = document.getElementById('nota10').value;
    if ((nota8 == "") || (nota9 == "") || (nota10 == "")) {
        alert("Debe ingresar la nota de la pregunta 8, 9 o 10.")
    } else {*/
    pregunta1();
    pregunta2();
    pregunta3();
    pregunta4();
    var nota1 = document.getElementById('nota1').value;
    var nota2 = document.getElementById('nota2').value;
    var nota3 = document.getElementById('nota3').value;
    var nota4 = document.getElementById('nota4').value;
    var total = parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4);
    $('#txtNota').html(total.toFixed(2));
    document.getElementById('bt_comprobar').disabled = true;
    $('input').attr("disabled", true);
    $('#txtAlumno').attr("disabled", false);
    //}
}
