function sinEspacios(inputs) {
    $(inputs).on('keypress', function(e) {
        if (e.which == 32)
            return false;
    });
}
sinEspacios(".sinEspacios");

///////////////////////////solo numeros////////////////
function validarN(inputs) {

    $(inputs).on('keypress', function(e) {
        tecla = document.all ? e.keyCode : e.which;
        if (tecla == 8) return true;
        patron = /[,124536978qwertyuiopñlkjhgdsazcxbnmQWERTYUIOPÑLKJHGDSAZCBNM<>.;-_""]/;
        te = String.fromCharCode(tecla);
        if (patron.test(te)) {
            //alert("INGRESE V(VERDADERO) O F(FALSO) ");
            return false;
        }

    });
}

validarN(".VF");





var correc = ['70', '40', '180', 'acutángulo', '90', '40', '180', 'rectángulo', '30', '25', '180', 'obtusángulo', ];

function actividad102_1() {
    var cont = 0;

    for (var i = 0; i < 12; i++) {

        var num = $('#act102txt' + [i] + '').val().toLowerCase();
        if (correc[i] == num) {
            cont = cont + 1;
            $('#act102txt' + [i] + '').css("background-color", "#00e600");
        } else {
            $('#act102txt' + [i] + '').css("background-color", "#ff6666");

        }

    }
    var total = (cont * 5) / 12;
    $('#nota4').val(parseFloat(total).toFixed(2));



}
////////////////////////pregunta 5//////////////////////////////////////
var act1_5 = [
    ['<td><li> </li></td><td> Todo triángulo tiene un ángulo recto.</td><td>' +
        '<input type="text" maxlength="1" id="VF0" class="saltos2 text-uppercase"></input>' +
        '</td>'
    ],
    [' <td><li> </li></td><td> Un triángulo escaleno tiene sus tres lados desiguales.</td><td>' +
        '<input type="text" maxlength="1" id="VF1" class="saltos2 text-uppercase"></input>' +
        '</td>'
    ],
    ['<td><li> </li></td><td> La suma de los ángulos internos de cualquier triángulo siempre es 120°.</td><td>' +
        '<input type="text" maxlength="1" id="VF2" class="saltos2 text-uppercase"></input>' +
        '</td>'
    ],
    [' <td><li> </li></td><td> Un triángulo equilátero es a la vez acutángulo.</td><td>' +
        '<input type="text" maxlength="1" id="VF3" class="saltos2 text-uppercase"></input>' +
        '</td>'
    ],
    [' <td><li> </li></td><td> Se puede trazar un triángulo cuyos ángulos midan 45º + 45º + 45°.</td><td>' +
        '<input type="text" maxlength="1" id="VF4" class="saltos2 text-uppercase"></input>' +
        '</td>'
    ],
    ['<td><li> </li></td><td> Un triángulo isósceles tiene tres lados iguales.</td><td>' +
        '<input type="text" maxlength="1" id="VF5" class="saltos2 text-uppercase"></input>' +
        '</td>'
    ],
]

var act5Txt = document.getElementsByClassName('act5txt');

act1_5.sort(f_randomico);
for (i = 0; i < act5Txt.length; i++) {

    $('#' + act5Txt[i].id).html(act1_5[i]);


}

var cor = ['F', 'V', 'F', 'V', 'F', 'F', ];

function actividad102_2() {
    var cont = 0;

    for (var i = 0; i < 6; i++) {

        var num = $('#VF' + [i] + '').val().toUpperCase();
        if (cor[i] == num) {
            cont = cont + 1;
            $('#VF' + [i] + '').css("background-color", "#00e600");
        } else {
            $('#VF' + [i] + '').css("background-color", "#ff6666");

        }

    }
    var total = (cont * 5) / 6;
    $('#nota5').val(parseFloat(total).toFixed(2));
}

function actividad102() {
    actividad102_1();
    actividad102_2();
    var nota4 = document.getElementById('nota4').value;
    var nota5 = document.getElementById('nota5').value;
    var total = parseFloat(nota4) + parseFloat(nota5);

    $('#txtNota').html(total.toFixed(2));
    document.getElementById('bt_comprobar').disabled = true;
    $('input').attr("disabled", true);
    $('#txtAlumno').attr("disabled", false);
}
