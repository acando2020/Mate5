var tablas = [
    ['<table>' +
        '<tr>' +
        '<td>36 + 42 =</td>' +
        '<td>' +
        '<input type="text" id="d1" class="form-control" name="">' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td>=</td>' +
        '<td>' +
        '<input type="text" id="d2" class="form-control" name="">' +
        '</td>' +
        '</tr>' +
        '</table>'
    ],
    [' <table>' +
        '<tr>' +
        '<td>245 + 25 =</td>' +
        '<td>' +
        '<input type="text" id="g1" class="form-control" name="">' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td>=</td>' +
        '<td>' +
        '<input type="text" id="g2" class="form-control" name="">' +
        '</td>' +
        '</tr>' +
        '</table>'
    ],
    [' <table>' +
        '<tr>' +
        '<td>76 + 34 =</td>' +
        '<td>' +
        '<input type="text" id="b1" class="form-control" name="">' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td>=</td>' +
        '<td>' +
        '<input type="text" id="b2" class="form-control" name="">' +
        '</td>' +
        '</tr>' +
        '</table>'
    ],
    ['<table>' +
        '<tr>' +
        '<td>91 + 17 =</td>' +
        '<td>' +
        '<input type="text" id="e1" class="form-control" name="">' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td>=</td>' +
        '<td>' +
        '<input type="text" id="e2" class="form-control" name="">' +
        '</td>' +
        '</tr>' +
        '</table>'
    ],
    ['<table>' +
        '<tr>' +
        '<td>606 + 214 =</td>' +
        '<td>' +
        '<input type="text" id="h1" class="form-control" name="">' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td>=</td>' +
        '<td>' +
        '<input type="text" id="h2" class="form-control" name="">' +
        '</td>' +
        '</tr>' +
        '</table>'
    ],
    [' <table>' +
        '<tr>' +
        '<td>45 + 83 =</td>' +
        '<td>' +
        '<input type="text" id="c1" class="form-control" name="">' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td>=</td>' +
        '<td>' +
        '<input type="text" id="c2" class="form-control" name="">' +
        '</td>' +
        '</tr>' +
        '</table>'
    ],
    ['<table>' +
        '<tr>' +
        '<td>53 + 104 =</td>' +
        '<td>' +
        '<input type="text" id="f1" class="form-control" name="">' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td>=</td>' +
        '<td>' +
        '<input type="text" id="f2" class="form-control" name="">' +
        '</td>' +
        '</tr>' +
        '</table>'
    ],
    [' <table>' +
        '<tr>' +
        '<td>569 + 301 =</td>' +
        '<td>' +
        '<input type="text"  id="i1" class="form-control" name="">' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td>=</td>' +
        '<td>' +
        '<input type="text"  id="i2" class="form-control" name="">' +
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

function actividad22() {
    var d1 = document.getElementById('d1').value;
    var d2 = document.getElementById('d2').value;
    var g1 = document.getElementById('g1').value;
    var g2 = document.getElementById('g2').value;
    var b1 = document.getElementById('b1').value;
    var b2 = document.getElementById('b2').value;
    var e1 = document.getElementById('e1').value;
    var e2 = document.getElementById('e2').value;
    var h1 = document.getElementById('h1').value;
    var h2 = document.getElementById('h2').value;
    var c1 = document.getElementById('c1').value;
    var c2 = document.getElementById('c2').value;
    var f1 = document.getElementById('f1').value;
    var f2 = document.getElementById('f2').value;
    var i1 = document.getElementById('i1').value;
    var i2 = document.getElementById('i2').value;
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
    if ((d1 == "38 + 40") || (d1 == "38+40")) {
        resp2_1 = 1;
        $('#d1').css("background", "#00e600");


    } else {
        $('#d1').css("background", "#ff6666");

    }
    if (d2 == "78") {
        resp2_2 = 1;
        $('#d2').css("background", "#00e600");


    } else {
        $('#d2').css("background", "#ff6666");

    }
    ///////////////////////////////////////////////////////////////
    if ((g1 == "240 + 30") || (g1 == "240+30")) {
        resp2_3 = 1;
        $('#g1').css("background", "#00e600");


    } else {
        $('#g1').css("background", "#ff6666");

    }
    if (g2 == "270") {
        resp2_4 = 1;
        $('#g2').css("background", "#00e600");


    } else {
        $('#g2').css("background", "#ff6666");

    }
    ///////////////////////////////////////////////////////////////
    if ((b1 == "80 + 30") || (b1 == "80+30")) {
        resp2_5 = 1;
        $('#b1').css("background", "#00e600");


    } else {
        $('#b1').css("background", "#ff6666");

    }
    if (b2 == "110") {
        resp2_6 = 1;
        $('#b2').css("background", "#00e600");


    } else {
        $('#b2').css("background", "#ff6666");

    }
    ///////////////////////////////////////////////////////////////
    if ((e1 == "90 + 18") || (e1 == "90+18")) {
        resp2_7 = 1;
        $('#e1').css("background", "#00e600");


    } else {
        $('#e1').css("background", "#ff6666");

    }
    if (e2 == "108") {
        resp2_8 = 1;
        $('#e2').css("background", "#00e600");


    } else {
        $('#e2').css("background", "#ff6666");

    }
    ///////////////////////////////////////////////////////////////
    if ((h1 == "610 + 210") || (h1 == "610+210")) {
        resp2_9 = 1;
        $('#h1').css("background", "#00e600");


    } else {
        $('#h1').css("background", "#ff6666");

    }
    if (h2 == "820") {
        resp2_10 = 1;
        $('#h2').css("background", "#00e600");


    } else {
        $('#h2').css("background", "#ff6666");

    }
    ///////////////////////////////////////////////////////////////
    if ((c1 == "48 + 80") || (c1 == "48+80")) {
        resp2_11 = 1;
        $('#c1').css("background", "#00e600");


    } else {
        $('#c1').css("background", "#ff6666");

    }
    if (c2 == "128") {
        resp2_12 = 1;
        $('#c2').css("background", "#00e600");


    } else {
        $('#c2').css("background", "#ff6666");

    }
    ///////////////////////////////////////////////////////////////
    if ((f1 == "57 + 100") || (f1 == "57+100")) {
        resp2_13 = 1;
        $('#f1').css("background", "#00e600");


    } else {
        $('#f1').css("background", "#ff6666");

    }
    if (f2 == "157") {
        resp2_14 = 1;
        $('#f2').css("background", "#00e600");


    } else {
        $('#f2').css("background", "#ff6666");

    }

    ///////////////////////////////////////////////////////////////
    if ((i1 == "570 + 300") || (i1 == "570+300")) {
        resp2_15 = 1;
        $('#i1').css("background", "#00e600");


    } else {
        $('#i1').css("background", "#ff6666");

    }
    if (i2 == "870") {
        resp2_16 = 1;
        $('#i2').css("background", "#00e600");


    } else {
        $('#i2').css("background", "#ff6666");

    }
    var subtotal = parseInt(resp2_1) + parseInt(resp2_2) + parseInt(resp2_3) + parseInt(resp2_4) + parseInt(resp2_5) + parseInt(resp2_6) + parseInt(resp2_7) + parseInt(resp2_8) + parseInt(resp2_9) + parseInt(resp2_10) + parseInt(resp2_11) + parseInt(resp2_12) + parseInt(resp2_13) + parseInt(resp2_14) + parseInt(resp2_15) + parseInt(resp2_16);
    var total = (subtotal * 10) / 16;
    $('#txtNota').html(total.toFixed(2));
    document.getElementById('bt_comprobar').disabled = true;
    $('input').attr("disabled", true);
    $('#txtAlumno').attr("disabled", false);


}
