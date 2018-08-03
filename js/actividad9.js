function actividad9() {
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
    var num11 = document.getElementById('num11').value;
    var num12 = document.getElementById('num12').value;
    var num13 = document.getElementById('num13').value;
    var num14 = document.getElementById('num14').value;
    var num15 = document.getElementById('num15').value;
    var num16 = document.getElementById('num16').value;


    var RsA3_1 = 0,
        RsA3_2 = 0,
        RsA3_3 = 0,
        RsA3_4 = 0,
        RsA3_5 = 0,
        RsA3_6 = 0,
        RsA3_7 = 0,
        RsA3_8 = 0,
        RsA3_9 = 0,
        RsA3_10 = 0,
        RsA3_11 = 0,
        RsA3_12 = 0,
        RsA3_13 = 0,
        RsA3_14 = 0,
        RsA3_16 = 0,
        RsA3_17 = 0;

    if (num1 == "1") {
        RsA3_1 = 1;
        $('#num1').css("background", "#00e600");

    } else {
        $('#num1').css("background", "#ff6666");

    }
    if (num2 == "2") {
        RsA3_2 = 1;
        $('#num2').css("background", "#00e600");

    } else {
        $('#num2').css("background", "#ff6666");

    }
    if (num3 == "3") {
        RsA3_3 = 1;

        $('#num3').css("background", "#00e600");


    } else {
        $('#num3').css("background", "#ff6666");

    }
    if (num4 == "6") {
        RsA3_4 = 1;

        $('#num4').css("background", "#00e600");


    } else {
        $('#num4').css("background", "#ff6666");

    }
    if (num5 == "1") {
        RsA3_5 = 1;

        $('#num5').css("background", "#00e600");


    } else {
        $('#num5').css("background", "#ff6666");

    }
    if (num6 == "5") {
        RsA3_6 = 1;

        $('#num6').css("background", "#00e600");


    } else {
        $('#num6').css("background", "#ff6666");

    }
    if (num7 == "1") {
        RsA3_7 = 1;

        $('#num7').css("background", "#00e600");


    } else {
        $('#num7').css("background", "#ff6666");

    }
    if (num8 == "1") {
        RsA3_8 = 1;

        $('#num8').css("background", "#00e600");


    } else {
        $('#num8').css("background", "#ff6666");

    }
    if (num9 == "8") {
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
    if (num11 == "9") {
        RsA3_11 = 1;

        $('#num11').css("background", "#00e600");


    } else {
        $('#num11').css("background", "#ff6666");

    }
    if (num12 == "2") {
        RsA3_12 = 1;

        $('#num12').css("background", "#00e600");


    } else {
        $('#num12').css("background", "#ff6666");

    }

    if ((num13 == "123 615") || (num13 == "123615")) {
        RsA3_13 = 1;

        $('#num13').css("background", "#00e600");


    } else {
        $('#num13').css("background", "#ff6666");

    }
    if ((num14 == "118 292") || (num14 == "118292")) {
        RsA3_14 = 1;

        $('#num14').css("background", "#00e600");


    } else {
        $('#num14').css("background", "#ff6666");

    }
    if ((num15 == "3 000 + 600 + 15 + 5") || (num15 == "3000+600+15+5")) {
        RsA3_15 = 1;

        $('#num15').css("background", "#00e600");


    } else {
        $('#num15').css("background", "#ff6666");

    }
    if ((num16 == "8 000 + 200 + 90 + 2") || (num16 == "8000+200+90+2")) {
        RsA3_16 = 1;

        $('#num16').css("background", "#00e600");


    } else {
        $('#num16').css("background", "#ff6666");

    }
    var subtotal = parseFloat(RsA3_1) + parseFloat(RsA3_2) + parseFloat(RsA3_3) + parseFloat(RsA3_4) + parseFloat(RsA3_5) + parseFloat(RsA3_6) + parseFloat(RsA3_7) + parseFloat(RsA3_8) + parseFloat(RsA3_9) + parseFloat(RsA3_10) + parseFloat(RsA3_11) + parseFloat(RsA3_12) + parseFloat(RsA3_13) + parseFloat(RsA3_14) + parseFloat(RsA3_15) + parseFloat(RsA3_16);
    var total = (subtotal * 10) / 16;
    $('#txtNota').html(total.toFixed(2));
    document.getElementById('bt_comprobar').disabled = true;
    $('input').attr("disabled", true);

    $('#txtAlumno').attr("disabled", false);
}
