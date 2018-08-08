function actividad32() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var num3 = document.getElementById('num3').value;
    var num4 = document.getElementById('num4').value;
    var num5 = document.getElementById('num5').value;
    var r1 = 0,
        r2 = 0,
        r3 = 0,
        r4 = 0,
        r5 = 0,
        r6 = 0,
        r7 = 0,
        r8 = 0,
        r9 = 0,
        r10 = 0;
    if ((num1 == "16 000 – 4 000 = 12 000") || (num1 == "16000–4000=12000")) {
        r1 = 2;
        $('#num1').css("background", "#00e600");

    } else {
        $('#num1').css("background", "#ff6666");

    }
    if ((num2 == "16 000 – 2 853 = 13 147") || (num2 == "16000–2853=13147")) {
        r2 = 2;
        $('#num2').css("background", "#00e600");

    } else {
        $('#num2').css("background", "#ff6666");

    }
    if ((num3 == "12 000") || (num3 == "12000")) {
        r3 = 2;
        $('#num3').css("background", "#00e600");

    } else {
        $('#num3').css("background", "#ff6666");

    }
    if ((num4 == "13 147") || (num4 == "13147")) {
        r4 = 2;
        $('#num4').css("background", "#00e600");

    } else {
        $('#num4').css("background", "#ff6666");

    }
    if ((num5 == "694 metros") || (num5 == "694") || (num5 == "694 Metros")) {
        r5 = 2;
        $('#num5').css("background", "#00e600");

    } else {
        $('#num5').css("background", "#ff6666");

    }

    ////////////////////////////////////////////////////////////////////////


    var total = parseInt(r1) + parseInt(r2) + parseInt(r3) + parseInt(r4) + parseInt(r5);
    $('#txtNota').html(total.toFixed(2));
    document.getElementById('bt_comprobar').disabled = true;
    $('input').attr("disabled", true);
    $('#txtAlumno').attr("disabled", false);



}
