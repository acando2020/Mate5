function sinEspacios(inputs) {
    $(inputs).on('keypress', function(e) {
        if (e.which == 32)
            return false;
    });
}
sinEspacios(".sinEspacios");


function actividad79_1() {
    var act1_1 = document.getElementById('act1_1').value;
    var act1_2 = document.getElementById('act1_2').value.toLowerCase();
    var act1_3 = document.getElementById('act1_3').value.toLowerCase();
    var act1_4 = document.getElementById('act1_4').value.toLowerCase();
    var act1_5 = document.getElementById('act1_5').value.toLowerCase();
    var act1_6 = document.getElementById('act1_6').value.toLowerCase();

    var nt1 = 0,
        nt2 = 0,
        nt3 = 0,
        nt4 = 0,
        nt5 = 0,
        nt6 = 0,
        nt7 = 0,
        nt8 = 0,
        nt9 = 0,
        nt10 = 0,
        nt11 = 0;

    if (act1_1 == "360") {
        nt1 = 1;
        $('#act1_1').css("background", "#00e600");

    } else {
        $('#act1_1').css("background", "#ff6666");

    }



    if (act1_2 == "x1") {
        nt2 = 1;
        $('#act1_2').css("background", "#00e600");

    } else {
        $('#act1_2').css("background", "#ff6666");

    }


    if (act1_3 == "x2") {
        nt3 = 1;
        $('#act1_3').css("background", "#00e600");

    } else {
        $('#act1_3').css("background", "#ff6666");

    }



    if (act1_4 == "x3") {
        nt4 = 1;
        $('#act1_4').css("background", "#00e600");

    } else {
        $('#act1_4').css("background", "#ff6666");

    }

    if (act1_5 == "x4") {
        nt5 = 1;
        $('#act1_5').css("background", "#00e600");

    } else {
        $('#act1_5').css("background", "#ff6666");

    }
    if (act1_6 == "x5") {
        nt6 = 1;
        $('#act1_6').css("background", "#00e600");

    } else {
        $('#act1_6').css("background", "#ff6666");

    }
    var subtotal = parseInt(nt1) + parseInt(nt2) + parseInt(nt3) + parseInt(nt4) + parseInt(nt5) + parseInt(nt6);
    var total = (subtotal * 4) / 6;
    $('#nota1').val(parseFloat(total).toFixed(2));

}

function actividad79_2() {
    var act2_1 = document.getElementById('act2_1').value.toLowerCase();
    var nt1 = 0;
    if ((act2_1 == "3 240 blusas") || (act2_1 == "3240 blusas") || (act2_1 == "3240")) {
        nt1 = 1;
        $('#act2_1').css("background", "#00e600");

    } else {
        $('#act2_1').css("background", "#ff6666");

    }

    $('#nota2').val(parseFloat(nt1).toFixed(2));
}

function actividad79_3() {

    var act3_1 = document.getElementById('act3_1').value.toLowerCase();
    var act3_2 = document.getElementById('act3_2').value.toLowerCase();
    var act3_3 = document.getElementById('act3_3').value.toLowerCase();
    var act3_4 = document.getElementById('act3_4').value.toLowerCase();
    var act3_5 = document.getElementById('act3_5').value.toLowerCase();
    var act3_6 = document.getElementById('act3_6').value.toLowerCase();



    var nt1 = 0,
        nt2 = 0,
        nt3 = 0,
        nt4 = 0,
        nt5 = 0,
        nt6 = 0,
        nt7 = 0,
        nt8 = 0,
        nt9 = 0,
        nt10 = 0,
        nt11 = 0;

    ///////////////////////////////////////////////////////////////////


    if (act3_1 == "x2") {
        nt5 = 1;
        $('#act3_1').css("background", "#00e600");

    } else {
        $('#act3_1').css("background", "#ff6666");

    }


    if (act3_2 == "2=6") {
        nt6 = 1;
        $('#act3_2').css("background", "#00e600");

    } else {
        $('#act3_2').css("background", "#ff6666");

    }


    if (act3_3 == "6x2=12") {
        nt7 = 1;
        $('#act3_3').css("background", "#00e600");

    } else {
        $('#act3_3').css("background", "#ff6666");

    }

    if (act3_4 == "12x2=24") {
        nt8 = 1;
        $('#act3_4').css("background", "#00e600");

    } else {
        $('#act3_4').css("background", "#ff6666");

    }
    ////////////////////////////////////////////////////////////////////////////




    if (act3_5 == "24x2=48") {
        nt9 = 1;
        $('#act3_5').css("background", "#00e600");

    } else {
        $('#act3_5').css("background", "#ff6666");

    }

    if ((act3_6 == "48 niños") || (act3_6 == "48") || (act3_6 == "48niños")) {
        nt10 = 1;
        $('#act3_6').css("background", "#00e600");

    } else {
        $('#act3_6').css("background", "#ff6666");

    }

    var subtotal = parseInt(nt5) + parseInt(nt6) + parseInt(nt7) + parseInt(nt8) + parseInt(nt9) + parseInt(nt10);
    var total = (subtotal * 5) / 6;
    $('#nota3').val(parseFloat(total).toFixed(2));

}

function actividad79() {
    actividad79_1();
    actividad79_2();
    actividad79_3();

    var nota1 = document.getElementById('nota1').value;
    var nota2 = document.getElementById('nota2').value;
    var nota3 = document.getElementById('nota3').value;



    var total = parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3);
    $('#txtNota').html(total.toFixed(2));
    document.getElementById('bt_comprobar').disabled = true;
    $('input').attr("disabled", true);
    $('#txtAlumno').attr("disabled", false);



}
