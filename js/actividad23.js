var tablas = [
    [' <table>' +
        '<tr>' +
        '<td>980 + 2 000 + 120 </td>' +
        '<td>=</td>' +
        '<td>' +
        '<input type="text" id="d1" class="form-control" name="">' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td>' +
        '<input type="text" id="d2" class="form-control" name="">' +
        '</td>' +
        '<td>=</td>' +
        '<td>' +
        '<input type="text" id="d3" class="form-control" name="">' +
        '</td>' +
        '</tr>' +
        '</table>'
    ],
    ['<table>' +
        '<tr>' +
        '<td>8 + 45 + 12</td>' +
        '<td>=</td>' +
        '<td>' +
        '<input type="text" id="b1" class="form-control" name="">' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td>' +
        '<input type="text" id="b2" class="form-control" name="">' +
        '</td>' +
        '<td>=</td>' +
        '<td>' +
        '<input type="text" id="b3" class="form-control" name="">' +
        '</td>' +
        '</tr>' +
        '</table>'
    ],
    ['<table>' +
        '<tr>' +
        '<td>6 800 + 15 + 100</td>' +
        '<td>=</td>' +
        '<td>' +
        ' <input type="text" id="e1" class="form-control" name="">' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td>' +
        '<input type="text" id="e2" class="form-control" name="">' +
        '</td>' +
        '<td>=</td>' +
        '<td>' +
        '<input type="text" id="e3" class="form-control" name="">' +
        '</td>' +
        '</tr>' +
        '</table>'
    ],
    [' <table>' +
        '<tr>' +
        '<td>74 + 16 + 100</td>' +
        '<td>=</td>' +
        '<td>' +
        '<input type="text" id="c1" class="form-control" name="">' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td>' +
        '<input type="text" id="c2" class="form-control" name="">' +
        '</td>' +
        '<td>=</td>' +
        '<td>' +
        '<input type = "text" id = "c3" class = "form-control" name = "" > ' +
        '</td>' +
        '</tr>' +
        '</table>'
    ],
    [' <table>' +
        '<tr>' +
        '<td>7 250 + 2 025 + 750</td>' +
        '<td>=</td>' +
        '<td>' +
        '<input type="text" id="f1" class="form-control" name="">' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td>' +
        '<input type="text" id="f2" class="form-control" name="">' +
        '</td>' +
        '<td>=</td>' +
        '<td>' +
        '<input type="text" id="f3" class="form-control" name="">' +
        '</td>' +
        '</tr>' +
        '</table>'
    ],

]

var completar = document.getElementsByClassName('com');
tablas.sort(f_randomico);
for (i = 0; i < completar.length; i++) {

    $('#' + completar[i].id).html('<span width="50px">' + tablas[i] + '</span> ');

}

function actividad23() {
    var d1 = document.getElementById('d1').value;
    var d2 = document.getElementById('d2').value;
    var d3 = document.getElementById('d3').value;

    var b1 = document.getElementById('b1').value;
    var b2 = document.getElementById('b2').value;
    var b3 = document.getElementById('b3').value;

    var e1 = document.getElementById('e1').value;
    var e2 = document.getElementById('e2').value;
    var e3 = document.getElementById('e3').value;


    var c1 = document.getElementById('c1').value;
    var c2 = document.getElementById('c2').value;
    var c3 = document.getElementById('c3').value;

    var f1 = document.getElementById('f1').value;
    var f2 = document.getElementById('f2').value;
    var f3 = document.getElementById('f3').value;


    var resp2_1 = 0,
        resp2_2 = 0,
        resp2_3 = 0,
        resp2_4 = 0,
        resp2_5 = 0,
        resp2_6 = 0,
        resp2_7 = 0,
        resp2_8 = 0,
        resp2_9 = 0,
        resp2_10 = 0,
        resp2_11 = 0,
        resp2_12 = 0,
        resp2_13 = 0,
        resp2_14 = 0,
        resp2_15 = 0,
        resp2_16 = 0,
        resp2_17 = 0,
        resp2_18 = 0;
    ///////////////////////////////////////////////////////////////////
    if ((d1 == "2 000 + 980 + 120") || (d1 == "2000+980+120")) {
        resp2_1 = 1;
        $('#d1').css("background", "#00e600");


    } else {
        $('#d1').css("background", "#ff6666");

    }
    if ((d2 == "3100") || (d2 == "3 100")) {
        resp2_2 = 1;
        $('#d2').css("background", "#00e600");


    } else {
        $('#d2').css("background", "#ff6666");

    }
    if ((d3 == "3100") || (d3 == "3100")) {
        resp2_3 = 1;
        $('#d3').css("background", "#00e600");


    } else {
        $('#d3').css("background", "#ff6666");

    }

    ///////////////////////////////////////////////////////////////
    if ((b1 == "12 + 8 + 45") || (b1 == "12+8+45")) {
        resp2_4 = 1;
        $('#b1').css("background", "#00e600");


    } else {
        $('#b1').css("background", "#ff6666");

    }
    if (b2 == "65") {
        resp2_5 = 1;
        $('#b2').css("background", "#00e600");


    } else {
        $('#b2').css("background", "#ff6666");

    }

    if (b3 == "65") {
        resp2_6 = 1;
        $('#b3').css("background", "#00e600");


    } else {
        $('#b3').css("background", "#ff6666");

    }
    ///////////////////////////////////////////////////////////////
    if ((e1 == "6 800 + 100 + 15") || (e1 == "6800+100+15")) {
        resp2_7 = 1;
        $('#e1').css("background", "#00e600");


    } else {
        $('#e1').css("background", "#ff6666");

    }
    if ((e2 == "6 915") || (e2 == "6915")) {
        resp2_8 = 1;
        $('#e2').css("background", "#00e600");


    } else {
        $('#e2').css("background", "#ff6666");

    }

    if ((e3 == "6 915") || (e3 == "6915")) {
        resp2_9 = 1;
        $('#e3').css("background", "#00e600");


    } else {
        $('#e3').css("background", "#ff6666");

    }

    ///////////////////////////////////////////////////////////////
    if ((c1 == "100 + 74 + 16") || (c1 == "100+74+16")) {
        resp2_10 = 1;
        $('#c1').css("background", "#00e600");


    } else {
        $('#c1').css("background", "#ff6666");

    }
    if (c2 == "190") {
        resp2_11 = 1;
        $('#c2').css("background", "#00e600");


    } else {
        $('#c2').css("background", "#ff6666");

    }
    if (c3 == "190") {
        resp2_12 = 1;
        $('#c3').css("background", "#00e600");


    } else {
        $('#c3').css("background", "#ff6666");

    }
    ///////////////////////////////////////////////////////////////
    if ((f1 == "7 250 + 750 + 2 025") || (f1 == "7250+750+2025")) {
        resp2_13 = 1;
        $('#f1').css("background", "#00e600");


    } else {
        $('#f1').css("background", "#ff6666");

    }
    if ((f2 == "10 025") || (f2 == "10025")) {
        resp2_14 = 1;
        $('#f2').css("background", "#00e600");


    } else {
        $('#f2').css("background", "#ff6666");

    }
    if ((f3 == "10 025") || (f3 == "10025")) {
        resp2_15 = 1;
        $('#f3').css("background", "#00e600");


    } else {
        $('#f3').css("background", "#ff6666");

    }

    var subtotal = parseInt(resp2_1) + parseInt(resp2_2) + parseInt(resp2_3) + parseInt(resp2_4) + parseInt(resp2_5) + parseInt(resp2_6) + parseInt(resp2_7) + parseInt(resp2_8) + parseInt(resp2_9) + parseInt(resp2_10) + parseInt(resp2_11) + parseInt(resp2_12) + parseInt(resp2_13) + parseInt(resp2_14) + parseInt(resp2_15);
    var total = (subtotal * 10) / 15;
    $('#txtNota').html(total.toFixed(2));
    document.getElementById('bt_comprobar').disabled = true;
    $('input').attr("disabled", true);
    $('#txtAlumno').attr("disabled", false);


}
