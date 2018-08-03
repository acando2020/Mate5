function actividad4() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var num3 = document.getElementById('num3').value;
    var num4 = document.getElementById('num4').value;
    var num5 = document.getElementById('num5').value;
    var num6 = document.getElementById('num6').value;
    var num7 = document.getElementById('num7').value;
    var num8 = document.getElementById('num8').value;
    var num9 = document.getElementById('num9').value;
    var num10 = document.getElementById('num10').value;

    var RsA3_1 = 0,
        RsA3_2 = 0,
        RsA3_3 = 0,
        RsA3_4 = 0,
        RsA3_5 = 0,
        RsA3_6 = 0,
        RsA3_7 = 0,
        RsA3_8 = 0,
        RsA3_9 = 0,
        RsA3_10 = 0;
    if (num1 == "5") {
        RsA3_1 = 1;
        $('#num1').css("background", "#00e600");

    } else {
        $('#num1').css("background", "#ff6666");

    }
    if (num2 == "5") {
        RsA3_2 = 1;
        $('#num2').css("background", "#00e600");

    } else {
        $('#num2').css("background", "#ff6666");

    }
    if (num3 == "1") {
        RsA3_3 = 1;

        $('#num3').css("background", "#00e600");


    } else {
        $('#num3').css("background", "#ff6666");

    }
    if (num4 == "1") {
        RsA3_4 = 1;

        $('#num4').css("background", "#00e600");


    } else {
        $('#num4').css("background", "#ff6666");

    }
    if (num5 == "3") {
        RsA3_5 = 1;

        $('#num5').css("background", "#00e600");


    } else {
        $('#num5').css("background", "#ff6666");

    }
    if (num6 == "4") {
        RsA3_6 = 1;

        $('#num6').css("background", "#00e600");


    } else {
        $('#num6').css("background", "#ff6666");

    }
    if (num7 == "2") {
        RsA3_7 = 1;

        $('#num7').css("background", "#00e600");


    } else {
        $('#num7').css("background", "#ff6666");

    }
    if (num8 == "3") {
        RsA3_8 = 1;

        $('#num8').css("background", "#00e600");


    } else {
        $('#num8').css("background", "#ff6666");

    }
    if (num9 == "4") {
        RsA3_9 = 1;

        $('#num9').css("background", "#00e600");


    } else {
        $('#num9').css("background", "#ff6666");

    }
    if (num10 == "2") {
        RsA3_10 = 1;

        $('#num10').css("background", "#00e600");


    } else {
        $('#num10').css("background", "#ff6666");

    }
    var subtotal = parseFloat(RsA3_1) + parseFloat(RsA3_2) + parseFloat(RsA3_3) + parseFloat(RsA3_4) + parseFloat(RsA3_5) + parseFloat(RsA3_6) + parseFloat(RsA3_7) + parseFloat(RsA3_8) + parseFloat(RsA3_9) + parseFloat(RsA3_10);
    $('#txtNota').html(subtotal.toFixed(2));
    document.getElementById('bt_comprobar').disabled = true;
    $('input').attr("disabled", true);

$('#txtAlumno').attr("disabled", false);
}
