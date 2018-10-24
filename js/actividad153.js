/*document.getElementById('nota3').addEventListener('keypress', () => {
    validNumero(0, 2.5, 1);
});
document.getElementById('nota3').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota3'), 2.5)
});
document.getElementById('nota4').addEventListener('keypress', () => {
    validNumero(0, 2.5, 1);
});
document.getElementById('nota4').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota4'), 2.5)
});
document.getElementById('nota10').addEventListener('keypress', () => {
    validNumero(0, 1, 1);
});
document.getElementById('nota10').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota10'), 1)
});*/
/////////////////////////pregunta2//////////////////////////////////////
var random1 = [
    [' <td><b style="color: #005ca4;"><li></li></b></td>' +
        '<td>D<sub>8</sub></td>' +
        '<td>=</td>' +
        '<td>{<input id="act1num0" class="sinEspacios" type="" style="border:0;border-bottom: 1px solid #000000;" name="">}</td>'
    ],
    [' <td><b style="color: #005ca4;"><li></li></b></td>' +
        '<td>D<sub>13</sub></td>' +
        '<td>=</td>' +
        '<td>{<input id="act1num1" class="sinEspacios" type="" style="border:0;border-bottom: 1px solid #000000;" name="">}</td>'
    ],
    ['<td><b style="color: #005ca4;"><li></li></b></td>' +
        '<td>D<sub>25</sub></td>' +
        '<td>=</td>' +
        '<td>{<input id="act1num2" class="sinEspacios" type="" style="border:0;border-bottom: 1px solid #000000;" name="">}</td>'
    ],
    ['<td><b style="color: #005ca4;"><li></li></b></td>' +
        '<td>D<sub>19</sub></td>' +
        '<td>=</td>' +
        '<td>{<input id="act1num3" class="sinEspacios" type="" style="border:0;border-bottom: 1px solid #000000;" name="">}</td>'
    ],
    [' <td><b style="color: #005ca4;"><li></li></b></td>' +
        '<td>D<sub>22</sub></td>' +
        '<td>=</td>' +
        '<td>{<input id="act1num4" class="sinEspacios" type="" style="border:0;border-bottom: 1px solid #000000;" name="">}</td>'
    ],
    [' <td><b style="color: #005ca4;"><li></li></b></td>' +
        '<td>D<sub>21</sub></td>' +
        '<td>=</td>' +
        '<td>{<input id="act1num5" class="sinEspacios" type="" style="border:0;border-bottom: 1px solid #000000;" name="">}</td>'
    ],
    [' <td><b style="color: #005ca4;"><li></li></b></td>' +
        '<td>D<sub>15</sub></td>' +
        '<td>=</td>' +
        '<td>{<input id="act1num6" class="sinEspacios" type="" style="border:0;border-bottom: 1px solid #000000;" name="">}</td>'
    ],
    [' <td><b style="color: #005ca4;"><li></li></b></td>' +
        '<td>D<sub>12</sub></td>' +
        '<td>=</td>' +
        '<td>{<input id="act1num7" class="sinEspacios" type="" style="border:0;border-bottom: 1px solid #000000;" name="">}</td>'
    ],
];

var act01Txt = document.getElementsByClassName('act1class');

random1.sort(f_randomico);
for (i = 0; i < act01Txt.length; i++) {
    $('#' + act01Txt[i].id).html(random1[i]);
}

function pregunta1() {
    var respact2 = ['1,2,4,8', '1,13', '1,5,25', '1,19', '1,11,22', '1,3,7,21', '1,3,5,15', '1,2,3,4,6,12', ];
    var cont = 0;
    for (var i = 0; i < 8; i++) {
        var res = $('#act1num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act1num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act1num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 2) / 8;
    $('#nota1').val(parseFloat(total).toFixed(2));

}
/////////////////pregunta2//////////////////////////////////////////
var random2 = [
    ['<tr>' +
        '<td><b style="color: #005ca4;"><li></li></b></td>' +
        '<td>D<sub>17</sub> = {1, 17}</td>' +
        '</tr> <tr> <td></td>' +
        '<td>Número <input class="sinEspacios" id="act2num0" type="" name="" style="border: 0;border-bottom: 1px solid #000000;width: 85px;"></td>' +
        '</tr>'
    ],
    ['<tr>' +
        '<td><b style="color: #005ca4;"><li></li></b></td>' +
        '<td>D<sub>26</sub> = {1, 2, 13, 26}</td>' +
        '</tr> <tr> <td></td>' +
        '<td>Número <input class="sinEspacios" id="act2num1" type="" name="" style="border: 0;border-bottom: 1px solid #000000;width: 85px;"></td>' +
        '</tr>'
    ],
    ['<tr>' +
        '<td><b style="color: #005ca4;"><li></li></b></td>' +
        '<td>D<sub>11</sub> = {<input class="sinEspacios" id="act2num2" type="" name="" style="border: 0;border-bottom: 1px solid #000000;width: 85px;">}</td>' +
        '</tr> <tr> <td></td>' +
        '<td>Número <input class="sinEspacios" id="act2num3" type="" name="" style="border: 0;border-bottom: 1px solid #000000;width: 85px;"></td>' +
        '</tr>'
    ],
    [' <tr>' +
        '<td><b style="color: #005ca4;"><li></li></b></td>' +
        '<td>D<sub>3</sub> = {<input class="sinEspacios" id="act2num4" type="" name="" style="border: 0;border-bottom: 1px solid #000000;width: 85px;">}</td>' +
        '</tr> <tr> <td></td>' +
        '<td>Número <input class="sinEspacios" id="act2num5" type="" name="" style="border: 0;border-bottom: 1px solid #000000;width: 85px;"></td>' +
        '</tr>'
    ],
    ['<tr>' +
        '<td><b style="color: #005ca4;"><li></li></b></td>' +
        '<td>D<sub>9</sub> = {<input class="sinEspacios" id="act2num6" type="" name="" style="border: 0;border-bottom: 1px solid #000000;width: 85px;">}</td>' +
        '</tr> <tr> <td></td>' +
        '<td>Número <input class="sinEspacios" id="act2num7" type="" name="" style="border: 0;border-bottom: 1px solid #000000;width: 85px;"></td>' +
        '</tr>'
    ],
    ['<tr>' +
        '<td><b style="color: #005ca4;"><li></li></b></td>' +
        '<td>D<sub>33</sub> = {1, 3, 11, 33}</td>' +
        '</tr> <tr> <td></td>' +
        '<td>Número <input class="sinEspacios" id="act2num8" type="" name="" style="border: 0;border-bottom: 1px solid #000000;width: 85px;"></td>' +
        '</tr>'
    ],
];
var act02Txt = document.getElementsByClassName('act2class');

random2.sort(f_randomico);
for (i = 0; i < act02Txt.length; i++) {
    $('#' + act02Txt[i].id).html(random2[i]);
}

function pregunta2() {
    var respact2 = ['primo', 'compuesto', '1,11', 'primo', '1,3', 'primo', '1,3,9', 'compuesto', 'compuesto', ];
    var cont = 0;
    for (var i = 0; i < 9; i++) {
        var res = $('#act2num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act2num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act2num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 2) / 9;
    $('#nota2').val(parseFloat(total).toFixed(2));

}
///////////////////pregunta3///////////////////////////////////////////////
function pregunta3() {
    var respact2 = ['3,5,7,11,13,17,19', '6,8,9,10,12,14,15,16,18', ];
    var cont = 0;
    for (var i = 0; i < 2; i++) {
        var res = $('#act3num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act3num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act3num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 2) / 2;
    $('#nota3').val(parseFloat(total).toFixed(2));

}
///////////////////pregunta4///////////////////////////////////////////////
function pregunta4() {
    var respact2 = ['2,3,5,7', '11,13,17,19,23,29,31,37', '41,43,47', ];
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
    var total = (cont * 2) / 3;
    $('#nota4').val(parseFloat(total).toFixed(2));

}
/////////////////////////pregunta5///////////////////
var random5 = [
    ['<td><b style="color: #005ca4;"><li></li></b></td> <td>10 =</td> <td><input type="text" class="inputfraccciones sinEspacios text-lowercase" style="width: 50px;" id="act5num0"></td>'],
    ['<td><b style="color: #005ca4;"><li></li></b></td> <td>22 =</td> <td><input type="text" class="inputfraccciones sinEspacios text-lowercase" style="width: 50px;" id="act5num1"></td>'],
    ['<td><b style="color: #005ca4;"><li></li></b></td> <td>65 =</td> <td><input type="text" class="inputfraccciones sinEspacios text-lowercase" style="width: 50px;" id="act5num2"></td>'],
    [' <td><b style="color: #005ca4;"><li></li></b></td> <td>143 =</td> <td><input type="text" class="inputfraccciones sinEspacios text-lowercase" style="width: 50px;" id="act5num3"></td>'],
]
var act05Txt = document.getElementsByClassName('act5class');

random5.sort(f_randomico);
for (i = 0; i < act05Txt.length; i++) {
    $('#' + act05Txt[i].id).html(random5[i]);
}

function pregunta5() {
    var respact1 = ['5x2', '11x2', '13x5', '11x13', ];
    var respact2 = ['2x5', '2x11', '5x13', '13x11', ];
    var cont = 0;
    for (var i = 0; i < 4; i++) {
        var res = $('#act5num' + [i] + '').val().toLowerCase();
        if ((respact2[i] == res) || (respact1[i] == res)) {
            cont = cont + 1;
            $('#act5num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act5num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 2) / 4;
    $('#nota5').val(parseFloat(total).toFixed(2));

}

function NotaFinal() {
    var nota1 = document.getElementById('nota1').value;
    var nota2 = document.getElementById('nota2').value;
    var nota3 = document.getElementById('nota3').value;
    var nota4 = document.getElementById('nota4').value;
    var nota5 = document.getElementById('nota5').value;
    /*var nota5 = document.getElementById('nota5').value;
    var nota6 = document.getElementById('nota6').value;
    var nota7 = document.getElementById('nota7').value;
    var nota8 = document.getElementById('nota8').value;
    var nota9 = document.getElementById('nota9').value;
    var nota10 = document.getElementById('nota10').value;*/
    /*if ((nota3 == "") || (nota4 == "")) {
        alert("Debe ingresar la nota de la pregunta 3 o 4.")
    } else {*/
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
    // }
}
