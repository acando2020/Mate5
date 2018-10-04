random1 = [
    ['<table>' +
        '<tr>' +
        '<td><b style="color: #005ca4;"><li></li></b></td>' +
        '<td>12 × 5 – 3 × 7 + 60 ÷ 5 =</td>' +
        '</tr>' +
        '<tr>' +
        '<td></td>' +
        '<td><input class="form-control sinEspacios"></input></td>' +
        '</tr>' +
        '<tr>' +
        '<td></td>' +
        '<td><input class="form-control sinEspacios"></input></td>' +
        '</tr>' +
        '<tr>' +
        '<td></td>' +
        '<td><input class="inputfraccciones" style="width: 70px;"></input> = <input id="act1num0" class="inputfraccciones"></input></td>' +
        '</tr>' +
        '</table>'
    ],
    [' <table>' +
        '<tr>' +
        '<td><b style="color: #005ca4;"><li></li></b></td>' +
        '<td>5 × 8 + 40 – 100 ÷ 4 =</td>' +
        '</tr>' +
        '<tr>' +
        '<td></td>' +
        '<td><input class="form-control sinEspacios"></input></td>' +
        '</tr>' +
        '<tr>' +
        '<td></td>' +
        '<td><input class="form-control sinEspacios"></input></td>' +
        '</tr>' +
        '<tr>' +
        '<td></td>' +
        '<td><input class="inputfraccciones" style="width: 70px;"></input> = <input id="act1num1" class="inputfraccciones"></input></td>' +
        '</tr>' +
        '</table>'
    ],
    ['<table>' +
        '<tr>' +
        '<td><b style="color: #005ca4;"><li></li></b></td>' +
        '<td>620 – 30 + 5 × 60 + 18 ÷ 6 =</td>' +
        '</tr>' +
        '<tr>' +
        '<td></td>' +
        '<td><input class="form-control sinEspacios"></input></td>' +
        '</tr>' +
        '<tr>' +
        '<td></td>' +
        '<td><input class="form-control sinEspacios"></input></td>' +
        '</tr>' +
        '<tr>' +
        '<td></td>' +
        '<td><input class="inputfraccciones" style="width: 70px;"></input> = <input id="act1num2" class="inputfraccciones"></input></td>' +
        '</tr>' +
        '</table>'
    ],

];
var act01Txt = document.getElementsByClassName('act1class');

random1.sort(f_randomico);
for (i = 0; i < act01Txt.length; i++) {
    $('#' + act01Txt[i].id).html(random1[i]);
}

function pregunta1() {
    var respact2 = ['51', '55', '893', ];
    var cont = 0;
    for (var i = 0; i < 3; i++) {
        var res = $('#act1num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act1num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act1num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 5) / 3;
    $('#nota1').val(parseFloat(total).toFixed(2));

}
//////////////////////pregunta2/////////////////////////////////////////////////////////////
var random2 = [
    ['<td><b style="color: #005ca4;"><li></li></b></td> <td style="background: #d7ecf6;">Las operaciones combinadas se resuelven de izquierda a derecha en cualquier orden.</td> <td><input id="act2num0" class="form-control text-uppercase" maxlength="1"></input></td>'],
    [' <td><b style="color: #005ca4;"><li></li></b></td> <td style="background: #e9f4f1;">En las operaciones combinadas, las multiplicaciones y las divisiones se resuelven de izquierda a derecha.</td> <td><input id="act2num1" class="form-control text-uppercase" maxlength="1"></input></td>'],
    [' <td><b style="color: #005ca4;"><li></li></b></td> <td style="background: #d7ecf6;">Las operaciones que están dentro del paréntesis se resuelven antes que las otras operaciones.</td> <td><input id="act2num2" class="form-control text-uppercase" maxlength="1"></input></td>'],
    ['<td><b style="color: #005ca4;"><li></li></b></td> <td style="background: #e9f4f1;">Las sumas y las multiplicaciones tienen la misma prioridad.</td> <td><input id="act2num3" class="form-control text-uppercase" maxlength="1"></input></td>'],
    ['<td><b style="color: #005ca4;"><li></li></b></td> <td style="background: #d7ecf6;">En las operaciones combinadas, las sumas y las restas se resuelven al final.</td> <td><input id="act2num4" class="form-control text-uppercase" maxlength="1"></input></td>'],
];
var act02Txt = document.getElementsByClassName('act2class');

random2.sort(f_randomico);
for (i = 0; i < act02Txt.length; i++) {
    $('#' + act02Txt[i].id).html(random2[i]);
}

function pregunta2() {
    var respact2 = ['F', 'V', 'V', 'F', 'V', ];
    var cont = 0;
    for (var i = 0; i < 5; i++) {
        var res = $('#act2num' + [i] + '').val().toUpperCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act2num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act2num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 5) / 5;
    $('#nota2').val(parseFloat(total).toFixed(2));

}
//////////////////////////

function NotaFinal() {
    pregunta1();
    pregunta2();


    var nota1 = document.getElementById('nota1').value;
    var nota2 = document.getElementById('nota2').value;



    var total = parseFloat(nota1) + parseFloat(nota2);


    $('#txtNota').html(total.toFixed(2));
    document.getElementById('bt_comprobar').disabled = true;
    $('input').attr("disabled", true);
    $('#txtAlumno').attr("disabled", false);


}
