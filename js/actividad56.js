var act13 = [
    [' <td class="sobrelinea">OB</td>' +
        '<td>=</td>' +
        '<td>' +
        '<input type="text" id="txt1" name="" class="text-lowercase" maxlength="3">' +
        '</td>'
    ],
    ['<td class="sobrelinea">' +
        'OD' +
        '</td>' +
        '<td>=</td>' +
        '<td>' +
        '<input type="text" id="txt2" name="" class="text-lowercase" maxlength="3">' +
        '</td>'
    ],
    ['<td class="sobrelinea">' +
        'OC' +
        '</td>' +
        '<td>=</td>' +
        '<td>' +
        '<input type="text" id="txt3" name="" class="text-lowercase" maxlength="3">' +
        '</td>'
    ],
    [' <td class="sobrelinea">CD</td>' +
        '<td>=</td>' +
        '<td>' +
        '<input type="text" id="txt4" name="" class="text-lowercase" maxlength="3">' +
        '</td>'
    ],
    ['<td class="sobrelinea">OA</td>' +
        '<td>=</td>' +
        '<td>' +
        '<input type="text" id="txt5" name="" class="text-lowercase" maxlength="3">' +
        '</td>'
    ],
    [' <td class="sobrelinea">AC</td>' +
        '<td>=</td>' +
        '<td>' +
        '<input type="text" id="txt6" name="" class="text-lowercase" maxlength="3">' +
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

function actividad56() {
    var txt1 = document.getElementById('txt1').value.toLowerCase();
    var txt2 = document.getElementById('txt2').value.toLowerCase();
    var txt3 = document.getElementById('txt3').value.toLowerCase();
    var txt4 = document.getElementById('txt4').value.toLowerCase();
    var txt5 = document.getElementById('txt5').value.toLowerCase();
    var txt6 = document.getElementById('txt6').value.toLowerCase();
    var txt7 = document.getElementById('txt7').value.toUpperCase();
    var txt8 = document.getElementById('txt8').value.toUpperCase();
    var txt9 = document.getElementById('txt9').value.toUpperCase();
    var RsA2_1 = 0,
        RsA2_2 = 0,
        RsA2_3 = 0,
        RsA2_4 = 0,
        RsA2_5 = 0,
        RsA2_6 = 0,
        RsA2_7 = 0,
        RsA2_8 = 0;
    if ((txt1 == "7 cm") || (txt1 == "7cm") || (txt1 == "7")) {
        RsA2_1 = 1;
        $('#txt1').css("background", "#00e600");

    } else {
        $('#txt1').css("background", "#ff6666");

    }
    if ((txt2 == "8 cm") || (txt2 == "8cm") || (txt2 == "8")) {
        RsA2_2 = 1;
        $('#txt2').css("background", "#00e600");

    } else {
        $('#txt2').css("background", "#ff6666");

    }
    if ((txt3 == "6 cm") || (txt3 == "6cm") || (txt3 == "6")) {
        RsA2_3 = 1;

        $('#txt3').css("background", "#00e600");


    } else {
        $('#txt3').css("background", "#ff6666");

    }
    if ((txt4 == "5 cm") || (txt4 == "5cm") || (txt4 == "5")) {
        RsA2_4 = 1;

        $('#txt4').css("background", "#00e600");


    } else {
        $('#txt4').css("background", "#ff6666");

    }
    if ((txt5 == "5 cm") || (txt5 == "5cm") || (txt5 == "5")) {
        RsA2_5 = 1;
        $('#txt5').css("background", "#00e600");

    } else {
        $('#txt5').css("background", "#ff6666");

    }
    if ((txt6 == "1 cm") || (txt6 == "1cm") || (txt6 == "1")) {
        RsA2_6 = 1;
        $('#txt6').css("background", "#00e600");

    } else {
        $('#txt6').css("background", "#ff6666");

    }



    if ((txt7 == "O") || (txt7 == "A") || (txt7 == "D") || (txt7 == "B") || (txt7 == "C")) {
        RsA2_7 = 1;

        $('#txt7').css("background", "#00e600");


    } else {
        $('#txt7').css("background", "#ff6666");

    }


    if (txt7 == txt8) {
        $('#txt8').css("background", "#ff6666");


    } else {
        if ((txt8 == "O") || (txt8 == "A") || (txt8 == "D") || (txt8 == "B") || (txt8 == "C")) {
            RsA2_8 = 1;

            $('#txt8').css("background", "#00e600");


        } else {
            $('#txt8').css("background", "#ff6666");

        }

    }

    if ((txt7 == txt9) || (txt8 == txt9)) {
        $('#txt9').css("background", "#ff6666");


    } else {
        if ((txt9 == "O") || (txt9 == "A") || (txt9 == "D") || (txt9 == "B") || (txt9 == "C")) {
            RsA2_8 = 1;

            $('#txt9').css("background", "#00e600");


        } else {
            $('#txt9').css("background", "#ff6666");

        }

    }


    var subtotal = parseFloat(RsA2_1) + parseFloat(RsA2_2) + parseFloat(RsA2_3) + parseFloat(RsA2_4) + parseFloat(RsA2_5) + parseFloat(RsA2_6) + parseFloat(RsA2_7) + parseFloat(RsA2_8);
    var total = (subtotal * 10) / 8;
    $('#txtNota').html(total.toFixed(2));
    document.getElementById('bt_comprobar').disabled = true;
    $('input').attr("disabled", true);
    $('#txtAlumno').attr("disabled", false);
}
