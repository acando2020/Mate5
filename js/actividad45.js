function actividad45() {

    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var num3 = document.getElementById('num3').value;
    var num4 = document.getElementById('num4').value;
    var num5 = document.getElementById('num5').value;
    var num6 = document.getElementById('num6').value;
    var RsA3_1 = 0,
        RsA3_2 = 0,
        RsA3_3 = 0,
        RsA3_4 = 0,
        RsA3_5 = 0,
        RsA3_6 = 0;
    var resp11_1 = 0,
        resp11_2 = 0,
        resp11_3 = 0,
        resp11_4 = 0;
    /* if ($("#C7:checked").prop('checked') == true) {
        resp11_1 = 1;
    } else {

    }

    if ($("#C12:checked").prop('checked') == true) {
        resp11_2 = 1;
    } else {

    }
    if ($("#C16:checked").prop('checked') == true) {
        resp11_3 = 1;
    } else {

    }
    if ($("#C23:checked").prop('checked') == true) {
        resp11_4 = 1;
    } else {

    }*/
    //////////////////////////////////////////////////////////////////
    if (num1 == "1000") {
        RsA3_1 = 1;

        $('#num1').css("background", "#00e600");


    } else {
        $('#num1').css("background", "#ff6666");

    }
    if (num2 == "1200") {
        RsA3_2 = 1;

        $('#num2').css("background", "#00e600");


    } else {
        $('#num2').css("background", "#ff6666");

    }
    if (num3 == "1500") {
        RsA3_3 = 1;

        $('#num3').css("background", "#00e600");


    } else {
        $('#num3').css("background", "#ff6666");

    }
    if (num4 == "1800") {
        RsA3_4 = 1;

        $('#num4').css("background", "#00e600");


    } else {
        $('#num4').css("background", "#ff6666");

    }

    if (num5 == "2000") {
        RsA3_5 = 1;

        $('#num5').css("background", "#00e600");


    } else {
        $('#num5').css("background", "#ff6666");

    }
    if (num6 == "2500") {
        RsA3_6 = 1;

        $('#num6').css("background", "#00e600");


    } else {
        $('#num6').css("background", "#ff6666");

    }
    var subtotal = parseFloat(RsA3_1) + parseFloat(RsA3_2) + parseFloat(RsA3_3) + parseFloat(RsA3_4) + parseFloat(RsA3_5) + parseFloat(RsA3_6);
    var total2 = (subtotal * 5) / 6;
    $('#total1').val(parseFloat(total2).toFixed(2));

    //////////////////////////////////////////////////////////////////////

    var num7 = document.getElementById('num7').value;
    var num8 = document.getElementById('num8').value;
    var num9 = document.getElementById('num9').value;
    var num10 = document.getElementById('num10').value;
    var num11 = document.getElementById('num11').value;
    var num12 = document.getElementById('num12').value;
    var RsA2_1 = 0,
        RsA2_2 = 0,
        RsA2_3 = 0,
        RsA2_4 = 0,
        RsA2_5 = 0,
        RsA2_6 = 0;
    var resp11_1 = 0,
        resp11_2 = 0,
        resp11_3 = 0,
        resp11_4 = 0;
    /* if ($("#C7:checked").prop('checked') == true) {
        resp11_1 = 1;
    } else {

    }

    if ($("#C12:checked").prop('checked') == true) {
        resp11_2 = 1;
    } else {

    }
    if ($("#C16:checked").prop('checked') == true) {
        resp11_3 = 1;
    } else {

    }
    if ($("#C23:checked").prop('checked') == true) {
        resp11_4 = 1;
    } else {

    }*/
    //////////////////////////////////////////////////////////////////
    if (num7 == "107") {
        RsA2_1 = 1;

        $('#num7').css("background", "#00e600");


    } else {
        $('#num7').css("background", "#ff6666");

    }
    if (num8 == "109") {
        RsA2_2 = 1;

        $('#num8').css("background", "#00e600");


    } else {
        $('#num8').css("background", "#ff6666");

    }
    if (num9 == "112") {
        RsA2_3 = 1;

        $('#num9').css("background", "#00e600");


    } else {
        $('#num9').css("background", "#ff6666");

    }
    if (num10 == "115") {
        RsA2_4 = 1;

        $('#num10').css("background", "#00e600");


    } else {
        $('#num10').css("background", "#ff6666");

    }

    if (num11 == "117") {
        RsA2_5 = 1;

        $('#num11').css("background", "#00e600");


    } else {
        $('#num11').css("background", "#ff6666");

    }
    if (num12 == "118") {
        RsA2_6 = 1;

        $('#num12').css("background", "#00e600");


    } else {
        $('#num12').css("background", "#ff6666");

    }
    var subtotal = parseFloat(RsA2_1) + parseFloat(RsA2_2) + parseFloat(RsA2_3) + parseFloat(RsA2_4) + parseFloat(RsA2_5) + parseFloat(RsA2_6);
    var total2 = (subtotal * 5) / 6;
    $('#total2').val(parseFloat(total2).toFixed(2));

    ////////////////////////////////////////////////////////////////////////////
    var total1 = document.getElementById('total1').value;
    var total2 = document.getElementById('total2').value;
    var totales = parseFloat(total1) + parseFloat(total2);

    $('#txtNota').html(totales.toFixed(2));
    document.getElementById('bt_comprobar').disabled = true;
    $('input').attr("disabled", true);
    $('#txtAlumno').attr("disabled", false);




}
