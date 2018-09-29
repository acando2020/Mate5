document.getElementById('nota2').addEventListener('keypress', () => {
    validNumero(0, 2.5, 1);
});
document.getElementById('nota2').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota2'), 2.5)
});
var act1 = [];
var act2 = [];
var multiplo1 = 1;
var multiplo2 = 1;
var num1 = Math.floor((Math.random() * 5) + 2);
var num2 = Math.floor((Math.random() * 5) + 2);
for (var i = 0; i < 8; i++) {
    multiplo1 = parseInt(multiplo1) * parseInt(num1);
    act1[i] = parseInt(multiplo1);
    multiplo2 = parseInt(multiplo2) * parseInt(num2);
    act2[i] = parseInt(multiplo2);
}
act1.sort(function(a, b) { return b - a;; });
$('#act1_1').html(act1[0]);
$('#act1_2').html(act1[1]);
$('#act1_3').html(act1[2]);
$('#act1_4').html(act1[3]);
$('#act1_5').html(act1[4]);
$('#act1_6').html(act1[5]);
$('#act1_7').html(act1[6]);

$('#div1_1').html('' + act1[0] + ' ÷ ' + act1[1] + ' = ');
$('#div1_2').html('' + act1[4] + ' ÷ ' + act1[5] + ' = ');
act2.sort(function(a, b) { return b - a;; });
$('#act2_1').html(act2[0]);
$('#act2_2').html(act2[1]);
$('#act2_3').html(act2[2]);
$('#act2_4').html(act2[3]);
$('#act2_5').html(act2[4]);
$('#act2_6').html(act2[5]);
$('#act2_7').html(act2[6]);

$('#div2_1').html('' + act2[0] + ' ÷ ' + act2[1] + ' = ');
$('#div2_2').html('' + act2[4] + ' ÷ ' + act2[5] + ' = ');

function pregunta1() {
    var respact2 = [act1[7], act1[7], act1[7], act2[7], act2[7], act2[7]];
    var cont = 0;
    for (var i = 0; i < 6; i++) {
        var res = $('#act1num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act1num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act1num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 2.5) / 6;
    $('#nota1').val(parseFloat(total).toFixed(2));
    /*$('#txtNota').html(parseFloat(total).toFixed(2));
    document.getElementById('bt_comprobar').disabled = true;
    $('input').attr("disabled", true);
    $('#txtAlumno').attr("disabled", false);*/

}
//////////////pregunta2////////////////////////////////////

function pregunta3() {
    var respact2 = ['d', 'b', 'a', 'c', ];
    var cont = 0;
    for (var i = 0; i < 4; i++) {
        var res = $('#act3num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act3num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act3num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 2.5) / 4;
    $('#nota3').val(parseFloat(total).toFixed(2));
    /*$('#txtNota').html(parseFloat(total).toFixed(2));
    document.getElementById('bt_comprobar').disabled = true;
    $('input').attr("disabled", true);
    $('#txtAlumno').attr("disabled", false);*/

}

function pregunta4() {
    var nt1 = 0;
    var act4num0 = document.getElementById('act4num0').value;
    if (act4num0 == 58) {
        nt1 = 2.5;
        $('#act4num0').css("background", "#00e600");
    } else {
        $('#act4num0').css("background", "#ff6666");
    }
    $('#nota4').val(parseFloat(nt1).toFixed(2));

}
/////////////////////////////////////////
function NotaFinal() {


    var nota1 = document.getElementById('nota1').value;
    var nota2 = document.getElementById('nota2').value;
    var nota3 = document.getElementById('nota3').value;
    var nota4 = document.getElementById('nota4').value;

    if (nota2 == "") {
        alert("Ingresar nota de la prergunta 2");
    } else {
        pregunta1();
        //pregunta2();
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
    }

}
