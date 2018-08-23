function actividad76() {
    var act77_1 = document.getElementById('act77_1').value;
    var act77_2 = document.getElementById('act77_2').value;
    var act77_3 = document.getElementById('act77_3').value;
    var act77_4 = document.getElementById('act77_4').value;
    var act77_5 = document.getElementById('act77_5').value;
    var act77_6 = document.getElementById('act77_6').value;
    var act77_7 = document.getElementById('act77_7').value;
    var act77_8 = document.getElementById('act77_8').value;
    var act77_9 = document.getElementById('act77_9').value;



    var nt1 = 0,
        nt2 = 0,
        nt3 = 0,
        nt4 = 0,
        nt5 = 0,
        nt6 = 0,
        nt7 = 0,
        nt8 = 0,
        nt9 = 0;
    if (act77_1 == "486") {
        nt1 = 1;
        $('#act77_1').css("background", "#00e600");

    } else {
        $('#act77_1').css("background", "#ff6666");

    }

    if (act77_2 == "1458") {
        nt2 = 1;
        $('#act77_2').css("background", "#00e600");

    } else {
        $('#act77_2').css("background", "#ff6666");

    }


    if (act77_3 == "4374") {
        nt3 = 1;
        $('#act77_3').css("background", "#00e600");

    } else {
        $('#act77_3').css("background", "#ff6666");

    }

    if (act77_4 == "486") {
        nt4 = 1;
        $('#act77_4').css("background", "#00e600");

    } else {
        $('#act77_4').css("background", "#ff6666");

    }

    if (act77_5 == "1458") {
        nt5 = 1;
        $('#act77_5').css("background", "#00e600");

    } else {
        $('#act77_5').css("background", "#ff6666");

    }


    if (act77_6 == "4374") {
        nt6 = 1;
        $('#act77_6').css("background", "#00e600");

    } else {
        $('#act77_6').css("background", "#ff6666");

    }


    if (act77_7 == "486") {
        nt7 = 1;
        $('#act77_7').css("background", "#00e600");

    } else {
        $('#act77_7').css("background", "#ff6666");

    }

    if (act77_8 == "1458") {
        nt8 = 1;
        $('#act77_8').css("background", "#00e600");

    } else {
        $('#act77_8').css("background", "#ff6666");

    }


    if (act77_9 == "4374") {
        nt9 = 1;
        $('#act77_9').css("background", "#00e600");

    } else {
        $('#act77_9').css("background", "#ff6666");

    }
    var subtotal = parseInt(nt1) + parseInt(nt2) + parseInt(nt3) + parseInt(nt4) + parseInt(nt5)+parseInt(nt6) + parseInt(nt7) + parseInt(nt8) + parseInt(nt9);
    var total = (subtotal*10)/9;
    $('#txtNota').html(total.toFixed(2));
    document.getElementById('bt_comprobar').disabled = true;
    $('input').attr("disabled", true);
    $('#txtAlumno').attr("disabled", false);
}
