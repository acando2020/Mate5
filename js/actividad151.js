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
    ['<tr>' +
        '<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>28</td>' +
        '<td>=</td>' +
        '<td>1 × 28</td>' +
        '</tr> <tr>' +
        '<td></td>' +
        '<td>28</td>' +
        '<td>=</td>' +
        '<td><input class="form-control"></input></td>' +
        '</tr> <tr>' +
        '<td></td>' +
        '<td>28</td>' +
        '<td>=</td>' +
        '<td><input class="form-control"></input></td>' +
        '</tr> <tr>' +
        '<td></td>' +
        '<td>D<sub>28</sub></td>' +
        '<td>=</td>' +
        '<td>{1,<input class="inputfraccciones sinEspacios" id="act1num0"></input>,<input class="inputfraccciones sinEspacios" id="act1num1"></input>,<input class="inputfraccciones sinEspacios" id="act1num2"></input>,<input class="inputfraccciones sinEspacios" id="act1num3"></input>,<input class="inputfraccciones sinEspacios" id="act1num4"></input>,}</td>' +
        '</tr>'
    ],
    [' <tr>' +
        '<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>32</td>' +
        '<td>=</td>' +
        '<td>1 × 32</td>' +
        '</tr>' +
        '<tr>' +
        '<td></td>' +
        '<td>32</td>' +
        '<td>=</td>' +
        '<td><input class="form-control"></input></td>' +
        '</tr>' +
        '<tr>' +
        '<td></td>' +
        '<td>32</td>' +
        '<td>=</td>' +
        '<td><input class="form-control"></input></td>' +
        '</tr>' +
        '<tr>' +
        '<td></td>' +
        '<td>D<sub>32</sub></td>' +
        '<td>=</td>' +
        '<td>{<input class="inputfraccciones sinEspacios" id="act1num5"></input>,<input class="inputfraccciones sinEspacios" id="act1num6"></input>,<input class="inputfraccciones sinEspacios" id="act1num7"></input>,<input class="inputfraccciones sinEspacios" id="act1num8"></input>,<input class="inputfraccciones sinEspacios" id="act1num9"></input>,<input class="inputfraccciones sinEspacios" id="act1num10"></input>,}</td>' +
        '</tr>'
    ],
    ['<tr>' +
        '<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>63</td>' +
        '<td>=</td>' +
        '<td>1 × 63</td>' +
        '</tr>' +
        '<tr>' +
        '<td></td>' +
        '<td>63</td>' +
        '<td>=</td>' +
        '<td><input class="form-control"></input></td>' +
        '</tr>' +
        '<tr>' +
        '<td></td>' +
        '<td>63</td>' +
        '<td>=</td>' +
        '<td><input class="form-control"></input></td>' +
        '</tr>' +
        '<tr>' +
        '<td></td>' +
        '<td>D<sub>63</sub></td>' +
        '<td>=</td>' +
        '<td>{<input class="inputfraccciones sinEspacios" id="act1num11"></input>,<input class="inputfraccciones sinEspacios" id="act1num12"></input>,<input class="inputfraccciones sinEspacios" id="act1num13"></input>,<input class="inputfraccciones sinEspacios" id="act1num14"></input>,<input class="inputfraccciones sinEspacios" id="act1num15"></input>,<input class="inputfraccciones sinEspacios" id="act1num16"></input>,}</td>' +
        '</tr>'
    ],
];

var act01Txt = document.getElementsByClassName('act1class');

random1.sort(f_randomico);
for (i = 0; i < act01Txt.length; i++) {
    $('#' + act01Txt[i].id).html(random1[i]);
}

function pregunta1() {
    var respact2 = ['2', '4', '7', '14', '28', '1', '2', '4', '8', '16', '32', '1', '3', '7', '9', '21', '63', ];
    var cont = 0;
    for (var i = 0; i < 17; i++) {
        var res = $('#act1num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act1num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act1num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 2.5) / 17;
    $('#nota1').val(parseFloat(total).toFixed(2));

}
/////////////////pregunta2//////////////////////////////////////////

function pregunta2() {
    var respact2 = ['2', '4', '5', '10', '20', '3', '9', '27', '2', '3', '6', '9', '18', '27', '54', ];
    var cont = 0;
    for (var i = 0; i < 15; i++) {
        var res = $('#act2num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act2num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act2num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 2.5) / 15;
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
    var respact2 = ['3', '5', '15', '5', '7', '35', '2', '4', '5', '8', '10', '20', '40', '2', '5', '10', '25', '50', ];
    var cont = 0;
    for (var i = 0; i < 18; i++) {
        var res = $('#act3num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act3num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act3num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 2.5) / 18;
    $('#nota3').val(parseFloat(total).toFixed(2));

}


function pregunta4() {
    var nt1 = 0;
    var act4num0 = document.getElementById('act4num0').value;
    if (act4num0 == 10) {
        nt1 = 2.5;
        $('#act4num0').css("background", "#00e600");
    } else {
        $('#act4num0').css("background", "#ff6666");
    }
    $('#nota4').val(parseFloat(nt1).toFixed(2));
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
