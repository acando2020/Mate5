function sinEspacios(inputs) {
    $(inputs).on('keypress', function(e) {
        if (e.which == 32)
            return false;
    });
}
sinEspacios(".sinEspacios");



function actividad81() {
    var rsSuma1 = document.getElementById('rsSuma1').value;
    var rsSuma2 = document.getElementById('rsSuma2').value;
    var rsSuma3 = document.getElementById('rsSuma3').value;
    var rsSuma4 = document.getElementById('rsSuma4').value;
    var rsSuma5 = document.getElementById('rsSuma5').value;
    var rsSuma6 = document.getElementById('rsSuma6').value;

    var nt1 = 0,
        nt2 = 0,
        nt3 = 0,
        nt4 = 0,
        nt5 = 0,
        nt6 = 0,
        nt7 = 0,
        nt8 = 0,
        nt9 = 0,
        nt10 = 0,
        nt11 = 0;

    if (rsSuma1 == "3") {
        nt1 = 1;
        $('#rsSuma1').css("background", "#00e600");

    } else {
        $('#rsSuma1').css("background", "#ff6666");

    }



    if (rsSuma2 == "6") {
        nt2 = 1;
        $('#rsSuma2').css("background", "#00e600");

    } else {
        $('#rsSuma2').css("background", "#ff6666");

    }


    if (rsSuma3 == "9") {
        nt3 = 1;
        $('#rsSuma3').css("background", "#00e600");

    } else {
        $('#rsSuma3').css("background", "#ff6666");

    }



    if (rsSuma4 == "8") {
        nt4 = 1;
        $('#rsSuma4').css("background", "#00e600");

    } else {
        $('#rsSuma4').css("background", "#ff6666");

    }

    if (rsSuma5 == "1") {
        nt5 = 1;
        $('#rsSuma5').css("background", "#00e600");

    } else {
        $('#rsSuma5').css("background", "#ff6666");

    }
    if (rsSuma6 == "36981") {
        nt6 = 1;
        $('#rsSuma6').css("background", "#00e600");

    } else {
        $('#rsSuma6').css("background", "#ff6666");

    }
    var subtotal = parseInt(nt1) + parseInt(nt2) + parseInt(nt3) + parseInt(nt4) + parseInt(nt5) + parseInt(nt6);
    var total = (subtotal * 10) / 6;
    $('#txtNota').html(total.toFixed(2));
    document.getElementById('bt_comprobar').disabled = true;
    $('input').attr("disabled", true);
    $('#txtAlumno').attr("disabled", false);

}

