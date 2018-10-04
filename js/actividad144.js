var act78 = [];
var act78_1 = [];
var multiplo1 = 1;
var multiplo2 = 1;

var num1 = Math.floor((Math.random() * 5) + 2);
var num2 = (Math.floor((Math.random() * 4) + 1)) * 10;
for (var i = 0; i < 7; i++) {
    multiplo1 = parseInt(multiplo1) * parseInt(num1);
    act78[i] = parseInt(multiplo1);
    multiplo2 = parseInt(multiplo2) * parseInt(num2);
    act78_1[i] = parseInt(multiplo2);
}

act78.sort(function(a, b) { return b - a; });
$('#num1_2').html('' + act78[0] + ',' + act78[1] + ',' + act78[2] + ',' + act78[3] + ',' + act78[4] + ',' + act78[5] + '');
$('#num1_1').html('' + act78[0] + ' ÷ ' + act78[1] + ' =');

function pregunta1() {
    var respact2 = [act78[6], act78[6], '3', '243', '9', ];
    var cont = 0;
    for (var i = 0; i < 5; i++) {
        var res = $('#act1num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act1num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act1num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 5;
    $('#nota1').val(parseFloat(total).toFixed(2));

}



function NotaFinal() {
    var nota1 = document.getElementById('nota1').value;
    var nota2 = document.getElementById('nota2').value;
    if (nota2 == "") {
        alert("Debe ingresar la nota de la pregunta 2")
    } else {
        pregunta1();

        var nota1 = document.getElementById('nota1').value;
        var nota2 = document.getElementById('nota2').value;
        var total = parseFloat(nota1) + parseFloat(nota2);
        $('#txtNota').html(total.toFixed(2));
        document.getElementById('bt_comprobar').disabled = true;
        $('input').attr("disabled", true);
        $('#txtAlumno').attr("disabled", false);
    }



}
