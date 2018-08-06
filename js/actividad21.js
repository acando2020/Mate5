function actividad21() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var num3 = document.getElementById('num3').value;
    var num4 = document.getElementById('num4').value;
    var num5 = document.getElementById('num5').value;
    var num6 = document.getElementById('num6').value;
    var resp2_1 = 0,
        resp2_2 = 0,
        resp2_3 = 0,
        resp2_4 = 0,
        resp2_5 = 0,
        resp2_6 = 0;
    if ((num1 == "4 950") || (num1 == "4950")) {
        resp2_1 = 1;
        $('#num1').css("background", "#00e600");


    } else {
        $('#num1').css("background", "#ff6666");

    }
    if ((num2 == "4 345 + 500 + 105") || (num2 == "4345 + 500 + 105") || (num2 == "4345+500+105")) {
        resp2_2 = 1;
        $('#num2').css("background", "#00e600");


    } else {
        $('#num2').css("background", "#ff6666");

    }
    if ((num3 == "4 950") || (num3 == "4950")) {
        resp2_3 = 1;
        $('#num3').css("background", "#00e600");


    } else {
        $('#num3').css("background", "#ff6666");

    }
    if ((num4 == "(4 345 + 500) + 105") || (num4 == "(4345 + 500) + 105") || (num4 == "(4345+500)+105")) {
        resp2_4 = 1;
        $('#num4').css("background", "#00e600");


    } else {
        $('#num4').css("background", "#ff6666");

    }
    if ((num5 == "4 845 + 105") || (num5 == "4845 + 105") || (num5 == "4845+105")) {
        resp2_5 = 1;
        $('#num5').css("background", "#00e600");


    } else {
        $('#num5').css("background", "#ff6666");

    }
    if ((num6 == "4 950") || (num6 == "4950")) {
        resp2_6 = 1;
        $('#num6').css("background", "#00e600");


    } else {
        $('#num6').css("background", "#ff6666");

    }
    var subtotal = parseInt(resp2_1) + parseInt(resp2_2) + parseInt(resp2_3) + parseInt(resp2_4) + parseInt(resp2_5) + parseInt(resp2_6);
    var total = (subtotal * 10) / 6;
    $('#txtNota').html(total.toFixed(2));
    document.getElementById('bt_comprobar').disabled = true;
    $('input').attr("disabled", true);
    $('#txtAlumno').attr("disabled", false);


}
