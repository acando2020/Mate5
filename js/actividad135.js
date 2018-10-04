function pregunta1() {
    var act1num0 = document.getElementById('act1num0').value;
    var nt1 = 0;
    if (act1num0 == 104) {
        nt1 = 1;
        $('#act1num0').css("background", "#00e600");
    } else {
        $('#act1num0').css("background", "#ff6666");
    }
    $('#nota1').val(parseFloat(nt1).toFixed(2));

}
//////////////////////pregunta2/////////////////////////////////////////////////////////////

function pregunta2() {
    var act2num0 = document.getElementById('act2num0').value;
    var nt1 = 0;
    if (act2num0 == 85) {
        nt1 = 1;
        $('#act2num0').css("background", "#00e600");
    } else {
        $('#act2num0').css("background", "#ff6666");
    }
    $('#nota2').val(parseFloat(nt1).toFixed(2));

}

function pregunta3() {
    var act3num0 = document.getElementById('act3num0').value;
    var nt1 = 0;
    if (act3num0 == 1380) {
        nt1 = 1;
        $('#act3num0').css("background", "#00e600");
    } else {
        $('#act3num0').css("background", "#ff6666");
    }
    $('#nota3').val(parseFloat(nt1).toFixed(2));

}

function pregunta4() {
    var act4num0 = document.getElementById('act4num0').value;
    var nt1 = 0;
    if (act4num0 == 235) {
        nt1 = 1;
        $('#act4num0').css("background", "#00e600");
    } else {
        $('#act4num0').css("background", "#ff6666");
    }
    $('#nota4').val(parseFloat(nt1).toFixed(2));

}

function pregunta5() {
    var act5num0 = document.getElementById('act5num0').value;
    var nt1 = 0;
    if (act5num0 == 2) {
        nt1 = 1;
        $('#act5num0').css("background", "#00e600");
    } else {
        $('#act5num0').css("background", "#ff6666");
    }
    $('#nota5').val(parseFloat(nt1).toFixed(2));

}

function pregunta6() {
    var act6num0 = document.getElementById('act6num0').value;
    var act6num1 = document.getElementById('act6num1').value;
    var nt1 = 0,
        nt2 = 0;
    if (act6num0 == 74) {
        nt1 = 0.5;
        $('#act6num0').css("background", "#00e600");
    } else {
        $('#act6num0').css("background", "#ff6666");
    }
    if (act6num1 == 90) {
        nt2 = 0.5;
        $('#act6num1').css("background", "#00e600");
    } else {
        $('#act6num1').css("background", "#ff6666");
    }
    var total = parseFloat(nt1) + parseFloat(nt2);
    $('#nota6').val(parseFloat(total).toFixed(2));

}
//////////////////////////

function NotaFinal() {
    pregunta1();
    pregunta2();
    pregunta3();
    pregunta4();
    pregunta5();
    pregunta6();


    var nota1 = document.getElementById('nota1').value;
    var nota2 = document.getElementById('nota2').value;



    var total = parseFloat(nota1) + parseFloat(nota2);


    $('#txtNota').html(total.toFixed(2));
    document.getElementById('bt_comprobar').disabled = true;
    $('input').attr("disabled", true);
    $('#txtAlumno').attr("disabled", false);


}
