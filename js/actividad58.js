



function actividad58() {
    var txt1 = document.getElementById('txt1').value.toLowerCase();
    var txt2 = document.getElementById('txt2').value.toLowerCase();
    var txt3 = document.getElementById('txt3').value.toLowerCase();
    var txt4 = document.getElementById('txt4').value.toLowerCase();

    var RsA2_1 = 0,
        RsA2_2 = 0,
        RsA2_3 = 0,
        RsA2_4 = 0,
        RsA2_5 = 0,
        RsA2_6 = 0,
        RsA2_7 = 0,
        RsA2_8 = 0;
    if ((txt1 == "4 tiras")||(txt1 == "4tiras")||(txt1 == "4")) {
        RsA2_1 = 1;
        $('#txt1').css("background", "#00e600");

    } else {
        $('#txt1').css("background", "#ff6666");

    }
    if ((txt2 == "12 tiras")||(txt2 == "12tiras")||(txt2 == "12")) {
        RsA2_2 = 1;
        $('#txt2').css("background", "#00e600");

    } else {
        $('#txt2').css("background", "#ff6666");

    }
    if ((txt3 == "5 tiras")||(txt3 == "5tiras")||(txt3 == "5")) {
        RsA2_3 = 1;

        $('#txt3').css("background", "#00e600");


    } else {
        $('#txt3').css("background", "#ff6666");

    }
    if ((txt4 == "12 tiras")||(txt4 == "12tiras")||(txt4 == "12")) {
        RsA2_4 = 1;

        $('#txt4').css("background", "#00e600");


    } else {
        $('#txt4').css("background", "#ff6666");

    }



    var subtotal = parseFloat(RsA2_1) + parseFloat(RsA2_2) + parseFloat(RsA2_3) + parseFloat(RsA2_4);
    var total = (subtotal * 10) / 4;
    $('#txtNota').html(total.toFixed(2));
    document.getElementById('bt_comprobar').disabled = true;
    $('input').attr("disabled", true);
    $('#txtAlumno').attr("disabled", false);
}
