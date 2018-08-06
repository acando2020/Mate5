var tablas = [
    ['<table>' +
        '<tr>' +
        '<td>362 + 133</td>' +
        '</tr>' +
        ' <tr>' +
        '<td colspan="2">' +
        '<input type="text" style="text-align: center;" id="c1" class="form-control" name="">' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td colspan="2">' +
        '<input type="text" style="text-align: center;" id="c2" class="form-control" name="">' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td style="width: 40%"></td>' +
        '<td style="width: 60%">' +
        '<input type="text"  id="c3" class="form-control" name="">' +
        '</td>' +
        '</tr>' +
        '</table>'
    ],
    [' <table>' +
        '<tr>' +
        '<td>761 + 247</td>' +
        '</tr>' +
        '<tr>' +
        '<td colspan="2">' +
        '<input type="text" style="text-align: center;" id="e1" class="form-control" name="">' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td colspan="2">' +
        '<input type="text" style="text-align: center;" id="e2" class="form-control" name="">' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td style="width: 40%"></td>' +
        '<td style="width:600%">' +
        '<input type="text" id="e3" class="form-control" name="">' +
        '</td>' +
        '</tr>' +
        '</table>'
    ],
    ['<table>' +
        '<tr>' +
        '<td>79 + 63</td>' +
        '</tr>' +
        '<tr>' +
        '<td colspan="2">' +
        '<input type="text" style="text-align: center;" id="b1" class="form-control" name="">' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td colspan="2">' +
        '<input type="text" style="text-align: center;" id="b2" class="form-control" name="">' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td style="width: 40%"></td>' +
        '<td style="width:600%">' +
        '<input type="text" id="b3" class="form-control" name="">' +
        '</td>' +
        '</tr>' +
        '</table>'
    ],
    [' <table>' +
        '<tr>' +
        '<td>413 + 572</td>' +
        '</tr>' +
        '<tr>' +
        '<td colspan="2">' +
        '<input type="text" style="text-align: center;" id="d1" class="form-control" name="">' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td colspan="2">' +
        '<input type="text" style="text-align: center;" id="d2" class="form-control" name="">' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td style="width: 40%"></td>' +
        '<td style="width: 60%">' +
        '<input type="text" id="d3" class="form-control" name="">' +
        '</td>' +
        '</tr>' +
        '</table>'
    ],
    [' <table>' +
        '<tr>' +
        '<td>806 + 194</td>' +
        '</tr>' +
        '<tr>' +
        '<td colspan="2">' +
        '<input type="text" style="text-align: center;" id="f1" class="form-control" name="">' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td colspan="2">' +
        '<input type="text" style="text-align: center;" id="f2" class="form-control" name="">' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td style="width: 40%"></td>' +
        '<td style="width: 60%">' +
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

function actividad25() {
    var c1 = document.getElementById('c1').value;
    var c2 = document.getElementById('c2').value;
    var c3 = document.getElementById('c3').value;

    var e1 = document.getElementById('e1').value;
    var e2 = document.getElementById('e2').value;
    var e3 = document.getElementById('e3').value;

    var b1 = document.getElementById('b1').value;
    var b2 = document.getElementById('b2').value;
    var b3 = document.getElementById('b3').value;

    var d1 = document.getElementById('d1').value;
    var d2 = document.getElementById('d2').value;
    var d3 = document.getElementById('d3').value;

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
    ///////////////////////////////////////////////////////////////
    if ((c1 == "362 = 300 + 60 + 2") || (c1 == "362=300+60+2")) {
        resp2_1 = 1;
        $('#c1').css("background", "#00e600");


    } else {
        $('#c1').css("background", "#ff6666");

    }
    if ((c2 == "133 = 100 + 30 + 3") || (c2 == "133=100+30+3")) {
        resp2_2 = 1;
        $('#c2').css("background", "#00e600");


    } else {
        $('#c2').css("background", "#ff6666");

    }
    if ((c3 == "400 + 90 + 5 = 496") || (c3 == "400+90+5=496")) {
        resp2_3 = 1;
        $('#c3').css("background", "#00e600");


    } else {
        $('#c3').css("background", "#ff6666");

    }
    ///////////////////////////////////////////////////////////////
    if ((e1 == "761 = 700 + 60 + 1") || (e1 == "761=700+60+1")) {
        resp2_4 = 1;
        $('#e1').css("background", "#00e600");


    } else {
        $('#e1').css("background", "#ff6666");

    }
    if ((e2 == "247 = 200 + 40 + 7") || (e2 == "247=200+40+7")) {
        resp2_5 = 1;
        $('#e2').css("background", "#00e600");


    } else {
        $('#e2').css("background", "#ff6666");

    }
    if ((e3 == "900 + 100 + 8 = 1 008") || (e3 == "900+100+8=1008")) {
        resp2_6 = 1;
        $('#e3').css("background", "#00e600");


    } else {
        $('#e3').css("background", "#ff6666");

    }
    ///////////////////////////////////////////////////////////////
    if ((b1 == "79 = 70 + 9") || (b1 == "79=70+9")) {
        resp2_7 = 1;
        $('#b1').css("background", "#00e600");


    } else {
        $('#b1').css("background", "#ff6666");

    }
    if ((b2 == "63 = 60 + 3") || (b2 == "63=60+3")) {
        resp2_8 = 1;
        $('#b2').css("background", "#00e600");


    } else {
        $('#b2').css("background", "#ff6666");

    }
    if ((b3 == "130 + 12 = 142") || (b3 == "130+12=142")) {
        resp2_9 = 1;
        $('#b3').css("background", "#00e600");


    } else {
        $('#b3').css("background", "#ff6666");

    }
    ////////////////////////////////////////////////////////
    if ((d1 == "413 = 400 + 10 + 3") || (d1 == "413=400+10+3")) {
        resp2_10 = 1;
        $('#d1').css("background", "#00e600");


    } else {
        $('#d1').css("background", "#ff6666");

    }
    if ((d2 == "572 = 500 + 70 + 2") || (d2 == "572=500+70+2")) {
        resp2_11 = 1;
        $('#d2').css("background", "#00e600");


    } else {
        $('#d2').css("background", "#ff6666");

    }

    if ((d3 == "900 + 80 + 5 = 985") || (d3 == "900+80+5=985")) {
        resp2_12 = 1;
        $('#d3').css("background", "#00e600");


    } else {
        $('#d3').css("background", "#ff6666");

    }




    ///////////////////////////////////////////////////////////////
    if ((f1 == "806 = 800 + 6") || (f1 == "806=800+6")) {
        resp2_13 = 1;
        $('#f1').css("background", "#00e600");


    } else {
        $('#f1').css("background", "#ff6666");

    }
    if ((f2 == "194 = 100 + 90 + 4") || (f2 == "194=100+90+4")) {
        resp2_14 = 1;
        $('#f2').css("background", "#00e600");


    } else {
        $('#f2').css("background", "#ff6666");

    }
    if ((f3 == "900 + 90 + 10 = 1000") || (f3 == "900+90+10=1000")) {
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
