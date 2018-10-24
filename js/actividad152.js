document.getElementById('nota3').addEventListener('keypress', () => {
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
/*document.getElementById('nota10').addEventListener('keypress', () => {
    validNumero(0, 1, 1);
});
document.getElementById('nota10').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota10'), 1)
});*/
/////////////////////////pregunta2//////////////////////////////////////
var random1 = [
    ['<td>654</td>' +
        '<td><input class="inputfraccciones sinEspacios text-lowercase" id="act1num6" maxlength="1"></input></td>' +
        '<td><input class="inputfraccciones sinEspacios text-lowercase" id="act1num7" maxlength="1"></input></td>' +
        '<td><input class="inputfraccciones sinEspacios text-lowercase" id="act1num8" maxlength="1"></input></td>' +
        '<td><input class="inputfraccciones sinEspacios text-lowercase" id="act1num9" maxlength="1"></input></td>' +
        '<td><input class="inputfraccciones sinEspacios text-lowercase" id="act1num10" maxlength="1"></input></td>' +
        '<td><input class="inputfraccciones sinEspacios text-lowercase" id="act1num11" maxlength="1"></input></td>' +
        '<td><input class="inputfraccciones sinEspacios text-lowercase" id="act1num12" maxlength="1"></input></td>'
    ],
    [' <td>5688</td>' +
        '<td><input class="inputfraccciones sinEspacios text-lowercase" id="act1num13" maxlength="1"></input></td>' +
        '<td><input class="inputfraccciones sinEspacios text-lowercase" id="act1num14" maxlength="1"></input></td>' +
        '<td><input class="inputfraccciones sinEspacios text-lowercase" id="act1num15" maxlength="1"></input></td>' +
        '<td><input class="inputfraccciones sinEspacios text-lowercase" id="act1num16" maxlength="1"></input></td>' +
        '<td><input class="inputfraccciones sinEspacios text-lowercase" id="act1num17" maxlength="1"></input></td>' +
        '<td><input class="inputfraccciones sinEspacios text-lowercase" id="act1num18" maxlength="1"></input></td>' +
        '<td><input class="inputfraccciones sinEspacios text-lowercase" id="act1num19" maxlength="1"></input></td>'
    ],
    [' <td>8620</td>' +
        '<td><input class="inputfraccciones sinEspacios text-lowercase" id="act1num20" maxlength="1"></input></td>' +
        '<td><input class="inputfraccciones sinEspacios text-lowercase" id="act1num21" maxlength="1"></input></td>' +
        '<td><input class="inputfraccciones sinEspacios text-lowercase" id="act1num22" maxlength="1"></input></td>' +
        '<td><input class="inputfraccciones sinEspacios text-lowercase" id="act1num23" maxlength="1"></input></td>' +
        '<td><input class="inputfraccciones sinEspacios text-lowercase" id="act1num24" maxlength="1"></input></td>' +
        '<td><input class="inputfraccciones sinEspacios text-lowercase" id="act1num25" maxlength="1"></input></td>' +
        '<td><input class="inputfraccciones sinEspacios text-lowercase" id="act1num26" maxlength="1"></input></td>'
    ],
];

var act01Txt = document.getElementsByClassName('act1class');

random1.sort(f_randomico);
for (i = 0; i < act01Txt.length; i++) {
    $('#' + act01Txt[i].id).html(random1[i]);
}

function pregunta1() {
    var respact2 = ['', 'x', 'x', '', '', 'x', 'x', 'x', '', '', 'x', '', '', 'x', 'x', 'x', '', 'x', 'x', '', 'x', '', 'x', 'x', '', '', 'x', ];
    var cont = 0;
    for (var i = 0; i < 27; i++) {
        var res = $('#act1num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act1num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act1num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 2.5) / 27;
    $('#nota1').val(parseFloat(total).toFixed(2));

}
/////////////////pregunta2//////////////////////////////////////////
var random2 = [
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>7 348</td>' +
        '<td>→</td>' +
        '<td><input class="form-control"></input></td>' +
        '<td>' +
        '<select class="form-control" id="sel0">' +
        '<option>--selecciona--</option>' +
        '<option>Sí</option>' +
        '<option>No</option>' +
        '</select>' +
        '</td>'
    ],
    [' <td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>6 957</td>' +
        '<td>→</td>' +
        '<td><input class="form-control"></input></td>' +
        '<td>' +
        '<select class="form-control" id="sel1">' +
        '<option>--selecciona--</option>' +
        '<option>Sí</option>' +
        '<option>No</option>' +
        '</select>' +
        '</td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>2 689</td>' +
        '<td>→</td>' +
        '<td><input class="form-control"></input></td>' +
        '<td>' +
        '<select class="form-control" id="sel2">' +
        '<option>--selecciona--</option>' +
        '<option>Sí</option>' +
        '<option>No</option>' +
        '</select>' +
        '</td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>5 409</td>' +
        '<td>→</td>' +
        '<td><input class="form-control"></input></td>' +
        '<td>' +
        '<select class="form-control" id="sel3">' +
        '<option>--selecciona--</option>' +
        '<option>Sí</option>' +
        '<option>No</option>' +
        '</select>' +
        '</td>'
    ],
    ['<td><b style="color: #005ca4"><li></li></b></td>' +
        '<td>9 207</td>' +
        '<td>→</td>' +
        '<td><input class="form-control"></input></td>' +
        '<td>' +
        '<select class="form-control" id="sel4">' +
        '<option>--selecciona--</option>' +
        '<option>Sí</option>' +
        '<option>No</option>' +
        '</select>' +
        '</td>'
    ],
]
var act02Txt = document.getElementsByClassName('act2class');

random2.sort(f_randomico);
for (i = 0; i < act02Txt.length; i++) {
    $('#' + act02Txt[i].id).html(random2[i]);
}

function pregunta2() {
    var respact2 = ['No', 'Sí', 'No', 'Sí', 'Sí', ];
    var cont = 0;
    for (var i = 0; i < 5; i++) {
        var res = $('#sel' + [i] + ' option:selected').text();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#sel' + [i] + '').css("background", "#00e600");
        } else {
            $('#sel' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 2.5) / 5;
    $('#nota2').val(parseFloat(total).toFixed(2));

}




function NotaFinal() {
    var nota1 = document.getElementById('nota1').value;
    var nota2 = document.getElementById('nota2').value;
    var nota3 = document.getElementById('nota3').value;
    var nota4 = document.getElementById('nota4').value;
    /*var nota5 = document.getElementById('nota5').value;
    var nota6 = document.getElementById('nota6').value;
    var nota7 = document.getElementById('nota7').value;
    var nota8 = document.getElementById('nota8').value;
    var nota9 = document.getElementById('nota9').value;
    var nota10 = document.getElementById('nota10').value;*/
    if ((nota3 == "") || (nota4 == "")) {
        alert("Debe ingresar la nota de la pregunta 3 o 4.")
    } else {
        pregunta1();
        pregunta2();
        var nota1 = document.getElementById('nota1').value;
        var nota2 = document.getElementById('nota2').value;
        var nota3 = document.getElementById('nota3').value;
        var nota4 = document.getElementById('nota4').value;
        var total = parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4);
        $('#txtNota').html(total.toFixed(2));
        document.getElementById('bt_comprobar').disabled = true;
        $('input').attr("disabled", true);
        $('#txtAlumno').attr("disabled", false);
    }
}
