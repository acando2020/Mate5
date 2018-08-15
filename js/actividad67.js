function sinEspacios(inputs) {
    $(inputs).on('keypress', function(e) {
        if (e.which == 32)
            return false;
    });
}
sinEspacios(".text-question");



function actividad67() {

    var txt1 = document.getElementById('txt1').value.toLowerCase();
    var txt2 = document.getElementById('txt2').value.toLowerCase();
    var txt3 = document.getElementById('txt3').value.toLowerCase();

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

    if ((txt1 == "60°+60°+10°=130°") || (txt1 == "60+60+10=130")|| (txt1 == "10+60+60=130")|| (txt1 == "60+10+60=130")) {
        $('#txt1').css("background", "#00e600");
        nt1 = 1;

    } else {
        $('#txt1').css("background", "#ff6666");

    }

    if ((txt2 == "30°+60°+40°=130°") || (txt2 == "30+60+40=130")|| (txt2 == "60+30+40=130")|| (txt2 == "60+40+30=130")|| (txt2 == "40+60+30=130")) {
        $('#txt2').css("background", "#00e600");
        nt2 = 1;

    } else {
        $('#txt2').css("background", "#ff6666");

    }
    if (txt3 == "60") {
        $('#txt3').css("background", "#00e600");
        nt3 = 1;

    } else {
        $('#txt3').css("background", "#ff6666");

    }


    ////////////////////////////////////////////////////////////////////

    var subtotal = parseInt(nt1) + parseInt(nt2) + parseInt(nt3) + parseInt(nt4) + parseInt(nt5) + parseInt(nt6);
    var total = (subtotal * 10) / 3;
    $('#txtNota').html(total.toFixed(2));
    document.getElementById('bt_comprobar').disabled = true;
    $('input').attr("disabled", true);
    $('#txtAlumno').attr("disabled", false);

}
