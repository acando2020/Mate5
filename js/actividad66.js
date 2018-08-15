function sinEspacios(inputs) {
    $(inputs).on('keypress', function(e) {
        if (e.which == 32)
            return false;
    });
}
sinEspacios("");

document.getElementById('nota5').addEventListener('keypress', () => {
    validNumero(0, 2.5, 1);
});
document.getElementById('nota5').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota5'), 2.5)
});


function actividad66_1() {

    var txt1 = document.getElementById('txt1').value.toLowerCase();
    var txt2 = document.getElementById('txt2').value.toLowerCase();
    var txt3 = document.getElementById('txt3').value.toLowerCase();
    var txt4 = document.getElementById('txt4').value.toLowerCase();
    var txt5 = document.getElementById('txt5').value.toLowerCase();
    var txt6 = document.getElementById('txt6').value.toLowerCase();

    var nt1 = 0,
        nt2 = 0,
        nt3 = 0,
        nt4 = 0,
        nt5 = 0,
        nt6 = 0,
        nt7 = 0,
        nt8 = 0,
        nt9 = 0,
        nt10 = 0;

    if ((txt1 == "40°") || (txt1 == "40")) {
        $('#txt1').css("background", "#00e600");
        nt1 = 1;

    } else {
        $('#txt1').css("background", "#ff6666");

    }

    if (txt2 == "agudo") {
        $('#txt2').css("background", "#00e600");
        nt2 = 1;

    } else {
        $('#txt2').css("background", "#ff6666");

    }
    if ((txt3 == "90°") || (txt3 == "90")) {
        $('#txt3').css("background", "#00e600");
        nt3 = 1;

    } else {
        $('#txt3').css("background", "#ff6666");

    }

    if (txt4 == "recto") {
        $('#txt4').css("background", "#00e600");
        nt4 = 1;

    } else {
        $('#txt4').css("background", "#ff6666");

    }

    if ((txt5 == "135°") || (txt5 == "135")) {
        $('#txt5').css("background", "#00e600");
        nt5 = 1;

    } else {
        $('#txt5').css("background", "#ff6666");

    }
    if (txt6 == "obtuso") {
        $('#txt6').css("background", "#00e600");
        nt6 = 1;

    } else {
        $('#txt6').css("background", "#ff6666");

    }
    ////////////////////////////////////////////////////////////////////

    var subtotal = parseInt(nt1) + parseInt(nt2) + parseInt(nt3) + parseInt(nt4) + parseInt(nt5) + parseInt(nt6);
    var total = (subtotal * 2.5) / 6;
    $('#nota4').val(parseFloat(total).toFixed(2));

}

function actividad66_2() {

    var txto1 = document.getElementById('txto1').value.toLowerCase();
    var txto2 = document.getElementById('txto2').value.toLowerCase();
    var txto3 = document.getElementById('txto3').value.toLowerCase();
    var txto4 = document.getElementById('txto4').value.toLowerCase();
    var txto5 = document.getElementById('txto5').value.toLowerCase();
    var txto6 = document.getElementById('txto6').value.toLowerCase();

    var nt1 = 0,
        nt2 = 0,
        nt3 = 0,
        nt4 = 0,
        nt5 = 0,
        nt6 = 0,
        nt7 = 0,
        nt8 = 0,
        nt9 = 0,
        nt10 = 0;

    if (txto1 == "2 plantillas de 60°") {
        $('#txto1').css("background", "#00e600");
        nt1 = 1;

    } else {
        $('#txto1').css("background", "#ff6666");

    }

    if (txto2 == "2 plantillas de 40°") {
        $('#txto2').css("background", "#00e600");
        nt2 = 1;

    } else {
        $('#txto2').css("background", "#ff6666");

    }
    if (txto3 == "2 plantillas de 30°") {
        $('#txto3').css("background", "#00e600");
        nt3 = 1;

    } else {
        $('#txto3').css("background", "#ff6666");

    }

    if (txto4 == "4 plantillas de 30°") {
        $('#txto4').css("background", "#00e600");
        nt4 = 1;

    } else {
        $('#txto4').css("background", "#ff6666");

    }

    if (txto5 == "3 plantillas de 40°") {
        $('#txto5').css("background", "#00e600");
        nt5 = 1;

    } else {
        $('#txto5').css("background", "#ff6666");

    }
    if (txto6 == "1 plantilla de 60° y una de 20°") {
        $('#txto6').css("background", "#00e600");
        nt6 = 1;

    } else {
        $('#txto6').css("background", "#ff6666");

    }
    ////////////////////////////////////////////////////////////////////

    var subtotal = parseInt(nt1) + parseInt(nt2) + parseInt(nt3) + parseInt(nt4) + parseInt(nt5) + parseInt(nt6);
    var total = (subtotal * 2.5) / 6;
    $('#nota6').val(parseFloat(total).toFixed(2));

}

function actividad66_3() {

    var texto1 = document.getElementById('texto1').value.toLowerCase();
    var texto2 = document.getElementById('texto2').value.toLowerCase();
    var texto3 = document.getElementById('texto3').value.toLowerCase();
    var texto4 = document.getElementById('texto4').value.toLowerCase();
    var texto5 = document.getElementById('texto5').value.toLowerCase();
    var texto6 = document.getElementById('texto6').value.toLowerCase();

    var nt1 = 0,
        nt2 = 0,
        nt3 = 0,
        nt4 = 0,
        nt5 = 0,
        nt6 = 0,
        nt7 = 0,
        nt8 = 0,
        nt9 = 0,
        nt10 = 0;

    if (texto1 == "obtuso") {
        $('#texto1').css("background", "#00e600");
        nt1 = 1;

    } else {
        $('#texto1').css("background", "#ff6666");

    }

    if (texto2 == "recto") {
        $('#texto2').css("background", "#00e600");
        nt2 = 1;

    } else {
        $('#texto2').css("background", "#ff6666");

    }
    if (texto3 == "obtuso") {
        $('#texto3').css("background", "#00e600");
        nt3 = 1;

    } else {
        $('#texto3').css("background", "#ff6666");

    }

    if (texto4 == "agudo") {
        $('#texto4').css("background", "#00e600");
        nt4 = 1;

    } else {
        $('#texto4').css("background", "#ff6666");

    }

    if (texto5 == "obtuso") {
        $('#texto5').css("background", "#00e600");
        nt5 = 1;

    } else {
        $('#texto5').css("background", "#ff6666");

    }
    if (texto6 == "obtuso") {
        $('#texto6').css("background", "#00e600");
        nt6 = 1;

    } else {
        $('#texto6').css("background", "#ff6666");

    }
    ////////////////////////////////////////////////////////////////////

    var subtotal = parseInt(nt1) + parseInt(nt2) + parseInt(nt3) + parseInt(nt4) + parseInt(nt5) + parseInt(nt6);
    var total = (subtotal * 2.5) / 6;
    $('#nota7').val(parseFloat(total).toFixed(2));

}


function actividad66() {
    var nota4 = document.getElementById('nota4').value;
    var nota5 = document.getElementById('nota5').value;
    var nota6 = document.getElementById('nota6').value;
    var nota7 = document.getElementById('nota7').value;
    if (nota5 == "") {
        alert("Ingrese la calificación de la pregunta 5")
    } else {
        actividad66_1();
        actividad66_2();
        actividad66_3();
        var nota4 = document.getElementById('nota4').value;
        var nota5 = document.getElementById('nota5').value;
        var nota6 = document.getElementById('nota6').value;
        var nota7 = document.getElementById('nota7').value;

        var total = parseFloat(nota4) + parseFloat(nota5) + parseFloat(nota6) + parseFloat(nota7);
        $('#txtNota').html(total.toFixed(2));
        document.getElementById('bt_comprobar').disabled = true;
        $('input').attr("disabled", true);
        $('#txtAlumno').attr("disabled", false);
    }


}
