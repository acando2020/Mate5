function sinEspacios(inputs) {
    $(inputs).on('keypress', function(e) {
        if (e.which == 32)
            return false;
    });
}
sinEspacios(".text-question .form-control");

function actividad48() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var num3 = document.getElementById('num3').value;
    var num4 = document.getElementById('num4').value;
    var RsA2_1 = 0,
        RsA2_2 = 0,
        RsA2_3 = 0,
        RsA2_4 = 0;
    if (num1 == "860+475+628=1963") {
        RsA2_1 = 2.5;
        $('#num1').css("background", "#00e600");

    } else {
        $('#num1').css("background", "#ff6666");

    }
    if (num2 == "1963-65=1898") {
        RsA2_2 = 2.5;
        $('#num2').css("background", "#00e600");

    } else {
        $('#num2').css("background", "#ff6666");

    }
    if (num3 == "1963") {
        RsA2_3 = 2.5;

        $('#num3').css("background", "#00e600");


    } else {
        $('#num3').css("background", "#ff6666");

    }
    if (num4 == "1898") {
        RsA2_4 = 2.5;

        $('#num4').css("background", "#00e600");


    } else {
        $('#num4').css("background", "#ff6666");

    }
    var subtotal = (parseFloat(RsA2_1) + parseFloat(RsA2_2) + parseFloat(RsA2_3) + parseFloat(RsA2_4)) / 2;
    $('#txtNota').html(subtotal.toFixed(2));
    document.getElementById('bt_comprobar').disabled = true;
    $('input').attr("disabled", true);
    $('#txtAlumno').attr("disabled", false);
}
