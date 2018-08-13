function sinEspacios(inputs) {
    $(inputs).on('keypress', function(e) {
        if (e.which == 32)
            return false;
    });
}
sinEspacios(".text-question .form-control");

function actividad47_1() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var num3 = document.getElementById('num3').value;
    var num4 = document.getElementById('num4').value;
    var RsA2_1 = 0,
        RsA2_2 = 0,
        RsA2_3 = 0,
        RsA2_4 = 0;
    if (num1 == "720+430+210") {
        RsA2_1 = 2.5;
        $('#num1').css("background", "#00e600");

    } else {
        $('#num1').css("background", "#ff6666");

    }
    if (num2 == "1360") {
        RsA2_2 = 2.5;
        $('#num2').css("background", "#00e600");

    } else {
        $('#num2').css("background", "#ff6666");

    }
    if (num3 == "6000+5000+4000") {
        RsA2_3 = 2.5;

        $('#num3').css("background", "#00e600");


    } else {
        $('#num3').css("background", "#ff6666");

    }
    if (num4 == "15000") {
        RsA2_4 = 2.5;

        $('#num4').css("background", "#00e600");


    } else {
        $('#num4').css("background", "#ff6666");

    }
    var subtotal = (parseFloat(RsA2_1) + parseFloat(RsA2_2) + parseFloat(RsA2_3) + parseFloat(RsA2_4)) / 2;
    $('#nota1').val(subtotal.toFixed(2));
}


function actividad47_2() {
    var num5 = document.getElementById('num5').value;
    var num6 = document.getElementById('num6').value;
    var num7 = document.getElementById('num7').value;
    var num8 = document.getElementById('num8').value;
    var num9 = document.getElementById('num9').value;
    var num10 = document.getElementById('num10').value;
    var num11 = document.getElementById('num11').value;
    var num12 = document.getElementById('num12').value;
    var num13 = document.getElementById('num13').value;
    var num14 = document.getElementById('num14').value;
    var RsA2_1 = 0,
        RsA2_2 = 0,
        RsA2_3 = 0,
        RsA2_4 = 0,
        RsA2_5 = 0,
        RsA2_6 = 0,
        RsA2_7 = 0,
        RsA2_8 = 0,
        RsA2_9 = 0,
        RsA2_10 = 0;
    if (num5 == "0") {
        RsA2_1 = 1;
        $('#num5').css("background", "#00e600");

    } else {
        $('#num5').css("background", "#ff6666");

    }
    if ((num6 == "elemento neutro") || (num6 == "neutro") || (num6 == "elementoneutro")) {
        RsA2_2 = 1;
        $('#num6').css("background", "#00e600");

    } else {
        $('#num6').css("background", "#ff6666");

    }
    if (num7 == "1250") {
        RsA2_3 = 1;

        $('#num7').css("background", "#00e600");


    } else {
        $('#num7').css("background", "#ff6666");

    }
    if (num8 == "1250") {
        RsA2_4 = 1;

        $('#num8').css("background", "#00e600");


    } else {
        $('#num8').css("background", "#ff6666");

    }

    if (num9 == "conmutativa") {
        RsA2_5 = 1;
        $('#num9').css("background", "#00e600");

    } else {
        $('#num9').css("background", "#ff6666");

    }
    if (num10 == "1154+251") {
        RsA2_6 = 1;
        $('#num10').css("background", "#00e600");

    } else {
        $('#num10').css("background", "#ff6666");

    }
    if (num11 == "354+1051") {
        RsA2_7 = 1;

        $('#num11').css("background", "#00e600");


    } else {
        $('#num11').css("background", "#ff6666");

    }
    if (num12 == "1405") {
        RsA2_8 = 1;

        $('#num12').css("background", "#00e600");


    } else {
        $('#num12').css("background", "#ff6666");

    }
    if (num9 == "1405") {
        RsA2_3 = 1;

        $('#num13').css("background", "#00e600");


    } else {
        $('#num13').css("background", "#ff6666");

    }
    if (num10 == "asociativa") {
        RsA2_4 = 1;

        $('#num14').css("background", "#00e600");


    } else {
        $('#num14').css("background", "#ff6666");

    }
    var subtotal = (parseFloat(RsA2_1) + parseFloat(RsA2_2) + parseFloat(RsA2_3) + parseFloat(RsA2_4) + parseFloat(RsA2_5) + parseFloat(RsA2_6) + parseFloat(RsA2_7) + parseFloat(RsA2_8) + parseFloat(RsA2_9) + parseFloat(RsA2_10)) / 2;
    $('#nota2').val(subtotal.toFixed(2));
}

function actividad47() {
    actividad47_1();
    actividad47_2();
    var nota1 = document.getElementById('nota1').value;
    var nota2 = document.getElementById('nota2').value;

    var total = parseFloat(nota1) + parseFloat(nota2);
    $('#txtNota').html(total.toFixed(2));
    document.getElementById('bt_comprobar').disabled = true;
    $('input').attr("disabled", true);
    $('#txtAlumno').attr("disabled", false);

}
