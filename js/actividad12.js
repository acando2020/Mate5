function actividad12() {
    var num11 = document.getElementById('num11').value;
    var num12 = document.getElementById('num12').value;
    var num13 = document.getElementById('num13').value;
    var num14 = document.getElementById('num14').value;
    var num15 = document.getElementById('num15').value;

    var RsA3_1 = 0,
        RsA3_2 = 0,
        RsA3_3 = 0,
        RsA3_4 = 0,
        RsA3_5 = 0;

    if (num11 == "890") {
        RsA3_1 = 1;
        $('#num11').css("background", "#00e600");

    } else {
        $('#num11').css("background", "#ff6666");

    }
    if ((num12 == "5 680")||(num12 == "5680")) {
        RsA3_2 = 1;
        $('#num12').css("background", "#00e600");

    } else {
        $('#num12').css("background", "#ff6666");

    }
   if ((num13 == "18 400")||(num13 == "18400")) {
        RsA3_3 = 1;

        $('#num13').css("background", "#00e600");


    } else {
        $('#num13').css("background", "#ff6666");

    }
    if ((num14 == "137 450")||(num14 == "137450")) {
        RsA3_4 = 1;

        $('#num14').css("background", "#00e600");


    } else {
        $('#num14').css("background", "#ff6666");

    }
    if (num15 == "las mariposas") {
        RsA3_5 = 1;

        $('#num15').css("background", "#00e600");


    } else {
        $('#num15').css("background", "#ff6666");

    }

    ///////////////////////////////////////////////////

    var subtotal = parseFloat(RsA3_1) + parseFloat(RsA3_2) + parseFloat(RsA3_3) + parseFloat(RsA3_4)+ parseFloat(RsA3_5);
    var total3 = (subtotal*10)/5;
     $('#txtNota').html(total3.toFixed(2));
    document.getElementById('bt_comprobar').disabled = true;
    $('input').attr("disabled", true);
}

