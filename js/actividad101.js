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
        patron = /[,qwertyuiopñlkvjhfgdsazcxbnmQWERTYFVUIOPÑLKJHGDSAZCBNM<>.;-_""]/;
        te = String.fromCharCode(tecla);
        if (patron.test(te)) {
            //alert("INGRESE V(VERDADERO) O F(FALSO) ");
            return false;
        }

    });
}

validarN(".inputMult");





act1_2 = [
    ['<span>Todos mis ángulos internos son agudos.' +
        '<input type = "text" id = "act101txt0" class = "form-control text-lowercase"></input></span>'
    ],
    ['<span>Mis lados miden 10, 8 y 5 metros.' +
        '<input type="text" id="act101txt1" class="form-control text-lowercase"></input></span>'
    ],
    [' <span>Uno de mis ángulos internos es obtuso.' +
        '<input type="text" id="act101txt2" class="form-control text-lowercase"></input></span>'
    ],
    ['<span>Tengo dos lados de igual medida.' +
        '<input type="text" id="act101txt3" class="form-control text-lowercase"></input></span>'
    ],
    ['<span>Uno de mis ángulos interno es recto.' +
        '<input type="text" id="act101txt4" class="form-control text-lowercase"></input></span>'
    ],
    ['<span>Mis tres lados miden 16 centímetros cada uno.' +
        '<input type="text" id="act101txt5" class="form-control text-lowercase"></input></span>'
    ],
];
var act2Txt = document.getElementsByClassName('act2txt');

act1_2.sort(f_randomico);
for (i = 0; i < act2Txt.length; i++) {

    $('#' + act2Txt[i].id).html('<h4><div id="drag' + [i] + '" draggable="true" ondragstart="drag2(event)">' + act1_2[i] + '</div></h4> ');


}
var correc = ['triángulo acutángulo', 'triángulo escaleno', 'triángulo obtusángulo', 'triángulo isósceles', 'triángulo rectángulo', 'triángulo equilátero', ];

function pregunta2() {
    var cont = 0;

    for (var i = 0; i < 6; i++) {

        var num = $('#act101txt' + [i] + '').val().toLowerCase();
        if (correc[i] == num) {
            cont = cont + 1;
            $('#act101txt' + [i] + '').css("background-color", "#00e600");
        } else {
            $('#act101txt' + [i] + '').css("background-color", "#ff6666");

        }

    }
    var total = (cont * 5) / 6;
    $('#nota2').val(parseFloat(total).toFixed(2));



}
////////////////////////pregunta 3//////////////////////////////////////

act1_3 = [
    ['<img src="img/i1_p73_act101.jpg" alt="" class="img-responsive"> <input type="text" class="form-control text-lowercase" name="" id="act101txto0">'],
    ['<img src="img/i2_p73_act101.jpg" alt="" class="img-responsive"> <input type="text" class="form-control text-lowercase" name="" id="act101txto1">'],
    ['<img src="img/i3_p73_act101.jpg" alt="" class="img-responsive"> <input type="text" class="form-control text-lowercase" name="" id="act101txto2">'],
];

var act3Txt = document.getElementsByClassName('act3txt');

act1_3.sort(f_randomico);
for (i = 0; i < act3Txt.length; i++) {

    $('#' + act3Txt[i].id).html('<h4><div id="drag' + [i] + '" draggable="true" ondragstart="drag2(event)">' + act1_3[i] + '</div></h4> ');


}

function pregunta3() {
    var act101txto0 = document.getElementById('act101txto0').value.toLowerCase();
    var act101txto1 = document.getElementById('act101txto1').value.toLowerCase();
    var act101txto2 = document.getElementById('act101txto2').value.toLowerCase();
    var nt1 = 0,
        nt2 = 0,
        nt3 = 0;

    if ((act101txto0 == "escaleno y rectángulo") || (act101txto0 == "rectángulo y escaleno")) {
        nt1 = 1;
        $('#act101txto0').css("background-color", "#00e600");
    } else {
        $('#act101txto0').css("background-color", "#ff6666");

    }

    if ((act101txto1 == "isósceles y acutángulo") || (act101txto1 == "acutángulo y isósceles")) {
        nt2 = 1;
        $('#act101txto1').css("background-color", "#00e600");
    } else {
        $('#act101txto1').css("background-color", "#ff6666");

    }
    if ((act101txto2 == "escaleno y obtusángulo") || (act101txto2 == "obtusángulo y escaleno")) {
        nt3 = 1;
        $('#act101txto2').css("background-color", "#00e600");
    } else {
        $('#act101txto2').css("background-color", "#ff6666");

    }
    var subtotal = parseInt(nt1) + parseInt(nt2) + parseInt(nt3);
    var total = (subtotal * 5) / 3;
    $('#nota3').val(parseFloat(total).toFixed(2));


}

function actividad101() {
    pregunta2();
    pregunta3();
    var nota2 = document.getElementById('nota2').value;
    var nota3 = document.getElementById('nota3').value;
    var total = parseFloat(nota2) + parseFloat(nota3);

    $('#txtNota').html(total.toFixed(2));
    document.getElementById('bt_comprobar').disabled = true;
    $('input').attr("disabled", true);
    $('#txtAlumno').attr("disabled", false);
}
