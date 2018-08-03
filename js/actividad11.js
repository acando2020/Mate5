function actividad11_1() {
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
        RsA3_6 = 0,
        RsA3_7 = 0,
        RsA3_8 = 0,
        RsA3_9 = 0,
        RsA3_10 = 0;
    if (num1 == "7 centenas de mil = 700 000") {
        RsA3_1 = 1;
        $('#num1').css("background", "#00e600");

    } else {
        $('#num1').css("background", "#ff6666");

    }
    if (num2 == "6 decenas = 60") {
        RsA3_2 = 1;
        $('#num2').css("background", "#00e600");

    } else {
        $('#num2').css("background", "#ff6666");

    }
    /////////////////////////////////////////////////////////////
    if (num3 == "4 um + 3 c + 2 d + 7 u") {
        RsA3_3 = 1;

        $('#num3').css("background", "#00e600");


    } else {
        $('#num3').css("background", "#ff6666");

    }
    if (num4 == "7 um + 2 c + 6 d + 1 u") {
        RsA3_4 = 1;

        $('#num4').css("background", "#00e600");


    } else {
        $('#num4').css("background", "#ff6666");

    }
    if (num5 == "60 000 + 4 000 + 300 + 20 + 7") {
        RsA3_5 = 1;

        $('#num5').css("background", "#00e600");


    } else {
        $('#num5').css("background", "#ff6666");

    }
    if (num6 == "7 000 + 200 + 60 + 1") {
        RsA3_6 = 1;

        $('#num6').css("background", "#00e600");


    } else {
        $('#num6').css("background", "#ff6666");

    }
    ///////////////////////////////////////////////////

    var subtotal = parseFloat(RsA3_1) + parseFloat(RsA3_2) + parseFloat(RsA3_3) + parseFloat(RsA3_4) + parseFloat(RsA3_5) + parseFloat(RsA3_6) + parseFloat(RsA3_7) + parseFloat(RsA3_8) + parseFloat(RsA3_9) + parseFloat(RsA3_10);
    var total1 = (subtotal * 5) / 6;
    $('#total1').val(parseFloat(total1).toFixed(2));

}

function actividad11_2() {

    var num7 = document.getElementById('num7').value;
    var num8 = document.getElementById('num8').value;
    var num9 = document.getElementById('num9').value;
    var num10 = document.getElementById('num10').value;
    var RsA3_7 = 0,
        RsA3_8 = 0,
        RsA3_9 = 0,
        RsA3_10 = 0;
    var resp11_1 = 0,
        resp11_2 = 0,
        resp11_3 = 0,
        resp11_4 = 0;
    if ($("#C7:checked").prop('checked') == true) {
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

    }
    //////////////////////////////////////////////////////////////////
    if (num7 == "110") {
        RsA3_7 = 1;

        $('#num7').css("background", "#00e600");


    } else {
        $('#num7').css("background", "#ff6666");

    }
    if (num8 == "125") {
        RsA3_8 = 1;

        $('#num8').css("background", "#00e600");


    } else {
        $('#num8').css("background", "#ff6666");

    }
    if (num9 == "135") {
        RsA3_9 = 1;

        $('#num9').css("background", "#00e600");


    } else {
        $('#num9').css("background", "#ff6666");

    }
    if (num10 == "155") {
        RsA3_10 = 1;

        $('#num10').css("background", "#00e600");


    } else {
        $('#num10').css("background", "#ff6666");

    }
    var subtotal = parseInt(resp11_1) + parseInt(resp11_2) + parseInt(resp11_3) + parseInt(resp11_4) + parseFloat(RsA3_7) + parseFloat(RsA3_8) + parseFloat(RsA3_9) + parseFloat(RsA3_10);
    var total2 = (subtotal * 5) / 8;
    $('#total2').val(parseFloat(total2).toFixed(2));



}



function actividad11() {
    actividad11_1();
    actividad11_2();

    total1 = document.getElementById('total1').value;
    total2 = document.getElementById('total2').value;

    var total = parseFloat(total1) + parseFloat(total2);
    $('#txtNota').html(total.toFixed(2));
    document.getElementById('bt_comprobar').disabled = true;
    $('input').attr("disabled", true);
    $('#txtAlumno').attr("disabled", false);
}
