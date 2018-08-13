function actividad50() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var num3 = document.getElementById('num3').value;
    var num4 = document.getElementById('num4').value;
    var RsA2_1 = 0,
        RsA2_2 = 0,
        RsA2_3 = 0,
        RsA2_4 = 0,
        RsA2_5 = 0;
    if (num1 == "20") {
        RsA2_1 = 1;
        $('#num1').css("background", "#00e600");

    } else {
        $('#num1').css("background", "#ff6666");

    }
    if ((num2 == "A Ernesto le quedan 24 celulares.") || (num2 == "24 celulares") || (num2 == "24")) {
        RsA2_2 = 1;
        $('#num2').css("background", "#00e600");

    } else {
        $('#num2').css("background", "#ff6666");

    }
    if ((num3 == "Prendieron 29 plantas.") || (num3 == "29 plantas") || (num3 == "29")) {
        RsA2_3 = 1;

        $('#num3').css("background", "#00e600");


    } else {
        $('#num3').css("background", "#ff6666");

    }
    if ((num4 == "Marcia termina el juego con 16 canicas.") || (num4 == "16 canicas") || (num4 == "16")) {
        RsA2_4 = 1;

        $('#num4').css("background", "#00e600");


    } else {
        $('#num4').css("background", "#ff6666");

    }

    if ((num5 == "En la distribuidora quedan 12 autos.") || (num5 == "12 autos") || (num5 == "12")) {
        RsA2_5 = 1;

        $('#num5').css("background", "#00e600");


    } else {
        $('#num5').css("background", "#ff6666");

    }
    var subtotal = parseFloat(RsA2_1) + parseFloat(RsA2_2) + parseFloat(RsA2_3) + parseFloat(RsA2_4) + parseFloat(RsA2_5);
    var total = (subtotal * 10)/5;
    $('#txtNota').html(total.toFixed(2));
    document.getElementById('bt_comprobar').disabled = true;
    $('input').attr("disabled", true);
    $('#txtAlumno').attr("disabled", false);
}
