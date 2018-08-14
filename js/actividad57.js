var act13 = [
    ['<td>El segmento <span class="sobrelinea">OA</span> mide 3 cm.</td>' +
        '<td>' +
        '<input type="text" id="txt1" maxlength="1" class="text-uppercase" name="">' +
        '</td>'
    ],
    ['<td>El segmento <span class="sobrelinea">OC</span> mide 9 cm.</td>' +
        '<td>' +
        '<input type="text" id="txt2" maxlength="1" class="text-uppercase" name="">' +
        '</td>'
    ],
    [' <td>El segmento <span class="sobrelinea">DE</span> mide 4 cm.</td>' +
        '<td>' +
        '<input type="text" id="txt3" maxlength="1" class="text-uppercase" name="">' +
        '</td>'
    ],
    ['  <td>El segmento <span class="sobrelinea">OF</span> tiene mide 12 cm.</td>' +
        '<td>' +
        '<input type="text" id="txt4" maxlength="1" class="text-uppercase" name="">' +
        '</td>'
    ],
    [' <td>El punto O es el origen de la figura</td>' +
        '<td>' +
        '<input type="text" id="txt5" maxlength="1" class="text-uppercase" name="">' +
        '</td>'
    ],
]
var sumaNum = document.getElementsByClassName('sum');
act13.sort(f_randomico);
for (i = 0; i < sumaNum.length; i++) {

    $('#' + sumaNum[i].id).html(act13[i][0]);

}

function sinEspacios(inputs) {
    $(inputs).on('keypress', function(e) {
        if (e.which == 32)
            return false;
    });
}
sinEspacios(".text-question input");

function actividad57() {
    var txt1 = document.getElementById('txt1').value.toUpperCase();
    var txt2 = document.getElementById('txt2').value.toUpperCase();
    var txt3 = document.getElementById('txt3').value.toUpperCase();
    var txt4 = document.getElementById('txt4').value.toUpperCase();
    var txt5 = document.getElementById('txt5').value.toUpperCase();

    var RsA2_1 = 0,
        RsA2_2 = 0,
        RsA2_3 = 0,
        RsA2_4 = 0,
        RsA2_5 = 0,
        RsA2_6 = 0,
        RsA2_7 = 0,
        RsA2_8 = 0;
    if (txt1 == "V") {
        RsA2_1 = 1;
        $('#txt1').css("background", "#00e600");

    } else {
        $('#txt1').css("background", "#ff6666");

    }
    if (txt2 == "F") {
        RsA2_2 = 1;
        $('#txt2').css("background", "#00e600");

    } else {
        $('#txt2').css("background", "#ff6666");

    }
    if (txt3 == "V") {
        RsA2_3 = 1;

        $('#txt3').css("background", "#00e600");


    } else {
        $('#txt3').css("background", "#ff6666");

    }
    if (txt4 == "V") {
        RsA2_4 = 1;

        $('#txt4').css("background", "#00e600");


    } else {
        $('#txt4').css("background", "#ff6666");

    }
    if (txt5 == "V") {
        RsA2_5 = 1;
        $('#txt5').css("background", "#00e600");

    } else {
        $('#txt5').css("background", "#ff6666");

    }


    var subtotal = parseFloat(RsA2_1) + parseFloat(RsA2_2) + parseFloat(RsA2_3) + parseFloat(RsA2_4) + parseFloat(RsA2_5);
    var total = (subtotal * 10) / 5;
    $('#txtNota').html(total.toFixed(2));
    document.getElementById('bt_comprobar').disabled = true;
    $('input').attr("disabled", true);
    $('#txtAlumno').attr("disabled", false);
}
