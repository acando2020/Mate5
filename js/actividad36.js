function actividad36() {
    var numero1 = document.getElementById('numero1').value;
    var numero2 = document.getElementById('numero2').value;
    var numero3 = document.getElementById('numero3').value;
    var numero4 = document.getElementById('numero4').value;
    var numero5 = document.getElementById('numero5').value;
    var respuesta1 = 0,
        respuesta2 = 0,
        respuesta3 = 0,
        respuesta4 = 0,
        respuesta5 = 0;
    if ((numero1 == "$ 345 + $ 410 = $ 755") || (numero1 == "$345 + $410 = $755") || (numero1 == "345 + 410 = 755") || (numero1 == "345+410=755")) {
        $('#numero1').css("background", "#00e600");
        respuesta1 = 2;

    } else {
        $('#numero1').css("background", "#ff6666");

    }

    if ((numero2 == "$ 755 – $ 175 = $ 580") || (numero2 == "$755 – $175 = $580") || (numero2 == "755 – 175 = 580") || (numero2 == "755–175=580")) {
        $('#numero2').css("background", "#00e600");
        respuesta2 = 2;

    } else {
        $('#numero2').css("background", "#ff6666");

    }

    if ((numero3 == "$ 580") || (numero3 == "$580") || (numero3 == "580")) {
        $('#numero3').css("background", "#00e600");
        respuesta3 = 2;

    } else {
        $('#numero3').css("background", "#ff6666");

    }

    if ((numero4 == "875 – (250 + 345) = 875 – 595 = 280") || (numero4 == "875–(250+345)=875–595=280")) {
        $('#numero4').css("background", "#00e600");
        respuesta4 = 2;

    } else {
        $('#numero4').css("background", "#ff6666");

    }

    if ((numero5 == "Sí, le alcanzará el dinero y le sobrarán $ 280") || (numero5 == "$280") || (numero5 == "$ 280") || (numero5 == "280")) {
        $('#numero5').css("background", "#00e600");
        respuesta5 = 2;

    } else {
        $('#numero5').css("background", "#ff6666");

    }

    var total = parseFloat(respuesta1) + parseFloat(respuesta2) + parseFloat(respuesta3) + parseFloat(respuesta4) + parseFloat(respuesta5);

    $('#txtNota').html(total.toFixed(2));
    document.getElementById('bt_comprobar').disabled = true;
    $('input').attr("disabled", true);
    $('#txtAlumno').attr("disabled", false);



}
