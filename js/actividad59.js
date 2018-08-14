



function actividad59() {
    var txt1 = document.getElementById('txt1').value.toLowerCase();
    var txt2 = document.getElementById('txt2').value.toLowerCase();
    var txt3 = document.getElementById('txt3').value.toLowerCase();


    var RsA2_1 = 0,
        RsA2_2 = 0,
        RsA2_3 = 0,
        RsA2_4 = 0,
        RsA2_5 = 0,
        RsA2_6 = 0,
        RsA2_7 = 0,
        RsA2_8 = 0;
    if (txt1 == "obtuso") {
        RsA2_1 = 1;
        $('#txt1').css("background", "#00e600");

    } else {
        $('#txt1').css("background", "#ff6666");

    }
    if (txt2 == "no se unen") {
        RsA2_2 = 1;
        $('#txt2').css("background", "#00e600");

    } else {
        $('#txt2').css("background", "#ff6666");

    }
    if (txt3 == "paralelas") {
        RsA2_3 = 1;

        $('#txt3').css("background", "#00e600");


    } else {
        $('#txt3').css("background", "#ff6666");

    }



    var subtotal = parseFloat(RsA2_1) + parseFloat(RsA2_2) + parseFloat(RsA2_3);
    var total = (subtotal * 10) / 3;
    $('#txtNota').html(total.toFixed(2));
    document.getElementById('bt_comprobar').disabled = true;
    $('input').attr("disabled", true);
    $('#txtAlumno').attr("disabled", false);
}
