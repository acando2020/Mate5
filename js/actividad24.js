var tablas = [
    [' <table>' +
        '<tr>' +
        '<td>74 + 6 + 54</td>' +
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
        '<tr>' +
        '<td>' +
        '<input type="text" id="d4" class="form-control" name="">' +
        '</td>' +
        '<td>=</td>' +
        '<td>' +
        '<input type="text" id="d5" class="form-control" name="">' +
        '</td>' +
        '</tr>' +
        '</table>'
    ],
    ['<table>' +
        '<tr>' +
        '<td>21 + 36 + 24</td>' +
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
        '<tr>' +
        '<td>' +
        '<input type="text" id="b4" class="form-control" name="">' +
        '</td>' +
        '<td>=</td>' +
        '<td>' +
        '<input type="text" id="b5" class="form-control" name="">' +
        '</td>' +
        '</tr>' +
        '</table>'
    ],
    ['<table>' +
        '<tr>' +
        '<td>61 + 19 + 25</td>' +
        '<td>=</td>' +
        '<td>' +
        '<input type="text" id="e1" class="form-control" name="">' +
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
        '<tr>' +
        '<td>' +
        '<input type="text" id="e4" class="form-control" name="">' +
        '</td>' +
        '<td>=</td>' +
        '<td>' +
        '<input type="text" id="e5" class="form-control" name="">' +
        '</td>' +
        '</tr>' +
        '</table>'
    ],
    [' <table>' +
        '<tr>' +
        '<td>42 + 53 + 15</td>' +
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
        '<input type="text" id="c3" class="form-control" name="">' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td>' +
        '<input type="text" id="c4" class="form-control" name="">' +
        '</td>' +
        '<td>=</td>' +
        '<td>' +
        '<input type="text" id="c5" class="form-control" name="">' +
        '</td>' +
        '</tr>' +
        '</table>'
    ],
    ['<table>' +
        '<tr>' +
        '<td>8 + 45 + 12 + 15</td>' +
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
        '<tr>' +
        '<td>' +
        '<input type="text" id="f4" class="form-control" name="">' +
        '</td>' +
        '<td>=</td>' +
        '<td>' +
        '<input type="text" id="f5" class="form-control" name="">' +
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

function actividad24() {
    var d1 = document.getElementById('d1').value;
    var d2 = document.getElementById('d2').value;
    var d3 = document.getElementById('d3').value;
    var d4 = document.getElementById('d4').value;
    var d5 = document.getElementById('d5').value;

    var b1 = document.getElementById('b1').value;
    var b2 = document.getElementById('b2').value;
    var b3 = document.getElementById('b3').value;
    var b4 = document.getElementById('b4').value;
    var b5 = document.getElementById('b5').value;

    var e1 = document.getElementById('e1').value;
    var e2 = document.getElementById('e2').value;
    var e3 = document.getElementById('e3').value;
    var e4 = document.getElementById('e4').value;
    var e5 = document.getElementById('e5').value;


    var c1 = document.getElementById('c1').value;
    var c2 = document.getElementById('c2').value;
    var c3 = document.getElementById('c3').value;
    var c4 = document.getElementById('c4').value;
    var c5 = document.getElementById('c5').value;

    var f1 = document.getElementById('f1').value;
    var f2 = document.getElementById('f2').value;
    var f3 = document.getElementById('f3').value;
    var f4 = document.getElementById('f4').value;
    var f5 = document.getElementById('f5').value;


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
        resp2_18 = 0,
        resp2_19 = 0,
        resp2_20 = 0,
        resp2_21 = 0,
        resp2_22 = 0,
        resp2_23 = 0,
        resp2_24 = 0,
        resp2_25 = 0;
    ///////////////////////////////////////////////////////////////////
    if ((d1 == "74 + (6 + 54)") || (d1 == "74+(6+54)")) {
        resp2_1 = 1;
        $('#d1').css("background", "#00e600");


    } else {
        $('#d1').css("background", "#ff6666");

    }
    if (d2 == "134") {
        resp2_2 = 1;
        $('#d2').css("background", "#00e600");


    } else {
        $('#d2').css("background", "#ff6666");

    }
    if ((d3 == "74 + 60") || (d3 == "74+60")) {
        resp2_3 = 1;
        $('#d3').css("background", "#00e600");


    } else {
        $('#d3').css("background", "#ff6666");

    }
    if (d4 == "134") {
        resp2_4 = 1;
        $('#d4').css("background", "#00e600");


    } else {
        $('#d4').css("background", "#ff6666");

    }
    if (d5 == "134") {
        resp2_5 = 1;
        $('#d5').css("background", "#00e600");


    } else {
        $('#d5').css("background", "#ff6666");

    }

    ///////////////////////////////////////////////////////////////
    if ((b1 == "21+ (36 +24)") || (b1 == "21+ (36 +24)")) {
        resp2_6 = 1;
        $('#b1').css("background", "#00e600");


    } else {
        $('#b1').css("background", "#ff6666");

    }
    if (b2 == "81") {
        resp2_7 = 1;
        $('#b2').css("background", "#00e600");


    } else {
        $('#b2').css("background", "#ff6666");

    }

    if ((b3 == "21 + 60") || (b3 == "21+60")) {
        resp2_8 = 1;
        $('#b3').css("background", "#00e600");


    } else {
        $('#b3').css("background", "#ff6666");

    }
    if (b4 == "81") {
        resp2_9 = 1;
        $('#b4').css("background", "#00e600");


    } else {
        $('#b4').css("background", "#ff6666");

    }
    if (b5 == "81") {
        resp2_10 = 1;
        $('#b5').css("background", "#00e600");


    } else {
        $('#b5').css("background", "#ff6666");

    }
    ///////////////////////////////////////////////////////////////
    if ((e1 == "(61 + 19) +25") || (e1 == "(61+19)+25")) {
        resp2_11 = 1;
        $('#e1').css("background", "#00e600");


    } else {
        $('#e1').css("background", "#ff6666");

    }
    if (e2 == "105") {
        resp2_12 = 1;
        $('#e2').css("background", "#00e600");


    } else {
        $('#e2').css("background", "#ff6666");

    }

    if ((e3 == "80 + 25") || (e3 == "80+25")) {
        resp2_13 = 1;
        $('#e3').css("background", "#00e600");


    } else {
        $('#e3').css("background", "#ff6666");

    }
    if (e4 == "105") {
        resp2_14 = 1;
        $('#e4').css("background", "#00e600");


    } else {
        $('#e4').css("background", "#ff6666");

    }
    if (e5 == "105") {
        resp2_15 = 1;
        $('#e5').css("background", "#00e600");


    } else {
        $('#e5').css("background", "#ff6666");

    }

    ///////////////////////////////////////////////////////////////
    if ((c1 == "(42 + 53) + 15") || (c1 == "(42+53)+15")) {
        resp2_16 = 1;
        $('#c1').css("background", "#00e600");


    } else {
        $('#c1').css("background", "#ff6666");

    }
    if (c2 == "110") {
        resp2_17 = 1;
        $('#c2').css("background", "#00e600");


    } else {
        $('#c2').css("background", "#ff6666");

    }
    if ((c3 == "95 + 15") || (c3 == "95+15")) {
        resp2_18 = 1;
        $('#c3').css("background", "#00e600");


    } else {
        $('#c3').css("background", "#ff6666");

    }
    if (c4 == "110") {
        resp2_19 = 1;
        $('#c4').css("background", "#00e600");


    } else {
        $('#c4').css("background", "#ff6666");

    }
    if (c5 == "110") {
        resp2_20 = 1;
        $('#c5').css("background", "#00e600");


    } else {
        $('#c5').css("background", "#ff6666");

    }
    ///////////////////////////////////////////////////////////////
    if ((f1 == "(8 + 12) + (45 + 15)") || (f1 == "(8+12)+(45+15)")) {
        resp2_21 = 1;
        $('#f1').css("background", "#00e600");


    } else {
        $('#f1').css("background", "#ff6666");

    }
    if (f2 == "80") {
        resp2_22 = 1;
        $('#f2').css("background", "#00e600");


    } else {
        $('#f2').css("background", "#ff6666");

    }
    if ((f3 == "20 + 60") || (f3 == "20+60")) {
        resp2_23 = 1;
        $('#f3').css("background", "#00e600");


    } else {
        $('#f3').css("background", "#ff6666");

    }
    if (f4 == "80") {
        resp2_24 = 1;
        $('#f4').css("background", "#00e600");


    } else {
        $('#f4').css("background", "#ff6666");

    }
    if (f5 == "80") {
        resp2_25 = 1;
        $('#f5').css("background", "#00e600");


    } else {
        $('#f5').css("background", "#ff6666");

    }

    var subtotal1 = parseInt(resp2_1) + parseInt(resp2_2) + parseInt(resp2_3) + parseInt(resp2_4) + parseInt(resp2_5) + parseInt(resp2_6) + parseInt(resp2_7) + parseInt(resp2_8) + parseInt(resp2_9) + parseInt(resp2_10);
    var subtotal2 = parseInt(resp2_11) + parseInt(resp2_12) + parseInt(resp2_13) + parseInt(resp2_14) + parseInt(resp2_15) + parseInt(resp2_16) + parseInt(resp2_17) + parseInt(resp2_18) + parseInt(resp2_19) + parseInt(resp2_20);
    var subtotal3 = parseInt(resp2_21) + parseInt(resp2_22) + parseInt(resp2_23) + parseInt(resp2_24) + parseInt(resp2_25);
    var total1 = parseInt(subtotal1) + parseInt(subtotal2) + parseInt(subtotal3);
    var total = (total1 * 10) / 25;
    $('#txtNota').html(total.toFixed(2));
    document.getElementById('bt_comprobar').disabled = true;
    $('input').attr("disabled", true);
    $('#txtAlumno').attr("disabled", false);


}
