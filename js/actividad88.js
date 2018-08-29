function sinEspacios(inputs) {
    $(inputs).on('keypress', function(e) {
        if (e.which == 32)
            return false;
    });
}
sinEspacios(".sinEspacios");



var act2 = [];
for (var i = 0; i < 10; i++) {
    act2[i] = Math.floor((Math.random() * 400) + 2);

}


$('#num1').html('' + act2[0] + ' × 1 =')
$('#num2').html('' + act2[1] + ' × 10 =')
$('#num3').html('' + act2[2] + ' × 100 =')
$('#num4').html('' + act2[3] + ' × 1000 =')


function actividad88() {
    var num1 = parseInt(act2[0]) *1;
    var num2 = parseInt(act2[1]) *10;
    var num3 = parseInt(act2[2]) *100;
    var num4 = parseInt(act2[3]) *1000;
    var act88_1 = document.getElementById('act88_1').value;
    var act88_2 = document.getElementById('act88_2').value;
    var act88_3 = document.getElementById('act88_3').value;
    var act88_4 = document.getElementById('act88_4').value;
    var act88_5 = document.getElementById('act88_5').value;
    var act88_6 = document.getElementById('act88_6').value;
    var nt1 = 0,
        nt2 = 0,
        nt3 = 0,
        nt4 = 0,
        nt5 = 0,
        nt6 = 0;
    if (act88_1 == num1) {
        nt1 = 1;
        $('#act88_1').css("background", "#00e600");

    } else {
        $('#act88_1').css("background", "#ff6666");

    }
    if (act88_2 == num2) {
        nt2 = 1;
        $('#act88_2').css("background", "#00e600");

    } else {
        $('#act88_2').css("background", "#ff6666");

    }

    if (act88_3 == num3) {
        nt3 = 1;
        $('#act88_3').css("background", "#00e600");

    } else {
        $('#act88_3').css("background", "#ff6666");

    }

    if (act88_4 == num4) {
        nt4 = 1;
        $('#act88_4').css("background", "#00e600");

    } else {
        $('#act88_4').css("background", "#ff6666");

    }

      if (act88_5 == "7905") {
        nt5 = 1;
        $('#act88_5').css("background", "#00e600");

    } else {
        $('#act88_5').css("background", "#ff6666");

    }
      if (act88_6 == "7905") {
        nt6 = 1;
        $('#act88_6').css("background", "#00e600");

    } else {
        $('#act88_6').css("background", "#ff6666");

    }


    var subtotal = parseFloat(nt1) + parseFloat(nt2) + parseFloat(nt3) + parseFloat(nt4) + parseFloat(nt5) + parseFloat(nt6);
    var total = (subtotal*10)/6;
    //$('#nota2').val(parseFloat(total).toFixed(2));
    $('#txtNota').html(total.toFixed(2));
    document.getElementById('bt_comprobar').disabled = true;
    $('input').attr("disabled", true);
    $('#txtAlumno').attr("disabled", false);
}


