function pregunta1() {
    var respact2 = ['7', '29', '13', '29', '9', '29', 'frutilla', ];
    var cont = 0;
    for (var i = 0; i < 7; i++) {
        var res = $('#act1num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act1num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act1num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 2.5) / 7;
    $('#nota1').val(parseFloat(total).toFixed(2));

}

function pregunta2() {
    var respact2 = ['33', '100', '17', '17', '100', ];
    var cont = 0;
    for (var i = 0; i < 5; i++) {
        var res = $('#act2num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act2num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act2num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 2.5) / 5;
    $('#nota2').val(parseFloat(total).toFixed(2));

}

function pregunta3() {
    var respact2 = ['10', '39', ];
    var cont = 0;
    for (var i = 0; i < 2; i++) {
        var res = $('#act3num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act3num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act3num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 2.5) / 2;
    $('#nota3').val(parseFloat(total).toFixed(2));

}

function pregunta4() {
    var respact2 = ['5', '12', ];
    var cont = 0;
    for (var i = 0; i < 2; i++) {
        var res = $('#act4num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act4num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act4num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 2.5) / 2;
    $('#nota4').val(parseFloat(total).toFixed(2));

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

    var total = parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4);

    $('#txtNota').html(total.toFixed(2));
    document.getElementById('bt_comprobar').disabled = true;
    $('input').attr("disabled", true);
    $('#txtAlumno').attr("disabled", false);


}
