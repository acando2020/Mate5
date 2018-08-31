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


act1_1 = ['Obtusángulo', 'Acutángulo', 'Rectángulo', ];
var act11Txt = document.getElementsByClassName('act11txt');

act1_1.sort(f_randomico);
for (i = 0; i < act11Txt.length; i++) {

    $('#' + act11Txt[i].id).html('<h4><div id="dra' + [i] + '" draggable="true" ondragstart="drag2(event)">' + act1_1[i] + '</div></h4> ');


}


act1_2 = ['Escaleno', 'Equilátero', 'Isósceles', ];
var act2Txt = document.getElementsByClassName('act2txt');

act1_2.sort(f_randomico);
for (i = 0; i < act2Txt.length; i++) {

    $('#' + act2Txt[i].id).html('<h4><div id="drag' + [i] + '" draggable="true" ondragstart="drag2(event)">' + act1_2[i] + '</div></h4> ');


}
var correc = ['Acutángulo', 'Rectángulo', 'Obtusángulo', 'Isósceles', 'Equilátero', 'Escaleno', ];

function pregunta1() {
    var cont = 0;

    for (var i = 0; i < 6; i++) {

        var num = $('#act100num' + [i] + '').children("div").html();
        if (correc[i] == num) {
            cont = cont + 1;
            $('#act100num' + [i] + '').addClass('correcto');
        } else {
            $('#act100num' + [i] + '').addClass('incorrecto');

        }

    }
    var total = (cont * 10) / 6;
    $('#txtNota').html(total.toFixed(2));
    document.getElementById('bt_comprobar').disabled = true;
    $('input').attr("disabled", true);
    $('#txtAlumno').attr("disabled", false);


}
