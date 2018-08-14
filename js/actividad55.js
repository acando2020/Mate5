function sinEspacios(inputs) {
    $(inputs).on('keypress', function(e) {
        if (e.which == 32)
            return false;
    });
}
sinEspacios(".text-question input");

function actividad55() {
    var txt1 = document.getElementById('txt1').value.toLowerCase();
    var txt2 = document.getElementById('txt2').value;
    var txt3 = document.getElementById('txt3').value.toLowerCase();
    var txt4 = document.getElementById('txt4').value;
    var txt5 = document.getElementById('txt5').value.toUpperCase();
    var txt6 = document.getElementById('txt6').value.toUpperCase();
    var txt7 = document.getElementById('txt7').value.toUpperCase();
    var txt8 = document.getElementById('txt8').value.toUpperCase();
    var RsA2_1 = 0,
        RsA2_2 = 0,
        RsA2_3 = 0,
        RsA2_4 = 0,
        RsA2_5 = 0,
        RsA2_6 = 0,
        RsA2_7 = 0,
        RsA2_8 = 0;
    if ((txt1 == "rectángulo") || (txt1 == "rectangulo")) {
        RsA2_1 = 1;
        $('#txt1').css("background", "#00e600");

    } else {
        $('#txt1').css("background", "#ff6666");

    }
    if (txt2 == "4") {
        RsA2_2 = 1;
        $('#txt2').css("background", "#00e600");

    } else {
        $('#txt2').css("background", "#ff6666");

    }
    if (txt3 == "rectas") {
        RsA2_3 = 1;

        $('#txt3').css("background", "#00e600");


    } else {
        $('#txt3').css("background", "#ff6666");

    }
    if (txt4 == "4") {
        RsA2_4 = 1;

        $('#txt4').css("background", "#00e600");


    } else {
        $('#txt4').css("background", "#ff6666");

    }
    if ((txt5 == "AD") || (txt5 == "AB") || (txt5 == "BA") || (txt5 == "BC") || (txt5 == "CB") || (txt5 == "CD") || (txt5 == "DC") || (txt5 == "DA")) {
        RsA2_5 = 1;
        $('#txt5').css("background", "#00e600");

    } else {
        $('#txt5').css("background", "#ff6666");

    }
    if (txt5 == txt6) {
        $('#txt6').css("background", "#ff6666");

    } else {
        if ((txt6 == "AD") || (txt6 == "AB") || (txt6 == "BA") || (txt6 == "BC") || (txt6 == "CB") || (txt6 == "CD") || (txt6 == "DC") || (txt6 == "DA")) {
            RsA2_6 = 1;
            $('#txt6').css("background", "#00e600");

        } else {
            $('#txt6').css("background", "#ff6666");

        }

    }
    if ((txt5 == txt7) || (txt6 == txt7)) {
        $('#txt7').css("background", "#ff6666");


    } else {
        if ((txt7 == "AD") || (txt7 == "AB") || (txt7 == "BA") || (txt7 == "BC") || (txt7 == "CB") || (txt7 == "CD") || (txt7 == "DC") || (txt7 == "DA")) {
            RsA2_7 = 1;

            $('#txt7').css("background", "#00e600");


        } else {
            $('#txt7').css("background", "#ff6666");

        }
    }

    if ((txt5 == txt8) || (txt6 == txt8) || (txt7 == txt8)) {
        $('#txt8').css("background", "#ff6666");


    } else {
        if ((txt8 == "AD") || (txt8 == "AB") || (txt8 == "BA") || (txt8 == "BC") || (txt8 == "CB") || (txt8 == "CD") || (txt8 == "DC") || (txt8 == "DA")) {
            RsA2_8 = 1;

            $('#txt8').css("background", "#00e600");


        } else {
            $('#txt8').css("background", "#ff6666");

        }

    }



    var subtotal = parseFloat(RsA2_1) + parseFloat(RsA2_2) + parseFloat(RsA2_3) + parseFloat(RsA2_4) + parseFloat(RsA2_5) + parseFloat(RsA2_6) + parseFloat(RsA2_7) + parseFloat(RsA2_8);
    var total = (subtotal * 5) / 8;


    ///////////////////////////////////////////////////////////////////////////
    var txto1 = document.getElementById('txto1').value.toLowerCase();
    var txto2 = document.getElementById('txto2').value;
    var txto3 = document.getElementById('txto3').value.toLowerCase();
    var txto4 = document.getElementById('txto4').value;
    var txto5 = document.getElementById('txto5').value.toUpperCase();
    var txto6 = document.getElementById('txto6').value.toUpperCase();
    var txto7 = document.getElementById('txto7').value.toUpperCase();

    var RsA2_1 = 0,
        RsA2_2 = 0,
        RsA2_3 = 0,
        RsA2_4 = 0,
        RsA2_5 = 0,
        RsA2_6 = 0,
        RsA2_7 = 0,
        RsA2_8 = 0;
    if ((txto1 == "triángulo") || (txto1 == "triangulo")) {
        RsA2_1 = 1;
        $('#txto1').css("background", "#00e600");

    } else {
        $('#txto1').css("background", "#ff6666");

    }
    if (txto2 == "3") {
        RsA2_2 = 1;
        $('#txto2').css("background", "#00e600");

    } else {
        $('#txto2').css("background", "#ff6666");

    }
    if (txto3 == "rectas") {
        RsA2_3 = 1;

        $('#txto3').css("background", "#00e600");


    } else {
        $('#txto3').css("background", "#ff6666");

    }
    if (txto4 == "3") {
        RsA2_4 = 1;

        $('#txto4').css("background", "#00e600");


    } else {
        $('#txto4').css("background", "#ff6666");

    }

    if ((txto5 == "AB") || (txto5 == "AC") || (txto5 == "BA") || (txto5 == "BC") || (txto5 == "CB") || (txto5 == "CA")) {
        RsA2_5 = 1;
        $('#txto5').css("background", "#00e600");

    } else {
        $('#txto5').css("background", "#ff6666");

    }
    if (txto5 == txto6) {
        $('#txto6').css("background", "#ff6666");
    } else {
        if ((txto6 == "AB") || (txto6 == "AC") || (txto6 == "BA") || (txto6 == "BC") || (txto6 == "CB") || (txto6 == "CA")) {
            RsA2_6 = 1;
            $('#txto6').css("background", "#00e600");

        } else {
            $('#txto6').css("background", "#ff6666");

        }
    }

    if ((txto5 == txto7) || (txto6 == txto7)) {
        $('#txto7').css("background", "#ff6666");


    } else {
        if ((txto7 == "AB") || (txto7 == "AC") || (txto7 == "BA") || (txto7 == "BC") || (txto7 == "CB") || (txto7 == "CA")) {
            RsA2_7 = 1;

            $('#txto7').css("background", "#00e600");


        } else {
            $('#txto7').css("background", "#ff6666");

        }

    }



    var subtotal = parseFloat(RsA2_1) + parseFloat(RsA2_2) + parseFloat(RsA2_3) + parseFloat(RsA2_4) + parseFloat(RsA2_5) + parseFloat(RsA2_6) + parseFloat(RsA2_7);
    var total2 = (subtotal * 5) / 7;

    totales = parseFloat(total) + parseFloat(total2);
    $('#txtNota').html(totales.toFixed(2));
    document.getElementById('bt_comprobar').disabled = true;
    $('input').attr("disabled", true);
    $('#txtAlumno').attr("disabled", false);
}
