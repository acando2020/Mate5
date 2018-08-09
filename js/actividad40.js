var act40 = [
    [' <td>• Volcán activo</td>' +
        '<td>(' +
        '<input type="number" id="num1" name="">;</td>' +
        '<td>' +
        '<input type="number" id="num2" name="">)</td>'
    ],
    ['  <td>• Volcán apagado</td>' +
        '<td>(' +
        '<input type="number" id="num3" name="">;</td>' +
        '<td>' +
        '<input type="number" id="num4" name="">)</td>'
    ],
    [' <td>• Montaña</td>' +
        '<td>(' +
        '<input type="number" id="num5" name="">;</td>' +
        '<td>' +
        '<input type="number" id="num6" name="">)</td>'
    ],
    ['<td>• Cerro</td>' +
        '<td>(' +
        '<input type="number" id="num7" name="">;</td>' +
        '<td>' +
        '<input type="number" id="num8" name="">)</td>'
    ],
    [' <td>• Colina</td>' +
        '<td>(' +
        '<input type="number" id="num9" name="">;</td>' +
        '<td>' +
        '<input type="number" id="num10" name="">)</td>'
    ],
    ['<td>• Nevado</td>' +
        '<td>(' +
        '<input type="number" id="num11" name="">;</td>' +
        '<td>' +
        '<input type="number" id="num12" name="">)</td>'
    ],
];

var completar = document.getElementsByClassName('com');
act40.sort(f_randomico);
for (i = 0; i < completar.length; i++) {

    $('#' + completar[i].id).html(act40[i]);

}

function sinEspacios(inputs) {
    $(inputs).on('keypress', function(e) {
        if (e.which == 32)
            return false;
    });
}
sinEspacios(".text-question input");

function actividad40() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var num3 = document.getElementById('num3').value;
    var num4 = document.getElementById('num4').value;
    var num5 = document.getElementById('num5').value;
    var num6 = document.getElementById('num6').value;
    var num7 = document.getElementById('num7').value;
    var num8 = document.getElementById('num8').value;
    var num9 = document.getElementById('num9').value;
    var num10 = document.getElementById('num10').value;
    var num11 = document.getElementById('num11').value;
    var num12 = document.getElementById('num12').value;

    var r1 = 0,
        r2 = 0,
        r3 = 0,
        r4 = 0,
        r5 = 0,
        r6 = 0,
        r7 = 0,
        r8 = 0,
        r9 = 0,
        r10 = 0,
        r11 = 0,
        r12 = 0;
    if (num1 == "8") {
        $('#num1').css("background", "#00e600");
        r1 = 1;

    } else {
        $('#num1').css("background", "#ff6666");

    }
    if (num2 == "3") {
        $('#num2').css("background", "#00e600");
        r2 = 1;

    } else {
        $('#num2').css("background", "#ff6666");

    }
    if (num3 == "2") {
        $('#num3').css("background", "#00e600");
        r3 = 1;

    } else {
        $('#num3').css("background", "#ff6666");

    }
    if (num4 == "5") {
        $('#num4').css("background", "#00e600");
        r4 = 1;

    } else {
        $('#num4').css("background", "#ff6666");

    }
    if (num5 == "2") {
        $('#num5').css("background", "#00e600");
        r5 = 1;

    } else {
        $('#num5').css("background", "#ff6666");

    }
    if (num6 == "2") {
        $('#num6').css("background", "#00e600");
        r6 = 1;

    } else {
        $('#num6').css("background", "#ff6666");

    }


    if (num7 == "6") {
        $('#num7').css("background", "#00e600");
        r7 = 1;

    } else {
        $('#num7').css("background", "#ff6666");

    }
    if (num8 == "3") {
        $('#num8').css("background", "#00e600");
        r8 = 1;

    } else {
        $('#num8').css("background", "#ff6666");

    }
    if (num9 == "3") {
        $('#num9').css("background", "#00e600");
        r9 = 1;

    } else {
        $('#num9').css("background", "#ff6666");

    }
    if (num10 == "1") {
        $('#num10').css("background", "#00e600");
        r10 = 1;

    } else {
        $('#num10').css("background", "#ff6666");

    }
    if (num11 == "2") {
        $('#num11').css("background", "#00e600");
        r11 = 1;

    } else {
        $('#num11').css("background", "#ff6666");

    }
    if (num12 == "4") {
        $('#num12').css("background", "#00e600");
        r12 = 1;

    } else {
        $('#num12').css("background", "#ff6666");

    }
    var subtotal = parseInt(r1) + parseInt(r2) + parseInt(r3) + parseInt(r4) + parseInt(r5) + parseInt(r6) + parseInt(r7) + parseInt(r8) + parseInt(r9) + parseInt(r10) + parseInt(r11) + parseInt(r12);
    var total = (subtotal * 10) / 12;
    $('#txtNota').html(total.toFixed(2));
    document.getElementById('bt_comprobar').disabled = true;
    $('input').attr("disabled", true);
    $('#txtAlumno').attr("disabled", false);



}
