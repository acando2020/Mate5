function pregunta1() {
    var respact2 = ['3', '5', '2', '7', '0', '27', ];
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
    var total = (cont * 1) / 6;
    $('#nota1').val(parseFloat(total).toFixed(2));

}
//////////////////////////
function pregunta2() {
    var respact2 = ['1', '6', '8', '9', '7', '8', '1', '8', '6', '18', '6', ];
    var cont = 0;
    for (var i = 0; i < 11; i++) {
        var res = $('#act2num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act2num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act2num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 11;
    $('#nota2').val(parseFloat(total).toFixed(2));

}
//////////////////////////
function pregunta3() {
    var respact2 = ['2', '8', '8', '1', '2', '4', '8', '2', '4', '24', '12', ];
    var cont = 0;
    for (var i = 0; i < 11; i++) {
        var res = $('#act3num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act3num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act3num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 11;
    $('#nota3').val(parseFloat(total).toFixed(2));

}
//////////////////////////
function pregunta4() {
    var nt1 = 0,
        nt2 = 0,
        nt3 = 0,
        nt4 = 0,
        nt5 = 0,
        nt6 = 0,
        nt7 = 0;
    var act4num0 = $('#act4num0').val().toLowerCase();
    var act4num1 = $('#act4num1').val().toLowerCase();
    var act4num2 = $('#act4num2').val().toLowerCase();
    var act4num3 = $('#act4num3').val().toLowerCase();
    var act4num4 = $('#act4num4').val().toLowerCase();
    var act4num5 = $('#act4num5').val().toLowerCase();
    var act4num6 = $('#act4num6').val().toLowerCase();

    if (act4num0 == 4) {
        nt1 = 1;
        $('#act4num0').css("background", "#00e600");
    } else {
        $('#act4num0').css("background", "#ff6666");
    }

    if (act4num1 == 820) {
        nt2 = 1;
        $('#act4num1').css("background", "#00e600");
    } else {
        $('#act4num1').css("background", "#ff6666");
    }

    if (act4num2 == 4) {
        nt3 = 1;
        $('#act4num2').css("background", "#00e600");
    } else {
        $('#act4num2').css("background", "#ff6666");
    }
    if (act4num3 == 24) {
        nt4 = 1;
        $('#act4num3').css("background", "#00e600");
    } else {
        $('#act4num3').css("background", "#ff6666");
    }
    if (act4num4 == 7) {
        nt5 = 1;
        $('#act4num4').css("background", "#00e600");
    } else {
        $('#act4num4').css("background", "#ff6666");
    }
    if (act4num5 == 124) {
        nt6 = 1;
        $('#act4num5').css("background", "#00e600");
    } else {
        $('#act4num5').css("background", "#ff6666");
    }
    if (act4num6 == 57487) {
        nt7 = 1;
        $('#act4num6').css("background", "#00e600");
    } else {
        $('#act4num6').css("background", "#ff6666");
    }


    $('#nota4').val(parseFloat(nt1).toFixed(2));
    $('#nota5').val(parseFloat(nt2).toFixed(2));
    $('#nota6').val(parseFloat(nt3).toFixed(2));
    $('#nota7').val(parseFloat(nt4).toFixed(2));
    $('#nota8').val(parseFloat(nt5).toFixed(2));
    $('#nota9').val(parseFloat(nt6).toFixed(2));
    $('#nota10').val(parseFloat(nt7).toFixed(2));

}

function NotaFinal() {
    pregunta1();
    pregunta2();
    pregunta3();
    pregunta4();

    var nota1 = document.getElementById('nota1').value;
    var nota2 = document.getElementById('nota2').value;
    var nota3 = document.getElementById('nota3').value;
    var nota4 = document.getElementById('nota4').value;
    var nota5 = document.getElementById('nota5').value;
    var nota6 = document.getElementById('nota6').value;
    var nota7 = document.getElementById('nota7').value;
    var nota8 = document.getElementById('nota8').value;
    var nota9 = document.getElementById('nota9').value;
    var nota10 = document.getElementById('nota10').value;


    var total = parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4) + parseFloat(nota5) + parseFloat(nota6) + parseFloat(nota7) + parseFloat(nota8) + parseFloat(nota9) + parseFloat(nota10);


    $('#txtNota').html(total.toFixed(2));
    document.getElementById('bt_comprobar').disabled = true;
    $('input').attr("disabled", true);
    $('#txtAlumno').attr("disabled", false);


}
