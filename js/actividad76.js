function actividad76() {
    var act76_1 = document.getElementById('act76_1').value;
    var act76_2 = document.getElementById('act76_2').value;
    var act76_3 = document.getElementById('act76_3').value;
    var act76_4 = document.getElementById('act76_4').value;


    var nt1 = 0,
        nt2 = 0,
        nt3 = 0,
        nt4 = 0,
        nt5 = 0,
        nt6 = 0;
    if (act76_1 == "creciente") {
        nt2 = 1;
        $('#act76_1').css("background", "#00e600");

    } else {
        $('#act76_1').css("background", "#ff6666");

    }

    if (act76_2 == "multiplicativo") {
        nt3 = 1;
        $('#act76_2').css("background", "#00e600");

    } else {
        $('#act76_2').css("background", "#ff6666");

    }


    for (var i = 1; i < 7; i++) {
        var patron = $('#ptr' + [i] + '').val();
        if (patron == "x8") {

            $('#ptr' + [i] + '').css("background", "#00e600");
            nt1 = nt1 + 1;

        } else {
            $('#ptr' + [i] + '').css("background", "#ff6666");

        }

    }

    if ((act76_3 == "32 personas") || (act76_3 == "32")) {
        nt4 = 1;
        $('#act76_3').css("background", "#00e600");

    } else {
        $('#act76_3').css("background", "#ff6666");

    }

    if (act76_4 == "220") {
        nt5 = 1;
        $('#act76_4').css("background", "#00e600");

    } else {
        $('#act76_4').css("background", "#ff6666");

    }
    var total = parseInt(nt1) + parseInt(nt2) + parseInt(nt3) + parseInt(nt4) + parseInt(nt5);
    $('#txtNota').html(total.toFixed(2));
    document.getElementById('bt_comprobar').disabled = true;
    $('input').attr("disabled", true);
    $('#txtAlumno').attr("disabled", false);
}
