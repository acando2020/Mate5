function sinEspacios(inputs) {
    $(inputs).on('keypress', function(e) {
        if (e.which == 32)
            return false;
    });
}
sinEspacios(".sinEspacios");


var tablas = [
    [' <td style="background: #EAF6FD;">35 × (10 + 2) = (35 × 10) + (35 × 2)</td>' +
        '<td><input type="number" id="act1_1" ></input></td>' +
        '<td><input type="text" id="act1_2" class="sinEspacios text-lowercase"></input></td>'
    ],
    ['<td style="background: #EAF6FD;">20 × (4 × 5) = (20 × 5) × 4</td>' +
        '<td><input type="number" id="act1_3" ></input></td>' +
        '<td><input type="text" id="act1_4" class="sinEspacios text-lowercase"></input></td>'
    ],
    [' <td style="background: #EAF6FD;">40 × (7 – 5) = (40 × 7) – (40 × 5)</td>' +
        '<td><input type="number" id="act1_5" ></input></td>' +
        '<td><input type="text" id="act1_6" class="sinEspacios text-lowercase"></input></td>'
    ],
];

function actividad86_1() {

    var act1_1 = document.getElementById('act1_1').value;
    var act1_2 = document.getElementById('act1_2').value.toLowerCase();
    var act1_3 = document.getElementById('act1_3').value;
    var act1_4 = document.getElementById('act1_4').value.toLowerCase();
    var act1_5 = document.getElementById('act1_5').value;
    var act1_6 = document.getElementById('act1_6').value.toLowerCase();
    var nt1 = 0,
        nt2 = 0,
        nt3 = 0,
        nt4 = 0,
        nt5 = 0,
        nt6 = 0;
    if (act1_1 == "420") {
        nt1 = 1;
        $('#act1_1').css("background", "#00e600");

    } else {
        $('#act1_1').css("background", "#ff6666");

    }
    if (act1_2 == "distributiva") {
        nt2 = 1;
        $('#act1_2').css("background", "#00e600");

    } else {
        $('#act1_2').css("background", "#ff6666");

    }

    if (act1_3 == "400") {
        nt3 = 1;
        $('#act1_3').css("background", "#00e600");

    } else {
        $('#act1_3').css("background", "#ff6666");

    }

    if (act1_4 == "asociativa y conmutativa") {
        nt4 = 1;
        $('#act1_4').css("background", "#00e600");

    } else {
        $('#act1_4').css("background", "#ff6666");

    }
    if (act1_5 == "80") {
        nt5 = 1;
        $('#act1_5').css("background", "#00e600");

    } else {
        $('#act1_5').css("background", "#ff6666");

    }
    if (act1_6 == "distributiva") {
        nt6 = 1;
        $('#act1_6').css("background", "#00e600");

    } else {
        $('#act1_6').css("background", "#ff6666");

    }
    var subtotal = parseFloat(nt1) + parseFloat(nt2) + parseFloat(nt3) + parseFloat(nt4) + parseFloat(nt5) + parseFloat(nt6);
    var total = (subtotal * 5) / 6;
    $('#nota1').val(parseFloat(total).toFixed(2));
}

var tbl = document.getElementsByClassName('act86');
tablas.sort(f_randomico);
for (i = 0; i < tbl.length; i++) {

    $('#' + tbl[i].id).html(tablas[i]);

}

var act2 = [];
for (var i = 0; i < 10; i++) {
    act2[i] = Math.floor((Math.random() * 20) + 11);

}

var act2_1 = [];
for (var i = 0; i < 10; i++) {
    act2_1[i] = Math.floor((Math.random() * 9) + 2);

}
$('#num1').html('' + act2_1[0] + ' × (' + act2[1] + ' × ' + act2[2] + ')')
$('#num2').html('(' + act2_1[0] + ' × ' + act2[1] + ') × ' + act2[2] + '')
$('#num3').html('' + act2[6] + ' × (' + act2_1[7] + ' × ' + act2_1[8] + ')')


function actividad86_2() {
    var num1 = parseInt(act2_1[0]) * parseInt(act2[1]) * parseInt(act2[2]);
    var num2 = parseInt(act2[6]) * parseInt(act2_1[7]) * parseInt(act2_1[8]);
    var act86_1 = document.getElementById('act86_1').value;
    var act86_2 = document.getElementById('act86_2').value;
    var act86_3 = document.getElementById('act86_3').value;
    var act86_4 = document.getElementById('act86_4').value;
    var nt1 = 0,
        nt2 = 0,
        nt3 = 0,
        nt4 = 0;
    if (act86_1 == num1) {
        nt1 = 1.25;
        $('#act86_1').css("background", "#00e600");

    } else {
        $('#act86_1').css("background", "#ff6666");

    }
    if (act86_2 == num1) {
        nt2 = 1.25;
        $('#act86_2').css("background", "#00e600");

    } else {
        $('#act86_2').css("background", "#ff6666");

    }

    if (act86_3 == num2) {
        nt3 = 1.25;
        $('#act86_3').css("background", "#00e600");

    } else {
        $('#act86_3').css("background", "#ff6666");

    }

    if (act86_4 == num2) {
        nt4 = 1.25;
        $('#act86_4').css("background", "#00e600");

    } else {
        $('#act86_4').css("background", "#ff6666");

    }
    var total = parseFloat(nt1) + parseFloat(nt2) + parseFloat(nt3) + parseFloat(nt4);
    $('#nota2').val(parseFloat(total).toFixed(2));
}


function actividad86() {
    actividad86_1();
    actividad86_2();

    var nota1 = document.getElementById('nota1').value;
    var nota2 = document.getElementById('nota2').value;
    var total = parseFloat(nota1) + parseFloat(nota2);
    $('#txtNota').html(total.toFixed(2));
    document.getElementById('bt_comprobar').disabled = true;
    $('input').attr("disabled", true);
    $('#txtAlumno').attr("disabled", false);

}
